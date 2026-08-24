package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/shortcut-sdk/go/utility/struct"
)

type ShortcutSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewShortcutSDK(options map[string]any) *ShortcutSDK {
	sdk := &ShortcutSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := MakeConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath([]any{"feature", "test", "active"}, sdk.options) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath([]any{"__derived__", "featureorder"}, sdk.options).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *ShortcutSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *ShortcutSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *ShortcutSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *ShortcutSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *ShortcutSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *ShortcutSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath([]any{"allow", "op"}, sdk.options).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *ShortcutSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath([]any{"allow", "op"}, sdk.options).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("ShortcutSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *ShortcutSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *ShortcutSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath([]any{"data", "errors"}, res).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("ShortcutSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Bulk returns a Bulk entity bound to this client.
// Idiomatic usage: client.Bulk(nil).List(nil, nil) or
// client.Bulk(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Bulk(data map[string]any) ShortcutEntity {
	return NewBulkEntityFunc(sdk, data)
}


// Category returns a Category entity bound to this client.
// Idiomatic usage: client.Category(nil).List(nil, nil) or
// client.Category(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Category(data map[string]any) ShortcutEntity {
	return NewCategoryEntityFunc(sdk, data)
}


// Comment returns a Comment entity bound to this client.
// Idiomatic usage: client.Comment(nil).List(nil, nil) or
// client.Comment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Comment(data map[string]any) ShortcutEntity {
	return NewCommentEntityFunc(sdk, data)
}


// CustomField returns a CustomField entity bound to this client.
// Idiomatic usage: client.CustomField(nil).List(nil, nil) or
// client.CustomField(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) CustomField(data map[string]any) ShortcutEntity {
	return NewCustomFieldEntityFunc(sdk, data)
}


// Disable returns a Disable entity bound to this client.
// Idiomatic usage: client.Disable(nil).List(nil, nil) or
// client.Disable(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Disable(data map[string]any) ShortcutEntity {
	return NewDisableEntityFunc(sdk, data)
}


// DocSlim returns a DocSlim entity bound to this client.
// Idiomatic usage: client.DocSlim(nil).List(nil, nil) or
// client.DocSlim(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) DocSlim(data map[string]any) ShortcutEntity {
	return NewDocSlimEntityFunc(sdk, data)
}


// Enable returns a Enable entity bound to this client.
// Idiomatic usage: client.Enable(nil).List(nil, nil) or
// client.Enable(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Enable(data map[string]any) ShortcutEntity {
	return NewEnableEntityFunc(sdk, data)
}


// EntityTemplate returns a EntityTemplate entity bound to this client.
// Idiomatic usage: client.EntityTemplate(nil).List(nil, nil) or
// client.EntityTemplate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) EntityTemplate(data map[string]any) ShortcutEntity {
	return NewEntityTemplateEntityFunc(sdk, data)
}


// Epic returns a Epic entity bound to this client.
// Idiomatic usage: client.Epic(nil).List(nil, nil) or
// client.Epic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Epic(data map[string]any) ShortcutEntity {
	return NewEpicEntityFunc(sdk, data)
}


// EpicPaginatedResult returns a EpicPaginatedResult entity bound to this client.
// Idiomatic usage: client.EpicPaginatedResult(nil).List(nil, nil) or
// client.EpicPaginatedResult(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) EpicPaginatedResult(data map[string]any) ShortcutEntity {
	return NewEpicPaginatedResultEntityFunc(sdk, data)
}


// EpicUnlinkProductboard returns a EpicUnlinkProductboard entity bound to this client.
// Idiomatic usage: client.EpicUnlinkProductboard(nil).List(nil, nil) or
// client.EpicUnlinkProductboard(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) EpicUnlinkProductboard(data map[string]any) ShortcutEntity {
	return NewEpicUnlinkProductboardEntityFunc(sdk, data)
}


// EpicWorkflow returns a EpicWorkflow entity bound to this client.
// Idiomatic usage: client.EpicWorkflow(nil).List(nil, nil) or
// client.EpicWorkflow(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) EpicWorkflow(data map[string]any) ShortcutEntity {
	return NewEpicWorkflowEntityFunc(sdk, data)
}


// Group returns a Group entity bound to this client.
// Idiomatic usage: client.Group(nil).List(nil, nil) or
// client.Group(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Group(data map[string]any) ShortcutEntity {
	return NewGroupEntityFunc(sdk, data)
}


// Health returns a Health entity bound to this client.
// Idiomatic usage: client.Health(nil).List(nil, nil) or
// client.Health(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Health(data map[string]any) ShortcutEntity {
	return NewHealthEntityFunc(sdk, data)
}


// History returns a History entity bound to this client.
// Idiomatic usage: client.History(nil).List(nil, nil) or
// client.History(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) History(data map[string]any) ShortcutEntity {
	return NewHistoryEntityFunc(sdk, data)
}


// Iteration returns a Iteration entity bound to this client.
// Idiomatic usage: client.Iteration(nil).List(nil, nil) or
// client.Iteration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Iteration(data map[string]any) ShortcutEntity {
	return NewIterationEntityFunc(sdk, data)
}


// KeyResult returns a KeyResult entity bound to this client.
// Idiomatic usage: client.KeyResult(nil).List(nil, nil) or
// client.KeyResult(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) KeyResult(data map[string]any) ShortcutEntity {
	return NewKeyResultEntityFunc(sdk, data)
}


// Label returns a Label entity bound to this client.
// Idiomatic usage: client.Label(nil).List(nil, nil) or
// client.Label(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Label(data map[string]any) ShortcutEntity {
	return NewLabelEntityFunc(sdk, data)
}


// LinkedFile returns a LinkedFile entity bound to this client.
// Idiomatic usage: client.LinkedFile(nil).List(nil, nil) or
// client.LinkedFile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) LinkedFile(data map[string]any) ShortcutEntity {
	return NewLinkedFileEntityFunc(sdk, data)
}


// Member returns a Member entity bound to this client.
// Idiomatic usage: client.Member(nil).List(nil, nil) or
// client.Member(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Member(data map[string]any) ShortcutEntity {
	return NewMemberEntityFunc(sdk, data)
}


// Milestone returns a Milestone entity bound to this client.
// Idiomatic usage: client.Milestone(nil).List(nil, nil) or
// client.Milestone(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Milestone(data map[string]any) ShortcutEntity {
	return NewMilestoneEntityFunc(sdk, data)
}


// Objectif returns a Objectif entity bound to this client.
// Idiomatic usage: client.Objectif(nil).List(nil, nil) or
// client.Objectif(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Objectif(data map[string]any) ShortcutEntity {
	return NewObjectifEntityFunc(sdk, data)
}


// Objective returns a Objective entity bound to this client.
// Idiomatic usage: client.Objective(nil).List(nil, nil) or
// client.Objective(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Objective(data map[string]any) ShortcutEntity {
	return NewObjectiveEntityFunc(sdk, data)
}


// Project returns a Project entity bound to this client.
// Idiomatic usage: client.Project(nil).List(nil, nil) or
// client.Project(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Project(data map[string]any) ShortcutEntity {
	return NewProjectEntityFunc(sdk, data)
}


// Repository returns a Repository entity bound to this client.
// Idiomatic usage: client.Repository(nil).List(nil, nil) or
// client.Repository(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Repository(data map[string]any) ShortcutEntity {
	return NewRepositoryEntityFunc(sdk, data)
}


// Search returns a Search entity bound to this client.
// Idiomatic usage: client.Search(nil).List(nil, nil) or
// client.Search(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Search(data map[string]any) ShortcutEntity {
	return NewSearchEntityFunc(sdk, data)
}


// Story returns a Story entity bound to this client.
// Idiomatic usage: client.Story(nil).List(nil, nil) or
// client.Story(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Story(data map[string]any) ShortcutEntity {
	return NewStoryEntityFunc(sdk, data)
}


// StoryComment returns a StoryComment entity bound to this client.
// Idiomatic usage: client.StoryComment(nil).List(nil, nil) or
// client.StoryComment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) StoryComment(data map[string]any) ShortcutEntity {
	return NewStoryCommentEntityFunc(sdk, data)
}


// StoryLink returns a StoryLink entity bound to this client.
// Idiomatic usage: client.StoryLink(nil).List(nil, nil) or
// client.StoryLink(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) StoryLink(data map[string]any) ShortcutEntity {
	return NewStoryLinkEntityFunc(sdk, data)
}


// StoryReaction returns a StoryReaction entity bound to this client.
// Idiomatic usage: client.StoryReaction(nil).List(nil, nil) or
// client.StoryReaction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) StoryReaction(data map[string]any) ShortcutEntity {
	return NewStoryReactionEntityFunc(sdk, data)
}


// StorySlim returns a StorySlim entity bound to this client.
// Idiomatic usage: client.StorySlim(nil).List(nil, nil) or
// client.StorySlim(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) StorySlim(data map[string]any) ShortcutEntity {
	return NewStorySlimEntityFunc(sdk, data)
}


// Task returns a Task entity bound to this client.
// Idiomatic usage: client.Task(nil).List(nil, nil) or
// client.Task(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Task(data map[string]any) ShortcutEntity {
	return NewTaskEntityFunc(sdk, data)
}


// ThreadedComment returns a ThreadedComment entity bound to this client.
// Idiomatic usage: client.ThreadedComment(nil).List(nil, nil) or
// client.ThreadedComment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) ThreadedComment(data map[string]any) ShortcutEntity {
	return NewThreadedCommentEntityFunc(sdk, data)
}


// UploadedFile returns a UploadedFile entity bound to this client.
// Idiomatic usage: client.UploadedFile(nil).List(nil, nil) or
// client.UploadedFile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) UploadedFile(data map[string]any) ShortcutEntity {
	return NewUploadedFileEntityFunc(sdk, data)
}


// Webhook returns a Webhook entity bound to this client.
// Idiomatic usage: client.Webhook(nil).List(nil, nil) or
// client.Webhook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Webhook(data map[string]any) ShortcutEntity {
	return NewWebhookEntityFunc(sdk, data)
}


// Workflow returns a Workflow entity bound to this client.
// Idiomatic usage: client.Workflow(nil).List(nil, nil) or
// client.Workflow(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ShortcutSDK) Workflow(data map[string]any) ShortcutEntity {
	return NewWorkflowEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *ShortcutSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewShortcutSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}

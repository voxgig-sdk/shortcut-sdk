"use strict";
// Shortcut Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ShortcutSDK = exports.ShortcutEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const BulkEntity_1 = require("./entity/BulkEntity");
const CategoryEntity_1 = require("./entity/CategoryEntity");
const CommentEntity_1 = require("./entity/CommentEntity");
const CustomFieldEntity_1 = require("./entity/CustomFieldEntity");
const DisableEntity_1 = require("./entity/DisableEntity");
const DocSlimEntity_1 = require("./entity/DocSlimEntity");
const EnableEntity_1 = require("./entity/EnableEntity");
const EntityTemplateEntity_1 = require("./entity/EntityTemplateEntity");
const EpicEntity_1 = require("./entity/EpicEntity");
const EpicPaginatedResultEntity_1 = require("./entity/EpicPaginatedResultEntity");
const EpicUnlinkProductboardEntity_1 = require("./entity/EpicUnlinkProductboardEntity");
const EpicWorkflowEntity_1 = require("./entity/EpicWorkflowEntity");
const GroupEntity_1 = require("./entity/GroupEntity");
const HealthEntity_1 = require("./entity/HealthEntity");
const HistoryEntity_1 = require("./entity/HistoryEntity");
const IterationEntity_1 = require("./entity/IterationEntity");
const KeyResultEntity_1 = require("./entity/KeyResultEntity");
const LabelEntity_1 = require("./entity/LabelEntity");
const LinkedFileEntity_1 = require("./entity/LinkedFileEntity");
const MemberEntity_1 = require("./entity/MemberEntity");
const MilestoneEntity_1 = require("./entity/MilestoneEntity");
const ObjectifEntity_1 = require("./entity/ObjectifEntity");
const ObjectiveEntity_1 = require("./entity/ObjectiveEntity");
const ProjectEntity_1 = require("./entity/ProjectEntity");
const RepositoryEntity_1 = require("./entity/RepositoryEntity");
const SearchEntity_1 = require("./entity/SearchEntity");
const StoryEntity_1 = require("./entity/StoryEntity");
const StoryCommentEntity_1 = require("./entity/StoryCommentEntity");
const StoryLinkEntity_1 = require("./entity/StoryLinkEntity");
const StoryReactionEntity_1 = require("./entity/StoryReactionEntity");
const StorySlimEntity_1 = require("./entity/StorySlimEntity");
const TaskEntity_1 = require("./entity/TaskEntity");
const ThreadedCommentEntity_1 = require("./entity/ThreadedCommentEntity");
const UploadedFileEntity_1 = require("./entity/UploadedFileEntity");
const WebhookEntity_1 = require("./entity/WebhookEntity");
const WorkflowEntity_1 = require("./entity/WorkflowEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const ShortcutEntityBase_1 = require("./ShortcutEntityBase");
Object.defineProperty(exports, "ShortcutEntityBase", { enumerable: true, get: function () { return ShortcutEntityBase_1.ShortcutEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class ShortcutSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        // Build spec directly from SDK options + user-provided fetch args.
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        // Merge user-provided headers over SDK defaults.
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        // Apply SDK auth (apikey, auth prefix, etc.)
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('ShortcutSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path `direct` uses, with the
    // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report a
    // failed query as ok.
    //
    // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('ShortcutSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('ShortcutSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Bulk().list()` / `client.Bulk().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Bulk(entopts) {
        const self = this;
        return new BulkEntity_1.BulkEntity(self, entopts);
    }
    // Entity access: `client.Category().list()` / `client.Category().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Category(entopts) {
        const self = this;
        return new CategoryEntity_1.CategoryEntity(self, entopts);
    }
    // Entity access: `client.Comment().list()` / `client.Comment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Comment(entopts) {
        const self = this;
        return new CommentEntity_1.CommentEntity(self, entopts);
    }
    // Entity access: `client.CustomField().list()` / `client.CustomField().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomField(entopts) {
        const self = this;
        return new CustomFieldEntity_1.CustomFieldEntity(self, entopts);
    }
    // Entity access: `client.Disable().list()` / `client.Disable().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Disable(entopts) {
        const self = this;
        return new DisableEntity_1.DisableEntity(self, entopts);
    }
    // Entity access: `client.DocSlim().list()` / `client.DocSlim().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DocSlim(entopts) {
        const self = this;
        return new DocSlimEntity_1.DocSlimEntity(self, entopts);
    }
    // Entity access: `client.Enable().list()` / `client.Enable().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Enable(entopts) {
        const self = this;
        return new EnableEntity_1.EnableEntity(self, entopts);
    }
    // Entity access: `client.EntityTemplate().list()` / `client.EntityTemplate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EntityTemplate(entopts) {
        const self = this;
        return new EntityTemplateEntity_1.EntityTemplateEntity(self, entopts);
    }
    // Entity access: `client.Epic().list()` / `client.Epic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Epic(entopts) {
        const self = this;
        return new EpicEntity_1.EpicEntity(self, entopts);
    }
    // Entity access: `client.EpicPaginatedResult().list()` / `client.EpicPaginatedResult().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EpicPaginatedResult(entopts) {
        const self = this;
        return new EpicPaginatedResultEntity_1.EpicPaginatedResultEntity(self, entopts);
    }
    // Entity access: `client.EpicUnlinkProductboard().list()` / `client.EpicUnlinkProductboard().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EpicUnlinkProductboard(entopts) {
        const self = this;
        return new EpicUnlinkProductboardEntity_1.EpicUnlinkProductboardEntity(self, entopts);
    }
    // Entity access: `client.EpicWorkflow().list()` / `client.EpicWorkflow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EpicWorkflow(entopts) {
        const self = this;
        return new EpicWorkflowEntity_1.EpicWorkflowEntity(self, entopts);
    }
    // Entity access: `client.Group().list()` / `client.Group().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Group(entopts) {
        const self = this;
        return new GroupEntity_1.GroupEntity(self, entopts);
    }
    // Entity access: `client.Health().list()` / `client.Health().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Health(entopts) {
        const self = this;
        return new HealthEntity_1.HealthEntity(self, entopts);
    }
    // Entity access: `client.History().list()` / `client.History().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    History(entopts) {
        const self = this;
        return new HistoryEntity_1.HistoryEntity(self, entopts);
    }
    // Entity access: `client.Iteration().list()` / `client.Iteration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Iteration(entopts) {
        const self = this;
        return new IterationEntity_1.IterationEntity(self, entopts);
    }
    // Entity access: `client.KeyResult().list()` / `client.KeyResult().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    KeyResult(entopts) {
        const self = this;
        return new KeyResultEntity_1.KeyResultEntity(self, entopts);
    }
    // Entity access: `client.Label().list()` / `client.Label().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Label(entopts) {
        const self = this;
        return new LabelEntity_1.LabelEntity(self, entopts);
    }
    // Entity access: `client.LinkedFile().list()` / `client.LinkedFile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LinkedFile(entopts) {
        const self = this;
        return new LinkedFileEntity_1.LinkedFileEntity(self, entopts);
    }
    // Entity access: `client.Member().list()` / `client.Member().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Member(entopts) {
        const self = this;
        return new MemberEntity_1.MemberEntity(self, entopts);
    }
    // Entity access: `client.Milestone().list()` / `client.Milestone().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Milestone(entopts) {
        const self = this;
        return new MilestoneEntity_1.MilestoneEntity(self, entopts);
    }
    // Entity access: `client.Objectif().list()` / `client.Objectif().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Objectif(entopts) {
        const self = this;
        return new ObjectifEntity_1.ObjectifEntity(self, entopts);
    }
    // Entity access: `client.Objective().list()` / `client.Objective().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Objective(entopts) {
        const self = this;
        return new ObjectiveEntity_1.ObjectiveEntity(self, entopts);
    }
    // Entity access: `client.Project().list()` / `client.Project().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Project(entopts) {
        const self = this;
        return new ProjectEntity_1.ProjectEntity(self, entopts);
    }
    // Entity access: `client.Repository().list()` / `client.Repository().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Repository(entopts) {
        const self = this;
        return new RepositoryEntity_1.RepositoryEntity(self, entopts);
    }
    // Entity access: `client.Search().list()` / `client.Search().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Search(entopts) {
        const self = this;
        return new SearchEntity_1.SearchEntity(self, entopts);
    }
    // Entity access: `client.Story().list()` / `client.Story().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Story(entopts) {
        const self = this;
        return new StoryEntity_1.StoryEntity(self, entopts);
    }
    // Entity access: `client.StoryComment().list()` / `client.StoryComment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StoryComment(entopts) {
        const self = this;
        return new StoryCommentEntity_1.StoryCommentEntity(self, entopts);
    }
    // Entity access: `client.StoryLink().list()` / `client.StoryLink().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StoryLink(entopts) {
        const self = this;
        return new StoryLinkEntity_1.StoryLinkEntity(self, entopts);
    }
    // Entity access: `client.StoryReaction().list()` / `client.StoryReaction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StoryReaction(entopts) {
        const self = this;
        return new StoryReactionEntity_1.StoryReactionEntity(self, entopts);
    }
    // Entity access: `client.StorySlim().list()` / `client.StorySlim().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StorySlim(entopts) {
        const self = this;
        return new StorySlimEntity_1.StorySlimEntity(self, entopts);
    }
    // Entity access: `client.Task().list()` / `client.Task().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Task(entopts) {
        const self = this;
        return new TaskEntity_1.TaskEntity(self, entopts);
    }
    // Entity access: `client.ThreadedComment().list()` / `client.ThreadedComment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ThreadedComment(entopts) {
        const self = this;
        return new ThreadedCommentEntity_1.ThreadedCommentEntity(self, entopts);
    }
    // Entity access: `client.UploadedFile().list()` / `client.UploadedFile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UploadedFile(entopts) {
        const self = this;
        return new UploadedFileEntity_1.UploadedFileEntity(self, entopts);
    }
    // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Webhook(entopts) {
        const self = this;
        return new WebhookEntity_1.WebhookEntity(self, entopts);
    }
    // Entity access: `client.Workflow().list()` / `client.Workflow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Workflow(entopts) {
        const self = this;
        return new WorkflowEntity_1.WorkflowEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new ShortcutSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return ShortcutSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Shortcut' };
    }
    toString() {
        return 'Shortcut ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.ShortcutSDK = ShortcutSDK;
const SDK = ShortcutSDK;
exports.SDK = SDK;
//# sourceMappingURL=ShortcutSDK.js.map
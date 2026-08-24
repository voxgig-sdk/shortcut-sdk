<?php
declare(strict_types=1);

// Shortcut SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class ShortcutSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new ShortcutUtility();
        $this->_utility = $utility;

        $config = ShortcutConfig::make_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = ShortcutHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = ShortcutHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        ($utility->feature_add)($this->_rootctx, ShortcutFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        $extend_val = Struct::getprop($this->options, "extend");
        if (is_array($extend_val)) {
            foreach ($extend_val as $f) {
                if (is_object($f) && method_exists($f, 'get_name')) {
                    ($utility->feature_add)($this->_rootctx, $f);
                }
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return ShortcutUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = ShortcutHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = ShortcutHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = ShortcutHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new ShortcutSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new ShortcutError($op . "_allow",
                "ShortcutSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = ShortcutHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = ShortcutHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new ShortcutError("graphql_error",
                "ShortcutSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_bulk = null;

    // Canonical facade: $client->Bulk()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bulk()
    // resolves here too.
    public function Bulk($data = null)
    {
        require_once __DIR__ . '/entity/bulk_entity.php';
        if ($data === null) {
            if ($this->_bulk === null) {
                $this->_bulk = new BulkEntity($this, null);
            }
            return $this->_bulk;
        }
        return new BulkEntity($this, $data);
    }


    private $_category = null;

    // Canonical facade: $client->Category()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->category()
    // resolves here too.
    public function Category($data = null)
    {
        require_once __DIR__ . '/entity/category_entity.php';
        if ($data === null) {
            if ($this->_category === null) {
                $this->_category = new CategoryEntity($this, null);
            }
            return $this->_category;
        }
        return new CategoryEntity($this, $data);
    }


    private $_comment = null;

    // Canonical facade: $client->Comment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->comment()
    // resolves here too.
    public function Comment($data = null)
    {
        require_once __DIR__ . '/entity/comment_entity.php';
        if ($data === null) {
            if ($this->_comment === null) {
                $this->_comment = new CommentEntity($this, null);
            }
            return $this->_comment;
        }
        return new CommentEntity($this, $data);
    }


    private $_custom_field = null;

    // Canonical facade: $client->CustomField()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_field()
    // resolves here too.
    public function CustomField($data = null)
    {
        require_once __DIR__ . '/entity/custom_field_entity.php';
        if ($data === null) {
            if ($this->_custom_field === null) {
                $this->_custom_field = new CustomFieldEntity($this, null);
            }
            return $this->_custom_field;
        }
        return new CustomFieldEntity($this, $data);
    }


    private $_disable = null;

    // Canonical facade: $client->Disable()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->disable()
    // resolves here too.
    public function Disable($data = null)
    {
        require_once __DIR__ . '/entity/disable_entity.php';
        if ($data === null) {
            if ($this->_disable === null) {
                $this->_disable = new DisableEntity($this, null);
            }
            return $this->_disable;
        }
        return new DisableEntity($this, $data);
    }


    private $_doc_slim = null;

    // Canonical facade: $client->DocSlim()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->doc_slim()
    // resolves here too.
    public function DocSlim($data = null)
    {
        require_once __DIR__ . '/entity/doc_slim_entity.php';
        if ($data === null) {
            if ($this->_doc_slim === null) {
                $this->_doc_slim = new DocSlimEntity($this, null);
            }
            return $this->_doc_slim;
        }
        return new DocSlimEntity($this, $data);
    }


    private $_enable = null;

    // Canonical facade: $client->Enable()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->enable()
    // resolves here too.
    public function Enable($data = null)
    {
        require_once __DIR__ . '/entity/enable_entity.php';
        if ($data === null) {
            if ($this->_enable === null) {
                $this->_enable = new EnableEntity($this, null);
            }
            return $this->_enable;
        }
        return new EnableEntity($this, $data);
    }


    private $_entity_template = null;

    // Canonical facade: $client->EntityTemplate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->entity_template()
    // resolves here too.
    public function EntityTemplate($data = null)
    {
        require_once __DIR__ . '/entity/entity_template_entity.php';
        if ($data === null) {
            if ($this->_entity_template === null) {
                $this->_entity_template = new EntityTemplateEntity($this, null);
            }
            return $this->_entity_template;
        }
        return new EntityTemplateEntity($this, $data);
    }


    private $_epic = null;

    // Canonical facade: $client->Epic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->epic()
    // resolves here too.
    public function Epic($data = null)
    {
        require_once __DIR__ . '/entity/epic_entity.php';
        if ($data === null) {
            if ($this->_epic === null) {
                $this->_epic = new EpicEntity($this, null);
            }
            return $this->_epic;
        }
        return new EpicEntity($this, $data);
    }


    private $_epic_paginated_result = null;

    // Canonical facade: $client->EpicPaginatedResult()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->epic_paginated_result()
    // resolves here too.
    public function EpicPaginatedResult($data = null)
    {
        require_once __DIR__ . '/entity/epic_paginated_result_entity.php';
        if ($data === null) {
            if ($this->_epic_paginated_result === null) {
                $this->_epic_paginated_result = new EpicPaginatedResultEntity($this, null);
            }
            return $this->_epic_paginated_result;
        }
        return new EpicPaginatedResultEntity($this, $data);
    }


    private $_epic_unlink_productboard = null;

    // Canonical facade: $client->EpicUnlinkProductboard()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->epic_unlink_productboard()
    // resolves here too.
    public function EpicUnlinkProductboard($data = null)
    {
        require_once __DIR__ . '/entity/epic_unlink_productboard_entity.php';
        if ($data === null) {
            if ($this->_epic_unlink_productboard === null) {
                $this->_epic_unlink_productboard = new EpicUnlinkProductboardEntity($this, null);
            }
            return $this->_epic_unlink_productboard;
        }
        return new EpicUnlinkProductboardEntity($this, $data);
    }


    private $_epic_workflow = null;

    // Canonical facade: $client->EpicWorkflow()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->epic_workflow()
    // resolves here too.
    public function EpicWorkflow($data = null)
    {
        require_once __DIR__ . '/entity/epic_workflow_entity.php';
        if ($data === null) {
            if ($this->_epic_workflow === null) {
                $this->_epic_workflow = new EpicWorkflowEntity($this, null);
            }
            return $this->_epic_workflow;
        }
        return new EpicWorkflowEntity($this, $data);
    }


    private $_group = null;

    // Canonical facade: $client->Group()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->group()
    // resolves here too.
    public function Group($data = null)
    {
        require_once __DIR__ . '/entity/group_entity.php';
        if ($data === null) {
            if ($this->_group === null) {
                $this->_group = new GroupEntity($this, null);
            }
            return $this->_group;
        }
        return new GroupEntity($this, $data);
    }


    private $_health = null;

    // Canonical facade: $client->Health()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->health()
    // resolves here too.
    public function Health($data = null)
    {
        require_once __DIR__ . '/entity/health_entity.php';
        if ($data === null) {
            if ($this->_health === null) {
                $this->_health = new HealthEntity($this, null);
            }
            return $this->_health;
        }
        return new HealthEntity($this, $data);
    }


    private $_history = null;

    // Canonical facade: $client->History()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->history()
    // resolves here too.
    public function History($data = null)
    {
        require_once __DIR__ . '/entity/history_entity.php';
        if ($data === null) {
            if ($this->_history === null) {
                $this->_history = new HistoryEntity($this, null);
            }
            return $this->_history;
        }
        return new HistoryEntity($this, $data);
    }


    private $_iteration = null;

    // Canonical facade: $client->Iteration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iteration()
    // resolves here too.
    public function Iteration($data = null)
    {
        require_once __DIR__ . '/entity/iteration_entity.php';
        if ($data === null) {
            if ($this->_iteration === null) {
                $this->_iteration = new IterationEntity($this, null);
            }
            return $this->_iteration;
        }
        return new IterationEntity($this, $data);
    }


    private $_key_result = null;

    // Canonical facade: $client->KeyResult()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->key_result()
    // resolves here too.
    public function KeyResult($data = null)
    {
        require_once __DIR__ . '/entity/key_result_entity.php';
        if ($data === null) {
            if ($this->_key_result === null) {
                $this->_key_result = new KeyResultEntity($this, null);
            }
            return $this->_key_result;
        }
        return new KeyResultEntity($this, $data);
    }


    private $_label = null;

    // Canonical facade: $client->Label()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->label()
    // resolves here too.
    public function Label($data = null)
    {
        require_once __DIR__ . '/entity/label_entity.php';
        if ($data === null) {
            if ($this->_label === null) {
                $this->_label = new LabelEntity($this, null);
            }
            return $this->_label;
        }
        return new LabelEntity($this, $data);
    }


    private $_linked_file = null;

    // Canonical facade: $client->LinkedFile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->linked_file()
    // resolves here too.
    public function LinkedFile($data = null)
    {
        require_once __DIR__ . '/entity/linked_file_entity.php';
        if ($data === null) {
            if ($this->_linked_file === null) {
                $this->_linked_file = new LinkedFileEntity($this, null);
            }
            return $this->_linked_file;
        }
        return new LinkedFileEntity($this, $data);
    }


    private $_member = null;

    // Canonical facade: $client->Member()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->member()
    // resolves here too.
    public function Member($data = null)
    {
        require_once __DIR__ . '/entity/member_entity.php';
        if ($data === null) {
            if ($this->_member === null) {
                $this->_member = new MemberEntity($this, null);
            }
            return $this->_member;
        }
        return new MemberEntity($this, $data);
    }


    private $_milestone = null;

    // Canonical facade: $client->Milestone()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->milestone()
    // resolves here too.
    public function Milestone($data = null)
    {
        require_once __DIR__ . '/entity/milestone_entity.php';
        if ($data === null) {
            if ($this->_milestone === null) {
                $this->_milestone = new MilestoneEntity($this, null);
            }
            return $this->_milestone;
        }
        return new MilestoneEntity($this, $data);
    }


    private $_objectif = null;

    // Canonical facade: $client->Objectif()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->objectif()
    // resolves here too.
    public function Objectif($data = null)
    {
        require_once __DIR__ . '/entity/objectif_entity.php';
        if ($data === null) {
            if ($this->_objectif === null) {
                $this->_objectif = new ObjectifEntity($this, null);
            }
            return $this->_objectif;
        }
        return new ObjectifEntity($this, $data);
    }


    private $_objective = null;

    // Canonical facade: $client->Objective()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->objective()
    // resolves here too.
    public function Objective($data = null)
    {
        require_once __DIR__ . '/entity/objective_entity.php';
        if ($data === null) {
            if ($this->_objective === null) {
                $this->_objective = new ObjectiveEntity($this, null);
            }
            return $this->_objective;
        }
        return new ObjectiveEntity($this, $data);
    }


    private $_project = null;

    // Canonical facade: $client->Project()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project()
    // resolves here too.
    public function Project($data = null)
    {
        require_once __DIR__ . '/entity/project_entity.php';
        if ($data === null) {
            if ($this->_project === null) {
                $this->_project = new ProjectEntity($this, null);
            }
            return $this->_project;
        }
        return new ProjectEntity($this, $data);
    }


    private $_repository = null;

    // Canonical facade: $client->Repository()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->repository()
    // resolves here too.
    public function Repository($data = null)
    {
        require_once __DIR__ . '/entity/repository_entity.php';
        if ($data === null) {
            if ($this->_repository === null) {
                $this->_repository = new RepositoryEntity($this, null);
            }
            return $this->_repository;
        }
        return new RepositoryEntity($this, $data);
    }


    private $_search = null;

    // Canonical facade: $client->Search()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->search()
    // resolves here too.
    public function Search($data = null)
    {
        require_once __DIR__ . '/entity/search_entity.php';
        if ($data === null) {
            if ($this->_search === null) {
                $this->_search = new SearchEntity($this, null);
            }
            return $this->_search;
        }
        return new SearchEntity($this, $data);
    }


    private $_story = null;

    // Canonical facade: $client->Story()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->story()
    // resolves here too.
    public function Story($data = null)
    {
        require_once __DIR__ . '/entity/story_entity.php';
        if ($data === null) {
            if ($this->_story === null) {
                $this->_story = new StoryEntity($this, null);
            }
            return $this->_story;
        }
        return new StoryEntity($this, $data);
    }


    private $_story_comment = null;

    // Canonical facade: $client->StoryComment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->story_comment()
    // resolves here too.
    public function StoryComment($data = null)
    {
        require_once __DIR__ . '/entity/story_comment_entity.php';
        if ($data === null) {
            if ($this->_story_comment === null) {
                $this->_story_comment = new StoryCommentEntity($this, null);
            }
            return $this->_story_comment;
        }
        return new StoryCommentEntity($this, $data);
    }


    private $_story_link = null;

    // Canonical facade: $client->StoryLink()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->story_link()
    // resolves here too.
    public function StoryLink($data = null)
    {
        require_once __DIR__ . '/entity/story_link_entity.php';
        if ($data === null) {
            if ($this->_story_link === null) {
                $this->_story_link = new StoryLinkEntity($this, null);
            }
            return $this->_story_link;
        }
        return new StoryLinkEntity($this, $data);
    }


    private $_story_reaction = null;

    // Canonical facade: $client->StoryReaction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->story_reaction()
    // resolves here too.
    public function StoryReaction($data = null)
    {
        require_once __DIR__ . '/entity/story_reaction_entity.php';
        if ($data === null) {
            if ($this->_story_reaction === null) {
                $this->_story_reaction = new StoryReactionEntity($this, null);
            }
            return $this->_story_reaction;
        }
        return new StoryReactionEntity($this, $data);
    }


    private $_story_slim = null;

    // Canonical facade: $client->StorySlim()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->story_slim()
    // resolves here too.
    public function StorySlim($data = null)
    {
        require_once __DIR__ . '/entity/story_slim_entity.php';
        if ($data === null) {
            if ($this->_story_slim === null) {
                $this->_story_slim = new StorySlimEntity($this, null);
            }
            return $this->_story_slim;
        }
        return new StorySlimEntity($this, $data);
    }


    private $_task = null;

    // Canonical facade: $client->Task()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->task()
    // resolves here too.
    public function Task($data = null)
    {
        require_once __DIR__ . '/entity/task_entity.php';
        if ($data === null) {
            if ($this->_task === null) {
                $this->_task = new TaskEntity($this, null);
            }
            return $this->_task;
        }
        return new TaskEntity($this, $data);
    }


    private $_threaded_comment = null;

    // Canonical facade: $client->ThreadedComment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->threaded_comment()
    // resolves here too.
    public function ThreadedComment($data = null)
    {
        require_once __DIR__ . '/entity/threaded_comment_entity.php';
        if ($data === null) {
            if ($this->_threaded_comment === null) {
                $this->_threaded_comment = new ThreadedCommentEntity($this, null);
            }
            return $this->_threaded_comment;
        }
        return new ThreadedCommentEntity($this, $data);
    }


    private $_uploaded_file = null;

    // Canonical facade: $client->UploadedFile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->uploaded_file()
    // resolves here too.
    public function UploadedFile($data = null)
    {
        require_once __DIR__ . '/entity/uploaded_file_entity.php';
        if ($data === null) {
            if ($this->_uploaded_file === null) {
                $this->_uploaded_file = new UploadedFileEntity($this, null);
            }
            return $this->_uploaded_file;
        }
        return new UploadedFileEntity($this, $data);
    }


    private $_webhook = null;

    // Canonical facade: $client->Webhook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->webhook()
    // resolves here too.
    public function Webhook($data = null)
    {
        require_once __DIR__ . '/entity/webhook_entity.php';
        if ($data === null) {
            if ($this->_webhook === null) {
                $this->_webhook = new WebhookEntity($this, null);
            }
            return $this->_webhook;
        }
        return new WebhookEntity($this, $data);
    }


    private $_workflow = null;

    // Canonical facade: $client->Workflow()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workflow()
    // resolves here too.
    public function Workflow($data = null)
    {
        require_once __DIR__ . '/entity/workflow_entity.php';
        if ($data === null) {
            if ($this->_workflow === null) {
                $this->_workflow = new WorkflowEntity($this, null);
            }
            return $this->_workflow;
        }
        return new WorkflowEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new ShortcutSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}

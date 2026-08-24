# Shortcut SDK

from shortcut_sdk.utility.voxgig_struct import voxgig_struct as vs
from shortcut_sdk.core.utility_type import ShortcutUtility
from shortcut_sdk.core.spec import ShortcutSpec
from shortcut_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from shortcut_sdk.utility import register

# Load features
from shortcut_sdk.feature.base_feature import ShortcutBaseFeature
from shortcut_sdk.features import _has_feature, _make_feature


class ShortcutSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = ShortcutUtility()
        self._utility = utility

        from shortcut_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return ShortcutUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = ShortcutSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "ShortcutSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("ShortcutSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Bulk(self, data=None) -> "BulkEntity":
        """Entity factory: client.Bulk().list() / client.Bulk().load({"id": ...})."""
        from shortcut_sdk.entity.bulk_entity import BulkEntity
        return BulkEntity(self, data)


    def Category(self, data=None) -> "CategoryEntity":
        """Entity factory: client.Category().list() / client.Category().load({"id": ...})."""
        from shortcut_sdk.entity.category_entity import CategoryEntity
        return CategoryEntity(self, data)


    def Comment(self, data=None) -> "CommentEntity":
        """Entity factory: client.Comment().list() / client.Comment().load({"id": ...})."""
        from shortcut_sdk.entity.comment_entity import CommentEntity
        return CommentEntity(self, data)


    def CustomField(self, data=None) -> "CustomFieldEntity":
        """Entity factory: client.CustomField().list() / client.CustomField().load({"id": ...})."""
        from shortcut_sdk.entity.custom_field_entity import CustomFieldEntity
        return CustomFieldEntity(self, data)


    def Disable(self, data=None) -> "DisableEntity":
        """Entity factory: client.Disable().list() / client.Disable().load({"id": ...})."""
        from shortcut_sdk.entity.disable_entity import DisableEntity
        return DisableEntity(self, data)


    def DocSlim(self, data=None) -> "DocSlimEntity":
        """Entity factory: client.DocSlim().list() / client.DocSlim().load({"id": ...})."""
        from shortcut_sdk.entity.doc_slim_entity import DocSlimEntity
        return DocSlimEntity(self, data)


    def Enable(self, data=None) -> "EnableEntity":
        """Entity factory: client.Enable().list() / client.Enable().load({"id": ...})."""
        from shortcut_sdk.entity.enable_entity import EnableEntity
        return EnableEntity(self, data)


    def EntityTemplate(self, data=None) -> "EntityTemplateEntity":
        """Entity factory: client.EntityTemplate().list() / client.EntityTemplate().load({"id": ...})."""
        from shortcut_sdk.entity.entity_template_entity import EntityTemplateEntity
        return EntityTemplateEntity(self, data)


    def Epic(self, data=None) -> "EpicEntity":
        """Entity factory: client.Epic().list() / client.Epic().load({"id": ...})."""
        from shortcut_sdk.entity.epic_entity import EpicEntity
        return EpicEntity(self, data)


    def EpicPaginatedResult(self, data=None) -> "EpicPaginatedResultEntity":
        """Entity factory: client.EpicPaginatedResult().list() / client.EpicPaginatedResult().load({"id": ...})."""
        from shortcut_sdk.entity.epic_paginated_result_entity import EpicPaginatedResultEntity
        return EpicPaginatedResultEntity(self, data)


    def EpicUnlinkProductboard(self, data=None) -> "EpicUnlinkProductboardEntity":
        """Entity factory: client.EpicUnlinkProductboard().list() / client.EpicUnlinkProductboard().load({"id": ...})."""
        from shortcut_sdk.entity.epic_unlink_productboard_entity import EpicUnlinkProductboardEntity
        return EpicUnlinkProductboardEntity(self, data)


    def EpicWorkflow(self, data=None) -> "EpicWorkflowEntity":
        """Entity factory: client.EpicWorkflow().list() / client.EpicWorkflow().load({"id": ...})."""
        from shortcut_sdk.entity.epic_workflow_entity import EpicWorkflowEntity
        return EpicWorkflowEntity(self, data)


    def Group(self, data=None) -> "GroupEntity":
        """Entity factory: client.Group().list() / client.Group().load({"id": ...})."""
        from shortcut_sdk.entity.group_entity import GroupEntity
        return GroupEntity(self, data)


    def Health(self, data=None) -> "HealthEntity":
        """Entity factory: client.Health().list() / client.Health().load({"id": ...})."""
        from shortcut_sdk.entity.health_entity import HealthEntity
        return HealthEntity(self, data)


    def History(self, data=None) -> "HistoryEntity":
        """Entity factory: client.History().list() / client.History().load({"id": ...})."""
        from shortcut_sdk.entity.history_entity import HistoryEntity
        return HistoryEntity(self, data)


    def Iteration(self, data=None) -> "IterationEntity":
        """Entity factory: client.Iteration().list() / client.Iteration().load({"id": ...})."""
        from shortcut_sdk.entity.iteration_entity import IterationEntity
        return IterationEntity(self, data)


    def KeyResult(self, data=None) -> "KeyResultEntity":
        """Entity factory: client.KeyResult().list() / client.KeyResult().load({"id": ...})."""
        from shortcut_sdk.entity.key_result_entity import KeyResultEntity
        return KeyResultEntity(self, data)


    def Label(self, data=None) -> "LabelEntity":
        """Entity factory: client.Label().list() / client.Label().load({"id": ...})."""
        from shortcut_sdk.entity.label_entity import LabelEntity
        return LabelEntity(self, data)


    def LinkedFile(self, data=None) -> "LinkedFileEntity":
        """Entity factory: client.LinkedFile().list() / client.LinkedFile().load({"id": ...})."""
        from shortcut_sdk.entity.linked_file_entity import LinkedFileEntity
        return LinkedFileEntity(self, data)


    def Member(self, data=None) -> "MemberEntity":
        """Entity factory: client.Member().list() / client.Member().load({"id": ...})."""
        from shortcut_sdk.entity.member_entity import MemberEntity
        return MemberEntity(self, data)


    def Milestone(self, data=None) -> "MilestoneEntity":
        """Entity factory: client.Milestone().list() / client.Milestone().load({"id": ...})."""
        from shortcut_sdk.entity.milestone_entity import MilestoneEntity
        return MilestoneEntity(self, data)


    def Objectif(self, data=None) -> "ObjectifEntity":
        """Entity factory: client.Objectif().list() / client.Objectif().load({"id": ...})."""
        from shortcut_sdk.entity.objectif_entity import ObjectifEntity
        return ObjectifEntity(self, data)


    def Objective(self, data=None) -> "ObjectiveEntity":
        """Entity factory: client.Objective().list() / client.Objective().load({"id": ...})."""
        from shortcut_sdk.entity.objective_entity import ObjectiveEntity
        return ObjectiveEntity(self, data)


    def Project(self, data=None) -> "ProjectEntity":
        """Entity factory: client.Project().list() / client.Project().load({"id": ...})."""
        from shortcut_sdk.entity.project_entity import ProjectEntity
        return ProjectEntity(self, data)


    def Repository(self, data=None) -> "RepositoryEntity":
        """Entity factory: client.Repository().list() / client.Repository().load({"id": ...})."""
        from shortcut_sdk.entity.repository_entity import RepositoryEntity
        return RepositoryEntity(self, data)


    def Search(self, data=None) -> "SearchEntity":
        """Entity factory: client.Search().list() / client.Search().load({"id": ...})."""
        from shortcut_sdk.entity.search_entity import SearchEntity
        return SearchEntity(self, data)


    def Story(self, data=None) -> "StoryEntity":
        """Entity factory: client.Story().list() / client.Story().load({"id": ...})."""
        from shortcut_sdk.entity.story_entity import StoryEntity
        return StoryEntity(self, data)


    def StoryComment(self, data=None) -> "StoryCommentEntity":
        """Entity factory: client.StoryComment().list() / client.StoryComment().load({"id": ...})."""
        from shortcut_sdk.entity.story_comment_entity import StoryCommentEntity
        return StoryCommentEntity(self, data)


    def StoryLink(self, data=None) -> "StoryLinkEntity":
        """Entity factory: client.StoryLink().list() / client.StoryLink().load({"id": ...})."""
        from shortcut_sdk.entity.story_link_entity import StoryLinkEntity
        return StoryLinkEntity(self, data)


    def StoryReaction(self, data=None) -> "StoryReactionEntity":
        """Entity factory: client.StoryReaction().list() / client.StoryReaction().load({"id": ...})."""
        from shortcut_sdk.entity.story_reaction_entity import StoryReactionEntity
        return StoryReactionEntity(self, data)


    def StorySlim(self, data=None) -> "StorySlimEntity":
        """Entity factory: client.StorySlim().list() / client.StorySlim().load({"id": ...})."""
        from shortcut_sdk.entity.story_slim_entity import StorySlimEntity
        return StorySlimEntity(self, data)


    def Task(self, data=None) -> "TaskEntity":
        """Entity factory: client.Task().list() / client.Task().load({"id": ...})."""
        from shortcut_sdk.entity.task_entity import TaskEntity
        return TaskEntity(self, data)


    def ThreadedComment(self, data=None) -> "ThreadedCommentEntity":
        """Entity factory: client.ThreadedComment().list() / client.ThreadedComment().load({"id": ...})."""
        from shortcut_sdk.entity.threaded_comment_entity import ThreadedCommentEntity
        return ThreadedCommentEntity(self, data)


    def UploadedFile(self, data=None) -> "UploadedFileEntity":
        """Entity factory: client.UploadedFile().list() / client.UploadedFile().load({"id": ...})."""
        from shortcut_sdk.entity.uploaded_file_entity import UploadedFileEntity
        return UploadedFileEntity(self, data)


    def Webhook(self, data=None) -> "WebhookEntity":
        """Entity factory: client.Webhook().list() / client.Webhook().load({"id": ...})."""
        from shortcut_sdk.entity.webhook_entity import WebhookEntity
        return WebhookEntity(self, data)


    def Workflow(self, data=None) -> "WorkflowEntity":
        """Entity factory: client.Workflow().list() / client.Workflow().load({"id": ...})."""
        from shortcut_sdk.entity.workflow_entity import WorkflowEntity
        return WorkflowEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "ShortcutSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from shortcut_sdk.entity.bulk_entity import BulkEntity
    from shortcut_sdk.entity.category_entity import CategoryEntity
    from shortcut_sdk.entity.comment_entity import CommentEntity
    from shortcut_sdk.entity.custom_field_entity import CustomFieldEntity
    from shortcut_sdk.entity.disable_entity import DisableEntity
    from shortcut_sdk.entity.doc_slim_entity import DocSlimEntity
    from shortcut_sdk.entity.enable_entity import EnableEntity
    from shortcut_sdk.entity.entity_template_entity import EntityTemplateEntity
    from shortcut_sdk.entity.epic_entity import EpicEntity
    from shortcut_sdk.entity.epic_paginated_result_entity import EpicPaginatedResultEntity
    from shortcut_sdk.entity.epic_unlink_productboard_entity import EpicUnlinkProductboardEntity
    from shortcut_sdk.entity.epic_workflow_entity import EpicWorkflowEntity
    from shortcut_sdk.entity.group_entity import GroupEntity
    from shortcut_sdk.entity.health_entity import HealthEntity
    from shortcut_sdk.entity.history_entity import HistoryEntity
    from shortcut_sdk.entity.iteration_entity import IterationEntity
    from shortcut_sdk.entity.key_result_entity import KeyResultEntity
    from shortcut_sdk.entity.label_entity import LabelEntity
    from shortcut_sdk.entity.linked_file_entity import LinkedFileEntity
    from shortcut_sdk.entity.member_entity import MemberEntity
    from shortcut_sdk.entity.milestone_entity import MilestoneEntity
    from shortcut_sdk.entity.objectif_entity import ObjectifEntity
    from shortcut_sdk.entity.objective_entity import ObjectiveEntity
    from shortcut_sdk.entity.project_entity import ProjectEntity
    from shortcut_sdk.entity.repository_entity import RepositoryEntity
    from shortcut_sdk.entity.search_entity import SearchEntity
    from shortcut_sdk.entity.story_entity import StoryEntity
    from shortcut_sdk.entity.story_comment_entity import StoryCommentEntity
    from shortcut_sdk.entity.story_link_entity import StoryLinkEntity
    from shortcut_sdk.entity.story_reaction_entity import StoryReactionEntity
    from shortcut_sdk.entity.story_slim_entity import StorySlimEntity
    from shortcut_sdk.entity.task_entity import TaskEntity
    from shortcut_sdk.entity.threaded_comment_entity import ThreadedCommentEntity
    from shortcut_sdk.entity.uploaded_file_entity import UploadedFileEntity
    from shortcut_sdk.entity.webhook_entity import WebhookEntity
    from shortcut_sdk.entity.workflow_entity import WorkflowEntity

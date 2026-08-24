# Shortcut SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'Shortcut_types'


class ShortcutSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = ShortcutUtility.new
    @_utility = utility

    config = ShortcutConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = ShortcutHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = ShortcutHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, ShortcutFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    ShortcutUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = ShortcutHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = ShortcutHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = ShortcutHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = ShortcutSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    allow_op.is_a?(String) && allow_op.include?(op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => ShortcutError.new(
        "#{op}_allow",
        "ShortcutSDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue ShortcutError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = ShortcutHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = ShortcutHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = ShortcutError.new(
        "graphql_error", "ShortcutSDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.Bulk.list / client.Bulk.load({ "id" => ... })
  def Bulk(data = nil)
    require_relative 'entity/bulk_entity'
    BulkEntity.new(self, data)
  end


  # Canonical facade: client.Category.list / client.Category.load({ "id" => ... })
  def Category(data = nil)
    require_relative 'entity/category_entity'
    CategoryEntity.new(self, data)
  end


  # Canonical facade: client.Comment.list / client.Comment.load({ "id" => ... })
  def Comment(data = nil)
    require_relative 'entity/comment_entity'
    CommentEntity.new(self, data)
  end


  # Canonical facade: client.CustomField.list / client.CustomField.load({ "id" => ... })
  def CustomField(data = nil)
    require_relative 'entity/custom_field_entity'
    CustomFieldEntity.new(self, data)
  end


  # Canonical facade: client.Disable.list / client.Disable.load({ "id" => ... })
  def Disable(data = nil)
    require_relative 'entity/disable_entity'
    DisableEntity.new(self, data)
  end


  # Canonical facade: client.DocSlim.list / client.DocSlim.load({ "id" => ... })
  def DocSlim(data = nil)
    require_relative 'entity/doc_slim_entity'
    DocSlimEntity.new(self, data)
  end


  # Canonical facade: client.Enable.list / client.Enable.load({ "id" => ... })
  def Enable(data = nil)
    require_relative 'entity/enable_entity'
    EnableEntity.new(self, data)
  end


  # Canonical facade: client.EntityTemplate.list / client.EntityTemplate.load({ "id" => ... })
  def EntityTemplate(data = nil)
    require_relative 'entity/entity_template_entity'
    EntityTemplateEntity.new(self, data)
  end


  # Canonical facade: client.Epic.list / client.Epic.load({ "id" => ... })
  def Epic(data = nil)
    require_relative 'entity/epic_entity'
    EpicEntity.new(self, data)
  end


  # Canonical facade: client.EpicPaginatedResult.list / client.EpicPaginatedResult.load({ "id" => ... })
  def EpicPaginatedResult(data = nil)
    require_relative 'entity/epic_paginated_result_entity'
    EpicPaginatedResultEntity.new(self, data)
  end


  # Canonical facade: client.EpicUnlinkProductboard.list / client.EpicUnlinkProductboard.load({ "id" => ... })
  def EpicUnlinkProductboard(data = nil)
    require_relative 'entity/epic_unlink_productboard_entity'
    EpicUnlinkProductboardEntity.new(self, data)
  end


  # Canonical facade: client.EpicWorkflow.list / client.EpicWorkflow.load({ "id" => ... })
  def EpicWorkflow(data = nil)
    require_relative 'entity/epic_workflow_entity'
    EpicWorkflowEntity.new(self, data)
  end


  # Canonical facade: client.Group.list / client.Group.load({ "id" => ... })
  def Group(data = nil)
    require_relative 'entity/group_entity'
    GroupEntity.new(self, data)
  end


  # Canonical facade: client.Health.list / client.Health.load({ "id" => ... })
  def Health(data = nil)
    require_relative 'entity/health_entity'
    HealthEntity.new(self, data)
  end


  # Canonical facade: client.History.list / client.History.load({ "id" => ... })
  def History(data = nil)
    require_relative 'entity/history_entity'
    HistoryEntity.new(self, data)
  end


  # Canonical facade: client.Iteration.list / client.Iteration.load({ "id" => ... })
  def Iteration(data = nil)
    require_relative 'entity/iteration_entity'
    IterationEntity.new(self, data)
  end


  # Canonical facade: client.KeyResult.list / client.KeyResult.load({ "id" => ... })
  def KeyResult(data = nil)
    require_relative 'entity/key_result_entity'
    KeyResultEntity.new(self, data)
  end


  # Canonical facade: client.Label.list / client.Label.load({ "id" => ... })
  def Label(data = nil)
    require_relative 'entity/label_entity'
    LabelEntity.new(self, data)
  end


  # Canonical facade: client.LinkedFile.list / client.LinkedFile.load({ "id" => ... })
  def LinkedFile(data = nil)
    require_relative 'entity/linked_file_entity'
    LinkedFileEntity.new(self, data)
  end


  # Canonical facade: client.Member.list / client.Member.load({ "id" => ... })
  def Member(data = nil)
    require_relative 'entity/member_entity'
    MemberEntity.new(self, data)
  end


  # Canonical facade: client.Milestone.list / client.Milestone.load({ "id" => ... })
  def Milestone(data = nil)
    require_relative 'entity/milestone_entity'
    MilestoneEntity.new(self, data)
  end


  # Canonical facade: client.Objectif.list / client.Objectif.load({ "id" => ... })
  def Objectif(data = nil)
    require_relative 'entity/objectif_entity'
    ObjectifEntity.new(self, data)
  end


  # Canonical facade: client.Objective.list / client.Objective.load({ "id" => ... })
  def Objective(data = nil)
    require_relative 'entity/objective_entity'
    ObjectiveEntity.new(self, data)
  end


  # Canonical facade: client.Project.list / client.Project.load({ "id" => ... })
  def Project(data = nil)
    require_relative 'entity/project_entity'
    ProjectEntity.new(self, data)
  end


  # Canonical facade: client.Repository.list / client.Repository.load({ "id" => ... })
  def Repository(data = nil)
    require_relative 'entity/repository_entity'
    RepositoryEntity.new(self, data)
  end


  # Canonical facade: client.Search.list / client.Search.load({ "id" => ... })
  def Search(data = nil)
    require_relative 'entity/search_entity'
    SearchEntity.new(self, data)
  end


  # Canonical facade: client.Story.list / client.Story.load({ "id" => ... })
  def Story(data = nil)
    require_relative 'entity/story_entity'
    StoryEntity.new(self, data)
  end


  # Canonical facade: client.StoryComment.list / client.StoryComment.load({ "id" => ... })
  def StoryComment(data = nil)
    require_relative 'entity/story_comment_entity'
    StoryCommentEntity.new(self, data)
  end


  # Canonical facade: client.StoryLink.list / client.StoryLink.load({ "id" => ... })
  def StoryLink(data = nil)
    require_relative 'entity/story_link_entity'
    StoryLinkEntity.new(self, data)
  end


  # Canonical facade: client.StoryReaction.list / client.StoryReaction.load({ "id" => ... })
  def StoryReaction(data = nil)
    require_relative 'entity/story_reaction_entity'
    StoryReactionEntity.new(self, data)
  end


  # Canonical facade: client.StorySlim.list / client.StorySlim.load({ "id" => ... })
  def StorySlim(data = nil)
    require_relative 'entity/story_slim_entity'
    StorySlimEntity.new(self, data)
  end


  # Canonical facade: client.Task.list / client.Task.load({ "id" => ... })
  def Task(data = nil)
    require_relative 'entity/task_entity'
    TaskEntity.new(self, data)
  end


  # Canonical facade: client.ThreadedComment.list / client.ThreadedComment.load({ "id" => ... })
  def ThreadedComment(data = nil)
    require_relative 'entity/threaded_comment_entity'
    ThreadedCommentEntity.new(self, data)
  end


  # Canonical facade: client.UploadedFile.list / client.UploadedFile.load({ "id" => ... })
  def UploadedFile(data = nil)
    require_relative 'entity/uploaded_file_entity'
    UploadedFileEntity.new(self, data)
  end


  # Canonical facade: client.Webhook.list / client.Webhook.load({ "id" => ... })
  def Webhook(data = nil)
    require_relative 'entity/webhook_entity'
    WebhookEntity.new(self, data)
  end


  # Canonical facade: client.Workflow.list / client.Workflow.load({ "id" => ... })
  def Workflow(data = nil)
    require_relative 'entity/workflow_entity'
    WorkflowEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = ShortcutSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end

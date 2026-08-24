-- Shortcut SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("shortcut_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local ShortcutSDK = {}
ShortcutSDK.__index = ShortcutSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

ShortcutSDK._make_feature = _make_feature


function ShortcutSDK.new(options)
  local self = setmetatable({}, ShortcutSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: test


  return self
end


function ShortcutSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function ShortcutSDK:get_utility()
  return Utility.copy(self._utility)
end


function ShortcutSDK:get_root_ctx()
  return self._rootctx
end


function ShortcutSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function ShortcutSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function ShortcutSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function ShortcutSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "ShortcutSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function ShortcutSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function ShortcutSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "ShortcutSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Bulk():list() / client:Bulk():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Bulk(data)
  local EntityMod = require("entity.bulk_entity")
  if data == nil then
    if self._bulk == nil then
      self._bulk = EntityMod.new(self, nil)
    end
    return self._bulk
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Category():list() / client:Category():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Category(data)
  local EntityMod = require("entity.category_entity")
  if data == nil then
    if self._category == nil then
      self._category = EntityMod.new(self, nil)
    end
    return self._category
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Comment():list() / client:Comment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Comment(data)
  local EntityMod = require("entity.comment_entity")
  if data == nil then
    if self._comment == nil then
      self._comment = EntityMod.new(self, nil)
    end
    return self._comment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomField():list() / client:CustomField():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:CustomField(data)
  local EntityMod = require("entity.custom_field_entity")
  if data == nil then
    if self._custom_field == nil then
      self._custom_field = EntityMod.new(self, nil)
    end
    return self._custom_field
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Disable():list() / client:Disable():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Disable(data)
  local EntityMod = require("entity.disable_entity")
  if data == nil then
    if self._disable == nil then
      self._disable = EntityMod.new(self, nil)
    end
    return self._disable
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DocSlim():list() / client:DocSlim():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:DocSlim(data)
  local EntityMod = require("entity.doc_slim_entity")
  if data == nil then
    if self._doc_slim == nil then
      self._doc_slim = EntityMod.new(self, nil)
    end
    return self._doc_slim
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Enable():list() / client:Enable():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Enable(data)
  local EntityMod = require("entity.enable_entity")
  if data == nil then
    if self._enable == nil then
      self._enable = EntityMod.new(self, nil)
    end
    return self._enable
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EntityTemplate():list() / client:EntityTemplate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:EntityTemplate(data)
  local EntityMod = require("entity.entity_template_entity")
  if data == nil then
    if self._entity_template == nil then
      self._entity_template = EntityMod.new(self, nil)
    end
    return self._entity_template
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Epic():list() / client:Epic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Epic(data)
  local EntityMod = require("entity.epic_entity")
  if data == nil then
    if self._epic == nil then
      self._epic = EntityMod.new(self, nil)
    end
    return self._epic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EpicPaginatedResult():list() / client:EpicPaginatedResult():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:EpicPaginatedResult(data)
  local EntityMod = require("entity.epic_paginated_result_entity")
  if data == nil then
    if self._epic_paginated_result == nil then
      self._epic_paginated_result = EntityMod.new(self, nil)
    end
    return self._epic_paginated_result
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EpicUnlinkProductboard():list() / client:EpicUnlinkProductboard():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:EpicUnlinkProductboard(data)
  local EntityMod = require("entity.epic_unlink_productboard_entity")
  if data == nil then
    if self._epic_unlink_productboard == nil then
      self._epic_unlink_productboard = EntityMod.new(self, nil)
    end
    return self._epic_unlink_productboard
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EpicWorkflow():list() / client:EpicWorkflow():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:EpicWorkflow(data)
  local EntityMod = require("entity.epic_workflow_entity")
  if data == nil then
    if self._epic_workflow == nil then
      self._epic_workflow = EntityMod.new(self, nil)
    end
    return self._epic_workflow
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Group():list() / client:Group():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Group(data)
  local EntityMod = require("entity.group_entity")
  if data == nil then
    if self._group == nil then
      self._group = EntityMod.new(self, nil)
    end
    return self._group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Health():list() / client:Health():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Health(data)
  local EntityMod = require("entity.health_entity")
  if data == nil then
    if self._health == nil then
      self._health = EntityMod.new(self, nil)
    end
    return self._health
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:History():list() / client:History():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:History(data)
  local EntityMod = require("entity.history_entity")
  if data == nil then
    if self._history == nil then
      self._history = EntityMod.new(self, nil)
    end
    return self._history
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Iteration():list() / client:Iteration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Iteration(data)
  local EntityMod = require("entity.iteration_entity")
  if data == nil then
    if self._iteration == nil then
      self._iteration = EntityMod.new(self, nil)
    end
    return self._iteration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:KeyResult():list() / client:KeyResult():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:KeyResult(data)
  local EntityMod = require("entity.key_result_entity")
  if data == nil then
    if self._key_result == nil then
      self._key_result = EntityMod.new(self, nil)
    end
    return self._key_result
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Label():list() / client:Label():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Label(data)
  local EntityMod = require("entity.label_entity")
  if data == nil then
    if self._label == nil then
      self._label = EntityMod.new(self, nil)
    end
    return self._label
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LinkedFile():list() / client:LinkedFile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:LinkedFile(data)
  local EntityMod = require("entity.linked_file_entity")
  if data == nil then
    if self._linked_file == nil then
      self._linked_file = EntityMod.new(self, nil)
    end
    return self._linked_file
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Member():list() / client:Member():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Member(data)
  local EntityMod = require("entity.member_entity")
  if data == nil then
    if self._member == nil then
      self._member = EntityMod.new(self, nil)
    end
    return self._member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Milestone():list() / client:Milestone():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Milestone(data)
  local EntityMod = require("entity.milestone_entity")
  if data == nil then
    if self._milestone == nil then
      self._milestone = EntityMod.new(self, nil)
    end
    return self._milestone
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Objectif():list() / client:Objectif():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Objectif(data)
  local EntityMod = require("entity.objectif_entity")
  if data == nil then
    if self._objectif == nil then
      self._objectif = EntityMod.new(self, nil)
    end
    return self._objectif
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Objective():list() / client:Objective():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Objective(data)
  local EntityMod = require("entity.objective_entity")
  if data == nil then
    if self._objective == nil then
      self._objective = EntityMod.new(self, nil)
    end
    return self._objective
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Project():list() / client:Project():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Project(data)
  local EntityMod = require("entity.project_entity")
  if data == nil then
    if self._project == nil then
      self._project = EntityMod.new(self, nil)
    end
    return self._project
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Repository():list() / client:Repository():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Repository(data)
  local EntityMod = require("entity.repository_entity")
  if data == nil then
    if self._repository == nil then
      self._repository = EntityMod.new(self, nil)
    end
    return self._repository
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Search():list() / client:Search():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Search(data)
  local EntityMod = require("entity.search_entity")
  if data == nil then
    if self._search == nil then
      self._search = EntityMod.new(self, nil)
    end
    return self._search
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Story():list() / client:Story():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Story(data)
  local EntityMod = require("entity.story_entity")
  if data == nil then
    if self._story == nil then
      self._story = EntityMod.new(self, nil)
    end
    return self._story
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StoryComment():list() / client:StoryComment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:StoryComment(data)
  local EntityMod = require("entity.story_comment_entity")
  if data == nil then
    if self._story_comment == nil then
      self._story_comment = EntityMod.new(self, nil)
    end
    return self._story_comment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StoryLink():list() / client:StoryLink():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:StoryLink(data)
  local EntityMod = require("entity.story_link_entity")
  if data == nil then
    if self._story_link == nil then
      self._story_link = EntityMod.new(self, nil)
    end
    return self._story_link
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StoryReaction():list() / client:StoryReaction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:StoryReaction(data)
  local EntityMod = require("entity.story_reaction_entity")
  if data == nil then
    if self._story_reaction == nil then
      self._story_reaction = EntityMod.new(self, nil)
    end
    return self._story_reaction
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StorySlim():list() / client:StorySlim():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:StorySlim(data)
  local EntityMod = require("entity.story_slim_entity")
  if data == nil then
    if self._story_slim == nil then
      self._story_slim = EntityMod.new(self, nil)
    end
    return self._story_slim
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Task():list() / client:Task():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Task(data)
  local EntityMod = require("entity.task_entity")
  if data == nil then
    if self._task == nil then
      self._task = EntityMod.new(self, nil)
    end
    return self._task
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ThreadedComment():list() / client:ThreadedComment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:ThreadedComment(data)
  local EntityMod = require("entity.threaded_comment_entity")
  if data == nil then
    if self._threaded_comment == nil then
      self._threaded_comment = EntityMod.new(self, nil)
    end
    return self._threaded_comment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UploadedFile():list() / client:UploadedFile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:UploadedFile(data)
  local EntityMod = require("entity.uploaded_file_entity")
  if data == nil then
    if self._uploaded_file == nil then
      self._uploaded_file = EntityMod.new(self, nil)
    end
    return self._uploaded_file
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Webhook():list() / client:Webhook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Webhook(data)
  local EntityMod = require("entity.webhook_entity")
  if data == nil then
    if self._webhook == nil then
      self._webhook = EntityMod.new(self, nil)
    end
    return self._webhook
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Workflow():list() / client:Workflow():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function ShortcutSDK:Workflow(data)
  local EntityMod = require("entity.workflow_entity")
  if data == nil then
    if self._workflow == nil then
      self._workflow = EntityMod.new(self, nil)
    end
    return self._workflow
  end
  return EntityMod.new(self, data)
end




function ShortcutSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = ShortcutSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return ShortcutSDK

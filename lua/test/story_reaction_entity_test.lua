-- StoryReaction entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("shortcut_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("StoryReactionEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:StoryReaction(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = story_reaction_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "story_reaction." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_STORY_REACTION_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local story_reaction_ref01_ent = client:StoryReaction(nil)
    local story_reaction_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.story_reaction"), "story_reaction_ref01"))
    story_reaction_ref01_data["comment_id"] = setup.idmap["comment01"]
    story_reaction_ref01_data["story_id"] = setup.idmap["story01"]

    local story_reaction_ref01_data_result, err = story_reaction_ref01_ent:create(story_reaction_ref01_data, nil)
    assert.is_nil(err)
    story_reaction_ref01_data = helpers.to_map(type(story_reaction_ref01_data_result) == 'table' and story_reaction_ref01_data_result.data_get and story_reaction_ref01_data_result:data_get() or story_reaction_ref01_data_result)
    assert.is_not_nil(story_reaction_ref01_data)


  end)
end)

function story_reaction_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/story_reaction/StoryReactionTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read story_reaction test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "story_reaction01", "story_reaction02", "story_reaction03", "story01", "story02", "story03", "comment01", "comment02", "comment03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("SHORTCUT_TEST_STORY_REACTION_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["SHORTCUT_TEST_STORY_REACTION_ENTID"] = idmap,
    ["SHORTCUT_TEST_LIVE"] = "FALSE",
    ["SHORTCUT_TEST_EXPLAIN"] = "FALSE",
    ["SHORTCUT_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["SHORTCUT_TEST_STORY_REACTION_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["SHORTCUT_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["SHORTCUT_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["SHORTCUT_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["SHORTCUT_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end

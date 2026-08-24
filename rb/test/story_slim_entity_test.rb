# StorySlim entity test

require "minitest/autorun"
require "json"
require_relative "../Shortcut_sdk"
require_relative "runner"

class StorySlimEntityTest < Minitest::Test
  def test_create_instance
    testsdk = ShortcutSDK.test(nil, nil)
    ent = testsdk.StorySlim(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = story_slim_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "story_slim." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_STORY_SLIM_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    story_slim_ref01_ent = client.StorySlim(nil)
    story_slim_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.story_slim"), "story_slim_ref01"))

    story_slim_ref01_data_result = story_slim_ref01_ent.create(story_slim_ref01_data, nil)
    story_slim_ref01_data = Helpers.to_map(story_slim_ref01_data_result)
    assert !story_slim_ref01_data.nil?

    # UPDATE
    story_slim_ref01_data_up0_up = {
    }

    story_slim_ref01_markdef_up0_name = "completed_at_end"
    story_slim_ref01_markdef_up0_value = "Mark01-story_slim_ref01_#{setup[:now]}"
    story_slim_ref01_data_up0_up[story_slim_ref01_markdef_up0_name] = story_slim_ref01_markdef_up0_value

    story_slim_ref01_resdata_up0_result = story_slim_ref01_ent.update(story_slim_ref01_data_up0_up, nil)
    story_slim_ref01_resdata_up0 = Helpers.to_map(story_slim_ref01_resdata_up0_result)
    assert !story_slim_ref01_resdata_up0.nil?
    assert_equal story_slim_ref01_resdata_up0[story_slim_ref01_markdef_up0_name], story_slim_ref01_markdef_up0_value

  end
end

def story_slim_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "story_slim", "StorySlimTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = ShortcutSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["story_slim01", "story_slim02", "story_slim03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["SHORTCUT_TEST_STORY_SLIM_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "SHORTCUT_TEST_STORY_SLIM_ENTID" => idmap,
    "SHORTCUT_TEST_LIVE" => "FALSE",
    "SHORTCUT_TEST_EXPLAIN" => "FALSE",
    "SHORTCUT_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["SHORTCUT_TEST_STORY_SLIM_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["SHORTCUT_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["SHORTCUT_APIKEY"],
      },
      extra || {},
    ])
    client = ShortcutSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["SHORTCUT_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["SHORTCUT_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end

# StoryComment entity test

require "minitest/autorun"
require "json"
require_relative "../Shortcut_sdk"
require_relative "runner"

class StoryCommentEntityTest < Minitest::Test
  def test_create_instance
    testsdk = ShortcutSDK.test(nil, nil)
    ent = testsdk.StoryComment(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "story_comment" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = ShortcutSDK.test(seed, nil)
    seen = base.StoryComment(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = ShortcutConfig.make_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = ShortcutSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.StoryComment(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = story_comment_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "story_comment." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_STORY_COMMENT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    story_comment_ref01_ent = client.StoryComment(nil)
    story_comment_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.story_comment"), "story_comment_ref01"))
    story_comment_ref01_data["story-public-id"] = setup[:idmap]["story-public-id01"]
    story_comment_ref01_data["story_id"] = setup[:idmap]["story01"]

    story_comment_ref01_data_result = story_comment_ref01_ent.create(story_comment_ref01_data, nil)
    story_comment_ref01_data = Helpers.to_map(story_comment_ref01_data_result)
    assert !story_comment_ref01_data.nil?
    assert !story_comment_ref01_data["id"].nil?

    # LIST
    story_comment_ref01_match = {
      "story-public-id" => setup[:idmap]["story-public-id01"],
    }

    story_comment_ref01_list_result = story_comment_ref01_ent.list(story_comment_ref01_match, nil)
    assert story_comment_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(story_comment_ref01_list_result),
      { "id" => story_comment_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    story_comment_ref01_data_up0_up = {
      "id" => story_comment_ref01_data["id"],
      "story_id" => setup[:idmap]["story_id"],
    }

    story_comment_ref01_markdef_up0_name = "app_url"
    story_comment_ref01_markdef_up0_value = "Mark01-story_comment_ref01_#{setup[:now]}"
    story_comment_ref01_data_up0_up[story_comment_ref01_markdef_up0_name] = story_comment_ref01_markdef_up0_value

    story_comment_ref01_resdata_up0_result = story_comment_ref01_ent.update(story_comment_ref01_data_up0_up, nil)
    story_comment_ref01_resdata_up0 = Helpers.to_map(story_comment_ref01_resdata_up0_result)
    assert !story_comment_ref01_resdata_up0.nil?
    assert_equal story_comment_ref01_resdata_up0["id"], story_comment_ref01_data_up0_up["id"]
    assert_equal story_comment_ref01_resdata_up0[story_comment_ref01_markdef_up0_name], story_comment_ref01_markdef_up0_value

    # LOAD
    story_comment_ref01_match_dt0 = {
      "id" => story_comment_ref01_data["id"],
    }
    story_comment_ref01_data_dt0_loaded = story_comment_ref01_ent.load(story_comment_ref01_match_dt0, nil)
    story_comment_ref01_data_dt0_load_result = Helpers.to_map(story_comment_ref01_data_dt0_loaded)
    assert !story_comment_ref01_data_dt0_load_result.nil?
    assert_equal story_comment_ref01_data_dt0_load_result["id"], story_comment_ref01_data["id"]

  end
end

def story_comment_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "story_comment", "StoryCommentTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = ShortcutSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["story_comment01", "story_comment02", "story_comment03", "story01", "story02", "story03", "comment01", "comment02", "comment03", "story-public-id01"],
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
  entid_env_raw = ENV["SHORTCUT_TEST_STORY_COMMENT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "SHORTCUT_TEST_STORY_COMMENT_ENTID" => idmap,
    "SHORTCUT_TEST_LIVE" => "FALSE",
    "SHORTCUT_TEST_EXPLAIN" => "FALSE",
    "SHORTCUT_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["SHORTCUT_TEST_STORY_COMMENT_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["story_id"].nil?
    idmap_resolved["story_id"] = idmap_resolved["story01"]
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

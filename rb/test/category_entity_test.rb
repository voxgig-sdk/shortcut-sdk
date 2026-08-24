# Category entity test

require "minitest/autorun"
require "json"
require_relative "../Shortcut_sdk"
require_relative "runner"

class CategoryEntityTest < Minitest::Test
  def test_create_instance
    testsdk = ShortcutSDK.test(nil, nil)
    ent = testsdk.Category(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "category" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = ShortcutSDK.test(seed, nil)
    seen = base.Category(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = ShortcutConfig.make_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = ShortcutSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Category(nil).stream("list", nil, nil).each do |item|
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
    setup = category_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "category." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_CATEGORY_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    category_ref01_ent = client.Category(nil)
    category_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.category"), "category_ref01"))

    category_ref01_data_result = category_ref01_ent.create(category_ref01_data, nil)
    category_ref01_data = Helpers.to_map(category_ref01_data_result)
    assert !category_ref01_data.nil?
    assert !category_ref01_data["id"].nil?

    # LIST
    category_ref01_match = {}

    category_ref01_list_result = category_ref01_ent.list(category_ref01_match, nil)
    assert category_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(category_ref01_list_result),
      { "id" => category_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    category_ref01_data_up0_up = {
      "id" => category_ref01_data["id"],
    }

    category_ref01_markdef_up0_name = "color"
    category_ref01_markdef_up0_value = "Mark01-category_ref01_#{setup[:now]}"
    category_ref01_data_up0_up[category_ref01_markdef_up0_name] = category_ref01_markdef_up0_value

    category_ref01_resdata_up0_result = category_ref01_ent.update(category_ref01_data_up0_up, nil)
    category_ref01_resdata_up0 = Helpers.to_map(category_ref01_resdata_up0_result)
    assert !category_ref01_resdata_up0.nil?
    assert_equal category_ref01_resdata_up0["id"], category_ref01_data_up0_up["id"]
    assert_equal category_ref01_resdata_up0[category_ref01_markdef_up0_name], category_ref01_markdef_up0_value

    # LOAD
    category_ref01_match_dt0 = {
      "id" => category_ref01_data["id"],
    }
    category_ref01_data_dt0_loaded = category_ref01_ent.load(category_ref01_match_dt0, nil)
    category_ref01_data_dt0_load_result = Helpers.to_map(category_ref01_data_dt0_loaded)
    assert !category_ref01_data_dt0_load_result.nil?
    assert_equal category_ref01_data_dt0_load_result["id"], category_ref01_data["id"]

    # REMOVE
    category_ref01_match_rm0 = {
      "id" => category_ref01_data["id"],
    }
    category_ref01_ent.remove(category_ref01_match_rm0, nil)

    # LIST
    category_ref01_match_rt0 = {}

    category_ref01_list_rt0_result = category_ref01_ent.list(category_ref01_match_rt0, nil)
    assert category_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(category_ref01_list_rt0_result),
      { "id" => category_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def category_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "category", "CategoryTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = ShortcutSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["category01", "category02", "category03"],
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
  entid_env_raw = ENV["SHORTCUT_TEST_CATEGORY_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "SHORTCUT_TEST_CATEGORY_ENTID" => idmap,
    "SHORTCUT_TEST_LIVE" => "FALSE",
    "SHORTCUT_TEST_EXPLAIN" => "FALSE",
    "SHORTCUT_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["SHORTCUT_TEST_CATEGORY_ENTID"])
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

# Health entity test

require "minitest/autorun"
require "json"
require_relative "../Shortcut_sdk"
require_relative "runner"

class HealthEntityTest < Minitest::Test
  def test_create_instance
    testsdk = ShortcutSDK.test(nil, nil)
    ent = testsdk.Health(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "health" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = ShortcutSDK.test(seed, nil)
    seen = base.Health(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = ShortcutConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = ShortcutSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Health(nil).stream("list", nil, nil).each do |item|
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
    setup = health_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "health." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_HEALTH_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    health_ref01_ent = client.Health(nil)
    health_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.health"), "health_ref01"))
    health_ref01_data["epic_id"] = setup[:idmap]["epic01"]

    health_ref01_data_result = health_ref01_ent.create(health_ref01_data, nil)
    health_ref01_data = Helpers.to_map(health_ref01_data_result.respond_to?(:data_get) ? health_ref01_data_result.data_get : health_ref01_data_result)
    assert !health_ref01_data.nil?
    assert !health_ref01_data["id"].nil?

    # LIST
    health_ref01_match = {
      "epic_id" => setup[:idmap]["epic01"],
    }

    health_ref01_list_result = health_ref01_ent.list(health_ref01_match, nil)
    assert health_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(health_ref01_list_result),
      { "id" => health_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    health_ref01_data_up0_up = {
      "id" => health_ref01_data["id"],
    }

    health_ref01_markdef_up0_name = "author_id"
    health_ref01_markdef_up0_value = "Mark01-health_ref01_#{setup[:now]}"
    health_ref01_data_up0_up[health_ref01_markdef_up0_name] = health_ref01_markdef_up0_value

    health_ref01_resdata_up0_result = health_ref01_ent.update(health_ref01_data_up0_up, nil)
    health_ref01_resdata_up0 = Helpers.to_map(health_ref01_resdata_up0_result.respond_to?(:data_get) ? health_ref01_resdata_up0_result.data_get : health_ref01_resdata_up0_result)
    assert !health_ref01_resdata_up0.nil?
    assert_equal health_ref01_resdata_up0["id"], health_ref01_data_up0_up["id"]
    assert_equal health_ref01_resdata_up0[health_ref01_markdef_up0_name], health_ref01_markdef_up0_value

    # LOAD
    health_ref01_match_dt0 = {
      "id" => health_ref01_data["id"],
    }
    health_ref01_data_dt0_loaded = health_ref01_ent.load(health_ref01_match_dt0, nil)
    health_ref01_data_dt0_load_result = Helpers.to_map(health_ref01_data_dt0_loaded.respond_to?(:data_get) ? health_ref01_data_dt0_loaded.data_get : health_ref01_data_dt0_loaded)
    assert !health_ref01_data_dt0_load_result.nil?
    assert_equal health_ref01_data_dt0_load_result["id"], health_ref01_data["id"]

  end
end

def health_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "health", "HealthTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = ShortcutSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["health01", "health02", "health03", "epic01", "epic02", "epic03"],
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
  entid_env_raw = ENV["SHORTCUT_TEST_HEALTH_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "SHORTCUT_TEST_HEALTH_ENTID" => idmap,
    "SHORTCUT_TEST_LIVE" => "FALSE",
    "SHORTCUT_TEST_EXPLAIN" => "FALSE",
    "SHORTCUT_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["SHORTCUT_TEST_HEALTH_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["SHORTCUT_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
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

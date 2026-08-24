# KeyResult entity test

require "minitest/autorun"
require "json"
require_relative "../Shortcut_sdk"
require_relative "runner"

class KeyResultEntityTest < Minitest::Test
  def test_create_instance
    testsdk = ShortcutSDK.test(nil, nil)
    ent = testsdk.KeyResult(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = key_result_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "key_result." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_KEY_RESULT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    key_result_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.key_result")))
    key_result_ref01_data = nil
    if key_result_ref01_data_raw.length > 0
      key_result_ref01_data = Helpers.to_map(key_result_ref01_data_raw[0][1])
    end

    # UPDATE
    key_result_ref01_ent = client.KeyResult(nil)
    key_result_ref01_data_up0_up = {
      "id" => key_result_ref01_data["id"],
    }

    key_result_ref01_markdef_up0_name = "name"
    key_result_ref01_markdef_up0_value = "Mark01-key_result_ref01_#{setup[:now]}"
    key_result_ref01_data_up0_up[key_result_ref01_markdef_up0_name] = key_result_ref01_markdef_up0_value

    key_result_ref01_resdata_up0_result = key_result_ref01_ent.update(key_result_ref01_data_up0_up, nil)
    key_result_ref01_resdata_up0 = Helpers.to_map(key_result_ref01_resdata_up0_result)
    assert !key_result_ref01_resdata_up0.nil?
    assert_equal key_result_ref01_resdata_up0["id"], key_result_ref01_data_up0_up["id"]
    assert_equal key_result_ref01_resdata_up0[key_result_ref01_markdef_up0_name], key_result_ref01_markdef_up0_value

    # LOAD
    key_result_ref01_match_dt0 = {
      "id" => key_result_ref01_data["id"],
    }
    key_result_ref01_data_dt0_loaded = key_result_ref01_ent.load(key_result_ref01_match_dt0, nil)
    key_result_ref01_data_dt0_load_result = Helpers.to_map(key_result_ref01_data_dt0_loaded)
    assert !key_result_ref01_data_dt0_load_result.nil?
    assert_equal key_result_ref01_data_dt0_load_result["id"], key_result_ref01_data["id"]

  end
end

def key_result_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "key_result", "KeyResultTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = ShortcutSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["key_result01", "key_result02", "key_result03"],
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
  entid_env_raw = ENV["SHORTCUT_TEST_KEY_RESULT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "SHORTCUT_TEST_KEY_RESULT_ENTID" => idmap,
    "SHORTCUT_TEST_LIVE" => "FALSE",
    "SHORTCUT_TEST_EXPLAIN" => "FALSE",
    "SHORTCUT_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["SHORTCUT_TEST_KEY_RESULT_ENTID"])
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

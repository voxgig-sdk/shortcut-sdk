# CustomField entity test

require "minitest/autorun"
require "json"
require_relative "../Shortcut_sdk"
require_relative "runner"

class CustomFieldEntityTest < Minitest::Test
  def test_create_instance
    testsdk = ShortcutSDK.test(nil, nil)
    ent = testsdk.CustomField(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "custom_field" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = ShortcutSDK.test(seed, nil)
    seen = base.CustomField(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = ShortcutConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = ShortcutSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.CustomField(nil).stream("list", nil, nil).each do |item|
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
    setup = custom_field_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "custom_field." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_CUSTOM_FIELD_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    custom_field_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.custom_field")))
    custom_field_ref01_data = nil
    if custom_field_ref01_data_raw.length > 0
      custom_field_ref01_data = Helpers.to_map(custom_field_ref01_data_raw[0][1])
    end

    # LIST
    custom_field_ref01_ent = client.CustomField(nil)
    custom_field_ref01_match = {}

    custom_field_ref01_list_result = custom_field_ref01_ent.list(custom_field_ref01_match, nil)
    assert custom_field_ref01_list_result.is_a?(Array)

    # UPDATE
    custom_field_ref01_data_up0_up = {
      "id" => custom_field_ref01_data["id"],
    }

    custom_field_ref01_markdef_up0_name = "after_id"
    custom_field_ref01_markdef_up0_value = "Mark01-custom_field_ref01_#{setup[:now]}"
    custom_field_ref01_data_up0_up[custom_field_ref01_markdef_up0_name] = custom_field_ref01_markdef_up0_value

    custom_field_ref01_resdata_up0_result = custom_field_ref01_ent.update(custom_field_ref01_data_up0_up, nil)
    custom_field_ref01_resdata_up0 = Helpers.to_map(custom_field_ref01_resdata_up0_result.respond_to?(:data_get) ? custom_field_ref01_resdata_up0_result.data_get : custom_field_ref01_resdata_up0_result)
    assert !custom_field_ref01_resdata_up0.nil?
    assert_equal custom_field_ref01_resdata_up0["id"], custom_field_ref01_data_up0_up["id"]
    assert_equal custom_field_ref01_resdata_up0[custom_field_ref01_markdef_up0_name], custom_field_ref01_markdef_up0_value

    # LOAD
    custom_field_ref01_match_dt0 = {
      "id" => custom_field_ref01_data["id"],
    }
    custom_field_ref01_data_dt0_loaded = custom_field_ref01_ent.load(custom_field_ref01_match_dt0, nil)
    custom_field_ref01_data_dt0_load_result = Helpers.to_map(custom_field_ref01_data_dt0_loaded.respond_to?(:data_get) ? custom_field_ref01_data_dt0_loaded.data_get : custom_field_ref01_data_dt0_loaded)
    assert !custom_field_ref01_data_dt0_load_result.nil?
    assert_equal custom_field_ref01_data_dt0_load_result["id"], custom_field_ref01_data["id"]

  end
end

def custom_field_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "custom_field", "CustomFieldTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = ShortcutSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["custom_field01", "custom_field02", "custom_field03"],
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
  entid_env_raw = ENV["SHORTCUT_TEST_CUSTOM_FIELD_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "SHORTCUT_TEST_CUSTOM_FIELD_ENTID" => idmap,
    "SHORTCUT_TEST_LIVE" => "FALSE",
    "SHORTCUT_TEST_EXPLAIN" => "FALSE",
    "SHORTCUT_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["SHORTCUT_TEST_CUSTOM_FIELD_ENTID"])
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

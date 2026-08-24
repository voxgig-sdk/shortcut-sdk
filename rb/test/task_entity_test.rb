# Task entity test

require "minitest/autorun"
require "json"
require_relative "../Shortcut_sdk"
require_relative "runner"

class TaskEntityTest < Minitest::Test
  def test_create_instance
    testsdk = ShortcutSDK.test(nil, nil)
    ent = testsdk.Task(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = task_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "task." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_TASK_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    task_ref01_ent = client.Task(nil)
    task_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.task"), "task_ref01"))
    task_ref01_data["story_id"] = setup[:idmap]["story01"]

    task_ref01_data_result = task_ref01_ent.create(task_ref01_data, nil)
    task_ref01_data = Helpers.to_map(task_ref01_data_result.respond_to?(:data_get) ? task_ref01_data_result.data_get : task_ref01_data_result)
    assert !task_ref01_data.nil?
    assert !task_ref01_data["id"].nil?

    # UPDATE
    task_ref01_data_up0_up = {
      "id" => task_ref01_data["id"],
      "story_id" => setup[:idmap]["story_id"],
    }

    task_ref01_markdef_up0_name = "completed_at"
    task_ref01_markdef_up0_value = "Mark01-task_ref01_#{setup[:now]}"
    task_ref01_data_up0_up[task_ref01_markdef_up0_name] = task_ref01_markdef_up0_value

    task_ref01_resdata_up0_result = task_ref01_ent.update(task_ref01_data_up0_up, nil)
    task_ref01_resdata_up0 = Helpers.to_map(task_ref01_resdata_up0_result.respond_to?(:data_get) ? task_ref01_resdata_up0_result.data_get : task_ref01_resdata_up0_result)
    assert !task_ref01_resdata_up0.nil?
    assert_equal task_ref01_resdata_up0["id"], task_ref01_data_up0_up["id"]
    assert_equal task_ref01_resdata_up0[task_ref01_markdef_up0_name], task_ref01_markdef_up0_value

    # LOAD
    task_ref01_match_dt0 = {
      "id" => task_ref01_data["id"],
    }
    task_ref01_data_dt0_loaded = task_ref01_ent.load(task_ref01_match_dt0, nil)
    task_ref01_data_dt0_load_result = Helpers.to_map(task_ref01_data_dt0_loaded.respond_to?(:data_get) ? task_ref01_data_dt0_loaded.data_get : task_ref01_data_dt0_loaded)
    assert !task_ref01_data_dt0_load_result.nil?
    assert_equal task_ref01_data_dt0_load_result["id"], task_ref01_data["id"]

    # REMOVE
    task_ref01_match_rm0 = {
      "id" => task_ref01_data["id"],
    }
    task_ref01_ent.remove(task_ref01_match_rm0, nil)

  end
end

def task_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "task", "TaskTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = ShortcutSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["task01", "task02", "task03", "story01", "story02", "story03"],
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
  entid_env_raw = ENV["SHORTCUT_TEST_TASK_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "SHORTCUT_TEST_TASK_ENTID" => idmap,
    "SHORTCUT_TEST_LIVE" => "FALSE",
    "SHORTCUT_TEST_EXPLAIN" => "FALSE",
    "SHORTCUT_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["SHORTCUT_TEST_TASK_ENTID"])
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

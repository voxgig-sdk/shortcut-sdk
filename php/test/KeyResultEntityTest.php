<?php
declare(strict_types=1);

// KeyResult entity test

require_once __DIR__ . '/../shortcut_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class KeyResultEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = ShortcutSDK::test(null, null);
        $ent = $testsdk->KeyResult(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = key_result_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "key_result." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_KEY_RESULT_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $key_result_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.key_result")));
        $key_result_ref01_data = null;
        if (count($key_result_ref01_data_raw) > 0) {
            $key_result_ref01_data = Helpers::to_map($key_result_ref01_data_raw[0][1]);
        }

        // UPDATE
        $key_result_ref01_ent = $client->KeyResult(null);
        $key_result_ref01_data_up0_up = [
            "id" => $key_result_ref01_data["id"],
        ];

        $key_result_ref01_markdef_up0_name = "name";
        $key_result_ref01_markdef_up0_value = "Mark01-key_result_ref01_" . $setup["now"];
        $key_result_ref01_data_up0_up[$key_result_ref01_markdef_up0_name] = $key_result_ref01_markdef_up0_value;

        $key_result_ref01_resdata_up0_result = $key_result_ref01_ent->update($key_result_ref01_data_up0_up, null);
        $key_result_ref01_resdata_up0 = Helpers::to_map(is_object($key_result_ref01_resdata_up0_result) && method_exists($key_result_ref01_resdata_up0_result, 'data_get') ? $key_result_ref01_resdata_up0_result->data_get() : $key_result_ref01_resdata_up0_result);
        $this->assertNotNull($key_result_ref01_resdata_up0);
        $this->assertEquals($key_result_ref01_resdata_up0["id"], $key_result_ref01_data_up0_up["id"]);
        $this->assertEquals($key_result_ref01_resdata_up0[$key_result_ref01_markdef_up0_name], $key_result_ref01_markdef_up0_value);

        // LOAD
        $key_result_ref01_match_dt0 = [
            "id" => $key_result_ref01_data["id"],
        ];
        $key_result_ref01_data_dt0_loaded = $key_result_ref01_ent->load($key_result_ref01_match_dt0, null);
        $key_result_ref01_data_dt0_load_result = Helpers::to_map(is_object($key_result_ref01_data_dt0_loaded) && method_exists($key_result_ref01_data_dt0_loaded, 'data_get') ? $key_result_ref01_data_dt0_loaded->data_get() : $key_result_ref01_data_dt0_loaded);
        $this->assertNotNull($key_result_ref01_data_dt0_load_result);
        $this->assertEquals($key_result_ref01_data_dt0_load_result["id"], $key_result_ref01_data["id"]);

    }
}

function key_result_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/key_result/KeyResultTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = ShortcutSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["key_result01", "key_result02", "key_result03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("SHORTCUT_TEST_KEY_RESULT_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "SHORTCUT_TEST_KEY_RESULT_ENTID" => $idmap,
        "SHORTCUT_TEST_LIVE" => "FALSE",
        "SHORTCUT_TEST_EXPLAIN" => "FALSE",
        "SHORTCUT_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["SHORTCUT_TEST_KEY_RESULT_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["SHORTCUT_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["SHORTCUT_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new ShortcutSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["SHORTCUT_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["SHORTCUT_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}

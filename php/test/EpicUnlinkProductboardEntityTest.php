<?php
declare(strict_types=1);

// EpicUnlinkProductboard entity test

require_once __DIR__ . '/../shortcut_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class EpicUnlinkProductboardEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = ShortcutSDK::test(null, null);
        $ent = $testsdk->EpicUnlinkProductboard(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = epic_unlink_productboard_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "epic_unlink_productboard." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_EPIC_UNLINK_PRODUCTBOARD_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $epic_unlink_productboard_ref01_ent = $client->EpicUnlinkProductboard(null);
        $epic_unlink_productboard_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.epic_unlink_productboard"), "epic_unlink_productboard_ref01"));
        $epic_unlink_productboard_ref01_data["epic-public-id"] = $setup["idmap"]["epic-public-id01"];

        $epic_unlink_productboard_ref01_data_result = $epic_unlink_productboard_ref01_ent->create($epic_unlink_productboard_ref01_data, null);
        $epic_unlink_productboard_ref01_data = Helpers::to_map($epic_unlink_productboard_ref01_data_result);
        $this->assertNotNull($epic_unlink_productboard_ref01_data);

    }
}

function epic_unlink_productboard_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/epic_unlink_productboard/EpicUnlinkProductboardTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = ShortcutSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["epic_unlink_productboard01", "epic_unlink_productboard02", "epic_unlink_productboard03", "epic-public-id01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("SHORTCUT_TEST_EPIC_UNLINK_PRODUCTBOARD_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "SHORTCUT_TEST_EPIC_UNLINK_PRODUCTBOARD_ENTID" => $idmap,
        "SHORTCUT_TEST_LIVE" => "FALSE",
        "SHORTCUT_TEST_EXPLAIN" => "FALSE",
        "SHORTCUT_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["SHORTCUT_TEST_EPIC_UNLINK_PRODUCTBOARD_ENTID"]);
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

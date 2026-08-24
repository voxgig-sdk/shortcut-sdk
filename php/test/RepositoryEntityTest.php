<?php
declare(strict_types=1);

// Repository entity test

require_once __DIR__ . '/../shortcut_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class RepositoryEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = ShortcutSDK::test(null, null);
        $ent = $testsdk->Repository(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "repository" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = ShortcutSDK::test($seed, null);
        $seen = iterator_to_array($base->Repository(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = ShortcutConfig::make_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = ShortcutSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Repository(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = repository_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "repository." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_REPOSITORY_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $repository_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.repository")));
        $repository_ref01_data = null;
        if (count($repository_ref01_data_raw) > 0) {
            $repository_ref01_data = Helpers::to_map($repository_ref01_data_raw[0][1]);
        }

        // LIST
        $repository_ref01_ent = $client->Repository(null);
        $repository_ref01_match = [];

        $repository_ref01_list_result = $repository_ref01_ent->list($repository_ref01_match, null);
        $this->assertIsArray($repository_ref01_list_result);

        // LOAD
        $repository_ref01_match_dt0 = [
            "id" => $repository_ref01_data["id"],
        ];
        $repository_ref01_data_dt0_loaded = $repository_ref01_ent->load($repository_ref01_match_dt0, null);
        $repository_ref01_data_dt0_load_result = Helpers::to_map($repository_ref01_data_dt0_loaded);
        $this->assertNotNull($repository_ref01_data_dt0_load_result);
        $this->assertEquals($repository_ref01_data_dt0_load_result["id"], $repository_ref01_data["id"]);

    }
}

function repository_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/repository/RepositoryTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = ShortcutSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["repository01", "repository02", "repository03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("SHORTCUT_TEST_REPOSITORY_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "SHORTCUT_TEST_REPOSITORY_ENTID" => $idmap,
        "SHORTCUT_TEST_LIVE" => "FALSE",
        "SHORTCUT_TEST_EXPLAIN" => "FALSE",
        "SHORTCUT_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["SHORTCUT_TEST_REPOSITORY_ENTID"]);
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

<?php
declare(strict_types=1);

// UploadedFile entity test

require_once __DIR__ . '/../shortcut_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class UploadedFileEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = ShortcutSDK::test(null, null);
        $ent = $testsdk->UploadedFile(null);
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
                "uploaded_file" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = ShortcutSDK::test($seed, null);
        $seen = iterator_to_array($base->UploadedFile(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = ShortcutConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = ShortcutSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->UploadedFile(null)->stream("list", null, null) as $item) {
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
        $setup = uploaded_file_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "uploaded_file." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_UPLOADED_FILE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $uploaded_file_ref01_ent = $client->UploadedFile(null);
        $uploaded_file_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.uploaded_file"), "uploaded_file_ref01"));

        $uploaded_file_ref01_data_result = $uploaded_file_ref01_ent->create($uploaded_file_ref01_data, null);
        $uploaded_file_ref01_data = Helpers::to_map(is_object($uploaded_file_ref01_data_result) && method_exists($uploaded_file_ref01_data_result, 'data_get') ? $uploaded_file_ref01_data_result->data_get() : $uploaded_file_ref01_data_result);
        $this->assertNotNull($uploaded_file_ref01_data);
        $this->assertNotNull($uploaded_file_ref01_data["id"]);

        // LIST
        $uploaded_file_ref01_match = [];

        $uploaded_file_ref01_list_result = $uploaded_file_ref01_ent->list($uploaded_file_ref01_match, null);
        $this->assertIsArray($uploaded_file_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($uploaded_file_ref01_list_result),
            ["id" => $uploaded_file_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $uploaded_file_ref01_data_up0_up = [
            "id" => $uploaded_file_ref01_data["id"],
        ];

        $uploaded_file_ref01_markdef_up0_name = "content_type";
        $uploaded_file_ref01_markdef_up0_value = "Mark01-uploaded_file_ref01_" . $setup["now"];
        $uploaded_file_ref01_data_up0_up[$uploaded_file_ref01_markdef_up0_name] = $uploaded_file_ref01_markdef_up0_value;

        $uploaded_file_ref01_resdata_up0_result = $uploaded_file_ref01_ent->update($uploaded_file_ref01_data_up0_up, null);
        $uploaded_file_ref01_resdata_up0 = Helpers::to_map(is_object($uploaded_file_ref01_resdata_up0_result) && method_exists($uploaded_file_ref01_resdata_up0_result, 'data_get') ? $uploaded_file_ref01_resdata_up0_result->data_get() : $uploaded_file_ref01_resdata_up0_result);
        $this->assertNotNull($uploaded_file_ref01_resdata_up0);
        $this->assertEquals($uploaded_file_ref01_resdata_up0["id"], $uploaded_file_ref01_data_up0_up["id"]);
        $this->assertEquals($uploaded_file_ref01_resdata_up0[$uploaded_file_ref01_markdef_up0_name], $uploaded_file_ref01_markdef_up0_value);

        // LOAD
        $uploaded_file_ref01_match_dt0 = [
            "id" => $uploaded_file_ref01_data["id"],
        ];
        $uploaded_file_ref01_data_dt0_loaded = $uploaded_file_ref01_ent->load($uploaded_file_ref01_match_dt0, null);
        $uploaded_file_ref01_data_dt0_load_result = Helpers::to_map(is_object($uploaded_file_ref01_data_dt0_loaded) && method_exists($uploaded_file_ref01_data_dt0_loaded, 'data_get') ? $uploaded_file_ref01_data_dt0_loaded->data_get() : $uploaded_file_ref01_data_dt0_loaded);
        $this->assertNotNull($uploaded_file_ref01_data_dt0_load_result);
        $this->assertEquals($uploaded_file_ref01_data_dt0_load_result["id"], $uploaded_file_ref01_data["id"]);

        // REMOVE
        $uploaded_file_ref01_match_rm0 = [
            "id" => $uploaded_file_ref01_data["id"],
        ];
        $uploaded_file_ref01_ent->remove($uploaded_file_ref01_match_rm0, null);

        // LIST
        $uploaded_file_ref01_match_rt0 = [];

        $uploaded_file_ref01_list_rt0_result = $uploaded_file_ref01_ent->list($uploaded_file_ref01_match_rt0, null);
        $this->assertIsArray($uploaded_file_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($uploaded_file_ref01_list_rt0_result),
            ["id" => $uploaded_file_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function uploaded_file_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/uploaded_file/UploadedFileTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = ShortcutSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["uploaded_file01", "uploaded_file02", "uploaded_file03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("SHORTCUT_TEST_UPLOADED_FILE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "SHORTCUT_TEST_UPLOADED_FILE_ENTID" => $idmap,
        "SHORTCUT_TEST_LIVE" => "FALSE",
        "SHORTCUT_TEST_EXPLAIN" => "FALSE",
        "SHORTCUT_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["SHORTCUT_TEST_UPLOADED_FILE_ENTID"]);
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

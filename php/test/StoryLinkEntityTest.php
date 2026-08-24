<?php
declare(strict_types=1);

// StoryLink entity test

require_once __DIR__ . '/../shortcut_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class StoryLinkEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = ShortcutSDK::test(null, null);
        $ent = $testsdk->StoryLink(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = story_link_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "story_link." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_STORY_LINK_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $story_link_ref01_ent = $client->StoryLink(null);
        $story_link_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.story_link"), "story_link_ref01"));

        $story_link_ref01_data_result = $story_link_ref01_ent->create($story_link_ref01_data, null);
        $story_link_ref01_data = Helpers::to_map($story_link_ref01_data_result);
        $this->assertNotNull($story_link_ref01_data);
        $this->assertNotNull($story_link_ref01_data["id"]);

        // UPDATE
        $story_link_ref01_data_up0_up = [
            "id" => $story_link_ref01_data["id"],
        ];

        $story_link_ref01_markdef_up0_name = "created_at";
        $story_link_ref01_markdef_up0_value = "Mark01-story_link_ref01_" . $setup["now"];
        $story_link_ref01_data_up0_up[$story_link_ref01_markdef_up0_name] = $story_link_ref01_markdef_up0_value;

        $story_link_ref01_resdata_up0_result = $story_link_ref01_ent->update($story_link_ref01_data_up0_up, null);
        $story_link_ref01_resdata_up0 = Helpers::to_map($story_link_ref01_resdata_up0_result);
        $this->assertNotNull($story_link_ref01_resdata_up0);
        $this->assertEquals($story_link_ref01_resdata_up0["id"], $story_link_ref01_data_up0_up["id"]);
        $this->assertEquals($story_link_ref01_resdata_up0[$story_link_ref01_markdef_up0_name], $story_link_ref01_markdef_up0_value);

        // LOAD
        $story_link_ref01_match_dt0 = [
            "id" => $story_link_ref01_data["id"],
        ];
        $story_link_ref01_data_dt0_loaded = $story_link_ref01_ent->load($story_link_ref01_match_dt0, null);
        $story_link_ref01_data_dt0_load_result = Helpers::to_map($story_link_ref01_data_dt0_loaded);
        $this->assertNotNull($story_link_ref01_data_dt0_load_result);
        $this->assertEquals($story_link_ref01_data_dt0_load_result["id"], $story_link_ref01_data["id"]);

        // REMOVE
        $story_link_ref01_match_rm0 = [
            "id" => $story_link_ref01_data["id"],
        ];
        $story_link_ref01_ent->remove($story_link_ref01_match_rm0, null);

    }
}

function story_link_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/story_link/StoryLinkTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = ShortcutSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["story_link01", "story_link02", "story_link03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("SHORTCUT_TEST_STORY_LINK_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "SHORTCUT_TEST_STORY_LINK_ENTID" => $idmap,
        "SHORTCUT_TEST_LIVE" => "FALSE",
        "SHORTCUT_TEST_EXPLAIN" => "FALSE",
        "SHORTCUT_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["SHORTCUT_TEST_STORY_LINK_ENTID"]);
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

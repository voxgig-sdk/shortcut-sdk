<?php
declare(strict_types=1);

// StoryReaction entity test

require_once __DIR__ . '/../shortcut_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class StoryReactionEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = ShortcutSDK::test(null, null);
        $ent = $testsdk->StoryReaction(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = story_reaction_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "story_reaction." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_STORY_REACTION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $story_reaction_ref01_ent = $client->StoryReaction(null);
        $story_reaction_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.story_reaction"), "story_reaction_ref01"));
        $story_reaction_ref01_data["comment_id"] = $setup["idmap"]["comment01"];
        $story_reaction_ref01_data["story_id"] = $setup["idmap"]["story01"];

        $story_reaction_ref01_data_result = $story_reaction_ref01_ent->create($story_reaction_ref01_data, null);
        $story_reaction_ref01_data = Helpers::to_map($story_reaction_ref01_data_result);
        $this->assertNotNull($story_reaction_ref01_data);


    }
}

function story_reaction_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/story_reaction/StoryReactionTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = ShortcutSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["story_reaction01", "story_reaction02", "story_reaction03", "story01", "story02", "story03", "comment01", "comment02", "comment03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("SHORTCUT_TEST_STORY_REACTION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "SHORTCUT_TEST_STORY_REACTION_ENTID" => $idmap,
        "SHORTCUT_TEST_LIVE" => "FALSE",
        "SHORTCUT_TEST_EXPLAIN" => "FALSE",
        "SHORTCUT_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["SHORTCUT_TEST_STORY_REACTION_ENTID"]);
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

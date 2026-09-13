# StoryComment entity test

import json
import os
import time

import pytest

from shortcut_sdk.utility.voxgig_struct import voxgig_struct as vs
from shortcut_sdk import ShortcutSDK
from shortcut_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestStoryCommentEntity:

    def test_should_create_instance(self):
        testsdk = ShortcutSDK.test(None, None)
        ent = testsdk.StoryComment(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "story_comment": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = ShortcutSDK.test(seed, None)
        seen = list(base.StoryComment(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from shortcut_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = ShortcutSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.StoryComment(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _story_comment_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "story_comment." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set SHORTCUT_TEST_STORY_COMMENT_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        story_comment_ref01_ent = client.StoryComment(None)
        story_comment_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.story_comment"), "story_comment_ref01"))
        story_comment_ref01_data["story-public-id"] = setup["idmap"]["story-public-id01"]
        story_comment_ref01_data["story_id"] = setup["idmap"]["story01"]

        story_comment_ref01_data = helpers.to_map(runner.entity_data(story_comment_ref01_ent.create(story_comment_ref01_data, None)))
        assert story_comment_ref01_data is not None
        assert story_comment_ref01_data["id"] is not None

        # LIST
        story_comment_ref01_match = {
            "story-public-id": setup["idmap"]["story-public-id01"],
        }

        story_comment_ref01_list_result = story_comment_ref01_ent.list(story_comment_ref01_match, None)
        assert isinstance(story_comment_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(story_comment_ref01_list_result),
            {"id": story_comment_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        story_comment_ref01_data_up0_up = {
            "id": story_comment_ref01_data["id"],
            "story_id": setup["idmap"]["story_id"],
        }

        story_comment_ref01_markdef_up0_name = "app_url"
        story_comment_ref01_markdef_up0_value = "Mark01-story_comment_ref01_" + str(setup["now"])
        story_comment_ref01_data_up0_up[story_comment_ref01_markdef_up0_name] = story_comment_ref01_markdef_up0_value

        story_comment_ref01_resdata_up0 = helpers.to_map(runner.entity_data(story_comment_ref01_ent.update(story_comment_ref01_data_up0_up, None)))
        assert story_comment_ref01_resdata_up0 is not None
        assert story_comment_ref01_resdata_up0["id"] == story_comment_ref01_data_up0_up["id"]
        assert story_comment_ref01_resdata_up0[story_comment_ref01_markdef_up0_name] == story_comment_ref01_markdef_up0_value

        # LOAD
        story_comment_ref01_match_dt0 = {
            "id": story_comment_ref01_data["id"],
        }
        story_comment_ref01_data_dt0_loaded = story_comment_ref01_ent.load(story_comment_ref01_match_dt0, None)
        story_comment_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(story_comment_ref01_data_dt0_loaded))
        assert story_comment_ref01_data_dt0_load_result is not None
        assert story_comment_ref01_data_dt0_load_result["id"] == story_comment_ref01_data["id"]



def _story_comment_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/story_comment/StoryCommentTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = ShortcutSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["story_comment01", "story_comment02", "story_comment03", "story01", "story02", "story03", "comment01", "comment02", "comment03", "story-public-id01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "SHORTCUT_TEST_STORY_COMMENT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "SHORTCUT_TEST_STORY_COMMENT_ENTID": idmap,
        "SHORTCUT_TEST_LIVE": "FALSE",
        "SHORTCUT_TEST_EXPLAIN": "FALSE",
        "SHORTCUT_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("SHORTCUT_TEST_STORY_COMMENT_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("story_id") is None:
        idmap_resolved["story_id"] = idmap_resolved.get("story01")

    if env.get("SHORTCUT_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("SHORTCUT_APIKEY"),
            },
            extra or {},
        ])
        client = ShortcutSDK(helpers.to_map(merged_opts))

    _live = env.get("SHORTCUT_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("SHORTCUT_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }

# Story entity test

import json
import os
import time

import pytest

from shortcut_sdk.utility.voxgig_struct import voxgig_struct as vs
from shortcut_sdk import ShortcutSDK
from shortcut_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestStoryEntity:

    def test_should_create_instance(self):
        testsdk = ShortcutSDK.test(None, None)
        ent = testsdk.Story(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "story": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = ShortcutSDK.test(seed, None)
        seen = list(base.Story(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from shortcut_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = ShortcutSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.Story(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _story_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "story." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set SHORTCUT_TEST_STORY_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        story_ref01_ent = client.Story(None)
        story_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.story"), "story_ref01"))
        story_ref01_data["epic_id"] = setup["idmap"]["epic01"]
        story_ref01_data["group_id"] = setup["idmap"]["group01"]
        story_ref01_data["iteration_id"] = setup["idmap"]["iteration01"]
        story_ref01_data["label_id"] = setup["idmap"]["label01"]
        story_ref01_data["project_id"] = setup["idmap"]["project01"]

        story_ref01_data = helpers.to_map(runner.entity_data(story_ref01_ent.create(story_ref01_data, None)))
        assert story_ref01_data is not None
        assert story_ref01_data["id"] is not None

        # LIST
        story_ref01_match = {}

        story_ref01_list_result = story_ref01_ent.list(story_ref01_match, None)
        assert isinstance(story_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(story_ref01_list_result),
            {"id": story_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        story_ref01_data_up0_up = {
            "id": story_ref01_data["id"],
        }

        story_ref01_markdef_up0_name = "app_url"
        story_ref01_markdef_up0_value = "Mark01-story_ref01_" + str(setup["now"])
        story_ref01_data_up0_up[story_ref01_markdef_up0_name] = story_ref01_markdef_up0_value

        story_ref01_resdata_up0 = helpers.to_map(runner.entity_data(story_ref01_ent.update(story_ref01_data_up0_up, None)))
        assert story_ref01_resdata_up0 is not None
        assert story_ref01_resdata_up0["id"] == story_ref01_data_up0_up["id"]
        assert story_ref01_resdata_up0[story_ref01_markdef_up0_name] == story_ref01_markdef_up0_value

        # LOAD
        story_ref01_match_dt0 = {
            "id": story_ref01_data["id"],
        }
        story_ref01_data_dt0_loaded = story_ref01_ent.load(story_ref01_match_dt0, None)
        story_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(story_ref01_data_dt0_loaded))
        assert story_ref01_data_dt0_load_result is not None
        assert story_ref01_data_dt0_load_result["id"] == story_ref01_data["id"]

        # REMOVE
        story_ref01_match_rm0 = {
            "id": story_ref01_data["id"],
        }
        story_ref01_ent.remove(story_ref01_match_rm0, None)

        # LIST
        story_ref01_match_rt0 = {}

        story_ref01_list_rt0_result = story_ref01_ent.list(story_ref01_match_rt0, None)
        assert isinstance(story_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(story_ref01_list_rt0_result),
            {"id": story_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _story_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/story/StoryTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = ShortcutSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["story01", "story02", "story03", "epic01", "epic02", "epic03", "group01", "group02", "group03", "iteration01", "iteration02", "iteration03", "label01", "label02", "label03", "project01", "project02", "project03"],
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
        "SHORTCUT_TEST_STORY_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "SHORTCUT_TEST_STORY_ENTID": idmap,
        "SHORTCUT_TEST_LIVE": "FALSE",
        "SHORTCUT_TEST_EXPLAIN": "FALSE",
        "SHORTCUT_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("SHORTCUT_TEST_STORY_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("SHORTCUT_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
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

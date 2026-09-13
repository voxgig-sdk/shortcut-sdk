# StoryLink entity test

import json
import os
import time

import pytest

from shortcut_sdk.utility.voxgig_struct import voxgig_struct as vs
from shortcut_sdk import ShortcutSDK
from shortcut_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestStoryLinkEntity:

    def test_should_create_instance(self):
        testsdk = ShortcutSDK.test(None, None)
        ent = testsdk.StoryLink(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _story_link_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "story_link." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set SHORTCUT_TEST_STORY_LINK_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        story_link_ref01_ent = client.StoryLink(None)
        story_link_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.story_link"), "story_link_ref01"))

        story_link_ref01_data = helpers.to_map(runner.entity_data(story_link_ref01_ent.create(story_link_ref01_data, None)))
        assert story_link_ref01_data is not None
        assert story_link_ref01_data["id"] is not None

        # UPDATE
        story_link_ref01_data_up0_up = {
            "id": story_link_ref01_data["id"],
        }

        story_link_ref01_markdef_up0_name = "created_at"
        story_link_ref01_markdef_up0_value = "Mark01-story_link_ref01_" + str(setup["now"])
        story_link_ref01_data_up0_up[story_link_ref01_markdef_up0_name] = story_link_ref01_markdef_up0_value

        story_link_ref01_resdata_up0 = helpers.to_map(runner.entity_data(story_link_ref01_ent.update(story_link_ref01_data_up0_up, None)))
        assert story_link_ref01_resdata_up0 is not None
        assert story_link_ref01_resdata_up0["id"] == story_link_ref01_data_up0_up["id"]
        assert story_link_ref01_resdata_up0[story_link_ref01_markdef_up0_name] == story_link_ref01_markdef_up0_value

        # LOAD
        story_link_ref01_match_dt0 = {
            "id": story_link_ref01_data["id"],
        }
        story_link_ref01_data_dt0_loaded = story_link_ref01_ent.load(story_link_ref01_match_dt0, None)
        story_link_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(story_link_ref01_data_dt0_loaded))
        assert story_link_ref01_data_dt0_load_result is not None
        assert story_link_ref01_data_dt0_load_result["id"] == story_link_ref01_data["id"]

        # REMOVE
        story_link_ref01_match_rm0 = {
            "id": story_link_ref01_data["id"],
        }
        story_link_ref01_ent.remove(story_link_ref01_match_rm0, None)



def _story_link_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/story_link/StoryLinkTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = ShortcutSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["story_link01", "story_link02", "story_link03"],
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
        "SHORTCUT_TEST_STORY_LINK_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "SHORTCUT_TEST_STORY_LINK_ENTID": idmap,
        "SHORTCUT_TEST_LIVE": "FALSE",
        "SHORTCUT_TEST_EXPLAIN": "FALSE",
        "SHORTCUT_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("SHORTCUT_TEST_STORY_LINK_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

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

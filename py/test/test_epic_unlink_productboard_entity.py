# EpicUnlinkProductboard entity test

import json
import os
import time

import pytest

from shortcut_sdk.utility.voxgig_struct import voxgig_struct as vs
from shortcut_sdk import ShortcutSDK
from shortcut_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestEpicUnlinkProductboardEntity:

    def test_should_create_instance(self):
        testsdk = ShortcutSDK.test(None, None)
        ent = testsdk.EpicUnlinkProductboard(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _epic_unlink_productboard_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "epic_unlink_productboard." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set SHORTCUT_TEST_EPIC_UNLINK_PRODUCTBOARD_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        epic_unlink_productboard_ref01_ent = client.EpicUnlinkProductboard(None)
        epic_unlink_productboard_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.epic_unlink_productboard"), "epic_unlink_productboard_ref01"))
        epic_unlink_productboard_ref01_data["epic-public-id"] = setup["idmap"]["epic-public-id01"]

        epic_unlink_productboard_ref01_data = helpers.to_map(epic_unlink_productboard_ref01_ent.create(epic_unlink_productboard_ref01_data, None))
        assert epic_unlink_productboard_ref01_data is not None



def _epic_unlink_productboard_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/epic_unlink_productboard/EpicUnlinkProductboardTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = ShortcutSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["epic_unlink_productboard01", "epic_unlink_productboard02", "epic_unlink_productboard03", "epic-public-id01"],
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
        "SHORTCUT_TEST_EPIC_UNLINK_PRODUCTBOARD_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "SHORTCUT_TEST_EPIC_UNLINK_PRODUCTBOARD_ENTID": idmap,
        "SHORTCUT_TEST_LIVE": "FALSE",
        "SHORTCUT_TEST_EXPLAIN": "FALSE",
        "SHORTCUT_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("SHORTCUT_TEST_EPIC_UNLINK_PRODUCTBOARD_ENTID"))
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

# Objective entity test

import json
import os
import time

import pytest

from shortcut_sdk.utility.voxgig_struct import voxgig_struct as vs
from shortcut_sdk import ShortcutSDK
from shortcut_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestObjectiveEntity:

    def test_should_create_instance(self):
        testsdk = ShortcutSDK.test(None, None)
        ent = testsdk.Objective(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "objective": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = ShortcutSDK.test(seed, None)
        seen = list(base.Objective(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from shortcut_sdk.config import make_config
        cfg = make_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = ShortcutSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.Objective(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _objective_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "objective." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set SHORTCUT_TEST_OBJECTIVE_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        objective_ref01_ent = client.Objective(None)
        objective_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.objective"), "objective_ref01"))

        objective_ref01_data = helpers.to_map(objective_ref01_ent.create(objective_ref01_data, None))
        assert objective_ref01_data is not None
        assert objective_ref01_data["id"] is not None

        # LIST
        objective_ref01_match = {}

        objective_ref01_list_result = objective_ref01_ent.list(objective_ref01_match, None)
        assert isinstance(objective_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(objective_ref01_list_result),
            {"id": objective_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        objective_ref01_data_up0_up = {
            "id": objective_ref01_data["id"],
        }

        objective_ref01_markdef_up0_name = "app_url"
        objective_ref01_markdef_up0_value = "Mark01-objective_ref01_" + str(setup["now"])
        objective_ref01_data_up0_up[objective_ref01_markdef_up0_name] = objective_ref01_markdef_up0_value

        objective_ref01_resdata_up0 = helpers.to_map(objective_ref01_ent.update(objective_ref01_data_up0_up, None))
        assert objective_ref01_resdata_up0 is not None
        assert objective_ref01_resdata_up0["id"] == objective_ref01_data_up0_up["id"]
        assert objective_ref01_resdata_up0[objective_ref01_markdef_up0_name] == objective_ref01_markdef_up0_value

        # LOAD
        objective_ref01_match_dt0 = {
            "id": objective_ref01_data["id"],
        }
        objective_ref01_data_dt0_loaded = objective_ref01_ent.load(objective_ref01_match_dt0, None)
        objective_ref01_data_dt0_load_result = helpers.to_map(objective_ref01_data_dt0_loaded)
        assert objective_ref01_data_dt0_load_result is not None
        assert objective_ref01_data_dt0_load_result["id"] == objective_ref01_data["id"]



def _objective_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/objective/ObjectiveTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = ShortcutSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["objective01", "objective02", "objective03", "objectif01", "objectif02", "objectif03"],
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
        "SHORTCUT_TEST_OBJECTIVE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "SHORTCUT_TEST_OBJECTIVE_ENTID": idmap,
        "SHORTCUT_TEST_LIVE": "FALSE",
        "SHORTCUT_TEST_EXPLAIN": "FALSE",
        "SHORTCUT_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("SHORTCUT_TEST_OBJECTIVE_ENTID"))
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

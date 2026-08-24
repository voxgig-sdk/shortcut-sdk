# EntityTemplate entity test

import json
import os
import time

import pytest

from shortcut_sdk.utility.voxgig_struct import voxgig_struct as vs
from shortcut_sdk import ShortcutSDK
from shortcut_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestEntityTemplateEntity:

    def test_should_create_instance(self):
        testsdk = ShortcutSDK.test(None, None)
        ent = testsdk.EntityTemplate(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "entity_template": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = ShortcutSDK.test(seed, None)
        seen = list(base.EntityTemplate(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from shortcut_sdk.config import make_config
        cfg = make_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = ShortcutSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.EntityTemplate(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _entity_template_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "entity_template." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set SHORTCUT_TEST_ENTITY_TEMPLATE_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        entity_template_ref01_ent = client.EntityTemplate(None)
        entity_template_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.entity_template"), "entity_template_ref01"))

        entity_template_ref01_data = helpers.to_map(entity_template_ref01_ent.create(entity_template_ref01_data, None))
        assert entity_template_ref01_data is not None
        assert entity_template_ref01_data["id"] is not None

        # LIST
        entity_template_ref01_match = {}

        entity_template_ref01_list_result = entity_template_ref01_ent.list(entity_template_ref01_match, None)
        assert isinstance(entity_template_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(entity_template_ref01_list_result),
            {"id": entity_template_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        entity_template_ref01_data_up0_up = {
            "id": entity_template_ref01_data["id"],
        }

        entity_template_ref01_markdef_up0_name = "author_id"
        entity_template_ref01_markdef_up0_value = "Mark01-entity_template_ref01_" + str(setup["now"])
        entity_template_ref01_data_up0_up[entity_template_ref01_markdef_up0_name] = entity_template_ref01_markdef_up0_value

        entity_template_ref01_resdata_up0 = helpers.to_map(entity_template_ref01_ent.update(entity_template_ref01_data_up0_up, None))
        assert entity_template_ref01_resdata_up0 is not None
        assert entity_template_ref01_resdata_up0["id"] == entity_template_ref01_data_up0_up["id"]
        assert entity_template_ref01_resdata_up0[entity_template_ref01_markdef_up0_name] == entity_template_ref01_markdef_up0_value

        # LOAD
        entity_template_ref01_match_dt0 = {
            "id": entity_template_ref01_data["id"],
        }
        entity_template_ref01_data_dt0_loaded = entity_template_ref01_ent.load(entity_template_ref01_match_dt0, None)
        entity_template_ref01_data_dt0_load_result = helpers.to_map(entity_template_ref01_data_dt0_loaded)
        assert entity_template_ref01_data_dt0_load_result is not None
        assert entity_template_ref01_data_dt0_load_result["id"] == entity_template_ref01_data["id"]

        # REMOVE
        entity_template_ref01_match_rm0 = {
            "id": entity_template_ref01_data["id"],
        }
        entity_template_ref01_ent.remove(entity_template_ref01_match_rm0, None)

        # LIST
        entity_template_ref01_match_rt0 = {}

        entity_template_ref01_list_rt0_result = entity_template_ref01_ent.list(entity_template_ref01_match_rt0, None)
        assert isinstance(entity_template_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(entity_template_ref01_list_rt0_result),
            {"id": entity_template_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _entity_template_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/entity_template/EntityTemplateTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = ShortcutSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["entity_template01", "entity_template02", "entity_template03"],
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
        "SHORTCUT_TEST_ENTITY_TEMPLATE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "SHORTCUT_TEST_ENTITY_TEMPLATE_ENTID": idmap,
        "SHORTCUT_TEST_LIVE": "FALSE",
        "SHORTCUT_TEST_EXPLAIN": "FALSE",
        "SHORTCUT_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("SHORTCUT_TEST_ENTITY_TEMPLATE_ENTID"))
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

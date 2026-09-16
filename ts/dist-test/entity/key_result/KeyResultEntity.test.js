"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('KeyResultEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SHORTCUT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ShortcutSDK.test();
        const ent = testsdk.KeyResult();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SHORTCUT_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'key_result.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "current_observed_value", "req": true, "short": "The starting value of the Key Result.", "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "current_target_value", "req": true, "short": "The starting value of the Key Result.", "type": "`$OBJECT`", "index$": 1 }, { "active": true, "format": "uuid", "name": "id", "req": true, "short": "The ID of the Key Result.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "initial_observed_value", "op": { "update": { "req": false, "type": "`$OBJECT`" } }, "req": true, "short": "The starting value of the Key Result.", "type": "`$OBJECT`", "index$": 3 }, { "active": true, "name": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "The name of the Key Result.", "type": "`$STRING`", "index$": 4 }, { "active": true, "format": "int64", "name": "objective_id", "req": true, "short": "The Objective to which this Key Result belongs.", "type": "`$INTEGER`", "index$": 5 }, { "active": true, "name": "observed_value", "req": false, "short": "The starting value of the Key Result.", "type": "`$OBJECT`", "index$": 6 }, { "active": true, "format": "int64", "name": "progress", "req": true, "short": "The integer percentage of progress toward completion of the Key Result.", "type": "`$INTEGER`", "index$": 7 }, { "active": true, "name": "target_value", "req": false, "short": "The starting value of the Key Result.", "type": "`$OBJECT`", "index$": 8 }, { "active": true, "name": "type", "req": true, "short": "The type of the Key Result (numeric, percent, or boolean).", "type": "`$STRING`", "index$": 9 }], "id": { "field": "id", "name": "id" }, "name": "key_result", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "key_result_public_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /api/v3/key-results/{key-result-public-id}", "json": "{\"operationId\":\"getKeyResult\",\"parameters\":[{\"description\":\"The ID of the Key Result.\",\"in\":\"path\",\"name\":\"key-result-public-id\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"current_observed_value\":{\"additionalProperties\":false,\"description\":\"The starting value of the Key Result.\",\"properties\":{\"boolean_value\":{\"description\":\"The boolean value.\",\"type\":\"boolean\"},\"numeric_value\":{\"description\":\"The numeric value, as a decimal string. No more than two decimal places are allowed.\",\"type\":\"string\"}},\"type\":\"object\"},\"current_target_value\":{\"additionalProperties\":false,\"description\":\"The starting value of the Key Result.\",\"properties\":{\"boolean_value\":{\"description\":\"The boolean value.\",\"type\":\"boolean\"},\"numeric_value\":{\"description\":\"The numeric value, as a decimal string. No more than two decimal places are allowed.\",\"type\":\"string\"}},\"type\":\"object\"},\"id\":{\"description\":\"The ID of the Key Result.\",\"format\":\"uuid\",\"type\":\"string\"},\"initial_observed_value\":{\"additionalProperties\":false,\"description\":\"The starting value of the Key Result.\",\"properties\":{\"boolean_value\":{\"description\":\"The boolean value.\",\"type\":\"boolean\"},\"numeric_value\":{\"description\":\"The numeric value, as a decimal string. No more than two decimal places are allowed.\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"The name of the Key Result.\",\"type\":\"string\"},\"objective_id\":{\"description\":\"The Objective to which this Key Result belongs.\",\"format\":\"int64\",\"type\":\"integer\"},\"progress\":{\"description\":\"The integer percentage of progress toward completion of the Key Result.\",\"format\":\"int64\",\"type\":\"integer\"},\"type\":{\"description\":\"The type of the Key Result (numeric, percent, or boolean).\",\"enum\":[\"percent\",\"boolean\",\"numeric\"],\"type\":\"string\"}},\"required\":[\"id\",\"name\",\"objective_id\",\"type\",\"initial_observed_value\",\"current_observed_value\",\"current_target_value\",\"progress\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v3/key-results/{key-result-public-id}", "rename": { "param": { "key-result-public-id": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v3" }, { "lit": "key-results" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "key_result_public_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "PUT /api/v3/key-results/{key-result-public-id}", "json": "{\"operationId\":\"updateKeyResult\",\"parameters\":[{\"description\":\"The ID of the Key Result.\",\"in\":\"path\",\"name\":\"key-result-public-id\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"initial_observed_value\":{\"additionalProperties\":false,\"description\":\"The starting value of the Key Result.\",\"properties\":{\"boolean_value\":{\"description\":\"The boolean value.\",\"type\":\"boolean\"},\"numeric_value\":{\"description\":\"The numeric value, as a decimal string. No more than two decimal places are allowed.\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"The name of the Key Result.\",\"maxLength\":1024,\"type\":\"string\"},\"observed_value\":{\"additionalProperties\":false,\"description\":\"The starting value of the Key Result.\",\"properties\":{\"boolean_value\":{\"description\":\"The boolean value.\",\"type\":\"boolean\"},\"numeric_value\":{\"description\":\"The numeric value, as a decimal string. No more than two decimal places are allowed.\",\"type\":\"string\"}},\"type\":\"object\"},\"target_value\":{\"additionalProperties\":false,\"description\":\"The starting value of the Key Result.\",\"properties\":{\"boolean_value\":{\"description\":\"The boolean value.\",\"type\":\"boolean\"},\"numeric_value\":{\"description\":\"The numeric value, as a decimal string. No more than two decimal places are allowed.\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"current_observed_value\":{\"additionalProperties\":false,\"description\":\"The starting value of the Key Result.\",\"properties\":{\"boolean_value\":{\"description\":\"The boolean value.\",\"type\":\"boolean\"},\"numeric_value\":{\"description\":\"The numeric value, as a decimal string. No more than two decimal places are allowed.\",\"type\":\"string\"}},\"type\":\"object\"},\"current_target_value\":{\"additionalProperties\":false,\"description\":\"The starting value of the Key Result.\",\"properties\":{\"boolean_value\":{\"description\":\"The boolean value.\",\"type\":\"boolean\"},\"numeric_value\":{\"description\":\"The numeric value, as a decimal string. No more than two decimal places are allowed.\",\"type\":\"string\"}},\"type\":\"object\"},\"id\":{\"description\":\"The ID of the Key Result.\",\"format\":\"uuid\",\"type\":\"string\"},\"initial_observed_value\":{\"additionalProperties\":false,\"description\":\"The starting value of the Key Result.\",\"properties\":{\"boolean_value\":{\"description\":\"The boolean value.\",\"type\":\"boolean\"},\"numeric_value\":{\"description\":\"The numeric value, as a decimal string. No more than two decimal places are allowed.\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"The name of the Key Result.\",\"type\":\"string\"},\"objective_id\":{\"description\":\"The Objective to which this Key Result belongs.\",\"format\":\"int64\",\"type\":\"integer\"},\"progress\":{\"description\":\"The integer percentage of progress toward completion of the Key Result.\",\"format\":\"int64\",\"type\":\"integer\"},\"type\":{\"description\":\"The type of the Key Result (numeric, percent, or boolean).\",\"enum\":[\"percent\",\"boolean\",\"numeric\"],\"type\":\"string\"}},\"required\":[\"id\",\"name\",\"objective_id\",\"type\",\"initial_observed_value\",\"current_observed_value\",\"current_target_value\",\"progress\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/api/v3/key-results/{key-result-public-id}", "rename": { "param": { "key-result-public-id": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v3" }, { "lit": "key-results" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": { "initial_observed_value": "`reqdata.initial_observed_value`", "name": "`reqdata.name`", "observed_value": "`reqdata.observed_value`", "target_value": "`reqdata.target_value`" }, "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "key_result", "name__orig": "key_result", "Name": "KeyResult", "name_": "key_result", "name-": "key-result", "NAME": "KEY_RESULT", "index$": 16 }, { "active": true, "entity": "key_result", "key$": "BasicKeyResultFlow", "kind": "basic", "name": "BasicKeyResultFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "key_result_ref01", "srcdatavar": "key_result_ref01_data", "suffix": "_up0", "textfield": "name" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-key_result_ref01" } }], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "key_result_ref01", "srcdatavar": "key_result_ref01_data", "suffix": "_dt0" }, "match": { "id": "key_result01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-key_result_ref01" } }], "index$": 1 }] }, 'KeyResult');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let key_result_ref01_data = Object.values(setup.data.existing.key_result)[0];
        // UPDATE
        const key_result_ref01_ent = client.KeyResult();
        const key_result_ref01_data_up0 = {};
        key_result_ref01_data_up0.id = key_result_ref01_data.id;
        const key_result_ref01_markdef_up0 = { name: 'name', value: 'Mark01-key_result_ref01_' + setup.now };
        key_result_ref01_data_up0[key_result_ref01_markdef_up0.name] = key_result_ref01_markdef_up0.value;
        const key_result_ref01_resdata_up0 = (await key_result_ref01_ent.update(key_result_ref01_data_up0)).data();
        (0, node_assert_1.default)(key_result_ref01_resdata_up0.id === key_result_ref01_data_up0.id);
        (0, node_assert_1.default)(key_result_ref01_resdata_up0[key_result_ref01_markdef_up0.name] === key_result_ref01_markdef_up0.value);
        // LOAD
        const key_result_ref01_match_dt0 = {};
        key_result_ref01_match_dt0.id = key_result_ref01_data.id;
        const key_result_ref01_data_dt0 = (await key_result_ref01_ent.load(key_result_ref01_match_dt0)).data();
        (0, node_assert_1.default)(key_result_ref01_data_dt0.id === key_result_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/key_result/KeyResultTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ShortcutSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['key_result01', 'key_result02', 'key_result03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SHORTCUT_TEST_KEY_RESULT_ENTID': idmap,
        'SHORTCUT_TEST_LIVE': 'FALSE',
        'SHORTCUT_TEST_EXPLAIN': 'FALSE',
        'SHORTCUT_APIKEY': '',
    });
    idmap = env['SHORTCUT_TEST_KEY_RESULT_ENTID'];
    const live = 'TRUE' === env.SHORTCUT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SHORTCUT_TEST_KEY_RESULT_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ShortcutSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.SHORTCUT_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.SHORTCUT_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=KeyResultEntity.test.js.map
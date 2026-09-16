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
(0, node_test_1.describe)('EpicWorkflowEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SHORTCUT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ShortcutSDK.test();
        const ent = testsdk.EpicWorkflow();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SHORTCUT_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'epic_workflow.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "css-color", "name": "color", "req": false, "short": "The hex color for this Epic State.", "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "date-time", "name": "created_at", "req": true, "short": "The time/date the Epic State was created.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "description", "req": true, "short": "The description of what sort of Epics belong in that Epic State.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "entity_type", "req": true, "short": "A string description of this resource.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "global_id", "req": true, "type": "`$STRING`", "index$": 4 }, { "active": true, "format": "int64", "name": "id", "req": true, "short": "The unique ID of the Epic State.", "type": "`$INTEGER`", "index$": 5 }, { "active": true, "name": "name", "req": true, "short": "The Epic State's name.", "type": "`$STRING`", "index$": 6 }, { "active": true, "format": "int64", "name": "position", "req": true, "short": "The position that the Epic State is in, starting with 0 at the left.", "type": "`$INTEGER`", "index$": 7 }, { "active": true, "name": "type", "req": true, "short": "The type of Epic State (Unstarted, Started, or Done)", "type": "`$STRING`", "index$": 8 }, { "active": true, "format": "date-time", "name": "updated_at", "req": true, "short": "When the Epic State was last updated.", "type": "`$STRING`", "index$": 9 }], "id": { "field": "id", "name": "id" }, "name": "epic_workflow", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /api/v3/epic-workflow", "json": "{\"operationId\":\"getEpicWorkflow\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Epic Workflow is the array of defined Epic States. Epic Workflow can be queried using the API but must be updated in the Shortcut UI. \",\"properties\":{\"created_at\":{\"description\":\"The date the Epic Workflow was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"default_epic_state_id\":{\"description\":\"The unique ID of the default Epic State that new Epics are assigned by default.\",\"format\":\"int64\",\"type\":\"integer\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"epic_states\":{\"description\":\"A map of the Epic States in this Epic Workflow.\",\"items\":{\"additionalProperties\":false,\"description\":\"Epic State is any of the at least 3 columns. Epic States correspond to one of 3 types: Unstarted, Started, or Done.\",\"properties\":{\"color\":{\"description\":\"The hex color for this Epic State.\",\"format\":\"css-color\",\"minLength\":1,\"pattern\":\"^#[a-fA-F0-9]{6}$\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date the Epic State was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"The description of what sort of Epics belong in that Epic State.\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"global_id\":{\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the Epic State.\",\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"The Epic State's name.\",\"type\":\"string\"},\"position\":{\"description\":\"The position that the Epic State is in, starting with 0 at the left.\",\"format\":\"int64\",\"type\":\"integer\"},\"type\":{\"description\":\"The type of Epic State (Unstarted, Started, or Done)\",\"type\":\"string\"},\"updated_at\":{\"description\":\"When the Epic State was last updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"description\",\"entity_type\",\"name\",\"global_id\",\"type\",\"updated_at\",\"id\",\"position\",\"created_at\"],\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique ID of the Epic Workflow.\",\"format\":\"int64\",\"type\":\"integer\"},\"updated_at\":{\"description\":\"The date the Epic Workflow was updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"entity_type\",\"id\",\"created_at\",\"updated_at\",\"default_epic_state_id\",\"epic_states\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v3/epic-workflow", "segments": [{ "lit": "api" }, { "lit": "v3" }, { "lit": "epic-workflow" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.epic_states`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "epic_workflow", "name__orig": "epic_workflow", "Name": "EpicWorkflow", "name_": "epic_workflow", "name-": "epic-workflow", "NAME": "EPIC_WORKFLOW", "index$": 11 }, { "active": true, "entity": "epic_workflow", "key$": "BasicEpicWorkflowFlow", "kind": "basic", "name": "BasicEpicWorkflowFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "epic_workflow_ref01" } }], "index$": 0 }] }, 'EpicWorkflow');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let epic_workflow_ref01_data = Object.values(setup.data.existing.epic_workflow)[0];
        // LIST
        const epic_workflow_ref01_ent = client.EpicWorkflow();
        const epic_workflow_ref01_match = {};
        const epic_workflow_ref01_list = (await epic_workflow_ref01_ent.list(epic_workflow_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/epic_workflow/EpicWorkflowTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ShortcutSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['epic_workflow01', 'epic_workflow02', 'epic_workflow03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SHORTCUT_TEST_EPIC_WORKFLOW_ENTID': idmap,
        'SHORTCUT_TEST_LIVE': 'FALSE',
        'SHORTCUT_TEST_EXPLAIN': 'FALSE',
        'SHORTCUT_APIKEY': '',
    });
    idmap = env['SHORTCUT_TEST_EPIC_WORKFLOW_ENTID'];
    const live = 'TRUE' === env.SHORTCUT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SHORTCUT_TEST_EPIC_WORKFLOW_ENTID'];
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
//# sourceMappingURL=EpicWorkflowEntity.test.js.map
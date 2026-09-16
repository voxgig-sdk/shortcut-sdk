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
(0, node_test_1.describe)('RepositoryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SHORTCUT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ShortcutSDK.test();
        const ent = testsdk.Repository();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SHORTCUT_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'repository.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "date-time", "name": "created_at", "req": true, "short": "The time/date the Repository was created.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "entity_type", "req": true, "short": "A string description of this resource.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "external_id", "req": true, "short": "The VCS unique identifier for the Repository.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "full_name", "req": true, "short": "The full name of the VCS repository.", "type": "`$STRING`", "index$": 3 }, { "active": true, "format": "int64", "name": "id", "req": true, "short": "The ID associated to the VCS repository in Shortcut.", "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "name", "req": true, "short": "The shorthand name of the VCS repository.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "type", "req": true, "short": "The VCS provider for the Repository.", "type": "`$STRING`", "index$": 6 }, { "active": true, "format": "date-time", "name": "updated_at", "req": true, "short": "The time/date the Repository was updated.", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "url", "req": true, "short": "The URL of the Repository.", "type": "`$STRING`", "index$": 8 }], "id": { "field": "id", "name": "id" }, "name": "repository", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /api/v3/repositories", "json": "{\"operationId\":\"listRepositories\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"additionalProperties\":false,\"description\":\"Repository refers to a VCS repository.\",\"properties\":{\"created_at\":{\"description\":\"The time/date the Repository was created.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"The VCS unique identifier for the Repository.\",\"nullable\":true,\"type\":\"string\"},\"full_name\":{\"description\":\"The full name of the VCS repository.\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"The ID associated to the VCS repository in Shortcut.\",\"format\":\"int64\",\"nullable\":true,\"type\":\"integer\"},\"name\":{\"description\":\"The shorthand name of the VCS repository.\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The VCS provider for the Repository.\",\"enum\":[\"github\",\"gitlab\",\"bitbucket\"],\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date the Repository was updated.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"url\":{\"description\":\"The URL of the Repository.\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"entity_type\",\"name\",\"type\",\"updated_at\",\"external_id\",\"id\",\"url\",\"full_name\",\"created_at\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v3/repositories", "segments": [{ "lit": "api" }, { "lit": "v3" }, { "lit": "repositories" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "repo_public_id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /api/v3/repositories/{repo-public-id}", "json": "{\"operationId\":\"getRepository\",\"parameters\":[{\"description\":\"The unique ID of the Repository.\",\"in\":\"path\",\"name\":\"repo-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Repository refers to a VCS repository.\",\"properties\":{\"created_at\":{\"description\":\"The time/date the Repository was created.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"The VCS unique identifier for the Repository.\",\"nullable\":true,\"type\":\"string\"},\"full_name\":{\"description\":\"The full name of the VCS repository.\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"The ID associated to the VCS repository in Shortcut.\",\"format\":\"int64\",\"nullable\":true,\"type\":\"integer\"},\"name\":{\"description\":\"The shorthand name of the VCS repository.\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The VCS provider for the Repository.\",\"enum\":[\"github\",\"gitlab\",\"bitbucket\"],\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date the Repository was updated.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"url\":{\"description\":\"The URL of the Repository.\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"entity_type\",\"name\",\"type\",\"updated_at\",\"external_id\",\"id\",\"url\",\"full_name\",\"created_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v3/repositories/{repo-public-id}", "rename": { "param": { "repo-public-id": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v3" }, { "lit": "repositories" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "repository", "name__orig": "repository", "Name": "Repository", "name_": "repository", "name-": "repository", "NAME": "REPOSITORY", "index$": 24 }, { "active": true, "entity": "repository", "key$": "BasicRepositoryFlow", "kind": "basic", "name": "BasicRepositoryFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "repository_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "repository_ref01", "srcdatavar": "repository_ref01_data", "suffix": "_dt0" }, "match": { "id": "repository01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-repository_ref01" } }], "index$": 1 }] }, 'Repository');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let repository_ref01_data = Object.values(setup.data.existing.repository)[0];
        // LIST
        const repository_ref01_ent = client.Repository();
        const repository_ref01_match = {};
        const repository_ref01_list = (await repository_ref01_ent.list(repository_ref01_match)).map((e) => e.data());
        // LOAD
        const repository_ref01_match_dt0 = {};
        repository_ref01_match_dt0.id = repository_ref01_data.id;
        const repository_ref01_data_dt0 = (await repository_ref01_ent.load(repository_ref01_match_dt0)).data();
        (0, node_assert_1.default)(repository_ref01_data_dt0.id === repository_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/repository/RepositoryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ShortcutSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['repository01', 'repository02', 'repository03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SHORTCUT_TEST_REPOSITORY_ENTID': idmap,
        'SHORTCUT_TEST_LIVE': 'FALSE',
        'SHORTCUT_TEST_EXPLAIN': 'FALSE',
        'SHORTCUT_APIKEY': '',
    });
    idmap = env['SHORTCUT_TEST_REPOSITORY_ENTID'];
    const live = 'TRUE' === env.SHORTCUT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SHORTCUT_TEST_REPOSITORY_ENTID'];
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
//# sourceMappingURL=RepositoryEntity.test.js.map
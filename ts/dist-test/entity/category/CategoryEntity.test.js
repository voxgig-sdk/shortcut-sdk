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
(0, node_test_1.describe)('CategoryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SHORTCUT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ShortcutSDK.test();
        const ent = testsdk.Category();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SHORTCUT_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'category.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "archived", "op": { "update": { "req": false, "type": "`$BOOLEAN`" } }, "req": true, "short": "A true/false boolean indicating if the Category has been archived.", "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "format": "css-color", "name": "color", "op": { "create": { "req": false, "type": "`$STRING`" }, "update": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "The hex color to be displayed with the Category (for example, \"#ff0000\").", "type": "`$STRING`", "index$": 1 }, { "active": true, "format": "date-time", "name": "created_at", "req": true, "short": "The time/date that the Category was created.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "entity_type", "req": true, "short": "A string description of this resource.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "external_id", "op": { "create": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "This field can be set to another unique ID.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "global_id", "req": true, "short": "The Global ID of the Category.", "type": "`$STRING`", "index$": 5 }, { "active": true, "format": "int64", "name": "id", "req": true, "short": "The unique ID of the Category.", "type": "`$INTEGER`", "index$": 6 }, { "active": true, "name": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "The name of the Category.", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "type", "op": { "create": { "req": false, "type": "`$ANY`" } }, "req": true, "short": "The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category.", "type": "`$STRING`", "index$": 8 }, { "active": true, "format": "date-time", "name": "updated_at", "req": true, "short": "The time/date that the Category was updated.", "type": "`$STRING`", "index$": 9 }], "id": { "field": "id", "name": "id" }, "name": "category", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /api/v3/categories", "json": "{\"operationId\":\"createCategory\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"color\":{\"description\":\"The hex color to be displayed with the Category (for example, \\\"#ff0000\\\").\",\"format\":\"css-color\",\"minLength\":1,\"pattern\":\"^#[a-fA-F0-9]{6}$\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here.\",\"maxLength\":128,\"minLength\":1,\"type\":\"string\"},\"name\":{\"description\":\"The name of the new Category.\",\"maxLength\":128,\"minLength\":1,\"type\":\"string\"},\"type\":{\"description\":\"The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category.\"}},\"required\":[\"name\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"A Category can be used to associate Objectives.\",\"properties\":{\"archived\":{\"description\":\"A true/false boolean indicating if the Category has been archived.\",\"type\":\"boolean\"},\"color\":{\"description\":\"The hex color to be displayed with the Category (for example, \\\"#ff0000\\\").\",\"format\":\"css-color\",\"minLength\":1,\"nullable\":true,\"pattern\":\"^#[a-fA-F0-9]{6}$\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date that the Category was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"global_id\":{\"description\":\"The Global ID of the Category.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the Category.\",\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the Category.\",\"type\":\"string\"},\"type\":{\"description\":\"The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category.\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date that the Category was updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"archived\",\"entity_type\",\"color\",\"name\",\"global_id\",\"type\",\"updated_at\",\"external_id\",\"id\",\"created_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v3/categories", "segments": [{ "lit": "api" }, { "lit": "v3" }, { "lit": "categories" }], "select": {}, "transform": { "req": { "color": "`reqdata.color`", "external_id": "`reqdata.external_id`", "name": "`reqdata.name`", "type": "`reqdata.type`" }, "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /api/v3/categories", "json": "{\"operationId\":\"listCategories\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"additionalProperties\":false,\"description\":\"A Category can be used to associate Objectives.\",\"properties\":{\"archived\":{\"description\":\"A true/false boolean indicating if the Category has been archived.\",\"type\":\"boolean\"},\"color\":{\"description\":\"The hex color to be displayed with the Category (for example, \\\"#ff0000\\\").\",\"format\":\"css-color\",\"minLength\":1,\"nullable\":true,\"pattern\":\"^#[a-fA-F0-9]{6}$\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date that the Category was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"global_id\":{\"description\":\"The Global ID of the Category.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the Category.\",\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the Category.\",\"type\":\"string\"},\"type\":{\"description\":\"The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category.\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date that the Category was updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"archived\",\"entity_type\",\"color\",\"name\",\"global_id\",\"type\",\"updated_at\",\"external_id\",\"id\",\"created_at\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v3/categories", "segments": [{ "lit": "api" }, { "lit": "v3" }, { "lit": "categories" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "category_public_id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /api/v3/categories/{category-public-id}", "json": "{\"operationId\":\"getCategory\",\"parameters\":[{\"description\":\"The unique ID of the Category.\",\"in\":\"path\",\"name\":\"category-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"A Category can be used to associate Objectives.\",\"properties\":{\"archived\":{\"description\":\"A true/false boolean indicating if the Category has been archived.\",\"type\":\"boolean\"},\"color\":{\"description\":\"The hex color to be displayed with the Category (for example, \\\"#ff0000\\\").\",\"format\":\"css-color\",\"minLength\":1,\"nullable\":true,\"pattern\":\"^#[a-fA-F0-9]{6}$\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date that the Category was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"global_id\":{\"description\":\"The Global ID of the Category.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the Category.\",\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the Category.\",\"type\":\"string\"},\"type\":{\"description\":\"The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category.\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date that the Category was updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"archived\",\"entity_type\",\"color\",\"name\",\"global_id\",\"type\",\"updated_at\",\"external_id\",\"id\",\"created_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v3/categories/{category-public-id}", "rename": { "param": { "category-public-id": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v3" }, { "lit": "categories" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "category_public_id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "DELETE /api/v3/categories/{category-public-id}", "json": "{\"operationId\":\"deleteCategory\",\"parameters\":[{\"description\":\"The unique ID of the Category.\",\"in\":\"path\",\"name\":\"category-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"No Content\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/api/v3/categories/{category-public-id}", "rename": { "param": { "category-public-id": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v3" }, { "lit": "categories" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "category_public_id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "PUT /api/v3/categories/{category-public-id}", "json": "{\"operationId\":\"updateCategory\",\"parameters\":[{\"description\":\"The unique ID of the Category you wish to update.\",\"in\":\"path\",\"name\":\"category-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"archived\":{\"description\":\"A true/false boolean indicating if the Category has been archived.\",\"type\":\"boolean\"},\"color\":{\"description\":\"The hex color to be displayed with the Category (for example, \\\"#ff0000\\\").\",\"format\":\"css-color\",\"minLength\":1,\"nullable\":true,\"pattern\":\"^#[a-fA-F0-9]{6}$\",\"type\":\"string\"},\"name\":{\"description\":\"The new name of the Category.\",\"minLength\":1,\"type\":\"string\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"A Category can be used to associate Objectives.\",\"properties\":{\"archived\":{\"description\":\"A true/false boolean indicating if the Category has been archived.\",\"type\":\"boolean\"},\"color\":{\"description\":\"The hex color to be displayed with the Category (for example, \\\"#ff0000\\\").\",\"format\":\"css-color\",\"minLength\":1,\"nullable\":true,\"pattern\":\"^#[a-fA-F0-9]{6}$\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date that the Category was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"global_id\":{\"description\":\"The Global ID of the Category.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the Category.\",\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the Category.\",\"type\":\"string\"},\"type\":{\"description\":\"The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category.\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date that the Category was updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"archived\",\"entity_type\",\"color\",\"name\",\"global_id\",\"type\",\"updated_at\",\"external_id\",\"id\",\"created_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/api/v3/categories/{category-public-id}", "rename": { "param": { "category-public-id": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v3" }, { "lit": "categories" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": { "archived": "`reqdata.archived`", "color": "`reqdata.color`", "name": "`reqdata.name`" }, "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "category", "name__orig": "category", "Name": "Category", "name_": "category", "name-": "category", "NAME": "CATEGORY", "index$": 1 }, { "active": true, "entity": "category", "key$": "BasicCategoryFlow", "kind": "basic", "name": "BasicCategoryFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "category_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "category_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "category_ref01", "srcdatavar": "category_ref01_data", "suffix": "_up0", "textfield": "color" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-category_ref01" } }], "valid": [], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "category_ref01", "srcdatavar": "category_ref01_data", "suffix": "_dt0" }, "match": { "id": "category01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-category_ref01" } }], "index$": 3 }, { "active": true, "data": {}, "input": { "ref": "category_ref01", "suffix": "_rm0" }, "match": { "id": "category01" }, "op": "remove", "spec": [], "valid": [], "index$": 4 }, { "active": true, "data": {}, "input": { "suffix": "_rt0" }, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemNotExists", "def": { "ref": "category_ref01" } }], "index$": 5 }] }, 'Category');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const category_ref01_ent = client.Category();
        let category_ref01_data = setup.data.new.category['category_ref01'];
        category_ref01_data = (await category_ref01_ent.create(category_ref01_data)).data();
        (0, node_assert_1.default)(null != category_ref01_data.id);
        // LIST
        const category_ref01_match = {};
        const category_ref01_list = (await category_ref01_ent.list(category_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(category_ref01_list, { id: category_ref01_data.id })));
        // UPDATE
        const category_ref01_data_up0 = {};
        category_ref01_data_up0.id = category_ref01_data.id;
        const category_ref01_markdef_up0 = { name: 'color', value: 'Mark01-category_ref01_' + setup.now };
        category_ref01_data_up0[category_ref01_markdef_up0.name] = category_ref01_markdef_up0.value;
        const category_ref01_resdata_up0 = (await category_ref01_ent.update(category_ref01_data_up0)).data();
        (0, node_assert_1.default)(category_ref01_resdata_up0.id === category_ref01_data_up0.id);
        (0, node_assert_1.default)(category_ref01_resdata_up0[category_ref01_markdef_up0.name] === category_ref01_markdef_up0.value);
        // LOAD
        const category_ref01_match_dt0 = {};
        category_ref01_match_dt0.id = category_ref01_data.id;
        const category_ref01_data_dt0 = (await category_ref01_ent.load(category_ref01_match_dt0)).data();
        (0, node_assert_1.default)(category_ref01_data_dt0.id === category_ref01_data.id);
        // REMOVE
        const category_ref01_match_rm0 = { id: category_ref01_data.id };
        await category_ref01_ent.remove(category_ref01_match_rm0);
        // LIST
        const category_ref01_match_rt0 = {};
        const category_ref01_list_rt0 = (await category_ref01_ent.list(category_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(category_ref01_list_rt0, { id: category_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/category/CategoryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ShortcutSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['category01', 'category02', 'category03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SHORTCUT_TEST_CATEGORY_ENTID': idmap,
        'SHORTCUT_TEST_LIVE': 'FALSE',
        'SHORTCUT_TEST_EXPLAIN': 'FALSE',
        'SHORTCUT_APIKEY': '',
    });
    idmap = env['SHORTCUT_TEST_CATEGORY_ENTID'];
    const live = 'TRUE' === env.SHORTCUT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SHORTCUT_TEST_CATEGORY_ENTID'];
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
//# sourceMappingURL=CategoryEntity.test.js.map
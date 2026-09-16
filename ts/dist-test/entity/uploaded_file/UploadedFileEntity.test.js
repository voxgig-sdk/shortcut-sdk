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
(0, node_test_1.describe)('UploadedFileEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SHORTCUT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ShortcutSDK.test();
        const ent = testsdk.UploadedFile();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SHORTCUT_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'uploaded_file.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "content_type", "req": true, "short": "Free form string corresponding to a text or image file.", "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "date-time", "name": "created_at", "op": { "update": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "The time/date that the file was created.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "description", "op": { "update": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "The description of the file.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "entity_type", "req": true, "short": "A string description of this resource.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "external_id", "op": { "update": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "This field can be set to another unique ID.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "filename", "req": true, "short": "The name assigned to the file in Shortcut upon upload.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "group_mention_ids", "req": true, "short": "The unique IDs of the Groups who are mentioned in the file description.", "type": "`$ARRAY`", "index$": 6 }, { "active": true, "format": "int64", "name": "id", "req": true, "short": "The unique ID for the file.", "type": "`$INTEGER`", "index$": 7 }, { "active": true, "name": "member_mention_ids", "req": true, "short": "The unique IDs of the Members who are mentioned in the file description.", "type": "`$ARRAY`", "index$": 8 }, { "active": true, "name": "mention_ids", "req": true, "short": "`Deprecated:` use `member_mention_ids`.", "type": "`$ARRAY`", "index$": 9 }, { "active": true, "name": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "The optional User-specified name of the file.", "type": "`$STRING`", "index$": 10 }, { "active": true, "format": "int64", "name": "size", "req": true, "short": "The size of the file.", "type": "`$INTEGER`", "index$": 11 }, { "active": true, "name": "story_ids", "req": true, "short": "The unique IDs of the Stories associated with this file.", "type": "`$ARRAY`", "index$": 12 }, { "active": true, "name": "thumbnail_url", "req": true, "short": "The url where the thumbnail of the file can be found in Shortcut.", "type": "`$STRING`", "index$": 13 }, { "active": true, "format": "date-time", "name": "updated_at", "op": { "update": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "The time/date that the file was updated.", "type": "`$STRING`", "index$": 14 }, { "active": true, "format": "uuid", "name": "uploader_id", "op": { "update": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "The unique ID of the Member who uploaded the file.", "type": "`$STRING`", "index$": 15 }, { "active": true, "name": "url", "req": true, "short": "The URL for the file.", "type": "`$STRING`", "index$": 16 }], "id": { "field": "id", "name": "id" }, "name": "uploaded_file", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /api/v3/files", "json": "{\"operationId\":\"uploadFiles\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"multipart/form-data\":{\"schema\":{\"properties\":{\"file0\":{\"description\":\"A file upload. At least one is required.\",\"format\":\"binary\",\"type\":\"string\"},\"file1\":{\"description\":\"Optional additional files.\",\"format\":\"binary\",\"type\":\"string\"},\"file2\":{\"description\":\"Optional additional files.\",\"format\":\"binary\",\"type\":\"string\"},\"file3\":{\"description\":\"Optional additional files.\",\"format\":\"binary\",\"type\":\"string\"},\"story_id\":{\"description\":\"The story ID that these files will be associated with.\",\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"file0\"],\"type\":\"object\"}}}},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"additionalProperties\":false,\"description\":\"An UploadedFile is any document uploaded to your Shortcut Workspace. Files attached from a third-party service are different: see the Linked Files endpoint.\",\"properties\":{\"content_type\":{\"description\":\"Free form string corresponding to a text or image file.\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date that the file was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"The description of the file.\",\"nullable\":true,\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the File has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"filename\":{\"description\":\"The name assigned to the file in Shortcut upon upload.\",\"type\":\"string\"},\"group_mention_ids\":{\"description\":\"The unique IDs of the Groups who are mentioned in the file description.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique ID for the file.\",\"format\":\"int64\",\"type\":\"integer\"},\"member_mention_ids\":{\"description\":\"The unique IDs of the Members who are mentioned in the file description.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"mention_ids\":{\"description\":\"`Deprecated:` use `member_mention_ids`.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"The optional User-specified name of the file.\",\"type\":\"string\"},\"size\":{\"description\":\"The size of the file.\",\"format\":\"int64\",\"type\":\"integer\"},\"story_ids\":{\"description\":\"The unique IDs of the Stories associated with this file.\",\"items\":{\"format\":\"int64\",\"type\":\"integer\"},\"type\":\"array\"},\"thumbnail_url\":{\"description\":\"The url where the thumbnail of the file can be found in Shortcut.\",\"nullable\":true,\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date that the file was updated.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"uploader_id\":{\"description\":\"The unique ID of the Member who uploaded the file.\",\"format\":\"uuid\",\"type\":\"string\"},\"url\":{\"description\":\"The URL for the file.\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"description\",\"entity_type\",\"story_ids\",\"mention_ids\",\"member_mention_ids\",\"name\",\"thumbnail_url\",\"size\",\"uploader_id\",\"content_type\",\"updated_at\",\"filename\",\"group_mention_ids\",\"external_id\",\"id\",\"url\",\"created_at\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v3/files", "segments": [{ "lit": "api" }, { "lit": "v3" }, { "lit": "files" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /api/v3/files", "json": "{\"operationId\":\"listFiles\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"additionalProperties\":false,\"description\":\"An UploadedFile is any document uploaded to your Shortcut Workspace. Files attached from a third-party service are different: see the Linked Files endpoint.\",\"properties\":{\"content_type\":{\"description\":\"Free form string corresponding to a text or image file.\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date that the file was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"The description of the file.\",\"nullable\":true,\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the File has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"filename\":{\"description\":\"The name assigned to the file in Shortcut upon upload.\",\"type\":\"string\"},\"group_mention_ids\":{\"description\":\"The unique IDs of the Groups who are mentioned in the file description.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique ID for the file.\",\"format\":\"int64\",\"type\":\"integer\"},\"member_mention_ids\":{\"description\":\"The unique IDs of the Members who are mentioned in the file description.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"mention_ids\":{\"description\":\"`Deprecated:` use `member_mention_ids`.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"The optional User-specified name of the file.\",\"type\":\"string\"},\"size\":{\"description\":\"The size of the file.\",\"format\":\"int64\",\"type\":\"integer\"},\"story_ids\":{\"description\":\"The unique IDs of the Stories associated with this file.\",\"items\":{\"format\":\"int64\",\"type\":\"integer\"},\"type\":\"array\"},\"thumbnail_url\":{\"description\":\"The url where the thumbnail of the file can be found in Shortcut.\",\"nullable\":true,\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date that the file was updated.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"uploader_id\":{\"description\":\"The unique ID of the Member who uploaded the file.\",\"format\":\"uuid\",\"type\":\"string\"},\"url\":{\"description\":\"The URL for the file.\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"description\",\"entity_type\",\"story_ids\",\"mention_ids\",\"member_mention_ids\",\"name\",\"thumbnail_url\",\"size\",\"uploader_id\",\"content_type\",\"updated_at\",\"filename\",\"group_mention_ids\",\"external_id\",\"id\",\"url\",\"created_at\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v3/files", "segments": [{ "lit": "api" }, { "lit": "v3" }, { "lit": "files" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "file_public_id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /api/v3/files/{file-public-id}", "json": "{\"operationId\":\"getFile\",\"parameters\":[{\"description\":\"The File’s unique ID.\",\"in\":\"path\",\"name\":\"file-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"An UploadedFile is any document uploaded to your Shortcut Workspace. Files attached from a third-party service are different: see the Linked Files endpoint.\",\"properties\":{\"content_type\":{\"description\":\"Free form string corresponding to a text or image file.\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date that the file was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"The description of the file.\",\"nullable\":true,\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the File has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"filename\":{\"description\":\"The name assigned to the file in Shortcut upon upload.\",\"type\":\"string\"},\"group_mention_ids\":{\"description\":\"The unique IDs of the Groups who are mentioned in the file description.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique ID for the file.\",\"format\":\"int64\",\"type\":\"integer\"},\"member_mention_ids\":{\"description\":\"The unique IDs of the Members who are mentioned in the file description.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"mention_ids\":{\"description\":\"`Deprecated:` use `member_mention_ids`.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"The optional User-specified name of the file.\",\"type\":\"string\"},\"size\":{\"description\":\"The size of the file.\",\"format\":\"int64\",\"type\":\"integer\"},\"story_ids\":{\"description\":\"The unique IDs of the Stories associated with this file.\",\"items\":{\"format\":\"int64\",\"type\":\"integer\"},\"type\":\"array\"},\"thumbnail_url\":{\"description\":\"The url where the thumbnail of the file can be found in Shortcut.\",\"nullable\":true,\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date that the file was updated.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"uploader_id\":{\"description\":\"The unique ID of the Member who uploaded the file.\",\"format\":\"uuid\",\"type\":\"string\"},\"url\":{\"description\":\"The URL for the file.\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"description\",\"entity_type\",\"story_ids\",\"mention_ids\",\"member_mention_ids\",\"name\",\"thumbnail_url\",\"size\",\"uploader_id\",\"content_type\",\"updated_at\",\"filename\",\"group_mention_ids\",\"external_id\",\"id\",\"url\",\"created_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v3/files/{file-public-id}", "rename": { "param": { "file-public-id": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v3" }, { "lit": "files" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "file_public_id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "DELETE /api/v3/files/{file-public-id}", "json": "{\"operationId\":\"deleteFile\",\"parameters\":[{\"description\":\"The File’s unique ID.\",\"in\":\"path\",\"name\":\"file-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"No Content\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/api/v3/files/{file-public-id}", "rename": { "param": { "file-public-id": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v3" }, { "lit": "files" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "file_public_id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "PUT /api/v3/files/{file-public-id}", "json": "{\"operationId\":\"updateFile\",\"parameters\":[{\"description\":\"The unique ID assigned to the file in Shortcut.\",\"in\":\"path\",\"name\":\"file-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"created_at\":{\"description\":\"The time/date that the file was uploaded.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"The description of the file.\",\"maxLength\":4096,\"type\":\"string\"},\"external_id\":{\"description\":\"An additional ID that you may wish to assign to the file.\",\"maxLength\":128,\"type\":\"string\"},\"name\":{\"description\":\"The name of the file.\",\"maxLength\":1024,\"minLength\":1,\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date that the file was last updated.\",\"format\":\"date-time\",\"type\":\"string\"},\"uploader_id\":{\"description\":\"The unique ID assigned to the Member who uploaded the file to Shortcut.\",\"format\":\"uuid\",\"type\":\"string\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"An UploadedFile is any document uploaded to your Shortcut Workspace. Files attached from a third-party service are different: see the Linked Files endpoint.\",\"properties\":{\"content_type\":{\"description\":\"Free form string corresponding to a text or image file.\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date that the file was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"The description of the file.\",\"nullable\":true,\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the File has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"filename\":{\"description\":\"The name assigned to the file in Shortcut upon upload.\",\"type\":\"string\"},\"group_mention_ids\":{\"description\":\"The unique IDs of the Groups who are mentioned in the file description.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique ID for the file.\",\"format\":\"int64\",\"type\":\"integer\"},\"member_mention_ids\":{\"description\":\"The unique IDs of the Members who are mentioned in the file description.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"mention_ids\":{\"description\":\"`Deprecated:` use `member_mention_ids`.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"The optional User-specified name of the file.\",\"type\":\"string\"},\"size\":{\"description\":\"The size of the file.\",\"format\":\"int64\",\"type\":\"integer\"},\"story_ids\":{\"description\":\"The unique IDs of the Stories associated with this file.\",\"items\":{\"format\":\"int64\",\"type\":\"integer\"},\"type\":\"array\"},\"thumbnail_url\":{\"description\":\"The url where the thumbnail of the file can be found in Shortcut.\",\"nullable\":true,\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date that the file was updated.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"uploader_id\":{\"description\":\"The unique ID of the Member who uploaded the file.\",\"format\":\"uuid\",\"type\":\"string\"},\"url\":{\"description\":\"The URL for the file.\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"description\",\"entity_type\",\"story_ids\",\"mention_ids\",\"member_mention_ids\",\"name\",\"thumbnail_url\",\"size\",\"uploader_id\",\"content_type\",\"updated_at\",\"filename\",\"group_mention_ids\",\"external_id\",\"id\",\"url\",\"created_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/api/v3/files/{file-public-id}", "rename": { "param": { "file-public-id": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v3" }, { "lit": "files" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": { "created_at": "`reqdata.created_at`", "description": "`reqdata.description`", "external_id": "`reqdata.external_id`", "name": "`reqdata.name`", "updated_at": "`reqdata.updated_at`", "uploader_id": "`reqdata.uploader_id`" }, "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "uploaded_file", "name__orig": "uploaded_file", "Name": "UploadedFile", "name_": "uploaded_file", "name-": "uploaded-file", "NAME": "UPLOADED_FILE", "index$": 33 }, { "active": true, "entity": "uploaded_file", "key$": "BasicUploadedFileFlow", "kind": "basic", "name": "BasicUploadedFileFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "uploaded_file_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "uploaded_file_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "uploaded_file_ref01", "srcdatavar": "uploaded_file_ref01_data", "suffix": "_up0", "textfield": "content_type" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-uploaded_file_ref01" } }], "valid": [], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "uploaded_file_ref01", "srcdatavar": "uploaded_file_ref01_data", "suffix": "_dt0" }, "match": { "id": "uploaded_file01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-uploaded_file_ref01" } }], "index$": 3 }, { "active": true, "data": {}, "input": { "ref": "uploaded_file_ref01", "suffix": "_rm0" }, "match": { "id": "uploaded_file01" }, "op": "remove", "spec": [], "valid": [], "index$": 4 }, { "active": true, "data": {}, "input": { "suffix": "_rt0" }, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemNotExists", "def": { "ref": "uploaded_file_ref01" } }], "index$": 5 }] }, 'UploadedFile');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const uploaded_file_ref01_ent = client.UploadedFile();
        let uploaded_file_ref01_data = setup.data.new.uploaded_file['uploaded_file_ref01'];
        uploaded_file_ref01_data = (await uploaded_file_ref01_ent.create(uploaded_file_ref01_data)).data();
        (0, node_assert_1.default)(null != uploaded_file_ref01_data.id);
        // LIST
        const uploaded_file_ref01_match = {};
        const uploaded_file_ref01_list = (await uploaded_file_ref01_ent.list(uploaded_file_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(uploaded_file_ref01_list, { id: uploaded_file_ref01_data.id })));
        // UPDATE
        const uploaded_file_ref01_data_up0 = {};
        uploaded_file_ref01_data_up0.id = uploaded_file_ref01_data.id;
        const uploaded_file_ref01_markdef_up0 = { name: 'content_type', value: 'Mark01-uploaded_file_ref01_' + setup.now };
        uploaded_file_ref01_data_up0[uploaded_file_ref01_markdef_up0.name] = uploaded_file_ref01_markdef_up0.value;
        const uploaded_file_ref01_resdata_up0 = (await uploaded_file_ref01_ent.update(uploaded_file_ref01_data_up0)).data();
        (0, node_assert_1.default)(uploaded_file_ref01_resdata_up0.id === uploaded_file_ref01_data_up0.id);
        (0, node_assert_1.default)(uploaded_file_ref01_resdata_up0[uploaded_file_ref01_markdef_up0.name] === uploaded_file_ref01_markdef_up0.value);
        // LOAD
        const uploaded_file_ref01_match_dt0 = {};
        uploaded_file_ref01_match_dt0.id = uploaded_file_ref01_data.id;
        const uploaded_file_ref01_data_dt0 = (await uploaded_file_ref01_ent.load(uploaded_file_ref01_match_dt0)).data();
        (0, node_assert_1.default)(uploaded_file_ref01_data_dt0.id === uploaded_file_ref01_data.id);
        // REMOVE
        const uploaded_file_ref01_match_rm0 = { id: uploaded_file_ref01_data.id };
        await uploaded_file_ref01_ent.remove(uploaded_file_ref01_match_rm0);
        // LIST
        const uploaded_file_ref01_match_rt0 = {};
        const uploaded_file_ref01_list_rt0 = (await uploaded_file_ref01_ent.list(uploaded_file_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(uploaded_file_ref01_list_rt0, { id: uploaded_file_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/uploaded_file/UploadedFileTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ShortcutSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['uploaded_file01', 'uploaded_file02', 'uploaded_file03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SHORTCUT_TEST_UPLOADED_FILE_ENTID': idmap,
        'SHORTCUT_TEST_LIVE': 'FALSE',
        'SHORTCUT_TEST_EXPLAIN': 'FALSE',
        'SHORTCUT_APIKEY': '',
    });
    idmap = env['SHORTCUT_TEST_UPLOADED_FILE_ENTID'];
    const live = 'TRUE' === env.SHORTCUT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SHORTCUT_TEST_UPLOADED_FILE_ENTID'];
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
//# sourceMappingURL=UploadedFileEntity.test.js.map
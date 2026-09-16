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
(0, node_test_1.describe)('MemberEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SHORTCUT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ShortcutSDK.test();
        const ent = testsdk.Member();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SHORTCUT_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'member.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "date-time", "name": "created_at", "req": true, "short": "The time/date the Member was created.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "created_without_invite", "req": true, "short": "Whether this member was created as a placeholder entity.", "type": "`$BOOLEAN`", "index$": 1 }, { "active": true, "name": "disabled", "req": true, "short": "True/false boolean indicating whether the Member has been disabled within the Workspace.", "type": "`$BOOLEAN`", "index$": 2 }, { "active": true, "name": "entity_type", "req": true, "short": "A string description of this resource.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "global_id", "req": true, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "group_ids", "req": true, "short": "The Member's group ids", "type": "`$ARRAY`", "index$": 5 }, { "active": true, "format": "uuid", "name": "id", "req": true, "short": "The Member's ID in Shortcut.", "type": "`$STRING`", "index$": 6 }, { "active": true, "format": "uuid", "name": "installation_id", "req": false, "short": "Only set for agents.", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "is_owner", "req": true, "type": "`$BOOLEAN`", "index$": 8 }, { "active": true, "name": "mention_name", "req": true, "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "name", "req": true, "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "organization2", "req": true, "type": "`$OBJECT`", "index$": 11 }, { "active": true, "name": "profile", "req": true, "short": "A group of Member profile details.", "type": "`$OBJECT`", "index$": 12 }, { "active": true, "format": "uuid", "name": "replaced_by", "req": false, "short": "The id of the member that replaces this one when merged.", "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "role", "req": true, "short": "The Member's role in the Workspace.", "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "state", "req": true, "short": "The user state, one of partial, full, disabled, or imported.", "type": "`$STRING`", "index$": 15 }, { "active": true, "format": "date-time", "name": "updated_at", "req": true, "short": "The time/date the Member was last updated.", "type": "`$STRING`", "index$": 16 }, { "active": true, "name": "workspace2", "req": true, "type": "`$OBJECT`", "index$": 17 }], "id": { "field": "id", "name": "id" }, "name": "member", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "disabled", "orig": "disabled", "reqd": false, "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "kind": "query", "name": "org_public_id", "orig": "org_public_id", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /api/v3/members", "json": "{\"operationId\":\"listMembers\",\"parameters\":[{\"description\":\"The unique ID of the Organization to limit the list to.\",\"in\":\"query\",\"name\":\"org-public-id\",\"required\":false,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}},{\"description\":\"Filter members by their disabled state. If true, return only disabled members. If false, return only enabled members.\",\"in\":\"query\",\"name\":\"disabled\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"additionalProperties\":false,\"description\":\"Details about an individual user within the Workspace.\",\"properties\":{\"created_at\":{\"description\":\"The time/date the Member was created.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"created_without_invite\":{\"description\":\"Whether this member was created as a placeholder entity.\",\"type\":\"boolean\"},\"disabled\":{\"description\":\"True/false boolean indicating whether the Member has been disabled within the Workspace.\",\"type\":\"boolean\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"global_id\":{\"type\":\"string\"},\"group_ids\":{\"description\":\"The Member's group ids\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The Member's ID in Shortcut.\",\"format\":\"uuid\",\"type\":\"string\"},\"installation_id\":{\"description\":\"Only set for agents. The installation id associated with this agent.\",\"format\":\"uuid\",\"type\":\"string\"},\"profile\":{\"additionalProperties\":false,\"description\":\"A group of Member profile details.\",\"properties\":{\"deactivated\":{\"description\":\"A true/false boolean indicating whether the Member has been deactivated within Shortcut.\",\"type\":\"boolean\"},\"display_icon\":{\"additionalProperties\":false,\"description\":\"Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application.\",\"properties\":{\"created_at\":{\"description\":\"The time/date that the Icon was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the Icon.\",\"format\":\"uuid\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date that the Icon was updated.\",\"format\":\"date-time\",\"type\":\"string\"},\"url\":{\"description\":\"The URL of the Icon.\",\"type\":\"string\"}},\"required\":[\"entity_type\",\"id\",\"created_at\",\"updated_at\",\"url\"],\"type\":\"object\"},\"email_address\":{\"description\":\"The primary email address of the Member with the Organization.\",\"nullable\":true,\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"gravatar_hash\":{\"description\":\"This is the gravatar hash associated with email_address.\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier of the profile.\",\"format\":\"uuid\",\"type\":\"string\"},\"is_agent\":{\"description\":\"Whether this profile is an Agent/Bot user.\",\"type\":\"boolean\"},\"is_owner\":{\"description\":\"A boolean indicating whether this profile is an owner at their associated organization.\",\"type\":\"boolean\"},\"mention_name\":{\"description\":\"The Member's username within the Organization.\",\"type\":\"string\"},\"name\":{\"description\":\"The Member's name within the Organization.\",\"nullable\":true,\"type\":\"string\"},\"two_factor_auth_activated\":{\"description\":\"If Two Factor Authentication is activated for this User.\",\"type\":\"boolean\"}},\"required\":[\"entity_type\",\"deactivated\",\"mention_name\",\"name\",\"gravatar_hash\",\"id\",\"display_icon\",\"is_owner\",\"email_address\"],\"type\":\"object\"},\"replaced_by\":{\"description\":\"The id of the member that replaces this one when merged.\",\"format\":\"uuid\",\"type\":\"string\"},\"role\":{\"description\":\"The Member's role in the Workspace.\",\"type\":\"string\"},\"state\":{\"description\":\"The user state, one of partial, full, disabled, or imported.  A partial user is disabled, has no means to log in, and is not an import user.  A full user is enabled and has a means to log in.  A disabled user is disabled and has a means to log in.  An import user is disabled, has no means to log in, and is marked as an import user.\",\"enum\":[\"partial\",\"full\",\"disabled\",\"imported\"],\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date the Member was last updated.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"role\",\"entity_type\",\"disabled\",\"global_id\",\"state\",\"updated_at\",\"created_without_invite\",\"group_ids\",\"id\",\"profile\",\"created_at\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v3/members", "segments": [{ "lit": "api" }, { "lit": "v3" }, { "lit": "members" }], "select": { "exist": ["disabled", "org_public_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "member_public_id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "org_public_id", "orig": "org_public_id", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /api/v3/members/{member-public-id}", "json": "{\"operationId\":\"getMember\",\"parameters\":[{\"description\":\"The Member's unique ID.\",\"in\":\"path\",\"name\":\"member-public-id\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}},{\"description\":\"The unique ID of the Organization to limit the lookup to.\",\"in\":\"query\",\"name\":\"org-public-id\",\"required\":false,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Details about an individual user within the Workspace.\",\"properties\":{\"created_at\":{\"description\":\"The time/date the Member was created.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"created_without_invite\":{\"description\":\"Whether this member was created as a placeholder entity.\",\"type\":\"boolean\"},\"disabled\":{\"description\":\"True/false boolean indicating whether the Member has been disabled within the Workspace.\",\"type\":\"boolean\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"global_id\":{\"type\":\"string\"},\"group_ids\":{\"description\":\"The Member's group ids\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The Member's ID in Shortcut.\",\"format\":\"uuid\",\"type\":\"string\"},\"installation_id\":{\"description\":\"Only set for agents. The installation id associated with this agent.\",\"format\":\"uuid\",\"type\":\"string\"},\"profile\":{\"additionalProperties\":false,\"description\":\"A group of Member profile details.\",\"properties\":{\"deactivated\":{\"description\":\"A true/false boolean indicating whether the Member has been deactivated within Shortcut.\",\"type\":\"boolean\"},\"display_icon\":{\"additionalProperties\":false,\"description\":\"Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application.\",\"properties\":{\"created_at\":{\"description\":\"The time/date that the Icon was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the Icon.\",\"format\":\"uuid\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date that the Icon was updated.\",\"format\":\"date-time\",\"type\":\"string\"},\"url\":{\"description\":\"The URL of the Icon.\",\"type\":\"string\"}},\"required\":[\"entity_type\",\"id\",\"created_at\",\"updated_at\",\"url\"],\"type\":\"object\"},\"email_address\":{\"description\":\"The primary email address of the Member with the Organization.\",\"nullable\":true,\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"gravatar_hash\":{\"description\":\"This is the gravatar hash associated with email_address.\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier of the profile.\",\"format\":\"uuid\",\"type\":\"string\"},\"is_agent\":{\"description\":\"Whether this profile is an Agent/Bot user.\",\"type\":\"boolean\"},\"is_owner\":{\"description\":\"A boolean indicating whether this profile is an owner at their associated organization.\",\"type\":\"boolean\"},\"mention_name\":{\"description\":\"The Member's username within the Organization.\",\"type\":\"string\"},\"name\":{\"description\":\"The Member's name within the Organization.\",\"nullable\":true,\"type\":\"string\"},\"two_factor_auth_activated\":{\"description\":\"If Two Factor Authentication is activated for this User.\",\"type\":\"boolean\"}},\"required\":[\"entity_type\",\"deactivated\",\"mention_name\",\"name\",\"gravatar_hash\",\"id\",\"display_icon\",\"is_owner\",\"email_address\"],\"type\":\"object\"},\"replaced_by\":{\"description\":\"The id of the member that replaces this one when merged.\",\"format\":\"uuid\",\"type\":\"string\"},\"role\":{\"description\":\"The Member's role in the Workspace.\",\"type\":\"string\"},\"state\":{\"description\":\"The user state, one of partial, full, disabled, or imported.  A partial user is disabled, has no means to log in, and is not an import user.  A full user is enabled and has a means to log in.  A disabled user is disabled and has a means to log in.  An import user is disabled, has no means to log in, and is marked as an import user.\",\"enum\":[\"partial\",\"full\",\"disabled\",\"imported\"],\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date the Member was last updated.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"role\",\"entity_type\",\"disabled\",\"global_id\",\"state\",\"updated_at\",\"created_without_invite\",\"group_ids\",\"id\",\"profile\",\"created_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v3/members/{member-public-id}", "rename": { "param": { "member-public-id": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v3" }, { "lit": "members" }, { "var": "id" }], "select": { "exist": ["id", "org_public_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "GET /api/v3/member", "json": "{\"operationId\":\"getCurrentMemberInfo\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"id\":{\"format\":\"uuid\",\"type\":\"string\"},\"is_owner\":{\"type\":\"boolean\"},\"mention_name\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"organization2\":{\"additionalProperties\":false,\"properties\":{\"id\":{\"format\":\"uuid\",\"type\":\"string\"}},\"required\":[\"id\"],\"type\":\"object\"},\"role\":{\"type\":\"string\"},\"workspace2\":{\"additionalProperties\":false,\"properties\":{\"created_at\":{\"format\":\"date-time\",\"type\":\"string\"},\"default_workflow_id\":{\"format\":\"int64\",\"type\":\"integer\"},\"estimate_scale\":{\"items\":{\"format\":\"int64\",\"type\":\"integer\"},\"type\":\"array\"},\"id\":{\"format\":\"uuid\",\"type\":\"string\"},\"korey_enabled\":{\"type\":\"boolean\"},\"name\":{\"type\":\"string\"},\"url_slug\":{\"type\":\"string\"},\"utc_offset\":{\"type\":\"string\"}},\"required\":[\"id\",\"created_at\",\"default_workflow_id\",\"estimate_scale\",\"name\",\"url_slug\",\"utc_offset\"],\"type\":\"object\"}},\"required\":[\"id\",\"is_owner\",\"mention_name\",\"name\",\"role\",\"workspace2\",\"organization2\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v3/member", "segments": [{ "lit": "api" }, { "lit": "v3" }, { "lit": "member" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "member", "name__orig": "member", "Name": "Member", "name_": "member", "name-": "member", "NAME": "MEMBER", "index$": 19 }, { "active": true, "entity": "member", "key$": "BasicMemberFlow", "kind": "basic", "name": "BasicMemberFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "member_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "member_ref01", "srcdatavar": "member_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-member_ref01" } }], "index$": 1 }] }, 'Member');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let member_ref01_data = Object.values(setup.data.existing.member)[0];
        // LIST
        const member_ref01_ent = client.Member();
        const member_ref01_match = {};
        const member_ref01_list = (await member_ref01_ent.list(member_ref01_match)).map((e) => e.data());
        // LOAD
        const member_ref01_match_dt0 = {};
        member_ref01_match_dt0.id = member_ref01_data.id;
        const member_ref01_data_dt0 = (await member_ref01_ent.load(member_ref01_match_dt0)).data();
        (0, node_assert_1.default)(member_ref01_data_dt0.id === member_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/member/MemberTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ShortcutSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['member01', 'member02', 'member03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SHORTCUT_TEST_MEMBER_ENTID': idmap,
        'SHORTCUT_TEST_LIVE': 'FALSE',
        'SHORTCUT_TEST_EXPLAIN': 'FALSE',
        'SHORTCUT_APIKEY': '',
    });
    idmap = env['SHORTCUT_TEST_MEMBER_ENTID'];
    const live = 'TRUE' === env.SHORTCUT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SHORTCUT_TEST_MEMBER_ENTID'];
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
//# sourceMappingURL=MemberEntity.test.js.map
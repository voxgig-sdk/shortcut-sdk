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
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('StoryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SHORTCUT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ShortcutSDK.test();
        const ent = testsdk.Story();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SHORTCUT_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if ((0, utility_1.maybeSkipControl)(t, 'entityOp', 'story.' + op, live))
                return;
        }
        const setup = basicSetup();
        // The basic flow consumes synthetic IDs and field values from the
        // fixture (entity TestData.json). Those don't exist on the live API.
        // Skip live runs unless the user provided a real ENTID env override.
        if (setup.syntheticOnly) {
            t.skip('live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_STORY_ENTID JSON to run live');
            return;
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const story_ref01_ent = client.Story();
        let story_ref01_data = setup.data.new.story['story_ref01'];
        story_ref01_data['epic_id'] = setup.idmap['epic01'];
        story_ref01_data['group_id'] = setup.idmap['group01'];
        story_ref01_data['iteration_id'] = setup.idmap['iteration01'];
        story_ref01_data['label_id'] = setup.idmap['label01'];
        story_ref01_data['project_id'] = setup.idmap['project01'];
        story_ref01_data = (await story_ref01_ent.create(story_ref01_data)).data();
        (0, node_assert_1.default)(null != story_ref01_data.id);
        // LIST
        const story_ref01_match = {};
        const story_ref01_list = (await story_ref01_ent.list(story_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(story_ref01_list, { id: story_ref01_data.id })));
        // UPDATE
        const story_ref01_data_up0 = {};
        story_ref01_data_up0.id = story_ref01_data.id;
        const story_ref01_markdef_up0 = { name: 'app_url', value: 'Mark01-story_ref01_' + setup.now };
        story_ref01_data_up0[story_ref01_markdef_up0.name] = story_ref01_markdef_up0.value;
        const story_ref01_resdata_up0 = (await story_ref01_ent.update(story_ref01_data_up0)).data();
        (0, node_assert_1.default)(story_ref01_resdata_up0.id === story_ref01_data_up0.id);
        (0, node_assert_1.default)(story_ref01_resdata_up0[story_ref01_markdef_up0.name] === story_ref01_markdef_up0.value);
        // LOAD
        const story_ref01_match_dt0 = {};
        story_ref01_match_dt0.id = story_ref01_data.id;
        const story_ref01_data_dt0 = (await story_ref01_ent.load(story_ref01_match_dt0)).data();
        (0, node_assert_1.default)(story_ref01_data_dt0.id === story_ref01_data.id);
        // REMOVE
        const story_ref01_match_rm0 = { id: story_ref01_data.id };
        await story_ref01_ent.remove(story_ref01_match_rm0);
        // LIST
        const story_ref01_match_rt0 = {};
        const story_ref01_list_rt0 = (await story_ref01_ent.list(story_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(story_ref01_list_rt0, { id: story_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/story/StoryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ShortcutSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['story01', 'story02', 'story03', 'epic01', 'epic02', 'epic03', 'group01', 'group02', 'group03', 'iteration01', 'iteration02', 'iteration03', 'label01', 'label02', 'label03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    // Detect whether the user provided a real ENTID JSON via env var. The
    // basic flow consumes synthetic IDs from the fixture file; without an
    // override those synthetic IDs reach the live API and 4xx. Surface this
    // to the test so it can skip rather than fail.
    const idmapEnvVal = process.env['SHORTCUT_TEST_STORY_ENTID'];
    const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{');
    const env = (0, utility_1.envOverride)({
        'SHORTCUT_TEST_STORY_ENTID': idmap,
        'SHORTCUT_TEST_LIVE': 'FALSE',
        'SHORTCUT_TEST_EXPLAIN': 'FALSE',
        'SHORTCUT_APIKEY': '',
    });
    idmap = env['SHORTCUT_TEST_STORY_ENTID'];
    const live = 'TRUE' === env.SHORTCUT_TEST_LIVE;
    if (live) {
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
            extra || {}
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
        syntheticOnly: live && !idmapOverridden,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=StoryEntity.test.js.map
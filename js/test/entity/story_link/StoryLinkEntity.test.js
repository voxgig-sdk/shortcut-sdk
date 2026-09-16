
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { ShortcutSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('StoryLinkEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.StoryLink()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"created_at","req":true,"short":"The time/date when the Story Link was created.","type":"`$STRING`","index$":0},{"active":true,"name":"entity_type","req":true,"short":"A string description of this resource.","type":"`$STRING`","index$":1},{"active":true,"format":"int64","name":"id","req":true,"short":"The unique identifier of the Story Link.","type":"`$INTEGER`","index$":2},{"active":true,"format":"int64","name":"object_id","op":{"update":{"req":false,"type":"`$INTEGER`"}},"req":true,"short":"The ID of the object Story.","type":"`$INTEGER`","index$":3},{"active":true,"format":"int64","name":"subject_id","op":{"update":{"req":false,"type":"`$INTEGER`"}},"req":true,"short":"The ID of the subject Story.","type":"`$INTEGER`","index$":4},{"active":true,"format":"int64","name":"subject_workflow_state_id","req":true,"short":"The workflow state of the \"subject\" story.","type":"`$INTEGER`","index$":5},{"active":true,"format":"date-time","name":"updated_at","req":true,"short":"The time/date when the Story Link was last updated.","type":"`$STRING`","index$":6},{"active":true,"name":"verb","op":{"update":{"req":false,"type":"`$STRING`"}},"req":true,"short":"How the subject Story acts on the object Story.","type":"`$STRING`","index$":7}],"id":{"field":"id","name":"id"},"name":"story_link","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/v3/story-links","json":"{\"operationId\":\"createStoryLink\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"object_id\":{\"description\":\"The ID of the object Story.\",\"format\":\"int64\",\"type\":\"integer\"},\"subject_id\":{\"description\":\"The ID of the subject Story.\",\"format\":\"int64\",\"type\":\"integer\"},\"verb\":{\"description\":\"The type of link.\",\"enum\":[\"blocks\",\"duplicates\",\"relates to\"],\"type\":\"string\"}},\"required\":[\"verb\",\"subject_id\",\"object_id\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Story links allow you create semantic relationships between two stories. Relationship types are relates to, blocks / blocked by, and duplicates / is duplicated by. The format is `subject -> link -> object`, or for example \\\"story 5 blocks story 6\\\".\",\"properties\":{\"created_at\":{\"description\":\"The time/date when the Story Link was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier of the Story Link.\",\"format\":\"int64\",\"type\":\"integer\"},\"object_id\":{\"description\":\"The ID of the object Story.\",\"format\":\"int64\",\"type\":\"integer\"},\"subject_id\":{\"description\":\"The ID of the subject Story.\",\"format\":\"int64\",\"type\":\"integer\"},\"subject_workflow_state_id\":{\"description\":\"The workflow state of the \\\"subject\\\" story.\",\"format\":\"int64\",\"type\":\"integer\"},\"updated_at\":{\"description\":\"The time/date when the Story Link was last updated.\",\"format\":\"date-time\",\"type\":\"string\"},\"verb\":{\"description\":\"How the subject Story acts on the object Story. This can be \\\"blocks\\\", \\\"duplicates\\\", or \\\"relates to\\\".\",\"type\":\"string\"}},\"required\":[\"entity_type\",\"id\",\"subject_id\",\"subject_workflow_state_id\",\"verb\",\"object_id\",\"created_at\",\"updated_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/v3/story-links","segments":[{"lit":"api"},{"lit":"v3"},{"lit":"story-links"}],"select":{},"transform":{"req":{"object_id":"`reqdata.object_id`","subject_id":"`reqdata.subject_id`","verb":"`reqdata.verb`"},"res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"story_link_public_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /api/v3/story-links/{story-link-public-id}","json":"{\"operationId\":\"getStoryLink\",\"parameters\":[{\"description\":\"The unique ID of the Story Link.\",\"in\":\"path\",\"name\":\"story-link-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Story links allow you create semantic relationships between two stories. Relationship types are relates to, blocks / blocked by, and duplicates / is duplicated by. The format is `subject -> link -> object`, or for example \\\"story 5 blocks story 6\\\".\",\"properties\":{\"created_at\":{\"description\":\"The time/date when the Story Link was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier of the Story Link.\",\"format\":\"int64\",\"type\":\"integer\"},\"object_id\":{\"description\":\"The ID of the object Story.\",\"format\":\"int64\",\"type\":\"integer\"},\"subject_id\":{\"description\":\"The ID of the subject Story.\",\"format\":\"int64\",\"type\":\"integer\"},\"subject_workflow_state_id\":{\"description\":\"The workflow state of the \\\"subject\\\" story.\",\"format\":\"int64\",\"type\":\"integer\"},\"updated_at\":{\"description\":\"The time/date when the Story Link was last updated.\",\"format\":\"date-time\",\"type\":\"string\"},\"verb\":{\"description\":\"How the subject Story acts on the object Story. This can be \\\"blocks\\\", \\\"duplicates\\\", or \\\"relates to\\\".\",\"type\":\"string\"}},\"required\":[\"entity_type\",\"id\",\"subject_id\",\"subject_workflow_state_id\",\"verb\",\"object_id\",\"created_at\",\"updated_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v3/story-links/{story-link-public-id}","rename":{"param":{"story-link-public-id":"id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"story-links"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"story_link_public_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"DELETE /api/v3/story-links/{story-link-public-id}","json":"{\"operationId\":\"deleteStoryLink\",\"parameters\":[{\"description\":\"The unique ID of the Story Link.\",\"in\":\"path\",\"name\":\"story-link-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"No Content\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/api/v3/story-links/{story-link-public-id}","rename":{"param":{"story-link-public-id":"id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"story-links"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"story_link_public_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"PUT /api/v3/story-links/{story-link-public-id}","json":"{\"operationId\":\"updateStoryLink\",\"parameters\":[{\"description\":\"The unique ID of the Story Link.\",\"in\":\"path\",\"name\":\"story-link-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"object_id\":{\"description\":\"The ID of the object Story.\",\"format\":\"int64\",\"type\":\"integer\"},\"subject_id\":{\"description\":\"The ID of the subject Story.\",\"format\":\"int64\",\"type\":\"integer\"},\"verb\":{\"description\":\"The type of link.\",\"enum\":[\"blocks\",\"duplicates\",\"relates to\"],\"type\":\"string\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Story links allow you create semantic relationships between two stories. Relationship types are relates to, blocks / blocked by, and duplicates / is duplicated by. The format is `subject -> link -> object`, or for example \\\"story 5 blocks story 6\\\".\",\"properties\":{\"created_at\":{\"description\":\"The time/date when the Story Link was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier of the Story Link.\",\"format\":\"int64\",\"type\":\"integer\"},\"object_id\":{\"description\":\"The ID of the object Story.\",\"format\":\"int64\",\"type\":\"integer\"},\"subject_id\":{\"description\":\"The ID of the subject Story.\",\"format\":\"int64\",\"type\":\"integer\"},\"subject_workflow_state_id\":{\"description\":\"The workflow state of the \\\"subject\\\" story.\",\"format\":\"int64\",\"type\":\"integer\"},\"updated_at\":{\"description\":\"The time/date when the Story Link was last updated.\",\"format\":\"date-time\",\"type\":\"string\"},\"verb\":{\"description\":\"How the subject Story acts on the object Story. This can be \\\"blocks\\\", \\\"duplicates\\\", or \\\"relates to\\\".\",\"type\":\"string\"}},\"required\":[\"entity_type\",\"id\",\"subject_id\",\"subject_workflow_state_id\",\"verb\",\"object_id\",\"created_at\",\"updated_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/api/v3/story-links/{story-link-public-id}","rename":{"param":{"story-link-public-id":"id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"story-links"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":{"object_id":"`reqdata.object_id`","subject_id":"`reqdata.subject_id`","verb":"`reqdata.verb`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"story_link","name__orig":"story_link","Name":"StoryLink","name_":"story_link","name-":"story-link","NAME":"STORY_LINK","index$":28}, {"active":true,"entity":"story_link","key$":"BasicStoryLinkFlow","kind":"basic","name":"BasicStoryLinkFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"story_link_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"story_link_ref01","srcdatavar":"story_link_ref01_data","suffix":"_up0","textfield":"created_at"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-story_link_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"story_link_ref01","srcdatavar":"story_link_ref01_data","suffix":"_dt0"},"match":{"id":"story_link01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-story_link_ref01"}}],"index$":2},{"active":true,"data":{},"input":{"ref":"story_link_ref01","suffix":"_rm0"},"match":{"id":"story_link01"},"op":"remove","spec":[],"valid":[],"index$":3}]}, 'StoryLink')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const story_link_ref01_ent = client.StoryLink()
    let story_link_ref01_data = setup.data.new.story_link['story_link_ref01']

    story_link_ref01_data = (await story_link_ref01_ent.create(story_link_ref01_data)).data()
    assert(null != story_link_ref01_data.id)


    // UPDATE
    const story_link_ref01_data_up0 = {}
    story_link_ref01_data_up0.id = story_link_ref01_data.id

    const story_link_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-story_link_ref01_' + setup.now }
    story_link_ref01_data_up0 [story_link_ref01_markdef_up0.name] = story_link_ref01_markdef_up0.value

    const story_link_ref01_resdata_up0 = (await story_link_ref01_ent.update(story_link_ref01_data_up0)).data()
    assert(story_link_ref01_resdata_up0.id === story_link_ref01_data_up0.id)

    assert(story_link_ref01_resdata_up0[story_link_ref01_markdef_up0.name] === story_link_ref01_markdef_up0.value)


    // LOAD
    const story_link_ref01_match_dt0 = {}
    story_link_ref01_match_dt0.id = story_link_ref01_data.id
    const story_link_ref01_data_dt0 = (await story_link_ref01_ent.load(story_link_ref01_match_dt0)).data()
    assert(story_link_ref01_data_dt0.id === story_link_ref01_data.id)


    // REMOVE
    const story_link_ref01_match_rm0 = {}
    story_link_ref01_match_rm0.id = story_link_ref01_data.id
    await story_link_ref01_ent.remove(story_link_ref01_match_rm0)
  

  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/story_link/StoryLinkTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ShortcutSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['story_link01','story_link02','story_link03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_STORY_LINK_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': '',
  })

  idmap = env['SHORTCUT_TEST_STORY_LINK_ENTID']

  const live = 'TRUE' === env.SHORTCUT_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SHORTCUT_TEST_STORY_LINK_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ShortcutSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.SHORTCUT_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  

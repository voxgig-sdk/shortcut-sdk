
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


describe('HealthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.Health()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"uuid","name":"author_id","req":false,"short":"The ID of the permission who created or updated the Health record.","type":"`$STRING`","index$":0},{"active":true,"format":"date-time","name":"created_at","req":false,"short":"The time that the Health record was created.","type":"`$STRING`","index$":1},{"active":true,"name":"entity_type","req":true,"short":"A string description of this resource.","type":"`$STRING`","index$":2},{"active":true,"format":"int64","name":"epic_id","req":false,"short":"The ID of the Epic associated with this Health record.","type":"`$INTEGER`","index$":3},{"active":true,"format":"uuid","name":"id","req":true,"short":"The unique ID of the Health record.","type":"`$STRING`","index$":4},{"active":true,"format":"int64","name":"objective_id","req":false,"short":"The ID of the Objective associated with this Health record.","type":"`$INTEGER`","index$":5},{"active":true,"name":"status","op":{"update":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The health status of the Epic or Objective.","type":"`$STRING`","index$":6},{"active":true,"name":"text","req":false,"short":"The text of the Health record.","type":"`$STRING`","index$":7},{"active":true,"format":"date-time","name":"updated_at","req":false,"short":"The time that the Health record was updated.","type":"`$STRING`","index$":8}],"id":{"field":"id","name":"id"},"name":"health","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"epic_id","orig":"epic_public_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"POST /api/v3/epics/{epic-public-id}/health","json":"{\"operationId\":\"createEpicHealth\",\"parameters\":[{\"description\":\"The unique ID of the Epic.\",\"in\":\"path\",\"name\":\"epic-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"status\":{\"description\":\"The health status of the Epic.\",\"enum\":[\"At Risk\",\"On Track\",\"Off Track\",\"No Health\"],\"type\":\"string\"},\"text\":{\"description\":\"The description of the Health status.\",\"type\":\"string\"}},\"required\":[\"status\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"The current health status of the Epic.\",\"properties\":{\"author_id\":{\"description\":\"The ID of the permission who created or updated the Health record.\",\"format\":\"uuid\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time that the Health record was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"epic_id\":{\"description\":\"The ID of the Epic associated with this Health record.\",\"format\":\"int64\",\"type\":\"integer\"},\"id\":{\"description\":\"The unique ID of the Health record.\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"objective_id\":{\"description\":\"The ID of the Objective associated with this Health record.\",\"format\":\"int64\",\"type\":\"integer\"},\"status\":{\"description\":\"The health status of the Epic or Objective.\",\"enum\":[\"At Risk\",\"On Track\",\"Off Track\",\"No Health\"],\"type\":\"string\"},\"text\":{\"description\":\"The text of the Health record.\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time that the Health record was updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"entity_type\",\"status\",\"id\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/v3/epics/{epic-public-id}/health","rename":{"param":{"epic-public-id":"epic_id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"epics"},{"var":"epic_id"},{"lit":"health"}],"select":{"exist":["epic_id"]},"transform":{"req":{"status":"`reqdata.status`","text":"`reqdata.text`"},"res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"epic_id","orig":"epic_public_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /api/v3/epics/{epic-public-id}/health-history","json":"{\"operationId\":\"listEpicHealths\",\"parameters\":[{\"description\":\"The unique ID of the Epic.\",\"in\":\"path\",\"name\":\"epic-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"additionalProperties\":false,\"description\":\"The current health status of the Epic.\",\"properties\":{\"author_id\":{\"description\":\"The ID of the permission who created or updated the Health record.\",\"format\":\"uuid\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time that the Health record was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"epic_id\":{\"description\":\"The ID of the Epic associated with this Health record.\",\"format\":\"int64\",\"type\":\"integer\"},\"id\":{\"description\":\"The unique ID of the Health record.\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"objective_id\":{\"description\":\"The ID of the Objective associated with this Health record.\",\"format\":\"int64\",\"type\":\"integer\"},\"status\":{\"description\":\"The health status of the Epic or Objective.\",\"enum\":[\"At Risk\",\"On Track\",\"Off Track\",\"No Health\"],\"type\":\"string\"},\"text\":{\"description\":\"The text of the Health record.\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time that the Health record was updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"entity_type\",\"status\",\"id\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v3/epics/{epic-public-id}/health-history","rename":{"param":{"epic-public-id":"epic_id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"epics"},{"var":"epic_id"},{"lit":"health-history"}],"select":{"exist":["epic_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"epic_id","orig":"epic_public_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /api/v3/epics/{epic-public-id}/health","json":"{\"operationId\":\"getEpicHealth\",\"parameters\":[{\"description\":\"The unique ID of the Epic.\",\"in\":\"path\",\"name\":\"epic-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"The current health status of the Epic.\",\"properties\":{\"author_id\":{\"description\":\"The ID of the permission who created or updated the Health record.\",\"format\":\"uuid\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time that the Health record was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"epic_id\":{\"description\":\"The ID of the Epic associated with this Health record.\",\"format\":\"int64\",\"type\":\"integer\"},\"id\":{\"description\":\"The unique ID of the Health record.\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"objective_id\":{\"description\":\"The ID of the Objective associated with this Health record.\",\"format\":\"int64\",\"type\":\"integer\"},\"status\":{\"description\":\"The health status of the Epic or Objective.\",\"enum\":[\"At Risk\",\"On Track\",\"Off Track\",\"No Health\"],\"type\":\"string\"},\"text\":{\"description\":\"The text of the Health record.\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time that the Health record was updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"entity_type\",\"status\",\"id\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v3/epics/{epic-public-id}/health","rename":{"param":{"epic-public-id":"epic_id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"epics"},{"var":"epic_id"},{"lit":"health"}],"select":{"exist":["epic_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"health_public_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"PUT /api/v3/health/{health-public-id}","json":"{\"operationId\":\"updateHealth\",\"parameters\":[{\"description\":\"The unique ID of the Health record.\",\"in\":\"path\",\"name\":\"health-public-id\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"status\":{\"description\":\"The health status of the Epic.\",\"enum\":[\"At Risk\",\"On Track\",\"Off Track\",\"No Health\"],\"type\":\"string\"},\"text\":{\"description\":\"The description of the Health status.\",\"type\":\"string\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"The current health status of the Epic.\",\"properties\":{\"author_id\":{\"description\":\"The ID of the permission who created or updated the Health record.\",\"format\":\"uuid\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time that the Health record was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"epic_id\":{\"description\":\"The ID of the Epic associated with this Health record.\",\"format\":\"int64\",\"type\":\"integer\"},\"id\":{\"description\":\"The unique ID of the Health record.\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"objective_id\":{\"description\":\"The ID of the Objective associated with this Health record.\",\"format\":\"int64\",\"type\":\"integer\"},\"status\":{\"description\":\"The health status of the Epic or Objective.\",\"enum\":[\"At Risk\",\"On Track\",\"Off Track\",\"No Health\"],\"type\":\"string\"},\"text\":{\"description\":\"The text of the Health record.\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time that the Health record was updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"entity_type\",\"status\",\"id\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/api/v3/health/{health-public-id}","rename":{"param":{"health-public-id":"id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"health"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":{"status":"`reqdata.status`","text":"`reqdata.text`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["epic"]]},"key$":"health","name__orig":"health","Name":"Health","name_":"health","name-":"health","NAME":"HEALTH","index$":13}, {"active":true,"entity":"health","key$":"BasicHealthFlow","kind":"basic","name":"BasicHealthFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"health_ref01"},"match":{"epic_id":"epic01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"epic_id":"epic01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"health_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"health_ref01","srcdatavar":"health_ref01_data","suffix":"_up0","textfield":"author_id"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-health_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"health_ref01","srcdatavar":"health_ref01_data","suffix":"_dt0"},"match":{"id":"health01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-health_ref01"}}],"index$":3}]}, 'Health')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const health_ref01_ent = client.Health()
    let health_ref01_data = setup.data.new.health['health_ref01']
    health_ref01_data['epic_id'] = setup.idmap['epic01']

    health_ref01_data = (await health_ref01_ent.create(health_ref01_data)).data()
    assert(null != health_ref01_data.id)


    // LIST
    const health_ref01_match = {}
    health_ref01_match['epic_id'] = setup.idmap['epic01']

    const health_ref01_list = (await health_ref01_ent.list(health_ref01_match)).map((e) => e.data())

    assert(!isempty(select(health_ref01_list, { id: health_ref01_data.id })))


    // UPDATE
    const health_ref01_data_up0 = {}
    health_ref01_data_up0.id = health_ref01_data.id

    const health_ref01_markdef_up0 = { name: 'author_id', value: 'Mark01-health_ref01_' + setup.now }
    health_ref01_data_up0 [health_ref01_markdef_up0.name] = health_ref01_markdef_up0.value

    const health_ref01_resdata_up0 = (await health_ref01_ent.update(health_ref01_data_up0)).data()
    assert(health_ref01_resdata_up0.id === health_ref01_data_up0.id)

    assert(health_ref01_resdata_up0[health_ref01_markdef_up0.name] === health_ref01_markdef_up0.value)


    // LOAD
    const health_ref01_match_dt0 = {}
    health_ref01_match_dt0.id = health_ref01_data.id
    const health_ref01_data_dt0 = (await health_ref01_ent.load(health_ref01_match_dt0)).data()
    assert(health_ref01_data_dt0.id === health_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/health/HealthTestData.json')

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
    ['health01','health02','health03','epic01','epic02','epic03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_HEALTH_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': '',
  })

  idmap = env['SHORTCUT_TEST_HEALTH_ENTID']

  const live = 'TRUE' === env.SHORTCUT_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SHORTCUT_TEST_HEALTH_ENTID']
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
  

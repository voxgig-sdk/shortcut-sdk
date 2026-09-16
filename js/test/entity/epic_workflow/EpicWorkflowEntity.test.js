
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


describe('EpicWorkflowEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.EpicWorkflow()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"css-color","name":"color","req":false,"short":"The hex color for this Epic State.","type":"`$STRING`","index$":0},{"active":true,"format":"date-time","name":"created_at","req":true,"short":"The time/date the Epic State was created.","type":"`$STRING`","index$":1},{"active":true,"name":"description","req":true,"short":"The description of what sort of Epics belong in that Epic State.","type":"`$STRING`","index$":2},{"active":true,"name":"entity_type","req":true,"short":"A string description of this resource.","type":"`$STRING`","index$":3},{"active":true,"name":"global_id","req":true,"type":"`$STRING`","index$":4},{"active":true,"format":"int64","name":"id","req":true,"short":"The unique ID of the Epic State.","type":"`$INTEGER`","index$":5},{"active":true,"name":"name","req":true,"short":"The Epic State's name.","type":"`$STRING`","index$":6},{"active":true,"format":"int64","name":"position","req":true,"short":"The position that the Epic State is in, starting with 0 at the left.","type":"`$INTEGER`","index$":7},{"active":true,"name":"type","req":true,"short":"The type of Epic State (Unstarted, Started, or Done)","type":"`$STRING`","index$":8},{"active":true,"format":"date-time","name":"updated_at","req":true,"short":"When the Epic State was last updated.","type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"epic_workflow","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /api/v3/epic-workflow","json":"{\"operationId\":\"getEpicWorkflow\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Epic Workflow is the array of defined Epic States. Epic Workflow can be queried using the API but must be updated in the Shortcut UI. \",\"properties\":{\"created_at\":{\"description\":\"The date the Epic Workflow was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"default_epic_state_id\":{\"description\":\"The unique ID of the default Epic State that new Epics are assigned by default.\",\"format\":\"int64\",\"type\":\"integer\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"epic_states\":{\"description\":\"A map of the Epic States in this Epic Workflow.\",\"items\":{\"additionalProperties\":false,\"description\":\"Epic State is any of the at least 3 columns. Epic States correspond to one of 3 types: Unstarted, Started, or Done.\",\"properties\":{\"color\":{\"description\":\"The hex color for this Epic State.\",\"format\":\"css-color\",\"minLength\":1,\"pattern\":\"^#[a-fA-F0-9]{6}$\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date the Epic State was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"The description of what sort of Epics belong in that Epic State.\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"global_id\":{\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the Epic State.\",\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"The Epic State's name.\",\"type\":\"string\"},\"position\":{\"description\":\"The position that the Epic State is in, starting with 0 at the left.\",\"format\":\"int64\",\"type\":\"integer\"},\"type\":{\"description\":\"The type of Epic State (Unstarted, Started, or Done)\",\"type\":\"string\"},\"updated_at\":{\"description\":\"When the Epic State was last updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"description\",\"entity_type\",\"name\",\"global_id\",\"type\",\"updated_at\",\"id\",\"position\",\"created_at\"],\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique ID of the Epic Workflow.\",\"format\":\"int64\",\"type\":\"integer\"},\"updated_at\":{\"description\":\"The date the Epic Workflow was updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"entity_type\",\"id\",\"created_at\",\"updated_at\",\"default_epic_state_id\",\"epic_states\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v3/epic-workflow","segments":[{"lit":"api"},{"lit":"v3"},{"lit":"epic-workflow"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.epic_states`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"epic_workflow","name__orig":"epic_workflow","Name":"EpicWorkflow","name_":"epic_workflow","name-":"epic-workflow","NAME":"EPIC_WORKFLOW","index$":11}, {"active":true,"entity":"epic_workflow","key$":"BasicEpicWorkflowFlow","kind":"basic","name":"BasicEpicWorkflowFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"epic_workflow_ref01"}}],"index$":0}]}, 'EpicWorkflow')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let epic_workflow_ref01_data = Object.values(setup.data.existing.epic_workflow)[0]

    // LIST
    const epic_workflow_ref01_ent = client.EpicWorkflow()
    const epic_workflow_ref01_match = {}

    const epic_workflow_ref01_list = (await epic_workflow_ref01_ent.list(epic_workflow_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/epic_workflow/EpicWorkflowTestData.json')

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
    ['epic_workflow01','epic_workflow02','epic_workflow03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_EPIC_WORKFLOW_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': '',
  })

  idmap = env['SHORTCUT_TEST_EPIC_WORKFLOW_ENTID']

  const live = 'TRUE' === env.SHORTCUT_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SHORTCUT_TEST_EPIC_WORKFLOW_ENTID']
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
  

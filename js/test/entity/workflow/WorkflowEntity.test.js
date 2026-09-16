
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


describe('WorkflowEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.Workflow()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"auto_assign_owner","req":true,"short":"Indicates if an owner is automatically assigned when an unowned story is started.","type":"`$BOOLEAN`","index$":0},{"active":true,"format":"date-time","name":"created_at","req":true,"short":"The date the Workflow was created.","type":"`$STRING`","index$":1},{"active":true,"format":"int64","name":"default_state_id","req":true,"short":"The unique ID of the default state that new Stories are entered into.","type":"`$INTEGER`","index$":2},{"active":true,"name":"description","req":true,"short":"A description of the workflow.","type":"`$STRING`","index$":3},{"active":true,"name":"entity_type","req":true,"short":"A string description of this resource.","type":"`$STRING`","index$":4},{"active":true,"format":"int64","name":"id","req":true,"short":"The unique ID of the Workflow.","type":"`$INTEGER`","index$":5},{"active":true,"name":"name","req":true,"short":"The name of the workflow.","type":"`$STRING`","index$":6},{"active":true,"name":"project_ids","req":true,"short":"An array of IDs of projects within the Workflow.","type":"`$ARRAY`","index$":7},{"active":true,"name":"states","req":true,"short":"A map of the states in this Workflow.","type":"`$ARRAY`","index$":8},{"active":true,"format":"int64","name":"team_id","req":true,"short":"The ID of the team the workflow belongs to.","type":"`$INTEGER`","index$":9},{"active":true,"format":"date-time","name":"updated_at","req":true,"short":"The date the Workflow was updated.","type":"`$STRING`","index$":10}],"id":{"field":"id","name":"id"},"name":"workflow","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /api/v3/workflows","json":"{\"operationId\":\"listWorkflows\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"additionalProperties\":false,\"description\":\"Workflow is the array of defined Workflow States. Workflow can be queried using the API but must be updated in the Shortcut UI. \",\"properties\":{\"auto_assign_owner\":{\"description\":\"Indicates if an owner is automatically assigned when an unowned story is started.\",\"type\":\"boolean\"},\"created_at\":{\"description\":\"The date the Workflow was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"default_state_id\":{\"description\":\"The unique ID of the default state that new Stories are entered into.\",\"format\":\"int64\",\"type\":\"integer\"},\"description\":{\"description\":\"A description of the workflow.\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the Workflow.\",\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the workflow.\",\"type\":\"string\"},\"project_ids\":{\"description\":\"An array of IDs of projects within the Workflow.\",\"items\":{\"format\":\"double\",\"type\":\"number\"},\"type\":\"array\"},\"states\":{\"description\":\"A map of the states in this Workflow.\",\"items\":{\"additionalProperties\":false,\"description\":\"Workflow State is any of the at least 3 columns. Workflow States correspond to one of 3 types: Unstarted, Started, or Done.\",\"properties\":{\"color\":{\"description\":\"The hex color for this Workflow State.\",\"format\":\"css-color\",\"minLength\":1,\"pattern\":\"^#[a-fA-F0-9]{6}$\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date the Workflow State was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"The description of what sort of Stories belong in that Workflow state.\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"global_id\":{\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the Workflow State.\",\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"The Workflow State's name.\",\"type\":\"string\"},\"num_stories\":{\"description\":\"The number of Stories currently in that Workflow State.\",\"format\":\"int64\",\"type\":\"integer\"},\"num_story_templates\":{\"description\":\"The number of Story Templates associated with that Workflow State.\",\"format\":\"int64\",\"type\":\"integer\"},\"position\":{\"description\":\"The position that the Workflow State is in, starting with 0 at the left.\",\"format\":\"int64\",\"type\":\"integer\"},\"type\":{\"description\":\"The type of Workflow State (Unstarted, Started, or Finished)\",\"type\":\"string\"},\"updated_at\":{\"description\":\"When the Workflow State was last updated.\",\"format\":\"date-time\",\"type\":\"string\"},\"verb\":{\"description\":\"The verb that triggers a move to that Workflow State when making VCS commits.\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"description\",\"entity_type\",\"verb\",\"name\",\"global_id\",\"num_stories\",\"type\",\"updated_at\",\"id\",\"num_story_templates\",\"position\",\"created_at\"],\"type\":\"object\"},\"type\":\"array\"},\"team_id\":{\"description\":\"The ID of the team the workflow belongs to.\",\"format\":\"int64\",\"type\":\"integer\"},\"updated_at\":{\"description\":\"The date the Workflow was updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"description\",\"entity_type\",\"project_ids\",\"states\",\"name\",\"updated_at\",\"auto_assign_owner\",\"id\",\"team_id\",\"created_at\",\"default_state_id\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v3/workflows","segments":[{"lit":"api"},{"lit":"v3"},{"lit":"workflows"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"workflow_public_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /api/v3/workflows/{workflow-public-id}","json":"{\"operationId\":\"getWorkflow\",\"parameters\":[{\"description\":\"The ID of the Workflow.\",\"in\":\"path\",\"name\":\"workflow-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Workflow is the array of defined Workflow States. Workflow can be queried using the API but must be updated in the Shortcut UI. \",\"properties\":{\"auto_assign_owner\":{\"description\":\"Indicates if an owner is automatically assigned when an unowned story is started.\",\"type\":\"boolean\"},\"created_at\":{\"description\":\"The date the Workflow was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"default_state_id\":{\"description\":\"The unique ID of the default state that new Stories are entered into.\",\"format\":\"int64\",\"type\":\"integer\"},\"description\":{\"description\":\"A description of the workflow.\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the Workflow.\",\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the workflow.\",\"type\":\"string\"},\"project_ids\":{\"description\":\"An array of IDs of projects within the Workflow.\",\"items\":{\"format\":\"double\",\"type\":\"number\"},\"type\":\"array\"},\"states\":{\"description\":\"A map of the states in this Workflow.\",\"items\":{\"additionalProperties\":false,\"description\":\"Workflow State is any of the at least 3 columns. Workflow States correspond to one of 3 types: Unstarted, Started, or Done.\",\"properties\":{\"color\":{\"description\":\"The hex color for this Workflow State.\",\"format\":\"css-color\",\"minLength\":1,\"pattern\":\"^#[a-fA-F0-9]{6}$\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date the Workflow State was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"The description of what sort of Stories belong in that Workflow state.\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"global_id\":{\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the Workflow State.\",\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"The Workflow State's name.\",\"type\":\"string\"},\"num_stories\":{\"description\":\"The number of Stories currently in that Workflow State.\",\"format\":\"int64\",\"type\":\"integer\"},\"num_story_templates\":{\"description\":\"The number of Story Templates associated with that Workflow State.\",\"format\":\"int64\",\"type\":\"integer\"},\"position\":{\"description\":\"The position that the Workflow State is in, starting with 0 at the left.\",\"format\":\"int64\",\"type\":\"integer\"},\"type\":{\"description\":\"The type of Workflow State (Unstarted, Started, or Finished)\",\"type\":\"string\"},\"updated_at\":{\"description\":\"When the Workflow State was last updated.\",\"format\":\"date-time\",\"type\":\"string\"},\"verb\":{\"description\":\"The verb that triggers a move to that Workflow State when making VCS commits.\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"description\",\"entity_type\",\"verb\",\"name\",\"global_id\",\"num_stories\",\"type\",\"updated_at\",\"id\",\"num_story_templates\",\"position\",\"created_at\"],\"type\":\"object\"},\"type\":\"array\"},\"team_id\":{\"description\":\"The ID of the team the workflow belongs to.\",\"format\":\"int64\",\"type\":\"integer\"},\"updated_at\":{\"description\":\"The date the Workflow was updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"description\",\"entity_type\",\"project_ids\",\"states\",\"name\",\"updated_at\",\"auto_assign_owner\",\"id\",\"team_id\",\"created_at\",\"default_state_id\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v3/workflows/{workflow-public-id}","rename":{"param":{"workflow-public-id":"id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"workflows"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"workflow","name__orig":"workflow","Name":"Workflow","name_":"workflow","name-":"workflow","NAME":"WORKFLOW","index$":35}, {"active":true,"entity":"workflow","key$":"BasicWorkflowFlow","kind":"basic","name":"BasicWorkflowFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"workflow_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"workflow_ref01","srcdatavar":"workflow_ref01_data","suffix":"_dt0"},"match":{"id":"workflow01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-workflow_ref01"}}],"index$":1}]}, 'Workflow')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let workflow_ref01_data = Object.values(setup.data.existing.workflow)[0]

    // LIST
    const workflow_ref01_ent = client.Workflow()
    const workflow_ref01_match = {}

    const workflow_ref01_list = (await workflow_ref01_ent.list(workflow_ref01_match)).map((e) => e.data())


    // LOAD
    const workflow_ref01_match_dt0 = {}
    workflow_ref01_match_dt0.id = workflow_ref01_data.id
    const workflow_ref01_data_dt0 = (await workflow_ref01_ent.load(workflow_ref01_match_dt0)).data()
    assert(workflow_ref01_data_dt0.id === workflow_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/workflow/WorkflowTestData.json')

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
    ['workflow01','workflow02','workflow03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_WORKFLOW_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': '',
  })

  idmap = env['SHORTCUT_TEST_WORKFLOW_ENTID']

  const live = 'TRUE' === env.SHORTCUT_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SHORTCUT_TEST_WORKFLOW_ENTID']
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
  

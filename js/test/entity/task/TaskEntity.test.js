
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


describe('TaskEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.Task()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"int64","name":"after_id","req":false,"short":"Move task after this task ID.","type":"`$INTEGER`","index$":0},{"active":true,"format":"int64","name":"before_id","req":false,"short":"Move task before this task ID.","type":"`$INTEGER`","index$":1},{"active":true,"name":"complete","op":{"create":{"req":false,"type":"`$BOOLEAN`"},"update":{"req":false,"type":"`$BOOLEAN`"}},"req":true,"short":"True/false boolean indicating whether the Task has been completed.","type":"`$BOOLEAN`","index$":2},{"active":true,"format":"date-time","name":"completed_at","req":true,"short":"The time/date the Task was completed.","type":"`$STRING`","index$":3},{"active":true,"format":"date-time","name":"created_at","op":{"create":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The time/date the Task was created.","type":"`$STRING`","index$":4},{"active":true,"name":"description","op":{"update":{"req":false,"type":"`$STRING`"}},"req":true,"short":"Full text of the Task.","type":"`$STRING`","index$":5},{"active":true,"name":"entity_type","req":true,"short":"A string description of this resource.","type":"`$STRING`","index$":6},{"active":true,"name":"external_id","op":{"create":{"req":false,"type":"`$STRING`"}},"req":true,"short":"This field can be set to another unique ID.","type":"`$STRING`","index$":7},{"active":true,"name":"global_id","req":true,"type":"`$STRING`","index$":8},{"active":true,"name":"group_mention_ids","req":true,"short":"An array of UUIDs of Groups mentioned in this Task.","type":"`$ARRAY`","index$":9},{"active":true,"format":"int64","name":"id","req":true,"short":"The unique ID of the Task.","type":"`$INTEGER`","index$":10},{"active":true,"name":"member_mention_ids","req":true,"short":"An array of UUIDs of Members mentioned in this Task.","type":"`$ARRAY`","index$":11},{"active":true,"name":"mention_ids","req":true,"short":"`Deprecated:` use `member_mention_ids`.","type":"`$ARRAY`","index$":12},{"active":true,"name":"owner_ids","op":{"create":{"req":false,"type":"`$ARRAY`"},"update":{"req":false,"type":"`$ARRAY`"}},"req":true,"short":"An array of UUIDs of the Owners of this Task.","type":"`$ARRAY`","index$":13},{"active":true,"format":"int64","name":"position","req":true,"short":"The number corresponding to the Task's position within a list of Tasks on a Story.","type":"`$INTEGER`","index$":14},{"active":true,"format":"int64","name":"story_id","req":true,"short":"The unique identifier of the parent Story.","type":"`$INTEGER`","index$":15},{"active":true,"format":"date-time","name":"updated_at","op":{"create":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The time/date the Task was updated.","type":"`$STRING`","index$":16}],"id":{"field":"id","name":"id"},"name":"task","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"story_id","orig":"story_public_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"POST /api/v3/stories/{story-public-id}/tasks","json":"{\"operationId\":\"createTask\",\"parameters\":[{\"description\":\"The ID of the Story that the Task will be in.\",\"in\":\"path\",\"name\":\"story-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"complete\":{\"description\":\"True/false boolean indicating whether the Task is completed. Defaults to false.\",\"type\":\"boolean\"},\"created_at\":{\"description\":\"Defaults to the time/date the Task is created but can be set to reflect another creation time/date.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"The Task description.\",\"maxLength\":2048,\"minLength\":1,\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here.\",\"maxLength\":128,\"type\":\"string\"},\"owner_ids\":{\"description\":\"An array of UUIDs for any members you want to add as Owners on this new Task.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"updated_at\":{\"description\":\"Defaults to the time/date the Task is created in Shortcut but can be set to reflect another time/date.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"description\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"A Task on a Story.\",\"properties\":{\"complete\":{\"description\":\"True/false boolean indicating whether the Task has been completed.\",\"type\":\"boolean\"},\"completed_at\":{\"description\":\"The time/date the Task was completed.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date the Task was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"Full text of the Task.\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"global_id\":{\"type\":\"string\"},\"group_mention_ids\":{\"description\":\"An array of UUIDs of Groups mentioned in this Task.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique ID of the Task.\",\"format\":\"int64\",\"type\":\"integer\"},\"member_mention_ids\":{\"description\":\"An array of UUIDs of Members mentioned in this Task.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"mention_ids\":{\"description\":\"`Deprecated:` use `member_mention_ids`.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"owner_ids\":{\"description\":\"An array of UUIDs of the Owners of this Task.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"position\":{\"description\":\"The number corresponding to the Task's position within a list of Tasks on a Story.\",\"format\":\"int64\",\"type\":\"integer\"},\"story_id\":{\"description\":\"The unique identifier of the parent Story.\",\"format\":\"int64\",\"type\":\"integer\"},\"updated_at\":{\"description\":\"The time/date the Task was updated.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"description\",\"entity_type\",\"story_id\",\"mention_ids\",\"member_mention_ids\",\"completed_at\",\"global_id\",\"updated_at\",\"group_mention_ids\",\"owner_ids\",\"external_id\",\"id\",\"position\",\"complete\",\"created_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/v3/stories/{story-public-id}/tasks","rename":{"param":{"story-public-id":"story_id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"stories"},{"var":"story_id"},{"lit":"tasks"}],"select":{"exist":["story_id"]},"transform":{"req":{"complete":"`reqdata.complete`","created_at":"`reqdata.created_at`","description":"`reqdata.description`","external_id":"`reqdata.external_id`","owner_ids":"`reqdata.owner_id`","updated_at":"`reqdata.updated_at`"},"res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"task_public_id","reqd":true,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"param","name":"story_id","orig":"story_public_id","reqd":true,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/v3/stories/{story-public-id}/tasks/{task-public-id}","json":"{\"operationId\":\"getTask\",\"parameters\":[{\"description\":\"The unique ID of the Story this Task is associated with.\",\"in\":\"path\",\"name\":\"story-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}},{\"description\":\"The unique ID of the Task.\",\"in\":\"path\",\"name\":\"task-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"A Task on a Story.\",\"properties\":{\"complete\":{\"description\":\"True/false boolean indicating whether the Task has been completed.\",\"type\":\"boolean\"},\"completed_at\":{\"description\":\"The time/date the Task was completed.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date the Task was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"Full text of the Task.\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"global_id\":{\"type\":\"string\"},\"group_mention_ids\":{\"description\":\"An array of UUIDs of Groups mentioned in this Task.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique ID of the Task.\",\"format\":\"int64\",\"type\":\"integer\"},\"member_mention_ids\":{\"description\":\"An array of UUIDs of Members mentioned in this Task.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"mention_ids\":{\"description\":\"`Deprecated:` use `member_mention_ids`.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"owner_ids\":{\"description\":\"An array of UUIDs of the Owners of this Task.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"position\":{\"description\":\"The number corresponding to the Task's position within a list of Tasks on a Story.\",\"format\":\"int64\",\"type\":\"integer\"},\"story_id\":{\"description\":\"The unique identifier of the parent Story.\",\"format\":\"int64\",\"type\":\"integer\"},\"updated_at\":{\"description\":\"The time/date the Task was updated.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"description\",\"entity_type\",\"story_id\",\"mention_ids\",\"member_mention_ids\",\"completed_at\",\"global_id\",\"updated_at\",\"group_mention_ids\",\"owner_ids\",\"external_id\",\"id\",\"position\",\"complete\",\"created_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v3/stories/{story-public-id}/tasks/{task-public-id}","rename":{"param":{"story-public-id":"story_id","task-public-id":"id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"stories"},{"var":"story_id"},{"lit":"tasks"},{"var":"id"}],"select":{"exist":["id","story_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"task_public_id","reqd":true,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"param","name":"story_id","orig":"story_public_id","reqd":true,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"DELETE /api/v3/stories/{story-public-id}/tasks/{task-public-id}","json":"{\"operationId\":\"deleteTask\",\"parameters\":[{\"description\":\"The unique ID of the Story this Task is associated with.\",\"in\":\"path\",\"name\":\"story-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}},{\"description\":\"The unique ID of the Task.\",\"in\":\"path\",\"name\":\"task-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"No Content\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/api/v3/stories/{story-public-id}/tasks/{task-public-id}","rename":{"param":{"story-public-id":"story_id","task-public-id":"id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"stories"},{"var":"story_id"},{"lit":"tasks"},{"var":"id"}],"select":{"exist":["id","story_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"task_public_id","reqd":true,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"param","name":"story_id","orig":"story_public_id","reqd":true,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"PUT /api/v3/stories/{story-public-id}/tasks/{task-public-id}","json":"{\"operationId\":\"updateTask\",\"parameters\":[{\"description\":\"The unique identifier of the parent Story.\",\"in\":\"path\",\"name\":\"story-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}},{\"description\":\"The unique identifier of the Task you wish to update.\",\"in\":\"path\",\"name\":\"task-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"after_id\":{\"description\":\"Move task after this task ID.\",\"format\":\"int64\",\"type\":\"integer\"},\"before_id\":{\"description\":\"Move task before this task ID.\",\"format\":\"int64\",\"type\":\"integer\"},\"complete\":{\"description\":\"A true/false boolean indicating whether the task is complete.\",\"type\":\"boolean\"},\"description\":{\"description\":\"The Task's description.\",\"maxLength\":2048,\"minLength\":1,\"type\":\"string\"},\"owner_ids\":{\"description\":\"An array of UUIDs of the owners of this story.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"A Task on a Story.\",\"properties\":{\"complete\":{\"description\":\"True/false boolean indicating whether the Task has been completed.\",\"type\":\"boolean\"},\"completed_at\":{\"description\":\"The time/date the Task was completed.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date the Task was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"Full text of the Task.\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"global_id\":{\"type\":\"string\"},\"group_mention_ids\":{\"description\":\"An array of UUIDs of Groups mentioned in this Task.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique ID of the Task.\",\"format\":\"int64\",\"type\":\"integer\"},\"member_mention_ids\":{\"description\":\"An array of UUIDs of Members mentioned in this Task.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"mention_ids\":{\"description\":\"`Deprecated:` use `member_mention_ids`.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"owner_ids\":{\"description\":\"An array of UUIDs of the Owners of this Task.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"position\":{\"description\":\"The number corresponding to the Task's position within a list of Tasks on a Story.\",\"format\":\"int64\",\"type\":\"integer\"},\"story_id\":{\"description\":\"The unique identifier of the parent Story.\",\"format\":\"int64\",\"type\":\"integer\"},\"updated_at\":{\"description\":\"The time/date the Task was updated.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"description\",\"entity_type\",\"story_id\",\"mention_ids\",\"member_mention_ids\",\"completed_at\",\"global_id\",\"updated_at\",\"group_mention_ids\",\"owner_ids\",\"external_id\",\"id\",\"position\",\"complete\",\"created_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/api/v3/stories/{story-public-id}/tasks/{task-public-id}","rename":{"param":{"story-public-id":"story_id","task-public-id":"id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"stories"},{"var":"story_id"},{"lit":"tasks"},{"var":"id"}],"select":{"exist":["id","story_id"]},"transform":{"req":{"after_id":"`reqdata.after_id`","before_id":"`reqdata.before_id`","complete":"`reqdata.complete`","description":"`reqdata.description`","owner_ids":"`reqdata.owner_id`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["story"]]},"key$":"task","name__orig":"task","Name":"Task","name_":"task","name-":"task","NAME":"TASK","index$":31}, {"active":true,"entity":"task","key$":"BasicTaskFlow","kind":"basic","name":"BasicTaskFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"task_ref01"},"match":{"story_id":"story01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{"story_id":"story01"},"input":{"ref":"task_ref01","srcdatavar":"task_ref01_data","suffix":"_up0","textfield":"completed_at"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-task_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"task_ref01","srcdatavar":"task_ref01_data","suffix":"_dt0"},"match":{"id":"task01","story_id":"story01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-task_ref01"}}],"index$":2},{"active":true,"data":{},"input":{"ref":"task_ref01","suffix":"_rm0"},"match":{"id":"task01","story_id":"story01"},"op":"remove","spec":[],"valid":[],"index$":3}]}, 'Task')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const task_ref01_ent = client.Task()
    let task_ref01_data = setup.data.new.task['task_ref01']
    task_ref01_data['story_id'] = setup.idmap['story01']

    task_ref01_data = (await task_ref01_ent.create(task_ref01_data)).data()
    assert(null != task_ref01_data.id)


    // UPDATE
    const task_ref01_data_up0 = {}
    task_ref01_data_up0.id = task_ref01_data.id
    task_ref01_data_up0 ['story_id'] = setup.idmap['story_id']

    const task_ref01_markdef_up0 = { name: 'completed_at', value: 'Mark01-task_ref01_' + setup.now }
    task_ref01_data_up0 [task_ref01_markdef_up0.name] = task_ref01_markdef_up0.value

    const task_ref01_resdata_up0 = (await task_ref01_ent.update(task_ref01_data_up0)).data()
    assert(task_ref01_resdata_up0.id === task_ref01_data_up0.id)

    assert(task_ref01_resdata_up0[task_ref01_markdef_up0.name] === task_ref01_markdef_up0.value)


    // LOAD
    const task_ref01_match_dt0 = {}
    task_ref01_match_dt0.id = task_ref01_data.id
    const task_ref01_data_dt0 = (await task_ref01_ent.load(task_ref01_match_dt0)).data()
    assert(task_ref01_data_dt0.id === task_ref01_data.id)


    // REMOVE
    const task_ref01_match_rm0 = {}
    task_ref01_match_rm0.id = task_ref01_data.id
    await task_ref01_ent.remove(task_ref01_match_rm0)
  

  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/task/TaskTestData.json')

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
    ['task01','task02','task03','story01','story02','story03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_TASK_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': '',
  })

  idmap = env['SHORTCUT_TEST_TASK_ENTID']

  const live = 'TRUE' === env.SHORTCUT_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SHORTCUT_TEST_TASK_ENTID']
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
  

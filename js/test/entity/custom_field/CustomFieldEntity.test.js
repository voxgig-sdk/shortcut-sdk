
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


describe('CustomFieldEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.CustomField()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"uuid","name":"after_id","req":false,"short":"The ID of the CustomField we want to move this CustomField after.","type":"`$STRING`","index$":0},{"active":true,"format":"uuid","name":"before_id","req":false,"short":"The ID of the CustomField we want to move this CustomField before.","type":"`$STRING`","index$":1},{"active":true,"name":"canonical_name","req":false,"short":"The canonical name for a Shortcut-defined field.","type":"`$STRING`","index$":2},{"active":true,"format":"date-time","name":"created_at","req":true,"short":"The instant when this CustomField was created.","type":"`$STRING`","index$":3},{"active":true,"name":"description","req":false,"short":"A string description of the CustomField","type":"`$STRING`","index$":4},{"active":true,"name":"enabled","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"req":true,"short":"When true, the CustomField can be applied to entities in the Workspace.","type":"`$BOOLEAN`","index$":5},{"active":true,"name":"entity_type","req":true,"short":"A string description of this resource.","type":"`$STRING`","index$":6},{"active":true,"name":"field_type","req":true,"short":"The type of Custom Field, eg.","type":"`$STRING`","index$":7},{"active":true,"name":"fixed_position","req":false,"short":"When true, the CustomFieldEnumValues may not be reordered.","type":"`$BOOLEAN`","index$":8},{"active":true,"name":"icon_set_identifier","req":false,"short":"A string that represents the icon that corresponds to this custom field.","type":"`$STRING`","index$":9},{"active":true,"format":"uuid","name":"id","req":true,"short":"The unique public ID for the CustomField.","type":"`$STRING`","index$":10},{"active":true,"name":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The name of the Custom Field.","type":"`$STRING`","index$":11},{"active":true,"format":"int64","name":"position","req":true,"short":"An integer indicating the position of this Custom Field with respect to the other CustomField","type":"`$INTEGER`","index$":12},{"active":true,"name":"story_types","req":false,"short":"The types of stories this CustomField is scoped to.","type":"`$ARRAY`","index$":13},{"active":true,"format":"date-time","name":"updated_at","req":true,"short":"The instant when this CustomField was last updated.","type":"`$STRING`","index$":14},{"active":true,"name":"values","req":false,"short":"A collection of legal values for a CustomField.","type":"`$ARRAY`","index$":15}],"id":{"field":"id","name":"id"},"name":"custom_field","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /api/v3/custom-fields","json":"{\"operationId\":\"listCustomFields\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"additionalProperties\":false,\"properties\":{\"canonical_name\":{\"description\":\"The canonical name for a Shortcut-defined field.\",\"type\":\"string\"},\"created_at\":{\"description\":\"The instant when this CustomField was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"A string description of the CustomField\",\"maxLength\":512,\"minLength\":1,\"type\":\"string\"},\"enabled\":{\"description\":\"When true, the CustomField can be applied to entities in the Workspace.\",\"type\":\"boolean\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"enum\":[\"custom-field\"],\"type\":\"string\"},\"field_type\":{\"description\":\"The type of Custom Field, eg. 'enum'.\",\"enum\":[\"enum\"],\"type\":\"string\"},\"fixed_position\":{\"description\":\"When true, the CustomFieldEnumValues may not be reordered.\",\"type\":\"boolean\"},\"icon_set_identifier\":{\"description\":\"A string that represents the icon that corresponds to this custom field.\",\"maxLength\":63,\"minLength\":1,\"type\":\"string\"},\"id\":{\"description\":\"The unique public ID for the CustomField.\",\"format\":\"uuid\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the Custom Field.\",\"maxLength\":63,\"minLength\":1,\"type\":\"string\"},\"position\":{\"description\":\"An integer indicating the position of this Custom Field with respect to the other CustomField\",\"format\":\"int64\",\"type\":\"integer\"},\"story_types\":{\"description\":\"The types of stories this CustomField is scoped to.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"updated_at\":{\"description\":\"The instant when this CustomField was last updated.\",\"format\":\"date-time\",\"type\":\"string\"},\"values\":{\"description\":\"A collection of legal values for a CustomField.\",\"items\":{\"additionalProperties\":false,\"properties\":{\"color_key\":{\"description\":\"A color key associated with this CustomFieldEnumValue.\",\"nullable\":true,\"type\":\"string\"},\"enabled\":{\"description\":\"When true, the CustomFieldEnumValue can be selected for the CustomField.\",\"type\":\"boolean\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"enum\":[\"custom-field-enum-value\"],\"type\":\"string\"},\"id\":{\"description\":\"The unique public ID for the Custom Field.\",\"format\":\"uuid\",\"type\":\"string\"},\"position\":{\"description\":\"An integer indicating the position of this Value with respect to the other CustomFieldEnumValues in the enumeration.\",\"format\":\"int64\",\"type\":\"integer\"},\"value\":{\"description\":\"A string value within the domain of this Custom Field.\",\"maxLength\":63,\"minLength\":1,\"type\":\"string\"}},\"required\":[\"id\",\"value\",\"position\",\"color_key\",\"entity_type\",\"enabled\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"entity_type\",\"name\",\"updated_at\",\"id\",\"field_type\",\"position\",\"enabled\",\"created_at\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v3/custom-fields","segments":[{"lit":"api"},{"lit":"v3"},{"lit":"custom-fields"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"custom_field_public_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v3/custom-fields/{custom-field-public-id}","json":"{\"operationId\":\"getCustomField\",\"parameters\":[{\"description\":\"The unique ID of the CustomField.\",\"in\":\"path\",\"name\":\"custom-field-public-id\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"canonical_name\":{\"description\":\"The canonical name for a Shortcut-defined field.\",\"type\":\"string\"},\"created_at\":{\"description\":\"The instant when this CustomField was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"A string description of the CustomField\",\"maxLength\":512,\"minLength\":1,\"type\":\"string\"},\"enabled\":{\"description\":\"When true, the CustomField can be applied to entities in the Workspace.\",\"type\":\"boolean\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"enum\":[\"custom-field\"],\"type\":\"string\"},\"field_type\":{\"description\":\"The type of Custom Field, eg. 'enum'.\",\"enum\":[\"enum\"],\"type\":\"string\"},\"fixed_position\":{\"description\":\"When true, the CustomFieldEnumValues may not be reordered.\",\"type\":\"boolean\"},\"icon_set_identifier\":{\"description\":\"A string that represents the icon that corresponds to this custom field.\",\"maxLength\":63,\"minLength\":1,\"type\":\"string\"},\"id\":{\"description\":\"The unique public ID for the CustomField.\",\"format\":\"uuid\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the Custom Field.\",\"maxLength\":63,\"minLength\":1,\"type\":\"string\"},\"position\":{\"description\":\"An integer indicating the position of this Custom Field with respect to the other CustomField\",\"format\":\"int64\",\"type\":\"integer\"},\"story_types\":{\"description\":\"The types of stories this CustomField is scoped to.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"updated_at\":{\"description\":\"The instant when this CustomField was last updated.\",\"format\":\"date-time\",\"type\":\"string\"},\"values\":{\"description\":\"A collection of legal values for a CustomField.\",\"items\":{\"additionalProperties\":false,\"properties\":{\"color_key\":{\"description\":\"A color key associated with this CustomFieldEnumValue.\",\"nullable\":true,\"type\":\"string\"},\"enabled\":{\"description\":\"When true, the CustomFieldEnumValue can be selected for the CustomField.\",\"type\":\"boolean\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"enum\":[\"custom-field-enum-value\"],\"type\":\"string\"},\"id\":{\"description\":\"The unique public ID for the Custom Field.\",\"format\":\"uuid\",\"type\":\"string\"},\"position\":{\"description\":\"An integer indicating the position of this Value with respect to the other CustomFieldEnumValues in the enumeration.\",\"format\":\"int64\",\"type\":\"integer\"},\"value\":{\"description\":\"A string value within the domain of this Custom Field.\",\"maxLength\":63,\"minLength\":1,\"type\":\"string\"}},\"required\":[\"id\",\"value\",\"position\",\"color_key\",\"entity_type\",\"enabled\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"entity_type\",\"name\",\"updated_at\",\"id\",\"field_type\",\"position\",\"enabled\",\"created_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v3/custom-fields/{custom-field-public-id}","rename":{"param":{"custom-field-public-id":"id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"custom-fields"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"custom_field_public_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"DELETE /api/v3/custom-fields/{custom-field-public-id}","json":"{\"operationId\":\"deleteCustomField\",\"parameters\":[{\"description\":\"The unique ID of the CustomField.\",\"in\":\"path\",\"name\":\"custom-field-public-id\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"No Content\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/api/v3/custom-fields/{custom-field-public-id}","rename":{"param":{"custom-field-public-id":"id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"custom-fields"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"custom_field_public_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"PUT /api/v3/custom-fields/{custom-field-public-id}","json":"{\"operationId\":\"updateCustomField\",\"parameters\":[{\"description\":\"The unique ID of the CustomField.\",\"in\":\"path\",\"name\":\"custom-field-public-id\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"after_id\":{\"description\":\"The ID of the CustomField we want to move this CustomField after.\",\"format\":\"uuid\",\"type\":\"string\"},\"before_id\":{\"description\":\"The ID of the CustomField we want to move this CustomField before.\",\"format\":\"uuid\",\"type\":\"string\"},\"description\":{\"description\":\"A description of the purpose of this field.\",\"type\":\"string\"},\"enabled\":{\"description\":\"Indicates whether the Field is enabled for the Workspace. Only enabled fields can be applied to Stories.\",\"type\":\"boolean\"},\"icon_set_identifier\":{\"description\":\"A frontend-controlled string that represents the icon for this custom field.\",\"maxLength\":63,\"minLength\":1,\"type\":\"string\"},\"name\":{\"description\":\"A collection of objects representing reporting periods for years.\",\"maxLength\":63,\"minLength\":1,\"type\":\"string\"},\"values\":{\"description\":\"A collection of EnumValue objects representing the values in the domain of some Custom Field.\",\"items\":{\"additionalProperties\":false,\"properties\":{\"color_key\":{\"description\":\"A color key associated with this EnumValue within the CustomField's domain.\",\"nullable\":true,\"type\":\"string\"},\"enabled\":{\"description\":\"Whether this EnumValue is enabled for its CustomField or not. Leaving this key out of the request leaves the current enabled state untouched.\",\"type\":\"boolean\"},\"id\":{\"description\":\"The unique ID of an existing EnumValue within the CustomField's domain.\",\"format\":\"uuid\",\"type\":\"string\"},\"value\":{\"description\":\"A string value within the domain of this Custom Field.\",\"maxLength\":63,\"minLength\":1,\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"canonical_name\":{\"description\":\"The canonical name for a Shortcut-defined field.\",\"type\":\"string\"},\"created_at\":{\"description\":\"The instant when this CustomField was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"A string description of the CustomField\",\"maxLength\":512,\"minLength\":1,\"type\":\"string\"},\"enabled\":{\"description\":\"When true, the CustomField can be applied to entities in the Workspace.\",\"type\":\"boolean\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"enum\":[\"custom-field\"],\"type\":\"string\"},\"field_type\":{\"description\":\"The type of Custom Field, eg. 'enum'.\",\"enum\":[\"enum\"],\"type\":\"string\"},\"fixed_position\":{\"description\":\"When true, the CustomFieldEnumValues may not be reordered.\",\"type\":\"boolean\"},\"icon_set_identifier\":{\"description\":\"A string that represents the icon that corresponds to this custom field.\",\"maxLength\":63,\"minLength\":1,\"type\":\"string\"},\"id\":{\"description\":\"The unique public ID for the CustomField.\",\"format\":\"uuid\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the Custom Field.\",\"maxLength\":63,\"minLength\":1,\"type\":\"string\"},\"position\":{\"description\":\"An integer indicating the position of this Custom Field with respect to the other CustomField\",\"format\":\"int64\",\"type\":\"integer\"},\"story_types\":{\"description\":\"The types of stories this CustomField is scoped to.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"updated_at\":{\"description\":\"The instant when this CustomField was last updated.\",\"format\":\"date-time\",\"type\":\"string\"},\"values\":{\"description\":\"A collection of legal values for a CustomField.\",\"items\":{\"additionalProperties\":false,\"properties\":{\"color_key\":{\"description\":\"A color key associated with this CustomFieldEnumValue.\",\"nullable\":true,\"type\":\"string\"},\"enabled\":{\"description\":\"When true, the CustomFieldEnumValue can be selected for the CustomField.\",\"type\":\"boolean\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"enum\":[\"custom-field-enum-value\"],\"type\":\"string\"},\"id\":{\"description\":\"The unique public ID for the Custom Field.\",\"format\":\"uuid\",\"type\":\"string\"},\"position\":{\"description\":\"An integer indicating the position of this Value with respect to the other CustomFieldEnumValues in the enumeration.\",\"format\":\"int64\",\"type\":\"integer\"},\"value\":{\"description\":\"A string value within the domain of this Custom Field.\",\"maxLength\":63,\"minLength\":1,\"type\":\"string\"}},\"required\":[\"id\",\"value\",\"position\",\"color_key\",\"entity_type\",\"enabled\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"entity_type\",\"name\",\"updated_at\",\"id\",\"field_type\",\"position\",\"enabled\",\"created_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"409\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Error returned when Datomic tx fails due to Datomc :db.error/cas-failed error\",\"properties\":{\"error\":{\"enum\":[\"data-conflict-error\"],\"type\":\"string\"},\"message\":{\"description\":\"An explanatory message: \\\"The update failed due to a data conflict. Please refresh and try again.\\\"\",\"type\":\"string\"}},\"required\":[\"error\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/api/v3/custom-fields/{custom-field-public-id}","rename":{"param":{"custom-field-public-id":"id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"custom-fields"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":{"after_id":"`reqdata.after_id`","before_id":"`reqdata.before_id`","description":"`reqdata.description`","enabled":"`reqdata.enabled`","icon_set_identifier":"`reqdata.icon_set_identifier`","name":"`reqdata.name`","values":"`reqdata.value`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"custom_field","name__orig":"custom_field","Name":"CustomField","name_":"custom_field","name-":"custom-field","NAME":"CUSTOM_FIELD","index$":3}, {"active":true,"entity":"custom_field","key$":"BasicCustomFieldFlow","kind":"basic","name":"BasicCustomFieldFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"custom_field_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"custom_field_ref01","srcdatavar":"custom_field_ref01_data","suffix":"_up0","textfield":"after_id"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_field_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"custom_field_ref01","srcdatavar":"custom_field_ref01_data","suffix":"_dt0"},"match":{"id":"custom_field01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_field_ref01"}}],"index$":2}]}, 'CustomField')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let custom_field_ref01_data = Object.values(setup.data.existing.custom_field)[0]

    // LIST
    const custom_field_ref01_ent = client.CustomField()
    const custom_field_ref01_match = {}

    const custom_field_ref01_list = (await custom_field_ref01_ent.list(custom_field_ref01_match)).map((e) => e.data())


    // UPDATE
    const custom_field_ref01_data_up0 = {}
    custom_field_ref01_data_up0.id = custom_field_ref01_data.id

    const custom_field_ref01_markdef_up0 = { name: 'after_id', value: 'Mark01-custom_field_ref01_' + setup.now }
    custom_field_ref01_data_up0 [custom_field_ref01_markdef_up0.name] = custom_field_ref01_markdef_up0.value

    const custom_field_ref01_resdata_up0 = (await custom_field_ref01_ent.update(custom_field_ref01_data_up0)).data()
    assert(custom_field_ref01_resdata_up0.id === custom_field_ref01_data_up0.id)

    assert(custom_field_ref01_resdata_up0[custom_field_ref01_markdef_up0.name] === custom_field_ref01_markdef_up0.value)


    // LOAD
    const custom_field_ref01_match_dt0 = {}
    custom_field_ref01_match_dt0.id = custom_field_ref01_data.id
    const custom_field_ref01_data_dt0 = (await custom_field_ref01_ent.load(custom_field_ref01_match_dt0)).data()
    assert(custom_field_ref01_data_dt0.id === custom_field_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/custom_field/CustomFieldTestData.json')

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
    ['custom_field01','custom_field02','custom_field03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_CUSTOM_FIELD_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': '',
  })

  idmap = env['SHORTCUT_TEST_CUSTOM_FIELD_ENTID']

  const live = 'TRUE' === env.SHORTCUT_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SHORTCUT_TEST_CUSTOM_FIELD_ENTID']
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
  

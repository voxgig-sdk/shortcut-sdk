
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


describe('DocSlimEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.DocSlim()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"app_url","req":true,"short":"The Shortcut application url for the Doc.","type":"`$STRING`","index$":0},{"active":true,"name":"content","req":true,"short":"The content for the new document","type":"`$STRING`","index$":1},{"active":true,"format":"uuid","name":"id","req":true,"short":"The public id of the Doc","type":"`$STRING`","index$":2},{"active":true,"name":"title","req":true,"short":"The title for the new document","type":"`$STRING`","index$":3}],"id":{"field":"id","name":"id"},"name":"doc_slim","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/v3/documents","json":"{\"operationId\":\"createDoc\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"content\":{\"description\":\"The content for the new document\",\"type\":\"string\"},\"title\":{\"description\":\"The title for the new document\",\"maxLength\":256,\"minLength\":1,\"type\":\"string\"}},\"required\":[\"title\",\"content\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"app_url\":{\"description\":\"The Shortcut application url for the Doc.\",\"type\":\"string\"},\"id\":{\"description\":\"The public id of the Doc\",\"format\":\"uuid\",\"type\":\"string\"},\"title\":{\"description\":\"The Docs Title\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"id\",\"title\",\"app_url\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"feature_tag\":{\"description\":\"The feature that is disabled\",\"type\":\"string\"},\"message\":{\"description\":\"The message explaining the error\",\"type\":\"string\"}},\"required\":[\"feature_tag\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/v3/documents","segments":[{"lit":"api"},{"lit":"v3"},{"lit":"documents"}],"select":{},"transform":{"req":{"content":"`reqdata.content`","title":"`reqdata.title`"},"res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /api/v3/documents","json":"{\"operationId\":\"listDocs\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"additionalProperties\":false,\"properties\":{\"app_url\":{\"description\":\"The Shortcut application url for the Doc.\",\"type\":\"string\"},\"id\":{\"description\":\"The public id of the Doc\",\"format\":\"uuid\",\"type\":\"string\"},\"title\":{\"description\":\"The Docs Title\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"id\",\"title\",\"app_url\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"feature_tag\":{\"description\":\"The feature that is disabled\",\"type\":\"string\"},\"message\":{\"description\":\"The message explaining the error\",\"type\":\"string\"}},\"required\":[\"feature_tag\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v3/documents","segments":[{"lit":"api"},{"lit":"v3"},{"lit":"documents"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"doc_slim","name__orig":"doc_slim","Name":"DocSlim","name_":"doc_slim","name-":"doc-slim","NAME":"DOC_SLIM","index$":5}, {"active":true,"entity":"doc_slim","key$":"BasicDocSlimFlow","kind":"basic","name":"BasicDocSlimFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"doc_slim_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"doc_slim_ref01"}}],"index$":1}]}, 'DocSlim')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const doc_slim_ref01_ent = client.DocSlim()
    let doc_slim_ref01_data = setup.data.new.doc_slim['doc_slim_ref01']

    doc_slim_ref01_data = (await doc_slim_ref01_ent.create(doc_slim_ref01_data)).data()
    assert(null != doc_slim_ref01_data.id)


    // LIST
    const doc_slim_ref01_match = {}

    const doc_slim_ref01_list = (await doc_slim_ref01_ent.list(doc_slim_ref01_match)).map((e) => e.data())

    assert(!isempty(select(doc_slim_ref01_list, { id: doc_slim_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/doc_slim/DocSlimTestData.json')

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
    ['doc_slim01','doc_slim02','doc_slim03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_DOC_SLIM_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': '',
  })

  idmap = env['SHORTCUT_TEST_DOC_SLIM_ENTID']

  const live = 'TRUE' === env.SHORTCUT_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SHORTCUT_TEST_DOC_SLIM_ENTID']
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
  

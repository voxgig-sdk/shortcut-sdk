
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')


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


  test('basic', async () => {

    const setup = basicSetup()
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

  if ('TRUE' === env.SHORTCUT_TEST_LIVE) {
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
      extra || {}
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
    now: Date.now(),
  }

  return setup
}
  

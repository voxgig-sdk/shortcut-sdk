
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { ShortcutSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('CustomFieldEntity', async () => {

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
    'SHORTCUT_APIKEY': 'NONE',
  })

  idmap = env['SHORTCUT_TEST_CUSTOM_FIELD_ENTID']

  if ('TRUE' === env.SHORTCUT_TEST_LIVE) {
    client = new ShortcutSDK(merge([
      {
        apikey: env.SHORTCUT_APIKEY,
      },
      extra
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
  

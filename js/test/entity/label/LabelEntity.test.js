
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


describe('LabelEntity', async () => {

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.Label()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const label_ref01_ent = client.Label()
    let label_ref01_data = setup.data.new.label['label_ref01']

    label_ref01_data = (await label_ref01_ent.create(label_ref01_data)).data()
    assert(null != label_ref01_data.id)


    // LIST
    const label_ref01_match = {}

    const label_ref01_list = (await label_ref01_ent.list(label_ref01_match)).map((e) => e.data())

    assert(!isempty(select(label_ref01_list, { id: label_ref01_data.id })))


    // UPDATE
    const label_ref01_data_up0 = {}
    label_ref01_data_up0.id = label_ref01_data.id

    const label_ref01_markdef_up0 = { name: 'app_url', value: 'Mark01-label_ref01_' + setup.now }
    label_ref01_data_up0 [label_ref01_markdef_up0.name] = label_ref01_markdef_up0.value

    const label_ref01_resdata_up0 = (await label_ref01_ent.update(label_ref01_data_up0)).data()
    assert(label_ref01_resdata_up0.id === label_ref01_data_up0.id)

    assert(label_ref01_resdata_up0[label_ref01_markdef_up0.name] === label_ref01_markdef_up0.value)


    // LOAD
    const label_ref01_match_dt0 = {}
    label_ref01_match_dt0.id = label_ref01_data.id
    const label_ref01_data_dt0 = (await label_ref01_ent.load(label_ref01_match_dt0)).data()
    assert(label_ref01_data_dt0.id === label_ref01_data.id)


    // REMOVE
    const label_ref01_match_rm0 = {}
    label_ref01_match_rm0.id = label_ref01_data.id
    await label_ref01_ent.remove(label_ref01_match_rm0)
  

    // LIST
    const label_ref01_match_rt0 = {}

    const label_ref01_list_rt0 = (await label_ref01_ent.list(label_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(label_ref01_list_rt0, { id: label_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/label/LabelTestData.json')

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
    ['label01','label02','label03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_LABEL_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': 'NONE',
  })

  idmap = env['SHORTCUT_TEST_LABEL_ENTID']

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
  

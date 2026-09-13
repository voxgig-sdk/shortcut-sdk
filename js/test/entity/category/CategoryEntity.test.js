
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


describe('CategoryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.Category()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const category_ref01_ent = client.Category()
    let category_ref01_data = setup.data.new.category['category_ref01']

    category_ref01_data = (await category_ref01_ent.create(category_ref01_data)).data()
    assert(null != category_ref01_data.id)


    // LIST
    const category_ref01_match = {}

    const category_ref01_list = (await category_ref01_ent.list(category_ref01_match)).map((e) => e.data())

    assert(!isempty(select(category_ref01_list, { id: category_ref01_data.id })))


    // UPDATE
    const category_ref01_data_up0 = {}
    category_ref01_data_up0.id = category_ref01_data.id

    const category_ref01_markdef_up0 = { name: 'color', value: 'Mark01-category_ref01_' + setup.now }
    category_ref01_data_up0 [category_ref01_markdef_up0.name] = category_ref01_markdef_up0.value

    const category_ref01_resdata_up0 = (await category_ref01_ent.update(category_ref01_data_up0)).data()
    assert(category_ref01_resdata_up0.id === category_ref01_data_up0.id)

    assert(category_ref01_resdata_up0[category_ref01_markdef_up0.name] === category_ref01_markdef_up0.value)


    // LOAD
    const category_ref01_match_dt0 = {}
    category_ref01_match_dt0.id = category_ref01_data.id
    const category_ref01_data_dt0 = (await category_ref01_ent.load(category_ref01_match_dt0)).data()
    assert(category_ref01_data_dt0.id === category_ref01_data.id)


    // REMOVE
    const category_ref01_match_rm0 = {}
    category_ref01_match_rm0.id = category_ref01_data.id
    await category_ref01_ent.remove(category_ref01_match_rm0)
  

    // LIST
    const category_ref01_match_rt0 = {}

    const category_ref01_list_rt0 = (await category_ref01_ent.list(category_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(category_ref01_list_rt0, { id: category_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/category/CategoryTestData.json')

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
    ['category01','category02','category03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_CATEGORY_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': '',
  })

  idmap = env['SHORTCUT_TEST_CATEGORY_ENTID']

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
  

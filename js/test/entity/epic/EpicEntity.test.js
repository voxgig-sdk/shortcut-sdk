
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


describe('EpicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.Epic()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const epic_ref01_ent = client.Epic()
    let epic_ref01_data = setup.data.new.epic['epic_ref01']
    epic_ref01_data['label_id'] = setup.idmap['label01']
    epic_ref01_data['milestone_id'] = setup.idmap['milestone01']
    epic_ref01_data['objectif_id'] = setup.idmap['objectif01']

    epic_ref01_data = (await epic_ref01_ent.create(epic_ref01_data)).data()
    assert(null != epic_ref01_data.id)


    // LIST
    const epic_ref01_match = {}
    epic_ref01_match['objectif_id'] = setup.idmap['objectif01']

    const epic_ref01_list = (await epic_ref01_ent.list(epic_ref01_match)).map((e) => e.data())

    assert(!isempty(select(epic_ref01_list, { id: epic_ref01_data.id })))


    // UPDATE
    const epic_ref01_data_up0 = {}
    epic_ref01_data_up0.id = epic_ref01_data.id

    const epic_ref01_markdef_up0 = { name: 'app_url', value: 'Mark01-epic_ref01_' + setup.now }
    epic_ref01_data_up0 [epic_ref01_markdef_up0.name] = epic_ref01_markdef_up0.value

    const epic_ref01_resdata_up0 = (await epic_ref01_ent.update(epic_ref01_data_up0)).data()
    assert(epic_ref01_resdata_up0.id === epic_ref01_data_up0.id)

    assert(epic_ref01_resdata_up0[epic_ref01_markdef_up0.name] === epic_ref01_markdef_up0.value)


    // LOAD
    const epic_ref01_match_dt0 = {}
    epic_ref01_match_dt0.id = epic_ref01_data.id
    const epic_ref01_data_dt0 = (await epic_ref01_ent.load(epic_ref01_match_dt0)).data()
    assert(epic_ref01_data_dt0.id === epic_ref01_data.id)


    // REMOVE
    const epic_ref01_match_rm0 = {}
    epic_ref01_match_rm0.id = epic_ref01_data.id
    await epic_ref01_ent.remove(epic_ref01_match_rm0)
  

    // LIST
    const epic_ref01_match_rt0 = {}
    epic_ref01_match_rt0['objectif_id'] = setup.idmap['objectif01']

    const epic_ref01_list_rt0 = (await epic_ref01_ent.list(epic_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(epic_ref01_list_rt0, { id: epic_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/epic/EpicTestData.json')

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
    ['epic01','epic02','epic03','label01','label02','label03','milestone01','milestone02','milestone03','objectif01','objectif02','objectif03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_EPIC_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': '',
  })

  idmap = env['SHORTCUT_TEST_EPIC_ENTID']

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
  

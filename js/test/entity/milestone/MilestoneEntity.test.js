
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


describe('MilestoneEntity', async () => {

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.Milestone()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const milestone_ref01_ent = client.Milestone()
    let milestone_ref01_data = setup.data.new.milestone['milestone_ref01']
    milestone_ref01_data['category_id'] = setup.idmap['category01']

    milestone_ref01_data = await milestone_ref01_ent.create(milestone_ref01_data)
    assert(null != milestone_ref01_data.id)


    // LIST
    const milestone_ref01_match = {}

    const milestone_ref01_list = await milestone_ref01_ent.list(milestone_ref01_match)

    assert(!isempty(select(milestone_ref01_list, { id: milestone_ref01_data.id })))


    // UPDATE
    const milestone_ref01_data_up0 = {}
    milestone_ref01_data_up0.id = milestone_ref01_data.id

    const milestone_ref01_markdef_up0 = { name: 'app_url', value: 'Mark01-milestone_ref01_' + setup.now }
    milestone_ref01_data_up0 [milestone_ref01_markdef_up0.name] = milestone_ref01_markdef_up0.value

    const milestone_ref01_resdata_up0 = await milestone_ref01_ent.update(milestone_ref01_data_up0)
    assert(milestone_ref01_resdata_up0.id === milestone_ref01_data_up0.id)

    assert(milestone_ref01_resdata_up0[milestone_ref01_markdef_up0.name] === milestone_ref01_markdef_up0.value)


    // LOAD
    const milestone_ref01_match_dt0 = {}
    milestone_ref01_match_dt0.id = milestone_ref01_data.id
    const milestone_ref01_data_dt0 = await milestone_ref01_ent.load(milestone_ref01_match_dt0)
    assert(milestone_ref01_data_dt0.id === milestone_ref01_data.id)


    // REMOVE
    const milestone_ref01_match_rm0 = {}
    milestone_ref01_match_rm0.id = milestone_ref01_data.id
    await milestone_ref01_ent.remove(milestone_ref01_match_rm0)
  

    // LIST
    const milestone_ref01_match_rt0 = {}

    const milestone_ref01_list_rt0 = await milestone_ref01_ent.list(milestone_ref01_match_rt0)

    assert(isempty(select(milestone_ref01_list_rt0, { id: milestone_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/milestone/MilestoneTestData.json')

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
    ['milestone01','milestone02','milestone03','category01','category02','category03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_MILESTONE_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': 'NONE',
  })

  idmap = env['SHORTCUT_TEST_MILESTONE_ENTID']

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
  


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


describe('ObjectiveEntity', async () => {

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.Objective()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const objective_ref01_ent = client.Objective()
    let objective_ref01_data = setup.data.new.objective['objective_ref01']

    objective_ref01_data = (await objective_ref01_ent.create(objective_ref01_data)).data()
    assert(null != objective_ref01_data.id)


    // LIST
    const objective_ref01_match = {}

    const objective_ref01_list = (await objective_ref01_ent.list(objective_ref01_match)).map((e) => e.data())

    assert(!isempty(select(objective_ref01_list, { id: objective_ref01_data.id })))


    // UPDATE
    const objective_ref01_data_up0 = {}
    objective_ref01_data_up0.id = objective_ref01_data.id

    const objective_ref01_markdef_up0 = { name: 'app_url', value: 'Mark01-objective_ref01_' + setup.now }
    objective_ref01_data_up0 [objective_ref01_markdef_up0.name] = objective_ref01_markdef_up0.value

    const objective_ref01_resdata_up0 = (await objective_ref01_ent.update(objective_ref01_data_up0)).data()
    assert(objective_ref01_resdata_up0.id === objective_ref01_data_up0.id)

    assert(objective_ref01_resdata_up0[objective_ref01_markdef_up0.name] === objective_ref01_markdef_up0.value)


    // LOAD
    const objective_ref01_match_dt0 = {}
    objective_ref01_match_dt0.id = objective_ref01_data.id
    const objective_ref01_data_dt0 = (await objective_ref01_ent.load(objective_ref01_match_dt0)).data()
    assert(objective_ref01_data_dt0.id === objective_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/objective/ObjectiveTestData.json')

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
    ['objective01','objective02','objective03','objectif01','objectif02','objectif03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_OBJECTIVE_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': 'NONE',
  })

  idmap = env['SHORTCUT_TEST_OBJECTIVE_ENTID']

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
  

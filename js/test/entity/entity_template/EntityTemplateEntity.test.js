
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


describe('EntityTemplateEntity', async () => {

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.EntityTemplate()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const entity_template_ref01_ent = client.EntityTemplate()
    let entity_template_ref01_data = setup.data.new.entity_template['entity_template_ref01']

    entity_template_ref01_data = (await entity_template_ref01_ent.create(entity_template_ref01_data)).data()
    assert(null != entity_template_ref01_data.id)


    // LIST
    const entity_template_ref01_match = {}

    const entity_template_ref01_list = (await entity_template_ref01_ent.list(entity_template_ref01_match)).map((e) => e.data())

    assert(!isempty(select(entity_template_ref01_list, { id: entity_template_ref01_data.id })))


    // UPDATE
    const entity_template_ref01_data_up0 = {}
    entity_template_ref01_data_up0.id = entity_template_ref01_data.id

    const entity_template_ref01_markdef_up0 = { name: 'author_id', value: 'Mark01-entity_template_ref01_' + setup.now }
    entity_template_ref01_data_up0 [entity_template_ref01_markdef_up0.name] = entity_template_ref01_markdef_up0.value

    const entity_template_ref01_resdata_up0 = (await entity_template_ref01_ent.update(entity_template_ref01_data_up0)).data()
    assert(entity_template_ref01_resdata_up0.id === entity_template_ref01_data_up0.id)

    assert(entity_template_ref01_resdata_up0[entity_template_ref01_markdef_up0.name] === entity_template_ref01_markdef_up0.value)


    // LOAD
    const entity_template_ref01_match_dt0 = {}
    entity_template_ref01_match_dt0.id = entity_template_ref01_data.id
    const entity_template_ref01_data_dt0 = (await entity_template_ref01_ent.load(entity_template_ref01_match_dt0)).data()
    assert(entity_template_ref01_data_dt0.id === entity_template_ref01_data.id)


    // REMOVE
    const entity_template_ref01_match_rm0 = {}
    entity_template_ref01_match_rm0.id = entity_template_ref01_data.id
    await entity_template_ref01_ent.remove(entity_template_ref01_match_rm0)
  

    // LIST
    const entity_template_ref01_match_rt0 = {}

    const entity_template_ref01_list_rt0 = (await entity_template_ref01_ent.list(entity_template_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(entity_template_ref01_list_rt0, { id: entity_template_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/entity_template/EntityTemplateTestData.json')

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
    ['entity_template01','entity_template02','entity_template03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_ENTITY_TEMPLATE_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': 'NONE',
  })

  idmap = env['SHORTCUT_TEST_ENTITY_TEMPLATE_ENTID']

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
  

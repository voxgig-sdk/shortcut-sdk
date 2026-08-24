
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


describe('StorySlimEntity', async () => {

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.StorySlim()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const story_slim_ref01_ent = client.StorySlim()
    let story_slim_ref01_data = setup.data.new.story_slim['story_slim_ref01']

    story_slim_ref01_data = await story_slim_ref01_ent.create(story_slim_ref01_data)
    assert(null != story_slim_ref01_data)


    // UPDATE
    const story_slim_ref01_data_up0 = {}

    const story_slim_ref01_markdef_up0 = { name: 'completed_at_end', value: 'Mark01-story_slim_ref01_' + setup.now }
    story_slim_ref01_data_up0 [story_slim_ref01_markdef_up0.name] = story_slim_ref01_markdef_up0.value

    const story_slim_ref01_resdata_up0 = await story_slim_ref01_ent.update(story_slim_ref01_data_up0)
    assert(null != story_slim_ref01_resdata_up0)

    assert(story_slim_ref01_resdata_up0[story_slim_ref01_markdef_up0.name] === story_slim_ref01_markdef_up0.value)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/story_slim/StorySlimTestData.json')

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
    ['story_slim01','story_slim02','story_slim03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_STORY_SLIM_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': 'NONE',
  })

  idmap = env['SHORTCUT_TEST_STORY_SLIM_ENTID']

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
  

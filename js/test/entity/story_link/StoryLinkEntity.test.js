
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


describe('StoryLinkEntity', async () => {

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.StoryLink()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const story_link_ref01_ent = client.StoryLink()
    let story_link_ref01_data = setup.data.new.story_link['story_link_ref01']

    story_link_ref01_data = (await story_link_ref01_ent.create(story_link_ref01_data)).data()
    assert(null != story_link_ref01_data.id)


    // UPDATE
    const story_link_ref01_data_up0 = {}
    story_link_ref01_data_up0.id = story_link_ref01_data.id

    const story_link_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-story_link_ref01_' + setup.now }
    story_link_ref01_data_up0 [story_link_ref01_markdef_up0.name] = story_link_ref01_markdef_up0.value

    const story_link_ref01_resdata_up0 = (await story_link_ref01_ent.update(story_link_ref01_data_up0)).data()
    assert(story_link_ref01_resdata_up0.id === story_link_ref01_data_up0.id)

    assert(story_link_ref01_resdata_up0[story_link_ref01_markdef_up0.name] === story_link_ref01_markdef_up0.value)


    // LOAD
    const story_link_ref01_match_dt0 = {}
    story_link_ref01_match_dt0.id = story_link_ref01_data.id
    const story_link_ref01_data_dt0 = (await story_link_ref01_ent.load(story_link_ref01_match_dt0)).data()
    assert(story_link_ref01_data_dt0.id === story_link_ref01_data.id)


    // REMOVE
    const story_link_ref01_match_rm0 = {}
    story_link_ref01_match_rm0.id = story_link_ref01_data.id
    await story_link_ref01_ent.remove(story_link_ref01_match_rm0)
  

  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/story_link/StoryLinkTestData.json')

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
    ['story_link01','story_link02','story_link03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_STORY_LINK_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': 'NONE',
  })

  idmap = env['SHORTCUT_TEST_STORY_LINK_ENTID']

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
  

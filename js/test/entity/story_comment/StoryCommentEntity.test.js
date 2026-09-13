
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


describe('StoryCommentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.StoryComment()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const story_comment_ref01_ent = client.StoryComment()
    let story_comment_ref01_data = setup.data.new.story_comment['story_comment_ref01']
    story_comment_ref01_data['story-public-id'] = setup.idmap['story-public-id01']
    story_comment_ref01_data['story_id'] = setup.idmap['story01']

    story_comment_ref01_data = (await story_comment_ref01_ent.create(story_comment_ref01_data)).data()
    assert(null != story_comment_ref01_data.id)


    // LIST
    const story_comment_ref01_match = {}
    story_comment_ref01_match['story-public-id'] = setup.idmap['story-public-id01']

    const story_comment_ref01_list = (await story_comment_ref01_ent.list(story_comment_ref01_match)).map((e) => e.data())

    assert(!isempty(select(story_comment_ref01_list, { id: story_comment_ref01_data.id })))


    // UPDATE
    const story_comment_ref01_data_up0 = {}
    story_comment_ref01_data_up0.id = story_comment_ref01_data.id
    story_comment_ref01_data_up0 ['story_id'] = setup.idmap['story_id']

    const story_comment_ref01_markdef_up0 = { name: 'app_url', value: 'Mark01-story_comment_ref01_' + setup.now }
    story_comment_ref01_data_up0 [story_comment_ref01_markdef_up0.name] = story_comment_ref01_markdef_up0.value

    const story_comment_ref01_resdata_up0 = (await story_comment_ref01_ent.update(story_comment_ref01_data_up0)).data()
    assert(story_comment_ref01_resdata_up0.id === story_comment_ref01_data_up0.id)

    assert(story_comment_ref01_resdata_up0[story_comment_ref01_markdef_up0.name] === story_comment_ref01_markdef_up0.value)


    // LOAD
    const story_comment_ref01_match_dt0 = {}
    story_comment_ref01_match_dt0.id = story_comment_ref01_data.id
    const story_comment_ref01_data_dt0 = (await story_comment_ref01_ent.load(story_comment_ref01_match_dt0)).data()
    assert(story_comment_ref01_data_dt0.id === story_comment_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/story_comment/StoryCommentTestData.json')

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
    ['story_comment01','story_comment02','story_comment03','story01','story02','story03','story01','story02','story03','comment01','comment02','comment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_STORY_COMMENT_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': '',
  })

  idmap = env['SHORTCUT_TEST_STORY_COMMENT_ENTID']

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
  

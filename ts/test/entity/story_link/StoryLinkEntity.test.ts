
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { ShortcutSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('StoryLinkEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.StoryLink()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SHORTCUT_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'story_link.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_STORY_LINK_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const story_link_ref01_ent = client.StoryLink()
    let story_link_ref01_data = setup.data.new.story_link['story_link_ref01']

    story_link_ref01_data = await story_link_ref01_ent.create(story_link_ref01_data)
    assert(null != story_link_ref01_data.id)


    // UPDATE
    const story_link_ref01_data_up0: any = {}
    story_link_ref01_data_up0.id = story_link_ref01_data.id

    const story_link_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-story_link_ref01_' + setup.now }
    ;(story_link_ref01_data_up0 as any)[story_link_ref01_markdef_up0.name] = story_link_ref01_markdef_up0.value

    const story_link_ref01_resdata_up0 = await story_link_ref01_ent.update(story_link_ref01_data_up0)
    assert(story_link_ref01_resdata_up0.id === story_link_ref01_data_up0.id)

    assert((story_link_ref01_resdata_up0 as any)[story_link_ref01_markdef_up0.name] === story_link_ref01_markdef_up0.value)


    // LOAD
    const story_link_ref01_match_dt0: any = {}
    story_link_ref01_match_dt0.id = story_link_ref01_data.id
    const story_link_ref01_data_dt0 = await story_link_ref01_ent.load(story_link_ref01_match_dt0)
    assert(story_link_ref01_data_dt0.id === story_link_ref01_data.id)


    // REMOVE
    const story_link_ref01_match_rm0: any = { id: story_link_ref01_data.id }
    await story_link_ref01_ent.remove(story_link_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

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

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['SHORTCUT_TEST_STORY_LINK_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'SHORTCUT_TEST_STORY_LINK_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': 'NONE',
  })

  idmap = env['SHORTCUT_TEST_STORY_LINK_ENTID']

  const live = 'TRUE' === env.SHORTCUT_TEST_LIVE

  if (live) {
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
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  

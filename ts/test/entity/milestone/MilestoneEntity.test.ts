
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


describe('MilestoneEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.Milestone()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SHORTCUT_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'milestone.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_MILESTONE_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const milestone_ref01_ent = client.Milestone()
    let milestone_ref01_data = setup.data.new.milestone['milestone_ref01']
    milestone_ref01_data['category_id'] = setup.idmap['category01']

    milestone_ref01_data = (await milestone_ref01_ent.create(milestone_ref01_data)).data()
    assert(null != milestone_ref01_data.id)


    // LIST
    const milestone_ref01_match: any = {}

    const milestone_ref01_list = (await milestone_ref01_ent.list(milestone_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(milestone_ref01_list, { id: milestone_ref01_data.id })))


    // UPDATE
    const milestone_ref01_data_up0: any = {}
    milestone_ref01_data_up0.id = milestone_ref01_data.id

    const milestone_ref01_markdef_up0 = { name: 'app_url', value: 'Mark01-milestone_ref01_' + setup.now }
    ;(milestone_ref01_data_up0 as any)[milestone_ref01_markdef_up0.name] = milestone_ref01_markdef_up0.value

    const milestone_ref01_resdata_up0 = (await milestone_ref01_ent.update(milestone_ref01_data_up0)).data()
    assert(milestone_ref01_resdata_up0.id === milestone_ref01_data_up0.id)

    assert((milestone_ref01_resdata_up0 as any)[milestone_ref01_markdef_up0.name] === milestone_ref01_markdef_up0.value)


    // LOAD
    const milestone_ref01_match_dt0: any = {}
    milestone_ref01_match_dt0.id = milestone_ref01_data.id
    const milestone_ref01_data_dt0 = (await milestone_ref01_ent.load(milestone_ref01_match_dt0)).data()
    assert(milestone_ref01_data_dt0.id === milestone_ref01_data.id)


    // REMOVE
    const milestone_ref01_match_rm0: any = { id: milestone_ref01_data.id }
    await milestone_ref01_ent.remove(milestone_ref01_match_rm0)
  

    // LIST
    const milestone_ref01_match_rt0: any = {}

    const milestone_ref01_list_rt0 = (await milestone_ref01_ent.list(milestone_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(milestone_ref01_list_rt0, { id: milestone_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

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

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['SHORTCUT_TEST_MILESTONE_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'SHORTCUT_TEST_MILESTONE_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': 'NONE',
  })

  idmap = env['SHORTCUT_TEST_MILESTONE_ENTID']

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
  

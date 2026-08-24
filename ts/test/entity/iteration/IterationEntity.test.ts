
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


describe('IterationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.Iteration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SHORTCUT_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'iteration.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_ITERATION_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const iteration_ref01_ent = client.Iteration()
    let iteration_ref01_data = setup.data.new.iteration['iteration_ref01']

    iteration_ref01_data = await iteration_ref01_ent.create(iteration_ref01_data)
    assert(null != iteration_ref01_data.id)


    // LIST
    const iteration_ref01_match: any = {}

    const iteration_ref01_list = await iteration_ref01_ent.list(iteration_ref01_match)

    assert(!isempty(select(iteration_ref01_list, { id: iteration_ref01_data.id })))


    // UPDATE
    const iteration_ref01_data_up0: any = {}
    iteration_ref01_data_up0.id = iteration_ref01_data.id

    const iteration_ref01_markdef_up0 = { name: 'app_url', value: 'Mark01-iteration_ref01_' + setup.now }
    ;(iteration_ref01_data_up0 as any)[iteration_ref01_markdef_up0.name] = iteration_ref01_markdef_up0.value

    const iteration_ref01_resdata_up0 = await iteration_ref01_ent.update(iteration_ref01_data_up0)
    assert(iteration_ref01_resdata_up0.id === iteration_ref01_data_up0.id)

    assert((iteration_ref01_resdata_up0 as any)[iteration_ref01_markdef_up0.name] === iteration_ref01_markdef_up0.value)


    // LOAD
    const iteration_ref01_match_dt0: any = {}
    iteration_ref01_match_dt0.id = iteration_ref01_data.id
    const iteration_ref01_data_dt0 = await iteration_ref01_ent.load(iteration_ref01_match_dt0)
    assert(iteration_ref01_data_dt0.id === iteration_ref01_data.id)


    // REMOVE
    const iteration_ref01_match_rm0: any = { id: iteration_ref01_data.id }
    await iteration_ref01_ent.remove(iteration_ref01_match_rm0)
  

    // LIST
    const iteration_ref01_match_rt0: any = {}

    const iteration_ref01_list_rt0 = await iteration_ref01_ent.list(iteration_ref01_match_rt0)

    assert(isempty(select(iteration_ref01_list_rt0, { id: iteration_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/iteration/IterationTestData.json')

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
    ['iteration01','iteration02','iteration03'],
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
  const idmapEnvVal = process.env['SHORTCUT_TEST_ITERATION_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'SHORTCUT_TEST_ITERATION_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': 'NONE',
  })

  idmap = env['SHORTCUT_TEST_ITERATION_ENTID']

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
  

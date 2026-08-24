
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


describe('HealthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.Health()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SHORTCUT_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'health.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_HEALTH_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const health_ref01_ent = client.Health()
    let health_ref01_data = setup.data.new.health['health_ref01']
    health_ref01_data['epic_id'] = setup.idmap['epic01']

    health_ref01_data = await health_ref01_ent.create(health_ref01_data)
    assert(null != health_ref01_data.id)


    // LIST
    const health_ref01_match: any = {}
    health_ref01_match['epic_id'] = setup.idmap['epic01']

    const health_ref01_list = await health_ref01_ent.list(health_ref01_match)

    assert(!isempty(select(health_ref01_list, { id: health_ref01_data.id })))


    // UPDATE
    const health_ref01_data_up0: any = {}
    health_ref01_data_up0.id = health_ref01_data.id

    const health_ref01_markdef_up0 = { name: 'author_id', value: 'Mark01-health_ref01_' + setup.now }
    ;(health_ref01_data_up0 as any)[health_ref01_markdef_up0.name] = health_ref01_markdef_up0.value

    const health_ref01_resdata_up0 = await health_ref01_ent.update(health_ref01_data_up0)
    assert(health_ref01_resdata_up0.id === health_ref01_data_up0.id)

    assert((health_ref01_resdata_up0 as any)[health_ref01_markdef_up0.name] === health_ref01_markdef_up0.value)


    // LOAD
    const health_ref01_match_dt0: any = {}
    health_ref01_match_dt0.id = health_ref01_data.id
    const health_ref01_data_dt0 = await health_ref01_ent.load(health_ref01_match_dt0)
    assert(health_ref01_data_dt0.id === health_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/health/HealthTestData.json')

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
    ['health01','health02','health03','epic01','epic02','epic03'],
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
  const idmapEnvVal = process.env['SHORTCUT_TEST_HEALTH_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'SHORTCUT_TEST_HEALTH_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': 'NONE',
  })

  idmap = env['SHORTCUT_TEST_HEALTH_ENTID']

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
  

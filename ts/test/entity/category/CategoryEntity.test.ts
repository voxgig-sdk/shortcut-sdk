
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


describe('CategoryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.Category()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SHORTCUT_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'category.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_CATEGORY_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const category_ref01_ent = client.Category()
    let category_ref01_data = setup.data.new.category['category_ref01']

    category_ref01_data = await category_ref01_ent.create(category_ref01_data)
    assert(null != category_ref01_data.id)


    // LIST
    const category_ref01_match: any = {}

    const category_ref01_list = await category_ref01_ent.list(category_ref01_match)

    assert(!isempty(select(category_ref01_list, { id: category_ref01_data.id })))


    // UPDATE
    const category_ref01_data_up0: any = {}
    category_ref01_data_up0.id = category_ref01_data.id

    const category_ref01_markdef_up0 = { name: 'color', value: 'Mark01-category_ref01_' + setup.now }
    ;(category_ref01_data_up0 as any)[category_ref01_markdef_up0.name] = category_ref01_markdef_up0.value

    const category_ref01_resdata_up0 = await category_ref01_ent.update(category_ref01_data_up0)
    assert(category_ref01_resdata_up0.id === category_ref01_data_up0.id)

    assert((category_ref01_resdata_up0 as any)[category_ref01_markdef_up0.name] === category_ref01_markdef_up0.value)


    // LOAD
    const category_ref01_match_dt0: any = {}
    category_ref01_match_dt0.id = category_ref01_data.id
    const category_ref01_data_dt0 = await category_ref01_ent.load(category_ref01_match_dt0)
    assert(category_ref01_data_dt0.id === category_ref01_data.id)


    // REMOVE
    const category_ref01_match_rm0: any = { id: category_ref01_data.id }
    await category_ref01_ent.remove(category_ref01_match_rm0)
  

    // LIST
    const category_ref01_match_rt0: any = {}

    const category_ref01_list_rt0 = await category_ref01_ent.list(category_ref01_match_rt0)

    assert(isempty(select(category_ref01_list_rt0, { id: category_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/category/CategoryTestData.json')

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
    ['category01','category02','category03'],
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
  const idmapEnvVal = process.env['SHORTCUT_TEST_CATEGORY_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'SHORTCUT_TEST_CATEGORY_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': 'NONE',
  })

  idmap = env['SHORTCUT_TEST_CATEGORY_ENTID']

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
  

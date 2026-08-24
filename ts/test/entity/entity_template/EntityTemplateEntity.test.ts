
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


describe('EntityTemplateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.EntityTemplate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SHORTCUT_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'entity_template.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_ENTITY_TEMPLATE_ENTID JSON to run live')
      return
    }
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
    const entity_template_ref01_match: any = {}

    const entity_template_ref01_list = (await entity_template_ref01_ent.list(entity_template_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(entity_template_ref01_list, { id: entity_template_ref01_data.id })))


    // UPDATE
    const entity_template_ref01_data_up0: any = {}
    entity_template_ref01_data_up0.id = entity_template_ref01_data.id

    const entity_template_ref01_markdef_up0 = { name: 'author_id', value: 'Mark01-entity_template_ref01_' + setup.now }
    ;(entity_template_ref01_data_up0 as any)[entity_template_ref01_markdef_up0.name] = entity_template_ref01_markdef_up0.value

    const entity_template_ref01_resdata_up0 = (await entity_template_ref01_ent.update(entity_template_ref01_data_up0)).data()
    assert(entity_template_ref01_resdata_up0.id === entity_template_ref01_data_up0.id)

    assert((entity_template_ref01_resdata_up0 as any)[entity_template_ref01_markdef_up0.name] === entity_template_ref01_markdef_up0.value)


    // LOAD
    const entity_template_ref01_match_dt0: any = {}
    entity_template_ref01_match_dt0.id = entity_template_ref01_data.id
    const entity_template_ref01_data_dt0 = (await entity_template_ref01_ent.load(entity_template_ref01_match_dt0)).data()
    assert(entity_template_ref01_data_dt0.id === entity_template_ref01_data.id)


    // REMOVE
    const entity_template_ref01_match_rm0: any = { id: entity_template_ref01_data.id }
    await entity_template_ref01_ent.remove(entity_template_ref01_match_rm0)
  

    // LIST
    const entity_template_ref01_match_rt0: any = {}

    const entity_template_ref01_list_rt0 = (await entity_template_ref01_ent.list(entity_template_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(entity_template_ref01_list_rt0, { id: entity_template_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

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

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['SHORTCUT_TEST_ENTITY_TEMPLATE_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'SHORTCUT_TEST_ENTITY_TEMPLATE_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': 'NONE',
  })

  idmap = env['SHORTCUT_TEST_ENTITY_TEMPLATE_ENTID']

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
  

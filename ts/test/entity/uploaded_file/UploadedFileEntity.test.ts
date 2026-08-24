
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


describe('UploadedFileEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.UploadedFile()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SHORTCUT_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'uploaded_file.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_UPLOADED_FILE_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const uploaded_file_ref01_ent = client.UploadedFile()
    let uploaded_file_ref01_data = setup.data.new.uploaded_file['uploaded_file_ref01']

    uploaded_file_ref01_data = (await uploaded_file_ref01_ent.create(uploaded_file_ref01_data)).data()
    assert(null != uploaded_file_ref01_data.id)


    // LIST
    const uploaded_file_ref01_match: any = {}

    const uploaded_file_ref01_list = (await uploaded_file_ref01_ent.list(uploaded_file_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(uploaded_file_ref01_list, { id: uploaded_file_ref01_data.id })))


    // UPDATE
    const uploaded_file_ref01_data_up0: any = {}
    uploaded_file_ref01_data_up0.id = uploaded_file_ref01_data.id

    const uploaded_file_ref01_markdef_up0 = { name: 'content_type', value: 'Mark01-uploaded_file_ref01_' + setup.now }
    ;(uploaded_file_ref01_data_up0 as any)[uploaded_file_ref01_markdef_up0.name] = uploaded_file_ref01_markdef_up0.value

    const uploaded_file_ref01_resdata_up0 = (await uploaded_file_ref01_ent.update(uploaded_file_ref01_data_up0)).data()
    assert(uploaded_file_ref01_resdata_up0.id === uploaded_file_ref01_data_up0.id)

    assert((uploaded_file_ref01_resdata_up0 as any)[uploaded_file_ref01_markdef_up0.name] === uploaded_file_ref01_markdef_up0.value)


    // LOAD
    const uploaded_file_ref01_match_dt0: any = {}
    uploaded_file_ref01_match_dt0.id = uploaded_file_ref01_data.id
    const uploaded_file_ref01_data_dt0 = (await uploaded_file_ref01_ent.load(uploaded_file_ref01_match_dt0)).data()
    assert(uploaded_file_ref01_data_dt0.id === uploaded_file_ref01_data.id)


    // REMOVE
    const uploaded_file_ref01_match_rm0: any = { id: uploaded_file_ref01_data.id }
    await uploaded_file_ref01_ent.remove(uploaded_file_ref01_match_rm0)
  

    // LIST
    const uploaded_file_ref01_match_rt0: any = {}

    const uploaded_file_ref01_list_rt0 = (await uploaded_file_ref01_ent.list(uploaded_file_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(uploaded_file_ref01_list_rt0, { id: uploaded_file_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/uploaded_file/UploadedFileTestData.json')

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
    ['uploaded_file01','uploaded_file02','uploaded_file03'],
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
  const idmapEnvVal = process.env['SHORTCUT_TEST_UPLOADED_FILE_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'SHORTCUT_TEST_UPLOADED_FILE_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': 'NONE',
  })

  idmap = env['SHORTCUT_TEST_UPLOADED_FILE_ENTID']

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
  

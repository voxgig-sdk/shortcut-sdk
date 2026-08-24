
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


describe('UploadedFileEntity', async () => {

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.UploadedFile()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
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
    const uploaded_file_ref01_match = {}

    const uploaded_file_ref01_list = (await uploaded_file_ref01_ent.list(uploaded_file_ref01_match)).map((e) => e.data())

    assert(!isempty(select(uploaded_file_ref01_list, { id: uploaded_file_ref01_data.id })))


    // UPDATE
    const uploaded_file_ref01_data_up0 = {}
    uploaded_file_ref01_data_up0.id = uploaded_file_ref01_data.id

    const uploaded_file_ref01_markdef_up0 = { name: 'content_type', value: 'Mark01-uploaded_file_ref01_' + setup.now }
    uploaded_file_ref01_data_up0 [uploaded_file_ref01_markdef_up0.name] = uploaded_file_ref01_markdef_up0.value

    const uploaded_file_ref01_resdata_up0 = (await uploaded_file_ref01_ent.update(uploaded_file_ref01_data_up0)).data()
    assert(uploaded_file_ref01_resdata_up0.id === uploaded_file_ref01_data_up0.id)

    assert(uploaded_file_ref01_resdata_up0[uploaded_file_ref01_markdef_up0.name] === uploaded_file_ref01_markdef_up0.value)


    // LOAD
    const uploaded_file_ref01_match_dt0 = {}
    uploaded_file_ref01_match_dt0.id = uploaded_file_ref01_data.id
    const uploaded_file_ref01_data_dt0 = (await uploaded_file_ref01_ent.load(uploaded_file_ref01_match_dt0)).data()
    assert(uploaded_file_ref01_data_dt0.id === uploaded_file_ref01_data.id)


    // REMOVE
    const uploaded_file_ref01_match_rm0 = {}
    uploaded_file_ref01_match_rm0.id = uploaded_file_ref01_data.id
    await uploaded_file_ref01_ent.remove(uploaded_file_ref01_match_rm0)
  

    // LIST
    const uploaded_file_ref01_match_rt0 = {}

    const uploaded_file_ref01_list_rt0 = (await uploaded_file_ref01_ent.list(uploaded_file_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(uploaded_file_ref01_list_rt0, { id: uploaded_file_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

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

  const env = envOverride({
    'SHORTCUT_TEST_UPLOADED_FILE_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': 'NONE',
  })

  idmap = env['SHORTCUT_TEST_UPLOADED_FILE_ENTID']

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
  



import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ShortcutSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('LinkedFileEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.LinkedFile()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SHORTCUT_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'linked_file.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"content_type","op":{"create":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The content type of the image (e.g.","type":"`$STRING`","index$":0},{"active":true,"format":"date-time","name":"created_at","req":true,"short":"The time/date the LinkedFile was created.","type":"`$STRING`","index$":1},{"active":true,"name":"description","op":{"create":{"req":false,"type":"`$STRING`"},"update":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The description of the file.","type":"`$STRING`","index$":2},{"active":true,"name":"entity_type","req":true,"short":"A string description of this resource.","type":"`$STRING`","index$":3},{"active":true,"name":"group_mention_ids","req":true,"short":"The groups that are mentioned in the description of the file.","type":"`$ARRAY`","index$":4},{"active":true,"format":"int64","name":"id","req":true,"short":"The unique identifier for the file.","type":"`$INTEGER`","index$":5},{"active":true,"name":"member_mention_ids","req":true,"short":"The members that are mentioned in the description of the file.","type":"`$ARRAY`","index$":6},{"active":true,"name":"mention_ids","req":true,"short":"`Deprecated:` use `member_mention_ids`.","type":"`$ARRAY`","index$":7},{"active":true,"name":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The name of the linked file.","type":"`$STRING`","index$":8},{"active":true,"format":"int64","name":"size","op":{"create":{"req":false,"type":"`$INTEGER`"},"update":{"req":false,"type":"`$INTEGER`"}},"req":true,"short":"The filesize, if the integration provided it.","type":"`$INTEGER`","index$":9},{"active":true,"format":"int64","name":"story_id","req":false,"short":"The ID of the linked story.","type":"`$INTEGER`","index$":10},{"active":true,"name":"story_ids","req":true,"short":"The IDs of the stories this file is attached to.","type":"`$ARRAY`","index$":11},{"active":true,"name":"thumbnail_url","op":{"create":{"req":false,"type":"`$STRING`"},"update":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The URL of the file thumbnail, if the integration provided it.","type":"`$STRING`","index$":12},{"active":true,"name":"type","op":{"update":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The integration type (e.g.","type":"`$STRING`","index$":13},{"active":true,"format":"date-time","name":"updated_at","req":true,"short":"The time/date the LinkedFile was updated.","type":"`$STRING`","index$":14},{"active":true,"format":"uuid","name":"uploader_id","op":{"create":{"req":false,"type":"`$STRING`"},"update":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The UUID of the member that uploaded the file.","type":"`$STRING`","index$":15},{"active":true,"name":"url","op":{"update":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The URL of the file.","type":"`$STRING`","index$":16}],"id":{"field":"id","name":"id"},"name":"linked_file","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/v3/linked-files","json":"{\"operationId\":\"createLinkedFile\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"content_type\":{\"description\":\"The content type of the image (e.g. txt/plain).\",\"maxLength\":128,\"type\":\"string\"},\"description\":{\"description\":\"The description of the file.\",\"maxLength\":512,\"type\":\"string\"},\"name\":{\"description\":\"The name of the file.\",\"maxLength\":256,\"minLength\":1,\"type\":\"string\"},\"size\":{\"description\":\"The filesize, if the integration provided it.\",\"format\":\"int64\",\"type\":\"integer\"},\"story_id\":{\"description\":\"The ID of the linked story.\",\"format\":\"int64\",\"type\":\"integer\"},\"thumbnail_url\":{\"description\":\"The URL of the thumbnail, if the integration provided it.\",\"maxLength\":2048,\"pattern\":\"^https?://.+$\",\"type\":\"string\"},\"type\":{\"description\":\"The integration type of the file (e.g. google, dropbox, box).\",\"enum\":[\"google\",\"url\",\"dropbox\",\"box\",\"onedrive\"],\"type\":\"string\"},\"uploader_id\":{\"description\":\"The UUID of the member that uploaded the file.\",\"format\":\"uuid\",\"type\":\"string\"},\"url\":{\"description\":\"The URL of linked file.\",\"maxLength\":2048,\"pattern\":\"^https?://.+$\",\"type\":\"string\"}},\"required\":[\"name\",\"type\",\"url\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Linked files are stored on a third-party website and linked to one or more Stories. Shortcut currently supports linking files from Google Drive, Dropbox, Box, and by URL.\",\"properties\":{\"content_type\":{\"description\":\"The content type of the image (e.g. txt/plain).\",\"nullable\":true,\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date the LinkedFile was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"The description of the file.\",\"nullable\":true,\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"group_mention_ids\":{\"description\":\"The groups that are mentioned in the description of the file.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique identifier for the file.\",\"format\":\"int64\",\"type\":\"integer\"},\"member_mention_ids\":{\"description\":\"The members that are mentioned in the description of the file.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"mention_ids\":{\"description\":\"`Deprecated:` use `member_mention_ids`.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"The name of the linked file.\",\"type\":\"string\"},\"size\":{\"description\":\"The filesize, if the integration provided it.\",\"format\":\"int64\",\"nullable\":true,\"type\":\"integer\"},\"story_ids\":{\"description\":\"The IDs of the stories this file is attached to.\",\"items\":{\"format\":\"int64\",\"type\":\"integer\"},\"type\":\"array\"},\"thumbnail_url\":{\"description\":\"The URL of the file thumbnail, if the integration provided it.\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The integration type (e.g. google, dropbox, box).\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date the LinkedFile was updated.\",\"format\":\"date-time\",\"type\":\"string\"},\"uploader_id\":{\"description\":\"The UUID of the member that uploaded the file.\",\"format\":\"uuid\",\"type\":\"string\"},\"url\":{\"description\":\"The URL of the file.\",\"type\":\"string\"}},\"required\":[\"description\",\"entity_type\",\"story_ids\",\"mention_ids\",\"member_mention_ids\",\"name\",\"thumbnail_url\",\"type\",\"size\",\"uploader_id\",\"content_type\",\"updated_at\",\"group_mention_ids\",\"id\",\"url\",\"created_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/v3/linked-files","segments":[{"lit":"api"},{"lit":"v3"},{"lit":"linked-files"}],"select":{},"transform":{"req":{"content_type":"`reqdata.content_type`","description":"`reqdata.description`","name":"`reqdata.name`","size":"`reqdata.size`","story_id":"`reqdata.story_id`","thumbnail_url":"`reqdata.thumbnail_url`","type":"`reqdata.type`","uploader_id":"`reqdata.uploader_id`","url":"`reqdata.url`"},"res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /api/v3/linked-files","json":"{\"operationId\":\"listLinkedFiles\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"additionalProperties\":false,\"description\":\"Linked files are stored on a third-party website and linked to one or more Stories. Shortcut currently supports linking files from Google Drive, Dropbox, Box, and by URL.\",\"properties\":{\"content_type\":{\"description\":\"The content type of the image (e.g. txt/plain).\",\"nullable\":true,\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date the LinkedFile was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"The description of the file.\",\"nullable\":true,\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"group_mention_ids\":{\"description\":\"The groups that are mentioned in the description of the file.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique identifier for the file.\",\"format\":\"int64\",\"type\":\"integer\"},\"member_mention_ids\":{\"description\":\"The members that are mentioned in the description of the file.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"mention_ids\":{\"description\":\"`Deprecated:` use `member_mention_ids`.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"The name of the linked file.\",\"type\":\"string\"},\"size\":{\"description\":\"The filesize, if the integration provided it.\",\"format\":\"int64\",\"nullable\":true,\"type\":\"integer\"},\"story_ids\":{\"description\":\"The IDs of the stories this file is attached to.\",\"items\":{\"format\":\"int64\",\"type\":\"integer\"},\"type\":\"array\"},\"thumbnail_url\":{\"description\":\"The URL of the file thumbnail, if the integration provided it.\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The integration type (e.g. google, dropbox, box).\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date the LinkedFile was updated.\",\"format\":\"date-time\",\"type\":\"string\"},\"uploader_id\":{\"description\":\"The UUID of the member that uploaded the file.\",\"format\":\"uuid\",\"type\":\"string\"},\"url\":{\"description\":\"The URL of the file.\",\"type\":\"string\"}},\"required\":[\"description\",\"entity_type\",\"story_ids\",\"mention_ids\",\"member_mention_ids\",\"name\",\"thumbnail_url\",\"type\",\"size\",\"uploader_id\",\"content_type\",\"updated_at\",\"group_mention_ids\",\"id\",\"url\",\"created_at\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v3/linked-files","segments":[{"lit":"api"},{"lit":"v3"},{"lit":"linked-files"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"linked_file_public_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /api/v3/linked-files/{linked-file-public-id}","json":"{\"operationId\":\"getLinkedFile\",\"parameters\":[{\"description\":\"The unique identifier of the linked file.\",\"in\":\"path\",\"name\":\"linked-file-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Linked files are stored on a third-party website and linked to one or more Stories. Shortcut currently supports linking files from Google Drive, Dropbox, Box, and by URL.\",\"properties\":{\"content_type\":{\"description\":\"The content type of the image (e.g. txt/plain).\",\"nullable\":true,\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date the LinkedFile was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"The description of the file.\",\"nullable\":true,\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"group_mention_ids\":{\"description\":\"The groups that are mentioned in the description of the file.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique identifier for the file.\",\"format\":\"int64\",\"type\":\"integer\"},\"member_mention_ids\":{\"description\":\"The members that are mentioned in the description of the file.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"mention_ids\":{\"description\":\"`Deprecated:` use `member_mention_ids`.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"The name of the linked file.\",\"type\":\"string\"},\"size\":{\"description\":\"The filesize, if the integration provided it.\",\"format\":\"int64\",\"nullable\":true,\"type\":\"integer\"},\"story_ids\":{\"description\":\"The IDs of the stories this file is attached to.\",\"items\":{\"format\":\"int64\",\"type\":\"integer\"},\"type\":\"array\"},\"thumbnail_url\":{\"description\":\"The URL of the file thumbnail, if the integration provided it.\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The integration type (e.g. google, dropbox, box).\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date the LinkedFile was updated.\",\"format\":\"date-time\",\"type\":\"string\"},\"uploader_id\":{\"description\":\"The UUID of the member that uploaded the file.\",\"format\":\"uuid\",\"type\":\"string\"},\"url\":{\"description\":\"The URL of the file.\",\"type\":\"string\"}},\"required\":[\"description\",\"entity_type\",\"story_ids\",\"mention_ids\",\"member_mention_ids\",\"name\",\"thumbnail_url\",\"type\",\"size\",\"uploader_id\",\"content_type\",\"updated_at\",\"group_mention_ids\",\"id\",\"url\",\"created_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v3/linked-files/{linked-file-public-id}","rename":{"param":{"linked-file-public-id":"id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"linked-files"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"linked_file_public_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"DELETE /api/v3/linked-files/{linked-file-public-id}","json":"{\"operationId\":\"deleteLinkedFile\",\"parameters\":[{\"description\":\"The unique identifier of the linked file.\",\"in\":\"path\",\"name\":\"linked-file-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"No Content\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/api/v3/linked-files/{linked-file-public-id}","rename":{"param":{"linked-file-public-id":"id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"linked-files"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"linked_file_public_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"PUT /api/v3/linked-files/{linked-file-public-id}","json":"{\"operationId\":\"updateLinkedFile\",\"parameters\":[{\"description\":\"The unique identifier of the linked file.\",\"in\":\"path\",\"name\":\"linked-file-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"description\":{\"description\":\"The description of the file.\",\"maxLength\":512,\"type\":\"string\"},\"name\":{\"description\":\"The name of the file.\",\"minLength\":1,\"type\":\"string\"},\"size\":{\"description\":\"The filesize, if the integration provided it.\",\"format\":\"int64\",\"type\":\"integer\"},\"story_id\":{\"description\":\"The ID of the linked story.\",\"format\":\"int64\",\"type\":\"integer\"},\"thumbnail_url\":{\"description\":\"The URL of the thumbnail, if the integration provided it.\",\"maxLength\":2048,\"pattern\":\"^https?://.+$\",\"type\":\"string\"},\"type\":{\"description\":\"The integration type of the file (e.g. google, dropbox, box).\",\"enum\":[\"google\",\"url\",\"dropbox\",\"box\",\"onedrive\"],\"type\":\"string\"},\"uploader_id\":{\"description\":\"The UUID of the member that uploaded the file.\",\"format\":\"uuid\",\"type\":\"string\"},\"url\":{\"description\":\"The URL of linked file.\",\"maxLength\":2048,\"pattern\":\"^https?://.+$\",\"type\":\"string\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Linked files are stored on a third-party website and linked to one or more Stories. Shortcut currently supports linking files from Google Drive, Dropbox, Box, and by URL.\",\"properties\":{\"content_type\":{\"description\":\"The content type of the image (e.g. txt/plain).\",\"nullable\":true,\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date the LinkedFile was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"The description of the file.\",\"nullable\":true,\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"group_mention_ids\":{\"description\":\"The groups that are mentioned in the description of the file.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique identifier for the file.\",\"format\":\"int64\",\"type\":\"integer\"},\"member_mention_ids\":{\"description\":\"The members that are mentioned in the description of the file.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"mention_ids\":{\"description\":\"`Deprecated:` use `member_mention_ids`.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"The name of the linked file.\",\"type\":\"string\"},\"size\":{\"description\":\"The filesize, if the integration provided it.\",\"format\":\"int64\",\"nullable\":true,\"type\":\"integer\"},\"story_ids\":{\"description\":\"The IDs of the stories this file is attached to.\",\"items\":{\"format\":\"int64\",\"type\":\"integer\"},\"type\":\"array\"},\"thumbnail_url\":{\"description\":\"The URL of the file thumbnail, if the integration provided it.\",\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"The integration type (e.g. google, dropbox, box).\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date the LinkedFile was updated.\",\"format\":\"date-time\",\"type\":\"string\"},\"uploader_id\":{\"description\":\"The UUID of the member that uploaded the file.\",\"format\":\"uuid\",\"type\":\"string\"},\"url\":{\"description\":\"The URL of the file.\",\"type\":\"string\"}},\"required\":[\"description\",\"entity_type\",\"story_ids\",\"mention_ids\",\"member_mention_ids\",\"name\",\"thumbnail_url\",\"type\",\"size\",\"uploader_id\",\"content_type\",\"updated_at\",\"group_mention_ids\",\"id\",\"url\",\"created_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/api/v3/linked-files/{linked-file-public-id}","rename":{"param":{"linked-file-public-id":"id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"linked-files"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":{"description":"`reqdata.description`","name":"`reqdata.name`","size":"`reqdata.size`","story_id":"`reqdata.story_id`","thumbnail_url":"`reqdata.thumbnail_url`","type":"`reqdata.type`","uploader_id":"`reqdata.uploader_id`","url":"`reqdata.url`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"linked_file","name__orig":"linked_file","Name":"LinkedFile","name_":"linked_file","name-":"linked-file","NAME":"LINKED_FILE","index$":18}, {"active":true,"entity":"linked_file","key$":"BasicLinkedFileFlow","kind":"basic","name":"BasicLinkedFileFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"linked_file_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"linked_file_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"linked_file_ref01","srcdatavar":"linked_file_ref01_data","suffix":"_up0","textfield":"content_type"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-linked_file_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"linked_file_ref01","srcdatavar":"linked_file_ref01_data","suffix":"_dt0"},"match":{"id":"linked_file01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-linked_file_ref01"}}],"index$":3},{"active":true,"data":{},"input":{"ref":"linked_file_ref01","suffix":"_rm0"},"match":{"id":"linked_file01"},"op":"remove","spec":[],"valid":[],"index$":4},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"linked_file_ref01"}}],"index$":5}]}, 'LinkedFile')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const linked_file_ref01_ent = client.LinkedFile()
    let linked_file_ref01_data = setup.data.new.linked_file['linked_file_ref01']

    linked_file_ref01_data = (await linked_file_ref01_ent.create(linked_file_ref01_data)).data()
    assert(null != linked_file_ref01_data.id)


    // LIST
    const linked_file_ref01_match: any = {}

    const linked_file_ref01_list = (await linked_file_ref01_ent.list(linked_file_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(linked_file_ref01_list, { id: linked_file_ref01_data.id })))


    // UPDATE
    const linked_file_ref01_data_up0: any = {}
    linked_file_ref01_data_up0.id = linked_file_ref01_data.id

    const linked_file_ref01_markdef_up0 = { name: 'content_type', value: 'Mark01-linked_file_ref01_' + setup.now }
    ;(linked_file_ref01_data_up0 as any)[linked_file_ref01_markdef_up0.name] = linked_file_ref01_markdef_up0.value

    const linked_file_ref01_resdata_up0 = (await linked_file_ref01_ent.update(linked_file_ref01_data_up0)).data()
    assert(linked_file_ref01_resdata_up0.id === linked_file_ref01_data_up0.id)

    assert((linked_file_ref01_resdata_up0 as any)[linked_file_ref01_markdef_up0.name] === linked_file_ref01_markdef_up0.value)


    // LOAD
    const linked_file_ref01_match_dt0: any = {}
    linked_file_ref01_match_dt0.id = linked_file_ref01_data.id
    const linked_file_ref01_data_dt0 = (await linked_file_ref01_ent.load(linked_file_ref01_match_dt0)).data()
    assert(linked_file_ref01_data_dt0.id === linked_file_ref01_data.id)


    // REMOVE
    const linked_file_ref01_match_rm0: any = { id: linked_file_ref01_data.id }
    await linked_file_ref01_ent.remove(linked_file_ref01_match_rm0)
  

    // LIST
    const linked_file_ref01_match_rt0: any = {}

    const linked_file_ref01_list_rt0 = (await linked_file_ref01_ent.list(linked_file_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(linked_file_ref01_list_rt0, { id: linked_file_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/linked_file/LinkedFileTestData.json')

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
    ['linked_file01','linked_file02','linked_file03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_LINKED_FILE_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': '',
  })

  idmap = env['SHORTCUT_TEST_LINKED_FILE_ENTID']

  const live = 'TRUE' === env.SHORTCUT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SHORTCUT_TEST_LINKED_FILE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ShortcutSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.SHORTCUT_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
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
    transport,
    now: Date.now(),
  }

  return setup
}
  

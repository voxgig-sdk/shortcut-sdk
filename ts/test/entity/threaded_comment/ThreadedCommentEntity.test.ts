

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


describe('ThreadedCommentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.ThreadedComment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SHORTCUT_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'threaded_comment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"app_url","req":true,"short":"The Shortcut application url for the Comment.","type":"`$STRING`","index$":0},{"active":true,"format":"uuid","name":"author_id","op":{"create":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The unique ID of the Member that authored the Comment.","type":"`$STRING`","index$":1},{"active":true,"name":"comments","req":true,"short":"A nested array of threaded comments.","type":"`$ARRAY`","index$":2},{"active":true,"format":"date-time","name":"created_at","op":{"create":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The time/date the Comment was created.","type":"`$STRING`","index$":3},{"active":true,"name":"deleted","req":true,"short":"True/false boolean indicating whether the Comment is deleted.","type":"`$BOOLEAN`","index$":4},{"active":true,"name":"entity_type","req":true,"short":"A string description of this resource.","type":"`$STRING`","index$":5},{"active":true,"name":"external_id","op":{"create":{"req":false,"type":"`$STRING`"}},"req":true,"short":"This field can be set to another unique ID.","type":"`$STRING`","index$":6},{"active":true,"name":"group_mention_ids","req":true,"short":"An array of Group IDs that have been mentioned in this Comment.","type":"`$ARRAY`","index$":7},{"active":true,"format":"int64","name":"id","req":true,"short":"The unique ID of the Comment.","type":"`$INTEGER`","index$":8},{"active":true,"name":"member_mention_ids","req":true,"short":"An array of Member IDs that have been mentioned in this Comment.","type":"`$ARRAY`","index$":9},{"active":true,"name":"mention_ids","req":true,"short":"`Deprecated:` use `member_mention_ids`.","type":"`$ARRAY`","index$":10},{"active":true,"name":"text","req":true,"short":"The text of the Comment.","type":"`$STRING`","index$":11},{"active":true,"format":"date-time","name":"updated_at","op":{"create":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The time/date the Comment was updated.","type":"`$STRING`","index$":12}],"id":{"field":"id","name":"id"},"name":"threaded_comment","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"epic_id","orig":"epic_public_id","reqd":true,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"param","name":"id","orig":"comment_public_id","reqd":true,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"POST /api/v3/epics/{epic-public-id}/comments/{comment-public-id}","json":"{\"operationId\":\"createEpicCommentComment\",\"parameters\":[{\"description\":\"The ID of the associated Epic.\",\"in\":\"path\",\"name\":\"epic-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}},{\"description\":\"The ID of the parent Epic Comment.\",\"in\":\"path\",\"name\":\"comment-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"author_id\":{\"description\":\"The Member ID of the Comment's author. Defaults to the user identified by the API token.\",\"format\":\"uuid\",\"type\":\"string\"},\"created_at\":{\"description\":\"Defaults to the time/date the comment is created, but can be set to reflect another date.\",\"format\":\"date-time\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here.\",\"maxLength\":128,\"type\":\"string\"},\"text\":{\"description\":\"The comment text.\",\"maxLength\":100000,\"minLength\":1,\"type\":\"string\"},\"updated_at\":{\"description\":\"Defaults to the time/date the comment is last updated, but can be set to reflect another date.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"text\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Comments associated with Epic Discussions.\",\"properties\":{\"app_url\":{\"description\":\"The Shortcut application url for the Comment.\",\"type\":\"string\"},\"author_id\":{\"description\":\"The unique ID of the Member that authored the Comment.\",\"format\":\"uuid\",\"type\":\"string\"},\"comments\":{\"description\":\"A nested array of threaded comments.\",\"items\":{\"additionalProperties\":false,\"description\":\"Comments associated with Epic Discussions.\",\"properties\":\"[Circular *paths./api/v3/epics.post.responses.201.content.application/json.schema.properties.comments.items.properties]\",\"required\":[\"app_url\",\"entity_type\",\"deleted\",\"mention_ids\",\"author_id\",\"member_mention_ids\",\"comments\",\"updated_at\",\"group_mention_ids\",\"external_id\",\"id\",\"created_at\",\"text\"],\"type\":\"object\"},\"type\":\"array\"},\"created_at\":{\"description\":\"The time/date the Comment was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"deleted\":{\"description\":\"True/false boolean indicating whether the Comment is deleted.\",\"type\":\"boolean\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Comment has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"group_mention_ids\":{\"description\":\"An array of Group IDs that have been mentioned in this Comment.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique ID of the Comment.\",\"format\":\"int64\",\"type\":\"integer\"},\"member_mention_ids\":{\"description\":\"An array of Member IDs that have been mentioned in this Comment.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"mention_ids\":{\"description\":\"`Deprecated:` use `member_mention_ids`.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"text\":{\"description\":\"The text of the Comment.\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date the Comment was updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"app_url\",\"entity_type\",\"deleted\",\"mention_ids\",\"author_id\",\"member_mention_ids\",\"comments\",\"updated_at\",\"group_mention_ids\",\"external_id\",\"id\",\"created_at\",\"text\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/v3/epics/{epic-public-id}/comments/{comment-public-id}","rename":{"param":{"comment-public-id":"id","epic-public-id":"epic_id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"epics"},{"var":"epic_id"},{"lit":"comments"},{"var":"id"}],"select":{"exist":["epic_id","id"]},"transform":{"req":{"author_id":"`reqdata.author_id`","created_at":"`reqdata.created_at`","external_id":"`reqdata.external_id`","text":"`reqdata.text`","updated_at":"`reqdata.updated_at`"},"res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"epic_id","orig":"epic_public_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"POST /api/v3/epics/{epic-public-id}/comments","json":"{\"operationId\":\"createEpicComment\",\"parameters\":[{\"description\":\"The ID of the associated Epic.\",\"in\":\"path\",\"name\":\"epic-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"author_id\":{\"description\":\"The Member ID of the Comment's author. Defaults to the user identified by the API token.\",\"format\":\"uuid\",\"type\":\"string\"},\"created_at\":{\"description\":\"Defaults to the time/date the comment is created, but can be set to reflect another date.\",\"format\":\"date-time\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the comment has been imported from another tool, the ID in the other tool can be indicated here.\",\"maxLength\":128,\"type\":\"string\"},\"text\":{\"description\":\"The comment text.\",\"maxLength\":100000,\"minLength\":1,\"type\":\"string\"},\"updated_at\":{\"description\":\"Defaults to the time/date the comment is last updated, but can be set to reflect another date.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"text\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Comments associated with Epic Discussions.\",\"properties\":{\"app_url\":{\"description\":\"The Shortcut application url for the Comment.\",\"type\":\"string\"},\"author_id\":{\"description\":\"The unique ID of the Member that authored the Comment.\",\"format\":\"uuid\",\"type\":\"string\"},\"comments\":{\"description\":\"A nested array of threaded comments.\",\"items\":{\"additionalProperties\":false,\"description\":\"Comments associated with Epic Discussions.\",\"properties\":\"[Circular *paths./api/v3/epics.post.responses.201.content.application/json.schema.properties.comments.items.properties]\",\"required\":[\"app_url\",\"entity_type\",\"deleted\",\"mention_ids\",\"author_id\",\"member_mention_ids\",\"comments\",\"updated_at\",\"group_mention_ids\",\"external_id\",\"id\",\"created_at\",\"text\"],\"type\":\"object\"},\"type\":\"array\"},\"created_at\":{\"description\":\"The time/date the Comment was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"deleted\":{\"description\":\"True/false boolean indicating whether the Comment is deleted.\",\"type\":\"boolean\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Comment has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"group_mention_ids\":{\"description\":\"An array of Group IDs that have been mentioned in this Comment.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique ID of the Comment.\",\"format\":\"int64\",\"type\":\"integer\"},\"member_mention_ids\":{\"description\":\"An array of Member IDs that have been mentioned in this Comment.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"mention_ids\":{\"description\":\"`Deprecated:` use `member_mention_ids`.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"text\":{\"description\":\"The text of the Comment.\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date the Comment was updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"app_url\",\"entity_type\",\"deleted\",\"mention_ids\",\"author_id\",\"member_mention_ids\",\"comments\",\"updated_at\",\"group_mention_ids\",\"external_id\",\"id\",\"created_at\",\"text\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/v3/epics/{epic-public-id}/comments","rename":{"param":{"epic-public-id":"epic_id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"epics"},{"var":"epic_id"},{"lit":"comments"}],"select":{"exist":["epic_id"]},"transform":{"req":{"author_id":"`reqdata.author_id`","created_at":"`reqdata.created_at`","external_id":"`reqdata.external_id`","text":"`reqdata.text`","updated_at":"`reqdata.updated_at`"},"res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"epic_id","orig":"epic_public_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /api/v3/epics/{epic-public-id}/comments","json":"{\"operationId\":\"listEpicComments\",\"parameters\":[{\"description\":\"The unique ID of the Epic.\",\"in\":\"path\",\"name\":\"epic-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"additionalProperties\":false,\"description\":\"Comments associated with Epic Discussions.\",\"properties\":{\"app_url\":{\"description\":\"The Shortcut application url for the Comment.\",\"type\":\"string\"},\"author_id\":{\"description\":\"The unique ID of the Member that authored the Comment.\",\"format\":\"uuid\",\"type\":\"string\"},\"comments\":{\"description\":\"A nested array of threaded comments.\",\"items\":{\"additionalProperties\":false,\"description\":\"Comments associated with Epic Discussions.\",\"properties\":\"[Circular *paths./api/v3/epics.post.responses.201.content.application/json.schema.properties.comments.items.properties]\",\"required\":[\"app_url\",\"entity_type\",\"deleted\",\"mention_ids\",\"author_id\",\"member_mention_ids\",\"comments\",\"updated_at\",\"group_mention_ids\",\"external_id\",\"id\",\"created_at\",\"text\"],\"type\":\"object\"},\"type\":\"array\"},\"created_at\":{\"description\":\"The time/date the Comment was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"deleted\":{\"description\":\"True/false boolean indicating whether the Comment is deleted.\",\"type\":\"boolean\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Comment has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"group_mention_ids\":{\"description\":\"An array of Group IDs that have been mentioned in this Comment.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique ID of the Comment.\",\"format\":\"int64\",\"type\":\"integer\"},\"member_mention_ids\":{\"description\":\"An array of Member IDs that have been mentioned in this Comment.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"mention_ids\":{\"description\":\"`Deprecated:` use `member_mention_ids`.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"text\":{\"description\":\"The text of the Comment.\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date the Comment was updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"app_url\",\"entity_type\",\"deleted\",\"mention_ids\",\"author_id\",\"member_mention_ids\",\"comments\",\"updated_at\",\"group_mention_ids\",\"external_id\",\"id\",\"created_at\",\"text\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v3/epics/{epic-public-id}/comments","rename":{"param":{"epic-public-id":"epic_id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"epics"},{"var":"epic_id"},{"lit":"comments"}],"select":{"exist":["epic_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"epic_id","orig":"epic_public_id","reqd":true,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"param","name":"id","orig":"comment_public_id","reqd":true,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/v3/epics/{epic-public-id}/comments/{comment-public-id}","json":"{\"operationId\":\"getEpicComment\",\"parameters\":[{\"description\":\"The ID of the associated Epic.\",\"in\":\"path\",\"name\":\"epic-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}},{\"description\":\"The ID of the Comment.\",\"in\":\"path\",\"name\":\"comment-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Comments associated with Epic Discussions.\",\"properties\":{\"app_url\":{\"description\":\"The Shortcut application url for the Comment.\",\"type\":\"string\"},\"author_id\":{\"description\":\"The unique ID of the Member that authored the Comment.\",\"format\":\"uuid\",\"type\":\"string\"},\"comments\":{\"description\":\"A nested array of threaded comments.\",\"items\":{\"additionalProperties\":false,\"description\":\"Comments associated with Epic Discussions.\",\"properties\":\"[Circular *paths./api/v3/epics.post.responses.201.content.application/json.schema.properties.comments.items.properties]\",\"required\":[\"app_url\",\"entity_type\",\"deleted\",\"mention_ids\",\"author_id\",\"member_mention_ids\",\"comments\",\"updated_at\",\"group_mention_ids\",\"external_id\",\"id\",\"created_at\",\"text\"],\"type\":\"object\"},\"type\":\"array\"},\"created_at\":{\"description\":\"The time/date the Comment was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"deleted\":{\"description\":\"True/false boolean indicating whether the Comment is deleted.\",\"type\":\"boolean\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Comment has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"group_mention_ids\":{\"description\":\"An array of Group IDs that have been mentioned in this Comment.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique ID of the Comment.\",\"format\":\"int64\",\"type\":\"integer\"},\"member_mention_ids\":{\"description\":\"An array of Member IDs that have been mentioned in this Comment.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"mention_ids\":{\"description\":\"`Deprecated:` use `member_mention_ids`.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"text\":{\"description\":\"The text of the Comment.\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date the Comment was updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"app_url\",\"entity_type\",\"deleted\",\"mention_ids\",\"author_id\",\"member_mention_ids\",\"comments\",\"updated_at\",\"group_mention_ids\",\"external_id\",\"id\",\"created_at\",\"text\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v3/epics/{epic-public-id}/comments/{comment-public-id}","rename":{"param":{"comment-public-id":"id","epic-public-id":"epic_id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"epics"},{"var":"epic_id"},{"lit":"comments"},{"var":"id"}],"select":{"exist":["epic_id","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"epic_id","orig":"epic_public_id","reqd":true,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"param","name":"id","orig":"comment_public_id","reqd":true,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"DELETE /api/v3/epics/{epic-public-id}/comments/{comment-public-id}","json":"{\"operationId\":\"deleteEpicComment\",\"parameters\":[{\"description\":\"The ID of the associated Epic.\",\"in\":\"path\",\"name\":\"epic-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}},{\"description\":\"The ID of the Comment.\",\"in\":\"path\",\"name\":\"comment-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"No Content\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/api/v3/epics/{epic-public-id}/comments/{comment-public-id}","rename":{"param":{"comment-public-id":"id","epic-public-id":"epic_id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"epics"},{"var":"epic_id"},{"lit":"comments"},{"var":"id"}],"select":{"exist":["epic_id","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"epic_id","orig":"epic_public_id","reqd":true,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"param","name":"id","orig":"comment_public_id","reqd":true,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"PUT /api/v3/epics/{epic-public-id}/comments/{comment-public-id}","json":"{\"operationId\":\"updateEpicComment\",\"parameters\":[{\"description\":\"The ID of the associated Epic.\",\"in\":\"path\",\"name\":\"epic-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}},{\"description\":\"The ID of the Comment.\",\"in\":\"path\",\"name\":\"comment-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"text\":{\"description\":\"The updated comment text.\",\"type\":\"string\"}},\"required\":[\"text\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Comments associated with Epic Discussions.\",\"properties\":{\"app_url\":{\"description\":\"The Shortcut application url for the Comment.\",\"type\":\"string\"},\"author_id\":{\"description\":\"The unique ID of the Member that authored the Comment.\",\"format\":\"uuid\",\"type\":\"string\"},\"comments\":{\"description\":\"A nested array of threaded comments.\",\"items\":{\"additionalProperties\":false,\"description\":\"Comments associated with Epic Discussions.\",\"properties\":\"[Circular *paths./api/v3/epics.post.responses.201.content.application/json.schema.properties.comments.items.properties]\",\"required\":[\"app_url\",\"entity_type\",\"deleted\",\"mention_ids\",\"author_id\",\"member_mention_ids\",\"comments\",\"updated_at\",\"group_mention_ids\",\"external_id\",\"id\",\"created_at\",\"text\"],\"type\":\"object\"},\"type\":\"array\"},\"created_at\":{\"description\":\"The time/date the Comment was created.\",\"format\":\"date-time\",\"type\":\"string\"},\"deleted\":{\"description\":\"True/false boolean indicating whether the Comment is deleted.\",\"type\":\"boolean\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Comment has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"group_mention_ids\":{\"description\":\"An array of Group IDs that have been mentioned in this Comment.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique ID of the Comment.\",\"format\":\"int64\",\"type\":\"integer\"},\"member_mention_ids\":{\"description\":\"An array of Member IDs that have been mentioned in this Comment.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"mention_ids\":{\"description\":\"`Deprecated:` use `member_mention_ids`.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"text\":{\"description\":\"The text of the Comment.\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date the Comment was updated.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"app_url\",\"entity_type\",\"deleted\",\"mention_ids\",\"author_id\",\"member_mention_ids\",\"comments\",\"updated_at\",\"group_mention_ids\",\"external_id\",\"id\",\"created_at\",\"text\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/api/v3/epics/{epic-public-id}/comments/{comment-public-id}","rename":{"param":{"comment-public-id":"id","epic-public-id":"epic_id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"epics"},{"var":"epic_id"},{"lit":"comments"},{"var":"id"}],"select":{"exist":["epic_id","id"]},"transform":{"req":{"text":"`reqdata.text`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["epic"]]},"key$":"threaded_comment","name__orig":"threaded_comment","Name":"ThreadedComment","name_":"threaded_comment","name-":"threaded-comment","NAME":"THREADED_COMMENT","index$":32}, {"active":true,"entity":"threaded_comment","key$":"BasicThreadedCommentFlow","kind":"basic","name":"BasicThreadedCommentFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"threaded_comment_ref01"},"match":{"epic_id":"epic01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"epic_id":"epic01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"threaded_comment_ref01"}}],"index$":1},{"active":true,"data":{"epic_id":"epic01"},"input":{"ref":"threaded_comment_ref01","srcdatavar":"threaded_comment_ref01_data","suffix":"_up0","textfield":"app_url"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-threaded_comment_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"threaded_comment_ref01","srcdatavar":"threaded_comment_ref01_data","suffix":"_dt0"},"match":{"epic_id":"epic01","id":"threaded_comment01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-threaded_comment_ref01"}}],"index$":3},{"active":true,"data":{},"input":{"ref":"threaded_comment_ref01","suffix":"_rm0"},"match":{"epic_id":"epic01","id":"threaded_comment01"},"op":"remove","spec":[],"valid":[],"index$":4},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{"epic_id":"epic01"},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"threaded_comment_ref01"}}],"index$":5}]}, 'ThreadedComment')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const threaded_comment_ref01_ent = client.ThreadedComment()
    let threaded_comment_ref01_data = setup.data.new.threaded_comment['threaded_comment_ref01']
    threaded_comment_ref01_data['epic_id'] = setup.idmap['epic01']

    threaded_comment_ref01_data = (await threaded_comment_ref01_ent.create(threaded_comment_ref01_data)).data()
    assert(null != threaded_comment_ref01_data.id)


    // LIST
    const threaded_comment_ref01_match: any = {}
    threaded_comment_ref01_match['epic_id'] = setup.idmap['epic01']

    const threaded_comment_ref01_list = (await threaded_comment_ref01_ent.list(threaded_comment_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(threaded_comment_ref01_list, { id: threaded_comment_ref01_data.id })))


    // UPDATE
    const threaded_comment_ref01_data_up0: any = {}
    threaded_comment_ref01_data_up0.id = threaded_comment_ref01_data.id
    threaded_comment_ref01_data_up0 ['epic_id'] = setup.idmap['epic_id']

    const threaded_comment_ref01_markdef_up0 = { name: 'app_url', value: 'Mark01-threaded_comment_ref01_' + setup.now }
    ;(threaded_comment_ref01_data_up0 as any)[threaded_comment_ref01_markdef_up0.name] = threaded_comment_ref01_markdef_up0.value

    const threaded_comment_ref01_resdata_up0 = (await threaded_comment_ref01_ent.update(threaded_comment_ref01_data_up0)).data()
    assert(threaded_comment_ref01_resdata_up0.id === threaded_comment_ref01_data_up0.id)

    assert((threaded_comment_ref01_resdata_up0 as any)[threaded_comment_ref01_markdef_up0.name] === threaded_comment_ref01_markdef_up0.value)


    // LOAD
    const threaded_comment_ref01_match_dt0: any = {}
    threaded_comment_ref01_match_dt0.id = threaded_comment_ref01_data.id
    const threaded_comment_ref01_data_dt0 = (await threaded_comment_ref01_ent.load(threaded_comment_ref01_match_dt0)).data()
    assert(threaded_comment_ref01_data_dt0.id === threaded_comment_ref01_data.id)


    // REMOVE
    const threaded_comment_ref01_match_rm0: any = { id: threaded_comment_ref01_data.id }
    await threaded_comment_ref01_ent.remove(threaded_comment_ref01_match_rm0)
  

    // LIST
    const threaded_comment_ref01_match_rt0: any = {}
    threaded_comment_ref01_match_rt0['epic_id'] = setup.idmap['epic01']

    const threaded_comment_ref01_list_rt0 = (await threaded_comment_ref01_ent.list(threaded_comment_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(threaded_comment_ref01_list_rt0, { id: threaded_comment_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/threaded_comment/ThreadedCommentTestData.json')

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
    ['threaded_comment01','threaded_comment02','threaded_comment03','epic01','epic02','epic03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_THREADED_COMMENT_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': '',
  })

  idmap = env['SHORTCUT_TEST_THREADED_COMMENT_ENTID']

  const live = 'TRUE' === env.SHORTCUT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SHORTCUT_TEST_THREADED_COMMENT_ENTID']
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
  

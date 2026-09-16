

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


describe('StoryReactionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.StoryReaction()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SHORTCUT_TEST_LIVE
    for (const op of ['create', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'story_reaction.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"emoji","req":true,"short":"The emoji short-code to add / remove.","type":"`$STRING`","index$":0}],"name":"story_reaction","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"comment_id","orig":"comment_public_id","reqd":true,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"param","name":"story_id","orig":"story_public_id","reqd":true,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"POST /api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions","json":"{\"operationId\":\"createStoryReaction\",\"parameters\":[{\"description\":\"The ID of the Story that the Comment is in.\",\"in\":\"path\",\"name\":\"story-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}},{\"description\":\"The ID of the Comment.\",\"in\":\"path\",\"name\":\"comment-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"emoji\":{\"description\":\"The emoji short-code to add / remove. E.g. `:thumbsup::skin-tone-4:`.\",\"type\":\"string\"}},\"required\":[\"emoji\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"additionalProperties\":false,\"description\":\"Emoji reaction on a comment.\",\"properties\":{\"emoji\":{\"description\":\"Emoji text of the reaction.\",\"type\":\"string\"},\"permission_ids\":{\"description\":\"Permissions who have reacted with this.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"emoji\",\"permission_ids\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions","rename":{"param":{"comment-public-id":"comment_id","story-public-id":"story_id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"stories"},{"var":"story_id"},{"lit":"comments"},{"var":"comment_id"},{"lit":"reactions"}],"select":{"exist":["comment_id","story_id"]},"transform":{"req":{"emoji":"`reqdata.emoji`"},"res":"`body`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"comment_id","orig":"comment_public_id","reqd":true,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"param","name":"story_id","orig":"story_public_id","reqd":true,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"DELETE /api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions","json":"{\"operationId\":\"deleteStoryReaction\",\"parameters\":[{\"description\":\"The ID of the Story that the Comment is in.\",\"in\":\"path\",\"name\":\"story-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}},{\"description\":\"The ID of the Comment.\",\"in\":\"path\",\"name\":\"comment-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"emoji\":{\"description\":\"The emoji short-code to add / remove. E.g. `:thumbsup::skin-tone-4:`.\",\"type\":\"string\"}},\"required\":[\"emoji\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"204\":{\"description\":\"No Content\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions","rename":{"param":{"comment-public-id":"comment_id","story-public-id":"story_id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"stories"},{"var":"story_id"},{"lit":"comments"},{"var":"comment_id"},{"lit":"reactions"}],"select":{"exist":["comment_id","story_id"]},"transform":{"req":{"emoji":"`reqdata.emoji`"},"res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["story","comment"]]},"key$":"story_reaction","name__orig":"story_reaction","Name":"StoryReaction","name_":"story_reaction","name-":"story-reaction","NAME":"STORY_REACTION","index$":29}, {"active":true,"entity":"story_reaction","key$":"BasicStoryReactionFlow","kind":"basic","name":"BasicStoryReactionFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"story_reaction_ref01"},"match":{"comment_id":"comment01","story_id":"story01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"story_reaction_ref01","suffix":"_rm0"},"match":{"id":"story_reaction01","story_id":"story01"},"op":"remove","spec":[],"valid":[],"index$":1}]}, 'StoryReaction')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const story_reaction_ref01_ent = client.StoryReaction()
    let story_reaction_ref01_data = setup.data.new.story_reaction['story_reaction_ref01']
    story_reaction_ref01_data['comment_id'] = setup.idmap['comment01']
    story_reaction_ref01_data['story_id'] = setup.idmap['story01']

    story_reaction_ref01_data = (await story_reaction_ref01_ent.create(story_reaction_ref01_data)).data()
    assert(null != story_reaction_ref01_data)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/story_reaction/StoryReactionTestData.json')

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
    ['story_reaction01','story_reaction02','story_reaction03','story01','story02','story03','comment01','comment02','comment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_STORY_REACTION_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': '',
  })

  idmap = env['SHORTCUT_TEST_STORY_REACTION_ENTID']

  const live = 'TRUE' === env.SHORTCUT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SHORTCUT_TEST_STORY_REACTION_ENTID']
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
  

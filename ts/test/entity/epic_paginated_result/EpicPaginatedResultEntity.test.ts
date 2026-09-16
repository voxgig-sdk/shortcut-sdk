

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


describe('EpicPaginatedResultEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.EpicPaginatedResult()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SHORTCUT_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'epic_paginated_result.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"app_url","req":true,"short":"The Shortcut application url for the Epic.","type":"`$STRING`","index$":0},{"active":true,"name":"archived","req":true,"short":"True/false boolean that indicates whether the Epic is archived or not.","type":"`$BOOLEAN`","index$":1},{"active":true,"name":"associated_groups","req":true,"short":"An array containing Group IDs and Group-owned story counts for the Epic's associated groups.","type":"`$ARRAY`","index$":2},{"active":true,"name":"completed","req":true,"short":"A true/false boolean indicating if the Epic has been completed.","type":"`$BOOLEAN`","index$":3},{"active":true,"format":"date-time","name":"completed_at","req":true,"short":"The time/date the Epic was completed.","type":"`$STRING`","index$":4},{"active":true,"format":"date-time","name":"completed_at_override","req":true,"short":"A manual override for the time/date the Epic was completed.","type":"`$STRING`","index$":5},{"active":true,"format":"date-time","name":"created_at","req":true,"short":"The time/date the Epic was created.","type":"`$STRING`","index$":6},{"active":true,"format":"date-time","name":"deadline","req":true,"short":"The Epic's deadline.","type":"`$STRING`","index$":7},{"active":true,"name":"description","req":false,"short":"The Epic's description.","type":"`$STRING`","index$":8},{"active":true,"name":"entity_type","req":true,"short":"A string description of this resource.","type":"`$STRING`","index$":9},{"active":true,"format":"int64","name":"epic_state_id","req":true,"short":"The ID of the Epic State.","type":"`$INTEGER`","index$":10},{"active":true,"name":"external_id","req":true,"short":"This field can be set to another unique ID.","type":"`$STRING`","index$":11},{"active":true,"name":"follower_ids","req":true,"short":"An array of UUIDs for any Members you want to add as Followers on this Epic.","type":"`$ARRAY`","index$":12},{"active":true,"name":"global_id","req":true,"type":"`$STRING`","index$":13},{"active":true,"format":"uuid","name":"group_id","req":true,"short":"`Deprecated` The ID of the group to associate with the epic.","type":"`$STRING`","index$":14},{"active":true,"name":"group_ids","req":true,"short":"An array of UUIDS for Groups to which this Epic is related.","type":"`$ARRAY`","index$":15},{"active":true,"name":"group_mention_ids","req":true,"short":"An array of Group IDs that have been mentioned in the Epic description.","type":"`$ARRAY`","index$":16},{"active":true,"format":"int64","name":"id","req":true,"short":"The unique ID of the Epic.","type":"`$INTEGER`","index$":17},{"active":true,"name":"label_ids","req":true,"short":"An array of Label ids attached to the Epic.","type":"`$ARRAY`","index$":18},{"active":true,"name":"labels","req":true,"short":"An array of Labels attached to the Epic.","type":"`$ARRAY`","index$":19},{"active":true,"name":"member_mention_ids","req":true,"short":"An array of Member IDs that have been mentioned in the Epic description.","type":"`$ARRAY`","index$":20},{"active":true,"name":"mention_ids","req":true,"short":"`Deprecated:` use `member_mention_ids`.","type":"`$ARRAY`","index$":21},{"active":true,"format":"int64","name":"milestone_id","req":true,"short":"`Deprecated` The ID of the Objective this Epic is related to.","type":"`$INTEGER`","index$":22},{"active":true,"name":"name","req":true,"short":"The name of the Epic.","type":"`$STRING`","index$":23},{"active":true,"name":"objective_ids","req":true,"short":"An array of IDs for Objectives to which this epic is related.","type":"`$ARRAY`","index$":24},{"active":true,"name":"owner_ids","req":true,"short":"An array of UUIDs for any members you want to add as Owners on this new Epic.","type":"`$ARRAY`","index$":25},{"active":true,"format":"date-time","name":"planned_start_date","req":true,"short":"The Epic's planned start date.","type":"`$STRING`","index$":26},{"active":true,"format":"int64","name":"position","req":true,"short":"The Epic's relative position in the Epic workflow state.","type":"`$INTEGER`","index$":27},{"active":true,"format":"uuid","name":"productboard_id","req":true,"short":"The ID of the associated productboard feature.","type":"`$STRING`","index$":28},{"active":true,"name":"productboard_name","req":true,"short":"The name of the associated productboard feature.","type":"`$STRING`","index$":29},{"active":true,"format":"uuid","name":"productboard_plugin_id","req":true,"short":"The ID of the associated productboard integration.","type":"`$STRING`","index$":30},{"active":true,"name":"productboard_url","req":true,"short":"The URL of the associated productboard feature.","type":"`$STRING`","index$":31},{"active":true,"name":"project_ids","req":true,"short":"The IDs of Projects related to this Epic.","type":"`$ARRAY`","index$":32},{"active":true,"format":"uuid","name":"requested_by_id","req":true,"short":"The ID of the Member that requested the epic.","type":"`$STRING`","index$":33},{"active":true,"name":"started","req":true,"short":"A true/false boolean indicating if the Epic has been started.","type":"`$BOOLEAN`","index$":34},{"active":true,"format":"date-time","name":"started_at","req":true,"short":"The time/date the Epic was started.","type":"`$STRING`","index$":35},{"active":true,"format":"date-time","name":"started_at_override","req":true,"short":"A manual override for the time/date the Epic was started.","type":"`$STRING`","index$":36},{"active":true,"name":"state","req":true,"short":"`Deprecated` The workflow state that the Epic is in.","type":"`$STRING`","index$":37},{"active":true,"name":"stats","req":true,"short":"A group of calculated values for this Epic.","type":"`$OBJECT`","index$":38},{"active":true,"format":"int64","name":"stories_without_projects","req":true,"short":"The number of stories in this epic which are not associated with a project.","type":"`$INTEGER`","index$":39},{"active":true,"format":"date-time","name":"updated_at","req":true,"short":"The time/date the Epic was updated.","type":"`$STRING`","index$":40}],"id":{"field":"id","name":"id"},"name":"epic_paginated_result","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"includes_description","orig":"includes_description","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /api/v3/epics/paginated","json":"{\"operationId\":\"listEpicsPaginated\",\"parameters\":[{\"description\":\"A true/false boolean indicating whether to return Epics with their descriptions.\",\"in\":\"query\",\"name\":\"includes_description\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"The page number to return, starting with 1. Defaults to 1.\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}},{\"description\":\"The number of Epics to return per page. Minimum 1, maximum 250, default 10.\",\"in\":\"query\",\"name\":\"page_size\",\"required\":false,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Results schema for paginated Epic listing.\",\"properties\":{\"data\":{\"description\":\"Array of Epic objects on the current page\",\"items\":{\"additionalProperties\":false,\"description\":\"EpicSlim represents the same resource as an Epic but is more light-weight, including all Epic fields except the comments array. The description string can be optionally included. Use the [Get Epic](#Get-Epic) endpoint to fetch the unabridged payload for an Epic.\",\"properties\":{\"app_url\":{\"description\":\"The Shortcut application url for the Epic.\",\"type\":\"string\"},\"archived\":{\"description\":\"True/false boolean that indicates whether the Epic is archived or not.\",\"type\":\"boolean\"},\"associated_groups\":{\"description\":\"An array containing Group IDs and Group-owned story counts for the Epic's associated groups.\",\"items\":{\"additionalProperties\":false,\"properties\":{\"associated_stories_count\":{\"description\":\"The number of stories this Group owns in the Epic.\",\"format\":\"int64\",\"type\":\"integer\"},\"group_id\":{\"description\":\"The Group ID of the associated group.\",\"format\":\"uuid\",\"type\":\"string\"}},\"required\":[\"group_id\"],\"type\":\"object\"},\"type\":\"array\"},\"completed\":{\"description\":\"A true/false boolean indicating if the Epic has been completed.\",\"type\":\"boolean\"},\"completed_at\":{\"description\":\"The time/date the Epic was completed.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"completed_at_override\":{\"description\":\"A manual override for the time/date the Epic was completed.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date the Epic was created.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"deadline\":{\"description\":\"The Epic's deadline.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"description\":{\"description\":\"The Epic's description.\",\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"epic_state_id\":{\"description\":\"The ID of the Epic State.\",\"format\":\"int64\",\"type\":\"integer\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Epic has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"follower_ids\":{\"description\":\"An array of UUIDs for any Members you want to add as Followers on this Epic.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"global_id\":{\"type\":\"string\"},\"group_id\":{\"description\":\"`Deprecated` The ID of the group to associate with the epic. Use `group_ids`.\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"group_ids\":{\"description\":\"An array of UUIDS for Groups to which this Epic is related.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"group_mention_ids\":{\"description\":\"An array of Group IDs that have been mentioned in the Epic description.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"The unique ID of the Epic.\",\"format\":\"int64\",\"type\":\"integer\"},\"label_ids\":{\"description\":\"An array of Label ids attached to the Epic.\",\"items\":{\"format\":\"int64\",\"type\":\"integer\"},\"type\":\"array\"},\"labels\":{\"description\":\"An array of Labels attached to the Epic.\",\"items\":{\"additionalProperties\":false,\"description\":\"A Label can be used to associate and filter Stories and Epics, and also create new Workspaces. A slim Label does not include aggregate stats. Fetch the Label using the labels endpoint to retrieve them.\",\"properties\":{\"app_url\":{\"description\":\"The Shortcut application url for the Label.\",\"type\":\"string\"},\"archived\":{\"description\":\"A true/false boolean indicating if the Label has been archived.\",\"type\":\"boolean\"},\"color\":{\"description\":\"The hex color to be displayed with the Label (for example, \\\"#ff0000\\\").\",\"format\":\"css-color\",\"minLength\":1,\"nullable\":true,\"pattern\":\"^#[a-fA-F0-9]{6}$\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date that the Label was created.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"description\":{\"description\":\"The description of the Label.\",\"nullable\":true,\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"global_id\":{\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the Label.\",\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the Label.\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The time/date that the Label was updated.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"app_url\",\"description\",\"archived\",\"entity_type\",\"color\",\"name\",\"global_id\",\"updated_at\",\"external_id\",\"id\",\"created_at\"],\"type\":\"object\"},\"type\":\"array\"},\"member_mention_ids\":{\"description\":\"An array of Member IDs that have been mentioned in the Epic description.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"mention_ids\":{\"description\":\"`Deprecated:` use `member_mention_ids`.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"milestone_id\":{\"description\":\"`Deprecated` The ID of the Objective this Epic is related to. Use `objective_ids`.\",\"format\":\"int64\",\"nullable\":true,\"type\":\"integer\"},\"name\":{\"description\":\"The name of the Epic.\",\"type\":\"string\"},\"objective_ids\":{\"description\":\"An array of IDs for Objectives to which this epic is related.\",\"items\":{\"format\":\"int64\",\"type\":\"integer\"},\"type\":\"array\"},\"owner_ids\":{\"description\":\"An array of UUIDs for any members you want to add as Owners on this new Epic.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"planned_start_date\":{\"description\":\"The Epic's planned start date.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"position\":{\"description\":\"The Epic's relative position in the Epic workflow state.\",\"format\":\"int64\",\"type\":\"integer\"},\"productboard_id\":{\"description\":\"The ID of the associated productboard feature.\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"productboard_name\":{\"description\":\"The name of the associated productboard feature.\",\"nullable\":true,\"type\":\"string\"},\"productboard_plugin_id\":{\"description\":\"The ID of the associated productboard integration.\",\"format\":\"uuid\",\"nullable\":true,\"type\":\"string\"},\"productboard_url\":{\"description\":\"The URL of the associated productboard feature.\",\"nullable\":true,\"type\":\"string\"},\"project_ids\":{\"description\":\"The IDs of Projects related to this Epic.\",\"items\":{\"format\":\"int64\",\"type\":\"integer\"},\"type\":\"array\"},\"requested_by_id\":{\"description\":\"The ID of the Member that requested the epic.\",\"format\":\"uuid\",\"type\":\"string\"},\"started\":{\"description\":\"A true/false boolean indicating if the Epic has been started.\",\"type\":\"boolean\"},\"started_at\":{\"description\":\"The time/date the Epic was started.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"started_at_override\":{\"description\":\"A manual override for the time/date the Epic was started.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"state\":{\"description\":\"`Deprecated` The workflow state that the Epic is in.\",\"type\":\"string\"},\"stats\":{\"additionalProperties\":false,\"description\":\"A group of calculated values for this Epic.\",\"properties\":{\"last_story_update\":{\"description\":\"The date of the last update of a Story in this Epic.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"num_points\":{\"description\":\"The total number of points in this Epic.\",\"format\":\"int64\",\"type\":\"integer\"},\"num_points_backlog\":{\"description\":\"The total number of backlog points in this Epic.\",\"format\":\"int64\",\"type\":\"integer\"},\"num_points_done\":{\"description\":\"The total number of completed points in this Epic.\",\"format\":\"int64\",\"type\":\"integer\"},\"num_points_started\":{\"description\":\"The total number of started points in this Epic.\",\"format\":\"int64\",\"type\":\"integer\"},\"num_points_unstarted\":{\"description\":\"The total number of unstarted points in this Epic.\",\"format\":\"int64\",\"type\":\"integer\"},\"num_related_documents\":{\"description\":\"The total number of documents associated with this Epic.\",\"format\":\"int64\",\"type\":\"integer\"},\"num_stories_backlog\":{\"description\":\"The total number of backlog Stories in this Epic.\",\"format\":\"int64\",\"type\":\"integer\"},\"num_stories_done\":{\"description\":\"The total number of done Stories in this Epic.\",\"format\":\"int64\",\"type\":\"integer\"},\"num_stories_started\":{\"description\":\"The total number of started Stories in this Epic.\",\"format\":\"int64\",\"type\":\"integer\"},\"num_stories_total\":{\"description\":\"The total number of Stories in this Epic.\",\"format\":\"int64\",\"type\":\"integer\"},\"num_stories_unestimated\":{\"description\":\"The total number of Stories with no point estimate.\",\"format\":\"int64\",\"type\":\"integer\"},\"num_stories_unstarted\":{\"description\":\"The total number of unstarted Stories in this Epic.\",\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"num_points_done\",\"num_related_documents\",\"num_stories_unstarted\",\"num_stories_total\",\"last_story_update\",\"num_points_started\",\"num_points_unstarted\",\"num_stories_started\",\"num_stories_unestimated\",\"num_stories_backlog\",\"num_points_backlog\",\"num_points\",\"num_stories_done\"],\"type\":\"object\"},\"stories_without_projects\":{\"description\":\"The number of stories in this epic which are not associated with a project.\",\"format\":\"int64\",\"type\":\"integer\"},\"updated_at\":{\"description\":\"The time/date the Epic was updated.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"}},\"required\":[\"app_url\",\"archived\",\"started\",\"entity_type\",\"labels\",\"mention_ids\",\"member_mention_ids\",\"associated_groups\",\"project_ids\",\"stories_without_projects\",\"completed_at_override\",\"productboard_plugin_id\",\"started_at\",\"completed_at\",\"objective_ids\",\"name\",\"global_id\",\"completed\",\"productboard_url\",\"planned_start_date\",\"state\",\"milestone_id\",\"requested_by_id\",\"epic_state_id\",\"label_ids\",\"started_at_override\",\"group_id\",\"updated_at\",\"group_mention_ids\",\"productboard_id\",\"follower_ids\",\"group_ids\",\"owner_ids\",\"external_id\",\"id\",\"position\",\"productboard_name\",\"deadline\",\"stats\",\"created_at\"],\"type\":\"object\"},\"type\":\"array\"},\"next\":{\"description\":\"The next page number if there are more results, or null for the last page\",\"format\":\"int64\",\"nullable\":true,\"type\":\"integer\"},\"total\":{\"description\":\"The total number of Epics matching the query over all pages\",\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"data\",\"next\",\"total\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v3/epics/paginated","segments":[{"lit":"api"},{"lit":"v3"},{"lit":"epics"},{"lit":"paginated"}],"select":{"exist":["includes_description","page","page_size"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"epic_paginated_result","name__orig":"epic_paginated_result","Name":"EpicPaginatedResult","name_":"epic_paginated_result","name-":"epic-paginated-result","NAME":"EPIC_PAGINATED_RESULT","index$":9}, {"active":true,"entity":"epic_paginated_result","key$":"BasicEpicPaginatedResultFlow","kind":"basic","name":"BasicEpicPaginatedResultFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"epic_paginated_result_ref01"}}],"index$":0}]}, 'EpicPaginatedResult')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let epic_paginated_result_ref01_data = Object.values(setup.data.existing.epic_paginated_result)[0] as any

    // LIST
    const epic_paginated_result_ref01_ent = client.EpicPaginatedResult()
    const epic_paginated_result_ref01_match: any = {}

    const epic_paginated_result_ref01_list = (await epic_paginated_result_ref01_ent.list(epic_paginated_result_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/epic_paginated_result/EpicPaginatedResultTestData.json')

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
    ['epic_paginated_result01','epic_paginated_result02','epic_paginated_result03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_EPIC_PAGINATED_RESULT_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': '',
  })

  idmap = env['SHORTCUT_TEST_EPIC_PAGINATED_RESULT_ENTID']

  const live = 'TRUE' === env.SHORTCUT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SHORTCUT_TEST_EPIC_PAGINATED_RESULT_ENTID']
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
  


const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { ShortcutSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('ProjectEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHORTCUT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHORTCUT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShortcutSDK.test()
    const ent = testsdk.Project()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"abbreviation","op":{"create":{"req":false,"type":"`$STRING`"},"update":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The Project abbreviation used in Story summaries.","type":"`$STRING`","index$":0},{"active":true,"name":"app_url","req":true,"short":"The Shortcut application url for the Project.","type":"`$STRING`","index$":1},{"active":true,"name":"archived","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"req":true,"short":"True/false boolean indicating whether the Project is in an Archived state.","type":"`$BOOLEAN`","index$":2},{"active":true,"format":"css-color","name":"color","op":{"create":{"req":false,"type":"`$STRING`"},"update":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The color associated with the Project in the Shortcut member interface.","type":"`$STRING`","index$":3},{"active":true,"format":"date-time","name":"created_at","op":{"create":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The time/date that the Project was created.","type":"`$STRING`","index$":4},{"active":true,"format":"int64","name":"days_to_thermometer","op":{"update":{"req":false,"type":"`$INTEGER`"}},"req":true,"short":"The number of days before the thermometer appears in the Story summary.","type":"`$INTEGER`","index$":5},{"active":true,"name":"description","op":{"create":{"req":false,"type":"`$STRING`"},"update":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The description of the Project.","type":"`$STRING`","index$":6},{"active":true,"name":"entity_type","req":true,"short":"A string description of this resource.","type":"`$STRING`","index$":7},{"active":true,"name":"external_id","op":{"create":{"req":false,"type":"`$STRING`"}},"req":true,"short":"This field can be set to another unique ID.","type":"`$STRING`","index$":8},{"active":true,"name":"follower_ids","op":{"create":{"req":false,"type":"`$ARRAY`"},"update":{"req":false,"type":"`$ARRAY`"}},"req":true,"short":"An array of UUIDs for any Members listed as Followers.","type":"`$ARRAY`","index$":9},{"active":true,"name":"global_id","req":true,"short":"The Global ID of the Project.","type":"`$STRING`","index$":10},{"active":true,"format":"int64","name":"id","req":true,"short":"The unique ID of the Project.","type":"`$INTEGER`","index$":11},{"active":true,"format":"int64","name":"iteration_length","op":{"create":{"req":false,"type":"`$INTEGER`"}},"req":true,"short":"The number of weeks per iteration in this Project.","type":"`$INTEGER`","index$":12},{"active":true,"name":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The name of the Project","type":"`$STRING`","index$":13},{"active":true,"name":"show_thermometer","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"req":true,"short":"Configuration to enable or disable thermometers in the Story summary.","type":"`$BOOLEAN`","index$":14},{"active":true,"format":"date-time","name":"start_time","op":{"create":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The date at which the Project was started.","type":"`$STRING`","index$":15},{"active":true,"name":"stats","req":true,"short":"A group of calculated values for this Project.","type":"`$OBJECT`","index$":16},{"active":true,"format":"int64","name":"team_id","op":{"update":{"req":false,"type":"`$INTEGER`"}},"req":true,"short":"The ID of the team the project belongs to.","type":"`$INTEGER`","index$":17},{"active":true,"format":"date-time","name":"updated_at","op":{"create":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The time/date that the Project was last updated.","type":"`$STRING`","index$":18},{"active":true,"format":"int64","name":"workflow_id","req":true,"short":"The ID of the workflow the project belongs to.","type":"`$INTEGER`","index$":19}],"id":{"field":"id","name":"id"},"name":"project","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/v3/projects","json":"{\"operationId\":\"createProject\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"abbreviation\":{\"description\":\"The Project abbreviation used in Story summaries. Should be kept to 3 characters at most.\",\"maxLength\":63,\"type\":\"string\"},\"color\":{\"description\":\"The color you wish to use for the Project in the system.\",\"format\":\"css-color\",\"minLength\":1,\"pattern\":\"^#[a-fA-F0-9]{6}$\",\"type\":\"string\"},\"created_at\":{\"description\":\"Defaults to the time/date it is created but can be set to reflect another date.\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"The Project description.\",\"maxLength\":100000,\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Project has been imported from another tool, the ID in the other tool can be indicated here.\",\"maxLength\":128,\"type\":\"string\"},\"follower_ids\":{\"description\":\"An array of UUIDs for any members you want to add as Owners on this new Epic.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"iteration_length\":{\"description\":\"The number of weeks per iteration in this Project.\",\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the Project.\",\"maxLength\":128,\"minLength\":1,\"type\":\"string\"},\"start_time\":{\"description\":\"The date at which the Project was started.\",\"format\":\"date-time\",\"type\":\"string\"},\"team_id\":{\"description\":\"The ID of the team the project belongs to.\",\"format\":\"int64\",\"type\":\"integer\"},\"updated_at\":{\"description\":\"Defaults to the time/date it is created but can be set to reflect another date.\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"name\",\"team_id\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Projects typically map to teams (such as Frontend, Backend, Mobile, Devops, etc) but can represent any open-ended product, component, or initiative.\",\"properties\":{\"abbreviation\":{\"description\":\"The Project abbreviation used in Story summaries. Should be kept to 3 characters at most.\",\"nullable\":true,\"type\":\"string\"},\"app_url\":{\"description\":\"The Shortcut application url for the Project.\",\"type\":\"string\"},\"archived\":{\"description\":\"True/false boolean indicating whether the Project is in an Archived state.\",\"type\":\"boolean\"},\"color\":{\"description\":\"The color associated with the Project in the Shortcut member interface.\",\"format\":\"css-color\",\"minLength\":1,\"nullable\":true,\"pattern\":\"^#[a-fA-F0-9]{6}$\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date that the Project was created.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"days_to_thermometer\":{\"description\":\"The number of days before the thermometer appears in the Story summary.\",\"format\":\"int64\",\"type\":\"integer\"},\"description\":{\"description\":\"The description of the Project.\",\"nullable\":true,\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Project has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"follower_ids\":{\"description\":\"An array of UUIDs for any Members listed as Followers.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"global_id\":{\"description\":\"The Global ID of the Project.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the Project.\",\"format\":\"int64\",\"type\":\"integer\"},\"iteration_length\":{\"description\":\"The number of weeks per iteration in this Project.\",\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the Project\",\"type\":\"string\"},\"show_thermometer\":{\"description\":\"Configuration to enable or disable thermometers in the Story summary.\",\"type\":\"boolean\"},\"start_time\":{\"description\":\"The date at which the Project was started.\",\"format\":\"date-time\",\"type\":\"string\"},\"stats\":{\"additionalProperties\":false,\"description\":\"A group of calculated values for this Project.\",\"properties\":{\"num_points\":{\"description\":\"The total number of points in this Project.\",\"format\":\"int64\",\"type\":\"integer\"},\"num_related_documents\":{\"description\":\"The total number of documents related to this Project\",\"format\":\"int64\",\"type\":\"integer\"},\"num_stories\":{\"description\":\"The total number of stories in this Project.\",\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"num_stories\",\"num_points\",\"num_related_documents\"],\"type\":\"object\"},\"team_id\":{\"description\":\"The ID of the team the project belongs to.\",\"format\":\"int64\",\"type\":\"integer\"},\"updated_at\":{\"description\":\"The time/date that the Project was last updated.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"workflow_id\":{\"description\":\"The ID of the workflow the project belongs to.\",\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"app_url\",\"description\",\"archived\",\"entity_type\",\"days_to_thermometer\",\"color\",\"workflow_id\",\"name\",\"global_id\",\"start_time\",\"updated_at\",\"follower_ids\",\"external_id\",\"id\",\"show_thermometer\",\"team_id\",\"iteration_length\",\"abbreviation\",\"stats\",\"created_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/v3/projects","segments":[{"lit":"api"},{"lit":"v3"},{"lit":"projects"}],"select":{},"transform":{"req":{"abbreviation":"`reqdata.abbreviation`","color":"`reqdata.color`","created_at":"`reqdata.created_at`","description":"`reqdata.description`","external_id":"`reqdata.external_id`","follower_ids":"`reqdata.follower_id`","iteration_length":"`reqdata.iteration_length`","name":"`reqdata.name`","start_time":"`reqdata.start_time`","team_id":"`reqdata.team_id`","updated_at":"`reqdata.updated_at`"},"res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /api/v3/projects","json":"{\"operationId\":\"listProjects\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"additionalProperties\":false,\"description\":\"Projects typically map to teams (such as Frontend, Backend, Mobile, Devops, etc) but can represent any open-ended product, component, or initiative.\",\"properties\":{\"abbreviation\":{\"description\":\"The Project abbreviation used in Story summaries. Should be kept to 3 characters at most.\",\"nullable\":true,\"type\":\"string\"},\"app_url\":{\"description\":\"The Shortcut application url for the Project.\",\"type\":\"string\"},\"archived\":{\"description\":\"True/false boolean indicating whether the Project is in an Archived state.\",\"type\":\"boolean\"},\"color\":{\"description\":\"The color associated with the Project in the Shortcut member interface.\",\"format\":\"css-color\",\"minLength\":1,\"nullable\":true,\"pattern\":\"^#[a-fA-F0-9]{6}$\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date that the Project was created.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"days_to_thermometer\":{\"description\":\"The number of days before the thermometer appears in the Story summary.\",\"format\":\"int64\",\"type\":\"integer\"},\"description\":{\"description\":\"The description of the Project.\",\"nullable\":true,\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Project has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"follower_ids\":{\"description\":\"An array of UUIDs for any Members listed as Followers.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"global_id\":{\"description\":\"The Global ID of the Project.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the Project.\",\"format\":\"int64\",\"type\":\"integer\"},\"iteration_length\":{\"description\":\"The number of weeks per iteration in this Project.\",\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the Project\",\"type\":\"string\"},\"show_thermometer\":{\"description\":\"Configuration to enable or disable thermometers in the Story summary.\",\"type\":\"boolean\"},\"start_time\":{\"description\":\"The date at which the Project was started.\",\"format\":\"date-time\",\"type\":\"string\"},\"stats\":{\"additionalProperties\":false,\"description\":\"A group of calculated values for this Project.\",\"properties\":{\"num_points\":{\"description\":\"The total number of points in this Project.\",\"format\":\"int64\",\"type\":\"integer\"},\"num_related_documents\":{\"description\":\"The total number of documents related to this Project\",\"format\":\"int64\",\"type\":\"integer\"},\"num_stories\":{\"description\":\"The total number of stories in this Project.\",\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"num_stories\",\"num_points\",\"num_related_documents\"],\"type\":\"object\"},\"team_id\":{\"description\":\"The ID of the team the project belongs to.\",\"format\":\"int64\",\"type\":\"integer\"},\"updated_at\":{\"description\":\"The time/date that the Project was last updated.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"workflow_id\":{\"description\":\"The ID of the workflow the project belongs to.\",\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"app_url\",\"description\",\"archived\",\"entity_type\",\"days_to_thermometer\",\"color\",\"workflow_id\",\"name\",\"global_id\",\"start_time\",\"updated_at\",\"follower_ids\",\"external_id\",\"id\",\"show_thermometer\",\"team_id\",\"iteration_length\",\"abbreviation\",\"stats\",\"created_at\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v3/projects","segments":[{"lit":"api"},{"lit":"v3"},{"lit":"projects"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"project_public_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /api/v3/projects/{project-public-id}","json":"{\"operationId\":\"getProject\",\"parameters\":[{\"description\":\"The unique ID of the Project.\",\"in\":\"path\",\"name\":\"project-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Projects typically map to teams (such as Frontend, Backend, Mobile, Devops, etc) but can represent any open-ended product, component, or initiative.\",\"properties\":{\"abbreviation\":{\"description\":\"The Project abbreviation used in Story summaries. Should be kept to 3 characters at most.\",\"nullable\":true,\"type\":\"string\"},\"app_url\":{\"description\":\"The Shortcut application url for the Project.\",\"type\":\"string\"},\"archived\":{\"description\":\"True/false boolean indicating whether the Project is in an Archived state.\",\"type\":\"boolean\"},\"color\":{\"description\":\"The color associated with the Project in the Shortcut member interface.\",\"format\":\"css-color\",\"minLength\":1,\"nullable\":true,\"pattern\":\"^#[a-fA-F0-9]{6}$\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date that the Project was created.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"days_to_thermometer\":{\"description\":\"The number of days before the thermometer appears in the Story summary.\",\"format\":\"int64\",\"type\":\"integer\"},\"description\":{\"description\":\"The description of the Project.\",\"nullable\":true,\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Project has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"follower_ids\":{\"description\":\"An array of UUIDs for any Members listed as Followers.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"global_id\":{\"description\":\"The Global ID of the Project.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the Project.\",\"format\":\"int64\",\"type\":\"integer\"},\"iteration_length\":{\"description\":\"The number of weeks per iteration in this Project.\",\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the Project\",\"type\":\"string\"},\"show_thermometer\":{\"description\":\"Configuration to enable or disable thermometers in the Story summary.\",\"type\":\"boolean\"},\"start_time\":{\"description\":\"The date at which the Project was started.\",\"format\":\"date-time\",\"type\":\"string\"},\"stats\":{\"additionalProperties\":false,\"description\":\"A group of calculated values for this Project.\",\"properties\":{\"num_points\":{\"description\":\"The total number of points in this Project.\",\"format\":\"int64\",\"type\":\"integer\"},\"num_related_documents\":{\"description\":\"The total number of documents related to this Project\",\"format\":\"int64\",\"type\":\"integer\"},\"num_stories\":{\"description\":\"The total number of stories in this Project.\",\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"num_stories\",\"num_points\",\"num_related_documents\"],\"type\":\"object\"},\"team_id\":{\"description\":\"The ID of the team the project belongs to.\",\"format\":\"int64\",\"type\":\"integer\"},\"updated_at\":{\"description\":\"The time/date that the Project was last updated.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"workflow_id\":{\"description\":\"The ID of the workflow the project belongs to.\",\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"app_url\",\"description\",\"archived\",\"entity_type\",\"days_to_thermometer\",\"color\",\"workflow_id\",\"name\",\"global_id\",\"start_time\",\"updated_at\",\"follower_ids\",\"external_id\",\"id\",\"show_thermometer\",\"team_id\",\"iteration_length\",\"abbreviation\",\"stats\",\"created_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v3/projects/{project-public-id}","rename":{"param":{"project-public-id":"id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"projects"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"project_public_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"DELETE /api/v3/projects/{project-public-id}","json":"{\"operationId\":\"deleteProject\",\"parameters\":[{\"description\":\"The unique ID of the Project.\",\"in\":\"path\",\"name\":\"project-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"No Content\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/api/v3/projects/{project-public-id}","rename":{"param":{"project-public-id":"id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"projects"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"project_public_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"PUT /api/v3/projects/{project-public-id}","json":"{\"operationId\":\"updateProject\",\"parameters\":[{\"description\":\"The unique ID of the Project.\",\"in\":\"path\",\"name\":\"project-public-id\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"abbreviation\":{\"description\":\"The Project abbreviation used in Story summaries. Should be kept to 3 characters at most.\",\"type\":\"string\"},\"archived\":{\"description\":\"A true/false boolean indicating whether the Story is in archived state.\",\"type\":\"boolean\"},\"color\":{\"description\":\"The color that represents the Project in the UI.\",\"format\":\"css-color\",\"minLength\":1,\"pattern\":\"^#[a-fA-F0-9]{6}$\",\"type\":\"string\"},\"days_to_thermometer\":{\"description\":\"The number of days before the thermometer appears in the Story summary.\",\"format\":\"int64\",\"type\":\"integer\"},\"description\":{\"description\":\"The Project's description.\",\"maxLength\":100000,\"type\":\"string\"},\"follower_ids\":{\"description\":\"An array of UUIDs for any Members you want to add as Followers.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"The Project's name.\",\"maxLength\":128,\"minLength\":1,\"type\":\"string\"},\"show_thermometer\":{\"description\":\"Configuration to enable or disable thermometers in the Story summary.\",\"type\":\"boolean\"},\"team_id\":{\"description\":\"The ID of the team the project belongs to.\",\"format\":\"int64\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"description\":\"Projects typically map to teams (such as Frontend, Backend, Mobile, Devops, etc) but can represent any open-ended product, component, or initiative.\",\"properties\":{\"abbreviation\":{\"description\":\"The Project abbreviation used in Story summaries. Should be kept to 3 characters at most.\",\"nullable\":true,\"type\":\"string\"},\"app_url\":{\"description\":\"The Shortcut application url for the Project.\",\"type\":\"string\"},\"archived\":{\"description\":\"True/false boolean indicating whether the Project is in an Archived state.\",\"type\":\"boolean\"},\"color\":{\"description\":\"The color associated with the Project in the Shortcut member interface.\",\"format\":\"css-color\",\"minLength\":1,\"nullable\":true,\"pattern\":\"^#[a-fA-F0-9]{6}$\",\"type\":\"string\"},\"created_at\":{\"description\":\"The time/date that the Project was created.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"days_to_thermometer\":{\"description\":\"The number of days before the thermometer appears in the Story summary.\",\"format\":\"int64\",\"type\":\"integer\"},\"description\":{\"description\":\"The description of the Project.\",\"nullable\":true,\"type\":\"string\"},\"entity_type\":{\"description\":\"A string description of this resource.\",\"type\":\"string\"},\"external_id\":{\"description\":\"This field can be set to another unique ID. In the case that the Project has been imported from another tool, the ID in the other tool can be indicated here.\",\"nullable\":true,\"type\":\"string\"},\"follower_ids\":{\"description\":\"An array of UUIDs for any Members listed as Followers.\",\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\"},\"global_id\":{\"description\":\"The Global ID of the Project.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique ID of the Project.\",\"format\":\"int64\",\"type\":\"integer\"},\"iteration_length\":{\"description\":\"The number of weeks per iteration in this Project.\",\"format\":\"int64\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the Project\",\"type\":\"string\"},\"show_thermometer\":{\"description\":\"Configuration to enable or disable thermometers in the Story summary.\",\"type\":\"boolean\"},\"start_time\":{\"description\":\"The date at which the Project was started.\",\"format\":\"date-time\",\"type\":\"string\"},\"stats\":{\"additionalProperties\":false,\"description\":\"A group of calculated values for this Project.\",\"properties\":{\"num_points\":{\"description\":\"The total number of points in this Project.\",\"format\":\"int64\",\"type\":\"integer\"},\"num_related_documents\":{\"description\":\"The total number of documents related to this Project\",\"format\":\"int64\",\"type\":\"integer\"},\"num_stories\":{\"description\":\"The total number of stories in this Project.\",\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"num_stories\",\"num_points\",\"num_related_documents\"],\"type\":\"object\"},\"team_id\":{\"description\":\"The ID of the team the project belongs to.\",\"format\":\"int64\",\"type\":\"integer\"},\"updated_at\":{\"description\":\"The time/date that the Project was last updated.\",\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"workflow_id\":{\"description\":\"The ID of the workflow the project belongs to.\",\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"app_url\",\"description\",\"archived\",\"entity_type\",\"days_to_thermometer\",\"color\",\"workflow_id\",\"name\",\"global_id\",\"start_time\",\"updated_at\",\"follower_ids\",\"external_id\",\"id\",\"show_thermometer\",\"team_id\",\"iteration_length\",\"abbreviation\",\"stats\",\"created_at\"],\"type\":\"object\"}}},\"description\":\"Resource\"},\"400\":{\"description\":\"Schema mismatch\"},\"404\":{\"description\":\"Resource does not exist\"},\"422\":{\"description\":\"Unprocessable\"}},\"security\":[{\"api_token\":[]}],\"securitySchemes\":{\"api_token\":{\"in\":\"header\",\"name\":\"Shortcut-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/api/v3/projects/{project-public-id}","rename":{"param":{"project-public-id":"id"}},"segments":[{"lit":"api"},{"lit":"v3"},{"lit":"projects"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":{"abbreviation":"`reqdata.abbreviation`","archived":"`reqdata.archived`","color":"`reqdata.color`","days_to_thermometer":"`reqdata.days_to_thermometer`","description":"`reqdata.description`","follower_ids":"`reqdata.follower_id`","name":"`reqdata.name`","show_thermometer":"`reqdata.show_thermometer`","team_id":"`reqdata.team_id`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"project","name__orig":"project","Name":"Project","name_":"project","name-":"project","NAME":"PROJECT","index$":23}, {"active":true,"entity":"project","key$":"BasicProjectFlow","kind":"basic","name":"BasicProjectFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"project_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"project_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"project_ref01","srcdatavar":"project_ref01_data","suffix":"_up0","textfield":"abbreviation"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-project_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"project_ref01","srcdatavar":"project_ref01_data","suffix":"_dt0"},"match":{"id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-project_ref01"}}],"index$":3},{"active":true,"data":{},"input":{"ref":"project_ref01","suffix":"_rm0"},"match":{"id":"project01"},"op":"remove","spec":[],"valid":[],"index$":4},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"project_ref01"}}],"index$":5}]}, 'Project')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const project_ref01_ent = client.Project()
    let project_ref01_data = setup.data.new.project['project_ref01']

    project_ref01_data = (await project_ref01_ent.create(project_ref01_data)).data()
    assert(null != project_ref01_data.id)


    // LIST
    const project_ref01_match = {}

    const project_ref01_list = (await project_ref01_ent.list(project_ref01_match)).map((e) => e.data())

    assert(!isempty(select(project_ref01_list, { id: project_ref01_data.id })))


    // UPDATE
    const project_ref01_data_up0 = {}
    project_ref01_data_up0.id = project_ref01_data.id

    const project_ref01_markdef_up0 = { name: 'abbreviation', value: 'Mark01-project_ref01_' + setup.now }
    project_ref01_data_up0 [project_ref01_markdef_up0.name] = project_ref01_markdef_up0.value

    const project_ref01_resdata_up0 = (await project_ref01_ent.update(project_ref01_data_up0)).data()
    assert(project_ref01_resdata_up0.id === project_ref01_data_up0.id)

    assert(project_ref01_resdata_up0[project_ref01_markdef_up0.name] === project_ref01_markdef_up0.value)


    // LOAD
    const project_ref01_match_dt0 = {}
    project_ref01_match_dt0.id = project_ref01_data.id
    const project_ref01_data_dt0 = (await project_ref01_ent.load(project_ref01_match_dt0)).data()
    assert(project_ref01_data_dt0.id === project_ref01_data.id)


    // REMOVE
    const project_ref01_match_rm0 = {}
    project_ref01_match_rm0.id = project_ref01_data.id
    await project_ref01_ent.remove(project_ref01_match_rm0)
  

    // LIST
    const project_ref01_match_rt0 = {}

    const project_ref01_list_rt0 = (await project_ref01_ent.list(project_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(project_ref01_list_rt0, { id: project_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/project/ProjectTestData.json')

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
    ['project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHORTCUT_TEST_PROJECT_ENTID': idmap,
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_TEST_EXPLAIN': 'FALSE',
    'SHORTCUT_APIKEY': '',
  })

  idmap = env['SHORTCUT_TEST_PROJECT_ENTID']

  const live = 'TRUE' === env.SHORTCUT_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SHORTCUT_TEST_PROJECT_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
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
  

# Shortcut JavaScript SDK



The JavaScript SDK for the Shortcut API — an entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Bulk()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```js
npm install shortcut
```
## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.


### Create a Client

```js
const { ShortcutSDK } = require('@voxgig-sdk/shortcut-js')

const client = new ShortcutSDK({
  apikey: process.env.SHORTCUT_APIKEY,
})
```

### Remove a Bulk

```js
await client.Bulk().remove()
```

### Direct API Access

Use `client.direct()` to call any API endpoint directly:

```js
const result = await client.direct({
  path: '/custom/endpoint/{id}',
  method: 'GET',
  params: { id: 'abc123' },
})

if (result.ok) {
  console.log(result.data)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const iterations = await client.Iteration().list()
  console.log(iterations)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```js
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```js
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```js
const client = ShortcutSDK.test()

const iteration = await client.Iteration().list()
// iteration is a bare entity populated with mock response data
console.log(iteration)
```

You can also use the instance method:

```js
const client = new ShortcutSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```js
const entity = client.Iteration()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```js
const logger = {
  hooks: {
    PreRequest: (ctx) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new ShortcutSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
SHORTCUT_TEST_LIVE=TRUE
SHORTCUT_APIKEY=<your-key>
```

Then run:

```bash
cd js && npm test
```


## Reference

### ShortcutSDK

#### Constructor

```js
new ShortcutSDK(options?)
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Bulk(data?)` | `BulkEntity` | Create a Bulk entity instance. |
| `Category(data?)` | `CategoryEntity` | Create a Category entity instance. |
| `Comment(data?)` | `CommentEntity` | Create a Comment entity instance. |
| `CustomField(data?)` | `CustomFieldEntity` | Create a CustomField entity instance. |
| `Disable(data?)` | `DisableEntity` | Create a Disable entity instance. |
| `DocSlim(data?)` | `DocSlimEntity` | Create a DocSlim entity instance. |
| `Enable(data?)` | `EnableEntity` | Create an Enable entity instance. |
| `EntityTemplate(data?)` | `EntityTemplateEntity` | Create an EntityTemplate entity instance. |
| `Epic(data?)` | `EpicEntity` | Create an Epic entity instance. |
| `EpicPaginatedResult(data?)` | `EpicPaginatedResultEntity` | Create an EpicPaginatedResult entity instance. |
| `EpicUnlinkProductboard(data?)` | `EpicUnlinkProductboardEntity` | Create an EpicUnlinkProductboard entity instance. |
| `EpicWorkflow(data?)` | `EpicWorkflowEntity` | Create an EpicWorkflow entity instance. |
| `Group(data?)` | `GroupEntity` | Create a Group entity instance. |
| `Health(data?)` | `HealthEntity` | Create a Health entity instance. |
| `History(data?)` | `HistoryEntity` | Create a History entity instance. |
| `Iteration(data?)` | `IterationEntity` | Create an Iteration entity instance. |
| `KeyResult(data?)` | `KeyResultEntity` | Create a KeyResult entity instance. |
| `Label(data?)` | `LabelEntity` | Create a Label entity instance. |
| `LinkedFile(data?)` | `LinkedFileEntity` | Create a LinkedFile entity instance. |
| `Member(data?)` | `MemberEntity` | Create a Member entity instance. |
| `Milestone(data?)` | `MilestoneEntity` | Create a Milestone entity instance. |
| `Objectif(data?)` | `ObjectifEntity` | Create an Objectif entity instance. |
| `Objective(data?)` | `ObjectiveEntity` | Create an Objective entity instance. |
| `Project(data?)` | `ProjectEntity` | Create a Project entity instance. |
| `Repository(data?)` | `RepositoryEntity` | Create a Repository entity instance. |
| `Search(data?)` | `SearchEntity` | Create a Search entity instance. |
| `Story(data?)` | `StoryEntity` | Create a Story entity instance. |
| `StoryComment(data?)` | `StoryCommentEntity` | Create a StoryComment entity instance. |
| `StoryLink(data?)` | `StoryLinkEntity` | Create a StoryLink entity instance. |
| `StoryReaction(data?)` | `StoryReactionEntity` | Create a StoryReaction entity instance. |
| `StorySlim(data?)` | `StorySlimEntity` | Create a StorySlim entity instance. |
| `Task(data?)` | `TaskEntity` | Create a Task entity instance. |
| `ThreadedComment(data?)` | `ThreadedCommentEntity` | Create a ThreadedComment entity instance. |
| `UploadedFile(data?)` | `UploadedFileEntity` | Create an UploadedFile entity instance. |
| `Webhook(data?)` | `WebhookEntity` | Create a Webhook entity instance. |
| `Workflow(data?)` | `WorkflowEntity` | Create a Workflow entity instance. |
| `tester(testopts?, sdkopts?)` | `ShortcutSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `ShortcutSDK.test(testopts?, sdkopts?)` | `ShortcutSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): ShortcutSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `undefined`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```js
{
  ok: true,
  status: 200,
  headers: {},
  data: {}
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```js
{
  url: 'string',
  method: 'string',
  headers: {},
  body: undefined
}
```

### Entities

#### Bulk

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/api/v3/stories/bulk`

#### Category

| Field | Description |
| --- | --- |
| `archived` |  |
| `color` |  |
| `created_at` |  |
| `entity_type` |  |
| `external_id` |  |
| `global_id` |  |
| `id` |  |
| `name` |  |
| `type` |  |
| `updated_at` |  |

Operations: create, list, load, remove, update.

API path: `/api/v3/categories`

#### Comment

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/api/v3/stories/{story-public-id}/comments/{comment-public-id}`

#### CustomField

| Field | Description |
| --- | --- |
| `after_id` |  |
| `before_id` |  |
| `canonical_name` |  |
| `created_at` |  |
| `description` |  |
| `enabled` |  |
| `entity_type` |  |
| `field_type` |  |
| `fixed_position` |  |
| `icon_set_identifier` |  |
| `id` |  |
| `name` |  |
| `position` |  |
| `story_types` |  |
| `updated_at` |  |
| `values` |  |

Operations: list, load, remove, update.

API path: `/api/v3/custom-fields`

#### Disable

| Field | Description |
| --- | --- |

Operations: update.

API path: `/api/v3/entity-templates/disable`

#### DocSlim

| Field | Description |
| --- | --- |
| `app_url` |  |
| `content` |  |
| `id` |  |
| `title` |  |

Operations: create, list.

API path: `/api/v3/documents`

#### Enable

| Field | Description |
| --- | --- |

Operations: update.

API path: `/api/v3/entity-templates/enable`

#### EntityTemplate

| Field | Description |
| --- | --- |
| `author_id` |  |
| `created_at` |  |
| `custom_fields` |  |
| `deadline` |  |
| `description` |  |
| `entity_type` |  |
| `epic_id` |  |
| `estimate` |  |
| `external_links` |  |
| `files` |  |
| `follower_ids` |  |
| `group_id` |  |
| `id` |  |
| `iteration_id` |  |
| `label_ids` |  |
| `labels` |  |
| `last_used_at` |  |
| `linked_files` |  |
| `name` |  |
| `owner_ids` |  |
| `project_id` |  |
| `story_contents` |  |
| `story_type` |  |
| `sub_tasks` |  |
| `tasks` |  |
| `updated_at` |  |
| `workflow_state_id` |  |

Operations: create, list, load, remove, update.

API path: `/api/v3/entity-templates`

#### Epic

| Field | Description |
| --- | --- |
| `after_id` |  |
| `app_url` |  |
| `archived` |  |
| `associated_groups` |  |
| `before_id` |  |
| `comments` |  |
| `completed` |  |
| `completed_at` |  |
| `completed_at_override` |  |
| `converted_from_story_id` |  |
| `created_at` |  |
| `deadline` |  |
| `description` |  |
| `entity_type` |  |
| `epic_state_id` |  |
| `external_id` |  |
| `follower_ids` |  |
| `global_id` |  |
| `group_id` |  |
| `group_ids` |  |
| `group_mention_ids` |  |
| `health` |  |
| `id` |  |
| `label_ids` |  |
| `labels` |  |
| `member_mention_ids` |  |
| `mention_ids` |  |
| `milestone_id` |  |
| `name` |  |
| `objective_ids` |  |
| `owner_ids` |  |
| `planned_start_date` |  |
| `position` |  |
| `productboard_id` |  |
| `productboard_name` |  |
| `productboard_plugin_id` |  |
| `productboard_url` |  |
| `project_ids` |  |
| `requested_by_id` |  |
| `started` |  |
| `started_at` |  |
| `started_at_override` |  |
| `state` |  |
| `stats` |  |
| `stories_without_projects` |  |
| `updated_at` |  |

Operations: create, list, load, remove, update.

API path: `/api/v3/epics`

#### EpicPaginatedResult

| Field | Description |
| --- | --- |
| `app_url` |  |
| `archived` |  |
| `associated_groups` |  |
| `completed` |  |
| `completed_at` |  |
| `completed_at_override` |  |
| `created_at` |  |
| `deadline` |  |
| `description` |  |
| `entity_type` |  |
| `epic_state_id` |  |
| `external_id` |  |
| `follower_ids` |  |
| `global_id` |  |
| `group_id` |  |
| `group_ids` |  |
| `group_mention_ids` |  |
| `id` |  |
| `label_ids` |  |
| `labels` |  |
| `member_mention_ids` |  |
| `mention_ids` |  |
| `milestone_id` |  |
| `name` |  |
| `objective_ids` |  |
| `owner_ids` |  |
| `planned_start_date` |  |
| `position` |  |
| `productboard_id` |  |
| `productboard_name` |  |
| `productboard_plugin_id` |  |
| `productboard_url` |  |
| `project_ids` |  |
| `requested_by_id` |  |
| `started` |  |
| `started_at` |  |
| `started_at_override` |  |
| `state` |  |
| `stats` |  |
| `stories_without_projects` |  |
| `updated_at` |  |

Operations: list.

API path: `/api/v3/epics/paginated`

#### EpicUnlinkProductboard

| Field | Description |
| --- | --- |

Operations: create.

API path: `/api/v3/epics/{epic-public-id}/unlink-productboard`

#### EpicWorkflow

| Field | Description |
| --- | --- |
| `color` |  |
| `created_at` |  |
| `description` |  |
| `entity_type` |  |
| `global_id` |  |
| `id` |  |
| `name` |  |
| `position` |  |
| `type` |  |
| `updated_at` |  |

Operations: list.

API path: `/api/v3/epic-workflow`

#### Group

| Field | Description |
| --- | --- |
| `app_url` |  |
| `archived` |  |
| `color` |  |
| `color_key` |  |
| `created_at` |  |
| `default_workflow_id` |  |
| `description` |  |
| `display_icon` |  |
| `display_icon_id` |  |
| `entity_type` |  |
| `global_id` |  |
| `id` |  |
| `member_ids` |  |
| `mention_name` |  |
| `name` |  |
| `num_epics_started` |  |
| `num_stories` |  |
| `num_stories_backlog` |  |
| `num_stories_started` |  |
| `updated_at` |  |
| `workflow_ids` |  |

Operations: create, list, load, update.

API path: `/api/v3/groups`

#### Health

| Field | Description |
| --- | --- |
| `author_id` |  |
| `created_at` |  |
| `entity_type` |  |
| `epic_id` |  |
| `id` |  |
| `objective_id` |  |
| `status` |  |
| `text` |  |
| `updated_at` |  |

Operations: create, list, load, update.

API path: `/api/v3/epics/{epic-public-id}/health`

#### History

| Field | Description |
| --- | --- |
| `actions` |  |
| `actor_name` |  |
| `automation_id` |  |
| `changed_at` |  |
| `external_id` |  |
| `id` |  |
| `member_id` |  |
| `primary_id` |  |
| `references` |  |
| `version` |  |
| `webhook_id` |  |

Operations: list.

API path: `/api/v3/stories/{story-public-id}/history`

#### Iteration

| Field | Description |
| --- | --- |
| `app_url` |  |
| `associated_groups` |  |
| `created_at` |  |
| `description` |  |
| `end_date` |  |
| `entity_type` |  |
| `follower_ids` |  |
| `global_id` |  |
| `group_ids` |  |
| `group_mention_ids` |  |
| `id` |  |
| `label_ids` |  |
| `labels` |  |
| `member_mention_ids` |  |
| `mention_ids` |  |
| `name` |  |
| `start_date` |  |
| `stats` |  |
| `status` |  |
| `updated_at` |  |

Operations: create, list, load, remove, update.

API path: `/api/v3/iterations`

#### KeyResult

| Field | Description |
| --- | --- |
| `current_observed_value` |  |
| `current_target_value` |  |
| `id` |  |
| `initial_observed_value` |  |
| `name` |  |
| `objective_id` |  |
| `observed_value` |  |
| `progress` |  |
| `target_value` |  |
| `type` |  |

Operations: load, update.

API path: `/api/v3/key-results/{key-result-public-id}`

#### Label

| Field | Description |
| --- | --- |
| `app_url` |  |
| `archived` |  |
| `color` |  |
| `created_at` |  |
| `description` |  |
| `entity_type` |  |
| `external_id` |  |
| `global_id` |  |
| `id` |  |
| `name` |  |
| `num_epics` |  |
| `num_epics_completed` |  |
| `num_epics_in_progress` |  |
| `num_epics_total` |  |
| `num_epics_unstarted` |  |
| `num_points_backlog` |  |
| `num_points_completed` |  |
| `num_points_in_progress` |  |
| `num_points_total` |  |
| `num_points_unstarted` |  |
| `num_related_documents` |  |
| `num_stories_backlog` |  |
| `num_stories_completed` |  |
| `num_stories_in_progress` |  |
| `num_stories_total` |  |
| `num_stories_unestimated` |  |
| `num_stories_unstarted` |  |
| `stats` |  |
| `updated_at` |  |

Operations: create, list, load, remove, update.

API path: `/api/v3/labels`

#### LinkedFile

| Field | Description |
| --- | --- |
| `content_type` |  |
| `created_at` |  |
| `description` |  |
| `entity_type` |  |
| `group_mention_ids` |  |
| `id` |  |
| `member_mention_ids` |  |
| `mention_ids` |  |
| `name` |  |
| `size` |  |
| `story_id` |  |
| `story_ids` |  |
| `thumbnail_url` |  |
| `type` |  |
| `updated_at` |  |
| `uploader_id` |  |
| `url` |  |

Operations: create, list, load, remove, update.

API path: `/api/v3/linked-files`

#### Member

| Field | Description |
| --- | --- |
| `created_at` |  |
| `created_without_invite` |  |
| `disabled` |  |
| `entity_type` |  |
| `global_id` |  |
| `group_ids` |  |
| `id` |  |
| `installation_id` |  |
| `is_owner` |  |
| `mention_name` |  |
| `name` |  |
| `organization2` |  |
| `profile` |  |
| `replaced_by` |  |
| `role` |  |
| `state` |  |
| `updated_at` |  |
| `workspace2` |  |

Operations: list, load.

API path: `/api/v3/members`

#### Milestone

| Field | Description |
| --- | --- |
| `after_id` |  |
| `app_url` |  |
| `archived` |  |
| `before_id` |  |
| `categories` |  |
| `completed` |  |
| `completed_at` |  |
| `completed_at_override` |  |
| `created_at` |  |
| `description` |  |
| `entity_type` |  |
| `global_id` |  |
| `id` |  |
| `key_result_ids` |  |
| `name` |  |
| `position` |  |
| `started` |  |
| `started_at` |  |
| `started_at_override` |  |
| `state` |  |
| `stats` |  |
| `updated_at` |  |

Operations: create, list, load, remove, update.

API path: `/api/v3/milestones`

#### Objectif

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/api/v3/objectives/{objective-public-id}`

#### Objective

| Field | Description |
| --- | --- |
| `after_id` |  |
| `app_url` |  |
| `archived` |  |
| `before_id` |  |
| `categories` |  |
| `completed` |  |
| `completed_at` |  |
| `completed_at_override` |  |
| `created_at` |  |
| `description` |  |
| `entity_type` |  |
| `global_id` |  |
| `id` |  |
| `key_result_ids` |  |
| `name` |  |
| `position` |  |
| `started` |  |
| `started_at` |  |
| `started_at_override` |  |
| `state` |  |
| `stats` |  |
| `updated_at` |  |

Operations: create, list, load, update.

API path: `/api/v3/objectives`

#### Project

| Field | Description |
| --- | --- |
| `abbreviation` |  |
| `app_url` |  |
| `archived` |  |
| `color` |  |
| `created_at` |  |
| `days_to_thermometer` |  |
| `description` |  |
| `entity_type` |  |
| `external_id` |  |
| `follower_ids` |  |
| `global_id` |  |
| `id` |  |
| `iteration_length` |  |
| `name` |  |
| `show_thermometer` |  |
| `start_time` |  |
| `stats` |  |
| `team_id` |  |
| `updated_at` |  |
| `workflow_id` |  |

Operations: create, list, load, remove, update.

API path: `/api/v3/projects`

#### Repository

| Field | Description |
| --- | --- |
| `created_at` |  |
| `entity_type` |  |
| `external_id` |  |
| `full_name` |  |
| `id` |  |
| `name` |  |
| `type` |  |
| `updated_at` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v3/repositories`

#### Search

| Field | Description |
| --- | --- |
| `epics` |  |
| `iterations` |  |
| `milestones` |  |
| `stories` |  |

Operations: load.

API path: `/api/v3/search`

#### Story

| Field | Description |
| --- | --- |
| `after_id` |  |
| `app_url` |  |
| `archived` |  |
| `before_id` |  |
| `blocked` |  |
| `blocker` |  |
| `branch_ids` |  |
| `branches` |  |
| `comment_ids` |  |
| `comments` |  |
| `commit_ids` |  |
| `commits` |  |
| `completed` |  |
| `completed_at` |  |
| `completed_at_override` |  |
| `created_at` |  |
| `custom_fields` |  |
| `custom_fields_add` |  |
| `custom_fields_remove` |  |
| `cycle_time` |  |
| `deadline` |  |
| `description` |  |
| `entity_type` |  |
| `epic_id` |  |
| `estimate` |  |
| `external_id` |  |
| `external_links` |  |
| `external_links_add` |  |
| `external_links_remove` |  |
| `file_ids` |  |
| `file_ids_add` |  |
| `file_ids_remove` |  |
| `files` |  |
| `follower_ids` |  |
| `follower_ids_add` |  |
| `follower_ids_remove` |  |
| `formatted_vcs_branch_name` |  |
| `global_id` |  |
| `group_id` |  |
| `group_mention_ids` |  |
| `id` |  |
| `iteration_id` |  |
| `label_ids` |  |
| `labels` |  |
| `labels_add` |  |
| `labels_remove` |  |
| `lead_time` |  |
| `linked_file_ids` |  |
| `linked_file_ids_add` |  |
| `linked_file_ids_remove` |  |
| `linked_files` |  |
| `member_mention_ids` |  |
| `mention_ids` |  |
| `move_to` |  |
| `moved_at` |  |
| `name` |  |
| `num_tasks_completed` |  |
| `owner_ids` |  |
| `owner_ids_add` |  |
| `owner_ids_remove` |  |
| `parent_story_id` |  |
| `position` |  |
| `previous_iteration_ids` |  |
| `project_id` |  |
| `pull_request_ids` |  |
| `pull_requests` |  |
| `requested_by_id` |  |
| `source_task_id` |  |
| `started` |  |
| `started_at` |  |
| `started_at_override` |  |
| `stats` |  |
| `story_links` |  |
| `story_template_id` |  |
| `story_type` |  |
| `sub_task_story_ids` |  |
| `sub_tasks` |  |
| `synced_item` |  |
| `task_ids` |  |
| `tasks` |  |
| `updated_at` |  |
| `workflow_id` |  |
| `workflow_state_id` |  |

Operations: create, list, load, remove, update.

API path: `/api/v3/stories`

#### StoryComment

| Field | Description |
| --- | --- |
| `app_url` |  |
| `author_id` |  |
| `blocker` |  |
| `created_at` |  |
| `deleted` |  |
| `entity_type` |  |
| `external_id` |  |
| `group_mention_ids` |  |
| `id` |  |
| `linked_to_slack` |  |
| `member_mention_ids` |  |
| `mention_ids` |  |
| `parent_id` |  |
| `position` |  |
| `reactions` |  |
| `story_id` |  |
| `text` |  |
| `unblocks_parent` |  |
| `updated_at` |  |

Operations: create, list, load, update.

API path: `/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack`

#### StoryLink

| Field | Description |
| --- | --- |
| `created_at` |  |
| `entity_type` |  |
| `id` |  |
| `object_id` |  |
| `subject_id` |  |
| `subject_workflow_state_id` |  |
| `updated_at` |  |
| `verb` |  |

Operations: create, load, remove, update.

API path: `/api/v3/story-links`

#### StoryReaction

| Field | Description |
| --- | --- |
| `emoji` |  |

Operations: create, remove.

API path: `/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions`

#### StorySlim

| Field | Description |
| --- | --- |
| `after_id` |  |
| `archived` |  |
| `before_id` |  |
| `completed_at_end` |  |
| `completed_at_start` |  |
| `created_at_end` |  |
| `created_at_start` |  |
| `custom_fields_add` |  |
| `custom_fields_remove` |  |
| `deadline` |  |
| `deadline_end` |  |
| `deadline_start` |  |
| `epic_id` |  |
| `epic_ids` |  |
| `estimate` |  |
| `external_id` |  |
| `external_links` |  |
| `follower_ids_add` |  |
| `follower_ids_remove` |  |
| `group_id` |  |
| `group_ids` |  |
| `includes_description` |  |
| `iteration_id` |  |
| `iteration_ids` |  |
| `label_ids` |  |
| `label_name` |  |
| `labels_add` |  |
| `labels_remove` |  |
| `move_to` |  |
| `owner_id` |  |
| `owner_ids` |  |
| `owner_ids_add` |  |
| `owner_ids_remove` |  |
| `project_id` |  |
| `project_ids` |  |
| `requested_by_id` |  |
| `stories` |  |
| `story_ids` |  |
| `story_type` |  |
| `updated_at_end` |  |
| `updated_at_start` |  |
| `workflow_state_id` |  |
| `workflow_state_types` |  |

Operations: create, update.

API path: `/api/v3/stories/bulk`

#### Task

| Field | Description |
| --- | --- |
| `after_id` |  |
| `before_id` |  |
| `complete` |  |
| `completed_at` |  |
| `created_at` |  |
| `description` |  |
| `entity_type` |  |
| `external_id` |  |
| `global_id` |  |
| `group_mention_ids` |  |
| `id` |  |
| `member_mention_ids` |  |
| `mention_ids` |  |
| `owner_ids` |  |
| `position` |  |
| `story_id` |  |
| `updated_at` |  |

Operations: create, load, remove, update.

API path: `/api/v3/stories/{story-public-id}/tasks`

#### ThreadedComment

| Field | Description |
| --- | --- |
| `app_url` |  |
| `author_id` |  |
| `comments` |  |
| `created_at` |  |
| `deleted` |  |
| `entity_type` |  |
| `external_id` |  |
| `group_mention_ids` |  |
| `id` |  |
| `member_mention_ids` |  |
| `mention_ids` |  |
| `text` |  |
| `updated_at` |  |

Operations: create, list, load, remove, update.

API path: `/api/v3/epics/{epic-public-id}/comments/{comment-public-id}`

#### UploadedFile

| Field | Description |
| --- | --- |
| `content_type` |  |
| `created_at` |  |
| `description` |  |
| `entity_type` |  |
| `external_id` |  |
| `filename` |  |
| `group_mention_ids` |  |
| `id` |  |
| `member_mention_ids` |  |
| `mention_ids` |  |
| `name` |  |
| `size` |  |
| `story_ids` |  |
| `thumbnail_url` |  |
| `updated_at` |  |
| `uploader_id` |  |
| `url` |  |

Operations: create, list, load, remove, update.

API path: `/api/v3/files`

#### Webhook

| Field | Description |
| --- | --- |
| `secret` |  |
| `webhook_url` |  |

Operations: create, load, remove.

API path: `/api/v3/integrations/webhook`

#### Workflow

| Field | Description |
| --- | --- |
| `auto_assign_owner` |  |
| `created_at` |  |
| `default_state_id` |  |
| `description` |  |
| `entity_type` |  |
| `id` |  |
| `name` |  |
| `project_ids` |  |
| `states` |  |
| `team_id` |  |
| `updated_at` |  |

Operations: list, load.

API path: `/api/v3/workflows`



## Entities


### Bulk

Create an instance: `const bulk = client.Bulk()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Category

Create an instance: `const category = client.Category()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` |  |
| `color` | `string` |  |
| `created_at` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `global_id` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const category = await client.Category().load({ id: 1 })
```

#### Example: List

```ts
const categorys = await client.Category().list()
```

#### Example: Create

```ts
const category = await client.Category().create({
  archived: true,
  color: 'example_color',
  created_at: 'example_created_at',
  entity_type: 'example_entity_type',
  external_id: 'example_external_id',
  global_id: 'example_global_id',
  id: 1,
  name: 'example_name',
  type: 'example_type',
  updated_at: 'example_updated_at',
})
```


### Comment

Create an instance: `const comment = client.Comment()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CustomField

Create an instance: `const custom_field = client.CustomField()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `string` |  |
| `before_id` | `string` |  |
| `canonical_name` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `enabled` | `boolean` |  |
| `entity_type` | `string` |  |
| `field_type` | `string` |  |
| `fixed_position` | `boolean` |  |
| `icon_set_identifier` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `position` | `number` |  |
| `story_types` | `Array` |  |
| `updated_at` | `string` |  |
| `values` | `Array` |  |

#### Example: Load

```ts
const custom_field = await client.CustomField().load({ id: 'custom_field_id' })
```

#### Example: List

```ts
const custom_fields = await client.CustomField().list()
```


### Disable

Create an instance: `const disable = client.Disable()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### DocSlim

Create an instance: `const doc_slim = client.DocSlim()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` |  |
| `content` | `string` |  |
| `id` | `string` |  |
| `title` | `string` |  |

#### Example: List

```ts
const doc_slims = await client.DocSlim().list()
```

#### Example: Create

```ts
const doc_slim = await client.DocSlim().create({
  app_url: 'example_app_url',
  content: 'example_content',
  id: 'example_id',
  title: 'example_title',
})
```


### Enable

Create an instance: `const enable = client.Enable()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### EntityTemplate

Create an instance: `const entity_template = client.EntityTemplate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_id` | `string` |  |
| `created_at` | `string` |  |
| `custom_fields` | `Array` |  |
| `deadline` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `epic_id` | `number` |  |
| `estimate` | `number` |  |
| `external_links` | `Array` |  |
| `files` | `Array` |  |
| `follower_ids` | `Array` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `iteration_id` | `number` |  |
| `label_ids` | `Array` |  |
| `labels` | `Array` |  |
| `last_used_at` | `string` |  |
| `linked_files` | `Array` |  |
| `name` | `string` |  |
| `owner_ids` | `Array` |  |
| `project_id` | `number` |  |
| `story_contents` | `Object` |  |
| `story_type` | `string` |  |
| `sub_tasks` | `Array` |  |
| `tasks` | `Array` |  |
| `updated_at` | `string` |  |
| `workflow_state_id` | `number` |  |

#### Example: Load

```ts
const entity_template = await client.EntityTemplate().load({ id: 'entity_template_id' })
```

#### Example: List

```ts
const entity_templates = await client.EntityTemplate().list()
```

#### Example: Create

```ts
const entity_template = await client.EntityTemplate().create({
  created_at: 'example_created_at',
  id: 'example_id',
  last_used_at: 'example_last_used_at',
  story_contents: {},
  updated_at: 'example_updated_at',
})
```


### Epic

Create an instance: `const epic = client.Epic()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `number` |  |
| `app_url` | `string` |  |
| `archived` | `boolean` |  |
| `associated_groups` | `Array` |  |
| `before_id` | `number` |  |
| `comments` | `Array` |  |
| `completed` | `boolean` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `converted_from_story_id` | `number` |  |
| `created_at` | `string` |  |
| `deadline` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `epic_state_id` | `number` |  |
| `external_id` | `string` |  |
| `follower_ids` | `Array` |  |
| `global_id` | `string` |  |
| `group_id` | `string` |  |
| `group_ids` | `Array` |  |
| `group_mention_ids` | `Array` |  |
| `health` | `Object` |  |
| `id` | `number` |  |
| `label_ids` | `Array` |  |
| `labels` | `Array` |  |
| `member_mention_ids` | `Array` |  |
| `mention_ids` | `Array` |  |
| `milestone_id` | `number` |  |
| `name` | `string` |  |
| `objective_ids` | `Array` |  |
| `owner_ids` | `Array` |  |
| `planned_start_date` | `string` |  |
| `position` | `number` |  |
| `productboard_id` | `string` |  |
| `productboard_name` | `string` |  |
| `productboard_plugin_id` | `string` |  |
| `productboard_url` | `string` |  |
| `project_ids` | `Array` |  |
| `requested_by_id` | `string` |  |
| `started` | `boolean` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `state` | `string` |  |
| `stats` | `Object` |  |
| `stories_without_projects` | `number` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const epic = await client.Epic().load({ id: 1 })
```

#### Example: List

```ts
const epics = await client.Epic().list()
```

#### Example: Create

```ts
const epic = await client.Epic().create({
  app_url: 'example_app_url',
  archived: true,
  associated_groups: [],
  comments: [],
  completed: true,
  completed_at: 'example_completed_at',
  completed_at_override: 'example_completed_at_override',
  created_at: 'example_created_at',
  deadline: 'example_deadline',
  description: 'example_description',
  entity_type: 'example_entity_type',
  epic_state_id: 1,
  external_id: 'example_external_id',
  follower_ids: [],
  global_id: 'example_global_id',
  group_id: 'example_group_id',
  group_ids: [],
  group_mention_ids: [],
  health: {},
  id: 1,
  label_ids: [],
  labels: [],
  member_mention_ids: [],
  mention_ids: [],
  milestone_id: 1,
  name: 'example_name',
  objective_ids: [],
  owner_ids: [],
  planned_start_date: 'example_planned_start_date',
  position: 1,
  productboard_id: 'example_productboard_id',
  productboard_name: 'example_productboard_name',
  productboard_plugin_id: 'example_productboard_plugin_id',
  productboard_url: 'example_productboard_url',
  project_ids: [],
  requested_by_id: 'example_requested_by_id',
  started: true,
  started_at: 'example_started_at',
  started_at_override: 'example_started_at_override',
  state: 'example_state',
  stats: {},
  stories_without_projects: 1,
  updated_at: 'example_updated_at',
})
```


### EpicPaginatedResult

Create an instance: `const epic_paginated_result = client.EpicPaginatedResult()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` |  |
| `archived` | `boolean` |  |
| `associated_groups` | `Array` |  |
| `completed` | `boolean` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `created_at` | `string` |  |
| `deadline` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `epic_state_id` | `number` |  |
| `external_id` | `string` |  |
| `follower_ids` | `Array` |  |
| `global_id` | `string` |  |
| `group_id` | `string` |  |
| `group_ids` | `Array` |  |
| `group_mention_ids` | `Array` |  |
| `id` | `number` |  |
| `label_ids` | `Array` |  |
| `labels` | `Array` |  |
| `member_mention_ids` | `Array` |  |
| `mention_ids` | `Array` |  |
| `milestone_id` | `number` |  |
| `name` | `string` |  |
| `objective_ids` | `Array` |  |
| `owner_ids` | `Array` |  |
| `planned_start_date` | `string` |  |
| `position` | `number` |  |
| `productboard_id` | `string` |  |
| `productboard_name` | `string` |  |
| `productboard_plugin_id` | `string` |  |
| `productboard_url` | `string` |  |
| `project_ids` | `Array` |  |
| `requested_by_id` | `string` |  |
| `started` | `boolean` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `state` | `string` |  |
| `stats` | `Object` |  |
| `stories_without_projects` | `number` |  |
| `updated_at` | `string` |  |

#### Example: List

```ts
const epic_paginated_results = await client.EpicPaginatedResult().list()
```


### EpicUnlinkProductboard

Create an instance: `const epic_unlink_productboard = client.EpicUnlinkProductboard()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const epic_unlink_productboard = await client.EpicUnlinkProductboard().create({
  id: 1,
})
```


### EpicWorkflow

Create an instance: `const epic_workflow = client.EpicWorkflow()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `color` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `global_id` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `position` | `number` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |

#### Example: List

```ts
const epic_workflows = await client.EpicWorkflow().list()
```


### Group

Create an instance: `const group = client.Group()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` |  |
| `archived` | `boolean` |  |
| `color` | `string` |  |
| `color_key` | `string` |  |
| `created_at` | `string` |  |
| `default_workflow_id` | `number` |  |
| `description` | `string` |  |
| `display_icon` | `Object` |  |
| `display_icon_id` | `string` |  |
| `entity_type` | `string` |  |
| `global_id` | `string` |  |
| `id` | `string` |  |
| `member_ids` | `Array` |  |
| `mention_name` | `string` |  |
| `name` | `string` |  |
| `num_epics_started` | `number` |  |
| `num_stories` | `number` |  |
| `num_stories_backlog` | `number` |  |
| `num_stories_started` | `number` |  |
| `updated_at` | `string` |  |
| `workflow_ids` | `Array` |  |

#### Example: Load

```ts
const group = await client.Group().load({ id: 'group_id' })
```

#### Example: List

```ts
const groups = await client.Group().list()
```

#### Example: Create

```ts
const group = await client.Group().create({
  app_url: 'example_app_url',
  archived: true,
  color: 'example_color',
  color_key: 'example_color_key',
  created_at: 'example_created_at',
  description: 'example_description',
  display_icon: {},
  entity_type: 'example_entity_type',
  global_id: 'example_global_id',
  id: 'example_id',
  member_ids: [],
  mention_name: 'example_mention_name',
  name: 'example_name',
  num_epics_started: 1,
  num_stories: 1,
  num_stories_backlog: 1,
  num_stories_started: 1,
  updated_at: 'example_updated_at',
  workflow_ids: [],
})
```


### Health

Create an instance: `const health = client.Health()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_id` | `string` |  |
| `created_at` | `string` |  |
| `entity_type` | `string` |  |
| `epic_id` | `number` |  |
| `id` | `string` |  |
| `objective_id` | `number` |  |
| `status` | `string` |  |
| `text` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const health = await client.Health().load({ epic_id: 1 })
```

#### Example: List

```ts
const healths = await client.Health().list()
```

#### Example: Create

```ts
const health = await client.Health().create({
  epic_id: 1,
  entity_type: 'example_entity_type',
  id: 'example_id',
  status: 'example_status',
})
```


### History

Create an instance: `const history = client.History()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `Array` |  |
| `actor_name` | `string` |  |
| `automation_id` | `string` |  |
| `changed_at` | `string` |  |
| `external_id` | `string` |  |
| `id` | `string` |  |
| `member_id` | `string` |  |
| `primary_id` | `string` |  |
| `references` | `Array` |  |
| `version` | `string` |  |
| `webhook_id` | `string` |  |

#### Example: List

```ts
const historys = await client.History().list()
```


### Iteration

Create an instance: `const iteration = client.Iteration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` |  |
| `associated_groups` | `Array` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `end_date` | `string` |  |
| `entity_type` | `string` |  |
| `follower_ids` | `Array` |  |
| `global_id` | `string` |  |
| `group_ids` | `Array` |  |
| `group_mention_ids` | `Array` |  |
| `id` | `number` |  |
| `label_ids` | `Array` |  |
| `labels` | `Array` |  |
| `member_mention_ids` | `Array` |  |
| `mention_ids` | `Array` |  |
| `name` | `string` |  |
| `start_date` | `string` |  |
| `stats` | `Object` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const iteration = await client.Iteration().load({ id: 1 })
```

#### Example: List

```ts
const iterations = await client.Iteration().list()
```

#### Example: Create

```ts
const iteration = await client.Iteration().create({
  app_url: 'example_app_url',
  associated_groups: [],
  created_at: 'example_created_at',
  description: 'example_description',
  end_date: 'example_end_date',
  entity_type: 'example_entity_type',
  follower_ids: [],
  global_id: 'example_global_id',
  group_ids: [],
  group_mention_ids: [],
  id: 1,
  label_ids: [],
  labels: [],
  member_mention_ids: [],
  mention_ids: [],
  name: 'example_name',
  start_date: 'example_start_date',
  stats: {},
  status: 'example_status',
  updated_at: 'example_updated_at',
})
```


### KeyResult

Create an instance: `const key_result = client.KeyResult()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_observed_value` | `Object` |  |
| `current_target_value` | `Object` |  |
| `id` | `string` |  |
| `initial_observed_value` | `Object` |  |
| `name` | `string` |  |
| `objective_id` | `number` |  |
| `observed_value` | `Object` |  |
| `progress` | `number` |  |
| `target_value` | `Object` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const key_result = await client.KeyResult().load({ id: 'key_result_id' })
```


### Label

Create an instance: `const label = client.Label()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` |  |
| `archived` | `boolean` |  |
| `color` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `global_id` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `num_epics` | `number` |  |
| `num_epics_completed` | `number` |  |
| `num_epics_in_progress` | `number` |  |
| `num_epics_total` | `number` |  |
| `num_epics_unstarted` | `number` |  |
| `num_points_backlog` | `number` |  |
| `num_points_completed` | `number` |  |
| `num_points_in_progress` | `number` |  |
| `num_points_total` | `number` |  |
| `num_points_unstarted` | `number` |  |
| `num_related_documents` | `number` |  |
| `num_stories_backlog` | `number` |  |
| `num_stories_completed` | `number` |  |
| `num_stories_in_progress` | `number` |  |
| `num_stories_total` | `number` |  |
| `num_stories_unestimated` | `number` |  |
| `num_stories_unstarted` | `number` |  |
| `stats` | `Object` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const label = await client.Label().load({ id: 1 })
```

#### Example: List

```ts
const labels = await client.Label().list()
```

#### Example: Create

```ts
const label = await client.Label().create({
  app_url: 'example_app_url',
  created_at: 'example_created_at',
  entity_type: 'example_entity_type',
  global_id: 'example_global_id',
  id: 1,
  name: 'example_name',
  num_epics: 1,
  num_epics_completed: 1,
  num_epics_in_progress: 1,
  num_epics_total: 1,
  num_epics_unstarted: 1,
  num_points_backlog: 1,
  num_points_completed: 1,
  num_points_in_progress: 1,
  num_points_total: 1,
  num_points_unstarted: 1,
  num_related_documents: 1,
  num_stories_backlog: 1,
  num_stories_completed: 1,
  num_stories_in_progress: 1,
  num_stories_total: 1,
  num_stories_unestimated: 1,
  num_stories_unstarted: 1,
  stats: {},
  updated_at: 'example_updated_at',
})
```


### LinkedFile

Create an instance: `const linked_file = client.LinkedFile()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `group_mention_ids` | `Array` |  |
| `id` | `number` |  |
| `member_mention_ids` | `Array` |  |
| `mention_ids` | `Array` |  |
| `name` | `string` |  |
| `size` | `number` |  |
| `story_id` | `number` |  |
| `story_ids` | `Array` |  |
| `thumbnail_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `uploader_id` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const linked_file = await client.LinkedFile().load({ id: 1 })
```

#### Example: List

```ts
const linked_files = await client.LinkedFile().list()
```

#### Example: Create

```ts
const linked_file = await client.LinkedFile().create({
  content_type: 'example_content_type',
  created_at: 'example_created_at',
  description: 'example_description',
  entity_type: 'example_entity_type',
  group_mention_ids: [],
  id: 1,
  member_mention_ids: [],
  mention_ids: [],
  name: 'example_name',
  size: 1,
  story_ids: [],
  thumbnail_url: 'example_thumbnail_url',
  type: 'example_type',
  updated_at: 'example_updated_at',
  uploader_id: 'example_uploader_id',
  url: 'example_url',
})
```


### Member

Create an instance: `const member = client.Member()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_without_invite` | `boolean` |  |
| `disabled` | `boolean` |  |
| `entity_type` | `string` |  |
| `global_id` | `string` |  |
| `group_ids` | `Array` |  |
| `id` | `string` |  |
| `installation_id` | `string` |  |
| `is_owner` | `boolean` |  |
| `mention_name` | `string` |  |
| `name` | `string` |  |
| `organization2` | `Object` |  |
| `profile` | `Object` |  |
| `replaced_by` | `string` |  |
| `role` | `string` |  |
| `state` | `string` |  |
| `updated_at` | `string` |  |
| `workspace2` | `Object` |  |

#### Example: Load

```ts
const member = await client.Member().load({ id: 'member_id' })
```

#### Example: List

```ts
const members = await client.Member().list()
```


### Milestone

Create an instance: `const milestone = client.Milestone()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `number` |  |
| `app_url` | `string` |  |
| `archived` | `boolean` |  |
| `before_id` | `number` |  |
| `categories` | `Array` |  |
| `completed` | `boolean` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `global_id` | `string` |  |
| `id` | `number` |  |
| `key_result_ids` | `Array` |  |
| `name` | `string` |  |
| `position` | `number` |  |
| `started` | `boolean` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `state` | `string` |  |
| `stats` | `Object` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const milestone = await client.Milestone().load({ id: 1 })
```

#### Example: List

```ts
const milestones = await client.Milestone().list()
```

#### Example: Create

```ts
const milestone = await client.Milestone().create({
  app_url: 'example_app_url',
  archived: true,
  categories: [],
  completed: true,
  completed_at: 'example_completed_at',
  completed_at_override: 'example_completed_at_override',
  created_at: 'example_created_at',
  description: 'example_description',
  entity_type: 'example_entity_type',
  global_id: 'example_global_id',
  id: 1,
  key_result_ids: [],
  name: 'example_name',
  position: 1,
  started: true,
  started_at: 'example_started_at',
  started_at_override: 'example_started_at_override',
  state: 'example_state',
  stats: {},
  updated_at: 'example_updated_at',
})
```


### Objectif

Create an instance: `const objectif = client.Objectif()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Objective

Create an instance: `const objective = client.Objective()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `number` |  |
| `app_url` | `string` |  |
| `archived` | `boolean` |  |
| `before_id` | `number` |  |
| `categories` | `Array` |  |
| `completed` | `boolean` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `global_id` | `string` |  |
| `id` | `number` |  |
| `key_result_ids` | `Array` |  |
| `name` | `string` |  |
| `position` | `number` |  |
| `started` | `boolean` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `state` | `string` |  |
| `stats` | `Object` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const objective = await client.Objective().load({ objective_public_id: 1 })
```

#### Example: List

```ts
const objectives = await client.Objective().list()
```

#### Example: Create

```ts
const objective = await client.Objective().create({
  app_url: 'example_app_url',
  archived: true,
  categories: [],
  completed: true,
  completed_at: 'example_completed_at',
  completed_at_override: 'example_completed_at_override',
  created_at: 'example_created_at',
  description: 'example_description',
  entity_type: 'example_entity_type',
  global_id: 'example_global_id',
  id: 1,
  key_result_ids: [],
  name: 'example_name',
  position: 1,
  started: true,
  started_at: 'example_started_at',
  started_at_override: 'example_started_at_override',
  state: 'example_state',
  stats: {},
  updated_at: 'example_updated_at',
})
```


### Project

Create an instance: `const project = client.Project()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abbreviation` | `string` |  |
| `app_url` | `string` |  |
| `archived` | `boolean` |  |
| `color` | `string` |  |
| `created_at` | `string` |  |
| `days_to_thermometer` | `number` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `follower_ids` | `Array` |  |
| `global_id` | `string` |  |
| `id` | `number` |  |
| `iteration_length` | `number` |  |
| `name` | `string` |  |
| `show_thermometer` | `boolean` |  |
| `start_time` | `string` |  |
| `stats` | `Object` |  |
| `team_id` | `number` |  |
| `updated_at` | `string` |  |
| `workflow_id` | `number` |  |

#### Example: Load

```ts
const project = await client.Project().load({ id: 1 })
```

#### Example: List

```ts
const projects = await client.Project().list()
```

#### Example: Create

```ts
const project = await client.Project().create({
  abbreviation: 'example_abbreviation',
  app_url: 'example_app_url',
  archived: true,
  color: 'example_color',
  created_at: 'example_created_at',
  days_to_thermometer: 1,
  description: 'example_description',
  entity_type: 'example_entity_type',
  external_id: 'example_external_id',
  follower_ids: [],
  global_id: 'example_global_id',
  id: 1,
  iteration_length: 1,
  name: 'example_name',
  show_thermometer: true,
  start_time: 'example_start_time',
  stats: {},
  team_id: 1,
  updated_at: 'example_updated_at',
  workflow_id: 1,
})
```


### Repository

Create an instance: `const repository = client.Repository()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `full_name` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const repository = await client.Repository().load({ id: 1 })
```

#### Example: List

```ts
const repositorys = await client.Repository().list()
```


### Search

Create an instance: `const search = client.Search()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `epics` | `Object` |  |
| `iterations` | `Object` |  |
| `milestones` | `Object` |  |
| `stories` | `Object` |  |

#### Example: Load

```ts
const search = await client.Search().load()
```


### Story

Create an instance: `const story = client.Story()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `number` |  |
| `app_url` | `string` |  |
| `archived` | `boolean` |  |
| `before_id` | `number` |  |
| `blocked` | `boolean` |  |
| `blocker` | `boolean` |  |
| `branch_ids` | `Array` |  |
| `branches` | `Array` |  |
| `comment_ids` | `Array` |  |
| `comments` | `Array` |  |
| `commit_ids` | `Array` |  |
| `commits` | `Array` |  |
| `completed` | `boolean` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `created_at` | `string` |  |
| `custom_fields` | `Array` |  |
| `custom_fields_add` | `Array` |  |
| `custom_fields_remove` | `Array` |  |
| `cycle_time` | `number` |  |
| `deadline` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `epic_id` | `number` |  |
| `estimate` | `number` |  |
| `external_id` | `string` |  |
| `external_links` | `Array` |  |
| `external_links_add` | `Array` |  |
| `external_links_remove` | `Array` |  |
| `file_ids` | `Array` |  |
| `file_ids_add` | `Array` |  |
| `file_ids_remove` | `Array` |  |
| `files` | `Array` |  |
| `follower_ids` | `Array` |  |
| `follower_ids_add` | `Array` |  |
| `follower_ids_remove` | `Array` |  |
| `formatted_vcs_branch_name` | `string` |  |
| `global_id` | `string` |  |
| `group_id` | `string` |  |
| `group_mention_ids` | `Array` |  |
| `id` | `number` |  |
| `iteration_id` | `number` |  |
| `label_ids` | `Array` |  |
| `labels` | `Array` |  |
| `labels_add` | `Array` |  |
| `labels_remove` | `Array` |  |
| `lead_time` | `number` |  |
| `linked_file_ids` | `Array` |  |
| `linked_file_ids_add` | `Array` |  |
| `linked_file_ids_remove` | `Array` |  |
| `linked_files` | `Array` |  |
| `member_mention_ids` | `Array` |  |
| `mention_ids` | `Array` |  |
| `move_to` | `string` |  |
| `moved_at` | `string` |  |
| `name` | `string` |  |
| `num_tasks_completed` | `number` |  |
| `owner_ids` | `Array` |  |
| `owner_ids_add` | `Array` |  |
| `owner_ids_remove` | `Array` |  |
| `parent_story_id` | `number` |  |
| `position` | `number` |  |
| `previous_iteration_ids` | `Array` |  |
| `project_id` | `number` |  |
| `pull_request_ids` | `Array` |  |
| `pull_requests` | `Array` |  |
| `requested_by_id` | `string` |  |
| `source_task_id` | `number` |  |
| `started` | `boolean` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `stats` | `Object` |  |
| `story_links` | `Array` |  |
| `story_template_id` | `string` |  |
| `story_type` | `string` |  |
| `sub_task_story_ids` | `Array` |  |
| `sub_tasks` | `Array` |  |
| `synced_item` | `Object` |  |
| `task_ids` | `Array` |  |
| `tasks` | `Array` |  |
| `updated_at` | `string` |  |
| `workflow_id` | `number` |  |
| `workflow_state_id` | `number` |  |

#### Example: Load

```ts
const story = await client.Story().load({ id: 1 })
```

#### Example: List

```ts
const storys = await client.Story().list()
```

#### Example: Create

```ts
const story = await client.Story().create({
  app_url: 'example_app_url',
  archived: true,
  blocked: true,
  blocker: true,
  branches: [],
  comments: [],
  commits: [],
  completed: true,
  completed_at: 'example_completed_at',
  completed_at_override: 'example_completed_at_override',
  created_at: 'example_created_at',
  deadline: 'example_deadline',
  description: 'example_description',
  entity_type: 'example_entity_type',
  epic_id: 1,
  estimate: 1,
  external_id: 'example_external_id',
  external_links: [],
  files: [],
  follower_ids: [],
  global_id: 'example_global_id',
  group_id: 'example_group_id',
  group_mention_ids: [],
  id: 1,
  iteration_id: 1,
  label_ids: [],
  labels: [],
  linked_files: [],
  member_mention_ids: [],
  mention_ids: [],
  moved_at: 'example_moved_at',
  name: 'example_name',
  owner_ids: [],
  position: 1,
  previous_iteration_ids: [],
  project_id: 1,
  pull_requests: [],
  requested_by_id: 'example_requested_by_id',
  started: true,
  started_at: 'example_started_at',
  started_at_override: 'example_started_at_override',
  stats: {},
  story_links: [],
  story_template_id: 'example_story_template_id',
  story_type: 'example_story_type',
  synced_item: {},
  tasks: [],
  updated_at: 'example_updated_at',
  workflow_id: 1,
  workflow_state_id: 1,
})
```


### StoryComment

Create an instance: `const story_comment = client.StoryComment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` |  |
| `author_id` | `string` |  |
| `blocker` | `boolean` |  |
| `created_at` | `string` |  |
| `deleted` | `boolean` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `group_mention_ids` | `Array` |  |
| `id` | `number` |  |
| `linked_to_slack` | `boolean` |  |
| `member_mention_ids` | `Array` |  |
| `mention_ids` | `Array` |  |
| `parent_id` | `number` |  |
| `position` | `number` |  |
| `reactions` | `Array` |  |
| `story_id` | `number` |  |
| `text` | `string` |  |
| `unblocks_parent` | `boolean` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const story_comment = await client.StoryComment().load({ id: 1, story_id: 1 })
```

#### Example: List

```ts
const story_comments = await client.StoryComment().list()
```

#### Example: Create

```ts
const story_comment = await client.StoryComment().create({
  app_url: 'example_app_url',
  author_id: 'example_author_id',
  created_at: 'example_created_at',
  deleted: true,
  entity_type: 'example_entity_type',
  external_id: 'example_external_id',
  group_mention_ids: [],
  linked_to_slack: true,
  member_mention_ids: [],
  mention_ids: [],
  position: 1,
  reactions: [],
  text: 'example_text',
  updated_at: 'example_updated_at',
})
```


### StoryLink

Create an instance: `const story_link = client.StoryLink()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `entity_type` | `string` |  |
| `id` | `number` |  |
| `object_id` | `number` |  |
| `subject_id` | `number` |  |
| `subject_workflow_state_id` | `number` |  |
| `updated_at` | `string` |  |
| `verb` | `string` |  |

#### Example: Load

```ts
const story_link = await client.StoryLink().load({ id: 1 })
```

#### Example: Create

```ts
const story_link = await client.StoryLink().create({
  created_at: 'example_created_at',
  entity_type: 'example_entity_type',
  id: 1,
  object_id: 1,
  subject_id: 1,
  subject_workflow_state_id: 1,
  updated_at: 'example_updated_at',
  verb: 'example_verb',
})
```


### StoryReaction

Create an instance: `const story_reaction = client.StoryReaction()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `emoji` | `string` |  |

#### Example: Create

```ts
const story_reaction = await client.StoryReaction().create({
  comment_id: 1,
  story_id: 1,
  emoji: 'example_emoji',
})
```


### StorySlim

Create an instance: `const story_slim = client.StorySlim()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `number` |  |
| `archived` | `boolean` |  |
| `before_id` | `number` |  |
| `completed_at_end` | `string` |  |
| `completed_at_start` | `string` |  |
| `created_at_end` | `string` |  |
| `created_at_start` | `string` |  |
| `custom_fields_add` | `Array` |  |
| `custom_fields_remove` | `Array` |  |
| `deadline` | `string` |  |
| `deadline_end` | `string` |  |
| `deadline_start` | `string` |  |
| `epic_id` | `number` |  |
| `epic_ids` | `Array` |  |
| `estimate` | `number` |  |
| `external_id` | `string` |  |
| `external_links` | `Array` |  |
| `follower_ids_add` | `Array` |  |
| `follower_ids_remove` | `Array` |  |
| `group_id` | `string` |  |
| `group_ids` | `Array` |  |
| `includes_description` | `boolean` |  |
| `iteration_id` | `number` |  |
| `iteration_ids` | `Array` |  |
| `label_ids` | `Array` |  |
| `label_name` | `string` |  |
| `labels_add` | `Array` |  |
| `labels_remove` | `Array` |  |
| `move_to` | `string` |  |
| `owner_id` | `string` |  |
| `owner_ids` | `Array` |  |
| `owner_ids_add` | `Array` |  |
| `owner_ids_remove` | `Array` |  |
| `project_id` | `number` |  |
| `project_ids` | `Array` |  |
| `requested_by_id` | `string` |  |
| `stories` | `Array` |  |
| `story_ids` | `Array` |  |
| `story_type` | `string` |  |
| `updated_at_end` | `string` |  |
| `updated_at_start` | `string` |  |
| `workflow_state_id` | `number` |  |
| `workflow_state_types` | `Array` |  |

#### Example: Create

```ts
const story_slim = await client.StorySlim().create({
  stories: [],
  story_ids: [],
})
```


### Task

Create an instance: `const task = client.Task()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `number` |  |
| `before_id` | `number` |  |
| `complete` | `boolean` |  |
| `completed_at` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `global_id` | `string` |  |
| `group_mention_ids` | `Array` |  |
| `id` | `number` |  |
| `member_mention_ids` | `Array` |  |
| `mention_ids` | `Array` |  |
| `owner_ids` | `Array` |  |
| `position` | `number` |  |
| `story_id` | `number` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const task = await client.Task().load({ id: 1, story_id: 1 })
```

#### Example: Create

```ts
const task = await client.Task().create({
  story_id: 1,
  complete: true,
  completed_at: 'example_completed_at',
  created_at: 'example_created_at',
  description: 'example_description',
  entity_type: 'example_entity_type',
  external_id: 'example_external_id',
  global_id: 'example_global_id',
  group_mention_ids: [],
  id: 1,
  member_mention_ids: [],
  mention_ids: [],
  owner_ids: [],
  position: 1,
  updated_at: 'example_updated_at',
})
```


### ThreadedComment

Create an instance: `const threaded_comment = client.ThreadedComment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` |  |
| `author_id` | `string` |  |
| `comments` | `Array` |  |
| `created_at` | `string` |  |
| `deleted` | `boolean` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `group_mention_ids` | `Array` |  |
| `id` | `number` |  |
| `member_mention_ids` | `Array` |  |
| `mention_ids` | `Array` |  |
| `text` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const threaded_comment = await client.ThreadedComment().load({ id: 1, epic_id: 1 })
```

#### Example: List

```ts
const threaded_comments = await client.ThreadedComment().list()
```

#### Example: Create

```ts
const threaded_comment = await client.ThreadedComment().create({
  epic_id: 1,
  app_url: 'example_app_url',
  author_id: 'example_author_id',
  comments: [],
  created_at: 'example_created_at',
  deleted: true,
  entity_type: 'example_entity_type',
  external_id: 'example_external_id',
  group_mention_ids: [],
  member_mention_ids: [],
  mention_ids: [],
  text: 'example_text',
  updated_at: 'example_updated_at',
})
```


### UploadedFile

Create an instance: `const uploaded_file = client.UploadedFile()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `filename` | `string` |  |
| `group_mention_ids` | `Array` |  |
| `id` | `number` |  |
| `member_mention_ids` | `Array` |  |
| `mention_ids` | `Array` |  |
| `name` | `string` |  |
| `size` | `number` |  |
| `story_ids` | `Array` |  |
| `thumbnail_url` | `string` |  |
| `updated_at` | `string` |  |
| `uploader_id` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const uploaded_file = await client.UploadedFile().load({ id: 1 })
```

#### Example: List

```ts
const uploaded_files = await client.UploadedFile().list()
```

#### Example: Create

```ts
const uploaded_file = await client.UploadedFile().create({
  content_type: 'example_content_type',
  created_at: 'example_created_at',
  description: 'example_description',
  entity_type: 'example_entity_type',
  external_id: 'example_external_id',
  filename: 'example_filename',
  group_mention_ids: [],
  id: 1,
  member_mention_ids: [],
  mention_ids: [],
  name: 'example_name',
  size: 1,
  story_ids: [],
  thumbnail_url: 'example_thumbnail_url',
  updated_at: 'example_updated_at',
  uploader_id: 'example_uploader_id',
  url: 'example_url',
})
```


### Webhook

Create an instance: `const webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `secret` | `string` |  |
| `webhook_url` | `string` |  |

#### Example: Load

```ts
const webhook = await client.Webhook().load({ id: 1 })
```

#### Example: Create

```ts
const webhook = await client.Webhook().create({
  webhook_url: 'example_webhook_url',
})
```


### Workflow

Create an instance: `const workflow = client.Workflow()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_assign_owner` | `boolean` |  |
| `created_at` | `string` |  |
| `default_state_id` | `number` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `project_ids` | `Array` |  |
| `states` | `Array` |  |
| `team_id` | `number` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const workflow = await client.Workflow().load({ id: 1 })
```

#### Example: List

```ts
const workflows = await client.Workflow().list()
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
shortcut/
├── src/
│   ├── ShortcutSDK.js        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
└── test/                   # Test suites
```

Import the SDK from the package root:

```js
const { ShortcutSDK } = require('@voxgig-sdk/shortcut-js')
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const iteration = client.Iteration()
await iteration.list()

// iteration.data() now returns the iteration data from the last `list`
// iteration.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

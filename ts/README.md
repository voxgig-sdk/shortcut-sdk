# Shortcut TypeScript SDK



The TypeScript SDK for the Shortcut API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Bulk()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `js`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/shortcut-sdk/releases](https://github.com/voxgig-sdk/shortcut-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { ShortcutSDK } from '@voxgig-sdk/shortcut'

const client = new ShortcutSDK({
  apikey: process.env.SHORTCUT_APIKEY,
})
```

### 3. Load a health

Health is nested under epic, so provide the `epic_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const health = await client.Health().load({
    epic_id: 1,
  })
  console.log(health)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Remove
await client.Bulk().remove()
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

```ts
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

```ts
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

```ts
const client = ShortcutSDK.test()

const iteration = await client.Iteration().list()
// iteration is the entity, populated with mock response data
// — call iteration.data() for the record itself
console.log(iteration)
```

You can also use the instance method:

```ts
const client = new ShortcutSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Iteration()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
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
cd ts && npm test
```


## Reference

### ShortcutSDK

#### Constructor

```ts
new ShortcutSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
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
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
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
| `archived` | A true/false boolean indicating if the Category has been archived. |
| `color` | The hex color to be displayed with the Category (for example, "#ff0000"). |
| `created_at` | The time/date that the Category was created. |
| `entity_type` | A string description of this resource. |
| `external_id` | This field can be set to another unique ID. |
| `global_id` | The Global ID of the Category. |
| `id` | The unique ID of the Category. |
| `name` | The name of the Category. |
| `type` | The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category. |
| `updated_at` | The time/date that the Category was updated. |

Operations: create, list, load, remove, update.

API path: `/api/v3/categories`

#### Comment

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/api/v3/stories/{story-public-id}/comments/{comment-public-id}`

#### CustomField

| Field | Description |
| --- | --- |
| `after_id` | The ID of the CustomField we want to move this CustomField after. |
| `before_id` | The ID of the CustomField we want to move this CustomField before. |
| `canonical_name` | The canonical name for a Shortcut-defined field. |
| `created_at` | The instant when this CustomField was created. |
| `description` | A string description of the CustomField |
| `enabled` | When true, the CustomField can be applied to entities in the Workspace. |
| `entity_type` | A string description of this resource. |
| `field_type` | The type of Custom Field, eg. |
| `fixed_position` | When true, the CustomFieldEnumValues may not be reordered. |
| `icon_set_identifier` | A string that represents the icon that corresponds to this custom field. |
| `id` | The unique public ID for the CustomField. |
| `name` | The name of the Custom Field. |
| `position` | An integer indicating the position of this Custom Field with respect to the other CustomField |
| `story_types` | The types of stories this CustomField is scoped to. |
| `updated_at` | The instant when this CustomField was last updated. |
| `values` | A collection of legal values for a CustomField. |

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
| `app_url` | The Shortcut application url for the Doc. |
| `content` | The content for the new document |
| `id` | The public id of the Doc |
| `title` | The title for the new document |

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
| `author_id` | The id of the user creating this template. |
| `created_at` | The time/date when the entity template was created. |
| `custom_fields` | An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | The due date of the story. |
| `description` | The description of the story. |
| `entity_type` | A string description of this resource. |
| `epic_id` | The ID of the epic the story belongs to. |
| `estimate` | The numeric point estimate of the story. |
| `external_links` | An array of external links connected to the story. |
| `files` | An array of files attached to the story. |
| `follower_ids` | An array of UUIDs for any Members listed as Followers. |
| `group_id` | The ID of the group to which the story is assigned. |
| `id` | The unique identifier for the entity template. |
| `iteration_id` | The ID of the iteration the story belongs to. |
| `label_ids` | An array of label ids attached to the story. |
| `labels` | An array of labels attached to the story. |
| `last_used_at` | The last time that someone created an entity using this template. |
| `linked_files` | An array of linked files attached to the story. |
| `name` | The name of the story. |
| `owner_ids` | An array of UUIDs of the owners of this story. |
| `project_id` | The ID of the project the story belongs to. |
| `story_contents` | A map of story attributes this template populates. |
| `story_type` | The type of story (feature, bug, chore). |
| `sub_tasks` | An array of sub-tasks connected to the story |
| `tasks` | An array of tasks connected to the story. |
| `updated_at` | The time/date when the entity template was last updated. |
| `workflow_state_id` | The ID of the workflow state the story is currently in. |

Operations: create, list, load, remove, update.

API path: `/api/v3/entity-templates`

#### Epic

| Field | Description |
| --- | --- |
| `after_id` | The ID of the Epic we want to move this Epic after. |
| `app_url` | The Shortcut application url for the Epic. |
| `archived` | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `before_id` | The ID of the Epic we want to move this Epic before. |
| `comments` | A nested array of threaded comments. |
| `completed` | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | The time/date the Epic was completed. |
| `completed_at_override` | A manual override for the time/date the Epic was completed. |
| `converted_from_story_id` | The ID of the Story that was converted to an Epic. |
| `created_at` | The time/date the Epic was created. |
| `deadline` | The Epic's deadline. |
| `description` | The Epic's description. |
| `entity_type` | A string description of this resource. |
| `epic_state_id` | The ID of the Epic State. |
| `external_id` | This field can be set to another unique ID. |
| `follower_ids` | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` |  |
| `group_id` | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | An array of Group IDs that have been mentioned in the Epic description. |
| `health` | The current health status of the Epic. |
| `id` | The unique ID of the Epic. |
| `label_ids` | An array of Label ids attached to the Epic. |
| `labels` | An array of Labels attached to the Epic. |
| `member_mention_ids` | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | The name of the Epic. |
| `objective_ids` | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | The Epic's planned start date. |
| `position` | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | The ID of the associated productboard feature. |
| `productboard_name` | The name of the associated productboard feature. |
| `productboard_plugin_id` | The ID of the associated productboard integration. |
| `productboard_url` | The URL of the associated productboard feature. |
| `project_ids` | The IDs of Projects related to this Epic. |
| `requested_by_id` | The ID of the Member that requested the epic. |
| `started` | A true/false boolean indicating if the Epic has been started. |
| `started_at` | The time/date the Epic was started. |
| `started_at_override` | A manual override for the time/date the Epic was started. |
| `state` | `Deprecated` The workflow state that the Epic is in. |
| `stats` | A group of calculated values for this Epic. |
| `stories_without_projects` | The number of stories in this epic which are not associated with a project. |
| `updated_at` | The time/date the Epic was updated. |

Operations: create, list, load, remove, update.

API path: `/api/v3/epics`

#### EpicPaginatedResult

| Field | Description |
| --- | --- |
| `app_url` | The Shortcut application url for the Epic. |
| `archived` | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `completed` | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | The time/date the Epic was completed. |
| `completed_at_override` | A manual override for the time/date the Epic was completed. |
| `created_at` | The time/date the Epic was created. |
| `deadline` | The Epic's deadline. |
| `description` | The Epic's description. |
| `entity_type` | A string description of this resource. |
| `epic_state_id` | The ID of the Epic State. |
| `external_id` | This field can be set to another unique ID. |
| `follower_ids` | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` |  |
| `group_id` | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | An array of Group IDs that have been mentioned in the Epic description. |
| `id` | The unique ID of the Epic. |
| `label_ids` | An array of Label ids attached to the Epic. |
| `labels` | An array of Labels attached to the Epic. |
| `member_mention_ids` | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | The name of the Epic. |
| `objective_ids` | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | The Epic's planned start date. |
| `position` | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | The ID of the associated productboard feature. |
| `productboard_name` | The name of the associated productboard feature. |
| `productboard_plugin_id` | The ID of the associated productboard integration. |
| `productboard_url` | The URL of the associated productboard feature. |
| `project_ids` | The IDs of Projects related to this Epic. |
| `requested_by_id` | The ID of the Member that requested the epic. |
| `started` | A true/false boolean indicating if the Epic has been started. |
| `started_at` | The time/date the Epic was started. |
| `started_at_override` | A manual override for the time/date the Epic was started. |
| `state` | `Deprecated` The workflow state that the Epic is in. |
| `stats` | A group of calculated values for this Epic. |
| `stories_without_projects` | The number of stories in this epic which are not associated with a project. |
| `updated_at` | The time/date the Epic was updated. |

Operations: list.

API path: `/api/v3/epics/paginated`

#### EpicUnlinkProductboard

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create.

API path: `/api/v3/epics/{epic-public-id}/unlink-productboard`

#### EpicWorkflow

| Field | Description |
| --- | --- |
| `color` | The hex color for this Epic State. |
| `created_at` | The time/date the Epic State was created. |
| `description` | The description of what sort of Epics belong in that Epic State. |
| `entity_type` | A string description of this resource. |
| `global_id` |  |
| `id` | The unique ID of the Epic State. |
| `name` | The Epic State's name. |
| `position` | The position that the Epic State is in, starting with 0 at the left. |
| `type` | The type of Epic State (Unstarted, Started, or Done) |
| `updated_at` | When the Epic State was last updated. |

Operations: list.

API path: `/api/v3/epic-workflow`

#### Group

| Field | Description |
| --- | --- |
| `app_url` | The Shortcut application url for the Group. |
| `archived` | Whether or not the Group is archived. |
| `color` | The hex color to be displayed with the Group (for example, "#ff0000"). |
| `color_key` | The color key to be displayed with the Group. |
| `created_at` | The instant when this group was created. |
| `default_workflow_id` | The ID of the default workflow for stories created in this group. |
| `description` | The description of the Group. |
| `display_icon` | Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application. |
| `display_icon_id` | The Icon id for the avatar of this Group. |
| `entity_type` | A string description of this resource. |
| `global_id` |  |
| `id` | The id of the Group. |
| `member_ids` | The Member IDs contain within the Group. |
| `mention_name` | The mention name of the Group. |
| `name` | The name of the Group. |
| `num_epics_started` | The number of epics assigned to the group which are in the started workflow state. |
| `num_stories` | The total number of stories assigned to the group. |
| `num_stories_backlog` | The number of stories assigned to the group which are in a backlog workflow state. |
| `num_stories_started` | The number of stories assigned to the group which are in a started workflow state. |
| `updated_at` | The last instant when this group was updated. |
| `workflow_ids` | The Workflow IDs contained within the Group. |

Operations: create, list, load, update.

API path: `/api/v3/groups`

#### Health

| Field | Description |
| --- | --- |
| `author_id` | The ID of the permission who created or updated the Health record. |
| `created_at` | The time that the Health record was created. |
| `entity_type` | A string description of this resource. |
| `epic_id` | The ID of the Epic associated with this Health record. |
| `id` | The unique ID of the Health record. |
| `objective_id` | The ID of the Objective associated with this Health record. |
| `status` | The health status of the Epic or Objective. |
| `text` | The text of the Health record. |
| `updated_at` | The time that the Health record was updated. |

Operations: create, list, load, update.

API path: `/api/v3/epics/{epic-public-id}/health`

#### History

| Field | Description |
| --- | --- |
| `actions` | An array of actions that were performed for the change. |
| `actor_name` | The name of the actor that performed the action, if it can be determined. |
| `automation_id` | The ID of the automation that performed the change. |
| `changed_at` | The date when the change occurred. |
| `external_id` | The ID of the webhook that handled the change. |
| `id` | The ID representing the change for the story. |
| `member_id` | The ID of the member who performed the change. |
| `primary_id` | The ID of the primary entity that has changed, if applicable. |
| `references` | An array of objects affected by the change. |
| `version` | The version of the change format. |
| `webhook_id` | The ID of the webhook that handled the change. |

Operations: list.

API path: `/api/v3/stories/{story-public-id}/history`

#### Iteration

| Field | Description |
| --- | --- |
| `app_url` | The Shortcut application url for the Iteration. |
| `associated_groups` | An array containing Group IDs and Group-owned story counts for the Iteration's associated groups. |
| `created_at` | The instant when this iteration was created. |
| `description` | The description of the iteration. |
| `end_date` | The date this iteration ends. |
| `entity_type` | A string description of this resource |
| `follower_ids` | An array of UUIDs for any Members listed as Followers. |
| `global_id` |  |
| `group_ids` | An array of UUIDs for any Groups you want to add as Followers. |
| `group_mention_ids` | An array of Group IDs that have been mentioned in the Story description. |
| `id` | The ID of the iteration. |
| `label_ids` | An array of label ids attached to the iteration. |
| `labels` | An array of labels attached to the iteration. |
| `member_mention_ids` | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `Deprecated:` use `member_mention_ids`. |
| `name` | The name of the iteration. |
| `start_date` | The date this iteration begins. |
| `stats` | A group of calculated values for this Iteration. |
| `status` | The status of the iteration. |
| `updated_at` | The instant when this iteration was last updated. |

Operations: create, list, load, remove, update.

API path: `/api/v3/iterations`

#### KeyResult

| Field | Description |
| --- | --- |
| `current_observed_value` | The starting value of the Key Result. |
| `current_target_value` | The starting value of the Key Result. |
| `id` | The ID of the Key Result. |
| `initial_observed_value` | The starting value of the Key Result. |
| `name` | The name of the Key Result. |
| `objective_id` | The Objective to which this Key Result belongs. |
| `observed_value` | The starting value of the Key Result. |
| `progress` | The integer percentage of progress toward completion of the Key Result. |
| `target_value` | The starting value of the Key Result. |
| `type` | The type of the Key Result (numeric, percent, or boolean). |

Operations: load, update.

API path: `/api/v3/key-results/{key-result-public-id}`

#### Label

| Field | Description |
| --- | --- |
| `app_url` | The Shortcut application url for the Label. |
| `archived` | A true/false boolean indicating if the Label has been archived. |
| `color` | The hex color to be displayed with the Label (for example, "#ff0000"). |
| `created_at` | The time/date that the Label was created. |
| `description` | The description of the new Label. |
| `entity_type` | A string description of this resource. |
| `external_id` | This field can be set to another unique ID. |
| `global_id` |  |
| `id` | The unique ID of the Label. |
| `name` | The name of the new Label. |
| `num_epics` | The total number of Epics with this Label. |
| `num_epics_completed` | The number of completed Epics associated with this Label. |
| `num_epics_in_progress` | The number of in progress epics associated with this label. |
| `num_epics_total` | The total number of Epics associated with this Label. |
| `num_epics_unstarted` | The number of unstarted epics associated with this label. |
| `num_points_backlog` | The total number of backlog points with this Label. |
| `num_points_completed` | The total number of completed points with this Label. |
| `num_points_in_progress` | The total number of in-progress points with this Label. |
| `num_points_total` | The total number of points with this Label. |
| `num_points_unstarted` | The total number of unstarted points with this Label. |
| `num_related_documents` | The total number of Documents associated this Label. |
| `num_stories_backlog` | The total number of stories backlog Stories with this Label. |
| `num_stories_completed` | The total number of completed Stories with this Label. |
| `num_stories_in_progress` | The total number of in-progress Stories with this Label. |
| `num_stories_total` | The total number of Stories with this Label. |
| `num_stories_unestimated` | The total number of Stories with no point estimate with this Label. |
| `num_stories_unstarted` | The total number of stories unstarted Stories with this Label. |
| `stats` | A group of calculated values for this Label. |
| `updated_at` | The time/date that the Label was updated. |

Operations: create, list, load, remove, update.

API path: `/api/v3/labels`

#### LinkedFile

| Field | Description |
| --- | --- |
| `content_type` | The content type of the image (e.g. |
| `created_at` | The time/date the LinkedFile was created. |
| `description` | The description of the file. |
| `entity_type` | A string description of this resource. |
| `group_mention_ids` | The groups that are mentioned in the description of the file. |
| `id` | The unique identifier for the file. |
| `member_mention_ids` | The members that are mentioned in the description of the file. |
| `mention_ids` | `Deprecated:` use `member_mention_ids`. |
| `name` | The name of the linked file. |
| `size` | The filesize, if the integration provided it. |
| `story_id` | The ID of the linked story. |
| `story_ids` | The IDs of the stories this file is attached to. |
| `thumbnail_url` | The URL of the file thumbnail, if the integration provided it. |
| `type` | The integration type (e.g. |
| `updated_at` | The time/date the LinkedFile was updated. |
| `uploader_id` | The UUID of the member that uploaded the file. |
| `url` | The URL of the file. |

Operations: create, list, load, remove, update.

API path: `/api/v3/linked-files`

#### Member

| Field | Description |
| --- | --- |
| `created_at` | The time/date the Member was created. |
| `created_without_invite` | Whether this member was created as a placeholder entity. |
| `disabled` | True/false boolean indicating whether the Member has been disabled within the Workspace. |
| `entity_type` | A string description of this resource. |
| `global_id` |  |
| `group_ids` | The Member's group ids |
| `id` | The Member's ID in Shortcut. |
| `installation_id` | Only set for agents. |
| `is_owner` |  |
| `mention_name` |  |
| `name` |  |
| `organization2` |  |
| `profile` | A group of Member profile details. |
| `replaced_by` | The id of the member that replaces this one when merged. |
| `role` | The Member's role in the Workspace. |
| `state` | The user state, one of partial, full, disabled, or imported. |
| `updated_at` | The time/date the Member was last updated. |
| `workspace2` |  |

Operations: list, load.

API path: `/api/v3/members`

#### Milestone

| Field | Description |
| --- | --- |
| `after_id` | The ID of the Milestone we want to move this Milestone after. |
| `app_url` | The Shortcut application url for the Milestone. |
| `archived` | A boolean indicating whether the Milestone has been archived or not. |
| `before_id` | The ID of the Milestone we want to move this Milestone before. |
| `categories` | An array of Categories attached to the Milestone. |
| `completed` | A true/false boolean indicating if the Milestone has been completed. |
| `completed_at` | The time/date the Milestone was completed. |
| `completed_at_override` | A manual override for the time/date the Milestone was completed. |
| `created_at` | The time/date the Milestone was created. |
| `description` | The Milestone's description. |
| `entity_type` | A string description of this resource. |
| `global_id` |  |
| `id` | The unique ID of the Milestone. |
| `key_result_ids` | The IDs of the Key Results associated with the Objective. |
| `name` | The name of the Milestone. |
| `position` | A number representing the position of the Milestone in relation to every other Milestone within the Workspace. |
| `started` | A true/false boolean indicating if the Milestone has been started. |
| `started_at` | The time/date the Milestone was started. |
| `started_at_override` | A manual override for the time/date the Milestone was started. |
| `state` | The workflow state that the Milestone is in. |
| `stats` | A group of calculated values for this Milestone. |
| `updated_at` | The time/date the Milestone was updated. |

Operations: create, list, load, remove, update.

API path: `/api/v3/milestones`

#### Objectif

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/api/v3/objectives/{objective-public-id}`

#### Objective

| Field | Description |
| --- | --- |
| `after_id` | The ID of the Objective we want to move this Objective after. |
| `app_url` | The Shortcut application url for the Objective. |
| `archived` | A boolean indicating whether the Objective has been archived or not. |
| `before_id` | The ID of the Objective we want to move this Objective before. |
| `categories` | An array of Categories attached to the Objective. |
| `completed` | A true/false boolean indicating if the Objectivehas been completed. |
| `completed_at` | The time/date the Objective was completed. |
| `completed_at_override` | A manual override for the time/date the Objective was completed. |
| `created_at` | The time/date the Objective was created. |
| `description` | The Objective's description. |
| `entity_type` | A string description of this resource. |
| `global_id` |  |
| `id` | The unique ID of the Objective. |
| `key_result_ids` | The IDs of the Key Results associated with the Objective. |
| `name` | The name of the Objective. |
| `position` | A number representing the position of the Objective in relation to every other Objective within the Workspace. |
| `started` | A true/false boolean indicating if the Objective has been started. |
| `started_at` | The time/date the Objective was started. |
| `started_at_override` | A manual override for the time/date the Objective was started. |
| `state` | The workflow state that the Objective is in. |
| `stats` | A group of calculated values for this Objective. |
| `updated_at` | The time/date the Objective was updated. |

Operations: create, list, load, update.

API path: `/api/v3/objectives`

#### Project

| Field | Description |
| --- | --- |
| `abbreviation` | The Project abbreviation used in Story summaries. |
| `app_url` | The Shortcut application url for the Project. |
| `archived` | True/false boolean indicating whether the Project is in an Archived state. |
| `color` | The color associated with the Project in the Shortcut member interface. |
| `created_at` | The time/date that the Project was created. |
| `days_to_thermometer` | The number of days before the thermometer appears in the Story summary. |
| `description` | The description of the Project. |
| `entity_type` | A string description of this resource. |
| `external_id` | This field can be set to another unique ID. |
| `follower_ids` | An array of UUIDs for any Members listed as Followers. |
| `global_id` | The Global ID of the Project. |
| `id` | The unique ID of the Project. |
| `iteration_length` | The number of weeks per iteration in this Project. |
| `name` | The name of the Project |
| `show_thermometer` | Configuration to enable or disable thermometers in the Story summary. |
| `start_time` | The date at which the Project was started. |
| `stats` | A group of calculated values for this Project. |
| `team_id` | The ID of the team the project belongs to. |
| `updated_at` | The time/date that the Project was last updated. |
| `workflow_id` | The ID of the workflow the project belongs to. |

Operations: create, list, load, remove, update.

API path: `/api/v3/projects`

#### Repository

| Field | Description |
| --- | --- |
| `created_at` | The time/date the Repository was created. |
| `entity_type` | A string description of this resource. |
| `external_id` | The VCS unique identifier for the Repository. |
| `full_name` | The full name of the VCS repository. |
| `id` | The ID associated to the VCS repository in Shortcut. |
| `name` | The shorthand name of the VCS repository. |
| `type` | The VCS provider for the Repository. |
| `updated_at` | The time/date the Repository was updated. |
| `url` | The URL of the Repository. |

Operations: list, load.

API path: `/api/v3/repositories`

#### Search

| Field | Description |
| --- | --- |
| `epics` | The results of the Epic search query. |
| `iterations` | The results of the Iteration search query. |
| `milestones` | The results of the Objective search query. |
| `stories` | The results of the Story search query. |

Operations: load.

API path: `/api/v3/search`

#### Story

| Field | Description |
| --- | --- |
| `after_id` | The ID of the story we want to move this story after. |
| `app_url` | The Shortcut application url for the Story. |
| `archived` | True if the story has been archived or not. |
| `before_id` | The ID of the story we want to move this story before. |
| `blocked` | A true/false boolean indicating if the Story is currently blocked. |
| `blocker` | A true/false boolean indicating if the Story is currently a blocker of another story. |
| `branch_ids` | An array of IDs of Branches attached to the story. |
| `branches` | An array of Git branches attached to the story. |
| `comment_ids` | An array of IDs of Comments attached to the story. |
| `comments` | An array of comments attached to the story. |
| `commit_ids` | An array of IDs of Commits attached to the story. |
| `commits` | An array of commits attached to the story. |
| `completed` | A true/false boolean indicating if the Story has been completed. |
| `completed_at` | The time/date the Story was completed. |
| `completed_at_override` | A manual override for the time/date the Story was completed. |
| `created_at` | The time/date the Story was created. |
| `custom_fields` | An array of CustomField value assertions for the story. |
| `custom_fields_add` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | A map specifying a CustomField ID. |
| `cycle_time` | The cycle time (in seconds) of this story when complete. |
| `deadline` | The due date of the story. |
| `description` | The description of the story. |
| `entity_type` | A string description of this resource. |
| `epic_id` | The ID of the epic the story belongs to. |
| `estimate` | The numeric point estimate of the story. |
| `external_id` | This field can be set to another unique ID. |
| `external_links` | An array of external links (strings) associated with a Story |
| `external_links_add` | An array of External Links associated with this story. |
| `external_links_remove` | An array of External Links associated with this story. |
| `file_ids` | An array of IDs of files attached to the story. |
| `file_ids_add` | An array of IDs of files attached to the story in addition to files from the template. |
| `file_ids_remove` | An array of IDs of files removed from files from the template. |
| `files` | An array of files attached to the story. |
| `follower_ids` | An array of UUIDs for any Members listed as Followers. |
| `follower_ids_add` | The UUIDs of the new followers to be added in addition to followers from the template. |
| `follower_ids_remove` | The UUIDs of the new followers to be removed from followers from the template. |
| `formatted_vcs_branch_name` | The formatted branch name for this story. |
| `global_id` |  |
| `group_id` | The ID of the group associated with the story. |
| `group_mention_ids` | An array of Group IDs that have been mentioned in the Story description. |
| `id` | The unique ID of the Story. |
| `iteration_id` | The ID of the iteration the story belongs to. |
| `label_ids` | An array of label ids attached to the story. |
| `labels` | An array of labels attached to the story. |
| `labels_add` | An array of labels attached to the story in addition to the labels provided by the template. |
| `labels_remove` | An array of labels to remove from the labels provided by the template. |
| `lead_time` | The lead time (in seconds) of this story when complete. |
| `linked_file_ids` | An array of IDs of linked files attached to the story. |
| `linked_file_ids_add` | An array of IDs of linked files attached to the story in addition to files from the template. |
| `linked_file_ids_remove` | An array of IDs of linked files removed from files from the template. |
| `linked_files` | An array of linked files attached to the story. |
| `member_mention_ids` | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `Deprecated:` use `member_mention_ids`. |
| `move_to` | One of "first" or "last". |
| `moved_at` | The time/date the Story was last changed workflow-state. |
| `name` | The name of the story. |
| `num_tasks_completed` | The number of tasks on the story which are complete. |
| `owner_ids` | An array of UUIDs of the owners of this story. |
| `owner_ids_add` | The UUIDs of the new owners to be added in addition to owners from the template. |
| `owner_ids_remove` | The UUIDs of the new owners to be removed from owners from the template. |
| `parent_story_id` | The id of the parent story to associate with this story. |
| `position` | A number representing the position of the story in relation to every other story in the current project. |
| `previous_iteration_ids` | The IDs of the iteration the story belongs to. |
| `project_id` | The ID of the project the story belongs to. |
| `pull_request_ids` | An array of IDs of Pull/Merge Requests attached to the story. |
| `pull_requests` | An array of Pull/Merge Requests attached to the story. |
| `requested_by_id` | The ID of the Member that requested the story. |
| `source_task_id` | Given this story was converted from a task in another story, this is the original task ID that was converted to this story. |
| `started` | A true/false boolean indicating if the Story has been started. |
| `started_at` | The time/date the Story was started. |
| `started_at_override` | A manual override for the time/date the Story was started. |
| `stats` | The stats object for Stories |
| `story_links` | An array of story links attached to the Story. |
| `story_template_id` | The ID of the story template used to create this story, or null if not created using a template. |
| `story_type` | The type of story (feature, bug, chore). |
| `sub_task_story_ids` |  |
| `sub_tasks` | A list of either params to create a new sub-task or link an existing story as a sub-task |
| `synced_item` | The synced item for the story. |
| `task_ids` | An array of IDs of Tasks attached to the story. |
| `tasks` | An array of tasks connected to the story. |
| `updated_at` | The time/date the Story was updated. |
| `workflow_id` | The ID of the workflow the story belongs to. |
| `workflow_state_id` | The ID of the workflow state the story is currently in. |

Operations: create, list, load, remove, update.

API path: `/api/v3/stories`

#### StoryComment

| Field | Description |
| --- | --- |
| `app_url` | The Shortcut application url for the Comment. |
| `author_id` | The unique ID of the Member who is the Comment's author. |
| `blocker` | Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment. |
| `created_at` | The time/date when the Comment was created. |
| `deleted` | True/false boolean indicating whether the Comment has been deleted. |
| `entity_type` | A string description of this resource. |
| `external_id` | This field can be set to another unique ID. |
| `group_mention_ids` | The unique IDs of the Group who are mentioned in the Comment. |
| `id` | The unique ID of the Comment. |
| `linked_to_slack` | Whether the Comment is currently the root of a thread that is linked to Slack. |
| `member_mention_ids` | The unique IDs of the Member who are mentioned in the Comment. |
| `mention_ids` | `Deprecated:` use `member_mention_ids`. |
| `parent_id` | The ID of the parent Comment this Comment is threaded under. |
| `position` | The Comments numerical position in the list from oldest to newest. |
| `reactions` | A set of Reactions to this Comment. |
| `story_id` | The ID of the Story on which the Comment appears. |
| `text` | The text of the Comment. |
| `unblocks_parent` | Marks the comment as an unblocker to its blocker parent. |
| `updated_at` | The time/date when the Comment was updated. |

Operations: create, list, load, update.

API path: `/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack`

#### StoryLink

| Field | Description |
| --- | --- |
| `created_at` | The time/date when the Story Link was created. |
| `entity_type` | A string description of this resource. |
| `id` | The unique identifier of the Story Link. |
| `object_id` | The ID of the object Story. |
| `subject_id` | The ID of the subject Story. |
| `subject_workflow_state_id` | The workflow state of the "subject" story. |
| `updated_at` | The time/date when the Story Link was last updated. |
| `verb` | How the subject Story acts on the object Story. |

Operations: create, load, remove, update.

API path: `/api/v3/story-links`

#### StoryReaction

| Field | Description |
| --- | --- |
| `emoji` | The emoji short-code to add / remove. |

Operations: create, remove.

API path: `/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions`

#### StorySlim

| Field | Description |
| --- | --- |
| `after_id` | The ID of the story that the stories are to be moved below. |
| `archived` | A true/false boolean indicating whether the Story is in archived state. |
| `before_id` | The ID of the story that the stories are to be moved before. |
| `completed_at_end` | Stories should have been completed on or before this date. |
| `completed_at_start` | Stories should have been completed on or after this date. |
| `created_at_end` | Stories should have been created on or before this date. |
| `created_at_start` | Stories should have been created on or after this date. |
| `custom_fields_add` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | The due date of the story. |
| `deadline_end` | Stories should have a deadline on or before this date. |
| `deadline_start` | Stories should have a deadline on or after this date. |
| `epic_id` | The Epic IDs that may be associated with the Stories. |
| `epic_ids` | The Epic IDs that may be associated with the Stories. |
| `estimate` | The number of estimate points associate with the Stories. |
| `external_id` | An ID or URL that references an external resource. |
| `external_links` | An array of External Links associated with this story. |
| `follower_ids_add` | The UUIDs of the new followers to be added. |
| `follower_ids_remove` | The UUIDs of the followers to be removed. |
| `group_id` | The Group ID that is associated with the Stories |
| `group_ids` | The Group IDs that are associated with the Stories |
| `includes_description` | Whether to include the story description in the response. |
| `iteration_id` | The Iteration ID that may be associated with the Stories. |
| `iteration_ids` | The Iteration IDs that may be associated with the Stories. |
| `label_ids` | The Label IDs that may be associated with the Stories. |
| `label_name` | The name of any associated Labels. |
| `labels_add` | An array of labels to be added. |
| `labels_remove` | An array of labels to be removed. |
| `move_to` | One of "first" or "last". |
| `owner_id` | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids` | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids_add` | The UUIDs of the new owners to be added. |
| `owner_ids_remove` | The UUIDs of the owners to be removed. |
| `project_id` | The IDs for the Projects the Stories may be assigned to. |
| `project_ids` | The IDs for the Projects the Stories may be assigned to. |
| `requested_by_id` | The UUID of any Users who may have requested the Stories. |
| `stories` | An array of stories to be created. |
| `story_ids` | The Ids of the Stories you wish to update. |
| `story_type` | The type of Stories that you want returned. |
| `updated_at_end` | Stories should have been updated on or before this date. |
| `updated_at_start` | Stories should have been updated on or after this date. |
| `workflow_state_id` | The unique IDs of the specific Workflow States that the Stories should be in. |
| `workflow_state_types` | The type of Workflow State the Stories may be in. |

Operations: create, update.

API path: `/api/v3/stories/bulk`

#### Task

| Field | Description |
| --- | --- |
| `after_id` | Move task after this task ID. |
| `before_id` | Move task before this task ID. |
| `complete` | True/false boolean indicating whether the Task has been completed. |
| `completed_at` | The time/date the Task was completed. |
| `created_at` | The time/date the Task was created. |
| `description` | Full text of the Task. |
| `entity_type` | A string description of this resource. |
| `external_id` | This field can be set to another unique ID. |
| `global_id` |  |
| `group_mention_ids` | An array of UUIDs of Groups mentioned in this Task. |
| `id` | The unique ID of the Task. |
| `member_mention_ids` | An array of UUIDs of Members mentioned in this Task. |
| `mention_ids` | `Deprecated:` use `member_mention_ids`. |
| `owner_ids` | An array of UUIDs of the Owners of this Task. |
| `position` | The number corresponding to the Task's position within a list of Tasks on a Story. |
| `story_id` | The unique identifier of the parent Story. |
| `updated_at` | The time/date the Task was updated. |

Operations: create, load, remove, update.

API path: `/api/v3/stories/{story-public-id}/tasks`

#### ThreadedComment

| Field | Description |
| --- | --- |
| `app_url` | The Shortcut application url for the Comment. |
| `author_id` | The unique ID of the Member that authored the Comment. |
| `comments` | A nested array of threaded comments. |
| `created_at` | The time/date the Comment was created. |
| `deleted` | True/false boolean indicating whether the Comment is deleted. |
| `entity_type` | A string description of this resource. |
| `external_id` | This field can be set to another unique ID. |
| `group_mention_ids` | An array of Group IDs that have been mentioned in this Comment. |
| `id` | The unique ID of the Comment. |
| `member_mention_ids` | An array of Member IDs that have been mentioned in this Comment. |
| `mention_ids` | `Deprecated:` use `member_mention_ids`. |
| `text` | The text of the Comment. |
| `updated_at` | The time/date the Comment was updated. |

Operations: create, list, load, remove, update.

API path: `/api/v3/epics/{epic-public-id}/comments/{comment-public-id}`

#### UploadedFile

| Field | Description |
| --- | --- |
| `content_type` | Free form string corresponding to a text or image file. |
| `created_at` | The time/date that the file was created. |
| `description` | The description of the file. |
| `entity_type` | A string description of this resource. |
| `external_id` | This field can be set to another unique ID. |
| `filename` | The name assigned to the file in Shortcut upon upload. |
| `group_mention_ids` | The unique IDs of the Groups who are mentioned in the file description. |
| `id` | The unique ID for the file. |
| `member_mention_ids` | The unique IDs of the Members who are mentioned in the file description. |
| `mention_ids` | `Deprecated:` use `member_mention_ids`. |
| `name` | The optional User-specified name of the file. |
| `size` | The size of the file. |
| `story_ids` | The unique IDs of the Stories associated with this file. |
| `thumbnail_url` | The url where the thumbnail of the file can be found in Shortcut. |
| `updated_at` | The time/date that the file was updated. |
| `uploader_id` | The unique ID of the Member who uploaded the file. |
| `url` | The URL for the file. |

Operations: create, list, load, remove, update.

API path: `/api/v3/files`

#### Webhook

| Field | Description |
| --- | --- |
| `id` |  |
| `secret` |  |
| `webhook_url` |  |

Operations: create, load, remove.

API path: `/api/v3/integrations/webhook`

#### Workflow

| Field | Description |
| --- | --- |
| `auto_assign_owner` | Indicates if an owner is automatically assigned when an unowned story is started. |
| `created_at` | The date the Workflow was created. |
| `default_state_id` | The unique ID of the default state that new Stories are entered into. |
| `description` | A description of the workflow. |
| `entity_type` | A string description of this resource. |
| `id` | The unique ID of the Workflow. |
| `name` | The name of the workflow. |
| `project_ids` | An array of IDs of projects within the Workflow. |
| `states` | A map of the states in this Workflow. |
| `team_id` | The ID of the team the workflow belongs to. |
| `updated_at` | The date the Workflow was updated. |

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
| `archived` | `boolean` | A true/false boolean indicating if the Category has been archived. |
| `color` | `string` | The hex color to be displayed with the Category (for example, "#ff0000"). |
| `created_at` | `string` | The time/date that the Category was created. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `global_id` | `string` | The Global ID of the Category. |
| `id` | `number` | The unique ID of the Category. |
| `name` | `string` | The name of the Category. |
| `type` | `string` | The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category. |
| `updated_at` | `string` | The time/date that the Category was updated. |

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

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


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
| `after_id` | `string` | The ID of the CustomField we want to move this CustomField after. |
| `before_id` | `string` | The ID of the CustomField we want to move this CustomField before. |
| `canonical_name` | `string` | The canonical name for a Shortcut-defined field. |
| `created_at` | `string` | The instant when this CustomField was created. |
| `description` | `string` | A string description of the CustomField |
| `enabled` | `boolean` | When true, the CustomField can be applied to entities in the Workspace. |
| `entity_type` | `string` | A string description of this resource. |
| `field_type` | `string` | The type of Custom Field, eg. |
| `fixed_position` | `boolean` | When true, the CustomFieldEnumValues may not be reordered. |
| `icon_set_identifier` | `string` | A string that represents the icon that corresponds to this custom field. |
| `id` | `string` | The unique public ID for the CustomField. |
| `name` | `string` | The name of the Custom Field. |
| `position` | `number` | An integer indicating the position of this Custom Field with respect to the other CustomField |
| `story_types` | `any[]` | The types of stories this CustomField is scoped to. |
| `updated_at` | `string` | The instant when this CustomField was last updated. |
| `values` | `any[]` | A collection of legal values for a CustomField. |

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
| `app_url` | `string` | The Shortcut application url for the Doc. |
| `content` | `string` | The content for the new document |
| `id` | `string` | The public id of the Doc |
| `title` | `string` | The title for the new document |

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
| `author_id` | `string` | The id of the user creating this template. |
| `created_at` | `string` | The time/date when the entity template was created. |
| `custom_fields` | `any[]` | An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `string` | The due date of the story. |
| `description` | `string` | The description of the story. |
| `entity_type` | `string` | A string description of this resource. |
| `epic_id` | `number` | The ID of the epic the story belongs to. |
| `estimate` | `number` | The numeric point estimate of the story. |
| `external_links` | `any[]` | An array of external links connected to the story. |
| `files` | `any[]` | An array of files attached to the story. |
| `follower_ids` | `any[]` | An array of UUIDs for any Members listed as Followers. |
| `group_id` | `string` | The ID of the group to which the story is assigned. |
| `id` | `string` | The unique identifier for the entity template. |
| `iteration_id` | `number` | The ID of the iteration the story belongs to. |
| `label_ids` | `any[]` | An array of label ids attached to the story. |
| `labels` | `any[]` | An array of labels attached to the story. |
| `last_used_at` | `string` | The last time that someone created an entity using this template. |
| `linked_files` | `any[]` | An array of linked files attached to the story. |
| `name` | `string` | The name of the story. |
| `owner_ids` | `any[]` | An array of UUIDs of the owners of this story. |
| `project_id` | `number` | The ID of the project the story belongs to. |
| `story_contents` | `Record<string, any>` | A map of story attributes this template populates. |
| `story_type` | `string` | The type of story (feature, bug, chore). |
| `sub_tasks` | `any[]` | An array of sub-tasks connected to the story |
| `tasks` | `any[]` | An array of tasks connected to the story. |
| `updated_at` | `string` | The time/date when the entity template was last updated. |
| `workflow_state_id` | `number` | The ID of the workflow state the story is currently in. |

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
| `after_id` | `number` | The ID of the Epic we want to move this Epic after. |
| `app_url` | `string` | The Shortcut application url for the Epic. |
| `archived` | `boolean` | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `any[]` | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `before_id` | `number` | The ID of the Epic we want to move this Epic before. |
| `comments` | `any[]` | A nested array of threaded comments. |
| `completed` | `boolean` | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | `string` | The time/date the Epic was completed. |
| `completed_at_override` | `string` | A manual override for the time/date the Epic was completed. |
| `converted_from_story_id` | `number` | The ID of the Story that was converted to an Epic. |
| `created_at` | `string` | The time/date the Epic was created. |
| `deadline` | `string` | The Epic's deadline. |
| `description` | `string` | The Epic's description. |
| `entity_type` | `string` | A string description of this resource. |
| `epic_state_id` | `number` | The ID of the Epic State. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `follower_ids` | `any[]` | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `string` |  |
| `group_id` | `string` | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `any[]` | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `any[]` | An array of Group IDs that have been mentioned in the Epic description. |
| `health` | `Record<string, any>` | The current health status of the Epic. |
| `id` | `number` | The unique ID of the Epic. |
| `label_ids` | `any[]` | An array of Label ids attached to the Epic. |
| `labels` | `any[]` | An array of Labels attached to the Epic. |
| `member_mention_ids` | `any[]` | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `any[]` | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `number` | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `string` | The name of the Epic. |
| `objective_ids` | `any[]` | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `any[]` | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `string` | The Epic's planned start date. |
| `position` | `number` | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `string` | The ID of the associated productboard feature. |
| `productboard_name` | `string` | The name of the associated productboard feature. |
| `productboard_plugin_id` | `string` | The ID of the associated productboard integration. |
| `productboard_url` | `string` | The URL of the associated productboard feature. |
| `project_ids` | `any[]` | The IDs of Projects related to this Epic. |
| `requested_by_id` | `string` | The ID of the Member that requested the epic. |
| `started` | `boolean` | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `string` | The time/date the Epic was started. |
| `started_at_override` | `string` | A manual override for the time/date the Epic was started. |
| `state` | `string` | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `Record<string, any>` | A group of calculated values for this Epic. |
| `stories_without_projects` | `number` | The number of stories in this epic which are not associated with a project. |
| `updated_at` | `string` | The time/date the Epic was updated. |

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
| `app_url` | `string` | The Shortcut application url for the Epic. |
| `archived` | `boolean` | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `any[]` | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `completed` | `boolean` | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | `string` | The time/date the Epic was completed. |
| `completed_at_override` | `string` | A manual override for the time/date the Epic was completed. |
| `created_at` | `string` | The time/date the Epic was created. |
| `deadline` | `string` | The Epic's deadline. |
| `description` | `string` | The Epic's description. |
| `entity_type` | `string` | A string description of this resource. |
| `epic_state_id` | `number` | The ID of the Epic State. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `follower_ids` | `any[]` | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `string` |  |
| `group_id` | `string` | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `any[]` | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `any[]` | An array of Group IDs that have been mentioned in the Epic description. |
| `id` | `number` | The unique ID of the Epic. |
| `label_ids` | `any[]` | An array of Label ids attached to the Epic. |
| `labels` | `any[]` | An array of Labels attached to the Epic. |
| `member_mention_ids` | `any[]` | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `any[]` | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `number` | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `string` | The name of the Epic. |
| `objective_ids` | `any[]` | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `any[]` | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `string` | The Epic's planned start date. |
| `position` | `number` | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `string` | The ID of the associated productboard feature. |
| `productboard_name` | `string` | The name of the associated productboard feature. |
| `productboard_plugin_id` | `string` | The ID of the associated productboard integration. |
| `productboard_url` | `string` | The URL of the associated productboard feature. |
| `project_ids` | `any[]` | The IDs of Projects related to this Epic. |
| `requested_by_id` | `string` | The ID of the Member that requested the epic. |
| `started` | `boolean` | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `string` | The time/date the Epic was started. |
| `started_at_override` | `string` | A manual override for the time/date the Epic was started. |
| `state` | `string` | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `Record<string, any>` | A group of calculated values for this Epic. |
| `stories_without_projects` | `number` | The number of stories in this epic which are not associated with a project. |
| `updated_at` | `string` | The time/date the Epic was updated. |

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

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

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
| `color` | `string` | The hex color for this Epic State. |
| `created_at` | `string` | The time/date the Epic State was created. |
| `description` | `string` | The description of what sort of Epics belong in that Epic State. |
| `entity_type` | `string` | A string description of this resource. |
| `global_id` | `string` |  |
| `id` | `number` | The unique ID of the Epic State. |
| `name` | `string` | The Epic State's name. |
| `position` | `number` | The position that the Epic State is in, starting with 0 at the left. |
| `type` | `string` | The type of Epic State (Unstarted, Started, or Done) |
| `updated_at` | `string` | When the Epic State was last updated. |

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
| `app_url` | `string` | The Shortcut application url for the Group. |
| `archived` | `boolean` | Whether or not the Group is archived. |
| `color` | `string` | The hex color to be displayed with the Group (for example, "#ff0000"). |
| `color_key` | `string` | The color key to be displayed with the Group. |
| `created_at` | `string` | The instant when this group was created. |
| `default_workflow_id` | `number` | The ID of the default workflow for stories created in this group. |
| `description` | `string` | The description of the Group. |
| `display_icon` | `Record<string, any>` | Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application. |
| `display_icon_id` | `string` | The Icon id for the avatar of this Group. |
| `entity_type` | `string` | A string description of this resource. |
| `global_id` | `string` |  |
| `id` | `string` | The id of the Group. |
| `member_ids` | `any[]` | The Member IDs contain within the Group. |
| `mention_name` | `string` | The mention name of the Group. |
| `name` | `string` | The name of the Group. |
| `num_epics_started` | `number` | The number of epics assigned to the group which are in the started workflow state. |
| `num_stories` | `number` | The total number of stories assigned to the group. |
| `num_stories_backlog` | `number` | The number of stories assigned to the group which are in a backlog workflow state. |
| `num_stories_started` | `number` | The number of stories assigned to the group which are in a started workflow state. |
| `updated_at` | `string` | The last instant when this group was updated. |
| `workflow_ids` | `any[]` | The Workflow IDs contained within the Group. |

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
| `author_id` | `string` | The ID of the permission who created or updated the Health record. |
| `created_at` | `string` | The time that the Health record was created. |
| `entity_type` | `string` | A string description of this resource. |
| `epic_id` | `number` | The ID of the Epic associated with this Health record. |
| `id` | `string` | The unique ID of the Health record. |
| `objective_id` | `number` | The ID of the Objective associated with this Health record. |
| `status` | `string` | The health status of the Epic or Objective. |
| `text` | `string` | The text of the Health record. |
| `updated_at` | `string` | The time that the Health record was updated. |

#### Example: Load

```ts
const health = await client.Health().load({ epic_id: 1 })
```

#### Example: List

```ts
const healths = await client.Health().list({ epic_id: 1 })
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
| `actions` | `any[]` | An array of actions that were performed for the change. |
| `actor_name` | `string` | The name of the actor that performed the action, if it can be determined. |
| `automation_id` | `string` | The ID of the automation that performed the change. |
| `changed_at` | `string` | The date when the change occurred. |
| `external_id` | `string` | The ID of the webhook that handled the change. |
| `id` | `string` | The ID representing the change for the story. |
| `member_id` | `string` | The ID of the member who performed the change. |
| `primary_id` | `string` | The ID of the primary entity that has changed, if applicable. |
| `references` | `any[]` | An array of objects affected by the change. |
| `version` | `string` | The version of the change format. |
| `webhook_id` | `string` | The ID of the webhook that handled the change. |

#### Example: List

```ts
const historys = await client.History().list({ story_id: 1 })
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
| `app_url` | `string` | The Shortcut application url for the Iteration. |
| `associated_groups` | `any[]` | An array containing Group IDs and Group-owned story counts for the Iteration's associated groups. |
| `created_at` | `string` | The instant when this iteration was created. |
| `description` | `string` | The description of the iteration. |
| `end_date` | `string` | The date this iteration ends. |
| `entity_type` | `string` | A string description of this resource |
| `follower_ids` | `any[]` | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `string` |  |
| `group_ids` | `any[]` | An array of UUIDs for any Groups you want to add as Followers. |
| `group_mention_ids` | `any[]` | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `number` | The ID of the iteration. |
| `label_ids` | `any[]` | An array of label ids attached to the iteration. |
| `labels` | `any[]` | An array of labels attached to the iteration. |
| `member_mention_ids` | `any[]` | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `any[]` | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | The name of the iteration. |
| `start_date` | `string` | The date this iteration begins. |
| `stats` | `Record<string, any>` | A group of calculated values for this Iteration. |
| `status` | `string` | The status of the iteration. |
| `updated_at` | `string` | The instant when this iteration was last updated. |

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
| `current_observed_value` | `Record<string, any>` | The starting value of the Key Result. |
| `current_target_value` | `Record<string, any>` | The starting value of the Key Result. |
| `id` | `string` | The ID of the Key Result. |
| `initial_observed_value` | `Record<string, any>` | The starting value of the Key Result. |
| `name` | `string` | The name of the Key Result. |
| `objective_id` | `number` | The Objective to which this Key Result belongs. |
| `observed_value` | `Record<string, any>` | The starting value of the Key Result. |
| `progress` | `number` | The integer percentage of progress toward completion of the Key Result. |
| `target_value` | `Record<string, any>` | The starting value of the Key Result. |
| `type` | `string` | The type of the Key Result (numeric, percent, or boolean). |

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
| `app_url` | `string` | The Shortcut application url for the Label. |
| `archived` | `boolean` | A true/false boolean indicating if the Label has been archived. |
| `color` | `string` | The hex color to be displayed with the Label (for example, "#ff0000"). |
| `created_at` | `string` | The time/date that the Label was created. |
| `description` | `string` | The description of the new Label. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `global_id` | `string` |  |
| `id` | `number` | The unique ID of the Label. |
| `name` | `string` | The name of the new Label. |
| `num_epics` | `number` | The total number of Epics with this Label. |
| `num_epics_completed` | `number` | The number of completed Epics associated with this Label. |
| `num_epics_in_progress` | `number` | The number of in progress epics associated with this label. |
| `num_epics_total` | `number` | The total number of Epics associated with this Label. |
| `num_epics_unstarted` | `number` | The number of unstarted epics associated with this label. |
| `num_points_backlog` | `number` | The total number of backlog points with this Label. |
| `num_points_completed` | `number` | The total number of completed points with this Label. |
| `num_points_in_progress` | `number` | The total number of in-progress points with this Label. |
| `num_points_total` | `number` | The total number of points with this Label. |
| `num_points_unstarted` | `number` | The total number of unstarted points with this Label. |
| `num_related_documents` | `number` | The total number of Documents associated this Label. |
| `num_stories_backlog` | `number` | The total number of stories backlog Stories with this Label. |
| `num_stories_completed` | `number` | The total number of completed Stories with this Label. |
| `num_stories_in_progress` | `number` | The total number of in-progress Stories with this Label. |
| `num_stories_total` | `number` | The total number of Stories with this Label. |
| `num_stories_unestimated` | `number` | The total number of Stories with no point estimate with this Label. |
| `num_stories_unstarted` | `number` | The total number of stories unstarted Stories with this Label. |
| `stats` | `Record<string, any>` | A group of calculated values for this Label. |
| `updated_at` | `string` | The time/date that the Label was updated. |

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
| `content_type` | `string` | The content type of the image (e.g. |
| `created_at` | `string` | The time/date the LinkedFile was created. |
| `description` | `string` | The description of the file. |
| `entity_type` | `string` | A string description of this resource. |
| `group_mention_ids` | `any[]` | The groups that are mentioned in the description of the file. |
| `id` | `number` | The unique identifier for the file. |
| `member_mention_ids` | `any[]` | The members that are mentioned in the description of the file. |
| `mention_ids` | `any[]` | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | The name of the linked file. |
| `size` | `number` | The filesize, if the integration provided it. |
| `story_id` | `number` | The ID of the linked story. |
| `story_ids` | `any[]` | The IDs of the stories this file is attached to. |
| `thumbnail_url` | `string` | The URL of the file thumbnail, if the integration provided it. |
| `type` | `string` | The integration type (e.g. |
| `updated_at` | `string` | The time/date the LinkedFile was updated. |
| `uploader_id` | `string` | The UUID of the member that uploaded the file. |
| `url` | `string` | The URL of the file. |

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
| `created_at` | `string` | The time/date the Member was created. |
| `created_without_invite` | `boolean` | Whether this member was created as a placeholder entity. |
| `disabled` | `boolean` | True/false boolean indicating whether the Member has been disabled within the Workspace. |
| `entity_type` | `string` | A string description of this resource. |
| `global_id` | `string` |  |
| `group_ids` | `any[]` | The Member's group ids |
| `id` | `string` | The Member's ID in Shortcut. |
| `installation_id` | `string` | Only set for agents. |
| `is_owner` | `boolean` |  |
| `mention_name` | `string` |  |
| `name` | `string` |  |
| `organization2` | `Record<string, any>` |  |
| `profile` | `Record<string, any>` | A group of Member profile details. |
| `replaced_by` | `string` | The id of the member that replaces this one when merged. |
| `role` | `string` | The Member's role in the Workspace. |
| `state` | `string` | The user state, one of partial, full, disabled, or imported. |
| `updated_at` | `string` | The time/date the Member was last updated. |
| `workspace2` | `Record<string, any>` |  |

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
| `after_id` | `number` | The ID of the Milestone we want to move this Milestone after. |
| `app_url` | `string` | The Shortcut application url for the Milestone. |
| `archived` | `boolean` | A boolean indicating whether the Milestone has been archived or not. |
| `before_id` | `number` | The ID of the Milestone we want to move this Milestone before. |
| `categories` | `any[]` | An array of Categories attached to the Milestone. |
| `completed` | `boolean` | A true/false boolean indicating if the Milestone has been completed. |
| `completed_at` | `string` | The time/date the Milestone was completed. |
| `completed_at_override` | `string` | A manual override for the time/date the Milestone was completed. |
| `created_at` | `string` | The time/date the Milestone was created. |
| `description` | `string` | The Milestone's description. |
| `entity_type` | `string` | A string description of this resource. |
| `global_id` | `string` |  |
| `id` | `number` | The unique ID of the Milestone. |
| `key_result_ids` | `any[]` | The IDs of the Key Results associated with the Objective. |
| `name` | `string` | The name of the Milestone. |
| `position` | `number` | A number representing the position of the Milestone in relation to every other Milestone within the Workspace. |
| `started` | `boolean` | A true/false boolean indicating if the Milestone has been started. |
| `started_at` | `string` | The time/date the Milestone was started. |
| `started_at_override` | `string` | A manual override for the time/date the Milestone was started. |
| `state` | `string` | The workflow state that the Milestone is in. |
| `stats` | `Record<string, any>` | A group of calculated values for this Milestone. |
| `updated_at` | `string` | The time/date the Milestone was updated. |

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

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


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
| `after_id` | `number` | The ID of the Objective we want to move this Objective after. |
| `app_url` | `string` | The Shortcut application url for the Objective. |
| `archived` | `boolean` | A boolean indicating whether the Objective has been archived or not. |
| `before_id` | `number` | The ID of the Objective we want to move this Objective before. |
| `categories` | `any[]` | An array of Categories attached to the Objective. |
| `completed` | `boolean` | A true/false boolean indicating if the Objectivehas been completed. |
| `completed_at` | `string` | The time/date the Objective was completed. |
| `completed_at_override` | `string` | A manual override for the time/date the Objective was completed. |
| `created_at` | `string` | The time/date the Objective was created. |
| `description` | `string` | The Objective's description. |
| `entity_type` | `string` | A string description of this resource. |
| `global_id` | `string` |  |
| `id` | `number` | The unique ID of the Objective. |
| `key_result_ids` | `any[]` | The IDs of the Key Results associated with the Objective. |
| `name` | `string` | The name of the Objective. |
| `position` | `number` | A number representing the position of the Objective in relation to every other Objective within the Workspace. |
| `started` | `boolean` | A true/false boolean indicating if the Objective has been started. |
| `started_at` | `string` | The time/date the Objective was started. |
| `started_at_override` | `string` | A manual override for the time/date the Objective was started. |
| `state` | `string` | The workflow state that the Objective is in. |
| `stats` | `Record<string, any>` | A group of calculated values for this Objective. |
| `updated_at` | `string` | The time/date the Objective was updated. |

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
| `abbreviation` | `string` | The Project abbreviation used in Story summaries. |
| `app_url` | `string` | The Shortcut application url for the Project. |
| `archived` | `boolean` | True/false boolean indicating whether the Project is in an Archived state. |
| `color` | `string` | The color associated with the Project in the Shortcut member interface. |
| `created_at` | `string` | The time/date that the Project was created. |
| `days_to_thermometer` | `number` | The number of days before the thermometer appears in the Story summary. |
| `description` | `string` | The description of the Project. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `follower_ids` | `any[]` | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `string` | The Global ID of the Project. |
| `id` | `number` | The unique ID of the Project. |
| `iteration_length` | `number` | The number of weeks per iteration in this Project. |
| `name` | `string` | The name of the Project |
| `show_thermometer` | `boolean` | Configuration to enable or disable thermometers in the Story summary. |
| `start_time` | `string` | The date at which the Project was started. |
| `stats` | `Record<string, any>` | A group of calculated values for this Project. |
| `team_id` | `number` | The ID of the team the project belongs to. |
| `updated_at` | `string` | The time/date that the Project was last updated. |
| `workflow_id` | `number` | The ID of the workflow the project belongs to. |

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
| `created_at` | `string` | The time/date the Repository was created. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | The VCS unique identifier for the Repository. |
| `full_name` | `string` | The full name of the VCS repository. |
| `id` | `number` | The ID associated to the VCS repository in Shortcut. |
| `name` | `string` | The shorthand name of the VCS repository. |
| `type` | `string` | The VCS provider for the Repository. |
| `updated_at` | `string` | The time/date the Repository was updated. |
| `url` | `string` | The URL of the Repository. |

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
| `epics` | `Record<string, any>` | The results of the Epic search query. |
| `iterations` | `Record<string, any>` | The results of the Iteration search query. |
| `milestones` | `Record<string, any>` | The results of the Objective search query. |
| `stories` | `Record<string, any>` | The results of the Story search query. |

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
| `after_id` | `number` | The ID of the story we want to move this story after. |
| `app_url` | `string` | The Shortcut application url for the Story. |
| `archived` | `boolean` | True if the story has been archived or not. |
| `before_id` | `number` | The ID of the story we want to move this story before. |
| `blocked` | `boolean` | A true/false boolean indicating if the Story is currently blocked. |
| `blocker` | `boolean` | A true/false boolean indicating if the Story is currently a blocker of another story. |
| `branch_ids` | `any[]` | An array of IDs of Branches attached to the story. |
| `branches` | `any[]` | An array of Git branches attached to the story. |
| `comment_ids` | `any[]` | An array of IDs of Comments attached to the story. |
| `comments` | `any[]` | An array of comments attached to the story. |
| `commit_ids` | `any[]` | An array of IDs of Commits attached to the story. |
| `commits` | `any[]` | An array of commits attached to the story. |
| `completed` | `boolean` | A true/false boolean indicating if the Story has been completed. |
| `completed_at` | `string` | The time/date the Story was completed. |
| `completed_at_override` | `string` | A manual override for the time/date the Story was completed. |
| `created_at` | `string` | The time/date the Story was created. |
| `custom_fields` | `any[]` | An array of CustomField value assertions for the story. |
| `custom_fields_add` | `any[]` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `any[]` | A map specifying a CustomField ID. |
| `cycle_time` | `number` | The cycle time (in seconds) of this story when complete. |
| `deadline` | `string` | The due date of the story. |
| `description` | `string` | The description of the story. |
| `entity_type` | `string` | A string description of this resource. |
| `epic_id` | `number` | The ID of the epic the story belongs to. |
| `estimate` | `number` | The numeric point estimate of the story. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `external_links` | `any[]` | An array of external links (strings) associated with a Story |
| `external_links_add` | `any[]` | An array of External Links associated with this story. |
| `external_links_remove` | `any[]` | An array of External Links associated with this story. |
| `file_ids` | `any[]` | An array of IDs of files attached to the story. |
| `file_ids_add` | `any[]` | An array of IDs of files attached to the story in addition to files from the template. |
| `file_ids_remove` | `any[]` | An array of IDs of files removed from files from the template. |
| `files` | `any[]` | An array of files attached to the story. |
| `follower_ids` | `any[]` | An array of UUIDs for any Members listed as Followers. |
| `follower_ids_add` | `any[]` | The UUIDs of the new followers to be added in addition to followers from the template. |
| `follower_ids_remove` | `any[]` | The UUIDs of the new followers to be removed from followers from the template. |
| `formatted_vcs_branch_name` | `string` | The formatted branch name for this story. |
| `global_id` | `string` |  |
| `group_id` | `string` | The ID of the group associated with the story. |
| `group_mention_ids` | `any[]` | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `number` | The unique ID of the Story. |
| `iteration_id` | `number` | The ID of the iteration the story belongs to. |
| `label_ids` | `any[]` | An array of label ids attached to the story. |
| `labels` | `any[]` | An array of labels attached to the story. |
| `labels_add` | `any[]` | An array of labels attached to the story in addition to the labels provided by the template. |
| `labels_remove` | `any[]` | An array of labels to remove from the labels provided by the template. |
| `lead_time` | `number` | The lead time (in seconds) of this story when complete. |
| `linked_file_ids` | `any[]` | An array of IDs of linked files attached to the story. |
| `linked_file_ids_add` | `any[]` | An array of IDs of linked files attached to the story in addition to files from the template. |
| `linked_file_ids_remove` | `any[]` | An array of IDs of linked files removed from files from the template. |
| `linked_files` | `any[]` | An array of linked files attached to the story. |
| `member_mention_ids` | `any[]` | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `any[]` | `Deprecated:` use `member_mention_ids`. |
| `move_to` | `string` | One of "first" or "last". |
| `moved_at` | `string` | The time/date the Story was last changed workflow-state. |
| `name` | `string` | The name of the story. |
| `num_tasks_completed` | `number` | The number of tasks on the story which are complete. |
| `owner_ids` | `any[]` | An array of UUIDs of the owners of this story. |
| `owner_ids_add` | `any[]` | The UUIDs of the new owners to be added in addition to owners from the template. |
| `owner_ids_remove` | `any[]` | The UUIDs of the new owners to be removed from owners from the template. |
| `parent_story_id` | `number` | The id of the parent story to associate with this story. |
| `position` | `number` | A number representing the position of the story in relation to every other story in the current project. |
| `previous_iteration_ids` | `any[]` | The IDs of the iteration the story belongs to. |
| `project_id` | `number` | The ID of the project the story belongs to. |
| `pull_request_ids` | `any[]` | An array of IDs of Pull/Merge Requests attached to the story. |
| `pull_requests` | `any[]` | An array of Pull/Merge Requests attached to the story. |
| `requested_by_id` | `string` | The ID of the Member that requested the story. |
| `source_task_id` | `number` | Given this story was converted from a task in another story, this is the original task ID that was converted to this story. |
| `started` | `boolean` | A true/false boolean indicating if the Story has been started. |
| `started_at` | `string` | The time/date the Story was started. |
| `started_at_override` | `string` | A manual override for the time/date the Story was started. |
| `stats` | `Record<string, any>` | The stats object for Stories |
| `story_links` | `any[]` | An array of story links attached to the Story. |
| `story_template_id` | `string` | The ID of the story template used to create this story, or null if not created using a template. |
| `story_type` | `string` | The type of story (feature, bug, chore). |
| `sub_task_story_ids` | `any[]` |  |
| `sub_tasks` | `any[]` | A list of either params to create a new sub-task or link an existing story as a sub-task |
| `synced_item` | `Record<string, any>` | The synced item for the story. |
| `task_ids` | `any[]` | An array of IDs of Tasks attached to the story. |
| `tasks` | `any[]` | An array of tasks connected to the story. |
| `updated_at` | `string` | The time/date the Story was updated. |
| `workflow_id` | `number` | The ID of the workflow the story belongs to. |
| `workflow_state_id` | `number` | The ID of the workflow state the story is currently in. |

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
| `app_url` | `string` | The Shortcut application url for the Comment. |
| `author_id` | `string` | The unique ID of the Member who is the Comment's author. |
| `blocker` | `boolean` | Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment. |
| `created_at` | `string` | The time/date when the Comment was created. |
| `deleted` | `boolean` | True/false boolean indicating whether the Comment has been deleted. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `group_mention_ids` | `any[]` | The unique IDs of the Group who are mentioned in the Comment. |
| `id` | `number` | The unique ID of the Comment. |
| `linked_to_slack` | `boolean` | Whether the Comment is currently the root of a thread that is linked to Slack. |
| `member_mention_ids` | `any[]` | The unique IDs of the Member who are mentioned in the Comment. |
| `mention_ids` | `any[]` | `Deprecated:` use `member_mention_ids`. |
| `parent_id` | `number` | The ID of the parent Comment this Comment is threaded under. |
| `position` | `number` | The Comments numerical position in the list from oldest to newest. |
| `reactions` | `any[]` | A set of Reactions to this Comment. |
| `story_id` | `number` | The ID of the Story on which the Comment appears. |
| `text` | `string` | The text of the Comment. |
| `unblocks_parent` | `boolean` | Marks the comment as an unblocker to its blocker parent. |
| `updated_at` | `string` | The time/date when the Comment was updated. |

#### Example: Load

```ts
const story_comment = await client.StoryComment().load({ id: 1, story_id: 1 })
```

#### Example: List

```ts
const story_comments = await client.StoryComment().list({ id: 1 })
```

#### Example: Create

```ts
const story_comment = await client.StoryComment().create({
  id: 1,
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
  story_id: 1,
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
| `created_at` | `string` | The time/date when the Story Link was created. |
| `entity_type` | `string` | A string description of this resource. |
| `id` | `number` | The unique identifier of the Story Link. |
| `object_id` | `number` | The ID of the object Story. |
| `subject_id` | `number` | The ID of the subject Story. |
| `subject_workflow_state_id` | `number` | The workflow state of the "subject" story. |
| `updated_at` | `string` | The time/date when the Story Link was last updated. |
| `verb` | `string` | How the subject Story acts on the object Story. |

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
| `emoji` | `string` | The emoji short-code to add / remove. |

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
| `after_id` | `number` | The ID of the story that the stories are to be moved below. |
| `archived` | `boolean` | A true/false boolean indicating whether the Story is in archived state. |
| `before_id` | `number` | The ID of the story that the stories are to be moved before. |
| `completed_at_end` | `string` | Stories should have been completed on or before this date. |
| `completed_at_start` | `string` | Stories should have been completed on or after this date. |
| `created_at_end` | `string` | Stories should have been created on or before this date. |
| `created_at_start` | `string` | Stories should have been created on or after this date. |
| `custom_fields_add` | `any[]` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `any[]` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `string` | The due date of the story. |
| `deadline_end` | `string` | Stories should have a deadline on or before this date. |
| `deadline_start` | `string` | Stories should have a deadline on or after this date. |
| `epic_id` | `number` | The Epic IDs that may be associated with the Stories. |
| `epic_ids` | `any[]` | The Epic IDs that may be associated with the Stories. |
| `estimate` | `number` | The number of estimate points associate with the Stories. |
| `external_id` | `string` | An ID or URL that references an external resource. |
| `external_links` | `any[]` | An array of External Links associated with this story. |
| `follower_ids_add` | `any[]` | The UUIDs of the new followers to be added. |
| `follower_ids_remove` | `any[]` | The UUIDs of the followers to be removed. |
| `group_id` | `string` | The Group ID that is associated with the Stories |
| `group_ids` | `any[]` | The Group IDs that are associated with the Stories |
| `includes_description` | `boolean` | Whether to include the story description in the response. |
| `iteration_id` | `number` | The Iteration ID that may be associated with the Stories. |
| `iteration_ids` | `any[]` | The Iteration IDs that may be associated with the Stories. |
| `label_ids` | `any[]` | The Label IDs that may be associated with the Stories. |
| `label_name` | `string` | The name of any associated Labels. |
| `labels_add` | `any[]` | An array of labels to be added. |
| `labels_remove` | `any[]` | An array of labels to be removed. |
| `move_to` | `string` | One of "first" or "last". |
| `owner_id` | `string` | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids` | `any[]` | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids_add` | `any[]` | The UUIDs of the new owners to be added. |
| `owner_ids_remove` | `any[]` | The UUIDs of the owners to be removed. |
| `project_id` | `number` | The IDs for the Projects the Stories may be assigned to. |
| `project_ids` | `any[]` | The IDs for the Projects the Stories may be assigned to. |
| `requested_by_id` | `string` | The UUID of any Users who may have requested the Stories. |
| `stories` | `any[]` | An array of stories to be created. |
| `story_ids` | `any[]` | The Ids of the Stories you wish to update. |
| `story_type` | `string` | The type of Stories that you want returned. |
| `updated_at_end` | `string` | Stories should have been updated on or before this date. |
| `updated_at_start` | `string` | Stories should have been updated on or after this date. |
| `workflow_state_id` | `number` | The unique IDs of the specific Workflow States that the Stories should be in. |
| `workflow_state_types` | `any[]` | The type of Workflow State the Stories may be in. |

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
| `after_id` | `number` | Move task after this task ID. |
| `before_id` | `number` | Move task before this task ID. |
| `complete` | `boolean` | True/false boolean indicating whether the Task has been completed. |
| `completed_at` | `string` | The time/date the Task was completed. |
| `created_at` | `string` | The time/date the Task was created. |
| `description` | `string` | Full text of the Task. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `global_id` | `string` |  |
| `group_mention_ids` | `any[]` | An array of UUIDs of Groups mentioned in this Task. |
| `id` | `number` | The unique ID of the Task. |
| `member_mention_ids` | `any[]` | An array of UUIDs of Members mentioned in this Task. |
| `mention_ids` | `any[]` | `Deprecated:` use `member_mention_ids`. |
| `owner_ids` | `any[]` | An array of UUIDs of the Owners of this Task. |
| `position` | `number` | The number corresponding to the Task's position within a list of Tasks on a Story. |
| `story_id` | `number` | The unique identifier of the parent Story. |
| `updated_at` | `string` | The time/date the Task was updated. |

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
| `app_url` | `string` | The Shortcut application url for the Comment. |
| `author_id` | `string` | The unique ID of the Member that authored the Comment. |
| `comments` | `any[]` | A nested array of threaded comments. |
| `created_at` | `string` | The time/date the Comment was created. |
| `deleted` | `boolean` | True/false boolean indicating whether the Comment is deleted. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `group_mention_ids` | `any[]` | An array of Group IDs that have been mentioned in this Comment. |
| `id` | `number` | The unique ID of the Comment. |
| `member_mention_ids` | `any[]` | An array of Member IDs that have been mentioned in this Comment. |
| `mention_ids` | `any[]` | `Deprecated:` use `member_mention_ids`. |
| `text` | `string` | The text of the Comment. |
| `updated_at` | `string` | The time/date the Comment was updated. |

#### Example: Load

```ts
const threaded_comment = await client.ThreadedComment().load({ id: 1, epic_id: 1 })
```

#### Example: List

```ts
const threaded_comments = await client.ThreadedComment().list({ epic_id: 1 })
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
| `content_type` | `string` | Free form string corresponding to a text or image file. |
| `created_at` | `string` | The time/date that the file was created. |
| `description` | `string` | The description of the file. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `filename` | `string` | The name assigned to the file in Shortcut upon upload. |
| `group_mention_ids` | `any[]` | The unique IDs of the Groups who are mentioned in the file description. |
| `id` | `number` | The unique ID for the file. |
| `member_mention_ids` | `any[]` | The unique IDs of the Members who are mentioned in the file description. |
| `mention_ids` | `any[]` | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | The optional User-specified name of the file. |
| `size` | `number` | The size of the file. |
| `story_ids` | `any[]` | The unique IDs of the Stories associated with this file. |
| `thumbnail_url` | `string` | The url where the thumbnail of the file can be found in Shortcut. |
| `updated_at` | `string` | The time/date that the file was updated. |
| `uploader_id` | `string` | The unique ID of the Member who uploaded the file. |
| `url` | `string` | The URL for the file. |

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
| `id` | `string` |  |
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
| `auto_assign_owner` | `boolean` | Indicates if an owner is automatically assigned when an unowned story is started. |
| `created_at` | `string` | The date the Workflow was created. |
| `default_state_id` | `number` | The unique ID of the default state that new Stories are entered into. |
| `description` | `string` | A description of the workflow. |
| `entity_type` | `string` | A string description of this resource. |
| `id` | `number` | The unique ID of the Workflow. |
| `name` | `string` | The name of the workflow. |
| `project_ids` | `any[]` | An array of IDs of projects within the Workflow. |
| `states` | `any[]` | A map of the states in this Workflow. |
| `team_id` | `number` | The ID of the team the workflow belongs to. |
| `updated_at` | `string` | The date the Workflow was updated. |

#### Example: Load

```ts
const workflow = await client.Workflow().load({ id: 1 })
```

#### Example: List

```ts
const workflows = await client.Workflow().list()
```


## Open types

2 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `history` | `actions` | 19 | 1 level |
| `history` | `references` | 12 | 5 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

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
│   ├── ShortcutSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { ShortcutSDK } from '@voxgig-sdk/shortcut'
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

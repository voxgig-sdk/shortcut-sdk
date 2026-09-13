# Shortcut TypeScript SDK Reference

Complete API reference for the Shortcut TypeScript SDK.


## ShortcutSDK

### Constructor

```ts
new ShortcutSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ShortcutSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = ShortcutSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `ShortcutSDK` instance in test mode.


### Instance Methods

#### `Bulk(data?: object)`

Create a new `Bulk` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkEntity` instance.

#### `Category(data?: object)`

Create a new `Category` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CategoryEntity` instance.

#### `Comment(data?: object)`

Create a new `Comment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CommentEntity` instance.

#### `CustomField(data?: object)`

Create a new `CustomField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomFieldEntity` instance.

#### `Disable(data?: object)`

Create a new `Disable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DisableEntity` instance.

#### `DocSlim(data?: object)`

Create a new `DocSlim` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DocSlimEntity` instance.

#### `Enable(data?: object)`

Create a new `Enable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnableEntity` instance.

#### `EntityTemplate(data?: object)`

Create a new `EntityTemplate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EntityTemplateEntity` instance.

#### `Epic(data?: object)`

Create a new `Epic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EpicEntity` instance.

#### `EpicPaginatedResult(data?: object)`

Create a new `EpicPaginatedResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EpicPaginatedResultEntity` instance.

#### `EpicUnlinkProductboard(data?: object)`

Create a new `EpicUnlinkProductboard` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EpicUnlinkProductboardEntity` instance.

#### `EpicWorkflow(data?: object)`

Create a new `EpicWorkflow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EpicWorkflowEntity` instance.

#### `Group(data?: object)`

Create a new `Group` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GroupEntity` instance.

#### `Health(data?: object)`

Create a new `Health` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HealthEntity` instance.

#### `History(data?: object)`

Create a new `History` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HistoryEntity` instance.

#### `Iteration(data?: object)`

Create a new `Iteration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IterationEntity` instance.

#### `KeyResult(data?: object)`

Create a new `KeyResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `KeyResultEntity` instance.

#### `Label(data?: object)`

Create a new `Label` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LabelEntity` instance.

#### `LinkedFile(data?: object)`

Create a new `LinkedFile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LinkedFileEntity` instance.

#### `Member(data?: object)`

Create a new `Member` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MemberEntity` instance.

#### `Milestone(data?: object)`

Create a new `Milestone` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MilestoneEntity` instance.

#### `Objectif(data?: object)`

Create a new `Objectif` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ObjectifEntity` instance.

#### `Objective(data?: object)`

Create a new `Objective` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ObjectiveEntity` instance.

#### `Project(data?: object)`

Create a new `Project` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectEntity` instance.

#### `Repository(data?: object)`

Create a new `Repository` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RepositoryEntity` instance.

#### `Search(data?: object)`

Create a new `Search` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SearchEntity` instance.

#### `Story(data?: object)`

Create a new `Story` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StoryEntity` instance.

#### `StoryComment(data?: object)`

Create a new `StoryComment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StoryCommentEntity` instance.

#### `StoryLink(data?: object)`

Create a new `StoryLink` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StoryLinkEntity` instance.

#### `StoryReaction(data?: object)`

Create a new `StoryReaction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StoryReactionEntity` instance.

#### `StorySlim(data?: object)`

Create a new `StorySlim` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StorySlimEntity` instance.

#### `Task(data?: object)`

Create a new `Task` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TaskEntity` instance.

#### `ThreadedComment(data?: object)`

Create a new `ThreadedComment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ThreadedCommentEntity` instance.

#### `UploadedFile(data?: object)`

Create a new `UploadedFile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UploadedFileEntity` instance.

#### `Webhook(data?: object)`

Create a new `Webhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookEntity` instance.

#### `Workflow(data?: object)`

Create a new `Workflow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkflowEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `ShortcutSDK.test()`.

**Returns:** `ShortcutSDK` instance in test mode.


---

## BulkEntity

```ts
const bulk = client.Bulk()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Bulk().remove()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BulkEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CategoryEntity

```ts
const category = client.Category()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | Yes | A true/false boolean indicating if the Category has been archived. |
| `color` | `string` | Yes | The hex color to be displayed with the Category (for example, "#ff0000"). |
| `created_at` | `string` | Yes | The time/date that the Category was created. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `global_id` | `string` | Yes | The Global ID of the Category. |
| `id` | `number` | Yes | The unique ID of the Category. |
| `name` | `string` | Yes | The name of the Category. |
| `type` | `string` | Yes | The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category. |
| `updated_at` | `string` | Yes | The time/date that the Category was updated. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `archived` | - | - | - | Yes | - |
| `color` | - | - | Yes | Yes | - |
| `created_at` | - | - | - | - | - |
| `entity_type` | - | - | - | - | - |
| `external_id` | - | - | Yes | - | - |
| `global_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `type` | - | - | Yes | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Category().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Category().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Category().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Category().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Category().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CategoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CommentEntity

```ts
const comment = client.Comment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Comment().remove({ id: 1, story_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CommentEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomFieldEntity

```ts
const custom_field = client.CustomField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `string` | No | The ID of the CustomField we want to move this CustomField after. |
| `before_id` | `string` | No | The ID of the CustomField we want to move this CustomField before. |
| `canonical_name` | `string` | No | The canonical name for a Shortcut-defined field. |
| `created_at` | `string` | Yes | The instant when this CustomField was created. |
| `description` | `string` | No | A string description of the CustomField |
| `enabled` | `boolean` | Yes | When true, the CustomField can be applied to entities in the Workspace. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `field_type` | `string` | Yes | The type of Custom Field, eg. |
| `fixed_position` | `boolean` | No | When true, the CustomFieldEnumValues may not be reordered. |
| `icon_set_identifier` | `string` | No | A string that represents the icon that corresponds to this custom field. |
| `id` | `string` | Yes | The unique public ID for the CustomField. |
| `name` | `string` | Yes | The name of the Custom Field. |
| `position` | `number` | Yes | An integer indicating the position of this Custom Field with respect to the other CustomField |
| `story_types` | `any[]` | No | The types of stories this CustomField is scoped to. |
| `updated_at` | `string` | Yes | The instant when this CustomField was last updated. |
| `values` | `any[]` | No | A collection of legal values for a CustomField. |

### Field Usage by Operation

| Field | load | list | update | remove |
| --- | --- | --- | --- | --- |
| `after_id` | - | - | - | - |
| `before_id` | - | - | - | - |
| `canonical_name` | - | - | - | - |
| `created_at` | - | - | - | - |
| `description` | - | - | - | - |
| `enabled` | - | - | Yes | - |
| `entity_type` | - | - | - | - |
| `field_type` | - | - | - | - |
| `fixed_position` | - | - | - | - |
| `icon_set_identifier` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | Yes | - |
| `position` | - | - | - | - |
| `story_types` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `values` | - | - | - | - |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CustomField().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomField().load({ id: 'custom_field_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CustomField().remove({ id: 'custom_field_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CustomField().update({
  id: 'custom_field_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DisableEntity

```ts
const disable = client.Disable()
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Disable().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DisableEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DocSlimEntity

```ts
const doc_slim = client.DocSlim()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes | The Shortcut application url for the Doc. |
| `content` | `string` | Yes | The content for the new document |
| `id` | `string` | Yes | The public id of the Doc |
| `title` | `string` | Yes | The title for the new document |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DocSlim().create({
  app_url: 'example_app_url',
  content: 'example_content',
  id: 'example_id',
  title: 'example_title',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DocSlim().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DocSlimEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnableEntity

```ts
const enable = client.Enable()
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Enable().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnableEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EntityTemplateEntity

```ts
const entity_template = client.EntityTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `string` | No | The id of the user creating this template. |
| `created_at` | `string` | Yes | The time/date when the entity template was created. |
| `custom_fields` | `any[]` | No | An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `string` | No | The due date of the story. |
| `description` | `string` | No | The description of the story. |
| `entity_type` | `string` | No | A string description of this resource. |
| `epic_id` | `number` | No | The ID of the epic the story belongs to. |
| `estimate` | `number` | No | The numeric point estimate of the story. |
| `external_links` | `any[]` | No | An array of external links connected to the story. |
| `files` | `any[]` | No | An array of files attached to the story. |
| `follower_ids` | `any[]` | No | An array of UUIDs for any Members listed as Followers. |
| `group_id` | `string` | No | The ID of the group to which the story is assigned. |
| `id` | `string` | Yes | The unique identifier for the entity template. |
| `iteration_id` | `number` | No | The ID of the iteration the story belongs to. |
| `label_ids` | `any[]` | No | An array of label ids attached to the story. |
| `labels` | `any[]` | No | An array of labels attached to the story. |
| `last_used_at` | `string` | Yes | The last time that someone created an entity using this template. |
| `linked_files` | `any[]` | No | An array of linked files attached to the story. |
| `name` | `string` | No | The name of the story. |
| `owner_ids` | `any[]` | No | An array of UUIDs of the owners of this story. |
| `project_id` | `number` | No | The ID of the project the story belongs to. |
| `story_contents` | `Record<string, any>` | Yes | A map of story attributes this template populates. |
| `story_type` | `string` | No | The type of story (feature, bug, chore). |
| `sub_tasks` | `any[]` | No | An array of sub-tasks connected to the story |
| `tasks` | `any[]` | No | An array of tasks connected to the story. |
| `updated_at` | `string` | Yes | The time/date when the entity template was last updated. |
| `workflow_state_id` | `number` | No | The ID of the workflow state the story is currently in. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `author_id` | - | Yes | - | - | - |
| `created_at` | - | - | - | - | - |
| `custom_fields` | - | - | - | - | - |
| `deadline` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `entity_type` | - | Yes | - | - | - |
| `epic_id` | - | - | - | - | - |
| `estimate` | - | - | - | - | - |
| `external_links` | - | - | - | - | - |
| `files` | - | - | - | - | - |
| `follower_ids` | - | - | - | - | - |
| `group_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `iteration_id` | - | - | - | - | - |
| `label_ids` | - | - | - | - | - |
| `labels` | - | - | - | - | - |
| `last_used_at` | - | - | - | - | - |
| `linked_files` | - | - | - | - | - |
| `name` | - | Yes | Yes | - | - |
| `owner_ids` | - | - | - | - | - |
| `project_id` | - | - | - | - | - |
| `story_contents` | - | - | - | Yes | - |
| `story_type` | - | - | - | - | - |
| `sub_tasks` | - | - | - | - | - |
| `tasks` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `workflow_state_id` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EntityTemplate().create({
  created_at: 'example_created_at',
  id: 'example_id',
  last_used_at: 'example_last_used_at',
  story_contents: {},
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EntityTemplate().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EntityTemplate().load({ id: 'entity_template_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.EntityTemplate().remove({ id: 'entity_template_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.EntityTemplate().update({
  id: 'entity_template_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EntityTemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EpicEntity

```ts
const epic = client.Epic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `number` | No | The ID of the Epic we want to move this Epic after. |
| `app_url` | `string` | Yes | The Shortcut application url for the Epic. |
| `archived` | `boolean` | Yes | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `any[]` | Yes | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `before_id` | `number` | No | The ID of the Epic we want to move this Epic before. |
| `comments` | `any[]` | Yes | A nested array of threaded comments. |
| `completed` | `boolean` | Yes | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | `string` | Yes | The time/date the Epic was completed. |
| `completed_at_override` | `string` | Yes | A manual override for the time/date the Epic was completed. |
| `converted_from_story_id` | `number` | No | The ID of the Story that was converted to an Epic. |
| `created_at` | `string` | Yes | The time/date the Epic was created. |
| `deadline` | `string` | Yes | The Epic's deadline. |
| `description` | `string` | Yes | The Epic's description. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `epic_state_id` | `number` | Yes | The ID of the Epic State. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `follower_ids` | `any[]` | Yes | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `any[]` | Yes | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `any[]` | Yes | An array of Group IDs that have been mentioned in the Epic description. |
| `health` | `Record<string, any>` | Yes | The current health status of the Epic. |
| `id` | `number` | Yes | The unique ID of the Epic. |
| `label_ids` | `any[]` | Yes | An array of Label ids attached to the Epic. |
| `labels` | `any[]` | Yes | An array of Labels attached to the Epic. |
| `member_mention_ids` | `any[]` | Yes | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `any[]` | Yes | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `number` | Yes | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `string` | Yes | The name of the Epic. |
| `objective_ids` | `any[]` | Yes | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `any[]` | Yes | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `string` | Yes | The Epic's planned start date. |
| `position` | `number` | Yes | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `string` | Yes | The ID of the associated productboard feature. |
| `productboard_name` | `string` | Yes | The name of the associated productboard feature. |
| `productboard_plugin_id` | `string` | Yes | The ID of the associated productboard integration. |
| `productboard_url` | `string` | Yes | The URL of the associated productboard feature. |
| `project_ids` | `any[]` | Yes | The IDs of Projects related to this Epic. |
| `requested_by_id` | `string` | Yes | The ID of the Member that requested the epic. |
| `started` | `boolean` | Yes | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `string` | Yes | The time/date the Epic was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Epic was started. |
| `state` | `string` | Yes | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `Record<string, any>` | Yes | A group of calculated values for this Epic. |
| `stories_without_projects` | `number` | Yes | The number of stories in this epic which are not associated with a project. |
| `updated_at` | `string` | Yes | The time/date the Epic was updated. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `after_id` | - | - | - | - | - |
| `app_url` | - | - | - | - | - |
| `archived` | - | - | - | Yes | - |
| `associated_groups` | - | - | - | - | - |
| `before_id` | - | - | - | - | - |
| `comments` | - | Yes | - | - | - |
| `completed` | - | - | - | - | - |
| `completed_at` | - | - | - | - | - |
| `completed_at_override` | - | - | Yes | Yes | - |
| `converted_from_story_id` | - | - | - | - | - |
| `created_at` | - | - | Yes | - | - |
| `deadline` | - | - | Yes | Yes | - |
| `description` | - | Yes | Yes | Yes | - |
| `entity_type` | - | - | - | - | - |
| `epic_state_id` | - | - | Yes | Yes | - |
| `external_id` | - | - | Yes | Yes | - |
| `follower_ids` | - | - | Yes | Yes | - |
| `global_id` | - | - | - | - | - |
| `group_id` | - | - | Yes | Yes | - |
| `group_ids` | - | - | Yes | Yes | - |
| `group_mention_ids` | - | - | - | - | - |
| `health` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `label_ids` | - | - | - | - | - |
| `labels` | - | - | Yes | Yes | - |
| `member_mention_ids` | - | - | - | - | - |
| `mention_ids` | - | - | - | - | - |
| `milestone_id` | - | - | Yes | Yes | - |
| `name` | - | - | - | Yes | - |
| `objective_ids` | - | - | Yes | Yes | - |
| `owner_ids` | - | - | Yes | Yes | - |
| `planned_start_date` | - | - | Yes | Yes | - |
| `position` | - | - | - | - | - |
| `productboard_id` | - | - | - | - | - |
| `productboard_name` | - | - | - | - | - |
| `productboard_plugin_id` | - | - | - | - | - |
| `productboard_url` | - | - | - | - | - |
| `project_ids` | - | - | - | - | - |
| `requested_by_id` | - | - | Yes | Yes | - |
| `started` | - | - | - | - | - |
| `started_at` | - | - | - | - | - |
| `started_at_override` | - | - | Yes | Yes | - |
| `state` | - | - | Yes | Yes | - |
| `stats` | - | - | - | - | - |
| `stories_without_projects` | - | - | - | - | - |
| `updated_at` | - | - | Yes | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Epic().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Epic().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Epic().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Epic().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Epic().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EpicEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EpicPaginatedResultEntity

```ts
const epic_paginated_result = client.EpicPaginatedResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes | The Shortcut application url for the Epic. |
| `archived` | `boolean` | Yes | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `any[]` | Yes | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `completed` | `boolean` | Yes | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | `string` | Yes | The time/date the Epic was completed. |
| `completed_at_override` | `string` | Yes | A manual override for the time/date the Epic was completed. |
| `created_at` | `string` | Yes | The time/date the Epic was created. |
| `deadline` | `string` | Yes | The Epic's deadline. |
| `description` | `string` | No | The Epic's description. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `epic_state_id` | `number` | Yes | The ID of the Epic State. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `follower_ids` | `any[]` | Yes | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `any[]` | Yes | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `any[]` | Yes | An array of Group IDs that have been mentioned in the Epic description. |
| `id` | `number` | Yes | The unique ID of the Epic. |
| `label_ids` | `any[]` | Yes | An array of Label ids attached to the Epic. |
| `labels` | `any[]` | Yes | An array of Labels attached to the Epic. |
| `member_mention_ids` | `any[]` | Yes | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `any[]` | Yes | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `number` | Yes | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `string` | Yes | The name of the Epic. |
| `objective_ids` | `any[]` | Yes | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `any[]` | Yes | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `string` | Yes | The Epic's planned start date. |
| `position` | `number` | Yes | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `string` | Yes | The ID of the associated productboard feature. |
| `productboard_name` | `string` | Yes | The name of the associated productboard feature. |
| `productboard_plugin_id` | `string` | Yes | The ID of the associated productboard integration. |
| `productboard_url` | `string` | Yes | The URL of the associated productboard feature. |
| `project_ids` | `any[]` | Yes | The IDs of Projects related to this Epic. |
| `requested_by_id` | `string` | Yes | The ID of the Member that requested the epic. |
| `started` | `boolean` | Yes | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `string` | Yes | The time/date the Epic was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Epic was started. |
| `state` | `string` | Yes | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `Record<string, any>` | Yes | A group of calculated values for this Epic. |
| `stories_without_projects` | `number` | Yes | The number of stories in this epic which are not associated with a project. |
| `updated_at` | `string` | Yes | The time/date the Epic was updated. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EpicPaginatedResult().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EpicPaginatedResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EpicUnlinkProductboardEntity

```ts
const epic_unlink_productboard = client.EpicUnlinkProductboard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EpicUnlinkProductboard().create({
  id: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EpicUnlinkProductboardEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EpicWorkflowEntity

```ts
const epic_workflow = client.EpicWorkflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `color` | `string` | No | The hex color for this Epic State. |
| `created_at` | `string` | Yes | The time/date the Epic State was created. |
| `description` | `string` | Yes | The description of what sort of Epics belong in that Epic State. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `global_id` | `string` | Yes |  |
| `id` | `number` | Yes | The unique ID of the Epic State. |
| `name` | `string` | Yes | The Epic State's name. |
| `position` | `number` | Yes | The position that the Epic State is in, starting with 0 at the left. |
| `type` | `string` | Yes | The type of Epic State (Unstarted, Started, or Done) |
| `updated_at` | `string` | Yes | When the Epic State was last updated. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EpicWorkflow().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EpicWorkflowEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GroupEntity

```ts
const group = client.Group()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes | The Shortcut application url for the Group. |
| `archived` | `boolean` | Yes | Whether or not the Group is archived. |
| `color` | `string` | Yes | The hex color to be displayed with the Group (for example, "#ff0000"). |
| `color_key` | `string` | Yes | The color key to be displayed with the Group. |
| `created_at` | `string` | Yes | The instant when this group was created. |
| `default_workflow_id` | `number` | No | The ID of the default workflow for stories created in this group. |
| `description` | `string` | Yes | The description of the Group. |
| `display_icon` | `Record<string, any>` | Yes | Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application. |
| `display_icon_id` | `string` | No | The Icon id for the avatar of this Group. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `global_id` | `string` | Yes |  |
| `id` | `string` | Yes | The id of the Group. |
| `member_ids` | `any[]` | Yes | The Member IDs contain within the Group. |
| `mention_name` | `string` | Yes | The mention name of the Group. |
| `name` | `string` | Yes | The name of the Group. |
| `num_epics_started` | `number` | Yes | The number of epics assigned to the group which are in the started workflow state. |
| `num_stories` | `number` | Yes | The total number of stories assigned to the group. |
| `num_stories_backlog` | `number` | Yes | The number of stories assigned to the group which are in a backlog workflow state. |
| `num_stories_started` | `number` | Yes | The number of stories assigned to the group which are in a started workflow state. |
| `updated_at` | `string` | Yes | The last instant when this group was updated. |
| `workflow_ids` | `any[]` | Yes | The Workflow IDs contained within the Group. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `app_url` | - | - | - | - |
| `archived` | - | - | - | Yes |
| `color` | - | - | Yes | Yes |
| `color_key` | - | - | Yes | Yes |
| `created_at` | - | - | - | - |
| `default_workflow_id` | - | - | - | - |
| `description` | - | - | Yes | Yes |
| `display_icon` | - | - | - | - |
| `display_icon_id` | - | - | - | - |
| `entity_type` | - | - | - | - |
| `global_id` | - | - | - | - |
| `id` | - | - | - | - |
| `member_ids` | - | - | Yes | Yes |
| `mention_name` | - | - | - | Yes |
| `name` | - | - | - | Yes |
| `num_epics_started` | - | - | - | - |
| `num_stories` | - | - | - | - |
| `num_stories_backlog` | - | - | - | - |
| `num_stories_started` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `workflow_ids` | - | - | Yes | Yes |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Group().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Group().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Group().load({ id: 'group_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Group().update({
  id: 'group_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HealthEntity

```ts
const health = client.Health()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `string` | No | The ID of the permission who created or updated the Health record. |
| `created_at` | `string` | No | The time that the Health record was created. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `epic_id` | `number` | No | The ID of the Epic associated with this Health record. |
| `id` | `string` | Yes | The unique ID of the Health record. |
| `objective_id` | `number` | No | The ID of the Objective associated with this Health record. |
| `status` | `string` | Yes | The health status of the Epic or Objective. |
| `text` | `string` | No | The text of the Health record. |
| `updated_at` | `string` | No | The time that the Health record was updated. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `author_id` | - | - | - | - |
| `created_at` | - | - | - | - |
| `entity_type` | - | - | - | - |
| `epic_id` | - | - | - | - |
| `id` | - | - | - | - |
| `objective_id` | - | - | - | - |
| `status` | - | - | - | Yes |
| `text` | - | - | - | - |
| `updated_at` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Health().create({
  epic_id: 1,
  entity_type: 'example_entity_type',
  id: 'example_id',
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Health().list({ epic_id: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Health().load({ epic_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Health().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HealthEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HistoryEntity

```ts
const history = client.History()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `any[]` | Yes | An array of actions that were performed for the change. |
| `actor_name` | `string` | No | The name of the actor that performed the action, if it can be determined. |
| `automation_id` | `string` | No | The ID of the automation that performed the change. |
| `changed_at` | `string` | Yes | The date when the change occurred. |
| `external_id` | `string` | No | The ID of the webhook that handled the change. |
| `id` | `string` | Yes | The ID representing the change for the story. |
| `member_id` | `string` | No | The ID of the member who performed the change. |
| `primary_id` | `string` | No | The ID of the primary entity that has changed, if applicable. |
| `references` | `any[]` | No | An array of objects affected by the change. |
| `version` | `string` | Yes | The version of the change format. |
| `webhook_id` | `string` | No | The ID of the webhook that handled the change. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.History().list({ story_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HistoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IterationEntity

```ts
const iteration = client.Iteration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes | The Shortcut application url for the Iteration. |
| `associated_groups` | `any[]` | Yes | An array containing Group IDs and Group-owned story counts for the Iteration's associated groups. |
| `created_at` | `string` | Yes | The instant when this iteration was created. |
| `description` | `string` | Yes | The description of the iteration. |
| `end_date` | `string` | Yes | The date this iteration ends. |
| `entity_type` | `string` | Yes | A string description of this resource |
| `follower_ids` | `any[]` | Yes | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `string` | Yes |  |
| `group_ids` | `any[]` | Yes | An array of UUIDs for any Groups you want to add as Followers. |
| `group_mention_ids` | `any[]` | Yes | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `number` | Yes | The ID of the iteration. |
| `label_ids` | `any[]` | Yes | An array of label ids attached to the iteration. |
| `labels` | `any[]` | Yes | An array of labels attached to the iteration. |
| `member_mention_ids` | `any[]` | Yes | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `any[]` | Yes | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | Yes | The name of the iteration. |
| `start_date` | `string` | Yes | The date this iteration begins. |
| `stats` | `Record<string, any>` | Yes | A group of calculated values for this Iteration. |
| `status` | `string` | Yes | The status of the iteration. |
| `updated_at` | `string` | Yes | The instant when this iteration was last updated. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `app_url` | - | - | - | - | - |
| `associated_groups` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `description` | - | - | Yes | Yes | - |
| `end_date` | - | - | - | Yes | - |
| `entity_type` | - | - | - | - | - |
| `follower_ids` | - | - | Yes | Yes | - |
| `global_id` | - | - | - | - | - |
| `group_ids` | - | - | Yes | Yes | - |
| `group_mention_ids` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `label_ids` | - | - | - | - | - |
| `labels` | - | - | Yes | Yes | - |
| `member_mention_ids` | - | - | - | - | - |
| `mention_ids` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `start_date` | - | - | - | Yes | - |
| `stats` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Iteration().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Iteration().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Iteration().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Iteration().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Iteration().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IterationEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## KeyResultEntity

```ts
const key_result = client.KeyResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_observed_value` | `Record<string, any>` | Yes | The starting value of the Key Result. |
| `current_target_value` | `Record<string, any>` | Yes | The starting value of the Key Result. |
| `id` | `string` | Yes | The ID of the Key Result. |
| `initial_observed_value` | `Record<string, any>` | Yes | The starting value of the Key Result. |
| `name` | `string` | Yes | The name of the Key Result. |
| `objective_id` | `number` | Yes | The Objective to which this Key Result belongs. |
| `observed_value` | `Record<string, any>` | No | The starting value of the Key Result. |
| `progress` | `number` | Yes | The integer percentage of progress toward completion of the Key Result. |
| `target_value` | `Record<string, any>` | No | The starting value of the Key Result. |
| `type` | `string` | Yes | The type of the Key Result (numeric, percent, or boolean). |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `current_observed_value` | - | - |
| `current_target_value` | - | - |
| `id` | - | - |
| `initial_observed_value` | - | Yes |
| `name` | - | Yes |
| `objective_id` | - | - |
| `observed_value` | - | - |
| `progress` | - | - |
| `target_value` | - | - |
| `type` | - | - |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.KeyResult().load({ id: 'key_result_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.KeyResult().update({
  id: 'key_result_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `KeyResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LabelEntity

```ts
const label = client.Label()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes | The Shortcut application url for the Label. |
| `archived` | `boolean` | No | A true/false boolean indicating if the Label has been archived. |
| `color` | `string` | No | The hex color to be displayed with the Label (for example, "#ff0000"). |
| `created_at` | `string` | Yes | The time/date that the Label was created. |
| `description` | `string` | No | The description of the new Label. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | No | This field can be set to another unique ID. |
| `global_id` | `string` | Yes |  |
| `id` | `number` | Yes | The unique ID of the Label. |
| `name` | `string` | Yes | The name of the new Label. |
| `num_epics` | `number` | Yes | The total number of Epics with this Label. |
| `num_epics_completed` | `number` | Yes | The number of completed Epics associated with this Label. |
| `num_epics_in_progress` | `number` | Yes | The number of in progress epics associated with this label. |
| `num_epics_total` | `number` | Yes | The total number of Epics associated with this Label. |
| `num_epics_unstarted` | `number` | Yes | The number of unstarted epics associated with this label. |
| `num_points_backlog` | `number` | Yes | The total number of backlog points with this Label. |
| `num_points_completed` | `number` | Yes | The total number of completed points with this Label. |
| `num_points_in_progress` | `number` | Yes | The total number of in-progress points with this Label. |
| `num_points_total` | `number` | Yes | The total number of points with this Label. |
| `num_points_unstarted` | `number` | Yes | The total number of unstarted points with this Label. |
| `num_related_documents` | `number` | Yes | The total number of Documents associated this Label. |
| `num_stories_backlog` | `number` | Yes | The total number of stories backlog Stories with this Label. |
| `num_stories_completed` | `number` | Yes | The total number of completed Stories with this Label. |
| `num_stories_in_progress` | `number` | Yes | The total number of in-progress Stories with this Label. |
| `num_stories_total` | `number` | Yes | The total number of Stories with this Label. |
| `num_stories_unestimated` | `number` | Yes | The total number of Stories with no point estimate with this Label. |
| `num_stories_unstarted` | `number` | Yes | The total number of stories unstarted Stories with this Label. |
| `stats` | `Record<string, any>` | Yes | A group of calculated values for this Label. |
| `updated_at` | `string` | Yes | The time/date that the Label was updated. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `app_url` | - | - | - | - | - |
| `archived` | - | Yes | - | - | - |
| `color` | - | Yes | - | - | - |
| `created_at` | - | - | - | - | - |
| `description` | - | Yes | - | - | - |
| `entity_type` | - | - | - | - | - |
| `external_id` | - | Yes | - | - | - |
| `global_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `num_epics` | - | - | - | - | - |
| `num_epics_completed` | - | - | - | - | - |
| `num_epics_in_progress` | - | - | - | - | - |
| `num_epics_total` | - | - | - | - | - |
| `num_epics_unstarted` | - | - | - | - | - |
| `num_points_backlog` | - | - | - | - | - |
| `num_points_completed` | - | - | - | - | - |
| `num_points_in_progress` | - | - | - | - | - |
| `num_points_total` | - | - | - | - | - |
| `num_points_unstarted` | - | - | - | - | - |
| `num_related_documents` | - | - | - | - | - |
| `num_stories_backlog` | - | - | - | - | - |
| `num_stories_completed` | - | - | - | - | - |
| `num_stories_in_progress` | - | - | - | - | - |
| `num_stories_total` | - | - | - | - | - |
| `num_stories_unestimated` | - | - | - | - | - |
| `num_stories_unstarted` | - | - | - | - | - |
| `stats` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Label().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Label().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Label().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Label().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Label().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LabelEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LinkedFileEntity

```ts
const linked_file = client.LinkedFile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `string` | Yes | The content type of the image (e.g. |
| `created_at` | `string` | Yes | The time/date the LinkedFile was created. |
| `description` | `string` | Yes | The description of the file. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `group_mention_ids` | `any[]` | Yes | The groups that are mentioned in the description of the file. |
| `id` | `number` | Yes | The unique identifier for the file. |
| `member_mention_ids` | `any[]` | Yes | The members that are mentioned in the description of the file. |
| `mention_ids` | `any[]` | Yes | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | Yes | The name of the linked file. |
| `size` | `number` | Yes | The filesize, if the integration provided it. |
| `story_id` | `number` | No | The ID of the linked story. |
| `story_ids` | `any[]` | Yes | The IDs of the stories this file is attached to. |
| `thumbnail_url` | `string` | Yes | The URL of the file thumbnail, if the integration provided it. |
| `type` | `string` | Yes | The integration type (e.g. |
| `updated_at` | `string` | Yes | The time/date the LinkedFile was updated. |
| `uploader_id` | `string` | Yes | The UUID of the member that uploaded the file. |
| `url` | `string` | Yes | The URL of the file. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `content_type` | - | - | Yes | - | - |
| `created_at` | - | - | - | - | - |
| `description` | - | - | Yes | Yes | - |
| `entity_type` | - | - | - | - | - |
| `group_mention_ids` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `member_mention_ids` | - | - | - | - | - |
| `mention_ids` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `size` | - | - | Yes | Yes | - |
| `story_id` | - | - | - | - | - |
| `story_ids` | - | - | - | - | - |
| `thumbnail_url` | - | - | Yes | Yes | - |
| `type` | - | - | - | Yes | - |
| `updated_at` | - | - | - | - | - |
| `uploader_id` | - | - | Yes | Yes | - |
| `url` | - | - | - | Yes | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LinkedFile().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LinkedFile().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.LinkedFile().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.LinkedFile().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.LinkedFile().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LinkedFileEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MemberEntity

```ts
const member = client.Member()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The time/date the Member was created. |
| `created_without_invite` | `boolean` | Yes | Whether this member was created as a placeholder entity. |
| `disabled` | `boolean` | Yes | True/false boolean indicating whether the Member has been disabled within the Workspace. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `global_id` | `string` | Yes |  |
| `group_ids` | `any[]` | Yes | The Member's group ids |
| `id` | `string` | Yes | The Member's ID in Shortcut. |
| `installation_id` | `string` | No | Only set for agents. |
| `is_owner` | `boolean` | Yes |  |
| `mention_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `organization2` | `Record<string, any>` | Yes |  |
| `profile` | `Record<string, any>` | Yes | A group of Member profile details. |
| `replaced_by` | `string` | No | The id of the member that replaces this one when merged. |
| `role` | `string` | Yes | The Member's role in the Workspace. |
| `state` | `string` | Yes | The user state, one of partial, full, disabled, or imported. |
| `updated_at` | `string` | Yes | The time/date the Member was last updated. |
| `workspace2` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Member().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Member().load({ id: 'member_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MilestoneEntity

```ts
const milestone = client.Milestone()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `number` | No | The ID of the Milestone we want to move this Milestone after. |
| `app_url` | `string` | Yes | The Shortcut application url for the Milestone. |
| `archived` | `boolean` | Yes | A boolean indicating whether the Milestone has been archived or not. |
| `before_id` | `number` | No | The ID of the Milestone we want to move this Milestone before. |
| `categories` | `any[]` | Yes | An array of Categories attached to the Milestone. |
| `completed` | `boolean` | Yes | A true/false boolean indicating if the Milestone has been completed. |
| `completed_at` | `string` | Yes | The time/date the Milestone was completed. |
| `completed_at_override` | `string` | Yes | A manual override for the time/date the Milestone was completed. |
| `created_at` | `string` | Yes | The time/date the Milestone was created. |
| `description` | `string` | Yes | The Milestone's description. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `global_id` | `string` | Yes |  |
| `id` | `number` | Yes | The unique ID of the Milestone. |
| `key_result_ids` | `any[]` | Yes | The IDs of the Key Results associated with the Objective. |
| `name` | `string` | Yes | The name of the Milestone. |
| `position` | `number` | Yes | A number representing the position of the Milestone in relation to every other Milestone within the Workspace. |
| `started` | `boolean` | Yes | A true/false boolean indicating if the Milestone has been started. |
| `started_at` | `string` | Yes | The time/date the Milestone was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Milestone was started. |
| `state` | `string` | Yes | The workflow state that the Milestone is in. |
| `stats` | `Record<string, any>` | Yes | A group of calculated values for this Milestone. |
| `updated_at` | `string` | Yes | The time/date the Milestone was updated. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `after_id` | - | - | - | - | - |
| `app_url` | - | - | - | - | - |
| `archived` | - | - | - | Yes | - |
| `before_id` | - | - | - | - | - |
| `categories` | - | - | Yes | Yes | - |
| `completed` | - | - | - | - | - |
| `completed_at` | - | - | - | - | - |
| `completed_at_override` | - | - | Yes | Yes | - |
| `created_at` | - | - | - | - | - |
| `description` | - | - | Yes | Yes | - |
| `entity_type` | - | - | - | - | - |
| `global_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `key_result_ids` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `position` | - | - | - | - | - |
| `started` | - | - | - | - | - |
| `started_at` | - | - | - | - | - |
| `started_at_override` | - | - | Yes | Yes | - |
| `state` | - | - | Yes | Yes | - |
| `stats` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Milestone().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Milestone().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Milestone().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Milestone().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Milestone().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MilestoneEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ObjectifEntity

```ts
const objectif = client.Objectif()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Objectif().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ObjectifEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ObjectiveEntity

```ts
const objective = client.Objective()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `number` | No | The ID of the Objective we want to move this Objective after. |
| `app_url` | `string` | Yes | The Shortcut application url for the Objective. |
| `archived` | `boolean` | Yes | A boolean indicating whether the Objective has been archived or not. |
| `before_id` | `number` | No | The ID of the Objective we want to move this Objective before. |
| `categories` | `any[]` | Yes | An array of Categories attached to the Objective. |
| `completed` | `boolean` | Yes | A true/false boolean indicating if the Objectivehas been completed. |
| `completed_at` | `string` | Yes | The time/date the Objective was completed. |
| `completed_at_override` | `string` | Yes | A manual override for the time/date the Objective was completed. |
| `created_at` | `string` | Yes | The time/date the Objective was created. |
| `description` | `string` | Yes | The Objective's description. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `global_id` | `string` | Yes |  |
| `id` | `number` | Yes | The unique ID of the Objective. |
| `key_result_ids` | `any[]` | Yes | The IDs of the Key Results associated with the Objective. |
| `name` | `string` | Yes | The name of the Objective. |
| `position` | `number` | Yes | A number representing the position of the Objective in relation to every other Objective within the Workspace. |
| `started` | `boolean` | Yes | A true/false boolean indicating if the Objective has been started. |
| `started_at` | `string` | Yes | The time/date the Objective was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Objective was started. |
| `state` | `string` | Yes | The workflow state that the Objective is in. |
| `stats` | `Record<string, any>` | Yes | A group of calculated values for this Objective. |
| `updated_at` | `string` | Yes | The time/date the Objective was updated. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `after_id` | - | - | - | - |
| `app_url` | - | - | - | - |
| `archived` | - | - | - | Yes |
| `before_id` | - | - | - | - |
| `categories` | - | - | Yes | Yes |
| `completed` | - | - | - | - |
| `completed_at` | - | - | - | - |
| `completed_at_override` | - | - | Yes | Yes |
| `created_at` | - | - | - | - |
| `description` | - | Yes | Yes | Yes |
| `entity_type` | - | - | - | - |
| `global_id` | - | - | - | - |
| `id` | - | - | - | - |
| `key_result_ids` | - | - | - | - |
| `name` | - | - | - | Yes |
| `position` | - | - | - | - |
| `started` | - | - | - | - |
| `started_at` | - | - | - | - |
| `started_at_override` | - | - | Yes | Yes |
| `state` | - | - | Yes | Yes |
| `stats` | - | - | - | - |
| `updated_at` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Objective().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Objective().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Objective().load({ objective_public_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Objective().update({
  objective_public_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ObjectiveEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectEntity

```ts
const project = client.Project()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abbreviation` | `string` | Yes | The Project abbreviation used in Story summaries. |
| `app_url` | `string` | Yes | The Shortcut application url for the Project. |
| `archived` | `boolean` | Yes | True/false boolean indicating whether the Project is in an Archived state. |
| `color` | `string` | Yes | The color associated with the Project in the Shortcut member interface. |
| `created_at` | `string` | Yes | The time/date that the Project was created. |
| `days_to_thermometer` | `number` | Yes | The number of days before the thermometer appears in the Story summary. |
| `description` | `string` | Yes | The description of the Project. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `follower_ids` | `any[]` | Yes | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `string` | Yes | The Global ID of the Project. |
| `id` | `number` | Yes | The unique ID of the Project. |
| `iteration_length` | `number` | Yes | The number of weeks per iteration in this Project. |
| `name` | `string` | Yes | The name of the Project |
| `show_thermometer` | `boolean` | Yes | Configuration to enable or disable thermometers in the Story summary. |
| `start_time` | `string` | Yes | The date at which the Project was started. |
| `stats` | `Record<string, any>` | Yes | A group of calculated values for this Project. |
| `team_id` | `number` | Yes | The ID of the team the project belongs to. |
| `updated_at` | `string` | Yes | The time/date that the Project was last updated. |
| `workflow_id` | `number` | Yes | The ID of the workflow the project belongs to. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `abbreviation` | - | - | Yes | Yes | - |
| `app_url` | - | - | - | - | - |
| `archived` | - | - | - | Yes | - |
| `color` | - | - | Yes | Yes | - |
| `created_at` | - | - | Yes | - | - |
| `days_to_thermometer` | - | - | - | Yes | - |
| `description` | - | - | Yes | Yes | - |
| `entity_type` | - | - | - | - | - |
| `external_id` | - | - | Yes | - | - |
| `follower_ids` | - | - | Yes | Yes | - |
| `global_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `iteration_length` | - | - | Yes | - | - |
| `name` | - | - | - | Yes | - |
| `show_thermometer` | - | - | - | Yes | - |
| `start_time` | - | - | Yes | - | - |
| `stats` | - | - | - | - | - |
| `team_id` | - | - | - | Yes | - |
| `updated_at` | - | - | Yes | - | - |
| `workflow_id` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Project().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Project().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Project().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Project().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Project().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RepositoryEntity

```ts
const repository = client.Repository()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The time/date the Repository was created. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | The VCS unique identifier for the Repository. |
| `full_name` | `string` | Yes | The full name of the VCS repository. |
| `id` | `number` | Yes | The ID associated to the VCS repository in Shortcut. |
| `name` | `string` | Yes | The shorthand name of the VCS repository. |
| `type` | `string` | Yes | The VCS provider for the Repository. |
| `updated_at` | `string` | Yes | The time/date the Repository was updated. |
| `url` | `string` | Yes | The URL of the Repository. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Repository().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Repository().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RepositoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SearchEntity

```ts
const search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `epics` | `Record<string, any>` | Yes | The results of the Epic search query. |
| `iterations` | `Record<string, any>` | Yes | The results of the Iteration search query. |
| `milestones` | `Record<string, any>` | Yes | The results of the Objective search query. |
| `stories` | `Record<string, any>` | Yes | The results of the Story search query. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Search().load({ query: 'query' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StoryEntity

```ts
const story = client.Story()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `number` | No | The ID of the story we want to move this story after. |
| `app_url` | `string` | Yes | The Shortcut application url for the Story. |
| `archived` | `boolean` | Yes | True if the story has been archived or not. |
| `before_id` | `number` | No | The ID of the story we want to move this story before. |
| `blocked` | `boolean` | Yes | A true/false boolean indicating if the Story is currently blocked. |
| `blocker` | `boolean` | Yes | A true/false boolean indicating if the Story is currently a blocker of another story. |
| `branch_ids` | `any[]` | No | An array of IDs of Branches attached to the story. |
| `branches` | `any[]` | Yes | An array of Git branches attached to the story. |
| `comment_ids` | `any[]` | No | An array of IDs of Comments attached to the story. |
| `comments` | `any[]` | Yes | An array of comments attached to the story. |
| `commit_ids` | `any[]` | No | An array of IDs of Commits attached to the story. |
| `commits` | `any[]` | Yes | An array of commits attached to the story. |
| `completed` | `boolean` | Yes | A true/false boolean indicating if the Story has been completed. |
| `completed_at` | `string` | Yes | The time/date the Story was completed. |
| `completed_at_override` | `string` | Yes | A manual override for the time/date the Story was completed. |
| `created_at` | `string` | Yes | The time/date the Story was created. |
| `custom_fields` | `any[]` | No | An array of CustomField value assertions for the story. |
| `custom_fields_add` | `any[]` | No | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `any[]` | No | A map specifying a CustomField ID. |
| `cycle_time` | `number` | No | The cycle time (in seconds) of this story when complete. |
| `deadline` | `string` | Yes | The due date of the story. |
| `description` | `string` | Yes | The description of the story. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `epic_id` | `number` | Yes | The ID of the epic the story belongs to. |
| `estimate` | `number` | Yes | The numeric point estimate of the story. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `external_links` | `any[]` | Yes | An array of external links (strings) associated with a Story |
| `external_links_add` | `any[]` | No | An array of External Links associated with this story. |
| `external_links_remove` | `any[]` | No | An array of External Links associated with this story. |
| `file_ids` | `any[]` | No | An array of IDs of files attached to the story. |
| `file_ids_add` | `any[]` | No | An array of IDs of files attached to the story in addition to files from the template. |
| `file_ids_remove` | `any[]` | No | An array of IDs of files removed from files from the template. |
| `files` | `any[]` | Yes | An array of files attached to the story. |
| `follower_ids` | `any[]` | Yes | An array of UUIDs for any Members listed as Followers. |
| `follower_ids_add` | `any[]` | No | The UUIDs of the new followers to be added in addition to followers from the template. |
| `follower_ids_remove` | `any[]` | No | The UUIDs of the new followers to be removed from followers from the template. |
| `formatted_vcs_branch_name` | `string` | No | The formatted branch name for this story. |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes | The ID of the group associated with the story. |
| `group_mention_ids` | `any[]` | Yes | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `number` | Yes | The unique ID of the Story. |
| `iteration_id` | `number` | Yes | The ID of the iteration the story belongs to. |
| `label_ids` | `any[]` | Yes | An array of label ids attached to the story. |
| `labels` | `any[]` | Yes | An array of labels attached to the story. |
| `labels_add` | `any[]` | No | An array of labels attached to the story in addition to the labels provided by the template. |
| `labels_remove` | `any[]` | No | An array of labels to remove from the labels provided by the template. |
| `lead_time` | `number` | No | The lead time (in seconds) of this story when complete. |
| `linked_file_ids` | `any[]` | No | An array of IDs of linked files attached to the story. |
| `linked_file_ids_add` | `any[]` | No | An array of IDs of linked files attached to the story in addition to files from the template. |
| `linked_file_ids_remove` | `any[]` | No | An array of IDs of linked files removed from files from the template. |
| `linked_files` | `any[]` | Yes | An array of linked files attached to the story. |
| `member_mention_ids` | `any[]` | Yes | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `any[]` | Yes | `Deprecated:` use `member_mention_ids`. |
| `move_to` | `string` | No | One of "first" or "last". |
| `moved_at` | `string` | Yes | The time/date the Story was last changed workflow-state. |
| `name` | `string` | Yes | The name of the story. |
| `num_tasks_completed` | `number` | No | The number of tasks on the story which are complete. |
| `owner_ids` | `any[]` | Yes | An array of UUIDs of the owners of this story. |
| `owner_ids_add` | `any[]` | No | The UUIDs of the new owners to be added in addition to owners from the template. |
| `owner_ids_remove` | `any[]` | No | The UUIDs of the new owners to be removed from owners from the template. |
| `parent_story_id` | `number` | No | The id of the parent story to associate with this story. |
| `position` | `number` | Yes | A number representing the position of the story in relation to every other story in the current project. |
| `previous_iteration_ids` | `any[]` | Yes | The IDs of the iteration the story belongs to. |
| `project_id` | `number` | Yes | The ID of the project the story belongs to. |
| `pull_request_ids` | `any[]` | No | An array of IDs of Pull/Merge Requests attached to the story. |
| `pull_requests` | `any[]` | Yes | An array of Pull/Merge Requests attached to the story. |
| `requested_by_id` | `string` | Yes | The ID of the Member that requested the story. |
| `source_task_id` | `number` | No | Given this story was converted from a task in another story, this is the original task ID that was converted to this story. |
| `started` | `boolean` | Yes | A true/false boolean indicating if the Story has been started. |
| `started_at` | `string` | Yes | The time/date the Story was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Story was started. |
| `stats` | `Record<string, any>` | Yes | The stats object for Stories |
| `story_links` | `any[]` | Yes | An array of story links attached to the Story. |
| `story_template_id` | `string` | Yes | The ID of the story template used to create this story, or null if not created using a template. |
| `story_type` | `string` | Yes | The type of story (feature, bug, chore). |
| `sub_task_story_ids` | `any[]` | No |  |
| `sub_tasks` | `any[]` | No | A list of either params to create a new sub-task or link an existing story as a sub-task |
| `synced_item` | `Record<string, any>` | Yes | The synced item for the story. |
| `task_ids` | `any[]` | No | An array of IDs of Tasks attached to the story. |
| `tasks` | `any[]` | Yes | An array of tasks connected to the story. |
| `updated_at` | `string` | Yes | The time/date the Story was updated. |
| `workflow_id` | `number` | Yes | The ID of the workflow the story belongs to. |
| `workflow_state_id` | `number` | Yes | The ID of the workflow state the story is currently in. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `after_id` | - | - | - | - | - |
| `app_url` | - | - | - | - | - |
| `archived` | - | - | Yes | Yes | - |
| `before_id` | - | - | - | - | - |
| `blocked` | - | - | - | - | - |
| `blocker` | - | - | - | - | - |
| `branch_ids` | - | - | - | - | - |
| `branches` | - | Yes | - | - | - |
| `comment_ids` | - | Yes | - | - | - |
| `comments` | - | Yes | Yes | - | - |
| `commit_ids` | - | - | - | - | - |
| `commits` | - | Yes | - | - | - |
| `completed` | - | - | - | - | - |
| `completed_at` | - | - | - | - | - |
| `completed_at_override` | - | - | Yes | Yes | - |
| `created_at` | - | - | Yes | - | - |
| `custom_fields` | - | - | - | - | - |
| `custom_fields_add` | - | - | - | - | - |
| `custom_fields_remove` | - | - | - | - | - |
| `cycle_time` | - | - | - | - | - |
| `deadline` | - | - | Yes | Yes | - |
| `description` | - | Yes | Yes | Yes | - |
| `entity_type` | - | - | - | - | - |
| `epic_id` | - | - | Yes | Yes | - |
| `estimate` | - | - | Yes | Yes | - |
| `external_id` | - | - | Yes | - | - |
| `external_links` | - | - | Yes | Yes | - |
| `external_links_add` | - | - | - | - | - |
| `external_links_remove` | - | - | - | - | - |
| `file_ids` | - | Yes | - | - | - |
| `file_ids_add` | - | - | - | - | - |
| `file_ids_remove` | - | - | - | - | - |
| `files` | - | Yes | - | - | - |
| `follower_ids` | - | - | Yes | Yes | - |
| `follower_ids_add` | - | - | - | - | - |
| `follower_ids_remove` | - | - | - | - | - |
| `formatted_vcs_branch_name` | - | - | - | - | - |
| `global_id` | - | - | - | - | - |
| `group_id` | - | - | Yes | Yes | - |
| `group_mention_ids` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `iteration_id` | - | - | Yes | Yes | - |
| `label_ids` | - | - | - | - | - |
| `labels` | - | - | Yes | Yes | - |
| `labels_add` | - | - | - | - | - |
| `labels_remove` | - | - | - | - | - |
| `lead_time` | - | - | - | - | - |
| `linked_file_ids` | - | Yes | - | - | - |
| `linked_file_ids_add` | - | - | - | - | - |
| `linked_file_ids_remove` | - | - | - | - | - |
| `linked_files` | - | Yes | - | - | - |
| `member_mention_ids` | - | - | - | - | - |
| `mention_ids` | - | - | - | - | - |
| `move_to` | - | - | - | - | - |
| `moved_at` | - | - | - | - | - |
| `name` | - | - | Yes | Yes | - |
| `num_tasks_completed` | - | Yes | - | - | - |
| `owner_ids` | - | - | Yes | Yes | - |
| `owner_ids_add` | - | - | - | - | - |
| `owner_ids_remove` | - | - | - | - | - |
| `parent_story_id` | - | - | - | - | - |
| `position` | - | - | - | - | - |
| `previous_iteration_ids` | - | - | - | - | - |
| `project_id` | - | - | Yes | Yes | - |
| `pull_request_ids` | - | - | - | - | - |
| `pull_requests` | - | Yes | - | - | - |
| `requested_by_id` | - | - | Yes | Yes | - |
| `source_task_id` | - | - | - | - | - |
| `started` | - | - | - | - | - |
| `started_at` | - | - | - | - | - |
| `started_at_override` | - | - | Yes | Yes | - |
| `stats` | - | - | - | - | - |
| `story_links` | - | - | Yes | - | - |
| `story_template_id` | - | - | Yes | - | - |
| `story_type` | - | - | Yes | Yes | - |
| `sub_task_story_ids` | - | - | - | - | - |
| `sub_tasks` | - | - | - | - | - |
| `synced_item` | - | - | - | - | - |
| `task_ids` | - | Yes | - | - | - |
| `tasks` | - | Yes | Yes | - | - |
| `updated_at` | - | - | Yes | - | - |
| `workflow_id` | - | - | - | - | - |
| `workflow_state_id` | - | - | Yes | Yes | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `from_template` | `/api/v3/stories/from-template` | `client.Story().create({ $action: 'from_template', ... })` |

An action returns that action's OWN response, which is not necessarily a
Story record — check the API definition for its shape.

```ts
const result = await client.Story().create({
  $action: 'from_template',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Story().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Story().list({ query: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Story().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Story().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Story().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StoryCommentEntity

```ts
const story_comment = client.StoryComment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes | The Shortcut application url for the Comment. |
| `author_id` | `string` | Yes | The unique ID of the Member who is the Comment's author. |
| `blocker` | `boolean` | No | Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment. |
| `created_at` | `string` | Yes | The time/date when the Comment was created. |
| `deleted` | `boolean` | Yes | True/false boolean indicating whether the Comment has been deleted. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `group_mention_ids` | `any[]` | Yes | The unique IDs of the Group who are mentioned in the Comment. |
| `id` | `number` | Yes | The unique ID of the Comment. |
| `linked_to_slack` | `boolean` | Yes | Whether the Comment is currently the root of a thread that is linked to Slack. |
| `member_mention_ids` | `any[]` | Yes | The unique IDs of the Member who are mentioned in the Comment. |
| `mention_ids` | `any[]` | Yes | `Deprecated:` use `member_mention_ids`. |
| `parent_id` | `number` | No | The ID of the parent Comment this Comment is threaded under. |
| `position` | `number` | Yes | The Comments numerical position in the list from oldest to newest. |
| `reactions` | `any[]` | Yes | A set of Reactions to this Comment. |
| `story_id` | `number` | Yes | The ID of the Story on which the Comment appears. |
| `text` | `string` | Yes | The text of the Comment. |
| `unblocks_parent` | `boolean` | No | Marks the comment as an unblocker to its blocker parent. |
| `updated_at` | `string` | Yes | The time/date when the Comment was updated. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `app_url` | - | - | - | - |
| `author_id` | - | - | Yes | - |
| `blocker` | - | - | - | - |
| `created_at` | - | - | Yes | - |
| `deleted` | - | - | - | - |
| `entity_type` | - | - | - | - |
| `external_id` | - | - | Yes | - |
| `group_mention_ids` | - | - | - | - |
| `id` | - | - | - | - |
| `linked_to_slack` | - | - | - | - |
| `member_mention_ids` | - | - | - | - |
| `mention_ids` | - | - | - | - |
| `parent_id` | - | - | - | - |
| `position` | - | - | - | - |
| `reactions` | - | - | - | - |
| `story_id` | - | - | - | - |
| `text` | - | - | - | - |
| `unblocks_parent` | - | - | - | - |
| `updated_at` | - | - | Yes | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.StoryComment().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.StoryComment().list({ id: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.StoryComment().load({ id: 1, story_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.StoryComment().update({
  id: 1,
  story_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StoryCommentEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StoryLinkEntity

```ts
const story_link = client.StoryLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The time/date when the Story Link was created. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `id` | `number` | Yes | The unique identifier of the Story Link. |
| `object_id` | `number` | Yes | The ID of the object Story. |
| `subject_id` | `number` | Yes | The ID of the subject Story. |
| `subject_workflow_state_id` | `number` | Yes | The workflow state of the "subject" story. |
| `updated_at` | `string` | Yes | The time/date when the Story Link was last updated. |
| `verb` | `string` | Yes | How the subject Story acts on the object Story. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - |
| `entity_type` | - | - | - | - |
| `id` | - | - | - | - |
| `object_id` | - | - | Yes | - |
| `subject_id` | - | - | Yes | - |
| `subject_workflow_state_id` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `verb` | - | - | Yes | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.StoryLink().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.StoryLink().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.StoryLink().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.StoryLink().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StoryLinkEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StoryReactionEntity

```ts
const story_reaction = client.StoryReaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emoji` | `string` | Yes | The emoji short-code to add / remove. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.StoryReaction().create({
  comment_id: 1,
  story_id: 1,
  emoji: 'example_emoji',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.StoryReaction().remove({ comment_id: 1, story_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StoryReactionEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StorySlimEntity

```ts
const story_slim = client.StorySlim()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `number` | No | The ID of the story that the stories are to be moved below. |
| `archived` | `boolean` | No | A true/false boolean indicating whether the Story is in archived state. |
| `before_id` | `number` | No | The ID of the story that the stories are to be moved before. |
| `completed_at_end` | `string` | No | Stories should have been completed on or before this date. |
| `completed_at_start` | `string` | No | Stories should have been completed on or after this date. |
| `created_at_end` | `string` | No | Stories should have been created on or before this date. |
| `created_at_start` | `string` | No | Stories should have been created on or after this date. |
| `custom_fields_add` | `any[]` | No | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `any[]` | No | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `string` | No | The due date of the story. |
| `deadline_end` | `string` | No | Stories should have a deadline on or before this date. |
| `deadline_start` | `string` | No | Stories should have a deadline on or after this date. |
| `epic_id` | `number` | No | The Epic IDs that may be associated with the Stories. |
| `epic_ids` | `any[]` | No | The Epic IDs that may be associated with the Stories. |
| `estimate` | `number` | No | The number of estimate points associate with the Stories. |
| `external_id` | `string` | No | An ID or URL that references an external resource. |
| `external_links` | `any[]` | No | An array of External Links associated with this story. |
| `follower_ids_add` | `any[]` | No | The UUIDs of the new followers to be added. |
| `follower_ids_remove` | `any[]` | No | The UUIDs of the followers to be removed. |
| `group_id` | `string` | No | The Group ID that is associated with the Stories |
| `group_ids` | `any[]` | No | The Group IDs that are associated with the Stories |
| `includes_description` | `boolean` | No | Whether to include the story description in the response. |
| `iteration_id` | `number` | No | The Iteration ID that may be associated with the Stories. |
| `iteration_ids` | `any[]` | No | The Iteration IDs that may be associated with the Stories. |
| `label_ids` | `any[]` | No | The Label IDs that may be associated with the Stories. |
| `label_name` | `string` | No | The name of any associated Labels. |
| `labels_add` | `any[]` | No | An array of labels to be added. |
| `labels_remove` | `any[]` | No | An array of labels to be removed. |
| `move_to` | `string` | No | One of "first" or "last". |
| `owner_id` | `string` | No | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids` | `any[]` | No | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids_add` | `any[]` | No | The UUIDs of the new owners to be added. |
| `owner_ids_remove` | `any[]` | No | The UUIDs of the owners to be removed. |
| `project_id` | `number` | No | The IDs for the Projects the Stories may be assigned to. |
| `project_ids` | `any[]` | No | The IDs for the Projects the Stories may be assigned to. |
| `requested_by_id` | `string` | No | The UUID of any Users who may have requested the Stories. |
| `stories` | `any[]` | Yes | An array of stories to be created. |
| `story_ids` | `any[]` | Yes | The Ids of the Stories you wish to update. |
| `story_type` | `string` | No | The type of Stories that you want returned. |
| `updated_at_end` | `string` | No | Stories should have been updated on or before this date. |
| `updated_at_start` | `string` | No | Stories should have been updated on or after this date. |
| `workflow_state_id` | `number` | No | The unique IDs of the specific Workflow States that the Stories should be in. |
| `workflow_state_types` | `any[]` | No | The type of Workflow State the Stories may be in. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.StorySlim().create({
  stories: [],
  story_ids: [],
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.StorySlim().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StorySlimEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TaskEntity

```ts
const task = client.Task()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `number` | No | Move task after this task ID. |
| `before_id` | `number` | No | Move task before this task ID. |
| `complete` | `boolean` | Yes | True/false boolean indicating whether the Task has been completed. |
| `completed_at` | `string` | Yes | The time/date the Task was completed. |
| `created_at` | `string` | Yes | The time/date the Task was created. |
| `description` | `string` | Yes | Full text of the Task. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `global_id` | `string` | Yes |  |
| `group_mention_ids` | `any[]` | Yes | An array of UUIDs of Groups mentioned in this Task. |
| `id` | `number` | Yes | The unique ID of the Task. |
| `member_mention_ids` | `any[]` | Yes | An array of UUIDs of Members mentioned in this Task. |
| `mention_ids` | `any[]` | Yes | `Deprecated:` use `member_mention_ids`. |
| `owner_ids` | `any[]` | Yes | An array of UUIDs of the Owners of this Task. |
| `position` | `number` | Yes | The number corresponding to the Task's position within a list of Tasks on a Story. |
| `story_id` | `number` | Yes | The unique identifier of the parent Story. |
| `updated_at` | `string` | Yes | The time/date the Task was updated. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `after_id` | - | - | - | - |
| `before_id` | - | - | - | - |
| `complete` | - | Yes | Yes | - |
| `completed_at` | - | - | - | - |
| `created_at` | - | Yes | - | - |
| `description` | - | - | Yes | - |
| `entity_type` | - | - | - | - |
| `external_id` | - | Yes | - | - |
| `global_id` | - | - | - | - |
| `group_mention_ids` | - | - | - | - |
| `id` | - | - | - | - |
| `member_mention_ids` | - | - | - | - |
| `mention_ids` | - | - | - | - |
| `owner_ids` | - | Yes | Yes | - |
| `position` | - | - | - | - |
| `story_id` | - | - | - | - |
| `updated_at` | - | Yes | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Task().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Task().load({ id: 1, story_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Task().remove({ id: 1, story_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Task().update({
  id: 1,
  story_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TaskEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ThreadedCommentEntity

```ts
const threaded_comment = client.ThreadedComment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes | The Shortcut application url for the Comment. |
| `author_id` | `string` | Yes | The unique ID of the Member that authored the Comment. |
| `comments` | `any[]` | Yes | A nested array of threaded comments. |
| `created_at` | `string` | Yes | The time/date the Comment was created. |
| `deleted` | `boolean` | Yes | True/false boolean indicating whether the Comment is deleted. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `group_mention_ids` | `any[]` | Yes | An array of Group IDs that have been mentioned in this Comment. |
| `id` | `number` | Yes | The unique ID of the Comment. |
| `member_mention_ids` | `any[]` | Yes | An array of Member IDs that have been mentioned in this Comment. |
| `mention_ids` | `any[]` | Yes | `Deprecated:` use `member_mention_ids`. |
| `text` | `string` | Yes | The text of the Comment. |
| `updated_at` | `string` | Yes | The time/date the Comment was updated. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `app_url` | - | - | - | - | - |
| `author_id` | - | - | Yes | - | - |
| `comments` | - | - | - | - | - |
| `created_at` | - | - | Yes | - | - |
| `deleted` | - | - | - | - | - |
| `entity_type` | - | - | - | - | - |
| `external_id` | - | - | Yes | - | - |
| `group_mention_ids` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `member_mention_ids` | - | - | - | - | - |
| `mention_ids` | - | - | - | - | - |
| `text` | - | - | - | - | - |
| `updated_at` | - | - | Yes | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ThreadedComment().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ThreadedComment().list({ epic_id: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ThreadedComment().load({ id: 1, epic_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ThreadedComment().remove({ id: 1, epic_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ThreadedComment().update({
  id: 1,
  epic_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ThreadedCommentEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UploadedFileEntity

```ts
const uploaded_file = client.UploadedFile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `string` | Yes | Free form string corresponding to a text or image file. |
| `created_at` | `string` | Yes | The time/date that the file was created. |
| `description` | `string` | Yes | The description of the file. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `filename` | `string` | Yes | The name assigned to the file in Shortcut upon upload. |
| `group_mention_ids` | `any[]` | Yes | The unique IDs of the Groups who are mentioned in the file description. |
| `id` | `number` | Yes | The unique ID for the file. |
| `member_mention_ids` | `any[]` | Yes | The unique IDs of the Members who are mentioned in the file description. |
| `mention_ids` | `any[]` | Yes | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | Yes | The optional User-specified name of the file. |
| `size` | `number` | Yes | The size of the file. |
| `story_ids` | `any[]` | Yes | The unique IDs of the Stories associated with this file. |
| `thumbnail_url` | `string` | Yes | The url where the thumbnail of the file can be found in Shortcut. |
| `updated_at` | `string` | Yes | The time/date that the file was updated. |
| `uploader_id` | `string` | Yes | The unique ID of the Member who uploaded the file. |
| `url` | `string` | Yes | The URL for the file. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `content_type` | - | - | - | - | - |
| `created_at` | - | - | - | Yes | - |
| `description` | - | - | - | Yes | - |
| `entity_type` | - | - | - | - | - |
| `external_id` | - | - | - | Yes | - |
| `filename` | - | - | - | - | - |
| `group_mention_ids` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `member_mention_ids` | - | - | - | - | - |
| `mention_ids` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `size` | - | - | - | - | - |
| `story_ids` | - | - | - | - | - |
| `thumbnail_url` | - | - | - | - | - |
| `updated_at` | - | - | - | Yes | - |
| `uploader_id` | - | - | - | Yes | - |
| `url` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.UploadedFile().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UploadedFile().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.UploadedFile().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.UploadedFile().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UploadedFile().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UploadedFileEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookEntity

```ts
const webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `secret` | `string` | No |  |
| `webhook_url` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Webhook().create({
  webhook_url: 'example_webhook_url',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Webhook().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Webhook().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkflowEntity

```ts
const workflow = client.Workflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_assign_owner` | `boolean` | Yes | Indicates if an owner is automatically assigned when an unowned story is started. |
| `created_at` | `string` | Yes | The date the Workflow was created. |
| `default_state_id` | `number` | Yes | The unique ID of the default state that new Stories are entered into. |
| `description` | `string` | Yes | A description of the workflow. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `id` | `number` | Yes | The unique ID of the Workflow. |
| `name` | `string` | Yes | The name of the workflow. |
| `project_ids` | `any[]` | Yes | An array of IDs of projects within the Workflow. |
| `states` | `any[]` | Yes | A map of the states in this Workflow. |
| `team_id` | `number` | Yes | The ID of the team the workflow belongs to. |
| `updated_at` | `string` | Yes | The date the Workflow was updated. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Workflow().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Workflow().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `client()`

Return the parent `ShortcutSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new ShortcutSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.


# Shortcut JavaScript SDK Reference

Complete API reference for the Shortcut JavaScript SDK.


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
| `archived` | `boolean` | Yes |  |
| `color` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

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
| `after_id` | `string` | No |  |
| `before_id` | `string` | No |  |
| `canonical_name` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | No |  |
| `enabled` | `boolean` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `field_type` | `string` | Yes |  |
| `fixed_position` | `boolean` | No |  |
| `icon_set_identifier` | `string` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `position` | `number` | Yes |  |
| `story_types` | `Array` | No |  |
| `updated_at` | `string` | Yes |  |
| `values` | `Array` | No |  |

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
| `app_url` | `string` | Yes |  |
| `content` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `title` | `string` | Yes |  |

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
| `author_id` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `custom_fields` | `Array` | No |  |
| `deadline` | `string` | No |  |
| `description` | `string` | No |  |
| `entity_type` | `string` | No |  |
| `epic_id` | `number` | No |  |
| `estimate` | `number` | No |  |
| `external_links` | `Array` | No |  |
| `files` | `Array` | No |  |
| `follower_ids` | `Array` | No |  |
| `group_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `iteration_id` | `number` | No |  |
| `label_ids` | `Array` | No |  |
| `labels` | `Array` | No |  |
| `last_used_at` | `string` | Yes |  |
| `linked_files` | `Array` | No |  |
| `name` | `string` | No |  |
| `owner_ids` | `Array` | No |  |
| `project_id` | `number` | No |  |
| `story_contents` | `Object` | Yes |  |
| `story_type` | `string` | No |  |
| `sub_tasks` | `Array` | No |  |
| `tasks` | `Array` | No |  |
| `updated_at` | `string` | Yes |  |
| `workflow_state_id` | `number` | No |  |

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
| `after_id` | `number` | No |  |
| `app_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes |  |
| `associated_groups` | `Array` | Yes |  |
| `before_id` | `number` | No |  |
| `comments` | `Array` | Yes |  |
| `completed` | `boolean` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `completed_at_override` | `string` | Yes |  |
| `converted_from_story_id` | `number` | No |  |
| `created_at` | `string` | Yes |  |
| `deadline` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `epic_state_id` | `number` | Yes |  |
| `external_id` | `string` | Yes |  |
| `follower_ids` | `Array` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes |  |
| `group_ids` | `Array` | Yes |  |
| `group_mention_ids` | `Array` | Yes |  |
| `health` | `Object` | Yes |  |
| `id` | `number` | Yes |  |
| `label_ids` | `Array` | Yes |  |
| `labels` | `Array` | Yes |  |
| `member_mention_ids` | `Array` | Yes |  |
| `mention_ids` | `Array` | Yes |  |
| `milestone_id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `objective_ids` | `Array` | Yes |  |
| `owner_ids` | `Array` | Yes |  |
| `planned_start_date` | `string` | Yes |  |
| `position` | `number` | Yes |  |
| `productboard_id` | `string` | Yes |  |
| `productboard_name` | `string` | Yes |  |
| `productboard_plugin_id` | `string` | Yes |  |
| `productboard_url` | `string` | Yes |  |
| `project_ids` | `Array` | Yes |  |
| `requested_by_id` | `string` | Yes |  |
| `started` | `boolean` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `stats` | `Object` | Yes |  |
| `stories_without_projects` | `number` | Yes |  |
| `updated_at` | `string` | Yes |  |

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
| `app_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes |  |
| `associated_groups` | `Array` | Yes |  |
| `completed` | `boolean` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `completed_at_override` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deadline` | `string` | Yes |  |
| `description` | `string` | No |  |
| `entity_type` | `string` | Yes |  |
| `epic_state_id` | `number` | Yes |  |
| `external_id` | `string` | Yes |  |
| `follower_ids` | `Array` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes |  |
| `group_ids` | `Array` | Yes |  |
| `group_mention_ids` | `Array` | Yes |  |
| `id` | `number` | Yes |  |
| `label_ids` | `Array` | Yes |  |
| `labels` | `Array` | Yes |  |
| `member_mention_ids` | `Array` | Yes |  |
| `mention_ids` | `Array` | Yes |  |
| `milestone_id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `objective_ids` | `Array` | Yes |  |
| `owner_ids` | `Array` | Yes |  |
| `planned_start_date` | `string` | Yes |  |
| `position` | `number` | Yes |  |
| `productboard_id` | `string` | Yes |  |
| `productboard_name` | `string` | Yes |  |
| `productboard_plugin_id` | `string` | Yes |  |
| `productboard_url` | `string` | Yes |  |
| `project_ids` | `Array` | Yes |  |
| `requested_by_id` | `string` | Yes |  |
| `started` | `boolean` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `stats` | `Object` | Yes |  |
| `stories_without_projects` | `number` | Yes |  |
| `updated_at` | `string` | Yes |  |

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
| `color` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `position` | `number` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

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
| `app_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes |  |
| `color` | `string` | Yes |  |
| `color_key` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `default_workflow_id` | `number` | No |  |
| `description` | `string` | Yes |  |
| `display_icon` | `Object` | Yes |  |
| `display_icon_id` | `string` | No |  |
| `entity_type` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `member_ids` | `Array` | Yes |  |
| `mention_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `num_epics_started` | `number` | Yes |  |
| `num_stories` | `number` | Yes |  |
| `num_stories_backlog` | `number` | Yes |  |
| `num_stories_started` | `number` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workflow_ids` | `Array` | Yes |  |

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
| `author_id` | `string` | No |  |
| `created_at` | `string` | No |  |
| `entity_type` | `string` | Yes |  |
| `epic_id` | `number` | No |  |
| `id` | `string` | Yes |  |
| `objective_id` | `number` | No |  |
| `status` | `string` | Yes |  |
| `text` | `string` | No |  |
| `updated_at` | `string` | No |  |

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
const results = await client.Health().list()
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
| `actions` | `Array` | Yes |  |
| `actor_name` | `string` | No |  |
| `automation_id` | `string` | No |  |
| `changed_at` | `string` | Yes |  |
| `external_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `member_id` | `string` | No |  |
| `primary_id` | `string` | No |  |
| `references` | `Array` | No |  |
| `version` | `string` | Yes |  |
| `webhook_id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.History().list()
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
| `app_url` | `string` | Yes |  |
| `associated_groups` | `Array` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `follower_ids` | `Array` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_ids` | `Array` | Yes |  |
| `group_mention_ids` | `Array` | Yes |  |
| `id` | `number` | Yes |  |
| `label_ids` | `Array` | Yes |  |
| `labels` | `Array` | Yes |  |
| `member_mention_ids` | `Array` | Yes |  |
| `mention_ids` | `Array` | Yes |  |
| `name` | `string` | Yes |  |
| `start_date` | `string` | Yes |  |
| `stats` | `Object` | Yes |  |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

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
| `current_observed_value` | `Object` | Yes |  |
| `current_target_value` | `Object` | Yes |  |
| `id` | `string` | Yes |  |
| `initial_observed_value` | `Object` | Yes |  |
| `name` | `string` | Yes |  |
| `objective_id` | `number` | Yes |  |
| `observed_value` | `Object` | No |  |
| `progress` | `number` | Yes |  |
| `target_value` | `Object` | No |  |
| `type` | `string` | Yes |  |

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
| `app_url` | `string` | Yes |  |
| `archived` | `boolean` | No |  |
| `color` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | No |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | No |  |
| `global_id` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `num_epics` | `number` | Yes |  |
| `num_epics_completed` | `number` | Yes |  |
| `num_epics_in_progress` | `number` | Yes |  |
| `num_epics_total` | `number` | Yes |  |
| `num_epics_unstarted` | `number` | Yes |  |
| `num_points_backlog` | `number` | Yes |  |
| `num_points_completed` | `number` | Yes |  |
| `num_points_in_progress` | `number` | Yes |  |
| `num_points_total` | `number` | Yes |  |
| `num_points_unstarted` | `number` | Yes |  |
| `num_related_documents` | `number` | Yes |  |
| `num_stories_backlog` | `number` | Yes |  |
| `num_stories_completed` | `number` | Yes |  |
| `num_stories_in_progress` | `number` | Yes |  |
| `num_stories_total` | `number` | Yes |  |
| `num_stories_unestimated` | `number` | Yes |  |
| `num_stories_unstarted` | `number` | Yes |  |
| `stats` | `Object` | Yes |  |
| `updated_at` | `string` | Yes |  |

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
| `content_type` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `group_mention_ids` | `Array` | Yes |  |
| `id` | `number` | Yes |  |
| `member_mention_ids` | `Array` | Yes |  |
| `mention_ids` | `Array` | Yes |  |
| `name` | `string` | Yes |  |
| `size` | `number` | Yes |  |
| `story_id` | `number` | No |  |
| `story_ids` | `Array` | Yes |  |
| `thumbnail_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `uploader_id` | `string` | Yes |  |
| `url` | `string` | Yes |  |

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
| `created_at` | `string` | Yes |  |
| `created_without_invite` | `boolean` | Yes |  |
| `disabled` | `boolean` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_ids` | `Array` | Yes |  |
| `id` | `string` | Yes |  |
| `installation_id` | `string` | No |  |
| `is_owner` | `boolean` | Yes |  |
| `mention_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `organization2` | `Object` | Yes |  |
| `profile` | `Object` | Yes |  |
| `replaced_by` | `string` | No |  |
| `role` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workspace2` | `Object` | Yes |  |

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
| `after_id` | `number` | No |  |
| `app_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes |  |
| `before_id` | `number` | No |  |
| `categories` | `Array` | Yes |  |
| `completed` | `boolean` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `completed_at_override` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `key_result_ids` | `Array` | Yes |  |
| `name` | `string` | Yes |  |
| `position` | `number` | Yes |  |
| `started` | `boolean` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `stats` | `Object` | Yes |  |
| `updated_at` | `string` | Yes |  |

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
| `after_id` | `number` | No |  |
| `app_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes |  |
| `before_id` | `number` | No |  |
| `categories` | `Array` | Yes |  |
| `completed` | `boolean` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `completed_at_override` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `key_result_ids` | `Array` | Yes |  |
| `name` | `string` | Yes |  |
| `position` | `number` | Yes |  |
| `started` | `boolean` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `stats` | `Object` | Yes |  |
| `updated_at` | `string` | Yes |  |

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
| `abbreviation` | `string` | Yes |  |
| `app_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes |  |
| `color` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `days_to_thermometer` | `number` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `follower_ids` | `Array` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `iteration_length` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `show_thermometer` | `boolean` | Yes |  |
| `start_time` | `string` | Yes |  |
| `stats` | `Object` | Yes |  |
| `team_id` | `number` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workflow_id` | `number` | Yes |  |

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
| `created_at` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

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
| `epics` | `Object` | Yes |  |
| `iterations` | `Object` | Yes |  |
| `milestones` | `Object` | Yes |  |
| `stories` | `Object` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Search().load()
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
| `after_id` | `number` | No |  |
| `app_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes |  |
| `before_id` | `number` | No |  |
| `blocked` | `boolean` | Yes |  |
| `blocker` | `boolean` | Yes |  |
| `branch_ids` | `Array` | No |  |
| `branches` | `Array` | Yes |  |
| `comment_ids` | `Array` | No |  |
| `comments` | `Array` | Yes |  |
| `commit_ids` | `Array` | No |  |
| `commits` | `Array` | Yes |  |
| `completed` | `boolean` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `completed_at_override` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `custom_fields` | `Array` | No |  |
| `custom_fields_add` | `Array` | No |  |
| `custom_fields_remove` | `Array` | No |  |
| `cycle_time` | `number` | No |  |
| `deadline` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `epic_id` | `number` | Yes |  |
| `estimate` | `number` | Yes |  |
| `external_id` | `string` | Yes |  |
| `external_links` | `Array` | Yes |  |
| `external_links_add` | `Array` | No |  |
| `external_links_remove` | `Array` | No |  |
| `file_ids` | `Array` | No |  |
| `file_ids_add` | `Array` | No |  |
| `file_ids_remove` | `Array` | No |  |
| `files` | `Array` | Yes |  |
| `follower_ids` | `Array` | Yes |  |
| `follower_ids_add` | `Array` | No |  |
| `follower_ids_remove` | `Array` | No |  |
| `formatted_vcs_branch_name` | `string` | No |  |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes |  |
| `group_mention_ids` | `Array` | Yes |  |
| `id` | `number` | Yes |  |
| `iteration_id` | `number` | Yes |  |
| `label_ids` | `Array` | Yes |  |
| `labels` | `Array` | Yes |  |
| `labels_add` | `Array` | No |  |
| `labels_remove` | `Array` | No |  |
| `lead_time` | `number` | No |  |
| `linked_file_ids` | `Array` | No |  |
| `linked_file_ids_add` | `Array` | No |  |
| `linked_file_ids_remove` | `Array` | No |  |
| `linked_files` | `Array` | Yes |  |
| `member_mention_ids` | `Array` | Yes |  |
| `mention_ids` | `Array` | Yes |  |
| `move_to` | `string` | No |  |
| `moved_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `num_tasks_completed` | `number` | No |  |
| `owner_ids` | `Array` | Yes |  |
| `owner_ids_add` | `Array` | No |  |
| `owner_ids_remove` | `Array` | No |  |
| `parent_story_id` | `number` | No |  |
| `position` | `number` | Yes |  |
| `previous_iteration_ids` | `Array` | Yes |  |
| `project_id` | `number` | Yes |  |
| `pull_request_ids` | `Array` | No |  |
| `pull_requests` | `Array` | Yes |  |
| `requested_by_id` | `string` | Yes |  |
| `source_task_id` | `number` | No |  |
| `started` | `boolean` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `stats` | `Object` | Yes |  |
| `story_links` | `Array` | Yes |  |
| `story_template_id` | `string` | Yes |  |
| `story_type` | `string` | Yes |  |
| `sub_task_story_ids` | `Array` | No |  |
| `sub_tasks` | `Array` | No |  |
| `synced_item` | `Object` | Yes |  |
| `task_ids` | `Array` | No |  |
| `tasks` | `Array` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workflow_id` | `number` | Yes |  |
| `workflow_state_id` | `number` | Yes |  |

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
const results = await client.Story().list()
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
| `app_url` | `string` | Yes |  |
| `author_id` | `string` | Yes |  |
| `blocker` | `boolean` | No |  |
| `created_at` | `string` | Yes |  |
| `deleted` | `boolean` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `group_mention_ids` | `Array` | Yes |  |
| `id` | `number` | Yes |  |
| `linked_to_slack` | `boolean` | Yes |  |
| `member_mention_ids` | `Array` | Yes |  |
| `mention_ids` | `Array` | Yes |  |
| `parent_id` | `number` | No |  |
| `position` | `number` | Yes |  |
| `reactions` | `Array` | Yes |  |
| `story_id` | `number` | Yes |  |
| `text` | `string` | Yes |  |
| `unblocks_parent` | `boolean` | No |  |
| `updated_at` | `string` | Yes |  |

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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.StoryComment().list()
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
| `created_at` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `object_id` | `number` | Yes |  |
| `subject_id` | `number` | Yes |  |
| `subject_workflow_state_id` | `number` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `verb` | `string` | Yes |  |

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
| `emoji` | `string` | Yes |  |

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
| `after_id` | `number` | No |  |
| `archived` | `boolean` | No |  |
| `before_id` | `number` | No |  |
| `completed_at_end` | `string` | No |  |
| `completed_at_start` | `string` | No |  |
| `created_at_end` | `string` | No |  |
| `created_at_start` | `string` | No |  |
| `custom_fields_add` | `Array` | No |  |
| `custom_fields_remove` | `Array` | No |  |
| `deadline` | `string` | No |  |
| `deadline_end` | `string` | No |  |
| `deadline_start` | `string` | No |  |
| `epic_id` | `number` | No |  |
| `epic_ids` | `Array` | No |  |
| `estimate` | `number` | No |  |
| `external_id` | `string` | No |  |
| `external_links` | `Array` | No |  |
| `follower_ids_add` | `Array` | No |  |
| `follower_ids_remove` | `Array` | No |  |
| `group_id` | `string` | No |  |
| `group_ids` | `Array` | No |  |
| `includes_description` | `boolean` | No |  |
| `iteration_id` | `number` | No |  |
| `iteration_ids` | `Array` | No |  |
| `label_ids` | `Array` | No |  |
| `label_name` | `string` | No |  |
| `labels_add` | `Array` | No |  |
| `labels_remove` | `Array` | No |  |
| `move_to` | `string` | No |  |
| `owner_id` | `string` | No |  |
| `owner_ids` | `Array` | No |  |
| `owner_ids_add` | `Array` | No |  |
| `owner_ids_remove` | `Array` | No |  |
| `project_id` | `number` | No |  |
| `project_ids` | `Array` | No |  |
| `requested_by_id` | `string` | No |  |
| `stories` | `Array` | Yes |  |
| `story_ids` | `Array` | Yes |  |
| `story_type` | `string` | No |  |
| `updated_at_end` | `string` | No |  |
| `updated_at_start` | `string` | No |  |
| `workflow_state_id` | `number` | No |  |
| `workflow_state_types` | `Array` | No |  |

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
| `after_id` | `number` | No |  |
| `before_id` | `number` | No |  |
| `complete` | `boolean` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_mention_ids` | `Array` | Yes |  |
| `id` | `number` | Yes |  |
| `member_mention_ids` | `Array` | Yes |  |
| `mention_ids` | `Array` | Yes |  |
| `owner_ids` | `Array` | Yes |  |
| `position` | `number` | Yes |  |
| `story_id` | `number` | Yes |  |
| `updated_at` | `string` | Yes |  |

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
| `app_url` | `string` | Yes |  |
| `author_id` | `string` | Yes |  |
| `comments` | `Array` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deleted` | `boolean` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `group_mention_ids` | `Array` | Yes |  |
| `id` | `number` | Yes |  |
| `member_mention_ids` | `Array` | Yes |  |
| `mention_ids` | `Array` | Yes |  |
| `text` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

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
const results = await client.ThreadedComment().list()
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
| `content_type` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `filename` | `string` | Yes |  |
| `group_mention_ids` | `Array` | Yes |  |
| `id` | `number` | Yes |  |
| `member_mention_ids` | `Array` | Yes |  |
| `mention_ids` | `Array` | Yes |  |
| `name` | `string` | Yes |  |
| `size` | `number` | Yes |  |
| `story_ids` | `Array` | Yes |  |
| `thumbnail_url` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `uploader_id` | `string` | Yes |  |
| `url` | `string` | Yes |  |

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
| `auto_assign_owner` | `boolean` | Yes |  |
| `created_at` | `string` | Yes |  |
| `default_state_id` | `number` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `project_ids` | `Array` | Yes |  |
| `states` | `Array` | Yes |  |
| `team_id` | `number` | Yes |  |
| `updated_at` | `string` | Yes |  |

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


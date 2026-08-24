# Shortcut Lua SDK Reference

Complete API reference for the Shortcut Lua SDK.


## ShortcutSDK

### Constructor

```lua
local sdk = require("shortcut_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Bulk(data)`

Create a new `Bulk` entity instance. Pass `nil` for no initial data.

#### `Category(data)`

Create a new `Category` entity instance. Pass `nil` for no initial data.

#### `Comment(data)`

Create a new `Comment` entity instance. Pass `nil` for no initial data.

#### `CustomField(data)`

Create a new `CustomField` entity instance. Pass `nil` for no initial data.

#### `Disable(data)`

Create a new `Disable` entity instance. Pass `nil` for no initial data.

#### `DocSlim(data)`

Create a new `DocSlim` entity instance. Pass `nil` for no initial data.

#### `Enable(data)`

Create a new `Enable` entity instance. Pass `nil` for no initial data.

#### `EntityTemplate(data)`

Create a new `EntityTemplate` entity instance. Pass `nil` for no initial data.

#### `Epic(data)`

Create a new `Epic` entity instance. Pass `nil` for no initial data.

#### `EpicPaginatedResult(data)`

Create a new `EpicPaginatedResult` entity instance. Pass `nil` for no initial data.

#### `EpicUnlinkProductboard(data)`

Create a new `EpicUnlinkProductboard` entity instance. Pass `nil` for no initial data.

#### `EpicWorkflow(data)`

Create a new `EpicWorkflow` entity instance. Pass `nil` for no initial data.

#### `Group(data)`

Create a new `Group` entity instance. Pass `nil` for no initial data.

#### `Health(data)`

Create a new `Health` entity instance. Pass `nil` for no initial data.

#### `History(data)`

Create a new `History` entity instance. Pass `nil` for no initial data.

#### `Iteration(data)`

Create a new `Iteration` entity instance. Pass `nil` for no initial data.

#### `KeyResult(data)`

Create a new `KeyResult` entity instance. Pass `nil` for no initial data.

#### `Label(data)`

Create a new `Label` entity instance. Pass `nil` for no initial data.

#### `LinkedFile(data)`

Create a new `LinkedFile` entity instance. Pass `nil` for no initial data.

#### `Member(data)`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `Milestone(data)`

Create a new `Milestone` entity instance. Pass `nil` for no initial data.

#### `Objectif(data)`

Create a new `Objectif` entity instance. Pass `nil` for no initial data.

#### `Objective(data)`

Create a new `Objective` entity instance. Pass `nil` for no initial data.

#### `Project(data)`

Create a new `Project` entity instance. Pass `nil` for no initial data.

#### `Repository(data)`

Create a new `Repository` entity instance. Pass `nil` for no initial data.

#### `Search(data)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `Story(data)`

Create a new `Story` entity instance. Pass `nil` for no initial data.

#### `StoryComment(data)`

Create a new `StoryComment` entity instance. Pass `nil` for no initial data.

#### `StoryLink(data)`

Create a new `StoryLink` entity instance. Pass `nil` for no initial data.

#### `StoryReaction(data)`

Create a new `StoryReaction` entity instance. Pass `nil` for no initial data.

#### `StorySlim(data)`

Create a new `StorySlim` entity instance. Pass `nil` for no initial data.

#### `Task(data)`

Create a new `Task` entity instance. Pass `nil` for no initial data.

#### `ThreadedComment(data)`

Create a new `ThreadedComment` entity instance. Pass `nil` for no initial data.

#### `UploadedFile(data)`

Create a new `UploadedFile` entity instance. Pass `nil` for no initial data.

#### `Webhook(data)`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `Workflow(data)`

Create a new `Workflow` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## BulkEntity

```lua
local bulk = client:Bulk(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Bulk():remove()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CategoryEntity

```lua
local category = client:Category(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Category():create({
  archived = --[[ boolean ]],
  color = --[[ string ]],
  created_at = --[[ string ]],
  entity_type = --[[ string ]],
  external_id = --[[ string ]],
  global_id = --[[ string ]],
  id = --[[ number ]],
  name = --[[ string ]],
  type = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Category():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Category():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Category():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Category():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CategoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CommentEntity

```lua
local comment = client:Comment(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Comment():remove({ id = 1, story_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomFieldEntity

```lua
local custom_field = client:CustomField(nil)
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
| `story_types` | `table` | No |  |
| `updated_at` | `string` | Yes |  |
| `values` | `table` | No |  |

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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CustomField():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomField():load({ id = "custom_field_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CustomField():remove({ id = "custom_field_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CustomField():update({
  id = "custom_field_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DisableEntity

```lua
local disable = client:Disable(nil)
```

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Disable():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DisableEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DocSlimEntity

```lua
local doc_slim = client:DocSlim(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes |  |
| `content` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `title` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DocSlim():create({
  app_url = --[[ string ]],
  content = --[[ string ]],
  id = --[[ string ]],
  title = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DocSlim():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DocSlimEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnableEntity

```lua
local enable = client:Enable(nil)
```

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Enable():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnableEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EntityTemplateEntity

```lua
local entity_template = client:EntityTemplate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `custom_fields` | `table` | No |  |
| `deadline` | `string` | No |  |
| `description` | `string` | No |  |
| `entity_type` | `string` | No |  |
| `epic_id` | `number` | No |  |
| `estimate` | `number` | No |  |
| `external_links` | `table` | No |  |
| `files` | `table` | No |  |
| `follower_ids` | `table` | No |  |
| `group_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `iteration_id` | `number` | No |  |
| `label_ids` | `table` | No |  |
| `labels` | `table` | No |  |
| `last_used_at` | `string` | Yes |  |
| `linked_files` | `table` | No |  |
| `name` | `string` | No |  |
| `owner_ids` | `table` | No |  |
| `project_id` | `number` | No |  |
| `story_contents` | `table` | Yes |  |
| `story_type` | `string` | No |  |
| `sub_tasks` | `table` | No |  |
| `tasks` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EntityTemplate():create({
  created_at = --[[ string ]],
  id = --[[ string ]],
  last_used_at = --[[ string ]],
  story_contents = --[[ table ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EntityTemplate():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EntityTemplate():load({ id = "entity_template_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:EntityTemplate():remove({ id = "entity_template_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:EntityTemplate():update({
  id = "entity_template_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EntityTemplateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EpicEntity

```lua
local epic = client:Epic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `number` | No |  |
| `app_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes |  |
| `associated_groups` | `table` | Yes |  |
| `before_id` | `number` | No |  |
| `comments` | `table` | Yes |  |
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
| `follower_ids` | `table` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes |  |
| `group_ids` | `table` | Yes |  |
| `group_mention_ids` | `table` | Yes |  |
| `health` | `table` | Yes |  |
| `id` | `number` | Yes |  |
| `label_ids` | `table` | Yes |  |
| `labels` | `table` | Yes |  |
| `member_mention_ids` | `table` | Yes |  |
| `mention_ids` | `table` | Yes |  |
| `milestone_id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `objective_ids` | `table` | Yes |  |
| `owner_ids` | `table` | Yes |  |
| `planned_start_date` | `string` | Yes |  |
| `position` | `number` | Yes |  |
| `productboard_id` | `string` | Yes |  |
| `productboard_name` | `string` | Yes |  |
| `productboard_plugin_id` | `string` | Yes |  |
| `productboard_url` | `string` | Yes |  |
| `project_ids` | `table` | Yes |  |
| `requested_by_id` | `string` | Yes |  |
| `started` | `boolean` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `stats` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Epic():create({
  app_url = --[[ string ]],
  archived = --[[ boolean ]],
  associated_groups = --[[ table ]],
  comments = --[[ table ]],
  completed = --[[ boolean ]],
  completed_at = --[[ string ]],
  completed_at_override = --[[ string ]],
  created_at = --[[ string ]],
  deadline = --[[ string ]],
  description = --[[ string ]],
  entity_type = --[[ string ]],
  epic_state_id = --[[ number ]],
  external_id = --[[ string ]],
  follower_ids = --[[ table ]],
  global_id = --[[ string ]],
  group_id = --[[ string ]],
  group_ids = --[[ table ]],
  group_mention_ids = --[[ table ]],
  health = --[[ table ]],
  id = --[[ number ]],
  label_ids = --[[ table ]],
  labels = --[[ table ]],
  member_mention_ids = --[[ table ]],
  mention_ids = --[[ table ]],
  milestone_id = --[[ number ]],
  name = --[[ string ]],
  objective_ids = --[[ table ]],
  owner_ids = --[[ table ]],
  planned_start_date = --[[ string ]],
  position = --[[ number ]],
  productboard_id = --[[ string ]],
  productboard_name = --[[ string ]],
  productboard_plugin_id = --[[ string ]],
  productboard_url = --[[ string ]],
  project_ids = --[[ table ]],
  requested_by_id = --[[ string ]],
  started = --[[ boolean ]],
  started_at = --[[ string ]],
  started_at_override = --[[ string ]],
  state = --[[ string ]],
  stats = --[[ table ]],
  stories_without_projects = --[[ number ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Epic():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Epic():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Epic():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Epic():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EpicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EpicPaginatedResultEntity

```lua
local epic_paginated_result = client:EpicPaginatedResult(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes |  |
| `associated_groups` | `table` | Yes |  |
| `completed` | `boolean` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `completed_at_override` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deadline` | `string` | Yes |  |
| `description` | `string` | No |  |
| `entity_type` | `string` | Yes |  |
| `epic_state_id` | `number` | Yes |  |
| `external_id` | `string` | Yes |  |
| `follower_ids` | `table` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes |  |
| `group_ids` | `table` | Yes |  |
| `group_mention_ids` | `table` | Yes |  |
| `id` | `number` | Yes |  |
| `label_ids` | `table` | Yes |  |
| `labels` | `table` | Yes |  |
| `member_mention_ids` | `table` | Yes |  |
| `mention_ids` | `table` | Yes |  |
| `milestone_id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `objective_ids` | `table` | Yes |  |
| `owner_ids` | `table` | Yes |  |
| `planned_start_date` | `string` | Yes |  |
| `position` | `number` | Yes |  |
| `productboard_id` | `string` | Yes |  |
| `productboard_name` | `string` | Yes |  |
| `productboard_plugin_id` | `string` | Yes |  |
| `productboard_url` | `string` | Yes |  |
| `project_ids` | `table` | Yes |  |
| `requested_by_id` | `string` | Yes |  |
| `started` | `boolean` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `stats` | `table` | Yes |  |
| `stories_without_projects` | `number` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EpicPaginatedResult():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EpicPaginatedResultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EpicUnlinkProductboardEntity

```lua
local epic_unlink_productboard = client:EpicUnlinkProductboard(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EpicUnlinkProductboard():create({
  id = --[[ number ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EpicUnlinkProductboardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EpicWorkflowEntity

```lua
local epic_workflow = client:EpicWorkflow(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EpicWorkflow():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EpicWorkflowEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GroupEntity

```lua
local group = client:Group(nil)
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
| `display_icon` | `table` | Yes |  |
| `display_icon_id` | `string` | No |  |
| `entity_type` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `member_ids` | `table` | Yes |  |
| `mention_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `num_epics_started` | `number` | Yes |  |
| `num_stories` | `number` | Yes |  |
| `num_stories_backlog` | `number` | Yes |  |
| `num_stories_started` | `number` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workflow_ids` | `table` | Yes |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Group():create({
  app_url = --[[ string ]],
  archived = --[[ boolean ]],
  color = --[[ string ]],
  color_key = --[[ string ]],
  created_at = --[[ string ]],
  description = --[[ string ]],
  display_icon = --[[ table ]],
  entity_type = --[[ string ]],
  global_id = --[[ string ]],
  id = --[[ string ]],
  member_ids = --[[ table ]],
  mention_name = --[[ string ]],
  name = --[[ string ]],
  num_epics_started = --[[ number ]],
  num_stories = --[[ number ]],
  num_stories_backlog = --[[ number ]],
  num_stories_started = --[[ number ]],
  updated_at = --[[ string ]],
  workflow_ids = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Group():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Group():load({ id = "group_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Group():update({
  id = "group_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HealthEntity

```lua
local health = client:Health(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Health():create({
  epic_id = --[[ number ]],
  entity_type = --[[ string ]],
  id = --[[ string ]],
  status = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Health():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Health():load({ epic_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Health():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HealthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HistoryEntity

```lua
local history = client:History(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `table` | Yes |  |
| `actor_name` | `string` | No |  |
| `automation_id` | `string` | No |  |
| `changed_at` | `string` | Yes |  |
| `external_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `member_id` | `string` | No |  |
| `primary_id` | `string` | No |  |
| `references` | `table` | No |  |
| `version` | `string` | Yes |  |
| `webhook_id` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:History():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HistoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IterationEntity

```lua
local iteration = client:Iteration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes |  |
| `associated_groups` | `table` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `follower_ids` | `table` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_ids` | `table` | Yes |  |
| `group_mention_ids` | `table` | Yes |  |
| `id` | `number` | Yes |  |
| `label_ids` | `table` | Yes |  |
| `labels` | `table` | Yes |  |
| `member_mention_ids` | `table` | Yes |  |
| `mention_ids` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `start_date` | `string` | Yes |  |
| `stats` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Iteration():create({
  app_url = --[[ string ]],
  associated_groups = --[[ table ]],
  created_at = --[[ string ]],
  description = --[[ string ]],
  end_date = --[[ string ]],
  entity_type = --[[ string ]],
  follower_ids = --[[ table ]],
  global_id = --[[ string ]],
  group_ids = --[[ table ]],
  group_mention_ids = --[[ table ]],
  id = --[[ number ]],
  label_ids = --[[ table ]],
  labels = --[[ table ]],
  member_mention_ids = --[[ table ]],
  mention_ids = --[[ table ]],
  name = --[[ string ]],
  start_date = --[[ string ]],
  stats = --[[ table ]],
  status = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Iteration():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Iteration():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Iteration():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Iteration():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IterationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## KeyResultEntity

```lua
local key_result = client:KeyResult(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_observed_value` | `table` | Yes |  |
| `current_target_value` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `initial_observed_value` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `objective_id` | `number` | Yes |  |
| `observed_value` | `table` | No |  |
| `progress` | `number` | Yes |  |
| `target_value` | `table` | No |  |
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:KeyResult():load({ id = "key_result_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:KeyResult():update({
  id = "key_result_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `KeyResultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LabelEntity

```lua
local label = client:Label(nil)
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
| `stats` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Label():create({
  app_url = --[[ string ]],
  created_at = --[[ string ]],
  entity_type = --[[ string ]],
  global_id = --[[ string ]],
  id = --[[ number ]],
  name = --[[ string ]],
  num_epics = --[[ number ]],
  num_epics_completed = --[[ number ]],
  num_epics_in_progress = --[[ number ]],
  num_epics_total = --[[ number ]],
  num_epics_unstarted = --[[ number ]],
  num_points_backlog = --[[ number ]],
  num_points_completed = --[[ number ]],
  num_points_in_progress = --[[ number ]],
  num_points_total = --[[ number ]],
  num_points_unstarted = --[[ number ]],
  num_related_documents = --[[ number ]],
  num_stories_backlog = --[[ number ]],
  num_stories_completed = --[[ number ]],
  num_stories_in_progress = --[[ number ]],
  num_stories_total = --[[ number ]],
  num_stories_unestimated = --[[ number ]],
  num_stories_unstarted = --[[ number ]],
  stats = --[[ table ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Label():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Label():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Label():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Label():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LabelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LinkedFileEntity

```lua
local linked_file = client:LinkedFile(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `group_mention_ids` | `table` | Yes |  |
| `id` | `number` | Yes |  |
| `member_mention_ids` | `table` | Yes |  |
| `mention_ids` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `size` | `number` | Yes |  |
| `story_id` | `number` | No |  |
| `story_ids` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LinkedFile():create({
  content_type = --[[ string ]],
  created_at = --[[ string ]],
  description = --[[ string ]],
  entity_type = --[[ string ]],
  group_mention_ids = --[[ table ]],
  id = --[[ number ]],
  member_mention_ids = --[[ table ]],
  mention_ids = --[[ table ]],
  name = --[[ string ]],
  size = --[[ number ]],
  story_ids = --[[ table ]],
  thumbnail_url = --[[ string ]],
  type = --[[ string ]],
  updated_at = --[[ string ]],
  uploader_id = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LinkedFile():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:LinkedFile():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:LinkedFile():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:LinkedFile():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LinkedFileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MemberEntity

```lua
local member = client:Member(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `created_without_invite` | `boolean` | Yes |  |
| `disabled` | `boolean` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_ids` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `installation_id` | `string` | No |  |
| `is_owner` | `boolean` | Yes |  |
| `mention_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `organization2` | `table` | Yes |  |
| `profile` | `table` | Yes |  |
| `replaced_by` | `string` | No |  |
| `role` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workspace2` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Member():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Member():load({ id = "member_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MilestoneEntity

```lua
local milestone = client:Milestone(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `number` | No |  |
| `app_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes |  |
| `before_id` | `number` | No |  |
| `categories` | `table` | Yes |  |
| `completed` | `boolean` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `completed_at_override` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `key_result_ids` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `position` | `number` | Yes |  |
| `started` | `boolean` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `stats` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Milestone():create({
  app_url = --[[ string ]],
  archived = --[[ boolean ]],
  categories = --[[ table ]],
  completed = --[[ boolean ]],
  completed_at = --[[ string ]],
  completed_at_override = --[[ string ]],
  created_at = --[[ string ]],
  description = --[[ string ]],
  entity_type = --[[ string ]],
  global_id = --[[ string ]],
  id = --[[ number ]],
  key_result_ids = --[[ table ]],
  name = --[[ string ]],
  position = --[[ number ]],
  started = --[[ boolean ]],
  started_at = --[[ string ]],
  started_at_override = --[[ string ]],
  state = --[[ string ]],
  stats = --[[ table ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Milestone():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Milestone():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Milestone():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Milestone():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MilestoneEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ObjectifEntity

```lua
local objectif = client:Objectif(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Objectif():remove({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObjectifEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ObjectiveEntity

```lua
local objective = client:Objective(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `number` | No |  |
| `app_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes |  |
| `before_id` | `number` | No |  |
| `categories` | `table` | Yes |  |
| `completed` | `boolean` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `completed_at_override` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `key_result_ids` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `position` | `number` | Yes |  |
| `started` | `boolean` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `stats` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Objective():create({
  app_url = --[[ string ]],
  archived = --[[ boolean ]],
  categories = --[[ table ]],
  completed = --[[ boolean ]],
  completed_at = --[[ string ]],
  completed_at_override = --[[ string ]],
  created_at = --[[ string ]],
  description = --[[ string ]],
  entity_type = --[[ string ]],
  global_id = --[[ string ]],
  id = --[[ number ]],
  key_result_ids = --[[ table ]],
  name = --[[ string ]],
  position = --[[ number ]],
  started = --[[ boolean ]],
  started_at = --[[ string ]],
  started_at_override = --[[ string ]],
  state = --[[ string ]],
  stats = --[[ table ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Objective():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Objective():load({ objective_public_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Objective():update({
  objective_public_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObjectiveEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectEntity

```lua
local project = client:Project(nil)
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
| `follower_ids` | `table` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `iteration_length` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `show_thermometer` | `boolean` | Yes |  |
| `start_time` | `string` | Yes |  |
| `stats` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Project():create({
  abbreviation = --[[ string ]],
  app_url = --[[ string ]],
  archived = --[[ boolean ]],
  color = --[[ string ]],
  created_at = --[[ string ]],
  days_to_thermometer = --[[ number ]],
  description = --[[ string ]],
  entity_type = --[[ string ]],
  external_id = --[[ string ]],
  follower_ids = --[[ table ]],
  global_id = --[[ string ]],
  id = --[[ number ]],
  iteration_length = --[[ number ]],
  name = --[[ string ]],
  show_thermometer = --[[ boolean ]],
  start_time = --[[ string ]],
  stats = --[[ table ]],
  team_id = --[[ number ]],
  updated_at = --[[ string ]],
  workflow_id = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Project():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Project():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Project():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Project():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryEntity

```lua
local repository = client:Repository(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Repository():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Repository():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SearchEntity

```lua
local search = client:Search(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `epics` | `table` | Yes |  |
| `iterations` | `table` | Yes |  |
| `milestones` | `table` | Yes |  |
| `stories` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Search():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StoryEntity

```lua
local story = client:Story(nil)
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
| `branch_ids` | `table` | No |  |
| `branches` | `table` | Yes |  |
| `comment_ids` | `table` | No |  |
| `comments` | `table` | Yes |  |
| `commit_ids` | `table` | No |  |
| `commits` | `table` | Yes |  |
| `completed` | `boolean` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `completed_at_override` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `custom_fields` | `table` | No |  |
| `custom_fields_add` | `table` | No |  |
| `custom_fields_remove` | `table` | No |  |
| `cycle_time` | `number` | No |  |
| `deadline` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `epic_id` | `number` | Yes |  |
| `estimate` | `number` | Yes |  |
| `external_id` | `string` | Yes |  |
| `external_links` | `table` | Yes |  |
| `external_links_add` | `table` | No |  |
| `external_links_remove` | `table` | No |  |
| `file_ids` | `table` | No |  |
| `file_ids_add` | `table` | No |  |
| `file_ids_remove` | `table` | No |  |
| `files` | `table` | Yes |  |
| `follower_ids` | `table` | Yes |  |
| `follower_ids_add` | `table` | No |  |
| `follower_ids_remove` | `table` | No |  |
| `formatted_vcs_branch_name` | `string` | No |  |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes |  |
| `group_mention_ids` | `table` | Yes |  |
| `id` | `number` | Yes |  |
| `iteration_id` | `number` | Yes |  |
| `label_ids` | `table` | Yes |  |
| `labels` | `table` | Yes |  |
| `labels_add` | `table` | No |  |
| `labels_remove` | `table` | No |  |
| `lead_time` | `number` | No |  |
| `linked_file_ids` | `table` | No |  |
| `linked_file_ids_add` | `table` | No |  |
| `linked_file_ids_remove` | `table` | No |  |
| `linked_files` | `table` | Yes |  |
| `member_mention_ids` | `table` | Yes |  |
| `mention_ids` | `table` | Yes |  |
| `move_to` | `string` | No |  |
| `moved_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `num_tasks_completed` | `number` | No |  |
| `owner_ids` | `table` | Yes |  |
| `owner_ids_add` | `table` | No |  |
| `owner_ids_remove` | `table` | No |  |
| `parent_story_id` | `number` | No |  |
| `position` | `number` | Yes |  |
| `previous_iteration_ids` | `table` | Yes |  |
| `project_id` | `number` | Yes |  |
| `pull_request_ids` | `table` | No |  |
| `pull_requests` | `table` | Yes |  |
| `requested_by_id` | `string` | Yes |  |
| `source_task_id` | `number` | No |  |
| `started` | `boolean` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `stats` | `table` | Yes |  |
| `story_links` | `table` | Yes |  |
| `story_template_id` | `string` | Yes |  |
| `story_type` | `string` | Yes |  |
| `sub_task_story_ids` | `table` | No |  |
| `sub_tasks` | `table` | No |  |
| `synced_item` | `table` | Yes |  |
| `task_ids` | `table` | No |  |
| `tasks` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Story():create({
  app_url = --[[ string ]],
  archived = --[[ boolean ]],
  blocked = --[[ boolean ]],
  blocker = --[[ boolean ]],
  branches = --[[ table ]],
  comments = --[[ table ]],
  commits = --[[ table ]],
  completed = --[[ boolean ]],
  completed_at = --[[ string ]],
  completed_at_override = --[[ string ]],
  created_at = --[[ string ]],
  deadline = --[[ string ]],
  description = --[[ string ]],
  entity_type = --[[ string ]],
  epic_id = --[[ number ]],
  estimate = --[[ number ]],
  external_id = --[[ string ]],
  external_links = --[[ table ]],
  files = --[[ table ]],
  follower_ids = --[[ table ]],
  global_id = --[[ string ]],
  group_id = --[[ string ]],
  group_mention_ids = --[[ table ]],
  id = --[[ number ]],
  iteration_id = --[[ number ]],
  label_ids = --[[ table ]],
  labels = --[[ table ]],
  linked_files = --[[ table ]],
  member_mention_ids = --[[ table ]],
  mention_ids = --[[ table ]],
  moved_at = --[[ string ]],
  name = --[[ string ]],
  owner_ids = --[[ table ]],
  position = --[[ number ]],
  previous_iteration_ids = --[[ table ]],
  project_id = --[[ number ]],
  pull_requests = --[[ table ]],
  requested_by_id = --[[ string ]],
  started = --[[ boolean ]],
  started_at = --[[ string ]],
  started_at_override = --[[ string ]],
  stats = --[[ table ]],
  story_links = --[[ table ]],
  story_template_id = --[[ string ]],
  story_type = --[[ string ]],
  synced_item = --[[ table ]],
  tasks = --[[ table ]],
  updated_at = --[[ string ]],
  workflow_id = --[[ number ]],
  workflow_state_id = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Story():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Story():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Story():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Story():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StoryCommentEntity

```lua
local story_comment = client:StoryComment(nil)
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
| `group_mention_ids` | `table` | Yes |  |
| `id` | `number` | Yes |  |
| `linked_to_slack` | `boolean` | Yes |  |
| `member_mention_ids` | `table` | Yes |  |
| `mention_ids` | `table` | Yes |  |
| `parent_id` | `number` | No |  |
| `position` | `number` | Yes |  |
| `reactions` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:StoryComment():create({
  app_url = --[[ string ]],
  author_id = --[[ string ]],
  created_at = --[[ string ]],
  deleted = --[[ boolean ]],
  entity_type = --[[ string ]],
  external_id = --[[ string ]],
  group_mention_ids = --[[ table ]],
  linked_to_slack = --[[ boolean ]],
  member_mention_ids = --[[ table ]],
  mention_ids = --[[ table ]],
  position = --[[ number ]],
  reactions = --[[ table ]],
  text = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:StoryComment():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:StoryComment():load({ id = 1, story_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:StoryComment():update({
  id = 1,
  story_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StoryCommentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StoryLinkEntity

```lua
local story_link = client:StoryLink(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:StoryLink():create({
  created_at = --[[ string ]],
  entity_type = --[[ string ]],
  id = --[[ number ]],
  object_id = --[[ number ]],
  subject_id = --[[ number ]],
  subject_workflow_state_id = --[[ number ]],
  updated_at = --[[ string ]],
  verb = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:StoryLink():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:StoryLink():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:StoryLink():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StoryLinkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StoryReactionEntity

```lua
local story_reaction = client:StoryReaction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emoji` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:StoryReaction():create({
  comment_id = --[[ number ]],
  story_id = --[[ number ]],
  emoji = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:StoryReaction():remove({ comment_id = 1, story_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StoryReactionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StorySlimEntity

```lua
local story_slim = client:StorySlim(nil)
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
| `custom_fields_add` | `table` | No |  |
| `custom_fields_remove` | `table` | No |  |
| `deadline` | `string` | No |  |
| `deadline_end` | `string` | No |  |
| `deadline_start` | `string` | No |  |
| `epic_id` | `number` | No |  |
| `epic_ids` | `table` | No |  |
| `estimate` | `number` | No |  |
| `external_id` | `string` | No |  |
| `external_links` | `table` | No |  |
| `follower_ids_add` | `table` | No |  |
| `follower_ids_remove` | `table` | No |  |
| `group_id` | `string` | No |  |
| `group_ids` | `table` | No |  |
| `includes_description` | `boolean` | No |  |
| `iteration_id` | `number` | No |  |
| `iteration_ids` | `table` | No |  |
| `label_ids` | `table` | No |  |
| `label_name` | `string` | No |  |
| `labels_add` | `table` | No |  |
| `labels_remove` | `table` | No |  |
| `move_to` | `string` | No |  |
| `owner_id` | `string` | No |  |
| `owner_ids` | `table` | No |  |
| `owner_ids_add` | `table` | No |  |
| `owner_ids_remove` | `table` | No |  |
| `project_id` | `number` | No |  |
| `project_ids` | `table` | No |  |
| `requested_by_id` | `string` | No |  |
| `stories` | `table` | Yes |  |
| `story_ids` | `table` | Yes |  |
| `story_type` | `string` | No |  |
| `updated_at_end` | `string` | No |  |
| `updated_at_start` | `string` | No |  |
| `workflow_state_id` | `number` | No |  |
| `workflow_state_types` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:StorySlim():create({
  stories = --[[ table ]],
  story_ids = --[[ table ]],
})
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:StorySlim():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StorySlimEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TaskEntity

```lua
local task = client:Task(nil)
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
| `group_mention_ids` | `table` | Yes |  |
| `id` | `number` | Yes |  |
| `member_mention_ids` | `table` | Yes |  |
| `mention_ids` | `table` | Yes |  |
| `owner_ids` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Task():create({
  story_id = --[[ number ]],
  complete = --[[ boolean ]],
  completed_at = --[[ string ]],
  created_at = --[[ string ]],
  description = --[[ string ]],
  entity_type = --[[ string ]],
  external_id = --[[ string ]],
  global_id = --[[ string ]],
  group_mention_ids = --[[ table ]],
  id = --[[ number ]],
  member_mention_ids = --[[ table ]],
  mention_ids = --[[ table ]],
  owner_ids = --[[ table ]],
  position = --[[ number ]],
  updated_at = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Task():load({ id = 1, story_id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Task():remove({ id = 1, story_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Task():update({
  id = 1,
  story_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TaskEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ThreadedCommentEntity

```lua
local threaded_comment = client:ThreadedComment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes |  |
| `author_id` | `string` | Yes |  |
| `comments` | `table` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deleted` | `boolean` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `group_mention_ids` | `table` | Yes |  |
| `id` | `number` | Yes |  |
| `member_mention_ids` | `table` | Yes |  |
| `mention_ids` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ThreadedComment():create({
  epic_id = --[[ number ]],
  app_url = --[[ string ]],
  author_id = --[[ string ]],
  comments = --[[ table ]],
  created_at = --[[ string ]],
  deleted = --[[ boolean ]],
  entity_type = --[[ string ]],
  external_id = --[[ string ]],
  group_mention_ids = --[[ table ]],
  member_mention_ids = --[[ table ]],
  mention_ids = --[[ table ]],
  text = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ThreadedComment():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ThreadedComment():load({ id = 1, epic_id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ThreadedComment():remove({ id = 1, epic_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ThreadedComment():update({
  id = 1,
  epic_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ThreadedCommentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UploadedFileEntity

```lua
local uploaded_file = client:UploadedFile(nil)
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
| `group_mention_ids` | `table` | Yes |  |
| `id` | `number` | Yes |  |
| `member_mention_ids` | `table` | Yes |  |
| `mention_ids` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `size` | `number` | Yes |  |
| `story_ids` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:UploadedFile():create({
  content_type = --[[ string ]],
  created_at = --[[ string ]],
  description = --[[ string ]],
  entity_type = --[[ string ]],
  external_id = --[[ string ]],
  filename = --[[ string ]],
  group_mention_ids = --[[ table ]],
  id = --[[ number ]],
  member_mention_ids = --[[ table ]],
  mention_ids = --[[ table ]],
  name = --[[ string ]],
  size = --[[ number ]],
  story_ids = --[[ table ]],
  thumbnail_url = --[[ string ]],
  updated_at = --[[ string ]],
  uploader_id = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:UploadedFile():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:UploadedFile():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:UploadedFile():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:UploadedFile():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UploadedFileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhookEntity

```lua
local webhook = client:Webhook(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `secret` | `string` | No |  |
| `webhook_url` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Webhook():create({
  webhook_url = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Webhook():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Webhook():remove({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkflowEntity

```lua
local workflow = client:Workflow(nil)
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
| `project_ids` | `table` | Yes |  |
| `states` | `table` | Yes |  |
| `team_id` | `number` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Workflow():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Workflow():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```


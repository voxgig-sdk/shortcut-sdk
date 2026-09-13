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

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

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
| `story_types` | `table` | No | The types of stories this CustomField is scoped to. |
| `updated_at` | `string` | Yes | The instant when this CustomField was last updated. |
| `values` | `table` | No | A collection of legal values for a CustomField. |

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
| `app_url` | `string` | Yes | The Shortcut application url for the Doc. |
| `content` | `string` | Yes | The content for the new document |
| `id` | `string` | Yes | The public id of the Doc |
| `title` | `string` | Yes | The title for the new document |

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
| `author_id` | `string` | No | The id of the user creating this template. |
| `created_at` | `string` | Yes | The time/date when the entity template was created. |
| `custom_fields` | `table` | No | An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `string` | No | The due date of the story. |
| `description` | `string` | No | The description of the story. |
| `entity_type` | `string` | No | A string description of this resource. |
| `epic_id` | `number` | No | The ID of the epic the story belongs to. |
| `estimate` | `number` | No | The numeric point estimate of the story. |
| `external_links` | `table` | No | An array of external links connected to the story. |
| `files` | `table` | No | An array of files attached to the story. |
| `follower_ids` | `table` | No | An array of UUIDs for any Members listed as Followers. |
| `group_id` | `string` | No | The ID of the group to which the story is assigned. |
| `id` | `string` | Yes | The unique identifier for the entity template. |
| `iteration_id` | `number` | No | The ID of the iteration the story belongs to. |
| `label_ids` | `table` | No | An array of label ids attached to the story. |
| `labels` | `table` | No | An array of labels attached to the story. |
| `last_used_at` | `string` | Yes | The last time that someone created an entity using this template. |
| `linked_files` | `table` | No | An array of linked files attached to the story. |
| `name` | `string` | No | The name of the story. |
| `owner_ids` | `table` | No | An array of UUIDs of the owners of this story. |
| `project_id` | `number` | No | The ID of the project the story belongs to. |
| `story_contents` | `table` | Yes | A map of story attributes this template populates. |
| `story_type` | `string` | No | The type of story (feature, bug, chore). |
| `sub_tasks` | `table` | No | An array of sub-tasks connected to the story |
| `tasks` | `table` | No | An array of tasks connected to the story. |
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
| `after_id` | `number` | No | The ID of the Epic we want to move this Epic after. |
| `app_url` | `string` | Yes | The Shortcut application url for the Epic. |
| `archived` | `boolean` | Yes | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `table` | Yes | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `before_id` | `number` | No | The ID of the Epic we want to move this Epic before. |
| `comments` | `table` | Yes | A nested array of threaded comments. |
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
| `follower_ids` | `table` | Yes | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `table` | Yes | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `table` | Yes | An array of Group IDs that have been mentioned in the Epic description. |
| `health` | `table` | Yes | The current health status of the Epic. |
| `id` | `number` | Yes | The unique ID of the Epic. |
| `label_ids` | `table` | Yes | An array of Label ids attached to the Epic. |
| `labels` | `table` | Yes | An array of Labels attached to the Epic. |
| `member_mention_ids` | `table` | Yes | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `table` | Yes | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `number` | Yes | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `string` | Yes | The name of the Epic. |
| `objective_ids` | `table` | Yes | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `table` | Yes | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `string` | Yes | The Epic's planned start date. |
| `position` | `number` | Yes | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `string` | Yes | The ID of the associated productboard feature. |
| `productboard_name` | `string` | Yes | The name of the associated productboard feature. |
| `productboard_plugin_id` | `string` | Yes | The ID of the associated productboard integration. |
| `productboard_url` | `string` | Yes | The URL of the associated productboard feature. |
| `project_ids` | `table` | Yes | The IDs of Projects related to this Epic. |
| `requested_by_id` | `string` | Yes | The ID of the Member that requested the epic. |
| `started` | `boolean` | Yes | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `string` | Yes | The time/date the Epic was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Epic was started. |
| `state` | `string` | Yes | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `table` | Yes | A group of calculated values for this Epic. |
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
| `app_url` | `string` | Yes | The Shortcut application url for the Epic. |
| `archived` | `boolean` | Yes | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `table` | Yes | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `completed` | `boolean` | Yes | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | `string` | Yes | The time/date the Epic was completed. |
| `completed_at_override` | `string` | Yes | A manual override for the time/date the Epic was completed. |
| `created_at` | `string` | Yes | The time/date the Epic was created. |
| `deadline` | `string` | Yes | The Epic's deadline. |
| `description` | `string` | No | The Epic's description. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `epic_state_id` | `number` | Yes | The ID of the Epic State. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `follower_ids` | `table` | Yes | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `table` | Yes | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `table` | Yes | An array of Group IDs that have been mentioned in the Epic description. |
| `id` | `number` | Yes | The unique ID of the Epic. |
| `label_ids` | `table` | Yes | An array of Label ids attached to the Epic. |
| `labels` | `table` | Yes | An array of Labels attached to the Epic. |
| `member_mention_ids` | `table` | Yes | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `table` | Yes | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `number` | Yes | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `string` | Yes | The name of the Epic. |
| `objective_ids` | `table` | Yes | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `table` | Yes | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `string` | Yes | The Epic's planned start date. |
| `position` | `number` | Yes | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `string` | Yes | The ID of the associated productboard feature. |
| `productboard_name` | `string` | Yes | The name of the associated productboard feature. |
| `productboard_plugin_id` | `string` | Yes | The ID of the associated productboard integration. |
| `productboard_url` | `string` | Yes | The URL of the associated productboard feature. |
| `project_ids` | `table` | Yes | The IDs of Projects related to this Epic. |
| `requested_by_id` | `string` | Yes | The ID of the Member that requested the epic. |
| `started` | `boolean` | Yes | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `string` | Yes | The time/date the Epic was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Epic was started. |
| `state` | `string` | Yes | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `table` | Yes | A group of calculated values for this Epic. |
| `stories_without_projects` | `number` | Yes | The number of stories in this epic which are not associated with a project. |
| `updated_at` | `string` | Yes | The time/date the Epic was updated. |

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

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

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
| `app_url` | `string` | Yes | The Shortcut application url for the Group. |
| `archived` | `boolean` | Yes | Whether or not the Group is archived. |
| `color` | `string` | Yes | The hex color to be displayed with the Group (for example, "#ff0000"). |
| `color_key` | `string` | Yes | The color key to be displayed with the Group. |
| `created_at` | `string` | Yes | The instant when this group was created. |
| `default_workflow_id` | `number` | No | The ID of the default workflow for stories created in this group. |
| `description` | `string` | Yes | The description of the Group. |
| `display_icon` | `table` | Yes | Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application. |
| `display_icon_id` | `string` | No | The Icon id for the avatar of this Group. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `global_id` | `string` | Yes |  |
| `id` | `string` | Yes | The id of the Group. |
| `member_ids` | `table` | Yes | The Member IDs contain within the Group. |
| `mention_name` | `string` | Yes | The mention name of the Group. |
| `name` | `string` | Yes | The name of the Group. |
| `num_epics_started` | `number` | Yes | The number of epics assigned to the group which are in the started workflow state. |
| `num_stories` | `number` | Yes | The total number of stories assigned to the group. |
| `num_stories_backlog` | `number` | Yes | The number of stories assigned to the group which are in a backlog workflow state. |
| `num_stories_started` | `number` | Yes | The number of stories assigned to the group which are in a started workflow state. |
| `updated_at` | `string` | Yes | The last instant when this group was updated. |
| `workflow_ids` | `table` | Yes | The Workflow IDs contained within the Group. |

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
| `actions` | `table` | Yes | An array of actions that were performed for the change. |
| `actor_name` | `string` | No | The name of the actor that performed the action, if it can be determined. |
| `automation_id` | `string` | No | The ID of the automation that performed the change. |
| `changed_at` | `string` | Yes | The date when the change occurred. |
| `external_id` | `string` | No | The ID of the webhook that handled the change. |
| `id` | `string` | Yes | The ID representing the change for the story. |
| `member_id` | `string` | No | The ID of the member who performed the change. |
| `primary_id` | `string` | No | The ID of the primary entity that has changed, if applicable. |
| `references` | `table` | No | An array of objects affected by the change. |
| `version` | `string` | Yes | The version of the change format. |
| `webhook_id` | `string` | No | The ID of the webhook that handled the change. |

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
| `app_url` | `string` | Yes | The Shortcut application url for the Iteration. |
| `associated_groups` | `table` | Yes | An array containing Group IDs and Group-owned story counts for the Iteration's associated groups. |
| `created_at` | `string` | Yes | The instant when this iteration was created. |
| `description` | `string` | Yes | The description of the iteration. |
| `end_date` | `string` | Yes | The date this iteration ends. |
| `entity_type` | `string` | Yes | A string description of this resource |
| `follower_ids` | `table` | Yes | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `string` | Yes |  |
| `group_ids` | `table` | Yes | An array of UUIDs for any Groups you want to add as Followers. |
| `group_mention_ids` | `table` | Yes | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `number` | Yes | The ID of the iteration. |
| `label_ids` | `table` | Yes | An array of label ids attached to the iteration. |
| `labels` | `table` | Yes | An array of labels attached to the iteration. |
| `member_mention_ids` | `table` | Yes | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `table` | Yes | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | Yes | The name of the iteration. |
| `start_date` | `string` | Yes | The date this iteration begins. |
| `stats` | `table` | Yes | A group of calculated values for this Iteration. |
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
| `current_observed_value` | `table` | Yes | The starting value of the Key Result. |
| `current_target_value` | `table` | Yes | The starting value of the Key Result. |
| `id` | `string` | Yes | The ID of the Key Result. |
| `initial_observed_value` | `table` | Yes | The starting value of the Key Result. |
| `name` | `string` | Yes | The name of the Key Result. |
| `objective_id` | `number` | Yes | The Objective to which this Key Result belongs. |
| `observed_value` | `table` | No | The starting value of the Key Result. |
| `progress` | `number` | Yes | The integer percentage of progress toward completion of the Key Result. |
| `target_value` | `table` | No | The starting value of the Key Result. |
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
| `stats` | `table` | Yes | A group of calculated values for this Label. |
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
| `content_type` | `string` | Yes | The content type of the image (e.g. |
| `created_at` | `string` | Yes | The time/date the LinkedFile was created. |
| `description` | `string` | Yes | The description of the file. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `group_mention_ids` | `table` | Yes | The groups that are mentioned in the description of the file. |
| `id` | `number` | Yes | The unique identifier for the file. |
| `member_mention_ids` | `table` | Yes | The members that are mentioned in the description of the file. |
| `mention_ids` | `table` | Yes | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | Yes | The name of the linked file. |
| `size` | `number` | Yes | The filesize, if the integration provided it. |
| `story_id` | `number` | No | The ID of the linked story. |
| `story_ids` | `table` | Yes | The IDs of the stories this file is attached to. |
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
| `created_at` | `string` | Yes | The time/date the Member was created. |
| `created_without_invite` | `boolean` | Yes | Whether this member was created as a placeholder entity. |
| `disabled` | `boolean` | Yes | True/false boolean indicating whether the Member has been disabled within the Workspace. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `global_id` | `string` | Yes |  |
| `group_ids` | `table` | Yes | The Member's group ids |
| `id` | `string` | Yes | The Member's ID in Shortcut. |
| `installation_id` | `string` | No | Only set for agents. |
| `is_owner` | `boolean` | Yes |  |
| `mention_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `organization2` | `table` | Yes |  |
| `profile` | `table` | Yes | A group of Member profile details. |
| `replaced_by` | `string` | No | The id of the member that replaces this one when merged. |
| `role` | `string` | Yes | The Member's role in the Workspace. |
| `state` | `string` | Yes | The user state, one of partial, full, disabled, or imported. |
| `updated_at` | `string` | Yes | The time/date the Member was last updated. |
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
| `after_id` | `number` | No | The ID of the Milestone we want to move this Milestone after. |
| `app_url` | `string` | Yes | The Shortcut application url for the Milestone. |
| `archived` | `boolean` | Yes | A boolean indicating whether the Milestone has been archived or not. |
| `before_id` | `number` | No | The ID of the Milestone we want to move this Milestone before. |
| `categories` | `table` | Yes | An array of Categories attached to the Milestone. |
| `completed` | `boolean` | Yes | A true/false boolean indicating if the Milestone has been completed. |
| `completed_at` | `string` | Yes | The time/date the Milestone was completed. |
| `completed_at_override` | `string` | Yes | A manual override for the time/date the Milestone was completed. |
| `created_at` | `string` | Yes | The time/date the Milestone was created. |
| `description` | `string` | Yes | The Milestone's description. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `global_id` | `string` | Yes |  |
| `id` | `number` | Yes | The unique ID of the Milestone. |
| `key_result_ids` | `table` | Yes | The IDs of the Key Results associated with the Objective. |
| `name` | `string` | Yes | The name of the Milestone. |
| `position` | `number` | Yes | A number representing the position of the Milestone in relation to every other Milestone within the Workspace. |
| `started` | `boolean` | Yes | A true/false boolean indicating if the Milestone has been started. |
| `started_at` | `string` | Yes | The time/date the Milestone was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Milestone was started. |
| `state` | `string` | Yes | The workflow state that the Milestone is in. |
| `stats` | `table` | Yes | A group of calculated values for this Milestone. |
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

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

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
| `after_id` | `number` | No | The ID of the Objective we want to move this Objective after. |
| `app_url` | `string` | Yes | The Shortcut application url for the Objective. |
| `archived` | `boolean` | Yes | A boolean indicating whether the Objective has been archived or not. |
| `before_id` | `number` | No | The ID of the Objective we want to move this Objective before. |
| `categories` | `table` | Yes | An array of Categories attached to the Objective. |
| `completed` | `boolean` | Yes | A true/false boolean indicating if the Objectivehas been completed. |
| `completed_at` | `string` | Yes | The time/date the Objective was completed. |
| `completed_at_override` | `string` | Yes | A manual override for the time/date the Objective was completed. |
| `created_at` | `string` | Yes | The time/date the Objective was created. |
| `description` | `string` | Yes | The Objective's description. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `global_id` | `string` | Yes |  |
| `id` | `number` | Yes | The unique ID of the Objective. |
| `key_result_ids` | `table` | Yes | The IDs of the Key Results associated with the Objective. |
| `name` | `string` | Yes | The name of the Objective. |
| `position` | `number` | Yes | A number representing the position of the Objective in relation to every other Objective within the Workspace. |
| `started` | `boolean` | Yes | A true/false boolean indicating if the Objective has been started. |
| `started_at` | `string` | Yes | The time/date the Objective was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Objective was started. |
| `state` | `string` | Yes | The workflow state that the Objective is in. |
| `stats` | `table` | Yes | A group of calculated values for this Objective. |
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
| `abbreviation` | `string` | Yes | The Project abbreviation used in Story summaries. |
| `app_url` | `string` | Yes | The Shortcut application url for the Project. |
| `archived` | `boolean` | Yes | True/false boolean indicating whether the Project is in an Archived state. |
| `color` | `string` | Yes | The color associated with the Project in the Shortcut member interface. |
| `created_at` | `string` | Yes | The time/date that the Project was created. |
| `days_to_thermometer` | `number` | Yes | The number of days before the thermometer appears in the Story summary. |
| `description` | `string` | Yes | The description of the Project. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `follower_ids` | `table` | Yes | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `string` | Yes | The Global ID of the Project. |
| `id` | `number` | Yes | The unique ID of the Project. |
| `iteration_length` | `number` | Yes | The number of weeks per iteration in this Project. |
| `name` | `string` | Yes | The name of the Project |
| `show_thermometer` | `boolean` | Yes | Configuration to enable or disable thermometers in the Story summary. |
| `start_time` | `string` | Yes | The date at which the Project was started. |
| `stats` | `table` | Yes | A group of calculated values for this Project. |
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
| `epics` | `table` | Yes | The results of the Epic search query. |
| `iterations` | `table` | Yes | The results of the Iteration search query. |
| `milestones` | `table` | Yes | The results of the Objective search query. |
| `stories` | `table` | Yes | The results of the Story search query. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Search():load({ query = "query" })
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
| `after_id` | `number` | No | The ID of the story we want to move this story after. |
| `app_url` | `string` | Yes | The Shortcut application url for the Story. |
| `archived` | `boolean` | Yes | True if the story has been archived or not. |
| `before_id` | `number` | No | The ID of the story we want to move this story before. |
| `blocked` | `boolean` | Yes | A true/false boolean indicating if the Story is currently blocked. |
| `blocker` | `boolean` | Yes | A true/false boolean indicating if the Story is currently a blocker of another story. |
| `branch_ids` | `table` | No | An array of IDs of Branches attached to the story. |
| `branches` | `table` | Yes | An array of Git branches attached to the story. |
| `comment_ids` | `table` | No | An array of IDs of Comments attached to the story. |
| `comments` | `table` | Yes | An array of comments attached to the story. |
| `commit_ids` | `table` | No | An array of IDs of Commits attached to the story. |
| `commits` | `table` | Yes | An array of commits attached to the story. |
| `completed` | `boolean` | Yes | A true/false boolean indicating if the Story has been completed. |
| `completed_at` | `string` | Yes | The time/date the Story was completed. |
| `completed_at_override` | `string` | Yes | A manual override for the time/date the Story was completed. |
| `created_at` | `string` | Yes | The time/date the Story was created. |
| `custom_fields` | `table` | No | An array of CustomField value assertions for the story. |
| `custom_fields_add` | `table` | No | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `table` | No | A map specifying a CustomField ID. |
| `cycle_time` | `number` | No | The cycle time (in seconds) of this story when complete. |
| `deadline` | `string` | Yes | The due date of the story. |
| `description` | `string` | Yes | The description of the story. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `epic_id` | `number` | Yes | The ID of the epic the story belongs to. |
| `estimate` | `number` | Yes | The numeric point estimate of the story. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `external_links` | `table` | Yes | An array of external links (strings) associated with a Story |
| `external_links_add` | `table` | No | An array of External Links associated with this story. |
| `external_links_remove` | `table` | No | An array of External Links associated with this story. |
| `file_ids` | `table` | No | An array of IDs of files attached to the story. |
| `file_ids_add` | `table` | No | An array of IDs of files attached to the story in addition to files from the template. |
| `file_ids_remove` | `table` | No | An array of IDs of files removed from files from the template. |
| `files` | `table` | Yes | An array of files attached to the story. |
| `follower_ids` | `table` | Yes | An array of UUIDs for any Members listed as Followers. |
| `follower_ids_add` | `table` | No | The UUIDs of the new followers to be added in addition to followers from the template. |
| `follower_ids_remove` | `table` | No | The UUIDs of the new followers to be removed from followers from the template. |
| `formatted_vcs_branch_name` | `string` | No | The formatted branch name for this story. |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes | The ID of the group associated with the story. |
| `group_mention_ids` | `table` | Yes | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `number` | Yes | The unique ID of the Story. |
| `iteration_id` | `number` | Yes | The ID of the iteration the story belongs to. |
| `label_ids` | `table` | Yes | An array of label ids attached to the story. |
| `labels` | `table` | Yes | An array of labels attached to the story. |
| `labels_add` | `table` | No | An array of labels attached to the story in addition to the labels provided by the template. |
| `labels_remove` | `table` | No | An array of labels to remove from the labels provided by the template. |
| `lead_time` | `number` | No | The lead time (in seconds) of this story when complete. |
| `linked_file_ids` | `table` | No | An array of IDs of linked files attached to the story. |
| `linked_file_ids_add` | `table` | No | An array of IDs of linked files attached to the story in addition to files from the template. |
| `linked_file_ids_remove` | `table` | No | An array of IDs of linked files removed from files from the template. |
| `linked_files` | `table` | Yes | An array of linked files attached to the story. |
| `member_mention_ids` | `table` | Yes | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `table` | Yes | `Deprecated:` use `member_mention_ids`. |
| `move_to` | `string` | No | One of "first" or "last". |
| `moved_at` | `string` | Yes | The time/date the Story was last changed workflow-state. |
| `name` | `string` | Yes | The name of the story. |
| `num_tasks_completed` | `number` | No | The number of tasks on the story which are complete. |
| `owner_ids` | `table` | Yes | An array of UUIDs of the owners of this story. |
| `owner_ids_add` | `table` | No | The UUIDs of the new owners to be added in addition to owners from the template. |
| `owner_ids_remove` | `table` | No | The UUIDs of the new owners to be removed from owners from the template. |
| `parent_story_id` | `number` | No | The id of the parent story to associate with this story. |
| `position` | `number` | Yes | A number representing the position of the story in relation to every other story in the current project. |
| `previous_iteration_ids` | `table` | Yes | The IDs of the iteration the story belongs to. |
| `project_id` | `number` | Yes | The ID of the project the story belongs to. |
| `pull_request_ids` | `table` | No | An array of IDs of Pull/Merge Requests attached to the story. |
| `pull_requests` | `table` | Yes | An array of Pull/Merge Requests attached to the story. |
| `requested_by_id` | `string` | Yes | The ID of the Member that requested the story. |
| `source_task_id` | `number` | No | Given this story was converted from a task in another story, this is the original task ID that was converted to this story. |
| `started` | `boolean` | Yes | A true/false boolean indicating if the Story has been started. |
| `started_at` | `string` | Yes | The time/date the Story was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Story was started. |
| `stats` | `table` | Yes | The stats object for Stories |
| `story_links` | `table` | Yes | An array of story links attached to the Story. |
| `story_template_id` | `string` | Yes | The ID of the story template used to create this story, or null if not created using a template. |
| `story_type` | `string` | Yes | The type of story (feature, bug, chore). |
| `sub_task_story_ids` | `table` | No |  |
| `sub_tasks` | `table` | No | A list of either params to create a new sub-task or link an existing story as a sub-task |
| `synced_item` | `table` | Yes | The synced item for the story. |
| `task_ids` | `table` | No | An array of IDs of Tasks attached to the story. |
| `tasks` | `table` | Yes | An array of tasks connected to the story. |
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
| `app_url` | `string` | Yes | The Shortcut application url for the Comment. |
| `author_id` | `string` | Yes | The unique ID of the Member who is the Comment's author. |
| `blocker` | `boolean` | No | Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment. |
| `created_at` | `string` | Yes | The time/date when the Comment was created. |
| `deleted` | `boolean` | Yes | True/false boolean indicating whether the Comment has been deleted. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `group_mention_ids` | `table` | Yes | The unique IDs of the Group who are mentioned in the Comment. |
| `id` | `number` | Yes | The unique ID of the Comment. |
| `linked_to_slack` | `boolean` | Yes | Whether the Comment is currently the root of a thread that is linked to Slack. |
| `member_mention_ids` | `table` | Yes | The unique IDs of the Member who are mentioned in the Comment. |
| `mention_ids` | `table` | Yes | `Deprecated:` use `member_mention_ids`. |
| `parent_id` | `number` | No | The ID of the parent Comment this Comment is threaded under. |
| `position` | `number` | Yes | The Comments numerical position in the list from oldest to newest. |
| `reactions` | `table` | Yes | A set of Reactions to this Comment. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:StoryComment():create({
  id = --[[ number ]],
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
  story_id = --[[ number ]],
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
| `emoji` | `string` | Yes | The emoji short-code to add / remove. |

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
| `after_id` | `number` | No | The ID of the story that the stories are to be moved below. |
| `archived` | `boolean` | No | A true/false boolean indicating whether the Story is in archived state. |
| `before_id` | `number` | No | The ID of the story that the stories are to be moved before. |
| `completed_at_end` | `string` | No | Stories should have been completed on or before this date. |
| `completed_at_start` | `string` | No | Stories should have been completed on or after this date. |
| `created_at_end` | `string` | No | Stories should have been created on or before this date. |
| `created_at_start` | `string` | No | Stories should have been created on or after this date. |
| `custom_fields_add` | `table` | No | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `table` | No | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `string` | No | The due date of the story. |
| `deadline_end` | `string` | No | Stories should have a deadline on or before this date. |
| `deadline_start` | `string` | No | Stories should have a deadline on or after this date. |
| `epic_id` | `number` | No | The Epic IDs that may be associated with the Stories. |
| `epic_ids` | `table` | No | The Epic IDs that may be associated with the Stories. |
| `estimate` | `number` | No | The number of estimate points associate with the Stories. |
| `external_id` | `string` | No | An ID or URL that references an external resource. |
| `external_links` | `table` | No | An array of External Links associated with this story. |
| `follower_ids_add` | `table` | No | The UUIDs of the new followers to be added. |
| `follower_ids_remove` | `table` | No | The UUIDs of the followers to be removed. |
| `group_id` | `string` | No | The Group ID that is associated with the Stories |
| `group_ids` | `table` | No | The Group IDs that are associated with the Stories |
| `includes_description` | `boolean` | No | Whether to include the story description in the response. |
| `iteration_id` | `number` | No | The Iteration ID that may be associated with the Stories. |
| `iteration_ids` | `table` | No | The Iteration IDs that may be associated with the Stories. |
| `label_ids` | `table` | No | The Label IDs that may be associated with the Stories. |
| `label_name` | `string` | No | The name of any associated Labels. |
| `labels_add` | `table` | No | An array of labels to be added. |
| `labels_remove` | `table` | No | An array of labels to be removed. |
| `move_to` | `string` | No | One of "first" or "last". |
| `owner_id` | `string` | No | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids` | `table` | No | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids_add` | `table` | No | The UUIDs of the new owners to be added. |
| `owner_ids_remove` | `table` | No | The UUIDs of the owners to be removed. |
| `project_id` | `number` | No | The IDs for the Projects the Stories may be assigned to. |
| `project_ids` | `table` | No | The IDs for the Projects the Stories may be assigned to. |
| `requested_by_id` | `string` | No | The UUID of any Users who may have requested the Stories. |
| `stories` | `table` | Yes | An array of stories to be created. |
| `story_ids` | `table` | Yes | The Ids of the Stories you wish to update. |
| `story_type` | `string` | No | The type of Stories that you want returned. |
| `updated_at_end` | `string` | No | Stories should have been updated on or before this date. |
| `updated_at_start` | `string` | No | Stories should have been updated on or after this date. |
| `workflow_state_id` | `number` | No | The unique IDs of the specific Workflow States that the Stories should be in. |
| `workflow_state_types` | `table` | No | The type of Workflow State the Stories may be in. |

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
| `after_id` | `number` | No | Move task after this task ID. |
| `before_id` | `number` | No | Move task before this task ID. |
| `complete` | `boolean` | Yes | True/false boolean indicating whether the Task has been completed. |
| `completed_at` | `string` | Yes | The time/date the Task was completed. |
| `created_at` | `string` | Yes | The time/date the Task was created. |
| `description` | `string` | Yes | Full text of the Task. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `global_id` | `string` | Yes |  |
| `group_mention_ids` | `table` | Yes | An array of UUIDs of Groups mentioned in this Task. |
| `id` | `number` | Yes | The unique ID of the Task. |
| `member_mention_ids` | `table` | Yes | An array of UUIDs of Members mentioned in this Task. |
| `mention_ids` | `table` | Yes | `Deprecated:` use `member_mention_ids`. |
| `owner_ids` | `table` | Yes | An array of UUIDs of the Owners of this Task. |
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
| `app_url` | `string` | Yes | The Shortcut application url for the Comment. |
| `author_id` | `string` | Yes | The unique ID of the Member that authored the Comment. |
| `comments` | `table` | Yes | A nested array of threaded comments. |
| `created_at` | `string` | Yes | The time/date the Comment was created. |
| `deleted` | `boolean` | Yes | True/false boolean indicating whether the Comment is deleted. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `group_mention_ids` | `table` | Yes | An array of Group IDs that have been mentioned in this Comment. |
| `id` | `number` | Yes | The unique ID of the Comment. |
| `member_mention_ids` | `table` | Yes | An array of Member IDs that have been mentioned in this Comment. |
| `mention_ids` | `table` | Yes | `Deprecated:` use `member_mention_ids`. |
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
| `content_type` | `string` | Yes | Free form string corresponding to a text or image file. |
| `created_at` | `string` | Yes | The time/date that the file was created. |
| `description` | `string` | Yes | The description of the file. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `filename` | `string` | Yes | The name assigned to the file in Shortcut upon upload. |
| `group_mention_ids` | `table` | Yes | The unique IDs of the Groups who are mentioned in the file description. |
| `id` | `number` | Yes | The unique ID for the file. |
| `member_mention_ids` | `table` | Yes | The unique IDs of the Members who are mentioned in the file description. |
| `mention_ids` | `table` | Yes | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | Yes | The optional User-specified name of the file. |
| `size` | `number` | Yes | The size of the file. |
| `story_ids` | `table` | Yes | The unique IDs of the Stories associated with this file. |
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
| `id` | `string` | No |  |
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
| `auto_assign_owner` | `boolean` | Yes | Indicates if an owner is automatically assigned when an unowned story is started. |
| `created_at` | `string` | Yes | The date the Workflow was created. |
| `default_state_id` | `number` | Yes | The unique ID of the default state that new Stories are entered into. |
| `description` | `string` | Yes | A description of the workflow. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `id` | `number` | Yes | The unique ID of the Workflow. |
| `name` | `string` | Yes | The name of the workflow. |
| `project_ids` | `table` | Yes | An array of IDs of projects within the Workflow. |
| `states` | `table` | Yes | A map of the states in this Workflow. |
| `team_id` | `number` | Yes | The ID of the team the workflow belongs to. |
| `updated_at` | `string` | Yes | The date the Workflow was updated. |

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


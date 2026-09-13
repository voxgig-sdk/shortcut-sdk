# Shortcut Ruby SDK Reference

Complete API reference for the Shortcut Ruby SDK.


## ShortcutSDK

### Constructor

```ruby
require_relative 'Shortcut_sdk'

client = ShortcutSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ShortcutSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = ShortcutSDK.test
```


### Instance Methods

#### `Bulk(data = nil)`

Create a new `Bulk` entity instance. Pass `nil` for no initial data.

#### `Category(data = nil)`

Create a new `Category` entity instance. Pass `nil` for no initial data.

#### `Comment(data = nil)`

Create a new `Comment` entity instance. Pass `nil` for no initial data.

#### `CustomField(data = nil)`

Create a new `CustomField` entity instance. Pass `nil` for no initial data.

#### `Disable(data = nil)`

Create a new `Disable` entity instance. Pass `nil` for no initial data.

#### `DocSlim(data = nil)`

Create a new `DocSlim` entity instance. Pass `nil` for no initial data.

#### `Enable(data = nil)`

Create a new `Enable` entity instance. Pass `nil` for no initial data.

#### `EntityTemplate(data = nil)`

Create a new `EntityTemplate` entity instance. Pass `nil` for no initial data.

#### `Epic(data = nil)`

Create a new `Epic` entity instance. Pass `nil` for no initial data.

#### `EpicPaginatedResult(data = nil)`

Create a new `EpicPaginatedResult` entity instance. Pass `nil` for no initial data.

#### `EpicUnlinkProductboard(data = nil)`

Create a new `EpicUnlinkProductboard` entity instance. Pass `nil` for no initial data.

#### `EpicWorkflow(data = nil)`

Create a new `EpicWorkflow` entity instance. Pass `nil` for no initial data.

#### `Group(data = nil)`

Create a new `Group` entity instance. Pass `nil` for no initial data.

#### `Health(data = nil)`

Create a new `Health` entity instance. Pass `nil` for no initial data.

#### `History(data = nil)`

Create a new `History` entity instance. Pass `nil` for no initial data.

#### `Iteration(data = nil)`

Create a new `Iteration` entity instance. Pass `nil` for no initial data.

#### `KeyResult(data = nil)`

Create a new `KeyResult` entity instance. Pass `nil` for no initial data.

#### `Label(data = nil)`

Create a new `Label` entity instance. Pass `nil` for no initial data.

#### `LinkedFile(data = nil)`

Create a new `LinkedFile` entity instance. Pass `nil` for no initial data.

#### `Member(data = nil)`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `Milestone(data = nil)`

Create a new `Milestone` entity instance. Pass `nil` for no initial data.

#### `Objectif(data = nil)`

Create a new `Objectif` entity instance. Pass `nil` for no initial data.

#### `Objective(data = nil)`

Create a new `Objective` entity instance. Pass `nil` for no initial data.

#### `Project(data = nil)`

Create a new `Project` entity instance. Pass `nil` for no initial data.

#### `Repository(data = nil)`

Create a new `Repository` entity instance. Pass `nil` for no initial data.

#### `Search(data = nil)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `Story(data = nil)`

Create a new `Story` entity instance. Pass `nil` for no initial data.

#### `StoryComment(data = nil)`

Create a new `StoryComment` entity instance. Pass `nil` for no initial data.

#### `StoryLink(data = nil)`

Create a new `StoryLink` entity instance. Pass `nil` for no initial data.

#### `StoryReaction(data = nil)`

Create a new `StoryReaction` entity instance. Pass `nil` for no initial data.

#### `StorySlim(data = nil)`

Create a new `StorySlim` entity instance. Pass `nil` for no initial data.

#### `Task(data = nil)`

Create a new `Task` entity instance. Pass `nil` for no initial data.

#### `ThreadedComment(data = nil)`

Create a new `ThreadedComment` entity instance. Pass `nil` for no initial data.

#### `UploadedFile(data = nil)`

Create a new `UploadedFile` entity instance. Pass `nil` for no initial data.

#### `Webhook(data = nil)`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `Workflow(data = nil)`

Create a new `Workflow` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## BulkEntity

```ruby
bulk = client.Bulk
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Bulk.remove()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BulkEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CategoryEntity

```ruby
category = client.Category
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `Boolean` | Yes | A true/false boolean indicating if the Category has been archived. |
| `color` | `String` | Yes | The hex color to be displayed with the Category (for example, "#ff0000"). |
| `created_at` | `String` | Yes | The time/date that the Category was created. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `external_id` | `String` | Yes | This field can be set to another unique ID. |
| `global_id` | `String` | Yes | The Global ID of the Category. |
| `id` | `Integer` | Yes | The unique ID of the Category. |
| `name` | `String` | Yes | The name of the Category. |
| `type` | `String` | Yes | The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category. |
| `updated_at` | `String` | Yes | The time/date that the Category was updated. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Category.create({
  "archived" => true, # Boolean
  "color" => "example_color", # String
  "created_at" => "example_created_at", # String
  "entity_type" => "example_entity_type", # String
  "external_id" => "example_external_id", # String
  "global_id" => "example_global_id", # String
  "id" => 1, # Integer
  "name" => "example_name", # String
  "type" => "example_type", # String
  "updated_at" => "example_updated_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Category.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Category.load({ "id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Category.remove({ "id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Category.update({
  "id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CategoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CommentEntity

```ruby
comment = client.Comment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Comment.remove({ "id" => 1, "story_id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CommentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomFieldEntity

```ruby
custom_field = client.CustomField
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `String` | No | The ID of the CustomField we want to move this CustomField after. |
| `before_id` | `String` | No | The ID of the CustomField we want to move this CustomField before. |
| `canonical_name` | `String` | No | The canonical name for a Shortcut-defined field. |
| `created_at` | `String` | Yes | The instant when this CustomField was created. |
| `description` | `String` | No | A string description of the CustomField |
| `enabled` | `Boolean` | Yes | When true, the CustomField can be applied to entities in the Workspace. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `field_type` | `String` | Yes | The type of Custom Field, eg. |
| `fixed_position` | `Boolean` | No | When true, the CustomFieldEnumValues may not be reordered. |
| `icon_set_identifier` | `String` | No | A string that represents the icon that corresponds to this custom field. |
| `id` | `String` | Yes | The unique public ID for the CustomField. |
| `name` | `String` | Yes | The name of the Custom Field. |
| `position` | `Integer` | Yes | An integer indicating the position of this Custom Field with respect to the other CustomField |
| `story_types` | `Array` | No | The types of stories this CustomField is scoped to. |
| `updated_at` | `String` | Yes | The instant when this CustomField was last updated. |
| `values` | `Array` | No | A collection of legal values for a CustomField. |

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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CustomField.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.CustomField.load({ "id" => "custom_field_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.CustomField.remove({ "id" => "custom_field_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CustomField.update({
  "id" => "custom_field_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DisableEntity

```ruby
disable = client.Disable
```

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Disable.update({
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DisableEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DocSlimEntity

```ruby
doc_slim = client.DocSlim
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `String` | Yes | The Shortcut application url for the Doc. |
| `content` | `String` | Yes | The content for the new document |
| `id` | `String` | Yes | The public id of the Doc |
| `title` | `String` | Yes | The title for the new document |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DocSlim.create({
  "app_url" => "example_app_url", # String
  "content" => "example_content", # String
  "id" => "example_id", # String
  "title" => "example_title", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DocSlim.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DocSlimEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EnableEntity

```ruby
enable = client.Enable
```

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Enable.update({
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EnableEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EntityTemplateEntity

```ruby
entity_template = client.EntityTemplate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `String` | No | The id of the user creating this template. |
| `created_at` | `String` | Yes | The time/date when the entity template was created. |
| `custom_fields` | `Array` | No | An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `String` | No | The due date of the story. |
| `description` | `String` | No | The description of the story. |
| `entity_type` | `String` | No | A string description of this resource. |
| `epic_id` | `Integer` | No | The ID of the epic the story belongs to. |
| `estimate` | `Integer` | No | The numeric point estimate of the story. |
| `external_links` | `Array` | No | An array of external links connected to the story. |
| `files` | `Array` | No | An array of files attached to the story. |
| `follower_ids` | `Array` | No | An array of UUIDs for any Members listed as Followers. |
| `group_id` | `String` | No | The ID of the group to which the story is assigned. |
| `id` | `String` | Yes | The unique identifier for the entity template. |
| `iteration_id` | `Integer` | No | The ID of the iteration the story belongs to. |
| `label_ids` | `Array` | No | An array of label ids attached to the story. |
| `labels` | `Array` | No | An array of labels attached to the story. |
| `last_used_at` | `String` | Yes | The last time that someone created an entity using this template. |
| `linked_files` | `Array` | No | An array of linked files attached to the story. |
| `name` | `String` | No | The name of the story. |
| `owner_ids` | `Array` | No | An array of UUIDs of the owners of this story. |
| `project_id` | `Integer` | No | The ID of the project the story belongs to. |
| `story_contents` | `Hash` | Yes | A map of story attributes this template populates. |
| `story_type` | `String` | No | The type of story (feature, bug, chore). |
| `sub_tasks` | `Array` | No | An array of sub-tasks connected to the story |
| `tasks` | `Array` | No | An array of tasks connected to the story. |
| `updated_at` | `String` | Yes | The time/date when the entity template was last updated. |
| `workflow_state_id` | `Integer` | No | The ID of the workflow state the story is currently in. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.EntityTemplate.create({
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "last_used_at" => "example_last_used_at", # String
  "story_contents" => {}, # Hash
  "updated_at" => "example_updated_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.EntityTemplate.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.EntityTemplate.load({ "id" => "entity_template_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.EntityTemplate.remove({ "id" => "entity_template_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.EntityTemplate.update({
  "id" => "entity_template_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EntityTemplateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EpicEntity

```ruby
epic = client.Epic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `Integer` | No | The ID of the Epic we want to move this Epic after. |
| `app_url` | `String` | Yes | The Shortcut application url for the Epic. |
| `archived` | `Boolean` | Yes | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `Array` | Yes | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `before_id` | `Integer` | No | The ID of the Epic we want to move this Epic before. |
| `comments` | `Array` | Yes | A nested array of threaded comments. |
| `completed` | `Boolean` | Yes | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | `String` | Yes | The time/date the Epic was completed. |
| `completed_at_override` | `String` | Yes | A manual override for the time/date the Epic was completed. |
| `converted_from_story_id` | `Integer` | No | The ID of the Story that was converted to an Epic. |
| `created_at` | `String` | Yes | The time/date the Epic was created. |
| `deadline` | `String` | Yes | The Epic's deadline. |
| `description` | `String` | Yes | The Epic's description. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `epic_state_id` | `Integer` | Yes | The ID of the Epic State. |
| `external_id` | `String` | Yes | This field can be set to another unique ID. |
| `follower_ids` | `Array` | Yes | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `String` | Yes |  |
| `group_id` | `String` | Yes | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `Array` | Yes | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `Array` | Yes | An array of Group IDs that have been mentioned in the Epic description. |
| `health` | `Hash` | Yes | The current health status of the Epic. |
| `id` | `Integer` | Yes | The unique ID of the Epic. |
| `label_ids` | `Array` | Yes | An array of Label ids attached to the Epic. |
| `labels` | `Array` | Yes | An array of Labels attached to the Epic. |
| `member_mention_ids` | `Array` | Yes | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `Array` | Yes | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `Integer` | Yes | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `String` | Yes | The name of the Epic. |
| `objective_ids` | `Array` | Yes | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `Array` | Yes | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `String` | Yes | The Epic's planned start date. |
| `position` | `Integer` | Yes | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `String` | Yes | The ID of the associated productboard feature. |
| `productboard_name` | `String` | Yes | The name of the associated productboard feature. |
| `productboard_plugin_id` | `String` | Yes | The ID of the associated productboard integration. |
| `productboard_url` | `String` | Yes | The URL of the associated productboard feature. |
| `project_ids` | `Array` | Yes | The IDs of Projects related to this Epic. |
| `requested_by_id` | `String` | Yes | The ID of the Member that requested the epic. |
| `started` | `Boolean` | Yes | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `String` | Yes | The time/date the Epic was started. |
| `started_at_override` | `String` | Yes | A manual override for the time/date the Epic was started. |
| `state` | `String` | Yes | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `Hash` | Yes | A group of calculated values for this Epic. |
| `stories_without_projects` | `Integer` | Yes | The number of stories in this epic which are not associated with a project. |
| `updated_at` | `String` | Yes | The time/date the Epic was updated. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Epic.create({
  "app_url" => "example_app_url", # String
  "archived" => true, # Boolean
  "associated_groups" => [], # Array
  "comments" => [], # Array
  "completed" => true, # Boolean
  "completed_at" => "example_completed_at", # String
  "completed_at_override" => "example_completed_at_override", # String
  "created_at" => "example_created_at", # String
  "deadline" => "example_deadline", # String
  "description" => "example_description", # String
  "entity_type" => "example_entity_type", # String
  "epic_state_id" => 1, # Integer
  "external_id" => "example_external_id", # String
  "follower_ids" => [], # Array
  "global_id" => "example_global_id", # String
  "group_id" => "example_group_id", # String
  "group_ids" => [], # Array
  "group_mention_ids" => [], # Array
  "health" => {}, # Hash
  "id" => 1, # Integer
  "label_ids" => [], # Array
  "labels" => [], # Array
  "member_mention_ids" => [], # Array
  "mention_ids" => [], # Array
  "milestone_id" => 1, # Integer
  "name" => "example_name", # String
  "objective_ids" => [], # Array
  "owner_ids" => [], # Array
  "planned_start_date" => "example_planned_start_date", # String
  "position" => 1, # Integer
  "productboard_id" => "example_productboard_id", # String
  "productboard_name" => "example_productboard_name", # String
  "productboard_plugin_id" => "example_productboard_plugin_id", # String
  "productboard_url" => "example_productboard_url", # String
  "project_ids" => [], # Array
  "requested_by_id" => "example_requested_by_id", # String
  "started" => true, # Boolean
  "started_at" => "example_started_at", # String
  "started_at_override" => "example_started_at_override", # String
  "state" => "example_state", # String
  "stats" => {}, # Hash
  "stories_without_projects" => 1, # Integer
  "updated_at" => "example_updated_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Epic.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Epic.load({ "id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Epic.remove({ "id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Epic.update({
  "id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EpicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EpicPaginatedResultEntity

```ruby
epic_paginated_result = client.EpicPaginatedResult
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `String` | Yes | The Shortcut application url for the Epic. |
| `archived` | `Boolean` | Yes | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `Array` | Yes | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `completed` | `Boolean` | Yes | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | `String` | Yes | The time/date the Epic was completed. |
| `completed_at_override` | `String` | Yes | A manual override for the time/date the Epic was completed. |
| `created_at` | `String` | Yes | The time/date the Epic was created. |
| `deadline` | `String` | Yes | The Epic's deadline. |
| `description` | `String` | No | The Epic's description. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `epic_state_id` | `Integer` | Yes | The ID of the Epic State. |
| `external_id` | `String` | Yes | This field can be set to another unique ID. |
| `follower_ids` | `Array` | Yes | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `String` | Yes |  |
| `group_id` | `String` | Yes | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `Array` | Yes | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `Array` | Yes | An array of Group IDs that have been mentioned in the Epic description. |
| `id` | `Integer` | Yes | The unique ID of the Epic. |
| `label_ids` | `Array` | Yes | An array of Label ids attached to the Epic. |
| `labels` | `Array` | Yes | An array of Labels attached to the Epic. |
| `member_mention_ids` | `Array` | Yes | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `Array` | Yes | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `Integer` | Yes | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `String` | Yes | The name of the Epic. |
| `objective_ids` | `Array` | Yes | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `Array` | Yes | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `String` | Yes | The Epic's planned start date. |
| `position` | `Integer` | Yes | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `String` | Yes | The ID of the associated productboard feature. |
| `productboard_name` | `String` | Yes | The name of the associated productboard feature. |
| `productboard_plugin_id` | `String` | Yes | The ID of the associated productboard integration. |
| `productboard_url` | `String` | Yes | The URL of the associated productboard feature. |
| `project_ids` | `Array` | Yes | The IDs of Projects related to this Epic. |
| `requested_by_id` | `String` | Yes | The ID of the Member that requested the epic. |
| `started` | `Boolean` | Yes | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `String` | Yes | The time/date the Epic was started. |
| `started_at_override` | `String` | Yes | A manual override for the time/date the Epic was started. |
| `state` | `String` | Yes | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `Hash` | Yes | A group of calculated values for this Epic. |
| `stories_without_projects` | `Integer` | Yes | The number of stories in this epic which are not associated with a project. |
| `updated_at` | `String` | Yes | The time/date the Epic was updated. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.EpicPaginatedResult.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EpicPaginatedResultEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EpicUnlinkProductboardEntity

```ruby
epic_unlink_productboard = client.EpicUnlinkProductboard
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.EpicUnlinkProductboard.create({
  "id" => 1, # Integer
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EpicUnlinkProductboardEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EpicWorkflowEntity

```ruby
epic_workflow = client.EpicWorkflow
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `color` | `String` | No | The hex color for this Epic State. |
| `created_at` | `String` | Yes | The time/date the Epic State was created. |
| `description` | `String` | Yes | The description of what sort of Epics belong in that Epic State. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `global_id` | `String` | Yes |  |
| `id` | `Integer` | Yes | The unique ID of the Epic State. |
| `name` | `String` | Yes | The Epic State's name. |
| `position` | `Integer` | Yes | The position that the Epic State is in, starting with 0 at the left. |
| `type` | `String` | Yes | The type of Epic State (Unstarted, Started, or Done) |
| `updated_at` | `String` | Yes | When the Epic State was last updated. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.EpicWorkflow.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EpicWorkflowEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GroupEntity

```ruby
group = client.Group
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `String` | Yes | The Shortcut application url for the Group. |
| `archived` | `Boolean` | Yes | Whether or not the Group is archived. |
| `color` | `String` | Yes | The hex color to be displayed with the Group (for example, "#ff0000"). |
| `color_key` | `String` | Yes | The color key to be displayed with the Group. |
| `created_at` | `String` | Yes | The instant when this group was created. |
| `default_workflow_id` | `Integer` | No | The ID of the default workflow for stories created in this group. |
| `description` | `String` | Yes | The description of the Group. |
| `display_icon` | `Hash` | Yes | Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application. |
| `display_icon_id` | `String` | No | The Icon id for the avatar of this Group. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `global_id` | `String` | Yes |  |
| `id` | `String` | Yes | The id of the Group. |
| `member_ids` | `Array` | Yes | The Member IDs contain within the Group. |
| `mention_name` | `String` | Yes | The mention name of the Group. |
| `name` | `String` | Yes | The name of the Group. |
| `num_epics_started` | `Integer` | Yes | The number of epics assigned to the group which are in the started workflow state. |
| `num_stories` | `Integer` | Yes | The total number of stories assigned to the group. |
| `num_stories_backlog` | `Integer` | Yes | The number of stories assigned to the group which are in a backlog workflow state. |
| `num_stories_started` | `Integer` | Yes | The number of stories assigned to the group which are in a started workflow state. |
| `updated_at` | `String` | Yes | The last instant when this group was updated. |
| `workflow_ids` | `Array` | Yes | The Workflow IDs contained within the Group. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Group.create({
  "app_url" => "example_app_url", # String
  "archived" => true, # Boolean
  "color" => "example_color", # String
  "color_key" => "example_color_key", # String
  "created_at" => "example_created_at", # String
  "description" => "example_description", # String
  "display_icon" => {}, # Hash
  "entity_type" => "example_entity_type", # String
  "global_id" => "example_global_id", # String
  "id" => "example_id", # String
  "member_ids" => [], # Array
  "mention_name" => "example_mention_name", # String
  "name" => "example_name", # String
  "num_epics_started" => 1, # Integer
  "num_stories" => 1, # Integer
  "num_stories_backlog" => 1, # Integer
  "num_stories_started" => 1, # Integer
  "updated_at" => "example_updated_at", # String
  "workflow_ids" => [], # Array
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Group.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Group.load({ "id" => "group_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Group.update({
  "id" => "group_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GroupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HealthEntity

```ruby
health = client.Health
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `String` | No | The ID of the permission who created or updated the Health record. |
| `created_at` | `String` | No | The time that the Health record was created. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `epic_id` | `Integer` | No | The ID of the Epic associated with this Health record. |
| `id` | `String` | Yes | The unique ID of the Health record. |
| `objective_id` | `Integer` | No | The ID of the Objective associated with this Health record. |
| `status` | `String` | Yes | The health status of the Epic or Objective. |
| `text` | `String` | No | The text of the Health record. |
| `updated_at` | `String` | No | The time that the Health record was updated. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Health.create({
  "epic_id" => 1, # Integer
  "entity_type" => "example_entity_type", # String
  "id" => "example_id", # String
  "status" => "example_status", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Health.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Health.load({ "epic_id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Health.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HealthEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HistoryEntity

```ruby
history = client.History
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `Array` | Yes | An array of actions that were performed for the change. |
| `actor_name` | `String` | No | The name of the actor that performed the action, if it can be determined. |
| `automation_id` | `String` | No | The ID of the automation that performed the change. |
| `changed_at` | `String` | Yes | The date when the change occurred. |
| `external_id` | `String` | No | The ID of the webhook that handled the change. |
| `id` | `String` | Yes | The ID representing the change for the story. |
| `member_id` | `String` | No | The ID of the member who performed the change. |
| `primary_id` | `String` | No | The ID of the primary entity that has changed, if applicable. |
| `references` | `Array` | No | An array of objects affected by the change. |
| `version` | `String` | Yes | The version of the change format. |
| `webhook_id` | `String` | No | The ID of the webhook that handled the change. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.History.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HistoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IterationEntity

```ruby
iteration = client.Iteration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `String` | Yes | The Shortcut application url for the Iteration. |
| `associated_groups` | `Array` | Yes | An array containing Group IDs and Group-owned story counts for the Iteration's associated groups. |
| `created_at` | `String` | Yes | The instant when this iteration was created. |
| `description` | `String` | Yes | The description of the iteration. |
| `end_date` | `String` | Yes | The date this iteration ends. |
| `entity_type` | `String` | Yes | A string description of this resource |
| `follower_ids` | `Array` | Yes | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `String` | Yes |  |
| `group_ids` | `Array` | Yes | An array of UUIDs for any Groups you want to add as Followers. |
| `group_mention_ids` | `Array` | Yes | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `Integer` | Yes | The ID of the iteration. |
| `label_ids` | `Array` | Yes | An array of label ids attached to the iteration. |
| `labels` | `Array` | Yes | An array of labels attached to the iteration. |
| `member_mention_ids` | `Array` | Yes | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `Array` | Yes | `Deprecated:` use `member_mention_ids`. |
| `name` | `String` | Yes | The name of the iteration. |
| `start_date` | `String` | Yes | The date this iteration begins. |
| `stats` | `Hash` | Yes | A group of calculated values for this Iteration. |
| `status` | `String` | Yes | The status of the iteration. |
| `updated_at` | `String` | Yes | The instant when this iteration was last updated. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Iteration.create({
  "app_url" => "example_app_url", # String
  "associated_groups" => [], # Array
  "created_at" => "example_created_at", # String
  "description" => "example_description", # String
  "end_date" => "example_end_date", # String
  "entity_type" => "example_entity_type", # String
  "follower_ids" => [], # Array
  "global_id" => "example_global_id", # String
  "group_ids" => [], # Array
  "group_mention_ids" => [], # Array
  "id" => 1, # Integer
  "label_ids" => [], # Array
  "labels" => [], # Array
  "member_mention_ids" => [], # Array
  "mention_ids" => [], # Array
  "name" => "example_name", # String
  "start_date" => "example_start_date", # String
  "stats" => {}, # Hash
  "status" => "example_status", # String
  "updated_at" => "example_updated_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Iteration.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Iteration.load({ "id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Iteration.remove({ "id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Iteration.update({
  "id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IterationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## KeyResultEntity

```ruby
key_result = client.KeyResult
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_observed_value` | `Hash` | Yes | The starting value of the Key Result. |
| `current_target_value` | `Hash` | Yes | The starting value of the Key Result. |
| `id` | `String` | Yes | The ID of the Key Result. |
| `initial_observed_value` | `Hash` | Yes | The starting value of the Key Result. |
| `name` | `String` | Yes | The name of the Key Result. |
| `objective_id` | `Integer` | Yes | The Objective to which this Key Result belongs. |
| `observed_value` | `Hash` | No | The starting value of the Key Result. |
| `progress` | `Integer` | Yes | The integer percentage of progress toward completion of the Key Result. |
| `target_value` | `Hash` | No | The starting value of the Key Result. |
| `type` | `String` | Yes | The type of the Key Result (numeric, percent, or boolean). |

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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.KeyResult.load({ "id" => "key_result_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.KeyResult.update({
  "id" => "key_result_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `KeyResultEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LabelEntity

```ruby
label = client.Label
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `String` | Yes | The Shortcut application url for the Label. |
| `archived` | `Boolean` | No | A true/false boolean indicating if the Label has been archived. |
| `color` | `String` | No | The hex color to be displayed with the Label (for example, "#ff0000"). |
| `created_at` | `String` | Yes | The time/date that the Label was created. |
| `description` | `String` | No | The description of the new Label. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `external_id` | `String` | No | This field can be set to another unique ID. |
| `global_id` | `String` | Yes |  |
| `id` | `Integer` | Yes | The unique ID of the Label. |
| `name` | `String` | Yes | The name of the new Label. |
| `num_epics` | `Integer` | Yes | The total number of Epics with this Label. |
| `num_epics_completed` | `Integer` | Yes | The number of completed Epics associated with this Label. |
| `num_epics_in_progress` | `Integer` | Yes | The number of in progress epics associated with this label. |
| `num_epics_total` | `Integer` | Yes | The total number of Epics associated with this Label. |
| `num_epics_unstarted` | `Integer` | Yes | The number of unstarted epics associated with this label. |
| `num_points_backlog` | `Integer` | Yes | The total number of backlog points with this Label. |
| `num_points_completed` | `Integer` | Yes | The total number of completed points with this Label. |
| `num_points_in_progress` | `Integer` | Yes | The total number of in-progress points with this Label. |
| `num_points_total` | `Integer` | Yes | The total number of points with this Label. |
| `num_points_unstarted` | `Integer` | Yes | The total number of unstarted points with this Label. |
| `num_related_documents` | `Integer` | Yes | The total number of Documents associated this Label. |
| `num_stories_backlog` | `Integer` | Yes | The total number of stories backlog Stories with this Label. |
| `num_stories_completed` | `Integer` | Yes | The total number of completed Stories with this Label. |
| `num_stories_in_progress` | `Integer` | Yes | The total number of in-progress Stories with this Label. |
| `num_stories_total` | `Integer` | Yes | The total number of Stories with this Label. |
| `num_stories_unestimated` | `Integer` | Yes | The total number of Stories with no point estimate with this Label. |
| `num_stories_unstarted` | `Integer` | Yes | The total number of stories unstarted Stories with this Label. |
| `stats` | `Hash` | Yes | A group of calculated values for this Label. |
| `updated_at` | `String` | Yes | The time/date that the Label was updated. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Label.create({
  "app_url" => "example_app_url", # String
  "created_at" => "example_created_at", # String
  "entity_type" => "example_entity_type", # String
  "global_id" => "example_global_id", # String
  "id" => 1, # Integer
  "name" => "example_name", # String
  "num_epics" => 1, # Integer
  "num_epics_completed" => 1, # Integer
  "num_epics_in_progress" => 1, # Integer
  "num_epics_total" => 1, # Integer
  "num_epics_unstarted" => 1, # Integer
  "num_points_backlog" => 1, # Integer
  "num_points_completed" => 1, # Integer
  "num_points_in_progress" => 1, # Integer
  "num_points_total" => 1, # Integer
  "num_points_unstarted" => 1, # Integer
  "num_related_documents" => 1, # Integer
  "num_stories_backlog" => 1, # Integer
  "num_stories_completed" => 1, # Integer
  "num_stories_in_progress" => 1, # Integer
  "num_stories_total" => 1, # Integer
  "num_stories_unestimated" => 1, # Integer
  "num_stories_unstarted" => 1, # Integer
  "stats" => {}, # Hash
  "updated_at" => "example_updated_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Label.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Label.load({ "id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Label.remove({ "id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Label.update({
  "id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LabelEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LinkedFileEntity

```ruby
linked_file = client.LinkedFile
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `String` | Yes | The content type of the image (e.g. |
| `created_at` | `String` | Yes | The time/date the LinkedFile was created. |
| `description` | `String` | Yes | The description of the file. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `group_mention_ids` | `Array` | Yes | The groups that are mentioned in the description of the file. |
| `id` | `Integer` | Yes | The unique identifier for the file. |
| `member_mention_ids` | `Array` | Yes | The members that are mentioned in the description of the file. |
| `mention_ids` | `Array` | Yes | `Deprecated:` use `member_mention_ids`. |
| `name` | `String` | Yes | The name of the linked file. |
| `size` | `Integer` | Yes | The filesize, if the integration provided it. |
| `story_id` | `Integer` | No | The ID of the linked story. |
| `story_ids` | `Array` | Yes | The IDs of the stories this file is attached to. |
| `thumbnail_url` | `String` | Yes | The URL of the file thumbnail, if the integration provided it. |
| `type` | `String` | Yes | The integration type (e.g. |
| `updated_at` | `String` | Yes | The time/date the LinkedFile was updated. |
| `uploader_id` | `String` | Yes | The UUID of the member that uploaded the file. |
| `url` | `String` | Yes | The URL of the file. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.LinkedFile.create({
  "content_type" => "example_content_type", # String
  "created_at" => "example_created_at", # String
  "description" => "example_description", # String
  "entity_type" => "example_entity_type", # String
  "group_mention_ids" => [], # Array
  "id" => 1, # Integer
  "member_mention_ids" => [], # Array
  "mention_ids" => [], # Array
  "name" => "example_name", # String
  "size" => 1, # Integer
  "story_ids" => [], # Array
  "thumbnail_url" => "example_thumbnail_url", # String
  "type" => "example_type", # String
  "updated_at" => "example_updated_at", # String
  "uploader_id" => "example_uploader_id", # String
  "url" => "example_url", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.LinkedFile.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.LinkedFile.load({ "id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.LinkedFile.remove({ "id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.LinkedFile.update({
  "id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LinkedFileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MemberEntity

```ruby
member = client.Member
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | The time/date the Member was created. |
| `created_without_invite` | `Boolean` | Yes | Whether this member was created as a placeholder entity. |
| `disabled` | `Boolean` | Yes | True/false boolean indicating whether the Member has been disabled within the Workspace. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `global_id` | `String` | Yes |  |
| `group_ids` | `Array` | Yes | The Member's group ids |
| `id` | `String` | Yes | The Member's ID in Shortcut. |
| `installation_id` | `String` | No | Only set for agents. |
| `is_owner` | `Boolean` | Yes |  |
| `mention_name` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `organization2` | `Hash` | Yes |  |
| `profile` | `Hash` | Yes | A group of Member profile details. |
| `replaced_by` | `String` | No | The id of the member that replaces this one when merged. |
| `role` | `String` | Yes | The Member's role in the Workspace. |
| `state` | `String` | Yes | The user state, one of partial, full, disabled, or imported. |
| `updated_at` | `String` | Yes | The time/date the Member was last updated. |
| `workspace2` | `Hash` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Member.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Member.load({ "id" => "member_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MilestoneEntity

```ruby
milestone = client.Milestone
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `Integer` | No | The ID of the Milestone we want to move this Milestone after. |
| `app_url` | `String` | Yes | The Shortcut application url for the Milestone. |
| `archived` | `Boolean` | Yes | A boolean indicating whether the Milestone has been archived or not. |
| `before_id` | `Integer` | No | The ID of the Milestone we want to move this Milestone before. |
| `categories` | `Array` | Yes | An array of Categories attached to the Milestone. |
| `completed` | `Boolean` | Yes | A true/false boolean indicating if the Milestone has been completed. |
| `completed_at` | `String` | Yes | The time/date the Milestone was completed. |
| `completed_at_override` | `String` | Yes | A manual override for the time/date the Milestone was completed. |
| `created_at` | `String` | Yes | The time/date the Milestone was created. |
| `description` | `String` | Yes | The Milestone's description. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `global_id` | `String` | Yes |  |
| `id` | `Integer` | Yes | The unique ID of the Milestone. |
| `key_result_ids` | `Array` | Yes | The IDs of the Key Results associated with the Objective. |
| `name` | `String` | Yes | The name of the Milestone. |
| `position` | `Integer` | Yes | A number representing the position of the Milestone in relation to every other Milestone within the Workspace. |
| `started` | `Boolean` | Yes | A true/false boolean indicating if the Milestone has been started. |
| `started_at` | `String` | Yes | The time/date the Milestone was started. |
| `started_at_override` | `String` | Yes | A manual override for the time/date the Milestone was started. |
| `state` | `String` | Yes | The workflow state that the Milestone is in. |
| `stats` | `Hash` | Yes | A group of calculated values for this Milestone. |
| `updated_at` | `String` | Yes | The time/date the Milestone was updated. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Milestone.create({
  "app_url" => "example_app_url", # String
  "archived" => true, # Boolean
  "categories" => [], # Array
  "completed" => true, # Boolean
  "completed_at" => "example_completed_at", # String
  "completed_at_override" => "example_completed_at_override", # String
  "created_at" => "example_created_at", # String
  "description" => "example_description", # String
  "entity_type" => "example_entity_type", # String
  "global_id" => "example_global_id", # String
  "id" => 1, # Integer
  "key_result_ids" => [], # Array
  "name" => "example_name", # String
  "position" => 1, # Integer
  "started" => true, # Boolean
  "started_at" => "example_started_at", # String
  "started_at_override" => "example_started_at_override", # String
  "state" => "example_state", # String
  "stats" => {}, # Hash
  "updated_at" => "example_updated_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Milestone.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Milestone.load({ "id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Milestone.remove({ "id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Milestone.update({
  "id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MilestoneEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ObjectifEntity

```ruby
objectif = client.Objectif
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Objectif.remove({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ObjectifEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ObjectiveEntity

```ruby
objective = client.Objective
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `Integer` | No | The ID of the Objective we want to move this Objective after. |
| `app_url` | `String` | Yes | The Shortcut application url for the Objective. |
| `archived` | `Boolean` | Yes | A boolean indicating whether the Objective has been archived or not. |
| `before_id` | `Integer` | No | The ID of the Objective we want to move this Objective before. |
| `categories` | `Array` | Yes | An array of Categories attached to the Objective. |
| `completed` | `Boolean` | Yes | A true/false boolean indicating if the Objectivehas been completed. |
| `completed_at` | `String` | Yes | The time/date the Objective was completed. |
| `completed_at_override` | `String` | Yes | A manual override for the time/date the Objective was completed. |
| `created_at` | `String` | Yes | The time/date the Objective was created. |
| `description` | `String` | Yes | The Objective's description. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `global_id` | `String` | Yes |  |
| `id` | `Integer` | Yes | The unique ID of the Objective. |
| `key_result_ids` | `Array` | Yes | The IDs of the Key Results associated with the Objective. |
| `name` | `String` | Yes | The name of the Objective. |
| `position` | `Integer` | Yes | A number representing the position of the Objective in relation to every other Objective within the Workspace. |
| `started` | `Boolean` | Yes | A true/false boolean indicating if the Objective has been started. |
| `started_at` | `String` | Yes | The time/date the Objective was started. |
| `started_at_override` | `String` | Yes | A manual override for the time/date the Objective was started. |
| `state` | `String` | Yes | The workflow state that the Objective is in. |
| `stats` | `Hash` | Yes | A group of calculated values for this Objective. |
| `updated_at` | `String` | Yes | The time/date the Objective was updated. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Objective.create({
  "app_url" => "example_app_url", # String
  "archived" => true, # Boolean
  "categories" => [], # Array
  "completed" => true, # Boolean
  "completed_at" => "example_completed_at", # String
  "completed_at_override" => "example_completed_at_override", # String
  "created_at" => "example_created_at", # String
  "description" => "example_description", # String
  "entity_type" => "example_entity_type", # String
  "global_id" => "example_global_id", # String
  "id" => 1, # Integer
  "key_result_ids" => [], # Array
  "name" => "example_name", # String
  "position" => 1, # Integer
  "started" => true, # Boolean
  "started_at" => "example_started_at", # String
  "started_at_override" => "example_started_at_override", # String
  "state" => "example_state", # String
  "stats" => {}, # Hash
  "updated_at" => "example_updated_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Objective.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Objective.load({ "objective_public_id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Objective.update({
  "objective_public_id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ObjectiveEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectEntity

```ruby
project = client.Project
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abbreviation` | `String` | Yes | The Project abbreviation used in Story summaries. |
| `app_url` | `String` | Yes | The Shortcut application url for the Project. |
| `archived` | `Boolean` | Yes | True/false boolean indicating whether the Project is in an Archived state. |
| `color` | `String` | Yes | The color associated with the Project in the Shortcut member interface. |
| `created_at` | `String` | Yes | The time/date that the Project was created. |
| `days_to_thermometer` | `Integer` | Yes | The number of days before the thermometer appears in the Story summary. |
| `description` | `String` | Yes | The description of the Project. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `external_id` | `String` | Yes | This field can be set to another unique ID. |
| `follower_ids` | `Array` | Yes | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `String` | Yes | The Global ID of the Project. |
| `id` | `Integer` | Yes | The unique ID of the Project. |
| `iteration_length` | `Integer` | Yes | The number of weeks per iteration in this Project. |
| `name` | `String` | Yes | The name of the Project |
| `show_thermometer` | `Boolean` | Yes | Configuration to enable or disable thermometers in the Story summary. |
| `start_time` | `String` | Yes | The date at which the Project was started. |
| `stats` | `Hash` | Yes | A group of calculated values for this Project. |
| `team_id` | `Integer` | Yes | The ID of the team the project belongs to. |
| `updated_at` | `String` | Yes | The time/date that the Project was last updated. |
| `workflow_id` | `Integer` | Yes | The ID of the workflow the project belongs to. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Project.create({
  "abbreviation" => "example_abbreviation", # String
  "app_url" => "example_app_url", # String
  "archived" => true, # Boolean
  "color" => "example_color", # String
  "created_at" => "example_created_at", # String
  "days_to_thermometer" => 1, # Integer
  "description" => "example_description", # String
  "entity_type" => "example_entity_type", # String
  "external_id" => "example_external_id", # String
  "follower_ids" => [], # Array
  "global_id" => "example_global_id", # String
  "id" => 1, # Integer
  "iteration_length" => 1, # Integer
  "name" => "example_name", # String
  "show_thermometer" => true, # Boolean
  "start_time" => "example_start_time", # String
  "stats" => {}, # Hash
  "team_id" => 1, # Integer
  "updated_at" => "example_updated_at", # String
  "workflow_id" => 1, # Integer
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Project.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Project.load({ "id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Project.remove({ "id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Project.update({
  "id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RepositoryEntity

```ruby
repository = client.Repository
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | The time/date the Repository was created. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `external_id` | `String` | Yes | The VCS unique identifier for the Repository. |
| `full_name` | `String` | Yes | The full name of the VCS repository. |
| `id` | `Integer` | Yes | The ID associated to the VCS repository in Shortcut. |
| `name` | `String` | Yes | The shorthand name of the VCS repository. |
| `type` | `String` | Yes | The VCS provider for the Repository. |
| `updated_at` | `String` | Yes | The time/date the Repository was updated. |
| `url` | `String` | Yes | The URL of the Repository. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Repository.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Repository.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RepositoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SearchEntity

```ruby
search = client.Search
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `epics` | `Hash` | Yes | The results of the Epic search query. |
| `iterations` | `Hash` | Yes | The results of the Iteration search query. |
| `milestones` | `Hash` | Yes | The results of the Objective search query. |
| `stories` | `Hash` | Yes | The results of the Story search query. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Search.load({ "query" => "query" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StoryEntity

```ruby
story = client.Story
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `Integer` | No | The ID of the story we want to move this story after. |
| `app_url` | `String` | Yes | The Shortcut application url for the Story. |
| `archived` | `Boolean` | Yes | True if the story has been archived or not. |
| `before_id` | `Integer` | No | The ID of the story we want to move this story before. |
| `blocked` | `Boolean` | Yes | A true/false boolean indicating if the Story is currently blocked. |
| `blocker` | `Boolean` | Yes | A true/false boolean indicating if the Story is currently a blocker of another story. |
| `branch_ids` | `Array` | No | An array of IDs of Branches attached to the story. |
| `branches` | `Array` | Yes | An array of Git branches attached to the story. |
| `comment_ids` | `Array` | No | An array of IDs of Comments attached to the story. |
| `comments` | `Array` | Yes | An array of comments attached to the story. |
| `commit_ids` | `Array` | No | An array of IDs of Commits attached to the story. |
| `commits` | `Array` | Yes | An array of commits attached to the story. |
| `completed` | `Boolean` | Yes | A true/false boolean indicating if the Story has been completed. |
| `completed_at` | `String` | Yes | The time/date the Story was completed. |
| `completed_at_override` | `String` | Yes | A manual override for the time/date the Story was completed. |
| `created_at` | `String` | Yes | The time/date the Story was created. |
| `custom_fields` | `Array` | No | An array of CustomField value assertions for the story. |
| `custom_fields_add` | `Array` | No | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `Array` | No | A map specifying a CustomField ID. |
| `cycle_time` | `Integer` | No | The cycle time (in seconds) of this story when complete. |
| `deadline` | `String` | Yes | The due date of the story. |
| `description` | `String` | Yes | The description of the story. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `epic_id` | `Integer` | Yes | The ID of the epic the story belongs to. |
| `estimate` | `Integer` | Yes | The numeric point estimate of the story. |
| `external_id` | `String` | Yes | This field can be set to another unique ID. |
| `external_links` | `Array` | Yes | An array of external links (strings) associated with a Story |
| `external_links_add` | `Array` | No | An array of External Links associated with this story. |
| `external_links_remove` | `Array` | No | An array of External Links associated with this story. |
| `file_ids` | `Array` | No | An array of IDs of files attached to the story. |
| `file_ids_add` | `Array` | No | An array of IDs of files attached to the story in addition to files from the template. |
| `file_ids_remove` | `Array` | No | An array of IDs of files removed from files from the template. |
| `files` | `Array` | Yes | An array of files attached to the story. |
| `follower_ids` | `Array` | Yes | An array of UUIDs for any Members listed as Followers. |
| `follower_ids_add` | `Array` | No | The UUIDs of the new followers to be added in addition to followers from the template. |
| `follower_ids_remove` | `Array` | No | The UUIDs of the new followers to be removed from followers from the template. |
| `formatted_vcs_branch_name` | `String` | No | The formatted branch name for this story. |
| `global_id` | `String` | Yes |  |
| `group_id` | `String` | Yes | The ID of the group associated with the story. |
| `group_mention_ids` | `Array` | Yes | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `Integer` | Yes | The unique ID of the Story. |
| `iteration_id` | `Integer` | Yes | The ID of the iteration the story belongs to. |
| `label_ids` | `Array` | Yes | An array of label ids attached to the story. |
| `labels` | `Array` | Yes | An array of labels attached to the story. |
| `labels_add` | `Array` | No | An array of labels attached to the story in addition to the labels provided by the template. |
| `labels_remove` | `Array` | No | An array of labels to remove from the labels provided by the template. |
| `lead_time` | `Integer` | No | The lead time (in seconds) of this story when complete. |
| `linked_file_ids` | `Array` | No | An array of IDs of linked files attached to the story. |
| `linked_file_ids_add` | `Array` | No | An array of IDs of linked files attached to the story in addition to files from the template. |
| `linked_file_ids_remove` | `Array` | No | An array of IDs of linked files removed from files from the template. |
| `linked_files` | `Array` | Yes | An array of linked files attached to the story. |
| `member_mention_ids` | `Array` | Yes | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `Array` | Yes | `Deprecated:` use `member_mention_ids`. |
| `move_to` | `String` | No | One of "first" or "last". |
| `moved_at` | `String` | Yes | The time/date the Story was last changed workflow-state. |
| `name` | `String` | Yes | The name of the story. |
| `num_tasks_completed` | `Integer` | No | The number of tasks on the story which are complete. |
| `owner_ids` | `Array` | Yes | An array of UUIDs of the owners of this story. |
| `owner_ids_add` | `Array` | No | The UUIDs of the new owners to be added in addition to owners from the template. |
| `owner_ids_remove` | `Array` | No | The UUIDs of the new owners to be removed from owners from the template. |
| `parent_story_id` | `Integer` | No | The id of the parent story to associate with this story. |
| `position` | `Integer` | Yes | A number representing the position of the story in relation to every other story in the current project. |
| `previous_iteration_ids` | `Array` | Yes | The IDs of the iteration the story belongs to. |
| `project_id` | `Integer` | Yes | The ID of the project the story belongs to. |
| `pull_request_ids` | `Array` | No | An array of IDs of Pull/Merge Requests attached to the story. |
| `pull_requests` | `Array` | Yes | An array of Pull/Merge Requests attached to the story. |
| `requested_by_id` | `String` | Yes | The ID of the Member that requested the story. |
| `source_task_id` | `Integer` | No | Given this story was converted from a task in another story, this is the original task ID that was converted to this story. |
| `started` | `Boolean` | Yes | A true/false boolean indicating if the Story has been started. |
| `started_at` | `String` | Yes | The time/date the Story was started. |
| `started_at_override` | `String` | Yes | A manual override for the time/date the Story was started. |
| `stats` | `Hash` | Yes | The stats object for Stories |
| `story_links` | `Array` | Yes | An array of story links attached to the Story. |
| `story_template_id` | `String` | Yes | The ID of the story template used to create this story, or null if not created using a template. |
| `story_type` | `String` | Yes | The type of story (feature, bug, chore). |
| `sub_task_story_ids` | `Array` | No |  |
| `sub_tasks` | `Array` | No | A list of either params to create a new sub-task or link an existing story as a sub-task |
| `synced_item` | `Hash` | Yes | The synced item for the story. |
| `task_ids` | `Array` | No | An array of IDs of Tasks attached to the story. |
| `tasks` | `Array` | Yes | An array of tasks connected to the story. |
| `updated_at` | `String` | Yes | The time/date the Story was updated. |
| `workflow_id` | `Integer` | Yes | The ID of the workflow the story belongs to. |
| `workflow_state_id` | `Integer` | Yes | The ID of the workflow state the story is currently in. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Story.create({
  "app_url" => "example_app_url", # String
  "archived" => true, # Boolean
  "blocked" => true, # Boolean
  "blocker" => true, # Boolean
  "branches" => [], # Array
  "comments" => [], # Array
  "commits" => [], # Array
  "completed" => true, # Boolean
  "completed_at" => "example_completed_at", # String
  "completed_at_override" => "example_completed_at_override", # String
  "created_at" => "example_created_at", # String
  "deadline" => "example_deadline", # String
  "description" => "example_description", # String
  "entity_type" => "example_entity_type", # String
  "epic_id" => 1, # Integer
  "estimate" => 1, # Integer
  "external_id" => "example_external_id", # String
  "external_links" => [], # Array
  "files" => [], # Array
  "follower_ids" => [], # Array
  "global_id" => "example_global_id", # String
  "group_id" => "example_group_id", # String
  "group_mention_ids" => [], # Array
  "id" => 1, # Integer
  "iteration_id" => 1, # Integer
  "label_ids" => [], # Array
  "labels" => [], # Array
  "linked_files" => [], # Array
  "member_mention_ids" => [], # Array
  "mention_ids" => [], # Array
  "moved_at" => "example_moved_at", # String
  "name" => "example_name", # String
  "owner_ids" => [], # Array
  "position" => 1, # Integer
  "previous_iteration_ids" => [], # Array
  "project_id" => 1, # Integer
  "pull_requests" => [], # Array
  "requested_by_id" => "example_requested_by_id", # String
  "started" => true, # Boolean
  "started_at" => "example_started_at", # String
  "started_at_override" => "example_started_at_override", # String
  "stats" => {}, # Hash
  "story_links" => [], # Array
  "story_template_id" => "example_story_template_id", # String
  "story_type" => "example_story_type", # String
  "synced_item" => {}, # Hash
  "tasks" => [], # Array
  "updated_at" => "example_updated_at", # String
  "workflow_id" => 1, # Integer
  "workflow_state_id" => 1, # Integer
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Story.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Story.load({ "id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Story.remove({ "id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Story.update({
  "id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StoryCommentEntity

```ruby
story_comment = client.StoryComment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `String` | Yes | The Shortcut application url for the Comment. |
| `author_id` | `String` | Yes | The unique ID of the Member who is the Comment's author. |
| `blocker` | `Boolean` | No | Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment. |
| `created_at` | `String` | Yes | The time/date when the Comment was created. |
| `deleted` | `Boolean` | Yes | True/false boolean indicating whether the Comment has been deleted. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `external_id` | `String` | Yes | This field can be set to another unique ID. |
| `group_mention_ids` | `Array` | Yes | The unique IDs of the Group who are mentioned in the Comment. |
| `id` | `Integer` | Yes | The unique ID of the Comment. |
| `linked_to_slack` | `Boolean` | Yes | Whether the Comment is currently the root of a thread that is linked to Slack. |
| `member_mention_ids` | `Array` | Yes | The unique IDs of the Member who are mentioned in the Comment. |
| `mention_ids` | `Array` | Yes | `Deprecated:` use `member_mention_ids`. |
| `parent_id` | `Integer` | No | The ID of the parent Comment this Comment is threaded under. |
| `position` | `Integer` | Yes | The Comments numerical position in the list from oldest to newest. |
| `reactions` | `Array` | Yes | A set of Reactions to this Comment. |
| `story_id` | `Integer` | Yes | The ID of the Story on which the Comment appears. |
| `text` | `String` | Yes | The text of the Comment. |
| `unblocks_parent` | `Boolean` | No | Marks the comment as an unblocker to its blocker parent. |
| `updated_at` | `String` | Yes | The time/date when the Comment was updated. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.StoryComment.create({
  "id" => 1, # Integer
  "app_url" => "example_app_url", # String
  "author_id" => "example_author_id", # String
  "created_at" => "example_created_at", # String
  "deleted" => true, # Boolean
  "entity_type" => "example_entity_type", # String
  "external_id" => "example_external_id", # String
  "group_mention_ids" => [], # Array
  "linked_to_slack" => true, # Boolean
  "member_mention_ids" => [], # Array
  "mention_ids" => [], # Array
  "position" => 1, # Integer
  "reactions" => [], # Array
  "story_id" => 1, # Integer
  "text" => "example_text", # String
  "updated_at" => "example_updated_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.StoryComment.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.StoryComment.load({ "id" => 1, "story_id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.StoryComment.update({
  "id" => 1,
  "story_id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StoryCommentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StoryLinkEntity

```ruby
story_link = client.StoryLink
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | The time/date when the Story Link was created. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `id` | `Integer` | Yes | The unique identifier of the Story Link. |
| `object_id` | `Integer` | Yes | The ID of the object Story. |
| `subject_id` | `Integer` | Yes | The ID of the subject Story. |
| `subject_workflow_state_id` | `Integer` | Yes | The workflow state of the "subject" story. |
| `updated_at` | `String` | Yes | The time/date when the Story Link was last updated. |
| `verb` | `String` | Yes | How the subject Story acts on the object Story. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.StoryLink.create({
  "created_at" => "example_created_at", # String
  "entity_type" => "example_entity_type", # String
  "id" => 1, # Integer
  "object_id" => 1, # Integer
  "subject_id" => 1, # Integer
  "subject_workflow_state_id" => 1, # Integer
  "updated_at" => "example_updated_at", # String
  "verb" => "example_verb", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.StoryLink.load({ "id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.StoryLink.remove({ "id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.StoryLink.update({
  "id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StoryLinkEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StoryReactionEntity

```ruby
story_reaction = client.StoryReaction
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emoji` | `String` | Yes | The emoji short-code to add / remove. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.StoryReaction.create({
  "comment_id" => 1, # Integer
  "story_id" => 1, # Integer
  "emoji" => "example_emoji", # String
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.StoryReaction.remove({ "comment_id" => 1, "story_id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StoryReactionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StorySlimEntity

```ruby
story_slim = client.StorySlim
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `Integer` | No | The ID of the story that the stories are to be moved below. |
| `archived` | `Boolean` | No | A true/false boolean indicating whether the Story is in archived state. |
| `before_id` | `Integer` | No | The ID of the story that the stories are to be moved before. |
| `completed_at_end` | `String` | No | Stories should have been completed on or before this date. |
| `completed_at_start` | `String` | No | Stories should have been completed on or after this date. |
| `created_at_end` | `String` | No | Stories should have been created on or before this date. |
| `created_at_start` | `String` | No | Stories should have been created on or after this date. |
| `custom_fields_add` | `Array` | No | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `Array` | No | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `String` | No | The due date of the story. |
| `deadline_end` | `String` | No | Stories should have a deadline on or before this date. |
| `deadline_start` | `String` | No | Stories should have a deadline on or after this date. |
| `epic_id` | `Integer` | No | The Epic IDs that may be associated with the Stories. |
| `epic_ids` | `Array` | No | The Epic IDs that may be associated with the Stories. |
| `estimate` | `Integer` | No | The number of estimate points associate with the Stories. |
| `external_id` | `String` | No | An ID or URL that references an external resource. |
| `external_links` | `Array` | No | An array of External Links associated with this story. |
| `follower_ids_add` | `Array` | No | The UUIDs of the new followers to be added. |
| `follower_ids_remove` | `Array` | No | The UUIDs of the followers to be removed. |
| `group_id` | `String` | No | The Group ID that is associated with the Stories |
| `group_ids` | `Array` | No | The Group IDs that are associated with the Stories |
| `includes_description` | `Boolean` | No | Whether to include the story description in the response. |
| `iteration_id` | `Integer` | No | The Iteration ID that may be associated with the Stories. |
| `iteration_ids` | `Array` | No | The Iteration IDs that may be associated with the Stories. |
| `label_ids` | `Array` | No | The Label IDs that may be associated with the Stories. |
| `label_name` | `String` | No | The name of any associated Labels. |
| `labels_add` | `Array` | No | An array of labels to be added. |
| `labels_remove` | `Array` | No | An array of labels to be removed. |
| `move_to` | `String` | No | One of "first" or "last". |
| `owner_id` | `String` | No | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids` | `Array` | No | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids_add` | `Array` | No | The UUIDs of the new owners to be added. |
| `owner_ids_remove` | `Array` | No | The UUIDs of the owners to be removed. |
| `project_id` | `Integer` | No | The IDs for the Projects the Stories may be assigned to. |
| `project_ids` | `Array` | No | The IDs for the Projects the Stories may be assigned to. |
| `requested_by_id` | `String` | No | The UUID of any Users who may have requested the Stories. |
| `stories` | `Array` | Yes | An array of stories to be created. |
| `story_ids` | `Array` | Yes | The Ids of the Stories you wish to update. |
| `story_type` | `String` | No | The type of Stories that you want returned. |
| `updated_at_end` | `String` | No | Stories should have been updated on or before this date. |
| `updated_at_start` | `String` | No | Stories should have been updated on or after this date. |
| `workflow_state_id` | `Integer` | No | The unique IDs of the specific Workflow States that the Stories should be in. |
| `workflow_state_types` | `Array` | No | The type of Workflow State the Stories may be in. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.StorySlim.create({
  "stories" => [], # Array
  "story_ids" => [], # Array
})
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.StorySlim.update({
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StorySlimEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TaskEntity

```ruby
task = client.Task
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `Integer` | No | Move task after this task ID. |
| `before_id` | `Integer` | No | Move task before this task ID. |
| `complete` | `Boolean` | Yes | True/false boolean indicating whether the Task has been completed. |
| `completed_at` | `String` | Yes | The time/date the Task was completed. |
| `created_at` | `String` | Yes | The time/date the Task was created. |
| `description` | `String` | Yes | Full text of the Task. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `external_id` | `String` | Yes | This field can be set to another unique ID. |
| `global_id` | `String` | Yes |  |
| `group_mention_ids` | `Array` | Yes | An array of UUIDs of Groups mentioned in this Task. |
| `id` | `Integer` | Yes | The unique ID of the Task. |
| `member_mention_ids` | `Array` | Yes | An array of UUIDs of Members mentioned in this Task. |
| `mention_ids` | `Array` | Yes | `Deprecated:` use `member_mention_ids`. |
| `owner_ids` | `Array` | Yes | An array of UUIDs of the Owners of this Task. |
| `position` | `Integer` | Yes | The number corresponding to the Task's position within a list of Tasks on a Story. |
| `story_id` | `Integer` | Yes | The unique identifier of the parent Story. |
| `updated_at` | `String` | Yes | The time/date the Task was updated. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Task.create({
  "story_id" => 1, # Integer
  "complete" => true, # Boolean
  "completed_at" => "example_completed_at", # String
  "created_at" => "example_created_at", # String
  "description" => "example_description", # String
  "entity_type" => "example_entity_type", # String
  "external_id" => "example_external_id", # String
  "global_id" => "example_global_id", # String
  "group_mention_ids" => [], # Array
  "id" => 1, # Integer
  "member_mention_ids" => [], # Array
  "mention_ids" => [], # Array
  "owner_ids" => [], # Array
  "position" => 1, # Integer
  "updated_at" => "example_updated_at", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Task.load({ "id" => 1, "story_id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Task.remove({ "id" => 1, "story_id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Task.update({
  "id" => 1,
  "story_id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TaskEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ThreadedCommentEntity

```ruby
threaded_comment = client.ThreadedComment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `String` | Yes | The Shortcut application url for the Comment. |
| `author_id` | `String` | Yes | The unique ID of the Member that authored the Comment. |
| `comments` | `Array` | Yes | A nested array of threaded comments. |
| `created_at` | `String` | Yes | The time/date the Comment was created. |
| `deleted` | `Boolean` | Yes | True/false boolean indicating whether the Comment is deleted. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `external_id` | `String` | Yes | This field can be set to another unique ID. |
| `group_mention_ids` | `Array` | Yes | An array of Group IDs that have been mentioned in this Comment. |
| `id` | `Integer` | Yes | The unique ID of the Comment. |
| `member_mention_ids` | `Array` | Yes | An array of Member IDs that have been mentioned in this Comment. |
| `mention_ids` | `Array` | Yes | `Deprecated:` use `member_mention_ids`. |
| `text` | `String` | Yes | The text of the Comment. |
| `updated_at` | `String` | Yes | The time/date the Comment was updated. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ThreadedComment.create({
  "epic_id" => 1, # Integer
  "app_url" => "example_app_url", # String
  "author_id" => "example_author_id", # String
  "comments" => [], # Array
  "created_at" => "example_created_at", # String
  "deleted" => true, # Boolean
  "entity_type" => "example_entity_type", # String
  "external_id" => "example_external_id", # String
  "group_mention_ids" => [], # Array
  "member_mention_ids" => [], # Array
  "mention_ids" => [], # Array
  "text" => "example_text", # String
  "updated_at" => "example_updated_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ThreadedComment.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ThreadedComment.load({ "id" => 1, "epic_id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ThreadedComment.remove({ "id" => 1, "epic_id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ThreadedComment.update({
  "id" => 1,
  "epic_id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ThreadedCommentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UploadedFileEntity

```ruby
uploaded_file = client.UploadedFile
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `String` | Yes | Free form string corresponding to a text or image file. |
| `created_at` | `String` | Yes | The time/date that the file was created. |
| `description` | `String` | Yes | The description of the file. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `external_id` | `String` | Yes | This field can be set to another unique ID. |
| `filename` | `String` | Yes | The name assigned to the file in Shortcut upon upload. |
| `group_mention_ids` | `Array` | Yes | The unique IDs of the Groups who are mentioned in the file description. |
| `id` | `Integer` | Yes | The unique ID for the file. |
| `member_mention_ids` | `Array` | Yes | The unique IDs of the Members who are mentioned in the file description. |
| `mention_ids` | `Array` | Yes | `Deprecated:` use `member_mention_ids`. |
| `name` | `String` | Yes | The optional User-specified name of the file. |
| `size` | `Integer` | Yes | The size of the file. |
| `story_ids` | `Array` | Yes | The unique IDs of the Stories associated with this file. |
| `thumbnail_url` | `String` | Yes | The url where the thumbnail of the file can be found in Shortcut. |
| `updated_at` | `String` | Yes | The time/date that the file was updated. |
| `uploader_id` | `String` | Yes | The unique ID of the Member who uploaded the file. |
| `url` | `String` | Yes | The URL for the file. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.UploadedFile.create({
  "content_type" => "example_content_type", # String
  "created_at" => "example_created_at", # String
  "description" => "example_description", # String
  "entity_type" => "example_entity_type", # String
  "external_id" => "example_external_id", # String
  "filename" => "example_filename", # String
  "group_mention_ids" => [], # Array
  "id" => 1, # Integer
  "member_mention_ids" => [], # Array
  "mention_ids" => [], # Array
  "name" => "example_name", # String
  "size" => 1, # Integer
  "story_ids" => [], # Array
  "thumbnail_url" => "example_thumbnail_url", # String
  "updated_at" => "example_updated_at", # String
  "uploader_id" => "example_uploader_id", # String
  "url" => "example_url", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.UploadedFile.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.UploadedFile.load({ "id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.UploadedFile.remove({ "id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.UploadedFile.update({
  "id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UploadedFileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WebhookEntity

```ruby
webhook = client.Webhook
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `secret` | `String` | No |  |
| `webhook_url` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Webhook.create({
  "webhook_url" => "example_webhook_url", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Webhook.load({ "id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Webhook.remove({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkflowEntity

```ruby
workflow = client.Workflow
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_assign_owner` | `Boolean` | Yes | Indicates if an owner is automatically assigned when an unowned story is started. |
| `created_at` | `String` | Yes | The date the Workflow was created. |
| `default_state_id` | `Integer` | Yes | The unique ID of the default state that new Stories are entered into. |
| `description` | `String` | Yes | A description of the workflow. |
| `entity_type` | `String` | Yes | A string description of this resource. |
| `id` | `Integer` | Yes | The unique ID of the Workflow. |
| `name` | `String` | Yes | The name of the workflow. |
| `project_ids` | `Array` | Yes | An array of IDs of projects within the Workflow. |
| `states` | `Array` | Yes | A map of the states in this Workflow. |
| `team_id` | `Integer` | Yes | The ID of the team the workflow belongs to. |
| `updated_at` | `String` | Yes | The date the Workflow was updated. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Workflow.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Workflow.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = ShortcutSDK.new({
  "feature" => {
    "test" => { "active" => true },
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


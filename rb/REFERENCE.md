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
| `archived` | `Boolean` | Yes |  |
| `color` | `String` | Yes |  |
| `created_at` | `String` | Yes |  |
| `entity_type` | `String` | Yes |  |
| `external_id` | `String` | Yes |  |
| `global_id` | `String` | Yes |  |
| `id` | `Integer` | Yes |  |
| `name` | `String` | Yes |  |
| `type` | `String` | Yes |  |
| `updated_at` | `String` | Yes |  |

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
| `after_id` | `String` | No |  |
| `before_id` | `String` | No |  |
| `canonical_name` | `String` | No |  |
| `created_at` | `String` | Yes |  |
| `description` | `String` | No |  |
| `enabled` | `Boolean` | Yes |  |
| `entity_type` | `String` | Yes |  |
| `field_type` | `String` | Yes |  |
| `fixed_position` | `Boolean` | No |  |
| `icon_set_identifier` | `String` | No |  |
| `id` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `position` | `Integer` | Yes |  |
| `story_types` | `Array` | No |  |
| `updated_at` | `String` | Yes |  |
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
| `app_url` | `String` | Yes |  |
| `content` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `title` | `String` | Yes |  |

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
| `author_id` | `String` | No |  |
| `created_at` | `String` | Yes |  |
| `custom_fields` | `Array` | No |  |
| `deadline` | `String` | No |  |
| `description` | `String` | No |  |
| `entity_type` | `String` | No |  |
| `epic_id` | `Integer` | No |  |
| `estimate` | `Integer` | No |  |
| `external_links` | `Array` | No |  |
| `files` | `Array` | No |  |
| `follower_ids` | `Array` | No |  |
| `group_id` | `String` | No |  |
| `id` | `String` | Yes |  |
| `iteration_id` | `Integer` | No |  |
| `label_ids` | `Array` | No |  |
| `labels` | `Array` | No |  |
| `last_used_at` | `String` | Yes |  |
| `linked_files` | `Array` | No |  |
| `name` | `String` | No |  |
| `owner_ids` | `Array` | No |  |
| `project_id` | `Integer` | No |  |
| `story_contents` | `Hash` | Yes |  |
| `story_type` | `String` | No |  |
| `sub_tasks` | `Array` | No |  |
| `tasks` | `Array` | No |  |
| `updated_at` | `String` | Yes |  |
| `workflow_state_id` | `Integer` | No |  |

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
| `after_id` | `Integer` | No |  |
| `app_url` | `String` | Yes |  |
| `archived` | `Boolean` | Yes |  |
| `associated_groups` | `Array` | Yes |  |
| `before_id` | `Integer` | No |  |
| `comments` | `Array` | Yes |  |
| `completed` | `Boolean` | Yes |  |
| `completed_at` | `String` | Yes |  |
| `completed_at_override` | `String` | Yes |  |
| `converted_from_story_id` | `Integer` | No |  |
| `created_at` | `String` | Yes |  |
| `deadline` | `String` | Yes |  |
| `description` | `String` | Yes |  |
| `entity_type` | `String` | Yes |  |
| `epic_state_id` | `Integer` | Yes |  |
| `external_id` | `String` | Yes |  |
| `follower_ids` | `Array` | Yes |  |
| `global_id` | `String` | Yes |  |
| `group_id` | `String` | Yes |  |
| `group_ids` | `Array` | Yes |  |
| `group_mention_ids` | `Array` | Yes |  |
| `health` | `Hash` | Yes |  |
| `id` | `Integer` | Yes |  |
| `label_ids` | `Array` | Yes |  |
| `labels` | `Array` | Yes |  |
| `member_mention_ids` | `Array` | Yes |  |
| `mention_ids` | `Array` | Yes |  |
| `milestone_id` | `Integer` | Yes |  |
| `name` | `String` | Yes |  |
| `objective_ids` | `Array` | Yes |  |
| `owner_ids` | `Array` | Yes |  |
| `planned_start_date` | `String` | Yes |  |
| `position` | `Integer` | Yes |  |
| `productboard_id` | `String` | Yes |  |
| `productboard_name` | `String` | Yes |  |
| `productboard_plugin_id` | `String` | Yes |  |
| `productboard_url` | `String` | Yes |  |
| `project_ids` | `Array` | Yes |  |
| `requested_by_id` | `String` | Yes |  |
| `started` | `Boolean` | Yes |  |
| `started_at` | `String` | Yes |  |
| `started_at_override` | `String` | Yes |  |
| `state` | `String` | Yes |  |
| `stats` | `Hash` | Yes |  |
| `stories_without_projects` | `Integer` | Yes |  |
| `updated_at` | `String` | Yes |  |

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
| `app_url` | `String` | Yes |  |
| `archived` | `Boolean` | Yes |  |
| `associated_groups` | `Array` | Yes |  |
| `completed` | `Boolean` | Yes |  |
| `completed_at` | `String` | Yes |  |
| `completed_at_override` | `String` | Yes |  |
| `created_at` | `String` | Yes |  |
| `deadline` | `String` | Yes |  |
| `description` | `String` | No |  |
| `entity_type` | `String` | Yes |  |
| `epic_state_id` | `Integer` | Yes |  |
| `external_id` | `String` | Yes |  |
| `follower_ids` | `Array` | Yes |  |
| `global_id` | `String` | Yes |  |
| `group_id` | `String` | Yes |  |
| `group_ids` | `Array` | Yes |  |
| `group_mention_ids` | `Array` | Yes |  |
| `id` | `Integer` | Yes |  |
| `label_ids` | `Array` | Yes |  |
| `labels` | `Array` | Yes |  |
| `member_mention_ids` | `Array` | Yes |  |
| `mention_ids` | `Array` | Yes |  |
| `milestone_id` | `Integer` | Yes |  |
| `name` | `String` | Yes |  |
| `objective_ids` | `Array` | Yes |  |
| `owner_ids` | `Array` | Yes |  |
| `planned_start_date` | `String` | Yes |  |
| `position` | `Integer` | Yes |  |
| `productboard_id` | `String` | Yes |  |
| `productboard_name` | `String` | Yes |  |
| `productboard_plugin_id` | `String` | Yes |  |
| `productboard_url` | `String` | Yes |  |
| `project_ids` | `Array` | Yes |  |
| `requested_by_id` | `String` | Yes |  |
| `started` | `Boolean` | Yes |  |
| `started_at` | `String` | Yes |  |
| `started_at_override` | `String` | Yes |  |
| `state` | `String` | Yes |  |
| `stats` | `Hash` | Yes |  |
| `stories_without_projects` | `Integer` | Yes |  |
| `updated_at` | `String` | Yes |  |

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
| `color` | `String` | No |  |
| `created_at` | `String` | Yes |  |
| `description` | `String` | Yes |  |
| `entity_type` | `String` | Yes |  |
| `global_id` | `String` | Yes |  |
| `id` | `Integer` | Yes |  |
| `name` | `String` | Yes |  |
| `position` | `Integer` | Yes |  |
| `type` | `String` | Yes |  |
| `updated_at` | `String` | Yes |  |

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
| `app_url` | `String` | Yes |  |
| `archived` | `Boolean` | Yes |  |
| `color` | `String` | Yes |  |
| `color_key` | `String` | Yes |  |
| `created_at` | `String` | Yes |  |
| `default_workflow_id` | `Integer` | No |  |
| `description` | `String` | Yes |  |
| `display_icon` | `Hash` | Yes |  |
| `display_icon_id` | `String` | No |  |
| `entity_type` | `String` | Yes |  |
| `global_id` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `member_ids` | `Array` | Yes |  |
| `mention_name` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `num_epics_started` | `Integer` | Yes |  |
| `num_stories` | `Integer` | Yes |  |
| `num_stories_backlog` | `Integer` | Yes |  |
| `num_stories_started` | `Integer` | Yes |  |
| `updated_at` | `String` | Yes |  |
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
| `author_id` | `String` | No |  |
| `created_at` | `String` | No |  |
| `entity_type` | `String` | Yes |  |
| `epic_id` | `Integer` | No |  |
| `id` | `String` | Yes |  |
| `objective_id` | `Integer` | No |  |
| `status` | `String` | Yes |  |
| `text` | `String` | No |  |
| `updated_at` | `String` | No |  |

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
| `actions` | `Array` | Yes |  |
| `actor_name` | `String` | No |  |
| `automation_id` | `String` | No |  |
| `changed_at` | `String` | Yes |  |
| `external_id` | `String` | No |  |
| `id` | `String` | Yes |  |
| `member_id` | `String` | No |  |
| `primary_id` | `String` | No |  |
| `references` | `Array` | No |  |
| `version` | `String` | Yes |  |
| `webhook_id` | `String` | No |  |

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
| `app_url` | `String` | Yes |  |
| `associated_groups` | `Array` | Yes |  |
| `created_at` | `String` | Yes |  |
| `description` | `String` | Yes |  |
| `end_date` | `String` | Yes |  |
| `entity_type` | `String` | Yes |  |
| `follower_ids` | `Array` | Yes |  |
| `global_id` | `String` | Yes |  |
| `group_ids` | `Array` | Yes |  |
| `group_mention_ids` | `Array` | Yes |  |
| `id` | `Integer` | Yes |  |
| `label_ids` | `Array` | Yes |  |
| `labels` | `Array` | Yes |  |
| `member_mention_ids` | `Array` | Yes |  |
| `mention_ids` | `Array` | Yes |  |
| `name` | `String` | Yes |  |
| `start_date` | `String` | Yes |  |
| `stats` | `Hash` | Yes |  |
| `status` | `String` | Yes |  |
| `updated_at` | `String` | Yes |  |

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
| `current_observed_value` | `Hash` | Yes |  |
| `current_target_value` | `Hash` | Yes |  |
| `id` | `String` | Yes |  |
| `initial_observed_value` | `Hash` | Yes |  |
| `name` | `String` | Yes |  |
| `objective_id` | `Integer` | Yes |  |
| `observed_value` | `Hash` | No |  |
| `progress` | `Integer` | Yes |  |
| `target_value` | `Hash` | No |  |
| `type` | `String` | Yes |  |

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
| `app_url` | `String` | Yes |  |
| `archived` | `Boolean` | No |  |
| `color` | `String` | No |  |
| `created_at` | `String` | Yes |  |
| `description` | `String` | No |  |
| `entity_type` | `String` | Yes |  |
| `external_id` | `String` | No |  |
| `global_id` | `String` | Yes |  |
| `id` | `Integer` | Yes |  |
| `name` | `String` | Yes |  |
| `num_epics` | `Integer` | Yes |  |
| `num_epics_completed` | `Integer` | Yes |  |
| `num_epics_in_progress` | `Integer` | Yes |  |
| `num_epics_total` | `Integer` | Yes |  |
| `num_epics_unstarted` | `Integer` | Yes |  |
| `num_points_backlog` | `Integer` | Yes |  |
| `num_points_completed` | `Integer` | Yes |  |
| `num_points_in_progress` | `Integer` | Yes |  |
| `num_points_total` | `Integer` | Yes |  |
| `num_points_unstarted` | `Integer` | Yes |  |
| `num_related_documents` | `Integer` | Yes |  |
| `num_stories_backlog` | `Integer` | Yes |  |
| `num_stories_completed` | `Integer` | Yes |  |
| `num_stories_in_progress` | `Integer` | Yes |  |
| `num_stories_total` | `Integer` | Yes |  |
| `num_stories_unestimated` | `Integer` | Yes |  |
| `num_stories_unstarted` | `Integer` | Yes |  |
| `stats` | `Hash` | Yes |  |
| `updated_at` | `String` | Yes |  |

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
| `content_type` | `String` | Yes |  |
| `created_at` | `String` | Yes |  |
| `description` | `String` | Yes |  |
| `entity_type` | `String` | Yes |  |
| `group_mention_ids` | `Array` | Yes |  |
| `id` | `Integer` | Yes |  |
| `member_mention_ids` | `Array` | Yes |  |
| `mention_ids` | `Array` | Yes |  |
| `name` | `String` | Yes |  |
| `size` | `Integer` | Yes |  |
| `story_id` | `Integer` | No |  |
| `story_ids` | `Array` | Yes |  |
| `thumbnail_url` | `String` | Yes |  |
| `type` | `String` | Yes |  |
| `updated_at` | `String` | Yes |  |
| `uploader_id` | `String` | Yes |  |
| `url` | `String` | Yes |  |

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
| `created_at` | `String` | Yes |  |
| `created_without_invite` | `Boolean` | Yes |  |
| `disabled` | `Boolean` | Yes |  |
| `entity_type` | `String` | Yes |  |
| `global_id` | `String` | Yes |  |
| `group_ids` | `Array` | Yes |  |
| `id` | `String` | Yes |  |
| `installation_id` | `String` | No |  |
| `is_owner` | `Boolean` | Yes |  |
| `mention_name` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `organization2` | `Hash` | Yes |  |
| `profile` | `Hash` | Yes |  |
| `replaced_by` | `String` | No |  |
| `role` | `String` | Yes |  |
| `state` | `String` | Yes |  |
| `updated_at` | `String` | Yes |  |
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
| `after_id` | `Integer` | No |  |
| `app_url` | `String` | Yes |  |
| `archived` | `Boolean` | Yes |  |
| `before_id` | `Integer` | No |  |
| `categories` | `Array` | Yes |  |
| `completed` | `Boolean` | Yes |  |
| `completed_at` | `String` | Yes |  |
| `completed_at_override` | `String` | Yes |  |
| `created_at` | `String` | Yes |  |
| `description` | `String` | Yes |  |
| `entity_type` | `String` | Yes |  |
| `global_id` | `String` | Yes |  |
| `id` | `Integer` | Yes |  |
| `key_result_ids` | `Array` | Yes |  |
| `name` | `String` | Yes |  |
| `position` | `Integer` | Yes |  |
| `started` | `Boolean` | Yes |  |
| `started_at` | `String` | Yes |  |
| `started_at_override` | `String` | Yes |  |
| `state` | `String` | Yes |  |
| `stats` | `Hash` | Yes |  |
| `updated_at` | `String` | Yes |  |

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
| `after_id` | `Integer` | No |  |
| `app_url` | `String` | Yes |  |
| `archived` | `Boolean` | Yes |  |
| `before_id` | `Integer` | No |  |
| `categories` | `Array` | Yes |  |
| `completed` | `Boolean` | Yes |  |
| `completed_at` | `String` | Yes |  |
| `completed_at_override` | `String` | Yes |  |
| `created_at` | `String` | Yes |  |
| `description` | `String` | Yes |  |
| `entity_type` | `String` | Yes |  |
| `global_id` | `String` | Yes |  |
| `id` | `Integer` | Yes |  |
| `key_result_ids` | `Array` | Yes |  |
| `name` | `String` | Yes |  |
| `position` | `Integer` | Yes |  |
| `started` | `Boolean` | Yes |  |
| `started_at` | `String` | Yes |  |
| `started_at_override` | `String` | Yes |  |
| `state` | `String` | Yes |  |
| `stats` | `Hash` | Yes |  |
| `updated_at` | `String` | Yes |  |

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
| `abbreviation` | `String` | Yes |  |
| `app_url` | `String` | Yes |  |
| `archived` | `Boolean` | Yes |  |
| `color` | `String` | Yes |  |
| `created_at` | `String` | Yes |  |
| `days_to_thermometer` | `Integer` | Yes |  |
| `description` | `String` | Yes |  |
| `entity_type` | `String` | Yes |  |
| `external_id` | `String` | Yes |  |
| `follower_ids` | `Array` | Yes |  |
| `global_id` | `String` | Yes |  |
| `id` | `Integer` | Yes |  |
| `iteration_length` | `Integer` | Yes |  |
| `name` | `String` | Yes |  |
| `show_thermometer` | `Boolean` | Yes |  |
| `start_time` | `String` | Yes |  |
| `stats` | `Hash` | Yes |  |
| `team_id` | `Integer` | Yes |  |
| `updated_at` | `String` | Yes |  |
| `workflow_id` | `Integer` | Yes |  |

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
| `created_at` | `String` | Yes |  |
| `entity_type` | `String` | Yes |  |
| `external_id` | `String` | Yes |  |
| `full_name` | `String` | Yes |  |
| `id` | `Integer` | Yes |  |
| `name` | `String` | Yes |  |
| `type` | `String` | Yes |  |
| `updated_at` | `String` | Yes |  |
| `url` | `String` | Yes |  |

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
| `epics` | `Hash` | Yes |  |
| `iterations` | `Hash` | Yes |  |
| `milestones` | `Hash` | Yes |  |
| `stories` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Search.load()
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
| `after_id` | `Integer` | No |  |
| `app_url` | `String` | Yes |  |
| `archived` | `Boolean` | Yes |  |
| `before_id` | `Integer` | No |  |
| `blocked` | `Boolean` | Yes |  |
| `blocker` | `Boolean` | Yes |  |
| `branch_ids` | `Array` | No |  |
| `branches` | `Array` | Yes |  |
| `comment_ids` | `Array` | No |  |
| `comments` | `Array` | Yes |  |
| `commit_ids` | `Array` | No |  |
| `commits` | `Array` | Yes |  |
| `completed` | `Boolean` | Yes |  |
| `completed_at` | `String` | Yes |  |
| `completed_at_override` | `String` | Yes |  |
| `created_at` | `String` | Yes |  |
| `custom_fields` | `Array` | No |  |
| `custom_fields_add` | `Array` | No |  |
| `custom_fields_remove` | `Array` | No |  |
| `cycle_time` | `Integer` | No |  |
| `deadline` | `String` | Yes |  |
| `description` | `String` | Yes |  |
| `entity_type` | `String` | Yes |  |
| `epic_id` | `Integer` | Yes |  |
| `estimate` | `Integer` | Yes |  |
| `external_id` | `String` | Yes |  |
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
| `formatted_vcs_branch_name` | `String` | No |  |
| `global_id` | `String` | Yes |  |
| `group_id` | `String` | Yes |  |
| `group_mention_ids` | `Array` | Yes |  |
| `id` | `Integer` | Yes |  |
| `iteration_id` | `Integer` | Yes |  |
| `label_ids` | `Array` | Yes |  |
| `labels` | `Array` | Yes |  |
| `labels_add` | `Array` | No |  |
| `labels_remove` | `Array` | No |  |
| `lead_time` | `Integer` | No |  |
| `linked_file_ids` | `Array` | No |  |
| `linked_file_ids_add` | `Array` | No |  |
| `linked_file_ids_remove` | `Array` | No |  |
| `linked_files` | `Array` | Yes |  |
| `member_mention_ids` | `Array` | Yes |  |
| `mention_ids` | `Array` | Yes |  |
| `move_to` | `String` | No |  |
| `moved_at` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `num_tasks_completed` | `Integer` | No |  |
| `owner_ids` | `Array` | Yes |  |
| `owner_ids_add` | `Array` | No |  |
| `owner_ids_remove` | `Array` | No |  |
| `parent_story_id` | `Integer` | No |  |
| `position` | `Integer` | Yes |  |
| `previous_iteration_ids` | `Array` | Yes |  |
| `project_id` | `Integer` | Yes |  |
| `pull_request_ids` | `Array` | No |  |
| `pull_requests` | `Array` | Yes |  |
| `requested_by_id` | `String` | Yes |  |
| `source_task_id` | `Integer` | No |  |
| `started` | `Boolean` | Yes |  |
| `started_at` | `String` | Yes |  |
| `started_at_override` | `String` | Yes |  |
| `stats` | `Hash` | Yes |  |
| `story_links` | `Array` | Yes |  |
| `story_template_id` | `String` | Yes |  |
| `story_type` | `String` | Yes |  |
| `sub_task_story_ids` | `Array` | No |  |
| `sub_tasks` | `Array` | No |  |
| `synced_item` | `Hash` | Yes |  |
| `task_ids` | `Array` | No |  |
| `tasks` | `Array` | Yes |  |
| `updated_at` | `String` | Yes |  |
| `workflow_id` | `Integer` | Yes |  |
| `workflow_state_id` | `Integer` | Yes |  |

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
| `app_url` | `String` | Yes |  |
| `author_id` | `String` | Yes |  |
| `blocker` | `Boolean` | No |  |
| `created_at` | `String` | Yes |  |
| `deleted` | `Boolean` | Yes |  |
| `entity_type` | `String` | Yes |  |
| `external_id` | `String` | Yes |  |
| `group_mention_ids` | `Array` | Yes |  |
| `id` | `Integer` | Yes |  |
| `linked_to_slack` | `Boolean` | Yes |  |
| `member_mention_ids` | `Array` | Yes |  |
| `mention_ids` | `Array` | Yes |  |
| `parent_id` | `Integer` | No |  |
| `position` | `Integer` | Yes |  |
| `reactions` | `Array` | Yes |  |
| `story_id` | `Integer` | Yes |  |
| `text` | `String` | Yes |  |
| `unblocks_parent` | `Boolean` | No |  |
| `updated_at` | `String` | Yes |  |

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
| `created_at` | `String` | Yes |  |
| `entity_type` | `String` | Yes |  |
| `id` | `Integer` | Yes |  |
| `object_id` | `Integer` | Yes |  |
| `subject_id` | `Integer` | Yes |  |
| `subject_workflow_state_id` | `Integer` | Yes |  |
| `updated_at` | `String` | Yes |  |
| `verb` | `String` | Yes |  |

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
| `emoji` | `String` | Yes |  |

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
| `after_id` | `Integer` | No |  |
| `archived` | `Boolean` | No |  |
| `before_id` | `Integer` | No |  |
| `completed_at_end` | `String` | No |  |
| `completed_at_start` | `String` | No |  |
| `created_at_end` | `String` | No |  |
| `created_at_start` | `String` | No |  |
| `custom_fields_add` | `Array` | No |  |
| `custom_fields_remove` | `Array` | No |  |
| `deadline` | `String` | No |  |
| `deadline_end` | `String` | No |  |
| `deadline_start` | `String` | No |  |
| `epic_id` | `Integer` | No |  |
| `epic_ids` | `Array` | No |  |
| `estimate` | `Integer` | No |  |
| `external_id` | `String` | No |  |
| `external_links` | `Array` | No |  |
| `follower_ids_add` | `Array` | No |  |
| `follower_ids_remove` | `Array` | No |  |
| `group_id` | `String` | No |  |
| `group_ids` | `Array` | No |  |
| `includes_description` | `Boolean` | No |  |
| `iteration_id` | `Integer` | No |  |
| `iteration_ids` | `Array` | No |  |
| `label_ids` | `Array` | No |  |
| `label_name` | `String` | No |  |
| `labels_add` | `Array` | No |  |
| `labels_remove` | `Array` | No |  |
| `move_to` | `String` | No |  |
| `owner_id` | `String` | No |  |
| `owner_ids` | `Array` | No |  |
| `owner_ids_add` | `Array` | No |  |
| `owner_ids_remove` | `Array` | No |  |
| `project_id` | `Integer` | No |  |
| `project_ids` | `Array` | No |  |
| `requested_by_id` | `String` | No |  |
| `stories` | `Array` | Yes |  |
| `story_ids` | `Array` | Yes |  |
| `story_type` | `String` | No |  |
| `updated_at_end` | `String` | No |  |
| `updated_at_start` | `String` | No |  |
| `workflow_state_id` | `Integer` | No |  |
| `workflow_state_types` | `Array` | No |  |

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
| `after_id` | `Integer` | No |  |
| `before_id` | `Integer` | No |  |
| `complete` | `Boolean` | Yes |  |
| `completed_at` | `String` | Yes |  |
| `created_at` | `String` | Yes |  |
| `description` | `String` | Yes |  |
| `entity_type` | `String` | Yes |  |
| `external_id` | `String` | Yes |  |
| `global_id` | `String` | Yes |  |
| `group_mention_ids` | `Array` | Yes |  |
| `id` | `Integer` | Yes |  |
| `member_mention_ids` | `Array` | Yes |  |
| `mention_ids` | `Array` | Yes |  |
| `owner_ids` | `Array` | Yes |  |
| `position` | `Integer` | Yes |  |
| `story_id` | `Integer` | Yes |  |
| `updated_at` | `String` | Yes |  |

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
| `app_url` | `String` | Yes |  |
| `author_id` | `String` | Yes |  |
| `comments` | `Array` | Yes |  |
| `created_at` | `String` | Yes |  |
| `deleted` | `Boolean` | Yes |  |
| `entity_type` | `String` | Yes |  |
| `external_id` | `String` | Yes |  |
| `group_mention_ids` | `Array` | Yes |  |
| `id` | `Integer` | Yes |  |
| `member_mention_ids` | `Array` | Yes |  |
| `mention_ids` | `Array` | Yes |  |
| `text` | `String` | Yes |  |
| `updated_at` | `String` | Yes |  |

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
| `content_type` | `String` | Yes |  |
| `created_at` | `String` | Yes |  |
| `description` | `String` | Yes |  |
| `entity_type` | `String` | Yes |  |
| `external_id` | `String` | Yes |  |
| `filename` | `String` | Yes |  |
| `group_mention_ids` | `Array` | Yes |  |
| `id` | `Integer` | Yes |  |
| `member_mention_ids` | `Array` | Yes |  |
| `mention_ids` | `Array` | Yes |  |
| `name` | `String` | Yes |  |
| `size` | `Integer` | Yes |  |
| `story_ids` | `Array` | Yes |  |
| `thumbnail_url` | `String` | Yes |  |
| `updated_at` | `String` | Yes |  |
| `uploader_id` | `String` | Yes |  |
| `url` | `String` | Yes |  |

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
| `auto_assign_owner` | `Boolean` | Yes |  |
| `created_at` | `String` | Yes |  |
| `default_state_id` | `Integer` | Yes |  |
| `description` | `String` | Yes |  |
| `entity_type` | `String` | Yes |  |
| `id` | `Integer` | Yes |  |
| `name` | `String` | Yes |  |
| `project_ids` | `Array` | Yes |  |
| `states` | `Array` | Yes |  |
| `team_id` | `Integer` | Yes |  |
| `updated_at` | `String` | Yes |  |

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


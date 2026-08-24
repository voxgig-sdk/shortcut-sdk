# Shortcut Golang SDK Reference

Complete API reference for the Shortcut Golang SDK.


## ShortcutSDK

### Constructor

```go
func NewShortcutSDK(options map[string]any) *ShortcutSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *ShortcutSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *ShortcutSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Bulk(data map[string]any) ShortcutEntity`

Create a new `Bulk` entity instance. Pass `nil` for no initial data.

#### `Category(data map[string]any) ShortcutEntity`

Create a new `Category` entity instance. Pass `nil` for no initial data.

#### `Comment(data map[string]any) ShortcutEntity`

Create a new `Comment` entity instance. Pass `nil` for no initial data.

#### `CustomField(data map[string]any) ShortcutEntity`

Create a new `CustomField` entity instance. Pass `nil` for no initial data.

#### `Disable(data map[string]any) ShortcutEntity`

Create a new `Disable` entity instance. Pass `nil` for no initial data.

#### `DocSlim(data map[string]any) ShortcutEntity`

Create a new `DocSlim` entity instance. Pass `nil` for no initial data.

#### `Enable(data map[string]any) ShortcutEntity`

Create a new `Enable` entity instance. Pass `nil` for no initial data.

#### `EntityTemplate(data map[string]any) ShortcutEntity`

Create a new `EntityTemplate` entity instance. Pass `nil` for no initial data.

#### `Epic(data map[string]any) ShortcutEntity`

Create a new `Epic` entity instance. Pass `nil` for no initial data.

#### `EpicPaginatedResult(data map[string]any) ShortcutEntity`

Create a new `EpicPaginatedResult` entity instance. Pass `nil` for no initial data.

#### `EpicUnlinkProductboard(data map[string]any) ShortcutEntity`

Create a new `EpicUnlinkProductboard` entity instance. Pass `nil` for no initial data.

#### `EpicWorkflow(data map[string]any) ShortcutEntity`

Create a new `EpicWorkflow` entity instance. Pass `nil` for no initial data.

#### `Group(data map[string]any) ShortcutEntity`

Create a new `Group` entity instance. Pass `nil` for no initial data.

#### `Health(data map[string]any) ShortcutEntity`

Create a new `Health` entity instance. Pass `nil` for no initial data.

#### `History(data map[string]any) ShortcutEntity`

Create a new `History` entity instance. Pass `nil` for no initial data.

#### `Iteration(data map[string]any) ShortcutEntity`

Create a new `Iteration` entity instance. Pass `nil` for no initial data.

#### `KeyResult(data map[string]any) ShortcutEntity`

Create a new `KeyResult` entity instance. Pass `nil` for no initial data.

#### `Label(data map[string]any) ShortcutEntity`

Create a new `Label` entity instance. Pass `nil` for no initial data.

#### `LinkedFile(data map[string]any) ShortcutEntity`

Create a new `LinkedFile` entity instance. Pass `nil` for no initial data.

#### `Member(data map[string]any) ShortcutEntity`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `Milestone(data map[string]any) ShortcutEntity`

Create a new `Milestone` entity instance. Pass `nil` for no initial data.

#### `Objectif(data map[string]any) ShortcutEntity`

Create a new `Objectif` entity instance. Pass `nil` for no initial data.

#### `Objective(data map[string]any) ShortcutEntity`

Create a new `Objective` entity instance. Pass `nil` for no initial data.

#### `Project(data map[string]any) ShortcutEntity`

Create a new `Project` entity instance. Pass `nil` for no initial data.

#### `Repository(data map[string]any) ShortcutEntity`

Create a new `Repository` entity instance. Pass `nil` for no initial data.

#### `Search(data map[string]any) ShortcutEntity`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `Story(data map[string]any) ShortcutEntity`

Create a new `Story` entity instance. Pass `nil` for no initial data.

#### `StoryComment(data map[string]any) ShortcutEntity`

Create a new `StoryComment` entity instance. Pass `nil` for no initial data.

#### `StoryLink(data map[string]any) ShortcutEntity`

Create a new `StoryLink` entity instance. Pass `nil` for no initial data.

#### `StoryReaction(data map[string]any) ShortcutEntity`

Create a new `StoryReaction` entity instance. Pass `nil` for no initial data.

#### `StorySlim(data map[string]any) ShortcutEntity`

Create a new `StorySlim` entity instance. Pass `nil` for no initial data.

#### `Task(data map[string]any) ShortcutEntity`

Create a new `Task` entity instance. Pass `nil` for no initial data.

#### `ThreadedComment(data map[string]any) ShortcutEntity`

Create a new `ThreadedComment` entity instance. Pass `nil` for no initial data.

#### `UploadedFile(data map[string]any) ShortcutEntity`

Create a new `UploadedFile` entity instance. Pass `nil` for no initial data.

#### `Webhook(data map[string]any) ShortcutEntity`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `Workflow(data map[string]any) ShortcutEntity`

Create a new `Workflow` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## BulkEntity

```go
bulk := client.Bulk(nil)
fmt.Println(bulk.GetName()) // "bulk"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Bulk(nil).Remove(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BulkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CategoryEntity

```go
category := client.Category(nil)
fmt.Println(category.GetName()) // "category"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes |  |
| `color` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `int` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Category(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Category(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Category(nil).Create(map[string]any{
    "archived": true,
    "color": "example_color",
    "created_at": "example_created_at",
    "entity_type": "example_entity_type",
    "external_id": "example_external_id",
    "global_id": "example_global_id",
    "id": 1,
    "name": "example_name",
    "type": "example_type",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Category(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Category(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CategoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CommentEntity

```go
comment := client.Comment(nil)
fmt.Println(comment.GetName()) // "comment"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Comment(nil).Remove(map[string]any{"id": 1, "story_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CommentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomFieldEntity

```go
customField := client.CustomField(nil)
fmt.Println(customField.GetName()) // "custom_field"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `string` | No |  |
| `before_id` | `string` | No |  |
| `canonical_name` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | No |  |
| `enabled` | `bool` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `field_type` | `string` | Yes |  |
| `fixed_position` | `bool` | No |  |
| `icon_set_identifier` | `string` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `position` | `int` | Yes |  |
| `story_types` | `[]any` | No |  |
| `updated_at` | `string` | Yes |  |
| `values` | `[]any` | No |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CustomField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomField(nil).Load(map[string]any{"id": "custom_field_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CustomField(nil).Update(map[string]any{
    "id": "custom_field_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CustomField(nil).Remove(map[string]any{"id": "custom_field_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DisableEntity

```go
disable := client.Disable(nil)
fmt.Println(disable.GetName()) // "disable"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Disable(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DisableEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DocSlimEntity

```go
docSlim := client.DocSlim(nil)
fmt.Println(docSlim.GetName()) // "doc_slim"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes |  |
| `content` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `title` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DocSlim(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DocSlim(nil).Create(map[string]any{
    "app_url": "example_app_url",
    "content": "example_content",
    "id": "example_id",
    "title": "example_title",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DocSlimEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnableEntity

```go
enable := client.Enable(nil)
fmt.Println(enable.GetName()) // "enable"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Enable(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnableEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EntityTemplateEntity

```go
entityTemplate := client.EntityTemplate(nil)
fmt.Println(entityTemplate.GetName()) // "entity_template"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `custom_fields` | `[]any` | No |  |
| `deadline` | `string` | No |  |
| `description` | `string` | No |  |
| `entity_type` | `string` | No |  |
| `epic_id` | `int` | No |  |
| `estimate` | `int` | No |  |
| `external_links` | `[]any` | No |  |
| `files` | `[]any` | No |  |
| `follower_ids` | `[]any` | No |  |
| `group_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `iteration_id` | `int` | No |  |
| `label_ids` | `[]any` | No |  |
| `labels` | `[]any` | No |  |
| `last_used_at` | `string` | Yes |  |
| `linked_files` | `[]any` | No |  |
| `name` | `string` | No |  |
| `owner_ids` | `[]any` | No |  |
| `project_id` | `int` | No |  |
| `story_contents` | `map[string]any` | Yes |  |
| `story_type` | `string` | No |  |
| `sub_tasks` | `[]any` | No |  |
| `tasks` | `[]any` | No |  |
| `updated_at` | `string` | Yes |  |
| `workflow_state_id` | `int` | No |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EntityTemplate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EntityTemplate(nil).Load(map[string]any{"id": "entity_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.EntityTemplate(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "id": "example_id",
    "last_used_at": "example_last_used_at",
    "story_contents": map[string]any{},
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.EntityTemplate(nil).Update(map[string]any{
    "id": "entity_template_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.EntityTemplate(nil).Remove(map[string]any{"id": "entity_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EntityTemplateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EpicEntity

```go
epic := client.Epic(nil)
fmt.Println(epic.GetName()) // "epic"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `int` | No |  |
| `app_url` | `string` | Yes |  |
| `archived` | `bool` | Yes |  |
| `associated_groups` | `[]any` | Yes |  |
| `before_id` | `int` | No |  |
| `comments` | `[]any` | Yes |  |
| `completed` | `bool` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `completed_at_override` | `string` | Yes |  |
| `converted_from_story_id` | `int` | No |  |
| `created_at` | `string` | Yes |  |
| `deadline` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `epic_state_id` | `int` | Yes |  |
| `external_id` | `string` | Yes |  |
| `follower_ids` | `[]any` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes |  |
| `group_ids` | `[]any` | Yes |  |
| `group_mention_ids` | `[]any` | Yes |  |
| `health` | `map[string]any` | Yes |  |
| `id` | `int` | Yes |  |
| `label_ids` | `[]any` | Yes |  |
| `labels` | `[]any` | Yes |  |
| `member_mention_ids` | `[]any` | Yes |  |
| `mention_ids` | `[]any` | Yes |  |
| `milestone_id` | `int` | Yes |  |
| `name` | `string` | Yes |  |
| `objective_ids` | `[]any` | Yes |  |
| `owner_ids` | `[]any` | Yes |  |
| `planned_start_date` | `string` | Yes |  |
| `position` | `int` | Yes |  |
| `productboard_id` | `string` | Yes |  |
| `productboard_name` | `string` | Yes |  |
| `productboard_plugin_id` | `string` | Yes |  |
| `productboard_url` | `string` | Yes |  |
| `project_ids` | `[]any` | Yes |  |
| `requested_by_id` | `string` | Yes |  |
| `started` | `bool` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `stats` | `map[string]any` | Yes |  |
| `stories_without_projects` | `int` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Epic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Epic(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Epic(nil).Create(map[string]any{
    "app_url": "example_app_url",
    "archived": true,
    "associated_groups": []any{},
    "comments": []any{},
    "completed": true,
    "completed_at": "example_completed_at",
    "completed_at_override": "example_completed_at_override",
    "created_at": "example_created_at",
    "deadline": "example_deadline",
    "description": "example_description",
    "entity_type": "example_entity_type",
    "epic_state_id": 1,
    "external_id": "example_external_id",
    "follower_ids": []any{},
    "global_id": "example_global_id",
    "group_id": "example_group_id",
    "group_ids": []any{},
    "group_mention_ids": []any{},
    "health": map[string]any{},
    "id": 1,
    "label_ids": []any{},
    "labels": []any{},
    "member_mention_ids": []any{},
    "mention_ids": []any{},
    "milestone_id": 1,
    "name": "example_name",
    "objective_ids": []any{},
    "owner_ids": []any{},
    "planned_start_date": "example_planned_start_date",
    "position": 1,
    "productboard_id": "example_productboard_id",
    "productboard_name": "example_productboard_name",
    "productboard_plugin_id": "example_productboard_plugin_id",
    "productboard_url": "example_productboard_url",
    "project_ids": []any{},
    "requested_by_id": "example_requested_by_id",
    "started": true,
    "started_at": "example_started_at",
    "started_at_override": "example_started_at_override",
    "state": "example_state",
    "stats": map[string]any{},
    "stories_without_projects": 1,
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Epic(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Epic(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EpicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EpicPaginatedResultEntity

```go
epicPaginatedResult := client.EpicPaginatedResult(nil)
fmt.Println(epicPaginatedResult.GetName()) // "epic_paginated_result"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes |  |
| `archived` | `bool` | Yes |  |
| `associated_groups` | `[]any` | Yes |  |
| `completed` | `bool` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `completed_at_override` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deadline` | `string` | Yes |  |
| `description` | `string` | No |  |
| `entity_type` | `string` | Yes |  |
| `epic_state_id` | `int` | Yes |  |
| `external_id` | `string` | Yes |  |
| `follower_ids` | `[]any` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes |  |
| `group_ids` | `[]any` | Yes |  |
| `group_mention_ids` | `[]any` | Yes |  |
| `id` | `int` | Yes |  |
| `label_ids` | `[]any` | Yes |  |
| `labels` | `[]any` | Yes |  |
| `member_mention_ids` | `[]any` | Yes |  |
| `mention_ids` | `[]any` | Yes |  |
| `milestone_id` | `int` | Yes |  |
| `name` | `string` | Yes |  |
| `objective_ids` | `[]any` | Yes |  |
| `owner_ids` | `[]any` | Yes |  |
| `planned_start_date` | `string` | Yes |  |
| `position` | `int` | Yes |  |
| `productboard_id` | `string` | Yes |  |
| `productboard_name` | `string` | Yes |  |
| `productboard_plugin_id` | `string` | Yes |  |
| `productboard_url` | `string` | Yes |  |
| `project_ids` | `[]any` | Yes |  |
| `requested_by_id` | `string` | Yes |  |
| `started` | `bool` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `stats` | `map[string]any` | Yes |  |
| `stories_without_projects` | `int` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EpicPaginatedResult(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EpicPaginatedResultEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EpicUnlinkProductboardEntity

```go
epicUnlinkProductboard := client.EpicUnlinkProductboard(nil)
fmt.Println(epicUnlinkProductboard.GetName()) // "epic_unlink_productboard"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.EpicUnlinkProductboard(nil).Create(map[string]any{
    "id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EpicUnlinkProductboardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EpicWorkflowEntity

```go
epicWorkflow := client.EpicWorkflow(nil)
fmt.Println(epicWorkflow.GetName()) // "epic_workflow"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `color` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `name` | `string` | Yes |  |
| `position` | `int` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EpicWorkflow(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EpicWorkflowEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GroupEntity

```go
group := client.Group(nil)
fmt.Println(group.GetName()) // "group"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes |  |
| `archived` | `bool` | Yes |  |
| `color` | `string` | Yes |  |
| `color_key` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `default_workflow_id` | `int` | No |  |
| `description` | `string` | Yes |  |
| `display_icon` | `map[string]any` | Yes |  |
| `display_icon_id` | `string` | No |  |
| `entity_type` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `member_ids` | `[]any` | Yes |  |
| `mention_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `num_epics_started` | `int` | Yes |  |
| `num_stories` | `int` | Yes |  |
| `num_stories_backlog` | `int` | Yes |  |
| `num_stories_started` | `int` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workflow_ids` | `[]any` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Group(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Group(nil).Load(map[string]any{"id": "group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Group(nil).Create(map[string]any{
    "app_url": "example_app_url",
    "archived": true,
    "color": "example_color",
    "color_key": "example_color_key",
    "created_at": "example_created_at",
    "description": "example_description",
    "display_icon": map[string]any{},
    "entity_type": "example_entity_type",
    "global_id": "example_global_id",
    "id": "example_id",
    "member_ids": []any{},
    "mention_name": "example_mention_name",
    "name": "example_name",
    "num_epics_started": 1,
    "num_stories": 1,
    "num_stories_backlog": 1,
    "num_stories_started": 1,
    "updated_at": "example_updated_at",
    "workflow_ids": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Group(nil).Update(map[string]any{
    "id": "group_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HealthEntity

```go
health := client.Health(nil)
fmt.Println(health.GetName()) // "health"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `string` | No |  |
| `created_at` | `string` | No |  |
| `entity_type` | `string` | Yes |  |
| `epic_id` | `int` | No |  |
| `id` | `string` | Yes |  |
| `objective_id` | `int` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Health(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Health(nil).Load(map[string]any{"epic_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Health(nil).Create(map[string]any{
    "epic_id": 1,
    "entity_type": "example_entity_type",
    "id": "example_id",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Health(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HealthEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HistoryEntity

```go
history := client.History(nil)
fmt.Println(history.GetName()) // "history"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `[]any` | Yes |  |
| `actor_name` | `string` | No |  |
| `automation_id` | `string` | No |  |
| `changed_at` | `string` | Yes |  |
| `external_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `member_id` | `string` | No |  |
| `primary_id` | `string` | No |  |
| `references` | `[]any` | No |  |
| `version` | `string` | Yes |  |
| `webhook_id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.History(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HistoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IterationEntity

```go
iteration := client.Iteration(nil)
fmt.Println(iteration.GetName()) // "iteration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes |  |
| `associated_groups` | `[]any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `follower_ids` | `[]any` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_ids` | `[]any` | Yes |  |
| `group_mention_ids` | `[]any` | Yes |  |
| `id` | `int` | Yes |  |
| `label_ids` | `[]any` | Yes |  |
| `labels` | `[]any` | Yes |  |
| `member_mention_ids` | `[]any` | Yes |  |
| `mention_ids` | `[]any` | Yes |  |
| `name` | `string` | Yes |  |
| `start_date` | `string` | Yes |  |
| `stats` | `map[string]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Iteration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Iteration(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Iteration(nil).Create(map[string]any{
    "app_url": "example_app_url",
    "associated_groups": []any{},
    "created_at": "example_created_at",
    "description": "example_description",
    "end_date": "example_end_date",
    "entity_type": "example_entity_type",
    "follower_ids": []any{},
    "global_id": "example_global_id",
    "group_ids": []any{},
    "group_mention_ids": []any{},
    "id": 1,
    "label_ids": []any{},
    "labels": []any{},
    "member_mention_ids": []any{},
    "mention_ids": []any{},
    "name": "example_name",
    "start_date": "example_start_date",
    "stats": map[string]any{},
    "status": "example_status",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Iteration(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Iteration(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IterationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## KeyResultEntity

```go
keyResult := client.KeyResult(nil)
fmt.Println(keyResult.GetName()) // "key_result"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_observed_value` | `map[string]any` | Yes |  |
| `current_target_value` | `map[string]any` | Yes |  |
| `id` | `string` | Yes |  |
| `initial_observed_value` | `map[string]any` | Yes |  |
| `name` | `string` | Yes |  |
| `objective_id` | `int` | Yes |  |
| `observed_value` | `map[string]any` | No |  |
| `progress` | `int` | Yes |  |
| `target_value` | `map[string]any` | No |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.KeyResult(nil).Load(map[string]any{"id": "key_result_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.KeyResult(nil).Update(map[string]any{
    "id": "key_result_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `KeyResultEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LabelEntity

```go
label := client.Label(nil)
fmt.Println(label.GetName()) // "label"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes |  |
| `archived` | `bool` | No |  |
| `color` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | No |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | No |  |
| `global_id` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `name` | `string` | Yes |  |
| `num_epics` | `int` | Yes |  |
| `num_epics_completed` | `int` | Yes |  |
| `num_epics_in_progress` | `int` | Yes |  |
| `num_epics_total` | `int` | Yes |  |
| `num_epics_unstarted` | `int` | Yes |  |
| `num_points_backlog` | `int` | Yes |  |
| `num_points_completed` | `int` | Yes |  |
| `num_points_in_progress` | `int` | Yes |  |
| `num_points_total` | `int` | Yes |  |
| `num_points_unstarted` | `int` | Yes |  |
| `num_related_documents` | `int` | Yes |  |
| `num_stories_backlog` | `int` | Yes |  |
| `num_stories_completed` | `int` | Yes |  |
| `num_stories_in_progress` | `int` | Yes |  |
| `num_stories_total` | `int` | Yes |  |
| `num_stories_unestimated` | `int` | Yes |  |
| `num_stories_unstarted` | `int` | Yes |  |
| `stats` | `map[string]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Label(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Label(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Label(nil).Create(map[string]any{
    "app_url": "example_app_url",
    "created_at": "example_created_at",
    "entity_type": "example_entity_type",
    "global_id": "example_global_id",
    "id": 1,
    "name": "example_name",
    "num_epics": 1,
    "num_epics_completed": 1,
    "num_epics_in_progress": 1,
    "num_epics_total": 1,
    "num_epics_unstarted": 1,
    "num_points_backlog": 1,
    "num_points_completed": 1,
    "num_points_in_progress": 1,
    "num_points_total": 1,
    "num_points_unstarted": 1,
    "num_related_documents": 1,
    "num_stories_backlog": 1,
    "num_stories_completed": 1,
    "num_stories_in_progress": 1,
    "num_stories_total": 1,
    "num_stories_unestimated": 1,
    "num_stories_unstarted": 1,
    "stats": map[string]any{},
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Label(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Label(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LabelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LinkedFileEntity

```go
linkedFile := client.LinkedFile(nil)
fmt.Println(linkedFile.GetName()) // "linked_file"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `group_mention_ids` | `[]any` | Yes |  |
| `id` | `int` | Yes |  |
| `member_mention_ids` | `[]any` | Yes |  |
| `mention_ids` | `[]any` | Yes |  |
| `name` | `string` | Yes |  |
| `size` | `int` | Yes |  |
| `story_id` | `int` | No |  |
| `story_ids` | `[]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LinkedFile(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.LinkedFile(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LinkedFile(nil).Create(map[string]any{
    "content_type": "example_content_type",
    "created_at": "example_created_at",
    "description": "example_description",
    "entity_type": "example_entity_type",
    "group_mention_ids": []any{},
    "id": 1,
    "member_mention_ids": []any{},
    "mention_ids": []any{},
    "name": "example_name",
    "size": 1,
    "story_ids": []any{},
    "thumbnail_url": "example_thumbnail_url",
    "type": "example_type",
    "updated_at": "example_updated_at",
    "uploader_id": "example_uploader_id",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.LinkedFile(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.LinkedFile(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LinkedFileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MemberEntity

```go
member := client.Member(nil)
fmt.Println(member.GetName()) // "member"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `created_without_invite` | `bool` | Yes |  |
| `disabled` | `bool` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_ids` | `[]any` | Yes |  |
| `id` | `string` | Yes |  |
| `installation_id` | `string` | No |  |
| `is_owner` | `bool` | Yes |  |
| `mention_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `organization2` | `map[string]any` | Yes |  |
| `profile` | `map[string]any` | Yes |  |
| `replaced_by` | `string` | No |  |
| `role` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workspace2` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Member(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Member(nil).Load(map[string]any{"id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MilestoneEntity

```go
milestone := client.Milestone(nil)
fmt.Println(milestone.GetName()) // "milestone"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `int` | No |  |
| `app_url` | `string` | Yes |  |
| `archived` | `bool` | Yes |  |
| `before_id` | `int` | No |  |
| `categories` | `[]any` | Yes |  |
| `completed` | `bool` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `completed_at_override` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `key_result_ids` | `[]any` | Yes |  |
| `name` | `string` | Yes |  |
| `position` | `int` | Yes |  |
| `started` | `bool` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `stats` | `map[string]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Milestone(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Milestone(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Milestone(nil).Create(map[string]any{
    "app_url": "example_app_url",
    "archived": true,
    "categories": []any{},
    "completed": true,
    "completed_at": "example_completed_at",
    "completed_at_override": "example_completed_at_override",
    "created_at": "example_created_at",
    "description": "example_description",
    "entity_type": "example_entity_type",
    "global_id": "example_global_id",
    "id": 1,
    "key_result_ids": []any{},
    "name": "example_name",
    "position": 1,
    "started": true,
    "started_at": "example_started_at",
    "started_at_override": "example_started_at_override",
    "state": "example_state",
    "stats": map[string]any{},
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Milestone(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Milestone(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MilestoneEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ObjectifEntity

```go
objectif := client.Objectif(nil)
fmt.Println(objectif.GetName()) // "objectif"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Objectif(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ObjectifEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ObjectiveEntity

```go
objective := client.Objective(nil)
fmt.Println(objective.GetName()) // "objective"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `int` | No |  |
| `app_url` | `string` | Yes |  |
| `archived` | `bool` | Yes |  |
| `before_id` | `int` | No |  |
| `categories` | `[]any` | Yes |  |
| `completed` | `bool` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `completed_at_override` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `key_result_ids` | `[]any` | Yes |  |
| `name` | `string` | Yes |  |
| `position` | `int` | Yes |  |
| `started` | `bool` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `stats` | `map[string]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Objective(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Objective(nil).Load(map[string]any{"objective_public_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Objective(nil).Create(map[string]any{
    "app_url": "example_app_url",
    "archived": true,
    "categories": []any{},
    "completed": true,
    "completed_at": "example_completed_at",
    "completed_at_override": "example_completed_at_override",
    "created_at": "example_created_at",
    "description": "example_description",
    "entity_type": "example_entity_type",
    "global_id": "example_global_id",
    "id": 1,
    "key_result_ids": []any{},
    "name": "example_name",
    "position": 1,
    "started": true,
    "started_at": "example_started_at",
    "started_at_override": "example_started_at_override",
    "state": "example_state",
    "stats": map[string]any{},
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Objective(nil).Update(map[string]any{
    "objective_public_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ObjectiveEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectEntity

```go
project := client.Project(nil)
fmt.Println(project.GetName()) // "project"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abbreviation` | `string` | Yes |  |
| `app_url` | `string` | Yes |  |
| `archived` | `bool` | Yes |  |
| `color` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `days_to_thermometer` | `int` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `follower_ids` | `[]any` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `iteration_length` | `int` | Yes |  |
| `name` | `string` | Yes |  |
| `show_thermometer` | `bool` | Yes |  |
| `start_time` | `string` | Yes |  |
| `stats` | `map[string]any` | Yes |  |
| `team_id` | `int` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workflow_id` | `int` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Project(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Project(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Project(nil).Create(map[string]any{
    "abbreviation": "example_abbreviation",
    "app_url": "example_app_url",
    "archived": true,
    "color": "example_color",
    "created_at": "example_created_at",
    "days_to_thermometer": 1,
    "description": "example_description",
    "entity_type": "example_entity_type",
    "external_id": "example_external_id",
    "follower_ids": []any{},
    "global_id": "example_global_id",
    "id": 1,
    "iteration_length": 1,
    "name": "example_name",
    "show_thermometer": true,
    "start_time": "example_start_time",
    "stats": map[string]any{},
    "team_id": 1,
    "updated_at": "example_updated_at",
    "workflow_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Project(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Project(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryEntity

```go
repository := client.Repository(nil)
fmt.Println(repository.GetName()) // "repository"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `name` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Repository(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Repository(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SearchEntity

```go
search := client.Search(nil)
fmt.Println(search.GetName()) // "search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `epics` | `map[string]any` | Yes |  |
| `iterations` | `map[string]any` | Yes |  |
| `milestones` | `map[string]any` | Yes |  |
| `stories` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Search(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StoryEntity

```go
story := client.Story(nil)
fmt.Println(story.GetName()) // "story"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `int` | No |  |
| `app_url` | `string` | Yes |  |
| `archived` | `bool` | Yes |  |
| `before_id` | `int` | No |  |
| `blocked` | `bool` | Yes |  |
| `blocker` | `bool` | Yes |  |
| `branch_ids` | `[]any` | No |  |
| `branches` | `[]any` | Yes |  |
| `comment_ids` | `[]any` | No |  |
| `comments` | `[]any` | Yes |  |
| `commit_ids` | `[]any` | No |  |
| `commits` | `[]any` | Yes |  |
| `completed` | `bool` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `completed_at_override` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `custom_fields` | `[]any` | No |  |
| `custom_fields_add` | `[]any` | No |  |
| `custom_fields_remove` | `[]any` | No |  |
| `cycle_time` | `int` | No |  |
| `deadline` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `epic_id` | `int` | Yes |  |
| `estimate` | `int` | Yes |  |
| `external_id` | `string` | Yes |  |
| `external_links` | `[]any` | Yes |  |
| `external_links_add` | `[]any` | No |  |
| `external_links_remove` | `[]any` | No |  |
| `file_ids` | `[]any` | No |  |
| `file_ids_add` | `[]any` | No |  |
| `file_ids_remove` | `[]any` | No |  |
| `files` | `[]any` | Yes |  |
| `follower_ids` | `[]any` | Yes |  |
| `follower_ids_add` | `[]any` | No |  |
| `follower_ids_remove` | `[]any` | No |  |
| `formatted_vcs_branch_name` | `string` | No |  |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes |  |
| `group_mention_ids` | `[]any` | Yes |  |
| `id` | `int` | Yes |  |
| `iteration_id` | `int` | Yes |  |
| `label_ids` | `[]any` | Yes |  |
| `labels` | `[]any` | Yes |  |
| `labels_add` | `[]any` | No |  |
| `labels_remove` | `[]any` | No |  |
| `lead_time` | `int` | No |  |
| `linked_file_ids` | `[]any` | No |  |
| `linked_file_ids_add` | `[]any` | No |  |
| `linked_file_ids_remove` | `[]any` | No |  |
| `linked_files` | `[]any` | Yes |  |
| `member_mention_ids` | `[]any` | Yes |  |
| `mention_ids` | `[]any` | Yes |  |
| `move_to` | `string` | No |  |
| `moved_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `num_tasks_completed` | `int` | No |  |
| `owner_ids` | `[]any` | Yes |  |
| `owner_ids_add` | `[]any` | No |  |
| `owner_ids_remove` | `[]any` | No |  |
| `parent_story_id` | `int` | No |  |
| `position` | `int` | Yes |  |
| `previous_iteration_ids` | `[]any` | Yes |  |
| `project_id` | `int` | Yes |  |
| `pull_request_ids` | `[]any` | No |  |
| `pull_requests` | `[]any` | Yes |  |
| `requested_by_id` | `string` | Yes |  |
| `source_task_id` | `int` | No |  |
| `started` | `bool` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `stats` | `map[string]any` | Yes |  |
| `story_links` | `[]any` | Yes |  |
| `story_template_id` | `string` | Yes |  |
| `story_type` | `string` | Yes |  |
| `sub_task_story_ids` | `[]any` | No |  |
| `sub_tasks` | `[]any` | No |  |
| `synced_item` | `map[string]any` | Yes |  |
| `task_ids` | `[]any` | No |  |
| `tasks` | `[]any` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workflow_id` | `int` | Yes |  |
| `workflow_state_id` | `int` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Story(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Story(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Story(nil).Create(map[string]any{
    "app_url": "example_app_url",
    "archived": true,
    "blocked": true,
    "blocker": true,
    "branches": []any{},
    "comments": []any{},
    "commits": []any{},
    "completed": true,
    "completed_at": "example_completed_at",
    "completed_at_override": "example_completed_at_override",
    "created_at": "example_created_at",
    "deadline": "example_deadline",
    "description": "example_description",
    "entity_type": "example_entity_type",
    "epic_id": 1,
    "estimate": 1,
    "external_id": "example_external_id",
    "external_links": []any{},
    "files": []any{},
    "follower_ids": []any{},
    "global_id": "example_global_id",
    "group_id": "example_group_id",
    "group_mention_ids": []any{},
    "id": 1,
    "iteration_id": 1,
    "label_ids": []any{},
    "labels": []any{},
    "linked_files": []any{},
    "member_mention_ids": []any{},
    "mention_ids": []any{},
    "moved_at": "example_moved_at",
    "name": "example_name",
    "owner_ids": []any{},
    "position": 1,
    "previous_iteration_ids": []any{},
    "project_id": 1,
    "pull_requests": []any{},
    "requested_by_id": "example_requested_by_id",
    "started": true,
    "started_at": "example_started_at",
    "started_at_override": "example_started_at_override",
    "stats": map[string]any{},
    "story_links": []any{},
    "story_template_id": "example_story_template_id",
    "story_type": "example_story_type",
    "synced_item": map[string]any{},
    "tasks": []any{},
    "updated_at": "example_updated_at",
    "workflow_id": 1,
    "workflow_state_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Story(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Story(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StoryCommentEntity

```go
storyComment := client.StoryComment(nil)
fmt.Println(storyComment.GetName()) // "story_comment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes |  |
| `author_id` | `string` | Yes |  |
| `blocker` | `bool` | No |  |
| `created_at` | `string` | Yes |  |
| `deleted` | `bool` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `group_mention_ids` | `[]any` | Yes |  |
| `id` | `int` | Yes |  |
| `linked_to_slack` | `bool` | Yes |  |
| `member_mention_ids` | `[]any` | Yes |  |
| `mention_ids` | `[]any` | Yes |  |
| `parent_id` | `int` | No |  |
| `position` | `int` | Yes |  |
| `reactions` | `[]any` | Yes |  |
| `story_id` | `int` | Yes |  |
| `text` | `string` | Yes |  |
| `unblocks_parent` | `bool` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.StoryComment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.StoryComment(nil).Load(map[string]any{"id": 1, "story_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.StoryComment(nil).Create(map[string]any{
    "app_url": "example_app_url",
    "author_id": "example_author_id",
    "created_at": "example_created_at",
    "deleted": true,
    "entity_type": "example_entity_type",
    "external_id": "example_external_id",
    "group_mention_ids": []any{},
    "linked_to_slack": true,
    "member_mention_ids": []any{},
    "mention_ids": []any{},
    "position": 1,
    "reactions": []any{},
    "text": "example_text",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.StoryComment(nil).Update(map[string]any{
    "id": 1,
    "story_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StoryCommentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StoryLinkEntity

```go
storyLink := client.StoryLink(nil)
fmt.Println(storyLink.GetName()) // "story_link"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `object_id` | `int` | Yes |  |
| `subject_id` | `int` | Yes |  |
| `subject_workflow_state_id` | `int` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.StoryLink(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.StoryLink(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "entity_type": "example_entity_type",
    "id": 1,
    "object_id": 1,
    "subject_id": 1,
    "subject_workflow_state_id": 1,
    "updated_at": "example_updated_at",
    "verb": "example_verb",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.StoryLink(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.StoryLink(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StoryLinkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StoryReactionEntity

```go
storyReaction := client.StoryReaction(nil)
fmt.Println(storyReaction.GetName()) // "story_reaction"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emoji` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.StoryReaction(nil).Create(map[string]any{
    "comment_id": 1,
    "story_id": 1,
    "emoji": "example_emoji",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.StoryReaction(nil).Remove(map[string]any{"comment_id": 1, "story_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StoryReactionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StorySlimEntity

```go
storySlim := client.StorySlim(nil)
fmt.Println(storySlim.GetName()) // "story_slim"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `int` | No |  |
| `archived` | `bool` | No |  |
| `before_id` | `int` | No |  |
| `completed_at_end` | `string` | No |  |
| `completed_at_start` | `string` | No |  |
| `created_at_end` | `string` | No |  |
| `created_at_start` | `string` | No |  |
| `custom_fields_add` | `[]any` | No |  |
| `custom_fields_remove` | `[]any` | No |  |
| `deadline` | `string` | No |  |
| `deadline_end` | `string` | No |  |
| `deadline_start` | `string` | No |  |
| `epic_id` | `int` | No |  |
| `epic_ids` | `[]any` | No |  |
| `estimate` | `int` | No |  |
| `external_id` | `string` | No |  |
| `external_links` | `[]any` | No |  |
| `follower_ids_add` | `[]any` | No |  |
| `follower_ids_remove` | `[]any` | No |  |
| `group_id` | `string` | No |  |
| `group_ids` | `[]any` | No |  |
| `includes_description` | `bool` | No |  |
| `iteration_id` | `int` | No |  |
| `iteration_ids` | `[]any` | No |  |
| `label_ids` | `[]any` | No |  |
| `label_name` | `string` | No |  |
| `labels_add` | `[]any` | No |  |
| `labels_remove` | `[]any` | No |  |
| `move_to` | `string` | No |  |
| `owner_id` | `string` | No |  |
| `owner_ids` | `[]any` | No |  |
| `owner_ids_add` | `[]any` | No |  |
| `owner_ids_remove` | `[]any` | No |  |
| `project_id` | `int` | No |  |
| `project_ids` | `[]any` | No |  |
| `requested_by_id` | `string` | No |  |
| `stories` | `[]any` | Yes |  |
| `story_ids` | `[]any` | Yes |  |
| `story_type` | `string` | No |  |
| `updated_at_end` | `string` | No |  |
| `updated_at_start` | `string` | No |  |
| `workflow_state_id` | `int` | No |  |
| `workflow_state_types` | `[]any` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.StorySlim(nil).Create(map[string]any{
    "stories": []any{},
    "story_ids": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.StorySlim(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StorySlimEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TaskEntity

```go
task := client.Task(nil)
fmt.Println(task.GetName()) // "task"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `int` | No |  |
| `before_id` | `int` | No |  |
| `complete` | `bool` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_mention_ids` | `[]any` | Yes |  |
| `id` | `int` | Yes |  |
| `member_mention_ids` | `[]any` | Yes |  |
| `mention_ids` | `[]any` | Yes |  |
| `owner_ids` | `[]any` | Yes |  |
| `position` | `int` | Yes |  |
| `story_id` | `int` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Task(nil).Load(map[string]any{"id": 1, "story_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Task(nil).Create(map[string]any{
    "story_id": 1,
    "complete": true,
    "completed_at": "example_completed_at",
    "created_at": "example_created_at",
    "description": "example_description",
    "entity_type": "example_entity_type",
    "external_id": "example_external_id",
    "global_id": "example_global_id",
    "group_mention_ids": []any{},
    "id": 1,
    "member_mention_ids": []any{},
    "mention_ids": []any{},
    "owner_ids": []any{},
    "position": 1,
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Task(nil).Update(map[string]any{
    "id": 1,
    "story_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Task(nil).Remove(map[string]any{"id": 1, "story_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TaskEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ThreadedCommentEntity

```go
threadedComment := client.ThreadedComment(nil)
fmt.Println(threadedComment.GetName()) // "threaded_comment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes |  |
| `author_id` | `string` | Yes |  |
| `comments` | `[]any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deleted` | `bool` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `group_mention_ids` | `[]any` | Yes |  |
| `id` | `int` | Yes |  |
| `member_mention_ids` | `[]any` | Yes |  |
| `mention_ids` | `[]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ThreadedComment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ThreadedComment(nil).Load(map[string]any{"id": 1, "epic_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ThreadedComment(nil).Create(map[string]any{
    "epic_id": 1,
    "app_url": "example_app_url",
    "author_id": "example_author_id",
    "comments": []any{},
    "created_at": "example_created_at",
    "deleted": true,
    "entity_type": "example_entity_type",
    "external_id": "example_external_id",
    "group_mention_ids": []any{},
    "member_mention_ids": []any{},
    "mention_ids": []any{},
    "text": "example_text",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ThreadedComment(nil).Update(map[string]any{
    "id": 1,
    "epic_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ThreadedComment(nil).Remove(map[string]any{"id": 1, "epic_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ThreadedCommentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UploadedFileEntity

```go
uploadedFile := client.UploadedFile(nil)
fmt.Println(uploadedFile.GetName()) // "uploaded_file"
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
| `group_mention_ids` | `[]any` | Yes |  |
| `id` | `int` | Yes |  |
| `member_mention_ids` | `[]any` | Yes |  |
| `mention_ids` | `[]any` | Yes |  |
| `name` | `string` | Yes |  |
| `size` | `int` | Yes |  |
| `story_ids` | `[]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.UploadedFile(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.UploadedFile(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.UploadedFile(nil).Create(map[string]any{
    "content_type": "example_content_type",
    "created_at": "example_created_at",
    "description": "example_description",
    "entity_type": "example_entity_type",
    "external_id": "example_external_id",
    "filename": "example_filename",
    "group_mention_ids": []any{},
    "id": 1,
    "member_mention_ids": []any{},
    "mention_ids": []any{},
    "name": "example_name",
    "size": 1,
    "story_ids": []any{},
    "thumbnail_url": "example_thumbnail_url",
    "updated_at": "example_updated_at",
    "uploader_id": "example_uploader_id",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.UploadedFile(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.UploadedFile(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UploadedFileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookEntity

```go
webhook := client.Webhook(nil)
fmt.Println(webhook.GetName()) // "webhook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `secret` | `string` | No |  |
| `webhook_url` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Webhook(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Webhook(nil).Create(map[string]any{
    "webhook_url": "example_webhook_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Webhook(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkflowEntity

```go
workflow := client.Workflow(nil)
fmt.Println(workflow.GetName()) // "workflow"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_assign_owner` | `bool` | Yes |  |
| `created_at` | `string` | Yes |  |
| `default_state_id` | `int` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `name` | `string` | Yes |  |
| `project_ids` | `[]any` | Yes |  |
| `states` | `[]any` | Yes |  |
| `team_id` | `int` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Workflow(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Workflow(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewShortcutSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```


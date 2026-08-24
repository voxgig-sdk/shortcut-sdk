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
| `archived` | `bool` | Yes | A true/false boolean indicating if the Category has been archived. |
| `color` | `string` | Yes | The hex color to be displayed with the Category (for example, "#ff0000"). |
| `created_at` | `string` | Yes | The time/date that the Category was created. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `global_id` | `string` | Yes | The Global ID of the Category. |
| `id` | `int` | Yes | The unique ID of the Category. |
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
| `after_id` | `string` | No | The ID of the CustomField we want to move this CustomField after. |
| `before_id` | `string` | No | The ID of the CustomField we want to move this CustomField before. |
| `canonical_name` | `string` | No | The canonical name for a Shortcut-defined field. |
| `created_at` | `string` | Yes | The instant when this CustomField was created. |
| `description` | `string` | No | A string description of the CustomField |
| `enabled` | `bool` | Yes | When true, the CustomField can be applied to entities in the Workspace. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `field_type` | `string` | Yes | The type of Custom Field, eg. |
| `fixed_position` | `bool` | No | When true, the CustomFieldEnumValues may not be reordered. |
| `icon_set_identifier` | `string` | No | A string that represents the icon that corresponds to this custom field. |
| `id` | `string` | Yes | The unique public ID for the CustomField. |
| `name` | `string` | Yes | The name of the Custom Field. |
| `position` | `int` | Yes | An integer indicating the position of this Custom Field with respect to the other CustomField |
| `story_types` | `[]any` | No | The types of stories this CustomField is scoped to. |
| `updated_at` | `string` | Yes | The instant when this CustomField was last updated. |
| `values` | `[]any` | No | A collection of legal values for a CustomField. |

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
| `app_url` | `string` | Yes | The Shortcut application url for the Doc. |
| `content` | `string` | Yes | The content for the new document |
| `id` | `string` | Yes | The public id of the Doc |
| `title` | `string` | Yes | The title for the new document |

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
| `author_id` | `string` | No | The id of the user creating this template. |
| `created_at` | `string` | Yes | The time/date when the entity template was created. |
| `custom_fields` | `[]any` | No | An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `string` | No | The due date of the story. |
| `description` | `string` | No | The description of the story. |
| `entity_type` | `string` | No | A string description of this resource. |
| `epic_id` | `int` | No | The ID of the epic the story belongs to. |
| `estimate` | `int` | No | The numeric point estimate of the story. |
| `external_links` | `[]any` | No | An array of external links connected to the story. |
| `files` | `[]any` | No | An array of files attached to the story. |
| `follower_ids` | `[]any` | No | An array of UUIDs for any Members listed as Followers. |
| `group_id` | `string` | No | The ID of the group to which the story is assigned. |
| `id` | `string` | Yes | The unique identifier for the entity template. |
| `iteration_id` | `int` | No | The ID of the iteration the story belongs to. |
| `label_ids` | `[]any` | No | An array of label ids attached to the story. |
| `labels` | `[]any` | No | An array of labels attached to the story. |
| `last_used_at` | `string` | Yes | The last time that someone created an entity using this template. |
| `linked_files` | `[]any` | No | An array of linked files attached to the story. |
| `name` | `string` | No | The name of the story. |
| `owner_ids` | `[]any` | No | An array of UUIDs of the owners of this story. |
| `project_id` | `int` | No | The ID of the project the story belongs to. |
| `story_contents` | `map[string]any` | Yes | A map of story attributes this template populates. |
| `story_type` | `string` | No | The type of story (feature, bug, chore). |
| `sub_tasks` | `[]any` | No | An array of sub-tasks connected to the story |
| `tasks` | `[]any` | No | An array of tasks connected to the story. |
| `updated_at` | `string` | Yes | The time/date when the entity template was last updated. |
| `workflow_state_id` | `int` | No | The ID of the workflow state the story is currently in. |

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
| `after_id` | `int` | No | The ID of the Epic we want to move this Epic after. |
| `app_url` | `string` | Yes | The Shortcut application url for the Epic. |
| `archived` | `bool` | Yes | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `[]any` | Yes | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `before_id` | `int` | No | The ID of the Epic we want to move this Epic before. |
| `comments` | `[]any` | Yes | A nested array of threaded comments. |
| `completed` | `bool` | Yes | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | `string` | Yes | The time/date the Epic was completed. |
| `completed_at_override` | `string` | Yes | A manual override for the time/date the Epic was completed. |
| `converted_from_story_id` | `int` | No | The ID of the Story that was converted to an Epic. |
| `created_at` | `string` | Yes | The time/date the Epic was created. |
| `deadline` | `string` | Yes | The Epic's deadline. |
| `description` | `string` | Yes | The Epic's description. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `epic_state_id` | `int` | Yes | The ID of the Epic State. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `follower_ids` | `[]any` | Yes | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `[]any` | Yes | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `[]any` | Yes | An array of Group IDs that have been mentioned in the Epic description. |
| `health` | `map[string]any` | Yes | The current health status of the Epic. |
| `id` | `int` | Yes | The unique ID of the Epic. |
| `label_ids` | `[]any` | Yes | An array of Label ids attached to the Epic. |
| `labels` | `[]any` | Yes | An array of Labels attached to the Epic. |
| `member_mention_ids` | `[]any` | Yes | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `[]any` | Yes | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `int` | Yes | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `string` | Yes | The name of the Epic. |
| `objective_ids` | `[]any` | Yes | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `[]any` | Yes | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `string` | Yes | The Epic's planned start date. |
| `position` | `int` | Yes | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `string` | Yes | The ID of the associated productboard feature. |
| `productboard_name` | `string` | Yes | The name of the associated productboard feature. |
| `productboard_plugin_id` | `string` | Yes | The ID of the associated productboard integration. |
| `productboard_url` | `string` | Yes | The URL of the associated productboard feature. |
| `project_ids` | `[]any` | Yes | The IDs of Projects related to this Epic. |
| `requested_by_id` | `string` | Yes | The ID of the Member that requested the epic. |
| `started` | `bool` | Yes | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `string` | Yes | The time/date the Epic was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Epic was started. |
| `state` | `string` | Yes | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `map[string]any` | Yes | A group of calculated values for this Epic. |
| `stories_without_projects` | `int` | Yes | The number of stories in this epic which are not associated with a project. |
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
| `app_url` | `string` | Yes | The Shortcut application url for the Epic. |
| `archived` | `bool` | Yes | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `[]any` | Yes | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `completed` | `bool` | Yes | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | `string` | Yes | The time/date the Epic was completed. |
| `completed_at_override` | `string` | Yes | A manual override for the time/date the Epic was completed. |
| `created_at` | `string` | Yes | The time/date the Epic was created. |
| `deadline` | `string` | Yes | The Epic's deadline. |
| `description` | `string` | No | The Epic's description. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `epic_state_id` | `int` | Yes | The ID of the Epic State. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `follower_ids` | `[]any` | Yes | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `[]any` | Yes | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `[]any` | Yes | An array of Group IDs that have been mentioned in the Epic description. |
| `id` | `int` | Yes | The unique ID of the Epic. |
| `label_ids` | `[]any` | Yes | An array of Label ids attached to the Epic. |
| `labels` | `[]any` | Yes | An array of Labels attached to the Epic. |
| `member_mention_ids` | `[]any` | Yes | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `[]any` | Yes | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `int` | Yes | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `string` | Yes | The name of the Epic. |
| `objective_ids` | `[]any` | Yes | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `[]any` | Yes | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `string` | Yes | The Epic's planned start date. |
| `position` | `int` | Yes | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `string` | Yes | The ID of the associated productboard feature. |
| `productboard_name` | `string` | Yes | The name of the associated productboard feature. |
| `productboard_plugin_id` | `string` | Yes | The ID of the associated productboard integration. |
| `productboard_url` | `string` | Yes | The URL of the associated productboard feature. |
| `project_ids` | `[]any` | Yes | The IDs of Projects related to this Epic. |
| `requested_by_id` | `string` | Yes | The ID of the Member that requested the epic. |
| `started` | `bool` | Yes | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `string` | Yes | The time/date the Epic was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Epic was started. |
| `state` | `string` | Yes | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `map[string]any` | Yes | A group of calculated values for this Epic. |
| `stories_without_projects` | `int` | Yes | The number of stories in this epic which are not associated with a project. |
| `updated_at` | `string` | Yes | The time/date the Epic was updated. |

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
| `color` | `string` | No | The hex color for this Epic State. |
| `created_at` | `string` | Yes | The time/date the Epic State was created. |
| `description` | `string` | Yes | The description of what sort of Epics belong in that Epic State. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `global_id` | `string` | Yes |  |
| `id` | `int` | Yes | The unique ID of the Epic State. |
| `name` | `string` | Yes | The Epic State's name. |
| `position` | `int` | Yes | The position that the Epic State is in, starting with 0 at the left. |
| `type` | `string` | Yes | The type of Epic State (Unstarted, Started, or Done) |
| `updated_at` | `string` | Yes | When the Epic State was last updated. |

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
| `app_url` | `string` | Yes | The Shortcut application url for the Group. |
| `archived` | `bool` | Yes | Whether or not the Group is archived. |
| `color` | `string` | Yes | The hex color to be displayed with the Group (for example, "#ff0000"). |
| `color_key` | `string` | Yes | The color key to be displayed with the Group. |
| `created_at` | `string` | Yes | The instant when this group was created. |
| `default_workflow_id` | `int` | No | The ID of the default workflow for stories created in this group. |
| `description` | `string` | Yes | The description of the Group. |
| `display_icon` | `map[string]any` | Yes | Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application. |
| `display_icon_id` | `string` | No | The Icon id for the avatar of this Group. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `global_id` | `string` | Yes |  |
| `id` | `string` | Yes | The id of the Group. |
| `member_ids` | `[]any` | Yes | The Member IDs contain within the Group. |
| `mention_name` | `string` | Yes | The mention name of the Group. |
| `name` | `string` | Yes | The name of the Group. |
| `num_epics_started` | `int` | Yes | The number of epics assigned to the group which are in the started workflow state. |
| `num_stories` | `int` | Yes | The total number of stories assigned to the group. |
| `num_stories_backlog` | `int` | Yes | The number of stories assigned to the group which are in a backlog workflow state. |
| `num_stories_started` | `int` | Yes | The number of stories assigned to the group which are in a started workflow state. |
| `updated_at` | `string` | Yes | The last instant when this group was updated. |
| `workflow_ids` | `[]any` | Yes | The Workflow IDs contained within the Group. |

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
| `author_id` | `string` | No | The ID of the permission who created or updated the Health record. |
| `created_at` | `string` | No | The time that the Health record was created. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `epic_id` | `int` | No | The ID of the Epic associated with this Health record. |
| `id` | `string` | Yes | The unique ID of the Health record. |
| `objective_id` | `int` | No | The ID of the Objective associated with this Health record. |
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
| `actions` | `[]any` | Yes | An array of actions that were performed for the change. |
| `actor_name` | `string` | No | The name of the actor that performed the action, if it can be determined. |
| `automation_id` | `string` | No | The ID of the automation that performed the change. |
| `changed_at` | `string` | Yes | The date when the change occurred. |
| `external_id` | `string` | No | The ID of the webhook that handled the change. |
| `id` | `string` | Yes | The ID representing the change for the story. |
| `member_id` | `string` | No | The ID of the member who performed the change. |
| `primary_id` | `string` | No | The ID of the primary entity that has changed, if applicable. |
| `references` | `[]any` | No | An array of objects affected by the change. |
| `version` | `string` | Yes | The version of the change format. |
| `webhook_id` | `string` | No | The ID of the webhook that handled the change. |

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
| `app_url` | `string` | Yes | The Shortcut application url for the Iteration. |
| `associated_groups` | `[]any` | Yes | An array containing Group IDs and Group-owned story counts for the Iteration's associated groups. |
| `created_at` | `string` | Yes | The instant when this iteration was created. |
| `description` | `string` | Yes | The description of the iteration. |
| `end_date` | `string` | Yes | The date this iteration ends. |
| `entity_type` | `string` | Yes | A string description of this resource |
| `follower_ids` | `[]any` | Yes | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `string` | Yes |  |
| `group_ids` | `[]any` | Yes | An array of UUIDs for any Groups you want to add as Followers. |
| `group_mention_ids` | `[]any` | Yes | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `int` | Yes | The ID of the iteration. |
| `label_ids` | `[]any` | Yes | An array of label ids attached to the iteration. |
| `labels` | `[]any` | Yes | An array of labels attached to the iteration. |
| `member_mention_ids` | `[]any` | Yes | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `[]any` | Yes | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | Yes | The name of the iteration. |
| `start_date` | `string` | Yes | The date this iteration begins. |
| `stats` | `map[string]any` | Yes | A group of calculated values for this Iteration. |
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
| `current_observed_value` | `map[string]any` | Yes | The starting value of the Key Result. |
| `current_target_value` | `map[string]any` | Yes | The starting value of the Key Result. |
| `id` | `string` | Yes | The ID of the Key Result. |
| `initial_observed_value` | `map[string]any` | Yes | The starting value of the Key Result. |
| `name` | `string` | Yes | The name of the Key Result. |
| `objective_id` | `int` | Yes | The Objective to which this Key Result belongs. |
| `observed_value` | `map[string]any` | No | The starting value of the Key Result. |
| `progress` | `int` | Yes | The integer percentage of progress toward completion of the Key Result. |
| `target_value` | `map[string]any` | No | The starting value of the Key Result. |
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
| `app_url` | `string` | Yes | The Shortcut application url for the Label. |
| `archived` | `bool` | No | A true/false boolean indicating if the Label has been archived. |
| `color` | `string` | No | The hex color to be displayed with the Label (for example, "#ff0000"). |
| `created_at` | `string` | Yes | The time/date that the Label was created. |
| `description` | `string` | No | The description of the new Label. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | No | This field can be set to another unique ID. |
| `global_id` | `string` | Yes |  |
| `id` | `int` | Yes | The unique ID of the Label. |
| `name` | `string` | Yes | The name of the new Label. |
| `num_epics` | `int` | Yes | The total number of Epics with this Label. |
| `num_epics_completed` | `int` | Yes | The number of completed Epics associated with this Label. |
| `num_epics_in_progress` | `int` | Yes | The number of in progress epics associated with this label. |
| `num_epics_total` | `int` | Yes | The total number of Epics associated with this Label. |
| `num_epics_unstarted` | `int` | Yes | The number of unstarted epics associated with this label. |
| `num_points_backlog` | `int` | Yes | The total number of backlog points with this Label. |
| `num_points_completed` | `int` | Yes | The total number of completed points with this Label. |
| `num_points_in_progress` | `int` | Yes | The total number of in-progress points with this Label. |
| `num_points_total` | `int` | Yes | The total number of points with this Label. |
| `num_points_unstarted` | `int` | Yes | The total number of unstarted points with this Label. |
| `num_related_documents` | `int` | Yes | The total number of Documents associated this Label. |
| `num_stories_backlog` | `int` | Yes | The total number of stories backlog Stories with this Label. |
| `num_stories_completed` | `int` | Yes | The total number of completed Stories with this Label. |
| `num_stories_in_progress` | `int` | Yes | The total number of in-progress Stories with this Label. |
| `num_stories_total` | `int` | Yes | The total number of Stories with this Label. |
| `num_stories_unestimated` | `int` | Yes | The total number of Stories with no point estimate with this Label. |
| `num_stories_unstarted` | `int` | Yes | The total number of stories unstarted Stories with this Label. |
| `stats` | `map[string]any` | Yes | A group of calculated values for this Label. |
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
| `content_type` | `string` | Yes | The content type of the image (e.g. |
| `created_at` | `string` | Yes | The time/date the LinkedFile was created. |
| `description` | `string` | Yes | The description of the file. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `group_mention_ids` | `[]any` | Yes | The groups that are mentioned in the description of the file. |
| `id` | `int` | Yes | The unique identifier for the file. |
| `member_mention_ids` | `[]any` | Yes | The members that are mentioned in the description of the file. |
| `mention_ids` | `[]any` | Yes | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | Yes | The name of the linked file. |
| `size` | `int` | Yes | The filesize, if the integration provided it. |
| `story_id` | `int` | No | The ID of the linked story. |
| `story_ids` | `[]any` | Yes | The IDs of the stories this file is attached to. |
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
| `created_at` | `string` | Yes | The time/date the Member was created. |
| `created_without_invite` | `bool` | Yes | Whether this member was created as a placeholder entity. |
| `disabled` | `bool` | Yes | True/false boolean indicating whether the Member has been disabled within the Workspace. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `global_id` | `string` | Yes |  |
| `group_ids` | `[]any` | Yes | The Member's group ids |
| `id` | `string` | Yes | The Member's ID in Shortcut. |
| `installation_id` | `string` | No | Only set for agents. |
| `is_owner` | `bool` | Yes |  |
| `mention_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `organization2` | `map[string]any` | Yes |  |
| `profile` | `map[string]any` | Yes | A group of Member profile details. |
| `replaced_by` | `string` | No | The id of the member that replaces this one when merged. |
| `role` | `string` | Yes | The Member's role in the Workspace. |
| `state` | `string` | Yes | The user state, one of partial, full, disabled, or imported. |
| `updated_at` | `string` | Yes | The time/date the Member was last updated. |
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
| `after_id` | `int` | No | The ID of the Milestone we want to move this Milestone after. |
| `app_url` | `string` | Yes | The Shortcut application url for the Milestone. |
| `archived` | `bool` | Yes | A boolean indicating whether the Milestone has been archived or not. |
| `before_id` | `int` | No | The ID of the Milestone we want to move this Milestone before. |
| `categories` | `[]any` | Yes | An array of Categories attached to the Milestone. |
| `completed` | `bool` | Yes | A true/false boolean indicating if the Milestone has been completed. |
| `completed_at` | `string` | Yes | The time/date the Milestone was completed. |
| `completed_at_override` | `string` | Yes | A manual override for the time/date the Milestone was completed. |
| `created_at` | `string` | Yes | The time/date the Milestone was created. |
| `description` | `string` | Yes | The Milestone's description. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `global_id` | `string` | Yes |  |
| `id` | `int` | Yes | The unique ID of the Milestone. |
| `key_result_ids` | `[]any` | Yes | The IDs of the Key Results associated with the Objective. |
| `name` | `string` | Yes | The name of the Milestone. |
| `position` | `int` | Yes | A number representing the position of the Milestone in relation to every other Milestone within the Workspace. |
| `started` | `bool` | Yes | A true/false boolean indicating if the Milestone has been started. |
| `started_at` | `string` | Yes | The time/date the Milestone was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Milestone was started. |
| `state` | `string` | Yes | The workflow state that the Milestone is in. |
| `stats` | `map[string]any` | Yes | A group of calculated values for this Milestone. |
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
| `after_id` | `int` | No | The ID of the Objective we want to move this Objective after. |
| `app_url` | `string` | Yes | The Shortcut application url for the Objective. |
| `archived` | `bool` | Yes | A boolean indicating whether the Objective has been archived or not. |
| `before_id` | `int` | No | The ID of the Objective we want to move this Objective before. |
| `categories` | `[]any` | Yes | An array of Categories attached to the Objective. |
| `completed` | `bool` | Yes | A true/false boolean indicating if the Objectivehas been completed. |
| `completed_at` | `string` | Yes | The time/date the Objective was completed. |
| `completed_at_override` | `string` | Yes | A manual override for the time/date the Objective was completed. |
| `created_at` | `string` | Yes | The time/date the Objective was created. |
| `description` | `string` | Yes | The Objective's description. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `global_id` | `string` | Yes |  |
| `id` | `int` | Yes | The unique ID of the Objective. |
| `key_result_ids` | `[]any` | Yes | The IDs of the Key Results associated with the Objective. |
| `name` | `string` | Yes | The name of the Objective. |
| `position` | `int` | Yes | A number representing the position of the Objective in relation to every other Objective within the Workspace. |
| `started` | `bool` | Yes | A true/false boolean indicating if the Objective has been started. |
| `started_at` | `string` | Yes | The time/date the Objective was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Objective was started. |
| `state` | `string` | Yes | The workflow state that the Objective is in. |
| `stats` | `map[string]any` | Yes | A group of calculated values for this Objective. |
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
| `abbreviation` | `string` | Yes | The Project abbreviation used in Story summaries. |
| `app_url` | `string` | Yes | The Shortcut application url for the Project. |
| `archived` | `bool` | Yes | True/false boolean indicating whether the Project is in an Archived state. |
| `color` | `string` | Yes | The color associated with the Project in the Shortcut member interface. |
| `created_at` | `string` | Yes | The time/date that the Project was created. |
| `days_to_thermometer` | `int` | Yes | The number of days before the thermometer appears in the Story summary. |
| `description` | `string` | Yes | The description of the Project. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `follower_ids` | `[]any` | Yes | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `string` | Yes | The Global ID of the Project. |
| `id` | `int` | Yes | The unique ID of the Project. |
| `iteration_length` | `int` | Yes | The number of weeks per iteration in this Project. |
| `name` | `string` | Yes | The name of the Project |
| `show_thermometer` | `bool` | Yes | Configuration to enable or disable thermometers in the Story summary. |
| `start_time` | `string` | Yes | The date at which the Project was started. |
| `stats` | `map[string]any` | Yes | A group of calculated values for this Project. |
| `team_id` | `int` | Yes | The ID of the team the project belongs to. |
| `updated_at` | `string` | Yes | The time/date that the Project was last updated. |
| `workflow_id` | `int` | Yes | The ID of the workflow the project belongs to. |

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
| `created_at` | `string` | Yes | The time/date the Repository was created. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | The VCS unique identifier for the Repository. |
| `full_name` | `string` | Yes | The full name of the VCS repository. |
| `id` | `int` | Yes | The ID associated to the VCS repository in Shortcut. |
| `name` | `string` | Yes | The shorthand name of the VCS repository. |
| `type` | `string` | Yes | The VCS provider for the Repository. |
| `updated_at` | `string` | Yes | The time/date the Repository was updated. |
| `url` | `string` | Yes | The URL of the Repository. |

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
| `epics` | `map[string]any` | Yes | The results of the Epic search query. |
| `iterations` | `map[string]any` | Yes | The results of the Iteration search query. |
| `milestones` | `map[string]any` | Yes | The results of the Objective search query. |
| `stories` | `map[string]any` | Yes | The results of the Story search query. |

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
| `after_id` | `int` | No | The ID of the story we want to move this story after. |
| `app_url` | `string` | Yes | The Shortcut application url for the Story. |
| `archived` | `bool` | Yes | True if the story has been archived or not. |
| `before_id` | `int` | No | The ID of the story we want to move this story before. |
| `blocked` | `bool` | Yes | A true/false boolean indicating if the Story is currently blocked. |
| `blocker` | `bool` | Yes | A true/false boolean indicating if the Story is currently a blocker of another story. |
| `branch_ids` | `[]any` | No | An array of IDs of Branches attached to the story. |
| `branches` | `[]any` | Yes | An array of Git branches attached to the story. |
| `comment_ids` | `[]any` | No | An array of IDs of Comments attached to the story. |
| `comments` | `[]any` | Yes | An array of comments attached to the story. |
| `commit_ids` | `[]any` | No | An array of IDs of Commits attached to the story. |
| `commits` | `[]any` | Yes | An array of commits attached to the story. |
| `completed` | `bool` | Yes | A true/false boolean indicating if the Story has been completed. |
| `completed_at` | `string` | Yes | The time/date the Story was completed. |
| `completed_at_override` | `string` | Yes | A manual override for the time/date the Story was completed. |
| `created_at` | `string` | Yes | The time/date the Story was created. |
| `custom_fields` | `[]any` | No | An array of CustomField value assertions for the story. |
| `custom_fields_add` | `[]any` | No | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `[]any` | No | A map specifying a CustomField ID. |
| `cycle_time` | `int` | No | The cycle time (in seconds) of this story when complete. |
| `deadline` | `string` | Yes | The due date of the story. |
| `description` | `string` | Yes | The description of the story. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `epic_id` | `int` | Yes | The ID of the epic the story belongs to. |
| `estimate` | `int` | Yes | The numeric point estimate of the story. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `external_links` | `[]any` | Yes | An array of external links (strings) associated with a Story |
| `external_links_add` | `[]any` | No | An array of External Links associated with this story. |
| `external_links_remove` | `[]any` | No | An array of External Links associated with this story. |
| `file_ids` | `[]any` | No | An array of IDs of files attached to the story. |
| `file_ids_add` | `[]any` | No | An array of IDs of files attached to the story in addition to files from the template. |
| `file_ids_remove` | `[]any` | No | An array of IDs of files removed from files from the template. |
| `files` | `[]any` | Yes | An array of files attached to the story. |
| `follower_ids` | `[]any` | Yes | An array of UUIDs for any Members listed as Followers. |
| `follower_ids_add` | `[]any` | No | The UUIDs of the new followers to be added in addition to followers from the template. |
| `follower_ids_remove` | `[]any` | No | The UUIDs of the new followers to be removed from followers from the template. |
| `formatted_vcs_branch_name` | `string` | No | The formatted branch name for this story. |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes | The ID of the group associated with the story. |
| `group_mention_ids` | `[]any` | Yes | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `int` | Yes | The unique ID of the Story. |
| `iteration_id` | `int` | Yes | The ID of the iteration the story belongs to. |
| `label_ids` | `[]any` | Yes | An array of label ids attached to the story. |
| `labels` | `[]any` | Yes | An array of labels attached to the story. |
| `labels_add` | `[]any` | No | An array of labels attached to the story in addition to the labels provided by the template. |
| `labels_remove` | `[]any` | No | An array of labels to remove from the labels provided by the template. |
| `lead_time` | `int` | No | The lead time (in seconds) of this story when complete. |
| `linked_file_ids` | `[]any` | No | An array of IDs of linked files attached to the story. |
| `linked_file_ids_add` | `[]any` | No | An array of IDs of linked files attached to the story in addition to files from the template. |
| `linked_file_ids_remove` | `[]any` | No | An array of IDs of linked files removed from files from the template. |
| `linked_files` | `[]any` | Yes | An array of linked files attached to the story. |
| `member_mention_ids` | `[]any` | Yes | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `[]any` | Yes | `Deprecated:` use `member_mention_ids`. |
| `move_to` | `string` | No | One of "first" or "last". |
| `moved_at` | `string` | Yes | The time/date the Story was last changed workflow-state. |
| `name` | `string` | Yes | The name of the story. |
| `num_tasks_completed` | `int` | No | The number of tasks on the story which are complete. |
| `owner_ids` | `[]any` | Yes | An array of UUIDs of the owners of this story. |
| `owner_ids_add` | `[]any` | No | The UUIDs of the new owners to be added in addition to owners from the template. |
| `owner_ids_remove` | `[]any` | No | The UUIDs of the new owners to be removed from owners from the template. |
| `parent_story_id` | `int` | No | The id of the parent story to associate with this story. |
| `position` | `int` | Yes | A number representing the position of the story in relation to every other story in the current project. |
| `previous_iteration_ids` | `[]any` | Yes | The IDs of the iteration the story belongs to. |
| `project_id` | `int` | Yes | The ID of the project the story belongs to. |
| `pull_request_ids` | `[]any` | No | An array of IDs of Pull/Merge Requests attached to the story. |
| `pull_requests` | `[]any` | Yes | An array of Pull/Merge Requests attached to the story. |
| `requested_by_id` | `string` | Yes | The ID of the Member that requested the story. |
| `source_task_id` | `int` | No | Given this story was converted from a task in another story, this is the original task ID that was converted to this story. |
| `started` | `bool` | Yes | A true/false boolean indicating if the Story has been started. |
| `started_at` | `string` | Yes | The time/date the Story was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Story was started. |
| `stats` | `map[string]any` | Yes | The stats object for Stories |
| `story_links` | `[]any` | Yes | An array of story links attached to the Story. |
| `story_template_id` | `string` | Yes | The ID of the story template used to create this story, or null if not created using a template. |
| `story_type` | `string` | Yes | The type of story (feature, bug, chore). |
| `sub_task_story_ids` | `[]any` | No |  |
| `sub_tasks` | `[]any` | No | A list of either params to create a new sub-task or link an existing story as a sub-task |
| `synced_item` | `map[string]any` | Yes | The synced item for the story. |
| `task_ids` | `[]any` | No | An array of IDs of Tasks attached to the story. |
| `tasks` | `[]any` | Yes | An array of tasks connected to the story. |
| `updated_at` | `string` | Yes | The time/date the Story was updated. |
| `workflow_id` | `int` | Yes | The ID of the workflow the story belongs to. |
| `workflow_state_id` | `int` | Yes | The ID of the workflow state the story is currently in. |

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
| `app_url` | `string` | Yes | The Shortcut application url for the Comment. |
| `author_id` | `string` | Yes | The unique ID of the Member who is the Comment's author. |
| `blocker` | `bool` | No | Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment. |
| `created_at` | `string` | Yes | The time/date when the Comment was created. |
| `deleted` | `bool` | Yes | True/false boolean indicating whether the Comment has been deleted. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `group_mention_ids` | `[]any` | Yes | The unique IDs of the Group who are mentioned in the Comment. |
| `id` | `int` | Yes | The unique ID of the Comment. |
| `linked_to_slack` | `bool` | Yes | Whether the Comment is currently the root of a thread that is linked to Slack. |
| `member_mention_ids` | `[]any` | Yes | The unique IDs of the Member who are mentioned in the Comment. |
| `mention_ids` | `[]any` | Yes | `Deprecated:` use `member_mention_ids`. |
| `parent_id` | `int` | No | The ID of the parent Comment this Comment is threaded under. |
| `position` | `int` | Yes | The Comments numerical position in the list from oldest to newest. |
| `reactions` | `[]any` | Yes | A set of Reactions to this Comment. |
| `story_id` | `int` | Yes | The ID of the Story on which the Comment appears. |
| `text` | `string` | Yes | The text of the Comment. |
| `unblocks_parent` | `bool` | No | Marks the comment as an unblocker to its blocker parent. |
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
    "id": 1,
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
    "story_id": 1,
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
| `created_at` | `string` | Yes | The time/date when the Story Link was created. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `id` | `int` | Yes | The unique identifier of the Story Link. |
| `object_id` | `int` | Yes | The ID of the object Story. |
| `subject_id` | `int` | Yes | The ID of the subject Story. |
| `subject_workflow_state_id` | `int` | Yes | The workflow state of the "subject" story. |
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
| `emoji` | `string` | Yes | The emoji short-code to add / remove. |

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
| `after_id` | `int` | No | The ID of the story that the stories are to be moved below. |
| `archived` | `bool` | No | A true/false boolean indicating whether the Story is in archived state. |
| `before_id` | `int` | No | The ID of the story that the stories are to be moved before. |
| `completed_at_end` | `string` | No | Stories should have been completed on or before this date. |
| `completed_at_start` | `string` | No | Stories should have been completed on or after this date. |
| `created_at_end` | `string` | No | Stories should have been created on or before this date. |
| `created_at_start` | `string` | No | Stories should have been created on or after this date. |
| `custom_fields_add` | `[]any` | No | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `[]any` | No | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `string` | No | The due date of the story. |
| `deadline_end` | `string` | No | Stories should have a deadline on or before this date. |
| `deadline_start` | `string` | No | Stories should have a deadline on or after this date. |
| `epic_id` | `int` | No | The Epic IDs that may be associated with the Stories. |
| `epic_ids` | `[]any` | No | The Epic IDs that may be associated with the Stories. |
| `estimate` | `int` | No | The number of estimate points associate with the Stories. |
| `external_id` | `string` | No | An ID or URL that references an external resource. |
| `external_links` | `[]any` | No | An array of External Links associated with this story. |
| `follower_ids_add` | `[]any` | No | The UUIDs of the new followers to be added. |
| `follower_ids_remove` | `[]any` | No | The UUIDs of the followers to be removed. |
| `group_id` | `string` | No | The Group ID that is associated with the Stories |
| `group_ids` | `[]any` | No | The Group IDs that are associated with the Stories |
| `includes_description` | `bool` | No | Whether to include the story description in the response. |
| `iteration_id` | `int` | No | The Iteration ID that may be associated with the Stories. |
| `iteration_ids` | `[]any` | No | The Iteration IDs that may be associated with the Stories. |
| `label_ids` | `[]any` | No | The Label IDs that may be associated with the Stories. |
| `label_name` | `string` | No | The name of any associated Labels. |
| `labels_add` | `[]any` | No | An array of labels to be added. |
| `labels_remove` | `[]any` | No | An array of labels to be removed. |
| `move_to` | `string` | No | One of "first" or "last". |
| `owner_id` | `string` | No | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids` | `[]any` | No | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids_add` | `[]any` | No | The UUIDs of the new owners to be added. |
| `owner_ids_remove` | `[]any` | No | The UUIDs of the owners to be removed. |
| `project_id` | `int` | No | The IDs for the Projects the Stories may be assigned to. |
| `project_ids` | `[]any` | No | The IDs for the Projects the Stories may be assigned to. |
| `requested_by_id` | `string` | No | The UUID of any Users who may have requested the Stories. |
| `stories` | `[]any` | Yes | An array of stories to be created. |
| `story_ids` | `[]any` | Yes | The Ids of the Stories you wish to update. |
| `story_type` | `string` | No | The type of Stories that you want returned. |
| `updated_at_end` | `string` | No | Stories should have been updated on or before this date. |
| `updated_at_start` | `string` | No | Stories should have been updated on or after this date. |
| `workflow_state_id` | `int` | No | The unique IDs of the specific Workflow States that the Stories should be in. |
| `workflow_state_types` | `[]any` | No | The type of Workflow State the Stories may be in. |

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
| `after_id` | `int` | No | Move task after this task ID. |
| `before_id` | `int` | No | Move task before this task ID. |
| `complete` | `bool` | Yes | True/false boolean indicating whether the Task has been completed. |
| `completed_at` | `string` | Yes | The time/date the Task was completed. |
| `created_at` | `string` | Yes | The time/date the Task was created. |
| `description` | `string` | Yes | Full text of the Task. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `global_id` | `string` | Yes |  |
| `group_mention_ids` | `[]any` | Yes | An array of UUIDs of Groups mentioned in this Task. |
| `id` | `int` | Yes | The unique ID of the Task. |
| `member_mention_ids` | `[]any` | Yes | An array of UUIDs of Members mentioned in this Task. |
| `mention_ids` | `[]any` | Yes | `Deprecated:` use `member_mention_ids`. |
| `owner_ids` | `[]any` | Yes | An array of UUIDs of the Owners of this Task. |
| `position` | `int` | Yes | The number corresponding to the Task's position within a list of Tasks on a Story. |
| `story_id` | `int` | Yes | The unique identifier of the parent Story. |
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
| `app_url` | `string` | Yes | The Shortcut application url for the Comment. |
| `author_id` | `string` | Yes | The unique ID of the Member that authored the Comment. |
| `comments` | `[]any` | Yes | A nested array of threaded comments. |
| `created_at` | `string` | Yes | The time/date the Comment was created. |
| `deleted` | `bool` | Yes | True/false boolean indicating whether the Comment is deleted. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `group_mention_ids` | `[]any` | Yes | An array of Group IDs that have been mentioned in this Comment. |
| `id` | `int` | Yes | The unique ID of the Comment. |
| `member_mention_ids` | `[]any` | Yes | An array of Member IDs that have been mentioned in this Comment. |
| `mention_ids` | `[]any` | Yes | `Deprecated:` use `member_mention_ids`. |
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
| `content_type` | `string` | Yes | Free form string corresponding to a text or image file. |
| `created_at` | `string` | Yes | The time/date that the file was created. |
| `description` | `string` | Yes | The description of the file. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `filename` | `string` | Yes | The name assigned to the file in Shortcut upon upload. |
| `group_mention_ids` | `[]any` | Yes | The unique IDs of the Groups who are mentioned in the file description. |
| `id` | `int` | Yes | The unique ID for the file. |
| `member_mention_ids` | `[]any` | Yes | The unique IDs of the Members who are mentioned in the file description. |
| `mention_ids` | `[]any` | Yes | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | Yes | The optional User-specified name of the file. |
| `size` | `int` | Yes | The size of the file. |
| `story_ids` | `[]any` | Yes | The unique IDs of the Stories associated with this file. |
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
| `auto_assign_owner` | `bool` | Yes | Indicates if an owner is automatically assigned when an unowned story is started. |
| `created_at` | `string` | Yes | The date the Workflow was created. |
| `default_state_id` | `int` | Yes | The unique ID of the default state that new Stories are entered into. |
| `description` | `string` | Yes | A description of the workflow. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `id` | `int` | Yes | The unique ID of the Workflow. |
| `name` | `string` | Yes | The name of the workflow. |
| `project_ids` | `[]any` | Yes | An array of IDs of projects within the Workflow. |
| `states` | `[]any` | Yes | A map of the states in this Workflow. |
| `team_id` | `int` | Yes | The ID of the team the workflow belongs to. |
| `updated_at` | `string` | Yes | The date the Workflow was updated. |

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


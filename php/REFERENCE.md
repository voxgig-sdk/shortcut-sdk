# Shortcut PHP SDK Reference

Complete API reference for the Shortcut PHP SDK.


## ShortcutSDK

### Constructor

```php
require_once __DIR__ . '/shortcut_sdk.php';

$client = new ShortcutSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ShortcutSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = ShortcutSDK::test();
```


### Instance Methods

#### `Bulk($data = null)`

Create a new `BulkEntity` instance. Pass `null` for no initial data.

#### `Category($data = null)`

Create a new `CategoryEntity` instance. Pass `null` for no initial data.

#### `Comment($data = null)`

Create a new `CommentEntity` instance. Pass `null` for no initial data.

#### `CustomField($data = null)`

Create a new `CustomFieldEntity` instance. Pass `null` for no initial data.

#### `Disable($data = null)`

Create a new `DisableEntity` instance. Pass `null` for no initial data.

#### `DocSlim($data = null)`

Create a new `DocSlimEntity` instance. Pass `null` for no initial data.

#### `Enable($data = null)`

Create a new `EnableEntity` instance. Pass `null` for no initial data.

#### `EntityTemplate($data = null)`

Create a new `EntityTemplateEntity` instance. Pass `null` for no initial data.

#### `Epic($data = null)`

Create a new `EpicEntity` instance. Pass `null` for no initial data.

#### `EpicPaginatedResult($data = null)`

Create a new `EpicPaginatedResultEntity` instance. Pass `null` for no initial data.

#### `EpicUnlinkProductboard($data = null)`

Create a new `EpicUnlinkProductboardEntity` instance. Pass `null` for no initial data.

#### `EpicWorkflow($data = null)`

Create a new `EpicWorkflowEntity` instance. Pass `null` for no initial data.

#### `Group($data = null)`

Create a new `GroupEntity` instance. Pass `null` for no initial data.

#### `Health($data = null)`

Create a new `HealthEntity` instance. Pass `null` for no initial data.

#### `History($data = null)`

Create a new `HistoryEntity` instance. Pass `null` for no initial data.

#### `Iteration($data = null)`

Create a new `IterationEntity` instance. Pass `null` for no initial data.

#### `KeyResult($data = null)`

Create a new `KeyResultEntity` instance. Pass `null` for no initial data.

#### `Label($data = null)`

Create a new `LabelEntity` instance. Pass `null` for no initial data.

#### `LinkedFile($data = null)`

Create a new `LinkedFileEntity` instance. Pass `null` for no initial data.

#### `Member($data = null)`

Create a new `MemberEntity` instance. Pass `null` for no initial data.

#### `Milestone($data = null)`

Create a new `MilestoneEntity` instance. Pass `null` for no initial data.

#### `Objectif($data = null)`

Create a new `ObjectifEntity` instance. Pass `null` for no initial data.

#### `Objective($data = null)`

Create a new `ObjectiveEntity` instance. Pass `null` for no initial data.

#### `Project($data = null)`

Create a new `ProjectEntity` instance. Pass `null` for no initial data.

#### `Repository($data = null)`

Create a new `RepositoryEntity` instance. Pass `null` for no initial data.

#### `Search($data = null)`

Create a new `SearchEntity` instance. Pass `null` for no initial data.

#### `Story($data = null)`

Create a new `StoryEntity` instance. Pass `null` for no initial data.

#### `StoryComment($data = null)`

Create a new `StoryCommentEntity` instance. Pass `null` for no initial data.

#### `StoryLink($data = null)`

Create a new `StoryLinkEntity` instance. Pass `null` for no initial data.

#### `StoryReaction($data = null)`

Create a new `StoryReactionEntity` instance. Pass `null` for no initial data.

#### `StorySlim($data = null)`

Create a new `StorySlimEntity` instance. Pass `null` for no initial data.

#### `Task($data = null)`

Create a new `TaskEntity` instance. Pass `null` for no initial data.

#### `ThreadedComment($data = null)`

Create a new `ThreadedCommentEntity` instance. Pass `null` for no initial data.

#### `UploadedFile($data = null)`

Create a new `UploadedFileEntity` instance. Pass `null` for no initial data.

#### `Webhook($data = null)`

Create a new `WebhookEntity` instance. Pass `null` for no initial data.

#### `Workflow($data = null)`

Create a new `WorkflowEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): ShortcutUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## BulkEntity

```php
$bulk = $client->Bulk();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Bulk()->remove();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BulkEntity`

Create a new `BulkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CategoryEntity

```php
$category = $client->Category();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Category()->create([
  "archived" => null, // bool
  "color" => null, // string
  "created_at" => null, // string
  "entity_type" => null, // string
  "external_id" => null, // string
  "global_id" => null, // string
  "id" => null, // int
  "name" => null, // string
  "type" => null, // string
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Category()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Category()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Category()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Category()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CategoryEntity`

Create a new `CategoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CommentEntity

```php
$comment = $client->Comment();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Comment()->remove(["id" => 1, "story_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CommentEntity`

Create a new `CommentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomFieldEntity

```php
$custom_field = $client->CustomField();
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
| `story_types` | `array` | No | The types of stories this CustomField is scoped to. |
| `updated_at` | `string` | Yes | The instant when this CustomField was last updated. |
| `values` | `array` | No | A collection of legal values for a CustomField. |

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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CustomField()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomField()->load(["id" => "custom_field_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CustomField()->remove(["id" => "custom_field_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CustomField()->update([
  "id" => "custom_field_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomFieldEntity`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DisableEntity

```php
$disable = $client->Disable();
```

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Disable()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DisableEntity`

Create a new `DisableEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DocSlimEntity

```php
$doc_slim = $client->DocSlim();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes | The Shortcut application url for the Doc. |
| `content` | `string` | Yes | The content for the new document |
| `id` | `string` | Yes | The public id of the Doc |
| `title` | `string` | Yes | The title for the new document |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DocSlim()->create([
  "app_url" => null, // string
  "content" => null, // string
  "id" => null, // string
  "title" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DocSlim()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DocSlimEntity`

Create a new `DocSlimEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnableEntity

```php
$enable = $client->Enable();
```

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Enable()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnableEntity`

Create a new `EnableEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EntityTemplateEntity

```php
$entity_template = $client->EntityTemplate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `string` | No | The id of the user creating this template. |
| `created_at` | `string` | Yes | The time/date when the entity template was created. |
| `custom_fields` | `array` | No | An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `string` | No | The due date of the story. |
| `description` | `string` | No | The description of the story. |
| `entity_type` | `string` | No | A string description of this resource. |
| `epic_id` | `int` | No | The ID of the epic the story belongs to. |
| `estimate` | `int` | No | The numeric point estimate of the story. |
| `external_links` | `array` | No | An array of external links connected to the story. |
| `files` | `array` | No | An array of files attached to the story. |
| `follower_ids` | `array` | No | An array of UUIDs for any Members listed as Followers. |
| `group_id` | `string` | No | The ID of the group to which the story is assigned. |
| `id` | `string` | Yes | The unique identifier for the entity template. |
| `iteration_id` | `int` | No | The ID of the iteration the story belongs to. |
| `label_ids` | `array` | No | An array of label ids attached to the story. |
| `labels` | `array` | No | An array of labels attached to the story. |
| `last_used_at` | `string` | Yes | The last time that someone created an entity using this template. |
| `linked_files` | `array` | No | An array of linked files attached to the story. |
| `name` | `string` | No | The name of the story. |
| `owner_ids` | `array` | No | An array of UUIDs of the owners of this story. |
| `project_id` | `int` | No | The ID of the project the story belongs to. |
| `story_contents` | `array` | Yes | A map of story attributes this template populates. |
| `story_type` | `string` | No | The type of story (feature, bug, chore). |
| `sub_tasks` | `array` | No | An array of sub-tasks connected to the story |
| `tasks` | `array` | No | An array of tasks connected to the story. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EntityTemplate()->create([
  "created_at" => null, // string
  "id" => null, // string
  "last_used_at" => null, // string
  "story_contents" => null, // array
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EntityTemplate()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EntityTemplate()->load(["id" => "entity_template_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->EntityTemplate()->remove(["id" => "entity_template_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->EntityTemplate()->update([
  "id" => "entity_template_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EntityTemplateEntity`

Create a new `EntityTemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EpicEntity

```php
$epic = $client->Epic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `int` | No | The ID of the Epic we want to move this Epic after. |
| `app_url` | `string` | Yes | The Shortcut application url for the Epic. |
| `archived` | `bool` | Yes | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `array` | Yes | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `before_id` | `int` | No | The ID of the Epic we want to move this Epic before. |
| `comments` | `array` | Yes | A nested array of threaded comments. |
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
| `follower_ids` | `array` | Yes | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `array` | Yes | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `array` | Yes | An array of Group IDs that have been mentioned in the Epic description. |
| `health` | `array` | Yes | The current health status of the Epic. |
| `id` | `int` | Yes | The unique ID of the Epic. |
| `label_ids` | `array` | Yes | An array of Label ids attached to the Epic. |
| `labels` | `array` | Yes | An array of Labels attached to the Epic. |
| `member_mention_ids` | `array` | Yes | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `array` | Yes | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `int` | Yes | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `string` | Yes | The name of the Epic. |
| `objective_ids` | `array` | Yes | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `array` | Yes | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `string` | Yes | The Epic's planned start date. |
| `position` | `int` | Yes | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `string` | Yes | The ID of the associated productboard feature. |
| `productboard_name` | `string` | Yes | The name of the associated productboard feature. |
| `productboard_plugin_id` | `string` | Yes | The ID of the associated productboard integration. |
| `productboard_url` | `string` | Yes | The URL of the associated productboard feature. |
| `project_ids` | `array` | Yes | The IDs of Projects related to this Epic. |
| `requested_by_id` | `string` | Yes | The ID of the Member that requested the epic. |
| `started` | `bool` | Yes | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `string` | Yes | The time/date the Epic was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Epic was started. |
| `state` | `string` | Yes | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `array` | Yes | A group of calculated values for this Epic. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Epic()->create([
  "app_url" => null, // string
  "archived" => null, // bool
  "associated_groups" => null, // array
  "comments" => null, // array
  "completed" => null, // bool
  "completed_at" => null, // string
  "completed_at_override" => null, // string
  "created_at" => null, // string
  "deadline" => null, // string
  "description" => null, // string
  "entity_type" => null, // string
  "epic_state_id" => null, // int
  "external_id" => null, // string
  "follower_ids" => null, // array
  "global_id" => null, // string
  "group_id" => null, // string
  "group_ids" => null, // array
  "group_mention_ids" => null, // array
  "health" => null, // array
  "id" => null, // int
  "label_ids" => null, // array
  "labels" => null, // array
  "member_mention_ids" => null, // array
  "mention_ids" => null, // array
  "milestone_id" => null, // int
  "name" => null, // string
  "objective_ids" => null, // array
  "owner_ids" => null, // array
  "planned_start_date" => null, // string
  "position" => null, // int
  "productboard_id" => null, // string
  "productboard_name" => null, // string
  "productboard_plugin_id" => null, // string
  "productboard_url" => null, // string
  "project_ids" => null, // array
  "requested_by_id" => null, // string
  "started" => null, // bool
  "started_at" => null, // string
  "started_at_override" => null, // string
  "state" => null, // string
  "stats" => null, // array
  "stories_without_projects" => null, // int
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Epic()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Epic()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Epic()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Epic()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EpicEntity`

Create a new `EpicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EpicPaginatedResultEntity

```php
$epic_paginated_result = $client->EpicPaginatedResult();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes | The Shortcut application url for the Epic. |
| `archived` | `bool` | Yes | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `array` | Yes | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `completed` | `bool` | Yes | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | `string` | Yes | The time/date the Epic was completed. |
| `completed_at_override` | `string` | Yes | A manual override for the time/date the Epic was completed. |
| `created_at` | `string` | Yes | The time/date the Epic was created. |
| `deadline` | `string` | Yes | The Epic's deadline. |
| `description` | `string` | No | The Epic's description. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `epic_state_id` | `int` | Yes | The ID of the Epic State. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `follower_ids` | `array` | Yes | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `array` | Yes | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `array` | Yes | An array of Group IDs that have been mentioned in the Epic description. |
| `id` | `int` | Yes | The unique ID of the Epic. |
| `label_ids` | `array` | Yes | An array of Label ids attached to the Epic. |
| `labels` | `array` | Yes | An array of Labels attached to the Epic. |
| `member_mention_ids` | `array` | Yes | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `array` | Yes | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `int` | Yes | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `string` | Yes | The name of the Epic. |
| `objective_ids` | `array` | Yes | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `array` | Yes | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `string` | Yes | The Epic's planned start date. |
| `position` | `int` | Yes | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `string` | Yes | The ID of the associated productboard feature. |
| `productboard_name` | `string` | Yes | The name of the associated productboard feature. |
| `productboard_plugin_id` | `string` | Yes | The ID of the associated productboard integration. |
| `productboard_url` | `string` | Yes | The URL of the associated productboard feature. |
| `project_ids` | `array` | Yes | The IDs of Projects related to this Epic. |
| `requested_by_id` | `string` | Yes | The ID of the Member that requested the epic. |
| `started` | `bool` | Yes | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `string` | Yes | The time/date the Epic was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Epic was started. |
| `state` | `string` | Yes | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `array` | Yes | A group of calculated values for this Epic. |
| `stories_without_projects` | `int` | Yes | The number of stories in this epic which are not associated with a project. |
| `updated_at` | `string` | Yes | The time/date the Epic was updated. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EpicPaginatedResult()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EpicPaginatedResultEntity`

Create a new `EpicPaginatedResultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EpicUnlinkProductboardEntity

```php
$epic_unlink_productboard = $client->EpicUnlinkProductboard();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EpicUnlinkProductboard()->create([
  "id" => null, // int
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EpicUnlinkProductboardEntity`

Create a new `EpicUnlinkProductboardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EpicWorkflowEntity

```php
$epic_workflow = $client->EpicWorkflow();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EpicWorkflow()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EpicWorkflowEntity`

Create a new `EpicWorkflowEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GroupEntity

```php
$group = $client->Group();
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
| `display_icon` | `array` | Yes | Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application. |
| `display_icon_id` | `string` | No | The Icon id for the avatar of this Group. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `global_id` | `string` | Yes |  |
| `id` | `string` | Yes | The id of the Group. |
| `member_ids` | `array` | Yes | The Member IDs contain within the Group. |
| `mention_name` | `string` | Yes | The mention name of the Group. |
| `name` | `string` | Yes | The name of the Group. |
| `num_epics_started` | `int` | Yes | The number of epics assigned to the group which are in the started workflow state. |
| `num_stories` | `int` | Yes | The total number of stories assigned to the group. |
| `num_stories_backlog` | `int` | Yes | The number of stories assigned to the group which are in a backlog workflow state. |
| `num_stories_started` | `int` | Yes | The number of stories assigned to the group which are in a started workflow state. |
| `updated_at` | `string` | Yes | The last instant when this group was updated. |
| `workflow_ids` | `array` | Yes | The Workflow IDs contained within the Group. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Group()->create([
  "app_url" => null, // string
  "archived" => null, // bool
  "color" => null, // string
  "color_key" => null, // string
  "created_at" => null, // string
  "description" => null, // string
  "display_icon" => null, // array
  "entity_type" => null, // string
  "global_id" => null, // string
  "id" => null, // string
  "member_ids" => null, // array
  "mention_name" => null, // string
  "name" => null, // string
  "num_epics_started" => null, // int
  "num_stories" => null, // int
  "num_stories_backlog" => null, // int
  "num_stories_started" => null, // int
  "updated_at" => null, // string
  "workflow_ids" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Group()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Group()->load(["id" => "group_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Group()->update([
  "id" => "group_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GroupEntity`

Create a new `GroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HealthEntity

```php
$health = $client->Health();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Health()->create([
  "epic_id" => null, // int
  "entity_type" => null, // string
  "id" => null, // string
  "status" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Health()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Health()->load(["epic_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Health()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HealthEntity`

Create a new `HealthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HistoryEntity

```php
$history = $client->History();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `array` | Yes | An array of actions that were performed for the change. |
| `actor_name` | `string` | No | The name of the actor that performed the action, if it can be determined. |
| `automation_id` | `string` | No | The ID of the automation that performed the change. |
| `changed_at` | `string` | Yes | The date when the change occurred. |
| `external_id` | `string` | No | The ID of the webhook that handled the change. |
| `id` | `string` | Yes | The ID representing the change for the story. |
| `member_id` | `string` | No | The ID of the member who performed the change. |
| `primary_id` | `string` | No | The ID of the primary entity that has changed, if applicable. |
| `references` | `array` | No | An array of objects affected by the change. |
| `version` | `string` | Yes | The version of the change format. |
| `webhook_id` | `string` | No | The ID of the webhook that handled the change. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->History()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HistoryEntity`

Create a new `HistoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IterationEntity

```php
$iteration = $client->Iteration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes | The Shortcut application url for the Iteration. |
| `associated_groups` | `array` | Yes | An array containing Group IDs and Group-owned story counts for the Iteration's associated groups. |
| `created_at` | `string` | Yes | The instant when this iteration was created. |
| `description` | `string` | Yes | The description of the iteration. |
| `end_date` | `string` | Yes | The date this iteration ends. |
| `entity_type` | `string` | Yes | A string description of this resource |
| `follower_ids` | `array` | Yes | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `string` | Yes |  |
| `group_ids` | `array` | Yes | An array of UUIDs for any Groups you want to add as Followers. |
| `group_mention_ids` | `array` | Yes | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `int` | Yes | The ID of the iteration. |
| `label_ids` | `array` | Yes | An array of label ids attached to the iteration. |
| `labels` | `array` | Yes | An array of labels attached to the iteration. |
| `member_mention_ids` | `array` | Yes | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `array` | Yes | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | Yes | The name of the iteration. |
| `start_date` | `string` | Yes | The date this iteration begins. |
| `stats` | `array` | Yes | A group of calculated values for this Iteration. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Iteration()->create([
  "app_url" => null, // string
  "associated_groups" => null, // array
  "created_at" => null, // string
  "description" => null, // string
  "end_date" => null, // string
  "entity_type" => null, // string
  "follower_ids" => null, // array
  "global_id" => null, // string
  "group_ids" => null, // array
  "group_mention_ids" => null, // array
  "id" => null, // int
  "label_ids" => null, // array
  "labels" => null, // array
  "member_mention_ids" => null, // array
  "mention_ids" => null, // array
  "name" => null, // string
  "start_date" => null, // string
  "stats" => null, // array
  "status" => null, // string
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Iteration()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Iteration()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Iteration()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Iteration()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IterationEntity`

Create a new `IterationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## KeyResultEntity

```php
$key_result = $client->KeyResult();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_observed_value` | `array` | Yes | The starting value of the Key Result. |
| `current_target_value` | `array` | Yes | The starting value of the Key Result. |
| `id` | `string` | Yes | The ID of the Key Result. |
| `initial_observed_value` | `array` | Yes | The starting value of the Key Result. |
| `name` | `string` | Yes | The name of the Key Result. |
| `objective_id` | `int` | Yes | The Objective to which this Key Result belongs. |
| `observed_value` | `array` | No | The starting value of the Key Result. |
| `progress` | `int` | Yes | The integer percentage of progress toward completion of the Key Result. |
| `target_value` | `array` | No | The starting value of the Key Result. |
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->KeyResult()->load(["id" => "key_result_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->KeyResult()->update([
  "id" => "key_result_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): KeyResultEntity`

Create a new `KeyResultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LabelEntity

```php
$label = $client->Label();
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
| `stats` | `array` | Yes | A group of calculated values for this Label. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Label()->create([
  "app_url" => null, // string
  "created_at" => null, // string
  "entity_type" => null, // string
  "global_id" => null, // string
  "id" => null, // int
  "name" => null, // string
  "num_epics" => null, // int
  "num_epics_completed" => null, // int
  "num_epics_in_progress" => null, // int
  "num_epics_total" => null, // int
  "num_epics_unstarted" => null, // int
  "num_points_backlog" => null, // int
  "num_points_completed" => null, // int
  "num_points_in_progress" => null, // int
  "num_points_total" => null, // int
  "num_points_unstarted" => null, // int
  "num_related_documents" => null, // int
  "num_stories_backlog" => null, // int
  "num_stories_completed" => null, // int
  "num_stories_in_progress" => null, // int
  "num_stories_total" => null, // int
  "num_stories_unestimated" => null, // int
  "num_stories_unstarted" => null, // int
  "stats" => null, // array
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Label()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Label()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Label()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Label()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LabelEntity`

Create a new `LabelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LinkedFileEntity

```php
$linked_file = $client->LinkedFile();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `string` | Yes | The content type of the image (e.g. |
| `created_at` | `string` | Yes | The time/date the LinkedFile was created. |
| `description` | `string` | Yes | The description of the file. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `group_mention_ids` | `array` | Yes | The groups that are mentioned in the description of the file. |
| `id` | `int` | Yes | The unique identifier for the file. |
| `member_mention_ids` | `array` | Yes | The members that are mentioned in the description of the file. |
| `mention_ids` | `array` | Yes | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | Yes | The name of the linked file. |
| `size` | `int` | Yes | The filesize, if the integration provided it. |
| `story_id` | `int` | No | The ID of the linked story. |
| `story_ids` | `array` | Yes | The IDs of the stories this file is attached to. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LinkedFile()->create([
  "content_type" => null, // string
  "created_at" => null, // string
  "description" => null, // string
  "entity_type" => null, // string
  "group_mention_ids" => null, // array
  "id" => null, // int
  "member_mention_ids" => null, // array
  "mention_ids" => null, // array
  "name" => null, // string
  "size" => null, // int
  "story_ids" => null, // array
  "thumbnail_url" => null, // string
  "type" => null, // string
  "updated_at" => null, // string
  "uploader_id" => null, // string
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LinkedFile()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->LinkedFile()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->LinkedFile()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->LinkedFile()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LinkedFileEntity`

Create a new `LinkedFileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MemberEntity

```php
$member = $client->Member();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The time/date the Member was created. |
| `created_without_invite` | `bool` | Yes | Whether this member was created as a placeholder entity. |
| `disabled` | `bool` | Yes | True/false boolean indicating whether the Member has been disabled within the Workspace. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `global_id` | `string` | Yes |  |
| `group_ids` | `array` | Yes | The Member's group ids |
| `id` | `string` | Yes | The Member's ID in Shortcut. |
| `installation_id` | `string` | No | Only set for agents. |
| `is_owner` | `bool` | Yes |  |
| `mention_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `organization2` | `array` | Yes |  |
| `profile` | `array` | Yes | A group of Member profile details. |
| `replaced_by` | `string` | No | The id of the member that replaces this one when merged. |
| `role` | `string` | Yes | The Member's role in the Workspace. |
| `state` | `string` | Yes | The user state, one of partial, full, disabled, or imported. |
| `updated_at` | `string` | Yes | The time/date the Member was last updated. |
| `workspace2` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Member()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Member()->load(["id" => "member_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MemberEntity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MilestoneEntity

```php
$milestone = $client->Milestone();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `int` | No | The ID of the Milestone we want to move this Milestone after. |
| `app_url` | `string` | Yes | The Shortcut application url for the Milestone. |
| `archived` | `bool` | Yes | A boolean indicating whether the Milestone has been archived or not. |
| `before_id` | `int` | No | The ID of the Milestone we want to move this Milestone before. |
| `categories` | `array` | Yes | An array of Categories attached to the Milestone. |
| `completed` | `bool` | Yes | A true/false boolean indicating if the Milestone has been completed. |
| `completed_at` | `string` | Yes | The time/date the Milestone was completed. |
| `completed_at_override` | `string` | Yes | A manual override for the time/date the Milestone was completed. |
| `created_at` | `string` | Yes | The time/date the Milestone was created. |
| `description` | `string` | Yes | The Milestone's description. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `global_id` | `string` | Yes |  |
| `id` | `int` | Yes | The unique ID of the Milestone. |
| `key_result_ids` | `array` | Yes | The IDs of the Key Results associated with the Objective. |
| `name` | `string` | Yes | The name of the Milestone. |
| `position` | `int` | Yes | A number representing the position of the Milestone in relation to every other Milestone within the Workspace. |
| `started` | `bool` | Yes | A true/false boolean indicating if the Milestone has been started. |
| `started_at` | `string` | Yes | The time/date the Milestone was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Milestone was started. |
| `state` | `string` | Yes | The workflow state that the Milestone is in. |
| `stats` | `array` | Yes | A group of calculated values for this Milestone. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Milestone()->create([
  "app_url" => null, // string
  "archived" => null, // bool
  "categories" => null, // array
  "completed" => null, // bool
  "completed_at" => null, // string
  "completed_at_override" => null, // string
  "created_at" => null, // string
  "description" => null, // string
  "entity_type" => null, // string
  "global_id" => null, // string
  "id" => null, // int
  "key_result_ids" => null, // array
  "name" => null, // string
  "position" => null, // int
  "started" => null, // bool
  "started_at" => null, // string
  "started_at_override" => null, // string
  "state" => null, // string
  "stats" => null, // array
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Milestone()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Milestone()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Milestone()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Milestone()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MilestoneEntity`

Create a new `MilestoneEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ObjectifEntity

```php
$objectif = $client->Objectif();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Objectif()->remove(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ObjectifEntity`

Create a new `ObjectifEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ObjectiveEntity

```php
$objective = $client->Objective();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `int` | No | The ID of the Objective we want to move this Objective after. |
| `app_url` | `string` | Yes | The Shortcut application url for the Objective. |
| `archived` | `bool` | Yes | A boolean indicating whether the Objective has been archived or not. |
| `before_id` | `int` | No | The ID of the Objective we want to move this Objective before. |
| `categories` | `array` | Yes | An array of Categories attached to the Objective. |
| `completed` | `bool` | Yes | A true/false boolean indicating if the Objectivehas been completed. |
| `completed_at` | `string` | Yes | The time/date the Objective was completed. |
| `completed_at_override` | `string` | Yes | A manual override for the time/date the Objective was completed. |
| `created_at` | `string` | Yes | The time/date the Objective was created. |
| `description` | `string` | Yes | The Objective's description. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `global_id` | `string` | Yes |  |
| `id` | `int` | Yes | The unique ID of the Objective. |
| `key_result_ids` | `array` | Yes | The IDs of the Key Results associated with the Objective. |
| `name` | `string` | Yes | The name of the Objective. |
| `position` | `int` | Yes | A number representing the position of the Objective in relation to every other Objective within the Workspace. |
| `started` | `bool` | Yes | A true/false boolean indicating if the Objective has been started. |
| `started_at` | `string` | Yes | The time/date the Objective was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Objective was started. |
| `state` | `string` | Yes | The workflow state that the Objective is in. |
| `stats` | `array` | Yes | A group of calculated values for this Objective. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Objective()->create([
  "app_url" => null, // string
  "archived" => null, // bool
  "categories" => null, // array
  "completed" => null, // bool
  "completed_at" => null, // string
  "completed_at_override" => null, // string
  "created_at" => null, // string
  "description" => null, // string
  "entity_type" => null, // string
  "global_id" => null, // string
  "id" => null, // int
  "key_result_ids" => null, // array
  "name" => null, // string
  "position" => null, // int
  "started" => null, // bool
  "started_at" => null, // string
  "started_at_override" => null, // string
  "state" => null, // string
  "stats" => null, // array
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Objective()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Objective()->load(["objective_public_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Objective()->update([
  "objective_public_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ObjectiveEntity`

Create a new `ObjectiveEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectEntity

```php
$project = $client->Project();
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
| `follower_ids` | `array` | Yes | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `string` | Yes | The Global ID of the Project. |
| `id` | `int` | Yes | The unique ID of the Project. |
| `iteration_length` | `int` | Yes | The number of weeks per iteration in this Project. |
| `name` | `string` | Yes | The name of the Project |
| `show_thermometer` | `bool` | Yes | Configuration to enable or disable thermometers in the Story summary. |
| `start_time` | `string` | Yes | The date at which the Project was started. |
| `stats` | `array` | Yes | A group of calculated values for this Project. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Project()->create([
  "abbreviation" => null, // string
  "app_url" => null, // string
  "archived" => null, // bool
  "color" => null, // string
  "created_at" => null, // string
  "days_to_thermometer" => null, // int
  "description" => null, // string
  "entity_type" => null, // string
  "external_id" => null, // string
  "follower_ids" => null, // array
  "global_id" => null, // string
  "id" => null, // int
  "iteration_length" => null, // int
  "name" => null, // string
  "show_thermometer" => null, // bool
  "start_time" => null, // string
  "stats" => null, // array
  "team_id" => null, // int
  "updated_at" => null, // string
  "workflow_id" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Project()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Project()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Project()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Project()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectEntity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryEntity

```php
$repository = $client->Repository();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Repository()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Repository()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryEntity`

Create a new `RepositoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SearchEntity

```php
$search = $client->Search();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `epics` | `array` | Yes | The results of the Epic search query. |
| `iterations` | `array` | Yes | The results of the Iteration search query. |
| `milestones` | `array` | Yes | The results of the Objective search query. |
| `stories` | `array` | Yes | The results of the Story search query. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Search()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SearchEntity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StoryEntity

```php
$story = $client->Story();
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
| `branch_ids` | `array` | No | An array of IDs of Branches attached to the story. |
| `branches` | `array` | Yes | An array of Git branches attached to the story. |
| `comment_ids` | `array` | No | An array of IDs of Comments attached to the story. |
| `comments` | `array` | Yes | An array of comments attached to the story. |
| `commit_ids` | `array` | No | An array of IDs of Commits attached to the story. |
| `commits` | `array` | Yes | An array of commits attached to the story. |
| `completed` | `bool` | Yes | A true/false boolean indicating if the Story has been completed. |
| `completed_at` | `string` | Yes | The time/date the Story was completed. |
| `completed_at_override` | `string` | Yes | A manual override for the time/date the Story was completed. |
| `created_at` | `string` | Yes | The time/date the Story was created. |
| `custom_fields` | `array` | No | An array of CustomField value assertions for the story. |
| `custom_fields_add` | `array` | No | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `array` | No | A map specifying a CustomField ID. |
| `cycle_time` | `int` | No | The cycle time (in seconds) of this story when complete. |
| `deadline` | `string` | Yes | The due date of the story. |
| `description` | `string` | Yes | The description of the story. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `epic_id` | `int` | Yes | The ID of the epic the story belongs to. |
| `estimate` | `int` | Yes | The numeric point estimate of the story. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `external_links` | `array` | Yes | An array of external links (strings) associated with a Story |
| `external_links_add` | `array` | No | An array of External Links associated with this story. |
| `external_links_remove` | `array` | No | An array of External Links associated with this story. |
| `file_ids` | `array` | No | An array of IDs of files attached to the story. |
| `file_ids_add` | `array` | No | An array of IDs of files attached to the story in addition to files from the template. |
| `file_ids_remove` | `array` | No | An array of IDs of files removed from files from the template. |
| `files` | `array` | Yes | An array of files attached to the story. |
| `follower_ids` | `array` | Yes | An array of UUIDs for any Members listed as Followers. |
| `follower_ids_add` | `array` | No | The UUIDs of the new followers to be added in addition to followers from the template. |
| `follower_ids_remove` | `array` | No | The UUIDs of the new followers to be removed from followers from the template. |
| `formatted_vcs_branch_name` | `string` | No | The formatted branch name for this story. |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes | The ID of the group associated with the story. |
| `group_mention_ids` | `array` | Yes | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `int` | Yes | The unique ID of the Story. |
| `iteration_id` | `int` | Yes | The ID of the iteration the story belongs to. |
| `label_ids` | `array` | Yes | An array of label ids attached to the story. |
| `labels` | `array` | Yes | An array of labels attached to the story. |
| `labels_add` | `array` | No | An array of labels attached to the story in addition to the labels provided by the template. |
| `labels_remove` | `array` | No | An array of labels to remove from the labels provided by the template. |
| `lead_time` | `int` | No | The lead time (in seconds) of this story when complete. |
| `linked_file_ids` | `array` | No | An array of IDs of linked files attached to the story. |
| `linked_file_ids_add` | `array` | No | An array of IDs of linked files attached to the story in addition to files from the template. |
| `linked_file_ids_remove` | `array` | No | An array of IDs of linked files removed from files from the template. |
| `linked_files` | `array` | Yes | An array of linked files attached to the story. |
| `member_mention_ids` | `array` | Yes | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `array` | Yes | `Deprecated:` use `member_mention_ids`. |
| `move_to` | `string` | No | One of "first" or "last". |
| `moved_at` | `string` | Yes | The time/date the Story was last changed workflow-state. |
| `name` | `string` | Yes | The name of the story. |
| `num_tasks_completed` | `int` | No | The number of tasks on the story which are complete. |
| `owner_ids` | `array` | Yes | An array of UUIDs of the owners of this story. |
| `owner_ids_add` | `array` | No | The UUIDs of the new owners to be added in addition to owners from the template. |
| `owner_ids_remove` | `array` | No | The UUIDs of the new owners to be removed from owners from the template. |
| `parent_story_id` | `int` | No | The id of the parent story to associate with this story. |
| `position` | `int` | Yes | A number representing the position of the story in relation to every other story in the current project. |
| `previous_iteration_ids` | `array` | Yes | The IDs of the iteration the story belongs to. |
| `project_id` | `int` | Yes | The ID of the project the story belongs to. |
| `pull_request_ids` | `array` | No | An array of IDs of Pull/Merge Requests attached to the story. |
| `pull_requests` | `array` | Yes | An array of Pull/Merge Requests attached to the story. |
| `requested_by_id` | `string` | Yes | The ID of the Member that requested the story. |
| `source_task_id` | `int` | No | Given this story was converted from a task in another story, this is the original task ID that was converted to this story. |
| `started` | `bool` | Yes | A true/false boolean indicating if the Story has been started. |
| `started_at` | `string` | Yes | The time/date the Story was started. |
| `started_at_override` | `string` | Yes | A manual override for the time/date the Story was started. |
| `stats` | `array` | Yes | The stats object for Stories |
| `story_links` | `array` | Yes | An array of story links attached to the Story. |
| `story_template_id` | `string` | Yes | The ID of the story template used to create this story, or null if not created using a template. |
| `story_type` | `string` | Yes | The type of story (feature, bug, chore). |
| `sub_task_story_ids` | `array` | No |  |
| `sub_tasks` | `array` | No | A list of either params to create a new sub-task or link an existing story as a sub-task |
| `synced_item` | `array` | Yes | The synced item for the story. |
| `task_ids` | `array` | No | An array of IDs of Tasks attached to the story. |
| `tasks` | `array` | Yes | An array of tasks connected to the story. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Story()->create([
  "app_url" => null, // string
  "archived" => null, // bool
  "blocked" => null, // bool
  "blocker" => null, // bool
  "branches" => null, // array
  "comments" => null, // array
  "commits" => null, // array
  "completed" => null, // bool
  "completed_at" => null, // string
  "completed_at_override" => null, // string
  "created_at" => null, // string
  "deadline" => null, // string
  "description" => null, // string
  "entity_type" => null, // string
  "epic_id" => null, // int
  "estimate" => null, // int
  "external_id" => null, // string
  "external_links" => null, // array
  "files" => null, // array
  "follower_ids" => null, // array
  "global_id" => null, // string
  "group_id" => null, // string
  "group_mention_ids" => null, // array
  "id" => null, // int
  "iteration_id" => null, // int
  "label_ids" => null, // array
  "labels" => null, // array
  "linked_files" => null, // array
  "member_mention_ids" => null, // array
  "mention_ids" => null, // array
  "moved_at" => null, // string
  "name" => null, // string
  "owner_ids" => null, // array
  "position" => null, // int
  "previous_iteration_ids" => null, // array
  "project_id" => null, // int
  "pull_requests" => null, // array
  "requested_by_id" => null, // string
  "started" => null, // bool
  "started_at" => null, // string
  "started_at_override" => null, // string
  "stats" => null, // array
  "story_links" => null, // array
  "story_template_id" => null, // string
  "story_type" => null, // string
  "synced_item" => null, // array
  "tasks" => null, // array
  "updated_at" => null, // string
  "workflow_id" => null, // int
  "workflow_state_id" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Story()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Story()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Story()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Story()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StoryEntity`

Create a new `StoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StoryCommentEntity

```php
$story_comment = $client->StoryComment();
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
| `group_mention_ids` | `array` | Yes | The unique IDs of the Group who are mentioned in the Comment. |
| `id` | `int` | Yes | The unique ID of the Comment. |
| `linked_to_slack` | `bool` | Yes | Whether the Comment is currently the root of a thread that is linked to Slack. |
| `member_mention_ids` | `array` | Yes | The unique IDs of the Member who are mentioned in the Comment. |
| `mention_ids` | `array` | Yes | `Deprecated:` use `member_mention_ids`. |
| `parent_id` | `int` | No | The ID of the parent Comment this Comment is threaded under. |
| `position` | `int` | Yes | The Comments numerical position in the list from oldest to newest. |
| `reactions` | `array` | Yes | A set of Reactions to this Comment. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->StoryComment()->create([
  "id" => null, // int
  "app_url" => null, // string
  "author_id" => null, // string
  "created_at" => null, // string
  "deleted" => null, // bool
  "entity_type" => null, // string
  "external_id" => null, // string
  "group_mention_ids" => null, // array
  "linked_to_slack" => null, // bool
  "member_mention_ids" => null, // array
  "mention_ids" => null, // array
  "position" => null, // int
  "reactions" => null, // array
  "story_id" => null, // int
  "text" => null, // string
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->StoryComment()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->StoryComment()->load(["id" => 1, "story_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->StoryComment()->update([
  "id" => 1,
  "story_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StoryCommentEntity`

Create a new `StoryCommentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StoryLinkEntity

```php
$story_link = $client->StoryLink();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->StoryLink()->create([
  "created_at" => null, // string
  "entity_type" => null, // string
  "id" => null, // int
  "object_id" => null, // int
  "subject_id" => null, // int
  "subject_workflow_state_id" => null, // int
  "updated_at" => null, // string
  "verb" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->StoryLink()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->StoryLink()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->StoryLink()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StoryLinkEntity`

Create a new `StoryLinkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StoryReactionEntity

```php
$story_reaction = $client->StoryReaction();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emoji` | `string` | Yes | The emoji short-code to add / remove. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->StoryReaction()->create([
  "comment_id" => null, // int
  "story_id" => null, // int
  "emoji" => null, // string
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->StoryReaction()->remove(["comment_id" => 1, "story_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StoryReactionEntity`

Create a new `StoryReactionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StorySlimEntity

```php
$story_slim = $client->StorySlim();
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
| `custom_fields_add` | `array` | No | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `array` | No | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `string` | No | The due date of the story. |
| `deadline_end` | `string` | No | Stories should have a deadline on or before this date. |
| `deadline_start` | `string` | No | Stories should have a deadline on or after this date. |
| `epic_id` | `int` | No | The Epic IDs that may be associated with the Stories. |
| `epic_ids` | `array` | No | The Epic IDs that may be associated with the Stories. |
| `estimate` | `int` | No | The number of estimate points associate with the Stories. |
| `external_id` | `string` | No | An ID or URL that references an external resource. |
| `external_links` | `array` | No | An array of External Links associated with this story. |
| `follower_ids_add` | `array` | No | The UUIDs of the new followers to be added. |
| `follower_ids_remove` | `array` | No | The UUIDs of the followers to be removed. |
| `group_id` | `string` | No | The Group ID that is associated with the Stories |
| `group_ids` | `array` | No | The Group IDs that are associated with the Stories |
| `includes_description` | `bool` | No | Whether to include the story description in the response. |
| `iteration_id` | `int` | No | The Iteration ID that may be associated with the Stories. |
| `iteration_ids` | `array` | No | The Iteration IDs that may be associated with the Stories. |
| `label_ids` | `array` | No | The Label IDs that may be associated with the Stories. |
| `label_name` | `string` | No | The name of any associated Labels. |
| `labels_add` | `array` | No | An array of labels to be added. |
| `labels_remove` | `array` | No | An array of labels to be removed. |
| `move_to` | `string` | No | One of "first" or "last". |
| `owner_id` | `string` | No | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids` | `array` | No | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids_add` | `array` | No | The UUIDs of the new owners to be added. |
| `owner_ids_remove` | `array` | No | The UUIDs of the owners to be removed. |
| `project_id` | `int` | No | The IDs for the Projects the Stories may be assigned to. |
| `project_ids` | `array` | No | The IDs for the Projects the Stories may be assigned to. |
| `requested_by_id` | `string` | No | The UUID of any Users who may have requested the Stories. |
| `stories` | `array` | Yes | An array of stories to be created. |
| `story_ids` | `array` | Yes | The Ids of the Stories you wish to update. |
| `story_type` | `string` | No | The type of Stories that you want returned. |
| `updated_at_end` | `string` | No | Stories should have been updated on or before this date. |
| `updated_at_start` | `string` | No | Stories should have been updated on or after this date. |
| `workflow_state_id` | `int` | No | The unique IDs of the specific Workflow States that the Stories should be in. |
| `workflow_state_types` | `array` | No | The type of Workflow State the Stories may be in. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->StorySlim()->create([
  "stories" => null, // array
  "story_ids" => null, // array
]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->StorySlim()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StorySlimEntity`

Create a new `StorySlimEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TaskEntity

```php
$task = $client->Task();
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
| `group_mention_ids` | `array` | Yes | An array of UUIDs of Groups mentioned in this Task. |
| `id` | `int` | Yes | The unique ID of the Task. |
| `member_mention_ids` | `array` | Yes | An array of UUIDs of Members mentioned in this Task. |
| `mention_ids` | `array` | Yes | `Deprecated:` use `member_mention_ids`. |
| `owner_ids` | `array` | Yes | An array of UUIDs of the Owners of this Task. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Task()->create([
  "story_id" => null, // int
  "complete" => null, // bool
  "completed_at" => null, // string
  "created_at" => null, // string
  "description" => null, // string
  "entity_type" => null, // string
  "external_id" => null, // string
  "global_id" => null, // string
  "group_mention_ids" => null, // array
  "id" => null, // int
  "member_mention_ids" => null, // array
  "mention_ids" => null, // array
  "owner_ids" => null, // array
  "position" => null, // int
  "updated_at" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Task()->load(["id" => 1, "story_id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Task()->remove(["id" => 1, "story_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Task()->update([
  "id" => 1,
  "story_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TaskEntity`

Create a new `TaskEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ThreadedCommentEntity

```php
$threaded_comment = $client->ThreadedComment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `string` | Yes | The Shortcut application url for the Comment. |
| `author_id` | `string` | Yes | The unique ID of the Member that authored the Comment. |
| `comments` | `array` | Yes | A nested array of threaded comments. |
| `created_at` | `string` | Yes | The time/date the Comment was created. |
| `deleted` | `bool` | Yes | True/false boolean indicating whether the Comment is deleted. |
| `entity_type` | `string` | Yes | A string description of this resource. |
| `external_id` | `string` | Yes | This field can be set to another unique ID. |
| `group_mention_ids` | `array` | Yes | An array of Group IDs that have been mentioned in this Comment. |
| `id` | `int` | Yes | The unique ID of the Comment. |
| `member_mention_ids` | `array` | Yes | An array of Member IDs that have been mentioned in this Comment. |
| `mention_ids` | `array` | Yes | `Deprecated:` use `member_mention_ids`. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ThreadedComment()->create([
  "epic_id" => null, // int
  "app_url" => null, // string
  "author_id" => null, // string
  "comments" => null, // array
  "created_at" => null, // string
  "deleted" => null, // bool
  "entity_type" => null, // string
  "external_id" => null, // string
  "group_mention_ids" => null, // array
  "member_mention_ids" => null, // array
  "mention_ids" => null, // array
  "text" => null, // string
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ThreadedComment()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ThreadedComment()->load(["id" => 1, "epic_id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ThreadedComment()->remove(["id" => 1, "epic_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ThreadedComment()->update([
  "id" => 1,
  "epic_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ThreadedCommentEntity`

Create a new `ThreadedCommentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UploadedFileEntity

```php
$uploaded_file = $client->UploadedFile();
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
| `group_mention_ids` | `array` | Yes | The unique IDs of the Groups who are mentioned in the file description. |
| `id` | `int` | Yes | The unique ID for the file. |
| `member_mention_ids` | `array` | Yes | The unique IDs of the Members who are mentioned in the file description. |
| `mention_ids` | `array` | Yes | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | Yes | The optional User-specified name of the file. |
| `size` | `int` | Yes | The size of the file. |
| `story_ids` | `array` | Yes | The unique IDs of the Stories associated with this file. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->UploadedFile()->create([
  "content_type" => null, // string
  "created_at" => null, // string
  "description" => null, // string
  "entity_type" => null, // string
  "external_id" => null, // string
  "filename" => null, // string
  "group_mention_ids" => null, // array
  "id" => null, // int
  "member_mention_ids" => null, // array
  "mention_ids" => null, // array
  "name" => null, // string
  "size" => null, // int
  "story_ids" => null, // array
  "thumbnail_url" => null, // string
  "updated_at" => null, // string
  "uploader_id" => null, // string
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->UploadedFile()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->UploadedFile()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->UploadedFile()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->UploadedFile()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UploadedFileEntity`

Create a new `UploadedFileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhookEntity

```php
$webhook = $client->Webhook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `secret` | `string` | No |  |
| `webhook_url` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Webhook()->create([
  "webhook_url" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Webhook()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Webhook()->remove(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhookEntity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkflowEntity

```php
$workflow = $client->Workflow();
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
| `project_ids` | `array` | Yes | An array of IDs of projects within the Workflow. |
| `states` | `array` | Yes | A map of the states in this Workflow. |
| `team_id` | `int` | Yes | The ID of the team the workflow belongs to. |
| `updated_at` | `string` | Yes | The date the Workflow was updated. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Workflow()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Workflow()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkflowEntity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new ShortcutSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```


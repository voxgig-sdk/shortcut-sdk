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
| `story_types` | `array` | No |  |
| `updated_at` | `string` | Yes |  |
| `values` | `array` | No |  |

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
| `app_url` | `string` | Yes |  |
| `content` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `title` | `string` | Yes |  |

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
| `author_id` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `custom_fields` | `array` | No |  |
| `deadline` | `string` | No |  |
| `description` | `string` | No |  |
| `entity_type` | `string` | No |  |
| `epic_id` | `int` | No |  |
| `estimate` | `int` | No |  |
| `external_links` | `array` | No |  |
| `files` | `array` | No |  |
| `follower_ids` | `array` | No |  |
| `group_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `iteration_id` | `int` | No |  |
| `label_ids` | `array` | No |  |
| `labels` | `array` | No |  |
| `last_used_at` | `string` | Yes |  |
| `linked_files` | `array` | No |  |
| `name` | `string` | No |  |
| `owner_ids` | `array` | No |  |
| `project_id` | `int` | No |  |
| `story_contents` | `array` | Yes |  |
| `story_type` | `string` | No |  |
| `sub_tasks` | `array` | No |  |
| `tasks` | `array` | No |  |
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
| `after_id` | `int` | No |  |
| `app_url` | `string` | Yes |  |
| `archived` | `bool` | Yes |  |
| `associated_groups` | `array` | Yes |  |
| `before_id` | `int` | No |  |
| `comments` | `array` | Yes |  |
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
| `follower_ids` | `array` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes |  |
| `group_ids` | `array` | Yes |  |
| `group_mention_ids` | `array` | Yes |  |
| `health` | `array` | Yes |  |
| `id` | `int` | Yes |  |
| `label_ids` | `array` | Yes |  |
| `labels` | `array` | Yes |  |
| `member_mention_ids` | `array` | Yes |  |
| `mention_ids` | `array` | Yes |  |
| `milestone_id` | `int` | Yes |  |
| `name` | `string` | Yes |  |
| `objective_ids` | `array` | Yes |  |
| `owner_ids` | `array` | Yes |  |
| `planned_start_date` | `string` | Yes |  |
| `position` | `int` | Yes |  |
| `productboard_id` | `string` | Yes |  |
| `productboard_name` | `string` | Yes |  |
| `productboard_plugin_id` | `string` | Yes |  |
| `productboard_url` | `string` | Yes |  |
| `project_ids` | `array` | Yes |  |
| `requested_by_id` | `string` | Yes |  |
| `started` | `bool` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `stats` | `array` | Yes |  |
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
| `app_url` | `string` | Yes |  |
| `archived` | `bool` | Yes |  |
| `associated_groups` | `array` | Yes |  |
| `completed` | `bool` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `completed_at_override` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deadline` | `string` | Yes |  |
| `description` | `string` | No |  |
| `entity_type` | `string` | Yes |  |
| `epic_state_id` | `int` | Yes |  |
| `external_id` | `string` | Yes |  |
| `follower_ids` | `array` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes |  |
| `group_ids` | `array` | Yes |  |
| `group_mention_ids` | `array` | Yes |  |
| `id` | `int` | Yes |  |
| `label_ids` | `array` | Yes |  |
| `labels` | `array` | Yes |  |
| `member_mention_ids` | `array` | Yes |  |
| `mention_ids` | `array` | Yes |  |
| `milestone_id` | `int` | Yes |  |
| `name` | `string` | Yes |  |
| `objective_ids` | `array` | Yes |  |
| `owner_ids` | `array` | Yes |  |
| `planned_start_date` | `string` | Yes |  |
| `position` | `int` | Yes |  |
| `productboard_id` | `string` | Yes |  |
| `productboard_name` | `string` | Yes |  |
| `productboard_plugin_id` | `string` | Yes |  |
| `productboard_url` | `string` | Yes |  |
| `project_ids` | `array` | Yes |  |
| `requested_by_id` | `string` | Yes |  |
| `started` | `bool` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `stats` | `array` | Yes |  |
| `stories_without_projects` | `int` | Yes |  |
| `updated_at` | `string` | Yes |  |

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
| `app_url` | `string` | Yes |  |
| `archived` | `bool` | Yes |  |
| `color` | `string` | Yes |  |
| `color_key` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `default_workflow_id` | `int` | No |  |
| `description` | `string` | Yes |  |
| `display_icon` | `array` | Yes |  |
| `display_icon_id` | `string` | No |  |
| `entity_type` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `member_ids` | `array` | Yes |  |
| `mention_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `num_epics_started` | `int` | Yes |  |
| `num_stories` | `int` | Yes |  |
| `num_stories_backlog` | `int` | Yes |  |
| `num_stories_started` | `int` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workflow_ids` | `array` | Yes |  |

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
| `actions` | `array` | Yes |  |
| `actor_name` | `string` | No |  |
| `automation_id` | `string` | No |  |
| `changed_at` | `string` | Yes |  |
| `external_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `member_id` | `string` | No |  |
| `primary_id` | `string` | No |  |
| `references` | `array` | No |  |
| `version` | `string` | Yes |  |
| `webhook_id` | `string` | No |  |

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
| `app_url` | `string` | Yes |  |
| `associated_groups` | `array` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `follower_ids` | `array` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_ids` | `array` | Yes |  |
| `group_mention_ids` | `array` | Yes |  |
| `id` | `int` | Yes |  |
| `label_ids` | `array` | Yes |  |
| `labels` | `array` | Yes |  |
| `member_mention_ids` | `array` | Yes |  |
| `mention_ids` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `start_date` | `string` | Yes |  |
| `stats` | `array` | Yes |  |
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
| `current_observed_value` | `array` | Yes |  |
| `current_target_value` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `initial_observed_value` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `objective_id` | `int` | Yes |  |
| `observed_value` | `array` | No |  |
| `progress` | `int` | Yes |  |
| `target_value` | `array` | No |  |
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
| `stats` | `array` | Yes |  |
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
| `content_type` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `group_mention_ids` | `array` | Yes |  |
| `id` | `int` | Yes |  |
| `member_mention_ids` | `array` | Yes |  |
| `mention_ids` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `size` | `int` | Yes |  |
| `story_id` | `int` | No |  |
| `story_ids` | `array` | Yes |  |
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
| `created_at` | `string` | Yes |  |
| `created_without_invite` | `bool` | Yes |  |
| `disabled` | `bool` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_ids` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `installation_id` | `string` | No |  |
| `is_owner` | `bool` | Yes |  |
| `mention_name` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `organization2` | `array` | Yes |  |
| `profile` | `array` | Yes |  |
| `replaced_by` | `string` | No |  |
| `role` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
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
| `after_id` | `int` | No |  |
| `app_url` | `string` | Yes |  |
| `archived` | `bool` | Yes |  |
| `before_id` | `int` | No |  |
| `categories` | `array` | Yes |  |
| `completed` | `bool` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `completed_at_override` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `key_result_ids` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `position` | `int` | Yes |  |
| `started` | `bool` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `stats` | `array` | Yes |  |
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
| `after_id` | `int` | No |  |
| `app_url` | `string` | Yes |  |
| `archived` | `bool` | Yes |  |
| `before_id` | `int` | No |  |
| `categories` | `array` | Yes |  |
| `completed` | `bool` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `completed_at_override` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `key_result_ids` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `position` | `int` | Yes |  |
| `started` | `bool` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `stats` | `array` | Yes |  |
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
| `abbreviation` | `string` | Yes |  |
| `app_url` | `string` | Yes |  |
| `archived` | `bool` | Yes |  |
| `color` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `days_to_thermometer` | `int` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `follower_ids` | `array` | Yes |  |
| `global_id` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `iteration_length` | `int` | Yes |  |
| `name` | `string` | Yes |  |
| `show_thermometer` | `bool` | Yes |  |
| `start_time` | `string` | Yes |  |
| `stats` | `array` | Yes |  |
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
| `epics` | `array` | Yes |  |
| `iterations` | `array` | Yes |  |
| `milestones` | `array` | Yes |  |
| `stories` | `array` | Yes |  |

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
| `after_id` | `int` | No |  |
| `app_url` | `string` | Yes |  |
| `archived` | `bool` | Yes |  |
| `before_id` | `int` | No |  |
| `blocked` | `bool` | Yes |  |
| `blocker` | `bool` | Yes |  |
| `branch_ids` | `array` | No |  |
| `branches` | `array` | Yes |  |
| `comment_ids` | `array` | No |  |
| `comments` | `array` | Yes |  |
| `commit_ids` | `array` | No |  |
| `commits` | `array` | Yes |  |
| `completed` | `bool` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `completed_at_override` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `custom_fields` | `array` | No |  |
| `custom_fields_add` | `array` | No |  |
| `custom_fields_remove` | `array` | No |  |
| `cycle_time` | `int` | No |  |
| `deadline` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `epic_id` | `int` | Yes |  |
| `estimate` | `int` | Yes |  |
| `external_id` | `string` | Yes |  |
| `external_links` | `array` | Yes |  |
| `external_links_add` | `array` | No |  |
| `external_links_remove` | `array` | No |  |
| `file_ids` | `array` | No |  |
| `file_ids_add` | `array` | No |  |
| `file_ids_remove` | `array` | No |  |
| `files` | `array` | Yes |  |
| `follower_ids` | `array` | Yes |  |
| `follower_ids_add` | `array` | No |  |
| `follower_ids_remove` | `array` | No |  |
| `formatted_vcs_branch_name` | `string` | No |  |
| `global_id` | `string` | Yes |  |
| `group_id` | `string` | Yes |  |
| `group_mention_ids` | `array` | Yes |  |
| `id` | `int` | Yes |  |
| `iteration_id` | `int` | Yes |  |
| `label_ids` | `array` | Yes |  |
| `labels` | `array` | Yes |  |
| `labels_add` | `array` | No |  |
| `labels_remove` | `array` | No |  |
| `lead_time` | `int` | No |  |
| `linked_file_ids` | `array` | No |  |
| `linked_file_ids_add` | `array` | No |  |
| `linked_file_ids_remove` | `array` | No |  |
| `linked_files` | `array` | Yes |  |
| `member_mention_ids` | `array` | Yes |  |
| `mention_ids` | `array` | Yes |  |
| `move_to` | `string` | No |  |
| `moved_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `num_tasks_completed` | `int` | No |  |
| `owner_ids` | `array` | Yes |  |
| `owner_ids_add` | `array` | No |  |
| `owner_ids_remove` | `array` | No |  |
| `parent_story_id` | `int` | No |  |
| `position` | `int` | Yes |  |
| `previous_iteration_ids` | `array` | Yes |  |
| `project_id` | `int` | Yes |  |
| `pull_request_ids` | `array` | No |  |
| `pull_requests` | `array` | Yes |  |
| `requested_by_id` | `string` | Yes |  |
| `source_task_id` | `int` | No |  |
| `started` | `bool` | Yes |  |
| `started_at` | `string` | Yes |  |
| `started_at_override` | `string` | Yes |  |
| `stats` | `array` | Yes |  |
| `story_links` | `array` | Yes |  |
| `story_template_id` | `string` | Yes |  |
| `story_type` | `string` | Yes |  |
| `sub_task_story_ids` | `array` | No |  |
| `sub_tasks` | `array` | No |  |
| `synced_item` | `array` | Yes |  |
| `task_ids` | `array` | No |  |
| `tasks` | `array` | Yes |  |
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
| `app_url` | `string` | Yes |  |
| `author_id` | `string` | Yes |  |
| `blocker` | `bool` | No |  |
| `created_at` | `string` | Yes |  |
| `deleted` | `bool` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `group_mention_ids` | `array` | Yes |  |
| `id` | `int` | Yes |  |
| `linked_to_slack` | `bool` | Yes |  |
| `member_mention_ids` | `array` | Yes |  |
| `mention_ids` | `array` | Yes |  |
| `parent_id` | `int` | No |  |
| `position` | `int` | Yes |  |
| `reactions` | `array` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->StoryComment()->create([
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
| `emoji` | `string` | Yes |  |

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
| `after_id` | `int` | No |  |
| `archived` | `bool` | No |  |
| `before_id` | `int` | No |  |
| `completed_at_end` | `string` | No |  |
| `completed_at_start` | `string` | No |  |
| `created_at_end` | `string` | No |  |
| `created_at_start` | `string` | No |  |
| `custom_fields_add` | `array` | No |  |
| `custom_fields_remove` | `array` | No |  |
| `deadline` | `string` | No |  |
| `deadline_end` | `string` | No |  |
| `deadline_start` | `string` | No |  |
| `epic_id` | `int` | No |  |
| `epic_ids` | `array` | No |  |
| `estimate` | `int` | No |  |
| `external_id` | `string` | No |  |
| `external_links` | `array` | No |  |
| `follower_ids_add` | `array` | No |  |
| `follower_ids_remove` | `array` | No |  |
| `group_id` | `string` | No |  |
| `group_ids` | `array` | No |  |
| `includes_description` | `bool` | No |  |
| `iteration_id` | `int` | No |  |
| `iteration_ids` | `array` | No |  |
| `label_ids` | `array` | No |  |
| `label_name` | `string` | No |  |
| `labels_add` | `array` | No |  |
| `labels_remove` | `array` | No |  |
| `move_to` | `string` | No |  |
| `owner_id` | `string` | No |  |
| `owner_ids` | `array` | No |  |
| `owner_ids_add` | `array` | No |  |
| `owner_ids_remove` | `array` | No |  |
| `project_id` | `int` | No |  |
| `project_ids` | `array` | No |  |
| `requested_by_id` | `string` | No |  |
| `stories` | `array` | Yes |  |
| `story_ids` | `array` | Yes |  |
| `story_type` | `string` | No |  |
| `updated_at_end` | `string` | No |  |
| `updated_at_start` | `string` | No |  |
| `workflow_state_id` | `int` | No |  |
| `workflow_state_types` | `array` | No |  |

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
| `after_id` | `int` | No |  |
| `before_id` | `int` | No |  |
| `complete` | `bool` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `global_id` | `string` | Yes |  |
| `group_mention_ids` | `array` | Yes |  |
| `id` | `int` | Yes |  |
| `member_mention_ids` | `array` | Yes |  |
| `mention_ids` | `array` | Yes |  |
| `owner_ids` | `array` | Yes |  |
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
| `app_url` | `string` | Yes |  |
| `author_id` | `string` | Yes |  |
| `comments` | `array` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deleted` | `bool` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `group_mention_ids` | `array` | Yes |  |
| `id` | `int` | Yes |  |
| `member_mention_ids` | `array` | Yes |  |
| `mention_ids` | `array` | Yes |  |
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
| `content_type` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `filename` | `string` | Yes |  |
| `group_mention_ids` | `array` | Yes |  |
| `id` | `int` | Yes |  |
| `member_mention_ids` | `array` | Yes |  |
| `mention_ids` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `size` | `int` | Yes |  |
| `story_ids` | `array` | Yes |  |
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
| `auto_assign_owner` | `bool` | Yes |  |
| `created_at` | `string` | Yes |  |
| `default_state_id` | `int` | Yes |  |
| `description` | `string` | Yes |  |
| `entity_type` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `name` | `string` | Yes |  |
| `project_ids` | `array` | Yes |  |
| `states` | `array` | Yes |  |
| `team_id` | `int` | Yes |  |
| `updated_at` | `string` | Yes |  |

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


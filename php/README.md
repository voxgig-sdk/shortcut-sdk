# Shortcut PHP SDK



The PHP SDK for the Shortcut API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Bulk()` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/shortcut-sdk/releases](https://github.com/voxgig-sdk/shortcut-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'shortcut_sdk.php';

$client = new ShortcutSDK([
    "apikey" => getenv("SHORTCUT_APIKEY"),
]);
```

### 3. Load a health

Health is nested under epic, so provide the `epic_id`.

```php
try {
    // load() returns the bare Health record (throws on error).
    $health = $client->Health()->load(["epic_id" => 1]);
    print_r($health);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// Remove
$client->Bulk()->remove();
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $iterations = $client->Iteration()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = ShortcutSDK::test([
    "entity" => ["iteration" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the bare mock record (throws on error).
$iteration = $client->Iteration()->list();
print_r($iteration);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new ShortcutSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
SHORTCUT_TEST_LIVE=TRUE
SHORTCUT_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### ShortcutSDK

```php
require_once 'shortcut_sdk.php';
$client = new ShortcutSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = ShortcutSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### ShortcutSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Bulk` | `($data): BulkEntity` | Create a Bulk entity instance. |
| `Category` | `($data): CategoryEntity` | Create a Category entity instance. |
| `Comment` | `($data): CommentEntity` | Create a Comment entity instance. |
| `CustomField` | `($data): CustomFieldEntity` | Create a CustomField entity instance. |
| `Disable` | `($data): DisableEntity` | Create a Disable entity instance. |
| `DocSlim` | `($data): DocSlimEntity` | Create a DocSlim entity instance. |
| `Enable` | `($data): EnableEntity` | Create an Enable entity instance. |
| `EntityTemplate` | `($data): EntityTemplateEntity` | Create an EntityTemplate entity instance. |
| `Epic` | `($data): EpicEntity` | Create an Epic entity instance. |
| `EpicPaginatedResult` | `($data): EpicPaginatedResultEntity` | Create an EpicPaginatedResult entity instance. |
| `EpicUnlinkProductboard` | `($data): EpicUnlinkProductboardEntity` | Create an EpicUnlinkProductboard entity instance. |
| `EpicWorkflow` | `($data): EpicWorkflowEntity` | Create an EpicWorkflow entity instance. |
| `Group` | `($data): GroupEntity` | Create a Group entity instance. |
| `Health` | `($data): HealthEntity` | Create a Health entity instance. |
| `History` | `($data): HistoryEntity` | Create a History entity instance. |
| `Iteration` | `($data): IterationEntity` | Create an Iteration entity instance. |
| `KeyResult` | `($data): KeyResultEntity` | Create a KeyResult entity instance. |
| `Label` | `($data): LabelEntity` | Create a Label entity instance. |
| `LinkedFile` | `($data): LinkedFileEntity` | Create a LinkedFile entity instance. |
| `Member` | `($data): MemberEntity` | Create a Member entity instance. |
| `Milestone` | `($data): MilestoneEntity` | Create a Milestone entity instance. |
| `Objectif` | `($data): ObjectifEntity` | Create an Objectif entity instance. |
| `Objective` | `($data): ObjectiveEntity` | Create an Objective entity instance. |
| `Project` | `($data): ProjectEntity` | Create a Project entity instance. |
| `Repository` | `($data): RepositoryEntity` | Create a Repository entity instance. |
| `Search` | `($data): SearchEntity` | Create a Search entity instance. |
| `Story` | `($data): StoryEntity` | Create a Story entity instance. |
| `StoryComment` | `($data): StoryCommentEntity` | Create a StoryComment entity instance. |
| `StoryLink` | `($data): StoryLinkEntity` | Create a StoryLink entity instance. |
| `StoryReaction` | `($data): StoryReactionEntity` | Create a StoryReaction entity instance. |
| `StorySlim` | `($data): StorySlimEntity` | Create a StorySlim entity instance. |
| `Task` | `($data): TaskEntity` | Create a Task entity instance. |
| `ThreadedComment` | `($data): ThreadedCommentEntity` | Create a ThreadedComment entity instance. |
| `UploadedFile` | `($data): UploadedFileEntity` | Create an UploadedFile entity instance. |
| `Webhook` | `($data): WebhookEntity` | Create a Webhook entity instance. |
| `Workflow` | `($data): WorkflowEntity` | Create a Workflow entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Bulk

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v3/stories/bulk`

#### Category

| Field | Description |
| --- | --- |
| `archived` |  |
| `color` |  |
| `created_at` |  |
| `entity_type` |  |
| `external_id` |  |
| `global_id` |  |
| `id` |  |
| `name` |  |
| `type` |  |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/categories`

#### Comment

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v3/stories/{story-public-id}/comments/{comment-public-id}`

#### CustomField

| Field | Description |
| --- | --- |
| `after_id` |  |
| `before_id` |  |
| `canonical_name` |  |
| `created_at` |  |
| `description` |  |
| `enabled` |  |
| `entity_type` |  |
| `field_type` |  |
| `fixed_position` |  |
| `icon_set_identifier` |  |
| `id` |  |
| `name` |  |
| `position` |  |
| `story_types` |  |
| `updated_at` |  |
| `values` |  |

Operations: List, Load, Remove, Update.

API path: `/api/v3/custom-fields`

#### Disable

| Field | Description |
| --- | --- |

Operations: Update.

API path: `/api/v3/entity-templates/disable`

#### DocSlim

| Field | Description |
| --- | --- |
| `app_url` |  |
| `content` |  |
| `id` |  |
| `title` |  |

Operations: Create, List.

API path: `/api/v3/documents`

#### Enable

| Field | Description |
| --- | --- |

Operations: Update.

API path: `/api/v3/entity-templates/enable`

#### EntityTemplate

| Field | Description |
| --- | --- |
| `author_id` |  |
| `created_at` |  |
| `custom_fields` |  |
| `deadline` |  |
| `description` |  |
| `entity_type` |  |
| `epic_id` |  |
| `estimate` |  |
| `external_links` |  |
| `files` |  |
| `follower_ids` |  |
| `group_id` |  |
| `id` |  |
| `iteration_id` |  |
| `label_ids` |  |
| `labels` |  |
| `last_used_at` |  |
| `linked_files` |  |
| `name` |  |
| `owner_ids` |  |
| `project_id` |  |
| `story_contents` |  |
| `story_type` |  |
| `sub_tasks` |  |
| `tasks` |  |
| `updated_at` |  |
| `workflow_state_id` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/entity-templates`

#### Epic

| Field | Description |
| --- | --- |
| `after_id` |  |
| `app_url` |  |
| `archived` |  |
| `associated_groups` |  |
| `before_id` |  |
| `comments` |  |
| `completed` |  |
| `completed_at` |  |
| `completed_at_override` |  |
| `converted_from_story_id` |  |
| `created_at` |  |
| `deadline` |  |
| `description` |  |
| `entity_type` |  |
| `epic_state_id` |  |
| `external_id` |  |
| `follower_ids` |  |
| `global_id` |  |
| `group_id` |  |
| `group_ids` |  |
| `group_mention_ids` |  |
| `health` |  |
| `id` |  |
| `label_ids` |  |
| `labels` |  |
| `member_mention_ids` |  |
| `mention_ids` |  |
| `milestone_id` |  |
| `name` |  |
| `objective_ids` |  |
| `owner_ids` |  |
| `planned_start_date` |  |
| `position` |  |
| `productboard_id` |  |
| `productboard_name` |  |
| `productboard_plugin_id` |  |
| `productboard_url` |  |
| `project_ids` |  |
| `requested_by_id` |  |
| `started` |  |
| `started_at` |  |
| `started_at_override` |  |
| `state` |  |
| `stats` |  |
| `stories_without_projects` |  |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/epics`

#### EpicPaginatedResult

| Field | Description |
| --- | --- |
| `app_url` |  |
| `archived` |  |
| `associated_groups` |  |
| `completed` |  |
| `completed_at` |  |
| `completed_at_override` |  |
| `created_at` |  |
| `deadline` |  |
| `description` |  |
| `entity_type` |  |
| `epic_state_id` |  |
| `external_id` |  |
| `follower_ids` |  |
| `global_id` |  |
| `group_id` |  |
| `group_ids` |  |
| `group_mention_ids` |  |
| `id` |  |
| `label_ids` |  |
| `labels` |  |
| `member_mention_ids` |  |
| `mention_ids` |  |
| `milestone_id` |  |
| `name` |  |
| `objective_ids` |  |
| `owner_ids` |  |
| `planned_start_date` |  |
| `position` |  |
| `productboard_id` |  |
| `productboard_name` |  |
| `productboard_plugin_id` |  |
| `productboard_url` |  |
| `project_ids` |  |
| `requested_by_id` |  |
| `started` |  |
| `started_at` |  |
| `started_at_override` |  |
| `state` |  |
| `stats` |  |
| `stories_without_projects` |  |
| `updated_at` |  |

Operations: List.

API path: `/api/v3/epics/paginated`

#### EpicUnlinkProductboard

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/api/v3/epics/{epic-public-id}/unlink-productboard`

#### EpicWorkflow

| Field | Description |
| --- | --- |
| `color` |  |
| `created_at` |  |
| `description` |  |
| `entity_type` |  |
| `global_id` |  |
| `id` |  |
| `name` |  |
| `position` |  |
| `type` |  |
| `updated_at` |  |

Operations: List.

API path: `/api/v3/epic-workflow`

#### Group

| Field | Description |
| --- | --- |
| `app_url` |  |
| `archived` |  |
| `color` |  |
| `color_key` |  |
| `created_at` |  |
| `default_workflow_id` |  |
| `description` |  |
| `display_icon` |  |
| `display_icon_id` |  |
| `entity_type` |  |
| `global_id` |  |
| `id` |  |
| `member_ids` |  |
| `mention_name` |  |
| `name` |  |
| `num_epics_started` |  |
| `num_stories` |  |
| `num_stories_backlog` |  |
| `num_stories_started` |  |
| `updated_at` |  |
| `workflow_ids` |  |

Operations: Create, List, Load, Update.

API path: `/api/v3/groups`

#### Health

| Field | Description |
| --- | --- |
| `author_id` |  |
| `created_at` |  |
| `entity_type` |  |
| `epic_id` |  |
| `id` |  |
| `objective_id` |  |
| `status` |  |
| `text` |  |
| `updated_at` |  |

Operations: Create, List, Load, Update.

API path: `/api/v3/epics/{epic-public-id}/health`

#### History

| Field | Description |
| --- | --- |
| `actions` |  |
| `actor_name` |  |
| `automation_id` |  |
| `changed_at` |  |
| `external_id` |  |
| `id` |  |
| `member_id` |  |
| `primary_id` |  |
| `references` |  |
| `version` |  |
| `webhook_id` |  |

Operations: List.

API path: `/api/v3/stories/{story-public-id}/history`

#### Iteration

| Field | Description |
| --- | --- |
| `app_url` |  |
| `associated_groups` |  |
| `created_at` |  |
| `description` |  |
| `end_date` |  |
| `entity_type` |  |
| `follower_ids` |  |
| `global_id` |  |
| `group_ids` |  |
| `group_mention_ids` |  |
| `id` |  |
| `label_ids` |  |
| `labels` |  |
| `member_mention_ids` |  |
| `mention_ids` |  |
| `name` |  |
| `start_date` |  |
| `stats` |  |
| `status` |  |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/iterations`

#### KeyResult

| Field | Description |
| --- | --- |
| `current_observed_value` |  |
| `current_target_value` |  |
| `id` |  |
| `initial_observed_value` |  |
| `name` |  |
| `objective_id` |  |
| `observed_value` |  |
| `progress` |  |
| `target_value` |  |
| `type` |  |

Operations: Load, Update.

API path: `/api/v3/key-results/{key-result-public-id}`

#### Label

| Field | Description |
| --- | --- |
| `app_url` |  |
| `archived` |  |
| `color` |  |
| `created_at` |  |
| `description` |  |
| `entity_type` |  |
| `external_id` |  |
| `global_id` |  |
| `id` |  |
| `name` |  |
| `num_epics` |  |
| `num_epics_completed` |  |
| `num_epics_in_progress` |  |
| `num_epics_total` |  |
| `num_epics_unstarted` |  |
| `num_points_backlog` |  |
| `num_points_completed` |  |
| `num_points_in_progress` |  |
| `num_points_total` |  |
| `num_points_unstarted` |  |
| `num_related_documents` |  |
| `num_stories_backlog` |  |
| `num_stories_completed` |  |
| `num_stories_in_progress` |  |
| `num_stories_total` |  |
| `num_stories_unestimated` |  |
| `num_stories_unstarted` |  |
| `stats` |  |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/labels`

#### LinkedFile

| Field | Description |
| --- | --- |
| `content_type` |  |
| `created_at` |  |
| `description` |  |
| `entity_type` |  |
| `group_mention_ids` |  |
| `id` |  |
| `member_mention_ids` |  |
| `mention_ids` |  |
| `name` |  |
| `size` |  |
| `story_id` |  |
| `story_ids` |  |
| `thumbnail_url` |  |
| `type` |  |
| `updated_at` |  |
| `uploader_id` |  |
| `url` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/linked-files`

#### Member

| Field | Description |
| --- | --- |
| `created_at` |  |
| `created_without_invite` |  |
| `disabled` |  |
| `entity_type` |  |
| `global_id` |  |
| `group_ids` |  |
| `id` |  |
| `installation_id` |  |
| `is_owner` |  |
| `mention_name` |  |
| `name` |  |
| `organization2` |  |
| `profile` |  |
| `replaced_by` |  |
| `role` |  |
| `state` |  |
| `updated_at` |  |
| `workspace2` |  |

Operations: List, Load.

API path: `/api/v3/members`

#### Milestone

| Field | Description |
| --- | --- |
| `after_id` |  |
| `app_url` |  |
| `archived` |  |
| `before_id` |  |
| `categories` |  |
| `completed` |  |
| `completed_at` |  |
| `completed_at_override` |  |
| `created_at` |  |
| `description` |  |
| `entity_type` |  |
| `global_id` |  |
| `id` |  |
| `key_result_ids` |  |
| `name` |  |
| `position` |  |
| `started` |  |
| `started_at` |  |
| `started_at_override` |  |
| `state` |  |
| `stats` |  |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/milestones`

#### Objectif

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v3/objectives/{objective-public-id}`

#### Objective

| Field | Description |
| --- | --- |
| `after_id` |  |
| `app_url` |  |
| `archived` |  |
| `before_id` |  |
| `categories` |  |
| `completed` |  |
| `completed_at` |  |
| `completed_at_override` |  |
| `created_at` |  |
| `description` |  |
| `entity_type` |  |
| `global_id` |  |
| `id` |  |
| `key_result_ids` |  |
| `name` |  |
| `position` |  |
| `started` |  |
| `started_at` |  |
| `started_at_override` |  |
| `state` |  |
| `stats` |  |
| `updated_at` |  |

Operations: Create, List, Load, Update.

API path: `/api/v3/objectives`

#### Project

| Field | Description |
| --- | --- |
| `abbreviation` |  |
| `app_url` |  |
| `archived` |  |
| `color` |  |
| `created_at` |  |
| `days_to_thermometer` |  |
| `description` |  |
| `entity_type` |  |
| `external_id` |  |
| `follower_ids` |  |
| `global_id` |  |
| `id` |  |
| `iteration_length` |  |
| `name` |  |
| `show_thermometer` |  |
| `start_time` |  |
| `stats` |  |
| `team_id` |  |
| `updated_at` |  |
| `workflow_id` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/projects`

#### Repository

| Field | Description |
| --- | --- |
| `created_at` |  |
| `entity_type` |  |
| `external_id` |  |
| `full_name` |  |
| `id` |  |
| `name` |  |
| `type` |  |
| `updated_at` |  |
| `url` |  |

Operations: List, Load.

API path: `/api/v3/repositories`

#### Search

| Field | Description |
| --- | --- |
| `epics` |  |
| `iterations` |  |
| `milestones` |  |
| `stories` |  |

Operations: Load.

API path: `/api/v3/search`

#### Story

| Field | Description |
| --- | --- |
| `after_id` |  |
| `app_url` |  |
| `archived` |  |
| `before_id` |  |
| `blocked` |  |
| `blocker` |  |
| `branch_ids` |  |
| `branches` |  |
| `comment_ids` |  |
| `comments` |  |
| `commit_ids` |  |
| `commits` |  |
| `completed` |  |
| `completed_at` |  |
| `completed_at_override` |  |
| `created_at` |  |
| `custom_fields` |  |
| `custom_fields_add` |  |
| `custom_fields_remove` |  |
| `cycle_time` |  |
| `deadline` |  |
| `description` |  |
| `entity_type` |  |
| `epic_id` |  |
| `estimate` |  |
| `external_id` |  |
| `external_links` |  |
| `external_links_add` |  |
| `external_links_remove` |  |
| `file_ids` |  |
| `file_ids_add` |  |
| `file_ids_remove` |  |
| `files` |  |
| `follower_ids` |  |
| `follower_ids_add` |  |
| `follower_ids_remove` |  |
| `formatted_vcs_branch_name` |  |
| `global_id` |  |
| `group_id` |  |
| `group_mention_ids` |  |
| `id` |  |
| `iteration_id` |  |
| `label_ids` |  |
| `labels` |  |
| `labels_add` |  |
| `labels_remove` |  |
| `lead_time` |  |
| `linked_file_ids` |  |
| `linked_file_ids_add` |  |
| `linked_file_ids_remove` |  |
| `linked_files` |  |
| `member_mention_ids` |  |
| `mention_ids` |  |
| `move_to` |  |
| `moved_at` |  |
| `name` |  |
| `num_tasks_completed` |  |
| `owner_ids` |  |
| `owner_ids_add` |  |
| `owner_ids_remove` |  |
| `parent_story_id` |  |
| `position` |  |
| `previous_iteration_ids` |  |
| `project_id` |  |
| `pull_request_ids` |  |
| `pull_requests` |  |
| `requested_by_id` |  |
| `source_task_id` |  |
| `started` |  |
| `started_at` |  |
| `started_at_override` |  |
| `stats` |  |
| `story_links` |  |
| `story_template_id` |  |
| `story_type` |  |
| `sub_task_story_ids` |  |
| `sub_tasks` |  |
| `synced_item` |  |
| `task_ids` |  |
| `tasks` |  |
| `updated_at` |  |
| `workflow_id` |  |
| `workflow_state_id` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/stories`

#### StoryComment

| Field | Description |
| --- | --- |
| `app_url` |  |
| `author_id` |  |
| `blocker` |  |
| `created_at` |  |
| `deleted` |  |
| `entity_type` |  |
| `external_id` |  |
| `group_mention_ids` |  |
| `id` |  |
| `linked_to_slack` |  |
| `member_mention_ids` |  |
| `mention_ids` |  |
| `parent_id` |  |
| `position` |  |
| `reactions` |  |
| `story_id` |  |
| `text` |  |
| `unblocks_parent` |  |
| `updated_at` |  |

Operations: Create, List, Load, Update.

API path: `/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack`

#### StoryLink

| Field | Description |
| --- | --- |
| `created_at` |  |
| `entity_type` |  |
| `id` |  |
| `object_id` |  |
| `subject_id` |  |
| `subject_workflow_state_id` |  |
| `updated_at` |  |
| `verb` |  |

Operations: Create, Load, Remove, Update.

API path: `/api/v3/story-links`

#### StoryReaction

| Field | Description |
| --- | --- |
| `emoji` |  |

Operations: Create, Remove.

API path: `/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions`

#### StorySlim

| Field | Description |
| --- | --- |
| `after_id` |  |
| `archived` |  |
| `before_id` |  |
| `completed_at_end` |  |
| `completed_at_start` |  |
| `created_at_end` |  |
| `created_at_start` |  |
| `custom_fields_add` |  |
| `custom_fields_remove` |  |
| `deadline` |  |
| `deadline_end` |  |
| `deadline_start` |  |
| `epic_id` |  |
| `epic_ids` |  |
| `estimate` |  |
| `external_id` |  |
| `external_links` |  |
| `follower_ids_add` |  |
| `follower_ids_remove` |  |
| `group_id` |  |
| `group_ids` |  |
| `includes_description` |  |
| `iteration_id` |  |
| `iteration_ids` |  |
| `label_ids` |  |
| `label_name` |  |
| `labels_add` |  |
| `labels_remove` |  |
| `move_to` |  |
| `owner_id` |  |
| `owner_ids` |  |
| `owner_ids_add` |  |
| `owner_ids_remove` |  |
| `project_id` |  |
| `project_ids` |  |
| `requested_by_id` |  |
| `stories` |  |
| `story_ids` |  |
| `story_type` |  |
| `updated_at_end` |  |
| `updated_at_start` |  |
| `workflow_state_id` |  |
| `workflow_state_types` |  |

Operations: Create, Update.

API path: `/api/v3/stories/bulk`

#### Task

| Field | Description |
| --- | --- |
| `after_id` |  |
| `before_id` |  |
| `complete` |  |
| `completed_at` |  |
| `created_at` |  |
| `description` |  |
| `entity_type` |  |
| `external_id` |  |
| `global_id` |  |
| `group_mention_ids` |  |
| `id` |  |
| `member_mention_ids` |  |
| `mention_ids` |  |
| `owner_ids` |  |
| `position` |  |
| `story_id` |  |
| `updated_at` |  |

Operations: Create, Load, Remove, Update.

API path: `/api/v3/stories/{story-public-id}/tasks`

#### ThreadedComment

| Field | Description |
| --- | --- |
| `app_url` |  |
| `author_id` |  |
| `comments` |  |
| `created_at` |  |
| `deleted` |  |
| `entity_type` |  |
| `external_id` |  |
| `group_mention_ids` |  |
| `id` |  |
| `member_mention_ids` |  |
| `mention_ids` |  |
| `text` |  |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/epics/{epic-public-id}/comments/{comment-public-id}`

#### UploadedFile

| Field | Description |
| --- | --- |
| `content_type` |  |
| `created_at` |  |
| `description` |  |
| `entity_type` |  |
| `external_id` |  |
| `filename` |  |
| `group_mention_ids` |  |
| `id` |  |
| `member_mention_ids` |  |
| `mention_ids` |  |
| `name` |  |
| `size` |  |
| `story_ids` |  |
| `thumbnail_url` |  |
| `updated_at` |  |
| `uploader_id` |  |
| `url` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/files`

#### Webhook

| Field | Description |
| --- | --- |
| `secret` |  |
| `webhook_url` |  |

Operations: Create, Load, Remove.

API path: `/api/v3/integrations/webhook`

#### Workflow

| Field | Description |
| --- | --- |
| `auto_assign_owner` |  |
| `created_at` |  |
| `default_state_id` |  |
| `description` |  |
| `entity_type` |  |
| `id` |  |
| `name` |  |
| `project_ids` |  |
| `states` |  |
| `team_id` |  |
| `updated_at` |  |

Operations: List, Load.

API path: `/api/v3/workflows`



## Entities


### Bulk

Create an instance: `$bulk = $client->Bulk();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Category

Create an instance: `$category = $client->Category();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` |  |
| `color` | `string` |  |
| `created_at` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `global_id` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare Category record (throws on error).
$category = $client->Category()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Category records (throws on error).
$categorys = $client->Category()->list();
```

#### Example: Create

```php
$category = $client->Category()->create([
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


### Comment

Create an instance: `$comment = $client->Comment();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CustomField

Create an instance: `$custom_field = $client->CustomField();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `string` |  |
| `before_id` | `string` |  |
| `canonical_name` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `enabled` | `bool` |  |
| `entity_type` | `string` |  |
| `field_type` | `string` |  |
| `fixed_position` | `bool` |  |
| `icon_set_identifier` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `position` | `int` |  |
| `story_types` | `array` |  |
| `updated_at` | `string` |  |
| `values` | `array` |  |

#### Example: Load

```php
// load() returns the bare CustomField record (throws on error).
$custom_field = $client->CustomField()->load(["id" => "custom_field_id"]);
```

#### Example: List

```php
// list() returns an array of CustomField records (throws on error).
$custom_fields = $client->CustomField()->list();
```


### Disable

Create an instance: `$disable = $client->Disable();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### DocSlim

Create an instance: `$doc_slim = $client->DocSlim();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` |  |
| `content` | `string` |  |
| `id` | `string` |  |
| `title` | `string` |  |

#### Example: List

```php
// list() returns an array of DocSlim records (throws on error).
$doc_slims = $client->DocSlim()->list();
```

#### Example: Create

```php
$doc_slim = $client->DocSlim()->create([
    "app_url" => null, // string
    "content" => null, // string
    "id" => null, // string
    "title" => null, // string
]);
```


### Enable

Create an instance: `$enable = $client->Enable();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### EntityTemplate

Create an instance: `$entity_template = $client->EntityTemplate();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_id` | `string` |  |
| `created_at` | `string` |  |
| `custom_fields` | `array` |  |
| `deadline` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `epic_id` | `int` |  |
| `estimate` | `int` |  |
| `external_links` | `array` |  |
| `files` | `array` |  |
| `follower_ids` | `array` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `iteration_id` | `int` |  |
| `label_ids` | `array` |  |
| `labels` | `array` |  |
| `last_used_at` | `string` |  |
| `linked_files` | `array` |  |
| `name` | `string` |  |
| `owner_ids` | `array` |  |
| `project_id` | `int` |  |
| `story_contents` | `array` |  |
| `story_type` | `string` |  |
| `sub_tasks` | `array` |  |
| `tasks` | `array` |  |
| `updated_at` | `string` |  |
| `workflow_state_id` | `int` |  |

#### Example: Load

```php
// load() returns the bare EntityTemplate record (throws on error).
$entity_template = $client->EntityTemplate()->load(["id" => "entity_template_id"]);
```

#### Example: List

```php
// list() returns an array of EntityTemplate records (throws on error).
$entity_templates = $client->EntityTemplate()->list();
```

#### Example: Create

```php
$entity_template = $client->EntityTemplate()->create([
    "created_at" => null, // string
    "id" => null, // string
    "last_used_at" => null, // string
    "story_contents" => null, // array
    "updated_at" => null, // string
]);
```


### Epic

Create an instance: `$epic = $client->Epic();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `int` |  |
| `app_url` | `string` |  |
| `archived` | `bool` |  |
| `associated_groups` | `array` |  |
| `before_id` | `int` |  |
| `comments` | `array` |  |
| `completed` | `bool` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `converted_from_story_id` | `int` |  |
| `created_at` | `string` |  |
| `deadline` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `epic_state_id` | `int` |  |
| `external_id` | `string` |  |
| `follower_ids` | `array` |  |
| `global_id` | `string` |  |
| `group_id` | `string` |  |
| `group_ids` | `array` |  |
| `group_mention_ids` | `array` |  |
| `health` | `array` |  |
| `id` | `int` |  |
| `label_ids` | `array` |  |
| `labels` | `array` |  |
| `member_mention_ids` | `array` |  |
| `mention_ids` | `array` |  |
| `milestone_id` | `int` |  |
| `name` | `string` |  |
| `objective_ids` | `array` |  |
| `owner_ids` | `array` |  |
| `planned_start_date` | `string` |  |
| `position` | `int` |  |
| `productboard_id` | `string` |  |
| `productboard_name` | `string` |  |
| `productboard_plugin_id` | `string` |  |
| `productboard_url` | `string` |  |
| `project_ids` | `array` |  |
| `requested_by_id` | `string` |  |
| `started` | `bool` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `state` | `string` |  |
| `stats` | `array` |  |
| `stories_without_projects` | `int` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare Epic record (throws on error).
$epic = $client->Epic()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Epic records (throws on error).
$epics = $client->Epic()->list();
```

#### Example: Create

```php
$epic = $client->Epic()->create([
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


### EpicPaginatedResult

Create an instance: `$epic_paginated_result = $client->EpicPaginatedResult();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` |  |
| `archived` | `bool` |  |
| `associated_groups` | `array` |  |
| `completed` | `bool` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `created_at` | `string` |  |
| `deadline` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `epic_state_id` | `int` |  |
| `external_id` | `string` |  |
| `follower_ids` | `array` |  |
| `global_id` | `string` |  |
| `group_id` | `string` |  |
| `group_ids` | `array` |  |
| `group_mention_ids` | `array` |  |
| `id` | `int` |  |
| `label_ids` | `array` |  |
| `labels` | `array` |  |
| `member_mention_ids` | `array` |  |
| `mention_ids` | `array` |  |
| `milestone_id` | `int` |  |
| `name` | `string` |  |
| `objective_ids` | `array` |  |
| `owner_ids` | `array` |  |
| `planned_start_date` | `string` |  |
| `position` | `int` |  |
| `productboard_id` | `string` |  |
| `productboard_name` | `string` |  |
| `productboard_plugin_id` | `string` |  |
| `productboard_url` | `string` |  |
| `project_ids` | `array` |  |
| `requested_by_id` | `string` |  |
| `started` | `bool` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `state` | `string` |  |
| `stats` | `array` |  |
| `stories_without_projects` | `int` |  |
| `updated_at` | `string` |  |

#### Example: List

```php
// list() returns an array of EpicPaginatedResult records (throws on error).
$epic_paginated_results = $client->EpicPaginatedResult()->list();
```


### EpicUnlinkProductboard

Create an instance: `$epic_unlink_productboard = $client->EpicUnlinkProductboard();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$epic_unlink_productboard = $client->EpicUnlinkProductboard()->create([
    "id" => null, // int
]);
```


### EpicWorkflow

Create an instance: `$epic_workflow = $client->EpicWorkflow();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `color` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `global_id` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `position` | `int` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |

#### Example: List

```php
// list() returns an array of EpicWorkflow records (throws on error).
$epic_workflows = $client->EpicWorkflow()->list();
```


### Group

Create an instance: `$group = $client->Group();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` |  |
| `archived` | `bool` |  |
| `color` | `string` |  |
| `color_key` | `string` |  |
| `created_at` | `string` |  |
| `default_workflow_id` | `int` |  |
| `description` | `string` |  |
| `display_icon` | `array` |  |
| `display_icon_id` | `string` |  |
| `entity_type` | `string` |  |
| `global_id` | `string` |  |
| `id` | `string` |  |
| `member_ids` | `array` |  |
| `mention_name` | `string` |  |
| `name` | `string` |  |
| `num_epics_started` | `int` |  |
| `num_stories` | `int` |  |
| `num_stories_backlog` | `int` |  |
| `num_stories_started` | `int` |  |
| `updated_at` | `string` |  |
| `workflow_ids` | `array` |  |

#### Example: Load

```php
// load() returns the bare Group record (throws on error).
$group = $client->Group()->load(["id" => "group_id"]);
```

#### Example: List

```php
// list() returns an array of Group records (throws on error).
$groups = $client->Group()->list();
```

#### Example: Create

```php
$group = $client->Group()->create([
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


### Health

Create an instance: `$health = $client->Health();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_id` | `string` |  |
| `created_at` | `string` |  |
| `entity_type` | `string` |  |
| `epic_id` | `int` |  |
| `id` | `string` |  |
| `objective_id` | `int` |  |
| `status` | `string` |  |
| `text` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare Health record (throws on error).
$health = $client->Health()->load(["epic_id" => 1]);
```

#### Example: List

```php
// list() returns an array of Health records (throws on error).
$healths = $client->Health()->list();
```

#### Example: Create

```php
$health = $client->Health()->create([
    "epic_id" => null, // int
    "entity_type" => null, // string
    "id" => null, // string
    "status" => null, // string
]);
```


### History

Create an instance: `$history = $client->History();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `array` |  |
| `actor_name` | `string` |  |
| `automation_id` | `string` |  |
| `changed_at` | `string` |  |
| `external_id` | `string` |  |
| `id` | `string` |  |
| `member_id` | `string` |  |
| `primary_id` | `string` |  |
| `references` | `array` |  |
| `version` | `string` |  |
| `webhook_id` | `string` |  |

#### Example: List

```php
// list() returns an array of History records (throws on error).
$historys = $client->History()->list();
```


### Iteration

Create an instance: `$iteration = $client->Iteration();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` |  |
| `associated_groups` | `array` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `end_date` | `string` |  |
| `entity_type` | `string` |  |
| `follower_ids` | `array` |  |
| `global_id` | `string` |  |
| `group_ids` | `array` |  |
| `group_mention_ids` | `array` |  |
| `id` | `int` |  |
| `label_ids` | `array` |  |
| `labels` | `array` |  |
| `member_mention_ids` | `array` |  |
| `mention_ids` | `array` |  |
| `name` | `string` |  |
| `start_date` | `string` |  |
| `stats` | `array` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare Iteration record (throws on error).
$iteration = $client->Iteration()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Iteration records (throws on error).
$iterations = $client->Iteration()->list();
```

#### Example: Create

```php
$iteration = $client->Iteration()->create([
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


### KeyResult

Create an instance: `$key_result = $client->KeyResult();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_observed_value` | `array` |  |
| `current_target_value` | `array` |  |
| `id` | `string` |  |
| `initial_observed_value` | `array` |  |
| `name` | `string` |  |
| `objective_id` | `int` |  |
| `observed_value` | `array` |  |
| `progress` | `int` |  |
| `target_value` | `array` |  |
| `type` | `string` |  |

#### Example: Load

```php
// load() returns the bare KeyResult record (throws on error).
$key_result = $client->KeyResult()->load(["id" => "key_result_id"]);
```


### Label

Create an instance: `$label = $client->Label();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` |  |
| `archived` | `bool` |  |
| `color` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `global_id` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `num_epics` | `int` |  |
| `num_epics_completed` | `int` |  |
| `num_epics_in_progress` | `int` |  |
| `num_epics_total` | `int` |  |
| `num_epics_unstarted` | `int` |  |
| `num_points_backlog` | `int` |  |
| `num_points_completed` | `int` |  |
| `num_points_in_progress` | `int` |  |
| `num_points_total` | `int` |  |
| `num_points_unstarted` | `int` |  |
| `num_related_documents` | `int` |  |
| `num_stories_backlog` | `int` |  |
| `num_stories_completed` | `int` |  |
| `num_stories_in_progress` | `int` |  |
| `num_stories_total` | `int` |  |
| `num_stories_unestimated` | `int` |  |
| `num_stories_unstarted` | `int` |  |
| `stats` | `array` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare Label record (throws on error).
$label = $client->Label()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Label records (throws on error).
$labels = $client->Label()->list();
```

#### Example: Create

```php
$label = $client->Label()->create([
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


### LinkedFile

Create an instance: `$linked_file = $client->LinkedFile();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `group_mention_ids` | `array` |  |
| `id` | `int` |  |
| `member_mention_ids` | `array` |  |
| `mention_ids` | `array` |  |
| `name` | `string` |  |
| `size` | `int` |  |
| `story_id` | `int` |  |
| `story_ids` | `array` |  |
| `thumbnail_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `uploader_id` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the bare LinkedFile record (throws on error).
$linked_file = $client->LinkedFile()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of LinkedFile records (throws on error).
$linked_files = $client->LinkedFile()->list();
```

#### Example: Create

```php
$linked_file = $client->LinkedFile()->create([
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


### Member

Create an instance: `$member = $client->Member();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_without_invite` | `bool` |  |
| `disabled` | `bool` |  |
| `entity_type` | `string` |  |
| `global_id` | `string` |  |
| `group_ids` | `array` |  |
| `id` | `string` |  |
| `installation_id` | `string` |  |
| `is_owner` | `bool` |  |
| `mention_name` | `string` |  |
| `name` | `string` |  |
| `organization2` | `array` |  |
| `profile` | `array` |  |
| `replaced_by` | `string` |  |
| `role` | `string` |  |
| `state` | `string` |  |
| `updated_at` | `string` |  |
| `workspace2` | `array` |  |

#### Example: Load

```php
// load() returns the bare Member record (throws on error).
$member = $client->Member()->load(["id" => "member_id"]);
```

#### Example: List

```php
// list() returns an array of Member records (throws on error).
$members = $client->Member()->list();
```


### Milestone

Create an instance: `$milestone = $client->Milestone();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `int` |  |
| `app_url` | `string` |  |
| `archived` | `bool` |  |
| `before_id` | `int` |  |
| `categories` | `array` |  |
| `completed` | `bool` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `global_id` | `string` |  |
| `id` | `int` |  |
| `key_result_ids` | `array` |  |
| `name` | `string` |  |
| `position` | `int` |  |
| `started` | `bool` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `state` | `string` |  |
| `stats` | `array` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare Milestone record (throws on error).
$milestone = $client->Milestone()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Milestone records (throws on error).
$milestones = $client->Milestone()->list();
```

#### Example: Create

```php
$milestone = $client->Milestone()->create([
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


### Objectif

Create an instance: `$objectif = $client->Objectif();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Objective

Create an instance: `$objective = $client->Objective();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `int` |  |
| `app_url` | `string` |  |
| `archived` | `bool` |  |
| `before_id` | `int` |  |
| `categories` | `array` |  |
| `completed` | `bool` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `global_id` | `string` |  |
| `id` | `int` |  |
| `key_result_ids` | `array` |  |
| `name` | `string` |  |
| `position` | `int` |  |
| `started` | `bool` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `state` | `string` |  |
| `stats` | `array` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare Objective record (throws on error).
$objective = $client->Objective()->load(["objective_public_id" => 1]);
```

#### Example: List

```php
// list() returns an array of Objective records (throws on error).
$objectives = $client->Objective()->list();
```

#### Example: Create

```php
$objective = $client->Objective()->create([
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


### Project

Create an instance: `$project = $client->Project();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abbreviation` | `string` |  |
| `app_url` | `string` |  |
| `archived` | `bool` |  |
| `color` | `string` |  |
| `created_at` | `string` |  |
| `days_to_thermometer` | `int` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `follower_ids` | `array` |  |
| `global_id` | `string` |  |
| `id` | `int` |  |
| `iteration_length` | `int` |  |
| `name` | `string` |  |
| `show_thermometer` | `bool` |  |
| `start_time` | `string` |  |
| `stats` | `array` |  |
| `team_id` | `int` |  |
| `updated_at` | `string` |  |
| `workflow_id` | `int` |  |

#### Example: Load

```php
// load() returns the bare Project record (throws on error).
$project = $client->Project()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Project records (throws on error).
$projects = $client->Project()->list();
```

#### Example: Create

```php
$project = $client->Project()->create([
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


### Repository

Create an instance: `$repository = $client->Repository();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `full_name` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the bare Repository record (throws on error).
$repository = $client->Repository()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Repository records (throws on error).
$repositorys = $client->Repository()->list();
```


### Search

Create an instance: `$search = $client->Search();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `epics` | `array` |  |
| `iterations` | `array` |  |
| `milestones` | `array` |  |
| `stories` | `array` |  |

#### Example: Load

```php
// load() returns the bare Search record (throws on error).
$search = $client->Search()->load();
```


### Story

Create an instance: `$story = $client->Story();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `int` |  |
| `app_url` | `string` |  |
| `archived` | `bool` |  |
| `before_id` | `int` |  |
| `blocked` | `bool` |  |
| `blocker` | `bool` |  |
| `branch_ids` | `array` |  |
| `branches` | `array` |  |
| `comment_ids` | `array` |  |
| `comments` | `array` |  |
| `commit_ids` | `array` |  |
| `commits` | `array` |  |
| `completed` | `bool` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `created_at` | `string` |  |
| `custom_fields` | `array` |  |
| `custom_fields_add` | `array` |  |
| `custom_fields_remove` | `array` |  |
| `cycle_time` | `int` |  |
| `deadline` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `epic_id` | `int` |  |
| `estimate` | `int` |  |
| `external_id` | `string` |  |
| `external_links` | `array` |  |
| `external_links_add` | `array` |  |
| `external_links_remove` | `array` |  |
| `file_ids` | `array` |  |
| `file_ids_add` | `array` |  |
| `file_ids_remove` | `array` |  |
| `files` | `array` |  |
| `follower_ids` | `array` |  |
| `follower_ids_add` | `array` |  |
| `follower_ids_remove` | `array` |  |
| `formatted_vcs_branch_name` | `string` |  |
| `global_id` | `string` |  |
| `group_id` | `string` |  |
| `group_mention_ids` | `array` |  |
| `id` | `int` |  |
| `iteration_id` | `int` |  |
| `label_ids` | `array` |  |
| `labels` | `array` |  |
| `labels_add` | `array` |  |
| `labels_remove` | `array` |  |
| `lead_time` | `int` |  |
| `linked_file_ids` | `array` |  |
| `linked_file_ids_add` | `array` |  |
| `linked_file_ids_remove` | `array` |  |
| `linked_files` | `array` |  |
| `member_mention_ids` | `array` |  |
| `mention_ids` | `array` |  |
| `move_to` | `string` |  |
| `moved_at` | `string` |  |
| `name` | `string` |  |
| `num_tasks_completed` | `int` |  |
| `owner_ids` | `array` |  |
| `owner_ids_add` | `array` |  |
| `owner_ids_remove` | `array` |  |
| `parent_story_id` | `int` |  |
| `position` | `int` |  |
| `previous_iteration_ids` | `array` |  |
| `project_id` | `int` |  |
| `pull_request_ids` | `array` |  |
| `pull_requests` | `array` |  |
| `requested_by_id` | `string` |  |
| `source_task_id` | `int` |  |
| `started` | `bool` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `stats` | `array` |  |
| `story_links` | `array` |  |
| `story_template_id` | `string` |  |
| `story_type` | `string` |  |
| `sub_task_story_ids` | `array` |  |
| `sub_tasks` | `array` |  |
| `synced_item` | `array` |  |
| `task_ids` | `array` |  |
| `tasks` | `array` |  |
| `updated_at` | `string` |  |
| `workflow_id` | `int` |  |
| `workflow_state_id` | `int` |  |

#### Example: Load

```php
// load() returns the bare Story record (throws on error).
$story = $client->Story()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Story records (throws on error).
$storys = $client->Story()->list();
```

#### Example: Create

```php
$story = $client->Story()->create([
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


### StoryComment

Create an instance: `$story_comment = $client->StoryComment();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` |  |
| `author_id` | `string` |  |
| `blocker` | `bool` |  |
| `created_at` | `string` |  |
| `deleted` | `bool` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `group_mention_ids` | `array` |  |
| `id` | `int` |  |
| `linked_to_slack` | `bool` |  |
| `member_mention_ids` | `array` |  |
| `mention_ids` | `array` |  |
| `parent_id` | `int` |  |
| `position` | `int` |  |
| `reactions` | `array` |  |
| `story_id` | `int` |  |
| `text` | `string` |  |
| `unblocks_parent` | `bool` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare StoryComment record (throws on error).
$story_comment = $client->StoryComment()->load(["id" => 1, "story_id" => 1]);
```

#### Example: List

```php
// list() returns an array of StoryComment records (throws on error).
$story_comments = $client->StoryComment()->list();
```

#### Example: Create

```php
$story_comment = $client->StoryComment()->create([
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


### StoryLink

Create an instance: `$story_link = $client->StoryLink();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `entity_type` | `string` |  |
| `id` | `int` |  |
| `object_id` | `int` |  |
| `subject_id` | `int` |  |
| `subject_workflow_state_id` | `int` |  |
| `updated_at` | `string` |  |
| `verb` | `string` |  |

#### Example: Load

```php
// load() returns the bare StoryLink record (throws on error).
$story_link = $client->StoryLink()->load(["id" => 1]);
```

#### Example: Create

```php
$story_link = $client->StoryLink()->create([
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


### StoryReaction

Create an instance: `$story_reaction = $client->StoryReaction();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `emoji` | `string` |  |

#### Example: Create

```php
$story_reaction = $client->StoryReaction()->create([
    "comment_id" => null, // int
    "story_id" => null, // int
    "emoji" => null, // string
]);
```


### StorySlim

Create an instance: `$story_slim = $client->StorySlim();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `int` |  |
| `archived` | `bool` |  |
| `before_id` | `int` |  |
| `completed_at_end` | `string` |  |
| `completed_at_start` | `string` |  |
| `created_at_end` | `string` |  |
| `created_at_start` | `string` |  |
| `custom_fields_add` | `array` |  |
| `custom_fields_remove` | `array` |  |
| `deadline` | `string` |  |
| `deadline_end` | `string` |  |
| `deadline_start` | `string` |  |
| `epic_id` | `int` |  |
| `epic_ids` | `array` |  |
| `estimate` | `int` |  |
| `external_id` | `string` |  |
| `external_links` | `array` |  |
| `follower_ids_add` | `array` |  |
| `follower_ids_remove` | `array` |  |
| `group_id` | `string` |  |
| `group_ids` | `array` |  |
| `includes_description` | `bool` |  |
| `iteration_id` | `int` |  |
| `iteration_ids` | `array` |  |
| `label_ids` | `array` |  |
| `label_name` | `string` |  |
| `labels_add` | `array` |  |
| `labels_remove` | `array` |  |
| `move_to` | `string` |  |
| `owner_id` | `string` |  |
| `owner_ids` | `array` |  |
| `owner_ids_add` | `array` |  |
| `owner_ids_remove` | `array` |  |
| `project_id` | `int` |  |
| `project_ids` | `array` |  |
| `requested_by_id` | `string` |  |
| `stories` | `array` |  |
| `story_ids` | `array` |  |
| `story_type` | `string` |  |
| `updated_at_end` | `string` |  |
| `updated_at_start` | `string` |  |
| `workflow_state_id` | `int` |  |
| `workflow_state_types` | `array` |  |

#### Example: Create

```php
$story_slim = $client->StorySlim()->create([
    "stories" => null, // array
    "story_ids" => null, // array
]);
```


### Task

Create an instance: `$task = $client->Task();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `int` |  |
| `before_id` | `int` |  |
| `complete` | `bool` |  |
| `completed_at` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `global_id` | `string` |  |
| `group_mention_ids` | `array` |  |
| `id` | `int` |  |
| `member_mention_ids` | `array` |  |
| `mention_ids` | `array` |  |
| `owner_ids` | `array` |  |
| `position` | `int` |  |
| `story_id` | `int` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare Task record (throws on error).
$task = $client->Task()->load(["id" => 1, "story_id" => 1]);
```

#### Example: Create

```php
$task = $client->Task()->create([
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


### ThreadedComment

Create an instance: `$threaded_comment = $client->ThreadedComment();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` |  |
| `author_id` | `string` |  |
| `comments` | `array` |  |
| `created_at` | `string` |  |
| `deleted` | `bool` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `group_mention_ids` | `array` |  |
| `id` | `int` |  |
| `member_mention_ids` | `array` |  |
| `mention_ids` | `array` |  |
| `text` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare ThreadedComment record (throws on error).
$threaded_comment = $client->ThreadedComment()->load(["id" => 1, "epic_id" => 1]);
```

#### Example: List

```php
// list() returns an array of ThreadedComment records (throws on error).
$threaded_comments = $client->ThreadedComment()->list();
```

#### Example: Create

```php
$threaded_comment = $client->ThreadedComment()->create([
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


### UploadedFile

Create an instance: `$uploaded_file = $client->UploadedFile();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `filename` | `string` |  |
| `group_mention_ids` | `array` |  |
| `id` | `int` |  |
| `member_mention_ids` | `array` |  |
| `mention_ids` | `array` |  |
| `name` | `string` |  |
| `size` | `int` |  |
| `story_ids` | `array` |  |
| `thumbnail_url` | `string` |  |
| `updated_at` | `string` |  |
| `uploader_id` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the bare UploadedFile record (throws on error).
$uploaded_file = $client->UploadedFile()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of UploadedFile records (throws on error).
$uploaded_files = $client->UploadedFile()->list();
```

#### Example: Create

```php
$uploaded_file = $client->UploadedFile()->create([
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


### Webhook

Create an instance: `$webhook = $client->Webhook();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `secret` | `string` |  |
| `webhook_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare Webhook record (throws on error).
$webhook = $client->Webhook()->load(["id" => 1]);
```

#### Example: Create

```php
$webhook = $client->Webhook()->create([
    "webhook_url" => null, // string
]);
```


### Workflow

Create an instance: `$workflow = $client->Workflow();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_assign_owner` | `bool` |  |
| `created_at` | `string` |  |
| `default_state_id` | `int` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `project_ids` | `array` |  |
| `states` | `array` |  |
| `team_id` | `int` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare Workflow record (throws on error).
$workflow = $client->Workflow()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Workflow records (throws on error).
$workflows = $client->Workflow()->list();
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── shortcut_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`shortcut_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$iteration = $client->Iteration();
$iteration->list();

// $iteration->data_get() now returns the iteration data from the last list
// $iteration->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

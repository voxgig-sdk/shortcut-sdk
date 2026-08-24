# Shortcut Python SDK



The Python SDK for the Shortcut API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Bulk()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/shortcut-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from shortcut_sdk import ShortcutSDK

client = ShortcutSDK({
    "apikey": os.environ.get("SHORTCUT_APIKEY"),
})
```

### 3. Load a health

Health is nested under epic, so provide the `epic_id`.
`load()` returns the bare record (a `dict`) and raises on error.

```python
try:
    health = client.Health().load({"epic_id": 1})
    print(health)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Remove
client.Bulk().remove()
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    iterations = client.Iteration().list()
    print(iterations)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = ShortcutSDK.test()

# Entity ops return the bare record and raise on error.
iteration = client.Iteration().list()
# iteration contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = ShortcutSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
SHORTCUT_TEST_LIVE=TRUE
SHORTCUT_APIKEY=<your-key>
```

Then run:

```bash
cd py && pytest test/
```


## Reference

### ShortcutSDK

```python
from shortcut_sdk import ShortcutSDK

client = ShortcutSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = ShortcutSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### ShortcutSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Bulk` | `(data) -> BulkEntity` | Create a Bulk entity instance. |
| `Category` | `(data) -> CategoryEntity` | Create a Category entity instance. |
| `Comment` | `(data) -> CommentEntity` | Create a Comment entity instance. |
| `CustomField` | `(data) -> CustomFieldEntity` | Create a CustomField entity instance. |
| `Disable` | `(data) -> DisableEntity` | Create a Disable entity instance. |
| `DocSlim` | `(data) -> DocSlimEntity` | Create a DocSlim entity instance. |
| `Enable` | `(data) -> EnableEntity` | Create an Enable entity instance. |
| `EntityTemplate` | `(data) -> EntityTemplateEntity` | Create an EntityTemplate entity instance. |
| `Epic` | `(data) -> EpicEntity` | Create an Epic entity instance. |
| `EpicPaginatedResult` | `(data) -> EpicPaginatedResultEntity` | Create an EpicPaginatedResult entity instance. |
| `EpicUnlinkProductboard` | `(data) -> EpicUnlinkProductboardEntity` | Create an EpicUnlinkProductboard entity instance. |
| `EpicWorkflow` | `(data) -> EpicWorkflowEntity` | Create an EpicWorkflow entity instance. |
| `Group` | `(data) -> GroupEntity` | Create a Group entity instance. |
| `Health` | `(data) -> HealthEntity` | Create a Health entity instance. |
| `History` | `(data) -> HistoryEntity` | Create a History entity instance. |
| `Iteration` | `(data) -> IterationEntity` | Create an Iteration entity instance. |
| `KeyResult` | `(data) -> KeyResultEntity` | Create a KeyResult entity instance. |
| `Label` | `(data) -> LabelEntity` | Create a Label entity instance. |
| `LinkedFile` | `(data) -> LinkedFileEntity` | Create a LinkedFile entity instance. |
| `Member` | `(data) -> MemberEntity` | Create a Member entity instance. |
| `Milestone` | `(data) -> MilestoneEntity` | Create a Milestone entity instance. |
| `Objectif` | `(data) -> ObjectifEntity` | Create an Objectif entity instance. |
| `Objective` | `(data) -> ObjectiveEntity` | Create an Objective entity instance. |
| `Project` | `(data) -> ProjectEntity` | Create a Project entity instance. |
| `Repository` | `(data) -> RepositoryEntity` | Create a Repository entity instance. |
| `Search` | `(data) -> SearchEntity` | Create a Search entity instance. |
| `Story` | `(data) -> StoryEntity` | Create a Story entity instance. |
| `StoryComment` | `(data) -> StoryCommentEntity` | Create a StoryComment entity instance. |
| `StoryLink` | `(data) -> StoryLinkEntity` | Create a StoryLink entity instance. |
| `StoryReaction` | `(data) -> StoryReactionEntity` | Create a StoryReaction entity instance. |
| `StorySlim` | `(data) -> StorySlimEntity` | Create a StorySlim entity instance. |
| `Task` | `(data) -> TaskEntity` | Create a Task entity instance. |
| `ThreadedComment` | `(data) -> ThreadedCommentEntity` | Create a ThreadedComment entity instance. |
| `UploadedFile` | `(data) -> UploadedFileEntity` | Create an UploadedFile entity instance. |
| `Webhook` | `(data) -> WebhookEntity` | Create a Webhook entity instance. |
| `Workflow` | `(data) -> WorkflowEntity` | Create a Workflow entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the bare result data (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `bulk = client.Bulk()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Category

Create an instance: `category = client.Category()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` |  |
| `color` | `str` |  |
| `created_at` | `str` |  |
| `entity_type` | `str` |  |
| `external_id` | `str` |  |
| `global_id` | `str` |  |
| `id` | `int` |  |
| `name` | `str` |  |
| `type` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
category = client.Category().load({"id": 1})
```

#### Example: List

```python
categorys = client.Category().list()
```

#### Example: Create

```python
category = client.Category().create({
    "archived": True,  # bool
    "color": "example_color",  # str
    "created_at": "example_created_at",  # str
    "entity_type": "example_entity_type",  # str
    "external_id": "example_external_id",  # str
    "global_id": "example_global_id",  # str
    "id": 1,  # int
    "name": "example_name",  # str
    "type": "example_type",  # str
    "updated_at": "example_updated_at",  # str
})
```


### Comment

Create an instance: `comment = client.Comment()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CustomField

Create an instance: `custom_field = client.CustomField()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `str` |  |
| `before_id` | `str` |  |
| `canonical_name` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `enabled` | `bool` |  |
| `entity_type` | `str` |  |
| `field_type` | `str` |  |
| `fixed_position` | `bool` |  |
| `icon_set_identifier` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `position` | `int` |  |
| `story_types` | `list` |  |
| `updated_at` | `str` |  |
| `values` | `list` |  |

#### Example: Load

```python
custom_field = client.CustomField().load({"id": "custom_field_id"})
```

#### Example: List

```python
custom_fields = client.CustomField().list()
```


### Disable

Create an instance: `disable = client.Disable()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### DocSlim

Create an instance: `doc_slim = client.DocSlim()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `str` |  |
| `content` | `str` |  |
| `id` | `str` |  |
| `title` | `str` |  |

#### Example: List

```python
doc_slims = client.DocSlim().list()
```

#### Example: Create

```python
doc_slim = client.DocSlim().create({
    "app_url": "example_app_url",  # str
    "content": "example_content",  # str
    "id": "example_id",  # str
    "title": "example_title",  # str
})
```


### Enable

Create an instance: `enable = client.Enable()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### EntityTemplate

Create an instance: `entity_template = client.EntityTemplate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_id` | `str` |  |
| `created_at` | `str` |  |
| `custom_fields` | `list` |  |
| `deadline` | `str` |  |
| `description` | `str` |  |
| `entity_type` | `str` |  |
| `epic_id` | `int` |  |
| `estimate` | `int` |  |
| `external_links` | `list` |  |
| `files` | `list` |  |
| `follower_ids` | `list` |  |
| `group_id` | `str` |  |
| `id` | `str` |  |
| `iteration_id` | `int` |  |
| `label_ids` | `list` |  |
| `labels` | `list` |  |
| `last_used_at` | `str` |  |
| `linked_files` | `list` |  |
| `name` | `str` |  |
| `owner_ids` | `list` |  |
| `project_id` | `int` |  |
| `story_contents` | `dict` |  |
| `story_type` | `str` |  |
| `sub_tasks` | `list` |  |
| `tasks` | `list` |  |
| `updated_at` | `str` |  |
| `workflow_state_id` | `int` |  |

#### Example: Load

```python
entity_template = client.EntityTemplate().load({"id": "entity_template_id"})
```

#### Example: List

```python
entity_templates = client.EntityTemplate().list()
```

#### Example: Create

```python
entity_template = client.EntityTemplate().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "last_used_at": "example_last_used_at",  # str
    "story_contents": {},  # dict
    "updated_at": "example_updated_at",  # str
})
```


### Epic

Create an instance: `epic = client.Epic()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `int` |  |
| `app_url` | `str` |  |
| `archived` | `bool` |  |
| `associated_groups` | `list` |  |
| `before_id` | `int` |  |
| `comments` | `list` |  |
| `completed` | `bool` |  |
| `completed_at` | `str` |  |
| `completed_at_override` | `str` |  |
| `converted_from_story_id` | `int` |  |
| `created_at` | `str` |  |
| `deadline` | `str` |  |
| `description` | `str` |  |
| `entity_type` | `str` |  |
| `epic_state_id` | `int` |  |
| `external_id` | `str` |  |
| `follower_ids` | `list` |  |
| `global_id` | `str` |  |
| `group_id` | `str` |  |
| `group_ids` | `list` |  |
| `group_mention_ids` | `list` |  |
| `health` | `dict` |  |
| `id` | `int` |  |
| `label_ids` | `list` |  |
| `labels` | `list` |  |
| `member_mention_ids` | `list` |  |
| `mention_ids` | `list` |  |
| `milestone_id` | `int` |  |
| `name` | `str` |  |
| `objective_ids` | `list` |  |
| `owner_ids` | `list` |  |
| `planned_start_date` | `str` |  |
| `position` | `int` |  |
| `productboard_id` | `str` |  |
| `productboard_name` | `str` |  |
| `productboard_plugin_id` | `str` |  |
| `productboard_url` | `str` |  |
| `project_ids` | `list` |  |
| `requested_by_id` | `str` |  |
| `started` | `bool` |  |
| `started_at` | `str` |  |
| `started_at_override` | `str` |  |
| `state` | `str` |  |
| `stats` | `dict` |  |
| `stories_without_projects` | `int` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
epic = client.Epic().load({"id": 1})
```

#### Example: List

```python
epics = client.Epic().list()
```

#### Example: Create

```python
epic = client.Epic().create({
    "app_url": "example_app_url",  # str
    "archived": True,  # bool
    "associated_groups": [],  # list
    "comments": [],  # list
    "completed": True,  # bool
    "completed_at": "example_completed_at",  # str
    "completed_at_override": "example_completed_at_override",  # str
    "created_at": "example_created_at",  # str
    "deadline": "example_deadline",  # str
    "description": "example_description",  # str
    "entity_type": "example_entity_type",  # str
    "epic_state_id": 1,  # int
    "external_id": "example_external_id",  # str
    "follower_ids": [],  # list
    "global_id": "example_global_id",  # str
    "group_id": "example_group_id",  # str
    "group_ids": [],  # list
    "group_mention_ids": [],  # list
    "health": {},  # dict
    "id": 1,  # int
    "label_ids": [],  # list
    "labels": [],  # list
    "member_mention_ids": [],  # list
    "mention_ids": [],  # list
    "milestone_id": 1,  # int
    "name": "example_name",  # str
    "objective_ids": [],  # list
    "owner_ids": [],  # list
    "planned_start_date": "example_planned_start_date",  # str
    "position": 1,  # int
    "productboard_id": "example_productboard_id",  # str
    "productboard_name": "example_productboard_name",  # str
    "productboard_plugin_id": "example_productboard_plugin_id",  # str
    "productboard_url": "example_productboard_url",  # str
    "project_ids": [],  # list
    "requested_by_id": "example_requested_by_id",  # str
    "started": True,  # bool
    "started_at": "example_started_at",  # str
    "started_at_override": "example_started_at_override",  # str
    "state": "example_state",  # str
    "stats": {},  # dict
    "stories_without_projects": 1,  # int
    "updated_at": "example_updated_at",  # str
})
```


### EpicPaginatedResult

Create an instance: `epic_paginated_result = client.EpicPaginatedResult()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `str` |  |
| `archived` | `bool` |  |
| `associated_groups` | `list` |  |
| `completed` | `bool` |  |
| `completed_at` | `str` |  |
| `completed_at_override` | `str` |  |
| `created_at` | `str` |  |
| `deadline` | `str` |  |
| `description` | `str` |  |
| `entity_type` | `str` |  |
| `epic_state_id` | `int` |  |
| `external_id` | `str` |  |
| `follower_ids` | `list` |  |
| `global_id` | `str` |  |
| `group_id` | `str` |  |
| `group_ids` | `list` |  |
| `group_mention_ids` | `list` |  |
| `id` | `int` |  |
| `label_ids` | `list` |  |
| `labels` | `list` |  |
| `member_mention_ids` | `list` |  |
| `mention_ids` | `list` |  |
| `milestone_id` | `int` |  |
| `name` | `str` |  |
| `objective_ids` | `list` |  |
| `owner_ids` | `list` |  |
| `planned_start_date` | `str` |  |
| `position` | `int` |  |
| `productboard_id` | `str` |  |
| `productboard_name` | `str` |  |
| `productboard_plugin_id` | `str` |  |
| `productboard_url` | `str` |  |
| `project_ids` | `list` |  |
| `requested_by_id` | `str` |  |
| `started` | `bool` |  |
| `started_at` | `str` |  |
| `started_at_override` | `str` |  |
| `state` | `str` |  |
| `stats` | `dict` |  |
| `stories_without_projects` | `int` |  |
| `updated_at` | `str` |  |

#### Example: List

```python
epic_paginated_results = client.EpicPaginatedResult().list()
```


### EpicUnlinkProductboard

Create an instance: `epic_unlink_productboard = client.EpicUnlinkProductboard()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
epic_unlink_productboard = client.EpicUnlinkProductboard().create({
    "id": 1,  # int
})
```


### EpicWorkflow

Create an instance: `epic_workflow = client.EpicWorkflow()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `color` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `entity_type` | `str` |  |
| `global_id` | `str` |  |
| `id` | `int` |  |
| `name` | `str` |  |
| `position` | `int` |  |
| `type` | `str` |  |
| `updated_at` | `str` |  |

#### Example: List

```python
epic_workflows = client.EpicWorkflow().list()
```


### Group

Create an instance: `group = client.Group()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `str` |  |
| `archived` | `bool` |  |
| `color` | `str` |  |
| `color_key` | `str` |  |
| `created_at` | `str` |  |
| `default_workflow_id` | `int` |  |
| `description` | `str` |  |
| `display_icon` | `dict` |  |
| `display_icon_id` | `str` |  |
| `entity_type` | `str` |  |
| `global_id` | `str` |  |
| `id` | `str` |  |
| `member_ids` | `list` |  |
| `mention_name` | `str` |  |
| `name` | `str` |  |
| `num_epics_started` | `int` |  |
| `num_stories` | `int` |  |
| `num_stories_backlog` | `int` |  |
| `num_stories_started` | `int` |  |
| `updated_at` | `str` |  |
| `workflow_ids` | `list` |  |

#### Example: Load

```python
group = client.Group().load({"id": "group_id"})
```

#### Example: List

```python
groups = client.Group().list()
```

#### Example: Create

```python
group = client.Group().create({
    "app_url": "example_app_url",  # str
    "archived": True,  # bool
    "color": "example_color",  # str
    "color_key": "example_color_key",  # str
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "display_icon": {},  # dict
    "entity_type": "example_entity_type",  # str
    "global_id": "example_global_id",  # str
    "id": "example_id",  # str
    "member_ids": [],  # list
    "mention_name": "example_mention_name",  # str
    "name": "example_name",  # str
    "num_epics_started": 1,  # int
    "num_stories": 1,  # int
    "num_stories_backlog": 1,  # int
    "num_stories_started": 1,  # int
    "updated_at": "example_updated_at",  # str
    "workflow_ids": [],  # list
})
```


### Health

Create an instance: `health = client.Health()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_id` | `str` |  |
| `created_at` | `str` |  |
| `entity_type` | `str` |  |
| `epic_id` | `int` |  |
| `id` | `str` |  |
| `objective_id` | `int` |  |
| `status` | `str` |  |
| `text` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
health = client.Health().load({"epic_id": 1})
```

#### Example: List

```python
healths = client.Health().list()
```

#### Example: Create

```python
health = client.Health().create({
    "epic_id": 1,  # int
    "entity_type": "example_entity_type",  # str
    "id": "example_id",  # str
    "status": "example_status",  # str
})
```


### History

Create an instance: `history = client.History()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `list` |  |
| `actor_name` | `str` |  |
| `automation_id` | `str` |  |
| `changed_at` | `str` |  |
| `external_id` | `str` |  |
| `id` | `str` |  |
| `member_id` | `str` |  |
| `primary_id` | `str` |  |
| `references` | `list` |  |
| `version` | `str` |  |
| `webhook_id` | `str` |  |

#### Example: List

```python
historys = client.History().list()
```


### Iteration

Create an instance: `iteration = client.Iteration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `str` |  |
| `associated_groups` | `list` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `end_date` | `str` |  |
| `entity_type` | `str` |  |
| `follower_ids` | `list` |  |
| `global_id` | `str` |  |
| `group_ids` | `list` |  |
| `group_mention_ids` | `list` |  |
| `id` | `int` |  |
| `label_ids` | `list` |  |
| `labels` | `list` |  |
| `member_mention_ids` | `list` |  |
| `mention_ids` | `list` |  |
| `name` | `str` |  |
| `start_date` | `str` |  |
| `stats` | `dict` |  |
| `status` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
iteration = client.Iteration().load({"id": 1})
```

#### Example: List

```python
iterations = client.Iteration().list()
```

#### Example: Create

```python
iteration = client.Iteration().create({
    "app_url": "example_app_url",  # str
    "associated_groups": [],  # list
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "end_date": "example_end_date",  # str
    "entity_type": "example_entity_type",  # str
    "follower_ids": [],  # list
    "global_id": "example_global_id",  # str
    "group_ids": [],  # list
    "group_mention_ids": [],  # list
    "id": 1,  # int
    "label_ids": [],  # list
    "labels": [],  # list
    "member_mention_ids": [],  # list
    "mention_ids": [],  # list
    "name": "example_name",  # str
    "start_date": "example_start_date",  # str
    "stats": {},  # dict
    "status": "example_status",  # str
    "updated_at": "example_updated_at",  # str
})
```


### KeyResult

Create an instance: `key_result = client.KeyResult()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_observed_value` | `dict` |  |
| `current_target_value` | `dict` |  |
| `id` | `str` |  |
| `initial_observed_value` | `dict` |  |
| `name` | `str` |  |
| `objective_id` | `int` |  |
| `observed_value` | `dict` |  |
| `progress` | `int` |  |
| `target_value` | `dict` |  |
| `type` | `str` |  |

#### Example: Load

```python
key_result = client.KeyResult().load({"id": "key_result_id"})
```


### Label

Create an instance: `label = client.Label()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `str` |  |
| `archived` | `bool` |  |
| `color` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `entity_type` | `str` |  |
| `external_id` | `str` |  |
| `global_id` | `str` |  |
| `id` | `int` |  |
| `name` | `str` |  |
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
| `stats` | `dict` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
label = client.Label().load({"id": 1})
```

#### Example: List

```python
labels = client.Label().list()
```

#### Example: Create

```python
label = client.Label().create({
    "app_url": "example_app_url",  # str
    "created_at": "example_created_at",  # str
    "entity_type": "example_entity_type",  # str
    "global_id": "example_global_id",  # str
    "id": 1,  # int
    "name": "example_name",  # str
    "num_epics": 1,  # int
    "num_epics_completed": 1,  # int
    "num_epics_in_progress": 1,  # int
    "num_epics_total": 1,  # int
    "num_epics_unstarted": 1,  # int
    "num_points_backlog": 1,  # int
    "num_points_completed": 1,  # int
    "num_points_in_progress": 1,  # int
    "num_points_total": 1,  # int
    "num_points_unstarted": 1,  # int
    "num_related_documents": 1,  # int
    "num_stories_backlog": 1,  # int
    "num_stories_completed": 1,  # int
    "num_stories_in_progress": 1,  # int
    "num_stories_total": 1,  # int
    "num_stories_unestimated": 1,  # int
    "num_stories_unstarted": 1,  # int
    "stats": {},  # dict
    "updated_at": "example_updated_at",  # str
})
```


### LinkedFile

Create an instance: `linked_file = client.LinkedFile()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `entity_type` | `str` |  |
| `group_mention_ids` | `list` |  |
| `id` | `int` |  |
| `member_mention_ids` | `list` |  |
| `mention_ids` | `list` |  |
| `name` | `str` |  |
| `size` | `int` |  |
| `story_id` | `int` |  |
| `story_ids` | `list` |  |
| `thumbnail_url` | `str` |  |
| `type` | `str` |  |
| `updated_at` | `str` |  |
| `uploader_id` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
linked_file = client.LinkedFile().load({"id": 1})
```

#### Example: List

```python
linked_files = client.LinkedFile().list()
```

#### Example: Create

```python
linked_file = client.LinkedFile().create({
    "content_type": "example_content_type",  # str
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "entity_type": "example_entity_type",  # str
    "group_mention_ids": [],  # list
    "id": 1,  # int
    "member_mention_ids": [],  # list
    "mention_ids": [],  # list
    "name": "example_name",  # str
    "size": 1,  # int
    "story_ids": [],  # list
    "thumbnail_url": "example_thumbnail_url",  # str
    "type": "example_type",  # str
    "updated_at": "example_updated_at",  # str
    "uploader_id": "example_uploader_id",  # str
    "url": "example_url",  # str
})
```


### Member

Create an instance: `member = client.Member()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `created_without_invite` | `bool` |  |
| `disabled` | `bool` |  |
| `entity_type` | `str` |  |
| `global_id` | `str` |  |
| `group_ids` | `list` |  |
| `id` | `str` |  |
| `installation_id` | `str` |  |
| `is_owner` | `bool` |  |
| `mention_name` | `str` |  |
| `name` | `str` |  |
| `organization2` | `dict` |  |
| `profile` | `dict` |  |
| `replaced_by` | `str` |  |
| `role` | `str` |  |
| `state` | `str` |  |
| `updated_at` | `str` |  |
| `workspace2` | `dict` |  |

#### Example: Load

```python
member = client.Member().load({"id": "member_id"})
```

#### Example: List

```python
members = client.Member().list()
```


### Milestone

Create an instance: `milestone = client.Milestone()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `int` |  |
| `app_url` | `str` |  |
| `archived` | `bool` |  |
| `before_id` | `int` |  |
| `categories` | `list` |  |
| `completed` | `bool` |  |
| `completed_at` | `str` |  |
| `completed_at_override` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `entity_type` | `str` |  |
| `global_id` | `str` |  |
| `id` | `int` |  |
| `key_result_ids` | `list` |  |
| `name` | `str` |  |
| `position` | `int` |  |
| `started` | `bool` |  |
| `started_at` | `str` |  |
| `started_at_override` | `str` |  |
| `state` | `str` |  |
| `stats` | `dict` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
milestone = client.Milestone().load({"id": 1})
```

#### Example: List

```python
milestones = client.Milestone().list()
```

#### Example: Create

```python
milestone = client.Milestone().create({
    "app_url": "example_app_url",  # str
    "archived": True,  # bool
    "categories": [],  # list
    "completed": True,  # bool
    "completed_at": "example_completed_at",  # str
    "completed_at_override": "example_completed_at_override",  # str
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "entity_type": "example_entity_type",  # str
    "global_id": "example_global_id",  # str
    "id": 1,  # int
    "key_result_ids": [],  # list
    "name": "example_name",  # str
    "position": 1,  # int
    "started": True,  # bool
    "started_at": "example_started_at",  # str
    "started_at_override": "example_started_at_override",  # str
    "state": "example_state",  # str
    "stats": {},  # dict
    "updated_at": "example_updated_at",  # str
})
```


### Objectif

Create an instance: `objectif = client.Objectif()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Objective

Create an instance: `objective = client.Objective()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `int` |  |
| `app_url` | `str` |  |
| `archived` | `bool` |  |
| `before_id` | `int` |  |
| `categories` | `list` |  |
| `completed` | `bool` |  |
| `completed_at` | `str` |  |
| `completed_at_override` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `entity_type` | `str` |  |
| `global_id` | `str` |  |
| `id` | `int` |  |
| `key_result_ids` | `list` |  |
| `name` | `str` |  |
| `position` | `int` |  |
| `started` | `bool` |  |
| `started_at` | `str` |  |
| `started_at_override` | `str` |  |
| `state` | `str` |  |
| `stats` | `dict` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
objective = client.Objective().load({"objective_public_id": 1})
```

#### Example: List

```python
objectives = client.Objective().list()
```

#### Example: Create

```python
objective = client.Objective().create({
    "app_url": "example_app_url",  # str
    "archived": True,  # bool
    "categories": [],  # list
    "completed": True,  # bool
    "completed_at": "example_completed_at",  # str
    "completed_at_override": "example_completed_at_override",  # str
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "entity_type": "example_entity_type",  # str
    "global_id": "example_global_id",  # str
    "id": 1,  # int
    "key_result_ids": [],  # list
    "name": "example_name",  # str
    "position": 1,  # int
    "started": True,  # bool
    "started_at": "example_started_at",  # str
    "started_at_override": "example_started_at_override",  # str
    "state": "example_state",  # str
    "stats": {},  # dict
    "updated_at": "example_updated_at",  # str
})
```


### Project

Create an instance: `project = client.Project()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abbreviation` | `str` |  |
| `app_url` | `str` |  |
| `archived` | `bool` |  |
| `color` | `str` |  |
| `created_at` | `str` |  |
| `days_to_thermometer` | `int` |  |
| `description` | `str` |  |
| `entity_type` | `str` |  |
| `external_id` | `str` |  |
| `follower_ids` | `list` |  |
| `global_id` | `str` |  |
| `id` | `int` |  |
| `iteration_length` | `int` |  |
| `name` | `str` |  |
| `show_thermometer` | `bool` |  |
| `start_time` | `str` |  |
| `stats` | `dict` |  |
| `team_id` | `int` |  |
| `updated_at` | `str` |  |
| `workflow_id` | `int` |  |

#### Example: Load

```python
project = client.Project().load({"id": 1})
```

#### Example: List

```python
projects = client.Project().list()
```

#### Example: Create

```python
project = client.Project().create({
    "abbreviation": "example_abbreviation",  # str
    "app_url": "example_app_url",  # str
    "archived": True,  # bool
    "color": "example_color",  # str
    "created_at": "example_created_at",  # str
    "days_to_thermometer": 1,  # int
    "description": "example_description",  # str
    "entity_type": "example_entity_type",  # str
    "external_id": "example_external_id",  # str
    "follower_ids": [],  # list
    "global_id": "example_global_id",  # str
    "id": 1,  # int
    "iteration_length": 1,  # int
    "name": "example_name",  # str
    "show_thermometer": True,  # bool
    "start_time": "example_start_time",  # str
    "stats": {},  # dict
    "team_id": 1,  # int
    "updated_at": "example_updated_at",  # str
    "workflow_id": 1,  # int
})
```


### Repository

Create an instance: `repository = client.Repository()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `entity_type` | `str` |  |
| `external_id` | `str` |  |
| `full_name` | `str` |  |
| `id` | `int` |  |
| `name` | `str` |  |
| `type` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
repository = client.Repository().load({"id": 1})
```

#### Example: List

```python
repositorys = client.Repository().list()
```


### Search

Create an instance: `search = client.Search()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `epics` | `dict` |  |
| `iterations` | `dict` |  |
| `milestones` | `dict` |  |
| `stories` | `dict` |  |

#### Example: Load

```python
search = client.Search().load()
```


### Story

Create an instance: `story = client.Story()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `int` |  |
| `app_url` | `str` |  |
| `archived` | `bool` |  |
| `before_id` | `int` |  |
| `blocked` | `bool` |  |
| `blocker` | `bool` |  |
| `branch_ids` | `list` |  |
| `branches` | `list` |  |
| `comment_ids` | `list` |  |
| `comments` | `list` |  |
| `commit_ids` | `list` |  |
| `commits` | `list` |  |
| `completed` | `bool` |  |
| `completed_at` | `str` |  |
| `completed_at_override` | `str` |  |
| `created_at` | `str` |  |
| `custom_fields` | `list` |  |
| `custom_fields_add` | `list` |  |
| `custom_fields_remove` | `list` |  |
| `cycle_time` | `int` |  |
| `deadline` | `str` |  |
| `description` | `str` |  |
| `entity_type` | `str` |  |
| `epic_id` | `int` |  |
| `estimate` | `int` |  |
| `external_id` | `str` |  |
| `external_links` | `list` |  |
| `external_links_add` | `list` |  |
| `external_links_remove` | `list` |  |
| `file_ids` | `list` |  |
| `file_ids_add` | `list` |  |
| `file_ids_remove` | `list` |  |
| `files` | `list` |  |
| `follower_ids` | `list` |  |
| `follower_ids_add` | `list` |  |
| `follower_ids_remove` | `list` |  |
| `formatted_vcs_branch_name` | `str` |  |
| `global_id` | `str` |  |
| `group_id` | `str` |  |
| `group_mention_ids` | `list` |  |
| `id` | `int` |  |
| `iteration_id` | `int` |  |
| `label_ids` | `list` |  |
| `labels` | `list` |  |
| `labels_add` | `list` |  |
| `labels_remove` | `list` |  |
| `lead_time` | `int` |  |
| `linked_file_ids` | `list` |  |
| `linked_file_ids_add` | `list` |  |
| `linked_file_ids_remove` | `list` |  |
| `linked_files` | `list` |  |
| `member_mention_ids` | `list` |  |
| `mention_ids` | `list` |  |
| `move_to` | `str` |  |
| `moved_at` | `str` |  |
| `name` | `str` |  |
| `num_tasks_completed` | `int` |  |
| `owner_ids` | `list` |  |
| `owner_ids_add` | `list` |  |
| `owner_ids_remove` | `list` |  |
| `parent_story_id` | `int` |  |
| `position` | `int` |  |
| `previous_iteration_ids` | `list` |  |
| `project_id` | `int` |  |
| `pull_request_ids` | `list` |  |
| `pull_requests` | `list` |  |
| `requested_by_id` | `str` |  |
| `source_task_id` | `int` |  |
| `started` | `bool` |  |
| `started_at` | `str` |  |
| `started_at_override` | `str` |  |
| `stats` | `dict` |  |
| `story_links` | `list` |  |
| `story_template_id` | `str` |  |
| `story_type` | `str` |  |
| `sub_task_story_ids` | `list` |  |
| `sub_tasks` | `list` |  |
| `synced_item` | `dict` |  |
| `task_ids` | `list` |  |
| `tasks` | `list` |  |
| `updated_at` | `str` |  |
| `workflow_id` | `int` |  |
| `workflow_state_id` | `int` |  |

#### Example: Load

```python
story = client.Story().load({"id": 1})
```

#### Example: List

```python
storys = client.Story().list()
```

#### Example: Create

```python
story = client.Story().create({
    "app_url": "example_app_url",  # str
    "archived": True,  # bool
    "blocked": True,  # bool
    "blocker": True,  # bool
    "branches": [],  # list
    "comments": [],  # list
    "commits": [],  # list
    "completed": True,  # bool
    "completed_at": "example_completed_at",  # str
    "completed_at_override": "example_completed_at_override",  # str
    "created_at": "example_created_at",  # str
    "deadline": "example_deadline",  # str
    "description": "example_description",  # str
    "entity_type": "example_entity_type",  # str
    "epic_id": 1,  # int
    "estimate": 1,  # int
    "external_id": "example_external_id",  # str
    "external_links": [],  # list
    "files": [],  # list
    "follower_ids": [],  # list
    "global_id": "example_global_id",  # str
    "group_id": "example_group_id",  # str
    "group_mention_ids": [],  # list
    "id": 1,  # int
    "iteration_id": 1,  # int
    "label_ids": [],  # list
    "labels": [],  # list
    "linked_files": [],  # list
    "member_mention_ids": [],  # list
    "mention_ids": [],  # list
    "moved_at": "example_moved_at",  # str
    "name": "example_name",  # str
    "owner_ids": [],  # list
    "position": 1,  # int
    "previous_iteration_ids": [],  # list
    "project_id": 1,  # int
    "pull_requests": [],  # list
    "requested_by_id": "example_requested_by_id",  # str
    "started": True,  # bool
    "started_at": "example_started_at",  # str
    "started_at_override": "example_started_at_override",  # str
    "stats": {},  # dict
    "story_links": [],  # list
    "story_template_id": "example_story_template_id",  # str
    "story_type": "example_story_type",  # str
    "synced_item": {},  # dict
    "tasks": [],  # list
    "updated_at": "example_updated_at",  # str
    "workflow_id": 1,  # int
    "workflow_state_id": 1,  # int
})
```


### StoryComment

Create an instance: `story_comment = client.StoryComment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `str` |  |
| `author_id` | `str` |  |
| `blocker` | `bool` |  |
| `created_at` | `str` |  |
| `deleted` | `bool` |  |
| `entity_type` | `str` |  |
| `external_id` | `str` |  |
| `group_mention_ids` | `list` |  |
| `id` | `int` |  |
| `linked_to_slack` | `bool` |  |
| `member_mention_ids` | `list` |  |
| `mention_ids` | `list` |  |
| `parent_id` | `int` |  |
| `position` | `int` |  |
| `reactions` | `list` |  |
| `story_id` | `int` |  |
| `text` | `str` |  |
| `unblocks_parent` | `bool` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
story_comment = client.StoryComment().load({"id": 1, "story_id": 1})
```

#### Example: List

```python
story_comments = client.StoryComment().list()
```

#### Example: Create

```python
story_comment = client.StoryComment().create({
    "app_url": "example_app_url",  # str
    "author_id": "example_author_id",  # str
    "created_at": "example_created_at",  # str
    "deleted": True,  # bool
    "entity_type": "example_entity_type",  # str
    "external_id": "example_external_id",  # str
    "group_mention_ids": [],  # list
    "linked_to_slack": True,  # bool
    "member_mention_ids": [],  # list
    "mention_ids": [],  # list
    "position": 1,  # int
    "reactions": [],  # list
    "text": "example_text",  # str
    "updated_at": "example_updated_at",  # str
})
```


### StoryLink

Create an instance: `story_link = client.StoryLink()`

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
| `created_at` | `str` |  |
| `entity_type` | `str` |  |
| `id` | `int` |  |
| `object_id` | `int` |  |
| `subject_id` | `int` |  |
| `subject_workflow_state_id` | `int` |  |
| `updated_at` | `str` |  |
| `verb` | `str` |  |

#### Example: Load

```python
story_link = client.StoryLink().load({"id": 1})
```

#### Example: Create

```python
story_link = client.StoryLink().create({
    "created_at": "example_created_at",  # str
    "entity_type": "example_entity_type",  # str
    "id": 1,  # int
    "object_id": 1,  # int
    "subject_id": 1,  # int
    "subject_workflow_state_id": 1,  # int
    "updated_at": "example_updated_at",  # str
    "verb": "example_verb",  # str
})
```


### StoryReaction

Create an instance: `story_reaction = client.StoryReaction()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `emoji` | `str` |  |

#### Example: Create

```python
story_reaction = client.StoryReaction().create({
    "comment_id": 1,  # int
    "story_id": 1,  # int
    "emoji": "example_emoji",  # str
})
```


### StorySlim

Create an instance: `story_slim = client.StorySlim()`

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
| `completed_at_end` | `str` |  |
| `completed_at_start` | `str` |  |
| `created_at_end` | `str` |  |
| `created_at_start` | `str` |  |
| `custom_fields_add` | `list` |  |
| `custom_fields_remove` | `list` |  |
| `deadline` | `str` |  |
| `deadline_end` | `str` |  |
| `deadline_start` | `str` |  |
| `epic_id` | `int` |  |
| `epic_ids` | `list` |  |
| `estimate` | `int` |  |
| `external_id` | `str` |  |
| `external_links` | `list` |  |
| `follower_ids_add` | `list` |  |
| `follower_ids_remove` | `list` |  |
| `group_id` | `str` |  |
| `group_ids` | `list` |  |
| `includes_description` | `bool` |  |
| `iteration_id` | `int` |  |
| `iteration_ids` | `list` |  |
| `label_ids` | `list` |  |
| `label_name` | `str` |  |
| `labels_add` | `list` |  |
| `labels_remove` | `list` |  |
| `move_to` | `str` |  |
| `owner_id` | `str` |  |
| `owner_ids` | `list` |  |
| `owner_ids_add` | `list` |  |
| `owner_ids_remove` | `list` |  |
| `project_id` | `int` |  |
| `project_ids` | `list` |  |
| `requested_by_id` | `str` |  |
| `stories` | `list` |  |
| `story_ids` | `list` |  |
| `story_type` | `str` |  |
| `updated_at_end` | `str` |  |
| `updated_at_start` | `str` |  |
| `workflow_state_id` | `int` |  |
| `workflow_state_types` | `list` |  |

#### Example: Create

```python
story_slim = client.StorySlim().create({
    "stories": [],  # list
    "story_ids": [],  # list
})
```


### Task

Create an instance: `task = client.Task()`

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
| `completed_at` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `entity_type` | `str` |  |
| `external_id` | `str` |  |
| `global_id` | `str` |  |
| `group_mention_ids` | `list` |  |
| `id` | `int` |  |
| `member_mention_ids` | `list` |  |
| `mention_ids` | `list` |  |
| `owner_ids` | `list` |  |
| `position` | `int` |  |
| `story_id` | `int` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
task = client.Task().load({"id": 1, "story_id": 1})
```

#### Example: Create

```python
task = client.Task().create({
    "story_id": 1,  # int
    "complete": True,  # bool
    "completed_at": "example_completed_at",  # str
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "entity_type": "example_entity_type",  # str
    "external_id": "example_external_id",  # str
    "global_id": "example_global_id",  # str
    "group_mention_ids": [],  # list
    "id": 1,  # int
    "member_mention_ids": [],  # list
    "mention_ids": [],  # list
    "owner_ids": [],  # list
    "position": 1,  # int
    "updated_at": "example_updated_at",  # str
})
```


### ThreadedComment

Create an instance: `threaded_comment = client.ThreadedComment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `str` |  |
| `author_id` | `str` |  |
| `comments` | `list` |  |
| `created_at` | `str` |  |
| `deleted` | `bool` |  |
| `entity_type` | `str` |  |
| `external_id` | `str` |  |
| `group_mention_ids` | `list` |  |
| `id` | `int` |  |
| `member_mention_ids` | `list` |  |
| `mention_ids` | `list` |  |
| `text` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
threaded_comment = client.ThreadedComment().load({"id": 1, "epic_id": 1})
```

#### Example: List

```python
threaded_comments = client.ThreadedComment().list()
```

#### Example: Create

```python
threaded_comment = client.ThreadedComment().create({
    "epic_id": 1,  # int
    "app_url": "example_app_url",  # str
    "author_id": "example_author_id",  # str
    "comments": [],  # list
    "created_at": "example_created_at",  # str
    "deleted": True,  # bool
    "entity_type": "example_entity_type",  # str
    "external_id": "example_external_id",  # str
    "group_mention_ids": [],  # list
    "member_mention_ids": [],  # list
    "mention_ids": [],  # list
    "text": "example_text",  # str
    "updated_at": "example_updated_at",  # str
})
```


### UploadedFile

Create an instance: `uploaded_file = client.UploadedFile()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `entity_type` | `str` |  |
| `external_id` | `str` |  |
| `filename` | `str` |  |
| `group_mention_ids` | `list` |  |
| `id` | `int` |  |
| `member_mention_ids` | `list` |  |
| `mention_ids` | `list` |  |
| `name` | `str` |  |
| `size` | `int` |  |
| `story_ids` | `list` |  |
| `thumbnail_url` | `str` |  |
| `updated_at` | `str` |  |
| `uploader_id` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
uploaded_file = client.UploadedFile().load({"id": 1})
```

#### Example: List

```python
uploaded_files = client.UploadedFile().list()
```

#### Example: Create

```python
uploaded_file = client.UploadedFile().create({
    "content_type": "example_content_type",  # str
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "entity_type": "example_entity_type",  # str
    "external_id": "example_external_id",  # str
    "filename": "example_filename",  # str
    "group_mention_ids": [],  # list
    "id": 1,  # int
    "member_mention_ids": [],  # list
    "mention_ids": [],  # list
    "name": "example_name",  # str
    "size": 1,  # int
    "story_ids": [],  # list
    "thumbnail_url": "example_thumbnail_url",  # str
    "updated_at": "example_updated_at",  # str
    "uploader_id": "example_uploader_id",  # str
    "url": "example_url",  # str
})
```


### Webhook

Create an instance: `webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `secret` | `str` |  |
| `webhook_url` | `str` |  |

#### Example: Load

```python
webhook = client.Webhook().load({"id": 1})
```

#### Example: Create

```python
webhook = client.Webhook().create({
    "webhook_url": "example_webhook_url",  # str
})
```


### Workflow

Create an instance: `workflow = client.Workflow()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_assign_owner` | `bool` |  |
| `created_at` | `str` |  |
| `default_state_id` | `int` |  |
| `description` | `str` |  |
| `entity_type` | `str` |  |
| `id` | `int` |  |
| `name` | `str` |  |
| `project_ids` | `list` |  |
| `states` | `list` |  |
| `team_id` | `int` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
workflow = client.Workflow().load({"id": 1})
```

#### Example: List

```python
workflows = client.Workflow().list()
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── shortcut_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`shortcut_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
iteration = client.Iteration()
iteration.list()

# iteration.data_get() now returns the iteration data from the last list
# iteration.match_get() returns the last match criteria
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

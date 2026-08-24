# Shortcut Lua SDK



The Lua SDK for the Shortcut API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Bulk()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/shortcut-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("shortcut_sdk")

local client = sdk.new({
  apikey = os.getenv("SHORTCUT_APIKEY"),
})
```

### 3. Load a health

Health is nested under epic, so provide the `epic_id`.

```lua
local health, err = client:Health():load({ epic_id = 1 })
if err then error(err) end
print(health)
```

### 4. Create, update, and remove

```lua
-- Remove
client:Bulk():remove()
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local iterations, err = client:Iteration():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Iteration():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### ShortcutSDK

```lua
local sdk = require("shortcut_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### ShortcutSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
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
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local bulk, err = client:Bulk():load()
    if err then error(err) end
    -- bulk is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Create an instance: `local bulk = client:Bulk(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Category

Create an instance: `local category = client:Category(nil)`

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
| `archived` | `boolean` |  |
| `color` | `string` |  |
| `created_at` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `global_id` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local category, err = client:Category():load({ id = 1 })
```

#### Example: List

```lua
local categorys, err = client:Category():list()
```

#### Example: Create

```lua
local category, err = client:Category():create({
  archived = true, -- boolean
  color = "example_color", -- string
  created_at = "example_created_at", -- string
  entity_type = "example_entity_type", -- string
  external_id = "example_external_id", -- string
  global_id = "example_global_id", -- string
  id = 1, -- number
  name = "example_name", -- string
  type = "example_type", -- string
  updated_at = "example_updated_at", -- string
})
```


### Comment

Create an instance: `local comment = client:Comment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CustomField

Create an instance: `local custom_field = client:CustomField(nil)`

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
| `enabled` | `boolean` |  |
| `entity_type` | `string` |  |
| `field_type` | `string` |  |
| `fixed_position` | `boolean` |  |
| `icon_set_identifier` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `position` | `number` |  |
| `story_types` | `table` |  |
| `updated_at` | `string` |  |
| `values` | `table` |  |

#### Example: Load

```lua
local custom_field, err = client:CustomField():load({ id = "custom_field_id" })
```

#### Example: List

```lua
local custom_fields, err = client:CustomField():list()
```


### Disable

Create an instance: `local disable = client:Disable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### DocSlim

Create an instance: `local doc_slim = client:DocSlim(nil)`

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

```lua
local doc_slims, err = client:DocSlim():list()
```

#### Example: Create

```lua
local doc_slim, err = client:DocSlim():create({
  app_url = "example_app_url", -- string
  content = "example_content", -- string
  id = "example_id", -- string
  title = "example_title", -- string
})
```


### Enable

Create an instance: `local enable = client:Enable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### EntityTemplate

Create an instance: `local entity_template = client:EntityTemplate(nil)`

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
| `custom_fields` | `table` |  |
| `deadline` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `epic_id` | `number` |  |
| `estimate` | `number` |  |
| `external_links` | `table` |  |
| `files` | `table` |  |
| `follower_ids` | `table` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `iteration_id` | `number` |  |
| `label_ids` | `table` |  |
| `labels` | `table` |  |
| `last_used_at` | `string` |  |
| `linked_files` | `table` |  |
| `name` | `string` |  |
| `owner_ids` | `table` |  |
| `project_id` | `number` |  |
| `story_contents` | `table` |  |
| `story_type` | `string` |  |
| `sub_tasks` | `table` |  |
| `tasks` | `table` |  |
| `updated_at` | `string` |  |
| `workflow_state_id` | `number` |  |

#### Example: Load

```lua
local entity_template, err = client:EntityTemplate():load({ id = "entity_template_id" })
```

#### Example: List

```lua
local entity_templates, err = client:EntityTemplate():list()
```

#### Example: Create

```lua
local entity_template, err = client:EntityTemplate():create({
  created_at = "example_created_at", -- string
  id = "example_id", -- string
  last_used_at = "example_last_used_at", -- string
  story_contents = {}, -- table
  updated_at = "example_updated_at", -- string
})
```


### Epic

Create an instance: `local epic = client:Epic(nil)`

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
| `after_id` | `number` |  |
| `app_url` | `string` |  |
| `archived` | `boolean` |  |
| `associated_groups` | `table` |  |
| `before_id` | `number` |  |
| `comments` | `table` |  |
| `completed` | `boolean` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `converted_from_story_id` | `number` |  |
| `created_at` | `string` |  |
| `deadline` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `epic_state_id` | `number` |  |
| `external_id` | `string` |  |
| `follower_ids` | `table` |  |
| `global_id` | `string` |  |
| `group_id` | `string` |  |
| `group_ids` | `table` |  |
| `group_mention_ids` | `table` |  |
| `health` | `table` |  |
| `id` | `number` |  |
| `label_ids` | `table` |  |
| `labels` | `table` |  |
| `member_mention_ids` | `table` |  |
| `mention_ids` | `table` |  |
| `milestone_id` | `number` |  |
| `name` | `string` |  |
| `objective_ids` | `table` |  |
| `owner_ids` | `table` |  |
| `planned_start_date` | `string` |  |
| `position` | `number` |  |
| `productboard_id` | `string` |  |
| `productboard_name` | `string` |  |
| `productboard_plugin_id` | `string` |  |
| `productboard_url` | `string` |  |
| `project_ids` | `table` |  |
| `requested_by_id` | `string` |  |
| `started` | `boolean` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `state` | `string` |  |
| `stats` | `table` |  |
| `stories_without_projects` | `number` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local epic, err = client:Epic():load({ id = 1 })
```

#### Example: List

```lua
local epics, err = client:Epic():list()
```

#### Example: Create

```lua
local epic, err = client:Epic():create({
  app_url = "example_app_url", -- string
  archived = true, -- boolean
  associated_groups = {}, -- table
  comments = {}, -- table
  completed = true, -- boolean
  completed_at = "example_completed_at", -- string
  completed_at_override = "example_completed_at_override", -- string
  created_at = "example_created_at", -- string
  deadline = "example_deadline", -- string
  description = "example_description", -- string
  entity_type = "example_entity_type", -- string
  epic_state_id = 1, -- number
  external_id = "example_external_id", -- string
  follower_ids = {}, -- table
  global_id = "example_global_id", -- string
  group_id = "example_group_id", -- string
  group_ids = {}, -- table
  group_mention_ids = {}, -- table
  health = {}, -- table
  id = 1, -- number
  label_ids = {}, -- table
  labels = {}, -- table
  member_mention_ids = {}, -- table
  mention_ids = {}, -- table
  milestone_id = 1, -- number
  name = "example_name", -- string
  objective_ids = {}, -- table
  owner_ids = {}, -- table
  planned_start_date = "example_planned_start_date", -- string
  position = 1, -- number
  productboard_id = "example_productboard_id", -- string
  productboard_name = "example_productboard_name", -- string
  productboard_plugin_id = "example_productboard_plugin_id", -- string
  productboard_url = "example_productboard_url", -- string
  project_ids = {}, -- table
  requested_by_id = "example_requested_by_id", -- string
  started = true, -- boolean
  started_at = "example_started_at", -- string
  started_at_override = "example_started_at_override", -- string
  state = "example_state", -- string
  stats = {}, -- table
  stories_without_projects = 1, -- number
  updated_at = "example_updated_at", -- string
})
```


### EpicPaginatedResult

Create an instance: `local epic_paginated_result = client:EpicPaginatedResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` |  |
| `archived` | `boolean` |  |
| `associated_groups` | `table` |  |
| `completed` | `boolean` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `created_at` | `string` |  |
| `deadline` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `epic_state_id` | `number` |  |
| `external_id` | `string` |  |
| `follower_ids` | `table` |  |
| `global_id` | `string` |  |
| `group_id` | `string` |  |
| `group_ids` | `table` |  |
| `group_mention_ids` | `table` |  |
| `id` | `number` |  |
| `label_ids` | `table` |  |
| `labels` | `table` |  |
| `member_mention_ids` | `table` |  |
| `mention_ids` | `table` |  |
| `milestone_id` | `number` |  |
| `name` | `string` |  |
| `objective_ids` | `table` |  |
| `owner_ids` | `table` |  |
| `planned_start_date` | `string` |  |
| `position` | `number` |  |
| `productboard_id` | `string` |  |
| `productboard_name` | `string` |  |
| `productboard_plugin_id` | `string` |  |
| `productboard_url` | `string` |  |
| `project_ids` | `table` |  |
| `requested_by_id` | `string` |  |
| `started` | `boolean` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `state` | `string` |  |
| `stats` | `table` |  |
| `stories_without_projects` | `number` |  |
| `updated_at` | `string` |  |

#### Example: List

```lua
local epic_paginated_results, err = client:EpicPaginatedResult():list()
```


### EpicUnlinkProductboard

Create an instance: `local epic_unlink_productboard = client:EpicUnlinkProductboard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local epic_unlink_productboard, err = client:EpicUnlinkProductboard():create({
  id = 1, -- number
})
```


### EpicWorkflow

Create an instance: `local epic_workflow = client:EpicWorkflow(nil)`

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
| `id` | `number` |  |
| `name` | `string` |  |
| `position` | `number` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |

#### Example: List

```lua
local epic_workflows, err = client:EpicWorkflow():list()
```


### Group

Create an instance: `local group = client:Group(nil)`

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
| `archived` | `boolean` |  |
| `color` | `string` |  |
| `color_key` | `string` |  |
| `created_at` | `string` |  |
| `default_workflow_id` | `number` |  |
| `description` | `string` |  |
| `display_icon` | `table` |  |
| `display_icon_id` | `string` |  |
| `entity_type` | `string` |  |
| `global_id` | `string` |  |
| `id` | `string` |  |
| `member_ids` | `table` |  |
| `mention_name` | `string` |  |
| `name` | `string` |  |
| `num_epics_started` | `number` |  |
| `num_stories` | `number` |  |
| `num_stories_backlog` | `number` |  |
| `num_stories_started` | `number` |  |
| `updated_at` | `string` |  |
| `workflow_ids` | `table` |  |

#### Example: Load

```lua
local group, err = client:Group():load({ id = "group_id" })
```

#### Example: List

```lua
local groups, err = client:Group():list()
```

#### Example: Create

```lua
local group, err = client:Group():create({
  app_url = "example_app_url", -- string
  archived = true, -- boolean
  color = "example_color", -- string
  color_key = "example_color_key", -- string
  created_at = "example_created_at", -- string
  description = "example_description", -- string
  display_icon = {}, -- table
  entity_type = "example_entity_type", -- string
  global_id = "example_global_id", -- string
  id = "example_id", -- string
  member_ids = {}, -- table
  mention_name = "example_mention_name", -- string
  name = "example_name", -- string
  num_epics_started = 1, -- number
  num_stories = 1, -- number
  num_stories_backlog = 1, -- number
  num_stories_started = 1, -- number
  updated_at = "example_updated_at", -- string
  workflow_ids = {}, -- table
})
```


### Health

Create an instance: `local health = client:Health(nil)`

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
| `epic_id` | `number` |  |
| `id` | `string` |  |
| `objective_id` | `number` |  |
| `status` | `string` |  |
| `text` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local health, err = client:Health():load({ epic_id = 1 })
```

#### Example: List

```lua
local healths, err = client:Health():list()
```

#### Example: Create

```lua
local health, err = client:Health():create({
  epic_id = 1, -- number
  entity_type = "example_entity_type", -- string
  id = "example_id", -- string
  status = "example_status", -- string
})
```


### History

Create an instance: `local history = client:History(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `table` |  |
| `actor_name` | `string` |  |
| `automation_id` | `string` |  |
| `changed_at` | `string` |  |
| `external_id` | `string` |  |
| `id` | `string` |  |
| `member_id` | `string` |  |
| `primary_id` | `string` |  |
| `references` | `table` |  |
| `version` | `string` |  |
| `webhook_id` | `string` |  |

#### Example: List

```lua
local historys, err = client:History():list()
```


### Iteration

Create an instance: `local iteration = client:Iteration(nil)`

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
| `associated_groups` | `table` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `end_date` | `string` |  |
| `entity_type` | `string` |  |
| `follower_ids` | `table` |  |
| `global_id` | `string` |  |
| `group_ids` | `table` |  |
| `group_mention_ids` | `table` |  |
| `id` | `number` |  |
| `label_ids` | `table` |  |
| `labels` | `table` |  |
| `member_mention_ids` | `table` |  |
| `mention_ids` | `table` |  |
| `name` | `string` |  |
| `start_date` | `string` |  |
| `stats` | `table` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local iteration, err = client:Iteration():load({ id = 1 })
```

#### Example: List

```lua
local iterations, err = client:Iteration():list()
```

#### Example: Create

```lua
local iteration, err = client:Iteration():create({
  app_url = "example_app_url", -- string
  associated_groups = {}, -- table
  created_at = "example_created_at", -- string
  description = "example_description", -- string
  end_date = "example_end_date", -- string
  entity_type = "example_entity_type", -- string
  follower_ids = {}, -- table
  global_id = "example_global_id", -- string
  group_ids = {}, -- table
  group_mention_ids = {}, -- table
  id = 1, -- number
  label_ids = {}, -- table
  labels = {}, -- table
  member_mention_ids = {}, -- table
  mention_ids = {}, -- table
  name = "example_name", -- string
  start_date = "example_start_date", -- string
  stats = {}, -- table
  status = "example_status", -- string
  updated_at = "example_updated_at", -- string
})
```


### KeyResult

Create an instance: `local key_result = client:KeyResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_observed_value` | `table` |  |
| `current_target_value` | `table` |  |
| `id` | `string` |  |
| `initial_observed_value` | `table` |  |
| `name` | `string` |  |
| `objective_id` | `number` |  |
| `observed_value` | `table` |  |
| `progress` | `number` |  |
| `target_value` | `table` |  |
| `type` | `string` |  |

#### Example: Load

```lua
local key_result, err = client:KeyResult():load({ id = "key_result_id" })
```


### Label

Create an instance: `local label = client:Label(nil)`

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
| `archived` | `boolean` |  |
| `color` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `global_id` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `num_epics` | `number` |  |
| `num_epics_completed` | `number` |  |
| `num_epics_in_progress` | `number` |  |
| `num_epics_total` | `number` |  |
| `num_epics_unstarted` | `number` |  |
| `num_points_backlog` | `number` |  |
| `num_points_completed` | `number` |  |
| `num_points_in_progress` | `number` |  |
| `num_points_total` | `number` |  |
| `num_points_unstarted` | `number` |  |
| `num_related_documents` | `number` |  |
| `num_stories_backlog` | `number` |  |
| `num_stories_completed` | `number` |  |
| `num_stories_in_progress` | `number` |  |
| `num_stories_total` | `number` |  |
| `num_stories_unestimated` | `number` |  |
| `num_stories_unstarted` | `number` |  |
| `stats` | `table` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local label, err = client:Label():load({ id = 1 })
```

#### Example: List

```lua
local labels, err = client:Label():list()
```

#### Example: Create

```lua
local label, err = client:Label():create({
  app_url = "example_app_url", -- string
  created_at = "example_created_at", -- string
  entity_type = "example_entity_type", -- string
  global_id = "example_global_id", -- string
  id = 1, -- number
  name = "example_name", -- string
  num_epics = 1, -- number
  num_epics_completed = 1, -- number
  num_epics_in_progress = 1, -- number
  num_epics_total = 1, -- number
  num_epics_unstarted = 1, -- number
  num_points_backlog = 1, -- number
  num_points_completed = 1, -- number
  num_points_in_progress = 1, -- number
  num_points_total = 1, -- number
  num_points_unstarted = 1, -- number
  num_related_documents = 1, -- number
  num_stories_backlog = 1, -- number
  num_stories_completed = 1, -- number
  num_stories_in_progress = 1, -- number
  num_stories_total = 1, -- number
  num_stories_unestimated = 1, -- number
  num_stories_unstarted = 1, -- number
  stats = {}, -- table
  updated_at = "example_updated_at", -- string
})
```


### LinkedFile

Create an instance: `local linked_file = client:LinkedFile(nil)`

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
| `group_mention_ids` | `table` |  |
| `id` | `number` |  |
| `member_mention_ids` | `table` |  |
| `mention_ids` | `table` |  |
| `name` | `string` |  |
| `size` | `number` |  |
| `story_id` | `number` |  |
| `story_ids` | `table` |  |
| `thumbnail_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `uploader_id` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```lua
local linked_file, err = client:LinkedFile():load({ id = 1 })
```

#### Example: List

```lua
local linked_files, err = client:LinkedFile():list()
```

#### Example: Create

```lua
local linked_file, err = client:LinkedFile():create({
  content_type = "example_content_type", -- string
  created_at = "example_created_at", -- string
  description = "example_description", -- string
  entity_type = "example_entity_type", -- string
  group_mention_ids = {}, -- table
  id = 1, -- number
  member_mention_ids = {}, -- table
  mention_ids = {}, -- table
  name = "example_name", -- string
  size = 1, -- number
  story_ids = {}, -- table
  thumbnail_url = "example_thumbnail_url", -- string
  type = "example_type", -- string
  updated_at = "example_updated_at", -- string
  uploader_id = "example_uploader_id", -- string
  url = "example_url", -- string
})
```


### Member

Create an instance: `local member = client:Member(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_without_invite` | `boolean` |  |
| `disabled` | `boolean` |  |
| `entity_type` | `string` |  |
| `global_id` | `string` |  |
| `group_ids` | `table` |  |
| `id` | `string` |  |
| `installation_id` | `string` |  |
| `is_owner` | `boolean` |  |
| `mention_name` | `string` |  |
| `name` | `string` |  |
| `organization2` | `table` |  |
| `profile` | `table` |  |
| `replaced_by` | `string` |  |
| `role` | `string` |  |
| `state` | `string` |  |
| `updated_at` | `string` |  |
| `workspace2` | `table` |  |

#### Example: Load

```lua
local member, err = client:Member():load({ id = "member_id" })
```

#### Example: List

```lua
local members, err = client:Member():list()
```


### Milestone

Create an instance: `local milestone = client:Milestone(nil)`

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
| `after_id` | `number` |  |
| `app_url` | `string` |  |
| `archived` | `boolean` |  |
| `before_id` | `number` |  |
| `categories` | `table` |  |
| `completed` | `boolean` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `global_id` | `string` |  |
| `id` | `number` |  |
| `key_result_ids` | `table` |  |
| `name` | `string` |  |
| `position` | `number` |  |
| `started` | `boolean` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `state` | `string` |  |
| `stats` | `table` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local milestone, err = client:Milestone():load({ id = 1 })
```

#### Example: List

```lua
local milestones, err = client:Milestone():list()
```

#### Example: Create

```lua
local milestone, err = client:Milestone():create({
  app_url = "example_app_url", -- string
  archived = true, -- boolean
  categories = {}, -- table
  completed = true, -- boolean
  completed_at = "example_completed_at", -- string
  completed_at_override = "example_completed_at_override", -- string
  created_at = "example_created_at", -- string
  description = "example_description", -- string
  entity_type = "example_entity_type", -- string
  global_id = "example_global_id", -- string
  id = 1, -- number
  key_result_ids = {}, -- table
  name = "example_name", -- string
  position = 1, -- number
  started = true, -- boolean
  started_at = "example_started_at", -- string
  started_at_override = "example_started_at_override", -- string
  state = "example_state", -- string
  stats = {}, -- table
  updated_at = "example_updated_at", -- string
})
```


### Objectif

Create an instance: `local objectif = client:Objectif(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Objective

Create an instance: `local objective = client:Objective(nil)`

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
| `after_id` | `number` |  |
| `app_url` | `string` |  |
| `archived` | `boolean` |  |
| `before_id` | `number` |  |
| `categories` | `table` |  |
| `completed` | `boolean` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `global_id` | `string` |  |
| `id` | `number` |  |
| `key_result_ids` | `table` |  |
| `name` | `string` |  |
| `position` | `number` |  |
| `started` | `boolean` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `state` | `string` |  |
| `stats` | `table` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local objective, err = client:Objective():load({ objective_public_id = 1 })
```

#### Example: List

```lua
local objectives, err = client:Objective():list()
```

#### Example: Create

```lua
local objective, err = client:Objective():create({
  app_url = "example_app_url", -- string
  archived = true, -- boolean
  categories = {}, -- table
  completed = true, -- boolean
  completed_at = "example_completed_at", -- string
  completed_at_override = "example_completed_at_override", -- string
  created_at = "example_created_at", -- string
  description = "example_description", -- string
  entity_type = "example_entity_type", -- string
  global_id = "example_global_id", -- string
  id = 1, -- number
  key_result_ids = {}, -- table
  name = "example_name", -- string
  position = 1, -- number
  started = true, -- boolean
  started_at = "example_started_at", -- string
  started_at_override = "example_started_at_override", -- string
  state = "example_state", -- string
  stats = {}, -- table
  updated_at = "example_updated_at", -- string
})
```


### Project

Create an instance: `local project = client:Project(nil)`

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
| `archived` | `boolean` |  |
| `color` | `string` |  |
| `created_at` | `string` |  |
| `days_to_thermometer` | `number` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `follower_ids` | `table` |  |
| `global_id` | `string` |  |
| `id` | `number` |  |
| `iteration_length` | `number` |  |
| `name` | `string` |  |
| `show_thermometer` | `boolean` |  |
| `start_time` | `string` |  |
| `stats` | `table` |  |
| `team_id` | `number` |  |
| `updated_at` | `string` |  |
| `workflow_id` | `number` |  |

#### Example: Load

```lua
local project, err = client:Project():load({ id = 1 })
```

#### Example: List

```lua
local projects, err = client:Project():list()
```

#### Example: Create

```lua
local project, err = client:Project():create({
  abbreviation = "example_abbreviation", -- string
  app_url = "example_app_url", -- string
  archived = true, -- boolean
  color = "example_color", -- string
  created_at = "example_created_at", -- string
  days_to_thermometer = 1, -- number
  description = "example_description", -- string
  entity_type = "example_entity_type", -- string
  external_id = "example_external_id", -- string
  follower_ids = {}, -- table
  global_id = "example_global_id", -- string
  id = 1, -- number
  iteration_length = 1, -- number
  name = "example_name", -- string
  show_thermometer = true, -- boolean
  start_time = "example_start_time", -- string
  stats = {}, -- table
  team_id = 1, -- number
  updated_at = "example_updated_at", -- string
  workflow_id = 1, -- number
})
```


### Repository

Create an instance: `local repository = client:Repository(nil)`

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
| `id` | `number` |  |
| `name` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```lua
local repository, err = client:Repository():load({ id = 1 })
```

#### Example: List

```lua
local repositorys, err = client:Repository():list()
```


### Search

Create an instance: `local search = client:Search(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `epics` | `table` |  |
| `iterations` | `table` |  |
| `milestones` | `table` |  |
| `stories` | `table` |  |

#### Example: Load

```lua
local search, err = client:Search():load()
```


### Story

Create an instance: `local story = client:Story(nil)`

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
| `after_id` | `number` |  |
| `app_url` | `string` |  |
| `archived` | `boolean` |  |
| `before_id` | `number` |  |
| `blocked` | `boolean` |  |
| `blocker` | `boolean` |  |
| `branch_ids` | `table` |  |
| `branches` | `table` |  |
| `comment_ids` | `table` |  |
| `comments` | `table` |  |
| `commit_ids` | `table` |  |
| `commits` | `table` |  |
| `completed` | `boolean` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `created_at` | `string` |  |
| `custom_fields` | `table` |  |
| `custom_fields_add` | `table` |  |
| `custom_fields_remove` | `table` |  |
| `cycle_time` | `number` |  |
| `deadline` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `epic_id` | `number` |  |
| `estimate` | `number` |  |
| `external_id` | `string` |  |
| `external_links` | `table` |  |
| `external_links_add` | `table` |  |
| `external_links_remove` | `table` |  |
| `file_ids` | `table` |  |
| `file_ids_add` | `table` |  |
| `file_ids_remove` | `table` |  |
| `files` | `table` |  |
| `follower_ids` | `table` |  |
| `follower_ids_add` | `table` |  |
| `follower_ids_remove` | `table` |  |
| `formatted_vcs_branch_name` | `string` |  |
| `global_id` | `string` |  |
| `group_id` | `string` |  |
| `group_mention_ids` | `table` |  |
| `id` | `number` |  |
| `iteration_id` | `number` |  |
| `label_ids` | `table` |  |
| `labels` | `table` |  |
| `labels_add` | `table` |  |
| `labels_remove` | `table` |  |
| `lead_time` | `number` |  |
| `linked_file_ids` | `table` |  |
| `linked_file_ids_add` | `table` |  |
| `linked_file_ids_remove` | `table` |  |
| `linked_files` | `table` |  |
| `member_mention_ids` | `table` |  |
| `mention_ids` | `table` |  |
| `move_to` | `string` |  |
| `moved_at` | `string` |  |
| `name` | `string` |  |
| `num_tasks_completed` | `number` |  |
| `owner_ids` | `table` |  |
| `owner_ids_add` | `table` |  |
| `owner_ids_remove` | `table` |  |
| `parent_story_id` | `number` |  |
| `position` | `number` |  |
| `previous_iteration_ids` | `table` |  |
| `project_id` | `number` |  |
| `pull_request_ids` | `table` |  |
| `pull_requests` | `table` |  |
| `requested_by_id` | `string` |  |
| `source_task_id` | `number` |  |
| `started` | `boolean` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `stats` | `table` |  |
| `story_links` | `table` |  |
| `story_template_id` | `string` |  |
| `story_type` | `string` |  |
| `sub_task_story_ids` | `table` |  |
| `sub_tasks` | `table` |  |
| `synced_item` | `table` |  |
| `task_ids` | `table` |  |
| `tasks` | `table` |  |
| `updated_at` | `string` |  |
| `workflow_id` | `number` |  |
| `workflow_state_id` | `number` |  |

#### Example: Load

```lua
local story, err = client:Story():load({ id = 1 })
```

#### Example: List

```lua
local storys, err = client:Story():list()
```

#### Example: Create

```lua
local story, err = client:Story():create({
  app_url = "example_app_url", -- string
  archived = true, -- boolean
  blocked = true, -- boolean
  blocker = true, -- boolean
  branches = {}, -- table
  comments = {}, -- table
  commits = {}, -- table
  completed = true, -- boolean
  completed_at = "example_completed_at", -- string
  completed_at_override = "example_completed_at_override", -- string
  created_at = "example_created_at", -- string
  deadline = "example_deadline", -- string
  description = "example_description", -- string
  entity_type = "example_entity_type", -- string
  epic_id = 1, -- number
  estimate = 1, -- number
  external_id = "example_external_id", -- string
  external_links = {}, -- table
  files = {}, -- table
  follower_ids = {}, -- table
  global_id = "example_global_id", -- string
  group_id = "example_group_id", -- string
  group_mention_ids = {}, -- table
  id = 1, -- number
  iteration_id = 1, -- number
  label_ids = {}, -- table
  labels = {}, -- table
  linked_files = {}, -- table
  member_mention_ids = {}, -- table
  mention_ids = {}, -- table
  moved_at = "example_moved_at", -- string
  name = "example_name", -- string
  owner_ids = {}, -- table
  position = 1, -- number
  previous_iteration_ids = {}, -- table
  project_id = 1, -- number
  pull_requests = {}, -- table
  requested_by_id = "example_requested_by_id", -- string
  started = true, -- boolean
  started_at = "example_started_at", -- string
  started_at_override = "example_started_at_override", -- string
  stats = {}, -- table
  story_links = {}, -- table
  story_template_id = "example_story_template_id", -- string
  story_type = "example_story_type", -- string
  synced_item = {}, -- table
  tasks = {}, -- table
  updated_at = "example_updated_at", -- string
  workflow_id = 1, -- number
  workflow_state_id = 1, -- number
})
```


### StoryComment

Create an instance: `local story_comment = client:StoryComment(nil)`

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
| `blocker` | `boolean` |  |
| `created_at` | `string` |  |
| `deleted` | `boolean` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `group_mention_ids` | `table` |  |
| `id` | `number` |  |
| `linked_to_slack` | `boolean` |  |
| `member_mention_ids` | `table` |  |
| `mention_ids` | `table` |  |
| `parent_id` | `number` |  |
| `position` | `number` |  |
| `reactions` | `table` |  |
| `story_id` | `number` |  |
| `text` | `string` |  |
| `unblocks_parent` | `boolean` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local story_comment, err = client:StoryComment():load({ id = 1, story_id = 1 })
```

#### Example: List

```lua
local story_comments, err = client:StoryComment():list()
```

#### Example: Create

```lua
local story_comment, err = client:StoryComment():create({
  app_url = "example_app_url", -- string
  author_id = "example_author_id", -- string
  created_at = "example_created_at", -- string
  deleted = true, -- boolean
  entity_type = "example_entity_type", -- string
  external_id = "example_external_id", -- string
  group_mention_ids = {}, -- table
  linked_to_slack = true, -- boolean
  member_mention_ids = {}, -- table
  mention_ids = {}, -- table
  position = 1, -- number
  reactions = {}, -- table
  text = "example_text", -- string
  updated_at = "example_updated_at", -- string
})
```


### StoryLink

Create an instance: `local story_link = client:StoryLink(nil)`

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
| `id` | `number` |  |
| `object_id` | `number` |  |
| `subject_id` | `number` |  |
| `subject_workflow_state_id` | `number` |  |
| `updated_at` | `string` |  |
| `verb` | `string` |  |

#### Example: Load

```lua
local story_link, err = client:StoryLink():load({ id = 1 })
```

#### Example: Create

```lua
local story_link, err = client:StoryLink():create({
  created_at = "example_created_at", -- string
  entity_type = "example_entity_type", -- string
  id = 1, -- number
  object_id = 1, -- number
  subject_id = 1, -- number
  subject_workflow_state_id = 1, -- number
  updated_at = "example_updated_at", -- string
  verb = "example_verb", -- string
})
```


### StoryReaction

Create an instance: `local story_reaction = client:StoryReaction(nil)`

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

```lua
local story_reaction, err = client:StoryReaction():create({
  comment_id = 1, -- number
  story_id = 1, -- number
  emoji = "example_emoji", -- string
})
```


### StorySlim

Create an instance: `local story_slim = client:StorySlim(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `number` |  |
| `archived` | `boolean` |  |
| `before_id` | `number` |  |
| `completed_at_end` | `string` |  |
| `completed_at_start` | `string` |  |
| `created_at_end` | `string` |  |
| `created_at_start` | `string` |  |
| `custom_fields_add` | `table` |  |
| `custom_fields_remove` | `table` |  |
| `deadline` | `string` |  |
| `deadline_end` | `string` |  |
| `deadline_start` | `string` |  |
| `epic_id` | `number` |  |
| `epic_ids` | `table` |  |
| `estimate` | `number` |  |
| `external_id` | `string` |  |
| `external_links` | `table` |  |
| `follower_ids_add` | `table` |  |
| `follower_ids_remove` | `table` |  |
| `group_id` | `string` |  |
| `group_ids` | `table` |  |
| `includes_description` | `boolean` |  |
| `iteration_id` | `number` |  |
| `iteration_ids` | `table` |  |
| `label_ids` | `table` |  |
| `label_name` | `string` |  |
| `labels_add` | `table` |  |
| `labels_remove` | `table` |  |
| `move_to` | `string` |  |
| `owner_id` | `string` |  |
| `owner_ids` | `table` |  |
| `owner_ids_add` | `table` |  |
| `owner_ids_remove` | `table` |  |
| `project_id` | `number` |  |
| `project_ids` | `table` |  |
| `requested_by_id` | `string` |  |
| `stories` | `table` |  |
| `story_ids` | `table` |  |
| `story_type` | `string` |  |
| `updated_at_end` | `string` |  |
| `updated_at_start` | `string` |  |
| `workflow_state_id` | `number` |  |
| `workflow_state_types` | `table` |  |

#### Example: Create

```lua
local story_slim, err = client:StorySlim():create({
  stories = {}, -- table
  story_ids = {}, -- table
})
```


### Task

Create an instance: `local task = client:Task(nil)`

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
| `after_id` | `number` |  |
| `before_id` | `number` |  |
| `complete` | `boolean` |  |
| `completed_at` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `global_id` | `string` |  |
| `group_mention_ids` | `table` |  |
| `id` | `number` |  |
| `member_mention_ids` | `table` |  |
| `mention_ids` | `table` |  |
| `owner_ids` | `table` |  |
| `position` | `number` |  |
| `story_id` | `number` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local task, err = client:Task():load({ id = 1, story_id = 1 })
```

#### Example: Create

```lua
local task, err = client:Task():create({
  story_id = 1, -- number
  complete = true, -- boolean
  completed_at = "example_completed_at", -- string
  created_at = "example_created_at", -- string
  description = "example_description", -- string
  entity_type = "example_entity_type", -- string
  external_id = "example_external_id", -- string
  global_id = "example_global_id", -- string
  group_mention_ids = {}, -- table
  id = 1, -- number
  member_mention_ids = {}, -- table
  mention_ids = {}, -- table
  owner_ids = {}, -- table
  position = 1, -- number
  updated_at = "example_updated_at", -- string
})
```


### ThreadedComment

Create an instance: `local threaded_comment = client:ThreadedComment(nil)`

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
| `comments` | `table` |  |
| `created_at` | `string` |  |
| `deleted` | `boolean` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `group_mention_ids` | `table` |  |
| `id` | `number` |  |
| `member_mention_ids` | `table` |  |
| `mention_ids` | `table` |  |
| `text` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local threaded_comment, err = client:ThreadedComment():load({ id = 1, epic_id = 1 })
```

#### Example: List

```lua
local threaded_comments, err = client:ThreadedComment():list()
```

#### Example: Create

```lua
local threaded_comment, err = client:ThreadedComment():create({
  epic_id = 1, -- number
  app_url = "example_app_url", -- string
  author_id = "example_author_id", -- string
  comments = {}, -- table
  created_at = "example_created_at", -- string
  deleted = true, -- boolean
  entity_type = "example_entity_type", -- string
  external_id = "example_external_id", -- string
  group_mention_ids = {}, -- table
  member_mention_ids = {}, -- table
  mention_ids = {}, -- table
  text = "example_text", -- string
  updated_at = "example_updated_at", -- string
})
```


### UploadedFile

Create an instance: `local uploaded_file = client:UploadedFile(nil)`

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
| `group_mention_ids` | `table` |  |
| `id` | `number` |  |
| `member_mention_ids` | `table` |  |
| `mention_ids` | `table` |  |
| `name` | `string` |  |
| `size` | `number` |  |
| `story_ids` | `table` |  |
| `thumbnail_url` | `string` |  |
| `updated_at` | `string` |  |
| `uploader_id` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```lua
local uploaded_file, err = client:UploadedFile():load({ id = 1 })
```

#### Example: List

```lua
local uploaded_files, err = client:UploadedFile():list()
```

#### Example: Create

```lua
local uploaded_file, err = client:UploadedFile():create({
  content_type = "example_content_type", -- string
  created_at = "example_created_at", -- string
  description = "example_description", -- string
  entity_type = "example_entity_type", -- string
  external_id = "example_external_id", -- string
  filename = "example_filename", -- string
  group_mention_ids = {}, -- table
  id = 1, -- number
  member_mention_ids = {}, -- table
  mention_ids = {}, -- table
  name = "example_name", -- string
  size = 1, -- number
  story_ids = {}, -- table
  thumbnail_url = "example_thumbnail_url", -- string
  updated_at = "example_updated_at", -- string
  uploader_id = "example_uploader_id", -- string
  url = "example_url", -- string
})
```


### Webhook

Create an instance: `local webhook = client:Webhook(nil)`

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

```lua
local webhook, err = client:Webhook():load({ id = 1 })
```

#### Example: Create

```lua
local webhook, err = client:Webhook():create({
  webhook_url = "example_webhook_url", -- string
})
```


### Workflow

Create an instance: `local workflow = client:Workflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_assign_owner` | `boolean` |  |
| `created_at` | `string` |  |
| `default_state_id` | `number` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `project_ids` | `table` |  |
| `states` | `table` |  |
| `team_id` | `number` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local workflow, err = client:Workflow():load({ id = 1 })
```

#### Example: List

```lua
local workflows, err = client:Workflow():list()
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── shortcut_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`shortcut_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local iteration = client:Iteration()
iteration:list()

-- iteration:data_get() now returns the iteration data from the last list
-- iteration:match_get() returns the last match criteria
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

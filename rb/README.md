# Shortcut Ruby SDK



The Ruby SDK for the Shortcut API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Bulk` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/shortcut-sdk/releases](https://github.com/voxgig-sdk/shortcut-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "Shortcut_sdk"

client = ShortcutSDK.new({
  "apikey" => ENV["SHORTCUT_APIKEY"],
})
```

### 3. Load a health

Health is nested under epic, so provide the `epic_id`.

```ruby
begin
  # load returns the bare Health record (raises on error).
  health = client.Health.load({ "epic_id" => 1 })
  puts health
rescue => err
  warn "load failed: #{err}"
end
```

### 4. Create, update, and remove

```ruby
# Remove
client.Bulk.remove()
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  iterations = client.Iteration.list()
rescue => err
  warn "list failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```ruby
client = ShortcutSDK.test({
  "entity" => { "iteration" => { "test01" => { "id" => "test01" } } },
})

# Entity ops return the bare mock record (raises on error).
iteration = client.Iteration.list()
puts iteration
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = ShortcutSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### ShortcutSDK

```ruby
require_relative "Shortcut_sdk"
client = ShortcutSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = ShortcutSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### ShortcutSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
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
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `ShortcutError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `bulk = client.Bulk`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Category

Create an instance: `category = client.Category`

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
| `archived` | `Boolean` |  |
| `color` | `String` |  |
| `created_at` | `String` |  |
| `entity_type` | `String` |  |
| `external_id` | `String` |  |
| `global_id` | `String` |  |
| `id` | `Integer` |  |
| `name` | `String` |  |
| `type` | `String` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Category record (raises on error).
category = client.Category.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Category records (raises on error).
categorys = client.Category.list
```

#### Example: Create

```ruby
category = client.Category.create({
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


### Comment

Create an instance: `comment = client.Comment`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CustomField

Create an instance: `custom_field = client.CustomField`

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
| `after_id` | `String` |  |
| `before_id` | `String` |  |
| `canonical_name` | `String` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `enabled` | `Boolean` |  |
| `entity_type` | `String` |  |
| `field_type` | `String` |  |
| `fixed_position` | `Boolean` |  |
| `icon_set_identifier` | `String` |  |
| `id` | `String` |  |
| `name` | `String` |  |
| `position` | `Integer` |  |
| `story_types` | `Array` |  |
| `updated_at` | `String` |  |
| `values` | `Array` |  |

#### Example: Load

```ruby
# load returns the bare CustomField record (raises on error).
custom_field = client.CustomField.load({ "id" => "custom_field_id" })
```

#### Example: List

```ruby
# list returns an Array of CustomField records (raises on error).
custom_fields = client.CustomField.list
```


### Disable

Create an instance: `disable = client.Disable`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### DocSlim

Create an instance: `doc_slim = client.DocSlim`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `String` |  |
| `content` | `String` |  |
| `id` | `String` |  |
| `title` | `String` |  |

#### Example: List

```ruby
# list returns an Array of DocSlim records (raises on error).
doc_slims = client.DocSlim.list
```

#### Example: Create

```ruby
doc_slim = client.DocSlim.create({
  "app_url" => "example_app_url", # String
  "content" => "example_content", # String
  "id" => "example_id", # String
  "title" => "example_title", # String
})
```


### Enable

Create an instance: `enable = client.Enable`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### EntityTemplate

Create an instance: `entity_template = client.EntityTemplate`

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
| `author_id` | `String` |  |
| `created_at` | `String` |  |
| `custom_fields` | `Array` |  |
| `deadline` | `String` |  |
| `description` | `String` |  |
| `entity_type` | `String` |  |
| `epic_id` | `Integer` |  |
| `estimate` | `Integer` |  |
| `external_links` | `Array` |  |
| `files` | `Array` |  |
| `follower_ids` | `Array` |  |
| `group_id` | `String` |  |
| `id` | `String` |  |
| `iteration_id` | `Integer` |  |
| `label_ids` | `Array` |  |
| `labels` | `Array` |  |
| `last_used_at` | `String` |  |
| `linked_files` | `Array` |  |
| `name` | `String` |  |
| `owner_ids` | `Array` |  |
| `project_id` | `Integer` |  |
| `story_contents` | `Hash` |  |
| `story_type` | `String` |  |
| `sub_tasks` | `Array` |  |
| `tasks` | `Array` |  |
| `updated_at` | `String` |  |
| `workflow_state_id` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare EntityTemplate record (raises on error).
entity_template = client.EntityTemplate.load({ "id" => "entity_template_id" })
```

#### Example: List

```ruby
# list returns an Array of EntityTemplate records (raises on error).
entity_templates = client.EntityTemplate.list
```

#### Example: Create

```ruby
entity_template = client.EntityTemplate.create({
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "last_used_at" => "example_last_used_at", # String
  "story_contents" => {}, # Hash
  "updated_at" => "example_updated_at", # String
})
```


### Epic

Create an instance: `epic = client.Epic`

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
| `after_id` | `Integer` |  |
| `app_url` | `String` |  |
| `archived` | `Boolean` |  |
| `associated_groups` | `Array` |  |
| `before_id` | `Integer` |  |
| `comments` | `Array` |  |
| `completed` | `Boolean` |  |
| `completed_at` | `String` |  |
| `completed_at_override` | `String` |  |
| `converted_from_story_id` | `Integer` |  |
| `created_at` | `String` |  |
| `deadline` | `String` |  |
| `description` | `String` |  |
| `entity_type` | `String` |  |
| `epic_state_id` | `Integer` |  |
| `external_id` | `String` |  |
| `follower_ids` | `Array` |  |
| `global_id` | `String` |  |
| `group_id` | `String` |  |
| `group_ids` | `Array` |  |
| `group_mention_ids` | `Array` |  |
| `health` | `Hash` |  |
| `id` | `Integer` |  |
| `label_ids` | `Array` |  |
| `labels` | `Array` |  |
| `member_mention_ids` | `Array` |  |
| `mention_ids` | `Array` |  |
| `milestone_id` | `Integer` |  |
| `name` | `String` |  |
| `objective_ids` | `Array` |  |
| `owner_ids` | `Array` |  |
| `planned_start_date` | `String` |  |
| `position` | `Integer` |  |
| `productboard_id` | `String` |  |
| `productboard_name` | `String` |  |
| `productboard_plugin_id` | `String` |  |
| `productboard_url` | `String` |  |
| `project_ids` | `Array` |  |
| `requested_by_id` | `String` |  |
| `started` | `Boolean` |  |
| `started_at` | `String` |  |
| `started_at_override` | `String` |  |
| `state` | `String` |  |
| `stats` | `Hash` |  |
| `stories_without_projects` | `Integer` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Epic record (raises on error).
epic = client.Epic.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Epic records (raises on error).
epics = client.Epic.list
```

#### Example: Create

```ruby
epic = client.Epic.create({
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


### EpicPaginatedResult

Create an instance: `epic_paginated_result = client.EpicPaginatedResult`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `String` |  |
| `archived` | `Boolean` |  |
| `associated_groups` | `Array` |  |
| `completed` | `Boolean` |  |
| `completed_at` | `String` |  |
| `completed_at_override` | `String` |  |
| `created_at` | `String` |  |
| `deadline` | `String` |  |
| `description` | `String` |  |
| `entity_type` | `String` |  |
| `epic_state_id` | `Integer` |  |
| `external_id` | `String` |  |
| `follower_ids` | `Array` |  |
| `global_id` | `String` |  |
| `group_id` | `String` |  |
| `group_ids` | `Array` |  |
| `group_mention_ids` | `Array` |  |
| `id` | `Integer` |  |
| `label_ids` | `Array` |  |
| `labels` | `Array` |  |
| `member_mention_ids` | `Array` |  |
| `mention_ids` | `Array` |  |
| `milestone_id` | `Integer` |  |
| `name` | `String` |  |
| `objective_ids` | `Array` |  |
| `owner_ids` | `Array` |  |
| `planned_start_date` | `String` |  |
| `position` | `Integer` |  |
| `productboard_id` | `String` |  |
| `productboard_name` | `String` |  |
| `productboard_plugin_id` | `String` |  |
| `productboard_url` | `String` |  |
| `project_ids` | `Array` |  |
| `requested_by_id` | `String` |  |
| `started` | `Boolean` |  |
| `started_at` | `String` |  |
| `started_at_override` | `String` |  |
| `state` | `String` |  |
| `stats` | `Hash` |  |
| `stories_without_projects` | `Integer` |  |
| `updated_at` | `String` |  |

#### Example: List

```ruby
# list returns an Array of EpicPaginatedResult records (raises on error).
epic_paginated_results = client.EpicPaginatedResult.list
```


### EpicUnlinkProductboard

Create an instance: `epic_unlink_productboard = client.EpicUnlinkProductboard`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
epic_unlink_productboard = client.EpicUnlinkProductboard.create({
  "id" => 1, # Integer
})
```


### EpicWorkflow

Create an instance: `epic_workflow = client.EpicWorkflow`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `color` | `String` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `entity_type` | `String` |  |
| `global_id` | `String` |  |
| `id` | `Integer` |  |
| `name` | `String` |  |
| `position` | `Integer` |  |
| `type` | `String` |  |
| `updated_at` | `String` |  |

#### Example: List

```ruby
# list returns an Array of EpicWorkflow records (raises on error).
epic_workflows = client.EpicWorkflow.list
```


### Group

Create an instance: `group = client.Group`

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
| `app_url` | `String` |  |
| `archived` | `Boolean` |  |
| `color` | `String` |  |
| `color_key` | `String` |  |
| `created_at` | `String` |  |
| `default_workflow_id` | `Integer` |  |
| `description` | `String` |  |
| `display_icon` | `Hash` |  |
| `display_icon_id` | `String` |  |
| `entity_type` | `String` |  |
| `global_id` | `String` |  |
| `id` | `String` |  |
| `member_ids` | `Array` |  |
| `mention_name` | `String` |  |
| `name` | `String` |  |
| `num_epics_started` | `Integer` |  |
| `num_stories` | `Integer` |  |
| `num_stories_backlog` | `Integer` |  |
| `num_stories_started` | `Integer` |  |
| `updated_at` | `String` |  |
| `workflow_ids` | `Array` |  |

#### Example: Load

```ruby
# load returns the bare Group record (raises on error).
group = client.Group.load({ "id" => "group_id" })
```

#### Example: List

```ruby
# list returns an Array of Group records (raises on error).
groups = client.Group.list
```

#### Example: Create

```ruby
group = client.Group.create({
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


### Health

Create an instance: `health = client.Health`

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
| `author_id` | `String` |  |
| `created_at` | `String` |  |
| `entity_type` | `String` |  |
| `epic_id` | `Integer` |  |
| `id` | `String` |  |
| `objective_id` | `Integer` |  |
| `status` | `String` |  |
| `text` | `String` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Health record (raises on error).
health = client.Health.load({ "epic_id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Health records (raises on error).
healths = client.Health.list
```

#### Example: Create

```ruby
health = client.Health.create({
  "epic_id" => 1, # Integer
  "entity_type" => "example_entity_type", # String
  "id" => "example_id", # String
  "status" => "example_status", # String
})
```


### History

Create an instance: `history = client.History`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `Array` |  |
| `actor_name` | `String` |  |
| `automation_id` | `String` |  |
| `changed_at` | `String` |  |
| `external_id` | `String` |  |
| `id` | `String` |  |
| `member_id` | `String` |  |
| `primary_id` | `String` |  |
| `references` | `Array` |  |
| `version` | `String` |  |
| `webhook_id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of History records (raises on error).
historys = client.History.list
```


### Iteration

Create an instance: `iteration = client.Iteration`

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
| `app_url` | `String` |  |
| `associated_groups` | `Array` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `end_date` | `String` |  |
| `entity_type` | `String` |  |
| `follower_ids` | `Array` |  |
| `global_id` | `String` |  |
| `group_ids` | `Array` |  |
| `group_mention_ids` | `Array` |  |
| `id` | `Integer` |  |
| `label_ids` | `Array` |  |
| `labels` | `Array` |  |
| `member_mention_ids` | `Array` |  |
| `mention_ids` | `Array` |  |
| `name` | `String` |  |
| `start_date` | `String` |  |
| `stats` | `Hash` |  |
| `status` | `String` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Iteration record (raises on error).
iteration = client.Iteration.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Iteration records (raises on error).
iterations = client.Iteration.list
```

#### Example: Create

```ruby
iteration = client.Iteration.create({
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


### KeyResult

Create an instance: `key_result = client.KeyResult`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_observed_value` | `Hash` |  |
| `current_target_value` | `Hash` |  |
| `id` | `String` |  |
| `initial_observed_value` | `Hash` |  |
| `name` | `String` |  |
| `objective_id` | `Integer` |  |
| `observed_value` | `Hash` |  |
| `progress` | `Integer` |  |
| `target_value` | `Hash` |  |
| `type` | `String` |  |

#### Example: Load

```ruby
# load returns the bare KeyResult record (raises on error).
key_result = client.KeyResult.load({ "id" => "key_result_id" })
```


### Label

Create an instance: `label = client.Label`

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
| `app_url` | `String` |  |
| `archived` | `Boolean` |  |
| `color` | `String` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `entity_type` | `String` |  |
| `external_id` | `String` |  |
| `global_id` | `String` |  |
| `id` | `Integer` |  |
| `name` | `String` |  |
| `num_epics` | `Integer` |  |
| `num_epics_completed` | `Integer` |  |
| `num_epics_in_progress` | `Integer` |  |
| `num_epics_total` | `Integer` |  |
| `num_epics_unstarted` | `Integer` |  |
| `num_points_backlog` | `Integer` |  |
| `num_points_completed` | `Integer` |  |
| `num_points_in_progress` | `Integer` |  |
| `num_points_total` | `Integer` |  |
| `num_points_unstarted` | `Integer` |  |
| `num_related_documents` | `Integer` |  |
| `num_stories_backlog` | `Integer` |  |
| `num_stories_completed` | `Integer` |  |
| `num_stories_in_progress` | `Integer` |  |
| `num_stories_total` | `Integer` |  |
| `num_stories_unestimated` | `Integer` |  |
| `num_stories_unstarted` | `Integer` |  |
| `stats` | `Hash` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Label record (raises on error).
label = client.Label.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Label records (raises on error).
labels = client.Label.list
```

#### Example: Create

```ruby
label = client.Label.create({
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


### LinkedFile

Create an instance: `linked_file = client.LinkedFile`

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
| `content_type` | `String` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `entity_type` | `String` |  |
| `group_mention_ids` | `Array` |  |
| `id` | `Integer` |  |
| `member_mention_ids` | `Array` |  |
| `mention_ids` | `Array` |  |
| `name` | `String` |  |
| `size` | `Integer` |  |
| `story_id` | `Integer` |  |
| `story_ids` | `Array` |  |
| `thumbnail_url` | `String` |  |
| `type` | `String` |  |
| `updated_at` | `String` |  |
| `uploader_id` | `String` |  |
| `url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare LinkedFile record (raises on error).
linked_file = client.LinkedFile.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of LinkedFile records (raises on error).
linked_files = client.LinkedFile.list
```

#### Example: Create

```ruby
linked_file = client.LinkedFile.create({
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


### Member

Create an instance: `member = client.Member`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `created_without_invite` | `Boolean` |  |
| `disabled` | `Boolean` |  |
| `entity_type` | `String` |  |
| `global_id` | `String` |  |
| `group_ids` | `Array` |  |
| `id` | `String` |  |
| `installation_id` | `String` |  |
| `is_owner` | `Boolean` |  |
| `mention_name` | `String` |  |
| `name` | `String` |  |
| `organization2` | `Hash` |  |
| `profile` | `Hash` |  |
| `replaced_by` | `String` |  |
| `role` | `String` |  |
| `state` | `String` |  |
| `updated_at` | `String` |  |
| `workspace2` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare Member record (raises on error).
member = client.Member.load({ "id" => "member_id" })
```

#### Example: List

```ruby
# list returns an Array of Member records (raises on error).
members = client.Member.list
```


### Milestone

Create an instance: `milestone = client.Milestone`

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
| `after_id` | `Integer` |  |
| `app_url` | `String` |  |
| `archived` | `Boolean` |  |
| `before_id` | `Integer` |  |
| `categories` | `Array` |  |
| `completed` | `Boolean` |  |
| `completed_at` | `String` |  |
| `completed_at_override` | `String` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `entity_type` | `String` |  |
| `global_id` | `String` |  |
| `id` | `Integer` |  |
| `key_result_ids` | `Array` |  |
| `name` | `String` |  |
| `position` | `Integer` |  |
| `started` | `Boolean` |  |
| `started_at` | `String` |  |
| `started_at_override` | `String` |  |
| `state` | `String` |  |
| `stats` | `Hash` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Milestone record (raises on error).
milestone = client.Milestone.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Milestone records (raises on error).
milestones = client.Milestone.list
```

#### Example: Create

```ruby
milestone = client.Milestone.create({
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


### Objectif

Create an instance: `objectif = client.Objectif`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Objective

Create an instance: `objective = client.Objective`

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
| `after_id` | `Integer` |  |
| `app_url` | `String` |  |
| `archived` | `Boolean` |  |
| `before_id` | `Integer` |  |
| `categories` | `Array` |  |
| `completed` | `Boolean` |  |
| `completed_at` | `String` |  |
| `completed_at_override` | `String` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `entity_type` | `String` |  |
| `global_id` | `String` |  |
| `id` | `Integer` |  |
| `key_result_ids` | `Array` |  |
| `name` | `String` |  |
| `position` | `Integer` |  |
| `started` | `Boolean` |  |
| `started_at` | `String` |  |
| `started_at_override` | `String` |  |
| `state` | `String` |  |
| `stats` | `Hash` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Objective record (raises on error).
objective = client.Objective.load({ "objective_public_id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Objective records (raises on error).
objectives = client.Objective.list
```

#### Example: Create

```ruby
objective = client.Objective.create({
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


### Project

Create an instance: `project = client.Project`

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
| `abbreviation` | `String` |  |
| `app_url` | `String` |  |
| `archived` | `Boolean` |  |
| `color` | `String` |  |
| `created_at` | `String` |  |
| `days_to_thermometer` | `Integer` |  |
| `description` | `String` |  |
| `entity_type` | `String` |  |
| `external_id` | `String` |  |
| `follower_ids` | `Array` |  |
| `global_id` | `String` |  |
| `id` | `Integer` |  |
| `iteration_length` | `Integer` |  |
| `name` | `String` |  |
| `show_thermometer` | `Boolean` |  |
| `start_time` | `String` |  |
| `stats` | `Hash` |  |
| `team_id` | `Integer` |  |
| `updated_at` | `String` |  |
| `workflow_id` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare Project record (raises on error).
project = client.Project.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Project records (raises on error).
projects = client.Project.list
```

#### Example: Create

```ruby
project = client.Project.create({
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


### Repository

Create an instance: `repository = client.Repository`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `entity_type` | `String` |  |
| `external_id` | `String` |  |
| `full_name` | `String` |  |
| `id` | `Integer` |  |
| `name` | `String` |  |
| `type` | `String` |  |
| `updated_at` | `String` |  |
| `url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Repository record (raises on error).
repository = client.Repository.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Repository records (raises on error).
repositorys = client.Repository.list
```


### Search

Create an instance: `search = client.Search`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `epics` | `Hash` |  |
| `iterations` | `Hash` |  |
| `milestones` | `Hash` |  |
| `stories` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare Search record (raises on error).
search = client.Search.load()
```


### Story

Create an instance: `story = client.Story`

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
| `after_id` | `Integer` |  |
| `app_url` | `String` |  |
| `archived` | `Boolean` |  |
| `before_id` | `Integer` |  |
| `blocked` | `Boolean` |  |
| `blocker` | `Boolean` |  |
| `branch_ids` | `Array` |  |
| `branches` | `Array` |  |
| `comment_ids` | `Array` |  |
| `comments` | `Array` |  |
| `commit_ids` | `Array` |  |
| `commits` | `Array` |  |
| `completed` | `Boolean` |  |
| `completed_at` | `String` |  |
| `completed_at_override` | `String` |  |
| `created_at` | `String` |  |
| `custom_fields` | `Array` |  |
| `custom_fields_add` | `Array` |  |
| `custom_fields_remove` | `Array` |  |
| `cycle_time` | `Integer` |  |
| `deadline` | `String` |  |
| `description` | `String` |  |
| `entity_type` | `String` |  |
| `epic_id` | `Integer` |  |
| `estimate` | `Integer` |  |
| `external_id` | `String` |  |
| `external_links` | `Array` |  |
| `external_links_add` | `Array` |  |
| `external_links_remove` | `Array` |  |
| `file_ids` | `Array` |  |
| `file_ids_add` | `Array` |  |
| `file_ids_remove` | `Array` |  |
| `files` | `Array` |  |
| `follower_ids` | `Array` |  |
| `follower_ids_add` | `Array` |  |
| `follower_ids_remove` | `Array` |  |
| `formatted_vcs_branch_name` | `String` |  |
| `global_id` | `String` |  |
| `group_id` | `String` |  |
| `group_mention_ids` | `Array` |  |
| `id` | `Integer` |  |
| `iteration_id` | `Integer` |  |
| `label_ids` | `Array` |  |
| `labels` | `Array` |  |
| `labels_add` | `Array` |  |
| `labels_remove` | `Array` |  |
| `lead_time` | `Integer` |  |
| `linked_file_ids` | `Array` |  |
| `linked_file_ids_add` | `Array` |  |
| `linked_file_ids_remove` | `Array` |  |
| `linked_files` | `Array` |  |
| `member_mention_ids` | `Array` |  |
| `mention_ids` | `Array` |  |
| `move_to` | `String` |  |
| `moved_at` | `String` |  |
| `name` | `String` |  |
| `num_tasks_completed` | `Integer` |  |
| `owner_ids` | `Array` |  |
| `owner_ids_add` | `Array` |  |
| `owner_ids_remove` | `Array` |  |
| `parent_story_id` | `Integer` |  |
| `position` | `Integer` |  |
| `previous_iteration_ids` | `Array` |  |
| `project_id` | `Integer` |  |
| `pull_request_ids` | `Array` |  |
| `pull_requests` | `Array` |  |
| `requested_by_id` | `String` |  |
| `source_task_id` | `Integer` |  |
| `started` | `Boolean` |  |
| `started_at` | `String` |  |
| `started_at_override` | `String` |  |
| `stats` | `Hash` |  |
| `story_links` | `Array` |  |
| `story_template_id` | `String` |  |
| `story_type` | `String` |  |
| `sub_task_story_ids` | `Array` |  |
| `sub_tasks` | `Array` |  |
| `synced_item` | `Hash` |  |
| `task_ids` | `Array` |  |
| `tasks` | `Array` |  |
| `updated_at` | `String` |  |
| `workflow_id` | `Integer` |  |
| `workflow_state_id` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare Story record (raises on error).
story = client.Story.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Story records (raises on error).
storys = client.Story.list
```

#### Example: Create

```ruby
story = client.Story.create({
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


### StoryComment

Create an instance: `story_comment = client.StoryComment`

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
| `app_url` | `String` |  |
| `author_id` | `String` |  |
| `blocker` | `Boolean` |  |
| `created_at` | `String` |  |
| `deleted` | `Boolean` |  |
| `entity_type` | `String` |  |
| `external_id` | `String` |  |
| `group_mention_ids` | `Array` |  |
| `id` | `Integer` |  |
| `linked_to_slack` | `Boolean` |  |
| `member_mention_ids` | `Array` |  |
| `mention_ids` | `Array` |  |
| `parent_id` | `Integer` |  |
| `position` | `Integer` |  |
| `reactions` | `Array` |  |
| `story_id` | `Integer` |  |
| `text` | `String` |  |
| `unblocks_parent` | `Boolean` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the bare StoryComment record (raises on error).
story_comment = client.StoryComment.load({ "id" => 1, "story_id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of StoryComment records (raises on error).
story_comments = client.StoryComment.list
```

#### Example: Create

```ruby
story_comment = client.StoryComment.create({
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


### StoryLink

Create an instance: `story_link = client.StoryLink`

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
| `created_at` | `String` |  |
| `entity_type` | `String` |  |
| `id` | `Integer` |  |
| `object_id` | `Integer` |  |
| `subject_id` | `Integer` |  |
| `subject_workflow_state_id` | `Integer` |  |
| `updated_at` | `String` |  |
| `verb` | `String` |  |

#### Example: Load

```ruby
# load returns the bare StoryLink record (raises on error).
story_link = client.StoryLink.load({ "id" => 1 })
```

#### Example: Create

```ruby
story_link = client.StoryLink.create({
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


### StoryReaction

Create an instance: `story_reaction = client.StoryReaction`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `emoji` | `String` |  |

#### Example: Create

```ruby
story_reaction = client.StoryReaction.create({
  "comment_id" => 1, # Integer
  "story_id" => 1, # Integer
  "emoji" => "example_emoji", # String
})
```


### StorySlim

Create an instance: `story_slim = client.StorySlim`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `Integer` |  |
| `archived` | `Boolean` |  |
| `before_id` | `Integer` |  |
| `completed_at_end` | `String` |  |
| `completed_at_start` | `String` |  |
| `created_at_end` | `String` |  |
| `created_at_start` | `String` |  |
| `custom_fields_add` | `Array` |  |
| `custom_fields_remove` | `Array` |  |
| `deadline` | `String` |  |
| `deadline_end` | `String` |  |
| `deadline_start` | `String` |  |
| `epic_id` | `Integer` |  |
| `epic_ids` | `Array` |  |
| `estimate` | `Integer` |  |
| `external_id` | `String` |  |
| `external_links` | `Array` |  |
| `follower_ids_add` | `Array` |  |
| `follower_ids_remove` | `Array` |  |
| `group_id` | `String` |  |
| `group_ids` | `Array` |  |
| `includes_description` | `Boolean` |  |
| `iteration_id` | `Integer` |  |
| `iteration_ids` | `Array` |  |
| `label_ids` | `Array` |  |
| `label_name` | `String` |  |
| `labels_add` | `Array` |  |
| `labels_remove` | `Array` |  |
| `move_to` | `String` |  |
| `owner_id` | `String` |  |
| `owner_ids` | `Array` |  |
| `owner_ids_add` | `Array` |  |
| `owner_ids_remove` | `Array` |  |
| `project_id` | `Integer` |  |
| `project_ids` | `Array` |  |
| `requested_by_id` | `String` |  |
| `stories` | `Array` |  |
| `story_ids` | `Array` |  |
| `story_type` | `String` |  |
| `updated_at_end` | `String` |  |
| `updated_at_start` | `String` |  |
| `workflow_state_id` | `Integer` |  |
| `workflow_state_types` | `Array` |  |

#### Example: Create

```ruby
story_slim = client.StorySlim.create({
  "stories" => [], # Array
  "story_ids" => [], # Array
})
```


### Task

Create an instance: `task = client.Task`

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
| `after_id` | `Integer` |  |
| `before_id` | `Integer` |  |
| `complete` | `Boolean` |  |
| `completed_at` | `String` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `entity_type` | `String` |  |
| `external_id` | `String` |  |
| `global_id` | `String` |  |
| `group_mention_ids` | `Array` |  |
| `id` | `Integer` |  |
| `member_mention_ids` | `Array` |  |
| `mention_ids` | `Array` |  |
| `owner_ids` | `Array` |  |
| `position` | `Integer` |  |
| `story_id` | `Integer` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Task record (raises on error).
task = client.Task.load({ "id" => 1, "story_id" => 1 })
```

#### Example: Create

```ruby
task = client.Task.create({
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


### ThreadedComment

Create an instance: `threaded_comment = client.ThreadedComment`

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
| `app_url` | `String` |  |
| `author_id` | `String` |  |
| `comments` | `Array` |  |
| `created_at` | `String` |  |
| `deleted` | `Boolean` |  |
| `entity_type` | `String` |  |
| `external_id` | `String` |  |
| `group_mention_ids` | `Array` |  |
| `id` | `Integer` |  |
| `member_mention_ids` | `Array` |  |
| `mention_ids` | `Array` |  |
| `text` | `String` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the bare ThreadedComment record (raises on error).
threaded_comment = client.ThreadedComment.load({ "id" => 1, "epic_id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of ThreadedComment records (raises on error).
threaded_comments = client.ThreadedComment.list
```

#### Example: Create

```ruby
threaded_comment = client.ThreadedComment.create({
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


### UploadedFile

Create an instance: `uploaded_file = client.UploadedFile`

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
| `content_type` | `String` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `entity_type` | `String` |  |
| `external_id` | `String` |  |
| `filename` | `String` |  |
| `group_mention_ids` | `Array` |  |
| `id` | `Integer` |  |
| `member_mention_ids` | `Array` |  |
| `mention_ids` | `Array` |  |
| `name` | `String` |  |
| `size` | `Integer` |  |
| `story_ids` | `Array` |  |
| `thumbnail_url` | `String` |  |
| `updated_at` | `String` |  |
| `uploader_id` | `String` |  |
| `url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare UploadedFile record (raises on error).
uploaded_file = client.UploadedFile.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of UploadedFile records (raises on error).
uploaded_files = client.UploadedFile.list
```

#### Example: Create

```ruby
uploaded_file = client.UploadedFile.create({
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


### Webhook

Create an instance: `webhook = client.Webhook`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `secret` | `String` |  |
| `webhook_url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Webhook record (raises on error).
webhook = client.Webhook.load({ "id" => 1 })
```

#### Example: Create

```ruby
webhook = client.Webhook.create({
  "webhook_url" => "example_webhook_url", # String
})
```


### Workflow

Create an instance: `workflow = client.Workflow`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_assign_owner` | `Boolean` |  |
| `created_at` | `String` |  |
| `default_state_id` | `Integer` |  |
| `description` | `String` |  |
| `entity_type` | `String` |  |
| `id` | `Integer` |  |
| `name` | `String` |  |
| `project_ids` | `Array` |  |
| `states` | `Array` |  |
| `team_id` | `Integer` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Workflow record (raises on error).
workflow = client.Workflow.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Workflow records (raises on error).
workflows = client.Workflow.list
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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── Shortcut_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`Shortcut_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```ruby
iteration = client.Iteration
iteration.list()

# iteration.data_get now returns the iteration data from the last list
# iteration.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

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

    local category, err = client:Category():load({ id = "example_id" })
    if err then error(err) end
    -- category is the loaded record

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
| `archived` | A true/false boolean indicating if the Category has been archived. |
| `color` | The hex color to be displayed with the Category (for example, "#ff0000"). |
| `created_at` | The time/date that the Category was created. |
| `entity_type` | A string description of this resource. |
| `external_id` | This field can be set to another unique ID. |
| `global_id` | The Global ID of the Category. |
| `id` | The unique ID of the Category. |
| `name` | The name of the Category. |
| `type` | The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category. |
| `updated_at` | The time/date that the Category was updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/categories`

#### Comment

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/api/v3/stories/{story-public-id}/comments/{comment-public-id}`

#### CustomField

| Field | Description |
| --- | --- |
| `after_id` | The ID of the CustomField we want to move this CustomField after. |
| `before_id` | The ID of the CustomField we want to move this CustomField before. |
| `canonical_name` | The canonical name for a Shortcut-defined field. |
| `created_at` | The instant when this CustomField was created. |
| `description` | A string description of the CustomField |
| `enabled` | When true, the CustomField can be applied to entities in the Workspace. |
| `entity_type` | A string description of this resource. |
| `field_type` | The type of Custom Field, eg. |
| `fixed_position` | When true, the CustomFieldEnumValues may not be reordered. |
| `icon_set_identifier` | A string that represents the icon that corresponds to this custom field. |
| `id` | The unique public ID for the CustomField. |
| `name` | The name of the Custom Field. |
| `position` | An integer indicating the position of this Custom Field with respect to the other CustomField |
| `story_types` | The types of stories this CustomField is scoped to. |
| `updated_at` | The instant when this CustomField was last updated. |
| `values` | A collection of legal values for a CustomField. |

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
| `app_url` | The Shortcut application url for the Doc. |
| `content` | The content for the new document |
| `id` | The public id of the Doc |
| `title` | The title for the new document |

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
| `author_id` | The id of the user creating this template. |
| `created_at` | The time/date when the entity template was created. |
| `custom_fields` | An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | The due date of the story. |
| `description` | The description of the story. |
| `entity_type` | A string description of this resource. |
| `epic_id` | The ID of the epic the story belongs to. |
| `estimate` | The numeric point estimate of the story. |
| `external_links` | An array of external links connected to the story. |
| `files` | An array of files attached to the story. |
| `follower_ids` | An array of UUIDs for any Members listed as Followers. |
| `group_id` | The ID of the group to which the story is assigned. |
| `id` | The unique identifier for the entity template. |
| `iteration_id` | The ID of the iteration the story belongs to. |
| `label_ids` | An array of label ids attached to the story. |
| `labels` | An array of labels attached to the story. |
| `last_used_at` | The last time that someone created an entity using this template. |
| `linked_files` | An array of linked files attached to the story. |
| `name` | The name of the story. |
| `owner_ids` | An array of UUIDs of the owners of this story. |
| `project_id` | The ID of the project the story belongs to. |
| `story_contents` | A map of story attributes this template populates. |
| `story_type` | The type of story (feature, bug, chore). |
| `sub_tasks` | An array of sub-tasks connected to the story |
| `tasks` | An array of tasks connected to the story. |
| `updated_at` | The time/date when the entity template was last updated. |
| `workflow_state_id` | The ID of the workflow state the story is currently in. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/entity-templates`

#### Epic

| Field | Description |
| --- | --- |
| `after_id` | The ID of the Epic we want to move this Epic after. |
| `app_url` | The Shortcut application url for the Epic. |
| `archived` | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `before_id` | The ID of the Epic we want to move this Epic before. |
| `comments` | A nested array of threaded comments. |
| `completed` | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | The time/date the Epic was completed. |
| `completed_at_override` | A manual override for the time/date the Epic was completed. |
| `converted_from_story_id` | The ID of the Story that was converted to an Epic. |
| `created_at` | The time/date the Epic was created. |
| `deadline` | The Epic's deadline. |
| `description` | The Epic's description. |
| `entity_type` | A string description of this resource. |
| `epic_state_id` | The ID of the Epic State. |
| `external_id` | This field can be set to another unique ID. |
| `follower_ids` | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` |  |
| `group_id` | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | An array of Group IDs that have been mentioned in the Epic description. |
| `health` | The current health status of the Epic. |
| `id` | The unique ID of the Epic. |
| `label_ids` | An array of Label ids attached to the Epic. |
| `labels` | An array of Labels attached to the Epic. |
| `member_mention_ids` | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | The name of the Epic. |
| `objective_ids` | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | The Epic's planned start date. |
| `position` | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | The ID of the associated productboard feature. |
| `productboard_name` | The name of the associated productboard feature. |
| `productboard_plugin_id` | The ID of the associated productboard integration. |
| `productboard_url` | The URL of the associated productboard feature. |
| `project_ids` | The IDs of Projects related to this Epic. |
| `requested_by_id` | The ID of the Member that requested the epic. |
| `started` | A true/false boolean indicating if the Epic has been started. |
| `started_at` | The time/date the Epic was started. |
| `started_at_override` | A manual override for the time/date the Epic was started. |
| `state` | `Deprecated` The workflow state that the Epic is in. |
| `stats` | A group of calculated values for this Epic. |
| `stories_without_projects` | The number of stories in this epic which are not associated with a project. |
| `updated_at` | The time/date the Epic was updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/epics`

#### EpicPaginatedResult

| Field | Description |
| --- | --- |
| `app_url` | The Shortcut application url for the Epic. |
| `archived` | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `completed` | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | The time/date the Epic was completed. |
| `completed_at_override` | A manual override for the time/date the Epic was completed. |
| `created_at` | The time/date the Epic was created. |
| `deadline` | The Epic's deadline. |
| `description` | The Epic's description. |
| `entity_type` | A string description of this resource. |
| `epic_state_id` | The ID of the Epic State. |
| `external_id` | This field can be set to another unique ID. |
| `follower_ids` | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` |  |
| `group_id` | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | An array of Group IDs that have been mentioned in the Epic description. |
| `id` | The unique ID of the Epic. |
| `label_ids` | An array of Label ids attached to the Epic. |
| `labels` | An array of Labels attached to the Epic. |
| `member_mention_ids` | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | The name of the Epic. |
| `objective_ids` | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | The Epic's planned start date. |
| `position` | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | The ID of the associated productboard feature. |
| `productboard_name` | The name of the associated productboard feature. |
| `productboard_plugin_id` | The ID of the associated productboard integration. |
| `productboard_url` | The URL of the associated productboard feature. |
| `project_ids` | The IDs of Projects related to this Epic. |
| `requested_by_id` | The ID of the Member that requested the epic. |
| `started` | A true/false boolean indicating if the Epic has been started. |
| `started_at` | The time/date the Epic was started. |
| `started_at_override` | A manual override for the time/date the Epic was started. |
| `state` | `Deprecated` The workflow state that the Epic is in. |
| `stats` | A group of calculated values for this Epic. |
| `stories_without_projects` | The number of stories in this epic which are not associated with a project. |
| `updated_at` | The time/date the Epic was updated. |

Operations: List.

API path: `/api/v3/epics/paginated`

#### EpicUnlinkProductboard

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create.

API path: `/api/v3/epics/{epic-public-id}/unlink-productboard`

#### EpicWorkflow

| Field | Description |
| --- | --- |
| `color` | The hex color for this Epic State. |
| `created_at` | The time/date the Epic State was created. |
| `description` | The description of what sort of Epics belong in that Epic State. |
| `entity_type` | A string description of this resource. |
| `global_id` |  |
| `id` | The unique ID of the Epic State. |
| `name` | The Epic State's name. |
| `position` | The position that the Epic State is in, starting with 0 at the left. |
| `type` | The type of Epic State (Unstarted, Started, or Done) |
| `updated_at` | When the Epic State was last updated. |

Operations: List.

API path: `/api/v3/epic-workflow`

#### Group

| Field | Description |
| --- | --- |
| `app_url` | The Shortcut application url for the Group. |
| `archived` | Whether or not the Group is archived. |
| `color` | The hex color to be displayed with the Group (for example, "#ff0000"). |
| `color_key` | The color key to be displayed with the Group. |
| `created_at` | The instant when this group was created. |
| `default_workflow_id` | The ID of the default workflow for stories created in this group. |
| `description` | The description of the Group. |
| `display_icon` | Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application. |
| `display_icon_id` | The Icon id for the avatar of this Group. |
| `entity_type` | A string description of this resource. |
| `global_id` |  |
| `id` | The id of the Group. |
| `member_ids` | The Member IDs contain within the Group. |
| `mention_name` | The mention name of the Group. |
| `name` | The name of the Group. |
| `num_epics_started` | The number of epics assigned to the group which are in the started workflow state. |
| `num_stories` | The total number of stories assigned to the group. |
| `num_stories_backlog` | The number of stories assigned to the group which are in a backlog workflow state. |
| `num_stories_started` | The number of stories assigned to the group which are in a started workflow state. |
| `updated_at` | The last instant when this group was updated. |
| `workflow_ids` | The Workflow IDs contained within the Group. |

Operations: Create, List, Load, Update.

API path: `/api/v3/groups`

#### Health

| Field | Description |
| --- | --- |
| `author_id` | The ID of the permission who created or updated the Health record. |
| `created_at` | The time that the Health record was created. |
| `entity_type` | A string description of this resource. |
| `epic_id` | The ID of the Epic associated with this Health record. |
| `id` | The unique ID of the Health record. |
| `objective_id` | The ID of the Objective associated with this Health record. |
| `status` | The health status of the Epic or Objective. |
| `text` | The text of the Health record. |
| `updated_at` | The time that the Health record was updated. |

Operations: Create, List, Load, Update.

API path: `/api/v3/epics/{epic-public-id}/health`

#### History

| Field | Description |
| --- | --- |
| `actions` | An array of actions that were performed for the change. |
| `actor_name` | The name of the actor that performed the action, if it can be determined. |
| `automation_id` | The ID of the automation that performed the change. |
| `changed_at` | The date when the change occurred. |
| `external_id` | The ID of the webhook that handled the change. |
| `id` | The ID representing the change for the story. |
| `member_id` | The ID of the member who performed the change. |
| `primary_id` | The ID of the primary entity that has changed, if applicable. |
| `references` | An array of objects affected by the change. |
| `version` | The version of the change format. |
| `webhook_id` | The ID of the webhook that handled the change. |

Operations: List.

API path: `/api/v3/stories/{story-public-id}/history`

#### Iteration

| Field | Description |
| --- | --- |
| `app_url` | The Shortcut application url for the Iteration. |
| `associated_groups` | An array containing Group IDs and Group-owned story counts for the Iteration's associated groups. |
| `created_at` | The instant when this iteration was created. |
| `description` | The description of the iteration. |
| `end_date` | The date this iteration ends. |
| `entity_type` | A string description of this resource |
| `follower_ids` | An array of UUIDs for any Members listed as Followers. |
| `global_id` |  |
| `group_ids` | An array of UUIDs for any Groups you want to add as Followers. |
| `group_mention_ids` | An array of Group IDs that have been mentioned in the Story description. |
| `id` | The ID of the iteration. |
| `label_ids` | An array of label ids attached to the iteration. |
| `labels` | An array of labels attached to the iteration. |
| `member_mention_ids` | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `Deprecated:` use `member_mention_ids`. |
| `name` | The name of the iteration. |
| `start_date` | The date this iteration begins. |
| `stats` | A group of calculated values for this Iteration. |
| `status` | The status of the iteration. |
| `updated_at` | The instant when this iteration was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/iterations`

#### KeyResult

| Field | Description |
| --- | --- |
| `current_observed_value` | The starting value of the Key Result. |
| `current_target_value` | The starting value of the Key Result. |
| `id` | The ID of the Key Result. |
| `initial_observed_value` | The starting value of the Key Result. |
| `name` | The name of the Key Result. |
| `objective_id` | The Objective to which this Key Result belongs. |
| `observed_value` | The starting value of the Key Result. |
| `progress` | The integer percentage of progress toward completion of the Key Result. |
| `target_value` | The starting value of the Key Result. |
| `type` | The type of the Key Result (numeric, percent, or boolean). |

Operations: Load, Update.

API path: `/api/v3/key-results/{key-result-public-id}`

#### Label

| Field | Description |
| --- | --- |
| `app_url` | The Shortcut application url for the Label. |
| `archived` | A true/false boolean indicating if the Label has been archived. |
| `color` | The hex color to be displayed with the Label (for example, "#ff0000"). |
| `created_at` | The time/date that the Label was created. |
| `description` | The description of the new Label. |
| `entity_type` | A string description of this resource. |
| `external_id` | This field can be set to another unique ID. |
| `global_id` |  |
| `id` | The unique ID of the Label. |
| `name` | The name of the new Label. |
| `num_epics` | The total number of Epics with this Label. |
| `num_epics_completed` | The number of completed Epics associated with this Label. |
| `num_epics_in_progress` | The number of in progress epics associated with this label. |
| `num_epics_total` | The total number of Epics associated with this Label. |
| `num_epics_unstarted` | The number of unstarted epics associated with this label. |
| `num_points_backlog` | The total number of backlog points with this Label. |
| `num_points_completed` | The total number of completed points with this Label. |
| `num_points_in_progress` | The total number of in-progress points with this Label. |
| `num_points_total` | The total number of points with this Label. |
| `num_points_unstarted` | The total number of unstarted points with this Label. |
| `num_related_documents` | The total number of Documents associated this Label. |
| `num_stories_backlog` | The total number of stories backlog Stories with this Label. |
| `num_stories_completed` | The total number of completed Stories with this Label. |
| `num_stories_in_progress` | The total number of in-progress Stories with this Label. |
| `num_stories_total` | The total number of Stories with this Label. |
| `num_stories_unestimated` | The total number of Stories with no point estimate with this Label. |
| `num_stories_unstarted` | The total number of stories unstarted Stories with this Label. |
| `stats` | A group of calculated values for this Label. |
| `updated_at` | The time/date that the Label was updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/labels`

#### LinkedFile

| Field | Description |
| --- | --- |
| `content_type` | The content type of the image (e.g. |
| `created_at` | The time/date the LinkedFile was created. |
| `description` | The description of the file. |
| `entity_type` | A string description of this resource. |
| `group_mention_ids` | The groups that are mentioned in the description of the file. |
| `id` | The unique identifier for the file. |
| `member_mention_ids` | The members that are mentioned in the description of the file. |
| `mention_ids` | `Deprecated:` use `member_mention_ids`. |
| `name` | The name of the linked file. |
| `size` | The filesize, if the integration provided it. |
| `story_id` | The ID of the linked story. |
| `story_ids` | The IDs of the stories this file is attached to. |
| `thumbnail_url` | The URL of the file thumbnail, if the integration provided it. |
| `type` | The integration type (e.g. |
| `updated_at` | The time/date the LinkedFile was updated. |
| `uploader_id` | The UUID of the member that uploaded the file. |
| `url` | The URL of the file. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/linked-files`

#### Member

| Field | Description |
| --- | --- |
| `created_at` | The time/date the Member was created. |
| `created_without_invite` | Whether this member was created as a placeholder entity. |
| `disabled` | True/false boolean indicating whether the Member has been disabled within the Workspace. |
| `entity_type` | A string description of this resource. |
| `global_id` |  |
| `group_ids` | The Member's group ids |
| `id` | The Member's ID in Shortcut. |
| `installation_id` | Only set for agents. |
| `is_owner` |  |
| `mention_name` |  |
| `name` |  |
| `organization2` |  |
| `profile` | A group of Member profile details. |
| `replaced_by` | The id of the member that replaces this one when merged. |
| `role` | The Member's role in the Workspace. |
| `state` | The user state, one of partial, full, disabled, or imported. |
| `updated_at` | The time/date the Member was last updated. |
| `workspace2` |  |

Operations: List, Load.

API path: `/api/v3/members`

#### Milestone

| Field | Description |
| --- | --- |
| `after_id` | The ID of the Milestone we want to move this Milestone after. |
| `app_url` | The Shortcut application url for the Milestone. |
| `archived` | A boolean indicating whether the Milestone has been archived or not. |
| `before_id` | The ID of the Milestone we want to move this Milestone before. |
| `categories` | An array of Categories attached to the Milestone. |
| `completed` | A true/false boolean indicating if the Milestone has been completed. |
| `completed_at` | The time/date the Milestone was completed. |
| `completed_at_override` | A manual override for the time/date the Milestone was completed. |
| `created_at` | The time/date the Milestone was created. |
| `description` | The Milestone's description. |
| `entity_type` | A string description of this resource. |
| `global_id` |  |
| `id` | The unique ID of the Milestone. |
| `key_result_ids` | The IDs of the Key Results associated with the Objective. |
| `name` | The name of the Milestone. |
| `position` | A number representing the position of the Milestone in relation to every other Milestone within the Workspace. |
| `started` | A true/false boolean indicating if the Milestone has been started. |
| `started_at` | The time/date the Milestone was started. |
| `started_at_override` | A manual override for the time/date the Milestone was started. |
| `state` | The workflow state that the Milestone is in. |
| `stats` | A group of calculated values for this Milestone. |
| `updated_at` | The time/date the Milestone was updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/milestones`

#### Objectif

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/api/v3/objectives/{objective-public-id}`

#### Objective

| Field | Description |
| --- | --- |
| `after_id` | The ID of the Objective we want to move this Objective after. |
| `app_url` | The Shortcut application url for the Objective. |
| `archived` | A boolean indicating whether the Objective has been archived or not. |
| `before_id` | The ID of the Objective we want to move this Objective before. |
| `categories` | An array of Categories attached to the Objective. |
| `completed` | A true/false boolean indicating if the Objectivehas been completed. |
| `completed_at` | The time/date the Objective was completed. |
| `completed_at_override` | A manual override for the time/date the Objective was completed. |
| `created_at` | The time/date the Objective was created. |
| `description` | The Objective's description. |
| `entity_type` | A string description of this resource. |
| `global_id` |  |
| `id` | The unique ID of the Objective. |
| `key_result_ids` | The IDs of the Key Results associated with the Objective. |
| `name` | The name of the Objective. |
| `position` | A number representing the position of the Objective in relation to every other Objective within the Workspace. |
| `started` | A true/false boolean indicating if the Objective has been started. |
| `started_at` | The time/date the Objective was started. |
| `started_at_override` | A manual override for the time/date the Objective was started. |
| `state` | The workflow state that the Objective is in. |
| `stats` | A group of calculated values for this Objective. |
| `updated_at` | The time/date the Objective was updated. |

Operations: Create, List, Load, Update.

API path: `/api/v3/objectives`

#### Project

| Field | Description |
| --- | --- |
| `abbreviation` | The Project abbreviation used in Story summaries. |
| `app_url` | The Shortcut application url for the Project. |
| `archived` | True/false boolean indicating whether the Project is in an Archived state. |
| `color` | The color associated with the Project in the Shortcut member interface. |
| `created_at` | The time/date that the Project was created. |
| `days_to_thermometer` | The number of days before the thermometer appears in the Story summary. |
| `description` | The description of the Project. |
| `entity_type` | A string description of this resource. |
| `external_id` | This field can be set to another unique ID. |
| `follower_ids` | An array of UUIDs for any Members listed as Followers. |
| `global_id` | The Global ID of the Project. |
| `id` | The unique ID of the Project. |
| `iteration_length` | The number of weeks per iteration in this Project. |
| `name` | The name of the Project |
| `show_thermometer` | Configuration to enable or disable thermometers in the Story summary. |
| `start_time` | The date at which the Project was started. |
| `stats` | A group of calculated values for this Project. |
| `team_id` | The ID of the team the project belongs to. |
| `updated_at` | The time/date that the Project was last updated. |
| `workflow_id` | The ID of the workflow the project belongs to. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/projects`

#### Repository

| Field | Description |
| --- | --- |
| `created_at` | The time/date the Repository was created. |
| `entity_type` | A string description of this resource. |
| `external_id` | The VCS unique identifier for the Repository. |
| `full_name` | The full name of the VCS repository. |
| `id` | The ID associated to the VCS repository in Shortcut. |
| `name` | The shorthand name of the VCS repository. |
| `type` | The VCS provider for the Repository. |
| `updated_at` | The time/date the Repository was updated. |
| `url` | The URL of the Repository. |

Operations: List, Load.

API path: `/api/v3/repositories`

#### Search

| Field | Description |
| --- | --- |
| `epics` | The results of the Epic search query. |
| `iterations` | The results of the Iteration search query. |
| `milestones` | The results of the Objective search query. |
| `stories` | The results of the Story search query. |

Operations: Load.

API path: `/api/v3/search`

#### Story

| Field | Description |
| --- | --- |
| `after_id` | The ID of the story we want to move this story after. |
| `app_url` | The Shortcut application url for the Story. |
| `archived` | True if the story has been archived or not. |
| `before_id` | The ID of the story we want to move this story before. |
| `blocked` | A true/false boolean indicating if the Story is currently blocked. |
| `blocker` | A true/false boolean indicating if the Story is currently a blocker of another story. |
| `branch_ids` | An array of IDs of Branches attached to the story. |
| `branches` | An array of Git branches attached to the story. |
| `comment_ids` | An array of IDs of Comments attached to the story. |
| `comments` | An array of comments attached to the story. |
| `commit_ids` | An array of IDs of Commits attached to the story. |
| `commits` | An array of commits attached to the story. |
| `completed` | A true/false boolean indicating if the Story has been completed. |
| `completed_at` | The time/date the Story was completed. |
| `completed_at_override` | A manual override for the time/date the Story was completed. |
| `created_at` | The time/date the Story was created. |
| `custom_fields` | An array of CustomField value assertions for the story. |
| `custom_fields_add` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | A map specifying a CustomField ID. |
| `cycle_time` | The cycle time (in seconds) of this story when complete. |
| `deadline` | The due date of the story. |
| `description` | The description of the story. |
| `entity_type` | A string description of this resource. |
| `epic_id` | The ID of the epic the story belongs to. |
| `estimate` | The numeric point estimate of the story. |
| `external_id` | This field can be set to another unique ID. |
| `external_links` | An array of external links (strings) associated with a Story |
| `external_links_add` | An array of External Links associated with this story. |
| `external_links_remove` | An array of External Links associated with this story. |
| `file_ids` | An array of IDs of files attached to the story. |
| `file_ids_add` | An array of IDs of files attached to the story in addition to files from the template. |
| `file_ids_remove` | An array of IDs of files removed from files from the template. |
| `files` | An array of files attached to the story. |
| `follower_ids` | An array of UUIDs for any Members listed as Followers. |
| `follower_ids_add` | The UUIDs of the new followers to be added in addition to followers from the template. |
| `follower_ids_remove` | The UUIDs of the new followers to be removed from followers from the template. |
| `formatted_vcs_branch_name` | The formatted branch name for this story. |
| `global_id` |  |
| `group_id` | The ID of the group associated with the story. |
| `group_mention_ids` | An array of Group IDs that have been mentioned in the Story description. |
| `id` | The unique ID of the Story. |
| `iteration_id` | The ID of the iteration the story belongs to. |
| `label_ids` | An array of label ids attached to the story. |
| `labels` | An array of labels attached to the story. |
| `labels_add` | An array of labels attached to the story in addition to the labels provided by the template. |
| `labels_remove` | An array of labels to remove from the labels provided by the template. |
| `lead_time` | The lead time (in seconds) of this story when complete. |
| `linked_file_ids` | An array of IDs of linked files attached to the story. |
| `linked_file_ids_add` | An array of IDs of linked files attached to the story in addition to files from the template. |
| `linked_file_ids_remove` | An array of IDs of linked files removed from files from the template. |
| `linked_files` | An array of linked files attached to the story. |
| `member_mention_ids` | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `Deprecated:` use `member_mention_ids`. |
| `move_to` | One of "first" or "last". |
| `moved_at` | The time/date the Story was last changed workflow-state. |
| `name` | The name of the story. |
| `num_tasks_completed` | The number of tasks on the story which are complete. |
| `owner_ids` | An array of UUIDs of the owners of this story. |
| `owner_ids_add` | The UUIDs of the new owners to be added in addition to owners from the template. |
| `owner_ids_remove` | The UUIDs of the new owners to be removed from owners from the template. |
| `parent_story_id` | The id of the parent story to associate with this story. |
| `position` | A number representing the position of the story in relation to every other story in the current project. |
| `previous_iteration_ids` | The IDs of the iteration the story belongs to. |
| `project_id` | The ID of the project the story belongs to. |
| `pull_request_ids` | An array of IDs of Pull/Merge Requests attached to the story. |
| `pull_requests` | An array of Pull/Merge Requests attached to the story. |
| `requested_by_id` | The ID of the Member that requested the story. |
| `source_task_id` | Given this story was converted from a task in another story, this is the original task ID that was converted to this story. |
| `started` | A true/false boolean indicating if the Story has been started. |
| `started_at` | The time/date the Story was started. |
| `started_at_override` | A manual override for the time/date the Story was started. |
| `stats` | The stats object for Stories |
| `story_links` | An array of story links attached to the Story. |
| `story_template_id` | The ID of the story template used to create this story, or null if not created using a template. |
| `story_type` | The type of story (feature, bug, chore). |
| `sub_task_story_ids` |  |
| `sub_tasks` | A list of either params to create a new sub-task or link an existing story as a sub-task |
| `synced_item` | The synced item for the story. |
| `task_ids` | An array of IDs of Tasks attached to the story. |
| `tasks` | An array of tasks connected to the story. |
| `updated_at` | The time/date the Story was updated. |
| `workflow_id` | The ID of the workflow the story belongs to. |
| `workflow_state_id` | The ID of the workflow state the story is currently in. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/stories`

#### StoryComment

| Field | Description |
| --- | --- |
| `app_url` | The Shortcut application url for the Comment. |
| `author_id` | The unique ID of the Member who is the Comment's author. |
| `blocker` | Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment. |
| `created_at` | The time/date when the Comment was created. |
| `deleted` | True/false boolean indicating whether the Comment has been deleted. |
| `entity_type` | A string description of this resource. |
| `external_id` | This field can be set to another unique ID. |
| `group_mention_ids` | The unique IDs of the Group who are mentioned in the Comment. |
| `id` | The unique ID of the Comment. |
| `linked_to_slack` | Whether the Comment is currently the root of a thread that is linked to Slack. |
| `member_mention_ids` | The unique IDs of the Member who are mentioned in the Comment. |
| `mention_ids` | `Deprecated:` use `member_mention_ids`. |
| `parent_id` | The ID of the parent Comment this Comment is threaded under. |
| `position` | The Comments numerical position in the list from oldest to newest. |
| `reactions` | A set of Reactions to this Comment. |
| `story_id` | The ID of the Story on which the Comment appears. |
| `text` | The text of the Comment. |
| `unblocks_parent` | Marks the comment as an unblocker to its blocker parent. |
| `updated_at` | The time/date when the Comment was updated. |

Operations: Create, List, Load, Update.

API path: `/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack`

#### StoryLink

| Field | Description |
| --- | --- |
| `created_at` | The time/date when the Story Link was created. |
| `entity_type` | A string description of this resource. |
| `id` | The unique identifier of the Story Link. |
| `object_id` | The ID of the object Story. |
| `subject_id` | The ID of the subject Story. |
| `subject_workflow_state_id` | The workflow state of the "subject" story. |
| `updated_at` | The time/date when the Story Link was last updated. |
| `verb` | How the subject Story acts on the object Story. |

Operations: Create, Load, Remove, Update.

API path: `/api/v3/story-links`

#### StoryReaction

| Field | Description |
| --- | --- |
| `emoji` | The emoji short-code to add / remove. |

Operations: Create, Remove.

API path: `/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions`

#### StorySlim

| Field | Description |
| --- | --- |
| `after_id` | The ID of the story that the stories are to be moved below. |
| `archived` | A true/false boolean indicating whether the Story is in archived state. |
| `before_id` | The ID of the story that the stories are to be moved before. |
| `completed_at_end` | Stories should have been completed on or before this date. |
| `completed_at_start` | Stories should have been completed on or after this date. |
| `created_at_end` | Stories should have been created on or before this date. |
| `created_at_start` | Stories should have been created on or after this date. |
| `custom_fields_add` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | The due date of the story. |
| `deadline_end` | Stories should have a deadline on or before this date. |
| `deadline_start` | Stories should have a deadline on or after this date. |
| `epic_id` | The Epic IDs that may be associated with the Stories. |
| `epic_ids` | The Epic IDs that may be associated with the Stories. |
| `estimate` | The number of estimate points associate with the Stories. |
| `external_id` | An ID or URL that references an external resource. |
| `external_links` | An array of External Links associated with this story. |
| `follower_ids_add` | The UUIDs of the new followers to be added. |
| `follower_ids_remove` | The UUIDs of the followers to be removed. |
| `group_id` | The Group ID that is associated with the Stories |
| `group_ids` | The Group IDs that are associated with the Stories |
| `includes_description` | Whether to include the story description in the response. |
| `iteration_id` | The Iteration ID that may be associated with the Stories. |
| `iteration_ids` | The Iteration IDs that may be associated with the Stories. |
| `label_ids` | The Label IDs that may be associated with the Stories. |
| `label_name` | The name of any associated Labels. |
| `labels_add` | An array of labels to be added. |
| `labels_remove` | An array of labels to be removed. |
| `move_to` | One of "first" or "last". |
| `owner_id` | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids` | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids_add` | The UUIDs of the new owners to be added. |
| `owner_ids_remove` | The UUIDs of the owners to be removed. |
| `project_id` | The IDs for the Projects the Stories may be assigned to. |
| `project_ids` | The IDs for the Projects the Stories may be assigned to. |
| `requested_by_id` | The UUID of any Users who may have requested the Stories. |
| `stories` | An array of stories to be created. |
| `story_ids` | The Ids of the Stories you wish to update. |
| `story_type` | The type of Stories that you want returned. |
| `updated_at_end` | Stories should have been updated on or before this date. |
| `updated_at_start` | Stories should have been updated on or after this date. |
| `workflow_state_id` | The unique IDs of the specific Workflow States that the Stories should be in. |
| `workflow_state_types` | The type of Workflow State the Stories may be in. |

Operations: Create, Update.

API path: `/api/v3/stories/bulk`

#### Task

| Field | Description |
| --- | --- |
| `after_id` | Move task after this task ID. |
| `before_id` | Move task before this task ID. |
| `complete` | True/false boolean indicating whether the Task has been completed. |
| `completed_at` | The time/date the Task was completed. |
| `created_at` | The time/date the Task was created. |
| `description` | Full text of the Task. |
| `entity_type` | A string description of this resource. |
| `external_id` | This field can be set to another unique ID. |
| `global_id` |  |
| `group_mention_ids` | An array of UUIDs of Groups mentioned in this Task. |
| `id` | The unique ID of the Task. |
| `member_mention_ids` | An array of UUIDs of Members mentioned in this Task. |
| `mention_ids` | `Deprecated:` use `member_mention_ids`. |
| `owner_ids` | An array of UUIDs of the Owners of this Task. |
| `position` | The number corresponding to the Task's position within a list of Tasks on a Story. |
| `story_id` | The unique identifier of the parent Story. |
| `updated_at` | The time/date the Task was updated. |

Operations: Create, Load, Remove, Update.

API path: `/api/v3/stories/{story-public-id}/tasks`

#### ThreadedComment

| Field | Description |
| --- | --- |
| `app_url` | The Shortcut application url for the Comment. |
| `author_id` | The unique ID of the Member that authored the Comment. |
| `comments` | A nested array of threaded comments. |
| `created_at` | The time/date the Comment was created. |
| `deleted` | True/false boolean indicating whether the Comment is deleted. |
| `entity_type` | A string description of this resource. |
| `external_id` | This field can be set to another unique ID. |
| `group_mention_ids` | An array of Group IDs that have been mentioned in this Comment. |
| `id` | The unique ID of the Comment. |
| `member_mention_ids` | An array of Member IDs that have been mentioned in this Comment. |
| `mention_ids` | `Deprecated:` use `member_mention_ids`. |
| `text` | The text of the Comment. |
| `updated_at` | The time/date the Comment was updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/epics/{epic-public-id}/comments/{comment-public-id}`

#### UploadedFile

| Field | Description |
| --- | --- |
| `content_type` | Free form string corresponding to a text or image file. |
| `created_at` | The time/date that the file was created. |
| `description` | The description of the file. |
| `entity_type` | A string description of this resource. |
| `external_id` | This field can be set to another unique ID. |
| `filename` | The name assigned to the file in Shortcut upon upload. |
| `group_mention_ids` | The unique IDs of the Groups who are mentioned in the file description. |
| `id` | The unique ID for the file. |
| `member_mention_ids` | The unique IDs of the Members who are mentioned in the file description. |
| `mention_ids` | `Deprecated:` use `member_mention_ids`. |
| `name` | The optional User-specified name of the file. |
| `size` | The size of the file. |
| `story_ids` | The unique IDs of the Stories associated with this file. |
| `thumbnail_url` | The url where the thumbnail of the file can be found in Shortcut. |
| `updated_at` | The time/date that the file was updated. |
| `uploader_id` | The unique ID of the Member who uploaded the file. |
| `url` | The URL for the file. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/files`

#### Webhook

| Field | Description |
| --- | --- |
| `id` |  |
| `secret` |  |
| `webhook_url` |  |

Operations: Create, Load, Remove.

API path: `/api/v3/integrations/webhook`

#### Workflow

| Field | Description |
| --- | --- |
| `auto_assign_owner` | Indicates if an owner is automatically assigned when an unowned story is started. |
| `created_at` | The date the Workflow was created. |
| `default_state_id` | The unique ID of the default state that new Stories are entered into. |
| `description` | A description of the workflow. |
| `entity_type` | A string description of this resource. |
| `id` | The unique ID of the Workflow. |
| `name` | The name of the workflow. |
| `project_ids` | An array of IDs of projects within the Workflow. |
| `states` | A map of the states in this Workflow. |
| `team_id` | The ID of the team the workflow belongs to. |
| `updated_at` | The date the Workflow was updated. |

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
| `archived` | `boolean` | A true/false boolean indicating if the Category has been archived. |
| `color` | `string` | The hex color to be displayed with the Category (for example, "#ff0000"). |
| `created_at` | `string` | The time/date that the Category was created. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `global_id` | `string` | The Global ID of the Category. |
| `id` | `number` | The unique ID of the Category. |
| `name` | `string` | The name of the Category. |
| `type` | `string` | The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category. |
| `updated_at` | `string` | The time/date that the Category was updated. |

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

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


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
| `after_id` | `string` | The ID of the CustomField we want to move this CustomField after. |
| `before_id` | `string` | The ID of the CustomField we want to move this CustomField before. |
| `canonical_name` | `string` | The canonical name for a Shortcut-defined field. |
| `created_at` | `string` | The instant when this CustomField was created. |
| `description` | `string` | A string description of the CustomField |
| `enabled` | `boolean` | When true, the CustomField can be applied to entities in the Workspace. |
| `entity_type` | `string` | A string description of this resource. |
| `field_type` | `string` | The type of Custom Field, eg. |
| `fixed_position` | `boolean` | When true, the CustomFieldEnumValues may not be reordered. |
| `icon_set_identifier` | `string` | A string that represents the icon that corresponds to this custom field. |
| `id` | `string` | The unique public ID for the CustomField. |
| `name` | `string` | The name of the Custom Field. |
| `position` | `number` | An integer indicating the position of this Custom Field with respect to the other CustomField |
| `story_types` | `table` | The types of stories this CustomField is scoped to. |
| `updated_at` | `string` | The instant when this CustomField was last updated. |
| `values` | `table` | A collection of legal values for a CustomField. |

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
| `app_url` | `string` | The Shortcut application url for the Doc. |
| `content` | `string` | The content for the new document |
| `id` | `string` | The public id of the Doc |
| `title` | `string` | The title for the new document |

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
| `author_id` | `string` | The id of the user creating this template. |
| `created_at` | `string` | The time/date when the entity template was created. |
| `custom_fields` | `table` | An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `string` | The due date of the story. |
| `description` | `string` | The description of the story. |
| `entity_type` | `string` | A string description of this resource. |
| `epic_id` | `number` | The ID of the epic the story belongs to. |
| `estimate` | `number` | The numeric point estimate of the story. |
| `external_links` | `table` | An array of external links connected to the story. |
| `files` | `table` | An array of files attached to the story. |
| `follower_ids` | `table` | An array of UUIDs for any Members listed as Followers. |
| `group_id` | `string` | The ID of the group to which the story is assigned. |
| `id` | `string` | The unique identifier for the entity template. |
| `iteration_id` | `number` | The ID of the iteration the story belongs to. |
| `label_ids` | `table` | An array of label ids attached to the story. |
| `labels` | `table` | An array of labels attached to the story. |
| `last_used_at` | `string` | The last time that someone created an entity using this template. |
| `linked_files` | `table` | An array of linked files attached to the story. |
| `name` | `string` | The name of the story. |
| `owner_ids` | `table` | An array of UUIDs of the owners of this story. |
| `project_id` | `number` | The ID of the project the story belongs to. |
| `story_contents` | `table` | A map of story attributes this template populates. |
| `story_type` | `string` | The type of story (feature, bug, chore). |
| `sub_tasks` | `table` | An array of sub-tasks connected to the story |
| `tasks` | `table` | An array of tasks connected to the story. |
| `updated_at` | `string` | The time/date when the entity template was last updated. |
| `workflow_state_id` | `number` | The ID of the workflow state the story is currently in. |

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
| `after_id` | `number` | The ID of the Epic we want to move this Epic after. |
| `app_url` | `string` | The Shortcut application url for the Epic. |
| `archived` | `boolean` | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `table` | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `before_id` | `number` | The ID of the Epic we want to move this Epic before. |
| `comments` | `table` | A nested array of threaded comments. |
| `completed` | `boolean` | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | `string` | The time/date the Epic was completed. |
| `completed_at_override` | `string` | A manual override for the time/date the Epic was completed. |
| `converted_from_story_id` | `number` | The ID of the Story that was converted to an Epic. |
| `created_at` | `string` | The time/date the Epic was created. |
| `deadline` | `string` | The Epic's deadline. |
| `description` | `string` | The Epic's description. |
| `entity_type` | `string` | A string description of this resource. |
| `epic_state_id` | `number` | The ID of the Epic State. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `follower_ids` | `table` | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `string` |  |
| `group_id` | `string` | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `table` | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `table` | An array of Group IDs that have been mentioned in the Epic description. |
| `health` | `table` | The current health status of the Epic. |
| `id` | `number` | The unique ID of the Epic. |
| `label_ids` | `table` | An array of Label ids attached to the Epic. |
| `labels` | `table` | An array of Labels attached to the Epic. |
| `member_mention_ids` | `table` | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `table` | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `number` | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `string` | The name of the Epic. |
| `objective_ids` | `table` | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `table` | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `string` | The Epic's planned start date. |
| `position` | `number` | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `string` | The ID of the associated productboard feature. |
| `productboard_name` | `string` | The name of the associated productboard feature. |
| `productboard_plugin_id` | `string` | The ID of the associated productboard integration. |
| `productboard_url` | `string` | The URL of the associated productboard feature. |
| `project_ids` | `table` | The IDs of Projects related to this Epic. |
| `requested_by_id` | `string` | The ID of the Member that requested the epic. |
| `started` | `boolean` | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `string` | The time/date the Epic was started. |
| `started_at_override` | `string` | A manual override for the time/date the Epic was started. |
| `state` | `string` | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `table` | A group of calculated values for this Epic. |
| `stories_without_projects` | `number` | The number of stories in this epic which are not associated with a project. |
| `updated_at` | `string` | The time/date the Epic was updated. |

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
| `app_url` | `string` | The Shortcut application url for the Epic. |
| `archived` | `boolean` | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `table` | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `completed` | `boolean` | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | `string` | The time/date the Epic was completed. |
| `completed_at_override` | `string` | A manual override for the time/date the Epic was completed. |
| `created_at` | `string` | The time/date the Epic was created. |
| `deadline` | `string` | The Epic's deadline. |
| `description` | `string` | The Epic's description. |
| `entity_type` | `string` | A string description of this resource. |
| `epic_state_id` | `number` | The ID of the Epic State. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `follower_ids` | `table` | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `string` |  |
| `group_id` | `string` | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `table` | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `table` | An array of Group IDs that have been mentioned in the Epic description. |
| `id` | `number` | The unique ID of the Epic. |
| `label_ids` | `table` | An array of Label ids attached to the Epic. |
| `labels` | `table` | An array of Labels attached to the Epic. |
| `member_mention_ids` | `table` | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `table` | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `number` | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `string` | The name of the Epic. |
| `objective_ids` | `table` | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `table` | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `string` | The Epic's planned start date. |
| `position` | `number` | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `string` | The ID of the associated productboard feature. |
| `productboard_name` | `string` | The name of the associated productboard feature. |
| `productboard_plugin_id` | `string` | The ID of the associated productboard integration. |
| `productboard_url` | `string` | The URL of the associated productboard feature. |
| `project_ids` | `table` | The IDs of Projects related to this Epic. |
| `requested_by_id` | `string` | The ID of the Member that requested the epic. |
| `started` | `boolean` | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `string` | The time/date the Epic was started. |
| `started_at_override` | `string` | A manual override for the time/date the Epic was started. |
| `state` | `string` | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `table` | A group of calculated values for this Epic. |
| `stories_without_projects` | `number` | The number of stories in this epic which are not associated with a project. |
| `updated_at` | `string` | The time/date the Epic was updated. |

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

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

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
| `color` | `string` | The hex color for this Epic State. |
| `created_at` | `string` | The time/date the Epic State was created. |
| `description` | `string` | The description of what sort of Epics belong in that Epic State. |
| `entity_type` | `string` | A string description of this resource. |
| `global_id` | `string` |  |
| `id` | `number` | The unique ID of the Epic State. |
| `name` | `string` | The Epic State's name. |
| `position` | `number` | The position that the Epic State is in, starting with 0 at the left. |
| `type` | `string` | The type of Epic State (Unstarted, Started, or Done) |
| `updated_at` | `string` | When the Epic State was last updated. |

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
| `app_url` | `string` | The Shortcut application url for the Group. |
| `archived` | `boolean` | Whether or not the Group is archived. |
| `color` | `string` | The hex color to be displayed with the Group (for example, "#ff0000"). |
| `color_key` | `string` | The color key to be displayed with the Group. |
| `created_at` | `string` | The instant when this group was created. |
| `default_workflow_id` | `number` | The ID of the default workflow for stories created in this group. |
| `description` | `string` | The description of the Group. |
| `display_icon` | `table` | Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application. |
| `display_icon_id` | `string` | The Icon id for the avatar of this Group. |
| `entity_type` | `string` | A string description of this resource. |
| `global_id` | `string` |  |
| `id` | `string` | The id of the Group. |
| `member_ids` | `table` | The Member IDs contain within the Group. |
| `mention_name` | `string` | The mention name of the Group. |
| `name` | `string` | The name of the Group. |
| `num_epics_started` | `number` | The number of epics assigned to the group which are in the started workflow state. |
| `num_stories` | `number` | The total number of stories assigned to the group. |
| `num_stories_backlog` | `number` | The number of stories assigned to the group which are in a backlog workflow state. |
| `num_stories_started` | `number` | The number of stories assigned to the group which are in a started workflow state. |
| `updated_at` | `string` | The last instant when this group was updated. |
| `workflow_ids` | `table` | The Workflow IDs contained within the Group. |

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
| `author_id` | `string` | The ID of the permission who created or updated the Health record. |
| `created_at` | `string` | The time that the Health record was created. |
| `entity_type` | `string` | A string description of this resource. |
| `epic_id` | `number` | The ID of the Epic associated with this Health record. |
| `id` | `string` | The unique ID of the Health record. |
| `objective_id` | `number` | The ID of the Objective associated with this Health record. |
| `status` | `string` | The health status of the Epic or Objective. |
| `text` | `string` | The text of the Health record. |
| `updated_at` | `string` | The time that the Health record was updated. |

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
| `actions` | `table` | An array of actions that were performed for the change. |
| `actor_name` | `string` | The name of the actor that performed the action, if it can be determined. |
| `automation_id` | `string` | The ID of the automation that performed the change. |
| `changed_at` | `string` | The date when the change occurred. |
| `external_id` | `string` | The ID of the webhook that handled the change. |
| `id` | `string` | The ID representing the change for the story. |
| `member_id` | `string` | The ID of the member who performed the change. |
| `primary_id` | `string` | The ID of the primary entity that has changed, if applicable. |
| `references` | `table` | An array of objects affected by the change. |
| `version` | `string` | The version of the change format. |
| `webhook_id` | `string` | The ID of the webhook that handled the change. |

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
| `app_url` | `string` | The Shortcut application url for the Iteration. |
| `associated_groups` | `table` | An array containing Group IDs and Group-owned story counts for the Iteration's associated groups. |
| `created_at` | `string` | The instant when this iteration was created. |
| `description` | `string` | The description of the iteration. |
| `end_date` | `string` | The date this iteration ends. |
| `entity_type` | `string` | A string description of this resource |
| `follower_ids` | `table` | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `string` |  |
| `group_ids` | `table` | An array of UUIDs for any Groups you want to add as Followers. |
| `group_mention_ids` | `table` | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `number` | The ID of the iteration. |
| `label_ids` | `table` | An array of label ids attached to the iteration. |
| `labels` | `table` | An array of labels attached to the iteration. |
| `member_mention_ids` | `table` | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `table` | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | The name of the iteration. |
| `start_date` | `string` | The date this iteration begins. |
| `stats` | `table` | A group of calculated values for this Iteration. |
| `status` | `string` | The status of the iteration. |
| `updated_at` | `string` | The instant when this iteration was last updated. |

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
| `current_observed_value` | `table` | The starting value of the Key Result. |
| `current_target_value` | `table` | The starting value of the Key Result. |
| `id` | `string` | The ID of the Key Result. |
| `initial_observed_value` | `table` | The starting value of the Key Result. |
| `name` | `string` | The name of the Key Result. |
| `objective_id` | `number` | The Objective to which this Key Result belongs. |
| `observed_value` | `table` | The starting value of the Key Result. |
| `progress` | `number` | The integer percentage of progress toward completion of the Key Result. |
| `target_value` | `table` | The starting value of the Key Result. |
| `type` | `string` | The type of the Key Result (numeric, percent, or boolean). |

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
| `app_url` | `string` | The Shortcut application url for the Label. |
| `archived` | `boolean` | A true/false boolean indicating if the Label has been archived. |
| `color` | `string` | The hex color to be displayed with the Label (for example, "#ff0000"). |
| `created_at` | `string` | The time/date that the Label was created. |
| `description` | `string` | The description of the new Label. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `global_id` | `string` |  |
| `id` | `number` | The unique ID of the Label. |
| `name` | `string` | The name of the new Label. |
| `num_epics` | `number` | The total number of Epics with this Label. |
| `num_epics_completed` | `number` | The number of completed Epics associated with this Label. |
| `num_epics_in_progress` | `number` | The number of in progress epics associated with this label. |
| `num_epics_total` | `number` | The total number of Epics associated with this Label. |
| `num_epics_unstarted` | `number` | The number of unstarted epics associated with this label. |
| `num_points_backlog` | `number` | The total number of backlog points with this Label. |
| `num_points_completed` | `number` | The total number of completed points with this Label. |
| `num_points_in_progress` | `number` | The total number of in-progress points with this Label. |
| `num_points_total` | `number` | The total number of points with this Label. |
| `num_points_unstarted` | `number` | The total number of unstarted points with this Label. |
| `num_related_documents` | `number` | The total number of Documents associated this Label. |
| `num_stories_backlog` | `number` | The total number of stories backlog Stories with this Label. |
| `num_stories_completed` | `number` | The total number of completed Stories with this Label. |
| `num_stories_in_progress` | `number` | The total number of in-progress Stories with this Label. |
| `num_stories_total` | `number` | The total number of Stories with this Label. |
| `num_stories_unestimated` | `number` | The total number of Stories with no point estimate with this Label. |
| `num_stories_unstarted` | `number` | The total number of stories unstarted Stories with this Label. |
| `stats` | `table` | A group of calculated values for this Label. |
| `updated_at` | `string` | The time/date that the Label was updated. |

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
| `content_type` | `string` | The content type of the image (e.g. |
| `created_at` | `string` | The time/date the LinkedFile was created. |
| `description` | `string` | The description of the file. |
| `entity_type` | `string` | A string description of this resource. |
| `group_mention_ids` | `table` | The groups that are mentioned in the description of the file. |
| `id` | `number` | The unique identifier for the file. |
| `member_mention_ids` | `table` | The members that are mentioned in the description of the file. |
| `mention_ids` | `table` | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | The name of the linked file. |
| `size` | `number` | The filesize, if the integration provided it. |
| `story_id` | `number` | The ID of the linked story. |
| `story_ids` | `table` | The IDs of the stories this file is attached to. |
| `thumbnail_url` | `string` | The URL of the file thumbnail, if the integration provided it. |
| `type` | `string` | The integration type (e.g. |
| `updated_at` | `string` | The time/date the LinkedFile was updated. |
| `uploader_id` | `string` | The UUID of the member that uploaded the file. |
| `url` | `string` | The URL of the file. |

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
| `created_at` | `string` | The time/date the Member was created. |
| `created_without_invite` | `boolean` | Whether this member was created as a placeholder entity. |
| `disabled` | `boolean` | True/false boolean indicating whether the Member has been disabled within the Workspace. |
| `entity_type` | `string` | A string description of this resource. |
| `global_id` | `string` |  |
| `group_ids` | `table` | The Member's group ids |
| `id` | `string` | The Member's ID in Shortcut. |
| `installation_id` | `string` | Only set for agents. |
| `is_owner` | `boolean` |  |
| `mention_name` | `string` |  |
| `name` | `string` |  |
| `organization2` | `table` |  |
| `profile` | `table` | A group of Member profile details. |
| `replaced_by` | `string` | The id of the member that replaces this one when merged. |
| `role` | `string` | The Member's role in the Workspace. |
| `state` | `string` | The user state, one of partial, full, disabled, or imported. |
| `updated_at` | `string` | The time/date the Member was last updated. |
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
| `after_id` | `number` | The ID of the Milestone we want to move this Milestone after. |
| `app_url` | `string` | The Shortcut application url for the Milestone. |
| `archived` | `boolean` | A boolean indicating whether the Milestone has been archived or not. |
| `before_id` | `number` | The ID of the Milestone we want to move this Milestone before. |
| `categories` | `table` | An array of Categories attached to the Milestone. |
| `completed` | `boolean` | A true/false boolean indicating if the Milestone has been completed. |
| `completed_at` | `string` | The time/date the Milestone was completed. |
| `completed_at_override` | `string` | A manual override for the time/date the Milestone was completed. |
| `created_at` | `string` | The time/date the Milestone was created. |
| `description` | `string` | The Milestone's description. |
| `entity_type` | `string` | A string description of this resource. |
| `global_id` | `string` |  |
| `id` | `number` | The unique ID of the Milestone. |
| `key_result_ids` | `table` | The IDs of the Key Results associated with the Objective. |
| `name` | `string` | The name of the Milestone. |
| `position` | `number` | A number representing the position of the Milestone in relation to every other Milestone within the Workspace. |
| `started` | `boolean` | A true/false boolean indicating if the Milestone has been started. |
| `started_at` | `string` | The time/date the Milestone was started. |
| `started_at_override` | `string` | A manual override for the time/date the Milestone was started. |
| `state` | `string` | The workflow state that the Milestone is in. |
| `stats` | `table` | A group of calculated values for this Milestone. |
| `updated_at` | `string` | The time/date the Milestone was updated. |

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

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


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
| `after_id` | `number` | The ID of the Objective we want to move this Objective after. |
| `app_url` | `string` | The Shortcut application url for the Objective. |
| `archived` | `boolean` | A boolean indicating whether the Objective has been archived or not. |
| `before_id` | `number` | The ID of the Objective we want to move this Objective before. |
| `categories` | `table` | An array of Categories attached to the Objective. |
| `completed` | `boolean` | A true/false boolean indicating if the Objectivehas been completed. |
| `completed_at` | `string` | The time/date the Objective was completed. |
| `completed_at_override` | `string` | A manual override for the time/date the Objective was completed. |
| `created_at` | `string` | The time/date the Objective was created. |
| `description` | `string` | The Objective's description. |
| `entity_type` | `string` | A string description of this resource. |
| `global_id` | `string` |  |
| `id` | `number` | The unique ID of the Objective. |
| `key_result_ids` | `table` | The IDs of the Key Results associated with the Objective. |
| `name` | `string` | The name of the Objective. |
| `position` | `number` | A number representing the position of the Objective in relation to every other Objective within the Workspace. |
| `started` | `boolean` | A true/false boolean indicating if the Objective has been started. |
| `started_at` | `string` | The time/date the Objective was started. |
| `started_at_override` | `string` | A manual override for the time/date the Objective was started. |
| `state` | `string` | The workflow state that the Objective is in. |
| `stats` | `table` | A group of calculated values for this Objective. |
| `updated_at` | `string` | The time/date the Objective was updated. |

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
| `abbreviation` | `string` | The Project abbreviation used in Story summaries. |
| `app_url` | `string` | The Shortcut application url for the Project. |
| `archived` | `boolean` | True/false boolean indicating whether the Project is in an Archived state. |
| `color` | `string` | The color associated with the Project in the Shortcut member interface. |
| `created_at` | `string` | The time/date that the Project was created. |
| `days_to_thermometer` | `number` | The number of days before the thermometer appears in the Story summary. |
| `description` | `string` | The description of the Project. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `follower_ids` | `table` | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `string` | The Global ID of the Project. |
| `id` | `number` | The unique ID of the Project. |
| `iteration_length` | `number` | The number of weeks per iteration in this Project. |
| `name` | `string` | The name of the Project |
| `show_thermometer` | `boolean` | Configuration to enable or disable thermometers in the Story summary. |
| `start_time` | `string` | The date at which the Project was started. |
| `stats` | `table` | A group of calculated values for this Project. |
| `team_id` | `number` | The ID of the team the project belongs to. |
| `updated_at` | `string` | The time/date that the Project was last updated. |
| `workflow_id` | `number` | The ID of the workflow the project belongs to. |

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
| `created_at` | `string` | The time/date the Repository was created. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | The VCS unique identifier for the Repository. |
| `full_name` | `string` | The full name of the VCS repository. |
| `id` | `number` | The ID associated to the VCS repository in Shortcut. |
| `name` | `string` | The shorthand name of the VCS repository. |
| `type` | `string` | The VCS provider for the Repository. |
| `updated_at` | `string` | The time/date the Repository was updated. |
| `url` | `string` | The URL of the Repository. |

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
| `epics` | `table` | The results of the Epic search query. |
| `iterations` | `table` | The results of the Iteration search query. |
| `milestones` | `table` | The results of the Objective search query. |
| `stories` | `table` | The results of the Story search query. |

#### Example: Load

```lua
local search, err = client:Search():load({ query = "query" })
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
| `after_id` | `number` | The ID of the story we want to move this story after. |
| `app_url` | `string` | The Shortcut application url for the Story. |
| `archived` | `boolean` | True if the story has been archived or not. |
| `before_id` | `number` | The ID of the story we want to move this story before. |
| `blocked` | `boolean` | A true/false boolean indicating if the Story is currently blocked. |
| `blocker` | `boolean` | A true/false boolean indicating if the Story is currently a blocker of another story. |
| `branch_ids` | `table` | An array of IDs of Branches attached to the story. |
| `branches` | `table` | An array of Git branches attached to the story. |
| `comment_ids` | `table` | An array of IDs of Comments attached to the story. |
| `comments` | `table` | An array of comments attached to the story. |
| `commit_ids` | `table` | An array of IDs of Commits attached to the story. |
| `commits` | `table` | An array of commits attached to the story. |
| `completed` | `boolean` | A true/false boolean indicating if the Story has been completed. |
| `completed_at` | `string` | The time/date the Story was completed. |
| `completed_at_override` | `string` | A manual override for the time/date the Story was completed. |
| `created_at` | `string` | The time/date the Story was created. |
| `custom_fields` | `table` | An array of CustomField value assertions for the story. |
| `custom_fields_add` | `table` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `table` | A map specifying a CustomField ID. |
| `cycle_time` | `number` | The cycle time (in seconds) of this story when complete. |
| `deadline` | `string` | The due date of the story. |
| `description` | `string` | The description of the story. |
| `entity_type` | `string` | A string description of this resource. |
| `epic_id` | `number` | The ID of the epic the story belongs to. |
| `estimate` | `number` | The numeric point estimate of the story. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `external_links` | `table` | An array of external links (strings) associated with a Story |
| `external_links_add` | `table` | An array of External Links associated with this story. |
| `external_links_remove` | `table` | An array of External Links associated with this story. |
| `file_ids` | `table` | An array of IDs of files attached to the story. |
| `file_ids_add` | `table` | An array of IDs of files attached to the story in addition to files from the template. |
| `file_ids_remove` | `table` | An array of IDs of files removed from files from the template. |
| `files` | `table` | An array of files attached to the story. |
| `follower_ids` | `table` | An array of UUIDs for any Members listed as Followers. |
| `follower_ids_add` | `table` | The UUIDs of the new followers to be added in addition to followers from the template. |
| `follower_ids_remove` | `table` | The UUIDs of the new followers to be removed from followers from the template. |
| `formatted_vcs_branch_name` | `string` | The formatted branch name for this story. |
| `global_id` | `string` |  |
| `group_id` | `string` | The ID of the group associated with the story. |
| `group_mention_ids` | `table` | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `number` | The unique ID of the Story. |
| `iteration_id` | `number` | The ID of the iteration the story belongs to. |
| `label_ids` | `table` | An array of label ids attached to the story. |
| `labels` | `table` | An array of labels attached to the story. |
| `labels_add` | `table` | An array of labels attached to the story in addition to the labels provided by the template. |
| `labels_remove` | `table` | An array of labels to remove from the labels provided by the template. |
| `lead_time` | `number` | The lead time (in seconds) of this story when complete. |
| `linked_file_ids` | `table` | An array of IDs of linked files attached to the story. |
| `linked_file_ids_add` | `table` | An array of IDs of linked files attached to the story in addition to files from the template. |
| `linked_file_ids_remove` | `table` | An array of IDs of linked files removed from files from the template. |
| `linked_files` | `table` | An array of linked files attached to the story. |
| `member_mention_ids` | `table` | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `table` | `Deprecated:` use `member_mention_ids`. |
| `move_to` | `string` | One of "first" or "last". |
| `moved_at` | `string` | The time/date the Story was last changed workflow-state. |
| `name` | `string` | The name of the story. |
| `num_tasks_completed` | `number` | The number of tasks on the story which are complete. |
| `owner_ids` | `table` | An array of UUIDs of the owners of this story. |
| `owner_ids_add` | `table` | The UUIDs of the new owners to be added in addition to owners from the template. |
| `owner_ids_remove` | `table` | The UUIDs of the new owners to be removed from owners from the template. |
| `parent_story_id` | `number` | The id of the parent story to associate with this story. |
| `position` | `number` | A number representing the position of the story in relation to every other story in the current project. |
| `previous_iteration_ids` | `table` | The IDs of the iteration the story belongs to. |
| `project_id` | `number` | The ID of the project the story belongs to. |
| `pull_request_ids` | `table` | An array of IDs of Pull/Merge Requests attached to the story. |
| `pull_requests` | `table` | An array of Pull/Merge Requests attached to the story. |
| `requested_by_id` | `string` | The ID of the Member that requested the story. |
| `source_task_id` | `number` | Given this story was converted from a task in another story, this is the original task ID that was converted to this story. |
| `started` | `boolean` | A true/false boolean indicating if the Story has been started. |
| `started_at` | `string` | The time/date the Story was started. |
| `started_at_override` | `string` | A manual override for the time/date the Story was started. |
| `stats` | `table` | The stats object for Stories |
| `story_links` | `table` | An array of story links attached to the Story. |
| `story_template_id` | `string` | The ID of the story template used to create this story, or null if not created using a template. |
| `story_type` | `string` | The type of story (feature, bug, chore). |
| `sub_task_story_ids` | `table` |  |
| `sub_tasks` | `table` | A list of either params to create a new sub-task or link an existing story as a sub-task |
| `synced_item` | `table` | The synced item for the story. |
| `task_ids` | `table` | An array of IDs of Tasks attached to the story. |
| `tasks` | `table` | An array of tasks connected to the story. |
| `updated_at` | `string` | The time/date the Story was updated. |
| `workflow_id` | `number` | The ID of the workflow the story belongs to. |
| `workflow_state_id` | `number` | The ID of the workflow state the story is currently in. |

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
| `app_url` | `string` | The Shortcut application url for the Comment. |
| `author_id` | `string` | The unique ID of the Member who is the Comment's author. |
| `blocker` | `boolean` | Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment. |
| `created_at` | `string` | The time/date when the Comment was created. |
| `deleted` | `boolean` | True/false boolean indicating whether the Comment has been deleted. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `group_mention_ids` | `table` | The unique IDs of the Group who are mentioned in the Comment. |
| `id` | `number` | The unique ID of the Comment. |
| `linked_to_slack` | `boolean` | Whether the Comment is currently the root of a thread that is linked to Slack. |
| `member_mention_ids` | `table` | The unique IDs of the Member who are mentioned in the Comment. |
| `mention_ids` | `table` | `Deprecated:` use `member_mention_ids`. |
| `parent_id` | `number` | The ID of the parent Comment this Comment is threaded under. |
| `position` | `number` | The Comments numerical position in the list from oldest to newest. |
| `reactions` | `table` | A set of Reactions to this Comment. |
| `story_id` | `number` | The ID of the Story on which the Comment appears. |
| `text` | `string` | The text of the Comment. |
| `unblocks_parent` | `boolean` | Marks the comment as an unblocker to its blocker parent. |
| `updated_at` | `string` | The time/date when the Comment was updated. |

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
  id = 1, -- number
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
  story_id = 1, -- number
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
| `created_at` | `string` | The time/date when the Story Link was created. |
| `entity_type` | `string` | A string description of this resource. |
| `id` | `number` | The unique identifier of the Story Link. |
| `object_id` | `number` | The ID of the object Story. |
| `subject_id` | `number` | The ID of the subject Story. |
| `subject_workflow_state_id` | `number` | The workflow state of the "subject" story. |
| `updated_at` | `string` | The time/date when the Story Link was last updated. |
| `verb` | `string` | How the subject Story acts on the object Story. |

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
| `emoji` | `string` | The emoji short-code to add / remove. |

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
| `after_id` | `number` | The ID of the story that the stories are to be moved below. |
| `archived` | `boolean` | A true/false boolean indicating whether the Story is in archived state. |
| `before_id` | `number` | The ID of the story that the stories are to be moved before. |
| `completed_at_end` | `string` | Stories should have been completed on or before this date. |
| `completed_at_start` | `string` | Stories should have been completed on or after this date. |
| `created_at_end` | `string` | Stories should have been created on or before this date. |
| `created_at_start` | `string` | Stories should have been created on or after this date. |
| `custom_fields_add` | `table` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `table` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `string` | The due date of the story. |
| `deadline_end` | `string` | Stories should have a deadline on or before this date. |
| `deadline_start` | `string` | Stories should have a deadline on or after this date. |
| `epic_id` | `number` | The Epic IDs that may be associated with the Stories. |
| `epic_ids` | `table` | The Epic IDs that may be associated with the Stories. |
| `estimate` | `number` | The number of estimate points associate with the Stories. |
| `external_id` | `string` | An ID or URL that references an external resource. |
| `external_links` | `table` | An array of External Links associated with this story. |
| `follower_ids_add` | `table` | The UUIDs of the new followers to be added. |
| `follower_ids_remove` | `table` | The UUIDs of the followers to be removed. |
| `group_id` | `string` | The Group ID that is associated with the Stories |
| `group_ids` | `table` | The Group IDs that are associated with the Stories |
| `includes_description` | `boolean` | Whether to include the story description in the response. |
| `iteration_id` | `number` | The Iteration ID that may be associated with the Stories. |
| `iteration_ids` | `table` | The Iteration IDs that may be associated with the Stories. |
| `label_ids` | `table` | The Label IDs that may be associated with the Stories. |
| `label_name` | `string` | The name of any associated Labels. |
| `labels_add` | `table` | An array of labels to be added. |
| `labels_remove` | `table` | An array of labels to be removed. |
| `move_to` | `string` | One of "first" or "last". |
| `owner_id` | `string` | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids` | `table` | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids_add` | `table` | The UUIDs of the new owners to be added. |
| `owner_ids_remove` | `table` | The UUIDs of the owners to be removed. |
| `project_id` | `number` | The IDs for the Projects the Stories may be assigned to. |
| `project_ids` | `table` | The IDs for the Projects the Stories may be assigned to. |
| `requested_by_id` | `string` | The UUID of any Users who may have requested the Stories. |
| `stories` | `table` | An array of stories to be created. |
| `story_ids` | `table` | The Ids of the Stories you wish to update. |
| `story_type` | `string` | The type of Stories that you want returned. |
| `updated_at_end` | `string` | Stories should have been updated on or before this date. |
| `updated_at_start` | `string` | Stories should have been updated on or after this date. |
| `workflow_state_id` | `number` | The unique IDs of the specific Workflow States that the Stories should be in. |
| `workflow_state_types` | `table` | The type of Workflow State the Stories may be in. |

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
| `after_id` | `number` | Move task after this task ID. |
| `before_id` | `number` | Move task before this task ID. |
| `complete` | `boolean` | True/false boolean indicating whether the Task has been completed. |
| `completed_at` | `string` | The time/date the Task was completed. |
| `created_at` | `string` | The time/date the Task was created. |
| `description` | `string` | Full text of the Task. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `global_id` | `string` |  |
| `group_mention_ids` | `table` | An array of UUIDs of Groups mentioned in this Task. |
| `id` | `number` | The unique ID of the Task. |
| `member_mention_ids` | `table` | An array of UUIDs of Members mentioned in this Task. |
| `mention_ids` | `table` | `Deprecated:` use `member_mention_ids`. |
| `owner_ids` | `table` | An array of UUIDs of the Owners of this Task. |
| `position` | `number` | The number corresponding to the Task's position within a list of Tasks on a Story. |
| `story_id` | `number` | The unique identifier of the parent Story. |
| `updated_at` | `string` | The time/date the Task was updated. |

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
| `app_url` | `string` | The Shortcut application url for the Comment. |
| `author_id` | `string` | The unique ID of the Member that authored the Comment. |
| `comments` | `table` | A nested array of threaded comments. |
| `created_at` | `string` | The time/date the Comment was created. |
| `deleted` | `boolean` | True/false boolean indicating whether the Comment is deleted. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `group_mention_ids` | `table` | An array of Group IDs that have been mentioned in this Comment. |
| `id` | `number` | The unique ID of the Comment. |
| `member_mention_ids` | `table` | An array of Member IDs that have been mentioned in this Comment. |
| `mention_ids` | `table` | `Deprecated:` use `member_mention_ids`. |
| `text` | `string` | The text of the Comment. |
| `updated_at` | `string` | The time/date the Comment was updated. |

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
| `content_type` | `string` | Free form string corresponding to a text or image file. |
| `created_at` | `string` | The time/date that the file was created. |
| `description` | `string` | The description of the file. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `filename` | `string` | The name assigned to the file in Shortcut upon upload. |
| `group_mention_ids` | `table` | The unique IDs of the Groups who are mentioned in the file description. |
| `id` | `number` | The unique ID for the file. |
| `member_mention_ids` | `table` | The unique IDs of the Members who are mentioned in the file description. |
| `mention_ids` | `table` | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | The optional User-specified name of the file. |
| `size` | `number` | The size of the file. |
| `story_ids` | `table` | The unique IDs of the Stories associated with this file. |
| `thumbnail_url` | `string` | The url where the thumbnail of the file can be found in Shortcut. |
| `updated_at` | `string` | The time/date that the file was updated. |
| `uploader_id` | `string` | The unique ID of the Member who uploaded the file. |
| `url` | `string` | The URL for the file. |

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
| `id` | `string` |  |
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
| `auto_assign_owner` | `boolean` | Indicates if an owner is automatically assigned when an unowned story is started. |
| `created_at` | `string` | The date the Workflow was created. |
| `default_state_id` | `number` | The unique ID of the default state that new Stories are entered into. |
| `description` | `string` | A description of the workflow. |
| `entity_type` | `string` | A string description of this resource. |
| `id` | `number` | The unique ID of the Workflow. |
| `name` | `string` | The name of the workflow. |
| `project_ids` | `table` | An array of IDs of projects within the Workflow. |
| `states` | `table` | A map of the states in this Workflow. |
| `team_id` | `number` | The ID of the team the workflow belongs to. |
| `updated_at` | `string` | The date the Workflow was updated. |

#### Example: Load

```lua
local workflow, err = client:Workflow():load({ id = 1 })
```

#### Example: List

```lua
local workflows, err = client:Workflow():list()
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Open types

2 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `history` | `actions` | 19 | 1 level |
| `history` | `references` | 12 | 5 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

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

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

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

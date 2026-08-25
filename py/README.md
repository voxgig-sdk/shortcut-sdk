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
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

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

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
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

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
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
| `archived` | `bool` | A true/false boolean indicating if the Category has been archived. |
| `color` | `str` | The hex color to be displayed with the Category (for example, "#ff0000"). |
| `created_at` | `str` | The time/date that the Category was created. |
| `entity_type` | `str` | A string description of this resource. |
| `external_id` | `str` | This field can be set to another unique ID. |
| `global_id` | `str` | The Global ID of the Category. |
| `id` | `int` | The unique ID of the Category. |
| `name` | `str` | The name of the Category. |
| `type` | `str` | The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category. |
| `updated_at` | `str` | The time/date that the Category was updated. |

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

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


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
| `after_id` | `str` | The ID of the CustomField we want to move this CustomField after. |
| `before_id` | `str` | The ID of the CustomField we want to move this CustomField before. |
| `canonical_name` | `str` | The canonical name for a Shortcut-defined field. |
| `created_at` | `str` | The instant when this CustomField was created. |
| `description` | `str` | A string description of the CustomField |
| `enabled` | `bool` | When true, the CustomField can be applied to entities in the Workspace. |
| `entity_type` | `str` | A string description of this resource. |
| `field_type` | `str` | The type of Custom Field, eg. |
| `fixed_position` | `bool` | When true, the CustomFieldEnumValues may not be reordered. |
| `icon_set_identifier` | `str` | A string that represents the icon that corresponds to this custom field. |
| `id` | `str` | The unique public ID for the CustomField. |
| `name` | `str` | The name of the Custom Field. |
| `position` | `int` | An integer indicating the position of this Custom Field with respect to the other CustomField |
| `story_types` | `list` | The types of stories this CustomField is scoped to. |
| `updated_at` | `str` | The instant when this CustomField was last updated. |
| `values` | `list` | A collection of legal values for a CustomField. |

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
| `app_url` | `str` | The Shortcut application url for the Doc. |
| `content` | `str` | The content for the new document |
| `id` | `str` | The public id of the Doc |
| `title` | `str` | The title for the new document |

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
| `author_id` | `str` | The id of the user creating this template. |
| `created_at` | `str` | The time/date when the entity template was created. |
| `custom_fields` | `list` | An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `str` | The due date of the story. |
| `description` | `str` | The description of the story. |
| `entity_type` | `str` | A string description of this resource. |
| `epic_id` | `int` | The ID of the epic the story belongs to. |
| `estimate` | `int` | The numeric point estimate of the story. |
| `external_links` | `list` | An array of external links connected to the story. |
| `files` | `list` | An array of files attached to the story. |
| `follower_ids` | `list` | An array of UUIDs for any Members listed as Followers. |
| `group_id` | `str` | The ID of the group to which the story is assigned. |
| `id` | `str` | The unique identifier for the entity template. |
| `iteration_id` | `int` | The ID of the iteration the story belongs to. |
| `label_ids` | `list` | An array of label ids attached to the story. |
| `labels` | `list` | An array of labels attached to the story. |
| `last_used_at` | `str` | The last time that someone created an entity using this template. |
| `linked_files` | `list` | An array of linked files attached to the story. |
| `name` | `str` | The name of the story. |
| `owner_ids` | `list` | An array of UUIDs of the owners of this story. |
| `project_id` | `int` | The ID of the project the story belongs to. |
| `story_contents` | `dict` | A map of story attributes this template populates. |
| `story_type` | `str` | The type of story (feature, bug, chore). |
| `sub_tasks` | `list` | An array of sub-tasks connected to the story |
| `tasks` | `list` | An array of tasks connected to the story. |
| `updated_at` | `str` | The time/date when the entity template was last updated. |
| `workflow_state_id` | `int` | The ID of the workflow state the story is currently in. |

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
| `after_id` | `int` | The ID of the Epic we want to move this Epic after. |
| `app_url` | `str` | The Shortcut application url for the Epic. |
| `archived` | `bool` | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `list` | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `before_id` | `int` | The ID of the Epic we want to move this Epic before. |
| `comments` | `list` | A nested array of threaded comments. |
| `completed` | `bool` | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | `str` | The time/date the Epic was completed. |
| `completed_at_override` | `str` | A manual override for the time/date the Epic was completed. |
| `converted_from_story_id` | `int` | The ID of the Story that was converted to an Epic. |
| `created_at` | `str` | The time/date the Epic was created. |
| `deadline` | `str` | The Epic's deadline. |
| `description` | `str` | The Epic's description. |
| `entity_type` | `str` | A string description of this resource. |
| `epic_state_id` | `int` | The ID of the Epic State. |
| `external_id` | `str` | This field can be set to another unique ID. |
| `follower_ids` | `list` | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `str` |  |
| `group_id` | `str` | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `list` | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `list` | An array of Group IDs that have been mentioned in the Epic description. |
| `health` | `dict` | The current health status of the Epic. |
| `id` | `int` | The unique ID of the Epic. |
| `label_ids` | `list` | An array of Label ids attached to the Epic. |
| `labels` | `list` | An array of Labels attached to the Epic. |
| `member_mention_ids` | `list` | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `list` | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `int` | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `str` | The name of the Epic. |
| `objective_ids` | `list` | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `list` | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `str` | The Epic's planned start date. |
| `position` | `int` | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `str` | The ID of the associated productboard feature. |
| `productboard_name` | `str` | The name of the associated productboard feature. |
| `productboard_plugin_id` | `str` | The ID of the associated productboard integration. |
| `productboard_url` | `str` | The URL of the associated productboard feature. |
| `project_ids` | `list` | The IDs of Projects related to this Epic. |
| `requested_by_id` | `str` | The ID of the Member that requested the epic. |
| `started` | `bool` | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `str` | The time/date the Epic was started. |
| `started_at_override` | `str` | A manual override for the time/date the Epic was started. |
| `state` | `str` | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `dict` | A group of calculated values for this Epic. |
| `stories_without_projects` | `int` | The number of stories in this epic which are not associated with a project. |
| `updated_at` | `str` | The time/date the Epic was updated. |

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
| `app_url` | `str` | The Shortcut application url for the Epic. |
| `archived` | `bool` | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `list` | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `completed` | `bool` | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | `str` | The time/date the Epic was completed. |
| `completed_at_override` | `str` | A manual override for the time/date the Epic was completed. |
| `created_at` | `str` | The time/date the Epic was created. |
| `deadline` | `str` | The Epic's deadline. |
| `description` | `str` | The Epic's description. |
| `entity_type` | `str` | A string description of this resource. |
| `epic_state_id` | `int` | The ID of the Epic State. |
| `external_id` | `str` | This field can be set to another unique ID. |
| `follower_ids` | `list` | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `str` |  |
| `group_id` | `str` | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `list` | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `list` | An array of Group IDs that have been mentioned in the Epic description. |
| `id` | `int` | The unique ID of the Epic. |
| `label_ids` | `list` | An array of Label ids attached to the Epic. |
| `labels` | `list` | An array of Labels attached to the Epic. |
| `member_mention_ids` | `list` | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `list` | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `int` | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `str` | The name of the Epic. |
| `objective_ids` | `list` | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `list` | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `str` | The Epic's planned start date. |
| `position` | `int` | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `str` | The ID of the associated productboard feature. |
| `productboard_name` | `str` | The name of the associated productboard feature. |
| `productboard_plugin_id` | `str` | The ID of the associated productboard integration. |
| `productboard_url` | `str` | The URL of the associated productboard feature. |
| `project_ids` | `list` | The IDs of Projects related to this Epic. |
| `requested_by_id` | `str` | The ID of the Member that requested the epic. |
| `started` | `bool` | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `str` | The time/date the Epic was started. |
| `started_at_override` | `str` | A manual override for the time/date the Epic was started. |
| `state` | `str` | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `dict` | A group of calculated values for this Epic. |
| `stories_without_projects` | `int` | The number of stories in this epic which are not associated with a project. |
| `updated_at` | `str` | The time/date the Epic was updated. |

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

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

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
| `color` | `str` | The hex color for this Epic State. |
| `created_at` | `str` | The time/date the Epic State was created. |
| `description` | `str` | The description of what sort of Epics belong in that Epic State. |
| `entity_type` | `str` | A string description of this resource. |
| `global_id` | `str` |  |
| `id` | `int` | The unique ID of the Epic State. |
| `name` | `str` | The Epic State's name. |
| `position` | `int` | The position that the Epic State is in, starting with 0 at the left. |
| `type` | `str` | The type of Epic State (Unstarted, Started, or Done) |
| `updated_at` | `str` | When the Epic State was last updated. |

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
| `app_url` | `str` | The Shortcut application url for the Group. |
| `archived` | `bool` | Whether or not the Group is archived. |
| `color` | `str` | The hex color to be displayed with the Group (for example, "#ff0000"). |
| `color_key` | `str` | The color key to be displayed with the Group. |
| `created_at` | `str` | The instant when this group was created. |
| `default_workflow_id` | `int` | The ID of the default workflow for stories created in this group. |
| `description` | `str` | The description of the Group. |
| `display_icon` | `dict` | Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application. |
| `display_icon_id` | `str` | The Icon id for the avatar of this Group. |
| `entity_type` | `str` | A string description of this resource. |
| `global_id` | `str` |  |
| `id` | `str` | The id of the Group. |
| `member_ids` | `list` | The Member IDs contain within the Group. |
| `mention_name` | `str` | The mention name of the Group. |
| `name` | `str` | The name of the Group. |
| `num_epics_started` | `int` | The number of epics assigned to the group which are in the started workflow state. |
| `num_stories` | `int` | The total number of stories assigned to the group. |
| `num_stories_backlog` | `int` | The number of stories assigned to the group which are in a backlog workflow state. |
| `num_stories_started` | `int` | The number of stories assigned to the group which are in a started workflow state. |
| `updated_at` | `str` | The last instant when this group was updated. |
| `workflow_ids` | `list` | The Workflow IDs contained within the Group. |

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
| `author_id` | `str` | The ID of the permission who created or updated the Health record. |
| `created_at` | `str` | The time that the Health record was created. |
| `entity_type` | `str` | A string description of this resource. |
| `epic_id` | `int` | The ID of the Epic associated with this Health record. |
| `id` | `str` | The unique ID of the Health record. |
| `objective_id` | `int` | The ID of the Objective associated with this Health record. |
| `status` | `str` | The health status of the Epic or Objective. |
| `text` | `str` | The text of the Health record. |
| `updated_at` | `str` | The time that the Health record was updated. |

#### Example: Load

```python
health = client.Health().load({"epic_id": 1})
```

#### Example: List

```python
healths = client.Health().list({"epic_id": 1})
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
| `actions` | `list` | An array of actions that were performed for the change. |
| `actor_name` | `str` | The name of the actor that performed the action, if it can be determined. |
| `automation_id` | `str` | The ID of the automation that performed the change. |
| `changed_at` | `str` | The date when the change occurred. |
| `external_id` | `str` | The ID of the webhook that handled the change. |
| `id` | `str` | The ID representing the change for the story. |
| `member_id` | `str` | The ID of the member who performed the change. |
| `primary_id` | `str` | The ID of the primary entity that has changed, if applicable. |
| `references` | `list` | An array of objects affected by the change. |
| `version` | `str` | The version of the change format. |
| `webhook_id` | `str` | The ID of the webhook that handled the change. |

#### Example: List

```python
historys = client.History().list({"story_id": 1})
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
| `app_url` | `str` | The Shortcut application url for the Iteration. |
| `associated_groups` | `list` | An array containing Group IDs and Group-owned story counts for the Iteration's associated groups. |
| `created_at` | `str` | The instant when this iteration was created. |
| `description` | `str` | The description of the iteration. |
| `end_date` | `str` | The date this iteration ends. |
| `entity_type` | `str` | A string description of this resource |
| `follower_ids` | `list` | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `str` |  |
| `group_ids` | `list` | An array of UUIDs for any Groups you want to add as Followers. |
| `group_mention_ids` | `list` | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `int` | The ID of the iteration. |
| `label_ids` | `list` | An array of label ids attached to the iteration. |
| `labels` | `list` | An array of labels attached to the iteration. |
| `member_mention_ids` | `list` | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `list` | `Deprecated:` use `member_mention_ids`. |
| `name` | `str` | The name of the iteration. |
| `start_date` | `str` | The date this iteration begins. |
| `stats` | `dict` | A group of calculated values for this Iteration. |
| `status` | `str` | The status of the iteration. |
| `updated_at` | `str` | The instant when this iteration was last updated. |

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
| `current_observed_value` | `dict` | The starting value of the Key Result. |
| `current_target_value` | `dict` | The starting value of the Key Result. |
| `id` | `str` | The ID of the Key Result. |
| `initial_observed_value` | `dict` | The starting value of the Key Result. |
| `name` | `str` | The name of the Key Result. |
| `objective_id` | `int` | The Objective to which this Key Result belongs. |
| `observed_value` | `dict` | The starting value of the Key Result. |
| `progress` | `int` | The integer percentage of progress toward completion of the Key Result. |
| `target_value` | `dict` | The starting value of the Key Result. |
| `type` | `str` | The type of the Key Result (numeric, percent, or boolean). |

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
| `app_url` | `str` | The Shortcut application url for the Label. |
| `archived` | `bool` | A true/false boolean indicating if the Label has been archived. |
| `color` | `str` | The hex color to be displayed with the Label (for example, "#ff0000"). |
| `created_at` | `str` | The time/date that the Label was created. |
| `description` | `str` | The description of the new Label. |
| `entity_type` | `str` | A string description of this resource. |
| `external_id` | `str` | This field can be set to another unique ID. |
| `global_id` | `str` |  |
| `id` | `int` | The unique ID of the Label. |
| `name` | `str` | The name of the new Label. |
| `num_epics` | `int` | The total number of Epics with this Label. |
| `num_epics_completed` | `int` | The number of completed Epics associated with this Label. |
| `num_epics_in_progress` | `int` | The number of in progress epics associated with this label. |
| `num_epics_total` | `int` | The total number of Epics associated with this Label. |
| `num_epics_unstarted` | `int` | The number of unstarted epics associated with this label. |
| `num_points_backlog` | `int` | The total number of backlog points with this Label. |
| `num_points_completed` | `int` | The total number of completed points with this Label. |
| `num_points_in_progress` | `int` | The total number of in-progress points with this Label. |
| `num_points_total` | `int` | The total number of points with this Label. |
| `num_points_unstarted` | `int` | The total number of unstarted points with this Label. |
| `num_related_documents` | `int` | The total number of Documents associated this Label. |
| `num_stories_backlog` | `int` | The total number of stories backlog Stories with this Label. |
| `num_stories_completed` | `int` | The total number of completed Stories with this Label. |
| `num_stories_in_progress` | `int` | The total number of in-progress Stories with this Label. |
| `num_stories_total` | `int` | The total number of Stories with this Label. |
| `num_stories_unestimated` | `int` | The total number of Stories with no point estimate with this Label. |
| `num_stories_unstarted` | `int` | The total number of stories unstarted Stories with this Label. |
| `stats` | `dict` | A group of calculated values for this Label. |
| `updated_at` | `str` | The time/date that the Label was updated. |

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
| `content_type` | `str` | The content type of the image (e.g. |
| `created_at` | `str` | The time/date the LinkedFile was created. |
| `description` | `str` | The description of the file. |
| `entity_type` | `str` | A string description of this resource. |
| `group_mention_ids` | `list` | The groups that are mentioned in the description of the file. |
| `id` | `int` | The unique identifier for the file. |
| `member_mention_ids` | `list` | The members that are mentioned in the description of the file. |
| `mention_ids` | `list` | `Deprecated:` use `member_mention_ids`. |
| `name` | `str` | The name of the linked file. |
| `size` | `int` | The filesize, if the integration provided it. |
| `story_id` | `int` | The ID of the linked story. |
| `story_ids` | `list` | The IDs of the stories this file is attached to. |
| `thumbnail_url` | `str` | The URL of the file thumbnail, if the integration provided it. |
| `type` | `str` | The integration type (e.g. |
| `updated_at` | `str` | The time/date the LinkedFile was updated. |
| `uploader_id` | `str` | The UUID of the member that uploaded the file. |
| `url` | `str` | The URL of the file. |

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
| `created_at` | `str` | The time/date the Member was created. |
| `created_without_invite` | `bool` | Whether this member was created as a placeholder entity. |
| `disabled` | `bool` | True/false boolean indicating whether the Member has been disabled within the Workspace. |
| `entity_type` | `str` | A string description of this resource. |
| `global_id` | `str` |  |
| `group_ids` | `list` | The Member's group ids |
| `id` | `str` | The Member's ID in Shortcut. |
| `installation_id` | `str` | Only set for agents. |
| `is_owner` | `bool` |  |
| `mention_name` | `str` |  |
| `name` | `str` |  |
| `organization2` | `dict` |  |
| `profile` | `dict` | A group of Member profile details. |
| `replaced_by` | `str` | The id of the member that replaces this one when merged. |
| `role` | `str` | The Member's role in the Workspace. |
| `state` | `str` | The user state, one of partial, full, disabled, or imported. |
| `updated_at` | `str` | The time/date the Member was last updated. |
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
| `after_id` | `int` | The ID of the Milestone we want to move this Milestone after. |
| `app_url` | `str` | The Shortcut application url for the Milestone. |
| `archived` | `bool` | A boolean indicating whether the Milestone has been archived or not. |
| `before_id` | `int` | The ID of the Milestone we want to move this Milestone before. |
| `categories` | `list` | An array of Categories attached to the Milestone. |
| `completed` | `bool` | A true/false boolean indicating if the Milestone has been completed. |
| `completed_at` | `str` | The time/date the Milestone was completed. |
| `completed_at_override` | `str` | A manual override for the time/date the Milestone was completed. |
| `created_at` | `str` | The time/date the Milestone was created. |
| `description` | `str` | The Milestone's description. |
| `entity_type` | `str` | A string description of this resource. |
| `global_id` | `str` |  |
| `id` | `int` | The unique ID of the Milestone. |
| `key_result_ids` | `list` | The IDs of the Key Results associated with the Objective. |
| `name` | `str` | The name of the Milestone. |
| `position` | `int` | A number representing the position of the Milestone in relation to every other Milestone within the Workspace. |
| `started` | `bool` | A true/false boolean indicating if the Milestone has been started. |
| `started_at` | `str` | The time/date the Milestone was started. |
| `started_at_override` | `str` | A manual override for the time/date the Milestone was started. |
| `state` | `str` | The workflow state that the Milestone is in. |
| `stats` | `dict` | A group of calculated values for this Milestone. |
| `updated_at` | `str` | The time/date the Milestone was updated. |

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

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


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
| `after_id` | `int` | The ID of the Objective we want to move this Objective after. |
| `app_url` | `str` | The Shortcut application url for the Objective. |
| `archived` | `bool` | A boolean indicating whether the Objective has been archived or not. |
| `before_id` | `int` | The ID of the Objective we want to move this Objective before. |
| `categories` | `list` | An array of Categories attached to the Objective. |
| `completed` | `bool` | A true/false boolean indicating if the Objectivehas been completed. |
| `completed_at` | `str` | The time/date the Objective was completed. |
| `completed_at_override` | `str` | A manual override for the time/date the Objective was completed. |
| `created_at` | `str` | The time/date the Objective was created. |
| `description` | `str` | The Objective's description. |
| `entity_type` | `str` | A string description of this resource. |
| `global_id` | `str` |  |
| `id` | `int` | The unique ID of the Objective. |
| `key_result_ids` | `list` | The IDs of the Key Results associated with the Objective. |
| `name` | `str` | The name of the Objective. |
| `position` | `int` | A number representing the position of the Objective in relation to every other Objective within the Workspace. |
| `started` | `bool` | A true/false boolean indicating if the Objective has been started. |
| `started_at` | `str` | The time/date the Objective was started. |
| `started_at_override` | `str` | A manual override for the time/date the Objective was started. |
| `state` | `str` | The workflow state that the Objective is in. |
| `stats` | `dict` | A group of calculated values for this Objective. |
| `updated_at` | `str` | The time/date the Objective was updated. |

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
| `abbreviation` | `str` | The Project abbreviation used in Story summaries. |
| `app_url` | `str` | The Shortcut application url for the Project. |
| `archived` | `bool` | True/false boolean indicating whether the Project is in an Archived state. |
| `color` | `str` | The color associated with the Project in the Shortcut member interface. |
| `created_at` | `str` | The time/date that the Project was created. |
| `days_to_thermometer` | `int` | The number of days before the thermometer appears in the Story summary. |
| `description` | `str` | The description of the Project. |
| `entity_type` | `str` | A string description of this resource. |
| `external_id` | `str` | This field can be set to another unique ID. |
| `follower_ids` | `list` | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `str` | The Global ID of the Project. |
| `id` | `int` | The unique ID of the Project. |
| `iteration_length` | `int` | The number of weeks per iteration in this Project. |
| `name` | `str` | The name of the Project |
| `show_thermometer` | `bool` | Configuration to enable or disable thermometers in the Story summary. |
| `start_time` | `str` | The date at which the Project was started. |
| `stats` | `dict` | A group of calculated values for this Project. |
| `team_id` | `int` | The ID of the team the project belongs to. |
| `updated_at` | `str` | The time/date that the Project was last updated. |
| `workflow_id` | `int` | The ID of the workflow the project belongs to. |

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
| `created_at` | `str` | The time/date the Repository was created. |
| `entity_type` | `str` | A string description of this resource. |
| `external_id` | `str` | The VCS unique identifier for the Repository. |
| `full_name` | `str` | The full name of the VCS repository. |
| `id` | `int` | The ID associated to the VCS repository in Shortcut. |
| `name` | `str` | The shorthand name of the VCS repository. |
| `type` | `str` | The VCS provider for the Repository. |
| `updated_at` | `str` | The time/date the Repository was updated. |
| `url` | `str` | The URL of the Repository. |

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
| `epics` | `dict` | The results of the Epic search query. |
| `iterations` | `dict` | The results of the Iteration search query. |
| `milestones` | `dict` | The results of the Objective search query. |
| `stories` | `dict` | The results of the Story search query. |

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
| `after_id` | `int` | The ID of the story we want to move this story after. |
| `app_url` | `str` | The Shortcut application url for the Story. |
| `archived` | `bool` | True if the story has been archived or not. |
| `before_id` | `int` | The ID of the story we want to move this story before. |
| `blocked` | `bool` | A true/false boolean indicating if the Story is currently blocked. |
| `blocker` | `bool` | A true/false boolean indicating if the Story is currently a blocker of another story. |
| `branch_ids` | `list` | An array of IDs of Branches attached to the story. |
| `branches` | `list` | An array of Git branches attached to the story. |
| `comment_ids` | `list` | An array of IDs of Comments attached to the story. |
| `comments` | `list` | An array of comments attached to the story. |
| `commit_ids` | `list` | An array of IDs of Commits attached to the story. |
| `commits` | `list` | An array of commits attached to the story. |
| `completed` | `bool` | A true/false boolean indicating if the Story has been completed. |
| `completed_at` | `str` | The time/date the Story was completed. |
| `completed_at_override` | `str` | A manual override for the time/date the Story was completed. |
| `created_at` | `str` | The time/date the Story was created. |
| `custom_fields` | `list` | An array of CustomField value assertions for the story. |
| `custom_fields_add` | `list` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `list` | A map specifying a CustomField ID. |
| `cycle_time` | `int` | The cycle time (in seconds) of this story when complete. |
| `deadline` | `str` | The due date of the story. |
| `description` | `str` | The description of the story. |
| `entity_type` | `str` | A string description of this resource. |
| `epic_id` | `int` | The ID of the epic the story belongs to. |
| `estimate` | `int` | The numeric point estimate of the story. |
| `external_id` | `str` | This field can be set to another unique ID. |
| `external_links` | `list` | An array of external links (strings) associated with a Story |
| `external_links_add` | `list` | An array of External Links associated with this story. |
| `external_links_remove` | `list` | An array of External Links associated with this story. |
| `file_ids` | `list` | An array of IDs of files attached to the story. |
| `file_ids_add` | `list` | An array of IDs of files attached to the story in addition to files from the template. |
| `file_ids_remove` | `list` | An array of IDs of files removed from files from the template. |
| `files` | `list` | An array of files attached to the story. |
| `follower_ids` | `list` | An array of UUIDs for any Members listed as Followers. |
| `follower_ids_add` | `list` | The UUIDs of the new followers to be added in addition to followers from the template. |
| `follower_ids_remove` | `list` | The UUIDs of the new followers to be removed from followers from the template. |
| `formatted_vcs_branch_name` | `str` | The formatted branch name for this story. |
| `global_id` | `str` |  |
| `group_id` | `str` | The ID of the group associated with the story. |
| `group_mention_ids` | `list` | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `int` | The unique ID of the Story. |
| `iteration_id` | `int` | The ID of the iteration the story belongs to. |
| `label_ids` | `list` | An array of label ids attached to the story. |
| `labels` | `list` | An array of labels attached to the story. |
| `labels_add` | `list` | An array of labels attached to the story in addition to the labels provided by the template. |
| `labels_remove` | `list` | An array of labels to remove from the labels provided by the template. |
| `lead_time` | `int` | The lead time (in seconds) of this story when complete. |
| `linked_file_ids` | `list` | An array of IDs of linked files attached to the story. |
| `linked_file_ids_add` | `list` | An array of IDs of linked files attached to the story in addition to files from the template. |
| `linked_file_ids_remove` | `list` | An array of IDs of linked files removed from files from the template. |
| `linked_files` | `list` | An array of linked files attached to the story. |
| `member_mention_ids` | `list` | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `list` | `Deprecated:` use `member_mention_ids`. |
| `move_to` | `str` | One of "first" or "last". |
| `moved_at` | `str` | The time/date the Story was last changed workflow-state. |
| `name` | `str` | The name of the story. |
| `num_tasks_completed` | `int` | The number of tasks on the story which are complete. |
| `owner_ids` | `list` | An array of UUIDs of the owners of this story. |
| `owner_ids_add` | `list` | The UUIDs of the new owners to be added in addition to owners from the template. |
| `owner_ids_remove` | `list` | The UUIDs of the new owners to be removed from owners from the template. |
| `parent_story_id` | `int` | The id of the parent story to associate with this story. |
| `position` | `int` | A number representing the position of the story in relation to every other story in the current project. |
| `previous_iteration_ids` | `list` | The IDs of the iteration the story belongs to. |
| `project_id` | `int` | The ID of the project the story belongs to. |
| `pull_request_ids` | `list` | An array of IDs of Pull/Merge Requests attached to the story. |
| `pull_requests` | `list` | An array of Pull/Merge Requests attached to the story. |
| `requested_by_id` | `str` | The ID of the Member that requested the story. |
| `source_task_id` | `int` | Given this story was converted from a task in another story, this is the original task ID that was converted to this story. |
| `started` | `bool` | A true/false boolean indicating if the Story has been started. |
| `started_at` | `str` | The time/date the Story was started. |
| `started_at_override` | `str` | A manual override for the time/date the Story was started. |
| `stats` | `dict` | The stats object for Stories |
| `story_links` | `list` | An array of story links attached to the Story. |
| `story_template_id` | `str` | The ID of the story template used to create this story, or null if not created using a template. |
| `story_type` | `str` | The type of story (feature, bug, chore). |
| `sub_task_story_ids` | `list` |  |
| `sub_tasks` | `list` | A list of either params to create a new sub-task or link an existing story as a sub-task |
| `synced_item` | `dict` | The synced item for the story. |
| `task_ids` | `list` | An array of IDs of Tasks attached to the story. |
| `tasks` | `list` | An array of tasks connected to the story. |
| `updated_at` | `str` | The time/date the Story was updated. |
| `workflow_id` | `int` | The ID of the workflow the story belongs to. |
| `workflow_state_id` | `int` | The ID of the workflow state the story is currently in. |

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
| `app_url` | `str` | The Shortcut application url for the Comment. |
| `author_id` | `str` | The unique ID of the Member who is the Comment's author. |
| `blocker` | `bool` | Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment. |
| `created_at` | `str` | The time/date when the Comment was created. |
| `deleted` | `bool` | True/false boolean indicating whether the Comment has been deleted. |
| `entity_type` | `str` | A string description of this resource. |
| `external_id` | `str` | This field can be set to another unique ID. |
| `group_mention_ids` | `list` | The unique IDs of the Group who are mentioned in the Comment. |
| `id` | `int` | The unique ID of the Comment. |
| `linked_to_slack` | `bool` | Whether the Comment is currently the root of a thread that is linked to Slack. |
| `member_mention_ids` | `list` | The unique IDs of the Member who are mentioned in the Comment. |
| `mention_ids` | `list` | `Deprecated:` use `member_mention_ids`. |
| `parent_id` | `int` | The ID of the parent Comment this Comment is threaded under. |
| `position` | `int` | The Comments numerical position in the list from oldest to newest. |
| `reactions` | `list` | A set of Reactions to this Comment. |
| `story_id` | `int` | The ID of the Story on which the Comment appears. |
| `text` | `str` | The text of the Comment. |
| `unblocks_parent` | `bool` | Marks the comment as an unblocker to its blocker parent. |
| `updated_at` | `str` | The time/date when the Comment was updated. |

#### Example: Load

```python
story_comment = client.StoryComment().load({"id": 1, "story_id": 1})
```

#### Example: List

```python
story_comments = client.StoryComment().list({"id": 1})
```

#### Example: Create

```python
story_comment = client.StoryComment().create({
    "id": 1,  # int
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
    "story_id": 1,  # int
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
| `created_at` | `str` | The time/date when the Story Link was created. |
| `entity_type` | `str` | A string description of this resource. |
| `id` | `int` | The unique identifier of the Story Link. |
| `object_id` | `int` | The ID of the object Story. |
| `subject_id` | `int` | The ID of the subject Story. |
| `subject_workflow_state_id` | `int` | The workflow state of the "subject" story. |
| `updated_at` | `str` | The time/date when the Story Link was last updated. |
| `verb` | `str` | How the subject Story acts on the object Story. |

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
| `emoji` | `str` | The emoji short-code to add / remove. |

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
| `after_id` | `int` | The ID of the story that the stories are to be moved below. |
| `archived` | `bool` | A true/false boolean indicating whether the Story is in archived state. |
| `before_id` | `int` | The ID of the story that the stories are to be moved before. |
| `completed_at_end` | `str` | Stories should have been completed on or before this date. |
| `completed_at_start` | `str` | Stories should have been completed on or after this date. |
| `created_at_end` | `str` | Stories should have been created on or before this date. |
| `created_at_start` | `str` | Stories should have been created on or after this date. |
| `custom_fields_add` | `list` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `list` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `str` | The due date of the story. |
| `deadline_end` | `str` | Stories should have a deadline on or before this date. |
| `deadline_start` | `str` | Stories should have a deadline on or after this date. |
| `epic_id` | `int` | The Epic IDs that may be associated with the Stories. |
| `epic_ids` | `list` | The Epic IDs that may be associated with the Stories. |
| `estimate` | `int` | The number of estimate points associate with the Stories. |
| `external_id` | `str` | An ID or URL that references an external resource. |
| `external_links` | `list` | An array of External Links associated with this story. |
| `follower_ids_add` | `list` | The UUIDs of the new followers to be added. |
| `follower_ids_remove` | `list` | The UUIDs of the followers to be removed. |
| `group_id` | `str` | The Group ID that is associated with the Stories |
| `group_ids` | `list` | The Group IDs that are associated with the Stories |
| `includes_description` | `bool` | Whether to include the story description in the response. |
| `iteration_id` | `int` | The Iteration ID that may be associated with the Stories. |
| `iteration_ids` | `list` | The Iteration IDs that may be associated with the Stories. |
| `label_ids` | `list` | The Label IDs that may be associated with the Stories. |
| `label_name` | `str` | The name of any associated Labels. |
| `labels_add` | `list` | An array of labels to be added. |
| `labels_remove` | `list` | An array of labels to be removed. |
| `move_to` | `str` | One of "first" or "last". |
| `owner_id` | `str` | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids` | `list` | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids_add` | `list` | The UUIDs of the new owners to be added. |
| `owner_ids_remove` | `list` | The UUIDs of the owners to be removed. |
| `project_id` | `int` | The IDs for the Projects the Stories may be assigned to. |
| `project_ids` | `list` | The IDs for the Projects the Stories may be assigned to. |
| `requested_by_id` | `str` | The UUID of any Users who may have requested the Stories. |
| `stories` | `list` | An array of stories to be created. |
| `story_ids` | `list` | The Ids of the Stories you wish to update. |
| `story_type` | `str` | The type of Stories that you want returned. |
| `updated_at_end` | `str` | Stories should have been updated on or before this date. |
| `updated_at_start` | `str` | Stories should have been updated on or after this date. |
| `workflow_state_id` | `int` | The unique IDs of the specific Workflow States that the Stories should be in. |
| `workflow_state_types` | `list` | The type of Workflow State the Stories may be in. |

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
| `after_id` | `int` | Move task after this task ID. |
| `before_id` | `int` | Move task before this task ID. |
| `complete` | `bool` | True/false boolean indicating whether the Task has been completed. |
| `completed_at` | `str` | The time/date the Task was completed. |
| `created_at` | `str` | The time/date the Task was created. |
| `description` | `str` | Full text of the Task. |
| `entity_type` | `str` | A string description of this resource. |
| `external_id` | `str` | This field can be set to another unique ID. |
| `global_id` | `str` |  |
| `group_mention_ids` | `list` | An array of UUIDs of Groups mentioned in this Task. |
| `id` | `int` | The unique ID of the Task. |
| `member_mention_ids` | `list` | An array of UUIDs of Members mentioned in this Task. |
| `mention_ids` | `list` | `Deprecated:` use `member_mention_ids`. |
| `owner_ids` | `list` | An array of UUIDs of the Owners of this Task. |
| `position` | `int` | The number corresponding to the Task's position within a list of Tasks on a Story. |
| `story_id` | `int` | The unique identifier of the parent Story. |
| `updated_at` | `str` | The time/date the Task was updated. |

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
| `app_url` | `str` | The Shortcut application url for the Comment. |
| `author_id` | `str` | The unique ID of the Member that authored the Comment. |
| `comments` | `list` | A nested array of threaded comments. |
| `created_at` | `str` | The time/date the Comment was created. |
| `deleted` | `bool` | True/false boolean indicating whether the Comment is deleted. |
| `entity_type` | `str` | A string description of this resource. |
| `external_id` | `str` | This field can be set to another unique ID. |
| `group_mention_ids` | `list` | An array of Group IDs that have been mentioned in this Comment. |
| `id` | `int` | The unique ID of the Comment. |
| `member_mention_ids` | `list` | An array of Member IDs that have been mentioned in this Comment. |
| `mention_ids` | `list` | `Deprecated:` use `member_mention_ids`. |
| `text` | `str` | The text of the Comment. |
| `updated_at` | `str` | The time/date the Comment was updated. |

#### Example: Load

```python
threaded_comment = client.ThreadedComment().load({"id": 1, "epic_id": 1})
```

#### Example: List

```python
threaded_comments = client.ThreadedComment().list({"epic_id": 1})
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
| `content_type` | `str` | Free form string corresponding to a text or image file. |
| `created_at` | `str` | The time/date that the file was created. |
| `description` | `str` | The description of the file. |
| `entity_type` | `str` | A string description of this resource. |
| `external_id` | `str` | This field can be set to another unique ID. |
| `filename` | `str` | The name assigned to the file in Shortcut upon upload. |
| `group_mention_ids` | `list` | The unique IDs of the Groups who are mentioned in the file description. |
| `id` | `int` | The unique ID for the file. |
| `member_mention_ids` | `list` | The unique IDs of the Members who are mentioned in the file description. |
| `mention_ids` | `list` | `Deprecated:` use `member_mention_ids`. |
| `name` | `str` | The optional User-specified name of the file. |
| `size` | `int` | The size of the file. |
| `story_ids` | `list` | The unique IDs of the Stories associated with this file. |
| `thumbnail_url` | `str` | The url where the thumbnail of the file can be found in Shortcut. |
| `updated_at` | `str` | The time/date that the file was updated. |
| `uploader_id` | `str` | The unique ID of the Member who uploaded the file. |
| `url` | `str` | The URL for the file. |

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
| `id` | `str` |  |
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
| `auto_assign_owner` | `bool` | Indicates if an owner is automatically assigned when an unowned story is started. |
| `created_at` | `str` | The date the Workflow was created. |
| `default_state_id` | `int` | The unique ID of the default state that new Stories are entered into. |
| `description` | `str` | A description of the workflow. |
| `entity_type` | `str` | A string description of this resource. |
| `id` | `int` | The unique ID of the Workflow. |
| `name` | `str` | The name of the workflow. |
| `project_ids` | `list` | An array of IDs of projects within the Workflow. |
| `states` | `list` | A map of the states in this Workflow. |
| `team_id` | `int` | The ID of the team the workflow belongs to. |
| `updated_at` | `str` | The date the Workflow was updated. |

#### Example: Load

```python
workflow = client.Workflow().load({"id": 1})
```

#### Example: List

```python
workflows = client.Workflow().list()
```


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

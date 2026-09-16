# Shortcut Python SDK Reference

Complete API reference for the Shortcut Python SDK.


## ShortcutSDK

### Constructor

```python
from shortcut_sdk import ShortcutSDK

client = ShortcutSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ShortcutSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = ShortcutSDK.test()
```


### Instance Methods

#### `Bulk(data=None)`

Create a new `BulkEntity` instance. Pass `None` for no initial data.

#### `Category(data=None)`

Create a new `CategoryEntity` instance. Pass `None` for no initial data.

#### `Comment(data=None)`

Create a new `CommentEntity` instance. Pass `None` for no initial data.

#### `CustomField(data=None)`

Create a new `CustomFieldEntity` instance. Pass `None` for no initial data.

#### `Disable(data=None)`

Create a new `DisableEntity` instance. Pass `None` for no initial data.

#### `DocSlim(data=None)`

Create a new `DocSlimEntity` instance. Pass `None` for no initial data.

#### `Enable(data=None)`

Create a new `EnableEntity` instance. Pass `None` for no initial data.

#### `EntityTemplate(data=None)`

Create a new `EntityTemplateEntity` instance. Pass `None` for no initial data.

#### `Epic(data=None)`

Create a new `EpicEntity` instance. Pass `None` for no initial data.

#### `EpicPaginatedResult(data=None)`

Create a new `EpicPaginatedResultEntity` instance. Pass `None` for no initial data.

#### `EpicUnlinkProductboard(data=None)`

Create a new `EpicUnlinkProductboardEntity` instance. Pass `None` for no initial data.

#### `EpicWorkflow(data=None)`

Create a new `EpicWorkflowEntity` instance. Pass `None` for no initial data.

#### `Group(data=None)`

Create a new `GroupEntity` instance. Pass `None` for no initial data.

#### `Health(data=None)`

Create a new `HealthEntity` instance. Pass `None` for no initial data.

#### `History(data=None)`

Create a new `HistoryEntity` instance. Pass `None` for no initial data.

#### `Iteration(data=None)`

Create a new `IterationEntity` instance. Pass `None` for no initial data.

#### `KeyResult(data=None)`

Create a new `KeyResultEntity` instance. Pass `None` for no initial data.

#### `Label(data=None)`

Create a new `LabelEntity` instance. Pass `None` for no initial data.

#### `LinkedFile(data=None)`

Create a new `LinkedFileEntity` instance. Pass `None` for no initial data.

#### `Member(data=None)`

Create a new `MemberEntity` instance. Pass `None` for no initial data.

#### `Milestone(data=None)`

Create a new `MilestoneEntity` instance. Pass `None` for no initial data.

#### `Objectif(data=None)`

Create a new `ObjectifEntity` instance. Pass `None` for no initial data.

#### `Objective(data=None)`

Create a new `ObjectiveEntity` instance. Pass `None` for no initial data.

#### `Project(data=None)`

Create a new `ProjectEntity` instance. Pass `None` for no initial data.

#### `Repository(data=None)`

Create a new `RepositoryEntity` instance. Pass `None` for no initial data.

#### `Search(data=None)`

Create a new `SearchEntity` instance. Pass `None` for no initial data.

#### `Story(data=None)`

Create a new `StoryEntity` instance. Pass `None` for no initial data.

#### `StoryComment(data=None)`

Create a new `StoryCommentEntity` instance. Pass `None` for no initial data.

#### `StoryLink(data=None)`

Create a new `StoryLinkEntity` instance. Pass `None` for no initial data.

#### `StoryReaction(data=None)`

Create a new `StoryReactionEntity` instance. Pass `None` for no initial data.

#### `StorySlim(data=None)`

Create a new `StorySlimEntity` instance. Pass `None` for no initial data.

#### `Task(data=None)`

Create a new `TaskEntity` instance. Pass `None` for no initial data.

#### `ThreadedComment(data=None)`

Create a new `ThreadedCommentEntity` instance. Pass `None` for no initial data.

#### `UploadedFile(data=None)`

Create a new `UploadedFileEntity` instance. Pass `None` for no initial data.

#### `Webhook(data=None)`

Create a new `WebhookEntity` instance. Pass `None` for no initial data.

#### `Workflow(data=None)`

Create a new `WorkflowEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## BulkEntity

```python
bulk = client.Bulk()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Bulk().remove()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CategoryEntity

```python
category = client.Category()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | A true/false boolean indicating if the Category has been archived. |
| `color` | `str` | Yes | The hex color to be displayed with the Category (for example, "#ff0000"). |
| `created_at` | `str` | Yes | The time/date that the Category was created. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `external_id` | `str` | Yes | This field can be set to another unique ID. |
| `global_id` | `str` | Yes | The Global ID of the Category. |
| `id` | `int` | Yes | The unique ID of the Category. |
| `name` | `str` | Yes | The name of the Category. |
| `type` | `str` | Yes | The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category. |
| `updated_at` | `str` | Yes | The time/date that the Category was updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Category().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Category().list()
for category in results:
    print(category)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Category().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Category().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Category().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CategoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CommentEntity

```python
comment = client.Comment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Comment().remove({"id": 1, "story_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomFieldEntity

```python
custom_field = client.CustomField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `str` | No | The ID of the CustomField we want to move this CustomField after. |
| `before_id` | `str` | No | The ID of the CustomField we want to move this CustomField before. |
| `canonical_name` | `str` | No | The canonical name for a Shortcut-defined field. |
| `created_at` | `str` | Yes | The instant when this CustomField was created. |
| `description` | `str` | No | A string description of the CustomField |
| `enabled` | `bool` | Yes | When true, the CustomField can be applied to entities in the Workspace. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `field_type` | `str` | Yes | The type of Custom Field, eg. |
| `fixed_position` | `bool` | No | When true, the CustomFieldEnumValues may not be reordered. |
| `icon_set_identifier` | `str` | No | A string that represents the icon that corresponds to this custom field. |
| `id` | `str` | Yes | The unique public ID for the CustomField. |
| `name` | `str` | Yes | The name of the Custom Field. |
| `position` | `int` | Yes | An integer indicating the position of this Custom Field with respect to the other CustomField |
| `story_types` | `list` | No | The types of stories this CustomField is scoped to. |
| `updated_at` | `str` | Yes | The instant when this CustomField was last updated. |
| `values` | `list` | No | A collection of legal values for a CustomField. |

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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CustomField().list()
for custom_field in results:
    print(custom_field)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomField().load({"id": "custom_field_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CustomField().remove({"id": "custom_field_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CustomField().update({
    "id": "custom_field_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomFieldEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DisableEntity

```python
disable = client.Disable()
```

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Disable().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DisableEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DocSlimEntity

```python
doc_slim = client.DocSlim()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `str` | Yes | The Shortcut application url for the Doc. |
| `content` | `str` | Yes | The content for the new document |
| `id` | `str` | Yes | The public id of the Doc |
| `title` | `str` | Yes | The title for the new document |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DocSlim().create({
    "app_url": "example_app_url",  # str
    "content": "example_content",  # str
    "id": "example_id",  # str
    "title": "example_title",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DocSlim().list()
for doc_slim in results:
    print(doc_slim)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DocSlimEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnableEntity

```python
enable = client.Enable()
```

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Enable().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnableEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EntityTemplateEntity

```python
entity_template = client.EntityTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `str` | No | The id of the user creating this template. |
| `created_at` | `str` | Yes | The time/date when the entity template was created. |
| `custom_fields` | `list` | No | An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `str` | No | The due date of the story. |
| `description` | `str` | No | The description of the story. |
| `entity_type` | `str` | No | A string description of this resource. |
| `epic_id` | `int` | No | The ID of the epic the story belongs to. |
| `estimate` | `int` | No | The numeric point estimate of the story. |
| `external_links` | `list` | No | An array of external links connected to the story. |
| `files` | `list` | No | An array of files attached to the story. |
| `follower_ids` | `list` | No | An array of UUIDs for any Members listed as Followers. |
| `group_id` | `str` | No | The ID of the group to which the story is assigned. |
| `id` | `str` | Yes | The unique identifier for the entity template. |
| `iteration_id` | `int` | No | The ID of the iteration the story belongs to. |
| `label_ids` | `list` | No | An array of label ids attached to the story. |
| `labels` | `list` | No | An array of labels attached to the story. |
| `last_used_at` | `str` | Yes | The last time that someone created an entity using this template. |
| `linked_files` | `list` | No | An array of linked files attached to the story. |
| `name` | `str` | No | The name of the story. |
| `owner_ids` | `list` | No | An array of UUIDs of the owners of this story. |
| `project_id` | `int` | No | The ID of the project the story belongs to. |
| `story_contents` | `dict` | Yes | A map of story attributes this template populates. |
| `story_type` | `str` | No | The type of story (feature, bug, chore). |
| `sub_tasks` | `list` | No | An array of sub-tasks connected to the story |
| `tasks` | `list` | No | An array of tasks connected to the story. |
| `updated_at` | `str` | Yes | The time/date when the entity template was last updated. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EntityTemplate().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "last_used_at": "example_last_used_at",  # str
    "story_contents": {},  # dict
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EntityTemplate().list()
for entity_template in results:
    print(entity_template)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EntityTemplate().load({"id": "entity_template_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.EntityTemplate().remove({"id": "entity_template_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.EntityTemplate().update({
    "id": "entity_template_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EntityTemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EpicEntity

```python
epic = client.Epic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `int` | No | The ID of the Epic we want to move this Epic after. |
| `app_url` | `str` | Yes | The Shortcut application url for the Epic. |
| `archived` | `bool` | Yes | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `list` | Yes | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `before_id` | `int` | No | The ID of the Epic we want to move this Epic before. |
| `comments` | `list` | Yes | A nested array of threaded comments. |
| `completed` | `bool` | Yes | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | `str` | Yes | The time/date the Epic was completed. |
| `completed_at_override` | `str` | Yes | A manual override for the time/date the Epic was completed. |
| `converted_from_story_id` | `int` | No | The ID of the Story that was converted to an Epic. |
| `created_at` | `str` | Yes | The time/date the Epic was created. |
| `deadline` | `str` | Yes | The Epic's deadline. |
| `description` | `str` | Yes | The Epic's description. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `epic_state_id` | `int` | Yes | The ID of the Epic State. |
| `external_id` | `str` | Yes | This field can be set to another unique ID. |
| `follower_ids` | `list` | Yes | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `str` | Yes |  |
| `group_id` | `str` | Yes | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `list` | Yes | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `list` | Yes | An array of Group IDs that have been mentioned in the Epic description. |
| `health` | `dict` | Yes | The current health status of the Epic. |
| `id` | `int` | Yes | The unique ID of the Epic. |
| `label_ids` | `list` | Yes | An array of Label ids attached to the Epic. |
| `labels` | `list` | Yes | An array of Labels attached to the Epic. |
| `member_mention_ids` | `list` | Yes | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `list` | Yes | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `int` | Yes | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `str` | Yes | The name of the Epic. |
| `objective_ids` | `list` | Yes | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `list` | Yes | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `str` | Yes | The Epic's planned start date. |
| `position` | `int` | Yes | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `str` | Yes | The ID of the associated productboard feature. |
| `productboard_name` | `str` | Yes | The name of the associated productboard feature. |
| `productboard_plugin_id` | `str` | Yes | The ID of the associated productboard integration. |
| `productboard_url` | `str` | Yes | The URL of the associated productboard feature. |
| `project_ids` | `list` | Yes | The IDs of Projects related to this Epic. |
| `requested_by_id` | `str` | Yes | The ID of the Member that requested the epic. |
| `started` | `bool` | Yes | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `str` | Yes | The time/date the Epic was started. |
| `started_at_override` | `str` | Yes | A manual override for the time/date the Epic was started. |
| `state` | `str` | Yes | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `dict` | Yes | A group of calculated values for this Epic. |
| `stories_without_projects` | `int` | Yes | The number of stories in this epic which are not associated with a project. |
| `updated_at` | `str` | Yes | The time/date the Epic was updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Epic().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Epic().list()
for epic in results:
    print(epic)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Epic().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Epic().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Epic().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EpicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EpicPaginatedResultEntity

```python
epic_paginated_result = client.EpicPaginatedResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `str` | Yes | The Shortcut application url for the Epic. |
| `archived` | `bool` | Yes | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `list` | Yes | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `completed` | `bool` | Yes | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | `str` | Yes | The time/date the Epic was completed. |
| `completed_at_override` | `str` | Yes | A manual override for the time/date the Epic was completed. |
| `created_at` | `str` | Yes | The time/date the Epic was created. |
| `deadline` | `str` | Yes | The Epic's deadline. |
| `description` | `str` | No | The Epic's description. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `epic_state_id` | `int` | Yes | The ID of the Epic State. |
| `external_id` | `str` | Yes | This field can be set to another unique ID. |
| `follower_ids` | `list` | Yes | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `str` | Yes |  |
| `group_id` | `str` | Yes | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `list` | Yes | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `list` | Yes | An array of Group IDs that have been mentioned in the Epic description. |
| `id` | `int` | Yes | The unique ID of the Epic. |
| `label_ids` | `list` | Yes | An array of Label ids attached to the Epic. |
| `labels` | `list` | Yes | An array of Labels attached to the Epic. |
| `member_mention_ids` | `list` | Yes | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `list` | Yes | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `int` | Yes | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `str` | Yes | The name of the Epic. |
| `objective_ids` | `list` | Yes | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `list` | Yes | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `str` | Yes | The Epic's planned start date. |
| `position` | `int` | Yes | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `str` | Yes | The ID of the associated productboard feature. |
| `productboard_name` | `str` | Yes | The name of the associated productboard feature. |
| `productboard_plugin_id` | `str` | Yes | The ID of the associated productboard integration. |
| `productboard_url` | `str` | Yes | The URL of the associated productboard feature. |
| `project_ids` | `list` | Yes | The IDs of Projects related to this Epic. |
| `requested_by_id` | `str` | Yes | The ID of the Member that requested the epic. |
| `started` | `bool` | Yes | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `str` | Yes | The time/date the Epic was started. |
| `started_at_override` | `str` | Yes | A manual override for the time/date the Epic was started. |
| `state` | `str` | Yes | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `dict` | Yes | A group of calculated values for this Epic. |
| `stories_without_projects` | `int` | Yes | The number of stories in this epic which are not associated with a project. |
| `updated_at` | `str` | Yes | The time/date the Epic was updated. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EpicPaginatedResult().list()
for epic_paginated_result in results:
    print(epic_paginated_result)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EpicPaginatedResultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EpicUnlinkProductboardEntity

```python
epic_unlink_productboard = client.EpicUnlinkProductboard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EpicUnlinkProductboard().create({
    "id": 1,  # int
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EpicUnlinkProductboardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EpicWorkflowEntity

```python
epic_workflow = client.EpicWorkflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `color` | `str` | No | The hex color for this Epic State. |
| `created_at` | `str` | Yes | The time/date the Epic State was created. |
| `description` | `str` | Yes | The description of what sort of Epics belong in that Epic State. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `global_id` | `str` | Yes |  |
| `id` | `int` | Yes | The unique ID of the Epic State. |
| `name` | `str` | Yes | The Epic State's name. |
| `position` | `int` | Yes | The position that the Epic State is in, starting with 0 at the left. |
| `type` | `str` | Yes | The type of Epic State (Unstarted, Started, or Done) |
| `updated_at` | `str` | Yes | When the Epic State was last updated. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EpicWorkflow().list()
for epic_workflow in results:
    print(epic_workflow)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EpicWorkflowEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GroupEntity

```python
group = client.Group()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `str` | Yes | The Shortcut application url for the Group. |
| `archived` | `bool` | Yes | Whether or not the Group is archived. |
| `color` | `str` | Yes | The hex color to be displayed with the Group (for example, "#ff0000"). |
| `color_key` | `str` | Yes | The color key to be displayed with the Group. |
| `created_at` | `str` | Yes | The instant when this group was created. |
| `default_workflow_id` | `int` | No | The ID of the default workflow for stories created in this group. |
| `description` | `str` | Yes | The description of the Group. |
| `display_icon` | `dict` | Yes | Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application. |
| `display_icon_id` | `str` | No | The Icon id for the avatar of this Group. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `global_id` | `str` | Yes |  |
| `id` | `str` | Yes | The id of the Group. |
| `member_ids` | `list` | Yes | The Member IDs contain within the Group. |
| `mention_name` | `str` | Yes | The mention name of the Group. |
| `name` | `str` | Yes | The name of the Group. |
| `num_epics_started` | `int` | Yes | The number of epics assigned to the group which are in the started workflow state. |
| `num_stories` | `int` | Yes | The total number of stories assigned to the group. |
| `num_stories_backlog` | `int` | Yes | The number of stories assigned to the group which are in a backlog workflow state. |
| `num_stories_started` | `int` | Yes | The number of stories assigned to the group which are in a started workflow state. |
| `updated_at` | `str` | Yes | The last instant when this group was updated. |
| `workflow_ids` | `list` | Yes | The Workflow IDs contained within the Group. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Group().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Group().list()
for group in results:
    print(group)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Group().load({"id": "group_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Group().update({
    "id": "group_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HealthEntity

```python
health = client.Health()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_id` | `str` | No | The ID of the permission who created or updated the Health record. |
| `created_at` | `str` | No | The time that the Health record was created. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `epic_id` | `int` | No | The ID of the Epic associated with this Health record. |
| `id` | `str` | Yes | The unique ID of the Health record. |
| `objective_id` | `int` | No | The ID of the Objective associated with this Health record. |
| `status` | `str` | Yes | The health status of the Epic or Objective. |
| `text` | `str` | No | The text of the Health record. |
| `updated_at` | `str` | No | The time that the Health record was updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Health().create({
    "epic_id": 1,  # int
    "entity_type": "example_entity_type",  # str
    "id": "example_id",  # str
    "status": "example_status",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Health().list({"epic_id": 1})
for health in results:
    print(health)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Health().load({"epic_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Health().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HealthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HistoryEntity

```python
history = client.History()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `list` | Yes | An array of actions that were performed for the change. |
| `actor_name` | `str` | No | The name of the actor that performed the action, if it can be determined. |
| `automation_id` | `str` | No | The ID of the automation that performed the change. |
| `changed_at` | `str` | Yes | The date when the change occurred. |
| `external_id` | `str` | No | The ID of the webhook that handled the change. |
| `id` | `str` | Yes | The ID representing the change for the story. |
| `member_id` | `str` | No | The ID of the member who performed the change. |
| `primary_id` | `str` | No | The ID of the primary entity that has changed, if applicable. |
| `references` | `list` | No | An array of objects affected by the change. |
| `version` | `str` | Yes | The version of the change format. |
| `webhook_id` | `str` | No | The ID of the webhook that handled the change. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.History().list({"story_id": 1})
for history in results:
    print(history)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HistoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IterationEntity

```python
iteration = client.Iteration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `str` | Yes | The Shortcut application url for the Iteration. |
| `associated_groups` | `list` | Yes | An array containing Group IDs and Group-owned story counts for the Iteration's associated groups. |
| `created_at` | `str` | Yes | The instant when this iteration was created. |
| `description` | `str` | Yes | The description of the iteration. |
| `end_date` | `str` | Yes | The date this iteration ends. |
| `entity_type` | `str` | Yes | A string description of this resource |
| `follower_ids` | `list` | Yes | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `str` | Yes |  |
| `group_ids` | `list` | Yes | An array of UUIDs for any Groups you want to add as Followers. |
| `group_mention_ids` | `list` | Yes | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `int` | Yes | The ID of the iteration. |
| `label_ids` | `list` | Yes | An array of label ids attached to the iteration. |
| `labels` | `list` | Yes | An array of labels attached to the iteration. |
| `member_mention_ids` | `list` | Yes | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `list` | Yes | `Deprecated:` use `member_mention_ids`. |
| `name` | `str` | Yes | The name of the iteration. |
| `start_date` | `str` | Yes | The date this iteration begins. |
| `stats` | `dict` | Yes | A group of calculated values for this Iteration. |
| `status` | `str` | Yes | The status of the iteration. |
| `updated_at` | `str` | Yes | The instant when this iteration was last updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Iteration().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Iteration().list()
for iteration in results:
    print(iteration)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Iteration().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Iteration().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Iteration().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IterationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## KeyResultEntity

```python
key_result = client.KeyResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_observed_value` | `dict` | Yes | The starting value of the Key Result. |
| `current_target_value` | `dict` | Yes | The starting value of the Key Result. |
| `id` | `str` | Yes | The ID of the Key Result. |
| `initial_observed_value` | `dict` | Yes | The starting value of the Key Result. |
| `name` | `str` | Yes | The name of the Key Result. |
| `objective_id` | `int` | Yes | The Objective to which this Key Result belongs. |
| `observed_value` | `dict` | No | The starting value of the Key Result. |
| `progress` | `int` | Yes | The integer percentage of progress toward completion of the Key Result. |
| `target_value` | `dict` | No | The starting value of the Key Result. |
| `type` | `str` | Yes | The type of the Key Result (numeric, percent, or boolean). |

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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.KeyResult().load({"id": "key_result_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.KeyResult().update({
    "id": "key_result_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `KeyResultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LabelEntity

```python
label = client.Label()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `str` | Yes | The Shortcut application url for the Label. |
| `archived` | `bool` | No | A true/false boolean indicating if the Label has been archived. |
| `color` | `str` | No | The hex color to be displayed with the Label (for example, "#ff0000"). |
| `created_at` | `str` | Yes | The time/date that the Label was created. |
| `description` | `str` | No | The description of the new Label. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `external_id` | `str` | No | This field can be set to another unique ID. |
| `global_id` | `str` | Yes |  |
| `id` | `int` | Yes | The unique ID of the Label. |
| `name` | `str` | Yes | The name of the new Label. |
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
| `stats` | `dict` | Yes | A group of calculated values for this Label. |
| `updated_at` | `str` | Yes | The time/date that the Label was updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Label().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Label().list()
for label in results:
    print(label)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Label().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Label().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Label().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LabelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LinkedFileEntity

```python
linked_file = client.LinkedFile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `str` | Yes | The content type of the image (e.g. |
| `created_at` | `str` | Yes | The time/date the LinkedFile was created. |
| `description` | `str` | Yes | The description of the file. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `group_mention_ids` | `list` | Yes | The groups that are mentioned in the description of the file. |
| `id` | `int` | Yes | The unique identifier for the file. |
| `member_mention_ids` | `list` | Yes | The members that are mentioned in the description of the file. |
| `mention_ids` | `list` | Yes | `Deprecated:` use `member_mention_ids`. |
| `name` | `str` | Yes | The name of the linked file. |
| `size` | `int` | Yes | The filesize, if the integration provided it. |
| `story_id` | `int` | No | The ID of the linked story. |
| `story_ids` | `list` | Yes | The IDs of the stories this file is attached to. |
| `thumbnail_url` | `str` | Yes | The URL of the file thumbnail, if the integration provided it. |
| `type` | `str` | Yes | The integration type (e.g. |
| `updated_at` | `str` | Yes | The time/date the LinkedFile was updated. |
| `uploader_id` | `str` | Yes | The UUID of the member that uploaded the file. |
| `url` | `str` | Yes | The URL of the file. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LinkedFile().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LinkedFile().list()
for linked_file in results:
    print(linked_file)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.LinkedFile().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.LinkedFile().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.LinkedFile().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LinkedFileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MemberEntity

```python
member = client.Member()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | The time/date the Member was created. |
| `created_without_invite` | `bool` | Yes | Whether this member was created as a placeholder entity. |
| `disabled` | `bool` | Yes | True/false boolean indicating whether the Member has been disabled within the Workspace. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `global_id` | `str` | Yes |  |
| `group_ids` | `list` | Yes | The Member's group ids |
| `id` | `str` | Yes | The Member's ID in Shortcut. |
| `installation_id` | `str` | No | Only set for agents. |
| `is_owner` | `bool` | Yes |  |
| `mention_name` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `organization2` | `dict` | Yes |  |
| `profile` | `dict` | Yes | A group of Member profile details. |
| `replaced_by` | `str` | No | The id of the member that replaces this one when merged. |
| `role` | `str` | Yes | The Member's role in the Workspace. |
| `state` | `str` | Yes | The user state, one of partial, full, disabled, or imported. |
| `updated_at` | `str` | Yes | The time/date the Member was last updated. |
| `workspace2` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Member().list()
for member in results:
    print(member)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Member().load({"id": "member_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MilestoneEntity

```python
milestone = client.Milestone()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `int` | No | The ID of the Milestone we want to move this Milestone after. |
| `app_url` | `str` | Yes | The Shortcut application url for the Milestone. |
| `archived` | `bool` | Yes | A boolean indicating whether the Milestone has been archived or not. |
| `before_id` | `int` | No | The ID of the Milestone we want to move this Milestone before. |
| `categories` | `list` | Yes | An array of Categories attached to the Milestone. |
| `completed` | `bool` | Yes | A true/false boolean indicating if the Milestone has been completed. |
| `completed_at` | `str` | Yes | The time/date the Milestone was completed. |
| `completed_at_override` | `str` | Yes | A manual override for the time/date the Milestone was completed. |
| `created_at` | `str` | Yes | The time/date the Milestone was created. |
| `description` | `str` | Yes | The Milestone's description. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `global_id` | `str` | Yes |  |
| `id` | `int` | Yes | The unique ID of the Milestone. |
| `key_result_ids` | `list` | Yes | The IDs of the Key Results associated with the Objective. |
| `name` | `str` | Yes | The name of the Milestone. |
| `position` | `int` | Yes | A number representing the position of the Milestone in relation to every other Milestone within the Workspace. |
| `started` | `bool` | Yes | A true/false boolean indicating if the Milestone has been started. |
| `started_at` | `str` | Yes | The time/date the Milestone was started. |
| `started_at_override` | `str` | Yes | A manual override for the time/date the Milestone was started. |
| `state` | `str` | Yes | The workflow state that the Milestone is in. |
| `stats` | `dict` | Yes | A group of calculated values for this Milestone. |
| `updated_at` | `str` | Yes | The time/date the Milestone was updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Milestone().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Milestone().list()
for milestone in results:
    print(milestone)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Milestone().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Milestone().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Milestone().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MilestoneEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ObjectifEntity

```python
objectif = client.Objectif()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Objectif().remove({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObjectifEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ObjectiveEntity

```python
objective = client.Objective()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `int` | No | The ID of the Objective we want to move this Objective after. |
| `app_url` | `str` | Yes | The Shortcut application url for the Objective. |
| `archived` | `bool` | Yes | A boolean indicating whether the Objective has been archived or not. |
| `before_id` | `int` | No | The ID of the Objective we want to move this Objective before. |
| `categories` | `list` | Yes | An array of Categories attached to the Objective. |
| `completed` | `bool` | Yes | A true/false boolean indicating if the Objectivehas been completed. |
| `completed_at` | `str` | Yes | The time/date the Objective was completed. |
| `completed_at_override` | `str` | Yes | A manual override for the time/date the Objective was completed. |
| `created_at` | `str` | Yes | The time/date the Objective was created. |
| `description` | `str` | Yes | The Objective's description. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `global_id` | `str` | Yes |  |
| `id` | `int` | Yes | The unique ID of the Objective. |
| `key_result_ids` | `list` | Yes | The IDs of the Key Results associated with the Objective. |
| `name` | `str` | Yes | The name of the Objective. |
| `position` | `int` | Yes | A number representing the position of the Objective in relation to every other Objective within the Workspace. |
| `started` | `bool` | Yes | A true/false boolean indicating if the Objective has been started. |
| `started_at` | `str` | Yes | The time/date the Objective was started. |
| `started_at_override` | `str` | Yes | A manual override for the time/date the Objective was started. |
| `state` | `str` | Yes | The workflow state that the Objective is in. |
| `stats` | `dict` | Yes | A group of calculated values for this Objective. |
| `updated_at` | `str` | Yes | The time/date the Objective was updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Objective().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Objective().list()
for objective in results:
    print(objective)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Objective().load({"objective_public_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Objective().update({
    "objective_public_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObjectiveEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectEntity

```python
project = client.Project()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abbreviation` | `str` | Yes | The Project abbreviation used in Story summaries. |
| `app_url` | `str` | Yes | The Shortcut application url for the Project. |
| `archived` | `bool` | Yes | True/false boolean indicating whether the Project is in an Archived state. |
| `color` | `str` | Yes | The color associated with the Project in the Shortcut member interface. |
| `created_at` | `str` | Yes | The time/date that the Project was created. |
| `days_to_thermometer` | `int` | Yes | The number of days before the thermometer appears in the Story summary. |
| `description` | `str` | Yes | The description of the Project. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `external_id` | `str` | Yes | This field can be set to another unique ID. |
| `follower_ids` | `list` | Yes | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `str` | Yes | The Global ID of the Project. |
| `id` | `int` | Yes | The unique ID of the Project. |
| `iteration_length` | `int` | Yes | The number of weeks per iteration in this Project. |
| `name` | `str` | Yes | The name of the Project |
| `show_thermometer` | `bool` | Yes | Configuration to enable or disable thermometers in the Story summary. |
| `start_time` | `str` | Yes | The date at which the Project was started. |
| `stats` | `dict` | Yes | A group of calculated values for this Project. |
| `team_id` | `int` | Yes | The ID of the team the project belongs to. |
| `updated_at` | `str` | Yes | The time/date that the Project was last updated. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Project().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Project().list()
for project in results:
    print(project)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Project().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Project().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Project().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryEntity

```python
repository = client.Repository()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | The time/date the Repository was created. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `external_id` | `str` | Yes | The VCS unique identifier for the Repository. |
| `full_name` | `str` | Yes | The full name of the VCS repository. |
| `id` | `int` | Yes | The ID associated to the VCS repository in Shortcut. |
| `name` | `str` | Yes | The shorthand name of the VCS repository. |
| `type` | `str` | Yes | The VCS provider for the Repository. |
| `updated_at` | `str` | Yes | The time/date the Repository was updated. |
| `url` | `str` | Yes | The URL of the Repository. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Repository().list()
for repository in results:
    print(repository)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Repository().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SearchEntity

```python
search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `epics` | `dict` | Yes | The results of the Epic search query. |
| `iterations` | `dict` | Yes | The results of the Iteration search query. |
| `milestones` | `dict` | Yes | The results of the Objective search query. |
| `stories` | `dict` | Yes | The results of the Story search query. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Search().load({"query": "query"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StoryEntity

```python
story = client.Story()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `int` | No | The ID of the story we want to move this story after. |
| `app_url` | `str` | Yes | The Shortcut application url for the Story. |
| `archived` | `bool` | Yes | True if the story has been archived or not. |
| `before_id` | `int` | No | The ID of the story we want to move this story before. |
| `blocked` | `bool` | Yes | A true/false boolean indicating if the Story is currently blocked. |
| `blocker` | `bool` | Yes | A true/false boolean indicating if the Story is currently a blocker of another story. |
| `branch_ids` | `list` | No | An array of IDs of Branches attached to the story. |
| `branches` | `list` | Yes | An array of Git branches attached to the story. |
| `comment_ids` | `list` | No | An array of IDs of Comments attached to the story. |
| `comments` | `list` | Yes | An array of comments attached to the story. |
| `commit_ids` | `list` | No | An array of IDs of Commits attached to the story. |
| `commits` | `list` | Yes | An array of commits attached to the story. |
| `completed` | `bool` | Yes | A true/false boolean indicating if the Story has been completed. |
| `completed_at` | `str` | Yes | The time/date the Story was completed. |
| `completed_at_override` | `str` | Yes | A manual override for the time/date the Story was completed. |
| `created_at` | `str` | Yes | The time/date the Story was created. |
| `custom_fields` | `list` | No | An array of CustomField value assertions for the story. |
| `custom_fields_add` | `list` | No | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `list` | No | A map specifying a CustomField ID. |
| `cycle_time` | `int` | No | The cycle time (in seconds) of this story when complete. |
| `deadline` | `str` | Yes | The due date of the story. |
| `description` | `str` | Yes | The description of the story. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `epic_id` | `int` | Yes | The ID of the epic the story belongs to. |
| `estimate` | `int` | Yes | The numeric point estimate of the story. |
| `external_id` | `str` | Yes | This field can be set to another unique ID. |
| `external_links` | `list` | Yes | An array of external links (strings) associated with a Story |
| `external_links_add` | `list` | No | An array of External Links associated with this story. |
| `external_links_remove` | `list` | No | An array of External Links associated with this story. |
| `file_ids` | `list` | No | An array of IDs of files attached to the story. |
| `file_ids_add` | `list` | No | An array of IDs of files attached to the story in addition to files from the template. |
| `file_ids_remove` | `list` | No | An array of IDs of files removed from files from the template. |
| `files` | `list` | Yes | An array of files attached to the story. |
| `follower_ids` | `list` | Yes | An array of UUIDs for any Members listed as Followers. |
| `follower_ids_add` | `list` | No | The UUIDs of the new followers to be added in addition to followers from the template. |
| `follower_ids_remove` | `list` | No | The UUIDs of the new followers to be removed from followers from the template. |
| `formatted_vcs_branch_name` | `str` | No | The formatted branch name for this story. |
| `global_id` | `str` | Yes |  |
| `group_id` | `str` | Yes | The ID of the group associated with the story. |
| `group_mention_ids` | `list` | Yes | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `int` | Yes | The unique ID of the Story. |
| `iteration_id` | `int` | Yes | The ID of the iteration the story belongs to. |
| `label_ids` | `list` | Yes | An array of label ids attached to the story. |
| `labels` | `list` | Yes | An array of labels attached to the story. |
| `labels_add` | `list` | No | An array of labels attached to the story in addition to the labels provided by the template. |
| `labels_remove` | `list` | No | An array of labels to remove from the labels provided by the template. |
| `lead_time` | `int` | No | The lead time (in seconds) of this story when complete. |
| `linked_file_ids` | `list` | No | An array of IDs of linked files attached to the story. |
| `linked_file_ids_add` | `list` | No | An array of IDs of linked files attached to the story in addition to files from the template. |
| `linked_file_ids_remove` | `list` | No | An array of IDs of linked files removed from files from the template. |
| `linked_files` | `list` | Yes | An array of linked files attached to the story. |
| `member_mention_ids` | `list` | Yes | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `list` | Yes | `Deprecated:` use `member_mention_ids`. |
| `move_to` | `str` | No | One of "first" or "last". |
| `moved_at` | `str` | Yes | The time/date the Story was last changed workflow-state. |
| `name` | `str` | Yes | The name of the story. |
| `num_tasks_completed` | `int` | No | The number of tasks on the story which are complete. |
| `owner_ids` | `list` | Yes | An array of UUIDs of the owners of this story. |
| `owner_ids_add` | `list` | No | The UUIDs of the new owners to be added in addition to owners from the template. |
| `owner_ids_remove` | `list` | No | The UUIDs of the new owners to be removed from owners from the template. |
| `parent_story_id` | `int` | No | The id of the parent story to associate with this story. |
| `position` | `int` | Yes | A number representing the position of the story in relation to every other story in the current project. |
| `previous_iteration_ids` | `list` | Yes | The IDs of the iteration the story belongs to. |
| `project_id` | `int` | Yes | The ID of the project the story belongs to. |
| `pull_request_ids` | `list` | No | An array of IDs of Pull/Merge Requests attached to the story. |
| `pull_requests` | `list` | Yes | An array of Pull/Merge Requests attached to the story. |
| `requested_by_id` | `str` | Yes | The ID of the Member that requested the story. |
| `source_task_id` | `int` | No | Given this story was converted from a task in another story, this is the original task ID that was converted to this story. |
| `started` | `bool` | Yes | A true/false boolean indicating if the Story has been started. |
| `started_at` | `str` | Yes | The time/date the Story was started. |
| `started_at_override` | `str` | Yes | A manual override for the time/date the Story was started. |
| `stats` | `dict` | Yes | The stats object for Stories |
| `story_links` | `list` | Yes | An array of story links attached to the Story. |
| `story_template_id` | `str` | Yes | The ID of the story template used to create this story, or null if not created using a template. |
| `story_type` | `str` | Yes | The type of story (feature, bug, chore). |
| `sub_task_story_ids` | `list` | No |  |
| `sub_tasks` | `list` | No | A list of either params to create a new sub-task or link an existing story as a sub-task |
| `synced_item` | `dict` | Yes | The synced item for the story. |
| `task_ids` | `list` | No | An array of IDs of Tasks attached to the story. |
| `tasks` | `list` | Yes | An array of tasks connected to the story. |
| `updated_at` | `str` | Yes | The time/date the Story was updated. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Story().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Story().list({"query": "example"})
for story in results:
    print(story)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Story().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Story().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Story().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StoryCommentEntity

```python
story_comment = client.StoryComment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `str` | Yes | The Shortcut application url for the Comment. |
| `author_id` | `str` | Yes | The unique ID of the Member who is the Comment's author. |
| `blocker` | `bool` | No | Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment. |
| `created_at` | `str` | Yes | The time/date when the Comment was created. |
| `deleted` | `bool` | Yes | True/false boolean indicating whether the Comment has been deleted. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `external_id` | `str` | Yes | This field can be set to another unique ID. |
| `group_mention_ids` | `list` | Yes | The unique IDs of the Group who are mentioned in the Comment. |
| `id` | `int` | Yes | The unique ID of the Comment. |
| `linked_to_slack` | `bool` | Yes | Whether the Comment is currently the root of a thread that is linked to Slack. |
| `member_mention_ids` | `list` | Yes | The unique IDs of the Member who are mentioned in the Comment. |
| `mention_ids` | `list` | Yes | `Deprecated:` use `member_mention_ids`. |
| `parent_id` | `int` | No | The ID of the parent Comment this Comment is threaded under. |
| `position` | `int` | Yes | The Comments numerical position in the list from oldest to newest. |
| `reactions` | `list` | Yes | A set of Reactions to this Comment. |
| `story_id` | `int` | Yes | The ID of the Story on which the Comment appears. |
| `text` | `str` | Yes | The text of the Comment. |
| `unblocks_parent` | `bool` | No | Marks the comment as an unblocker to its blocker parent. |
| `updated_at` | `str` | Yes | The time/date when the Comment was updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.StoryComment().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.StoryComment().list({"id": 1})
for story_comment in results:
    print(story_comment)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.StoryComment().load({"id": 1, "story_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.StoryComment().update({
    "id": 1,
    "story_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StoryCommentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StoryLinkEntity

```python
story_link = client.StoryLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | The time/date when the Story Link was created. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `id` | `int` | Yes | The unique identifier of the Story Link. |
| `object_id` | `int` | Yes | The ID of the object Story. |
| `subject_id` | `int` | Yes | The ID of the subject Story. |
| `subject_workflow_state_id` | `int` | Yes | The workflow state of the "subject" story. |
| `updated_at` | `str` | Yes | The time/date when the Story Link was last updated. |
| `verb` | `str` | Yes | How the subject Story acts on the object Story. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.StoryLink().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.StoryLink().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.StoryLink().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.StoryLink().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StoryLinkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StoryReactionEntity

```python
story_reaction = client.StoryReaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emoji` | `str` | Yes | The emoji short-code to add / remove. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.StoryReaction().create({
    "comment_id": 1,  # int
    "story_id": 1,  # int
    "emoji": "example_emoji",  # str
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.StoryReaction().remove({"comment_id": 1, "story_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StoryReactionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StorySlimEntity

```python
story_slim = client.StorySlim()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `int` | No | The ID of the story that the stories are to be moved below. |
| `archived` | `bool` | No | A true/false boolean indicating whether the Story is in archived state. |
| `before_id` | `int` | No | The ID of the story that the stories are to be moved before. |
| `completed_at_end` | `str` | No | Stories should have been completed on or before this date. |
| `completed_at_start` | `str` | No | Stories should have been completed on or after this date. |
| `created_at_end` | `str` | No | Stories should have been created on or before this date. |
| `created_at_start` | `str` | No | Stories should have been created on or after this date. |
| `custom_fields_add` | `list` | No | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `list` | No | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `str` | No | The due date of the story. |
| `deadline_end` | `str` | No | Stories should have a deadline on or before this date. |
| `deadline_start` | `str` | No | Stories should have a deadline on or after this date. |
| `epic_id` | `int` | No | The Epic IDs that may be associated with the Stories. |
| `epic_ids` | `list` | No | The Epic IDs that may be associated with the Stories. |
| `estimate` | `int` | No | The number of estimate points associate with the Stories. |
| `external_id` | `str` | No | An ID or URL that references an external resource. |
| `external_links` | `list` | No | An array of External Links associated with this story. |
| `follower_ids_add` | `list` | No | The UUIDs of the new followers to be added. |
| `follower_ids_remove` | `list` | No | The UUIDs of the followers to be removed. |
| `group_id` | `str` | No | The Group ID that is associated with the Stories |
| `group_ids` | `list` | No | The Group IDs that are associated with the Stories |
| `includes_description` | `bool` | No | Whether to include the story description in the response. |
| `iteration_id` | `int` | No | The Iteration ID that may be associated with the Stories. |
| `iteration_ids` | `list` | No | The Iteration IDs that may be associated with the Stories. |
| `label_ids` | `list` | No | The Label IDs that may be associated with the Stories. |
| `label_name` | `str` | No | The name of any associated Labels. |
| `labels_add` | `list` | No | An array of labels to be added. |
| `labels_remove` | `list` | No | An array of labels to be removed. |
| `move_to` | `str` | No | One of "first" or "last". |
| `owner_id` | `str` | No | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids` | `list` | No | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids_add` | `list` | No | The UUIDs of the new owners to be added. |
| `owner_ids_remove` | `list` | No | The UUIDs of the owners to be removed. |
| `project_id` | `int` | No | The IDs for the Projects the Stories may be assigned to. |
| `project_ids` | `list` | No | The IDs for the Projects the Stories may be assigned to. |
| `requested_by_id` | `str` | No | The UUID of any Users who may have requested the Stories. |
| `stories` | `list` | Yes | An array of stories to be created. |
| `story_ids` | `list` | Yes | The Ids of the Stories you wish to update. |
| `story_type` | `str` | No | The type of Stories that you want returned. |
| `updated_at_end` | `str` | No | Stories should have been updated on or before this date. |
| `updated_at_start` | `str` | No | Stories should have been updated on or after this date. |
| `workflow_state_id` | `int` | No | The unique IDs of the specific Workflow States that the Stories should be in. |
| `workflow_state_types` | `list` | No | The type of Workflow State the Stories may be in. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.StorySlim().create({
    "stories": [],  # list
    "story_ids": [],  # list
})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.StorySlim().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StorySlimEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TaskEntity

```python
task = client.Task()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after_id` | `int` | No | Move task after this task ID. |
| `before_id` | `int` | No | Move task before this task ID. |
| `complete` | `bool` | Yes | True/false boolean indicating whether the Task has been completed. |
| `completed_at` | `str` | Yes | The time/date the Task was completed. |
| `created_at` | `str` | Yes | The time/date the Task was created. |
| `description` | `str` | Yes | Full text of the Task. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `external_id` | `str` | Yes | This field can be set to another unique ID. |
| `global_id` | `str` | Yes |  |
| `group_mention_ids` | `list` | Yes | An array of UUIDs of Groups mentioned in this Task. |
| `id` | `int` | Yes | The unique ID of the Task. |
| `member_mention_ids` | `list` | Yes | An array of UUIDs of Members mentioned in this Task. |
| `mention_ids` | `list` | Yes | `Deprecated:` use `member_mention_ids`. |
| `owner_ids` | `list` | Yes | An array of UUIDs of the Owners of this Task. |
| `position` | `int` | Yes | The number corresponding to the Task's position within a list of Tasks on a Story. |
| `story_id` | `int` | Yes | The unique identifier of the parent Story. |
| `updated_at` | `str` | Yes | The time/date the Task was updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Task().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Task().load({"id": 1, "story_id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Task().remove({"id": 1, "story_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Task().update({
    "id": 1,
    "story_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TaskEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ThreadedCommentEntity

```python
threaded_comment = client.ThreadedComment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_url` | `str` | Yes | The Shortcut application url for the Comment. |
| `author_id` | `str` | Yes | The unique ID of the Member that authored the Comment. |
| `comments` | `list` | Yes | A nested array of threaded comments. |
| `created_at` | `str` | Yes | The time/date the Comment was created. |
| `deleted` | `bool` | Yes | True/false boolean indicating whether the Comment is deleted. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `external_id` | `str` | Yes | This field can be set to another unique ID. |
| `group_mention_ids` | `list` | Yes | An array of Group IDs that have been mentioned in this Comment. |
| `id` | `int` | Yes | The unique ID of the Comment. |
| `member_mention_ids` | `list` | Yes | An array of Member IDs that have been mentioned in this Comment. |
| `mention_ids` | `list` | Yes | `Deprecated:` use `member_mention_ids`. |
| `text` | `str` | Yes | The text of the Comment. |
| `updated_at` | `str` | Yes | The time/date the Comment was updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ThreadedComment().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ThreadedComment().list({"epic_id": 1})
for threaded_comment in results:
    print(threaded_comment)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ThreadedComment().load({"id": 1, "epic_id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ThreadedComment().remove({"id": 1, "epic_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ThreadedComment().update({
    "id": 1,
    "epic_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ThreadedCommentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UploadedFileEntity

```python
uploaded_file = client.UploadedFile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `str` | Yes | Free form string corresponding to a text or image file. |
| `created_at` | `str` | Yes | The time/date that the file was created. |
| `description` | `str` | Yes | The description of the file. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `external_id` | `str` | Yes | This field can be set to another unique ID. |
| `filename` | `str` | Yes | The name assigned to the file in Shortcut upon upload. |
| `group_mention_ids` | `list` | Yes | The unique IDs of the Groups who are mentioned in the file description. |
| `id` | `int` | Yes | The unique ID for the file. |
| `member_mention_ids` | `list` | Yes | The unique IDs of the Members who are mentioned in the file description. |
| `mention_ids` | `list` | Yes | `Deprecated:` use `member_mention_ids`. |
| `name` | `str` | Yes | The optional User-specified name of the file. |
| `size` | `int` | Yes | The size of the file. |
| `story_ids` | `list` | Yes | The unique IDs of the Stories associated with this file. |
| `thumbnail_url` | `str` | Yes | The url where the thumbnail of the file can be found in Shortcut. |
| `updated_at` | `str` | Yes | The time/date that the file was updated. |
| `uploader_id` | `str` | Yes | The unique ID of the Member who uploaded the file. |
| `url` | `str` | Yes | The URL for the file. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.UploadedFile().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.UploadedFile().list()
for uploaded_file in results:
    print(uploaded_file)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.UploadedFile().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.UploadedFile().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UploadedFile().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UploadedFileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookEntity

```python
webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `secret` | `str` | No |  |
| `webhook_url` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Webhook().create({
    "webhook_url": "example_webhook_url",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Webhook().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Webhook().remove({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkflowEntity

```python
workflow = client.Workflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_assign_owner` | `bool` | Yes | Indicates if an owner is automatically assigned when an unowned story is started. |
| `created_at` | `str` | Yes | The date the Workflow was created. |
| `default_state_id` | `int` | Yes | The unique ID of the default state that new Stories are entered into. |
| `description` | `str` | Yes | A description of the workflow. |
| `entity_type` | `str` | Yes | A string description of this resource. |
| `id` | `int` | Yes | The unique ID of the Workflow. |
| `name` | `str` | Yes | The name of the workflow. |
| `project_ids` | `list` | Yes | An array of IDs of projects within the Workflow. |
| `states` | `list` | Yes | A map of the states in this Workflow. |
| `team_id` | `int` | Yes | The ID of the team the workflow belongs to. |
| `updated_at` | `str` | Yes | The date the Workflow was updated. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Workflow().list()
for workflow in results:
    print(workflow)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Workflow().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```python
client = ShortcutSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Request/response capture ring buffer for debugging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency keys for safe retries of mutating operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Statistics capture: per-operation counters and latency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Pagination signals for list operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.


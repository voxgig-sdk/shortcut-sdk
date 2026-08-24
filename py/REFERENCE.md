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
| `archived` | `bool` | Yes |  |
| `color` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `entity_type` | `str` | Yes |  |
| `external_id` | `str` | Yes |  |
| `global_id` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `name` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |

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
| `after_id` | `str` | No |  |
| `before_id` | `str` | No |  |
| `canonical_name` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `description` | `str` | No |  |
| `enabled` | `bool` | Yes |  |
| `entity_type` | `str` | Yes |  |
| `field_type` | `str` | Yes |  |
| `fixed_position` | `bool` | No |  |
| `icon_set_identifier` | `str` | No |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `position` | `int` | Yes |  |
| `story_types` | `list` | No |  |
| `updated_at` | `str` | Yes |  |
| `values` | `list` | No |  |

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
| `app_url` | `str` | Yes |  |
| `content` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `title` | `str` | Yes |  |

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
| `author_id` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `custom_fields` | `list` | No |  |
| `deadline` | `str` | No |  |
| `description` | `str` | No |  |
| `entity_type` | `str` | No |  |
| `epic_id` | `int` | No |  |
| `estimate` | `int` | No |  |
| `external_links` | `list` | No |  |
| `files` | `list` | No |  |
| `follower_ids` | `list` | No |  |
| `group_id` | `str` | No |  |
| `id` | `str` | Yes |  |
| `iteration_id` | `int` | No |  |
| `label_ids` | `list` | No |  |
| `labels` | `list` | No |  |
| `last_used_at` | `str` | Yes |  |
| `linked_files` | `list` | No |  |
| `name` | `str` | No |  |
| `owner_ids` | `list` | No |  |
| `project_id` | `int` | No |  |
| `story_contents` | `dict` | Yes |  |
| `story_type` | `str` | No |  |
| `sub_tasks` | `list` | No |  |
| `tasks` | `list` | No |  |
| `updated_at` | `str` | Yes |  |
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
| `after_id` | `int` | No |  |
| `app_url` | `str` | Yes |  |
| `archived` | `bool` | Yes |  |
| `associated_groups` | `list` | Yes |  |
| `before_id` | `int` | No |  |
| `comments` | `list` | Yes |  |
| `completed` | `bool` | Yes |  |
| `completed_at` | `str` | Yes |  |
| `completed_at_override` | `str` | Yes |  |
| `converted_from_story_id` | `int` | No |  |
| `created_at` | `str` | Yes |  |
| `deadline` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `entity_type` | `str` | Yes |  |
| `epic_state_id` | `int` | Yes |  |
| `external_id` | `str` | Yes |  |
| `follower_ids` | `list` | Yes |  |
| `global_id` | `str` | Yes |  |
| `group_id` | `str` | Yes |  |
| `group_ids` | `list` | Yes |  |
| `group_mention_ids` | `list` | Yes |  |
| `health` | `dict` | Yes |  |
| `id` | `int` | Yes |  |
| `label_ids` | `list` | Yes |  |
| `labels` | `list` | Yes |  |
| `member_mention_ids` | `list` | Yes |  |
| `mention_ids` | `list` | Yes |  |
| `milestone_id` | `int` | Yes |  |
| `name` | `str` | Yes |  |
| `objective_ids` | `list` | Yes |  |
| `owner_ids` | `list` | Yes |  |
| `planned_start_date` | `str` | Yes |  |
| `position` | `int` | Yes |  |
| `productboard_id` | `str` | Yes |  |
| `productboard_name` | `str` | Yes |  |
| `productboard_plugin_id` | `str` | Yes |  |
| `productboard_url` | `str` | Yes |  |
| `project_ids` | `list` | Yes |  |
| `requested_by_id` | `str` | Yes |  |
| `started` | `bool` | Yes |  |
| `started_at` | `str` | Yes |  |
| `started_at_override` | `str` | Yes |  |
| `state` | `str` | Yes |  |
| `stats` | `dict` | Yes |  |
| `stories_without_projects` | `int` | Yes |  |
| `updated_at` | `str` | Yes |  |

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
| `app_url` | `str` | Yes |  |
| `archived` | `bool` | Yes |  |
| `associated_groups` | `list` | Yes |  |
| `completed` | `bool` | Yes |  |
| `completed_at` | `str` | Yes |  |
| `completed_at_override` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `deadline` | `str` | Yes |  |
| `description` | `str` | No |  |
| `entity_type` | `str` | Yes |  |
| `epic_state_id` | `int` | Yes |  |
| `external_id` | `str` | Yes |  |
| `follower_ids` | `list` | Yes |  |
| `global_id` | `str` | Yes |  |
| `group_id` | `str` | Yes |  |
| `group_ids` | `list` | Yes |  |
| `group_mention_ids` | `list` | Yes |  |
| `id` | `int` | Yes |  |
| `label_ids` | `list` | Yes |  |
| `labels` | `list` | Yes |  |
| `member_mention_ids` | `list` | Yes |  |
| `mention_ids` | `list` | Yes |  |
| `milestone_id` | `int` | Yes |  |
| `name` | `str` | Yes |  |
| `objective_ids` | `list` | Yes |  |
| `owner_ids` | `list` | Yes |  |
| `planned_start_date` | `str` | Yes |  |
| `position` | `int` | Yes |  |
| `productboard_id` | `str` | Yes |  |
| `productboard_name` | `str` | Yes |  |
| `productboard_plugin_id` | `str` | Yes |  |
| `productboard_url` | `str` | Yes |  |
| `project_ids` | `list` | Yes |  |
| `requested_by_id` | `str` | Yes |  |
| `started` | `bool` | Yes |  |
| `started_at` | `str` | Yes |  |
| `started_at_override` | `str` | Yes |  |
| `state` | `str` | Yes |  |
| `stats` | `dict` | Yes |  |
| `stories_without_projects` | `int` | Yes |  |
| `updated_at` | `str` | Yes |  |

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
| `color` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `entity_type` | `str` | Yes |  |
| `global_id` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `name` | `str` | Yes |  |
| `position` | `int` | Yes |  |
| `type` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |

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
| `app_url` | `str` | Yes |  |
| `archived` | `bool` | Yes |  |
| `color` | `str` | Yes |  |
| `color_key` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `default_workflow_id` | `int` | No |  |
| `description` | `str` | Yes |  |
| `display_icon` | `dict` | Yes |  |
| `display_icon_id` | `str` | No |  |
| `entity_type` | `str` | Yes |  |
| `global_id` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `member_ids` | `list` | Yes |  |
| `mention_name` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `num_epics_started` | `int` | Yes |  |
| `num_stories` | `int` | Yes |  |
| `num_stories_backlog` | `int` | Yes |  |
| `num_stories_started` | `int` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `workflow_ids` | `list` | Yes |  |

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
| `author_id` | `str` | No |  |
| `created_at` | `str` | No |  |
| `entity_type` | `str` | Yes |  |
| `epic_id` | `int` | No |  |
| `id` | `str` | Yes |  |
| `objective_id` | `int` | No |  |
| `status` | `str` | Yes |  |
| `text` | `str` | No |  |
| `updated_at` | `str` | No |  |

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
results = client.Health().list()
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
| `actions` | `list` | Yes |  |
| `actor_name` | `str` | No |  |
| `automation_id` | `str` | No |  |
| `changed_at` | `str` | Yes |  |
| `external_id` | `str` | No |  |
| `id` | `str` | Yes |  |
| `member_id` | `str` | No |  |
| `primary_id` | `str` | No |  |
| `references` | `list` | No |  |
| `version` | `str` | Yes |  |
| `webhook_id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.History().list()
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
| `app_url` | `str` | Yes |  |
| `associated_groups` | `list` | Yes |  |
| `created_at` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `end_date` | `str` | Yes |  |
| `entity_type` | `str` | Yes |  |
| `follower_ids` | `list` | Yes |  |
| `global_id` | `str` | Yes |  |
| `group_ids` | `list` | Yes |  |
| `group_mention_ids` | `list` | Yes |  |
| `id` | `int` | Yes |  |
| `label_ids` | `list` | Yes |  |
| `labels` | `list` | Yes |  |
| `member_mention_ids` | `list` | Yes |  |
| `mention_ids` | `list` | Yes |  |
| `name` | `str` | Yes |  |
| `start_date` | `str` | Yes |  |
| `stats` | `dict` | Yes |  |
| `status` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |

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
| `current_observed_value` | `dict` | Yes |  |
| `current_target_value` | `dict` | Yes |  |
| `id` | `str` | Yes |  |
| `initial_observed_value` | `dict` | Yes |  |
| `name` | `str` | Yes |  |
| `objective_id` | `int` | Yes |  |
| `observed_value` | `dict` | No |  |
| `progress` | `int` | Yes |  |
| `target_value` | `dict` | No |  |
| `type` | `str` | Yes |  |

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
| `app_url` | `str` | Yes |  |
| `archived` | `bool` | No |  |
| `color` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `description` | `str` | No |  |
| `entity_type` | `str` | Yes |  |
| `external_id` | `str` | No |  |
| `global_id` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `name` | `str` | Yes |  |
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
| `stats` | `dict` | Yes |  |
| `updated_at` | `str` | Yes |  |

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
| `content_type` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `entity_type` | `str` | Yes |  |
| `group_mention_ids` | `list` | Yes |  |
| `id` | `int` | Yes |  |
| `member_mention_ids` | `list` | Yes |  |
| `mention_ids` | `list` | Yes |  |
| `name` | `str` | Yes |  |
| `size` | `int` | Yes |  |
| `story_id` | `int` | No |  |
| `story_ids` | `list` | Yes |  |
| `thumbnail_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `uploader_id` | `str` | Yes |  |
| `url` | `str` | Yes |  |

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
| `created_at` | `str` | Yes |  |
| `created_without_invite` | `bool` | Yes |  |
| `disabled` | `bool` | Yes |  |
| `entity_type` | `str` | Yes |  |
| `global_id` | `str` | Yes |  |
| `group_ids` | `list` | Yes |  |
| `id` | `str` | Yes |  |
| `installation_id` | `str` | No |  |
| `is_owner` | `bool` | Yes |  |
| `mention_name` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `organization2` | `dict` | Yes |  |
| `profile` | `dict` | Yes |  |
| `replaced_by` | `str` | No |  |
| `role` | `str` | Yes |  |
| `state` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
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
| `after_id` | `int` | No |  |
| `app_url` | `str` | Yes |  |
| `archived` | `bool` | Yes |  |
| `before_id` | `int` | No |  |
| `categories` | `list` | Yes |  |
| `completed` | `bool` | Yes |  |
| `completed_at` | `str` | Yes |  |
| `completed_at_override` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `entity_type` | `str` | Yes |  |
| `global_id` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `key_result_ids` | `list` | Yes |  |
| `name` | `str` | Yes |  |
| `position` | `int` | Yes |  |
| `started` | `bool` | Yes |  |
| `started_at` | `str` | Yes |  |
| `started_at_override` | `str` | Yes |  |
| `state` | `str` | Yes |  |
| `stats` | `dict` | Yes |  |
| `updated_at` | `str` | Yes |  |

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
| `after_id` | `int` | No |  |
| `app_url` | `str` | Yes |  |
| `archived` | `bool` | Yes |  |
| `before_id` | `int` | No |  |
| `categories` | `list` | Yes |  |
| `completed` | `bool` | Yes |  |
| `completed_at` | `str` | Yes |  |
| `completed_at_override` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `entity_type` | `str` | Yes |  |
| `global_id` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `key_result_ids` | `list` | Yes |  |
| `name` | `str` | Yes |  |
| `position` | `int` | Yes |  |
| `started` | `bool` | Yes |  |
| `started_at` | `str` | Yes |  |
| `started_at_override` | `str` | Yes |  |
| `state` | `str` | Yes |  |
| `stats` | `dict` | Yes |  |
| `updated_at` | `str` | Yes |  |

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
| `abbreviation` | `str` | Yes |  |
| `app_url` | `str` | Yes |  |
| `archived` | `bool` | Yes |  |
| `color` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `days_to_thermometer` | `int` | Yes |  |
| `description` | `str` | Yes |  |
| `entity_type` | `str` | Yes |  |
| `external_id` | `str` | Yes |  |
| `follower_ids` | `list` | Yes |  |
| `global_id` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `iteration_length` | `int` | Yes |  |
| `name` | `str` | Yes |  |
| `show_thermometer` | `bool` | Yes |  |
| `start_time` | `str` | Yes |  |
| `stats` | `dict` | Yes |  |
| `team_id` | `int` | Yes |  |
| `updated_at` | `str` | Yes |  |
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
| `created_at` | `str` | Yes |  |
| `entity_type` | `str` | Yes |  |
| `external_id` | `str` | Yes |  |
| `full_name` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `name` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |

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
| `epics` | `dict` | Yes |  |
| `iterations` | `dict` | Yes |  |
| `milestones` | `dict` | Yes |  |
| `stories` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Search().load()
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
| `after_id` | `int` | No |  |
| `app_url` | `str` | Yes |  |
| `archived` | `bool` | Yes |  |
| `before_id` | `int` | No |  |
| `blocked` | `bool` | Yes |  |
| `blocker` | `bool` | Yes |  |
| `branch_ids` | `list` | No |  |
| `branches` | `list` | Yes |  |
| `comment_ids` | `list` | No |  |
| `comments` | `list` | Yes |  |
| `commit_ids` | `list` | No |  |
| `commits` | `list` | Yes |  |
| `completed` | `bool` | Yes |  |
| `completed_at` | `str` | Yes |  |
| `completed_at_override` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `custom_fields` | `list` | No |  |
| `custom_fields_add` | `list` | No |  |
| `custom_fields_remove` | `list` | No |  |
| `cycle_time` | `int` | No |  |
| `deadline` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `entity_type` | `str` | Yes |  |
| `epic_id` | `int` | Yes |  |
| `estimate` | `int` | Yes |  |
| `external_id` | `str` | Yes |  |
| `external_links` | `list` | Yes |  |
| `external_links_add` | `list` | No |  |
| `external_links_remove` | `list` | No |  |
| `file_ids` | `list` | No |  |
| `file_ids_add` | `list` | No |  |
| `file_ids_remove` | `list` | No |  |
| `files` | `list` | Yes |  |
| `follower_ids` | `list` | Yes |  |
| `follower_ids_add` | `list` | No |  |
| `follower_ids_remove` | `list` | No |  |
| `formatted_vcs_branch_name` | `str` | No |  |
| `global_id` | `str` | Yes |  |
| `group_id` | `str` | Yes |  |
| `group_mention_ids` | `list` | Yes |  |
| `id` | `int` | Yes |  |
| `iteration_id` | `int` | Yes |  |
| `label_ids` | `list` | Yes |  |
| `labels` | `list` | Yes |  |
| `labels_add` | `list` | No |  |
| `labels_remove` | `list` | No |  |
| `lead_time` | `int` | No |  |
| `linked_file_ids` | `list` | No |  |
| `linked_file_ids_add` | `list` | No |  |
| `linked_file_ids_remove` | `list` | No |  |
| `linked_files` | `list` | Yes |  |
| `member_mention_ids` | `list` | Yes |  |
| `mention_ids` | `list` | Yes |  |
| `move_to` | `str` | No |  |
| `moved_at` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `num_tasks_completed` | `int` | No |  |
| `owner_ids` | `list` | Yes |  |
| `owner_ids_add` | `list` | No |  |
| `owner_ids_remove` | `list` | No |  |
| `parent_story_id` | `int` | No |  |
| `position` | `int` | Yes |  |
| `previous_iteration_ids` | `list` | Yes |  |
| `project_id` | `int` | Yes |  |
| `pull_request_ids` | `list` | No |  |
| `pull_requests` | `list` | Yes |  |
| `requested_by_id` | `str` | Yes |  |
| `source_task_id` | `int` | No |  |
| `started` | `bool` | Yes |  |
| `started_at` | `str` | Yes |  |
| `started_at_override` | `str` | Yes |  |
| `stats` | `dict` | Yes |  |
| `story_links` | `list` | Yes |  |
| `story_template_id` | `str` | Yes |  |
| `story_type` | `str` | Yes |  |
| `sub_task_story_ids` | `list` | No |  |
| `sub_tasks` | `list` | No |  |
| `synced_item` | `dict` | Yes |  |
| `task_ids` | `list` | No |  |
| `tasks` | `list` | Yes |  |
| `updated_at` | `str` | Yes |  |
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
results = client.Story().list()
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
| `app_url` | `str` | Yes |  |
| `author_id` | `str` | Yes |  |
| `blocker` | `bool` | No |  |
| `created_at` | `str` | Yes |  |
| `deleted` | `bool` | Yes |  |
| `entity_type` | `str` | Yes |  |
| `external_id` | `str` | Yes |  |
| `group_mention_ids` | `list` | Yes |  |
| `id` | `int` | Yes |  |
| `linked_to_slack` | `bool` | Yes |  |
| `member_mention_ids` | `list` | Yes |  |
| `mention_ids` | `list` | Yes |  |
| `parent_id` | `int` | No |  |
| `position` | `int` | Yes |  |
| `reactions` | `list` | Yes |  |
| `story_id` | `int` | Yes |  |
| `text` | `str` | Yes |  |
| `unblocks_parent` | `bool` | No |  |
| `updated_at` | `str` | Yes |  |

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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.StoryComment().list()
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
| `created_at` | `str` | Yes |  |
| `entity_type` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `object_id` | `int` | Yes |  |
| `subject_id` | `int` | Yes |  |
| `subject_workflow_state_id` | `int` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `verb` | `str` | Yes |  |

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
| `emoji` | `str` | Yes |  |

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
| `after_id` | `int` | No |  |
| `archived` | `bool` | No |  |
| `before_id` | `int` | No |  |
| `completed_at_end` | `str` | No |  |
| `completed_at_start` | `str` | No |  |
| `created_at_end` | `str` | No |  |
| `created_at_start` | `str` | No |  |
| `custom_fields_add` | `list` | No |  |
| `custom_fields_remove` | `list` | No |  |
| `deadline` | `str` | No |  |
| `deadline_end` | `str` | No |  |
| `deadline_start` | `str` | No |  |
| `epic_id` | `int` | No |  |
| `epic_ids` | `list` | No |  |
| `estimate` | `int` | No |  |
| `external_id` | `str` | No |  |
| `external_links` | `list` | No |  |
| `follower_ids_add` | `list` | No |  |
| `follower_ids_remove` | `list` | No |  |
| `group_id` | `str` | No |  |
| `group_ids` | `list` | No |  |
| `includes_description` | `bool` | No |  |
| `iteration_id` | `int` | No |  |
| `iteration_ids` | `list` | No |  |
| `label_ids` | `list` | No |  |
| `label_name` | `str` | No |  |
| `labels_add` | `list` | No |  |
| `labels_remove` | `list` | No |  |
| `move_to` | `str` | No |  |
| `owner_id` | `str` | No |  |
| `owner_ids` | `list` | No |  |
| `owner_ids_add` | `list` | No |  |
| `owner_ids_remove` | `list` | No |  |
| `project_id` | `int` | No |  |
| `project_ids` | `list` | No |  |
| `requested_by_id` | `str` | No |  |
| `stories` | `list` | Yes |  |
| `story_ids` | `list` | Yes |  |
| `story_type` | `str` | No |  |
| `updated_at_end` | `str` | No |  |
| `updated_at_start` | `str` | No |  |
| `workflow_state_id` | `int` | No |  |
| `workflow_state_types` | `list` | No |  |

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
| `after_id` | `int` | No |  |
| `before_id` | `int` | No |  |
| `complete` | `bool` | Yes |  |
| `completed_at` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `entity_type` | `str` | Yes |  |
| `external_id` | `str` | Yes |  |
| `global_id` | `str` | Yes |  |
| `group_mention_ids` | `list` | Yes |  |
| `id` | `int` | Yes |  |
| `member_mention_ids` | `list` | Yes |  |
| `mention_ids` | `list` | Yes |  |
| `owner_ids` | `list` | Yes |  |
| `position` | `int` | Yes |  |
| `story_id` | `int` | Yes |  |
| `updated_at` | `str` | Yes |  |

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
| `app_url` | `str` | Yes |  |
| `author_id` | `str` | Yes |  |
| `comments` | `list` | Yes |  |
| `created_at` | `str` | Yes |  |
| `deleted` | `bool` | Yes |  |
| `entity_type` | `str` | Yes |  |
| `external_id` | `str` | Yes |  |
| `group_mention_ids` | `list` | Yes |  |
| `id` | `int` | Yes |  |
| `member_mention_ids` | `list` | Yes |  |
| `mention_ids` | `list` | Yes |  |
| `text` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |

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
results = client.ThreadedComment().list()
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
| `content_type` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `entity_type` | `str` | Yes |  |
| `external_id` | `str` | Yes |  |
| `filename` | `str` | Yes |  |
| `group_mention_ids` | `list` | Yes |  |
| `id` | `int` | Yes |  |
| `member_mention_ids` | `list` | Yes |  |
| `mention_ids` | `list` | Yes |  |
| `name` | `str` | Yes |  |
| `size` | `int` | Yes |  |
| `story_ids` | `list` | Yes |  |
| `thumbnail_url` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `uploader_id` | `str` | Yes |  |
| `url` | `str` | Yes |  |

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
| `auto_assign_owner` | `bool` | Yes |  |
| `created_at` | `str` | Yes |  |
| `default_state_id` | `int` | Yes |  |
| `description` | `str` | Yes |  |
| `entity_type` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `name` | `str` | Yes |  |
| `project_ids` | `list` | Yes |  |
| `states` | `list` | Yes |  |
| `team_id` | `int` | Yes |  |
| `updated_at` | `str` | Yes |  |

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
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = ShortcutSDK({
    "feature": {
        "test": {"active": True},
    },
})
```


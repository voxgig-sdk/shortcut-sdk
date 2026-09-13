# Shortcut Golang SDK



The Golang SDK for the Shortcut API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Bulk(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `js`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/shortcut-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/shortcut-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/shortcut-sdk/go=../shortcut-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/shortcut-sdk/go"
)

func main() {
    client := sdk.NewShortcutSDK(map[string]any{
        "apikey": os.Getenv("SHORTCUT_APIKEY"),
    })

    // Remove a bulk.
    removed, err := client.Bulk(nil).Remove(nil, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(removed)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
iterations, err := client.Iteration(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = iterations
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

iteration, err := client.Iteration(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(iteration) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewShortcutSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewShortcutSDK

```go
func NewShortcutSDK(options map[string]any) *ShortcutSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *ShortcutSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### ShortcutSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Bulk` | `(data map[string]any) ShortcutEntity` | Create a Bulk entity instance. |
| `Category` | `(data map[string]any) ShortcutEntity` | Create a Category entity instance. |
| `Comment` | `(data map[string]any) ShortcutEntity` | Create a Comment entity instance. |
| `CustomField` | `(data map[string]any) ShortcutEntity` | Create a CustomField entity instance. |
| `Disable` | `(data map[string]any) ShortcutEntity` | Create a Disable entity instance. |
| `DocSlim` | `(data map[string]any) ShortcutEntity` | Create a DocSlim entity instance. |
| `Enable` | `(data map[string]any) ShortcutEntity` | Create an Enable entity instance. |
| `EntityTemplate` | `(data map[string]any) ShortcutEntity` | Create an EntityTemplate entity instance. |
| `Epic` | `(data map[string]any) ShortcutEntity` | Create an Epic entity instance. |
| `EpicPaginatedResult` | `(data map[string]any) ShortcutEntity` | Create an EpicPaginatedResult entity instance. |
| `EpicUnlinkProductboard` | `(data map[string]any) ShortcutEntity` | Create an EpicUnlinkProductboard entity instance. |
| `EpicWorkflow` | `(data map[string]any) ShortcutEntity` | Create an EpicWorkflow entity instance. |
| `Group` | `(data map[string]any) ShortcutEntity` | Create a Group entity instance. |
| `Health` | `(data map[string]any) ShortcutEntity` | Create a Health entity instance. |
| `History` | `(data map[string]any) ShortcutEntity` | Create a History entity instance. |
| `Iteration` | `(data map[string]any) ShortcutEntity` | Create an Iteration entity instance. |
| `KeyResult` | `(data map[string]any) ShortcutEntity` | Create a KeyResult entity instance. |
| `Label` | `(data map[string]any) ShortcutEntity` | Create a Label entity instance. |
| `LinkedFile` | `(data map[string]any) ShortcutEntity` | Create a LinkedFile entity instance. |
| `Member` | `(data map[string]any) ShortcutEntity` | Create a Member entity instance. |
| `Milestone` | `(data map[string]any) ShortcutEntity` | Create a Milestone entity instance. |
| `Objectif` | `(data map[string]any) ShortcutEntity` | Create an Objectif entity instance. |
| `Objective` | `(data map[string]any) ShortcutEntity` | Create an Objective entity instance. |
| `Project` | `(data map[string]any) ShortcutEntity` | Create a Project entity instance. |
| `Repository` | `(data map[string]any) ShortcutEntity` | Create a Repository entity instance. |
| `Search` | `(data map[string]any) ShortcutEntity` | Create a Search entity instance. |
| `Story` | `(data map[string]any) ShortcutEntity` | Create a Story entity instance. |
| `StoryComment` | `(data map[string]any) ShortcutEntity` | Create a StoryComment entity instance. |
| `StoryLink` | `(data map[string]any) ShortcutEntity` | Create a StoryLink entity instance. |
| `StoryReaction` | `(data map[string]any) ShortcutEntity` | Create a StoryReaction entity instance. |
| `StorySlim` | `(data map[string]any) ShortcutEntity` | Create a StorySlim entity instance. |
| `Task` | `(data map[string]any) ShortcutEntity` | Create a Task entity instance. |
| `ThreadedComment` | `(data map[string]any) ShortcutEntity` | Create a ThreadedComment entity instance. |
| `UploadedFile` | `(data map[string]any) ShortcutEntity` | Create an UploadedFile entity instance. |
| `Webhook` | `(data map[string]any) ShortcutEntity` | Create a Webhook entity instance. |
| `Workflow` | `(data map[string]any) ShortcutEntity` | Create a Workflow entity instance. |

### Entity interface (ShortcutEntity)

All entities implement the `ShortcutEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    bulk, err := client.Bulk(nil).Remove(nil, nil)
    if err != nil { /* handle */ }
    // bulk is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Bulk

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/api/v3/stories/bulk`

#### Category

| Field | Description |
| --- | --- |
| `"archived"` | A true/false boolean indicating if the Category has been archived. |
| `"color"` | The hex color to be displayed with the Category (for example, "#ff0000"). |
| `"created_at"` | The time/date that the Category was created. |
| `"entity_type"` | A string description of this resource. |
| `"external_id"` | This field can be set to another unique ID. |
| `"global_id"` | The Global ID of the Category. |
| `"id"` | The unique ID of the Category. |
| `"name"` | The name of the Category. |
| `"type"` | The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category. |
| `"updated_at"` | The time/date that the Category was updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/categories`

#### Comment

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/api/v3/stories/{story-public-id}/comments/{comment-public-id}`

#### CustomField

| Field | Description |
| --- | --- |
| `"after_id"` | The ID of the CustomField we want to move this CustomField after. |
| `"before_id"` | The ID of the CustomField we want to move this CustomField before. |
| `"canonical_name"` | The canonical name for a Shortcut-defined field. |
| `"created_at"` | The instant when this CustomField was created. |
| `"description"` | A string description of the CustomField |
| `"enabled"` | When true, the CustomField can be applied to entities in the Workspace. |
| `"entity_type"` | A string description of this resource. |
| `"field_type"` | The type of Custom Field, eg. |
| `"fixed_position"` | When true, the CustomFieldEnumValues may not be reordered. |
| `"icon_set_identifier"` | A string that represents the icon that corresponds to this custom field. |
| `"id"` | The unique public ID for the CustomField. |
| `"name"` | The name of the Custom Field. |
| `"position"` | An integer indicating the position of this Custom Field with respect to the other CustomField |
| `"story_types"` | The types of stories this CustomField is scoped to. |
| `"updated_at"` | The instant when this CustomField was last updated. |
| `"values"` | A collection of legal values for a CustomField. |

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
| `"app_url"` | The Shortcut application url for the Doc. |
| `"content"` | The content for the new document |
| `"id"` | The public id of the Doc |
| `"title"` | The title for the new document |

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
| `"author_id"` | The id of the user creating this template. |
| `"created_at"` | The time/date when the entity template was created. |
| `"custom_fields"` | An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `"deadline"` | The due date of the story. |
| `"description"` | The description of the story. |
| `"entity_type"` | A string description of this resource. |
| `"epic_id"` | The ID of the epic the story belongs to. |
| `"estimate"` | The numeric point estimate of the story. |
| `"external_links"` | An array of external links connected to the story. |
| `"files"` | An array of files attached to the story. |
| `"follower_ids"` | An array of UUIDs for any Members listed as Followers. |
| `"group_id"` | The ID of the group to which the story is assigned. |
| `"id"` | The unique identifier for the entity template. |
| `"iteration_id"` | The ID of the iteration the story belongs to. |
| `"label_ids"` | An array of label ids attached to the story. |
| `"labels"` | An array of labels attached to the story. |
| `"last_used_at"` | The last time that someone created an entity using this template. |
| `"linked_files"` | An array of linked files attached to the story. |
| `"name"` | The name of the story. |
| `"owner_ids"` | An array of UUIDs of the owners of this story. |
| `"project_id"` | The ID of the project the story belongs to. |
| `"story_contents"` | A map of story attributes this template populates. |
| `"story_type"` | The type of story (feature, bug, chore). |
| `"sub_tasks"` | An array of sub-tasks connected to the story |
| `"tasks"` | An array of tasks connected to the story. |
| `"updated_at"` | The time/date when the entity template was last updated. |
| `"workflow_state_id"` | The ID of the workflow state the story is currently in. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/entity-templates`

#### Epic

| Field | Description |
| --- | --- |
| `"after_id"` | The ID of the Epic we want to move this Epic after. |
| `"app_url"` | The Shortcut application url for the Epic. |
| `"archived"` | True/false boolean that indicates whether the Epic is archived or not. |
| `"associated_groups"` | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `"before_id"` | The ID of the Epic we want to move this Epic before. |
| `"comments"` | A nested array of threaded comments. |
| `"completed"` | A true/false boolean indicating if the Epic has been completed. |
| `"completed_at"` | The time/date the Epic was completed. |
| `"completed_at_override"` | A manual override for the time/date the Epic was completed. |
| `"converted_from_story_id"` | The ID of the Story that was converted to an Epic. |
| `"created_at"` | The time/date the Epic was created. |
| `"deadline"` | The Epic's deadline. |
| `"description"` | The Epic's description. |
| `"entity_type"` | A string description of this resource. |
| `"epic_state_id"` | The ID of the Epic State. |
| `"external_id"` | This field can be set to another unique ID. |
| `"follower_ids"` | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `"global_id"` |  |
| `"group_id"` | `Deprecated` The ID of the group to associate with the epic. |
| `"group_ids"` | An array of UUIDS for Groups to which this Epic is related. |
| `"group_mention_ids"` | An array of Group IDs that have been mentioned in the Epic description. |
| `"health"` | The current health status of the Epic. |
| `"id"` | The unique ID of the Epic. |
| `"label_ids"` | An array of Label ids attached to the Epic. |
| `"labels"` | An array of Labels attached to the Epic. |
| `"member_mention_ids"` | An array of Member IDs that have been mentioned in the Epic description. |
| `"mention_ids"` | `Deprecated:` use `member_mention_ids`. |
| `"milestone_id"` | `Deprecated` The ID of the Objective this Epic is related to. |
| `"name"` | The name of the Epic. |
| `"objective_ids"` | An array of IDs for Objectives to which this epic is related. |
| `"owner_ids"` | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `"planned_start_date"` | The Epic's planned start date. |
| `"position"` | The Epic's relative position in the Epic workflow state. |
| `"productboard_id"` | The ID of the associated productboard feature. |
| `"productboard_name"` | The name of the associated productboard feature. |
| `"productboard_plugin_id"` | The ID of the associated productboard integration. |
| `"productboard_url"` | The URL of the associated productboard feature. |
| `"project_ids"` | The IDs of Projects related to this Epic. |
| `"requested_by_id"` | The ID of the Member that requested the epic. |
| `"started"` | A true/false boolean indicating if the Epic has been started. |
| `"started_at"` | The time/date the Epic was started. |
| `"started_at_override"` | A manual override for the time/date the Epic was started. |
| `"state"` | `Deprecated` The workflow state that the Epic is in. |
| `"stats"` | A group of calculated values for this Epic. |
| `"stories_without_projects"` | The number of stories in this epic which are not associated with a project. |
| `"updated_at"` | The time/date the Epic was updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/epics`

#### EpicPaginatedResult

| Field | Description |
| --- | --- |
| `"app_url"` | The Shortcut application url for the Epic. |
| `"archived"` | True/false boolean that indicates whether the Epic is archived or not. |
| `"associated_groups"` | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `"completed"` | A true/false boolean indicating if the Epic has been completed. |
| `"completed_at"` | The time/date the Epic was completed. |
| `"completed_at_override"` | A manual override for the time/date the Epic was completed. |
| `"created_at"` | The time/date the Epic was created. |
| `"deadline"` | The Epic's deadline. |
| `"description"` | The Epic's description. |
| `"entity_type"` | A string description of this resource. |
| `"epic_state_id"` | The ID of the Epic State. |
| `"external_id"` | This field can be set to another unique ID. |
| `"follower_ids"` | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `"global_id"` |  |
| `"group_id"` | `Deprecated` The ID of the group to associate with the epic. |
| `"group_ids"` | An array of UUIDS for Groups to which this Epic is related. |
| `"group_mention_ids"` | An array of Group IDs that have been mentioned in the Epic description. |
| `"id"` | The unique ID of the Epic. |
| `"label_ids"` | An array of Label ids attached to the Epic. |
| `"labels"` | An array of Labels attached to the Epic. |
| `"member_mention_ids"` | An array of Member IDs that have been mentioned in the Epic description. |
| `"mention_ids"` | `Deprecated:` use `member_mention_ids`. |
| `"milestone_id"` | `Deprecated` The ID of the Objective this Epic is related to. |
| `"name"` | The name of the Epic. |
| `"objective_ids"` | An array of IDs for Objectives to which this epic is related. |
| `"owner_ids"` | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `"planned_start_date"` | The Epic's planned start date. |
| `"position"` | The Epic's relative position in the Epic workflow state. |
| `"productboard_id"` | The ID of the associated productboard feature. |
| `"productboard_name"` | The name of the associated productboard feature. |
| `"productboard_plugin_id"` | The ID of the associated productboard integration. |
| `"productboard_url"` | The URL of the associated productboard feature. |
| `"project_ids"` | The IDs of Projects related to this Epic. |
| `"requested_by_id"` | The ID of the Member that requested the epic. |
| `"started"` | A true/false boolean indicating if the Epic has been started. |
| `"started_at"` | The time/date the Epic was started. |
| `"started_at_override"` | A manual override for the time/date the Epic was started. |
| `"state"` | `Deprecated` The workflow state that the Epic is in. |
| `"stats"` | A group of calculated values for this Epic. |
| `"stories_without_projects"` | The number of stories in this epic which are not associated with a project. |
| `"updated_at"` | The time/date the Epic was updated. |

Operations: List.

API path: `/api/v3/epics/paginated`

#### EpicUnlinkProductboard

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create.

API path: `/api/v3/epics/{epic-public-id}/unlink-productboard`

#### EpicWorkflow

| Field | Description |
| --- | --- |
| `"color"` | The hex color for this Epic State. |
| `"created_at"` | The time/date the Epic State was created. |
| `"description"` | The description of what sort of Epics belong in that Epic State. |
| `"entity_type"` | A string description of this resource. |
| `"global_id"` |  |
| `"id"` | The unique ID of the Epic State. |
| `"name"` | The Epic State's name. |
| `"position"` | The position that the Epic State is in, starting with 0 at the left. |
| `"type"` | The type of Epic State (Unstarted, Started, or Done) |
| `"updated_at"` | When the Epic State was last updated. |

Operations: List.

API path: `/api/v3/epic-workflow`

#### Group

| Field | Description |
| --- | --- |
| `"app_url"` | The Shortcut application url for the Group. |
| `"archived"` | Whether or not the Group is archived. |
| `"color"` | The hex color to be displayed with the Group (for example, "#ff0000"). |
| `"color_key"` | The color key to be displayed with the Group. |
| `"created_at"` | The instant when this group was created. |
| `"default_workflow_id"` | The ID of the default workflow for stories created in this group. |
| `"description"` | The description of the Group. |
| `"display_icon"` | Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application. |
| `"display_icon_id"` | The Icon id for the avatar of this Group. |
| `"entity_type"` | A string description of this resource. |
| `"global_id"` |  |
| `"id"` | The id of the Group. |
| `"member_ids"` | The Member IDs contain within the Group. |
| `"mention_name"` | The mention name of the Group. |
| `"name"` | The name of the Group. |
| `"num_epics_started"` | The number of epics assigned to the group which are in the started workflow state. |
| `"num_stories"` | The total number of stories assigned to the group. |
| `"num_stories_backlog"` | The number of stories assigned to the group which are in a backlog workflow state. |
| `"num_stories_started"` | The number of stories assigned to the group which are in a started workflow state. |
| `"updated_at"` | The last instant when this group was updated. |
| `"workflow_ids"` | The Workflow IDs contained within the Group. |

Operations: Create, List, Load, Update.

API path: `/api/v3/groups`

#### Health

| Field | Description |
| --- | --- |
| `"author_id"` | The ID of the permission who created or updated the Health record. |
| `"created_at"` | The time that the Health record was created. |
| `"entity_type"` | A string description of this resource. |
| `"epic_id"` | The ID of the Epic associated with this Health record. |
| `"id"` | The unique ID of the Health record. |
| `"objective_id"` | The ID of the Objective associated with this Health record. |
| `"status"` | The health status of the Epic or Objective. |
| `"text"` | The text of the Health record. |
| `"updated_at"` | The time that the Health record was updated. |

Operations: Create, List, Load, Update.

API path: `/api/v3/epics/{epic-public-id}/health`

#### History

| Field | Description |
| --- | --- |
| `"actions"` | An array of actions that were performed for the change. |
| `"actor_name"` | The name of the actor that performed the action, if it can be determined. |
| `"automation_id"` | The ID of the automation that performed the change. |
| `"changed_at"` | The date when the change occurred. |
| `"external_id"` | The ID of the webhook that handled the change. |
| `"id"` | The ID representing the change for the story. |
| `"member_id"` | The ID of the member who performed the change. |
| `"primary_id"` | The ID of the primary entity that has changed, if applicable. |
| `"references"` | An array of objects affected by the change. |
| `"version"` | The version of the change format. |
| `"webhook_id"` | The ID of the webhook that handled the change. |

Operations: List.

API path: `/api/v3/stories/{story-public-id}/history`

#### Iteration

| Field | Description |
| --- | --- |
| `"app_url"` | The Shortcut application url for the Iteration. |
| `"associated_groups"` | An array containing Group IDs and Group-owned story counts for the Iteration's associated groups. |
| `"created_at"` | The instant when this iteration was created. |
| `"description"` | The description of the iteration. |
| `"end_date"` | The date this iteration ends. |
| `"entity_type"` | A string description of this resource |
| `"follower_ids"` | An array of UUIDs for any Members listed as Followers. |
| `"global_id"` |  |
| `"group_ids"` | An array of UUIDs for any Groups you want to add as Followers. |
| `"group_mention_ids"` | An array of Group IDs that have been mentioned in the Story description. |
| `"id"` | The ID of the iteration. |
| `"label_ids"` | An array of label ids attached to the iteration. |
| `"labels"` | An array of labels attached to the iteration. |
| `"member_mention_ids"` | An array of Member IDs that have been mentioned in the Story description. |
| `"mention_ids"` | `Deprecated:` use `member_mention_ids`. |
| `"name"` | The name of the iteration. |
| `"start_date"` | The date this iteration begins. |
| `"stats"` | A group of calculated values for this Iteration. |
| `"status"` | The status of the iteration. |
| `"updated_at"` | The instant when this iteration was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/iterations`

#### KeyResult

| Field | Description |
| --- | --- |
| `"current_observed_value"` | The starting value of the Key Result. |
| `"current_target_value"` | The starting value of the Key Result. |
| `"id"` | The ID of the Key Result. |
| `"initial_observed_value"` | The starting value of the Key Result. |
| `"name"` | The name of the Key Result. |
| `"objective_id"` | The Objective to which this Key Result belongs. |
| `"observed_value"` | The starting value of the Key Result. |
| `"progress"` | The integer percentage of progress toward completion of the Key Result. |
| `"target_value"` | The starting value of the Key Result. |
| `"type"` | The type of the Key Result (numeric, percent, or boolean). |

Operations: Load, Update.

API path: `/api/v3/key-results/{key-result-public-id}`

#### Label

| Field | Description |
| --- | --- |
| `"app_url"` | The Shortcut application url for the Label. |
| `"archived"` | A true/false boolean indicating if the Label has been archived. |
| `"color"` | The hex color to be displayed with the Label (for example, "#ff0000"). |
| `"created_at"` | The time/date that the Label was created. |
| `"description"` | The description of the new Label. |
| `"entity_type"` | A string description of this resource. |
| `"external_id"` | This field can be set to another unique ID. |
| `"global_id"` |  |
| `"id"` | The unique ID of the Label. |
| `"name"` | The name of the new Label. |
| `"num_epics"` | The total number of Epics with this Label. |
| `"num_epics_completed"` | The number of completed Epics associated with this Label. |
| `"num_epics_in_progress"` | The number of in progress epics associated with this label. |
| `"num_epics_total"` | The total number of Epics associated with this Label. |
| `"num_epics_unstarted"` | The number of unstarted epics associated with this label. |
| `"num_points_backlog"` | The total number of backlog points with this Label. |
| `"num_points_completed"` | The total number of completed points with this Label. |
| `"num_points_in_progress"` | The total number of in-progress points with this Label. |
| `"num_points_total"` | The total number of points with this Label. |
| `"num_points_unstarted"` | The total number of unstarted points with this Label. |
| `"num_related_documents"` | The total number of Documents associated this Label. |
| `"num_stories_backlog"` | The total number of stories backlog Stories with this Label. |
| `"num_stories_completed"` | The total number of completed Stories with this Label. |
| `"num_stories_in_progress"` | The total number of in-progress Stories with this Label. |
| `"num_stories_total"` | The total number of Stories with this Label. |
| `"num_stories_unestimated"` | The total number of Stories with no point estimate with this Label. |
| `"num_stories_unstarted"` | The total number of stories unstarted Stories with this Label. |
| `"stats"` | A group of calculated values for this Label. |
| `"updated_at"` | The time/date that the Label was updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/labels`

#### LinkedFile

| Field | Description |
| --- | --- |
| `"content_type"` | The content type of the image (e.g. |
| `"created_at"` | The time/date the LinkedFile was created. |
| `"description"` | The description of the file. |
| `"entity_type"` | A string description of this resource. |
| `"group_mention_ids"` | The groups that are mentioned in the description of the file. |
| `"id"` | The unique identifier for the file. |
| `"member_mention_ids"` | The members that are mentioned in the description of the file. |
| `"mention_ids"` | `Deprecated:` use `member_mention_ids`. |
| `"name"` | The name of the linked file. |
| `"size"` | The filesize, if the integration provided it. |
| `"story_id"` | The ID of the linked story. |
| `"story_ids"` | The IDs of the stories this file is attached to. |
| `"thumbnail_url"` | The URL of the file thumbnail, if the integration provided it. |
| `"type"` | The integration type (e.g. |
| `"updated_at"` | The time/date the LinkedFile was updated. |
| `"uploader_id"` | The UUID of the member that uploaded the file. |
| `"url"` | The URL of the file. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/linked-files`

#### Member

| Field | Description |
| --- | --- |
| `"created_at"` | The time/date the Member was created. |
| `"created_without_invite"` | Whether this member was created as a placeholder entity. |
| `"disabled"` | True/false boolean indicating whether the Member has been disabled within the Workspace. |
| `"entity_type"` | A string description of this resource. |
| `"global_id"` |  |
| `"group_ids"` | The Member's group ids |
| `"id"` | The Member's ID in Shortcut. |
| `"installation_id"` | Only set for agents. |
| `"is_owner"` |  |
| `"mention_name"` |  |
| `"name"` |  |
| `"organization2"` |  |
| `"profile"` | A group of Member profile details. |
| `"replaced_by"` | The id of the member that replaces this one when merged. |
| `"role"` | The Member's role in the Workspace. |
| `"state"` | The user state, one of partial, full, disabled, or imported. |
| `"updated_at"` | The time/date the Member was last updated. |
| `"workspace2"` |  |

Operations: List, Load.

API path: `/api/v3/members`

#### Milestone

| Field | Description |
| --- | --- |
| `"after_id"` | The ID of the Milestone we want to move this Milestone after. |
| `"app_url"` | The Shortcut application url for the Milestone. |
| `"archived"` | A boolean indicating whether the Milestone has been archived or not. |
| `"before_id"` | The ID of the Milestone we want to move this Milestone before. |
| `"categories"` | An array of Categories attached to the Milestone. |
| `"completed"` | A true/false boolean indicating if the Milestone has been completed. |
| `"completed_at"` | The time/date the Milestone was completed. |
| `"completed_at_override"` | A manual override for the time/date the Milestone was completed. |
| `"created_at"` | The time/date the Milestone was created. |
| `"description"` | The Milestone's description. |
| `"entity_type"` | A string description of this resource. |
| `"global_id"` |  |
| `"id"` | The unique ID of the Milestone. |
| `"key_result_ids"` | The IDs of the Key Results associated with the Objective. |
| `"name"` | The name of the Milestone. |
| `"position"` | A number representing the position of the Milestone in relation to every other Milestone within the Workspace. |
| `"started"` | A true/false boolean indicating if the Milestone has been started. |
| `"started_at"` | The time/date the Milestone was started. |
| `"started_at_override"` | A manual override for the time/date the Milestone was started. |
| `"state"` | The workflow state that the Milestone is in. |
| `"stats"` | A group of calculated values for this Milestone. |
| `"updated_at"` | The time/date the Milestone was updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/milestones`

#### Objectif

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/api/v3/objectives/{objective-public-id}`

#### Objective

| Field | Description |
| --- | --- |
| `"after_id"` | The ID of the Objective we want to move this Objective after. |
| `"app_url"` | The Shortcut application url for the Objective. |
| `"archived"` | A boolean indicating whether the Objective has been archived or not. |
| `"before_id"` | The ID of the Objective we want to move this Objective before. |
| `"categories"` | An array of Categories attached to the Objective. |
| `"completed"` | A true/false boolean indicating if the Objectivehas been completed. |
| `"completed_at"` | The time/date the Objective was completed. |
| `"completed_at_override"` | A manual override for the time/date the Objective was completed. |
| `"created_at"` | The time/date the Objective was created. |
| `"description"` | The Objective's description. |
| `"entity_type"` | A string description of this resource. |
| `"global_id"` |  |
| `"id"` | The unique ID of the Objective. |
| `"key_result_ids"` | The IDs of the Key Results associated with the Objective. |
| `"name"` | The name of the Objective. |
| `"position"` | A number representing the position of the Objective in relation to every other Objective within the Workspace. |
| `"started"` | A true/false boolean indicating if the Objective has been started. |
| `"started_at"` | The time/date the Objective was started. |
| `"started_at_override"` | A manual override for the time/date the Objective was started. |
| `"state"` | The workflow state that the Objective is in. |
| `"stats"` | A group of calculated values for this Objective. |
| `"updated_at"` | The time/date the Objective was updated. |

Operations: Create, List, Load, Update.

API path: `/api/v3/objectives`

#### Project

| Field | Description |
| --- | --- |
| `"abbreviation"` | The Project abbreviation used in Story summaries. |
| `"app_url"` | The Shortcut application url for the Project. |
| `"archived"` | True/false boolean indicating whether the Project is in an Archived state. |
| `"color"` | The color associated with the Project in the Shortcut member interface. |
| `"created_at"` | The time/date that the Project was created. |
| `"days_to_thermometer"` | The number of days before the thermometer appears in the Story summary. |
| `"description"` | The description of the Project. |
| `"entity_type"` | A string description of this resource. |
| `"external_id"` | This field can be set to another unique ID. |
| `"follower_ids"` | An array of UUIDs for any Members listed as Followers. |
| `"global_id"` | The Global ID of the Project. |
| `"id"` | The unique ID of the Project. |
| `"iteration_length"` | The number of weeks per iteration in this Project. |
| `"name"` | The name of the Project |
| `"show_thermometer"` | Configuration to enable or disable thermometers in the Story summary. |
| `"start_time"` | The date at which the Project was started. |
| `"stats"` | A group of calculated values for this Project. |
| `"team_id"` | The ID of the team the project belongs to. |
| `"updated_at"` | The time/date that the Project was last updated. |
| `"workflow_id"` | The ID of the workflow the project belongs to. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/projects`

#### Repository

| Field | Description |
| --- | --- |
| `"created_at"` | The time/date the Repository was created. |
| `"entity_type"` | A string description of this resource. |
| `"external_id"` | The VCS unique identifier for the Repository. |
| `"full_name"` | The full name of the VCS repository. |
| `"id"` | The ID associated to the VCS repository in Shortcut. |
| `"name"` | The shorthand name of the VCS repository. |
| `"type"` | The VCS provider for the Repository. |
| `"updated_at"` | The time/date the Repository was updated. |
| `"url"` | The URL of the Repository. |

Operations: List, Load.

API path: `/api/v3/repositories`

#### Search

| Field | Description |
| --- | --- |
| `"epics"` | The results of the Epic search query. |
| `"iterations"` | The results of the Iteration search query. |
| `"milestones"` | The results of the Objective search query. |
| `"stories"` | The results of the Story search query. |

Operations: Load.

API path: `/api/v3/search`

#### Story

| Field | Description |
| --- | --- |
| `"after_id"` | The ID of the story we want to move this story after. |
| `"app_url"` | The Shortcut application url for the Story. |
| `"archived"` | True if the story has been archived or not. |
| `"before_id"` | The ID of the story we want to move this story before. |
| `"blocked"` | A true/false boolean indicating if the Story is currently blocked. |
| `"blocker"` | A true/false boolean indicating if the Story is currently a blocker of another story. |
| `"branch_ids"` | An array of IDs of Branches attached to the story. |
| `"branches"` | An array of Git branches attached to the story. |
| `"comment_ids"` | An array of IDs of Comments attached to the story. |
| `"comments"` | An array of comments attached to the story. |
| `"commit_ids"` | An array of IDs of Commits attached to the story. |
| `"commits"` | An array of commits attached to the story. |
| `"completed"` | A true/false boolean indicating if the Story has been completed. |
| `"completed_at"` | The time/date the Story was completed. |
| `"completed_at_override"` | A manual override for the time/date the Story was completed. |
| `"created_at"` | The time/date the Story was created. |
| `"custom_fields"` | An array of CustomField value assertions for the story. |
| `"custom_fields_add"` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `"custom_fields_remove"` | A map specifying a CustomField ID. |
| `"cycle_time"` | The cycle time (in seconds) of this story when complete. |
| `"deadline"` | The due date of the story. |
| `"description"` | The description of the story. |
| `"entity_type"` | A string description of this resource. |
| `"epic_id"` | The ID of the epic the story belongs to. |
| `"estimate"` | The numeric point estimate of the story. |
| `"external_id"` | This field can be set to another unique ID. |
| `"external_links"` | An array of external links (strings) associated with a Story |
| `"external_links_add"` | An array of External Links associated with this story. |
| `"external_links_remove"` | An array of External Links associated with this story. |
| `"file_ids"` | An array of IDs of files attached to the story. |
| `"file_ids_add"` | An array of IDs of files attached to the story in addition to files from the template. |
| `"file_ids_remove"` | An array of IDs of files removed from files from the template. |
| `"files"` | An array of files attached to the story. |
| `"follower_ids"` | An array of UUIDs for any Members listed as Followers. |
| `"follower_ids_add"` | The UUIDs of the new followers to be added in addition to followers from the template. |
| `"follower_ids_remove"` | The UUIDs of the new followers to be removed from followers from the template. |
| `"formatted_vcs_branch_name"` | The formatted branch name for this story. |
| `"global_id"` |  |
| `"group_id"` | The ID of the group associated with the story. |
| `"group_mention_ids"` | An array of Group IDs that have been mentioned in the Story description. |
| `"id"` | The unique ID of the Story. |
| `"iteration_id"` | The ID of the iteration the story belongs to. |
| `"label_ids"` | An array of label ids attached to the story. |
| `"labels"` | An array of labels attached to the story. |
| `"labels_add"` | An array of labels attached to the story in addition to the labels provided by the template. |
| `"labels_remove"` | An array of labels to remove from the labels provided by the template. |
| `"lead_time"` | The lead time (in seconds) of this story when complete. |
| `"linked_file_ids"` | An array of IDs of linked files attached to the story. |
| `"linked_file_ids_add"` | An array of IDs of linked files attached to the story in addition to files from the template. |
| `"linked_file_ids_remove"` | An array of IDs of linked files removed from files from the template. |
| `"linked_files"` | An array of linked files attached to the story. |
| `"member_mention_ids"` | An array of Member IDs that have been mentioned in the Story description. |
| `"mention_ids"` | `Deprecated:` use `member_mention_ids`. |
| `"move_to"` | One of "first" or "last". |
| `"moved_at"` | The time/date the Story was last changed workflow-state. |
| `"name"` | The name of the story. |
| `"num_tasks_completed"` | The number of tasks on the story which are complete. |
| `"owner_ids"` | An array of UUIDs of the owners of this story. |
| `"owner_ids_add"` | The UUIDs of the new owners to be added in addition to owners from the template. |
| `"owner_ids_remove"` | The UUIDs of the new owners to be removed from owners from the template. |
| `"parent_story_id"` | The id of the parent story to associate with this story. |
| `"position"` | A number representing the position of the story in relation to every other story in the current project. |
| `"previous_iteration_ids"` | The IDs of the iteration the story belongs to. |
| `"project_id"` | The ID of the project the story belongs to. |
| `"pull_request_ids"` | An array of IDs of Pull/Merge Requests attached to the story. |
| `"pull_requests"` | An array of Pull/Merge Requests attached to the story. |
| `"requested_by_id"` | The ID of the Member that requested the story. |
| `"source_task_id"` | Given this story was converted from a task in another story, this is the original task ID that was converted to this story. |
| `"started"` | A true/false boolean indicating if the Story has been started. |
| `"started_at"` | The time/date the Story was started. |
| `"started_at_override"` | A manual override for the time/date the Story was started. |
| `"stats"` | The stats object for Stories |
| `"story_links"` | An array of story links attached to the Story. |
| `"story_template_id"` | The ID of the story template used to create this story, or null if not created using a template. |
| `"story_type"` | The type of story (feature, bug, chore). |
| `"sub_task_story_ids"` |  |
| `"sub_tasks"` | A list of either params to create a new sub-task or link an existing story as a sub-task |
| `"synced_item"` | The synced item for the story. |
| `"task_ids"` | An array of IDs of Tasks attached to the story. |
| `"tasks"` | An array of tasks connected to the story. |
| `"updated_at"` | The time/date the Story was updated. |
| `"workflow_id"` | The ID of the workflow the story belongs to. |
| `"workflow_state_id"` | The ID of the workflow state the story is currently in. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/stories`

#### StoryComment

| Field | Description |
| --- | --- |
| `"app_url"` | The Shortcut application url for the Comment. |
| `"author_id"` | The unique ID of the Member who is the Comment's author. |
| `"blocker"` | Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment. |
| `"created_at"` | The time/date when the Comment was created. |
| `"deleted"` | True/false boolean indicating whether the Comment has been deleted. |
| `"entity_type"` | A string description of this resource. |
| `"external_id"` | This field can be set to another unique ID. |
| `"group_mention_ids"` | The unique IDs of the Group who are mentioned in the Comment. |
| `"id"` | The unique ID of the Comment. |
| `"linked_to_slack"` | Whether the Comment is currently the root of a thread that is linked to Slack. |
| `"member_mention_ids"` | The unique IDs of the Member who are mentioned in the Comment. |
| `"mention_ids"` | `Deprecated:` use `member_mention_ids`. |
| `"parent_id"` | The ID of the parent Comment this Comment is threaded under. |
| `"position"` | The Comments numerical position in the list from oldest to newest. |
| `"reactions"` | A set of Reactions to this Comment. |
| `"story_id"` | The ID of the Story on which the Comment appears. |
| `"text"` | The text of the Comment. |
| `"unblocks_parent"` | Marks the comment as an unblocker to its blocker parent. |
| `"updated_at"` | The time/date when the Comment was updated. |

Operations: Create, List, Load, Update.

API path: `/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack`

#### StoryLink

| Field | Description |
| --- | --- |
| `"created_at"` | The time/date when the Story Link was created. |
| `"entity_type"` | A string description of this resource. |
| `"id"` | The unique identifier of the Story Link. |
| `"object_id"` | The ID of the object Story. |
| `"subject_id"` | The ID of the subject Story. |
| `"subject_workflow_state_id"` | The workflow state of the "subject" story. |
| `"updated_at"` | The time/date when the Story Link was last updated. |
| `"verb"` | How the subject Story acts on the object Story. |

Operations: Create, Load, Remove, Update.

API path: `/api/v3/story-links`

#### StoryReaction

| Field | Description |
| --- | --- |
| `"emoji"` | The emoji short-code to add / remove. |

Operations: Create, Remove.

API path: `/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions`

#### StorySlim

| Field | Description |
| --- | --- |
| `"after_id"` | The ID of the story that the stories are to be moved below. |
| `"archived"` | A true/false boolean indicating whether the Story is in archived state. |
| `"before_id"` | The ID of the story that the stories are to be moved before. |
| `"completed_at_end"` | Stories should have been completed on or before this date. |
| `"completed_at_start"` | Stories should have been completed on or after this date. |
| `"created_at_end"` | Stories should have been created on or before this date. |
| `"created_at_start"` | Stories should have been created on or after this date. |
| `"custom_fields_add"` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `"custom_fields_remove"` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `"deadline"` | The due date of the story. |
| `"deadline_end"` | Stories should have a deadline on or before this date. |
| `"deadline_start"` | Stories should have a deadline on or after this date. |
| `"epic_id"` | The Epic IDs that may be associated with the Stories. |
| `"epic_ids"` | The Epic IDs that may be associated with the Stories. |
| `"estimate"` | The number of estimate points associate with the Stories. |
| `"external_id"` | An ID or URL that references an external resource. |
| `"external_links"` | An array of External Links associated with this story. |
| `"follower_ids_add"` | The UUIDs of the new followers to be added. |
| `"follower_ids_remove"` | The UUIDs of the followers to be removed. |
| `"group_id"` | The Group ID that is associated with the Stories |
| `"group_ids"` | The Group IDs that are associated with the Stories |
| `"includes_description"` | Whether to include the story description in the response. |
| `"iteration_id"` | The Iteration ID that may be associated with the Stories. |
| `"iteration_ids"` | The Iteration IDs that may be associated with the Stories. |
| `"label_ids"` | The Label IDs that may be associated with the Stories. |
| `"label_name"` | The name of any associated Labels. |
| `"labels_add"` | An array of labels to be added. |
| `"labels_remove"` | An array of labels to be removed. |
| `"move_to"` | One of "first" or "last". |
| `"owner_id"` | An array of UUIDs for any Users who may be Owners of the Stories. |
| `"owner_ids"` | An array of UUIDs for any Users who may be Owners of the Stories. |
| `"owner_ids_add"` | The UUIDs of the new owners to be added. |
| `"owner_ids_remove"` | The UUIDs of the owners to be removed. |
| `"project_id"` | The IDs for the Projects the Stories may be assigned to. |
| `"project_ids"` | The IDs for the Projects the Stories may be assigned to. |
| `"requested_by_id"` | The UUID of any Users who may have requested the Stories. |
| `"stories"` | An array of stories to be created. |
| `"story_ids"` | The Ids of the Stories you wish to update. |
| `"story_type"` | The type of Stories that you want returned. |
| `"updated_at_end"` | Stories should have been updated on or before this date. |
| `"updated_at_start"` | Stories should have been updated on or after this date. |
| `"workflow_state_id"` | The unique IDs of the specific Workflow States that the Stories should be in. |
| `"workflow_state_types"` | The type of Workflow State the Stories may be in. |

Operations: Create, Update.

API path: `/api/v3/stories/bulk`

#### Task

| Field | Description |
| --- | --- |
| `"after_id"` | Move task after this task ID. |
| `"before_id"` | Move task before this task ID. |
| `"complete"` | True/false boolean indicating whether the Task has been completed. |
| `"completed_at"` | The time/date the Task was completed. |
| `"created_at"` | The time/date the Task was created. |
| `"description"` | Full text of the Task. |
| `"entity_type"` | A string description of this resource. |
| `"external_id"` | This field can be set to another unique ID. |
| `"global_id"` |  |
| `"group_mention_ids"` | An array of UUIDs of Groups mentioned in this Task. |
| `"id"` | The unique ID of the Task. |
| `"member_mention_ids"` | An array of UUIDs of Members mentioned in this Task. |
| `"mention_ids"` | `Deprecated:` use `member_mention_ids`. |
| `"owner_ids"` | An array of UUIDs of the Owners of this Task. |
| `"position"` | The number corresponding to the Task's position within a list of Tasks on a Story. |
| `"story_id"` | The unique identifier of the parent Story. |
| `"updated_at"` | The time/date the Task was updated. |

Operations: Create, Load, Remove, Update.

API path: `/api/v3/stories/{story-public-id}/tasks`

#### ThreadedComment

| Field | Description |
| --- | --- |
| `"app_url"` | The Shortcut application url for the Comment. |
| `"author_id"` | The unique ID of the Member that authored the Comment. |
| `"comments"` | A nested array of threaded comments. |
| `"created_at"` | The time/date the Comment was created. |
| `"deleted"` | True/false boolean indicating whether the Comment is deleted. |
| `"entity_type"` | A string description of this resource. |
| `"external_id"` | This field can be set to another unique ID. |
| `"group_mention_ids"` | An array of Group IDs that have been mentioned in this Comment. |
| `"id"` | The unique ID of the Comment. |
| `"member_mention_ids"` | An array of Member IDs that have been mentioned in this Comment. |
| `"mention_ids"` | `Deprecated:` use `member_mention_ids`. |
| `"text"` | The text of the Comment. |
| `"updated_at"` | The time/date the Comment was updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/epics/{epic-public-id}/comments/{comment-public-id}`

#### UploadedFile

| Field | Description |
| --- | --- |
| `"content_type"` | Free form string corresponding to a text or image file. |
| `"created_at"` | The time/date that the file was created. |
| `"description"` | The description of the file. |
| `"entity_type"` | A string description of this resource. |
| `"external_id"` | This field can be set to another unique ID. |
| `"filename"` | The name assigned to the file in Shortcut upon upload. |
| `"group_mention_ids"` | The unique IDs of the Groups who are mentioned in the file description. |
| `"id"` | The unique ID for the file. |
| `"member_mention_ids"` | The unique IDs of the Members who are mentioned in the file description. |
| `"mention_ids"` | `Deprecated:` use `member_mention_ids`. |
| `"name"` | The optional User-specified name of the file. |
| `"size"` | The size of the file. |
| `"story_ids"` | The unique IDs of the Stories associated with this file. |
| `"thumbnail_url"` | The url where the thumbnail of the file can be found in Shortcut. |
| `"updated_at"` | The time/date that the file was updated. |
| `"uploader_id"` | The unique ID of the Member who uploaded the file. |
| `"url"` | The URL for the file. |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/files`

#### Webhook

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"secret"` |  |
| `"webhook_url"` |  |

Operations: Create, Load, Remove.

API path: `/api/v3/integrations/webhook`

#### Workflow

| Field | Description |
| --- | --- |
| `"auto_assign_owner"` | Indicates if an owner is automatically assigned when an unowned story is started. |
| `"created_at"` | The date the Workflow was created. |
| `"default_state_id"` | The unique ID of the default state that new Stories are entered into. |
| `"description"` | A description of the workflow. |
| `"entity_type"` | A string description of this resource. |
| `"id"` | The unique ID of the Workflow. |
| `"name"` | The name of the workflow. |
| `"project_ids"` | An array of IDs of projects within the Workflow. |
| `"states"` | A map of the states in this Workflow. |
| `"team_id"` | The ID of the team the workflow belongs to. |
| `"updated_at"` | The date the Workflow was updated. |

Operations: List, Load.

API path: `/api/v3/workflows`



## Entities


### Bulk

Create an instance: `bulk := client.Bulk(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Category

Create an instance: `category := client.Category(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | A true/false boolean indicating if the Category has been archived. |
| `color` | `string` | The hex color to be displayed with the Category (for example, "#ff0000"). |
| `created_at` | `string` | The time/date that the Category was created. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `global_id` | `string` | The Global ID of the Category. |
| `id` | `int` | The unique ID of the Category. |
| `name` | `string` | The name of the Category. |
| `type` | `string` | The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category. |
| `updated_at` | `string` | The time/date that the Category was updated. |

#### Example: Load

```go
category, err := client.Category(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(category) // the loaded record
```

#### Example: List

```go
categorys, err := client.Category(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(categorys) // the array of records
```

#### Example: Create

```go
result, err := client.Category(nil).Create(map[string]any{
    "archived": true,
    "color": "example_color",
    "created_at": "example_created_at",
    "entity_type": "example_entity_type",
    "external_id": "example_external_id",
    "global_id": "example_global_id",
    "id": 1,
    "name": "example_name",
    "type": "example_type",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Comment

Create an instance: `comment := client.Comment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### CustomField

Create an instance: `customField := client.CustomField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `string` | The ID of the CustomField we want to move this CustomField after. |
| `before_id` | `string` | The ID of the CustomField we want to move this CustomField before. |
| `canonical_name` | `string` | The canonical name for a Shortcut-defined field. |
| `created_at` | `string` | The instant when this CustomField was created. |
| `description` | `string` | A string description of the CustomField |
| `enabled` | `bool` | When true, the CustomField can be applied to entities in the Workspace. |
| `entity_type` | `string` | A string description of this resource. |
| `field_type` | `string` | The type of Custom Field, eg. |
| `fixed_position` | `bool` | When true, the CustomFieldEnumValues may not be reordered. |
| `icon_set_identifier` | `string` | A string that represents the icon that corresponds to this custom field. |
| `id` | `string` | The unique public ID for the CustomField. |
| `name` | `string` | The name of the Custom Field. |
| `position` | `int` | An integer indicating the position of this Custom Field with respect to the other CustomField |
| `story_types` | `[]any` | The types of stories this CustomField is scoped to. |
| `updated_at` | `string` | The instant when this CustomField was last updated. |
| `values` | `[]any` | A collection of legal values for a CustomField. |

#### Example: Load

```go
customField, err := client.CustomField(nil).Load(map[string]any{"id": "custom_field_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customField) // the loaded record
```

#### Example: List

```go
customFields, err := client.CustomField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customFields) // the array of records
```


### Disable

Create an instance: `disable := client.Disable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |


### DocSlim

Create an instance: `docSlim := client.DocSlim(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` | The Shortcut application url for the Doc. |
| `content` | `string` | The content for the new document |
| `id` | `string` | The public id of the Doc |
| `title` | `string` | The title for the new document |

#### Example: List

```go
docSlims, err := client.DocSlim(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(docSlims) // the array of records
```

#### Example: Create

```go
result, err := client.DocSlim(nil).Create(map[string]any{
    "app_url": "example_app_url",
    "content": "example_content",
    "id": "example_id",
    "title": "example_title",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Enable

Create an instance: `enable := client.Enable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |


### EntityTemplate

Create an instance: `entityTemplate := client.EntityTemplate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_id` | `string` | The id of the user creating this template. |
| `created_at` | `string` | The time/date when the entity template was created. |
| `custom_fields` | `[]any` | An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `string` | The due date of the story. |
| `description` | `string` | The description of the story. |
| `entity_type` | `string` | A string description of this resource. |
| `epic_id` | `int` | The ID of the epic the story belongs to. |
| `estimate` | `int` | The numeric point estimate of the story. |
| `external_links` | `[]any` | An array of external links connected to the story. |
| `files` | `[]any` | An array of files attached to the story. |
| `follower_ids` | `[]any` | An array of UUIDs for any Members listed as Followers. |
| `group_id` | `string` | The ID of the group to which the story is assigned. |
| `id` | `string` | The unique identifier for the entity template. |
| `iteration_id` | `int` | The ID of the iteration the story belongs to. |
| `label_ids` | `[]any` | An array of label ids attached to the story. |
| `labels` | `[]any` | An array of labels attached to the story. |
| `last_used_at` | `string` | The last time that someone created an entity using this template. |
| `linked_files` | `[]any` | An array of linked files attached to the story. |
| `name` | `string` | The name of the story. |
| `owner_ids` | `[]any` | An array of UUIDs of the owners of this story. |
| `project_id` | `int` | The ID of the project the story belongs to. |
| `story_contents` | `map[string]any` | A map of story attributes this template populates. |
| `story_type` | `string` | The type of story (feature, bug, chore). |
| `sub_tasks` | `[]any` | An array of sub-tasks connected to the story |
| `tasks` | `[]any` | An array of tasks connected to the story. |
| `updated_at` | `string` | The time/date when the entity template was last updated. |
| `workflow_state_id` | `int` | The ID of the workflow state the story is currently in. |

#### Example: Load

```go
entityTemplate, err := client.EntityTemplate(nil).Load(map[string]any{"id": "entity_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(entityTemplate) // the loaded record
```

#### Example: List

```go
entityTemplates, err := client.EntityTemplate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(entityTemplates) // the array of records
```

#### Example: Create

```go
result, err := client.EntityTemplate(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "id": "example_id",
    "last_used_at": "example_last_used_at",
    "story_contents": map[string]any{},
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Epic

Create an instance: `epic := client.Epic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `int` | The ID of the Epic we want to move this Epic after. |
| `app_url` | `string` | The Shortcut application url for the Epic. |
| `archived` | `bool` | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `[]any` | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `before_id` | `int` | The ID of the Epic we want to move this Epic before. |
| `comments` | `[]any` | A nested array of threaded comments. |
| `completed` | `bool` | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | `string` | The time/date the Epic was completed. |
| `completed_at_override` | `string` | A manual override for the time/date the Epic was completed. |
| `converted_from_story_id` | `int` | The ID of the Story that was converted to an Epic. |
| `created_at` | `string` | The time/date the Epic was created. |
| `deadline` | `string` | The Epic's deadline. |
| `description` | `string` | The Epic's description. |
| `entity_type` | `string` | A string description of this resource. |
| `epic_state_id` | `int` | The ID of the Epic State. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `follower_ids` | `[]any` | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `string` |  |
| `group_id` | `string` | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `[]any` | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `[]any` | An array of Group IDs that have been mentioned in the Epic description. |
| `health` | `map[string]any` | The current health status of the Epic. |
| `id` | `int` | The unique ID of the Epic. |
| `label_ids` | `[]any` | An array of Label ids attached to the Epic. |
| `labels` | `[]any` | An array of Labels attached to the Epic. |
| `member_mention_ids` | `[]any` | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `[]any` | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `int` | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `string` | The name of the Epic. |
| `objective_ids` | `[]any` | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `[]any` | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `string` | The Epic's planned start date. |
| `position` | `int` | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `string` | The ID of the associated productboard feature. |
| `productboard_name` | `string` | The name of the associated productboard feature. |
| `productboard_plugin_id` | `string` | The ID of the associated productboard integration. |
| `productboard_url` | `string` | The URL of the associated productboard feature. |
| `project_ids` | `[]any` | The IDs of Projects related to this Epic. |
| `requested_by_id` | `string` | The ID of the Member that requested the epic. |
| `started` | `bool` | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `string` | The time/date the Epic was started. |
| `started_at_override` | `string` | A manual override for the time/date the Epic was started. |
| `state` | `string` | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `map[string]any` | A group of calculated values for this Epic. |
| `stories_without_projects` | `int` | The number of stories in this epic which are not associated with a project. |
| `updated_at` | `string` | The time/date the Epic was updated. |

#### Example: Load

```go
epic, err := client.Epic(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(epic) // the loaded record
```

#### Example: List

```go
epics, err := client.Epic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(epics) // the array of records
```

#### Example: Create

```go
result, err := client.Epic(nil).Create(map[string]any{
    "app_url": "example_app_url",
    "archived": true,
    "associated_groups": []any{},
    "comments": []any{},
    "completed": true,
    "completed_at": "example_completed_at",
    "completed_at_override": "example_completed_at_override",
    "created_at": "example_created_at",
    "deadline": "example_deadline",
    "description": "example_description",
    "entity_type": "example_entity_type",
    "epic_state_id": 1,
    "external_id": "example_external_id",
    "follower_ids": []any{},
    "global_id": "example_global_id",
    "group_id": "example_group_id",
    "group_ids": []any{},
    "group_mention_ids": []any{},
    "health": map[string]any{},
    "id": 1,
    "label_ids": []any{},
    "labels": []any{},
    "member_mention_ids": []any{},
    "mention_ids": []any{},
    "milestone_id": 1,
    "name": "example_name",
    "objective_ids": []any{},
    "owner_ids": []any{},
    "planned_start_date": "example_planned_start_date",
    "position": 1,
    "productboard_id": "example_productboard_id",
    "productboard_name": "example_productboard_name",
    "productboard_plugin_id": "example_productboard_plugin_id",
    "productboard_url": "example_productboard_url",
    "project_ids": []any{},
    "requested_by_id": "example_requested_by_id",
    "started": true,
    "started_at": "example_started_at",
    "started_at_override": "example_started_at_override",
    "state": "example_state",
    "stats": map[string]any{},
    "stories_without_projects": 1,
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### EpicPaginatedResult

Create an instance: `epicPaginatedResult := client.EpicPaginatedResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` | The Shortcut application url for the Epic. |
| `archived` | `bool` | True/false boolean that indicates whether the Epic is archived or not. |
| `associated_groups` | `[]any` | An array containing Group IDs and Group-owned story counts for the Epic's associated groups. |
| `completed` | `bool` | A true/false boolean indicating if the Epic has been completed. |
| `completed_at` | `string` | The time/date the Epic was completed. |
| `completed_at_override` | `string` | A manual override for the time/date the Epic was completed. |
| `created_at` | `string` | The time/date the Epic was created. |
| `deadline` | `string` | The Epic's deadline. |
| `description` | `string` | The Epic's description. |
| `entity_type` | `string` | A string description of this resource. |
| `epic_state_id` | `int` | The ID of the Epic State. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `follower_ids` | `[]any` | An array of UUIDs for any Members you want to add as Followers on this Epic. |
| `global_id` | `string` |  |
| `group_id` | `string` | `Deprecated` The ID of the group to associate with the epic. |
| `group_ids` | `[]any` | An array of UUIDS for Groups to which this Epic is related. |
| `group_mention_ids` | `[]any` | An array of Group IDs that have been mentioned in the Epic description. |
| `id` | `int` | The unique ID of the Epic. |
| `label_ids` | `[]any` | An array of Label ids attached to the Epic. |
| `labels` | `[]any` | An array of Labels attached to the Epic. |
| `member_mention_ids` | `[]any` | An array of Member IDs that have been mentioned in the Epic description. |
| `mention_ids` | `[]any` | `Deprecated:` use `member_mention_ids`. |
| `milestone_id` | `int` | `Deprecated` The ID of the Objective this Epic is related to. |
| `name` | `string` | The name of the Epic. |
| `objective_ids` | `[]any` | An array of IDs for Objectives to which this epic is related. |
| `owner_ids` | `[]any` | An array of UUIDs for any members you want to add as Owners on this new Epic. |
| `planned_start_date` | `string` | The Epic's planned start date. |
| `position` | `int` | The Epic's relative position in the Epic workflow state. |
| `productboard_id` | `string` | The ID of the associated productboard feature. |
| `productboard_name` | `string` | The name of the associated productboard feature. |
| `productboard_plugin_id` | `string` | The ID of the associated productboard integration. |
| `productboard_url` | `string` | The URL of the associated productboard feature. |
| `project_ids` | `[]any` | The IDs of Projects related to this Epic. |
| `requested_by_id` | `string` | The ID of the Member that requested the epic. |
| `started` | `bool` | A true/false boolean indicating if the Epic has been started. |
| `started_at` | `string` | The time/date the Epic was started. |
| `started_at_override` | `string` | A manual override for the time/date the Epic was started. |
| `state` | `string` | `Deprecated` The workflow state that the Epic is in. |
| `stats` | `map[string]any` | A group of calculated values for this Epic. |
| `stories_without_projects` | `int` | The number of stories in this epic which are not associated with a project. |
| `updated_at` | `string` | The time/date the Epic was updated. |

#### Example: List

```go
epicPaginatedResults, err := client.EpicPaginatedResult(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(epicPaginatedResults) // the array of records
```


### EpicUnlinkProductboard

Create an instance: `epicUnlinkProductboard := client.EpicUnlinkProductboard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```go
result, err := client.EpicUnlinkProductboard(nil).Create(map[string]any{
    "id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### EpicWorkflow

Create an instance: `epicWorkflow := client.EpicWorkflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `color` | `string` | The hex color for this Epic State. |
| `created_at` | `string` | The time/date the Epic State was created. |
| `description` | `string` | The description of what sort of Epics belong in that Epic State. |
| `entity_type` | `string` | A string description of this resource. |
| `global_id` | `string` |  |
| `id` | `int` | The unique ID of the Epic State. |
| `name` | `string` | The Epic State's name. |
| `position` | `int` | The position that the Epic State is in, starting with 0 at the left. |
| `type` | `string` | The type of Epic State (Unstarted, Started, or Done) |
| `updated_at` | `string` | When the Epic State was last updated. |

#### Example: List

```go
epicWorkflows, err := client.EpicWorkflow(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(epicWorkflows) // the array of records
```


### Group

Create an instance: `group := client.Group(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` | The Shortcut application url for the Group. |
| `archived` | `bool` | Whether or not the Group is archived. |
| `color` | `string` | The hex color to be displayed with the Group (for example, "#ff0000"). |
| `color_key` | `string` | The color key to be displayed with the Group. |
| `created_at` | `string` | The instant when this group was created. |
| `default_workflow_id` | `int` | The ID of the default workflow for stories created in this group. |
| `description` | `string` | The description of the Group. |
| `display_icon` | `map[string]any` | Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application. |
| `display_icon_id` | `string` | The Icon id for the avatar of this Group. |
| `entity_type` | `string` | A string description of this resource. |
| `global_id` | `string` |  |
| `id` | `string` | The id of the Group. |
| `member_ids` | `[]any` | The Member IDs contain within the Group. |
| `mention_name` | `string` | The mention name of the Group. |
| `name` | `string` | The name of the Group. |
| `num_epics_started` | `int` | The number of epics assigned to the group which are in the started workflow state. |
| `num_stories` | `int` | The total number of stories assigned to the group. |
| `num_stories_backlog` | `int` | The number of stories assigned to the group which are in a backlog workflow state. |
| `num_stories_started` | `int` | The number of stories assigned to the group which are in a started workflow state. |
| `updated_at` | `string` | The last instant when this group was updated. |
| `workflow_ids` | `[]any` | The Workflow IDs contained within the Group. |

#### Example: Load

```go
group, err := client.Group(nil).Load(map[string]any{"id": "group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(group) // the loaded record
```

#### Example: List

```go
groups, err := client.Group(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(groups) // the array of records
```

#### Example: Create

```go
result, err := client.Group(nil).Create(map[string]any{
    "app_url": "example_app_url",
    "archived": true,
    "color": "example_color",
    "color_key": "example_color_key",
    "created_at": "example_created_at",
    "description": "example_description",
    "display_icon": map[string]any{},
    "entity_type": "example_entity_type",
    "global_id": "example_global_id",
    "id": "example_id",
    "member_ids": []any{},
    "mention_name": "example_mention_name",
    "name": "example_name",
    "num_epics_started": 1,
    "num_stories": 1,
    "num_stories_backlog": 1,
    "num_stories_started": 1,
    "updated_at": "example_updated_at",
    "workflow_ids": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Health

Create an instance: `health := client.Health(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_id` | `string` | The ID of the permission who created or updated the Health record. |
| `created_at` | `string` | The time that the Health record was created. |
| `entity_type` | `string` | A string description of this resource. |
| `epic_id` | `int` | The ID of the Epic associated with this Health record. |
| `id` | `string` | The unique ID of the Health record. |
| `objective_id` | `int` | The ID of the Objective associated with this Health record. |
| `status` | `string` | The health status of the Epic or Objective. |
| `text` | `string` | The text of the Health record. |
| `updated_at` | `string` | The time that the Health record was updated. |

#### Example: Load

```go
health, err := client.Health(nil).Load(map[string]any{"epic_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(health) // the loaded record
```

#### Example: List

```go
healths, err := client.Health(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(healths) // the array of records
```

#### Example: Create

```go
result, err := client.Health(nil).Create(map[string]any{
    "epic_id": 1,
    "entity_type": "example_entity_type",
    "id": "example_id",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### History

Create an instance: `history := client.History(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `[]any` | An array of actions that were performed for the change. |
| `actor_name` | `string` | The name of the actor that performed the action, if it can be determined. |
| `automation_id` | `string` | The ID of the automation that performed the change. |
| `changed_at` | `string` | The date when the change occurred. |
| `external_id` | `string` | The ID of the webhook that handled the change. |
| `id` | `string` | The ID representing the change for the story. |
| `member_id` | `string` | The ID of the member who performed the change. |
| `primary_id` | `string` | The ID of the primary entity that has changed, if applicable. |
| `references` | `[]any` | An array of objects affected by the change. |
| `version` | `string` | The version of the change format. |
| `webhook_id` | `string` | The ID of the webhook that handled the change. |

#### Example: List

```go
historys, err := client.History(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(historys) // the array of records
```


### Iteration

Create an instance: `iteration := client.Iteration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` | The Shortcut application url for the Iteration. |
| `associated_groups` | `[]any` | An array containing Group IDs and Group-owned story counts for the Iteration's associated groups. |
| `created_at` | `string` | The instant when this iteration was created. |
| `description` | `string` | The description of the iteration. |
| `end_date` | `string` | The date this iteration ends. |
| `entity_type` | `string` | A string description of this resource |
| `follower_ids` | `[]any` | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `string` |  |
| `group_ids` | `[]any` | An array of UUIDs for any Groups you want to add as Followers. |
| `group_mention_ids` | `[]any` | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `int` | The ID of the iteration. |
| `label_ids` | `[]any` | An array of label ids attached to the iteration. |
| `labels` | `[]any` | An array of labels attached to the iteration. |
| `member_mention_ids` | `[]any` | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `[]any` | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | The name of the iteration. |
| `start_date` | `string` | The date this iteration begins. |
| `stats` | `map[string]any` | A group of calculated values for this Iteration. |
| `status` | `string` | The status of the iteration. |
| `updated_at` | `string` | The instant when this iteration was last updated. |

#### Example: Load

```go
iteration, err := client.Iteration(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(iteration) // the loaded record
```

#### Example: List

```go
iterations, err := client.Iteration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(iterations) // the array of records
```

#### Example: Create

```go
result, err := client.Iteration(nil).Create(map[string]any{
    "app_url": "example_app_url",
    "associated_groups": []any{},
    "created_at": "example_created_at",
    "description": "example_description",
    "end_date": "example_end_date",
    "entity_type": "example_entity_type",
    "follower_ids": []any{},
    "global_id": "example_global_id",
    "group_ids": []any{},
    "group_mention_ids": []any{},
    "id": 1,
    "label_ids": []any{},
    "labels": []any{},
    "member_mention_ids": []any{},
    "mention_ids": []any{},
    "name": "example_name",
    "start_date": "example_start_date",
    "stats": map[string]any{},
    "status": "example_status",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### KeyResult

Create an instance: `keyResult := client.KeyResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_observed_value` | `map[string]any` | The starting value of the Key Result. |
| `current_target_value` | `map[string]any` | The starting value of the Key Result. |
| `id` | `string` | The ID of the Key Result. |
| `initial_observed_value` | `map[string]any` | The starting value of the Key Result. |
| `name` | `string` | The name of the Key Result. |
| `objective_id` | `int` | The Objective to which this Key Result belongs. |
| `observed_value` | `map[string]any` | The starting value of the Key Result. |
| `progress` | `int` | The integer percentage of progress toward completion of the Key Result. |
| `target_value` | `map[string]any` | The starting value of the Key Result. |
| `type` | `string` | The type of the Key Result (numeric, percent, or boolean). |

#### Example: Load

```go
keyResult, err := client.KeyResult(nil).Load(map[string]any{"id": "key_result_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(keyResult) // the loaded record
```


### Label

Create an instance: `label := client.Label(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` | The Shortcut application url for the Label. |
| `archived` | `bool` | A true/false boolean indicating if the Label has been archived. |
| `color` | `string` | The hex color to be displayed with the Label (for example, "#ff0000"). |
| `created_at` | `string` | The time/date that the Label was created. |
| `description` | `string` | The description of the new Label. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `global_id` | `string` |  |
| `id` | `int` | The unique ID of the Label. |
| `name` | `string` | The name of the new Label. |
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
| `stats` | `map[string]any` | A group of calculated values for this Label. |
| `updated_at` | `string` | The time/date that the Label was updated. |

#### Example: Load

```go
label, err := client.Label(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(label) // the loaded record
```

#### Example: List

```go
labels, err := client.Label(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(labels) // the array of records
```

#### Example: Create

```go
result, err := client.Label(nil).Create(map[string]any{
    "app_url": "example_app_url",
    "created_at": "example_created_at",
    "entity_type": "example_entity_type",
    "global_id": "example_global_id",
    "id": 1,
    "name": "example_name",
    "num_epics": 1,
    "num_epics_completed": 1,
    "num_epics_in_progress": 1,
    "num_epics_total": 1,
    "num_epics_unstarted": 1,
    "num_points_backlog": 1,
    "num_points_completed": 1,
    "num_points_in_progress": 1,
    "num_points_total": 1,
    "num_points_unstarted": 1,
    "num_related_documents": 1,
    "num_stories_backlog": 1,
    "num_stories_completed": 1,
    "num_stories_in_progress": 1,
    "num_stories_total": 1,
    "num_stories_unestimated": 1,
    "num_stories_unstarted": 1,
    "stats": map[string]any{},
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### LinkedFile

Create an instance: `linkedFile := client.LinkedFile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `string` | The content type of the image (e.g. |
| `created_at` | `string` | The time/date the LinkedFile was created. |
| `description` | `string` | The description of the file. |
| `entity_type` | `string` | A string description of this resource. |
| `group_mention_ids` | `[]any` | The groups that are mentioned in the description of the file. |
| `id` | `int` | The unique identifier for the file. |
| `member_mention_ids` | `[]any` | The members that are mentioned in the description of the file. |
| `mention_ids` | `[]any` | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | The name of the linked file. |
| `size` | `int` | The filesize, if the integration provided it. |
| `story_id` | `int` | The ID of the linked story. |
| `story_ids` | `[]any` | The IDs of the stories this file is attached to. |
| `thumbnail_url` | `string` | The URL of the file thumbnail, if the integration provided it. |
| `type` | `string` | The integration type (e.g. |
| `updated_at` | `string` | The time/date the LinkedFile was updated. |
| `uploader_id` | `string` | The UUID of the member that uploaded the file. |
| `url` | `string` | The URL of the file. |

#### Example: Load

```go
linkedFile, err := client.LinkedFile(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(linkedFile) // the loaded record
```

#### Example: List

```go
linkedFiles, err := client.LinkedFile(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(linkedFiles) // the array of records
```

#### Example: Create

```go
result, err := client.LinkedFile(nil).Create(map[string]any{
    "content_type": "example_content_type",
    "created_at": "example_created_at",
    "description": "example_description",
    "entity_type": "example_entity_type",
    "group_mention_ids": []any{},
    "id": 1,
    "member_mention_ids": []any{},
    "mention_ids": []any{},
    "name": "example_name",
    "size": 1,
    "story_ids": []any{},
    "thumbnail_url": "example_thumbnail_url",
    "type": "example_type",
    "updated_at": "example_updated_at",
    "uploader_id": "example_uploader_id",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Member

Create an instance: `member := client.Member(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The time/date the Member was created. |
| `created_without_invite` | `bool` | Whether this member was created as a placeholder entity. |
| `disabled` | `bool` | True/false boolean indicating whether the Member has been disabled within the Workspace. |
| `entity_type` | `string` | A string description of this resource. |
| `global_id` | `string` |  |
| `group_ids` | `[]any` | The Member's group ids |
| `id` | `string` | The Member's ID in Shortcut. |
| `installation_id` | `string` | Only set for agents. |
| `is_owner` | `bool` |  |
| `mention_name` | `string` |  |
| `name` | `string` |  |
| `organization2` | `map[string]any` |  |
| `profile` | `map[string]any` | A group of Member profile details. |
| `replaced_by` | `string` | The id of the member that replaces this one when merged. |
| `role` | `string` | The Member's role in the Workspace. |
| `state` | `string` | The user state, one of partial, full, disabled, or imported. |
| `updated_at` | `string` | The time/date the Member was last updated. |
| `workspace2` | `map[string]any` |  |

#### Example: Load

```go
member, err := client.Member(nil).Load(map[string]any{"id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(member) // the loaded record
```

#### Example: List

```go
members, err := client.Member(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(members) // the array of records
```


### Milestone

Create an instance: `milestone := client.Milestone(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `int` | The ID of the Milestone we want to move this Milestone after. |
| `app_url` | `string` | The Shortcut application url for the Milestone. |
| `archived` | `bool` | A boolean indicating whether the Milestone has been archived or not. |
| `before_id` | `int` | The ID of the Milestone we want to move this Milestone before. |
| `categories` | `[]any` | An array of Categories attached to the Milestone. |
| `completed` | `bool` | A true/false boolean indicating if the Milestone has been completed. |
| `completed_at` | `string` | The time/date the Milestone was completed. |
| `completed_at_override` | `string` | A manual override for the time/date the Milestone was completed. |
| `created_at` | `string` | The time/date the Milestone was created. |
| `description` | `string` | The Milestone's description. |
| `entity_type` | `string` | A string description of this resource. |
| `global_id` | `string` |  |
| `id` | `int` | The unique ID of the Milestone. |
| `key_result_ids` | `[]any` | The IDs of the Key Results associated with the Objective. |
| `name` | `string` | The name of the Milestone. |
| `position` | `int` | A number representing the position of the Milestone in relation to every other Milestone within the Workspace. |
| `started` | `bool` | A true/false boolean indicating if the Milestone has been started. |
| `started_at` | `string` | The time/date the Milestone was started. |
| `started_at_override` | `string` | A manual override for the time/date the Milestone was started. |
| `state` | `string` | The workflow state that the Milestone is in. |
| `stats` | `map[string]any` | A group of calculated values for this Milestone. |
| `updated_at` | `string` | The time/date the Milestone was updated. |

#### Example: Load

```go
milestone, err := client.Milestone(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(milestone) // the loaded record
```

#### Example: List

```go
milestones, err := client.Milestone(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(milestones) // the array of records
```

#### Example: Create

```go
result, err := client.Milestone(nil).Create(map[string]any{
    "app_url": "example_app_url",
    "archived": true,
    "categories": []any{},
    "completed": true,
    "completed_at": "example_completed_at",
    "completed_at_override": "example_completed_at_override",
    "created_at": "example_created_at",
    "description": "example_description",
    "entity_type": "example_entity_type",
    "global_id": "example_global_id",
    "id": 1,
    "key_result_ids": []any{},
    "name": "example_name",
    "position": 1,
    "started": true,
    "started_at": "example_started_at",
    "started_at_override": "example_started_at_override",
    "state": "example_state",
    "stats": map[string]any{},
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Objectif

Create an instance: `objectif := client.Objectif(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Objective

Create an instance: `objective := client.Objective(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `int` | The ID of the Objective we want to move this Objective after. |
| `app_url` | `string` | The Shortcut application url for the Objective. |
| `archived` | `bool` | A boolean indicating whether the Objective has been archived or not. |
| `before_id` | `int` | The ID of the Objective we want to move this Objective before. |
| `categories` | `[]any` | An array of Categories attached to the Objective. |
| `completed` | `bool` | A true/false boolean indicating if the Objectivehas been completed. |
| `completed_at` | `string` | The time/date the Objective was completed. |
| `completed_at_override` | `string` | A manual override for the time/date the Objective was completed. |
| `created_at` | `string` | The time/date the Objective was created. |
| `description` | `string` | The Objective's description. |
| `entity_type` | `string` | A string description of this resource. |
| `global_id` | `string` |  |
| `id` | `int` | The unique ID of the Objective. |
| `key_result_ids` | `[]any` | The IDs of the Key Results associated with the Objective. |
| `name` | `string` | The name of the Objective. |
| `position` | `int` | A number representing the position of the Objective in relation to every other Objective within the Workspace. |
| `started` | `bool` | A true/false boolean indicating if the Objective has been started. |
| `started_at` | `string` | The time/date the Objective was started. |
| `started_at_override` | `string` | A manual override for the time/date the Objective was started. |
| `state` | `string` | The workflow state that the Objective is in. |
| `stats` | `map[string]any` | A group of calculated values for this Objective. |
| `updated_at` | `string` | The time/date the Objective was updated. |

#### Example: Load

```go
objective, err := client.Objective(nil).Load(map[string]any{"objective_public_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(objective) // the loaded record
```

#### Example: List

```go
objectives, err := client.Objective(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(objectives) // the array of records
```

#### Example: Create

```go
result, err := client.Objective(nil).Create(map[string]any{
    "app_url": "example_app_url",
    "archived": true,
    "categories": []any{},
    "completed": true,
    "completed_at": "example_completed_at",
    "completed_at_override": "example_completed_at_override",
    "created_at": "example_created_at",
    "description": "example_description",
    "entity_type": "example_entity_type",
    "global_id": "example_global_id",
    "id": 1,
    "key_result_ids": []any{},
    "name": "example_name",
    "position": 1,
    "started": true,
    "started_at": "example_started_at",
    "started_at_override": "example_started_at_override",
    "state": "example_state",
    "stats": map[string]any{},
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Project

Create an instance: `project := client.Project(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abbreviation` | `string` | The Project abbreviation used in Story summaries. |
| `app_url` | `string` | The Shortcut application url for the Project. |
| `archived` | `bool` | True/false boolean indicating whether the Project is in an Archived state. |
| `color` | `string` | The color associated with the Project in the Shortcut member interface. |
| `created_at` | `string` | The time/date that the Project was created. |
| `days_to_thermometer` | `int` | The number of days before the thermometer appears in the Story summary. |
| `description` | `string` | The description of the Project. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `follower_ids` | `[]any` | An array of UUIDs for any Members listed as Followers. |
| `global_id` | `string` | The Global ID of the Project. |
| `id` | `int` | The unique ID of the Project. |
| `iteration_length` | `int` | The number of weeks per iteration in this Project. |
| `name` | `string` | The name of the Project |
| `show_thermometer` | `bool` | Configuration to enable or disable thermometers in the Story summary. |
| `start_time` | `string` | The date at which the Project was started. |
| `stats` | `map[string]any` | A group of calculated values for this Project. |
| `team_id` | `int` | The ID of the team the project belongs to. |
| `updated_at` | `string` | The time/date that the Project was last updated. |
| `workflow_id` | `int` | The ID of the workflow the project belongs to. |

#### Example: Load

```go
project, err := client.Project(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(project) // the loaded record
```

#### Example: List

```go
projects, err := client.Project(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projects) // the array of records
```

#### Example: Create

```go
result, err := client.Project(nil).Create(map[string]any{
    "abbreviation": "example_abbreviation",
    "app_url": "example_app_url",
    "archived": true,
    "color": "example_color",
    "created_at": "example_created_at",
    "days_to_thermometer": 1,
    "description": "example_description",
    "entity_type": "example_entity_type",
    "external_id": "example_external_id",
    "follower_ids": []any{},
    "global_id": "example_global_id",
    "id": 1,
    "iteration_length": 1,
    "name": "example_name",
    "show_thermometer": true,
    "start_time": "example_start_time",
    "stats": map[string]any{},
    "team_id": 1,
    "updated_at": "example_updated_at",
    "workflow_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Repository

Create an instance: `repository := client.Repository(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The time/date the Repository was created. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | The VCS unique identifier for the Repository. |
| `full_name` | `string` | The full name of the VCS repository. |
| `id` | `int` | The ID associated to the VCS repository in Shortcut. |
| `name` | `string` | The shorthand name of the VCS repository. |
| `type` | `string` | The VCS provider for the Repository. |
| `updated_at` | `string` | The time/date the Repository was updated. |
| `url` | `string` | The URL of the Repository. |

#### Example: Load

```go
repository, err := client.Repository(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(repository) // the loaded record
```

#### Example: List

```go
repositorys, err := client.Repository(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositorys) // the array of records
```


### Search

Create an instance: `search := client.Search(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `epics` | `map[string]any` | The results of the Epic search query. |
| `iterations` | `map[string]any` | The results of the Iteration search query. |
| `milestones` | `map[string]any` | The results of the Objective search query. |
| `stories` | `map[string]any` | The results of the Story search query. |

#### Example: Load

```go
search, err := client.Search(nil).Load(map[string]any{"query": "query"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(search) // the loaded record
```


### Story

Create an instance: `story := client.Story(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `int` | The ID of the story we want to move this story after. |
| `app_url` | `string` | The Shortcut application url for the Story. |
| `archived` | `bool` | True if the story has been archived or not. |
| `before_id` | `int` | The ID of the story we want to move this story before. |
| `blocked` | `bool` | A true/false boolean indicating if the Story is currently blocked. |
| `blocker` | `bool` | A true/false boolean indicating if the Story is currently a blocker of another story. |
| `branch_ids` | `[]any` | An array of IDs of Branches attached to the story. |
| `branches` | `[]any` | An array of Git branches attached to the story. |
| `comment_ids` | `[]any` | An array of IDs of Comments attached to the story. |
| `comments` | `[]any` | An array of comments attached to the story. |
| `commit_ids` | `[]any` | An array of IDs of Commits attached to the story. |
| `commits` | `[]any` | An array of commits attached to the story. |
| `completed` | `bool` | A true/false boolean indicating if the Story has been completed. |
| `completed_at` | `string` | The time/date the Story was completed. |
| `completed_at_override` | `string` | A manual override for the time/date the Story was completed. |
| `created_at` | `string` | The time/date the Story was created. |
| `custom_fields` | `[]any` | An array of CustomField value assertions for the story. |
| `custom_fields_add` | `[]any` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `[]any` | A map specifying a CustomField ID. |
| `cycle_time` | `int` | The cycle time (in seconds) of this story when complete. |
| `deadline` | `string` | The due date of the story. |
| `description` | `string` | The description of the story. |
| `entity_type` | `string` | A string description of this resource. |
| `epic_id` | `int` | The ID of the epic the story belongs to. |
| `estimate` | `int` | The numeric point estimate of the story. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `external_links` | `[]any` | An array of external links (strings) associated with a Story |
| `external_links_add` | `[]any` | An array of External Links associated with this story. |
| `external_links_remove` | `[]any` | An array of External Links associated with this story. |
| `file_ids` | `[]any` | An array of IDs of files attached to the story. |
| `file_ids_add` | `[]any` | An array of IDs of files attached to the story in addition to files from the template. |
| `file_ids_remove` | `[]any` | An array of IDs of files removed from files from the template. |
| `files` | `[]any` | An array of files attached to the story. |
| `follower_ids` | `[]any` | An array of UUIDs for any Members listed as Followers. |
| `follower_ids_add` | `[]any` | The UUIDs of the new followers to be added in addition to followers from the template. |
| `follower_ids_remove` | `[]any` | The UUIDs of the new followers to be removed from followers from the template. |
| `formatted_vcs_branch_name` | `string` | The formatted branch name for this story. |
| `global_id` | `string` |  |
| `group_id` | `string` | The ID of the group associated with the story. |
| `group_mention_ids` | `[]any` | An array of Group IDs that have been mentioned in the Story description. |
| `id` | `int` | The unique ID of the Story. |
| `iteration_id` | `int` | The ID of the iteration the story belongs to. |
| `label_ids` | `[]any` | An array of label ids attached to the story. |
| `labels` | `[]any` | An array of labels attached to the story. |
| `labels_add` | `[]any` | An array of labels attached to the story in addition to the labels provided by the template. |
| `labels_remove` | `[]any` | An array of labels to remove from the labels provided by the template. |
| `lead_time` | `int` | The lead time (in seconds) of this story when complete. |
| `linked_file_ids` | `[]any` | An array of IDs of linked files attached to the story. |
| `linked_file_ids_add` | `[]any` | An array of IDs of linked files attached to the story in addition to files from the template. |
| `linked_file_ids_remove` | `[]any` | An array of IDs of linked files removed from files from the template. |
| `linked_files` | `[]any` | An array of linked files attached to the story. |
| `member_mention_ids` | `[]any` | An array of Member IDs that have been mentioned in the Story description. |
| `mention_ids` | `[]any` | `Deprecated:` use `member_mention_ids`. |
| `move_to` | `string` | One of "first" or "last". |
| `moved_at` | `string` | The time/date the Story was last changed workflow-state. |
| `name` | `string` | The name of the story. |
| `num_tasks_completed` | `int` | The number of tasks on the story which are complete. |
| `owner_ids` | `[]any` | An array of UUIDs of the owners of this story. |
| `owner_ids_add` | `[]any` | The UUIDs of the new owners to be added in addition to owners from the template. |
| `owner_ids_remove` | `[]any` | The UUIDs of the new owners to be removed from owners from the template. |
| `parent_story_id` | `int` | The id of the parent story to associate with this story. |
| `position` | `int` | A number representing the position of the story in relation to every other story in the current project. |
| `previous_iteration_ids` | `[]any` | The IDs of the iteration the story belongs to. |
| `project_id` | `int` | The ID of the project the story belongs to. |
| `pull_request_ids` | `[]any` | An array of IDs of Pull/Merge Requests attached to the story. |
| `pull_requests` | `[]any` | An array of Pull/Merge Requests attached to the story. |
| `requested_by_id` | `string` | The ID of the Member that requested the story. |
| `source_task_id` | `int` | Given this story was converted from a task in another story, this is the original task ID that was converted to this story. |
| `started` | `bool` | A true/false boolean indicating if the Story has been started. |
| `started_at` | `string` | The time/date the Story was started. |
| `started_at_override` | `string` | A manual override for the time/date the Story was started. |
| `stats` | `map[string]any` | The stats object for Stories |
| `story_links` | `[]any` | An array of story links attached to the Story. |
| `story_template_id` | `string` | The ID of the story template used to create this story, or null if not created using a template. |
| `story_type` | `string` | The type of story (feature, bug, chore). |
| `sub_task_story_ids` | `[]any` |  |
| `sub_tasks` | `[]any` | A list of either params to create a new sub-task or link an existing story as a sub-task |
| `synced_item` | `map[string]any` | The synced item for the story. |
| `task_ids` | `[]any` | An array of IDs of Tasks attached to the story. |
| `tasks` | `[]any` | An array of tasks connected to the story. |
| `updated_at` | `string` | The time/date the Story was updated. |
| `workflow_id` | `int` | The ID of the workflow the story belongs to. |
| `workflow_state_id` | `int` | The ID of the workflow state the story is currently in. |

#### Example: Load

```go
story, err := client.Story(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(story) // the loaded record
```

#### Example: List

```go
storys, err := client.Story(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(storys) // the array of records
```

#### Example: Create

```go
result, err := client.Story(nil).Create(map[string]any{
    "app_url": "example_app_url",
    "archived": true,
    "blocked": true,
    "blocker": true,
    "branches": []any{},
    "comments": []any{},
    "commits": []any{},
    "completed": true,
    "completed_at": "example_completed_at",
    "completed_at_override": "example_completed_at_override",
    "created_at": "example_created_at",
    "deadline": "example_deadline",
    "description": "example_description",
    "entity_type": "example_entity_type",
    "epic_id": 1,
    "estimate": 1,
    "external_id": "example_external_id",
    "external_links": []any{},
    "files": []any{},
    "follower_ids": []any{},
    "global_id": "example_global_id",
    "group_id": "example_group_id",
    "group_mention_ids": []any{},
    "id": 1,
    "iteration_id": 1,
    "label_ids": []any{},
    "labels": []any{},
    "linked_files": []any{},
    "member_mention_ids": []any{},
    "mention_ids": []any{},
    "moved_at": "example_moved_at",
    "name": "example_name",
    "owner_ids": []any{},
    "position": 1,
    "previous_iteration_ids": []any{},
    "project_id": 1,
    "pull_requests": []any{},
    "requested_by_id": "example_requested_by_id",
    "started": true,
    "started_at": "example_started_at",
    "started_at_override": "example_started_at_override",
    "stats": map[string]any{},
    "story_links": []any{},
    "story_template_id": "example_story_template_id",
    "story_type": "example_story_type",
    "synced_item": map[string]any{},
    "tasks": []any{},
    "updated_at": "example_updated_at",
    "workflow_id": 1,
    "workflow_state_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### StoryComment

Create an instance: `storyComment := client.StoryComment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` | The Shortcut application url for the Comment. |
| `author_id` | `string` | The unique ID of the Member who is the Comment's author. |
| `blocker` | `bool` | Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment. |
| `created_at` | `string` | The time/date when the Comment was created. |
| `deleted` | `bool` | True/false boolean indicating whether the Comment has been deleted. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `group_mention_ids` | `[]any` | The unique IDs of the Group who are mentioned in the Comment. |
| `id` | `int` | The unique ID of the Comment. |
| `linked_to_slack` | `bool` | Whether the Comment is currently the root of a thread that is linked to Slack. |
| `member_mention_ids` | `[]any` | The unique IDs of the Member who are mentioned in the Comment. |
| `mention_ids` | `[]any` | `Deprecated:` use `member_mention_ids`. |
| `parent_id` | `int` | The ID of the parent Comment this Comment is threaded under. |
| `position` | `int` | The Comments numerical position in the list from oldest to newest. |
| `reactions` | `[]any` | A set of Reactions to this Comment. |
| `story_id` | `int` | The ID of the Story on which the Comment appears. |
| `text` | `string` | The text of the Comment. |
| `unblocks_parent` | `bool` | Marks the comment as an unblocker to its blocker parent. |
| `updated_at` | `string` | The time/date when the Comment was updated. |

#### Example: Load

```go
storyComment, err := client.StoryComment(nil).Load(map[string]any{"id": 1, "story_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(storyComment) // the loaded record
```

#### Example: List

```go
storyComments, err := client.StoryComment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(storyComments) // the array of records
```

#### Example: Create

```go
result, err := client.StoryComment(nil).Create(map[string]any{
    "id": 1,
    "app_url": "example_app_url",
    "author_id": "example_author_id",
    "created_at": "example_created_at",
    "deleted": true,
    "entity_type": "example_entity_type",
    "external_id": "example_external_id",
    "group_mention_ids": []any{},
    "linked_to_slack": true,
    "member_mention_ids": []any{},
    "mention_ids": []any{},
    "position": 1,
    "reactions": []any{},
    "story_id": 1,
    "text": "example_text",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### StoryLink

Create an instance: `storyLink := client.StoryLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The time/date when the Story Link was created. |
| `entity_type` | `string` | A string description of this resource. |
| `id` | `int` | The unique identifier of the Story Link. |
| `object_id` | `int` | The ID of the object Story. |
| `subject_id` | `int` | The ID of the subject Story. |
| `subject_workflow_state_id` | `int` | The workflow state of the "subject" story. |
| `updated_at` | `string` | The time/date when the Story Link was last updated. |
| `verb` | `string` | How the subject Story acts on the object Story. |

#### Example: Load

```go
storyLink, err := client.StoryLink(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(storyLink) // the loaded record
```

#### Example: Create

```go
result, err := client.StoryLink(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "entity_type": "example_entity_type",
    "id": 1,
    "object_id": 1,
    "subject_id": 1,
    "subject_workflow_state_id": 1,
    "updated_at": "example_updated_at",
    "verb": "example_verb",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### StoryReaction

Create an instance: `storyReaction := client.StoryReaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `emoji` | `string` | The emoji short-code to add / remove. |

#### Example: Create

```go
result, err := client.StoryReaction(nil).Create(map[string]any{
    "comment_id": 1,
    "story_id": 1,
    "emoji": "example_emoji",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### StorySlim

Create an instance: `storySlim := client.StorySlim(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `int` | The ID of the story that the stories are to be moved below. |
| `archived` | `bool` | A true/false boolean indicating whether the Story is in archived state. |
| `before_id` | `int` | The ID of the story that the stories are to be moved before. |
| `completed_at_end` | `string` | Stories should have been completed on or before this date. |
| `completed_at_start` | `string` | Stories should have been completed on or after this date. |
| `created_at_end` | `string` | Stories should have been created on or before this date. |
| `created_at_start` | `string` | Stories should have been created on or after this date. |
| `custom_fields_add` | `[]any` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `custom_fields_remove` | `[]any` | A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. |
| `deadline` | `string` | The due date of the story. |
| `deadline_end` | `string` | Stories should have a deadline on or before this date. |
| `deadline_start` | `string` | Stories should have a deadline on or after this date. |
| `epic_id` | `int` | The Epic IDs that may be associated with the Stories. |
| `epic_ids` | `[]any` | The Epic IDs that may be associated with the Stories. |
| `estimate` | `int` | The number of estimate points associate with the Stories. |
| `external_id` | `string` | An ID or URL that references an external resource. |
| `external_links` | `[]any` | An array of External Links associated with this story. |
| `follower_ids_add` | `[]any` | The UUIDs of the new followers to be added. |
| `follower_ids_remove` | `[]any` | The UUIDs of the followers to be removed. |
| `group_id` | `string` | The Group ID that is associated with the Stories |
| `group_ids` | `[]any` | The Group IDs that are associated with the Stories |
| `includes_description` | `bool` | Whether to include the story description in the response. |
| `iteration_id` | `int` | The Iteration ID that may be associated with the Stories. |
| `iteration_ids` | `[]any` | The Iteration IDs that may be associated with the Stories. |
| `label_ids` | `[]any` | The Label IDs that may be associated with the Stories. |
| `label_name` | `string` | The name of any associated Labels. |
| `labels_add` | `[]any` | An array of labels to be added. |
| `labels_remove` | `[]any` | An array of labels to be removed. |
| `move_to` | `string` | One of "first" or "last". |
| `owner_id` | `string` | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids` | `[]any` | An array of UUIDs for any Users who may be Owners of the Stories. |
| `owner_ids_add` | `[]any` | The UUIDs of the new owners to be added. |
| `owner_ids_remove` | `[]any` | The UUIDs of the owners to be removed. |
| `project_id` | `int` | The IDs for the Projects the Stories may be assigned to. |
| `project_ids` | `[]any` | The IDs for the Projects the Stories may be assigned to. |
| `requested_by_id` | `string` | The UUID of any Users who may have requested the Stories. |
| `stories` | `[]any` | An array of stories to be created. |
| `story_ids` | `[]any` | The Ids of the Stories you wish to update. |
| `story_type` | `string` | The type of Stories that you want returned. |
| `updated_at_end` | `string` | Stories should have been updated on or before this date. |
| `updated_at_start` | `string` | Stories should have been updated on or after this date. |
| `workflow_state_id` | `int` | The unique IDs of the specific Workflow States that the Stories should be in. |
| `workflow_state_types` | `[]any` | The type of Workflow State the Stories may be in. |

#### Example: Create

```go
result, err := client.StorySlim(nil).Create(map[string]any{
    "stories": []any{},
    "story_ids": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Task

Create an instance: `task := client.Task(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after_id` | `int` | Move task after this task ID. |
| `before_id` | `int` | Move task before this task ID. |
| `complete` | `bool` | True/false boolean indicating whether the Task has been completed. |
| `completed_at` | `string` | The time/date the Task was completed. |
| `created_at` | `string` | The time/date the Task was created. |
| `description` | `string` | Full text of the Task. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `global_id` | `string` |  |
| `group_mention_ids` | `[]any` | An array of UUIDs of Groups mentioned in this Task. |
| `id` | `int` | The unique ID of the Task. |
| `member_mention_ids` | `[]any` | An array of UUIDs of Members mentioned in this Task. |
| `mention_ids` | `[]any` | `Deprecated:` use `member_mention_ids`. |
| `owner_ids` | `[]any` | An array of UUIDs of the Owners of this Task. |
| `position` | `int` | The number corresponding to the Task's position within a list of Tasks on a Story. |
| `story_id` | `int` | The unique identifier of the parent Story. |
| `updated_at` | `string` | The time/date the Task was updated. |

#### Example: Load

```go
task, err := client.Task(nil).Load(map[string]any{"id": 1, "story_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(task) // the loaded record
```

#### Example: Create

```go
result, err := client.Task(nil).Create(map[string]any{
    "story_id": 1,
    "complete": true,
    "completed_at": "example_completed_at",
    "created_at": "example_created_at",
    "description": "example_description",
    "entity_type": "example_entity_type",
    "external_id": "example_external_id",
    "global_id": "example_global_id",
    "group_mention_ids": []any{},
    "id": 1,
    "member_mention_ids": []any{},
    "mention_ids": []any{},
    "owner_ids": []any{},
    "position": 1,
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ThreadedComment

Create an instance: `threadedComment := client.ThreadedComment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_url` | `string` | The Shortcut application url for the Comment. |
| `author_id` | `string` | The unique ID of the Member that authored the Comment. |
| `comments` | `[]any` | A nested array of threaded comments. |
| `created_at` | `string` | The time/date the Comment was created. |
| `deleted` | `bool` | True/false boolean indicating whether the Comment is deleted. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `group_mention_ids` | `[]any` | An array of Group IDs that have been mentioned in this Comment. |
| `id` | `int` | The unique ID of the Comment. |
| `member_mention_ids` | `[]any` | An array of Member IDs that have been mentioned in this Comment. |
| `mention_ids` | `[]any` | `Deprecated:` use `member_mention_ids`. |
| `text` | `string` | The text of the Comment. |
| `updated_at` | `string` | The time/date the Comment was updated. |

#### Example: Load

```go
threadedComment, err := client.ThreadedComment(nil).Load(map[string]any{"id": 1, "epic_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(threadedComment) // the loaded record
```

#### Example: List

```go
threadedComments, err := client.ThreadedComment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(threadedComments) // the array of records
```

#### Example: Create

```go
result, err := client.ThreadedComment(nil).Create(map[string]any{
    "epic_id": 1,
    "app_url": "example_app_url",
    "author_id": "example_author_id",
    "comments": []any{},
    "created_at": "example_created_at",
    "deleted": true,
    "entity_type": "example_entity_type",
    "external_id": "example_external_id",
    "group_mention_ids": []any{},
    "member_mention_ids": []any{},
    "mention_ids": []any{},
    "text": "example_text",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### UploadedFile

Create an instance: `uploadedFile := client.UploadedFile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `string` | Free form string corresponding to a text or image file. |
| `created_at` | `string` | The time/date that the file was created. |
| `description` | `string` | The description of the file. |
| `entity_type` | `string` | A string description of this resource. |
| `external_id` | `string` | This field can be set to another unique ID. |
| `filename` | `string` | The name assigned to the file in Shortcut upon upload. |
| `group_mention_ids` | `[]any` | The unique IDs of the Groups who are mentioned in the file description. |
| `id` | `int` | The unique ID for the file. |
| `member_mention_ids` | `[]any` | The unique IDs of the Members who are mentioned in the file description. |
| `mention_ids` | `[]any` | `Deprecated:` use `member_mention_ids`. |
| `name` | `string` | The optional User-specified name of the file. |
| `size` | `int` | The size of the file. |
| `story_ids` | `[]any` | The unique IDs of the Stories associated with this file. |
| `thumbnail_url` | `string` | The url where the thumbnail of the file can be found in Shortcut. |
| `updated_at` | `string` | The time/date that the file was updated. |
| `uploader_id` | `string` | The unique ID of the Member who uploaded the file. |
| `url` | `string` | The URL for the file. |

#### Example: Load

```go
uploadedFile, err := client.UploadedFile(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(uploadedFile) // the loaded record
```

#### Example: List

```go
uploadedFiles, err := client.UploadedFile(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(uploadedFiles) // the array of records
```

#### Example: Create

```go
result, err := client.UploadedFile(nil).Create(map[string]any{
    "content_type": "example_content_type",
    "created_at": "example_created_at",
    "description": "example_description",
    "entity_type": "example_entity_type",
    "external_id": "example_external_id",
    "filename": "example_filename",
    "group_mention_ids": []any{},
    "id": 1,
    "member_mention_ids": []any{},
    "mention_ids": []any{},
    "name": "example_name",
    "size": 1,
    "story_ids": []any{},
    "thumbnail_url": "example_thumbnail_url",
    "updated_at": "example_updated_at",
    "uploader_id": "example_uploader_id",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Webhook

Create an instance: `webhook := client.Webhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `secret` | `string` |  |
| `webhook_url` | `string` |  |

#### Example: Load

```go
webhook, err := client.Webhook(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhook) // the loaded record
```

#### Example: Create

```go
result, err := client.Webhook(nil).Create(map[string]any{
    "webhook_url": "example_webhook_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Workflow

Create an instance: `workflow := client.Workflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_assign_owner` | `bool` | Indicates if an owner is automatically assigned when an unowned story is started. |
| `created_at` | `string` | The date the Workflow was created. |
| `default_state_id` | `int` | The unique ID of the default state that new Stories are entered into. |
| `description` | `string` | A description of the workflow. |
| `entity_type` | `string` | A string description of this resource. |
| `id` | `int` | The unique ID of the Workflow. |
| `name` | `string` | The name of the workflow. |
| `project_ids` | `[]any` | An array of IDs of projects within the Workflow. |
| `states` | `[]any` | A map of the states in this Workflow. |
| `team_id` | `int` | The ID of the team the workflow belongs to. |
| `updated_at` | `string` | The date the Workflow was updated. |

#### Example: Load

```go
workflow, err := client.Workflow(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflow) // the loaded record
```

#### Example: List

```go
workflows, err := client.Workflow(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflows) // the array of records
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/shortcut-sdk/go/
├── shortcut.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/shortcut-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
iteration := client.Iteration(nil)
iteration.List(nil, nil)

// iteration.Data() now returns the iteration data from the last list
// iteration.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

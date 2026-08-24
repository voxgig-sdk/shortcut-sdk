# Shortcut Golang SDK



The Golang SDK for the Shortcut API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Bulk(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
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
| `"archived"` |  |
| `"color"` |  |
| `"created_at"` |  |
| `"entity_type"` |  |
| `"external_id"` |  |
| `"global_id"` |  |
| `"id"` |  |
| `"name"` |  |
| `"type"` |  |
| `"updated_at"` |  |

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
| `"after_id"` |  |
| `"before_id"` |  |
| `"canonical_name"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"enabled"` |  |
| `"entity_type"` |  |
| `"field_type"` |  |
| `"fixed_position"` |  |
| `"icon_set_identifier"` |  |
| `"id"` |  |
| `"name"` |  |
| `"position"` |  |
| `"story_types"` |  |
| `"updated_at"` |  |
| `"values"` |  |

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
| `"app_url"` |  |
| `"content"` |  |
| `"id"` |  |
| `"title"` |  |

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
| `"author_id"` |  |
| `"created_at"` |  |
| `"custom_fields"` |  |
| `"deadline"` |  |
| `"description"` |  |
| `"entity_type"` |  |
| `"epic_id"` |  |
| `"estimate"` |  |
| `"external_links"` |  |
| `"files"` |  |
| `"follower_ids"` |  |
| `"group_id"` |  |
| `"id"` |  |
| `"iteration_id"` |  |
| `"label_ids"` |  |
| `"labels"` |  |
| `"last_used_at"` |  |
| `"linked_files"` |  |
| `"name"` |  |
| `"owner_ids"` |  |
| `"project_id"` |  |
| `"story_contents"` |  |
| `"story_type"` |  |
| `"sub_tasks"` |  |
| `"tasks"` |  |
| `"updated_at"` |  |
| `"workflow_state_id"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/entity-templates`

#### Epic

| Field | Description |
| --- | --- |
| `"after_id"` |  |
| `"app_url"` |  |
| `"archived"` |  |
| `"associated_groups"` |  |
| `"before_id"` |  |
| `"comments"` |  |
| `"completed"` |  |
| `"completed_at"` |  |
| `"completed_at_override"` |  |
| `"converted_from_story_id"` |  |
| `"created_at"` |  |
| `"deadline"` |  |
| `"description"` |  |
| `"entity_type"` |  |
| `"epic_state_id"` |  |
| `"external_id"` |  |
| `"follower_ids"` |  |
| `"global_id"` |  |
| `"group_id"` |  |
| `"group_ids"` |  |
| `"group_mention_ids"` |  |
| `"health"` |  |
| `"id"` |  |
| `"label_ids"` |  |
| `"labels"` |  |
| `"member_mention_ids"` |  |
| `"mention_ids"` |  |
| `"milestone_id"` |  |
| `"name"` |  |
| `"objective_ids"` |  |
| `"owner_ids"` |  |
| `"planned_start_date"` |  |
| `"position"` |  |
| `"productboard_id"` |  |
| `"productboard_name"` |  |
| `"productboard_plugin_id"` |  |
| `"productboard_url"` |  |
| `"project_ids"` |  |
| `"requested_by_id"` |  |
| `"started"` |  |
| `"started_at"` |  |
| `"started_at_override"` |  |
| `"state"` |  |
| `"stats"` |  |
| `"stories_without_projects"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/epics`

#### EpicPaginatedResult

| Field | Description |
| --- | --- |
| `"app_url"` |  |
| `"archived"` |  |
| `"associated_groups"` |  |
| `"completed"` |  |
| `"completed_at"` |  |
| `"completed_at_override"` |  |
| `"created_at"` |  |
| `"deadline"` |  |
| `"description"` |  |
| `"entity_type"` |  |
| `"epic_state_id"` |  |
| `"external_id"` |  |
| `"follower_ids"` |  |
| `"global_id"` |  |
| `"group_id"` |  |
| `"group_ids"` |  |
| `"group_mention_ids"` |  |
| `"id"` |  |
| `"label_ids"` |  |
| `"labels"` |  |
| `"member_mention_ids"` |  |
| `"mention_ids"` |  |
| `"milestone_id"` |  |
| `"name"` |  |
| `"objective_ids"` |  |
| `"owner_ids"` |  |
| `"planned_start_date"` |  |
| `"position"` |  |
| `"productboard_id"` |  |
| `"productboard_name"` |  |
| `"productboard_plugin_id"` |  |
| `"productboard_url"` |  |
| `"project_ids"` |  |
| `"requested_by_id"` |  |
| `"started"` |  |
| `"started_at"` |  |
| `"started_at_override"` |  |
| `"state"` |  |
| `"stats"` |  |
| `"stories_without_projects"` |  |
| `"updated_at"` |  |

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
| `"color"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"entity_type"` |  |
| `"global_id"` |  |
| `"id"` |  |
| `"name"` |  |
| `"position"` |  |
| `"type"` |  |
| `"updated_at"` |  |

Operations: List.

API path: `/api/v3/epic-workflow`

#### Group

| Field | Description |
| --- | --- |
| `"app_url"` |  |
| `"archived"` |  |
| `"color"` |  |
| `"color_key"` |  |
| `"created_at"` |  |
| `"default_workflow_id"` |  |
| `"description"` |  |
| `"display_icon"` |  |
| `"display_icon_id"` |  |
| `"entity_type"` |  |
| `"global_id"` |  |
| `"id"` |  |
| `"member_ids"` |  |
| `"mention_name"` |  |
| `"name"` |  |
| `"num_epics_started"` |  |
| `"num_stories"` |  |
| `"num_stories_backlog"` |  |
| `"num_stories_started"` |  |
| `"updated_at"` |  |
| `"workflow_ids"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v3/groups`

#### Health

| Field | Description |
| --- | --- |
| `"author_id"` |  |
| `"created_at"` |  |
| `"entity_type"` |  |
| `"epic_id"` |  |
| `"id"` |  |
| `"objective_id"` |  |
| `"status"` |  |
| `"text"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v3/epics/{epic-public-id}/health`

#### History

| Field | Description |
| --- | --- |
| `"actions"` |  |
| `"actor_name"` |  |
| `"automation_id"` |  |
| `"changed_at"` |  |
| `"external_id"` |  |
| `"id"` |  |
| `"member_id"` |  |
| `"primary_id"` |  |
| `"references"` |  |
| `"version"` |  |
| `"webhook_id"` |  |

Operations: List.

API path: `/api/v3/stories/{story-public-id}/history`

#### Iteration

| Field | Description |
| --- | --- |
| `"app_url"` |  |
| `"associated_groups"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"end_date"` |  |
| `"entity_type"` |  |
| `"follower_ids"` |  |
| `"global_id"` |  |
| `"group_ids"` |  |
| `"group_mention_ids"` |  |
| `"id"` |  |
| `"label_ids"` |  |
| `"labels"` |  |
| `"member_mention_ids"` |  |
| `"mention_ids"` |  |
| `"name"` |  |
| `"start_date"` |  |
| `"stats"` |  |
| `"status"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/iterations`

#### KeyResult

| Field | Description |
| --- | --- |
| `"current_observed_value"` |  |
| `"current_target_value"` |  |
| `"id"` |  |
| `"initial_observed_value"` |  |
| `"name"` |  |
| `"objective_id"` |  |
| `"observed_value"` |  |
| `"progress"` |  |
| `"target_value"` |  |
| `"type"` |  |

Operations: Load, Update.

API path: `/api/v3/key-results/{key-result-public-id}`

#### Label

| Field | Description |
| --- | --- |
| `"app_url"` |  |
| `"archived"` |  |
| `"color"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"entity_type"` |  |
| `"external_id"` |  |
| `"global_id"` |  |
| `"id"` |  |
| `"name"` |  |
| `"num_epics"` |  |
| `"num_epics_completed"` |  |
| `"num_epics_in_progress"` |  |
| `"num_epics_total"` |  |
| `"num_epics_unstarted"` |  |
| `"num_points_backlog"` |  |
| `"num_points_completed"` |  |
| `"num_points_in_progress"` |  |
| `"num_points_total"` |  |
| `"num_points_unstarted"` |  |
| `"num_related_documents"` |  |
| `"num_stories_backlog"` |  |
| `"num_stories_completed"` |  |
| `"num_stories_in_progress"` |  |
| `"num_stories_total"` |  |
| `"num_stories_unestimated"` |  |
| `"num_stories_unstarted"` |  |
| `"stats"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/labels`

#### LinkedFile

| Field | Description |
| --- | --- |
| `"content_type"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"entity_type"` |  |
| `"group_mention_ids"` |  |
| `"id"` |  |
| `"member_mention_ids"` |  |
| `"mention_ids"` |  |
| `"name"` |  |
| `"size"` |  |
| `"story_id"` |  |
| `"story_ids"` |  |
| `"thumbnail_url"` |  |
| `"type"` |  |
| `"updated_at"` |  |
| `"uploader_id"` |  |
| `"url"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/linked-files`

#### Member

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"created_without_invite"` |  |
| `"disabled"` |  |
| `"entity_type"` |  |
| `"global_id"` |  |
| `"group_ids"` |  |
| `"id"` |  |
| `"installation_id"` |  |
| `"is_owner"` |  |
| `"mention_name"` |  |
| `"name"` |  |
| `"organization2"` |  |
| `"profile"` |  |
| `"replaced_by"` |  |
| `"role"` |  |
| `"state"` |  |
| `"updated_at"` |  |
| `"workspace2"` |  |

Operations: List, Load.

API path: `/api/v3/members`

#### Milestone

| Field | Description |
| --- | --- |
| `"after_id"` |  |
| `"app_url"` |  |
| `"archived"` |  |
| `"before_id"` |  |
| `"categories"` |  |
| `"completed"` |  |
| `"completed_at"` |  |
| `"completed_at_override"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"entity_type"` |  |
| `"global_id"` |  |
| `"id"` |  |
| `"key_result_ids"` |  |
| `"name"` |  |
| `"position"` |  |
| `"started"` |  |
| `"started_at"` |  |
| `"started_at_override"` |  |
| `"state"` |  |
| `"stats"` |  |
| `"updated_at"` |  |

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
| `"after_id"` |  |
| `"app_url"` |  |
| `"archived"` |  |
| `"before_id"` |  |
| `"categories"` |  |
| `"completed"` |  |
| `"completed_at"` |  |
| `"completed_at_override"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"entity_type"` |  |
| `"global_id"` |  |
| `"id"` |  |
| `"key_result_ids"` |  |
| `"name"` |  |
| `"position"` |  |
| `"started"` |  |
| `"started_at"` |  |
| `"started_at_override"` |  |
| `"state"` |  |
| `"stats"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v3/objectives`

#### Project

| Field | Description |
| --- | --- |
| `"abbreviation"` |  |
| `"app_url"` |  |
| `"archived"` |  |
| `"color"` |  |
| `"created_at"` |  |
| `"days_to_thermometer"` |  |
| `"description"` |  |
| `"entity_type"` |  |
| `"external_id"` |  |
| `"follower_ids"` |  |
| `"global_id"` |  |
| `"id"` |  |
| `"iteration_length"` |  |
| `"name"` |  |
| `"show_thermometer"` |  |
| `"start_time"` |  |
| `"stats"` |  |
| `"team_id"` |  |
| `"updated_at"` |  |
| `"workflow_id"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/projects`

#### Repository

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"entity_type"` |  |
| `"external_id"` |  |
| `"full_name"` |  |
| `"id"` |  |
| `"name"` |  |
| `"type"` |  |
| `"updated_at"` |  |
| `"url"` |  |

Operations: List, Load.

API path: `/api/v3/repositories`

#### Search

| Field | Description |
| --- | --- |
| `"epics"` |  |
| `"iterations"` |  |
| `"milestones"` |  |
| `"stories"` |  |

Operations: Load.

API path: `/api/v3/search`

#### Story

| Field | Description |
| --- | --- |
| `"after_id"` |  |
| `"app_url"` |  |
| `"archived"` |  |
| `"before_id"` |  |
| `"blocked"` |  |
| `"blocker"` |  |
| `"branch_ids"` |  |
| `"branches"` |  |
| `"comment_ids"` |  |
| `"comments"` |  |
| `"commit_ids"` |  |
| `"commits"` |  |
| `"completed"` |  |
| `"completed_at"` |  |
| `"completed_at_override"` |  |
| `"created_at"` |  |
| `"custom_fields"` |  |
| `"custom_fields_add"` |  |
| `"custom_fields_remove"` |  |
| `"cycle_time"` |  |
| `"deadline"` |  |
| `"description"` |  |
| `"entity_type"` |  |
| `"epic_id"` |  |
| `"estimate"` |  |
| `"external_id"` |  |
| `"external_links"` |  |
| `"external_links_add"` |  |
| `"external_links_remove"` |  |
| `"file_ids"` |  |
| `"file_ids_add"` |  |
| `"file_ids_remove"` |  |
| `"files"` |  |
| `"follower_ids"` |  |
| `"follower_ids_add"` |  |
| `"follower_ids_remove"` |  |
| `"formatted_vcs_branch_name"` |  |
| `"global_id"` |  |
| `"group_id"` |  |
| `"group_mention_ids"` |  |
| `"id"` |  |
| `"iteration_id"` |  |
| `"label_ids"` |  |
| `"labels"` |  |
| `"labels_add"` |  |
| `"labels_remove"` |  |
| `"lead_time"` |  |
| `"linked_file_ids"` |  |
| `"linked_file_ids_add"` |  |
| `"linked_file_ids_remove"` |  |
| `"linked_files"` |  |
| `"member_mention_ids"` |  |
| `"mention_ids"` |  |
| `"move_to"` |  |
| `"moved_at"` |  |
| `"name"` |  |
| `"num_tasks_completed"` |  |
| `"owner_ids"` |  |
| `"owner_ids_add"` |  |
| `"owner_ids_remove"` |  |
| `"parent_story_id"` |  |
| `"position"` |  |
| `"previous_iteration_ids"` |  |
| `"project_id"` |  |
| `"pull_request_ids"` |  |
| `"pull_requests"` |  |
| `"requested_by_id"` |  |
| `"source_task_id"` |  |
| `"started"` |  |
| `"started_at"` |  |
| `"started_at_override"` |  |
| `"stats"` |  |
| `"story_links"` |  |
| `"story_template_id"` |  |
| `"story_type"` |  |
| `"sub_task_story_ids"` |  |
| `"sub_tasks"` |  |
| `"synced_item"` |  |
| `"task_ids"` |  |
| `"tasks"` |  |
| `"updated_at"` |  |
| `"workflow_id"` |  |
| `"workflow_state_id"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/stories`

#### StoryComment

| Field | Description |
| --- | --- |
| `"app_url"` |  |
| `"author_id"` |  |
| `"blocker"` |  |
| `"created_at"` |  |
| `"deleted"` |  |
| `"entity_type"` |  |
| `"external_id"` |  |
| `"group_mention_ids"` |  |
| `"id"` |  |
| `"linked_to_slack"` |  |
| `"member_mention_ids"` |  |
| `"mention_ids"` |  |
| `"parent_id"` |  |
| `"position"` |  |
| `"reactions"` |  |
| `"story_id"` |  |
| `"text"` |  |
| `"unblocks_parent"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Update.

API path: `/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack`

#### StoryLink

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"entity_type"` |  |
| `"id"` |  |
| `"object_id"` |  |
| `"subject_id"` |  |
| `"subject_workflow_state_id"` |  |
| `"updated_at"` |  |
| `"verb"` |  |

Operations: Create, Load, Remove, Update.

API path: `/api/v3/story-links`

#### StoryReaction

| Field | Description |
| --- | --- |
| `"emoji"` |  |

Operations: Create, Remove.

API path: `/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions`

#### StorySlim

| Field | Description |
| --- | --- |
| `"after_id"` |  |
| `"archived"` |  |
| `"before_id"` |  |
| `"completed_at_end"` |  |
| `"completed_at_start"` |  |
| `"created_at_end"` |  |
| `"created_at_start"` |  |
| `"custom_fields_add"` |  |
| `"custom_fields_remove"` |  |
| `"deadline"` |  |
| `"deadline_end"` |  |
| `"deadline_start"` |  |
| `"epic_id"` |  |
| `"epic_ids"` |  |
| `"estimate"` |  |
| `"external_id"` |  |
| `"external_links"` |  |
| `"follower_ids_add"` |  |
| `"follower_ids_remove"` |  |
| `"group_id"` |  |
| `"group_ids"` |  |
| `"includes_description"` |  |
| `"iteration_id"` |  |
| `"iteration_ids"` |  |
| `"label_ids"` |  |
| `"label_name"` |  |
| `"labels_add"` |  |
| `"labels_remove"` |  |
| `"move_to"` |  |
| `"owner_id"` |  |
| `"owner_ids"` |  |
| `"owner_ids_add"` |  |
| `"owner_ids_remove"` |  |
| `"project_id"` |  |
| `"project_ids"` |  |
| `"requested_by_id"` |  |
| `"stories"` |  |
| `"story_ids"` |  |
| `"story_type"` |  |
| `"updated_at_end"` |  |
| `"updated_at_start"` |  |
| `"workflow_state_id"` |  |
| `"workflow_state_types"` |  |

Operations: Create, Update.

API path: `/api/v3/stories/bulk`

#### Task

| Field | Description |
| --- | --- |
| `"after_id"` |  |
| `"before_id"` |  |
| `"complete"` |  |
| `"completed_at"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"entity_type"` |  |
| `"external_id"` |  |
| `"global_id"` |  |
| `"group_mention_ids"` |  |
| `"id"` |  |
| `"member_mention_ids"` |  |
| `"mention_ids"` |  |
| `"owner_ids"` |  |
| `"position"` |  |
| `"story_id"` |  |
| `"updated_at"` |  |

Operations: Create, Load, Remove, Update.

API path: `/api/v3/stories/{story-public-id}/tasks`

#### ThreadedComment

| Field | Description |
| --- | --- |
| `"app_url"` |  |
| `"author_id"` |  |
| `"comments"` |  |
| `"created_at"` |  |
| `"deleted"` |  |
| `"entity_type"` |  |
| `"external_id"` |  |
| `"group_mention_ids"` |  |
| `"id"` |  |
| `"member_mention_ids"` |  |
| `"mention_ids"` |  |
| `"text"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/epics/{epic-public-id}/comments/{comment-public-id}`

#### UploadedFile

| Field | Description |
| --- | --- |
| `"content_type"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"entity_type"` |  |
| `"external_id"` |  |
| `"filename"` |  |
| `"group_mention_ids"` |  |
| `"id"` |  |
| `"member_mention_ids"` |  |
| `"mention_ids"` |  |
| `"name"` |  |
| `"size"` |  |
| `"story_ids"` |  |
| `"thumbnail_url"` |  |
| `"updated_at"` |  |
| `"uploader_id"` |  |
| `"url"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/api/v3/files`

#### Webhook

| Field | Description |
| --- | --- |
| `"secret"` |  |
| `"webhook_url"` |  |

Operations: Create, Load, Remove.

API path: `/api/v3/integrations/webhook`

#### Workflow

| Field | Description |
| --- | --- |
| `"auto_assign_owner"` |  |
| `"created_at"` |  |
| `"default_state_id"` |  |
| `"description"` |  |
| `"entity_type"` |  |
| `"id"` |  |
| `"name"` |  |
| `"project_ids"` |  |
| `"states"` |  |
| `"team_id"` |  |
| `"updated_at"` |  |

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
| `story_types` | `[]any` |  |
| `updated_at` | `string` |  |
| `values` | `[]any` |  |

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
| `app_url` | `string` |  |
| `content` | `string` |  |
| `id` | `string` |  |
| `title` | `string` |  |

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
| `author_id` | `string` |  |
| `created_at` | `string` |  |
| `custom_fields` | `[]any` |  |
| `deadline` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `epic_id` | `int` |  |
| `estimate` | `int` |  |
| `external_links` | `[]any` |  |
| `files` | `[]any` |  |
| `follower_ids` | `[]any` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `iteration_id` | `int` |  |
| `label_ids` | `[]any` |  |
| `labels` | `[]any` |  |
| `last_used_at` | `string` |  |
| `linked_files` | `[]any` |  |
| `name` | `string` |  |
| `owner_ids` | `[]any` |  |
| `project_id` | `int` |  |
| `story_contents` | `map[string]any` |  |
| `story_type` | `string` |  |
| `sub_tasks` | `[]any` |  |
| `tasks` | `[]any` |  |
| `updated_at` | `string` |  |
| `workflow_state_id` | `int` |  |

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
| `after_id` | `int` |  |
| `app_url` | `string` |  |
| `archived` | `bool` |  |
| `associated_groups` | `[]any` |  |
| `before_id` | `int` |  |
| `comments` | `[]any` |  |
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
| `follower_ids` | `[]any` |  |
| `global_id` | `string` |  |
| `group_id` | `string` |  |
| `group_ids` | `[]any` |  |
| `group_mention_ids` | `[]any` |  |
| `health` | `map[string]any` |  |
| `id` | `int` |  |
| `label_ids` | `[]any` |  |
| `labels` | `[]any` |  |
| `member_mention_ids` | `[]any` |  |
| `mention_ids` | `[]any` |  |
| `milestone_id` | `int` |  |
| `name` | `string` |  |
| `objective_ids` | `[]any` |  |
| `owner_ids` | `[]any` |  |
| `planned_start_date` | `string` |  |
| `position` | `int` |  |
| `productboard_id` | `string` |  |
| `productboard_name` | `string` |  |
| `productboard_plugin_id` | `string` |  |
| `productboard_url` | `string` |  |
| `project_ids` | `[]any` |  |
| `requested_by_id` | `string` |  |
| `started` | `bool` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `state` | `string` |  |
| `stats` | `map[string]any` |  |
| `stories_without_projects` | `int` |  |
| `updated_at` | `string` |  |

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
| `app_url` | `string` |  |
| `archived` | `bool` |  |
| `associated_groups` | `[]any` |  |
| `completed` | `bool` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `created_at` | `string` |  |
| `deadline` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `epic_state_id` | `int` |  |
| `external_id` | `string` |  |
| `follower_ids` | `[]any` |  |
| `global_id` | `string` |  |
| `group_id` | `string` |  |
| `group_ids` | `[]any` |  |
| `group_mention_ids` | `[]any` |  |
| `id` | `int` |  |
| `label_ids` | `[]any` |  |
| `labels` | `[]any` |  |
| `member_mention_ids` | `[]any` |  |
| `mention_ids` | `[]any` |  |
| `milestone_id` | `int` |  |
| `name` | `string` |  |
| `objective_ids` | `[]any` |  |
| `owner_ids` | `[]any` |  |
| `planned_start_date` | `string` |  |
| `position` | `int` |  |
| `productboard_id` | `string` |  |
| `productboard_name` | `string` |  |
| `productboard_plugin_id` | `string` |  |
| `productboard_url` | `string` |  |
| `project_ids` | `[]any` |  |
| `requested_by_id` | `string` |  |
| `started` | `bool` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `state` | `string` |  |
| `stats` | `map[string]any` |  |
| `stories_without_projects` | `int` |  |
| `updated_at` | `string` |  |

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
| `app_url` | `string` |  |
| `archived` | `bool` |  |
| `color` | `string` |  |
| `color_key` | `string` |  |
| `created_at` | `string` |  |
| `default_workflow_id` | `int` |  |
| `description` | `string` |  |
| `display_icon` | `map[string]any` |  |
| `display_icon_id` | `string` |  |
| `entity_type` | `string` |  |
| `global_id` | `string` |  |
| `id` | `string` |  |
| `member_ids` | `[]any` |  |
| `mention_name` | `string` |  |
| `name` | `string` |  |
| `num_epics_started` | `int` |  |
| `num_stories` | `int` |  |
| `num_stories_backlog` | `int` |  |
| `num_stories_started` | `int` |  |
| `updated_at` | `string` |  |
| `workflow_ids` | `[]any` |  |

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
| `actions` | `[]any` |  |
| `actor_name` | `string` |  |
| `automation_id` | `string` |  |
| `changed_at` | `string` |  |
| `external_id` | `string` |  |
| `id` | `string` |  |
| `member_id` | `string` |  |
| `primary_id` | `string` |  |
| `references` | `[]any` |  |
| `version` | `string` |  |
| `webhook_id` | `string` |  |

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
| `app_url` | `string` |  |
| `associated_groups` | `[]any` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `end_date` | `string` |  |
| `entity_type` | `string` |  |
| `follower_ids` | `[]any` |  |
| `global_id` | `string` |  |
| `group_ids` | `[]any` |  |
| `group_mention_ids` | `[]any` |  |
| `id` | `int` |  |
| `label_ids` | `[]any` |  |
| `labels` | `[]any` |  |
| `member_mention_ids` | `[]any` |  |
| `mention_ids` | `[]any` |  |
| `name` | `string` |  |
| `start_date` | `string` |  |
| `stats` | `map[string]any` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

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
| `current_observed_value` | `map[string]any` |  |
| `current_target_value` | `map[string]any` |  |
| `id` | `string` |  |
| `initial_observed_value` | `map[string]any` |  |
| `name` | `string` |  |
| `objective_id` | `int` |  |
| `observed_value` | `map[string]any` |  |
| `progress` | `int` |  |
| `target_value` | `map[string]any` |  |
| `type` | `string` |  |

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
| `stats` | `map[string]any` |  |
| `updated_at` | `string` |  |

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
| `content_type` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `group_mention_ids` | `[]any` |  |
| `id` | `int` |  |
| `member_mention_ids` | `[]any` |  |
| `mention_ids` | `[]any` |  |
| `name` | `string` |  |
| `size` | `int` |  |
| `story_id` | `int` |  |
| `story_ids` | `[]any` |  |
| `thumbnail_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `uploader_id` | `string` |  |
| `url` | `string` |  |

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
| `created_at` | `string` |  |
| `created_without_invite` | `bool` |  |
| `disabled` | `bool` |  |
| `entity_type` | `string` |  |
| `global_id` | `string` |  |
| `group_ids` | `[]any` |  |
| `id` | `string` |  |
| `installation_id` | `string` |  |
| `is_owner` | `bool` |  |
| `mention_name` | `string` |  |
| `name` | `string` |  |
| `organization2` | `map[string]any` |  |
| `profile` | `map[string]any` |  |
| `replaced_by` | `string` |  |
| `role` | `string` |  |
| `state` | `string` |  |
| `updated_at` | `string` |  |
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
| `after_id` | `int` |  |
| `app_url` | `string` |  |
| `archived` | `bool` |  |
| `before_id` | `int` |  |
| `categories` | `[]any` |  |
| `completed` | `bool` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `global_id` | `string` |  |
| `id` | `int` |  |
| `key_result_ids` | `[]any` |  |
| `name` | `string` |  |
| `position` | `int` |  |
| `started` | `bool` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `state` | `string` |  |
| `stats` | `map[string]any` |  |
| `updated_at` | `string` |  |

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
| `after_id` | `int` |  |
| `app_url` | `string` |  |
| `archived` | `bool` |  |
| `before_id` | `int` |  |
| `categories` | `[]any` |  |
| `completed` | `bool` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `global_id` | `string` |  |
| `id` | `int` |  |
| `key_result_ids` | `[]any` |  |
| `name` | `string` |  |
| `position` | `int` |  |
| `started` | `bool` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `state` | `string` |  |
| `stats` | `map[string]any` |  |
| `updated_at` | `string` |  |

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
| `abbreviation` | `string` |  |
| `app_url` | `string` |  |
| `archived` | `bool` |  |
| `color` | `string` |  |
| `created_at` | `string` |  |
| `days_to_thermometer` | `int` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `follower_ids` | `[]any` |  |
| `global_id` | `string` |  |
| `id` | `int` |  |
| `iteration_length` | `int` |  |
| `name` | `string` |  |
| `show_thermometer` | `bool` |  |
| `start_time` | `string` |  |
| `stats` | `map[string]any` |  |
| `team_id` | `int` |  |
| `updated_at` | `string` |  |
| `workflow_id` | `int` |  |

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
| `epics` | `map[string]any` |  |
| `iterations` | `map[string]any` |  |
| `milestones` | `map[string]any` |  |
| `stories` | `map[string]any` |  |

#### Example: Load

```go
search, err := client.Search(nil).Load(nil, nil)
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
| `after_id` | `int` |  |
| `app_url` | `string` |  |
| `archived` | `bool` |  |
| `before_id` | `int` |  |
| `blocked` | `bool` |  |
| `blocker` | `bool` |  |
| `branch_ids` | `[]any` |  |
| `branches` | `[]any` |  |
| `comment_ids` | `[]any` |  |
| `comments` | `[]any` |  |
| `commit_ids` | `[]any` |  |
| `commits` | `[]any` |  |
| `completed` | `bool` |  |
| `completed_at` | `string` |  |
| `completed_at_override` | `string` |  |
| `created_at` | `string` |  |
| `custom_fields` | `[]any` |  |
| `custom_fields_add` | `[]any` |  |
| `custom_fields_remove` | `[]any` |  |
| `cycle_time` | `int` |  |
| `deadline` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `epic_id` | `int` |  |
| `estimate` | `int` |  |
| `external_id` | `string` |  |
| `external_links` | `[]any` |  |
| `external_links_add` | `[]any` |  |
| `external_links_remove` | `[]any` |  |
| `file_ids` | `[]any` |  |
| `file_ids_add` | `[]any` |  |
| `file_ids_remove` | `[]any` |  |
| `files` | `[]any` |  |
| `follower_ids` | `[]any` |  |
| `follower_ids_add` | `[]any` |  |
| `follower_ids_remove` | `[]any` |  |
| `formatted_vcs_branch_name` | `string` |  |
| `global_id` | `string` |  |
| `group_id` | `string` |  |
| `group_mention_ids` | `[]any` |  |
| `id` | `int` |  |
| `iteration_id` | `int` |  |
| `label_ids` | `[]any` |  |
| `labels` | `[]any` |  |
| `labels_add` | `[]any` |  |
| `labels_remove` | `[]any` |  |
| `lead_time` | `int` |  |
| `linked_file_ids` | `[]any` |  |
| `linked_file_ids_add` | `[]any` |  |
| `linked_file_ids_remove` | `[]any` |  |
| `linked_files` | `[]any` |  |
| `member_mention_ids` | `[]any` |  |
| `mention_ids` | `[]any` |  |
| `move_to` | `string` |  |
| `moved_at` | `string` |  |
| `name` | `string` |  |
| `num_tasks_completed` | `int` |  |
| `owner_ids` | `[]any` |  |
| `owner_ids_add` | `[]any` |  |
| `owner_ids_remove` | `[]any` |  |
| `parent_story_id` | `int` |  |
| `position` | `int` |  |
| `previous_iteration_ids` | `[]any` |  |
| `project_id` | `int` |  |
| `pull_request_ids` | `[]any` |  |
| `pull_requests` | `[]any` |  |
| `requested_by_id` | `string` |  |
| `source_task_id` | `int` |  |
| `started` | `bool` |  |
| `started_at` | `string` |  |
| `started_at_override` | `string` |  |
| `stats` | `map[string]any` |  |
| `story_links` | `[]any` |  |
| `story_template_id` | `string` |  |
| `story_type` | `string` |  |
| `sub_task_story_ids` | `[]any` |  |
| `sub_tasks` | `[]any` |  |
| `synced_item` | `map[string]any` |  |
| `task_ids` | `[]any` |  |
| `tasks` | `[]any` |  |
| `updated_at` | `string` |  |
| `workflow_id` | `int` |  |
| `workflow_state_id` | `int` |  |

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
| `app_url` | `string` |  |
| `author_id` | `string` |  |
| `blocker` | `bool` |  |
| `created_at` | `string` |  |
| `deleted` | `bool` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `group_mention_ids` | `[]any` |  |
| `id` | `int` |  |
| `linked_to_slack` | `bool` |  |
| `member_mention_ids` | `[]any` |  |
| `mention_ids` | `[]any` |  |
| `parent_id` | `int` |  |
| `position` | `int` |  |
| `reactions` | `[]any` |  |
| `story_id` | `int` |  |
| `text` | `string` |  |
| `unblocks_parent` | `bool` |  |
| `updated_at` | `string` |  |

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
| `created_at` | `string` |  |
| `entity_type` | `string` |  |
| `id` | `int` |  |
| `object_id` | `int` |  |
| `subject_id` | `int` |  |
| `subject_workflow_state_id` | `int` |  |
| `updated_at` | `string` |  |
| `verb` | `string` |  |

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
| `emoji` | `string` |  |

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
| `after_id` | `int` |  |
| `archived` | `bool` |  |
| `before_id` | `int` |  |
| `completed_at_end` | `string` |  |
| `completed_at_start` | `string` |  |
| `created_at_end` | `string` |  |
| `created_at_start` | `string` |  |
| `custom_fields_add` | `[]any` |  |
| `custom_fields_remove` | `[]any` |  |
| `deadline` | `string` |  |
| `deadline_end` | `string` |  |
| `deadline_start` | `string` |  |
| `epic_id` | `int` |  |
| `epic_ids` | `[]any` |  |
| `estimate` | `int` |  |
| `external_id` | `string` |  |
| `external_links` | `[]any` |  |
| `follower_ids_add` | `[]any` |  |
| `follower_ids_remove` | `[]any` |  |
| `group_id` | `string` |  |
| `group_ids` | `[]any` |  |
| `includes_description` | `bool` |  |
| `iteration_id` | `int` |  |
| `iteration_ids` | `[]any` |  |
| `label_ids` | `[]any` |  |
| `label_name` | `string` |  |
| `labels_add` | `[]any` |  |
| `labels_remove` | `[]any` |  |
| `move_to` | `string` |  |
| `owner_id` | `string` |  |
| `owner_ids` | `[]any` |  |
| `owner_ids_add` | `[]any` |  |
| `owner_ids_remove` | `[]any` |  |
| `project_id` | `int` |  |
| `project_ids` | `[]any` |  |
| `requested_by_id` | `string` |  |
| `stories` | `[]any` |  |
| `story_ids` | `[]any` |  |
| `story_type` | `string` |  |
| `updated_at_end` | `string` |  |
| `updated_at_start` | `string` |  |
| `workflow_state_id` | `int` |  |
| `workflow_state_types` | `[]any` |  |

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
| `after_id` | `int` |  |
| `before_id` | `int` |  |
| `complete` | `bool` |  |
| `completed_at` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `global_id` | `string` |  |
| `group_mention_ids` | `[]any` |  |
| `id` | `int` |  |
| `member_mention_ids` | `[]any` |  |
| `mention_ids` | `[]any` |  |
| `owner_ids` | `[]any` |  |
| `position` | `int` |  |
| `story_id` | `int` |  |
| `updated_at` | `string` |  |

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
| `app_url` | `string` |  |
| `author_id` | `string` |  |
| `comments` | `[]any` |  |
| `created_at` | `string` |  |
| `deleted` | `bool` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `group_mention_ids` | `[]any` |  |
| `id` | `int` |  |
| `member_mention_ids` | `[]any` |  |
| `mention_ids` | `[]any` |  |
| `text` | `string` |  |
| `updated_at` | `string` |  |

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
| `content_type` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `external_id` | `string` |  |
| `filename` | `string` |  |
| `group_mention_ids` | `[]any` |  |
| `id` | `int` |  |
| `member_mention_ids` | `[]any` |  |
| `mention_ids` | `[]any` |  |
| `name` | `string` |  |
| `size` | `int` |  |
| `story_ids` | `[]any` |  |
| `thumbnail_url` | `string` |  |
| `updated_at` | `string` |  |
| `uploader_id` | `string` |  |
| `url` | `string` |  |

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
| `auto_assign_owner` | `bool` |  |
| `created_at` | `string` |  |
| `default_state_id` | `int` |  |
| `description` | `string` |  |
| `entity_type` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `project_ids` | `[]any` |  |
| `states` | `[]any` |  |
| `team_id` | `int` |  |
| `updated_at` | `string` |  |

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

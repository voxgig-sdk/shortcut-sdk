# Shortcut API

Shortcut API

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 36 entities and 132 HTTP routes. There are 7 SDK targets.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Bulk](docs/api/bulk.html)

Results: No Content.

SDK operations: `remove`.

### [Category](docs/api/category.html)

Results: Resource; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archived`: A true/false boolean indicating if the Category has been archived.
- `color`: The hex color to be displayed with the Category (for example, &quot;#ff0000&quot;).
- `created_at`: The time/date that the Category was created.
- `entity_type`: A string description of this resource.
- `external_id`: This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here.

### [Comment](docs/api/comment.html)

Results: No Content.

SDK operations: `remove`.

### [CustomField](docs/api/custom_field.html)

Results: Resource; No Content.

SDK operations: `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `after_id`: The ID of the CustomField we want to move this CustomField after.
- `before_id`: The ID of the CustomField we want to move this CustomField before.
- `canonical_name`: The canonical name for a Shortcut-defined field.
- `created_at`: The instant when this CustomField was created.
- `description`: A string description of the CustomField

### [Disable](docs/api/disable.html)

Results: No Content.

SDK operations: `update`.

### [DocSlim](docs/api/doc_slim.html)

Results: Resource.

SDK operations: `create`, `list`.

Key fields to recognise:

- `app_url`: The Shortcut application url for the Doc.
- `content`: The content for the new document
- `id`: The public id of the Doc
- `title`: The Docs Title

### [Enable](docs/api/enable.html)

Results: No Content.

SDK operations: `update`.

### [EntityTemplate](docs/api/entity_template.html)

Results: Resource; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `author_id`: The unique ID of the member who created the template.
- `created_at`: The time/date when the entity template was created.
- `custom_fields`: An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.
- `deadline`: The due date of the story.
- `description`: The description of the story.

### [Epic](docs/api/epic.html)

Results: Resource; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `after_id`: The ID of the Epic we want to move this Epic after.
- `app_url`: The Shortcut application url for the Epic.
- `archived`: True/false boolean that indicates whether the Epic is archived or not.
- `associated_groups`: An array containing Group IDs and Group-owned story counts for the Epic&#39;s associated groups.
- `before_id`: The ID of the Epic we want to move this Epic before.

### [EpicPaginatedResult](docs/api/epic_paginated_result.html)

Results: Resource.

SDK operations: `list`.

Key fields to recognise:

- `app_url`: The Shortcut application url for the Epic.
- `archived`: True/false boolean that indicates whether the Epic is archived or not.
- `associated_groups`: An array containing Group IDs and Group-owned story counts for the Epic&#39;s associated groups.
- `completed`: A true/false boolean indicating if the Epic has been completed.
- `completed_at`: The time/date the Epic was completed.

### [EpicUnlinkProductboard](docs/api/epic_unlink_productboard.html)

Results: No Content.

SDK operations: `create`.

### [EpicWorkflow](docs/api/epic_workflow.html)

Results: Resource.

SDK operations: `list`.

Key fields to recognise:

- `color`: The hex color for this Epic State.
- `created_at`: The date the Epic Workflow was created.
- `description`: The description of what sort of Epics belong in that Epic State.
- `entity_type`: A string description of this resource.
- `id`: The unique ID of the Epic Workflow.

### [Group](docs/api/group.html)

Results: Resource.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `app_url`: The Shortcut application url for the Group.
- `archived`: Whether or not the Group is archived.
- `color`: The hex color to be displayed with the Group (for example, &quot;#ff0000&quot;).
- `color_key`: The color key to be displayed with the Group.
- `created_at`: The instant when this group was created.

### [Health](docs/api/health.html)

Results: Resource.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `author_id`: The ID of the permission who created or updated the Health record.
- `created_at`: The time that the Health record was created.
- `entity_type`: A string description of this resource.
- `epic_id`: The ID of the Epic associated with this Health record.
- `id`: The unique ID of the Health record.

### [History](docs/api/history.html)

Results: Resource.

SDK operations: `list`.

Key fields to recognise:

- `actions`: An array of actions that were performed for the change.
- `actor_name`: The name of the actor that performed the action, if it can be determined.
- `automation_id`: The ID of the automation that performed the change.
- `changed_at`: The date when the change occurred.
- `external_id`: The ID of the webhook that handled the change.

### [Iteration](docs/api/iteration.html)

Results: Resource; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `app_url`: The Shortcut application url for the Iteration.
- `associated_groups`: An array containing Group IDs and Group-owned story counts for the Iteration&#39;s associated groups.
- `created_at`: The instant when this iteration was created.
- `description`: The description of the iteration.
- `end_date`: The date this iteration ends.

### [KeyResult](docs/api/key_result.html)

Results: Resource.

SDK operations: `load`, `update`.

Key fields to recognise:

- `current_observed_value`: The starting value of the Key Result.
- `current_target_value`: The starting value of the Key Result.
- `id`: The ID of the Key Result.
- `initial_observed_value`: The starting value of the Key Result.
- `name`: The name of the Key Result.

### [Label](docs/api/label.html)

Results: Resource; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `app_url`: The Shortcut application url for the Label.
- `archived`: A true/false boolean indicating if the Label has been archived.
- `color`: The hex color to be displayed with the Label (for example, &quot;#ff0000&quot;).
- `created_at`: The time/date that the Label was created.
- `description`: The description of the Label.

### [LinkedFile](docs/api/linked_file.html)

Results: Resource; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `content_type`: The content type of the image (for example txt/plain).
- `created_at`: The time/date the LinkedFile was created.
- `description`: The description of the file.
- `entity_type`: A string description of this resource.
- `group_mention_ids`: The groups that are mentioned in the description of the file.

### [Member](docs/api/member.html)

Results: Resource.

SDK operations: `list`, `load`.

Key fields to recognise:

- `created_at`: The time/date the Member was created.
- `created_without_invite`: Whether this member was created as a placeholder entity.
- `disabled`: True/false boolean indicating whether the Member has been disabled within the Workspace.
- `entity_type`: A string description of this resource.
- `group_ids`: The Member&#39;s group ids

### [Milestone](docs/api/milestone.html)

Results: Resource; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `after_id`: The ID of the Milestone we want to move this Milestone after.
- `app_url`: The Shortcut application url for the Milestone.
- `archived`: A boolean indicating whether the Milestone has been archived or not.
- `before_id`: The ID of the Milestone we want to move this Milestone before.
- `categories`: An array of Categories attached to the Milestone.

### [Objectif](docs/api/objectif.html)

Results: No Content.

SDK operations: `remove`.

### [Objective](docs/api/objective.html)

Results: Resource.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `after_id`: The ID of the Objective we want to move this Objective after.
- `app_url`: The Shortcut application url for the Objective.
- `archived`: A boolean indicating whether the Objective has been archived or not.
- `before_id`: The ID of the Objective we want to move this Objective before.
- `categories`: An array of Categories attached to the Objective.

### [Project](docs/api/project.html)

Results: Resource; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `abbreviation`: The Project abbreviation used in Story summaries. Should be kept to 3 characters at most.
- `app_url`: The Shortcut application url for the Project.
- `archived`: True/false boolean indicating whether the Project is in an Archived state.
- `color`: The color associated with the Project in the Shortcut member interface.
- `created_at`: The time/date that the Project was created.

### [Repository](docs/api/repository.html)

Results: Resource.

SDK operations: `list`, `load`.

Key fields to recognise:

- `created_at`: The time/date the Repository was created.
- `entity_type`: A string description of this resource.
- `external_id`: The VCS unique identifier for the Repository.
- `full_name`: The full name of the VCS repository.
- `id`: The ID associated to the VCS repository in Shortcut.

### [Search](docs/api/search.html)

Results: Resource.

SDK operations: `load`.

Key fields to recognise:

- `epics`: The results of the Epic search query.
- `iterations`: The results of the Iteration search query.
- `milestones`: The results of the Objective search query.
- `stories`: The results of the Story search query.

### [Story](docs/api/story.html)

Results: Resource; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `after_id`: The ID of the story we want to move this story after.
- `app_url`: The Shortcut application url for the Story.
- `archived`: True if the story has been archived or not.
- `before_id`: The ID of the story we want to move this story before.
- `blocked`: A true/false boolean indicating if the Story is currently blocked.

### [StoryComment](docs/api/story_comment.html)

Results: Resource.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `app_url`: The Shortcut application url for the Comment.
- `author_id`: The unique ID of the Member who is the Comment&#39;s author.
- `blocker`: Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment. Can only be used on a top-level comment.
- `created_at`: The time/date when the Comment was created.
- `deleted`: True/false boolean indicating whether the Comment has been deleted.

### [StoryLink](docs/api/story_link.html)

Results: Resource; No Content.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `created_at`: The time/date when the Story Link was created.
- `entity_type`: A string description of this resource.
- `id`: The unique identifier of the Story Link.
- `object_id`: The ID of the object Story.
- `subject_id`: The ID of the subject Story.

### [StoryReaction](docs/api/story_reaction.html)

Results: Resource; No Content.

SDK operations: `create`, `remove`.

Key fields to recognise:

- `emoji`: Emoji text of the reaction.

### [StorySlim](docs/api/story_slim.html)

Results: Resource.

SDK operations: `create`, `update`.

Key fields to recognise:

- `after_id`: The ID of the story that the stories are to be moved below.
- `archived`: True if the story has been archived or not.
- `before_id`: The ID of the story that the stories are to be moved before.
- `completed_at_end`: Stories should have been completed on or before this date.
- `completed_at_start`: Stories should have been completed on or after this date.

### [Task](docs/api/task.html)

Results: Resource; No Content.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `after_id`: Move task after this task ID.
- `before_id`: Move task before this task ID.
- `complete`: True/false boolean indicating whether the Task has been completed.
- `completed_at`: The time/date the Task was completed.
- `created_at`: The time/date the Task was created.

### [ThreadedComment](docs/api/threaded_comment.html)

Results: Resource; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `app_url`: The Shortcut application url for the Comment.
- `author_id`: The unique ID of the Member that authored the Comment.
- `comments`: A nested array of threaded comments.
- `created_at`: The time/date the Comment was created.
- `deleted`: True/false boolean indicating whether the Comment is deleted.

### [UploadedFile](docs/api/uploaded_file.html)

Results: Resource; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `content_type`: Free form string corresponding to a text or image file.
- `created_at`: The time/date that the file was created.
- `description`: The description of the file.
- `entity_type`: A string description of this resource.
- `external_id`: This field can be set to another unique ID. In the case that the File has been imported from another tool, the ID in the other tool can be indicated here.

### [Webhook](docs/api/webhook.html)

Results: No Content; Resource.

SDK operations: `create`, `load`, `remove`.

### [Workflow](docs/api/workflow.html)

Results: Resource.

SDK operations: `list`, `load`.

Key fields to recognise:

- `auto_assign_owner`: Indicates if an owner is automatically assigned when an unowned story is started.
- `created_at`: The date the Workflow was created.
- `default_state_id`: The unique ID of the default state that new Stories are entered into.
- `description`: A description of the workflow.
- `entity_type`: A string description of this resource.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Bulk](docs/api/bulk.html) | `remove` | `DELETE /api/v3/stories/bulk` | Required |
| [Category](docs/api/category.html) | `create` | `POST /api/v3/categories` | Required |
| [Category](docs/api/category.html) | `list` | `GET /api/v3/categories` | Required |
| [Category](docs/api/category.html) | `load` | `GET /api/v3/categories/{category-public-id}` | Required |
| [Category](docs/api/category.html) | `remove` | `DELETE /api/v3/categories/{category-public-id}` | Required |
| [Category](docs/api/category.html) | `update` | `PUT /api/v3/categories/{category-public-id}` | Required |
| [Comment](docs/api/comment.html) | `remove` | `DELETE /api/v3/stories/{story-public-id}/comments/{comment-public-id}` | Required |
| [CustomField](docs/api/custom_field.html) | `list` | `GET /api/v3/custom-fields` | Required |
| [CustomField](docs/api/custom_field.html) | `load` | `GET /api/v3/custom-fields/{custom-field-public-id}` | Required |
| [CustomField](docs/api/custom_field.html) | `remove` | `DELETE /api/v3/custom-fields/{custom-field-public-id}` | Required |
| [CustomField](docs/api/custom_field.html) | `update` | `PUT /api/v3/custom-fields/{custom-field-public-id}` | Required |
| [Disable](docs/api/disable.html) | `update` | `PUT /api/v3/entity-templates/disable` | Required |
| [Disable](docs/api/disable.html) | `update` | `PUT /api/v3/iterations/disable` | Required |
| [DocSlim](docs/api/doc_slim.html) | `create` | `POST /api/v3/documents` | Required |
| [DocSlim](docs/api/doc_slim.html) | `list` | `GET /api/v3/documents` | Required |
| [Enable](docs/api/enable.html) | `update` | `PUT /api/v3/entity-templates/enable` | Required |
| [Enable](docs/api/enable.html) | `update` | `PUT /api/v3/iterations/enable` | Required |
| [EntityTemplate](docs/api/entity_template.html) | `create` | `POST /api/v3/entity-templates` | Required |
| [EntityTemplate](docs/api/entity_template.html) | `list` | `GET /api/v3/entity-templates` | Required |
| [EntityTemplate](docs/api/entity_template.html) | `load` | `GET /api/v3/entity-templates/{entity-template-public-id}` | Required |
| [EntityTemplate](docs/api/entity_template.html) | `remove` | `DELETE /api/v3/entity-templates/{entity-template-public-id}` | Required |
| [EntityTemplate](docs/api/entity_template.html) | `update` | `PUT /api/v3/entity-templates/{entity-template-public-id}` | Required |
| [Epic](docs/api/epic.html) | `create` | `POST /api/v3/epics` | Required |
| [Epic](docs/api/epic.html) | `list` | `GET /api/v3/search/epics` | Required |
| [Epic](docs/api/epic.html) | `list` | `GET /api/v3/epics` | Required |
| [Epic](docs/api/epic.html) | `list` | `GET /api/v3/labels/{label-public-id}/epics` | Required |
| [Epic](docs/api/epic.html) | `list` | `GET /api/v3/milestones/{milestone-public-id}/epics` | Required |
| [Epic](docs/api/epic.html) | `list` | `GET /api/v3/objectives/{objective-public-id}/epics` | Required |
| [Epic](docs/api/epic.html) | `load` | `GET /api/v3/epics/{epic-public-id}` | Required |
| [Epic](docs/api/epic.html) | `remove` | `DELETE /api/v3/epics/{epic-public-id}` | Required |
| [Epic](docs/api/epic.html) | `update` | `PUT /api/v3/epics/{epic-public-id}` | Required |
| [EpicPaginatedResult](docs/api/epic_paginated_result.html) | `list` | `GET /api/v3/epics/paginated` | Required |
| [EpicUnlinkProductboard](docs/api/epic_unlink_productboard.html) | `create` | `POST /api/v3/epics/{epic-public-id}/unlink-productboard` | Required |
| [EpicWorkflow](docs/api/epic_workflow.html) | `list` | `GET /api/v3/epic-workflow` | Required |
| [Group](docs/api/group.html) | `create` | `POST /api/v3/groups` | Required |
| [Group](docs/api/group.html) | `list` | `GET /api/v3/groups` | Required |
| [Group](docs/api/group.html) | `load` | `GET /api/v3/groups/{group-public-id}` | Required |
| [Group](docs/api/group.html) | `update` | `PUT /api/v3/groups/{group-public-id}` | Required |
| [Health](docs/api/health.html) | `create` | `POST /api/v3/epics/{epic-public-id}/health` | Required |
| [Health](docs/api/health.html) | `list` | `GET /api/v3/epics/{epic-public-id}/health-history` | Required |
| [Health](docs/api/health.html) | `load` | `GET /api/v3/epics/{epic-public-id}/health` | Required |
| [Health](docs/api/health.html) | `update` | `PUT /api/v3/health/{health-public-id}` | Required |
| [History](docs/api/history.html) | `list` | `GET /api/v3/stories/{story-public-id}/history` | Required |
| [Iteration](docs/api/iteration.html) | `create` | `POST /api/v3/iterations` | Required |
| [Iteration](docs/api/iteration.html) | `list` | `GET /api/v3/search/iterations` | Required |
| [Iteration](docs/api/iteration.html) | `list` | `GET /api/v3/iterations` | Required |
| [Iteration](docs/api/iteration.html) | `load` | `GET /api/v3/iterations/{iteration-public-id}` | Required |
| [Iteration](docs/api/iteration.html) | `remove` | `DELETE /api/v3/iterations/{iteration-public-id}` | Required |
| [Iteration](docs/api/iteration.html) | `update` | `PUT /api/v3/iterations/{iteration-public-id}` | Required |
| [KeyResult](docs/api/key_result.html) | `load` | `GET /api/v3/key-results/{key-result-public-id}` | Required |
| [KeyResult](docs/api/key_result.html) | `update` | `PUT /api/v3/key-results/{key-result-public-id}` | Required |
| [Label](docs/api/label.html) | `create` | `POST /api/v3/labels` | Required |
| [Label](docs/api/label.html) | `list` | `GET /api/v3/labels` | Required |
| [Label](docs/api/label.html) | `load` | `GET /api/v3/labels/{label-public-id}` | Required |
| [Label](docs/api/label.html) | `remove` | `DELETE /api/v3/labels/{label-public-id}` | Required |
| [Label](docs/api/label.html) | `update` | `PUT /api/v3/labels/{label-public-id}` | Required |
| [LinkedFile](docs/api/linked_file.html) | `create` | `POST /api/v3/linked-files` | Required |
| [LinkedFile](docs/api/linked_file.html) | `list` | `GET /api/v3/linked-files` | Required |
| [LinkedFile](docs/api/linked_file.html) | `load` | `GET /api/v3/linked-files/{linked-file-public-id}` | Required |
| [LinkedFile](docs/api/linked_file.html) | `remove` | `DELETE /api/v3/linked-files/{linked-file-public-id}` | Required |
| [LinkedFile](docs/api/linked_file.html) | `update` | `PUT /api/v3/linked-files/{linked-file-public-id}` | Required |
| [Member](docs/api/member.html) | `list` | `GET /api/v3/members` | Required |
| [Member](docs/api/member.html) | `load` | `GET /api/v3/members/{member-public-id}` | Required |
| [Member](docs/api/member.html) | `load` | `GET /api/v3/member` | Required |
| [Milestone](docs/api/milestone.html) | `create` | `POST /api/v3/milestones` | Required |
| [Milestone](docs/api/milestone.html) | `list` | `GET /api/v3/categories/{category-public-id}/milestones` | Required |
| [Milestone](docs/api/milestone.html) | `list` | `GET /api/v3/categories/{category-public-id}/objectives` | Required |
| [Milestone](docs/api/milestone.html) | `list` | `GET /api/v3/milestones` | Required |
| [Milestone](docs/api/milestone.html) | `load` | `GET /api/v3/milestones/{milestone-public-id}` | Required |
| [Milestone](docs/api/milestone.html) | `remove` | `DELETE /api/v3/milestones/{milestone-public-id}` | Required |
| [Milestone](docs/api/milestone.html) | `update` | `PUT /api/v3/milestones/{milestone-public-id}` | Required |
| [Objectif](docs/api/objectif.html) | `remove` | `DELETE /api/v3/objectives/{objective-public-id}` | Required |
| [Objective](docs/api/objective.html) | `create` | `POST /api/v3/objectives` | Required |
| [Objective](docs/api/objective.html) | `list` | `GET /api/v3/search/milestones` | Required |
| [Objective](docs/api/objective.html) | `list` | `GET /api/v3/search/objectives` | Required |
| [Objective](docs/api/objective.html) | `list` | `GET /api/v3/objectives` | Required |
| [Objective](docs/api/objective.html) | `load` | `GET /api/v3/objectives/{objective-public-id}` | Required |
| [Objective](docs/api/objective.html) | `update` | `PUT /api/v3/objectives/{objective-public-id}` | Required |
| [Project](docs/api/project.html) | `create` | `POST /api/v3/projects` | Required |
| [Project](docs/api/project.html) | `list` | `GET /api/v3/projects` | Required |
| [Project](docs/api/project.html) | `load` | `GET /api/v3/projects/{project-public-id}` | Required |
| [Project](docs/api/project.html) | `remove` | `DELETE /api/v3/projects/{project-public-id}` | Required |
| [Project](docs/api/project.html) | `update` | `PUT /api/v3/projects/{project-public-id}` | Required |
| [Repository](docs/api/repository.html) | `list` | `GET /api/v3/repositories` | Required |
| [Repository](docs/api/repository.html) | `load` | `GET /api/v3/repositories/{repo-public-id}` | Required |
| [Search](docs/api/search.html) | `load` | `GET /api/v3/search` | Required |
| [Story](docs/api/story.html) | `create` | `POST /api/v3/stories` | Required |
| [Story](docs/api/story.html) | `create` | `POST /api/v3/stories/from-template` | Required |
| [Story](docs/api/story.html) | `list` | `GET /api/v3/search/stories` | Required |
| [Story](docs/api/story.html) | `list` | `GET /api/v3/groups/{group-public-id}/stories` | Required |
| [Story](docs/api/story.html) | `list` | `GET /api/v3/epics/{epic-public-id}/stories` | Required |
| [Story](docs/api/story.html) | `list` | `GET /api/v3/iterations/{iteration-public-id}/stories` | Required |
| [Story](docs/api/story.html) | `list` | `GET /api/v3/labels/{label-public-id}/stories` | Required |
| [Story](docs/api/story.html) | `list` | `GET /api/v3/projects/{project-public-id}/stories` | Required |
| [Story](docs/api/story.html) | `list` | `GET /api/v3/external-link/stories` | Required |
| [Story](docs/api/story.html) | `load` | `GET /api/v3/stories/{story-public-id}` | Required |
| [Story](docs/api/story.html) | `remove` | `DELETE /api/v3/stories/{story-public-id}` | Required |
| [Story](docs/api/story.html) | `update` | `PUT /api/v3/stories/{story-public-id}` | Required |
| [StoryComment](docs/api/story_comment.html) | `create` | `POST /api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack` | Required |
| [StoryComment](docs/api/story_comment.html) | `create` | `POST /api/v3/stories/{story-public-id}/comments` | Required |
| [StoryComment](docs/api/story_comment.html) | `list` | `GET /api/v3/stories/{story-public-id}/comments` | Required |
| [StoryComment](docs/api/story_comment.html) | `load` | `GET /api/v3/stories/{story-public-id}/comments/{comment-public-id}` | Required |
| [StoryComment](docs/api/story_comment.html) | `update` | `PUT /api/v3/stories/{story-public-id}/comments/{comment-public-id}` | Required |
| [StoryLink](docs/api/story_link.html) | `create` | `POST /api/v3/story-links` | Required |
| [StoryLink](docs/api/story_link.html) | `load` | `GET /api/v3/story-links/{story-link-public-id}` | Required |
| [StoryLink](docs/api/story_link.html) | `remove` | `DELETE /api/v3/story-links/{story-link-public-id}` | Required |
| [StoryLink](docs/api/story_link.html) | `update` | `PUT /api/v3/story-links/{story-link-public-id}` | Required |
| [StoryReaction](docs/api/story_reaction.html) | `create` | `POST /api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions` | Required |
| [StoryReaction](docs/api/story_reaction.html) | `remove` | `DELETE /api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions` | Required |
| [StorySlim](docs/api/story_slim.html) | `create` | `POST /api/v3/stories/bulk` | Required |
| [StorySlim](docs/api/story_slim.html) | `create` | `POST /api/v3/stories/search` | Required |
| [StorySlim](docs/api/story_slim.html) | `update` | `PUT /api/v3/stories/bulk` | Required |
| [Task](docs/api/task.html) | `create` | `POST /api/v3/stories/{story-public-id}/tasks` | Required |
| [Task](docs/api/task.html) | `load` | `GET /api/v3/stories/{story-public-id}/tasks/{task-public-id}` | Required |
| [Task](docs/api/task.html) | `remove` | `DELETE /api/v3/stories/{story-public-id}/tasks/{task-public-id}` | Required |
| [Task](docs/api/task.html) | `update` | `PUT /api/v3/stories/{story-public-id}/tasks/{task-public-id}` | Required |
| [ThreadedComment](docs/api/threaded_comment.html) | `create` | `POST /api/v3/epics/{epic-public-id}/comments/{comment-public-id}` | Required |
| [ThreadedComment](docs/api/threaded_comment.html) | `create` | `POST /api/v3/epics/{epic-public-id}/comments` | Required |
| [ThreadedComment](docs/api/threaded_comment.html) | `list` | `GET /api/v3/epics/{epic-public-id}/comments` | Required |
| [ThreadedComment](docs/api/threaded_comment.html) | `load` | `GET /api/v3/epics/{epic-public-id}/comments/{comment-public-id}` | Required |
| [ThreadedComment](docs/api/threaded_comment.html) | `remove` | `DELETE /api/v3/epics/{epic-public-id}/comments/{comment-public-id}` | Required |
| [ThreadedComment](docs/api/threaded_comment.html) | `update` | `PUT /api/v3/epics/{epic-public-id}/comments/{comment-public-id}` | Required |
| [UploadedFile](docs/api/uploaded_file.html) | `create` | `POST /api/v3/files` | Required |
| [UploadedFile](docs/api/uploaded_file.html) | `list` | `GET /api/v3/files` | Required |
| [UploadedFile](docs/api/uploaded_file.html) | `load` | `GET /api/v3/files/{file-public-id}` | Required |
| [UploadedFile](docs/api/uploaded_file.html) | `remove` | `DELETE /api/v3/files/{file-public-id}` | Required |
| [UploadedFile](docs/api/uploaded_file.html) | `update` | `PUT /api/v3/files/{file-public-id}` | Required |
| [Webhook](docs/api/webhook.html) | `create` | `POST /api/v3/integrations/webhook` | Required |
| [Webhook](docs/api/webhook.html) | `load` | `GET /api/v3/integrations/webhook/{integration-public-id}` | Required |
| [Webhook](docs/api/webhook.html) | `remove` | `DELETE /api/v3/integrations/webhook/{integration-public-id}` | Required |
| [Workflow](docs/api/workflow.html) | `list` | `GET /api/v3/workflows` | Required |
| [Workflow](docs/api/workflow.html) | `load` | `GET /api/v3/workflows/{workflow-public-id}` | Required |

## Connect to the API

- API server: `https://api.app.shortcut.com`

The default credential is sent in the `Shortcut-Token` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [JavaScript](docs/sdks/js.html) | `js/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.


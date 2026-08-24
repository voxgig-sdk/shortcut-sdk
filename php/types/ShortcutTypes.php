<?php
declare(strict_types=1);

// Typed models for the Shortcut SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Bulk entity data model. */
class Bulk
{
}

/** Request payload for Bulk#remove. */
class BulkRemoveMatch
{
}

/** Category entity data model. */
class Category
{
    public bool $archived;
    public string $color;
    public string $created_at;
    public string $entity_type;
    public string $external_id;
    public string $global_id;
    public int $id;
    public string $name;
    public string $type;
    public string $updated_at;
}

/** Request payload for Category#load. */
class CategoryLoadMatch
{
    public int $id;
}

/** Request payload for Category#list. */
class CategoryListMatch
{
    public ?bool $archived = null;
    public ?string $color = null;
    public ?string $created_at = null;
    public ?string $entity_type = null;
    public ?string $external_id = null;
    public ?string $global_id = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?string $updated_at = null;
}

/** Request payload for Category#create. */
class CategoryCreateData
{
    public bool $archived;
    public string $color;
    public string $created_at;
    public string $entity_type;
    public string $external_id;
    public string $global_id;
    public int $id;
    public string $name;
    public string $type;
    public string $updated_at;
}

/** Request payload for Category#update. */
class CategoryUpdateData
{
    public int $id;
    public ?bool $archived = null;
    public ?string $color = null;
    public ?string $created_at = null;
    public ?string $entity_type = null;
    public ?string $external_id = null;
    public ?string $global_id = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?string $updated_at = null;
}

/** Request payload for Category#remove. */
class CategoryRemoveMatch
{
    public int $id;
}

/** Comment entity data model. */
class Comment
{
}

/** Request payload for Comment#remove. */
class CommentRemoveMatch
{
    public int $id;
    public int $story_id;
}

/** CustomField entity data model. */
class CustomField
{
    public ?string $after_id = null;
    public ?string $before_id = null;
    public ?string $canonical_name = null;
    public string $created_at;
    public ?string $description = null;
    public bool $enabled;
    public string $entity_type;
    public string $field_type;
    public ?bool $fixed_position = null;
    public ?string $icon_set_identifier = null;
    public string $id;
    public string $name;
    public int $position;
    public ?array $story_types = null;
    public string $updated_at;
    public ?array $values = null;
}

/** Request payload for CustomField#load. */
class CustomFieldLoadMatch
{
    public string $id;
}

/** Request payload for CustomField#list. */
class CustomFieldListMatch
{
    public ?string $after_id = null;
    public ?string $before_id = null;
    public ?string $canonical_name = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?bool $enabled = null;
    public ?string $entity_type = null;
    public ?string $field_type = null;
    public ?bool $fixed_position = null;
    public ?string $icon_set_identifier = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?int $position = null;
    public ?array $story_types = null;
    public ?string $updated_at = null;
    public ?array $values = null;
}

/** Request payload for CustomField#update. */
class CustomFieldUpdateData
{
    public string $id;
    public ?string $after_id = null;
    public ?string $before_id = null;
    public ?string $canonical_name = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?bool $enabled = null;
    public ?string $entity_type = null;
    public ?string $field_type = null;
    public ?bool $fixed_position = null;
    public ?string $icon_set_identifier = null;
    public ?string $name = null;
    public ?int $position = null;
    public ?array $story_types = null;
    public ?string $updated_at = null;
    public ?array $values = null;
}

/** Request payload for CustomField#remove. */
class CustomFieldRemoveMatch
{
    public string $id;
}

/** Disable entity data model. */
class Disable
{
}

/** Request payload for Disable#update. */
class DisableUpdateData
{
}

/** DocSlim entity data model. */
class DocSlim
{
    public string $app_url;
    public string $content;
    public string $id;
    public string $title;
}

/** Request payload for DocSlim#list. */
class DocSlimListMatch
{
    public ?string $app_url = null;
    public ?string $content = null;
    public ?string $id = null;
    public ?string $title = null;
}

/** Request payload for DocSlim#create. */
class DocSlimCreateData
{
    public string $app_url;
    public string $content;
    public string $id;
    public string $title;
}

/** Enable entity data model. */
class Enable
{
}

/** Request payload for Enable#update. */
class EnableUpdateData
{
}

/** EntityTemplate entity data model. */
class EntityTemplate
{
    public ?string $author_id = null;
    public string $created_at;
    public ?array $custom_fields = null;
    public ?string $deadline = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?int $epic_id = null;
    public ?int $estimate = null;
    public ?array $external_links = null;
    public ?array $files = null;
    public ?array $follower_ids = null;
    public ?string $group_id = null;
    public string $id;
    public ?int $iteration_id = null;
    public ?array $label_ids = null;
    public ?array $labels = null;
    public string $last_used_at;
    public ?array $linked_files = null;
    public ?string $name = null;
    public ?array $owner_ids = null;
    public ?int $project_id = null;
    public array $story_contents;
    public ?string $story_type = null;
    public ?array $sub_tasks = null;
    public ?array $tasks = null;
    public string $updated_at;
    public ?int $workflow_state_id = null;
}

/** Request payload for EntityTemplate#load. */
class EntityTemplateLoadMatch
{
    public string $id;
}

/** Request payload for EntityTemplate#list. */
class EntityTemplateListMatch
{
    public ?string $author_id = null;
    public ?string $created_at = null;
    public ?array $custom_fields = null;
    public ?string $deadline = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?int $epic_id = null;
    public ?int $estimate = null;
    public ?array $external_links = null;
    public ?array $files = null;
    public ?array $follower_ids = null;
    public ?string $group_id = null;
    public ?string $id = null;
    public ?int $iteration_id = null;
    public ?array $label_ids = null;
    public ?array $labels = null;
    public ?string $last_used_at = null;
    public ?array $linked_files = null;
    public ?string $name = null;
    public ?array $owner_ids = null;
    public ?int $project_id = null;
    public ?array $story_contents = null;
    public ?string $story_type = null;
    public ?array $sub_tasks = null;
    public ?array $tasks = null;
    public ?string $updated_at = null;
    public ?int $workflow_state_id = null;
}

/** Request payload for EntityTemplate#create. */
class EntityTemplateCreateData
{
    public ?string $author_id = null;
    public string $created_at;
    public ?array $custom_fields = null;
    public ?string $deadline = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?int $epic_id = null;
    public ?int $estimate = null;
    public ?array $external_links = null;
    public ?array $files = null;
    public ?array $follower_ids = null;
    public ?string $group_id = null;
    public string $id;
    public ?int $iteration_id = null;
    public ?array $label_ids = null;
    public ?array $labels = null;
    public string $last_used_at;
    public ?array $linked_files = null;
    public ?string $name = null;
    public ?array $owner_ids = null;
    public ?int $project_id = null;
    public array $story_contents;
    public ?string $story_type = null;
    public ?array $sub_tasks = null;
    public ?array $tasks = null;
    public string $updated_at;
    public ?int $workflow_state_id = null;
}

/** Request payload for EntityTemplate#update. */
class EntityTemplateUpdateData
{
    public string $id;
    public ?string $author_id = null;
    public ?string $created_at = null;
    public ?array $custom_fields = null;
    public ?string $deadline = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?int $epic_id = null;
    public ?int $estimate = null;
    public ?array $external_links = null;
    public ?array $files = null;
    public ?array $follower_ids = null;
    public ?string $group_id = null;
    public ?int $iteration_id = null;
    public ?array $label_ids = null;
    public ?array $labels = null;
    public ?string $last_used_at = null;
    public ?array $linked_files = null;
    public ?string $name = null;
    public ?array $owner_ids = null;
    public ?int $project_id = null;
    public ?array $story_contents = null;
    public ?string $story_type = null;
    public ?array $sub_tasks = null;
    public ?array $tasks = null;
    public ?string $updated_at = null;
    public ?int $workflow_state_id = null;
}

/** Request payload for EntityTemplate#remove. */
class EntityTemplateRemoveMatch
{
    public string $id;
}

/** Epic entity data model. */
class Epic
{
    public ?int $after_id = null;
    public string $app_url;
    public bool $archived;
    public array $associated_groups;
    public ?int $before_id = null;
    public array $comments;
    public bool $completed;
    public string $completed_at;
    public string $completed_at_override;
    public ?int $converted_from_story_id = null;
    public string $created_at;
    public string $deadline;
    public string $description;
    public string $entity_type;
    public int $epic_state_id;
    public string $external_id;
    public array $follower_ids;
    public string $global_id;
    public string $group_id;
    public array $group_ids;
    public array $group_mention_ids;
    public array $health;
    public int $id;
    public array $label_ids;
    public array $labels;
    public array $member_mention_ids;
    public array $mention_ids;
    public int $milestone_id;
    public string $name;
    public array $objective_ids;
    public array $owner_ids;
    public string $planned_start_date;
    public int $position;
    public string $productboard_id;
    public string $productboard_name;
    public string $productboard_plugin_id;
    public string $productboard_url;
    public array $project_ids;
    public string $requested_by_id;
    public bool $started;
    public string $started_at;
    public string $started_at_override;
    public string $state;
    public array $stats;
    public int $stories_without_projects;
    public string $updated_at;
}

/** Request payload for Epic#load. */
class EpicLoadMatch
{
    public int $id;
}

/** Request payload for Epic#list. */
class EpicListMatch
{
    public ?int $label_id = null;
    public ?int $milestone_id = null;
    public ?int $objectif_id = null;
}

/** Request payload for Epic#create. */
class EpicCreateData
{
    public ?int $after_id = null;
    public string $app_url;
    public bool $archived;
    public array $associated_groups;
    public ?int $before_id = null;
    public array $comments;
    public bool $completed;
    public string $completed_at;
    public string $completed_at_override;
    public ?int $converted_from_story_id = null;
    public string $created_at;
    public string $deadline;
    public string $description;
    public string $entity_type;
    public int $epic_state_id;
    public string $external_id;
    public array $follower_ids;
    public string $global_id;
    public string $group_id;
    public array $group_ids;
    public array $group_mention_ids;
    public array $health;
    public int $id;
    public array $label_ids;
    public array $labels;
    public array $member_mention_ids;
    public array $mention_ids;
    public int $milestone_id;
    public string $name;
    public array $objective_ids;
    public array $owner_ids;
    public string $planned_start_date;
    public int $position;
    public string $productboard_id;
    public string $productboard_name;
    public string $productboard_plugin_id;
    public string $productboard_url;
    public array $project_ids;
    public string $requested_by_id;
    public bool $started;
    public string $started_at;
    public string $started_at_override;
    public string $state;
    public array $stats;
    public int $stories_without_projects;
    public string $updated_at;
}

/** Request payload for Epic#update. */
class EpicUpdateData
{
    public int $id;
    public ?int $after_id = null;
    public ?string $app_url = null;
    public ?bool $archived = null;
    public ?array $associated_groups = null;
    public ?int $before_id = null;
    public ?array $comments = null;
    public ?bool $completed = null;
    public ?string $completed_at = null;
    public ?string $completed_at_override = null;
    public ?int $converted_from_story_id = null;
    public ?string $created_at = null;
    public ?string $deadline = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?int $epic_state_id = null;
    public ?string $external_id = null;
    public ?array $follower_ids = null;
    public ?string $global_id = null;
    public ?string $group_id = null;
    public ?array $group_ids = null;
    public ?array $group_mention_ids = null;
    public ?array $health = null;
    public ?array $label_ids = null;
    public ?array $labels = null;
    public ?array $member_mention_ids = null;
    public ?array $mention_ids = null;
    public ?int $milestone_id = null;
    public ?string $name = null;
    public ?array $objective_ids = null;
    public ?array $owner_ids = null;
    public ?string $planned_start_date = null;
    public ?int $position = null;
    public ?string $productboard_id = null;
    public ?string $productboard_name = null;
    public ?string $productboard_plugin_id = null;
    public ?string $productboard_url = null;
    public ?array $project_ids = null;
    public ?string $requested_by_id = null;
    public ?bool $started = null;
    public ?string $started_at = null;
    public ?string $started_at_override = null;
    public ?string $state = null;
    public ?array $stats = null;
    public ?int $stories_without_projects = null;
    public ?string $updated_at = null;
}

/** Request payload for Epic#remove. */
class EpicRemoveMatch
{
    public int $id;
}

/** EpicPaginatedResult entity data model. */
class EpicPaginatedResult
{
    public string $app_url;
    public bool $archived;
    public array $associated_groups;
    public bool $completed;
    public string $completed_at;
    public string $completed_at_override;
    public string $created_at;
    public string $deadline;
    public ?string $description = null;
    public string $entity_type;
    public int $epic_state_id;
    public string $external_id;
    public array $follower_ids;
    public string $global_id;
    public string $group_id;
    public array $group_ids;
    public array $group_mention_ids;
    public int $id;
    public array $label_ids;
    public array $labels;
    public array $member_mention_ids;
    public array $mention_ids;
    public int $milestone_id;
    public string $name;
    public array $objective_ids;
    public array $owner_ids;
    public string $planned_start_date;
    public int $position;
    public string $productboard_id;
    public string $productboard_name;
    public string $productboard_plugin_id;
    public string $productboard_url;
    public array $project_ids;
    public string $requested_by_id;
    public bool $started;
    public string $started_at;
    public string $started_at_override;
    public string $state;
    public array $stats;
    public int $stories_without_projects;
    public string $updated_at;
}

/** Request payload for EpicPaginatedResult#list. */
class EpicPaginatedResultListMatch
{
    public ?string $app_url = null;
    public ?bool $archived = null;
    public ?array $associated_groups = null;
    public ?bool $completed = null;
    public ?string $completed_at = null;
    public ?string $completed_at_override = null;
    public ?string $created_at = null;
    public ?string $deadline = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?int $epic_state_id = null;
    public ?string $external_id = null;
    public ?array $follower_ids = null;
    public ?string $global_id = null;
    public ?string $group_id = null;
    public ?array $group_ids = null;
    public ?array $group_mention_ids = null;
    public ?int $id = null;
    public ?array $label_ids = null;
    public ?array $labels = null;
    public ?array $member_mention_ids = null;
    public ?array $mention_ids = null;
    public ?int $milestone_id = null;
    public ?string $name = null;
    public ?array $objective_ids = null;
    public ?array $owner_ids = null;
    public ?string $planned_start_date = null;
    public ?int $position = null;
    public ?string $productboard_id = null;
    public ?string $productboard_name = null;
    public ?string $productboard_plugin_id = null;
    public ?string $productboard_url = null;
    public ?array $project_ids = null;
    public ?string $requested_by_id = null;
    public ?bool $started = null;
    public ?string $started_at = null;
    public ?string $started_at_override = null;
    public ?string $state = null;
    public ?array $stats = null;
    public ?int $stories_without_projects = null;
    public ?string $updated_at = null;
}

/** EpicUnlinkProductboard entity data model. */
class EpicUnlinkProductboard
{
}

/** Request payload for EpicUnlinkProductboard#create. */
class EpicUnlinkProductboardCreateData
{
    public int $id;
}

/** EpicWorkflow entity data model. */
class EpicWorkflow
{
    public ?string $color = null;
    public string $created_at;
    public string $description;
    public string $entity_type;
    public string $global_id;
    public int $id;
    public string $name;
    public int $position;
    public string $type;
    public string $updated_at;
}

/** Request payload for EpicWorkflow#list. */
class EpicWorkflowListMatch
{
    public ?string $color = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?string $global_id = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?int $position = null;
    public ?string $type = null;
    public ?string $updated_at = null;
}

/** Group entity data model. */
class Group
{
    public string $app_url;
    public bool $archived;
    public string $color;
    public string $color_key;
    public string $created_at;
    public ?int $default_workflow_id = null;
    public string $description;
    public array $display_icon;
    public ?string $display_icon_id = null;
    public string $entity_type;
    public string $global_id;
    public string $id;
    public array $member_ids;
    public string $mention_name;
    public string $name;
    public int $num_epics_started;
    public int $num_stories;
    public int $num_stories_backlog;
    public int $num_stories_started;
    public string $updated_at;
    public array $workflow_ids;
}

/** Request payload for Group#load. */
class GroupLoadMatch
{
    public string $id;
}

/** Request payload for Group#list. */
class GroupListMatch
{
    public ?string $app_url = null;
    public ?bool $archived = null;
    public ?string $color = null;
    public ?string $color_key = null;
    public ?string $created_at = null;
    public ?int $default_workflow_id = null;
    public ?string $description = null;
    public ?array $display_icon = null;
    public ?string $display_icon_id = null;
    public ?string $entity_type = null;
    public ?string $global_id = null;
    public ?string $id = null;
    public ?array $member_ids = null;
    public ?string $mention_name = null;
    public ?string $name = null;
    public ?int $num_epics_started = null;
    public ?int $num_stories = null;
    public ?int $num_stories_backlog = null;
    public ?int $num_stories_started = null;
    public ?string $updated_at = null;
    public ?array $workflow_ids = null;
}

/** Request payload for Group#create. */
class GroupCreateData
{
    public string $app_url;
    public bool $archived;
    public string $color;
    public string $color_key;
    public string $created_at;
    public ?int $default_workflow_id = null;
    public string $description;
    public array $display_icon;
    public ?string $display_icon_id = null;
    public string $entity_type;
    public string $global_id;
    public string $id;
    public array $member_ids;
    public string $mention_name;
    public string $name;
    public int $num_epics_started;
    public int $num_stories;
    public int $num_stories_backlog;
    public int $num_stories_started;
    public string $updated_at;
    public array $workflow_ids;
}

/** Request payload for Group#update. */
class GroupUpdateData
{
    public string $id;
    public ?string $app_url = null;
    public ?bool $archived = null;
    public ?string $color = null;
    public ?string $color_key = null;
    public ?string $created_at = null;
    public ?int $default_workflow_id = null;
    public ?string $description = null;
    public ?array $display_icon = null;
    public ?string $display_icon_id = null;
    public ?string $entity_type = null;
    public ?string $global_id = null;
    public ?array $member_ids = null;
    public ?string $mention_name = null;
    public ?string $name = null;
    public ?int $num_epics_started = null;
    public ?int $num_stories = null;
    public ?int $num_stories_backlog = null;
    public ?int $num_stories_started = null;
    public ?string $updated_at = null;
    public ?array $workflow_ids = null;
}

/** Health entity data model. */
class Health
{
    public ?string $author_id = null;
    public ?string $created_at = null;
    public string $entity_type;
    public ?int $epic_id = null;
    public string $id;
    public ?int $objective_id = null;
    public string $status;
    public ?string $text = null;
    public ?string $updated_at = null;
}

/** Request payload for Health#load. */
class HealthLoadMatch
{
    public int $epic_id;
}

/** Request payload for Health#list. */
class HealthListMatch
{
    public int $epic_id;
}

/** Request payload for Health#create. */
class HealthCreateData
{
    public int $epic_id;
    public ?string $author_id = null;
    public ?string $created_at = null;
    public string $entity_type;
    public string $id;
    public ?int $objective_id = null;
    public string $status;
    public ?string $text = null;
    public ?string $updated_at = null;
}

/** Request payload for Health#update. */
class HealthUpdateData
{
    public string $id;
    public ?string $author_id = null;
    public ?string $created_at = null;
    public ?string $entity_type = null;
    public ?int $epic_id = null;
    public ?int $objective_id = null;
    public ?string $status = null;
    public ?string $text = null;
    public ?string $updated_at = null;
}

/** History entity data model. */
class History
{
    public array $actions;
    public ?string $actor_name = null;
    public ?string $automation_id = null;
    public string $changed_at;
    public ?string $external_id = null;
    public string $id;
    public ?string $member_id = null;
    public ?string $primary_id = null;
    public ?array $references = null;
    public string $version;
    public ?string $webhook_id = null;
}

/** Request payload for History#list. */
class HistoryListMatch
{
    public int $story_id;
}

/** Iteration entity data model. */
class Iteration
{
    public string $app_url;
    public array $associated_groups;
    public string $created_at;
    public string $description;
    public string $end_date;
    public string $entity_type;
    public array $follower_ids;
    public string $global_id;
    public array $group_ids;
    public array $group_mention_ids;
    public int $id;
    public array $label_ids;
    public array $labels;
    public array $member_mention_ids;
    public array $mention_ids;
    public string $name;
    public string $start_date;
    public array $stats;
    public string $status;
    public string $updated_at;
}

/** Request payload for Iteration#load. */
class IterationLoadMatch
{
    public int $id;
}

/** Request payload for Iteration#list. */
class IterationListMatch
{
    public ?string $app_url = null;
    public ?array $associated_groups = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $end_date = null;
    public ?string $entity_type = null;
    public ?array $follower_ids = null;
    public ?string $global_id = null;
    public ?array $group_ids = null;
    public ?array $group_mention_ids = null;
    public ?int $id = null;
    public ?array $label_ids = null;
    public ?array $labels = null;
    public ?array $member_mention_ids = null;
    public ?array $mention_ids = null;
    public ?string $name = null;
    public ?string $start_date = null;
    public ?array $stats = null;
    public ?string $status = null;
    public ?string $updated_at = null;
}

/** Request payload for Iteration#create. */
class IterationCreateData
{
    public string $app_url;
    public array $associated_groups;
    public string $created_at;
    public string $description;
    public string $end_date;
    public string $entity_type;
    public array $follower_ids;
    public string $global_id;
    public array $group_ids;
    public array $group_mention_ids;
    public int $id;
    public array $label_ids;
    public array $labels;
    public array $member_mention_ids;
    public array $mention_ids;
    public string $name;
    public string $start_date;
    public array $stats;
    public string $status;
    public string $updated_at;
}

/** Request payload for Iteration#update. */
class IterationUpdateData
{
    public int $id;
    public ?string $app_url = null;
    public ?array $associated_groups = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $end_date = null;
    public ?string $entity_type = null;
    public ?array $follower_ids = null;
    public ?string $global_id = null;
    public ?array $group_ids = null;
    public ?array $group_mention_ids = null;
    public ?array $label_ids = null;
    public ?array $labels = null;
    public ?array $member_mention_ids = null;
    public ?array $mention_ids = null;
    public ?string $name = null;
    public ?string $start_date = null;
    public ?array $stats = null;
    public ?string $status = null;
    public ?string $updated_at = null;
}

/** Request payload for Iteration#remove. */
class IterationRemoveMatch
{
    public int $id;
}

/** KeyResult entity data model. */
class KeyResult
{
    public array $current_observed_value;
    public array $current_target_value;
    public string $id;
    public array $initial_observed_value;
    public string $name;
    public int $objective_id;
    public ?array $observed_value = null;
    public int $progress;
    public ?array $target_value = null;
    public string $type;
}

/** Request payload for KeyResult#load. */
class KeyResultLoadMatch
{
    public string $id;
}

/** Request payload for KeyResult#update. */
class KeyResultUpdateData
{
    public string $id;
    public ?array $current_observed_value = null;
    public ?array $current_target_value = null;
    public ?array $initial_observed_value = null;
    public ?string $name = null;
    public ?int $objective_id = null;
    public ?array $observed_value = null;
    public ?int $progress = null;
    public ?array $target_value = null;
    public ?string $type = null;
}

/** Label entity data model. */
class Label
{
    public string $app_url;
    public ?bool $archived = null;
    public ?string $color = null;
    public string $created_at;
    public ?string $description = null;
    public string $entity_type;
    public ?string $external_id = null;
    public string $global_id;
    public int $id;
    public string $name;
    public int $num_epics;
    public int $num_epics_completed;
    public int $num_epics_in_progress;
    public int $num_epics_total;
    public int $num_epics_unstarted;
    public int $num_points_backlog;
    public int $num_points_completed;
    public int $num_points_in_progress;
    public int $num_points_total;
    public int $num_points_unstarted;
    public int $num_related_documents;
    public int $num_stories_backlog;
    public int $num_stories_completed;
    public int $num_stories_in_progress;
    public int $num_stories_total;
    public int $num_stories_unestimated;
    public int $num_stories_unstarted;
    public array $stats;
    public string $updated_at;
}

/** Request payload for Label#load. */
class LabelLoadMatch
{
    public int $id;
}

/** Request payload for Label#list. */
class LabelListMatch
{
    public ?string $app_url = null;
    public ?bool $archived = null;
    public ?string $color = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?string $external_id = null;
    public ?string $global_id = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?int $num_epics = null;
    public ?int $num_epics_completed = null;
    public ?int $num_epics_in_progress = null;
    public ?int $num_epics_total = null;
    public ?int $num_epics_unstarted = null;
    public ?int $num_points_backlog = null;
    public ?int $num_points_completed = null;
    public ?int $num_points_in_progress = null;
    public ?int $num_points_total = null;
    public ?int $num_points_unstarted = null;
    public ?int $num_related_documents = null;
    public ?int $num_stories_backlog = null;
    public ?int $num_stories_completed = null;
    public ?int $num_stories_in_progress = null;
    public ?int $num_stories_total = null;
    public ?int $num_stories_unestimated = null;
    public ?int $num_stories_unstarted = null;
    public ?array $stats = null;
    public ?string $updated_at = null;
}

/** Request payload for Label#create. */
class LabelCreateData
{
    public string $app_url;
    public ?bool $archived = null;
    public ?string $color = null;
    public string $created_at;
    public ?string $description = null;
    public string $entity_type;
    public ?string $external_id = null;
    public string $global_id;
    public int $id;
    public string $name;
    public int $num_epics;
    public int $num_epics_completed;
    public int $num_epics_in_progress;
    public int $num_epics_total;
    public int $num_epics_unstarted;
    public int $num_points_backlog;
    public int $num_points_completed;
    public int $num_points_in_progress;
    public int $num_points_total;
    public int $num_points_unstarted;
    public int $num_related_documents;
    public int $num_stories_backlog;
    public int $num_stories_completed;
    public int $num_stories_in_progress;
    public int $num_stories_total;
    public int $num_stories_unestimated;
    public int $num_stories_unstarted;
    public array $stats;
    public string $updated_at;
}

/** Request payload for Label#update. */
class LabelUpdateData
{
    public int $id;
    public ?string $app_url = null;
    public ?bool $archived = null;
    public ?string $color = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?string $external_id = null;
    public ?string $global_id = null;
    public ?string $name = null;
    public ?int $num_epics = null;
    public ?int $num_epics_completed = null;
    public ?int $num_epics_in_progress = null;
    public ?int $num_epics_total = null;
    public ?int $num_epics_unstarted = null;
    public ?int $num_points_backlog = null;
    public ?int $num_points_completed = null;
    public ?int $num_points_in_progress = null;
    public ?int $num_points_total = null;
    public ?int $num_points_unstarted = null;
    public ?int $num_related_documents = null;
    public ?int $num_stories_backlog = null;
    public ?int $num_stories_completed = null;
    public ?int $num_stories_in_progress = null;
    public ?int $num_stories_total = null;
    public ?int $num_stories_unestimated = null;
    public ?int $num_stories_unstarted = null;
    public ?array $stats = null;
    public ?string $updated_at = null;
}

/** Request payload for Label#remove. */
class LabelRemoveMatch
{
    public int $id;
}

/** LinkedFile entity data model. */
class LinkedFile
{
    public string $content_type;
    public string $created_at;
    public string $description;
    public string $entity_type;
    public array $group_mention_ids;
    public int $id;
    public array $member_mention_ids;
    public array $mention_ids;
    public string $name;
    public int $size;
    public ?int $story_id = null;
    public array $story_ids;
    public string $thumbnail_url;
    public string $type;
    public string $updated_at;
    public string $uploader_id;
    public string $url;
}

/** Request payload for LinkedFile#load. */
class LinkedFileLoadMatch
{
    public int $id;
}

/** Request payload for LinkedFile#list. */
class LinkedFileListMatch
{
    public ?string $content_type = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?array $group_mention_ids = null;
    public ?int $id = null;
    public ?array $member_mention_ids = null;
    public ?array $mention_ids = null;
    public ?string $name = null;
    public ?int $size = null;
    public ?int $story_id = null;
    public ?array $story_ids = null;
    public ?string $thumbnail_url = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $uploader_id = null;
    public ?string $url = null;
}

/** Request payload for LinkedFile#create. */
class LinkedFileCreateData
{
    public string $content_type;
    public string $created_at;
    public string $description;
    public string $entity_type;
    public array $group_mention_ids;
    public int $id;
    public array $member_mention_ids;
    public array $mention_ids;
    public string $name;
    public int $size;
    public ?int $story_id = null;
    public array $story_ids;
    public string $thumbnail_url;
    public string $type;
    public string $updated_at;
    public string $uploader_id;
    public string $url;
}

/** Request payload for LinkedFile#update. */
class LinkedFileUpdateData
{
    public int $id;
    public ?string $content_type = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?array $group_mention_ids = null;
    public ?array $member_mention_ids = null;
    public ?array $mention_ids = null;
    public ?string $name = null;
    public ?int $size = null;
    public ?int $story_id = null;
    public ?array $story_ids = null;
    public ?string $thumbnail_url = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $uploader_id = null;
    public ?string $url = null;
}

/** Request payload for LinkedFile#remove. */
class LinkedFileRemoveMatch
{
    public int $id;
}

/** Member entity data model. */
class Member
{
    public string $created_at;
    public bool $created_without_invite;
    public bool $disabled;
    public string $entity_type;
    public string $global_id;
    public array $group_ids;
    public string $id;
    public ?string $installation_id = null;
    public bool $is_owner;
    public string $mention_name;
    public string $name;
    public array $organization2;
    public array $profile;
    public ?string $replaced_by = null;
    public string $role;
    public string $state;
    public string $updated_at;
    public array $workspace2;
}

/** Request payload for Member#load. */
class MemberLoadMatch
{
    public ?string $id = null;
}

/** Request payload for Member#list. */
class MemberListMatch
{
    public ?string $created_at = null;
    public ?bool $created_without_invite = null;
    public ?bool $disabled = null;
    public ?string $entity_type = null;
    public ?string $global_id = null;
    public ?array $group_ids = null;
    public ?string $id = null;
    public ?string $installation_id = null;
    public ?bool $is_owner = null;
    public ?string $mention_name = null;
    public ?string $name = null;
    public ?array $organization2 = null;
    public ?array $profile = null;
    public ?string $replaced_by = null;
    public ?string $role = null;
    public ?string $state = null;
    public ?string $updated_at = null;
    public ?array $workspace2 = null;
}

/** Milestone entity data model. */
class Milestone
{
    public ?int $after_id = null;
    public string $app_url;
    public bool $archived;
    public ?int $before_id = null;
    public array $categories;
    public bool $completed;
    public string $completed_at;
    public string $completed_at_override;
    public string $created_at;
    public string $description;
    public string $entity_type;
    public string $global_id;
    public int $id;
    public array $key_result_ids;
    public string $name;
    public int $position;
    public bool $started;
    public string $started_at;
    public string $started_at_override;
    public string $state;
    public array $stats;
    public string $updated_at;
}

/** Request payload for Milestone#load. */
class MilestoneLoadMatch
{
    public int $id;
}

/** Request payload for Milestone#list. */
class MilestoneListMatch
{
    public ?int $category_id = null;
}

/** Request payload for Milestone#create. */
class MilestoneCreateData
{
    public ?int $after_id = null;
    public string $app_url;
    public bool $archived;
    public ?int $before_id = null;
    public array $categories;
    public bool $completed;
    public string $completed_at;
    public string $completed_at_override;
    public string $created_at;
    public string $description;
    public string $entity_type;
    public string $global_id;
    public int $id;
    public array $key_result_ids;
    public string $name;
    public int $position;
    public bool $started;
    public string $started_at;
    public string $started_at_override;
    public string $state;
    public array $stats;
    public string $updated_at;
}

/** Request payload for Milestone#update. */
class MilestoneUpdateData
{
    public int $id;
    public ?int $after_id = null;
    public ?string $app_url = null;
    public ?bool $archived = null;
    public ?int $before_id = null;
    public ?array $categories = null;
    public ?bool $completed = null;
    public ?string $completed_at = null;
    public ?string $completed_at_override = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?string $global_id = null;
    public ?array $key_result_ids = null;
    public ?string $name = null;
    public ?int $position = null;
    public ?bool $started = null;
    public ?string $started_at = null;
    public ?string $started_at_override = null;
    public ?string $state = null;
    public ?array $stats = null;
    public ?string $updated_at = null;
}

/** Request payload for Milestone#remove. */
class MilestoneRemoveMatch
{
    public int $id;
}

/** Objectif entity data model. */
class Objectif
{
}

/** Request payload for Objectif#remove. */
class ObjectifRemoveMatch
{
    public int $id;
}

/** Objective entity data model. */
class Objective
{
    public ?int $after_id = null;
    public string $app_url;
    public bool $archived;
    public ?int $before_id = null;
    public array $categories;
    public bool $completed;
    public string $completed_at;
    public string $completed_at_override;
    public string $created_at;
    public string $description;
    public string $entity_type;
    public string $global_id;
    public int $id;
    public array $key_result_ids;
    public string $name;
    public int $position;
    public bool $started;
    public string $started_at;
    public string $started_at_override;
    public string $state;
    public array $stats;
    public string $updated_at;
}

/** Request payload for Objective#load. */
class ObjectiveLoadMatch
{
    public int $objective_public_id;
}

/** Request payload for Objective#list. */
class ObjectiveListMatch
{
    public ?int $after_id = null;
    public ?string $app_url = null;
    public ?bool $archived = null;
    public ?int $before_id = null;
    public ?array $categories = null;
    public ?bool $completed = null;
    public ?string $completed_at = null;
    public ?string $completed_at_override = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?string $global_id = null;
    public ?int $id = null;
    public ?array $key_result_ids = null;
    public ?string $name = null;
    public ?int $position = null;
    public ?bool $started = null;
    public ?string $started_at = null;
    public ?string $started_at_override = null;
    public ?string $state = null;
    public ?array $stats = null;
    public ?string $updated_at = null;
}

/** Request payload for Objective#create. */
class ObjectiveCreateData
{
    public ?int $after_id = null;
    public string $app_url;
    public bool $archived;
    public ?int $before_id = null;
    public array $categories;
    public bool $completed;
    public string $completed_at;
    public string $completed_at_override;
    public string $created_at;
    public string $description;
    public string $entity_type;
    public string $global_id;
    public int $id;
    public array $key_result_ids;
    public string $name;
    public int $position;
    public bool $started;
    public string $started_at;
    public string $started_at_override;
    public string $state;
    public array $stats;
    public string $updated_at;
}

/** Request payload for Objective#update. */
class ObjectiveUpdateData
{
    public int $objective_public_id;
    public ?int $after_id = null;
    public ?string $app_url = null;
    public ?bool $archived = null;
    public ?int $before_id = null;
    public ?array $categories = null;
    public ?bool $completed = null;
    public ?string $completed_at = null;
    public ?string $completed_at_override = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?string $global_id = null;
    public ?int $id = null;
    public ?array $key_result_ids = null;
    public ?string $name = null;
    public ?int $position = null;
    public ?bool $started = null;
    public ?string $started_at = null;
    public ?string $started_at_override = null;
    public ?string $state = null;
    public ?array $stats = null;
    public ?string $updated_at = null;
}

/** Project entity data model. */
class Project
{
    public string $abbreviation;
    public string $app_url;
    public bool $archived;
    public string $color;
    public string $created_at;
    public int $days_to_thermometer;
    public string $description;
    public string $entity_type;
    public string $external_id;
    public array $follower_ids;
    public string $global_id;
    public int $id;
    public int $iteration_length;
    public string $name;
    public bool $show_thermometer;
    public string $start_time;
    public array $stats;
    public int $team_id;
    public string $updated_at;
    public int $workflow_id;
}

/** Request payload for Project#load. */
class ProjectLoadMatch
{
    public int $id;
}

/** Request payload for Project#list. */
class ProjectListMatch
{
    public ?string $abbreviation = null;
    public ?string $app_url = null;
    public ?bool $archived = null;
    public ?string $color = null;
    public ?string $created_at = null;
    public ?int $days_to_thermometer = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?string $external_id = null;
    public ?array $follower_ids = null;
    public ?string $global_id = null;
    public ?int $id = null;
    public ?int $iteration_length = null;
    public ?string $name = null;
    public ?bool $show_thermometer = null;
    public ?string $start_time = null;
    public ?array $stats = null;
    public ?int $team_id = null;
    public ?string $updated_at = null;
    public ?int $workflow_id = null;
}

/** Request payload for Project#create. */
class ProjectCreateData
{
    public string $abbreviation;
    public string $app_url;
    public bool $archived;
    public string $color;
    public string $created_at;
    public int $days_to_thermometer;
    public string $description;
    public string $entity_type;
    public string $external_id;
    public array $follower_ids;
    public string $global_id;
    public int $id;
    public int $iteration_length;
    public string $name;
    public bool $show_thermometer;
    public string $start_time;
    public array $stats;
    public int $team_id;
    public string $updated_at;
    public int $workflow_id;
}

/** Request payload for Project#update. */
class ProjectUpdateData
{
    public int $id;
    public ?string $abbreviation = null;
    public ?string $app_url = null;
    public ?bool $archived = null;
    public ?string $color = null;
    public ?string $created_at = null;
    public ?int $days_to_thermometer = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?string $external_id = null;
    public ?array $follower_ids = null;
    public ?string $global_id = null;
    public ?int $iteration_length = null;
    public ?string $name = null;
    public ?bool $show_thermometer = null;
    public ?string $start_time = null;
    public ?array $stats = null;
    public ?int $team_id = null;
    public ?string $updated_at = null;
    public ?int $workflow_id = null;
}

/** Request payload for Project#remove. */
class ProjectRemoveMatch
{
    public int $id;
}

/** Repository entity data model. */
class Repository
{
    public string $created_at;
    public string $entity_type;
    public string $external_id;
    public string $full_name;
    public int $id;
    public string $name;
    public string $type;
    public string $updated_at;
    public string $url;
}

/** Request payload for Repository#load. */
class RepositoryLoadMatch
{
    public int $id;
}

/** Request payload for Repository#list. */
class RepositoryListMatch
{
    public ?string $created_at = null;
    public ?string $entity_type = null;
    public ?string $external_id = null;
    public ?string $full_name = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?string $updated_at = null;
    public ?string $url = null;
}

/** Search entity data model. */
class Search
{
    public array $epics;
    public array $iterations;
    public array $milestones;
    public array $stories;
}

/** Request payload for Search#load. */
class SearchLoadMatch
{
    public ?array $epics = null;
    public ?array $iterations = null;
    public ?array $milestones = null;
    public ?array $stories = null;
}

/** Story entity data model. */
class Story
{
    public ?int $after_id = null;
    public string $app_url;
    public bool $archived;
    public ?int $before_id = null;
    public bool $blocked;
    public bool $blocker;
    public ?array $branch_ids = null;
    public array $branches;
    public ?array $comment_ids = null;
    public array $comments;
    public ?array $commit_ids = null;
    public array $commits;
    public bool $completed;
    public string $completed_at;
    public string $completed_at_override;
    public string $created_at;
    public ?array $custom_fields = null;
    public ?array $custom_fields_add = null;
    public ?array $custom_fields_remove = null;
    public ?int $cycle_time = null;
    public string $deadline;
    public string $description;
    public string $entity_type;
    public int $epic_id;
    public int $estimate;
    public string $external_id;
    public array $external_links;
    public ?array $external_links_add = null;
    public ?array $external_links_remove = null;
    public ?array $file_ids = null;
    public ?array $file_ids_add = null;
    public ?array $file_ids_remove = null;
    public array $files;
    public array $follower_ids;
    public ?array $follower_ids_add = null;
    public ?array $follower_ids_remove = null;
    public ?string $formatted_vcs_branch_name = null;
    public string $global_id;
    public string $group_id;
    public array $group_mention_ids;
    public int $id;
    public int $iteration_id;
    public array $label_ids;
    public array $labels;
    public ?array $labels_add = null;
    public ?array $labels_remove = null;
    public ?int $lead_time = null;
    public ?array $linked_file_ids = null;
    public ?array $linked_file_ids_add = null;
    public ?array $linked_file_ids_remove = null;
    public array $linked_files;
    public array $member_mention_ids;
    public array $mention_ids;
    public ?string $move_to = null;
    public string $moved_at;
    public string $name;
    public ?int $num_tasks_completed = null;
    public array $owner_ids;
    public ?array $owner_ids_add = null;
    public ?array $owner_ids_remove = null;
    public ?int $parent_story_id = null;
    public int $position;
    public array $previous_iteration_ids;
    public int $project_id;
    public ?array $pull_request_ids = null;
    public array $pull_requests;
    public string $requested_by_id;
    public ?int $source_task_id = null;
    public bool $started;
    public string $started_at;
    public string $started_at_override;
    public array $stats;
    public array $story_links;
    public string $story_template_id;
    public string $story_type;
    public ?array $sub_task_story_ids = null;
    public ?array $sub_tasks = null;
    public array $synced_item;
    public ?array $task_ids = null;
    public array $tasks;
    public string $updated_at;
    public int $workflow_id;
    public int $workflow_state_id;
}

/** Request payload for Story#load. */
class StoryLoadMatch
{
    public int $id;
}

/** Request payload for Story#list. */
class StoryListMatch
{
    public ?string $group_id = null;
    public ?int $epic_id = null;
    public ?int $iteration_id = null;
    public ?int $label_id = null;
    public ?int $project_id = null;
}

/** Request payload for Story#create. */
class StoryCreateData
{
    public ?int $after_id = null;
    public string $app_url;
    public bool $archived;
    public ?int $before_id = null;
    public bool $blocked;
    public bool $blocker;
    public ?array $branch_ids = null;
    public array $branches;
    public ?array $comment_ids = null;
    public array $comments;
    public ?array $commit_ids = null;
    public array $commits;
    public bool $completed;
    public string $completed_at;
    public string $completed_at_override;
    public string $created_at;
    public ?array $custom_fields = null;
    public ?array $custom_fields_add = null;
    public ?array $custom_fields_remove = null;
    public ?int $cycle_time = null;
    public string $deadline;
    public string $description;
    public string $entity_type;
    public int $epic_id;
    public int $estimate;
    public string $external_id;
    public array $external_links;
    public ?array $external_links_add = null;
    public ?array $external_links_remove = null;
    public ?array $file_ids = null;
    public ?array $file_ids_add = null;
    public ?array $file_ids_remove = null;
    public array $files;
    public array $follower_ids;
    public ?array $follower_ids_add = null;
    public ?array $follower_ids_remove = null;
    public ?string $formatted_vcs_branch_name = null;
    public string $global_id;
    public string $group_id;
    public array $group_mention_ids;
    public int $id;
    public int $iteration_id;
    public array $label_ids;
    public array $labels;
    public ?array $labels_add = null;
    public ?array $labels_remove = null;
    public ?int $lead_time = null;
    public ?array $linked_file_ids = null;
    public ?array $linked_file_ids_add = null;
    public ?array $linked_file_ids_remove = null;
    public array $linked_files;
    public array $member_mention_ids;
    public array $mention_ids;
    public ?string $move_to = null;
    public string $moved_at;
    public string $name;
    public ?int $num_tasks_completed = null;
    public array $owner_ids;
    public ?array $owner_ids_add = null;
    public ?array $owner_ids_remove = null;
    public ?int $parent_story_id = null;
    public int $position;
    public array $previous_iteration_ids;
    public int $project_id;
    public ?array $pull_request_ids = null;
    public array $pull_requests;
    public string $requested_by_id;
    public ?int $source_task_id = null;
    public bool $started;
    public string $started_at;
    public string $started_at_override;
    public array $stats;
    public array $story_links;
    public string $story_template_id;
    public string $story_type;
    public ?array $sub_task_story_ids = null;
    public ?array $sub_tasks = null;
    public array $synced_item;
    public ?array $task_ids = null;
    public array $tasks;
    public string $updated_at;
    public int $workflow_id;
    public int $workflow_state_id;
}

/** Request payload for Story#update. */
class StoryUpdateData
{
    public int $id;
    public ?int $after_id = null;
    public ?string $app_url = null;
    public ?bool $archived = null;
    public ?int $before_id = null;
    public ?bool $blocked = null;
    public ?bool $blocker = null;
    public ?array $branch_ids = null;
    public ?array $branches = null;
    public ?array $comment_ids = null;
    public ?array $comments = null;
    public ?array $commit_ids = null;
    public ?array $commits = null;
    public ?bool $completed = null;
    public ?string $completed_at = null;
    public ?string $completed_at_override = null;
    public ?string $created_at = null;
    public ?array $custom_fields = null;
    public ?array $custom_fields_add = null;
    public ?array $custom_fields_remove = null;
    public ?int $cycle_time = null;
    public ?string $deadline = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?int $epic_id = null;
    public ?int $estimate = null;
    public ?string $external_id = null;
    public ?array $external_links = null;
    public ?array $external_links_add = null;
    public ?array $external_links_remove = null;
    public ?array $file_ids = null;
    public ?array $file_ids_add = null;
    public ?array $file_ids_remove = null;
    public ?array $files = null;
    public ?array $follower_ids = null;
    public ?array $follower_ids_add = null;
    public ?array $follower_ids_remove = null;
    public ?string $formatted_vcs_branch_name = null;
    public ?string $global_id = null;
    public ?string $group_id = null;
    public ?array $group_mention_ids = null;
    public ?int $iteration_id = null;
    public ?array $label_ids = null;
    public ?array $labels = null;
    public ?array $labels_add = null;
    public ?array $labels_remove = null;
    public ?int $lead_time = null;
    public ?array $linked_file_ids = null;
    public ?array $linked_file_ids_add = null;
    public ?array $linked_file_ids_remove = null;
    public ?array $linked_files = null;
    public ?array $member_mention_ids = null;
    public ?array $mention_ids = null;
    public ?string $move_to = null;
    public ?string $moved_at = null;
    public ?string $name = null;
    public ?int $num_tasks_completed = null;
    public ?array $owner_ids = null;
    public ?array $owner_ids_add = null;
    public ?array $owner_ids_remove = null;
    public ?int $parent_story_id = null;
    public ?int $position = null;
    public ?array $previous_iteration_ids = null;
    public ?int $project_id = null;
    public ?array $pull_request_ids = null;
    public ?array $pull_requests = null;
    public ?string $requested_by_id = null;
    public ?int $source_task_id = null;
    public ?bool $started = null;
    public ?string $started_at = null;
    public ?string $started_at_override = null;
    public ?array $stats = null;
    public ?array $story_links = null;
    public ?string $story_template_id = null;
    public ?string $story_type = null;
    public ?array $sub_task_story_ids = null;
    public ?array $sub_tasks = null;
    public ?array $synced_item = null;
    public ?array $task_ids = null;
    public ?array $tasks = null;
    public ?string $updated_at = null;
    public ?int $workflow_id = null;
    public ?int $workflow_state_id = null;
}

/** Request payload for Story#remove. */
class StoryRemoveMatch
{
    public int $id;
}

/** StoryComment entity data model. */
class StoryComment
{
    public string $app_url;
    public string $author_id;
    public ?bool $blocker = null;
    public string $created_at;
    public bool $deleted;
    public string $entity_type;
    public string $external_id;
    public array $group_mention_ids;
    public int $id;
    public bool $linked_to_slack;
    public array $member_mention_ids;
    public array $mention_ids;
    public ?int $parent_id = null;
    public int $position;
    public array $reactions;
    public int $story_id;
    public string $text;
    public ?bool $unblocks_parent = null;
    public string $updated_at;
}

/** Request payload for StoryComment#load. */
class StoryCommentLoadMatch
{
    public int $id;
    public int $story_id;
}

/** Request payload for StoryComment#list. */
class StoryCommentListMatch
{
    public int $id;
}

/** Request payload for StoryComment#create. */
class StoryCommentCreateData
{
    public ?int $comment_id = null;
    public ?int $story_id = null;
    public ?int $id = null;
    public string $app_url;
    public string $author_id;
    public ?bool $blocker = null;
    public string $created_at;
    public bool $deleted;
    public string $entity_type;
    public string $external_id;
    public array $group_mention_ids;
    public bool $linked_to_slack;
    public array $member_mention_ids;
    public array $mention_ids;
    public ?int $parent_id = null;
    public int $position;
    public array $reactions;
    public string $text;
    public ?bool $unblocks_parent = null;
    public string $updated_at;
}

/** Request payload for StoryComment#update. */
class StoryCommentUpdateData
{
    public int $id;
    public int $story_id;
    public ?string $app_url = null;
    public ?string $author_id = null;
    public ?bool $blocker = null;
    public ?string $created_at = null;
    public ?bool $deleted = null;
    public ?string $entity_type = null;
    public ?string $external_id = null;
    public ?array $group_mention_ids = null;
    public ?bool $linked_to_slack = null;
    public ?array $member_mention_ids = null;
    public ?array $mention_ids = null;
    public ?int $parent_id = null;
    public ?int $position = null;
    public ?array $reactions = null;
    public ?string $text = null;
    public ?bool $unblocks_parent = null;
    public ?string $updated_at = null;
}

/** StoryLink entity data model. */
class StoryLink
{
    public string $created_at;
    public string $entity_type;
    public int $id;
    public int $object_id;
    public int $subject_id;
    public int $subject_workflow_state_id;
    public string $updated_at;
    public string $verb;
}

/** Request payload for StoryLink#load. */
class StoryLinkLoadMatch
{
    public int $id;
}

/** Request payload for StoryLink#create. */
class StoryLinkCreateData
{
    public string $created_at;
    public string $entity_type;
    public int $id;
    public int $object_id;
    public int $subject_id;
    public int $subject_workflow_state_id;
    public string $updated_at;
    public string $verb;
}

/** Request payload for StoryLink#update. */
class StoryLinkUpdateData
{
    public int $id;
    public ?string $created_at = null;
    public ?string $entity_type = null;
    public ?int $object_id = null;
    public ?int $subject_id = null;
    public ?int $subject_workflow_state_id = null;
    public ?string $updated_at = null;
    public ?string $verb = null;
}

/** Request payload for StoryLink#remove. */
class StoryLinkRemoveMatch
{
    public int $id;
}

/** StoryReaction entity data model. */
class StoryReaction
{
    public string $emoji;
}

/** Request payload for StoryReaction#create. */
class StoryReactionCreateData
{
    public int $comment_id;
    public int $story_id;
    public string $emoji;
}

/** Request payload for StoryReaction#remove. */
class StoryReactionRemoveMatch
{
    public int $comment_id;
    public int $story_id;
}

/** StorySlim entity data model. */
class StorySlim
{
    public ?int $after_id = null;
    public ?bool $archived = null;
    public ?int $before_id = null;
    public ?string $completed_at_end = null;
    public ?string $completed_at_start = null;
    public ?string $created_at_end = null;
    public ?string $created_at_start = null;
    public ?array $custom_fields_add = null;
    public ?array $custom_fields_remove = null;
    public ?string $deadline = null;
    public ?string $deadline_end = null;
    public ?string $deadline_start = null;
    public ?int $epic_id = null;
    public ?array $epic_ids = null;
    public ?int $estimate = null;
    public ?string $external_id = null;
    public ?array $external_links = null;
    public ?array $follower_ids_add = null;
    public ?array $follower_ids_remove = null;
    public ?string $group_id = null;
    public ?array $group_ids = null;
    public ?bool $includes_description = null;
    public ?int $iteration_id = null;
    public ?array $iteration_ids = null;
    public ?array $label_ids = null;
    public ?string $label_name = null;
    public ?array $labels_add = null;
    public ?array $labels_remove = null;
    public ?string $move_to = null;
    public ?string $owner_id = null;
    public ?array $owner_ids = null;
    public ?array $owner_ids_add = null;
    public ?array $owner_ids_remove = null;
    public ?int $project_id = null;
    public ?array $project_ids = null;
    public ?string $requested_by_id = null;
    public array $stories;
    public array $story_ids;
    public ?string $story_type = null;
    public ?string $updated_at_end = null;
    public ?string $updated_at_start = null;
    public ?int $workflow_state_id = null;
    public ?array $workflow_state_types = null;
}

/** Request payload for StorySlim#create. */
class StorySlimCreateData
{
    public ?int $after_id = null;
    public ?bool $archived = null;
    public ?int $before_id = null;
    public ?string $completed_at_end = null;
    public ?string $completed_at_start = null;
    public ?string $created_at_end = null;
    public ?string $created_at_start = null;
    public ?array $custom_fields_add = null;
    public ?array $custom_fields_remove = null;
    public ?string $deadline = null;
    public ?string $deadline_end = null;
    public ?string $deadline_start = null;
    public ?int $epic_id = null;
    public ?array $epic_ids = null;
    public ?int $estimate = null;
    public ?string $external_id = null;
    public ?array $external_links = null;
    public ?array $follower_ids_add = null;
    public ?array $follower_ids_remove = null;
    public ?string $group_id = null;
    public ?array $group_ids = null;
    public ?bool $includes_description = null;
    public ?int $iteration_id = null;
    public ?array $iteration_ids = null;
    public ?array $label_ids = null;
    public ?string $label_name = null;
    public ?array $labels_add = null;
    public ?array $labels_remove = null;
    public ?string $move_to = null;
    public ?string $owner_id = null;
    public ?array $owner_ids = null;
    public ?array $owner_ids_add = null;
    public ?array $owner_ids_remove = null;
    public ?int $project_id = null;
    public ?array $project_ids = null;
    public ?string $requested_by_id = null;
    public array $stories;
    public array $story_ids;
    public ?string $story_type = null;
    public ?string $updated_at_end = null;
    public ?string $updated_at_start = null;
    public ?int $workflow_state_id = null;
    public ?array $workflow_state_types = null;
}

/** Request payload for StorySlim#update. */
class StorySlimUpdateData
{
    public ?int $after_id = null;
    public ?bool $archived = null;
    public ?int $before_id = null;
    public ?string $completed_at_end = null;
    public ?string $completed_at_start = null;
    public ?string $created_at_end = null;
    public ?string $created_at_start = null;
    public ?array $custom_fields_add = null;
    public ?array $custom_fields_remove = null;
    public ?string $deadline = null;
    public ?string $deadline_end = null;
    public ?string $deadline_start = null;
    public ?int $epic_id = null;
    public ?array $epic_ids = null;
    public ?int $estimate = null;
    public ?string $external_id = null;
    public ?array $external_links = null;
    public ?array $follower_ids_add = null;
    public ?array $follower_ids_remove = null;
    public ?string $group_id = null;
    public ?array $group_ids = null;
    public ?bool $includes_description = null;
    public ?int $iteration_id = null;
    public ?array $iteration_ids = null;
    public ?array $label_ids = null;
    public ?string $label_name = null;
    public ?array $labels_add = null;
    public ?array $labels_remove = null;
    public ?string $move_to = null;
    public ?string $owner_id = null;
    public ?array $owner_ids = null;
    public ?array $owner_ids_add = null;
    public ?array $owner_ids_remove = null;
    public ?int $project_id = null;
    public ?array $project_ids = null;
    public ?string $requested_by_id = null;
    public ?array $stories = null;
    public ?array $story_ids = null;
    public ?string $story_type = null;
    public ?string $updated_at_end = null;
    public ?string $updated_at_start = null;
    public ?int $workflow_state_id = null;
    public ?array $workflow_state_types = null;
}

/** Task entity data model. */
class Task
{
    public ?int $after_id = null;
    public ?int $before_id = null;
    public bool $complete;
    public string $completed_at;
    public string $created_at;
    public string $description;
    public string $entity_type;
    public string $external_id;
    public string $global_id;
    public array $group_mention_ids;
    public int $id;
    public array $member_mention_ids;
    public array $mention_ids;
    public array $owner_ids;
    public int $position;
    public int $story_id;
    public string $updated_at;
}

/** Request payload for Task#load. */
class TaskLoadMatch
{
    public int $id;
    public int $story_id;
}

/** Request payload for Task#create. */
class TaskCreateData
{
    public int $story_id;
    public ?int $after_id = null;
    public ?int $before_id = null;
    public bool $complete;
    public string $completed_at;
    public string $created_at;
    public string $description;
    public string $entity_type;
    public string $external_id;
    public string $global_id;
    public array $group_mention_ids;
    public int $id;
    public array $member_mention_ids;
    public array $mention_ids;
    public array $owner_ids;
    public int $position;
    public string $updated_at;
}

/** Request payload for Task#update. */
class TaskUpdateData
{
    public int $id;
    public int $story_id;
    public ?int $after_id = null;
    public ?int $before_id = null;
    public ?bool $complete = null;
    public ?string $completed_at = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?string $external_id = null;
    public ?string $global_id = null;
    public ?array $group_mention_ids = null;
    public ?array $member_mention_ids = null;
    public ?array $mention_ids = null;
    public ?array $owner_ids = null;
    public ?int $position = null;
    public ?string $updated_at = null;
}

/** Request payload for Task#remove. */
class TaskRemoveMatch
{
    public int $id;
    public int $story_id;
}

/** ThreadedComment entity data model. */
class ThreadedComment
{
    public string $app_url;
    public string $author_id;
    public array $comments;
    public string $created_at;
    public bool $deleted;
    public string $entity_type;
    public string $external_id;
    public array $group_mention_ids;
    public int $id;
    public array $member_mention_ids;
    public array $mention_ids;
    public string $text;
    public string $updated_at;
}

/** Request payload for ThreadedComment#load. */
class ThreadedCommentLoadMatch
{
    public int $epic_id;
    public int $id;
}

/** Request payload for ThreadedComment#list. */
class ThreadedCommentListMatch
{
    public int $epic_id;
}

/** Request payload for ThreadedComment#create. */
class ThreadedCommentCreateData
{
    public int $epic_id;
    public ?int $id = null;
    public string $app_url;
    public string $author_id;
    public array $comments;
    public string $created_at;
    public bool $deleted;
    public string $entity_type;
    public string $external_id;
    public array $group_mention_ids;
    public array $member_mention_ids;
    public array $mention_ids;
    public string $text;
    public string $updated_at;
}

/** Request payload for ThreadedComment#update. */
class ThreadedCommentUpdateData
{
    public int $epic_id;
    public int $id;
    public ?string $app_url = null;
    public ?string $author_id = null;
    public ?array $comments = null;
    public ?string $created_at = null;
    public ?bool $deleted = null;
    public ?string $entity_type = null;
    public ?string $external_id = null;
    public ?array $group_mention_ids = null;
    public ?array $member_mention_ids = null;
    public ?array $mention_ids = null;
    public ?string $text = null;
    public ?string $updated_at = null;
}

/** Request payload for ThreadedComment#remove. */
class ThreadedCommentRemoveMatch
{
    public int $epic_id;
    public int $id;
}

/** UploadedFile entity data model. */
class UploadedFile
{
    public string $content_type;
    public string $created_at;
    public string $description;
    public string $entity_type;
    public string $external_id;
    public string $filename;
    public array $group_mention_ids;
    public int $id;
    public array $member_mention_ids;
    public array $mention_ids;
    public string $name;
    public int $size;
    public array $story_ids;
    public string $thumbnail_url;
    public string $updated_at;
    public string $uploader_id;
    public string $url;
}

/** Request payload for UploadedFile#load. */
class UploadedFileLoadMatch
{
    public int $id;
}

/** Request payload for UploadedFile#list. */
class UploadedFileListMatch
{
    public ?string $content_type = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?string $external_id = null;
    public ?string $filename = null;
    public ?array $group_mention_ids = null;
    public ?int $id = null;
    public ?array $member_mention_ids = null;
    public ?array $mention_ids = null;
    public ?string $name = null;
    public ?int $size = null;
    public ?array $story_ids = null;
    public ?string $thumbnail_url = null;
    public ?string $updated_at = null;
    public ?string $uploader_id = null;
    public ?string $url = null;
}

/** Request payload for UploadedFile#create. */
class UploadedFileCreateData
{
    public string $content_type;
    public string $created_at;
    public string $description;
    public string $entity_type;
    public string $external_id;
    public string $filename;
    public array $group_mention_ids;
    public int $id;
    public array $member_mention_ids;
    public array $mention_ids;
    public string $name;
    public int $size;
    public array $story_ids;
    public string $thumbnail_url;
    public string $updated_at;
    public string $uploader_id;
    public string $url;
}

/** Request payload for UploadedFile#update. */
class UploadedFileUpdateData
{
    public int $id;
    public ?string $content_type = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?string $external_id = null;
    public ?string $filename = null;
    public ?array $group_mention_ids = null;
    public ?array $member_mention_ids = null;
    public ?array $mention_ids = null;
    public ?string $name = null;
    public ?int $size = null;
    public ?array $story_ids = null;
    public ?string $thumbnail_url = null;
    public ?string $updated_at = null;
    public ?string $uploader_id = null;
    public ?string $url = null;
}

/** Request payload for UploadedFile#remove. */
class UploadedFileRemoveMatch
{
    public int $id;
}

/** Webhook entity data model. */
class Webhook
{
    public ?string $secret = null;
    public string $webhook_url;
}

/** Request payload for Webhook#load. */
class WebhookLoadMatch
{
    public int $id;
}

/** Request payload for Webhook#create. */
class WebhookCreateData
{
    public ?string $secret = null;
    public string $webhook_url;
}

/** Request payload for Webhook#remove. */
class WebhookRemoveMatch
{
    public int $id;
}

/** Workflow entity data model. */
class Workflow
{
    public bool $auto_assign_owner;
    public string $created_at;
    public int $default_state_id;
    public string $description;
    public string $entity_type;
    public int $id;
    public string $name;
    public array $project_ids;
    public array $states;
    public int $team_id;
    public string $updated_at;
}

/** Request payload for Workflow#load. */
class WorkflowLoadMatch
{
    public int $id;
}

/** Request payload for Workflow#list. */
class WorkflowListMatch
{
    public ?bool $auto_assign_owner = null;
    public ?string $created_at = null;
    public ?int $default_state_id = null;
    public ?string $description = null;
    public ?string $entity_type = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?array $project_ids = null;
    public ?array $states = null;
    public ?int $team_id = null;
    public ?string $updated_at = null;
}


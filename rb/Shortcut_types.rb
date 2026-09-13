# frozen_string_literal: true

# Typed models for the Shortcut SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Bulk entity data model.
class Bulk
end

# Request payload for Bulk#remove.
class BulkRemoveMatch
end

# Category entity data model.
#
# @!attribute [rw] archived
#   @return [Boolean]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] external_id
#   @return [String]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
Category = Struct.new(
  :archived,
  :color,
  :created_at,
  :entity_type,
  :external_id,
  :global_id,
  :id,
  :name,
  :type,
  :updated_at,
  keyword_init: true
)

# Request payload for Category#load.
#
# @!attribute [rw] id
#   @return [Integer]
CategoryLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Category#list.
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] global_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
CategoryListMatch = Struct.new(
  :archived,
  :color,
  :created_at,
  :entity_type,
  :external_id,
  :global_id,
  :id,
  :name,
  :type,
  :updated_at,
  keyword_init: true
)

# Request payload for Category#create.
#
# @!attribute [rw] archived
#   @return [Boolean]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] external_id
#   @return [String]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
CategoryCreateData = Struct.new(
  :archived,
  :color,
  :created_at,
  :entity_type,
  :external_id,
  :global_id,
  :id,
  :name,
  :type,
  :updated_at,
  keyword_init: true
)

# Request payload for Category#update.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] global_id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
CategoryUpdateData = Struct.new(
  :id,
  :archived,
  :color,
  :created_at,
  :entity_type,
  :external_id,
  :global_id,
  :name,
  :type,
  :updated_at,
  keyword_init: true
)

# Request payload for Category#remove.
#
# @!attribute [rw] id
#   @return [Integer]
CategoryRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Comment entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Comment = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Comment#remove.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] story_id
#   @return [Integer]
CommentRemoveMatch = Struct.new(
  :id,
  :story_id,
  keyword_init: true
)

# CustomField entity data model.
#
# @!attribute [rw] after_id
#   @return [String, nil]
#
# @!attribute [rw] before_id
#   @return [String, nil]
#
# @!attribute [rw] canonical_name
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] field_type
#   @return [String]
#
# @!attribute [rw] fixed_position
#   @return [Boolean, nil]
#
# @!attribute [rw] icon_set_identifier
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] position
#   @return [Integer]
#
# @!attribute [rw] story_types
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] values
#   @return [Array, nil]
CustomField = Struct.new(
  :after_id,
  :before_id,
  :canonical_name,
  :created_at,
  :description,
  :enabled,
  :entity_type,
  :field_type,
  :fixed_position,
  :icon_set_identifier,
  :id,
  :name,
  :position,
  :story_types,
  :updated_at,
  :values,
  keyword_init: true
)

# Request payload for CustomField#load.
#
# @!attribute [rw] id
#   @return [String]
CustomFieldLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for CustomField#list.
#
# @!attribute [rw] after_id
#   @return [String, nil]
#
# @!attribute [rw] before_id
#   @return [String, nil]
#
# @!attribute [rw] canonical_name
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] field_type
#   @return [String, nil]
#
# @!attribute [rw] fixed_position
#   @return [Boolean, nil]
#
# @!attribute [rw] icon_set_identifier
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [Integer, nil]
#
# @!attribute [rw] story_types
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] values
#   @return [Array, nil]
CustomFieldListMatch = Struct.new(
  :after_id,
  :before_id,
  :canonical_name,
  :created_at,
  :description,
  :enabled,
  :entity_type,
  :field_type,
  :fixed_position,
  :icon_set_identifier,
  :id,
  :name,
  :position,
  :story_types,
  :updated_at,
  :values,
  keyword_init: true
)

# Request payload for CustomField#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] after_id
#   @return [String, nil]
#
# @!attribute [rw] before_id
#   @return [String, nil]
#
# @!attribute [rw] canonical_name
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] field_type
#   @return [String, nil]
#
# @!attribute [rw] fixed_position
#   @return [Boolean, nil]
#
# @!attribute [rw] icon_set_identifier
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [Integer, nil]
#
# @!attribute [rw] story_types
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] values
#   @return [Array, nil]
CustomFieldUpdateData = Struct.new(
  :id,
  :after_id,
  :before_id,
  :canonical_name,
  :created_at,
  :description,
  :enabled,
  :entity_type,
  :field_type,
  :fixed_position,
  :icon_set_identifier,
  :name,
  :position,
  :story_types,
  :updated_at,
  :values,
  keyword_init: true
)

# Request payload for CustomField#remove.
#
# @!attribute [rw] id
#   @return [String]
CustomFieldRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Disable entity data model.
class Disable
end

# Request payload for Disable#update.
class DisableUpdateData
end

# DocSlim entity data model.
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] content
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
DocSlim = Struct.new(
  :app_url,
  :content,
  :id,
  :title,
  keyword_init: true
)

# Request payload for DocSlim#list.
#
# @!attribute [rw] app_url
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
DocSlimListMatch = Struct.new(
  :app_url,
  :content,
  :id,
  :title,
  keyword_init: true
)

# Request payload for DocSlim#create.
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] content
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
DocSlimCreateData = Struct.new(
  :app_url,
  :content,
  :id,
  :title,
  keyword_init: true
)

# Enable entity data model.
class Enable
end

# Request payload for Enable#update.
class EnableUpdateData
end

# EntityTemplate entity data model.
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] custom_fields
#   @return [Array, nil]
#
# @!attribute [rw] deadline
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] epic_id
#   @return [Integer, nil]
#
# @!attribute [rw] estimate
#   @return [Integer, nil]
#
# @!attribute [rw] external_links
#   @return [Array, nil]
#
# @!attribute [rw] files
#   @return [Array, nil]
#
# @!attribute [rw] follower_ids
#   @return [Array, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] iteration_id
#   @return [Integer, nil]
#
# @!attribute [rw] label_ids
#   @return [Array, nil]
#
# @!attribute [rw] labels
#   @return [Array, nil]
#
# @!attribute [rw] last_used_at
#   @return [String]
#
# @!attribute [rw] linked_files
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] owner_ids
#   @return [Array, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] story_contents
#   @return [Hash]
#
# @!attribute [rw] story_type
#   @return [String, nil]
#
# @!attribute [rw] sub_tasks
#   @return [Array, nil]
#
# @!attribute [rw] tasks
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] workflow_state_id
#   @return [Integer, nil]
EntityTemplate = Struct.new(
  :author_id,
  :created_at,
  :custom_fields,
  :deadline,
  :description,
  :entity_type,
  :epic_id,
  :estimate,
  :external_links,
  :files,
  :follower_ids,
  :group_id,
  :id,
  :iteration_id,
  :label_ids,
  :labels,
  :last_used_at,
  :linked_files,
  :name,
  :owner_ids,
  :project_id,
  :story_contents,
  :story_type,
  :sub_tasks,
  :tasks,
  :updated_at,
  :workflow_state_id,
  keyword_init: true
)

# Request payload for EntityTemplate#load.
#
# @!attribute [rw] id
#   @return [String]
EntityTemplateLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for EntityTemplate#list.
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] custom_fields
#   @return [Array, nil]
#
# @!attribute [rw] deadline
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] epic_id
#   @return [Integer, nil]
#
# @!attribute [rw] estimate
#   @return [Integer, nil]
#
# @!attribute [rw] external_links
#   @return [Array, nil]
#
# @!attribute [rw] files
#   @return [Array, nil]
#
# @!attribute [rw] follower_ids
#   @return [Array, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] iteration_id
#   @return [Integer, nil]
#
# @!attribute [rw] label_ids
#   @return [Array, nil]
#
# @!attribute [rw] labels
#   @return [Array, nil]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] linked_files
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] owner_ids
#   @return [Array, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] story_contents
#   @return [Hash, nil]
#
# @!attribute [rw] story_type
#   @return [String, nil]
#
# @!attribute [rw] sub_tasks
#   @return [Array, nil]
#
# @!attribute [rw] tasks
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] workflow_state_id
#   @return [Integer, nil]
EntityTemplateListMatch = Struct.new(
  :author_id,
  :created_at,
  :custom_fields,
  :deadline,
  :description,
  :entity_type,
  :epic_id,
  :estimate,
  :external_links,
  :files,
  :follower_ids,
  :group_id,
  :id,
  :iteration_id,
  :label_ids,
  :labels,
  :last_used_at,
  :linked_files,
  :name,
  :owner_ids,
  :project_id,
  :story_contents,
  :story_type,
  :sub_tasks,
  :tasks,
  :updated_at,
  :workflow_state_id,
  keyword_init: true
)

# Request payload for EntityTemplate#create.
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] custom_fields
#   @return [Array, nil]
#
# @!attribute [rw] deadline
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] epic_id
#   @return [Integer, nil]
#
# @!attribute [rw] estimate
#   @return [Integer, nil]
#
# @!attribute [rw] external_links
#   @return [Array, nil]
#
# @!attribute [rw] files
#   @return [Array, nil]
#
# @!attribute [rw] follower_ids
#   @return [Array, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] iteration_id
#   @return [Integer, nil]
#
# @!attribute [rw] label_ids
#   @return [Array, nil]
#
# @!attribute [rw] labels
#   @return [Array, nil]
#
# @!attribute [rw] last_used_at
#   @return [String]
#
# @!attribute [rw] linked_files
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] owner_ids
#   @return [Array, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] story_contents
#   @return [Hash]
#
# @!attribute [rw] story_type
#   @return [String, nil]
#
# @!attribute [rw] sub_tasks
#   @return [Array, nil]
#
# @!attribute [rw] tasks
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] workflow_state_id
#   @return [Integer, nil]
EntityTemplateCreateData = Struct.new(
  :author_id,
  :created_at,
  :custom_fields,
  :deadline,
  :description,
  :entity_type,
  :epic_id,
  :estimate,
  :external_links,
  :files,
  :follower_ids,
  :group_id,
  :id,
  :iteration_id,
  :label_ids,
  :labels,
  :last_used_at,
  :linked_files,
  :name,
  :owner_ids,
  :project_id,
  :story_contents,
  :story_type,
  :sub_tasks,
  :tasks,
  :updated_at,
  :workflow_state_id,
  keyword_init: true
)

# Request payload for EntityTemplate#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] custom_fields
#   @return [Array, nil]
#
# @!attribute [rw] deadline
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] epic_id
#   @return [Integer, nil]
#
# @!attribute [rw] estimate
#   @return [Integer, nil]
#
# @!attribute [rw] external_links
#   @return [Array, nil]
#
# @!attribute [rw] files
#   @return [Array, nil]
#
# @!attribute [rw] follower_ids
#   @return [Array, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] iteration_id
#   @return [Integer, nil]
#
# @!attribute [rw] label_ids
#   @return [Array, nil]
#
# @!attribute [rw] labels
#   @return [Array, nil]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] linked_files
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] owner_ids
#   @return [Array, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] story_contents
#   @return [Hash, nil]
#
# @!attribute [rw] story_type
#   @return [String, nil]
#
# @!attribute [rw] sub_tasks
#   @return [Array, nil]
#
# @!attribute [rw] tasks
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] workflow_state_id
#   @return [Integer, nil]
EntityTemplateUpdateData = Struct.new(
  :id,
  :author_id,
  :created_at,
  :custom_fields,
  :deadline,
  :description,
  :entity_type,
  :epic_id,
  :estimate,
  :external_links,
  :files,
  :follower_ids,
  :group_id,
  :iteration_id,
  :label_ids,
  :labels,
  :last_used_at,
  :linked_files,
  :name,
  :owner_ids,
  :project_id,
  :story_contents,
  :story_type,
  :sub_tasks,
  :tasks,
  :updated_at,
  :workflow_state_id,
  keyword_init: true
)

# Request payload for EntityTemplate#remove.
#
# @!attribute [rw] id
#   @return [String]
EntityTemplateRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Epic entity data model.
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] archived
#   @return [Boolean]
#
# @!attribute [rw] associated_groups
#   @return [Array]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] comments
#   @return [Array]
#
# @!attribute [rw] completed
#   @return [Boolean]
#
# @!attribute [rw] completed_at
#   @return [String]
#
# @!attribute [rw] completed_at_override
#   @return [String]
#
# @!attribute [rw] converted_from_story_id
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] deadline
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] epic_state_id
#   @return [Integer]
#
# @!attribute [rw] external_id
#   @return [String]
#
# @!attribute [rw] follower_ids
#   @return [Array]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] group_id
#   @return [String]
#
# @!attribute [rw] group_ids
#   @return [Array]
#
# @!attribute [rw] group_mention_ids
#   @return [Array]
#
# @!attribute [rw] health
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] label_ids
#   @return [Array]
#
# @!attribute [rw] labels
#   @return [Array]
#
# @!attribute [rw] member_mention_ids
#   @return [Array]
#
# @!attribute [rw] mention_ids
#   @return [Array]
#
# @!attribute [rw] milestone_id
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] objective_ids
#   @return [Array]
#
# @!attribute [rw] owner_ids
#   @return [Array]
#
# @!attribute [rw] planned_start_date
#   @return [String]
#
# @!attribute [rw] position
#   @return [Integer]
#
# @!attribute [rw] productboard_id
#   @return [String]
#
# @!attribute [rw] productboard_name
#   @return [String]
#
# @!attribute [rw] productboard_plugin_id
#   @return [String]
#
# @!attribute [rw] productboard_url
#   @return [String]
#
# @!attribute [rw] project_ids
#   @return [Array]
#
# @!attribute [rw] requested_by_id
#   @return [String]
#
# @!attribute [rw] started
#   @return [Boolean]
#
# @!attribute [rw] started_at
#   @return [String]
#
# @!attribute [rw] started_at_override
#   @return [String]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] stats
#   @return [Hash]
#
# @!attribute [rw] stories_without_projects
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [String]
Epic = Struct.new(
  :after_id,
  :app_url,
  :archived,
  :associated_groups,
  :before_id,
  :comments,
  :completed,
  :completed_at,
  :completed_at_override,
  :converted_from_story_id,
  :created_at,
  :deadline,
  :description,
  :entity_type,
  :epic_state_id,
  :external_id,
  :follower_ids,
  :global_id,
  :group_id,
  :group_ids,
  :group_mention_ids,
  :health,
  :id,
  :label_ids,
  :labels,
  :member_mention_ids,
  :mention_ids,
  :milestone_id,
  :name,
  :objective_ids,
  :owner_ids,
  :planned_start_date,
  :position,
  :productboard_id,
  :productboard_name,
  :productboard_plugin_id,
  :productboard_url,
  :project_ids,
  :requested_by_id,
  :started,
  :started_at,
  :started_at_override,
  :state,
  :stats,
  :stories_without_projects,
  :updated_at,
  keyword_init: true
)

# Request payload for Epic#load.
#
# @!attribute [rw] id
#   @return [Integer]
EpicLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Epic#list.
#
# @!attribute [rw] includes_description
#   @return [Boolean, nil]
EpicListMatch = Struct.new(
  :includes_description,
  keyword_init: true
)

# Request payload for Epic#create.
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] archived
#   @return [Boolean]
#
# @!attribute [rw] associated_groups
#   @return [Array]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] comments
#   @return [Array]
#
# @!attribute [rw] completed
#   @return [Boolean]
#
# @!attribute [rw] completed_at
#   @return [String]
#
# @!attribute [rw] completed_at_override
#   @return [String]
#
# @!attribute [rw] converted_from_story_id
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] deadline
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] epic_state_id
#   @return [Integer]
#
# @!attribute [rw] external_id
#   @return [String]
#
# @!attribute [rw] follower_ids
#   @return [Array]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] group_id
#   @return [String]
#
# @!attribute [rw] group_ids
#   @return [Array]
#
# @!attribute [rw] group_mention_ids
#   @return [Array]
#
# @!attribute [rw] health
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] label_ids
#   @return [Array]
#
# @!attribute [rw] labels
#   @return [Array]
#
# @!attribute [rw] member_mention_ids
#   @return [Array]
#
# @!attribute [rw] mention_ids
#   @return [Array]
#
# @!attribute [rw] milestone_id
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] objective_ids
#   @return [Array]
#
# @!attribute [rw] owner_ids
#   @return [Array]
#
# @!attribute [rw] planned_start_date
#   @return [String]
#
# @!attribute [rw] position
#   @return [Integer]
#
# @!attribute [rw] productboard_id
#   @return [String]
#
# @!attribute [rw] productboard_name
#   @return [String]
#
# @!attribute [rw] productboard_plugin_id
#   @return [String]
#
# @!attribute [rw] productboard_url
#   @return [String]
#
# @!attribute [rw] project_ids
#   @return [Array]
#
# @!attribute [rw] requested_by_id
#   @return [String]
#
# @!attribute [rw] started
#   @return [Boolean]
#
# @!attribute [rw] started_at
#   @return [String]
#
# @!attribute [rw] started_at_override
#   @return [String]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] stats
#   @return [Hash]
#
# @!attribute [rw] stories_without_projects
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [String]
EpicCreateData = Struct.new(
  :after_id,
  :app_url,
  :archived,
  :associated_groups,
  :before_id,
  :comments,
  :completed,
  :completed_at,
  :completed_at_override,
  :converted_from_story_id,
  :created_at,
  :deadline,
  :description,
  :entity_type,
  :epic_state_id,
  :external_id,
  :follower_ids,
  :global_id,
  :group_id,
  :group_ids,
  :group_mention_ids,
  :health,
  :id,
  :label_ids,
  :labels,
  :member_mention_ids,
  :mention_ids,
  :milestone_id,
  :name,
  :objective_ids,
  :owner_ids,
  :planned_start_date,
  :position,
  :productboard_id,
  :productboard_name,
  :productboard_plugin_id,
  :productboard_url,
  :project_ids,
  :requested_by_id,
  :started,
  :started_at,
  :started_at_override,
  :state,
  :stats,
  :stories_without_projects,
  :updated_at,
  keyword_init: true
)

# Request payload for Epic#update.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] app_url
#   @return [String, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] associated_groups
#   @return [Array, nil]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] comments
#   @return [Array, nil]
#
# @!attribute [rw] completed
#   @return [Boolean, nil]
#
# @!attribute [rw] completed_at
#   @return [String, nil]
#
# @!attribute [rw] completed_at_override
#   @return [String, nil]
#
# @!attribute [rw] converted_from_story_id
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] deadline
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] epic_state_id
#   @return [Integer, nil]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] follower_ids
#   @return [Array, nil]
#
# @!attribute [rw] global_id
#   @return [String, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] group_ids
#   @return [Array, nil]
#
# @!attribute [rw] group_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] health
#   @return [Hash, nil]
#
# @!attribute [rw] label_ids
#   @return [Array, nil]
#
# @!attribute [rw] labels
#   @return [Array, nil]
#
# @!attribute [rw] member_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] milestone_id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] objective_ids
#   @return [Array, nil]
#
# @!attribute [rw] owner_ids
#   @return [Array, nil]
#
# @!attribute [rw] planned_start_date
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [Integer, nil]
#
# @!attribute [rw] productboard_id
#   @return [String, nil]
#
# @!attribute [rw] productboard_name
#   @return [String, nil]
#
# @!attribute [rw] productboard_plugin_id
#   @return [String, nil]
#
# @!attribute [rw] productboard_url
#   @return [String, nil]
#
# @!attribute [rw] project_ids
#   @return [Array, nil]
#
# @!attribute [rw] requested_by_id
#   @return [String, nil]
#
# @!attribute [rw] started
#   @return [Boolean, nil]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] started_at_override
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] stats
#   @return [Hash, nil]
#
# @!attribute [rw] stories_without_projects
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
EpicUpdateData = Struct.new(
  :id,
  :after_id,
  :app_url,
  :archived,
  :associated_groups,
  :before_id,
  :comments,
  :completed,
  :completed_at,
  :completed_at_override,
  :converted_from_story_id,
  :created_at,
  :deadline,
  :description,
  :entity_type,
  :epic_state_id,
  :external_id,
  :follower_ids,
  :global_id,
  :group_id,
  :group_ids,
  :group_mention_ids,
  :health,
  :label_ids,
  :labels,
  :member_mention_ids,
  :mention_ids,
  :milestone_id,
  :name,
  :objective_ids,
  :owner_ids,
  :planned_start_date,
  :position,
  :productboard_id,
  :productboard_name,
  :productboard_plugin_id,
  :productboard_url,
  :project_ids,
  :requested_by_id,
  :started,
  :started_at,
  :started_at_override,
  :state,
  :stats,
  :stories_without_projects,
  :updated_at,
  keyword_init: true
)

# Request payload for Epic#remove.
#
# @!attribute [rw] id
#   @return [Integer]
EpicRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# EpicPaginatedResult entity data model.
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] archived
#   @return [Boolean]
#
# @!attribute [rw] associated_groups
#   @return [Array]
#
# @!attribute [rw] completed
#   @return [Boolean]
#
# @!attribute [rw] completed_at
#   @return [String]
#
# @!attribute [rw] completed_at_override
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] deadline
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] epic_state_id
#   @return [Integer]
#
# @!attribute [rw] external_id
#   @return [String]
#
# @!attribute [rw] follower_ids
#   @return [Array]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] group_id
#   @return [String]
#
# @!attribute [rw] group_ids
#   @return [Array]
#
# @!attribute [rw] group_mention_ids
#   @return [Array]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] label_ids
#   @return [Array]
#
# @!attribute [rw] labels
#   @return [Array]
#
# @!attribute [rw] member_mention_ids
#   @return [Array]
#
# @!attribute [rw] mention_ids
#   @return [Array]
#
# @!attribute [rw] milestone_id
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] objective_ids
#   @return [Array]
#
# @!attribute [rw] owner_ids
#   @return [Array]
#
# @!attribute [rw] planned_start_date
#   @return [String]
#
# @!attribute [rw] position
#   @return [Integer]
#
# @!attribute [rw] productboard_id
#   @return [String]
#
# @!attribute [rw] productboard_name
#   @return [String]
#
# @!attribute [rw] productboard_plugin_id
#   @return [String]
#
# @!attribute [rw] productboard_url
#   @return [String]
#
# @!attribute [rw] project_ids
#   @return [Array]
#
# @!attribute [rw] requested_by_id
#   @return [String]
#
# @!attribute [rw] started
#   @return [Boolean]
#
# @!attribute [rw] started_at
#   @return [String]
#
# @!attribute [rw] started_at_override
#   @return [String]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] stats
#   @return [Hash]
#
# @!attribute [rw] stories_without_projects
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [String]
EpicPaginatedResult = Struct.new(
  :app_url,
  :archived,
  :associated_groups,
  :completed,
  :completed_at,
  :completed_at_override,
  :created_at,
  :deadline,
  :description,
  :entity_type,
  :epic_state_id,
  :external_id,
  :follower_ids,
  :global_id,
  :group_id,
  :group_ids,
  :group_mention_ids,
  :id,
  :label_ids,
  :labels,
  :member_mention_ids,
  :mention_ids,
  :milestone_id,
  :name,
  :objective_ids,
  :owner_ids,
  :planned_start_date,
  :position,
  :productboard_id,
  :productboard_name,
  :productboard_plugin_id,
  :productboard_url,
  :project_ids,
  :requested_by_id,
  :started,
  :started_at,
  :started_at_override,
  :state,
  :stats,
  :stories_without_projects,
  :updated_at,
  keyword_init: true
)

# Request payload for EpicPaginatedResult#list.
#
# @!attribute [rw] includes_description
#   @return [Boolean, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
EpicPaginatedResultListMatch = Struct.new(
  :includes_description,
  :page,
  :page_size,
  keyword_init: true
)

# EpicUnlinkProductboard entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
EpicUnlinkProductboard = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for EpicUnlinkProductboard#create.
#
# @!attribute [rw] id
#   @return [Integer]
EpicUnlinkProductboardCreateData = Struct.new(
  :id,
  keyword_init: true
)

# EpicWorkflow entity data model.
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] position
#   @return [Integer]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
EpicWorkflow = Struct.new(
  :color,
  :created_at,
  :description,
  :entity_type,
  :global_id,
  :id,
  :name,
  :position,
  :type,
  :updated_at,
  keyword_init: true
)

# Request payload for EpicWorkflow#list.
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] global_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [Integer, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
EpicWorkflowListMatch = Struct.new(
  :color,
  :created_at,
  :description,
  :entity_type,
  :global_id,
  :id,
  :name,
  :position,
  :type,
  :updated_at,
  keyword_init: true
)

# Group entity data model.
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] archived
#   @return [Boolean]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] color_key
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] default_workflow_id
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] display_icon
#   @return [Hash]
#
# @!attribute [rw] display_icon_id
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] member_ids
#   @return [Array]
#
# @!attribute [rw] mention_name
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] num_epics_started
#   @return [Integer]
#
# @!attribute [rw] num_stories
#   @return [Integer]
#
# @!attribute [rw] num_stories_backlog
#   @return [Integer]
#
# @!attribute [rw] num_stories_started
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] workflow_ids
#   @return [Array]
Group = Struct.new(
  :app_url,
  :archived,
  :color,
  :color_key,
  :created_at,
  :default_workflow_id,
  :description,
  :display_icon,
  :display_icon_id,
  :entity_type,
  :global_id,
  :id,
  :member_ids,
  :mention_name,
  :name,
  :num_epics_started,
  :num_stories,
  :num_stories_backlog,
  :num_stories_started,
  :updated_at,
  :workflow_ids,
  keyword_init: true
)

# Request payload for Group#load.
#
# @!attribute [rw] id
#   @return [String]
GroupLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Group#list.
#
# @!attribute [rw] app_url
#   @return [String, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] color_key
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default_workflow_id
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] display_icon
#   @return [Hash, nil]
#
# @!attribute [rw] display_icon_id
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] global_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] member_ids
#   @return [Array, nil]
#
# @!attribute [rw] mention_name
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] num_epics_started
#   @return [Integer, nil]
#
# @!attribute [rw] num_stories
#   @return [Integer, nil]
#
# @!attribute [rw] num_stories_backlog
#   @return [Integer, nil]
#
# @!attribute [rw] num_stories_started
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] workflow_ids
#   @return [Array, nil]
GroupListMatch = Struct.new(
  :app_url,
  :archived,
  :color,
  :color_key,
  :created_at,
  :default_workflow_id,
  :description,
  :display_icon,
  :display_icon_id,
  :entity_type,
  :global_id,
  :id,
  :member_ids,
  :mention_name,
  :name,
  :num_epics_started,
  :num_stories,
  :num_stories_backlog,
  :num_stories_started,
  :updated_at,
  :workflow_ids,
  keyword_init: true
)

# Request payload for Group#create.
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] archived
#   @return [Boolean]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] color_key
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] default_workflow_id
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] display_icon
#   @return [Hash]
#
# @!attribute [rw] display_icon_id
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] member_ids
#   @return [Array]
#
# @!attribute [rw] mention_name
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] num_epics_started
#   @return [Integer]
#
# @!attribute [rw] num_stories
#   @return [Integer]
#
# @!attribute [rw] num_stories_backlog
#   @return [Integer]
#
# @!attribute [rw] num_stories_started
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] workflow_ids
#   @return [Array]
GroupCreateData = Struct.new(
  :app_url,
  :archived,
  :color,
  :color_key,
  :created_at,
  :default_workflow_id,
  :description,
  :display_icon,
  :display_icon_id,
  :entity_type,
  :global_id,
  :id,
  :member_ids,
  :mention_name,
  :name,
  :num_epics_started,
  :num_stories,
  :num_stories_backlog,
  :num_stories_started,
  :updated_at,
  :workflow_ids,
  keyword_init: true
)

# Request payload for Group#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] app_url
#   @return [String, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] color_key
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default_workflow_id
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] display_icon
#   @return [Hash, nil]
#
# @!attribute [rw] display_icon_id
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] global_id
#   @return [String, nil]
#
# @!attribute [rw] member_ids
#   @return [Array, nil]
#
# @!attribute [rw] mention_name
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] num_epics_started
#   @return [Integer, nil]
#
# @!attribute [rw] num_stories
#   @return [Integer, nil]
#
# @!attribute [rw] num_stories_backlog
#   @return [Integer, nil]
#
# @!attribute [rw] num_stories_started
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] workflow_ids
#   @return [Array, nil]
GroupUpdateData = Struct.new(
  :id,
  :app_url,
  :archived,
  :color,
  :color_key,
  :created_at,
  :default_workflow_id,
  :description,
  :display_icon,
  :display_icon_id,
  :entity_type,
  :global_id,
  :member_ids,
  :mention_name,
  :name,
  :num_epics_started,
  :num_stories,
  :num_stories_backlog,
  :num_stories_started,
  :updated_at,
  :workflow_ids,
  keyword_init: true
)

# Health entity data model.
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] epic_id
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] objective_id
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] text
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
Health = Struct.new(
  :author_id,
  :created_at,
  :entity_type,
  :epic_id,
  :id,
  :objective_id,
  :status,
  :text,
  :updated_at,
  keyword_init: true
)

# Request payload for Health#load.
#
# @!attribute [rw] epic_id
#   @return [Integer]
HealthLoadMatch = Struct.new(
  :epic_id,
  keyword_init: true
)

# Request payload for Health#list.
#
# @!attribute [rw] epic_id
#   @return [Integer]
HealthListMatch = Struct.new(
  :epic_id,
  keyword_init: true
)

# Request payload for Health#create.
#
# @!attribute [rw] epic_id
#   @return [Integer]
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] objective_id
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] text
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
HealthCreateData = Struct.new(
  :epic_id,
  :author_id,
  :created_at,
  :entity_type,
  :id,
  :objective_id,
  :status,
  :text,
  :updated_at,
  keyword_init: true
)

# Request payload for Health#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] epic_id
#   @return [Integer, nil]
#
# @!attribute [rw] objective_id
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] text
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
HealthUpdateData = Struct.new(
  :id,
  :author_id,
  :created_at,
  :entity_type,
  :epic_id,
  :objective_id,
  :status,
  :text,
  :updated_at,
  keyword_init: true
)

# History entity data model.
#
# @!attribute [rw] actions
#   @return [Array]
#
# @!attribute [rw] actor_name
#   @return [String, nil]
#
# @!attribute [rw] automation_id
#   @return [String, nil]
#
# @!attribute [rw] changed_at
#   @return [String]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] member_id
#   @return [String, nil]
#
# @!attribute [rw] primary_id
#   @return [String, nil]
#
# @!attribute [rw] references
#   @return [Array, nil]
#
# @!attribute [rw] version
#   @return [String]
#
# @!attribute [rw] webhook_id
#   @return [String, nil]
History = Struct.new(
  :actions,
  :actor_name,
  :automation_id,
  :changed_at,
  :external_id,
  :id,
  :member_id,
  :primary_id,
  :references,
  :version,
  :webhook_id,
  keyword_init: true
)

# Request payload for History#list.
#
# @!attribute [rw] story_id
#   @return [Integer]
HistoryListMatch = Struct.new(
  :story_id,
  keyword_init: true
)

# Iteration entity data model.
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] associated_groups
#   @return [Array]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] end_date
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] follower_ids
#   @return [Array]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] group_ids
#   @return [Array]
#
# @!attribute [rw] group_mention_ids
#   @return [Array]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] label_ids
#   @return [Array]
#
# @!attribute [rw] labels
#   @return [Array]
#
# @!attribute [rw] member_mention_ids
#   @return [Array]
#
# @!attribute [rw] mention_ids
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] start_date
#   @return [String]
#
# @!attribute [rw] stats
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
Iteration = Struct.new(
  :app_url,
  :associated_groups,
  :created_at,
  :description,
  :end_date,
  :entity_type,
  :follower_ids,
  :global_id,
  :group_ids,
  :group_mention_ids,
  :id,
  :label_ids,
  :labels,
  :member_mention_ids,
  :mention_ids,
  :name,
  :start_date,
  :stats,
  :status,
  :updated_at,
  keyword_init: true
)

# Request payload for Iteration#load.
#
# @!attribute [rw] id
#   @return [Integer]
IterationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Iteration#list.
#
# @!attribute [rw] app_url
#   @return [String, nil]
#
# @!attribute [rw] associated_groups
#   @return [Array, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] follower_ids
#   @return [Array, nil]
#
# @!attribute [rw] global_id
#   @return [String, nil]
#
# @!attribute [rw] group_ids
#   @return [Array, nil]
#
# @!attribute [rw] group_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] label_ids
#   @return [Array, nil]
#
# @!attribute [rw] labels
#   @return [Array, nil]
#
# @!attribute [rw] member_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] stats
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
IterationListMatch = Struct.new(
  :app_url,
  :associated_groups,
  :created_at,
  :description,
  :end_date,
  :entity_type,
  :follower_ids,
  :global_id,
  :group_ids,
  :group_mention_ids,
  :id,
  :label_ids,
  :labels,
  :member_mention_ids,
  :mention_ids,
  :name,
  :start_date,
  :stats,
  :status,
  :updated_at,
  keyword_init: true
)

# Request payload for Iteration#create.
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] associated_groups
#   @return [Array]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] end_date
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] follower_ids
#   @return [Array]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] group_ids
#   @return [Array]
#
# @!attribute [rw] group_mention_ids
#   @return [Array]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] label_ids
#   @return [Array]
#
# @!attribute [rw] labels
#   @return [Array]
#
# @!attribute [rw] member_mention_ids
#   @return [Array]
#
# @!attribute [rw] mention_ids
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] start_date
#   @return [String]
#
# @!attribute [rw] stats
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
IterationCreateData = Struct.new(
  :app_url,
  :associated_groups,
  :created_at,
  :description,
  :end_date,
  :entity_type,
  :follower_ids,
  :global_id,
  :group_ids,
  :group_mention_ids,
  :id,
  :label_ids,
  :labels,
  :member_mention_ids,
  :mention_ids,
  :name,
  :start_date,
  :stats,
  :status,
  :updated_at,
  keyword_init: true
)

# Request payload for Iteration#update.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] app_url
#   @return [String, nil]
#
# @!attribute [rw] associated_groups
#   @return [Array, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] follower_ids
#   @return [Array, nil]
#
# @!attribute [rw] global_id
#   @return [String, nil]
#
# @!attribute [rw] group_ids
#   @return [Array, nil]
#
# @!attribute [rw] group_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] label_ids
#   @return [Array, nil]
#
# @!attribute [rw] labels
#   @return [Array, nil]
#
# @!attribute [rw] member_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] stats
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
IterationUpdateData = Struct.new(
  :id,
  :app_url,
  :associated_groups,
  :created_at,
  :description,
  :end_date,
  :entity_type,
  :follower_ids,
  :global_id,
  :group_ids,
  :group_mention_ids,
  :label_ids,
  :labels,
  :member_mention_ids,
  :mention_ids,
  :name,
  :start_date,
  :stats,
  :status,
  :updated_at,
  keyword_init: true
)

# Request payload for Iteration#remove.
#
# @!attribute [rw] id
#   @return [Integer]
IterationRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# KeyResult entity data model.
#
# @!attribute [rw] current_observed_value
#   @return [Hash]
#
# @!attribute [rw] current_target_value
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initial_observed_value
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] objective_id
#   @return [Integer]
#
# @!attribute [rw] observed_value
#   @return [Hash, nil]
#
# @!attribute [rw] progress
#   @return [Integer]
#
# @!attribute [rw] target_value
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String]
KeyResult = Struct.new(
  :current_observed_value,
  :current_target_value,
  :id,
  :initial_observed_value,
  :name,
  :objective_id,
  :observed_value,
  :progress,
  :target_value,
  :type,
  keyword_init: true
)

# Request payload for KeyResult#load.
#
# @!attribute [rw] id
#   @return [String]
KeyResultLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for KeyResult#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] current_observed_value
#   @return [Hash, nil]
#
# @!attribute [rw] current_target_value
#   @return [Hash, nil]
#
# @!attribute [rw] initial_observed_value
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] objective_id
#   @return [Integer, nil]
#
# @!attribute [rw] observed_value
#   @return [Hash, nil]
#
# @!attribute [rw] progress
#   @return [Integer, nil]
#
# @!attribute [rw] target_value
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
KeyResultUpdateData = Struct.new(
  :id,
  :current_observed_value,
  :current_target_value,
  :initial_observed_value,
  :name,
  :objective_id,
  :observed_value,
  :progress,
  :target_value,
  :type,
  keyword_init: true
)

# Label entity data model.
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] num_epics
#   @return [Integer]
#
# @!attribute [rw] num_epics_completed
#   @return [Integer]
#
# @!attribute [rw] num_epics_in_progress
#   @return [Integer]
#
# @!attribute [rw] num_epics_total
#   @return [Integer]
#
# @!attribute [rw] num_epics_unstarted
#   @return [Integer]
#
# @!attribute [rw] num_points_backlog
#   @return [Integer]
#
# @!attribute [rw] num_points_completed
#   @return [Integer]
#
# @!attribute [rw] num_points_in_progress
#   @return [Integer]
#
# @!attribute [rw] num_points_total
#   @return [Integer]
#
# @!attribute [rw] num_points_unstarted
#   @return [Integer]
#
# @!attribute [rw] num_related_documents
#   @return [Integer]
#
# @!attribute [rw] num_stories_backlog
#   @return [Integer]
#
# @!attribute [rw] num_stories_completed
#   @return [Integer]
#
# @!attribute [rw] num_stories_in_progress
#   @return [Integer]
#
# @!attribute [rw] num_stories_total
#   @return [Integer]
#
# @!attribute [rw] num_stories_unestimated
#   @return [Integer]
#
# @!attribute [rw] num_stories_unstarted
#   @return [Integer]
#
# @!attribute [rw] stats
#   @return [Hash]
#
# @!attribute [rw] updated_at
#   @return [String]
Label = Struct.new(
  :app_url,
  :archived,
  :color,
  :created_at,
  :description,
  :entity_type,
  :external_id,
  :global_id,
  :id,
  :name,
  :num_epics,
  :num_epics_completed,
  :num_epics_in_progress,
  :num_epics_total,
  :num_epics_unstarted,
  :num_points_backlog,
  :num_points_completed,
  :num_points_in_progress,
  :num_points_total,
  :num_points_unstarted,
  :num_related_documents,
  :num_stories_backlog,
  :num_stories_completed,
  :num_stories_in_progress,
  :num_stories_total,
  :num_stories_unestimated,
  :num_stories_unstarted,
  :stats,
  :updated_at,
  keyword_init: true
)

# Request payload for Label#load.
#
# @!attribute [rw] id
#   @return [Integer]
LabelLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Label#list.
#
# @!attribute [rw] slim
#   @return [Boolean, nil]
LabelListMatch = Struct.new(
  :slim,
  keyword_init: true
)

# Request payload for Label#create.
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] num_epics
#   @return [Integer]
#
# @!attribute [rw] num_epics_completed
#   @return [Integer]
#
# @!attribute [rw] num_epics_in_progress
#   @return [Integer]
#
# @!attribute [rw] num_epics_total
#   @return [Integer]
#
# @!attribute [rw] num_epics_unstarted
#   @return [Integer]
#
# @!attribute [rw] num_points_backlog
#   @return [Integer]
#
# @!attribute [rw] num_points_completed
#   @return [Integer]
#
# @!attribute [rw] num_points_in_progress
#   @return [Integer]
#
# @!attribute [rw] num_points_total
#   @return [Integer]
#
# @!attribute [rw] num_points_unstarted
#   @return [Integer]
#
# @!attribute [rw] num_related_documents
#   @return [Integer]
#
# @!attribute [rw] num_stories_backlog
#   @return [Integer]
#
# @!attribute [rw] num_stories_completed
#   @return [Integer]
#
# @!attribute [rw] num_stories_in_progress
#   @return [Integer]
#
# @!attribute [rw] num_stories_total
#   @return [Integer]
#
# @!attribute [rw] num_stories_unestimated
#   @return [Integer]
#
# @!attribute [rw] num_stories_unstarted
#   @return [Integer]
#
# @!attribute [rw] stats
#   @return [Hash]
#
# @!attribute [rw] updated_at
#   @return [String]
LabelCreateData = Struct.new(
  :app_url,
  :archived,
  :color,
  :created_at,
  :description,
  :entity_type,
  :external_id,
  :global_id,
  :id,
  :name,
  :num_epics,
  :num_epics_completed,
  :num_epics_in_progress,
  :num_epics_total,
  :num_epics_unstarted,
  :num_points_backlog,
  :num_points_completed,
  :num_points_in_progress,
  :num_points_total,
  :num_points_unstarted,
  :num_related_documents,
  :num_stories_backlog,
  :num_stories_completed,
  :num_stories_in_progress,
  :num_stories_total,
  :num_stories_unestimated,
  :num_stories_unstarted,
  :stats,
  :updated_at,
  keyword_init: true
)

# Request payload for Label#update.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] app_url
#   @return [String, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] global_id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] num_epics
#   @return [Integer, nil]
#
# @!attribute [rw] num_epics_completed
#   @return [Integer, nil]
#
# @!attribute [rw] num_epics_in_progress
#   @return [Integer, nil]
#
# @!attribute [rw] num_epics_total
#   @return [Integer, nil]
#
# @!attribute [rw] num_epics_unstarted
#   @return [Integer, nil]
#
# @!attribute [rw] num_points_backlog
#   @return [Integer, nil]
#
# @!attribute [rw] num_points_completed
#   @return [Integer, nil]
#
# @!attribute [rw] num_points_in_progress
#   @return [Integer, nil]
#
# @!attribute [rw] num_points_total
#   @return [Integer, nil]
#
# @!attribute [rw] num_points_unstarted
#   @return [Integer, nil]
#
# @!attribute [rw] num_related_documents
#   @return [Integer, nil]
#
# @!attribute [rw] num_stories_backlog
#   @return [Integer, nil]
#
# @!attribute [rw] num_stories_completed
#   @return [Integer, nil]
#
# @!attribute [rw] num_stories_in_progress
#   @return [Integer, nil]
#
# @!attribute [rw] num_stories_total
#   @return [Integer, nil]
#
# @!attribute [rw] num_stories_unestimated
#   @return [Integer, nil]
#
# @!attribute [rw] num_stories_unstarted
#   @return [Integer, nil]
#
# @!attribute [rw] stats
#   @return [Hash, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
LabelUpdateData = Struct.new(
  :id,
  :app_url,
  :archived,
  :color,
  :created_at,
  :description,
  :entity_type,
  :external_id,
  :global_id,
  :name,
  :num_epics,
  :num_epics_completed,
  :num_epics_in_progress,
  :num_epics_total,
  :num_epics_unstarted,
  :num_points_backlog,
  :num_points_completed,
  :num_points_in_progress,
  :num_points_total,
  :num_points_unstarted,
  :num_related_documents,
  :num_stories_backlog,
  :num_stories_completed,
  :num_stories_in_progress,
  :num_stories_total,
  :num_stories_unestimated,
  :num_stories_unstarted,
  :stats,
  :updated_at,
  keyword_init: true
)

# Request payload for Label#remove.
#
# @!attribute [rw] id
#   @return [Integer]
LabelRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# LinkedFile entity data model.
#
# @!attribute [rw] content_type
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] group_mention_ids
#   @return [Array]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] member_mention_ids
#   @return [Array]
#
# @!attribute [rw] mention_ids
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] size
#   @return [Integer]
#
# @!attribute [rw] story_id
#   @return [Integer, nil]
#
# @!attribute [rw] story_ids
#   @return [Array]
#
# @!attribute [rw] thumbnail_url
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] uploader_id
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
LinkedFile = Struct.new(
  :content_type,
  :created_at,
  :description,
  :entity_type,
  :group_mention_ids,
  :id,
  :member_mention_ids,
  :mention_ids,
  :name,
  :size,
  :story_id,
  :story_ids,
  :thumbnail_url,
  :type,
  :updated_at,
  :uploader_id,
  :url,
  keyword_init: true
)

# Request payload for LinkedFile#load.
#
# @!attribute [rw] id
#   @return [Integer]
LinkedFileLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for LinkedFile#list.
#
# @!attribute [rw] content_type
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] group_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] member_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] story_id
#   @return [Integer, nil]
#
# @!attribute [rw] story_ids
#   @return [Array, nil]
#
# @!attribute [rw] thumbnail_url
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] uploader_id
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
LinkedFileListMatch = Struct.new(
  :content_type,
  :created_at,
  :description,
  :entity_type,
  :group_mention_ids,
  :id,
  :member_mention_ids,
  :mention_ids,
  :name,
  :size,
  :story_id,
  :story_ids,
  :thumbnail_url,
  :type,
  :updated_at,
  :uploader_id,
  :url,
  keyword_init: true
)

# Request payload for LinkedFile#create.
#
# @!attribute [rw] content_type
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] group_mention_ids
#   @return [Array]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] member_mention_ids
#   @return [Array]
#
# @!attribute [rw] mention_ids
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] size
#   @return [Integer]
#
# @!attribute [rw] story_id
#   @return [Integer, nil]
#
# @!attribute [rw] story_ids
#   @return [Array]
#
# @!attribute [rw] thumbnail_url
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] uploader_id
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
LinkedFileCreateData = Struct.new(
  :content_type,
  :created_at,
  :description,
  :entity_type,
  :group_mention_ids,
  :id,
  :member_mention_ids,
  :mention_ids,
  :name,
  :size,
  :story_id,
  :story_ids,
  :thumbnail_url,
  :type,
  :updated_at,
  :uploader_id,
  :url,
  keyword_init: true
)

# Request payload for LinkedFile#update.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] content_type
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] group_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] member_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] story_id
#   @return [Integer, nil]
#
# @!attribute [rw] story_ids
#   @return [Array, nil]
#
# @!attribute [rw] thumbnail_url
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] uploader_id
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
LinkedFileUpdateData = Struct.new(
  :id,
  :content_type,
  :created_at,
  :description,
  :entity_type,
  :group_mention_ids,
  :member_mention_ids,
  :mention_ids,
  :name,
  :size,
  :story_id,
  :story_ids,
  :thumbnail_url,
  :type,
  :updated_at,
  :uploader_id,
  :url,
  keyword_init: true
)

# Request payload for LinkedFile#remove.
#
# @!attribute [rw] id
#   @return [Integer]
LinkedFileRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Member entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] created_without_invite
#   @return [Boolean]
#
# @!attribute [rw] disabled
#   @return [Boolean]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] group_ids
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] installation_id
#   @return [String, nil]
#
# @!attribute [rw] is_owner
#   @return [Boolean]
#
# @!attribute [rw] mention_name
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization2
#   @return [Hash]
#
# @!attribute [rw] profile
#   @return [Hash]
#
# @!attribute [rw] replaced_by
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] workspace2
#   @return [Hash]
Member = Struct.new(
  :created_at,
  :created_without_invite,
  :disabled,
  :entity_type,
  :global_id,
  :group_ids,
  :id,
  :installation_id,
  :is_owner,
  :mention_name,
  :name,
  :organization2,
  :profile,
  :replaced_by,
  :role,
  :state,
  :updated_at,
  :workspace2,
  keyword_init: true
)

# Request payload for Member#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] org_public_id
#   @return [String, nil]
MemberLoadMatch = Struct.new(
  :id,
  :org_public_id,
  keyword_init: true
)

# Request payload for Member#list.
#
# @!attribute [rw] disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] org_public_id
#   @return [String, nil]
MemberListMatch = Struct.new(
  :disabled,
  :org_public_id,
  keyword_init: true
)

# Milestone entity data model.
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] archived
#   @return [Boolean]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] categories
#   @return [Array]
#
# @!attribute [rw] completed
#   @return [Boolean]
#
# @!attribute [rw] completed_at
#   @return [String]
#
# @!attribute [rw] completed_at_override
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] key_result_ids
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] position
#   @return [Integer]
#
# @!attribute [rw] started
#   @return [Boolean]
#
# @!attribute [rw] started_at
#   @return [String]
#
# @!attribute [rw] started_at_override
#   @return [String]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] stats
#   @return [Hash]
#
# @!attribute [rw] updated_at
#   @return [String]
Milestone = Struct.new(
  :after_id,
  :app_url,
  :archived,
  :before_id,
  :categories,
  :completed,
  :completed_at,
  :completed_at_override,
  :created_at,
  :description,
  :entity_type,
  :global_id,
  :id,
  :key_result_ids,
  :name,
  :position,
  :started,
  :started_at,
  :started_at_override,
  :state,
  :stats,
  :updated_at,
  keyword_init: true
)

# Request payload for Milestone#load.
#
# @!attribute [rw] id
#   @return [Integer]
MilestoneLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Milestone#list.
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] app_url
#   @return [String, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] categories
#   @return [Array, nil]
#
# @!attribute [rw] completed
#   @return [Boolean, nil]
#
# @!attribute [rw] completed_at
#   @return [String, nil]
#
# @!attribute [rw] completed_at_override
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] global_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] key_result_ids
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [Integer, nil]
#
# @!attribute [rw] started
#   @return [Boolean, nil]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] started_at_override
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] stats
#   @return [Hash, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
MilestoneListMatch = Struct.new(
  :after_id,
  :app_url,
  :archived,
  :before_id,
  :categories,
  :completed,
  :completed_at,
  :completed_at_override,
  :created_at,
  :description,
  :entity_type,
  :global_id,
  :id,
  :key_result_ids,
  :name,
  :position,
  :started,
  :started_at,
  :started_at_override,
  :state,
  :stats,
  :updated_at,
  keyword_init: true
)

# Request payload for Milestone#create.
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] archived
#   @return [Boolean]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] categories
#   @return [Array]
#
# @!attribute [rw] completed
#   @return [Boolean]
#
# @!attribute [rw] completed_at
#   @return [String]
#
# @!attribute [rw] completed_at_override
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] key_result_ids
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] position
#   @return [Integer]
#
# @!attribute [rw] started
#   @return [Boolean]
#
# @!attribute [rw] started_at
#   @return [String]
#
# @!attribute [rw] started_at_override
#   @return [String]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] stats
#   @return [Hash]
#
# @!attribute [rw] updated_at
#   @return [String]
MilestoneCreateData = Struct.new(
  :after_id,
  :app_url,
  :archived,
  :before_id,
  :categories,
  :completed,
  :completed_at,
  :completed_at_override,
  :created_at,
  :description,
  :entity_type,
  :global_id,
  :id,
  :key_result_ids,
  :name,
  :position,
  :started,
  :started_at,
  :started_at_override,
  :state,
  :stats,
  :updated_at,
  keyword_init: true
)

# Request payload for Milestone#update.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] app_url
#   @return [String, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] categories
#   @return [Array, nil]
#
# @!attribute [rw] completed
#   @return [Boolean, nil]
#
# @!attribute [rw] completed_at
#   @return [String, nil]
#
# @!attribute [rw] completed_at_override
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] global_id
#   @return [String, nil]
#
# @!attribute [rw] key_result_ids
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [Integer, nil]
#
# @!attribute [rw] started
#   @return [Boolean, nil]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] started_at_override
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] stats
#   @return [Hash, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
MilestoneUpdateData = Struct.new(
  :id,
  :after_id,
  :app_url,
  :archived,
  :before_id,
  :categories,
  :completed,
  :completed_at,
  :completed_at_override,
  :created_at,
  :description,
  :entity_type,
  :global_id,
  :key_result_ids,
  :name,
  :position,
  :started,
  :started_at,
  :started_at_override,
  :state,
  :stats,
  :updated_at,
  keyword_init: true
)

# Request payload for Milestone#remove.
#
# @!attribute [rw] id
#   @return [Integer]
MilestoneRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Objectif entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Objectif = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Objectif#remove.
#
# @!attribute [rw] id
#   @return [Integer]
ObjectifRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Objective entity data model.
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] archived
#   @return [Boolean]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] categories
#   @return [Array]
#
# @!attribute [rw] completed
#   @return [Boolean]
#
# @!attribute [rw] completed_at
#   @return [String]
#
# @!attribute [rw] completed_at_override
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] key_result_ids
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] position
#   @return [Integer]
#
# @!attribute [rw] started
#   @return [Boolean]
#
# @!attribute [rw] started_at
#   @return [String]
#
# @!attribute [rw] started_at_override
#   @return [String]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] stats
#   @return [Hash]
#
# @!attribute [rw] updated_at
#   @return [String]
Objective = Struct.new(
  :after_id,
  :app_url,
  :archived,
  :before_id,
  :categories,
  :completed,
  :completed_at,
  :completed_at_override,
  :created_at,
  :description,
  :entity_type,
  :global_id,
  :id,
  :key_result_ids,
  :name,
  :position,
  :started,
  :started_at,
  :started_at_override,
  :state,
  :stats,
  :updated_at,
  keyword_init: true
)

# Request payload for Objective#load.
#
# @!attribute [rw] objective_public_id
#   @return [Integer]
ObjectiveLoadMatch = Struct.new(
  :objective_public_id,
  keyword_init: true
)

# Request payload for Objective#list.
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] app_url
#   @return [String, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] categories
#   @return [Array, nil]
#
# @!attribute [rw] completed
#   @return [Boolean, nil]
#
# @!attribute [rw] completed_at
#   @return [String, nil]
#
# @!attribute [rw] completed_at_override
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] global_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] key_result_ids
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [Integer, nil]
#
# @!attribute [rw] started
#   @return [Boolean, nil]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] started_at_override
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] stats
#   @return [Hash, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ObjectiveListMatch = Struct.new(
  :after_id,
  :app_url,
  :archived,
  :before_id,
  :categories,
  :completed,
  :completed_at,
  :completed_at_override,
  :created_at,
  :description,
  :entity_type,
  :global_id,
  :id,
  :key_result_ids,
  :name,
  :position,
  :started,
  :started_at,
  :started_at_override,
  :state,
  :stats,
  :updated_at,
  keyword_init: true
)

# Request payload for Objective#create.
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] archived
#   @return [Boolean]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] categories
#   @return [Array]
#
# @!attribute [rw] completed
#   @return [Boolean]
#
# @!attribute [rw] completed_at
#   @return [String]
#
# @!attribute [rw] completed_at_override
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] key_result_ids
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] position
#   @return [Integer]
#
# @!attribute [rw] started
#   @return [Boolean]
#
# @!attribute [rw] started_at
#   @return [String]
#
# @!attribute [rw] started_at_override
#   @return [String]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] stats
#   @return [Hash]
#
# @!attribute [rw] updated_at
#   @return [String]
ObjectiveCreateData = Struct.new(
  :after_id,
  :app_url,
  :archived,
  :before_id,
  :categories,
  :completed,
  :completed_at,
  :completed_at_override,
  :created_at,
  :description,
  :entity_type,
  :global_id,
  :id,
  :key_result_ids,
  :name,
  :position,
  :started,
  :started_at,
  :started_at_override,
  :state,
  :stats,
  :updated_at,
  keyword_init: true
)

# Request payload for Objective#update.
#
# @!attribute [rw] objective_public_id
#   @return [Integer]
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] app_url
#   @return [String, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] categories
#   @return [Array, nil]
#
# @!attribute [rw] completed
#   @return [Boolean, nil]
#
# @!attribute [rw] completed_at
#   @return [String, nil]
#
# @!attribute [rw] completed_at_override
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] global_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] key_result_ids
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [Integer, nil]
#
# @!attribute [rw] started
#   @return [Boolean, nil]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] started_at_override
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] stats
#   @return [Hash, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ObjectiveUpdateData = Struct.new(
  :objective_public_id,
  :after_id,
  :app_url,
  :archived,
  :before_id,
  :categories,
  :completed,
  :completed_at,
  :completed_at_override,
  :created_at,
  :description,
  :entity_type,
  :global_id,
  :id,
  :key_result_ids,
  :name,
  :position,
  :started,
  :started_at,
  :started_at_override,
  :state,
  :stats,
  :updated_at,
  keyword_init: true
)

# Project entity data model.
#
# @!attribute [rw] abbreviation
#   @return [String]
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] archived
#   @return [Boolean]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] days_to_thermometer
#   @return [Integer]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] external_id
#   @return [String]
#
# @!attribute [rw] follower_ids
#   @return [Array]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] iteration_length
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] show_thermometer
#   @return [Boolean]
#
# @!attribute [rw] start_time
#   @return [String]
#
# @!attribute [rw] stats
#   @return [Hash]
#
# @!attribute [rw] team_id
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] workflow_id
#   @return [Integer]
Project = Struct.new(
  :abbreviation,
  :app_url,
  :archived,
  :color,
  :created_at,
  :days_to_thermometer,
  :description,
  :entity_type,
  :external_id,
  :follower_ids,
  :global_id,
  :id,
  :iteration_length,
  :name,
  :show_thermometer,
  :start_time,
  :stats,
  :team_id,
  :updated_at,
  :workflow_id,
  keyword_init: true
)

# Request payload for Project#load.
#
# @!attribute [rw] id
#   @return [Integer]
ProjectLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Project#list.
#
# @!attribute [rw] abbreviation
#   @return [String, nil]
#
# @!attribute [rw] app_url
#   @return [String, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] days_to_thermometer
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] follower_ids
#   @return [Array, nil]
#
# @!attribute [rw] global_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] iteration_length
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] show_thermometer
#   @return [Boolean, nil]
#
# @!attribute [rw] start_time
#   @return [String, nil]
#
# @!attribute [rw] stats
#   @return [Hash, nil]
#
# @!attribute [rw] team_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] workflow_id
#   @return [Integer, nil]
ProjectListMatch = Struct.new(
  :abbreviation,
  :app_url,
  :archived,
  :color,
  :created_at,
  :days_to_thermometer,
  :description,
  :entity_type,
  :external_id,
  :follower_ids,
  :global_id,
  :id,
  :iteration_length,
  :name,
  :show_thermometer,
  :start_time,
  :stats,
  :team_id,
  :updated_at,
  :workflow_id,
  keyword_init: true
)

# Request payload for Project#create.
#
# @!attribute [rw] abbreviation
#   @return [String]
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] archived
#   @return [Boolean]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] days_to_thermometer
#   @return [Integer]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] external_id
#   @return [String]
#
# @!attribute [rw] follower_ids
#   @return [Array]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] iteration_length
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] show_thermometer
#   @return [Boolean]
#
# @!attribute [rw] start_time
#   @return [String]
#
# @!attribute [rw] stats
#   @return [Hash]
#
# @!attribute [rw] team_id
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] workflow_id
#   @return [Integer]
ProjectCreateData = Struct.new(
  :abbreviation,
  :app_url,
  :archived,
  :color,
  :created_at,
  :days_to_thermometer,
  :description,
  :entity_type,
  :external_id,
  :follower_ids,
  :global_id,
  :id,
  :iteration_length,
  :name,
  :show_thermometer,
  :start_time,
  :stats,
  :team_id,
  :updated_at,
  :workflow_id,
  keyword_init: true
)

# Request payload for Project#update.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] abbreviation
#   @return [String, nil]
#
# @!attribute [rw] app_url
#   @return [String, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] days_to_thermometer
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] follower_ids
#   @return [Array, nil]
#
# @!attribute [rw] global_id
#   @return [String, nil]
#
# @!attribute [rw] iteration_length
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] show_thermometer
#   @return [Boolean, nil]
#
# @!attribute [rw] start_time
#   @return [String, nil]
#
# @!attribute [rw] stats
#   @return [Hash, nil]
#
# @!attribute [rw] team_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] workflow_id
#   @return [Integer, nil]
ProjectUpdateData = Struct.new(
  :id,
  :abbreviation,
  :app_url,
  :archived,
  :color,
  :created_at,
  :days_to_thermometer,
  :description,
  :entity_type,
  :external_id,
  :follower_ids,
  :global_id,
  :iteration_length,
  :name,
  :show_thermometer,
  :start_time,
  :stats,
  :team_id,
  :updated_at,
  :workflow_id,
  keyword_init: true
)

# Request payload for Project#remove.
#
# @!attribute [rw] id
#   @return [Integer]
ProjectRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Repository entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] external_id
#   @return [String]
#
# @!attribute [rw] full_name
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
Repository = Struct.new(
  :created_at,
  :entity_type,
  :external_id,
  :full_name,
  :id,
  :name,
  :type,
  :updated_at,
  :url,
  keyword_init: true
)

# Request payload for Repository#load.
#
# @!attribute [rw] id
#   @return [Integer]
RepositoryLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Repository#list.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] full_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
RepositoryListMatch = Struct.new(
  :created_at,
  :entity_type,
  :external_id,
  :full_name,
  :id,
  :name,
  :type,
  :updated_at,
  :url,
  keyword_init: true
)

# Search entity data model.
#
# @!attribute [rw] epics
#   @return [Hash]
#
# @!attribute [rw] iterations
#   @return [Hash]
#
# @!attribute [rw] milestones
#   @return [Hash]
#
# @!attribute [rw] stories
#   @return [Hash]
Search = Struct.new(
  :epics,
  :iterations,
  :milestones,
  :stories,
  keyword_init: true
)

# Request payload for Search#load.
#
# @!attribute [rw] detail
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [Array, nil]
#
# @!attribute [rw] next
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [String]
SearchLoadMatch = Struct.new(
  :detail,
  :entity_type,
  :next,
  :page_size,
  :query,
  keyword_init: true
)

# Story entity data model.
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] archived
#   @return [Boolean]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] blocked
#   @return [Boolean]
#
# @!attribute [rw] blocker
#   @return [Boolean]
#
# @!attribute [rw] branch_ids
#   @return [Array, nil]
#
# @!attribute [rw] branches
#   @return [Array]
#
# @!attribute [rw] comment_ids
#   @return [Array, nil]
#
# @!attribute [rw] comments
#   @return [Array]
#
# @!attribute [rw] commit_ids
#   @return [Array, nil]
#
# @!attribute [rw] commits
#   @return [Array]
#
# @!attribute [rw] completed
#   @return [Boolean]
#
# @!attribute [rw] completed_at
#   @return [String]
#
# @!attribute [rw] completed_at_override
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] custom_fields
#   @return [Array, nil]
#
# @!attribute [rw] custom_fields_add
#   @return [Array, nil]
#
# @!attribute [rw] custom_fields_remove
#   @return [Array, nil]
#
# @!attribute [rw] cycle_time
#   @return [Integer, nil]
#
# @!attribute [rw] deadline
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] epic_id
#   @return [Integer]
#
# @!attribute [rw] estimate
#   @return [Integer]
#
# @!attribute [rw] external_id
#   @return [String]
#
# @!attribute [rw] external_links
#   @return [Array]
#
# @!attribute [rw] external_links_add
#   @return [Array, nil]
#
# @!attribute [rw] external_links_remove
#   @return [Array, nil]
#
# @!attribute [rw] file_ids
#   @return [Array, nil]
#
# @!attribute [rw] file_ids_add
#   @return [Array, nil]
#
# @!attribute [rw] file_ids_remove
#   @return [Array, nil]
#
# @!attribute [rw] files
#   @return [Array]
#
# @!attribute [rw] follower_ids
#   @return [Array]
#
# @!attribute [rw] follower_ids_add
#   @return [Array, nil]
#
# @!attribute [rw] follower_ids_remove
#   @return [Array, nil]
#
# @!attribute [rw] formatted_vcs_branch_name
#   @return [String, nil]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] group_id
#   @return [String]
#
# @!attribute [rw] group_mention_ids
#   @return [Array]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] iteration_id
#   @return [Integer]
#
# @!attribute [rw] label_ids
#   @return [Array]
#
# @!attribute [rw] labels
#   @return [Array]
#
# @!attribute [rw] labels_add
#   @return [Array, nil]
#
# @!attribute [rw] labels_remove
#   @return [Array, nil]
#
# @!attribute [rw] lead_time
#   @return [Integer, nil]
#
# @!attribute [rw] linked_file_ids
#   @return [Array, nil]
#
# @!attribute [rw] linked_file_ids_add
#   @return [Array, nil]
#
# @!attribute [rw] linked_file_ids_remove
#   @return [Array, nil]
#
# @!attribute [rw] linked_files
#   @return [Array]
#
# @!attribute [rw] member_mention_ids
#   @return [Array]
#
# @!attribute [rw] mention_ids
#   @return [Array]
#
# @!attribute [rw] move_to
#   @return [String, nil]
#
# @!attribute [rw] moved_at
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] num_tasks_completed
#   @return [Integer, nil]
#
# @!attribute [rw] owner_ids
#   @return [Array]
#
# @!attribute [rw] owner_ids_add
#   @return [Array, nil]
#
# @!attribute [rw] owner_ids_remove
#   @return [Array, nil]
#
# @!attribute [rw] parent_story_id
#   @return [Integer, nil]
#
# @!attribute [rw] position
#   @return [Integer]
#
# @!attribute [rw] previous_iteration_ids
#   @return [Array]
#
# @!attribute [rw] project_id
#   @return [Integer]
#
# @!attribute [rw] pull_request_ids
#   @return [Array, nil]
#
# @!attribute [rw] pull_requests
#   @return [Array]
#
# @!attribute [rw] requested_by_id
#   @return [String]
#
# @!attribute [rw] source_task_id
#   @return [Integer, nil]
#
# @!attribute [rw] started
#   @return [Boolean]
#
# @!attribute [rw] started_at
#   @return [String]
#
# @!attribute [rw] started_at_override
#   @return [String]
#
# @!attribute [rw] stats
#   @return [Hash]
#
# @!attribute [rw] story_links
#   @return [Array]
#
# @!attribute [rw] story_template_id
#   @return [String]
#
# @!attribute [rw] story_type
#   @return [String]
#
# @!attribute [rw] sub_task_story_ids
#   @return [Array, nil]
#
# @!attribute [rw] sub_tasks
#   @return [Array, nil]
#
# @!attribute [rw] synced_item
#   @return [Hash]
#
# @!attribute [rw] task_ids
#   @return [Array, nil]
#
# @!attribute [rw] tasks
#   @return [Array]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] workflow_id
#   @return [Integer]
#
# @!attribute [rw] workflow_state_id
#   @return [Integer]
Story = Struct.new(
  :after_id,
  :app_url,
  :archived,
  :before_id,
  :blocked,
  :blocker,
  :branch_ids,
  :branches,
  :comment_ids,
  :comments,
  :commit_ids,
  :commits,
  :completed,
  :completed_at,
  :completed_at_override,
  :created_at,
  :custom_fields,
  :custom_fields_add,
  :custom_fields_remove,
  :cycle_time,
  :deadline,
  :description,
  :entity_type,
  :epic_id,
  :estimate,
  :external_id,
  :external_links,
  :external_links_add,
  :external_links_remove,
  :file_ids,
  :file_ids_add,
  :file_ids_remove,
  :files,
  :follower_ids,
  :follower_ids_add,
  :follower_ids_remove,
  :formatted_vcs_branch_name,
  :global_id,
  :group_id,
  :group_mention_ids,
  :id,
  :iteration_id,
  :label_ids,
  :labels,
  :labels_add,
  :labels_remove,
  :lead_time,
  :linked_file_ids,
  :linked_file_ids_add,
  :linked_file_ids_remove,
  :linked_files,
  :member_mention_ids,
  :mention_ids,
  :move_to,
  :moved_at,
  :name,
  :num_tasks_completed,
  :owner_ids,
  :owner_ids_add,
  :owner_ids_remove,
  :parent_story_id,
  :position,
  :previous_iteration_ids,
  :project_id,
  :pull_request_ids,
  :pull_requests,
  :requested_by_id,
  :source_task_id,
  :started,
  :started_at,
  :started_at_override,
  :stats,
  :story_links,
  :story_template_id,
  :story_type,
  :sub_task_story_ids,
  :sub_tasks,
  :synced_item,
  :task_ids,
  :tasks,
  :updated_at,
  :workflow_id,
  :workflow_state_id,
  keyword_init: true
)

# Request payload for Story#load.
#
# @!attribute [rw] id
#   @return [Integer]
StoryLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Story#list.
#
# @!attribute [rw] detail
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [Array, nil]
#
# @!attribute [rw] next
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [String]
StoryListMatch = Struct.new(
  :detail,
  :entity_type,
  :next,
  :page_size,
  :query,
  keyword_init: true
)

# Request payload for Story#create.
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] archived
#   @return [Boolean]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] blocked
#   @return [Boolean]
#
# @!attribute [rw] blocker
#   @return [Boolean]
#
# @!attribute [rw] branch_ids
#   @return [Array, nil]
#
# @!attribute [rw] branches
#   @return [Array]
#
# @!attribute [rw] comment_ids
#   @return [Array, nil]
#
# @!attribute [rw] comments
#   @return [Array]
#
# @!attribute [rw] commit_ids
#   @return [Array, nil]
#
# @!attribute [rw] commits
#   @return [Array]
#
# @!attribute [rw] completed
#   @return [Boolean]
#
# @!attribute [rw] completed_at
#   @return [String]
#
# @!attribute [rw] completed_at_override
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] custom_fields
#   @return [Array, nil]
#
# @!attribute [rw] custom_fields_add
#   @return [Array, nil]
#
# @!attribute [rw] custom_fields_remove
#   @return [Array, nil]
#
# @!attribute [rw] cycle_time
#   @return [Integer, nil]
#
# @!attribute [rw] deadline
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] epic_id
#   @return [Integer]
#
# @!attribute [rw] estimate
#   @return [Integer]
#
# @!attribute [rw] external_id
#   @return [String]
#
# @!attribute [rw] external_links
#   @return [Array]
#
# @!attribute [rw] external_links_add
#   @return [Array, nil]
#
# @!attribute [rw] external_links_remove
#   @return [Array, nil]
#
# @!attribute [rw] file_ids
#   @return [Array, nil]
#
# @!attribute [rw] file_ids_add
#   @return [Array, nil]
#
# @!attribute [rw] file_ids_remove
#   @return [Array, nil]
#
# @!attribute [rw] files
#   @return [Array]
#
# @!attribute [rw] follower_ids
#   @return [Array]
#
# @!attribute [rw] follower_ids_add
#   @return [Array, nil]
#
# @!attribute [rw] follower_ids_remove
#   @return [Array, nil]
#
# @!attribute [rw] formatted_vcs_branch_name
#   @return [String, nil]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] group_id
#   @return [String]
#
# @!attribute [rw] group_mention_ids
#   @return [Array]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] iteration_id
#   @return [Integer]
#
# @!attribute [rw] label_ids
#   @return [Array]
#
# @!attribute [rw] labels
#   @return [Array]
#
# @!attribute [rw] labels_add
#   @return [Array, nil]
#
# @!attribute [rw] labels_remove
#   @return [Array, nil]
#
# @!attribute [rw] lead_time
#   @return [Integer, nil]
#
# @!attribute [rw] linked_file_ids
#   @return [Array, nil]
#
# @!attribute [rw] linked_file_ids_add
#   @return [Array, nil]
#
# @!attribute [rw] linked_file_ids_remove
#   @return [Array, nil]
#
# @!attribute [rw] linked_files
#   @return [Array]
#
# @!attribute [rw] member_mention_ids
#   @return [Array]
#
# @!attribute [rw] mention_ids
#   @return [Array]
#
# @!attribute [rw] move_to
#   @return [String, nil]
#
# @!attribute [rw] moved_at
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] num_tasks_completed
#   @return [Integer, nil]
#
# @!attribute [rw] owner_ids
#   @return [Array]
#
# @!attribute [rw] owner_ids_add
#   @return [Array, nil]
#
# @!attribute [rw] owner_ids_remove
#   @return [Array, nil]
#
# @!attribute [rw] parent_story_id
#   @return [Integer, nil]
#
# @!attribute [rw] position
#   @return [Integer]
#
# @!attribute [rw] previous_iteration_ids
#   @return [Array]
#
# @!attribute [rw] project_id
#   @return [Integer]
#
# @!attribute [rw] pull_request_ids
#   @return [Array, nil]
#
# @!attribute [rw] pull_requests
#   @return [Array]
#
# @!attribute [rw] requested_by_id
#   @return [String]
#
# @!attribute [rw] source_task_id
#   @return [Integer, nil]
#
# @!attribute [rw] started
#   @return [Boolean]
#
# @!attribute [rw] started_at
#   @return [String]
#
# @!attribute [rw] started_at_override
#   @return [String]
#
# @!attribute [rw] stats
#   @return [Hash]
#
# @!attribute [rw] story_links
#   @return [Array]
#
# @!attribute [rw] story_template_id
#   @return [String]
#
# @!attribute [rw] story_type
#   @return [String]
#
# @!attribute [rw] sub_task_story_ids
#   @return [Array, nil]
#
# @!attribute [rw] sub_tasks
#   @return [Array, nil]
#
# @!attribute [rw] synced_item
#   @return [Hash]
#
# @!attribute [rw] task_ids
#   @return [Array, nil]
#
# @!attribute [rw] tasks
#   @return [Array]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] workflow_id
#   @return [Integer]
#
# @!attribute [rw] workflow_state_id
#   @return [Integer]
StoryCreateData = Struct.new(
  :after_id,
  :app_url,
  :archived,
  :before_id,
  :blocked,
  :blocker,
  :branch_ids,
  :branches,
  :comment_ids,
  :comments,
  :commit_ids,
  :commits,
  :completed,
  :completed_at,
  :completed_at_override,
  :created_at,
  :custom_fields,
  :custom_fields_add,
  :custom_fields_remove,
  :cycle_time,
  :deadline,
  :description,
  :entity_type,
  :epic_id,
  :estimate,
  :external_id,
  :external_links,
  :external_links_add,
  :external_links_remove,
  :file_ids,
  :file_ids_add,
  :file_ids_remove,
  :files,
  :follower_ids,
  :follower_ids_add,
  :follower_ids_remove,
  :formatted_vcs_branch_name,
  :global_id,
  :group_id,
  :group_mention_ids,
  :id,
  :iteration_id,
  :label_ids,
  :labels,
  :labels_add,
  :labels_remove,
  :lead_time,
  :linked_file_ids,
  :linked_file_ids_add,
  :linked_file_ids_remove,
  :linked_files,
  :member_mention_ids,
  :mention_ids,
  :move_to,
  :moved_at,
  :name,
  :num_tasks_completed,
  :owner_ids,
  :owner_ids_add,
  :owner_ids_remove,
  :parent_story_id,
  :position,
  :previous_iteration_ids,
  :project_id,
  :pull_request_ids,
  :pull_requests,
  :requested_by_id,
  :source_task_id,
  :started,
  :started_at,
  :started_at_override,
  :stats,
  :story_links,
  :story_template_id,
  :story_type,
  :sub_task_story_ids,
  :sub_tasks,
  :synced_item,
  :task_ids,
  :tasks,
  :updated_at,
  :workflow_id,
  :workflow_state_id,
  keyword_init: true
)

# Request payload for Story#update.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] app_url
#   @return [String, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] blocked
#   @return [Boolean, nil]
#
# @!attribute [rw] blocker
#   @return [Boolean, nil]
#
# @!attribute [rw] branch_ids
#   @return [Array, nil]
#
# @!attribute [rw] branches
#   @return [Array, nil]
#
# @!attribute [rw] comment_ids
#   @return [Array, nil]
#
# @!attribute [rw] comments
#   @return [Array, nil]
#
# @!attribute [rw] commit_ids
#   @return [Array, nil]
#
# @!attribute [rw] commits
#   @return [Array, nil]
#
# @!attribute [rw] completed
#   @return [Boolean, nil]
#
# @!attribute [rw] completed_at
#   @return [String, nil]
#
# @!attribute [rw] completed_at_override
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] custom_fields
#   @return [Array, nil]
#
# @!attribute [rw] custom_fields_add
#   @return [Array, nil]
#
# @!attribute [rw] custom_fields_remove
#   @return [Array, nil]
#
# @!attribute [rw] cycle_time
#   @return [Integer, nil]
#
# @!attribute [rw] deadline
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] epic_id
#   @return [Integer, nil]
#
# @!attribute [rw] estimate
#   @return [Integer, nil]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] external_links
#   @return [Array, nil]
#
# @!attribute [rw] external_links_add
#   @return [Array, nil]
#
# @!attribute [rw] external_links_remove
#   @return [Array, nil]
#
# @!attribute [rw] file_ids
#   @return [Array, nil]
#
# @!attribute [rw] file_ids_add
#   @return [Array, nil]
#
# @!attribute [rw] file_ids_remove
#   @return [Array, nil]
#
# @!attribute [rw] files
#   @return [Array, nil]
#
# @!attribute [rw] follower_ids
#   @return [Array, nil]
#
# @!attribute [rw] follower_ids_add
#   @return [Array, nil]
#
# @!attribute [rw] follower_ids_remove
#   @return [Array, nil]
#
# @!attribute [rw] formatted_vcs_branch_name
#   @return [String, nil]
#
# @!attribute [rw] global_id
#   @return [String, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] group_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] iteration_id
#   @return [Integer, nil]
#
# @!attribute [rw] label_ids
#   @return [Array, nil]
#
# @!attribute [rw] labels
#   @return [Array, nil]
#
# @!attribute [rw] labels_add
#   @return [Array, nil]
#
# @!attribute [rw] labels_remove
#   @return [Array, nil]
#
# @!attribute [rw] lead_time
#   @return [Integer, nil]
#
# @!attribute [rw] linked_file_ids
#   @return [Array, nil]
#
# @!attribute [rw] linked_file_ids_add
#   @return [Array, nil]
#
# @!attribute [rw] linked_file_ids_remove
#   @return [Array, nil]
#
# @!attribute [rw] linked_files
#   @return [Array, nil]
#
# @!attribute [rw] member_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] move_to
#   @return [String, nil]
#
# @!attribute [rw] moved_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] num_tasks_completed
#   @return [Integer, nil]
#
# @!attribute [rw] owner_ids
#   @return [Array, nil]
#
# @!attribute [rw] owner_ids_add
#   @return [Array, nil]
#
# @!attribute [rw] owner_ids_remove
#   @return [Array, nil]
#
# @!attribute [rw] parent_story_id
#   @return [Integer, nil]
#
# @!attribute [rw] position
#   @return [Integer, nil]
#
# @!attribute [rw] previous_iteration_ids
#   @return [Array, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] pull_request_ids
#   @return [Array, nil]
#
# @!attribute [rw] pull_requests
#   @return [Array, nil]
#
# @!attribute [rw] requested_by_id
#   @return [String, nil]
#
# @!attribute [rw] source_task_id
#   @return [Integer, nil]
#
# @!attribute [rw] started
#   @return [Boolean, nil]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] started_at_override
#   @return [String, nil]
#
# @!attribute [rw] stats
#   @return [Hash, nil]
#
# @!attribute [rw] story_links
#   @return [Array, nil]
#
# @!attribute [rw] story_template_id
#   @return [String, nil]
#
# @!attribute [rw] story_type
#   @return [String, nil]
#
# @!attribute [rw] sub_task_story_ids
#   @return [Array, nil]
#
# @!attribute [rw] sub_tasks
#   @return [Array, nil]
#
# @!attribute [rw] synced_item
#   @return [Hash, nil]
#
# @!attribute [rw] task_ids
#   @return [Array, nil]
#
# @!attribute [rw] tasks
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] workflow_id
#   @return [Integer, nil]
#
# @!attribute [rw] workflow_state_id
#   @return [Integer, nil]
StoryUpdateData = Struct.new(
  :id,
  :after_id,
  :app_url,
  :archived,
  :before_id,
  :blocked,
  :blocker,
  :branch_ids,
  :branches,
  :comment_ids,
  :comments,
  :commit_ids,
  :commits,
  :completed,
  :completed_at,
  :completed_at_override,
  :created_at,
  :custom_fields,
  :custom_fields_add,
  :custom_fields_remove,
  :cycle_time,
  :deadline,
  :description,
  :entity_type,
  :epic_id,
  :estimate,
  :external_id,
  :external_links,
  :external_links_add,
  :external_links_remove,
  :file_ids,
  :file_ids_add,
  :file_ids_remove,
  :files,
  :follower_ids,
  :follower_ids_add,
  :follower_ids_remove,
  :formatted_vcs_branch_name,
  :global_id,
  :group_id,
  :group_mention_ids,
  :iteration_id,
  :label_ids,
  :labels,
  :labels_add,
  :labels_remove,
  :lead_time,
  :linked_file_ids,
  :linked_file_ids_add,
  :linked_file_ids_remove,
  :linked_files,
  :member_mention_ids,
  :mention_ids,
  :move_to,
  :moved_at,
  :name,
  :num_tasks_completed,
  :owner_ids,
  :owner_ids_add,
  :owner_ids_remove,
  :parent_story_id,
  :position,
  :previous_iteration_ids,
  :project_id,
  :pull_request_ids,
  :pull_requests,
  :requested_by_id,
  :source_task_id,
  :started,
  :started_at,
  :started_at_override,
  :stats,
  :story_links,
  :story_template_id,
  :story_type,
  :sub_task_story_ids,
  :sub_tasks,
  :synced_item,
  :task_ids,
  :tasks,
  :updated_at,
  :workflow_id,
  :workflow_state_id,
  keyword_init: true
)

# Request payload for Story#remove.
#
# @!attribute [rw] id
#   @return [Integer]
StoryRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# StoryComment entity data model.
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] author_id
#   @return [String]
#
# @!attribute [rw] blocker
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] deleted
#   @return [Boolean]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] external_id
#   @return [String]
#
# @!attribute [rw] group_mention_ids
#   @return [Array]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] linked_to_slack
#   @return [Boolean]
#
# @!attribute [rw] member_mention_ids
#   @return [Array]
#
# @!attribute [rw] mention_ids
#   @return [Array]
#
# @!attribute [rw] parent_id
#   @return [Integer, nil]
#
# @!attribute [rw] position
#   @return [Integer]
#
# @!attribute [rw] reactions
#   @return [Array]
#
# @!attribute [rw] story_id
#   @return [Integer]
#
# @!attribute [rw] text
#   @return [String]
#
# @!attribute [rw] unblocks_parent
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
StoryComment = Struct.new(
  :app_url,
  :author_id,
  :blocker,
  :created_at,
  :deleted,
  :entity_type,
  :external_id,
  :group_mention_ids,
  :id,
  :linked_to_slack,
  :member_mention_ids,
  :mention_ids,
  :parent_id,
  :position,
  :reactions,
  :story_id,
  :text,
  :unblocks_parent,
  :updated_at,
  keyword_init: true
)

# Request payload for StoryComment#load.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] story_id
#   @return [Integer]
StoryCommentLoadMatch = Struct.new(
  :id,
  :story_id,
  keyword_init: true
)

# Request payload for StoryComment#list.
#
# @!attribute [rw] id
#   @return [Integer]
StoryCommentListMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for StoryComment#create.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] author_id
#   @return [String]
#
# @!attribute [rw] blocker
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] deleted
#   @return [Boolean]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] external_id
#   @return [String]
#
# @!attribute [rw] group_mention_ids
#   @return [Array]
#
# @!attribute [rw] linked_to_slack
#   @return [Boolean]
#
# @!attribute [rw] member_mention_ids
#   @return [Array]
#
# @!attribute [rw] mention_ids
#   @return [Array]
#
# @!attribute [rw] parent_id
#   @return [Integer, nil]
#
# @!attribute [rw] position
#   @return [Integer]
#
# @!attribute [rw] reactions
#   @return [Array]
#
# @!attribute [rw] story_id
#   @return [Integer]
#
# @!attribute [rw] text
#   @return [String]
#
# @!attribute [rw] unblocks_parent
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
StoryCommentCreateData = Struct.new(
  :id,
  :app_url,
  :author_id,
  :blocker,
  :created_at,
  :deleted,
  :entity_type,
  :external_id,
  :group_mention_ids,
  :linked_to_slack,
  :member_mention_ids,
  :mention_ids,
  :parent_id,
  :position,
  :reactions,
  :story_id,
  :text,
  :unblocks_parent,
  :updated_at,
  keyword_init: true
)

# Request payload for StoryComment#update.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] story_id
#   @return [Integer]
#
# @!attribute [rw] app_url
#   @return [String, nil]
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] blocker
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] deleted
#   @return [Boolean, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] group_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] linked_to_slack
#   @return [Boolean, nil]
#
# @!attribute [rw] member_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] parent_id
#   @return [Integer, nil]
#
# @!attribute [rw] position
#   @return [Integer, nil]
#
# @!attribute [rw] reactions
#   @return [Array, nil]
#
# @!attribute [rw] text
#   @return [String, nil]
#
# @!attribute [rw] unblocks_parent
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
StoryCommentUpdateData = Struct.new(
  :id,
  :story_id,
  :app_url,
  :author_id,
  :blocker,
  :created_at,
  :deleted,
  :entity_type,
  :external_id,
  :group_mention_ids,
  :linked_to_slack,
  :member_mention_ids,
  :mention_ids,
  :parent_id,
  :position,
  :reactions,
  :text,
  :unblocks_parent,
  :updated_at,
  keyword_init: true
)

# StoryLink entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] object_id
#   @return [Integer]
#
# @!attribute [rw] subject_id
#   @return [Integer]
#
# @!attribute [rw] subject_workflow_state_id
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] verb
#   @return [String]
StoryLink = Struct.new(
  :created_at,
  :entity_type,
  :id,
  :object_id,
  :subject_id,
  :subject_workflow_state_id,
  :updated_at,
  :verb,
  keyword_init: true
)

# Request payload for StoryLink#load.
#
# @!attribute [rw] id
#   @return [Integer]
StoryLinkLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for StoryLink#create.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] object_id
#   @return [Integer]
#
# @!attribute [rw] subject_id
#   @return [Integer]
#
# @!attribute [rw] subject_workflow_state_id
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] verb
#   @return [String]
StoryLinkCreateData = Struct.new(
  :created_at,
  :entity_type,
  :id,
  :object_id,
  :subject_id,
  :subject_workflow_state_id,
  :updated_at,
  :verb,
  keyword_init: true
)

# Request payload for StoryLink#update.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] object_id
#   @return [Integer, nil]
#
# @!attribute [rw] subject_id
#   @return [Integer, nil]
#
# @!attribute [rw] subject_workflow_state_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] verb
#   @return [String, nil]
StoryLinkUpdateData = Struct.new(
  :id,
  :created_at,
  :entity_type,
  :object_id,
  :subject_id,
  :subject_workflow_state_id,
  :updated_at,
  :verb,
  keyword_init: true
)

# Request payload for StoryLink#remove.
#
# @!attribute [rw] id
#   @return [Integer]
StoryLinkRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# StoryReaction entity data model.
#
# @!attribute [rw] emoji
#   @return [String]
StoryReaction = Struct.new(
  :emoji,
  keyword_init: true
)

# Request payload for StoryReaction#create.
#
# @!attribute [rw] comment_id
#   @return [Integer]
#
# @!attribute [rw] story_id
#   @return [Integer]
#
# @!attribute [rw] emoji
#   @return [String]
StoryReactionCreateData = Struct.new(
  :comment_id,
  :story_id,
  :emoji,
  keyword_init: true
)

# Request payload for StoryReaction#remove.
#
# @!attribute [rw] comment_id
#   @return [Integer]
#
# @!attribute [rw] story_id
#   @return [Integer]
StoryReactionRemoveMatch = Struct.new(
  :comment_id,
  :story_id,
  keyword_init: true
)

# StorySlim entity data model.
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] completed_at_end
#   @return [String, nil]
#
# @!attribute [rw] completed_at_start
#   @return [String, nil]
#
# @!attribute [rw] created_at_end
#   @return [String, nil]
#
# @!attribute [rw] created_at_start
#   @return [String, nil]
#
# @!attribute [rw] custom_fields_add
#   @return [Array, nil]
#
# @!attribute [rw] custom_fields_remove
#   @return [Array, nil]
#
# @!attribute [rw] deadline
#   @return [String, nil]
#
# @!attribute [rw] deadline_end
#   @return [String, nil]
#
# @!attribute [rw] deadline_start
#   @return [String, nil]
#
# @!attribute [rw] epic_id
#   @return [Integer, nil]
#
# @!attribute [rw] epic_ids
#   @return [Array, nil]
#
# @!attribute [rw] estimate
#   @return [Integer, nil]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] external_links
#   @return [Array, nil]
#
# @!attribute [rw] follower_ids_add
#   @return [Array, nil]
#
# @!attribute [rw] follower_ids_remove
#   @return [Array, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] group_ids
#   @return [Array, nil]
#
# @!attribute [rw] includes_description
#   @return [Boolean, nil]
#
# @!attribute [rw] iteration_id
#   @return [Integer, nil]
#
# @!attribute [rw] iteration_ids
#   @return [Array, nil]
#
# @!attribute [rw] label_ids
#   @return [Array, nil]
#
# @!attribute [rw] label_name
#   @return [String, nil]
#
# @!attribute [rw] labels_add
#   @return [Array, nil]
#
# @!attribute [rw] labels_remove
#   @return [Array, nil]
#
# @!attribute [rw] move_to
#   @return [String, nil]
#
# @!attribute [rw] owner_id
#   @return [String, nil]
#
# @!attribute [rw] owner_ids
#   @return [Array, nil]
#
# @!attribute [rw] owner_ids_add
#   @return [Array, nil]
#
# @!attribute [rw] owner_ids_remove
#   @return [Array, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] project_ids
#   @return [Array, nil]
#
# @!attribute [rw] requested_by_id
#   @return [String, nil]
#
# @!attribute [rw] stories
#   @return [Array]
#
# @!attribute [rw] story_ids
#   @return [Array]
#
# @!attribute [rw] story_type
#   @return [String, nil]
#
# @!attribute [rw] updated_at_end
#   @return [String, nil]
#
# @!attribute [rw] updated_at_start
#   @return [String, nil]
#
# @!attribute [rw] workflow_state_id
#   @return [Integer, nil]
#
# @!attribute [rw] workflow_state_types
#   @return [Array, nil]
StorySlim = Struct.new(
  :after_id,
  :archived,
  :before_id,
  :completed_at_end,
  :completed_at_start,
  :created_at_end,
  :created_at_start,
  :custom_fields_add,
  :custom_fields_remove,
  :deadline,
  :deadline_end,
  :deadline_start,
  :epic_id,
  :epic_ids,
  :estimate,
  :external_id,
  :external_links,
  :follower_ids_add,
  :follower_ids_remove,
  :group_id,
  :group_ids,
  :includes_description,
  :iteration_id,
  :iteration_ids,
  :label_ids,
  :label_name,
  :labels_add,
  :labels_remove,
  :move_to,
  :owner_id,
  :owner_ids,
  :owner_ids_add,
  :owner_ids_remove,
  :project_id,
  :project_ids,
  :requested_by_id,
  :stories,
  :story_ids,
  :story_type,
  :updated_at_end,
  :updated_at_start,
  :workflow_state_id,
  :workflow_state_types,
  keyword_init: true
)

# Request payload for StorySlim#create.
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] completed_at_end
#   @return [String, nil]
#
# @!attribute [rw] completed_at_start
#   @return [String, nil]
#
# @!attribute [rw] created_at_end
#   @return [String, nil]
#
# @!attribute [rw] created_at_start
#   @return [String, nil]
#
# @!attribute [rw] custom_fields_add
#   @return [Array, nil]
#
# @!attribute [rw] custom_fields_remove
#   @return [Array, nil]
#
# @!attribute [rw] deadline
#   @return [String, nil]
#
# @!attribute [rw] deadline_end
#   @return [String, nil]
#
# @!attribute [rw] deadline_start
#   @return [String, nil]
#
# @!attribute [rw] epic_id
#   @return [Integer, nil]
#
# @!attribute [rw] epic_ids
#   @return [Array, nil]
#
# @!attribute [rw] estimate
#   @return [Integer, nil]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] external_links
#   @return [Array, nil]
#
# @!attribute [rw] follower_ids_add
#   @return [Array, nil]
#
# @!attribute [rw] follower_ids_remove
#   @return [Array, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] group_ids
#   @return [Array, nil]
#
# @!attribute [rw] includes_description
#   @return [Boolean, nil]
#
# @!attribute [rw] iteration_id
#   @return [Integer, nil]
#
# @!attribute [rw] iteration_ids
#   @return [Array, nil]
#
# @!attribute [rw] label_ids
#   @return [Array, nil]
#
# @!attribute [rw] label_name
#   @return [String, nil]
#
# @!attribute [rw] labels_add
#   @return [Array, nil]
#
# @!attribute [rw] labels_remove
#   @return [Array, nil]
#
# @!attribute [rw] move_to
#   @return [String, nil]
#
# @!attribute [rw] owner_id
#   @return [String, nil]
#
# @!attribute [rw] owner_ids
#   @return [Array, nil]
#
# @!attribute [rw] owner_ids_add
#   @return [Array, nil]
#
# @!attribute [rw] owner_ids_remove
#   @return [Array, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] project_ids
#   @return [Array, nil]
#
# @!attribute [rw] requested_by_id
#   @return [String, nil]
#
# @!attribute [rw] stories
#   @return [Array]
#
# @!attribute [rw] story_ids
#   @return [Array]
#
# @!attribute [rw] story_type
#   @return [String, nil]
#
# @!attribute [rw] updated_at_end
#   @return [String, nil]
#
# @!attribute [rw] updated_at_start
#   @return [String, nil]
#
# @!attribute [rw] workflow_state_id
#   @return [Integer, nil]
#
# @!attribute [rw] workflow_state_types
#   @return [Array, nil]
StorySlimCreateData = Struct.new(
  :after_id,
  :archived,
  :before_id,
  :completed_at_end,
  :completed_at_start,
  :created_at_end,
  :created_at_start,
  :custom_fields_add,
  :custom_fields_remove,
  :deadline,
  :deadline_end,
  :deadline_start,
  :epic_id,
  :epic_ids,
  :estimate,
  :external_id,
  :external_links,
  :follower_ids_add,
  :follower_ids_remove,
  :group_id,
  :group_ids,
  :includes_description,
  :iteration_id,
  :iteration_ids,
  :label_ids,
  :label_name,
  :labels_add,
  :labels_remove,
  :move_to,
  :owner_id,
  :owner_ids,
  :owner_ids_add,
  :owner_ids_remove,
  :project_id,
  :project_ids,
  :requested_by_id,
  :stories,
  :story_ids,
  :story_type,
  :updated_at_end,
  :updated_at_start,
  :workflow_state_id,
  :workflow_state_types,
  keyword_init: true
)

# Request payload for StorySlim#update.
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] completed_at_end
#   @return [String, nil]
#
# @!attribute [rw] completed_at_start
#   @return [String, nil]
#
# @!attribute [rw] created_at_end
#   @return [String, nil]
#
# @!attribute [rw] created_at_start
#   @return [String, nil]
#
# @!attribute [rw] custom_fields_add
#   @return [Array, nil]
#
# @!attribute [rw] custom_fields_remove
#   @return [Array, nil]
#
# @!attribute [rw] deadline
#   @return [String, nil]
#
# @!attribute [rw] deadline_end
#   @return [String, nil]
#
# @!attribute [rw] deadline_start
#   @return [String, nil]
#
# @!attribute [rw] epic_id
#   @return [Integer, nil]
#
# @!attribute [rw] epic_ids
#   @return [Array, nil]
#
# @!attribute [rw] estimate
#   @return [Integer, nil]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] external_links
#   @return [Array, nil]
#
# @!attribute [rw] follower_ids_add
#   @return [Array, nil]
#
# @!attribute [rw] follower_ids_remove
#   @return [Array, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] group_ids
#   @return [Array, nil]
#
# @!attribute [rw] includes_description
#   @return [Boolean, nil]
#
# @!attribute [rw] iteration_id
#   @return [Integer, nil]
#
# @!attribute [rw] iteration_ids
#   @return [Array, nil]
#
# @!attribute [rw] label_ids
#   @return [Array, nil]
#
# @!attribute [rw] label_name
#   @return [String, nil]
#
# @!attribute [rw] labels_add
#   @return [Array, nil]
#
# @!attribute [rw] labels_remove
#   @return [Array, nil]
#
# @!attribute [rw] move_to
#   @return [String, nil]
#
# @!attribute [rw] owner_id
#   @return [String, nil]
#
# @!attribute [rw] owner_ids
#   @return [Array, nil]
#
# @!attribute [rw] owner_ids_add
#   @return [Array, nil]
#
# @!attribute [rw] owner_ids_remove
#   @return [Array, nil]
#
# @!attribute [rw] project_id
#   @return [Integer, nil]
#
# @!attribute [rw] project_ids
#   @return [Array, nil]
#
# @!attribute [rw] requested_by_id
#   @return [String, nil]
#
# @!attribute [rw] stories
#   @return [Array, nil]
#
# @!attribute [rw] story_ids
#   @return [Array, nil]
#
# @!attribute [rw] story_type
#   @return [String, nil]
#
# @!attribute [rw] updated_at_end
#   @return [String, nil]
#
# @!attribute [rw] updated_at_start
#   @return [String, nil]
#
# @!attribute [rw] workflow_state_id
#   @return [Integer, nil]
#
# @!attribute [rw] workflow_state_types
#   @return [Array, nil]
StorySlimUpdateData = Struct.new(
  :after_id,
  :archived,
  :before_id,
  :completed_at_end,
  :completed_at_start,
  :created_at_end,
  :created_at_start,
  :custom_fields_add,
  :custom_fields_remove,
  :deadline,
  :deadline_end,
  :deadline_start,
  :epic_id,
  :epic_ids,
  :estimate,
  :external_id,
  :external_links,
  :follower_ids_add,
  :follower_ids_remove,
  :group_id,
  :group_ids,
  :includes_description,
  :iteration_id,
  :iteration_ids,
  :label_ids,
  :label_name,
  :labels_add,
  :labels_remove,
  :move_to,
  :owner_id,
  :owner_ids,
  :owner_ids_add,
  :owner_ids_remove,
  :project_id,
  :project_ids,
  :requested_by_id,
  :stories,
  :story_ids,
  :story_type,
  :updated_at_end,
  :updated_at_start,
  :workflow_state_id,
  :workflow_state_types,
  keyword_init: true
)

# Task entity data model.
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] complete
#   @return [Boolean]
#
# @!attribute [rw] completed_at
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] external_id
#   @return [String]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] group_mention_ids
#   @return [Array]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] member_mention_ids
#   @return [Array]
#
# @!attribute [rw] mention_ids
#   @return [Array]
#
# @!attribute [rw] owner_ids
#   @return [Array]
#
# @!attribute [rw] position
#   @return [Integer]
#
# @!attribute [rw] story_id
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [String]
Task = Struct.new(
  :after_id,
  :before_id,
  :complete,
  :completed_at,
  :created_at,
  :description,
  :entity_type,
  :external_id,
  :global_id,
  :group_mention_ids,
  :id,
  :member_mention_ids,
  :mention_ids,
  :owner_ids,
  :position,
  :story_id,
  :updated_at,
  keyword_init: true
)

# Request payload for Task#load.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] story_id
#   @return [Integer]
TaskLoadMatch = Struct.new(
  :id,
  :story_id,
  keyword_init: true
)

# Request payload for Task#create.
#
# @!attribute [rw] story_id
#   @return [Integer]
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] complete
#   @return [Boolean]
#
# @!attribute [rw] completed_at
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] external_id
#   @return [String]
#
# @!attribute [rw] global_id
#   @return [String]
#
# @!attribute [rw] group_mention_ids
#   @return [Array]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] member_mention_ids
#   @return [Array]
#
# @!attribute [rw] mention_ids
#   @return [Array]
#
# @!attribute [rw] owner_ids
#   @return [Array]
#
# @!attribute [rw] position
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [String]
TaskCreateData = Struct.new(
  :story_id,
  :after_id,
  :before_id,
  :complete,
  :completed_at,
  :created_at,
  :description,
  :entity_type,
  :external_id,
  :global_id,
  :group_mention_ids,
  :id,
  :member_mention_ids,
  :mention_ids,
  :owner_ids,
  :position,
  :updated_at,
  keyword_init: true
)

# Request payload for Task#update.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] story_id
#   @return [Integer]
#
# @!attribute [rw] after_id
#   @return [Integer, nil]
#
# @!attribute [rw] before_id
#   @return [Integer, nil]
#
# @!attribute [rw] complete
#   @return [Boolean, nil]
#
# @!attribute [rw] completed_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] global_id
#   @return [String, nil]
#
# @!attribute [rw] group_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] member_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] owner_ids
#   @return [Array, nil]
#
# @!attribute [rw] position
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
TaskUpdateData = Struct.new(
  :id,
  :story_id,
  :after_id,
  :before_id,
  :complete,
  :completed_at,
  :created_at,
  :description,
  :entity_type,
  :external_id,
  :global_id,
  :group_mention_ids,
  :member_mention_ids,
  :mention_ids,
  :owner_ids,
  :position,
  :updated_at,
  keyword_init: true
)

# Request payload for Task#remove.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] story_id
#   @return [Integer]
TaskRemoveMatch = Struct.new(
  :id,
  :story_id,
  keyword_init: true
)

# ThreadedComment entity data model.
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] author_id
#   @return [String]
#
# @!attribute [rw] comments
#   @return [Array]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] deleted
#   @return [Boolean]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] external_id
#   @return [String]
#
# @!attribute [rw] group_mention_ids
#   @return [Array]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] member_mention_ids
#   @return [Array]
#
# @!attribute [rw] mention_ids
#   @return [Array]
#
# @!attribute [rw] text
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
ThreadedComment = Struct.new(
  :app_url,
  :author_id,
  :comments,
  :created_at,
  :deleted,
  :entity_type,
  :external_id,
  :group_mention_ids,
  :id,
  :member_mention_ids,
  :mention_ids,
  :text,
  :updated_at,
  keyword_init: true
)

# Request payload for ThreadedComment#load.
#
# @!attribute [rw] epic_id
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [Integer]
ThreadedCommentLoadMatch = Struct.new(
  :epic_id,
  :id,
  keyword_init: true
)

# Request payload for ThreadedComment#list.
#
# @!attribute [rw] epic_id
#   @return [Integer]
ThreadedCommentListMatch = Struct.new(
  :epic_id,
  keyword_init: true
)

# Request payload for ThreadedComment#create.
#
# @!attribute [rw] epic_id
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] app_url
#   @return [String]
#
# @!attribute [rw] author_id
#   @return [String]
#
# @!attribute [rw] comments
#   @return [Array]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] deleted
#   @return [Boolean]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] external_id
#   @return [String]
#
# @!attribute [rw] group_mention_ids
#   @return [Array]
#
# @!attribute [rw] member_mention_ids
#   @return [Array]
#
# @!attribute [rw] mention_ids
#   @return [Array]
#
# @!attribute [rw] text
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
ThreadedCommentCreateData = Struct.new(
  :epic_id,
  :id,
  :app_url,
  :author_id,
  :comments,
  :created_at,
  :deleted,
  :entity_type,
  :external_id,
  :group_mention_ids,
  :member_mention_ids,
  :mention_ids,
  :text,
  :updated_at,
  keyword_init: true
)

# Request payload for ThreadedComment#update.
#
# @!attribute [rw] epic_id
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] app_url
#   @return [String, nil]
#
# @!attribute [rw] author_id
#   @return [String, nil]
#
# @!attribute [rw] comments
#   @return [Array, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] deleted
#   @return [Boolean, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] group_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] member_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] text
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ThreadedCommentUpdateData = Struct.new(
  :epic_id,
  :id,
  :app_url,
  :author_id,
  :comments,
  :created_at,
  :deleted,
  :entity_type,
  :external_id,
  :group_mention_ids,
  :member_mention_ids,
  :mention_ids,
  :text,
  :updated_at,
  keyword_init: true
)

# Request payload for ThreadedComment#remove.
#
# @!attribute [rw] epic_id
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [Integer]
ThreadedCommentRemoveMatch = Struct.new(
  :epic_id,
  :id,
  keyword_init: true
)

# UploadedFile entity data model.
#
# @!attribute [rw] content_type
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] external_id
#   @return [String]
#
# @!attribute [rw] filename
#   @return [String]
#
# @!attribute [rw] group_mention_ids
#   @return [Array]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] member_mention_ids
#   @return [Array]
#
# @!attribute [rw] mention_ids
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] size
#   @return [Integer]
#
# @!attribute [rw] story_ids
#   @return [Array]
#
# @!attribute [rw] thumbnail_url
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] uploader_id
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
UploadedFile = Struct.new(
  :content_type,
  :created_at,
  :description,
  :entity_type,
  :external_id,
  :filename,
  :group_mention_ids,
  :id,
  :member_mention_ids,
  :mention_ids,
  :name,
  :size,
  :story_ids,
  :thumbnail_url,
  :updated_at,
  :uploader_id,
  :url,
  keyword_init: true
)

# Request payload for UploadedFile#load.
#
# @!attribute [rw] id
#   @return [Integer]
UploadedFileLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for UploadedFile#list.
#
# @!attribute [rw] content_type
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] filename
#   @return [String, nil]
#
# @!attribute [rw] group_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] member_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] story_ids
#   @return [Array, nil]
#
# @!attribute [rw] thumbnail_url
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] uploader_id
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
UploadedFileListMatch = Struct.new(
  :content_type,
  :created_at,
  :description,
  :entity_type,
  :external_id,
  :filename,
  :group_mention_ids,
  :id,
  :member_mention_ids,
  :mention_ids,
  :name,
  :size,
  :story_ids,
  :thumbnail_url,
  :updated_at,
  :uploader_id,
  :url,
  keyword_init: true
)

# Request payload for UploadedFile#create.
#
# @!attribute [rw] content_type
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] external_id
#   @return [String]
#
# @!attribute [rw] filename
#   @return [String]
#
# @!attribute [rw] group_mention_ids
#   @return [Array]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] member_mention_ids
#   @return [Array]
#
# @!attribute [rw] mention_ids
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] size
#   @return [Integer]
#
# @!attribute [rw] story_ids
#   @return [Array]
#
# @!attribute [rw] thumbnail_url
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] uploader_id
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
UploadedFileCreateData = Struct.new(
  :content_type,
  :created_at,
  :description,
  :entity_type,
  :external_id,
  :filename,
  :group_mention_ids,
  :id,
  :member_mention_ids,
  :mention_ids,
  :name,
  :size,
  :story_ids,
  :thumbnail_url,
  :updated_at,
  :uploader_id,
  :url,
  keyword_init: true
)

# Request payload for UploadedFile#update.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] content_type
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] filename
#   @return [String, nil]
#
# @!attribute [rw] group_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] member_mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] mention_ids
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] story_ids
#   @return [Array, nil]
#
# @!attribute [rw] thumbnail_url
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] uploader_id
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
UploadedFileUpdateData = Struct.new(
  :id,
  :content_type,
  :created_at,
  :description,
  :entity_type,
  :external_id,
  :filename,
  :group_mention_ids,
  :member_mention_ids,
  :mention_ids,
  :name,
  :size,
  :story_ids,
  :thumbnail_url,
  :updated_at,
  :uploader_id,
  :url,
  keyword_init: true
)

# Request payload for UploadedFile#remove.
#
# @!attribute [rw] id
#   @return [Integer]
UploadedFileRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Webhook entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] secret
#   @return [String, nil]
#
# @!attribute [rw] webhook_url
#   @return [String]
Webhook = Struct.new(
  :id,
  :secret,
  :webhook_url,
  keyword_init: true
)

# Request payload for Webhook#load.
#
# @!attribute [rw] id
#   @return [Integer]
WebhookLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Webhook#create.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] secret
#   @return [String, nil]
#
# @!attribute [rw] webhook_url
#   @return [String]
WebhookCreateData = Struct.new(
  :id,
  :secret,
  :webhook_url,
  keyword_init: true
)

# Request payload for Webhook#remove.
#
# @!attribute [rw] id
#   @return [Integer]
WebhookRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Workflow entity data model.
#
# @!attribute [rw] auto_assign_owner
#   @return [Boolean]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] default_state_id
#   @return [Integer]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] project_ids
#   @return [Array]
#
# @!attribute [rw] states
#   @return [Array]
#
# @!attribute [rw] team_id
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [String]
Workflow = Struct.new(
  :auto_assign_owner,
  :created_at,
  :default_state_id,
  :description,
  :entity_type,
  :id,
  :name,
  :project_ids,
  :states,
  :team_id,
  :updated_at,
  keyword_init: true
)

# Request payload for Workflow#load.
#
# @!attribute [rw] id
#   @return [Integer]
WorkflowLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Workflow#list.
#
# @!attribute [rw] auto_assign_owner
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default_state_id
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] entity_type
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] project_ids
#   @return [Array, nil]
#
# @!attribute [rw] states
#   @return [Array, nil]
#
# @!attribute [rw] team_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
WorkflowListMatch = Struct.new(
  :auto_assign_owner,
  :created_at,
  :default_state_id,
  :description,
  :entity_type,
  :id,
  :name,
  :project_ids,
  :states,
  :team_id,
  :updated_at,
  keyword_init: true
)


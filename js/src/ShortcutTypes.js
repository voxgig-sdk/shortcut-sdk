// Typed models for the Shortcut SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} Bulk
 */

/**
 * @typedef {Object} BulkRemoveMatch
 */

/**
 * @typedef {Object} Category
 * @property {boolean} archived
 * @property {string} color
 * @property {string} created_at
 * @property {string} entity_type
 * @property {string} external_id
 * @property {string} global_id
 * @property {number} id
 * @property {string} name
 * @property {string} type
 * @property {string} updated_at
 */

/**
 * @typedef {Object} CategoryLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} CategoryListMatch
 * @property {boolean} [archived]
 * @property {string} [color]
 * @property {string} [created_at]
 * @property {string} [entity_type]
 * @property {string} [external_id]
 * @property {string} [global_id]
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} CategoryCreateData
 * @property {boolean} archived
 * @property {string} color
 * @property {string} created_at
 * @property {string} entity_type
 * @property {string} external_id
 * @property {string} global_id
 * @property {number} id
 * @property {string} name
 * @property {string} type
 * @property {string} updated_at
 */

/**
 * @typedef {Object} CategoryUpdateData
 * @property {number} id
 * @property {boolean} [archived]
 * @property {string} [color]
 * @property {string} [created_at]
 * @property {string} [entity_type]
 * @property {string} [external_id]
 * @property {string} [global_id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} CategoryRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} Comment
 */

/**
 * @typedef {Object} CommentRemoveMatch
 * @property {number} id
 * @property {number} story_id
 */

/**
 * @typedef {Object} CustomField
 * @property {string} [after_id]
 * @property {string} [before_id]
 * @property {string} [canonical_name]
 * @property {string} created_at
 * @property {string} [description]
 * @property {boolean} enabled
 * @property {string} entity_type
 * @property {string} field_type
 * @property {boolean} [fixed_position]
 * @property {string} [icon_set_identifier]
 * @property {string} id
 * @property {string} name
 * @property {number} position
 * @property {Array} [story_types]
 * @property {string} updated_at
 * @property {Array} [values]
 */

/**
 * @typedef {Object} CustomFieldLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CustomFieldListMatch
 * @property {string} [after_id]
 * @property {string} [before_id]
 * @property {string} [canonical_name]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {boolean} [enabled]
 * @property {string} [entity_type]
 * @property {string} [field_type]
 * @property {boolean} [fixed_position]
 * @property {string} [icon_set_identifier]
 * @property {string} [id]
 * @property {string} [name]
 * @property {number} [position]
 * @property {Array} [story_types]
 * @property {string} [updated_at]
 * @property {Array} [values]
 */

/**
 * @typedef {Object} CustomFieldUpdateData
 * @property {string} id
 * @property {string} [after_id]
 * @property {string} [before_id]
 * @property {string} [canonical_name]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {boolean} [enabled]
 * @property {string} [entity_type]
 * @property {string} [field_type]
 * @property {boolean} [fixed_position]
 * @property {string} [icon_set_identifier]
 * @property {string} [name]
 * @property {number} [position]
 * @property {Array} [story_types]
 * @property {string} [updated_at]
 * @property {Array} [values]
 */

/**
 * @typedef {Object} CustomFieldRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Disable
 */

/**
 * @typedef {Object} DisableUpdateData
 */

/**
 * @typedef {Object} DocSlim
 * @property {string} app_url
 * @property {string} content
 * @property {string} id
 * @property {string} title
 */

/**
 * @typedef {Object} DocSlimListMatch
 * @property {string} [app_url]
 * @property {string} [content]
 * @property {string} [id]
 * @property {string} [title]
 */

/**
 * @typedef {Object} DocSlimCreateData
 * @property {string} app_url
 * @property {string} content
 * @property {string} id
 * @property {string} title
 */

/**
 * @typedef {Object} Enable
 */

/**
 * @typedef {Object} EnableUpdateData
 */

/**
 * @typedef {Object} EntityTemplate
 * @property {string} [author_id]
 * @property {string} created_at
 * @property {Array} [custom_fields]
 * @property {string} [deadline]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {number} [epic_id]
 * @property {number} [estimate]
 * @property {Array} [external_links]
 * @property {Array} [files]
 * @property {Array} [follower_ids]
 * @property {string} [group_id]
 * @property {string} id
 * @property {number} [iteration_id]
 * @property {Array} [label_ids]
 * @property {Array} [labels]
 * @property {string} last_used_at
 * @property {Array} [linked_files]
 * @property {string} [name]
 * @property {Array} [owner_ids]
 * @property {number} [project_id]
 * @property {Object} story_contents
 * @property {string} [story_type]
 * @property {Array} [sub_tasks]
 * @property {Array} [tasks]
 * @property {string} updated_at
 * @property {number} [workflow_state_id]
 */

/**
 * @typedef {Object} EntityTemplateLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} EntityTemplateListMatch
 * @property {string} [author_id]
 * @property {string} [created_at]
 * @property {Array} [custom_fields]
 * @property {string} [deadline]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {number} [epic_id]
 * @property {number} [estimate]
 * @property {Array} [external_links]
 * @property {Array} [files]
 * @property {Array} [follower_ids]
 * @property {string} [group_id]
 * @property {string} [id]
 * @property {number} [iteration_id]
 * @property {Array} [label_ids]
 * @property {Array} [labels]
 * @property {string} [last_used_at]
 * @property {Array} [linked_files]
 * @property {string} [name]
 * @property {Array} [owner_ids]
 * @property {number} [project_id]
 * @property {Object} [story_contents]
 * @property {string} [story_type]
 * @property {Array} [sub_tasks]
 * @property {Array} [tasks]
 * @property {string} [updated_at]
 * @property {number} [workflow_state_id]
 */

/**
 * @typedef {Object} EntityTemplateCreateData
 * @property {string} [author_id]
 * @property {string} created_at
 * @property {Array} [custom_fields]
 * @property {string} [deadline]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {number} [epic_id]
 * @property {number} [estimate]
 * @property {Array} [external_links]
 * @property {Array} [files]
 * @property {Array} [follower_ids]
 * @property {string} [group_id]
 * @property {string} id
 * @property {number} [iteration_id]
 * @property {Array} [label_ids]
 * @property {Array} [labels]
 * @property {string} last_used_at
 * @property {Array} [linked_files]
 * @property {string} [name]
 * @property {Array} [owner_ids]
 * @property {number} [project_id]
 * @property {Object} story_contents
 * @property {string} [story_type]
 * @property {Array} [sub_tasks]
 * @property {Array} [tasks]
 * @property {string} updated_at
 * @property {number} [workflow_state_id]
 */

/**
 * @typedef {Object} EntityTemplateUpdateData
 * @property {string} id
 * @property {string} [author_id]
 * @property {string} [created_at]
 * @property {Array} [custom_fields]
 * @property {string} [deadline]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {number} [epic_id]
 * @property {number} [estimate]
 * @property {Array} [external_links]
 * @property {Array} [files]
 * @property {Array} [follower_ids]
 * @property {string} [group_id]
 * @property {number} [iteration_id]
 * @property {Array} [label_ids]
 * @property {Array} [labels]
 * @property {string} [last_used_at]
 * @property {Array} [linked_files]
 * @property {string} [name]
 * @property {Array} [owner_ids]
 * @property {number} [project_id]
 * @property {Object} [story_contents]
 * @property {string} [story_type]
 * @property {Array} [sub_tasks]
 * @property {Array} [tasks]
 * @property {string} [updated_at]
 * @property {number} [workflow_state_id]
 */

/**
 * @typedef {Object} EntityTemplateRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Epic
 * @property {number} [after_id]
 * @property {string} app_url
 * @property {boolean} archived
 * @property {Array} associated_groups
 * @property {number} [before_id]
 * @property {Array} comments
 * @property {boolean} completed
 * @property {string} completed_at
 * @property {string} completed_at_override
 * @property {number} [converted_from_story_id]
 * @property {string} created_at
 * @property {string} deadline
 * @property {string} description
 * @property {string} entity_type
 * @property {number} epic_state_id
 * @property {string} external_id
 * @property {Array} follower_ids
 * @property {string} global_id
 * @property {string} group_id
 * @property {Array} group_ids
 * @property {Array} group_mention_ids
 * @property {Object} health
 * @property {number} id
 * @property {Array} label_ids
 * @property {Array} labels
 * @property {Array} member_mention_ids
 * @property {Array} mention_ids
 * @property {number} milestone_id
 * @property {string} name
 * @property {Array} objective_ids
 * @property {Array} owner_ids
 * @property {string} planned_start_date
 * @property {number} position
 * @property {string} productboard_id
 * @property {string} productboard_name
 * @property {string} productboard_plugin_id
 * @property {string} productboard_url
 * @property {Array} project_ids
 * @property {string} requested_by_id
 * @property {boolean} started
 * @property {string} started_at
 * @property {string} started_at_override
 * @property {string} state
 * @property {Object} stats
 * @property {number} stories_without_projects
 * @property {string} updated_at
 */

/**
 * @typedef {Object} EpicLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} EpicListMatch
 * @property {number} [label_id]
 * @property {number} [milestone_id]
 * @property {number} [objectif_id]
 */

/**
 * @typedef {Object} EpicCreateData
 * @property {number} [after_id]
 * @property {string} app_url
 * @property {boolean} archived
 * @property {Array} associated_groups
 * @property {number} [before_id]
 * @property {Array} comments
 * @property {boolean} completed
 * @property {string} completed_at
 * @property {string} completed_at_override
 * @property {number} [converted_from_story_id]
 * @property {string} created_at
 * @property {string} deadline
 * @property {string} description
 * @property {string} entity_type
 * @property {number} epic_state_id
 * @property {string} external_id
 * @property {Array} follower_ids
 * @property {string} global_id
 * @property {string} group_id
 * @property {Array} group_ids
 * @property {Array} group_mention_ids
 * @property {Object} health
 * @property {number} id
 * @property {Array} label_ids
 * @property {Array} labels
 * @property {Array} member_mention_ids
 * @property {Array} mention_ids
 * @property {number} milestone_id
 * @property {string} name
 * @property {Array} objective_ids
 * @property {Array} owner_ids
 * @property {string} planned_start_date
 * @property {number} position
 * @property {string} productboard_id
 * @property {string} productboard_name
 * @property {string} productboard_plugin_id
 * @property {string} productboard_url
 * @property {Array} project_ids
 * @property {string} requested_by_id
 * @property {boolean} started
 * @property {string} started_at
 * @property {string} started_at_override
 * @property {string} state
 * @property {Object} stats
 * @property {number} stories_without_projects
 * @property {string} updated_at
 */

/**
 * @typedef {Object} EpicUpdateData
 * @property {number} id
 * @property {number} [after_id]
 * @property {string} [app_url]
 * @property {boolean} [archived]
 * @property {Array} [associated_groups]
 * @property {number} [before_id]
 * @property {Array} [comments]
 * @property {boolean} [completed]
 * @property {string} [completed_at]
 * @property {string} [completed_at_override]
 * @property {number} [converted_from_story_id]
 * @property {string} [created_at]
 * @property {string} [deadline]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {number} [epic_state_id]
 * @property {string} [external_id]
 * @property {Array} [follower_ids]
 * @property {string} [global_id]
 * @property {string} [group_id]
 * @property {Array} [group_ids]
 * @property {Array} [group_mention_ids]
 * @property {Object} [health]
 * @property {Array} [label_ids]
 * @property {Array} [labels]
 * @property {Array} [member_mention_ids]
 * @property {Array} [mention_ids]
 * @property {number} [milestone_id]
 * @property {string} [name]
 * @property {Array} [objective_ids]
 * @property {Array} [owner_ids]
 * @property {string} [planned_start_date]
 * @property {number} [position]
 * @property {string} [productboard_id]
 * @property {string} [productboard_name]
 * @property {string} [productboard_plugin_id]
 * @property {string} [productboard_url]
 * @property {Array} [project_ids]
 * @property {string} [requested_by_id]
 * @property {boolean} [started]
 * @property {string} [started_at]
 * @property {string} [started_at_override]
 * @property {string} [state]
 * @property {Object} [stats]
 * @property {number} [stories_without_projects]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} EpicRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} EpicPaginatedResult
 * @property {string} app_url
 * @property {boolean} archived
 * @property {Array} associated_groups
 * @property {boolean} completed
 * @property {string} completed_at
 * @property {string} completed_at_override
 * @property {string} created_at
 * @property {string} deadline
 * @property {string} [description]
 * @property {string} entity_type
 * @property {number} epic_state_id
 * @property {string} external_id
 * @property {Array} follower_ids
 * @property {string} global_id
 * @property {string} group_id
 * @property {Array} group_ids
 * @property {Array} group_mention_ids
 * @property {number} id
 * @property {Array} label_ids
 * @property {Array} labels
 * @property {Array} member_mention_ids
 * @property {Array} mention_ids
 * @property {number} milestone_id
 * @property {string} name
 * @property {Array} objective_ids
 * @property {Array} owner_ids
 * @property {string} planned_start_date
 * @property {number} position
 * @property {string} productboard_id
 * @property {string} productboard_name
 * @property {string} productboard_plugin_id
 * @property {string} productboard_url
 * @property {Array} project_ids
 * @property {string} requested_by_id
 * @property {boolean} started
 * @property {string} started_at
 * @property {string} started_at_override
 * @property {string} state
 * @property {Object} stats
 * @property {number} stories_without_projects
 * @property {string} updated_at
 */

/**
 * @typedef {Object} EpicPaginatedResultListMatch
 * @property {string} [app_url]
 * @property {boolean} [archived]
 * @property {Array} [associated_groups]
 * @property {boolean} [completed]
 * @property {string} [completed_at]
 * @property {string} [completed_at_override]
 * @property {string} [created_at]
 * @property {string} [deadline]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {number} [epic_state_id]
 * @property {string} [external_id]
 * @property {Array} [follower_ids]
 * @property {string} [global_id]
 * @property {string} [group_id]
 * @property {Array} [group_ids]
 * @property {Array} [group_mention_ids]
 * @property {number} [id]
 * @property {Array} [label_ids]
 * @property {Array} [labels]
 * @property {Array} [member_mention_ids]
 * @property {Array} [mention_ids]
 * @property {number} [milestone_id]
 * @property {string} [name]
 * @property {Array} [objective_ids]
 * @property {Array} [owner_ids]
 * @property {string} [planned_start_date]
 * @property {number} [position]
 * @property {string} [productboard_id]
 * @property {string} [productboard_name]
 * @property {string} [productboard_plugin_id]
 * @property {string} [productboard_url]
 * @property {Array} [project_ids]
 * @property {string} [requested_by_id]
 * @property {boolean} [started]
 * @property {string} [started_at]
 * @property {string} [started_at_override]
 * @property {string} [state]
 * @property {Object} [stats]
 * @property {number} [stories_without_projects]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} EpicUnlinkProductboard
 */

/**
 * @typedef {Object} EpicUnlinkProductboardCreateData
 * @property {number} id
 */

/**
 * @typedef {Object} EpicWorkflow
 * @property {string} [color]
 * @property {string} created_at
 * @property {string} description
 * @property {string} entity_type
 * @property {string} global_id
 * @property {number} id
 * @property {string} name
 * @property {number} position
 * @property {string} type
 * @property {string} updated_at
 */

/**
 * @typedef {Object} EpicWorkflowListMatch
 * @property {string} [color]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {string} [global_id]
 * @property {number} [id]
 * @property {string} [name]
 * @property {number} [position]
 * @property {string} [type]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} Group
 * @property {string} app_url
 * @property {boolean} archived
 * @property {string} color
 * @property {string} color_key
 * @property {string} created_at
 * @property {number} [default_workflow_id]
 * @property {string} description
 * @property {Object} display_icon
 * @property {string} [display_icon_id]
 * @property {string} entity_type
 * @property {string} global_id
 * @property {string} id
 * @property {Array} member_ids
 * @property {string} mention_name
 * @property {string} name
 * @property {number} num_epics_started
 * @property {number} num_stories
 * @property {number} num_stories_backlog
 * @property {number} num_stories_started
 * @property {string} updated_at
 * @property {Array} workflow_ids
 */

/**
 * @typedef {Object} GroupLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} GroupListMatch
 * @property {string} [app_url]
 * @property {boolean} [archived]
 * @property {string} [color]
 * @property {string} [color_key]
 * @property {string} [created_at]
 * @property {number} [default_workflow_id]
 * @property {string} [description]
 * @property {Object} [display_icon]
 * @property {string} [display_icon_id]
 * @property {string} [entity_type]
 * @property {string} [global_id]
 * @property {string} [id]
 * @property {Array} [member_ids]
 * @property {string} [mention_name]
 * @property {string} [name]
 * @property {number} [num_epics_started]
 * @property {number} [num_stories]
 * @property {number} [num_stories_backlog]
 * @property {number} [num_stories_started]
 * @property {string} [updated_at]
 * @property {Array} [workflow_ids]
 */

/**
 * @typedef {Object} GroupCreateData
 * @property {string} app_url
 * @property {boolean} archived
 * @property {string} color
 * @property {string} color_key
 * @property {string} created_at
 * @property {number} [default_workflow_id]
 * @property {string} description
 * @property {Object} display_icon
 * @property {string} [display_icon_id]
 * @property {string} entity_type
 * @property {string} global_id
 * @property {string} id
 * @property {Array} member_ids
 * @property {string} mention_name
 * @property {string} name
 * @property {number} num_epics_started
 * @property {number} num_stories
 * @property {number} num_stories_backlog
 * @property {number} num_stories_started
 * @property {string} updated_at
 * @property {Array} workflow_ids
 */

/**
 * @typedef {Object} GroupUpdateData
 * @property {string} id
 * @property {string} [app_url]
 * @property {boolean} [archived]
 * @property {string} [color]
 * @property {string} [color_key]
 * @property {string} [created_at]
 * @property {number} [default_workflow_id]
 * @property {string} [description]
 * @property {Object} [display_icon]
 * @property {string} [display_icon_id]
 * @property {string} [entity_type]
 * @property {string} [global_id]
 * @property {Array} [member_ids]
 * @property {string} [mention_name]
 * @property {string} [name]
 * @property {number} [num_epics_started]
 * @property {number} [num_stories]
 * @property {number} [num_stories_backlog]
 * @property {number} [num_stories_started]
 * @property {string} [updated_at]
 * @property {Array} [workflow_ids]
 */

/**
 * @typedef {Object} Health
 * @property {string} [author_id]
 * @property {string} [created_at]
 * @property {string} entity_type
 * @property {number} [epic_id]
 * @property {string} id
 * @property {number} [objective_id]
 * @property {string} status
 * @property {string} [text]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} HealthLoadMatch
 * @property {number} epic_id
 */

/**
 * @typedef {Object} HealthListMatch
 * @property {number} epic_id
 */

/**
 * @typedef {Object} HealthCreateData
 * @property {number} epic_id
 * @property {string} [author_id]
 * @property {string} [created_at]
 * @property {string} entity_type
 * @property {string} id
 * @property {number} [objective_id]
 * @property {string} status
 * @property {string} [text]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} HealthUpdateData
 * @property {string} id
 * @property {string} [author_id]
 * @property {string} [created_at]
 * @property {string} [entity_type]
 * @property {number} [epic_id]
 * @property {number} [objective_id]
 * @property {string} [status]
 * @property {string} [text]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} History
 * @property {Array} actions
 * @property {string} [actor_name]
 * @property {string} [automation_id]
 * @property {string} changed_at
 * @property {string} [external_id]
 * @property {string} id
 * @property {string} [member_id]
 * @property {string} [primary_id]
 * @property {Array} [references]
 * @property {string} version
 * @property {string} [webhook_id]
 */

/**
 * @typedef {Object} HistoryListMatch
 * @property {number} story_id
 */

/**
 * @typedef {Object} Iteration
 * @property {string} app_url
 * @property {Array} associated_groups
 * @property {string} created_at
 * @property {string} description
 * @property {string} end_date
 * @property {string} entity_type
 * @property {Array} follower_ids
 * @property {string} global_id
 * @property {Array} group_ids
 * @property {Array} group_mention_ids
 * @property {number} id
 * @property {Array} label_ids
 * @property {Array} labels
 * @property {Array} member_mention_ids
 * @property {Array} mention_ids
 * @property {string} name
 * @property {string} start_date
 * @property {Object} stats
 * @property {string} status
 * @property {string} updated_at
 */

/**
 * @typedef {Object} IterationLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} IterationListMatch
 * @property {string} [app_url]
 * @property {Array} [associated_groups]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [end_date]
 * @property {string} [entity_type]
 * @property {Array} [follower_ids]
 * @property {string} [global_id]
 * @property {Array} [group_ids]
 * @property {Array} [group_mention_ids]
 * @property {number} [id]
 * @property {Array} [label_ids]
 * @property {Array} [labels]
 * @property {Array} [member_mention_ids]
 * @property {Array} [mention_ids]
 * @property {string} [name]
 * @property {string} [start_date]
 * @property {Object} [stats]
 * @property {string} [status]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} IterationCreateData
 * @property {string} app_url
 * @property {Array} associated_groups
 * @property {string} created_at
 * @property {string} description
 * @property {string} end_date
 * @property {string} entity_type
 * @property {Array} follower_ids
 * @property {string} global_id
 * @property {Array} group_ids
 * @property {Array} group_mention_ids
 * @property {number} id
 * @property {Array} label_ids
 * @property {Array} labels
 * @property {Array} member_mention_ids
 * @property {Array} mention_ids
 * @property {string} name
 * @property {string} start_date
 * @property {Object} stats
 * @property {string} status
 * @property {string} updated_at
 */

/**
 * @typedef {Object} IterationUpdateData
 * @property {number} id
 * @property {string} [app_url]
 * @property {Array} [associated_groups]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [end_date]
 * @property {string} [entity_type]
 * @property {Array} [follower_ids]
 * @property {string} [global_id]
 * @property {Array} [group_ids]
 * @property {Array} [group_mention_ids]
 * @property {Array} [label_ids]
 * @property {Array} [labels]
 * @property {Array} [member_mention_ids]
 * @property {Array} [mention_ids]
 * @property {string} [name]
 * @property {string} [start_date]
 * @property {Object} [stats]
 * @property {string} [status]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} IterationRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} KeyResult
 * @property {Object} current_observed_value
 * @property {Object} current_target_value
 * @property {string} id
 * @property {Object} initial_observed_value
 * @property {string} name
 * @property {number} objective_id
 * @property {Object} [observed_value]
 * @property {number} progress
 * @property {Object} [target_value]
 * @property {string} type
 */

/**
 * @typedef {Object} KeyResultLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} KeyResultUpdateData
 * @property {string} id
 * @property {Object} [current_observed_value]
 * @property {Object} [current_target_value]
 * @property {Object} [initial_observed_value]
 * @property {string} [name]
 * @property {number} [objective_id]
 * @property {Object} [observed_value]
 * @property {number} [progress]
 * @property {Object} [target_value]
 * @property {string} [type]
 */

/**
 * @typedef {Object} Label
 * @property {string} app_url
 * @property {boolean} [archived]
 * @property {string} [color]
 * @property {string} created_at
 * @property {string} [description]
 * @property {string} entity_type
 * @property {string} [external_id]
 * @property {string} global_id
 * @property {number} id
 * @property {string} name
 * @property {number} num_epics
 * @property {number} num_epics_completed
 * @property {number} num_epics_in_progress
 * @property {number} num_epics_total
 * @property {number} num_epics_unstarted
 * @property {number} num_points_backlog
 * @property {number} num_points_completed
 * @property {number} num_points_in_progress
 * @property {number} num_points_total
 * @property {number} num_points_unstarted
 * @property {number} num_related_documents
 * @property {number} num_stories_backlog
 * @property {number} num_stories_completed
 * @property {number} num_stories_in_progress
 * @property {number} num_stories_total
 * @property {number} num_stories_unestimated
 * @property {number} num_stories_unstarted
 * @property {Object} stats
 * @property {string} updated_at
 */

/**
 * @typedef {Object} LabelLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} LabelListMatch
 * @property {string} [app_url]
 * @property {boolean} [archived]
 * @property {string} [color]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {string} [external_id]
 * @property {string} [global_id]
 * @property {number} [id]
 * @property {string} [name]
 * @property {number} [num_epics]
 * @property {number} [num_epics_completed]
 * @property {number} [num_epics_in_progress]
 * @property {number} [num_epics_total]
 * @property {number} [num_epics_unstarted]
 * @property {number} [num_points_backlog]
 * @property {number} [num_points_completed]
 * @property {number} [num_points_in_progress]
 * @property {number} [num_points_total]
 * @property {number} [num_points_unstarted]
 * @property {number} [num_related_documents]
 * @property {number} [num_stories_backlog]
 * @property {number} [num_stories_completed]
 * @property {number} [num_stories_in_progress]
 * @property {number} [num_stories_total]
 * @property {number} [num_stories_unestimated]
 * @property {number} [num_stories_unstarted]
 * @property {Object} [stats]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} LabelCreateData
 * @property {string} app_url
 * @property {boolean} [archived]
 * @property {string} [color]
 * @property {string} created_at
 * @property {string} [description]
 * @property {string} entity_type
 * @property {string} [external_id]
 * @property {string} global_id
 * @property {number} id
 * @property {string} name
 * @property {number} num_epics
 * @property {number} num_epics_completed
 * @property {number} num_epics_in_progress
 * @property {number} num_epics_total
 * @property {number} num_epics_unstarted
 * @property {number} num_points_backlog
 * @property {number} num_points_completed
 * @property {number} num_points_in_progress
 * @property {number} num_points_total
 * @property {number} num_points_unstarted
 * @property {number} num_related_documents
 * @property {number} num_stories_backlog
 * @property {number} num_stories_completed
 * @property {number} num_stories_in_progress
 * @property {number} num_stories_total
 * @property {number} num_stories_unestimated
 * @property {number} num_stories_unstarted
 * @property {Object} stats
 * @property {string} updated_at
 */

/**
 * @typedef {Object} LabelUpdateData
 * @property {number} id
 * @property {string} [app_url]
 * @property {boolean} [archived]
 * @property {string} [color]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {string} [external_id]
 * @property {string} [global_id]
 * @property {string} [name]
 * @property {number} [num_epics]
 * @property {number} [num_epics_completed]
 * @property {number} [num_epics_in_progress]
 * @property {number} [num_epics_total]
 * @property {number} [num_epics_unstarted]
 * @property {number} [num_points_backlog]
 * @property {number} [num_points_completed]
 * @property {number} [num_points_in_progress]
 * @property {number} [num_points_total]
 * @property {number} [num_points_unstarted]
 * @property {number} [num_related_documents]
 * @property {number} [num_stories_backlog]
 * @property {number} [num_stories_completed]
 * @property {number} [num_stories_in_progress]
 * @property {number} [num_stories_total]
 * @property {number} [num_stories_unestimated]
 * @property {number} [num_stories_unstarted]
 * @property {Object} [stats]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} LabelRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} LinkedFile
 * @property {string} content_type
 * @property {string} created_at
 * @property {string} description
 * @property {string} entity_type
 * @property {Array} group_mention_ids
 * @property {number} id
 * @property {Array} member_mention_ids
 * @property {Array} mention_ids
 * @property {string} name
 * @property {number} size
 * @property {number} [story_id]
 * @property {Array} story_ids
 * @property {string} thumbnail_url
 * @property {string} type
 * @property {string} updated_at
 * @property {string} uploader_id
 * @property {string} url
 */

/**
 * @typedef {Object} LinkedFileLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} LinkedFileListMatch
 * @property {string} [content_type]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {Array} [group_mention_ids]
 * @property {number} [id]
 * @property {Array} [member_mention_ids]
 * @property {Array} [mention_ids]
 * @property {string} [name]
 * @property {number} [size]
 * @property {number} [story_id]
 * @property {Array} [story_ids]
 * @property {string} [thumbnail_url]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [uploader_id]
 * @property {string} [url]
 */

/**
 * @typedef {Object} LinkedFileCreateData
 * @property {string} content_type
 * @property {string} created_at
 * @property {string} description
 * @property {string} entity_type
 * @property {Array} group_mention_ids
 * @property {number} id
 * @property {Array} member_mention_ids
 * @property {Array} mention_ids
 * @property {string} name
 * @property {number} size
 * @property {number} [story_id]
 * @property {Array} story_ids
 * @property {string} thumbnail_url
 * @property {string} type
 * @property {string} updated_at
 * @property {string} uploader_id
 * @property {string} url
 */

/**
 * @typedef {Object} LinkedFileUpdateData
 * @property {number} id
 * @property {string} [content_type]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {Array} [group_mention_ids]
 * @property {Array} [member_mention_ids]
 * @property {Array} [mention_ids]
 * @property {string} [name]
 * @property {number} [size]
 * @property {number} [story_id]
 * @property {Array} [story_ids]
 * @property {string} [thumbnail_url]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [uploader_id]
 * @property {string} [url]
 */

/**
 * @typedef {Object} LinkedFileRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} Member
 * @property {string} created_at
 * @property {boolean} created_without_invite
 * @property {boolean} disabled
 * @property {string} entity_type
 * @property {string} global_id
 * @property {Array} group_ids
 * @property {string} id
 * @property {string} [installation_id]
 * @property {boolean} is_owner
 * @property {string} mention_name
 * @property {string} name
 * @property {Object} organization2
 * @property {Object} profile
 * @property {string} [replaced_by]
 * @property {string} role
 * @property {string} state
 * @property {string} updated_at
 * @property {Object} workspace2
 */

/**
 * @typedef {Object} MemberLoadMatch
 * @property {string} [id]
 */

/**
 * @typedef {Object} MemberListMatch
 * @property {string} [created_at]
 * @property {boolean} [created_without_invite]
 * @property {boolean} [disabled]
 * @property {string} [entity_type]
 * @property {string} [global_id]
 * @property {Array} [group_ids]
 * @property {string} [id]
 * @property {string} [installation_id]
 * @property {boolean} [is_owner]
 * @property {string} [mention_name]
 * @property {string} [name]
 * @property {Object} [organization2]
 * @property {Object} [profile]
 * @property {string} [replaced_by]
 * @property {string} [role]
 * @property {string} [state]
 * @property {string} [updated_at]
 * @property {Object} [workspace2]
 */

/**
 * @typedef {Object} Milestone
 * @property {number} [after_id]
 * @property {string} app_url
 * @property {boolean} archived
 * @property {number} [before_id]
 * @property {Array} categories
 * @property {boolean} completed
 * @property {string} completed_at
 * @property {string} completed_at_override
 * @property {string} created_at
 * @property {string} description
 * @property {string} entity_type
 * @property {string} global_id
 * @property {number} id
 * @property {Array} key_result_ids
 * @property {string} name
 * @property {number} position
 * @property {boolean} started
 * @property {string} started_at
 * @property {string} started_at_override
 * @property {string} state
 * @property {Object} stats
 * @property {string} updated_at
 */

/**
 * @typedef {Object} MilestoneLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} MilestoneListMatch
 * @property {number} [category_id]
 */

/**
 * @typedef {Object} MilestoneCreateData
 * @property {number} [after_id]
 * @property {string} app_url
 * @property {boolean} archived
 * @property {number} [before_id]
 * @property {Array} categories
 * @property {boolean} completed
 * @property {string} completed_at
 * @property {string} completed_at_override
 * @property {string} created_at
 * @property {string} description
 * @property {string} entity_type
 * @property {string} global_id
 * @property {number} id
 * @property {Array} key_result_ids
 * @property {string} name
 * @property {number} position
 * @property {boolean} started
 * @property {string} started_at
 * @property {string} started_at_override
 * @property {string} state
 * @property {Object} stats
 * @property {string} updated_at
 */

/**
 * @typedef {Object} MilestoneUpdateData
 * @property {number} id
 * @property {number} [after_id]
 * @property {string} [app_url]
 * @property {boolean} [archived]
 * @property {number} [before_id]
 * @property {Array} [categories]
 * @property {boolean} [completed]
 * @property {string} [completed_at]
 * @property {string} [completed_at_override]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {string} [global_id]
 * @property {Array} [key_result_ids]
 * @property {string} [name]
 * @property {number} [position]
 * @property {boolean} [started]
 * @property {string} [started_at]
 * @property {string} [started_at_override]
 * @property {string} [state]
 * @property {Object} [stats]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} MilestoneRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} Objectif
 */

/**
 * @typedef {Object} ObjectifRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} Objective
 * @property {number} [after_id]
 * @property {string} app_url
 * @property {boolean} archived
 * @property {number} [before_id]
 * @property {Array} categories
 * @property {boolean} completed
 * @property {string} completed_at
 * @property {string} completed_at_override
 * @property {string} created_at
 * @property {string} description
 * @property {string} entity_type
 * @property {string} global_id
 * @property {number} id
 * @property {Array} key_result_ids
 * @property {string} name
 * @property {number} position
 * @property {boolean} started
 * @property {string} started_at
 * @property {string} started_at_override
 * @property {string} state
 * @property {Object} stats
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ObjectiveLoadMatch
 * @property {number} objective_public_id
 */

/**
 * @typedef {Object} ObjectiveListMatch
 * @property {number} [after_id]
 * @property {string} [app_url]
 * @property {boolean} [archived]
 * @property {number} [before_id]
 * @property {Array} [categories]
 * @property {boolean} [completed]
 * @property {string} [completed_at]
 * @property {string} [completed_at_override]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {string} [global_id]
 * @property {number} [id]
 * @property {Array} [key_result_ids]
 * @property {string} [name]
 * @property {number} [position]
 * @property {boolean} [started]
 * @property {string} [started_at]
 * @property {string} [started_at_override]
 * @property {string} [state]
 * @property {Object} [stats]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} ObjectiveCreateData
 * @property {number} [after_id]
 * @property {string} app_url
 * @property {boolean} archived
 * @property {number} [before_id]
 * @property {Array} categories
 * @property {boolean} completed
 * @property {string} completed_at
 * @property {string} completed_at_override
 * @property {string} created_at
 * @property {string} description
 * @property {string} entity_type
 * @property {string} global_id
 * @property {number} id
 * @property {Array} key_result_ids
 * @property {string} name
 * @property {number} position
 * @property {boolean} started
 * @property {string} started_at
 * @property {string} started_at_override
 * @property {string} state
 * @property {Object} stats
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ObjectiveUpdateData
 * @property {number} objective_public_id
 * @property {number} [after_id]
 * @property {string} [app_url]
 * @property {boolean} [archived]
 * @property {number} [before_id]
 * @property {Array} [categories]
 * @property {boolean} [completed]
 * @property {string} [completed_at]
 * @property {string} [completed_at_override]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {string} [global_id]
 * @property {number} [id]
 * @property {Array} [key_result_ids]
 * @property {string} [name]
 * @property {number} [position]
 * @property {boolean} [started]
 * @property {string} [started_at]
 * @property {string} [started_at_override]
 * @property {string} [state]
 * @property {Object} [stats]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} Project
 * @property {string} abbreviation
 * @property {string} app_url
 * @property {boolean} archived
 * @property {string} color
 * @property {string} created_at
 * @property {number} days_to_thermometer
 * @property {string} description
 * @property {string} entity_type
 * @property {string} external_id
 * @property {Array} follower_ids
 * @property {string} global_id
 * @property {number} id
 * @property {number} iteration_length
 * @property {string} name
 * @property {boolean} show_thermometer
 * @property {string} start_time
 * @property {Object} stats
 * @property {number} team_id
 * @property {string} updated_at
 * @property {number} workflow_id
 */

/**
 * @typedef {Object} ProjectLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ProjectListMatch
 * @property {string} [abbreviation]
 * @property {string} [app_url]
 * @property {boolean} [archived]
 * @property {string} [color]
 * @property {string} [created_at]
 * @property {number} [days_to_thermometer]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {string} [external_id]
 * @property {Array} [follower_ids]
 * @property {string} [global_id]
 * @property {number} [id]
 * @property {number} [iteration_length]
 * @property {string} [name]
 * @property {boolean} [show_thermometer]
 * @property {string} [start_time]
 * @property {Object} [stats]
 * @property {number} [team_id]
 * @property {string} [updated_at]
 * @property {number} [workflow_id]
 */

/**
 * @typedef {Object} ProjectCreateData
 * @property {string} abbreviation
 * @property {string} app_url
 * @property {boolean} archived
 * @property {string} color
 * @property {string} created_at
 * @property {number} days_to_thermometer
 * @property {string} description
 * @property {string} entity_type
 * @property {string} external_id
 * @property {Array} follower_ids
 * @property {string} global_id
 * @property {number} id
 * @property {number} iteration_length
 * @property {string} name
 * @property {boolean} show_thermometer
 * @property {string} start_time
 * @property {Object} stats
 * @property {number} team_id
 * @property {string} updated_at
 * @property {number} workflow_id
 */

/**
 * @typedef {Object} ProjectUpdateData
 * @property {number} id
 * @property {string} [abbreviation]
 * @property {string} [app_url]
 * @property {boolean} [archived]
 * @property {string} [color]
 * @property {string} [created_at]
 * @property {number} [days_to_thermometer]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {string} [external_id]
 * @property {Array} [follower_ids]
 * @property {string} [global_id]
 * @property {number} [iteration_length]
 * @property {string} [name]
 * @property {boolean} [show_thermometer]
 * @property {string} [start_time]
 * @property {Object} [stats]
 * @property {number} [team_id]
 * @property {string} [updated_at]
 * @property {number} [workflow_id]
 */

/**
 * @typedef {Object} ProjectRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} Repository
 * @property {string} created_at
 * @property {string} entity_type
 * @property {string} external_id
 * @property {string} full_name
 * @property {number} id
 * @property {string} name
 * @property {string} type
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} RepositoryLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} RepositoryListMatch
 * @property {string} [created_at]
 * @property {string} [entity_type]
 * @property {string} [external_id]
 * @property {string} [full_name]
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [url]
 */

/**
 * @typedef {Object} Search
 * @property {Object} epics
 * @property {Object} iterations
 * @property {Object} milestones
 * @property {Object} stories
 */

/**
 * @typedef {Object} SearchLoadMatch
 * @property {Object} [epics]
 * @property {Object} [iterations]
 * @property {Object} [milestones]
 * @property {Object} [stories]
 */

/**
 * @typedef {Object} Story
 * @property {number} [after_id]
 * @property {string} app_url
 * @property {boolean} archived
 * @property {number} [before_id]
 * @property {boolean} blocked
 * @property {boolean} blocker
 * @property {Array} [branch_ids]
 * @property {Array} branches
 * @property {Array} [comment_ids]
 * @property {Array} comments
 * @property {Array} [commit_ids]
 * @property {Array} commits
 * @property {boolean} completed
 * @property {string} completed_at
 * @property {string} completed_at_override
 * @property {string} created_at
 * @property {Array} [custom_fields]
 * @property {Array} [custom_fields_add]
 * @property {Array} [custom_fields_remove]
 * @property {number} [cycle_time]
 * @property {string} deadline
 * @property {string} description
 * @property {string} entity_type
 * @property {number} epic_id
 * @property {number} estimate
 * @property {string} external_id
 * @property {Array} external_links
 * @property {Array} [external_links_add]
 * @property {Array} [external_links_remove]
 * @property {Array} [file_ids]
 * @property {Array} [file_ids_add]
 * @property {Array} [file_ids_remove]
 * @property {Array} files
 * @property {Array} follower_ids
 * @property {Array} [follower_ids_add]
 * @property {Array} [follower_ids_remove]
 * @property {string} [formatted_vcs_branch_name]
 * @property {string} global_id
 * @property {string} group_id
 * @property {Array} group_mention_ids
 * @property {number} id
 * @property {number} iteration_id
 * @property {Array} label_ids
 * @property {Array} labels
 * @property {Array} [labels_add]
 * @property {Array} [labels_remove]
 * @property {number} [lead_time]
 * @property {Array} [linked_file_ids]
 * @property {Array} [linked_file_ids_add]
 * @property {Array} [linked_file_ids_remove]
 * @property {Array} linked_files
 * @property {Array} member_mention_ids
 * @property {Array} mention_ids
 * @property {string} [move_to]
 * @property {string} moved_at
 * @property {string} name
 * @property {number} [num_tasks_completed]
 * @property {Array} owner_ids
 * @property {Array} [owner_ids_add]
 * @property {Array} [owner_ids_remove]
 * @property {number} [parent_story_id]
 * @property {number} position
 * @property {Array} previous_iteration_ids
 * @property {number} project_id
 * @property {Array} [pull_request_ids]
 * @property {Array} pull_requests
 * @property {string} requested_by_id
 * @property {number} [source_task_id]
 * @property {boolean} started
 * @property {string} started_at
 * @property {string} started_at_override
 * @property {Object} stats
 * @property {Array} story_links
 * @property {string} story_template_id
 * @property {string} story_type
 * @property {Array} [sub_task_story_ids]
 * @property {Array} [sub_tasks]
 * @property {Object} synced_item
 * @property {Array} [task_ids]
 * @property {Array} tasks
 * @property {string} updated_at
 * @property {number} workflow_id
 * @property {number} workflow_state_id
 */

/**
 * @typedef {Object} StoryLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} StoryListMatch
 * @property {string} [group_id]
 * @property {number} [epic_id]
 * @property {number} [iteration_id]
 * @property {number} [label_id]
 * @property {number} [project_id]
 */

/**
 * @typedef {Object} StoryCreateData
 * @property {number} [after_id]
 * @property {string} app_url
 * @property {boolean} archived
 * @property {number} [before_id]
 * @property {boolean} blocked
 * @property {boolean} blocker
 * @property {Array} [branch_ids]
 * @property {Array} branches
 * @property {Array} [comment_ids]
 * @property {Array} comments
 * @property {Array} [commit_ids]
 * @property {Array} commits
 * @property {boolean} completed
 * @property {string} completed_at
 * @property {string} completed_at_override
 * @property {string} created_at
 * @property {Array} [custom_fields]
 * @property {Array} [custom_fields_add]
 * @property {Array} [custom_fields_remove]
 * @property {number} [cycle_time]
 * @property {string} deadline
 * @property {string} description
 * @property {string} entity_type
 * @property {number} epic_id
 * @property {number} estimate
 * @property {string} external_id
 * @property {Array} external_links
 * @property {Array} [external_links_add]
 * @property {Array} [external_links_remove]
 * @property {Array} [file_ids]
 * @property {Array} [file_ids_add]
 * @property {Array} [file_ids_remove]
 * @property {Array} files
 * @property {Array} follower_ids
 * @property {Array} [follower_ids_add]
 * @property {Array} [follower_ids_remove]
 * @property {string} [formatted_vcs_branch_name]
 * @property {string} global_id
 * @property {string} group_id
 * @property {Array} group_mention_ids
 * @property {number} id
 * @property {number} iteration_id
 * @property {Array} label_ids
 * @property {Array} labels
 * @property {Array} [labels_add]
 * @property {Array} [labels_remove]
 * @property {number} [lead_time]
 * @property {Array} [linked_file_ids]
 * @property {Array} [linked_file_ids_add]
 * @property {Array} [linked_file_ids_remove]
 * @property {Array} linked_files
 * @property {Array} member_mention_ids
 * @property {Array} mention_ids
 * @property {string} [move_to]
 * @property {string} moved_at
 * @property {string} name
 * @property {number} [num_tasks_completed]
 * @property {Array} owner_ids
 * @property {Array} [owner_ids_add]
 * @property {Array} [owner_ids_remove]
 * @property {number} [parent_story_id]
 * @property {number} position
 * @property {Array} previous_iteration_ids
 * @property {number} project_id
 * @property {Array} [pull_request_ids]
 * @property {Array} pull_requests
 * @property {string} requested_by_id
 * @property {number} [source_task_id]
 * @property {boolean} started
 * @property {string} started_at
 * @property {string} started_at_override
 * @property {Object} stats
 * @property {Array} story_links
 * @property {string} story_template_id
 * @property {string} story_type
 * @property {Array} [sub_task_story_ids]
 * @property {Array} [sub_tasks]
 * @property {Object} synced_item
 * @property {Array} [task_ids]
 * @property {Array} tasks
 * @property {string} updated_at
 * @property {number} workflow_id
 * @property {number} workflow_state_id
 */

/**
 * @typedef {Object} StoryUpdateData
 * @property {number} id
 * @property {number} [after_id]
 * @property {string} [app_url]
 * @property {boolean} [archived]
 * @property {number} [before_id]
 * @property {boolean} [blocked]
 * @property {boolean} [blocker]
 * @property {Array} [branch_ids]
 * @property {Array} [branches]
 * @property {Array} [comment_ids]
 * @property {Array} [comments]
 * @property {Array} [commit_ids]
 * @property {Array} [commits]
 * @property {boolean} [completed]
 * @property {string} [completed_at]
 * @property {string} [completed_at_override]
 * @property {string} [created_at]
 * @property {Array} [custom_fields]
 * @property {Array} [custom_fields_add]
 * @property {Array} [custom_fields_remove]
 * @property {number} [cycle_time]
 * @property {string} [deadline]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {number} [epic_id]
 * @property {number} [estimate]
 * @property {string} [external_id]
 * @property {Array} [external_links]
 * @property {Array} [external_links_add]
 * @property {Array} [external_links_remove]
 * @property {Array} [file_ids]
 * @property {Array} [file_ids_add]
 * @property {Array} [file_ids_remove]
 * @property {Array} [files]
 * @property {Array} [follower_ids]
 * @property {Array} [follower_ids_add]
 * @property {Array} [follower_ids_remove]
 * @property {string} [formatted_vcs_branch_name]
 * @property {string} [global_id]
 * @property {string} [group_id]
 * @property {Array} [group_mention_ids]
 * @property {number} [iteration_id]
 * @property {Array} [label_ids]
 * @property {Array} [labels]
 * @property {Array} [labels_add]
 * @property {Array} [labels_remove]
 * @property {number} [lead_time]
 * @property {Array} [linked_file_ids]
 * @property {Array} [linked_file_ids_add]
 * @property {Array} [linked_file_ids_remove]
 * @property {Array} [linked_files]
 * @property {Array} [member_mention_ids]
 * @property {Array} [mention_ids]
 * @property {string} [move_to]
 * @property {string} [moved_at]
 * @property {string} [name]
 * @property {number} [num_tasks_completed]
 * @property {Array} [owner_ids]
 * @property {Array} [owner_ids_add]
 * @property {Array} [owner_ids_remove]
 * @property {number} [parent_story_id]
 * @property {number} [position]
 * @property {Array} [previous_iteration_ids]
 * @property {number} [project_id]
 * @property {Array} [pull_request_ids]
 * @property {Array} [pull_requests]
 * @property {string} [requested_by_id]
 * @property {number} [source_task_id]
 * @property {boolean} [started]
 * @property {string} [started_at]
 * @property {string} [started_at_override]
 * @property {Object} [stats]
 * @property {Array} [story_links]
 * @property {string} [story_template_id]
 * @property {string} [story_type]
 * @property {Array} [sub_task_story_ids]
 * @property {Array} [sub_tasks]
 * @property {Object} [synced_item]
 * @property {Array} [task_ids]
 * @property {Array} [tasks]
 * @property {string} [updated_at]
 * @property {number} [workflow_id]
 * @property {number} [workflow_state_id]
 */

/**
 * @typedef {Object} StoryRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} StoryComment
 * @property {string} app_url
 * @property {string} author_id
 * @property {boolean} [blocker]
 * @property {string} created_at
 * @property {boolean} deleted
 * @property {string} entity_type
 * @property {string} external_id
 * @property {Array} group_mention_ids
 * @property {number} id
 * @property {boolean} linked_to_slack
 * @property {Array} member_mention_ids
 * @property {Array} mention_ids
 * @property {number} [parent_id]
 * @property {number} position
 * @property {Array} reactions
 * @property {number} story_id
 * @property {string} text
 * @property {boolean} [unblocks_parent]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} StoryCommentLoadMatch
 * @property {number} id
 * @property {number} story_id
 */

/**
 * @typedef {Object} StoryCommentListMatch
 * @property {number} id
 */

/**
 * @typedef {Object} StoryCommentCreateData
 * @property {number} [comment_id]
 * @property {number} [story_id]
 * @property {number} [id]
 * @property {string} app_url
 * @property {string} author_id
 * @property {boolean} [blocker]
 * @property {string} created_at
 * @property {boolean} deleted
 * @property {string} entity_type
 * @property {string} external_id
 * @property {Array} group_mention_ids
 * @property {boolean} linked_to_slack
 * @property {Array} member_mention_ids
 * @property {Array} mention_ids
 * @property {number} [parent_id]
 * @property {number} position
 * @property {Array} reactions
 * @property {string} text
 * @property {boolean} [unblocks_parent]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} StoryCommentUpdateData
 * @property {number} id
 * @property {number} story_id
 * @property {string} [app_url]
 * @property {string} [author_id]
 * @property {boolean} [blocker]
 * @property {string} [created_at]
 * @property {boolean} [deleted]
 * @property {string} [entity_type]
 * @property {string} [external_id]
 * @property {Array} [group_mention_ids]
 * @property {boolean} [linked_to_slack]
 * @property {Array} [member_mention_ids]
 * @property {Array} [mention_ids]
 * @property {number} [parent_id]
 * @property {number} [position]
 * @property {Array} [reactions]
 * @property {string} [text]
 * @property {boolean} [unblocks_parent]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} StoryLink
 * @property {string} created_at
 * @property {string} entity_type
 * @property {number} id
 * @property {number} object_id
 * @property {number} subject_id
 * @property {number} subject_workflow_state_id
 * @property {string} updated_at
 * @property {string} verb
 */

/**
 * @typedef {Object} StoryLinkLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} StoryLinkCreateData
 * @property {string} created_at
 * @property {string} entity_type
 * @property {number} id
 * @property {number} object_id
 * @property {number} subject_id
 * @property {number} subject_workflow_state_id
 * @property {string} updated_at
 * @property {string} verb
 */

/**
 * @typedef {Object} StoryLinkUpdateData
 * @property {number} id
 * @property {string} [created_at]
 * @property {string} [entity_type]
 * @property {number} [object_id]
 * @property {number} [subject_id]
 * @property {number} [subject_workflow_state_id]
 * @property {string} [updated_at]
 * @property {string} [verb]
 */

/**
 * @typedef {Object} StoryLinkRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} StoryReaction
 * @property {string} emoji
 */

/**
 * @typedef {Object} StoryReactionCreateData
 * @property {number} comment_id
 * @property {number} story_id
 * @property {string} emoji
 */

/**
 * @typedef {Object} StoryReactionRemoveMatch
 * @property {number} comment_id
 * @property {number} story_id
 */

/**
 * @typedef {Object} StorySlim
 * @property {number} [after_id]
 * @property {boolean} [archived]
 * @property {number} [before_id]
 * @property {string} [completed_at_end]
 * @property {string} [completed_at_start]
 * @property {string} [created_at_end]
 * @property {string} [created_at_start]
 * @property {Array} [custom_fields_add]
 * @property {Array} [custom_fields_remove]
 * @property {string} [deadline]
 * @property {string} [deadline_end]
 * @property {string} [deadline_start]
 * @property {number} [epic_id]
 * @property {Array} [epic_ids]
 * @property {number} [estimate]
 * @property {string} [external_id]
 * @property {Array} [external_links]
 * @property {Array} [follower_ids_add]
 * @property {Array} [follower_ids_remove]
 * @property {string} [group_id]
 * @property {Array} [group_ids]
 * @property {boolean} [includes_description]
 * @property {number} [iteration_id]
 * @property {Array} [iteration_ids]
 * @property {Array} [label_ids]
 * @property {string} [label_name]
 * @property {Array} [labels_add]
 * @property {Array} [labels_remove]
 * @property {string} [move_to]
 * @property {string} [owner_id]
 * @property {Array} [owner_ids]
 * @property {Array} [owner_ids_add]
 * @property {Array} [owner_ids_remove]
 * @property {number} [project_id]
 * @property {Array} [project_ids]
 * @property {string} [requested_by_id]
 * @property {Array} stories
 * @property {Array} story_ids
 * @property {string} [story_type]
 * @property {string} [updated_at_end]
 * @property {string} [updated_at_start]
 * @property {number} [workflow_state_id]
 * @property {Array} [workflow_state_types]
 */

/**
 * @typedef {Object} StorySlimCreateData
 * @property {number} [after_id]
 * @property {boolean} [archived]
 * @property {number} [before_id]
 * @property {string} [completed_at_end]
 * @property {string} [completed_at_start]
 * @property {string} [created_at_end]
 * @property {string} [created_at_start]
 * @property {Array} [custom_fields_add]
 * @property {Array} [custom_fields_remove]
 * @property {string} [deadline]
 * @property {string} [deadline_end]
 * @property {string} [deadline_start]
 * @property {number} [epic_id]
 * @property {Array} [epic_ids]
 * @property {number} [estimate]
 * @property {string} [external_id]
 * @property {Array} [external_links]
 * @property {Array} [follower_ids_add]
 * @property {Array} [follower_ids_remove]
 * @property {string} [group_id]
 * @property {Array} [group_ids]
 * @property {boolean} [includes_description]
 * @property {number} [iteration_id]
 * @property {Array} [iteration_ids]
 * @property {Array} [label_ids]
 * @property {string} [label_name]
 * @property {Array} [labels_add]
 * @property {Array} [labels_remove]
 * @property {string} [move_to]
 * @property {string} [owner_id]
 * @property {Array} [owner_ids]
 * @property {Array} [owner_ids_add]
 * @property {Array} [owner_ids_remove]
 * @property {number} [project_id]
 * @property {Array} [project_ids]
 * @property {string} [requested_by_id]
 * @property {Array} stories
 * @property {Array} story_ids
 * @property {string} [story_type]
 * @property {string} [updated_at_end]
 * @property {string} [updated_at_start]
 * @property {number} [workflow_state_id]
 * @property {Array} [workflow_state_types]
 */

/**
 * @typedef {Object} StorySlimUpdateData
 * @property {number} [after_id]
 * @property {boolean} [archived]
 * @property {number} [before_id]
 * @property {string} [completed_at_end]
 * @property {string} [completed_at_start]
 * @property {string} [created_at_end]
 * @property {string} [created_at_start]
 * @property {Array} [custom_fields_add]
 * @property {Array} [custom_fields_remove]
 * @property {string} [deadline]
 * @property {string} [deadline_end]
 * @property {string} [deadline_start]
 * @property {number} [epic_id]
 * @property {Array} [epic_ids]
 * @property {number} [estimate]
 * @property {string} [external_id]
 * @property {Array} [external_links]
 * @property {Array} [follower_ids_add]
 * @property {Array} [follower_ids_remove]
 * @property {string} [group_id]
 * @property {Array} [group_ids]
 * @property {boolean} [includes_description]
 * @property {number} [iteration_id]
 * @property {Array} [iteration_ids]
 * @property {Array} [label_ids]
 * @property {string} [label_name]
 * @property {Array} [labels_add]
 * @property {Array} [labels_remove]
 * @property {string} [move_to]
 * @property {string} [owner_id]
 * @property {Array} [owner_ids]
 * @property {Array} [owner_ids_add]
 * @property {Array} [owner_ids_remove]
 * @property {number} [project_id]
 * @property {Array} [project_ids]
 * @property {string} [requested_by_id]
 * @property {Array} [stories]
 * @property {Array} [story_ids]
 * @property {string} [story_type]
 * @property {string} [updated_at_end]
 * @property {string} [updated_at_start]
 * @property {number} [workflow_state_id]
 * @property {Array} [workflow_state_types]
 */

/**
 * @typedef {Object} Task
 * @property {number} [after_id]
 * @property {number} [before_id]
 * @property {boolean} complete
 * @property {string} completed_at
 * @property {string} created_at
 * @property {string} description
 * @property {string} entity_type
 * @property {string} external_id
 * @property {string} global_id
 * @property {Array} group_mention_ids
 * @property {number} id
 * @property {Array} member_mention_ids
 * @property {Array} mention_ids
 * @property {Array} owner_ids
 * @property {number} position
 * @property {number} story_id
 * @property {string} updated_at
 */

/**
 * @typedef {Object} TaskLoadMatch
 * @property {number} id
 * @property {number} story_id
 */

/**
 * @typedef {Object} TaskCreateData
 * @property {number} story_id
 * @property {number} [after_id]
 * @property {number} [before_id]
 * @property {boolean} complete
 * @property {string} completed_at
 * @property {string} created_at
 * @property {string} description
 * @property {string} entity_type
 * @property {string} external_id
 * @property {string} global_id
 * @property {Array} group_mention_ids
 * @property {number} id
 * @property {Array} member_mention_ids
 * @property {Array} mention_ids
 * @property {Array} owner_ids
 * @property {number} position
 * @property {string} updated_at
 */

/**
 * @typedef {Object} TaskUpdateData
 * @property {number} id
 * @property {number} story_id
 * @property {number} [after_id]
 * @property {number} [before_id]
 * @property {boolean} [complete]
 * @property {string} [completed_at]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {string} [external_id]
 * @property {string} [global_id]
 * @property {Array} [group_mention_ids]
 * @property {Array} [member_mention_ids]
 * @property {Array} [mention_ids]
 * @property {Array} [owner_ids]
 * @property {number} [position]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} TaskRemoveMatch
 * @property {number} id
 * @property {number} story_id
 */

/**
 * @typedef {Object} ThreadedComment
 * @property {string} app_url
 * @property {string} author_id
 * @property {Array} comments
 * @property {string} created_at
 * @property {boolean} deleted
 * @property {string} entity_type
 * @property {string} external_id
 * @property {Array} group_mention_ids
 * @property {number} id
 * @property {Array} member_mention_ids
 * @property {Array} mention_ids
 * @property {string} text
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ThreadedCommentLoadMatch
 * @property {number} epic_id
 * @property {number} id
 */

/**
 * @typedef {Object} ThreadedCommentListMatch
 * @property {number} epic_id
 */

/**
 * @typedef {Object} ThreadedCommentCreateData
 * @property {number} epic_id
 * @property {number} [id]
 * @property {string} app_url
 * @property {string} author_id
 * @property {Array} comments
 * @property {string} created_at
 * @property {boolean} deleted
 * @property {string} entity_type
 * @property {string} external_id
 * @property {Array} group_mention_ids
 * @property {Array} member_mention_ids
 * @property {Array} mention_ids
 * @property {string} text
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ThreadedCommentUpdateData
 * @property {number} epic_id
 * @property {number} id
 * @property {string} [app_url]
 * @property {string} [author_id]
 * @property {Array} [comments]
 * @property {string} [created_at]
 * @property {boolean} [deleted]
 * @property {string} [entity_type]
 * @property {string} [external_id]
 * @property {Array} [group_mention_ids]
 * @property {Array} [member_mention_ids]
 * @property {Array} [mention_ids]
 * @property {string} [text]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} ThreadedCommentRemoveMatch
 * @property {number} epic_id
 * @property {number} id
 */

/**
 * @typedef {Object} UploadedFile
 * @property {string} content_type
 * @property {string} created_at
 * @property {string} description
 * @property {string} entity_type
 * @property {string} external_id
 * @property {string} filename
 * @property {Array} group_mention_ids
 * @property {number} id
 * @property {Array} member_mention_ids
 * @property {Array} mention_ids
 * @property {string} name
 * @property {number} size
 * @property {Array} story_ids
 * @property {string} thumbnail_url
 * @property {string} updated_at
 * @property {string} uploader_id
 * @property {string} url
 */

/**
 * @typedef {Object} UploadedFileLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} UploadedFileListMatch
 * @property {string} [content_type]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {string} [external_id]
 * @property {string} [filename]
 * @property {Array} [group_mention_ids]
 * @property {number} [id]
 * @property {Array} [member_mention_ids]
 * @property {Array} [mention_ids]
 * @property {string} [name]
 * @property {number} [size]
 * @property {Array} [story_ids]
 * @property {string} [thumbnail_url]
 * @property {string} [updated_at]
 * @property {string} [uploader_id]
 * @property {string} [url]
 */

/**
 * @typedef {Object} UploadedFileCreateData
 * @property {string} content_type
 * @property {string} created_at
 * @property {string} description
 * @property {string} entity_type
 * @property {string} external_id
 * @property {string} filename
 * @property {Array} group_mention_ids
 * @property {number} id
 * @property {Array} member_mention_ids
 * @property {Array} mention_ids
 * @property {string} name
 * @property {number} size
 * @property {Array} story_ids
 * @property {string} thumbnail_url
 * @property {string} updated_at
 * @property {string} uploader_id
 * @property {string} url
 */

/**
 * @typedef {Object} UploadedFileUpdateData
 * @property {number} id
 * @property {string} [content_type]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {string} [external_id]
 * @property {string} [filename]
 * @property {Array} [group_mention_ids]
 * @property {Array} [member_mention_ids]
 * @property {Array} [mention_ids]
 * @property {string} [name]
 * @property {number} [size]
 * @property {Array} [story_ids]
 * @property {string} [thumbnail_url]
 * @property {string} [updated_at]
 * @property {string} [uploader_id]
 * @property {string} [url]
 */

/**
 * @typedef {Object} UploadedFileRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} Webhook
 * @property {string} [secret]
 * @property {string} webhook_url
 */

/**
 * @typedef {Object} WebhookLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} WebhookCreateData
 * @property {string} [secret]
 * @property {string} webhook_url
 */

/**
 * @typedef {Object} WebhookRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} Workflow
 * @property {boolean} auto_assign_owner
 * @property {string} created_at
 * @property {number} default_state_id
 * @property {string} description
 * @property {string} entity_type
 * @property {number} id
 * @property {string} name
 * @property {Array} project_ids
 * @property {Array} states
 * @property {number} team_id
 * @property {string} updated_at
 */

/**
 * @typedef {Object} WorkflowLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} WorkflowListMatch
 * @property {boolean} [auto_assign_owner]
 * @property {string} [created_at]
 * @property {number} [default_state_id]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {number} [id]
 * @property {string} [name]
 * @property {Array} [project_ids]
 * @property {Array} [states]
 * @property {number} [team_id]
 * @property {string} [updated_at]
 */


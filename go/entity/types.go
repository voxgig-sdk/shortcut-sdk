// Typed models for the Shortcut SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/shortcut-sdk/go/core"
)

// Bulk is the typed data model for the bulk entity.
type Bulk struct {
}

// BulkRemoveMatch is the typed request payload for Bulk.RemoveTyped.
type BulkRemoveMatch struct {
}

// Category is the typed data model for the category entity.
type Category struct {
	Archived bool `json:"archived"`
	Color string `json:"color"`
	CreatedAt string `json:"created_at"`
	EntityType string `json:"entity_type"`
	ExternalId string `json:"external_id"`
	GlobalId string `json:"global_id"`
	Id int `json:"id"`
	Name string `json:"name"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
}

// CategoryLoadMatch is the typed request payload for Category.LoadTyped.
type CategoryLoadMatch struct {
	Id int `json:"id"`
}

// CategoryListMatch is the typed request payload for Category.ListTyped.
type CategoryListMatch struct {
	Archived *bool `json:"archived,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// CategoryCreateData is the typed request payload for Category.CreateTyped.
type CategoryCreateData struct {
	Archived bool `json:"archived"`
	Color string `json:"color"`
	CreatedAt string `json:"created_at"`
	EntityType string `json:"entity_type"`
	ExternalId string `json:"external_id"`
	GlobalId string `json:"global_id"`
	Id int `json:"id"`
	Name string `json:"name"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
}

// CategoryUpdateData is the typed request payload for Category.UpdateTyped.
type CategoryUpdateData struct {
	Id int `json:"id"`
	Archived *bool `json:"archived,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// CategoryRemoveMatch is the typed request payload for Category.RemoveTyped.
type CategoryRemoveMatch struct {
	Id int `json:"id"`
}

// Comment is the typed data model for the comment entity.
type Comment struct {
}

// CommentRemoveMatch is the typed request payload for Comment.RemoveTyped.
type CommentRemoveMatch struct {
	Id int `json:"id"`
	StoryId int `json:"story_id"`
}

// CustomField is the typed data model for the custom_field entity.
type CustomField struct {
	AfterId *string `json:"after_id,omitempty"`
	BeforeId *string `json:"before_id,omitempty"`
	CanonicalName *string `json:"canonical_name,omitempty"`
	CreatedAt string `json:"created_at"`
	Description *string `json:"description,omitempty"`
	Enabled bool `json:"enabled"`
	EntityType string `json:"entity_type"`
	FieldType string `json:"field_type"`
	FixedPosition *bool `json:"fixed_position,omitempty"`
	IconSetIdentifier *string `json:"icon_set_identifier,omitempty"`
	Id string `json:"id"`
	Name string `json:"name"`
	Position int `json:"position"`
	StoryTypes *[]any `json:"story_types,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Values *[]any `json:"values,omitempty"`
}

// CustomFieldLoadMatch is the typed request payload for CustomField.LoadTyped.
type CustomFieldLoadMatch struct {
	Id string `json:"id"`
}

// CustomFieldListMatch is the typed request payload for CustomField.ListTyped.
type CustomFieldListMatch struct {
	AfterId *string `json:"after_id,omitempty"`
	BeforeId *string `json:"before_id,omitempty"`
	CanonicalName *string `json:"canonical_name,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	FieldType *string `json:"field_type,omitempty"`
	FixedPosition *bool `json:"fixed_position,omitempty"`
	IconSetIdentifier *string `json:"icon_set_identifier,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Position *int `json:"position,omitempty"`
	StoryTypes *[]any `json:"story_types,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Values *[]any `json:"values,omitempty"`
}

// CustomFieldUpdateData is the typed request payload for CustomField.UpdateTyped.
type CustomFieldUpdateData struct {
	Id string `json:"id"`
	AfterId *string `json:"after_id,omitempty"`
	BeforeId *string `json:"before_id,omitempty"`
	CanonicalName *string `json:"canonical_name,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	FieldType *string `json:"field_type,omitempty"`
	FixedPosition *bool `json:"fixed_position,omitempty"`
	IconSetIdentifier *string `json:"icon_set_identifier,omitempty"`
	Name *string `json:"name,omitempty"`
	Position *int `json:"position,omitempty"`
	StoryTypes *[]any `json:"story_types,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Values *[]any `json:"values,omitempty"`
}

// CustomFieldRemoveMatch is the typed request payload for CustomField.RemoveTyped.
type CustomFieldRemoveMatch struct {
	Id string `json:"id"`
}

// Disable is the typed data model for the disable entity.
type Disable struct {
}

// DisableUpdateData is the typed request payload for Disable.UpdateTyped.
type DisableUpdateData struct {
}

// DocSlim is the typed data model for the doc_slim entity.
type DocSlim struct {
	AppUrl string `json:"app_url"`
	Content string `json:"content"`
	Id string `json:"id"`
	Title string `json:"title"`
}

// DocSlimListMatch is the typed request payload for DocSlim.ListTyped.
type DocSlimListMatch struct {
	AppUrl *string `json:"app_url,omitempty"`
	Content *string `json:"content,omitempty"`
	Id *string `json:"id,omitempty"`
	Title *string `json:"title,omitempty"`
}

// DocSlimCreateData is the typed request payload for DocSlim.CreateTyped.
type DocSlimCreateData struct {
	AppUrl string `json:"app_url"`
	Content string `json:"content"`
	Id string `json:"id"`
	Title string `json:"title"`
}

// Enable is the typed data model for the enable entity.
type Enable struct {
}

// EnableUpdateData is the typed request payload for Enable.UpdateTyped.
type EnableUpdateData struct {
}

// EntityTemplate is the typed data model for the entity_template entity.
type EntityTemplate struct {
	AuthorId *string `json:"author_id,omitempty"`
	CreatedAt string `json:"created_at"`
	CustomFields *[]any `json:"custom_fields,omitempty"`
	Deadline *string `json:"deadline,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	EpicId *int `json:"epic_id,omitempty"`
	Estimate *int `json:"estimate,omitempty"`
	ExternalLinks *[]any `json:"external_links,omitempty"`
	Files *[]any `json:"files,omitempty"`
	FollowerIds *[]any `json:"follower_ids,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	IterationId *int `json:"iteration_id,omitempty"`
	LabelIds *[]any `json:"label_ids,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	LastUsedAt string `json:"last_used_at"`
	LinkedFiles *[]any `json:"linked_files,omitempty"`
	Name *string `json:"name,omitempty"`
	OwnerIds *[]any `json:"owner_ids,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	StoryContents map[string]any `json:"story_contents"`
	StoryType *string `json:"story_type,omitempty"`
	SubTasks *[]any `json:"sub_tasks,omitempty"`
	Tasks *[]any `json:"tasks,omitempty"`
	UpdatedAt string `json:"updated_at"`
	WorkflowStateId *int `json:"workflow_state_id,omitempty"`
}

// EntityTemplateLoadMatch is the typed request payload for EntityTemplate.LoadTyped.
type EntityTemplateLoadMatch struct {
	Id string `json:"id"`
}

// EntityTemplateListMatch is the typed request payload for EntityTemplate.ListTyped.
type EntityTemplateListMatch struct {
	AuthorId *string `json:"author_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CustomFields *[]any `json:"custom_fields,omitempty"`
	Deadline *string `json:"deadline,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	EpicId *int `json:"epic_id,omitempty"`
	Estimate *int `json:"estimate,omitempty"`
	ExternalLinks *[]any `json:"external_links,omitempty"`
	Files *[]any `json:"files,omitempty"`
	FollowerIds *[]any `json:"follower_ids,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	Id *string `json:"id,omitempty"`
	IterationId *int `json:"iteration_id,omitempty"`
	LabelIds *[]any `json:"label_ids,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	LinkedFiles *[]any `json:"linked_files,omitempty"`
	Name *string `json:"name,omitempty"`
	OwnerIds *[]any `json:"owner_ids,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	StoryContents *map[string]any `json:"story_contents,omitempty"`
	StoryType *string `json:"story_type,omitempty"`
	SubTasks *[]any `json:"sub_tasks,omitempty"`
	Tasks *[]any `json:"tasks,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	WorkflowStateId *int `json:"workflow_state_id,omitempty"`
}

// EntityTemplateCreateData is the typed request payload for EntityTemplate.CreateTyped.
type EntityTemplateCreateData struct {
	AuthorId *string `json:"author_id,omitempty"`
	CreatedAt string `json:"created_at"`
	CustomFields *[]any `json:"custom_fields,omitempty"`
	Deadline *string `json:"deadline,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	EpicId *int `json:"epic_id,omitempty"`
	Estimate *int `json:"estimate,omitempty"`
	ExternalLinks *[]any `json:"external_links,omitempty"`
	Files *[]any `json:"files,omitempty"`
	FollowerIds *[]any `json:"follower_ids,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	Id string `json:"id"`
	IterationId *int `json:"iteration_id,omitempty"`
	LabelIds *[]any `json:"label_ids,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	LastUsedAt string `json:"last_used_at"`
	LinkedFiles *[]any `json:"linked_files,omitempty"`
	Name *string `json:"name,omitempty"`
	OwnerIds *[]any `json:"owner_ids,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	StoryContents map[string]any `json:"story_contents"`
	StoryType *string `json:"story_type,omitempty"`
	SubTasks *[]any `json:"sub_tasks,omitempty"`
	Tasks *[]any `json:"tasks,omitempty"`
	UpdatedAt string `json:"updated_at"`
	WorkflowStateId *int `json:"workflow_state_id,omitempty"`
}

// EntityTemplateUpdateData is the typed request payload for EntityTemplate.UpdateTyped.
type EntityTemplateUpdateData struct {
	Id string `json:"id"`
	AuthorId *string `json:"author_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CustomFields *[]any `json:"custom_fields,omitempty"`
	Deadline *string `json:"deadline,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	EpicId *int `json:"epic_id,omitempty"`
	Estimate *int `json:"estimate,omitempty"`
	ExternalLinks *[]any `json:"external_links,omitempty"`
	Files *[]any `json:"files,omitempty"`
	FollowerIds *[]any `json:"follower_ids,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	IterationId *int `json:"iteration_id,omitempty"`
	LabelIds *[]any `json:"label_ids,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	LinkedFiles *[]any `json:"linked_files,omitempty"`
	Name *string `json:"name,omitempty"`
	OwnerIds *[]any `json:"owner_ids,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	StoryContents *map[string]any `json:"story_contents,omitempty"`
	StoryType *string `json:"story_type,omitempty"`
	SubTasks *[]any `json:"sub_tasks,omitempty"`
	Tasks *[]any `json:"tasks,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	WorkflowStateId *int `json:"workflow_state_id,omitempty"`
}

// EntityTemplateRemoveMatch is the typed request payload for EntityTemplate.RemoveTyped.
type EntityTemplateRemoveMatch struct {
	Id string `json:"id"`
}

// Epic is the typed data model for the epic entity.
type Epic struct {
	AfterId *int `json:"after_id,omitempty"`
	AppUrl string `json:"app_url"`
	Archived bool `json:"archived"`
	AssociatedGroups []any `json:"associated_groups"`
	BeforeId *int `json:"before_id,omitempty"`
	Comments []any `json:"comments"`
	Completed bool `json:"completed"`
	CompletedAt string `json:"completed_at"`
	CompletedAtOverride string `json:"completed_at_override"`
	ConvertedFromStoryId *int `json:"converted_from_story_id,omitempty"`
	CreatedAt string `json:"created_at"`
	Deadline string `json:"deadline"`
	Description string `json:"description"`
	EntityType string `json:"entity_type"`
	EpicStateId int `json:"epic_state_id"`
	ExternalId string `json:"external_id"`
	FollowerIds []any `json:"follower_ids"`
	GlobalId string `json:"global_id"`
	GroupId string `json:"group_id"`
	GroupIds []any `json:"group_ids"`
	GroupMentionIds []any `json:"group_mention_ids"`
	Health map[string]any `json:"health"`
	Id int `json:"id"`
	LabelIds []any `json:"label_ids"`
	Labels []any `json:"labels"`
	MemberMentionIds []any `json:"member_mention_ids"`
	MentionIds []any `json:"mention_ids"`
	MilestoneId int `json:"milestone_id"`
	Name string `json:"name"`
	ObjectiveIds []any `json:"objective_ids"`
	OwnerIds []any `json:"owner_ids"`
	PlannedStartDate string `json:"planned_start_date"`
	Position int `json:"position"`
	ProductboardId string `json:"productboard_id"`
	ProductboardName string `json:"productboard_name"`
	ProductboardPluginId string `json:"productboard_plugin_id"`
	ProductboardUrl string `json:"productboard_url"`
	ProjectIds []any `json:"project_ids"`
	RequestedById string `json:"requested_by_id"`
	Started bool `json:"started"`
	StartedAt string `json:"started_at"`
	StartedAtOverride string `json:"started_at_override"`
	State string `json:"state"`
	Stats map[string]any `json:"stats"`
	StoriesWithoutProjects int `json:"stories_without_projects"`
	UpdatedAt string `json:"updated_at"`
}

// EpicLoadMatch is the typed request payload for Epic.LoadTyped.
type EpicLoadMatch struct {
	Id int `json:"id"`
}

// EpicListMatch is the typed request payload for Epic.ListTyped.
type EpicListMatch struct {
	AfterId *int `json:"after_id,omitempty"`
	AppUrl *string `json:"app_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AssociatedGroups *[]any `json:"associated_groups,omitempty"`
	BeforeId *int `json:"before_id,omitempty"`
	Comments *[]any `json:"comments,omitempty"`
	Completed *bool `json:"completed,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	CompletedAtOverride *string `json:"completed_at_override,omitempty"`
	ConvertedFromStoryId *int `json:"converted_from_story_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Deadline *string `json:"deadline,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	EpicStateId *int `json:"epic_state_id,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	FollowerIds *[]any `json:"follower_ids,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	GroupIds *[]any `json:"group_ids,omitempty"`
	GroupMentionIds *[]any `json:"group_mention_ids,omitempty"`
	Health *map[string]any `json:"health,omitempty"`
	Id *int `json:"id,omitempty"`
	LabelIds *[]any `json:"label_ids,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	MemberMentionIds *[]any `json:"member_mention_ids,omitempty"`
	MentionIds *[]any `json:"mention_ids,omitempty"`
	MilestoneId *int `json:"milestone_id,omitempty"`
	Name *string `json:"name,omitempty"`
	ObjectiveIds *[]any `json:"objective_ids,omitempty"`
	OwnerIds *[]any `json:"owner_ids,omitempty"`
	PlannedStartDate *string `json:"planned_start_date,omitempty"`
	Position *int `json:"position,omitempty"`
	ProductboardId *string `json:"productboard_id,omitempty"`
	ProductboardName *string `json:"productboard_name,omitempty"`
	ProductboardPluginId *string `json:"productboard_plugin_id,omitempty"`
	ProductboardUrl *string `json:"productboard_url,omitempty"`
	ProjectIds *[]any `json:"project_ids,omitempty"`
	RequestedById *string `json:"requested_by_id,omitempty"`
	Started *bool `json:"started,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
	StartedAtOverride *string `json:"started_at_override,omitempty"`
	State *string `json:"state,omitempty"`
	Stats *map[string]any `json:"stats,omitempty"`
	StoriesWithoutProjects *int `json:"stories_without_projects,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// EpicCreateData is the typed request payload for Epic.CreateTyped.
type EpicCreateData struct {
	AfterId *int `json:"after_id,omitempty"`
	AppUrl string `json:"app_url"`
	Archived bool `json:"archived"`
	AssociatedGroups []any `json:"associated_groups"`
	BeforeId *int `json:"before_id,omitempty"`
	Comments []any `json:"comments"`
	Completed bool `json:"completed"`
	CompletedAt string `json:"completed_at"`
	CompletedAtOverride string `json:"completed_at_override"`
	ConvertedFromStoryId *int `json:"converted_from_story_id,omitempty"`
	CreatedAt string `json:"created_at"`
	Deadline string `json:"deadline"`
	Description string `json:"description"`
	EntityType string `json:"entity_type"`
	EpicStateId int `json:"epic_state_id"`
	ExternalId string `json:"external_id"`
	FollowerIds []any `json:"follower_ids"`
	GlobalId string `json:"global_id"`
	GroupId string `json:"group_id"`
	GroupIds []any `json:"group_ids"`
	GroupMentionIds []any `json:"group_mention_ids"`
	Health map[string]any `json:"health"`
	Id int `json:"id"`
	LabelIds []any `json:"label_ids"`
	Labels []any `json:"labels"`
	MemberMentionIds []any `json:"member_mention_ids"`
	MentionIds []any `json:"mention_ids"`
	MilestoneId int `json:"milestone_id"`
	Name string `json:"name"`
	ObjectiveIds []any `json:"objective_ids"`
	OwnerIds []any `json:"owner_ids"`
	PlannedStartDate string `json:"planned_start_date"`
	Position int `json:"position"`
	ProductboardId string `json:"productboard_id"`
	ProductboardName string `json:"productboard_name"`
	ProductboardPluginId string `json:"productboard_plugin_id"`
	ProductboardUrl string `json:"productboard_url"`
	ProjectIds []any `json:"project_ids"`
	RequestedById string `json:"requested_by_id"`
	Started bool `json:"started"`
	StartedAt string `json:"started_at"`
	StartedAtOverride string `json:"started_at_override"`
	State string `json:"state"`
	Stats map[string]any `json:"stats"`
	StoriesWithoutProjects int `json:"stories_without_projects"`
	UpdatedAt string `json:"updated_at"`
}

// EpicUpdateData is the typed request payload for Epic.UpdateTyped.
type EpicUpdateData struct {
	Id int `json:"id"`
	AfterId *int `json:"after_id,omitempty"`
	AppUrl *string `json:"app_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AssociatedGroups *[]any `json:"associated_groups,omitempty"`
	BeforeId *int `json:"before_id,omitempty"`
	Comments *[]any `json:"comments,omitempty"`
	Completed *bool `json:"completed,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	CompletedAtOverride *string `json:"completed_at_override,omitempty"`
	ConvertedFromStoryId *int `json:"converted_from_story_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Deadline *string `json:"deadline,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	EpicStateId *int `json:"epic_state_id,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	FollowerIds *[]any `json:"follower_ids,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	GroupIds *[]any `json:"group_ids,omitempty"`
	GroupMentionIds *[]any `json:"group_mention_ids,omitempty"`
	Health *map[string]any `json:"health,omitempty"`
	LabelIds *[]any `json:"label_ids,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	MemberMentionIds *[]any `json:"member_mention_ids,omitempty"`
	MentionIds *[]any `json:"mention_ids,omitempty"`
	MilestoneId *int `json:"milestone_id,omitempty"`
	Name *string `json:"name,omitempty"`
	ObjectiveIds *[]any `json:"objective_ids,omitempty"`
	OwnerIds *[]any `json:"owner_ids,omitempty"`
	PlannedStartDate *string `json:"planned_start_date,omitempty"`
	Position *int `json:"position,omitempty"`
	ProductboardId *string `json:"productboard_id,omitempty"`
	ProductboardName *string `json:"productboard_name,omitempty"`
	ProductboardPluginId *string `json:"productboard_plugin_id,omitempty"`
	ProductboardUrl *string `json:"productboard_url,omitempty"`
	ProjectIds *[]any `json:"project_ids,omitempty"`
	RequestedById *string `json:"requested_by_id,omitempty"`
	Started *bool `json:"started,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
	StartedAtOverride *string `json:"started_at_override,omitempty"`
	State *string `json:"state,omitempty"`
	Stats *map[string]any `json:"stats,omitempty"`
	StoriesWithoutProjects *int `json:"stories_without_projects,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// EpicRemoveMatch is the typed request payload for Epic.RemoveTyped.
type EpicRemoveMatch struct {
	Id int `json:"id"`
}

// EpicPaginatedResult is the typed data model for the epic_paginated_result entity.
type EpicPaginatedResult struct {
	AppUrl string `json:"app_url"`
	Archived bool `json:"archived"`
	AssociatedGroups []any `json:"associated_groups"`
	Completed bool `json:"completed"`
	CompletedAt string `json:"completed_at"`
	CompletedAtOverride string `json:"completed_at_override"`
	CreatedAt string `json:"created_at"`
	Deadline string `json:"deadline"`
	Description *string `json:"description,omitempty"`
	EntityType string `json:"entity_type"`
	EpicStateId int `json:"epic_state_id"`
	ExternalId string `json:"external_id"`
	FollowerIds []any `json:"follower_ids"`
	GlobalId string `json:"global_id"`
	GroupId string `json:"group_id"`
	GroupIds []any `json:"group_ids"`
	GroupMentionIds []any `json:"group_mention_ids"`
	Id int `json:"id"`
	LabelIds []any `json:"label_ids"`
	Labels []any `json:"labels"`
	MemberMentionIds []any `json:"member_mention_ids"`
	MentionIds []any `json:"mention_ids"`
	MilestoneId int `json:"milestone_id"`
	Name string `json:"name"`
	ObjectiveIds []any `json:"objective_ids"`
	OwnerIds []any `json:"owner_ids"`
	PlannedStartDate string `json:"planned_start_date"`
	Position int `json:"position"`
	ProductboardId string `json:"productboard_id"`
	ProductboardName string `json:"productboard_name"`
	ProductboardPluginId string `json:"productboard_plugin_id"`
	ProductboardUrl string `json:"productboard_url"`
	ProjectIds []any `json:"project_ids"`
	RequestedById string `json:"requested_by_id"`
	Started bool `json:"started"`
	StartedAt string `json:"started_at"`
	StartedAtOverride string `json:"started_at_override"`
	State string `json:"state"`
	Stats map[string]any `json:"stats"`
	StoriesWithoutProjects int `json:"stories_without_projects"`
	UpdatedAt string `json:"updated_at"`
}

// EpicPaginatedResultListMatch is the typed request payload for EpicPaginatedResult.ListTyped.
type EpicPaginatedResultListMatch struct {
	AppUrl *string `json:"app_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	AssociatedGroups *[]any `json:"associated_groups,omitempty"`
	Completed *bool `json:"completed,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	CompletedAtOverride *string `json:"completed_at_override,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Deadline *string `json:"deadline,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	EpicStateId *int `json:"epic_state_id,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	FollowerIds *[]any `json:"follower_ids,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	GroupIds *[]any `json:"group_ids,omitempty"`
	GroupMentionIds *[]any `json:"group_mention_ids,omitempty"`
	Id *int `json:"id,omitempty"`
	LabelIds *[]any `json:"label_ids,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	MemberMentionIds *[]any `json:"member_mention_ids,omitempty"`
	MentionIds *[]any `json:"mention_ids,omitempty"`
	MilestoneId *int `json:"milestone_id,omitempty"`
	Name *string `json:"name,omitempty"`
	ObjectiveIds *[]any `json:"objective_ids,omitempty"`
	OwnerIds *[]any `json:"owner_ids,omitempty"`
	PlannedStartDate *string `json:"planned_start_date,omitempty"`
	Position *int `json:"position,omitempty"`
	ProductboardId *string `json:"productboard_id,omitempty"`
	ProductboardName *string `json:"productboard_name,omitempty"`
	ProductboardPluginId *string `json:"productboard_plugin_id,omitempty"`
	ProductboardUrl *string `json:"productboard_url,omitempty"`
	ProjectIds *[]any `json:"project_ids,omitempty"`
	RequestedById *string `json:"requested_by_id,omitempty"`
	Started *bool `json:"started,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
	StartedAtOverride *string `json:"started_at_override,omitempty"`
	State *string `json:"state,omitempty"`
	Stats *map[string]any `json:"stats,omitempty"`
	StoriesWithoutProjects *int `json:"stories_without_projects,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// EpicUnlinkProductboard is the typed data model for the epic_unlink_productboard entity.
type EpicUnlinkProductboard struct {
}

// EpicUnlinkProductboardCreateData is the typed request payload for EpicUnlinkProductboard.CreateTyped.
type EpicUnlinkProductboardCreateData struct {
	Id int `json:"id"`
}

// EpicWorkflow is the typed data model for the epic_workflow entity.
type EpicWorkflow struct {
	Color *string `json:"color,omitempty"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	EntityType string `json:"entity_type"`
	GlobalId string `json:"global_id"`
	Id int `json:"id"`
	Name string `json:"name"`
	Position int `json:"position"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
}

// EpicWorkflowListMatch is the typed request payload for EpicWorkflow.ListTyped.
type EpicWorkflowListMatch struct {
	Color *string `json:"color,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Position *int `json:"position,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// Group is the typed data model for the group entity.
type Group struct {
	AppUrl string `json:"app_url"`
	Archived bool `json:"archived"`
	Color string `json:"color"`
	ColorKey string `json:"color_key"`
	CreatedAt string `json:"created_at"`
	DefaultWorkflowId *int `json:"default_workflow_id,omitempty"`
	Description string `json:"description"`
	DisplayIcon map[string]any `json:"display_icon"`
	DisplayIconId *string `json:"display_icon_id,omitempty"`
	EntityType string `json:"entity_type"`
	GlobalId string `json:"global_id"`
	Id string `json:"id"`
	MemberIds []any `json:"member_ids"`
	MentionName string `json:"mention_name"`
	Name string `json:"name"`
	NumEpicsStarted int `json:"num_epics_started"`
	NumStories int `json:"num_stories"`
	NumStoriesBacklog int `json:"num_stories_backlog"`
	NumStoriesStarted int `json:"num_stories_started"`
	UpdatedAt string `json:"updated_at"`
	WorkflowIds []any `json:"workflow_ids"`
}

// GroupLoadMatch is the typed request payload for Group.LoadTyped.
type GroupLoadMatch struct {
	Id string `json:"id"`
}

// GroupListMatch is the typed request payload for Group.ListTyped.
type GroupListMatch struct {
	AppUrl *string `json:"app_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	Color *string `json:"color,omitempty"`
	ColorKey *string `json:"color_key,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DefaultWorkflowId *int `json:"default_workflow_id,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayIcon *map[string]any `json:"display_icon,omitempty"`
	DisplayIconId *string `json:"display_icon_id,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	Id *string `json:"id,omitempty"`
	MemberIds *[]any `json:"member_ids,omitempty"`
	MentionName *string `json:"mention_name,omitempty"`
	Name *string `json:"name,omitempty"`
	NumEpicsStarted *int `json:"num_epics_started,omitempty"`
	NumStories *int `json:"num_stories,omitempty"`
	NumStoriesBacklog *int `json:"num_stories_backlog,omitempty"`
	NumStoriesStarted *int `json:"num_stories_started,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	WorkflowIds *[]any `json:"workflow_ids,omitempty"`
}

// GroupCreateData is the typed request payload for Group.CreateTyped.
type GroupCreateData struct {
	AppUrl string `json:"app_url"`
	Archived bool `json:"archived"`
	Color string `json:"color"`
	ColorKey string `json:"color_key"`
	CreatedAt string `json:"created_at"`
	DefaultWorkflowId *int `json:"default_workflow_id,omitempty"`
	Description string `json:"description"`
	DisplayIcon map[string]any `json:"display_icon"`
	DisplayIconId *string `json:"display_icon_id,omitempty"`
	EntityType string `json:"entity_type"`
	GlobalId string `json:"global_id"`
	Id string `json:"id"`
	MemberIds []any `json:"member_ids"`
	MentionName string `json:"mention_name"`
	Name string `json:"name"`
	NumEpicsStarted int `json:"num_epics_started"`
	NumStories int `json:"num_stories"`
	NumStoriesBacklog int `json:"num_stories_backlog"`
	NumStoriesStarted int `json:"num_stories_started"`
	UpdatedAt string `json:"updated_at"`
	WorkflowIds []any `json:"workflow_ids"`
}

// GroupUpdateData is the typed request payload for Group.UpdateTyped.
type GroupUpdateData struct {
	Id string `json:"id"`
	AppUrl *string `json:"app_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	Color *string `json:"color,omitempty"`
	ColorKey *string `json:"color_key,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DefaultWorkflowId *int `json:"default_workflow_id,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayIcon *map[string]any `json:"display_icon,omitempty"`
	DisplayIconId *string `json:"display_icon_id,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	MemberIds *[]any `json:"member_ids,omitempty"`
	MentionName *string `json:"mention_name,omitempty"`
	Name *string `json:"name,omitempty"`
	NumEpicsStarted *int `json:"num_epics_started,omitempty"`
	NumStories *int `json:"num_stories,omitempty"`
	NumStoriesBacklog *int `json:"num_stories_backlog,omitempty"`
	NumStoriesStarted *int `json:"num_stories_started,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	WorkflowIds *[]any `json:"workflow_ids,omitempty"`
}

// Health is the typed data model for the health entity.
type Health struct {
	AuthorId *string `json:"author_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	EntityType string `json:"entity_type"`
	EpicId *int `json:"epic_id,omitempty"`
	Id string `json:"id"`
	ObjectiveId *int `json:"objective_id,omitempty"`
	Status string `json:"status"`
	Text *string `json:"text,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// HealthLoadMatch is the typed request payload for Health.LoadTyped.
type HealthLoadMatch struct {
	EpicId int `json:"epic_id"`
}

// HealthListMatch is the typed request payload for Health.ListTyped.
type HealthListMatch struct {
	EpicId int `json:"epic_id"`
}

// HealthCreateData is the typed request payload for Health.CreateTyped.
type HealthCreateData struct {
	EpicId int `json:"epic_id"`
	AuthorId *string `json:"author_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	EntityType string `json:"entity_type"`
	Id string `json:"id"`
	ObjectiveId *int `json:"objective_id,omitempty"`
	Status string `json:"status"`
	Text *string `json:"text,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// HealthUpdateData is the typed request payload for Health.UpdateTyped.
type HealthUpdateData struct {
	Id string `json:"id"`
	AuthorId *string `json:"author_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	EpicId *int `json:"epic_id,omitempty"`
	ObjectiveId *int `json:"objective_id,omitempty"`
	Status *string `json:"status,omitempty"`
	Text *string `json:"text,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// History is the typed data model for the history entity.
type History struct {
	Actions []any `json:"actions"`
	ActorName *string `json:"actor_name,omitempty"`
	AutomationId *string `json:"automation_id,omitempty"`
	ChangedAt string `json:"changed_at"`
	ExternalId *string `json:"external_id,omitempty"`
	Id string `json:"id"`
	MemberId *string `json:"member_id,omitempty"`
	PrimaryId *string `json:"primary_id,omitempty"`
	References *[]any `json:"references,omitempty"`
	Version string `json:"version"`
	WebhookId *string `json:"webhook_id,omitempty"`
}

// HistoryListMatch is the typed request payload for History.ListTyped.
type HistoryListMatch struct {
	StoryId int `json:"story_id"`
}

// Iteration is the typed data model for the iteration entity.
type Iteration struct {
	AppUrl string `json:"app_url"`
	AssociatedGroups []any `json:"associated_groups"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	EndDate string `json:"end_date"`
	EntityType string `json:"entity_type"`
	FollowerIds []any `json:"follower_ids"`
	GlobalId string `json:"global_id"`
	GroupIds []any `json:"group_ids"`
	GroupMentionIds []any `json:"group_mention_ids"`
	Id int `json:"id"`
	LabelIds []any `json:"label_ids"`
	Labels []any `json:"labels"`
	MemberMentionIds []any `json:"member_mention_ids"`
	MentionIds []any `json:"mention_ids"`
	Name string `json:"name"`
	StartDate string `json:"start_date"`
	Stats map[string]any `json:"stats"`
	Status string `json:"status"`
	UpdatedAt string `json:"updated_at"`
}

// IterationLoadMatch is the typed request payload for Iteration.LoadTyped.
type IterationLoadMatch struct {
	Id int `json:"id"`
}

// IterationListMatch is the typed request payload for Iteration.ListTyped.
type IterationListMatch struct {
	AppUrl *string `json:"app_url,omitempty"`
	AssociatedGroups *[]any `json:"associated_groups,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	FollowerIds *[]any `json:"follower_ids,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	GroupIds *[]any `json:"group_ids,omitempty"`
	GroupMentionIds *[]any `json:"group_mention_ids,omitempty"`
	Id *int `json:"id,omitempty"`
	LabelIds *[]any `json:"label_ids,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	MemberMentionIds *[]any `json:"member_mention_ids,omitempty"`
	MentionIds *[]any `json:"mention_ids,omitempty"`
	Name *string `json:"name,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	Stats *map[string]any `json:"stats,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// IterationCreateData is the typed request payload for Iteration.CreateTyped.
type IterationCreateData struct {
	AppUrl string `json:"app_url"`
	AssociatedGroups []any `json:"associated_groups"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	EndDate string `json:"end_date"`
	EntityType string `json:"entity_type"`
	FollowerIds []any `json:"follower_ids"`
	GlobalId string `json:"global_id"`
	GroupIds []any `json:"group_ids"`
	GroupMentionIds []any `json:"group_mention_ids"`
	Id int `json:"id"`
	LabelIds []any `json:"label_ids"`
	Labels []any `json:"labels"`
	MemberMentionIds []any `json:"member_mention_ids"`
	MentionIds []any `json:"mention_ids"`
	Name string `json:"name"`
	StartDate string `json:"start_date"`
	Stats map[string]any `json:"stats"`
	Status string `json:"status"`
	UpdatedAt string `json:"updated_at"`
}

// IterationUpdateData is the typed request payload for Iteration.UpdateTyped.
type IterationUpdateData struct {
	Id int `json:"id"`
	AppUrl *string `json:"app_url,omitempty"`
	AssociatedGroups *[]any `json:"associated_groups,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	FollowerIds *[]any `json:"follower_ids,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	GroupIds *[]any `json:"group_ids,omitempty"`
	GroupMentionIds *[]any `json:"group_mention_ids,omitempty"`
	LabelIds *[]any `json:"label_ids,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	MemberMentionIds *[]any `json:"member_mention_ids,omitempty"`
	MentionIds *[]any `json:"mention_ids,omitempty"`
	Name *string `json:"name,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	Stats *map[string]any `json:"stats,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// IterationRemoveMatch is the typed request payload for Iteration.RemoveTyped.
type IterationRemoveMatch struct {
	Id int `json:"id"`
}

// KeyResult is the typed data model for the key_result entity.
type KeyResult struct {
	CurrentObservedValue map[string]any `json:"current_observed_value"`
	CurrentTargetValue map[string]any `json:"current_target_value"`
	Id string `json:"id"`
	InitialObservedValue map[string]any `json:"initial_observed_value"`
	Name string `json:"name"`
	ObjectiveId int `json:"objective_id"`
	ObservedValue *map[string]any `json:"observed_value,omitempty"`
	Progress int `json:"progress"`
	TargetValue *map[string]any `json:"target_value,omitempty"`
	Type string `json:"type"`
}

// KeyResultLoadMatch is the typed request payload for KeyResult.LoadTyped.
type KeyResultLoadMatch struct {
	Id string `json:"id"`
}

// KeyResultUpdateData is the typed request payload for KeyResult.UpdateTyped.
type KeyResultUpdateData struct {
	Id string `json:"id"`
	CurrentObservedValue *map[string]any `json:"current_observed_value,omitempty"`
	CurrentTargetValue *map[string]any `json:"current_target_value,omitempty"`
	InitialObservedValue *map[string]any `json:"initial_observed_value,omitempty"`
	Name *string `json:"name,omitempty"`
	ObjectiveId *int `json:"objective_id,omitempty"`
	ObservedValue *map[string]any `json:"observed_value,omitempty"`
	Progress *int `json:"progress,omitempty"`
	TargetValue *map[string]any `json:"target_value,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Label is the typed data model for the label entity.
type Label struct {
	AppUrl string `json:"app_url"`
	Archived *bool `json:"archived,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt string `json:"created_at"`
	Description *string `json:"description,omitempty"`
	EntityType string `json:"entity_type"`
	ExternalId *string `json:"external_id,omitempty"`
	GlobalId string `json:"global_id"`
	Id int `json:"id"`
	Name string `json:"name"`
	NumEpics int `json:"num_epics"`
	NumEpicsCompleted int `json:"num_epics_completed"`
	NumEpicsInProgress int `json:"num_epics_in_progress"`
	NumEpicsTotal int `json:"num_epics_total"`
	NumEpicsUnstarted int `json:"num_epics_unstarted"`
	NumPointsBacklog int `json:"num_points_backlog"`
	NumPointsCompleted int `json:"num_points_completed"`
	NumPointsInProgress int `json:"num_points_in_progress"`
	NumPointsTotal int `json:"num_points_total"`
	NumPointsUnstarted int `json:"num_points_unstarted"`
	NumRelatedDocuments int `json:"num_related_documents"`
	NumStoriesBacklog int `json:"num_stories_backlog"`
	NumStoriesCompleted int `json:"num_stories_completed"`
	NumStoriesInProgress int `json:"num_stories_in_progress"`
	NumStoriesTotal int `json:"num_stories_total"`
	NumStoriesUnestimated int `json:"num_stories_unestimated"`
	NumStoriesUnstarted int `json:"num_stories_unstarted"`
	Stats map[string]any `json:"stats"`
	UpdatedAt string `json:"updated_at"`
}

// LabelLoadMatch is the typed request payload for Label.LoadTyped.
type LabelLoadMatch struct {
	Id int `json:"id"`
}

// LabelListMatch is the typed request payload for Label.ListTyped.
type LabelListMatch struct {
	AppUrl *string `json:"app_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	NumEpics *int `json:"num_epics,omitempty"`
	NumEpicsCompleted *int `json:"num_epics_completed,omitempty"`
	NumEpicsInProgress *int `json:"num_epics_in_progress,omitempty"`
	NumEpicsTotal *int `json:"num_epics_total,omitempty"`
	NumEpicsUnstarted *int `json:"num_epics_unstarted,omitempty"`
	NumPointsBacklog *int `json:"num_points_backlog,omitempty"`
	NumPointsCompleted *int `json:"num_points_completed,omitempty"`
	NumPointsInProgress *int `json:"num_points_in_progress,omitempty"`
	NumPointsTotal *int `json:"num_points_total,omitempty"`
	NumPointsUnstarted *int `json:"num_points_unstarted,omitempty"`
	NumRelatedDocuments *int `json:"num_related_documents,omitempty"`
	NumStoriesBacklog *int `json:"num_stories_backlog,omitempty"`
	NumStoriesCompleted *int `json:"num_stories_completed,omitempty"`
	NumStoriesInProgress *int `json:"num_stories_in_progress,omitempty"`
	NumStoriesTotal *int `json:"num_stories_total,omitempty"`
	NumStoriesUnestimated *int `json:"num_stories_unestimated,omitempty"`
	NumStoriesUnstarted *int `json:"num_stories_unstarted,omitempty"`
	Stats *map[string]any `json:"stats,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// LabelCreateData is the typed request payload for Label.CreateTyped.
type LabelCreateData struct {
	AppUrl string `json:"app_url"`
	Archived *bool `json:"archived,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt string `json:"created_at"`
	Description *string `json:"description,omitempty"`
	EntityType string `json:"entity_type"`
	ExternalId *string `json:"external_id,omitempty"`
	GlobalId string `json:"global_id"`
	Id int `json:"id"`
	Name string `json:"name"`
	NumEpics int `json:"num_epics"`
	NumEpicsCompleted int `json:"num_epics_completed"`
	NumEpicsInProgress int `json:"num_epics_in_progress"`
	NumEpicsTotal int `json:"num_epics_total"`
	NumEpicsUnstarted int `json:"num_epics_unstarted"`
	NumPointsBacklog int `json:"num_points_backlog"`
	NumPointsCompleted int `json:"num_points_completed"`
	NumPointsInProgress int `json:"num_points_in_progress"`
	NumPointsTotal int `json:"num_points_total"`
	NumPointsUnstarted int `json:"num_points_unstarted"`
	NumRelatedDocuments int `json:"num_related_documents"`
	NumStoriesBacklog int `json:"num_stories_backlog"`
	NumStoriesCompleted int `json:"num_stories_completed"`
	NumStoriesInProgress int `json:"num_stories_in_progress"`
	NumStoriesTotal int `json:"num_stories_total"`
	NumStoriesUnestimated int `json:"num_stories_unestimated"`
	NumStoriesUnstarted int `json:"num_stories_unstarted"`
	Stats map[string]any `json:"stats"`
	UpdatedAt string `json:"updated_at"`
}

// LabelUpdateData is the typed request payload for Label.UpdateTyped.
type LabelUpdateData struct {
	Id int `json:"id"`
	AppUrl *string `json:"app_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	Name *string `json:"name,omitempty"`
	NumEpics *int `json:"num_epics,omitempty"`
	NumEpicsCompleted *int `json:"num_epics_completed,omitempty"`
	NumEpicsInProgress *int `json:"num_epics_in_progress,omitempty"`
	NumEpicsTotal *int `json:"num_epics_total,omitempty"`
	NumEpicsUnstarted *int `json:"num_epics_unstarted,omitempty"`
	NumPointsBacklog *int `json:"num_points_backlog,omitempty"`
	NumPointsCompleted *int `json:"num_points_completed,omitempty"`
	NumPointsInProgress *int `json:"num_points_in_progress,omitempty"`
	NumPointsTotal *int `json:"num_points_total,omitempty"`
	NumPointsUnstarted *int `json:"num_points_unstarted,omitempty"`
	NumRelatedDocuments *int `json:"num_related_documents,omitempty"`
	NumStoriesBacklog *int `json:"num_stories_backlog,omitempty"`
	NumStoriesCompleted *int `json:"num_stories_completed,omitempty"`
	NumStoriesInProgress *int `json:"num_stories_in_progress,omitempty"`
	NumStoriesTotal *int `json:"num_stories_total,omitempty"`
	NumStoriesUnestimated *int `json:"num_stories_unestimated,omitempty"`
	NumStoriesUnstarted *int `json:"num_stories_unstarted,omitempty"`
	Stats *map[string]any `json:"stats,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// LabelRemoveMatch is the typed request payload for Label.RemoveTyped.
type LabelRemoveMatch struct {
	Id int `json:"id"`
}

// LinkedFile is the typed data model for the linked_file entity.
type LinkedFile struct {
	ContentType string `json:"content_type"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	EntityType string `json:"entity_type"`
	GroupMentionIds []any `json:"group_mention_ids"`
	Id int `json:"id"`
	MemberMentionIds []any `json:"member_mention_ids"`
	MentionIds []any `json:"mention_ids"`
	Name string `json:"name"`
	Size int `json:"size"`
	StoryId *int `json:"story_id,omitempty"`
	StoryIds []any `json:"story_ids"`
	ThumbnailUrl string `json:"thumbnail_url"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
	UploaderId string `json:"uploader_id"`
	Url string `json:"url"`
}

// LinkedFileLoadMatch is the typed request payload for LinkedFile.LoadTyped.
type LinkedFileLoadMatch struct {
	Id int `json:"id"`
}

// LinkedFileListMatch is the typed request payload for LinkedFile.ListTyped.
type LinkedFileListMatch struct {
	ContentType *string `json:"content_type,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	GroupMentionIds *[]any `json:"group_mention_ids,omitempty"`
	Id *int `json:"id,omitempty"`
	MemberMentionIds *[]any `json:"member_mention_ids,omitempty"`
	MentionIds *[]any `json:"mention_ids,omitempty"`
	Name *string `json:"name,omitempty"`
	Size *int `json:"size,omitempty"`
	StoryId *int `json:"story_id,omitempty"`
	StoryIds *[]any `json:"story_ids,omitempty"`
	ThumbnailUrl *string `json:"thumbnail_url,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UploaderId *string `json:"uploader_id,omitempty"`
	Url *string `json:"url,omitempty"`
}

// LinkedFileCreateData is the typed request payload for LinkedFile.CreateTyped.
type LinkedFileCreateData struct {
	ContentType string `json:"content_type"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	EntityType string `json:"entity_type"`
	GroupMentionIds []any `json:"group_mention_ids"`
	Id int `json:"id"`
	MemberMentionIds []any `json:"member_mention_ids"`
	MentionIds []any `json:"mention_ids"`
	Name string `json:"name"`
	Size int `json:"size"`
	StoryId *int `json:"story_id,omitempty"`
	StoryIds []any `json:"story_ids"`
	ThumbnailUrl string `json:"thumbnail_url"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
	UploaderId string `json:"uploader_id"`
	Url string `json:"url"`
}

// LinkedFileUpdateData is the typed request payload for LinkedFile.UpdateTyped.
type LinkedFileUpdateData struct {
	Id int `json:"id"`
	ContentType *string `json:"content_type,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	GroupMentionIds *[]any `json:"group_mention_ids,omitempty"`
	MemberMentionIds *[]any `json:"member_mention_ids,omitempty"`
	MentionIds *[]any `json:"mention_ids,omitempty"`
	Name *string `json:"name,omitempty"`
	Size *int `json:"size,omitempty"`
	StoryId *int `json:"story_id,omitempty"`
	StoryIds *[]any `json:"story_ids,omitempty"`
	ThumbnailUrl *string `json:"thumbnail_url,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UploaderId *string `json:"uploader_id,omitempty"`
	Url *string `json:"url,omitempty"`
}

// LinkedFileRemoveMatch is the typed request payload for LinkedFile.RemoveTyped.
type LinkedFileRemoveMatch struct {
	Id int `json:"id"`
}

// Member is the typed data model for the member entity.
type Member struct {
	CreatedAt string `json:"created_at"`
	CreatedWithoutInvite bool `json:"created_without_invite"`
	Disabled bool `json:"disabled"`
	EntityType string `json:"entity_type"`
	GlobalId string `json:"global_id"`
	GroupIds []any `json:"group_ids"`
	Id string `json:"id"`
	InstallationId *string `json:"installation_id,omitempty"`
	IsOwner bool `json:"is_owner"`
	MentionName string `json:"mention_name"`
	Name string `json:"name"`
	Organization2 map[string]any `json:"organization2"`
	Profile map[string]any `json:"profile"`
	ReplacedBy *string `json:"replaced_by,omitempty"`
	Role string `json:"role"`
	State string `json:"state"`
	UpdatedAt string `json:"updated_at"`
	Workspace2 map[string]any `json:"workspace2"`
}

// MemberLoadMatch is the typed request payload for Member.LoadTyped.
type MemberLoadMatch struct {
	Id string `json:"id"`
}

// MemberListMatch is the typed request payload for Member.ListTyped.
type MemberListMatch struct {
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedWithoutInvite *bool `json:"created_without_invite,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	GroupIds *[]any `json:"group_ids,omitempty"`
	Id *string `json:"id,omitempty"`
	InstallationId *string `json:"installation_id,omitempty"`
	IsOwner *bool `json:"is_owner,omitempty"`
	MentionName *string `json:"mention_name,omitempty"`
	Name *string `json:"name,omitempty"`
	Organization2 *map[string]any `json:"organization2,omitempty"`
	Profile *map[string]any `json:"profile,omitempty"`
	ReplacedBy *string `json:"replaced_by,omitempty"`
	Role *string `json:"role,omitempty"`
	State *string `json:"state,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Workspace2 *map[string]any `json:"workspace2,omitempty"`
}

// Milestone is the typed data model for the milestone entity.
type Milestone struct {
	AfterId *int `json:"after_id,omitempty"`
	AppUrl string `json:"app_url"`
	Archived bool `json:"archived"`
	BeforeId *int `json:"before_id,omitempty"`
	Categories []any `json:"categories"`
	Completed bool `json:"completed"`
	CompletedAt string `json:"completed_at"`
	CompletedAtOverride string `json:"completed_at_override"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	EntityType string `json:"entity_type"`
	GlobalId string `json:"global_id"`
	Id int `json:"id"`
	KeyResultIds []any `json:"key_result_ids"`
	Name string `json:"name"`
	Position int `json:"position"`
	Started bool `json:"started"`
	StartedAt string `json:"started_at"`
	StartedAtOverride string `json:"started_at_override"`
	State string `json:"state"`
	Stats map[string]any `json:"stats"`
	UpdatedAt string `json:"updated_at"`
}

// MilestoneLoadMatch is the typed request payload for Milestone.LoadTyped.
type MilestoneLoadMatch struct {
	Id int `json:"id"`
}

// MilestoneListMatch is the typed request payload for Milestone.ListTyped.
type MilestoneListMatch struct {
	AfterId *int `json:"after_id,omitempty"`
	AppUrl *string `json:"app_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	BeforeId *int `json:"before_id,omitempty"`
	Categories *[]any `json:"categories,omitempty"`
	Completed *bool `json:"completed,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	CompletedAtOverride *string `json:"completed_at_override,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	Id *int `json:"id,omitempty"`
	KeyResultIds *[]any `json:"key_result_ids,omitempty"`
	Name *string `json:"name,omitempty"`
	Position *int `json:"position,omitempty"`
	Started *bool `json:"started,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
	StartedAtOverride *string `json:"started_at_override,omitempty"`
	State *string `json:"state,omitempty"`
	Stats *map[string]any `json:"stats,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// MilestoneCreateData is the typed request payload for Milestone.CreateTyped.
type MilestoneCreateData struct {
	AfterId *int `json:"after_id,omitempty"`
	AppUrl string `json:"app_url"`
	Archived bool `json:"archived"`
	BeforeId *int `json:"before_id,omitempty"`
	Categories []any `json:"categories"`
	Completed bool `json:"completed"`
	CompletedAt string `json:"completed_at"`
	CompletedAtOverride string `json:"completed_at_override"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	EntityType string `json:"entity_type"`
	GlobalId string `json:"global_id"`
	Id int `json:"id"`
	KeyResultIds []any `json:"key_result_ids"`
	Name string `json:"name"`
	Position int `json:"position"`
	Started bool `json:"started"`
	StartedAt string `json:"started_at"`
	StartedAtOverride string `json:"started_at_override"`
	State string `json:"state"`
	Stats map[string]any `json:"stats"`
	UpdatedAt string `json:"updated_at"`
}

// MilestoneUpdateData is the typed request payload for Milestone.UpdateTyped.
type MilestoneUpdateData struct {
	Id int `json:"id"`
	AfterId *int `json:"after_id,omitempty"`
	AppUrl *string `json:"app_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	BeforeId *int `json:"before_id,omitempty"`
	Categories *[]any `json:"categories,omitempty"`
	Completed *bool `json:"completed,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	CompletedAtOverride *string `json:"completed_at_override,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	KeyResultIds *[]any `json:"key_result_ids,omitempty"`
	Name *string `json:"name,omitempty"`
	Position *int `json:"position,omitempty"`
	Started *bool `json:"started,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
	StartedAtOverride *string `json:"started_at_override,omitempty"`
	State *string `json:"state,omitempty"`
	Stats *map[string]any `json:"stats,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// MilestoneRemoveMatch is the typed request payload for Milestone.RemoveTyped.
type MilestoneRemoveMatch struct {
	Id int `json:"id"`
}

// Objectif is the typed data model for the objectif entity.
type Objectif struct {
}

// ObjectifRemoveMatch is the typed request payload for Objectif.RemoveTyped.
type ObjectifRemoveMatch struct {
	Id int `json:"id"`
}

// Objective is the typed data model for the objective entity.
type Objective struct {
	AfterId *int `json:"after_id,omitempty"`
	AppUrl string `json:"app_url"`
	Archived bool `json:"archived"`
	BeforeId *int `json:"before_id,omitempty"`
	Categories []any `json:"categories"`
	Completed bool `json:"completed"`
	CompletedAt string `json:"completed_at"`
	CompletedAtOverride string `json:"completed_at_override"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	EntityType string `json:"entity_type"`
	GlobalId string `json:"global_id"`
	Id int `json:"id"`
	KeyResultIds []any `json:"key_result_ids"`
	Name string `json:"name"`
	Position int `json:"position"`
	Started bool `json:"started"`
	StartedAt string `json:"started_at"`
	StartedAtOverride string `json:"started_at_override"`
	State string `json:"state"`
	Stats map[string]any `json:"stats"`
	UpdatedAt string `json:"updated_at"`
}

// ObjectiveLoadMatch is the typed request payload for Objective.LoadTyped.
type ObjectiveLoadMatch struct {
	ObjectivePublicId int `json:"objective_public_id"`
}

// ObjectiveListMatch is the typed request payload for Objective.ListTyped.
type ObjectiveListMatch struct {
	AfterId *int `json:"after_id,omitempty"`
	AppUrl *string `json:"app_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	BeforeId *int `json:"before_id,omitempty"`
	Categories *[]any `json:"categories,omitempty"`
	Completed *bool `json:"completed,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	CompletedAtOverride *string `json:"completed_at_override,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	Id *int `json:"id,omitempty"`
	KeyResultIds *[]any `json:"key_result_ids,omitempty"`
	Name *string `json:"name,omitempty"`
	Position *int `json:"position,omitempty"`
	Started *bool `json:"started,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
	StartedAtOverride *string `json:"started_at_override,omitempty"`
	State *string `json:"state,omitempty"`
	Stats *map[string]any `json:"stats,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// ObjectiveCreateData is the typed request payload for Objective.CreateTyped.
type ObjectiveCreateData struct {
	AfterId *int `json:"after_id,omitempty"`
	AppUrl string `json:"app_url"`
	Archived bool `json:"archived"`
	BeforeId *int `json:"before_id,omitempty"`
	Categories []any `json:"categories"`
	Completed bool `json:"completed"`
	CompletedAt string `json:"completed_at"`
	CompletedAtOverride string `json:"completed_at_override"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	EntityType string `json:"entity_type"`
	GlobalId string `json:"global_id"`
	Id int `json:"id"`
	KeyResultIds []any `json:"key_result_ids"`
	Name string `json:"name"`
	Position int `json:"position"`
	Started bool `json:"started"`
	StartedAt string `json:"started_at"`
	StartedAtOverride string `json:"started_at_override"`
	State string `json:"state"`
	Stats map[string]any `json:"stats"`
	UpdatedAt string `json:"updated_at"`
}

// ObjectiveUpdateData is the typed request payload for Objective.UpdateTyped.
type ObjectiveUpdateData struct {
	ObjectivePublicId int `json:"objective_public_id"`
	AfterId *int `json:"after_id,omitempty"`
	AppUrl *string `json:"app_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	BeforeId *int `json:"before_id,omitempty"`
	Categories *[]any `json:"categories,omitempty"`
	Completed *bool `json:"completed,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	CompletedAtOverride *string `json:"completed_at_override,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	Id *int `json:"id,omitempty"`
	KeyResultIds *[]any `json:"key_result_ids,omitempty"`
	Name *string `json:"name,omitempty"`
	Position *int `json:"position,omitempty"`
	Started *bool `json:"started,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
	StartedAtOverride *string `json:"started_at_override,omitempty"`
	State *string `json:"state,omitempty"`
	Stats *map[string]any `json:"stats,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// Project is the typed data model for the project entity.
type Project struct {
	Abbreviation string `json:"abbreviation"`
	AppUrl string `json:"app_url"`
	Archived bool `json:"archived"`
	Color string `json:"color"`
	CreatedAt string `json:"created_at"`
	DaysToThermometer int `json:"days_to_thermometer"`
	Description string `json:"description"`
	EntityType string `json:"entity_type"`
	ExternalId string `json:"external_id"`
	FollowerIds []any `json:"follower_ids"`
	GlobalId string `json:"global_id"`
	Id int `json:"id"`
	IterationLength int `json:"iteration_length"`
	Name string `json:"name"`
	ShowThermometer bool `json:"show_thermometer"`
	StartTime string `json:"start_time"`
	Stats map[string]any `json:"stats"`
	TeamId int `json:"team_id"`
	UpdatedAt string `json:"updated_at"`
	WorkflowId int `json:"workflow_id"`
}

// ProjectLoadMatch is the typed request payload for Project.LoadTyped.
type ProjectLoadMatch struct {
	Id int `json:"id"`
}

// ProjectListMatch is the typed request payload for Project.ListTyped.
type ProjectListMatch struct {
	Abbreviation *string `json:"abbreviation,omitempty"`
	AppUrl *string `json:"app_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DaysToThermometer *int `json:"days_to_thermometer,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	FollowerIds *[]any `json:"follower_ids,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	Id *int `json:"id,omitempty"`
	IterationLength *int `json:"iteration_length,omitempty"`
	Name *string `json:"name,omitempty"`
	ShowThermometer *bool `json:"show_thermometer,omitempty"`
	StartTime *string `json:"start_time,omitempty"`
	Stats *map[string]any `json:"stats,omitempty"`
	TeamId *int `json:"team_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	WorkflowId *int `json:"workflow_id,omitempty"`
}

// ProjectCreateData is the typed request payload for Project.CreateTyped.
type ProjectCreateData struct {
	Abbreviation string `json:"abbreviation"`
	AppUrl string `json:"app_url"`
	Archived bool `json:"archived"`
	Color string `json:"color"`
	CreatedAt string `json:"created_at"`
	DaysToThermometer int `json:"days_to_thermometer"`
	Description string `json:"description"`
	EntityType string `json:"entity_type"`
	ExternalId string `json:"external_id"`
	FollowerIds []any `json:"follower_ids"`
	GlobalId string `json:"global_id"`
	Id int `json:"id"`
	IterationLength int `json:"iteration_length"`
	Name string `json:"name"`
	ShowThermometer bool `json:"show_thermometer"`
	StartTime string `json:"start_time"`
	Stats map[string]any `json:"stats"`
	TeamId int `json:"team_id"`
	UpdatedAt string `json:"updated_at"`
	WorkflowId int `json:"workflow_id"`
}

// ProjectUpdateData is the typed request payload for Project.UpdateTyped.
type ProjectUpdateData struct {
	Id int `json:"id"`
	Abbreviation *string `json:"abbreviation,omitempty"`
	AppUrl *string `json:"app_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DaysToThermometer *int `json:"days_to_thermometer,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	FollowerIds *[]any `json:"follower_ids,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	IterationLength *int `json:"iteration_length,omitempty"`
	Name *string `json:"name,omitempty"`
	ShowThermometer *bool `json:"show_thermometer,omitempty"`
	StartTime *string `json:"start_time,omitempty"`
	Stats *map[string]any `json:"stats,omitempty"`
	TeamId *int `json:"team_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	WorkflowId *int `json:"workflow_id,omitempty"`
}

// ProjectRemoveMatch is the typed request payload for Project.RemoveTyped.
type ProjectRemoveMatch struct {
	Id int `json:"id"`
}

// Repository is the typed data model for the repository entity.
type Repository struct {
	CreatedAt string `json:"created_at"`
	EntityType string `json:"entity_type"`
	ExternalId string `json:"external_id"`
	FullName string `json:"full_name"`
	Id int `json:"id"`
	Name string `json:"name"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
}

// RepositoryLoadMatch is the typed request payload for Repository.LoadTyped.
type RepositoryLoadMatch struct {
	Id int `json:"id"`
}

// RepositoryListMatch is the typed request payload for Repository.ListTyped.
type RepositoryListMatch struct {
	CreatedAt *string `json:"created_at,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Search is the typed data model for the search entity.
type Search struct {
	Epics map[string]any `json:"epics"`
	Iterations map[string]any `json:"iterations"`
	Milestones map[string]any `json:"milestones"`
	Stories map[string]any `json:"stories"`
}

// SearchLoadMatch is the typed request payload for Search.LoadTyped.
type SearchLoadMatch struct {
	Epics *map[string]any `json:"epics,omitempty"`
	Iterations *map[string]any `json:"iterations,omitempty"`
	Milestones *map[string]any `json:"milestones,omitempty"`
	Stories *map[string]any `json:"stories,omitempty"`
}

// Story is the typed data model for the story entity.
type Story struct {
	AfterId *int `json:"after_id,omitempty"`
	AppUrl string `json:"app_url"`
	Archived bool `json:"archived"`
	BeforeId *int `json:"before_id,omitempty"`
	Blocked bool `json:"blocked"`
	Blocker bool `json:"blocker"`
	BranchIds *[]any `json:"branch_ids,omitempty"`
	Branches []any `json:"branches"`
	CommentIds *[]any `json:"comment_ids,omitempty"`
	Comments []any `json:"comments"`
	CommitIds *[]any `json:"commit_ids,omitempty"`
	Commits []any `json:"commits"`
	Completed bool `json:"completed"`
	CompletedAt string `json:"completed_at"`
	CompletedAtOverride string `json:"completed_at_override"`
	CreatedAt string `json:"created_at"`
	CustomFields *[]any `json:"custom_fields,omitempty"`
	CustomFieldsAdd *[]any `json:"custom_fields_add,omitempty"`
	CustomFieldsRemove *[]any `json:"custom_fields_remove,omitempty"`
	CycleTime *int `json:"cycle_time,omitempty"`
	Deadline string `json:"deadline"`
	Description string `json:"description"`
	EntityType string `json:"entity_type"`
	EpicId int `json:"epic_id"`
	Estimate int `json:"estimate"`
	ExternalId string `json:"external_id"`
	ExternalLinks []any `json:"external_links"`
	ExternalLinksAdd *[]any `json:"external_links_add,omitempty"`
	ExternalLinksRemove *[]any `json:"external_links_remove,omitempty"`
	FileIds *[]any `json:"file_ids,omitempty"`
	FileIdsAdd *[]any `json:"file_ids_add,omitempty"`
	FileIdsRemove *[]any `json:"file_ids_remove,omitempty"`
	Files []any `json:"files"`
	FollowerIds []any `json:"follower_ids"`
	FollowerIdsAdd *[]any `json:"follower_ids_add,omitempty"`
	FollowerIdsRemove *[]any `json:"follower_ids_remove,omitempty"`
	FormattedVcsBranchName *string `json:"formatted_vcs_branch_name,omitempty"`
	GlobalId string `json:"global_id"`
	GroupId string `json:"group_id"`
	GroupMentionIds []any `json:"group_mention_ids"`
	Id int `json:"id"`
	IterationId int `json:"iteration_id"`
	LabelIds []any `json:"label_ids"`
	Labels []any `json:"labels"`
	LabelsAdd *[]any `json:"labels_add,omitempty"`
	LabelsRemove *[]any `json:"labels_remove,omitempty"`
	LeadTime *int `json:"lead_time,omitempty"`
	LinkedFileIds *[]any `json:"linked_file_ids,omitempty"`
	LinkedFileIdsAdd *[]any `json:"linked_file_ids_add,omitempty"`
	LinkedFileIdsRemove *[]any `json:"linked_file_ids_remove,omitempty"`
	LinkedFiles []any `json:"linked_files"`
	MemberMentionIds []any `json:"member_mention_ids"`
	MentionIds []any `json:"mention_ids"`
	MoveTo *string `json:"move_to,omitempty"`
	MovedAt string `json:"moved_at"`
	Name string `json:"name"`
	NumTasksCompleted *int `json:"num_tasks_completed,omitempty"`
	OwnerIds []any `json:"owner_ids"`
	OwnerIdsAdd *[]any `json:"owner_ids_add,omitempty"`
	OwnerIdsRemove *[]any `json:"owner_ids_remove,omitempty"`
	ParentStoryId *int `json:"parent_story_id,omitempty"`
	Position int `json:"position"`
	PreviousIterationIds []any `json:"previous_iteration_ids"`
	ProjectId int `json:"project_id"`
	PullRequestIds *[]any `json:"pull_request_ids,omitempty"`
	PullRequests []any `json:"pull_requests"`
	RequestedById string `json:"requested_by_id"`
	SourceTaskId *int `json:"source_task_id,omitempty"`
	Started bool `json:"started"`
	StartedAt string `json:"started_at"`
	StartedAtOverride string `json:"started_at_override"`
	Stats map[string]any `json:"stats"`
	StoryLinks []any `json:"story_links"`
	StoryTemplateId string `json:"story_template_id"`
	StoryType string `json:"story_type"`
	SubTaskStoryIds *[]any `json:"sub_task_story_ids,omitempty"`
	SubTasks *[]any `json:"sub_tasks,omitempty"`
	SyncedItem map[string]any `json:"synced_item"`
	TaskIds *[]any `json:"task_ids,omitempty"`
	Tasks []any `json:"tasks"`
	UpdatedAt string `json:"updated_at"`
	WorkflowId int `json:"workflow_id"`
	WorkflowStateId int `json:"workflow_state_id"`
}

// StoryLoadMatch is the typed request payload for Story.LoadTyped.
type StoryLoadMatch struct {
	Id int `json:"id"`
}

// StoryListMatch is the typed request payload for Story.ListTyped.
type StoryListMatch struct {
	AfterId *int `json:"after_id,omitempty"`
	AppUrl *string `json:"app_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	BeforeId *int `json:"before_id,omitempty"`
	Blocked *bool `json:"blocked,omitempty"`
	Blocker *bool `json:"blocker,omitempty"`
	BranchIds *[]any `json:"branch_ids,omitempty"`
	Branches *[]any `json:"branches,omitempty"`
	CommentIds *[]any `json:"comment_ids,omitempty"`
	Comments *[]any `json:"comments,omitempty"`
	CommitIds *[]any `json:"commit_ids,omitempty"`
	Commits *[]any `json:"commits,omitempty"`
	Completed *bool `json:"completed,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	CompletedAtOverride *string `json:"completed_at_override,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CustomFields *[]any `json:"custom_fields,omitempty"`
	CustomFieldsAdd *[]any `json:"custom_fields_add,omitempty"`
	CustomFieldsRemove *[]any `json:"custom_fields_remove,omitempty"`
	CycleTime *int `json:"cycle_time,omitempty"`
	Deadline *string `json:"deadline,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	EpicId *int `json:"epic_id,omitempty"`
	Estimate *int `json:"estimate,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	ExternalLinks *[]any `json:"external_links,omitempty"`
	ExternalLinksAdd *[]any `json:"external_links_add,omitempty"`
	ExternalLinksRemove *[]any `json:"external_links_remove,omitempty"`
	FileIds *[]any `json:"file_ids,omitempty"`
	FileIdsAdd *[]any `json:"file_ids_add,omitempty"`
	FileIdsRemove *[]any `json:"file_ids_remove,omitempty"`
	Files *[]any `json:"files,omitempty"`
	FollowerIds *[]any `json:"follower_ids,omitempty"`
	FollowerIdsAdd *[]any `json:"follower_ids_add,omitempty"`
	FollowerIdsRemove *[]any `json:"follower_ids_remove,omitempty"`
	FormattedVcsBranchName *string `json:"formatted_vcs_branch_name,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	GroupMentionIds *[]any `json:"group_mention_ids,omitempty"`
	Id *int `json:"id,omitempty"`
	IterationId *int `json:"iteration_id,omitempty"`
	LabelIds *[]any `json:"label_ids,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	LabelsAdd *[]any `json:"labels_add,omitempty"`
	LabelsRemove *[]any `json:"labels_remove,omitempty"`
	LeadTime *int `json:"lead_time,omitempty"`
	LinkedFileIds *[]any `json:"linked_file_ids,omitempty"`
	LinkedFileIdsAdd *[]any `json:"linked_file_ids_add,omitempty"`
	LinkedFileIdsRemove *[]any `json:"linked_file_ids_remove,omitempty"`
	LinkedFiles *[]any `json:"linked_files,omitempty"`
	MemberMentionIds *[]any `json:"member_mention_ids,omitempty"`
	MentionIds *[]any `json:"mention_ids,omitempty"`
	MoveTo *string `json:"move_to,omitempty"`
	MovedAt *string `json:"moved_at,omitempty"`
	Name *string `json:"name,omitempty"`
	NumTasksCompleted *int `json:"num_tasks_completed,omitempty"`
	OwnerIds *[]any `json:"owner_ids,omitempty"`
	OwnerIdsAdd *[]any `json:"owner_ids_add,omitempty"`
	OwnerIdsRemove *[]any `json:"owner_ids_remove,omitempty"`
	ParentStoryId *int `json:"parent_story_id,omitempty"`
	Position *int `json:"position,omitempty"`
	PreviousIterationIds *[]any `json:"previous_iteration_ids,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	PullRequestIds *[]any `json:"pull_request_ids,omitempty"`
	PullRequests *[]any `json:"pull_requests,omitempty"`
	RequestedById *string `json:"requested_by_id,omitempty"`
	SourceTaskId *int `json:"source_task_id,omitempty"`
	Started *bool `json:"started,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
	StartedAtOverride *string `json:"started_at_override,omitempty"`
	Stats *map[string]any `json:"stats,omitempty"`
	StoryLinks *[]any `json:"story_links,omitempty"`
	StoryTemplateId *string `json:"story_template_id,omitempty"`
	StoryType *string `json:"story_type,omitempty"`
	SubTaskStoryIds *[]any `json:"sub_task_story_ids,omitempty"`
	SubTasks *[]any `json:"sub_tasks,omitempty"`
	SyncedItem *map[string]any `json:"synced_item,omitempty"`
	TaskIds *[]any `json:"task_ids,omitempty"`
	Tasks *[]any `json:"tasks,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	WorkflowId *int `json:"workflow_id,omitempty"`
	WorkflowStateId *int `json:"workflow_state_id,omitempty"`
}

// StoryCreateData is the typed request payload for Story.CreateTyped.
type StoryCreateData struct {
	AfterId *int `json:"after_id,omitempty"`
	AppUrl string `json:"app_url"`
	Archived bool `json:"archived"`
	BeforeId *int `json:"before_id,omitempty"`
	Blocked bool `json:"blocked"`
	Blocker bool `json:"blocker"`
	BranchIds *[]any `json:"branch_ids,omitempty"`
	Branches []any `json:"branches"`
	CommentIds *[]any `json:"comment_ids,omitempty"`
	Comments []any `json:"comments"`
	CommitIds *[]any `json:"commit_ids,omitempty"`
	Commits []any `json:"commits"`
	Completed bool `json:"completed"`
	CompletedAt string `json:"completed_at"`
	CompletedAtOverride string `json:"completed_at_override"`
	CreatedAt string `json:"created_at"`
	CustomFields *[]any `json:"custom_fields,omitempty"`
	CustomFieldsAdd *[]any `json:"custom_fields_add,omitempty"`
	CustomFieldsRemove *[]any `json:"custom_fields_remove,omitempty"`
	CycleTime *int `json:"cycle_time,omitempty"`
	Deadline string `json:"deadline"`
	Description string `json:"description"`
	EntityType string `json:"entity_type"`
	EpicId int `json:"epic_id"`
	Estimate int `json:"estimate"`
	ExternalId string `json:"external_id"`
	ExternalLinks []any `json:"external_links"`
	ExternalLinksAdd *[]any `json:"external_links_add,omitempty"`
	ExternalLinksRemove *[]any `json:"external_links_remove,omitempty"`
	FileIds *[]any `json:"file_ids,omitempty"`
	FileIdsAdd *[]any `json:"file_ids_add,omitempty"`
	FileIdsRemove *[]any `json:"file_ids_remove,omitempty"`
	Files []any `json:"files"`
	FollowerIds []any `json:"follower_ids"`
	FollowerIdsAdd *[]any `json:"follower_ids_add,omitempty"`
	FollowerIdsRemove *[]any `json:"follower_ids_remove,omitempty"`
	FormattedVcsBranchName *string `json:"formatted_vcs_branch_name,omitempty"`
	GlobalId string `json:"global_id"`
	GroupId string `json:"group_id"`
	GroupMentionIds []any `json:"group_mention_ids"`
	Id int `json:"id"`
	IterationId int `json:"iteration_id"`
	LabelIds []any `json:"label_ids"`
	Labels []any `json:"labels"`
	LabelsAdd *[]any `json:"labels_add,omitempty"`
	LabelsRemove *[]any `json:"labels_remove,omitempty"`
	LeadTime *int `json:"lead_time,omitempty"`
	LinkedFileIds *[]any `json:"linked_file_ids,omitempty"`
	LinkedFileIdsAdd *[]any `json:"linked_file_ids_add,omitempty"`
	LinkedFileIdsRemove *[]any `json:"linked_file_ids_remove,omitempty"`
	LinkedFiles []any `json:"linked_files"`
	MemberMentionIds []any `json:"member_mention_ids"`
	MentionIds []any `json:"mention_ids"`
	MoveTo *string `json:"move_to,omitempty"`
	MovedAt string `json:"moved_at"`
	Name string `json:"name"`
	NumTasksCompleted *int `json:"num_tasks_completed,omitempty"`
	OwnerIds []any `json:"owner_ids"`
	OwnerIdsAdd *[]any `json:"owner_ids_add,omitempty"`
	OwnerIdsRemove *[]any `json:"owner_ids_remove,omitempty"`
	ParentStoryId *int `json:"parent_story_id,omitempty"`
	Position int `json:"position"`
	PreviousIterationIds []any `json:"previous_iteration_ids"`
	ProjectId int `json:"project_id"`
	PullRequestIds *[]any `json:"pull_request_ids,omitempty"`
	PullRequests []any `json:"pull_requests"`
	RequestedById string `json:"requested_by_id"`
	SourceTaskId *int `json:"source_task_id,omitempty"`
	Started bool `json:"started"`
	StartedAt string `json:"started_at"`
	StartedAtOverride string `json:"started_at_override"`
	Stats map[string]any `json:"stats"`
	StoryLinks []any `json:"story_links"`
	StoryTemplateId string `json:"story_template_id"`
	StoryType string `json:"story_type"`
	SubTaskStoryIds *[]any `json:"sub_task_story_ids,omitempty"`
	SubTasks *[]any `json:"sub_tasks,omitempty"`
	SyncedItem map[string]any `json:"synced_item"`
	TaskIds *[]any `json:"task_ids,omitempty"`
	Tasks []any `json:"tasks"`
	UpdatedAt string `json:"updated_at"`
	WorkflowId int `json:"workflow_id"`
	WorkflowStateId int `json:"workflow_state_id"`
}

// StoryUpdateData is the typed request payload for Story.UpdateTyped.
type StoryUpdateData struct {
	Id int `json:"id"`
	AfterId *int `json:"after_id,omitempty"`
	AppUrl *string `json:"app_url,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	BeforeId *int `json:"before_id,omitempty"`
	Blocked *bool `json:"blocked,omitempty"`
	Blocker *bool `json:"blocker,omitempty"`
	BranchIds *[]any `json:"branch_ids,omitempty"`
	Branches *[]any `json:"branches,omitempty"`
	CommentIds *[]any `json:"comment_ids,omitempty"`
	Comments *[]any `json:"comments,omitempty"`
	CommitIds *[]any `json:"commit_ids,omitempty"`
	Commits *[]any `json:"commits,omitempty"`
	Completed *bool `json:"completed,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	CompletedAtOverride *string `json:"completed_at_override,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CustomFields *[]any `json:"custom_fields,omitempty"`
	CustomFieldsAdd *[]any `json:"custom_fields_add,omitempty"`
	CustomFieldsRemove *[]any `json:"custom_fields_remove,omitempty"`
	CycleTime *int `json:"cycle_time,omitempty"`
	Deadline *string `json:"deadline,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	EpicId *int `json:"epic_id,omitempty"`
	Estimate *int `json:"estimate,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	ExternalLinks *[]any `json:"external_links,omitempty"`
	ExternalLinksAdd *[]any `json:"external_links_add,omitempty"`
	ExternalLinksRemove *[]any `json:"external_links_remove,omitempty"`
	FileIds *[]any `json:"file_ids,omitempty"`
	FileIdsAdd *[]any `json:"file_ids_add,omitempty"`
	FileIdsRemove *[]any `json:"file_ids_remove,omitempty"`
	Files *[]any `json:"files,omitempty"`
	FollowerIds *[]any `json:"follower_ids,omitempty"`
	FollowerIdsAdd *[]any `json:"follower_ids_add,omitempty"`
	FollowerIdsRemove *[]any `json:"follower_ids_remove,omitempty"`
	FormattedVcsBranchName *string `json:"formatted_vcs_branch_name,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	GroupMentionIds *[]any `json:"group_mention_ids,omitempty"`
	IterationId *int `json:"iteration_id,omitempty"`
	LabelIds *[]any `json:"label_ids,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	LabelsAdd *[]any `json:"labels_add,omitempty"`
	LabelsRemove *[]any `json:"labels_remove,omitempty"`
	LeadTime *int `json:"lead_time,omitempty"`
	LinkedFileIds *[]any `json:"linked_file_ids,omitempty"`
	LinkedFileIdsAdd *[]any `json:"linked_file_ids_add,omitempty"`
	LinkedFileIdsRemove *[]any `json:"linked_file_ids_remove,omitempty"`
	LinkedFiles *[]any `json:"linked_files,omitempty"`
	MemberMentionIds *[]any `json:"member_mention_ids,omitempty"`
	MentionIds *[]any `json:"mention_ids,omitempty"`
	MoveTo *string `json:"move_to,omitempty"`
	MovedAt *string `json:"moved_at,omitempty"`
	Name *string `json:"name,omitempty"`
	NumTasksCompleted *int `json:"num_tasks_completed,omitempty"`
	OwnerIds *[]any `json:"owner_ids,omitempty"`
	OwnerIdsAdd *[]any `json:"owner_ids_add,omitempty"`
	OwnerIdsRemove *[]any `json:"owner_ids_remove,omitempty"`
	ParentStoryId *int `json:"parent_story_id,omitempty"`
	Position *int `json:"position,omitempty"`
	PreviousIterationIds *[]any `json:"previous_iteration_ids,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	PullRequestIds *[]any `json:"pull_request_ids,omitempty"`
	PullRequests *[]any `json:"pull_requests,omitempty"`
	RequestedById *string `json:"requested_by_id,omitempty"`
	SourceTaskId *int `json:"source_task_id,omitempty"`
	Started *bool `json:"started,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
	StartedAtOverride *string `json:"started_at_override,omitempty"`
	Stats *map[string]any `json:"stats,omitempty"`
	StoryLinks *[]any `json:"story_links,omitempty"`
	StoryTemplateId *string `json:"story_template_id,omitempty"`
	StoryType *string `json:"story_type,omitempty"`
	SubTaskStoryIds *[]any `json:"sub_task_story_ids,omitempty"`
	SubTasks *[]any `json:"sub_tasks,omitempty"`
	SyncedItem *map[string]any `json:"synced_item,omitempty"`
	TaskIds *[]any `json:"task_ids,omitempty"`
	Tasks *[]any `json:"tasks,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	WorkflowId *int `json:"workflow_id,omitempty"`
	WorkflowStateId *int `json:"workflow_state_id,omitempty"`
}

// StoryRemoveMatch is the typed request payload for Story.RemoveTyped.
type StoryRemoveMatch struct {
	Id int `json:"id"`
}

// StoryComment is the typed data model for the story_comment entity.
type StoryComment struct {
	AppUrl string `json:"app_url"`
	AuthorId string `json:"author_id"`
	Blocker *bool `json:"blocker,omitempty"`
	CreatedAt string `json:"created_at"`
	Deleted bool `json:"deleted"`
	EntityType string `json:"entity_type"`
	ExternalId string `json:"external_id"`
	GroupMentionIds []any `json:"group_mention_ids"`
	Id int `json:"id"`
	LinkedToSlack bool `json:"linked_to_slack"`
	MemberMentionIds []any `json:"member_mention_ids"`
	MentionIds []any `json:"mention_ids"`
	ParentId *int `json:"parent_id,omitempty"`
	Position int `json:"position"`
	Reactions []any `json:"reactions"`
	StoryId int `json:"story_id"`
	Text string `json:"text"`
	UnblocksParent *bool `json:"unblocks_parent,omitempty"`
	UpdatedAt string `json:"updated_at"`
}

// StoryCommentLoadMatch is the typed request payload for StoryComment.LoadTyped.
type StoryCommentLoadMatch struct {
	Id int `json:"id"`
	StoryId int `json:"story_id"`
}

// StoryCommentListMatch is the typed request payload for StoryComment.ListTyped.
type StoryCommentListMatch struct {
	Id int `json:"id"`
}

// StoryCommentCreateData is the typed request payload for StoryComment.CreateTyped.
type StoryCommentCreateData struct {
	Id int `json:"id"`
	AppUrl string `json:"app_url"`
	AuthorId string `json:"author_id"`
	Blocker *bool `json:"blocker,omitempty"`
	CreatedAt string `json:"created_at"`
	Deleted bool `json:"deleted"`
	EntityType string `json:"entity_type"`
	ExternalId string `json:"external_id"`
	GroupMentionIds []any `json:"group_mention_ids"`
	LinkedToSlack bool `json:"linked_to_slack"`
	MemberMentionIds []any `json:"member_mention_ids"`
	MentionIds []any `json:"mention_ids"`
	ParentId *int `json:"parent_id,omitempty"`
	Position int `json:"position"`
	Reactions []any `json:"reactions"`
	StoryId int `json:"story_id"`
	Text string `json:"text"`
	UnblocksParent *bool `json:"unblocks_parent,omitempty"`
	UpdatedAt string `json:"updated_at"`
}

// StoryCommentUpdateData is the typed request payload for StoryComment.UpdateTyped.
type StoryCommentUpdateData struct {
	Id int `json:"id"`
	StoryId int `json:"story_id"`
	AppUrl *string `json:"app_url,omitempty"`
	AuthorId *string `json:"author_id,omitempty"`
	Blocker *bool `json:"blocker,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Deleted *bool `json:"deleted,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	GroupMentionIds *[]any `json:"group_mention_ids,omitempty"`
	LinkedToSlack *bool `json:"linked_to_slack,omitempty"`
	MemberMentionIds *[]any `json:"member_mention_ids,omitempty"`
	MentionIds *[]any `json:"mention_ids,omitempty"`
	ParentId *int `json:"parent_id,omitempty"`
	Position *int `json:"position,omitempty"`
	Reactions *[]any `json:"reactions,omitempty"`
	Text *string `json:"text,omitempty"`
	UnblocksParent *bool `json:"unblocks_parent,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// StoryLink is the typed data model for the story_link entity.
type StoryLink struct {
	CreatedAt string `json:"created_at"`
	EntityType string `json:"entity_type"`
	Id int `json:"id"`
	ObjectId int `json:"object_id"`
	SubjectId int `json:"subject_id"`
	SubjectWorkflowStateId int `json:"subject_workflow_state_id"`
	UpdatedAt string `json:"updated_at"`
	Verb string `json:"verb"`
}

// StoryLinkLoadMatch is the typed request payload for StoryLink.LoadTyped.
type StoryLinkLoadMatch struct {
	Id int `json:"id"`
}

// StoryLinkCreateData is the typed request payload for StoryLink.CreateTyped.
type StoryLinkCreateData struct {
	CreatedAt string `json:"created_at"`
	EntityType string `json:"entity_type"`
	Id int `json:"id"`
	ObjectId int `json:"object_id"`
	SubjectId int `json:"subject_id"`
	SubjectWorkflowStateId int `json:"subject_workflow_state_id"`
	UpdatedAt string `json:"updated_at"`
	Verb string `json:"verb"`
}

// StoryLinkUpdateData is the typed request payload for StoryLink.UpdateTyped.
type StoryLinkUpdateData struct {
	Id int `json:"id"`
	CreatedAt *string `json:"created_at,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	ObjectId *int `json:"object_id,omitempty"`
	SubjectId *int `json:"subject_id,omitempty"`
	SubjectWorkflowStateId *int `json:"subject_workflow_state_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Verb *string `json:"verb,omitempty"`
}

// StoryLinkRemoveMatch is the typed request payload for StoryLink.RemoveTyped.
type StoryLinkRemoveMatch struct {
	Id int `json:"id"`
}

// StoryReaction is the typed data model for the story_reaction entity.
type StoryReaction struct {
	Emoji string `json:"emoji"`
}

// StoryReactionCreateData is the typed request payload for StoryReaction.CreateTyped.
type StoryReactionCreateData struct {
	CommentId int `json:"comment_id"`
	StoryId int `json:"story_id"`
	Emoji string `json:"emoji"`
}

// StoryReactionRemoveMatch is the typed request payload for StoryReaction.RemoveTyped.
type StoryReactionRemoveMatch struct {
	CommentId int `json:"comment_id"`
	StoryId int `json:"story_id"`
}

// StorySlim is the typed data model for the story_slim entity.
type StorySlim struct {
	AfterId *int `json:"after_id,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	BeforeId *int `json:"before_id,omitempty"`
	CompletedAtEnd *string `json:"completed_at_end,omitempty"`
	CompletedAtStart *string `json:"completed_at_start,omitempty"`
	CreatedAtEnd *string `json:"created_at_end,omitempty"`
	CreatedAtStart *string `json:"created_at_start,omitempty"`
	CustomFieldsAdd *[]any `json:"custom_fields_add,omitempty"`
	CustomFieldsRemove *[]any `json:"custom_fields_remove,omitempty"`
	Deadline *string `json:"deadline,omitempty"`
	DeadlineEnd *string `json:"deadline_end,omitempty"`
	DeadlineStart *string `json:"deadline_start,omitempty"`
	EpicId *int `json:"epic_id,omitempty"`
	EpicIds *[]any `json:"epic_ids,omitempty"`
	Estimate *int `json:"estimate,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	ExternalLinks *[]any `json:"external_links,omitempty"`
	FollowerIdsAdd *[]any `json:"follower_ids_add,omitempty"`
	FollowerIdsRemove *[]any `json:"follower_ids_remove,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	GroupIds *[]any `json:"group_ids,omitempty"`
	IncludesDescription *bool `json:"includes_description,omitempty"`
	IterationId *int `json:"iteration_id,omitempty"`
	IterationIds *[]any `json:"iteration_ids,omitempty"`
	LabelIds *[]any `json:"label_ids,omitempty"`
	LabelName *string `json:"label_name,omitempty"`
	LabelsAdd *[]any `json:"labels_add,omitempty"`
	LabelsRemove *[]any `json:"labels_remove,omitempty"`
	MoveTo *string `json:"move_to,omitempty"`
	OwnerId *string `json:"owner_id,omitempty"`
	OwnerIds *[]any `json:"owner_ids,omitempty"`
	OwnerIdsAdd *[]any `json:"owner_ids_add,omitempty"`
	OwnerIdsRemove *[]any `json:"owner_ids_remove,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	ProjectIds *[]any `json:"project_ids,omitempty"`
	RequestedById *string `json:"requested_by_id,omitempty"`
	Stories []any `json:"stories"`
	StoryIds []any `json:"story_ids"`
	StoryType *string `json:"story_type,omitempty"`
	UpdatedAtEnd *string `json:"updated_at_end,omitempty"`
	UpdatedAtStart *string `json:"updated_at_start,omitempty"`
	WorkflowStateId *int `json:"workflow_state_id,omitempty"`
	WorkflowStateTypes *[]any `json:"workflow_state_types,omitempty"`
}

// StorySlimCreateData is the typed request payload for StorySlim.CreateTyped.
type StorySlimCreateData struct {
	AfterId *int `json:"after_id,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	BeforeId *int `json:"before_id,omitempty"`
	CompletedAtEnd *string `json:"completed_at_end,omitempty"`
	CompletedAtStart *string `json:"completed_at_start,omitempty"`
	CreatedAtEnd *string `json:"created_at_end,omitempty"`
	CreatedAtStart *string `json:"created_at_start,omitempty"`
	CustomFieldsAdd *[]any `json:"custom_fields_add,omitempty"`
	CustomFieldsRemove *[]any `json:"custom_fields_remove,omitempty"`
	Deadline *string `json:"deadline,omitempty"`
	DeadlineEnd *string `json:"deadline_end,omitempty"`
	DeadlineStart *string `json:"deadline_start,omitempty"`
	EpicId *int `json:"epic_id,omitempty"`
	EpicIds *[]any `json:"epic_ids,omitempty"`
	Estimate *int `json:"estimate,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	ExternalLinks *[]any `json:"external_links,omitempty"`
	FollowerIdsAdd *[]any `json:"follower_ids_add,omitempty"`
	FollowerIdsRemove *[]any `json:"follower_ids_remove,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	GroupIds *[]any `json:"group_ids,omitempty"`
	IncludesDescription *bool `json:"includes_description,omitempty"`
	IterationId *int `json:"iteration_id,omitempty"`
	IterationIds *[]any `json:"iteration_ids,omitempty"`
	LabelIds *[]any `json:"label_ids,omitempty"`
	LabelName *string `json:"label_name,omitempty"`
	LabelsAdd *[]any `json:"labels_add,omitempty"`
	LabelsRemove *[]any `json:"labels_remove,omitempty"`
	MoveTo *string `json:"move_to,omitempty"`
	OwnerId *string `json:"owner_id,omitempty"`
	OwnerIds *[]any `json:"owner_ids,omitempty"`
	OwnerIdsAdd *[]any `json:"owner_ids_add,omitempty"`
	OwnerIdsRemove *[]any `json:"owner_ids_remove,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	ProjectIds *[]any `json:"project_ids,omitempty"`
	RequestedById *string `json:"requested_by_id,omitempty"`
	Stories []any `json:"stories"`
	StoryIds []any `json:"story_ids"`
	StoryType *string `json:"story_type,omitempty"`
	UpdatedAtEnd *string `json:"updated_at_end,omitempty"`
	UpdatedAtStart *string `json:"updated_at_start,omitempty"`
	WorkflowStateId *int `json:"workflow_state_id,omitempty"`
	WorkflowStateTypes *[]any `json:"workflow_state_types,omitempty"`
}

// StorySlimUpdateData is the typed request payload for StorySlim.UpdateTyped.
type StorySlimUpdateData struct {
	AfterId *int `json:"after_id,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	BeforeId *int `json:"before_id,omitempty"`
	CompletedAtEnd *string `json:"completed_at_end,omitempty"`
	CompletedAtStart *string `json:"completed_at_start,omitempty"`
	CreatedAtEnd *string `json:"created_at_end,omitempty"`
	CreatedAtStart *string `json:"created_at_start,omitempty"`
	CustomFieldsAdd *[]any `json:"custom_fields_add,omitempty"`
	CustomFieldsRemove *[]any `json:"custom_fields_remove,omitempty"`
	Deadline *string `json:"deadline,omitempty"`
	DeadlineEnd *string `json:"deadline_end,omitempty"`
	DeadlineStart *string `json:"deadline_start,omitempty"`
	EpicId *int `json:"epic_id,omitempty"`
	EpicIds *[]any `json:"epic_ids,omitempty"`
	Estimate *int `json:"estimate,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	ExternalLinks *[]any `json:"external_links,omitempty"`
	FollowerIdsAdd *[]any `json:"follower_ids_add,omitempty"`
	FollowerIdsRemove *[]any `json:"follower_ids_remove,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	GroupIds *[]any `json:"group_ids,omitempty"`
	IncludesDescription *bool `json:"includes_description,omitempty"`
	IterationId *int `json:"iteration_id,omitempty"`
	IterationIds *[]any `json:"iteration_ids,omitempty"`
	LabelIds *[]any `json:"label_ids,omitempty"`
	LabelName *string `json:"label_name,omitempty"`
	LabelsAdd *[]any `json:"labels_add,omitempty"`
	LabelsRemove *[]any `json:"labels_remove,omitempty"`
	MoveTo *string `json:"move_to,omitempty"`
	OwnerId *string `json:"owner_id,omitempty"`
	OwnerIds *[]any `json:"owner_ids,omitempty"`
	OwnerIdsAdd *[]any `json:"owner_ids_add,omitempty"`
	OwnerIdsRemove *[]any `json:"owner_ids_remove,omitempty"`
	ProjectId *int `json:"project_id,omitempty"`
	ProjectIds *[]any `json:"project_ids,omitempty"`
	RequestedById *string `json:"requested_by_id,omitempty"`
	Stories *[]any `json:"stories,omitempty"`
	StoryIds *[]any `json:"story_ids,omitempty"`
	StoryType *string `json:"story_type,omitempty"`
	UpdatedAtEnd *string `json:"updated_at_end,omitempty"`
	UpdatedAtStart *string `json:"updated_at_start,omitempty"`
	WorkflowStateId *int `json:"workflow_state_id,omitempty"`
	WorkflowStateTypes *[]any `json:"workflow_state_types,omitempty"`
}

// Task is the typed data model for the task entity.
type Task struct {
	AfterId *int `json:"after_id,omitempty"`
	BeforeId *int `json:"before_id,omitempty"`
	Complete bool `json:"complete"`
	CompletedAt string `json:"completed_at"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	EntityType string `json:"entity_type"`
	ExternalId string `json:"external_id"`
	GlobalId string `json:"global_id"`
	GroupMentionIds []any `json:"group_mention_ids"`
	Id int `json:"id"`
	MemberMentionIds []any `json:"member_mention_ids"`
	MentionIds []any `json:"mention_ids"`
	OwnerIds []any `json:"owner_ids"`
	Position int `json:"position"`
	StoryId int `json:"story_id"`
	UpdatedAt string `json:"updated_at"`
}

// TaskLoadMatch is the typed request payload for Task.LoadTyped.
type TaskLoadMatch struct {
	Id int `json:"id"`
	StoryId int `json:"story_id"`
}

// TaskCreateData is the typed request payload for Task.CreateTyped.
type TaskCreateData struct {
	StoryId int `json:"story_id"`
	AfterId *int `json:"after_id,omitempty"`
	BeforeId *int `json:"before_id,omitempty"`
	Complete bool `json:"complete"`
	CompletedAt string `json:"completed_at"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	EntityType string `json:"entity_type"`
	ExternalId string `json:"external_id"`
	GlobalId string `json:"global_id"`
	GroupMentionIds []any `json:"group_mention_ids"`
	Id int `json:"id"`
	MemberMentionIds []any `json:"member_mention_ids"`
	MentionIds []any `json:"mention_ids"`
	OwnerIds []any `json:"owner_ids"`
	Position int `json:"position"`
	UpdatedAt string `json:"updated_at"`
}

// TaskUpdateData is the typed request payload for Task.UpdateTyped.
type TaskUpdateData struct {
	Id int `json:"id"`
	StoryId int `json:"story_id"`
	AfterId *int `json:"after_id,omitempty"`
	BeforeId *int `json:"before_id,omitempty"`
	Complete *bool `json:"complete,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	GlobalId *string `json:"global_id,omitempty"`
	GroupMentionIds *[]any `json:"group_mention_ids,omitempty"`
	MemberMentionIds *[]any `json:"member_mention_ids,omitempty"`
	MentionIds *[]any `json:"mention_ids,omitempty"`
	OwnerIds *[]any `json:"owner_ids,omitempty"`
	Position *int `json:"position,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// TaskRemoveMatch is the typed request payload for Task.RemoveTyped.
type TaskRemoveMatch struct {
	Id int `json:"id"`
	StoryId int `json:"story_id"`
}

// ThreadedComment is the typed data model for the threaded_comment entity.
type ThreadedComment struct {
	AppUrl string `json:"app_url"`
	AuthorId string `json:"author_id"`
	Comments []any `json:"comments"`
	CreatedAt string `json:"created_at"`
	Deleted bool `json:"deleted"`
	EntityType string `json:"entity_type"`
	ExternalId string `json:"external_id"`
	GroupMentionIds []any `json:"group_mention_ids"`
	Id int `json:"id"`
	MemberMentionIds []any `json:"member_mention_ids"`
	MentionIds []any `json:"mention_ids"`
	Text string `json:"text"`
	UpdatedAt string `json:"updated_at"`
}

// ThreadedCommentLoadMatch is the typed request payload for ThreadedComment.LoadTyped.
type ThreadedCommentLoadMatch struct {
	EpicId int `json:"epic_id"`
	Id int `json:"id"`
}

// ThreadedCommentListMatch is the typed request payload for ThreadedComment.ListTyped.
type ThreadedCommentListMatch struct {
	EpicId int `json:"epic_id"`
}

// ThreadedCommentCreateData is the typed request payload for ThreadedComment.CreateTyped.
type ThreadedCommentCreateData struct {
	EpicId int `json:"epic_id"`
	Id *int `json:"id,omitempty"`
	AppUrl string `json:"app_url"`
	AuthorId string `json:"author_id"`
	Comments []any `json:"comments"`
	CreatedAt string `json:"created_at"`
	Deleted bool `json:"deleted"`
	EntityType string `json:"entity_type"`
	ExternalId string `json:"external_id"`
	GroupMentionIds []any `json:"group_mention_ids"`
	MemberMentionIds []any `json:"member_mention_ids"`
	MentionIds []any `json:"mention_ids"`
	Text string `json:"text"`
	UpdatedAt string `json:"updated_at"`
}

// ThreadedCommentUpdateData is the typed request payload for ThreadedComment.UpdateTyped.
type ThreadedCommentUpdateData struct {
	EpicId int `json:"epic_id"`
	Id int `json:"id"`
	AppUrl *string `json:"app_url,omitempty"`
	AuthorId *string `json:"author_id,omitempty"`
	Comments *[]any `json:"comments,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Deleted *bool `json:"deleted,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	GroupMentionIds *[]any `json:"group_mention_ids,omitempty"`
	MemberMentionIds *[]any `json:"member_mention_ids,omitempty"`
	MentionIds *[]any `json:"mention_ids,omitempty"`
	Text *string `json:"text,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// ThreadedCommentRemoveMatch is the typed request payload for ThreadedComment.RemoveTyped.
type ThreadedCommentRemoveMatch struct {
	EpicId int `json:"epic_id"`
	Id int `json:"id"`
}

// UploadedFile is the typed data model for the uploaded_file entity.
type UploadedFile struct {
	ContentType string `json:"content_type"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	EntityType string `json:"entity_type"`
	ExternalId string `json:"external_id"`
	Filename string `json:"filename"`
	GroupMentionIds []any `json:"group_mention_ids"`
	Id int `json:"id"`
	MemberMentionIds []any `json:"member_mention_ids"`
	MentionIds []any `json:"mention_ids"`
	Name string `json:"name"`
	Size int `json:"size"`
	StoryIds []any `json:"story_ids"`
	ThumbnailUrl string `json:"thumbnail_url"`
	UpdatedAt string `json:"updated_at"`
	UploaderId string `json:"uploader_id"`
	Url string `json:"url"`
}

// UploadedFileLoadMatch is the typed request payload for UploadedFile.LoadTyped.
type UploadedFileLoadMatch struct {
	Id int `json:"id"`
}

// UploadedFileListMatch is the typed request payload for UploadedFile.ListTyped.
type UploadedFileListMatch struct {
	ContentType *string `json:"content_type,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	Filename *string `json:"filename,omitempty"`
	GroupMentionIds *[]any `json:"group_mention_ids,omitempty"`
	Id *int `json:"id,omitempty"`
	MemberMentionIds *[]any `json:"member_mention_ids,omitempty"`
	MentionIds *[]any `json:"mention_ids,omitempty"`
	Name *string `json:"name,omitempty"`
	Size *int `json:"size,omitempty"`
	StoryIds *[]any `json:"story_ids,omitempty"`
	ThumbnailUrl *string `json:"thumbnail_url,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UploaderId *string `json:"uploader_id,omitempty"`
	Url *string `json:"url,omitempty"`
}

// UploadedFileCreateData is the typed request payload for UploadedFile.CreateTyped.
type UploadedFileCreateData struct {
	ContentType string `json:"content_type"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	EntityType string `json:"entity_type"`
	ExternalId string `json:"external_id"`
	Filename string `json:"filename"`
	GroupMentionIds []any `json:"group_mention_ids"`
	Id int `json:"id"`
	MemberMentionIds []any `json:"member_mention_ids"`
	MentionIds []any `json:"mention_ids"`
	Name string `json:"name"`
	Size int `json:"size"`
	StoryIds []any `json:"story_ids"`
	ThumbnailUrl string `json:"thumbnail_url"`
	UpdatedAt string `json:"updated_at"`
	UploaderId string `json:"uploader_id"`
	Url string `json:"url"`
}

// UploadedFileUpdateData is the typed request payload for UploadedFile.UpdateTyped.
type UploadedFileUpdateData struct {
	Id int `json:"id"`
	ContentType *string `json:"content_type,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	Filename *string `json:"filename,omitempty"`
	GroupMentionIds *[]any `json:"group_mention_ids,omitempty"`
	MemberMentionIds *[]any `json:"member_mention_ids,omitempty"`
	MentionIds *[]any `json:"mention_ids,omitempty"`
	Name *string `json:"name,omitempty"`
	Size *int `json:"size,omitempty"`
	StoryIds *[]any `json:"story_ids,omitempty"`
	ThumbnailUrl *string `json:"thumbnail_url,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UploaderId *string `json:"uploader_id,omitempty"`
	Url *string `json:"url,omitempty"`
}

// UploadedFileRemoveMatch is the typed request payload for UploadedFile.RemoveTyped.
type UploadedFileRemoveMatch struct {
	Id int `json:"id"`
}

// Webhook is the typed data model for the webhook entity.
type Webhook struct {
	Secret *string `json:"secret,omitempty"`
	WebhookUrl string `json:"webhook_url"`
}

// WebhookLoadMatch is the typed request payload for Webhook.LoadTyped.
type WebhookLoadMatch struct {
	Id int `json:"id"`
}

// WebhookCreateData is the typed request payload for Webhook.CreateTyped.
type WebhookCreateData struct {
	Secret *string `json:"secret,omitempty"`
	WebhookUrl string `json:"webhook_url"`
}

// WebhookRemoveMatch is the typed request payload for Webhook.RemoveTyped.
type WebhookRemoveMatch struct {
	Id int `json:"id"`
}

// Workflow is the typed data model for the workflow entity.
type Workflow struct {
	AutoAssignOwner bool `json:"auto_assign_owner"`
	CreatedAt string `json:"created_at"`
	DefaultStateId int `json:"default_state_id"`
	Description string `json:"description"`
	EntityType string `json:"entity_type"`
	Id int `json:"id"`
	Name string `json:"name"`
	ProjectIds []any `json:"project_ids"`
	States []any `json:"states"`
	TeamId int `json:"team_id"`
	UpdatedAt string `json:"updated_at"`
}

// WorkflowLoadMatch is the typed request payload for Workflow.LoadTyped.
type WorkflowLoadMatch struct {
	Id int `json:"id"`
}

// WorkflowListMatch is the typed request payload for Workflow.ListTyped.
type WorkflowListMatch struct {
	AutoAssignOwner *bool `json:"auto_assign_owner,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DefaultStateId *int `json:"default_state_id,omitempty"`
	Description *string `json:"description,omitempty"`
	EntityType *string `json:"entity_type,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	ProjectIds *[]any `json:"project_ids,omitempty"`
	States *[]any `json:"states,omitempty"`
	TeamId *int `json:"team_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

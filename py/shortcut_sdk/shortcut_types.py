# Typed models for the Shortcut SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Bulk(TypedDict):
    pass


class BulkRemoveMatch(TypedDict):
    pass


class Category(TypedDict):
    archived: bool
    color: str
    created_at: str
    entity_type: str
    external_id: str
    global_id: str
    id: int
    name: str
    type: str
    updated_at: str


class CategoryLoadMatch(TypedDict):
    id: int


class CategoryListMatch(TypedDict, total=False):
    archived: bool
    color: str
    created_at: str
    entity_type: str
    external_id: str
    global_id: str
    id: int
    name: str
    type: str
    updated_at: str


class CategoryCreateData(TypedDict):
    archived: bool
    color: str
    created_at: str
    entity_type: str
    external_id: str
    global_id: str
    id: int
    name: str
    type: str
    updated_at: str


class CategoryUpdateDataRequired(TypedDict):
    id: int


class CategoryUpdateData(CategoryUpdateDataRequired, total=False):
    archived: bool
    color: str
    created_at: str
    entity_type: str
    external_id: str
    global_id: str
    name: str
    type: str
    updated_at: str


class CategoryRemoveMatch(TypedDict):
    id: int


class Comment(TypedDict, total=False):
    id: str


class CommentRemoveMatch(TypedDict):
    id: int
    story_id: int


class CustomFieldRequired(TypedDict):
    created_at: str
    enabled: bool
    entity_type: str
    field_type: str
    id: str
    name: str
    position: int
    updated_at: str


class CustomField(CustomFieldRequired, total=False):
    after_id: str
    before_id: str
    canonical_name: str
    description: str
    fixed_position: bool
    icon_set_identifier: str
    story_types: list
    values: list


class CustomFieldLoadMatch(TypedDict):
    id: str


class CustomFieldListMatch(TypedDict, total=False):
    after_id: str
    before_id: str
    canonical_name: str
    created_at: str
    description: str
    enabled: bool
    entity_type: str
    field_type: str
    fixed_position: bool
    icon_set_identifier: str
    id: str
    name: str
    position: int
    story_types: list
    updated_at: str
    values: list


class CustomFieldUpdateDataRequired(TypedDict):
    id: str


class CustomFieldUpdateData(CustomFieldUpdateDataRequired, total=False):
    after_id: str
    before_id: str
    canonical_name: str
    created_at: str
    description: str
    enabled: bool
    entity_type: str
    field_type: str
    fixed_position: bool
    icon_set_identifier: str
    name: str
    position: int
    story_types: list
    updated_at: str
    values: list


class CustomFieldRemoveMatch(TypedDict):
    id: str


class Disable(TypedDict):
    pass


class DisableUpdateData(TypedDict):
    pass


class DocSlim(TypedDict):
    app_url: str
    content: str
    id: str
    title: str


class DocSlimListMatch(TypedDict, total=False):
    app_url: str
    content: str
    id: str
    title: str


class DocSlimCreateData(TypedDict):
    app_url: str
    content: str
    id: str
    title: str


class Enable(TypedDict):
    pass


class EnableUpdateData(TypedDict):
    pass


class EntityTemplateRequired(TypedDict):
    created_at: str
    id: str
    last_used_at: str
    story_contents: dict
    updated_at: str


class EntityTemplate(EntityTemplateRequired, total=False):
    author_id: str
    custom_fields: list
    deadline: str
    description: str
    entity_type: str
    epic_id: int
    estimate: int
    external_links: list
    files: list
    follower_ids: list
    group_id: str
    iteration_id: int
    label_ids: list
    labels: list
    linked_files: list
    name: str
    owner_ids: list
    project_id: int
    story_type: str
    sub_tasks: list
    tasks: list
    workflow_state_id: int


class EntityTemplateLoadMatch(TypedDict):
    id: str


class EntityTemplateListMatch(TypedDict, total=False):
    author_id: str
    created_at: str
    custom_fields: list
    deadline: str
    description: str
    entity_type: str
    epic_id: int
    estimate: int
    external_links: list
    files: list
    follower_ids: list
    group_id: str
    id: str
    iteration_id: int
    label_ids: list
    labels: list
    last_used_at: str
    linked_files: list
    name: str
    owner_ids: list
    project_id: int
    story_contents: dict
    story_type: str
    sub_tasks: list
    tasks: list
    updated_at: str
    workflow_state_id: int


class EntityTemplateCreateDataRequired(TypedDict):
    created_at: str
    id: str
    last_used_at: str
    story_contents: dict
    updated_at: str


class EntityTemplateCreateData(EntityTemplateCreateDataRequired, total=False):
    author_id: str
    custom_fields: list
    deadline: str
    description: str
    entity_type: str
    epic_id: int
    estimate: int
    external_links: list
    files: list
    follower_ids: list
    group_id: str
    iteration_id: int
    label_ids: list
    labels: list
    linked_files: list
    name: str
    owner_ids: list
    project_id: int
    story_type: str
    sub_tasks: list
    tasks: list
    workflow_state_id: int


class EntityTemplateUpdateDataRequired(TypedDict):
    id: str


class EntityTemplateUpdateData(EntityTemplateUpdateDataRequired, total=False):
    author_id: str
    created_at: str
    custom_fields: list
    deadline: str
    description: str
    entity_type: str
    epic_id: int
    estimate: int
    external_links: list
    files: list
    follower_ids: list
    group_id: str
    iteration_id: int
    label_ids: list
    labels: list
    last_used_at: str
    linked_files: list
    name: str
    owner_ids: list
    project_id: int
    story_contents: dict
    story_type: str
    sub_tasks: list
    tasks: list
    updated_at: str
    workflow_state_id: int


class EntityTemplateRemoveMatch(TypedDict):
    id: str


class EpicRequired(TypedDict):
    app_url: str
    archived: bool
    associated_groups: list
    comments: list
    completed: bool
    completed_at: str
    completed_at_override: str
    created_at: str
    deadline: str
    description: str
    entity_type: str
    epic_state_id: int
    external_id: str
    follower_ids: list
    global_id: str
    group_id: str
    group_ids: list
    group_mention_ids: list
    health: dict
    id: int
    label_ids: list
    labels: list
    member_mention_ids: list
    mention_ids: list
    milestone_id: int
    name: str
    objective_ids: list
    owner_ids: list
    planned_start_date: str
    position: int
    productboard_id: str
    productboard_name: str
    productboard_plugin_id: str
    productboard_url: str
    project_ids: list
    requested_by_id: str
    started: bool
    started_at: str
    started_at_override: str
    state: str
    stats: dict
    stories_without_projects: int
    updated_at: str


class Epic(EpicRequired, total=False):
    after_id: int
    before_id: int
    converted_from_story_id: int


class EpicLoadMatch(TypedDict):
    id: int


class EpicListMatch(TypedDict, total=False):
    after_id: int
    app_url: str
    archived: bool
    associated_groups: list
    before_id: int
    comments: list
    completed: bool
    completed_at: str
    completed_at_override: str
    converted_from_story_id: int
    created_at: str
    deadline: str
    description: str
    entity_type: str
    epic_state_id: int
    external_id: str
    follower_ids: list
    global_id: str
    group_id: str
    group_ids: list
    group_mention_ids: list
    health: dict
    id: int
    label_ids: list
    labels: list
    member_mention_ids: list
    mention_ids: list
    milestone_id: int
    name: str
    objective_ids: list
    owner_ids: list
    planned_start_date: str
    position: int
    productboard_id: str
    productboard_name: str
    productboard_plugin_id: str
    productboard_url: str
    project_ids: list
    requested_by_id: str
    started: bool
    started_at: str
    started_at_override: str
    state: str
    stats: dict
    stories_without_projects: int
    updated_at: str


class EpicCreateDataRequired(TypedDict):
    app_url: str
    archived: bool
    associated_groups: list
    comments: list
    completed: bool
    completed_at: str
    completed_at_override: str
    created_at: str
    deadline: str
    description: str
    entity_type: str
    epic_state_id: int
    external_id: str
    follower_ids: list
    global_id: str
    group_id: str
    group_ids: list
    group_mention_ids: list
    health: dict
    id: int
    label_ids: list
    labels: list
    member_mention_ids: list
    mention_ids: list
    milestone_id: int
    name: str
    objective_ids: list
    owner_ids: list
    planned_start_date: str
    position: int
    productboard_id: str
    productboard_name: str
    productboard_plugin_id: str
    productboard_url: str
    project_ids: list
    requested_by_id: str
    started: bool
    started_at: str
    started_at_override: str
    state: str
    stats: dict
    stories_without_projects: int
    updated_at: str


class EpicCreateData(EpicCreateDataRequired, total=False):
    after_id: int
    before_id: int
    converted_from_story_id: int


class EpicUpdateDataRequired(TypedDict):
    id: int


class EpicUpdateData(EpicUpdateDataRequired, total=False):
    after_id: int
    app_url: str
    archived: bool
    associated_groups: list
    before_id: int
    comments: list
    completed: bool
    completed_at: str
    completed_at_override: str
    converted_from_story_id: int
    created_at: str
    deadline: str
    description: str
    entity_type: str
    epic_state_id: int
    external_id: str
    follower_ids: list
    global_id: str
    group_id: str
    group_ids: list
    group_mention_ids: list
    health: dict
    label_ids: list
    labels: list
    member_mention_ids: list
    mention_ids: list
    milestone_id: int
    name: str
    objective_ids: list
    owner_ids: list
    planned_start_date: str
    position: int
    productboard_id: str
    productboard_name: str
    productboard_plugin_id: str
    productboard_url: str
    project_ids: list
    requested_by_id: str
    started: bool
    started_at: str
    started_at_override: str
    state: str
    stats: dict
    stories_without_projects: int
    updated_at: str


class EpicRemoveMatch(TypedDict):
    id: int


class EpicPaginatedResultRequired(TypedDict):
    app_url: str
    archived: bool
    associated_groups: list
    completed: bool
    completed_at: str
    completed_at_override: str
    created_at: str
    deadline: str
    entity_type: str
    epic_state_id: int
    external_id: str
    follower_ids: list
    global_id: str
    group_id: str
    group_ids: list
    group_mention_ids: list
    id: int
    label_ids: list
    labels: list
    member_mention_ids: list
    mention_ids: list
    milestone_id: int
    name: str
    objective_ids: list
    owner_ids: list
    planned_start_date: str
    position: int
    productboard_id: str
    productboard_name: str
    productboard_plugin_id: str
    productboard_url: str
    project_ids: list
    requested_by_id: str
    started: bool
    started_at: str
    started_at_override: str
    state: str
    stats: dict
    stories_without_projects: int
    updated_at: str


class EpicPaginatedResult(EpicPaginatedResultRequired, total=False):
    description: str


class EpicPaginatedResultListMatch(TypedDict, total=False):
    app_url: str
    archived: bool
    associated_groups: list
    completed: bool
    completed_at: str
    completed_at_override: str
    created_at: str
    deadline: str
    description: str
    entity_type: str
    epic_state_id: int
    external_id: str
    follower_ids: list
    global_id: str
    group_id: str
    group_ids: list
    group_mention_ids: list
    id: int
    label_ids: list
    labels: list
    member_mention_ids: list
    mention_ids: list
    milestone_id: int
    name: str
    objective_ids: list
    owner_ids: list
    planned_start_date: str
    position: int
    productboard_id: str
    productboard_name: str
    productboard_plugin_id: str
    productboard_url: str
    project_ids: list
    requested_by_id: str
    started: bool
    started_at: str
    started_at_override: str
    state: str
    stats: dict
    stories_without_projects: int
    updated_at: str


class EpicUnlinkProductboard(TypedDict, total=False):
    id: str


class EpicUnlinkProductboardCreateData(TypedDict):
    id: int


class EpicWorkflowRequired(TypedDict):
    created_at: str
    description: str
    entity_type: str
    global_id: str
    id: int
    name: str
    position: int
    type: str
    updated_at: str


class EpicWorkflow(EpicWorkflowRequired, total=False):
    color: str


class EpicWorkflowListMatch(TypedDict, total=False):
    color: str
    created_at: str
    description: str
    entity_type: str
    global_id: str
    id: int
    name: str
    position: int
    type: str
    updated_at: str


class GroupRequired(TypedDict):
    app_url: str
    archived: bool
    color: str
    color_key: str
    created_at: str
    description: str
    display_icon: dict
    entity_type: str
    global_id: str
    id: str
    member_ids: list
    mention_name: str
    name: str
    num_epics_started: int
    num_stories: int
    num_stories_backlog: int
    num_stories_started: int
    updated_at: str
    workflow_ids: list


class Group(GroupRequired, total=False):
    default_workflow_id: int
    display_icon_id: str


class GroupLoadMatch(TypedDict):
    id: str


class GroupListMatch(TypedDict, total=False):
    app_url: str
    archived: bool
    color: str
    color_key: str
    created_at: str
    default_workflow_id: int
    description: str
    display_icon: dict
    display_icon_id: str
    entity_type: str
    global_id: str
    id: str
    member_ids: list
    mention_name: str
    name: str
    num_epics_started: int
    num_stories: int
    num_stories_backlog: int
    num_stories_started: int
    updated_at: str
    workflow_ids: list


class GroupCreateDataRequired(TypedDict):
    app_url: str
    archived: bool
    color: str
    color_key: str
    created_at: str
    description: str
    display_icon: dict
    entity_type: str
    global_id: str
    id: str
    member_ids: list
    mention_name: str
    name: str
    num_epics_started: int
    num_stories: int
    num_stories_backlog: int
    num_stories_started: int
    updated_at: str
    workflow_ids: list


class GroupCreateData(GroupCreateDataRequired, total=False):
    default_workflow_id: int
    display_icon_id: str


class GroupUpdateDataRequired(TypedDict):
    id: str


class GroupUpdateData(GroupUpdateDataRequired, total=False):
    app_url: str
    archived: bool
    color: str
    color_key: str
    created_at: str
    default_workflow_id: int
    description: str
    display_icon: dict
    display_icon_id: str
    entity_type: str
    global_id: str
    member_ids: list
    mention_name: str
    name: str
    num_epics_started: int
    num_stories: int
    num_stories_backlog: int
    num_stories_started: int
    updated_at: str
    workflow_ids: list


class HealthRequired(TypedDict):
    entity_type: str
    id: str
    status: str


class Health(HealthRequired, total=False):
    author_id: str
    created_at: str
    epic_id: int
    objective_id: int
    text: str
    updated_at: str


class HealthLoadMatch(TypedDict):
    epic_id: int


class HealthListMatch(TypedDict):
    epic_id: int


class HealthCreateDataRequired(TypedDict):
    epic_id: int
    entity_type: str
    id: str
    status: str


class HealthCreateData(HealthCreateDataRequired, total=False):
    author_id: str
    created_at: str
    objective_id: int
    text: str
    updated_at: str


class HealthUpdateDataRequired(TypedDict):
    id: str


class HealthUpdateData(HealthUpdateDataRequired, total=False):
    author_id: str
    created_at: str
    entity_type: str
    epic_id: int
    objective_id: int
    status: str
    text: str
    updated_at: str


class HistoryRequired(TypedDict):
    actions: list
    changed_at: str
    id: str
    version: str


class History(HistoryRequired, total=False):
    actor_name: str
    automation_id: str
    external_id: str
    member_id: str
    primary_id: str
    references: list
    webhook_id: str


class HistoryListMatch(TypedDict):
    story_id: int


class Iteration(TypedDict):
    app_url: str
    associated_groups: list
    created_at: str
    description: str
    end_date: str
    entity_type: str
    follower_ids: list
    global_id: str
    group_ids: list
    group_mention_ids: list
    id: int
    label_ids: list
    labels: list
    member_mention_ids: list
    mention_ids: list
    name: str
    start_date: str
    stats: dict
    status: str
    updated_at: str


class IterationLoadMatch(TypedDict):
    id: int


class IterationListMatch(TypedDict, total=False):
    app_url: str
    associated_groups: list
    created_at: str
    description: str
    end_date: str
    entity_type: str
    follower_ids: list
    global_id: str
    group_ids: list
    group_mention_ids: list
    id: int
    label_ids: list
    labels: list
    member_mention_ids: list
    mention_ids: list
    name: str
    start_date: str
    stats: dict
    status: str
    updated_at: str


class IterationCreateData(TypedDict):
    app_url: str
    associated_groups: list
    created_at: str
    description: str
    end_date: str
    entity_type: str
    follower_ids: list
    global_id: str
    group_ids: list
    group_mention_ids: list
    id: int
    label_ids: list
    labels: list
    member_mention_ids: list
    mention_ids: list
    name: str
    start_date: str
    stats: dict
    status: str
    updated_at: str


class IterationUpdateDataRequired(TypedDict):
    id: int


class IterationUpdateData(IterationUpdateDataRequired, total=False):
    app_url: str
    associated_groups: list
    created_at: str
    description: str
    end_date: str
    entity_type: str
    follower_ids: list
    global_id: str
    group_ids: list
    group_mention_ids: list
    label_ids: list
    labels: list
    member_mention_ids: list
    mention_ids: list
    name: str
    start_date: str
    stats: dict
    status: str
    updated_at: str


class IterationRemoveMatch(TypedDict):
    id: int


class KeyResultRequired(TypedDict):
    current_observed_value: dict
    current_target_value: dict
    id: str
    initial_observed_value: dict
    name: str
    objective_id: int
    progress: int
    type: str


class KeyResult(KeyResultRequired, total=False):
    observed_value: dict
    target_value: dict


class KeyResultLoadMatch(TypedDict):
    id: str


class KeyResultUpdateDataRequired(TypedDict):
    id: str


class KeyResultUpdateData(KeyResultUpdateDataRequired, total=False):
    current_observed_value: dict
    current_target_value: dict
    initial_observed_value: dict
    name: str
    objective_id: int
    observed_value: dict
    progress: int
    target_value: dict
    type: str


class LabelRequired(TypedDict):
    app_url: str
    created_at: str
    entity_type: str
    global_id: str
    id: int
    name: str
    num_epics: int
    num_epics_completed: int
    num_epics_in_progress: int
    num_epics_total: int
    num_epics_unstarted: int
    num_points_backlog: int
    num_points_completed: int
    num_points_in_progress: int
    num_points_total: int
    num_points_unstarted: int
    num_related_documents: int
    num_stories_backlog: int
    num_stories_completed: int
    num_stories_in_progress: int
    num_stories_total: int
    num_stories_unestimated: int
    num_stories_unstarted: int
    stats: dict
    updated_at: str


class Label(LabelRequired, total=False):
    archived: bool
    color: str
    description: str
    external_id: str


class LabelLoadMatch(TypedDict):
    id: int


class LabelListMatch(TypedDict, total=False):
    app_url: str
    archived: bool
    color: str
    created_at: str
    description: str
    entity_type: str
    external_id: str
    global_id: str
    id: int
    name: str
    num_epics: int
    num_epics_completed: int
    num_epics_in_progress: int
    num_epics_total: int
    num_epics_unstarted: int
    num_points_backlog: int
    num_points_completed: int
    num_points_in_progress: int
    num_points_total: int
    num_points_unstarted: int
    num_related_documents: int
    num_stories_backlog: int
    num_stories_completed: int
    num_stories_in_progress: int
    num_stories_total: int
    num_stories_unestimated: int
    num_stories_unstarted: int
    stats: dict
    updated_at: str


class LabelCreateDataRequired(TypedDict):
    app_url: str
    created_at: str
    entity_type: str
    global_id: str
    id: int
    name: str
    num_epics: int
    num_epics_completed: int
    num_epics_in_progress: int
    num_epics_total: int
    num_epics_unstarted: int
    num_points_backlog: int
    num_points_completed: int
    num_points_in_progress: int
    num_points_total: int
    num_points_unstarted: int
    num_related_documents: int
    num_stories_backlog: int
    num_stories_completed: int
    num_stories_in_progress: int
    num_stories_total: int
    num_stories_unestimated: int
    num_stories_unstarted: int
    stats: dict
    updated_at: str


class LabelCreateData(LabelCreateDataRequired, total=False):
    archived: bool
    color: str
    description: str
    external_id: str


class LabelUpdateDataRequired(TypedDict):
    id: int


class LabelUpdateData(LabelUpdateDataRequired, total=False):
    app_url: str
    archived: bool
    color: str
    created_at: str
    description: str
    entity_type: str
    external_id: str
    global_id: str
    name: str
    num_epics: int
    num_epics_completed: int
    num_epics_in_progress: int
    num_epics_total: int
    num_epics_unstarted: int
    num_points_backlog: int
    num_points_completed: int
    num_points_in_progress: int
    num_points_total: int
    num_points_unstarted: int
    num_related_documents: int
    num_stories_backlog: int
    num_stories_completed: int
    num_stories_in_progress: int
    num_stories_total: int
    num_stories_unestimated: int
    num_stories_unstarted: int
    stats: dict
    updated_at: str


class LabelRemoveMatch(TypedDict):
    id: int


class LinkedFileRequired(TypedDict):
    content_type: str
    created_at: str
    description: str
    entity_type: str
    group_mention_ids: list
    id: int
    member_mention_ids: list
    mention_ids: list
    name: str
    size: int
    story_ids: list
    thumbnail_url: str
    type: str
    updated_at: str
    uploader_id: str
    url: str


class LinkedFile(LinkedFileRequired, total=False):
    story_id: int


class LinkedFileLoadMatch(TypedDict):
    id: int


class LinkedFileListMatch(TypedDict, total=False):
    content_type: str
    created_at: str
    description: str
    entity_type: str
    group_mention_ids: list
    id: int
    member_mention_ids: list
    mention_ids: list
    name: str
    size: int
    story_id: int
    story_ids: list
    thumbnail_url: str
    type: str
    updated_at: str
    uploader_id: str
    url: str


class LinkedFileCreateDataRequired(TypedDict):
    content_type: str
    created_at: str
    description: str
    entity_type: str
    group_mention_ids: list
    id: int
    member_mention_ids: list
    mention_ids: list
    name: str
    size: int
    story_ids: list
    thumbnail_url: str
    type: str
    updated_at: str
    uploader_id: str
    url: str


class LinkedFileCreateData(LinkedFileCreateDataRequired, total=False):
    story_id: int


class LinkedFileUpdateDataRequired(TypedDict):
    id: int


class LinkedFileUpdateData(LinkedFileUpdateDataRequired, total=False):
    content_type: str
    created_at: str
    description: str
    entity_type: str
    group_mention_ids: list
    member_mention_ids: list
    mention_ids: list
    name: str
    size: int
    story_id: int
    story_ids: list
    thumbnail_url: str
    type: str
    updated_at: str
    uploader_id: str
    url: str


class LinkedFileRemoveMatch(TypedDict):
    id: int


class MemberRequired(TypedDict):
    created_at: str
    created_without_invite: bool
    disabled: bool
    entity_type: str
    global_id: str
    group_ids: list
    id: str
    is_owner: bool
    mention_name: str
    name: str
    organization2: dict
    profile: dict
    role: str
    state: str
    updated_at: str
    workspace2: dict


class Member(MemberRequired, total=False):
    installation_id: str
    replaced_by: str


class MemberLoadMatch(TypedDict):
    id: str


class MemberListMatch(TypedDict, total=False):
    created_at: str
    created_without_invite: bool
    disabled: bool
    entity_type: str
    global_id: str
    group_ids: list
    id: str
    installation_id: str
    is_owner: bool
    mention_name: str
    name: str
    organization2: dict
    profile: dict
    replaced_by: str
    role: str
    state: str
    updated_at: str
    workspace2: dict


class MilestoneRequired(TypedDict):
    app_url: str
    archived: bool
    categories: list
    completed: bool
    completed_at: str
    completed_at_override: str
    created_at: str
    description: str
    entity_type: str
    global_id: str
    id: int
    key_result_ids: list
    name: str
    position: int
    started: bool
    started_at: str
    started_at_override: str
    state: str
    stats: dict
    updated_at: str


class Milestone(MilestoneRequired, total=False):
    after_id: int
    before_id: int


class MilestoneLoadMatch(TypedDict):
    id: int


class MilestoneListMatch(TypedDict, total=False):
    after_id: int
    app_url: str
    archived: bool
    before_id: int
    categories: list
    completed: bool
    completed_at: str
    completed_at_override: str
    created_at: str
    description: str
    entity_type: str
    global_id: str
    id: int
    key_result_ids: list
    name: str
    position: int
    started: bool
    started_at: str
    started_at_override: str
    state: str
    stats: dict
    updated_at: str


class MilestoneCreateDataRequired(TypedDict):
    app_url: str
    archived: bool
    categories: list
    completed: bool
    completed_at: str
    completed_at_override: str
    created_at: str
    description: str
    entity_type: str
    global_id: str
    id: int
    key_result_ids: list
    name: str
    position: int
    started: bool
    started_at: str
    started_at_override: str
    state: str
    stats: dict
    updated_at: str


class MilestoneCreateData(MilestoneCreateDataRequired, total=False):
    after_id: int
    before_id: int


class MilestoneUpdateDataRequired(TypedDict):
    id: int


class MilestoneUpdateData(MilestoneUpdateDataRequired, total=False):
    after_id: int
    app_url: str
    archived: bool
    before_id: int
    categories: list
    completed: bool
    completed_at: str
    completed_at_override: str
    created_at: str
    description: str
    entity_type: str
    global_id: str
    key_result_ids: list
    name: str
    position: int
    started: bool
    started_at: str
    started_at_override: str
    state: str
    stats: dict
    updated_at: str


class MilestoneRemoveMatch(TypedDict):
    id: int


class Objectif(TypedDict, total=False):
    id: str


class ObjectifRemoveMatch(TypedDict):
    id: int


class ObjectiveRequired(TypedDict):
    app_url: str
    archived: bool
    categories: list
    completed: bool
    completed_at: str
    completed_at_override: str
    created_at: str
    description: str
    entity_type: str
    global_id: str
    id: int
    key_result_ids: list
    name: str
    position: int
    started: bool
    started_at: str
    started_at_override: str
    state: str
    stats: dict
    updated_at: str


class Objective(ObjectiveRequired, total=False):
    after_id: int
    before_id: int


class ObjectiveLoadMatch(TypedDict):
    objective_public_id: int


class ObjectiveListMatch(TypedDict, total=False):
    after_id: int
    app_url: str
    archived: bool
    before_id: int
    categories: list
    completed: bool
    completed_at: str
    completed_at_override: str
    created_at: str
    description: str
    entity_type: str
    global_id: str
    id: int
    key_result_ids: list
    name: str
    position: int
    started: bool
    started_at: str
    started_at_override: str
    state: str
    stats: dict
    updated_at: str


class ObjectiveCreateDataRequired(TypedDict):
    app_url: str
    archived: bool
    categories: list
    completed: bool
    completed_at: str
    completed_at_override: str
    created_at: str
    description: str
    entity_type: str
    global_id: str
    id: int
    key_result_ids: list
    name: str
    position: int
    started: bool
    started_at: str
    started_at_override: str
    state: str
    stats: dict
    updated_at: str


class ObjectiveCreateData(ObjectiveCreateDataRequired, total=False):
    after_id: int
    before_id: int


class ObjectiveUpdateDataRequired(TypedDict):
    objective_public_id: int


class ObjectiveUpdateData(ObjectiveUpdateDataRequired, total=False):
    after_id: int
    app_url: str
    archived: bool
    before_id: int
    categories: list
    completed: bool
    completed_at: str
    completed_at_override: str
    created_at: str
    description: str
    entity_type: str
    global_id: str
    id: int
    key_result_ids: list
    name: str
    position: int
    started: bool
    started_at: str
    started_at_override: str
    state: str
    stats: dict
    updated_at: str


class Project(TypedDict):
    abbreviation: str
    app_url: str
    archived: bool
    color: str
    created_at: str
    days_to_thermometer: int
    description: str
    entity_type: str
    external_id: str
    follower_ids: list
    global_id: str
    id: int
    iteration_length: int
    name: str
    show_thermometer: bool
    start_time: str
    stats: dict
    team_id: int
    updated_at: str
    workflow_id: int


class ProjectLoadMatch(TypedDict):
    id: int


class ProjectListMatch(TypedDict, total=False):
    abbreviation: str
    app_url: str
    archived: bool
    color: str
    created_at: str
    days_to_thermometer: int
    description: str
    entity_type: str
    external_id: str
    follower_ids: list
    global_id: str
    id: int
    iteration_length: int
    name: str
    show_thermometer: bool
    start_time: str
    stats: dict
    team_id: int
    updated_at: str
    workflow_id: int


class ProjectCreateData(TypedDict):
    abbreviation: str
    app_url: str
    archived: bool
    color: str
    created_at: str
    days_to_thermometer: int
    description: str
    entity_type: str
    external_id: str
    follower_ids: list
    global_id: str
    id: int
    iteration_length: int
    name: str
    show_thermometer: bool
    start_time: str
    stats: dict
    team_id: int
    updated_at: str
    workflow_id: int


class ProjectUpdateDataRequired(TypedDict):
    id: int


class ProjectUpdateData(ProjectUpdateDataRequired, total=False):
    abbreviation: str
    app_url: str
    archived: bool
    color: str
    created_at: str
    days_to_thermometer: int
    description: str
    entity_type: str
    external_id: str
    follower_ids: list
    global_id: str
    iteration_length: int
    name: str
    show_thermometer: bool
    start_time: str
    stats: dict
    team_id: int
    updated_at: str
    workflow_id: int


class ProjectRemoveMatch(TypedDict):
    id: int


class Repository(TypedDict):
    created_at: str
    entity_type: str
    external_id: str
    full_name: str
    id: int
    name: str
    type: str
    updated_at: str
    url: str


class RepositoryLoadMatch(TypedDict):
    id: int


class RepositoryListMatch(TypedDict, total=False):
    created_at: str
    entity_type: str
    external_id: str
    full_name: str
    id: int
    name: str
    type: str
    updated_at: str
    url: str


class Search(TypedDict):
    epics: dict
    iterations: dict
    milestones: dict
    stories: dict


class SearchLoadMatch(TypedDict, total=False):
    epics: dict
    iterations: dict
    milestones: dict
    stories: dict


class StoryRequired(TypedDict):
    app_url: str
    archived: bool
    blocked: bool
    blocker: bool
    branches: list
    comments: list
    commits: list
    completed: bool
    completed_at: str
    completed_at_override: str
    created_at: str
    deadline: str
    description: str
    entity_type: str
    epic_id: int
    estimate: int
    external_id: str
    external_links: list
    files: list
    follower_ids: list
    global_id: str
    group_id: str
    group_mention_ids: list
    id: int
    iteration_id: int
    label_ids: list
    labels: list
    linked_files: list
    member_mention_ids: list
    mention_ids: list
    moved_at: str
    name: str
    owner_ids: list
    position: int
    previous_iteration_ids: list
    project_id: int
    pull_requests: list
    requested_by_id: str
    started: bool
    started_at: str
    started_at_override: str
    stats: dict
    story_links: list
    story_template_id: str
    story_type: str
    synced_item: dict
    tasks: list
    updated_at: str
    workflow_id: int
    workflow_state_id: int


class Story(StoryRequired, total=False):
    after_id: int
    before_id: int
    branch_ids: list
    comment_ids: list
    commit_ids: list
    custom_fields: list
    custom_fields_add: list
    custom_fields_remove: list
    cycle_time: int
    external_links_add: list
    external_links_remove: list
    file_ids: list
    file_ids_add: list
    file_ids_remove: list
    follower_ids_add: list
    follower_ids_remove: list
    formatted_vcs_branch_name: str
    labels_add: list
    labels_remove: list
    lead_time: int
    linked_file_ids: list
    linked_file_ids_add: list
    linked_file_ids_remove: list
    move_to: str
    num_tasks_completed: int
    owner_ids_add: list
    owner_ids_remove: list
    parent_story_id: int
    pull_request_ids: list
    source_task_id: int
    sub_task_story_ids: list
    sub_tasks: list
    task_ids: list


class StoryLoadMatch(TypedDict):
    id: int


class StoryListMatch(TypedDict, total=False):
    after_id: int
    app_url: str
    archived: bool
    before_id: int
    blocked: bool
    blocker: bool
    branch_ids: list
    branches: list
    comment_ids: list
    comments: list
    commit_ids: list
    commits: list
    completed: bool
    completed_at: str
    completed_at_override: str
    created_at: str
    custom_fields: list
    custom_fields_add: list
    custom_fields_remove: list
    cycle_time: int
    deadline: str
    description: str
    entity_type: str
    epic_id: int
    estimate: int
    external_id: str
    external_links: list
    external_links_add: list
    external_links_remove: list
    file_ids: list
    file_ids_add: list
    file_ids_remove: list
    files: list
    follower_ids: list
    follower_ids_add: list
    follower_ids_remove: list
    formatted_vcs_branch_name: str
    global_id: str
    group_id: str
    group_mention_ids: list
    id: int
    iteration_id: int
    label_ids: list
    labels: list
    labels_add: list
    labels_remove: list
    lead_time: int
    linked_file_ids: list
    linked_file_ids_add: list
    linked_file_ids_remove: list
    linked_files: list
    member_mention_ids: list
    mention_ids: list
    move_to: str
    moved_at: str
    name: str
    num_tasks_completed: int
    owner_ids: list
    owner_ids_add: list
    owner_ids_remove: list
    parent_story_id: int
    position: int
    previous_iteration_ids: list
    project_id: int
    pull_request_ids: list
    pull_requests: list
    requested_by_id: str
    source_task_id: int
    started: bool
    started_at: str
    started_at_override: str
    stats: dict
    story_links: list
    story_template_id: str
    story_type: str
    sub_task_story_ids: list
    sub_tasks: list
    synced_item: dict
    task_ids: list
    tasks: list
    updated_at: str
    workflow_id: int
    workflow_state_id: int


class StoryCreateDataRequired(TypedDict):
    app_url: str
    archived: bool
    blocked: bool
    blocker: bool
    branches: list
    comments: list
    commits: list
    completed: bool
    completed_at: str
    completed_at_override: str
    created_at: str
    deadline: str
    description: str
    entity_type: str
    epic_id: int
    estimate: int
    external_id: str
    external_links: list
    files: list
    follower_ids: list
    global_id: str
    group_id: str
    group_mention_ids: list
    id: int
    iteration_id: int
    label_ids: list
    labels: list
    linked_files: list
    member_mention_ids: list
    mention_ids: list
    moved_at: str
    name: str
    owner_ids: list
    position: int
    previous_iteration_ids: list
    project_id: int
    pull_requests: list
    requested_by_id: str
    started: bool
    started_at: str
    started_at_override: str
    stats: dict
    story_links: list
    story_template_id: str
    story_type: str
    synced_item: dict
    tasks: list
    updated_at: str
    workflow_id: int
    workflow_state_id: int


class StoryCreateData(StoryCreateDataRequired, total=False):
    after_id: int
    before_id: int
    branch_ids: list
    comment_ids: list
    commit_ids: list
    custom_fields: list
    custom_fields_add: list
    custom_fields_remove: list
    cycle_time: int
    external_links_add: list
    external_links_remove: list
    file_ids: list
    file_ids_add: list
    file_ids_remove: list
    follower_ids_add: list
    follower_ids_remove: list
    formatted_vcs_branch_name: str
    labels_add: list
    labels_remove: list
    lead_time: int
    linked_file_ids: list
    linked_file_ids_add: list
    linked_file_ids_remove: list
    move_to: str
    num_tasks_completed: int
    owner_ids_add: list
    owner_ids_remove: list
    parent_story_id: int
    pull_request_ids: list
    source_task_id: int
    sub_task_story_ids: list
    sub_tasks: list
    task_ids: list


class StoryUpdateDataRequired(TypedDict):
    id: int


class StoryUpdateData(StoryUpdateDataRequired, total=False):
    after_id: int
    app_url: str
    archived: bool
    before_id: int
    blocked: bool
    blocker: bool
    branch_ids: list
    branches: list
    comment_ids: list
    comments: list
    commit_ids: list
    commits: list
    completed: bool
    completed_at: str
    completed_at_override: str
    created_at: str
    custom_fields: list
    custom_fields_add: list
    custom_fields_remove: list
    cycle_time: int
    deadline: str
    description: str
    entity_type: str
    epic_id: int
    estimate: int
    external_id: str
    external_links: list
    external_links_add: list
    external_links_remove: list
    file_ids: list
    file_ids_add: list
    file_ids_remove: list
    files: list
    follower_ids: list
    follower_ids_add: list
    follower_ids_remove: list
    formatted_vcs_branch_name: str
    global_id: str
    group_id: str
    group_mention_ids: list
    iteration_id: int
    label_ids: list
    labels: list
    labels_add: list
    labels_remove: list
    lead_time: int
    linked_file_ids: list
    linked_file_ids_add: list
    linked_file_ids_remove: list
    linked_files: list
    member_mention_ids: list
    mention_ids: list
    move_to: str
    moved_at: str
    name: str
    num_tasks_completed: int
    owner_ids: list
    owner_ids_add: list
    owner_ids_remove: list
    parent_story_id: int
    position: int
    previous_iteration_ids: list
    project_id: int
    pull_request_ids: list
    pull_requests: list
    requested_by_id: str
    source_task_id: int
    started: bool
    started_at: str
    started_at_override: str
    stats: dict
    story_links: list
    story_template_id: str
    story_type: str
    sub_task_story_ids: list
    sub_tasks: list
    synced_item: dict
    task_ids: list
    tasks: list
    updated_at: str
    workflow_id: int
    workflow_state_id: int


class StoryRemoveMatch(TypedDict):
    id: int


class StoryCommentRequired(TypedDict):
    app_url: str
    author_id: str
    created_at: str
    deleted: bool
    entity_type: str
    external_id: str
    group_mention_ids: list
    id: int
    linked_to_slack: bool
    member_mention_ids: list
    mention_ids: list
    position: int
    reactions: list
    story_id: int
    text: str
    updated_at: str


class StoryComment(StoryCommentRequired, total=False):
    blocker: bool
    parent_id: int
    unblocks_parent: bool


class StoryCommentLoadMatch(TypedDict):
    id: int
    story_id: int


class StoryCommentListMatch(TypedDict):
    id: int


class StoryCommentCreateDataRequired(TypedDict):
    id: int
    app_url: str
    author_id: str
    created_at: str
    deleted: bool
    entity_type: str
    external_id: str
    group_mention_ids: list
    linked_to_slack: bool
    member_mention_ids: list
    mention_ids: list
    position: int
    reactions: list
    story_id: int
    text: str
    updated_at: str


class StoryCommentCreateData(StoryCommentCreateDataRequired, total=False):
    blocker: bool
    parent_id: int
    unblocks_parent: bool


class StoryCommentUpdateDataRequired(TypedDict):
    id: int
    story_id: int


class StoryCommentUpdateData(StoryCommentUpdateDataRequired, total=False):
    app_url: str
    author_id: str
    blocker: bool
    created_at: str
    deleted: bool
    entity_type: str
    external_id: str
    group_mention_ids: list
    linked_to_slack: bool
    member_mention_ids: list
    mention_ids: list
    parent_id: int
    position: int
    reactions: list
    text: str
    unblocks_parent: bool
    updated_at: str


class StoryLink(TypedDict):
    created_at: str
    entity_type: str
    id: int
    object_id: int
    subject_id: int
    subject_workflow_state_id: int
    updated_at: str
    verb: str


class StoryLinkLoadMatch(TypedDict):
    id: int


class StoryLinkCreateData(TypedDict):
    created_at: str
    entity_type: str
    id: int
    object_id: int
    subject_id: int
    subject_workflow_state_id: int
    updated_at: str
    verb: str


class StoryLinkUpdateDataRequired(TypedDict):
    id: int


class StoryLinkUpdateData(StoryLinkUpdateDataRequired, total=False):
    created_at: str
    entity_type: str
    object_id: int
    subject_id: int
    subject_workflow_state_id: int
    updated_at: str
    verb: str


class StoryLinkRemoveMatch(TypedDict):
    id: int


class StoryReaction(TypedDict):
    emoji: str


class StoryReactionCreateData(TypedDict):
    comment_id: int
    story_id: int
    emoji: str


class StoryReactionRemoveMatch(TypedDict):
    comment_id: int
    story_id: int


class StorySlimRequired(TypedDict):
    stories: list
    story_ids: list


class StorySlim(StorySlimRequired, total=False):
    after_id: int
    archived: bool
    before_id: int
    completed_at_end: str
    completed_at_start: str
    created_at_end: str
    created_at_start: str
    custom_fields_add: list
    custom_fields_remove: list
    deadline: str
    deadline_end: str
    deadline_start: str
    epic_id: int
    epic_ids: list
    estimate: int
    external_id: str
    external_links: list
    follower_ids_add: list
    follower_ids_remove: list
    group_id: str
    group_ids: list
    includes_description: bool
    iteration_id: int
    iteration_ids: list
    label_ids: list
    label_name: str
    labels_add: list
    labels_remove: list
    move_to: str
    owner_id: str
    owner_ids: list
    owner_ids_add: list
    owner_ids_remove: list
    project_id: int
    project_ids: list
    requested_by_id: str
    story_type: str
    updated_at_end: str
    updated_at_start: str
    workflow_state_id: int
    workflow_state_types: list


class StorySlimCreateDataRequired(TypedDict):
    stories: list
    story_ids: list


class StorySlimCreateData(StorySlimCreateDataRequired, total=False):
    after_id: int
    archived: bool
    before_id: int
    completed_at_end: str
    completed_at_start: str
    created_at_end: str
    created_at_start: str
    custom_fields_add: list
    custom_fields_remove: list
    deadline: str
    deadline_end: str
    deadline_start: str
    epic_id: int
    epic_ids: list
    estimate: int
    external_id: str
    external_links: list
    follower_ids_add: list
    follower_ids_remove: list
    group_id: str
    group_ids: list
    includes_description: bool
    iteration_id: int
    iteration_ids: list
    label_ids: list
    label_name: str
    labels_add: list
    labels_remove: list
    move_to: str
    owner_id: str
    owner_ids: list
    owner_ids_add: list
    owner_ids_remove: list
    project_id: int
    project_ids: list
    requested_by_id: str
    story_type: str
    updated_at_end: str
    updated_at_start: str
    workflow_state_id: int
    workflow_state_types: list


class StorySlimUpdateData(TypedDict, total=False):
    after_id: int
    archived: bool
    before_id: int
    completed_at_end: str
    completed_at_start: str
    created_at_end: str
    created_at_start: str
    custom_fields_add: list
    custom_fields_remove: list
    deadline: str
    deadline_end: str
    deadline_start: str
    epic_id: int
    epic_ids: list
    estimate: int
    external_id: str
    external_links: list
    follower_ids_add: list
    follower_ids_remove: list
    group_id: str
    group_ids: list
    includes_description: bool
    iteration_id: int
    iteration_ids: list
    label_ids: list
    label_name: str
    labels_add: list
    labels_remove: list
    move_to: str
    owner_id: str
    owner_ids: list
    owner_ids_add: list
    owner_ids_remove: list
    project_id: int
    project_ids: list
    requested_by_id: str
    stories: list
    story_ids: list
    story_type: str
    updated_at_end: str
    updated_at_start: str
    workflow_state_id: int
    workflow_state_types: list


class TaskRequired(TypedDict):
    complete: bool
    completed_at: str
    created_at: str
    description: str
    entity_type: str
    external_id: str
    global_id: str
    group_mention_ids: list
    id: int
    member_mention_ids: list
    mention_ids: list
    owner_ids: list
    position: int
    story_id: int
    updated_at: str


class Task(TaskRequired, total=False):
    after_id: int
    before_id: int


class TaskLoadMatch(TypedDict):
    id: int
    story_id: int


class TaskCreateDataRequired(TypedDict):
    story_id: int
    complete: bool
    completed_at: str
    created_at: str
    description: str
    entity_type: str
    external_id: str
    global_id: str
    group_mention_ids: list
    id: int
    member_mention_ids: list
    mention_ids: list
    owner_ids: list
    position: int
    updated_at: str


class TaskCreateData(TaskCreateDataRequired, total=False):
    after_id: int
    before_id: int


class TaskUpdateDataRequired(TypedDict):
    id: int
    story_id: int


class TaskUpdateData(TaskUpdateDataRequired, total=False):
    after_id: int
    before_id: int
    complete: bool
    completed_at: str
    created_at: str
    description: str
    entity_type: str
    external_id: str
    global_id: str
    group_mention_ids: list
    member_mention_ids: list
    mention_ids: list
    owner_ids: list
    position: int
    updated_at: str


class TaskRemoveMatch(TypedDict):
    id: int
    story_id: int


class ThreadedComment(TypedDict):
    app_url: str
    author_id: str
    comments: list
    created_at: str
    deleted: bool
    entity_type: str
    external_id: str
    group_mention_ids: list
    id: int
    member_mention_ids: list
    mention_ids: list
    text: str
    updated_at: str


class ThreadedCommentLoadMatch(TypedDict):
    epic_id: int
    id: int


class ThreadedCommentListMatch(TypedDict):
    epic_id: int


class ThreadedCommentCreateDataRequired(TypedDict):
    epic_id: int
    app_url: str
    author_id: str
    comments: list
    created_at: str
    deleted: bool
    entity_type: str
    external_id: str
    group_mention_ids: list
    member_mention_ids: list
    mention_ids: list
    text: str
    updated_at: str


class ThreadedCommentCreateData(ThreadedCommentCreateDataRequired, total=False):
    id: int


class ThreadedCommentUpdateDataRequired(TypedDict):
    epic_id: int
    id: int


class ThreadedCommentUpdateData(ThreadedCommentUpdateDataRequired, total=False):
    app_url: str
    author_id: str
    comments: list
    created_at: str
    deleted: bool
    entity_type: str
    external_id: str
    group_mention_ids: list
    member_mention_ids: list
    mention_ids: list
    text: str
    updated_at: str


class ThreadedCommentRemoveMatch(TypedDict):
    epic_id: int
    id: int


class UploadedFile(TypedDict):
    content_type: str
    created_at: str
    description: str
    entity_type: str
    external_id: str
    filename: str
    group_mention_ids: list
    id: int
    member_mention_ids: list
    mention_ids: list
    name: str
    size: int
    story_ids: list
    thumbnail_url: str
    updated_at: str
    uploader_id: str
    url: str


class UploadedFileLoadMatch(TypedDict):
    id: int


class UploadedFileListMatch(TypedDict, total=False):
    content_type: str
    created_at: str
    description: str
    entity_type: str
    external_id: str
    filename: str
    group_mention_ids: list
    id: int
    member_mention_ids: list
    mention_ids: list
    name: str
    size: int
    story_ids: list
    thumbnail_url: str
    updated_at: str
    uploader_id: str
    url: str


class UploadedFileCreateData(TypedDict):
    content_type: str
    created_at: str
    description: str
    entity_type: str
    external_id: str
    filename: str
    group_mention_ids: list
    id: int
    member_mention_ids: list
    mention_ids: list
    name: str
    size: int
    story_ids: list
    thumbnail_url: str
    updated_at: str
    uploader_id: str
    url: str


class UploadedFileUpdateDataRequired(TypedDict):
    id: int


class UploadedFileUpdateData(UploadedFileUpdateDataRequired, total=False):
    content_type: str
    created_at: str
    description: str
    entity_type: str
    external_id: str
    filename: str
    group_mention_ids: list
    member_mention_ids: list
    mention_ids: list
    name: str
    size: int
    story_ids: list
    thumbnail_url: str
    updated_at: str
    uploader_id: str
    url: str


class UploadedFileRemoveMatch(TypedDict):
    id: int


class WebhookRequired(TypedDict):
    webhook_url: str


class Webhook(WebhookRequired, total=False):
    id: str
    secret: str


class WebhookLoadMatch(TypedDict):
    id: int


class WebhookCreateDataRequired(TypedDict):
    webhook_url: str


class WebhookCreateData(WebhookCreateDataRequired, total=False):
    id: str
    secret: str


class WebhookRemoveMatch(TypedDict):
    id: int


class Workflow(TypedDict):
    auto_assign_owner: bool
    created_at: str
    default_state_id: int
    description: str
    entity_type: str
    id: int
    name: str
    project_ids: list
    states: list
    team_id: int
    updated_at: str


class WorkflowLoadMatch(TypedDict):
    id: int


class WorkflowListMatch(TypedDict, total=False):
    auto_assign_owner: bool
    created_at: str
    default_state_id: int
    description: str
    entity_type: str
    id: int
    name: str
    project_ids: list
    states: list
    team_id: int
    updated_at: str

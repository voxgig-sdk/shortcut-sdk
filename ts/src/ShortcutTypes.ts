// Typed models for the Shortcut SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Bulk {
}

export interface BulkRemoveMatch {
}

export interface Category {
  archived: boolean
  color: string
  created_at: string
  entity_type: string
  external_id: string
  global_id: string
  id: number
  name: string
  type: string
  updated_at: string
}

export interface CategoryLoadMatch {
  id: number
}

export interface CategoryListMatch {
  archived?: boolean
  color?: string
  created_at?: string
  entity_type?: string
  external_id?: string
  global_id?: string
  id?: number
  name?: string
  type?: string
  updated_at?: string
}

export interface CategoryCreateData {
  archived: boolean
  color: string
  created_at: string
  entity_type: string
  external_id: string
  global_id: string
  id: number
  name: string
  type: string
  updated_at: string
}

export interface CategoryUpdateData {
  id: number
  archived?: boolean
  color?: string
  created_at?: string
  entity_type?: string
  external_id?: string
  global_id?: string
  name?: string
  type?: string
  updated_at?: string
}

export interface CategoryRemoveMatch {
  id: number
}

export interface Comment {
}

export interface CommentRemoveMatch {
  id: number
  story_id: number
}

export interface CustomField {
  after_id?: string
  before_id?: string
  canonical_name?: string
  created_at: string
  description?: string
  enabled: boolean
  entity_type: string
  field_type: string
  fixed_position?: boolean
  icon_set_identifier?: string
  id: string
  name: string
  position: number
  story_types?: any[]
  updated_at: string
  values?: any[]
}

export interface CustomFieldLoadMatch {
  id: string
}

export interface CustomFieldListMatch {
  after_id?: string
  before_id?: string
  canonical_name?: string
  created_at?: string
  description?: string
  enabled?: boolean
  entity_type?: string
  field_type?: string
  fixed_position?: boolean
  icon_set_identifier?: string
  id?: string
  name?: string
  position?: number
  story_types?: any[]
  updated_at?: string
  values?: any[]
}

export interface CustomFieldUpdateData {
  id: string
  after_id?: string
  before_id?: string
  canonical_name?: string
  created_at?: string
  description?: string
  enabled?: boolean
  entity_type?: string
  field_type?: string
  fixed_position?: boolean
  icon_set_identifier?: string
  name?: string
  position?: number
  story_types?: any[]
  updated_at?: string
  values?: any[]
}

export interface CustomFieldRemoveMatch {
  id: string
}

export interface Disable {
}

export interface DisableUpdateData {
}

export interface DocSlim {
  app_url: string
  content: string
  id: string
  title: string
}

export interface DocSlimListMatch {
  app_url?: string
  content?: string
  id?: string
  title?: string
}

export interface DocSlimCreateData {
  app_url: string
  content: string
  id: string
  title: string
}

export interface Enable {
}

export interface EnableUpdateData {
}

export interface EntityTemplate {
  author_id?: string
  created_at: string
  custom_fields?: any[]
  deadline?: string
  description?: string
  entity_type?: string
  epic_id?: number
  estimate?: number
  external_links?: any[]
  files?: any[]
  follower_ids?: any[]
  group_id?: string
  id: string
  iteration_id?: number
  label_ids?: any[]
  labels?: any[]
  last_used_at: string
  linked_files?: any[]
  name?: string
  owner_ids?: any[]
  project_id?: number
  story_contents: Record<string, any>
  story_type?: string
  sub_tasks?: any[]
  tasks?: any[]
  updated_at: string
  workflow_state_id?: number
}

export interface EntityTemplateLoadMatch {
  id: string
}

export interface EntityTemplateListMatch {
  author_id?: string
  created_at?: string
  custom_fields?: any[]
  deadline?: string
  description?: string
  entity_type?: string
  epic_id?: number
  estimate?: number
  external_links?: any[]
  files?: any[]
  follower_ids?: any[]
  group_id?: string
  id?: string
  iteration_id?: number
  label_ids?: any[]
  labels?: any[]
  last_used_at?: string
  linked_files?: any[]
  name?: string
  owner_ids?: any[]
  project_id?: number
  story_contents?: Record<string, any>
  story_type?: string
  sub_tasks?: any[]
  tasks?: any[]
  updated_at?: string
  workflow_state_id?: number
}

export interface EntityTemplateCreateData {
  author_id?: string
  created_at: string
  custom_fields?: any[]
  deadline?: string
  description?: string
  entity_type?: string
  epic_id?: number
  estimate?: number
  external_links?: any[]
  files?: any[]
  follower_ids?: any[]
  group_id?: string
  id: string
  iteration_id?: number
  label_ids?: any[]
  labels?: any[]
  last_used_at: string
  linked_files?: any[]
  name?: string
  owner_ids?: any[]
  project_id?: number
  story_contents: Record<string, any>
  story_type?: string
  sub_tasks?: any[]
  tasks?: any[]
  updated_at: string
  workflow_state_id?: number
}

export interface EntityTemplateUpdateData {
  id: string
  author_id?: string
  created_at?: string
  custom_fields?: any[]
  deadline?: string
  description?: string
  entity_type?: string
  epic_id?: number
  estimate?: number
  external_links?: any[]
  files?: any[]
  follower_ids?: any[]
  group_id?: string
  iteration_id?: number
  label_ids?: any[]
  labels?: any[]
  last_used_at?: string
  linked_files?: any[]
  name?: string
  owner_ids?: any[]
  project_id?: number
  story_contents?: Record<string, any>
  story_type?: string
  sub_tasks?: any[]
  tasks?: any[]
  updated_at?: string
  workflow_state_id?: number
}

export interface EntityTemplateRemoveMatch {
  id: string
}

export interface Epic {
  after_id?: number
  app_url: string
  archived: boolean
  associated_groups: any[]
  before_id?: number
  comments: any[]
  completed: boolean
  completed_at: string
  completed_at_override: string
  converted_from_story_id?: number
  created_at: string
  deadline: string
  description: string
  entity_type: string
  epic_state_id: number
  external_id: string
  follower_ids: any[]
  global_id: string
  group_id: string
  group_ids: any[]
  group_mention_ids: any[]
  health: Record<string, any>
  id: number
  label_ids: any[]
  labels: any[]
  member_mention_ids: any[]
  mention_ids: any[]
  milestone_id: number
  name: string
  objective_ids: any[]
  owner_ids: any[]
  planned_start_date: string
  position: number
  productboard_id: string
  productboard_name: string
  productboard_plugin_id: string
  productboard_url: string
  project_ids: any[]
  requested_by_id: string
  started: boolean
  started_at: string
  started_at_override: string
  state: string
  stats: Record<string, any>
  stories_without_projects: number
  updated_at: string
}

export interface EpicLoadMatch {
  id: number
}

export interface EpicListMatch {
  after_id?: number
  app_url?: string
  archived?: boolean
  associated_groups?: any[]
  before_id?: number
  comments?: any[]
  completed?: boolean
  completed_at?: string
  completed_at_override?: string
  converted_from_story_id?: number
  created_at?: string
  deadline?: string
  description?: string
  entity_type?: string
  epic_state_id?: number
  external_id?: string
  follower_ids?: any[]
  global_id?: string
  group_id?: string
  group_ids?: any[]
  group_mention_ids?: any[]
  health?: Record<string, any>
  id?: number
  label_ids?: any[]
  labels?: any[]
  member_mention_ids?: any[]
  mention_ids?: any[]
  milestone_id?: number
  name?: string
  objective_ids?: any[]
  owner_ids?: any[]
  planned_start_date?: string
  position?: number
  productboard_id?: string
  productboard_name?: string
  productboard_plugin_id?: string
  productboard_url?: string
  project_ids?: any[]
  requested_by_id?: string
  started?: boolean
  started_at?: string
  started_at_override?: string
  state?: string
  stats?: Record<string, any>
  stories_without_projects?: number
  updated_at?: string
}

export interface EpicCreateData {
  after_id?: number
  app_url: string
  archived: boolean
  associated_groups: any[]
  before_id?: number
  comments: any[]
  completed: boolean
  completed_at: string
  completed_at_override: string
  converted_from_story_id?: number
  created_at: string
  deadline: string
  description: string
  entity_type: string
  epic_state_id: number
  external_id: string
  follower_ids: any[]
  global_id: string
  group_id: string
  group_ids: any[]
  group_mention_ids: any[]
  health: Record<string, any>
  id: number
  label_ids: any[]
  labels: any[]
  member_mention_ids: any[]
  mention_ids: any[]
  milestone_id: number
  name: string
  objective_ids: any[]
  owner_ids: any[]
  planned_start_date: string
  position: number
  productboard_id: string
  productboard_name: string
  productboard_plugin_id: string
  productboard_url: string
  project_ids: any[]
  requested_by_id: string
  started: boolean
  started_at: string
  started_at_override: string
  state: string
  stats: Record<string, any>
  stories_without_projects: number
  updated_at: string
}

export interface EpicUpdateData {
  id: number
  after_id?: number
  app_url?: string
  archived?: boolean
  associated_groups?: any[]
  before_id?: number
  comments?: any[]
  completed?: boolean
  completed_at?: string
  completed_at_override?: string
  converted_from_story_id?: number
  created_at?: string
  deadline?: string
  description?: string
  entity_type?: string
  epic_state_id?: number
  external_id?: string
  follower_ids?: any[]
  global_id?: string
  group_id?: string
  group_ids?: any[]
  group_mention_ids?: any[]
  health?: Record<string, any>
  label_ids?: any[]
  labels?: any[]
  member_mention_ids?: any[]
  mention_ids?: any[]
  milestone_id?: number
  name?: string
  objective_ids?: any[]
  owner_ids?: any[]
  planned_start_date?: string
  position?: number
  productboard_id?: string
  productboard_name?: string
  productboard_plugin_id?: string
  productboard_url?: string
  project_ids?: any[]
  requested_by_id?: string
  started?: boolean
  started_at?: string
  started_at_override?: string
  state?: string
  stats?: Record<string, any>
  stories_without_projects?: number
  updated_at?: string
}

export interface EpicRemoveMatch {
  id: number
}

export interface EpicPaginatedResult {
  app_url: string
  archived: boolean
  associated_groups: any[]
  completed: boolean
  completed_at: string
  completed_at_override: string
  created_at: string
  deadline: string
  description?: string
  entity_type: string
  epic_state_id: number
  external_id: string
  follower_ids: any[]
  global_id: string
  group_id: string
  group_ids: any[]
  group_mention_ids: any[]
  id: number
  label_ids: any[]
  labels: any[]
  member_mention_ids: any[]
  mention_ids: any[]
  milestone_id: number
  name: string
  objective_ids: any[]
  owner_ids: any[]
  planned_start_date: string
  position: number
  productboard_id: string
  productboard_name: string
  productboard_plugin_id: string
  productboard_url: string
  project_ids: any[]
  requested_by_id: string
  started: boolean
  started_at: string
  started_at_override: string
  state: string
  stats: Record<string, any>
  stories_without_projects: number
  updated_at: string
}

export interface EpicPaginatedResultListMatch {
  app_url?: string
  archived?: boolean
  associated_groups?: any[]
  completed?: boolean
  completed_at?: string
  completed_at_override?: string
  created_at?: string
  deadline?: string
  description?: string
  entity_type?: string
  epic_state_id?: number
  external_id?: string
  follower_ids?: any[]
  global_id?: string
  group_id?: string
  group_ids?: any[]
  group_mention_ids?: any[]
  id?: number
  label_ids?: any[]
  labels?: any[]
  member_mention_ids?: any[]
  mention_ids?: any[]
  milestone_id?: number
  name?: string
  objective_ids?: any[]
  owner_ids?: any[]
  planned_start_date?: string
  position?: number
  productboard_id?: string
  productboard_name?: string
  productboard_plugin_id?: string
  productboard_url?: string
  project_ids?: any[]
  requested_by_id?: string
  started?: boolean
  started_at?: string
  started_at_override?: string
  state?: string
  stats?: Record<string, any>
  stories_without_projects?: number
  updated_at?: string
}

export interface EpicUnlinkProductboard {
}

export interface EpicUnlinkProductboardCreateData {
  id: number
}

export interface EpicWorkflow {
  color?: string
  created_at: string
  description: string
  entity_type: string
  global_id: string
  id: number
  name: string
  position: number
  type: string
  updated_at: string
}

export interface EpicWorkflowListMatch {
  color?: string
  created_at?: string
  description?: string
  entity_type?: string
  global_id?: string
  id?: number
  name?: string
  position?: number
  type?: string
  updated_at?: string
}

export interface Group {
  app_url: string
  archived: boolean
  color: string
  color_key: string
  created_at: string
  default_workflow_id?: number
  description: string
  display_icon: Record<string, any>
  display_icon_id?: string
  entity_type: string
  global_id: string
  id: string
  member_ids: any[]
  mention_name: string
  name: string
  num_epics_started: number
  num_stories: number
  num_stories_backlog: number
  num_stories_started: number
  updated_at: string
  workflow_ids: any[]
}

export interface GroupLoadMatch {
  id: string
}

export interface GroupListMatch {
  app_url?: string
  archived?: boolean
  color?: string
  color_key?: string
  created_at?: string
  default_workflow_id?: number
  description?: string
  display_icon?: Record<string, any>
  display_icon_id?: string
  entity_type?: string
  global_id?: string
  id?: string
  member_ids?: any[]
  mention_name?: string
  name?: string
  num_epics_started?: number
  num_stories?: number
  num_stories_backlog?: number
  num_stories_started?: number
  updated_at?: string
  workflow_ids?: any[]
}

export interface GroupCreateData {
  app_url: string
  archived: boolean
  color: string
  color_key: string
  created_at: string
  default_workflow_id?: number
  description: string
  display_icon: Record<string, any>
  display_icon_id?: string
  entity_type: string
  global_id: string
  id: string
  member_ids: any[]
  mention_name: string
  name: string
  num_epics_started: number
  num_stories: number
  num_stories_backlog: number
  num_stories_started: number
  updated_at: string
  workflow_ids: any[]
}

export interface GroupUpdateData {
  id: string
  app_url?: string
  archived?: boolean
  color?: string
  color_key?: string
  created_at?: string
  default_workflow_id?: number
  description?: string
  display_icon?: Record<string, any>
  display_icon_id?: string
  entity_type?: string
  global_id?: string
  member_ids?: any[]
  mention_name?: string
  name?: string
  num_epics_started?: number
  num_stories?: number
  num_stories_backlog?: number
  num_stories_started?: number
  updated_at?: string
  workflow_ids?: any[]
}

export interface Health {
  author_id?: string
  created_at?: string
  entity_type: string
  epic_id?: number
  id: string
  objective_id?: number
  status: string
  text?: string
  updated_at?: string
}

export interface HealthLoadMatch {
  epic_id: number
}

export interface HealthListMatch {
  epic_id: number
}

export interface HealthCreateData {
  epic_id: number
  author_id?: string
  created_at?: string
  entity_type: string
  id: string
  objective_id?: number
  status: string
  text?: string
  updated_at?: string
}

export interface HealthUpdateData {
  id: string
  author_id?: string
  created_at?: string
  entity_type?: string
  epic_id?: number
  objective_id?: number
  status?: string
  text?: string
  updated_at?: string
}

export interface History {
  actions: any[]
  actor_name?: string
  automation_id?: string
  changed_at: string
  external_id?: string
  id: string
  member_id?: string
  primary_id?: string
  references?: any[]
  version: string
  webhook_id?: string
}

export interface HistoryListMatch {
  story_id: number
}

export interface Iteration {
  app_url: string
  associated_groups: any[]
  created_at: string
  description: string
  end_date: string
  entity_type: string
  follower_ids: any[]
  global_id: string
  group_ids: any[]
  group_mention_ids: any[]
  id: number
  label_ids: any[]
  labels: any[]
  member_mention_ids: any[]
  mention_ids: any[]
  name: string
  start_date: string
  stats: Record<string, any>
  status: string
  updated_at: string
}

export interface IterationLoadMatch {
  id: number
}

export interface IterationListMatch {
  app_url?: string
  associated_groups?: any[]
  created_at?: string
  description?: string
  end_date?: string
  entity_type?: string
  follower_ids?: any[]
  global_id?: string
  group_ids?: any[]
  group_mention_ids?: any[]
  id?: number
  label_ids?: any[]
  labels?: any[]
  member_mention_ids?: any[]
  mention_ids?: any[]
  name?: string
  start_date?: string
  stats?: Record<string, any>
  status?: string
  updated_at?: string
}

export interface IterationCreateData {
  app_url: string
  associated_groups: any[]
  created_at: string
  description: string
  end_date: string
  entity_type: string
  follower_ids: any[]
  global_id: string
  group_ids: any[]
  group_mention_ids: any[]
  id: number
  label_ids: any[]
  labels: any[]
  member_mention_ids: any[]
  mention_ids: any[]
  name: string
  start_date: string
  stats: Record<string, any>
  status: string
  updated_at: string
}

export interface IterationUpdateData {
  id: number
  app_url?: string
  associated_groups?: any[]
  created_at?: string
  description?: string
  end_date?: string
  entity_type?: string
  follower_ids?: any[]
  global_id?: string
  group_ids?: any[]
  group_mention_ids?: any[]
  label_ids?: any[]
  labels?: any[]
  member_mention_ids?: any[]
  mention_ids?: any[]
  name?: string
  start_date?: string
  stats?: Record<string, any>
  status?: string
  updated_at?: string
}

export interface IterationRemoveMatch {
  id: number
}

export interface KeyResult {
  current_observed_value: Record<string, any>
  current_target_value: Record<string, any>
  id: string
  initial_observed_value: Record<string, any>
  name: string
  objective_id: number
  observed_value?: Record<string, any>
  progress: number
  target_value?: Record<string, any>
  type: string
}

export interface KeyResultLoadMatch {
  id: string
}

export interface KeyResultUpdateData {
  id: string
  current_observed_value?: Record<string, any>
  current_target_value?: Record<string, any>
  initial_observed_value?: Record<string, any>
  name?: string
  objective_id?: number
  observed_value?: Record<string, any>
  progress?: number
  target_value?: Record<string, any>
  type?: string
}

export interface Label {
  app_url: string
  archived?: boolean
  color?: string
  created_at: string
  description?: string
  entity_type: string
  external_id?: string
  global_id: string
  id: number
  name: string
  num_epics: number
  num_epics_completed: number
  num_epics_in_progress: number
  num_epics_total: number
  num_epics_unstarted: number
  num_points_backlog: number
  num_points_completed: number
  num_points_in_progress: number
  num_points_total: number
  num_points_unstarted: number
  num_related_documents: number
  num_stories_backlog: number
  num_stories_completed: number
  num_stories_in_progress: number
  num_stories_total: number
  num_stories_unestimated: number
  num_stories_unstarted: number
  stats: Record<string, any>
  updated_at: string
}

export interface LabelLoadMatch {
  id: number
}

export interface LabelListMatch {
  app_url?: string
  archived?: boolean
  color?: string
  created_at?: string
  description?: string
  entity_type?: string
  external_id?: string
  global_id?: string
  id?: number
  name?: string
  num_epics?: number
  num_epics_completed?: number
  num_epics_in_progress?: number
  num_epics_total?: number
  num_epics_unstarted?: number
  num_points_backlog?: number
  num_points_completed?: number
  num_points_in_progress?: number
  num_points_total?: number
  num_points_unstarted?: number
  num_related_documents?: number
  num_stories_backlog?: number
  num_stories_completed?: number
  num_stories_in_progress?: number
  num_stories_total?: number
  num_stories_unestimated?: number
  num_stories_unstarted?: number
  stats?: Record<string, any>
  updated_at?: string
}

export interface LabelCreateData {
  app_url: string
  archived?: boolean
  color?: string
  created_at: string
  description?: string
  entity_type: string
  external_id?: string
  global_id: string
  id: number
  name: string
  num_epics: number
  num_epics_completed: number
  num_epics_in_progress: number
  num_epics_total: number
  num_epics_unstarted: number
  num_points_backlog: number
  num_points_completed: number
  num_points_in_progress: number
  num_points_total: number
  num_points_unstarted: number
  num_related_documents: number
  num_stories_backlog: number
  num_stories_completed: number
  num_stories_in_progress: number
  num_stories_total: number
  num_stories_unestimated: number
  num_stories_unstarted: number
  stats: Record<string, any>
  updated_at: string
}

export interface LabelUpdateData {
  id: number
  app_url?: string
  archived?: boolean
  color?: string
  created_at?: string
  description?: string
  entity_type?: string
  external_id?: string
  global_id?: string
  name?: string
  num_epics?: number
  num_epics_completed?: number
  num_epics_in_progress?: number
  num_epics_total?: number
  num_epics_unstarted?: number
  num_points_backlog?: number
  num_points_completed?: number
  num_points_in_progress?: number
  num_points_total?: number
  num_points_unstarted?: number
  num_related_documents?: number
  num_stories_backlog?: number
  num_stories_completed?: number
  num_stories_in_progress?: number
  num_stories_total?: number
  num_stories_unestimated?: number
  num_stories_unstarted?: number
  stats?: Record<string, any>
  updated_at?: string
}

export interface LabelRemoveMatch {
  id: number
}

export interface LinkedFile {
  content_type: string
  created_at: string
  description: string
  entity_type: string
  group_mention_ids: any[]
  id: number
  member_mention_ids: any[]
  mention_ids: any[]
  name: string
  size: number
  story_id?: number
  story_ids: any[]
  thumbnail_url: string
  type: string
  updated_at: string
  uploader_id: string
  url: string
}

export interface LinkedFileLoadMatch {
  id: number
}

export interface LinkedFileListMatch {
  content_type?: string
  created_at?: string
  description?: string
  entity_type?: string
  group_mention_ids?: any[]
  id?: number
  member_mention_ids?: any[]
  mention_ids?: any[]
  name?: string
  size?: number
  story_id?: number
  story_ids?: any[]
  thumbnail_url?: string
  type?: string
  updated_at?: string
  uploader_id?: string
  url?: string
}

export interface LinkedFileCreateData {
  content_type: string
  created_at: string
  description: string
  entity_type: string
  group_mention_ids: any[]
  id: number
  member_mention_ids: any[]
  mention_ids: any[]
  name: string
  size: number
  story_id?: number
  story_ids: any[]
  thumbnail_url: string
  type: string
  updated_at: string
  uploader_id: string
  url: string
}

export interface LinkedFileUpdateData {
  id: number
  content_type?: string
  created_at?: string
  description?: string
  entity_type?: string
  group_mention_ids?: any[]
  member_mention_ids?: any[]
  mention_ids?: any[]
  name?: string
  size?: number
  story_id?: number
  story_ids?: any[]
  thumbnail_url?: string
  type?: string
  updated_at?: string
  uploader_id?: string
  url?: string
}

export interface LinkedFileRemoveMatch {
  id: number
}

export interface Member {
  created_at: string
  created_without_invite: boolean
  disabled: boolean
  entity_type: string
  global_id: string
  group_ids: any[]
  id: string
  installation_id?: string
  is_owner: boolean
  mention_name: string
  name: string
  organization2: Record<string, any>
  profile: Record<string, any>
  replaced_by?: string
  role: string
  state: string
  updated_at: string
  workspace2: Record<string, any>
}

export interface MemberLoadMatch {
  id: string
}

export interface MemberListMatch {
  created_at?: string
  created_without_invite?: boolean
  disabled?: boolean
  entity_type?: string
  global_id?: string
  group_ids?: any[]
  id?: string
  installation_id?: string
  is_owner?: boolean
  mention_name?: string
  name?: string
  organization2?: Record<string, any>
  profile?: Record<string, any>
  replaced_by?: string
  role?: string
  state?: string
  updated_at?: string
  workspace2?: Record<string, any>
}

export interface Milestone {
  after_id?: number
  app_url: string
  archived: boolean
  before_id?: number
  categories: any[]
  completed: boolean
  completed_at: string
  completed_at_override: string
  created_at: string
  description: string
  entity_type: string
  global_id: string
  id: number
  key_result_ids: any[]
  name: string
  position: number
  started: boolean
  started_at: string
  started_at_override: string
  state: string
  stats: Record<string, any>
  updated_at: string
}

export interface MilestoneLoadMatch {
  id: number
}

export interface MilestoneListMatch {
  after_id?: number
  app_url?: string
  archived?: boolean
  before_id?: number
  categories?: any[]
  completed?: boolean
  completed_at?: string
  completed_at_override?: string
  created_at?: string
  description?: string
  entity_type?: string
  global_id?: string
  id?: number
  key_result_ids?: any[]
  name?: string
  position?: number
  started?: boolean
  started_at?: string
  started_at_override?: string
  state?: string
  stats?: Record<string, any>
  updated_at?: string
}

export interface MilestoneCreateData {
  after_id?: number
  app_url: string
  archived: boolean
  before_id?: number
  categories: any[]
  completed: boolean
  completed_at: string
  completed_at_override: string
  created_at: string
  description: string
  entity_type: string
  global_id: string
  id: number
  key_result_ids: any[]
  name: string
  position: number
  started: boolean
  started_at: string
  started_at_override: string
  state: string
  stats: Record<string, any>
  updated_at: string
}

export interface MilestoneUpdateData {
  id: number
  after_id?: number
  app_url?: string
  archived?: boolean
  before_id?: number
  categories?: any[]
  completed?: boolean
  completed_at?: string
  completed_at_override?: string
  created_at?: string
  description?: string
  entity_type?: string
  global_id?: string
  key_result_ids?: any[]
  name?: string
  position?: number
  started?: boolean
  started_at?: string
  started_at_override?: string
  state?: string
  stats?: Record<string, any>
  updated_at?: string
}

export interface MilestoneRemoveMatch {
  id: number
}

export interface Objectif {
}

export interface ObjectifRemoveMatch {
  id: number
}

export interface Objective {
  after_id?: number
  app_url: string
  archived: boolean
  before_id?: number
  categories: any[]
  completed: boolean
  completed_at: string
  completed_at_override: string
  created_at: string
  description: string
  entity_type: string
  global_id: string
  id: number
  key_result_ids: any[]
  name: string
  position: number
  started: boolean
  started_at: string
  started_at_override: string
  state: string
  stats: Record<string, any>
  updated_at: string
}

export interface ObjectiveLoadMatch {
  objective_public_id: number
}

export interface ObjectiveListMatch {
  after_id?: number
  app_url?: string
  archived?: boolean
  before_id?: number
  categories?: any[]
  completed?: boolean
  completed_at?: string
  completed_at_override?: string
  created_at?: string
  description?: string
  entity_type?: string
  global_id?: string
  id?: number
  key_result_ids?: any[]
  name?: string
  position?: number
  started?: boolean
  started_at?: string
  started_at_override?: string
  state?: string
  stats?: Record<string, any>
  updated_at?: string
}

export interface ObjectiveCreateData {
  after_id?: number
  app_url: string
  archived: boolean
  before_id?: number
  categories: any[]
  completed: boolean
  completed_at: string
  completed_at_override: string
  created_at: string
  description: string
  entity_type: string
  global_id: string
  id: number
  key_result_ids: any[]
  name: string
  position: number
  started: boolean
  started_at: string
  started_at_override: string
  state: string
  stats: Record<string, any>
  updated_at: string
}

export interface ObjectiveUpdateData {
  objective_public_id: number
  after_id?: number
  app_url?: string
  archived?: boolean
  before_id?: number
  categories?: any[]
  completed?: boolean
  completed_at?: string
  completed_at_override?: string
  created_at?: string
  description?: string
  entity_type?: string
  global_id?: string
  id?: number
  key_result_ids?: any[]
  name?: string
  position?: number
  started?: boolean
  started_at?: string
  started_at_override?: string
  state?: string
  stats?: Record<string, any>
  updated_at?: string
}

export interface Project {
  abbreviation: string
  app_url: string
  archived: boolean
  color: string
  created_at: string
  days_to_thermometer: number
  description: string
  entity_type: string
  external_id: string
  follower_ids: any[]
  global_id: string
  id: number
  iteration_length: number
  name: string
  show_thermometer: boolean
  start_time: string
  stats: Record<string, any>
  team_id: number
  updated_at: string
  workflow_id: number
}

export interface ProjectLoadMatch {
  id: number
}

export interface ProjectListMatch {
  abbreviation?: string
  app_url?: string
  archived?: boolean
  color?: string
  created_at?: string
  days_to_thermometer?: number
  description?: string
  entity_type?: string
  external_id?: string
  follower_ids?: any[]
  global_id?: string
  id?: number
  iteration_length?: number
  name?: string
  show_thermometer?: boolean
  start_time?: string
  stats?: Record<string, any>
  team_id?: number
  updated_at?: string
  workflow_id?: number
}

export interface ProjectCreateData {
  abbreviation: string
  app_url: string
  archived: boolean
  color: string
  created_at: string
  days_to_thermometer: number
  description: string
  entity_type: string
  external_id: string
  follower_ids: any[]
  global_id: string
  id: number
  iteration_length: number
  name: string
  show_thermometer: boolean
  start_time: string
  stats: Record<string, any>
  team_id: number
  updated_at: string
  workflow_id: number
}

export interface ProjectUpdateData {
  id: number
  abbreviation?: string
  app_url?: string
  archived?: boolean
  color?: string
  created_at?: string
  days_to_thermometer?: number
  description?: string
  entity_type?: string
  external_id?: string
  follower_ids?: any[]
  global_id?: string
  iteration_length?: number
  name?: string
  show_thermometer?: boolean
  start_time?: string
  stats?: Record<string, any>
  team_id?: number
  updated_at?: string
  workflow_id?: number
}

export interface ProjectRemoveMatch {
  id: number
}

export interface Repository {
  created_at: string
  entity_type: string
  external_id: string
  full_name: string
  id: number
  name: string
  type: string
  updated_at: string
  url: string
}

export interface RepositoryLoadMatch {
  id: number
}

export interface RepositoryListMatch {
  created_at?: string
  entity_type?: string
  external_id?: string
  full_name?: string
  id?: number
  name?: string
  type?: string
  updated_at?: string
  url?: string
}

export interface Search {
  epics: Record<string, any>
  iterations: Record<string, any>
  milestones: Record<string, any>
  stories: Record<string, any>
}

export interface SearchLoadMatch {
  epics?: Record<string, any>
  iterations?: Record<string, any>
  milestones?: Record<string, any>
  stories?: Record<string, any>
}

export interface Story {
  after_id?: number
  app_url: string
  archived: boolean
  before_id?: number
  blocked: boolean
  blocker: boolean
  branch_ids?: any[]
  branches: any[]
  comment_ids?: any[]
  comments: any[]
  commit_ids?: any[]
  commits: any[]
  completed: boolean
  completed_at: string
  completed_at_override: string
  created_at: string
  custom_fields?: any[]
  custom_fields_add?: any[]
  custom_fields_remove?: any[]
  cycle_time?: number
  deadline: string
  description: string
  entity_type: string
  epic_id: number
  estimate: number
  external_id: string
  external_links: any[]
  external_links_add?: any[]
  external_links_remove?: any[]
  file_ids?: any[]
  file_ids_add?: any[]
  file_ids_remove?: any[]
  files: any[]
  follower_ids: any[]
  follower_ids_add?: any[]
  follower_ids_remove?: any[]
  formatted_vcs_branch_name?: string
  global_id: string
  group_id: string
  group_mention_ids: any[]
  id: number
  iteration_id: number
  label_ids: any[]
  labels: any[]
  labels_add?: any[]
  labels_remove?: any[]
  lead_time?: number
  linked_file_ids?: any[]
  linked_file_ids_add?: any[]
  linked_file_ids_remove?: any[]
  linked_files: any[]
  member_mention_ids: any[]
  mention_ids: any[]
  move_to?: string
  moved_at: string
  name: string
  num_tasks_completed?: number
  owner_ids: any[]
  owner_ids_add?: any[]
  owner_ids_remove?: any[]
  parent_story_id?: number
  position: number
  previous_iteration_ids: any[]
  project_id: number
  pull_request_ids?: any[]
  pull_requests: any[]
  requested_by_id: string
  source_task_id?: number
  started: boolean
  started_at: string
  started_at_override: string
  stats: Record<string, any>
  story_links: any[]
  story_template_id: string
  story_type: string
  sub_task_story_ids?: any[]
  sub_tasks?: any[]
  synced_item: Record<string, any>
  task_ids?: any[]
  tasks: any[]
  updated_at: string
  workflow_id: number
  workflow_state_id: number
}

export interface StoryLoadMatch {
  id: number
}

export interface StoryListMatch {
  after_id?: number
  app_url?: string
  archived?: boolean
  before_id?: number
  blocked?: boolean
  blocker?: boolean
  branch_ids?: any[]
  branches?: any[]
  comment_ids?: any[]
  comments?: any[]
  commit_ids?: any[]
  commits?: any[]
  completed?: boolean
  completed_at?: string
  completed_at_override?: string
  created_at?: string
  custom_fields?: any[]
  custom_fields_add?: any[]
  custom_fields_remove?: any[]
  cycle_time?: number
  deadline?: string
  description?: string
  entity_type?: string
  epic_id?: number
  estimate?: number
  external_id?: string
  external_links?: any[]
  external_links_add?: any[]
  external_links_remove?: any[]
  file_ids?: any[]
  file_ids_add?: any[]
  file_ids_remove?: any[]
  files?: any[]
  follower_ids?: any[]
  follower_ids_add?: any[]
  follower_ids_remove?: any[]
  formatted_vcs_branch_name?: string
  global_id?: string
  group_id?: string
  group_mention_ids?: any[]
  id?: number
  iteration_id?: number
  label_ids?: any[]
  labels?: any[]
  labels_add?: any[]
  labels_remove?: any[]
  lead_time?: number
  linked_file_ids?: any[]
  linked_file_ids_add?: any[]
  linked_file_ids_remove?: any[]
  linked_files?: any[]
  member_mention_ids?: any[]
  mention_ids?: any[]
  move_to?: string
  moved_at?: string
  name?: string
  num_tasks_completed?: number
  owner_ids?: any[]
  owner_ids_add?: any[]
  owner_ids_remove?: any[]
  parent_story_id?: number
  position?: number
  previous_iteration_ids?: any[]
  project_id?: number
  pull_request_ids?: any[]
  pull_requests?: any[]
  requested_by_id?: string
  source_task_id?: number
  started?: boolean
  started_at?: string
  started_at_override?: string
  stats?: Record<string, any>
  story_links?: any[]
  story_template_id?: string
  story_type?: string
  sub_task_story_ids?: any[]
  sub_tasks?: any[]
  synced_item?: Record<string, any>
  task_ids?: any[]
  tasks?: any[]
  updated_at?: string
  workflow_id?: number
  workflow_state_id?: number
}

export interface StoryCreateData {
  after_id?: number
  app_url: string
  archived: boolean
  before_id?: number
  blocked: boolean
  blocker: boolean
  branch_ids?: any[]
  branches: any[]
  comment_ids?: any[]
  comments: any[]
  commit_ids?: any[]
  commits: any[]
  completed: boolean
  completed_at: string
  completed_at_override: string
  created_at: string
  custom_fields?: any[]
  custom_fields_add?: any[]
  custom_fields_remove?: any[]
  cycle_time?: number
  deadline: string
  description: string
  entity_type: string
  epic_id: number
  estimate: number
  external_id: string
  external_links: any[]
  external_links_add?: any[]
  external_links_remove?: any[]
  file_ids?: any[]
  file_ids_add?: any[]
  file_ids_remove?: any[]
  files: any[]
  follower_ids: any[]
  follower_ids_add?: any[]
  follower_ids_remove?: any[]
  formatted_vcs_branch_name?: string
  global_id: string
  group_id: string
  group_mention_ids: any[]
  id: number
  iteration_id: number
  label_ids: any[]
  labels: any[]
  labels_add?: any[]
  labels_remove?: any[]
  lead_time?: number
  linked_file_ids?: any[]
  linked_file_ids_add?: any[]
  linked_file_ids_remove?: any[]
  linked_files: any[]
  member_mention_ids: any[]
  mention_ids: any[]
  move_to?: string
  moved_at: string
  name: string
  num_tasks_completed?: number
  owner_ids: any[]
  owner_ids_add?: any[]
  owner_ids_remove?: any[]
  parent_story_id?: number
  position: number
  previous_iteration_ids: any[]
  project_id: number
  pull_request_ids?: any[]
  pull_requests: any[]
  requested_by_id: string
  source_task_id?: number
  started: boolean
  started_at: string
  started_at_override: string
  stats: Record<string, any>
  story_links: any[]
  story_template_id: string
  story_type: string
  sub_task_story_ids?: any[]
  sub_tasks?: any[]
  synced_item: Record<string, any>
  task_ids?: any[]
  tasks: any[]
  updated_at: string
  workflow_id: number
  workflow_state_id: number

  // Selects a custom action instead of the plain create:
  //   'from_template'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface StoryUpdateData {
  id: number
  after_id?: number
  app_url?: string
  archived?: boolean
  before_id?: number
  blocked?: boolean
  blocker?: boolean
  branch_ids?: any[]
  branches?: any[]
  comment_ids?: any[]
  comments?: any[]
  commit_ids?: any[]
  commits?: any[]
  completed?: boolean
  completed_at?: string
  completed_at_override?: string
  created_at?: string
  custom_fields?: any[]
  custom_fields_add?: any[]
  custom_fields_remove?: any[]
  cycle_time?: number
  deadline?: string
  description?: string
  entity_type?: string
  epic_id?: number
  estimate?: number
  external_id?: string
  external_links?: any[]
  external_links_add?: any[]
  external_links_remove?: any[]
  file_ids?: any[]
  file_ids_add?: any[]
  file_ids_remove?: any[]
  files?: any[]
  follower_ids?: any[]
  follower_ids_add?: any[]
  follower_ids_remove?: any[]
  formatted_vcs_branch_name?: string
  global_id?: string
  group_id?: string
  group_mention_ids?: any[]
  iteration_id?: number
  label_ids?: any[]
  labels?: any[]
  labels_add?: any[]
  labels_remove?: any[]
  lead_time?: number
  linked_file_ids?: any[]
  linked_file_ids_add?: any[]
  linked_file_ids_remove?: any[]
  linked_files?: any[]
  member_mention_ids?: any[]
  mention_ids?: any[]
  move_to?: string
  moved_at?: string
  name?: string
  num_tasks_completed?: number
  owner_ids?: any[]
  owner_ids_add?: any[]
  owner_ids_remove?: any[]
  parent_story_id?: number
  position?: number
  previous_iteration_ids?: any[]
  project_id?: number
  pull_request_ids?: any[]
  pull_requests?: any[]
  requested_by_id?: string
  source_task_id?: number
  started?: boolean
  started_at?: string
  started_at_override?: string
  stats?: Record<string, any>
  story_links?: any[]
  story_template_id?: string
  story_type?: string
  sub_task_story_ids?: any[]
  sub_tasks?: any[]
  synced_item?: Record<string, any>
  task_ids?: any[]
  tasks?: any[]
  updated_at?: string
  workflow_id?: number
  workflow_state_id?: number
}

export interface StoryRemoveMatch {
  id: number
}

export interface StoryComment {
  app_url: string
  author_id: string
  blocker?: boolean
  created_at: string
  deleted: boolean
  entity_type: string
  external_id: string
  group_mention_ids: any[]
  id: number
  linked_to_slack: boolean
  member_mention_ids: any[]
  mention_ids: any[]
  parent_id?: number
  position: number
  reactions: any[]
  story_id: number
  text: string
  unblocks_parent?: boolean
  updated_at: string
}

export interface StoryCommentLoadMatch {
  id: number
  story_id: number
}

export interface StoryCommentListMatch {
  id: number
}

export interface StoryCommentCreateData {
  id: number
  app_url: string
  author_id: string
  blocker?: boolean
  created_at: string
  deleted: boolean
  entity_type: string
  external_id: string
  group_mention_ids: any[]
  linked_to_slack: boolean
  member_mention_ids: any[]
  mention_ids: any[]
  parent_id?: number
  position: number
  reactions: any[]
  story_id: number
  text: string
  unblocks_parent?: boolean
  updated_at: string
}

export interface StoryCommentUpdateData {
  id: number
  story_id: number
  app_url?: string
  author_id?: string
  blocker?: boolean
  created_at?: string
  deleted?: boolean
  entity_type?: string
  external_id?: string
  group_mention_ids?: any[]
  linked_to_slack?: boolean
  member_mention_ids?: any[]
  mention_ids?: any[]
  parent_id?: number
  position?: number
  reactions?: any[]
  text?: string
  unblocks_parent?: boolean
  updated_at?: string
}

export interface StoryLink {
  created_at: string
  entity_type: string
  id: number
  object_id: number
  subject_id: number
  subject_workflow_state_id: number
  updated_at: string
  verb: string
}

export interface StoryLinkLoadMatch {
  id: number
}

export interface StoryLinkCreateData {
  created_at: string
  entity_type: string
  id: number
  object_id: number
  subject_id: number
  subject_workflow_state_id: number
  updated_at: string
  verb: string
}

export interface StoryLinkUpdateData {
  id: number
  created_at?: string
  entity_type?: string
  object_id?: number
  subject_id?: number
  subject_workflow_state_id?: number
  updated_at?: string
  verb?: string
}

export interface StoryLinkRemoveMatch {
  id: number
}

export interface StoryReaction {
  emoji: string
}

export interface StoryReactionCreateData {
  comment_id: number
  story_id: number
  emoji: string
}

export interface StoryReactionRemoveMatch {
  comment_id: number
  story_id: number
}

export interface StorySlim {
  after_id?: number
  archived?: boolean
  before_id?: number
  completed_at_end?: string
  completed_at_start?: string
  created_at_end?: string
  created_at_start?: string
  custom_fields_add?: any[]
  custom_fields_remove?: any[]
  deadline?: string
  deadline_end?: string
  deadline_start?: string
  epic_id?: number
  epic_ids?: any[]
  estimate?: number
  external_id?: string
  external_links?: any[]
  follower_ids_add?: any[]
  follower_ids_remove?: any[]
  group_id?: string
  group_ids?: any[]
  includes_description?: boolean
  iteration_id?: number
  iteration_ids?: any[]
  label_ids?: any[]
  label_name?: string
  labels_add?: any[]
  labels_remove?: any[]
  move_to?: string
  owner_id?: string
  owner_ids?: any[]
  owner_ids_add?: any[]
  owner_ids_remove?: any[]
  project_id?: number
  project_ids?: any[]
  requested_by_id?: string
  stories: any[]
  story_ids: any[]
  story_type?: string
  updated_at_end?: string
  updated_at_start?: string
  workflow_state_id?: number
  workflow_state_types?: any[]
}

export interface StorySlimCreateData {
  after_id?: number
  archived?: boolean
  before_id?: number
  completed_at_end?: string
  completed_at_start?: string
  created_at_end?: string
  created_at_start?: string
  custom_fields_add?: any[]
  custom_fields_remove?: any[]
  deadline?: string
  deadline_end?: string
  deadline_start?: string
  epic_id?: number
  epic_ids?: any[]
  estimate?: number
  external_id?: string
  external_links?: any[]
  follower_ids_add?: any[]
  follower_ids_remove?: any[]
  group_id?: string
  group_ids?: any[]
  includes_description?: boolean
  iteration_id?: number
  iteration_ids?: any[]
  label_ids?: any[]
  label_name?: string
  labels_add?: any[]
  labels_remove?: any[]
  move_to?: string
  owner_id?: string
  owner_ids?: any[]
  owner_ids_add?: any[]
  owner_ids_remove?: any[]
  project_id?: number
  project_ids?: any[]
  requested_by_id?: string
  stories: any[]
  story_ids: any[]
  story_type?: string
  updated_at_end?: string
  updated_at_start?: string
  workflow_state_id?: number
  workflow_state_types?: any[]
}

export interface StorySlimUpdateData {
  after_id?: number
  archived?: boolean
  before_id?: number
  completed_at_end?: string
  completed_at_start?: string
  created_at_end?: string
  created_at_start?: string
  custom_fields_add?: any[]
  custom_fields_remove?: any[]
  deadline?: string
  deadline_end?: string
  deadline_start?: string
  epic_id?: number
  epic_ids?: any[]
  estimate?: number
  external_id?: string
  external_links?: any[]
  follower_ids_add?: any[]
  follower_ids_remove?: any[]
  group_id?: string
  group_ids?: any[]
  includes_description?: boolean
  iteration_id?: number
  iteration_ids?: any[]
  label_ids?: any[]
  label_name?: string
  labels_add?: any[]
  labels_remove?: any[]
  move_to?: string
  owner_id?: string
  owner_ids?: any[]
  owner_ids_add?: any[]
  owner_ids_remove?: any[]
  project_id?: number
  project_ids?: any[]
  requested_by_id?: string
  stories?: any[]
  story_ids?: any[]
  story_type?: string
  updated_at_end?: string
  updated_at_start?: string
  workflow_state_id?: number
  workflow_state_types?: any[]
}

export interface Task {
  after_id?: number
  before_id?: number
  complete: boolean
  completed_at: string
  created_at: string
  description: string
  entity_type: string
  external_id: string
  global_id: string
  group_mention_ids: any[]
  id: number
  member_mention_ids: any[]
  mention_ids: any[]
  owner_ids: any[]
  position: number
  story_id: number
  updated_at: string
}

export interface TaskLoadMatch {
  id: number
  story_id: number
}

export interface TaskCreateData {
  story_id: number
  after_id?: number
  before_id?: number
  complete: boolean
  completed_at: string
  created_at: string
  description: string
  entity_type: string
  external_id: string
  global_id: string
  group_mention_ids: any[]
  id: number
  member_mention_ids: any[]
  mention_ids: any[]
  owner_ids: any[]
  position: number
  updated_at: string
}

export interface TaskUpdateData {
  id: number
  story_id: number
  after_id?: number
  before_id?: number
  complete?: boolean
  completed_at?: string
  created_at?: string
  description?: string
  entity_type?: string
  external_id?: string
  global_id?: string
  group_mention_ids?: any[]
  member_mention_ids?: any[]
  mention_ids?: any[]
  owner_ids?: any[]
  position?: number
  updated_at?: string
}

export interface TaskRemoveMatch {
  id: number
  story_id: number
}

export interface ThreadedComment {
  app_url: string
  author_id: string
  comments: any[]
  created_at: string
  deleted: boolean
  entity_type: string
  external_id: string
  group_mention_ids: any[]
  id: number
  member_mention_ids: any[]
  mention_ids: any[]
  text: string
  updated_at: string
}

export interface ThreadedCommentLoadMatch {
  epic_id: number
  id: number
}

export interface ThreadedCommentListMatch {
  epic_id: number
}

export interface ThreadedCommentCreateData {
  epic_id: number
  id?: number
  app_url: string
  author_id: string
  comments: any[]
  created_at: string
  deleted: boolean
  entity_type: string
  external_id: string
  group_mention_ids: any[]
  member_mention_ids: any[]
  mention_ids: any[]
  text: string
  updated_at: string
}

export interface ThreadedCommentUpdateData {
  epic_id: number
  id: number
  app_url?: string
  author_id?: string
  comments?: any[]
  created_at?: string
  deleted?: boolean
  entity_type?: string
  external_id?: string
  group_mention_ids?: any[]
  member_mention_ids?: any[]
  mention_ids?: any[]
  text?: string
  updated_at?: string
}

export interface ThreadedCommentRemoveMatch {
  epic_id: number
  id: number
}

export interface UploadedFile {
  content_type: string
  created_at: string
  description: string
  entity_type: string
  external_id: string
  filename: string
  group_mention_ids: any[]
  id: number
  member_mention_ids: any[]
  mention_ids: any[]
  name: string
  size: number
  story_ids: any[]
  thumbnail_url: string
  updated_at: string
  uploader_id: string
  url: string
}

export interface UploadedFileLoadMatch {
  id: number
}

export interface UploadedFileListMatch {
  content_type?: string
  created_at?: string
  description?: string
  entity_type?: string
  external_id?: string
  filename?: string
  group_mention_ids?: any[]
  id?: number
  member_mention_ids?: any[]
  mention_ids?: any[]
  name?: string
  size?: number
  story_ids?: any[]
  thumbnail_url?: string
  updated_at?: string
  uploader_id?: string
  url?: string
}

export interface UploadedFileCreateData {
  content_type: string
  created_at: string
  description: string
  entity_type: string
  external_id: string
  filename: string
  group_mention_ids: any[]
  id: number
  member_mention_ids: any[]
  mention_ids: any[]
  name: string
  size: number
  story_ids: any[]
  thumbnail_url: string
  updated_at: string
  uploader_id: string
  url: string
}

export interface UploadedFileUpdateData {
  id: number
  content_type?: string
  created_at?: string
  description?: string
  entity_type?: string
  external_id?: string
  filename?: string
  group_mention_ids?: any[]
  member_mention_ids?: any[]
  mention_ids?: any[]
  name?: string
  size?: number
  story_ids?: any[]
  thumbnail_url?: string
  updated_at?: string
  uploader_id?: string
  url?: string
}

export interface UploadedFileRemoveMatch {
  id: number
}

export interface Webhook {
  secret?: string
  webhook_url: string
}

export interface WebhookLoadMatch {
  id: number
}

export interface WebhookCreateData {
  secret?: string
  webhook_url: string
}

export interface WebhookRemoveMatch {
  id: number
}

export interface Workflow {
  auto_assign_owner: boolean
  created_at: string
  default_state_id: number
  description: string
  entity_type: string
  id: number
  name: string
  project_ids: any[]
  states: any[]
  team_id: number
  updated_at: string
}

export interface WorkflowLoadMatch {
  id: number
}

export interface WorkflowListMatch {
  auto_assign_owner?: boolean
  created_at?: string
  default_state_id?: number
  description?: string
  entity_type?: string
  id?: number
  name?: string
  project_ids?: any[]
  states?: any[]
  team_id?: number
  updated_at?: string
}


package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewBulkEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewCategoryEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewCommentEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewCustomFieldEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewDisableEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewDocSlimEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewEnableEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewEntityTemplateEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewEpicEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewEpicPaginatedResultEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewEpicUnlinkProductboardEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewEpicWorkflowEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewGroupEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewHealthEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewHistoryEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewIterationEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewKeyResultEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewLabelEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewLinkedFileEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewMemberEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewMilestoneEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewObjectifEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewObjectiveEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewProjectEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewRepositoryEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewSearchEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewStoryEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewStoryCommentEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewStoryLinkEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewStoryReactionEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewStorySlimEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewTaskEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewThreadedCommentEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewUploadedFileEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewWebhookEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity

var NewWorkflowEntityFunc func(client *ShortcutSDK, entopts map[string]any) ShortcutEntity


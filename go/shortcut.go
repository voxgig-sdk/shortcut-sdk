package voxgigshortcutsdk

import (
	"github.com/voxgig-sdk/shortcut-sdk/go/core"
	"github.com/voxgig-sdk/shortcut-sdk/go/entity"
	"github.com/voxgig-sdk/shortcut-sdk/go/feature"
	_ "github.com/voxgig-sdk/shortcut-sdk/go/utility"
)

// Type aliases preserve external API.
type ShortcutSDK = core.ShortcutSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ShortcutEntity = core.ShortcutEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ShortcutError = core.ShortcutError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewBulkEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewBulkEntity(client, entopts)
	}
	core.NewCategoryEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewCategoryEntity(client, entopts)
	}
	core.NewCommentEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewCommentEntity(client, entopts)
	}
	core.NewCustomFieldEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewCustomFieldEntity(client, entopts)
	}
	core.NewDisableEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewDisableEntity(client, entopts)
	}
	core.NewDocSlimEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewDocSlimEntity(client, entopts)
	}
	core.NewEnableEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewEnableEntity(client, entopts)
	}
	core.NewEntityTemplateEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewEntityTemplateEntity(client, entopts)
	}
	core.NewEpicEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewEpicEntity(client, entopts)
	}
	core.NewEpicPaginatedResultEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewEpicPaginatedResultEntity(client, entopts)
	}
	core.NewEpicUnlinkProductboardEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewEpicUnlinkProductboardEntity(client, entopts)
	}
	core.NewEpicWorkflowEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewEpicWorkflowEntity(client, entopts)
	}
	core.NewGroupEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewGroupEntity(client, entopts)
	}
	core.NewHealthEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewHealthEntity(client, entopts)
	}
	core.NewHistoryEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewHistoryEntity(client, entopts)
	}
	core.NewIterationEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewIterationEntity(client, entopts)
	}
	core.NewKeyResultEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewKeyResultEntity(client, entopts)
	}
	core.NewLabelEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewLabelEntity(client, entopts)
	}
	core.NewLinkedFileEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewLinkedFileEntity(client, entopts)
	}
	core.NewMemberEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewMemberEntity(client, entopts)
	}
	core.NewMilestoneEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewMilestoneEntity(client, entopts)
	}
	core.NewObjectifEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewObjectifEntity(client, entopts)
	}
	core.NewObjectiveEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewObjectiveEntity(client, entopts)
	}
	core.NewProjectEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewProjectEntity(client, entopts)
	}
	core.NewRepositoryEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewRepositoryEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewSearchEntity(client, entopts)
	}
	core.NewStoryEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewStoryEntity(client, entopts)
	}
	core.NewStoryCommentEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewStoryCommentEntity(client, entopts)
	}
	core.NewStoryLinkEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewStoryLinkEntity(client, entopts)
	}
	core.NewStoryReactionEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewStoryReactionEntity(client, entopts)
	}
	core.NewStorySlimEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewStorySlimEntity(client, entopts)
	}
	core.NewTaskEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewTaskEntity(client, entopts)
	}
	core.NewThreadedCommentEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewThreadedCommentEntity(client, entopts)
	}
	core.NewUploadedFileEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewUploadedFileEntity(client, entopts)
	}
	core.NewWebhookEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewWebhookEntity(client, entopts)
	}
	core.NewWorkflowEntityFunc = func(client *core.ShortcutSDK, entopts map[string]any) core.ShortcutEntity {
		return entity.NewWorkflowEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewShortcutSDK = core.NewShortcutSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewShortcutSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *ShortcutSDK  { return NewShortcutSDK(nil) }
func Test() *ShortcutSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/shortcut-sdk/go"
	"github.com/voxgig-sdk/shortcut-sdk/go/core"

	vs "github.com/voxgig-sdk/shortcut-sdk/go/utility/struct"
)

func TestStoryCommentEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.StoryComment(nil)
		if ent == nil {
			t.Fatal("expected non-nil StoryCommentEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"story_comment": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.StoryComment(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.StoryComment(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := story_commentBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "story_comment." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_STORY_COMMENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		storyCommentRef01Ent := client.StoryComment(nil)
		storyCommentRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "story_comment"}, setup.data), "story_comment_ref01"))
		storyCommentRef01Data["story-public-id"] = setup.idmap["story-public-id01"]
		storyCommentRef01Data["story_id"] = setup.idmap["story01"]

		storyCommentRef01DataResult, err := storyCommentRef01Ent.Create(storyCommentRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		storyCommentRef01Data = core.ToMapAny(entityData(storyCommentRef01DataResult))
		if storyCommentRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if storyCommentRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		storyCommentRef01Match := map[string]any{
			"story-public-id": setup.idmap["story-public-id01"],
		}

		storyCommentRef01ListResult, err := storyCommentRef01Ent.List(storyCommentRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		storyCommentRef01List, storyCommentRef01ListOk := storyCommentRef01ListResult.([]any)
		if !storyCommentRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", storyCommentRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(storyCommentRef01List), map[string]any{"id": storyCommentRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		storyCommentRef01DataUp0Up := map[string]any{
			"id": storyCommentRef01Data["id"],
			"story_id": setup.idmap["story_id"],
		}

		storyCommentRef01MarkdefUp0Name := "app_url"
		storyCommentRef01MarkdefUp0Value := fmt.Sprintf("Mark01-story_comment_ref01_%d", setup.now)
		storyCommentRef01DataUp0Up[storyCommentRef01MarkdefUp0Name] = storyCommentRef01MarkdefUp0Value

		storyCommentRef01ResdataUp0Result, err := storyCommentRef01Ent.Update(storyCommentRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		storyCommentRef01ResdataUp0 := core.ToMapAny(entityData(storyCommentRef01ResdataUp0Result))
		if storyCommentRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if storyCommentRef01ResdataUp0["id"] != storyCommentRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if storyCommentRef01ResdataUp0[storyCommentRef01MarkdefUp0Name] != storyCommentRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", storyCommentRef01MarkdefUp0Name, storyCommentRef01ResdataUp0[storyCommentRef01MarkdefUp0Name])
		}

		// LOAD
		storyCommentRef01MatchDt0 := map[string]any{
			"id": storyCommentRef01Data["id"],
		}
		storyCommentRef01DataDt0Loaded, err := storyCommentRef01Ent.Load(storyCommentRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		storyCommentRef01DataDt0LoadResult := core.ToMapAny(entityData(storyCommentRef01DataDt0Loaded))
		if storyCommentRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if storyCommentRef01DataDt0LoadResult["id"] != storyCommentRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func story_commentBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "story_comment", "StoryCommentTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read story_comment test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse story_comment test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"story_comment01", "story_comment02", "story_comment03", "story01", "story02", "story03", "comment01", "comment02", "comment03", "story-public-id01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("SHORTCUT_TEST_STORY_COMMENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SHORTCUT_TEST_STORY_COMMENT_ENTID": idmap,
		"SHORTCUT_TEST_LIVE":      "FALSE",
		"SHORTCUT_TEST_EXPLAIN":   "FALSE",
		"SHORTCUT_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["SHORTCUT_TEST_STORY_COMMENT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add story_id alias for update test.
	if idmapResolved["story_id"] == nil {
		idmapResolved["story_id"] = idmapResolved["story01"]
	}

	if env["SHORTCUT_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["SHORTCUT_APIKEY"],
			},
			extra,
		})
		client = sdk.NewShortcutSDK(core.ToMapAny(mergedOpts))
	}

	live := env["SHORTCUT_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["SHORTCUT_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}

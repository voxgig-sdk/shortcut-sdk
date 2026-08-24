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

func TestStoryEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Story(nil)
		if ent == nil {
			t.Fatal("expected non-nil StoryEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"story": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Story(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.MakeConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.Story(nil).Stream("list", nil, nil) {
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
		setup := storyBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "story." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_STORY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		storyRef01Ent := client.Story(nil)
		storyRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "story"}, setup.data), "story_ref01"))
		storyRef01Data["epic_id"] = setup.idmap["epic01"]
		storyRef01Data["group_id"] = setup.idmap["group01"]
		storyRef01Data["iteration_id"] = setup.idmap["iteration01"]
		storyRef01Data["label_id"] = setup.idmap["label01"]
		storyRef01Data["project_id"] = setup.idmap["project01"]

		storyRef01DataResult, err := storyRef01Ent.Create(storyRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		storyRef01Data = core.ToMapAny(storyRef01DataResult)
		if storyRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if storyRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		storyRef01Match := map[string]any{}

		storyRef01ListResult, err := storyRef01Ent.List(storyRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		storyRef01List, storyRef01ListOk := storyRef01ListResult.([]any)
		if !storyRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", storyRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(storyRef01List), map[string]any{"id": storyRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		storyRef01DataUp0Up := map[string]any{
			"id": storyRef01Data["id"],
		}

		storyRef01MarkdefUp0Name := "app_url"
		storyRef01MarkdefUp0Value := fmt.Sprintf("Mark01-story_ref01_%d", setup.now)
		storyRef01DataUp0Up[storyRef01MarkdefUp0Name] = storyRef01MarkdefUp0Value

		storyRef01ResdataUp0Result, err := storyRef01Ent.Update(storyRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		storyRef01ResdataUp0 := core.ToMapAny(storyRef01ResdataUp0Result)
		if storyRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if storyRef01ResdataUp0["id"] != storyRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if storyRef01ResdataUp0[storyRef01MarkdefUp0Name] != storyRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", storyRef01MarkdefUp0Name, storyRef01ResdataUp0[storyRef01MarkdefUp0Name])
		}

		// LOAD
		storyRef01MatchDt0 := map[string]any{
			"id": storyRef01Data["id"],
		}
		storyRef01DataDt0Loaded, err := storyRef01Ent.Load(storyRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		storyRef01DataDt0LoadResult := core.ToMapAny(storyRef01DataDt0Loaded)
		if storyRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if storyRef01DataDt0LoadResult["id"] != storyRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		storyRef01MatchRm0 := map[string]any{
			"id": storyRef01Data["id"],
		}
		_, err = storyRef01Ent.Remove(storyRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		storyRef01MatchRt0 := map[string]any{}

		storyRef01ListRt0Result, err := storyRef01Ent.List(storyRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		storyRef01ListRt0, storyRef01ListRt0Ok := storyRef01ListRt0Result.([]any)
		if !storyRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", storyRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(storyRef01ListRt0), map[string]any{"id": storyRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func storyBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "story", "StoryTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read story test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse story test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"story01", "story02", "story03", "epic01", "epic02", "epic03", "group01", "group02", "group03", "iteration01", "iteration02", "iteration03", "label01", "label02", "label03", "project01", "project02", "project03"},
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
	entidEnvRaw := os.Getenv("SHORTCUT_TEST_STORY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SHORTCUT_TEST_STORY_ENTID": idmap,
		"SHORTCUT_TEST_LIVE":      "FALSE",
		"SHORTCUT_TEST_EXPLAIN":   "FALSE",
		"SHORTCUT_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["SHORTCUT_TEST_STORY_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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

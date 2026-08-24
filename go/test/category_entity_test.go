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

func TestCategoryEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Category(nil)
		if ent == nil {
			t.Fatal("expected non-nil CategoryEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"category": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Category(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Category(nil).Stream("list", nil, nil) {
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
		setup := categoryBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "category." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_CATEGORY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		categoryRef01Ent := client.Category(nil)
		categoryRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "category"}, setup.data), "category_ref01"))

		categoryRef01DataResult, err := categoryRef01Ent.Create(categoryRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		categoryRef01Data = core.ToMapAny(entityData(categoryRef01DataResult))
		if categoryRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if categoryRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		categoryRef01Match := map[string]any{}

		categoryRef01ListResult, err := categoryRef01Ent.List(categoryRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		categoryRef01List, categoryRef01ListOk := categoryRef01ListResult.([]any)
		if !categoryRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", categoryRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(categoryRef01List), map[string]any{"id": categoryRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		categoryRef01DataUp0Up := map[string]any{
			"id": categoryRef01Data["id"],
		}

		categoryRef01MarkdefUp0Name := "color"
		categoryRef01MarkdefUp0Value := fmt.Sprintf("Mark01-category_ref01_%d", setup.now)
		categoryRef01DataUp0Up[categoryRef01MarkdefUp0Name] = categoryRef01MarkdefUp0Value

		categoryRef01ResdataUp0Result, err := categoryRef01Ent.Update(categoryRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		categoryRef01ResdataUp0 := core.ToMapAny(entityData(categoryRef01ResdataUp0Result))
		if categoryRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if categoryRef01ResdataUp0["id"] != categoryRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if categoryRef01ResdataUp0[categoryRef01MarkdefUp0Name] != categoryRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", categoryRef01MarkdefUp0Name, categoryRef01ResdataUp0[categoryRef01MarkdefUp0Name])
		}

		// LOAD
		categoryRef01MatchDt0 := map[string]any{
			"id": categoryRef01Data["id"],
		}
		categoryRef01DataDt0Loaded, err := categoryRef01Ent.Load(categoryRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		categoryRef01DataDt0LoadResult := core.ToMapAny(entityData(categoryRef01DataDt0Loaded))
		if categoryRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if categoryRef01DataDt0LoadResult["id"] != categoryRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		categoryRef01MatchRm0 := map[string]any{
			"id": categoryRef01Data["id"],
		}
		_, err = categoryRef01Ent.Remove(categoryRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		categoryRef01MatchRt0 := map[string]any{}

		categoryRef01ListRt0Result, err := categoryRef01Ent.List(categoryRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		categoryRef01ListRt0, categoryRef01ListRt0Ok := categoryRef01ListRt0Result.([]any)
		if !categoryRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", categoryRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(categoryRef01ListRt0), map[string]any{"id": categoryRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func categoryBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "category", "CategoryTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read category test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse category test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"category01", "category02", "category03"},
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
	entidEnvRaw := os.Getenv("SHORTCUT_TEST_CATEGORY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SHORTCUT_TEST_CATEGORY_ENTID": idmap,
		"SHORTCUT_TEST_LIVE":      "FALSE",
		"SHORTCUT_TEST_EXPLAIN":   "FALSE",
		"SHORTCUT_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["SHORTCUT_TEST_CATEGORY_ENTID"])
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

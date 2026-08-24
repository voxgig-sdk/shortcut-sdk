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

func TestMilestoneEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Milestone(nil)
		if ent == nil {
			t.Fatal("expected non-nil MilestoneEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"milestone": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Milestone(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Milestone(nil).Stream("list", nil, nil) {
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
		setup := milestoneBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "milestone." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_MILESTONE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		milestoneRef01Ent := client.Milestone(nil)
		milestoneRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "milestone"}, setup.data), "milestone_ref01"))
		milestoneRef01Data["category_id"] = setup.idmap["category01"]

		milestoneRef01DataResult, err := milestoneRef01Ent.Create(milestoneRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		milestoneRef01Data = core.ToMapAny(milestoneRef01DataResult)
		if milestoneRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if milestoneRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		milestoneRef01Match := map[string]any{}

		milestoneRef01ListResult, err := milestoneRef01Ent.List(milestoneRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		milestoneRef01List, milestoneRef01ListOk := milestoneRef01ListResult.([]any)
		if !milestoneRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", milestoneRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(milestoneRef01List), map[string]any{"id": milestoneRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		milestoneRef01DataUp0Up := map[string]any{
			"id": milestoneRef01Data["id"],
		}

		milestoneRef01MarkdefUp0Name := "app_url"
		milestoneRef01MarkdefUp0Value := fmt.Sprintf("Mark01-milestone_ref01_%d", setup.now)
		milestoneRef01DataUp0Up[milestoneRef01MarkdefUp0Name] = milestoneRef01MarkdefUp0Value

		milestoneRef01ResdataUp0Result, err := milestoneRef01Ent.Update(milestoneRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		milestoneRef01ResdataUp0 := core.ToMapAny(milestoneRef01ResdataUp0Result)
		if milestoneRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if milestoneRef01ResdataUp0["id"] != milestoneRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if milestoneRef01ResdataUp0[milestoneRef01MarkdefUp0Name] != milestoneRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", milestoneRef01MarkdefUp0Name, milestoneRef01ResdataUp0[milestoneRef01MarkdefUp0Name])
		}

		// LOAD
		milestoneRef01MatchDt0 := map[string]any{
			"id": milestoneRef01Data["id"],
		}
		milestoneRef01DataDt0Loaded, err := milestoneRef01Ent.Load(milestoneRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		milestoneRef01DataDt0LoadResult := core.ToMapAny(milestoneRef01DataDt0Loaded)
		if milestoneRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if milestoneRef01DataDt0LoadResult["id"] != milestoneRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		milestoneRef01MatchRm0 := map[string]any{
			"id": milestoneRef01Data["id"],
		}
		_, err = milestoneRef01Ent.Remove(milestoneRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		milestoneRef01MatchRt0 := map[string]any{}

		milestoneRef01ListRt0Result, err := milestoneRef01Ent.List(milestoneRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		milestoneRef01ListRt0, milestoneRef01ListRt0Ok := milestoneRef01ListRt0Result.([]any)
		if !milestoneRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", milestoneRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(milestoneRef01ListRt0), map[string]any{"id": milestoneRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func milestoneBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "milestone", "MilestoneTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read milestone test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse milestone test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"milestone01", "milestone02", "milestone03", "category01", "category02", "category03"},
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
	entidEnvRaw := os.Getenv("SHORTCUT_TEST_MILESTONE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SHORTCUT_TEST_MILESTONE_ENTID": idmap,
		"SHORTCUT_TEST_LIVE":      "FALSE",
		"SHORTCUT_TEST_EXPLAIN":   "FALSE",
		"SHORTCUT_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["SHORTCUT_TEST_MILESTONE_ENTID"])
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

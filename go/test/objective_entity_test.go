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

func TestObjectiveEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Objective(nil)
		if ent == nil {
			t.Fatal("expected non-nil ObjectiveEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"objective": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Objective(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Objective(nil).Stream("list", nil, nil) {
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
		setup := objectiveBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "objective." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_OBJECTIVE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		objectiveRef01Ent := client.Objective(nil)
		objectiveRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "objective"}), "objective_ref01"))

		objectiveRef01DataResult, err := objectiveRef01Ent.Create(objectiveRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		objectiveRef01Data = core.ToMapAny(entityData(objectiveRef01DataResult))
		if objectiveRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if objectiveRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		objectiveRef01Match := map[string]any{}

		objectiveRef01ListResult, err := objectiveRef01Ent.List(objectiveRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		objectiveRef01List, objectiveRef01ListOk := objectiveRef01ListResult.([]any)
		if !objectiveRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", objectiveRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(objectiveRef01List), map[string]any{"id": objectiveRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		objectiveRef01DataUp0Up := map[string]any{
			"id": objectiveRef01Data["id"],
		}

		objectiveRef01MarkdefUp0Name := "app_url"
		objectiveRef01MarkdefUp0Value := fmt.Sprintf("Mark01-objective_ref01_%d", setup.now)
		objectiveRef01DataUp0Up[objectiveRef01MarkdefUp0Name] = objectiveRef01MarkdefUp0Value

		objectiveRef01ResdataUp0Result, err := objectiveRef01Ent.Update(objectiveRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		objectiveRef01ResdataUp0 := core.ToMapAny(entityData(objectiveRef01ResdataUp0Result))
		if objectiveRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if objectiveRef01ResdataUp0["id"] != objectiveRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if objectiveRef01ResdataUp0[objectiveRef01MarkdefUp0Name] != objectiveRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", objectiveRef01MarkdefUp0Name, objectiveRef01ResdataUp0[objectiveRef01MarkdefUp0Name])
		}

		// LOAD
		objectiveRef01MatchDt0 := map[string]any{
			"id": objectiveRef01Data["id"],
		}
		objectiveRef01DataDt0Loaded, err := objectiveRef01Ent.Load(objectiveRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		objectiveRef01DataDt0LoadResult := core.ToMapAny(entityData(objectiveRef01DataDt0Loaded))
		if objectiveRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if objectiveRef01DataDt0LoadResult["id"] != objectiveRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func objectiveBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "objective", "ObjectiveTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read objective test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse objective test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"objective01", "objective02", "objective03", "objectif01", "objectif02", "objectif03"},
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
	entidEnvRaw := os.Getenv("SHORTCUT_TEST_OBJECTIVE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SHORTCUT_TEST_OBJECTIVE_ENTID": idmap,
		"SHORTCUT_TEST_LIVE":      "FALSE",
		"SHORTCUT_TEST_EXPLAIN":   "FALSE",
		"SHORTCUT_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["SHORTCUT_TEST_OBJECTIVE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["SHORTCUT_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["SHORTCUT_APIKEY"],
			},
			extraOpts,
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

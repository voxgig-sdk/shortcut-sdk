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

func TestIterationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Iteration(nil)
		if ent == nil {
			t.Fatal("expected non-nil IterationEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"iteration": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Iteration(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Iteration(nil).Stream("list", nil, nil) {
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
		setup := iterationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "iteration." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_ITERATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		iterationRef01Ent := client.Iteration(nil)
		iterationRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "iteration"}), "iteration_ref01"))

		iterationRef01DataResult, err := iterationRef01Ent.Create(iterationRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		iterationRef01Data = core.ToMapAny(entityData(iterationRef01DataResult))
		if iterationRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if iterationRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		iterationRef01Match := map[string]any{}

		iterationRef01ListResult, err := iterationRef01Ent.List(iterationRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		iterationRef01List, iterationRef01ListOk := iterationRef01ListResult.([]any)
		if !iterationRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", iterationRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(iterationRef01List), map[string]any{"id": iterationRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		iterationRef01DataUp0Up := map[string]any{
			"id": iterationRef01Data["id"],
		}

		iterationRef01MarkdefUp0Name := "app_url"
		iterationRef01MarkdefUp0Value := fmt.Sprintf("Mark01-iteration_ref01_%d", setup.now)
		iterationRef01DataUp0Up[iterationRef01MarkdefUp0Name] = iterationRef01MarkdefUp0Value

		iterationRef01ResdataUp0Result, err := iterationRef01Ent.Update(iterationRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		iterationRef01ResdataUp0 := core.ToMapAny(entityData(iterationRef01ResdataUp0Result))
		if iterationRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if iterationRef01ResdataUp0["id"] != iterationRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if iterationRef01ResdataUp0[iterationRef01MarkdefUp0Name] != iterationRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", iterationRef01MarkdefUp0Name, iterationRef01ResdataUp0[iterationRef01MarkdefUp0Name])
		}

		// LOAD
		iterationRef01MatchDt0 := map[string]any{
			"id": iterationRef01Data["id"],
		}
		iterationRef01DataDt0Loaded, err := iterationRef01Ent.Load(iterationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		iterationRef01DataDt0LoadResult := core.ToMapAny(entityData(iterationRef01DataDt0Loaded))
		if iterationRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if iterationRef01DataDt0LoadResult["id"] != iterationRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		iterationRef01MatchRm0 := map[string]any{
			"id": iterationRef01Data["id"],
		}
		_, err = iterationRef01Ent.Remove(iterationRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		iterationRef01MatchRt0 := map[string]any{}

		iterationRef01ListRt0Result, err := iterationRef01Ent.List(iterationRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		iterationRef01ListRt0, iterationRef01ListRt0Ok := iterationRef01ListRt0Result.([]any)
		if !iterationRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", iterationRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(iterationRef01ListRt0), map[string]any{"id": iterationRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func iterationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "iteration", "IterationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read iteration test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse iteration test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"iteration01", "iteration02", "iteration03"},
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
	entidEnvRaw := os.Getenv("SHORTCUT_TEST_ITERATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SHORTCUT_TEST_ITERATION_ENTID": idmap,
		"SHORTCUT_TEST_LIVE":      "FALSE",
		"SHORTCUT_TEST_EXPLAIN":   "FALSE",
		"SHORTCUT_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["SHORTCUT_TEST_ITERATION_ENTID"])
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

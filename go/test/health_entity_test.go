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

func TestHealthEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Health(nil)
		if ent == nil {
			t.Fatal("expected non-nil HealthEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"health": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Health(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Health(nil).Stream("list", nil, nil) {
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
		setup := healthBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "health." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_HEALTH_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		healthRef01Ent := client.Health(nil)
		healthRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "health"}, setup.data), "health_ref01"))
		healthRef01Data["epic_id"] = setup.idmap["epic01"]

		healthRef01DataResult, err := healthRef01Ent.Create(healthRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		healthRef01Data = core.ToMapAny(entityData(healthRef01DataResult))
		if healthRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if healthRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		healthRef01Match := map[string]any{
			"epic_id": setup.idmap["epic01"],
		}

		healthRef01ListResult, err := healthRef01Ent.List(healthRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		healthRef01List, healthRef01ListOk := healthRef01ListResult.([]any)
		if !healthRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", healthRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(healthRef01List), map[string]any{"id": healthRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		healthRef01DataUp0Up := map[string]any{
			"id": healthRef01Data["id"],
		}

		healthRef01MarkdefUp0Name := "author_id"
		healthRef01MarkdefUp0Value := fmt.Sprintf("Mark01-health_ref01_%d", setup.now)
		healthRef01DataUp0Up[healthRef01MarkdefUp0Name] = healthRef01MarkdefUp0Value

		healthRef01ResdataUp0Result, err := healthRef01Ent.Update(healthRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		healthRef01ResdataUp0 := core.ToMapAny(entityData(healthRef01ResdataUp0Result))
		if healthRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if healthRef01ResdataUp0["id"] != healthRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if healthRef01ResdataUp0[healthRef01MarkdefUp0Name] != healthRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", healthRef01MarkdefUp0Name, healthRef01ResdataUp0[healthRef01MarkdefUp0Name])
		}

		// LOAD
		healthRef01MatchDt0 := map[string]any{
			"id": healthRef01Data["id"],
		}
		healthRef01DataDt0Loaded, err := healthRef01Ent.Load(healthRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		healthRef01DataDt0LoadResult := core.ToMapAny(entityData(healthRef01DataDt0Loaded))
		if healthRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if healthRef01DataDt0LoadResult["id"] != healthRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func healthBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "health", "HealthTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read health test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse health test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"health01", "health02", "health03", "epic01", "epic02", "epic03"},
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
	entidEnvRaw := os.Getenv("SHORTCUT_TEST_HEALTH_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SHORTCUT_TEST_HEALTH_ENTID": idmap,
		"SHORTCUT_TEST_LIVE":      "FALSE",
		"SHORTCUT_TEST_EXPLAIN":   "FALSE",
		"SHORTCUT_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["SHORTCUT_TEST_HEALTH_ENTID"])
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

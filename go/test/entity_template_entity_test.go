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

func TestEntityTemplateEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.EntityTemplate(nil)
		if ent == nil {
			t.Fatal("expected non-nil EntityTemplateEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"entity_template": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.EntityTemplate(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.EntityTemplate(nil).Stream("list", nil, nil) {
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
		setup := entity_templateBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "entity_template." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_ENTITY_TEMPLATE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		entityTemplateRef01Ent := client.EntityTemplate(nil)
		entityTemplateRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "entity_template"}), "entity_template_ref01"))

		entityTemplateRef01DataResult, err := entityTemplateRef01Ent.Create(entityTemplateRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		entityTemplateRef01Data = core.ToMapAny(entityData(entityTemplateRef01DataResult))
		if entityTemplateRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if entityTemplateRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		entityTemplateRef01Match := map[string]any{}

		entityTemplateRef01ListResult, err := entityTemplateRef01Ent.List(entityTemplateRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		entityTemplateRef01List, entityTemplateRef01ListOk := entityTemplateRef01ListResult.([]any)
		if !entityTemplateRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", entityTemplateRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(entityTemplateRef01List), map[string]any{"id": entityTemplateRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		entityTemplateRef01DataUp0Up := map[string]any{
			"id": entityTemplateRef01Data["id"],
		}

		entityTemplateRef01MarkdefUp0Name := "author_id"
		entityTemplateRef01MarkdefUp0Value := fmt.Sprintf("Mark01-entity_template_ref01_%d", setup.now)
		entityTemplateRef01DataUp0Up[entityTemplateRef01MarkdefUp0Name] = entityTemplateRef01MarkdefUp0Value

		entityTemplateRef01ResdataUp0Result, err := entityTemplateRef01Ent.Update(entityTemplateRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		entityTemplateRef01ResdataUp0 := core.ToMapAny(entityData(entityTemplateRef01ResdataUp0Result))
		if entityTemplateRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if entityTemplateRef01ResdataUp0["id"] != entityTemplateRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if entityTemplateRef01ResdataUp0[entityTemplateRef01MarkdefUp0Name] != entityTemplateRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", entityTemplateRef01MarkdefUp0Name, entityTemplateRef01ResdataUp0[entityTemplateRef01MarkdefUp0Name])
		}

		// LOAD
		entityTemplateRef01MatchDt0 := map[string]any{
			"id": entityTemplateRef01Data["id"],
		}
		entityTemplateRef01DataDt0Loaded, err := entityTemplateRef01Ent.Load(entityTemplateRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		entityTemplateRef01DataDt0LoadResult := core.ToMapAny(entityData(entityTemplateRef01DataDt0Loaded))
		if entityTemplateRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if entityTemplateRef01DataDt0LoadResult["id"] != entityTemplateRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		entityTemplateRef01MatchRm0 := map[string]any{
			"id": entityTemplateRef01Data["id"],
		}
		_, err = entityTemplateRef01Ent.Remove(entityTemplateRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		entityTemplateRef01MatchRt0 := map[string]any{}

		entityTemplateRef01ListRt0Result, err := entityTemplateRef01Ent.List(entityTemplateRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		entityTemplateRef01ListRt0, entityTemplateRef01ListRt0Ok := entityTemplateRef01ListRt0Result.([]any)
		if !entityTemplateRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", entityTemplateRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(entityTemplateRef01ListRt0), map[string]any{"id": entityTemplateRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func entity_templateBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "entity_template", "EntityTemplateTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read entity_template test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse entity_template test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"entity_template01", "entity_template02", "entity_template03"},
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
	entidEnvRaw := os.Getenv("SHORTCUT_TEST_ENTITY_TEMPLATE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SHORTCUT_TEST_ENTITY_TEMPLATE_ENTID": idmap,
		"SHORTCUT_TEST_LIVE":      "FALSE",
		"SHORTCUT_TEST_EXPLAIN":   "FALSE",
		"SHORTCUT_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["SHORTCUT_TEST_ENTITY_TEMPLATE_ENTID"])
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

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

func TestLinkedFileEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.LinkedFile(nil)
		if ent == nil {
			t.Fatal("expected non-nil LinkedFileEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"linked_file": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.LinkedFile(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.LinkedFile(nil).Stream("list", nil, nil) {
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
		setup := linked_fileBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "linked_file." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_LINKED_FILE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		linkedFileRef01Ent := client.LinkedFile(nil)
		linkedFileRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "linked_file"}, setup.data), "linked_file_ref01"))

		linkedFileRef01DataResult, err := linkedFileRef01Ent.Create(linkedFileRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		linkedFileRef01Data = core.ToMapAny(linkedFileRef01DataResult)
		if linkedFileRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if linkedFileRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		linkedFileRef01Match := map[string]any{}

		linkedFileRef01ListResult, err := linkedFileRef01Ent.List(linkedFileRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		linkedFileRef01List, linkedFileRef01ListOk := linkedFileRef01ListResult.([]any)
		if !linkedFileRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", linkedFileRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(linkedFileRef01List), map[string]any{"id": linkedFileRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		linkedFileRef01DataUp0Up := map[string]any{
			"id": linkedFileRef01Data["id"],
		}

		linkedFileRef01MarkdefUp0Name := "content_type"
		linkedFileRef01MarkdefUp0Value := fmt.Sprintf("Mark01-linked_file_ref01_%d", setup.now)
		linkedFileRef01DataUp0Up[linkedFileRef01MarkdefUp0Name] = linkedFileRef01MarkdefUp0Value

		linkedFileRef01ResdataUp0Result, err := linkedFileRef01Ent.Update(linkedFileRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		linkedFileRef01ResdataUp0 := core.ToMapAny(linkedFileRef01ResdataUp0Result)
		if linkedFileRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if linkedFileRef01ResdataUp0["id"] != linkedFileRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if linkedFileRef01ResdataUp0[linkedFileRef01MarkdefUp0Name] != linkedFileRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", linkedFileRef01MarkdefUp0Name, linkedFileRef01ResdataUp0[linkedFileRef01MarkdefUp0Name])
		}

		// LOAD
		linkedFileRef01MatchDt0 := map[string]any{
			"id": linkedFileRef01Data["id"],
		}
		linkedFileRef01DataDt0Loaded, err := linkedFileRef01Ent.Load(linkedFileRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		linkedFileRef01DataDt0LoadResult := core.ToMapAny(linkedFileRef01DataDt0Loaded)
		if linkedFileRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if linkedFileRef01DataDt0LoadResult["id"] != linkedFileRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		linkedFileRef01MatchRm0 := map[string]any{
			"id": linkedFileRef01Data["id"],
		}
		_, err = linkedFileRef01Ent.Remove(linkedFileRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		linkedFileRef01MatchRt0 := map[string]any{}

		linkedFileRef01ListRt0Result, err := linkedFileRef01Ent.List(linkedFileRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		linkedFileRef01ListRt0, linkedFileRef01ListRt0Ok := linkedFileRef01ListRt0Result.([]any)
		if !linkedFileRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", linkedFileRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(linkedFileRef01ListRt0), map[string]any{"id": linkedFileRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func linked_fileBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "linked_file", "LinkedFileTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read linked_file test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse linked_file test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"linked_file01", "linked_file02", "linked_file03"},
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
	entidEnvRaw := os.Getenv("SHORTCUT_TEST_LINKED_FILE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SHORTCUT_TEST_LINKED_FILE_ENTID": idmap,
		"SHORTCUT_TEST_LIVE":      "FALSE",
		"SHORTCUT_TEST_EXPLAIN":   "FALSE",
		"SHORTCUT_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["SHORTCUT_TEST_LINKED_FILE_ENTID"])
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

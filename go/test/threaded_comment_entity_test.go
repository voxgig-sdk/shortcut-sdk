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

func TestThreadedCommentEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ThreadedComment(nil)
		if ent == nil {
			t.Fatal("expected non-nil ThreadedCommentEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"threaded_comment": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ThreadedComment(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.ThreadedComment(nil).Stream("list", nil, nil) {
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
		setup := threaded_commentBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "threaded_comment." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_THREADED_COMMENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		threadedCommentRef01Ent := client.ThreadedComment(nil)
		threadedCommentRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "threaded_comment"}, setup.data), "threaded_comment_ref01"))
		threadedCommentRef01Data["epic_id"] = setup.idmap["epic01"]

		threadedCommentRef01DataResult, err := threadedCommentRef01Ent.Create(threadedCommentRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		threadedCommentRef01Data = core.ToMapAny(threadedCommentRef01DataResult)
		if threadedCommentRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if threadedCommentRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		threadedCommentRef01Match := map[string]any{
			"epic_id": setup.idmap["epic01"],
		}

		threadedCommentRef01ListResult, err := threadedCommentRef01Ent.List(threadedCommentRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		threadedCommentRef01List, threadedCommentRef01ListOk := threadedCommentRef01ListResult.([]any)
		if !threadedCommentRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", threadedCommentRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(threadedCommentRef01List), map[string]any{"id": threadedCommentRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		threadedCommentRef01DataUp0Up := map[string]any{
			"id": threadedCommentRef01Data["id"],
			"epic_id": setup.idmap["epic_id"],
		}

		threadedCommentRef01MarkdefUp0Name := "app_url"
		threadedCommentRef01MarkdefUp0Value := fmt.Sprintf("Mark01-threaded_comment_ref01_%d", setup.now)
		threadedCommentRef01DataUp0Up[threadedCommentRef01MarkdefUp0Name] = threadedCommentRef01MarkdefUp0Value

		threadedCommentRef01ResdataUp0Result, err := threadedCommentRef01Ent.Update(threadedCommentRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		threadedCommentRef01ResdataUp0 := core.ToMapAny(threadedCommentRef01ResdataUp0Result)
		if threadedCommentRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if threadedCommentRef01ResdataUp0["id"] != threadedCommentRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if threadedCommentRef01ResdataUp0[threadedCommentRef01MarkdefUp0Name] != threadedCommentRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", threadedCommentRef01MarkdefUp0Name, threadedCommentRef01ResdataUp0[threadedCommentRef01MarkdefUp0Name])
		}

		// LOAD
		threadedCommentRef01MatchDt0 := map[string]any{
			"id": threadedCommentRef01Data["id"],
		}
		threadedCommentRef01DataDt0Loaded, err := threadedCommentRef01Ent.Load(threadedCommentRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		threadedCommentRef01DataDt0LoadResult := core.ToMapAny(threadedCommentRef01DataDt0Loaded)
		if threadedCommentRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if threadedCommentRef01DataDt0LoadResult["id"] != threadedCommentRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		threadedCommentRef01MatchRm0 := map[string]any{
			"id": threadedCommentRef01Data["id"],
		}
		_, err = threadedCommentRef01Ent.Remove(threadedCommentRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		threadedCommentRef01MatchRt0 := map[string]any{
			"epic_id": setup.idmap["epic01"],
		}

		threadedCommentRef01ListRt0Result, err := threadedCommentRef01Ent.List(threadedCommentRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		threadedCommentRef01ListRt0, threadedCommentRef01ListRt0Ok := threadedCommentRef01ListRt0Result.([]any)
		if !threadedCommentRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", threadedCommentRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(threadedCommentRef01ListRt0), map[string]any{"id": threadedCommentRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func threaded_commentBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "threaded_comment", "ThreadedCommentTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read threaded_comment test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse threaded_comment test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"threaded_comment01", "threaded_comment02", "threaded_comment03", "epic01", "epic02", "epic03"},
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
	entidEnvRaw := os.Getenv("SHORTCUT_TEST_THREADED_COMMENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SHORTCUT_TEST_THREADED_COMMENT_ENTID": idmap,
		"SHORTCUT_TEST_LIVE":      "FALSE",
		"SHORTCUT_TEST_EXPLAIN":   "FALSE",
		"SHORTCUT_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["SHORTCUT_TEST_THREADED_COMMENT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add epic_id alias for update test.
	if idmapResolved["epic_id"] == nil {
		idmapResolved["epic_id"] = idmapResolved["epic01"]
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

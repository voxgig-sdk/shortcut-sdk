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

func TestTaskEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Task(nil)
		if ent == nil {
			t.Fatal("expected non-nil TaskEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := taskBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "task." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_TASK_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		taskRef01Ent := client.Task(nil)
		taskRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "task"}, setup.data), "task_ref01"))
		taskRef01Data["story_id"] = setup.idmap["story01"]

		taskRef01DataResult, err := taskRef01Ent.Create(taskRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		taskRef01Data = core.ToMapAny(taskRef01DataResult)
		if taskRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if taskRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		taskRef01DataUp0Up := map[string]any{
			"id": taskRef01Data["id"],
			"story_id": setup.idmap["story_id"],
		}

		taskRef01MarkdefUp0Name := "completed_at"
		taskRef01MarkdefUp0Value := fmt.Sprintf("Mark01-task_ref01_%d", setup.now)
		taskRef01DataUp0Up[taskRef01MarkdefUp0Name] = taskRef01MarkdefUp0Value

		taskRef01ResdataUp0Result, err := taskRef01Ent.Update(taskRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		taskRef01ResdataUp0 := core.ToMapAny(taskRef01ResdataUp0Result)
		if taskRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if taskRef01ResdataUp0["id"] != taskRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if taskRef01ResdataUp0[taskRef01MarkdefUp0Name] != taskRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", taskRef01MarkdefUp0Name, taskRef01ResdataUp0[taskRef01MarkdefUp0Name])
		}

		// LOAD
		taskRef01MatchDt0 := map[string]any{
			"id": taskRef01Data["id"],
		}
		taskRef01DataDt0Loaded, err := taskRef01Ent.Load(taskRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		taskRef01DataDt0LoadResult := core.ToMapAny(taskRef01DataDt0Loaded)
		if taskRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if taskRef01DataDt0LoadResult["id"] != taskRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		taskRef01MatchRm0 := map[string]any{
			"id": taskRef01Data["id"],
		}
		_, err = taskRef01Ent.Remove(taskRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func taskBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "task", "TaskTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read task test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse task test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"task01", "task02", "task03", "story01", "story02", "story03"},
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
	entidEnvRaw := os.Getenv("SHORTCUT_TEST_TASK_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SHORTCUT_TEST_TASK_ENTID": idmap,
		"SHORTCUT_TEST_LIVE":      "FALSE",
		"SHORTCUT_TEST_EXPLAIN":   "FALSE",
		"SHORTCUT_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["SHORTCUT_TEST_TASK_ENTID"])
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

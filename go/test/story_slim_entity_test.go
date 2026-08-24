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

func TestStorySlimEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.StorySlim(nil)
		if ent == nil {
			t.Fatal("expected non-nil StorySlimEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := story_slimBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "story_slim." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_STORY_SLIM_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		storySlimRef01Ent := client.StorySlim(nil)
		storySlimRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "story_slim"}, setup.data), "story_slim_ref01"))

		storySlimRef01DataResult, err := storySlimRef01Ent.Create(storySlimRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		storySlimRef01Data = core.ToMapAny(storySlimRef01DataResult)
		if storySlimRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		storySlimRef01DataUp0Up := map[string]any{
		}

		storySlimRef01MarkdefUp0Name := "completed_at_end"
		storySlimRef01MarkdefUp0Value := fmt.Sprintf("Mark01-story_slim_ref01_%d", setup.now)
		storySlimRef01DataUp0Up[storySlimRef01MarkdefUp0Name] = storySlimRef01MarkdefUp0Value

		storySlimRef01ResdataUp0Result, err := storySlimRef01Ent.Update(storySlimRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		storySlimRef01ResdataUp0 := core.ToMapAny(storySlimRef01ResdataUp0Result)
		if storySlimRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if storySlimRef01ResdataUp0[storySlimRef01MarkdefUp0Name] != storySlimRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", storySlimRef01MarkdefUp0Name, storySlimRef01ResdataUp0[storySlimRef01MarkdefUp0Name])
		}

	})
}

func story_slimBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "story_slim", "StorySlimTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read story_slim test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse story_slim test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"story_slim01", "story_slim02", "story_slim03"},
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
	entidEnvRaw := os.Getenv("SHORTCUT_TEST_STORY_SLIM_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SHORTCUT_TEST_STORY_SLIM_ENTID": idmap,
		"SHORTCUT_TEST_LIVE":      "FALSE",
		"SHORTCUT_TEST_EXPLAIN":   "FALSE",
		"SHORTCUT_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["SHORTCUT_TEST_STORY_SLIM_ENTID"])
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

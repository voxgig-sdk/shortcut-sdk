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

func TestStoryLinkEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.StoryLink(nil)
		if ent == nil {
			t.Fatal("expected non-nil StoryLinkEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := story_linkBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "story_link." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_STORY_LINK_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		storyLinkRef01Ent := client.StoryLink(nil)
		storyLinkRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "story_link"}, setup.data), "story_link_ref01"))

		storyLinkRef01DataResult, err := storyLinkRef01Ent.Create(storyLinkRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		storyLinkRef01Data = core.ToMapAny(storyLinkRef01DataResult)
		if storyLinkRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if storyLinkRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		storyLinkRef01DataUp0Up := map[string]any{
			"id": storyLinkRef01Data["id"],
		}

		storyLinkRef01MarkdefUp0Name := "created_at"
		storyLinkRef01MarkdefUp0Value := fmt.Sprintf("Mark01-story_link_ref01_%d", setup.now)
		storyLinkRef01DataUp0Up[storyLinkRef01MarkdefUp0Name] = storyLinkRef01MarkdefUp0Value

		storyLinkRef01ResdataUp0Result, err := storyLinkRef01Ent.Update(storyLinkRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		storyLinkRef01ResdataUp0 := core.ToMapAny(storyLinkRef01ResdataUp0Result)
		if storyLinkRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if storyLinkRef01ResdataUp0["id"] != storyLinkRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if storyLinkRef01ResdataUp0[storyLinkRef01MarkdefUp0Name] != storyLinkRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", storyLinkRef01MarkdefUp0Name, storyLinkRef01ResdataUp0[storyLinkRef01MarkdefUp0Name])
		}

		// LOAD
		storyLinkRef01MatchDt0 := map[string]any{
			"id": storyLinkRef01Data["id"],
		}
		storyLinkRef01DataDt0Loaded, err := storyLinkRef01Ent.Load(storyLinkRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		storyLinkRef01DataDt0LoadResult := core.ToMapAny(storyLinkRef01DataDt0Loaded)
		if storyLinkRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if storyLinkRef01DataDt0LoadResult["id"] != storyLinkRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		storyLinkRef01MatchRm0 := map[string]any{
			"id": storyLinkRef01Data["id"],
		}
		_, err = storyLinkRef01Ent.Remove(storyLinkRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func story_linkBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "story_link", "StoryLinkTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read story_link test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse story_link test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"story_link01", "story_link02", "story_link03"},
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
	entidEnvRaw := os.Getenv("SHORTCUT_TEST_STORY_LINK_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SHORTCUT_TEST_STORY_LINK_ENTID": idmap,
		"SHORTCUT_TEST_LIVE":      "FALSE",
		"SHORTCUT_TEST_EXPLAIN":   "FALSE",
		"SHORTCUT_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["SHORTCUT_TEST_STORY_LINK_ENTID"])
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

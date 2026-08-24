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

func TestKeyResultEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.KeyResult(nil)
		if ent == nil {
			t.Fatal("expected non-nil KeyResultEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := key_resultBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "key_result." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_KEY_RESULT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		keyResultRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.key_result", setup.data)))
		var keyResultRef01Data map[string]any
		if len(keyResultRef01DataRaw) > 0 {
			keyResultRef01Data = core.ToMapAny(keyResultRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = keyResultRef01Data

		// UPDATE
		keyResultRef01Ent := client.KeyResult(nil)
		keyResultRef01DataUp0Up := map[string]any{
			"id": keyResultRef01Data["id"],
		}

		keyResultRef01MarkdefUp0Name := "name"
		keyResultRef01MarkdefUp0Value := fmt.Sprintf("Mark01-key_result_ref01_%d", setup.now)
		keyResultRef01DataUp0Up[keyResultRef01MarkdefUp0Name] = keyResultRef01MarkdefUp0Value

		keyResultRef01ResdataUp0Result, err := keyResultRef01Ent.Update(keyResultRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		keyResultRef01ResdataUp0 := core.ToMapAny(entityData(keyResultRef01ResdataUp0Result))
		if keyResultRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if keyResultRef01ResdataUp0["id"] != keyResultRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if keyResultRef01ResdataUp0[keyResultRef01MarkdefUp0Name] != keyResultRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", keyResultRef01MarkdefUp0Name, keyResultRef01ResdataUp0[keyResultRef01MarkdefUp0Name])
		}

		// LOAD
		keyResultRef01MatchDt0 := map[string]any{
			"id": keyResultRef01Data["id"],
		}
		keyResultRef01DataDt0Loaded, err := keyResultRef01Ent.Load(keyResultRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		keyResultRef01DataDt0LoadResult := core.ToMapAny(entityData(keyResultRef01DataDt0Loaded))
		if keyResultRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if keyResultRef01DataDt0LoadResult["id"] != keyResultRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func key_resultBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "key_result", "KeyResultTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read key_result test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse key_result test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"key_result01", "key_result02", "key_result03"},
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
	entidEnvRaw := os.Getenv("SHORTCUT_TEST_KEY_RESULT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SHORTCUT_TEST_KEY_RESULT_ENTID": idmap,
		"SHORTCUT_TEST_LIVE":      "FALSE",
		"SHORTCUT_TEST_EXPLAIN":   "FALSE",
		"SHORTCUT_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["SHORTCUT_TEST_KEY_RESULT_ENTID"])
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

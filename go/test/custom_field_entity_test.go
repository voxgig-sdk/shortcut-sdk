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

func TestCustomFieldEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CustomField(nil)
		if ent == nil {
			t.Fatal("expected non-nil CustomFieldEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"custom_field": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.CustomField(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.CustomField(nil).Stream("list", nil, nil) {
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
		setup := custom_fieldBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "custom_field." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set SHORTCUT_TEST_CUSTOM_FIELD_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		customFieldRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.custom_field", setup.data)))
		var customFieldRef01Data map[string]any
		if len(customFieldRef01DataRaw) > 0 {
			customFieldRef01Data = core.ToMapAny(customFieldRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = customFieldRef01Data

		// LIST
		customFieldRef01Ent := client.CustomField(nil)
		customFieldRef01Match := map[string]any{}

		customFieldRef01ListResult, err := customFieldRef01Ent.List(customFieldRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, customFieldRef01ListOk := customFieldRef01ListResult.([]any)
		if !customFieldRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", customFieldRef01ListResult)
		}

		// UPDATE
		customFieldRef01DataUp0Up := map[string]any{
			"id": customFieldRef01Data["id"],
		}

		customFieldRef01MarkdefUp0Name := "after_id"
		customFieldRef01MarkdefUp0Value := fmt.Sprintf("Mark01-custom_field_ref01_%d", setup.now)
		customFieldRef01DataUp0Up[customFieldRef01MarkdefUp0Name] = customFieldRef01MarkdefUp0Value

		customFieldRef01ResdataUp0Result, err := customFieldRef01Ent.Update(customFieldRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		customFieldRef01ResdataUp0 := core.ToMapAny(entityData(customFieldRef01ResdataUp0Result))
		if customFieldRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if customFieldRef01ResdataUp0["id"] != customFieldRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if customFieldRef01ResdataUp0[customFieldRef01MarkdefUp0Name] != customFieldRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", customFieldRef01MarkdefUp0Name, customFieldRef01ResdataUp0[customFieldRef01MarkdefUp0Name])
		}

		// LOAD
		customFieldRef01MatchDt0 := map[string]any{
			"id": customFieldRef01Data["id"],
		}
		customFieldRef01DataDt0Loaded, err := customFieldRef01Ent.Load(customFieldRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		customFieldRef01DataDt0LoadResult := core.ToMapAny(entityData(customFieldRef01DataDt0Loaded))
		if customFieldRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if customFieldRef01DataDt0LoadResult["id"] != customFieldRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func custom_fieldBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "custom_field", "CustomFieldTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read custom_field test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse custom_field test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"custom_field01", "custom_field02", "custom_field03"},
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
	entidEnvRaw := os.Getenv("SHORTCUT_TEST_CUSTOM_FIELD_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SHORTCUT_TEST_CUSTOM_FIELD_ENTID": idmap,
		"SHORTCUT_TEST_LIVE":      "FALSE",
		"SHORTCUT_TEST_EXPLAIN":   "FALSE",
		"SHORTCUT_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["SHORTCUT_TEST_CUSTOM_FIELD_ENTID"])
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

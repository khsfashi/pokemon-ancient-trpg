# P6 Resource and Asset Strategy

Status: **P6 COMPLETE — Batch 03 full Gen-I production-import validation passed; P7 handoff frozen**  
Owner phase: **#12 — P6 Resource and asset strategy, sourcing, provenance, and mobile budget**  
Contract version: `p6-resource-strategy-v1`  
Manifest schema: `docs/P6_RESOURCE_MANIFEST_SCHEMA.json` (`p6-resource-manifest-v1`)  
Last verified: **2026-08-17**

This document freezes the resource contract that P7 must implement. It does not select the P7 framework, storage architecture or packaging route.

The game remains a mobile-first **text RPG/TRPG**. Presentation resources improve readability, atmosphere and Pokémon identity, but authoritative gameplay remains complete when optional Pokémon media is absent.

---

## 1. Binding principles

1. **Gameplay state is authoritative; presentation resources are not.** Missing optional imagery/audio may not change event eligibility, checks, choices, consequences, save state or RNG.
2. **The public-safe baseline remains playable without uncleared Pokémon media.** Pokémon image/audio enrichment stays optional unless an exact artifact is affirmatively cleared.
3. **Repository/package licenses and underlying Pokémon IP are separate rights layers.** Repository presence is not blanket redistribution clearance for Pokémon designs, artwork or cries.
4. **Every production resource has one stable `resource_id`.** Lookup, cache identity, validation and provenance use the semantic ID rather than raw paths or URLs.
5. **Do build/import work only when it has measured value.** Do not add runtime resizing, format conversion, atlas repacking or repeated source parsing by habit.
6. **Load once, reuse many times.** Concurrent requests for one uncached `resource_id` are coalesced and repeated consumers reuse the cached instance.
7. **Preload narrowly.** Initial/common UI plus bounded current-region/event working sets are preferred over whole-corpus preload.
8. **Budgets are evidence-backed.** Batch 03 supersedes the provisional representative-sample animated cap with a full `001..151` measurement.
9. **Do not atlas/repack by habit.** The pinned animated source family already fits the final full-coverage budget without a custom repacker.
10. **Creative presentation choices remain explicit decisions.** D-036 is the binding resolution of the P6 Pokémon visual-family gate.

---

## 2. Product-derived resource inventory

### 2.1 Required baseline

| Asset class | Requirement | Minimum fallback |
|---|---|---|
| Korean + Latin UI font | **REQUIRED** | system sans stack |
| Generic action/navigation icons | **REQUIRED** | text labels / project CSS marks |
| Dice/check/outcome marks | **REQUIRED** | text labels |
| Human state/resource/status marks | **REQUIRED** | text labels |
| Three-slot companion presentation | **REQUIRED** | labeled empty/occupied text blocks |
| Missing-resource/fallback presentation | **REQUIRED** | deterministic text/CSS fallback |

The required baseline does not depend on Pokémon image/audio files.

### 2.2 Optional enrichment

| Asset class | Requirement | Default fallback |
|---|---|---|
| D-036 animated Pokémon encounter sprite | **OPTIONAL** | species name + encounter prose |
| PokéSprite compact identity | **OPTIONAL** | name/initial + project mark |
| Location/region background | **OPTIONAL** | project color/texture/CSS treatment |
| Selected event illustration | **OPTIONAL** | text-only event card |
| Type/status/item pictograms | **OPTIONAL** | text badges |
| UI SFX / ambience / BGM | **OPTIONAL** | silence + visual feedback |

### 2.3 Deferred until measured value exists

- back-sprite or battle-only animation families beyond the D-036 encounter presentation;
- shiny sprite families as a baseline requirement;
- Pokémon cries;
- large item-art or background corpora;
- full Pokédex-style graphical collection grids;
- whole third-party icon fonts/packs;
- broad ambience/SFX/music libraries;
- per-event unique illustration as a default authoring requirement.

---

## 3. Public-safe baseline and optional local enrichment

```text
pokemon_media_repo_mode == metadata_only
pokemon_media_public_distribution == not_cleared
pokemon_media_is_gameplay_required == false
pokemon_media_initial_payload == 0
```

An explicit local enrichment/import path may fetch or accept user-supplied files at build/import time. It retains the source pin and content SHA-256, does not silently place those bytes in a public distributable artifact, and does not make upstream network access part of the normal render path.

Batch 03 production validation fetches pinned Pokémon media **in memory**, validates it, hashes it and emits metadata-only evidence. Source Pokémon image bytes are not written to the produced manifest or uploaded as CI evidence.

---

## 4. Frozen source decisions

### 4.1 PokéAPI `sprites`

**Decision:** `ADAPT` as fallback/reference, not the D-036 primary family.  
**Frozen reference head:** `c10459b9b0129eaca5c5d9b1cac65336debb1d08`  
**Public repository:** metadata only  
**Public distribution:** not cleared

### 4.2 PokéSprite compact identity

**Decision:** `ADAPT`; selected by D-036 for compact identity.  
**Frozen pin:** `c5aaa610ff2acdf7fd8e2dccd181bca8be9fcb3e`  
**Mapping:** `data/pokemon.json`  
**Default asset:** `pokemon-gen8/regular/{slug}.png`  
**Source canvas:** `68x56`  
**Public repository:** metadata only  
**Public distribution:** not cleared

Production-import acceptance requires every National Pokédex ID `001..151` to resolve through the pinned mapping to one existing, unique `68x56` default PNG. The importer computes SHA-256 for every fetched file and rechecks the representative Batch 02 hashes.

### 4.3 PokéRogue animated encounter family

**Decision:** `ADAPT`; selected by D-036 for animated direct-encounter presentation.  
**Frozen pin:** `909b43612324622608023b3beb2f24f4ef159c1d`  
**Texture:** `images/pokemon/{id}.png`  
**Atlas metadata:** `images/pokemon/{id}.json`  
**Public repository:** metadata only  
**Public distribution:** not cleared

Batch 03 proved full Gen-I source coverage:

```text
animated_png_json_pairs_validated == 151/151
metadata_layout.texture_array_v1 == 150
metadata_layout.root_frames_meta_v1 == 1
metadata_format.RGBA8888 == 150
metadata_format.I8 == 1
```

The importer supports only those two **observed pinned layouts**, validates the metadata-declared image/size/format, verifies every frame and source rectangle, and hashes both PNG and JSON. It does not force every upstream JSON into one artificial `RGBA8888` schema.

Full source measurement also proved the Batch 02 representative `512 KiB` hypothesis was too small: 25 source atlases exceed it, while the maximum pinned Gen-I atlas is #085 at `673x673`, conservatively `1,811,716` RGBA8 bytes. The final full-coverage guardrail is therefore `2 MiB` per encounter atlas.

### 4.4 Pokémon cries

**Decision:** `DEFER`.  
**Reference head:** `ef687b18f0ce17169b4b4c09175819f7ade92f0f`

### 4.5 Pretendard

**Decision:** `ADOPT`.  
**Frozen release:** `v1.3.9`  
**Frozen source pin:** `5c41199ea0024a9e0b2cb31735265056e5472d76`  
**Measured `PretendardVariable.woff2` source bytes:** `2,057,688`

One self-hosted variable family is the baseline Korean/Latin font. Do not add a second complete CJK family without measured need.

### 4.6 Noto Sans CJK/Korean

**Decision:** `ADAPT` as a coverage/fallback reference, not a second automatic bundled family.

### 4.7 Lucide

**Decision:** `ADOPT` for the exact four-file generic SVG subset frozen in Batch 02.  
**Frozen release:** `1.27.0`  
**Frozen source pin:** `4aec3f892fd6c23063bc2fead83c899b5d412b1c`  
**Selected count:** `4`  
**Measured selected source bytes:** `1,347`

Do not ship the complete icon corpus or icon font.

### 4.8 Project-owned CSS/SVG

**Decision:** `ADOPT` for domain-specific check, resource, status and companion-slot semantics.

### 4.9 Other discovery sources

Material Symbols, Kenney packs, Freesound and OpenGameArt remain `DEFER` unless an exact production requirement justifies an individually reviewed artifact.

### 4.10 Project-created/generated presentation

**Decision:** `ADOPT` for selected backgrounds, textures, event illustrations and domain UI decoration with retained creation provenance.

---

## 5. Stable identity and provenance

Machine contracts:

- `docs/P6_RESOURCE_MANIFEST_SCHEMA.json`
- `docs/P6_RESOURCE_MANIFEST.json`
- `docs/P6_POKEMON_RESOURCE_SOURCE_MAP.json`

Every concrete production artifact has one semantic `resource_id`. Paths, URLs, versions and hashes are attributes of that identity.

Unknown rights, incompatible redistribution, source-pin drift, duplicate identities or missing required provenance fail closed.

---

## 6. Build/import preprocessing contract

```text
runtime_resize_as_default == false
runtime_format_conversion == false
runtime_font_conversion == false
runtime_atlas_repack == false
runtime_source_manifest_parsing_for_hot_paths == false
duplicate_download_for_same_resource_id == false
duplicate_decoded_instance_for_same_resource_id == false
```

For the current pinned Gen-I animated family, full Batch 03 measurement proves a source-direct path fits the final `2 MiB` per-atlas budget. A trial deduplicating shelf repack still left 20 species above the old provisional `512 KiB` cap, so P6 does **not** impose custom repacking merely to preserve an invalid sample-derived threshold.

Concealment, silhouette, partial reveal, shading, masks and environment overlays are presentation transforms over one semantic source identity. They may not materialize persistent duplicate source textures or mutate authoritative game time, RNG or event state.

SVG/font normalization remains build-time work where useful. Audio, if later adopted, follows measured on-demand/streaming policy rather than whole-corpus preload.

---

## 7. Runtime lookup, cache and eviction contract

P7 preserves these semantics regardless of framework:

1. `resource_id` is the canonical cache key.
2. Concurrent misses for the same ID coalesce into one in-flight load.
3. Repeated consumers share the cached decoded/downloaded instance.
4. Required common UI may remain resident.
5. Optional region/event resources have bounded lifetime.
6. Leaving a region/event makes optional resources eligible for eviction.
7. Gameplay state stores semantic IDs, never runtime resource-object handles.
8. Missing optional resources yield deterministic fallback and diagnostics only.
9. Upstream asset APIs are not part of the ordinary runtime render path.

Expected complexity:

```text
resource_manifest_lookup == O(1) or equivalent indexed lookup
resource_cache_lookup == O(1) average
per_render_full_manifest_scan == false
per_render_full_species_asset_scan == false
```

---

## 8. Frozen mobile resource budgets

Batch 03 replaces the provisional animated sample cap with full `001..151` measurement while leaving the compact/initial budgets unchanged.

```text
p6_owned_required_initial_resource_payload <= 3 MiB
pokemon_media_initial_payload == 0
compact_icon_decoded_cache <= 384 KiB
per_encounter_atlas_guardrail <= 2 MiB
max_resident_encounter_atlases == 2
encounter_atlas_decoded_cache <= 4 MiB
combined_optional_pokemon_decoded_image_working_set <= 4.375 MiB
baseline_bgm_ambience_ui_sfx_cries_payload == 0
required_raster_location_event_illustration_payload == 0
```

Full evidence:

```text
compact_source_canvas == 68x56
compact_rgba8_decoded_bytes_each == 15,232
24_compact_icons == 365,568 bytes <= 384 KiB
animated_pairs_validated == 151
old_512_KiB_atlas_cap_exceeded_by == 25 species
max_animated_source_atlas == #085 == 673x673 == 1,811,716 RGBA8 bytes
final_per_atlas_cap == 2,097,152 bytes
final_two_atlas_cache_cap == 4,194,304 bytes
```

Whole-151 residency is not a valid memory model. All Pokémon media remains on-demand and only two encounter atlases may remain resident simultaneously.

P7 must additionally measure browser/device CPU/GPU accounting, but it may not silently weaken these P6 caps.

---

## 9. Validation contract

`tools/validate_p6_resources.py` rejects at least:

- duplicate `resource_id` values;
- unknown schema/source-map versions;
- missing or contradictory provenance/rights data;
- illegal bundling/public allowance of uncleared Pokémon media;
- source-pin drift;
- initial Pokémon-media preload;
- duplicate upstream artifact ownership;
- compact/encounter decoded-memory violations;
- cache-key/duplicate-instance drift;
- unusable optional-media fallback semantics;
- drift from the pinned full Gen-I measurement distribution.

`tools/build_p6_production_import_manifest.py`:

- validates PokéSprite `001..151` compact coverage;
- validates all Gen-I animated PNG+JSON pairs and frame/source bounds;
- supports the two pinned metadata layouts actually observed;
- computes SHA-256 for every fetched artifact;
- measures every source atlas against the final `2 MiB` guardrail;
- fetches Pokémon media in memory only;
- emits only metadata JSON evidence.

The normal static validator remains network-independent. CI explicitly runs the pinned live import and feeds the produced metadata manifest back through policy validation.

---

## 10. P6-HDG-001 — RESOLVED by D-036

```text
compact_pokemon_identity_candidate == PokeSprite
encounter_pokemon_presentation == animated_sprite
unknown_encounter_conceal_reveal == true
per_reveal_state_duplicate_sprite_assets == false
all_151_encounter_animations_preloaded == false
presentation_animation_mutates_authoritative_game_state == false
current_blocking_p6_human_design_gate_count == 0
```

The player-facing reveal sequence is `concealed → silhouette → partial_reveal → revealed → identified`.

---

## 11. P7 handoff constraints

P7 may choose technology but must preserve:

- semantic `resource_id` lookup independent of upstream paths;
- generated/indexed manifests;
- deterministic fallbacks;
- optional local rights-gated enrichment;
- coalesced asynchronous loading and cache reuse;
- bounded event/region eviction;
- `384 KiB` compact cache, `2 MiB` per encounter atlas, at most `2` resident atlases, `4 MiB` encounter cache;
- no per-frame manifest/species scans;
- no routine runtime media resize/repack/format conversion;
- testable loading and memory diagnostics.

P6 deliberately does **not** choose React, another web framework, PWA packaging, native wrappers, save/storage architecture or backend design.

---

## 12. P6 exit verdict

Validated candidate `95787eda4c1c04aeb27c4acb0c4256c12206e85b` passed P6 Resource Validation run #30, including full live import, produced-manifest policy validation and metadata-only Artifact upload.

```text
pokesprite_compact_import == 151/151 PASS
animated_png_json_import == 151/151 PASS
all_fetched_artifacts_hashed == true
animated_source_atlas_over_2_MiB_count == 0
metadata_only_evidence_boundary == PASS
p6_complete == true
issue_12_may_close == true
p7_may_begin_after_issue_12_close == true
```

The final PR head must remain green under the same P6 workflow before merge. `docs/P6_EXIT_AUDIT.md` is the strict exit authority.

# P6 Resource and Asset Strategy

Status: **P6 Batch 03 exit candidate; P6-HDG-001 resolved by D-036; full production-import validation required before exit**  
Owner phase: **#12 — P6 Resource and asset strategy, sourcing, provenance, and mobile budget**  
Contract version: `p6-resource-strategy-v1`  
Manifest schema: `docs/P6_RESOURCE_MANIFEST_SCHEMA.json` (`p6-resource-manifest-v1`)  
Last verified: **2026-08-17**

This document converts the finished P2-P5 product contracts into the resource contract that P7 must implement. It does not select the P7 framework, storage architecture or packaging route.

The game remains a mobile-first **text RPG/TRPG**. Presentation resources improve readability, atmosphere and Pokémon identity, but authoritative gameplay must remain complete when optional Pokémon media is absent.

---

## 1. Binding principles

1. **Gameplay state is authoritative; presentation resources are not.** Missing optional imagery/audio may not change event eligibility, checks, choices, consequences, save state or RNG.
2. **The public-safe baseline must remain playable without uncleared Pokémon media.** Pokémon image/audio enrichment stays optional unless an exact artifact is affirmatively cleared.
3. **Repository/package licenses and underlying Pokémon IP are separate rights layers.** A permissive repository license is not blanket permission to redistribute Pokémon designs, artwork or cries.
4. **Every production resource has one stable `resource_id`.** Lookup, cache identity, validation and provenance use that semantic ID instead of raw paths or URLs.
5. **Normalize once at build/import time.** Resize, crop, conversion, subsetting, indexing and metadata extraction should not become repeated runtime work.
6. **Load once, reuse many times.** Concurrent requests for one uncached `resource_id` must be coalesced, and repeated consumers reuse the cached instance.
7. **Preload narrowly.** Initial/common UI plus bounded current-region/event working sets are preferred over whole-corpus preload.
8. **Budgets must be evidence-backed.** Batch 02 froze numeric caps from measured representative resources; later phases may tighten them only with new evidence.
9. **Do not atlas by habit.** Atlasing/indexing is justified only where it materially improves the selected runtime path.
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

The required baseline must not depend on Pokémon image/audio files.

### 2.2 Optional enrichment

| Asset class | Requirement | Default fallback |
|---|---|---|
| D-036 animated Pokémon encounter sprite | **OPTIONAL** | species name + encounter prose |
| PokéSprite-style compact identity | **OPTIONAL** | name/initial + project mark |
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

`DEFERRED` means the current product benefit does not justify its rights, payload, memory or maintenance cost. It does not prohibit a later evidence-backed addition.

---

## 3. Public-safe baseline and optional local enrichment

### 3.1 Public repository/build boundary

The public repository may contain project-owned presentation assets, affirmatively compatible third-party artifacts, and **metadata/provenance records** for Pokémon media that is not cleared for redistribution.

The public-safe game must remain playable when every optional Pokémon image/audio resource is missing.

### 3.2 Pokémon-media default policy

```text
pokemon_media_repo_mode == metadata_only
pokemon_media_public_distribution == not_cleared
pokemon_media_is_gameplay_required == false
pokemon_media_initial_payload == 0
```

An explicit local enrichment/import path may fetch or accept user-supplied files at build/import time. It must retain the source pin and content SHA-256, must not silently place those bytes in a public distributable artifact, and must not make upstream network access part of the normal render path.

Batch 03 production validation therefore fetches pinned Pokémon media **in memory**, validates it, hashes it and emits metadata-only evidence. Source Pokémon image bytes are not written to the produced manifest or uploaded as CI evidence.

---

## 4. Frozen source decisions

### 4.1 PokéAPI `sprites`

**Decision:** `ADAPT` as a fallback/reference source, not the D-036 primary family.  
**Frozen P1/P6 reference head:** `c10459b9b0129eaca5c5d9b1cac65336debb1d08`  
**Public repository:** metadata only  
**Public distribution:** not cleared

Keep it as a machine-addressable fallback/reference. Do not copy its complete corpus by default.

### 4.2 PokéSprite compact identity

**Decision:** `ADAPT` and selected by D-036 for the compact identity family.  
**Frozen pin:** `c5aaa610ff2acdf7fd8e2dccd181bca8be9fcb3e`  
**Mapping:** `data/pokemon.json`  
**Default asset:** `pokemon-gen8/regular/{slug}.png`  
**Source canvas:** `68x56`  
**Public repository:** metadata only  
**Public distribution:** not cleared

P6 production-import acceptance requires every National Pokédex ID `001..151` to resolve through the pinned mapping to one existing, unique default compact PNG. The importer records SHA-256 for every fetched file.

### 4.3 PokéRogue animated encounter atlas candidate

**Decision:** `ADAPT` and selected by D-036 for animated direct-encounter presentation.  
**Frozen pin:** `909b43612324622608023b3beb2f24f4ef159c1d`  
**Texture:** `images/pokemon/{id}.png`  
**Atlas metadata:** `images/pokemon/{id}.json`  
**Expected atlas format:** `RGBA8888`  
**Public repository:** metadata only  
**Public distribution:** not cleared

P6 production-import validation checks the pinned Gen-I PNG+JSON pair, PNG dimensions, metadata texture image/size/format, every frame rectangle, duplicate frame filenames, SHA-256, and the decoded-memory guardrail. Missing optional media must still fall back without gameplay changes.

### 4.4 Pokémon cries

**Decision:** `DEFER`.  
**Reference head:** `ef687b18f0ce17169b4b4c09175819f7ade92f0f`

Cries are not required for the text-first deterministic loop and remain outside the initial resource budget.

### 4.5 Pretendard

**Decision:** `ADOPT`.  
**Frozen release:** `v1.3.9`  
**Frozen source pin:** `5c41199ea0024a9e0b2cb31735265056e5472d76`  
**Measured `PretendardVariable.woff2` source bytes:** `2,057,688`  
**License:** SIL Open Font License 1.1

Use the frozen manifest/provenance record. Avoid redundant full Korean font families unless P7 produces evidence that fallback coverage requires one.

### 4.6 Noto Sans CJK/Korean

**Decision:** `ADAPT` as a coverage/fallback reference, not a second automatic bundled family.

### 4.7 Lucide

**Decision:** `ADOPT` for the exact four-file generic SVG subset frozen in Batch 02.  
**Frozen release line:** `1.27.0`  
**Frozen source pin:** `4aec3f892fd6c23063bc2fead83c899b5d412b1c`  
**Selected icon count:** `4`  
**Measured selected source bytes:** `1,347`

Do not ship a complete icon font or complete icon corpus.

### 4.8 Project-owned CSS/SVG

**Decision:** `ADOPT` as the default for domain-specific check, resource, status and companion-slot semantics.

### 4.9 Other third-party discovery sources

Material Symbols, Kenney packs, Freesound and OpenGameArt remain `DEFER` unless an exact missing production requirement justifies an individually reviewed artifact. Site/repository presence is not a production license decision.

### 4.10 Project-created/generated presentation

**Decision:** `ADOPT` as a production method for selected backgrounds, textures, event illustrations and domain UI decoration. Generated resources retain generator/model/tool, creation revision/date, relevant inputs and subsequent-edit provenance.

---

## 5. Stable resource identity and provenance

Machine contracts:

- `docs/P6_RESOURCE_MANIFEST_SCHEMA.json`
- `docs/P6_RESOURCE_MANIFEST.json`
- `docs/P6_POKEMON_RESOURCE_SOURCE_MAP.json`

Every concrete production artifact has one semantic `resource_id`. Paths, URLs, versions and hashes are attributes of that identity.

A production record includes source/provenance, exact pin, SHA-256 where applicable, rights/IP boundary, redistribution mode, preprocessing recipe, runtime preload/cache policy, encoded/decoded measurements and deterministic fallback.

Unknown rights, incompatible redistribution, source-pin drift, duplicate identities or missing required provenance fail closed.

---

## 6. Build/import preprocessing contract

```text
runtime_resize_as_default == false
runtime_format_conversion == false
runtime_font_conversion == false
runtime_source_manifest_parsing_for_hot_paths == false
duplicate_download_for_same_resource_id == false
duplicate_decoded_instance_for_same_resource_id == false
```

### 6.1 Compact and animated Pokémon sprites

D-036 selects compact + animated encounter sprite presentation.

- preserve source pixel-grid semantics;
- normalize deterministic display/crop/pad policy before normal runtime rendering;
- retain source and normalized dimensions in generated metadata;
- do not generate per-concealment duplicate sprite files;
- concealment, silhouette, partial reveal, shading, masks and environment overlays are presentation transforms over one semantic source identity;
- do not import back/shiny/alternate families merely because upstream has them;
- presentation animation may not advance authoritative game time, RNG or event state.

### 6.2 SVG/icons and fonts

- include only used generic icon files;
- sanitize/normalize SVGs before runtime use;
- self-host the approved deterministic font artifact;
- preserve required notices;
- do not repeatedly subset, convert or parse source formats at runtime.

### 6.3 Audio

If audio is later adopted, normalize it at build time, keep short SFX reusable, stream/on-demand load longer assets, and never preload a full Pokémon-cry catalog.

---

## 7. Runtime lookup, cache and eviction contract

P7 must preserve these semantics regardless of framework:

1. `resource_id` is the canonical cache key.
2. Concurrent misses for the same ID coalesce into one in-flight load.
3. Repeated consumers share the cached decoded/downloaded instance.
4. Required common UI may remain resident.
5. Optional region/event resources use bounded lifetime rather than permanent session accumulation.
6. Leaving a region/event makes optional resources eligible for eviction.
7. Gameplay state stores semantic IDs, never runtime resource-object handles.
8. A missing optional resource yields its deterministic fallback and diagnostics only.
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

Batch 02 converted the Batch 01 measurement method into numeric constraints.

```text
p6_owned_required_initial_resource_payload <= 3 MiB
pokemon_media_initial_payload == 0
compact_icon_decoded_cache <= 384 KiB
encounter_atlas_decoded_cache <= 1 MiB
per_encounter_atlas_guardrail <= 512 KiB
max_resident_encounter_atlases == 2
combined_optional_pokemon_decoded_image_working_set <= 1.375 MiB
baseline_bgm_ambience_ui_sfx_cries_payload == 0
required_raster_location_event_illustration_payload == 0
```

Representative evidence:

```text
compact_source_canvas == 68x56
compact_rgba8_decoded_bytes_each == 15,232
three_visible_compact_icons == 45,696 bytes
representative_001_animated_atlas == 181x181 == 131,044 RGBA8 bytes
representative_151_animated_atlas == 225x225 == 202,500 RGBA8 bytes
```

Decoded-image accounting starts with `width * height * 4` for RGBA8. P7 may additionally measure browser/device CPU/GPU overhead, but it must not silently weaken these P6 working-set caps.

Whole-151 residency is not a valid memory model because the runtime must not preload the corpus.

---

## 9. Validation contract

`tools/validate_p6_resources.py` rejects at least:

- duplicate `resource_id` values;
- unknown schema/source-map versions;
- missing or contradictory provenance/rights data;
- illegal bundling/public allowance of uncleared Pokémon media;
- source-pin drift;
- initial Pokémon-media preload;
- duplicate upstream artifact ownership under different resource IDs;
- decoded-memory budget violations;
- cache-key/duplicate-instance policy drift;
- unusable optional-media fallback semantics.

`tools/build_p6_production_import_manifest.py` is the Batch 03 live import checker. It:

- validates PokéSprite `001..151` compact coverage from the frozen mapping;
- validates the selected Gen-I animated PNG+JSON atlas pairs and all frame bounds;
- computes SHA-256 for every fetched artifact;
- fetches Pokémon media in memory only;
- emits only a metadata JSON manifest;
- never embeds or uploads Pokémon source media as CI evidence.

The normal static validator remains runnable without network access. The explicit Batch 03 production-import CI step performs live pinned-source validation and then passes its produced metadata manifest back through the static policy validator.

---

## 10. P6-HDG-001 — RESOLVED by D-036

D-036 supersedes the historical Batch 01 option menu.

```text
compact_pokemon_identity_candidate == PokeSprite
encounter_pokemon_presentation == animated_sprite
unknown_encounter_conceal_reveal == true
per_reveal_state_duplicate_sprite_assets == false
all_151_encounter_animations_preloaded == false
presentation_animation_mutates_authoritative_game_state == false
current_blocking_p6_human_design_gate_count == 0
```

The player-facing reveal sequence is `concealed → silhouette → partial_reveal → revealed → identified`. Shading/color treatment, crop/mask, foreground occlusion and fog/darkness/light/environment layers are non-authoritative presentation operations.

---

## 11. P7 handoff constraints frozen by P6

After the P6 exit audit passes, P7 may choose technology but must support:

- semantic `resource_id` lookup independent of upstream paths;
- build-time generated/indexed manifests;
- deterministic fallbacks;
- optional local rights-gated enrichment;
- coalesced asynchronous loading and cache reuse;
- bounded region/event eviction;
- the frozen mobile budgets above;
- no per-frame manifest/species scans;
- no routine runtime media conversion;
- testable loading/memory diagnostics.

P6 deliberately does **not** choose React, another web framework, PWA packaging, native wrappers, save/storage architecture or backend design.

---

## 12. P6 Batch 03 exit conditions

P6 may close only when the final branch/PR proves all of the following:

1. frozen PokéSprite compact import resolves and validates `001..151`;
2. selected Gen-I animated PNG+JSON pairs and frame bounds validate under the frozen pin;
3. every fetched artifact receives SHA-256 in the produced metadata manifest;
4. produced/public CI evidence contains no `not_cleared` Pokémon media bytes;
5. resource rights, duplicate, cache, fallback and budget validation passes against produced evidence;
6. this historical strategy wording is reconciled with D-036 and Batch 02;
7. `docs/P6_EXIT_AUDIT.md` records the exact result;
8. #12 closes and P7 becomes active only after the complete audit passes.

Until those conditions pass on the final P6 head, `p6_complete == false` and `p7_may_begin == false`.

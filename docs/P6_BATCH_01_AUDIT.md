# P6 Batch 01 Audit — Resource Requirements Matrix and Source Refresh

Verified: **2026-08-16**  
Owner phase: **#12 — P6 Resource and asset strategy, sourcing, provenance, and mobile budget**  
Strategy: `docs/RESOURCE_STRATEGY.md`  
Manifest schema: `docs/P6_RESOURCE_MANIFEST_SCHEMA.json`

## Scope

P6 Batch 01 was limited to the objective foundation needed before exact resource-family selection:

- derive required / optional / deferred resource classes from P2-P5 and the P8 vertical-slice contract;
- refresh only the P1 shortlist against its current primary upstream state;
- separate technical convenience from license/IP/redistribution classification;
- define public-safe baseline versus optional local enrichment;
- freeze stable resource identity, provenance fields, build-time preprocessing and runtime cache semantics;
- define how mobile budgets will be measured without inventing final numbers;
- stop at the smallest unresolved creative presentation decision.

P7 architecture was not selected or started.

---

## 1. Upstream product-requirement audit

| Authority | Required consequence for P6 | Result |
|---|---|---|
| D-002 text RPG/TRPG | resources support a text-first event-driven product rather than replacing it with a conventional graphical collector | PASS |
| D-013 companion contract | exactly three visible companion slots; `0/3` remains normal and fully playable | PASS |
| P3 check/state contracts | dice/check/outcome plus human resource/status information need compact presentation | PASS |
| P4 151-species contract | resource system can address all species without requiring all 151 media files resident or even bundled | PASS |
| P5 shared event engine | resource absence never changes event eligibility/RNG/choice/consequence semantics | PASS |
| P8 vertical slice | phone UI can prove one mixed human/environment/faction/Pokémon run using only the minimum approved P6 resource set | PASS |

Result:

```text
product_derived_asset_inventory == PASS
required_asset_classes_defined == true
optional_asset_classes_defined == true
deferred_asset_classes_defined == true
zero_companion_visual_path_preserved == true
optional_resource_absence_changes_gameplay == false
```

---

## 2. P1 shortlist refresh

### Pokémon media

| Candidate | Refreshed state | P6 decision | Public repository policy |
|---|---|---|---|
| PokéAPI `sprites` | head `c10459b9b0129eaca5c5d9b1cac65336debb1d08` | ADAPT | metadata only by default |
| PokéSprite | head `c5aaa610ff2acdf7fd8e2dccd181bca8be9fcb3e`; old maintenance state | ADAPT | metadata only by default |
| PokéAPI `cries` | head `ef687b18f0ce17169b4b4c09175819f7ade92f0f` | DEFER | metadata only; not a baseline dependency |

The three P1 pins above still match the refreshed upstream heads observed during Batch 01. This does **not** make the underlying Pokémon image/audio rights equivalent to the repositories' software/data licenses.

### Fonts and generic UI

| Candidate | Refreshed state | P6 decision |
|---|---|---|
| Pretendard | release family `1.3.9`, OFL-1.1 | ADOPT as primary Korean/Latin candidate; concrete artifact measurement-gated |
| Noto Sans CJK/Korean | OFL-1.1 coverage baseline | ADAPT as fallback/reference; avoid redundant full bundle by default |
| Lucide | P1's `1.16.0` observation is stale; Batch 01 observed `1.27.0` release line | ADOPT tiny per-icon SVG subset; pin exact files in Batch 02 |
| Material Symbols | Apache-2.0, broad/subsettable symbol ecosystem | DEFER while Lucide + project marks cover needs |
| project-owned CSS/SVG | project-controlled | ADOPT for domain-specific semantics |

### General asset/audio ecosystems

| Candidate | P6 decision | Reason |
|---|---|---|
| Kenney individual packs | DEFER | clean licensing alone is not a reason to import unused/style-setting packs |
| Freesound | DEFER, individual assets only | per-sound license/provenance must be classified; no runtime API need |
| OpenGameArt | DEFER, individual assets only | mixed licenses require per-asset verification |
| project-created/generated resources | ADOPT as a production method | useful for world-specific presentation while retaining provenance; exact art direction remains gated |

Refresh result:

```text
broad_new_source_sweep_performed == false
p1_shortlist_only_refreshed == true
source_pin_updates_required_for_pokeapi_sprites == false
source_pin_updates_required_for_pokeapi_cries == false
source_pin_updates_required_for_pokesprite == false
p1_lucide_release_observation_still_current == false
```

---

## 3. Rights / redistribution audit

The strategy intentionally fails closed for uncertain media rights.

```text
repository_open_source_license_relicenses_pokemon_media == false
fan_project_noncommercial_status_grants_pokemon_redistribution_rights == false
pokemon_media_public_repo_mode_default == metadata_only
pokemon_media_public_distribution_default == not_cleared
public_safe_build_requires_pokemon_images == false
public_safe_build_requires_pokemon_cries == false
missing_optional_media_blocks_gameplay == false
unknown_rights_fail_closed == true
```

Result: **PASS**.

No large Pokémon/third-party asset corpus was committed by Batch 01.

---

## 4. Resource identity / manifest audit

`docs/P6_RESOURCE_MANIFEST_SCHEMA.json` defines JSON Schema 2020-12 contract `p6-resource-manifest-v1`.

A concrete record requires:

- stable semantic `resource_id`;
- asset class and requirement class;
- source identity/kind;
- canonical upstream URL;
- exact version/pin and content hash field;
- rights holder/license/Pokémon-IP boundary/attribution classification;
- repository/build/public redistribution mode;
- preprocessing recipe/output;
- preload/cache identity and duplicate-instance policy;
- deterministic fallback.

Frozen cache identity semantics:

```text
runtime_cache_key == resource_id
duplicate_instance_policy == reuse_single_cached_instance
per_render_full_manifest_scan == false
per_render_full_species_asset_scan == false
```

The schema is intentionally implementation-neutral: it does not encode a P7 framework, object type, HTTP cache implementation or save format.

---

## 5. Preprocessing / performance audit

Batch 01 freezes performance policy rather than premature numeric limits.

```text
build_time_normalization_preferred == true
runtime_resize_as_default == false
runtime_format_conversion == false
runtime_font_conversion == false
duplicate_download_for_same_resource_id == false
duplicate_decoded_instance_for_same_resource_id == false
all_151_pokemon_media_preloaded == false
full_audio_catalog_preloaded == false
atlas_required_without_measurement == false
```

Resource lookup/cache must be indexed/cached, with O(1)-equivalent lookup rather than repeated manifest scans.

For image-budget planning, the strategy records the conservative RGBA8 first-order estimate:

```text
decoded_bytes_estimate = width * height * 4
```

This is not treated as a final browser/GPU measurement. Batch 02 must compare it with real representative output/device behavior.

### Why no final numeric budget is frozen yet

A number chosen before selecting the actual font subset, icon files, Pokémon visual policy and representative output dimensions would be arbitrary. Batch 01 therefore defines the measurement categories but correctly leaves final thresholds open.

```text
final_numeric_initial_payload_budget_frozen == false
final_numeric_decoded_image_budget_frozen == false
final_numeric_audio_budget_frozen == false
final_numeric_cache_limit_frozen == false
measurement_methodology_defined == true
```

Result: **PASS** for Batch 01 scope.

---

## 6. Human Design Gate — P6-HDG-001

One material choice cannot be resolved objectively from rights/performance/product evidence alone: **how much Pokémon imagery the intended text-first product should display**.

Options recorded in `docs/RESOURCE_STRATEGY.md`:

- **A — encounter sprite + compact companion icon (recommended)**;
- **B — compact icon only**;
- **C — no Pokémon-derived visual media in v1**;
- **D — project-created/generated encounter illustrations**.

Recommendation: **A**. It keeps Pokémon identity visually strong during important direct interactions while preserving text-first density and a bounded mobile resource working set.

The exact sprite/icon family, files and output dimensions must not be frozen until the owner chooses.

```text
blocking_p6_human_design_gate_count == 1
blocking_p6_human_design_gate == P6-HDG-001
```

---

## 7. Batch 01 verdict

```text
resource_requirements_matrix == PASS
p1_candidate_refresh == PASS
rights_boundary == PASS
public_safe_baseline == PASS
manifest_schema_foundation == PASS
build_time_normalization_contract == PASS
cache_reuse_contract == PASS
mobile_budget_methodology == PASS
blocking_p6_human_design_gate_count == 1
p6_complete == false
p7_may_begin == false
```

**P6 Batch 01 verdict: PASS.**

P6 itself remains active. P7 remains blocked.

---

## 8. Exact next work

After the owner resolves `P6-HDG-001`, run **P6 Batch 02 — exact artifact selection + measurement**:

1. write the owner choice into `docs/DECISIONS.md`;
2. freeze exact Pretendard artifacts/weights/subset strategy;
3. freeze exact Lucide release/files and project-owned UI marks;
4. select representative Pokémon visual artifacts only if the chosen option requires them;
5. generate concrete manifest records with SHA-256/provenance/redistribution/fallback fields;
6. run reproducible preprocessing;
7. measure production payload and decoded working sets;
8. choose output dimensions/formats from measurements;
9. freeze numeric resource/cache budgets;
10. add executable manifest/provenance/duplicate/fallback validation;
11. continue P6 until its full exit audit passes; do not begin P7 early.
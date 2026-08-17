# P6 Exit Audit — Resource Strategy, Provenance, Production Import, and Mobile Budget

Date: **2026-08-17**  
Issue: **#12**  
Candidate branch: `agent/p6-batch03-production-import-exit`  
Verdict: **PASS**

P6 exit is accepted from the successful full-production-import candidate and remains subject to the same workflow on the final PR head.

Validated candidate evidence:

```text
head == 95787eda4c1c04aeb27c4acb0c4256c12206e85b
P6 Resource Validation run == #30
workflow conclusion == success
```

## 1. Required outputs

| Requirement | Evidence | Status |
|---|---|---|
| Resource strategy | `docs/RESOURCE_STRATEGY.md` | PASS |
| Versioned provenance/resource manifest | `docs/P6_RESOURCE_MANIFEST_SCHEMA.json`, `docs/P6_RESOURCE_MANIFEST.json` | PASS |
| Pokémon source-map contract | `docs/P6_POKEMON_RESOURCE_SOURCE_MAP.json` | PASS |
| ADOPT / ADAPT / DEFER decisions | `docs/RESOURCE_STRATEGY.md` | PASS |
| Mobile budget/loading contract | `docs/P6_RESOURCE_BUDGET_AND_PIPELINE_CONTRACT.md` | PASS |
| D-036 presentation decision | `docs/DECISION_D036_HYBRID_POKEMON_PRESENTATION.md`, `docs/P6_HYBRID_POKEMON_PRESENTATION_CONTRACT.md` | PASS |
| Batch 03 production-import audit | `docs/P6_BATCH_03_AUDIT.md` | PASS |
| Static executable validation | `tools/validate_p6_resources.py` | PASS |
| Full production-import validation | `tools/build_p6_production_import_manifest.py` + CI run #30 | PASS |

## 2. Frozen product/resource boundary

```text
public_safe_build_requires_pokemon_images == false
public_safe_build_requires_pokemon_cries == false
missing_optional_media_changes_authoritative_gameplay == false
pokemon_media_repo_mode_default == metadata_only
pokemon_media_public_distribution_default == not_cleared
pokemon_media_initial_payload == 0
```

D-036 presentation remains optional enrichment over authoritative text/event state:

```text
compact_pokemon_identity_candidate == PokeSprite
encounter_pokemon_presentation == animated_sprite
conceal_reveal_materializes_duplicate_source_assets == false
presentation_animation_mutates_authoritative_game_state == false
```

This does not weaken the world-content requirement: National Pokédex `001..151` retain a living direct-interaction path in game content. Optional media failure cannot remove a gameplay encounter.

## 3. Frozen source pins

```text
Pretendard v1.3.9
  5c41199ea0024a9e0b2cb31735265056e5472d76
Lucide 1.27.0
  4aec3f892fd6c23063bc2fead83c899b5d412b1c
PokéSprite compact family
  c5aaa610ff2acdf7fd8e2dccd181bca8be9fcb3e
PokéRogue animated family
  909b43612324622608023b3beb2f24f4ef159c1d
```

Pin drift fails validation.

## 4. Full Gen-I production measurement

```text
compact_default_pngs_validated == 151/151
animated_png_json_pairs_validated == 151/151
animated_metadata_layout.texture_array_v1 == 150
animated_metadata_layout.root_frames_meta_v1 == 1
animated_metadata_format.RGBA8888 == 150
animated_metadata_format.I8 == 1
old_512_KiB_sample_cap_exceeded_by == 25 species
max_source_atlas == #085
max_source_atlas_dimensions == 673x673
max_source_atlas_RGBA8_estimate == 1,811,716 bytes
```

The provisional Batch 02 `512 KiB` per-atlas value is superseded because complete coverage disproved it. A repack experiment still left 20 species above `512 KiB`, so P6 does not impose custom repacking merely to preserve an invalid representative-sample cap.

## 5. Final frozen mobile budgets

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

Runtime handoff remains cache-first and bounded:

```text
cache_key == resource_id
duplicate_instance_policy == reuse_single_cached_instance
all_151_pokemon_media_preloaded == false
runtime_default_image_resize == false
runtime_atlas_repack == false
per_render_full_manifest_scan == false
per_render_full_species_asset_scan == false
```

The final `2 MiB` per-atlas guardrail gives headroom over the measured `1,811,716 B` maximum. Two worst-case measured atlases fit inside the `4 MiB` encounter cache.

## 6. Production-import exit proof

Run #30 proved:

```text
pokesprite_compact_validated == 151/151
pokerogue_animated_png_json_pairs_validated == 151/151
all_animated_frame_bounds_valid == true
all_fetched_artifacts_have_SHA256 == true
animated_source_atlas_over_2_MiB_count == 0
produced_evidence_contains_pokemon_source_media == false
produced_evidence_is_metadata_only == true
```

The live checker fetches pinned media in memory, validates/hash-materializes it, and writes only JSON metadata evidence. The successful CI Artifact `p6-production-import-manifest` is metadata-only evidence rather than a Pokémon media bundle.

## 7. Fail-closed validation obligations

The frozen validators reject or prevent:

- duplicate resource IDs and duplicate logical source ownership;
- unknown schema versions;
- source-pin drift;
- missing required provenance;
- public `allowed` / repository `commit_allowed` treatment of current uncleared Pokémon media;
- initial Pokémon-media preload;
- duplicate decoded instances for one semantic resource ID;
- compact or encounter decoded-budget violations;
- unsupported/malformed animated metadata or invalid frame/source bounds;
- optional-media absence changing gameplay;
- Pokémon source media appearing in generated public CI evidence.

The pinned full-data distribution is regression-checked: 151 IDs, layout distribution `150/1`, format distribution `150/1`, 25 species above the superseded `512 KiB` threshold, and max #085 `673x673 / 1,811,716 B`.

## 8. P7 handoff

P7 #7 is unblocked after #12 closes. P7 must preserve:

- semantic `resource_id` lookup;
- generated/indexed manifests rather than hot-path source parsing;
- deterministic media fallback;
- optional local enrichment separated from public-safe resources;
- coalesced async loading and cache reuse;
- bounded eviction;
- `384 KiB` compact cache;
- `2 MiB` per encounter atlas, max two resident, `4 MiB` encounter cache;
- no routine runtime image resize/repack/format conversion;
- no backend requirement unless a concrete product need appears.

P6 does not preselect the P7 framework, PWA packaging, save/storage implementation or deployment target.

## 9. Exit verdict

```text
p6_static_contracts_present == true
p6_batch03_live_validator_present == true
p6_full_gen1_measurement_recorded == true
p6_validated_candidate_ci == PASS
p6_complete == true
issue_12_may_close == true
p7_may_begin_after_issue_12_close == true
```

**P6 verdict: PASS.** The final PR head must remain green under the same P6 Resource Validation workflow before merge.

# P6 Exit Audit — Resource Strategy, Provenance, Production Import, and Mobile Budget

Date: **2026-08-17**  
Issue: **#12**  
Candidate branch: `agent/p6-batch03-production-import-exit`  
Verdict: **PENDING FINAL PR-HEAD CI**

P6 becomes `COMPLETE` only after the final candidate head passes the complete P6 Resource Validation workflow. The audit remains fail-closed until that proof is green.

## 1. Required outputs

| Requirement | Evidence | Candidate status |
|---|---|---|
| Resource strategy | `docs/RESOURCE_STRATEGY.md` | PASS |
| Versioned provenance/resource manifest | `docs/P6_RESOURCE_MANIFEST_SCHEMA.json`, `docs/P6_RESOURCE_MANIFEST.json` | PASS |
| Pokémon source-map contract | `docs/P6_POKEMON_RESOURCE_SOURCE_MAP.json` | PASS |
| ADOPT / ADAPT / DEFER decisions | `docs/RESOURCE_STRATEGY.md` | PASS |
| Mobile budget/loading contract | `docs/P6_RESOURCE_BUDGET_AND_PIPELINE_CONTRACT.md` | PASS |
| D-036 presentation decision | `docs/DECISION_D036_HYBRID_POKEMON_PRESENTATION.md`, `docs/P6_HYBRID_POKEMON_PRESENTATION_CONTRACT.md` | PASS |
| Static executable validation | `tools/validate_p6_resources.py` | PASS |
| Full production-import validation | `tools/build_p6_production_import_manifest.py` + CI | PENDING FINAL CI |

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

This does not weaken the world-content requirement: National Pokédex `001..151` must retain a living direct-interaction path in game content. Optional media failure cannot remove a gameplay encounter.

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

Batch 03 performed the measurement that Batch 02 deliberately left open.

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

The old `512 KiB` per-atlas value is superseded because full coverage disproved it. A repack experiment still left 20 species above `512 KiB`, so a custom repacker is not imposed merely to preserve that provisional sample cap.

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

The final workflow must prove, on the final candidate head:

```text
pokesprite_compact_validated == 151/151
pokerogue_animated_png_json_pairs_validated == 151/151
all_animated_frame_bounds_valid == true
all_fetched_artifacts_have_SHA256 == true
animated_source_atlas_over_2_MiB_count == 0
produced_evidence_contains_pokemon_source_media == false
produced_evidence_is_metadata_only == true
```

The live checker fetches pinned media in memory, validates/hash-materializes it, and writes only JSON metadata evidence.

## 7. Fail-closed validation obligations

The final head must reject or prevent:

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

The pinned full-data distribution is itself regression-checked: 151 IDs, layout distribution `150/1`, format distribution `150/1`, 25 species above the superseded `512 KiB` threshold, and max #085 `673x673 / 1,811,716 B`.

## 8. P7 handoff if and only if final verdict becomes PASS

P7 #7 may begin after this audit becomes `PASS`, the final candidate remains CI-green, and #12 closes. P7 must preserve:

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

## 9. Candidate verdict

Current pre-final-CI state:

```text
p6_static_contracts_present == true
p6_batch03_live_validator_present == true
p6_full_gen1_measurement_recorded == true
p6_final_live_import_ci_passed == not_yet_proven_on_final_head
p6_complete == false
issue_12_may_close == false
p7_may_begin == false
```

After a green final PR-head workflow, promote this verdict to `PASS`, close #12, and advance `PROJECT_STATUS.md` to P7.

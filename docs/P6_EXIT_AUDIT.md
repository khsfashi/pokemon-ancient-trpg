# P6 Exit Audit — Resource Strategy, Provenance, Production Import, and Mobile Budget

Date: **2026-08-17**  
Issue: **#12**  
Candidate branch: `agent/p6-batch03-production-import-exit`  
Verdict: **PENDING FINAL PR-HEAD CI**

P6 may become `COMPLETE` only when the final candidate head passes the complete P6 Resource Validation workflow. This file intentionally starts fail-closed rather than declaring success before the live pinned-source production import has run.

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

This does not weaken D-034/P4/P9 world-content requirements: all National Pokédex `001..151` still require a living direct-interaction path in total game content. Missing optional presentation media cannot remove those gameplay encounters.

## 3. Frozen source pins

```text
Pretendard v1.3.9
  5c41199ea0024a9e0b2cb31735265056e5472d76
Lucide 1.27.0
  4aec3f892fd6c23063bc2fead83c899b5d412b1c
PokéSprite compact candidate
  c5aaa610ff2acdf7fd8e2dccd181bca8be9fcb3e
PokéRogue animated candidate
  909b43612324622608023b3beb2f24f4ef159c1d
```

Pin drift fails validation.

## 4. Frozen mobile budgets

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

Runtime handoff remains cache-first and bounded:

```text
cache_key == resource_id
duplicate_instance_policy == reuse_single_cached_instance
all_151_pokemon_media_preloaded == false
per_render_full_manifest_scan == false
per_render_full_species_asset_scan == false
```

## 5. Production-import exit proof

The final workflow must prove, on the exact final candidate head:

```text
pokesprite_compact_validated == 151/151
pokerogue_animated_png_json_pairs_validated == 151/151
all_animated_frame_bounds_valid == true
sha256_materialized_for_every_fetched_artifact == true
produced_evidence_contains_pokemon_source_media == false
produced_evidence_is_metadata_only == true
```

The live checker is intentionally separate from the normal runtime. It fetches pinned media in memory, validates/hash-materializes it, and writes only JSON metadata evidence.

## 6. Fail-closed validation obligations

The final head must reject or prevent:

- duplicate resource IDs and duplicate logical source ownership;
- unknown schema versions;
- source-pin drift;
- missing required provenance;
- public `allowed` / repository `commit_allowed` treatment of current uncleared Pokémon media;
- initial Pokémon-media preload;
- duplicate decoded instances for one semantic resource ID;
- compact/animated decoded-budget violations;
- invalid/missing animated frame metadata;
- optional-media absence changing gameplay;
- Pokémon source media appearing in the generated public CI evidence artifact.

## 7. P7 handoff if and only if final verdict becomes PASS

P7 #7 may begin after this audit is changed to `PASS` on a CI-green final candidate and #12 is closed. P7 must preserve:

- semantic `resource_id` lookup;
- generated/indexed manifests rather than hot-path source parsing;
- deterministic media fallback;
- optional local enrichment separated from public-safe resources;
- coalesced async loading and cache reuse;
- bounded eviction and the P6 mobile budgets;
- no routine per-frame species/resource scans;
- no backend requirement unless a concrete product need appears.

P6 does not preselect the P7 framework, PWA packaging, save/storage implementation or deployment target.

## 8. Candidate verdict

Current pre-CI state:

```text
p6_static_contracts_present == true
p6_batch03_live_validator_present == true
p6_final_live_import_ci_passed == not_yet_proven
p6_complete == false
issue_12_may_close == false
p7_may_begin == false
```

After a green final PR-head workflow, update this section with the exact head SHA and validation result, set `Verdict: PASS`, close #12, and advance `PROJECT_STATUS.md` to P7.

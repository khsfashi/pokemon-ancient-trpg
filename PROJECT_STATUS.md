# Project Status

Last explanatory handoff update: **2026-08-16**

This file is the concise operational handoff. Durable product authority remains in `docs/DECISIONS.md` and phase contracts; live GitHub state wins if this file is stale.

## Binding direction

- Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.
- Setting is earlier than Hisui, in future-Kanto territory before mature regional civilization.
- Iron-age / medieval-fantasy-like ordinary material baseline with narrow Pokémon-dependent technology/culture islands.
- No normalized trainer culture, routine ownership, portable containment, Poké Balls or PC storage.
- Exactly three visible companion slots; `0/3` remains a valid complete run.
- Pokémon use fixed six-axis species baselines plus capability/hazard tags. Ordinary Pokémon do not scale with the player; exceptional individuals require explicit persistent history/traits.
- Mandatory Generation-I roster is National Pokédex #001-#151.
- D-034 requires all 151 to have a living direct-interaction path somewhere in total content while natural presence/commonness/companionship/one-run availability remain separate.
- The world is Pokémon-shaped society, not Pokémon-only events: human/social, survival/environment, faction/relationship and mixed-world content share the same event system.
- `p5-event-contract-v1` is frozen: transition-driven evaluation, data-driven content, keyed deterministic RNG, reload-safe pending events and typed upstream mutations.
- Resource planning is now P6-owned: stable resource IDs, provenance/redistribution classification, build-time normalization, cached runtime reuse and measured mobile budgets must be frozen before P7 architecture.

World/faction contract: `docs/WORLD_CONTENT_AND_FACTION_CONTRACT.md`

## Completed phases

```text
P0 Governance                         COMPLETE
P1 Reference/API/data/resource/IP     COMPLETE
P2 World bible and setting contract   COMPLETE
P3 Core TRPG rules/character model    COMPLETE
P4 Pokémon adaptation + Gen-I 151     COMPLETE
P5 Narrative world-event engine       COMPLETE
```

## P4 final state

P4 issue: **#5**  
Strict exit audit: `docs/P4_EXIT_AUDIT.md`  
Coverage audit: `docs/P4_SPECIES_COVERAGE_MANIFEST_AUDIT.md`  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`

```text
mandatory_species_ids == {1..151}
dossier_complete_count == 151
source_review_complete_count == 151
blocking_p4_gate_count == 0
```

Result: **PASS**.

P5/P9 continue preserving D-034 direct encounterability without implying baseline natural presence, capture, companionship or routine one-run availability. Lapras remains noncoercive; Mew remains mythical/singular and only reachable through a rare authored stateful living interaction. No player-level Pokémon scaling, portable containment, generic evolution/loot, continuous species simulation or per-frame all-species scanning.

## P5 final state

P5 issue: **#6**  
Strict exit audit: `docs/P5_EXIT_AUDIT.md`  
Foundation: `docs/P5_DETERMINISTIC_EVENT_FOUNDATION_CONTRACT.md`  
Normalized schema: `docs/P5_NORMALIZED_EVENT_SCHEMA.json`  
Pending schema: `docs/P5_PENDING_EVENT_STATE_SCHEMA.json`  
Adapter registry: `docs/P5_DOMAIN_ADAPTER_REGISTRY.yaml`  
Representative events: `docs/P5_BATCH_03_REPRESENTATIVE_EVENTS.yaml`  
Validator: `tools/validate_p5_contract.py`

```text
contract_version == p5-event-contract-v1
P5V001_through_P5V018_positive_control_count == 18
P5V001_through_P5V018_negative_failure_count == 18
representative_normalized_event_count == 7
pending_mid_choice_resume_valid == true
pending_mid_roll_resume_valid == true
pending_mid_reaction_resume_valid == true
p2_world_typed_mutation_gap_count == 0
p3_contradiction_count == 0
p4_contradiction_count == 0
zero_companion_run_blocker_count == 0
blocking_p5_human_design_gate_count == 0
```

Result: **PASS**.

## Current phase

**P6 — Resource and asset strategy, sourcing, provenance, and mobile budget (#12) is active.**

Primary P6 artifacts:

- strategy: `docs/RESOURCE_STRATEGY.md`
- Batch 01 audit: `docs/P6_BATCH_01_AUDIT.md`
- manifest schema: `docs/P6_RESOURCE_MANIFEST_SCHEMA.json`
- P1 source recon: `docs/P1_RESOURCE_ECOSYSTEM_RECON.md`
- source registry: `docs/SOURCE_REGISTRY.md`

### P6 Batch 01 — PASS

Batch 01 derived resource needs from P2-P5/P8 before choosing exact files, refreshed only the P1 source shortlist, separated public-safe resources from uncleared Pokémon media, and froze the versioned resource/provenance/cache contract.

```text
resource_strategy_version == p6-resource-strategy-v1
resource_manifest_schema_version == p6-resource-manifest-v1
json_schema_draft == 2020-12
product_derived_asset_inventory_frozen == true
required_optional_deferred_classes_defined == true
public_safe_baseline_defined == true
optional_local_enrichment_boundary_defined == true
stable_resource_id_contract_defined == true
runtime_cache_key == resource_id
duplicate_instance_policy == reuse_single_cached_instance
build_time_normalization_preferred == true
runtime_resize_as_default == false
runtime_format_conversion == false
duplicate_download_for_same_resource_id == false
all_151_pokemon_media_preloaded == false
final_numeric_budget_invented_without_measurement == false
blocking_p6_human_design_gate_count == 1
blocking_p6_human_design_gate == P6-HDG-001
p6_complete == false
p7_may_begin == false
```

### Refreshed source decisions

```text
PokéAPI sprites      ADAPT   optional Pokémon visual candidate; metadata-only public default
PokéSprite           ADAPT   compact visual candidate; metadata-only public default
PokéAPI cries        DEFER   not needed for baseline text-first loop
Pretendard           ADOPT   primary Korean/Latin font candidate; exact artifact measured in B02
Noto Sans CJK/KR     ADAPT   fallback/coverage reference; avoid redundant full bundle
Lucide               ADOPT   tiny per-icon SVG subset only; exact current files pinned in B02
Material Symbols     DEFER   breadth/reference fallback
project-owned SVG    ADOPT   default for game-domain UI marks
Kenney               DEFER   exact pack only after a concrete gap exists
Freesound            DEFER   individually classified assets only
OpenGameArt          DEFER   individually classified assets only
project/generated    ADOPT   production method for world-specific presentation
```

Pokémon media remains optional presentation until an exact artifact is separately rights-classified:

```text
pokemon_media_repo_mode_default == metadata_only
pokemon_media_public_distribution_default == not_cleared
public_safe_build_requires_pokemon_images == false
public_safe_build_requires_pokemon_cries == false
missing_optional_media_changes_authoritative_gameplay == false
```

### P6-HDG-001 — Pokémon visual density/family

This is the one material Batch 01 choice that evidence cannot resolve for the owner.

- **A — encounter sprite + compact companion icon (recommended):** one static Pokémon image for meaningful direct encounters plus compact three-slot/list identity; no default animation/back/shiny set.
- **B — compact icon only:** encounters remain primarily prose; icons only for compact identity.
- **C — no Pokémon-derived visual media in v1:** intended presentation itself is text/CSS/project marks.
- **D — project-created/generated encounter illustrations:** strongest bespoke direction but highest authoring/provenance/style-consistency cost.

Do not freeze exact Pokémon visual family/files/dimensions until this gate is answered and written to `docs/DECISIONS.md`.

## Exact next work

After the owner resolves **P6-HDG-001**, run **P6 Batch 02 — exact artifact selection + measurement**:

1. record the owner decision in `docs/DECISIONS.md`;
2. freeze the exact Pretendard artifacts/weights/subset recipe and notices;
3. freeze the exact Lucide release/files and project-owned domain marks;
4. choose representative Pokémon visual files only if the selected gate option requires them;
5. create concrete `p6-resource-manifest-v1` records with exact pins, SHA-256, rights/redistribution/preprocessing/fallback fields;
6. run reproducible build-time normalization;
7. measure actual initial resource payload and representative decoded working sets;
8. select output dimensions/formats using those measurements;
9. freeze numeric initial-payload/image/audio/cache budgets only from measured candidates;
10. add executable manifest/provenance/duplicate/fallback validation;
11. keep #12 open and **do not begin P7** until full P6 exit passes.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

P8 must prove a phone-sized mixed-world loop with settlement/social pressure, travel/survival, a persistent faction/relationship thread, Pokémon ecology/direct interaction and a complete `0/3` path.

P9 must realize substantive world-content breadth, several recurring Pokémon-shaped major factions (current planning target roughly 4–6 lanes), and all 151 living direct-interaction paths.
# Project Status

Last explanatory handoff update: **2026-08-16**

This file is the concise operational handoff. Durable product authority remains in `docs/DECISIONS.md`, separate later decision files and phase contracts; live GitHub state wins if this file is stale.

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
- D-036 resolves Pokémon presentation as a hybrid: **PokéSprite-style compact identity + animated encounter sprites + non-destructive conceal/reveal/shading/masking/environment layers**. Exact files remain provenance-gated P6 work.

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
- D-036 presentation decision: `docs/DECISION_D036_HYBRID_POKEMON_PRESENTATION.md`
- hybrid presentation contract: `docs/P6_HYBRID_POKEMON_PRESENTATION_CONTRACT.md`
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
batch01_blocking_p6_human_design_gate_count == 1
batch01_blocking_p6_human_design_gate == P6-HDG-001
p6_complete == false
p7_may_begin == false
```

### P6-HDG-001 — RESOLVED by D-036

The owner selected a refined hybrid direction after Batch 01:

```text
compact_pokemon_identity_candidate == PokeSprite
encounter_pokemon_presentation == animated_sprite
unknown_encounter_conceal_reveal == true
non_destructive_silhouette == allowed
non_destructive_shading == allowed
crop_mask_partial_reveal == allowed
environment_foreground_overlay == allowed
per_reveal_state_duplicate_sprite_assets == false
all_151_encounter_animations_preloaded == false
presentation_animation_mutates_authoritative_game_state == false
current_blocking_p6_human_design_gate_count == 0
```

Binding authority: `docs/DECISION_D036_HYBRID_POKEMON_PRESENTATION.md`. The unresolved A–D menu retained in the Batch 01 strategy/audit is historical Batch 01 state and is superseded by D-036.

### Hybrid Pokémon presentation contract

Compact UI identity and direct encounter presence are intentionally separate resource roles.

- **Compact identity:** audit one coherent PokéSprite family for companion/list/status surfaces.
- **Encounter:** audit the B/W-style animated sprite-atlas lineage currently exposed by `pagefaultgames/pokerogue-assets` as a candidate, not as blanket license authority.
- **Unknown-creature presentation:** the same cached encounter resource may be silhouette-shaded, masked/cropped, partially occluded, fogged/darkened or progressively revealed without multiplying source resources.
- **Player-safe reveal modes:** `concealed`, `silhouette`, `partial_reveal`, `revealed`, `identified`.
- **Environment:** project-owned/generated backgrounds, masks and overlays are valid with retained provenance.
- **Rights:** Pokémon media remains metadata-only / not-cleared by default until exact files are classified.

Observed P6 refresh for the encounter candidate:

```text
pokerogue_assets_candidate_revision == 909b43612324622608023b3beb2f24f4ef159c1d
observed_species_asset_layout == images/pokemon/{id}.png + images/pokemon/{id}.json
observed_001_uses_png_texture_plus_frame_metadata == true
technical_candidate_suitability == PASS
rights_clearance_from_repository_presence == false
```

### Refreshed source decisions

```text
PokéAPI sprites      ADAPT   alternate Pokémon visual/source-reference candidate
PokéSprite           ADAPT   selected compact-identity family candidate; exact files B02-gated
PokéRogue assets     ADAPT   selected animated encounter candidate path; per-file provenance required
PokéAPI cries        DEFER   not needed for baseline text-first loop
Pretendard           ADOPT   primary Korean/Latin font candidate; exact artifact measured in B02
Noto Sans CJK/KR     ADAPT   fallback/coverage reference; avoid redundant full bundle
Lucide               ADOPT   tiny per-icon SVG subset only; exact current files pinned in B02
Material Symbols     DEFER   breadth/reference fallback
project-owned SVG    ADOPT   default for game-domain UI marks
Kenney               DEFER   exact pack only after a concrete gap exists
Freesound            DEFER   individually classified assets only
OpenGameArt          DEFER   individually classified assets only
project/generated    ADOPT   environment/background/overlay production method
```

Pokémon media remains optional presentation until an exact artifact is separately rights-classified:

```text
pokemon_media_repo_mode_default == metadata_only
pokemon_media_public_distribution_default == not_cleared
public_safe_build_requires_pokemon_images == false
public_safe_build_requires_pokemon_cries == false
missing_optional_media_changes_authoritative_gameplay == false
```

## Exact next work

Continue **P6 Batch 02 — exact artifact selection + measurement** using D-036:

1. audit and pin one coherent PokéSprite compact family with exact Gen-I #001-#151 coverage evidence;
2. audit the PokéRogue/B/W-style animated candidate for #001-#151 coverage, frame-atlas shape and per-file provenance/rights metadata at a frozen revision;
3. select a small representative species set spanning materially different sprite bounds/frame counts before any whole-roster preload/measurement work;
4. freeze exact Pretendard artifacts/weights/subset recipe and notices;
5. freeze exact Lucide release/files and project-owned domain marks;
6. create concrete `p6-resource-manifest-v1` records with exact pins, SHA-256, rights/redistribution/preprocessing/fallback fields;
7. run reproducible build-time normalization and validate atlas/frame metadata without creating per-reveal-state image duplicates;
8. measure actual initial resource payload plus representative compact-icon, animated-encounter and decoded texture working sets;
9. measure the incremental cost of the normal conceal/reveal mask/overlay presentation path;
10. select output dimensions/formats and freeze numeric initial-payload/image/audio/cache budgets only from measured candidates;
11. add executable manifest/provenance/hash/duplicate/fallback/public-bundle validation;
12. keep #12 open and **do not begin P7** until full P6 exit passes.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

P8 must prove a phone-sized mixed-world loop with settlement/social pressure, travel/survival, a persistent faction/relationship thread, Pokémon ecology/direct interaction and a complete `0/3` path.

P9 must realize substantive world-content breadth, several recurring Pokémon-shaped major factions (current planning target roughly 4–6 lanes), and all 151 living direct-interaction paths.

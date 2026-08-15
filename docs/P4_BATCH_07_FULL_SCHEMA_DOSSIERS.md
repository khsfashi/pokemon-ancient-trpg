# P4 Batch 07 — Full-Schema Dossiers

Status: **REVIEW COMPLETE — ready for Batch 07 audit**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_07_SOURCE_REVIEW.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`

## 1. Review boundary

All six Batch 07 species use the frozen P4 dossier schema and `p4-six-axis-v1` with no manual stat exception.

The batch tests rare/legendary encounter ecology, direct encounterability without routine spawning, environment-changing permissions, extreme traversal, mythic recognition, and a high-rarity three-stage evolution family without introducing global singleton rules, generic weather control, player scaling, or modern level progression.

```text
legendary_global_singleton_rule_created == false
legendary_rarity_preserved == true
D034_direct_encounterability_preserved == true
routine_random_spawn_required == false
opening_locality_presence_required == false
generic_weather_control_subsystem_created == false
environment_hazard_capped_by_species_ratings == false
Dragonite_world_traversal_reduced_to_Speed_rating == false
modern_level_metadata_equals_kill_XP == false
capture_equals_companionship == false
```

## 2. Dossier set

| Dex | Species | Full-schema dossier |
|---:|---|---|
| #144 | Articuno / 프리져 | `docs/P4_BATCH_07_DOSSIER_144_ARTICUNO.md` |
| #145 | Zapdos / 썬더 | `docs/P4_BATCH_07_DOSSIER_145_ZAPDOS.md` |
| #146 | Moltres / 파이어 | `docs/P4_BATCH_07_DOSSIER_146_MOLTRES.md` |
| #147 | Dratini / 미뇽 | `docs/P4_BATCH_07_DOSSIER_147_DRATINI.md` |
| #148 | Dragonair / 신뇽 | `docs/P4_BATCH_07_DOSSIER_148_DRAGONAIR.md` |
| #149 | Dragonite / 망나뇽 | `docs/P4_BATCH_07_DOSSIER_149_DRAGONITE.md` |

Every document contains the shared required sections:

```text
identity
provenance
canonical_source_data
species_stat_profile
capabilities_and_hazards
ancient_strength
ancient_ecology
human_perception_and_culture
identification_and_knowledge
threat_and_encounter
individual_variation
companionship
mechanical_hooks
hunting_materials_and_resources
technology_and_craft
emergency_consumable_hooks
narrative_and_event_hooks
presentation_and_p6_followups
cross_species_links
open_questions_and_gates
```

## 3. Batch-specific invariants

### Legendary birds

Articuno, Zapdos and Moltres remain original-form legendary bird species with exceptional rarity. Their global population cardinality remains `unknown`; P4 does not invent a one-of-a-kind singleton rule. D-034 is satisfied through rare authored direct encounters rather than routine random spawning.

Galarian forms remain later nonmandatory context and do not substitute for the original #144-#146 rows.

### Environmental permissions

The source-backed environmental capabilities are represented as explicit event/route permissions and hazards:

```text
articuno-wing-chill-snowfall
zapdos-thundercloud-electricity
moltres-fire-plume
moltres-magma-recovery-boundary
dratini-shedding-site-waterfall
dragonair-weather-change
dragonite-long-range-flight
dragonite-mass-flight-collision
```

An axis may govern contest/permission where relevant, but it does not cap exposure consequence or become a flat damage formula. Dragonair weather changes require a concrete authored resulting weather state; the batch does not create a global weather-control subsystem.

### Dratini family evolution and maturation

Dratini's repeated shedding/growth remains same-species development. The pinned modern Red/Blue metadata for `Dratini -> Dragonair` at level 30 and `Dragonair -> Dragonite` at level 55 is preserved only as source context under D-032. It does not create kill-XP, a visible level meter, or a generic `Evolve` command.

### Dragonite traversal

Dragonite's normalized Speed rating remains `4`, while source-backed extreme long-range flight is represented as a locomotion/traversal capability. World traversal permission is therefore not incorrectly reduced to battle-stat normalization.

## 4. Companionship state

All six species use:

```text
companionship.classification == exceptional_only
```

This preserves rare meaningful bonds while keeping actual voluntary companionship possible. It never means defeat/capture equals recruitment, routine trainer ownership, or guaranteed player access.

## 5. Completion state

```text
full_schema_dossier_count == 6
dossier_status_complete_count == 6
required_section_count_per_dossier == 20
manual_stat_exception_count == 0
blocking_human_design_gate_count == 0
```

No Batch 07 dossier introduces a blocking Human Design Gate. The batch is ready for completion audit and atomic manifest promotion.

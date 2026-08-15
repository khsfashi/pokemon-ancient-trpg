# P4 Batch 13 — Full-Schema Dossiers

Status: **REVIEW COMPLETE — ready for Batch 13 completion audit**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_13_SOURCE_REVIEW.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## 1. Dossier set

| Dex | Species | Full-schema dossier |
|---:|---|---|
| #016 | Pidgey / 구구 | `docs/P4_BATCH_13_DOSSIER_016_PIDGEY.md` |
| #017 | Pidgeotto / 피죤 | `docs/P4_BATCH_13_DOSSIER_017_PIDGEOTTO.md` |
| #018 | Pidgeot / 피죤투 | `docs/P4_BATCH_13_DOSSIER_018_PIDGEOT.md` |
| #021 | Spearow / 깨비참 | `docs/P4_BATCH_13_DOSSIER_021_SPEAROW.md` |
| #022 | Fearow / 깨비드릴조 | `docs/P4_BATCH_13_DOSSIER_022_FEAROW.md` |
| #084 | Doduo / 두두 | `docs/P4_BATCH_13_DOSSIER_084_DODUO.md` |
| #085 | Dodrio / 두트리오 | `docs/P4_BATCH_13_DOSSIER_085_DODRIO.md` |

Each dossier contains all 20 frozen-schema sections and `dossier_status: complete`.

## 2. Deterministic rating profiles

```text
Pidgey    2/2/2/1/1/2
Pidgeotto 3/3/2/2/2/3
Pidgeot   4/4/3/3/3/5
Spearow   2/3/1/1/1/3
Fearow    3/4/3/3/3/5
Doduo     1/4/2/1/1/3
Dodrio    3/5/3/3/3/5
```

```text
rating_scale_version == p4-six-axis-v1
manual_rating_exception_count == 0
```

## 3. Traversal regression

```text
Flying_type_equals_unlimited_traversal == false
Speed_rating_equals_literal_air_or_ground_velocity == false
Pidgey_homing_equals_arbitrary_routefinding == false
Pidgeotto_prey_carrying_equals_human_transport == false
Pidgeot_Mach_2_equals_real_time_physics_formula == false
Spearow_short_wing_limit_preserved == true
Fearow_long_duration_flight_preserved == true
Doduo_primary_ground_running_preserved == true
Dodrio_endurance_running_preserved == true
```

The Doduo/Dodrio pair remains the strongest calibration control: Dodrio has normalized `Speed 5` versus Doduo `Speed 3`, while current official text says Dodrio cannot run as fast as Doduo but can run for longer stretches. No stat exception is introduced because the six-axis Speed value is not literal top-running speed.

## 4. Detection / territory / theft regression

```text
territoriality_equals_auto_combat == false
patrol_equals_continuous_surveillance == false
Keen_Eye_equals_perfect_detection == false
prey_search_equals_hidden_target_knowledge == false
Fearow_food_snatching_equals_inventory_mutation_permission == false
```

Fearow resource loss, if any, requires an authored event state with warning, counterplay and consequence resolution.

## 5. Multi-head regression

```text
Doduo_active_entity_count == 1
Dodrio_active_entity_count == 1
Doduo_ordinary_turn_count == 1
Dodrio_ordinary_turn_count == 1
Doduo_independent_HP_pool_count == 1
Dodrio_independent_HP_pool_count == 1
visible_companion_slot_cost_per_entity == 1
internal_telepathy_equals_external_mind_reading == false
three_hearts_or_lung_sets_equals_extra_lives == false
```

Head count changes anatomy, lookout state, coordination and narrative behavior only where specifically authored.

## 6. Evolution / modern mechanic regression

Modern level thresholds, abilities and held-item metadata remain source context. They do not create ancient kill-XP, guaranteed escape, sleep-duration formulas, perfect sight, fixed critical-hit systems or `Sharp Beak` loot.

## 7. Companionship classifications

```text
Pidgey    eligible
Pidgeotto eligible
Pidgeot   exceptional_only
Spearow   eligible
Fearow    exceptional_only
Doduo     eligible
Dodrio    exceptional_only
```

All companionship remains voluntary, one entity per visible slot, and does not create capture or mount shortcuts.

## 8. Completion state

```text
full_schema_dossier_count == 7
dossier_status_complete_count == 7
required_section_count_per_dossier == 20
manual_stat_exception_count == 0
blocking_human_design_gate_count == 0
```

Batch 13 is ready for completion audit and atomic manifest promotion.

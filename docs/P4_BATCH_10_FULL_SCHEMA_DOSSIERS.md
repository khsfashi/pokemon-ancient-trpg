# P4 Batch 10 — Full-Schema Dossiers

Status: **REVIEW COMPLETE — ready for Batch 10 audit**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_10_SOURCE_REVIEW.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P3_HEALTH_PRESSURE_AND_INJURY_CONTRACT.md`

## 1. Review boundary

All eight Batch 10 species use the frozen P4 dossier schema and `p4-six-axis-v1` with no manual stat exception.

The batch keeps exceptional navigation, aquatic physiology, contact safety, overland travel, charge/collision, terrain breach and heat tolerance as **species-local capabilities or state permissions** instead of introducing type-wide or axis-derived subsystems.

```text
Flying_type_equals_sound_navigation == false
Water_type_equals_amphibious_safety == false
Fire_bond_equals_generic_fire_immunity == false
Speed_equals_mount_or_travel_formula == false
Force_equals_structure_damage_formula == false
Ground_or_Rock_type_equals_lava_immunity == false
hazard_severity_capped_by_six_axis == false
evolution_stage_capabilities_auto_inherited == false
```

## 2. Dossier set

| Dex | Species | Full-schema dossier |
|---:|---|---|
| #041 | Zubat / 주뱃 | `docs/P4_BATCH_10_DOSSIER_041_ZUBAT.md` |
| #042 | Golbat / 골뱃 | `docs/P4_BATCH_10_DOSSIER_042_GOLBAT.md` |
| #072 | Tentacool / 왕눈해 | `docs/P4_BATCH_10_DOSSIER_072_TENTACOOL.md` |
| #073 | Tentacruel / 독파리 | `docs/P4_BATCH_10_DOSSIER_073_TENTACRUEL.md` |
| #077 | Ponyta / 포니타 | `docs/P4_BATCH_10_DOSSIER_077_PONYTA.md` |
| #078 | Rapidash / 날쌩마 | `docs/P4_BATCH_10_DOSSIER_078_RAPIDASH.md` |
| #111 | Rhyhorn / 뿔카노 | `docs/P4_BATCH_10_DOSSIER_111_RHYHORN.md` |
| #112 | Rhydon / 코뿌리 | `docs/P4_BATCH_10_DOSSIER_112_RHYDON.md` |

Every dossier contains the shared required sections:

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

## 3. Deterministic rating profiles

```text
Zubat      2/2/1/1/2/2
Golbat     3/4/3/3/3/4
Tentacool  2/2/1/2/5/3
Tentacruel 4/3/3/4/6/5
Ponyta     2/4/2/3/3/4
Rapidash   3/5/3/4/4/5
Rhyhorn    4/4/4/1/1/1
Rhydon     5/6/6/2/2/2
```

No dossier adds a manual rating exception.

## 4. State-versus-baseline regression

```text
overfed_Golbat_can_lose_flight_without_base_stat_mutation == true
newborn_Ponyta_can_have_reduced_locomotor_permission_without_species_profile_change == true
stranded_Tentacool_can_enter_dehydrated_state_without_type_or_rating_change == true
Rhyhorn_committed_charge_can_be_dangerous_despite_Speed_1 == true
Rhydon_bedrock_and_heat_permissions_are_not_encoded_by_Force_or_Guard == true
```

P5 owns concrete state-transition timing. P4 freezes only the capability/constraint surface.

## 5. Sensory and aquatic-physiology separation

```text
Zubat_blindness == source_backed
Zubat_sound_wave_navigation == source_backed
Flying_type_sound_navigation == false
darkness_automatically_disables_Zubat == false

Tentacool_low_tide_stranding == source_backed
Tentacool_dehydration_on_shore == source_backed
Water_type_land_safety == false
universal_Water_Pokemon_dehydration_meter == false
```

Exact echolocation resolution, respiration, dehydration timing and land tolerance remain unresolved rather than becoming global mechanics.

## 6. Restraint / venom regression

```text
Tentacruel_extendible_tentacle_restraint == present
Tentacruel_venom_exposure == present
restraint_escape_equals_venom_resistance == false
80_tentacles_equals_80_actions == false
outbreak_equals_permanent_fish_exclusion == false
outbreak_can_be_event_scale_ecological_state == true
```

A hostile Tentacruel can create multiple *types of pressure* without receiving one action per tentacle.

## 7. Temperature and trust regression

```text
Ponyta_accepted_person_safe_mane_contact == source_backed
accepted_safe_mane_contact_equals_generic_Fire_immunity == false
accepted_safe_mane_contact_equals_mount_permission == false
Rapidash_auto_inherits_Ponyta_contact_permission == false

Rhydon_lava_heat_tolerance == source_backed
Ground_or_Rock_type_lava_immunity == false
Guard_6_equals_heat_immunity == false
lava_heat_tolerance_equals_safe_submersion == false
```

The two heat-related species prove different boundaries: Ponyta has a narrow relationship-gated contact exception, while Rhydon has a species-local environmental heat permission.

## 8. Traversal / terrain regression

```text
Rapidash_extreme_overland_running == true
Rapidash_150_mph_equals_constant_cruising_speed == false
Speed_5_equals_map_travel_time == false
trust_equals_rider_capacity == false

Rhyhorn_poor_turning_stopping_charge == true
Rhyhorn_boulder_breach_permission == true
Speed_1_equals_harmless_charge == false
Force_4_equals_structure_damage_formula == false

Rhydon_steep_terrain_access == true
Rhydon_bedrock_boring == true
Force_6_equals_bedrock_damage_formula == false
```

Capabilities can exceed what a six-value profile expresses without adding continuous simulation stats.

## 9. Evolution-stage inheritance regression

```text
Zubat_sound_navigation_auto_inherited_by_Golbat == false
Golbat_blood_feeding_auto_inherited_by_Zubat == false
Tentacool_dehydration_auto_inherited_by_Tentacruel == false
Tentacruel_venom_net_auto_inherited_by_Tentacool == false
Ponyta_safe_mane_contact_auto_inherited_by_Rapidash == false
Rapidash_extreme_running_auto_inherited_by_Ponyta == false
Rhyhorn_charge_behavior_auto_inherited_by_Rhydon == false
Rhydon_bedrock_heat_permissions_auto_inherited_by_Rhyhorn == false
```

Later-generation Crobat, Galarian Ponyta/Rapidash and Rhyperior remain context only.

## 10. Companionship state

Frozen schema classifications:

```text
Zubat      eligible
Golbat     eligible
Tentacool  eligible
Tentacruel exceptional_only
Ponyta     eligible
Rapidash   eligible
Rhyhorn    exceptional_only
Rhydon     exceptional_only
```

`eligible` is not common ownership. All eight require voluntary persistent trust, no portable containment and species-specific logistics. Riding, venom harvesting, forced mining and battering-ram use are not implied by companionship.

## 11. Completion state

```text
full_schema_dossier_count == 8
dossier_status_complete_count == 8
required_section_count_per_dossier == 20
manual_stat_exception_count == 0
blocking_human_design_gate_count == 0
```

No Batch 10 dossier introduces a blocking Human Design Gate. The batch is ready for completion audit and atomic manifest promotion validation.

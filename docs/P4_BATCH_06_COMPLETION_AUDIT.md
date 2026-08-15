# P4 Batch 06 — Completion Audit

Status: **PASS — READY FOR MANIFEST PROMOTION**  
Date: **2026-08-15**  
Tracks: **#5**  
Inputs: `docs/P4_BATCH_06_SOURCE_REVIEW.md`, `docs/P4_BATCH_06_FULL_SCHEMA_DOSSIERS.md`, the eight indexed Batch 06 species dossier documents, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`

## 1. Scope

Batch 06 audits eight social-ecology / encounter-unit stress species:

- #029 Nidoran♀
- #030 Nidorina
- #031 Nidoqueen
- #032 Nidoran♂
- #033 Nidorino
- #034 Nidoking
- #115 Kangaskhan
- #128 Tauros

The batch tests whether family, parent/young, herd, vigilance and protector behavior can remain source-faithful without creating generic reproduction, morale, parenting, offspring-action, herd-bonus or elite-scaling systems.

## 2. Source and normalization audit

```text
source_review_species_count == 8
structured_source_revision == PokeAPI/api-data@2cda0b56a3a8ad2529d8aac73528225f96d2c848
rating_scale_version == p4-six-axis-v1
rating_profile_reproducible_count == 8
manual_rating_exception_count == 0
```

Derived profiles:

```text
Nidoran♀   2/2/2/2/2/2
Nidorina   3/3/3/2/2/2
Nidoqueen  4/4/4/3/4/3
Nidoran♂   2/2/2/2/2/2
Nidorino   3/3/2/2/2/3
Nidoking   4/5/3/4/3/4
Kangaskhan 5/4/4/2/4/4
Tauros     3/5/4/2/3/5
```

Result: **PASS**.

## 3. Full-schema audit

Each indexed dossier contains reviewed or explicitly absent values for the complete shared P4 surface:

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

```text
full_schema_dossier_count == 8
dossier_status_complete_count == 8
required_section_count_per_dossier == 20
placeholder_TODO_count == 0
blocking_human_design_gate_count == 0
```

Result: **PASS**.

## 4. Paired Nidoran identity and evolution regression

```text
national_dex_29_species_key == nidoran-f
national_dex_32_species_key == nidoran-m
national_dex_29 != national_dex_32
paired_species_collapsed_to_gender_form_toggle == false

nidoran-f_chain == [nidoran-f, nidorina, nidoqueen]
nidoran-m_chain == [nidoran-m, nidorino, nidoking]

modern_level_16_metadata_preserved == true
modern_level_16_equals_diegetic_kill_XP == false
Moon_Stone_relationship_preserved == true
Moon_Stone_creates_generic_Evolve_command == false
generic_reproduction_or_breeding_system_created == false
```

Result: **PASS**.

## 5. Nidorina / Nidoqueen social-state regression

```text
nidorina_with_family_state_supported == true
nidorina_separated_from_family_state_supported == true
nidorina-family-safe-barbs == present
nidorina-separation-nervousness == present

nidoqueen_young_present_state_supported == true
nidoqueen_young_threatened_state_supported == true
nidoqueen-young-defense-escalation == present
nidoqueen-hard-scale-tackle == present

family_presence_changes_base_stats == false
young_presence_grants_fixed_attack_bonus == false
generic_family_morale_attribute_created == false
generic_parenting_system_created == false
```

Behavior changes approach permissions, warning signs, pursuit or escalation while the fixed species stat profile remains unchanged.

Result: **PASS**.

## 6. Kangaskhan parent/child encounter-unit regression

```text
active_species_entity == kangaskhan
active_species_entity_count == 1
visible_companion_slot_cost == 1
dependent_child_associated_state == true
child_location_state_supported == [pouch, nearby_outside_pouch]
child_threat_can_change_maternal_behavior == true

child_is_inventory == false
child_is_equipment == false
child_is_hidden_free_companion == false
separate_child_species_profile_required == false
ordinary_child_independent_combat_action == false
separate_child_companion_slot == false
generic_offspring_system_created == false

Mega_Kangaskhan_parent_child_attack_evidence_preserved_as_boundary == true
Mega_Kangaskhan_two_actor_semantics_imported_to_ordinary_baseline == false
```

If a later P5/P7 event makes a particular child's independent injury, separation, death, maturation or long-term history mechanically central, that event must define the needed persistence explicitly. P4 does not retroactively create a second ordinary companion entity.

Result: **PASS**.

## 7. Tauros herd-protector / D-031 regression

The dossier includes `tauros-herd-protector-prototype` as a concrete exceptional-individual representation with persistent scars, social role and event history, but zero hidden stat deltas by default.

```text
herd_social_context_supported == true
herd_protector_role_supported == true
battle_scar_history_supported == true
protector_individual_profile_present == true
prototype_stat_deltas == 0/0/0/0/0/0

later_explicit_D031_deltas_allowed_when_authored == true
species_baseline_rewritten_by_protector_role == false
player_level_scaling == false
generic_elite_HP_affix == false
all_Tauros_are_protectors == false
```

Result: **PASS**.

## 8. Hazard / permission regression

All twelve source-review-required records are represented:

```text
nidoran-f-poison-barb-contact == present
nidoran-f-enraged-horn-toxin == present
nidorina-family-safe-barbs == present
nidorina-separation-nervousness == present
nidoqueen-hard-scale-tackle == present
nidoqueen-young-defense-escalation == present
nidoran-m-sound-vigilance == present
nidorino-hostile-presence-challenge == present
nidoking-destructive-tail-rampage == present
kangaskhan-child-protection == present
tauros-furious-charge == present
tauros-herd-protector-intervention == present
```

```text
hazard_severity_capped_by_axis_rating == false
Nidoran♀_Force_2_makes_poison_harmless == false
Nidorina_social_state_is_flat_modifier == false
Nidoqueen_Force_4_is_complete_collision_formula == false
Nidoran♂_sound_vigilance_equals_omniscience == false
Nidorino_hostile_presence_response_equals_mind_reading == false
Nidoking_rampage_equals_always_aggressive == false
Tauros_Force_plus_Speed_is_second_modifier_stack == false
```

Result: **PASS**.

## 9. Serious-lethality regression

```text
ordinary_collision_equals_automatic_death == false
poison_exposure_equals_automatic_death == false
protective_parent_attack_equals_automatic_death == false
Tauros_charge_equals_automatic_death == false

serious_injury_possible == true
critical_condition_possible_when_context_supports == true
death_possible_only_under_selective_lethality_contract == true
terrain_and_repeated_exposure_can_raise_consequence == true
```

Result: **PASS**.

## 10. Companionship regression

```text
visible_companion_slots == 3
capture_equals_companionship == false
portable_containment == false

Nidoran♀_classification == eligible
Nidorina_classification == eligible
Nidoqueen_classification == exceptional_only
Nidoran♂_classification == eligible
Nidorino_classification == eligible
Nidoking_classification == exceptional_only
Kangaskhan_classification == exceptional_only
Tauros_classification == exceptional_only

Kangaskhan_slot_cost == 1
Kangaskhan_child_additional_slot_cost == 0
Kangaskhan_child_hidden_free_actor == false
```

Eligibility never means routine ownership, defeat-to-recruit conversion or guaranteed player access.

Result: **PASS**.

## 11. Chronology / infrastructure / provenance regression

All eight original forms remain `plausible-derived` for baseline presence; exact ancient localities remain D2.

```text
chronology_anomaly_required_for_Batch_06 == false
exact_ancient_Kanto_route_claimed_as_C1 == false

Nidoking_transmission_tower_comparison_preserved_as_capability_scale == true
ancient_transmission_tower_created == false
ancient_power_grid_created == false

Mega_Kangaskhan_substitutes_original_form == false
Paldean_Tauros_substitutes_original_form == false

structured_source_is_normalization_input_not_canon_authority == true
unsupported_ecology_is_marked_unknown_or_D2 == true
```

Result: **PASS**.

## 12. P2 / P3 / P4 contradiction review

```text
iron_age_baseline_preserved == true
trainer_culture_assumed == false
portable_Poke_Ball_containment_assumed == false
three_visible_companion_slots_preserved == true
zero_companion_run_still_valid == true
human_attributes_reused_as_Pokemon_stats == false
kill_XP_created == false
generic_evolution_menu_created == false
generic_reproduction_system_created == false
generic_parenting_system_created == false
generic_herd_bonus_created == false
generic_elite_affix_created == false
player_level_enemy_scaling_created == false
blocking_human_design_gate_count == 0
```

Result: **PASS**.

## 13. Manifest promotion target

Only these eight rows may be promoted by this batch:

```text
29  nidoran-f
30  nidorina
31  nidoqueen
32  nidoran-m
33  nidorino
34  nidoking
115 kangaskhan
128 tauros
```

Expected post-promotion state:

```text
dossier_complete_count == 52
pilot_reviewed_count == 2
not_started_count == 97
draft_count == 0
blocking_p4_gate_count == 0
```

The two remaining `pilot_reviewed` rows stay #131 Lapras and #151 Mew.

## Verdict

```text
source_review == PASS
full_schema_authoring == PASS
paired_species_identity_regression == PASS
evolution_regression == PASS
social_ecology_state_regression == PASS
kangaskhan_parent_child_regression == PASS
tauros_D031_protector_regression == PASS
hazard_permission_regression == PASS
serious_lethality_regression == PASS
companionship_regression == PASS
chronology_infrastructure_regression == PASS
P2_P3_P4_contradiction_review == PASS
blocking_human_design_gate_count == 0
```

Batch 06 is safe to promote atomically in the coverage manifest.

# P4 Full-Schema Pilot Dossiers

Status: **PILOT REVIEW COMPLETE**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: D-018, D-019, D-020, D-021, D-024, D-028, D-030, D-031, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_PILOT_EVIDENCE_AND_HAZARD_PACKETS.md`, `docs/P4_RATING_SCALE_CALIBRATION.md`

## 1. Purpose and review boundary

This document upgrades the eight P4 calibration species from evidence packets into reviewed full-schema pilot dossiers.

The source packet remains authoritative for claim IDs and detailed hazard evidence. This document consumes those reviewed claims, applies the pinned `p4-six-axis-v1` profile, and fills every remaining P4 dossier domain with either substantive content or an explicit schema-legal unresolved value.

Pilot-review rules:

- all species use fixed, non-player-scaling baselines;
- the six-axis profile never determines aggression or post-exposure hazard severity by itself;
- local cultural details below are authoring hooks, not universal proto-Kanto law;
- `unknown` / `intentionally_unresolved` is preferred to invented pseudo-canon;
- species-specific evolution interpretation cannot use human kill-XP or visible videogame levels as diegetic causes;
- no dossier assumes defeat, capture, portable containment, or routine ownership;
- no dossier creates generic loot, universal Pokémon materials, or a hidden challenge-rating score.

Shared ordinary-variation guidance from the pinned calibration applies unless a dossier narrows it: normally at most one axis `±1` when fiction materially requires it, with no random affix generation.

---

## 2. #019 Rattata / 꼬렛

```yaml
identity:
  national_dex: 19
  species_key: rattata
  official_name_en: Rattata
  official_name_ko: 꼬렛
  evolution_family_keys: [rattata, raticate]
  mandatory_gen1_roster: true
  dossier_status: pilot_reviewed

provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001@2cda0b56, OFFICIAL-DEX-RATTATA, RAT-C1-001, RAT-C1-002, RAT-D1-001, RAT-D1-002]
  official_evidence: [RAT-C1-001, RAT-C1-002]
  derived_claims: [RAT-D1-001, RAT-D1-002]

canonical_source_data:
  types: [normal]
  base_stats_raw: {hp: 30, attack: 56, defense: 35, special_attack: 25, special_defense: 35, speed: 72}
  abilities_relevant_to_p4: [run-away, guts]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height_m: 0.3, weight_kg: 3.5}
  evolution_source:
    evolves_from: none
    evolves_to: [raticate]
    canonical_conditions: [modern_level_condition_not_used_diegetically]
  other_material_facts: [continuously_growing_hard_gnawing_incisors]

species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 1
  force: 2
  guard: 1
  potency: 1
  resistance: 1
  speed: 3
  derivation_notes: {vigor: hp_30, force: attack_56, guard: defense_35, potency: special_attack_25, resistance: special_defense_35, speed: speed_72}
  calibration_flags: [ordinary_weak_species_trivialization_fixture]

capabilities_and_hazards:
  locomotion: [small_fast_ground_mobility]
  physical_hazards: [bite, gnawing_resource_damage]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [avoidance, opportunistic_supply_targeting]
  utility_interaction_capabilities: []
  immunities_or_approach_invalidators: []
  hazard_records: [rattata-bite-and-gnaw]
  notes: [use reviewed hazard record from P4_PILOT_EVIDENCE_AND_HAZARD_PACKETS]

ancient_strength:
  classifications: [similar_to_modern_baseline]
  evidence_class: D1
  rationale: no reviewed evidence justifies a species-wide ancient stat increase
  stat_effect_if_any: none
  behavior_effect_if_any: locality_and_individual_only
  canon_boundary_note: ancient danger may come from ecology, scarcity, poor equipment, or exceptional individuals rather than a stronger species baseline

ancient_ecology:
  habitat: [settlement_edges_or_wild_cover_where_food_and_shelter_are_available]
  ecological_niche: [small_opportunistic_generalist]
  activity_pattern: [locality_dependent]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [accessible_food_stores_and_chewable_barriers_may_be_targeted]
  social_structure: [unknown]
  predator_prey_competitor_links: [intentionally_unresolved]
  environmental_effects: [small_scale_gnaw_damage_to_storage_or_lashings]
  observable_signs: [small_tracks_where_visible, fresh_gnaw_marks, breached_soft_storage]
  locality_constraints: [not_a_universal_spawn_rule]
  unsupported_gaps: [exact_group_structure, seasonal_cycle, specific_predator_links]

human_perception_and_culture:
  ordinary_attitude: [familiar_nuisance_or_minor_hazard_where_locally_common]
  specialist_knowledge_holders: [food_storekeepers, hunters, wayfinders]
  benefits_and_services: []
  fears_and_avoidance: [supply_loss, bites_in_cramped_spaces]
  myths_omens_taboos: [none_required]
  practical_customs: [raised_or_hardened_storage_is_a_valid_local_response_hook]
  common_misbeliefs: [assuming_every_Rattata_is_harmless]
  local_variation_notes: [named_apex_folklore_may_exist_only_where_authored]

identification_and_knowledge:
  baseline_recognition: common
  unknown_presentation_hooks: [small_quick_rodent_like_creature, fresh_gnaw_sign]
  local_aliases_or_titles: none
  identification_evidence: [incisor_shape, body_form, tracks, gnaw_pattern]
  initial_knowledge_fragments: [avoid_cornering, protect_exposed_food]
  post_identification_knowledge: [ordinary_individuals_are_often_avoidable, speed_matters_more_than_raw_durability]
  advanced_insights: [experienced_humans_can_make_single_ordinary_encounters_routine_without_species_stat_changes]
  exceptional_individual_knowledge_hooks: [trap_wary_signs, recurring_escape_route, asymmetric_track_or_scar_signature]

threat_and_encounter:
  baseline_threat_band: low_contextual
  default_behavior_states: [unaware, observing, avoidant, wary, retreating]
  aggression_tendency: low_unless_cornered_or_resource_conflict
  territoriality: low_or_locality_dependent
  avoidance_tendency: high
  warning_signs: [gnaw_damage, tracks, defensive_posture_when_cornered]
  encounter_triggers: [accessible_food, disturbed_hiding_place, failed_storage_barrier]
  escalation_triggers: [cornering, blocked_escape, grabbing]
  deescalation_conditions: [clear_retreat, loss_of_food_access, human_disengagement]
  pursuit_profile: short_unless_exceptional_individual
  group_size_effects: [multiple_individuals_raise_resource_and_position_pressure_without_stat_bonuses]
  ordinary_consequence_categories: [light_or_serious_bite, provision_loss, minor_equipment_damage]
  consequence_ceiling: ordinarily_nonlethal_without_explicit_D020_escalation
  human_check_hooks:
    - {action: drive_away_single_ordinary_Rattata, relevant_species_axis: speed, relevant_tags: [avoidance], relevant_hazard_keys: [rattata-bite-and-gnaw], difficulty_guidance: routine_or_7_to_9_when_stakes_exist, notes: experienced_prepared_open-terrain_case_may_require_no_roll}
    - {action: protect_supplies_in_cramped_space, relevant_species_axis: force, relevant_tags: [gnawing_resource_damage], relevant_hazard_keys: [rattata-bite-and-gnaw], difficulty_guidance: 7_to_11_by_access_and_preparation, notes: resolve_resource_consequence_separately_from_bite_risk}

individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1
    temperament_variants: [bold, skittish, food_focused]
    condition_variants: [hungry, injured, juvenile_or_mature]
    local_lineage_variants: [possible_but_not_assumed]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_authored_world_entity
    candidate_causes: [extreme_survival_history, learned_human_counterplay, local_dominance]
    rating_shift_guidance: explicit_multi_axis_deltas_allowed_when_authored
    required_distinctive_traits: [behavioral_difference, learnable_warning_sign]
    warning_or_rumor_hooks: [recurring_trap_failure, repeated_route_signature]
  named_apex_examples: [pilot-rattata-apex-01]

individual_profile:
  individual_id: pilot-rattata-apex-01
  species_key: rattata
  status: named_apex
  display_identity: knowledge_gated_local_identity
  stat_deltas: {vigor: 1, force: 2, guard: 0, potency: 0, resistance: 0, speed: 2}
  added_tags: [trap_wary, route_memory, supply_raider, false_commitment]
  removed_or_weakened_tags: []
  distinctive_traits: [unusually_fast, unusually_forceful, not_more_armored]
  history_or_cause: long_survival_against_local_food_cache_defenses_and_trap_lines
  evidence_class: D2
  known_warning_signs: [recurring_asymmetric_track_or_scar_sign, unsprung_gnawed_bait, repeated_escape_channel]
  encounter_state_overrides: [may_fake_commitment_then_retreat_to_cover]
  persistent_state_requirements: [stable_identity, learned_route_state, no_player_level_scaling]

companionship:
  classification: eligible
  prerequisites: [voluntary_habituation_or_rescue, reliable_food_boundary, non-coercive_repeated_contact]
  trust_building_paths: [safe_feeding_at_distance, predictable_nonthreatening_routine]
  reasons_to_stay: [stable_food_and_shelter, learned_trust]
  rejection_or_departure_reasons: [coercion, starvation, unsafe_handling, blocked_escape]
  human_social_costs: [food_storage_risk, nuisance_reputation]
  logistics: {food: [small_regular_food_need], water: [ordinary_access], shelter_temperature: [dry_shelter], space_travel: [small_body_low_space], settlement_restrictions: [food_store_access_must_be_managed], special_resources: []}
  assistance_capabilities: [small_space_scouting_only_when_individual_behavior_supports_it]
  handling_boundaries: [not_an_obedient_inventory_pet, no_capture_equals_bond]
  separation_injury_notes: [ordinary_departure_is_possible_if_trust_breaks]

mechanical_hooks:
  tracking_clues: [tracks, gnaw_marks, breached_storage]
  avoidance_preparation: [protected_food_storage, clear_escape_routes]
  resistance_or_protection: [gloves_or_barriers_only_when_they_physically_block_bites]
  combat_approach_permissions: [ordinary_tools_are_valid_against_material_body]
  blocked_or_invalid_approaches: [none_species_wide]
  fear_hooks: [normally_none; apex_reputation_may_create_authored_fear]
  injury_hazard_hooks: [bite]
  environmental_state_hooks: [supply_access_open_or_closed]
  companion_assistance_hooks: [small_access_scouting]
  fortune_spike_opportunities: [discover_hidden_breach_or_escape_route]
  trouble_spike_complications: [dropped_supplies, blocked_escape, apex_false_commitment]

hunting_materials_and_resources:
  killing_treatment: locality_and_need_sensitive_under_D021
  hunting_for_food: intentionally_unresolved
  shed_or_abandoned_materials: none
  natural_remains: possible_but_no_generic_loot
  dangerous_harvesting: none
  taboo_or_protection: none_required
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []

technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: []
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable

emergency_consumable_hooks:
  hooks: none

narrative_and_event_hooks:
  peaceful: [observe_a_Rattata_avoiding_humans_near_a_storehouse]
  dangerous: [food_cache_breach_in_cramped_quarters]
  unusual_or_rare: [hunt_or_outwit_pilot-rattata-apex-01_without_level_scaling]
  discovery_insight: [learn_that_gnaw_patterns_reveal_supply_access]
  route_environment: [damaged_lashings_or_food_sacks]
  settlement_culture: [local_storage_practices_adapt_to_recurring_small_wildlife]
  cross_species: [raticate_family_followup]

presentation_and_p6_followups:
  initial_bestiary_presentation: common_small_wildlife_with_visible_gnawing_risk
  progressive_reveal_notes: [ordinary_trivialization_is_player_knowledge_not_species_upgrade, apex_individual_gets_separate_rumor_track]
  species_specific_visual_needs: []
  species_specific_audio_needs: []
  special_ui_or_readability_needs: [exceptional_individual_identity_must_not_be_hidden_as_only_numeric_bonus]
  p6_followup_required: false

cross_species_links:
  evolution_family: [raticate]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []

open_questions_and_gates:
  unresolved_sources: [exact_ancient_local_abundance]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [exact_event_TNs_and_apex_event_chain]
  deferred_to_p6: []
  deferred_to_p7: []
```

Evolution adaptation: the modern level condition is source metadata, not a diegetic XP meter. In ancient content, Rattata → Raticate should be authored as maturation/development of the same individual unless later family evidence requires a more specific trigger.

---

## 3. #013 Weedle / 뿔충이

```yaml
identity: {national_dex: 13, species_key: weedle, official_name_en: Weedle, official_name_ko: 뿔충이, evolution_family_keys: [weedle, kakuna, beedrill], mandatory_gen1_roster: true, dossier_status: pilot_reviewed}
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001@2cda0b56, OFFICIAL-DEX-WEEDLE, WEE-C1-001, WEE-C1-002, WEE-C1-003, WEE-U-001]
  official_evidence: [WEE-C1-001, WEE-C1-002, WEE-C1-003]
  derived_claims: [WEE-U-001]
canonical_source_data:
  types: [bug, poison]
  base_stats_raw: {hp: 40, attack: 35, defense: 30, special_attack: 20, special_defense: 20, speed: 50}
  abilities_relevant_to_p4: [shield-dust]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height_m: 0.3, weight_kg: 3.2}
  evolution_source: {evolves_from: none, evolves_to: [kakuna], canonical_conditions: [modern_level_condition_not_used_diegetically]}
  other_material_facts: [sharp_poisonous_head_stinger, leaf_eating_and_vegetation_hiding]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 1
  guard: 1
  potency: 1
  resistance: 1
  speed: 2
  derivation_notes: {vigor: hp_40, force: attack_35, guard: defense_30, potency: special_attack_20, resistance: special_defense_20, speed: speed_50}
  calibration_flags: [low_stat_high_hazard_fixture]
capabilities_and_hazards:
  locomotion: [small_ground_and_vegetation_mobility]
  physical_hazards: [sharp_stinger]
  elemental_environmental_hazards: [venom_exposure]
  anomalous_hazards: []
  behavioral_capabilities: [vegetation_concealment]
  utility_interaction_capabilities: []
  immunities_or_approach_invalidators: []
  hazard_records: [weedle-stinger-exposure]
  notes: [exact_human_dose_duration_and_fatality_remain_unknown]
ancient_strength:
  classifications: [similar_to_modern_baseline]
  evidence_class: D1
  rationale: danger is sufficiently explained by contact hazard and concealment without a species-wide ancient stat bonus
  stat_effect_if_any: none
  behavior_effect_if_any: locality_only
  canon_boundary_note: low ratings do not cap venom consequence semantics
ancient_ecology:
  habitat: [leafy_grass_or_bush_cover_where_locally_supported]
  ecological_niche: [small_leaf_feeding_invertebrate_like_wildlife]
  activity_pattern: [feeding_and_hiding_among_vegetation]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [leaf_consumption]
  social_structure: [unknown]
  predator_prey_competitor_links: [intentionally_unresolved]
  environmental_effects: [local_leaf_browsing_only]
  observable_signs: [chewed_leaves_or_visible_individuals_only_when_authored, concealed_low_vegetation_risk]
  locality_constraints: [do_not_assume_every_grassland_contains_Weedle]
  unsupported_gaps: [exact_colony_behavior, exact_venom_medicine, seasonal_cycle]
human_perception_and_culture:
  ordinary_attitude: [small_but_not_safe_to_handle]
  specialist_knowledge_holders: [foragers, hunters, herbalists_or_medicine_workers_where_local_knowledge_exists]
  benefits_and_services: []
  fears_and_avoidance: [accidental_stinger_contact_in_brush]
  myths_omens_taboos: [none_required]
  practical_customs: [inspect_dense_vegetation_before_bare_hand_harvesting]
  common_misbeliefs: [small_body_equals_harmless, low_stats_equal_weak_venom]
  local_variation_notes: [medical_folklore_may_be_wrong_and_must_not_override_reviewed_evidence]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [small_caterpillar_like_creature_with_prominent_head_stinger]
  local_aliases_or_titles: none
  identification_evidence: [head_stinger, body_form, feeding_location]
  initial_knowledge_fragments: [do_not_touch_blindly]
  post_identification_knowledge: [stinger_contact_is_the_material_hazard]
  advanced_insights: [safe_route_through_brush_depends_on_visibility_and_distance_not_beating_Weedle_in_combat]
  exceptional_individual_knowledge_hooks: []
threat_and_encounter:
  baseline_threat_band: low_body_high_contact_hazard
  default_behavior_states: [unaware, observing, avoidant, wary]
  aggression_tendency: not_presumed
  territoriality: unknown
  avoidance_tendency: moderate_or_unknown
  warning_signs: [visible_stinger, dense_concealing_vegetation]
  encounter_triggers: [foraging_through_cover, blind_handling, close_contact]
  escalation_triggers: [contact_or_startling_at_close_range]
  deescalation_conditions: [restore_distance, choose_clear_route]
  pursuit_profile: none_expected_without_specific_evidence
  group_size_effects: [repeated_exposure_opportunities_only_when_multiple_individuals_are_authored]
  ordinary_consequence_categories: [puncture, poison_exposure, route_delay]
  consequence_ceiling: exact_human_medical_ceiling_unknown; Critical_or_death_must_not_be_inferred_from_type_or_axis_rating_alone
  human_check_hooks:
    - {action: cross_dense_brush_without_contact, relevant_species_axis: speed, relevant_tags: [vegetation_concealment, sharp_stinger], relevant_hazard_keys: [weedle-stinger-exposure], difficulty_guidance: 7_to_11_by_visibility_and_preparation, notes: success_avoids_exposure; post_exposure_is_separate}
individual_variation:
  ordinary_variation: {allowed_rating_deltas: normally_one_axis_plus_or_minus_1, temperament_variants: [still, skittish], condition_variants: [feeding, injured, near_metamorphosis], local_lineage_variants: [possible_but_unproven]}
  exceptional_individuals: {allowed: true, rarity_guidance: rare_and_authored, candidate_causes: [unusual_size_or_survival_history_if_future_evidence_supports], rating_shift_guidance: explicit_only, required_distinctive_traits: [visible_or_learnable_difference], warning_or_rumor_hooks: []}
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [non-contact_trust_routine, safe_handling_knowledge, habitat_and_food_support]
  trust_building_paths: [repeated_nonthreatening_presence, protected_feeding]
  reasons_to_stay: [stable_food_and_safe_shelter]
  rejection_or_departure_reasons: [rough_handling, unsuitable_habitat, metamorphosis_transition]
  human_social_costs: [accidental_stinger_risk]
  logistics: {food: [appropriate_leaf_food], water: [ordinary_environmental_access], shelter_temperature: [vegetation_like_shelter], space_travel: [small], settlement_restrictions: [keep_away_from_unprepared_people], special_resources: []}
  assistance_capabilities: []
  handling_boundaries: [never_bare_hand_assume_safe, no_defeat_equals_bond]
  separation_injury_notes: [evolution_may_change_logistics_and_behavior]
mechanical_hooks:
  tracking_clues: [chewed_leaf_patterns_when_authored]
  avoidance_preparation: [clear_visibility, distance, protective_handling_tools]
  resistance_or_protection: [contact_blocking_equipment_only_if_it_actually_blocks_stinger]
  combat_approach_permissions: [ordinary_material_body]
  blocked_or_invalid_approaches: [bare_hand_grab_without_accepting_exposure_risk]
  fear_hooks: [known_venom_risk_may_create_contextual_fear]
  injury_hazard_hooks: [puncture_plus_separate_poison_consequence]
  environmental_state_hooks: [dense_brush_visibility]
  companion_assistance_hooks: []
  fortune_spike_opportunities: [spot_concealed_individual_before_contact]
  trouble_spike_complications: [unexpected_contact_or_repeated_exposure]
hunting_materials_and_resources:
  killing_treatment: locality_and_need_sensitive_under_D021
  hunting_for_food: intentionally_unresolved
  shed_or_abandoned_materials: none
  natural_remains: possible_but_no_generic_loot
  dangerous_harvesting: none_without_future_evidence
  taboo_or_protection: none_required
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft: {hook: none, enabling_evidence: [], human_craft_bridge: [], narrow_domain: none, local_dependency: [], scalability_limits: [], ownership_shortcut_forbidden: true, evidence_class: not_applicable}
emergency_consumable_hooks:
  hooks:
    - {item_concept: poison_response_candidate, hazard_tags: [venom], timing: recovery, effect_boundary: may_only_be_defined_after_evidence_or_project_owned_medicine_contract_specifies_exact_poison_state_interaction, exclusions: [no_reroll, no_universal_antidote], source_or_material_basis: [intentionally_unresolved], evidence_class: U}
narrative_and_event_hooks:
  peaceful: [observe_leaf_feeding_from_safe_distance]
  dangerous: [foraging_route_crosses_concealed_Weedle]
  unusual_or_rare: [metamorphosis_observation_chain_into_Kakuna]
  discovery_insight: [learn_that_exposure_prevention_and_consequence_are_separate]
  route_environment: [dense_brush_requires_careful_path_choice]
  settlement_culture: [local_foragers_share_contact_avoidance_practice_without_claiming_universal_medical_knowledge]
  cross_species: [kakuna, beedrill]
presentation_and_p6_followups:
  initial_bestiary_presentation: small_vegetation_dweller_with_visible_stinger
  progressive_reveal_notes: [do_not_display_fake_numeric_venom_severity]
  species_specific_visual_needs: [stinger_readability_at_mobile_scale]
  species_specific_audio_needs: []
  special_ui_or_readability_needs: [hazard_warning_must_not_be_encoded_only_by_stat_color]
  p6_followup_required: true
cross_species_links: {evolution_family: [kakuna, beedrill], predator_prey: [], competition: [], symbiosis: [], mimicry_confusion: [], shared_habitat: [], cultural_or_material_dependencies: []}
open_questions_and_gates:
  unresolved_sources: [exact_human_venom_dose_duration_and_medical_ceiling]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [exact_poison_consequence_state_if_needed_by_an_event]
  deferred_to_p6: [mobile_readability_of_small_stinger]
  deferred_to_p7: []
```

Evolution adaptation: Weedle → Kakuna → Beedrill is treated as a biological metamorphosis sequence rather than visible XP levels. Timing and exact environmental triggers remain family-authoring details; the pilot does not invent them.

---

## 4. #015 Beedrill / 독침붕

```yaml
identity: {national_dex: 15, species_key: beedrill, official_name_en: Beedrill, official_name_ko: 독침붕, evolution_family_keys: [weedle, kakuna, beedrill], mandatory_gen1_roster: true, dossier_status: pilot_reviewed}
provenance: {reviewed: true, source_revision_refs: [SRC-DATA-001@2cda0b56, OFFICIAL-DEX-BEEDRILL, BEE-C1-001, BEE-C1-002, BEE-D1-001, BEE-U-001], official_evidence: [BEE-C1-001, BEE-C1-002], derived_claims: [BEE-D1-001, BEE-U-001]}
canonical_source_data:
  types: [bug, poison]
  base_stats_raw: {hp: 65, attack: 90, defense: 40, special_attack: 45, special_defense: 80, speed: 75}
  abilities_relevant_to_p4: [swarm]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height_m: 1.0, weight_kg: 29.5}
  evolution_source: {evolves_from: kakuna, evolves_to: [], canonical_conditions: [modern_level_condition_not_used_diegetically]}
  other_material_facts: [territorial_nest_defense, angered_group_attack]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 4
  guard: 2
  potency: 2
  resistance: 4
  speed: 3
  derivation_notes: {vigor: hp_65, force: attack_90, guard: defense_40, potency: special_attack_45, resistance: special_defense_80, speed: speed_75}
  calibration_flags: [swarm_colony_fixture]
capabilities_and_hazards:
  locomotion: [flight]
  physical_hazards: [stingers, repeated_close_attack]
  elemental_environmental_hazards: [venom_exposure_uncertain_medical_ceiling]
  anomalous_hazards: []
  behavioral_capabilities: [territorial, swarm_or_group_pressure, pursuit_near_nest]
  utility_interaction_capabilities: []
  immunities_or_approach_invalidators: [vertical_flight_may_invalidate_some_ground_only_plans]
  hazard_records: [beedrill-colony-pressure]
  notes: [sting_venom_medical_severity_remains_separate_from_colony_pressure]
ancient_strength: {classifications: [similar_to_modern_baseline], evidence_class: D1, rationale: reviewed territorial_and_group_behavior_is_already_sufficient_to_create_severe_encounters, stat_effect_if_any: none, behavior_effect_if_any: nest_context_only, canon_boundary_note: no_global_ancient_swarm_bonus}
ancient_ecology:
  habitat: [nest_centered_vegetated_or_sheltered_localities_where_authored]
  ecological_niche: [territorial_flying_insect_colony_member]
  activity_pattern: [nest_defense_and_local_foraging_unknown_in_detail]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [unknown_beyond_family_context]
  social_structure: [group_or_colony_pressure_supported_around_nest]
  predator_prey_competitor_links: [intentionally_unresolved]
  environmental_effects: [route_denial_around_defended_nest]
  observable_signs: [visible_flying_activity, nest_or_colony_signs_when_discoverable, escalating_warning_approaches]
  locality_constraints: [aggression_must_not_be_exported_to_every_non_nest_encounter]
  unsupported_gaps: [exact_colony_size, seasonal_cycle, exact_venom_medicine]
human_perception_and_culture:
  ordinary_attitude: [serious_boundary_hazard_near_known_nests]
  specialist_knowledge_holders: [hunters, foragers, route_guides]
  benefits_and_services: []
  fears_and_avoidance: [swarm_pursuit, repeated_stings, blocked_retreat]
  myths_omens_taboos: [none_required]
  practical_customs: [mark_or_avoid_known_nest_routes_where_local_knowledge_exists]
  common_misbeliefs: [defeating_one_member_makes_the_colony_safe]
  local_variation_notes: [some_nests_may_be_more_tolerant_or_aggressive_only_if_authored]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [large_flying_stinger_insect, repeated_defensive_approaches]
  local_aliases_or_titles: none
  identification_evidence: [body_form, stingers, nest-linked_group_behavior]
  initial_knowledge_fragments: [do_not_press_toward_nest_after_warning]
  post_identification_knowledge: [retreat_route_is_often_more_important_than_defeating_one_individual]
  advanced_insights: [group_pressure_is_repeated_exposure_and_position_loss_not_a_stat_affix]
  exceptional_individual_knowledge_hooks: []
threat_and_encounter:
  baseline_threat_band: serious_near_nest_contextual_elsewhere
  default_behavior_states: [observing, wary, warning, engaged, pursuing, retreating]
  aggression_tendency: high_when_nest_boundary_is_violated
  territoriality: high_around_nest
  avoidance_tendency: low_after_escalation_near_nest
  warning_signs: [increasing_defensive_approaches, visible_colony_activity]
  encounter_triggers: [nest_proximity, route_intrusion, disturbance]
  escalation_triggers: [continued_advance_after_warning, attack_on_member_near_colony, blocked_escape]
  deescalation_conditions: [clear_retreat_from_territory, restored_distance]
  pursuit_profile: meaningful_but_boundary_linked
  group_size_effects: [additional_members_create_more_exposure_windows_and_route_pressure_without_axis_bonuses]
  ordinary_consequence_categories: [repeated_sting_or_physical_harm, forced_retreat, lost_gear_or_position]
  consequence_ceiling: Serious_is_plausible; Critical_or_death_requires_explicit_prolonged_or_blocked_D020_escalation
  human_check_hooks:
    - {action: withdraw_after_early_warning, relevant_species_axis: speed, relevant_tags: [territorial, flight], relevant_hazard_keys: [beedrill-colony-pressure], difficulty_guidance: 7_to_11_by_nest_depth_and_route, notes: early_recognition_should_be_materially_safer}
    - {action: push_through_defended_route, relevant_species_axis: force, relevant_tags: [swarm_or_group_pressure], relevant_hazard_keys: [beedrill-colony-pressure], difficulty_guidance: 11_to_15_or_impossible_if_route_is_bad, notes: do_not_turn_colony_into_one_HP_pool}
individual_variation:
  ordinary_variation: {allowed_rating_deltas: normally_one_axis_plus_or_minus_1, temperament_variants: [early_warning, aggressive_defender, avoidant_forager], condition_variants: [injured, isolated, nest_defender], local_lineage_variants: [possible_but_not_assumed]}
  exceptional_individuals: {allowed: true, rarity_guidance: rare, candidate_causes: [colony_dominance, long_survival, local_adaptation], rating_shift_guidance: explicit_only, required_distinctive_traits: [behavior_or_body_sign], warning_or_rumor_hooks: [unusual_nest_defense_pattern]}
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [individual_voluntary_bond, safe_separation_from_hostile_colony_context, demonstrated_non-coercive_trust]
  trust_building_paths: [rescue_or_repeated_cooperative_contact_only_when_event_supports_it]
  reasons_to_stay: [stable_trust_or_shared_defense_context]
  rejection_or_departure_reasons: [colony_pull, coercion, unsafe_settlement_contact]
  human_social_costs: [fear_from_bystanders, stinger_risk, space_and_route_restrictions]
  logistics: {food: [intentionally_unresolved], water: [ordinary_access], shelter_temperature: [safe_resting_space], space_travel: [flight_space_required], settlement_restrictions: [cannot_assume_dense_settlement_acceptance], special_resources: []}
  assistance_capabilities: [flight_scouting_or_route_warning_when_individual_supports_it]
  handling_boundaries: [no_universal_obedience, no_colony_ownership]
  separation_injury_notes: [bond_does_not_remove_territorial_or_species_hazard_capability]
mechanical_hooks:
  tracking_clues: [nest_activity, flight_patterns]
  avoidance_preparation: [route_reconnaissance, planned_retreat]
  resistance_or_protection: [physical_sting_barriers_only_when_valid]
  combat_approach_permissions: [ranged_or_cover_based_approaches_may_be_more_viable_than_ground_grapple]
  blocked_or_invalid_approaches: [defeating_one_member_does_not_end_colony_state]
  fear_hooks: [swarm_pursuit]
  injury_hazard_hooks: [repeated_sting_exposure]
  environmental_state_hooks: [nest_boundary, retreat_route_open_or_closed]
  companion_assistance_hooks: [airborne_scouting]
  fortune_spike_opportunities: [spot_boundary_early_and_avoid_escalation]
  trouble_spike_complications: [route_cutoff, second_exposure, dropped_load]
hunting_materials_and_resources: {killing_treatment: locality_and_need_sensitive_under_D021, hunting_for_food: intentionally_unresolved, shed_or_abandoned_materials: none, natural_remains: possible_but_no_generic_loot, dangerous_harvesting: none_without_future_evidence, taboo_or_protection: none_required, exact_notable_material_ids: [], generic_material_conversion_allowed: false, conversion_conditions: []}
technology_and_craft: {hook: none, enabling_evidence: [], human_craft_bridge: [], narrow_domain: none, local_dependency: [], scalability_limits: [], ownership_shortcut_forbidden: true, evidence_class: not_applicable}
emergency_consumable_hooks:
  hooks:
    - {item_concept: venom_response_candidate, hazard_tags: [venom], timing: recovery, effect_boundary: cannot_be_more_specific_until_medical_semantics_are_supported, exclusions: [no_reroll, no_generic_failure_cancel], source_or_material_basis: [intentionally_unresolved], evidence_class: U}
narrative_and_event_hooks:
  peaceful: [observe_isolated_forager_without_crossing_nest_boundary]
  dangerous: [route_accidentally_enters_defended_colony_area]
  unusual_or_rare: [exceptional_individual_breaks_expected_colony_pattern]
  discovery_insight: [learn_warning_to_retreat_transition]
  route_environment: [temporary_route_denial]
  settlement_culture: [locally_marked_avoidance_path]
  cross_species: [weedle, kakuna]
presentation_and_p6_followups: {initial_bestiary_presentation: territorial_flying_stinger_species, progressive_reveal_notes: [show_group_pressure_and_warning_state_not_only_stat_rating], species_specific_visual_needs: [clear_multi_individual_or_nest_readability], species_specific_audio_needs: [optional_group_buzzing_if_proven_worth_budget], special_ui_or_readability_needs: [warning_to_engaged_state_should_be_legible], p6_followup_required: true}
cross_species_links: {evolution_family: [weedle, kakuna], predator_prey: [], competition: [], symbiosis: [], mimicry_confusion: [], shared_habitat: [], cultural_or_material_dependencies: []}
open_questions_and_gates: {unresolved_sources: [exact_venom_medical_ceiling, exact_colony_size_and_seasonality], contradictions: [], human_design_gates: [], deferred_to_p5: [colony_event_state_machine_and_TNs], deferred_to_p6: [group_presentation_density], deferred_to_p7: []}
```

Evolution adaptation: Kakuna → Beedrill remains the terminal metamorphic transition of the family. The pilot intentionally does not translate a modern level threshold into visible XP or kill count.

---

## 5. #131 Lapras / 라프라스

```yaml
identity: {national_dex: 131, species_key: lapras, official_name_en: Lapras, official_name_ko: 라프라스, evolution_family_keys: [lapras], mandatory_gen1_roster: true, dossier_status: pilot_reviewed}
provenance: {reviewed: true, source_revision_refs: [SRC-DATA-001@2cda0b56, OFFICIAL-DEX-LAPRAS, LAP-C1-001, LAP-C1-002, LAP-D1-001, LAP-D1-002], official_evidence: [LAP-C1-001, LAP-C1-002], derived_claims: [LAP-D1-001, LAP-D1-002]}
canonical_source_data:
  types: [water, ice]
  base_stats_raw: {hp: 130, attack: 85, defense: 80, special_attack: 85, special_defense: 95, speed: 60}
  abilities_relevant_to_p4: [water-absorb, shell-armor]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height_m: 2.5, weight_kg: 220.0}
  evolution_source: {evolves_from: none, evolves_to: [], canonical_conditions: []}
  other_material_facts: [high_intelligence, understands_human_speech_in_official_material, can_carry_people_across_water_when_cooperative]
species_stat_profile: {rating_scale_version: p4-six-axis-v1, vigor: 6, force: 4, guard: 4, potency: 4, resistance: 4, speed: 3, derivation_notes: {vigor: hp_130, force: attack_85, guard: defense_80, potency: special_attack_85, resistance: special_defense_95, speed: speed_60}, calibration_flags: [high_capability_low_presumed_aggression_fixture, aquatic_environment_fixture]}
capabilities_and_hazards:
  locomotion: [aquatic, large_water_transport_when_voluntary]
  physical_hazards: [large_body_displacement]
  elemental_environmental_hazards: [open_water_dependence, cold_exposure_only_when_scene_supports]
  anomalous_hazards: []
  behavioral_capabilities: [human_speech_comprehension]
  utility_interaction_capabilities: [voluntary_rider_transport]
  immunities_or_approach_invalidators: [deep_water_invalidates_some_foot_based_human_approaches]
  hazard_records: [lapras-open-water-dependence]
  notes: [environment_can_be_lethal_without_hostility]
ancient_strength: {classifications: [similar_to_modern_baseline], evidence_class: D1, rationale: no_reviewed_basis_for_ancient_stat_bonus, stat_effect_if_any: none, behavior_effect_if_any: none_species_wide, canon_boundary_note: rarity_and_human_relationship_are_locality_authoring_not_stat_inflation}
ancient_ecology:
  habitat: [large_water_bodies_or_coastal_routes_where_locality_supports]
  ecological_niche: [large_intelligent_aquatic_traveler]
  activity_pattern: [unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [intentionally_unresolved]
  environmental_effects: [can_change_human_route_access_through_voluntary_transport]
  observable_signs: [large_waterborne_silhouette_or_wake_when_visible]
  locality_constraints: [do_not_assume_presence_in_every_water_body]
  unsupported_gaps: [migration, diet, group_structure, exact_ancient_population]
human_perception_and_culture:
  ordinary_attitude: [awe_or_caution_toward_large_intelligent_water_species]
  specialist_knowledge_holders: [fishers, ferrymen_or_water_route_guides_where_local_practice_exists]
  benefits_and_services: [voluntary_transport_is_possible_but_never_a_guaranteed_service]
  fears_and_avoidance: [open_water_dependence, accidental_displacement]
  myths_omens_taboos: [none_required]
  practical_customs: [seek_cooperation_before_mounting_or_using_as_transport]
  common_misbeliefs: [high_stats_mean_aggressive, intelligence_means_domesticated]
  local_variation_notes: [communities_may_have_distinct_histories_with_individual_Lapras]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [large_shelled_aquatic_creature, calm_observant_behavior]
  local_aliases_or_titles: none
  identification_evidence: [body_scale, shell, swimming_form, communication_response]
  initial_knowledge_fragments: [do_not_assume_permission_to_ride]
  post_identification_knowledge: [cooperation_and_open_water_safety_are_separate_questions]
  advanced_insights: [communication_can_open_noncombat_resolution]
  exceptional_individual_knowledge_hooks: []
threat_and_encounter:
  baseline_threat_band: low_if_cooperative_but_environmentally_high_stakes
  default_behavior_states: [observing, wary, avoidant, engaged, retreating]
  aggression_tendency: not_presumed
  territoriality: unknown
  avoidance_tendency: moderate_or_contextual
  warning_signs: [withdrawal_or_refusal, rough_water_or_weather]
  encounter_triggers: [water_crossing, stranded_human, voluntary_approach]
  escalation_triggers: [coercive_mounting, attack, dangerous_water_condition]
  deescalation_conditions: [restore_distance, stop_coercion, reach_safe_water_or_shore]
  pursuit_profile: none_presumed
  group_size_effects: [unknown]
  ordinary_consequence_categories: [drowning_risk, immersion, lost_load, separation, physical_harm_if_directly_struck]
  consequence_ceiling: Critical_or_lethal_is_possible_through_explicit_open_water_D020_fiction_even_without_hostility
  human_check_hooks:
    - {action: establish_cooperation, relevant_species_axis: none, relevant_tags: [human_speech_comprehension], relevant_hazard_keys: [], difficulty_guidance: authored_social_or_context_check_not_stat_formula, notes: success_does_not_equal_ownership}
    - {action: remain_safe_during_crossing, relevant_species_axis: vigor, relevant_tags: [aquatic], relevant_hazard_keys: [lapras-open-water-dependence], difficulty_guidance: 7_to_13_by_weather_load_distance_and_support, notes: environment_is_primary}
individual_variation:
  ordinary_variation: {allowed_rating_deltas: normally_one_axis_plus_or_minus_1, temperament_variants: [curious, reserved, cooperative], condition_variants: [injured, tired, traveling], local_lineage_variants: [possible_but_unproven]}
  exceptional_individuals: {allowed: true, rarity_guidance: rare, candidate_causes: [longevity, unusual_route_history], rating_shift_guidance: explicit_only, required_distinctive_traits: [recognizable_behavior_or_body_sign], warning_or_rumor_hooks: [known_water_route_history]}
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_long_term_trust, reliable_water_access, explicit_acceptance_of_travel_relationship]
  trust_building_paths: [communication, repeated_safe_cooperation, rescue_without_coercion]
  reasons_to_stay: [social_bond, shared_travel, safe_access_to_suitable_water]
  rejection_or_departure_reasons: [coercion, confinement, unsuitable_inland_travel, betrayal]
  human_social_costs: [large_space_need, route_dependency, settlement_infrastructure_limits]
  logistics: {food: [intentionally_unresolved], water: [large_regular_water_access_required], shelter_temperature: [avoid_unsuitable_heat_or_dry_confinement], space_travel: [large_body_and_water_route_needed], settlement_restrictions: [many_inland_or_small_settlements_cannot_host_it_well], special_resources: []}
  assistance_capabilities: [water_transport, water_route_scouting_when_voluntary]
  handling_boundaries: [never_mount_without_permission, no_portable_containment]
  separation_injury_notes: [stranding_or_forced_inland_separation_can_be_a_major_logistics_event]
mechanical_hooks: {tracking_clues: [wake_or_large_water_sign], avoidance_preparation: [crossing_plan, load_security, weather_reading], resistance_or_protection: [cold_or_drowning_protection_is_environmental_not_species_armor], combat_approach_permissions: [direct_force_against_large_body_may_be_extreme_or_invalid], blocked_or_invalid_approaches: [assume_obedient_mount], fear_hooks: [deep_water], injury_hazard_hooks: [drowning_or_displacement], environmental_state_hooks: [shore_distance, current, weather, load_security], companion_assistance_hooks: [cross_water], fortune_spike_opportunities: [communication_reveals_safe_route], trouble_spike_complications: [lost_load_or_separation],}
hunting_materials_and_resources: {killing_treatment: exceptional_high_cost_context_under_D021, hunting_for_food: intentionally_unresolved, shed_or_abandoned_materials: none, natural_remains: possible_but_no_generic_loot, dangerous_harvesting: none, taboo_or_protection: locality_dependent_not_assumed, exact_notable_material_ids: [], generic_material_conversion_allowed: false, conversion_conditions: []}
technology_and_craft: {hook: none, enabling_evidence: [], human_craft_bridge: [], narrow_domain: none, local_dependency: [], scalability_limits: [], ownership_shortcut_forbidden: true, evidence_class: not_applicable}
emergency_consumable_hooks: {hooks: none}
narrative_and_event_hooks: {peaceful: [negotiate_a_crossing_with_a_willing_Lapras], dangerous: [crossing_turns_risky_due_to_weather_or_load_without_Lapras_becoming_hostile], unusual_or_rare: [learn_long_route_history_of_a_specific_individual], discovery_insight: [prove_high_capability_does_not_equal_aggression], route_environment: [water_route_opens_only_after_cooperation], settlement_culture: [local_fishers_remember_a_particular_individual_without_claiming_ownership], cross_species: []}
presentation_and_p6_followups: {initial_bestiary_presentation: large_intelligent_aquatic_species, progressive_reveal_notes: [communication_and_consent_should_be_readable], species_specific_visual_needs: [scale_against_human_and_water], species_specific_audio_needs: [], special_ui_or_readability_needs: [separate_environment_risk_from_hostility_state], p6_followup_required: true}
cross_species_links: {evolution_family: [], predator_prey: [], competition: [], symbiosis: [], mimicry_confusion: [], shared_habitat: [], cultural_or_material_dependencies: []}
open_questions_and_gates: {unresolved_sources: [ancient_population, diet, migration], contradictions: [], human_design_gates: [], deferred_to_p5: [cooperation_event_authoring_and_crossing_TNs], deferred_to_p6: [large_scale_water_presentation], deferred_to_p7: []}
```

---

## 6. #130 Gyarados / 갸라도스

```yaml
identity: {national_dex: 130, species_key: gyarados, official_name_en: Gyarados, official_name_ko: 갸라도스, evolution_family_keys: [magikarp, gyarados], mandatory_gen1_roster: true, dossier_status: pilot_reviewed}
provenance: {reviewed: true, source_revision_refs: [SRC-DATA-001@2cda0b56, OFFICIAL-DEX-GYARADOS, GYA-C1-001, GYA-C1-002, GYA-D1-001], official_evidence: [GYA-C1-001, GYA-C1-002], derived_claims: [GYA-D1-001]}
canonical_source_data:
  types: [water, flying]
  base_stats_raw: {hp: 95, attack: 125, defense: 79, special_attack: 60, special_defense: 100, speed: 81}
  abilities_relevant_to_p4: [intimidate]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height_m: 6.5, weight_kg: 235.0}
  evolution_source: {evolves_from: magikarp, evolves_to: [], canonical_conditions: [modern_level_condition_not_used_diegetically]}
  other_material_facts: [enraged_rampage_and_large_scale_destruction_in_official_version_context]
species_stat_profile: {rating_scale_version: p4-six-axis-v1, vigor: 4, force: 6, guard: 3, potency: 3, resistance: 5, speed: 4, derivation_notes: {vigor: hp_95, force: attack_125, guard: defense_79, potency: special_attack_60, resistance: special_defense_100, speed: speed_81}, calibration_flags: [source_extreme_force_fixture, large_body_environment_fixture]}
capabilities_and_hazards:
  locomotion: [aquatic, large_body_water_mobility]
  physical_hazards: [crush, collision, tail_or_body_displacement]
  elemental_environmental_hazards: [water_displacement, destructive_route_or_structure_damage]
  anomalous_hazards: []
  behavioral_capabilities: [rampage_when_enraged]
  utility_interaction_capabilities: []
  immunities_or_approach_invalidators: [human_direct_force_may_be_impossible_without_changed_fiction]
  hazard_records: [gyarados-rampage-zone]
  notes: [high_force_does_not_create_default_hostility]
ancient_strength: {classifications: [similar_to_modern_baseline], evidence_class: D1, rationale: official_scale_and_rampage_evidence_already_support_extreme_threat, stat_effect_if_any: none, behavior_effect_if_any: enraged_state_only, canon_boundary_note: settlement_scale_destruction_is_event_context_not_universal_every_encounter}
ancient_ecology: {habitat: [large_water_bodies_where_locality_supports], ecological_niche: [large_aquatic_predatory_or_dominant_role_intentionally_unresolved_without_more_evidence], activity_pattern: [unknown], seasonal_notes: [unknown], feeding_and_resource_interaction: [unknown], social_structure: [unknown], predator_prey_competitor_links: [intentionally_unresolved], environmental_effects: [major_water_and_shoreline_disturbance_when_rampaging], observable_signs: [large_wake, damaged_shoreline_or_structures_when_rampage_has_occurred], locality_constraints: [not_every_water_body], unsupported_gaps: [diet, group_structure, exact_ancient_distribution]}
human_perception_and_culture: {ordinary_attitude: [major_danger_when_enraged, awe_or_avoidance_otherwise], specialist_knowledge_holders: [fishers, route_guides, survivors_of_prior_incidents], benefits_and_services: [], fears_and_avoidance: [shoreline_destruction, displacement, blocked_escape], myths_omens_taboos: [local_rampage_stories_may_exist_but_are_not_universal], practical_customs: [evacuation_and_distance_are_valid_primary_responses], common_misbeliefs: [must_be_fought_head_on, high_force_means_always_aggressive], local_variation_notes: [individual_rampage_history_can_drive_local_reputation]}
identification_and_knowledge: {baseline_recognition: rare, unknown_presentation_hooks: [enormous_serpentine_water_creature, major_wake_or_destruction], local_aliases_or_titles: none, identification_evidence: [body_scale, morphology, recurring_rampage_signs], initial_knowledge_fragments: [do_not_assume_direct_human_force_is_viable], post_identification_knowledge: [enraged_state_is_material_trigger], advanced_insights: [evacuation_route_and_terrain_can_matter_more_than_damage], exceptional_individual_knowledge_hooks: [individual_rampage_history_or_scar_signs_if_authored]}
threat_and_encounter:
  baseline_threat_band: extreme_when_enraged_contextual_otherwise
  default_behavior_states: [observing, wary, warning, engaged, pursuing, retreating]
  aggression_tendency: high_only_in_explicit_enraged_or_hostile_state
  territoriality: unknown
  avoidance_tendency: unknown
  warning_signs: [large_disturbance, escalating_destruction, authored_behavior_signs]
  encounter_triggers: [water_route_crossing, disturbed_individual, rampage_event]
  escalation_triggers: [explicit_enragement, continued_close_pressure, constrained_route]
  deescalation_conditions: [event_specific; distance_or_end_of_rampage_may_apply]
  pursuit_profile: severe_if_rampage_event_supports_it
  group_size_effects: [not_required_for_pilot]
  ordinary_consequence_categories: [Serious_or_Critical_harm, destroyed_cover, route_loss, lost_load, immersion, evacuation]
  consequence_ceiling: Critical_or_lethal_only_with_explicit_D020_lethal_fiction; settlement_scale_damage_requires_authored_context
  human_check_hooks:
    - {action: evacuate_constrained_shoreline, relevant_species_axis: speed, relevant_tags: [rampage_when_enraged, large_body_water_mobility], relevant_hazard_keys: [gyarados-rampage-zone], difficulty_guidance: 11_to_15_by_route_and_warning, notes: strong_preparation_should_change_permission_or_position_first}
    - {action: directly_stop_body_with_human_force, relevant_species_axis: force, relevant_tags: [crush], relevant_hazard_keys: [gyarados-rampage-zone], difficulty_guidance: often_impossible_until_fiction_changes, notes: rating_6_never_creates_TN17}
individual_variation:
  ordinary_variation: {allowed_rating_deltas: normally_one_axis_plus_or_minus_1, temperament_variants: [reserved, volatile, already_enraged], condition_variants: [injured, exhausted_after_rampage], local_lineage_variants: [possible_but_not_assumed]}
  exceptional_individuals: {allowed: true, rarity_guidance: very_rare_authored, candidate_causes: [long_survival, territorial_dominance, extreme_local_adaptation], rating_shift_guidance: explicit_only_and_not_needed_to_make_species_dangerous, required_distinctive_traits: [learnable_behavior_or_visual_signature], warning_or_rumor_hooks: [prior_destruction_pattern]}
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [extraordinary_voluntary_bond, safe_water_access, demonstrated_non-hostile_long_term_relationship]
  trust_building_paths: [rare_rescue_or_long_cooperation_chain]
  reasons_to_stay: [exceptional_individual_bond_only]
  rejection_or_departure_reasons: [coercion, confinement, unsuitable_water, broken_trust]
  human_social_costs: [extreme_fear, infrastructure_risk, enormous_space_and_route_burden]
  logistics: {food: [intentionally_unresolved], water: [large_water_access_required], shelter_temperature: [large_open_environment], space_travel: [very_large_body], settlement_restrictions: [ordinary_small_settlement_cannot_safely_host_without_special_arrangement], special_resources: []}
  assistance_capabilities: [major_water_mobility_only_if_safe_and_voluntary]
  handling_boundaries: [no_routine_riding, no_portable_containment, no_obedience_assumption]
  separation_injury_notes: [forced_confinement_is_inappropriate]
mechanical_hooks: {tracking_clues: [wake, shoreline_damage], avoidance_preparation: [evacuation_route, robust_cover, distance], resistance_or_protection: [ordinary_armor_does_not_make_direct_crush_safe], combat_approach_permissions: [alternate_objectives_and_environmental_approaches_preferred], blocked_or_invalid_approaches: [bare_human_force_against_full_body_in_bad_position], fear_hooks: [massive_rampage], injury_hazard_hooks: [crush, collision, debris], environmental_state_hooks: [shoreline_integrity, cover, escape_route, water_level], companion_assistance_hooks: [water_route_if_exceptional_bond], fortune_spike_opportunities: [spot_safe_high_ground_or_early_escape], trouble_spike_complications: [cover_destroyed, separated_party, lost_load]}
hunting_materials_and_resources: {killing_treatment: exceptional_high_risk_and_locality_sensitive_under_D021, hunting_for_food: intentionally_unresolved, shed_or_abandoned_materials: none, natural_remains: possible_but_no_generic_loot, dangerous_harvesting: none_without_future_evidence, taboo_or_protection: locality_dependent_not_assumed, exact_notable_material_ids: [], generic_material_conversion_allowed: false, conversion_conditions: []}
technology_and_craft: {hook: none, enabling_evidence: [], human_craft_bridge: [], narrow_domain: none, local_dependency: [], scalability_limits: [], ownership_shortcut_forbidden: true, evidence_class: not_applicable}
emergency_consumable_hooks: {hooks: none}
narrative_and_event_hooks: {peaceful: [rare_distant_observation_of_non_enraged_individual], dangerous: [rampaging_Gyarados_blocks_water_route], unusual_or_rare: [survivors_identify_a_specific_individual_from_prior_damage_pattern], discovery_insight: [learn_that_evacuating_beats_frontal_damage_race], route_environment: [destroyed_bridge_or_shoreline_changes_route_state], settlement_culture: [local_warning_story_or_evacuated_zone], cross_species: [magikarp_evolution_chain]}
presentation_and_p6_followups: {initial_bestiary_presentation: enormous_water_species_with_extreme_force_potential, progressive_reveal_notes: [show_enraged_state_separately_from_baseline_identity], species_specific_visual_needs: [human_scale_comparison, environmental_damage_readability], species_specific_audio_needs: [optional_rampage_scale_cue], special_ui_or_readability_needs: [route_and_cover_state_must_be_visible], p6_followup_required: true}
cross_species_links: {evolution_family: [magikarp], predator_prey: [], competition: [], symbiosis: [], mimicry_confusion: [], shared_habitat: [], cultural_or_material_dependencies: []}
open_questions_and_gates: {unresolved_sources: [diet, ancient_distribution, ordinary_non_rampage_social_behavior], contradictions: [], human_design_gates: [], deferred_to_p5: [rampage_state_machine_and_escape_objectives], deferred_to_p6: [large_scale_environment_presentation], deferred_to_p7: []}
```

Evolution adaptation: Magikarp → Gyarados remains a dramatic biological transformation of a persistent individual. Modern level progression is not visible XP; the exact ancient trigger remains deliberately unresolved for the later family batch rather than invented in the pilot.

---

## 7. #092 Gastly / 고오스

```yaml
identity: {national_dex: 92, species_key: gastly, official_name_en: Gastly, official_name_ko: 고오스, evolution_family_keys: [gastly, haunter, gengar], mandatory_gen1_roster: true, dossier_status: pilot_reviewed}
provenance: {reviewed: true, source_revision_refs: [SRC-DATA-001@2cda0b56, OFFICIAL-DEX-GASTLY, GAS-C1-001, GAS-C1-002, GAS-D1-001, GAS-U-001], official_evidence: [GAS-C1-001, GAS-C1-002], derived_claims: [GAS-D1-001, GAS-U-001]}
canonical_source_data:
  types: [ghost, poison]
  base_stats_raw: {hp: 30, attack: 35, defense: 30, special_attack: 100, special_defense: 35, speed: 80}
  abilities_relevant_to_p4: [levitate]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height_m: 1.3, weight_kg: 0.1}
  evolution_source: {evolves_from: none, evolves_to: [haunter], canonical_conditions: [modern_level_condition_not_used_diegetically]}
  other_material_facts: [gas_like_or_impalpable_body, envelopment_can_weaken_or_impair_breathing_in_official_version_context]
species_stat_profile: {rating_scale_version: p4-six-axis-v1, vigor: 1, force: 1, guard: 1, potency: 5, resistance: 1, speed: 4, derivation_notes: {vigor: hp_30, force: attack_35, guard: defense_30, potency: special_attack_100, resistance: special_defense_35, speed: speed_80}, calibration_flags: [ghost_approach_invalidation_fixture]}
capabilities_and_hazards:
  locomotion: [levitating_or_floating_mobility]
  physical_hazards: []
  elemental_environmental_hazards: [toxic_or_respiratory_envelopment]
  anomalous_hazards: [ghost_materiality]
  behavioral_capabilities: [envelopment]
  utility_interaction_capabilities: []
  immunities_or_approach_invalidators: [ordinary_grab_pin_or_strike_as_flesh_can_be_invalid]
  hazard_records: [gastly-toxic-envelopment]
  notes: [impalpable_body_is_permission_rule_not_high_Guard]
ancient_strength: {classifications: [similar_to_modern_baseline], evidence_class: D1, rationale: no_reviewed_historical_stat_shift, stat_effect_if_any: none, behavior_effect_if_any: none_species_wide, canon_boundary_note: ancient_fear_may_be_higher_because_human_countermeasures_and_knowledge_are_worse_but_species_stats_do_not_change}
ancient_ecology: {habitat: [intentionally_unresolved; event_locality_must_be_source_or_project_justified], ecological_niche: [anomalous_gaseous_Ghost_presence], activity_pattern: [unknown], seasonal_notes: [unknown], feeding_and_resource_interaction: [unknown], social_structure: [unknown], predator_prey_competitor_links: [intentionally_unresolved], environmental_effects: [enclosed_space_can_amplify_envelopment_risk], observable_signs: [visible_gas_form_when_not_hidden, sudden_breathing_or_visibility_pressure_only_when_event_supports], locality_constraints: [do_not_assume_every_ruin_or_graveyard_contains_Gastly], unsupported_gaps: [origin, diet, exact_ancient_distribution, long_term_toxicity]}
human_perception_and_culture: {ordinary_attitude: [fear_and_uncertainty_are_plausible_when_materiality_is_not_understood], specialist_knowledge_holders: [rare_psychic_or_veil_sensitive_people, ritualists_or_scholars_only_where_local_practice_exists], benefits_and_services: [], fears_and_avoidance: [breathing_loss, inability_to_use_ordinary_grab_or_weapon_plan], myths_omens_taboos: [local_ghost_explanations_may_exist_but_are_not_universal_truth], practical_customs: [maintain_escape_and_ventilation_when_risk_is_known], common_misbeliefs: [ordinary_weapon_damage_always_solves_it, every_folk_ward_is_effective], local_variation_notes: [ritual_claims_need_individual_evidence_not_auto_truth]}
identification_and_knowledge: {baseline_recognition: specialist, unknown_presentation_hooks: [floating_gas_like_presence, ordinary_contact_fails], local_aliases_or_titles: none, identification_evidence: [gas_body, levitation, envelopment_behavior], initial_knowledge_fragments: [do_not_assume_grapple_is_valid], post_identification_knowledge: [maintain_distance_and_escape_from_envelopment], advanced_insights: [Veil_Sense_or_other_supported_interaction_can_change_permission_without_becoming_universal_Ghost_immunity], exceptional_individual_knowledge_hooks: []}
threat_and_encounter:
  baseline_threat_band: serious_if_envelopment_or_confined_space
  default_behavior_states: [unaware, observing, wary, engaged, pursuing, retreating]
  aggression_tendency: context_unknown_not_assumed
  territoriality: unknown
  avoidance_tendency: unknown
  warning_signs: [approach_of_gaseous_body, loss_of_safe_distance]
  encounter_triggers: [confined_structure, authored_Ghost_event, close_investigation]
  escalation_triggers: [failed_escape, prolonged_envelopment, unsupported_direct_contact]
  deescalation_conditions: [break_contact, reach_open_escape_space, event_specific_interaction]
  pursuit_profile: context_specific
  group_size_effects: [not_required_for_pilot]
  ordinary_consequence_categories: [weakening, poison_exposure, breathing_restriction, fainting_or_incapacitation]
  consequence_ceiling: Incapacitated_or_Serious_is_supportable; Critical_or_lethal_requires_additional_explicit_D020_fiction
  human_check_hooks:
    - {action: ordinary_grab_or_pin, relevant_species_axis: guard, relevant_tags: [ghost_materiality], relevant_hazard_keys: [], difficulty_guidance: impossible_until_fiction_changes, notes: do_not_roll_against_Guard_for_an_invalid_plan}
    - {action: escape_envelopment, relevant_species_axis: speed, relevant_tags: [envelopment], relevant_hazard_keys: [gastly-toxic-envelopment], difficulty_guidance: 9_to_13_by_space_and_escape, notes: post_exposure_consequence_is_separate}
individual_variation:
  ordinary_variation: {allowed_rating_deltas: normally_one_axis_plus_or_minus_1, temperament_variants: [curious, avoidant, hostile], condition_variants: [diffuse, concentrated], local_lineage_variants: [possible_but_not_assumed]}
  exceptional_individuals: {allowed: true, rarity_guidance: rare, candidate_causes: [long_manifestation_history, anomalous_local_condition], rating_shift_guidance: explicit_only, required_distinctive_traits: [distinct_behavior_or_manifestation_sign], warning_or_rumor_hooks: [repeating_envelopment_pattern]}
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [rare_voluntary_bond, safe_interaction_method, human_understands_contact_hazard]
  trust_building_paths: [repeated_non-hostile_encounters, Gift_or_other_supported_communication_only_if_event_allows]
  reasons_to_stay: [individual_bond_or_shared_goal]
  rejection_or_departure_reasons: [coercion, hostile_warding, inability_to_safely_coexist]
  human_social_costs: [fear, unsafe_enclosed_space, possible_poison_or_breathing_risk]
  logistics: {food: [unknown], water: [not_applicable_or_unknown], shelter_temperature: [unknown], space_travel: [requires_safe_ventilation_and_distance_rules], settlement_restrictions: [ordinary_people_may_not_accept_presence], special_resources: []}
  assistance_capabilities: [Ghost_interaction_only_where_specific_capability_is_reviewed]
  handling_boundaries: [cannot_be_treated_as_material_pet_or_inventory]
  separation_injury_notes: [bond_does_not_remove_hazard_or_materiality]
mechanical_hooks: {tracking_clues: [event_specific_residue_or_testimony_only_if_authored], avoidance_preparation: [escape_route, open_space, validated_barrier_only], resistance_or_protection: [no_generic_ward_without_evidence], combat_approach_permissions: [must_first_establish_valid_interaction], blocked_or_invalid_approaches: [ordinary_grab_pin_or_strike_as_flesh], fear_hooks: [materiality_failure, breathing_pressure], injury_hazard_hooks: [respiratory_or_poison_exposure], environmental_state_hooks: [enclosed_space, ventilation, exit_access], companion_assistance_hooks: [possible_Ghost_access], fortune_spike_opportunities: [discover_valid_interaction_or_escape_path], trouble_spike_complications: [envelopment, lost_exit, false_confidence_in_invalid_ward]}
hunting_materials_and_resources: {killing_treatment: exceptional_and_context_specific_under_D021, hunting_for_food: none, shed_or_abandoned_materials: none, natural_remains: unknown, dangerous_harvesting: none_without_future_evidence, taboo_or_protection: locality_dependent_not_assumed, exact_notable_material_ids: [], generic_material_conversion_allowed: false, conversion_conditions: []}
technology_and_craft: {hook: none, enabling_evidence: [], human_craft_bridge: [], narrow_domain: none, local_dependency: [], scalability_limits: [], ownership_shortcut_forbidden: true, evidence_class: not_applicable}
emergency_consumable_hooks: {hooks: none}
narrative_and_event_hooks: {peaceful: [observe_Gastly_from_safe_distance_without_forcing_contact], dangerous: [enclosed_structure_envelopment_event], unusual_or_rare: [Veil_Sense_character_gains_a_valid_interaction_branch_without_universal_immunity], discovery_insight: [learn_that_invalid_approach_is_not_high_difficulty], route_environment: [building_or_cave_becomes_unsafe_due_to_enclosed_space], settlement_culture: [conflicting_local_ghost_explanations_none_guaranteed_true], cross_species: [haunter, gengar]}
presentation_and_p6_followups: {initial_bestiary_presentation: uncertain_gaseous_Ghost_presence, progressive_reveal_notes: [separate_observed_fact_from_folk_explanation], species_specific_visual_needs: [materiality_and_envelopment_readability], species_specific_audio_needs: [], special_ui_or_readability_needs: [invalid_action_feedback_must_explain_permission_problem], p6_followup_required: true}
cross_species_links: {evolution_family: [haunter, gengar], predator_prey: [], competition: [], symbiosis: [], mimicry_confusion: [], shared_habitat: [], cultural_or_material_dependencies: []}
open_questions_and_gates: {unresolved_sources: [ancient_distribution, exact_human_toxic_duration, Ghost_origin_and_diet], contradictions: [], human_design_gates: [], deferred_to_p5: [Ghost_permission_resolution_and_envelopment_event], deferred_to_p6: [gaseous_body_readability], deferred_to_p7: []}
```

Evolution adaptation: Gastly → Haunter is a persistent-individual evolution, not a human XP reward. The later Haunter → Gengar family dossier must separately handle the modern trade-linked mechanic without presuming a modern trading institution.

---

## 8. #140 Kabuto / 투구

```yaml
identity: {national_dex: 140, species_key: kabuto, official_name_en: Kabuto, official_name_ko: 투구, evolution_family_keys: [kabuto, kabutops], mandatory_gen1_roster: true, dossier_status: pilot_reviewed}
provenance: {reviewed: true, source_revision_refs: [SRC-DATA-001@2cda0b56, OFFICIAL-DEX-KABUTO, KAB-C1-001, KAB-C1-002, KAB-C1-003, KAB-U-001], official_evidence: [KAB-C1-001, KAB-C1-002, KAB-C1-003], derived_claims: [KAB-U-001]}
canonical_source_data:
  types: [rock, water]
  base_stats_raw: {hp: 30, attack: 80, defense: 90, special_attack: 55, special_defense: 45, speed: 55}
  abilities_relevant_to_p4: [swift-swim, battle-armor]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height_m: 0.5, weight_kg: 11.5}
  evolution_source: {evolves_from: none, evolves_to: [kabutops], canonical_conditions: [modern_level_condition_not_used_diegetically]}
  other_material_facts: [deep_prehistoric_origin, extinct_almost_everywhere_with_rare_living_specimen_possibility, hard_protective_shell]
species_stat_profile: {rating_scale_version: p4-six-axis-v1, vigor: 1, force: 4, guard: 4, potency: 2, resistance: 2, speed: 2, derivation_notes: {vigor: hp_30, force: attack_80, guard: defense_90, potency: special_attack_55, resistance: special_defense_45, speed: speed_55}, calibration_flags: [fossil_history_ambiguity_fixture]}
capabilities_and_hazards: {locomotion: [aquatic_or_water_adapted_where_living_specimen_exists], physical_hazards: [hard_shell_can_make_trivial_bare_hand_force_ineffective], elemental_environmental_hazards: [], anomalous_hazards: [], behavioral_capabilities: [], utility_interaction_capabilities: [], immunities_or_approach_invalidators: [trivial_unarmed_force_may_be_ineffective_against_shell], hazard_records: [], notes: [no_bodily_harm_hazard_is_invented_just_to_fill_schema]}
ancient_strength: {classifications: [unresolved], evidence_class: U, rationale: species_is_itself_prehistoric_and_the_opening_locality_occurrence_is_unproven, stat_effect_if_any: none, behavior_effect_if_any: none, canon_boundary_note: ancient_setting_does_not_automatically_make_Kabuto_common_or_stronger}
ancient_ecology:
  habitat: [living_population_location_intentionally_unresolved]
  ecological_niche: [prehistoric_aquatic_or_shallow_water_role_requires_more_evidence]
  activity_pattern: [unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [intentionally_unresolved]
  environmental_effects: []
  observable_signs: [fossil_or_shell_remains_are_valid_knowledge_evidence; living_tracks_not_assumed]
  locality_constraints: [no_routine_opening_proto_Kanto_spawn_without_specific_justification]
  unsupported_gaps: [living_distribution, diet, behavior, group_structure]
human_perception_and_culture:
  ordinary_attitude: [may_be_unknown_or_known_only_as_strange_remains]
  specialist_knowledge_holders: [collectors_of_old_stone_or_shell_remains, scholars_or_ritual_keepers_where_local_practice_exists]
  benefits_and_services: []
  fears_and_avoidance: [none_species_wide_without_living_encounter]
  myths_omens_taboos: [local_fossil_interpretations_may_be_wrong]
  practical_customs: [preserve_unusual_remains_for_specialist_examination]
  common_misbeliefs: [old_remain_proves_living_local_population]
  local_variation_notes: [a_relict_population_if_authored_would_be_a_local_exception]
identification_and_knowledge:
  baseline_recognition: specialist
  unknown_presentation_hooks: [hard_shell_fossil_or_rare_living_armored_creature]
  local_aliases_or_titles: none
  identification_evidence: [shell_form, specialist_comparison, living_specimen_only_if_event_justifies]
  initial_knowledge_fragments: [ancient_remain_does_not_equal_current_presence]
  post_identification_knowledge: [hard_shell, prehistoric_origin]
  advanced_insights: [rare_living_relict_is_possible_in_official_evidence_but_locality_specific]
  exceptional_individual_knowledge_hooks: []
threat_and_encounter:
  baseline_threat_band: knowledge_first_or_low_contextual_when_living
  default_behavior_states: [unaware, observing, wary, retreating]
  aggression_tendency: unknown_not_presumed
  territoriality: unknown
  avoidance_tendency: unknown
  warning_signs: [hard_shell_and_body_posture_if_living]
  encounter_triggers: [fossil_discovery, specialist_rumor, exceptionally_justified_relict_encounter]
  escalation_triggers: [event_specific]
  deescalation_conditions: [event_specific]
  pursuit_profile: unknown
  group_size_effects: [unknown]
  ordinary_consequence_categories: [knowledge_access, tool_failure_against_shell, physical_harm_only_if_living_event_supports]
  consequence_ceiling: no_species_specific_lethal_ceiling_invented
  human_check_hooks:
    - {action: identify_fossil_or_shell, relevant_species_axis: none, relevant_tags: [], relevant_hazard_keys: [], difficulty_guidance: 9_to_13_by_evidence_and_specialist_access, notes: knowledge_event_not_combat}
    - {action: force_open_or_damage_living_shell, relevant_species_axis: guard, relevant_tags: [hard_shell], relevant_hazard_keys: [], difficulty_guidance: 11_to_13_or_invalid_for_bare_hands, notes: shell_is_not_absolute_immunity}
individual_variation:
  ordinary_variation: {allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_living_population_is_ever_authored, temperament_variants: [unknown], condition_variants: [fossil_remain, living_relict, injured], local_lineage_variants: [relict_population_would_require_explicit_locality_authoring]}
  exceptional_individuals: {allowed: true, rarity_guidance: already_rare_if_living; exceptional_profile_requires_additional_reason, candidate_causes: [extreme_longevity_or_relict_adaptation_if_supported], rating_shift_guidance: explicit_only, required_distinctive_traits: [clear_local_history], warning_or_rumor_hooks: []}
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [confirmed_living_individual, voluntary_bond, suitable_aquatic_habitat]
  trust_building_paths: [event_specific_rescue_or_habituation]
  reasons_to_stay: [stable_habitat_and_individual_bond]
  rejection_or_departure_reasons: [unsuitable_environment, coercion]
  human_social_costs: [extreme_rarity_attention, habitat_burden]
  logistics: {food: [unknown], water: [likely_material_but_exact_need_unknown], shelter_temperature: [unknown], space_travel: [small_but_environment_sensitive], settlement_restrictions: [cannot_assume_inland_viability], special_resources: []}
  assistance_capabilities: []
  handling_boundaries: [do_not_treat_fossil_knowledge_as_ownership_path]
  separation_injury_notes: [unknown]
mechanical_hooks: {tracking_clues: [fossil_or_shell_remain], avoidance_preparation: [], resistance_or_protection: [], combat_approach_permissions: [tools_must_be_fictionally_capable_against_shell], blocked_or_invalid_approaches: [bare_hand_force_against_hard_shell_may_be_invalid], fear_hooks: [], injury_hazard_hooks: [], environmental_state_hooks: [living_population_confirmation_state], companion_assistance_hooks: [], fortune_spike_opportunities: [recognize_rare_relict_evidence], trouble_spike_complications: [misidentify_fossil_as_proof_of_current_population]}
hunting_materials_and_resources: {killing_treatment: inappropriate_to_generalize_without_living_population_context, hunting_for_food: intentionally_unresolved, shed_or_abandoned_materials: none, natural_remains: [fossil_or_shell_remains_as_knowledge_objects_not_generic_Materials], dangerous_harvesting: none, taboo_or_protection: locality_dependent_not_assumed, exact_notable_material_ids: [], generic_material_conversion_allowed: false, conversion_conditions: []}
technology_and_craft: {hook: none, enabling_evidence: [], human_craft_bridge: [], narrow_domain: none, local_dependency: [], scalability_limits: [], ownership_shortcut_forbidden: true, evidence_class: not_applicable}
emergency_consumable_hooks: {hooks: none}
narrative_and_event_hooks: {peaceful: [specialist_studies_unusual_fossil], dangerous: [rare_living_relict_is_cornered_in_hazardous_water_only_if_locality_supports], unusual_or_rare: [evidence_chain_questions_whether_a_living_population_exists], discovery_insight: [learn_extinct_almost_everywhere_does_not_mean_impossible_everywhere], route_environment: [fossil_bearing_site], settlement_culture: [competing_local_explanations_for_old_shells], cross_species: [kabutops]}
presentation_and_p6_followups: {initial_bestiary_presentation: unknown_old_shell_or_fossil_before_species_confirmation, progressive_reveal_notes: [knowledge_can_progress_without_direct_encounter], species_specific_visual_needs: [fossil_vs_living_readability_if_both_used], species_specific_audio_needs: [], special_ui_or_readability_needs: [bestiary_must_support_unconfirmed_living_presence], p6_followup_required: true}
cross_species_links: {evolution_family: [kabutops], predator_prey: [], competition: [], symbiosis: [], mimicry_confusion: [], shared_habitat: [], cultural_or_material_dependencies: []}
open_questions_and_gates: {unresolved_sources: [opening_locality_living_presence, diet, behavior, exact_ancient_distribution], contradictions: [], human_design_gates: [], deferred_to_p5: [fossil_and_relict_evidence_chain], deferred_to_p6: [fossil_vs_living_presentation], deferred_to_p7: []}
```

Evolution adaptation: Kabuto → Kabutops is preserved as a family relationship, but the pilot does not invent a local living population or an exact ancient maturation trigger merely because the project takes place in the distant past.

---

## 9. #151 Mew / 뮤

```yaml
identity: {national_dex: 151, species_key: mew, official_name_en: Mew, official_name_ko: 뮤, evolution_family_keys: [mew], mandatory_gen1_roster: true, dossier_status: pilot_reviewed}
provenance: {reviewed: true, source_revision_refs: [SRC-DATA-001@2cda0b56, OFFICIAL-DEX-MEW, MEW-C1-001, MEW-C1-002, MEW-D1-001, MEW-U-001], official_evidence: [MEW-C1-001, MEW-C1-002], derived_claims: [MEW-D1-001, MEW-U-001]}
canonical_source_data:
  types: [psychic]
  base_stats_raw: {hp: 100, attack: 100, defense: 100, special_attack: 100, special_defense: 100, speed: 100}
  abilities_relevant_to_p4: [synchronize]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height_m: 0.4, weight_kg: 4.0}
  evolution_source: {evolves_from: none, evolves_to: [], canonical_conditions: []}
  other_material_facts: [genetic_composition_claim_is_epistemically_qualified, voluntary_invisibility_and_observation_avoidance]
species_stat_profile: {rating_scale_version: p4-six-axis-v1, vigor: 5, force: 5, guard: 5, potency: 5, resistance: 5, speed: 5, derivation_notes: {vigor: hp_100, force: attack_100, guard: defense_100, potency: special_attack_100, resistance: special_defense_100, speed: speed_100}, calibration_flags: [mythical_indirect_presence_fixture]}
capabilities_and_hazards:
  locomotion: [exceptional_mobile_behavior_but_exact_modes_not_invented]
  physical_hazards: []
  elemental_environmental_hazards: []
  anomalous_hazards: [observation_evasion, psychic_capability_bounded_by_specific_evidence]
  behavioral_capabilities: [voluntary_invisibility_or_concealment]
  utility_interaction_capabilities: []
  immunities_or_approach_invalidators: [ordinary_visual_tracking_can_be_invalid_when_Mew_chooses_to_hide]
  hazard_records: [mew-observation-evasion]
  notes: [broad_move_access_or_Psychic_type_never_means_can_do_anything]
ancient_strength: {classifications: [unresolved], evidence_class: U, rationale: no_reviewed_basis_for_claiming_ancient_Mew_is_stronger_or_weaker, stat_effect_if_any: none, behavior_effect_if_any: none, canon_boundary_note: Mythical_rarity_and_access_are_not_stat_modifiers}
ancient_ecology: {habitat: [intentionally_unresolved], ecological_niche: [intentionally_unresolved], activity_pattern: [unknown], seasonal_notes: [unknown], feeding_and_resource_interaction: [unknown], social_structure: [unknown], predator_prey_competitor_links: [intentionally_unresolved], environmental_effects: [none_invented], observable_signs: [event_specific_traces_or_fleeting_observation_only], locality_constraints: [no_routine_spawn_table], unsupported_gaps: [distribution, ecology, diet, population, ordinary_behavior]}
human_perception_and_culture: {ordinary_attitude: [most_people_may_have_no_reliable_direct_knowledge], specialist_knowledge_holders: [rare_witnesses_or_scholars_only_where_event_supports], benefits_and_services: [], fears_and_avoidance: [], myths_omens_taboos: [rumor_and_myth_are_valid_presentation_but_not_facts], practical_customs: [], common_misbeliefs: [every_Mew_story_is_true, direct_pursuit_should_work, Psychic_type_means_unlimited_power], local_variation_notes: [stories_can_conflict_without_one_becoming_global_truth]}
identification_and_knowledge:
  baseline_recognition: mythical
  unknown_presentation_hooks: [fleeting_small_unknown_figure, unexplained_trace, testimony_without_confirmation]
  local_aliases_or_titles: none
  identification_evidence: [rare_multi-source_observation_or_event_specific_proof]
  initial_knowledge_fragments: [uncertain_witness_account]
  post_identification_knowledge: [can_deliberately_avoid_observation]
  advanced_insights: [epistemic_limits_must_be_preserved; qualified_genetic_claim_does_not_grant_omniscience]
  exceptional_individual_knowledge_hooks: [Mew_itself_is_singular_or_exceptional_presence_for_gameplay_purposes]
threat_and_encounter:
  baseline_threat_band: access_and_knowledge_challenge_not_default_combat_threat
  default_behavior_states: [unaware, observing, avoidant, retreating]
  aggression_tendency: not_presumed
  territoriality: unknown
  avoidance_tendency: potentially_extreme_when_it_chooses_concealment
  warning_signs: [none_required]
  encounter_triggers: [rare_authored_condition_chain]
  escalation_triggers: [event_specific]
  deescalation_conditions: [event_specific]
  pursuit_profile: direct_human_pursuit_may_fail_by_permission
  group_size_effects: [not_applicable]
  ordinary_consequence_categories: [lost_access, failed_confirmation, misinformation]
  consequence_ceiling: no_automatic_bodily_harm_from_baseline_presence
  human_check_hooks:
    - {action: visually_track_Mew_after_it_chooses_invisibility, relevant_species_axis: speed, relevant_tags: [observation_evasion], relevant_hazard_keys: [mew-observation-evasion], difficulty_guidance: impossible_unless_event_supplies_valid_counter_condition, notes: do_not_use_TN_inflation_for_invalid_observation}
    - {action: evaluate_indirect_evidence, relevant_species_axis: none, relevant_tags: [], relevant_hazard_keys: [], difficulty_guidance: 11_to_15_by_evidence_quality, notes: success_can_advance_bestiary_without_direct_encounter}
individual_variation:
  ordinary_variation: {allowed_rating_deltas: none_required_for_pilot, temperament_variants: [unknown], condition_variants: [unknown], local_lineage_variants: [not_applicable_in_baseline]}
  exceptional_individuals: {allowed: false, rarity_guidance: Mew_itself_is_already_exceptional_mythical_presence; do_not_stack_generic_elite_logic, candidate_causes: [], rating_shift_guidance: none, required_distinctive_traits: [], warning_or_rumor_hooks: []}
  named_apex_examples: []
companionship:
  classification: inappropriate_or_impossible_baseline
  prerequisites: []
  trust_building_paths: []
  reasons_to_stay: []
  rejection_or_departure_reasons: [ordinary_companionship_path_is_not_authored]
  human_social_costs: [would_break_mythical_rarity_and_access_contract_if_routine]
  logistics: {food: [unknown], water: [unknown], shelter_temperature: [unknown], space_travel: [unknown], settlement_restrictions: [routine_settlement_companionship_forbidden_in_baseline], special_resources: []}
  assistance_capabilities: []
  handling_boundaries: [no_capture, no_routine_bond, no_portable_containment]
  separation_injury_notes: []
mechanical_hooks: {tracking_clues: [event_specific_indirect_trace], avoidance_preparation: [], resistance_or_protection: [], combat_approach_permissions: [none_assumed], blocked_or_invalid_approaches: [ordinary_direct_visual_pursuit_when_invisibility_is_active], fear_hooks: [], injury_hazard_hooks: [], environmental_state_hooks: [observation_access_state], companion_assistance_hooks: [], fortune_spike_opportunities: [rare_valid_confirmation], trouble_spike_complications: [false_positive_or_lost_trace]}
hunting_materials_and_resources: {killing_treatment: inappropriate_as_baseline_content, hunting_for_food: none, shed_or_abandoned_materials: none, natural_remains: none, dangerous_harvesting: none, taboo_or_protection: locality_myth_only_not_global_rule, exact_notable_material_ids: [], generic_material_conversion_allowed: false, conversion_conditions: []}
technology_and_craft: {hook: none, enabling_evidence: [], human_craft_bridge: [], narrow_domain: none, local_dependency: [], scalability_limits: [], ownership_shortcut_forbidden: true, evidence_class: not_applicable}
emergency_consumable_hooks: {hooks: none}
narrative_and_event_hooks: {peaceful: [fleeting_observation_that_does_not_force_contact], dangerous: [], unusual_or_rare: [multi_event_trace_chain_culminates_in_optional_confirmation], discovery_insight: [learn_to_distinguish_rumor_from_supported_observation], route_environment: [brief_unexplained_trace_without_spawn], settlement_culture: [conflicting_myths_and_witness_accounts], cross_species: []}
presentation_and_p6_followups: {initial_bestiary_presentation: rumor_or_unconfirmed_trace, progressive_reveal_notes: [support_unconfirmed_partial_and_confirmed_states_without_modern_Pokedex_dump], species_specific_visual_needs: [fleeting_or_partial_visibility], species_specific_audio_needs: [], special_ui_or_readability_needs: [uncertainty_state_must_be_explicit], p6_followup_required: true}
cross_species_links: {evolution_family: [], predator_prey: [], competition: [], symbiosis: [], mimicry_confusion: [], shared_habitat: [], cultural_or_material_dependencies: []}
open_questions_and_gates: {unresolved_sources: [ecology, distribution, population, exact_breadth_of_Psychic_capability], contradictions: [], human_design_gates: [], deferred_to_p5: [rare_trace_and_confirmation_chain], deferred_to_p6: [partial_visibility_and_uncertainty_presentation], deferred_to_p7: []}
```

---

## 10. Cross-pilot review result

The eight dossiers now satisfy the pilot-specific failure cases without bespoke rules:

| Failure-prone case | Reviewed dossier result |
|---|---|
| weak/common species later becomes routine | Rattata keeps a fixed `1/2/1/1/1/3` baseline; prepared late-run handling may become no-roll |
| named/apex weak-species threat | `pilot-rattata-apex-01` uses explicit `+1/+2/0/0/0/+2` deltas plus learned behavior/history |
| low-stat/high-hazard | Weedle keeps low ratings while venom medical severity remains an explicit source uncertainty |
| swarm/colony pressure | Beedrill uses warning → engagement → pursuit and repeated exposure, never `swarm +stats` |
| high capability without presumed aggression | Lapras supports communication/cooperation while open-water risk stays separate |
| extreme physical/environmental threat | Gyarados uses Force 6 plus displacement, route loss and rampage-state semantics rather than HP inflation |
| Ghost approach invalidation | Gastly rejects invalid ordinary-material interaction before numeric contest |
| fossil/history ambiguity | Kabuto can progress through fossil/knowledge content with no invented local living spawn |
| Mythical indirect presence | Mew supports rumor/trace/rare confirmation and makes direct observation permission-sensitive |

No full-schema authoring step exposed a new Human Design Gate. Remaining unknowns are source, locality, P5 event-tuning, or P6 presentation questions and are explicitly assigned rather than hidden.

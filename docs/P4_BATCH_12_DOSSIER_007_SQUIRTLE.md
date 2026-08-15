# P4 Batch 12 — #007 Squirtle Full-Schema Dossier

Part of `docs/P4_BATCH_12_FULL_SCHEMA_DOSSIERS.md`.

---

## #007 Squirtle / 꼬부기

```yaml
identity:
  national_dex: 7
  species_key: squirtle
  official_name_en: Squirtle
  official_name_ko: 꼬부기
  evolution_family_keys: [squirtle, wartortle, blastoise]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-SQUIRTLE-SG]
  official_evidence:
    - claim_id: SQU-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-SQUIRTLE-SG
      version_context: current_official_portal
      paraphrase: Squirtle_shell_is_soft_immediately_after_birth_and_rapidly_hardens_into_a_resilient_shell
    - claim_id: SQU-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-SQUIRTLE-SG
      version_context: current_official_portal
      paraphrase: Squirtle_can_spray_potent_foam_from_its_mouth
  derived_claims:
    - claim_id: SQU-D1-001
      evidence_class: D1
      based_on: [SQU-C1-001]
      statement: shell_hardening_is_biological_maturation_distinct_from_evolution
      canon_boundary_note: shell_is_not_equippable_armor_and_hardening_is_not_an_upgrade_slot_or_level_event
    - claim_id: SQU-D1-002
      evidence_class: D1
      based_on: [SQU-C1-002]
      statement: mouth_foam_is_a_species_capability_without_fixed_projectile_stats_or_generic_Water_type_rule
      canon_boundary_note: no_pressure_speed_damage_or_unlimited_water_formula_is_inferred
canonical_source_data:
  types: [water]
  base_stats_raw: {hp: 44, attack: 48, defense: 65, special_attack: 50, special_defense: 64, speed: 43}
  abilities_relevant_to_p4: [torrent_as_modern_low_HP_context, rain_dish_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 0.5_m, weight: 9.0_kg}
  evolution_source:
    evolves_from: none
    evolves_to: [wartortle]
    canonical_conditions: [modern_level_16_is_source_context_not_ancient_level_or_XP_law]
  other_material_facts: [post_birth_shell_hardening, resilient_shell, mouth_foam]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 2
  guard: 3
  potency: 2
  resistance: 3
  speed: 2
  derivation_notes: {vigor: hp_44, force: attack_48, guard: defense_65, potency: special_attack_50, resistance: special_defense_64, speed: speed_43}
  calibration_flags: [no_manual_exception, maturation_not_evolution, shell_not_equipment, Torrent_not_ancient_threshold]
capabilities_and_hazards:
  locomotion: [small_terrestrial_movement, aquatic_movement_when_scene_supports]
  physical_hazards: [bite_or_shell_body_contact_if_cornered_or_hostile]
  elemental_environmental_hazards: [mouth_foam_or_water_pressure_only_as_bounded_species_capability]
  anomalous_hazards: []
  behavioral_capabilities: [young_shell_maturation_state]
  utility_interaction_capabilities: [shell_state_can_be_observed_as_age_or_development_clue]
  immunities_or_approach_invalidators: []
  hazard_records: []
  notes: [Water_type_does_not_auto_define_amphibious_safety_or_jet_power, shell_hardening_duration_and_values_unresolved]
ancient_strength:
  classifications: [similar_to_modern_baseline]
  evidence_class: D2
  rationale: no_reviewed_evidence_supports_a_global_ancient_stat_bonus_for_Squirtle
  stat_effect_if_any: none
  behavior_effect_if_any: very_young_soft_shell_state_can_change_scene_vulnerability_without_new_species_baseline
  canon_boundary_note: no_generic_ancient_bonus_or_shell_armor_value
ancient_ecology:
  habitat: [exact_ancient_range_unknown, freshwater_or_sheltered_wet_locality_only_when_authored_D2]
  ecological_niche: [small_shelled_Water_Pokemon_with_post_birth_shell_maturation]
  activity_pattern: [unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [exact_diet_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [small_water_or_foam_signs_when_authored]
  observable_signs: [small_tracks, shell_scrapes, wet_marks_or_foam_residue_if_event_supports]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [exact_diet, social_structure, shell_hardening_duration, exact_range, full_aquatic_endurance]
human_perception_and_culture:
  ordinary_attitude: [caution_mixed_with_curiosity_toward_a_small_shelled_Pokemon]
  specialist_knowledge_holders: [fishers, river_guides, hunters_who_have_seen_the_species]
  benefits_and_services: [none_required]
  fears_and_avoidance: [mistaking_shell_for_human_made_armor_or_safe_grab_handle]
  myths_omens_taboos: [shell_hardening_stories_only_if_locally_authored_D2]
  practical_customs: [do_not_pry_or_repair_shell_as_equipment, give_young_individual_space]
  common_misbeliefs: [shell_is_equipment, shell_damage_uses_blacksmith_repair, maturation_is_evolution, starter_role_means_safe_or_common]
  local_variation_notes: [human_familiarity_depends_on_actual_local_ecology]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [small_blue_turtle_like_Pokemon_with_a_body_integrated_shell]
  local_aliases_or_titles: none
  identification_evidence: [shell_shape, body_form, water_or_foam_signs]
  initial_knowledge_fragments: [shell_is_part_of_the_body]
  post_identification_knowledge: [newborn_shell_starts_soft_and_hardens_after_birth]
  advanced_insights: [hardening_is_maturation_not_evolution_or_armor_upgrade]
  exceptional_individual_knowledge_hooks: [old_Squirtle_with_unusual_shell_damage_survival_or_route_history]
threat_and_encounter:
  baseline_threat_band: low_to_moderate_contextual
  default_behavior_states: [resting, swimming_if_authored, wary, hiding, fleeing, cornered]
  aggression_tendency: low_to_contextual
  territoriality: unknown_to_contextual
  avoidance_tendency: moderate_to_high
  warning_signs: [withdrawal_into_shell, body_turn, mouth_foam_or_water_aim_if_authored]
  encounter_triggers: [close_approach, blocking_water_exit_or_escape, touching_shell]
  escalation_triggers: [prying_shell, cornering, attacking_a_young_or_injured_individual]
  deescalation_conditions: [restore_escape_space, stop_shell_contact, move_away_from_water_exit]
  pursuit_profile: none_by_default
  group_size_effects: [unknown_no_generic_group_rule]
  ordinary_consequence_categories: [minor_to_serious_physical_or_water_pressure_injury, route_delay]
  consequence_ceiling: serious_when_context_escalates
  human_check_hooks:
    - action: pass_a_Squirtle_near_water_without_blocking_its_escape
      relevant_species_axis: speed
      relevant_tags: [shell, aquatic_escape]
      relevant_hazard_keys: []
      difficulty_guidance: D024_context_from_distance_water_access_cover_and_condition
      notes: shell_posture_is_not_an_armor_value_readout
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [skittish, calm, curious, defensive]
    condition_variants: [very_young_soft_shell, mature_shell, injured, exhausted]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_not_player_scaled
    candidate_causes: [age, survival_history, unusual_shell_damage_history, repeated_conflict]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_shell_marking_behavior_or_route_history]
    warning_or_rumor_hooks: [small_Squirtle_with_a_battered_shell_that_survives_far_beyond_expected_risk]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_persistent_trust, no_forced_containment, reliable_food_water_and_safe_rest]
  trust_building_paths: [repeated_noncoercive_contact, protecting_water_access, respecting_shell]
  reasons_to_stay: [bond, familiar_people_or_place, reliable_resources]
  rejection_or_departure_reasons: [forced_restraint, shell_prying_or_modification, chronic_denial_of_water_access]
  human_social_costs: [water_and_shelter_logistics, shell_misunderstanding]
  logistics:
    food: [exact_diet_unknown]
    water: [regular_access_and_safe_wetting]
    shelter_temperature: [safe_resting_area_near_suitable_water_if_needed]
    space_travel: [small_body_but_not_inventory_or_portable_containment]
    settlement_restrictions: [water_access_may_limit_long_stays]
    special_resources: [none_fixed_by_P4]
  assistance_capabilities: [small_water_or_foam_interaction_only_when_voluntary_and_scene_valid]
  handling_boundaries: [no_defeat_to_recruit, no_shell_equipment_modification, no_starter_distribution_shortcut]
  separation_injury_notes: [bond_departure_is_behavioral_not_inventory_loss]
mechanical_hooks:
  tracking_clues: [small_tracks, shell_scrapes, wet_marks]
  avoidance_preparation: [leave_water_exit_open, do_not_grab_shell]
  resistance_or_protection: [ordinary_cover_against_water_or_body_contact_when_valid]
  combat_approach_permissions: [ordinary_Squirtle_can_become_routine_later_without_scaling]
  blocked_or_invalid_approaches: [treat_shell_as_armor_item, blacksmith_repair_shell, convert_hardening_to_level_up_or_evolution]
  fear_hooks: [soft_shelled_young_individual_reveals_that_apparent_armor_is_living_anatomy]
  injury_hazard_hooks: []
  environmental_state_hooks: [water_access, escape_space, shell_maturity, cover]
  companion_assistance_hooks: [small_water_interaction_if_bonded_and_safe]
  fortune_spike_opportunities: [open_water_route_allows_peaceful_disengagement]
  trouble_spike_complications: [blocked_bank_forces_defensive_contact]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot_and_shell_is_not_equipment_or_material_drop
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_context_requires]
  dangerous_harvesting: [shell_removal_or_repair_not_supported]
  taboo_or_protection: [local_young_shell_protection_custom_possible_only_when_authored]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [shell_does_not_prove_armor_craft_and_foam_does_not_prove_pressure_technology]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_a_young_Squirtle_and_learn_shell_hardening_is_maturation]
  dangerous: [travelers_block_the_only_water_exit_and_provoke_a_defensive_encounter]
  unusual_or_rare: [exceptional_Squirtle_with_old_shell_damage_is_a_small_but_dangerous_named_individual_candidate]
  discovery_insight: [body_shell_and_evolution_are_separate_concepts]
  route_environment: [bank_shape_water_access_and_cover_define_contact]
  settlement_culture: [locals_may_mistake_shell_for_armor_until_corrected]
  cross_species: [Wartortle_cultural_tail_and_Blastoise_nozzles_are_not_auto_inherited]
presentation_and_p6_followups:
  initial_bestiary_presentation: small_shelled_Water_Pokemon_whose_shell_hardens_after_birth
  progressive_reveal_notes: [show_soft_young_shell_as_maturation_state_not_equipment_grade]
  species_specific_visual_needs: [shell_maturity_and_damage_readability, foam_if_used]
  species_specific_audio_needs: []
  special_ui_or_readability_needs: [no_armor_slot_repair_meter_or_evolution_progress_bar_for_shell_hardening]
  p6_followup_required: true
cross_species_links:
  evolution_family: [wartortle, blastoise]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [shell_hardening_duration, exact_shell_damage_recovery, exact_diet, exact_ancient_range, aquatic_endurance]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [shell_maturity_and_aquatic_escape_state]
  deferred_to_p6: [young_vs_mature_shell_visualization]
  deferred_to_p7: []
```

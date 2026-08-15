# P4 Batch 12 — #009 Blastoise Full-Schema Dossier

Part of `docs/P4_BATCH_12_FULL_SCHEMA_DOSSIERS.md`.

---

## #009 Blastoise / 거북왕

```yaml
identity:
  national_dex: 9
  species_key: blastoise
  official_name_en: Blastoise
  official_name_ko: 거북왕
  evolution_family_keys: [squirtle, wartortle, blastoise]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-BLASTOISE-SG]
  official_evidence:
    - claim_id: BLA-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-BLASTOISE-SG
      version_context: current_official_portal
      paraphrase: Blastoise_has_shell_integrated_water_jet_nozzles_used_for_powerful_propulsion_or_charge
    - claim_id: BLA-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-BLASTOISE-SG
      version_context: current_official_portal
      paraphrase: Blastoise_deliberately_increases_body_weight_to_withstand_recoil_from_water_jets
  derived_claims:
    - claim_id: BLA-D1-001
      evidence_class: D1
      based_on: [BLA-C1-001]
      statement: jet_nozzles_are_body_integrated_anatomy_and_species_capability
      canon_boundary_note: no_detachable_weapon_equipment_slot_or_human_cannon_rocket_pressure_vessel_technology_is_implied
    - claim_id: BLA-D1-002
      evidence_class: D1
      based_on: [BLA-C1-002]
      statement: recoil_bracing_and_weight_shift_can_be_authored_as_state_or_counterplay
      canon_boundary_note: no_fixed_knockback_mass_structure_damage_or_unlimited_water_formula
canonical_source_data:
  types: [water]
  base_stats_raw: {hp: 79, attack: 83, defense: 100, special_attack: 85, special_defense: 105, speed: 78}
  abilities_relevant_to_p4: [torrent_as_modern_low_HP_context, rain_dish_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 1.6_m, weight: 85.5_kg}
  evolution_source:
    evolves_from: wartortle
    evolves_to: []
    canonical_conditions: [final_stage_in_mandatory_gen1_chain, modern_level_metadata_is_not_ancient_XP_law]
  other_material_facts: [shell_integrated_jet_nozzles, recoil_management_by_body_weight, jet_propulsion_or_charge]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 4
  guard: 5
  potency: 4
  resistance: 5
  speed: 3
  derivation_notes: {vigor: hp_79, force: attack_83, guard: defense_100, potency: special_attack_85, resistance: special_defense_105, speed: speed_78}
  calibration_flags: [no_manual_exception, nozzle_anatomy_not_equipment, analogy_not_human_technology, recoil_not_mass_formula]
capabilities_and_hazards:
  locomotion: [large_terrestrial_movement, aquatic_movement, jet_assisted_propulsion_or_charge_when_authored]
  physical_hazards: [large_body_impact, shell_or_charge_collision]
  elemental_environmental_hazards: [high_pressure_water_jet, recoil_and_line_of_fire_pressure]
  anomalous_hazards: []
  behavioral_capabilities: [bracing_or_weight_shift_to_manage_recoil]
  utility_interaction_capabilities: [water_jet_can_move_body_or_affect_scene_objects_only_when_object_and_context_support]
  immunities_or_approach_invalidators: [light_cover_may_fail_against_direct_high_pressure_line_when_authored]
  hazard_records:
    - hazard_key: blastoise-high-pressure-water-line
      kind: other
      delivery_or_exposure: [direct_high_pressure_water_jet, jet_assisted_charge, collision_after_propulsion]
      prerequisite_or_trigger: [hostility_or_explicit_action_line]
      warning_signs: [nozzle_alignment, body_bracing_or_weight_shift, clear_line_of_fire, water_pressure_sound]
      immediate_effects: [serious_impact_or_displacement, loss_of_footing, route_denial]
      delayed_or_persistent_effects: [secondary_drowning_or_fall_risk_only_when_environment_supports]
      ordinary_consequence_ceiling: critical
      exceptional_consequence_ceiling: critical_or_fatal_only_under_severe_D020_context
      countermeasures: [hard_cover, break_line_of_fire, lateral_movement, terrain_anchor_when_valid]
      emergency_consumable_hooks: []
      context_amplifiers: [narrow_corridor, cliff_edge, deep_water, unstable_ground]
      context_mitigators: [hard_stone_cover, wide_lateral_space, broken_line_of_fire]
      governing_species_axes: [potency, force]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [BLA-C1-001, BLA-C1-002, BLA-D1-001, BLA-D1-002]
  notes: [exact_pressure_speed_volume_knockback_structure_damage_and_mass_shift_mechanism_are_unresolved, Water_type_does_not_auto_grant_nozzles]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: high_guard_resistance_and_line_of_fire_water_pressure_are_severe_in_a_low_technology_world_without_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: bracing_line_control_and_terrain_can_make_positioning_more_dangerous
  canon_boundary_note: no_global_ancient_bonus_or_pressure_formula
ancient_ecology:
  habitat: [exact_ancient_range_unknown, large_freshwater_coastal_or_water_adjacent_locality_only_when_authored_D2]
  ecological_niche: [large_armored_Water_Pokemon_with_shell_integrated_jet_propulsion]
  activity_pattern: [unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [exact_diet_and_water_source_for_jets_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [jet_scour_water_displacement_or_bank_damage_only_when_scene_specific_and_not_formulaic]
  observable_signs: [large_tracks, shell_scrapes, water_scour, displaced_silt_or_stone_when_authored]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [exact_diet, social_structure, exact_range, water_volume_source, pressure, propulsion_endurance, mass_shift_mechanism]
human_perception_and_culture:
  ordinary_attitude: [very_high_caution_due_to_size_shell_and_water_jet_force]
  specialist_knowledge_holders: [fishers, river_guides, hunters, engineers_or_craftspeople_only_as_observers_not_technology_inheritors]
  benefits_and_services: [none_required]
  fears_and_avoidance: [being_caught_in_clear_jet_line, cliff_or_water_edge_displacement, mistaking_nozzles_for_removable_weapons]
  myths_omens_taboos: [water_cannon_or_siege_beast_analogies_only_as_metaphor_if_locally_authored]
  practical_customs: [break_line_of_fire, seek_hard_cover, never_approach_nozzles_as_equipment]
  common_misbeliefs: [humans_copied_cannons_or_rockets_from_Blastoise, nozzles_can_be_removed_and_used, Force_or_weight_gives_exact_knockback]
  local_variation_notes: [analogy_language_does_not_fix_project_technology_level]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [large_turtle_like_Pokemon_with_two_shell_integrated_water_jet_nozzles]
  local_aliases_or_titles: none
  identification_evidence: [shell_nozzles, body_scale, bracing_posture, water_scour]
  initial_knowledge_fragments: [the_nozzles_are_part_of_the_shell_body]
  post_identification_knowledge: [it_can_use_jets_for_powerful_propulsion_and_manages_recoil_by_weight_shift]
  advanced_insights: [weapon_analogies_do_not_prove_human_cannon_rocket_or_pressure_technology]
  exceptional_individual_knowledge_hooks: [scarred_Blastoise_known_to_anchor_against_one_river_crossing_or_destroy_light_cover]
threat_and_encounter:
  baseline_threat_band: very_high_for_ordinary_humans
  default_behavior_states: [resting, swimming, braced, observing, territorial_if_authored, hostile, charging_or_disengaging]
  aggression_tendency: contextual
  territoriality: moderate_when_authored
  avoidance_tendency: low_when_braced_or_holding_water_access
  warning_signs: [nozzle_alignment, body_lowering, foot_or_shell_brace, water_pressure_sound]
  encounter_triggers: [entering_resting_or_water_access_space, direct_attack, blocking_route]
  escalation_triggers: [trapping, sustained_attack, threatening_rest_site_if_authored]
  deescalation_conditions: [leave_line_and_space, restore_route, stop_attack]
  pursuit_profile: contextual_with_jet_assisted_short_burst_possible_not_infinite
  group_size_effects: [unknown_no_generic_group_rule]
  ordinary_consequence_categories: [critical_impact_or_water_injury, forced_displacement, fall_or_drowning_risk_from_environment]
  consequence_ceiling: critical_with_fatality_possible_only_under_serious_D020_context
  human_check_hooks:
    - action: cross_between_hard_cover_without_being_caught_in_a_Blastoise_jet_line
      relevant_species_axis: potency
      relevant_tags: [high_pressure_water_jet, recoil_bracing]
      relevant_hazard_keys: [blastoise-high-pressure-water-line]
      difficulty_guidance: D024_context_from_distance_cover_line_angle_ground_and_current_bracing_state
      notes: no_fixed_pressure_or_knockback_formula_is_used
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [calm, territorial, wary, dominant]
    condition_variants: [resting, braced, injured, exhausted]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_not_player_scaled
    candidate_causes: [age, survival_history, repeated_conflict, terrain_mastery, unusual_jet_control]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_shell_damage_nozzle_marking_route_or_behavior_history]
    warning_or_rumor_hooks: [old_Blastoise_known_to_hold_a_ford_and_break_light_barricades_without_any_player_scaling]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [rare_voluntary_persistent_trust, no_forced_containment, large_water_space_and_safe_line_of_fire_management]
  trust_building_paths: [long_term_noncoercive_contact, respecting_water_access, injury_or_rest_support]
  reasons_to_stay: [deep_bond, familiar_territory_or_people, reliable_resources]
  rejection_or_departure_reasons: [forced_restraint, nozzle_tampering, coercive_weapon_use, chronic_space_denial]
  human_social_costs: [very_large_space_and_water_requirement, settlement_fear, accidental_jet_damage_risk]
  logistics:
    food: [exact_diet_unknown_but_large_body_requires_substantial_supply]
    water: [reliable_suitable_water_access]
    shelter_temperature: [large_resting_site_with_safe_clear_lines]
    space_travel: [large_body_requires_route_planning]
    settlement_restrictions: [dense_structures_may_not_safely_accommodate_jet_lines]
    special_resources: [none_fixed_by_P4]
  assistance_capabilities: [water_movement_or_heavy_scene_interaction_only_when_voluntary_and_later_rules_allow]
  handling_boundaries: [no_defeat_to_recruit, no_nozzle_equipment, no_siege_weapon_command_shortcut, no_force_to_structure_formula]
  separation_injury_notes: [bonded_Blastoise_remains_independent_and_cannot_be_stored]
mechanical_hooks:
  tracking_clues: [large_tracks, shell_scrapes, water_scour, displaced_silt]
  avoidance_preparation: [identify_hard_cover, avoid_narrow_jet_channels, keep_lateral_escape]
  resistance_or_protection: [hard_cover, line_break, stable_terrain]
  combat_approach_permissions: [use_bracing_and_line_of_fire_as_readable_state_instead_of_pressure_numbers]
  blocked_or_invalid_approaches: [remove_nozzles, infer_human_cannon_or_rocket_tech, derive_exact_knockback_or_structure_damage_from_stats]
  fear_hooks: [shell_nozzles_rotate_into_line_while_the_body_sinks_and_braces]
  injury_hazard_hooks: [impact, fall_or_drowning_as_environmental_follow_on]
  environmental_state_hooks: [hard_cover, route_width, cliff_or_water_edge, footing, braced_state]
  companion_assistance_hooks: [water_or_heavy_object_interaction_if_bonded_and_scene_valid]
  fortune_spike_opportunities: [solid_stone_breaks_jet_line]
  trouble_spike_complications: [narrow_bridge_or_cliff_turns_displacement_into_critical_risk]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot_and_nozzles_or_shell_are_not_weapon_drops
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_context_requires]
  dangerous_harvesting: [nozzle_or_shell_removal_not_supported]
  taboo_or_protection: [local_avoidance_or_reverence_possible_only_when_authored]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [cannon_jet_rocket_analogy_does_not_establish_gunpowder_cannon_pressure_vessel_rocket_or_industrial_metallurgy]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_a_Blastoise_brace_and_learn_that_the_nozzles_are_anatomy_not_weapons]
  dangerous: [cross_a_ford_or_bridge_while_high_pressure_jet_lines_control_space]
  unusual_or_rare: [exceptional_Blastoise_has_persistent_terrain_mastery_and_shell_damage_history]
  discovery_insight: [functional_weapon_analogy_is_not_technology_provenance]
  route_environment: [hard_cover_footing_route_width_and_edges_define_counterplay]
  settlement_culture: [humans_may_describe_it_with_siege_metaphors_without_possessing_siege_firearms]
  cross_species: [Squirtle_shell_maturation_and_Wartortle_tail_symbolism_do_not_auto_define_Blastoise]
presentation_and_p6_followups:
  initial_bestiary_presentation: large_highly_resistant_Water_Pokemon_with_shell_integrated_jet_nozzles_and_recoil_bracing
  progressive_reveal_notes: [make_nozzles_visibly_anatomical_and_bracing_readable_before_discharge]
  species_specific_visual_needs: [shell_nozzle_integration, bracing_weight_shift, jet_line]
  species_specific_audio_needs: [pressure_charge_and_discharge_cues]
  special_ui_or_readability_needs: [no_weapon_slot_ammo_meter_pressure_number_or_human_cannon_icon]
  p6_followup_required: true
cross_species_links:
  evolution_family: [squirtle, wartortle]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_pressure_speed_volume, water_source, propulsion_endurance, mass_shift_mechanism, diet, exact_ancient_range, structure_damage_limits]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [bracing_line_of_fire_recoil_and_displacement_timing]
  deferred_to_p6: [nozzle_body_integration_and_jet_telegraph_visualization]
  deferred_to_p7: [runtime_line_of_fire_or_displacement_model_if_required]
```

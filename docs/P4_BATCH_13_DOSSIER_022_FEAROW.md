# P4 Batch 13 — #022 Fearow Full-Schema Dossier

Part of `docs/P4_BATCH_13_FULL_SCHEMA_DOSSIERS.md`.

---

## #022 Fearow / 깨비드릴조

```yaml
identity:
  national_dex: 22
  species_key: fearow
  official_name_en: Fearow
  official_name_ko: 깨비드릴조
  evolution_family_keys: [spearow, fearow]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-FEAROW-SG]
  official_evidence:
    - claim_id: FER-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-FEAROW-SG
      version_context: current_official_portal
      paraphrase: food_found_inside_its_territory_may_be_snatcher_behavior_context
    - claim_id: FER-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-FEAROW-SG
      version_context: historical_version_tagged
      paraphrase: broad_wings_support_very_long_or_all_day_flight_without_landing_in_multiple_entries
    - claim_id: FER-C1-003
      evidence_class: C1
      source_ref: OFFICIAL-DEX-FEAROW-SG
      version_context: historical_or_region_tagged
      paraphrase: high_altitude_search_dive_behavior_and_long_beak_predation_are_repeatedly_described
  derived_claims:
    - claim_id: FER-D1-001
      evidence_class: D1
      based_on: [FER-C1-001]
      statement: exposed_food_can_become_an_encounter_trigger_or_contested_resource
      canon_boundary_note: no_hidden_inventory_knowledge_or_automatic_item_deletion
    - claim_id: FER-D1-002
      evidence_class: D1
      based_on: [FER-C1-002, FER-C1-003]
      statement: Fearow_has_materially_stronger_flight_endurance_than_Spearow
      canon_boundary_note: no_infinite_endurance_passenger_payload_or_exact_daily_distance_formula
canonical_source_data:
  types: [normal, flying]
  base_stats_raw: {hp: 65, attack: 90, defense: 65, special_attack: 61, special_defense: 61, speed: 100}
  abilities_relevant_to_p4: [keen_eye_as_modern_context, sniper_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 1.2_m, weight: 38.0_kg}
  evolution_source:
    evolves_from: spearow
    evolves_to: []
    canonical_conditions: [modern_level_20_metadata_is_source_context_only]
  other_material_facts: [food_snatching, sustained_or_all_day_flight, high_altitude_dive, long_beak_predation]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 4
  guard: 3
  potency: 3
  resistance: 3
  speed: 5
  derivation_notes: {vigor: hp_65, force: attack_90, guard: defense_65, potency: special_attack_61, resistance: special_defense_61, speed: speed_100}
  calibration_flags: [no_manual_exception, Speed_not_literal_flight_endurance_or_velocity, Flying_type_not_traversal_permission]
capabilities_and_hazards:
  locomotion: [terrestrial_movement, sustained_long_duration_flight, high_altitude_search_and_dive]
  physical_hazards: [long_beak_strike, claw_contact, aerial_dive_and_snatch]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [territorial_food_snatching, aerial_prey_search, endurance_flight]
  utility_interaction_capabilities: [long_duration_aerial_observation_only_when_event_valid]
  immunities_or_approach_invalidators: [open_ground_or_exposed_food_approaches_may_become_unsafe_when_a_Fearow_has_actual_line_of_sight_and_interest]
  hazard_records:
    - hazard_key: fearow-snatch-and-dive-pressure
      kind: physical_and_resource_contest
      delivery_or_exposure: [dive, beak_strike, exposed_food_snatch_attempt]
      prerequisite_or_trigger: [visible_food_or_prey, territorial_intrusion, direct_attack]
      warning_signs: [circling, altitude_change, repeated_focus_on_food_or_prey, wing_fold_before_dive]
      immediate_effects: [serious_laceration_pressure, contested_exposed_provision, forced_repositioning]
      delayed_or_persistent_effects: [food_loss_only_if_authored_event_resolves_a_failed_contest_or_consequence]
      ordinary_consequence_ceiling: critical
      exceptional_consequence_ceiling: critical_or_fatal_only_under_D020_context_not_automatic
      countermeasures: [secure_provisions, hard_cover, conceal_or_move_exposed_food, break_line_of_sight]
      emergency_consumable_hooks: []
      context_amplifiers: [open_camp, exposed_food, lack_of_overhead_cover, repeated_intrusion]
      context_mitigators: [sealed_or_hidden_provisions, hard_cover, enclosed_route, successful_disengagement]
      governing_species_axes: [speed, force]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [FER-C1-001, FER-C1-002, FER-C1-003, FER-D1-001, FER-D1-002]
  notes: [food_theft_is_an_event_attempt_not_inventory_mutation_permission, Alola_specific_ecology_does_not_prove_proto_Kanto_abundance]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: long_duration_flight_and_resource_pressure_are_severe_in_a_low_technology_world_without_creating_global_ancient_stats
  stat_effect_if_any: none
  behavior_effect_if_any: endurance_can_extend_pursuit_or_patrol_context_when_authored
  canon_boundary_note: no_global_ancient_bonus_or_player_scaling
ancient_ecology:
  habitat: [exact_ancient_range_unknown, open_country_cliffs_coasts_or_hunting_corridors_only_when_locally_authored_D2]
  ecological_niche: [large_endurance_aerial_predator_and_opportunistic_food_snatcher]
  activity_pattern: [unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [visible_food_and_preylike_resources_can_attract_attention_when_context_supports]
  social_structure: [unknown]
  predator_prey_competitor_links: [Alola_fish_search_is_region_context_not_proto_Kanto_presence_proof]
  environmental_effects: [large_feathers, dive_sign, disturbed_exposed_food, repeated_high_circling]
  observable_signs: [large_feathers, repeated_circling, food_or_prey_disturbance]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [exact_daily_distance, weather_endurance, payload, proto_Kanto_prey_links, ancient_distribution]
human_perception_and_culture:
  ordinary_attitude: [dangerous_predator_and_food_thief_near_exposed_camps]
  specialist_knowledge_holders: [hunters, fishers, caravaners, sky_watchers]
  benefits_and_services: [none_required]
  fears_and_avoidance: [food_loss, dive_attack, prolonged_aerial_presence]
  myths_omens_taboos: [local_D2_only]
  practical_customs: [secure_provisions, use_overhead_cover, watch_high_circling_before_opening_food]
  common_misbeliefs: [food_snatching_means_hidden_inventory_awareness, all_day_flight_means_infinite_endurance, Keen_Eye_means_perfect_detection]
  local_variation_notes: [regional_ecology_must_not_be_flattened_into_universal_presence]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [long_beak_silhouette, prolonged_high_circling]
  local_aliases_or_titles: none
  identification_evidence: [large_wings, long_beak, sustained_circling, dive_posture]
  initial_knowledge_fragments: [it_can_remain_airborne_for_long_periods, exposed_food_can_draw_attention]
  post_identification_knowledge: [Spearow_style_short_flight_limits_do_not_apply_to_Fearow]
  advanced_insights: [resource_loss_requires_an_event_state_with_warning_and_counterplay]
  exceptional_individual_knowledge_hooks: [old_Fearow_known_for_shadowing_one_trade_route_for_hours_without_becoming_an_infinite_pursuer]
threat_and_encounter:
  baseline_threat_band: high_for_ordinary_humans
  default_behavior_states: [soaring, searching, circling, warning, diving, snatching, disengaging]
  aggression_tendency: contextual
  territoriality: moderate_to_high_when_authored
  avoidance_tendency: low_when_interested_in_visible_resource_or_prey
  warning_signs: [circling, repeated_focus, altitude_drop, wing_fold]
  encounter_triggers: [visible_exposed_food, territory_entry_if_authored, direct_attack]
  escalation_triggers: [continued_food_exposure, pursuit, repeated_intrusion, attack]
  deescalation_conditions: [secure_resource, leave_territory, gain_hard_cover, break_line_of_sight]
  pursuit_profile: potentially_long_duration_but_not_infinite_and_weather_distance_remain_contextual
  group_size_effects: [no_generic_multiplier]
  ordinary_consequence_categories: [critical_laceration, forced_route_change, contested_or_lost_food_through_event_resolution]
  consequence_ceiling: critical_with_fatality_possible_only_under_serious_D020_context
  human_check_hooks:
    - action: secure_or_move_exposed_provisions_before_a_dive_resolves
      relevant_species_axis: speed
      relevant_tags: [sustained_long_duration_flight, territorial_food_snatching]
      relevant_hazard_keys: [fearow-snatch-and-dive-pressure]
      difficulty_guidance: D024_context_from_distance_cover_warning_state_resource_exposure_and_current_altitude
      notes: Speed_5_does_not_define_daily_distance_or_exact_dive_velocity
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [opportunistic, territorial, cautious, persistent]
    condition_variants: [soaring, hunting, fed, fatigued, injured]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_history_backed_not_player_scaled
    candidate_causes: [age, survival_history, specialized_hunting_route, conditioning]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_route_marking_scar_or_reputation]
    warning_or_rumor_hooks: [old_Fearow_known_for_shadowing_one_trade_route_for_hours]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [rare_voluntary_persistent_trust, large_roost_and_flight_space, secure_food_logistics, no_forced_containment]
  trust_building_paths: [long_term_noncoercive_contact, injury_recovery, reliable_resources]
  reasons_to_stay: [deep_bond, familiar_route_or_people]
  rejection_or_departure_reasons: [forced_restraint, food_deprivation, coercive_transport_or_combat_use]
  human_social_costs: [large_food_burden, settlement_fear, exposed_provision_risk]
  logistics:
    food: [substantial_species_appropriate_supply_exact_amount_unknown]
    water: [regular_access]
    shelter_temperature: [large_roost]
    space_travel: [significant_airspace_required]
    settlement_restrictions: [dense_or_food_exposed_settlements_may_refuse_entry]
    special_resources: [none_fixed]
  assistance_capabilities: [aerial_observation_only_if_voluntary_and_later_rules_allow]
  handling_boundaries: [no_defeat_to_recruit, no_forced_mount, no_carry_formula, one_visible_companion_slot]
  separation_injury_notes: [bonded_Fearow_remains_independent_and_cannot_be_stored]
mechanical_hooks:
  tracking_clues: [large_feathers, circling_routes, disturbed_food_or_preylike_resource]
  avoidance_preparation: [secure_provisions, identify_hard_cover, conceal_exposed_food]
  resistance_or_protection: [hard_cover, line_break, enclosed_route]
  combat_approach_permissions: [named_exceptional_individual_may_use_explicit_profile_not_scaling]
  blocked_or_invalid_approaches: [delete_inventory_because_Fearow_exists, infer_hidden_item_awareness, convert_Speed_to_daily_distance]
  fear_hooks: [the_same_silhouette_remains_overhead_long_after_the_party_expected_it_to_leave]
  injury_hazard_hooks: [laceration, impact]
  environmental_state_hooks: [cover, exposed_food, line_of_sight, altitude]
  companion_assistance_hooks: [aerial_observation_if_voluntary_and_event_valid]
  fortune_spike_opportunities: [rock_overhang_or_dense_canopy_breaks_dive_line]
  trouble_spike_complications: [open_camp_and_exposed_food_create_repeated_opportunity]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none_fixed
  shed_or_abandoned_materials: [ordinary_feathers_only_if_context_requires]
  natural_remains: [ordinary_remains_only_if_context_requires]
  dangerous_harvesting: [none_supported]
  taboo_or_protection: [local_D2_only]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [long_flight_does_not_create_messenger_or_transport_infrastructure_without_separate_evidence]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [learn_to_secure_food_before_crossing_a_known_Fearow_route]
  dangerous: [defend_exposed_provisions_during_repeated_aerial_snatch_attempts]
  unusual_or_rare: [an_exceptional_Fearow_shadows_a_caravan_for_hours_without_infinite_endurance]
  discovery_insight: [Fearow_endurance_is_stage_local_and_resource_theft_needs_explicit_resolution]
  route_environment: [overhead_cover_and_resource_exposure_define_counterplay]
  settlement_culture: [caravaners_use_food_covering_customs_near_known_routes]
  cross_species: [Spearow_short_range_flight_is_not_inherited_forward_as_a_Fearow_limit]
presentation_and_p6_followups:
  initial_bestiary_presentation: endurance_aerial_predator_with_resource_snatch_pressure
  progressive_reveal_notes: [distinguish_visible_resource_interest_from_omniscience]
  species_specific_visual_needs: [long_beak, prolonged_circling, dive_telegraph]
  species_specific_audio_needs: [high_call, dive_rush]
  special_ui_or_readability_needs: [no_inventory_auto_loss, no_infinite_endurance_meter]
  p6_followup_required: true
cross_species_links:
  evolution_family: [spearow]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_daily_distance, weather_endurance, payload, proto_Kanto_prey_links, ancient_distribution]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [resource_contest_and_long_pursuit_event_state]
  deferred_to_p6: [circling_and_dive_readability]
  deferred_to_p7: [runtime_aerial_state_if_required]
```

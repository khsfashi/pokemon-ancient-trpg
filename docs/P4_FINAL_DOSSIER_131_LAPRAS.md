# P4 Final Promotion — #131 Lapras Full-Schema Dossier

Status: **COMPLETE**  
Date: **2026-08-16**  
Tracks: **#5**  
Promotes the reviewed pilot entry from `docs/P4_PILOT_FULL_SCHEMA_DOSSIERS.md` against the final frozen P4 schema and D-034.

The pilot evidence remains authoritative for `LAP-*` claim IDs. This final dossier does not invent a stronger ancient Lapras population or routine ferry culture. It makes the already-reviewed cooperative living encounter explicit enough for the all-151 direct-encounter contract.

---

## #131 Lapras / 라프라스

```yaml
identity:
  national_dex: 131
  species_key: lapras
  official_name_en: Lapras
  official_name_ko: 라프라스
  evolution_family_keys: [lapras]
  mandatory_gen1_roster: true
  dossier_status: complete

provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001@2cda0b56, OFFICIAL-DEX-LAPRAS, P4_PILOT_EVIDENCE_AND_HAZARD_PACKETS, D-034]
  official_evidence:
  - claim_id: LAP-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-LAPRAS
    version_context: reviewed_official_portal_context
    paraphrase: Lapras_is_presented_as_highly_intelligent_and_capable_of_understanding_human_speech
  - claim_id: LAP-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-LAPRAS
    version_context: reviewed_official_portal_context
    paraphrase: Lapras_is_presented_as_capable_of_carrying_people_across_water_when_the_individual_is_cooperative
  derived_claims:
  - claim_id: LAP-D1-001
    evidence_class: D1
    based_on: [LAP-C1-001, LAP-C1-002]
    statement: communication_and_voluntary_cooperation_are_legal_first_class_encounter_approaches
    canon_boundary_note: no_routine_ownership_guaranteed_friendliness_or_universal_ferry_service
  - claim_id: LAP-D1-002
    evidence_class: D1
    based_on: [LAP-C1-002]
    statement: a_nonhostile_large_aquatic_interaction_can_still_create_severe_open_water_consequences_through_environment_position_and_load
    canon_boundary_note: environment_risk_does_not_imply_Lapras_aggression
  - claim_id: LAP-D2-034
    evidence_class: D2
    based_on: [LAP-C1-001, LAP-C1-002]
    statement: total_game_coverage_may_use_a_rare_playable_coastal_or_large_water_encounter_with_a_living_Lapras_where_the_player_can_seek_or_decline_voluntary_cooperation
    canon_boundary_note: this_is_a_game_content_guarantee_not_proof_of_common_ancient_population_or_companion_ownership

canonical_source_data:
  types: [water, ice]
  base_stats_raw: {hp: 130, attack: 85, defense: 80, special_attack: 85, special_defense: 95, speed: 60}
  abilities_relevant_to_p4: [water_absorb_as_modern_context, shell_armor_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 2.5_m, weight: 220.0_kg}
  evolution_source:
    evolves_from: none
    evolves_to: []
    canonical_conditions: []
  other_material_facts: [high_intelligence, human_speech_comprehension, voluntary_person_transport_across_water]

species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 6
  force: 4
  guard: 4
  potency: 4
  resistance: 4
  speed: 3
  derivation_notes: {vigor: hp_130, force: attack_85, guard: defense_80, potency: special_attack_85, resistance: special_defense_95, speed: speed_60}
  calibration_flags: [no_manual_exception, high_capability_does_not_imply_aggression, aquatic_environment_risk_is_separate_from_hostility]

capabilities_and_hazards:
  locomotion: [aquatic, large_water_transport_when_voluntary]
  physical_hazards: [large_body_displacement]
  elemental_environmental_hazards: [open_water_dependence, cold_exposure_only_when_scene_environment_supports_it]
  anomalous_hazards: []
  behavioral_capabilities: [human_speech_comprehension]
  utility_interaction_capabilities: [voluntary_rider_transport]
  immunities_or_approach_invalidators: [deep_water_invalidates_some_foot_based_human_approaches]
  hazard_records:
  - hazard_key: lapras-open-water-dependence
    kind: drowning
    delivery_or_exposure: [human_becomes_separated_from_shore_craft_or_support, sudden_movement_or_water_conditions_remove_stable_footing_or_support]
    prerequisite_or_trigger: [open_water_interaction_where_human_safety_depends_on_position_support_load_or_cooperation]
    warning_signs: [visible_water_and_weather_conditions, distance_from_safe_footing, unstable_or_overloaded_crossing_plan]
    immediate_effects: [displacement, immersion, lost_equipment, separation, P3_Fatigue_Injury_or_Fear_when_scene_fiction_warrants]
    delayed_or_persistent_effects: [cold_or_exposure_only_where_authored_environment_supports_it]
    ordinary_consequence_ceiling: Critical_or_lethal_only_through_explicit_drowning_or_exposure_fiction_even_when_Lapras_is_nonhostile
    exceptional_consequence_ceiling: none
    countermeasures: [safe_route_or_craft, setting_appropriate_tethering_or_load_security, shoreline_access, establish_cooperation_instead_of_assuming_control]
    emergency_consumable_hooks: [none]
    context_amplifiers: [cold_water, storm, far_from_shore, heavy_or_unsecured_load]
    context_mitigators: [calm_water, shoreline_access, prepared_crossing_equipment, voluntary_cooperation]
    governing_species_axes: [vigor, force]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [LAP-C1-002, LAP-D1-002]
  notes: [environment_can_be_lethal_without_hostility, high_ratings_never_create_default_aggression]

ancient_strength:
  classifications: [similar_to_modern_baseline]
  evidence_class: D1
  rationale: no_reviewed_basis_for_a_species_wide_ancient_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: none_species_wide
  canon_boundary_note: rarity_local_presence_and_human_relationships_are_authoring_context_not_stat_inflation

ancient_ecology:
  habitat: [large_water_bodies_or_coastal_routes_only_where_project_locality_supports]
  ecological_niche: [large_intelligent_aquatic_traveler]
  activity_pattern: [unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [intentionally_unresolved]
  environmental_effects: [a_willing_individual_can_change_human_route_access_without_becoming_owned_transport]
  observable_signs: [large_waterborne_silhouette_or_wake_when_visible]
  locality_constraints: [exact_baseline_ancient_population_is_unresolved, not_every_water_body_contains_Lapras, D034_direct_encounterability_does_not_mean_commonness]
  unsupported_gaps: [migration, diet, group_structure, exact_ancient_population]

human_perception_and_culture:
  ordinary_attitude: [awe_or_caution_toward_a_large_intelligent_water_species]
  specialist_knowledge_holders: [fishers, ferrymen_or_water_route_guides_only_where_local_practice_supports_them]
  benefits_and_services: [voluntary_transport_is_possible_but_never_a_guaranteed_service]
  fears_and_avoidance: [open_water_dependence, accidental_displacement, unsafe_crossing_conditions]
  myths_omens_taboos: [none_required]
  practical_customs: [seek_cooperation_before_mounting_or_using_as_transport, secure_load_and_route_before_crossing]
  common_misbeliefs: [high_stats_mean_aggressive, intelligence_means_domesticated, one_successful_crossing_creates_ownership]
  local_variation_notes: [communities_may_have_distinct_histories_with_particular_individuals_without_region_wide_ferry_culture]

identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [large_shelled_aquatic_creature, calm_observant_behavior, waterborne_silhouette]
  local_aliases_or_titles: none
  identification_evidence: [body_scale, shell, swimming_form, communication_response]
  initial_knowledge_fragments: [do_not_assume_permission_to_ride_or_approach]
  post_identification_knowledge: [cooperation_and_open_water_safety_are_separate_questions]
  advanced_insights: [communication_can_open_noncombat_resolution, route_preparation_can_matter_more_than_species_power]
  exceptional_individual_knowledge_hooks: [recognized_route_history_or_behavior_only_if_authored]

threat_and_encounter:
  baseline_threat_band: low_if_cooperative_but_environmentally_high_stakes
  default_behavior_states: [observing, wary, avoidant, engaged, retreating]
  aggression_tendency: not_presumed
  territoriality: unknown
  avoidance_tendency: moderate_or_contextual
  warning_signs: [withdrawal_or_refusal, rough_water, dangerous_weather, unstable_load]
  encounter_triggers: [rare_authored_large_water_or_coastal_contact, water_crossing_need, stranded_human, voluntary_approach]
  escalation_triggers: [coercive_mounting, attack, dangerous_water_condition, blocked_retreat]
  deescalation_conditions: [restore_distance, stop_coercion, reach_safe_water_or_shore, abandon_unsafe_crossing]
  pursuit_profile: none_presumed
  group_size_effects: [each_Lapras_is_one_entity_with_one_ordinary_turn_health_state_initiative_presence_and_visible_companion_slot_if_ever_bonded]
  ordinary_consequence_categories: [drowning_risk, immersion, lost_load, separation, physical_harm_if_directly_struck]
  consequence_ceiling: Critical_or_lethal_only_through_explicit_D020_open_water_or_other_lethal_fiction
  human_check_hooks:
  - action: seek_voluntary_cooperation_from_a_living_Lapras
    relevant_species_axis: none
    relevant_tags: [human_speech_comprehension, voluntary_transport]
    relevant_hazard_keys: []
    difficulty_guidance: authored_social_or_context_check_not_species_stat_formula_and_may_be_no_roll_when_fiction_already_resolves_consent
    notes: success_never_equals_ownership_and_refusal_remains_valid
  - action: remain_safe_during_a_cooperative_crossing
    relevant_species_axis: vigor
    relevant_tags: [aquatic]
    relevant_hazard_keys: [lapras-open-water-dependence]
    difficulty_guidance: D024_context_from_weather_load_distance_support_and_preparation
    notes: environment_is_primary_and_Lapras_need_not_be_hostile

individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [curious, reserved, cooperative, avoidant]
    condition_variants: [injured, tired, traveling]
    local_lineage_variants: [possible_but_unproven]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [longevity, unusual_route_history, persistent_local_relationship]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_behavior_body_sign_or_route_history]
    warning_or_rumor_hooks: [known_crossing_or_rescue_history]
  named_apex_examples: []

companionship:
  classification: eligible
  prerequisites: [voluntary_long_term_trust, reliable_large_water_access, explicit_acceptance_of_shared_travel_relationship]
  trust_building_paths: [communication, repeated_safe_cooperation, rescue_without_coercion]
  reasons_to_stay: [social_bond, shared_travel, safe_access_to_suitable_water]
  rejection_or_departure_reasons: [coercion, confinement, unsuitable_inland_travel, betrayal]
  human_social_costs: [large_space_need, route_dependency, settlement_infrastructure_limits]
  logistics:
    food: [intentionally_unresolved]
    water: [large_regular_water_access_required]
    shelter_temperature: [avoid_unsuitable_heat_or_dry_confinement]
    space_travel: [large_body_and_water_route_needed]
    settlement_restrictions: [many_inland_or_small_settlements_cannot_host_safely_or_well]
    special_resources: []
  assistance_capabilities: [water_transport, water_route_scouting_when_voluntary]
  handling_boundaries: [never_mount_without_permission, no_portable_containment, one_visible_companion_slot]
  separation_injury_notes: [stranding_or_forced_inland_separation_can_be_a_major_logistics_event]

mechanical_hooks:
  tracking_clues: [wake, large_water_sign, local_witness_account_when_reliable]
  avoidance_preparation: [crossing_plan, load_security, weather_reading, shoreline_escape]
  resistance_or_protection: [cold_or_drowning_protection_is_environmental_not_species_armor]
  combat_approach_permissions: [direct_force_against_large_body_may_be_extreme_or_invalid_by_position]
  blocked_or_invalid_approaches: [assume_obedient_mount, defeat_equals_recruit, high_stats_equal_hostility]
  fear_hooks: [deep_water_or_storm_only_when_scene_supports]
  injury_hazard_hooks: [lapras-open-water-dependence]
  environmental_state_hooks: [shore_distance, current, weather, load_security, cooperation_state]
  companion_assistance_hooks: [voluntary_cross_water]
  fortune_spike_opportunities: [communication_reveals_safe_route_or_prevents_bad_assumption]
  trouble_spike_complications: [lost_load, separation, sudden_weather_change, refusal_requires_alternate_route]

hunting_materials_and_resources:
  killing_treatment: exceptional_high_cost_context_under_D021_not_default_content
  hunting_for_food: intentionally_unresolved
  shed_or_abandoned_materials: none
  natural_remains: possible_but_no_generic_loot
  dangerous_harvesting: none
  taboo_or_protection: locality_dependent_not_assumed
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []

technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [voluntary_transport_does_not_create_an_owned_transport_industry]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable

emergency_consumable_hooks:
  hooks: none

narrative_and_event_hooks:
  peaceful: [playable_living_Lapras_contact_where_the_player_may_seek_decline_or_respect_refusal_of_cooperation]
  dangerous: [a_cooperative_or_neutral_crossing_becomes_dangerous_because_weather_load_or_distance_changes]
  unusual_or_rare: [learn_the_long_route_history_of_a_specific_individual_without_turning_it_into_property]
  discovery_insight: [high_capability_does_not_equal_aggression_or_ownership]
  route_environment: [a_water_route_can_open_through_voluntary_cooperation_or_remain_closed_after_refusal]
  settlement_culture: [local_fishers_may_remember_an_individual_without_claiming_a_species_wide_service]
  cross_species: []

presentation_and_p6_followups:
  initial_bestiary_presentation: large_intelligent_aquatic_species_with_uncertain_relationship_to_humans
  progressive_reveal_notes: [communication_consent_and_environment_risk_should_be_readable_as_separate_states]
  species_specific_visual_needs: [human_scale_comparison, water_support_and_shore_distance]
  species_specific_audio_needs: []
  special_ui_or_readability_needs: [separate_environment_risk_from_hostility_and_cooperation_state]
  p6_followup_required: true

cross_species_links:
  evolution_family: []
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []

open_questions_and_gates:
  unresolved_sources: [exact_ancient_population, diet, migration, group_structure]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [cooperation_event_state_machine, crossing_TNs_and_route_objectives]
  deferred_to_p6: [large_scale_water_and_consent_presentation]
  deferred_to_p7: []
```

## Final completion note

Lapras satisfies D-034 through an actual living, playable encounter whose meaningful interaction is **voluntary cooperation/refusal and route negotiation**, not through a guaranteed random spawn or ownership path. Its exact baseline-era population remains unresolved, which is legal because D-034 separates ordinary-era natural presence from total-game encounter availability.

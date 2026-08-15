# P4 Batch 01 — Full-Schema Dossiers

Status: **REVIEW COMPLETE — Batch 01 promoted under D-032**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_01_SOURCE_REVIEW.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_PILOT_FULL_SCHEMA_DOSSIERS.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## 1. Review boundary

All six new Batch 01 species satisfy the shared P4 dossier schema and are now `complete`.

P4-HDG-002 is resolved by D-032. Ordinary growth/maturation remains a same-species individual change; evolution is a discontinuous species transformation with family-specific conditions. Modern level/trade metadata remains source context rather than diegetic XP or an automatically literal ancient-world mechanism.

Shared ordinary-variation guidance remains unchanged: normally at most one axis `±1` when fiction materially requires it, while named/exceptional individuals may use larger explicit deltas only for authored world reasons under D-031.

---

## 2. #014 Kakuna / 딱충이

```yaml
identity:
  national_dex: 14
  species_key: kakuna
  official_name_en: Kakuna
  official_name_ko: 딱충이
  evolution_family_keys: [weedle, kakuna, beedrill]
  mandatory_gen1_roster: true
  dossier_status: complete

provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001@2cda0b56, OFFICIAL-DEX-KAKUNA-US, OFFICIAL-DEX-KAKUNA-PH]
  official_evidence:
    - {claim_id: KAK-C1-001, evidence_class: C1, source_ref: OFFICIAL-DEX-KAKUNA-PH, version_context: current_official_portal, paraphrase: cocoon_stage_clings_to_tree_and_is_nearly_immobile_while_internal_metamorphosis_generates_noticeable_heat}
    - {claim_id: KAK-C1-002, evidence_class: C1, source_ref: OFFICIAL-DEX-KAKUNA-US, version_context: current_official_pokedex, paraphrase: when_endangered_Kakuna_can_expose_a_stinger_and_poison_an_attacker}
  derived_claims:
    - {claim_id: KAK-D1-001, evidence_class: D1, based_on: [KAK-C1-001, KAK-C1-002], statement: immobility_does_not_make_close_handling_safe, canon_boundary_note: project_encounter_interpretation}
    - {claim_id: KAK-D1-002, evidence_class: D1, based_on: [KAK-C1-001], statement: shell_heat_is_an_identification_and_handling_clue_not_general_fire_power, canon_boundary_note: conservative_mechanical_boundary}

canonical_source_data:
  types: [bug, poison]
  base_stats_raw: {hp: 45, attack: 25, defense: 50, special_attack: 25, special_defense: 25, speed: 35}
  abilities_relevant_to_p4: [shed-skin]
  moves_or_move_families_relevant_to_p4: [harden, poison_sting_family_only_where_source_version_supports]
  physical_metadata: {height_m: 0.6, weight_kg: 10.0}
  evolution_source: {evolves_from: weedle, evolves_to: [beedrill], canonical_conditions: [modern_level_conditions_not_used_diegetically]}
  other_material_facts: [cocoon_metamorphosis, near_immobility, hot_shell_during_internal_change, defensive_poison_stinger]

species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 1
  guard: 2
  potency: 1
  resistance: 1
  speed: 1
  derivation_notes: {vigor: hp_45, force: attack_25, guard: defense_50, potency: special_attack_25, resistance: special_defense_25, speed: speed_35}
  calibration_flags: [immobile_but_hazardous_middle_stage]

capabilities_and_hazards:
  locomotion: [minimal_cocoon_motion, vegetation_attachment]
  physical_hazards: [defensive_stinger]
  elemental_environmental_hazards: [contact_venom_exposure, metamorphic_shell_heat]
  anomalous_hazards: []
  behavioral_capabilities: [defensive_response_when_disturbed]
  utility_interaction_capabilities: []
  immunities_or_approach_invalidators: []
  hazard_records:
    - hazard_key: kakuna-defensive-venom
      kind: venom
      delivery_or_exposure: [direct_stinger_contact_when_grabbed_or_threatened]
      prerequisite_or_trigger: [close_handling, disturbance, failed_safe_removal]
      warning_signs: [visible_stinger_response, defensive_body_tension]
      immediate_effects: [puncture, venom_exposure]
      delayed_or_persistent_effects: [species_specific_venom_course_not_quantified]
      ordinary_consequence_ceiling: serious_injury_possible_if_exposure_is_mishandled
      exceptional_consequence_ceiling: lethal_only_with_explicit_D020_escalation_and_evidence
      countermeasures: [avoid_bare_handling, use_distance_or_barrier, disengage_when_defensive]
      emergency_consumable_hooks: [venom_response_hook_pending_P6_material_basis]
      context_amplifiers: [cramped_handling, multiple_cocoons, nearby_Beedrill]
      context_mitigators: [distance, protective_barrier, leave_attached_if_no_need_to_move]
      governing_species_axes: [speed]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [KAK-C1-002, KAK-D1-001]
    - hazard_key: kakuna-shell-heat
      kind: other
      delivery_or_exposure: [prolonged_direct_touch_during_active_metamorphosis]
      prerequisite_or_trigger: [close_handling]
      warning_signs: [noticeably_hot_shell]
      immediate_effects: [pain_or_minor_burn_risk_if_authored_context_supports]
      delayed_or_persistent_effects: []
      ordinary_consequence_ceiling: minor_contextual_harm
      exceptional_consequence_ceiling: none_species_wide
      countermeasures: [avoid_unnecessary_handling]
      emergency_consumable_hooks: []
      context_amplifiers: [forced_prolonged_contact]
      context_mitigators: [brief_observation, tools_or_cloth_barrier]
      governing_species_axes: []
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [KAK-C1-001, KAK-D1-002]
  notes: [venom_and_heat_are_separate_hazards, immobility_does_not_remove_consequence]

ancient_strength: {classifications: [similar_to_modern_baseline], evidence_class: D1, rationale: no_reviewed_source_supports_species_wide_ancient_stat_increase, stat_effect_if_any: none, behavior_effect_if_any: colony_context_only, canon_boundary_note: danger_is_driven_by_handling_venom_and_family_context_not_hidden_scaling}

ancient_ecology:
  habitat: [vegetation_supporting_Weedle_family_metamorphosis]
  ecological_niche: [temporary_metamorphic_cocoon_stage]
  activity_pattern: [mostly_stationary_during_stage]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [active_feeding_not_assumed_during_cocoon_stage]
  social_structure: [family_or_colony_proximity_possible_but_not_universal]
  predator_prey_competitor_links: [intentionally_unresolved]
  environmental_effects: [localized_presence_on_vegetation]
  observable_signs: [attached_cocoons, hot_shell_on_close_inspection, nearby_Weedle_or_Beedrill_sign]
  locality_constraints: [requires_local_family_presence_and_suitable_vegetation]
  unsupported_gaps: [exact_stage_duration, seasonality, universal_colony_structure]

human_perception_and_culture: {ordinary_attitude: [easy_to_underestimate, handled_cautiously_where_venom_is_known], specialist_knowledge_holders: [foragers, forest_wayfinders, hunters], benefits_and_services: [], fears_and_avoidance: [venom_exposure, provoking_nearby_Beedrill], myths_omens_taboos: [none_required], practical_customs: [leave_undisturbed_when_route_clear, inspect_before_grabbing_branches], common_misbeliefs: [immobile_means_harmless, cocoon_is_inert_object], local_variation_notes: [beliefs_about_Beedrill_nests_remain_local]}

identification_and_knowledge: {baseline_recognition: locality_dependent, unknown_presentation_hooks: [yellow_cocoon_fixed_to_vegetation, unexpectedly_warm_shell], local_aliases_or_titles: none, identification_evidence: [body_shape, attachment_behavior, proximity_to_Weedle_or_Beedrill, defensive_stinger], initial_knowledge_fragments: [do_not_grab_barehanded], post_identification_knowledge: [stationary_stage_is_preparing_for_Beedrill_transformation], advanced_insights: [shell_heat_can_signal_active_internal_change, family_presence_changes_route_risk], exceptional_individual_knowledge_hooks: [unusual_size_or_stage_duration_only_if_authored]}

threat_and_encounter:
  baseline_threat_band: low_hazard_contextual
  default_behavior_states: [unaware, wary, warning]
  aggression_tendency: defensive_not_pursuit_oriented
  territoriality: none_species_wide
  avoidance_tendency: unable_to_reliably_flee
  warning_signs: [stinger_response, nearby_Beedrill_activity]
  encounter_triggers: [branch_handling, accidental_contact, nest_disturbance]
  escalation_triggers: [grabbing, crushing, repeated_disturbance]
  deescalation_conditions: [withdraw_contact, leave_cocoon_attached]
  pursuit_profile: none
  group_size_effects: [multiple_cocoons_increase_exposure_opportunities, nearby_family_members_create_separate_encounter_pressure]
  ordinary_consequence_categories: [venom_exposure, minor_heat_harm, family_alarm_context]
  consequence_ceiling: serious_if_venom_exposure_is_mishandled_otherwise_low
  human_check_hooks:
    - {action: safely_pass_or_observe_Kakuna, relevant_species_axis: none, relevant_tags: [minimal_cocoon_motion], relevant_hazard_keys: [], difficulty_guidance: often_no_roll_when_not_touching, notes: do_not_force_fake_difficulty}
    - {action: remove_or_handle_Kakuna, relevant_species_axis: speed, relevant_tags: [defensive_stinger], relevant_hazard_keys: [kakuna-defensive-venom, kakuna-shell-heat], difficulty_guidance: 7_to_11_by_tools_and_position, notes: exposure_check_and_consequence_are_separate}

individual_variation: {ordinary_variation: {allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material, temperament_variants: [more_or_less_reactive], condition_variants: [early_stage, late_stage, damaged_shell], local_lineage_variants: [possible_but_not_assumed]}, exceptional_individuals: {allowed: true, rarity_guidance: rare_and_not_needed_for_baseline, candidate_causes: [unusual_size, harsh_local_lineage, prolonged_survival], rating_shift_guidance: modest_unless_named_and_authored, required_distinctive_traits: [visible_or_behavioral_difference], warning_or_rumor_hooks: [unusual_heat_or_size]}, named_apex_examples: []}

companionship:
  classification: eligible
  prerequisites: [continuity_from_voluntary_Weedle_bond_or_noncoercive_rescue]
  trust_building_paths: [safe_nonhandling_presence, protect_without_restraining]
  reasons_to_stay: [existing_family_bond, safe_metamorphosis_site]
  rejection_or_departure_reasons: [coercive_handling, unsafe_environment, post_evolution_choice_to_leave]
  human_social_costs: [fear_of_future_Beedrill, venom_handling_risk]
  logistics: {food: [stage_specific_need_unknown], water: [avoid_harmful_desiccation_if_ecology_requires], shelter_temperature: [protected_vegetation_or_equivalent_anchor], space_travel: [cannot_be_treated_as_loose_inventory], settlement_restrictions: [safe_anchor_and_future_Beedrill_space_required], special_resources: []}
  assistance_capabilities: []
  handling_boundaries: [do_not_force_detachment_for_convenience, cocoon_stage_is_not_an_item]
  separation_injury_notes: [evolution_may_change_space_and_social_burden_abruptly]

mechanical_hooks: {tracking_clues: [attached_cocoons, branch_activity, shell_heat], avoidance_preparation: [visual_inspection, gloves_or_tools_where_physically_valid], resistance_or_protection: [barriers_against_stinger_contact], combat_approach_permissions: [material_cocoon_can_be_physically_affected_but_harm_is_not_default_goal], blocked_or_invalid_approaches: [none_species_wide], fear_hooks: [nearby_Beedrill_colony_reputation], injury_hazard_hooks: [venom_puncture], environmental_state_hooks: [nest_or_family_disturbance], companion_assistance_hooks: [], fortune_spike_opportunities: [notice_shell_heat_or_family_sign_before_touching], trouble_spike_complications: [accidental_stinger_contact, alert_nearby_Beedrill]}

hunting_materials_and_resources: {killing_treatment: unnecessary_killing_discouraged_by_D021_when_safe_avoidance_exists, hunting_for_food: none, shed_or_abandoned_materials: [empty_shed_casing_possible_only_if_source_or_event_supports], natural_remains: possible_but_no_generic_loot, dangerous_harvesting: [venom_related_harvest_not_authorized_without_specific_source_and_P6_review], taboo_or_protection: none_required, exact_notable_material_ids: [], generic_material_conversion_allowed: false, conversion_conditions: []}
technology_and_craft: {hook: none, enabling_evidence: [], human_craft_bridge: [], narrow_domain: none, local_dependency: [], scalability_limits: [], ownership_shortcut_forbidden: true, evidence_class: not_applicable}
emergency_consumable_hooks: {hooks: [{item_concept: {hazard_tags: [venom], timing: reaction, effect_boundary: may_reduce_or_stabilize_exposure_consequence_without_rerolling_or_erasing_the_roll, exclusions: [no_universal_antidote, no_dice_change], source_or_material_basis: [generic_prepared_first_aid_only_until_P6], evidence_class: D1}}]}

narrative_and_event_hooks: {peaceful: [find_a_metamorphosing_cocoon_and_choose_to_leave_it_undisturbed], dangerous: [must_clear_a_branch_without_being_stung_or_alerting_nearby_Beedrill], unusual_or_rare: [protect_a_known_Weedle_companion_through_immobile_metamorphosis], discovery_insight: [learn_that_shell_heat_indicates_active_internal_change], route_environment: [vegetation_corridor_becomes_risky_because_family_signs_cluster], settlement_culture: [locals_mark_or_avoid_known_metamorphosis_trees], cross_species: [weedle_to_kakuna_to_beedrill_family_transition]}
presentation_and_p6_followups: {initial_bestiary_presentation: apparently_inert_cocoon_with_hidden_defensive_venom, progressive_reveal_notes: [show_heat_and_stinger_as_discoverable_clues, keep_family_alarm_separate_from_stat_bonus], species_specific_visual_needs: [readable_attached_cocoon_state, defensive_stinger_state_if_supported], species_specific_audio_needs: [], special_ui_or_readability_needs: [distinguish_touch_hazard_from_general_combat_threat], p6_followup_required: true}
cross_species_links: {evolution_family: [weedle, beedrill], predator_prey: [], competition: [], symbiosis: [], mimicry_confusion: [], shared_habitat: [weedle, beedrill], cultural_or_material_dependencies: [beedrill_colony_risk]}
open_questions_and_gates: {unresolved_sources: [exact_metamorphosis_duration, exact_venom_course], contradictions: [], human_design_gates: [], deferred_to_p5: [family_alarm_event_state_and_exact_TNs], deferred_to_p6: [visual_state_and_any_venom_response_material_basis], deferred_to_p7: []}
```

Evolution adaptation: Weedle -> Kakuna -> Beedrill is a biologically legible metamorphic line. Under D-032 the cocoon transition remains a real discontinuous species event with survival/timing/habitat consequences, not ordinary aging or a level-up stat increment.

---

## 3. #020 Raticate / 레트라

```yaml
identity: {national_dex: 20, species_key: raticate, official_name_en: Raticate, official_name_ko: 레트라, evolution_family_keys: [rattata, raticate], mandatory_gen1_roster: true, dossier_status: complete}
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001@2cda0b56, OFFICIAL-DEX-RATICATE-SG]
  official_evidence: [{claim_id: RIC-C1-001, evidence_class: C1, source_ref: OFFICIAL-DEX-RATICATE-SG, version_context: current_official_portal, paraphrase: webbed_hind_feet_support_swimming_and_whiskers_are_sensitive_enough_that_touch_can_trigger_biting}]
  derived_claims:
    - {claim_id: RIC-D1-001, evidence_class: D1, based_on: [RIC-C1-001], statement: swimming_expands_escape_and_access_routes_without_making_Raticate_universally_aquatic, canon_boundary_note: encounter_interpretation}
    - {claim_id: RIC-D1-002, evidence_class: D1, based_on: [RIC-C1-001], statement: evolved_baseline_has_stronger_physical_pressure_than_Rattata_but_can_still_become_routine_for_experienced_humans, canon_boundary_note: D031_non_scaling_family_consistency}
canonical_source_data:
  types: [normal]
  base_stats_raw: {hp: 55, attack: 81, defense: 60, special_attack: 50, special_defense: 70, speed: 97}
  abilities_relevant_to_p4: [run-away, guts]
  moves_or_move_families_relevant_to_p4: [bite_and_fang_family, gnawing_physical_actions]
  physical_metadata: {height_m: 0.7, weight_kg: 18.5}
  evolution_source: {evolves_from: rattata, evolves_to: [], canonical_conditions: [modern_level_condition_not_used_diegetically]}
  other_material_facts: [webbed_hind_feet, sensitive_balance_whiskers]
species_stat_profile: {rating_scale_version: p4-six-axis-v1, vigor: 2, force: 4, guard: 3, potency: 2, resistance: 3, speed: 4, derivation_notes: {vigor: hp_55, force: attack_81, guard: defense_60, potency: special_attack_50, resistance: special_defense_70, speed: speed_97}, calibration_flags: [ordinary_evolved_common_species]}
capabilities_and_hazards:
  locomotion: [fast_ground_mobility, competent_swimming]
  physical_hazards: [strong_bite, gnawing_resource_damage]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [escape_route_use, opportunistic_foraging]
  utility_interaction_capabilities: [water_crossing]
  immunities_or_approach_invalidators: []
  hazard_records:
    - {hazard_key: raticate-bite, kind: other, delivery_or_exposure: [direct_bite_after_close_conflict_or_sensitive_whisker_contact], prerequisite_or_trigger: [cornering, grabbing, whisker_touch, resource_conflict], warning_signs: [defensive_posture, teeth_display, retreat_route_blocking], immediate_effects: [puncture_or_crush_injury], delayed_or_persistent_effects: [infection_only_if_event_context_supports_not_species_magic], ordinary_consequence_ceiling: serious_injury_possible, exceptional_consequence_ceiling: lethal_under_explicit_D020_escalation_or_exceptional_individual, countermeasures: [distance, clear_escape, physical_barrier], emergency_consumable_hooks: [ordinary_wound_stabilization], context_amplifiers: [cramped_storage, blocked_escape, multiple_individuals], context_mitigators: [open_retreat_route, protected_supplies], governing_species_axes: [force, speed], severity_is_not_capped_by_axis_rating: true, provenance_or_derivation_refs: [RIC-C1-001, RIC-D1-002]}
  notes: []
ancient_strength: {classifications: [similar_to_modern_baseline], evidence_class: D1, rationale: no_source_supports_species_wide_ancient_stat_increase, stat_effect_if_any: none, behavior_effect_if_any: locality_and_individual_only, canon_boundary_note: ordinary_Raticate_does_not_scale_with_player}
ancient_ecology: {habitat: [settlement_edges, brush_and_cover, river_or_wetland_edges_where_food_and_escape_exist], ecological_niche: [medium_opportunistic_rodent_forager], activity_pattern: [locality_dependent], seasonal_notes: [unknown], feeding_and_resource_interaction: [accessible_food, chewable_storage_and_barriers], social_structure: [unknown], predator_prey_competitor_links: [intentionally_unresolved], environmental_effects: [greater_storage_and_structure_damage_than_Rattata_when_access_is_sustained], observable_signs: [larger_tracks, stronger_gnaw_damage, water_entry_or_exit_tracks_where_visible], locality_constraints: [not_universal_spawn], unsupported_gaps: [exact_group_structure, seasonal_cycle]}
human_perception_and_culture: {ordinary_attitude: [serious_nuisance_or_dangerous_pest_where_common], specialist_knowledge_holders: [storekeepers, hunters, river_wayfinders], benefits_and_services: [], fears_and_avoidance: [bite_injury, supply_loss, unexpected_water_escape], myths_omens_taboos: [none_required], practical_customs: [protect_food, leave_escape_when_driving_out, inspect_water_side_routes], common_misbeliefs: [assuming_water_is_a_reliable_barrier, assuming_evolved_stage_must_remain_late_game_threat], local_variation_notes: []}
identification_and_knowledge: {baseline_recognition: common, unknown_presentation_hooks: [large_fast_rodent, broad_gnaw_marks, webbed_rear_feet_on_close_view], local_aliases_or_titles: none, identification_evidence: [body_size, incisors, whiskers, swimming_behavior], initial_knowledge_fragments: [avoid_whiskers_and_cornering], post_identification_knowledge: [can_use_water_as_escape_or_approach_route], advanced_insights: [experienced_human_can_make_single_ordinary_encounter_routine, apex_Rattata_is_separate_individual_problem], exceptional_individual_knowledge_hooks: [distinctive_gnaw_pattern, scars, repeated_water_route]}
threat_and_encounter:
  baseline_threat_band: moderate_contextual
  default_behavior_states: [unaware, observing, avoidant, wary, warning, engaged, retreating]
  aggression_tendency: low_to_moderate_when_cornered_or_resource_conflict
  territoriality: locality_dependent
  avoidance_tendency: moderate_to_high_when_escape_exists
  warning_signs: [teeth_display, defensive_posture, route_positioning]
  encounter_triggers: [food_access, den_disturbance, blocked_water_or_ground_escape]
  escalation_triggers: [cornering, grabbing, whisker_contact, attack]
  deescalation_conditions: [clear_retreat, loss_of_food_access, human_disengagement]
  pursuit_profile: short_to_moderate_if_resource_or_den_pressure_persists
  group_size_effects: [multiple_Raticate_raise_position_and_bite_exposure_without_stat_bonuses]
  ordinary_consequence_categories: [bite_injury, provision_loss, damaged_lashings_or_wood, route_complication]
  consequence_ceiling: serious_injury_possible_but_not_default_lethality
  human_check_hooks:
    - {action: drive_off_single_Raticate, relevant_species_axis: speed, relevant_tags: [escape_route_use], relevant_hazard_keys: [raticate-bite], difficulty_guidance: no_roll_to_11_by_experience_and_space, notes: late_game_triviality_is_valid}
    - {action: block_water_escape, relevant_species_axis: speed, relevant_tags: [competent_swimming], relevant_hazard_keys: [], difficulty_guidance: 9_to_13_by_current_and_position, notes: water_is_not_automatic_barrier}
individual_variation: {ordinary_variation: {allowed_rating_deltas: normally_one_axis_plus_or_minus_1, temperament_variants: [bold, skittish, resource_defensive], condition_variants: [hungry, injured, mature, old], local_lineage_variants: [possible_but_not_assumed]}, exceptional_individuals: {allowed: true, rarity_guidance: rare_authored_entity, candidate_causes: [long_survival, territorial_dominance, harsh_water_route_adaptation, learned_human_counterplay], rating_shift_guidance: explicit_multi_axis_when_named, required_distinctive_traits: [behavioral_or_route_difference], warning_or_rumor_hooks: [recurring_gnaw_signature, known_swim_crossing]}, named_apex_examples: []}
companionship: {classification: eligible, prerequisites: [voluntary_habituation_or_existing_Rattata_bond_continuity], trust_building_paths: [predictable_food_boundary, noncoercive_routine, safe_escape], reasons_to_stay: [stable_food_shelter_and_trust], rejection_or_departure_reasons: [coercion, starvation, whisker_abuse, blocked_escape], human_social_costs: [food_storage_reputation, bite_risk, settlement_property_damage], logistics: {food: [regular_food_need], water: [ordinary_access], shelter_temperature: [dry_shelter], space_travel: [larger_than_Rattata_but_not_inventory], settlement_restrictions: [food_storage_access_control], special_resources: []}, assistance_capabilities: [water_crossing_scouting, gnawing_only_when_safe_and_willing], handling_boundaries: [whiskers_are_not_handles, no_capture_equals_bond], separation_injury_notes: [may_leave_if_trust_or_food_boundary_fails]}
mechanical_hooks: {tracking_clues: [large_gnaw_marks, tracks, water_entry_sign], avoidance_preparation: [protected_storage, route_awareness], resistance_or_protection: [physical_barriers], combat_approach_permissions: [ordinary_weapons_valid_against_material_body], blocked_or_invalid_approaches: [assuming_shallow_water_stops_escape], fear_hooks: [usually_none_unless_local_outbreak_or_exceptional_individual], injury_hazard_hooks: [bite], environmental_state_hooks: [water_route_open_or_closed, storage_access], companion_assistance_hooks: [water_scouting, narrow_gnaw_task], fortune_spike_opportunities: [spot_secondary_water_escape], trouble_spike_complications: [forced_water_chase, damaged_supplies]}
hunting_materials_and_resources: {killing_treatment: locality_and_need_sensitive_under_D021, hunting_for_food: intentionally_unresolved, shed_or_abandoned_materials: none, natural_remains: possible_but_no_generic_loot, dangerous_harvesting: none, taboo_or_protection: none_required, exact_notable_material_ids: [], generic_material_conversion_allowed: false, conversion_conditions: []}
technology_and_craft: {hook: none, enabling_evidence: [], human_craft_bridge: [], narrow_domain: none, local_dependency: [], scalability_limits: [], ownership_shortcut_forbidden: true, evidence_class: not_applicable}
emergency_consumable_hooks: {hooks: [{item_concept: {hazard_tags: [bite], timing: recovery, effect_boundary: stabilize_or_reduce_wound_consequence_only, exclusions: [no_reroll, no_universal_heal], source_or_material_basis: [ordinary_first_aid], evidence_class: D1}}]}
narrative_and_event_hooks: {peaceful: [observe_Raticate_crossing_water_to_avoid_people], dangerous: [storehouse_drive_out_with_two_escape_routes], unusual_or_rare: [ordinary_Raticate_is_outperformed_by_known_apex_Rattata_on_selected_axes], discovery_insight: [learn_webbed_feet_make_water_a_route_not_barrier], route_environment: [riverbank_cache_raids], settlement_culture: [storage_design_accounts_for_larger_gnawing_wildlife], cross_species: [rattata_family_comparison]}
presentation_and_p6_followups: {initial_bestiary_presentation: larger_faster_common_rodent_with_water_route_capability, progressive_reveal_notes: [family_progression_without_level_scaling], species_specific_visual_needs: [], species_specific_audio_needs: [], special_ui_or_readability_needs: [], p6_followup_required: false}
cross_species_links: {evolution_family: [rattata], predator_prey: [], competition: [], symbiosis: [], mimicry_confusion: [], shared_habitat: [rattata], cultural_or_material_dependencies: []}
open_questions_and_gates: {unresolved_sources: [exact_ancient_local_abundance, exact_natural_Rattata_to_Raticate_trigger], contradictions: [], human_design_gates: [], deferred_to_p5: [exact_TNs_and_group_event_weights, rare_evolution_event_conditions_if_used], deferred_to_p6: [], deferred_to_p7: []}
```

Evolution adaptation: same-species age, experience and exceptional development remain Rattata/Raticate individual growth. Rattata -> Raticate is a separate species transformation; the modern level condition is not kill-XP, a visible level meter, or automatic aging under D-032.

---

## 4. #093 Haunter / 고우스트

```yaml
identity: {national_dex: 93, species_key: haunter, official_name_en: Haunter, official_name_ko: 고우스트, evolution_family_keys: [gastly, haunter, gengar], mandatory_gen1_roster: true, dossier_status: complete}
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001@2cda0b56, OFFICIAL-DEX-HAUNTER-SG, POKEAPI-EVOLUTION-CONTRACT, D-032]
  official_evidence:
    - {claim_id: HAU-C1-001, evidence_class: C1, source_ref: OFFICIAL-DEX-HAUNTER-SG, version_context: current_official_portal, paraphrase: Haunter_stalks_in_total_darkness_and_gaseous_touch_can_cause_uncontrollable_shuddering}
    - {claim_id: HAU-C1-002, evidence_class: C1, source_ref: OFFICIAL-DEX-HAUNTER-SG, version_context: current_official_portal, paraphrase: Haunter_can_pass_through_walls_and_official_material_preserves_a_progressive_fatal_withering_consequence_from_its_lick}
  derived_claims:
    - {claim_id: HAU-D1-001, evidence_class: D1, based_on: [HAU-C1-002], statement: ordinary_physical_barriers_and_weapons_can_be_invalid_until_Haunter_materially_commits, canon_boundary_note: permission_level_interaction_rule_consistent_with_Gastly_pilot}
    - {claim_id: HAU-D2-001, evidence_class: D2, based_on: [], statement: Haunter_may_rarely_transform_naturally_into_Gengar_without_a_human_reproducible_trigger, canon_boundary_note: owner_approved_D032_interpretation_not_official_biological_fact}
canonical_source_data:
  types: [ghost, poison]
  base_stats_raw: {hp: 45, attack: 50, defense: 45, special_attack: 115, special_defense: 55, speed: 95}
  abilities_relevant_to_p4: [levitate]
  moves_or_move_families_relevant_to_p4: [lick, shadow_and_curse_families_only_as_supported]
  physical_metadata: {height_m: 1.6, weight_kg: 0.1}
  evolution_source: {evolves_from: gastly, evolves_to: [gengar], canonical_conditions: [Gastly_modern_level_condition_not_used_diegetically, Haunter_to_Gengar_modern_trade_trigger_preserved_as_source_metadata]}
  other_material_facts: [gaseous_hands, wall_traversal, darkness_stalking]
species_stat_profile: {rating_scale_version: p4-six-axis-v1, vigor: 2, force: 2, guard: 2, potency: 5, resistance: 2, speed: 4, derivation_notes: {vigor: hp_45, force: attack_50, guard: defense_45, potency: special_attack_115, resistance: special_defense_55, speed: speed_95}, calibration_flags: [ghost_permission_and_delayed_consequence_fixture]}
capabilities_and_hazards:
  locomotion: [levitation, wall_traversal]
  physical_hazards: [gaseous_touch]
  elemental_environmental_hazards: [poison_like_or_life_drain_consequence_only_where_source_hook_supports]
  anomalous_hazards: [intangibility, darkness_stalking, withering_lick]
  behavioral_capabilities: [ambush, silent_pursuit]
  utility_interaction_capabilities: [pass_through_ordinary_walls]
  immunities_or_approach_invalidators: [ordinary_physical_barrier_may_not_block, ordinary_weapon_may_not_connect_without_material_commitment]
  hazard_records:
    - {hazard_key: haunter-withering-lick, kind: ghost, delivery_or_exposure: [direct_tongue_contact], prerequisite_or_trigger: [Haunter_closes_to_contact_or_victim_fails_to_avoid_ambush], warning_signs: [cold_or_gaseous_presence, unexplained_touch, sighting_in_darkness], immediate_effects: [shock_or_shudder, acute_weakening_possible], delayed_or_persistent_effects: [progressive_weakening_over_days_in_official_material], ordinary_consequence_ceiling: potentially_lethal_delayed_hazard, exceptional_consequence_ceiling: potentially_lethal, countermeasures: [avoid_contact, escape_lit_or_open_area_when_possible, specialist_response_after_exposure], emergency_consumable_hooks: [post_exposure_stabilization_or_ward_hook_requires_later_material_basis], context_amplifiers: [total_darkness, enclosed_ruins, isolation], context_mitigators: [early_detection, open_route, specialist_Ghost_knowledge], governing_species_axes: [speed, potency], severity_is_not_capped_by_axis_rating: true, provenance_or_derivation_refs: [HAU-C1-002]}
    - {hazard_key: haunter-gaseous-touch, kind: ghost, delivery_or_exposure: [hand_contact_or_pass_through_contact], prerequisite_or_trigger: [ambush_or_close_approach], warning_signs: [movement_in_darkness, sudden_presence], immediate_effects: [uncontrollable_shuddering], delayed_or_persistent_effects: [], ordinary_consequence_ceiling: serious_contextual_impairment, exceptional_consequence_ceiling: none_without_additional_hazard, countermeasures: [avoid_contact, maintain_detection_and_escape], emergency_consumable_hooks: [], context_amplifiers: [cliff_edges, water, combat_with_other_threats], context_mitigators: [safe_ground, companions_or_lighting_that_improve_detection], governing_species_axes: [speed], severity_is_not_capped_by_axis_rating: true, provenance_or_derivation_refs: [HAU-C1-001]}
  notes: [do_not_reduce_wall_traversal_to_high_Guard]
ancient_strength: {classifications: [similar_to_modern_baseline], evidence_class: D1, rationale: no_reviewed_historical_strength_change, stat_effect_if_any: none, behavior_effect_if_any: locality_only, canon_boundary_note: danger_is_anomalous_capability_plus_context}
ancient_ecology: {habitat: [dark_ruins, caves_or_enclosed_dark_places_where_authored], ecological_niche: [anomalous_ambush_predator_or_stalker], activity_pattern: [darkness_associated], seasonal_notes: [unknown], feeding_and_resource_interaction: [life_or_energy_predation_claims_should_not_be_overgeneralized_beyond_reviewed_evidence], social_structure: [unknown], predator_prey_competitor_links: [intentionally_unresolved], environmental_effects: [fear_and_route_abandonment, wall_boundary_failure], observable_signs: [reports_of_unseen_touch, recurring_darkness_sightings, unexplained_shuddering], locality_constraints: [not_every_dark_place_has_Haunter], unsupported_gaps: [reproduction, exact_feeding_cycle, group_structure]}
human_perception_and_culture: {ordinary_attitude: [feared_and_avoided_where_known], specialist_knowledge_holders: [rare_Ghost_specialists, psychics, shrine_or_local_ritual_keepers_only_where_setting_already_allows], benefits_and_services: [], fears_and_avoidance: [wall_traversal, lethal_lick, unseen_ambush], myths_omens_taboos: [local_stories_about_dark_rooms_and_unseen_touch], practical_customs: [do_not_enter_known_dark_sites_alone, preserve_exit_and_light], common_misbeliefs: [thick_wall_guarantees_safety, high_physical_armor_solves_contact, trade_is_known_ancient_evolution_law], local_variation_notes: [ritual_practices_must_not_be_universalized_without_D2_label]}
identification_and_knowledge: {baseline_recognition: specialist, unknown_presentation_hooks: [floating_hands_or_face_in_darkness, unseen_shoulder_touch, silhouette_crossing_wall], local_aliases_or_titles: none, identification_evidence: [wall_traversal, gaseous_hands, Levitate_like_motion], initial_knowledge_fragments: [avoid_contact_and_total_darkness], post_identification_knowledge: [lick_can_create_delayed_lethal_hazard, ordinary_barriers_may_fail], advanced_insights: [material_commitment_windows_may_create_valid_escape_or_counterplay_opportunities, no_known_reproducible_Gengar_trigger], exceptional_individual_knowledge_hooks: [recurring_site, distinctive_manifestation_only_if_authored]}
threat_and_encounter:
  baseline_threat_band: high_anomalous
  default_behavior_states: [unaware, observing, wary, warning, engaged, pursuing, retreating]
  aggression_tendency: evidence_supports_predatory_cases_but_not_universal_attack_on_sight
  territoriality: unknown_or_locality_dependent
  avoidance_tendency: variable
  warning_signs: [darkness_stalking, unseen_touch, reports_of_wall_crossing]
  encounter_triggers: [entering_known_dark_site, isolation, investigation_of_Ghost_sign]
  escalation_triggers: [failed_detection, close_contact, pursuit_into_confined_space]
  deescalation_conditions: [escape_to_open_or_prepared_safe_route, Haunter_disengages]
  pursuit_profile: can_bypass_ordinary_walls_route_escape_must_use_permissions_not_only_distance
  group_size_effects: [multiple_Ghosts_compound_detection_and_escape_pressure_without_flat_stat_bonuses]
  ordinary_consequence_categories: [fear, shuddering_impairment, delayed_withering, serious_or_lethal_harm]
  consequence_ceiling: lethal_hazard_is_source_supported_but_requires_actual_exposure_and_D020_resolution
  human_check_hooks:
    - {action: evade_Haunter_in_dark_ruin, relevant_species_axis: speed, relevant_tags: [wall_traversal, ambush], relevant_hazard_keys: [haunter-gaseous-touch, haunter-withering-lick], difficulty_guidance: 11_to_15_by_detection_and_exit_preparation, notes: walls_do_not_automatically_break_pursuit}
    - {action: strike_or_restrain_Haunter, relevant_species_axis: guard, relevant_tags: [intangibility], relevant_hazard_keys: [], difficulty_guidance: invalid_until_approach_permission_exists_or_material_commitment_occurs, notes: do_not_convert_invalidity_into_TN_inflation}
individual_variation: {ordinary_variation: {allowed_rating_deltas: normally_one_axis_plus_or_minus_1, temperament_variants: [watchful, malicious, avoidant, territorial], condition_variants: [agitated, dormant_site_bound, recently_disturbed], local_lineage_variants: [possible_but_not_assumed]}, exceptional_individuals: {allowed: true, rarity_guidance: rare_and_story_weighted, candidate_causes: [long_site_attachment, repeated_successful_predation, unusual_Ghost_manifestation], rating_shift_guidance: explicit_and_secondary_to_capability_difference, required_distinctive_traits: [recognizable_manifestation_or_behavior], warning_or_rumor_hooks: [stable_haunting_pattern]}, named_apex_examples: []}
companionship: {classification: exceptional_only, prerequisites: [voluntary_long_term_nonpredatory_relationship, specialist_understanding, demonstrated_boundaries], trust_building_paths: [repeated_safe_contact, respect_for_space, noncoercive_mutual_aid], reasons_to_stay: [individual_attachment_or_shared_site_goal], rejection_or_departure_reasons: [coercion, attempted_confinement, broken_boundaries], human_social_costs: [extreme_fear, settlement_exclusion, responsibility_for_anomalous_risk], logistics: {food: [unknown_and_not_to_be_invented], water: [unknown_or_not_applicable], shelter_temperature: [dark_or_secluded_space_may_be_preferred_but_not_species_law], space_travel: [physical_space_low_but_social_risk_high], settlement_restrictions: [many_settlements_may_refuse_entry], special_resources: [specialist_knowledge_more_important_than_inventory_resource]}, assistance_capabilities: [wall_scouting_or_Ghost_sensing_only_if_individual_voluntarily_cooperates], handling_boundaries: [never_inventory, no_forced_containment, lethal_capabilities_remain_real], separation_injury_notes: [bond_break_can_create_danger_or_departure_but_not_automatic_hostility]}
mechanical_hooks: {tracking_clues: [haunting_reports, unseen_touch, wall_crossing_sightings], avoidance_preparation: [light, route_plan, specialist_warning], resistance_or_protection: [approach_specific_Ghost_countermeasures_only_when_authored], combat_approach_permissions: [requires_material_commitment_or_valid_Ghost_interaction_method], blocked_or_invalid_approaches: [ordinary_wall_as_absolute_barrier, blind_weapon_swings_against_intangible_state], fear_hooks: [unseen_touch, wall_crossing, delayed_death_rumor], injury_hazard_hooks: [withering_lick], environmental_state_hooks: [light_level, exit_route, wall_boundary_validity], companion_assistance_hooks: [anomalous_scouting], fortune_spike_opportunities: [spot_manifestation_pattern_before_contact], trouble_spike_complications: [safe_room_wall_is_not_safe, delayed_exposure_not_immediately_recognized]}
hunting_materials_and_resources: {killing_treatment: not_ordinary_hunting_target_lethal_force_only_under_D021_context, hunting_for_food: none, shed_or_abandoned_materials: none, natural_remains: unknown, dangerous_harvesting: none_without_specific_source, taboo_or_protection: [local_Ghost_taboo_possible], exact_notable_material_ids: [], generic_material_conversion_allowed: false, conversion_conditions: []}
technology_and_craft: {hook: none, enabling_evidence: [], human_craft_bridge: [], narrow_domain: none, local_dependency: [], scalability_limits: [], ownership_shortcut_forbidden: true, evidence_class: not_applicable}
emergency_consumable_hooks: {hooks: [{item_concept: {hazard_tags: [ghost, delayed_weakening], timing: recovery, effect_boundary: stabilize_or_buy_time_after_exposure_only_if_a_later_source_backed_or_project_owned_ward_material_is_defined, exclusions: [no_universal_exorcism, no_reroll, no_forced_damage], source_or_material_basis: [intentionally_unresolved_until_P6_or_species_specific_research], evidence_class: U}}]}
narrative_and_event_hooks: {peaceful: [observe_a_Haunter_that_only_watches_from_beyond_a_wall], dangerous: [escape_total_darkness_after_unseen_touch_before_lick_exposure], unusual_or_rare: [companion_or_wild_Haunter_undergoes_rare_Gengar_transformation_without_revealing_a_universal_recipe], discovery_insight: [learn_that_wall_thickness_is_not_the_relevant_defense], route_environment: [abandoned_ruin_requires_light_and_exit_plan], settlement_culture: [locals_abandon_or_mark_rooms_with_recurring_Haunter_sign], cross_species: [Gastly_materiality_comparison, Gengar_shadow_hazard_escalation]}
presentation_and_p6_followups: {initial_bestiary_presentation: dangerous_Ghost_that_invalidates_ordinary_barriers, progressive_reveal_notes: [separate_touch_shudder_from_lethal_lick, reveal_wall_traversal_through_events, keep_evolution_trigger_unknown], species_specific_visual_needs: [readable_material_vs_intangible_state_if_visualized], species_specific_audio_needs: [subtle_positional_Ghost_cue_optional], special_ui_or_readability_needs: [invalid_approach_must_be_distinguishable_from_failed_roll], p6_followup_required: true}
cross_species_links: {evolution_family: [gastly, gengar], predator_prey: [], competition: [], symbiosis: [], mimicry_confusion: [], shared_habitat: [gastly], cultural_or_material_dependencies: []}
open_questions_and_gates: {unresolved_sources: [exact_biology_of_Ghost_feeding, exact_biological_or_anomalous_trigger_for_rare_Haunter_to_Gengar_transformation], contradictions: [], human_design_gates: [], deferred_to_p5: [material_commitment_event_permissions, delayed_hazard_clock, rare_nonreproducible_evolution_event], deferred_to_p6: [Ghost_readability_and_any_ward_resource], deferred_to_p7: []}
```

Evolution adaptation: P4-HDG-002 is resolved by D-032. Haunter -> Gengar is a rare natural species transformation whose reproducible cause is unknown to ordinary humans. The modern trade trigger remains source metadata; it does not create an ancient trade ritual or generic companion evolution action.

---

## 5. #094 Gengar / 팬텀

```yaml
identity: {national_dex: 94, species_key: gengar, official_name_en: Gengar, official_name_ko: 팬텀, evolution_family_keys: [gastly, haunter, gengar], mandatory_gen1_roster: true, dossier_status: complete}
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001@2cda0b56, OFFICIAL-DEX-GENGAR-SG, POKEAPI-EVOLUTION-CONTRACT, D-032]
  official_evidence:
    - {claim_id: GEN-C1-001, evidence_class: C1, source_ref: OFFICIAL-DEX-GENGAR-SG, version_context: current_official_portal, paraphrase: Gengar_can_enter_or_occupy_a_targets_shadow_waiting_for_a_chance_to_take_life}
    - {claim_id: GEN-C1-002, evidence_class: C1, source_ref: OFFICIAL-DEX-GENGAR-SG, version_context: current_official_portal, paraphrase: Gengar_hiding_in_human_shadows_can_absorb_body_heat_and_official_material_mentions_a_protective_charm_response_to_anomalous_shadow_behavior}
  derived_claims:
    - {claim_id: GEN-D1-001, evidence_class: D1, based_on: [GEN-C1-001, GEN-C1-002], statement: shadow_occupation_and_heat_loss_are_distinct_anomalous_hazards_and_not_merely_high_Guard_or_Potency, canon_boundary_note: permission_and_consequence_interpretation}
    - {claim_id: GEN-D2-001, evidence_class: D2, based_on: [], statement: ancient_Haunter_to_Gengar_is_a_rare_natural_transformation_with_no_human_reproducible_trigger, canon_boundary_note: owner_approved_D032_interpretation_not_official_biological_fact}
canonical_source_data:
  types: [ghost, poison]
  base_stats_raw: {hp: 60, attack: 65, defense: 60, special_attack: 130, special_defense: 75, speed: 110}
  abilities_relevant_to_p4: [cursed-body, levitate_as_historical_version_context]
  moves_or_move_families_relevant_to_p4: [shadow, curse, hypnosis_or_dream_families_only_where_specific_content_sources_them]
  physical_metadata: {height_m: 1.5, weight_kg: 40.5}
  evolution_source: {evolves_from: haunter, evolves_to: [], canonical_conditions: [modern_trade_trigger_preserved_as_source_metadata]}
  other_material_facts: [shadow_intrusion, heat_theft, predatory_life_stealing_statements]
species_stat_profile: {rating_scale_version: p4-six-axis-v1, vigor: 3, force: 3, guard: 3, potency: 6, resistance: 3, speed: 5, derivation_notes: {vigor: hp_60, force: attack_65, guard: defense_60, potency: special_attack_130, resistance: special_defense_75, speed: speed_110}, calibration_flags: [source_extreme_anomalous_potency]}
capabilities_and_hazards:
  locomotion: [shadow_entry_or_attachment, anomalous_positioning]
  physical_hazards: []
  elemental_environmental_hazards: [body_heat_loss]
  anomalous_hazards: [shadow_occupation, life_stealing_predation, Ghost_materiality_shift]
  behavioral_capabilities: [ambush, patient_stalking]
  utility_interaction_capabilities: [shadow_based_infiltration]
  immunities_or_approach_invalidators: [ordinary_guard_direction_can_fail_when_attack_origin_is_own_shadow, ordinary_barrier_may_not_address_shadow_entry]
  hazard_records:
    - {hazard_key: gengar-shadow-occupation, kind: ghost, delivery_or_exposure: [Gengar_enters_or_attaches_to_target_shadow], prerequisite_or_trigger: [successful_anomalous_approach, vulnerable_shadow_or_low_awareness_context_as_authored], warning_signs: [shadow_moves_or_laughs_independently, unnatural_cold], immediate_effects: [loss_of_safe_position_assumption, Fear_trigger, exposure_to_followup_hazards], delayed_or_persistent_effects: [continued_stalking_or_heat_loss_while_attachment_persists], ordinary_consequence_ceiling: severe_and_potentially_lethal_if_life_stealing_escalates, exceptional_consequence_ceiling: lethal, countermeasures: [break_contact_via_authored_Ghost_counterplay, protective_charm_hook_where_valid, specialist_intervention], emergency_consumable_hooks: [protective_charm_reaction], context_amplifiers: [night, isolation, panic, confined_shelter], context_mitigators: [early_shadow_warning, specialist_presence, prepared_ward], governing_species_axes: [potency, speed], severity_is_not_capped_by_axis_rating: true, provenance_or_derivation_refs: [GEN-C1-001, GEN-C1-002, GEN-D1-001]}
    - {hazard_key: gengar-heat-theft, kind: other, delivery_or_exposure: [remaining_hidden_in_or_near_victims_shadow], prerequisite_or_trigger: [sustained_shadow_contact], warning_signs: [sudden_unexplained_chill, shivering], immediate_effects: [cold_stress, shivering, concentration_loss], delayed_or_persistent_effects: [worsening_exposure_if_contact_continues], ordinary_consequence_ceiling: serious_environmental_or_physiological_harm, exceptional_consequence_ceiling: lethal_if_combined_with_explicit_life_stealing_escalation, countermeasures: [break_anomalous_contact, warmth_only_as_support_not_cure, specialist_Ghost_response], emergency_consumable_hooks: [warming_recovery_can_reduce_cold_consequence_but_not_remove_Gengar], context_amplifiers: [winter, wet_clothing, injury, isolation], context_mitigators: [warm_shelter_after_escape, early_detection], governing_species_axes: [potency], severity_is_not_capped_by_axis_rating: true, provenance_or_derivation_refs: [GEN-C1-002]}
  notes: [high_Potency_does_not_force_attack_on_sight]
ancient_strength: {classifications: [similar_to_modern_baseline], evidence_class: D1, rationale: no_historical_strength_shift_reviewed, stat_effect_if_any: none, behavior_effect_if_any: locality_and_individual_only, canon_boundary_note: mysterious_does_not_mean_automatically_stronger_in_ancient_era}
ancient_ecology: {habitat: [shadowed_ruins, settlement_night_edges, caves_or_other_sites_only_where_authored], ecological_niche: [rare_anomalous_predator_or_stalker], activity_pattern: [night_or_shadow_associated], seasonal_notes: [unknown], feeding_and_resource_interaction: [life_stealing_and_heat_absorption_are_hazard_evidence_not_complete_dietology], social_structure: [unknown], predator_prey_competitor_links: [intentionally_unresolved], environmental_effects: [localized_cold, abandonment_of_haunted_space, fear], observable_signs: [moving_or_laughing_shadow, unexplained_temperature_drop, recurring_night_reports], locality_constraints: [rare_not_universal], unsupported_gaps: [reproduction, stable_population_structure, exact_feeding_need]}
human_perception_and_culture: {ordinary_attitude: [strong_fear_or_taboo_where_known], specialist_knowledge_holders: [Ghost_specialists, rare_psychics, local_ward_keepers_where_already_authored], benefits_and_services: [], fears_and_avoidance: [shadow_occupation, life_loss, cold], myths_omens_taboos: [laughing_shadow_is_bad_omen_hook], practical_customs: [carry_or_seek_local_protective_charm_only_where_culture_has_that_practice, avoid_sleeping_alone_in_known_site], common_misbeliefs: [ordinary_locked_door_guarantees_safety, any_charm_is_universally_effective, humans_can_reproduce_Gengar_evolution_by_exchange], local_variation_notes: [ward_forms_and_religious_meaning_are_local_D2_if_authored]}
identification_and_knowledge: {baseline_recognition: rare, unknown_presentation_hooks: [wrong_moving_shadow, sudden_cold, laughter_without_source], local_aliases_or_titles: none, identification_evidence: [shadow_behavior, body_shape_when_manifest, family_similarity_to_Haunter], initial_knowledge_fragments: [watch_own_shadow_and_leave_if_anomalous], post_identification_knowledge: [heat_loss_and_shadow_entry_are_separate_hazards], advanced_insights: [proper_counterplay_depends_on_attachment_state_not_raw_armor, no_known_reproducible_Haunter_trigger], exceptional_individual_knowledge_hooks: [site_specific_shadow_pattern, stable_victim_selection]}
threat_and_encounter:
  baseline_threat_band: severe_anomalous_predator
  default_behavior_states: [unaware, observing, wary, warning, engaged, pursuing, retreating]
  aggression_tendency: potentially_predatory_but_not_universal_attack_on_sight
  territoriality: unknown_or_site_bound
  avoidance_tendency: variable
  warning_signs: [shadow_anomaly, unexplained_cold, local_reports]
  encounter_triggers: [night_travel, known_haunted_site, investigation_of_cold_or_shadow_sign]
  escalation_triggers: [successful_shadow_attachment, victim_isolation, failed_countermeasure]
  deescalation_conditions: [attachment_broken, Gengar_withdraws, specialist_or_valid_ward_intervention]
  pursuit_profile: conventional_distance_and_walls_may_not_be_sufficient
  group_size_effects: [multiple_Ghosts_compound_state_pressure_no_flat_bonus]
  ordinary_consequence_categories: [Fear, cold_stress, life_loss, serious_or_lethal_anomalous_harm]
  consequence_ceiling: lethal_when_source_backed_predatory_escalation_occurs
  human_check_hooks:
    - {action: notice_shadow_attachment_before_escalation, relevant_species_axis: speed, relevant_tags: [shadow_occupation], relevant_hazard_keys: [gengar-shadow-occupation], difficulty_guidance: 11_to_15_by_light_attention_and_prior_knowledge, notes: knowledge_can_make_warning_action_possible}
    - {action: physically_attack_hidden_Gengar, relevant_species_axis: none, relevant_tags: [Ghost_materiality_shift], relevant_hazard_keys: [], difficulty_guidance: invalid_without_manifestation_or_valid_Ghost_interaction_method, notes: no_TN_inflation_for_invalid_approach}
individual_variation: {ordinary_variation: {allowed_rating_deltas: normally_one_axis_plus_or_minus_1, temperament_variants: [watchful, playful_malicious, predatory, avoidant], condition_variants: [site_bound, agitated, recently_manifested], local_lineage_variants: [possible_but_not_assumed]}, exceptional_individuals: {allowed: true, rarity_guidance: very_rare_named_entities, candidate_causes: [long_haunting_history, learned_human_counterplay, unusual_shadow_manifestation], rating_shift_guidance: explicit_but_secondary_to_capability_history, required_distinctive_traits: [recognizable_shadow_or_site_pattern], warning_or_rumor_hooks: [specific_temperature_drop_or_laugh_pattern]}, named_apex_examples: []}
companionship: {classification: exceptional_only, prerequisites: [voluntary_bond, demonstrated_nonpredatory_boundaries, specialist_management, settlement_acceptance_or_safe_separation], trust_building_paths: [repeated_mutual_aid, respect_for_autonomy, no_coercive_confinement], reasons_to_stay: [individual_attachment, shared_goal, chosen_site_or_person], rejection_or_departure_reasons: [coercion, betrayal, unsafe_social_pressure], human_social_costs: [fear, possible_banishment, responsibility_for_shadow_hazards], logistics: {food: [unknown], water: [unknown_or_not_applicable], shelter_temperature: [secluded_space_possible_but_not_species_requirement], space_travel: [low_physical_load_high_social_risk], settlement_restrictions: [often_severe], special_resources: [knowledge_or_warding_may_be_required_locally]}, assistance_capabilities: [shadow_scouting_or_Ghost_interaction_if_voluntary], handling_boundaries: [never_inventory_or_obedient_summon, predatory_capability_remains_real], separation_injury_notes: [broken_bond_can_cause_departure_hostility_requires_authored_reason]}
mechanical_hooks: {tracking_clues: [shadow_anomaly, cold_spot, local_reports], avoidance_preparation: [watch_shadow, travel_with_support, local_ward_knowledge], resistance_or_protection: [protective_charm_only_as_narrow_source_backed_hook], combat_approach_permissions: [manifestation_or_valid_Ghost_interaction], blocked_or_invalid_approaches: [ordinary_armor_against_shadow_entry, locked_door_as_absolute_safety], fear_hooks: [shadow_laugh, sudden_cold, life_stealing_reputation], injury_hazard_hooks: [cold_stress, anomalous_life_loss], environmental_state_hooks: [light, temperature, shadow_attachment], companion_assistance_hooks: [Ghost_scouting], fortune_spike_opportunities: [recognize_shadow_warning_before_attachment_completes], trouble_spike_complications: [ward_is_wrong_for_local_practice, victim_cold_masks_attachment]}
hunting_materials_and_resources: {killing_treatment: not_ordinary_hunting_target, hunting_for_food: none, shed_or_abandoned_materials: none, natural_remains: unknown, dangerous_harvesting: none_without_source, taboo_or_protection: [strong_local_taboo_possible], exact_notable_material_ids: [], generic_material_conversion_allowed: false, conversion_conditions: []}
technology_and_craft: {hook: none, enabling_evidence: [], human_craft_bridge: [], narrow_domain: none, local_dependency: [], scalability_limits: [], ownership_shortcut_forbidden: true, evidence_class: not_applicable}
emergency_consumable_hooks:
  hooks:
    - {item_concept: {hazard_tags: [ghost, shadow_occupation], timing: reaction, effect_boundary: protective_charm_may_create_or_preserve_an_escape_or_resistance_window_against_shadow_attachment_as_later_authored, exclusions: [no_guaranteed_exorcism, no_universal_anti_Ghost, no_reroll], source_or_material_basis: [OFFICIAL-DEX-GENGAR-SG], evidence_class: C1}}
    - {item_concept: {hazard_tags: [cold], timing: recovery, effect_boundary: warmth_can_reduce_secondary_cold_consequence_after_escape_but_does_not_break_attachment_by_itself, exclusions: [no_Gengar_removal, no_dice_change], source_or_material_basis: [ordinary_survival_supplies], evidence_class: D1}}
narrative_and_event_hooks: {peaceful: [rare_Gengar_observes_from_a_shadow_without_attacking], dangerous: [shadow_starts_laughing_during_night_shelter], unusual_or_rare: [witness_a_Haunter_become_Gengar_without_discovering_a_repeatable_recipe], discovery_insight: [learn_temperature_drop_is_an_early_hazard_signal], route_environment: [safe_room_becomes_unsafe_due_to_shadow_permission], settlement_culture: [local_ward_customs_and_taboo_are_tested_by_a_real_Gengar], cross_species: [Haunter_to_Gengar_rare_natural_transformation]}
presentation_and_p6_followups: {initial_bestiary_presentation: rare_shadow_predator_with_source_backed_warning_signs, progressive_reveal_notes: [shadow_attachment_state_and_heat_loss_must_be_readable, ward_effect_is_narrow, evolution_cause_stays_unknown], species_specific_visual_needs: [shadow_desync_or_attachment_cue], species_specific_audio_needs: [subtle_laugh_or_cold_ambience_optional], special_ui_or_readability_needs: [show_attachment_warning_without_revealing_hidden_species_identity_too_early], p6_followup_required: true}
cross_species_links: {evolution_family: [gastly, haunter], predator_prey: [], competition: [], symbiosis: [], mimicry_confusion: [], shared_habitat: [gastly, haunter], cultural_or_material_dependencies: [local_protective_charm_practice]}
open_questions_and_gates: {unresolved_sources: [exact_biological_or_anomalous_trigger_for_rare_Haunter_to_Gengar_transformation], contradictions: [], human_design_gates: [], deferred_to_p5: [shadow_attachment_state_machine, ward_event_rules, rare_nonreproducible_evolution_event], deferred_to_p6: [shadow_visual_readability, protective_charm_asset_or_material_strategy], deferred_to_p7: []}
```

Evolution adaptation: Gengar exists naturally as the canonical final Gastly-family stage. D-032 classifies Haunter -> Gengar as a rare natural transformation whose exact trigger remains unknown to ordinary humans. The uncertainty is intentional world knowledge, not an unresolved design gate.

---

## 6. #129 Magikarp / 잉어킹

```yaml
identity: {national_dex: 129, species_key: magikarp, official_name_en: Magikarp, official_name_ko: 잉어킹, evolution_family_keys: [magikarp, gyarados], mandatory_gen1_roster: true, dossier_status: complete}
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001@2cda0b56, OFFICIAL-DEX-MAGIKARP-PH, D-032]
  official_evidence:
    - {claim_id: MAG-C1-001, evidence_class: C1, source_ref: OFFICIAL-DEX-MAGIKARP-PH, version_context: current_official_portal, paraphrase: modern_Magikarp_is_extremely_weak_but_hardy_and_can_live_in_many_kinds_of_water}
    - {claim_id: MAG-C1-002, evidence_class: C1, source_ref: OFFICIAL-DEX-MAGIKARP-PH, version_context: current_official_portal, paraphrase: distant_past_Magikarp_were_somewhat_stronger_than_modern_descendants}
  derived_claims:
    - {claim_id: MAG-D1-001, evidence_class: D1, based_on: [MAG-C1-002], statement: ancient_strength_has_direct_species_specific_support_but_exact_numeric_change_is_unknown, canon_boundary_note: no_blanket_ancient_buff}
    - {claim_id: MAG-D1-002, evidence_class: D1, based_on: [MAG-C1-001], statement: hardiness_is_environmental_survival_not_combat_aggression, canon_boundary_note: threat_separation}
canonical_source_data:
  types: [water]
  base_stats_raw: {hp: 20, attack: 10, defense: 55, special_attack: 15, special_defense: 20, speed: 80}
  abilities_relevant_to_p4: [swift-swim]
  moves_or_move_families_relevant_to_p4: [splash, tackle_or_flail_only_where_version_context_supports]
  physical_metadata: {height_m: 0.9, weight_kg: 10.0}
  evolution_source: {evolves_from: none, evolves_to: [gyarados], canonical_conditions: [modern_level_condition_not_used_diegetically]}
  other_material_facts: [broad_water_tolerance, high_hardiness_relative_to_reputation, canon_historical_strength_change]
species_stat_profile: {rating_scale_version: p4-six-axis-v1, vigor: 1, force: 1, guard: 2, potency: 1, resistance: 1, speed: 4, derivation_notes: {vigor: hp_20, force: attack_10, guard: defense_55, potency: special_attack_15, resistance: special_defense_20, speed: speed_80}, calibration_flags: [canon_historical_change_without_numeric_override]}
capabilities_and_hazards: {locomotion: [aquatic_swimming, jumping_or_flopping_on_land], physical_hazards: [minor_collision_only], elemental_environmental_hazards: [], anomalous_hazards: [], behavioral_capabilities: [hardy_survival_in_varied_water], utility_interaction_capabilities: [survival_indicator_for_water_bodies_only_with_caution], immunities_or_approach_invalidators: [], hazard_records: [], notes: [historical_strength_does_not_create_unfounded_venom_elemental_or_predatory_hazards]}
ancient_strength: {classifications: [canon_historical_change], evidence_class: C1, rationale: official_material_explicitly_states_distant_past_Magikarp_were_somewhat_stronger, stat_effect_if_any: unquantified_do_not_override_p4_profile_without_future_balance_decision, behavior_effect_if_any: may_be_less_helpless_in_authored_ancient_context_but_not_automatically_aggressive, canon_boundary_note: species_specific_evidence_only_never_globalize_to_all_ancient_Pokemon}
ancient_ecology: {habitat: [rivers, lakes, ponds, shallow_or_poor_quality_water_where_local_ecology_supports], ecological_niche: [hardy_generalist_aquatic_prey_or_low_trophic_consumer], activity_pattern: [locality_dependent], seasonal_notes: [unknown], feeding_and_resource_interaction: [unknown], social_structure: [unknown], predator_prey_competitor_links: [specific_links_require_source], environmental_effects: [minimal_species_wide], observable_signs: [surface_splashing, stranded_flopping_after_water_change], locality_constraints: [broad_tolerance_does_not_mean_every_water_body], unsupported_gaps: [diet, schooling_structure, ancient_numeric_strength_delta]}
human_perception_and_culture: {ordinary_attitude: [often_underestimated_local_food_or_nuisance_treatment_only_if_authored], specialist_knowledge_holders: [fishers, river_wayfinders], benefits_and_services: [ecological_observation_value], fears_and_avoidance: [normally_low], myths_omens_taboos: [Gyarados_transformation_stories_may_create_caution], practical_customs: [do_not_assume_harmless_individual_can_be_mishandled_forever_if_transformation_is_possible], common_misbeliefs: [ancient_Magikarp_must_have_Gyarados_level_power, modern_weakness_means_fragile_environmentally, old_age_automatically_equals_Gyarados], local_variation_notes: [ancient_strength_expression_can_vary_without_universal_stat_table_change]}
identification_and_knowledge: {baseline_recognition: common, unknown_presentation_hooks: [orange_fish_splashing_in_shallow_water], local_aliases_or_titles: none, identification_evidence: [body_shape, repetitive_splashing, high_survival_in_poor_water], initial_knowledge_fragments: [low_direct_threat, hardy], post_identification_knowledge: [can_survive_water_conditions_that_defeat_expectations], advanced_insights: [historical_records_indicate_ancient_lineages_were_somewhat_stronger, evolution_is_distinct_from_ordinary_growth], exceptional_individual_knowledge_hooks: [unusual_size, forceful_current_swimming, long_lived_individual]}
threat_and_encounter: {baseline_threat_band: very_low_direct, default_behavior_states: [unaware, observing, avoidant, retreating], aggression_tendency: very_low_species_wide, territoriality: none_known, avoidance_tendency: limited_by_environment, warning_signs: [none_required], encounter_triggers: [fishing, shallow_crossing, stranded_water], escalation_triggers: [environmental_distress, transformation_event_if_authored], deescalation_conditions: [leave_in_water, stop_handling], pursuit_profile: none, group_size_effects: [large_numbers_create_navigation_or_resource_context_not_combat_bonus], ordinary_consequence_categories: [minor_collision, lost_time, fishing_resource_complication], consequence_ceiling: minor_without_external_context_or_transformation, human_check_hooks: [{action: handle_single_Magikarp_in_safe_shallow_water, relevant_species_axis: speed, relevant_tags: [aquatic_swimming], relevant_hazard_keys: [], difficulty_guidance: often_no_roll, notes: ancient_strength_does_not_force_fake_difficulty}, {action: catch_or_recover_Magikarp_in_fast_current, relevant_species_axis: speed, relevant_tags: [hardy_survival], relevant_hazard_keys: [], difficulty_guidance: environment_drives_7_to_11, notes: current_is_main_hazard_not_species_damage}]}
individual_variation: {ordinary_variation: {allowed_rating_deltas: normally_one_axis_plus_or_minus_1, temperament_variants: [calm, frantic, persistent], condition_variants: [stranded, injured, unusually_vigorous], local_lineage_variants: [ancient_strength_expression_possible]}, exceptional_individuals: {allowed: true, rarity_guidance: rare_and_authored, candidate_causes: [old_ancient_lineage, unusual_survival_history, harsh_current_adaptation], rating_shift_guidance: may_show_explicit_force_or_vigor_increase_but_not_Gyarados_like_blanket_profile, required_distinctive_traits: [visible_behavior_or_size_difference], warning_or_rumor_hooks: [fishers_report_unusually_powerful_jumps_or_current_resistance]}, named_apex_examples: []}
companionship: {classification: eligible, prerequisites: [voluntary_repeated_care, adequate_water_transport_or_habitat], trust_building_paths: [safe_feeding, rescue, consistent_water_care], reasons_to_stay: [stable_habitat_and_trust], rejection_or_departure_reasons: [poor_water, neglect, coercive_dry_transport], human_social_costs: [transport_burden, future_Gyarados_risk_and_space_change], logistics: {food: [specific_diet_unknown], water: [continuous_suitable_water_access], shelter_temperature: [water_temperature_requirements_unresolved], space_travel: [requires_water_container_or_route_not_inventory_slot], settlement_restrictions: [water_space], special_resources: [water_transport_capacity]}, assistance_capabilities: [minimal_until_individual_specific_or_post_evolution], handling_boundaries: [hardiness_does_not_justify_neglect], separation_injury_notes: [transformation_to_Gyarados_radically_changes_logistics_and_safety]}
mechanical_hooks: {tracking_clues: [splashing, water_survival_where_other_fish_fail], avoidance_preparation: [], resistance_or_protection: [], combat_approach_permissions: [ordinary_physical_handling_is_valid], blocked_or_invalid_approaches: [none_species_wide], fear_hooks: [usually_none_Gyarados_transformation_context_may_create_Fear], injury_hazard_hooks: [], environmental_state_hooks: [water_depth, current, pollution_or_turbidity], companion_assistance_hooks: [], fortune_spike_opportunities: [notice_sign_of_unusually_strong_ancient_lineage_or_transformation_readiness], trouble_spike_complications: [fish_slips_into_dangerous_current, transformation_sign_during_bad_timing]}
hunting_materials_and_resources: {killing_treatment: fishery_or_food_use_must_be_local_and_D021_consistent, hunting_for_food: intentionally_unresolved, shed_or_abandoned_materials: none, natural_remains: possible_but_no_generic_loot, dangerous_harvesting: none, taboo_or_protection: [possible_local_taboo_due_to_Gyarados_line_only_if_authored], exact_notable_material_ids: [], generic_material_conversion_allowed: false, conversion_conditions: []}
technology_and_craft: {hook: none, enabling_evidence: [], human_craft_bridge: [], narrow_domain: none, local_dependency: [], scalability_limits: [], ownership_shortcut_forbidden: true, evidence_class: not_applicable}
emergency_consumable_hooks: {hooks: none}
narrative_and_event_hooks: {peaceful: [rescue_stranded_Magikarp_from_shrinking_pool], dangerous: [cross_fast_water_while_trying_not_to_lose_a_companion_Magikarp], unusual_or_rare: [witness_or_survive_a_rare_Magikarp_to_Gyarados_transformation], discovery_insight: [learn_hardiness_combat_weakness_and_evolution_are_different_concepts], route_environment: [poor_quality_water_still_contains_Magikarp], settlement_culture: [fishers_disagree_about_old_stories_of_stronger_lineages_and_transformation_signs], cross_species: [persistent_individual_transformation_into_Gyarados]}
presentation_and_p6_followups: {initial_bestiary_presentation: weak_but_hardy_aquatic_species_with_historical_strength_twist, progressive_reveal_notes: [do_not_show_numeric_ancient_buff_without_decision, foreshadow_Gyarados_identity_continuity, do_not_expose_level_meter], species_specific_visual_needs: [], species_specific_audio_needs: [], special_ui_or_readability_needs: [ancient_strength_is_lore_classification_not_hidden_level_scaling], p6_followup_required: false}
cross_species_links: {evolution_family: [gyarados], predator_prey: [], competition: [], symbiosis: [], mimicry_confusion: [], shared_habitat: [], cultural_or_material_dependencies: []}
open_questions_and_gates: {unresolved_sources: [exact_ancient_strength_delta, exact_diet, exact_natural_transformation_trigger], contradictions: [], human_design_gates: [], deferred_to_p5: [rare_transformation_event_conditions_and_foreshadowing], deferred_to_p6: [], deferred_to_p7: []}
```

Evolution adaptation: ancient-strength change and same-species development remain distinct from Magikarp -> Gyarados evolution. The transformation is a major persistent-individual species event under D-032, never automatic battle XP or an exposed level threshold.

---

## 7. #141 Kabutops / 투구푸스

```yaml
identity: {national_dex: 141, species_key: kabutops, official_name_en: Kabutops, official_name_ko: 투구푸스, evolution_family_keys: [kabuto, kabutops], mandatory_gen1_roster: true, dossier_status: complete}
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001@2cda0b56, OFFICIAL-DEX-KABUTOPS-SG, OFFICIAL-DEX-KABUTO-PH, D-032]
  official_evidence:
    - {claim_id: KBT-C1-001, evidence_class: C1, source_ref: OFFICIAL-DEX-KABUTOPS-SG, version_context: current_official_portal, paraphrase: Kabutops_is_treated_as_extinct_and_its_body_was_adapting_toward_land_function_before_extinction}
    - {claim_id: KBT-C1-002, evidence_class: C1, source_ref: OFFICIAL-DEX-KABUTOPS-SG, version_context: current_official_portal, paraphrase: Kabutops_can_swim_at_roughly_29_knots_close_on_prey_and_slash_with_scythe_like_forelimbs}
  derived_claims:
    - {claim_id: KBT-D1-001, evidence_class: D1, based_on: [KBT-C1-001, KBT-C1-002], statement: if_a_living_Kabutops_is_present_it_is_a_high_force_aquatic_pursuit_predator_with_some_limited_land_capability, canon_boundary_note: encounter_interpretation}
    - {claim_id: KBT-D1-002, evidence_class: D1, based_on: [KBT-C1-001], statement: ancient_setting_chronology_does_not_by_itself_prove_opening_region_living_population, canon_boundary_note: preserves_Kabuto_pilot_locality_rule}
canonical_source_data:
  types: [rock, water]
  base_stats_raw: {hp: 60, attack: 115, defense: 105, special_attack: 65, special_defense: 70, speed: 80}
  abilities_relevant_to_p4: [swift-swim, battle-armor]
  moves_or_move_families_relevant_to_p4: [slash_and_scythe_physical_family, aquatic_mobility]
  physical_metadata: {height_m: 1.3, weight_kg: 40.5}
  evolution_source: {evolves_from: kabuto, evolves_to: [], canonical_conditions: [modern_level_condition_not_used_diegetically]}
  other_material_facts: [extinct_status, terrestrial_adaptation_in_progress_before_extinction, roughly_29_knot_swimming, prey_slashing]
species_stat_profile: {rating_scale_version: p4-six-axis-v1, vigor: 3, force: 5, guard: 5, potency: 3, resistance: 3, speed: 4, derivation_notes: {vigor: hp_60, force: attack_115, guard: defense_105, potency: special_attack_65, resistance: special_defense_70, speed: speed_80}, calibration_flags: [fossil_relict_predator, high_force_high_guard]}
capabilities_and_hazards:
  locomotion: [fast_aquatic_swimming, limited_or_developing_land_function]
  physical_hazards: [scythe_slash, high_speed_closing_attack]
  elemental_environmental_hazards: [drowning_or_water_displacement_context]
  anomalous_hazards: []
  behavioral_capabilities: [predatory_pursuit]
  utility_interaction_capabilities: [cutting_with_scythes_only_if_individual_cooperates]
  immunities_or_approach_invalidators: [deep_water_can_invalidate_ordinary_foot_pursuit]
  hazard_records:
    - {hazard_key: kabutops-scythe-pursuit, kind: other, delivery_or_exposure: [rapid_aquatic_close_followed_by_scythe_strike], prerequisite_or_trigger: [living_Kabutops_present, predatory_or_defensive_engagement, target_within_water_route], warning_signs: [wake_or_fast_water_approach, visible_scythes, prey_remains_or_cut_marks], immediate_effects: [deep_slashing_injury, forced_displacement], delayed_or_persistent_effects: [bleeding_or_injury_state_under_D020], ordinary_consequence_ceiling: severe_or_lethal_in_predatory_context, exceptional_consequence_ceiling: lethal, countermeasures: [leave_water_route, hard_cover_only_if_physically_sufficient, early_detection, avoid_direct_pursuit], emergency_consumable_hooks: [bleeding_stabilization_after_escape], context_amplifiers: [deep_water, poor_visibility, swimming_human, narrow_shore], context_mitigators: [high_ground, distance_before_commitment, barrier_that_blocks_water_approach], governing_species_axes: [force, speed], severity_is_not_capped_by_axis_rating: true, provenance_or_derivation_refs: [KBT-C1-002, KBT-D1-001]}
  notes: [predatory_capability_does_not_create_routine_local_spawn]
ancient_strength: {classifications: [similar_to_modern_baseline, unresolved], evidence_class: D1, rationale: no_reviewed_source_gives_stronger_ancient_stat_delta, stat_effect_if_any: none, behavior_effect_if_any: predatory_behavior_is_source_backed, canon_boundary_note: ancient_presence_and_ancient_strength_are_separate_questions}
ancient_ecology: {habitat: [historical_aquatic_or_coastal_environment, possible_relict_area_only_if_evidence_or_authored_event_supports], ecological_niche: [fast_aquatic_predator_transitioning_toward_more_land_function], activity_pattern: [unknown], seasonal_notes: [unknown], feeding_and_resource_interaction: [predation], social_structure: [unknown], predator_prey_competitor_links: [prey_species_unspecified], environmental_effects: [predator_pressure, distinctive_cut_remains], observable_signs: [scythe_cut_marks, fast_wake, fossil_or_remain_evidence, unusual_predation], locality_constraints: [routine_living_population_not_authorized_ancient_setting_alone_is_insufficient], unsupported_gaps: [exact_prey_list, group_structure, opening_region_living_presence]}
human_perception_and_culture: {ordinary_attitude: [fossil_or_legendary_knowledge_for_most_people_if_no_local_living_population], specialist_knowledge_holders: [fossil_collectors, coastal_hunters, rare_relict_witnesses], benefits_and_services: [], fears_and_avoidance: [scythe_injury, water_pursuit], myths_omens_taboos: [relict_predator_stories_possible], practical_customs: [treat_recent_scythe_like_cut_evidence_as_route_warning], common_misbeliefs: [ancient_world_means_Kabutops_is_common_everywhere, fossil_presence_proves_living_population], local_variation_notes: [living_relict_belief_must_be_tied_to_specific_locality]}
identification_and_knowledge: {baseline_recognition: specialist, unknown_presentation_hooks: [large_shelled_bipedal_aquatic_shape_with_scythe_forelimbs, unexplained_clean_cut_prey], local_aliases_or_titles: none, identification_evidence: [scythe_shape, shell_body, Kabuto_family_similarity, swimming_speed], initial_knowledge_fragments: [avoid_water_route_if_recent_signs_exist], post_identification_knowledge: [strong_physical_guard_and_fast_aquatic_close], advanced_insights: [fossil_evidence_living_presence_and_evolution_trigger_are_distinct_claims], exceptional_individual_knowledge_hooks: [stable_relict_site, repeated_cut_pattern]}
threat_and_encounter:
  baseline_threat_band: severe_if_living_and_engaged
  default_behavior_states: [unaware, observing, wary, engaged, pursuing, retreating]
  aggression_tendency: predatory_cases_source_supported_not_every_sighting_attack_on_sight
  territoriality: unknown
  avoidance_tendency: unknown
  warning_signs: [fast_wake, prey_cut_marks, fossil_or_recent_tracks_if_land]
  encounter_triggers: [entering_relict_water, investigating_recent_predation]
  escalation_triggers: [predatory_commitment, cornering, defending_relict_site]
  deescalation_conditions: [leave_water_route, break_line_or_access, Kabutops_abandons_pursuit]
  pursuit_profile: very_high_in_water_land_pursuit_capability_less_certain
  group_size_effects: [multiple_individuals_not_assumed]
  ordinary_consequence_categories: [severe_slash, bleeding, drowning_or_displacement, route_loss]
  consequence_ceiling: lethal_predatory_context
  human_check_hooks:
    - {action: escape_aquatic_Kabutops_pursuit, relevant_species_axis: speed, relevant_tags: [fast_aquatic_swimming], relevant_hazard_keys: [kabutops-scythe-pursuit], difficulty_guidance: 13_to_15_if_already_in_open_water_lower_with_early_warning_and_land_exit, notes: environment_is_decisive}
    - {action: block_scythe_strike, relevant_species_axis: force, relevant_tags: [scythe_slash], relevant_hazard_keys: [kabutops-scythe-pursuit], difficulty_guidance: high_and_equipment_dependent_invalid_if_barrier_cannot_physically_withstand, notes: no_tiny_HP_chip_loop_against_guard_5_predator}
individual_variation: {ordinary_variation: {allowed_rating_deltas: normally_one_axis_plus_or_minus_1, temperament_variants: [predatory, wary, territorial], condition_variants: [injured, old, recently_fed], local_lineage_variants: [relict_lineage_possible_only_if_authored]}, exceptional_individuals: {allowed: true, rarity_guidance: exceptionally_rare_due_to_species_presence_itself, candidate_causes: [ancient_relict_longevity, isolated_lineage, repeated_human_avoidance], rating_shift_guidance: explicit_but_not_required_for_boss_threat, required_distinctive_traits: [stable_relict_history_or_behavior], warning_or_rumor_hooks: [known_waterway_with_clean_cut_carcasses]}, named_apex_examples: []}
companionship: {classification: exceptional_only, prerequisites: [living_individual_exists, prolonged_voluntary_nonpredatory_bond, large_safe_water_access, expert_handling], trust_building_paths: [rescue_or_repeated_noncoercive_contact, predictable_space], reasons_to_stay: [individual_attachment, stable_habitat], rejection_or_departure_reasons: [confinement, food_shortage, unsafe_dry_travel, coercion], human_social_costs: [extreme_fear, settlement_access_limits, dangerous_predator_responsibility], logistics: {food: [substantial_predatory_diet_unspecified], water: [large_aquatic_access], shelter_temperature: [unknown], space_travel: [major_burden], settlement_restrictions: [severe], special_resources: [safe_water_route]}, assistance_capabilities: [water_travel_or_cutting_only_if_individual_willing_and_safe], handling_boundaries: [never_portable_inventory, scythes_and_predatory_capacity_remain_live_hazards], separation_injury_notes: [travel_outside_suitable_habitat_may_force_departure]}
mechanical_hooks: {tracking_clues: [clean_scythe_cut_marks, fast_wake, fossil_or_shell_evidence], avoidance_preparation: [avoid_open_water_after_recent_sign, choose_high_route], resistance_or_protection: [serious_physical_barriers_only], combat_approach_permissions: [ordinary_weapons_can_affect_material_body_but_guard_5_requires_meaningful_force_or_objective_based_play], blocked_or_invalid_approaches: [outswimming_in_open_water_without_advantage, trivial_chip_damage_plan], fear_hooks: [relict_predator_reveal, rapid_underwater_approach], injury_hazard_hooks: [deep_slash, bleeding, drowning], environmental_state_hooks: [water_depth, shoreline_distance, visibility], companion_assistance_hooks: [water_crossing, cutting], fortune_spike_opportunities: [spot_cut_marks_before_entering_water], trouble_spike_complications: [boat_or_raft_damage, forced_into_deeper_water]}
hunting_materials_and_resources: {killing_treatment: exceptional_and_high_stakes_under_D021_not_generic_farmable_enemy, hunting_for_food: intentionally_unresolved, shed_or_abandoned_materials: none_confirmed, natural_remains: [fossil_or_shell_remains_possible], dangerous_harvesting: [scythe_or_shell_harvest_not_authorized_as_repeatable_loot_without_source_and_P6], taboo_or_protection: [rare_relict_protection_or_fear_possible], exact_notable_material_ids: [], generic_material_conversion_allowed: false, conversion_conditions: []}
technology_and_craft: {hook: none, enabling_evidence: [], human_craft_bridge: [], narrow_domain: none, local_dependency: [], scalability_limits: [rare_or_nonexistent_living_supply], ownership_shortcut_forbidden: true, evidence_class: not_applicable}
emergency_consumable_hooks: {hooks: [{item_concept: {hazard_tags: [bleeding], timing: reaction, effect_boundary: stabilize_or_downgrade_slashing_injury_after_escape_window_if_D030_item_rules_allow, exclusions: [no_blocking_impossible_strike, no_reroll], source_or_material_basis: [ordinary_emergency_wound_supplies], evidence_class: D1}}]}
narrative_and_event_hooks: {peaceful: [discover_fossil_or_old_scythe_mark_without_confirmed_living_presence], dangerous: [living_relict_Kabutops_closes_at_high_speed_in_water], unusual_or_rare: [prove_or_disprove_local_story_of_a_surviving_relict_population], discovery_insight: [separate_old_fossil_evidence_from_recent_predation_sign], route_environment: [waterway_is_abandoned_after_clean_cut_carcasses_appear], settlement_culture: [hunters_argue_whether_relict_story_is_real_or_myth], cross_species: [Kabuto_relict_evidence_progresses_into_Kabutops_question]}
presentation_and_p6_followups: {initial_bestiary_presentation: fossil_or_relict_predator_with_uncertain_living_presence, progressive_reveal_notes: [do_not_show_routine_spawn_until_living_evidence_is_confirmed, make_29_knot_water_pressure_legible_through_wake_and_route_state], species_specific_visual_needs: [scythe_silhouette, water_wake_if_direct_encounter], species_specific_audio_needs: [fast_water_approach_optional], special_ui_or_readability_needs: [knowledge_state_must_distinguish_fossil_trace_relict_rumor_confirmed_living], p6_followup_required: true}
cross_species_links: {evolution_family: [kabuto], predator_prey: [], competition: [], symbiosis: [], mimicry_confusion: [], shared_habitat: [kabuto_if_living], cultural_or_material_dependencies: []}
open_questions_and_gates: {unresolved_sources: [opening_region_living_presence, exact_prey_list, exact_land_capability, exact_natural_Kabuto_to_Kabutops_trigger], contradictions: [], human_design_gates: [], deferred_to_p5: [knowledge_state_event_chain, direct_encounter_rarity, rare_evolution_event_if_needed], deferred_to_p6: [fossil_vs_living_visual_treatment], deferred_to_p7: []}
```

Evolution adaptation: fossil/relict survival, age and body development are distinct from Kabuto -> Kabutops evolution. The modern level condition is not diegetic XP; exact ancient transformation conditions remain source-unknown within the D-032 contract.

## 8. Batch authoring review

All six new dossiers contain every shared schema domain and are promoted to `complete`.

```text
new_dossier_count == 6
source_review_complete_count == 6
full_schema_authored_count == 6
full_schema_complete_count == 6
non_gated_sections_placeholder_free == true
rating_scale_version == p4-six-axis-v1
blocking_human_design_gate_count == 0
P4_HDG_002 == RESOLVED_A
shared_evolution_rule == D-032
```

Family re-review result:

- Weedle -> Kakuna -> Beedrill: PASS
- Rattata -> Raticate: PASS
- Gastly -> Haunter -> Gengar: PASS under D-032
- Magikarp -> Gyarados: PASS
- Kabuto -> Kabutops: PASS

The six Batch 01 pilot anchors `weedle`, `beedrill`, `rattata`, `gastly`, `gyarados`, and `kabuto` may now be promoted from `pilot_reviewed` to `complete`. `lapras` and `mew` remain `pilot_reviewed` until a later relevant consistency review or P4 closeout.

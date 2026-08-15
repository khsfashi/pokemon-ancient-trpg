# P4 Batch 16 — Full-Schema Dossiers

Status: **REVIEW COMPLETE — ready for Batch 16 completion audit**  
Date: **2026-08-16**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_16_SOURCE_REVIEW.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## 1. Dossier set

| Dex | Species | Full-schema dossier |
|---:|---|---|
| #035 | Clefairy / 삐삐 | `docs/P4_BATCH_16_DOSSIER_035_CLEFAIRY.md` |
| #036 | Clefable / 픽시 | `docs/P4_BATCH_16_DOSSIER_036_CLEFABLE.md` |
| #037 | Vulpix / 식스테일 | `docs/P4_BATCH_16_DOSSIER_037_VULPIX.md` |
| #038 | Ninetales / 나인테일 | `docs/P4_BATCH_16_DOSSIER_038_NINETALES.md` |
| #122 | Mr. Mime / 마임맨 | `docs/P4_BATCH_16_DOSSIER_122_MR_MIME.md` |
| #124 | Jynx / 루주라 | `docs/P4_BATCH_16_DOSSIER_124_JYNX.md` |

Each dossier contains all 20 frozen-schema top-level sections and `dossier_status: complete`.

## 2. Deterministic rating profiles

```text
Clefairy  3/2/2/3/3/1
Clefable  4/3/3/4/4/3
Vulpix    1/2/2/2/3/3
Ninetales 3/3/3/4/5/5
Mr. Mime  2/2/3/5/6/4
Jynx      3/2/1/5/4/4
```

```text
rating_scale_version == p4-six-axis-v1
manual_rating_exception_count == 0
```

## 3. Epistemic-provenance regression

```text
observation_equals_interpretation == false
observation_equals_legend_or_hearsay == false
version_scoped_extraordinary_equals_universal_species_law == false
analogy_equals_identity == false
project_extrapolation_equals_franchise_canon == false
```

Material extraordinary claims keep their epistemic form in provenance and their canon boundary in D1/D2 derivation notes.

## 4. Clefairy / Clefable moon and sensory regression

```text
Clefairy_full_moon_gathering_and_floating == source_backed
Clefairy_magnetic_anomaly == source_backed_discrete_phenomenon
Clefairy_full_moon_equals_guaranteed_spawn_or_stat_buff == false
Clefairy_magnetic_anomaly_equals_continuous_simulation_or_equipment_failure == false
Clefable_extreme_hearing == source_backed
Clefable_hearing_equals_omniscience_or_automatic_stealth_failure == false
Clefable_moon_kin == legend_or_hearsay
Clefable_moon_kin_equals_confirmed_extraterrestrial_origin == false
```

## 5. Vulpix maturation / evolution regression

```text
Vulpix_one_tail_to_six == ordinary_within_stage_maturation
Vulpix_tail_growth_equals_evolution == false
Vulpix_tail_growth_equals_level_or_kill_XP == false
historical_extra_tail_wording_is_version_scoped_and_unresolved == true
Vulpix_feigned_injury_equals_guaranteed_deception_or_escape == false
Vulpix_fire_hazard_severity_capped_by_vigor_1 == false
```

## 6. Ninetales folklore / extraordinary capability regression

```text
Ninetales_nine_tails == source_backed_anatomy
Ninetales_nine_tails_equal_nine_entities_or_turns == false
Ninetales_mystical_tail_power == mixed_or_folklore_source_status
Ninetales_thousand_year_claim_equals_exact_age_or_immortality == false
Ninetales_tail_touch_curse == version_scoped_extraordinary_evidence
Ninetales_mind_control == version_scoped_extraordinary_evidence
curse_equals_generic_spell_or_unavoidable_permanent_debuff == false
mind_control_equals_passive_aura_or_player_input_removal == false
```

Extraordinary hazards require an authored event state, clear trigger/warning, eligibility, counterplay and bounded consequence.

## 7. Mr. Mime barrier regression

```text
Mr_Mime_real_invisible_barrier == cross_source_stable_minimum
barrier_mechanism_consensus == false
barrier_equals_permanent_map_geometry == false
barrier_equals_indestructible_wall == false
barrier_equals_arbitrary_object_creation_or_reality_editing == false
barrier_invisibility_equals_untelegraphed_unavoidable_collision == false
pantomime_or_clown_analogy_equals_human_profession == false
```

Gameplay-relevant barriers remain discrete temporary states with fair discoverability such as gesture, dust/rain, probing, contact or other authored cues.

## 8. Jynx communication / agency regression

```text
Jynx_distinctive_rhythm == source_backed
Jynx_human_sounding_cries == analogy_or_partial_communication_evidence
Jynx_human_sounding_cries_equal_fluent_human_language == false
Jynx_modern_musician_interaction_equals_ancient_performance_institution == false
Jynx_dance_influence == version_scoped_extraordinary_evidence
Jynx_dance_influence_equals_forced_player_input_or_universal_charm_status == false
```

Partial species-specific communication is usable; complete translation remains unsupported.

## 9. Evolution-stage inheritance and chronology

```text
Clefairy_gathering_auto_inherited_by_Clefable == false
Clefable_moon_kin_legend_back_propagated_to_Clefairy == false
Ninetales_curse_or_mind_control_back_propagated_to_Vulpix == false
Vulpix_feigned_injury_auto_inherited_by_Ninetales == false
Moon_Stone_or_Fire_Stone_metadata_equals_common_ancient_item_market == false
Cleffa_Mime_Jr_Smoochum_expand_mandatory_Gen1_roster == false
regional_forms_or_Mr_Rime_equal_proto_Kanto_presence == false
modern_Fairy_type_ability_or_move_terms_equal_ancient_vocabulary_or_formula == false
```

## 10. Humanoid / language regression

```text
humanoid_shape_equals_human_personhood == false
humanoid_shape_equals_human_profession == false
Mr_Mime_pantomime_equals_normalized_entertainment_culture == false
Jynx_human_sounding_vocalization_equals_literacy_or_human_language == false
modern_scientists_or_musicians_equal_ancient_institutions == false
```

## 11. Companionship classifications

```text
Clefairy  eligible
Clefable  exceptional_only
Vulpix    eligible
Ninetales exceptional_only
Mr. Mime  exceptional_only
Jynx      exceptional_only
```

All companionship remains voluntary, never follows automatically from defeat, and costs one visible slot per active Pokémon.

## 12. Resource / craft boundary

```text
tails_wings_fur_barriers_body_parts_voice_or_anomaly_equal_automatic_loot == false
generic_material_conversion_allowed == false
species_local_anomaly_equals_generic_magic_or_technology_permission == false
ownership_shortcut_forbidden == true
p6_followup_required_for_all_six == true
```

## 13. Completion state

```text
full_schema_dossier_count == 6
dossier_status_complete_count == 6
required_section_count_per_dossier == 20
placeholder_TODO_count == 0
manual_stat_exception_count == 0
blocking_human_design_gate_count == 0
```

Batch 16 is ready for completion audit and atomic manifest promotion.

# P4 Batch 18 — Source Review

Status: **SOURCE REVIEW COMPLETE — NO BLOCKING HUMAN DESIGN GATE / READY FOR FULL-SCHEMA AUTHORING**  
Date: **2026-08-16**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_18_ANCIENT_CHRONOLOGY_ELEMENTAL_PHYSIOLOGY_PLAN.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P2_CANON_DERIVATION_AND_TECH_ISLAND_CONTRACT.md`, `docs/WORLD_BIBLE.md`

## 1. Review purpose

Batch 18 reviews six species selected to stress ancient chronology, continuous-looking elemental physiology, fossil/restoration evidence, extreme numerical claims, flight-state differences, appetite, digestion and settlement-scale resource pressure before any coverage-manifest promotion:

- #125 Electabuzz
- #126 Magmar
- #138 Omanyte / #139 Omastar
- #142 Aerodactyl
- #143 Snorlax

The review confirms that the existing P2/P3/P4 contracts can preserve these claims without adding a generic electricity grid, ambient heat simulation, fossil-revival technology, time travel, ordinary living-fossil abundance, automatic restraint, unrestricted flight, continuous hunger/economy simulation, universal poison immunity, or hidden player-relative scaling.

```text
continuous_discharge_equals_per_frame_electrical_field == false
extreme_temperature_equals_real_world_heat_formula == false
fossil_restoration_equals_ancient_available_technology == false
direct_encounterability_equals_ordinary_population == false
extinction_wording_equals_all_claims_have_equal_epistemic_strength == false
multi_tentacle_predation_equals_extra_action_economy == false
flight_capability_equals_unrestricted_player_fast_travel == false
large_appetite_equals_continuous_world_food_ledger == false
digestive_resilience_equals_universal_poison_or_disease_immunity == false
```

The safe representation remains claim-level and source-scoped: retain what is directly observed, what is numerical, what is researcher interpretation, what is legend/hearsay, what is explicitly restoration-scoped, what is historical/version-scoped, and what this project itself extrapolates for the ancient setting.

## 2. Source and epistemic-provenance rule

Existing P4 provenance classes remain authoritative:

- **C1** — direct official Pokémon Pokédex/species fact;
- **C2** — cross-source official synthesis;
- **D1** — conservative interpretation directly bounded by one or more source facts;
- **D2** — project-authored ancient-setting extrapolation, never presented as franchise canon;
- **U1** — unresolved detail deliberately left unknown.

Batch 18 also records the form of a claim where that form changes its safe gameplay interpretation:

- `OBSERVED` — source presents a body feature, behavior or event as occurring;
- `MEASURED` — source gives a numeric quantity such as temperature, mass, speed or count;
- `SCIENTIST_INTERPRETATION` — source attributes an explanation or research program to scientists/researchers;
- `LEGEND_OR_HEARSAY` — source explicitly marks a claim as legend, saying, rumor or equivalent attribution;
- `RESTORATION_SCOPED` — behavior is explicitly observed in a revived/restored specimen and must not automatically define every wild individual;
- `VERSION_SCOPED_EXTRAORDINARY` — historical wording is unusually absolute or stronger than the current bounded minimum;
- `CROSS_SOURCE_SYNTHESIS` — multiple official statements support a bounded common minimum while differing in strength or explanation;
- `PROJECT_EXTRAPOLATION` — content required by this project but not asserted as franchise canon.

Pinned structured revision remains:

```text
SRC-DATA-001 = PokeAPI/api-data @ 2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

`SRC-DATA-001` supplies deterministic raw stats, types, abilities, evolution-family metadata and version-tagged Pokédex evidence. It remains an evidence carrier under the existing provenance contract, not an independent franchise-canon authority. Current official Pokémon Pokédex pages remain the primary current-text cross-check.

Official Pokédex source registry, rechecked 2026-08-16:

| Ref | Species | Official source |
|---|---|---|
| `OFFICIAL-DEX-ELECTABUZZ-SG` | Electabuzz | `https://sg.portal-pokemon.com/play/pokedex/0125` |
| `OFFICIAL-DEX-MAGMAR-SG` | Magmar | `https://sg.portal-pokemon.com/play/pokedex/0126` |
| `OFFICIAL-DEX-OMANYTE-SG` | Omanyte | `https://sg.portal-pokemon.com/play/pokedex/0138` |
| `OFFICIAL-DEX-OMASTAR-SG` | Omastar | `https://sg.portal-pokemon.com/play/pokedex/0139` |
| `OFFICIAL-DEX-AERODACTYL-SG` | Aerodactyl | `https://sg.portal-pokemon.com/play/pokedex/0142` |
| `OFFICIAL-DEX-SNORLAX-SG` | Snorlax | `https://sg.portal-pokemon.com/play/pokedex/0143` |

Historical entries are preserved when they add meaningful pressure, but absolute historical wording is not silently promoted into a universal runtime invariant.

## 3. Deterministic stat / rating audit

`p4-six-axis-v1` remains unchanged:

```text
raw <40     => 1
40..59      => 2
60..79      => 3
80..99      => 4
100..119    => 5
>=120       => 6
```

| Species | Raw HP/Atk/Def/SpA/SpD/Spe | Vigor/Force/Guard/Potency/Resistance/Speed |
|---|---|---|
| Electabuzz | 65/83/57/95/85/105 | 3/4/2/4/4/5 |
| Magmar | 65/95/57/100/85/93 | 3/4/2/5/4/4 |
| Omanyte | 35/40/100/90/55/35 | 1/2/5/4/2/1 |
| Omastar | 70/60/125/115/70/55 | 3/3/6/5/3/2 |
| Aerodactyl | 80/105/65/60/75/130 | 4/5/3/3/3/6 |
| Snorlax | 160/110/65/65/110/30 | 6/5/3/3/5/1 |

```text
rating_profile_reproducible_count == 6
manual_rating_exception_count == 0
```

This batch is a direct regression against converting stats or Pokédex numbers into physics:

- Electabuzz `Speed 5` does not define lightning reaction speed or electrical propagation.
- Magmar `Potency 5` does not define ambient temperature, ignition radius, armor failure or thermodynamics.
- Omanyte `Guard 5` and Omastar `Guard 6` do not make their shells universally unbreakable or automatically negate critical injury.
- Aerodactyl `Speed 6` supports a very fast species baseline but does not grant automatic initiative, unlimited pursuit, safe carrying or fast travel.
- Snorlax `Vigor 6` and `Resistance 5` do not make sleep invulnerable, poison impossible, or resource demand a health formula.

Six-axis ratings remain compact species baselines. Hazard severity, environmental capability, locomotion state, body geometry, appetite burden and extraordinary source claims remain separate content channels.

## 4. Evolution, family, form and modern-mechanic boundary

Pinned/current metadata records later family relationships and forms that must not silently expand the Generation-I baseline:

```text
Elekid   -> Electabuzz -> Electivire   [Elekid/Electivire post-Generation-I context]
Magby    -> Magmar     -> Magmortar    [Magby/Magmortar post-Generation-I context]
Omanyte  -> Omastar                  [mandatory Gen-I family]
Aerodactyl -> no ordinary evolution
Mega Aerodactyl                       [later temporary form/mechanic context]
Munchlax -> Snorlax                  [Munchlax post-Generation-I pre-evolution]
Gigantamax Snorlax                    [later temporary form/mechanic context]
```

Omastar's current official page also carries a distant-ancestry statement involving Octillery. That is later-species provenance context; it does not add Octillery to the mandatory roster or require a present-era ecological relationship.

Pinned modern ability metadata remains source context rather than literal ancient combat formulas:

- Electabuzz: `Static`; hidden `Vital Spirit`;
- Magmar: `Flame Body`; hidden `Vital Spirit`;
- Omanyte / Omastar: `Swift Swim`, `Shell Armor`; hidden `Weak Armor`;
- Aerodactyl: `Rock Head`, `Pressure`; hidden `Unnerve`;
- Snorlax: `Immunity`, `Thick Fat`; hidden `Gluttony`.

```text
Static_equals_permanent_paralysis_aura == false
Vital_Spirit_equals_universal_sleep_immunity_in_world_fiction == false
Flame_Body_equals_permanent_ignition_aura == false
Swift_Swim_equals_exact_rain_speed_multiplier_in_diegesis == false
Shell_Armor_equals_unbreakable_shell == false
Weak_Armor_equals_fixed_armor_break_state_machine == false
Rock_Head_equals_recoil_immunity_to_all_collisions == false
Pressure_equals_PP_or_stamina_tax_in_world_fiction == false
Unnerve_equals_player_agency_removal == false
Immunity_equals_universal_toxin_disease_hazard_immunity == false
Thick_Fat_equals_exact_fire_ice_damage_halving_in_diegesis == false
Gluttony_equals_continuous_hunger_meter == false
```

## 5. #125 Electabuzz evidence packet

### C1/C2 facts retained

Current official material supports three distinct channels:

- `OBSERVED / PHYSIOLOGY`: electrical charge/discharge is present across the body surface and proximity can produce visible/static effects;
- `OBSERVED / ECOLOGY`: Electabuzz feeds on electrical energy and may climb tall trees beneath thunderclouds to wait for lightning;
- `SCIENTIST_INTERPRETATION / MODERN TECHNOLOGY CONTEXT`: research is described into storing lightning in Electabuzz for later use.

Pinned historical evidence adds stronger infrastructure and social wording:

- Red/Blue place Electabuzz near power plants and associate wandering individuals with major city blackouts;
- Yellow makes a very strong causal blackout/power-plant claim;
- Gold describes electricity crossing the body surface and visible glow in darkness;
- Silver describes continuous discharge and a proximity static effect;
- Crystal says touching Electabuzz can use controlled currents as communication between individuals;
- Ruby/Sapphire/Emerald describe storm-linked competition for high places and later towns using Electabuzz as lightning rods;
- FireRed explicitly frames strong electricity as food and places encounters around large power facilities;
- Diamond/Pearl use unusually broad blackout statistics;
- Black 2/White 2 explicitly describe research into storing lightning for later use.

### D1 boundaries

```text
electabuzz_body_surface_electricity == source_backed
electabuzz_proximity_static_warning == source_backed
electabuzz_electrical_energy_feeding == source_backed
electabuzz_storm_high_place_or_tree_climbing_behavior == source_backed
electabuzz_individual_current_based_contact_communication == version_scoped_source_backed
power_plant_blackout_association == modern_infrastructure_version_scoped
lightning_rod_town_use == later_social_technology_context
stored_lightning_research == scientist_interpretation_and_modern_context
constant_discharge_equals_continuous_damage_field == false
proximity_static_equals_automatic_paralysis == false
lightning_feeding_equals_guaranteed_lightning_attraction == false
lightning_feeding_equals_immunity_to_every_electrical_source == false
storm_behavior_equals_weather_prediction_or_global_storm_sense == false
tree_climbing_equals_generic_Electric_type_traversal == false
blackout_wording_equals_ancient_power_grid == false
research_wording_equals_ancient_battery_generator_or_market == false
```

The stable gameplay minimum is **a strongly electrical organism with readable static signs and rare storm-feeding opportunities**. Later runtime should use cached/event-driven charge or storm-opportunity state rather than a continuously simulated electrical field.

### U1 unresolved

```text
electabuzz_exact_charge_storage_capacity == unresolved
electabuzz_exact_discharge_radius_and_voltage == unresolved_and_not_formulaized
electabuzz_lightning_strike_survival_limit == unresolved
electabuzz_storm_tree_selection_mechanism == unresolved
electabuzz_current_communication_vocabulary_or_range == unresolved
```

## 6. #126 Magmar evidence packet

### C1/C2 facts retained

Current official material deliberately mixes observation, measurement and legend:

- `OBSERVED / HABITAT`: Magmar is found near volcano mouths;
- `MEASURED`: current text gives an extreme body-temperature figure of nearly 2,200 °F;
- `OBSERVED / PHYSIOLOGY`: wavering sunlike flames appear across the body surface;
- `LEGEND_OR_HEARSAY`: current text labels volcanic-crater birth as legend rather than settled mechanism;
- `OBSERVED / RECOVERY`: a wounded Magmar may bathe in lava to heal.

Pinned historical evidence adds stronger wording that must remain version-scoped:

- Red/Blue say the body is always burning and can visually disappear among flames;
- Yellow states volcanic birth directly, while the current official text weakens this to legend;
- Gold says Magmar may use scorching flames to make a cold environment more suitable;
- Silver emphasizes the sunlike wavering effect of its fiery surface;
- Crystal supplies the lava-wound recovery behavior;
- Ruby/Sapphire/Emerald describe battle heat waves capable of igniting nearby grass and trees;
- FireRed gives the nearly 2,200 °F numerical body-temperature claim;
- Diamond/Pearl again state volcanic-spout birth more directly;
- Platinum and Black/White describe heat-wave visual distortion around the body during deep breathing or fire output.

### D1 boundaries

```text
magmar_volcanic_habitat == source_backed
magmar_extreme_temperature_numeric_claim == source_backed_measurement
magmar_body_surface_flame_visual == source_backed
magmar_lava_bathing_wound_recovery == source_backed
magmar_battle_output_can_ignite_vegetation == version_scoped_source_backed
magmar_heat_wave_visual_distortion == version_scoped_source_backed
magmar_volcano_birth == current_legend_with_stronger_historical_direct_wording
body_temperature_equals_literal_heat_radius_or_damage_per_second == false
body_flames_equal_automatic_nearby_ignition == false
vegetation_ignition_equals_every_attack_causes_wildfire == false
lava_recovery_equals_total_lava_immunity == false
lava_recovery_equals_instant_or_unlimited_regeneration == false
volcanic_birth_equals_confirmed_spontaneous_generation == false
volcanic_birth_equals_generic_elemental_creation_cosmology == false
```

The stable gameplay minimum is **a severe heat/fire organism whose environmental consequences occur through authored exposure and event triggers**. No ambient per-frame thermodynamic propagation is required.

### U1 unresolved

```text
magmar_exact_internal_vs_surface_temperature_distribution == unresolved
magmar_exact_safe_proximity_distance == unresolved_and_not_formulaized
magmar_lava_recovery_rate_and_limit == unresolved
magmar_ignition_threshold_by_material == unresolved_and_not_real_world_simulated
magmar_crater_birth_literal_truth == unresolved_and_legend_bounded
```

## 7. #138 Omanyte evidence packet

### C1/C2 facts retained

Current official material supports deep-time provenance while placing living restoration in a modern context:

- `OBSERVED / DEEP_TIME`: Omanyte lived in ancient seas;
- `OBSERVED / FOSSIL EVIDENCE`: some fossils bear bite marks attributed to Archeops predation;
- `RESTORATION_SCOPED`: current material describes restoration from a Helix Fossil excavated from terrain that was once ocean.

Pinned historical evidence is unusually explicit about extinction/restoration:

- Red/Blue call Omanyte long extinct and describe rare genetic resurrection from fossils;
- Yellow calls it an ancient Pokémon recovered from a fossil and describes ten-tentacle swimming;
- Gold describes a restored specimen controlling buoyancy with air stored in its shell;
- Silver uses weaker wording that it is said to have navigated with its ten tentacles;
- Crystal places it on prehistoric sea floors eating plankton and notes fossil finds;
- Ruby/Sapphire/Emerald call the species long extinct and regenerated from fossils by people; they also support defensive shell withdrawal;
- FireRed places it in the primordial sea;
- Diamond/Pearl/Platinum and later reuse explicitly associate resurrection with modern science.

### D1 boundaries

```text
omanyte_ancient_sea_provenance == source_backed
omanyte_long_extinct_in_modern_source_context == strong_historical_source_backed
omanyte_fossil_restoration == source_backed_modern_context
omanyte_ten_tentacle_swimming == source_backed
omanyte_shell_air_buoyancy_control == version_scoped_source_backed
omanyte_shell_withdrawal_defense == version_scoped_source_backed
omanyte_archeops_bite_mark_predation_evidence == source_backed_deep_time_evidence
fossil_evidence_equals_living_proto_kanto_population == false
restoration_equals_ancient_technology == false
helix_fossil_equals_player_crafting_or_resurrection_recipe == false
archeops_predation_evidence_equals_living_archeops_presence_now == false
ten_tentacles_equal_extra_turns_or_independent_entities == false
shell_withdrawal_equals_invulnerability == false
```

### U1 unresolved

```text
omanyte_original_extinction_timing_relative_to_project_calendar == only_bounded_as_prehistoric_and_far_earlier
omanyte_exact_buoyancy_mechanism == unresolved
omanyte_shell_failure_limits == unresolved
omanyte_archeops_bite_mark_frequency == unresolved
ordinary_wild_population_in_proto_kanto == rejected_as_default
```

## 8. #139 Omastar evidence packet

### C1/C2 facts retained

Current official material separates a theory about extinction from directly described predation:

- `SCIENTIST_INTERPRETATION / THEORY`: its heavy shell is thought to be related to the species dying out;
- `OBSERVED / PREDATION`: it wraps prey with tentacles and uses sharp fangs after immobilizing/capturing them;
- `ANCESTRY CONTEXT`: current material describes an apparent distant relationship to Octillery, which remains later-species provenance context.

Pinned historical evidence shows why claim strength must remain version-tagged:

- Red/Blue state shell-caused extinction directly;
- Yellow also gives a strong shell-size/mobility extinction explanation;
- Gold uses explicitly uncertain wording for a Shellder predation claim;
- Silver uses unusually absolute wording that wrapped prey is never released;
- Crystal weakens the extinction explanation to a possible cause;
- Ruby/Sapphire/Emerald explicitly say the heavy shell explanation is believed rather than certain;
- FireRed emphasizes highly developed tentacles used to capture prey;
- LeafGreen again uses a stronger direct extinction statement;
- Diamond/Pearl/Platinum and later reuse preserve the theory-like "thought" framing.

### D1 boundaries

```text
omastar_tentacle_capture_and_fang_predation == source_backed
omastar_heavy_shell_movement_burden == source_backed_cross_source_minimum
omastar_shell_caused_extinction == theory_or_version_scoped_strength_not_universal_certainty
omastar_shellder_predation == version_scoped_apparent_claim
omastar_never_releases_wrapped_prey == version_scoped_extraordinary_not_agency_rule
tentacle_capture_equals_automatic_immobilization == false
multiple_tentacles_equal_extra_actions_or_health_pools == false
Guard_6_equals_unbreakable_shell == false
heavy_shell_equals_fixed_speed_or_stamina_penalty_formula == false
extinction_theory_equals_universal_evolutionary_law == false
octillery_ancestry_equals_mandatory_later_species_presence == false
```

Restraint must resolve through ordinary P3 authored encounter handling: position, warning, eligibility, counterplay, escape and consequence. It never silently removes player input.

### U1 unresolved

```text
omastar_exact_extinction_cause == unresolved_theory
omastar_exact_tentacle_grip_force == unresolved_and_not_formulaized
omastar_exact_release_conditions == unresolved_and_encounter_bounded
omastar_octillery_ancestry_mechanism == unresolved_and_nonbaseline
ordinary_wild_population_in_proto_kanto == rejected_as_default
```

## 9. #142 Aerodactyl evidence packet

### C1/C2 facts retained

Current official material provides two high-value, distinct observation scopes:

- `RESTORATION_SCOPED / THREAT`: an amber-DNA-restored Aerodactyl displayed greater-than-expected ferocity and casualties occurred;
- `OBSERVED / LOCOMOTION`: in ancient aerial habitat it flew freely over an ancient continent, while its ground walk is described as weak and slow.

Pinned historical evidence adds context without requiring a permanent berserk rule:

- Red/Blue describe a ferocious prehistoric throat-targeting predator with serrated fangs;
- Yellow says the ancient species died out and was resurrected using DNA from amber;
- Gold says it appears to have flown by spreading its wings and gliding;
- Silver says it is said to have flown through ancient skies while crying loudly;
- Crystal describes free/fearless prehistoric flight;
- Ruby/Sapphire/Emerald describe regeneration from amber genetic material while explicitly presenting "king of the skies" as imagination rather than measurement;
- FireRed again places regeneration in an amber genetic-material context;
- Diamond/Pearl/Platinum emphasize dinosaur-era aerial life and sawlike teeth.

### D1 boundaries

```text
aerodactyl_ancient_aerial_ecology == source_backed
aerodactyl_severe_ferocity == source_backed
aerodactyl_restored_specimen_casualties == source_backed_restoration_scoped
aerodactyl_fast_aerial_vs_weak_slow_ground_locomotion == current_source_backed_state_difference
aerodactyl_amber_dna_restoration == source_backed_modern_context
aerodactyl_serrated_fang_predation == historical_source_backed
restored_specimen_ferocity_equals_every_individual_permanently_berserk == false
casualties_equal_unavoidable_death_on_contact == false
flight_equals_unrestricted_vertical_traversal_or_fast_travel == false
flight_equals_indefinite_safe_player_carrying == false
Speed_6_equals_automatic_first_action_or_pursuit_success == false
ground_weakness_equals_second_species_stat_profile == false
amber_dna_equals_ancient_genetic_lab_or_revive_machine == false
mega_aerodactyl_equals_baseline_anatomy_or_ancient_mega_institution == false
```

The later dossier should represent meaningful `airborne` versus `grounded` authored encounter states without requiring a general flight-physics simulation.

### U1 unresolved

```text
aerodactyl_exact_air_speed_or_endurance == unresolved_and_not_formulaized
aerodactyl_exact_ground_mobility_penalty == unresolved_and_state_bounded
aerodactyl_restored_specimen_casualty_count_and_context == unresolved_beyond_source_statement
aerodactyl_species_wide_aggression_distribution == unresolved
aerodactyl_ordinary_wild_population_in_proto_kanto == rejected_as_default
```

## 10. #143 Snorlax evidence packet

### C1/C2 facts retained

Current official material supports a large but discrete ecology burden:

- `OBSERVED / APPETITE`: Snorlax eats through most of its waking time and consumes nearly 900 pounds of food per day;
- `OBSERVED / DIGESTION`: its digestive system tolerates ground food and can neutralize/dissolve poisonous material;
- `OBSERVED / HISUI SOCIAL CONSEQUENCE`: a Hisui-framed entry describes sudden village appearances that consume entire rice granaries and treats them as grave disasters.

Pinned historical evidence adds useful behavioral boundaries:

- Red/Blue characterize a simple eat/sleep cycle and increasing slothfulness with bulk;
- Yellow supports tolerance of moldy food without stomach upset;
- Gold distinguishes snores/hunger rumbling from cries;
- Silver gives unusually absolute poison-dissolution wording;
- Crystal supports tolerance of moldy/rotten food;
- Ruby/Sapphire/Emerald describe Snorlax as docile enough in that later social context for children to play on its belly;
- FireRed says satisfaction requires more than 880 pounds of food per day followed by prompt sleep;
- Diamond says its stomach can digest any kind of food including spoiled food;
- Pearl gives the nearly 900-pound daily figure;
- Platinum describes extreme lethargy once full.

### D1 boundaries

```text
snorlax_eat_sleep_cycle == source_backed
snorlax_nearly_900_pounds_daily_food_claim == source_backed_measurement
snorlax_spoiled_ground_food_tolerance == source_backed
snorlax_digestive_poison_resilience == source_backed_but_not_universalized
snorlax_full_belly_lethargy == version_scoped_source_backed
snorlax_hisui_village_granary_disaster == source_backed_region_era_scoped
snorlax_later_social_docility_examples == context_not_proto_kanto_institution
food_mass_claim_equals_continuous_calorie_or_inventory_drain == false
food_mass_claim_equals_settlement_economy_formula == false
poison_digestion_equals_immunity_to_every_toxin_disease_or_status == false
Immunity_ability_equals_universal_narrative_immunity == false
hisui_granary_entry_equals_proto_kanto_rice_economy == false
hisui_disaster_entry_equals_every_snorlax_targets_settlements == false
sleep_equals_invulnerability_or_forced_time_skip == false
appetite_equals_per_frame_pathfinding_to_food == false
```

The stable gameplay minimum is **a very large, usually low-activity organism whose appetite can become a severe authored local crisis**. Off-screen specimens do not require a global calorie ledger.

### U1 unresolved

```text
snorlax_exact_wild_food_mix == unresolved
snorlax_exact_feeding_periodicity == unresolved_beyond_source_scale
snorlax_deliberate_toxin_limit == unresolved
snorlax_sleep_duration_and_wake_trigger == unresolved_and_encounter_authored
snorlax_proto_kanto_settlement_incident_frequency == unresolved
```

## 11. Fossil chronology and D-034 encounterability resolution

The source review finds no need for a new global chronology system or Human Design Gate.

The evidence is strong that Omanyte and Aerodactyl are treated as extinct/restored species in later/modern contexts, while Omastar is part of the same ancient/extinction cluster. The project, however, has the binding product requirement D-034: all #001-#151 must be directly encounterable somewhere in total content.

The narrowest chronology-safe interpretation is therefore:

### 11.1 Omanyte / Omastar — one exceptional marine relict locality

`PROJECT_EXTRAPOLATION / D2`:

- one inaccessible or highly isolated relic marine ecosystem may preserve a **tiny self-sustaining relict lineage** of Omanyte and Omastar;
- this is one bounded locality/content chain, not an ordinary coastal population and not evidence that the species is common elsewhere;
- local continuity, food burden, reproductive viability, discovery state and rarity must be authored explicitly in the dossiers/event chain;
- the population is not produced by human restoration and does not imply fossil revival technology;
- the explanation remains project-authored and must never be written as franchise-canon fact.

```text
omanyte_omastar_d034_resolution == one_exceptional_relict_marine_locality
ordinary_regional_abundance == false
human_restoration_required == false
time_travel_required == false
```

### 11.2 Aerodactyl — one exceptional aerial relict locality/lineage

`PROJECT_EXTRAPOLATION / D2`:

- one extremely isolated cliff, basin, sea-stack or equivalent inaccessible aerial refuge may preserve a **tiny Aerodactyl relict lineage**;
- the exact geography is intentionally deferred to dossier/event authoring so this review does not create a new world-map fact prematurely;
- direct encounter occurs only through that exceptional content path and does not imply ordinary sky encounters across proto-Kanto;
- no individual is required to have survived personally since prehistory; the interpretation is lineage continuity, avoiding unsupported extreme lifespan;
- no amber lab, fossil-revival device, time rift or generic resurrection rule is introduced.

```text
aerodactyl_d034_resolution == one_exceptional_relict_aerial_locality_or_lineage
ordinary_regional_abundance == false
prehistoric_individual_lifespan_assumption == false
human_restoration_required == false
time_travel_required == false
```

This is deliberately the smallest project-owned exception that satisfies D-034 while preserving the strong extinct/restoration provenance of later sources.

## 12. Cross-contract contradiction and runtime representation audit

### P2 world/technology chronology

```text
ancient_power_grid_created == false
ancient_battery_or_lightning_storage_industry_created == false
ancient_fossil_revival_or_genetic_lab_created == false
ancient_rice_granary_economy_inferred_from_hisui == false
later_family_form_mechanic_promoted_to_baseline == false
p2_contradiction_count == 0
```

Modern power plants, research programs, fossil/DNA restoration, Poké Ball-era assumptions, later-region agriculture and later forms remain provenance context rather than proto-Kanto institutions.

### P3 player agency / action economy

```text
omastar_tentacles_create_extra_turns == false
omastar_wrap_silently_removes_player_input == false
aerodactyl_speed_or_flight_guarantees_first_action == false
aerodactyl_ferocity_makes_escape_or_deescalation_impossible == false
snorlax_sleep_forces_time_skip == false
one_pokemon_one_turn_health_initiative_slot_preserved == true
p3_contradiction_count == 0
```

### P4 Pokémon-domain rules

```text
type_implies_species_specific_capability == false
ability_text_becomes_exact_diegetic_battle_formula == false
ordinary_pokemon_scale_with_player == false
six_axis_profile_manual_exception_count == 0
hazard_severity_capped_by_axis_rating == false
d034_direct_encounterability_separated_from_abundance == true
p4_contract_contradiction_count == 0
```

### Runtime/performance representation

No claim in this batch requires continuous per-frame species simulation.

Preferred later representation:

- Electabuzz: cached/coarse charge and storm-opportunity flags; event-triggered discharge consequences;
- Magmar: event-triggered heat/ignition/exposure consequences; no ambient thermodynamic propagation;
- Omanyte/Omastar: static authored relict-locality eligibility plus encounter-state shell/restraint hooks;
- Aerodactyl: discrete `airborne` / `grounded` states and authored pursuit boundaries;
- Snorlax: coarse `hungry` / `feeding` / `sated` / `sleeping` state with authored settlement-resource consequences.

```text
continuous_per_frame_species_simulation_required == false
continuous_world_food_economy_required == false
continuous_electric_field_required == false
continuous_temperature_field_required == false
general_flight_physics_required == false
```

## 13. Source-review verdict and authoring handoff

Batch 18 source review passes.

```text
reviewed_species_count == 6
current_official_species_pages_verified == 6
pinned_species_records_reviewed == 6
rating_profile_reproducible_count == 6
manual_rating_exception_count == 0
p2_contradiction_count == 0
p3_contradiction_count == 0
p4_contract_contradiction_count == 0
blocking_human_design_gate_count == 0
continuous_simulation_requirement_count == 0
ready_for_full_schema_authoring == true
```

The coverage manifest deliberately remains unchanged:

```text
dossier_complete_count == 129
pilot_reviewed_count == 2
not_started_count == 20
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

Expected state only after all six frozen-schema dossiers, dossier index/regression summary and Batch 18 completion audit pass atomically:

```text
dossier_complete_count == 135
pilot_reviewed_count == 2
not_started_count == 14
```

### Exact next work

Author the six Batch 18 frozen full-schema dossiers for #125, #126, #138, #139, #142 and #143. Create the Batch 18 dossier index/regression summary and completion audit. Promote exactly those six manifest rows only if every schema, deterministic-stat, P2/P3/P4 contradiction, chronology, D-034, player-agency and runtime-representation check passes.

Do not begin P5.

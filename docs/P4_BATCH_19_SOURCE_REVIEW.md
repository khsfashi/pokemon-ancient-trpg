# P4 Batch 19 — Source Review

Status: **SOURCE REVIEW COMPLETE — NO BLOCKING HUMAN DESIGN GATE / READY FOR FULL-SCHEMA AUTHORING**  
Date: **2026-08-16**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_19_AQUATIC_LOCOMOTION_COLD_WATER_MORPHOLOGY_PLAN.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P2_CANON_DERIVATION_AND_TECH_ISLAND_CONTRACT.md`, `docs/WORLD_BIBLE.md`

## 1. Review purpose

Batch 19 reviews six species selected to stress aquatic locomotion, cold-water ecology, explicit swimming-speed wording, ink, poison, biological-resource language, parental care, spawning ecology and localized terrain interaction before any coverage-manifest promotion:

- #086 Seel / #087 Dewgong
- #116 Horsea / #117 Seadra
- #118 Goldeen / #119 Seaking

The review confirms that the existing P2/P3/P4 contracts can preserve these claims without adding a generic swimming subsystem, oxygen simulator, fluid/current physics layer, continuous temperature model, automatic poison/contact engine, breeding simulator, mining system, normalized biological-harvest economy, or hidden player-relative scaling.

```text
Water_or_Ice_type_equals_unrestricted_aquatic_traversal == false
strong_swimmer_equals_guaranteed_escape_or_pursuit == false
numeric_swim_speed_equals_turn_or_world_travel_formula == false
cold_adaptation_equals_universal_cold_immunity == false
water_entry_equals_automatic_drowning_or_input_loss == false
ink_equals_automatic_blindness_or_permanent_concealment == false
poisonous_spines_equals_automatic_poison_on_proximity == false
medicinal_value_equals_automatic_loot_or_live_harvest_permission == false
seasonal_spawning_equals_continuous_breeding_simulation == false
horn_or_head_ice_rock_interaction_equals_generic_mining_or_terrain_deletion == false
```

The safe representation remains claim-level and source-scoped: retain what is directly observed, measured, historical/version-scoped, analogy/reputation, contextual ecology, modern-mechanic metadata, and project-authored ancient extrapolation instead of flattening every source sentence into a universal runtime rule.

## 2. Source and epistemic-provenance rule

Existing P4 provenance classes remain authoritative:

- **C1** — direct official Pokémon Pokédex/species fact;
- **C2** — cross-source official synthesis;
- **D1** — conservative interpretation directly bounded by one or more source facts;
- **D2** — project-authored ancient-setting extrapolation, never presented as franchise canon;
- **U1** — unresolved detail deliberately left unknown.

Batch 19 records claim form where it affects safe gameplay interpretation:

- `OBSERVED` — source presents anatomy, behavior or an event as occurring;
- `MEASURED` — source gives a numeric quantity such as temperature or swimming speed;
- `ANALOGY_OR_REPUTATION` — source uses a nickname, comparison or reputation that must not become a human institution by default;
- `SCIENTIST_INTERPRETATION` — source attributes a conclusion to examination/research rather than direct ordinary observation;
- `VERSION_SCOPED_EXTRAORDINARY` — historical wording is unusually absolute or materially stronger than the current bounded minimum;
- `CONTEXTUAL_ECOLOGY` — behavior is tied to season, nest, offspring, feeding period, danger response or another local condition;
- `CROSS_SOURCE_SYNTHESIS` — multiple official statements support a bounded common minimum while differing in strength or explanation;
- `PROJECT_EXTRAPOLATION` — ancient-setting content required by this project but not asserted as franchise canon.

Pinned structured revision remains:

```text
SRC-DATA-001 = PokeAPI/api-data @ 2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

`SRC-DATA-001` supplies deterministic raw stats, types, abilities, family/evolution metadata, held-item context and version-tagged Pokédex evidence. It remains an evidence carrier under the existing provenance contract, not an independent franchise-canon authority. Current official Pokémon Pokédex pages remain the primary current-text cross-check.

Official Pokédex source registry, rechecked 2026-08-16:

| Ref | Species | Official source |
|---|---|---|
| `OFFICIAL-DEX-SEEL-SG` | Seel | `https://sg.portal-pokemon.com/play/pokedex/0086` |
| `OFFICIAL-DEX-DEWGONG-SG` | Dewgong | `https://sg.portal-pokemon.com/play/pokedex/0087` |
| `OFFICIAL-DEX-HORSEA-SG` | Horsea | `https://sg.portal-pokemon.com/play/pokedex/0116` |
| `OFFICIAL-DEX-SEADRA-SG` | Seadra | `https://sg.portal-pokemon.com/play/pokedex/0117` |
| `OFFICIAL-DEX-GOLDEEN-SG` | Goldeen | `https://sg.portal-pokemon.com/play/pokedex/0118` |
| `OFFICIAL-DEX-SEAKING-SG` | Seaking | `https://sg.portal-pokemon.com/play/pokedex/0119` |

Historical entries are retained only where they materially sharpen morphology/ecology or expose a stronger boundary. Absolute historical wording is not silently promoted into a universal runtime invariant.

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
| Seel | 65/45/55/45/70/45 | 3/2/2/2/3/2 |
| Dewgong | 90/70/80/70/95/70 | 4/3/4/3/4/3 |
| Horsea | 30/40/70/70/25/60 | 1/2/3/3/1/3 |
| Seadra | 55/65/95/95/45/85 | 2/3/4/4/2/4 |
| Goldeen | 45/67/60/35/50/63 | 2/3/3/1/2/3 |
| Seaking | 80/92/65/65/80/68 | 4/4/3/3/4/3 |

```text
rating_profile_reproducible_count == 6
manual_rating_exception_count == 0
```

The six-axis ratings remain compact species baselines. They do not directly encode swim velocity, cold tolerance, water-current handling, underwater endurance, horn penetration, poison severity, concealment quality, reproductive urgency, nest defense or terrain modification.

## 4. Type, ability, family and modern-mechanic boundary

Current official typing remains:

```text
Seel     Water
Dewgong  Water / Ice
Horsea   Water
Seadra   Water
Goldeen  Water
Seaking  Water
```

Pinned ability metadata is retained as modern battle-system context rather than literal ancient trigger formulas:

- Seel / Dewgong: `Thick Fat`, `Hydration`; hidden `Ice Body`;
- Horsea: `Swift Swim`, `Sniper`; hidden `Damp`;
- Seadra: `Poison Point`, `Sniper`; hidden `Damp`;
- Goldeen / Seaking: `Swift Swim`, `Water Veil`; hidden `Lightning Rod`.

```text
Thick_Fat_equals_exact_fire_or_ice_damage_halving_in_diegesis == false
Hydration_equals_rain_cures_every_condition_in_world_fiction == false
Ice_Body_equals_universal_freezing_immunity_or_passive_regeneration == false
Swift_Swim_equals_exact_rain_speed_multiplier_in_diegesis == false
Sniper_equals_critical_hit_formula_in_world_fiction == false
Damp_equals_global_explosion_suppression_field == false
Poison_Point_equals_automatic_poison_on_contact == false
Water_Veil_equals_universal_fire_or_burn_immunity == false
Lightning_Rod_equals_automatic_electrical_redirection_or_immunity == false
```

Family/evolution context remains chronology-safe:

```text
Seel    -> Dewgong                 [mandatory Gen-I family]
Horsea  -> Seadra -> Kingdra      [Kingdra post-Generation-I context]
Goldeen -> Seaking                 [mandatory Gen-I family]
```

Pinned Horsea/Seadra records also carry later `Dragon Scale` item/evolution context. Under D-032 this does not establish Dragon Scale availability, trade evolution, itemized evolution rituals, or normalized Kingdra presence in the ancient mandatory baseline.

## 5. #086 Seel evidence packet

### C1/C2 facts retained

Current official material supports a narrow minimum:

- `OBSERVED / ANATOMY`: the hard head protrusion is used to bash through thick ice;
- `OBSERVED / COLD-WATER ECOLOGY`: colder water is strongly preferred and Seel swims among floating ice.

Pinned historical evidence adds stronger or more specific claims:

- Yellow gives a roughly 14 °F frigid-climate statement;
- Gold says Seel does not walk well on land but swims gracefully and favors frigid seas;
- Silver says it may sleep on the shallow seabed during daytime and closes its nostrils while swimming;
- Crystal attributes cold protection to light-blue fur;
- Ruby/Sapphire/Emerald describe hunting beneath ice sheets and breaking a breathing hole through the ice when air is needed;
- FireRed gives an unusually strong minus-40 °F activity statement;
- Diamond/Pearl/Platinum describe iceberg living and breaking ice while swimming.

### D1 boundaries

```text
seel_hard_head_protrusion_for_ice_bashing == source_backed
seel_cold_water_preference == source_backed
seel_land_walking_limitation == historical_version_scoped_source_backed
seel_closes_nostrils_while_swimming == historical_version_scoped_source_backed
seel_needs_access_to_air_while_hunting_under_ice == historical_cross_source_backed
seel_cold_numeric_claims == measured_version_scoped_evidence
ice_bashing_equals_universal_ice_wall_destruction == false
ice_bashing_equals_mining_or_tunneling_permission == false
cold_preference_equals_universal_cold_or_Ice_immunity == false
minus_40F_or_14F_wording_equals_continuous_temperature_formula == false
water_competence_equals_indefinite_underwater_breathing == false
poor_land_walking_equals_automatic_immobilization_on_land == false
```

Stable gameplay minimum: **a cold-water specialist with localized ice-breaking capability and meaningful water/land asymmetry, while breathing and locomotion remain authored encounter facts rather than continuous simulation.**

### U1 unresolved

```text
seel_exact_safe_temperature_range == unresolved_and_not_formulaized
seel_exact_ice_thickness_or_material_limit == unresolved
seel_exact_submersion_duration == unresolved
seel_exact_land_speed_or_endurance == unresolved
```

## 6. #087 Dewgong evidence packet

### C1/C2 facts retained

Current official material supports:

- `CONTEXTUAL_ECOLOGY`: sleeping in shallow ocean water by day and seeking food at night when colder;
- `OBSERVED / PHYSIOLOGY`: storing thermal energy to resist cold;
- `MEASURED / LOCOMOTION`: swimming at eight knots in frigid water.

Pinned historical evidence adds:

- Yellow uses unusually absolute wording that intense cold leaves Dewgong unharmed;
- Gold describes a streamlined, low-drag body and increasing activity as temperature drops;
- Silver links the long tail to rapid changes in swimming direction;
- Ruby/Sapphire/Emerald record an old mariner mistaking a sleeping Dewgong on a glacier for a mermaid;
- FireRed again says colder weather increases activity;
- Diamond/Pearl/Platinum say its white coat helps conceal it from predators in snow;
- Black 2/White 2 repeat the eight-knot swimming claim with low water resistance.

### D1 boundaries

```text
dewgong_cold_water_specialization == source_backed
dewgong_thermal_energy_storage_wording == source_backed
dewgong_eight_knot_swim_claim == measured_source_backed
dewgong_day_sleep_night_feeding_pattern == contextual_source_backed
dewgong_tail_assisted_turning == historical_version_scoped_source_backed
dewgong_snow_concealment == historical_version_scoped_source_backed
unharmed_by_intense_cold == version_scoped_extraordinary_not_universalized
eight_knots_equals_turn_distance_or_fast_travel_formula == false
streamlined_low_drag_equals_fluid_physics_requirement == false
cold_adaptation_equals_immunity_to_every_cold_or_Ice_hazard == false
day_night_pattern_equals_real_time_schedule_or_offscreen_feeding_simulation == false
snow_concealment_equals_permanent_invisibility_or_automatic_stealth == false
mermaid_misidentification_equals_confirmed_human_mermaid_lore_in_proto_Kanto == false
```

Stable gameplay minimum: **a highly cold-adapted swimmer with strong but bounded locomotion and context-sensitive concealment/feeding behavior; numerical speed remains source scale, not a mechanics formula.**

### U1 unresolved

```text
dewgong_exact_cold_injury_threshold == unresolved
dewgong_exact_acceleration_turn_radius_or_current_limit == unresolved
dewgong_exact_day_night_behavioral_rigidity == unresolved
dewgong_exact_snow_concealment_resolution == unresolved
```

## 7. #116 Horsea evidence packet

### C1/C2 facts retained

Current official material supports:

- `OBSERVED / LOCOMOTION`: even against a large attacker, Horsea can use its developed dorsal fin to swim rapidly toward safety;
- `OBSERVED / BALANCE`: the coiled tail helps maintain balance;
- `OBSERVED / CAPABILITY`: Horsea may spray ink from its mouth.

Pinned historical evidence adds:

- Red/Blue describe accurate ink shots at flying insects from the water surface;
- Yellow describes vigorous water or special-ink discharge when danger is sensed;
- Silver describes backward swimming while still facing forward;
- Crystal describes social tail-tangling in safe locations;
- Ruby describes eating small insects and moss and anchoring to rock/coral with the tail in fast current;
- Sapphire describes dense black ink released reflexively during escape;
- Emerald reinforces multi-directional fin-driven movement while facing forward;
- Diamond/Pearl/Platinum describe coral-shade nest sites and murky-ink escape behavior.

### D1 boundaries

```text
horsea_fin_driven_aquatic_escape == source_backed
horsea_backward_or_multidirectional_swimming == historical_cross_source_backed
horsea_coiled_tail_balance == source_backed
horsea_tail_anchoring_in_fast_current == historical_version_scoped_source_backed
horsea_ink_discharge == source_backed
horsea_precision_ink_hunting == historical_version_scoped_source_backed
horsea_small_insect_and_moss_feeding == historical_version_scoped_source_backed
rapid_escape_equals_guaranteed_flee_or_free_reaction_movement == false
ink_equals_automatic_blindness_input_loss_or_permanent_concealment == false
tail_anchoring_equals_generic_grapple_or_independent_appendage_action == false
strong_aquatic_control_equals_unrestricted_passenger_traversal == false
feeding_claim_equals_continuous_hunger_or_prey_population_simulation == false
```

Stable gameplay minimum: **a nimble aquatic organism with tail-assisted stability and finite ink-based defensive/hunting options, all resolved through ordinary action economy and authored encounter state.**

### U1 unresolved

```text
horsea_exact_ink_capacity_or_recovery_rate == unresolved
horsea_exact_ink_visibility_duration == unresolved
horsea_exact_current_strength_anchor_limit == unresolved
horsea_exact_escape_success_rate == unresolved_and_not_formulaized
```

## 8. #117 Seadra evidence packet

### C1/C2 facts retained

Current official material supports four distinct channels:

- `CONTEXTUAL_ECOLOGY`: males raise young;
- `OBSERVED / DEFENSE`: toxic spines are used against intruders while caring for young;
- `OBSERVED / PHYSIOLOGY`: fin tips leak poison;
- `OBSERVED / RESOURCE PROVENANCE`: fins and bones are valued as herbal-medicine ingredients.

Pinned historical evidence adds materially stronger pressure:

- Red/Blue describe backward swimming with pectoral fins and tail;
- Yellow says touching the back fin can cause numbness and describes tail-hooking to coral while sleeping;
- Gold reports a cell examination finding a gene absent in Horsea, framed as a research finding/hot topic;
- Ruby describes coral harvesters sometimes being stung by unnoticed poison barbs;
- Sapphire says Seadra can generate whirlpools strong enough to engulf fishing boats, using currents to weaken prey;
- Emerald describes poisonous barbs as traditional-medicine ingredients and unusually aggressive nest defense;
- FireRed says careless contact with body spikes can cause fainting;
- Diamond/Pearl/Platinum continue the traditional-medicine ingredient wording.

### D1 boundaries

```text
seadra_poisonous_spines_and_fin_tips == source_backed
seadra_parental_care_by_males == source_backed_contextual_ecology
seadra_fins_and_bones_medicinally_valued == source_backed_resource_provenance
seadra_contact_numbness_or_fainting == historical_version_scoped_severe_hazard
seadra_coral_sleep_anchoring == historical_version_scoped_source_backed
seadra_whirlpool_generation == historical_version_scoped_extraordinary
seadra_cell_gene_claim == scientist_interpretation_modern_research_context
poisonous_spines_equals_automatic_poison_on_touch_or_proximity == false
severe_contact_wording_equals_forced_fainting_without_resolution == false
whirlpool_wording_equals_global_fluid_simulation_or_automatic_boat_destruction == false
whirlpool_equals_automatic_forced_movement_or_player_input_removal == false
medicinal_value_equals_guaranteed_cure_recipe_price_or_market == false
medicinal_value_equals_live_harvest_permission_or_automatic_loot == false
parental_care_equals_every_male_is_always_guarding_a_nest == false
nest_defense_equals_guaranteed_hostility_or_unavoidable_combat == false
cell_gene_wording_equals_ancient_genetics_technology == false
```

Any Seadra poison/contact/whirlpool scene must preserve warning where fiction allows it, trigger eligibility, counterplay, avoidance/escape options and bounded consequences. Repeated spines never add turns, reactions, entities or health pools.

Stable gameplay minimum: **a spined aquatic defender with credible severe poison/contact pressure, contextual paternal care and documented medicinal-resource interest, without automatic conditions, harvesting normalization or fluid simulation.**

### U1 unresolved

```text
seadra_exact_toxin_dose_on_contact == unresolved
seadra_exact_poison_duration_or_fatality == unresolved
seadra_exact_whirlpool_radius_strength_and_duration == unresolved_and_not_formulaized
seadra_exact_medicinal_processing_or_effect == unresolved
seadra_exact_parental_period_or_nest_aggression_probability == unresolved
```

## 9. #118 Goldeen evidence packet

### C1/C2 facts retained

Current official material supports:

- `ANALOGY_OR_REPUTATION`: elegantly moving dorsal, pectoral and tail fins motivate the “Water Dancer” label;
- `OBSERVED / ANATOMY`: dorsal and pectoral fins are strongly developed;
- `MEASURED / LOCOMOTION`: swimming at five knots.

Pinned historical evidence adds:

- Red/Blue use the “Water Queen” nickname based on the tail fin's appearance;
- Yellow describes groups swimming up rivers and waterfalls when laying eggs;
- Silver says Goldeen can swim nonstop up fast streams at five knots;
- Crystal describes mate-searching during spawning season;
- Ruby warns of powerful horn ramming;
- Sapphire uses unusually absolute aquarium-glass-breaking escape wording;
- Emerald describes springtime schools ascending falls/rivers and strong horn damage;
- Pearl links danger response to a sharp-horn counterattack.

### D1 boundaries

```text
goldeen_developed_fins_and_five_knot_swimming == source_backed
goldeen_horn_ramming_or_counterattack == historical_cross_source_backed
goldeen_spawning_migration_up_rivers_or_falls == historical_cross_source_backed
goldeen_water_dancer_or_water_queen_wording == analogy_or_reputation
nonstop_fast_stream_swimming == version_scoped_extraordinary
thickest_aquarium_glass_single_ram == version_scoped_extraordinary
five_knots_equals_turn_distance_initiative_or_world_travel_formula == false
nonstop_equals_infinite_stamina == false
river_or_fall_ascent_equals_every_waterfall_is_traversable == false
glass_breaking_equals_universal_material_destruction == false
Water_Dancer_or_Water_Queen_equals_human_profession_title_or_institution == false
spawning_behavior_equals_continuous_breeding_simulation == false
```

Stable gameplay minimum: **a strong, elegant swimmer with a meaningful horn and seasonal migration potential; speed and exceptional impact wording remain evidence, not universal formulas or terrain permissions.**

### U1 unresolved

```text
goldeen_exact_current_or_waterfall_limit == unresolved
goldeen_exact_endurance_at_five_knots == unresolved
goldeen_exact_horn_material_penetration_limit == unresolved
goldeen_exact_spawning_route_and_season_in_proto_Kanto == project_authored_if_needed
```

## 10. #119 Seaking evidence packet

### C1/C2 facts retained

Current official material supports:

- `CONTEXTUAL_ECOLOGY`: autumn mating preparation is associated with increased body fat and stronger coloration;
- `OBSERVED / TERRAIN INTERACTION`: the horn bores into riverbed boulders to make nests;
- `CONTEXTUAL_ECOLOGY`: those nests help protect eggs from being washed away.

Pinned historical evidence adds:

- Red/Blue describe powerful upstream migration during autumn spawning season;
- Yellow says males carve boulders to make nests;
- Gold describes seasonal aggregation large enough to make rivers appear red;
- Crystal describes males patrolling around nests to protect offspring;
- Ruby describes male courtship dances in riverbeds and seasonal coloration;
- Sapphire says both parents may take turns guarding eggs for over a month;
- Emerald emphasizes boulder holes as protection against predation/current;
- Diamond/Pearl describe severe family/nest defense, including fighting with the horn.

### D1 boundaries

```text
seaking_autumn_spawning_or_mating_ecology == strong_cross_source_backed
seaking_horn_bored_boulder_nest == source_backed
seaking_egg_current_protection == source_backed
seaking_parental_nest_defense == historical_cross_source_backed_contextual
seaking_courtship_dance_and_seasonal_color == historical_version_scoped_source_backed
month_plus_egg_guarding == historical_version_scoped_source_backed
horn_boring_equals_universal_rock_destruction_or_mining == false
nest_building_equals_arbitrary_terrain_edit_permission == false
seasonal_ecology_equals_continuous_population_or_fertility_simulation == false
nest_defense_equals_automatic_combat_or_access_denial == false
protective_behavior_equals_no_retreat_observation_or_nonviolent_resolution == false
month_plus_guarding_equals_real_time_scheduler_requirement == false
mate_or_courtship_wording_equals_human_marriage_or_proposal_institution == false
```

Stable gameplay minimum: **a strongly seasonal river spawner whose horn supports localized nest construction and credible contextual family defense, without turning ecology into a breeding simulator or anatomy into a mining tool.**

### U1 unresolved

```text
seaking_exact_boulder_hardness_or_excavation_rate == unresolved
seaking_exact_nest_dimensions_and_reuse == unresolved
seaking_exact_guarding_duration_frequency == unresolved
seaking_exact_proto_Kanto_spawning_calendar == project_authored_if_needed
```

## 11. Cross-species player-agency and hazard audit

Batch 19 contains several claims that could accidentally remove player input if implemented literally. The following authoring rules are therefore binding for the six dossiers:

1. **Dangerous water:** entering water never silently starts an unavoidable drowning timer. Scenes expose conditions, warning when available, choices/checks, retreat/rescue/counterplay and bounded consequences.
2. **Strong swimmers:** escape/pursuit descriptions establish capability, not guaranteed outcomes, first action, immunity to obstacles/currents, or infinite endurance.
3. **Ink/concealment:** Horsea ink may create temporary authored obscuration or escape pressure, but not automatic permanent blindness, hard input lock, global stealth or an always-on field.
4. **Poison/contact:** Seadra contact can be severe, but exposure must still have a defined trigger and resolution. Proximity alone does not poison, paralyze or faint a target.
5. **Nest/offspring defense:** parental care raises stakes and can justify escalation, but observation, avoidance, retreat, de-escalation and environmental alternatives remain available when fiction permits.
6. **Terrain interaction:** Seel ice-bashing and Seaking horn-boring are localized species capabilities. They do not imply arbitrary map deletion, mining, excavation jobs or construction infrastructure.
7. **Resource wording:** Seadra medicinal value may create local ethical/economic story pressure, but a living Pokémon is never silently reduced to an inventory node. Naturally shed material, remains, trade, coercion and live extraction must remain distinct authored cases.
8. **Repeated anatomy:** fins, tails, horns and spines remain parts of one Pokémon with one ordinary turn, one health state, one initiative presence and one visible companion slot.

## 12. Runtime / performance interpretation

P4 defines content contracts; P7 owns implementation. Nothing found in Batch 19 requires continuous per-frame simulation.

Preferred later representations remain:

- cached/coarse authored `water_zone`, `cold_water`, `open_water`, `river_current`, `nest_site`, `nest_season`, `concealment_opportunity`, `poison_exposure_eligible` or equivalent state;
- event-triggered ice impact, ink discharge, poison exposure, current hazard and horn-boring consequences;
- ordinary P3 checks / capability comparisons for chase, crossing, escape, rescue and contact instead of frame-by-frame aquatic path races;
- source-scale numbers retained as metadata/authoring evidence rather than fed into fluid, thermodynamic, kinetic-energy or travel solvers;
- coarse seasonal/nest eligibility instead of continuous breeding/population simulation;
- static/cached resource provenance rather than supply-chain tracking;
- one active entity per Pokémon regardless of repeated anatomy.

```text
continuous_fluid_simulation_required == false
continuous_temperature_simulation_required == false
continuous_oxygen_simulation_required == false
continuous_breeding_simulation_required == false
continuous_resource_market_simulation_required == false
per_appendage_entity_or_turn_required == false
```

## 13. D-034 encounterability / abundance boundary

All six remain mandatory direct-encounter species under D-034. Source review does not equate that requirement with ordinary abundance, common companionship or guaranteed appearance in every suitable water body.

The dossiers may author narrow habitat/locality/season constraints where useful, but must preserve:

```text
direct_encounterability != commonness
direct_encounterability != baseline_era_abundance
direct_encounterability != ordinary_companionship
aquatic_habitat_fit != guaranteed_presence_in_every_water_zone
seasonal_ecology != encounter_only_during_one_real_world_calendar_window
```

No new global population or encounter subsystem is required by these six species.

## 14. Full-schema authoring handoff

Source review passes with **zero blocking Human Design Gates**. The next pass may author the six frozen-schema dossiers:

```text
docs/P4_BATCH_19_DOSSIER_086_SEEL.md
docs/P4_BATCH_19_DOSSIER_087_DEWGONG.md
docs/P4_BATCH_19_DOSSIER_116_HORSEA.md
docs/P4_BATCH_19_DOSSIER_117_SEADRA.md
docs/P4_BATCH_19_DOSSIER_118_GOLDEEN.md
docs/P4_BATCH_19_DOSSIER_119_SEAKING.md
```

Authoring must preserve the source-review boundaries above and the frozen 20-section dossier schema. It should also produce:

- `docs/P4_BATCH_19_FULL_SCHEMA_DOSSIERS.md`
- `docs/P4_BATCH_19_COMPLETION_AUDIT.md`

Coverage promotion remains atomic and out of scope for this source-review pass. `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml` must remain unchanged until all six dossiers are complete and the Batch 19 completion audit passes.

Expected coverage only after successful later promotion:

```text
dossier_complete_count == 141
pilot_reviewed_count == 2
not_started_count == 8
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

## 15. Source-review validation

```text
reviewed_species_count == 6
current_official_species_pages_verified == 6
pinned_species_records_reviewed == 6
rating_profile_reproducible_count == 6
manual_rating_exception_count == 0
source_claims_epistemically_scoped == true
water_traversal_global_rule_added == false
numeric_speed_runtime_formula_added == false
continuous_simulation_requirement_count == 0
automatic_poison_or_drowning_rule_added == false
biological_harvest_economy_added == false
breeding_simulator_added == false
terrain_mining_system_added == false
p2_contradiction_count == 0
p3_contradiction_count == 0
p4_contract_contradiction_count == 0
blocking_human_design_gate_count == 0
coverage_manifest_changed == false
ready_for_full_schema_authoring == true
```

**Result: PASS.** Batch 19 is ready for six frozen-schema dossiers. P5 remains blocked until the mandatory `151/151` P4 exit audit passes.
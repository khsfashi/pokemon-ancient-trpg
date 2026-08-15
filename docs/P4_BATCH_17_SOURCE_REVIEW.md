# P4 Batch 17 — Source Review

Status: **SOURCE REVIEW COMPLETE — NO BLOCKING HUMAN DESIGN GATE / READY FOR FULL-SCHEMA AUTHORING**  
Date: **2026-08-16**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_17_COMBAT_MORPHOLOGY_AGGRESSION_PLAN.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/WORLD_BIBLE.md`

## 1. Review purpose

Batch 17 reviews six species selected to stress combat morphology, aggression/pursuit wording, martial analogy, natural weapons and extreme combat-performance language before any coverage-manifest promotion:

- #056 Mankey / #057 Primeape
- #106 Hitmonlee / #107 Hitmonchan
- #123 Scyther
- #127 Pinsir

The review confirms that the existing P2/P3/P4 contracts can preserve severe species-local combat capability without turning Pokédex prose into universal combat AI, extra action economy, human fighting institutions, detachable equipment, automatic live harvesting, destructible-world rules, or literal real-world physics.

```text
anger_prone_behavior_equals_universal_rage_meter == false
pursuit_wording_equals_infinite_or_unavoidable_chase == false
martial_analogy_equals_human_martial_institution == false
combo_or_bilateral_attacks_equal_extra_turns == false
natural_weapon_equals_detachable_equipment_or_live_harvest == false
speed_or_force_wording_equals_literal_world_formula == false
hard_object_cutting_or_crushing_equals_universal_material_deletion == false
post_gen1_family_or_form_context_equals_baseline_presence == false
```

The safe representation remains claim-level and source-scoped: retain what is directly observed, what is measured, what is analogy/reputation, what is researcher interpretation, which historical version supplies stronger wording, and what the project itself extrapolates for the ancient setting.

## 2. Source and epistemic-provenance rule

Existing P4 provenance classes remain authoritative:

- **C1** — direct official Pokémon Pokédex/species fact;
- **C2** — cross-source official synthesis;
- **D1** — conservative interpretation directly bounded by one or more source facts;
- **D2** — project-authored ancient-setting extrapolation, never presented as franchise canon;
- **U1** — unresolved detail deliberately left unknown.

Batch 17 records the form of a C1/C2 claim where it changes how safely the claim can become gameplay content:

- `OBSERVED` — source presents a body feature, behavior or event as occurring;
- `MEASURED` — source supplies a distance, duration, speed, ratio or other numeric quantity;
- `SCIENTIST_INTERPRETATION` — source explicitly attributes an explanation to researchers/scientists;
- `LEGEND_OR_HEARSAY` — source uses sayings, rumor, spirit/reputation language or equivalent attribution;
- `ANALOGY` — source compares behavior, appearance or motion to a human concept without identity equivalence;
- `VERSION_SCOPED_EXTRAORDINARY` — a historical entry makes a stronger or unusually absolute claim that must remain version-tagged;
- `CROSS_SOURCE_SYNTHESIS` — multiple official statements support a bounded common minimum while differing in strength or explanation;
- `PROJECT_EXTRAPOLATION` — ancient-world content authored by this project and never represented as source fact.

Pinned structured revision remains:

```text
SRC-DATA-001 = PokeAPI/api-data @ 2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

`SRC-DATA-001` supplies deterministic raw stats, types, abilities, evolution-family metadata and version-tagged Pokédex evidence. It is an evidence carrier under the existing provenance contract, not an independent franchise-canon authority. Current official Pokémon Pokédex pages remain the primary current-text cross-check.

Official Pokédex source registry, rechecked 2026-08-16:

| Ref | Species | Official source |
|---|---|---|
| `OFFICIAL-DEX-MANKEY-SG` | Mankey | `https://sg.portal-pokemon.com/play/pokedex/0056` |
| `OFFICIAL-DEX-PRIMEAPE-SG` | Primeape | `https://sg.portal-pokemon.com/play/pokedex/0057` |
| `OFFICIAL-DEX-HITMONLEE-SG` | Hitmonlee | `https://sg.portal-pokemon.com/play/pokedex/0106` |
| `OFFICIAL-DEX-HITMONCHAN-SG` | Hitmonchan | `https://sg.portal-pokemon.com/play/pokedex/0107` |
| `OFFICIAL-DEX-SCYTHER-SG` | Scyther | `https://sg.portal-pokemon.com/play/pokedex/0123` |
| `OFFICIAL-DEX-PINSIR-SG` | Pinsir | `https://sg.portal-pokemon.com/play/pokedex/0127` |

Historical entries are preserved when they add meaningful pressure, but absolute wording is not silently promoted into an engine invariant.

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
| Mankey | 40/80/35/35/45/70 | 2/4/1/1/2/3 |
| Primeape | 65/105/60/60/70/95 | 3/5/3/3/3/4 |
| Hitmonlee | 50/120/53/35/110/87 | 2/6/2/1/5/4 |
| Hitmonchan | 50/105/79/35/110/76 | 2/5/3/1/5/3 |
| Scyther | 70/110/80/55/80/105 | 3/5/4/2/4/5 |
| Pinsir | 65/125/100/55/70/85 | 3/6/5/2/3/4 |

```text
rating_profile_reproducible_count == 6
manual_rating_exception_count == 0
```

This batch is specifically a regression against literal stat and Pokédex-number interpretation:

- Primeape's pursuit severity is encounter behavior, not a formula derived from `Speed 4`.
- Hitmonlee's `Force 6` does not make every kick penetrate any armor/material or convert base Attack into joules.
- Hitmonchan's current numerical punch-speed wording is not converted into `Speed 3`, initiative, distance-per-turn, momentum or kinetic energy.
- Scyther's `Speed 5` supports a fast species baseline but does not itself authorize invisibility, automatic first action or guaranteed evasion.
- Pinsir's `Force 6` and `Guard 5` do not define universal lifting, crushing, grapple or structure-damage formulas.

Six-axis ratings remain compact species baselines. Hazard severity, body geometry, strike reach, sensory readability, pursuit pressure, camouflage and extraordinary source claims remain separate capability/content channels.

## 4. Evolution, family and modern-mechanic boundary

Pinned/current metadata records later family relationships that must not silently expand the Generation-I baseline:

```text
Mankey    -> Primeape -> Annihilape   [Annihilape post-Generation-I context]

Tyrogue   -> Hitmonlee                 [Tyrogue post-Generation-I pre-evolution]
          -> Hitmonchan
          -> Hitmontop                 [Hitmontop post-Generation-I branch]

Scyther   -> Scizor                    [post-Generation-I evolution]
          -> Kleavor                   [post-Generation-I evolution]

Pinsir    -> no ordinary evolution in the mandatory Gen-I baseline
Mega Pinsir                              [later temporary form/mechanic context]
```

Under D-032, later evolution triggers, move requirements, trade/item metadata and branch conditions are source context rather than ancient progression law. Annihilape, Tyrogue, Hitmontop, Scizor and Kleavor do not expand the mandatory #001-#151 roster. Mega Pinsir does not establish Mega Evolution access, Mega Stone availability or ordinary Pinsir flight in proto-Kanto.

Pinned modern ability metadata also remains context rather than literal ancient combat formulas:

- Mankey / Primeape: `Vital Spirit`, `Anger Point`; hidden `Defiant`;
- Hitmonlee: `Limber`, `Reckless`; hidden `Unburden`;
- Hitmonchan: `Keen Eye`, `Iron Fist`; hidden `Inner Focus`;
- Scyther: `Swarm`, `Technician`; hidden `Steadfast`;
- Pinsir: `Hyper Cutter`, `Mold Breaker`; hidden `Moxie`.

```text
Anger_Point_equals_numeric_rage_meter_or_guaranteed_attack_multiplier == false
Vital_Spirit_equals_universal_sleep_immunity_in_world_fiction == false
Limber_equals_arbitrary_elastic_traversal_permission == false
Reckless_equals_mandatory_self_harm_behavior == false
Iron_Fist_equals_fixed_diegetic_damage_multiplier == false
Keen_Eye_equals_omniscient_perception == false
Swarm_equals_colony_or_summoning_permission == false
Technician_equals_human_trade_or_profession == false
Hyper_Cutter_equals_unbreakable_pincers == false
Mold_Breaker_equals_automatic_rule_bypass == false
Moxie_equals_kill_XP_or_permanent_growth == false
```

## 5. #056 Mankey evidence packet

### C1/C2 facts retained

Current official material supports two clear behavioral channels:

- `OBSERVED / SOCIAL`: Mankey live in groups in treetops and can become infuriated when separated from the group;
- `OBSERVED / TEMPERAMENT`: it is extremely quick to anger and can shift abruptly from docile behavior to violent thrashing.

Historical/version-tagged evidence broadens the severity while also showing why a universal rage state would be unsafe:

- Red/Blue and later reuse preserve the abrupt docile-to-thrashing temper shift;
- Yellow describes an agile tree-dweller that angers easily and attacks readily;
- Gold describes ill-tempered groups attacking a convenient target;
- Silver says a violently enraged individual may fail to distinguish friend from foe;
- Crystal directly supports treetop groups and separation-linked loneliness/anger;
- Ruby/Sapphire describe shaking and rough nasal breathing as warning signs before very rapid escalation, then use unusually absolute escape wording;
- Emerald similarly says the escalation can happen so quickly that there is no time to flee;
- Diamond/Pearl/Platinum describe colony-wide rampaging after one member becomes enraged.

### D1 boundaries

```text
mankey_group_living_and_treetop_sociality == source_backed
mankey_separation_linked_anger == source_backed
mankey_abrupt_quick_temper == source_backed
mankey_shaking_and_rough_breathing_as_anger_warning == version_scoped_source_backed
mankey_group_escalation_or_colony_rampage == version_scoped_source_backed
mankey_friend_foe_confusion_while_enraged == version_scoped_source_backed
impossible_or_no_time_to_flee_wording == version_scoped_extraordinary_not_agency_rule
quick_temper_equals_permanent_hostility == false
quick_temper_equals_numeric_rage_meter == false
anger_equals_automatic_damage_multiplier_or_status_immunity == false
separation_equals_guaranteed_attack_on_humans == false
one_member_angry_equals_global_pack_telepathy == false
group_behavior_equals_extra_turns_or_shared_health == false
```

The stable gameplay minimum is **high-volatility social behavior with readable authored escalation cues**. A particular encounter may escalate too quickly for a specific option to remain available, but the species dossier must not silently install a universal `cannot flee Mankey` rule.

### U1 unresolved

```text
mankey_group_size_and_social_structure == unresolved
mankey_exact_separation_distance_or_duration == unresolved
mankey_colony_escalation_probability_and_signal_chain == unresolved
mankey_friend_foe_confusion_frequency == unresolved
mankey_exact_warning_window_before_escalation == unresolved
```

## 6. #057 Primeape evidence packet

### C1/C2 facts retained

Current official material supplies both direct behavior and explicitly weaker researcher interpretation:

- `OBSERVED / TEMPERAMENT`: Primeape can become wildly furious when it senses someone looking at it;
- `OBSERVED / PURSUIT`: meeting its glare can provoke a chase;
- `SCIENTIST_INTERPRETATION / MODERN CONTAINMENT CONTEXT`: some researchers theorize that it remains angry even while inside a Poké Ball.

Historical evidence includes stronger pursuit and rage wording:

- Red/Blue describe Primeape as always furious and tenacious, pursuing quarry until it catches up;
- Yellow says calm is seen only when nobody else is around;
- Gold describes waking and chasing while semi-asleep if approached;
- Silver directly supports gaze-linked fury and pursuit;
- Crystal escalates this to chasing an angering target “to the end of the world,” which is clearly unsuitable as a literal distance rule;
- Ruby/Sapphire/Emerald say fury increases blood circulation and muscular strength while reducing intelligence;
- FireRed describes tracking a pursued target regardless of distance;
- Diamond/Pearl/Platinum describe anger increasing when eye contact occurs, the target runs, or Primeape is beaten.

### D1 boundaries

```text
primeape_gaze_or_perceived_attention_linked_fury == source_backed
primeape_pursuit_behavior == source_backed
primeape_sleep_interruption_chase == version_scoped_source_backed
primeape_fury_strength_and_judgment_change == version_scoped_source_backed
primeape_pokeball_persistent_anger == scientist_interpretation_and_modern_context
end_of_world_or_no_matter_how_far_pursuit == version_scoped_extraordinary_not_distance_rule
always_furious_wording_equals_permanent_combat_state == false
gaze_trigger_equals_omnidir_detection_or_wall_penetrating_sight == false
pursuit_equals_infinite_pathfinding_or_unavoidable_combat == false
running_equals_automatic_failure_or_agency_removal == false
anger_strength_wording_equals_fixed_multiplier == false
reduced_intelligence_equals_total_loss_of_self_preservation == false
pokeball_reference_equals_ancient_portable_containment == false
```

Primeape may be one of the setting's most dangerous pursuit encounters, but pursuit must remain bounded by authored terrain, goals, visibility, injury, environmental barriers, competing threats, de-escalation opportunities and consequence states. “Tenacious” is useful fiction; infinite simulation is not.

### U1 unresolved

```text
primeape_exact_gaze_or_attention_detection_mechanism == unresolved
primeape_pursuit_distance_and_abandonment_conditions == unresolved_and_event_bounded
primeape_fury_strength_change_magnitude == unresolved_and_not_formulaized
primeape_calm_state_frequency_in_wild_populations == unresolved
primeape_pokeball_researcher_theory_literal_truth == unresolved_and_nonbaseline
```

## 7. #106 Hitmonlee evidence packet

### C1/C2 facts retained

Current official material supports specialized controllable leg physiology:

- `OBSERVED / PHYSIOLOGY`: Hitmonlee can harden muscles in the sole of its foot at the moment of impact;
- `MEASURED / PHYSIOLOGY`: it controls its leg ligaments so its effective kicking reach can extend to roughly double ordinary length.

Historical evidence expands the same body-control theme:

- Red/Blue describe legs lengthening progressively while running in a hurry;
- Yellow compares the sole at impact to diamond hardness and uses very strong destructive wording;
- Gold credits excellent balance and repeated kicks from varied positions;
- Silver describes both legs stretching farther during repeated kicks against a fleeing target;
- Crystal calls Hitmonlee the “Kick Master” and says it uses elastic legs to execute every known kick;
- Ruby/Sapphire/Emerald describe freely contracting/stretching legs, devastating kicks and post-battle rubbing/loosening of tired legs;
- FireRed reiterates distant rising-kick reach;
- Diamond/Pearl/Platinum give the approximate doubled-leg-length claim.

### D1 boundaries

```text
hitmonlee_controlled_leg_extension_and_contraction == source_backed
hitmonlee_approximately_double_kick_reach == source_backed_measurement
hitmonlee_impact_time_sole_hardening == source_backed
hitmonlee_high_balance_and_successive_kicking == version_scoped_source_backed
hitmonlee_post_battle_leg_fatigue_care == version_scoped_source_backed
diamond_hard_sole_and_destroys_enemy_wording == version_scoped_extraordinary
kick_master_and_every_known_kick == analogy_or_reputation_not_institution
leg_extension_equals_arbitrary_infinite_reach == false
leg_extension_equals_rope_grapple_or_passenger_traversal == false
successive_kicks_equal_extra_turns == false
bilateral_legs_equal_two_entities_or_two_health_states == false
sole_hardening_equals_universal_armor_or_material_penetration == false
Force_6_equals_joules_or_kinetic_energy_formula == false
post_battle_rubbing_equals_required_human_trainer_or_masseur == false
```

Hitmonlee's physiology can justify unusually flexible melee reach and difficult-to-read strike geometry inside an authored encounter. It does not require continuous skeletal simulation: discrete reach/capability states are sufficient.

### U1 unresolved

```text
hitmonlee_exact_extension_speed_and_joint_geometry == unresolved
hitmonlee_exact_maximum_reach_outside_kicking_context == unresolved
hitmonlee_exact_sole_hardness_and_material_limits == unresolved
hitmonlee_fatigue_accumulation_and_recovery_duration == unresolved
hitmonlee_every_known_kick_literal_scope == intentionally_not_universalized
```

## 8. #107 Hitmonchan evidence packet

### C1/C2 facts retained

Current official material deliberately mixes martial-looking behavior, numerical wording and recovery cadence:

- `OBSERVED / COMBAT BEHAVIOR`: Hitmonchan can corner opponents with combinations of punches from both sides;
- `MEASURED / EXTREME NUMERIC WORDING`: a finishing straight punch is described as exceeding 300 mph;
- `OBSERVED / ANATOMY`: its fists are made of dense masses of muscle;
- `MEASURED / RECOVERY CADENCE`: it pauses after roughly three minutes of fighting to steady its breathing and mood.

Historical entries add stronger material and human-boxing language:

- Red/Blue describe lightning-fast punch volleys that are impossible to see;
- Yellow says corkscrew punches can drill through a concrete wall;
- Gold ties air-slicing punches to a short break after three minutes of fighting;
- Silver says even a slight graze from its high-speed punches can cause a burn;
- Crystal describes rotating its arms before contact to strengthen a punch;
- Ruby/Sapphire/Emerald say it is said to possess the spirit of a boxer who sought a world championship;
- FireRed strengthens that legend/reputation into pro-boxer-spirit language and compares punch speed with a bullet train;
- Diamond/Pearl/Platinum say twisting punches can pulverize concrete and again record the three-minute rest cadence.

### D1 boundaries

```text
hitmonchan_combination_punching == source_backed
hitmonchan_dense_muscular_fists == source_backed
hitmonchan_current_over_300_mph_punch_wording == source_backed_numeric_claim
hitmonchan_roughly_three_minute_recovery_cadence == source_backed_measurement
hitmonchan_air_slicing_or_graze_burn == version_scoped_source_backed
hitmonchan_concrete_wall_or_pulverization == version_scoped_extraordinary
boxer_world_champion_or_pro_boxer_spirit == legend_or_reputation_and_modern_human_analogy
bullet_train_comparison == version_scoped_analogy_not_world_physics
combination_punching_equals_multiple_turns_or_free_followups == false
one_punch_per_fist_equals_two_action_slots == false
three_minutes_equals_global_round_length_or_engine_cooldown == false
over_300_mph_equals_initiative_travel_or_kinetic_energy_formula == false
concrete_claim_equals_universal_structure_destruction == false
boxer_language_equals_proto_kanto_boxing_profession_dojo_or_league == false
humanlike_fighting_equals_human_personhood_or_citizenship == false
```

The three-minute claim is useful as **cadence fiction**: a sufficiently prolonged authored confrontation may expose a recovery opening. It is not a reason to run a real-time timer or continuous stamina simulation. Likewise, combinations can be represented as one authored action/effect resolved through the ordinary P3 action model.

### U1 unresolved

```text
hitmonchan_exact_punch_speed_distribution_and_measurement_context == unresolved
hitmonchan_exact_recovery_duration_after_three_minutes == unresolved
hitmonchan_exact_material_limits_against_concrete_like_targets == unresolved
hitmonchan_graze_burn_mechanism == unresolved
boxer_spirit_claim_literal_truth == intentionally_unresolved_and_not_baseline_institution
```

## 9. #123 Scyther evidence packet

### C1/C2 facts retained

Current official material supports three distinct channels:

- `OBSERVED / ANATOMY`: Scyther has sharp forearm scythes used to cut vegetation, hard objects and prey;
- `OBSERVED / SPEED/PERCEPTION`: it can move too quickly for the human eye to track cleanly;
- `OBSERVED / MAINTENANCE`: cutting hard objects can make the forearm scythes increasingly sharp;
- `OBSERVED / PURSUIT REPUTATION`: another current entry frames attempted prey escape as consistently thwarted by Scyther's nimble movements.

Historical/version-tagged evidence adds camouflage, analogy and material-strength pressure:

- Red/Blue say ninja-like agility/speed can create the illusion that more than one Scyther is present;
- Yellow says it leaps from tall grass and that its movement looks like a ninja's;
- Gold repeats movement too fast for the human eye to track;
- Silver says movement leaves a blur and protective coloration in grass makes it “invisible”;
- Crystal says opponents may not know what knocked them down because of its speed;
- Ruby/Sapphire/Emerald say speed enhances scythe effectiveness and that thick logs can be cut in one stroke;
- FireRed says it tears prey with its scythes and only very rarely uses its wings to fly;
- Diamond/Pearl call parrying its scythes nearly impossible and again use ninja analogy;
- Platinum and later reuse explicitly tie hard-object cutting to sharper scythe edges.

### D1 boundaries

```text
scyther_forearm_scythes_are_body_integrated_anatomy == source_backed
scyther_extreme_visual_relative_speed == source_backed
scyther_hard_object_cutting_sharpens_scythes == source_backed
scyther_preys_with_scythes == source_backed
scyther_rare_winged_flight == version_scoped_source_backed
scyther_grass_camouflage == version_scoped_source_backed
ninja_like_motion == analogy_not_human_training_identity
illusion_of_multiple_scyther == speed_perception_effect_not_extra_entities
invisible_in_grass_wording == version_scoped_camouflage_not_generic_invisibility
thick_log_one_stroke == version_scoped_extraordinary_material_claim
nearly_impossible_to_parry == version_scoped_reputation_not_auto_hit
prey_escape_thwarted_equals_high_pursuit_pressure_not_no_escape_rule
scythes_equal_detachable_weapons_or_automatic_live_harvest == false
scythe_sharpening_equals_equipment_durability_system == false
cutting_hard_objects_equals_universal_material_or_terrain_deletion == false
Speed_5_equals_guaranteed_first_action_evasion_or_teleportation == false
rare_flight_equals_unrestricted_travel_or_passenger_transport == false
```

The scythes are living anatomy first. Shed/damaged material, if ever authored, requires separate biological/provenance support; the dossier must not create a renewable weapon-harvesting loop from a living companion.

### U1 unresolved

```text
scyther_exact_scythe_material_properties_and_regrowth == unresolved
scyther_exact_camouflage_effectiveness_by_environment == unresolved
scyther_exact_visual_tracking_threshold == unresolved
scyther_exact_flight_duration_load_and_frequency == unresolved
scyther_exact_material_limit_for_one_stroke_cutting == unresolved
scyther_pursuit_abandonment_conditions == unresolved_and_event_bounded
```

## 10. #127 Pinsir evidence packet

### C1/C2 facts retained

Current official material supports body-integrated pincer danger plus temperature-sensitive ecology:

- `OBSERVED / ANATOMY`: Pinsir's large pincers are powerful natural weapons;
- `OBSERVED / ECOLOGY`: it handles cold poorly and changes where/how it rests under cold conditions;
- `CURRENT_REGION_SOCIAL_EVIDENCE`: later-region current material describes territorial disputes with Vikavolt and a comparatively amicable relationship with Heracross in Alola.

Historical evidence supplies stronger lifting, crushing and shelter behavior:

- Red/Blue say it crushes prey in its pincers or swings/tosses what it cannot crush;
- Yellow says it grips prey hard and cannot move well in the cold, favoring warm places;
- Gold says it digs sleeping burrows using its pincer horns;
- Silver/Crystal describe hiding deeply or sleeping among treetops/roots as temperature drops;
- Ruby says it can lift a foe weighing roughly twice its own weight and becomes sluggish in cold places;
- Sapphire describes horn thorns driven into gripped prey, making escape difficult;
- Emerald says pincers can shatter thick logs and that it burrows underground to sleep on chilly nights;
- FireRed and Diamond/Pearl/Platinum use very severe tearing-and-not-releasing prey wording.

### D1 boundaries

```text
pinsir_powerful_body_integrated_pincers == source_backed
pinsir_cold_intolerance_or_sluggishness == source_backed
pinsir_sleep_burrowing_or_cover_seeking == version_scoped_source_backed
pinsir_roughly_twice_body_weight_lift_claim == version_scoped_measurement
pinsir_thick_log_shattering == version_scoped_extraordinary_material_claim
pinsir_difficult_release_or_escape_after_grip == source_backed_pressure
pinsir_vikavolt_disputes_and_alolan_heracross_relation == later_region_context
pincer_power_equals_universal_grapple_success == false
pincer_power_equals_fixed_crushing_force_or_structure_damage_formula == false
roughly_twice_weight_equals_generic_carry_capacity_or_player_transport == false
burrow_for_sleep_equals_generic_subterranean_traversal_or_mining == false
cold_intolerance_equals_exact_temperature_threshold_or_typewide_rule == false
difficult_escape_equals_unavoidable_capture_or_agency_removal == false
pincers_equal_detachable_horn_weapons_or_live_harvest == false
alolan_relationship_equals_proto_kanto_ecology == false
Mega_Pinsir_equals_ordinary_pinsir_flight == false
```

Pinsir can support severe close-range restraint/crushing hazards, but the target, leverage, position and authored encounter state matter. A body-weight ratio from one version is evidence about exceptional lifting capability, not a universal carrying equation.

### U1 unresolved

```text
pinsir_exact_pincer_force_and_material_limits == unresolved
pinsir_exact_cold_temperature_threshold == unresolved
pinsir_sleep_burrow_depth_and_traversability == unresolved
pinsir_grip_release_conditions_against_nonprey_targets == unresolved
pinsir_proto_kanto_relationships_with_heracross_or_other_bugs == unresolved
```

## 11. Cross-species contract regressions

| Evidence pressure | Safe P4 interpretation | Forbidden automatic rule |
|---|---|---|
| Mankey abrupt anger / colony escalation | authored warning and social-escalation states | universal rage meter, permanent hostility, pack telepathy |
| Mankey “no time to flee” wording | version-scoped severe encounter pressure | global no-flee rule or player-agency removal |
| Primeape gaze-triggered fury | perception-dependent authored escalation | omnidirectional detection, auto-initiative, eye-contact engine subsystem |
| Primeape extreme pursuit | bounded pursuit state with authored exits/consequences | infinite chase/pathfinding or guaranteed combat |
| Hitmonlee extending legs | species-local flexible melee reach | arbitrary grapple/traversal, extra actions, skeletal simulation |
| Hitmonlee hardening sole | contextual strike capability | universal armor penetration or force equation |
| Hitmonchan combinations | one authored action/effect may contain multiple punches | extra turns, one action per fist, free follow-up economy |
| Hitmonchan 300+ mph / bullet-train wording | claim-level extreme strike-speed evidence | initiative/travel/kinetic-energy conversion |
| Hitmonchan three-minute recovery | authored prolonged-fight cadence/opening | real-time global cooldown or boxing-round timer |
| boxer / kick-master / ninja language | analogy, reputation or later human cultural context | proto-Kanto dojo, boxing league, profession or standardized curriculum |
| Scyther high-speed blur/camouflage | difficult visual tracking in supported contexts | teleportation, permanent invisibility, auto-evasion |
| Scyther scythes / Pinsir pincers | body-integrated natural weapons | detachable equipment, automatic loot, live-harvest loop |
| log/concrete/material feats | species-local severe capability evidence | universal material deletion or destructible-world system |
| Pinsir grip / lift | authored restraint and leverage pressure | automatic grapple success or global carry-capacity formula |
| cold response | species-local ecology/state pressure | exact generic cold-damage rule without authored support |
| later evolutions/forms/regions | provenance and chronology context | automatic baseline presence or mechanic adoption |

Evolution-stage/family inheritance remains evidence-gated. Mankey's group behavior is not silently copied to Primeape. Primeape's later Annihilape relationship does not retroactively establish a death/rage evolution law. Hitmonlee and Hitmonchan share later Tyrogue ancestry but do not inherit each other's distinct physiology. Scizor/Kleavor evidence is not silently copied to Scyther, and Mega Pinsir evidence is not ordinary Pinsir capability.

## 12. P2 / P3 / P4 contradiction and chronology audit

### Ancient-world chronology and human institutions

No reviewed claim requires normalized trainer ownership, Poké Balls, formal boxing, world championships, professional combat sports, dojos, ranked martial schools, bullet trains, concrete construction, modern scientists, standardized ability terminology or Mega Evolution in proto-Kanto.

- current Primeape Poké Ball wording is explicitly researcher-theory evidence in a later technological context;
- boxer/world-champion/pro-boxer wording for Hitmonchan is historical legend/reputation/analogy, not proof that the ancient setting must reproduce those institutions;
- “Kick Master” and “ninja-like” are descriptive/reputational labels, not historical proof of human teachers;
- bullet trains and concrete are comparison/material references in later source text, not required ancient infrastructure;
- later family members, forms, abilities and regional observations remain provenance context.

D2 ancient martial myths or local names may be authored where useful, but invented names, schools or beliefs must be labeled as project-owned setting content rather than franchise canon.

### Player agency, anger and pursuit

Mankey/Primeape contain some of the strongest no-escape-sounding wording in the current P4 sample. Existing P3 agency-safe encounter handling remains sufficient:

```text
source_supports_extreme_pursuit != infinite_pursuit_engine_rule
source_says_no_time_or_impossible_to_flee != remove_all_player_escape_resolution
anger_trigger != automatic_hostility_from_all_instances
high_severity_encounter != silent_input_suppression
```

A later event may legitimately close a previously available option because of an authored state transition, but it must do so through explicit situation logic, warnings/causes and consequences rather than a hidden species-wide override.

### One-entity / action economy

All six remain one Pokémon, one ordinary turn, one health state, one initiative presence and one visible companion slot. Bilateral legs, two fists, two forearm scythes or two pincer horns do not create additional entities or action slots. A “combination” can be one action's fiction/effect.

### Natural weapons, materials and resource safety

Hitmonlee legs/feet, Hitmonchan fists, Scyther scythes and Pinsir pincers are living anatomy. None of the reviewed evidence authorizes automatic removal, equipment conversion, durability slots, live harvesting or repeatable crafting extraction. Severe material feats justify threat/capability tags and authored obstacle interactions, not a general destructible environment.

### Encounterability and presence

D-034 remains unchanged:

```text
all_151_directly_encounterable_somewhere_in_total_content == true
baseline_era_natural_presence_everywhere == false
regional_abundance_equalization == false
```

All six Batch 17 species can receive direct authored encounters somewhere without making them common, evenly distributed, culturally normalized, easily companionable or naturally present in every proto-Kanto region.

### Ordinary versus exceptional individuals

No reviewed claim changes D-031. Ordinary species baselines remain fixed and do not scale with player progression. An exceptional ancient individual — for example a Primeape with a long remembered pursuit history, a Scyther whose scythes bear unusual wear, or a Pinsir occupying a dangerous winter refuge — requires explicit persistent authored history/traits rather than hidden elite scaling.

```text
p2_contradiction_count == 0
p3_contradiction_count == 0
p4_contract_contradiction_count == 0
blocking_human_design_gate_count == 0
```

## 13. P5 / P6 handoff implications

Batch 17 intentionally yields discrete authored states/hooks rather than continuous simulation requirements. Candidate directions include:

```text
mankey.group_separation_pressure
mankey.anger_warning_visible
mankey.colony_escalation_candidate

primeape.gaze_linked_escalation
primeape.bounded_pursuit_active
primeape.fury_judgment_tradeoff_candidate

hitmonlee.extended_kick_reach
hitmonlee.impact_hardening_strike
hitmonlee.leg_fatigue_recovery

hitmonchan.combo_sequence
hitmonchan.prolonged_fight_recovery_opening
hitmonchan.extreme_strike_speed_reputation

scyther.visual_blur_or_low_trackability
scyther.grass_ambush_candidate
scyther.scythe_edge_condition
scyther.rare_flight_candidate

pinsir.pincer_restraint_pressure
pinsir.cold_sluggish_state
pinsir.night_shelter_or_burrow_state
```

These are content directions, not frozen engine field names. P5 should evaluate them on discrete event eligibility/state transitions. P7 should prefer cached authored/state lookup rather than per-frame rage, line-of-sight, limb-extension, projectile-speed, collision, material-fracture, temperature or pursuit simulation unless later implementation evidence proves a concrete need.

No reviewed claim requires:

```text
continuous_rage_simulation == false
continuous_infinite_pursuit_pathfinding == false
continuous_limb_physics == false
continuous_kinetic_energy_simulation == false
continuous_material_destruction == false
continuous_temperature_simulation == false
per_frame_species_rule_scanning == false
```

## 14. Human Design Gate result

**No blocking Human Design Gate is required.**

The reviewed pressure fits existing owner-approved contracts:

- fixed six-axis species baselines plus explicit exceptional-individual history;
- species-local capability/hazard tags separate from type-wide permissions;
- one entity / one ordinary turn regardless of limb count or combo wording;
- player-agency-safe escalation, pursuit, warning and consequence handling;
- evidence/provenance classes that preserve numeric, analogy, theory and extraordinary wording without literalizing it;
- living anatomy separated from equipment/resource semantics;
- later evolutions/forms/regions separated from mandatory Gen-I baseline;
- D-034 direct encounterability separated from baseline natural abundance;
- hazard severity separated from six-axis raw-stat interpretation.

Raise a Human Design Gate during dossier authoring only if a durable owner-facing rule is discovered that cannot be represented through these existing contracts. None is currently required.

## 15. Coverage and promotion discipline

The coverage manifest is intentionally unchanged by this source review:

```text
dossier_complete_count == 123
pilot_reviewed_count == 2
not_started_count == 26
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The six Batch 17 rows remain:

```text
#056 mankey     = not_started
#057 primeape   = not_started
#106 hitmonlee  = not_started
#107 hitmonchan = not_started
#123 scyther    = not_started
#127 pinsir     = not_started
```

Only after all six frozen-schema dossiers, the Batch 17 dossier index/regression summary, provenance/contradiction checks and the Batch 17 completion audit pass may exactly those six rows be promoted atomically. Expected post-promotion coverage would then be:

```text
dossier_complete_count == 129
pilot_reviewed_count == 2
not_started_count == 20
```

## 16. Review validation summary

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
coverage_manifest_changed == false
ready_for_full_schema_authoring == true
```

## Next

Author the six Batch 17 frozen full-schema dossiers for #056, #057, #106, #107, #123 and #127, create the Batch 17 dossier index/regression summary and completion audit, and only then promote exactly those six manifest rows if every check passes. Do not begin P5.
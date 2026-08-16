# P4 Batch 21 — Source Review

Status: **SOURCE REVIEW COMPLETE — NO BLOCKING HUMAN DESIGN GATE / READY FOR FULL-SCHEMA AUTHORING**  
Date: **2026-08-16**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_21_CLAW_TONGUE_CONTACT_PLAN.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P2_CANON_DERIVATION_AND_TECH_ISLAND_CONTRACT.md`, `docs/WORLD_BIBLE.md`

## 1. Review purpose

Batch 21 reviews the final three `not_started` Generation-I species before any coverage-manifest promotion:

- #098 Krabby
- #099 Kingler
- #108 Lickitung

The batch stresses natural-weapon force, shell/claw anatomy, asymmetric pincer morphology, lateral locomotion, pincer loss/regrowth, territorial ecology, appendage communication, fatigue/aiming counterweights, long-tongue dexterity, contact-based texture/taste memory, sticky saliva, irritation/paralysis wording and later Hisui adhesive-processing evidence.

The review confirms that existing P2/P3/P4 contracts can preserve these claims without adding generic mining, arbitrary material deletion, a limb-health simulator, instant regeneration, detachable natural-weapon loot, extra appendage actions, continuous exertion physics, a tactile scanner, unrestricted grappling/tool use, automatic contact statuses, continuous contamination polling, or a normalized biological-adhesive economy.

```text
pincer_force_equals_generic_mining_or_material_deletion == false
multiple_appendages_equal_extra_turns_or_entities == false
pincer_loss_equals_continuous_limb_health_simulation == false
regrowth_equals_instant_regeneration_or_resource_farming == false
kingler_10000_horsepower_equals_literal_damage_formula == false
asymmetric_claw_equals_automatic_hit_or_extra_attack == false
tongue_dexterity_equals_generic_hands_tools_or_grappling == false
texture_taste_memory_equals_omniscient_identification == false
sticky_saliva_equals_guaranteed_restraint_or_attachment == false
lick_contact_equals_automatic_paralysis_rash_or_itch == false
hisui_adhesive_evidence_equals_proto_kanto_industry == false
continuous_contact_or_appendage_polling_required == false
```

The safe representation remains claim-level and source-scoped. Current observation, historical/version-scoped wording, measured/source-scale language, researcher interpretation, contextual ecology, later-era provenance, analogy/reputation and modern battle-system metadata remain separate rather than being flattened into universal runtime rules.

## 2. Source and epistemic-provenance rule

Existing P4 provenance classes remain authoritative:

- **C1** — direct official Pokémon Pokédex/species fact;
- **C2** — cross-source official synthesis;
- **D1** — conservative interpretation directly bounded by one or more source facts;
- **D2** — project-authored ancient-setting extrapolation, never presented as franchise canon;
- **U1** — unresolved detail deliberately left unknown.

Batch 21 records claim form where it materially affects adaptation:

- `OBSERVED` — anatomy, behavior or event described as occurring;
- `MEASURED_OR_SCALE` — numeric or comparative scale wording that must not become a direct runtime formula;
- `CONTEXTUAL_ECOLOGY` — habitat, feeding, territory, recovery or locomotion context;
- `RESEARCHER_INTERPRETATION` — possibility/theory wording that must remain epistemically weaker than observation;
- `VERSION_SCOPED_EXTRAORDINARY` — historical wording materially stronger or more absolute than the safe common minimum;
- `LATER_ERA_PROVENANCE` — later-region/era observation usable as provenance without establishing baseline proto-Kanto institutions;
- `CROSS_SOURCE_SYNTHESIS` — multiple official statements support a bounded common minimum;
- `PROJECT_EXTRAPOLATION` — ancient-setting content required by this project but not asserted as franchise canon.

Pinned structured revision remains:

```text
SRC-DATA-001 = PokeAPI/api-data @ 2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

`SRC-DATA-001` supplies deterministic raw stats, types, abilities, family/evolution metadata and version-tagged Pokédex evidence. It remains an evidence carrier under the existing provenance contract, not an independent franchise-canon authority. Current official Pokémon Pokédex pages remain the primary current-text cross-check.

Official Pokédex source registry, rechecked 2026-08-16:

| Ref | Species | Official source |
|---|---|---|
| `OFFICIAL-DEX-KRABBY-SG` | Krabby | `https://sg.portal-pokemon.com/play/pokedex/0098` |
| `OFFICIAL-DEX-KINGLER-SG` | Kingler | `https://sg.portal-pokemon.com/play/pokedex/0099` |
| `OFFICIAL-DEX-LICKITUNG-SG` | Lickitung | `https://sg.portal-pokemon.com/play/pokedex/0108` |

The separate Gigantamax Kingler form is post-Generation-I transformation context and is excluded from ordinary Kingler capability derivation.

Historical entries are retained only where they sharpen anatomy/ecology, show consistent cross-version pressure, or expose stronger claims that require an explicit boundary. Absolute historical wording is not silently promoted into a universal runtime invariant.

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
| Krabby | 30/105/90/25/25/50 | 1/5/4/1/1/2 |
| Kingler | 55/130/115/50/50/75 | 2/6/5/2/2/3 |
| Lickitung | 90/55/75/60/75/30 | 4/2/3/3/3/1 |

```text
rating_profile_reproducible_count == 3
manual_rating_exception_count == 0
```

The six-axis ratings do not directly encode pincer severing/regrowth, shell hardness, Kingler's source-scale crushing claim, aim/balance/fatigue costs, tongue reach/dexterity, tactile/gustatory memory, adhesion strength, irritation or paralysis risk.

## 4. Type, ability, family and modern-mechanic boundary

Current official typing remains:

```text
Krabby     Water
Kingler    Water
Lickitung  Normal
```

Pinned ability metadata is retained as modern battle-system context rather than literal ancient trigger formulas:

- Krabby / Kingler: `Hyper Cutter`, `Shell Armor`; hidden `Sheer Force`;
- Lickitung: `Own Tempo`, `Oblivious`; hidden `Cloud Nine`.

```text
Hyper_Cutter_equals_pincer_cannot_be_impaired_or_lost == false
Shell_Armor_equals_invulnerability_or_no_weak_points == false
Sheer_Force_equals_literal_force_multiplier_or_material_deletion == false
Own_Tempo_equals_immunity_to_all_disorientation_or_fear == false
Oblivious_equals_universal_social_or_sensory_immunity == false
Cloud_Nine_equals_species_weather_control_or_global_weather_nullification == false
```

Family/evolution context remains chronology-safe:

```text
Krabby -> Kingler       [mandatory Gen-I line]
Lickitung -> Lickilicky [post-Generation-I evolution context]
```

Pinned evolution-chain metadata records modern `level-up` at level 28 context for Krabby -> Kingler. It also records Lickitung -> Lickilicky as a Diamond/Pearl-era evolution requiring known move `Rollout` plus level-up. Under D-032 these are provenance/mechanic context, not ancient level gates, a visible leveling system, guaranteed Rollout-trigger law or mandatory Lickilicky presence.

## 5. #098 Krabby evidence packet

### C1/C2 facts retained

Current official material supports a narrow minimum:

- `CONTEXTUAL_ECOLOGY / HABITAT`: Krabby can be found near the sea;
- `OBSERVED / REGENERATION`: its large pincers grow back if torn out of their sockets;
- `OBSERVED / DISPLAY`: when danger approaches it can cloak itself in bubbles from its mouth to look larger.

Pinned historical/version-tagged evidence adds:

- Red/Blue and LeafGreen describe the pincers as powerful weapons that are also used for balance while walking sideways;
- Yellow says pincers may break off during battle and grow back quickly;
- Silver/SoulSilver say losing a pincer makes Krabby unable to walk sideways in that version's wording;
- Crystal says a food-deprived Krabby can swallow sand to absorb nutrients;
- Ruby/Sapphire/Emerald describe beach burrows and territorial squabbling where food is scarce;
- Diamond/Pearl/Platinum repeat sandy-beach burrows and full pincer regrowth after breakage.

### D1 boundaries

```text
krabby_powerful_pincers == source_backed
krabby_pincers_support_lateral_balance == historical_cross_source_backed
krabby_pincer_loss_and_regrowth == source_backed
krabby_bubble_size_display == source_backed
krabby_beach_burrow_ecology == historical_cross_source_backed
krabby_food_scarcity_territorial_squabbling == historical_cross_source_backed
krabby_sand_nutrient_behavior == historical_version_scoped_source_backed
pincer_weapon_wording_equals_detachable_inventory_weapon == false
pincer_loss_equals_free_loot_or_automatic_harvest == false
regrowth_equals_instant_recovery_or_continuous_regeneration_timer == false
two_pincers_equal_two_attacks_or_extra_turns == false
lateral_balance_equals_generic_crab_locomotion_system == false
bubble_display_equals_forced_fear_or_free_defensive_action == false
territorial_squabbling_equals_permanent_aggression == false
sand_nutrient_behavior_equals_generic_soil_eating_or_survival_immunity == false
```

Stable gameplay minimum: **a small but physically dangerous littoral burrower whose pincers matter for fighting and lateral balance, whose threat display is visible, and whose appendage loss/recovery can change authored encounter options without becoming a limb simulator or renewable weapon resource.**

### Event-scoped representation

A Krabby encounter may author discrete facts such as:

```text
pincer_state = intact | one_lost | recovering
locomotion_context = normal_lateral | impaired_lateral
warning_display = none | bubble_display
territory_pressure = low | contested
```

These are scene facts, not continuously simulated anatomy. `one_lost` may remove or worsen specific pincer-dependent options and alter lateral movement if the scene needs it; it does not add a second health pool or create per-frame regeneration.

### U1 unresolved

```text
krabby_exact_regrowth_time == unresolved
krabby_exact_pincer_force == unresolved_and_not_formulaized
krabby_exact_lateral_impairment_from_one_lost_pincer == unresolved
krabby_exact_bubble_display_fear_effect == unresolved_and_not_automatic
krabby_exact_sand_nutrient_efficiency == unresolved
```

No Human Design Gate is required; dossier authoring can leave those quantities unresolved.

## 6. #099 Kingler evidence packet

### C1/C2 facts retained

Current official material supports:

- `MEASURED_OR_SCALE / FORCE`: the large hard pincer is described as having `10,000-horsepower` strength;
- `OBSERVED / HANDLING_COST`: the same source explicitly says the pincer is so large that it is unwieldy to move;
- `OBSERVED / NONCOMBAT_COST`: another current entry says the oversized claw is powerful but gets in the way outside battle.

Pinned historical evidence adds important counterweights and morphology detail:

- Red/Blue repeat extreme crushing power paired with unwieldiness;
- Yellow describes one claw growing massively, becoming hard as steel, carrying the same extreme strength wording, and being too heavy;
- Gold/HeartGold say Kingler can hardly lift the overgrown pincer and has difficulty aiming it;
- Silver/SoulSilver say lifting the pincers too fast can make Kingler lose balance and stagger;
- Crystal repeats that the oversized claw is powerful but obstructive outside battle;
- Ruby/Sapphire/Emerald say Kingler waves the oversized claw to communicate with others and quickly tires because the claw is so heavy;
- FireRed/LeafGreen and several later entries preserve the `10,000-horsepower` source-scale wording plus unwieldiness/aim difficulty.

### D1 boundaries

```text
kingler_massively_enlarged_pincer == source_backed_cross_source
kingler_extreme_pincer_force_wording == source_backed_measured_or_scale
kingler_pincer_unwieldiness == source_backed_cross_source
kingler_aim_difficulty == historical_cross_source_backed
kingler_balance_stagger_pressure == historical_version_scoped_source_backed
kingler_claw_waving_communication == historical_cross_source_backed
kingler_heavy_claw_fatigue == historical_cross_source_backed
10000_horsepower_equals_literal_damage_force_or_energy_formula == false
steel_hard_wording_equals_universal_armor_or_material_class == false
extreme_pincer_force_equals_generic_mining_or_structural_deletion == false
large_pincer_equals_automatic_hit_instant_kill_or_guaranteed_restraint == false
one_large_claw_equals_extra_action_entity_health_pool_or_initiative == false
communication_wave_equals_free_action_or_human_language == false
fatigue_equals_continuous_stamina_meter_or_real_time_energy_simulation == false
```

Stable gameplay minimum: **a heavily armored, exceptionally forceful pincer user whose single oversized claw can create severe eligible consequences while its mass imposes explicit handling, aim, balance and fatigue constraints. Extreme force remains source-scale capability evidence rather than a universal physics or destruction permission.**

### Severe-force resolution rule

Kingler is allowed to be genuinely dangerous. The safe boundary is not to cap the fiction to ordinary human strength; it is to keep consequences conditional:

```text
severe_crush_requires_eligible_position_or_contact == true
warning_or_readable_threat_where_possible == true
counterplay_or_avoidance_before_irreversible_consequence == true
player_input_preserved == true
material_or_target_suitability_is_authored == true
generic_destroy_anything_permission == false
```

A rare exceptional Kingler can be boss-grade through persistent history/traits without player-level scaling. Ordinary Kingler still uses the fixed `2/6/5/2/2/3` species baseline; high Force does not imply automatic aggression or guaranteed attacks.

### U1 unresolved

```text
kingler_exact_pincer_force_in_physical_units == unresolved_and_not_formulaized
kingler_exact_aim_penalty == unresolved_and_not_formulaized
kingler_exact_fatigue_duration_or_recovery == unresolved
kingler_exact_material_break_thresholds == unresolved
kingler_exact_claw_signal_vocabulary == unresolved
```

No Human Design Gate is required.

## 7. #108 Lickitung evidence packet

### C1/C2 facts retained

Current official material supports several distinct claims that must remain separate:

- `OBSERVED / CONTACT_SENSING`: Lickitung checks surrounding things by licking them;
- `OBSERVED / CONTACT_HAZARD`: an area it has licked can develop a rash if not cleaned;
- `OBSERVED / CLEANING_BEHAVIOR`: it can lick filth from things, though what it licks is left smelling unpleasant;
- `LATER_ERA_PROVENANCE / DEXTERITY`: current Hisui-era text describes wielding the long tongue deftly like an arm;
- `LATER_ERA_PROVENANCE / RESOURCE_PROCESSING`: the same Hisui-era text says collected viscous saliva can be boiled down into a strong useful adhesive.

Pinned historical/version-tagged evidence adds a broad and consistent anatomy packet:

- Red/Blue and LeafGreen describe a chameleon-like extendable tongue and tingling after licking an enemy;
- Yellow and Let's Go describe a tongue nearly seven feet / about two meters long, more freely or deftly moved than the forelegs, with paralysis wording after licks;
- Gold/HeartGold describe well-developed nerves reaching the tongue tip and fine manipulation;
- Silver/SoulSilver describe gooey saliva that sticks to things;
- Crystal describes a tongue over 6'6" used to lick its body clean;
- Ruby/Sapphire/Emerald and Omega Ruby/Alpha Sapphire say Lickitung licks unfamiliar things because it remembers them by texture and taste, with an aversion to sour things;
- FireRed says the tongue is twice body length and can act like an arm for grabbing food and attacking;
- Diamond/Pearl say it uses the tongue instead of hands and that sticky saliva grips things;
- Platinum/Black/White say the tail quivers when the long tongue extends and present their connection only as a possibility;
- Black 2/White 2 repeat tingling/contact wording and tail movement;
- Ultra Sun and Sword-era wording gives stronger irritation/rash/itch consequences if saliva is left on the contacted area.

### Epistemic split

The dossier must not collapse all of that into one `tongue = magic hand/scanner/status applicator` rule.

```text
lickitung_long_tongue == source_backed_cross_source
lickitung_tongue_fine_control == source_backed_cross_source
lickitung_tongue_used_for_grabbing_food_and_attack == historical_cross_source_backed
lickitung_texture_taste_memory == historical_cross_source_backed
lickitung_sticky_saliva == source_backed_cross_source
lickitung_contact_tingling == historical_cross_source_backed
lickitung_contact_paralysis_wording == historical_version_scoped_extraordinary
lickitung_rash_or_intense_itch_if_not_cleaned == current_and_later_source_backed
lickitung_tail_tongue_connection == researcher_possibility_not_confirmed_mechanism
lickitung_processed_saliva_adhesive == current_official_hisui_later_era_provenance
```

### D1 boundaries

```text
tongue_like_arm_equals_generic_hands_or_unrestricted_tool_proficiency == false
tongue_length_equals_unrestricted_range_or_map_scale_reach == false
tongue_contact_equals_guaranteed_grapple_or_restraint == false
sticky_saliva_equals_every_material_always_adheres == false
texture_taste_memory_equals_remote_scan_omniscience_or_perfect_identification == false
licking_unknown_object_equals_automatic_safe_identification == false
tingling_or_paralysis_wording_equals_automatic_status_on_every_lick == false
rash_or_itch_wording_equals_unavoidable_permanent_condition == false
saliva_contact_equals_continuous_contamination_polling == false
cleaning_behavior_equals_sanitation_system_or_disease_immunity == false
hisui_processed_adhesive_equals_proto_kanto_recipe_industry_or_market == false
saliva_resource_equals_automatic_live_harvest_or_companion_production_loop == false
```

Stable gameplay minimum: **a slow, durable contact-oriented species whose long highly innervated tongue can manipulate nearby objects and learn texture/taste information through actual contact, while sticky saliva and skin irritation create bounded exposure hazards rather than generic hands, omniscient sensing or automatic status application.**

### Contact-information boundary

Lickitung can gain useful information by touching/licking something, but only information plausibly available through texture/taste/contact cues:

```text
requires_actual_contact == true
reveals_contact_accessible_cues == true
reveals_hidden_identity_by_default == false
reveals_remote_or_occluded_state == false
bypasses_poison_pathogen_or_hazard_risk == false
continuous_scan_loop_required == false
```

Examples of safe authored cues include texture, residue, saltiness/sourness, unfamiliar coating, surface contamination or whether a contacted material is sticky/rough/smooth. Exact chemistry, ownership, history, magical truth or concealed internal state are not automatically revealed.

### Contact-hazard boundary

The strongest historical/current contact wording remains serious but agency-safe:

```text
contact_or_saliva_exposure_required == true
warning_or_observable_behavior_where_possible == true
cleaning_or_other_counterplay_can_matter == true
severity_is_authored_per_exposure == true
automatic_paralysis_on_every_lick == false
permanent_itch_or_rash_by_default == false
player_input_removal == false
```

A severe authored incident may still produce meaningful temporary impairment if exposure and resolution justify it. Hazard severity is not capped by Lickitung's low Force/Speed ratings.

### Hisui adhesive boundary

The current official page includes a Hisui-era processing use. Because this project is earlier than Hisui, the evidence is handled as follows:

- C1 provenance supports that Lickitung saliva can possess strong adhesive potential after collection and boiling;
- the documented human processing/use belongs to later-era Hisui context;
- proto-Kanto does not automatically inherit the recipe, terminology, production chain, specialist trade or market;
- a dossier may use raw stickiness as observable physiology now;
- any earlier discovery/use must be narrow D2 authored content and must not normalize live harvesting or industrial supply.

This preserves source truth without smuggling a later technological institution backward into the baseline.

### U1 unresolved

```text
lickitung_exact_tongue_max_reach_per_individual == unresolved_beyond_source_scale
lickitung_exact_adhesion_strength_by_material == unresolved
lickitung_exact_contact_information_precision == unresolved
lickitung_exact_irritation_or_paralysis_probability == unresolved_and_not_formulaized
lickitung_exact_saliva_cleanup_or_recovery_time == unresolved
lickitung_tail_tongue_mechanism == intentionally_unresolved
proto_kanto_processed_adhesive_discovery == not_assumed
```

No Human Design Gate is required.

## 8. Cross-species one-entity/action-economy regression

Batch 21 is especially vulnerable to accidental action inflation because all three species center on prominent appendages.

Binding invariant:

```text
one_pokemon == one_ordinary_turn
one_pokemon == one_health_state
one_pokemon == one_initiative_presence
one_pokemon == one_visible_companion_slot
```

Therefore:

- Krabby's two pincers do not create two attack actions;
- a lost pincer does not become a detached actor, inventory weapon or additional target entity;
- Kingler's oversized claw does not create a separate initiative, health pool or free reaction;
- waving a Kingler claw to communicate does not add an action outside the ordinary scene/action economy unless the scene explicitly spends/combines an ordinary action as already permitted by P3;
- Lickitung's tongue acting like an arm does not create an extra hand-slot subsystem or additional action channel;
- simultaneous-looking anatomy is resolved as one authored action with fictional positioning, not parallel appendage threads.

## 9. Natural-weapon / material-interaction regression

P4 continues to separate **capability evidence** from **universal permission**.

```text
strong_natural_weapon_can_break_some_authored_targets == true
source_claim_establishes_every_material_threshold == false
generic_mining_permission == false
generic_terrain_deletion == false
generic_armor_deletion == false
automatic_inventory_damage == false
continuous_durability_simulation == false
```

Krabby and Kingler may crack, crush, cut or grip things in scenes where target material, positioning and consequence are authored. Kingler's Force 6 plus extreme Pokédex wording means the ceiling can be severe. It still does not imply `can destroy any object` or require real-world horsepower conversion.

Lickitung adhesion similarly remains material/context-sensitive rather than a universal attach flag.

## 10. Locomotion, water and habitat boundary

Krabby/Kingler are Water-type coastal/crablike species, but this review does not infer a generic Water traversal rule.

Source-backed minimums emphasize near-sea/sandy-beach ecology and lateral locomotion for Krabby. The dossiers may author littoral, tidal, estuarine or shoreline encounter contexts conservatively where supported by project geography, but exact swim speed, underwater endurance and unrestricted open-ocean travel are not derived from typing alone.

```text
Water_type_equals_unrestricted_swimming == false
coastal_presence_equals_every_beach_commonness == false
krabby_lateral_walking_equals_land_immobility_in_other_directions == false
pincer_loss_equals_total_immobility == false
```

D-034 direct encounterability remains separate from abundance and habitat breadth.

## 11. Aggression, warning and player-agency boundary

None of the three species has source evidence that justifies universal aggression.

- Krabby territorial squabbling is food/territory context, not permanent hostility toward humans;
- Kingler's high Force is capability, not temperament;
- Lickitung's tendency to lick unfamiliar things creates approach/contact pressure, not a forced-contact cutscene.

Any severe pincer or saliva consequence must preserve P3 agency rules:

```text
readable_setup_or_warning_where_fiction_allows == true
eligibility_before_severe_consequence == true
counterplay_or_avoidance == true
escape_or_deescalation_when_context_supports_it == true
player_input_preserved == true
forced_contact_because_species_behavior_says_so == false
```

## 12. Companion and progression boundary

All three remain directly encounterable under D-034, but direct encounterability does not imply routine companionship.

Ordinary-species progression remains world/player-capability progression rather than player-relative enemy scaling:

- early characters may treat a Kingler as a severe local threat because of fixed high Force/Guard and pincer capability;
- later capable groups may handle ordinary Kingler more routinely because the humans improved, not because Kingler scaled;
- a rare exceptional Krabby, Kingler or Lickitung may remain boss-grade if it has explicit persistent history, scars, learned behavior, environmental advantages or authored traits;
- exceptional-individual state is persistent and legible rather than silently generated from player level;
- high stats never imply automatic aggression.

Companion eligibility, burdens and trust requirements remain dossier-authored and do not become universal catchability or ownership culture.

## 13. Runtime/performance guidance

No Batch 21 claim requires continuous simulation.

Later implementation should prefer cached/coarse authored state and event-triggered transitions:

```text
krabby_pincer_state               cached discrete fact
krabby_lateral_impairment         derived only when pincer-loss scene state matters
kingler_claw_ready_or_overextended cached encounter fact
kingler_fatigue_pressure          event-triggered after relevant exertion
lickitung_contact_target          event-scoped relation
lickitung_surface_residue         authored cue/result, not continuous chemistry
saliva_exposure                   discrete event/fact
cleanup_or_recovery               consequence transition, not per-frame contamination polling
```

Do not add:

- per-frame limb health/regrowth ticks;
- continuous claw torque/load simulation;
- physical horsepower conversion;
- continuous adhesion solver;
- per-frame tongue-contact overlap checks for narrative state;
- background tactile scans of nearby objects;
- continuous skin-contamination/itch timers unless a later implementation phase independently proves a need.

## 14. P2/P3/P4 contradiction audit

### P2 world/technology compatibility

No contradiction found.

- beach burrows, territorial ecology, natural weapons and unusual physiology fit the existing world contract;
- Lickitung's Hisui adhesive processing is kept as later-era provenance rather than evidence for a baseline proto-Kanto industry;
- no modern laboratory, Poké Ball, grid, machine, formal trainer culture or industrial supply chain is required.

### P3 rules / agency compatibility

No contradiction found.

- severe crushing/contact hazards require eligibility and preserve counterplay/player input;
- appendage prominence does not inflate action economy;
- contact sensing does not bypass investigation gameplay;
- no automatic permanent status or unavoidable grapple is required.

### P4 domain compatibility

No contradiction found.

- fixed deterministic species baselines remain intact;
- D-032 keeps modern level/move evolution metadata as source context;
- D-034 direct encounterability remains separate from commonness/companionship;
- high species stats do not imply aggression;
- exceptional individuals remain persistent-history authored state rather than player-level scaling;
- no generic Water traversal, mining, grapple, limb, crafting or contamination subsystem is introduced.

```text
p2_contradiction_count == 0
p3_contradiction_count == 0
p4_contract_contradiction_count == 0
blocking_human_design_gate_count == 0
continuous_simulation_requirement_count == 0
```

## 15. Coverage discipline

The coverage manifest remains unchanged during this source-review pass:

```text
dossier_complete_count == 146
pilot_reviewed_count == 2
not_started_count == 3
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

```text
coverage_manifest_changed == false
reviewed_species_count == 3
current_official_species_pages_verified == 3
pinned_species_records_reviewed == 3
rating_profile_reproducible_count == 3
manual_rating_exception_count == 0
blocking_human_design_gate_count == 0
ready_for_full_schema_authoring == true
```

Expected only after all three frozen-schema dossiers and the Batch 21 completion audit pass atomically:

```text
dossier_complete_count == 149
pilot_reviewed_count == 2
not_started_count == 0
```

That state still blocks P5 because `pilot_reviewed` is not equivalent to `complete`.

## 16. Frozen-schema authoring handoff

The next implementation pass should author exactly:

- `docs/P4_BATCH_21_DOSSIER_098_KRABBY.md`
- `docs/P4_BATCH_21_DOSSIER_099_KINGLER.md`
- `docs/P4_BATCH_21_DOSSIER_108_LICKITUNG.md`
- `docs/P4_BATCH_21_FULL_SCHEMA_DOSSIERS.md`
- `docs/P4_BATCH_21_COMPLETION_AUDIT.md`

Each dossier must populate all 20 frozen-schema top-level sections, reproduce the deterministic profile with zero manual exceptions, contain no placeholder TODO, introduce no blocking Human Design Gate, and preserve the boundaries in this review.

The Batch 21 completion audit must specifically recheck:

1. Krabby pincer loss/regrowth does not create detachable loot, instant regeneration or continuous limb simulation;
2. Krabby lateral-balance evidence remains event/species-local and territorial behavior is not universal aggression;
3. Kingler's extreme pincer force remains severe but target/position/eligibility-bounded and is not generic mining/material deletion;
4. Kingler's aim, balance and fatigue counterweights remain real without a continuous stamina/physics model;
5. all pincer/tongue anatomy preserves one Pokémon = one ordinary turn / health state / initiative presence / visible companion slot;
6. Lickitung contact sensing requires actual contact and only yields contact-accessible information;
7. Lickitung sticky saliva does not become universal hands/grapple/traversal/tool semantics;
8. tingling/rash/itch/paralysis evidence remains exposure-scoped, counterable and never automatic on proximity/every lick;
9. Hisui adhesive processing remains later-era provenance and does not introduce a proto-Kanto industry or routine live-harvest economy;
10. later runtime guidance remains cached/coarse authored state plus event-triggered consequences.

If all checks pass, atomically promote exactly #098, #099 and #108 from `not_started` to `complete / B21-new` and update the manifest audit to `149 complete / 2 pilot_reviewed / 0 not_started`.

## 17. Final P4 follow-up after Batch 21

Batch 21 is the final `not_started` batch, but not the final P4 exit action.

After Batch 21 dossier completion, #131 Lapras and #151 Mew remain `pilot_reviewed`. The next P4-only pass must audit those two pilot dossiers against the final frozen schema/contracts, fill any missing completion requirements without weakening their rare/singular treatment, promote them to `complete` only if the strict audit passes, and then run the mandatory `151/151` P4 exit audit.

P5 remains blocked until that final audit proves:

```text
dossier_complete_count == 151
pilot_reviewed_count == 0
not_started_count == 0
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

## 18. Source-review conclusion

**READY FOR FULL-SCHEMA AUTHORING.**

Batch 21 can preserve every reviewed claim with existing contracts:

- Krabby remains a pincer-dependent littoral species with real appendage loss/regrowth and contextual territorial pressure without a limb simulator or renewable weapon resource;
- Kingler remains genuinely extreme in pincer force while unwieldiness, aim difficulty, balance and fatigue keep the capability bounded without literal horsepower physics or generic destruction;
- Lickitung remains a distinctive contact-sensing/manipulating species with meaningful adhesion and irritation hazards while actual contact, counterplay and epistemic limits prevent omniscient scanning, automatic statuses or universal tool/grapple behavior;
- later Hisui adhesive processing remains provenance rather than a retroactively normalized proto-Kanto industry;
- all three preserve one-entity/action-economy invariants, D-034 encounterability, fixed non-player-scaled species baselines, persistent-history exceptional individuals and event-scoped runtime state;
- no new Human Design Gate or continuous-simulation requirement is introduced.

The next work is the three frozen-schema dossiers plus Batch 21 completion audit. Do not promote the manifest before that audit, and do not begin P5.
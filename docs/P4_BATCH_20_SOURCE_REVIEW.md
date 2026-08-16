# P4 Batch 20 — Source Review

Status: **SOURCE REVIEW COMPLETE — NO BLOCKING HUMAN DESIGN GATE / READY FOR FULL-SCHEMA AUTHORING**  
Date: **2026-08-16**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_20_CONSTRICTION_AMPHIBIOUS_LOCOMOTION_PLAN.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P2_CANON_DERIVATION_AND_TECH_ISLAND_CONTRACT.md`, `docs/WORLD_BIBLE.md`

## 1. Review purpose

Batch 20 reviews five remaining species selected to stress stealth/sensing, venom, intimidation, constriction, persistent pursuit, amphibious body plans, moist/slippery skin, drowsiness-linked visual anatomy, extreme swimming endurance and brief water-surface movement before any coverage-manifest promotion:

- #023 Ekans / #024 Arbok
- #060 Poliwag / #061 Poliwhirl / #062 Poliwrath

The review confirms that existing P2/P3/P4 contracts can preserve these claims without adding a generic stealth scanner, automatic poison engine, forced-Fear system, grapple simulator, infinite pursuit loop, hydration meter, passive hypnosis system, continuous swimming physics, stamina simulator, water-walking subsystem or hidden player-relative scaling.

```text
stealthy_movement_equals_invisibility_or_guaranteed_surprise == false
tongue_sensing_equals_omniscient_detection == false
venomous_species_equals_automatic_poison_on_proximity == false
intimidation_display_equals_forced_flee_or_input_loss == false
constriction_equals_unavoidable_or_permanent_restraint == false
persistent_pursuit_equals_infinite_chase_or_perfect_tracking == false
amphibious_evidence_equals_all_Water_types_are_amphibious == false
moist_or_slippery_skin_equals_continuous_hydration_or_guaranteed_escape == false
spiral_drowsiness_equals_passive_hypnosis_or_automatic_sleep == false
ocean_crossing_endurance_equals_infinite_stamina_or_literal_travel_formula == false
water_surface_running_equals_permanent_water_walking == false
```

The safe representation remains claim-level and source-scoped: retain current observation, historical/version-scoped wording, analogy/reputation, contextual biology, researcher interpretation and modern-mechanic metadata separately rather than flattening every sentence into a universal runtime rule.

## 2. Source and epistemic-provenance rule

Existing P4 provenance classes remain authoritative:

- **C1** — direct official Pokémon Pokédex/species fact;
- **C2** — cross-source official synthesis;
- **D1** — conservative interpretation directly bounded by one or more source facts;
- **D2** — project-authored ancient-setting extrapolation, never presented as franchise canon;
- **U1** — unresolved detail deliberately left unknown.

Batch 20 also records claim form where it matters:

- `OBSERVED` — anatomy, behavior or event described as occurring;
- `MEASURED_OR_SCALE` — numeric or comparative scale language that must not become a direct runtime formula;
- `ANALOGY_OR_REPUTATION` — reputation/comparison that must not become a universal rule;
- `VERSION_SCOPED_EXTRAORDINARY` — historical wording materially stronger or more absolute than the safe current minimum;
- `CONTEXTUAL_BIOLOGY` — age, feeding, moisture, habitat or other biological context;
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
| `OFFICIAL-DEX-EKANS-SG` | Ekans | `https://sg.portal-pokemon.com/play/pokedex/0023` |
| `OFFICIAL-DEX-ARBOK-SG` | Arbok | `https://sg.portal-pokemon.com/play/pokedex/0024` |
| `OFFICIAL-DEX-POLIWAG-SG` | Poliwag | `https://sg.portal-pokemon.com/play/pokedex/0060` |
| `OFFICIAL-DEX-POLIWHIRL-SG` | Poliwhirl | `https://sg.portal-pokemon.com/play/pokedex/0061` |
| `OFFICIAL-DEX-POLIWRATH-SG` | Poliwrath | `https://sg.portal-pokemon.com/play/pokedex/0062` |

Historical entries are retained only where they sharpen morphology/ecology or expose a stronger boundary. Absolute historical wording is not silently promoted into a universal runtime invariant.

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
| Ekans | 35/60/44/40/54/55 | 1/3/2/2/2/2 |
| Arbok | 60/95/69/65/79/80 | 3/4/3/3/3/4 |
| Poliwag | 40/50/40/40/40/90 | 2/2/2/2/2/4 |
| Poliwhirl | 65/65/65/50/50/90 | 3/3/3/2/2/4 |
| Poliwrath | 90/95/95/70/90/70 | 4/4/4/3/4/3 |

```text
rating_profile_reproducible_count == 5
manual_rating_exception_count == 0
```

The six-axis ratings do not directly encode venom severity, constriction escape difficulty, sensory range, intimidation strength, slippery-skin escape pressure, drowsiness exposure, amphibious endurance or water-surface movement.

## 4. Type, ability, family and modern-mechanic boundary

Current official typing remains:

```text
Ekans      Poison
Arbok      Poison
Poliwag    Water
Poliwhirl  Water
Poliwrath  Water / Fighting
```

Pinned ability metadata is retained as modern battle-system context rather than literal ancient trigger formulas:

- Ekans / Arbok: `Intimidate`, `Shed Skin`; hidden `Unnerve`;
- Poliwag / Poliwhirl / Poliwrath: `Water Absorb`, `Damp`; hidden `Swift Swim`.

```text
Intimidate_equals_automatic_human_Fear_or_attack_penalty == false
Shed_Skin_equals_guaranteed_condition_removal == false
Unnerve_equals_global_consumable_lockout == false
Water_Absorb_equals_universal_water_immunity_or_healing == false
Damp_equals_global_explosion_suppression_field == false
Swift_Swim_equals_exact_rain_speed_multiplier_in_diegesis == false
```

Family/evolution context remains chronology-safe:

```text
Ekans -> Arbok
Poliwag -> Poliwhirl -> Poliwrath   [mandatory Gen-I line]
                     -> Politoed    [post-Generation-I branch context]
```

Pinned evolution-chain metadata records modern `level-up` context for Poliwag -> Poliwhirl, `Water Stone` use for Poliwhirl -> Poliwrath, and later `King's Rock + trade` context for Politoed. Under D-032 these are provenance/mechanic context, not automatically valid ancient progression law, normalized trade evolution, guaranteed item availability or mandatory Politoed presence.

## 5. #023 Ekans evidence packet

### C1/C2 facts retained

Current official material supports a narrow minimum:

- `OBSERVED / FEEDING`: Ekans can open its jaw widely enough to swallow large prey whole and may become too heavy to move after doing so;
- `OBSERVED / SENSING`: it flicks its tongue to sense danger around it;
- `CONTEXTUAL_ECOLOGY`: grasslands are a common environment in the current description.

Pinned historical evidence adds:

- Red/Blue and later entries describe silent, stealthy movement and predation on bird eggs;
- Yellow/X-era text says the body becomes longer with age and describes resting wrapped around tree branches at night;
- Silver/SoulSilver say newly born Ekans lack poison and have a painful but harmless bite;
- Crystal says the tongue is used to seek the scent of prey;
- Ruby/Sapphire/Emerald describe a coiled resting posture that lets Ekans respond to threats from multiple directions;
- Diamond/Pearl/Platinum emphasize silent approach and rear ambush.

### D1 boundaries

```text
ekans_stealthy_movement == source_backed
ekans_tongue_based_sensing == source_backed
ekans_large_prey_swallowing == source_backed
ekans_post_feeding_mobility_penalty == source_backed_context
ekans_age_related_body_length == historical_version_scoped_source_backed
ekans_newborn_no_poison == historical_version_scoped_source_backed
stealthy_movement_equals_invisibility_or_guaranteed_surprise == false
tongue_sensing_equals_omniscient_detection_or_continuous_scan == false
large_prey_swallowing_equals_instant_kill_or_arbitrary_target_storage == false
newborn_no_poison_equals_continuous_age_simulator_requirement == false
venomous_species_identity_equals_automatic_poison_on_every_bite == false
```

Stable gameplay minimum: **a low-profile ambush predator with tongue-assisted sensing, age/context-sensitive venom evidence and a physically consequential feeding capability, all resolved through ordinary encounter state rather than automatic hidden detection or instant-kill logic.**

### U1 unresolved

```text
ekans_exact_sensory_range == unresolved
ekans_exact_swallowable_target_limit == unresolved
ekans_exact_venom_maturation_timing == unresolved
ekans_exact_post_feeding_mobility_duration == unresolved
```

## 6. #024 Arbok evidence packet

### C1/C2 facts retained

Current official material supports:

- `OBSERVED / INTIMIDATION`: the belly pattern resembles a frightening face and can make weak foes flee;
- `OBSERVED / PURSUIT`: once Arbok targets prey, it is described as extremely tenacious and willing to chase over long distance.

Pinned historical evidence adds materially stronger pressure:

- Red/Blue say belly warning patterns are rumored to differ by area;
- Yellow says six belly-pattern variations had been confirmed in that version's research framing;
- Gold/HeartGold describe transfixing prey with the face-like pattern, then binding and poisoning it;
- Crystal describes chest-spreading and eerie sounds produced by expelling air;
- Ruby/Sapphire/Emerald say Arbok has tremendous constricting strength, can flatten steel oil drums and use absolute wording that escape is impossible once wrapped;
- Diamond/Pearl/Platinum tie the intimidation pattern to constricting foes while they are frightened.

### D1 boundaries

```text
arbok_intimidation_display == source_backed
arbok_persistent_pursuit == source_backed
arbok_binding_and_poisoning_sequence == historical_cross_source_backed
arbok_extreme_constricting_force == historical_version_scoped_source_backed
arbok_belly_pattern_variation == historical_reputation_or_research_context
intimidation_equals_forced_human_Fear_flee_or_input_loss == false
persistent_pursuit_equals_infinite_chase_perfect_tracking_or_teleportation == false
constriction_equals_free_grapple_or_permanent_restraint == false
historical_escape_impossible_wording_equals_universal_no_escape_rule == false
steel_drum_flattening_equals_generic_mining_structural_deletion_or_material_simulator == false
binding_and_poisoning_equals_automatic_poison_without_exposure_resolution == false
```

Stable gameplay minimum: **a high-pressure pursuit predator whose warning display, constriction and venom can create severe consequences, while eligibility, positioning, counterplay, escape and player choice remain explicit.**

### U1 unresolved

```text
arbok_exact_constriction_force == unresolved_and_not_formulaized
arbok_exact_pursuit_distance_or_duration == unresolved
arbok_exact_belly_pattern_taxonomy_in_proto_Kanto == unresolved
arbok_exact_venom_delivery_or_dose == unresolved
```

## 7. #060 Poliwag evidence packet

### C1/C2 facts retained

Current official material supports:

- `OBSERVED / ANATOMY`: the belly spiral is internal anatomy visible through the skin and becomes clearer after feeding;
- `OBSERVED / LOCOMOTION`: newly grown legs are poor at walking and Poliwag prefers swimming.

Pinned historical evidence adds:

- Yellow says belly-spiral direction can differ by area;
- Silver/SoulSilver attribute spiral direction partly to the equator in scientist-like interpretation rather than direct causal proof;
- Ruby/Sapphire/Emerald describe very thin but flexible skin and unusually strong resistance to sharp fangs;
- FireRed/Crystal-era text reinforces thin, damp skin and visible internal anatomy;
- multiple versions repeatedly distinguish weak land walking from strong aquatic preference.

### D1 boundaries

```text
poliwag_visible_internal_spiral == source_backed
poliwag_newly_developed_legs_and_poor_land_walking == source_backed
poliwag_aquatic_preference == source_backed
poliwag_thin_flexible_skin == historical_cross_source_backed
poliwag_spiral_direction_area_variation == historical_source_backed
poor_land_walking_equals_automatic_immobilization == false
thin_flexible_skin_equals_universal_puncture_immunity_or_armor_multiplier == false
visible_internal_anatomy_equals_continuous_body_simulation == false
newly_grown_legs_equals_real_time_growth_or_maturation_simulator == false
Water_type_equals_unrestricted_aquatic_or_amphibious_traversal == false
```

Stable gameplay minimum: **an aquatic juvenile-form organism with meaningful land/water asymmetry and distinctive thin/flexible anatomy, represented by authored locomotion and hazard facts rather than a continuous maturation or physiology model.**

### U1 unresolved

```text
poliwag_exact_land_speed_or_endurance == unresolved
poliwag_exact_skin_puncture_limit == unresolved
poliwag_exact_spiral_direction_cause == unresolved
poliwag_exact_developmental_timing == unresolved
```

## 8. #061 Poliwhirl evidence packet

### C1/C2 facts retained

Current official material supports:

- `OBSERVED / AMPHIBIOUS`: Poliwhirl's legs are developed enough for ground living, although it prefers water;
- `OBSERVED / PHYSIOLOGY`: the body remains moist and the belly spiral is smooth.

Pinned historical evidence adds stronger pressure:

- Red/Blue and later X-era wording say Poliwhirl can live in or out of water and sweats on land to keep its body slimy;
- Yellow says it can use the belly spiral to put an attacking foe to sleep before escaping;
- Gold/HeartGold and Diamond/Pearl/Platinum describe the spiral as subtly undulating and capable of gradually causing drowsiness when stared at;
- Crystal says it is capable of walking but prefers safer underwater habitat;
- Ruby/Sapphire/Emerald describe an oily slick covering that helps it slip out of an enemy's clutches.

### D1 boundaries

```text
poliwhirl_amphibious_living == source_backed
poliwhirl_moist_slick_skin == source_backed_cross_source
poliwhirl_spiral_linked_drowsiness == historical_cross_source_backed
poliwhirl_slippery_escape_pressure == historical_version_scoped_source_backed
amphibious_living_equals_all_Water_types_are_amphibious == false
moist_skin_equals_continuous_hydration_meter_or_drying_damage_timer == false
slippery_skin_equals_guaranteed_escape_from_every_restraint == false
spiral_drowsiness_equals_passive_hypnosis_automatic_sleep_or_mind_control == false
spiral_effect_equals_continuous_per_frame_gaze_polling == false
```

Stable gameplay minimum: **a genuinely amphibious form with a moist/slippery defensive surface and a bounded visual drowsiness hazard that requires authored exposure and resolution rather than passive mind control.**

### U1 unresolved

```text
poliwhirl_exact_out_of_water_duration_or_moisture_requirement == unresolved
poliwhirl_exact_slippery_escape_bonus_or_probability == unresolved_and_not_formulaized
poliwhirl_exact_drowsiness_exposure_time == unresolved
poliwhirl_exact_visual_range_or_occlusion_rule == unresolved
```

## 9. #062 Poliwrath evidence packet

### C1/C2 facts retained

Current official material supports:

- `OBSERVED / LOCOMOTION`: Poliwrath is skilled in dynamic whole-body swimming while nevertheless living on dry land;
- `OBSERVED / BURST MOVEMENT`: developed limbs can support a split-second run across the water surface.

Pinned historical evidence adds extreme scale wording:

- Red/Blue and FireRed/LeafGreen compare its swimming skill favorably with top human swimmers and name multiple strokes;
- Yellow says it swims powerfully using all its muscles;
- Gold/HeartGold say it can cross the Pacific Ocean by kicking;
- Ruby/Sapphire/Emerald use unusually absolute wording that its developed muscles never fatigue and that it can repeatedly cross the Pacific without effort;
- Diamond/Pearl/Platinum and later entries retain the idea of extremely tough muscles allowing ocean swimming without rest;
- Silver/SoulSilver repeat the contrast that despite being an energetic swimmer, it lives on dry land.

### D1 boundaries

```text
poliwrath_exceptional_swimming_endurance == source_backed_cross_source
poliwrath_whole_body_swimming == source_backed
poliwrath_dry_land_living == source_backed
poliwrath_brief_water_surface_running == source_backed
human_swimmer_comparisons == measured_or_scale_evidence_not_direct_formula
never_fatigued_or_Pacific_crossing_wording == version_scoped_extraordinary_not_universalized
extreme_endurance_equals_infinite_stamina_action_loops_or_exhaustion_immunity == false
ocean_crossing_equals_literal_proto_Kanto_travel_time_or_fast_travel_formula == false
water_surface_running_equals_permanent_water_walking_or_passenger_traversal == false
Fighting_type_equals_generic_human_martial_art_school_or_institution == false
```

Stable gameplay minimum: **a powerful amphibious combat-capable swimmer with exceptional but bounded endurance and momentary water-surface burst movement; source scale informs authored capability without creating unlimited stamina or traversal formulas.**

### U1 unresolved

```text
poliwrath_exact_endurance_limit == unresolved
poliwrath_exact_swimming_speed == unresolved_and_not_formulaized
poliwrath_exact_water_surface_run_distance == unresolved
poliwrath_exact_passenger_or_cargo_capability == unresolved
```

## 10. Cross-species contract conclusions

### 10.1 Venom, intimidation and constriction

Ekans/Arbok confirm that severe biological hazards do not require automatic status or irreversible restraint.

Preferred authoring shape:

```text
warning_or_ambush_state
  -> eligible contact / bite / coil / pursuit event
  -> player approach / defense / escape choice
  -> ordinary P3 check or authored resolution where uncertainty matters
  -> bounded consequence (injury / venom exposure / restraint / Fear pressure / lost position)
  -> explicit recovery / escape / treatment / disengagement path where fiction allows
```

No passive proximity poison, automatic Fear or frame-by-frame grapple squeeze is required.

### 10.2 Water/land locomotion remains species-local

The Poliwag family demonstrates a progression of body plans without creating a universal Water-type rule:

- Poliwag: strongly aquatic, poor newly developed land legs;
- Poliwhirl: genuinely amphibious, but still water-preferring;
- Poliwrath: strong dry-land viability plus exceptional aquatic performance.

These are authored species capabilities and encounter-state inputs, not global locomotion formulas.

### 10.3 Visual drowsiness preserves agency

Poliwhirl's spiral evidence is sufficient for a real hazard, but its safe representation requires:

- visible/knowable anatomy or encounter presentation;
- explicit visual exposure eligibility;
- opportunity to avert gaze, reposition, interrupt, retreat or otherwise counterplay when fiction allows;
- a bounded drowsiness/sleep consequence resolved through P3/P5 rather than immediate player-input removal;
- no continuous render-frame gaze detector requirement.

### 10.4 Extreme source scale remains metadata

Arbok's steel-drum crushing and Poliwrath's ocean-crossing/tirelessness are valuable evidence of extraordinary physical capability. They do not establish universal material deletion, infinite stamina, literal meters-per-turn, chase certainty or world-map travel duration.

### 10.5 Runtime/performance interpretation

P4 defines design contracts; P7 owns implementation. Nothing in Batch 20 requires continuous simulation.

Preferred later representation:

- cached encounter-state flags for `hidden_in_grass`, `tongue_sensing_relevant`, `coiled`, `pursuing`, `in_water`, `on_land`, `wet_skin`, `visual_spiral_exposure`;
- event-triggered venom eligibility and constriction consequences;
- authored pursuit/chase resolution instead of frame-by-frame tracking races;
- discrete land/water movement modes rather than fluid/buoyancy simulation;
- cached capability lookup reused by events rather than repeated parsing or per-render recomputation;
- one active entity per Pokémon regardless of body length, coils, limbs or other anatomy.

## 11. Ancient-era adaptation conclusions

No new owner decision is required.

The existing contracts already permit:

- Ekans/Arbok to be directly encounterable under D-034 without requiring them to be common everywhere or routine companions;
- ordinary species baselines to remain fixed while rare exceptional individuals can carry persistent lineage/history traits under D-031;
- species-local venom, constriction, sensing and pursuit tags without automatic battle-game formulas;
- Poliwag-family land/water asymmetry without a universal amphibious system;
- Poliwhirl visual drowsiness as an event-scoped hazard with warning/exposure/counterplay;
- Poliwrath extreme endurance as capability scale rather than infinite resource law;
- modern evolution items/trade and Politoed context to remain provenance rather than ancient setting law under D-032.

No new institution, culture, supernatural system, technology island, progression rule or mandatory companion policy needs to be invented.

## 12. Human Design Gate result

```text
blocking_human_design_gate_count == 0
```

All material uncertainty is either source-resolvable, bounded by existing P2/P3/P4 contracts, or safely left species-local/unresolved for full-schema authoring.

## 13. Source-review validation

```text
reviewed_species_count == 5
current_official_species_pages_verified == 5
pinned_species_records_reviewed == 5
rating_profile_reproducible_count == 5
manual_rating_exception_count == 0
source_claims_epistemically_scoped == true
automatic_poison_rule_added == false
forced_Fear_or_input_loss_rule_added == false
generic_grapple_or_pursuit_simulator_added == false
continuous_hydration_or_gaze_polling_added == false
numeric_swim_or_stamina_runtime_formula_added == false
water_walking_global_rule_added == false
continuous_simulation_requirement_count == 0
p2_contradiction_count == 0
p3_contradiction_count == 0
p4_contract_contradiction_count == 0
blocking_human_design_gate_count == 0
coverage_manifest_changed == false
ready_for_full_schema_authoring == true
```

## 14. Exact next work

Author the five **P4 Batch 20 frozen full-schema dossiers**:

- `docs/P4_BATCH_20_DOSSIER_023_EKANS.md`
- `docs/P4_BATCH_20_DOSSIER_024_ARBOK.md`
- `docs/P4_BATCH_20_DOSSIER_060_POLIWAG.md`
- `docs/P4_BATCH_20_DOSSIER_061_POLIWHIRL.md`
- `docs/P4_BATCH_20_DOSSIER_062_POLIWRATH.md`

Then create:

- `docs/P4_BATCH_20_FULL_SCHEMA_DOSSIERS.md`
- `docs/P4_BATCH_20_COMPLETION_AUDIT.md`

The authoring/completion pass must:

1. populate all 20 frozen-schema top-level sections for each species with `dossier_status: complete` and no placeholder TODOs;
2. preserve the claim-level provenance and boundaries established here;
3. preserve one Pokémon = one ordinary turn / health state / initiative presence / visible companion slot;
4. keep stealth, sensing, venom, constriction, intimidation, pursuit, drowsiness and amphibious locomotion species-local and event-scoped;
5. preserve warning, eligibility, counterplay, escape/avoidance and player input for severe hazards;
6. keep D-034 direct encounterability separate from baseline abundance and ordinary companionship;
7. require no continuous stealth, poison, grapple, pursuit, hydration, gaze, swimming or stamina simulation;
8. atomically promote exactly #023/#024/#060/#061/#062 only if dossier validation and Batch 20 completion audit pass;
9. leave #098/#099/#108 as the final `not_started` roster after successful promotion;
10. keep P5 blocked until the final mandatory `151/151` P4 exit audit passes.
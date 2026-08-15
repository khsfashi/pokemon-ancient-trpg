# P4 Batch 10 — Source Review

Status: **SOURCE REVIEW COMPLETE — NO BLOCKING HUMAN DESIGN GATE / READY FOR FULL-SCHEMA AUTHORING**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_10_TERRAIN_TEMPERATURE_SENSORY_AQUATIC_PLAN.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P3_HEALTH_PRESSURE_AND_INJURY_CONTRACT.md`

## 1. Review purpose

Batch 10 reviews the eight selected terrain / temperature / sensory / aquatic-physiology stress species before any manifest promotion:

- #041 Zubat
- #042 Golbat
- #072 Tentacool
- #073 Tentacruel
- #077 Ponyta
- #078 Rapidash
- #111 Rhyhorn
- #112 Rhydon

The review is deliberately narrow. It must preserve source-backed exceptional biology while rejecting hidden global formulas such as:

```text
Force_equals_terrain_destruction == false
Potency_equals_body_temperature == false
Speed_equals_mount_speed_or_travel_distance == false
Flying_type_equals_perfect_navigation == false
Water_type_equals_amphibious_safety == false
bond_equals_generic_hazard_immunity == false
```

## 2. Source and provenance rule

Evidence classes follow the existing P4 convention:

- **C1** — current official Pokémon Pokédex text or official species metadata;
- **C2** — pinned structured source data used for deterministic raw fields;
- **D1** — conservative interpretation directly bounded by one or more source facts;
- **D2** — project-authored ancient-setting extrapolation, never presented as canon.

Pinned structured revision remains:

```text
SRC-DATA-001 = PokeAPI/api-data @ 2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

The structured source is used for raw base stats, type, ability context, physical metadata, family/evolution context and move metadata where needed. Modern level/trade/friendship conditions and modern move/ability mechanics are source context, not automatically imported ancient rules.

Official Pokédex source registry for this batch:

| Ref | Species | Official source |
|---|---|---|
| `OFFICIAL-DEX-ZUBAT-PH` | Zubat | `https://ph.portal-pokemon.com/play/pokedex/0041` |
| `OFFICIAL-DEX-GOLBAT-SG` | Golbat | `https://sg.portal-pokemon.com/play/pokedex/0042` |
| `OFFICIAL-DEX-TENTACOOL-PH` | Tentacool | `https://ph.portal-pokemon.com/play/pokedex/0072` |
| `OFFICIAL-DEX-TENTACRUEL-SG` | Tentacruel | `https://sg.portal-pokemon.com/play/pokedex/0073` |
| `OFFICIAL-DEX-PONYTA-SG` | Ponyta | `https://sg.portal-pokemon.com/play/pokedex/0077` |
| `OFFICIAL-DEX-RAPIDASH-SG` | Rapidash | `https://sg.portal-pokemon.com/play/pokedex/0078` |
| `OFFICIAL-DEX-RHYHORN-PH` | Rhyhorn | `https://ph.portal-pokemon.com/play/pokedex/0111` |
| `OFFICIAL-DEX-RHYDON-SG` | Rhydon | `https://sg.portal-pokemon.com/play/pokedex/0112` |

Current official portal pages aggregate multiple version descriptions. A description may provide biological/capability evidence even when its geography is explicitly Hisui; that does **not** establish that this project is Hisui-era, that the same named region exists in the project era, or that a later-generation form/evolution belongs to the mandatory roster.

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
| Zubat | 40/45/35/30/40/55 | 2/2/1/1/2/2 |
| Golbat | 75/80/70/65/75/90 | 3/4/3/3/3/4 |
| Tentacool | 40/40/35/50/100/70 | 2/2/1/2/5/3 |
| Tentacruel | 80/70/65/80/120/100 | 4/3/3/4/6/5 |
| Ponyta | 50/85/55/65/65/90 | 2/4/2/3/3/4 |
| Rapidash | 65/100/70/80/80/105 | 3/5/3/4/4/5 |
| Rhyhorn | 80/85/95/30/30/25 | 4/4/4/1/1/1 |
| Rhydon | 105/130/120/45/45/40 | 5/6/6/2/2/2 |

```text
rating_profile_reproducible_count == 8
manual_rating_exception_count == 0
```

No terrain breach, navigation, heat tolerance, restraint, dehydration or long-distance travel permission is derived from these ratings alone.

## 4. #041 Zubat evidence packet

### C1 facts retained

The official page establishes that Zubat is Poison/Flying, lacks functional sight, surveys its surroundings with ultrasonic/sound waves emitted from its mouth while flying, makes its home in gloomy caves, has very thin skin that can be burned by sunlight, and gathers with others for warmth in cold conditions.

### D1 boundaries

```text
zubat_nonvisual_navigation == source_backed
zubat_ultrasonic_or_sound_wave_survey == source_backed
zubat_blindness == source_backed
zubat_sunlight_skin_burn_vulnerability == source_backed
Flying_type_equals_nonvisual_navigation == false
Speed_2_equals_navigation_quality == false
sunlight_vulnerability_equals_Fire_weakness == false
```

The source gives Zubat a species-specific nonvisual navigation permission and a species-specific environmental vulnerability. Neither becomes a generic Flying-type sense nor a type-chart rule.

### Counterplay / encounter ownership

- Disturbance in a cave can be telegraphed through chirps, wingbeats, movement and local knowledge rather than visual eye contact.
- Open sunlight can constrain Zubat exposure/rest/travel in a scene without rewriting its base stats.
- Darkness alone is not reliable counterplay against a species whose source-backed survey method is sound-based.
- Exact echolocation range, resolution, material penetration, silence interaction and combat targeting precision remain unknown for P5 event authoring.

### Evolution boundary

Crobat is later-generation family context only. Zubat capabilities are not auto-copied to Golbat or Crobat unless stage-local evidence supports them.

## 5. #042 Golbat evidence packet

### C1 facts retained

The official page establishes Golbat as Poison/Flying with hollow fang-like structures used to drink blood. It can consume more than ten ounces of blood in one feeding, and source text explicitly notes that excessive feeding can leave it unable to fly. Hunger can also drive risky biting behavior.

### D1 boundaries

```text
golbat_blood_feeding_hazard == source_backed
golbat_overfeeding_can_remove_flight == source_backed
flight_loss_requires_base_Speed_rewrite == false
blood_loss_damage_equals_fixed_volume_formula == false
all_bat_family_members_share_same_feeding_state == false
```

The important contract is **state can remove a capability without mutating the species baseline**. A fed/overfed Golbat may temporarily lose flight permission while retaining the same six-axis profile.

### Hazard ownership

Potential hostile feeding is a physical injury/blood-loss hazard. The source does not define a universal damage-per-volume formula, automatic disease transmission, guaranteed exsanguination, or a repeatable player blood-harvesting economy.

Counterplay may include distance, barriers, protective clothing/armor where applicable, denying a clean bite, escaping while the Golbat is burdened, or exploiting terrain once flight is unavailable. Exact bite injury and blood-loss consequences remain event-contextual under P3/P4 severity rules.

## 6. #072 Tentacool evidence packet

### C1 facts retained

The official page establishes Tentacool as Water/Poison, a shallow-sea drifter with transparent/crystal-like eye structures or orbs capable of emitting beams. Most importantly for this batch, falling tide can leave Tentacool stranded on beaches in a dehydrated/desiccated state.

### D1 boundaries

```text
tentacool_shallow_sea_drift == source_backed
tentacool_low_tide_stranding == source_backed
tentacool_dehydration_on_shore == source_backed
Water_type_equals_amphibious_safety == false
Water_type_equals_dehydration_immunity == false
beached_Tentacool_equals_healthy_land_encounter == false
```

A Water typing therefore cannot be used as a generic permission for indefinite terrestrial exposure. Tentacool's shoreline state is evidence that habitat and physiology must be species-local.

### Encounter / rescue ownership

A stranded individual can support observation, rescue, predation, scavenging-pressure or ethical-choice events. Exact dehydration time-to-injury, recovery time, respiration mechanism and land locomotion remain unresolved; P5 must not invent a universal `Water Pokémon dehydration meter` from this dossier.

The beam fact may support scene-specific threat/utility hooks, but exact range, damage, frequency and optical mechanics are not established here.

## 7. #073 Tentacruel evidence packet

### C1 facts retained

The official page establishes Tentacruel as Water/Poison with 80 tentacles, venomous tips, extendible tentacles used to catch prey, and a battle description in which the tentacles entrap an opponent in a poisonous net. The page also records rare large outbreaks associated with fish Pokémon disappearing from the surrounding sea.

### D1 boundaries

```text
tentacruel_extendible_tentacle_restraint == source_backed
tentacruel_venomous_tentacle_exposure == source_backed
restraint_and_venom_are_distinct_resolution_concerns == true
80_tentacles_equals_80_actions == false
outbreak_equals_permanent_ecological_exclusion == false
outbreak_equals_generic_swarm_multiplier == false
```

### Hazard ownership

A Tentacruel hostile encounter may combine entanglement/restriction and toxin exposure. Escape from restraint and resistance/treatment after venom exposure are not the same check. Ordinary consequences can be serious; lethal consequences require severe authored context under the existing D-020/P4 hazard ceiling rule rather than Potency or tentacle count alone.

Counterplay can include keeping distance, avoiding dense tentacle reach, cutting/freeing a trapped route only when fiction and equipment permit, breaking line/position, and retreating from outbreak waters. Exact toxin course, tentacle extension distance, simultaneous target count and regrowth are unknown.

### Ecology boundary

The outbreak record proves event-scale ecological pressure, not a permanent biome rule. P5 may author rare outbreak states that change local fishing/travel/encounter composition, but must not infer a universal `Tentacruel present => all fish absent` rule.

## 8. #077 Ponyta evidence packet

### C1 facts retained

The official page establishes Ponyta as Fire type, initially poor at running when newly born, strengthening its legs by running with others, living in herds in grassland in one reviewed entry, and having a burning mane whose heat becomes harmless to the touch for a person accepted by Ponyta.

### D1 boundaries

```text
ponyta_acceptance_gated_safe_mane_contact == source_backed
safe_contact_is_conditional_not_universal == true
accepted_person_equals_all_fire_hazards_immune == false
bond_equals_generic_hazard_immunity == false
newborn_locomotion_equals_adult_Speed_rewrite == false
maturation_can_change_capability_without_species_stat_exception == true
```

The acceptance fact is a narrow species-specific contact permission. It does not make a trusted human immune to Fire-type attacks, wildfire, hot ground, another Fire Pokémon, or even every possible Ponyta-caused hazard.

### Maturation / companionship ownership

Newborn running difficulty and strengthening with herd exercise are maturation evidence. They do not create kill-XP, a training meter, or permanent individual stat scaling. Companionship may eventually allow safe mane contact for an accepted person, but riding, tack tolerance, load capacity, travel distance and settlement logistics remain separate authored questions.

Galarian Ponyta is later-form context only and must not backfill Psychic-type traits into the baseline species.

## 9. #078 Rapidash evidence packet

### C1 facts retained

The official page establishes Rapidash as Fire type, records galloping speed up to 150 mph in one entry, states that the fastest runner can become herd leader and determine herd pace/direction, and includes a Hisui-context description of traversing the vast region in roughly a day and a half.

### D1 boundaries

```text
rapidash_extreme_overland_running == source_backed
rapidash_herd_leadership_by_fastest_runner == source_backed
Speed_5_equals_exact_mount_speed == false
150_mph_equals_every_scene_cruising_speed == false
Hisui_day_and_half_equals_project_map_travel_formula == false
Ponyta_safe_contact_rule_auto_inherited == false
```

The evidence is sufficient for an **extreme overland travel capability tag** and herd-direction behavior. It is not sufficient for a global kilometer-per-hour formula, unrestricted rider carriage, zero-fatigue travel, perfect turning/braking, or a generic `Speed => travel time` conversion.

### Travel ownership

P5 may author routes where a willing, bonded Rapidash meaningfully changes overland travel permission or pursuit. Human carriage requires voluntary companionship, appropriate handling and scene/logistics support; the source reviewed here does not automatically grant mount permission or load capacity.

The 150 mph and Hisui travel descriptions are capability evidence, not deterministic map simulation constants.

## 10. #111 Rhyhorn evidence packet

### C1 facts retained

The official page establishes Rhyhorn as Ground/Rock and describes a very large claimed territory, poor memory for that territory while running, inability to stop once it starts except by collision, repeated boulder-smashing while running, habitat expansion associated with that disposition, very poor turning, and exceptionally destructive head-on impact.

### D1 boundaries

```text
rhyhorn_charge_has_poor_turning == source_backed
rhyhorn_charge_has_poor_stopping == source_backed
rhyhorn_can_break_boulders_in_motion == source_backed
collision_can_change_route_or_terrain_state == true
Force_4_equals_boulder_break_formula == false
Guard_4_equals_collision_immunity == false
mountain_shattering_text_equals_universal_mountain_delete_permission == false
```

The strongest official wording is intentionally normalized into a bounded **charge / collision / terrain-breach capability** rather than a universal terrain HP system. Scene material, approach distance, angle, obstruction and target scale remain context.

### Counterplay / environmental consequence

Rhyhorn is a strong demonstration that low normalized Speed does not mean harmless movement. Once a charge is committed, poor turning/stopping can create a dangerous line/trajectory with readable counterplay: get off the line, use terrain, create distance before commitment, or exploit the forced collision endpoint when fiction supports it.

A collision may damage boulders, barriers, structures or landscape features when authored, but there is no generic destruction table derived from Force.

## 11. #112 Rhydon evidence packet

### C1 facts retained

The official page establishes Rhydon as Ground/Rock, walking on its hind legs, expanding habitat onto steep mountains, having a horn powerful enough to crush raw diamonds, rapidly rotating that horn to bore through bedrock, and moving through volcanic regions with tough armorlike hide protecting it from lava's heat.

### D1 boundaries

```text
rhydon_steep_mountain_terrain_access == source_backed
rhydon_bedrock_boring == source_backed
rhydon_lava_heat_tolerance == source_backed
rhydon_heat_tolerance_is_species_local == true
Ground_or_Rock_type_equals_lava_immunity == false
Guard_6_equals_heat_immunity == false
Force_6_equals_bedrock_bore_formula == false
lava_heat_tolerance_equals_safe_submersion_or_lava_swimming == false
```

Rhydon therefore receives species-local terrain and heat permissions that are not encoded by its six-axis ratings. The source supports protection from **lava's heat**; it does not prove immunity to every effect of direct immersion, molten-rock force, toxic volcanic gas, oxygen deprivation, falling, or other volcanic hazards.

Rhyperior is later-generation family context only. No Rhyperior capability is backfilled into Rhydon.

## 12. Evolution-family inheritance review

```text
Zubat_nonvisual_navigation_auto_inherited_by_Golbat == false
Golbat_blood_feeding_auto_inherited_by_Zubat == false
Golbat_overfeeding_flight_loss_auto_inherited_by_Zubat == false

Tentacool_shoreline_dehydration_auto_inherited_by_Tentacruel == false
Tentacruel_80_extendible_venomous_tentacles_auto_inherited_by_Tentacool == false

Ponyta_acceptance_safe_mane_contact_auto_inherited_by_Rapidash == false
Rapidash_extreme_overland_travel_auto_inherited_by_Ponyta == false

Rhyhorn_poor_turning_stopping_auto_inherited_by_Rhydon == false
Rhydon_bedrock_boring_lava_heat_tolerance_auto_inherited_by_Rhyhorn == false
```

Family membership supplies provenance and comparison context, never automatic capability copying.

## 13. State-versus-baseline review

Batch 10 adds no new numeric stat system. Several facts instead prove why capability/state must remain distinct from ratings:

```text
overfed_Golbat_can_lose_flight_without_base_stat_mutation == true
newborn_Ponyta_can_have_weaker_locomotor_permission_without_new_species_profile == true
stranded_dehydrated_Tentacool_can_be_impaired_without_Water_type_change == true
Rhyhorn_committed_charge_can_be_fast_and_dangerous_despite_Speed_1 == true
Rhydon_bedrock_or_heat_permission_can_exceed_what_Force_or_Guard_alone_encodes == true
```

P5 owns concrete event-state transitions. P4 only establishes the species-specific permission/constraint surface.

## 14. Hazard / counterplay review

| Species | Reviewed pressure | Warning / trigger | Counterplay boundary | Consequence ceiling |
|---|---|---|---|---|
| Zubat | sunlight vulnerability / nonvisual cave navigation | exposed daylight; cave sound activity | light exposure may constrain Zubat; darkness does not negate sound navigation | injury to Zubat from exposure; player harm only from separately authored encounter hazards |
| Golbat | bite / blood feeding; overfed flight loss | close bite attempt, feeding state | distance, barrier, armor/position, exploit burdened no-flight state | serious or lethal only with severe authored injury/blood-loss context |
| Tentacool | shoreline dehydration state | retreating tide / stranded body | return to suitable water when event supports; do not assume land safety | dehydration injury to Tentacool; secondary scene consequences contextual |
| Tentacruel | entanglement + venom | extending tentacles / dense reach | avoid reach, escape restraint, then separately address exposure | serious; lethal only under severe authored venom/environment context |
| Ponyta | fiery-contact boundary | visible burning mane / lack of acceptance | distance; accepted-person safe-mane contact is narrow exception | burn injury where authored; no generic Fire immunity |
| Rapidash | extreme overland pursuit/travel | committed gallop / herd movement | route choice, terrain, early avoidance; no exact stat formula | impact/separation/travel exposure contextual |
| Rhyhorn | committed charge / collision / terrain breach | alignment and acceleration into charge | leave trajectory, use terrain, exploit poor turning/stopping | serious or lethal collision under D-020 context; terrain damage separate |
| Rhydon | horn impact / boring / volcanic access | horn rotation, terrain approach, volcanic environment | avoid drill line, exploit route/space; heat tolerance does not protect humans | serious/lethal physical harm when authored; environmental heat exception is Rhydon-local |

No hazard severity is capped by a species rating. Avoiding exposure, resisting a consequence, treating an injury and changing environment remain separate operations where applicable.

## 15. Chronology and setting review

```text
project_era_equals_Hisui == false
Hisui_species_description_can_supply_biological_evidence == true
Hisui_named_geography_auto_imported == false
Crobat_mandatory_roster_addition == false
Galarian_Ponyta_or_Rapidash_baseline_import == false
Rhyperior_mandatory_roster_addition == false
modern_move_menu_auto_import == false
modern_level_evolution_rule_auto_import == false
```

The project remains earlier than the Hisui-era precedent. Later or regional material is provenance context only unless a future owner decision explicitly changes scope.

## 16. Cross-contract contradiction review

```text
iron_age_baseline_preserved == true
trainer_culture_assumed == false
portable_containment_assumed == false
three_visible_companion_slots_preserved == true
zero_companion_run_valid == true
kill_XP_created == false
generic_evolution_menu_created == false
player_level_enemy_scaling_created == false
Force_to_terrain_damage_system_created == false
Potency_to_temperature_system_created == false
Speed_to_mount_or_travel_formula_created == false
Flying_type_navigation_system_created == false
Water_type_amphibious_system_created == false
type_based_environmental_immunity_system_created == false
generic_bond_hazard_immunity_created == false
blocking_human_design_gate_count == 0
```

Result: **PASS**.

## 17. Human Design Gate outcome

No reviewed ambiguity forces a new durable player-facing world rule.

All uncertainties can be represented with the existing schema by:

- preserving source facts as species-local capabilities, hazards or constraints;
- using state changes instead of hidden stat mutation;
- leaving exact ranges, durations, physiology and travel formulas unresolved for P5/P7 where needed;
- marking unsupported ancient ecology as `unknown` rather than inventing pseudo-canon;
- keeping later-generation forms/evolutions as context only.

```text
new_HDG_required == false
blocking_HDG_count == 0
ready_for_full_schema_authoring == true
```

## 18. Full-schema authoring handoff

Each of the eight dossiers must preserve the following minimum pressure point:

```text
Zubat      -> nonvisual_sound_navigation + blindness + sunlight_skin_vulnerability
Golbat     -> blood_feeding + overfeeding_can_remove_flight
Tentacool  -> shallow_sea_drift + low_tide_stranding + dehydration
Tentacruel -> extendible_venomous_restraint + rare_outbreak_ecological_pressure
Ponyta     -> acceptance_gated_safe_mane_contact + maturation_locomotion
Rapidash   -> extreme_overland_running + herd_leadership_without_mount_formula
Rhyhorn    -> poor_turning_stopping_charge + collision_terrain_breach
Rhydon     -> steep_terrain + bedrock_boring + species_local_lava_heat_tolerance
```

Promotion remains forbidden until all eight full-schema dossiers and the Batch 10 completion audit pass atomically.

## Verdict

```text
source_review_species_count == 8
structured_stat_audit == PASS
capability_boundary_review == PASS
state_vs_baseline_review == PASS
hazard_counterplay_review == PASS
evolution_stage_inheritance_review == PASS
chronology_review == PASS
P2_P3_P4_contradiction_review == PASS
blocking_human_design_gate_count == 0
manifest_changed == false
ready_for_full_schema_authoring == true
```

Batch 10 source review is complete. The authoritative manifest remains `72 complete / 2 pilot_reviewed / 77 not_started` until full-schema authoring and completion audit finish.
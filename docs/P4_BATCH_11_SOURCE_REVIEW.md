# P4 Batch 11 — Source Review

Status: **SOURCE REVIEW COMPLETE — NO BLOCKING HUMAN DESIGN GATE / READY FOR FULL-SCHEMA AUTHORING**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_11_HUMAN_PROXIMITY_LABOR_CULTURE_PLAN.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/WORLD_BIBLE.md`

## 1. Review purpose

Batch 11 reviews seven selected human-proximity / labor / culture / action-economy stress species before any manifest promotion:

- #052 Meowth
- #053 Persian
- #058 Growlithe
- #059 Arcanine
- #066 Machop
- #067 Machoke
- #068 Machamp

The review is deliberately narrow. It preserves official evidence that some Pokémon can live near people, be raised as pets, show loyalty, voluntarily help with work, or become culturally admired while rejecting hidden setting-wide conclusions such as:

```text
human_affinity_equals_trainer_culture == false
pet_evidence_equals_common_domestication == false
voluntary_labor_equals_pokemon_labor_economy == false
species_associated_object_equals_loot_or_equipment == false
self_training_equals_level_or_XP_progression == false
limb_count_equals_action_count == false
ancient_source_reference_equals_exact_project_chronology == false
```

## 2. Source and provenance rule

Evidence classes follow the existing P4 convention:

- **C1** — current official Pokémon Pokédex text or official species metadata;
- **C2** — pinned structured source data used for deterministic raw fields;
- **D1** — conservative interpretation directly bounded by one or more source facts;
- **D2** — project-authored ancient-setting extrapolation, never presented as canon;
- **U1** — unresolved detail that must remain unknown rather than be silently invented.

Pinned structured revision remains:

```text
SRC-DATA-001 = PokeAPI/api-data @ 2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

The structured source is used for raw base stats, type, ability context, physical metadata, family/evolution context and move metadata where needed. Modern item, level, trade, ability and battle-system mechanics remain source context rather than automatic ancient-world rules.

Official Pokédex source registry for this batch:

| Ref | Species | Official source |
|---|---|---|
| `OFFICIAL-DEX-MEOWTH-SG` | Meowth | `https://sg.portal-pokemon.com/play/pokedex/0052` |
| `OFFICIAL-DEX-PERSIAN-SG` | Persian | `https://sg.portal-pokemon.com/play/pokedex/0053` |
| `OFFICIAL-DEX-GROWLITHE-SG` | Growlithe | `https://sg.portal-pokemon.com/play/pokedex/0058` |
| `OFFICIAL-DEX-ARCANINE-SG` | Arcanine | `https://sg.portal-pokemon.com/play/pokedex/0059` |
| `OFFICIAL-DEX-MACHOP-SG` | Machop | `https://sg.portal-pokemon.com/play/pokedex/0066` |
| `OFFICIAL-DEX-MACHOKE-SG` | Machoke | `https://sg.portal-pokemon.com/play/pokedex/0067` |
| `OFFICIAL-DEX-MACHAMP-SG` | Machamp | `https://sg.portal-pokemon.com/play/pokedex/0068` |

Current official portal pages aggregate multiple version descriptions. References to an ancient picture scroll, modern pet-raising, construction work, named regions, later-generation forms, Gigantamax, abilities or modern item semantics are evidence about species possibilities, not automatic authorization for this project's exact chronology, institutions, technology or gameplay systems.

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
| Meowth | 40/45/35/40/40/90 | 2/2/1/2/2/4 |
| Persian | 65/70/60/65/65/115 | 3/3/3/3/3/5 |
| Growlithe | 55/70/45/70/50/60 | 2/3/2/3/2/3 |
| Arcanine | 90/110/80/100/80/95 | 4/5/4/5/4/4 |
| Machop | 70/80/50/35/35/35 | 3/4/2/1/1/1 |
| Machoke | 80/100/70/50/60/45 | 4/5/3/2/3/2 |
| Machamp | 90/130/80/65/85/55 | 4/6/4/3/4/2 |

```text
rating_profile_reproducible_count == 7
manual_rating_exception_count == 0
```

No loyalty, labor capacity, lifting permission, object provenance, cultural importance, strike cadence or action count is derived from these ratings alone.

## 4. #052 Meowth evidence packet

### C1 facts retained

The current official page establishes Meowth as Normal type, describes it sleeping during the daytime and patrolling its territory at night with glowing eyes, and states that it loves shiny things. When it sees a shiny object, the gold coin on its forehead also shines. The same page exposes Pickup as modern ability context.

### D1 boundaries

```text
meowth_nocturnal_territory_patrol == source_backed
meowth_shiny_object_attraction == source_backed
meowth_forehead_coin_visual_feature == source_backed
meowth_shiny_interest_equals_currency_interest == false
forehead_coin_equals_minted_currency_provenance == false
Pickup_equals_ancient_loot_generation_system == false
```

The phrase `gold coin` identifies a visible species-associated feature. It does **not** establish that the object was minted by a known polity, can be safely removed, functions as legal tender, is replaced after loss, has standardized value, or proves the existence of a project-era coin economy.

### Ecology / encounter ownership

Meowth can support nocturnal territory events, curiosity toward reflective objects, bait/distraction using genuinely shiny scene objects, and theft-or-scavenging ambiguity. None of those imply universal kleptomania, guaranteed treasure discovery, an item-farming loop, or automatic willingness to approach humans.

The modern Pickup ability may justify an authoring note that Meowth can interact with unattended small objects, but modern ability mechanics and battle-item recovery are not copied into the ancient ruleset.

### U1 unresolved

```text
forehead_coin_origin == unresolved
forehead_coin_material_composition == unresolved
forehead_coin_removability == unresolved
forehead_coin_replacement_or_regrowth == unresolved
```

These unknowns matter because Batch 08 already rejects body/resource facts becoming generic loot. Full-schema authoring must preserve the coin as species-associated state without inventing a harvestable body resource.

## 5. #053 Persian evidence packet

### C1 facts retained

The current official page establishes Persian as Normal type, says its fur has many admirers, explicitly describes it as difficult to raise as a pet because of its fickle meanness, and describes a straight-raised tail as a warning that it is about to pounce and bite.

### D1 boundaries

```text
persian_can_be_raised_as_pet_in_some_contexts == source_backed
persian_pet_raising_is_difficult == source_backed
persian_tail_warning_before_attack == source_backed
pet_evidence_equals_common_ancient_domestication == false
fur_admiration_equals_fur_trade_or_harvest == false
pet_equals_visible_companion_slot_bypass == false
```

The source establishes **possibility**, not prevalence. A Persian can plausibly exist in a human-associated context without proving that ordinary project settlements maintain normalized pet ownership, breeding, trainer commands or routine Pokémon housing.

### Encounter / counterplay ownership

The tail warning is a clean behavioral telegraph. P5 can use it to create readable pre-attack state without granting universal animal-handling certainty. A character who notices the warning learns that escalation is imminent; the source does not define an automatic dodge, initiative bonus or guaranteed de-escalation action.

Admired fur is cultural/value evidence only. It does not imply a safe grooming economy, body-part drop, pelting industry or market price.

## 6. #058 Growlithe evidence packet

### C1 facts retained

The current official page establishes Growlithe as Fire type, describes it as brave and trustworthy, says it fearlessly faces larger and stronger foes, and explicitly states that it is very friendly and faithful to people. It may repel enemies by barking and biting.

### D1 boundaries

```text
growlithe_human_affinity == source_backed
growlithe_faithfulness_to_people == source_backed
growlithe_guarding_behavior == source_backed
human_affinity_equals_automatic_companionship == false
faithfulness_equals_unconditional_obedience == false
repels_enemies_equals_infallible_friend_or_foe_detection == false
```

Growlithe is a positive control showing that strong human affinity can exist without collapsing the world into standard trainer culture. The species can plausibly form settlement-adjacent, family, watch, or bonded relationships, but any specific role remains event/locality authored.

### D2 project-safe extrapolation

A bounded settlement may contain one or a few Growlithe-associated watch relationships if local history supports them. That is an allowed **technology/culture island**, not a world baseline and not a reason to populate every settlement with domesticated Growlithe.

The project still requires meaningful companionship state and visible slot accounting when a Growlithe becomes a true player companion.

## 7. #059 Arcanine evidence packet

### C1 facts retained

The current official page establishes Arcanine as Fire type and records an **ancient picture scroll** in which people were captivated by its movement while it ran through prairies. Another current description says its magnificent bark conveys majesty so strongly that listeners instinctively grovel.

### D1 boundaries

```text
arcanine_has_old_human_cultural_observation == source_backed
arcanine_running_can_inspire_human_awe == source_backed
arcanine_bark_can_produce_intense_majesty_or_fear_response == source_backed
ancient_scroll_equals_exact_project_era_document == false
ancient_scroll_equals_future_Kanto_regional_state == false
grovel_text_equals_mind_control == false
```

The picture-scroll entry is especially useful for this project because it proves that official Pokémon fiction can place human cultural observation of Arcanine in an old historical context. It still does not give the project an absolute date, geography, polity, literacy rate, art medium distribution, or a guarantee that this exact future-Kanto locality has that tradition.

### Mental-pressure ownership

The bark's majesty may support intimidation, awe, hesitation or social-scene pressure when authored. It is not hypnosis, domination, forced kneeling, personality rewrite or automatic player action. P3 agency protections remain controlling.

### Human relationship boundary

Nothing in the reviewed page grants generic riding, police-dog institutions, military deployment or ownership. A culturally admired Arcanine may remain wild, exceptional, local, bonded, sacred, feared or merely remembered depending on authored context.

Hisuian Arcanine is later-form provenance context only and does not backfill Rock typing or Hisui-specific ecology into the baseline species.

## 8. #066 Machop evidence packet

### C1 facts retained

The current official page establishes Machop as Fighting type and describes a body composed almost entirely of muscle. It is child-sized yet source text gives it extreme throwing/lifting capability. It spends time lifting boulders and becomes stronger through training; another entry describes it training by carrying a Graveler.

### D1 boundaries

```text
machop_extreme_strength == source_backed
machop_self_directed_physical_training == source_backed
machop_can_carry_graveler_as_training == source_backed
training_equals_kill_XP == false
training_equals_visible_level_meter == false
training_equals_repeatable_stat_grind == false
Force_4_equals_fixed_mass_formula == false
```

Machop confirms that Pokémon can **train and improve behaviorally** without forcing the project to import modern level progression. A specific individual may acquire persistent history, competence, technique, conditioning or exceptional traits under D-031, but the species baseline remains fixed and ordinary individuals do not auto-scale with the player.

### Strength ownership

Claims such as throwing many adults or carrying Graveler are capability-scale evidence. They support authored heavy-object movement, grappling danger and environmental interaction, but do not create a deterministic kilogram table, automatic structure destruction, or permission to solve every obstacle by checking Force alone.

Cross-species training with Graveler is an observed behavior, not proof of trainer-mediated exercise, friendship, ownership or a universal gym culture.

## 9. #067 Machoke evidence packet

### C1 facts retained

The current official page establishes Machoke as Fighting type and describes its body as so powerful that it wears a **power-save / power-regulation belt** to control its motions. It is described as tireless and as helping people with heavy goods. Another current description says it loves training and voluntarily assists with construction and land clearing.

### D1 boundaries

```text
machoke_power_regulation_belt == source_backed
machoke_can_help_people_with_heavy_labor == source_backed
machoke_can_voluntarily_assist_construction_and_land_clearing == source_backed
voluntary_help_equals_owned_worker == false
helping_people_equals_setting_wide_labor_institution == false
belt_equals_player_equipment_or_loot == false
belt_equals_proof_of_modern_industry == false
```

Machoke is the strongest current Gen-I dossier pressure for **species-associated equipment whose provenance is not explained by the reviewed source**. The belt must not be silently reclassified as anatomy, yet the project also must not invent a factory, guild, trainer-issued device, mass-production chain or magical artifact explanation just to close P4.

### U1 unresolved belt provenance

```text
machoke_belt_maker == unresolved
machoke_belt_material == unresolved
machoke_belt_origin == unresolved
machoke_belt_replacement_cycle == unresolved
machoke_belt_wild_acquisition_path == unresolved
machoke_belt_removability_and_safe_handling == unresolved
```

P4 can represent this conservatively as `species_associated_object_state` with explicit provenance uncertainty. P5/P6 may later decide how a specific encounter depicts or sources the belt. D-034 direct encounterability can be satisfied through authored content without forcing ordinary baseline-era natural spawning or a universal manufacturing explanation.

### Labor / culture ownership

The source supports voluntary cooperation with people. It does not prove wages, coercion, ownership, construction crews, guild membership, task command vocabulary, settlement prevalence or any other institution.

A specific Machoke may help a community because of relationship/history/context. That relationship remains meaningful authored state; it is not a free labor resource or an excuse to skip companion-slot rules when the Pokémon travels as the player's companion.

## 10. #068 Machamp evidence packet

### C1 facts retained

The current official page establishes Machamp as Fighting type with four arms. It describes rapid punches and chops from multiple angles, arms that can react more quickly than conscious thought, and close-combat descriptions involving extremely high strike counts in a very short time.

### D1 boundaries

```text
machamp_four_arm_combat_capability == source_backed
machamp_extreme_multi_angle_strike_pressure == source_backed
machamp_high_strike_cadence == source_backed
four_arms_equals_four_turns == false
four_arms_equals_four_standard_actions == false
thousand_blows_equals_thousand_attack_rolls == false
Speed_2_equals_strike_cadence == false
```

Machamp proves again that six-axis ratings are not literal animation/action-frequency simulators. Its normalized Speed is 2 while official text still supports extraordinary arm reaction and strike cadence. The capability must therefore be represented through fictional pressure, threat pattern, close-range control, guard-breaking/multi-angle descriptions or authored hazard semantics rather than extra global action economy.

### Encounter / counterplay ownership

A hostile Machamp can make close range exceptionally dangerous. Counterplay should emphasize distance, terrain, line-of-approach control, avoiding grapples/encirclement and exploiting scene context rather than asking the engine to resolve hundreds of separate punches.

Exact simultaneous target count, strike frequency, per-arm independence, reaction time and stamina cost remain undefined for P5/P7.

## 11. Human-proximity ladder review

The seven species do **not** share one domestication flag. The evidence forms a ladder of different relationships:

```text
Meowth   -> territory + shiny-object interest; no direct human-affinity claim required
Persian  -> can be raised as pet, but difficult and vicious
Growlithe -> explicitly friendly/faithful to people; guarding behavior
Arcanine -> old human cultural observation and awe; no ownership claim required
Machop   -> self-directed training; no human labor claim required
Machoke  -> explicitly voluntary help with human work
Machamp  -> combat anatomy; no reviewed human-service claim required
```

Therefore:

```text
human_proximity_is_species_local == true
human_relationship_strength_is_not_type_derived == true
human_relationship_strength_is_not_evolution_auto_inherited == true
trainer_culture_required == false
```

A future-Kanto settlement can have narrow, historically earned relationships with one or more of these species without contradicting the world's rule that routine Pokémon ownership/containment/trainer culture is absent.

## 12. Culture, object, and chronology review

Four especially dangerous overreads are rejected:

1. **Meowth coin -> currency system:** false. A species-associated coin-shaped/gold feature does not prove project-era minting or standardized money.
2. **Persian admired fur -> luxury industry:** false. Admiration does not prove harvesting, trade volume or safe extraction.
3. **Arcanine ancient picture scroll -> exact project history:** false. The source proves old human observation somewhere in official fiction, not the exact future-Kanto timeline.
4. **Machoke belt -> manufacturing infrastructure:** false. The belt is source-backed; its production chain is not.

The project may later author local explanations where useful, but P4 records the distinction instead of laundering an inference into canon.

## 13. Training and action-economy review

The Machop family establishes two non-stat systems that must remain bounded:

```text
self_training_can_exist_without_level_system == true
individual_history_can_record_training_without_player_scaling == true
extreme_strength_is_not_Force_mass_formula == true
multi_limb_anatomy_is_not_extra_turn_economy == true
high_strike_cadence_is_not_Speed_formula == true
```

D-031 remains authoritative: ordinary species baselines are fixed, while exceptional/named individuals may receive explicit persistent traits/history. If a named Machop has trained unusually hard, that fact must be authored directly rather than generated from the player's level or an invisible grind curve.

Machamp's four arms may influence capabilities, restraint fiction, reach, close-combat threat and visual narration. They do not change the global turn/action contract during P4.

## 14. Evolution-family inheritance review

```text
Meowth_shiny_interest_auto_inherited_by_Persian == false
Persian_pet_evidence_auto_inherited_by_Meowth == false

Growlithe_human_affinity_auto_inherited_by_Arcanine == false
Arcanine_ancient_cultural_observation_auto_inherited_by_Growlithe == false

Machop_training_behavior_auto_inherited_by_Machoke_or_Machamp == false
Machoke_belt_auto_inherited_by_Machop_or_Machamp == false
Machoke_human_labor_auto_inherited_by_Machop_or_Machamp == false
Machamp_four_arm_action_semantics_auto_inherited_by_prior_stages == false
```

Family continuity can inform plausibility, but each dossier owns only claims supported for that stage.

Alolan/Galarian Meowth/Persian, Hisuian Growlithe/Arcanine and Gigantamax Machamp remain later-form/mechanic provenance context only.

## 15. Human Design Gate audit

**No blocking Human Design Gate is required.**

The project's existing direction already supports rare human-Pokémon bonds, settlement-specific relationships, species-sensitive culture and narrow Pokémon-dependent technology islands without normalized trainer culture.

Machoke's belt is unresolved but not currently blocking. The narrow representation is sufficient:

```text
machoke_belt_fact_preserved == true
belt_provenance_invented == false
universal_manufacturing_rule_required == false
baseline_spawn_authorization_required == false
later_phase_followup_allowed == true
```

Raise a Human Design Gate only if future full-schema authoring or implementation cannot close without a durable product decision about species-associated manufactured objects, ownership/labor institutions or action-economy changes. Current evidence does not force that decision.

## 16. Source-review result

```text
selected_species_count == 7
source_review_complete_count == 7
rating_profile_reproducible_count == 7
manual_rating_exception_count == 0
blocking_human_design_gate_count == 0
coverage_manifest_changed == false
ready_for_full_schema_authoring == true
```

Authoritative coverage remains:

```text
dossier_complete_count == 80
pilot_reviewed_count == 2
not_started_count == 69
draft_count == 0
blocking_p4_gate_count == 0
```

Expected state **only after** all seven full-schema dossiers and the Batch 11 completion audit pass atomically:

```text
dossier_complete_count == 87
pilot_reviewed_count == 2
not_started_count == 62
draft_count == 0
blocking_p4_gate_count == 0
```

## 17. Exact next work

Author the seven Batch 11 full-schema dossiers:

- `#052 Meowth`
- `#053 Persian`
- `#058 Growlithe`
- `#059 Arcanine`
- `#066 Machop`
- `#067 Machoke`
- `#068 Machamp`

Then create the Batch 11 dossier index/regression summary and completion audit. Promote only those seven coverage-manifest rows if every dossier passes the frozen schema, provenance review, human-proximity/culture/object/action-economy regressions, and no blocking Human Design Gate appears.

Do not begin P5 before the mandatory 151/151 P4 exit audit passes.

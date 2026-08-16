# P4 Batch 18 — Ancient Chronology, Elemental Physiology, and Resource-Scale Hazard Selection Plan

Status: **SELECTED — source review next**  
Date: **2026-08-16**  
Parent issue: **#5 — P4 Pokémon adaptation + complete Gen-I 151 species dossiers**

## Purpose

Batch 18 selects six remaining `not_started` species as one high-consequence world-assumption stress roster:

- #125 Electabuzz
- #126 Magmar
- #138 Omanyte / #139 Omastar
- #142 Aerodactyl
- #143 Snorlax

These species are deliberately grouped by **contract pressure rather than habitat or Pokédex adjacency**. Their current official descriptions contain claims about continuous electrical discharge, lightning feeding, extreme heat, lava contact, extinction and fossil restoration, ancient-continent flight, restoration casualties, enormous food intake, toxic digestion, and village-scale food loss. If those statements are copied literally into runtime rules, they can silently create power-grid assumptions, continuous temperature/electricity simulation, guaranteed terrain ignition, resurrection technology, ordinary living fossil populations, universal immunity, or economy-scale resource accounting.

Batch 18 therefore asks one shared question: **how does the project preserve extraordinary species-local physiology and deep-time evidence without letting isolated Pokédex wording rewrite the iron-age world model, chronology contract, encounter economy, or runtime architecture?**

This file is a selection plan only. The authoritative coverage manifest remains unchanged until claim-level source review, full-schema dossier authoring, contradiction checks, deterministic stat reproduction, and the Batch 18 completion audit pass.

## Selected roster

| Dex | Species | Primary contract pressure |
|---:|---|---|
| #125 | Electabuzz | constant electrical discharge and lightning-feeding ecology without a generic electrical aura, battery/power-grid economy, automatic paralysis, or modern energy-storage technology |
| #126 | Magmar | volcano habitat, extreme temperature wording, surface flames, lava bathing, and crater-birth legend without continuous heat simulation, universal ignition, literal invulnerability to lava, or confirmed supernatural origin |
| #138 | Omanyte | explicit antiquity/fossil-restoration wording and fossil predator evidence without assuming ordinary proto-Kanto survival, restoration technology, or unrestricted prehistoric-species presence |
| #139 | Omastar | extinction-cause interpretation plus tentacle restraint and fang predation without treating speculation as fact, creating universal constriction rules, or converting fossil status into ordinary abundance |
| #142 | Aerodactyl | amber-DNA restoration, severe ferocity/casualty wording, ancient aerial ecology, and weak ground movement without importing genetic resurrection technology, guaranteed lethal aggression, or unrestricted aerial fast travel |
| #143 | Snorlax | enormous daily food demand, unusual digestion, sleep/appetite cycle, and village granary-disaster evidence without continuous calorie accounting, universal poison immunity, automatic settlement destruction, or infinite inventory consumption |

Current authoritative coverage stays:

```text
dossier_complete_count == 129
pilot_reviewed_count == 2
not_started_count == 20
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

If all six later pass full authoring, the expected state is `135 complete / 2 pilot_reviewed / 14 not_started`. That promotion is not part of this selection scope.

## Selection evidence

Current primary official Pokémon Pokédex material is sufficient to justify this pressure set before the full source review:

- **Electabuzz:** current official material says its body constantly discharges electricity, that approaching it can make hair stand on end, and that it feeds on electrical energy by climbing tall trees beneath thunderclouds to await lightning strikes. Another current entry frames storing lightning in Electabuzz for later use as ongoing research. This is strong evidence for species-local electrical ecology while also exposing a modern-research/technology boundary that must not be back-projected into the ancient setting.
- **Magmar:** current official material places it near volcano mouths, gives an extreme body-temperature statement, describes sunlike wavering flames on its body, and says legend holds that it was born from a volcano crater. Another entry says a wounded Magmar bathes in lava to heal. These claims stress direct observation versus legend, discrete environmental capability versus continuous heat simulation, and severe fiction versus literal material/temperature formulas.
- **Omanyte:** current official material says it lived in ancient seas, mentions fossils bearing bite marks attributed to Archeops predation, and separately says it was restored from an ancient Helix Fossil excavated from terrain that was once ocean. This directly stresses deep-time chronology, extinct/restored framing, modern restoration context, and the difference between fossil evidence and a living ancient-era population.
- **Omastar:** current official material says its heavy shell is thought to have contributed to the species dying out and also describes it wrapping prey in tentacles before using sharp fangs. The extinction statement is interpretive rather than a universal certainty, while the predation claim must remain species-local rather than becoming a generic multi-limb restraint or automatic immobilization rule.
- **Aerodactyl:** current official material says it was restored from DNA found in amber and that the restored individual displayed greater-than-expected ferocity with casualties. Another entry says it flew freely over an ancient continent but was weak and slow when walking on the ground. This is a concentrated chronology, restoration, aggression, casualty-severity, flight-permission, and movement-state pressure case.
- **Snorlax:** current official material says it eats nearly 900 pounds of food per day, has digestive juices that can handle poisonous material, and in a Hisui-framed entry appears in villages and consumes whole rice granaries, with such incidents treated as grave disasters. These claims can justify serious authored resource and settlement pressure without creating exact daily simulation, universal poison immunity, guaranteed village targeting, or a proto-Kanto rice economy by default.

Official selection pointers, verified 2026-08-16:

- Electabuzz: https://sg.portal-pokemon.com/play/pokedex/0125
- Magmar: https://sg.portal-pokemon.com/play/pokedex/0126
- Omanyte: https://sg.portal-pokemon.com/play/pokedex/0138
- Omastar: https://sg.portal-pokemon.com/play/pokedex/0139
- Aerodactyl: https://sg.portal-pokemon.com/play/pokedex/0142
- Snorlax: https://sg.portal-pokemon.com/play/pokedex/0143

Full source review must still inventory version-tagged historical Pokédex evidence, pinned `SRC-DATA-001` species/type/base-stat/ability/evolution data, move/ability context, contradictions, later-family/form context, chronology-safe interpretation, and any wording that is numerical, legendary, researcher-scoped, restoration-scoped, mechanically encoded, hyperbolic, or version-specific before stronger claims are authored.

## Why these six now

The remaining 20 species contain several still-useful pressure clusters: constriction/venom, amphibious locomotion, aquatic combat, unusual body morphology, elemental physiology, fossil chronology, dormancy, and appetite. Batch 18 prioritizes the six with the greatest risk of forcing **world-level assumptions** if interpreted carelessly.

Completed P4 work already establishes species-local capability tags, fixed species baselines, bounded hazards, chronology-safe handling of modern institutions, discrete encounter-state resolution, player-agency protections, natural-weapon boundaries, environmental traversal limits, body-integrated elemental anatomy, extreme sensory claims, biological resource semantics, regeneration, terrain disturbance, folklore epistemics, and the separation of current official descriptions from literal ancient-world institutions.

Batch 18 adds or strengthens the following connected pressure:

1. **continuous-looking physiology versus discrete runtime state** — “constantly discharges,” extreme body temperature, surface flames, or large metabolic demand must not require per-frame electricity, heat, hunger, or environmental-damage simulation;
2. **modern energy/research context versus ancient technology** — current research into storing Electabuzz lightning cannot create batteries, grids, laboratories, standardized power capture, or an electricity economy in proto-Kanto;
3. **extreme numeric wording versus world physics** — temperature and food-mass statements are source facts/claims to preserve in prose and threat design, not automatic formulas for radius damage, ignition, caloric consumption, carrying capacity, or economy simulation;
4. **fossil evidence versus living population** — fossilized remains prove former existence, not ordinary survival in the project’s iron-age era;
5. **restoration wording versus available technology** — modern fossil/DNA restoration is provenance context, not an ancient player crafting loop or resurrection institution;
6. **D-034 encounterability versus abundance/chronology** — a fossil species can remain directly encounterable somewhere in total content without implying a stable breeding population, ordinary regional abundance, or historically normalized coexistence;
7. **interpretive extinction cause versus settled canon law** — “thought to be” or similar causal wording must remain theory/interpretation rather than hard deterministic ecology;
8. **predation/restraint versus universal control mechanics** — Omastar tentacles and Aerodactyl ferocity can support strong encounter pressure without automatic immobilization, unavoidable death, or action-economy exceptions;
9. **flight state versus generic traversal** — Aerodactyl’s aerial competence and weak ground gait are species-local state differences, not player fast travel, unrestricted carrying, or guaranteed escape denial;
10. **appetite burden versus global economy simulation** — Snorlax can be a severe local resource crisis without a daily food ledger running for every off-screen specimen;
11. **digestive resilience versus universal immunity** — tolerating poisonous/rotten food does not prove immunity to every toxin, hazard, disease, status effect, or deliberately concentrated poison;
12. **later-region settlement evidence versus proto-Kanto baseline** — Hisui villages, rice granaries, modern researchers, genetic restoration facilities, and later-family/form examples remain provenance context unless independently justified for this setting.

## Binding boundaries

Batch 18 consumes existing P2/P3/P4 contracts instead of introducing universal electricity, heat, fossil resurrection, hunger, settlement economy, or continuous environmental-simulation systems.

The batch must preserve these invariants:

1. `Electric`, `Fire`, `Rock`, `Water`, `Flying`, or `Normal` typing does not create generic discharge, ignition, lava immunity, fossil status, flight, appetite, poison immunity, or resource-consumption permissions;
2. ordinary Pokémon do not scale with the player; any exceptional Electabuzz, Magmar, Omanyte, Omastar, Aerodactyl, or Snorlax requires explicit persistent history/traits rather than hidden elite scaling;
3. Electabuzz electrical discharge remains species-local physiology and authored encounter pressure. It does not create a permanent damaging aura, automatic paralysis on proximity, or continuous electrical-field simulation;
4. Electabuzz lightning-feeding behavior does not grant weather prediction, guaranteed lightning attraction, immunity to every electrical source, unrestricted energy storage, or generic tree-climbing permission to all Electric types;
5. current research about storing Electabuzz lightning is modern researcher context. It does not establish ancient batteries, power grids, generators, standardized capture equipment, charging stations, laboratories, or an electricity market;
6. Magmar’s extreme body-temperature wording is preserved as source evidence but is not converted directly into heat radius, damage-over-time, ignition distance, armor failure, metal-melting, or real-world thermodynamic formulas;
7. visible flames on Magmar’s body do not imply that every nearby object automatically catches fire or that the engine must simulate ambient heat continuously;
8. Magmar lava bathing/healing remains a species-local environmental capability and recovery hook. It does not prove total lava immunity, unlimited regeneration, instant healing, or Fire-type-wide volcanic traversal;
9. crater-birth wording remains legend unless claim-level review establishes a different epistemic status. It cannot silently create spontaneous generation, divine creation, or generic elemental-birth cosmology;
10. Omanyte/Omastar fossil and ancient-sea evidence establishes deep-time provenance but does not by itself establish a living proto-Kanto population in the project era;
11. modern fossil restoration is outside the ancient technological baseline. No fossil revival machine, amber-DNA laboratory, Helix Fossil crafting recipe, or player resurrection loop is created by source wording alone;
12. D-034 remains binding: Omanyte, Omastar, and Aerodactyl must be directly encounterable somewhere in total content. The implementation may use an exceptional locality/event/survival circumstance if needed, but direct encounterability does not imply commonness or region-wide natural presence;
13. any exceptional living fossil population must be explicitly authored with locality, continuity, ecological burden, discovery state, and rarity rather than being inferred from the species’ mandatory inclusion;
14. Omanyte fossil bite-mark evidence involving Archeops is provenance/ecological evidence about deep time. It does not automatically establish living Archeops in proto-Kanto, expand the mandatory roster, or create a present-day predator relation;
15. Omastar extinction-cause wording must preserve uncertainty when the source presents it as a theory. A heavy shell cannot become a universal evolutionary failure law or deterministic movement penalty beyond evidence;
16. Omastar tentacle restraint and fang predation remain one entity acting through the ordinary P3 action model. Multiple tentacles do not grant extra turns, extra health pools, independent initiative slots, or automatic immobilization;
17. restraint, wrapping, or prey-capture wording always resolves through authored position, warning, eligibility, counterplay, escape, and consequence handling; it never silently removes player input;
18. Aerodactyl restoration-casualty evidence demonstrates severe threat but does not mean every Aerodactyl is permanently berserk, attacks all moving targets, always kills on contact, or cannot be escaped/de-escalated under authored circumstances;
19. Aerodactyl’s aerial capability is species-local. It does not create unrestricted vertical traversal, indefinite player carrying, safe long-distance fast travel, automatic first action, or guaranteed pursuit success;
20. Aerodactyl’s weak/slow ground gait can create meaningful movement-state tradeoffs without forcing a second species stat profile or continuous locomotion simulation unless later P5/P7 architecture requires it;
21. Mega Aerodactyl is outside the mandatory Gen-I baseline. Mega Evolution wording does not define ordinary Aerodactyl anatomy, aggression, available stones, or ancient Mega institutions;
22. Snorlax’s large food demand is an authored ecological/settlement burden, not a continuously simulated calorie ledger, automatic inventory drain, or requirement to decrement off-screen world food every game day;
23. source quantities such as nearly 900 pounds per day remain evidence and narrative scale cues. They are not converted directly into economy formulas, carry-weight rules, settlement population equations, or mandatory feeding UI;
24. Snorlax digestion of poisonous/ground food does not create universal immunity to poison, disease, contaminated water, toxins from every species, status effects, or chemically arbitrary hazards;
25. Hisui village/rice-granary evidence remains region/era-scoped social evidence. It may justify the possibility of settlement-scale food disasters without proving rice agriculture, identical village institutions, or the same human-Pokémon relationship in proto-Kanto;
26. sleep/dormancy never grants automatic invulnerability, forced time skip, universal road-block status, or immunity to surprise. Waking, avoiding, observing, redirecting, or suffering consequences must remain authored encounter possibilities;
27. an appetite or sleep cycle may use coarse authored state transitions or cached schedule flags. It must not require per-frame metabolism, pathfinding to food, or a continuously simulated regional food economy;
28. modern abilities such as Static, Flame Body, Swift Swim, Shell Armor, Rock Head, Pressure, Immunity, and Thick Fat remain source context; battle percentages, PP effects, and exact trigger semantics are not automatically diegetic ancient rules;
29. Elekid/Electivire, Magby/Magmortar, Mega Aerodactyl, Munchlax/Gigantamax Snorlax, Archeops, Octillery, and other later-generation relationships/forms remain provenance context under D-032 unless separately relevant to ancestry or source interpretation;
30. all six remain one Pokémon = one ordinary turn, one health state, one initiative presence, and one visible companion slot regardless of tentacles, electrical output, body flames, enormous mass, or flight capability;
31. body-integrated elemental output may justify severe threat/hazard tags without literal real-world energy equations. Hazard severity remains separate from six-axis ratings;
32. no claim in this batch requires continuous per-frame simulation. Discrete authored encounters, cached eligibility/state, and event-triggered environment consequences remain the preferred later-runtime representation unless P5/P7 evidence proves otherwise.

## Fossil chronology interpretation target

Batch 18 must not pre-decide a single universal explanation for why Omanyte, Omastar, and Aerodactyl can be encountered in this project era. Source review should first establish the strongest defensible chronology constraints.

The preferred representation order is:

1. preserve canon statements about antiquity, fossil evidence, extinction, restoration, and survival exactly at their actual epistemic strength;
2. preserve D-034 direct encounterability as a product requirement;
3. seek the narrowest dossier-local encounter explanation that satisfies both without creating a global resurrection technology or rewriting the setting calendar;
4. keep any surviving enclave, exceptional locality, relic ecosystem, singular individual, or other project-authored explanation explicitly labeled as project extrapolation rather than canon;
5. raise a Human Design Gate only if claim-level review proves that no bounded dossier-local interpretation can satisfy both canon provenance and D-034.

This means the selection itself does **not** establish that fossil species are common, naturally breeding in ordinary proto-Kanto waters, resurrected by humans, or transported through time.

## Runtime/performance interpretation target

The project should preserve these extraordinary species without paying for continuous simulation that does not improve play.

Preferred later representations are:

- cached/coarse Electabuzz charge or storm-opportunity state instead of continuous electrical-field calculations;
- event-triggered Magmar heat/ignition consequences instead of ambient per-frame temperature propagation;
- authored fossil encounter eligibility/location flags instead of simulation of extinction/repopulation history;
- discrete Aerodactyl `airborne` / `grounded` encounter states instead of general rigid-body flight physics;
- coarse Snorlax `feeding` / `sleeping` / `roused` / `moving` states plus authored settlement-resource consequences instead of background calorie/economy ticks.

P4 defines narrative/mechanical contracts only; P5/P7 own implementation details. These notes exist to prevent the dossiers from accidentally requiring unnecessary GC-heavy or per-frame systems later.

## Human Design Gate test

**No blocking Human Design Gate is required for Batch 18 selection.** Existing owner-approved contracts already cover:

- D-034 direct encounterability separate from baseline natural presence and abundance;
- fixed species baselines plus explicit exceptional-individual authoring;
- species-local capabilities instead of type-wide permissions;
- source/version/epistemic scope instead of literalizing every Pokédex statement;
- chronology-safe handling of modern scientists, restoration technology, later evolutions/forms, and regional observations;
- player-agency-safe escalation, restraint, pursuit, and severe hazard resolution;
- hazard severity separate from six-axis raw-stat interpretation;
- discrete authored state transitions instead of mandatory continuous simulation.

The likely hardest question—how a canonically ancient/extinct/restored species is directly encountered—can currently remain dossier-local under D-034. Raise a Human Design Gate only if source review reveals a durable product rule that cannot be represented through rarity, exceptional locality/event, provenance status, or existing encounter contracts.

## Source-review work package

For each selected species, the next scope must:

1. inventory current and historically relevant version-tagged official Pokédex evidence for electrical discharge/feeding, volcano/heat/lava claims, fossil/deep-time provenance, restoration, extinction wording, restraint/predation, flight/ground locomotion, appetite, sleep, digestion, and settlement-resource consequences;
2. classify each claim as direct observation, measurement/numeric statement, researcher interpretation, legend/hearsay, restoration-scoped observation, version-scoped extraordinary wording, cross-source synthesis, conservative inference, project extrapolation, or unresolved;
3. inspect pinned `SRC-DATA-001` species/type/base-stat/ability/evolution data under the existing provenance strategy;
4. reproduce `p4-six-axis-v1` profiles for all six species with zero hidden manual exceptions unless a separately justified project decision explicitly says otherwise;
5. audit current ability/move battle semantics as source context rather than automatic ancient mechanics;
6. separate Electabuzz/Magmar elemental physiology from power infrastructure, continuous aura simulation, exact physics, automatic contact consequences, and type-wide permissions;
7. separate Omanyte/Omastar/Aerodactyl deep-time evidence from modern restoration technology and establish the narrowest chronology-safe D-034 encounterability interpretation for each;
8. preserve uncertainty around extinction causes, legends, researcher statements, and reconstructed/restored-individual behavior instead of flattening them into universal species law;
9. separate Omastar restraint and Aerodactyl ferocity/casualty evidence from automatic immobilization, permanent hostility, unavoidable combat, or player-agency removal;
10. separate Snorlax appetite/digestion/sleep evidence from exact economy simulation, universal poison immunity, automatic settlement destruction, or background daily metabolism;
11. audit Elekid/Electivire, Magby/Magmortar, Mega Aerodactyl, Munchlax/Gigantamax Snorlax, Archeops, Octillery, later abilities, modern research, and regional settlement observations so post-Generation-I or later-era context does not silently expand baseline roster/rules;
12. run P2/P3/P4 contradiction checks, one-entity/action-economy checks, player-agency checks, chronology-safe ancient-world interpretation, evolution/family inheritance checks, D-034 encounterability separation, and continuous-simulation requirement checks;
13. raise a Human Design Gate only if a durable owner-facing rule is unavoidable.

## Promotion gate

Do not change these rows yet:

```text
#125 electabuzz = not_started
#126 magmar     = not_started
#138 omanyte    = not_started
#139 omastar    = not_started
#142 aerodactyl = not_started
#143 snorlax    = not_started
```

Manifest promotion requires a Batch 18 source review, complete schema-compliant dossiers for all six species, provenance and contradiction audits, deterministic rating reproduction, zero unresolved blocking gates, and a passing Batch 18 completion audit.

## Validation target for this selection change

```text
main...agent/p4-batch18-ancient-physiology-selection
status == ahead
changed_files == 2
coverage_manifest_changed == false
selected_species_count == 6
selected_species_all_not_started_on_main == true
blocking_human_design_gate_count == 0
next_step == batch18_claim_level_source_review
```

## Next

Create `docs/P4_BATCH_18_SOURCE_REVIEW.md` for #125 Electabuzz, #126 Magmar, #138 Omanyte, #139 Omastar, #142 Aerodactyl, and #143 Snorlax using current primary official evidence plus pinned `SRC-DATA-001`. Do not promote the coverage manifest and do not begin P5.

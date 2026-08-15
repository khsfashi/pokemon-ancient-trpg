# P4 Batch 15 — Botanical Bodies, Chemical Ecology, and Lure Predation Selection Plan

Status: **SELECTED — source review next**  
Date: **2026-08-16**  
Parent issue: **#5 — P4 Pokémon adaptation + complete Gen-I 151 species dossiers**

## Purpose

Batch 15 selects six remaining `not_started` species as one coherent botanical-body / chemical-ecology / predatory-lure stress roster:

- #043 Oddish / #044 Gloom / #045 Vileplume
- #069 Bellsprout / #070 Weepinbell / #071 Victreebel

The roster is not selected because all six share Grass/Poison typing. Together they stress a still-underrepresented setting boundary: **plantlike Pokémon remain living mobile creatures with species-local rooting, scent, pollen, acid, cutting anatomy and predatory behavior; they must not collapse into scenery, gatherable herbs, universal Grass-type resource nodes, passive poison auras, irresistible charm effects, generic corrosion rules, or automatic harvest loops.**

This file is a selection plan only. The authoritative coverage manifest remains unchanged until claim-level source review, full-schema dossier authoring, contradiction checks, and the Batch 15 completion audit pass.

## Selected roster

| Dex | Species | Primary contract pressure |
|---:|---|---|
| #043 | Oddish | nocturnal root-walking and daytime underground stillness without treating a plantlike Pokémon as scenery, a harvestable weed, or a generic burrower |
| #044 | Gloom | prey-attracting nectar and powerful odor without irresistible compulsion, universal disgust/fear mechanics, or safe collectible nectar by default |
| #045 | Vileplume | allergenic poisonous pollen dispersal without a permanent poison aura, automatic area denial, or Grass/Poison-wide pollen rules |
| #069 | Bellsprout | fast vine reaction plus temporary deep-rooted rehydration that prevents escape without omniscient motion detection, permanent rooting, or generic plant immobility |
| #070 | Weepinbell | self-protected internal acid, cutting leaf anatomy, and highly corrosive fluid without literal matter deletion, universal acid damage, or detachable weapon/harvest semantics |
| #071 | Victreebel | aroma-based prey lure and dissolving predation whose acid changes after feeding without mind control, unavoidable capture, stacking kill-power math, or an automatic consumable-resource loop |

Current authoritative coverage stays:

```text
dossier_complete_count == 111
pilot_reviewed_count == 2
not_started_count == 38
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

If all six later pass full authoring, the expected state is `117 complete / 2 pilot_reviewed / 32 not_started`. That promotion is not part of this selection scope.

## Selection evidence

Current primary official Pokémon Pokédex material is sufficient to justify this pressure set before the full source review:

- **Oddish:** current official material says it can travel on its two roots at night and remains still underground during the day. This gives direct species-local evidence for locomotion and buried rest without implying generic Grass-type rooting, tunneling, camouflage, or plant-object status.
- **Gloom:** current official material identifies the mouth fluid as nectar used to attract prey and separately describes the sticky nectar as sweet but strongly repulsive in smell. This supports a chemical/sensory encounter layer while leaving exact prey response, range, resistance and human interpretation for source review.
- **Vileplume:** current official material describes allergenic poisonous pollen scattered from its large petals. This is direct evidence for a potentially serious environmental hazard, but not for a constant radius, unavoidable poisoning, universal respiratory model, or exact concentration formula.
- **Bellsprout:** current official material says it reacts immediately to nearby movement with its vines and that it roots its feet deeply to rehydrate, becoming unable to flee while doing so. This creates a strong temporary state-dependent capability boundary: detection/reaction is not omniscience, and rooting is not a permanent species-wide immobilization rule.
- **Weepinbell:** current official material says it contains acid while secreting a protective fluid, uses leafy parts as cutters, and can spit a strongly dissolving fluid. These claims must remain species-local and source-scoped rather than creating a universal acid/corrosion subsystem or literal `dissolves everything` simulation.
- **Victreebel:** current official material says it lures prey with a nectar-like aroma and dissolves prey with fluid; another entry says its acid becomes sweeter after dissolving many prey. This supports lure/predation and qualitative feeding-history hooks without proving mind control, guaranteed prey helplessness, recursive power scaling, or automatic harvested acid production.

Official selection pointers, verified 2026-08-16:

- Oddish: https://sg.portal-pokemon.com/play/pokedex/0043
- Gloom: https://sg.portal-pokemon.com/play/pokedex/0044
- Vileplume: https://sg.portal-pokemon.com/play/pokedex/0045
- Bellsprout: https://sg.portal-pokemon.com/play/pokedex/0069
- Weepinbell: https://sg.portal-pokemon.com/play/pokedex/0070
- Victreebel: https://sg.portal-pokemon.com/play/pokedex/0071

Full source review must still inventory version-tagged historical Pokédex evidence, pinned `SRC-DATA-001` species/type/base-stat/ability/evolution data, move/ability context, contradictions, post-Gen-I evolution contamination, chronology-safe interpretation, and any source wording that is clearly hyperbolic or mechanically encoded before stronger claims are authored.

## Why these six now

Completed P4 batches already cover stat normalization, exceptional individuals, evolution/maturation boundaries, composite identity, chronology-safe non-presence, social encounter units, legendary rarity, biological-resource semantics, regeneration, mind-state/agency boundaries, toxin delivery, nonvisual navigation, aquatic/terrain/temperature permissions, state-dependent capability loss, human proximity, voluntary labor, species-associated objects, multi-limb action economy, body-integrated elemental anatomy, qualitative condition signals, battle-history exceptionalism, aerial traversal limits, territoriality, multi-head control, subterranean traversal, lithic bodies, terrain disturbance, rolling hazards and nonlethal shed materials.

Batch 15 adds six connected regression surfaces that remain insufficiently exercised:

1. **plantlike body versus object/resource semantics** — Oddish and Bellsprout can remain still or rooted in ways that resemble ordinary vegetation, but a Pokémon never becomes scenery, inventory, a free herb node, crop object, or automatic forage result merely because it looks botanical;
2. **rooting/buried state versus generic Grass traversal** — Oddish's daytime underground stillness and Bellsprout's rehydration rooting are explicit species-local states. They do not imply that Grass typing grants burrowing, subterranean breathing, instant rooting, terrain anchoring, or hidden movement;
3. **chemical signals versus mind control** — Gloom and Victreebel use nectar/aroma in prey attraction. Attraction must preserve sensing, context, counterplay and uncertainty rather than becoming automatic command, universal charm, player-agency removal, or a hidden social-stat replacement;
4. **airborne pollen versus universal poison aura** — Vileplume has direct allergenic/poisonous pollen evidence, but exact range, persistence, concentration, wind interaction, exposure route and consequence severity must remain authored context rather than a continuous real-time cloud simulation;
5. **corrosive digestion versus universal destruction** — Weepinbell and Victreebel have strong acid/dissolving evidence. Source hyperbole such as dissolving everything cannot become matter deletion, automatic armor destruction, terrain deletion, one-hit kill, fixed real-world pH math, or a global acid-resistance subsystem;
6. **predation history versus farmable scaling/resources** — Victreebel's sweeter acid after repeated prey dissolution is a qualitative biology/behavior clue. It does not prove permanent stat growth, kill-XP, recursive encounter scaling, guaranteed stronger corrosion, or an exploitable acid-harvest progression loop.

This roster also strengthens the ancient-world survival fantasy without adding a generic botany simulator. Vegetation-like silhouettes, odor, pollen, rooted states and lure behavior can create readable route hazards and investigation opportunities through discrete authored event states that P5 can consume later.

## Binding boundaries

Batch 15 consumes existing P2/P3/P4 contracts instead of introducing universal plant, scent, allergy, poison-cloud, corrosion, agriculture or harvesting subsystems.

The batch must preserve these invariants:

1. `Grass` or `Poison` typing alone does not grant rooting, underground rest, plant camouflage, motion sensing, vines, pollen, nectar, acid, lure behavior, cutting leaves, poison clouds, photosynthesis rules, agriculture utility, harvest value, or edible/medicinal status;
2. plantlike appearance never makes a Pokémon scenery, a crop, an herb node, inventory, automatic forage, or an object that can be harvested without encounter/ethical context;
3. Oddish walking on roots is species-local locomotion. Its source travel distance is not converted into per-round meters, map speed, guaranteed nighttime travel, or generic Grass-type mobility;
4. Oddish remaining underground during the day does not prove perfect concealment, burrowing through arbitrary substrates, indefinite subterranean travel, immunity to surface hazards, or automatic ambush;
5. the modern scientific-name wording associated with Oddish is source evidence, not proof that ancient proto-Kanto inhabitants use modern taxonomy or terminology;
6. Gloom nectar and odor do not automatically compel approach, inflict a status condition, defeat smell resistance, or function as freely harvestable bait/food/medicine;
7. prey-attraction wording does not establish that every human or Pokémon species reacts identically. Exact susceptible prey classes, range and countermeasures remain source-review/dossier questions;
8. Vileplume pollen can be a severe authored hazard without becoming a constant passive aura, unavoidable poisoning, map-wide contamination, exact concentration/radius formula, or a continuous particle/dispersion simulation requirement;
9. allergenic and poisonous effects remain distinguishable evidence categories. The project must not silently collapse allergy, irritation and toxin exposure into one generic `poison` mechanic;
10. Bellsprout detecting nearby movement does not grant omnidirectional perfect awareness, wall-penetrating sensing, automatic initiative, unavoidable reaction attacks, or immunity to stealth/deception;
11. Bellsprout's deep-rooted rehydration is a state-dependent tradeoff. It does not imply permanent immobility, generic rooting immunity to forced movement, automatic healing, or a Grass-type water-absorption rule;
12. Weepinbell's acid/protective fluid combination is species-local physiology. Protective fluid does not imply universal acid immunity, and acid wording does not justify real-world chemistry simulation;
13. `dissolves everything`-style source language must be treated conservatively as extreme corrosive evidence, not literal deletion of every material, guaranteed armor/weapon destruction, instant corpse disposal, or automatic lethality;
14. Weepinbell's cutting leafy anatomy remains body anatomy, not detachable blades, free equipment, automatic crafting stock, or a guaranteed harvest result;
15. Victreebel's nectar-like aroma does not create mind control, surrender, pathfinding toward the Pokémon, player input suppression, or an unavoidable trap state;
16. prey being described as helpless after lure/capture does not prove every target lacks counterplay. Encounter design must preserve telegraphing, resistance, escape or consequence ladders where fiction supports them;
17. Victreebel acid becoming sweeter after repeated feeding is qualitative source context. It does not create kill-XP, hidden levels, permanent stat growth, infinitely scaling acid strength, or a farmable feeding loop;
18. chemical fluids/pollen are not automatic loot. Collection, preservation, use, danger, ethics and ownership require explicit species/local context and later P6 resource treatment where relevant;
19. `Chlorophyll` and other modern battle abilities/move semantics remain modern mechanic context until source review establishes a separately supported diegetic interpretation; modern percentage/speed formulas are not copied literally;
20. Bellossom and Sun Stone-related later-generation material remain outside the mandatory Gen-I baseline except as clearly labeled evolution/provenance context. Vileplume remains the mandatory Gen-I evolution endpoint for this branch's P4 coverage;
21. modern Leaf Stone evolution metadata is source context rather than proof of standardized ancient trade, inventory abundance, or a generic evolution-item economy;
22. evolution-family claims remain stage-local unless source evidence supports inheritance. Oddish behavior cannot be silently copied to Gloom/Vileplume, and Bellsprout behavior cannot be silently copied to Weepinbell/Victreebel;
23. D-034 direct encounterability remains separate from baseline-era natural presence, local abundance and ordinary companionship;
24. ordinary species do not scale to the player; exceptional/named individuals require explicit persistent authoring rather than generic elite multipliers;
25. no chemical or plant capability in this batch creates a continuous environmental simulation requirement for P5/P7. Discrete event-state hooks, authored exposure windows and cached eligibility checks remain sufficient unless a later explicit architecture decision says otherwise.

## Human Design Gate test

**No blocking Human Design Gate is required for Batch 15 selection.** Existing owner-approved contracts already distinguish:

- Pokémon from scenery/inventory/resource nodes;
- source-backed species capabilities from type-wide permissions;
- authored hazards from universal real-world simulation;
- attraction or sensory influence from player-agency removal;
- anatomy/secretions from automatic loot or crafting resources;
- qualitative biology from kill-XP, level scaling or farmable permanent growth;
- modern evolution/battle metadata from ancient setting institutions;
- mandatory direct encounterability from baseline-era spawn authorization.

If source review exposes conflicting statements about prey attraction, pollen toxicity/allergy, acid strength, rooting, feeding history, or ancient-use plausibility, preserve source/version scope and author conservatively. Raise a Human Design Gate only if playable behavior cannot remain coherent without a new persistent owner-facing rule.

## Source-review work package

For each selected species, the next scope must:

1. inventory current and historically relevant version-tagged official Pokédex evidence for plantlike stillness, root locomotion, buried/rest states, nectar/odor, pollen, motion reaction, rooting/rehydration, acid, cutting anatomy, lure predation and feeding-history changes;
2. inspect pinned `SRC-DATA-001` species/type/base-stat/ability/evolution data under the existing provenance strategy;
3. audit `Chlorophyll`, Grass/Poison typing, relevant moves and modern status mechanics as source context rather than automatic ancient physiology;
4. classify every chemical/body claim as direct official fact, cross-source synthesis, conservative inference, project extrapolation, hyperbolic/version-scoped wording, or unresolved;
5. distinguish plantlike appearance and temporary rooted/still states from object, harvest, forage, crop and generic terrain semantics;
6. distinguish scent/nectar attraction from mind control, social-stat replacement, guaranteed prey capture and player-agency removal;
7. distinguish pollen/allergy/toxin evidence from a generic poison aura or continuous atmospheric simulation;
8. distinguish acid/dissolving evidence from universal material destruction, real-world chemistry formulas and automatic equipment/terrain deletion;
9. audit Bellossom/Sun Stone and other post-Gen-I evolutionary context so later-generation material does not contaminate the mandatory Gen-I branch;
10. run P2/P3/P4 contradiction checks, evolution-stage inheritance checks, resource/harvest ethics checks, chronology-safe ancient-world interpretation, and D-034 encounterability separation;
11. raise a Human Design Gate only if a durable product rule is actually unavoidable.

## Promotion gate

Do not change these rows yet:

```text
#043 oddish      = not_started
#044 gloom       = not_started
#045 vileplume   = not_started
#069 bellsprout  = not_started
#070 weepinbell  = not_started
#071 victreebel  = not_started
```

Manifest promotion requires a Batch 15 source review, complete schema-compliant dossiers for all six species, provenance and contradiction audits, evolution-family consistency review, botanical-body/chemical-hazard/lure-predation regressions, refreshed manifest audit, and `P4_BATCH_15_COMPLETION_AUDIT` = PASS.

## Exact next work

Create **P4 Batch 15 source review** for these six species. Establish evidence-backed boundaries for plantlike bodies versus scenery/resources, rooting/buried states versus type-wide traversal, chemical attraction versus compulsion, pollen versus passive poison aura, acid/digestion versus universal destruction, and feeding-history biology versus farmable scaling.

Do not promote the manifest yet. Do not begin P5.

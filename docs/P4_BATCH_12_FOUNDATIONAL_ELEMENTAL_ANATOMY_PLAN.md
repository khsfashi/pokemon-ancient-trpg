# P4 Batch 12 — Foundational Elemental Anatomy, Condition Signals, and Starter-Meta Boundary Selection Plan

Status: **SELECTED — source review next**  
Date: **2026-08-15**  
Parent issue: **#5 — P4 Pokémon adaptation + complete Gen-I 151 species dossiers**

## Purpose

Batch 12 selects the three original #001-#009 evolution families as one coherent nine-species stress roster:

- #001 Bulbasaur / #002 Ivysaur / #003 Venusaur
- #004 Charmander / #005 Charmeleon / #006 Charizard
- #007 Squirtle / #008 Wartortle / #009 Blastoise

The roster is not selected merely because it occupies the beginning of the National Pokédex. These families collectively stress a still-underrepresented boundary: **source-backed body-integrated elemental anatomy, life/condition signals, environmental energy relationships, and battle-history descriptions must remain species-local fiction instead of becoming detachable equipment, hidden universal HP rules, generic elemental physiology, modern battle mechanics, or a normalized “starter Pokémon” institution in the ancient setting.**

This file is a selection plan only. The authoritative coverage manifest remains unchanged until source review, full-schema authoring, contradiction checks, and the Batch 12 completion audit pass.

## Selected roster

| Dex | Species | Primary contract pressure |
|---:|---|---|
| #001 | Bulbasaur | seed present from birth, growth nutrient reserve, body-integrated plant anatomy rather than carried item/equipment |
| #002 | Ivysaur | sunlight-linked strength and bud growth, bloom aroma, environmental energy without a generic Grass-type sunlight formula |
| #003 | Venusaur | solar-energy conversion and seasonal strength, large flower anatomy, stage-specific environmental capability |
| #004 | Charmander | tail flame as life-force/health signal without turning it into a literal HP bar, binary death switch, or generic Fire-type rule |
| #005 | Charmeleon | hotheaded aggression and heat raised by its burning tail without importing a universal ambient-temperature formula |
| #006 | Charizard | flight plus hotter flames with accumulated battle experience without kill-XP, visible levels, grind loops, or Dragon-type assumptions |
| #007 | Squirtle | post-birth shell hardening and mouth foam, biological development distinct from item armor or ordinary evolution |
| #008 | Wartortle | prey stalking plus longevity symbolism and human admiration without proving common pet ownership, harvesting, or a longevity mechanic |
| #009 | Blastoise | shell-integrated jet nozzles, recoil management, and rocket-like charge without proving human cannon/rocket technology or detachable weapon equipment |

Current coverage stays:

```text
dossier_complete_count == 87
pilot_reviewed_count == 2
not_started_count == 62
draft_count == 0
blocking_p4_gate_count == 0
```

If all nine later pass full authoring, the expected state is `96 complete / 2 pilot_reviewed / 53 not_started`. That promotion is not part of this selection scope.

## Selection evidence

Current official Pokémon Pokédex material is sufficient to justify this pressure set before the full source review:

- **Bulbasaur:** official material says it carries a seed on its back from birth and uses nutrients packed into that seed while growing.
- **Ivysaur:** official material says sunlight causes strength to well up within it and enlarges the bud on its back; another current entry describes the back bulb growing as it absorbs nutrients and producing a pleasant aroma when it blooms.
- **Venusaur:** official material says it converts sunlight into energy and can become more powerful in summer; another entry describes the broad flower petals catching sunlight to fill its body with power.
- **Charmander:** official material explicitly treats the tail flame as a signal of life-force/condition: it weakens when Charmander is weak and burns vigorously when healthy. A healthy tail flame also does not simply extinguish from minor wetting.
- **Charmeleon:** official material describes the burning tail raising surrounding temperature and separately describes a hotheaded temperament that seeks battle.
- **Charizard:** official material describes high-altitude flight and states that greater battle experience can correspond to hotter flames.
- **Squirtle:** official material says its shell is initially soft after birth and rapidly hardens; it also sprays potent foam from its mouth.
- **Wartortle:** official material describes its furry tail as a symbol of longevity that makes it popular among older people, and separately describes waterborne prey stalking.
- **Blastoise:** official material describes deliberate body-weight increase to resist recoil from water jets and shell nozzles used for forceful jet propulsion/charging.

Official selection pointers:

- Bulbasaur: https://sg.portal-pokemon.com/play/pokedex/0001
- Ivysaur: https://sg.portal-pokemon.com/play/pokedex/0002
- Venusaur: https://sg.portal-pokemon.com/play/pokedex/0003
- Charmander: https://sg.portal-pokemon.com/play/pokedex/0004
- Charmeleon: https://sg.portal-pokemon.com/play/pokedex/0005
- Charizard: https://sg.portal-pokemon.com/play/pokedex/0006
- Squirtle: https://sg.portal-pokemon.com/play/pokedex/0007
- Wartortle: https://sg.portal-pokemon.com/play/pokedex/0008
- Blastoise: https://sg.portal-pokemon.com/play/pokedex/0009

These are selection pointers only. Full Batch 12 source review must still inventory versioned entries, pinned structured species/type/base-stat/ability/evolution data, move/ability context, contradictions, chronology-safe interpretation, and stage-specific capability inheritance before stronger claims are authored.

## Why these nine now

Completed P4 batches already cover stat normalization, stat-independent hazards, exceptional individuals, multiple evolution boundaries, composite identity, chronology-safe non-presence, social encounter units, legendary rarity, biological-resource semantics, regeneration, mind-state/agency boundaries, toxin delivery, nonvisual navigation, environmental permissions, state-dependent capability loss, human proximity, voluntary labor, species-associated objects, and multi-limb action economy.

Batch 12 adds five connected regression surfaces that remain insufficiently exercised:

1. **body-integrated organs versus items/equipment** — seeds, bulbs, flowers, tail flames, shells and shell nozzles are parts of the Pokémon's biology or persistent body state; their presence does not create inventory slots, loot, detachable weapons or ordinary craft recipes;
2. **diegetic condition signals versus numerical battle UI** — Charmander's flame can visibly correlate with condition, but that does not prove exact HP values, a universal low-HP threshold, or automatic death from one visual state change;
3. **modern low-HP ability metadata versus ancient biology** — Overgrow, Blaze and Torrent may remain canonical battle-mechanic source context without being copied as a universal ancient physiological trigger at a specific health percentage;
4. **environment/history effects versus generic progression formulas** — sunlight, season, heat, recoil and battle experience can matter where source-backed, but do not create type-wide weather formulas, kill-XP, visible levels or repeatable grind-to-power rules;
5. **franchise starter role versus setting ecology** — these species' familiar starter-selection role in modern games is not evidence that the ancient setting distributes them to novices, treats them as safe beginner companions, breeds them institutionally, or normalizes ownership.

Keeping all three complete evolution families together also makes stage-local inheritance testable: facts about Bulbasaur's seed reserve, Ivysaur's bud, Venusaur's flower, Charmander's condition signal, Charmeleon's aggression, Charizard's flight, Squirtle's shell hardening, Wartortle's cultural symbolism, and Blastoise's jet anatomy must not be copied across family stages without evidence.

## Binding boundaries

Batch 12 consumes existing P2/P3/P4 contracts instead of introducing a universal starter, elemental-physiology, weather, equipment, or XP subsystem.

The batch must preserve these invariants:

1. a biological organ, attached structure or persistent anatomy is not automatically removable equipment, loot, a crafting ingredient, or a player-usable item;
2. Bulbasaur's seed and later plant structures do not prove ordinary detachable plant harvesting or a generic symbiote subsystem;
3. Grass typing does not by itself imply photosynthesis, sunlight charging, seasonal bonuses, sleep/rooting behavior, plant anatomy, poison emission, or terrain control;
4. Ivysaur/Venusaur sunlight evidence remains species/stage-local unless broader evidence explicitly supports inheritance;
5. Charmander's tail flame is a qualitative condition/life-force signal, not a visible numeric HP bar, exact percentage meter, or permission to infer every internal injury from flame size;
6. source text connecting Charmander's flame to life-force does not by itself establish a universal rule that temporary extinguishing always equals instant death; contradiction review must preserve version-specific wording and uncertainty;
7. Fire typing does not imply every Fire Pokémon has a body flame, raises ambient temperature, is immune to ordinary fire consequences, or exposes a readable health signal;
8. Charmeleon's hotheaded behavior is a species/stage tendency, not a Fighting-style compulsory duel rule or a generic rage meter;
9. Charizard's battle-experience wording does not create kill-XP, visible levels, automatic stat growth after encounters, player-scaled enemies, or an infinite training loop;
10. Charizard's Fire/Flying identity does not make Dragon typing, dragon-companion social assumptions, or later Mega/Gigantamax form rules part of the baseline;
11. Squirtle's shell hardening after birth is biological development/maturation and must remain distinct from evolution, equippable armor and human smithing;
12. Water typing does not imply a shell, amphibious safety, high-pressure jets, recoil immunity, unlimited water generation, or identical aquatic behavior;
13. Wartortle's longevity symbolism and popularity among older people establish cultural observation/valuation only where evidence supports it; they do not prove common pet ownership, tail harvesting, trade, immortality, extended lifespan for humans, or a universal blessing mechanic;
14. Blastoise's shell nozzles are species anatomy. “Cannon”, “jet”, and “rocket” comparison language does not prove that the project's humans possess cannons, rockets, pressure vessels, modern metallurgy or analogous infrastructure;
15. Blastoise recoil and body-mass behavior do not create a generic Force-to-recoil, weight-to-knockback, or structure-damage formula;
16. Overgrow, Blaze and Torrent are canonical mechanic/context data but do not automatically become literal ancient low-health physiology at a fixed HP threshold;
17. modern game starter-selection availability is not canon evidence for ancient settlement distribution, beginner safety, routine companionship, domestication, breeding, or guaranteed baseline-era natural presence;
18. full dossier coverage and D-034 direct encounterability remain separate from baseline-era spawn authorization;
19. evolution-family claims remain stage-local unless source evidence supports inheritance;
20. Mega Evolution, Gigantamax, later forms/mechanics, and post-Generation-I family additions remain outside the mandatory baseline unless used only as clearly labeled provenance context.

## Human Design Gate test

**No blocking Human Design Gate is required for Batch 12 selection.** Existing owner-approved contracts already distinguish:

- source-backed facts from project extrapolation;
- biological capability from ordinary equipment/infrastructure;
- Pokémon condition/threat from human HP/Vitality UI;
- maturation from evolution;
- battle history/exceptional individuals from kill-XP and visible leveling;
- companionship from starter/trainer ownership;
- mandatory dossier coverage/direct encounterability from baseline-era natural spawn authorization.

If source review reveals a version conflict around Charmander's tail flame, Blastoise's anatomical nozzles, or another claim, the default response is to preserve the conflict/version scope rather than forcing a universal lore rule. A Human Design Gate should be raised only if later playable behavior truly cannot remain conservative without an owner-authored persistent rule.

## Source-review work package

For each selected species, the next scope must:

1. inventory current official version-tagged Pokédex evidence relevant to body-integrated anatomy, health/condition signals, environmental energy, aggression, flight, shell development, cultural symbolism and jet/recoil behavior;
2. inspect pinned `SRC-DATA-001` structured species/type/base-stat/ability/evolution data under the existing provenance strategy;
3. explicitly separate modern battle-mechanic ability semantics (`Overgrow`, `Blaze`, `Torrent`) from source-backed diegetic biology;
4. classify each material claim as direct official fact, cross-source synthesis, conservative inference, project extrapolation, or unresolved;
5. distinguish biological structures from detachable inventory/equipment/resource assumptions;
6. distinguish qualitative condition signals from exact HP/threshold/death mechanics;
7. distinguish accumulated battle experience from project progression systems, kill-XP and generic stat grinding;
8. distinguish analogy words such as cannon/jet/rocket from evidence about human technology level;
9. distinguish modern game starter-role metadata from ancient ecology, encounter authorization and companionship plausibility;
10. run P2/P3/P4 contradiction checks, evolution-stage inheritance checks and chronology-safe ancient-world interpretation;
11. raise a Human Design Gate only if a durable owner-facing rule is actually unavoidable.

## Promotion gate

Do not change these rows yet:

```text
#001 bulbasaur  = not_started
#002 ivysaur    = not_started
#003 venusaur   = not_started
#004 charmander = not_started
#005 charmeleon = not_started
#006 charizard  = not_started
#007 squirtle   = not_started
#008 wartortle  = not_started
#009 blastoise  = not_started
```

Manifest promotion requires a Batch 12 source review, complete schema-compliant dossiers for all nine species, provenance and contradiction audits, evolution-family consistency review, anatomy/condition/ability/progression/technology/starter-meta regressions, refreshed manifest audit, and `P4_BATCH_12_COMPLETION_AUDIT` = PASS.

## Exact next work

Create **P4 Batch 12 source review** for these nine species. Establish evidence-backed boundaries for biological anatomy versus equipment/loot, condition signals versus numerical HP/death rules, Overgrow/Blaze/Torrent metadata versus ancient physiology, sunlight/heat/battle experience versus universal progression formulas, shell/nozzle anatomy versus human technology implications, Wartortle cultural symbolism versus domestication/harvesting, and modern starter-role familiarity versus ancient encounter/companion rules.

Do not promote the manifest yet. Do not begin P5.

# P4 Batch 11 — Human Proximity, Labor, Culture, and Multi-Limb Action Selection Plan

Status: **SELECTED — source review next**  
Date: **2026-08-15**  
Parent issue: **#5 — P4 Pokémon adaptation + complete Gen-I 151 species dossiers**

## Purpose

Batch 11 selects the next compact P4 authoring roster after Batch 10. It targets a boundary that is unusually important for this project's pre-Hisui, non-trainer-normalized setting: **official material can describe Pokémon as pets, loyal to people, voluntary workers, culturally admired creatures, or species associated with apparently manufactured objects without proving a setting-wide trainer culture, domestication economy, labor institution, or modern material infrastructure.**

The batch also adds the first explicit four-arm action-economy stress case. Extraordinary anatomy must remain a species capability instead of turning limb count or Pokédex hyperbole into extra turns, extra actions, or thousands of combat rolls.

This file is a selection plan only. The authoritative coverage manifest remains unchanged until source review, full-schema authoring, contradiction checks, and the completion audit pass.

## Selected roster

| Dex | Species | Primary contract pressure |
|---:|---|---|
| #052 | Meowth | nocturnal territory patrol, shiny-object attraction, forehead coin semantics without importing a currency economy |
| #053 | Persian | explicit pet-raising evidence, admired fur, vicious temperament, readable attack warning without normalized domestication |
| #058 | Growlithe | friendliness/faithfulness to people, guardian behavior, voluntary human proximity without routine ownership |
| #059 | Arcanine | ancient human cultural observation/awe, majestic bark, cultural memory without proving exact project chronology or mount culture |
| #066 | Machop | extreme physical strength and self-directed training without kill-XP, level grinding, or deterministic lifting formulas |
| #067 | Machoke | power-regulation belt, voluntary help with heavy labor/construction/land clearing, species-associated object provenance |
| #068 | Machamp | four-arm close-combat capability and extreme strike cadence without limb-count action multiplication |

Current coverage stays:

```text
dossier_complete_count == 80
pilot_reviewed_count == 2
not_started_count == 69
draft_count == 0
blocking_p4_gate_count == 0
```

If all seven later pass full authoring, the expected state is `87 complete / 2 pilot_reviewed / 62 not_started`. That promotion is not part of this selection scope.

## Selection evidence

Current official Pokémon Pokédex material is sufficient to justify this pressure set before the full source review:

- **Meowth:** current official material describes daytime sleeping, nocturnal territory patrol, attraction to shiny objects, and the gold coin on its forehead reacting when it sees something shiny.
- **Persian:** current official material explicitly says people admire its fur and that it is difficult to raise as a pet because of its fickle/vicious temperament; a raised tail is a warning before it pounces and bites.
- **Growlithe:** current official material describes it as brave, trustworthy, very friendly and faithful to people, and willing to repel enemies through barking and biting.
- **Arcanine:** current official material explicitly references an ancient picture scroll showing people captivated by its running and separately describes the awe produced by its bark.
- **Machop:** current official material describes child-sized anatomy with extreme lifting/throwing strength and self-directed training by lifting boulders or carrying Graveler.
- **Machoke:** current official material describes a power-regulation belt, tireless physical work, and voluntary assistance to people with heavy goods, construction, and land clearing.
- **Machamp:** current official material describes four arms capable of rapid simultaneous striking and extreme close-combat pressure.

Official selection pointers:

- Meowth: https://sg.portal-pokemon.com/play/pokedex/0052
- Persian: https://sg.portal-pokemon.com/play/pokedex/0053
- Growlithe: https://sg.portal-pokemon.com/play/pokedex/0058
- Arcanine: https://sg.portal-pokemon.com/play/pokedex/0059
- Machop: https://sg.portal-pokemon.com/play/pokedex/0066
- Machoke: https://sg.portal-pokemon.com/play/pokedex/0067
- Machamp: https://sg.portal-pokemon.com/play/pokedex/0068

These are selection pointers only. Full Batch 11 source review must still inventory versioned entries, structured data, ability/move context, contradictions, chronology-safe interpretation, and the unresolved origin/material implications of Machoke's belt before stronger claims are authored.

## Why these seven

Completed batches already prove stat normalization, stat-independent hazards, exceptional individuals, multiple evolution boundaries, composite identity, chronology-safe non-presence, social encounter units, legendary rarity, biological-resource semantics, regeneration, mind-state/agency boundaries, toxin-delivery distinctions, nonvisual navigation, environmental permissions, and state-dependent capability loss.

Batch 11 adds three connected pressures that have not yet been tested together:

1. **human proximity without trainer normalization** — Persian, Growlithe, Arcanine and Machoke all provide explicit human-facing evidence, but each implies a different relationship strength and context;
2. **culture/material references without chronology leakage** — Meowth's coin, Persian's admired fur, Arcanine's ancient picture scroll, and Machoke's belt can easily be overread into currency systems, luxury markets, exact historical continuity, or industrial equipment provenance;
3. **self-directed physical training and multi-limb action economy** — Machop/Machoke/Machamp test whether spectacular physical descriptions can remain bounded fictional permissions without introducing visible levels, grindable stat growth, universal lifting tables, or extra actions per limb.

The roster deliberately keeps the two evolution families intact and leaves each stage responsible for its own evidence. Later-generation forms and mechanics remain provenance context only.

## Binding boundaries

Batch 11 consumes existing P2/P3/P4 contracts instead of introducing a universal domestication or labor subsystem.

The batch must preserve these invariants:

1. `friendly_to_people` or `faithful_to_people` does not equal routine ownership, Poké Ball containment, trainer obedience, free companion recruitment, or guaranteed settlement safety;
2. evidence that a species can be raised as a pet does not prove that pet ownership is common, easy, ancient, legal, culturally accepted everywhere, or mechanically equivalent to companionship;
3. a Pokémon voluntarily helping humans does not establish a universal Pokémon labor market, guild, wage system, slave system, construction technology tier, or species-wide service role;
4. Arcanine's **ancient picture scroll** is evidence of old human observation in official source material, not proof that the project's exact future-Kanto locality, chronology, language, polity, or art tradition already exists;
5. awe, majesty, fear or groveling language does not become automatic mind control, a forced player action, or a Will check unless an authored event has a separate supported mental-pressure basis;
6. Meowth's forehead coin and attraction to shiny objects do not prove minted coinage, standardized currency, banking, a theft economy, or a generic treasure-finding subsystem in the ancient setting;
7. Persian's admired fur does not create a fur-harvesting drop table, luxury market, or safe body-resource extraction rule;
8. Machoke's power-regulation belt is a source-backed species-associated object, but its maker, material, origin, replacement cycle, wild acquisition path, and ancient manufacturing implications remain unresolved unless stronger evidence exists;
9. `species-associated object` does not automatically mean inventory item, removable loot, craft recipe, equipment slot, or player-usable artifact;
10. Machop's self-directed training does not create kill-XP, a visible level meter, repeatable grind-to-stat progression, or player-scaled enemies;
11. spectacular lifting/throwing claims do not become a deterministic `Force -> kilograms` table or automatic permission to destroy every structure/material;
12. Machamp's four arms do not grant four turns, four standard actions, four independent companions, or four simultaneous target resolutions by default;
13. Pokédex descriptions of hundreds/thousands of blows are capability-scale evidence, not literal attack-roll counts or engine tick rates;
14. Fighting typing does not imply human martial-arts culture, dojo institutions, weapon training, language competence, or humanlike social roles;
15. evolution-family claims remain stage-local unless source evidence supports inheritance;
16. Alolan/Galarian Meowth/Persian, Hisuian Growlithe/Arcanine, Gigantamax forms, and later-generation family/mechanic context do not expand the mandatory #001-#151 baseline.

## Human Design Gate test

**No blocking Human Design Gate is required for Batch 11 selection.** Existing owner-approved direction already allows rare, meaningful human-Pokémon relationships and narrow Pokémon-dependent technology/culture islands while rejecting normalized trainer culture.

Machoke's belt is intentionally treated as an evidence/provenance stress case rather than a forced setting-wide decision. Source review should preserve the fact that Machoke is described as wearing a power-regulation belt while leaving origin/manufacture unresolved. If a later dossier or playable implementation truly cannot represent a Machoke encounter without choosing a product-defining universal rule about who manufactures such objects, that question can then be raised as a Human Design Gate. The default is narrower: species-local associated-object state plus explicit later-phase follow-up.

## Source-review work package

For each selected species, the next scope must:

1. inventory current official Pokédex/version evidence relevant to human proximity, loyalty, pet-raising, labor, cultural observation, objects, physical training and multi-limb combat;
2. inspect pinned structured species/type/base-stat/ability/evolution data under the existing provenance strategy;
3. classify each material claim as direct official fact, cross-source synthesis, conservative inference, project extrapolation, or unresolved;
4. separate **can occur** from **is culturally normalized** for pets, guardians, workers, companions and admired creatures;
5. separate species-associated anatomy/objects from removable inventory, loot, crafting or infrastructure assumptions;
6. distinguish self-directed training from project progression mechanics and exceptional-individual state;
7. express multi-arm behavior as fictional capability/hazard/position pressure rather than extra action economy unless a future combat contract explicitly says otherwise;
8. run P2/P3/P4 contradiction checks and chronology-safe ancient-world interpretation;
9. raise a Human Design Gate only if a durable owner-facing rule is actually unavoidable.

## Promotion gate

Do not change these rows yet:

```text
#052 meowth   = not_started
#053 persian  = not_started
#058 growlithe = not_started
#059 arcanine = not_started
#066 machop   = not_started
#067 machoke  = not_started
#068 machamp  = not_started
```

Manifest promotion requires a Batch 11 source review, complete schema-compliant dossiers for all seven species, provenance and contradiction audits, evolution-family consistency review, human-proximity/culture/object/action-economy regressions, refreshed manifest audit, and `P4_BATCH_11_COMPLETION_AUDIT` = PASS.

## Exact next work

Create **P4 Batch 11 source review** for these seven species. Establish evidence-backed boundaries for human affinity versus domestication, pet evidence versus routine ownership, voluntary labor versus institutional Pokémon labor, old cultural observation versus exact project chronology, species-associated objects versus loot/equipment/infrastructure, self-directed training versus progression systems, and four-arm combat capability versus extra actions.

Do not promote the manifest yet. Do not begin P5.

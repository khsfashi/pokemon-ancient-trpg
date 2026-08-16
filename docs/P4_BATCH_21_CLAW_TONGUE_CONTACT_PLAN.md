# P4 Batch 21 — Claw Force, Asymmetric Morphology, and Tongue/Contact Selection Plan

Status: **SELECTED — source review next**  
Date: **2026-08-16**  
Parent issue: **#5 — P4 Pokémon adaptation + complete Gen-I 151 species dossiers**

## Purpose

Batch 21 selects the final three `not_started` Generation-I species:

- #098 Krabby
- #099 Kingler
- #108 Lickitung

They form one compact final pressure cluster around pincer force, shell/claw anatomy, asymmetric load-bearing morphology, lateral locomotion, appendage loss/regrowth, territorial beach ecology, long-tongue manipulation, texture/taste sensing, sticky saliva, contact irritation and later-era adhesive use.

If flattened into generic subsystem rules, these claims could accidentally create universal material destruction, mining, detachable weapon entities, extra appendage turns, continuous limb-damage simulation, guaranteed regeneration, unrestricted grappling/tool use, omniscient sensing, automatic paralysis/rash application, passive contact polling, or a normalized biological-adhesive economy.

Batch 21 therefore asks one shared question: **how can highly specialized appendages remain materially useful and dangerous while preserving one-entity action economy, explicit eligibility, warning/counterplay, bounded consequences, species-local locomotion and event-scoped runtime state?**

This file is a selection plan only. The authoritative coverage manifest remains unchanged until claim-level source review, frozen-schema dossier authoring, contradiction checks, deterministic stat reproduction, and the Batch 21 completion audit all pass.

## Selected roster

| Dex | Species | Primary contract pressure |
|---:|---|---|
| #098 | Krabby | strong regenerative pincers used for fighting and lateral balance, beach burrows, territorial conflict and bubble display without detachable weapons, instant regrowth, extra pincer actions or continuous limb simulation |
| #099 | Kingler | one massively enlarged pincer with extreme source-scale force plus aiming, balance and fatigue costs without generic mining, universal material deletion, automatic hit/kill, extra actions or infinite exertion |
| #108 | Lickitung | long dexterous tongue, texture/taste memory, sticky saliva, contact irritation/paralysis wording and later Hisui adhesive use without omniscient sensing, unrestricted grappling/tool use, automatic status, passive contact polling or normalized harvesting/industry |

Current authoritative coverage remains:

```text
dossier_complete_count == 146
pilot_reviewed_count == 2
not_started_count == 3
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

If all three later pass full authoring, expected coverage becomes:

```text
dossier_complete_count == 149
pilot_reviewed_count == 2
not_started_count == 0
```

That still does **not** satisfy the strict P4 exit invariant. #131 Lapras and #151 Mew remain `pilot_reviewed` and must receive the final completion promotion/audit needed to reach `151 complete` before P5 begins.

## Selection evidence

Current official Pokémon Pokédex material is sufficient to justify this final pressure set before claim-level review:

- **Krabby:** current official material places it near the sea, says large pincers regrow if torn out, and describes a danger display using mouth bubbles to appear larger.
- **Kingler:** current official material gives the oversized hard pincer extreme `10,000-horsepower` source-scale strength while explicitly stating that its size makes it unwieldy; another current entry says the claw gets in the way outside battle.
- **Lickitung:** current official material describes licking surrounding objects to investigate them, rash risk if contacted areas are not cleaned, cleaning filth with the tongue while leaving odor, and later Hisui-era use of long-tongue dexterity plus boiled-down viscous saliva as a strong adhesive.

Official selection pointers, verified 2026-08-16:

- Krabby: https://sg.portal-pokemon.com/play/pokedex/0098
- Kingler: https://sg.portal-pokemon.com/play/pokedex/0099
- Lickitung: https://sg.portal-pokemon.com/play/pokedex/0108

The normal Kingler page is the baseline source. Gigantamax Kingler is post-Generation-I transformation context and is not evidence for ordinary Kingler capability in this project.

The claim-level source review must inventory historical/version-tagged evidence and preserve whether a statement is current observation, measured/source-scale wording, analogy/reputation, researcher interpretation, contextual ecology, later-era provenance, or modern battle-system metadata.

## Pinned structured-data verification

`SRC-DATA-001` remains the pinned PokéAPI `api-data` baseline at revision:

```text
2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

Applying unchanged `p4-six-axis-v1` thresholds (`<40 => 1`, `40..59 => 2`, `60..79 => 3`, `80..99 => 4`, `100..119 => 5`, `>=120 => 6`) yields:

```text
Krabby     30/105/90/25/25/50 -> 1/5/4/1/1/2
Kingler    55/130/115/50/50/75 -> 2/6/5/2/2/3
Lickitung  90/55/75/60/75/30 -> 4/2/3/3/3/1
```

All three are deterministic reproductions with **zero manual rating exceptions**. These ratings remain species baselines rather than player-relative encounter levels. Pincer crushing, appendage leverage, adhesive contact and irritation/paralysis hazards remain capability/hazard evidence outside the six-axis mapping.

## Why these three now

They are the exact final `not_started` rows after Batch 20. Completing them will close the unstarted roster while preserving a deliberately narrow final regression surface:

1. **natural weapon force versus universal destruction** — source-scale pincer force may matter in eligible scenes without becoming mining, arbitrary structure deletion or deterministic damage formulas;
2. **repeated appendages versus action inflation** — two pincers or a tongue acting like an arm never create extra turns, entities, health pools or reaction loops;
3. **appendage loss/regrowth versus continuous body simulation** — severing/loss can be an authored consequence and recovery fact without per-frame limb state, automatic loot or instant regeneration;
4. **asymmetric morphology versus hidden penalties** — Kingler's oversized pincer may affect aim, balance and fatigue when fictionally relevant without continuous inverse-kinematics/load simulation;
5. **tongue sensing versus omniscience** — Lickitung's texture/taste memory requires actual contact and does not reveal arbitrary hidden information;
6. **sticky contact versus unrestricted grappling/tool use** — saliva/tongue adhesion can enable narrow authored interactions without substituting for hands, inventory, universal climbing or guaranteed restraint;
7. **contact hazards versus automatic status** — tingling, rash, itching and historical paralysis wording require eligible contact/exposure plus resolution rather than species-proximity status application;
8. **biological resource evidence versus economy** — later Hisui adhesive use proves possible processing context but does not normalize live harvesting, industrial production or a generic crafting resource;
9. **runtime cost discipline** — limb loss, pincer leverage, tongue contact and contamination should later use discrete encounter facts and event-triggered consequences rather than continuous polling/simulation.

## Binding boundaries

Batch 21 consumes existing P2/P3/P4 contracts. It does not introduce a generic material-destruction engine, limb simulator, regeneration timer, grapple system, tactile scanner, contamination model, crafting economy or biological-resource harvesting loop.

The selection must preserve these invariants:

1. D-034 remains binding: all three must be directly encounterable somewhere in total content, separate from commonness and ordinary companionship.
2. Ordinary Pokémon do not scale with the player; exceptional individuals require explicit persistent history/traits.
3. Each Pokémon remains one ordinary turn, one health state, one initiative presence and one visible companion slot regardless of two pincers, asymmetric claws or tongue-as-arm wording.
4. Krabby pincers are natural anatomy, not detachable inventory weapons or automatic loot.
5. Pincer loss/regrowth evidence does not require continuous limb health, instant regrowth, guaranteed recovery timing or cloneable material production.
6. Krabby lateral-balance evidence remains species-local locomotion and does not create a universal crab movement subsystem.
7. Krabby bubble display may affect warning/intimidation presentation but does not create forced Fear, untargetability or free defensive actions.
8. Territorial squabbling is contextual ecology, not permanent aggression or mandatory combat.
9. Kingler `10,000-horsepower` wording is source-scale capability evidence, not a literal physics/damage formula.
10. Kingler pincer force does not grant generic mining, armor deletion, terrain editing or universal object destruction.
11. Kingler's oversized pincer does not create an extra attack/turn, independent entity or separate health pool.
12. Aim difficulty, imbalance and fatigue are meaningful counterweights but are resolved through authored encounter state rather than continuous load/energy simulation.
13. Hyper Cutter, Shell Armor and Sheer Force remain modern battle-system metadata, not literal immunity/critical-hit/force formulas.
14. Lickitung tongue dexterity does not equal unrestricted hands, inventory manipulation, tool proficiency, climbing or universal grappling.
15. Texture/taste memory requires eligible contact and does not grant omniscient identification, remote sensing or hidden-state access.
16. Sticky saliva does not automatically restrain targets or attach every object; adhesion remains contact-, material- and scene-bounded.
17. Tingling, rash, itching and historical paralysis wording require explicit contact/exposure eligibility and bounded consequence resolution; no automatic status on proximity or every lick.
18. Lickitung licking behavior does not compel the player to accept contact; warning, avoidance, counterplay and player input remain intact.
19. Hisui adhesive processing remains later-era provenance. It does not establish a proto-Kanto adhesive industry, recipe availability, routine live harvesting or biological-resource economy.
20. Lickilicky and Rollout-linked modern evolution metadata remain post-Generation-I context under D-032 and do not silently enter the mandatory baseline.
21. Gigantamax Kingler is post-Generation-I form context and is excluded from ordinary Kingler capability baselines.
22. No claim in this batch requires continuous per-frame simulation; later implementation should prefer cached/coarse authored encounter state and event-triggered consequences.
23. No new Human Design Gate is required at selection time unless claim-level review reveals a genuine unresolved product decision.

## Source-review questions

### Krabby / Kingler

- Which pincer-force, shell, regrowth, lateral-balance, territory and communication claims are current versus historical/version-scoped?
- How should pincer loss change authored encounter options without creating a limb-health simulator?
- How should Kingler's extreme force coexist with explicit aiming, balance and fatigue costs?
- Which force/hardness statements are capability evidence rather than permission for mining, arbitrary terrain deletion or literal physical calculations?
- How should one enlarged claw remain one entity/turn while still mattering tactically?

### Lickitung

- Which tongue-length, dexterity, texture/taste-memory, sticky-saliva and contact-hazard claims are stable across versions?
- How should actual-contact sensing provide useful information without omniscient identification?
- How should sticky saliva support narrow handling/adhesion opportunities without generic hands, tools, grapples or traversal?
- How should tingling/rash/itch/paralysis wording preserve severity while requiring eligible exposure, warning/counterplay and player input?
- Which adhesive-processing evidence is Hisui-era provenance only, and what narrow capability can safely survive into this earlier setting without creating an industry?

## Exact next work

Perform the claim-level **P4 Batch 21 source review** for these three species against current official Pokédex pages plus pinned `SRC-DATA-001` evidence.

The source review must end with one of:

- `READY FOR FULL-SCHEMA AUTHORING`, or
- a narrowly defined Human Design Gate if existing contracts genuinely cannot resolve a material product choice.

Coverage-manifest promotion remains forbidden in this pass.
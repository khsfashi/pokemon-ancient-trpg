# Project Status

Last explanatory handoff update: **2026-08-15**

This file is the concise human-readable operational handoff. Durable product authority remains in `docs/DECISIONS.md` and phase contracts. Live GitHub PR/issue/CI state wins when this file becomes stale.

## Project direction

Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.

Current binding direction:

- setting is intentionally **earlier than the Hisui-era precedent**;
- first playable land is **future-Kanto territory before mature Kanto regional civilization exists**;
- ordinary material culture has an **iron-age / medieval-fantasy-like baseline**, with narrow Pokémon-dependent technology/culture islands only where canon evidence and local practice justify them;
- humans and Pokémon are not integrated through normalized trainer culture, routine ownership, Poké Balls, PC storage, or portable containment;
- Pokémon companionship is rare and meaningful with exactly **three visible companion slots**, while `0/3` is a first-class complete run;
- the world uses **serious selective lethality**: injury, lasting impairment, Critical condition and death are real, but ordinary defeat or `0 Vitality` is not automatic death;
- ancient-world lore follows **official evidence → bounded interpretation → explicit project extrapolation**;
- contextual hunting/killing/material use is species- and culture-sensitive rather than generic loot logic;
- rare human psychics / miracle-workers exist, but standard characters do not begin with usable psychic power;
- Pokémon use a **separate six-axis species profile** plus capability/hazard tags rather than the human seven-Attribute model;
- ordinary Pokémon do **not** auto-scale with player growth; weak species can become genuinely routine later, while rare exceptional/named individuals can remain dangerous through explicit individual stats, traits, history and ecology;
- Pokémon **hazard severity is not capped by species stats**;
- P4 six-axis normalization is pinned as **`p4-six-axis-v1`**;
- Pokémon evolution is species-specific persistent transformation distinct from ordinary growth/maturation; no kill-XP, visible level meter or generic `Evolve` command is assumed;
- mandatory design roster is National Pokédex **#001-#151**, all 151 species;
- **mandatory dossier coverage does not imply baseline-era spawn authorization**;
- **D-034 requires all 151 mandatory species to be directly encounterable somewhere in total game content**, with chronology-anomaly/displacement paths where baseline-era presence is unsupported;
- the opening playable scope remains one bounded settlement-centered locality plus surrounding routes/ecologies.

## Completed phases

### P0 — Governance (#1) — COMPLETE

Autonomous continuation protocol, roadmap, decision log and Human Design Gate rules are established. Primary operational entry point: `AGENTS.md`.

### P1 — Reference/API/data/resource/IP research (#2) — COMPLETE

Closed via PR #18. Primary outputs include `docs/SOURCE_REGISTRY.md`, `docs/FAN_PROJECT_ENFORCEMENT_CASES.md`, `docs/P1_RESOURCE_ECOSYSTEM_RECON.md`, and `docs/REFERENCE_PROTOCOL.md`. Final production asset selection remains deferred to P6.

### P2 — World bible and setting contract (#3) — COMPLETE

`docs/P2_EXIT_AUDIT.md` = **PASS**. Primary contract: `docs/WORLD_BIBLE.md`.

### P3 — Core TRPG rules and character model (#4) — COMPLETE

`docs/P3_EXIT_AUDIT.md` = **PASS**.

```text
human_attributes == 7
check_formula == 2d6 + Attribute + Competence + Context
character_levels == false
kill_XP == false
portable_Pokemon_containment == false
visible_companion_slots == 3
zero_companion_run_valid == true
fate_or_reroll_currency == false
```

## Current phase

**P4 — Pokémon adaptation + complete Gen-I 151 species dossiers (#5) is active.**

P4 exit requires **151/151 substantive reviewed dossiers**. Do not begin P5 before that audit passes.

Authoritative shared inputs:

- `docs/GEN1_SPECIES_COVERAGE_PLAN.md`
- `docs/P4_POKEMON_DOMAIN_CONTRACT.md`
- `docs/P4_SPECIES_DOSSIER_SCHEMA.md`
- `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`
- `docs/P4_RATING_SCALE_CALIBRATION.md`
- `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`
- `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`
- `docs/P4_SPECIES_COVERAGE_MANIFEST_AUDIT.md`

Current authoritative manifest state after Batch 11:

```text
dossier_complete_count == 87
pilot_reviewed_count == 2
not_started_count == 62
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two remaining `pilot_reviewed` species are #131 Lapras and #151 Mew.

### P4 shared foundation — COMPLETE

- **D-031:** fixed species baselines plus explicit individual variation. Ratings are `Vigor / Force / Guard / Potency / Resistance / Speed`; no player-level enemy scaling; rare exceptional/named individuals use explicit persistent traits/history rather than generic elite affixes.
- **`p4-six-axis-v1`:** raw `<40 => 1`, `40..59 => 2`, `60..79 => 3`, `80..99 => 4`, `100..119 => 5`, `>=120 => 6`.
- **D-032:** evolution is separate from maturation; modern level/trade metadata is source context rather than ancient kill-XP law.
- **D-033 / P4-HDG-003:** Magneton is one active entity / one visible companion slot while three contributing Magnemite histories remain persistent provenance.
- **D-034:** all #001-#151 must have direct encounterability somewhere in total content, separate from baseline-era natural presence.

### P4 completed dossier work

```text
Pilot      PASS
Batch 01   PASS
Batch 02   PASS
Batch 03   PASS
Batch 04   PASS
Batch 05   PASS
Batch 06   PASS
Batch 07   PASS
Batch 08   PASS
Batch 09   PASS
Batch 10   PASS
Batch 11   PASS
```

Important batch contracts and audits remain in the corresponding `docs/P4_BATCH_*` files. The manifest is the machine-readable source of coverage truth.

### P4 Batch 11 — COMPLETE

Human-proximity / labor / culture / multi-limb action roster:

- #052 Meowth
- #053 Persian
- #058 Growlithe
- #059 Arcanine
- #066 Machop
- #067 Machoke
- #068 Machamp

Primary outputs:

- `docs/P4_BATCH_11_HUMAN_PROXIMITY_LABOR_CULTURE_PLAN.md`
- `docs/P4_BATCH_11_SOURCE_REVIEW.md`
- `docs/P4_BATCH_11_FULL_SCHEMA_DOSSIERS.md` plus seven indexed species dossier documents
- `docs/P4_BATCH_11_COMPLETION_AUDIT.md`

Batch 11 validates these boundaries:

1. **Human affinity does not create trainer culture.** Growlithe may be unusually friendly and faithful to people, but relationship, companionship and slot accounting remain explicit and voluntary.
2. **Pet evidence establishes possibility, not prevalence.** Persian can have human-associated history without common ancient domestication, universal safe handling or ownership shortcuts.
3. **Old cultural evidence does not pin project chronology.** Arcanine's ancient picture-scroll evidence supports old human observation somewhere in official fiction, not this exact future-Kanto locality, polity or literacy/art infrastructure.
4. **Species-associated objects remain bounded.** Meowth's forehead coinlike feature does not establish minted currency or loot; Machoke's regulation belt is source-backed while maker, material, origin, replacement and safe removal remain unresolved.
5. **Value and appearance do not create harvesting systems.** Persian's admired fur does not become a pelt/drop economy.
6. **Self-training is not character leveling.** Machop can train without kill-XP, visible levels, repeatable stat grinding or player-scaled enemy growth.
7. **Extreme strength remains scene-specific.** Machop/Machoke heavy-object permissions do not create a `Force -> kg` or structure-damage formula.
8. **Four arms are not four turns.** Machamp's anatomy and extreme strike cadence are represented as bounded close-range multi-angle pressure, never one action per limb or one roll per strike.
9. **Mental pressure preserves player agency.** Arcanine's majestic bark can create awe/intimidation pressure but never hypnosis, domination or forced player action.
10. **Evolution-family facts do not auto-copy.** Human affinity, pet evidence, labor behavior, belts and multi-arm pressure stay species/stage specific.
11. **No new Human Design Gate was required.** All unresolved object provenance remains safe for later owning phases without blocking P5 consumption.

`docs/P4_BATCH_11_COMPLETION_AUDIT.md` = **PASS**.

`docs/P4_SPECIES_COVERAGE_MANIFEST_AUDIT.md` matches the authoritative Batch 11 state: `87 complete / 2 pilot_reviewed / 62 not_started`.

### P4 Batch 12 — SELECTED

Foundational elemental anatomy / condition-signal / starter-meta stress roster:

- #001 Bulbasaur / #002 Ivysaur / #003 Venusaur
- #004 Charmander / #005 Charmeleon / #006 Charizard
- #007 Squirtle / #008 Wartortle / #009 Blastoise

Primary selection output:

- `docs/P4_BATCH_12_FOUNDATIONAL_ELEMENTAL_ANATOMY_PLAN.md`

Batch 12 is selected to stress these boundaries before full authoring:

1. **Body-integrated anatomy is not equipment or loot.** Seeds, bulbs, flowers, tail flames, shells and shell nozzles remain biological/persistent body state unless stronger evidence says otherwise.
2. **Condition signals are not numeric HP UI.** Charmander's tail flame may qualitatively reflect condition/life-force without exposing exact HP, fixed thresholds or a universal death switch.
3. **Modern ability mechanics are not automatically ancient physiology.** Overgrow, Blaze and Torrent remain canonical mechanic/context data unless source review supports narrower diegetic consequences.
4. **Environmental energy is stage/species local.** Sunlight, season, ambient heat and water-jet recoil do not become generic type formulas.
5. **Battle experience is not kill-XP.** Charizard's official battle-experience wording must remain compatible with the no-level/no-grind progression contract.
6. **Analogy language does not upgrade human technology.** Blastoise's cannon/jet/rocket-like anatomy does not establish ancient human cannon or rocket infrastructure.
7. **Cultural admiration is not domestication or harvesting.** Wartortle longevity symbolism/popularity among older people does not prove common ownership or transferable longevity benefits.
8. **Modern starter familiarity is not setting evidence.** The three families are not automatically distributed to novices, safe companions, institutionally bred, or baseline-era guaranteed spawns.
9. **No new Human Design Gate is required at selection.** Existing P2/P3/P4 contracts can conservatively represent all identified pressures.

The coverage manifest remains unchanged during selection/source review: `87 complete / 2 pilot_reviewed / 62 not_started`.

## Exact next work

Continue **P4 Batch 12 source review** without entering P5:

1. source-review all nine selected species against current primary official Pokémon Pokédex material plus pinned `SRC-DATA-001` structured data;
2. inventory version-specific evidence for plant/seed anatomy, tail-flame condition semantics, sunlight/season effects, aggression/flight, shell maturation, Wartortle cultural symbolism, and Blastoise jet/recoil anatomy;
3. explicitly separate Overgrow/Blaze/Torrent modern battle semantics from source-backed diegetic physiology;
4. preserve the no-kill-XP/no-visible-level contract when interpreting Charizard's battle-experience wording;
5. preserve human technology chronology when interpreting cannon/jet/rocket analogy language;
6. keep the coverage manifest unchanged during source review;
7. proceed to full-schema authoring only if no blocking Human Design Gate appears;
8. stop for owner input only if source evidence forces a genuinely product-defining universal rule that existing P2/P3/P4 contracts cannot represent conservatively.

Do not begin P5 before the mandatory P4 `151/151` exit audit passes.

## Later mandatory contracts

- **P5 / #6:** deterministic seeded narrative event-engine contract consuming P2-P4 state/rules.
- **P6 / #12:** exact production resource/asset/provenance/mobile-budget contract.
- **P7 / #7:** technical architecture after P1-P6 contracts are stable.
- **P8 / #8:** first playable mobile vertical slice.
- **P9 / #9:** replayable expansion + `151/151` meaningful authored gameplay presence, including D-034 chronology-anomaly/displacement paths where baseline presence is impossible.
- **P10 / #10:** release/mobile delivery hygiene and optional Android packaging.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

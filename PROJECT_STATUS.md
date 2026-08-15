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

Current authoritative manifest state after Batch 13; Batch 14 selection does not mutate coverage:

```text
dossier_complete_count == 103
pilot_reviewed_count == 2
not_started_count == 46
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
Batch 12   PASS
Batch 13   PASS
```

Important batch contracts and audits remain in the corresponding `docs/P4_BATCH_*` files. The manifest is the machine-readable source of coverage truth.

### P4 Batch 13 — COMPLETE

Aerial ecology / territoriality / traversal / multi-head control stress roster:

- #016 Pidgey / #017 Pidgeotto / #018 Pidgeot
- #021 Spearow / #022 Fearow
- #084 Doduo / #085 Dodrio

Primary outputs:

- `docs/P4_BATCH_13_AERIAL_ECOLOGY_TERRITORIALITY_MULTIHEAD_PLAN.md`
- `docs/P4_BATCH_13_SOURCE_REVIEW.md`
- `docs/P4_BATCH_13_FULL_SCHEMA_DOSSIERS.md` plus seven indexed species dossier documents
- `docs/P4_BATCH_13_COMPLETION_AUDIT.md`

Batch 13 validates these boundaries:

1. **Flying type is not a universal traversal permission.** Spearow has explicit long-distance flight limits; Doduo is primarily a ground runner; Fearow has strong sustained-flight evidence.
2. **Six-axis Speed is not literal travel velocity.** Dodrio has normalized `Speed 5` versus Doduo `Speed 3`, while current official text says Dodrio cannot run as fast as Doduo but can run for longer stretches.
3. **Pidgey homing is home/nest-oriented, not arbitrary routefinding or map reveal.**
4. **Pidgeotto patrol/vision and prey carrying do not create perfect surveillance, passenger transport or payload formulas.**
5. **Pidgeot extreme source claims remain extraordinary without becoming a physics engine.** Version-scoped Mach-2, altitude and gust evidence is retained without kinetic-energy, initiative or fast-travel formulas.
6. **Fearow food snatching is authored encounter pressure, not inventory mutation permission.** Exposed provisions require warning/counterplay/consequence resolution.
7. **Multiple heads/organs do not multiply entity resources.** Doduo and Dodrio each remain one entity, one ordinary turn, one health state and one visible companion slot.
8. **Doduo between-head telepathy remains internal and species-local.** It does not create external mind reading or a generic psychic subsystem.
9. **Dodrio redundant organs support anatomy/endurance, not extra lives.** Head leadership supports internal behavior state, not arbitrary player control loss.
10. **Modern abilities, held-item data and evolution levels remain source context rather than ancient fixed mechanics.**
11. **No new Human Design Gate was required.**

`docs/P4_BATCH_13_COMPLETION_AUDIT.md` = **PASS**.

`docs/P4_SPECIES_COVERAGE_MANIFEST_AUDIT.md` matches the authoritative Batch 13 state: `103 complete / 2 pilot_reviewed / 46 not_started`.

### P4 Batch 14 — SELECTED

Subterranean traversal / terrain integrity / lithic body / self-propelled hazard stress roster:

- #027 Sandshrew / #028 Sandslash
- #050 Diglett / #051 Dugtrio
- #074 Geodude / #075 Graveler / #076 Golem
- #095 Onix

Selection contract:

- `docs/P4_BATCH_14_SUBTERRANEAN_TERRAIN_LITHIC_BODY_PLAN.md`

Batch 14 is intentionally selected to pressure these still-underrepresented boundaries without introducing global terrain simulation:

1. **Ground/Rock typing is not universal burrowing permission.** Explicit tunneling capability remains species-local.
2. **Terrain interaction is not a generic terrain-destruction/mining formula.** Dugtrio soil loosening and Onix boring require authored substrate/context.
3. **Rocklike bodies are not scenery, ore, equipment or automatic loot.** Geodude camouflage and Golem shed shell remain biological/species-specific semantics.
4. **Rolling, explosive and boring locomotion are not real-world physics formulas.** Graveler/Golem/Onix movement does not become momentum, blast-energy or fast-travel math.
5. **Hidden/multiple body structures do not invite pseudo-canon or extra actions.** Diglett hidden anatomy stays unresolved where evidence is absent; Dugtrio remains one entity/turn/health state/companion slot.
6. **No new Human Design Gate is required for selection.**

The coverage manifest remains unchanged until all eight receive source review, full-schema dossiers and a passing Batch 14 completion audit.

## Exact next work

Continue **P4** without entering P5:

1. create the **P4 Batch 14 source review** for #027-#028, #050-#051, #074-#076 and #095;
2. inventory current and historically relevant official evidence plus pinned `SRC-DATA-001`, preserving claim-level provenance and version/region context;
3. establish explicit boundaries for burrowing versus Ground/Rock typing, underground ambush versus perfect stealth, terrain interaction versus destruction/mining formulas, rocklike body versus object/resource semantics, Golem shed material/explosion behavior, and Onix high-speed boring versus real-time physics/travel formulas;
4. preserve Diglett hidden-body uncertainty instead of inventing anatomy and keep Dugtrio one-entity action economy consistent with earlier composite/multi-head regressions;
5. stop for a Human Design Gate only if a source-backed fact genuinely requires a new product-wide rule that existing P2/P3/P4 contracts cannot represent conservatively;
6. do not promote the manifest until the complete Batch 14 authoring/audit gate passes;
7. keep D-034 direct encounterability separate from baseline-era natural presence;
8. do not begin P5 until the mandatory P4 `151/151` exit audit passes.

Current authoritative state:

```text
dossier_complete_count == 103
pilot_reviewed_count == 2
not_started_count == 46
blocking_p4_gate_count == 0
```

## Later mandatory contracts

- **P5 / #6:** deterministic seeded narrative event-engine contract consuming P2-P4 state/rules.
- **P6 / #12:** exact production resource/asset/provenance/mobile-budget contract.
- **P7 / #7:** technical architecture after P1-P6 contracts are stable.
- **P8 / #8:** first playable mobile vertical slice.
- **P9 / #9:** replayable expansion + `151/151` meaningful authored gameplay presence, including D-034 chronology-anomaly/displacement paths where baseline presence is impossible.
- **P10 / #10:** release/mobile delivery hygiene and optional Android packaging.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

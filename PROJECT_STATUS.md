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

Current authoritative manifest state after Batch 13; Batch 14 source review does not mutate coverage:

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

### P4 Batch 14 — SOURCE REVIEW COMPLETE / DOSSIER AUTHORING NEXT

Subterranean traversal / terrain integrity / lithic body / self-propelled hazard stress roster:

- #027 Sandshrew / #028 Sandslash
- #050 Diglett / #051 Dugtrio
- #074 Geodude / #075 Graveler / #076 Golem
- #095 Onix

Primary outputs so far:

- `docs/P4_BATCH_14_SUBTERRANEAN_TERRAIN_LITHIC_BODY_PLAN.md`
- `docs/P4_BATCH_14_SOURCE_REVIEW.md`

Batch 14 source review establishes these boundaries:

1. **Ground/Rock typing is not universal burrowing permission.** Burrowing, climbing, rolling and boring remain species-local capabilities supported by explicit evidence.
2. **Six-axis Speed/Force are not real-world terrain physics.** Dugtrio extreme depth/speed claims, Golem explosive movement and Onix 50-mph boring are preserved without per-round distance, momentum, TNT/blast or structure-damage formulas.
3. **Underground does not mean perfect stealth.** Diglett can leave raised-earth signs; Dugtrio unexpected-direction attacks remain authored ambush pressure rather than unavoidable surprise or guaranteed escape denial.
4. **Diglett hidden anatomy remains intentionally unresolved.** No fan-derived lower-body pseudo-canon is authored.
5. **Diglett later farm-raising evidence is chronology-scoped.** Official versioned material proves possible agricultural use in later/other social contexts, not normalized ancient proto-Kanto domestication.
6. **Dugtrio remains one Pokémon/entity despite three heads/triplet wording.** One ordinary turn, one health state, one initiative presence and one visible companion slot if applicable.
7. **Rocklike bodies are not scenery, ore or automatic loot.** Geodude misidentification and Geodude/Golem/Onix material wording remain creature/anatomy semantics.
8. **Sandslash regeneration is biology, not a renewable harvest loop.** Broken claw/spike regrowth and yearly spike turnover do not create ordinary weapon/resource farming.
9. **Graveler rolling and rock consumption are ecology/hazard facts, not unstoppable collision, automatic landslide or generic mineral mechanics.**
10. **Golem annual shed shell is a source-backed nonlethal material path.** Crop value does not create automatic drops, ownership rights or a setting-wide fertilizer industry.
11. **Golem self-explosion/dynamite-resistance wording remains extraordinary canon fiction without importing real-world explosives simulation or ancient dynamite technology.**
12. **Onix high-speed boring, tremors, long tunnels and internal magnetic-navigation evidence remain species-local.** They do not create fast travel, safe permanent routes, guaranteed collapse or harvestable compass/gem resources.
13. **Existing P2/P3/P4 contracts are sufficient.** No new Human Design Gate is required.

The source review reproduces all eight `p4-six-axis-v1` profiles with zero manual exceptions and leaves the coverage manifest untouched.

## Exact next work

Continue **P4** without entering P5:

1. author the **eight frozen-schema Batch 14 dossiers** for #027-#028, #050-#051, #074-#076 and #095;
2. preserve claim-level provenance and the source-review boundaries around burrowing, terrain signs, hidden anatomy, regeneration/shedding, rocklike bodies, rolling hazards, self-explosion and high-speed boring;
3. keep Dugtrio at one entity/turn/health state/companion slot and keep Diglett's lower-body anatomy unresolved;
4. preserve Diglett farm-raising, Golem human diversion works/dynamite comparisons and other later-context human evidence without importing normalized ancient trainer/domestication/technology institutions;
5. create the Batch 14 dossier index/regression summary and `P4_BATCH_14_COMPLETION_AUDIT`;
6. promote exactly the eight Batch 14 manifest rows only if the full-schema/regression/completion audit passes atomically;
7. if promoted successfully, refresh the manifest audit to the expected `111 complete / 2 pilot_reviewed / 38 not_started` state;
8. keep D-034 direct encounterability separate from baseline-era natural presence;
9. stop for a Human Design Gate only if full-schema authoring exposes a durable owner-facing decision that the source review could not conservatively resolve;
10. do not begin P5 until the mandatory P4 `151/151` exit audit passes.

Current authoritative state remains:

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

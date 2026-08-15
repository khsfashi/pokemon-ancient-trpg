# Project Status

Last explanatory handoff update: **2026-08-15**

This file is the concise human-readable operational handoff. Durable product authority remains in `docs/DECISIONS.md` and the phase contracts. Live GitHub PR/issue/CI state wins when this file becomes stale.

## Project direction

Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.

Current binding direction:

- setting is intentionally **earlier than the Hisui-era precedent**;
- first playable land is **future-Kanto territory before mature Kanto regional civilization exists**;
- people identify primarily with local villages/clans/places rather than a regional Kanto state;
- ordinary material culture has an **iron-age / medieval-fantasy-like baseline**, with narrow Pokémon-dependent technology islands only where canon evidence and local practice justify them;
- humans and Pokémon are not integrated through normalized trainer culture, routine ownership, Poké Balls, PC storage, or portable containment;
- Pokémon companionship is rare and meaningful with exactly **three visible companion slots**, while `0/3` is a first-class complete run;
- the world uses **serious selective lethality**: injury, lasting impairment, Critical condition and death are real, but ordinary defeat or `0 Vitality` is not automatic death;
- ancient-world lore follows **official evidence → bounded interpretation → explicit project extrapolation**;
- species identification is knowledge-dependent: descriptive/local labels may precede stable official species identity;
- contextual hunting/killing/material use is species- and culture-sensitive rather than generic loot logic;
- rare human psychics / miracle-workers exist, but standard characters do not begin with usable psychic power; actual Gifts require rare authored awakening and ordinarily remain one narrow family;
- Pokémon use a **separate six-axis species profile** plus capability/hazard tags rather than the human seven-Attribute model;
- ordinary Pokémon do **not** auto-scale with player growth; weak species can become genuinely routine later, while rare exceptional/named individuals can remain dangerous through explicit individual stats, traits, history and ecology;
- Pokémon **hazard severity is not capped by species stats**;
- P4 six-axis normalization is pinned as **`p4-six-axis-v1`**, a deterministic 1..6 scale derived from preserved raw canonical base stats;
- Pokémon evolution is a persistent-individual species transformation distinct from ordinary growth/maturation; no kill-XP, visible level meter or generic `Evolve` command is assumed;
- mandatory design roster is National Pokédex **#001-#151**, all 151 species;
- the opening playable scope remains one bounded settlement-centered locality plus surrounding routes/ecologies.

## Completed phases

### P0 — Governance (#1) — COMPLETE

Autonomous continuation protocol, roadmap, decision log and Human Design Gate rules are established.

Primary operational entry point: `AGENTS.md`.

### P1 — Reference/API/data/resource/IP research (#2) — COMPLETE

P1 closed via PR #18.

Primary outputs:

- `docs/SOURCE_REGISTRY.md`
- `docs/FAN_PROJECT_ENFORCEMENT_CASES.md`
- `docs/P1_RESOURCE_ECOSYSTEM_RECON.md`
- `docs/REFERENCE_PROTOCOL.md`

Final production asset selection remains deferred to P6.

### P2 — World bible and setting contract (#3) — COMPLETE

P2 closed through PR #26 with `docs/P2_EXIT_AUDIT.md` = **PASS**.

Primary contract: `docs/WORLD_BIBLE.md`.

Key binding decisions: D-012 through D-022. `D-016` remains **PROVISIONAL** only in its universal historical wording: P4 decides ancient-strength treatment species by species rather than claiming all Pokémon were universally weakened by civilization.

### P3 — Core TRPG rules and character model (#4) — COMPLETE

P3 closed with `docs/P3_EXIT_AUDIT.md` = **PASS**.

Primary contracts:

- `docs/P3_ATTRIBUTE_CONTRACT.md`
- `docs/P3_DICE_AND_CHECK_CONTRACT.md`
- `docs/P3_HEALTH_PRESSURE_AND_INJURY_CONTRACT.md`
- `docs/P3_CHARACTER_CREATION_CONTRACT.md`
- `docs/P3_PROGRESSION_AND_COMPETENCE_CONTRACT.md`
- `docs/P3_INVENTORY_RESOURCES_AND_ECONOMY_CONTRACT.md`
- `docs/P3_RARE_PSYCHIC_GIFT_CONTRACT.md`
- `docs/P3_FATE_AND_EMERGENCY_CONSUMABLES_CONTRACT.md`
- `docs/P3_EXIT_AUDIT.md`

Important P3 runtime-facing invariants:

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

P4 must translate canonical Pokémon evidence into the ancient setting without turning the project into a conventional collect-them-all game.

Mandatory P4 exit breadth: **National Pokédex #001-#151, 151/151 substantive reviewed dossiers**.

Authoritative planning/contract inputs:

- `docs/GEN1_SPECIES_COVERAGE_PLAN.md`
- `docs/P4_POKEMON_DOMAIN_CONTRACT.md`
- `docs/P4_SPECIES_DOSSIER_SCHEMA.md`
- `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`
- `docs/P4_RATING_SCALE_CALIBRATION.md`
- `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`
- `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`
- `docs/P4_SPECIES_COVERAGE_MANIFEST_AUDIT.md`

### P4 shared foundation — COMPLETE

**D-031** establishes fixed species baselines plus explicit individual variation:

- Pokémon axes: `Vigor / Force / Guard / Potency / Resistance / Speed`;
- canonical raw six stats remain preserved separately;
- capability/hazard tags cover properties not representable by stats alone;
- no player-level enemy scaling;
- rare named/apex individuals may have explicit stat deltas, capabilities, learned behavior and history;
- generic `elite +HP` affixes generated to match player power are forbidden.

The pinned normalization is `p4-six-axis-v1`:

```text
raw <40     => 1
40..59      => 2
60..79      => 3
80..99      => 4
100..119    => 5
>=120       => 6
```

Hazard semantics remain orthogonal to those ratings. Exposure/delivery and post-exposure consequence are authored separately.

**D-032** establishes evolution versus maturation:

- age, experience, condition, scars, learned behavior, lineage and exceptional individual development may change an individual while it remains the same species;
- evolution changes canonical species stage and may discontinuously change stats, capabilities, ecology, logistics and social burden;
- persistent individual identity/history/bond survives evolution;
- modern level/trade metadata is source context, not automatically an ancient-world law;
- no kill-XP evolution, universal evolution gauge or generic companion `Evolve` command;
- each family receives its own source-reviewed treatment;
- when a reproducible mechanism is unsupported, `unknown` is preferred to pseudo-canon.

### P4 pilot — COMPLETE

Pilot species:

- #019 Rattata
- #013 Weedle
- #015 Beedrill
- #131 Lapras
- #130 Gyarados
- #092 Gastly
- #140 Kabuto
- #151 Mew

The pilot established hazard-first authoring, `p4-six-axis-v1`, the `pilot-rattata-apex-01` exceptional-individual fixture, full-schema dossier completeness, Mythical/rare treatment and interaction-permission semantics.

`docs/P4_PILOT_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 01 — COMPLETE

Batch 01 closed pilot-connected families through PR #44.

New dossiers:

- #014 Kakuna
- #020 Raticate
- #093 Haunter
- #094 Gengar
- #129 Magikarp
- #141 Kabutops

Six pilot family anchors were re-reviewed and promoted to `complete`: Weedle, Beedrill, Rattata, Gastly, Gyarados and Kabuto.

Batch 01 established D-032 and verified:

- metamorphosis/evolution does not collapse into ordinary stat growth;
- Haunter → Gengar modern trade metadata does not create an invented ancient trade ritual;
- the exceptional Rattata model remains valid beside ordinary Raticate;
- Magikarp historical-strength evidence stays species-specific;
- fossil/relict evidence does not create routine ancient spawns.

`docs/P4_BATCH_01_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 02 — COMPLETE

Batch 02 closed through PR #45 with eight new dossiers:

- #010 Caterpie
- #011 Metapod
- #012 Butterfree
- #025 Pikachu
- #026 Raichu
- #063 Abra
- #064 Kadabra
- #065 Alakazam

It deliberately stress-tested three D-032 mechanism classes:

1. biologically legible metamorphosis — Caterpie → Metapod → Butterfree;
2. physical evolution-stone relationship — Pikachu → Raichu;
3. modern level/trade metadata — Abra → Kadabra → Alakazam.

Important preserved results:

- Thunder Stone access does not create a shop/mine/generic evolution currency or forced companion evolution;
- Abra-family modern level/trade metadata does not become kill-XP or an ancient exchange institution;
- exact Psychic-family transformation trigger may remain unknown;
- Alakazam can continue same-species aging/strengthening after final evolution, reinforcing the maturation/evolution distinction;
- Butterfree poison scales, Pikachu/Raichu electricity and Psychic/Teleport effects retain explicit hazard/permission semantics rather than being reduced to stat or TN inflation.

`docs/P4_BATCH_02_COMPLETION_AUDIT.md` = **PASS**.

Current manifest audit after Batch 02:

```text
dossier_complete_count == 20
pilot_reviewed_count == 2
not_started_count == 129
draft_count == 0
blocking_p4_gate_count == 0
```

The two remaining `pilot_reviewed` species are #131 Lapras and #151 Mew.

### P4 Batch 03 — SELECTED

Authority: `docs/P4_BATCH_03_BRANCHING_TRANSFORMATION_PLAN.md`.

Selected new dossiers:

- #083 Farfetch'd
- #102 Exeggcute
- #103 Exeggutor
- #132 Ditto
- #133 Eevee
- #134 Vaporeon
- #135 Jolteon
- #136 Flareon

Batch 03 adds four domain pressures not exhausted by Batches 01-02:

1. **branching evolution** — Eevee has multiple mutually exclusive Generation-I evolution outcomes rather than one linear next species;
2. **transformation is not evolution** — Ditto provides the explicit regression case;
3. **multi-head / multi-will canonical species entity** — Exeggcute/Exeggutor test identity, coordination and companion-slot semantics without inventing a universal consciousness theory;
4. **species-specific carried tool + learned fighting style** — Farfetch'd tests capability dependency and individual learned behavior without creating a generic loot/equipment system.

Selection-stage source reconnaissance found no blocking Human Design Gate. Full source review still owns the final evidence classification and may expose a gate if a durable cross-species rule becomes unavoidable.

## Exact next work

Continue **Batch 03** in this order:

1. source-review #083 Farfetch'd, #102 Exeggcute, #103 Exeggutor, #132 Ditto, #133 Eevee, #134 Vaporeon, #135 Jolteon and #136 Flareon against current official evidence plus the pinned structured source inputs;
2. confirm identity, typing, raw stats, family relation and modern trigger metadata where applicable;
3. derive all eight `p4-six-axis-v1` profiles mechanically with no manual exception unless a concrete structural failure is demonstrated;
4. author capability/hazard records before threat summaries;
5. fill all eight full shared-schema dossiers;
6. run Eevee branching-evolution consistency, Ditto transformation-not-evolution, Exeggcute/Exeggutor multi-head identity, and Farfetch'd species-equipment/learned-style regressions;
7. run provenance, P2/P3/P4 contradiction and schema-completeness checks;
8. if no blocking gate remains, atomically promote the eight manifest rows and write the Batch 03 completion audit.

Expected manifest after a clean Batch 03 close:

```text
dossier_complete_count == 28
pilot_reviewed_count == 2
not_started_count == 121
draft_count == 0
blocking_p4_gate_count == 0
```

Do **not** begin P5 while P4 remains incomplete. Continue reviewed batches until the mandatory final `151/151` audit passes.

## Later mandatory contracts

- **P5 / #6:** deterministic seeded narrative event-engine contract consuming P2-P4 state/rules, including emergency-item reaction windows and valid `0/3` companion runs.
- **P6 / #12:** exact production resource/asset/provenance/mobile-budget contract.
- **P7 / #7:** technical architecture after P1-P6 contracts are stable.
- **P8 / #8:** first playable mobile vertical slice.
- **P9 / #9:** replayable expansion + `151/151` meaningful authored gameplay presence.
- **P10 / #10:** release/mobile delivery hygiene and optional Android packaging.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

# Project Status

Last explanatory handoff update: **2026-08-15**

This file is the concise human-readable operational handoff. Durable product authority remains in `docs/DECISIONS.md` and phase contracts. Live GitHub PR/issue/CI state wins when this file becomes stale.

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
- Pokémon evolution is a species-specific persistent transformation distinct from ordinary growth/maturation; no kill-XP, visible level meter or generic `Evolve` command is assumed;
- multi-origin Magneton evolution uses **D-033**: one active Magneton entity / one visible companion slot with three contributor histories retained; literal brain/soul anatomy remains unresolved;
- mandatory design roster is National Pokédex **#001-#151**, all 151 species;
- **mandatory dossier coverage does not imply baseline-era spawn authorization**; unsupported or noncontemporaneous species may have complete dossiers with explicit `unknown` / `not_applicable_baseline` ancient fields;
- **D-034 requires all 151 mandatory species to be directly encounterable somewhere in total game content**; baseline-era natural presence remains separate, and noncontemporaneous species require rare authored chronology-anomaly/displacement paths rather than routine ancient spawns;
- the opening playable scope remains one bounded settlement-centered locality plus surrounding routes/ecologies.

## Completed phases

### P0 — Governance (#1) — COMPLETE

Autonomous continuation protocol, roadmap, decision log and Human Design Gate rules are established. Primary operational entry point: `AGENTS.md`.

### P1 — Reference/API/data/resource/IP research (#2) — COMPLETE

Closed via PR #18. Primary outputs include `docs/SOURCE_REGISTRY.md`, `docs/FAN_PROJECT_ENFORCEMENT_CASES.md`, `docs/P1_RESOURCE_ECOSYSTEM_RECON.md`, and `docs/REFERENCE_PROTOCOL.md`. Final production asset selection remains deferred to P6.

### P2 — World bible and setting contract (#3) — COMPLETE

`docs/P2_EXIT_AUDIT.md` = **PASS**. Primary contract: `docs/WORLD_BIBLE.md`. D-012 through D-022 are binding; D-016 remains provisional only in its universal historical wording because P4 handles ancient strength species by species.

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

Primary contracts are the `docs/P3_*_CONTRACT.md` files covering attributes, dice/checks, health/injury, creation, progression, inventory/economy, rare psychic Gifts, and emergency consumables.

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

### P4 shared foundation — COMPLETE

**D-031** establishes fixed species baselines plus explicit individual variation: `Vigor / Force / Guard / Potency / Resistance / Speed`; raw canonical stats remain preserved; capability/hazard tags cover non-rating properties; no player-level enemy scaling; rare named/apex individuals may use explicit deltas, capabilities, learned behavior and history; generic `elite +HP` affixes are forbidden.

Pinned normalization:

```text
raw <40     => 1
40..59      => 2
60..79      => 3
80..99      => 4
100..119    => 5
>=120       => 6
```

**D-032** separates evolution from maturation: same-species age/experience/scars/learning are development; evolution changes canonical species stage and may change stats/capabilities/ecology/logistics; persistent history/bond survives; modern level/trade metadata is source context rather than ancient kill-XP law; unsupported exact ancient triggers remain `unknown`.

**D-033 / P4-HDG-003** establishes the Magneton many-to-one exception: three contributing Magnemite may form one active Magneton entity occupying one visible companion slot; contributor names/bonds/learned behavior/injuries where meaningful/event history remain queryable provenance; literal brain/soul count and generic splitting remain unresolved. Binding contract: `docs/P4_MAGNETON_COMPOSITE_IDENTITY_CONTRACT.md`.

### P4 pilot — COMPLETE

Pilot species: #019 Rattata, #013 Weedle, #015 Beedrill, #131 Lapras, #130 Gyarados, #092 Gastly, #140 Kabuto, #151 Mew. `docs/P4_PILOT_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 01 — COMPLETE

Completed pilot-connected family closure: #014 Kakuna, #020 Raticate, #093 Haunter, #094 Gengar, #129 Magikarp, #141 Kabutops; six pilot anchors were promoted to complete. `docs/P4_BATCH_01_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 02 — COMPLETE

Completed #010 Caterpie, #011 Metapod, #012 Butterfree, #025 Pikachu, #026 Raichu, #063 Abra, #064 Kadabra, #065 Alakazam. Validated metamorphosis, physical evolution-stone relationships, and modern level/trade metadata without kill-XP or an ancient trade institution. `docs/P4_BATCH_02_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 03 — COMPLETE

Completed #083 Farfetch'd, #102 Exeggcute, #103 Exeggutor, #132 Ditto, #133 Eevee, #134 Vaporeon, #135 Jolteon, #136 Flareon. Validated branching evolution, transformation distinct from evolution, multi-head/multi-will single-entity semantics and species-specific carried-tool behavior. `docs/P4_BATCH_03_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 04 — COMPLETE

Completed #046 Paras, #047 Parasect, #079 Slowpoke, #080 Slowbro, #081 Magnemite, #082 Magneton, #090 Shellder and #091 Cloyster. Validated host/parasite control, source-backed reversible evolution, participant-species versus own-family semantics and D-033 multi-origin composite persistence. `docs/P4_BATCH_04_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 05 — COMPLETE

Completed #088 Grimer, #089 Muk, #100 Voltorb, #101 Electrode, #109 Koffing, #110 Weezing, #137 Porygon and #150 Mewtwo.

Batch 05 established that mandatory dossier coverage is separate from baseline-era contemporaneous presence: local preindustrial toxic niches can support bounded Grimer/Koffing-family extrapolation without industry; original Voltorb/Electrode remain unsupported/unknown in baseline; Porygon and Mewtwo remain noncontemporaneous while preserving their artificial origins; Hisuian evidence does not substitute for original forms; hazard severity remains independent of stat ratings.

`docs/P4_BATCH_05_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 06 — COMPLETE

Completed social-ecology / encounter-unit stress roster:

- #029 Nidoran♀
- #030 Nidorina
- #031 Nidoqueen
- #032 Nidoran♂
- #033 Nidorino
- #034 Nidoking
- #115 Kangaskhan
- #128 Tauros

Primary outputs:

- `docs/P4_BATCH_06_SOCIAL_ECOLOGY_PARENT_YOUNG_PLAN.md`
- `docs/P4_BATCH_06_SOURCE_REVIEW.md`
- `docs/P4_BATCH_06_FULL_SCHEMA_DOSSIERS.md` plus its eight indexed species dossier documents
- `docs/P4_BATCH_06_COMPLETION_AUDIT.md`

Batch 06 validates these boundaries:

1. **Nidoran♀ / Nidoran♂ remain separate canonical species and evolution chains**; their sex linkage does not create a reproduction/breeding simulator.
2. **Nidorina / Nidoqueen social ecology is species-local state**; family presence, separation, young presence and young threat may change encounter permissions/behavior without universal morale, parenting or fixed parent-bonus mechanics.
3. **Kangaskhan is one active entity / one visible companion slot with a real dependent child associated state**; the child is not inventory, a hidden free companion or an ordinary second combat actor, and Mega Kangaskhan's parent-and-child attack semantics are not imported.
4. **Tauros herd protectors remain explicit D-031 individuals**; `tauros-herd-protector-prototype` carries scars, role and history with zero hidden stat deltas by default. Later explicit deltas require authored justification; no player scaling or generic elite affix exists.
5. **Nidoking's transmission-tower comparison is capability evidence only** and does not backfill modern electrical infrastructure.
6. **Poison, horn/barb, protective tackle, rampage and charge hazards remain orthogonal to ratings and obey D-020 serious selective lethality.**

`docs/P4_BATCH_06_COMPLETION_AUDIT.md` = **PASS**.

Current manifest audit after Batch 06:

```text
dossier_complete_count == 52
pilot_reviewed_count == 2
not_started_count == 97
draft_count == 0
blocking_p4_gate_count == 0
```

The two remaining `pilot_reviewed` species are #131 Lapras and #151 Mew.

## Exact next work

Select **P4 Batch 07** from the still-uncovered 97 species using coverage pressure rather than arbitrary Pokédex order. Prefer a batch that closes a new high-value design stress boundary (for example multi-stage ecology/evolution, extreme movement or environmental permission, legendary/rare ecology, or another family/social edge) while avoiding duplicate proof of already-settled Batch 01-06 rules.

Before authoring Batch 07 dossiers:

- inspect the current 52-complete manifest and remaining species families;
- choose a bounded 6-8 species batch with a clear regression purpose;
- source-review official evidence and pinned structured data first;
- open a Human Design Gate only if a genuinely product-defining ambiguity cannot be resolved from existing contracts;
- do not promote manifest rows until the entire selected batch passes full-schema and contradiction audits.

Do **not** begin P5 while P4 remains incomplete. Continue reviewed batches until the mandatory final `151/151` audit passes.

## Later mandatory contracts

- **P5 / #6:** deterministic seeded narrative event-engine contract consuming P2-P4 state/rules, including emergency-item reaction windows and valid `0/3` companion runs.
- **P6 / #12:** exact production resource/asset/provenance/mobile-budget contract.
- **P7 / #7:** technical architecture after P1-P6 contracts are stable.
- **P8 / #8:** first playable mobile vertical slice.
- **P9 / #9:** replayable expansion + `151/151` meaningful authored gameplay presence, including D-034 chronology-anomaly/displacement paths where baseline presence is impossible.
- **P10 / #10:** release/mobile delivery hygiene and optional Android packaging.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

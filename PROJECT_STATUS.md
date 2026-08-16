# Project Status

Last explanatory handoff update: **2026-08-16**

This file is the concise operational handoff. Durable product authority remains in `docs/DECISIONS.md` and the phase contracts; live GitHub state wins if this file is stale.

## Binding direction

- Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.
- Setting is earlier than Hisui, in future-Kanto territory before mature regional civilization.
- Iron-age / medieval-fantasy-like material baseline; Pokémon-dependent technology/culture remains narrow and evidence-backed.
- No normalized trainer culture, routine ownership, portable containment, Poké Balls or PC storage.
- Exactly three visible companion slots; `0/3` remains a valid full run.
- Pokémon use fixed six-axis species baselines plus capability/hazard tags. Ordinary Pokémon do not scale with the player; exceptional individuals require explicit persistent history/traits.
- `p4-six-axis-v1` remains pinned. Hazard severity is not capped by species-axis ratings.
- Evolution is distinct from ordinary maturation; no kill-XP, visible character levels or generic evolution command.
- Mandatory P4 roster is National Pokédex #001-#151. D-034 requires all 151 to be directly encounterable somewhere in total content, while baseline-era natural presence remains a separate question.

## Completed phases

```text
P0 Governance                         COMPLETE
P1 Reference/API/data/resource/IP     COMPLETE
P2 World bible and setting contract   COMPLETE
P3 Core TRPG rules/character model    COMPLETE
```

## Current phase

**P4 — Pokémon adaptation + complete Gen-I 151 species dossiers (#5) is active.**

P4 exit requires 151/151 substantive reviewed dossiers. Do not begin P5 before that audit passes.

Current authoritative manifest state after Batch 19 and unchanged by Batch 20 selection/source review:

```text
dossier_complete_count == 141
pilot_reviewed_count == 2
not_started_count == 8
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two `pilot_reviewed` species remain #131 Lapras and #151 Mew.

### P4 foundation

- D-031: fixed species baselines plus explicit individual variation; no player-level enemy scaling.
- `p4-six-axis-v1`: raw `<40 => 1`, `40..59 => 2`, `60..79 => 3`, `80..99 => 4`, `100..119 => 5`, `>=120 => 6`.
- D-032: modern level/trade evolution metadata is source context, not ancient progression law.
- D-033: Magneton remains one active entity / one visible companion slot.
- D-034: all #001-#151 require direct encounterability somewhere in total content, separate from baseline natural presence.

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
Batch 14   PASS
Batch 15   PASS
Batch 16   PASS
Batch 17   PASS
Batch 18   PASS
Batch 19   PASS
```

### P4 Batch 20 — SOURCE REVIEW COMPLETE — full-schema authoring next

Roster:

- #023 Ekans / #024 Arbok
- #060 Poliwag / #061 Poliwhirl / #062 Poliwrath

Primary outputs so far:

- `docs/P4_BATCH_20_CONSTRICTION_AMPHIBIOUS_LOCOMOTION_PLAN.md`
- `docs/P4_BATCH_20_SOURCE_REVIEW.md`

Source-review conclusions:

- current official pages and pinned `SRC-DATA-001` evidence were reviewed claim-by-claim rather than flattening observation, historical/version-scoped wording, reputation, contextual biology and modern mechanics into universal rules;
- Ekans stealth, tongue sensing, large-prey swallowing and age/venom evidence remain species-local encounter facts without invisibility, omniscient scanning, instant-kill swallowing or a continuous maturation simulator;
- Arbok intimidation, persistent pursuit, constriction and venom can produce severe pressure while preserving explicit eligibility, positioning, counterplay, escape and player input; historical no-escape/steel-drum wording does not become universal restraint or generic structural deletion;
- Poliwag's newly grown legs and thin/flexible skin preserve meaningful water/land asymmetry without automatic land immobilization, universal puncture immunity or continuous growth/body simulation;
- Poliwhirl is genuinely amphibious and has moist/slippery skin plus spiral-linked drowsiness evidence, but this creates no hydration meter, guaranteed restraint escape, passive hypnosis, automatic sleep or continuous gaze polling;
- Poliwrath's whole-body swimming, extreme endurance and brief water-surface running remain bounded capability evidence rather than infinite stamina, literal ocean-travel formulas, permanent water walking or passenger fast travel;
- Politoed plus modern Water Stone / King's Rock / trade metadata remain chronology/mechanic provenance under D-032 rather than mandatory ancient progression law;
- all five remain one Pokémon = one ordinary turn / health state / initiative presence / visible companion slot;
- D-034 direct encounterability remains separate from commonness, baseline abundance and ordinary companionship;
- later runtime should prefer cached/coarse encounter state plus event-triggered venom, constriction, pursuit, gaze and land/water consequences rather than continuous stealth, poison, grapple, hydration, gaze, swimming or stamina simulation;
- no new blocking Human Design Gate is required.

Deterministic profiles from pinned `SRC-DATA-001`:

```text
Ekans      1/3/2/2/2/2
Arbok      3/4/3/3/3/4
Poliwag    2/2/2/2/2/4
Poliwhirl  3/3/3/2/2/4
Poliwrath  4/4/4/3/4/3
```

Source-review validation:

```text
reviewed_species_count == 5
current_official_species_pages_verified == 5
pinned_species_records_reviewed == 5
rating_profile_reproducible_count == 5
manual_rating_exception_count == 0
source_claims_epistemically_scoped == true
automatic_poison_rule_added == false
forced_Fear_or_input_loss_rule_added == false
generic_grapple_or_pursuit_simulator_added == false
continuous_hydration_or_gaze_polling_added == false
numeric_swim_or_stamina_runtime_formula_added == false
water_walking_global_rule_added == false
continuous_simulation_requirement_count == 0
p2_contradiction_count == 0
p3_contradiction_count == 0
p4_contract_contradiction_count == 0
blocking_human_design_gate_count == 0
coverage_manifest_changed == false
ready_for_full_schema_authoring == true
```

### Remaining P4 not-started roster

Source review does not promote coverage, so the authoritative manifest still lists all eight rows as `not_started` until the later Batch 20 completion audit:

```text
#023 Ekans       #024 Arbok
#060 Poliwag     #061 Poliwhirl    #062 Poliwrath
#098 Krabby      #099 Kingler
#108 Lickitung
```

If Batch 20 later completes and promotes exactly its five reviewed rows, the final `not_started` pool will be #098 Krabby, #099 Kingler and #108 Lickitung, with expected coverage `146 complete / 2 pilot_reviewed / 3 not_started`.

## Exact next work

Author the five **P4 Batch 20 frozen full-schema dossiers**:

- `docs/P4_BATCH_20_DOSSIER_023_EKANS.md`
- `docs/P4_BATCH_20_DOSSIER_024_ARBOK.md`
- `docs/P4_BATCH_20_DOSSIER_060_POLIWAG.md`
- `docs/P4_BATCH_20_DOSSIER_061_POLIWHIRL.md`
- `docs/P4_BATCH_20_DOSSIER_062_POLIWRATH.md`

Then create:

- `docs/P4_BATCH_20_FULL_SCHEMA_DOSSIERS.md`
- `docs/P4_BATCH_20_COMPLETION_AUDIT.md`

The authoring/completion pass must:

1. populate all 20 frozen-schema top-level sections for each species with `dossier_status: complete` and no placeholder TODOs;
2. preserve the claim-level provenance and boundaries established by `docs/P4_BATCH_20_SOURCE_REVIEW.md`;
3. preserve one Pokémon = one ordinary turn / health state / initiative presence / visible companion slot;
4. keep stealth, sensing, venom, constriction, intimidation, pursuit, drowsiness and amphibious locomotion species-local and event-scoped;
5. preserve warning, eligibility, counterplay, escape/avoidance and player input for severe hazards;
6. keep D-034 direct encounterability separate from baseline abundance and ordinary companionship;
7. require no continuous stealth, poison, grapple, pursuit, hydration, gaze, swimming or stamina simulation;
8. atomically promote exactly #023/#024/#060/#061/#062 only if dossier validation and Batch 20 completion audit pass;
9. leave #098/#099/#108 as the final `not_started` roster after successful promotion;
10. keep P5 blocked until the final mandatory `151/151` P4 exit audit passes.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

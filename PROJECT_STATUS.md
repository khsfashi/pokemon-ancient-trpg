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

Current authoritative manifest state after Batch 20:

```text
dossier_complete_count == 146
pilot_reviewed_count == 2
not_started_count == 3
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two `pilot_reviewed` species remain #131 Lapras and #151 Mew. The final `not_started` species are #098 Krabby, #099 Kingler and #108 Lickitung.

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
Batch 20   PASS
```

### P4 Batch 20 — COMPLETE

Roster:

- #023 Ekans / #024 Arbok
- #060 Poliwag / #061 Poliwhirl / #062 Poliwrath

Primary outputs:

- `docs/P4_BATCH_20_CONSTRICTION_AMPHIBIOUS_LOCOMOTION_PLAN.md`
- `docs/P4_BATCH_20_SOURCE_REVIEW.md`
- `docs/P4_BATCH_20_DOSSIER_023_EKANS.md`
- `docs/P4_BATCH_20_DOSSIER_024_ARBOK.md`
- `docs/P4_BATCH_20_DOSSIER_060_POLIWAG.md`
- `docs/P4_BATCH_20_DOSSIER_061_POLIWHIRL.md`
- `docs/P4_BATCH_20_DOSSIER_062_POLIWRATH.md`
- `docs/P4_BATCH_20_FULL_SCHEMA_DOSSIERS.md`
- `docs/P4_BATCH_20_COMPLETION_AUDIT.md`

Completion conclusions:

- all five dossiers populate the 20 frozen-schema top-level sections with `dossier_status: complete`, zero TODO placeholders and zero blocking Human Design Gates;
- deterministic `p4-six-axis-v1` profiles reproduce with zero manual exceptions;
- Ekans stealth and tongue sensing remain contextual rather than invisibility or omniscient scanning; swallowing and venom require eligible event resolution rather than instant-kill or automatic-poison logic;
- Arbok intimidation, pursuit, constriction and venom remain severe but agency-safe; no forced Fear, permanent restraint, infinite pursuit, perfect tracking or generic structural deletion is introduced;
- Poliwag preserves meaningful water/land asymmetry without automatic land immobilization, universal puncture immunity or continuous maturation/body simulation;
- Poliwhirl remains genuinely amphibious with slippery-skin and visual-drowsiness pressure, but no hydration meter, guaranteed escape, passive hypnosis, automatic sleep or continuous gaze polling is introduced;
- Poliwrath remains a powerful amphibious swimmer with exceptional but bounded endurance and momentary water-surface movement, without infinite stamina, literal travel formulas, permanent water walking or passenger fast travel;
- all five remain one Pokémon = one ordinary turn / health state / initiative presence / visible companion slot;
- ordinary weak species may become routine as human capability advances, while rare exceptional individuals remain history-backed and non-player-scaled;
- high species stats do not imply automatic aggression;
- D-034 direct encounterability remains separate from commonness, baseline abundance and ordinary companionship;
- later runtime guidance remains cached/coarse authored encounter state plus event-triggered consequences rather than continuous species simulation.

Deterministic profiles:

```text
Ekans      1/3/2/2/2/2
Arbok      3/4/3/3/3/4
Poliwag    2/2/2/2/2/4
Poliwhirl  3/3/3/2/2/4
Poliwrath  4/4/4/3/4/3
```

Completion validation:

```text
full_schema_dossier_count == 5
dossier_status_complete_count == 5
required_section_count_per_dossier == 20
placeholder_TODO_count == 0
rating_profile_reproducible_count == 5
manual_rating_exception_count == 0
p2_contradiction_count == 0
p3_contradiction_count == 0
p4_contract_contradiction_count == 0
blocking_human_design_gate_count == 0
manifest_promoted_species_count == 5
manifest_complete_count == 146
manifest_pilot_reviewed_count == 2
manifest_not_started_count == 3
```

### Remaining P4 roster work

```text
#098 Krabby
#099 Kingler
#108 Lickitung
```

These are the final three `not_started` rows. After they are completed, #131 Lapras and #151 Mew still require whatever final completion promotion/audit is necessary to satisfy the strict `151 complete` P4 exit invariant; `pilot_reviewed` is not silently treated as `complete`.

## Exact next work

Begin **P4 Batch 21** with the final three `not_started` species:

- #098 Krabby
- #099 Kingler
- #108 Lickitung

The next pass should:

1. create a concise Batch 21 pressure-selection/source-review document for shell/claw force, asymmetric claw morphology, water/land behavior and tongue/contact anatomy;
2. review current primary official evidence plus pinned `SRC-DATA-001` claim-by-claim before any manifest promotion;
3. prevent claw force from becoming generic mining, universal material destruction, extra appendage actions or detachable weapon entities;
4. prevent Lickitung tongue reach/contact/saliva evidence from becoming omniscient sensing, unrestricted grappling, automatic status application, generic tool use or continuous contact simulation;
5. preserve one Pokémon = one ordinary turn / health state / initiative presence / visible companion slot;
6. preserve ordinary-species progression and rare persistent-history exceptional individuals without player-level scaling;
7. preserve warning, eligibility, counterplay, escape/avoidance and player input for severe hazards;
8. prefer cached/coarse authored state and event-triggered consequences over continuous species simulation;
9. promote rows only after frozen-schema dossiers and completion audit pass atomically;
10. do not begin P5 until the mandatory final `151/151` P4 exit audit passes.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

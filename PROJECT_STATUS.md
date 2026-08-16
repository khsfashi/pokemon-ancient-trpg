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

Current authoritative manifest state after Batch 21 completion:

```text
dossier_complete_count == 149
pilot_reviewed_count == 2
not_started_count == 0
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

There are no remaining `not_started` Generation-I species. The only non-`complete` rows are #131 Lapras and #151 Mew, both `pilot_reviewed`.

### P4 foundation

- D-031: fixed species baselines plus explicit individual variation; no player-level enemy scaling.
- `p4-six-axis-v1`: raw `<40 => 1`, `40..59 => 2`, `60..79 => 3`, `80..99 => 4`, `100..119 => 5`, `>=120 => 6`.
- D-032: modern level/trade/move evolution metadata is source context, not ancient progression law.
- D-033: Magneton remains one active entity / one visible companion slot.
- D-034: all #001-#151 require direct encounterability somewhere in total content, separate from baseline natural presence.

### P4 completed dossier work

```text
Pilot      REVIEWED — final promotion audit still required for Lapras/Mew
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
Batch 21   PASS
```

### P4 Batch 21 — COMPLETE

Roster:

- #098 Krabby / 크랩
- #099 Kingler / 킹크랩
- #108 Lickitung / 내루미

Primary outputs:

- `docs/P4_BATCH_21_CLAW_TONGUE_CONTACT_PLAN.md`
- `docs/P4_BATCH_21_SOURCE_REVIEW.md`
- `docs/P4_BATCH_21_DOSSIER_098_KRABBY.md`
- `docs/P4_BATCH_21_DOSSIER_099_KINGLER.md`
- `docs/P4_BATCH_21_DOSSIER_108_LICKITUNG.md`
- `docs/P4_BATCH_21_FULL_SCHEMA_DOSSIERS.md`
- `docs/P4_BATCH_21_COMPLETION_AUDIT.md`

Completion state:

```text
full_schema_dossier_count == 3
dossier_status_complete_count == 3
required_section_count_per_dossier == 20
rating_profile_reproducible_count == 3
manual_rating_exception_count == 0
placeholder_TODO_count == 0
p2_contradiction_count == 0
p3_contradiction_count == 0
p4_contract_contradiction_count == 0
blocking_human_design_gate_count == 0
continuous_simulation_requirement_count == 0
```

Deterministic profiles:

```text
Krabby     30/105/90/25/25/50 -> 1/5/4/1/1/2
Kingler    55/130/115/50/50/75 -> 2/6/5/2/2/3
Lickitung  90/55/75/60/75/30 -> 4/2/3/3/3/1
```

Binding Batch 21 conclusions:

- Krabby's pincers remain natural weapons and lateral-balance anatomy. Pincer loss/regrowth may change discrete authored encounter options but never becomes detachable loot, instant regeneration, renewable pincer farming, per-frame limb health or extra pincer actions.
- Krabby's beach-burrow/food-scarcity territorial evidence remains contextual ecology. Bubble display is readable warning pressure, not forced Fear or a free defensive action.
- Kingler remains genuinely extreme in pincer force. The `10,000-horsepower` wording is preserved as severe source-scale capability evidence, while actual consequences require eligible position/contact and authored target suitability; no literal physics math, generic mining, armor deletion or arbitrary structural destruction is created.
- Kingler's oversized claw keeps real aim, balance and fatigue counterweights without a continuous stamina/torque/load model. One large claw never becomes an extra turn, entity, health pool or initiative presence.
- Lickitung's tongue manipulation and texture/taste sensing require actual contact and reveal only contact-accessible cues; they do not become generic hands, unrestricted tools/grappling, remote scanning or omniscient identification.
- Sticky saliva plus tingling/rash/itch/paralysis wording remain exposure-scoped hazards with warning, eligibility, cleaning/counterplay and player input; no automatic status on proximity or every lick.
- Hisui-era processed-saliva adhesive remains later-era provenance. Proto-Kanto does not automatically receive the recipe, profession, market, industrial chain or routine live-harvest economy.
- all three preserve one Pokémon = one ordinary turn / health state / initiative presence / visible companion slot.
- ordinary species remain fixed-baseline and non-player-scaled; rare boss-grade exceptional individuals require explicit persistent history/traits.
- later runtime guidance remains cached/coarse authored state plus event-triggered consequences rather than continuous appendage/contact/contamination simulation.

## Remaining P4 work

Only the two pilot-reviewed dossiers remain before strict P4 exit:

```text
#131 Lapras
#151 Mew
```

They must be audited against the **final** frozen schema and all contracts accumulated through Batch 21. Their rare/singular treatment must not be weakened merely to satisfy uniformity.

Target state after successful promotion:

```text
dossier_complete_count == 151
pilot_reviewed_count == 0
not_started_count == 0
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

## Exact next work

Run the **final P4 pilot completion + exit audit**:

1. inspect the existing #131 Lapras and #151 Mew pilot dossiers against all 20 final frozen-schema sections;
2. identify any fields that were valid for the pilot but no longer satisfy the pinned final schema/contracts;
3. fill only the missing or under-specified completion requirements without flattening Lapras rarity or Mew singular/mythical treatment;
4. reproduce their pinned six-axis profiles with zero unexplained manual exceptions;
5. recheck one-entity/action-economy, D-034 encounterability, companionship, hazard/player-agency, chronology/provenance, progression/non-player-scaling, resource/craft and runtime-simulation boundaries;
6. ensure no blocking Human Design Gate remains;
7. atomically promote exactly #131 and #151 from `pilot_reviewed` to `complete` only if the strict audit passes;
8. update the coverage audit to `151 complete / 0 pilot_reviewed / 0 not_started`;
9. run the mandatory final `151/151` P4 exit audit across the whole manifest;
10. only after that PASS may the project handoff advance to P5.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

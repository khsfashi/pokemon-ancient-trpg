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

Current authoritative manifest state after Batch 15:

```text
dossier_complete_count == 117
pilot_reviewed_count == 2
not_started_count == 32
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
```

### P4 Batch 15 — COMPLETE

Roster:

- #043 Oddish / #044 Gloom / #045 Vileplume
- #069 Bellsprout / #070 Weepinbell / #071 Victreebel

Primary outputs:

- `docs/P4_BATCH_15_BOTANICAL_CHEMICAL_PREDATION_PLAN.md`
- `docs/P4_BATCH_15_SOURCE_REVIEW.md`
- `docs/P4_BATCH_15_FULL_SCHEMA_DOSSIERS.md` plus six indexed dossier files
- `docs/P4_BATCH_15_COMPLETION_AUDIT.md`
- updated `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`
- updated `docs/P4_SPECIES_COVERAGE_MANIFEST_AUDIT.md`

Batch 15 preserves plantlike bodies as living Pokémon rather than scenery/resources; keeps Oddish burial and Bellsprout rooting species-local; preserves Gloom/Victreebel sensory attraction without compulsion; separates Vileplume allergy, toxin and versioned paralysis/immobilization without a permanent aura; keeps Weepinbell toxic powder separate from corrosive/digestive fluid; treats extreme corrosion wording as severe authored fiction rather than matter deletion or chemistry simulation; and keeps Victreebel feeding-history sweetness qualitative rather than kill-XP, hidden levels, permanent stat growth or a farming loop.

Evolution-stage inheritance remains evidence-gated. Modern level 21, Leaf Stone, abilities and move metadata remain source context under D-032, while Bellossom/Sun Stone remains post-Generation-I provenance context only.

`docs/P4_BATCH_15_COMPLETION_AUDIT.md` = **PASS**.

## Exact next work

Remain in P4 and select a coherent **Batch 16** roster from the remaining 32 `not_started` species.

Prioritize still-underrepresented canon/mechanical pressure rather than simple Pokédex order. Before binding the roster, inspect remaining species against existing Batch 01-15 coverage so Batch 16 adds new stress cases instead of duplicating already-reviewed boundaries.

Then create the Batch 16 selection/pressure plan and proceed to claim-level source review. Do not mutate the coverage manifest during selection/source review.

Do not begin P5 until the mandatory `151/151` P4 exit audit passes.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

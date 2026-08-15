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

Current authoritative manifest state after Batch 16 and unchanged by Batch 17 selection:

```text
dossier_complete_count == 123
pilot_reviewed_count == 2
not_started_count == 26
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
```

### P4 Batch 16 — COMPLETE

Roster:

- #035 Clefairy / #036 Clefable
- #037 Vulpix / #038 Ninetales
- #122 Mr. Mime
- #124 Jynx

Primary outputs:

- `docs/P4_BATCH_16_FOLKLORE_SUPERNATURAL_HUMANOID_PLAN.md`
- `docs/P4_BATCH_16_SOURCE_REVIEW.md`
- `docs/P4_BATCH_16_FULL_SCHEMA_DOSSIERS.md` plus six indexed dossier files
- `docs/P4_BATCH_16_COMPLETION_AUDIT.md`
- updated `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`
- updated `docs/P4_SPECIES_COVERAGE_MANIFEST_AUDIT.md`

`docs/P4_BATCH_16_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 17 — SELECTED

Roster:

- #056 Mankey / #057 Primeape
- #106 Hitmonlee / #107 Hitmonchan
- #123 Scyther
- #127 Pinsir

Selection output:

- `docs/P4_BATCH_17_COMBAT_MORPHOLOGY_AGGRESSION_PLAN.md`

Batch 17 stresses combat morphology, temperament/aggression, pursuit wording, martial analogy, anatomical weapons, extreme speed claims, and multi-limb/combo descriptions without introducing universal rage/aggro meters, human martial-sport institutions, extra action economy, detachable weapon semantics, live-harvest loops, or literal momentum/kinetic-damage formulas.

Current official Pokédex evidence is sufficient for selection: Mankey group/separation anger and abrupt temper; Primeape gaze-linked fury/pursuit plus researcher-theory containment wording; Hitmonlee controlled leg extension and impact hardening; Hitmonchan combination punching, extreme stated punch speed, muscular fists and recovery cadence; Scyther forearm scythes, high visual-relative speed and cutting-driven sharpening; Pinsir powerful pincers, territorial/cold-response ecology and later-region social observations.

Post-Generation-I context including Annihilape, Tyrogue/Hitmontop, Scizor, Kleavor, Mega Pinsir, later abilities and regional observations remains chronology/provenance context only unless a later owner decision expands baseline scope.

No blocking Human Design Gate is required at selection time.

## Exact next work

Create **P4 Batch 17 claim-level source review** for #056, #057, #106, #107, #123, and #127.

The source review must:

1. inventory current official Pokédex text plus pinned `SRC-DATA-001` historical/versioned evidence;
2. preserve observed fact, measurement/numeric wording, researcher interpretation, analogy/reputation, version-scoped extraordinary claims, and project extrapolation as separate evidence classes;
3. reproduce `p4-six-axis-v1` profiles without interpreting raw stats or numerical Pokédex claims as literal world formulas;
4. keep anger/pursuit behavior player-agency-safe and bounded rather than universal rage/aggro systems;
5. keep Hitmonlee/Hitmonchan martial-looking physiology separate from human dojos, boxing rules, professions, combo-turn inflation, and physics simulation;
6. keep Scyther/Pinsir natural weapons separate from detachable gear, automatic live harvesting, and universal material destruction;
7. audit Annihilape, Tyrogue/Hitmontop, Scizor, Kleavor, Mega Pinsir, later abilities and regional observations as post-Gen-I context;
8. identify any Human Design Gate before full-schema authoring;
9. keep D-034 direct encounterability separate from baseline-era natural abundance;
10. leave the coverage manifest unchanged until all six full-schema dossiers and the Batch 17 completion audit pass atomically.

If all six later pass, expected coverage becomes `129 complete / 2 pilot_reviewed / 20 not_started`.

Do not begin P5 until the mandatory `151/151` P4 exit audit passes.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

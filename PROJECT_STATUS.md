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

Current authoritative manifest state after Batch 16:

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

Batch 16 preserves claim-level epistemic status instead of flattening observation, measurement, scientist interpretation, folklore, analogy and version-scoped extraordinary wording into one narrator truth.

Clefairy keeps full-moon gathering/floating and magnetic anomalies as species-local discrete phenomena without a lunar-stat, spawn-calendar or continuous magnetism system. Clefable keeps extreme hearing separate from moon-kin folklore and does not gain omniscience. Vulpix's one-tail-to-six change is ordinary maturation, separate from evolution, levels and kill-XP. Ninetales preserves curse, millennium-life, mystical-tail, human-speech-understanding and historical mind-control evidence with source scope; any mental influence or extraordinary tail consequence requires explicit warning, eligibility, counterplay and bounded resolution rather than passive agency removal.

Mr. Mime's cross-source stable minimum is a real temporary invisible resisting barrier; conflicting belief/air/molecular explanations remain unresolved, and barriers cannot become permanent map geometry, indestructible walls or untelegraphed collisions. Jynx retains meaningful-looking vocal/rhythmic communication and version-scoped dance influence without assuming fluent human language, human personhood, ancient performance institutions or forced player input.

Modern Fairy typing, abilities, current scientist/musician examples, Moon Stone/Fire Stone metadata, baby Pokémon and regional forms remain chronology-safe provenance context rather than automatic ancient institutions or generic magic/technology permissions.

`docs/P4_BATCH_16_COMPLETION_AUDIT.md` = **PASS**.

## Exact next work

Begin **P4 Batch 17 planning and source review** for the next coherent subset of the 26 remaining `not_started` Generation-I species.

The next batch must:

1. select a bounded thematic roster from the remaining manifest rows;
2. review current official Pokédex text plus the pinned `SRC-DATA-001` historical/versioned evidence;
3. reproduce `p4-six-axis-v1` profiles without interpreting raw stats as literal world formulas;
4. identify any Human Design Gate before full-schema authoring;
5. keep D-034 direct encounterability separate from baseline-era natural abundance;
6. leave the coverage manifest unchanged until the entire batch's full-schema dossiers and completion audit pass atomically.

Do not begin P5 until the mandatory `151/151` P4 exit audit passes.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

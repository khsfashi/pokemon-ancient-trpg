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

Current authoritative manifest state after Batch 19:

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

### P4 Batch 19 — COMPLETE

Roster:

- #086 Seel / #087 Dewgong
- #116 Horsea / #117 Seadra
- #118 Goldeen / #119 Seaking

Primary outputs:

- `docs/P4_BATCH_19_AQUATIC_LOCOMOTION_COLD_WATER_MORPHOLOGY_PLAN.md`
- `docs/P4_BATCH_19_SOURCE_REVIEW.md`
- `docs/P4_BATCH_19_DOSSIER_086_SEEL.md`
- `docs/P4_BATCH_19_DOSSIER_087_DEWGONG.md`
- `docs/P4_BATCH_19_DOSSIER_116_HORSEA.md`
- `docs/P4_BATCH_19_DOSSIER_117_SEADRA.md`
- `docs/P4_BATCH_19_DOSSIER_118_GOLDEEN.md`
- `docs/P4_BATCH_19_DOSSIER_119_SEAKING.md`
- `docs/P4_BATCH_19_FULL_SCHEMA_DOSSIERS.md`
- `docs/P4_BATCH_19_COMPLETION_AUDIT.md`

Completion conclusions:

- all six dossiers populate the 20 frozen-schema top-level sections with `dossier_status: complete` and zero blocking Human Design Gates;
- deterministic `p4-six-axis-v1` profiles reproduce with zero manual exceptions;
- Seel cold-water specialization, localized ice breaking and air access remain event-scoped; no universal ice destruction, mining, continuous temperature formula or indefinite underwater breathing is introduced;
- Dewgong cold adaptation, day/night behavior, eight-knot swimming and snow concealment remain bounded evidence; no cold immunity, real-time schedule, fast-travel formula or permanent invisibility is introduced;
- Horsea escape, multidirectional swimming, tail anchoring and ink stay inside ordinary action economy; no guaranteed flee, generic grapple, automatic blindness/input loss or unrestricted passenger traversal is introduced;
- Seadra poison/contact hazards preserve warning, exposure eligibility, counterplay and bounded consequences; paternal care remains contextual, historical whirlpool evidence creates no fluid simulator, and medicinal-resource provenance creates no live-harvest or medicine-market loop;
- Goldeen five-knot swimming, horn pressure and spawning migration remain authored capabilities without infinite stamina, universal waterfall traversal, generic material destruction or human institutions derived from “Water Dancer/Water Queen” wording;
- Seaking spawning, boulder nest construction and parental defense remain contextual ecology; horn boring does not create mining or arbitrary terrain deletion and long guarding periods do not require real-time scheduling or a breeding simulator;
- all six remain one Pokémon = one ordinary turn / health state / initiative presence / visible companion slot;
- D-034 direct encounterability remains separate from commonness, baseline abundance and ordinary companionship;
- later runtime may use cached/coarse water, cold, current, air-access, ink, poison-eligibility, nest and seasonal states plus event-triggered consequences; no continuous per-frame fluid/temperature/oxygen/breeding/resource simulation is required.

Deterministic profiles:

```text
Seel     3/2/2/2/3/2
Dewgong  4/3/4/3/4/3
Horsea   1/2/3/3/1/3
Seadra   2/3/4/4/2/4
Goldeen  2/3/3/1/2/3
Seaking  4/4/3/3/4/3
```

Completion validation:

```text
full_schema_dossier_count == 6
dossier_status_complete_count == 6
required_section_count_per_dossier == 20
placeholder_TODO_count == 0
rating_profile_reproducible_count == 6
manual_rating_exception_count == 0
p2_contradiction_count == 0
p3_contradiction_count == 0
p4_contract_contradiction_count == 0
blocking_human_design_gate_count == 0
manifest_promoted_species_count == 6
manifest_complete_count == 141
manifest_pilot_reviewed_count == 2
manifest_not_started_count == 8
```

### Remaining P4 not-started roster

```text
#023 Ekans       #024 Arbok
#060 Poliwag     #061 Poliwhirl    #062 Poliwrath
#098 Krabby      #099 Kingler
#108 Lickitung
```

## Exact next work

Begin **P4 Batch 20** from the eight remaining `not_started` species.

The next pass should:

1. select a coherent Batch 20 roster from #023/#024, #060/#061/#062, #098/#099 and #108;
2. prioritize remaining untested pressure around constriction/venom morphology, amphibious or water/land locomotion, shell/claw force and tongue/contact anatomy without creating generic subsystems;
3. perform claim-level current-official + pinned `SRC-DATA-001` source review before any manifest promotion;
4. preserve ordinary-species progression, exceptional-individual semantics, player agency, one-entity action economy and D-034 direct encounterability;
5. prefer cached/coarse authored state and event-triggered consequences over continuous species simulation;
6. promote rows only after frozen-schema dossiers and completion audit pass atomically;
7. do not begin P5 until the mandatory `151/151` P4 exit audit passes.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

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

Current authoritative manifest state after Batch 17:

```text
dossier_complete_count == 129
pilot_reviewed_count == 2
not_started_count == 20
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
```

### P4 Batch 17 — COMPLETE

Roster:

- #056 Mankey / #057 Primeape
- #106 Hitmonlee / #107 Hitmonchan
- #123 Scyther
- #127 Pinsir

Primary outputs:

- `docs/P4_BATCH_17_COMBAT_MORPHOLOGY_AGGRESSION_PLAN.md`
- `docs/P4_BATCH_17_SOURCE_REVIEW.md`
- `docs/P4_BATCH_17_FULL_SCHEMA_DOSSIERS.md` plus six indexed dossier files
- `docs/P4_BATCH_17_COMPLETION_AUDIT.md`
- updated `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`
- updated `docs/P4_SPECIES_COVERAGE_MANIFEST_AUDIT.md`

`docs/P4_BATCH_17_COMPLETION_AUDIT.md` = **PASS**.

Key conclusions:

- Mankey's volatile anger and group escalation use explicit warning/state transitions, not a numeric rage meter or global no-flee rule.
- Primeape's gaze-linked fury and severe pursuit remain authored and bounded by terrain, visibility, injury, competing goals and exit states; no infinite pathfinding or automatic escape failure is created.
- Hitmonlee's controlled leg extension and impact hardening are discrete species-local capabilities; no continuous skeletal physics, arbitrary traversal, extra turns or real-world force formula is created.
- Hitmonchan's combinations remain one ordinary action/effect, 300+ mph wording does not become initiative/kinetic-energy math, and the roughly three-minute recovery cadence does not become a real-time global timer.
- Scyther's scythes remain living anatomy; blur/camouflage does not create extra entities, teleportation or permanent invisibility, and hard-object cutting does not create universal destructible terrain.
- Pinsir's pincer grip resolves through authored position/leverage state; body-weight and material feats do not create generic carry/crush formulas, and cold response does not create continuous temperature simulation.
- natural weapons/body parts are never automatic equipment, loot or live-harvest resources.
- one Pokémon remains one ordinary turn, one health state, one initiative presence and one visible companion slot regardless of bilateral limbs or combo wording.
- Annihilape, Tyrogue/Hitmontop, Scizor, Kleavor, Mega Pinsir and later-region evidence remain chronology/provenance context only.
- D-034 remains unchanged: all six are directly encounterable somewhere without implying commonness, region-wide natural presence or ordinary companionship.
- all six dossiers require P6 readability follow-up; later runtime should prefer cached authored/discrete state over per-frame species simulation.

Batch 17 validation:

```text
full_schema_dossier_count == 6
dossier_status_complete_count == 6
required_section_count_per_dossier == 20
rating_profile_reproducible_count == 6
manual_rating_exception_count == 0
p2_contradiction_count == 0
p3_contradiction_count == 0
p4_contract_contradiction_count == 0
blocking_human_design_gate_count == 0
manifest_promotion_authorized == true
```

### Remaining P4 not-started roster

```text
#023 Ekans       #024 Arbok
#060 Poliwag     #061 Poliwhirl    #062 Poliwrath
#086 Seel        #087 Dewgong
#098 Krabby      #099 Kingler
#108 Lickitung
#116 Horsea      #117 Seadra
#118 Goldeen     #119 Seaking
#125 Electabuzz  #126 Magmar
#138 Omanyte     #139 Omastar
#142 Aerodactyl  #143 Snorlax
```

## Exact next work

Select **P4 Batch 18** from the remaining 20 species and create a focused batch plan before source review.

The selection pass must:

1. group species by the next highest-value contract pressure rather than simply by Pokédex order;
2. preserve D-034 direct encounterability while keeping abundance/locality separate;
3. identify any new pressure around constriction/venom, amphibious movement, aquatic combat, ancient/fossil chronology, extreme body morphology, elemental physiology, dormancy or appetite before authoring;
4. avoid reopening already settled contracts unless the remaining evidence actually requires a new durable owner decision;
5. leave the manifest unchanged during selection/source review and promote only after a full six-or-appropriate-size dossier batch and completion audit pass.

Do not begin P5 until the mandatory `151/151` P4 exit audit passes.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

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

### P4 Batch 18 — SELECTED

Roster:

- #125 Electabuzz
- #126 Magmar
- #138 Omanyte / #139 Omastar
- #142 Aerodactyl
- #143 Snorlax

Primary selection output:

- `docs/P4_BATCH_18_ANCIENT_CHRONOLOGY_ELEMENTAL_PHYSIOLOGY_PLAN.md`

Why this batch now:

- Electabuzz stresses continuous-looking electrical physiology, lightning feeding and modern energy-storage research without creating a permanent electrical aura, automatic paralysis, power-grid assumptions or ancient batteries.
- Magmar stresses extreme temperature wording, body flames, lava recovery and crater-birth legend without continuous heat propagation, universal ignition/lava immunity or a generic supernatural-origin rule.
- Omanyte/Omastar stress deep-time fossil evidence, extinction/restoration wording and species-local predation/restraint without treating modern fossil revival as ancient technology or assuming ordinary living populations.
- Aerodactyl stresses amber-DNA restoration, severe restoration-casualty evidence, ancient aerial ecology and grounded locomotion weakness without genetic resurrection infrastructure, permanent berserk behavior or unrestricted aerial traversal.
- Snorlax stresses enormous food demand, unusual digestion, sleep/appetite state and village-granary disaster evidence without continuous calorie/economy simulation, universal poison immunity or automatic settlement destruction.
- D-034 remains binding for the fossil species, but direct encounterability stays separate from commonness, stable breeding populations and baseline-era natural abundance.
- fossil encounter interpretation should first seek the narrowest dossier-local exceptional locality/event/survival explanation; no time travel or resurrection institution is selected by this batch.
- all six should remain representable through discrete authored encounter states, cached eligibility/state and event-triggered consequences; no continuous per-frame species simulation is required.

Selection validation target:

```text
selected_species_count == 6
selected_species_all_not_started_on_main == true
coverage_manifest_changed == false
blocking_human_design_gate_count == 0
next_step == batch18_claim_level_source_review
```

If all six later pass source review, full-schema authoring and completion audit, the expected manifest state becomes:

```text
dossier_complete_count == 135
pilot_reviewed_count == 2
not_started_count == 14
```

No manifest promotion is authorized by the selection pass itself.

### Remaining P4 not-started roster

The authoritative manifest remains unchanged during Batch 18 selection, so all 20 rows below are still `not_started` until a passing completion audit promotes the selected six:

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

Create the **P4 Batch 18 claim-level source review** for #125 Electabuzz, #126 Magmar, #138 Omanyte, #139 Omastar, #142 Aerodactyl and #143 Snorlax.

The source review must:

1. inventory current and historically relevant version-tagged official evidence for electrical discharge/feeding, volcano/heat/lava claims, fossil/deep-time provenance, restoration, extinction wording, restraint/predation, flight/ground locomotion, appetite, sleep, digestion and settlement-resource consequences;
2. classify observation, numerical claim, researcher interpretation, legend/hearsay, restoration-scoped behavior, historical/version-scoped wording, inference and project extrapolation separately;
3. reproduce all six `p4-six-axis-v1` profiles from pinned `SRC-DATA-001` with zero hidden manual exceptions;
4. preserve modern research, fossil/DNA restoration, Hisui settlement evidence and later-generation families/forms as provenance context rather than ancient institutions;
5. resolve the narrowest chronology-safe D-034 encounterability interpretation for Omanyte, Omastar and Aerodactyl without promoting commonness or creating a generic resurrection/time-travel system;
6. keep Electabuzz/Magmar/Snorlax extreme quantitative claims as species-local evidence and authored pressure rather than continuous electricity/heat/metabolism/economy formulas;
7. run P2/P3/P4 contradiction, player-agency, one-entity/action-economy, chronology, D-034 separation and continuous-simulation requirement checks;
8. leave the coverage manifest unchanged until all six full-schema dossiers and the Batch 18 completion audit pass.

Do not begin P5 until the mandatory `151/151` P4 exit audit passes.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

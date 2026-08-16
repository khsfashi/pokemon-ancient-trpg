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

Current authoritative manifest state after Batch 17, unchanged by the Batch 18 selection/source-review passes:

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

### P4 Batch 18 — SOURCE REVIEW COMPLETE

Roster:

- #125 Electabuzz
- #126 Magmar
- #138 Omanyte / #139 Omastar
- #142 Aerodactyl
- #143 Snorlax

Primary outputs:

- `docs/P4_BATCH_18_ANCIENT_CHRONOLOGY_ELEMENTAL_PHYSIOLOGY_PLAN.md`
- `docs/P4_BATCH_18_SOURCE_REVIEW.md`

Source-review conclusions:

- Electabuzz electrical discharge, static signs and storm/lightning feeding remain species-local physiology/ecology; modern power plants, blackout statistics, lightning-rod use and lightning-storage research do not establish proto-Kanto grids, batteries or energy markets.
- Magmar's extreme temperature, body flames, vegetation ignition and lava recovery remain authored species-local hazard/recovery evidence; they do not require continuous heat propagation, real-world thermodynamics, universal ignition or total lava immunity. Current volcanic-birth wording is treated as legend despite stronger historical direct wording.
- Omanyte/Omastar remain strongly ancient/extinct/restoration-scoped in later evidence. Modern fossil resurrection stays outside the ancient technology baseline, and Omastar restraint preserves ordinary player agency/action economy.
- D-034 for Omanyte/Omastar is satisfied by one project-authored, exceptionally isolated marine relict locality with a tiny self-sustaining lineage; this does not imply ordinary coastal abundance, human restoration or time travel.
- Aerodactyl restoration casualties establish severe threat without making every individual permanently berserk. D-034 is satisfied by one exceptionally isolated aerial relict locality/lineage, not ancient genetic technology or an unsupported single prehistoric individual's extreme lifespan.
- Aerodactyl can use discrete authored `airborne` / `grounded` encounter states; aerial competence and weak/slow ground locomotion do not create unrestricted traversal, guaranteed initiative/pursuit or general flight physics.
- Snorlax's nearly 900-pound daily food claim, digestive resilience and Hisui granary-disaster evidence support severe authored local resource pressure without a continuous calorie/economy ledger, universal poison immunity or automatic settlement targeting.
- all six remain representable through cached/coarse state and event-triggered consequences; no continuous per-frame species simulation is required.

Deterministic `p4-six-axis-v1` profiles reproduce with zero manual exceptions:

```text
Electabuzz 3/4/2/4/4/5
Magmar     3/4/2/5/4/4
Omanyte    1/2/5/4/2/1
Omastar    3/3/6/5/3/2
Aerodactyl 4/5/3/3/3/6
Snorlax    6/5/3/3/5/1
```

Source-review validation:

```text
reviewed_species_count == 6
current_official_species_pages_verified == 6
pinned_species_records_reviewed == 6
rating_profile_reproducible_count == 6
manual_rating_exception_count == 0
p2_contradiction_count == 0
p3_contradiction_count == 0
p4_contract_contradiction_count == 0
blocking_human_design_gate_count == 0
continuous_simulation_requirement_count == 0
ready_for_full_schema_authoring == true
```

If all six now pass frozen-schema dossier authoring and the completion audit, the expected manifest state becomes:

```text
dossier_complete_count == 135
pilot_reviewed_count == 2
not_started_count == 14
```

No manifest promotion is authorized by the source-review pass itself.

### Remaining P4 not-started roster

The authoritative manifest remains unchanged during Batch 18 source review, so all 20 rows below remain `not_started` until a passing Batch 18 completion audit promotes the selected six:

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

Author the six **P4 Batch 18 frozen full-schema dossiers** for #125 Electabuzz, #126 Magmar, #138 Omanyte, #139 Omastar, #142 Aerodactyl and #143 Snorlax.

The authoring/completion pass must:

1. consume the claim-level provenance and reviewed deterministic profiles from `docs/P4_BATCH_18_SOURCE_REVIEW.md` without inventing stronger canon claims;
2. preserve modern power/research, fossil/DNA restoration, Hisui settlement evidence and later-generation families/forms as provenance context rather than proto-Kanto institutions;
3. encode Omanyte/Omastar direct encounterability as one exceptionally isolated marine relict locality/lineage and Aerodactyl as one exceptionally isolated aerial relict locality/lineage, keeping all exact geography/content details as project-authored rather than canon;
4. preserve Electabuzz discharge/storm feeding, Magmar heat/lava behavior, Omastar restraint, Aerodactyl airborne/grounded locomotion and Snorlax appetite/sleep through discrete authored states/hooks rather than continuous simulation;
5. preserve player agency, one Pokémon = one ordinary turn/health state/initiative presence/visible companion slot, D-034 encounterability-vs-abundance separation and no hidden player-relative scaling;
6. create the Batch 18 dossier index/regression summary and completion audit;
7. run frozen-schema completeness, deterministic-stat reproduction, provenance, P2/P3/P4 contradiction, chronology, D-034, player-agency and runtime-representation checks;
8. promote exactly #125, #126, #138, #139, #142 and #143 from `not_started` to `complete` only if every completion-audit check passes.

Do not begin P5 until the mandatory `151/151` P4 exit audit passes.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

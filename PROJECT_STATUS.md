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

Current authoritative manifest state remains unchanged during Batch 21 source review:

```text
dossier_complete_count == 146
pilot_reviewed_count == 2
not_started_count == 3
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two `pilot_reviewed` species remain #131 Lapras and #151 Mew. The final `not_started` rows remain #098 Krabby, #099 Kingler and #108 Lickitung until the Batch 21 frozen-schema dossiers and completion audit pass.

### P4 foundation

- D-031: fixed species baselines plus explicit individual variation; no player-level enemy scaling.
- `p4-six-axis-v1`: raw `<40 => 1`, `40..59 => 2`, `60..79 => 3`, `80..99 => 4`, `100..119 => 5`, `>=120 => 6`.
- D-032: modern level/trade/move evolution metadata is source context, not ancient progression law.
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

Batch 20 completed at `146 complete / 2 pilot_reviewed / 3 not_started` with all five deterministic profiles reproducible, zero manual rating exceptions, zero blocking Human Design Gates and no P2/P3/P4 contradiction. Its agency, one-entity/action-economy, D-034, non-player-scaling and event-scoped runtime boundaries remain binding.

### P4 Batch 21 — SOURCE REVIEW COMPLETE

Roster:

- #098 Krabby
- #099 Kingler
- #108 Lickitung

Primary source-review outputs:

- `docs/P4_BATCH_21_CLAW_TONGUE_CONTACT_PLAN.md`
- `docs/P4_BATCH_21_SOURCE_REVIEW.md`

Source-review conclusion:

```text
reviewed_species_count == 3
current_official_species_pages_verified == 3
pinned_species_records_reviewed == 3
rating_profile_reproducible_count == 3
manual_rating_exception_count == 0
p2_contradiction_count == 0
p3_contradiction_count == 0
p4_contract_contradiction_count == 0
blocking_human_design_gate_count == 0
continuous_simulation_requirement_count == 0
coverage_manifest_changed == false
ready_for_full_schema_authoring == true
```

Deterministic profiles:

```text
Krabby     30/105/90/25/25/50 -> 1/5/4/1/1/2
Kingler    55/130/115/50/50/75 -> 2/6/5/2/2/3
Lickitung  90/55/75/60/75/30 -> 4/2/3/3/3/1
```

Binding Batch 21 conclusions:

- Krabby's pincers are natural weapons and lateral-balance anatomy; pincer loss/regrowth can change discrete authored encounter options but does not create detachable loot, instant regeneration, per-frame limb health or extra pincer actions.
- Krabby beach-burrow/territorial evidence remains contextual ecology, not permanent aggression; its bubble display does not force Fear or grant a free defensive action.
- Kingler's `10,000-horsepower` pincer wording remains severe source-scale capability evidence, not literal damage/physics math, generic mining, armor deletion or arbitrary structural destruction.
- Kingler's oversized claw keeps explicit unwieldiness, aim, balance and fatigue counterweights without a continuous stamina/torque/load simulator; one large claw never becomes an extra entity/action/health pool.
- Lickitung's long tongue can manipulate and obtain texture/taste information through actual contact, but does not become generic hands, unrestricted tools/grappling, omniscient identification or remote sensing.
- Lickitung sticky saliva and tingling/rash/itch/paralysis wording remain contact/exposure-scoped hazards with eligibility, counterplay and player input; no automatic status on proximity or every lick.
- Hisui-era processed-saliva adhesive evidence remains later-era provenance. It does not silently create a proto-Kanto recipe, industry, market or routine live-harvest resource loop.
- Hyper Cutter, Shell Armor, Sheer Force, Own Tempo, Oblivious and Cloud Nine remain modern battle-system metadata rather than literal ancient formulas.
- Lickilicky/Rollout evolution and Gigantamax Kingler remain post-Generation-I context; D-032 prevents silent baseline import.
- all three preserve one Pokémon = one ordinary turn / health state / initiative presence / visible companion slot.
- ordinary species remain fixed-baseline and non-player-scaled; rare boss-grade exceptional individuals require explicit persistent history/traits.
- later runtime guidance remains cached/coarse authored state plus event-triggered consequences rather than continuous appendage/contact/contamination simulation.

## Remaining P4 roster work

The final three `not_started` species are now source-reviewed and ready for frozen-schema authoring:

```text
#098 Krabby
#099 Kingler
#108 Lickitung
```

After successful Batch 21 dossier completion, expected manifest state is:

```text
dossier_complete_count == 149
pilot_reviewed_count == 2
not_started_count == 0
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

That state still blocks P5. #131 Lapras and #151 Mew must then receive the final schema/completion audit and promotion necessary to satisfy the strict `151 complete / 0 pilot_reviewed` P4 exit invariant.

## Exact next work

Author the **P4 Batch 21 frozen-schema dossiers** for exactly:

- #098 Krabby
- #099 Kingler
- #108 Lickitung

Create:

- `docs/P4_BATCH_21_DOSSIER_098_KRABBY.md`
- `docs/P4_BATCH_21_DOSSIER_099_KINGLER.md`
- `docs/P4_BATCH_21_DOSSIER_108_LICKITUNG.md`
- `docs/P4_BATCH_21_FULL_SCHEMA_DOSSIERS.md`
- `docs/P4_BATCH_21_COMPLETION_AUDIT.md`

The next pass must:

1. populate all 20 frozen-schema top-level sections for each dossier;
2. reproduce `1/5/4/1/1/2`, `2/6/5/2/2/3`, and `4/2/3/3/3/1` with zero manual exceptions;
3. preserve pincer loss/regrowth as discrete authored state without limb simulation or renewable weapon loot;
4. preserve Kingler's extreme pincer force while keeping target/position/eligibility, aim/balance/fatigue counterweights and no generic material deletion;
5. preserve Lickitung contact sensing as actual-contact, contact-accessible information only;
6. preserve sticky saliva and irritation/paralysis evidence as exposure-scoped, warning/counterplay-safe consequences rather than automatic status;
7. keep Hisui adhesive processing as later-era provenance, not a baseline industry or live-harvest economy;
8. preserve one Pokémon = one ordinary turn / health state / initiative presence / visible companion slot;
9. preserve ordinary-species progression and persistent-history exceptional individuals without player-level scaling;
10. prefer cached/coarse authored state and event-triggered consequences over continuous appendage/contact simulation;
11. promote exactly #098/#099/#108 only after the Batch 21 completion audit passes atomically;
12. do not begin P5 afterward: first audit/promote #131 Lapras and #151 Mew and run the mandatory final `151/151` P4 exit audit.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

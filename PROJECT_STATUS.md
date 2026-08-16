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
- `p4-six-axis-v1` is pinned. Hazard severity is not capped by species-axis ratings.
- Evolution is distinct from ordinary maturation; no kill-XP, visible character levels or generic evolution command.
- Mandatory Generation-I roster is National Pokédex #001-#151.
- D-034 requires all 151 to be directly encounterable somewhere in total content while baseline-era natural presence, commonness, companionship and one-run availability remain separate questions.
- `p5-event-contract-v1` now pins the P5 deterministic foundation: discrete trigger evaluation, stable event IDs, keyed deterministic RNG streams, pending-event reload safety and typed upstream state ownership.

## Completed phases

```text
P0 Governance                         COMPLETE
P1 Reference/API/data/resource/IP     COMPLETE
P2 World bible and setting contract   COMPLETE
P3 Core TRPG rules/character model    COMPLETE
P4 Pokémon adaptation + Gen-I 151     COMPLETE
```

## P4 final state

P4 issue: **#5**  
Strict exit audit: `docs/P4_EXIT_AUDIT.md`  
Coverage audit: `docs/P4_SPECIES_COVERAGE_MANIFEST_AUDIT.md`  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`

Final invariant:

```text
mandatory_species_ids == {1..151}
dossier_complete_count == 151
source_review_complete_count == 151
pilot_reviewed_count == 0
not_started_count == 0
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

Result: **PASS**.

Binding final P4 conclusions that P5 must preserve:

- Lapras' D-034 direct encounter is a living water-route interaction using communication, refusal and voluntary cooperation; success never implies ownership.
- Mew remains mythical/singular; a rare authored chain may culminate in an actual living Mew voluntarily remaining visible for a meaningful noncoercive interaction.
- Mew's direct encounter does not create a routine spawn, common ancient population, capture path, companionship path, combat-boss obligation or unlimited Psychic capability.
- D-034 authoring coverage is `151/151`; P9 still owns implementation-level final coverage proof.
- no portable containment, player-level enemy scaling, generic Pokémon loot/material economy, continuous species simulation or per-frame all-species rule scanning was introduced.

## Current phase

**P5 — Narrative event engine and seeded run model (#6) is active.**

P5 goal: specify the deterministic data-driven content engine that turns state, conditions, choices, checks and consequences into a replayable text-RPG run.

Binding P5 issue scope:

- event definitions and weighted eligibility;
- conditions and hidden/visible choices;
- P3 dice/check integration;
- outcomes, flags, chains and cooldowns;
- random insight/discovery mechanics;
- seeded RNG plus replay/debug trace;
- event-history and anti-repeat policies;
- content validation rules.

P5 constraints:

```text
same_saved_run_state_plus_same_action_is_reproducible_when_randomness_is_authoritative == true
event_content_is_data_driven == true
individual_story_events_hardcoded_in_engine == false
per_render_or_per_frame_event_scanning == false
evaluate_on_discrete_game_state_transitions == true
```

## P5 foundation — COMPLETE on current scoped PR

Foundation contract: `docs/P5_DETERMINISTIC_EVENT_FOUNDATION_CONTRACT.md`  
Semantic fixtures: `docs/P5_FOUNDATION_SEMANTIC_FIXTURES.yaml`  
Foundation audit: `docs/P5_FOUNDATION_CONTRACT_AUDIT.md`

Frozen foundation results:

```text
contract_version == p5-event-contract-v1
semantic_fixture_count == 6
run_seed_bytes == 16
eligibility_rng_draw_count == 0
unbiased_bounded_draw_uses_rejection_sampling == true
one_global_mutable_rng_cursor == false
pending_roll_can_reroll_after_reload == false
direct_upstream_raw_state_write_allowed == false
unbounded_history_scan_required == false
per_render_or_per_frame_event_scanning == false
p3_contradiction_count == 0
p4_contradiction_count == 0
blocking_human_design_gate_count == 0
```

Foundation decisions:

- authoritative randomness uses stable keyed `SHA-256` counter-derived streams rather than one opaque mutable global cursor;
- event selection uses RNG-free eligibility, stable `event_id` ordering, integer weight points and rejection-sampled bounded draws;
- already-selected/rolled events persist as `PendingEventInstance`, preventing reload/reopen from rerolling or reselecting;
- P5 content may directly write only P5-owned narrative/event state; P2/P3/P4 mutations go through typed registered domain commands;
- event eligibility is trigger-indexed and evaluated only on explicit committed transitions/chain continuation;
- event counts + last-transition indexes are O(1), while recent anti-repeat history is a bounded ring (`<=64`);
- debug traces and player-safe traces are separate so hidden conditions/weights/state are not leaked through presentation;
- D-034 chronology anomalies are exceptional stateful authored events, never routine ecology or a reusable time-travel system.

The six fixed fixtures cover:

1. ordinary peaceful weighted interaction;
2. hazardous P3 check + legal emergency reaction;
3. rare D-034 Mew living direct encounter;
4. Porygon chronology anomaly without origin rewrite;
5. companion-aware branch with explicit `0/3` parity;
6. structurally invalid approach with zero RNG consumption.

## Exact next work

Continue **P5 Batch 02 — normalized schema + domain adapter registry** before authoring large production event content:

1. define the exact normalized production event schema with field types, required/optional rules and canonical digest input;
2. bind the semantic `reads[]` and pure predicate registry to concrete P2/P3/P4 concepts without exposing eventual P7 storage layout;
3. bind typed domain command IDs for P3 checks/survival/inventory/progression/Gifts/emergency items plus P4 companion/species/encounter transitions;
4. define command argument validation and atomic prevalidation behavior;
5. turn `P5V001..P5V018` into machine-checkable schema/semantic validation cases with fixed passing/failing fixtures;
6. specify pending-event save/version/migration fields strongly enough for P7 implementation and mid-event reload tests;
7. add chain/cooldown/anti-repeat boundary fixtures, including bounded-cycle acceptance/rejection;
8. add discovery/insight pool fixtures proving evidence-bounded knowledge and independent RNG-channel behavior;
9. audit the registry against every P3/P4 downstream obligation before freezing it;
10. keep P5 active until a later strict P5 exit audit proves the complete schema/adapter/validation surface implementation-ready.

Do **not** begin P6/P7 while P5 event semantics and adapter validation remain incomplete.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

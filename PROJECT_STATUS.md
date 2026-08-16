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
- `p5-event-contract-v1` pins the P5 deterministic foundation: discrete trigger evaluation, stable event IDs, keyed deterministic RNG streams, pending-event reload safety and typed upstream state ownership.
- P5 Batch 02 freezes the normalized production JSON Schema, pending-event semantic schema, semantic read/predicate registry, typed P3/P4 adapter registry and machine-readable `P5V001..P5V018` validation cases without selecting a P7 storage/runtime stack.

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

## P5 foundation — COMPLETE

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

## P5 Batch 02 — COMPLETE on current scoped PR

Normalized production schema: `docs/P5_NORMALIZED_EVENT_SCHEMA.json`  
Pending-event semantic schema: `docs/P5_PENDING_EVENT_STATE_SCHEMA.json`  
Semantic/domain adapter registry: `docs/P5_DOMAIN_ADAPTER_REGISTRY.yaml`  
Validation fixtures: `docs/P5_BATCH_02_VALIDATION_FIXTURES.yaml`  
Batch audit: `docs/P5_BATCH_02_AUDIT.md`

Frozen Batch 02 results:

```text
json_schema_draft == 2020-12
normalized_event_required_shape_frozen == true
canonical_digest_input_frozen == true
runtime_storage_layout_frozen_early == false
semantic_read_registry_uses_storage_paths == false
pure_predicates_consume_rng == false
unknown_domain_command_rejected == true
all_effects_prevalidated_before_first_write == true
P5V001_through_P5V018_machine_case_count == 18
new_duplicate_validation_id_count == 0
pending_schema_version == p5-pending-v1
silent_mid_event_reroll_after_reload == false
silent_mid_event_reselection_after_reload == false
unbounded_chain_cycle_allowed == false
cooldown_uses_wall_clock == false
insight_eligibility_consumes_rng == false
independent_rng_channels_preserved == true
generic_evolution_command_exists == false
generic_capture_or_containment_command_exists == false
generic_loot_command_exists == false
p4_all_151_direct_encounter_authoring_contract_preserved == true
blocking_human_design_gate_count == 0
```

P3/P4 adapter coverage now includes:

- P3 check binding, survival/injury, notable inventory + three pooled resources, progression, rare Gifts and D-030 emergency-item consequence mitigation;
- P4 species identity/profile/capability/hazard reads, direct/exceptional encounter recording and voluntary physical companionship transitions;
- explicit rejection of raw upstream setters, generic capture/containment, generic evolution, generic loot and generic stacking companion modifiers.

Boundary fixtures now pin bounded/unbounded chain behavior, transition-sequence cooldowns, bounded recent history, evidence-bounded discoveries, keyed RNG-channel independence and mid-reaction reload behavior.

P5 is **not** closed by this batch. The issue exit condition still requires a strict whole-surface audit before P6 can begin.

## Exact next work

Continue **P5 Batch 03 — strict exit-readiness audit**:

1. parse/structurally validate both Batch 02 JSON Schemas and all YAML fixture/registry artifacts;
2. cross-audit every schema semantic ref, predicate and command against the closed registry, including duplicate/unknown-key detection;
3. instantiate at least one normalized representative event through schema + registry checks for direct, check/reaction and D-034 exceptional paths without creating production lore;
4. prove every `P5V001..P5V018` negative fixture fails at the intended validator layer and every positive control passes;
5. cross-check pending-event mid-choice/mid-roll/mid-reaction resume cases against the frozen phase requirements and migration rules;
6. re-audit chain/cooldown/history complexity and keyed RNG independence for implementation readiness;
7. run a strict P3/P4 contradiction audit against the full frozen P5 surface, including `0/3` viability and D-034 `151/151` direct-encounter preservation;
8. produce `docs/P5_EXIT_AUDIT.md`; close issue #6 only if all P5 exit conditions pass with no unresolved schema/adapter gap;
9. if the strict audit passes, update `PROJECT_STATUS.md` to unblock P6 (#12); otherwise keep P5 active and list only the concrete blockers.

Do **not** begin P6/P7 until the strict P5 exit audit passes.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

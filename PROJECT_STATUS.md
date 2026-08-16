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
- The world-content direction is **Pokémon-shaped society, not Pokémon-only events**: every major world structure must be materially shaped by Pokémon existence, while individual events may have genuinely human or environmental immediate causes.
- P9 full content must include substantive ordinary human/social, survival, exploration/mystery, relationship, faction, mixed-world and Pokémon content; several recurring major factions are required, with a current planning target of roughly 4–6 faction lanes.
- Major factions must arise from Pokémon ecology/capability/sacredness/knowledge/exploitation/protection/coexistence/anomaly or another approved Pokémon-world causal bridge rather than generic medieval organizations with Pokémon decoration.
- `p5-event-contract-v1` pins the P5 deterministic foundation: discrete trigger evaluation, stable event IDs, keyed deterministic RNG streams, pending-event reload safety and typed upstream state ownership.

World/faction contract: `docs/WORLD_CONTENT_AND_FACTION_CONTRACT.md`

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

P5 goal: specify the deterministic data-driven **world-event engine** that turns state, conditions, choices, checks and consequences into a replayable text-RPG run.

Binding P5 issue scope now includes:

- event definitions and weighted eligibility;
- conditions and hidden/visible choices;
- P3 dice/check integration;
- outcomes, flags, chains and cooldowns;
- random insight/discovery mechanics;
- seeded RNG plus replay/debug trace;
- event-history and anti-repeat policies;
- content validation rules;
- ordinary human/social and survival/environmental events;
- persistent relationship/faction-linked chains;
- Pokémon ecological/direct-interaction events;
- mixed events where human motives and Pokémon ecology affect one another;
- one shared event engine rather than separate faction/Pokémon/ordinary-event implementations.

P5 constraints:

```text
same_saved_run_state_plus_same_action_is_reproducible_when_randomness_is_authoritative == true
event_content_is_data_driven == true
individual_story_events_hardcoded_in_engine == false
separate_faction_event_engine_required == false
separate_pokemon_event_engine_required == false
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

The six fixed foundation fixtures cover:

1. ordinary peaceful weighted interaction;
2. hazardous P3 check + legal emergency reaction;
3. rare D-034 Mew living direct encounter;
4. Porygon chronology anomaly without origin rewrite;
5. companion-aware branch with explicit `0/3` parity;
6. structurally invalid approach with zero RNG consumption.

## Live P5 work

Draft PR **#93 — P5 Batch 02: freeze normalized event schema and adapter registry** owns the current first-incomplete P5 implementation-neutral contract work.

This world/faction roadmap mutation does **not** start P8/P9 early and must not bypass #93 or the P5 strict exit audit.

## Exact next work

Finish/validate **PR #93**, then run **P5 Batch 03 — strict exit-readiness audit**.

In addition to the existing Batch 03 structural/determinism/P3/P4 requirements, the strict exit audit must now prove the shared event surface can represent without bespoke engine paths:

1. a human/social event whose immediate cause is not Pokémon;
2. a survival/environmental event;
3. a multi-step relationship or faction-linked chain;
4. a Pokémon ecological/direct-interaction event;
5. a mixed human/Pokémon event;
6. typed owner-domain mutation for the relationship/faction/world state needed by those fixtures rather than raw upstream writes.

If the normalized registry lacks the P2/world-domain command coverage required for these representative events, that is a **real P5 blocker** and must be fixed before #6 closes.

Do **not** begin P6/P7 until the strict P5 exit audit passes.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

P8 must prove a mixed world loop: settlement/social pressure + travel/survival + persistent faction/relationship thread + Pokémon ecology/direct interaction, while preserving a complete `0/3` path.

P9 is **Full World Content + Factions + complete Gen-I realization**. Its exit requires both:

```text
world_content_breadth_audit == PASS
recurring_major_factions_realized == true
major_faction_planning_target_range == 4..6
major_factions_are_pokemon_shaped == true
all_151_living_direct_interaction_paths == true
indirect_presence_alone_satisfies_D034 == false
```

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

### Final pilot promotions

The final two `pilot_reviewed` species were re-audited against the frozen schema and all contracts accumulated through Batch 21:

- #131 Lapras / 라프라스 → `docs/P4_FINAL_DOSSIER_131_LAPRAS.md`
- #151 Mew / 뮤 → `docs/P4_FINAL_DOSSIER_151_MEW.md`
- promotion gate → `docs/P4_FINAL_PILOT_COMPLETION_AUDIT.md`

Pinned profiles reproduce without manual exceptions:

```text
Lapras  130/85/80/85/95/60      -> 6/4/4/4/4/3
Mew     100/100/100/100/100/100 -> 5/5/5/5/5/5
manual_rating_exception_count == 0
```

Binding final conclusions:

- Lapras preserves high capability without presumed aggression. Its D-034 direct encounter is a living water-route interaction using communication, refusal and voluntary cooperation; a successful crossing never implies ownership.
- Mew preserves mythical/singular treatment. The original pilot's indirect-evidence fixture remains useful for knowledge progression, but D-034 now requires a rare authored chain that can culminate in an actual living Mew voluntarily remaining visible for a meaningful noncoercive player interaction choice.
- Mew's direct encounter does not create a routine spawn, common ancient population, capture path, companionship path, combat-boss obligation or unlimited Psychic capability.
- D-034 authoring coverage is now `151/151`; P9 still owns the later implementation-level coverage proof.
- no portable containment, player-level enemy scaling, generic Pokémon loot/material economy, continuous species simulation or per-frame all-species rule scanning was introduced.

## Current phase

**P5 — Narrative event engine and seeded run model (#6) is now unblocked and is the next active phase.**

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

## Exact next work

Begin **P5 foundation / deterministic event contract** before authoring large event content:

1. inventory the P2/P3/P4 state and hook surfaces P5 must consume without duplicating their rules;
2. define stable event identity, versioning and content ownership boundaries;
3. define event eligibility inputs and discrete evaluation triggers;
4. define visible/hidden conditions and choice availability without leaking hidden state;
5. define deterministic weighted selection and seeded RNG stream ownership;
6. define the execution order for choice → check → outcome → flags/state → chain/cooldown/history;
7. define replay/debug trace fields sufficient to reproduce authoritative randomness and diagnose content errors;
8. define anti-repeat/history semantics without continuous polling;
9. define validation failures for dangling refs, impossible branches, invalid P3 checks, undeclared state writes and non-deterministic content;
10. add fixed semantic fixtures that exercise ordinary peaceful interaction, hazardous encounter, D-034 rare encounter, chronology anomaly, companion-aware branch and failed/invalid approach;
11. run a contradiction/performance audit before freezing the P5 schema.

Do **not** begin presentation/P6 implementation while P5 event semantics are still unstable.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

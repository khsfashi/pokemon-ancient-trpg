# P8 Batch 02 Audit — Authoritative Gameplay Runtime Foundation

Status: **PASS — candidate for review/merge**  
Date: **2026-08-17**  
Issue: **#8**  
PR: **#107**  
Validated functional head before this audit-only commit: `4d353ee0d0730f6e786cf22087eb80d799ac7fc5`

## 1. Scope audited

Batch 02 remains authority-first and headless. It adds the first production gameplay authority on top of the P7 technical skeleton without beginning P8 story breadth or presentation work.

The batch establishes:

- normalized pure-TypeScript P8 authoritative run/domain state;
- deterministic P3 formative-choice → Origin / Learned Practice resolution;
- legal P3 starting specialization validation;
- the P8-required deterministic P5 event-runtime subset;
- a closed typed P2/P3/P4 command boundary with aggregate atomic prevalidation;
- deterministic state canonicalization/digest support for pinned pending events;
- headless direct-event and checked-event proofs;
- a dedicated P8 authority CI gate.

## 2. Human Design Gate audit

No Human Design Gate was crossed.

The implementation consumes already-frozen decisions:

- P3 human attributes remain `Strength / Endurance / Agility / Sense / Intellect / Will / Presence`;
- P3 creation remains three formative prompts followed by four explicit attribute increases and one distinct personal trained competence;
- P3 checks remain `2d6 + Attribute + Competence + Context` with frozen margin and doubles semantics;
- P5 remains the single event authority and RNG owner;
- P4 Pokémon six-axis ratings remain separate from human P3 attributes;
- P8 final locality, faction, exact species set, and story breadth remain deferred to Batch 03 authoring.

## 3. Character-authority audit

`src/domain/p8Authority.ts` proves the P3 creation envelope:

```text
human attributes     = strength/endurance/agility/sense/intellect/will/presence
ordinary baseline    = 1 each
explicit increases   = exactly 4 typed selections
starting cap         = 3
starting total       = 11
Practice competence  = +1
personal competence  = +1 and distinct from Practice competence
```

Formative resolution is deterministic from stable answer IDs/tags. Ties resolve by:

1. matching-tag score;
2. most recent matching formative answer;
3. authored order;
4. stable ASCII identifier order.

The resolver consumes no RNG.

## 4. Check-authority audit

`src/runtime/p8Checks.ts` consumes the existing P5 RNG primitive instead of introducing a second generator.

The implementation preserves:

```text
formula        = 2d6 + Attribute + Competence + Context
d6 channel     = check.d6
Context bound  = -3..+3
margin >= +4   = strong_success / exceptional
margin 0..+3   = success / full
margin -1..-3  = compromise / costly_partial
margin <= -4   = failure / setback
natural 6,6    = fortune overlay
natural 1,1    = trouble overlay
```

Both accepted and rejected bounded RNG draw records are retained for pending-event provenance.

## 5. Event-runtime audit

`src/events/p8EventRuntime.ts` implements the bounded subset required by the P8 Batch 02 plan:

- trigger-indexed candidate lookup via a reusable `Map` built once per catalog;
- pure eligibility predicates with no RNG dependency;
- repeat count / once-per-run / cooldown / recent-history policy;
- integer-only effective weights capped by unsigned-63 range;
- `0` eligible → no selection RNG;
- `1` eligible → no selection RNG;
- `2+` eligible → existing P5 `event.select` bounded RNG;
- persisted P5 pending-event identity, choice view, selection/check RNG records and precommit digest;
- direct-choice resolution;
- P3 static checked-choice resolution;
- ordered typed domain-command plan;
- P5 narrative flag/counter/chain effects;
- event count / last transition / bounded recent-history indexes;
- ordered post-commit trigger output.

No Preact import exists in the authority modules, and no whole event-catalog scan is performed per trigger evaluation.

## 6. Typed adapter and atomicity audit

The first-slice authoring surface is intentionally closed to the P2/P3/P4 operations needed by the proving path:

```text
p2.world.commit_relationship_state
p3.inventory.adjust_resource_pool
p4.companion.commit_voluntary_join
p4.companion.commit_separation
p4.encounter.record_direct_interaction
```

No raw state setter is exposed.

Every domain command is prevalidated against the same precommit state. The complete plan is then simulated and aggregate invariants are checked before the returned authoritative state can replace the caller's state. The unit fixture proves that two individually legal resource deductions that become illegal in aggregate fail without mutating the caller state or event indexes.

## 7. Headless proof

`tests/p8-authority-runtime.test.ts` proves the required production-path authority without UI:

1. deterministically create the character;
2. resolve one direct event at transition `0 → 1`;
3. resolve one P3 checked event at transition `1 → 2`;
4. preserve check RNG/check-result provenance in the pending snapshot;
5. serialize authoritative state to JSON-safe data;
6. exercise no Preact dependency.

Additional fixtures prove deterministic two-candidate selection and zero RNG use during eligibility / single-candidate selection.

## 8. CI evidence

Dedicated workflow:

```text
P8 Authority Runtime Validation
run 32003901207
head 4d353ee0d0730f6e786cf22087eb80d799ac7fc5
result PASS
```

Successful steps:

```text
python tools/validate_p8_vertical_slice.py  PASS
npm ci                                      PASS
npm run typecheck                           PASS
npm run test                                PASS
npm run build                               PASS
```

`npm run build` re-runs strict type checking and the existing P7 production build/static deployment validation path, so the new authority code does not break the established P7 application build.

## 9. Acceptance mapping

| Batch 02 requirement | Evidence | Result |
|---|---|---|
| Pure-TypeScript authoritative run/domain types | `src/domain/p8Authority.ts` | PASS |
| Deterministic P3 formative resolver | `P8CharacterCreationCatalog` + tests | PASS |
| P3 starting specialization envelope | resolver + tests | PASS |
| Trigger-indexed P5 candidate lookup | `P8EventCatalog` | PASS |
| Eligibility consumes no RNG | pure predicate path + tests | PASS |
| Deterministic weighted P5 selection | `selectP8Event` + tests | PASS |
| Persisted pending-event snapshot | `prepareP8PendingEvent` | PASS |
| Direct and static checked resolution | runtime + headless fixture | PASS |
| Typed P2/P3/P4 adapter subset | closed `P8DomainCommand` union | PASS |
| Failed command plan is atomic | aggregate-failure fixture | PASS |
| Exact transition sequencing | headless `0 → 1 → 2` fixture | PASS |
| UI independence | no Preact dependency in authority path | PASS |
| Strict TypeScript / unit / production build | Actions run 32003901207 | PASS |

## 10. Exact handoff

After PR #107 is reviewed and merged, the first incomplete work is:

**P8 Batch 03 — coherent authored slice content + deterministic replay proof.**

Batch 03 should author the bounded one-settlement / two-context proving content on top of this authority surface, including the curated Origin/Practice/species/event set and a deterministic replay fixture. Do not begin Batch 04 presentation-heavy phone UI before the Batch 03 authored run is coherent and replayable.

# P8 Batch 02 Audit — Authoritative Gameplay Runtime Foundation

Status: **PASS — candidate for review/merge**  
Date: **2026-08-17**  
Issue: **#8**  
PR: **#107**  
Validated functional head before workflow/audit-only commits: `f751238d4ed5d8147adfecec5300e5ad4715b976`

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
- frozen P5 RNG/check semantic-vector regression tests;
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

The implementation preserves the frozen P3 contract exactly:

```text
formula        = 2d6 + Attribute + Competence + Context
d6 channel     = check.d6
Context bound  = -3..+3
Margin >= +3   = strong_success / exceptional
Margin 0..+2   = success / full
Margin -2..-1  = compromise / costly_partial
Margin <= -3   = failure / setback
natural 6,6    = fortune overlay
natural 1,1    = trouble overlay
```

`7` is represented as **Favorable risk**, not Routine; Routine actions do not roll under P3.

Event checks use the normative P5 composite RNG subject:

```text
<event_id>/<choice_id>/<check_id>
```

The `check.d6` stream starts at draw index `0` independently of any preceding `event.select` stream. Both accepted and rejected bounded RNG draw records are retained for pending-event provenance.

The unit suite pins the normative hazardous Beedrill fixture directly:

```text
subject = fixture.risk.beedrill_corridor/observe_and_withdraw/read_escape_gap
draw 0 raw_u64 = 4463312059452329917 -> d6 2
draw 1 raw_u64 = 8154684722988415358 -> d6 3
Sense 2 + Tracking 1 + Context 0 vs 11
Result 8 / Margin -3 / Setback
```

## 5. Event-runtime audit

`src/events/p8EventRuntime.ts` implements the bounded subset required by the P8 Batch 02 plan:

- trigger-indexed candidate lookup via a reusable `Map` built once per catalog;
- pure eligibility predicates with no RNG dependency;
- effective weight computed once per eligible candidate during selection;
- repeat count / once-per-run / cooldown / recent-history policy;
- integer-only effective weights capped by unsigned-63 range;
- `0` eligible → no selection RNG;
- `1` eligible → no selection RNG;
- `2+` eligible → existing P5 `event.select` bounded RNG;
- exact selection subject `eval:<evaluation_ordinal>`;
- selection draw index starts at `0` for its keyed stream;
- persisted P5 pending-event identity, choice view, selection/check RNG records and precommit digest;
- direct-choice resolution;
- P3 static checked-choice resolution;
- ordered typed domain-command plan;
- P5 narrative flag/counter/chain effects;
- event count / last transition / bounded recent-history indexes;
- ordered post-commit trigger output;
- explicit `pendingAfterCommit: null` after a committed resolution.

The normative weighted-selection vector is pinned directly:

```text
run_seed              = 00000000000000000000000000000001
origin_transition_seq = 1
trigger                = location_entered
subject                = eval:0
raw_u64                = 10349592812559003362
bound                  = 100
target                 = 62
selected event         = fixture.peaceful.riverside_lapras
```

No Preact import exists in the authority modules, and no whole event-catalog scan is performed per trigger evaluation.

## 6. Pending identity and reload-determinism audit

A pending instance ID is no longer an ordinal-only label. It is SHA-256-derived from the pinned identity tuple:

```text
content pack id/version/digest
run seed
origin transition sequence
trigger id
evaluation ordinal
selected event id/content revision
```

The runtime emits a stable 64-character safe ID of the form `pending.<56 lowercase hex>`. Tests prove identical pinned inputs reproduce the same ID and a changed transition produces a different ID.

This prevents collisions between evaluations that happen to reuse the same ordinal on different authoritative transitions.

## 7. Typed adapter and atomicity audit

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

## 8. Headless proof

`tests/p8-authority-runtime.test.ts` proves the required production-path authority without UI:

1. deterministically create the character;
2. resolve one direct event at transition `0 → 1`;
3. resolve one P3 checked event at transition `1 → 2`;
4. preserve check RNG/check-result provenance in the resolved pending evidence;
5. clear the persisted pending slot after commit;
6. serialize authoritative state to JSON-safe data;
7. exercise no Preact dependency.

Additional fixtures prove:

- exact P3 margin boundaries;
- frozen P5 weighted-selection vector compatibility;
- frozen P5 hazardous-check vector compatibility;
- deterministic pending instance identity;
- zero RNG use during eligibility / single-candidate selection;
- aggregate command-plan failure is atomic.

## 9. CI evidence

Dedicated workflow:

```text
P8 Authority Runtime Validation
run 32004406948
head f751238d4ed5d8147adfecec5300e5ad4715b976
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

`npm run build` re-runs strict type checking and the existing P7 production build/static deployment validation path, so the corrected authority code does not break the established P7 application build.

## 10. Acceptance mapping

| Batch 02 requirement | Evidence | Result |
|---|---|---|
| Pure-TypeScript authoritative run/domain types | `src/domain/p8Authority.ts` | PASS |
| Deterministic P3 formative resolver | `P8CharacterCreationCatalog` + tests | PASS |
| P3 starting specialization envelope | resolver + tests | PASS |
| Exact P3 margin bands | `classifyP8Margin` boundary fixture | PASS |
| Trigger-indexed P5 candidate lookup | `P8EventCatalog` | PASS |
| Eligibility consumes no RNG | pure predicate path + tests | PASS |
| Deterministic weighted P5 selection | frozen `eval:0` vector | PASS |
| Independent keyed RNG stream indexes | selection/check vector tests | PASS |
| Deterministic persisted pending identity | SHA-256 identity fixture | PASS |
| Direct and static checked resolution | runtime + headless fixture | PASS |
| Typed P2/P3/P4 adapter subset | closed `P8DomainCommand` union | PASS |
| Failed command plan is atomic | aggregate-failure fixture | PASS |
| Exact transition sequencing | headless `0 → 1 → 2` fixture | PASS |
| Pending cleared after commit | resolved runtime fixture | PASS |
| UI independence | no Preact dependency in authority path | PASS |
| Strict TypeScript / unit / production build | Actions run 32004406948 | PASS |

## 11. Exact handoff

After PR #107 is reviewed and merged, the first incomplete work is:

**P8 Batch 03 — coherent authored slice content + deterministic replay proof.**

Batch 03 should author the bounded one-settlement / two-context proving content on top of this authority surface, including the curated Origin/Practice/species/event set and a deterministic replay fixture. Do not begin Batch 04 presentation-heavy phone UI before the Batch 03 authored run is coherent and replayable.

# P8 Batch 03 Audit — Authored Vertical Slice + Deterministic Replay

Status: **PASS — candidate for review/merge**  
Date: **2026-08-17**  
Issue: **#8**  
PR: **#108**  
Validated functional head before audit/status-only commits: `a3eb8c828a9129c725eff7a33b2c925a63c64b10`

## 1. Scope audited

Batch 03 proves the P8 authority runtime with one coherent, production-shaped authored slice rather than isolated technical fixtures.

The batch adds:

- one normalized authored source of truth at `content/p8/vertical-slice.source.json`;
- build-time source validation and deterministic runtime-pack generation;
- a generated content digest and trigger index;
- three fiction-first formative prompts with hidden deterministic tags;
- four approved local-slice Origins and four approved Learned Practices;
- a traced three-species P4 proving subset;
- seven shared P5 event records spanning the required mixed-world pillars;
- an authoritative P2 locality-transition command instead of story-side state mutation;
- a framework-independent compact-input replay runner;
- a complete deterministic `0/3` companion path and an alternate checked path;
- dedicated authored-content/replay tests and CI coverage.

No Preact presentation work is included. Batch 04 remains the first presentation/save/resource integration batch.

## 2. Canon and Human Design Gate audit

No Human Design Gate was crossed.

The authored source explicitly carries:

```text
canonScope         = local_disposable_slice
durableCanonClaims = []
```

The local names used by the proving slice — `reedbank-settlement`, `old-levee`, `windbreak-orchard`, their local relationships, and the immediate event details — are implementation-bounded slice content, not a frozen final ancient-Kanto history or P9 major-faction identity.

The source/build validator rejects non-empty durable canon claims for this Batch 03 pack. No final major faction is introduced.

## 3. Character-content audit

The generated pack derives character-creation records from one authored source rather than duplicating mappings in runtime code.

Exactly three formative prompts are present:

```text
home
rupture
work
```

Each prompt exposes fiction-first player-facing answer text while keeping its deterministic match tags in the authored source/runtime character catalog rather than deriving character truth from UI strings.

Approved local-slice Origins:

```text
river_household
storehouse_household
orchard_household
repair_household
```

Approved local-slice Learned Practices:

```text
route_guide       -> tracking
quartermaster     -> inventory
field_mender      -> repair
go_between        -> mediation
```

The replay fixtures select `home.ferry / rupture.flood / work.pathfinder`, which deterministically resolves to the route-oriented character lane while still passing the frozen P3 four-increase/cap/distinct-competence rules.

## 4. P4 species traceability audit

The curated proving subset is exactly three species:

| National Dex | Species | Generated descriptor | P4 status |
|---:|---|---|---|
| 013 | Weedle | `p4.species.013.weedle` | complete |
| 015 | Beedrill | `p4.species.015.beedrill` | complete |
| 019 | Rattata | `p4.species.019.rattata` | complete |

`tools/build_p8_slice_pack.py` reads `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml` and rejects a selected species unless its exact National Dex/species key resolves to a `complete` P4 row.

The generated records intentionally keep `optionalResourceRef: null`; gameplay content therefore does not require Pokémon media availability. Batch 04 will attach presentation resources through the frozen P6/P7 resource path without changing authority.

## 5. Coherent mixed-world chain audit

The authored pack contains seven once-per-run P5 event records:

1. `slice.opening.market_call` — ordinary settlement/social pressure with no Pokémon as the immediate cause;
2. `slice.social.steward_request` — a human request and persistent steward relationship state;
3. `slice.relationship.millkeeper_ledger` — a second persistent local relationship obligation;
4. `slice.travel.leave_settlement` — travel/survival, authoritative locality transition, provisions cost;
5. `slice.ecology.weedle_crossing` — direct Weedle ecology interaction with direct and checked choices;
6. `slice.mixed.orchard_boundary` — human route motive combined with Beedrill/Rattata ecology and a persistent orchard-keeper consequence;
7. `slice.ending.return_crossroads` — return transition and ending-input flags.

The generated `representedPillars` set is:

```text
ordinary_human_pressure
travel_survival
persistent_relationship
pokemon_ecology
mixed_human_pokemon
ending_inputs
```

All outcomes execute through the shared `P8EventDefinition` / P5-compatible runtime and the closed typed domain-command/P5-effect surfaces. No event-specific script or executable hook is authored.

## 6. Authoritative locality ownership audit

Batch 02 already owned relationship, resource and Pokémon interaction mutations, but its closed first-slice command subset did not yet expose a locality transition.

Batch 03 adds only the missing typed semantic boundary:

```text
p2.world.commit_locality_transition
```

Its preconditions require:

- stable `fromLocality`, `toLocality` and `routeRef` IDs;
- origin and destination must differ;
- the authoritative `currentLocality` must equal `fromLocality` at precommit.

Tests prove a stale/wrong origin is rejected and a valid transition returns a new authority state without mutating the caller state. Authored events never write `world.currentLocality` directly.

## 7. Generated pack and deterministic digest audit

Build path:

```text
content/p8/vertical-slice.source.json
        ↓ tools/build_p8_slice_pack.py
src/generated/p8-slice-pack.json
```

The generated runtime core includes:

- normalized formative answers;
- normalized Origin/Practice records;
- presentation prompt references;
- traced species descriptors;
- normalized P5 event records;
- trigger → sorted event-ID index;
- represented pillar set.

The content identity is:

```text
content_pack_id        = p8.reedbank-slice
content_pack_version   = 1
content_digest_sha256  = d19921e11a6015fdfd7da211d1f813386d23bc8637ecb300f724b6afac81eac5
```

`tools/check_p8_slice_pack.py` validates the source, rebuilds the expected semantic pack and compares it against the committed generated JSON. This avoids runtime authoring parse/normalization and prevents hand-edited generated drift.

At runtime, `src/content/p8SliceContent.ts` converts decimal event weights to `bigint` once during module initialization and constructs one reusable `P8EventCatalog`, preserving cached trigger lookup rather than scanning or reparsing content per render/evaluation.

## 8. Deterministic replay audit

`src/content/p8SliceReplay.ts` is framework-independent and consumes only compact replay inputs:

```text
(trigger_id, expected_event_id, choice_id)
```

For every event commit it records:

- transition sequence;
- trigger/event/choice/outcome identity;
- precommit authority SHA-256 digest;
- postcommit authority SHA-256 digest;
- check outcome band when a P3 check occurs.

### Complete zero-companion route

`P8_SLICE_REPLAYS.zeroCompanion` executes seven committed events and ends at transition sequence `7`.

The fixture proves:

```text
companion slots     = [null, null, null]
ending locality     = reedbank-settlement
remaining provisions= 2
ending_ready         = true
zero_companion_route_complete = true
```

It also records living direct interactions with Weedle, Beedrill and Rattata while never forcing any Pokémon to join a companion slot.

The same starting character/seed/compact input sequence is executed twice; the complete replay checkpoints are deep-equal and serialized authoritative state JSON is byte-equal under `JSON.stringify`.

### Alternate checked route

`P8_SLICE_REPLAYS.alternate` selects `read_signs` at the Weedle ecology event, exercising the shared P3 static-check path and preserving a check outcome band in the replay evidence. It then selects the alternate orchard shortcut consequence, producing `orchard.keeper = route_strained` and `slice.social_cost = 1` while still completing with `0/3` companions.

This proves the authored slice contains both a complete direct-choice route and a real alternate deterministic check/consequence branch.

## 9. CI evidence

Validated functional head:

```text
a3eb8c828a9129c725eff7a33b2c925a63c64b10
```

P8 Vertical Slice Validation:

```text
run 32005741392 = PASS
Validate P8 vertical-slice contract             PASS
Validate P8 authored source and generated pack  PASS
```

P8 Authority Runtime Validation:

```text
run 32005741329 = PASS
P8 integration guard                            PASS
source/generated semantic check                 PASS
npm ci                                          PASS
strict TypeScript                               PASS
deterministic authority/replay unit fixtures    PASS
P7-compatible production build regression       PASS
```

Additional inherited workflows on the same head also passed:

```text
P7 Batch 02 Validation run 32005741379 = PASS
P7 Batch 04 Validation run 32005741332 = PASS
```

The execution environment for this work could not clone GitHub directly, so no local-run claim is made. The committed branch was validated by the repository's GitHub Actions gates above.

## 10. Batch 03 acceptance mapping

| Batch 03 requirement | Evidence | Result |
|---|---|---|
| Production-shaped normalized source records | `content/p8/vertical-slice.source.json` | PASS |
| Local/disposable vs durable canon separated | `canonScope` + empty durable claims + validator | PASS |
| At least four approved Origins | four generated/source records | PASS |
| At least four approved Learned Practices | four generated/source records | PASS |
| Three formative prompts with hidden deterministic tags | source + generated character catalog | PASS |
| `3..8` P4-approved Pokémon | exact traced 3-species subset | PASS |
| Ordinary human/social pressure | opening/steward events | PASS |
| Travel/survival | settlement departure + provisions cost | PASS |
| Persistent relationship lane | steward/millkeeper/orchard states | PASS |
| Pokémon ecology/direct interaction | Weedle + Beedrill + Rattata interactions | PASS |
| Mixed human motive + Pokémon ecology | orchard-boundary event | PASS |
| Ending inputs | return-crossroads flags | PASS |
| Valid complete `0/3` route | replay fixture | PASS |
| Shared P5 event records / no custom scripts | generated `P8EventDefinition` records | PASS |
| Generated runtime pack/index/digest | build/check tools + generated pack | PASS |
| Complete deterministic replay | zero-companion fixture | PASS |
| Alternate checked branch | alternate replay fixture | PASS |
| Repeated identical execution equivalent | checkpoint + state byte/semantic comparison | PASS |
| No final P9 faction or pseudo-canonical history | canon-scope audit | PASS |
| Optional Pokémon media not gameplay-critical | null optional refs; authority tests media-free | PASS |
| Strict TypeScript/unit/build regression | Actions run 32005741329 | PASS |

## 11. Exact handoff

After PR #108 is reviewed and merged, the first incomplete work is:

**P8 Batch 04 — phone-sized Preact flow + authoritative save/resource integration.**

Batch 04 should present this generated authored pack through typed intents only, persist normal and pending authority at explicit committed boundaries, and resolve optional Pokémon media through the existing P6/P7 `ResourceLoader` path. It must not duplicate gameplay truth into independently mutable component state.

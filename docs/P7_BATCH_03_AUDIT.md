# P7 Batch 03 Audit — Deterministic Runtime and Save Foundation

Date: **2026-08-17**  
Issue: **#7**  
PR: **#102**  
Architecture: `p7-architecture-v1`  
Candidate branch: `agent/p7-batch03-runtime-save-foundation`  
Verdict: **PASS CANDIDATE — final PR-head CI required before merge**

## Objective

Implement the first production-intended authoritative runtime and persistence boundary without pulling generated-content, resource-cache or browser/offline work forward from Batches 04–06.

No new npm/runtime dependency was added.

## Deterministic RNG proof

Batch 03 adds a project-owned `HashProvider` abstraction and a Web Crypto `SubtleCrypto.digest('SHA-256', ...)` provider. `p5-rng-v1` is encoded exactly as frozen by P5:

```text
ASCII("pokemon-ancient-trpg/p5-rng-v1")
0x00
run_seed[16 bytes]
0x00
ASCII(content_pack_id)
0x00
ASCII(content_pack_version)
0x00
U64_BE(origin_transition_seq)
0x00
ASCII(trigger_id)
0x00
ASCII(channel)
0x00
ASCII(subject_id)
0x00
U64_BE(draw_index)
```

Authoritative u64 inputs remain `bigint`. The raw draw is the first eight SHA-256 digest bytes interpreted as unsigned big-endian u64. Bounded draws use the frozen rejection-sampling rule and persist every rejected/accepted raw draw.

All frozen P5 semantic vectors are now executable TypeScript fixtures:

| Vector | SHA-256 | raw u64 | Bound | Result |
|---|---|---:|---:|---:|
| `weighted-selection-vector-001` | `8fa123d41a83eee27404d409e3c1931ab5c97f95fb1b84bae33788307759cc05` | `10349592812559003362` | 100 | 62 |
| `d034-rare-selection-vector-001` | `937fdfabd7edbce9eedc177a5e71e6f3bc32a4d4d8763ef50094672e0810b1f9` | `10628459574772743401` | 100 | 1 |
| `hazardous-check-die-001` | `3df0deaba15f8fbd942b1b29f6632c42ef0a51ed7ff4ba0c5a040bcd9124a531` | `4463312059452329917` | 6 | 1 (die 2) |
| `hazardous-check-die-002` | `712b428cd907797eebd3eff5a6183f8d66945dfc4515934ec0bca2e691c8f9e6` | `8154684722988415358` | 6 | 2 (die 3) |

The fixtures compare the complete encoder byte sequence before hashing, not only the digest/result. A forced-rejection provider fixture also proves rejected draws are recorded and the next draw index advances within the same stream.

## SaveEnvelopeV1 and pending-event wire boundary

The production envelope keeps the architecture/P5/content identity together with authoritative state:

```text
save_schema_version             = 1
architecture_contract_version   = p7-architecture-v1
content_pack_id/version/digest   = pinned
p5_contract_version             = p5-event-contract-v1
run_seed_hex                     = 32 lowercase hex
transition_seq_u64               = canonical unsigned decimal string
authoritative_state             = JSON object
pending_event_instance           = optional exact-resume state
```

P7 adapts P5 semantic u64 fields to explicit wire names such as `origin_transition_seq_u64`, `draw_index_u64`, `raw_u64` and `bounded_result_u64`. Runtime values are `bigint`; JSON wire values are canonical unsigned decimal strings. Noncanonical decimals, u64 overflow, unknown save/pending versions, unsupported enum values and pending/envelope identity mismatches fail closed.

The pending-event converter preserves the P5 semantic checkpoint needed to resume without hidden rerolls or reselection: resolved choice view, selected choice, completed RNG draws, completed check result, consequence and reaction-window state as applicable.

## Migration, IndexedDB and atomic replacement

Batch 03 adds:

- `SaveMigrationRegistry`, keyed by source version and requiring exactly one-version advancement per step;
- rejection of unknown future versions, missing steps, duplicate steps and migrations that return the wrong version;
- native `IndexedDbSaveStore` using the `save_slots` object store;
- one `readwrite` transaction plus one `put` for each complete slot replacement;
- load/import boundaries that treat persisted/input data as untrusted until migration + full V1 validation pass;
- exact content-pack compatibility checking before a save is resumed or imported.

Import does not touch storage until JSON parsing, version migration, schema/range validation and content-pack compatibility all succeed. The test store records replacement count and proves malformed/incompatible imports leave the previous slot unchanged; a valid import performs exactly one replacement.

## Mid-event reload proof

Three independent fixtures round-trip through the production envelope/store boundary:

```text
awaiting_choice   -> visible/enabled choice view survives
awaiting_roll     -> selected choice survives without reselection
awaiting_reaction -> selected choice + exact completed RNG/check + consequence/reaction window survive
```

Large values beyond `Number.MAX_SAFE_INTEGER`, including `origin_transition_seq == 9007199254740993` and envelope transition sequence `18446744073709551614`, survive JSON round-trip exactly as decimal strings.

## Validation evidence

Local dependency-independent strict TypeScript checking passed, and the production Web Crypto provider reproduced all four frozen P5 digest/raw/bounded vectors.

The first PR-head run exposed two fixture-only false assertions: a substring check accidentally matched ordinary words ending in `n`, and an all-numeric seed did not change under `toUpperCase()`. No production implementation change was required. Commit `3ab95789ec9cf72363e8be4ab45ed4caf3416103` replaced both with exact assertions.

Node 24 PR workflow run `31986880398` then completed successfully through:

```text
npm ci                         == PASS
TypeScript 6 strict typecheck == PASS
Vitest deterministic fixtures == PASS
Vite/Workbox production build == PASS
static dist validation        == PASS
```

## Scope intentionally deferred

Batch 03 does not claim:

- generated runtime content packs or trigger/species/resource/adapter indexes;
- runtime resource request coalescing or byte-bounded LRU eviction;
- browser decoded-memory measurement;
- phone-sized Chromium/WebKit execution;
- offline reload/service-worker update E2E;
- Vercel deployment evidence.

Those remain Batches 04–06 exactly as frozen in `docs/P7_IMPLEMENTATION_SKELETON_PLAN.md`.

## Acceptance gate

Batch 03 is accepted only after the final PR #102 head passes the Node 24 validation lane, has no unresolved review thread and merges without widening scope. P8 remains blocked until the remaining P7 Batch 04–06 gates pass.

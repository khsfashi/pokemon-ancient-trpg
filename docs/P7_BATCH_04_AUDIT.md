# P7 Batch 04 Audit — Generated Runtime Pack and Deterministic Indexes

Date: **2026-08-17**  
Issue: **#7**  
PR: **#103**  
Architecture: `p7-architecture-v1`  
Candidate branch: `agent/p7-batch04-generated-runtime-pack`  
Validated code head before documentation finalization: `737af1367513b798a81693c4c2a371cf294a5633`  
Verdict: **PASS CANDIDATE — final PR-head CI required before merge**

## Objective

Implement the frozen P7 Batch 04 generated-content boundary without pulling Batch 05 resource-cache/browser measurement work forward.

Runtime code now consumes one committed, deterministic, normalized JSON pack instead of parsing the P4/P5/P6 authoring YAML/JSON contracts during gameplay. No new npm/runtime dependency was added. The generator reuses the existing pinned `PyYAML` dependency already required by P5 validation.

## Authoritative inputs and validation order

`tools/build_p7_runtime_pack.py` consumes only project-owned authoritative inputs:

```text
docs/P4_SPECIES_COVERAGE_MANIFEST.yaml
docs/P5_BATCH_03_REPRESENTATIVE_EVENTS.yaml
docs/P5_DOMAIN_ADAPTER_REGISTRY.yaml
docs/P6_RESOURCE_MANIFEST.json
```

The Batch 04 CI lane does not replace proven validation tooling. It first executes:

```text
python tools/validate_p5_contract.py
python tools/validate_p6_resources.py
```

Only after those gates pass does `python tools/build_p7_runtime_pack.py --check` reconstruct the runtime pack and require byte-for-byte equality with `src/generated/runtime-pack.json`.

## Deterministic generated pack

Generated identity:

```text
pack_format_version    = p7-runtime-pack-v1
content_pack_id        = p7.contract-fixtures
content_pack_version   = 1
content_scope          = contract_fixture_not_production_lore
digest_algorithm       = sha256
content_digest_sha256  = 9c830e0b58d41089470594d263c16ba7e92377f6998b3f07785eb7708a059b2c
```

The SHA-256 digest is computed over compact canonical JSON with every object key lexicographically sorted and with `content_digest_sha256` omitted from the digest input. The TypeScript fixture independently reproduces the same canonical byte sequence with Web Crypto and requires exact digest equality.

Current deterministic index cardinalities:

```text
event_index             = 7
trigger_index           = 4
resource_index          = 7
species_index           = 151
semantic_adapter_index  = 92
```

The trigger lists and top-level maps are emitted in stable sorted order. Duplicate event, resource, species or semantic-adapter IDs fail generation.

## Required lookup boundaries

Batch 04 provides the frozen generated indexes:

```text
trigger_id          -> ordered event IDs
resource_id         -> runtime descriptor
species_id          -> runtime species/dossier descriptor
semantic adapter ID -> registered runtime adapter descriptor
```

`src/generated/runtimePack.ts` exposes these through project-owned lookup functions. String-keyed lookups use own-property checks over the generated records, preventing prototype-key fallthrough such as `__proto__`.

Species IDs are the frozen dense `1..151` domain, so the module constructs a 152-entry descriptor array once at module initialization. Repeated `species_id` lookup is then direct array indexing and does not allocate zero-padded string keys or rebuild a `Map` on gameplay paths.

Missing-trigger lookup returns one shared frozen empty array rather than allocating a new empty candidate list for each miss.

## Gen-I coverage boundary

Generation fails unless the P4 coverage manifest resolves to exactly National Pokédex `#001-#151`, with no missing or extra ID. All 151 generated descriptors include the resolved dossier/coverage state plus a stable descriptor ID such as:

```text
#015 Beedrill -> p4.species.015.beedrill
```

This index does not replace the P4 content guarantee; it makes the already-accepted full Gen-I coverage directly addressable by the runtime.

## Public/resource safety boundary

The runtime resource index intentionally omits source-fetch and provenance fields that are not needed by gameplay, including remote URLs and source asset locators.

Generation fails if the public runtime pack contains any of these markers:

```text
http://
https://
pokeapi.co
raw.githubusercontent.com
asset_locator
canonical_url
```

A P6 required resource must also be `public_distribution: allowed` or generation fails.

Uncleared Pokémon media remains metadata-only for public/runtime packaging. For example, `pokemon.001.companion.icon.default` is emitted as `availability: optional_local_only`, retains deterministic fallback metadata, and contains no remote URL or copied Pokémon media path.

No Pokémon source binary is generated or copied by Batch 04.

## Runtime/test proof

The generated runtime fixture proves:

- the content digest is independently reproducible in TypeScript;
- all four trigger lists are stable and ordered;
- the event index resolves representative P5 fixtures;
- species lookups cover `1`, `15`, and `151` and reject invalid/out-of-range IDs;
- the resource index contains no remote/source-only locator markers;
- uncleared Pokémon resources stay optional/local-only with authored fallback metadata;
- all 92 semantic adapters are indexed by stable ID;
- `__proto__` cannot resolve through the string lookup boundary;
- missing trigger lookups reuse the same empty result object.

## Validation evidence

Validated code head `737af1367513b798a81693c4c2a371cf294a5633` completed successfully through both overlapping Node/runtime gates:

```text
P7 Batch 02 Validation run 31988847464 == PASS
P7 Batch 04 Validation run 31988847470 == PASS
```

A documentation-inclusive PR head `3f3f42e3a0e16054cf03e96fc68020856aa15420` then passed `P7 Batch 04 Validation` run `31989017908`, re-running the frozen P5/P6 validators, deterministic pack check, Node 24 install/typecheck/tests and production build after the audit/status files were added.

The Batch 04 lane specifically proves:

```text
frozen P5 validator                  == PASS
frozen P6 resource validator         == PASS
deterministic committed pack check  == PASS
Node 24 npm ci                       == PASS
TypeScript 6 strict typecheck        == PASS
Vitest deterministic fixtures       == PASS
Vite/Workbox production build        == PASS
```

An earlier fixture run correctly caught two test-definition mistakes while the generator and strict typecheck were already green: JavaScript integer-like object-key enumeration was not equivalent to the Python canonical serializer, and a pure predicate test expected an `owner` field that the authoritative registry does not define. The fixture was corrected to serialize sorted keys directly and to assert only source-defined predicate metadata; no production/generated pack behavior was changed for those failures.

## Scope intentionally deferred

Batch 04 does **not** claim:

- in-flight resource-request coalescing;
- compact icon byte-bounded LRU eviction;
- encounter atlas byte-bounded LRU eviction;
- the max-two resident encounter guard;
- measured browser decoded-memory/cache behavior;
- phone-sized Chromium/WebKit resource measurements;
- offline/service-worker browser E2E;
- Vercel deployment evidence.

Those remain P7 Batches 05–06 exactly as frozen in `docs/P7_IMPLEMENTATION_SKELETON_PLAN.md`.

## Acceptance gate

Batch 04 is accepted only after a code-bearing PR #103 head has passed both the overlapping Node/runtime lane and the dedicated Batch 04 lane, the final documentation-inclusive PR head has passed the dedicated Batch 04 lane that itself repeats Node 24 typecheck/tests/build, there is no unresolved review thread, and the PR merges without widening scope. P8 remains blocked until Batch 05 resource-cache/measurement and Batch 06 offline/phone-browser gates also pass.

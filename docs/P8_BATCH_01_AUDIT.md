# P8 Batch 01 Audit — Vertical Slice Contract and Guards

Status: **PASS — candidate for review/merge**  
Date: **2026-08-17**  
Issue: **#8**  
PR: **#106**  
Validated functional head before this audit-only commit: `1791f136295f0f9c244d644eca4e2e1a48276033`

## 1. Scope audited

Batch 01 was intentionally limited to the first P8 implementation/integration contract. It did not add production story prose, a final major faction, new persistent world canon, a final species roster, or gameplay UI.

The batch establishes:

- `p8-vertical-slice-v1` as the first-slice integration contract;
- a machine-readable scope/architecture/resource manifest;
- an authority-first P8 implementation sequence;
- a Python contract guard and GitHub Actions workflow;
- the operational handoff into Batch 02.

## 2. Human Design Gate audit

No Human Design Gate was required.

Why:

- the slice shape already exists in issue #8, `docs/ROADMAP.md`, and `docs/WORLD_CONTENT_AND_FACTION_CONTRACT.md`;
- the proto-Kanto locality boundary already exists in P2;
- character creation/check semantics already exist in P3;
- Pokémon/direct-interaction semantics already exist in P4;
- event execution already exists as a frozen P5 contract;
- resource and architecture constraints are frozen by P6/P7;
- Batch 01 explicitly defers final faction identity, exact settlement identity, exact species subset, and other durable authored canon.

The contract permits only reversible local/non-canonical slice details until later authoring actually requires a persistent-world decision.

## 3. Scope-boundary audit

Verified by `docs/P8_VERTICAL_SLICE_MANIFEST.json` and `tools/validate_p8_vertical_slice.py`:

```text
primary_settlement_count                         = 1
travel_corridor_min                              = 1
meaningfully_distinct_local_or_ecology_contexts >= 2
formative_prompt_count                           = 3
curated_origins                                  >= 4
curated_learned_practices                        >= 4
curated_species                                  = 3..8
visible_companion_slots                          = 3
zero_companion_completion                        = required
all_151_required_in_slice                        = false
```

The curated P8 proving set does not change the authoritative P3/P4/P9 breadth contracts. P9 still owns complete world-content breadth and all `151/151` living direct-interaction paths.

## 4. Runtime-boundary audit

Batch 01 requires the production runtime to preserve:

```text
authoritative_core             = framework-independent pure TypeScript
event_engine                   = shared P5 data-driven runtime
event_evaluation               = committed-transition-driven
separate_faction_event_engine  = false
separate_pokemon_event_engine  = false
hardcoded_story_events_in_ui   = false
ui_direct_authoritative_write  = false
pending_event_persisted        = true
save_storage                   = IndexedDB
runtime_remote_pokemon_api     = false
whole_event_catalog_scan       = false
```

The Batch 02 plan is headless/authority-first: deterministic character creation, the required P5 runtime subset, typed P2/P3/P4 semantic adapters, atomic state transitions, and pure unit/headless proofs must exist before presentation-heavy slice UI.

## 5. Resource-boundary audit

The P8 manifest is checked against the frozen P7 architecture manifest rather than copying relaxed values.

Verified inherited caps:

```text
pokemon_media_initial_payload_bytes             = 0
compact_icon_decoded_cache_cap_bytes            = 393216
encounter_atlas_decoded_per_item_cap_bytes      = 2097152
encounter_atlas_max_resident                    = 2
encounter_atlas_decoded_cache_cap_bytes          = 4194304
combined_optional_pokemon_decoded_cap_bytes     = 4587520
required_initial_resource_payload_cap_bytes     = 3145728
missing_optional_media_changes_gameplay         = false
runtime_default_image_resize                    = false
runtime_atlas_repack                            = false
```

No all-151 preload or resource-policy relaxation is introduced by P8 Batch 01.

## 6. CI evidence

The functional head `1791f136295f0f9c244d644eca4e2e1a48276033` completed all P8-triggered and relevant P7 regression workflows successfully.

```text
P8 Vertical Slice Validation  run 31999410244 = PASS
P7 Batch 04 Validation        run 31999410315 = PASS
P7 Batch 05 Validation        run 31999410283 = PASS
P7 Batch 06 Validation        run 31999410254 = PASS
```

P8 validation specifically executed:

```text
python tools/validate_p8_vertical_slice.py
```

The existing P7 regressions also re-proved generated runtime/content integrity, strict TypeScript/build/unit behavior, resource/browser constraints, and save/PWA browser behavior on the P8 branch.

## 7. Acceptance mapping

| Batch 01 requirement | Evidence | Result |
|---|---|---|
| Freeze first-slice production-path boundary | `P8_VERTICAL_SLICE_CONTRACT.md` | PASS |
| Machine-readable scope/guardrails | `P8_VERTICAL_SLICE_MANIFEST.json` | PASS |
| Preserve one shared P5 event surface | contract + validator | PASS |
| Preserve complete `0/3` path requirement | manifest + validator | PASS |
| Preserve P6/P7 resource caps | manifest cross-checks P7 | PASS |
| Do not absorb P9 151-species breadth | contract + manifest | PASS |
| Defer persistent canon/final faction identity | contract + manifest | PASS |
| Define bounded next implementation | `P8_IMPLEMENTATION_PLAN.md` Batch 02 | PASS |
| CI guard contract drift | P8 workflow run 31999410244 | PASS |
| Existing runtime/resource/save regressions remain green | P7 runs above | PASS |

## 8. Exact handoff

After PR #106 is accepted and merged, the first incomplete work is:

**P8 Batch 02 — authoritative gameplay runtime foundation.**

Batch 02 should implement the headless pure-TypeScript authority layer before story-specific Preact UI expands:

1. normalized run/domain state needed by the slice;
2. deterministic P3 formative-choice → Origin/Practice resolver;
3. legal P3 starting-specialization validator;
4. trigger-indexed P5 candidate/eligibility/selection/pending/direct/check/effect/commit subset;
5. typed P2/P3/P4 semantic domain adapters without raw setter escape hatches;
6. deterministic/atomicity/unit fixtures;
7. one headless direct-event and one headless checked-event proof.

Do not begin Batch 03 content breadth or Batch 04 presentation while Batch 02 authority is incomplete.

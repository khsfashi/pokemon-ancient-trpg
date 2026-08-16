# P5 Foundation Contract Audit

Status: **PASS — foundation batch complete; P5 remains ACTIVE**  
Date: **2026-08-16**  
Phase: **P5 — Narrative event engine and seeded run model (#6)**

Audited outputs:

- `docs/P5_DETERMINISTIC_EVENT_FOUNDATION_CONTRACT.md`
- `docs/P5_FOUNDATION_SEMANTIC_FIXTURES.yaml`

Upstream authorities checked:

- `docs/P3_EXIT_AUDIT.md`
- `docs/P3_DICE_AND_CHECK_CONTRACT.md`
- `docs/P3_FATE_AND_EMERGENCY_CONSUMABLES_CONTRACT.md`
- `docs/P4_ALL_151_DIRECT_ENCOUNTER_CONTRACT.md`
- `docs/P4_EXIT_AUDIT.md`
- D-013, D-019, D-020, D-030 and D-034 as summarized by the active contracts/audits

## 1. Exact-next-work coverage

The `PROJECT_STATUS.md` P5 foundation checklist is covered as follows.

| Required foundation work | Result | Evidence |
|---|---|---|
| inventory P2/P3/P4 state/hook surfaces | PASS | Contract §2–3 separates read/query surfaces, typed domain commands and P5-owned state. |
| stable event identity/versioning/ownership | PASS | Contract §4 freezes pack pin, digest, stable IDs and revision rules. |
| eligibility inputs + discrete triggers | PASS | Contract §5 defines trigger-only evaluation; render/frame polling is forbidden. |
| visible/hidden conditions + choices | PASS | Contract §6 separates visibility, availability and disclosure; debug/player views are distinct. |
| deterministic weighted selection + seeded RNG | PASS | Contract §8 freezes stable sorting, integer weights, SHA-256 keyed draw vectors and unbiased bounded rejection sampling. |
| choice → check → outcome → state/flags → chain/cooldown/history order | PASS | Contract §10–11 freezes the transactional sequence and P3 reaction timing. |
| replay/debug trace | PASS | Contract §9 and §14 define persisted pending instances and diagnostic fields. |
| anti-repeat/history without continuous polling | PASS | Contract §12 uses O(1) indexes + bounded recent-history ring. |
| content validation failures | PASS | Contract §15 defines blocking validation classes P5V001–P5V018. |
| six fixed semantic fixtures | PASS | Fixture file contains F01–F06 for all requested cases. |
| contradiction/performance audit | PASS | This document §§2–6. |

## 2. P3 contradiction audit

### 2.1 Dice and checks

P3 requires `2d6 + Attribute + Competence + Context`, individual die logging, four margin bands and natural doubles overlays.

P5 foundation preserves that shape exactly:

```text
core_dice_changed == false
individual_d6_logged == true
multiple_competence_stack_created == false
unbounded_context_stack_created == false
fortune_or_trouble_replaced_margin == false
structurally_impossible_action_rolled == false
```

Fixture F02 proves two deterministic d6 vectors and a setback margin. Fixture F06 proves an unavailable/structurally invalid approach consumes zero check RNG rather than using TN inflation.

Result: **PASS**.

### 2.2 Rerolls and emergency reactions

D-030 forbids universal rerolls/die replacement and requires the sequence `roll → outcome/spike → legal reaction → consumption → modified consequence → final state`.

P5 preserves immutable dice and persists the rolled pending state before waiting for a reaction. Reload cannot produce new dice.

Fixture F02 demonstrates:

```text
dice == [2, 3]
outcome_band == setback
reaction_changes_dice == false
reaction_changes_outcome_band == false
reload_reroll_allowed == false
```

The fixture item is test-only and does not establish production item lore.

Result: **PASS**.

### 2.3 Health/inventory/progression/Gift ownership

P5 does not expose arbitrary raw writes to upstream state. Event effects call registered domain commands whose owning contract validates the transition.

```text
raw_vitality_assignment_allowed == false
raw_injury_assignment_allowed == false
raw_companion_slot_assignment_allowed == false
kill_xp_created == false
psychic_mana_created == false
universal_money_created == false
```

Result: **PASS**.

## 3. P4 contradiction audit

### 3.1 Species ratings and hazards

P5 does not convert `p4-six-axis-v1` species ratings into hidden player-roll modifiers or level scaling. Species capability/hazard semantics enter through authored predicates, targets, state and domain adapters.

```text
player_level_enemy_scaling_created == false
raw_base_stats_added_to_human_check == false
hazard_severity_capped_by_axis == false
```

Result: **PASS**.

### 3.2 Companionship

Fixture F05 contains both `1/3` and `0/3` variants. Companion occupancy changes a branch permission/logistical choice rather than granting a generic numeric bonus.

```text
three_slot_contract_preserved == true
zero_companion_path_valid == true
containment_created == false
generic_companion_plus_one_created == false
forced_ownership_created == false
```

Result: **PASS**.

### 3.3 D-034 direct encounter and chronology

Fixture F03 represents a rare authored Mew chain that may culminate in an actual living #151 interaction without routine spawn, capture, companion or boss assumptions.

Fixture F04 represents living #137 Porygon arriving through an exceptional chronology displacement while explicitly forbidding writes that would make Porygon ancient-native, create ancient computer industry, or grant reusable time travel.

```text
D034_indirect_only_fixture_used_as_direct_coverage == false
chronology_anomaly_equals_routine_spawn == false
chronology_anomaly_rewrites_origin == false
chronology_anomaly_industrializes_world == false
```

Result: **PASS**.

## 4. Determinism audit

### 4.1 Seed and content pin

A save pins contract version, content pack ID/version/digest, 16-byte run seed and transition sequence. A pending event instance pins already-selected/rolled state.

This closes two common replay holes:

1. modifying content under the same logical run without detection;
2. saving/reloading after a bad roll to advance an opaque mutable RNG cursor differently.

Result: **PASS**.

### 4.2 RNG call-order isolation

P5 uses independent keyed channels rather than one global mutable cursor.

Adding an unrelated `insight.select` draw therefore does not change a `check.d6` stream. Adding a debug-only operation consumes no authoritative RNG at all.

Result: **PASS**.

### 4.3 Weighted selection

Selection uses:

- RNG-free eligibility;
- positive integer effective weights;
- ASCII `event_id` ordering;
- checked total weight;
- rejection-sampled bounded integers;
- half-open cumulative intervals.

No authoritative floating-point weight calculation exists.

Fixture F01 pins the vector:

```text
raw_u64 = 10349592812559003362
bound = 100
target = 62
selected = fixture.peaceful.riverside_lapras
```

Fixture F03 pins the D-034 rare vector:

```text
raw_u64 = 10628459574772743401
bound = 100
target = 1
selected = fixture.d034.mew_presence
```

Result: **PASS**.

### 4.4 Pending event reload

A selected event awaiting player input is authoritative saved state. A rolled check awaiting reaction persists its dice and provisional consequence before returning control to presentation.

```text
reload_reselects_pending_event == false
reload_rerolls_completed_check == false
ui_navigation_increments_transition_seq == false
```

Result: **PASS**.

## 5. Hidden-state audit

The contract distinguishes full debug diagnostics from the player-safe event view.

Player presentation receives resolved visibility/enabled booleans and approved public reason IDs, not secret condition ASTs or values.

Fixture F05 checks a hidden-until-available branch without exposing the predicate state in the player-safe view.

```text
secret_condition_expression_leaked == false
hidden_candidate_weights_leaked == false
debug_trace_reused_as_player_payload == false
```

Result: **PASS**.

## 6. Performance / allocation audit

The foundation can be implemented without continuous simulation or per-frame catalog work.

Required runtime shape:

```text
candidate_lookup == trigger_indexed
condition_parse_frequency == once_per_loaded_pack_or_build_time
event_count_lookup == O(1)
last_event_transition_lookup == O(1)
recent_history_capacity <= 64
whole_event_log_scan_for_normal_eligibility == false
whole_species_roster_scan_per_transition == false
per_render_event_scan == false
per_frame_event_scan == false
```

Keyed SHA-256 draws occur only on discrete authoritative random decisions. The expected event/check cadence is tiny compared with rendering frequency, so this determinism choice does not impose a frame-loop hash workload.

Result: **PASS**.

## 7. Fixture coverage audit

| Fixture | Required scenario | Result |
|---|---|---|
| F01 | ordinary peaceful interaction | PASS |
| F02 | hazardous encounter | PASS |
| F03 | D-034 rare direct encounter | PASS |
| F04 | chronology anomaly | PASS |
| F05 | companion-aware branch + `0/3` parity | PASS |
| F06 | failed/invalid approach | PASS |

The fixture set also supplies four exact SHA-256/raw-u64/die or bounded-selection vectors for cross-language implementation tests.

## 8. Validation audit

The blocking validation catalog covers:

- identity/ref integrity;
- deterministic trigger/weight rules;
- undeclared reads/writes;
- upstream ownership bypass;
- P3 check/reaction violations;
- impossible/contradictory branches;
- unbounded chain cycles;
- secret leakage;
- non-deterministic external inputs;
- partial commits;
- chronology/D-034 misuse;
- generic companion/containment misuse.

Result: **PASS for foundation scope**.

The next P5 batch must turn the semantic domain references into an explicit registered predicate/command catalog and exact normalized production schema so these errors can be validated mechanically before P7 implementation.

## 9. Foundation verdict

```text
foundation_contract_complete == true
semantic_fixture_count == 6
exact_rng_vector_count >= 4
p3_contradiction_count == 0
p4_contradiction_count == 0
blocking_human_design_gate_count == 0
continuous_polling_requirement_count == 0
P5_phase_complete == false
```

**Verdict: PASS.**

P5 remains active. P6 remains blocked until the later full P5 exit audit proves the complete production schema/adapter registry and implementation-independent validation surface.

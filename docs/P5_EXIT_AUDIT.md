# P5 Exit Audit — deterministic world-event engine

Status: **PASS — P5 COMPLETE / P6 UNBLOCKED after this branch merges**  
Date: **2026-08-16**  
Phase: **P5 — Narrative event engine and seeded run model (#6)**  
Contract version: `p5-event-contract-v1`

## 1. Audit question

P5 may close only if its event/run contract is deterministic, data-driven, implementation-ready without freezing P7 runtime/storage architecture, compatible with the frozen P2/P3/P4 contracts, and broad enough to express ordinary world, relationship/faction, survival, mixed human/Pokémon, and Pokémon-facing content through one shared execution surface.

This is the strict whole-surface audit required after P5 Batch 02 and D-035.

## 2. Audited artifacts

- `docs/P5_DETERMINISTIC_EVENT_FOUNDATION_CONTRACT.md`
- `docs/P5_FOUNDATION_SEMANTIC_FIXTURES.yaml`
- `docs/P5_FOUNDATION_CONTRACT_AUDIT.md`
- `docs/P5_NORMALIZED_EVENT_SCHEMA.json`
- `docs/P5_PENDING_EVENT_STATE_SCHEMA.json`
- `docs/P5_DOMAIN_ADAPTER_REGISTRY.yaml`
- `docs/P5_BATCH_02_VALIDATION_FIXTURES.yaml`
- `docs/P5_BATCH_02_AUDIT.md`
- `docs/P5_BATCH_03_REPRESENTATIVE_EVENTS.yaml`
- `tools/validate_p5_contract.py`
- `tools/check_p5_rng_fixture.py`
- `.github/workflows/p5-contract-validation.yml`

Upstream contradiction checks use:

- `docs/P2_FIRST_REGION_CONTRACT.md`
- `docs/P2_EXIT_AUDIT.md`
- `docs/P3_EXIT_AUDIT.md`
- `docs/P4_EXIT_AUDIT.md`
- `docs/WORLD_CONTENT_AND_FACTION_CONTRACT.md`
- D-034 and D-035 authority already reflected in the current roadmap/status contracts.

## 3. Strict-audit defects found and resolved

The exit audit did not merely restate Batch 02 PASS claims. It found concrete defects and kept P5 open until they were resolved.

### 3.1 Pending mid-reaction fixture did not match its frozen schema

The Batch 02 `B02-pending-mid-reaction-reload` example originally omitted required `resolved_choice_view`, represented completed RNG draws as fixture strings rather than `rngDraw` records, and used an incomplete/mismatched completed-check shape.

Resolution:

- add the resolved choice view;
- persist full accepted RNG draw records;
- persist `check_id`, immutable dice, total, margin, `outcome_band`, and `doubles_overlay`;
- explicitly reference `docs/P5_PENDING_EVENT_STATE_SCHEMA.json`.

Result: **resolved before Batch 02 merge**.

### 3.2 D-035 exposed a real P2/world typed-mutation gap

Batch 02 could read P2 locality/route/knowledge/permission/relationship/setting state, but it had no typed P2 commands through which a faction/relationship/world event could commit authoritative upstream consequences.

P2 explicitly leaves route/event state-schema details to P5 while requiring locality-sensitive knowledge, settlement relationships/reputation, permissions, and route accessibility to drive later events. Therefore this was a P5 adapter gap, not a reason to invent raw writes or defer the problem to P7/P9.

Resolution: the closed registry now includes typed semantic transitions:

```text
p2.world.commit_route_state
p2.world.record_local_knowledge
p2.world.grant_permission
p2.world.revoke_permission
p2.world.commit_relationship_state
p2.world.commit_setting_flag_state
```

and pure relationship/setting predicates:

```text
p2.world.relationship_state_is
p2.world.setting_flag_state_is
```

These operations forbid raw storage paths and preserve authored/state-transition boundaries.

Result: **resolved**.

### 3.3 Registry semantic-ref regex was over-escaped in YAML

The strict executable validator exposed that the YAML `semantic_ref` regex contained an extra literal backslash before the namespace separator, causing valid refs such as `p3.character.attribute` to fail typed adapter validation.

Resolution: correct the YAML regex escape while preserving the same semantic namespace contract.

Result: **resolved**, then CI reran successfully.

## 4. Executable validation gate

P5 now has an executable CI gate rather than a documentation-only PASS declaration.

The contract validator performs all of the following:

```text
json_schema_count == 2
json_schema_draft_2020_12_meta_validation == PASS
p5_yaml_parse_count == 4
closed_registry_duplicate_check == PASS
unknown_semantic_read_check == PASS
unknown_predicate_check == PASS
unknown_domain_command_check == PASS
command_argument_type_check == PASS
declared_read_dependency_check == PASS
representative_normalized_event_schema_check == PASS
outcome_reachability_check == PASS
representative_chain_target_check == PASS
P5V001_through_P5V018_positive_control_count == 18
P5V001_through_P5V018_negative_failure_count == 18
pending_mid_choice_schema_check == PASS
pending_mid_roll_schema_check == PASS
pending_mid_reaction_schema_check == PASS
unknown_pending_schema_version_fails_closed == true
bounded_chain_fixture_check == PASS
transition_sequence_cooldown_check == PASS
recent_history_bounded_ring_check == PASS
event_count_lookup_complexity == O(1)
keyed_rng_channel_independence_fixture_check == PASS
```

A separate deterministic fixture step recomputes the frozen `p5-rng-v1` byte sequence and SHA-256 result rather than trusting stored output values:

```text
frozen_rng_vector_count == 4
sha256_digest_match_count == 4
raw_u64_big_endian_match_count == 4
bounded_result_match_count == 4
check_die_result_match_count == 2
```

The same step also verifies the discovery/insight boundary:

```text
discovery_entries_require_evidence_ref == true
only_evidence_eligible_insights_are_selectable == true
hidden_unobserved_origin_selectable == false
insight_eligibility_rng_draw_count == 0
```

P5 contract CI must be green on the final PR head before merge. A later edit that breaks these frozen artifacts therefore fails the same gate.

## 5. Issue #6 scope / exit matrix

| Requirement | Result | Evidence / conclusion |
|---|---|---|
| Event definitions and weighted eligibility | PASS | Normalized schema freezes stable IDs, trigger registration, pure eligibility, integer weights, stable ordering, repeat policy, and checked 63-bit range semantics. |
| Conditions and hidden/visible choices | PASS | Pure condition AST plus separate visibility/availability/disclosure semantics; P5V005/P5V006/P5V013 guard RNG, undeclared reads, and secret leakage. |
| P3 dice/check integration | PASS | Registered check adapter preserves one Attribute, at most one Competence, bounded Context, immutable 2d6, outcome band and doubles overlay. |
| Outcomes, flags, chains and cooldowns | PASS | Ordered outcomes/effects, bounded chain queue, explicit P5-owned writes, transition-sequence cooldowns and prevalidated domain commands are frozen and executable fixtures pass. |
| Random insight/discovery | PASS | Evidence-bounded eligibility, stable sorting, dedicated `insight.select` stream, typed knowledge/narrative write boundary, and zero eligibility RNG are frozen; boundary fixture is executable. |
| Seeded RNG | PASS | 16-byte run seed, keyed channel/subject/index derivation, fixed SHA-256 counter vectors and rejection-sampled bounded integers are frozen; all four fixed vectors recompute exactly. |
| Replay/debug trace | PASS | Required authoritative trace fields and player-safe projection boundary are frozen; pending instances retain selected/rolled state instead of regenerating it. |
| Event history / anti-repeat | PASS | O(1) count/last-transition indexes plus bounded recent ring; no unbounded routine history scan. |
| Content validation | PASS | `P5V001..P5V018` each has a passing control and intended-layer failing case; CI executes the complete catalog. |
| Human/social events | PASS | Batch 03 fixture has a genuinely human immediate cause and commits typed relationship state. |
| Survival/environment events | PASS | Batch 03 route-failure fixture uses the same schema plus P3 check/reaction and typed route/fatigue effects. |
| Persistent relationship/faction chains | PASS | Two normalized chain steps use typed relationship, permission, and local-knowledge transitions with no bespoke engine path. |
| Pokémon ecological/direct interaction | PASS | Ordinary living direct-interaction fixture uses P4 route eligibility and `record_direct_interaction` without capture/ownership inference. |
| Mixed human/Pokémon content | PASS | One normalized fixture combines human route-user conflict, Pokémon capability evidence, relationship state, and route state through the same effect plan. |
| Exceptional D-034 chronology path | PASS | Separate normalized fixture uses the registered exceptional chronology command without routine spawn, native-origin rewrite, or reusable time travel. |
| No separate faction/Pokémon engine | PASS | All seven Batch 03 representatives validate against the same normalized schema, condition language, command registry, outcome, chain, RNG, and pending semantics. |
| Typed upstream ownership | PASS | P2/P3/P4 writes use registered commands; direct P5 writes remain restricted to P5 narrative/event state. |
| Presentation-independent implementation contract | PASS | Event/pending schemas and adapters are implementation-neutral; presentation uses stable refs and resolved player-safe views. |

## 6. D-035 shared-world-surface proof

`docs/P5_BATCH_03_REPRESENTATIVE_EVENTS.yaml` contains seven schema/semantic fixtures and intentionally contains no production lore.

```text
human_social_non_pokemon_immediate_cause_event_count == 1
survival_environment_event_count == 1
persistent_faction_chain_step_count == 2
pokemon_ecology_direct_event_count == 1
mixed_human_pokemon_event_count == 1
d034_exceptional_path_event_count == 1
check_reaction_event_count == 1
bespoke_engine_path_count == 0
p2_raw_write_count == 0
```

The faction chain is represented as ordinary event records plus queued chain steps. The mixed event is represented as an ordinary event whose declared reads/commands cross P2/P4 ownership through registered adapters. Neither requires another runtime subsystem.

Result: **PASS**.

## 7. Pending-event / reload determinism audit

The final pending schema and fixtures prove three important resume points:

### Awaiting choice

No choice, check result, consequence or reaction may be silently manufactured on reload.

### Awaiting roll

The selected choice is pinned, but no completed check is fabricated before the authoritative roll occurs.

### Awaiting reaction

The completed dice/check result and pending consequence/window are pinned. Reload restores them exactly and cannot reroll/reselect.

Unknown pending schema versions fail closed; a different content digest requires a pinned content pack or explicit migration. Silent reroll/reselection is forbidden.

Result: **PASS**.

## 8. Determinism and RNG audit

Authoritative randomness is keyed by:

```text
run_seed
content_pack_id/version
origin_transition_seq
trigger_id
channel
subject_id
draw_index
```

Consequences:

- eligibility consumes no RNG;
- one unrelated `insight.select` draw cannot shift later `event.select` or `check.d6` draws;
- adding a debug draw in another channel does not mutate an opaque global gameplay cursor;
- exactly one positive event candidate consumes no selection draw;
- bounded selection uses rejection sampling rather than modulo bias;
- the frozen vectors are executable cross-language reference values for P7.

Result: **PASS**.

## 9. Performance / complexity audit

P5 remains transition-driven rather than frame-driven.

```text
per_render_event_scan_required == false
per_frame_event_scan_required == false
trigger_index_required == true
eligibility_evaluated_on_committed_transitions == true
event_count_lookup_complexity == O(1)
last_resolved_transition_lookup_complexity == O(1)
recent_history_capacity_max == 64
unbounded_recent_history_scan_required == false
continuous_species_ecology_simulation_required == false
runtime_reparse_of_static_contract_required == false
```

P7 may choose concrete data structures, but it must preserve these asymptotic/transition boundaries and should load/validate normalized content once rather than repeatedly reparsing static schemas or event definitions in hot paths.

Result: **PASS**.

## 10. P3 contradiction audit

P5 preserves P3's frozen rules:

```text
core_check_is_2d6_plus_attribute_plus_at_most_one_competence_plus_bounded_context == true
generic_fate_or_reroll_currency_created == false
recorded_dice_edit_after_roll_allowed == false
emergency_item_edits_dice_or_outcome_band == false
generic_character_level_or_kill_xp_created == false
generic_pokemon_handling_skill_created == false
human_only_zero_companion_run_remains_valid == true
per_frame_survival_or_progression_polling_required == false
```

The survival/check/reaction representative uses the registered P3 command/check surface instead of reimplementing P3 arithmetic in event content.

Result: **PASS**.

## 11. P4 / D-034 contradiction audit

P5 preserves the completed P4 contract:

```text
portable_containment_created == false
Pokeball_or_PC_storage_created == false
generic_capture_command_created == false
generic_evolution_command_created == false
generic_pokemon_loot_command_created == false
generic_stacking_companion_bonus_created == false
zero_companion_full_run_remains_valid == true
ordinary_direct_interaction_command_exists == true
exceptional_chronology_interaction_command_exists == true
chronology_anomaly_as_routine_spawn_allowed == false
native_origin_rewrite_allowed == false
reusable_generic_time_travel_created == false
p4_D034_authoring_coverage_151_of_151_preserved == true
```

P5 does not claim P9's later implementation-level `151/151` content proof. It preserves a common direct-interaction surface plus exceptional chronology path so P9 can realize every P4-authored route without reopening P5 architecture.

Result: **PASS**.

## 12. `0/3` companion audit

The original foundation includes explicit with-companion versus zero-companion parity. Batch 03's seven representative world-surface fixtures require no companion command or companion presence.

Therefore ordinary human/social, survival, faction, mixed-world and Pokémon direct-interaction content can all exist in a run whose visible companion count remains zero.

Result: **PASS**.

## 13. P7 architecture boundary

P5 intentionally does **not** freeze:

- framework/runtime;
- database/save-file implementation;
- in-memory container types;
- serialization library;
- UI framework;
- application deployment architecture;
- asset/resource technology.

The schemas freeze semantic records and validation contracts only. Pending state names the semantic fields that must survive reload, while storage ownership remains downstream.

Result: **PASS — no premature P7 architecture choice introduced**.

## 14. Human Design Gate audit

No unresolved owner-level creative decision blocks implementation of the P5 contract.

D-035 already approves the world-content direction and defers final faction names/count/symbols/leaders/antagonist/endings to the later content-authoring gates that own those choices. P5 needs only the shared generic execution surface, which is now proven.

```text
blocking_p5_human_design_gate_count == 0
blocking_schema_gap_count == 0
blocking_adapter_gap_count == 0
```

Result: **PASS**.

## 15. Final exit invariant

```text
contract_version == p5-event-contract-v1
normalized_event_schema_valid == true
pending_event_schema_valid == true
closed_semantic_and_command_registry_valid == true
P5V001_through_P5V018_executable == true
frozen_rng_vectors_recompute_exactly == true
pending_resume_mid_choice_mid_roll_mid_reaction_valid == true
bounded_history_and_transition_cooldown_valid == true
discovery_evidence_boundary_valid == true
D035_shared_world_surface_valid == true
p2_world_typed_mutation_gap_count == 0
p3_contradiction_count == 0
p4_contradiction_count == 0
zero_companion_run_blocker_count == 0
per_frame_or_per_render_scan_requirement_count == 0
blocking_human_design_gate_count == 0
```

Observed result: **PASS**, conditional only on the final branch CI remaining green through merge.

## 16. Verdict

**P5 EXIT AUDIT: PASS.**

P5 has a deterministic, data-driven, implementation-ready world-event contract that supports the full approved event breadth through one shared engine while preserving P2/P3/P4 authority and the P7 architecture boundary.

After this audit, registry, representative fixtures, validator and CI workflow merge to `main`:

```text
P5_status == COMPLETE
issue_6_may_close == true
P6_issue_12_unblocked == true
P7_may_begin_before_P6 == false
```

The next core phase is **P6 — Resource and asset strategy, sourcing, provenance, and mobile budget (#12)**.

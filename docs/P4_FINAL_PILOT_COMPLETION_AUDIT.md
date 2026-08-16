# P4 Final Pilot Completion Audit

Status: **PASS — Lapras/Mew eligible for promotion**  
Date: **2026-08-16**  
Tracks: **#5**

Audited artifacts:

- `docs/P4_FINAL_DOSSIER_131_LAPRAS.md`
- `docs/P4_FINAL_DOSSIER_151_MEW.md`
- historical pilot sources in `docs/P4_PILOT_FULL_SCHEMA_DOSSIERS.md`
- `docs/P4_PILOT_EVIDENCE_AND_HAZARD_PACKETS.md`
- final frozen `docs/P4_SPECIES_DOSSIER_SCHEMA.md`
- binding `docs/P4_ALL_151_DIRECT_ENCOUNTER_CONTRACT.md` (D-034)
- all P2/P3/P4 contracts accumulated through Batch 21

## 1. Purpose

This is the final promotion gate for the only two remaining `pilot_reviewed` manifest rows. It does not re-open the frozen schema and it does not rewrite the historical pilot artifacts. It asks whether #131 Lapras and #151 Mew can be represented as final `complete` dossiers under the contracts that were added after the original pilot.

Promotion is atomic only if both dossiers pass all 20 final completion rules, D-034, regression boundaries, and the no-blocking-gate check.

## 2. Genuine final-contract gap found

Exactly one material completion gap existed relative to the post-pilot contracts:

```text
Lapras_D034_gap == false
Mew_D034_gap_before_final_promotion == true
```

Lapras already had a living cooperative crossing premise with meaningful communication/refusal/route interaction, so D-034 required clarification rather than a design change.

The original Mew pilot deliberately demonstrated **Mythical indirect presence**. That was valid when the pilot was written, but D-034 later replaced the interpretation that rumor, traces, fleeting observation, or indirect confirmation could be the species' only gameplay presence.

The final Mew dossier therefore adds one narrow D2 content guarantee:

```text
rare_authored_chain
  -> actual_living_Mew
  -> voluntary_reveal_state
  -> meaningful_noncoercive_player_interaction_choice
```

This does **not** create a normal spawn table, a natural ancient population claim, routine friendliness, capture, containment, companionship, combat obligation, or unlimited Psychic capability.

Result: **PASS**.

## 3. Deterministic rating reproduction

Pinned mapping remains:

```text
raw < 40    -> 1
40..59      -> 2
60..79      -> 3
80..99      -> 4
100..119    -> 5
>=120       -> 6
```

Reproduction:

```text
Lapras  130/85/80/85/95/60      -> 6/4/4/4/4/3
Mew     100/100/100/100/100/100 -> 5/5/5/5/5/5
manual_rating_exception_count == 0
```

Result: **PASS**.

## 4. Final 20-rule schema audit

| Rule | Lapras | Mew | Notes |
|---|---|---|---|
| 1. Stable unique identity | PASS | PASS | #131 / #151 and stable keys preserved |
| 2. Provenance reviewed | PASS | PASS | reviewed pilot claims retained; D-034 D2 bridge explicit |
| 3. Raw six stats | PASS | PASS | all source values retained separately from mechanics |
| 4. Pinned six-axis profile | PASS | PASS | `p4-six-axis-v1`, no manual exception |
| 5. Capability/hazard audit | PASS | PASS | open-water and observation-evasion records are explicit |
| 6. Ancient-strength treatment | PASS | PASS | no global ancient stat inflation |
| 7. Ecology + signs | PASS | PASS | unknown population/ecology remains explicit rather than fabricated |
| 8. Human perception/culture | PASS | PASS | no universal ferry culture or universal Mew mythology |
| 9. Identification progression | PASS | PASS | P5-usable recognition/uncertainty states preserved |
| 10. Threat/check hooks | PASS | PASS | cooperation/environment and access/permission are separated |
| 11. Individual variation | PASS | PASS | Lapras bounded; Mew does not stack generic elite logic |
| 12. Companionship | PASS | PASS | Lapras eligible by voluntary bond; Mew baseline path forbidden |
| 13. P3 mechanical review | PASS | PASS | no second modifier economy or invalid-plan TN inflation |
| 14. Hunting/material treatment | PASS | PASS | no automatic loot or mythical harvesting loop |
| 15. Technology/craft | PASS | PASS | explicit `none`; no ownership shortcut |
| 16. Emergency consumables | PASS | PASS | explicit `none` |
| 17. Narrative/event hooks | PASS | PASS | both now include actual living direct-encounter routes |
| 18. P6 follow-up | PASS | PASS | explicit and scoped |
| 19. Cross-species refs | PASS | PASS | no unresolved mandatory-family reference |
| 20. No hidden blocker | PASS | PASS | no blocking Human Design Gate |

```text
required_section_count_per_dossier == 20
Lapras_schema_rule_pass_count == 20
Mew_schema_rule_pass_count == 20
blocking_human_design_gate_count == 0
```

Result: **PASS**.

## 5. D-034 direct-encounter audit

### #131 Lapras

```text
actual_living_individual == true
playable_direct_encounter_route == true
meaningful_direct_interaction == voluntary_cooperation_or_refusal_and_route_negotiation
routine_random_spawn_required == false
natural_ancient_population_claim_required == false
capture_or_containment_required == false
companion_relationship_required == false
```

The exact baseline-era population remains unresolved. D-034 allows that because ordinary natural presence and total-game encounter availability are separate questions.

### #151 Mew

```text
actual_living_individual == true
playable_direct_encounter_route == true
meaningful_direct_interaction == noncoercive_player_response_during_voluntary_reveal_state
routine_random_spawn_required == false
common_or_stable_population_created == false
capture_or_containment_required == false
companionship_path_created == false
combat_boss_requirement_created == false
```

Mew may still become unobservable when it chooses to hide. D-034 only requires that the authored total-game route can reach a valid direct state; it does not erase observation-evasion semantics.

Result: **PASS**.

## 6. One-entity / action-economy regression

```text
Lapras_one_individual_one_ordinary_turn_health_state_initiative_presence == true
Mew_one_individual_one_ordinary_turn_health_state_initiative_presence == true
one_visible_companion_slot_per_bonded_individual == true
Mew_companion_slot_path_created == false
multiple_capabilities_equal_extra_actions == false
player_level_enemy_scaling_created == false
continuous_species_simulation_created == false
```

Result: **PASS**.

## 7. Hazard and player-agency regression

```text
Lapras_open_water_hazard_is_environment_and_position_based == true
Lapras_high_stats_equal_hostility == false
Lapras_crossing_success_equal_ownership == false
Mew_observation_evasion_uses_permission_state_not_TN_inflation == true
Mew_direct_encounter_forces_capture_combat_or_bond == false
Mew_direct_encounter_removes_player_input == false
automatic_Fear_or_injury_created == false
```

Result: **PASS**.

## 8. Chronology / provenance / rarity regression

```text
Lapras_exact_ancient_population_fabricated == false
Mew_exact_ancient_population_fabricated == false
Mew_mythical_rarity_weakened == false
Mew_qualified_genetic_claim_equal_omniscience == false
Psychic_type_equal_unlimited_capability == false
D034_encounterability_equal_commonness == false
D034_encounterability_equal_baseline_natural_spawn == false
```

Result: **PASS**.

## 9. Companionship / resource / craft regression

```text
Lapras_companionship_requires_voluntary_long_term_trust == true
Lapras_transport_is_guaranteed_service == false
Mew_companionship_classification == inappropriate_or_impossible_baseline
defeat_or_direct_sighting_equal_recruitment == false
portable_containment_created == false
generic_material_conversion_allowed == false
Mew_harvest_or_industry_loop_created == false
Lapras_owned_transport_industry_created == false
```

Result: **PASS**.

## 10. Runtime boundary

Both dossiers remain data/event-state authoring inputs. Later runtime may cache coarse authored states such as:

- Lapras cooperation/refusal and crossing-environment state;
- Mew evidence-chain, observation-access, and voluntary-reveal state.

Neither dossier requires per-frame species-rule scans, continuous behavior solvers, continuous exposure polling, or appendage/entity sub-simulation.

```text
per_frame_species_rule_scanning_required == false
continuous_hazard_polling_required == false
continuous_physics_or_behavior_solver_required == false
cached_or_event_triggered_state_preferred == true
```

Result: **PASS**.

## 11. Promotion decision

Both final dossiers satisfy the frozen schema and all binding contracts through Batch 21.

Approved atomic manifest mutation:

```text
131 lapras pilot_reviewed -> complete  authoring_batch=FINAL-pilot-promotion
151 mew    pilot_reviewed -> complete  authoring_batch=FINAL-pilot-promotion
```

Expected post-promotion manifest state:

```text
dossier_complete_count == 151
pilot_reviewed_count == 0
not_started_count == 0
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

**Final pilot promotion gate: PASS.**

The project may run the mandatory whole-roster P4 exit audit after this atomic manifest promotion. P5 remains blocked until that separate exit audit also passes.

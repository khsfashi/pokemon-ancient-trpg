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
- The world-content direction is **Pokémon-shaped society, not Pokémon-only events**: every major world structure must be materially shaped by Pokémon existence, while individual events may have genuinely human or environmental immediate causes.
- P9 full content must include substantive ordinary human/social, survival, exploration/mystery, relationship, faction, mixed-world and Pokémon content; several recurring major factions are required, with a current planning target of roughly 4–6 faction lanes.
- Major factions must arise from Pokémon ecology/capability/sacredness/knowledge/exploitation/protection/coexistence/anomaly or another approved Pokémon-world causal bridge rather than generic medieval organizations with Pokémon decoration.
- `p5-event-contract-v1` is frozen: event evaluation is transition-driven, content is data-driven, authoritative RNG is keyed/deterministic, pending events reload without reroll/reselection, upstream mutations use typed commands, and ordinary/faction/mixed/Pokémon content uses one engine surface.

World/faction contract: `docs/WORLD_CONTENT_AND_FACTION_CONTRACT.md`

## Completed phases

```text
P0 Governance                         COMPLETE
P1 Reference/API/data/resource/IP     COMPLETE
P2 World bible and setting contract   COMPLETE
P3 Core TRPG rules/character model    COMPLETE
P4 Pokémon adaptation + Gen-I 151     COMPLETE
P5 Narrative world-event engine       COMPLETE
```

## P4 final state

P4 issue: **#5**  
Strict exit audit: `docs/P4_EXIT_AUDIT.md`  
Coverage audit: `docs/P4_SPECIES_COVERAGE_MANIFEST_AUDIT.md`  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`

```text
mandatory_species_ids == {1..151}
dossier_complete_count == 151
source_review_complete_count == 151
blocking_p4_gate_count == 0
```

Result: **PASS**.

P5/P9 must continue preserving:

- D-034 authoring coverage is `151/151`; P9 owns implementation-level final coverage proof.
- direct encounterability does not imply natural baseline presence, commonness, capture, companionship or one-run availability.
- Lapras supports living noncoercive direct interaction; success never implies ownership.
- Mew remains mythical/singular and may appear only through a rare authored stateful direct-interaction chain, not routine spawn/capture/companion/boss logic.
- Porygon/other chronology anomalies never rewrite canonical origin or create reusable generic time travel.
- no portable containment, player-level enemy scaling, generic Pokémon loot/material economy, generic evolution command, continuous species simulation or per-frame all-species rule scanning.

## P5 final state

P5 issue: **#6**  
Strict exit audit: `docs/P5_EXIT_AUDIT.md`  
Foundation contract: `docs/P5_DETERMINISTIC_EVENT_FOUNDATION_CONTRACT.md`  
Normalized schema: `docs/P5_NORMALIZED_EVENT_SCHEMA.json`  
Pending schema: `docs/P5_PENDING_EVENT_STATE_SCHEMA.json`  
Adapter registry: `docs/P5_DOMAIN_ADAPTER_REGISTRY.yaml`  
Validation fixtures: `docs/P5_BATCH_02_VALIDATION_FIXTURES.yaml`  
Shared-surface fixtures: `docs/P5_BATCH_03_REPRESENTATIVE_EVENTS.yaml`  
Executable validator: `tools/validate_p5_contract.py`  
Determinism fixture check: `tools/check_p5_rng_fixture.py`  
CI: `.github/workflows/p5-contract-validation.yml`

Strict exit results:

```text
contract_version == p5-event-contract-v1
json_schema_count == 2
json_schema_draft == 2020-12
p5_yaml_parse_count == 4
P5V001_through_P5V018_positive_control_count == 18
P5V001_through_P5V018_negative_failure_count == 18
representative_normalized_event_count == 7
frozen_rng_vector_count == 4
frozen_rng_vector_recompute_match_count == 4
pending_mid_choice_resume_valid == true
pending_mid_roll_resume_valid == true
pending_mid_reaction_resume_valid == true
unknown_pending_schema_version_fails_closed == true
discovery_entries_require_evidence == true
insight_eligibility_rng_draw_count == 0
unbounded_history_scan_required == false
event_count_lookup_complexity == O(1)
per_render_or_per_frame_event_scanning == false
p2_world_typed_mutation_gap_count == 0
p3_contradiction_count == 0
p4_contradiction_count == 0
zero_companion_run_blocker_count == 0
blocking_p5_human_design_gate_count == 0
```

D-035 shared-world proof on one schema/registry surface:

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

Typed P2 world transitions frozen for downstream event implementation:

```text
p2.world.commit_route_state
p2.world.record_local_knowledge
p2.world.grant_permission
p2.world.revoke_permission
p2.world.commit_relationship_state
p2.world.commit_setting_flag_state
```

Strict Batch 03 also found and resolved three real contract defects before closure:

1. the Batch 02 mid-reaction pending fixture did not conform to the frozen pending schema;
2. D-035 exposed a missing typed P2/world mutation surface;
3. the YAML semantic-ref regex was over-escaped and rejected valid semantic refs.

The final P5 CI reruns the schemas/registry/fixtures plus fixed `p5-rng-v1` vectors and discovery evidence boundary. Result: **PASS**.

## Current phase

**P6 — Resource and asset strategy, sourcing, provenance, and mobile budget (#12) is active.**

P6 goal: convert the finished P2-P5 design into an exact production resource contract **before** P7 chooses the runtime/application architecture.

P6 must freeze:

- required / optional / deferred asset inventory;
- selected source or production method per asset class;
- provenance, license, Pokémon-IP and redistribution classification;
- public-repository inclusion vs build-time fetch/generation policy;
- stable resource IDs and manifest design;
- preprocessing/normalization/validation rules;
- fallback behavior;
- mobile payload, decoded-memory, audio, preload/cache/eviction budgets;
- explicit constraints handed to P7.

P6 must **not**:

- assume fan-project/public-repository status grants redistribution rights;
- commit large Pokémon/third-party asset corpora before rights/provenance classification;
- choose the application framework or save/runtime architecture;
- default to runtime resize/reconversion/reparsing when build-time normalization can remove it;
- duplicate loaded/downloaded resources when stable IDs + caching can reuse them;
- invent material art direction or illustration-density choices when several valid product directions remain — raise a Human Design Gate instead.

## Exact next work

Start **P6 Batch 01 — resource requirements matrix + source refresh**:

1. derive a required/optional/deferred asset-class inventory directly from P2-P5 presentation/gameplay needs before choosing sources;
2. reopen `docs/P1_RESOURCE_ECOSYSTEM_RECON.md` and `docs/SOURCE_REGISTRY.md`, then refresh only the explicit P6 candidates against current primary sources rather than doing another broad discovery sweep;
3. evaluate Pokémon visuals first (`PokéAPI sprites` vs `PokéSprite` vs deliberate omission/project-created presentation), separating technical convenience from redistribution rights;
4. separately classify Pokémon cries, fonts (`Pretendard`, `Noto Sans CJK/Korean`), generic UI icons (`Lucide`, `Material Symbols`, project-owned SVG/CSS), Kenney packs, individually classified Freesound/OpenGameArt candidates, and project-created/generated resources;
5. create `docs/RESOURCE_STRATEGY.md` with a versioned provenance/resource-manifest schema that records stable resource ID, source, rights holder/author, license/IP boundary, exact version/hash, redistribution mode, preprocessing recipe and fallback policy;
6. establish an evidence-backed budget methodology for initial payload, decoded image memory, audio memory/streaming, per-region preload and cache lifetime; do not invent final numeric targets without measured candidate assets;
7. prefer source pinning + build-time normalization + cached runtime lookup; avoid runtime resize/reparse and duplicate resource instances/downloads;
8. if exact art style, sprite family, background illustration density or comparable presentation choice cannot be resolved objectively from the frozen product needs, stop only at the smallest P6 Human Design Gate and present 2–4 concrete options with a recommendation;
9. leave P7 (#7) blocked until P6 exit passes.

Primary P1 revisit list:

```text
Pokemon visuals: PokéAPI sprites, PokéSprite
Pokemon cries:   PokéAPI cries
Fonts:            Pretendard, Noto Sans CJK/Korean
Generic UI:       Lucide, Material Symbols, project-owned SVG/CSS
Generic packs:    Kenney individual packs
Ambience/SFX:     Freesound individual classified assets only
General art/audio: OpenGameArt individual classified assets only
Alternative:      project-created/generated resources with retained provenance
```

Do **not** begin P7 before P6 closes.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

P8 must prove a mixed world loop: settlement/social pressure + travel/survival + persistent faction/relationship thread + Pokémon ecology/direct interaction, while preserving a complete `0/3` path.

P9 exit still requires both:

```text
world_content_breadth_audit == PASS
recurring_major_factions_realized == true
major_faction_planning_target_range == 4..6
major_factions_are_pokemon_shaped == true
all_151_living_direct_interaction_paths == true
indirect_presence_alone_satisfies_D034 == false
```

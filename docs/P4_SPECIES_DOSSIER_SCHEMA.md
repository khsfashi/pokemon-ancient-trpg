# P4 Species Dossier Schema

Status: **ACTIVE — P4 authoring/validation schema**  
Date: **2026-08-15**  
Depends on: `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, D-011, D-013, D-016 through D-022, D-024, D-028, D-030, D-031

## 1. Purpose

This document freezes the stable authoring shape for all mandatory Generation-I species dossiers.

It is intentionally stricter than an essay outline. The goal is that P4 can later convert these conceptual keys into machine-validated YAML/JSON without rewriting the content model, while P5 can consume common fields without species-specific hard-coded exceptions.

A dossier is **substantive** only when required sections are populated with reviewed content or an explicit schema-legal absence value such as `none`, `not_applicable`, `unknown`, or `intentionally_unresolved`.

`TODO`, placeholder prose, empty required sections, or copied Pokédex text without derivation do not count as complete.

## 2. Stable identity

Every dossier must have a stable header equivalent to:

```yaml
identity:
  national_dex: 1..151
  species_key: stable-project-key
  official_name_en: string
  official_name_ko: string-or-pending-localization
  evolution_family_keys: []
  mandatory_gen1_roster: true
  dossier_status: draft | pilot_reviewed | complete
```

Rules:

- `national_dex` is the authoritative coverage key.
- `species_key` must remain stable after P4 publication.
- Forms outside the mandatory original 151 baseline do not silently create extra mandatory rows.
- Later-generation evolutions/forms remain references only unless separately approved.

## 3. Provenance

Every dossier must provide claim-level or grouped provenance sufficient to preserve D-018.

```yaml
provenance:
  reviewed: true | false
  source_revision_refs: []
  official_evidence:
    - claim_id: string
      evidence_class: C1 | C2
      source_ref: string
      version_context: string-or-none
      paraphrase: string
  derived_claims:
    - claim_id: string
      evidence_class: D1 | D2 | U
      based_on: [claim_id]
      statement: string
      canon_boundary_note: string
```

Rules:

- Do not paste large copyrighted flavor-text passages.
- Paraphrase evidence and preserve a source/version pointer.
- `U` cannot silently become binding shared lore.
- Material D2 claims must be visibly project-authored.

## 4. Canonical source data

The canonical-source section preserves source inputs separately from project mechanics.

```yaml
canonical_source_data:
  types: []
  base_stats_raw:
    hp: integer
    attack: integer
    defense: integer
    special_attack: integer
    special_defense: integer
    speed: integer
  abilities_relevant_to_p4: []
  moves_or_move_families_relevant_to_p4: []
  physical_metadata:
    height: source-value-or-unknown
    weight: source-value-or-unknown
  evolution_source:
    evolves_from: key-or-none
    evolves_to: []
    canonical_conditions: []
  other_material_facts: []
```

Not every exposed upstream field belongs here. Import only fields that materially support P4 domain work or later validation.

Raw base stats remain source data. They are never human-roll modifiers.

## 5. Species stat profile

Every dossier receives the six-axis P4 species baseline.

```yaml
species_stat_profile:
  rating_scale_version: string
  vigor: integer
  force: integer
  guard: integer
  potency: integer
  resistance: integer
  speed: integer
  derivation_notes:
    vigor: string
    force: string
    guard: string
    potency: string
    resistance: string
    speed: string
  calibration_flags: []
```

Requirements:

- all six axes are present;
- ratings use the current P4 small-number calibration, not canonical raw values;
- derivation is reproducible from the selected normalization rules plus explicit species-specific exceptions;
- any manual exception must have a reason and evidence class;
- there is no required summed combat-power field.

During the hazard-first pilot, `rating_scale_version` may be an explicit provisional identifier such as `pilot-unpinned` or a named calibration candidate. A dossier carrying an unpinned scale remains `draft` and does not satisfy the completion rule for the eventual `151/151` audit. After pilot review the selected scale must be pinned for batch authoring.

## 6. Capabilities and hazards

```yaml
capabilities_and_hazards:
  locomotion: []
  physical_hazards: []
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: []
  utility_interaction_capabilities: []
  immunities_or_approach_invalidators: []
  hazard_records:
    - hazard_key: stable-key
      kind: venom | toxin | burn | electrical | respiratory | entanglement | drowning | psychic | ghost | other
      delivery_or_exposure: []
      prerequisite_or_trigger: []
      warning_signs: []
      immediate_effects: []
      delayed_or_persistent_effects: []
      ordinary_consequence_ceiling: string
      exceptional_consequence_ceiling: string-or-none
      countermeasures: []
      emergency_consumable_hooks: []
      context_amplifiers: []
      context_mitigators: []
      governing_species_axes: []
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: []
  notes: []
```

Rules:

- tags require source/derivation support;
- tags are permissions/hazard semantics, not automatic flat modifiers;
- an empty category is valid;
- do not generate a tag merely because a main-series move exists if the dossier cannot justify it as a meaningful ancient-world capability;
- a material hazard that can change consequence type, timing, ceiling or required countermeasure needs an explicit `hazard_record` rather than only a loose tag;
- `delivery_or_exposure` and post-exposure consequence are separate semantics;
- `governing_species_axes` may affect landing, sustaining or resisting the hazard but **never cap its consequence severity**;
- low ratings do not imply a harmless hazard and high ratings do not imply aggression or lethality;
- a capability that is purely permissive/utility and has no separate consequence semantics may remain a tag without a `hazard_record` when the dossier makes that boundary clear.

## 7. Ancient-strength treatment

```yaml
ancient_strength:
  classifications:
    - canon_historical_change
    - stronger_ancient_lineage
    - local_stronger_lineage
    - behaviorally_harsher
    - ecologically_more_dangerous
    - similar_to_modern_baseline
    - unchanged
    - unresolved
  evidence_class: C1 | C2 | D1 | D2 | U
  rationale: string
  stat_effect_if_any: string-or-none
  behavior_effect_if_any: string-or-none
  canon_boundary_note: string
```

A dossier may use multiple compatible classifications when needed.

Global `all ancient Pokémon +N` logic is forbidden.

## 8. Ancient ecology

```yaml
ancient_ecology:
  habitat: []
  ecological_niche: []
  activity_pattern: []
  seasonal_notes: []
  feeding_and_resource_interaction: []
  social_structure: []
  predator_prey_competitor_links: []
  environmental_effects: []
  observable_signs: []
  locality_constraints: []
  unsupported_gaps: []
```

Requirements:

- modern Kanto associations are not automatically timeless habitat facts;
- ecology must distinguish evidence from project extrapolation;
- `unknown` is preferred to pseudo-canon.

## 9. Human perception and culture

```yaml
human_perception_and_culture:
  ordinary_attitude: []
  specialist_knowledge_holders: []
  benefits_and_services: []
  fears_and_avoidance: []
  myths_omens_taboos: []
  practical_customs: []
  common_misbeliefs: []
  local_variation_notes: []
```

Do not invent a region-wide institution or universal belief simply to populate a field.

## 10. Identification and knowledge

```yaml
identification_and_knowledge:
  baseline_recognition: common | specialist | rare | mythical | locality_dependent
  unknown_presentation_hooks: []
  local_aliases_or_titles: [] | none
  identification_evidence: []
  initial_knowledge_fragments: []
  post_identification_knowledge: []
  advanced_insights: []
  exceptional_individual_knowledge_hooks: []
```

Rules:

- `identified` does not equal complete knowledge;
- unknown labels use observable or learned information only;
- local aliases are optional and purposeful;
- a named individual may have its own rumor/recognition track.

## 11. Threat and encounter profile

```yaml
threat_and_encounter:
  baseline_threat_band: string
  default_behavior_states: []
  aggression_tendency: string
  territoriality: string
  avoidance_tendency: string
  warning_signs: []
  encounter_triggers: []
  escalation_triggers: []
  deescalation_conditions: []
  pursuit_profile: string-or-none
  group_size_effects: []
  ordinary_consequence_categories: []
  consequence_ceiling: string
  human_check_hooks:
    - action: string
      relevant_species_axis: vigor | force | guard | potency | resistance | speed | none
      relevant_tags: []
      relevant_hazard_keys: []
      difficulty_guidance: string
      notes: string
```

`baseline_threat_band` is an authoring summary, not a replacement for stats/tags/behavior.

Ordinary late-game triviality is legal. A dossier does not need to preserve combat relevance forever.

A human action may contest a species axis, a capability/hazard permission, or both. The difficulty to avoid exposure and the consequence after exposure must not be collapsed into one number merely for convenience.

## 12. Individual variation

```yaml
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: string
    temperament_variants: []
    condition_variants: []
    local_lineage_variants: []
  exceptional_individuals:
    allowed: true | false
    rarity_guidance: string
    candidate_causes: []
    rating_shift_guidance: string
    required_distinctive_traits: []
    warning_or_rumor_hooks: []
  named_apex_examples: []
```

Rules:

- ordinary variation should stay modest;
- exceptional variation can be large when justified;
- exceptional individuals require a world reason, not player-level scaling;
- a low-tier species may produce a boss-grade named individual;
- an unevolved exceptional individual may exceed an ordinary evolved specimen in selected axes;
- named/apex examples are optional until content actually needs one, except the P4 pilot must include at least one.

### 12.1 Exceptional individual sub-profile

When a dossier or event authors a concrete exceptional individual, it should be representable as:

```yaml
individual_profile:
  individual_id: stable-key
  species_key: stable-key
  status: exceptional | named_apex
  display_identity: string-or-knowledge-gated
  stat_deltas:
    vigor: integer
    force: integer
    guard: integer
    potency: integer
    resistance: integer
    speed: integer
  added_tags: []
  removed_or_weakened_tags: []
  distinctive_traits: []
  history_or_cause: string
  evidence_class: D1 | D2 | U
  known_warning_signs: []
  encounter_state_overrides: []
  persistent_state_requirements: []
```

## 13. Companionship

```yaml
companionship:
  classification: eligible | exceptional_only | inappropriate_or_impossible_baseline
  prerequisites: []
  trust_building_paths: []
  reasons_to_stay: []
  rejection_or_departure_reasons: []
  human_social_costs: []
  logistics:
    food: []
    water: []
    shelter_temperature: []
    space_travel: []
    settlement_restrictions: []
    special_resources: []
  assistance_capabilities: []
  handling_boundaries: []
  separation_injury_notes: []
```

No dossier may assume defeat/capture equals companionship.

## 14. Mechanical hooks

```yaml
mechanical_hooks:
  tracking_clues: []
  avoidance_preparation: []
  resistance_or_protection: []
  combat_approach_permissions: []
  blocked_or_invalid_approaches: []
  fear_hooks: []
  injury_hazard_hooks: []
  environmental_state_hooks: []
  companion_assistance_hooks: []
  fortune_spike_opportunities: []
  trouble_spike_complications: []
```

Hooks must fit D-024/D-025 and must not create a second uncontrolled modifier economy.

## 15. Hunting, materials and resources

```yaml
hunting_materials_and_resources:
  killing_treatment: string
  hunting_for_food: [] | none
  shed_or_abandoned_materials: [] | none
  natural_remains: [] | none
  dangerous_harvesting: [] | none
  taboo_or_protection: [] | none
  exact_notable_material_ids: []
  generic_material_conversion_allowed: true | false
  conversion_conditions: []
```

Defeat never means automatic loot.

## 16. Technology and craft

```yaml
technology_and_craft:
  hook: none | present
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: string-or-none
  local_dependency: []
  scalability_limits: []
  ownership_shortcut_forbidden: true
  evidence_class: C1 | C2 | D1 | D2 | U | not_applicable
```

`none` is a preferred valid answer when no strong causal bridge exists.

## 17. Emergency consumable hooks

```yaml
emergency_consumable_hooks:
  hooks: [] | none
```

Each actual hook must eventually specify:

```yaml
item_concept:
  hazard_tags: []
  timing: preparation | reaction | recovery
  effect_boundary: string
  exclusions: []
  source_or_material_basis: []
  evidence_class: C1 | C2 | D1 | D2 | U
```

A hook cannot alter rolled dice or become a universal failure-cancel item.

## 18. Narrative and event hooks

```yaml
narrative_and_event_hooks:
  peaceful: []
  dangerous: []
  unusual_or_rare: []
  discovery_insight: []
  route_environment: []
  settlement_culture: []
  cross_species: []
```

Target: at least three reusable premises/state hooks for ordinary substantive species where appropriate.

A species that is intentionally indirect/legendary may satisfy this through myths, traces, environmental consequences or event chains rather than three direct encounters.

## 19. Presentation and P6 follow-ups

```yaml
presentation_and_p6_followups:
  initial_bestiary_presentation: string
  progressive_reveal_notes: []
  species_specific_visual_needs: []
  species_specific_audio_needs: []
  special_ui_or_readability_needs: []
  p6_followup_required: true | false
```

P4 records needs only. P6 decides production assets, provenance, bundling and budgets.

## 20. Cross-species links

```yaml
cross_species_links:
  evolution_family: []
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
```

Every referenced species key must resolve to another mandatory dossier or an explicitly external/non-mandatory reference.

## 21. Open questions and gates

```yaml
open_questions_and_gates:
  unresolved_sources: []
  contradictions: []
  human_design_gates: []
  deferred_to_p5: []
  deferred_to_p6: []
  deferred_to_p7: []
```

A dossier cannot be `complete` with a blocking Human Design Gate still unresolved unless that gate is explicitly reassigned to a later owning phase and does not block P5 consumption.

## 22. Completion rules

A dossier counts toward P4 `151/151` only when all of the following are true:

1. National Dex identity is valid and unique.
2. Provenance review is marked complete.
3. Canonical six raw base stats are present or an explicit source exception is documented.
4. All six P4 species ratings are populated under a **pinned** rating-scale version.
5. Capability/hazard audit is complete, including explicit empty categories where appropriate; every material consequence-changing hazard has a reviewed `hazard_record` or an explicit reason why no detailed record applies.
6. Ancient-strength treatment is explicit.
7. Ecology and observable-sign sections are substantive or intentionally unresolved with reason.
8. Human perception/culture is substantive without pseudo-canon filling.
9. Identification/knowledge progression is usable by P5.
10. Threat/encounter behavior and human-check hooks are usable.
11. Individual-variation policy is explicit.
12. Companionship classification and logistics are explicit.
13. Mechanical hooks are reviewed against P3.
14. Hunting/material treatment is explicit.
15. Technology/craft result is `present` with causal chain or explicit `none`.
16. Emergency-consumable result is explicit `hooks` or `none`.
17. Narrative/event hooks provide meaningful gameplay presence candidates.
18. P6 follow-up flag is explicit.
19. Cross-species references resolve.
20. No blocking contradiction/gate remains hidden.

## 23. Coverage-manifest fields

The eventual P4 coverage manifest must contain at minimum:

```text
national_dex
species_key
dossier_status
source_review_status
stat_profile_status
capability_hazard_status
ecology_status
threat_encounter_status
individual_variation_status
bond_status
narrative_hook_status
p6_followup_required
blocking_gate_refs
```

P4 exit invariant:

```text
mandatory_species_ids == {1..151}
dossier_complete_count == 151
source_review_complete_count == 151
blocking_p4_gate_count == 0
```

## 24. Pilot-specific validation

The pilot must intentionally include at least one dossier that tests each of these failure-prone cases:

- a weak/common species whose ordinary individual should become routine as the human advances;
- a named/apex exceptional individual from a normally weak species;
- a low-stat/high-hazard species where consequence severity cannot be inferred from the six-axis ratings;
- a formidable/high-stat species whose ordinary behavior does not justify assuming aggression;
- swarm/colony danger;
- aquatic/environment-dependent action;
- high physical force/durability;
- elemental hazard;
- Ghost/Psychic approach invalidation;
- evolution adaptation;
- fossil/history ambiguity;
- Legendary/Mythical indirect or exceptional presence.

The schema may receive **field-level refinements** during pilot review, but removing the D-031 architecture requires a new Human Design Gate.

The active roster and calibration matrix are defined in `docs/P4_PILOT_ROSTER_AND_CALIBRATION_PLAN.md`.

## 25. Immediate next work

1. Author source-reviewed hazard/behavior evidence packets for the selected pilot roster while keeping rating candidates explicitly provisional.
2. Create the concrete named/apex weak-species semantic fixture without final numeric deltas.
3. Exercise low-stat/high-hazard, high-stat/low-aggression, swarm, aquatic, large-body, elemental and anomalous encounter examples.
4. **Only after those examples exist**, compare the preserved 5/6/7-tier candidates and pin the smallest useful `rating_scale_version`.
5. Finalize pilot six-axis profiles and named/apex numeric deltas.
6. Test ordinary weak-species trivialization after human progression without player-level enemy scaling.
7. Run cross-species/P2/P3/provenance/schema-completeness review.
8. Revise this schema only where pilot evidence shows a real structural gap.
9. Then begin ecology/evolution-family-aware 151-species batch authoring.

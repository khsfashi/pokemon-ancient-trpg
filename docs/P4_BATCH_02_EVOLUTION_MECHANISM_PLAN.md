# P4 Batch 02 — Evolution Mechanism Stress-Test Plan

Status: **SELECTED — ready for source review**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`

## Purpose

Batch 01 established D-032: **ordinary growth/maturation and Pokémon evolution are different kinds of change**. Batch 02 deliberately tests that rule across three mechanically and fictionally different canonical evolution families before P4 scales further.

The batch is not chosen by Pokédex order alone. Each family exercises a different adaptation pressure:

1. a biologically legible metamorphic line;
2. an evolution-stone/material-trigger line;
3. a line whose modern final-stage trigger is trade metadata.

This should expose any weakness in D-032 early, while keeping the authoring set compact enough for full-schema cross-family review.

## New dossiers

| Dex | Species | Family | D-032 stress job |
|---:|---|---|---|
| #010 | Caterpie | Caterpie → Metapod → Butterfree | Same-species growth versus cocoon/metamorphic species transition. |
| #011 | Metapod | Caterpie → Metapod → Butterfree | Immobile metamorphic stage, survival/logistics, transition readability. |
| #012 | Butterfree | Caterpie → Metapod → Butterfree | Post-metamorphosis capability/ecology discontinuity. |
| #025 | Pikachu | Pikachu → Raichu | Separate ordinary development from a material/stone-trigger evolution relationship. |
| #026 | Raichu | Pikachu → Raichu | Audit whether an ancient Thunder Stone treatment is source-supported, bounded D2, or requires a gate. |
| #063 | Abra | Abra → Kadabra → Alakazam | Psychic ecology plus natural growth versus species transition. |
| #064 | Kadabra | Abra → Kadabra → Alakazam | Middle-stage Psychic capability and final-stage trade-trigger pressure. |
| #065 | Alakazam | Abra → Kadabra → Alakazam | Do not turn modern trade metadata into an ancient exchange ritual without evidence. |

New-dossier count: **8**.

## Why these three families

### Caterpie family — metamorphosis baseline

This is the cleanest control case for D-032. Caterpie can grow while remaining Caterpie, but Caterpie → Metapod and Metapod → Butterfree must remain actual persistent-individual species transformations.

The source review should determine what is genuinely supported about cocoon timing, shell/body change, movement, habitat and observable signs. The game must not reduce this to `reach level N` or a passive stat-up.

### Pikachu family — material-trigger pressure

Pikachu → Raichu tests whether a canonical evolution stone can exist as a meaningful rare material interaction in the ancient setting without becoming a convenient consumable-upgrade economy.

Source review must distinguish:

- canonical family/stone relationship;
- evidence that Thunder Stones themselves exist independently of modern trainer institutions;
- ancient locality/access/rarity assumptions;
- whether a companion can intentionally pursue the transformation and what agency/consent D-013 requires.

If ancient availability or reproducibility cannot be bounded without durable invented lore, expose a Human Design Gate instead of fabricating a mine/shop system.

### Abra family — trade-trigger pressure

Kadabra → Alakazam is the immediate regression test for the Haunter/Gengar decision.

D-032 does **not** automatically mean every modern trade evolution receives the exact Haunter treatment. Source review must first inspect this family independently. However:

- modern `trade` metadata alone is not evidence for an ancient exchange ritual;
- ordinary psychic growth/training does not automatically change species;
- if no unique ancient trigger can be recovered, `unknown natural transformation`, `exceptional`, or an explicit gate are preferred to pseudo-canon.

The family also tests interaction with D-029: rare human psychic gifts must not imply routine control over Psychic Pokémon or provide a universal evolution shortcut.

## Required source-review order

For each family:

1. confirm canonical identity, typing, raw six stats, family relation and modern trigger metadata;
2. collect official Pokédex/setting evidence for body, ecology, behavior, hazards and transformation clues;
3. classify every evolution step under D-032 as directly usable, bounded adaptation, unknown, exceptional, or gate-required;
4. derive all six `p4-six-axis-v1` ratings mechanically;
5. author capability/hazard records before threat summaries;
6. author all eight complete dossiers against the shared schema;
7. review each family as a persistent-individual sequence;
8. run P2/P3/P4 contradiction checks;
9. promote manifest status only after the whole batch passes.

## Evolution-specific invariants

```text
ordinary_growth_equals_evolution == false
kill_XP_causes_evolution == false
visible_level_meter_required == false
generic_evolve_button_required == false
modern_trade_literalized_as_ancient_law == false
persistent_individual_identity_survives_evolution == true
family_specific_source_review_required == true
```

### Metamorphosis does not become routine stat growth

A biologically expected metamorphic family may transform more predictably than a rare Ghost/Psychic transition. That does not erase the conceptual boundary: body/species stage changes, capability sets and logistics are re-evaluated as an event.

### Evolution stones must not become generic upgrade currency

Even when a stone is source-supported, P4 must separately determine availability, rarity, agency, physical handling and whether the ancient setting can access it. P6 later owns asset/provenance presentation; P5 owns event-state execution.

### Trade-trigger families remain independent reviews

Haunter → Gengar sets a precedent against inventing ancient trade rituals from gameplay metadata, but it does not pre-author every trade family. Abra/Kadabra/Alakazam receives its own source review and may expose a new Human Design Gate if evidence and D-032 leave multiple materially different valid interpretations.

## Cross-system checks

Batch 02 must preserve:

- D-013 voluntary companionship and three-slot maximum;
- D-018 canon-first derivation;
- D-019 progressive identification;
- D-020 serious selective lethality;
- D-024 bounded human checks;
- D-029 rare human psychic gifts without universal Pokémon control;
- D-030 no fate/reroll currency;
- D-031 non-scaling species baselines and exceptional individuals;
- D-032 evolution/maturation separation.

## Batch 02 exit target

If no blocking gate remains after source review and authoring:

```text
new_dossier_count == 8
new_dossier_complete_count == 8
family_consistency_pass_count == 3
batch_blocking_gate_count == 0
rating_scale_version == p4-six-axis-v1
```

Expected manifest state after a clean close:

```text
dossier_complete_count == 20
pilot_reviewed_count == 2
not_started_count == 129
blocking_p4_gate_count == 0
```

This target never authorizes bypassing a source uncertainty or Human Design Gate.

## Exact next work

Source-review #010 Caterpie, #011 Metapod, #012 Butterfree, #025 Pikachu, #026 Raichu, #063 Abra, #064 Kadabra and #065 Alakazam. Stop only if the review exposes a material owner-choice gate; otherwise continue through full-schema authoring and family audit in the same coherent Batch 02 slice.

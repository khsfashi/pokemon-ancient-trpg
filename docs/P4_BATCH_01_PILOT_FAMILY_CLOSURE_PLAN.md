# P4 Batch 01 — Pilot-Family Closure Plan

Status: **SELECTED — ready for source review and dossier authoring**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_PILOT_FULL_SCHEMA_DOSSIERS.md`, `docs/P4_RATING_SCALE_CALIBRATION.md`, `docs/GEN1_SPECIES_COVERAGE_PLAN.md`

## Purpose

Bulk P4 authoring begins by closing evolution families already touched by the eight-species pilot instead of starting a disconnected Pokédex-order batch.

This batch deliberately reuses reviewed pilot anchors so the first scaled authoring pass tests the most failure-prone cross-species requirement: **an evolution family must remain mechanically, ecologically, culturally, and narratively coherent without turning modern level/trade mechanics into diegetic XP or modern institutions.**

No new shared schema or six-axis scale is proposed here.

## New dossiers in Batch 01

| Dex | Species | Existing reviewed anchor(s) | Primary consistency job |
|---:|---|---|---|
| #014 | Kakuna | Weedle, Beedrill | Close the cocoon/metamorphosis middle stage; preserve venom/colony hazard boundaries without inventing a generic swarm stat bonus. |
| #020 | Raticate | Rattata | Close the common-rodent maturation line; verify that ordinary progression can become routine while an exceptional Rattata may still exceed an ordinary Raticate in selected axes. |
| #093 | Haunter | Gastly | Extend Ghost materiality/interaction permissions without treating invalid approaches as merely high TNs. |
| #094 | Gengar | Gastly, Haunter | Close the Ghost family and explicitly resolve or gate the modern trade-linked evolution condition for this ancient setting. |
| #129 | Magikarp | Gyarados | Close the transformation line and audit the canon-backed historical-strength evidence without generalizing it to all Pokémon. |
| #141 | Kabutops | Kabuto | Close the fossil/relict family while preserving the rule that “ancient setting” does not automatically prove a living opening-locality population. |

New-dossier count: **6**.

## Pilot anchors re-reviewed in Batch 01

The following already-complete pilot content acts as the family-side review anchor and is not rewritten merely for stylistic uniformity:

- #013 Weedle
- #015 Beedrill
- #019 Rattata
- #092 Gastly
- #130 Gyarados
- #140 Kabuto

If the six new dossiers pass family consistency review, these six pilot anchors may be promoted from `pilot_reviewed` to `complete` together with their newly authored relatives.

#131 Lapras and #151 Mew remain valid `pilot_reviewed` dossiers but are outside Batch 01 because they do not close one of these evolution-family gaps.

## Required authoring order

For each new species:

1. confirm structured source identity, raw stats, typing, evolution relation, and relevant move/ability inputs against the pinned P4 source policy;
2. collect official setting/Pokédex evidence used for ecology, behavior, body properties, hazards, or historical claims;
3. derive `p4-six-axis-v1` ratings mechanically from raw stats;
4. author capabilities/hazards before compressing an encounter into a threat summary;
5. fill the complete shared dossier schema;
6. review the full evolution family as one unit;
7. run P2/P3/P4 contradiction checks;
8. promote manifest statuses only after review passes.

## Known pressure points

### Gengar evolution

The modern trade-linked condition cannot silently become “people trade Haunter in an ancient trading institution.” Source review must first determine what is canonical versus game-mechanical. If multiple setting-valid ancient adaptations remain and choosing one establishes durable species-wide lore, stop at a **Human Design Gate** instead of inventing a rule.

### Rattata → Raticate

Do not force vertical encounter relevance. An ordinary Raticate may be more formidable than an ordinary Rattata while both can become manageable through human progression and preparation. The existing `pilot-rattata-apex-01` remains a legal exceptional case and may exceed ordinary Raticate in selected axes without redefining the species baseline.

### Magikarp → Gyarados

The known historical-strength evidence for Magikarp is species-specific evidence. It must not become a universal “all ancient Pokémon get stronger stats” rule. Transformation should remain a persistent-individual biological event rather than kill-XP or a visible player-facing level threshold.

### Kabuto → Kabutops

Family completion does not authorize a routine living spawn. Fossil evidence, relict evidence, and confirmed living presence remain distinct knowledge states.

## Batch 01 exit checks

Batch 01 may close only when:

```text
new_dossier_count == 6
new_dossier_complete_count == 6
family_anchor_review_count == 6
family_anchor_promoted_to_complete_count == 6
batch_blocking_gate_count == 0
rating_scale_version == p4-six-axis-v1
```

Expected manifest state after a clean Batch 01 close:

```text
dossier_complete_count == 12
pilot_reviewed_count == 2
not_started_count == 137
blocking_p4_gate_count == 0
```

The expected count is a target, not permission to bypass a Human Design Gate or source uncertainty.

## Next after this plan

The next coherent P4 slice is **source review + full-schema authoring for the six Batch 01 new species**, with evolution-family cross-review and manifest promotion performed in the same PR only if no blocking gate is exposed.

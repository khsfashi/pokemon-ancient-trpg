# P4 Pilot Completion Audit

Status: **PASS**  
Date: **2026-08-15**  
Tracks: **#5**  
Audited artifact: `docs/P4_PILOT_FULL_SCHEMA_DOSSIERS.md`

## 1. Audit purpose

This audit decides whether the eight-species P4 pilot is complete enough to stop changing the shared dossier architecture opportunistically and begin ecology/evolution-family-aware bulk authoring toward the mandatory `151/151` roster.

A PASS does **not** close P4. It only closes the pilot gate.

## 2. Pilot roster status

| Dex | Species | Dossier status | Source review | Stat profile | Hazard/capability | Full schema | Blocking gate |
|---:|---|---|---|---|---|---|---|
| 013 | Weedle | `pilot_reviewed` | PASS | PASS | PASS | PASS | none |
| 015 | Beedrill | `pilot_reviewed` | PASS | PASS | PASS | PASS | none |
| 019 | Rattata | `pilot_reviewed` | PASS | PASS | PASS | PASS | none |
| 092 | Gastly | `pilot_reviewed` | PASS | PASS | PASS | PASS | none |
| 130 | Gyarados | `pilot_reviewed` | PASS | PASS | PASS | PASS | none |
| 131 | Lapras | `pilot_reviewed` | PASS | PASS | PASS | PASS | none |
| 140 | Kabuto | `pilot_reviewed` | PASS | PASS | PASS | PASS | none |
| 151 | Mew | `pilot_reviewed` | PASS | PASS | PASS | PASS | none |

Pilot invariant:

```text
pilot_species_count == 8
pilot_reviewed_count == 8
blocking_pilot_gate_count == 0
rating_scale_version == p4-six-axis-v1
```

Result: **PASS**.

## 3. Schema completion audit

The audit uses the 20 completion rules from `docs/P4_SPECIES_DOSSIER_SCHEMA.md`.

| Rule | Result | Evidence |
|---|---|---|
| 1. Stable unique identity | PASS | all eight have National Dex ID, stable species key, family keys and mandatory-roster flag |
| 2. Provenance reviewed | PASS | each dossier references reviewed packet claim IDs and source revisions |
| 3. Raw six stats present | PASS | all eight retain canonical raw six-stat inputs separately from project mechanics |
| 4. Pinned six-axis profile | PASS | every pilot uses `p4-six-axis-v1`; no baseline manual override is needed |
| 5. Capability/hazard audit | PASS | material hazards use reviewed records or explicit no-hazard treatment; severity remains separate from ratings |
| 6. Ancient-strength treatment | PASS | no species receives a silent global ancient-stat bonus; unresolved cases are explicit |
| 7. Ecology + signs | PASS | each dossier provides usable ecology/sign hooks or reasoned unresolved fields |
| 8. Human perception/culture | PASS | local authoring hooks are separated from universal canon/law |
| 9. Identification progression | PASS | common, locality-dependent, specialist, rare and mythical knowledge paths are all exercised |
| 10. Threat/check hooks | PASS | all dossiers expose P5-consumable behavior, consequence and D-024 guidance |
| 11. Individual variation | PASS | ordinary variation is bounded; exceptional-individual handling is explicit |
| 12. Companionship | PASS | each species is `eligible`, `exceptional_only`, or `inappropriate_or_impossible_baseline` with logistics |
| 13. P3 mechanical review | PASS | no second modifier economy, no TN 17, no forced roll where approach is invalid/routine |
| 14. Hunting/material treatment | PASS | no automatic loot; unsupported Pokémon-derived materials are not invented |
| 15. Technology/craft | PASS | all pilot entries explicitly return `none`; no unjustified technology island is fabricated |
| 16. Emergency consumables | PASS | most return `none`; Weedle/Beedrill expose only explicitly unresolved poison-response candidates, never rerolls/universal antidotes |
| 17. Narrative/event hooks | PASS | each species has meaningful P5 presence candidates appropriate to its rarity and ecology |
| 18. P6 follow-up | PASS | presentation-specific needs are explicit and limited to P6-owned decisions |
| 19. Cross-species references | PASS | family links resolve to mandatory Gen-I species keys; no outside-form dependency is required |
| 20. No hidden blocker | PASS | remaining unknowns are source/locality/P5/P6 questions, not concealed owner decisions |

## 4. Pilot-specific failure-case audit

### Weak species progression

PASS.

Rattata preserves a fixed `1/2/1/1/1/3` species profile. A poor-position early encounter can require a check; a prepared experienced human can resolve one ordinary Rattata with no roll. No enemy stat changes are needed.

### Exceptional weak-species threat

PASS.

`pilot-rattata-apex-01` resolves to `2/4/1/1/1/5` through explicit deltas and retains `trap_wary`, `route_memory`, `supply_raider`, `false_commitment`, persistent identity and learnable warning signs. Guard/Resistance stay ordinary so the fixture does not become a generic HP sponge.

### Low-stat/high-hazard

PASS.

Weedle remains `2/1/1/1/1/2`. Its stinger contact hazard does not require Potency inflation. Exact human venom dose, duration and fatality remain source-unknown; P5 may author exposure avoidance without pretending the unknown medical value is canon.

### Swarm/colony

PASS.

Beedrill danger is expressed through territory, warning, repeated exposure, pursuit and route denial. Defeating one individual never collapses a colony into a solved HP pool.

### High capability without aggression leakage

PASS.

Lapras has Vigor 6 and multiple 4-rated axes while retaining communication/cooperation as a first-class approach. Open-water danger comes from environment and position, not inferred hostility.

### Large-body/source-extreme force

PASS.

Gyarados Force 6 can invalidate direct human-force approaches while using the existing D-024 ceiling (`15`, alternate approach, or impossible-until-fiction-changes). Rampage semantics affect routes, cover, displacement and evacuation.

### Ghost/anomalous invalidation

PASS.

Gastly's impalpable body makes ordinary grab/pin/strike-as-flesh plans invalid before a numeric contest. This is not represented as inflated Guard.

### Fossil/history ambiguity

PASS.

Kabuto can progress through fossil/remain/specialist evidence while living presence in the opening locality remains explicitly unresolved. Gen-I roster membership does not manufacture a spawn rule.

### Mythical indirect presence

PASS.

Mew can satisfy design and later gameplay-realization requirements through rumor, traces, fleeting observation and exceptional confirmation. Direct pursuit may be fictionally invalid when voluntary invisibility applies; routine spawn/capture/companionship is not created.

## 5. P2/P3 contradiction scan

Result: **PASS**.

- no portable containment or trainer-normalized ownership is introduced;
- companionship remains voluntary, physical and rare;
- no universal ancient-strength multiplier is introduced;
- D-020 selective lethality remains explicit rather than automatic on defeat;
- D-021 prevents generic kill/loot behavior;
- human checks remain `2d6 + Attribute + Competence + Context`;
- Pokémon ratings guide authoring and never become a second modifier stack;
- ordinary interactions may become routine/no-roll;
- no Fate/reroll resource is introduced;
- emergency-item candidates never modify rolled dice;
- no Pokémon encounter grants kill-XP or advancement by default.

## 6. Provenance and uncertainty scan

Result: **PASS**.

The pilot intentionally retains unresolved source questions where evidence is insufficient:

- Weedle/Beedrill exact human venom medicine and severity;
- exact ancient/local distribution and ecology for several species;
- Kabuto living presence in the opening locality;
- Mew ecology/population and exact breadth of Psychic capability.

These are not treated as hidden failures. They are marked `unknown` / `intentionally_unresolved` and do not require a Human Design Gate because the pilot can provide P5-usable boundaries without selecting fictional facts.

## 7. Schema sufficiency result

Result: **PASS — no structural schema change required**.

Full-schema authoring did not reveal a case that needs a bespoke per-species field. The existing shared model can represent:

- fixed species baselines;
- hazard consequence records;
- environment-only danger;
- state/permission invalidation;
- local exceptional individuals;
- incomplete historical occurrence;
- progressive knowledge without direct encounter;
- Mythical indirect presence;
- voluntary companionship with materially different logistics.

Therefore P4 should stop expanding the schema unless a later species batch demonstrates a concrete structural failure.

## 8. Pilot gate decision

**P4 full-schema pilot gate: PASS.**

The repository may now begin bulk Gen-I dossier authoring.

The next work should:

1. establish the auditable P4 coverage manifest;
2. choose the first ecology/evolution-family-aware batch rather than raw Pokédex order;
3. author that batch against the frozen schema and `p4-six-axis-v1`;
4. run the same provenance, schema, cross-species and P2/P3 contradiction checks;
5. update the manifest only after each dossier is reviewed.

P4 itself remains active until the final invariant is satisfied:

```text
mandatory_species_ids == {1..151}
dossier_complete_count == 151
source_review_complete_count == 151
blocking_p4_gate_count == 0
```

# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 01 promoted**  
Date: **2026-08-15**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`  
Evolution authority: `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 01 family closure and P4-HDG-002 resolution.

The manifest remains status-oriented and does not duplicate dossier prose or canonical source data.

## Manifest resolution contract

`resolved_record = status_defaults[dossier_status] merged with species row`

Every resolved species record contains:

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

`authoring_batch` remains an allowed operational field.

For `pilot_reviewed` and `complete`, `p6_followup_required` must be explicit on the species row.

## Structural checks

```text
species_row_count == 151
national_dex_min == 1
national_dex_max == 151
national_dex_unique_count == 151
species_key_unique_count == 151
mandatory_species_ids == {1..151}
```

Result: **PASS**.

## Batch 01 promotion check

The six new Batch 01 dossiers are complete:

- #014 Kakuna
- #020 Raticate
- #093 Haunter
- #094 Gengar
- #129 Magikarp
- #141 Kabutops

The six reviewed family anchors are also promoted to complete:

- #013 Weedle
- #015 Beedrill
- #019 Rattata
- #092 Gastly
- #130 Gyarados
- #140 Kabuto

The two pilot species outside Batch 01 family closure remain `pilot_reviewed`:

- #131 Lapras
- #151 Mew

All other mandatory species remain `not_started`.

```text
dossier_complete_count == 12
pilot_reviewed_count == 2
not_started_count == 137
draft_count == 0
blocking_p4_gate_count == 0
```

Result: **PASS**.

## P6 follow-up audit

Explicit reviewed flags are:

```text
Weedle    true
Kakuna    true
Beedrill  true
Rattata   false
Raticate  false
Gastly    true
Haunter   true
Gengar    true
Magikarp  false
Gyarados  true
Lapras    true
Kabuto    true
Kabutops  true
Mew       true
```

Unreviewed species remain `unknown` through `not_started` defaults.

Result: **PASS**.

## P4-HDG-002 / D-032 check

P4-HDG-002 is resolved by owner choice **A — Unknown natural maturation**, refined into the shared D-032 rule:

- ordinary growth/maturation remains same-species development;
- evolution is a discontinuous species transformation;
- Haunter -> Gengar occurs as a rare natural transformation whose reproducible cause is unknown to ordinary humans;
- modern trade metadata is preserved but does not become an ancient exchange institution or ritual;
- exact unknown cause is now an intentional knowledge boundary, not a blocking design gate.

```text
P4_HDG_002 == RESOLVED_A
shared_evolution_rule == D-032
Haunter_blocking_gate_refs == []
Gengar_blocking_gate_refs == []
```

Result: **PASS**.

## Mutation rules preserved

Future P4 PRs must update this manifest atomically with reviewed status changes.

A row may be promoted to `complete` only when the corresponding dossier satisfies all completion domains in `docs/P4_SPECIES_DOSSIER_SCHEMA.md` and has no blocking P4 Human Design Gate.

Do not infer completion from imported source data, raw stats, sprites, or prose existence alone.

P4 exit remains:

```text
mandatory_species_ids == {1..151}
dossier_complete_count == 151
source_review_complete_count == 151
blocking_p4_gate_count == 0
```

## Verdict

```text
manifest_structure == PASS
Batch_01_status_promotion == PASS
P6_followup_explicitness == PASS
P4_HDG_002_resolution == PASS
blocking_p4_gate_count == 0
```

Batch 01 is closed and the manifest is ready for Batch 02 selection.

# P4 Species Coverage Manifest Audit

Status: **PASS — initial manifest scaffold**  
Date: **2026-08-15**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`

## Purpose

This audit establishes the first machine-readable 151-species coverage baseline required by the P4 schema and Generation-I coverage contract.

The manifest is deliberately status-oriented. It does not duplicate dossier prose or canonical source data.

## Manifest resolution contract

The manifest is normalized rather than repeating identical status fields 151 times:

`resolved_record = status_defaults[dossier_status] merged with species row`

Every resolved species record must contain:

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

One operational field is additionally allowed:

```text
authoring_batch
```

Status conventions:

- `dossier_status`: `not_started | draft | pilot_reviewed | complete`
- section statuses: `not_started | in_progress | complete`
- `p6_followup_required`: `unknown | true | false`
- `blocking_gate_refs`: empty/non-empty gate reference list
- `authoring_batch`: empty, `pilot`, `B01-anchor`, `B01-new`, or a later stable batch key

`not_started` exists only at manifest level for species with no dossier yet. A materialized dossier still uses the schema's `draft | pilot_reviewed | complete` identity status.

For `pilot_reviewed` and `complete`, `p6_followup_required` must be provided explicitly by the species row; there is intentionally no status-default value that could hide a missing P6 decision.

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

## Initial status checks

The eight pilot species are `pilot_reviewed`, and their resolved shared completion-domain statuses are `complete`:

- #013 Weedle
- #015 Beedrill
- #019 Rattata
- #092 Gastly
- #130 Gyarados
- #131 Lapras
- #140 Kabuto
- #151 Mew

All other 143 species begin as `not_started`.

```text
dossier_complete_count == 0
pilot_reviewed_count == 8
not_started_count == 143
blocking_p4_gate_count == 0
```

This is intentional: pilot status is preserved instead of silently promoting it before the relevant bulk-family consistency review.

## P6 follow-up carryover

The manifest copies the explicit pilot follow-up flags from the reviewed pilot dossiers:

- Rattata: `false`
- Weedle: `true`
- Beedrill: `true`
- Lapras: `true`
- Gyarados: `true`
- Gastly: `true`
- Kabuto: `true`
- Mew: `true`

Unreviewed species remain `unknown` until their dossier determines the flag.

## Batch 01 selection check

`docs/P4_BATCH_01_PILOT_FAMILY_CLOSURE_PLAN.md` selects:

```text
#014 Kakuna
#020 Raticate
#093 Haunter
#094 Gengar
#129 Magikarp
#141 Kabutops
```

The manifest marks exactly those six as `B01-new` and the associated six reviewed family anchors as `B01-anchor`.

Result: **PASS**.

## Mutation rules

Future P4 PRs must update the manifest in the same change that changes a species' reviewed status.

A row may be promoted to `complete` only when the dossier satisfies all 20 completion rules in `docs/P4_SPECIES_DOSSIER_SCHEMA.md`.

Do not infer completion from imported source data, raw stats, or the existence of a prose file.

P4 exit remains:

```text
mandatory_species_ids == {1..151}
dossier_complete_count == 151
source_review_complete_count == 151
blocking_p4_gate_count == 0
```

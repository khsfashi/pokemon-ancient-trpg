# P4 Batch 05 — Historical Presence, Artificial Origins, and Anachronism Plan

Status: **SELECTED — ready for source review and dossier authoring**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/GEN1_SPECIES_COVERAGE_PLAN.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`

## Purpose

Batches 01-04 established species-stat normalization, stat-independent hazards, ordinary-vs-exceptional individuals, species-specific evolution, branching and reversible evolution, transformation distinct from evolution, host/parasite dependency, multi-part entities, and multi-origin composite provenance.

A major Generation-I boundary is still untested: **mandatory dossier coverage does not automatically prove that every species can exist naturally in the project's much earlier-than-Hisui baseline era**.

Batch 05 therefore selects eight species whose official material creates pressure around one or more of:

1. artificial creation by advanced human science;
2. modern infrastructure or Poké Ball association;
3. pollution / refuse / toxic-environment ecology that must not silently import industrial civilization;
4. historical regional-form evidence that must not be substituted for the mandatory original Gen-I form;
5. the distinction between `151/151 dossier coverage` and `151/151 contemporaneous natural availability`;
6. explicit chronology-safe absence or uncertainty as a valid dossier outcome rather than pseudo-canon.

The intended output is not a time-travel system and not a blanket claim that these eight species are modern-only. The source-review pass must classify each case separately.

## New dossiers

| Dex | Species | Family/domain | Primary stress job |
|---:|---|---|---|
| #088 | Grimer | Grimer → Muk | Sludge-born ecology and polluted-place affinity without inventing factories, sewers, or a modern waste economy as prerequisites. |
| #089 | Muk | Grimer → Muk | Extreme contact/environmental toxicity and plant damage; tests whether toxic ecology can remain local/environmental rather than becoming an industrial-origin assumption. |
| #100 | Voltorb | Voltorb → Electrode | Original form is strongly associated in current official material with power plants and Poké Ball misidentification, while a distinct Hisuian form supplies separate historical evidence. Tests form-specific chronology and infrastructure inference. |
| #101 | Electrode | Voltorb → Electrode | Explosion/charge hazard plus the same original-form versus historical regional-form boundary; no Poké Ball infrastructure may be backfilled merely to justify the species. |
| #109 | Koffing | Koffing → Weezing | Toxic-gas body, levitation and explosion hazards that can exist without proving industrial pollution; source review must distinguish body chemistry from habitat origin. |
| #110 | Weezing | Koffing → Weezing | Garbage/toxic-gas ecology and source-backed human perfume use without creating a mass refuse industry, generic poison-harvesting loop, or modern chemistry sector. |
| #137 | Porygon | artificial / Virtual Pokémon | Explicit advanced-science artificial creation and cyberspace capability; first mandatory-roster case where baseline ancient natural presence is expected to conflict with source chronology unless exceptional evidence says otherwise. |
| #150 | Mewtwo | artificial Legendary / Genetic Pokémon | Explicit human genetic-manipulation creation; first Legendary-scale chronology test where dossier completeness must not force a pre-creation ancient encounter. |

New-dossier count: **8**.

## Why this batch

### Historical presence must become explicit

The current P4 schema already allows `unknown`, `not applicable`, and intentionally unresolved fields, but previous completed batches all began from species that could be treated as existing in the ancient world without a direct artificial-origin contradiction.

Batch 05 tests a stronger rule:

```text
mandatory_dossier_coverage != mandatory_contemporaneous_presence
source_data_row != ancient_spawn_authorization
modern_association != automatic_modern_origin
explicit_artificial_origin != permission_to_backfill_ancient_presence
```

A complete dossier may therefore need to say that a species is not naturally present in the baseline era, that the original form's ancient presence is unsupported, or that only a later/other regional form has historical evidence.

This is preferable to inventing lost laboratories, ancient cyberspace, proto-Poké Balls, industrial pollution, or time anomalies merely to make every National Dex row encounterable.

### Grimer / Muk — pollution without industrial backfill

Current official Pokédex material describes Grimer as born from sludge and gathering in polluted places, while Muk's body and footprints are intensely toxic and damaging to plants.

Those facts create ecological pressure but do **not** by themselves prove that the project must contain modern sewage works, factories, chemical plants, or urban garbage systems.

The source review must separate:

```text
sludge_or_polluted_habitat_supported == true
industrial_cause_required == unproven_until_sourced
contact_environmental_toxicity != raw_stat_damage_formula
human_cleanup_or_harvest_loop != automatic
```

If a plausible pre-industrial toxic niche is supported only as project extrapolation, it must remain D2 and localized rather than becoming a world rule.

### Voltorb / Electrode — original form versus historical regional form

Current official material for original Voltorb associates it with power plants and frequent Poké Ball misidentification. The same official Pokédex also exposes distinct Hisuian Voltorb/Electrode forms with older-era flavor and Apricorn-like body material.

D-011 deliberately keeps regional forms outside the mandatory Generation-I baseline. Therefore historical evidence for Hisuian Voltorb cannot silently be used as proof that **original Kanto-form Voltorb** naturally occupied the project's still-earlier future-Kanto territory.

The source review must preserve all of these distinctions:

```text
hisuian_form_historical_evidence == true
hisuian_form_in_mandatory_gen1_baseline == false
original_form_modern_infrastructure_association == true
original_form_ancient_kanto_presence == requires_source_review
pokeball_like_appearance != permission_to_invent_pokeballs
```

A valid result is `unknown / unsupported for baseline presence` if current evidence does not justify more.

### Koffing / Weezing — toxic-gas ecology without a modern industry assumption

Current official material describes Koffing as a thin balloon-like body containing toxic gases and capable of large explosions. Weezing can take in poisonous gases from garbage, and highly diluted internal poison gas has a perfume use.

This family is useful because it pressures two separate boundaries:

- environmental toxic gas can be a natural or localized hazard without requiring industrial civilization;
- a source-backed human use does not imply scalable manufacture, trade infrastructure, or generic harvesting.

The family also expands hazard coverage with airborne poison, explosion risk, contaminated-air interaction and approach/ventilation constraints.

### Porygon — explicit artificial future technology

Current official Pokédex material calls Porygon an artificial Pokémon created by advanced science and describes free movement through cyberspace.

That is directly incompatible with treating Porygon as ordinary ancient wildlife under the project's iron-age baseline and narrow Pokémon-dependent technology-island rule.

The default source-safe expectation is:

```text
baseline_natural_presence == false
ancient_human_creation == unsupported
cyberspace_in_baseline_world == unsupported
mandatory_dossier_status_can_still_reach_complete == true
```

The dossier should document canonical identity, stats/capabilities, creation chronology pressure, and the explicit absence/non-applicability of baseline ecology, companionship, and ordinary encounter hooks where appropriate.

The existence of historical-game observations of Porygon must not be converted into a project-wide time-space anomaly system without an owner-approved rule.

### Mewtwo — artificial Legendary chronology

Current official Pokédex material states that Mewtwo was created by human genetic manipulation.

Mewtwo therefore tests the same temporal-presence distinction at Legendary scale. The mandatory #150 dossier must not imply that Mewtwo already existed before the human scientific act that created it.

The source-safe baseline is to treat ancient natural encounter, bond and ecology as unavailable unless stronger official evidence establishes a chronology compatible with this setting.

Mewtwo also proves that Legendary/Mythical handling is not synonymous with `rare ancient spawn`: some mandatory species may require **chronological non-presence**, not merely extreme rarity.

## Selection-level source pointers

These references justify the **selection pressure only**. The next Batch 05 step must perform claim-level version/provenance review and collect pinned structured stat/evolution inputs before any dossier is promoted.

| Ref | Source | Selection use |
|---|---|---|
| `OFFICIAL-DEX-GRIMER-SG` | `https://sg.portal-pokemon.com/play/pokedex/0088` | sludge origin, polluted-place affinity, body mixing/toxin context |
| `OFFICIAL-DEX-MUK-SG` | `https://sg.portal-pokemon.com/play/pokedex/0089` | toxic sludge, poisonous footprints, plant damage |
| `OFFICIAL-DEX-VOLTORB-SG` | `https://sg.portal-pokemon.com/play/pokedex/0100` | power-plant association, Poké Ball misidentification, explosion hazard |
| `OFFICIAL-DEX-HISUIAN-VOLTORB-SG` | `https://sg.portal-pokemon.com/play/pokedex/0100_1` | distinct historical regional-form evidence; not baseline substitution |
| `OFFICIAL-DEX-ELECTRODE-SG` | `https://sg.portal-pokemon.com/play/pokedex/0101` | charge accumulation, explosion sensitivity, original-form family |
| `OFFICIAL-DEX-HISUIAN-ELECTRODE-SG` | `https://sg.portal-pokemon.com/play/pokedex/0101_1` | historical regional-form evidence and Apricorn-like surface tissue |
| `OFFICIAL-DEX-KOFFING-SG` | `https://sg.portal-pokemon.com/play/pokedex/0109` | toxic-gas body, airborne behavior, explosion pressure |
| `OFFICIAL-DEX-WEEZING-SG` | `https://sg.portal-pokemon.com/play/pokedex/0110` | garbage/toxic-gas intake and diluted-gas perfume use |
| `OFFICIAL-DEX-PORYGON-PH` | `https://ph.portal-pokemon.com/play/pokedex/0137` | explicit artificial advanced-science creation and cyberspace capability |
| `OFFICIAL-DEX-MEWTWO-SG` | `https://sg.portal-pokemon.com/play/pokedex/0150` | explicit human genetic-manipulation creation |
| `POKEAPI-EVOLUTION-CONTRACT` | `https://pokeapi.co/docs/v2` | pinned structured modern species/stat/evolution metadata during full source review |

Long flavor text must not be copied into dossiers. Claims are to be paraphrased, version-tagged where relevant, and classified under the existing C1 / C2 / D1 / D2 / U evidence model.

## Required source-review order

1. confirm identity, current canonical typing, raw six stats, families/forms, and modern evolution metadata for all eight species;
2. collect official version-tagged claims about habitat/origin, human technology association, pollution/refuse, artificial creation, and historical-form evidence;
3. classify every material claim as C1 / C2 / D1 / D2 / U;
4. for each species assign a source-review conclusion for **baseline-era presence** without yet changing the shared schema: `supported`, `plausible-derived`, `unsupported/unknown`, or `source-conflicted/noncontemporaneous`;
5. explicitly test whether Porygon and Mewtwo can be complete P4 dossiers with baseline-era non-presence and later-phase realization dependencies rather than requiring invented ancient encounters;
6. explicitly test whether original Voltorb/Electrode can be supported in this setting independently of their Hisuian forms and modern Poké Ball/power-plant association;
7. derive all `p4-six-axis-v1` profiles mechanically with no manual exception unless the normalization itself fails;
8. author capability/hazard records before threat summaries, especially poison exposure, airborne toxic gas, electrical discharge and explosion;
9. author every applicable shared-schema section and explicitly mark non-applicable ancient-era sections instead of filling them with pseudo-canon;
10. run family/form, chronology, hazard, companionship, D-017 technology-island and D-011 roster regressions;
11. run P2/P3/P4 contradiction and provenance checks;
12. promote manifest rows only after the whole batch passes and write the Batch 05 completion audit.

## Human Design Gate policy for this batch

**No owner decision is required merely to select the batch.** Source chronology and evidence classification are researchable.

A Human Design Gate is required only if full source review proves that completing P4 or satisfying a binding earlier decision would require the project to establish a durable player-facing rule such as:

- routine time travel / space-time distortions,
- ancient advanced laboratories or cyberspace,
- ancient Poké Ball infrastructure contradicting D-013,
- a blanket rule that future-created species somehow existed naturally beforehand,
- another persistent chronology exception not already authorized.

Default recommendation if such pressure appears: **preserve chronology and mark baseline non-presence; defer the exact P9 gameplay-realization mechanism to P9 unless P4 itself cannot close cleanly without an owner choice.**

## Cross-system checks

Batch 05 must preserve:

- D-010: the setting is earlier than the Hisui-era precedent; Hisuian evidence is an upper-bound/historical comparison, not permission to copy Hisui infrastructure;
- D-011: all original #001-#151 receive substantive dossiers, while regional forms remain outside the mandatory baseline;
- D-013: no portable containment or Poké Ball-like infrastructure in the baseline era;
- D-014 / D-017: ordinary material culture remains iron-age with narrow Pokémon-dependent technology islands, not advanced science/industry by implication;
- D-018: official evidence → bounded interpretation → explicit extrapolation;
- D-019: ordinary humans do not receive instant modern encyclopedic certainty about strange bodies or origins;
- D-020: serious hazards do not become automatic death formulas;
- D-028: toxic bodies, perfume evidence, sludge, or gases do not create generic loot/harvest loops;
- D-031: fixed species baselines and stat-independent hazard semantics remain authoritative;
- D-032: Grimer/Muk, Voltorb/Electrode and Koffing/Weezing evolution treatment remains species-specific and must not literalize modern level metadata as kill-XP;
- P4 coverage semantics: a complete dossier may document chronological absence/unsupported presence rather than invent an encounter.

## Batch 05 exit target

If source review exposes no blocking P4 Human Design Gate:

```text
new_dossier_count == 8
new_dossier_complete_count == 8
baseline_presence_classified_count == 8
artificial_origin_chronology_pass_count == 2
regional_form_substitution_regression == PASS
industrial_backfill_regression == PASS
hazard_permission_regression == PASS
manual_rating_exception_count == 0
batch_blocking_gate_count == 0
rating_scale_version == p4-six-axis-v1
```

Expected manifest state after a clean close:

```text
dossier_complete_count == 44
pilot_reviewed_count == 2
not_started_count == 105
draft_count == 0
blocking_p4_gate_count == 0
```

The count target never authorizes invented chronology, a hidden time-travel assumption, or treating a regional form as the mandatory original form.

## Exact next work

Source-review #088 Grimer, #089 Muk, #100 Voltorb, #101 Electrode, #109 Koffing, #110 Weezing, #137 Porygon and #150 Mewtwo.

Before full-schema authoring, explicitly classify baseline-era presence for all eight species and determine whether Porygon/Mewtwo can be completed as chronology-safe noncontemporaneous dossiers without a new owner-level rule. If unblocked, continue through all eight dossiers, regressions, manifest promotion and the Batch 05 completion audit.

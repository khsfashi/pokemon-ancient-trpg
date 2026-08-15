# P4 Batch 05 — Source Review

Status: **SOURCE REVIEW COMPLETE — CHRONOLOGY-SAFE / READY FOR FULL-SCHEMA AUTHORING**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_05_HISTORICAL_PRESENCE_ANACHRONISM_PLAN.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## 1. Review rule

Batch 05 keeps the existing evidence boundary:

- current official Pokémon Pokédex material is C1 evidence for species identity, typing, explicit origin statements, physical/ecological statements, form distinctions and explicit capabilities;
- `SRC-DATA-001` remains the pinned structured normalization input for raw six stats and modern evolution metadata, not a standalone franchise-canon authority;
- conservative implications are D1;
- bounded ancient-setting adaptations are D2;
- unsupported chronology, industrial infrastructure, time travel, lost laboratories, Poké Ball infrastructure and cyberspace remain `unknown`, `not_applicable` or forbidden unless separately sourced and owner-approved.

Pinned structured source revision:

```text
PokeAPI/api-data @ 2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

The Batch 05 source review does **not** expose a Human Design Gate. The existing schema already allows a mandatory dossier to be complete while ancient-era ecology, encounter or companionship is explicitly unavailable or not applicable.

## 2. Source registry

| Ref | Source | Primary use |
|---|---|---|
| `OFFICIAL-DEX-GRIMER-SG` | `https://sg.portal-pokemon.com/play/pokedex/0088` | sludge origin, polluted-place affinity, toxic-body context |
| `OFFICIAL-DEX-MUK-SG` | `https://sg.portal-pokemon.com/play/pokedex/0089` | toxic sludge body, poisonous footprints, plant damage |
| `OFFICIAL-DEX-VOLTORB-SG` | `https://sg.portal-pokemon.com/play/pokedex/0100` | original-form power-plant association, Poké Ball misidentification, explosion hazard |
| `OFFICIAL-DEX-HISUIAN-VOLTORB-SG` | `https://sg.portal-pokemon.com/play/pokedex/0100_1` | distinct historical regional form; non-substitution evidence |
| `OFFICIAL-DEX-ELECTRODE-SG` | `https://sg.portal-pokemon.com/play/pokedex/0101` | original-form charge accumulation and explosion sensitivity |
| `OFFICIAL-DEX-HISUIAN-ELECTRODE-SG` | `https://sg.portal-pokemon.com/play/pokedex/0101_1` | distinct historical regional form and Apricorn-like surface tissue |
| `OFFICIAL-DEX-KOFFING-SG` | `https://sg.portal-pokemon.com/play/pokedex/0109` | toxic-gas body, buoyancy, explosion pressure |
| `OFFICIAL-DEX-WEEZING-SG` | `https://sg.portal-pokemon.com/play/pokedex/0110` | garbage/toxic-gas intake and diluted-gas perfume use |
| `OFFICIAL-DEX-PORYGON-PH` | `https://ph.portal-pokemon.com/play/pokedex/0137` | artificial advanced-science creation, cyberspace traversal, historical-observer tension |
| `OFFICIAL-DEX-MEWTWO-SG` | `https://sg.portal-pokemon.com/play/pokedex/0150` | human genetic-manipulation creation |
| `SRC-DATA-001` | `PokeAPI/api-data@2cda0b56...` | raw six stats, type/ability cross-check, modern evolution-chain metadata |
| `POKEAPI-EVOLUTION-CONTRACT` | `https://pokeapi.co/docs/v2` | structured Pokémon/evolution resource semantics |

Long flavor text is not copied into dossiers. Claims below are paraphrased and version-scoped.

## 3. Canonical stat/rating audit

Pinned `p4-six-axis-v1`:

```text
raw <40     => 1
40..59      => 2
60..79      => 3
80..99      => 4
100..119    => 5
>=120       => 6
```

| Dex | Species | HP | Atk | Def | SpA | SpD | Spe | V/F/G/P/R/S |
|---:|---|---:|---:|---:|---:|---:|---:|---|
| #088 | Grimer | 80 | 80 | 50 | 40 | 50 | 25 | `4/4/2/2/2/1` |
| #089 | Muk | 105 | 105 | 75 | 65 | 100 | 50 | `5/5/3/3/5/2` |
| #100 | Voltorb | 40 | 30 | 50 | 55 | 55 | 100 | `2/1/2/2/2/5` |
| #101 | Electrode | 60 | 50 | 70 | 80 | 80 | 150 | `3/2/3/4/4/6` |
| #109 | Koffing | 40 | 65 | 95 | 60 | 45 | 35 | `2/3/4/3/2/1` |
| #110 | Weezing | 65 | 90 | 120 | 85 | 70 | 60 | `3/4/6/4/3/3` |
| #137 | Porygon | 65 | 60 | 70 | 85 | 75 | 40 | `3/3/3/4/3/2` |
| #150 | Mewtwo | 106 | 110 | 90 | 154 | 90 | 130 | `5/5/4/6/4/6` |

No manual rating exception is required.

Pinned modern evolution metadata:

- Grimer -> Muk: Red/Blue level-up metadata, minimum 38;
- Voltorb -> Electrode: Red/Blue level-up metadata, minimum 30;
- Koffing -> Weezing: Red/Blue level-up metadata, minimum 35;
- Porygon's later evolutions are post-Generation-I references and remain outside the mandatory baseline;
- Mewtwo has no ordinary evolution in the mandatory Gen-I baseline;
- Hisuian Voltorb -> Hisuian Electrode has separate Legends: Arceus form-specific item metadata and is not the original-form rule.

Under D-032, level values remain modern-game metadata rather than diegetic kill-XP, visible character level or a universal ancient evolution threshold.

## 4. Baseline-era presence classification

The batch adds an explicit review conclusion without changing the shared dossier schema.

| Species | Conclusion | Reason |
|---|---|---|
| Grimer | `plausible-derived` | Official material supports sludge origin and polluted-place affinity, but not a specific ancient range or industrial prerequisite. A localized pre-industrial sludge/toxic niche is a bounded D2 adaptation. |
| Muk | `plausible-derived` | Toxic biology is source-backed. Ancient presence is plausible only where the Grimer family itself is locally justified; industry is not required. |
| Voltorb | `unsupported/unknown` | Original-form evidence is strongly tied to power plants/Poké Ball confusion. Distinct Hisuian evidence cannot substitute for original-form ancient presence. |
| Electrode | `unsupported/unknown` | Same form/chronology boundary as Voltorb; original-form ancient presence is not established. |
| Koffing | `plausible-derived` | Toxic-gas body, buoyancy and explosion are biological/capability facts and do not require factories. Exact ancient habitat remains derived. |
| Weezing | `plausible-derived` | Refuse/toxic-gas interaction and perfume use do not require a modern industrial economy. Ancient locality remains derived rather than canon. |
| Porygon | `source-conflicted/noncontemporaneous` | Explicit advanced-science artificial creation and cyberspace capability conflict with ordinary earlier-than-Hisui iron-age presence. Historical-observer material does not establish native creation in this earlier baseline. |
| Mewtwo | `source-conflicted/noncontemporaneous` | Explicit human genetic-manipulation creation means the project must not treat Mewtwo as naturally present before that scientific creation. |

Core invariant:

```text
mandatory_dossier_coverage != baseline_spawn_authorization
source_data_row != ancient_presence
modern_association != proven_modern_origin
regional_form_history != original_form_history
explicit_artificial_origin != permission_to_backfill_ancient_creation
```

## 5. Grimer / Muk evidence packet

### C1

- Grimer is Poison type and current official material describes it as arising from sludge and gathering in polluted places.
- Grimer's body chemistry can create toxins; combining bodies is associated with new poison mixtures.
- Muk is Poison type and is described as extremely toxic sludge.
- Muk's footprints are poisonous and its passage can damage/wilt plant life.

### D1 / D2 boundary

```text
sludge_or_polluted_environment_supported == true
factory_or_sewer_prerequisite_supported == false
ancient_local_toxic_niche == D2
generic_waste_industry_created == false
generic_poison_harvest_loop_created == false
toxic_contact_severity_capped_by_species_stats == false
```

A D2 ancient niche may be a stagnant refuse pit, mineral/toxic seep, contaminated marsh edge, settlement midden runoff or another local condition already compatible with P2. It must not become a global origin law.

Result: **PASS — no Human Design Gate.**

## 6. Voltorb / Electrode form-chronology packet

### C1

- Original Voltorb is Electric type and current official material strongly associates it with power plants and Poké Ball misidentification.
- Original Electrode is Electric type; accumulating charge can increase speed and explosion risk.
- Hisuian Voltorb and Hisuian Electrode are separately represented regional forms with historical-era material.
- Hisuian Electrode's surface tissue is described as similar in composition to Apricorn.
- Structured evolution metadata distinguishes original-form Red/Blue evolution from the separate Hisuian Legends: Arceus item-trigger path.

### D1 boundary

```text
hisuian_form_historical_evidence == true
hisuian_form_in_mandatory_gen1_baseline == false
original_form_ancient_presence_proven == false
original_form_modern_association_proves_modern_creation == false
pokeball_resemblance_authorizes_ancient_pokeballs == false
power_plant_association_authorizes_ancient_power_grid == false
```

Therefore the original forms receive complete dossiers but no ordinary baseline encounter authorization. P9 may later realize them indirectly or through a chronology-compatible authored mechanism if one is approved; P4 does not invent that mechanism.

Result: **PASS — no Human Design Gate.**

## 7. Koffing / Weezing evidence packet

### C1

- Koffing is Poison type; official material describes a thin balloon-like body containing toxic gases.
- Koffing can float because its gas mixture is light and can explode severely when conditions worsen.
- Weezing is Poison type and can take in poisonous gases from garbage.
- Highly diluted internal poison gas is described as usable as high-quality perfume.

### D1 / D2 boundary

```text
toxic_gas_biology_supported == true
airborne_or_buoyant_behavior_supported == true
garbage_interaction_supported == true
industrial_pollution_required == false
perfume_use_proves_mass_manufacturing == false
ancient_specialist_use_if_authored == D2
generic_poison_economy_created == false
```

The source-backed human use supports a narrow knowledge/craft hook only. It does not create a perfume guild, chemistry sector, trade network or routine extraction action.

Result: **PASS — no Human Design Gate.**

## 8. Porygon chronology packet

### C1

- Porygon is Normal type and current official material explicitly calls it an artificial Pokémon.
- Its creation is attributed to advanced science.
- It can move through cyberspace.
- Current official material also contains historical-observer framing, proving that a historical observation can exist in franchise material without explaining an earlier native origin.

### D1 boundary

```text
baseline_natural_presence == false
baseline_human_creation == unsupported
baseline_cyberspace == unsupported
historical_observation_proves_native_earlier_than_Hisui_presence == false
routine_time_travel_system_created == false
lost_advanced_laboratory_created == false
mandatory_dossier_can_be_complete == true
```

For this project's earlier-than-Hisui baseline:

- ancient ecology is `not_applicable_baseline`;
- ordinary ancient encounter authorization is absent;
- ordinary ancient companionship is `inappropriate_or_impossible_baseline`;
- canonical capabilities remain documented for completeness and future chronology-safe realization;
- the exact P9 realization mechanism is deferred rather than invented.

Result: **PASS — no Human Design Gate.**

## 9. Mewtwo chronology packet

### C1

- Mewtwo is Psychic type.
- Current official material explicitly states that it was created through human genetic manipulation / advanced scientific intervention.
- The species is therefore not treated as a naturally occurring ancient lineage merely because #150 is mandatory dossier coverage.

### D1 boundary

```text
baseline_natural_presence == false
baseline_creation_by_iron_age_humans == unsupported
ancient_Mewtwo_spawn == false
ancient_Mewtwo_companionship == false
lost_genetics_laboratory_created == false
mandatory_dossier_can_be_complete == true
legendary_status_does_not_mean_rare_ancient_spawn == true
```

P4 records Mewtwo's canonical profile, psychic hazard potential and creation chronology while marking direct baseline ecology/encounter/bond fields non-applicable. P9 owns a later meaningful realization consistent with this constraint.

Result: **PASS — no Human Design Gate.**

## 10. Required hazard / permission records

Full-schema authoring must include at least:

- `grimer-toxic-body-contact` — toxin/contact contamination independent of raw Force;
- `muk-toxic-footprint-contamination` — persistent environmental toxin/plant-damage pressure;
- `voltorb-static-discharge` — electrical exposure permission;
- `voltorb-instability-explosion` — explosion consequence separate from low physical Force;
- `electrode-overcharge-explosion` — high-speed/charge instability hazard;
- `koffing-toxic-gas-inhalation` — respiratory/toxin exposure;
- `koffing-pressure-explosion` — explosion risk independent of Guard;
- `weezing-toxic-gas-cloud` — airborne respiratory hazard with ventilation/approach constraints;
- `porygon-digital-traversal` — capability record only; baseline environment lacks the required cyberspace substrate;
- `mewtwo-psychic-overwhelm` — canonical psychic threat semantics retained but baseline direct encounter is unavailable.

## 11. Cross-system contradiction review

```text
portable_containment_assumed == false
capture_equals_companionship == false
mandatory_dossier_coverage_equals_spawn_authorization == false
polluted_ecology_requires_industrial_civilization == false
garbage_interaction_creates_mass_waste_system == false
perfume_use_creates_generic_poison_harvest_economy == false
hisuian_form_substitutes_original_form == false
original_Voltorb_requires_ancient_Poke_Balls == false
original_Voltorb_requires_ancient_power_grid == false
Porygon_requires_ancient_cyberspace == false
Porygon_historical_observation_creates_time_travel_rule == false
Mewtwo_is_rare_ancient_wildlife == false
artificial_origin_creates_lost_lab_exception == false
modern_level_metadata_equals_kill_XP == false
hazard_severity_capped_by_species_rating == false
```

Result: **PASS.**

## 12. Source-review result

```text
source_review_species_count == 8
rating_profile_reproducible_count == 8
manual_rating_exception_count == 0
plausible_derived_presence_count == 4
unsupported_unknown_presence_count == 2
source_conflicted_or_noncontemporaneous_count == 2
chronology_safe_nonpresence_dossier_supported == true
form_specific_chronology_regression == PASS
industrial_backfill_regression == PASS
artificial_origin_regression == PASS
blocking_human_design_gate_count == 0
```

The batch is unblocked for full-schema authoring, regression review and atomic manifest promotion.

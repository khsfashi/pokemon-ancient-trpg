# P4 Batch 08 — Source Review

Status: **SOURCE REVIEW COMPLETE — NO BLOCKING HUMAN DESIGN GATE / READY FOR FULL-SCHEMA AUTHORING**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_08_BIOLOGICAL_RESOURCES_REMAINS_REGENERATION_PLAN.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P2_INJURY_AND_LETHALITY_CONTRACT.md`, `docs/P2_KILLING_ETHICS_CONTRACT.md`, `docs/P3_INVENTORY_RESOURCES_AND_ECONOMY_CONTRACT.md`

## 1. Review rule

Batch 08 keeps the established evidence boundary:

- current official Pokémon Pokédex material is C1 evidence for identity, typing, explicit behavior, body-derived resources and regeneration statements;
- `SRC-DATA-001` is the pinned normalization input for raw six stats and modern family/game metadata;
- conservative implications are D1;
- exact ancient locality, culture, market structure, taboo, ownership and encounter placement are D2;
- absence of a safe-removal statement is not evidence that removal is safe;
- regeneration evidence is species- and tissue-specific and is not generalized to immortality, automatic combat healing or other species;
- evidence that a body-derived object is valuable is not evidence that it is renewable, safely harvestable or conventionally obtainable as loot;
- modern gameplay `held_items` metadata is not treated as diegetic body-resource provenance.

Pinned structured source revision:

```text
PokeAPI/api-data @ 2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

No blocking Human Design Gate is exposed. Existing species-local resource, injury, ethics and inventory contracts are sufficient.

## 2. Source registry

| Ref | Source | Primary use |
|---|---|---|
| `OFFICIAL-DEX-CUBONE-PH` | `https://ph.portal-pokemon.com/play/pokedex/0104` | maternal skull, mourning behavior, Ground identity |
| `OFFICIAL-DEX-MAROWAK-SG` | `https://sg.portal-pokemon.com/play/pokedex/0105` | bone weapon use, rhythmic bone communication, Ground identity |
| `OFFICIAL-DEX-CHANSEY-PH` | `https://ph.portal-pokemon.com/play/pokedex/0113` | nutritious eggs, voluntary sharing with injured Pokémon/people |
| `OFFICIAL-DEX-TANGELA-PH` | `https://ph.portal-pokemon.com/play/pokedex/0114` | painless vine detachment, next-day regrowth, culinary use |
| `OFFICIAL-DEX-STARYU-SG` | `https://sg.portal-pokemon.com/play/pokedex/0120` | strong regeneration restoring major injury within roughly half a day |
| `OFFICIAL-DEX-STARMIE-PH` | `https://ph.portal-pokemon.com/play/pokedex/0121` | valuable core/accessory trade evidence, mysterious signaling |
| `SRC-DATA-001` | `PokeAPI/api-data@2cda0b56a3a8ad2529d8aac73528225f96d2c848` | raw six stats, types, physical metadata and modern game/family context |

Long flavor text is not copied. Claims below are paraphrased and version-scoped.

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
| #104 | Cubone | 50 | 50 | 95 | 40 | 50 | 35 | `2/2/4/2/2/1` |
| #105 | Marowak | 60 | 80 | 110 | 50 | 80 | 45 | `3/4/5/2/4/2` |
| #113 | Chansey | 250 | 5 | 5 | 35 | 105 | 50 | `6/1/1/1/5/2` |
| #114 | Tangela | 65 | 55 | 115 | 100 | 40 | 60 | `3/2/5/5/2/3` |
| #120 | Staryu | 30 | 45 | 55 | 70 | 55 | 85 | `1/2/2/3/2/4` |
| #121 | Starmie | 60 | 75 | 85 | 100 | 85 | 115 | `3/3/4/5/4/5` |

No manual rating exception is required.

Important domain separation:

```text
Chansey_Vigor_6 != physical_armor_or_Guard
Tangela_Guard_5 != proof_all_vines_are_armor
Staryu_Vigor_1 != denial_of_source_backed_regeneration
Starmie_Guard_4 != proof_core_removal_is_safe
regeneration_capability != flat_rating_bonus
resource_value != combat_weak_point
```

## 4. Resource/remains classification

| Species | Object/tissue | Origin | Injury/death required | Renewable | Consent/behavior semantics | Safe harvest proven? |
|---|---|---|---|---|---|---|
| Cubone | mother's skull | dead relative remains | death of mother precedes possession | no evidence | identity/grief-bound possession | **no** |
| Marowak | carried bones | carried object; exact origin not established here | unknown | unknown | weapon + rhythmic communication | **no** generic harvest claim |
| Chansey | nutritious egg | living biological output | no | repeated production implied, rate unknown | voluntary sharing with injured beings explicit | only voluntary transfer supported |
| Tangela | vines | living body tissue | detachment occurs without pain | yes; next-day regrowth explicit | can detach when grabbed; culinary use explicit | **yes only for this narrow tissue fact** |
| Staryu | regenerating body | living anatomy | injury can precede regeneration | tissue restoration supported | no resource-transfer behavior established | **no resource claim** |
| Starmie | core | living anatomy | removal requirement unknown | unknown | market value exists; consent absent | **no** |

This table is deliberately asymmetric. Tangela is a positive control demonstrating that safe renewable biological gathering can exist when the source explicitly supports it; that permission does not propagate to other species.

## 5. Cubone / Marowak evidence packet

### Cubone — C1

- Cubone is Ground type;
- current official material states that it wears the skull of its dead mother;
- the skull is inseparable from the species' presented mourning/identity behavior in the reviewed text;
- current official material also depicts ongoing grief for its mother.

Narrow conclusion:

```text
maternal_skull_is_identity_bound_remains == true
maternal_skull_is_generic_equipment == false
maternal_skull_is_generic_corpse_drop == false
safe_forcible_removal_supported == false
population_reproduction_arithmetic_inferred == false
```

The dossier may author local funeral, taboo, protection or theft consequences as D2, but no universal religion or remains-ownership law is created in P4.

### Marowak — C1

- Marowak is Ground type;
- current official material describes bones used as thrown weapons;
- current official material describes rhythmic bone striking as communication with many patterns;
- revenge/parent-related behavior appears in current official material.

Narrow conclusion:

```text
bone_use_is_weapon_capability == true
bone_use_is_communication_capability == true
all_bones_interchangeable_inventory_items == false
bone_origin_is_body_harvest == unknown
Marowak_death_guarantees_bone_drop == false
```

Alolan Marowak is later regional-form context and does not substitute for mandatory original #105.

## 6. Chansey evidence packet

### Chansey — C1

- Chansey is Normal type;
- it lays highly nutritious eggs;
- it voluntarily shares eggs with injured Pokémon or people;
- current official family presentation includes Happiny and Blissey, but they are later-generation family context outside P4's mandatory #001-#151 roster.

Narrow conclusion:

```text
renewable_biological_output_supported == true
injury_or_death_required_for_output == false
voluntary_sharing_supported == true
forced_extraction_supported == false
industrial_farming_supported == false
egg_currency_supported == false
Happiny_or_Blissey_added_to_mandatory_P4_scope == false
```

A later P5 event may use a freely offered Chansey egg as food/medical aid. P4 does not define production rate, shelf life, dosage, breeding throughput, monetary denomination or a repeatable farming loop.

## 7. Tangela evidence packet

### Tangela — C1

- Tangela is Grass type;
- grabbed vines can detach without pain;
- detached/lost vines regrow by the next day;
- current official material gives the vines a culinary use;
- Tangrowth is later-generation evolution context, not an additional mandatory P4 species.

Narrow conclusion:

```text
vine_detachment_without_pain_supported == true
vine_next_day_regrowth_supported == true
vine_culinary_use_supported == true
safe_renewable_resource_permission_is_species_local == true
all_Tangela_tissue_is_painless_to_remove == false
all_Pokemon_regrow_harvested_tissue == false
Tangrowth_added_to_mandatory_P4_scope == false
```

This is the batch's positive control for a genuinely renewable body-derived resource.

## 8. Staryu / Starmie evidence packet

### Staryu — C1

- Staryu is Water type;
- current official material describes extremely strong regeneration;
- even major bodily injury can be restored to the previous state within roughly half a day.

Conservative boundary:

```text
major_injury_regeneration_supported == true
regeneration_is_species_capability == true
regeneration_equals_immortality == false
death_is_automatically_reversible == false
combat_turn_auto_heal == false
Vigor_or_Guard_flat_bonus_from_regeneration == false
core_destruction_or_removal_weak_point == unknown
```

D-020's injury, defeat, critical condition and death states therefore remain distinct. P5 may author recovery state/timing around surviving Staryu, but P4 does not create universal regenerative HP ticks.

### Starmie — C1

- Starmie is Water/Psychic;
- current official material describes its sparkling core as a high-priced accessory material traded secretly;
- it also describes mysterious emitted signals/radio-wave-like behavior.

Conservative boundary:

```text
core_has_modern_valuation_exploitation_evidence == true
core_safe_removal_supported == false
core_removal_survivability == unknown
core_regrowth_supported == false
core_is_guaranteed_drop == false
ancient_black_market_infrastructure_proven == false
mysterious_signaling_creates_radio_technology == false
```

The source supports poaching/protection/taboo/temptation hooks as possible D2 derivatives. It does not authorize an ancient organized market, exact prices or a renewable core economy.

## 9. Structured-data held-item boundary

Pinned PokeAPI records modern gameplay `held_items` for some members of this batch, including examples such as Thick Club, Lucky Egg, Stardust and Star Piece across later games.

These fields are retained only as versioned modern-game metadata and **are not promoted to C1 biological-resource claims**.

```text
held_item_metadata_equals_body_part == false
held_item_metadata_equals_ancient_drop_table == false
held_item_metadata_overrides_official_resource_semantics == false
```

This prevents a structured gameplay field from silently creating the exact generic loot rule this batch is intended to reject.

## 10. Baseline-era presence conclusion

No reviewed source requires any of these six original species to be artificially created or absent from the ancient baseline.

Therefore baseline presence remains `plausible-derived`, while exact ancient future-Kanto locality is D2.

```text
chronology_anomaly_required == false
opening_locality_presence_required == false
total_game_direct_encounterability_required_by_D034 == true
later_generation_family_context_expands_mandatory_roster == false
```

## 11. Required resource / hazard records

Full-schema authoring must include at least:

- `cubone-maternal-skull-boundary` — identity/remains object, not generic loot;
- `marowak-bone-weapon` — thrown/striking bone hazard;
- `marowak-bone-rhythm` — communication/knowledge clue;
- `chansey-voluntary-nutritious-egg` — food/aid resource permission without farming subsystem;
- `tangela-painless-vine-detachment` — species-local detachable tissue permission;
- `tangela-next-day-vine-regrowth` — resource renewability/recovery boundary;
- `staryu-major-regeneration` — post-injury recovery permission, not immortality or combat auto-heal;
- `starmie-core-valuation-boundary` — exploitation/poaching hook without safe-removal claim;
- `starmie-mysterious-signal` — anomalous knowledge clue without radio-tech backfill.

## 12. Cross-system contradiction review

```text
portable_containment_assumed == false
capture_equals_companionship == false
visible_companion_slots == 3
kill_XP_created == false
generic_corpse_inventory_created == false
generic_body_part_drop_table_created == false
generic_harvest_skill_subsystem_created == false
generic_breeding_or_farming_subsystem_created == false
generic_regeneration_combat_rule_created == false
resource_value_equals_safe_harvest == false
modern_market_evidence_backfills_ancient_market == false
modern_held_items_backfill_ancient_loot == false
later_generation_relatives_expand_mandatory_roster == false
blocking_human_design_gate_count == 0
```

Result: **PASS**.

## 13. Source-review outcome

```text
species_reviewed == 6
source_review == PASS
rating_profiles_reproducible == 6
manual_rating_exception_count == 0
resource_origin_classification == PASS
injury_death_requirement_classification == PASS
renewability_classification == PASS
consent_behavior_semantics_classification == PASS
regeneration_death_boundary == PASS
held_item_metadata_boundary == PASS
later_generation_family_scope_boundary == PASS
blocking_human_design_gate_count == 0
```

Batch 08 is ready for full-schema authoring.

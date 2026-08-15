# P4 Batch 08 — Biological Resources, Remains & Regeneration Plan

Status: **SELECTED — SOURCE REVIEW NEXT**  
Date: **2026-08-15**  
Tracks: **#5**

## 1. Purpose

P4 already has per-species `hunting_materials_and_resources`, `technology_and_craft`, injury, hazard, companionship and ecology fields, but Batches 01-07 have not yet deliberately stress-tested the boundary between a living Pokémon body and conventional RPG loot.

Batch 08 therefore tests **biological resources, dead-relative remains, voluntary renewable output, painless detachable tissue, regeneration, and valuable anatomy without assuming generic harvestability**.

The selected roster is:

- #104 Cubone
- #105 Marowak
- #113 Chansey
- #114 Tangela
- #120 Staryu
- #121 Starmie

All six are currently `not_started` in `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`.

## 2. Why this batch now

The project direction already says that hunting, killing and material use are species- and culture-sensitive rather than generic loot logic. What is still unproven is how that principle behaves when official material itself describes body-derived objects or unusually strong regeneration.

This batch provides four deliberately different cases:

1. **dead-relative remains / identity-bound object** — Cubone's mother's skull and the Cubone/Marowak bone relationship;
2. **voluntary renewable biological output** — Chansey lays nutritious eggs and shares them with injured Pokémon or people;
3. **painless detachable and rapidly regrown tissue** — Tangela can lose grabbed vines without pain and replace them by the next day;
4. **extreme regeneration plus valuable core anatomy** — Staryu can restore severe injuries, while Starmie's core is explicitly described as a valuable accessory material traded in secret.

These cases let P4 prove that `resource exists` does not collapse into `kill creature -> receive item`, while still allowing source-backed gathering, trade, medicine, craft, taboo and exploitation hooks where appropriate.

## 3. Current official selection evidence

These are **selection pointers only**. Claim-level version/provenance review remains mandatory before dossier authoring.

### #104 Cubone

Current official Pokédex material states that Cubone wears its dead mother's skull and cries for its dead mother.

Selection pressure:

- a body-derived object can be identity-bound and grief-bound rather than loot;
- source text must not be expanded into unsupported population arithmetic, reproduction rules or a universal corpse-item system;
- possession of the skull does not imply that another character can safely or appropriately take it.

Current official pages checked:

- https://www.pokemon.com/us/pokedex/cubone
- https://ph.portal-pokemon.com/play/pokedex/0104

### #105 Marowak

Current official Pokédex material describes Marowak using bones as weapons and rhythmic communication tools, including behavior associated with avenging a parent.

Selection pressure:

- a persistent carried bone can simultaneously be a weapon, cultural/behavioral communication object and identity-bearing resource;
- the dossier must not assume every bone is interchangeable equipment or generic harvest loot;
- Alolan Marowak remains a later regional form and does not replace the mandatory original form.

Current official page checked:

- https://sg.portal-pokemon.com/play/pokedex/0105

### #113 Chansey

Current official Pokédex material states that Chansey lays highly nutritious eggs and shares them with injured Pokémon or people.

Selection pressure:

- renewable biological output may support food/medical hooks without requiring injury or death;
- voluntary sharing is not equivalent to unrestricted extraction, farming, breeding or an egg currency;
- current Happiny/Blissey family metadata is source context only; later-generation relatives remain outside the mandatory Gen-I 151 baseline unless separately added.

Current official page checked:

- https://ph.portal-pokemon.com/play/pokedex/0113

### #114 Tangela

Current official Pokédex material states that grabbed vines can snap off without pain, that lost vines regrow by the next day, and that vines have a source-described culinary use.

Selection pressure:

- source-backed detachable tissue can be a renewable resource without making all Pokémon body parts renewable or painless to harvest;
- regrowth timing is a capability fact, not a universal healing rule;
- Tangrowth is a later-generation evolution and remains outside the mandatory baseline.

Current official page checked:

- https://ph.portal-pokemon.com/play/pokedex/0114

### #120 Staryu

Current official Pokédex material describes exceptionally strong regeneration capable of restoring major injuries within roughly half a day.

Selection pressure:

- regeneration must be represented as a species capability rather than inflated `Vigor`/`Guard` or generic immortality;
- severe injury, encounter defeat and death remain distinct states under D-020;
- source review must determine the narrowest defensible boundary around the core and regeneration without inventing anatomy.

Current official page checked:

- https://sg.portal-pokemon.com/play/pokedex/0120

### #121 Starmie

Current official Pokédex material describes Starmie's sparkling core as a high-priced accessory material traded in secret and also describes mysterious emitted signals.

Selection pressure:

- evidence that a body structure has market value does not itself prove safe removal, survivability, renewable harvesting or ancient organized trade infrastructure;
- a valuable anatomical target can create poaching, taboo, criminal or protection hooks without becoming a generic drop table;
- mysterious signaling remains capability/knowledge evidence and does not automatically create radio technology in the ancient setting.

Current official page checked:

- https://ph.portal-pokemon.com/play/pokedex/0121

## 4. Batch 08 design boundaries to prove

Source review and dossier authoring should attempt to close the following regressions without adding a new global subsystem.

### 4.1 No generic corpse-drop rule

```text
pokemon_death_implies_generic_loot_drop == false
body_part_named_in_source_implies_safe_harvest == false
body_part_named_in_source_implies_inventory_item == false
resource_value_implies_ordinary_market_availability == false
```

A dead Pokémon may leave a body or remains according to scene/state fiction, but usable materials, social permission, preservation, transport, taboo, danger and knowledge remain species/context specific.

### 4.2 Cubone / Marowak remains are species-local

```text
cubone_maternal_skull == source_backed_identity_fact
cubone_skull_is_generic_equipment == false
cubone_skull_is_ordinary_loot == false
cubone_skull_implies_breeding_simulator == false
marowak_bone_is_generic_weapon_template == false
```

Do not infer exact reproductive demographics, corpse-processing customs, universal skull origin beyond the source-backed statement, or a rule that every carried biological object can be detached from its owner.

### 4.3 Chansey eggs are voluntary renewable output, not farming currency

```text
chansey_egg_nutrition == source_backed
chansey_voluntary_sharing == source_backed
chansey_egg_requires_killing_chansey == false
chansey_egg_implies_generic_breeding_system == false
chansey_egg_implies_shop_currency == false
```

Any ancient medical/food use must be bounded by actual access, consent/behavior, spoilage/logistics if authored, local knowledge and rarity rather than a global healing-item economy.

### 4.4 Tangela proves source-specific painless renewable tissue

```text
tangela_vine_detachment_can_be_painless == source_backed
tangela_vine_regrowth == source_backed
all_pokemon_body_parts_regrow == false
all_harvesting_is_painless == false
regeneration_equals_combat_invulnerability == false
```

This is the positive control for a biological material that can plausibly be gathered without killing or severely injuring the Pokémon.

### 4.5 Staryu/Starmie regeneration and cores remain anatomy-specific

```text
staryu_regeneration == explicit_capability
staryu_regeneration_encoded_as_flat_Guard_bonus == false
staryu_regeneration_equals_death_immunity == false
starmie_core_value_implies_safe_removal == false
starmie_core_value_implies_renewable_drop == false
```

Source review must distinguish what is actually said about regeneration/core function from project speculation. If survival after core destruction/removal is unsupported, keep it `unknown` rather than inventing a weak-point or harvest rule.

### 4.6 Modern trade evidence does not backfill ancient infrastructure

Starmie's current Pokédex wording about expensive accessories and secret trade is evidence of human valuation/exploitation, not automatic evidence for the project's ancient baseline having the same market, currency, jeweler network or criminal organization.

Likewise, current official family pages for Chansey and Tangela include later-generation relatives. Those relationships may remain provenance/context, but P4's mandatory roster stays #001-#151 unless the owner explicitly expands scope.

## 5. Human Design Gate policy

**No owner decision is required for Batch 08 selection.**

The existing project direction already prefers species- and culture-sensitive hunting/material use over generic loot logic, so the narrow default is:

- model each resource/remains case locally;
- preserve source-backed biological facts;
- do not create universal harvesting, crafting-drop, corpse-inventory, breeding or regeneration systems during P4.

Open a Human Design Gate only if source review proves that one of these six dossiers cannot be represented faithfully without a durable setting-wide rule about death/remains ownership, sentient-body harvesting, regeneration/death semantics, or another product-defining subsystem.

## 6. Expected Batch 08 source-review outputs

Before full-schema dossier authoring, source review should explicitly classify:

```text
species_count == 6
resource_origin_classification_complete_count == 6
resource_requires_injury_or_death_classification_complete_count == 6
renewability_classification_complete_count == 6
regeneration_boundary_review_complete_count >= 3
later_generation_family_scope_regression == PASS
ancient_market_infrastructure_backfill == false
blocking_human_design_gate_count == 0_or_explicitly_raised
```

Suggested resource-origin labels for review, not yet frozen schema fields:

- `identity_bound_remains`
- `carried_biological_object`
- `voluntary_biological_output`
- `painless_detachable_regrowth`
- `regenerative_anatomy`
- `valuable_anatomical_target`

Do not add these as shared schema fields unless source review demonstrates reusable value beyond this batch; dossier-local structured notes are sufficient by default.

## 7. Manifest policy

Selection alone does **not** promote any coverage row.

Current coverage remains:

```text
dossier_complete_count == 58
pilot_reviewed_count == 2
not_started_count == 91
draft_count == 0
blocking_p4_gate_count == 0
```

Expected clean Batch 08 completion later:

```text
dossier_complete_count == 64
pilot_reviewed_count == 2
not_started_count == 85
draft_count == 0
blocking_p4_gate_count == 0
```

The six rows may move to `complete` only after claim-level source review, deterministic stat normalization, all 20 shared dossier sections, resource/remains/regeneration regressions, P2/P3/P4 contradiction review and batch audit all pass.

## 8. Exact next work

1. Source-review all six selected species using current official Pokémon material plus the pinned structured-data revision used by P4.
2. Separate canon facts from ancient-setting interpretation for death/remains, renewable output, detachable tissue, regeneration and valuable anatomy.
3. Resolve Staryu/Starmie core/regeneration claims conservatively; keep unsupported survival/weak-point/harvesting statements `unknown`.
4. Confirm Chansey/Tangela later-generation family metadata does not expand the mandatory Gen-I roster.
5. If no blocking Human Design Gate appears, author all six full-schema dossiers and run the Batch 08 completion audit before manifest promotion.

P5 remains blocked until the final mandatory `151/151` P4 audit passes.

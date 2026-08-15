# P4 Batch 03 — Branching, Transformation, and Multi-Body Semantics Plan

Status: **SELECTED — ready for source review and dossier authoring**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`

## Purpose

Batch 01 closed pilot evolution families and Batch 02 stress-tested D-032 across ordinary metamorphosis, a physical evolution-stone trigger, and modern trade metadata.

Batch 03 deliberately moves away from repeating those same mechanism tests. It selects eight species that exercise four still-unproven domain boundaries:

1. **one species with multiple possible evolution outcomes** rather than one linear next stage;
2. **temporary biological transformation that is explicitly not evolution**;
3. **one Pokémon species represented by multiple coordinated heads / wills** without treating each visible body-part as a separate companion slot;
4. **species-specific carried equipment and learned combat style** without turning a held natural object into generic loot or a class/equipment system.

The batch remains compact enough for full-schema review while adding new P4 regression fixtures before broader ecology-driven authoring.

## New dossiers

| Dex | Species | Family/domain | Primary stress job |
|---:|---|---|---|
| #083 | Farfetch'd | singleton | Species-specific carried stalk as weapon/food; learned style variation; equipment dependency without generic loot. |
| #102 | Exeggcute | Exeggcute → Exeggutor | Cluster-of-six / telepathic coordination; establish that one canonical Pokémon entity may contain multiple coordinated heads without six companion slots. |
| #103 | Exeggutor | Exeggcute → Exeggutor | Multiple heads with individual wills; rare head-loss continuity; evolution must preserve one persistent Pokémon entity without flattening internal plurality. |
| #132 | Ditto | singleton | Perfect counterexample for D-032: bodily transformation and copied form do not equal species evolution. |
| #133 | Eevee | Eevee branching family | First branching-evolution root; environment-sensitive / stone-sensitive mutability without a universal evolution menu. |
| #134 | Vaporeon | Eevee branching family | Water-adapted branch; audit capability discontinuity and environmental/ecological consequences. |
| #135 | Jolteon | Eevee branching family | Electric branch; audit hazard semantics independently from Pikachu/Raichu despite overlapping element. |
| #136 | Flareon | Eevee branching family | Fire branch; audit heat/fire hazard and branch-specific ecology without generic elemental reskinning. |

New-dossier count: **8**.

## Why these species

### Eevee family — branching evolution rather than linear progression

Official Pokédex material explicitly identifies Eevee as capable of evolving into many forms and ties its irregular genetic structure to environmental adaptation and exposure to elemental-stone radiation.

For the mandatory Generation-I roster, Batch 03 owns only:

- Eevee;
- Vaporeon;
- Jolteon;
- Flareon.

Later-generation Eevee evolutions remain outside the mandatory baseline under D-011, even though current official Pokédex pages display them in the broader family tree.

This family tests a new D-032 question: **an individual may have several mutually exclusive species outcomes, but it still experiences one actual persistent-individual transformation rather than selecting a stat package from a menu.**

Source review must determine the exact modern trigger metadata and what can safely be retained in the ancient setting. Existing Pikachu/Raichu precedent forbids turning stones into common shop currency or a generic `Evolve` command.

Required invariants:

```text
branching_evolution_is_menu_class_change == false
all_eevee_branches_simultaneously_available == false
stone_inventory_forces_companion_evolution == false
branch_choice_ignores_companion_agency == false
post_evolution_species_identity_changes == true
persistent_individual_history_survives == true
```

### Ditto — transformation is not evolution

Official material states that Ditto can rearrange its cellular structure to transform into other life-forms, while also explicitly listing Ditto as a species that does not evolve.

This makes Ditto the cleanest regression case for terminology and runtime semantics:

```text
transformed_shape != evolved_species
copied_appearance != species_identity
copied_capability_expression != permanent_species_profile_replacement
```

P4 must not create a generic shapeshift loophole that lets Ditto permanently acquire another species' dossier, bond burden, evolution family, or canonical identity.

### Exeggcute / Exeggutor — multi-head and multi-will species entities

Official material describes Exeggcute as maintaining a six-member/head cluster through telepathic coordination. Exeggutor is described as having heads with wills of their own, and official material also preserves the unusual claim that a lost head may rarely continue as an Exeggcute.

The purpose of this family is **not** to invent a universal metaphysics of Pokémon souls or personhood. The bounded P4 rule to test is narrower:

- canonical species identity remains the unit of the dossier and companion slot;
- visible heads/constituent parts do not automatically create multiple companion entities;
- internal coordination, disagreement, loss and regeneration/continuity are authored as species capabilities/behavior where official evidence supports them;
- any fact that would require a general rule for consciousness across multi-bodied Pokémon must be escalated rather than generalized from this family.

If source review shows that a durable cross-species identity rule is unavoidable, expose a Human Design Gate before authoring the final treatment.

### Farfetch'd — carried tool and learned style without loot logic

Official material describes Farfetch'd using its carried plant stalk as a cutting weapon, emergency food, and the basis of distinct observed fighting styles.

This gives P4 a useful equipment/behavior test that does not depend on evolution:

- the stalk is part of the species' ordinary behavior/ecology, not generic dropped equipment;
- fighting-style variation can demonstrate learned individual behavior under D-031 without changing the species baseline;
- losing, replacing, defending or consuming the stalk can affect encounter state and capability without adding a universal held-item subsystem prematurely;
- later Galarian Farfetch'd / Sirfetch'd material remains outside the mandatory Generation-I baseline except as explicitly marked out-of-scope context.

## Primary source pointers for selection

These sources justify the **selection pressure only**. Full source review still has to collect the exact claims used in each dossier.

| Ref | Source | Selection use |
|---|---|---|
| `OFFICIAL-DEX-EEVEE-SG` | `https://sg.portal-pokemon.com/play/pokedex/0133` | multiple-form evolution potential; irregular genetic structure; environmental / elemental-stone mutation language |
| `OFFICIAL-DEX-DITTO-SG` | `https://sg.portal-pokemon.com/play/pokedex/0132` | cellular transformation into other life-forms; explicitly no evolution |
| `OFFICIAL-DEX-EXEGGCUTE-SG` | `https://sg.portal-pokemon.com/play/pokedex/0102` | six-part/head cluster; telepathic coordination |
| `OFFICIAL-DEX-EXEGGUTOR-PH` | `https://ph.portal-pokemon.com/play/pokedex/0103` | heads with wills of their own; rare head-loss → Exeggcute claim |
| `OFFICIAL-DEX-FARFETCHD-PH` | `https://ph.portal-pokemon.com/play/pokedex/0083` | stalk used as weapon/food; distinct learned fighting styles |
| `POKEAPI-EVOLUTION-CONTRACT` | `https://pokeapi.co/docs/v2` | structured modern evolution-chain / trigger metadata during the next source-review step |

Long flavor text must not be copied into dossiers. Claims are to be paraphrased and classified under the existing P4 evidence model.

## Required source-review order

1. confirm identity, current canonical typing, raw six stats and family relationships;
2. confirm modern evolution trigger metadata where applicable;
3. collect official Pokédex evidence for ecology, behavior, body properties, hazards and transformation/evolution clues;
4. classify each material claim as C1 / C2 / D1 / D2 / unresolved under the existing contract;
5. derive all `p4-six-axis-v1` profiles mechanically;
6. author capability/hazard records before threat summaries;
7. author all eight complete dossiers against the frozen shared schema;
8. review Eevee and Exeggcute families as persistent-individual sequences;
9. run Ditto transformation-vs-evolution regression checks;
10. run P2/P3/P4 contradiction checks;
11. promote manifest status only after the entire batch passes.

## Cross-system checks

Batch 03 must preserve:

- D-011 Generation-I mandatory roster without silently expanding later-generation forms/evolutions into baseline scope;
- D-013 voluntary companionship and exactly three visible companion slots;
- D-018 canon-first derivation;
- D-019 progressive species identification;
- D-020 serious selective lethality;
- D-024 bounded human checks;
- D-028 no generic Pokémon loot/equipment reward loop;
- D-031 fixed species baselines plus explicit individual variation/learned behavior;
- D-032 evolution distinct from ordinary growth and from temporary transformation.

## Batch 03 exit target

If source review exposes no blocking Human Design Gate:

```text
new_dossier_count == 8
new_dossier_complete_count == 8
branching_evolution_family_pass_count == 1
multi_head_family_pass_count == 1
transformation_not_evolution_regression == PASS
species_equipment_behavior_regression == PASS
manual_rating_exception_count == 0
batch_blocking_gate_count == 0
rating_scale_version == p4-six-axis-v1
```

Expected manifest state after a clean close:

```text
dossier_complete_count == 28
pilot_reviewed_count == 2
not_started_count == 121
draft_count == 0
blocking_p4_gate_count == 0
```

The count target never authorizes bypassing a source uncertainty or a real Human Design Gate.

## Exact next work

Source-review #083 Farfetch'd, #102 Exeggcute, #103 Exeggutor, #132 Ditto, #133 Eevee, #134 Vaporeon, #135 Jolteon and #136 Flareon.

If the review remains unblocked, continue in the same coherent Batch 03 slice through full-schema dossier authoring, cross-family/domain regression checks, manifest promotion and completion audit.

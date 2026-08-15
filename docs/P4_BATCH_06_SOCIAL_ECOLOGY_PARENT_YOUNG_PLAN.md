# P4 Batch 06 — Social Ecology, Sex-Linked Families, and Parent/Young Identity Plan

Status: **SELECTED — ready for source review and dossier authoring**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/GEN1_SPECIES_COVERAGE_PLAN.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`, `docs/P4_MAGNETON_COMPOSITE_IDENTITY_CONTRACT.md`

## Purpose

Batches 01-05 established deterministic species ratings, stat-independent hazards, ordinary-versus-exceptional individuals, species-specific evolution, branching/reversible evolution, transformation distinct from evolution, host dependency, composite provenance, and chronology-safe non-presence.

A still-underrepresented Generation-I boundary is **social ecology and the unit of an encounter**: how family, herd, sex-linked species identity, dependent young, and protective behavior affect scene permissions without turning every social relationship into a new combatant, companion slot, generic reproduction system, or player-level-scaled enemy pack.

Batch 06 therefore selects eight species that jointly pressure:

1. two canonically separate National Pokédex species lines that are strongly sex-linked but must not be collapsed into a generic male/female form toggle;
2. family and group behavior that changes approach permissions without becoming an automatic swarm stat bonus;
3. parental defense where threat is contextual and can spike sharply when young are endangered;
4. Kangaskhan's permanently visible child, which pressures the distinction between one mandatory roster species entity and a dependent associated individual;
5. herd protection and battle-scarred social role in Tauros without hidden level scaling or generic `elite` affixes;
6. the boundary between species-local social facts and a future general reproduction/offspring simulation system.

This is a **selection plan only**. It does not decide Kangaskhan child persistence, universal offspring mechanics, breeding rules, or metaphysical personhood. Those remain source-review questions and, if necessary, Human Design Gates.

## New dossiers

| Dex | Species | Family/domain | Primary stress job |
|---:|---|---|---|
| #029 | Nidoran♀ | Nidoran♀ → Nidorina → Nidoqueen | Canonically separate sex-linked species identity; poison defense; small-bodied threat without assuming generic sexual-dimorphism rules. |
| #030 | Nidorina | Nidoran♀ family | Source-backed friend/family behavior and separation stress; tests social-state effects without inventing a universal morale meter. |
| #031 | Nidoqueen | Nidoran♀ family | Parent/young defense pressure, hard-scale physical threat, and Moon-Stone evolution continuity without creating generic parenting bonuses. |
| #032 | Nidoran♂ | Nidoran♂ → Nidorino → Nidoking | Parallel but separately numbered family; sensory vigilance and poison-horn threat; tests paired-family consistency. |
| #033 | Nidorino | Nidoran♂ family | Hostile-presence detection, defensive escalation, and dangerous horn/barb approach permissions. |
| #034 | Nidoking | Nidoran♂ family | High-force rampage pressure; tests destructive threat without importing modern infrastructure from illustrative Pokédex comparisons. |
| #115 | Kangaskhan | Parent Pokémon / non-evolving Gen-I species | Permanently associated child and maternal protection; first explicit parent-plus-dependent encounter-unit stress case. |
| #128 | Tauros | herd / non-evolving Gen-I species | Herd hierarchy, protector role, battle scars, charging behavior, and ordinary-versus-exceptional herd member separation. |

New-dossier count: **8**.

## Why this batch

### Social ecology must not become hidden stat scaling

D-031 already establishes fixed species baselines and explicit individual variation. Batch 06 applies that rule to social groups:

```text
herd_or_family_membership != player_level_scaling
pack_size != automatic_species_stat_bonus
protector_role != generic_elite_affix
protective_context_may_change_behavior_and_permissions == true
named_exceptional_individuals_remain_explicit == true
```

A late-game character may be able to treat an ordinary Nidoran or routine Tauros encounter as manageable while still facing a dangerous authored herd protector, enraged parent, or scarred named individual. The danger comes from concrete individuals, numbers, terrain, behavior, and state—not invisible rubber-banding.

### Nidoran♀ / Nidoran♂ — separate species rows, not a generic gender form

The official Pokédex treats Nidoran♀ (#029) and Nidoran♂ (#032) as separate National Pokédex entries with separate evolution families. Their sex linkage is obvious, but the project must preserve canonical roster identity rather than normalizing them into one invented `Nidoran` species plus a sex field.

The source-review pass must preserve:

```text
nidoran_f_species_key != nidoran_m_species_key
national_dex_29 != national_dex_32
sex_linkage_does_not_collapse_species_identity == true
generic_gender_form_system_required == false
```

This batch does **not** create a global reproduction or heredity model. Any relation between the two lines beyond directly supported species/family facts remains outside P4 unless needed for a dossier field.

### Nidorina / Nidoqueen — family behavior without a universal morale or parenting system

Current official Pokédex material for Nidorina describes barbs being kept tucked away around friends or family and nervousness when separated. Nidoqueen is described as especially formidable while defending its young.

Those are strong scene-authoring hooks, but they are species-local evidence. They should not silently become universal mechanics such as:

- every Pokémon receiving a generic `family morale` score;
- all parents receiving a fixed attack bonus;
- every social separation becoming the same status effect;
- mandatory reproduction tracking for companions.

Instead, the dossier should expose bounded behavior and encounter-state hooks that P5 can later consume deterministically.

### Nidoran♂ / Nidorino / Nidoking — vigilance and rampage without infrastructure backfill

Official material gives the male line useful escalation pressure: Nidoran♂ has unusually mobile ears and strong sound detection, Nidorino aggressively challenges hostile presences with dangerous horn/barbs, and Nidoking is described as capable of extreme destructive force during a rampage.

Some Pokédex wording uses modern objects such as a transmission tower as a strength comparison. That comparison is evidence for destructive capability, **not** permission to place modern transmission infrastructure in the ancient setting.

```text
modern_comparison_object_in_flavor_text != baseline_world_infrastructure
hostile_presence_detection != omniscience
rampage_capability != always_aggressive
poison_horn_hazard != flat_stat_damage_formula
```

### Kangaskhan — parent plus dependent young as an encounter-unit stress test

Kangaskhan is categorized as the Parent Pokémon, and current official material explicitly describes the child in the pouch, the child sometimes playing outside it, and the mother remaining close and aggressively protective.

That creates a new P4 identity pressure distinct from Exeggcute or Magneton:

- the child is not a separate mandatory National Pokédex species;
- the parent and child are visibly distinct organisms/actors in source material;
- Mega Kangaskhan material further demonstrates parent-and-child coordinated action, but Mega Evolution remains outside the mandatory baseline and cannot be imported as ordinary ancient behavior;
- companionship and encounter systems still require a stable unit definition.

The source review must test whether a bounded species-local model can preserve the child as dependent associated state/provenance while Kangaskhan remains one active species entity and one visible companion slot.

**Selection does not resolve that question.** If preserving official evidence requires a durable rule about separate persistent child identity, independent actions, death/injury persistence, or companion-slot accounting that cannot be contained as a Kangaskhan-local rule, raise a Human Design Gate before full-schema completion.

### Tauros — herd protector, scars, and exceptional individuals

Current official Pokédex material describes Tauros fighting by locking horns and a herd protector taking pride in battle-scarred horns. This is an unusually clean test for D-031's explicit individual-variation model.

The intended regression is:

```text
ordinary_tauros_baseline_is_fixed == true
herd_protector_role_can_be_authored == true
battle_scars_can_be_persistent_individual_history == true
protector_role_does_not_require_species_stat_redefinition == true
generic_elite_hp_affix == forbidden
```

A named herd protector may be more dangerous through explicit stat deltas, learned behavior, injuries/scars, social position, terrain use, and supporting herd state. Ordinary Tauros do not increase because the player advanced.

## Selection-level source pointers

These references justify the **selection pressure only**. The next Batch 06 step must perform claim-level version/provenance review and collect pinned structured stat/evolution inputs before any dossier is promoted.

| Ref | Source | Selection use |
|---|---|---|
| `OFFICIAL-DEX-NIDORAN-F-SG` | `https://sg.portal-pokemon.com/play/pokedex/0029` | separate #029 identity, poison barbs, defensive toxin, Nidoran♀ family |
| `OFFICIAL-DEX-NIDORINA-SG` | `https://sg.portal-pokemon.com/play/pokedex/0030` | friend/family behavior and separation stress |
| `OFFICIAL-DEX-NIDOQUEEN-SG` | `https://sg.portal-pokemon.com/play/pokedex/0031` | hard-scale threat and defending-young pressure |
| `OFFICIAL-DEX-NIDORAN-M-SG` | `https://sg.portal-pokemon.com/play/pokedex/0032` | separate #032 identity and sound-detection behavior |
| `OFFICIAL-DEX-NIDORINO-SG` | `https://sg.portal-pokemon.com/play/pokedex/0033` | hostile-presence detection, horn/barb escalation |
| `OFFICIAL-DEX-NIDOKING-SG` | `https://sg.portal-pokemon.com/play/pokedex/0034` | destructive tail/rampage capability and modern-comparison boundary |
| `OFFICIAL-DEX-KANGASKHAN-SG` | `https://sg.portal-pokemon.com/play/pokedex/0115` | pouch child, child-outside-pouch behavior, maternal protection |
| `OFFICIAL-DEX-MEGA-KANGASKHAN-SG` | `https://sg.portal-pokemon.com/play/pokedex/0115_1` | selection-only evidence that official material can distinguish coordinated parent/child action; Mega behavior is not baseline authorization |
| `OFFICIAL-DEX-TAUROS-SG` | `https://sg.portal-pokemon.com/play/pokedex/0128` | horn fighting, herd protector role, battle-scarred horns |
| `POKEAPI-EVOLUTION-CONTRACT` | `https://pokeapi.co/docs/v2` | pinned structured modern species/stat/evolution metadata during full source review |

Long flavor text must not be copied into dossiers. Claims are to be paraphrased, version-tagged where relevant, and classified under the existing C1 / C2 / D1 / D2 / U evidence model.

## Required source-review order

1. confirm identity, typing, raw six stats, sex metadata where applicable, family membership, forms, and modern evolution metadata for all eight species;
2. explicitly verify that #029 and #032 remain separate canonical species rows throughout the project data model;
3. collect official version-tagged claims about Nidorina family behavior, Nidoqueen young-defense, Nidoran♂ sensory vigilance, Nidorino threat response, Nidoking rampage, Kangaskhan parent/child behavior, and Tauros herd/protector ecology;
4. classify every material claim as C1 / C2 / D1 / D2 / U;
5. derive all `p4-six-axis-v1` profiles mechanically with no manual exception unless the normalization itself fails;
6. author poison, horn/barb, charge, trampling/rampage, and protective-context hazards as permission/exposure/state records rather than flat stat-derived damage;
7. test Nidoran paired-family consistency without creating a generic gender-form or reproduction system;
8. test whether Nidorina/Nidoqueen social behavior can remain species-local state hooks rather than a universal morale/parenting subsystem;
9. test Kangaskhan encounter-unit and companion-slot semantics before full-schema promotion;
10. test Tauros ordinary/herd-protector/named-apex separation against D-031 and the no-scaling rule;
11. run evolution, family, companionship, serious-lethality, hazard, P2/P3/P4 contradiction, and provenance regressions;
12. promote manifest rows only after the whole batch passes and write the Batch 06 completion audit.

## Human Design Gate policy for this batch

**No owner decision is required merely to select the batch.** Most social/ecology behavior can be source-reviewed under existing P4 rules.

Raise a Human Design Gate only if source review proves that Kangaskhan or the sex-linked paired families require a durable cross-species rule that the current contracts do not define, especially:

- whether Kangaskhan's child must be a separately persistent individual with independent injury/death/history state;
- whether the child may take independent actions in ordinary non-Mega play and how that affects one visible companion slot;
- whether P4 must define a general offspring/reproduction simulation to represent the Nidoran lines or Kangaskhan faithfully;
- whether sex-linked species identity requires a project-wide species/form rule beyond preserving the separate canonical rows.

Default recommendation: **prefer the narrowest species-local representation that preserves official evidence and existing one-entity/one-slot semantics; do not create a universal breeding/offspring subsystem during P4 unless a dossier cannot be completed without it.**

## Cross-system checks

Batch 06 must preserve:

- D-011: all original #001-#151 receive substantive dossiers; later forms such as Mega Kangaskhan do not replace the mandatory original species;
- D-013: companionship remains rare with three visible companion slots; social group membership does not create free hidden companion slots;
- D-018: official evidence → bounded interpretation → explicit extrapolation;
- D-019: humans do not automatically know modern taxonomic or reproductive explanations for observed family behavior;
- D-020: protective rage, poison, horns, trampling, and rampage remain serious selective hazards without automatic death formulas;
- D-028: horns, poison barbs, hides, bones/scars, or other body materials do not create generic loot logic merely because they are salient;
- D-031: species baselines remain fixed; ordinary late-game triviality and explicit exceptional individuals both remain valid;
- D-032: both Nidoran lines use species-specific evolution treatment, and Moon Stone relationships do not imply a generic evolution menu or mass stone economy;
- D-033: Magneton's composite precedent may inform data-shape caution but does not automatically decide Kangaskhan parent/child identity;
- D-034: all selected species must ultimately have at least one direct encounter path in total game content, while this batch concerns how those encounters are represented rather than forcing routine spawns.

## Batch 06 exit target

If source review exposes no blocking P4 Human Design Gate:

```text
new_dossier_count == 8
new_dossier_complete_count == 8
paired_sex_linked_family_pass_count == 1
social_ecology_state_regression == PASS
parent_young_identity_regression == PASS
herd_protector_exception_regression == PASS
player_scaling_regression == PASS
modern_infrastructure_backfill_regression == PASS
manual_rating_exception_count == 0
batch_blocking_gate_count == 0
rating_scale_version == p4-six-axis-v1
```

Expected manifest state after a clean close:

```text
dossier_complete_count == 52
pilot_reviewed_count == 2
not_started_count == 97
draft_count == 0
blocking_p4_gate_count == 0
```

The selection itself leaves the current manifest unchanged at `44 complete / 2 pilot_reviewed / 105 not_started`.

## Exact next work

Source-review #029 Nidoran♀, #030 Nidorina, #031 Nidoqueen, #032 Nidoran♂, #033 Nidorino, #034 Nidoking, #115 Kangaskhan and #128 Tauros.

Before full-schema authoring, explicitly test whether Kangaskhan parent/child representation can remain a bounded species-local rule under the existing one-active-entity/one-visible-slot architecture. If that cannot be done without defining separately persistent child state or a general offspring system, stop at a Human Design Gate. Otherwise continue through all eight dossiers, regressions, manifest promotion and the Batch 06 completion audit.

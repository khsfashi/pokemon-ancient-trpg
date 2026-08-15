# P4 Batch 04 — Composite Bodies, Dependency, and Reversible Evolution Plan

Status: **SELECTED — ready for source review and dossier authoring**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`

## Purpose

Batches 01-03 established the fixed species-stat model, hazard-first authoring, ordinary-vs-exceptional individuals, evolution-vs-maturation, metamorphosis, stone and modern trade metadata, branching evolution, temporary transformation, multi-head single-entity semantics, and species-specific carried-tool behavior.

Batch 04 deliberately targets a different set of unresolved boundaries where the physical makeup of a Pokémon and its evolution relationship cannot be represented safely as a simple one-body linear stage change.

It selects eight species that jointly test:

1. **host / parasite control across evolution** without inventing a universal soul/personhood rule;
2. **interspecies-triggered and canonically reversible evolution** rather than an assumed irreversible stage transition;
3. **one species formed from multiple previously recognizable Pokémon units** without silently rewriting persistent identity or companion-slot rules;
4. **one species participating in another species' transformation while retaining its own independent evolution family**;
5. materially different hazard patterns: spores/contact status, delayed pain/slow reaction, Psychic utility, magnetic/electromagnetic interference, hard-shell clamping, spikes, and aquatic route pressure.

The batch remains compact enough for complete shared-schema authoring while maximizing new domain information per dossier.

## New dossiers

| Dex | Species | Family/domain | Primary stress job |
|---:|---|---|---|
| #046 | Paras | Paras → Parasect | Maturing fungal growth and parasite/host control beginning before evolution; spore/contact hazards must stay separate from low physical stats. |
| #047 | Parasect | Paras → Parasect | Strongest host-control case: mushroom-dominant body/behavior, immobility if the mushroom is removed, and medicinal-spore evidence without generic harvesting/loot assumptions. |
| #079 | Slowpoke | Slowpoke → Slowbro | Slow reaction, tail-fishing ecology and the precondition for a second species to trigger evolution; ordinary Slowpoke identity must remain intact before the attachment event. |
| #080 | Slowbro | Slowpoke → Slowbro | Canonical Shellder-dependent evolution plus explicit reversion to Slowpoke if the attached Shellder is removed; first direct regression against an implicit irreversibility assumption. |
| #081 | Magnemite | Magnemite → Magneton | Inorganic/metallic body, hovering and electromagnetic emission; also the pre-evolution unit for a multi-unit composite evolution. |
| #082 | Magneton | Magnemite → Magneton | Official material describes several/three Magnemite linked together and gathered to evolve; tests collective provenance, one species entity, and whether a Human Design Gate is required for merged prior identities/bonds. |
| #090 | Shellder | Shellder → Cloyster; Slowbro dependency | Independent species that can clamp onto Slowpoke and participate in Slowbro's state while still owning a separate ordinary evolution path to Cloyster. |
| #091 | Cloyster | Shellder → Cloyster | Confirms that Shellder's own species evolution is distinct from its participation in Slowbro; stresses extreme shell defense, spikes and aquatic environmental pressure. |

New-dossier count: **8**.

## Why these species

### Paras / Parasect — evolution under biological control pressure

Current official Pokédex material describes the mushrooms on Paras as controlling the bug, emerging as the Pokémon matures, and Parasect as a state in which the mushroom has become the dominant body/controller. Official material also describes poison spores and traditional medicinal use.

This family is useful because it forces P4 to separate several concepts that should not be collapsed:

```text
maturation_of_attached_fungus != species_evolution_by_itself
behavioral_control != generic_mind_control_system
host_body_damage != automatic_species_death_formula
medicinal_use_evidence != generic_loot_drop
```

The dossier may describe observable control, dependency and body-state facts where supported. It must not infer a universal answer about Pokémon consciousness, souls, legal personhood, or whether every host/parasite species shares the same identity model.

If companionship becomes materially ambiguous, the source review should classify the actual Paras/Parasect burden rather than create a cross-species metaphysics rule.

### Slowpoke / Slowbro — interspecies-triggered, reversible evolution

Current official Pokédex material explicitly states that a Shellder biting Slowpoke's tail causes Slowpoke to evolve into Slowbro, and that if the attached Shellder is thrown off in battle, Slowbro reverts to ordinary Slowpoke.

That makes this the first required P4 case where a canonical evolution stage is explicitly **species-dependent and reversible**.

Batch 04 therefore tests a bounded extension to D-032:

- evolution remains a real canonical species-stage change rather than ordinary maturation;
- the Slowbro state depends on an attached Shellder;
- removal can restore the prior Slowpoke species state because official evidence says so;
- reversion does not create a universal `de-evolve` command, reversal item, or generic rollback system;
- persistent history, injuries, learned behavior and relationship history must not be erased merely because the species stage reverts.

If later implementation needs a generic representation, it should be capable of expressing a species-specific reversible dependency without assuming all evolution is reversible.

### Shellder / Cloyster — participant species versus own evolution family

Shellder must be authored in this batch rather than treated as an unnamed Slowbro component.

Its own official family remains Shellder → Cloyster. Official material describes a very hard shell, vulnerable inner body, clamping behavior, and Cloyster's extreme shell/spike traits.

The key regression is:

```text
shellder_attached_to_slowpoke != shellder_evolved_into_slowbro
slowpoke_evolved_to_slowbro != shellder_family_replaced
shellder_own_evolution_to_cloyster remains independent
```

The final dossier must avoid inventing a catch/ownership exploit where one Slowbro automatically counts as separately owning or storing a free Shellder unless the later source-reviewed companion model explicitly supports such treatment.

### Magnemite / Magneton — composite evolution from multiple prior units

Current official Pokédex material describes Magnemite as a hovering iron-sphere Pokémon that emits electromagnetic waves. Magneton is described as several/three Magnemite linked by powerful magnetic force, including explicit official wording that three Magnemite gathered to evolve into Magneton.

This goes beyond Batch 03's Exeggcute/Exeggutor test. Exeggcute began as one canonical clustered species entity. Magneton creates pressure on the transition from recognizable Magnemite units into one canonical Magneton species entity.

The source-review step must therefore test:

```text
magneton_species_entity_count == 1
visible_component_count != automatic_companion_slot_count
component_origin_history_may_matter == true
universal_pokemon_soul_merge_rule == forbidden
```

A potential Human Design Gate exists only if the project must make a durable owner-level rule about what happens when **multiple independently persistent/bonded Magnemite individuals** become one Magneton and that rule materially affects companion slots, identity, separation, or later event state.

Until that is proven necessary, P4 should keep the bounded facts: Magneton is one canonical species entity; it is formed from multiple Magnemite units; component provenance can be retained as species-specific history metadata; metaphysics remains unresolved.

Magnemite also adds a useful ancient-setting boundary. Current official material contains historical-era observation of Magnemite as a naturally encountered Pokémon, so its metallic/electromagnetic body must not be mistaken for proof that the local human society has modern electrical industry. Human technology derived from it still requires the D-018 evidence/derivation gate.

## Primary source pointers for selection

These sources justify **selection pressure only**. The next Batch 04 step must collect exact claim-level evidence, version context and structured stat/evolution inputs before dossier authoring.

| Ref | Source | Selection use |
|---|---|---|
| `OFFICIAL-DEX-PARAS-SG` | `https://sg.portal-pokemon.com/play/pokedex/0046` | maturing back mushrooms, fungal control, contact/status ability context |
| `OFFICIAL-DEX-PARASECT-SG` | `https://sg.portal-pokemon.com/play/pokedex/0047` | mushroom-dominant body/control, immobility after mushroom loss, poison-spore medicinal use |
| `OFFICIAL-DEX-SLOWPOKE-SG` | `https://sg.portal-pokemon.com/play/pokedex/0079` | slow reaction, tail-fishing behavior, baseline family context |
| `OFFICIAL-DEX-SLOWBRO-SG` | `https://sg.portal-pokemon.com/play/pokedex/0080` | Shellder bite causes evolution; Shellder removal causes reversion to Slowpoke |
| `OFFICIAL-DEX-MAGNEMITE-PH` | `https://ph.portal-pokemon.com/play/pokedex/0081` | hovering and electromagnetic emission; historical observation text |
| `OFFICIAL-DEX-MAGNETON-SG` | `https://sg.portal-pokemon.com/play/pokedex/0082` | several/three Magnemite linked together; three Magnemite gathered to evolve |
| `OFFICIAL-DEX-SHELLDER-PH` | `https://ph.portal-pokemon.com/play/pokedex/0090` | hard shell, vulnerable interior, clamping behavior, own Shellder → Cloyster family |
| `OFFICIAL-DEX-CLOYSTER-SG` | `https://sg.portal-pokemon.com/play/pokedex/0091` | harsh-current morphology, spikes/projectile behavior, shell/body uncertainty |
| `POKEAPI-EVOLUTION-CONTRACT` | `https://pokeapi.co/docs/v2` | pinned structured modern evolution/stat metadata during full source review |

Long official flavor text must not be copied into dossiers. Claims are to be paraphrased, version-tagged where relevant, and classified under the existing C1 / C2 / D1 / D2 / U evidence model.

## Required source-review order

1. confirm identity, current canonical typing, raw six stats and family relationships for all eight species;
2. collect structured modern evolution conditions without treating level/trade/stone metadata as automatic ancient-world law;
3. collect official evidence for Paras/Parasect control/dependency, Slowbro's Shellder dependency/reversion, Magneton's composite formation, and Shellder/Cloyster shell hazards;
4. classify every material claim as C1 / C2 / D1 / D2 / U;
5. explicitly test whether Magneton creates a blocking Human Design Gate for prior-individual identity/companionship semantics;
6. derive all `p4-six-axis-v1` profiles mechanically;
7. author capability/hazard records before threat summaries;
8. author all eight complete dossiers against the frozen shared schema;
9. run Paras/Parasect host-control regressions without universal metaphysics;
10. run Slowpoke/Slowbro reversible-evolution and Shellder-participant regressions;
11. run Magnemite/Magneton composite-entity and D-013 companion-slot regressions;
12. run P2/P3/P4 contradiction and provenance checks;
13. promote manifest rows only after the entire batch passes.

## Cross-system checks

Batch 04 must preserve:

- D-011 Generation-I mandatory roster without silently importing Slowking, Magnezone, regional forms or other later-generation additions into baseline scope;
- D-013 voluntary companionship and exactly three visible companion slots;
- D-018 canon-first derivation and the narrow Pokémon-dependent technology-island rule;
- D-019 progressive identification rather than instant anatomical certainty;
- D-020 serious selective lethality without generic HP assumptions for unusual bodies;
- D-024 bounded human checks;
- D-028 no generic loot/harvest loop even where medicinal spores or unusual body materials exist;
- D-031 fixed species baselines plus explicit individual variation;
- D-032 evolution distinct from maturation, now tested against a canonically reversible species-specific case;
- Batch 03's rule that multi-part visible anatomy does not automatically multiply companion slots, while recognizing that Magneton adds a new prior-individual provenance problem that must not be hand-waved.

## Batch 04 exit target

If source review exposes no blocking Human Design Gate:

```text
new_dossier_count == 8
new_dossier_complete_count == 8
host_parasite_control_family_pass_count == 1
reversible_evolution_family_pass_count == 1
participant_species_dependency_pass_count == 1
composite_multi_origin_species_pass_count == 1
manual_rating_exception_count == 0
batch_blocking_gate_count == 0
rating_scale_version == p4-six-axis-v1
```

Expected manifest state after a clean close:

```text
dossier_complete_count == 36
pilot_reviewed_count == 2
not_started_count == 113
draft_count == 0
blocking_p4_gate_count == 0
```

The count target never authorizes bypassing source uncertainty or a real Human Design Gate.

## Exact next work

Source-review #046 Paras, #047 Parasect, #079 Slowpoke, #080 Slowbro, #081 Magnemite, #082 Magneton, #090 Shellder and #091 Cloyster.

Before full-schema authoring, explicitly decide whether the Magneton case can remain a bounded species-specific composite-history rule or whether multiple independently persistent Magnemite becoming one companion/entity requires an owner-level Human Design Gate.

If no blocking gate remains, continue through all eight dossiers, cross-family/domain regressions, manifest promotion and the Batch 04 completion audit.

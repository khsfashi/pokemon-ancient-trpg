# P4 Batch 04 — Source Review

Status: **SOURCE REVIEW COMPLETE — BLOCKED ON P4-HDG-003**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_04_COMPOSITE_DEPENDENCY_PLAN.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`

## 1. Review rule

Batch 04 keeps the existing P4 evidence boundary unchanged:

- current official Pokémon Pokédex material is C1 evidence for species identity, typing, abilities, physical/ecological statements and explicit transformation facts;
- `SRC-DATA-001` remains the project-pinned structured normalization input for raw six stats and modern evolution metadata, not a standalone franchise-canon authority;
- conservative implications are D1;
- bounded ancient-setting adaptations are D2;
- unsupported biology, consciousness, souls, ownership metaphysics and universal identity claims remain `unknown` or `intentionally_unresolved`.

Pinned structured source revision remains:

```text
PokeAPI/api-data @ 2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

This review does not promote any Batch 04 manifest row. Full-schema authoring is blocked until P4-HDG-003 is resolved.

## 2. Source registry

| Ref | Source | Primary use |
|---|---|---|
| `OFFICIAL-DEX-PARAS-SG` | `https://sg.portal-pokemon.com/play/pokedex/0046` | Paras typing, Effect Spore context, mushroom maturation and fungal control |
| `OFFICIAL-DEX-PARASECT-SG` | `https://sg.portal-pokemon.com/play/pokedex/0047` | mushroom-dominant control/dependency, immobility after mushroom loss, poisonous-spore medicine |
| `OFFICIAL-DEX-SLOWPOKE-SG` | `https://sg.portal-pokemon.com/play/pokedex/0079` | slow reaction, delayed pain response, tail-fishing behavior |
| `OFFICIAL-DEX-SLOWBRO-SG` | `https://sg.portal-pokemon.com/play/pokedex/0080` | Shellder bite causes Slowbro; Shellder loss can restore Slowpoke |
| `OFFICIAL-DEX-MAGNEMITE-PH` | `https://ph.portal-pokemon.com/play/pokedex/0081` | electromagnetic hovering/discharge, iron-sphere body, historical observation |
| `OFFICIAL-DEX-MAGNETON-SG` | `https://sg.portal-pokemon.com/play/pokedex/0082` | multiple/three Magnemite linked together; three Magnemite gathered to evolve; magnetic equipment interference |
| `OFFICIAL-DEX-SHELLDER-SG` | `https://sg.portal-pokemon.com/play/pokedex/0090` | extremely hard shell, vulnerable interior, clamping behavior, Shellder -> Cloyster family |
| `OFFICIAL-DEX-CLOYSTER-SG` | `https://sg.portal-pokemon.com/play/pokedex/0091` | extreme shell/spikes, projectile spikes, harsh-current morphology |
| `SRC-DATA-001` | `PokeAPI/api-data@2cda0b56...` | raw six stats, types/abilities cross-check, modern evolution-chain metadata |
| `POKEAPI-EVOLUTION-CONTRACT` | `https://pokeapi.co/docs/v2` | structured Pokémon/evolution resource semantics |

Long official flavor text is not copied into dossiers. Claims below are paraphrased and version-scoped.

## 3. Canonical stat/rating audit

`p4-six-axis-v1` remains:

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
| #046 | Paras | 35 | 70 | 55 | 45 | 55 | 25 | `1/3/2/2/2/1` |
| #047 | Parasect | 60 | 95 | 80 | 60 | 80 | 30 | `3/4/4/3/4/1` |
| #079 | Slowpoke | 90 | 65 | 65 | 40 | 40 | 15 | `4/3/3/2/2/1` |
| #080 | Slowbro | 95 | 75 | 110 | 100 | 80 | 30 | `4/3/5/5/4/1` |
| #081 | Magnemite | 25 | 35 | 70 | 95 | 55 | 45 | `1/1/3/4/2/2` |
| #082 | Magneton | 50 | 60 | 95 | 120 | 70 | 70 | `2/3/4/6/3/3` |
| #090 | Shellder | 30 | 65 | 100 | 45 | 25 | 40 | `1/3/5/2/1/2` |
| #091 | Cloyster | 50 | 95 | 180 | 85 | 45 | 70 | `2/4/6/4/2/3` |

No manual rating exception is required.

Pinned modern evolution metadata records:

- Paras -> Parasect: `level-up`, minimum level 24 in the Red/Blue source context;
- Slowpoke -> Slowbro: `level-up`, minimum level 37 in the Red/Blue source context;
- Magnemite -> Magneton: `level-up`, minimum level 30 in the Red/Blue source context;
- Shellder -> Cloyster: Water Stone item use in the Red/Blue source context.

Under D-032, those level values remain structured modern-game metadata rather than diegetic kill-XP or a visible ancient-world level threshold. Slowbro additionally has stronger direct official biological evidence: Shellder attachment causes the transformation and removal can reverse it.

Later Slowking, Magnezone, Galarian forms and Mega states remain outside the mandatory Gen-I baseline and do not add P4 dossier rows here.

## 4. #046 Paras / 파라스 and #047 Parasect / 파라섹트 evidence packet

### Paras C1

- default Paras is Bug/Grass;
- mushrooms on the back are absent in infant specimens and emerge as Paras matures;
- current official material explicitly describes those mushrooms as controlling the bug;
- Effect Spore establishes contact-triggered poison/sleep/paralysis as a supported ability-level interaction context;
- humid forest / tree-foot habitat context is directly supported.

### Parasect C1

- default Parasect is Bug/Grass;
- current official material describes the mushroom as having become the main body/controller while the bug is mostly dead;
- removing the mushroom leaves the bug unmoving;
- poisonous spores are used in traditional medicine;
- mushroom-lacking specimens lying motionless are cited as evidence that the mushroom controls Parasect's actions.

### D1 boundary

```text
fungal_control_is_observable_species_fact == true
fungal_growth_during_maturation == true
fungal_control_creates_generic_mind_control_system == false
parasect_establishes_universal_pokemon_soul_rule == false
medicinal_spores_create_generic_loot_drop == false
```

P4 can model the family as a species-local biological dependency/control relationship. It does not need to decide whether the bug and mushroom have separate souls, legal personhood, ownership, or universal host/parasite identity semantics.

Effect Spore is permission to author contact status exposure; it is not permission to port a modern battle proc percentage or create automatic damage. Medicinal-spore evidence permits settlement/knowledge/event hooks but D-028 still forbids turning Parasect into a routine harvest node.

Family result: **PASS — no Human Design Gate.**

## 5. #079 Slowpoke / 야돈 and #080 Slowbro / 야도란 evidence packet

### Slowpoke C1

- default Slowpoke is Water/Psychic;
- it is exceptionally slow to react and official material gives a strongly delayed pain response under attack;
- tail-fishing behavior is directly supported;
- Slowpoke is the pre-transformation species for Slowbro.

### Slowbro C1

- default Slowbro is Water/Psychic;
- official material explicitly states that a Shellder biting Slowpoke's tail causes Slowpoke to evolve into Slowbro;
- official material explicitly states that loss of the tail-biting Shellder in a harsh battle can make Slowbro revert to ordinary Slowpoke.

### D1 / D2 boundary

The official evidence is strong enough to model a species-specific reversible dependency without inventing a global de-evolution system:

```text
slowbro_state_requires_shellder_dependency == true
shellder_loss_can_restore_slowpoke == true
slowbro_reversion_creates_global_deevolve_action == false
slowbro_reversion_erases_history_or_bond == false
modern_level_37_is_diegetic_requirement == false
```

Under D-032, reversion changes the canonical species stage back to Slowpoke but does not reset accumulated injuries, scars, remembered bond, learned behavior, authored history or provenance.

No generic reversal item, rollback menu or universal reversible-evolution rule is introduced. The exact scene/state conditions under which an attached Shellder is removed belong to later event authoring.

Family result: **PASS — no Human Design Gate.**

## 6. #090 Shellder / 셀러 and #091 Cloyster / 파르셀 evidence packet

### Shellder C1

- default Shellder is Water type;
- its shell is described as extremely hard while the interior is surprisingly tender;
- clamping exposes vulnerable parts and is used only as a last resort;
- Shellder belongs to its own Shellder -> Cloyster family.

### Cloyster C1

- default Cloyster is Water/Ice;
- specimens in harsh tidal currents develop large sharp shell spikes;
- it can launch spikes in rapid volleys;
- its inner body remains concealed/unknown in official observation;
- it is the evolved form of Shellder.

### D1 boundary

Shellder's participation in Slowbro does not replace Shellder's own family:

```text
shellder_attached_to_slowpoke == participant_dependency
shellder_attached_to_slowpoke == shellder_evolved_into_slowbro  # false
shellder_to_cloyster_family_remains_independent == true
slowbro_automatically_grants_separate_owned_shellder == false
```

Full-schema authoring may reference the attached Shellder as a dependency/component state where relevant, but it must not silently grant the player a free additional companion, inventory creature or ownership record.

Water Stone is preserved as a physical modern trigger relationship under D-032. This review does not establish common ancient Water Stone availability, shops, mines or forced evolution.

Family result: **PASS — no Human Design Gate.**

## 7. #081 Magnemite / 코일 evidence packet

### C1

- default Magnemite is Electric/Steel;
- side units emit electromagnetic waves that produce antigravity/hovering behavior;
- it continuously hovers and emits electromagnetic phenomena;
- official historical-observer material describes it as an iron-sphere Pokémon with magnet-like arms and natural levitation;
- Magnemite is the pre-evolution species for Magneton.

### D1 boundary

- metallic/electromagnetic biology is a Pokémon capability, not evidence that the local human society possesses generators, grids, electronics or modern industry;
- electromagnetic interference can alter approach/equipment permissions without being reduced to Potency damage;
- ordinary Magnemite remains one persistent individual and one companion candidate under the existing domain contract.

Magnemite itself introduces no new gate.

## 8. #082 Magneton / 레어코일 evidence packet

### C1

- default Magneton is Electric/Steel;
- current official material describes three Magnemite linked by powerful magnetic force;
- other official text describes it as several Magnemite linked together;
- historical-observer material explicitly states that three Magnemite gathered to evolve into Magneton;
- its magnetic force can cause human discomfort and can destroy/interfere with research equipment;
- Magneton is presented as one canonical Pokédex species entity.

### Proven safe D1 boundary

The following can be fixed without owner input:

```text
magneton_species_entity_count == 1
visible_component_count != automatic_companion_slot_count
magneton_is_not_three_simultaneous_enemy_stat_blocks == true
component_origin_history_may_matter == true
universal_soul_merge_rule == forbidden
modern_level_30_is_diegetic_requirement == false
```

This is analogous to Batch 03 only at the post-transformation representation layer: one canonical species entity can have visibly multiple parts without multiplying combat/stat blocks or visible companion slots.

### Why Exeggcute precedent is insufficient

Exeggcute begins as one canonical clustered species entity, so Batch 03 could keep one persistent entity while leaving internal plurality metaphysically unresolved.

Magneton differs materially because official evidence describes the transformation as **multiple recognizable Magnemite gathering into Magneton**. Before that event, the component Magnemite can each already exist as ordinary persistent individuals. If two or three of those Magnemite have independent injuries, relationship histories, names, memories, bond strength, companion status or event state, D-032's existing invariant that individual identity/history survives evolution no longer yields one mechanically obvious answer.

That creates a real owner-level design choice rather than a source-research gap.

## 9. P4-HDG-003 — Magneton multi-origin persistent identity

**BLOCKING.** Full-schema authoring must not silently choose how multiple independently persistent/bonded Magnemite become one Magneton companion/entity.

The decision affects at least:

- D-013's exactly three visible companion slots;
- D-032's persistent identity/history/bond-through-evolution invariant;
- injuries and condition carried from contributors;
- relationship/bond history shown to the player;
- later separation/reversion assumptions;
- deterministic P5/P7 event/save-state ownership.

No option should invent a universal Pokémon soul theory. The gate is only about game-domain persistence semantics for this species-specific composite evolution.

### Option A — one Magneton entity with contributor provenance **(recommended)**

After transformation, Magneton is one persistent canonical entity and occupies one visible companion slot. The contributing Magnemite are retained in species-specific `component_provenance` / lineage history so their prior names, bond milestones, injuries and authored history are not silently erased. The Magneton receives one active individual profile for current gameplay; contributor history remains queryable for narrative/state continuity.

Constraints:

- no generic splitting/de-evolution mechanic is implied;
- no claim is made about merged souls/consciousness;
- evolution remains rare/authored rather than a slot-compression command;
- contributor provenance is a bounded Magneton-family requirement, not generic multipart infrastructure for every species.

Why recommended: it preserves the strongest canon fact (`three Magnemite -> one Magneton`) and keeps the existing one-species-entity/one-slot model while losing the least established player history.

### Option B — bonded Magnemite cannot perform baseline composite evolution

Wild/unbonded Magnemite may form Magneton, but independently bonded companion Magnemite are excluded from this transformation in baseline player-facing content.

Benefit: avoids merging persistent player relationships.

Cost: invents a companionship-conditioned biological restriction unsupported by current canon evidence and makes bond state affect species transformation eligibility for project convenience.

### Option C — one contributor is the continuing identity

One Magnemite is selected as the persistent individual; other contributors become subordinate component provenance and their active identities cease to exist as separate game entities.

Benefit: simplest save/runtime ownership.

Cost: invents an asymmetric "primary" identity not supported by the official material and creates the strongest risk of arbitrary relationship/history loss.

### Explicit non-option

`Magneton occupies three visible companion slots forever` is rejected as the default gate answer because the official material presents Magneton as one canonical species entity and the already-established P4 multipart rule says visible components do not automatically multiply companion slots.

## 10. Required hazard/permission records after gate resolution

Full-schema authoring must include at least:

- `paras-effect-spore-contact` — contact status exposure permission, not a copied battle proc formula;
- `parasect-poison-spore-exposure` — poisonous spore exposure with medicinal-use evidence kept separate from harvesting;
- `slowpoke-delayed-pain-response` — reaction/recognition behavior, not pain immunity or extra Guard;
- `slowpoke-tail-fishing-position` — aquatic positioning/ecology hook;
- `slowbro-shellder-dependency` — Shellder-dependent species state and bounded reversion permission;
- `magnemite-electromagnetic-hover` — hover plus electromagnetic interference/approach pressure;
- `magneton-magnetic-field-interference` — equipment/metal/proximity hazard independent of raw Potency;
- `shellder-shell-clamp` — very hard closed-shell defense with vulnerability while clamping/open;
- `cloyster-shell-spike-volley` — projectile/sharp exposure separate from very high Guard;
- `cloyster-harsh-current-adaptation` — aquatic/current morphology and route-pressure hook.

## 11. Cross-system contradiction review

```text
portable_containment_assumed == false
capture_equals_companionship == false
fungal_control_creates_universal_mind_control_system == false
parasect_medicine_creates_generic_harvest_loop == false
slowbro_reversion_creates_global_deevolve_command == false
slowbro_reversion_erases_persistent_history == false
shellder_participation_replaces_own_evolution_family == false
slowbro_grants_free_shellder_companion == false
magneton_canonical_species_entity_count == 1
magneton_component_count_equals_visible_companion_slots == false
magneton_multi_bond_persistence_semantics_frozen_without_owner == false
metallic_pokemon_proves_modern_human_industry == false
later_generation_evolutions_expand_GenI_mandatory_roster == false
modern_level_metadata_equals_kill_XP == false
hazard_severity_capped_by_species_rating == false
```

Result: **PASS except the explicitly blocked Magneton persistence semantic.**

## 12. Human Design Gate review

No blocking owner decision is required for:

- Paras/Parasect fungal control and dependency;
- Slowpoke/Slowbro species-specific reversible evolution;
- Shellder's participant role versus its independent Cloyster family;
- electromagnetic/metallic hazard representation itself.

One owner decision **is required** for the player-facing case where multiple independently persistent/bonded Magnemite become one Magneton.

```text
source_review_species_count == 8
rating_profile_reproducible_count == 8
manual_rating_exception_count == 0
host_parasite_family_source_review == PASS
reversible_evolution_family_source_review == PASS
participant_species_family_source_review == PASS
composite_species_source_review == PASS_WITH_GATE
blocking_human_design_gate_count == 1
blocking_gate == P4-HDG-003
recommended_gate_choice == A
```

## 13. Exact next work after P4-HDG-003

If the owner selects an option:

1. record P4-HDG-003 as a durable decision and update the relevant shared evolution/domain invariant only as narrowly as required;
2. author all eight Batch 04 full-schema dossiers;
3. run Paras/Parasect host-control regressions;
4. run Slowpoke/Slowbro reversible-evolution and Shellder-participant regressions;
5. run Magnemite/Magneton composite-entity, provenance and D-013 companion-slot regressions against the selected gate answer;
6. run P2/P3/P4 contradiction/provenance checks;
7. promote all eight manifest rows atomically only after the whole batch passes;
8. write `docs/P4_BATCH_04_COMPLETION_AUDIT.md`.

Until P4-HDG-003 is resolved, do not author a final Magneton companionship/evolution persistence rule and do not advance to P5.

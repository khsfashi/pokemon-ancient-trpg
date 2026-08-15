# P4 Batch 04 — Source Review

Status: **SOURCE REVIEW COMPLETE — P4-HDG-003 RESOLVED / READY FOR FULL-SCHEMA AUTHORING**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_04_COMPOSITE_DEPENDENCY_PLAN.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_MAGNETON_COMPOSITE_IDENTITY_CONTRACT.md`

## 1. Review rule

Batch 04 keeps the existing P4 evidence boundary unchanged:

- current official Pokémon Pokédex material is C1 evidence for species identity, typing, abilities, physical/ecological statements and explicit transformation facts;
- `SRC-DATA-001` remains the project-pinned structured normalization input for raw six stats and modern evolution metadata, not a standalone franchise-canon authority;
- conservative implications are D1;
- bounded ancient-setting adaptations are D2;
- unsupported biology, consciousness, souls, ownership metaphysics and universal identity claims remain `unknown` or `intentionally_unresolved`.

Pinned structured source revision:

```text
PokeAPI/api-data @ 2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

P4-HDG-003 is now resolved by owner choice **A** and recorded as **D-033** in `docs/P4_MAGNETON_COMPOSITE_IDENTITY_CONTRACT.md`.

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

- Paras -> Parasect: modern level-up metadata, minimum 24 in Red/Blue context;
- Slowpoke -> Slowbro: modern level-up metadata, minimum 37 in Red/Blue context;
- Magnemite -> Magneton: modern level-up metadata, minimum 30 in Red/Blue context;
- Shellder -> Cloyster: Water Stone item use in Red/Blue context.

Under D-032, level values remain modern-game metadata rather than diegetic kill-XP or a visible ancient-world threshold. Slowbro additionally has stronger official biological evidence: Shellder attachment causes the transformation and removal can reverse it.

Later Slowking, Magnezone, regional forms and Mega states remain outside the mandatory Gen-I baseline.

## 4. Paras / Parasect evidence packet

### C1

- Paras is Bug/Grass; mushrooms emerge as it matures and current official material describes them as controlling the bug.
- Effect Spore supports contact-triggered poison/sleep/paralysis interaction context.
- Parasect is Bug/Grass; official material describes the mushroom as the dominant/main body while the bug is mostly dead.
- removing the large mushroom leaves the bug unmoving;
- poisonous spores have traditional medicinal use.

### D1 boundary

```text
fungal_control_is_observable_species_fact == true
fungal_growth_during_maturation == true
fungal_control_creates_generic_mind_control_system == false
parasect_establishes_universal_pokemon_soul_rule == false
medicinal_spores_create_generic_loot_drop == false
```

Effect Spore permits a contact-status hazard but does not import a battle proc percentage. Medicinal-spore evidence permits knowledge/event/material hooks but D-028 forbids a routine harvest node.

Result: **PASS — no Human Design Gate.**

## 5. Slowpoke / Slowbro evidence packet

### C1

- Slowpoke is Water/Psychic, unusually slow to react, has strongly delayed pain recognition, and fishes with its tail.
- Slowbro is Water/Psychic.
- official material explicitly states that Shellder biting Slowpoke's tail causes evolution into Slowbro;
- official material explicitly states that loss of the attached Shellder in harsh battle can revert Slowbro to ordinary Slowpoke.

### D1 boundary

```text
slowbro_state_requires_shellder_dependency == true
shellder_loss_can_restore_slowpoke == true
slowbro_reversion_creates_global_deevolve_action == false
slowbro_reversion_erases_history_or_bond == false
modern_level_37_is_diegetic_requirement == false
```

The exact removal scene belongs to later event authoring. Reversion changes species stage but does not reset scars, learned behavior, relationship history or authored flags.

Result: **PASS — no Human Design Gate.**

## 6. Shellder / Cloyster evidence packet

### C1

- Shellder is Water type; its closed shell is extremely hard while its exposed interior is tender.
- clamping exposes vulnerable parts and is used as a last resort.
- Shellder has its own Shellder -> Cloyster evolution family.
- Cloyster is Water/Ice; harsh tidal currents are associated with large sharp shell spikes; it can launch spikes in rapid volleys; its inner body remains concealed in official observation.

### D1 boundary

```text
shellder_attached_to_slowpoke == participant_dependency
shellder_attached_to_slowpoke_is_shellder_evolving_into_slowbro == false
shellder_to_cloyster_family_remains_independent == true
slowbro_automatically_grants_separate_owned_shellder == false
```

Water Stone remains a physical modern trigger relationship. This batch does not establish common ancient Water Stone access, shops, mines or forced evolution.

Result: **PASS — no Human Design Gate.**

## 7. Magnemite evidence packet

### C1

- Magnemite is Electric/Steel.
- side units emit electromagnetic waves associated with antigravity/hovering behavior.
- it moves while continuously hovering and emitting electromagnetic phenomena.
- historical-observer material describes a single eye in an iron sphere with magnet-like arms and natural levitation.

### D1 boundary

Metallic/electromagnetic biology is a Pokémon capability, not evidence that local humans possess generators, electronics, grids or modern industry. Electromagnetic effects can alter equipment and approach permissions without becoming a flat Potency damage rule.

Result: **PASS.**

## 8. Magneton evidence packet

### C1

- Magneton is Electric/Steel.
- official material describes three Magnemite linked by strong magnetic force and also several Magnemite linked together.
- historical-observer material explicitly states that three Magnemite gathered to evolve into Magneton.
- strong magnetism can cause human discomfort and destroy/interfere with research equipment.
- Magneton is represented as one canonical Pokédex species entity.

Safe invariant:

```text
magneton_species_entity_count == 1
visible_component_count != automatic_companion_slot_count
three_simultaneous_enemy_stat_blocks == false
component_origin_history_may_matter == true
universal_soul_merge_rule == forbidden
```

## 9. P4-HDG-003 resolution — D-033

Owner choice: **A — one Magneton entity with contributor provenance retained.**

Binding rule:

- three contributing Magnemite become one active Magneton entity;
- Magneton occupies one visible companion slot;
- all three contributors retain queryable history/provenance including prior names, bond milestones, major event flags, learned behavior and injuries where still physically meaningful;
- after formation, gameplay uses one Magneton species baseline plus one active individual profile; three Magnemite stat blocks are never summed;
- composite evolution is a rare authored species transformation, not a player command for freeing companion slots;
- no generic split/de-evolution action is implied;
- no claim is made about exact soul count or literal brain anatomy.

### Three-brains presentation guidance

The owner explicitly likes a **"three brains" feeling**.

P4 interprets that as three recognizable cognitive contributors inside one coordinated Magneton, not as an unsupported anatomical statement. Individual contributor tendencies may surface as different orientation, attention, hesitation, remembered responses or internal disagreement before the whole Magneton acts.

```text
three_cognitive_contributors == true_as_project_presentation_model
literal_three_biological_brains == unproven
three_souls == intentionally_unresolved
active_game_entity_count == 1
```

Full details and persistence rules are in `docs/P4_MAGNETON_COMPOSITE_IDENTITY_CONTRACT.md`.

Result: **PASS — blocking Human Design Gate count is now 0.**

## 10. Required hazard/permission records

Full-schema authoring must include at least:

- `paras-effect-spore-contact` — contact status exposure permission, not a copied battle proc formula;
- `parasect-poison-spore-exposure` — poisonous spore exposure with medicinal-use evidence separate from harvesting;
- `slowpoke-delayed-pain-response` — recognition/behavior permission, not pain immunity or extra Guard;
- `slowpoke-tail-fishing-position` — aquatic positioning/ecology hook;
- `slowbro-shellder-dependency` — Shellder-dependent species state and bounded reversion permission;
- `magnemite-electromagnetic-hover` — hover plus electromagnetic interference/approach pressure;
- `magneton-magnetic-field-interference` — equipment/metal/proximity hazard independent of raw Potency;
- `shellder-shell-clamp` — very hard closed-shell defense with vulnerability while clamping/open;
- `cloyster-shell-spike-volley` — projectile/sharp exposure separate from very high Guard;
- `cloyster-harsh-current-adaptation` — aquatic/current route-pressure hook.

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
magneton_contributor_history_erased == false
magneton_three_stat_blocks_summed == false
magneton_literal_three_brains_claimed_as_canon == false
metallic_pokemon_proves_modern_human_industry == false
later_generation_evolutions_expand_GenI_mandatory_roster == false
modern_level_metadata_equals_kill_XP == false
hazard_severity_capped_by_species_rating == false
```

Result: **PASS.**

## 12. Source-review result

```text
source_review_species_count == 8
rating_profile_reproducible_count == 8
manual_rating_exception_count == 0
host_parasite_family_source_review == PASS
reversible_evolution_family_source_review == PASS
participant_species_family_source_review == PASS
composite_species_source_review == PASS
blocking_human_design_gate_count == 0
resolved_gate == P4-HDG-003
resolved_decision == D-033
```

The batch is unblocked for full-schema authoring, regression review and atomic manifest promotion.
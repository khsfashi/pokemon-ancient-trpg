# P4 Batch 03 — Source Review

Status: **SOURCE REVIEW COMPLETE — no blocking Human Design Gate**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_03_BRANCHING_TRANSFORMATION_PLAN.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`

## 1. Review rule

Batch 03 keeps the existing P4 evidence boundary unchanged:

- current official Pokémon Pokédex material is used as C1 evidence;
- `SRC-DATA-001` remains the project-pinned structured normalization input for raw stats, types, abilities and modern evolution metadata, not a standalone canon authority;
- conservative implications are D1;
- bounded ancient-setting adaptations are D2;
- unsupported biological/metaphysical details remain `unknown` or `intentionally_unresolved`.

This batch specifically refuses to infer a universal Pokémon consciousness/soul model from Exeggcute or Exeggutor. Canonical species identity is sufficient for P4/P5 entity ownership; internal plurality remains a species-local behavior/capability fact.

## 2. Source registry

| Ref | Source | Primary use |
|---|---|---|
| `OFFICIAL-DEX-FARFETCHD-SG` | `https://sg.portal-pokemon.com/play/pokedex/0083` | carried stalk as cutting weapon/emergency food; multiple observed stalk-fighting styles; Kanto-form typing/physical data |
| `OFFICIAL-DEX-EXEGGCUTE-SG` | `https://sg.portal-pokemon.com/play/pokedex/0102` | six-head/part cluster, private telepathic coordination, defensive gathering |
| `OFFICIAL-DEX-EXEGGUTOR-SG` | `https://sg.portal-pokemon.com/play/pokedex/0103` | heads with wills of their own; rare dropped-head continuation as Exeggcute; Kanto-form typing/physical data |
| `OFFICIAL-DEX-DITTO-SG` | `https://sg.portal-pokemon.com/play/pokedex/0132` | cellular rearrangement transformation; laughter/relaxation limitation; explicitly no evolution |
| `OFFICIAL-DEX-EEVEE-PH` | `https://ph.portal-pokemon.com/play/pokedex/0133` | irregular genetics, environmental adaptation, elemental-stone radiation, multiple evolution outcomes |
| `OFFICIAL-DEX-VAPOREON-SG` | `https://sg.portal-pokemon.com/play/pokedex/0134` | water-adjacent ecology; water-like cellular composition and concealment while submerged |
| `OFFICIAL-DEX-JOLTEON-PH` | `https://ph.portal-pokemon.com/play/pokedex/0135` | cellular electrical concentration, lightning discharge, electrically stiffened/launchable fur |
| `OFFICIAL-DEX-FLAREON-SG` | `https://sg.portal-pokemon.com/play/pokedex/0136` | internal flame sac, heated exhaled fire, extreme body heat and cooling behavior |
| `POKEAPI-EVOLUTION-CONTRACT` | `https://pokeapi.co/docs/v2` | structured evolution-chain/trigger representation |
| `SRC-DATA-001` | project-pinned structured revision | raw six stats, type/ability normalization, modern trigger metadata |

Long flavor text is not copied into dossiers. Claims below are paraphrased and version-scoped.

## 3. Canonical stat/rating audit

Pinned `p4-six-axis-v1` remains:

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
| #083 | Farfetch'd | 52 | 90 | 55 | 58 | 62 | 60 | `2/4/2/2/3/3` |
| #102 | Exeggcute | 60 | 40 | 80 | 60 | 45 | 40 | `3/2/4/3/2/2` |
| #103 | Exeggutor | 95 | 95 | 85 | 125 | 75 | 55 | `4/4/4/6/3/2` |
| #132 | Ditto | 48 | 48 | 48 | 48 | 48 | 48 | `2/2/2/2/2/2` |
| #133 | Eevee | 55 | 55 | 50 | 45 | 65 | 55 | `2/2/2/2/3/2` |
| #134 | Vaporeon | 130 | 65 | 60 | 110 | 95 | 65 | `6/3/3/5/4/3` |
| #135 | Jolteon | 65 | 65 | 60 | 110 | 95 | 130 | `3/3/3/5/4/6` |
| #136 | Flareon | 65 | 130 | 60 | 95 | 110 | 65 | `3/6/3/4/5/3` |

No manual rating exception is required.

## 4. #083 Farfetch'd / 파오리 evidence packet

C1:

- the mandatory Kanto/default Farfetch'd is Normal/Flying and is not part of a mandatory Gen-I evolution chain;
- it carries a plant stalk and uses it as a cutting weapon;
- the stalk can become emergency food in a dire situation;
- multiple distinct stalk-fighting styles are observed.

D1:

- the stalk is an ordinary species-linked dependency/capability object, not a generic weapon drop;
- fighting-style differences are learned/behavioral individual variation and do not require alternate species stats;
- losing or consuming the stalk can remove or weaken stalk-dependent approaches until a replacement is obtained;
- Galarian Farfetch'd and Sirfetch'd remain outside the mandatory baseline and cannot redefine default Farfetch'd evolution.

Result: **PASS — species-equipment behavior is expressible with existing capability, individual-variation and material rules.**

## 5. #102 Exeggcute / 아라리 and #103 Exeggutor / 나시 evidence packet

### Exeggcute C1

- Grass/Psychic Exeggcute is represented as a cluster of six heads/parts;
- the cluster maintains coordination through telepathy receivable by fellow Exeggcute;
- disturbing one apparent head can cause the others to gather and attack together;
- Exeggcute belongs to the Exeggcute -> Exeggutor family.

### Exeggcute D1

- one canonical Exeggcute remains one P4 species entity and one companion slot despite six visible constituents;
- attacks by the coordinated cluster are one species entity's behavior, not an automatic six-enemy encounter multiplier;
- temporary separation or internal positioning may change behavior/permissions while entity ownership remains stable;
- the number and metaphysical nature of independent minds/souls is not needed for P4 and remains intentionally unresolved.

### Exeggutor C1

- default/Kanto Exeggutor is Grass/Psychic;
- each head is described as having a will of its own;
- official material preserves a rare claim that a dropped head can continue as an Exeggcute;
- Exeggutor is the evolved species in the family; structured modern metadata records a Leaf Stone item trigger for the default branch.

### Exeggutor D1 / D2 boundary

- internal head disagreement/coordination is a species-local behavior state, not multiple companion ownership;
- the rare dropped-head statement permits an unusual event hook but does not establish a routine reproduction, duplication or free-companion mechanic;
- `Exeggcute -> Exeggutor` is a real species transformation under D-032; Leaf Stone remains a physical modern trigger relationship, with ancient availability rare/locality-dependent/event-authored unless later evidence establishes more;
- an Exeggutor head becoming Exeggcute is not used to invent a general rule that detached Pokémon body parts become new Pokémon.

### Human Design Gate check

**No gate.** P4/P5 needs stable species/entity ownership, observable internal coordination and encounter consequences. It does not need a project-wide answer to how many souls or fully independent persons exist inside every multi-bodied Pokémon. That broader metaphysical question remains intentionally unresolved and non-blocking.

Family result: **PASS.**

## 6. #132 Ditto / 메타몽 evidence packet

C1:

- Ditto is Normal type and explicitly does not evolve;
- it can rearrange its cellular structure to transform into other life-forms;
- current official material describes the transformation as highly accurate but vulnerable to breaking when Ditto is made to laugh/relax.

D1:

- transformation changes expressed body/appearance/capability permissions but does not replace `species_key: ditto`;
- transformed appearance does not copy another species' evolution family, companionship history, provenance record or permanent baseline profile;
- a copied shape can create identification/deception pressure without granting permanent identity theft;
- exact copied memories, personality, learned technique and all edge-case capabilities are not assumed from appearance alone.

Regression result:

```text
Ditto_transformation_is_evolution == false
transformed_shape_changes_species_key == false
copied_appearance_replaces_persistent_identity == false
transformation_can_change_scene_permissions == true
```

Result: **PASS.**

## 7. #133 Eevee / 이브이 branching-family evidence packet

C1:

- Eevee is Normal type and has irregular genetics associated with unusually broad evolution potential;
- current official material links its mutability to environment and radiation from elemental stones;
- official family presentation includes multiple possible evolved forms.

Structured modern trigger input for the mandatory Gen-I branches:

- Eevee -> Vaporeon: Water Stone;
- Eevee -> Jolteon: Thunder Stone;
- Eevee -> Flareon: Fire Stone.

D1 / D2 boundary:

- branching means a persistent individual can undergo one actual species transformation into a mutually exclusive outcome; it is not a class-selection menu;
- possessing a matching stone does not force a companion evolution or bypass agency/event authoring;
- stone availability is not made common, commercial, mineable or currency-like by this batch;
- later-generation Eevee evolutions are external references only and do not create mandatory P4 dossier rows;
- after transformation, individual history/bond persists while species baseline, capabilities, ecology and logistics change discontinuously.

Branching-family result: **PASS — existing D-032 plus physical-trigger precedent is sufficient.**

## 8. #134 Vaporeon / 샤미드 evidence packet

C1:

- Vaporeon is Water type and associated with living near water;
- its cellular composition is described as similar to water and it can conceal its form while submerged/blended into water;
- it is a Gen-I Eevee evolution outcome.

D1:

- aquatic concealment can invalidate ordinary visual tracking in suitable water rather than merely adding a flat TN;
- high Vigor/Potency does not imply hostility;
- deep/open-water encounters can become dangerous through drowning, separation or current even when Vaporeon is not aggressive;
- transformation from Eevee creates real aquatic/ecological discontinuity.

Result: **PASS.**

## 9. #135 Jolteon / 쥬피썬더 evidence packet

C1:

- Jolteon is Electric type;
- it concentrates weak cell-generated electric charges into powerful discharge;
- agitation can electrically stiffen its fur and launch small groups of hairs; enraged fur is described as needlelike;
- it is a Gen-I Eevee evolution outcome.

D1:

- electrical discharge and sharp-fur exposure are separate hazard mechanisms even though they may share warning state;
- Jolteon's Speed 6 changes exposure/pursuit pressure but never caps or defines electrical consequence severity;
- electrical overlap with Pikachu/Raichu does not permit copy-pasting their behavior, warning signs or ecology.

Result: **PASS.**

## 10. #136 Flareon / 부스터 evidence packet

C1:

- Flareon is Fire type;
- inhaled air feeds an internal flame-sac-like organ and can be expelled as extremely hot fire;
- official material describes unusually high internal/body heat and active cooling through its neck fur;
- it is a Gen-I Eevee evolution outcome.

D1:

- fire/heat is an exposure and environment-state hazard, not a number derived solely from Potency or Force;
- exact official temperature prose demonstrates an extreme heat capability but does not create a universal Celsius-to-Injury formula;
- dry fuel, confined structures and blocked retreat can amplify encounter consequences without changing the species profile;
- transformation from Eevee creates a real thermal/ecological discontinuity.

Result: **PASS.**

## 11. Required hazard/permission records

Full-schema authoring must include at least:

- `farfetchd-stalk-cutting` — physical cutting capability dependent on the carried stalk;
- `exeggcute-coordinated-defense` — six-part coordinated defense without six independent enemy stats;
- `exeggutor-psychic-multihead-pressure` — Psychic/physical pressure with internal plurality kept species-local;
- `ditto-transform-identity-pressure` — transformation/deception/approach permission, not evolution;
- `vaporeon-water-concealment` — submerged visual-approach invalidation plus water-position risk;
- `jolteon-electric-discharge` — electrical exposure;
- `jolteon-electrified-fur` — sharp/launchable fur exposure;
- `flareon-fire-heat` — flame/thermal/environment ignition exposure.

Eevee itself requires no invented damaging hazard merely to fill the schema.

## 12. Cross-system contradiction review

```text
portable_containment_assumed == false
capture_equals_companionship == false
multi_head_species_consumes_multiple_companion_slots == false
multi_head_species_creates_universal_soul_rule == false
Ditto_transformation_equals_evolution == false
Ditto_copies_permanent_species_identity == false
branching_evolution_is_menu_class_change == false
stone_inventory_forces_companion_evolution == false
later_Eevee_branches_expand_GenI_mandatory_roster == false
Farfetchd_stalk_is_generic_loot == false
player_level_enemy_scaling == false
hazard_severity_capped_by_species_rating == false
```

Result: **PASS**.

## 13. Human Design Gate review

No blocking owner decision is required.

Non-blocking intentional unknowns:

- metaphysical mind/soul count for Exeggcute/Exeggutor;
- exact ancient Leaf/Water/Thunder/Fire Stone availability and geology;
- the full upper boundary of what Ditto can reproduce beyond source-reviewed body/capability expression;
- exact local ecology and prevalence for all eight species.

These can remain source/locality/event questions without changing the shared P4 architecture.

## 14. Review result

```text
source_review_species_count == 8
rating_profile_reproducible_count == 8
manual_rating_exception_count == 0
branching_evolution_family_pass_count == 1
multi_head_family_pass_count == 1
transformation_not_evolution_regression == PASS
species_equipment_behavior_regression == PASS
blocking_human_design_gate_count == 0
shared_evolution_rule == D-032
```

The next coherent work is full-schema authoring for all eight Batch 03 species followed by family/domain regression review, manifest promotion and Batch 03 completion audit.
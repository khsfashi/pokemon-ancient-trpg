# P4 Batch 06 — Source Review

Status: **SOURCE REVIEW COMPLETE — NO BLOCKING HUMAN DESIGN GATE / READY FOR FULL-SCHEMA AUTHORING**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_06_SOCIAL_ECOLOGY_PARENT_YOUNG_PLAN.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_MAGNETON_COMPOSITE_IDENTITY_CONTRACT.md`

## 1. Review rule

Batch 06 keeps the existing evidence boundary:

- current official Pokémon Pokédex material is C1 evidence for species identity, typing, physical/ecological statements, family/social behavior, form distinctions and explicit capabilities;
- `SRC-DATA-001` remains the pinned structured normalization input for raw six stats, sex metadata, form identity and modern evolution metadata, not a standalone franchise-canon authority;
- conservative implications are D1;
- bounded ancient-setting adaptations are D2;
- generic reproduction, universal morale/parenting mechanics, hidden player-level scaling, generic elite affixes, modern infrastructure backfill and unsupported independent-child combat semantics remain forbidden unless separately required by evidence and contract review.

Pinned structured source revision:

```text
PokeAPI/api-data @ 2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

The Batch 06 source review exposes **no blocking Human Design Gate**. The existing one-active-entity / one-visible-companion-slot architecture can preserve ordinary Kangaskhan evidence by treating its child as a **species-local dependent associated state** rather than a second companion entity. Current ordinary-form evidence does not require a separately persistent combat profile, independent ordinary action economy, second slot, or general offspring subsystem.

Mega Kangaskhan is useful boundary evidence because official material explicitly distinguishes parent-and-child coordinated attacks there. That Mega-only statement is **not** imported into ordinary Kangaskhan behavior or the earlier-than-Hisui baseline.

## 2. Source registry

| Ref | Source | Primary use |
|---|---|---|
| `OFFICIAL-DEX-NIDORAN-F-SG` | `https://sg.portal-pokemon.com/play/pokedex/0029` | separate #029 identity, poison barbs, defensive toxin, evolution family |
| `OFFICIAL-DEX-NIDORINA-SG` | `https://sg.portal-pokemon.com/play/pokedex/0030` | friend/family behavior and separation nervousness |
| `OFFICIAL-DEX-NIDOQUEEN-SG` | `https://sg.portal-pokemon.com/play/pokedex/0031` | hard scales, tackle force, strongest-while-defending-young context |
| `OFFICIAL-DEX-NIDORAN-M-SG` | `https://sg.portal-pokemon.com/play/pokedex/0032` | separate #032 identity, directional hearing / vigilance, evolution family |
| `OFFICIAL-DEX-NIDORINO-SG` | `https://sg.portal-pokemon.com/play/pokedex/0033` | hostile-presence response, hard horn and barb escalation |
| `OFFICIAL-DEX-NIDOKING-SG` | `https://sg.portal-pokemon.com/play/pokedex/0034` | destructive tail/rampage capability and modern-comparison boundary |
| `OFFICIAL-DEX-KANGASKHAN-SG` | `https://sg.portal-pokemon.com/play/pokedex/0115` | pouch child, child playing outside pouch, mother remaining nearby, maternal protection |
| `OFFICIAL-DEX-MEGA-KANGASKHAN-SG` | `https://sg.portal-pokemon.com/play/pokedex/0115_1` | Mega-only explicit parent/child coordinated attack; non-import boundary |
| `OFFICIAL-DEX-TAUROS-SG` | `https://sg.portal-pokemon.com/play/pokedex/0128` | charging, horn fights, herd protector role, battle-scarred horns |
| `SRC-DATA-001` | `PokeAPI/api-data@2cda0b56...` | raw six stats, sex/form identity, modern evolution-chain metadata |
| `POKEAPI-EVOLUTION-CONTRACT` | `https://pokeapi.co/docs/v2` | structured Pokémon/species/evolution resource semantics |

Long flavor text is not copied into dossiers. Claims below are paraphrased and version-scoped where material.

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
| #029 | Nidoran♀ | 55 | 47 | 52 | 40 | 40 | 41 | `2/2/2/2/2/2` |
| #030 | Nidorina | 70 | 62 | 67 | 55 | 55 | 56 | `3/3/3/2/2/2` |
| #031 | Nidoqueen | 90 | 92 | 87 | 75 | 85 | 76 | `4/4/4/3/4/3` |
| #032 | Nidoran♂ | 46 | 57 | 40 | 40 | 40 | 50 | `2/2/2/2/2/2` |
| #033 | Nidorino | 61 | 72 | 57 | 55 | 55 | 65 | `3/3/2/2/2/3` |
| #034 | Nidoking | 81 | 102 | 77 | 85 | 75 | 85 | `4/5/3/4/3/4` |
| #115 | Kangaskhan | 105 | 95 | 80 | 40 | 80 | 90 | `5/4/4/2/4/4` |
| #128 | Tauros | 75 | 100 | 95 | 40 | 70 | 110 | `3/5/4/2/3/5` |

No manual rating exception is required.

Hazard severity remains orthogonal to these ratings. In particular, poison exposure, a Nidoqueen protective rush, Nidoking rampage, Kangaskhan maternal defense and a Tauros charge are not reduced to flat damage derived only from Force.

## 4. Identity, sex, form and evolution audit

The pinned structured source and current official Pokédex representation preserve the mandatory identities as separate species rows:

```text
national_dex_29 == nidoran_f
national_dex_32 == nidoran_m
national_dex_29 != national_dex_32
nidoran_f_and_nidoran_m_are_not_one_generic_form_row == true
```

Structured sex metadata is consistent with the sex-linked species identities used by the current games:

- #029 Nidoran♀, #030 Nidorina and #031 Nidoqueen are female-only species entries;
- #032 Nidoran♂, #033 Nidorino and #034 Nidoking are male-only species entries;
- #115 Kangaskhan is female-only in the reviewed structured metadata;
- #128 Tauros is male-only in the reviewed structured metadata.

This fact **does not** require P4 to define heredity, mating pairs, eggs, breeding compatibility, parent assignment, or a universal reproduction simulator.

Pinned modern evolution metadata:

- Nidoran♀ -> Nidorina: Red/Blue `level-up`, minimum 16;
- Nidorina -> Nidoqueen: Red/Blue `use-item`, Moon Stone;
- Nidoran♂ -> Nidorino: Red/Blue `level-up`, minimum 16;
- Nidorino -> Nidoking: Red/Blue `use-item`, Moon Stone;
- Kangaskhan: no ordinary evolution in the mandatory original-form baseline;
- Tauros: no ordinary evolution in the mandatory original-form baseline.

Under D-032, the level values remain modern-game metadata rather than diegetic kill-XP, visible character levels or universal ancient thresholds. Moon Stone remains a species-specific physical evolution relationship; it does not create a generic `Evolve` command, mass stone economy or guaranteed player-controlled trigger.

Mega Kangaskhan and Paldean Tauros forms are later form references and do not replace the mandatory original Gen-I species rows.

## 5. Baseline-era presence conclusion

None of the reviewed current sources forces a modern/artificial/noncontemporaneous origin for these eight original species.

That does **not** make a specific ancient Kanto habitat C1 canon. Exact baseline locality remains a D2 authoring choice constrained by the ecology dossier.

| Species group | Baseline conclusion | Scope |
|---|---|---|
| Nidoran♀ family | `plausible-derived` | natural/local placement may be authored conservatively; family/social state remains species-local |
| Nidoran♂ family | `plausible-derived` | natural/local placement may be authored conservatively; vigilance/rampage does not imply universal aggression |
| Kangaskhan | `plausible-derived` | parent/child encounter representation is supported; exact ancient range remains derived |
| Tauros | `plausible-derived` | herd ecology may be authored conservatively; exact ancient range remains derived |

No chronology anomaly is required by this review merely to make these species directly encounterable under D-034. Opening-locality placement is still a later content decision.

## 6. Nidoran♀ / Nidorina / Nidoqueen evidence packet

### C1

- Nidoran♀ is a separate #029 Poison-type species whose barbs can secrete powerful poison; the reviewed official text frames those barbs as protection for a small-bodied Pokémon and describes stronger toxin release when enraged.
- Nidorina is a separate #030 Poison-type species. Around friends or family it keeps its barbs tucked away to avoid harming them and becomes nervous when separated.
- Nidoqueen is a separate #031 Poison/Ground species with extremely hard scales and powerful tackling. The reviewed official text says it is at its strongest while defending its young.

### D1 / D2 boundary

```text
family_presence_can_change_behavior == true
family_presence_changes_species_base_stats == false
separation_nervousness_is_species_local_state == true
universal_family_morale_meter_created == false
protecting_young_can_escalate_encounter_pressure == true
protecting_young_grants_fixed_global_attack_bonus == false
poison_hazard_severity_capped_by_force_rating == false
universal_parenting_system_created == false
```

The dossier may expose states such as `with_family`, `separated_from_family`, `young_present` and `young_threatened` where useful for deterministic P5 authoring. Those are species-local scene hooks, not new universal Pokémon attributes.

Result: **PASS — no Human Design Gate.**

## 7. Nidoran♂ / Nidorino / Nidoking evidence packet

### C1

- Nidoran♂ is a separate #032 Poison-type species with unusually mobile ears and strong directional sound awareness.
- Nidorino is a separate #033 Poison-type species whose hard horn and raised barbs accompany an aggressive response to detected hostile presence.
- Nidoking is a separate #034 Poison/Ground species with very high destructive tail force and severe rampage capability.
- The reviewed official Nidoking comparison uses a modern metal transmission tower as a strength reference.

### D1 boundary

```text
strong_sound_detection_supported == true
strong_sound_detection_equals_omniscience == false
hostile_presence_response_supported == true
hostile_presence_detection_equals_perfect_intent_reading == false
rampage_capability_supported == true
rampage_equals_always_aggressive == false
modern_comparison_object_is_capability_reference == true
modern_comparison_object_authorizes_baseline_infrastructure == false
```

The transmission-tower comparison is useful for scale, not worldbuilding chronology. P2's iron-age baseline therefore remains unchanged.

Result: **PASS — no Human Design Gate.**

## 8. Kangaskhan parent/child encounter-unit packet

### C1

- Ordinary Kangaskhan is #115, Normal type, categorized as the Parent Pokémon and does not ordinarily evolve.
- Current official material describes Kangaskhan protecting its child in its pouch.
- The child may play outside the pouch while the mother remains nearby watching over it.
- The mother responds aggressively to threats against the child.
- Mega Kangaskhan is a distinct later form whose official ability text explicitly states that parent and child each attack.

### Source implication

Ordinary-form evidence requires the child to be represented as a real dependent organism associated with the mother. It does **not** require ordinary Kangaskhan to use Mega Kangaskhan's two-actor attack rule.

Therefore the narrowest faithful P4 representation is:

```text
active_species_entity == kangaskhan
visible_companion_slot_cost == 1
dependent_child_associated_state == true
child_location_state in {pouch, nearby_outside_pouch}
child_presence_can_trigger_maternal_protection == true
ordinary_child_independent_combat_action_required == false
separate_child_species_profile_required == false
separate_child_companion_slot_required == false
separate_persistent_child_injury_death_history_required_by_current_sources == false
mega_parent_child_attack_semantics_imported_to_baseline == false
```

The associated child is **not** treated as inventory, equipment, a hidden free companion, or a separately capturable mandatory species. It is part of Kangaskhan's species-local social/identity state.

If a future authored event makes a particular child's independent injury, separation, death, maturation or long-term history mechanically central, that event must define the needed persistence explicitly under later P5/P7 data contracts rather than retroactively turning every Kangaskhan child into a second ordinary companion entity.

This closes the selection-level Human Design Gate question without defining general offspring metaphysics or reproduction.

Result: **PASS — no Human Design Gate.**

## 9. Tauros herd/protector packet

### C1

- Original Tauros is #128, Normal type and does not ordinarily evolve.
- Current official material describes furious charging behavior.
- Tauros fight one another by locking horns.
- A herd protector is described as taking pride in battle-scarred horns.

### D1 / D2 boundary

```text
herd_social_role_supported == true
herd_protector_role_supported == true
battle_scars_can_identify_individual_history == true
protector_role_rewrites_species_baseline == false
herd_membership_grants_hidden_player_scaled_bonus == false
generic_elite_hp_affix_created == false
named_exceptional_tauros_allowed_under_D031 == true
```

A protector may be authored as an explicit exceptional individual through persistent scars, learned behavior, social position, injuries, terrain use and explicit individual deltas. Ordinary Tauros remain on the fixed species baseline and do not scale with the player.

Result: **PASS — no Human Design Gate.**

## 10. Required hazard / permission records

Full-schema authoring must include at least:

- `nidoran-f-poison-barb-contact` — toxin/contact exposure independent of low ordinary Force;
- `nidoran-f-enraged-horn-toxin` — anger-context toxin escalation;
- `nidorina-family-safe-barbs` — family-presence approach state and reduced accidental barb exposure without changing baseline stats;
- `nidorina-separation-nervousness` — species-local behavior state, not a universal morale effect;
- `nidoqueen-hard-scale-tackle` — high-force collision / knockback permission;
- `nidoqueen-young-defense-escalation` — protective-context behavior/approach escalation without a universal parent stat bonus;
- `nidoran-m-sound-vigilance` — auditory detection permission bounded by range, obstruction and scene context;
- `nidorino-hostile-presence-challenge` — threat-response approach escalation and horn/barb danger;
- `nidoking-destructive-tail-rampage` — severe collision/terrain-damage pressure independent of whether modern comparison infrastructure exists;
- `kangaskhan-child-protection` — dependent-child proximity/threat state affecting approach and maternal aggression;
- `tauros-furious-charge` — momentum/trampling/collision pressure;
- `tauros-herd-protector-intervention` — social-role encounter permission without species-wide stat scaling.

No record above is a flat automatic death formula. D-020 serious selective lethality remains authoritative.

## 11. Cross-system contradiction review

```text
portable_containment_assumed == false
capture_equals_companionship == false
visible_companion_slots == 3
kangaskhan_slot_cost == 1
kangaskhan_child_hidden_free_companion == false
mega_kangaskhan_baseline_authorized == false
nidoran_pair_collapsed_into_one_species == false
generic_reproduction_system_created == false
generic_parenting_system_created == false
generic_family_morale_attribute_created == false
herd_membership_causes_player_level_scaling == false
protector_role_equals_generic_elite_affix == false
modern_transmission_infrastructure_backfilled == false
hazard_severity_capped_by_species_stats == false
```

Result: **PASS**.

## 12. Source-review outcome

```text
species_reviewed == 8
identity_form_review == PASS
paired_sex_linked_species_review == PASS
raw_stat_reproduction == PASS
manual_rating_exception_count == 0
modern_evolution_metadata_review == PASS
social_ecology_state_boundary == PASS
parent_young_identity_boundary == PASS
herd_protector_exception_boundary == PASS
player_scaling_regression == PASS
modern_infrastructure_backfill_regression == PASS
batch_blocking_gate_count == 0
rating_scale_version == p4-six-axis-v1
```

The manifest remains unchanged during source review:

```text
dossier_complete_count == 44
pilot_reviewed_count == 2
not_started_count == 105
draft_count == 0
blocking_p4_gate_count == 0
```

## 13. Exact next work

Author the eight full `p4-six-axis-v1` Batch 06 dossiers for #029 Nidoran♀, #030 Nidorina, #031 Nidoqueen, #032 Nidoran♂, #033 Nidorino, #034 Nidoking, #115 Kangaskhan and #128 Tauros.

Before manifest promotion:

1. encode Nidoran♀ and Nidoran♂ as separate species dossiers and preserve their separate evolution chains;
2. represent Nidorina/Nidoqueen social effects as species-local encounter states, not universal morale/parenting mechanics;
3. represent Kangaskhan as one active species entity / one visible companion slot with a dependent associated child state and no ordinary Mega-derived second action;
4. keep Tauros herd protectors and named exceptional individuals explicit under D-031 rather than introducing hidden scaling or generic elite affixes;
5. encode all required hazards as exposure/permission/state records orthogonal to six-axis ratings;
6. run family, evolution, companionship, parent/young, herd/protector, hazard, serious-lethality, P2/P3/P4 contradiction and provenance regressions;
7. promote exactly the eight manifest rows only after the complete batch passes, then write the Batch 06 completion audit.

Expected clean-close manifest remains `52 complete / 2 pilot_reviewed / 97 not_started / 0 draft / 0 blocking gate`.

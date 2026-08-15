# P4 Batch 02 — Source Review

Status: **SOURCE REVIEW COMPLETE — no blocking Human Design Gate**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_02_EVOLUTION_MECHANISM_PLAN.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`

## 1. Review rule

Batch 02 applies the existing canon-first P4 evidence policy and D-032.

- official Pokémon Pokédex material is C1 evidence;
- project-pinned structured data is a normalization/input source, not a standalone canon authority;
- conservative source implications are D1;
- approved ancient-setting adaptation is D2;
- unsupported biological detail remains `unknown` rather than pseudo-canon.

Evolution review asks two separate questions for every step:

1. what family relationship / modern trigger metadata exists;
2. what, if anything, the ancient world can responsibly claim about the actual transformation.

Ordinary age, health, experience and learned skill are never used as synonyms for evolution.

## 2. Source registry

| Ref | Source | Primary use |
|---|---|---|
| `OFFICIAL-DEX-CATERPIE-SG` | `https://sg.portal-pokemon.com/play/pokedex/0010` | defensive odor, suction-pad climbing, family identity |
| `OFFICIAL-DEX-METAPOD-SG` | `https://sg.portal-pokemon.com/play/pokedex/0011` | motionless cocoon stage, hard shell/tender interior, imminent evolution |
| `OFFICIAL-DEX-BUTTERFREE-ID` | `https://id.portal-pokemon.com/play/pokedex/0012` | poisonous wind-borne scales, daily honey collection, family identity |
| `OFFICIAL-DEX-PIKACHU-SG` | `https://sg.portal-pokemon.com/play/pokedex/0025` | cheek electricity, anger discharge, group lightning-storm pressure, berry roasting |
| `OFFICIAL-DEX-RAICHU-PH` | `https://ph.portal-pokemon.com/play/pokedex/0026` | tail grounding, charge warning, extreme electrical discharge, family identity |
| `OFFICIAL-DEX-ABRA-SG` | `https://sg.portal-pokemon.com/play/pokedex/0063` | 18-hour sleep, psychic activity during sleep, mind reading, danger teleportation |
| `OFFICIAL-DEX-KADABRA-SG` | `https://sg.portal-pokemon.com/play/pokedex/0064` | silver-spoon amplification, psychic power dependence, unverified child rumor |
| `OFFICIAL-DEX-ALAKAZAM-IN` | `https://in.portal-pokemon.com/play/pokedex/0065` | psychically made unique spoons, trust gift, same-species age/head-weight/psychic-strength relationship |
| `POKEAPI-EVOLUTION-CONTRACT` | `https://pokeapi.co/docs/v2` | structured family-tree / modern evolution-condition representation |
| `SRC-DATA-001` | project-pinned structured revision | raw six stats, type/ability normalization, trigger metadata |

Long flavor text is not reproduced. Dossiers use paraphrased claim records plus source pointers.

## 3. Canonical stat/rating audit

Using pinned `p4-six-axis-v1`:

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
| #010 | Caterpie | 45 | 30 | 35 | 20 | 20 | 45 | `2/1/1/1/1/2` |
| #011 | Metapod | 50 | 20 | 55 | 25 | 25 | 30 | `2/1/2/1/1/1` |
| #012 | Butterfree | 60 | 45 | 50 | 90 | 80 | 70 | `3/2/2/4/4/3` |
| #025 | Pikachu | 35 | 55 | 40 | 50 | 50 | 90 | `1/2/2/2/2/4` |
| #026 | Raichu | 60 | 90 | 55 | 90 | 80 | 110 | `3/4/2/4/4/5` |
| #063 | Abra | 25 | 20 | 15 | 105 | 55 | 90 | `1/1/1/5/2/4` |
| #064 | Kadabra | 40 | 35 | 30 | 120 | 70 | 105 | `2/1/1/6/3/5` |
| #065 | Alakazam | 55 | 50 | 45 | 135 | 95 | 120 | `2/2/2/6/4/6` |

No manual rating exception is required.

## 4. Caterpie family evidence packet

### #010 Caterpie / 캐터피

C1:

- Bug-type Caterpie is the first stage of the Caterpie/Metapod/Butterfree family.
- It can release a strongly unpleasant odor from the head antenna as defense.
- Suction-pad-like feet support persistent climbing on slopes/walls.

D1:

- `small + weak stats` does not mean zero encounter pressure: close handling can provoke a defensive odor and climbing permits access to vegetation/structures ordinary crawling assumptions may miss.
- The odor should be an exposure/position/social nuisance hazard unless another source establishes a more severe physiological consequence.
- Ordinary body growth while Caterpie remains Caterpie is separate from entering the Metapod transformation.

### #011 Metapod / 단데기

C1:

- Metapod is explicitly a cocoon stage waiting for evolution.
- It remains largely motionless and can harden its shell.
- The body inside the shell remains tender despite the outer protection.

D1 / D-032:

- This is a strong biologically legible metamorphosis control case.
- Metapod is not `older Caterpie + Defense`; it is a distinct species stage with radically changed mobility, vulnerability and logistics.
- Hard outer protection does not justify universal invulnerability; crushing/harsh impacts remain meaningful because the interior is tender.
- Protecting a companion through the immobile stage is a valid event premise, not a passive menu timer.

### #012 Butterfree / 버터플

C1:

- Butterfree is the flying final stage of the family.
- Official material supports wind-borne poisonous scales.
- It regularly gathers honey and carries it on leg hairs back toward its home/nest context.

D1:

- Evolution creates a genuine capability discontinuity: flight, wind-borne scale exposure, broader ranging and food-collection behavior replace Metapod immobility.
- Poisonous scales require an explicit exposure hazard record; severity is not derived solely from Potency/Resistance.
- Honey collection can create ecology/tracking/cross-species hooks without implying human apiculture or domestication.

### Family evolution result

**PASS — no gate.**

Ancient treatment:

- Caterpie growth remains same-species development.
- Caterpie -> Metapod and Metapod -> Butterfree are biologically legible metamorphic species transformations.
- Modern level thresholds are not diegetic XP.
- Exact timing/duration can remain locality/individual-dependent unless stronger source evidence is introduced.

This family demonstrates that `evolution is difficult/meaningful` does not require every species family to be equally mysterious; a natural lifecycle can be legible while still being a real transformative event.

## 5. Pikachu family evidence packet

### #025 Pikachu / 피카츄

C1:

- Electric-type Pikachu stores electricity in cheek pouches.
- Anger can cause immediate discharge.
- Groups can build enough electricity to create lightning-storm-like pressure.
- Official material supports using electric shock to roast tough berries.

D1:

- Electrical contact/discharge is a true hazard mechanism, while berry roasting is a narrow behavior/technology observation hook rather than proof of human electrical infrastructure.
- Multiple Pikachu can create environmental escalation through accumulated discharge without a generic swarm stat bonus.
- Ordinary Pikachu age, skill and charge-management experience remain same-species growth.

### #026 Raichu / 라이츄

C1:

- Electric-type Raichu is the canonical evolved stage after Pikachu.
- Its tail can discharge electricity into the ground.
- Ear posture can reveal heavy cheek-pouch charge.
- Official material supports extremely high-voltage discharge and correspondingly severe electrical danger.

Structured modern trigger input:

- project-pinned evolution metadata records Pikachu -> Raichu through a Thunder Stone/item trigger.

D1 / D2 boundary:

- The stone relationship is retained as canonical modern trigger metadata and is more materially interpretable than a `trade` trigger because it names a physical item/material interaction.
- P4 does **not** infer that Thunder Stones are common, mined commercially, sold in shops, or available in the opening locality.
- Ancient access is therefore `rare / locality-dependent / event-authored unless later source review establishes more`.
- A companion Pikachu does not automatically evolve because the player possesses a stone. Voluntary relationship/handling and an authored transformation event remain necessary under D-013/D-032; the stone is a prerequisite/catalyst, not an inventory upgrade button.

### Family evolution result

**PASS — no gate.**

Ancient treatment:

`Pikachu -> Raichu = rare Thunder-Stone-mediated species transformation`.

Evidence boundary:

- family + modern item trigger: structured canonical game input;
- scarcity/local access, voluntary handling and event presentation: bounded project adaptation;
- exact geological origin, mineability and reusable mechanism: unresolved and not invented.

This does not create a generic evolution-stone economy. Each future stone family still receives source/locality review.

## 6. Abra family evidence packet

### #063 Abra / 캐이시

C1:

- Abra uses psychic powers even while asleep and spends very large portions of the day sleeping.
- It can read minds and teleport when danger approaches.

D1:

- `sleeping` does not imply helplessness; Teleport can invalidate ordinary capture/pursuit approaches before numeric difficulty is considered.
- Sleep schedule and psychic vigilance create unusual observation/encounter windows.
- Human D-029 Psychic Gifts do not grant control, taming or automatic resistance to Abra.

### #064 Kadabra / 윤겔라

C1:

- Kadabra has strong psychic capability associated with a silver spoon.
- Official material describes the spoon as amplifying its power and says capability is substantially reduced without it.
- A story about a psychically gifted child becoming Kadabra is explicitly presented as unverified rumor rather than settled fact.

D1:

- The silver spoon is a meaningful capability dependency/observable clue, not generic loot.
- P4 must preserve the child-transformation story as rumor/uncertain cultural material rather than using it to establish human-to-Pokémon transformation as setting law.
- Ordinary Abra psychic development is not automatically Abra -> Kadabra evolution.

### #065 Alakazam / 후딘

C1:

- Alakazam creates its own distinctive spoons using psychic power.
- It may give a spoon to someone it deeply trusts.
- Official material explicitly links **longer same-species life** with a larger/heavier head and stronger psychic power.

D1 / D-032 significance:

- The age/head/power statement is unusually useful evidence for the growth/evolution distinction: an Alakazam can continue to age and become stronger **after it is already Alakazam**.
- Therefore `getting older/stronger` cannot be treated as synonymous with `becoming the next species stage`.
- A gifted spoon is relationship evidence/material culture, not ownership of Alakazam and not a universal Psychic amplifier for humans.

Structured modern trigger input:

- Abra -> Kadabra uses level-style metadata;
- Kadabra -> Alakazam uses trade-style metadata.

D2 ancient interpretation:

- neither modern trigger becomes kill-XP or an ancient trade institution;
- Abra -> Kadabra and Kadabra -> Alakazam are treated as rare natural Psychic-family transformations reached when the individual is developmentally capable, while the exact reproducible biological/anomalous trigger remains unknown to ordinary humans;
- development/readiness may be a prerequisite without ordinary growth itself being the transformation;
- no generic human ritual, exchange, training threshold or D-029 Gift action can force either evolution.

### Family evolution result

**PASS — no gate.**

This is intentionally consistent with D-032 and the Haunter/Gengar precedent while remaining species-specific: the Abra family has its own source evidence about sleep, mind-reading, spoons, trust and continued aging after final evolution.

## 7. Hazard/permission review highlights

Batch 02 will require explicit full-schema hazard records for at least:

- `caterpie-defensive-odor` — nuisance/deterrence exposure, severity bounded by evidence;
- `butterfree-poison-scales` — wind-borne poison exposure with environment-dependent delivery;
- `pikachu-electric-discharge` — contact/ranged electrical exposure;
- `pikachu-group-electrical-build` — environmental/group escalation without stat bonus;
- `raichu-high-voltage-discharge` — severe electrical hazard with readable charge warning;
- `abra-teleport-evasion` — approach invalidator/escape permission rather than damage;
- `kadabra-psychic-pressure` — Psychic capability with spoon dependency;
- `alakazam-psychic-pressure` — high Potency/Speed but aggression must remain separately authored.

Do not infer lethal values from voltage prose into a universal damage formula. D-020 consequence authoring remains contextual.

## 8. Cross-system contradiction review

```text
portable_containment_assumed == false
capture_equals_companionship == false
human_psychic_gift_controls_Psychic_Pokemon == false
kill_XP_causes_evolution == false
visible_level_causes_evolution == false
trade_literalized_as_ancient_institution == false
stone_item_becomes_generic_upgrade_currency == false
player_level_enemy_scaling == false
hazard_severity_capped_by_species_rating == false
```

Result: **PASS**.

## 9. Human Design Gate review

No blocking owner decision is required at source-review stage.

The potentially creative questions are bounded without inventing a universal setting law:

- Thunder Stone local availability may remain rare/locality-dependent and be authored later as an event/resource question;
- exact Abra-family transformation causes may remain unknown natural mechanisms;
- exact Caterpie-family metamorphosis duration may remain ecological/locality data rather than a global number.

If full-schema authoring later reveals that one of these requires a durable world-wide answer, it must still be raised as a new HDG rather than silently expanded.

## 10. Review result

```text
source_review_species_count == 8
rating_profile_reproducible_count == 8
manual_rating_exception_count == 0
family_evolution_review_count == 3
family_evolution_pass_count == 3
blocking_human_design_gate_count == 0
shared_evolution_rule == D-032
```

The next coherent work is full-schema authoring for all eight Batch 02 species followed by family consistency and manifest-promotion audit.

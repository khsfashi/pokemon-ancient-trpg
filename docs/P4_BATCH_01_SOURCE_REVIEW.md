# P4 Batch 01 — Source Review

Status: **SOURCE REVIEW COMPLETE — P4-HDG-002 RESOLVED**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_01_PILOT_FAMILY_CLOSURE_PLAN.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_PILOT_FULL_SCHEMA_DOSSIERS.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## 1. Review rule

Batch 01 reuses the existing P4 evidence policy:

- official Pokémon Pokédex material is C1 evidence;
- structured source data pinned by the project remains a normalization/input source, not a canon authority by itself;
- official cross-source synthesis is C2;
- conservative implications are D1;
- setting-authored additions are D2;
- unsupported biological or historical gaps remain U instead of being promoted into pseudo-canon.

Inherited structured revision: `SRC-DATA-001@2cda0b56`.

D-032 additionally requires that **ordinary growth/maturation and evolution remain distinct concepts**. Modern level/trade metadata is preserved as source context but is never translated automatically into kill-XP, a visible level threshold, an ancient trading institution, or an invented ritual.

No Batch 01 source claim changes D-031, `p4-six-axis-v1`, the no-player-scaling rule, or the hazard-severity clarification.

## 2. Source registry for this batch

| Ref | Source | Use |
|---|---|---|
| `OFFICIAL-DEX-KAKUNA-US` | `https://www.pokemon.com/us/pokedex/kakuna` | defensive stinger/poison evidence, identity/type/ability/family |
| `OFFICIAL-DEX-KAKUNA-PH` | `https://ph.portal-pokemon.com/play/pokedex/0014` | cocoon immobility, tree-clinging, internal metamorphic heat, physical metadata |
| `OFFICIAL-DEX-RATICATE-SG` | `https://sg.portal-pokemon.com/play/pokedex/0020` | swimming adaptation, whisker sensitivity, identity/type/abilities/family |
| `OFFICIAL-DEX-HAUNTER-SG` | `https://sg.portal-pokemon.com/play/pokedex/0093` | darkness stalking, gaseous touch, wall traversal, lethal-withering lick evidence, physical metadata |
| `OFFICIAL-DEX-GENGAR-SG` | `https://sg.portal-pokemon.com/play/pokedex/0094` | shadow intrusion, heat theft, life-stealing intent, protective-charm warning, identity/type/ability/family |
| `OFFICIAL-DEX-MAGIKARP-PH` | `https://ph.portal-pokemon.com/play/pokedex/0129` | weakness/hardiness, broad aquatic tolerance, historical-strength statement, identity/type/ability/family |
| `OFFICIAL-DEX-KABUTOPS-SG` | `https://sg.portal-pokemon.com/play/pokedex/0141` | extinct status, land-adaptation evidence, ~29-knot swimming, prey pursuit with scythes, identity/type/abilities/family |
| `POKEAPI-EVOLUTION-CONTRACT` | `https://pokeapi.co/docs/v2` | structured distinction between evolution relationship and modern trigger metadata |

The repository stores paraphrases and source pointers rather than reproducing long flavor-text passages.

## 3. Canonical input and rating audit

`p4-six-axis-v1` bands remain:

```text
raw < 40     => 1
40..59       => 2
60..79       => 3
80..99       => 4
100..119     => 5
>=120        => 6
```

| Dex | Species | HP | Atk | Def | SpA | SpD | Spe | P4 ratings V/F/G/P/R/S |
|---:|---|---:|---:|---:|---:|---:|---:|---|
| 014 | Kakuna | 45 | 25 | 50 | 25 | 25 | 35 | `2/1/2/1/1/1` |
| 020 | Raticate | 55 | 81 | 60 | 50 | 70 | 97 | `2/4/3/2/3/4` |
| 093 | Haunter | 45 | 50 | 45 | 115 | 55 | 95 | `2/2/2/5/2/4` |
| 094 | Gengar | 60 | 65 | 60 | 130 | 75 | 110 | `3/3/3/6/3/5` |
| 129 | Magikarp | 20 | 10 | 55 | 15 | 20 | 80 | `1/1/2/1/1/4` |
| 141 | Kabutops | 60 | 115 | 105 | 65 | 70 | 80 | `3/5/5/3/3/4` |

No manual rating exception is required.

## 4. Species evidence packets

### #014 Kakuna / 딱충이

C1:

- Bug/Poison cocoon stage between Weedle and Beedrill.
- Ordinary locomotion is extremely limited while attached to vegetation.
- Internal metamorphic activity can make the shell noticeably hot.
- When endangered, it can expose a stinger and poison an attacker.
- Shed Skin is an exposed ability input.

D1:

- `immobile != harmless`: approach and handling are easier than against Beedrill, but direct grabbing can still create venom exposure.
- Colony/family pressure belongs to cross-species encounter context, not a Kakuna stat bonus.
- The hot shell is a tracking/identification clue and a narrow handling hazard, not evidence for general fire capability.

D-032 evolution treatment:

- Weedle -> Kakuna -> Beedrill is a biologically legible metamorphic family.
- The cocoon transition is still a discontinuous species event rather than ordinary aging or a level-up stat increment.
- Timing, survival and habitat can matter without inventing a visible XP threshold.

No blocking gap.

### #020 Raticate / 레트라

C1:

- Normal-type evolved form of Rattata.
- Official material supports swimming by means of small webbed hind feet.
- Whiskers are materially important to balance; touching them can provoke an angry bite.
- Run Away and Guts remain structured ability inputs.

D1:

- Compared with Rattata, the species baseline justifies stronger bite/gnaw pressure and better physical contest values without preserving mandatory late-game difficulty.
- Swimming widens escape/access routes around rivers, wetlands, shorelines, and flooded storage; it does not imply a universal aquatic habitat.
- The existing named-apex Rattata may still exceed an ordinary Raticate in selected axes because individual growth/history is separate from evolution-stage baseline.

D-032 evolution treatment:

- Ordinary Rattata growth remains same-species development.
- Rattata -> Raticate is a separate species transformation; modern level metadata is not kill-XP or an automatic age counter.
- P5 may author readiness/maturation conditions, but evolution itself remains a meaningful event.

No blocking gap.

### #093 Haunter / 고우스트

C1:

- Ghost/Poison middle stage between Gastly and Gengar.
- Levitate is an exposed ability input.
- It stalks in total darkness and can touch with a gaseous hand; contact is associated with uncontrollable shuddering.
- Official material describes it as able to pass through walls and appear from unexpected positions.
- Official material preserves a potentially lethal progressive-withering consequence around being licked.

D1:

- Ordinary physical barriers and weapon approaches can be invalid rather than merely difficult when Haunter is not materially committed.
- Darkness, enclosed ruins and blind corners amplify encounter risk because warning and line-of-retreat information are reduced.
- The lick hazard keeps exposure and post-exposure consequence semantics separate; Potency 5 does not itself define lethality.

D2 / D-032:

- Haunter may naturally reach Gengar through a rare species transformation.
- Ordinary humans do not know a reproducible trigger.
- A companion Haunter has no generic intentional `Evolve` action; a transformation requires a rare authored event/state.

No blocking gap remains.

### #094 Gengar / 팬텀

C1:

- Ghost/Poison final stage of the Gastly family.
- Official material supports entering/occupying a victim's shadow, stealing body heat, and waiting for an opportunity to take life.
- A protective charm is explicitly presented in official material as an urgent response when a victim's shadow displays an anomalous warning sign.
- Cursed Body is the current exposed ability input.
- The Haunter -> Gengar family relationship is canonical, while modern structured metadata uses a trade trigger.

D1:

- Shadow occupation is a permission-level anomalous hazard: ordinary line-of-sight, walls and conventional guard posture may not be sufficient counterplay.
- Heat loss creates a distinct environmental/physiological hazard track without making every Gengar automatically aggressive.
- Protective charms can support a narrow P3 emergency-consumable hook, but P4 must not invent ingredients, universal efficacy, or a generic anti-Ghost item economy.

D2 / owner-approved P4-HDG-002 resolution:

- **A — Unknown natural maturation** is binding, refined by D-032.
- Gengar exists naturally, and a Haunter can undergo a rare natural species transformation into Gengar.
- The biological/anomalous trigger is not known or reproducible by ordinary humans.
- The modern trade trigger remains modern gameplay/source metadata and is **not** interpreted as an ancient trading institution, ownership-transfer ritual, or known biological law.
- Future content may expose case-specific signs or hypotheses but may not establish a universal trigger without new source review or a later owner decision.

No blocking gap remains. The exact underlying cause is intentionally unknown, not a pending design gate.

### #129 Magikarp / 잉어킹

C1:

- Water-type base stage of the Magikarp/Gyarados family.
- Official material describes modern Magikarp as very weak but unusually hardy and able to live in many kinds of water.
- Official material explicitly states that distant-past Magikarp were somewhat stronger than present-day descendants.
- Swift Swim is an exposed ability input.

D1:

- This directly supports a species-specific `canon_historical_change` classification.
- The historical statement does not supply exact ancient base stats, so P4 does not invent a universal numeric buff or modify `p4-six-axis-v1`.
- Ancient Magikarp may be less helpless than the modern stereotype while remaining far below ordinary Gyarados in overall threat.
- Hardiness supports environmental survival, not combat aggression.

D-032 evolution treatment:

- Magikarp growth and lineage strength variation remain same-species concepts.
- Magikarp -> Gyarados is a separate, dramatic species transformation with persistent individual identity.
- Modern level metadata is not a visible age/XP meter; P5 must give the transformation an authored rare-event context rather than automatic battle grinding.

No blocking gap.

### #141 Kabutops / 투구푸스

C1:

- Rock/Water evolved form of Kabuto.
- Official material treats the species as extinct in the ordinary modern record.
- Its body had begun adapting toward terrestrial function before extinction.
- It can swim at roughly 29 knots and rapidly close on prey.
- Scythe-like forelimbs are used to slash prey.
- Swift Swim and Battle Armor are exposed ability inputs.

D1:

- If living evidence is present in this pre-Hisui setting, Kabutops is a high-force pursuit predator with credible aquatic ambush/closing pressure.
- The setting's age does not itself prove that the opening region has a living population; Kabuto's reviewed rare-relict evidence remains locality-specific.
- Fossils, old hunting damage, myths or indirect ecological traces can all count as dossier/gameplay hooks without manufacturing a routine spawn table.

D-032 evolution treatment:

- Kabuto growth within a relict lineage is separate from Kabuto -> Kabutops transformation.
- Modern level metadata is not a diegetic automatic progression meter.
- Exact ancient transformation conditions remain source-unknown and may be authored only within the D-032 boundary.

No blocking gap.

## 5. Family consistency review

### Weedle -> Kakuna -> Beedrill

**PASS.**

- venom remains a consequence mechanism independent of raw stat scale;
- Kakuna is less mobile but not automatically safe to handle;
- metamorphosis is a real species transition, distinct from ordinary growth;
- Beedrill colony pressure remains repeated exposure/route control rather than a generic swarm stat bonus.

### Rattata -> Raticate

**PASS.**

- ordinary growth and exceptional individual development remain same-species changes;
- evolution changes the family stage but does not guarantee permanent encounter relevance;
- player progression may still make both ordinary stages routine;
- `pilot-rattata-apex-01` remains legal and may exceed ordinary Raticate on selected axes.

### Gastly -> Haunter -> Gengar

**PASS under D-032 / P4-HDG-002 choice A.**

- Ghost materiality/approach invalidation remains coherent;
- hazard severity remains separate from Potency;
- Haunter and Gengar support progressively stronger predatory/anomalous pressure;
- Haunter -> Gengar is a rare natural transformation with an unknown reproducible cause;
- no ancient trade institution or ritual is invented to mimic the modern trade trigger.

### Magikarp -> Gyarados

**PASS.**

- stronger ancient Magikarp is canon-supported but species-specific;
- ordinary growth/lineage variation remains distinct from evolution;
- the transformation preserves persistent individual identity and is not player kill-XP;
- no source supports turning ancient Magikarp into miniature Gyarados by blanket stat inflation.

### Kabuto -> Kabutops

**PASS.**

- fossil evidence, historical existence, rare-relict evidence and confirmed local living presence remain distinct knowledge states;
- ancient-setting chronology alone never guarantees an opening-region spawn;
- same-species development is distinct from the Kabuto -> Kabutops transformation.

## 6. Human Design Gate resolution

### P4-HDG-002 — Ancient Haunter -> Gengar evolution interpretation

**RESOLVED: A — Unknown natural maturation, generalized through D-032.**

The phrase `natural maturation` does **not** mean ordinary aging automatically becomes evolution. It means the transformation occurs naturally within the species family without a known human-reproducible recipe. D-032 keeps ordinary growth and the rare transformation separate.

Evidence boundary:

- `Haunter -> Gengar` family relationship: source-backed;
- modern trade trigger: source/mechanical metadata;
- rare natural transformation with no known reproducible ancient trigger: D2 project interpretation approved by the owner.

## 7. Review result

```text
source_review_species_count == 6
source_review_complete_count == 6
rating_profile_reproducible_count == 6
family_consistency_pass_count == 5
family_consistency_partial_count == 0
blocking_human_design_gate_count == 0
P4_HDG_002 == RESOLVED_A
shared_evolution_rule == D-032
```

Batch 01 may now proceed to final dossier promotion and coverage-manifest audit.

# P4 Batch 01 — Source Review

Status: **SOURCE REVIEW COMPLETE — one Human Design Gate exposed**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_01_PILOT_FAMILY_CLOSURE_PLAN.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_PILOT_FULL_SCHEMA_DOSSIERS.md`

## 1. Review rule

Batch 01 reuses the existing P4 evidence policy:

- official Pokémon Pokédex material is C1 evidence;
- structured source data pinned by the project remains a normalization/input source, not a canon authority by itself;
- official cross-source synthesis is C2;
- conservative implications are D1;
- setting-authored additions are D2;
- unsupported biological or historical gaps remain U instead of being promoted into pseudo-canon.

Inherited structured revision: `SRC-DATA-001@2cda0b56`.

No Batch 01 source claim changes D-031, `p4-six-axis-v1`, the no-player-scaling rule, or the hazard-severity clarification.

## 2. Source registry for this batch

| Ref | Source | Use |
|---|---|---|
| `OFFICIAL-DEX-KAKUNA-US` | `https://www.pokemon.com/us/pokedex/kakuna` | defensive stinger/poison evidence, identity/type/ability/family |
| `OFFICIAL-DEX-KAKUNA-PH` | `https://ph.portal-pokemon.com/play/pokedex/0014` | cocoon immobility, tree-clinging, internal metamorphic heat, physical metadata |
| `OFFICIAL-DEX-RATICATE-SG` | `https://sg.portal-pokemon.com/play/pokedex/0020` | swimming adaptation, whisker sensitivity, identity/type/abilities/family |
| `OFFICIAL-DEX-HAUNTER-SG` | `https://sg.portal-pokemon.com/play/pokedex/0093` | darkness stalking, gaseous touch, wall traversal, lethal-withering lick rumor, Levitate, physical metadata |
| `OFFICIAL-DEX-GENGAR-SG` | `https://sg.portal-pokemon.com/play/pokedex/0094` | shadow intrusion, heat theft, life-stealing intent, protective-charm warning, identity/type/ability/family |
| `OFFICIAL-DEX-MAGIKARP-PH` | `https://ph.portal-pokemon.com/play/pokedex/0129` | weakness/hardiness, broad aquatic tolerance, historical-strength statement, identity/type/ability/family |
| `OFFICIAL-DEX-KABUTOPS-SG` | `https://sg.portal-pokemon.com/play/pokedex/0141` | extinct status, land-adaptation evidence, ~29-knot swimming, prey pursuit with scythes, identity/type/abilities/family |
| `POKEAPI-EVOLUTION-CONTRACT` | `https://pokeapi.co/docs/v2` | structured distinction between evolution relationship and trigger metadata; Rattata example documents level-up trigger semantics |

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
- Colony/parent-stage pressure belongs to cross-species encounter context, not a Kakuna stat bonus.
- The hot shell is a tracking/identification clue and a narrow handling hazard, not evidence for general fire capability.

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
- The existing named-apex Rattata may still exceed an ordinary Raticate in selected axes because individual history is separate from evolution-stage baseline.

No blocking gap.

### #093 Haunter / 고우스트

C1:

- Ghost/Poison middle stage between Gastly and Gengar.
- Levitate is an exposed ability input.
- It stalks in total darkness and can touch with a gaseous hand; contact is associated with uncontrollable shuddering.
- Official material describes it as able to pass through walls and appear from unexpected positions.
- Official material preserves a lethal-withering rumor/consequence around being licked.

D1:

- Ordinary physical barriers and weapon approaches can be invalid rather than merely difficult when Haunter is not materially committed.
- Darkness, enclosed ruins, and blind corners amplify encounter risk because warning and line-of-retreat information are reduced.
- The lick hazard must have separate exposure and post-exposure consequence semantics; Potency 5 does not itself define lethality.

No blocking gap for the Haunter dossier itself.

### #094 Gengar / 팬텀

C1:

- Ghost/Poison final stage of the Gastly family.
- Official material supports entering/occupying a victim's shadow, stealing body heat, and waiting for an opportunity to take life.
- A protective charm is explicitly presented in official material as an urgent response when a victim's shadow displays an anomalous warning sign.
- Cursed Body is the current exposed ability input.

D1:

- Shadow occupation is a permission-level anomalous hazard: ordinary line-of-sight, walls, and conventional guard posture may not be sufficient counterplay.
- Heat loss creates a distinct environmental/physiological hazard track and can raise Fear or exposure consequences without making every Gengar automatically aggressive.
- Protective-charms can support a narrow P3 emergency-consumable hook, but P4 must not invent ingredients, universal efficacy, or a generic anti-Ghost item economy.

U / blocking design gap:

- The family relationship `Haunter -> Gengar` is canonical.
- Modern structured evolution metadata uses a trade trigger.
- The reviewed official Pokédex evidence does **not** establish a biological, ritual, social, geographic, or temporal cause that can simply replace trade in this ancient setting.
- Choosing a universal ancient trigger would therefore create durable project lore rather than recover an existing official fact.

This exposes **P4-HDG-002 — Ancient Haunter -> Gengar evolution interpretation**.

### #129 Magikarp / 잉어킹

C1:

- Water-type base stage of the Magikarp/Gyarados family.
- Official material describes modern Magikarp as very weak but unusually hardy and able to live in many kinds of water.
- Official material explicitly states that distant-past Magikarp were somewhat stronger than their present-day descendants.
- Swift Swim is an exposed ability input.

D1:

- This is direct support for a species-specific `canon_historical_change` classification.
- The historical statement does not supply exact ancient base stats, so P4 must not invent a universal numeric buff or retroactively modify `p4-six-axis-v1` without a later balance decision.
- Ancient Magikarp can be authored as physically more capable or less helpless than the modern stereotype while remaining far below ordinary Gyarados in overall threat.
- Hardiness supports environmental survival, not combat aggression.

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

- If living evidence is ever present in this pre-Hisui setting, Kabutops is a high-force pursuit predator with credible aquatic ambush/closing pressure.
- The setting's age does not itself prove that the opening region has a living population: Kabuto's reviewed rare-relict evidence remains locality-specific, and Kabutops requires separate evidence or authored exceptional treatment.
- Fossils, shed remains, old hunting damage, myths, or indirect ecological traces can all count as dossier/gameplay hooks without manufacturing a routine spawn table.

No blocking gap.

## 5. Family consistency review

### Weedle -> Kakuna -> Beedrill

PASS with the following invariant:

- venom remains a consequence mechanism independent of raw stat scale;
- Kakuna is less mobile but not automatically safe to handle;
- Beedrill colony pressure remains repeated exposure/route control rather than a generic swarm stat bonus.

### Rattata -> Raticate

PASS with the following invariant:

- ordinary maturation raises baseline physical capability;
- player progression is still allowed to make both ordinary stages routine;
- `pilot-rattata-apex-01` remains legal and may exceed ordinary Raticate on selected axes.

### Gastly -> Haunter -> Gengar

PARTIAL PASS:

- Ghost materiality/approach invalidation remains coherent;
- hazard severity remains separate from Potency;
- Haunter and Gengar evidence supports progressively stronger predatory/anomalous pressure;
- family closure is blocked only by the ancient interpretation of the modern trade trigger.

### Magikarp -> Gyarados

PASS with the following invariant:

- stronger ancient Magikarp is canon-supported but species-specific;
- the transformation remains a persistent-individual biological change, not player kill-XP;
- no source supports turning ancient Magikarp into miniature Gyarados by blanket stat inflation.

### Kabuto -> Kabutops

PASS with the following invariant:

- fossil evidence, historical existence, rare-relict evidence, and confirmed local living presence remain distinct knowledge states;
- ancient-setting chronology alone never guarantees an opening-region spawn.

## 6. Human Design Gate

### P4-HDG-002 — Ancient Haunter -> Gengar evolution interpretation

Owner choice is required before Batch 01 can be promoted to `complete`.

Candidate directions:

- **A — Unknown natural maturation:** treat `trade` as non-diegetic modern gameplay metadata. Gengar exists naturally, but ordinary humans do not know a reproducible Haunter evolution trigger. Player-owned/companion Haunter cannot intentionally evolve through a generic action until a later rare authored event establishes a case-specific cause.
- **B — Voluntary bond-transfer threshold:** preserve the exchange motif by making evolution possible when a Haunter voluntarily changes its enduring human/community bond. This is thematically close to trade but is new D2 species-wide lore.
- **C — Liminal crossing ritual:** interpret trade as a proxy for crossing an ownership/social boundary and bind evolution to an ancient reciprocal transfer rite. This preserves a recognizable trade analogue but risks over-civilizing a wild Ghost family and requires more invented ritual detail.
- **D — Exceptional-only unresolved:** ordinary wild Gengar exists, but Haunter-to-Gengar transformation is treated as rare, exceptional, and not governed by a universal reproducible rule in baseline P4. Specific future events may author individual causes without claiming a species-wide mechanism.

Recommended default: **A**. It is the smallest extrapolation, preserves the canonical family without pretending a gameplay trade mechanic is a discovered biological law, and keeps Gengar appropriately mysterious in a low-technology pre-Hisui setting.

## 7. Review result

```text
source_review_species_count == 6
source_review_complete_count == 6
rating_profile_reproducible_count == 6
family_consistency_pass_count == 4
family_consistency_partial_count == 1
blocking_human_design_gate_count == 1
blocking_gate == P4-HDG-002
```

The next authoring artifact may fill all non-gated schema sections now, but manifest promotion for Batch 01 must wait for P4-HDG-002.

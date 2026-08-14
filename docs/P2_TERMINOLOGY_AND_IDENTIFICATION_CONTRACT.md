# P2 Terminology and Identification Contract

Status: **binding P2 contract**  
Decision: **P2-HDG-004 / D-019 — hybrid identification and naming**  
Last updated: **2026-08-14**

## 1. Purpose

This contract defines how the game distinguishes:

- what the **player-facing system** calls a Pokémon species;
- what the **player character currently knows** about a creature;
- what **people inside the ancient setting** call the same creature;
- when the familiar official species name becomes visible;
- how local aliases, descriptions, myths and mistaken identifications coexist with stable game data.

It exists so the ancient world can feel locally ignorant and culturally fragmented without making the mobile UI unreadable or forcing P4 to invent 151 replacement names.

## 2. Binding decision

The project uses a **hybrid identification model**.

The official Pokémon species identity remains the stable out-of-world/system identity, but it is not automatically known to the player character or universally spoken by NPCs.

Before sufficient identification, the game may present a creature using:

- a physical description;
- a behavior-based label;
- a habitat-based label;
- a local nickname;
- a taboo or sacred title;
- a mistaken local classification;
- an explicitly unknown marker.

After sufficient identification, the player-facing UI and bestiary may reveal the official species name while continuing to preserve local aliases and cultural interpretations in lore.

Example presentation pattern:

> `거대한 독벌` → evidence/knowledge gained → `독침붕`

or:

> `바위를 두른 거대한 뱀` / a village-specific epithet → identification → `롱스톤`

These examples illustrate the contract only. They do not freeze production Korean prose or species-specific aliases.

## 3. Three separate naming layers

Every authored species reference must conceptually separate three layers.

### 3.1 System identity

The stable implementation/content identity.

For the mandatory roster this is based on:

- National Pokédex number;
- official species identity/name;
- a stable internal species key chosen later by the data contract.

System identity does not imply that an NPC or player character knows the official name.

### 3.2 Player-knowledge presentation

What the UI is currently allowed to reveal based on run knowledge.

The minimum conceptual states are:

1. **unidentified** — the species identity is not yet known to the player character;
2. **partially recognized** — the player has meaningful clues, testimony or prior knowledge but identification is not yet secure where the content needs uncertainty;
3. **identified** — the UI may use the official species name as the primary player-facing label.

P3/P5 may simplify the implementation if three mechanically distinct states are unnecessary. The binding requirement is only that **unidentified and identified presentation are distinct**, and that content may preserve uncertainty between them where useful.

### 3.3 Diegetic terminology

What a particular NPC, settlement, clan or tradition calls the creature.

Diegetic terminology may differ even after the system has identified the species.

An NPC may continue saying a local epithet while the UI header says the official species name. That is intentional rather than a localization inconsistency.

## 4. Official species names are discovery rewards, not universal ancient taxonomy

Official species names exist as the project's stable usability layer.

The setting does **not** require that:

- every village already shares those names;
- every speaker recognizes all 151 species;
- official species names come from a centralized Pokédex institution;
- one ancient language has standardized the whole region;
- seeing a Pokémon once automatically reveals its official identity.

An official name can become known because the player:

- already has relevant background knowledge;
- is told by a credible local specialist;
- connects several sightings or traces;
- studies behavior or morphology;
- learns another settlement's established name and the game maps it to the system identity;
- forms a companion relationship;
- discovers a reliable record, oral tradition, carving, warning system or other knowledge source;
- satisfies a species-specific identification condition authored in P4/P5.

Exact thresholds and checks belong to P3/P5.

## 5. The umbrella word `Pokémon`

`Pokémon` may be used in:

- repository/design language;
- system/UI language where clarity requires it;
- accessibility/help text;
- metadata and content tooling.

P2 does **not** require `Pokémon` to be a universally shared diegetic word in the ancient world.

NPC speech may instead use culturally appropriate generic concepts such as creature, beast, monster, spirit, wild one, omen, guardian or a local category, subject to later writing/localization choices.

A later content decision may establish that some communities do use a word equivalent to `Pokémon`, but no centralized universal terminology is implied by the system UI.

## 6. Local aliases are optional and purposeful

P4 is **not** required to invent one or more ancient aliases for all 151 species.

A local alias should be authored only when it materially supports at least one of:

- identification gameplay;
- regional ecology;
- a settlement's survival practice;
- taboo/sacred interpretation;
- technology-island knowledge;
- myth or historical memory;
- a meaningful mistaken belief;
- an event, quest or relationship.

`none` is a valid alias result.

This prevents artificial vocabulary bloat and keeps authored terminology tied to content value.

## 7. Unknown labels must reveal observable knowledge, not hidden metadata

Before identification, labels should normally be derived from things the player character could plausibly perceive or have been told.

Good unknown-label inputs include:

- visible shape or color;
- scale;
- movement;
- sound;
- tracks or remains;
- attack effect already witnessed;
- habitat;
- known local rumor;
- relation to another known creature;
- a culturally learned warning name.

Unknown labels must not silently reveal facts the player has not learned, such as:

- exact official typing;
- exact evolution relation;
- hidden abilities;
- precise species identity through developer-only wording;
- future event knowledge.

## 8. Identification is not the same as complete knowledge

Revealing `독침붕` or another official species name does not complete that species' bestiary entry.

A species may be identified while the player still lacks knowledge about:

- temperament;
- nesting or migration;
- diet;
- danger signs;
- abilities;
- weaknesses or avoidance methods;
- technology/craft relevance;
- companionship plausibility;
- myths and local interpretations;
- ancient-versus-modern differences;
- rare behaviors.

The bestiary therefore supports progressive knowledge after identification rather than a binary Pokédex unlock dump.

## 9. Misidentification and conflicting testimony

The ancient knowledge model allows people to be wrong.

P5 may author:

- two villages using the same word for different creatures;
- two names for the same species;
- a folk explanation that is useful but scientifically wrong;
- a myth that encodes a real behavior indirectly;
- an NPC confidently misidentifying tracks or a distant silhouette;
- a player hypothesis later corrected by stronger evidence.

However, the system must not permanently corrupt the stable species identity. Once the run has reached the configured identification certainty, the official species name becomes the reliable player-facing key.

## 10. Legendary, mythical and poorly understood species

Rare species do not receive automatic identification merely because the player recognizes them out of character.

P4 may require unusually strong evidence before the official name is exposed for a species that is:

- locally mythical;
- known primarily through stories;
- routinely confused with another phenomenon;
- encountered only indirectly;
- culturally forbidden to name;
- genuinely unknown to the first-playable region.

Conversely, a famous species may be identifiable by reputation without direct prior contact if that fits the authored setting evidence.

## 11. Companion interaction

A Pokémon becoming a companion does not require that every culture uses its official species name.

For the player-facing companion UI, an identified companion should normally expose:

- official species name;
- individual nickname if the design later supports one;
- discovered local aliases in lore/history where useful.

If an unusual story allows companionship before formal species identification, P3/P5 must define a legible temporary label until identification occurs.

## 12. P4 dossier requirements

Each of the 151 P4 species dossiers must include a terminology/identification section with at least:

- `system_species_identity` — official species identity / National Dex mapping;
- `baseline_recognition` — how likely ordinary people in the first playable scope are to recognize it;
- `unknown_presentation_hooks` — observable descriptors or `none`;
- `local_aliases_or_titles` — authored aliases or explicit `none`;
- `common_misbeliefs_or_confusions` — only when content-relevant, otherwise `none`;
- `identification_evidence` — plausible ways a run can identify the species;
- `post_identification_knowledge` — important facts that should remain discoverable afterward;
- `canon_boundary` — where naming/lore is project-authored rather than official.

P4 must not generate aliases by formula merely to satisfy the field.

## 13. P5 event requirements

P5 must make event prose able to resolve species references through current run knowledge.

Conceptually, authored content should be able to ask:

- has this species been identified?
- what local aliases has the player learned?
- what bestiary facts are known?
- what has the current settlement told the player?

The exact event syntax is deferred to P5.

A single event must be capable of rendering differently, for example:

- first encounter: `수풀 너머에서 거대한 독벌이 날개를 떤다.`
- after local rumor: a village-specific warning name;
- after identification: `독침붕이 날개를 떤다.`

Production prose remains later content work.

## 14. UI/data requirements for P7-P8

Later architecture and UI must preserve the separation between:

- stable species key;
- official display name;
- current identification state;
- current encounter label;
- discovered aliases/titles;
- progressive bestiary knowledge.

Do not encode an unidentified creature as a separate fake species merely because its visible label differs.

The mobile UI should prioritize legibility: after identification, the official species name is the default recognizable header unless an event deliberately foregrounds a local term.

## 15. Consistency rules

1. The player may recognize an official Pokémon name out of character while the character does not yet know it.
2. System identity and diegetic vocabulary are separate layers.
3. Official names remain stable identifiers for usability and content authoring.
4. Unknown presentation must not leak unearned species knowledge.
5. Identification does not unlock complete species knowledge.
6. Local names may remain in dialogue after official identification.
7. No universal ancient Pokédex taxonomy or universal use of the word `Pokémon` is implied.
8. P4 does not need to invent aliases for all 151 species.
9. Species-specific recognition/identification rules must follow the canon-first derivation protocol where official evidence exists.
10. P5/P7 must preserve knowledge-dependent presentation without duplicating species entities.

## 16. Deferred questions

This contract does not decide:

- exact Korean production wording for unknown labels;
- whether the player can freely nickname companions;
- exact number of mechanical bestiary knowledge tiers;
- exact checks/costs required to identify a species;
- exact generic in-world words for Pokémon in each culture;
- exact UI animation or reveal treatment;
- first-playable region-specific aliases;
- whether some official species names are represented as translations of different ancient words.

Those decisions belong to P3-P5, localization/content work, or the first-playable-region contract as appropriate.
# P3 Character Creation Contract

Status: **ACTIVE — P3 binding contract**  
Date: **2026-08-15**  
Decision: **P3-HDG-004 / D-026 / owner-approved veiled lifepath + free specialization hybrid**

## 1. Core creation fantasy

Character creation must not begin as a visible class/job menu.

The player first answers a short sequence of **fiction-first, partially opaque formative choices**. The choices describe memories, losses, obligations, people, places, and learned habits without exposing their exact mechanical mapping. Those answers deterministically resolve a character **Origin** and **Learned Practice**.

Only after the short formative sequence does the game reveal the resulting background summary and character sheet. The player then receives a small amount of explicit free specialization so that the generated past influences the character without permanently locking the build.

The intended shape is:

`ordinary human baseline → veiled formative choices → Origin + Learned Practice → reveal → free specialization`

This is intentionally a hybrid of a short lifepath and free character building.

## 2. Why the mapping is veiled

The first-play experience should feel like discovering who the character became rather than optimizing a table of bonuses before the player understands the world.

During the formative-choice sequence, do **not** display text such as:

- `Sense +1`;
- `Hunter background +2`;
- `this answer unlocks X`;
- numeric weight values;
- exact Origin/Practice outcome previews.

The visible choice must make sense as fiction even when the player has no rules knowledge.

After creation resolves, the final sheet is not secret. The resulting Origin, Learned Practice, trained competences, equipment, relationships/obligations, attributes, and other persistent state must be inspectable.

The system therefore hides **mapping**, not the player's actual resulting rules state.

## 3. No trick-answer rule

Veiled does not mean arbitrary.

Every answer must have a legible thematic relationship to the tags it contributes. A player who later understands the system should be able to look back and think, “that outcome follows from the life I described,” even if the first-play mapping was not obvious.

There must be no objectively correct formative answer, no fake option whose only purpose is to punish new players, and no hidden permanent stat trap.

For this reason, formative choices do **not** secretly raise or lower the seven core attributes. Attribute specialization happens explicitly after the background reveal.

## 4. Creation sequence

### 4.1 Ordinary human baseline

Every ordinary new human character begins at:

- Strength `1`
- Endurance `1`
- Agility `1`
- Sense `1`
- Intellect `1`
- Will `1`
- Presence `1`

Rating `1` remains the ordinary adult baseline from D-024.

This gives a neutral mechanical floor before personal specialization and prevents a generated background from silently creating a weak or nonviable build.

### 4.2 Three formative prompts

The default initial character-creation length is **three formative prompts**.

Each prompt should contain roughly `3–5` fiction-first answers. Exact prose and answer count belong to content authoring, but the three prompts should normally cover three distinct dimensions:

1. **where / among whom the character was formed**;
2. **what loss, duty, danger, or rupture shaped the character**;
3. **what kind of work, habit, or responsibility became familiar**.

The prompts need not explicitly use those headings in the UI.

Example question shapes include:

- what remained of the place you called home;
- whose burden you first learned to carry;
- what object or duty you were trusted with;
- what kind of danger taught you caution;
- whom you followed when the adults disagreed.

These are pattern examples, not frozen final copy.

### 4.3 Hidden authoring tags

Each answer contributes one or more stable authoring tags such as:

- lineage / standing;
- displacement / outsider status;
- route familiarity;
- wilderness familiarity;
- craft household;
- healing household;
- ritual household;
- river / fishing life;
- communal duty;
- loss / debt / obligation;
- leadership proximity;
- survival hardship.

P7 may choose the exact serialization format. P3 only requires that the mapping be data-driven and deterministic rather than hard-coded into UI prose.

### 4.4 Deterministic resolution

After the third formative choice, resolve exactly:

- one **Origin**;
- one **Learned Practice**.

A valid resolver must be deterministic from the same choice history. If multiple results tie, use a stable authored tie-break rule rather than runtime randomness.

Recommended tie-break order:

1. the most recent explicitly formative answer;
2. authored priority for that prompt;
3. stable identifier order as the final deterministic fallback.

The resolver must log the chosen answer IDs and resulting background IDs for save/debug/replay reproducibility.

## 5. Origin is not a class

**Origin** describes the social and personal situation the character comes from. It can grant or establish:

- narrative permissions;
- a local relationship/contact;
- reputation or recognition in a narrow context;
- an inherited object, keepsake, debt, duty, or claim;
- starting event flags;
- a benefit paired with an obligation or complication where appropriate.

Origin does **not**:

- lock future progression;
- define combat role;
- grant a universal dialogue bonus;
- force a Pokémon companion;
- secretly modify the seven attributes;
- function as a conventional RPG class.

A character may later live very differently from their Origin.

## 6. Initial Origin seed set

The first authored pool should prove that backgrounds can express status, loss, household culture, displacement, and ordinary village life rather than only professions.

The initial seed taxonomy is:

1. `fallen_head_house` — **몰락한 옛 수장가의 후예**
   - once-connected household whose authority, wealth, or protection collapsed;
   - may begin with a recognizable keepsake, old obligation, disputed claim, or relationship to people who remember the house;
   - must not imply a mature regional monarchy or standardized feudal nobility.

2. `disaster_survivor` — **재앙에서 살아남은 자**
   - formative loss through fire, flood, famine, raid, Pokémon disaster, or another authored local catastrophe;
   - exact cause belongs to the opening locality/content and must respect P2 lethality/canon boundaries.

3. `outsider_ward` — **타지에서 보내져 자란 아이**
   - raised among people who are not the character's birth household through fostering, exchange, debt, refuge, political obligation, or another local arrangement;
   - useful for outsider/insider tension without requiring a centralized state.

4. `shrine_raised` — **제의터 곁에서 자란 아이**
   - grew up near a local ritual specialist, sacred place, omen tradition, memorial practice, or taboo-keeping household;
   - does not itself grant psychic powers or magical spellcasting.

5. `route_household` — **길과 왕래 속에서 자란 아이**
   - household life shaped by dangerous travel corridors, messengers, barter, guides, seasonal movement, or travelers;
   - does not imply modern roads or a frictionless regional market.

6. `craft_household` — **장인의 집안에서 자란 아이**
   - grew up around smithing, woodworking, leatherwork, pottery, building, or another local handcraft;
   - exact craft can be localized by content and technology-island rules.

7. `wilds_household` — **사냥과 채집으로 살아온 집안의 아이**
   - household survival strongly tied to wilderness reading, gathering, hunting, trapping, or seasonal resource knowledge;
   - this does not make Pokémon killing universally routine; D-021 remains authoritative.

8. `ordinary_village_household` — **평범한 마을 집안의 아이**
   - stable but non-elite local upbringing built around household labor, neighbors, cultivation, storage, repair, and communal obligation;
   - deliberately valid rather than a “boring failure” background.

This is a seed set for the contract, not the final P9 content count. P5/P9 may add locality-specific Origins while preserving the same rules shape.

### 6.1 “Fallen noble” language boundary

The desired player fantasy of a **fallen noble / fallen prestigious house** is approved.

Because P2 establishes a pre-regional village/clan network rather than a mature feudal state, the baseline canonical implementation is currently phrased as **몰락한 옛 수장가의 후예** / `fallen_head_house`.

Local prose may use stronger prestige language when a particular locality supports it, but must not silently imply a Kanto-wide monarchy, standardized aristocratic estate system, or mature regional nobility that contradicts D-012/D-022.

## 7. Learned Practice is not destiny

**Learned Practice** represents the work or responsibility the character actually became used to before play begins.

It grants:

- one trained Competence at `+1`;
- a small relevant starting-equipment package or tool access;
- one or more narrow fictional permissions where appropriate.

The initial Practice pool should include at least:

- `hunter` — 사냥 / 추적;
- `route_guide` — 길잡이 / 지형 읽기;
- `village_guard` — 경계 / 호위 / 무기 운용;
- `forager` — 채집 / 야생 자원 판별;
- `healer_apprentice` — 치료 / 응급 처치;
- `smith_apprentice` — 대장 / 금속 도구 수리;
- `fisher` — 어로 / 강·물가 생활;
- `keeper` — 구전·기록·계보·지역 지식 보존;
- `ritual_attendant` — 의례 보조 / 금기·관습 지식.

Exact competence names and overlap rules may be normalized later in P3, but they must remain inside the compact `+0/+1/+2` envelope from D-024.

A Practice may be changed, abandoned, or surpassed through later progression. It is not a permanent class track.

## 8. Explicit free specialization after reveal

After Origin and Learned Practice are revealed, the player explicitly personalizes the build.

### 8.1 Attribute budget

The initial balance envelope is:

- start all seven attributes at `1`;
- spend **4 attribute increases**;
- each increase raises one attribute by `+1`;
- starting attributes may not exceed `3`;
- rating `4` is reserved for later progression or a future explicitly approved exceptional-creation rule.

Therefore every standard new character has total starting attribute points of `11` across the seven attributes.

Example valid spreads include:

- `3,2,2,1,1,1,1`;
- `2,2,2,2,1,1,1`;
- `3,3,1,1,1,1,1`.

The system does not require a weakness at `0` during ordinary creation. Rating `0` remains available for special conditions, later optional creation rules, injuries/changes if separately approved, or explicitly authored exceptional characters.

### 8.2 Personal competence

In addition to the `+1` trained Competence granted by Learned Practice, choose **one personal trained Competence at +1** after the reveal.

Ordinary character creation does not begin with an expert `+2` Competence. Expertise is primarily a progression reward or a future explicit exceptional-background rule.

If the player selects the same competence already granted by Practice, it does not stack to `+2`; the UI should require a different competence or convert the choice into an explicitly authored adjacent specialization.

This keeps the starting sheet broad enough for a complete human-only `0/3` companion run while preserving meaningful later growth.

## 9. Background packages must carry hooks, not pure bonuses

A background package should be interesting because it changes what stories can happen, not because one option has a larger permanent modifier.

Each completed Origin package should normally define:

- one identity/background tag;
- one relationship/contact or social recognition hook;
- one object/resource/knowledge hook where appropriate;
- one obligation, debt, taboo, rival claim, vulnerability, or unresolved tie where appropriate;
- optional opening-event flags.

Benefits and burdens do not need to be numerically equal. They must be narratively useful and should produce alternate opportunities rather than creating a clearly dominant “best background.”

## 10. Rare psychic gifts are separate

D-015 psychics / miracle-workers do not become a standard Origin or ordinary Learned Practice simply because a character was shrine-raised or a ritual attendant.

A character may have `shrine_raised` + `ritual_attendant` and possess no anomalous ability at all.

P3 must later define a separate rare-gift mechanism with explicit rarity, scope, cost/limits, and character-creation interaction. Veiled formative choices may contribute eligibility or narrative foreshadowing only after that later rule is approved; they must not secretly grant an unrestricted magic system.

## 11. Mobile UX contract

The initial creation flow should fit comfortably on mobile:

- one formative prompt per screen/state;
- `3–5` concise answers;
- no dense seven-stat explanation before the first narrative choice is required;
- background reveal after the short sequence;
- then a compact explicit attribute/specialization step;
- full mechanical details remain inspectable before final confirmation.

The player must be able to back out before final confirmation without corrupting run state. Whether earlier formative answers can be individually rewound after seeing the reveal is a presentation/replayability choice for P8, not required by this P3 contract.

## 12. Determinism and data requirements

P5/P7 must be able to represent creation without embedding outcome logic in presentation text.

Conceptual stable records are:

- `formative_choice_ids[]`;
- `formative_tags[]` or equivalent resolved authoring state;
- `origin_id`;
- `practice_id`;
- `background_flags[]`;
- `trained_competence_ids[]`;
- final seven-attribute values;
- starting equipment/resource IDs;
- starting contact/obligation IDs where applicable.

The same creation choices and explicit specialization must always generate the same initial authoritative character state.

## 13. Balance rationale

With the D-024 check engine, a common starting specialist can reach:

- Attribute `2` + trained Competence `1` = `+3` before Context;
- Attribute `3` + trained Competence `1` = `+4` before Context.

That keeps Standard difficulty `9` reliable for a capable/trained character while leaving Hard `11` meaningfully uncertain unless preparation or favorable context exists.

The starting cap of `3` protects headroom for progression and prevents the formative background from creating an accidental rating-4 superhuman before P3 has defined advancement.

## 14. Downstream requirements

### P3

- freeze the compact competence taxonomy strongly enough for background Practices and progression;
- define progression philosophy before handing final advancement semantics downstream;
- define rare psychic-gift mechanics separately;
- ensure inventory/economy rules can express the small starting packages above.

### P4

- species interactions may recognize background/practice knowledge only where ecologically and canonically appropriate;
- no Origin may imply routine Pokémon ownership or automatic companion access.

### P5

- events may branch on Origin, Practice, contacts, obligations, and formative flags;
- opening content must support all seed Origins rather than assuming a privileged single past;
- generated background state must not make a `0/3` companion run incomplete.

### P7

- implement background resolution as deterministic data/rules, not hard-coded UI conditionals;
- cache normalized background/choice definitions rather than repeatedly reparsing authoring data;
- preserve stable IDs across save versions or provide migration.

### P8

- prove the three-prompt → reveal → specialization flow on a phone-sized UI;
- ensure the opaque choices feel evocative rather than random or deceptive;
- show the resulting mechanical sheet clearly before final confirmation.

## 15. Explicitly unresolved after this decision

This contract does not yet freeze:

- final prose for the formative questions;
- final number of Origins beyond the initial seed set;
- exact competence vocabulary/normalization;
- progression/advancement philosophy;
- economy/inventory values;
- rare psychic-gift eligibility and mechanics;
- whether later runs expose additional meta-knowledge about previously discovered background mappings.

The **next material Human Design Gate is progression philosophy**. P3 should settle how humans improve over a run/campaign before finalizing the remaining advancement-dependent mechanics.

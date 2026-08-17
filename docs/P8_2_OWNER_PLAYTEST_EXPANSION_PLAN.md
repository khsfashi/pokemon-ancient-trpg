# P8.2 Owner Playtest Expansion Plan

Date: **2026-08-17**  
Owner verdict: **P8.1 is materially improved, but still lacks enough visual immersion, RPG state readability, motion, equipment/farming depth, and native Korean narrative quality to feel like the intended game.**

This document is the durable continuation plan for future agents. A fresh session receiving only:

```text
@GitHub pokemon-ancient-trpg 다음 작업 진행해줘
```

must recover this plan through `AGENTS.md` / `PROJECT_STATUS.md`, select the first incomplete batch below, and continue without asking the owner to restate this feedback.

## Product fantasy now explicitly required

The intended game is not merely a Pokémon-themed branching text demo.

The target experience is:

> **A Pokémon-first, pre-modern / medieval-fantasy-feeling adventure RPG where the player survives, travels, equips gear, gathers and trades resources, improves a human adventurer, encounters Pokémon ecology, and occasionally forms rare meaningful Pokémon relationships.**

Pokémon remain the setting's defining world force and must not be reduced to interchangeable fantasy monsters. At the same time, the human player must have a satisfying adventurer loop even at `0/3` companions: preparation, equipment, exploration, gathering, survival, risk management, combat/avoidance options, repair, barter, and return-to-settlement payoff.

`모험가 이야기` (StudioWheel) remains the primary presentation / information-hierarchy benchmark for the compact mobile text-adventure feel. Benchmark aggressively at the level of principles and screen composition, but do **not** copy proprietary artwork, exact layouts, icons, text, branding, music, or pixel-perfect assets.

## Second owner playtest findings

The 2026-08-17 second owner playtest reported the following blockers after P8.1 Batches 01–03:

1. **Insufficient images / illustrations**
   - scenes still feel visually empty;
   - lack of artwork reduces immersion;
   - inline illustrations between narrative beats are desired where useful;
   - Pokémon, locality, NPC, item, and event visuals should be able to occupy a scene illustration slot.

2. **Korean prose still feels awkward in places**
   - some phrasing remains difficult to understand;
   - character-creation questions still read too much like a questionnaire;
   - formative/background choices should read more like short novel scenes, memories, or narrated moments;
   - Korean copy should prioritize natural spoken/read-aloud rhythm over preserving English syntax.

3. **No meaningful page/scene transition direction**
   - moving between locations should feel like movement;
   - travel should use a short fade-out / fade-in or equivalent transition where appropriate;
   - transitions must be lightweight and skippable; they must never own gameplay state.

4. **No text presentation performance / interaction rhythm**
   - narrative text should reveal progressively rather than appear as a static block;
   - tap while text is revealing => instantly complete the current text segment;
   - tap after the segment is fully revealed => advance to the next sentence/beat when a continuation exists;
   - choice input must not accidentally trigger while the user is only skipping text animation;
   - `prefers-reduced-motion` and accessibility remain required.

5. **Player identity/profile is too weak**
   - the player should be able to select an initial portrait/avatar;
   - gameplay should keep the player's portrait and important current state visible or one tap away;
   - character identity should feel persistent rather than disappearing after creation.

6. **Run-state HUD is incomplete**
   - the owner specifically wants visible health, food/provisions, stamina-like state, base stats/current values, and game-over danger;
   - current P3 `Vitality / Fatigue / Fear / Injuries` remains authoritative until explicitly revised;
   - implementation must map the desired player-facing `HP / stamina` readability onto the P3 contract rather than silently creating duplicate authoritative pools;
   - if a distinct numeric Stamina pool is deemed necessary, update the P3 contract/decision first.

7. **Game-over / failure stakes are unclear**
   - the UI must communicate what can end or critically fail a run;
   - player death remains selective and explicit under D-020/D-025, not `HP 0 = death`;
   - incapacitation, critical injury, starvation/exhaustion pressure, failed rescue, and authored lethal situations need understandable player-facing warnings and consequence feedback.

8. **Equipment / RPG growth fantasy is missing**
   - the player should have visible equipment;
   - weapons, armor, accessories/tools, and Pokémon-related equipment are desired;
   - player-facing combat summary should include attack/defense-like values or equally clear derived combat readiness;
   - this must not become an unbounded level-scaled gear-score treadmill that contradicts D-028/D-031;
   - exact formulas should derive from existing attributes, competence, equipment, preparation, hazard tags, and authored context.

9. **Medieval-fantasy farming / loot / preparation loop is too thin**
   - the human adventurer loop should support gathering, scavenging, foraging, hunting where ethical/species rules permit, repair, crafting inputs, barter, provisioning, camp/rest, equipment upgrades, and return-to-settlement rewards;
   - Pokémon-related equipment/materials are welcome when backed by P4 species/ecology and D-017 technology-island logic;
   - defeating Pokémon must still not automatically emit generic loot/XP under D-021/D-028.

10. **The UI should benchmark `모험가 이야기` more deeply**
    - persistent character/status area;
    - strong scene illustration identity;
    - readable text panel;
    - clear choices;
    - equipment/stat visibility;
    - consequence/readiness cues;
    - compact but unmistakably game-like mobile composition.

## Non-negotiable architecture constraints

All work below must preserve the proven P5/P6/P7 architecture unless a documented contract change is required.

- UI animation never becomes authoritative gameplay state.
- Event evaluation stays transition-driven, not frame-driven.
- Typewriter animation must not allocate/reparse the full story on every frame; segment text once and reuse cached segmentation where practical.
- Animation should prefer CSS/compositor-friendly opacity/transform transitions; avoid layout-thrashing per-character DOM mutation.
- Resource loading stays manifest-driven and cached by stable resource ID.
- Do not preload all #001-#151 media.
- Optional image failure must never change gameplay outcome.
- Keep `prefers-reduced-motion` support.
- Preserve IndexedDB/save determinism, pending-event reload, seeded RNG, and current browser/PWA gates.
- Derived inventory/Load/combat summaries must be recomputed only when relevant authoritative inputs change and then cached/reused.

## P8.2 batch sequence

The following sequence is now the default first-unblocked work before P9 bulk expansion.

### Batch 04 — narrative motion + scene-transition foundation

Goal: make reading and movement feel like a game before adding more systems.

Implement:

- reusable narrative beat/segment presentation component;
- typewriter/reveal animation for narrative text;
- tap while revealing => complete current beat instantly;
- tap after complete => advance to the next authored sentence/beat when applicable;
- choices remain locked/isolated from accidental animation-skip taps;
- short scene transition system;
- travel/location changes use fade-out -> committed state transition / scene preparation -> fade-in presentation;
- ordinary non-travel event transitions may use a lighter crossfade;
- reduced-motion path renders immediately and remains fully playable;
- no animation timer may trigger or evaluate an event.

Acceptance:

- deterministic authority state is byte/semantic-equivalent with animations enabled/disabled/skipped;
- mobile tap behavior is covered by Playwright;
- rapid tapping cannot double-commit a choice;
- no horizontal overflow or material accessibility regression.

### Batch 05 — player portrait + persistent profile / expedition HUD

Goal: the player always understands who they are and what state they are in.

Implement:

- initial avatar/portrait selection during character creation;
- project-owned or provenance-cleared portrait resources; placeholders are acceptable until final art is cleared;
- persistent compact profile treatment during play;
- expanded status HUD containing at minimum:
  - portrait/avatar,
  - Origin / Learned Practice / specialization summary,
  - Vitality current/max (player-facing HP readability),
  - Fatigue as stamina/exertion readability without creating duplicate authority,
  - Fear when materially relevant,
  - active Injuries,
  - Provisions,
  - Remedies,
  - Materials,
  - carried Load / comfortable Load,
  - current locality,
  - companion slots `0/3..3/3`;
- expandable profile sheet for seven core attributes and trained competences;
- danger/game-over help or tooltip that clearly distinguishes incapacitation, critical injury and death conditions.

Acceptance:

- important survival state is legible at 390x844 without permanently covering the narrative/choices;
- UI is derived from authoritative state only;
- hidden/debug implementation vocabulary remains absent.

### Batch 06 — illustration system + scene visual identity

Goal: every important scene can carry visual context, and the first several minutes no longer feel image-empty.

Implement:

- stable scene illustration resource IDs in presentation/content data;
- illustration slot supporting locality, event, NPC, Pokémon and item/equipment imagery;
- optional inline illustration beats between narrative paragraphs where authored;
- clear fallback when media is missing;
- reuse P6 loading/cache/provenance rules;
- audit candidate project-owned/generated/publicly usable illustration strategy before bundling assets;
- maintain Pokémon-IP/provenance classification for Pokémon-facing media;
- benchmark `모험가 이야기` screenshots for scene-to-text-to-choice visual hierarchy, not copied assets.

Acceptance:

- first-run opening, travel, Weedle encounter, orchard/Beedrill scene and return have distinct visual identities or deliberate placeholders;
- missing illustration does not block choice/gameplay;
- payload/decode/cache budgets remain within P6 boundaries or the contract is explicitly revised with measured evidence.

### Batch 07 — native-Korean narrative pass + novel-like character creation

Goal: remove the remaining questionnaire/translation feel.

Implement:

- rewrite the three formative prompts as short narrative memory scenes;
- use concrete sensory/action prose before presenting choices;
- keep hidden lifepath mapping deterministic and fair;
- rewrite specialization/background reveal as character fiction rather than form labels where possible;
- run every current Korean scene/choice/outcome/system string through the repo-local Korean game-copy workflow again;
- read-aloud review for unnatural modifier chains, abstract nouns, passive translationese and unexplained terminology;
- keep choice labels short even when narrative setup is richer.

Example direction, not mandatory literal copy:

> 새벽 안개가 마을 울타리 아래까지 내려앉았다. 당신은 늘 남들보다 먼저 일어나는 사람이었다. 손에 가장 먼저 익었던 것은 무엇이었을까?

Acceptance:

- creation reads like entering a character's past, not answering a survey;
- stable IDs and deterministic Origin/Practice resolution remain unchanged unless an explicit design revision is made;
- Korean is the authoring-quality target, not a secondary translation artifact.

### Batch 08 — equipment slots + combat-readiness summary

Goal: establish visible adventurer gear and meaningful preparation without inventing a generic MMO gear treadmill.

Implement a minimal authoritative equipment model with stable item IDs and Load integration. Baseline player-facing slots should cover at least:

- weapon / main hand,
- body armor,
- accessory/charm or protective wearable,
- utility/tool,
- Pokémon/ecology-related field equipment where applicable.

Exact slot count may be refined if existing P3 inventory rules make a different grouping cleaner, but the player must visibly equip meaningful items.

Expose clear derived combat/readiness information, including **Attack / Defense-like values** or named equivalents that a player can compare at a glance. Exact formulas must:

- derive from existing human attributes/competence + equipped item properties + relevant preparation/context;
- remain bounded and readable;
- not cause ordinary Pokémon to auto-scale with the player;
- not replace P4 capability/hazard tags or authored consequence logic with one universal combat-power number.

Equipment should primarily unlock approaches, reduce risks, alter harm/injury consequences, improve bounded checks, or improve combat readiness.

Include several initial setting-native examples such as iron weapon, travel armor, shield/protective gear, route tool, venom protection, field observation gear, Pokémon scent/feeding or ecology equipment when lore permits.

Acceptance:

- profile/inventory UI visibly shows equipped items and derived readiness;
- changing equipment deterministically changes only its declared derived/effect surfaces;
- Load cache and save format are updated/versioned correctly.

### Batch 09 — medieval-fantasy adventurer farming / preparation loop

Goal: create the repeatable human progression loop the owner expects between Pokémon encounters.

Minimum coherent loop:

```text
settlement preparation
-> choose equipment/provisions
-> travel/explore
-> gather / forage / salvage / hunt when valid
-> encounter human/Pokémon/environmental risk
-> spend health/stamina/resources or gain materials/knowledge
-> return to settlement
-> repair / barter / craft / improve equipment / prepare again
```

Implement a small vertical slice, not bulk content:

- several gatherable ordinary materials;
- at least one food/provisions acquisition path;
- at least one repair/crafting-material path;
- at least one barter/exchange or service-reward path;
- at least one equipment improvement/replacement decision;
- at least one Pokémon-linked material/equipment opportunity that obeys P4/D-021/D-028 rather than generic monster loot;
- camp/rest/recovery interaction tied to existing Vitality/Fatigue/Injury/resource rules;
- clear risk/reward choices so farming is not a zero-risk idle clicker.

Acceptance:

- a zero-companion human adventurer has a satisfying preparation/progression reason to leave and return to the settlement;
- resource gains are authored/deterministic and non-farmable where events are one-shot or bounded;
- no generic kill-XP or automatic Pokémon loot table is introduced.

### Batch 10 — integrated owner-playtest gate

Goal: prove the combined experience, not isolated features.

Required automated checks:

- Chromium + WebKit 390x844 full run;
- text animation skip/advance safety;
- reduced motion;
- scene fade transition safety;
- portrait/profile/HUD persistence across save/reload;
- equipment and derived readiness persistence;
- resource/farming loop persistence;
- image-missing fallback;
- PWA offline pending-save regression;
- existing P6/P7 resource boundaries or explicitly revised measured limits.

Required owner replay questions:

1. Does the first screen immediately feel like a game?
2. Does character creation read naturally like fiction rather than a questionnaire?
3. Can the player always understand health, exertion/stamina, food, danger and current condition?
4. Does movement between places feel like movement?
5. Does the scene art materially improve immersion?
6. Does equipment/progression create a medieval adventurer fantasy even without a Pokémon companion?
7. Do Pokémon still feel integral to the world rather than pasted onto a generic fantasy RPG?
8. Is the first several-minute loop compelling enough to justify P9 content multiplication?

Only after this integrated owner gate passes should P9 bulk content expansion resume.

## UI composition target

At phone size, the default play screen should trend toward:

1. compact game chrome / player portrait and critical status;
2. locality + scene identity;
3. strong illustration area;
4. progressively revealed narrative text;
5. clear known costs/check/risk cues;
6. primary choices;
7. consequence feedback;
8. one-tap profile/inventory/equipment access.

Do not turn the screen into a dense analytics dashboard. Critical current state should be glanceable, while detailed attributes/equipment can open in a sheet/drawer/modal that preserves mobile usability.

## Image and art policy for this remediation

Images are now a **required product surface**, not an optional nice-to-have for first-impression quality.

However, image acquisition remains subject to P6/IP/provenance rules:

- project-owned/generated backgrounds, portraits, UI art and non-Pokémon illustrations are preferred when they can meet the style target;
- Pokémon imagery must remain provenance-classified and must not be assumed redistributable because it is easy to fetch;
- placeholders may prove layout/resource plumbing before final art is cleared;
- runtime remote APIs are still forbidden as a gameplay dependency;
- stable resource IDs and cache reuse are mandatory.

## Performance requirements

Because text animation and more images can easily regress mobile behavior:

- no per-frame event eligibility scans;
- no per-character component tree explosion for typewriter text;
- prefer one text node / masked reveal or chunked segments over hundreds of span nodes;
- transitions should use opacity/transform where possible;
- image decode/residency remains bounded and measured;
- repeated portraits/icons/equipment images must share cache entries by resource ID;
- derived combat/load/HUD summaries recalculate on relevant state mutation, not render/frame;
- keep browser tests for rapid tap, skip, double-submit and interrupted transition cases.

## P9 blocking rule

P9 remains blocked while this plan is incomplete.

Do not respond to a generic `next` request by beginning #9 merely because P8 technical tests are green. The first incomplete item in this P8.2 plan owns the continuation lane until the integrated owner-playtest gate passes or the owner explicitly changes direction.

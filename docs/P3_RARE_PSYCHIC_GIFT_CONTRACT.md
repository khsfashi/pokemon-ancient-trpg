# P3 Rare Psychic / Miracle-Worker Gift Contract

Status: **ACTIVE — P3 binding contract**  
Date: **2026-08-15**  
Decision: **P3-HDG-007 / D-029 / owner choice B + C — rare foreshadowing plus in-run awakening**

## 1. Purpose

D-015 permits rare humans with genuine anomalous faculties as a setting-native counterpart to part of the fantasy-wizard niche, while explicitly rejecting a universal magic system or ordinary spellcasting profession.

This contract makes that playable without turning psychic power into:

- a standard character-creation build;
- a visible `Psychic` class or ordinary Learned Practice;
- a purchasable Competence;
- a mana bar and spell list;
- a generic ranged-damage replacement for weapons;
- an expected requirement for completing the game.

The binding player fantasy is:

> **Most people are ordinary humans. A very small minority may carry strange signs or resonance, and an even smaller minority actually awaken a narrow psychic Gift through an extraordinary in-world event.**

The owner's B + C choice means character creation may provide rare foreshadowing, but **usable psychic ability is never granted directly by ordinary character creation**. Actual awakening belongs to play.

## 2. Rarity is a hard design invariant

Psychic humans are exceptional people, not another normal build family.

Binding rules:

- standard character creation has no explicit `be psychic` option;
- no Origin or Learned Practice automatically grants a Gift;
- `shrine_raised`, `ritual_attendant`, high Will, high Sense, high Intellect, or high Presence do not themselves create supernatural ability;
- most complete runs should remain entirely non-psychic;
- a human-only, non-gifted `0/3` run remains fully viable and complete;
- gifted NPCs should be socially notable rather than assumed village infrastructure;
- ordinary advancement points cannot manufacture psychic ability from nothing.

### 2.1 Initial player-frequency tuning target

P3 fixes rarity direction but not an in-world census percentage.

For later P5/P9 simulation and content balancing, use the following **player-run tuning targets**, not lore prevalence claims:

- strong creation-time psychic foreshadowing should appear in **no more than roughly 10%** of ordinary unresolved creation histories/seeds;
- actual Gift awakening should occur in **no more than roughly 5% of ordinary runs** unless the player deliberately follows a previously discovered exceptional route whose authored prerequisites justify the higher chance;
- the first playable vertical slice does **not** need to guarantee any psychic awakening.

These percentages are tuning targets and may move after deterministic simulation/playtesting without reopening the B + C architecture. Making psychic awakening a routine or guaranteed build path would require a new Human Design Gate.

## 3. Three-state Gift lifecycle

A player character's anomalous state is represented conceptually as:

1. `none`
2. `foreshadowed`
3. `awakened`

The exact serialization belongs to P7, but the semantic separation is binding.

### 3.1 None

`none` means the character has no established psychic capability and no strong authored sign currently attached to the character.

This is the normal state.

A `none` character is not metaphysically proven incapable forever. An exceptionally authored transformative event may still establish awakening eligibility later, but this path must be rarer than an already-foreshadowed route.

### 3.2 Foreshadowed

`foreshadowed` means the character has one or more unusual but non-usable signs such as:

- a recurring impossible-feeling dream;
- an unexplained emotional echo around a place/person;
- occasional anticipatory unease before danger;
- unusual resistance or sensitivity around a Psychic/Ghost phenomenon;
- an object/location that repeatedly produces an inexplicable reaction;
- another bounded omen consistent with the future Gift family.

Foreshadowing is **not a power**.

It grants no universal modifier, no reroll, no combat action, no automatic hidden-information reveal, and no guarantee that awakening will ever occur.

Its mechanical purpose is primarily to:

- seed narrative continuity;
- qualify the character for rare awakening-event branches;
- alter how some supernatural phenomena are described;
- permit a small number of authored observation/recognition choices.

### 3.3 Awakened

`awakened` means a specific extraordinary event has established one actual narrow Gift family for the character.

The awakening event must record:

- the event/source that caused or revealed the awakening;
- the Gift family;
- initial manifestations/facets actually available;
- any persistent relationship, scar, obligation, taboo, mentor, fear, knowledge, or social consequence created by the event.

Awakening is a significant narrative state change, not a random `+1` reward.

## 4. Character-creation interaction

### 4.1 No direct psychic selection

The standard three-prompt veiled lifepath remains:

`ordinary human baseline → formative choices → Origin + Learned Practice → reveal → explicit specialization`

Psychic power is not inserted as a third visible package beside Origin and Practice.

### 4.2 Formative choices may contribute resonance tags

A small minority of thematically appropriate formative answers may contribute hidden authoring tags such as:

- `resonance_dream`
- `resonance_mind`
- `resonance_kinetic`
- `resonance_veil`
- `resonance_omen`

These tags must have a fair fictional relationship to the visible answer. They cannot be arbitrary lottery flags attached to unrelated choices.

The tags do not directly grant a Gift. They only make specific foreshadowing packages or later event eligibility possible.

### 4.3 Foreshadowing must not be a hidden stat trap

If character creation resolves a persistent `foreshadowed` state, the final pre-confirmation character summary must surface the narrative sign clearly enough that the player knows this character carries something unusual.

The UI does not need to reveal hidden event weights, exact future Gift family, or `10%` tuning math, but it must not keep an already-established persistent unusual trait completely secret after the reveal.

Example presentation:

> `Unusual sign — You have dreamed of the same black river before every major loss.`

This remains a story hook, not an immediate spell button.

### 4.4 Determinism

Origin/Practice resolution remains deterministic from the formative choice history under D-026.

If implementation later uses seeded rarity to decide whether eligible resonance tags become a strong foreshadowing package, that decision must use authoritative run/creation seed state and be replayable from the same complete state. Reloading or repeatedly backing through the same creation state must not generate new psychic lottery attempts.

P5/P7 may choose a purely authored deterministic mapping or a seeded deterministic rarity gate; neither may become reroll farming.

## 5. Awakening belongs to authored events

A Gift awakens only through an explicit authored transition such as:

- surviving or understanding a severe Psychic/Ghost phenomenon;
- contact with a particular Pokémon, place, artifact, dream, ritual, or environmental event where P4/P5 evidence supports the relationship;
- intervention/training by an already-gifted person;
- a major personal crisis where prior foreshadowing meaningfully resolves;
- another rare event chain that has been authored as an awakening source.

There is no generic rule such as:

- `roll double six to become psychic`;
- `reach Will 4 to awaken`;
- `perform Ritual 20 times`;
- `spend 3 advancement points`;
- `fight enough Psychic Pokémon`.

Awakening eligibility is explicit one-shot/event state, not a hidden grind counter.

## 6. Foreshadowed and non-foreshadowed awakening routes

The owner's B + C choice creates two valid but unequal routes.

### 6.1 Foreshadowed route — rare but more legible

A `foreshadowed` character may gain:

- extra rare-event eligibility;
- earlier warning that an event has personal significance;
- a safer or more understandable awakening branch;
- a clearer manifestation-family connection.

Foreshadowing still does not guarantee awakening.

### 6.2 Transformative route — possible without foreshadowing, much rarer

A `none` character may awaken only when an exceptional event independently establishes a credible transformation/revelation.

This route exists so the game does not claim every gifted person was visibly marked from birth, and so a memorable in-run transformation remains possible.

However, content must not use this permission to make random psychic awakenings common. Non-foreshadowed awakening events should normally have stricter prerequisites, rarer chains, stronger consequences, or singular circumstances.

## 7. One narrow Gift family by default

An ordinary awakened player character has **one** Gift family.

The initial normalized family taxonomy is deliberately small:

1. **Omen / Premonition — 예감·징조**
   - brief anticipatory flashes, danger-sense-like impressions, symbolic future fragments, or an uncanny sense that something is about to happen;
   - never guaranteed omniscient prediction or exact future-state reading.

2. **Mind Echo — 마음의 메아리**
   - emotional/mental impressions, limited directed thought exchange, or sensing unusually strong intent under bounded conditions;
   - not unrestricted mind reading, memory theft, domination, or automatic lie detection.

3. **Kinetic Touch — 염동 감응**
   - limited telekinetic influence over small nearby objects or brief force redirection;
   - not human-scale flight, artillery, effortless disarming of everything, or Pokémon-scale telekinetic combat.

4. **Dream Resonance — 꿈의 감응**
   - unusual access to meaningful dreams, sleep-linked echoes, psychic residue, or symbolic memory-like phenomena;
   - not free remote surveillance or an always-correct prophecy service.

5. **Veil Sense — 이계/정신 감응**
   - sensitivity, resistance, recognition, or narrow interaction with Psychic/Ghost-linked phenomena that ordinary people cannot perceive or withstand as easily;
   - not generic immunity to Psychic/Ghost Pokémon or a universal exorcism system.

These are **mechanical/content families**, not necessarily words used by people in the setting.

Local cultures may call a gifted person seer, cursed child, dream-listener, mind-speaker, shrine medium, or another local term without implying a standardized regional psychic guild.

## 8. Family does not imply every listed ability

A Gift family provides a boundary within which individual manifestations may be authored.

For example, two Mind Echo characters need not share identical capability. One may only sense strong emotions during physical proximity; another may transmit a short thought to a willing person under stress.

Therefore an awakened character stores explicit **facets/manifestations**, not merely `family = Mind Echo → everything in the category`.

An initial awakening should normally grant:

- one passive/observational facet; and/or
- one narrow active manifestation.

Do not dump a spellbook on awakening.

## 9. No Psychic Competence and no parallel power stat

There is no ordinary `psychic`, `magic`, `telepathy`, or `spellcasting` Competence in the normalized catalog.

The Gift itself provides **fictional permission**.

When a psychic manifestation requires a check, use the existing D-024 engine:

`2d6 + Attribute + Competence + Context`

but the psychic action's Competence contribution is normally `+0` because there is no generic psychic skill.

A mundane Competence may support preparation or interpretation only when it genuinely applies. Examples:

- `ritual` may help follow a local protective procedure before touching a haunted object;
- `recordkeeping` may help compare recurring dream symbols with old records;
- `medicine` may help distinguish an illness from a psychic symptom.

Those Competences do not become a supernatural power bonus and normally affect fiction/Context rather than stacking as `Psychic + Ritual`.

## 10. Governing attributes

Use existing human attributes rather than a new psychic attribute.

Default mappings:

- **Sense** — perceiving faint impressions, echoes, anomalies, or approaching phenomena;
- **Will** — controlling, resisting, sustaining, or forcing a manifestation;
- **Presence** — projecting a thought/feeling outward or establishing directed interpersonal psychic contact where the manifestation supports it;
- **Intellect** — interpreting evidence after a phenomenon, not usually producing the supernatural effect itself.

A manifestation definition must name its normal governing Attribute or explicitly state that no roll is needed.

Do not allow the player to choose whichever high attribute is convenient for every psychic action.

## 11. Three manifestation modes

To avoid both a mana bar and unlimited spam, psychic manifestations are divided conceptually into three modes.

### 11.1 Passive / receptive

Examples:

- noticing that a location feels psychically wrong;
- receiving a brief authored omen;
- recognizing a recurring dream echo;
- feeling unusually strong hostility from a nearby mind where the Gift explicitly permits it.

If the information is guaranteed by established Gift + event state, no roll is needed.

Passive reception must not become omniscient background polling. P5 evaluates it on relevant state transitions/events, not every frame, step, or render.

### 11.2 Focused manifestation

A deliberate but bounded use under meaningful uncertainty.

Examples:

- send a short mental impression;
- hold a small object suspended long enough to change an event approach;
- focus on a dream echo to extract one clearer clue;
- resist a Psychic/Ghost intrusion using an awakened Veil Sense facet.

Use D-024's normal outcome bands. Costs and complications come from the event and risk profile.

### 11.3 Miracle exertion

A rare attempt to push the established Gift beyond ordinary safe use while remaining inside its family.

Miracle exertion is not a new list of stronger spells. It is an authored high-risk branch such as:

- forcefully moving something at the edge of the character's established telekinetic capability;
- maintaining contact through overwhelming psychic interference;
- entering a dangerous dream/echo voluntarily;
- holding onto a precognitive vision despite severe sensory backlash.

A Miracle exertion normally:

- is Hard/Severe/Extreme or opposed as appropriate;
- **advances Fatigue by at least one stage regardless of success** unless an explicit exceptional effect pays an equivalent cost;
- may also risk Fear, Vitality loss, temporary incapacitation, or an Injury only when the fiction supports that consequence;
- may be unavailable while Exhausted or Panicked unless the event explicitly offers a severe last-resort cost.

This is the main anti-spam pressure for spectacular use. There is no separate mana pool.

## 12. Existing pressure tracks are the cost system

Psychic use does not add `Mana`, `Psychic Points`, `Focus Energy`, or another refill bar.

Use existing state when a cost is needed:

- **Fatigue** for sustained psychic exertion or neurological/physical drain;
- **Fear** for overwhelming contact, alien thoughts, terrifying visions, or loss of confidence/control;
- **Vitality** for immediate shock only when appropriate;
- **Injury** only for sufficiently dangerous backlash with explicit causal fiction;
- resource/item/event state when a particular ritual, medicine, focus object, location, or preparation matters.

A low-stakes failed psychic check cannot arbitrarily cause permanent brain damage. D-020/D-025 lethality and injury rules remain authoritative.

## 13. Psychic Gifts are mostly permissions and event branches

The game is a data-driven text RPG, not a freeform physics sandbox.

Therefore the default implementation model is:

- Gift/facet unlocks a new authored choice;
- the choice may bypass a mundane obstacle, reveal a clue, change difficulty, reduce a consequence, create a new danger, or open a unique event branch;
- only when uncertainty/stakes remain does the choice roll through D-024.

There is **no universal `Use Psychic Power` button** that scans every scene for possible effects.

This keeps content deterministic, authorable, testable, and bounded.

## 14. Combat boundary

An awakened Gift does not automatically grant:

- psychic damage attacks;
- stun/disable;
- mind control;
- force shields;
- ranged disarming;
- teleportation;
- flight;
- healing;
- type-based battle moves copied from Pokémon.

A specific facet may influence a dangerous encounter when the fiction supports it, usually through:

- information;
- positioning;
- warning;
- distraction;
- protection/resistance;
- one narrow environmental manipulation;
- a rare authored miracle.

Human psychics remain humans in a world where Pokémon can be physically overwhelming.

## 15. Information safeguards

Psychic perception is not permission for the event engine to reveal author knowledge.

Omen/Mind/Dream/Veil manifestations can reveal only information that the authored phenomenon can plausibly transmit.

They may provide:

- sensory fragments;
- symbolic clues;
- emotional impressions;
- a bounded near-future warning;
- remembered/psychic residue whose source is established;
- an extra investigation branch.

They may not automatically reveal:

- full hidden event logic;
- exact enemy stats;
- complete Pokédex data;
- guaranteed future outcomes;
- objective truth about every statement;
- another person's complete thoughts/history.

D-019 knowledge boundaries and P5 authored information state remain authoritative.

## 16. No automatic rerolls or fate manipulation

Premonition/Omen Gifts do **not** provide a universal reroll, die replacement, advantage die, or automatic Fortune Spike.

Their baseline role is fictional permission, warning, information, or an alternate choice.

If P3 later introduces a separate fate/roll-intervention resource, that resource remains a distinct system. Psychic Gifts may interact with it only through an explicit later contract and must not become the hidden default explanation for rerolls.

## 17. Progression after awakening

D-027 remains authoritative.

Generic advancement points cannot create a Gift in a non-awakened character.

After awakening, advancement may deepen the existing family only when the character has a matching **gift-growth eligibility** from actual supernatural experience, training, mentor guidance, major insight, or another authored source.

Default progression shape:

- a new narrow facet/technique inside the existing Gift family may cost **1 advancement point + matching gift eligibility** when its mechanical weight is comparable to an ordinary technique;
- a major expansion of scope/power requires an **exceptional authored breakthrough** and may cost more, but cannot be purchased from points alone;
- ordinary progression does not grant a second Gift family;
- a second family, if ever permitted, requires an explicit exceptional story rule or later Human Design Gate rather than normal advancement.

The preferred Gift progression is horizontal and specific: more control, a new condition under which the same faculty works, safer use, clearer interpretation, or one new narrow manifestation—not a generic power-level ladder.

## 18. Social consequences

Because gifted people are rare, discovery can matter socially.

Depending on locality/content, an awakened or suspected gifted person may be:

- respected;
- feared;
- hidden/protected;
- sought for omens;
- blamed for misfortune;
- recruited by a ritual specialist;
- avoided;
- treated as cursed;
- treated as evidence of a local sacred tradition.

No single reaction is universal. P2 local-culture rules remain authoritative.

The player must not receive a global `psychic reputation` score merely because a Gift exists. Reputation/knowledge should be scoped by who witnessed or learned what.

## 19. Pokémon interaction boundary

Psychic Gifts do not bypass species-specific companionship rules.

A Mind Echo character cannot automatically tame Pokémon. A Veil Sense character cannot automatically neutralize Ghost/Psychic species. An Omen Gift cannot reveal every encounter outcome.

P4 may define species-specific interactions where a human Gift is relevant, but must preserve:

- species capability;
- danger;
- knowledge state;
- consent/relationship where applicable;
- companionship rarity;
- source/canon boundary.

## 20. Deterministic data contract

P5/P7 should be able to represent at minimum:

```text
RareGiftState
  state: none | foreshadowed | awakened
  resonanceTags[]
  foreshadowingId?
  giftFamilyId?
  facetIds[]
  awakeningEventId?
  awakeningSourceTags[]
  knownByActorIds[] or scoped knowledge equivalent

RareGiftDefinition
  id
  familyId
  passivePermissions[]
  manifestationIds[]
  progressionRules

ManifestationDefinition
  id
  familyId
  mode: passive | focused | miracle
  governingAttribute?
  prerequisites[]
  checkProfile?
  costProfile?
  consequenceProfile?
  eventTags[]
```

Exact schema naming is deferred to P5/P7, but the state transitions are binding.

P5 requires deterministic operations equivalent to:

- `set_gift_foreshadowing(foreshadowing_id)`;
- `grant_awakening_eligibility(source_event_id, family_hint?)`;
- `awaken_gift(family_id, initial_facets[], source_event_id)`;
- `grant_gift_facet(facet_id, source_event_id)`;
- `record_gift_witness(actor_id)`;
- `advance_fatigue(amount)` or other existing-state costs through normal consequence operations.

No per-frame psychic scanning or repeated hidden eligibility computation is required. Eligibility should be indexed/evaluated on discrete state changes and event entry.

## 21. Content validation rules

P5/P9 content validation should reject or flag:

- ordinary Origin/Practice packages that directly grant `awakened` Gift state;
- a generic `psychic` Competence;
- manifestations with no family/facet boundary;
- repeatable low-cost awakening farms;
- psychic events that grant universal Pokémon taming;
- Omen/Dream events that leak author-only truth without a plausible information source;
- routine combat powers that make iron-age human limitations irrelevant;
- a second ordinary mana/focus resource introduced only for psychic use;
- ordinary advancement-point purchases that create a Gift from `none`;
- unbounded second-family acquisition;
- non-deterministic reroll loops used to fish for psychic eligibility.

## 22. Mobile presentation

The ordinary character sheet should not display a large empty magic tab for every character.

Recommended presentation:

- `none`: no psychic panel at all;
- `foreshadowed`: one compact **Unusual Sign / 기이한 징후** entry among background hooks;
- `awakened`: one compact **Gift / 기적적 재능** section showing the family, current facets, known risks/costs, and important social/event consequences.

This preserves rarity visually. The UI should not imply every character is expected to unlock the section.

## 23. Tuning boundary

The following may be tuned without reopening P3-HDG-007:

- exact foreshadowing/awakening percentages within the rare direction;
- exact event weights and chain lengths;
- exact initial facets per family;
- difficulties for specific manifestations;
- whether a particular focused manifestation costs Fatigue on success;
- specific local social reactions;
- exact wording of Gift/family names.

The following require an explicit later design decision:

- making active psychic ability directly selectable during ordinary creation;
- making psychic characters common;
- introducing a normal psychic class/job;
- adding a universal mana/spell-list system;
- allowing generic advancement to create a Gift;
- allowing ordinary multi-family psychic builds;
- turning Omen into universal rerolls/fate control;
- making psychic power necessary for main-story completion.

## 24. Downstream obligations

### P3 remaining

- decide whether a separate fate/roll-intervention resource is necessary at all;
- then run a full P3 exit audit covering modifier stacking, state overload, lethality, Gift rarity, progression, inventory, deterministic state requirements, and complete `0/3` non-gifted viability.

### P4

- identify species-specific Psychic/Ghost interactions with human Gifts only where source evidence and ancient-setting derivation support them;
- never treat a human Gift as automatic companionship access;
- distinguish Pokémon abilities from human Gift mechanics.

### P5

- implement rare awakening as explicit one-shot authored chains/state transitions;
- support foreshadowing/resonance conditions without constant polling;
- keep passive psychic information event-triggered and source-bounded;
- support scoped witness/knowledge consequences;
- make run simulation able to measure actual awakening frequency against the rarity target.

### P6

- Gift presentation may remain primarily text/UI; do not assume a large VFX/audio asset budget merely because psychic mechanics exist.

### P7/P8

- keep Gift definitions normalized/cached rather than reparsed during render;
- do not create an always-running psychic sensor loop;
- hide the Gift UI entirely for ordinary `none` characters;
- prove that non-gifted characters receive no missing-feature pressure;
- preserve deterministic awakening/replay traces.

## 25. Exit statement

P3 now has a bounded psychic-player model consistent with D-015:

- **rare signs may begin in character creation; usable ability does not**;
- **actual power awakens only through rare in-run authored events**;
- **one narrow Gift family is the default**;
- **existing attributes/checks/Fatigue/Fear/Injury carry the mechanics instead of a new magic subsystem**;
- **Gift primarily opens authored permissions and branches rather than a universal combat action**;
- **ordinary non-gifted runs remain the baseline and fully complete**.

The next P3 decision is whether the game benefits from a separate fate/roll-intervention resource or whether Fortune/Trouble Spikes, partial outcomes, preparation, insight, and authored branches already provide enough variance control and dopamine.
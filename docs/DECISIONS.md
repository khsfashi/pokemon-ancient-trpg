# Decision Log

This file records durable owner-approved product/design decisions so future agents do not repeatedly ask the same questions or silently replace them.

Statuses:

- `ACTIVE` — current authority,
- `SUPERSEDED` — intentionally replaced by a later decision,
- `PROVISIONAL` — direction is useful but must be confirmed before an expensive commitment.

## D-001 — Project purpose and distribution

**Status:** ACTIVE  
**Date:** 2026-08-14

The project is an unofficial, non-commercial Pokémon fan project intended primarily for the owner's personal play. Limited sharing with friends is acceptable. The GitHub repository is public; people discovering it are not intentionally blocked.

The repository must not imply that non-commercial status itself grants permission to use Pokémon IP.

## D-002 — Core format

**Status:** ACTIVE  
**Date:** 2026-08-14

The target game is a mobile-friendly text RPG/TRPG with character creation, stats, dice rolls/checks, random insights/discoveries, conditional events, branching choices, and persistent run state.

The feel should be closer to an event-driven adventure story than a conventional graphical Pokémon collection game.

## D-003 — Setting direction

**Status:** ACTIVE  
**Date:** 2026-08-14

The world is pre-modern / ancient in tone. Humans and Pokémon are **not** already living together in the normalized modern Pokémon relationship.

Pokémon may be perceived as dangerous creatures/monsters/wildlife depending on later setting decisions. Forming a relationship with or acquiring multiple Pokémon should not be assumed to be easy or commonplace.

The exact era, terminology, social structure, and severity are intentionally unresolved until P2.

## D-004 — Occupation fantasy

**Status:** ACTIVE  
**Date:** 2026-08-14

Occupations/backgrounds should emerge from the Pokémon setting and pre-modern society. Generic fantasy-magic classes such as a conventional wizard should not be introduced merely because the game uses a medieval-like aesthetic.

A role based on animal/Pokémon communication or similar setting-native expertise is directionally more appropriate, subject to P2/P3 design.

D-015 later clarifies that rare canon-compatible **human psychics / miracle-workers** are allowed and may fill part of the gameplay niche normally occupied by fantasy magic-users without creating a generic spell system.

## D-005 — Autonomous repository workflow

**Status:** ACTIVE  
**Date:** 2026-08-14

The owner wants the project to advance from short commands such as `다음 작업 진행해줘`.

Agents should recover state, choose the next fixed-roadmap task, research factual uncertainty, execute one coherent scope, validate it, update status, and publish a scoped PR without requiring the owner to restate project context.

## D-006 — Human Design Gate

**Status:** ACTIVE  
**Date:** 2026-08-14

If a material product/world/rules choice has multiple reasonable creative answers and cannot be objectively resolved from evidence, the agent must ask the owner before freezing it.

The agent should provide concise options, a recommendation, and downstream impact. Researchable technical/factual questions should be investigated by the agent instead of delegated to the owner.

Approved decisions must be written back to this log.

## D-007 — Implementation timing

**Status:** ACTIVE  
**Date:** 2026-08-14

Reference/API/data/IP research and game-design contracts should be established before the production implementation architecture is frozen.

The production resource/asset contract must also be established after core game design and before technical architecture, so framework/runtime choices do not silently dictate asset policy and late asset decisions do not force avoidable architecture rewrites.

Early executable experiments are allowed only as bounded evidence for a specific uncertainty.

## D-008 — Mobile delivery direction

**Status:** PROVISIONAL  
**Date:** 2026-08-14

A conveniently accessible mobile experience is required. A web/PWA build hosted through a service such as Vercel is acceptable if it provides a good phone experience. APK installation is desirable only if it does not impose disproportionate complexity.

The exact technical stack and packaging route are deferred to P7 after current primary-source research, game-design contracts, and the P6 resource/asset strategy.

## D-009 — Two-pass resource and asset planning

**Status:** ACTIVE  
**Date:** 2026-08-14

Resource planning is a first-class project phase and intentionally happens in two passes.

**P1** performs broad resource-source reconnaissance. It should discover and assess Pokémon sprite/icon/audio sources and relevant font/UI/audio/background ecosystems, recording provenance, license/IP boundaries, maintenance/pinning characteristics, and `ADOPT / ADAPT / REJECT / DEFER` decisions. When final usefulness depends on unfinished design, the source should be marked for `REVISIT IN P6` rather than prematurely selected.

**P6 (#12)** occurs after P2-P5. It owns the final production resource contract: required/optional/deferred asset inventory; source versus project-created/generated strategy; provenance/attribution/redistribution classification; public-repository inclusion versus build-time fetch/generation; stable resource IDs/manifests; preprocessing/validation; and mobile payload/decode/audio/cache budgets.

P6 precedes P7 Technical Architecture. Later phases must preserve the resource contract rather than bypassing it with one-off asset handling.

## D-010 — Earlier than the Hisui-era precedent

**Status:** ACTIVE  
**Date:** 2026-08-14

The intended setting should be **earlier than the historical society shown in Pokémon Legends: Arceus / Hisui**, not merely another Hisui-like frontier period.

Hisui is an official precedent and an **upper-bound comparison**, not the project's target template. P2 should therefore begin from a society where normalized human–Pokémon coexistence, trainer conventions, formal survey institutions, Poké Ball-style capture infrastructure, and comparable settlement organization are even less established unless the owner later approves a specific exception.

This decision does not yet assign an exact calendar date, real-world historical analogue, technology level, region identity, or terminology. Those remain P2 design questions, but any selected answer must preserve the direction that this world represents an earlier stage of human–Pokémon relations than Hisui.

## D-011 — Complete Generation I roster and per-species setting dossiers

**Status:** ACTIVE  
**Date:** 2026-08-14

The mandatory Pokémon roster is the complete original Generation I National Pokédex: **#001-#151, all 151 species inclusive of Mew**.

P4 must design each species individually rather than relying only on generic Pokémon-system rules. Every species receives a detailed ancient-setting dossier covering its ecology, human perception/cultural role, threat and encounter behavior, bond/companionship conditions, mechanical adaptation hooks, narrative/event hooks, bestiary knowledge progression, provenance, and unresolved dependencies as applicable.

This breadth requirement does not mean every species is common, catchable, companion-eligible, or directly encountered in the same way. Rarity, danger, legendary/mythical status, ecology, and the pre-Hisui setting may require indirect or exceptional forms of presence.

P4 cannot close with partial roster coverage: its closure audit must prove `151/151` substantive dossiers. P9 must then prove `151/151` meaningful in-game content presence, which may include encounters, events, traces, myths, quests, cultural relationships, bestiary discoveries, or environmental consequences appropriate to each dossier.

Regional forms, later-generation evolutions, Mega Evolution, Gigantamax, and other post-Generation-I additions are outside the mandatory baseline unless a later owner decision explicitly expands scope.

## D-012 — Early settled village / clan-network society

**Status:** ACTIVE  
**Date:** 2026-08-14
**Human Design Gate:** P2-HDG-001  
**Owner choice:** A

The P2 human-society baseline is an **early settled village / clan network**.

The setting therefore assumes:

- small persistent villages and hamlets rather than mature cities or mostly nomadic society;
- settlements connected by dangerous, locally known routes rather than a comprehensive safe-road network;
- small-scale cultivation, gathering, fishing, hunting where appropriate, preservation, storage, and specialist handcraft sufficient to support stable settlement life;
- kinship, household, clan, village obligation, local chiefs/elders/councils and respected specialists as more important than centralized institutions;
- intermittent, route-dependent inter-settlement trade rather than a frictionless regional market;
- oral/local knowledge as dominant, with literacy and durable record keeping concentrated among specialists rather than assumed for ordinary people;
- enough occupational specialization to support a varied TRPG cast without importing generic fantasy classes;
- wilderness that remains materially outside routine human control and makes travel, guides, ecological knowledge, preparation and avoidance important;
- human–Pokémon relationships based primarily on caution, avoidance, negotiation, local custom, fear, observation and exceptional bonds rather than ordinary trainer ownership.

This decision intentionally does **not** establish an exact historical analogue, region identity, currency, lethality, human term for Pokémon, or exact prevalence/mechanism of exceptional Pokémon bonds. Metallurgy is later constrained by D-014.

`docs/WORLD_BIBLE.md` is the working contract that expands these implications while keeping unresolved choices explicit.

## D-013 — No containment technology; optional three-slot companion system

**Status:** ACTIVE  
**Date:** 2026-08-14
**Human Design Gate:** P2-HDG-002  
**Owner choice:** A, clarified

There is **no portable Pokémon containment technology** in the baseline era. There are no Poké Ball-like devices, instant recall, remote transfer, PC storage, or abstract creature inventory. Temporary restraints, traps, nets, cages, or pens may exist where the setting and technology permit them, but they are not a companion-storage system.

Pokémon companionship is nevertheless a **first-class player system**, not a secret bonus or a non-systemic narrative exception.

The player-state and eventual UI must expose exactly **three companion Pokémon slots**. Valid run states are `0/3`, `1/3`, `2/3`, and `3/3` occupied slots. Empty slots are normal and persistent; the interface must not imply that filling them is required.

A run must be fully playable and completable with **zero Pokémon companions**. Main progression, survival, exploration, checks, event resolution, and endings may not assume that the player has obtained a Pokémon unless a particular optional branch explicitly requires one.

When a Pokémon does become a companion, it remains physically present in the world. It travels, rests, eats, occupies space, can be endangered or separated, and imposes species-specific logistical and social consequences. Acquiring a companion means establishing a relationship in which that Pokémon chooses or accepts continued association; it is not equivalent to defeating, restraining, or declaring ownership over it.

The intended social analogy is closer to a fantasy world in which monsters are common dangers but **monster tamers are rare**. A person accompanied by one dangerous creature may be remarkable; someone who has earned the trust of several powerful Pokémon can be exceptional, and a person able to travel with a dragon-like or legendary-scale creature may be treated as a figure of legend. This analogy defines social rarity, not a generic fantasy taxonomy that replaces Pokémon-specific ecology.

The three-slot capacity is a **game-system maximum**, not evidence that three companions are ordinary in the fiction. P4 must decide species-by-species whether companionship is plausible at all and what conditions, burdens, risks, and social consequences apply.

P3 must support both human-only and companion-assisted character builds without making either an invalid progression path. P5 must allow events and endings for `0/3` companion runs. P7/P8 must preserve the visible three-slot companion contract in the mobile UI.

## D-014 — Iron-age ordinary material baseline

**Status:** ACTIVE  
**Date:** 2026-08-14
**P2 owner direction**

Ordinary human material culture should have an **iron-age / medieval-fantasy-like floor** rather than a stone- or bronze-age floor.

The baseline therefore permits iron tools, iron weapons, smithing, agricultural implements, chains/fasteners and iron-supported fortification/craft where locally available. The exact quality and prevalence of steel, armor construction, specialized alloys, mining scale, furnace design, and mass production remain later-detail questions rather than automatic consequences.

This technology level does **not** imply parity with Pokémon. Iron lets humans contest, deter, trap, wound, and sometimes kill dangerous creatures through preparation and group tactics; it does not make ordinary humans apex predators. Pokémon capabilities such as Pidgeot's canon Mach-2 hunting speed, Machamp-scale strength, elemental attacks, and Psychic/Ghost hazards justify keeping even well-armed wilderness travel dangerous.

`docs/P2_TECHNOLOGY_CANON_RESEARCH.md` records the supporting source evidence and the recommended treatment of Pokémon-dependent technology islands.

## D-015 — Rare human psychics / miracle-workers are setting-native

**Status:** ACTIVE  
**Date:** 2026-08-14
**P2 owner direction**

The setting may contain **humans with genuine psychic or otherwise anomalous faculties**. Sabrina is an explicit franchise precedent for a human described in official Pokémon material as using psychic powers.

These people occupy part of the gameplay/cultural niche that a conventional medieval-fantasy setting might assign to wizards, but they are **not** a generic spellcasting class and do not imply a universal magic system.

The baseline treatment is:

- rare enough to be socially notable;
- usually limited to one narrow personal faculty or family of related phenomena;
- capable of `miracle-like` acts rather than routine large-scale magic;
- potentially understood through local terms such as seer, medium, mind-speaker, omen-reader, shrine specialist, gifted healer, or feared/cursed person;
- mechanically bounded by P3 rather than implemented as an open-ended spell list.

Possible manifestations such as telepathic impressions, brief precognition, limited telekinesis, emotional/aura sensitivity, dream sensitivity, or resistance/attunement to Psychic/Ghost phenomena remain examples rather than a finalized ability catalog.

## D-016 — Ancient Pokémon danger / lineage-strength premise

**Status:** PROVISIONAL  
**Date:** 2026-08-14
**P2 owner direction requiring canon-aware wording**

The owner wants ancient-era Pokémon to feel **materially more dangerous than modern Pokémon familiarity suggests**, including the idea that later populations may have become weaker over long periods of civilization.

There is real canon precedent for historical weakening: multiple version-tagged Magikarp Pokédex entries state that distant-past Magikarp were stronger and that the species became gradually weaker over time. This establishes that long-term lineage strength change is compatible with Pokémon canon.

However, canon does **not** establish a universal franchise rule that every species was stronger, that civilization caused all weakening, or that all modern Pokémon are genetically degraded.

Until P4 audits species individually, the safe project-authored working premise is:

> Many ancient wild populations may retain harsher traits, greater ecological pressure, more dangerous behavior, or stronger lineages than distant modern descendants. Long-term habitat change, human expansion, selective coexistence/breeding and other pressures can later reshape or weaken some populations.

P4 must mark each species' ancient-strength treatment as source-backed, inferred, project-authored, unchanged, or intentionally exceptional. The stronger universal wording `civilization genetically weakened all Pokémon` must not be presented as official canon without a later explicit owner decision to adopt it purely as project lore.

## D-017 — Iron-age baseline plus Pokémon-dependent local technology islands

**Status:** ACTIVE  
**Date:** 2026-08-14
**Human Design Gate:** P2-HDG-003  
**Owner choice:** approved recommended hybrid

The ordinary material floor remains the iron-age / medieval-fantasy-like baseline established in D-014, but **Pokémon-dependent technology islands are a binding setting rule**.

A settlement, clan, lineage, workshop, shrine, healer, or specialist may possess one unusually advanced or unusually effective craft when that craft can be causally traced to a source-backed Pokémon capability, ecology, material, behavior, or recurring phenomenon plus generations of human observation and practice.

These technology islands must remain narrow, local, fragile, and difficult to scale. Their existence does not imply a modern scientific worldview, industrial production, a general electrical grid, mass Pokémon labor, routine ownership, or a universal technology tree.

The enabling Pokémon does not need to be domesticated or a companion. A technology island may instead depend on habitat access, migration timing, shed/abandoned materials, negotiated coexistence, dangerous harvesting, a rare bond, or equipment built to survive or redirect a Pokémon phenomenon.

P4 must audit technology/craft consequences species by species. A valid result for many species is explicitly `none`; no species should receive a technology hook merely to fill a template.

The binding implementation contract is `docs/P2_CANON_DERIVATION_AND_TECH_ISLAND_CONTRACT.md`.

## D-018 — Canon-first worldbuilding derivation protocol

**Status:** ACTIVE  
**Date:** 2026-08-14
**P2 owner direction**

Ancient-world Pokémon lore must be developed from **actual Pokédex descriptions and other official Pokémon setting evidence first**, followed by clearly bounded project inference and creative extrapolation.

The required authoring order is:

> **official evidence → bounded interpretation → explicit project extrapolation**

Authors must not invent a desired fantasy result first and then search for a sentence that can be stretched into justification.

Material claims must preserve a visible evidence boundary using the classification contract defined in `docs/P2_CANON_DERIVATION_AND_TECH_ISLAND_CONTRACT.md`: direct official fact, cross-source official synthesis, conservative derived inference, project-authored extrapolation, or unsupported/unresolved.

P4's 151 species dossiers must separately record official evidence, ancient-setting derivation, technology/craft impact or `none`, ancient-strength treatment, companionship treatment, and a canon-boundary note wherever project lore could be mistaken for official canon.

Project-authored imagination is not discouraged; it is a required part of the setting. The rule is that the project must always be able to say **which part came from Pokémon canon and which part is our ancient-world extrapolation**.

## D-019 — Hybrid species identification and naming

**Status:** ACTIVE  
**Date:** 2026-08-14
**Human Design Gate:** P2-HDG-004  
**Owner choice:** B

The game uses a **hybrid identification model** that separates stable system identity from what the player character and people of the era actually know.

Official Pokémon species identities and names remain the stable player-facing/data reference once a species is identified, but they are not automatically universal ancient-world vocabulary and are not necessarily revealed on first encounter.

Before sufficient identification, encounters may use observable descriptions, local aliases, titles, myths, mistaken labels, or an explicitly unknown presentation. After sufficient identification, the UI/bestiary may reveal the official species name while continuing to preserve local terminology in dialogue and lore.

The umbrella word `Pokémon` may be used by the system/UI for clarity, but the setting does not require every ancient community to share that generic term.

Identification is separate from complete knowledge. Revealing a species name does not automatically reveal its ecology, abilities, danger signs, weaknesses, companionship conditions, technology relevance, or other bestiary knowledge.

P4 must define recognition/identification hooks per species without inventing aliases merely to fill a template. P5 must support knowledge-dependent rendering. P7/P8 must keep stable species identity separate from current encounter labels and discovered aliases.

The binding implementation/content contract is `docs/P2_TERMINOLOGY_AND_IDENTIFICATION_CONTRACT.md`.

## D-020 — Serious selective lethality

**Status:** ACTIVE  
**Date:** 2026-08-14
**Human Design Gate:** P2-HDG-005  
**Owner choice:** B

The setting uses **serious selective lethality**.

Injury, lasting impairment, critical condition, and death are real possible outcomes for humans and Pokémon, but ordinary defeat is **not** automatically death. Later systems must distinguish escape/disengagement, non-lethal incapacitation, recoverable injury, serious or lasting injury, critical/life-threatening condition, and death.

Death is an explicit high-severity outcome reached through sufficiently lethal circumstances, critical injury, failed rescue/treatment, deliberate lethal action, accumulated danger, or another authored lethal path. A routine low-severity failed roll must not silently become arbitrary permadeath.

Companion Pokémon can be seriously injured or die, but companion death is rare/high-impact rather than routine attrition. A normal random encounter defeat must not automatically erase a hard-earned companion. Species-specific durability and danger remain P4 responsibilities.

The player must have meaningful human-only survival options such as preparation, equipment, route knowledge, observation, retreat, first aid, and other setting-native tools; the existence of lethal stakes must not turn a companion into a required survival tax.

A `death` result is genuinely different from fainting or incapacitation. The baseline does not assume generic resurrection or automatic return from death; any future exception requires an explicit separate lore/design decision.

P3 owns exact health numbers/tier mechanics and player-death run handling. P5 owns authored consequence ladders, warning/telegraphing, rescue/treatment branches, and explicit lethal contexts.

P2-HDG-006 later resolves the separate social/ethical treatment of humans killing Pokémon through D-021.

The binding contract is `docs/P2_INJURY_AND_LETHALITY_CONTRACT.md`; supporting canon research remains in `docs/P2_LETHALITY_CANON_RESEARCH.md`.

## D-021 — Contextual, culture/species-sensitive Pokémon killing ethics

**Status:** ACTIVE  
**Date:** 2026-08-14
**Human Design Gate:** P2-HDG-006  
**Owner choice:** B

Humans intentionally killing Pokémon is **neither universally taboo nor casually normal**. The meaning of a lethal act depends on context, local culture, the particular species/individual, and the relationship between that Pokémon and the community.

Legitimate reasons can include immediate defense, settlement or route defense, necessary hunting for food/materials, mercy killing, population/ecological control, and other survival necessities. Those reasons do not make all killing morally blank or socially interchangeable.

Communities may judge the same species differently. One settlement may hunt a species, another may tolerate it, another may protect it, and another may understand it as sacred, intelligent, treaty-bound, ecologically necessary, or otherwise inappropriate to kill. Rarity, perceived intelligence/personhood, sacredness, local truce/history, ecological importance, available non-lethal alternatives, necessity, waste, cruelty, and prestige-only motives may all affect judgment.

Defeating a Pokémon does not imply killing it, and killing one does not imply automatic harvesting or loot. Hunters and defenders are valid occupations, but the game must not reduce Pokémon encounters to a universal `kill for XP/resources` loop.

Pokémon-derived food/material use is allowed only where P4 species/local treatment supports it. Non-lethal collection such as shed materials, abandoned resources, natural remains, negotiated access, or species-specific alternatives may be equally or more appropriate.

A companion Pokémon is an accepted relational partner rather than property. Deliberately killing a companion — one's own or another person's — is presumptively a severe social/narrative act except where an exceptional context such as unavoidable mercy killing clearly changes the interpretation.

P4 must define species/local killing, hunting, food/material, protection/taboo, intelligence/rarity and non-lethal-resource treatment where relevant. P5 must support context-sensitive consequences rather than a single global morality flag.

The binding contract is `docs/P2_KILLING_ETHICS_CONTRACT.md`.

## D-022 — Pre-regional-civilization proto-Kanto locality

**Status:** ACTIVE  
**Date:** 2026-08-14
**Human Design Gate:** P2-HDG-007  
**Owner choice:** B, clarified as “not yet civilized” at regional scale

The first playable land is a **proto-Kanto locality**: territory that the project understands will much later become part of Kanto, while the people of this era do not yet possess a mature `Kanto` regional identity.

The owner's clarification is binding. This is **before regional civilization**, not a miniature medieval version of modern Kanto and not a Hisui-like organized frontier society. There is no baseline Kanto-wide state, city network, standardized law/currency, maintained road system, Pokémon institution network, safe-travel regime, or shared regional Pokédex culture.

This wording does **not** erase D-012 or D-014. Humans can have stable villages, clan cultures, agriculture, specialists, ironworking, ritual, trade, inherited knowledge, and narrow Pokémon-dependent technology islands. The intended contrast is that **local culture/craft can be sophisticated while regional integration is primitive**.

Human settlements are small islands of relative control inside land still governed primarily by wilderness and Pokémon ecology. Routes are remembered survivable corridors rather than fully secured roads, and isolation between nearby communities can be culturally and economically meaningful.

`Kanto` is primarily a project/system-level future geographic anchor. Ancient inhabitants use local names and identities unless official historical terminology is actually supported. Modern Kanto cities, routes, political boundaries, institutions, and habitat distribution must not be projected backward automatically.

The first playable scope is one bounded settlement-centered locality plus the surrounding routes/ecologies required for a complete run, not all of ancient/future Kanto. The mandatory #001-#151 roster does not imply that all 151 species inhabit or directly appear in this opening locality.

P4 must treat modern Kanto associations as evidence to audit rather than timeless ecology. P5 must support strong locality, cultural disagreement, route accessibility, and gradual discovery without requiring an open-world simulation. P7/P8 must preserve the bounded settlement-centered scope.

The binding contract is `docs/P2_FIRST_REGION_CONTRACT.md`.

## D-023 — Seven core human attributes

**Status:** ACTIVE  
**Date:** 2026-08-15
**Human Design Gate:** P3-HDG-001  
**Owner choice:** seven-attribute model proposed after reviewing the earlier 5/6-stat options

Human player characters use exactly seven core attributes:

- **Strength / 근력** — raw force, lifting, breaking, grappling and force-heavy physical action;
- **Endurance / 체력** — stamina, bodily resilience, exposure, poison/disease tolerance and sustained hardship;
- **Agility / 기민** — reflex, coordination, precision, stealth and controlled movement;
- **Sense / 감각** — perception, tracking, situational awareness and immediate environmental danger reading;
- **Intellect / 지성** — learned knowledge, medicine, craft, planning, reasoning and deliberate analysis;
- **Will / 의지** — self-control, fear/pain tolerance, conviction, mental resistance and bounded psychic discipline where an actual gift exists;
- **Presence / 존재감** — projected authority, trust, intimidation, leadership, persuasion and social gravitas.

The split is intentional. Strength and Endurance must remain materially different; Agility and Sense distinguish reacting from noticing; Sense and Intellect distinguish observation from learned understanding; Will and Presence distinguish internal resolve from outward influence.

Presence is not physical beauty, morality, popularity, or a universal dialogue-win stat. Social outcomes remain contextual and may depend on relationship, reputation, leverage, local custom, background, evidence, approach and other attributes.

Luck is **not** an eighth core attribute. Any future fate/reroll/insight resource is separate from innate capability. Bond is also **not** a core attribute; Pokémon trust/relationship belongs to specific companion or individual relationship state under D-013.

The seven attributes are a human player-character contract. P4 may use a different or derived Pokémon mechanical model rather than forcing species into a human-shaped stat block.

Numeric ranges, creation allocation, modifiers, dice/check formula, difficulty scale, health/fatigue/fear formulas and other derived stats remain unresolved until the next P3 rules decisions.

The binding contract is `docs/P3_ATTRIBUTE_CONTRACT.md`.

## D-024 — 2d6 staged-outcome checks with rare doubles spikes

**Status:** ACTIVE  
**Date:** 2026-08-15
**Human Design Gate:** P3-HDG-002  
**Owner choice:** B, expanded with rare critical/dopamine events

The core human check engine uses **2d6 + Attribute + Competence + Context** against a target difficulty or opposed value.

Checks use margin-based outcome bands rather than only binary pass/fail: setback, costly/partial success, full success, and exceptional success. The center-weighted 2d6 distribution is intended to make competence reliable while preserving uncertainty.

Natural **6+6** is a rare `Fortune Spike` and natural **1+1** is a rare `Trouble Spike`. Each occurs 1/36 of rolls. Doubles are an overlay on the normal result rather than a replacement for total/margin.

A Fortune Spike creates an additional meaningful opportunity such as hidden information, bestiary insight, a safer route, rare trace, optional event flag, favorable relationship opening, or preserved resource when the fiction supports it. It does not make structurally impossible actions possible and does not automatically award companions or campaign-scale treasure.

A Trouble Spike adds a context-appropriate complication but is not automatic death, permanent injury, companion loss, or arbitrary campaign destruction. D-020 serious selective lethality remains authoritative.

The default P3 check scale uses compact human attribute ratings `0–4`, competence `+0/+1/+2`, ordinary combined context `-2..+2`, and static difficulties `7 / 9 / 11 / 13 / 15`, with routine actions requiring no roll and structurally impossible actions receiving no roll until fiction changes.

The reward cadence must not depend primarily on frequent Pokémon acquisition. Exceptional outcomes and Fortune Spikes can instead drive knowledge, discovery, route, relationship, resource, reputation, and event-flag rewards.

The binding contract is `docs/P3_DICE_AND_CHECK_CONTRACT.md`.

# Roadmap

This roadmap defines the default core progression lane. The owner may explicitly reorder or replace phases, but agents must not do so opportunistically.

## Fixed phase order

| Phase | Issue | Purpose | Exit condition |
|---|---:|---|---|
| P0 | #1 | Project governance and autonomous continuation | A fresh agent can recover state, select next work, respect Human Design Gates, and leave a deterministic handoff. |
| P1 | #2 | Reference, API, data-source, resource-source, and IP research | Current primary-source registry with provenance, risks, ADOPT/ADAPT/REJECT/DEFER decisions, and a resource-candidate revisit list for P6. |
| P2 | #3 | World bible | Minimum durable setting contract is owner-approved; unresolved canon questions are explicit. |
| P3 | #4 | Core TRPG rules | Character/check/injury/progression contracts are deterministic and sufficiently frozen for downstream systems. |
| P4 | #5 | Pokémon adaptation + complete Gen-I species dossiers | Shared Pokémon-domain rules are stable and all National Pokédex #001-#151 species have substantive, reviewed ancient-setting dossiers. |
| P5 | #6 | Narrative world-event engine | Data-driven event/condition/choice/outcome/seeded-run contract is implementation-ready and proves one shared engine can express human/social, survival, faction-linked, mixed-world, and Pokémon-facing content. |
| P6 | #12 | Resource and asset strategy | Exact asset inventory, sourcing/provenance/redistribution rules, production pipeline, and mobile resource budget are frozen from the P2-P5 design. |
| P7 | #7 | Technical architecture | Current, proven implementation stack plus save/data/resource/test/deployment architecture are frozen and satisfy P6 constraints. |
| P8 | #8 | First playable vertical slice | One coherent mobile-sized run proves a mixed pre-modern Pokémon-world loop: human/social pressure, survival/travel, a persistent faction or relationship thread, and Pokémon ecology/direct interaction all use production-intended paths. |
| P9 | #9 | Full world content + factions + complete Gen-I realization | Replayable world-content breadth exists, several recurring major factions are realized, and all #001-#151 species have at least one authored living direct-interaction path consistent with P4/D-034. |
| P10 | #10 | Mobile/release | PWA/distribution path is reproducible; resource notices/bundling rules are preserved; optional APK exists only if justified. |

## Why specification and resource planning come first

This project is content-, rules-, and presentation-heavy. A premature application skeleton can encode assumptions about stats, events, Pokémon ownership, data formats, saves, UI flow, art density, asset layout, or loading behavior before those choices have been made.

Therefore P1-P5 are allowed to produce mostly research, decisions, schemas, examples, and testable contracts. P1 performs broad resource-source reconnaissance but deliberately does not freeze the final asset set while game design is unfinished.

P6 runs **after the core design contracts P2-P5**. It converts the finished design into an exact resource plan: what the game needs, which sources or production methods are acceptable, what may be redistributed in the public repository/build, how assets are normalized, and what mobile payload/memory/loading constraints the implementation must obey.

P7 is the point at which production implementation architecture is intentionally frozen. This prevents the framework/runtime from silently dictating asset policy and prevents a late resource investigation from forcing avoidable architecture rewrites.

Small executable prototypes are permitted earlier only when they answer a bounded technical uncertainty and are clearly disposable evidence rather than production architecture.

## P1 vs P6 resource boundary

### P1 — reconnaissance

P1 answers questions such as:

- what Pokémon sprite/icon/audio sources exist,
- what metadata and provenance each source exposes,
- what licenses/notices apply to repository code/data versus the underlying Pokémon assets,
- whether a source is maintained, pinnable, fetchable, and worth revisiting,
- what font/UI/audio/background ecosystems may be relevant,
- what candidates should be `ADOPT`, `ADAPT`, `REJECT`, `DEFER`, or explicitly `REVISIT IN P6`.

P1 must not prematurely freeze art direction, illustration density, exact runtime asset classes, repository bundling, or mobile memory budgets when those depend on later design.

### P6 — production resource contract

P6 revisits viable P1 candidates with P2-P5 in hand and freezes:

- required / optional / deferred asset inventory,
- Pokémon-facing sprite/icon/audio choices,
- project-owned background/UI/illustration/audio production needs,
- source/provenance/attribution/redistribution classification,
- public-repository inclusion versus build-time fetch/generation policy,
- stable resource IDs and manifest design,
- preprocessing and validation rules,
- runtime preload/cache/eviction expectations,
- initial payload, decoded-image/audio memory, and other mobile resource budgets,
- explicit constraints handed to P7 architecture.

## World-content and faction contract

The owner-approved direction in `docs/WORLD_CONTENT_AND_FACTION_CONTRACT.md` adds a cross-phase content invariant without changing the phase order.

The game must feel like a **pre-modern world whose society has been materially shaped by Pokémon**, not a generic medieval setting with Pokémon encounters pasted on top and not a Pokémon encounter checklist with thin human filler.

Binding rule:

> Every major world structure is shaped by the existence of Pokémon, but every individual event does not need to visibly feature or be immediately caused by a Pokémon.

This means ordinary human causes remain first-class content: debt, rivalry, crime, politics, negligence, family conflict, trade pressure, love, hunger, weather, accident, and similar problems are allowed to remain genuinely human or environmental. Their wider institutions, settlement patterns, routes, beliefs, economies, technologies, dangers, and power structures still exist in a Pokémon-shaped world.

### Major faction direction

P9 full content must establish **several persistent major factions**, with a current planning target of roughly **4–6 major faction lanes**. Exact final count/names remain future Human Design Gate material when production authoring reaches that point.

A major faction must be a setting-native consequence of Pokémon existence. Its ideology, influence, economy, ritual, knowledge, coercive power, ecological position, or methods must materially depend on Pokémon ecology, capability, sacredness, knowledge, exploitation, protection, coexistence, anomaly, or another approved Pokémon-world causal bridge.

Potential lanes include sacred/religious networks, coercive political/military/utilitarian groups, ecological protection movements, lorekeeper/anomaly networks, illicit exploitation/trafficking networks, and secretive transformative/apocalyptic cults. These are approved design lanes, not final named canon factions.

Because the setting is pre-regional-civilization, major factions need not and generally should not be modern nation-states or Kanto-wide bureaucracies. Distributed shrine networks, alliances, cults, trade webs, lineage confederations, warrior societies, criminal networks, and knowledge networks are appropriate shapes.

At least some factions should contain internal disagreement, useful public functions, sympathetic members, or legitimate grievances. Truly malicious actors or extremist branches remain allowed; the game simply does not reduce all politics to a visible binary `GOOD / EVIL` label.

### P5 — prove the shared event surface

Before P5 closes, representative validation evidence must prove that one shared data-driven event surface can represent:

- a human/social event whose immediate cause is not Pokémon;
- a survival/environmental event;
- a persistent relationship or faction-linked chain;
- a Pokémon ecological/direct-interaction event;
- a mixed human/Pokémon event;
- faction/relationship consequences through typed owner-domain state changes rather than bespoke story code or raw upstream writes.

P5 does not need production faction names or final lore.

### P8 — prove the mixed game loop

The first vertical slice must include a coherent mix of ordinary human/social pressure, travel/survival, at least one persistent faction/relationship thread, and Pokémon ecology/direct interaction. It must preserve a valid `0/3` companion route and must not introduce separate engines for faction events and Pokémon events.

### P9 — produce the full world

P9 is **Full World Content Production**, not merely the phase that completes a species checklist.

P9 must complete both:

1. **Pokémon realization** — every #001-#151 species has at least one authored living direct-interaction path somewhere in total content under D-034; and
2. **World realization** — substantive human/social, survival, exploration/mystery, relationship/reputation, faction, mixed-world, ending, and long-arc content exists with measurable coverage.

P9 closure therefore requires both a species direct-encounter manifest and a world-content/faction coverage audit.

## Generation I 151-species coverage contract

Owner decision D-011 adds a hard breadth requirement without changing the phase order. D-034 later strengthens the final realization requirement: every mandatory species must be directly encounterable somewhere in total authored content.

### P4 — design all 151 species

P4 must first freeze the shared Pokémon-domain contract, then author a detailed dossier for **every original National Pokédex species #001-#151**. The dossier schema and authoring/validation sequence are defined in `docs/GEN1_SPECIES_COVERAGE_PLAN.md`.

P4 closure requires a manifest proving `151 / 151` substantive dossiers. A row containing only imported source data, a generic one-line description, or a placeholder does not count.

The dossiers must remain compatible with the pre-Hisui world direction, P2 setting rules, P3 mechanics, and P5 event inputs. They should distinguish source-backed facts from project-authored ancient-setting interpretation and preserve unresolved questions rather than silently inventing pseudo-canon.

### P8 — prove the pipeline with a curated subset

The first vertical slice does **not** need all 151 species active. P8 should prove that the production pipeline can faithfully realize a representative subset without special-case architecture.

### P9 — realize all 151 species through direct interaction

P9 completes breadth. By P9 exit, every #001-#151 species must have at least one authored **living direct-interaction path** consistent with its P4 dossier and D-034.

A trace, rumor, myth, bestiary discovery, dream, relic, second-hand report, or environmental consequence can provide additional worldbuilding but **does not by itself satisfy** the 151/151 direct-encounter requirement.

This requirement does not imply:

- equal spawn rates;
- natural baseline-era presence for every species;
- universal catchability or containment;
- universal companion eligibility;
- combat as the required interaction;
- one-run availability;
- ordinary chronology for exceptional/anomalous species.

Species rarity, ecology, danger, legendary/mythical status, chronology, and bond rules remain authoritative. Mew, Porygon, and other exceptional cases must preserve their P4/D-034 constraints while still allowing a real living direct encounter somewhere in authored content.

Post-Generation-I additions are outside the mandatory baseline unless explicitly added by a later owner decision.

## Phase dependency rules

- P0 gates all later autonomous work.
- P1 informs P2-P7 wherever external data, Pokémon canon, resource candidates, APIs, provenance, or licenses matter.
- P2 must define the setting constraints that P3 occupations, P4 Pokémon relationships, P4 species dossiers, and P6 art/presentation needs depend on.
- P3 and P4 provide state/rule inputs to P5.
- P4 must complete the shared Pokémon contract before scaling species dossiers, then close only after the #001-#151 dossier audit passes.
- P5 defines the authoritative gameplay/content execution shape and presentation needs that P6 must account for; P5 must support ordinary world events, persistent faction/relationship chains, and Pokémon events through the same engine.
- P6 owns the production resource/asset contract and mobile resource budget; it does **not** choose the application framework.
- P7 owns framework/runtime/storage/resource-integration/deployment choices while preserving P6 constraints.
- P8 proves the complete mixed-world loop with a curated representative species subset before P9 scales content and resources.
- P9 owns both the final #001-#151 living direct-encounter audit and the full world-content/faction breadth audit.
- P10 packages a proven game rather than becoming a second implementation track.

## Human Design Gate policy

A later phase may be blocked by a design decision. That is not permission to skip to the next phase.

When blocked:

1. present the smallest decision needed,
2. provide 2-4 options and one recommendation,
3. explain downstream impact briefly,
4. record the owner's decision in `docs/DECISIONS.md`,
5. resume the same active phase.

P6 must use the same rule. Researchable questions such as format support, provenance, licensing notices, memory cost, and source availability are agent research. Material presentation choices such as overall art direction or illustration density become Human Design Gates only when multiple valid directions remain after P2-P5.

For major factions, the current direction (Pokémon-shaped persistent factions, approximately 4–6 planning lanes) is approved. Exact names, symbols, final count, primary antagonist, specific legendary/mythical links, leaders, and ending alignment remain later Human Design Gates rather than assumptions to invent early.

## Roadmap mutation

Roadmap mutations require explicit owner intent. When changed:

- update this file,
- update `PROJECT_STATUS.md`,
- update affected issues/contracts,
- record a decision entry if the change is product/design-significant.

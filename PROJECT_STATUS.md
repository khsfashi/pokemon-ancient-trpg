# Project Status

Last explanatory handoff update: **2026-08-14**

This file is the human-readable operational handoff. Live GitHub PR/issue/CI state wins when this file becomes stale.

## Project direction

Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.

Core direction currently approved by the owner:

- pre-modern / ancient setting,
- humans and Pokémon are not already integrated as ordinary modern partners,
- Pokémon can be dangerous, rare, and difficult to form relationships with,
- character creation and TRPG-like statistics/checks,
- dice-based outcomes,
- condition-driven events and random discoveries/insights,
- mobile-friendly play, with web/PWA acceptable and APK optional,
- occupations should fit the Pokémon setting rather than generic fantasy-magic classes,
- public GitHub repository with explicit unofficial/non-commercial/IP-boundary messaging,
- agents should progress autonomously from a short `next/continue` request and ask the owner only for material design decisions that cannot be objectively researched,
- resource planning is a first-class roadmap concern: source reconnaissance happens early, while final asset selection/pipeline/budget waits until the core game design is defined.

## Completed foundation

**P0 — Project governance and autonomous continuation protocol (#1) is complete.**

PR #11 merged the initial agent workflow, roadmap, decision log, design principles, reference protocol, status handoff, and README project/IP boundaries.

## Current program

**P1 — Reference, API, data-source, resource-source, and IP boundary research (#2) is the current core phase.**

P1 must build a source-backed registry for:

1. PokéAPI,
2. Pokémon Showdown,
3. sprite/icon repositories and provenance,
4. Pokémon cries/audio and other resource candidates at reconnaissance depth,
5. font/UI/audio/background resource ecosystems where relevant,
6. PokéRogue as an architectural/content/resource reference rather than authority,
7. comparable text/event-driven RPGs,
8. official Pokémon ancient-era/world-setting references,
9. Pokémon fan-project/IP/disclaimer boundaries.

For resource candidates, P1 records what exists, provenance/license/IP risk, maintenance/pinning characteristics, and whether the source should be adopted, adapted, rejected, deferred, or explicitly revisited in P6. It does **not** prematurely freeze art direction, exact asset density, public-repository bundling, or mobile memory budgets.

## Resource roadmap decision

The owner explicitly added a dedicated design-informed resource phase after P2-P5.

**P6 — Resource and asset strategy, sourcing, provenance, and mobile budget (#12)** owns the final production resource contract after world/rules/Pokémon/event design is sufficiently stable.

P6 will freeze:

- required / optional / deferred resource classes,
- Pokémon sprite/icon/audio choices where actually needed,
- project-owned background/UI/illustration/audio needs,
- source vs project-created vs generated production strategy,
- provenance / attribution / redistribution classification,
- public-repository inclusion versus build-time fetch/generation boundaries,
- resource manifest / stable IDs / preprocessing / validation,
- initial payload, decoded image/audio memory, preload/cache/eviction and related mobile budgets,
- constraints handed directly to P7 technical architecture.

Existing later issues retain their GitHub issue numbers but their phase labels move one slot:

- #7 is now **P7 Technical Architecture**,
- #8 is now **P8 Vertical Slice**,
- #9 is now **P9 Content Expansion**,
- #10 is now **P10 Mobile/Release**.

## Exact next lane

Continue **P1 / #2**. The first coherent P1 work should create the durable external-source/reference registry and begin current primary-source research. Resource sources should be included now at reconnaissance depth so P6 does not start from zero later.

P1 must produce source-backed `ADOPT / ADAPT / REJECT / DEFER` decisions, with `REVISIT IN P6` where final asset selection depends on P2-P5.

## Open Human Design Gates

None are required merely to perform P1 source research.

Known upcoming P2/P3 questions exist, but they must be asked only when their owning phase reaches them. Do not front-load unrelated design questionnaires.

Examples of future gates include exact era/technology tone, human terminology for Pokémon, lethality, core attribute model, and companion-acquisition philosophy.

P6 may also require a presentation Human Design Gate for choices such as overall art direction or illustration density, but only after P2-P5 provide enough context and objective source/performance research has been completed.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

See `docs/ROADMAP.md` for phase contracts.

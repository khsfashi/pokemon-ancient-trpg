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
- agents should progress autonomously from a short `next/continue` request and ask the owner only for material design decisions that cannot be objectively researched.

## Current program

**P0 — Project governance and autonomous continuation protocol (#1) is active.**

Active candidate:

- branch `agent/p0-governance`,
- draft PR #11 — `P0: establish autonomous project governance`.

P0 establishes:

- `AGENTS.md`,
- this status handoff,
- fixed roadmap,
- durable decision log,
- design principles,
- external-reference/API/IP research protocol.

## Exact next lane

After PR #11 is reviewed and merged, the exact next core phase is:

**P1 — Reference, API, data-source, and IP boundary research (#2).**

P1 should begin by mapping current primary sources for:

1. PokéAPI,
2. Pokémon Showdown,
3. sprite/icon data repositories and provenance,
4. PokéRogue as an architectural/content reference rather than authority,
5. comparable text/event-driven RPGs,
6. official Pokémon ancient-era/world-setting references,
7. Pokémon fan-project/IP/disclaimer boundaries.

P1 must produce source-backed `ADOPT / ADAPT / REJECT / DEFER` decisions before P2 worldbuilding freezes facts that depend on those sources.

## Open Human Design Gates

None are required to complete P0.

Known upcoming P2/P3 questions exist, but they must be asked only when their owning phase reaches them. Do not front-load unrelated design questionnaires.

Examples of future gates include exact era/technology tone, human terminology for Pokémon, lethality, core attribute model, and companion-acquisition philosophy.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #7 P6 → #8 P7 → #9 P8 → #10 P9`

See `docs/ROADMAP.md` for phase contracts.

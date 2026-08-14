# Project Status

Last explanatory handoff update: **2026-08-14**

This file is the human-readable operational handoff. Live GitHub PR/issue/CI state wins when this file becomes stale.

## Project direction

Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.

Current owner-approved direction:

- setting is intentionally **earlier than the Hisui-era precedent**;
- human society is an **early settled village / clan network**;
- settlements are small islands of relative safety connected by dangerous, locally known routes;
- ordinary material culture has an **iron-age / medieval-fantasy-like baseline**;
- iron tools and weapons help humans survive but do not make ordinary humans peers of Pokémon;
- narrow **Pokémon-dependent technology islands** can make one locality unusually advanced in one craft when the practice is causally traceable to official Pokémon capabilities/ecology and generations of human practice;
- technology islands are local, fragile and non-industrial; they do not imply a general modern technology tree or obedient Pokémon workforce;
- ancient-world lore follows **official evidence → bounded interpretation → explicit project extrapolation**;
- species presentation uses a **hybrid identification model**: stable official species identities coexist with unknown/descriptive encounter labels and local aliases until the player has sufficient knowledge;
- official species names become the stable player-facing label after identification, but local names can remain in dialogue/lore and the umbrella word `Pokémon` is not forced as universal diegetic vocabulary;
- humans and Pokémon are not integrated through normalized trainer culture or routine ownership;
- there is **no portable Pokémon containment technology**;
- Pokémon companionship is a core system with exactly **three visible slots**, while `0/3` through `3/3` are all valid run states;
- a complete human-only `0/3` run must remain fully playable and completable;
- companions physically travel with the player and impose species-specific logistical/social consequences;
- one Pokémon companion can be socially notable; several powerful companions can be exceptional; dragon/legendary-scale bonds can become legendary;
- the world uses **serious selective lethality**: ordinary defeat is not automatic death, but persistent injury, permanent impairment, critical condition and death are real possible consequences of sufficiently dangerous circumstances;
- companion death is possible but rare/high-impact rather than routine attrition;
- humans intentionally killing Pokémon is **contextual and culture/species-sensitive**: survival/defense can justify lethal action, while local taboos, rarity, intelligence, sacredness, ecology and necessity can change judgment;
- defeating a Pokémon does not imply killing it, and killing one does not imply automatic harvesting or loot;
- rare **human psychics / miracle-workers** are allowed as canon-compatible exceptional people, not as a generic wizard spell system;
- ancient Pokémon should feel materially dangerous; broad lineage-strength change remains species-specific/provisional until P4 rather than being falsely presented as universal canon;
- mandatory roster is National Pokédex **#001-#151**, with substantive P4 dossiers and meaningful P9 gameplay presence required for all 151;
- character creation, compact TRPG checks, dice outcomes, conditional events, discoveries/insights and persistent run state are core;
- public repository and non-commercial intent do not create Pokémon IP permission;
- resource provenance and mobile resource discipline remain first-class constraints.

## Completed phases

### P0 — Governance (#1) — COMPLETE

Autonomous continuation protocol, roadmap, decision log and Human Design Gate rules are established.

### P1 — Reference/API/data/resource/IP research (#2) — COMPLETE

P1 closed via PR #18. Important outputs include:

- `docs/SOURCE_REGISTRY.md`
- `docs/FAN_PROJECT_ENFORCEMENT_CASES.md`
- `docs/P1_RESOURCE_ECOSYSTEM_RECON.md`

Final production asset selection remains deferred to P6.

## Current phase

**P2 — World bible and setting contract (#3) is active.**

Primary working contract: `docs/WORLD_BIBLE.md`.

### Resolved P2 decisions

- **P2-HDG-001 / D-012:** early settled village / clan-network society.
- **P2-HDG-002 / D-013:** no portable containment; optional three-slot companion system; `0/3` is a first-class complete run.
- **D-014:** ordinary material floor is iron-age / medieval-fantasy-like.
- **D-015:** rare Sabrina-like human psychics / miracle-workers may exist; no universal magic system.
- **P2-HDG-003 / D-017:** iron-age baseline plus Pokémon-dependent local technology islands.
- **D-018:** canon-first worldbuilding derivation protocol.
- **P2-HDG-004 / D-019:** hybrid species identification/naming; unknown/local terminology before identification, stable official species name after identification.
- **P2-HDG-005 / D-020:** serious selective lethality; persistent/critical injury and death are real, but ordinary defeat is not automatic death.
- **P2-HDG-006 / D-021:** Pokémon killing ethics are contextual and culture/species-sensitive rather than universally taboo or universally routine.

### Supporting research and contracts

`docs/P2_TECHNOLOGY_CANON_RESEARCH.md` records the source research behind iron-era danger, Pokémon-driven crafts, human psychics and historical strength-change precedent.

`docs/P2_CANON_DERIVATION_AND_TECH_ISLAND_CONTRACT.md` binds narrow/local Pokémon-dependent technology and canon-versus-project-lore evidence classes.

`docs/P2_TERMINOLOGY_AND_IDENTIFICATION_CONTRACT.md` binds stable species identity, run knowledge, unidentified/identified presentation, and optional local aliases.

`docs/P2_LETHALITY_CANON_RESEARCH.md` records the official-setting boundary for injury, death, hunting and non-universal battle lethality.

`docs/P2_INJURY_AND_LETHALITY_CONTRACT.md` binds:

- escape/non-lethal defeat/injury/critical/death as distinct semantic outcomes;
- persistent and potentially permanent injury;
- explicit high-severity lethal paths rather than `failed roll = death`;
- danger communication/telegraphing where reasonably possible;
- rare/high-impact companion death rather than ordinary attrition;
- human-only survival tools under lethal stakes;
- no generic assumption that death means fainting or that resurrection is routine;
- downstream P3/P4/P5 requirements for health, durability, treatment and consequence ladders.

`docs/P2_KILLING_ETHICS_CONTRACT.md` binds:

- survival/defense/hunting/mercy/ecological necessity as potentially legitimate lethal contexts;
- species- and settlement-specific hunting, protection, sacredness, rarity and intelligence treatment;
- no universal `defeat = kill = loot` rule;
- hunters/defenders as valid roles without a generic monster-harvest progression loop;
- species-specific food/material and non-lethal resource treatment for P4;
- context-sensitive reputation/ecological/narrative consequences for P5;
- severe relational treatment of deliberate companion killing except where exceptional context changes the judgment.

### Provisional ancient-danger premise

`docs/DECISIONS.md` D-016 remains **PROVISIONAL** in wording, not in the desired danger tone.

The project intends ancient Pokémon to be frightening and often overwhelming even against iron-armed humans. What remains unproven is a universal canon claim that civilization genetically weakened every species. P4 therefore decides strength/history species by species and labels project extrapolation honestly.

## Exact next lane

Resolve **P2-HDG-007 — first-playable region identity**.

The first playable scope should remain **local and bounded** regardless of this choice: a small settlement cluster plus surrounding routes/ecologies, not an entire modern region. That scope rule follows the project's event-driven mobile vertical-slice direction and does not need a separate world-lore choice.

The remaining creative decision is how that local scope relates to modern Pokémon geography.

### A — Explicit ancient Kanto

- the game openly states that the local area is ancient Kanto;
- modern Kanto names/institutions need not exist yet, but the player knows the broad regional identity;
- later P4/P9 content can strongly lean into the original 151's Kanto association.

**Impact:** strongest Generation-I identity and easiest player comprehension, but every major geography/history choice risks being read as a claim about canonical ancient Kanto.

### B — Proto-Kanto locality **(recommended)**

- the playable land is explicitly understood by the project as territory that will much later belong to Kanto, but ancient people use local settlement/landscape names rather than a mature `Kanto` regional identity;
- the game can use recognizable long-term geographic/ecological anchors only where source evidence supports them;
- project-authored villages, routes, disasters, cultures and ecological boundaries remain free to differ radically from modern Kanto.

**Impact:** preserves the Gen-I/Kanto connection while giving the ancient setting enough distance to avoid pretending unsupported modern geography existed unchanged. Best fit with the canon-first derivation rule.

### C — Unnamed/original ancient region

- the first playable area is not committed to becoming any modern named region;
- Gen-I species are curated there because the project roster is #001-#151, not because the land is Kanto;
- geography, cultures and history are almost entirely project-authored.

**Impact:** maximum worldbuilding freedom and lowest risk of accidental ancient-Kanto pseudo-canon, but weaker Generation-I regional identity and less payoff from recognizable Kanto history/geography.

Recommendation: **B**.

It lets P2/P4 use `future Kanto` as a useful anchor without forcing ancient inhabitants to share modern regional labels or making every invented village an unsupported claim about canon history.

After region identity, remaining P2 closure work is expected to be mostly bounded contract depth rather than large new lore gates:

1. define the local first-scope boundary at contract level without naming every village/event;
2. freeze economy/medicine only to the precision P3-P5 require;
3. explicitly defer exact psychic ability numbers/ceiling to P3 unless world consistency requires one more gate;
4. run a P2 contradiction/exit audit before moving to P3.

Do not reopen containment, companion slots, iron-age floor, technology islands, canon-first derivation, hybrid identification, selective lethality, contextual killing ethics, or existence of rare human psychics unless the owner explicitly supersedes D-013/D-014/D-015/D-017/D-018/D-019/D-020/D-021.

## Later mandatory contracts

- **P3 / #4:** compact deterministic TRPG rules and character model; human-only, companion-assisted and rare bounded psychic paths; health model must represent non-lethal defeat through lethal outcomes.
- **P4 / #5:** shared Pokémon adaptation rules + `151/151` substantive ancient-setting dossiers with provenance/evidence classes, species-specific companionship, ancient-strength treatment, technology/craft hooks, identification/alias hooks, killing/hunting/material treatment and exceptional lethality/durability factors.
- **P5 / #6:** deterministic seeded narrative event-engine contract, including valid `0/3` companion runs, local-knowledge conditions, knowledge-dependent species rendering, context-sensitive lethal-act consequences and authored consequence ladders.
- **P6 / #12:** exact production resource/asset/provenance/mobile-budget contract.
- **P7 / #7:** technical architecture after P1-P6 contracts are stable.
- **P8 / #8:** first playable mobile vertical slice with visible three-slot companion UI and hybrid encounter-identification presentation.
- **P9 / #9:** replayable expansion + `151/151` meaningful authored gameplay presence.
- **P10 / #10:** release/mobile delivery hygiene and optional Android packaging.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

# Project Status

Last explanatory handoff update: **2026-08-14**

This file is the human-readable operational handoff. Live GitHub PR/issue/CI state wins when this file becomes stale.

## Project direction

Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.

Core direction currently approved by the owner:

- pre-modern / ancient setting,
- the intended society is **earlier than the Hisui-era precedent** shown in Pokémon Legends: Arceus; Hisui is an upper-bound comparison rather than the target template,
- humans and Pokémon are not already integrated as ordinary modern partners,
- the mandatory Pokémon roster is the complete original Generation I National Pokédex **#001-#151**, with detailed species-by-species ancient-setting dossiers required in P4 and meaningful gameplay presence for all 151 required by P9,
- Pokémon can be dangerous, rare, and difficult to form relationships with; 151-species coverage does not imply equal availability, universal catchability, or a collect-them-all goal,
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

## P1 progress

The durable source registry lives in `docs/SOURCE_REGISTRY.md`. Historical enforcement examples are kept in `docs/FAN_PROJECT_ENFORCEMENT_CASES.md` so later distribution decisions do not rely on folklore about why individual fangames survived or were taken down.

Completed/started source records now establish:

- **PokéAPI `api-data` → `ADAPT`** as the preferred broad structured-data baseline, consumed only through an explicitly pinned/imported/validated project-owned data path rather than runtime API calls,
- **Pokémon Showdown → `ADAPT`** as a complementary generation-specific battle-mechanics / learnset source, with exact version pinning and explicit filtering of nonstandard data,
- **PokéAPI `sprites` → `REVISIT IN P6`** as a high-coverage sprite/icon candidate whose repository-level notices do not establish unrestricted redistribution rights for underlying Pokémon imagery,
- **PokéAPI `cries` → `REVISIT IN P6`** as a technically convenient Gen 1-9 `.ogg` cry corpus whose own notice identifies the audio as The Pokémon Company's copyrighted content and therefore does not justify vendoring it during P1,
- **PokéRogue → `ADAPT` as reference only** for explicit data domains, test/tooling discipline, separation of client/assets/locales, and file/class-level provenance; its stack, gameplay model, AGPL code, and creative assets are not adopted wholesale,
- **Life in Adventure → `ADAPT` as product/UX reference only** for state-conditioned events/options, run goals, branching epilogues and collection/scoring surfaces; its closed-source implementation and conventional fantasy assumptions are not inferred or copied,
- **A Dark Room → `ADAPT` as event-system reference only** for explicit eligibility predicates, scene graphs, choices, costs/rewards and contextual event pools; direct callback/UI mutation and ambient randomness are specifically not inherited,
- **ink → `ADAPT` concepts only** for authoring/runtime separation, compiled narrative artifacts, host-driven choices and versioned story/save formats; no narrative runtime dependency is selected before P5/P7,
- **official Pokémon Legends: Arceus Hisui material → `ADAPT` as setting precedent** showing that an official long-ago setting can make close human–Pokémon coexistence and trainer-like battling uncommon while supporting survey work, special social roles and dangerous wild Pokémon; owner decision D-010 now places this project at an intentionally earlier social stage,
- **current Pokémon/Nintendo IP notices → conservative boundary**: unofficial/non-commercial/disclaimer language is not permission, current Pokémon Support asks that Pokémon IP not be used or associated with a project, and Nintendo's game-content sharing guidelines do not provide a fan-game license,
- **historical fan-project enforcement cases → caution against folklore**: Pokémon Uranium did accept Patreon support, but the evidence does not establish Patreon as the sole cause of enforcement; free Pokémon Prism still received direct pre-release intervention; Pokémon Essentials and Roblox-hosted Pokémon projects show that tools/assets/platform hosting can also become enforcement points; currently active donation-supported projects such as PokéRogue do not establish permission or a safe threshold.

The registry also fixes these cross-source rules:

- no community dataset is universally authoritative,
- conflicts must be resolved intentionally by the owning phase,
- repository/data licenses must stay separate from Pokémon asset/IP rights,
- resource availability is not equivalent to redistribution permission,
- unclassified third-party assets should default to unavailable until provenance is established,
- a comparable fan project's framework or content structure is evidence, not an architecture mandate,
- comparable games contribute bounded interaction/content lessons, not copyable content or automatic stack choices,
- official historical-setting precedent constrains what is plausible but does not pre-write this project's P2 world bible,
- non-commercial intent and non-affiliation notices must never be represented as an affirmative Pokémon IP license,
- surviving fan projects must not be reverse-engineered into a supposed enforcement-safe formula; provenance, separability, removability and conservative distribution are the engineering controls this repository can actually own.

P1 remains incomplete, but its non-resource research lanes are now bounded enough for later phases. The remaining material P1 work is the final general resource-ecosystem reconnaissance and P6 revisit-list completeness check.

## Generation I roster roadmap decision

Owner decision **D-011** fixes the mandatory species breadth at all original National Pokédex species **#001-#151**.

The detailed operating contract is `docs/GEN1_SPECIES_COVERAGE_PLAN.md`.

- **P4 / #5** first freezes shared Pokémon ecology/encounter/threat/bond rules, then authors and reviews a detailed ancient-setting dossier for every species. P4 cannot close until a coverage manifest proves `151/151` substantive dossiers.
- **P8 / #8** may use a curated representative subset; it proves the pipeline rather than full content breadth.
- **P9 / #9** must prove `151/151` meaningful authored gameplay presence. A database row alone does not count.
- All 151 do not have to be equally common, catchable, or companion-eligible. Legendary/Mythical species and ecologically rare species may appear through exceptional encounters, myths, traces, environmental effects, quests, or other setting-consistent forms.
- Post-Generation-I forms/evolutions/mechanics are not automatically in scope.

Per-species dossiers are expected to cover source provenance, ecology, human perception/culture, threat and encounter behavior, bond conditions, mechanical adaptations, narrative/event hooks, bestiary knowledge progression, and unresolved dependencies without presenting project-authored interpretation as canon.

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

Continue **P1 / #2** with its final resource-reconnaissance slice:

1. research current font ecosystems suitable for a Korean/English mobile text UI, including redistribution/subsetting/weight coverage and provenance,
2. research generic UI/icon sources that can remain project-owned/non-Pokémon-facing,
3. research general ambience/SFX/music/background/illustration source ecosystems at provenance and format/maintenance depth only,
4. compare another Pokémon sprite/icon source only if it adds materially different coverage or provenance evidence,
5. audit the resulting registry against #2's exit criteria and make the P6 revisit list explicit.

Do not freeze art direction, illustration density, final resource inventory, packaging method, or mobile memory budgets in P1. If the registry satisfies #2 after this slice, close P1 and move to P2; otherwise record only the concrete missing evidence instead of broadening research indefinitely.

## Open Human Design Gates

None are required merely to perform P1 source research.

Known upcoming P2/P3 questions exist, but they must be asked only when their owning phase reaches them. Do not front-load unrelated design questionnaires.

D-010 already fixes the direction that the setting is earlier than Hisui. Future P2 gates therefore concern **how much earlier and what that implies**, including technology baseline, human terminology for Pokémon, social organization, lethality, region identity and the degree/type of exceptional human–Pokémon bonds. P3 later owns the core attribute model and occupation/rules details.

D-011 fixes the Gen-I roster breadth, so future agents must not ask whether to cover all 151. P4 may still require narrowly scoped Human Design Gates for shared species-treatment rules or for specific genuinely ambiguous species interpretations after source research; those gates should be resolved before scaling contradictory dossiers.

P6 may also require a presentation Human Design Gate for choices such as overall art direction or illustration density, but only after P2-P5 provide enough context and objective source/performance research has been completed.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

See `docs/ROADMAP.md` for phase contracts.

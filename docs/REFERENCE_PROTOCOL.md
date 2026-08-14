# External Reference, API, Data, Resource, and Provenance Protocol

Use this protocol whenever work depends on Pokémon data/resources, external APIs/repositories, libraries/frameworks, legal/IP statements, comparable games, or technical behavior that may have changed.

## Principle

Do not repeatedly reinvent solved factual/engineering questions from model memory.

```text
active uncertainty
    ↓
existing project decisions/contracts
    ↓
current primary sources
    ↓
source/provenance/license assessment
    ↓
ADOPT / ADAPT / REJECT / DEFER / REVISIT IN P6
    ↓
project-owned contract/schema/test/manifest
```

## Source priority

Prefer, in order where applicable:

1. official Pokémon / Nintendo / relevant rights-holder material for official statements and canon,
2. official API/library/framework documentation,
3. upstream source repositories and their exact license/notices,
4. maintained primary datasets or project documentation,
5. maintainer-authored technical material,
6. secondary sources only when primary sources are unavailable or when comparing interpretation.

For technical questions, use current official documentation or upstream source rather than blogs/tutorials as the deciding authority.

## Required record for substantive references

For each source that materially shapes a contract or remains a viable later resource candidate, record:

- source/project name,
- canonical URL or repository,
- purpose in this project,
- exact fields/behavior/techniques/resource classes being considered,
- current license/provenance relevant to that use,
- Pokémon-IP caveat where applicable,
- update/version/pinning strategy,
- risks or known incompleteness,
- decision: `ADOPT`, `ADAPT`, `REJECT`, `DEFER`, or `REVISIT IN P6`,
- project contract/test/manifest or later phase that owns the absorbed result.

P1 should create the initial durable source registry.

## Decision meanings

### ADOPT
Use the source/technique substantially as-is because it fits the project and provenance/maintenance constraints.

For assets/resources, `ADOPT` still does not mean underlying Pokémon IP has been relicensed by the repository that indexes or hosts it. Redistribution is classified separately.

### ADAPT
Use the factual source or proven technique but normalize it into project-owned data/rules/contracts.

This is expected to be the common choice for Pokémon datasets.

### REJECT
Do not use it. Record why so later agents do not repeatedly rediscover the same unsuitable source.

### DEFER
Potentially useful, but the owning phase or design decision does not exist yet.

### REVISIT IN P6
The resource source is credible/relevant enough to keep, but final selection depends on P2-P5 world/rules/Pokémon/event design. P1 records enough evidence that P6 can resume from a bounded candidate list rather than researching from zero.

## API/data ingestion rule

Runtime gameplay should not depend on a remote Pokémon API unless a later architecture decision establishes a concrete need.

Default direction for canonical data is:

```text
external source
  → pinned/import step
  → validation + provenance
  → project-owned normalized/generated data
  → runtime indexes/caches
```

This keeps gameplay deterministic/offline-friendly and prevents source schema/network availability from becoming runtime game logic.

The final importer/build integration architecture is deferred to P7. P1 owns source understanding; P4/P5 own game-domain semantics; P6 owns resource-specific production constraints where applicable.

## Pokémon Showdown / PokéAPI / fan-project rule

Do not assume that one source is authoritative for every category.

Examples of questions P1 must answer with evidence:

- which source is best for species/forms/base stats/types,
- which source is best for moves/abilities/learnsets and generation-specific battle semantics,
- whether source records are canonical facts, community interpretation, or simulator implementation,
- which sprite/icon repositories provide only indexing/convenience versus evidence relevant to redistribution,
- which audio/resource repositories exist and what provenance they actually state,
- which parts of a fan-game repository are useful architectural/content/resource references and which are project-specific assumptions.

## Resource reconnaissance in P1

P1 should research resource sources broadly enough that later design is informed by what is realistically available, but it must not make design-dependent production choices too early.

At reconnaissance depth, investigate as relevant:

- Pokémon sprites by generation/form/shiny/front/back/animated variants,
- party/box/icon resources,
- type/move/status/item icons,
- Pokémon cries/audio sources,
- fonts and their redistribution rights,
- UI/icon libraries,
- background/illustration/audio source ecosystems,
- resource organization in relevant fan projects as reference rather than authority.

For each viable candidate, record availability, coverage, provenance/notices, pinning/update characteristics, likely processing needs, and whether it should be revisited in P6.

P1 must **not** freeze:

- final art direction,
- exact illustration/background density,
- exact runtime resource inventory,
- public-repository bundling policy,
- generated-art production policy,
- mobile payload/decode/audio/cache budgets,

when those choices depend on P2-P5.

## P6 production resource selection

P6 (#12) is the authoritative second pass for assets/resources. It revisits P1 candidates after P2-P5 and records for each selected asset class:

- whether it is required, optional, or deferred,
- selected source or production method,
- exact provenance/rights-holder/notice information,
- repository inclusion vs build-time fetch/generation classification,
- attribution requirements,
- pinned version/commit/hash where practical,
- preprocessing/format/dimension rules,
- stable resource ID / manifest ownership,
- validation/fallback behavior,
- runtime loading/cache/eviction expectation,
- mobile payload and decoded-memory/audio budget contribution.

If P6 discovers that P1 evidence is stale, recheck current primary sources rather than inheriting stale assumptions.

## Asset/IP boundary

A repository license can apply only to rights the licensor controls. A public sprite repository or fan project must not be treated as granting rights to underlying Pokémon characters, images, audio, names, or designs merely because its metadata/code has an open license.

For each asset source, distinguish:

- repository code license,
- metadata/data license if any,
- asset-file provenance,
- underlying Pokémon IP ownership,
- whether redistribution in this public repository is actually supported by the source's notices,
- whether the practical project policy should instead use a documented fetch/build step, placeholder, generated/project-owned resource, or omission.

When this is unclear, prefer referencing/import tooling or placeholder assets over copying a large asset corpus into the repository.

## Legal-information caution

Agents may summarize current official policies/notices and identify practical repository boundaries, but must not record `non-commercial = legally permitted` as a fact.

The README/disclaimer is a statement of project status and non-affiliation, not a license from a rights holder.

## Comparable-game research

Comparable projects are used to learn:

- event authoring patterns,
- save/run structure,
- content organization,
- mobile text ergonomics,
- failure/branching patterns,
- resource organization and loading patterns,
- testing/validation techniques.

Do not blindly copy narrative content, data, naming, architecture, resources, or balancing. Extract specific lessons and convert them into project-owned contracts.

## Freshness

Any fact likely to change — API fields, package versions, repository licenses, resource notices, deployment limits, framework behavior, official policy wording — must be rechecked when its owning implementation/design phase activates.

P1 is a baseline, not permission for P6/P7/P10 to rely on stale technical or provenance information months later.

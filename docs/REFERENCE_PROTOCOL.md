# External Reference, API, Data, and Provenance Protocol

Use this protocol whenever work depends on Pokémon data, external APIs/repositories, libraries/frameworks, legal/IP statements, comparable games, or technical behavior that may have changed.

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
ADOPT / ADAPT / REJECT / DEFER
    ↓
project-owned contract/schema/test
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

For each source that materially shapes a contract, record:

- source/project name,
- canonical URL or repository,
- purpose in this project,
- exact fields/behavior/techniques being considered,
- current license/provenance relevant to that use,
- Pokémon-IP caveat where applicable,
- update/version strategy,
- risks or known incompleteness,
- decision: `ADOPT`, `ADAPT`, `REJECT`, or `DEFER`,
- project contract/test that owns the absorbed result.

P1 should create the initial durable source registry.

## Decision meanings

### ADOPT
Use the source/technique substantially as-is because it fits the project and provenance/maintenance constraints.

### ADAPT
Use the factual source or proven technique but normalize it into project-owned data/rules/contracts.

This is expected to be the common choice for Pokémon datasets.

### REJECT
Do not use it. Record why so later agents do not repeatedly rediscover the same unsuitable source.

### DEFER
Potentially useful, but the owning phase or design decision does not exist yet.

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

The exact importer/build architecture is deferred to P6.

## Pokémon Showdown / PokéAPI / fan-project rule

Do not assume that one source is authoritative for every category.

Examples of questions P1 must answer with evidence:

- which source is best for species/forms/base stats/types,
- which source is best for moves/abilities/learnsets and generation-specific battle semantics,
- whether source records are canonical facts, community interpretation, or simulator implementation,
- which sprite/icon repositories provide only indexing/convenience versus rights to redistribute assets,
- which parts of a fan-game repository are useful architectural references and which are project-specific assumptions.

## Asset/IP boundary

A repository license can apply only to rights the licensor controls. A public sprite repository or fan project must not be treated as granting rights to underlying Pokémon characters, images, audio, names, or designs merely because its metadata/code has an open license.

For each asset source, distinguish:

- repository code license,
- metadata/data license if any,
- asset-file provenance,
- underlying Pokémon IP ownership,
- whether redistribution in this public repository is actually supported by the source's notices.

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
- testing/validation techniques.

Do not blindly copy narrative content, data, naming, architecture, or balancing. Extract specific lessons and convert them into project-owned contracts.

## Freshness

Any fact likely to change — API fields, package versions, repository licenses, deployment limits, framework behavior, official policy wording — must be rechecked when its owning implementation/design phase activates.

P1 is a baseline, not permission for P6/P9 to rely on stale technical information months later.

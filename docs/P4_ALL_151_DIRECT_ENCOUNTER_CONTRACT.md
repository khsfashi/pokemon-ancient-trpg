# P4 All-151 Direct Encounter Contract

Status: **BINDING**  
Owner decision: **D-034 / option B**  
Date: **2026-08-15**

## Decision

The complete mandatory Generation-I roster, National Pokédex **#001-#151**, must be **directly encounterable somewhere in the game**.

A species dossier may conclude that the species is not naturally contemporaneous with the ordinary earlier-than-Hisui setting, but that conclusion must **not** make the species permanently absent from playable content.

The binding distinction is:

```text
baseline-era natural presence != total-game encounter availability
```

and therefore:

```text
all_151_directly_encounterable == true
all_151_natural_baseline_spawns == false
all_151_guaranteed_in_one_run == false
all_151_companion_eligible == false
```

## What counts as a direct encounter

For the final 151/151 encounter-coverage gate, the player must be able to encounter an actual living individual of the species in a playable event or encounter and have at least one meaningful direct interaction opportunity.

Indirect presence alone does **not** satisfy the direct-encounter gate. A myth, carving, fossil, rumor, footprint, corpse, historical record, dream image, or second-hand report may still be valuable content, but it cannot be the species' only gameplay presence.

Direct encounter does **not** imply that the species is:

- a routine random spawn;
- native to the opening locality;
- common in the era;
- capturable or containable;
- companion-eligible;
- defeatable or killable by ordinary means;
- guaranteed to appear in every run.

D-013 remains authoritative for companionship and the absence of portable containment technology.

## Presence classes

P4 dossiers should separate ordinary-era presence from total-game encounter availability.

### 1. Contemporaneous natural/local species

Species whose ancient presence is source-backed or conservatively derived may use ordinary ecology, route, migration, territory, den, hunting, ritual, settlement-edge, or other species-appropriate encounter channels.

### 2. Extremely rare but contemporaneous species

Legendary, mythical, apex, sacred, migratory, hidden, or otherwise exceptional natural species may require rare authored conditions, route knowledge, reputation, quests, discoveries, or deterministic seed/state gates. They remain actual inhabitants or visitors of the era where the dossier supports that interpretation.

### 3. Unsupported/unknown baseline presence

If the original form's presence in this era is unsupported, P4 must preserve that uncertainty. It must not invent a normal ancient population merely to satisfy roster coverage.

Instead, at least one **exceptional chronology-anomaly encounter route** must remain possible unless later official evidence provides a cleaner contemporaneous explanation.

### 4. Explicitly noncontemporaneous or artificial species

If official evidence places the species' creation after the project baseline, the project must preserve that origin rather than inventing an ancient duplicate origin, lost laboratory, or native population.

Such a species remains encounterable through an **exceptional chronology anomaly / displacement event** that brings an actual individual into the playable era without rewriting its canonical origin.

## Chronology-anomaly rules

Chronology anomalies are a narrow content permission, not a normal world rule.

They must be:

- **exceptional** — never ordinary ecology or a generic random-encounter table entry;
- **authored and stateful** — triggered by explicit event conditions and deterministic run state/seed where procedural selection is used;
- **telegraphed as abnormal** — characters and the world should be allowed to recognize that something is wrong, impossible, unknown, or unprecedented;
- **non-retroactive** — an anomalous visitor does not prove that its species naturally existed in the era;
- **non-industrializing** — a future/artificial species does not smuggle modern laboratories, power grids, cyberspace infrastructure, Poké Ball culture, or advanced science into ordinary society;
- **non-proliferating by default** — one displaced individual does not create a stable ancient breeding population unless a later explicit dossier/event decision supports that consequence;
- **non-generic** — the player does not gain a reusable universal time-travel command merely because chronology anomalies can occur.

The exact cause of a particular anomaly may be source-backed, inferred, deliberately mysterious, or tied to later authored content. P4 does not need to freeze one universal metaphysical explanation for every case.

## Batch 05 consequences

The Batch 05 chronology stress cases are reinterpreted as follows without changing their ordinary-era source classifications:

- **#100 Voltorb / #101 Electrode** — original-form ancient natural presence remains `unsupported/unknown`; direct encounter is nevertheless permitted through an exceptional chronology anomaly unless later evidence supports a contemporaneous route.
- **#137 Porygon** — advanced-science artificial origin remains authoritative; no ancient cyberspace or lost computer culture is introduced. A real Porygon may appear through an exceptional chronology anomaly.
- **#150 Mewtwo** — human genetic-manipulation origin remains authoritative; Mewtwo is not ancient wildlife and no ancient genetics laboratory is invented. A real Mewtwo may appear through an exceptional chronology anomaly.

Grimer, Muk, Koffing and Weezing retain their previously approved bounded ancient ecology and do not require chronology anomalies merely to be encounterable.

## P4 authoring requirement

Every completed dossier must ultimately answer two separate questions:

1. **Could this species ordinarily exist in the baseline era/local ecology?**
2. **By what playable route can the player directly encounter it somewhere in the total game?**

A valid answer to question 1 may be `no`, `unknown`, `unsupported`, or `noncontemporaneous`. A valid final answer to question 2 may **not** be `never` for any mandatory #001-#151 species.

P4 source-review classification therefore remains evidence-driven; encounter availability is a separate game-content guarantee.

## P5 / P9 implications

P5 must support deterministic rare-event gates capable of representing chronology anomalies without turning them into routine random spawns or a universal time-travel system.

P9's final Generation-I coverage audit must prove:

```text
direct_encounterable_species_count == 151
```

The existing requirement for meaningful species-specific content remains. Direct encounter is now an additional minimum, replacing any interpretation that a mandatory species could be satisfied solely through myths, traces, records, fossils, or other indirect presence.

The opening settlement-centered locality still does not need to contain all 151 species, and a single run does not need to expose all 151 encounters.
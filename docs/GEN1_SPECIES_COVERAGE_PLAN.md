# Generation I Species Coverage Plan

This document makes the owner's Generation I scope decision operational.

## Coverage contract

The project must cover **all original National Pokédex species #001-#151** as first-class setting content.

This means:

- P4 must produce a reviewed species dossier for every one of the 151 species.
- P9 must verify that every species has at least one meaningful authored in-game presence.
- Coverage does **not** mean every species is common, catchable, companion-eligible, or available in every region.
- Legendary and Mythical species may be represented through rare encounters, traces, myths, ecological consequences, event chains, or other setting-appropriate forms when ordinary availability would contradict the world.
- Regional forms, later-generation evolutions, Mega Evolution, Gigantamax, and other post-Gen-I additions are not part of the mandatory 151-species baseline unless a later owner decision explicitly adds them.

The authoritative coverage key is the original National Pokédex number, inclusive of #001 Bulbasaur through #151 Mew.

## Why P4 owns the dossiers

P4 already owns Pokémon source-data boundaries, ecology, encounters, danger, bond, companionship, and human-era bestiary presentation. Species-specific setting work therefore belongs there rather than being postponed to generic content expansion.

The purpose is to avoid two failure modes:

1. systems are designed generically and later species are forced into shallow one-line adaptations, or
2. species flavor is written first and quietly invents incompatible rules from one Pokémon to another.

P4 should first freeze the shared Pokémon-domain contract and dossier schema, then author all 151 dossiers against the same rules.

## Per-species dossier schema

Every species dossier must distinguish **source-backed canon facts** from **project-authored ancient-setting interpretation** and should contain, where applicable:

1. **Identity and provenance**
   - National Pokédex number and canonical species identity
   - evolution family and relevant canonical relationships
   - source references / confidence notes for facts used

2. **Ancient-era ecological role**
   - habitat and environmental requirements
   - activity pattern and seasonal behavior where justified
   - feeding / resource interaction
   - social structure or solitary/group behavior
   - predator, prey, competitor, symbiotic, or environmental relationships
   - ecological signs a human may notice before an encounter

3. **Human perception and cultural role**
   - how ordinary people interpret or fear the species
   - occupations or communities likely to understand it better
   - myths, omens, taboos, rituals, folk explanations, or practical knowledge
   - beneficial, harmful, sacred, feared, hunted, avoided, or tolerated relationships
   - what is genuinely known versus rumor or misconception

4. **Threat and encounter profile**
   - baseline danger category
   - aggression / territoriality / avoidance tendencies
   - encounter triggers and warning signs
   - escalation and de-escalation behavior
   - likely consequences of mishandling an encounter
   - rarity and encounter context

5. **Bond and companionship profile**
   - whether companionship is plausible at all in this era
   - prerequisites for trust, habituation, rescue, ritual, upbringing, or other bond paths
   - reasons the species might stay with a human
   - reasons it may reject or abandon a human
   - social cost, practical burden, and danger of keeping it nearby
   - whether ordinary ownership/capture framing is inappropriate

6. **Mechanical adaptation hooks**
   - traits derived from typing, abilities, moves, size, or behavior that matter to the TRPG
   - checks, resistances, hazards, utility, tracking clues, environmental effects, or combat implications
   - evolution prerequisites when the modern-game mechanism is unsuitable for this era
   - explicit notes where source mechanics should not be translated literally

7. **Narrative and event hooks**
   - at least three reusable event premises or state hooks when the species supports them
   - peaceful, dangerous, and unusual/rare interaction possibilities where appropriate
   - links to occupations, settlements, factions, environments, items, or other species
   - possible discoveries/insights the player can gain from observing it

8. **Presentation / bestiary layer**
   - what the player can initially know
   - what observation, survival, scholarship, rumor, or bonding can reveal later
   - bestiary progression notes rather than a modern encyclopedic Pokédex dump
   - resource needs to revisit in P6, if species-specific presentation requires them

9. **Open questions and consistency links**
   - unresolved Human Design Gates
   - dependencies on P2 world rules or P3 mechanics
   - cross-species consistency requirements
   - contradictions requiring source or design review

Not every field must contain invented detail. A dossier should explicitly mark `unknown`, `not applicable`, or `intentionally unresolved` rather than filling gaps with unsupported pseudo-canon.

## Authoring sequence

P4 should not attempt 151 unrelated essays in Pokédex order from the start.

### Step 1 — freeze shared contracts

Before large-scale species writing, stabilize:

- canon-versus-derived data policy,
- ecology vocabulary,
- threat scale,
- encounter-state vocabulary,
- bond/companionship model,
- evolution adaptation rules,
- bestiary knowledge/progression model,
- dossier schema and validation rules.

### Step 2 — pilot a deliberately diverse sample

Author a small cross-section covering materially different archetypes before scaling. The pilot should include examples such as:

- common small wildlife,
- plant/fungus-like life,
- aquatic species,
- insect colony species,
- large territorial predator,
- human-adjacent or tool-using species,
- Ghost/Psychic or otherwise culturally ambiguous species,
- fossil/ancient-extinction case,
- Legendary/Mythical case.

The exact pilot species are chosen in P4 after P2/P3 constraints exist.

### Step 3 — batch the full #001-#151 roster

After the pilot passes review, produce dossiers in manageable batches. Batches should be grouped by ecology/evolution family or other consistency relationships where useful rather than blindly by number.

Each batch must run:

- source/provenance check,
- dossier-schema completeness check,
- cross-species consistency review,
- contradiction scan against P2/P3/P4 rules,
- coverage-manifest update.

### Step 4 — 151/151 closure audit

P4 cannot close until the manifest proves:

- `151 / 151` mandatory species have dossiers,
- no dossier is still placeholder-only,
- evolution-family rules are internally consistent,
- legendary/mythical treatment is explicitly designed,
- all blocking Human Design Gates are resolved or deliberately deferred to an owning later phase,
- P5 can consume species tags/hooks without bespoke hard-coded exceptions.

## P9 in-game realization requirement

P4 completion alone is design coverage. P9 owns broad authored-content realization.

By P9 exit, every #001-#151 species must have at least one meaningful gameplay presence recorded in the content coverage manifest, for example:

- direct encounter,
- conditional event,
- ecological trace/sign,
- quest or rumor chain,
- settlement/cultural relationship,
- bestiary discovery,
- environmental consequence,
- rare or legendary narrative presence.

A species does not satisfy this requirement merely because its source-data row exists.

The realization method must follow its rarity, ecology, threat, and bond dossier. The game must not become a conventional `catch all 151` checklist unless a later owner decision explicitly changes that philosophy.

## Tracking artifacts expected in P4/P9

When those phases become active, create machine-checkable or easily auditable manifests with at least:

- National Pokédex ID,
- species name,
- dossier status,
- source-review status,
- ecology status,
- threat/encounter status,
- bond status,
- narrative-hook status,
- P6 resource follow-up flag,
- P9 gameplay-presence status,
- unresolved dependency/gate references.

The preferred invariant is simple:

```text
mandatory_species_ids == {1..151}
P4_exit => dossier_complete_count == 151
P9_exit => gameplay_presence_count == 151
```

## Scope discipline

This 151-species commitment is a **breadth floor, not a shallowness excuse**. If schedule pressure appears later, reduce region count, event count, visual density, or optional forms before silently dropping mandatory species dossiers.

Likewise, the 151-species commitment is not permission to broaden the project to later generations by default. Any roster expansion beyond the original #001-#151 requires an explicit owner decision and roadmap impact review.

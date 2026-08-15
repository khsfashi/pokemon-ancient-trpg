# P4 Magneton Composite Identity Contract

Status: **ACTIVE — binding P4 species-specific composite identity rule**  
Date: **2026-08-15**  
Decision: **P4-HDG-003 / D-033 — one Magneton entity with three contributor histories**  
Owner choice: **A**  
Tracks: **#5**

## 1. Decision

When three Magnemite form one Magneton, the resulting Magneton is one canonical active Pokémon entity and occupies exactly **one visible companion slot**.

The three contributing Magnemite are not erased from history. Their prior names, bonds, injuries, learned behaviors, major events, relationship milestones and other authored persistent facts are retained as **component provenance** attached to the resulting Magneton.

The runtime/domain model therefore distinguishes:

```text
active_entity_count == 1
visible_companion_slot_cost == 1
canonical_species_key == magneton
contributor_count == 3
contributor_history_retained == true
three_simultaneous_enemy_stat_blocks == false
```

This is a bounded Magneton-family rule. It does not create a generic slot-compression mechanic for arbitrary Pokémon.

## 2. "Three brains" presentation boundary

The intended player-facing feel may resemble **one creature with three brains / three parallel viewpoints**.

That phrase is a presentation analogy, not a new anatomical canon claim.

What P4 may safely author:

- each Magnemite contributor can leave a recognizable behavioral tendency, preference, learned response or relationship memory;
- Magneton can show internal disagreement, asynchronous attention, alternating initiative, or rapid consensus among its three recognizable components;
- a player who knew one or more contributors can sometimes recognize which component is responding through position, movement, sound, gaze or learned habit;
- prior relationship events with each contributor remain queryable for later narrative events;
- the combined Magneton can act as one coordinated entity even when its components express different immediate reactions.

What P4 must **not** claim without later official evidence or a new owner decision:

- that Magneton literally has exactly three biological brains;
- that it has exactly three souls;
- that the contributors' consciousnesses fuse, die, copy, reincarnate or become a hive mind by a universal metaphysical law;
- that all multi-bodied Pokémon follow the same identity model.

Preferred internal wording:

```text
three_cognitive_contributors == presentation_and_history_model
literal_three_brains == unproven
universal_soul_count == intentionally_unresolved
```

## 3. Active profile after evolution

After formation, Magneton uses one active individual profile based on the Magneton species baseline.

Contributor state is retained according to these rules:

- **names/epithets:** preserved as contributor history; Magneton may later acquire its own collective name;
- **bond/relationship:** prior bonds remain historical inputs to the resulting relationship state and event eligibility; they are not summed as a numeric power bonus;
- **injuries:** contributor injuries remain provenance and may create an explicit current Magneton condition only when the transformed body still makes that consequence fictionally meaningful;
- **learned behavior:** relevant learned habits may survive as Magneton individual traits when compatible with the new body/capabilities;
- **major flags/events:** preserved for deterministic narrative continuity;
- **species stats:** replaced by the Magneton species baseline plus explicit resulting individual variation; three Magnemite stat blocks are never added together.

P5/P7 must not repeatedly merge or recompute contributor histories every render. The composite transition should resolve once as an authoritative state transition and cache the resulting active profile plus immutable/queryable contributor provenance.

## 4. Companion-slot and exploit boundary

Composite evolution must not become a mechanical inventory optimization.

Therefore:

- three companion Magnemite occupying three slots can, through a rare source-supported authored evolution event, become one Magneton occupying one slot;
- the two newly empty slots remain ordinary empty slots, but the player is not entitled to trigger the transformation on demand merely to free capacity;
- evolution remains rare, event/state-driven and species-specific under D-032;
- adding unrelated Magnemite to a bonded Magneton is not a generic upgrade action;
- Magneton does not count as three companions for checks, rewards, carrying bonuses or action economy;
- contributor provenance does not create three independent turns unless a later combat/event contract explicitly models a species capability that way.

## 5. Separation and reversal

Current reviewed official material supports Magnemite gathering into Magneton but does not establish a general, controllable reversal into the same three prior Magnemite.

Accordingly:

```text
generic_split_action == false
automatic_reversion == false
recover_three_prior_active_entities == unsupported
```

A later source-backed exceptional event may revisit separation only through a new species-specific review. D-033 itself grants no de-evolution/splitting mechanic.

## 6. Relationship presentation

For narrative purposes, a Magneton that formed from known companions should feel continuous rather than replaced.

Recommended event language can expose continuity through details such as:

- one component repeating a familiar hovering habit;
- another reacting first to a person it trusted before evolution;
- conflicting component orientations before the whole body commits to a choice;
- three different warning motions resolving into one coordinated action;
- a familiar damage mark remaining visible on one component where physically plausible.

This supports the owner's desired "three brains" feel while keeping the exact internal consciousness mechanism intentionally unresolved.

## 7. Regression invariants

```text
magneton_species_entity_count == 1
magneton_visible_companion_slots == 1
contributor_count == 3
contributor_history_retained == true
contributor_bonds_erased == false
three_magnemite_stats_summed == false
three_independent_actions_assumed == false
literal_three_brains_declared_canon == false
universal_multi_body_identity_rule_created == false
generic_split_or_deevolve_command == false
slot_compression_as_player_command == false
```

This contract resolves P4-HDG-003 and unblocks Batch 04 full-schema authoring.
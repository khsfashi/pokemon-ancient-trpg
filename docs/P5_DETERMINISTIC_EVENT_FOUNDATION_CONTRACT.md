# P5 Deterministic Event Foundation Contract

Status: **ACTIVE — P5 foundation contract**  
Date: **2026-08-16**  
Phase: **P5 — Narrative event engine and seeded run model (#6)**  
Contract version: `p5-event-contract-v1`

## 1. Purpose

P5 defines the deterministic, data-driven event layer that turns already-authoritative P2/P3/P4 state into replayable text-RPG scenes.

This contract freezes the foundation before large event authoring. It deliberately does **not** choose the P7 framework, storage library, UI technology, or production asset path.

Binding goals:

```text
same_complete_saved_state_plus_same_action_plus_same_content_pack == same_authoritative_result
event_content_is_data_driven == true
individual_story_events_hardcoded_in_engine == false
eligibility_consumes_rng == false
per_render_or_per_frame_event_scanning == false
state_changes_are_committed_atomically == true
hidden_state_is_not_exposed_by_presentation_payloads == true
```

No Human Design Gate is required for this foundation: it specifies deterministic execution and ownership boundaries without changing P2/P3/P4 player-facing rules.

## 2. Upstream authority and state/hook inventory

P5 consumes upstream rules. It does not re-implement them inside event content.

| Authority | P5 may read/query | P5 may request through typed domain commands | P5 must not redefine |
|---|---|---|---|
| P2 world contracts | current locality/route state, local knowledge/permissions, relationships and setting flags that have been explicitly materialized in run state | explicit world-state transitions owned by the relevant P2/P7 domain adapter | terminology, technology baseline, killing ethics, lethality tone, canon derivation |
| P3 character/attribute contracts | seven Attributes, compact Competences, Origin/Practice/background hooks | approved character-state transitions | Attribute scale or competence stacking rules |
| P3 dice/check contract | governing Attribute, at most one Competence, bounded Context, static/opposed target inputs | `2d6 + Attribute + Competence + Context`, four margin bands, doubles overlay | dice shape, margin bands, Fortune/Trouble semantics |
| P3 survival contract | Vitality, Fatigue, Fear, active Injury records and legal recovery/stabilization state | approved damage/pressure/injury/recovery commands | death/injury causality or severity rules |
| P3 inventory/economy | notable items, Provisions, Remedies, Materials, derived/cached Load | approved add/remove/consume/resource/load-affecting commands | generic loot, universal money, exhaustive weight simulation |
| P3 progression | advancement points, keyed milestones, explicit growth eligibility | approved milestone/eligibility/advancement commands | kill-XP, visible levels, use-count XP |
| P3 rare Gift state | foreshadowing, awakening state, family/facets when present | approved Gift transitions | generic psychic class/stat/mana/spell system |
| P3 emergency items | carried item identity, trigger tags and legal preparation/reaction/recovery windows | approved item use + consequence-mitigation commands | rerolls, die replacement, post-hoc result upgrades |
| P4 species model | stable species identity, dossier classification, six-axis profile version, capability/hazard tags, encounter hooks, evolution references | species/encounter/companion transitions exposed by P4 adapters | raw base stats as human roll modifiers, generic scaling, generic loot |
| P4 companionship | three visible slots, slot occupancy, species-specific willingness/capability/logistical facts that are actually in state | approved companion-state transitions | containment, forced ownership, universal companion bonus |
| P4 D-034 / chronology | direct-encounter route eligibility, anomaly flags/chains, species encounter classification | authored exceptional encounter transitions | routine anomaly spawns, retroactive ancient-native origin, universal time travel |

P5 owns only narrative-execution state that has no upstream rules owner:

- stable narrative flags/counters;
- event occurrence counts and last-resolved transition;
- bounded recent-event history used for anti-repeat weighting;
- explicit event-chain queue/pending chain step;
- event cooldown metadata expressed in saved deterministic counters;
- pending event-instance state needed to survive reloads without rerolling;
- replay/debug trace records and content-validation metadata.

Knowledge, inventory, health, progression, Gift, relationship, companion, species and world mutations remain typed domain operations even when an event causes them.

## 3. Semantic state references and declared dependencies

P5 event definitions use **semantic references**, not assumptions about the eventual serialized object layout.

Each event declares:

```text
reads[]   = semantic state refs or registered predicate refs used by eligibility/choices/checks
writes[]  = P5-owned state refs directly written by this event
domain_commands[] = typed upstream commands the event is permitted to request
```

Rules:

1. A condition may read only a declared `reads[]` dependency.
2. P5 content may directly write only P5-owned narrative/event state declared in `writes[]`.
3. P2/P3/P4-owned state changes must use a registered typed domain command.
4. A domain command validates its own invariants before commit; event data cannot bypass them with raw field assignment.
5. Runtime serialization paths are a P7 concern. P5 semantic refs are stable adapter keys.

This keeps content data-driven without turning event files into an unrestricted scripting language.

## 4. Content pack, identity and versioning

### 4.1 Content pack pin

Every authoritative save pins:

```text
content_pack_id
content_pack_version
content_digest_sha256
p5_contract_version
run_seed
transition_seq
```

Exact replay requires the pinned content pack or an explicit migration that states replay compatibility is lost.

`content_digest_sha256` is computed from the normalized production event records after build-time validation. Records are ordered by stable identity; mappings are canonically key-ordered; strings are UTF-8; numeric gameplay fields are integers. Presentation source formatting does not affect the normalized digest.

### 4.2 Stable IDs

Production IDs use lowercase ASCII and match:

```text
[a-z0-9][a-z0-9._-]{0,63}
```

Required stable identities:

- `event_id` — never reused for unrelated narrative semantics;
- `choice_id` — stable within an event lineage;
- `check_id` — stable within a choice lineage;
- `outcome_id` — stable authored result identity;
- `condition_id` when a reusable named condition exists;
- `chain_id` and `chain_step_id` for explicit chains;
- `item_id`, `species_id`, milestone IDs and other upstream refs from their owning domains.

An event also has integer `content_revision >= 1`. Compatible prose/tuning may increment revision. A change that invalidates saved pending instances, changes identity meaning, or changes the normalized authoritative result for an existing pinned pack requires a new content-pack version and migration policy.

## 5. Discrete evaluation model

Event eligibility is evaluated only from explicit authoritative triggers after a committed state transition or chain continuation.

Foundation trigger kinds:

```text
run_started
location_entered
travel_step_committed
rest_completed
player_action_committed
check_resolved
companion_state_changed
knowledge_changed
milestone_committed
event_resolved
event_chain_advanced
```

A later contract may add a trigger only if its state transition is explicit and replayable.

Rules:

- rendering, scrolling, animation, layout, app focus and frame ticks never evaluate event eligibility;
- the build/runtime maintains a trigger index so only events registered for the current trigger are candidates;
- one committed transition may emit an ordered list of declared triggers;
- each trigger receives deterministic `evaluation_ordinal` starting at `0` within that transition;
- individual field writes do not recursively scan the event catalog;
- explicit chains use `event_chain_advanced` and a queued target rather than global rescanning.

## 6. Conditions, visibility and hidden information

Condition evaluation is pure, deterministic and RNG-free.

Allowed condition shape is a validated expression tree over:

- boolean composition: `all`, `any`, `not`;
- typed comparisons against declared semantic state refs;
- registered pure domain predicates;
- event count/history/cooldown predicates;
- explicit content-pack constants.

Forbidden in conditions:

- wall-clock time;
- system locale or device state;
- network results;
- unordered collection iteration as semantics;
- random draws;
- free-form executable scripts;
- reads not declared by the event.

Choice disclosure is separated from authority:

```text
visibility_when   -> whether the choice is rendered at all
availability_when -> whether a rendered choice can currently be committed
disclosure        -> public | secret for referenced condition diagnostics
```

A player-facing event view contains only resolved presentation booleans and approved public reason IDs. It must not serialize secret condition expressions, secret state values, hidden candidate weights, unrevealed event IDs, or debug-only rejection reasons.

`hidden_until_available` is valid for a choice whose existence itself is secret. `visible_disabled` is valid only when the unavailable reason is intentionally player-visible and does not disclose secret state.

## 7. Foundation event record

The implementation-neutral authoritative shape is:

```text
EventDefinition
  event_id
  content_revision
  tags[]
  triggers[]
  reads[]
  writes[]
  domain_commands[]
  eligibility
  weight
    base_points
    modifiers[] { when, add_points }
  repeat_policy
    max_occurrences?
    once_per_run?
    cooldown_after_transitions?
    recent_window_penalty?
  chain_membership?
  presentation_ref
  choices[]
    choice_id
    visibility_when?
    availability_when?
    unavailable_reason_id?
    resolution
      kind = direct | check | opposed | blocked
      check?
      outcome_map
    preparation_window?
    reaction_window?
    recovery_window?
  outcomes[]
    outcome_id
    p5_effects[]
    domain_commands[]
    enqueue_chain_steps[]
    post_commit_triggers[]
```

`presentation_ref` points to content-owned text/localization/presentation data; presentation text is not used as authoritative identity.

Weights and numeric modifiers are integers. Floating-point weight math is forbidden in authoritative selection.

## 8. Deterministic weighted selection and RNG ownership

### 8.1 Why streams are keyed

P5 does not use one opaque global mutable PRNG cursor for all gameplay. A new debug draw or unrelated content subsystem must not silently perturb later dice.

Authoritative randomness is split into keyed channels such as:

```text
event.select
check.d6
insight.select
content.roll
```

Eligibility itself never owns an RNG channel.

### 8.2 Run seed

`run_seed` is persisted as exactly 16 bytes, serialized as 32 lowercase hexadecimal characters. P7 may choose how a new seed is generated, but once a run begins the saved seed is authoritative.

### 8.3 `p5-rng-v1` raw draw

For one raw 64-bit draw, build these bytes in exactly this order:

```text
ASCII("pokemon-ancient-trpg/p5-rng-v1")
0x00
run_seed[16 bytes]
0x00
ASCII(content_pack_id)
0x00
ASCII(content_pack_version)
0x00
U64_BE(origin_transition_seq)
0x00
ASCII(trigger_id)
0x00
ASCII(channel)
0x00
ASCII(subject_id)
0x00
U64_BE(draw_index)
```

Compute SHA-256 over the complete byte sequence. `raw_u64` is the first eight digest bytes interpreted unsigned big-endian.

`draw_index` starts at `0` per unique stream key `(origin_transition_seq, trigger_id, channel, subject_id)` and advances only inside that stream.

This contract does not use cryptographic security as a gameplay requirement; SHA-256 is used here because it supplies a stable, language-independent keyed-counter derivation with no hidden mutable cursor.

### 8.4 Unbiased bounded integer

To draw uniformly from `[0, bound)` where `bound > 0`:

```text
limit = 2^64 - (2^64 mod bound)
repeat:
    x = next raw_u64 from the stream
until x < limit
return x mod bound
```

Every rejected and accepted raw draw index is recorded in authoritative debug trace.

### 8.5 Weighted event choice

For an evaluation:

1. obtain the trigger-indexed candidates;
2. evaluate eligibility without RNG;
3. compute each non-negative integer effective weight;
4. discard weight `0` candidates;
5. sort remaining candidates by `event_id` ascending bytewise ASCII;
6. if none remain, select no event and consume no selection draw;
7. if exactly one remains, select it and consume no selection draw;
8. otherwise sum checked integer weights into `total_weight`;
9. draw `target = uniform_bounded(total_weight)` from `event.select`, subject `eval:<evaluation_ordinal>`;
10. select the first sorted event whose half-open cumulative interval contains `target`.

`total_weight` must fit unsigned 63-bit range. Overflow is a validation/runtime content error, never wraparound.

A pinned content pack plus identical saved state/action therefore yields the same candidate list, weights, target and selected event.

## 9. Pending event instances and reload determinism

An event that waits for player input becomes a persisted `PendingEventInstance` before control returns to presentation.

It pins at least:

```text
instance_id
event_id
content_revision
content_pack_id/version/digest
origin_transition_seq
trigger_id
evaluation_ordinal
phase
resolved choice visibility/availability view
selected choice_id if already committed
completed RNG draw records
completed check result if already rolled
pending consequence/reaction window if one exists
```

`instance_id` is deterministically derived from the pinned pack, run seed, origin transition, evaluation ordinal and selected event identity. It is not a random UUID.

While a gameplay event is pending, unrelated authoritative gameplay transitions are not allowed. Non-authoritative UI navigation is allowed.

If the process closes after dice are rolled but before a reaction choice, reload restores the recorded dice/check result and pending consequence. It never rerolls because the player reopened the app.

## 10. Choice, check, reaction and commit order

The authoritative order is:

```text
trigger
→ eligibility snapshot
→ deterministic event selection
→ persist pending event instance if player input is required
→ choice commit / revalidation
→ preparation window
→ check draw(s), if the approach is roll-worthy
→ margin band
→ Fortune/Trouble overlay
→ determine provisional outcome/consequence
→ offer legal reaction window, if any
→ persist rolled result before waiting for reaction input
→ reaction choice and required consumption
→ determine final outcome/effect plan
→ prevalidate every domain command and P5 write
→ atomically apply ordered domain commands
→ atomically apply declared P5 narrative writes
→ enqueue explicit chain steps
→ update cooldown/count indexes
→ append resolved event history last
→ clear pending instance
→ increment transition_seq for the committed resolution
→ emit declared post-commit triggers
```

A `blocked`/structurally impossible approach is rejected before any check RNG is consumed. It may return a public authored reason, but it does not fake difficulty inflation to make the impossible action merely unlikely.

If prevalidation fails, no domain command or P5 write is committed. Because RNG is keyed and prior draw records remain attached to the pending instance, retrying after a content/runtime fix does not manufacture new dice.

### 10.1 P3 check binding

A P5 check record must identify:

```text
check_id
governing_attribute_ref
competence_ref?          # at most one contribution
context_components[]     # collapsed to the P3 bounded Context result
static_difficulty OR registered opposed_target_ref
outcome_id for setback / costly_partial / full / exceptional
fortune_overlay_outcome?
trouble_overlay_outcome?
```

The event engine does not change P3 arithmetic or reroll rules.

### 10.2 Emergency item binding

Preparation/reaction/recovery windows follow D-030 exactly. A reaction item may modify a legal consequence; it never edits the already-recorded dice, margin band or spike marker.

## 11. Effect ownership and atomic state mutation

P5-owned direct effects are intentionally small, for example:

```text
narrative.flag.set
narrative.flag.clear
narrative.counter.add
event.chain.enqueue
```

All upstream mutations use a registered `domain_command_id` plus typed arguments. Representative namespaces may include `p2.*`, `p3.*` and `p4.*`, but the command registry must bind each command to its upstream contract before production content may use it.

Event authors cannot introduce `set_vitality_raw`, `set_companion_slot_raw`, `set_species_native_raw`, or similar bypass operations.

Effect lists are ordered and the order is authoritative, but the entire final plan is prevalidated before the first write. This preserves explicit authored sequencing while preventing partial commits.

## 12. Event history, cooldowns and anti-repeat

P5 must not require scanning an unbounded event log for routine eligibility.

Authoritative compact indexes:

```text
event_count[event_id]
last_resolved_transition[event_id]
recent_event_ids ring buffer
active_chain queue
pending_event_instance?
```

The recent ring buffer has a content-pack constant `recent_history_capacity` in `1..64`; foundation fixtures use `16`. Long-lived story facts belong in explicit flags/counters, not in searches over an unlimited transcript.

Foundation repeat controls:

- `once_per_run`;
- `max_occurrences`;
- `cooldown_after_transitions` using saved `transition_seq` only;
- integer `recent_window_penalty` against the bounded ring;
- explicit flag/counter conditions.

Wall-clock cooldowns are forbidden as authoritative gameplay semantics unless a later owner-approved rule explicitly introduces real-time play.

## 13. Discovery and insight mechanics

Random insight/discovery uses the same deterministic machinery:

1. an authored event/check outcome opens a discovery pool;
2. eligibility reads only evidence the character can actually possess under D-019/P3 knowledge safeguards;
3. eligible entries are stable-ID sorted;
4. integer weights use a dedicated `insight.select` stream;
5. selected insight writes through a typed knowledge/discovery command or P5-owned narrative flag;
6. replay trace records the pool, weights and draw.

A high roll or random insight cannot create omniscient Pokédex knowledge with no evidence source.

## 14. Replay and debug trace contract

Two views exist:

- **authoritative debug trace** — complete diagnostic data, allowed to contain secret eligibility reasons;
- **player-safe trace** — only information the player has legitimately observed.

The authoritative trace for an evaluation/resolution records enough to reproduce or diagnose:

```text
p5_contract_version
content_pack_id/version/digest
run_seed
origin_transition_seq
trigger_id + evaluation_ordinal
action_id and canonical action arguments or action digest
candidate event IDs
per-candidate eligibility result
per-candidate effective integer weight
sorted eligible set
RNG channel/subject/draw_index/raw_u64/accepted flag/bounded result
selected event_id + content_revision
instance_id
choice visibility/availability decisions
committed choice_id
check inputs, individual d6, total, margin, band, doubles overlay
legal preparation/reaction/recovery options
reaction choice and consumption
final ordered effect plan
domain-command validation results
state digest before and after commit
chain/cooldown/count/history updates
validation/runtime error code if resolution aborts
```

Secret debug fields must never be copied wholesale into player-facing logs.

## 15. Validation failures

Build-time validation is mandatory before a content pack can be authoritative.

At minimum, reject:

| Code | Failure |
|---|---|
| `P5V001` | duplicate or malformed stable ID |
| `P5V002` | dangling event/choice/check/chain/item/species/milestone/domain reference |
| `P5V003` | unknown trigger or trigger with no deterministic state-transition owner |
| `P5V004` | negative weight, all-zero required pool, checked-weight overflow or floating authoritative weight |
| `P5V005` | RNG used by eligibility/visibility/availability |
| `P5V006` | undeclared semantic state read |
| `P5V007` | undeclared P5 write or direct write to P2/P3/P4-owned state |
| `P5V008` | unregistered/invalid domain command or argument |
| `P5V009` | invalid P3 check: missing Attribute, multiple Competence modifiers, out-of-contract outcome mapping, illegal reroll/result edit |
| `P5V010` | reaction/recovery operation scheduled in an illegal P3 timing window |
| `P5V011` | provably contradictory choice/event conditions or a referenced outcome that cannot be reached by its declared resolution shape |
| `P5V012` | chain cycle without an explicit bounded occurrence/cooldown/exit condition |
| `P5V013` | hidden/secret condition serialized into a player-visible diagnostic or disabled reason |
| `P5V014` | non-deterministic source such as wall clock, network state, device state or unordered iteration used authoritatively |
| `P5V015` | event effect plan can partially commit without atomic prevalidation |
| `P5V016` | chronology-anomaly event authored as routine ecology/spawn, retroactive native-origin proof, or reusable generic time-travel command |
| `P5V017` | D-034 direct encounter represented only by trace/myth/dream/record rather than a living playable interaction where the event claims direct coverage |
| `P5V018` | companion branch assumes containment, forced ownership, or a generic stacking companion modifier |

Warnings may exist for balance/content quality, but these failures block the normalized content pack.

## 16. Performance and allocation contract

P5 execution is event-driven and cache-friendly by construction:

- trigger → prebuilt candidate index; no whole-catalog per-frame scan;
- parsed condition ASTs and domain-ref bindings are compiled/cached once per loaded content pack;
- stable candidate ordering is precomputed where static, then filtered without reparsing IDs;
- event counts/last-transition indexes are O(1) keyed lookups;
- recent anti-repeat checks use a bounded ring of at most 64 IDs;
- no runtime JSON/YAML parsing is required in a render loop;
- no continuous species, hazard, hunger, companion or chronology simulation is introduced;
- RNG uses discrete SHA-256 derivations only when an authoritative random decision is actually requested;
- the exact runtime representation/allocation strategy belongs to P7, but it must preserve these asymptotic/ownership properties.

## 17. Required semantic fixtures

`docs/P5_FOUNDATION_SEMANTIC_FIXTURES.yaml` is normative test data for this contract. It covers:

1. ordinary peaceful weighted interaction;
2. hazardous encounter with a P3 check and legal reaction window;
3. rare D-034 Mew direct encounter gate;
4. Porygon chronology anomaly without rewriting origin;
5. companion-aware branch while preserving the `0/3` path;
6. structurally invalid approach that consumes no RNG.

Fixture IDs prefixed `fixture.` are **test-only**. They do not establish production locality, item, NPC, ecology or Pokémon lore.

## 18. Frozen foundation invariants

```text
P5_contract_version == p5-event-contract-v1
run_seed_serialized_bytes == 16
weighted_selection_uses_integer_points == true
weighted_selection_bias_uses_rejection_sampling == false
eligibility_rng_draw_count == 0
one_global_mutable_rng_cursor == false
pending_roll_can_reroll_after_reload == false
P3_dice_can_be_edited_by_event_content == false
direct_upstream_raw_state_write_allowed == false
unbounded_history_scan_required == false
routine_chronology_anomaly_spawn_allowed == false
zero_companion_run_supported == true
```

The line `weighted_selection_bias_uses_rejection_sampling == false` means **no selection bias remains because rejection sampling is used**; implementations should expose the clearer positive assertion `unbiased_bounded_draw_uses_rejection_sampling == true` in tests.

## 19. Downstream work after this foundation

The next P5 batch should bind an explicit production domain predicate/command registry to the P2/P3/P4 contracts and turn this semantic record into the exact normalized content schema/validator surface used by P7/P8.

P6/P7 must not begin until the full P5 exit audit proves the event schema, adapter registry, fixtures, replay semantics and validation catalog are complete enough to implement independently from presentation.

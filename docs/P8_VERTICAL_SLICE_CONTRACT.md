# P8 First Playable Vertical Slice Contract

Status: **ACTIVE — P8 Batch 01 implementation contract**  
Date: **2026-08-17**  
Issue: **#8 — First playable vertical slice**  
Contract version: `p8-vertical-slice-v1`

## 1. Purpose

P8 turns the frozen P1-P7 design, event, resource, and architecture contracts into the first coherent playable run.

This batch does **not** invent a final major faction, freeze new persistent world canon, or broaden the Generation-I content target. It freezes the engineering and content-integration boundary required to implement one phone-sized production-path slice without demo-only shortcuts.

The success condition is not “several screens work independently.” It is:

```text
one coherent run
→ uses authoritative P3 character/check state
→ uses the shared P5 event path
→ uses typed P2/P3/P4 mutations
→ saves and resumes exact pending state
→ presents optional Pokémon media through P6/P7 resource ownership
→ reaches an ending with zero companions still valid
```

## 2. Upstream authority

P8 consumes rather than redefines:

- `docs/P2_FIRST_REGION_CONTRACT.md` for the settlement-centered proto-Kanto locality and dangerous travel boundary;
- `docs/P3_CHARACTER_CREATION_CONTRACT.md` for the three formative prompts, deterministic Origin + Learned Practice resolution, reveal, and explicit specialization;
- the remaining P3 contracts for checks, pressure/injury, inventory, progression, emergency windows, and companion-independent human viability;
- P4 species/domain contracts and dossiers for Pokémon ecology, capability, hazard, direct interaction, and companionship semantics;
- `p5-event-contract-v1` for trigger-driven eligibility, keyed randomness, pending events, checks, atomic effects, and replay behavior;
- P6 resource budgets and redistribution boundaries;
- `p7-architecture-v1` for pure TypeScript authority, Preact presentation, IndexedDB saves, Workbox PWA behavior, generated indexes, resource caches, and browser validation;
- `docs/WORLD_CONTENT_AND_FACTION_CONTRACT.md` for the mixed-world content balance.

If this contract conflicts with an upstream owner decision, the upstream owner decision wins and P8 must be amended.

## 3. First-slice scope envelope

The first playable slice is intentionally local and dense.

It must contain:

- exactly one primary starting settlement;
- at least one meaningful travel corridor outside the settlement safety envelope;
- at least two meaningfully different local/ecological contexts;
- exactly three formative character-creation prompts;
- a curated minimum of four P3-approved Origins and four P3-approved Learned Practices for the first implementation pass;
- a curated Pokémon subset of at least three and at most eight species selected from already-approved P4 records;
- exactly three visible companion slots while preserving a complete `0/3` route;
- a coherent ending that can be reached without gaining a companion.

The P8 subset is an implementation proving set, not a replacement for broader P3/P4/P9 coverage. P9 still owns complete authored world breadth and all `151/151` living direct-interaction paths.

Exact settlement name, local NPC names, exact species subset, prose, and local disposable details may be authored in later P8 batches. They do not become durable setting canon merely by existing in the slice. Any fact that would constrain future content authors as a persistent world rule still requires the normal Human Design Gate.

## 4. Required mixed-world run

One normal run must be able to traverse the following functional chain. Exact narrative ordering may vary where replayability benefits, but every proof must occur on production paths.

1. **Character creation**
   - three fiction-first formative prompts;
   - deterministic Origin + Learned Practice resolution;
   - background reveal;
   - four explicit attribute increases within the P3 starting cap;
   - one personal trained Competence;
   - final confirmation creates authoritative run state.

2. **Settlement / social pressure**
   - at least one ordinary human/social event whose immediate cause is not Pokémon;
   - at least one persistent relationship, obligation, reputation-like state, permission, or faction-linked thread changes through typed owner-domain commands.

3. **Travel / survival**
   - leaving the settlement commits an explicit travel/location transition;
   - at least one survival/environmental event is evaluated from a P5 trigger rather than UI polling;
   - at least one roll-worthy approach uses the P3 check arithmetic through the P5 check record.

4. **Persistent thread**
   - a prior choice must change a later event, permission, warning, route option, relationship state, or ending input;
   - this may use a local relationship or an approved faction design lane without freezing a final P9 major-faction identity.

5. **Pokémon ecology / direct interaction**
   - at least one living Pokémon is directly encountered through P4-compatible ecology/direct-interaction semantics;
   - direct interaction must not imply capture, ownership, combat, or companionship;
   - the event uses the same P5 execution surface as human/social content.

6. **Mixed human/Pokémon causality**
   - at least one event combines a real human motive/conflict with a Pokémon ecological constraint or consequence;
   - the event must not reduce to “Pokémon secretly caused every ordinary problem.”

7. **Ending**
   - at least one coherent slice ending resolves from accumulated authoritative state;
   - zero companions remains a supported completion state;
   - ending selection may inspect explicit flags/relationships/knowledge/route state but must not reconstruct truth by scanning an unbounded transcript.

## 5. Authoritative runtime boundary

P8 gameplay authority remains framework-independent pure TypeScript.

The intended dependency direction is:

```text
Preact view
  → typed player intent
  → application/run coordinator
  → P3/P4 domain operations + P5 event runtime
  → atomic authoritative state transition
  → IndexedDB persistence boundary
  → derived presentation view
  → Preact render
```

Hard rules:

- `App.tsx`, components, hooks, DOM events, animation, and CSS are never gameplay authority;
- story events are data, not hard-coded component branches;
- faction, ordinary human, survival, Pokémon, and mixed events do not receive separate event engines;
- event eligibility is evaluated only on committed authoritative triggers;
- no per-frame or per-render event scan is allowed;
- no runtime whole-event-catalog scan is required for ordinary trigger evaluation;
- UI navigation cannot advance `transition_seq`;
- runtime network/Pokémon API access is forbidden for authoritative content;
- stable normalized indexes are loaded/built once and reused.

## 6. P5 execution obligations

The first runtime implementation must preserve the P5 sequence rather than implementing a simplified demo resolver.

At minimum P8 must support the subset needed by the slice:

```text
committed trigger
→ trigger-indexed candidate lookup
→ pure/RNG-free eligibility
→ deterministic selection
→ persisted PendingEventInstance when input is required
→ choice commit/revalidation
→ direct or P3-bound check resolution
→ outcome/effect-plan construction
→ prevalidation
→ atomic typed domain commands + P5 writes
→ event indexes/history update
→ pending clear
→ transition_seq advance
→ ordered post-commit triggers
```

If the slice uses a reaction window, the rolled result must be persisted before waiting for the reaction exactly as P5 requires. If the first authored slice does not need a reaction window, the runtime design must not block adding the already-contracted P5 capability later.

## 7. Character creation implementation rule

P8 must not replace the P3 character-creation contract with a visible class selector.

The first implementation may curate the available Origin/Practice records, but it must prove the real data shape:

- formative answers carry stable IDs and hidden authoring tags;
- resolution is deterministic and UI-independent;
- chosen answer IDs and resolved background IDs are saved;
- all seven attributes start at `1`;
- exactly four legal increases are applied with starting cap `3`;
- Practice grants one trained Competence at `+1`;
- the player selects one different personal trained Competence at `+1`;
- final character state is inspectable before confirmation;
- no background grants a required Pokémon companion.

## 8. Save and replay obligations

P8 is not complete if save/resume works only between scenes.

Required evidence must eventually include:

- save/reload after ordinary committed transitions;
- save/reload while an event is pending player choice;
- save/reload after any completed RNG/check result that waits for later input when such a window is present;
- exact preservation of run seed, content pack pin, transition sequence, event indexes, and pending instance fields;
- deterministic replay fixture: same complete starting state + same action sequence + same pinned content produces the same authoritative result;
- failure closed for invalid/incompatible save content rather than silent repair that changes gameplay history.

IndexedDB remains the authoritative browser save store. Service-worker cache and localStorage do not own gameplay state.

## 9. Resource and presentation obligations

P8 may finally show production-intended Pokémon presentation, but it cannot relax P6/P7 safeguards.

Binding caps remain:

```text
pokemon_media_initial_payload          = 0
compact_icon_decoded_cache            <= 384 KiB
per_encounter_atlas_decoded           <= 2 MiB
max_resident_encounter_atlases        = 2
encounter_atlas_decoded_cache         <= 4 MiB
combined_optional_pokemon_decoded     <= 4.375 MiB
required initial P6-owned resources   <= 3 MiB
```

Additional rules:

- optional media loads by stable `resource_id` through the P7 resource owner;
- duplicate in-flight requests continue to coalesce;
- no whole-151 preload is introduced by the slice;
- no default runtime resize, atlas repack, or per-render atlas JSON parse is introduced;
- missing optional Pokémon media changes presentation only, never event eligibility, checks, or outcomes;
- public repository/build redistribution remains limited by P6 provenance/clearance policy.

## 10. Performance boundary

The vertical slice is small, but implementation must scale toward P9 without replacing core paths.

Therefore:

- trigger candidate lookup is indexed (`O(k)` in candidates for the emitted trigger, not `O(all events)` every frame);
- stable records and parsed content are cached/reused;
- derived lookup maps are created once per content-pack load, not per render;
- bounded event history/indexes remain the authority for repeat/cooldown checks;
- no all-151 species scan occurs for routine event selection;
- no duplicate long-lived decoded image instances are intentionally retained;
- authoritative state transitions avoid unnecessary clone/serialization loops inside rendering.

Optimization must not trade away deterministic replay or typed ownership.

## 11. Validation gates

P8 retains every applicable upstream gate. A later P8 batch may add stricter checks but may not silently disable them.

Required P8 exit evidence includes:

- P5 contract validation still passing;
- P6 resource validation still passing;
- P7 architecture validation still passing;
- strict TypeScript typecheck;
- pure-runtime unit tests;
- deterministic replay fixtures;
- pending-event save/reload fixture;
- `0/3` complete-run fixture;
- production build;
- phone-sized Chromium and WebKit E2E of the coherent mixed-world loop;
- manual usability review of the phone-sized creation/event/result flow;
- final P8 exit audit mapping issue #8 acceptance criteria to evidence.

## 12. Explicitly deferred

Batch 01 intentionally does not freeze:

- final settlement name or map coordinates;
- final major-faction identity, doctrine, leader, symbol, or antagonist role;
- final P9 faction roster;
- all P9 event breadth;
- all `151/151` direct-interaction content;
- exact final P8 prose;
- exact curated species IDs;
- optional Android wrapper work;
- a backend, router, global state library, or a second gameplay engine.

## 13. Batch 01 acceptance summary

```text
p8_contract_version == p8-vertical-slice-v1
new_persistent_world_canon_frozen == false
final_major_faction_identity_frozen == false
primary_settlement_count == 1
meaningfully_distinct_contexts >= 2
formative_prompt_count == 3
curated_species_count == 3..8
visible_companion_slots == 3
zero_companion_completion_required == true
all_151_required_in_p8 == false
shared_p5_event_engine_for_all_content_pillars == true
ui_is_authoritative == false
event_evaluation_is_transition_driven == true
runtime_remote_pokemon_api == false
p6_p7_resource_caps_relaxed == false
p9_owns_151_breadth == true
```

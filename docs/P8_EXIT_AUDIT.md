# P8 Exit Audit — First Playable Vertical Slice

Date: **2026-08-17**  
Issue: **#8 — First playable vertical slice**  
Integration contract: **`p8-vertical-slice-v1`**  
Exit verdict: **PASS**

## Exit question

Does the repository now contain a playable phone-sized mobile-web/PWA vertical slice that proves the accepted world, rules, event, Pokémon, resource, save and technical contracts can operate together through one coherent production-intended run without a bespoke demo engine?

**Yes.**

P8 closes on one intentionally bounded Reedbank vertical slice. It proves integration depth, not final content breadth. P9 remains responsible for full-world replayability, persistent major faction realization and authored living direct-interaction paths for all `151/151` Generation-I species.

## Accepted implementation batches

| Batch | Scope | Evidence | Verdict |
|---|---|---|---|
| 01 | vertical-slice contract, scope guard and implementation sequence | `docs/P8_BATCH_01_AUDIT.md`, PR #106 | PASS |
| 02 | framework-independent authoritative gameplay runtime | `docs/P8_BATCH_02_AUDIT.md`, PR #107 | PASS |
| 03 | coherent authored mixed-world content + deterministic replay | `docs/P8_BATCH_03_AUDIT.md`, PR #108 | PASS |
| 04 | phone Preact flow + explicit P7 save/resource integration | `docs/P8_BATCH_04_AUDIT.md`, PR #109 | PASS |
| 05 | dual-browser production/PWA proof + mobile usability review | `docs/P8_BATCH_05_AUDIT.md`, PR #110 | PASS |

## Proven playable loop

The accepted slice uses one shared event pipeline for a coherent sequence containing the issue #8 content families:

```text
three formative character memories
→ deterministic Origin + Learned Practice
→ legal starting specialization
→ Reedbank settlement / human social pressure
→ persistent local relationship promise
→ travel / survival cost
→ event eligibility / pending choice
→ direct choice and static checked choice
→ committed consequence
→ Weedle ecology / direct interaction
→ mixed orchard-keeper motive + Beedrill/Rattata ecology
→ return ending with accumulated state
```

The route is not a Pokémon encounter demo chain. The opening storehouse dispute is explicitly human-caused; the survival route spends provisions; the millkeeper promise persists as relationship state; Pokémon ecology appears later; and the orchard event combines human boundary interests with Pokémon activity.

## Shared authority and event-engine proof

Gameplay authority remains framework-independent TypeScript. Preact renders derived views and dispatches player intents through `P8BrowserSession`; it does not implement story-specific outcome logic.

The production slice reuses the accepted P5/P8 runtime surfaces for:

- cached trigger-index candidate lookup;
- pure eligibility evaluation;
- deterministic event selection;
- persisted pending-event identity;
- direct-choice resolution;
- P3-bound static checks using frozen P5 RNG primitives;
- typed domain command/effect prevalidation;
- atomic consequence commit;
- event count/cooldown/recent/chain bookkeeping;
- ordered post-commit triggers.

Ordinary human, relationship, travel, Pokémon and mixed events use the same event records/runtime. There is no separate faction-event, fantasy-event or Pokémon-event executor.

## Deterministic save/reload proof

P8 proves continuity at both headless and real-browser layers.

Batch 03 replay fixtures prove repeated execution from the same starting state/action sequence produces equivalent authoritative checkpoints and serialized authority.

Batch 04 proves every authored transition can persist/resume both exact pending and exact committed session state through the P7-compatible save boundary.

Batch 05 then proves the real production browser path in Chromium and WebKit:

```text
pending event persisted before input       = exact reload PASS
committed transition persisted             = exact reload PASS
completed checked consequence at seq 5     = exact reload PASS
P8 pending authority backup export/import  = canonical round trip PASS
PWA shell with origin physically down      = exact pending resume PASS
```

Authoritative `u64/u63`/RNG wire correctness remains owned by the accepted P7 boundary; Batch 05 reruns the inherited browser-save regression in both engines and does not introduce a new serialization path.

## Zero-companion completion proof

The complete production browser route finishes in both required engines with:

```text
transition_seq       = 7
current_locality     = reedbank-settlement
provisions           = 2
companions           = 0/3
direct_interactions  = 3
zero_companion_flag  = true
pending_event        = none
```

The player directly interacts with Weedle, Beedrill and Rattata without being required to recruit any of them. The ending explicitly reports `Zero-companion completion: proven`.

This preserves the project rule that three visible companion slots are a capacity, not a mandatory party size.

## Phone Chromium/WebKit production proof

P8 Batch 05 Validation run **`32009086550`** passed the functional head `4aaaf55c979453314f3ce3999aa26f68c1ef1ed6`.

```text
Chromium                   = 151.0.7922.34
WebKit                     = 26.5
viewport                   = 390x844
P8 backup proofs           = 2/2 PASS
P8 full/check proofs       = 4/4 PASS
P8 physical-offline proofs = 2/2 PASS
```

Both engines complete the real Preact route from character creation through ending on production preview. Representative event/fallback/ending states are also checked for no horizontal overflow and visible button dimensions of at least `44x44`; authored interactive controls use a CSS minimum height of `50px`.

## Manual mobile usability evidence

The required manual review was performed against the actual Preact presentation source and phone CSS, with the dual-browser `390x844` execution used as a layout backstop. It is not represented as separate physical-device latency certification.

The six Batch 05 review questions all pass:

1. **Formative choices** — fiction-first button copy is shown; hidden mappings are explicitly not exposed.
2. **Reveal/specialization density** — Origin/Practice reveal is separated from compact specialization selection and final sheet review.
3. **Touch comfort** — primary/secondary/choice controls are full-width with `50px` minimum height and the browser test independently requires all visible controls to measure at least `44x44`.
4. **Check/consequence clarity** — committed consequence, optional check band, outcome text and Continue action are visually/semantically separated.
5. **Missing Pokémon media** — deterministic explanatory text fallback leaves choices active; both complete browser runs ship with zero Pokémon media.
6. **Stateful ending** — the summary surfaces companions, direct interactions, provisions, committed-event count, observed Pokémon, remembered relationships and zero-companion completion.

Full itemized review: `docs/P8_BATCH_05_AUDIT.md`.

## P6/P7 resource and architecture preservation

P8 consumes rather than replaces the accepted technical/resource boundaries.

The final production build remains:

```text
backend       = 0
serverless    = 0
pokemon_media = 0
```

The P7 `ResourceLoader` remains the only browser resource owner. Optional Pokémon media availability is presentation-only and cannot mutate gameplay authority. The P8 app does not preload all 151, perform runtime image resize/repack or create a second decoded-resource cache.

Batch 05 reruns the inherited resource proof in Chromium and WebKit. Accepted measured decoded state remains inside the frozen P6 limits:

```text
compact cache entries     = 1
compact decoded bytes     = 15,232 B
encounter cache entries   = 2
encounter decoded bytes   = 3,211,264 B
max resident encounters   = 2
coalesced identity        = true
deterministic fallback    = true
```

The P7 save and PWA regressions also pass in both engines, including values beyond JavaScript safe-integer range, canonical backup round trip, physical-origin-outage shell reload and waiting-worker update safety.

No backend, state library, router or gameplay framework fork was added to make P8 pass.

## Issue #8 acceptance mapping

| Issue #8 requirement | Concrete evidence | Verdict |
|---|---|---|
| smallest end-to-end run proving contracts together | Reedbank production vertical slice through Preact/P8/P5/P7 | PASS |
| pre-modern Pokémon world RPG rather than encounter demos | human dispute + relationship + travel/survival + ecology + mixed motive/ecology in one chain | PASS |
| character creation | three formative prompts → Origin/Practice → legal specialization | PASS |
| settlement/social pressure | `slice.opening.market_call`, `slice.social.steward_request` | PASS |
| travel/survival | `slice.travel.leave_settlement`, provision cost + locality transition | PASS |
| event eligibility | shared trigger-index eligibility/runtime path | PASS |
| choice | persisted P5 choice view + production browser selection | PASS |
| dice/check | Weedle Sense + Tracking branch through frozen P3/P5 check contract | PASS |
| consequence | atomic committed outcome + visible consequence state | PASS |
| faction-linked clue/pressure or relationship consequence | millkeeper promise/relationship state without prematurely freezing a P9 major faction | PASS |
| Pokémon ecology/direct encounter/bond interaction | Weedle + Beedrill + Rattata direct interactions | PASS |
| run ending | `Return to Reedbank` + accumulated-state summary | PASS |
| one tightly bounded starting area | Reedbank + Old Levee + Windbreak Orchard local contexts | PASS |
| small curated background set | four Origins + four Learned Practices | PASS |
| small curated Pokémon roster | Weedle #013 / Beedrill #015 / Rattata #019 | PASS |
| approved P6 resource path | optional media only through P7 ResourceLoader; production media payload zero | PASS |
| conditional branches/replayability | alternate checked branch + deterministic replay fixtures | PASS |
| human/social immediate cause not Pokémon | storehouse tally dispute | PASS |
| survival/environmental event | exposed old levee + provision spend | PASS |
| persistent human relationship thread | millkeeper promise and remembered relationship state | PASS |
| Pokémon ecological/direct-interaction event | Weedle crossing | PASS |
| mixed human motive + Pokémon ecology | orchard boundary / Beedrill + Rattata | PASS |
| save/resume | exact pending/committed/check reload + backup + PWA resume | PASS |
| deterministic tests | Batch 02/03/04 authority/replay/session suites + Batch 05 regression | PASS |
| manual mobile usability evidence | itemized Batch 05 source-level review + dual-browser phone execution backstop | PASS |
| production-intended paths only | shared P5 runtime, P7 save/resource/PWA, production static output | PASS |
| P6 provenance/resource constraints | no uncleared Pokémon media output; inherited resource guards rerun | PASS |
| full `0/3` path valid | dual-browser completed ending with zero companions | PASS |
| no separate event engines | one P5/P8 event runtime for all content pillars | PASS |
| playable mobile web build | production static PWA completes full route Chromium/WebKit | PASS |

## Final P8 invariants

The Batch 05 implementation plan required these explicit exit assertions:

```text
mixed_world_loop_proven == true
shared_event_engine_proven == true
deterministic_save_reload_proven == true
zero_companion_completion_proven == true
phone_chromium_webkit_proven == true
p6_resource_boundaries_preserved == true
p7_architecture_preserved == true
p9_151_breadth_not_prematurely_claimed == true
```

All eight are **true** at P8 exit.

## P9 boundary remains open

P8 deliberately proves only a curated three-species slice and a local relationship lane. It does **not** claim:

- a complete world-content set;
- final major faction names/structures;
- several persistent P9-scale faction lanes;
- encounter realization for all 151 species;
- universal companion/capture availability;
- final balance/release readiness.

Those remain issue **#9 — Full world content + factions + complete Gen-I realization**.

## Exit verdict

**P8 COMPLETE / PASS.**

The repository is ready to begin P9 by scaling the proven contracts rather than reopening them. P9 should first freeze a bounded world-content/faction/151-realization production plan and machine-checkable coverage manifests before authoring large volumes of content.

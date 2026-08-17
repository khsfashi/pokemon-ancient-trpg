# P8.2 Batch 05 Exit Audit — Player Portrait + Persistent Expedition HUD

Date: **2026-08-17 KST**  
Implementation PR: **#121**  
Parent owner-playtest issue: **#118**  
Result: **PASS**

## Scope accepted

Batch 05 converts the previous minimal run strip into a persistent player/expedition surface and gives the player a stable cosmetic identity before the journey begins.

Accepted player-facing behavior:

- three initial portrait choices during character creation;
- selected portrait shown on the final character review and throughout the active journey;
- persistent Origin / Practice / specialization identity;
- current locality;
- Vitality current/max with a readable bar;
- Fatigue presented with explicit stamina/exertion wording;
- Fear and Injury state;
- Provisions / Remedies / Materials;
- current Load vs Comfortable Load and burden warning;
- three companion slots and current companion count;
- expandable seven-attribute and trained-competence profile;
- explicit danger help explaining Incapacitated, Critical Injury, and Death semantics;
- Korean and English surfaces;
- selected portrait survives browser reload/resume for the active journey.

## Authority boundary

No second HP/stamina/inventory authority was introduced.

The HUD is a read-only presentation projection over the current executable P8 authority:

- `Vitality Max = 4 + Endurance` from the frozen P3 health contract;
- current Vitality is shown at the P3 starting baseline because the current vertical slice has no authoritative command that changes human Vitality;
- Fatigue remains P3 `Ready / Tired / Exhausted`; the current slice displays the starting `Ready` baseline because it has no authoritative Fatigue mutation;
- Fear remains P3 `Steady / Shaken / Panicked`; the current slice displays the starting `Steady` baseline because it has no authoritative Fear mutation;
- Injuries remain the P3 injury model; the current slice has no authoritative Injury mutation;
- `Vitality 0 = Incapacitated`, never automatic death;
- `Comfortable Load = 4 + Strength`;
- current Load is derived only from the authoritative carried resource pools at Load 1 per unit under D-028;
- specialization identity is recovered from the authoritative personal competence rather than separately persisted;
- portrait choice is cosmetic presentation state only and does not alter checks, saves, RNG, event routing, or combat state.

A future executable health-pressure implementation must replace the temporary starting-baseline presentation with the actual authoritative P3 state. It must not add another UI-owned mutable pool.

## Performance / implementation review

- no per-frame scan or timer owns HUD gameplay state;
- expedition projection is memoized by authoritative state identity;
- portrait art is local bounded SVG and performs no runtime network fetch;
- no Pokémon roster-wide preload was added;
- no save-schema migration was required;
- the HUD is outside scene-transition animation ownership, so presentation fades do not reconstruct or commit authoritative state;
- legacy `.run-status` styling was intentionally removed from the new HUD after Chromium/WebKit 390px acceptance exposed a 25px overflow/style-leak; the final HUD is isolated under `.expedition-hud`;
- mobile horizontal overflow is asserted rather than visually ignored.

## Automated evidence

Dedicated workflow: **P8.2 Batch 05 Validation**  
Successful run: **32024921196**  
Head at successful run: **241f87afce5688362e947475289a099b2c1fe022**

The successful gate ran, in order:

1. `npm ci` — PASS
2. `npm run typecheck` — PASS
3. `npm run test` — PASS (**17 files / 64 tests**)
4. `npm run build` — PASS
5. Batch 05 portrait/HUD Playwright acceptance — PASS
   - `phone-chromium`
   - `phone-webkit`
   - 390×844 horizontal-overflow guard
   - portrait selection + reload/resume persistence
   - Korean health/exertion/danger semantics
6. inherited `npm run test:browser:p8-smoke` — PASS
7. inherited `npm run test:browser:p8-save` — PASS

The inherited phone smoke was updated only where its assertions referenced the removed legacy `.run-status` selector and the old single-string companion summary. Authoritative zero-companion completion, transition sequencing, locality, resources, direct interactions and pending/committed resume semantics remain unchanged and are still asserted.

At the same branch head, existing P7 Batch 02, P8 authority runtime, and P8 Batch 04 validation also completed successfully; other triggered inherited gates remained part of repository CI coverage.

## Exit decision

**PASS — P8.2 Batch 05 is complete.**

The owner's profile/state-readability blocker now has an executable baseline without weakening P3/P4/P5/P7 authority contracts.

## Next batch

**P8.2 Batch 06 — illustration system + scene visual identity**

Required direction:

- stable illustration resource IDs;
- event/locality/NPC/Pokémon/item illustration slots;
- optional inline narrative art beats;
- missing-media fallback that never changes gameplay;
- P6 provenance/cache/budget compliance;
- distinct visual identity or deliberate placeholders for opening, travel, Weedle, and orchard/return beats.

P9 remains blocked until the P8.2 owner-playtest expansion reaches its integrated Batch 10 acceptance gate or the owner explicitly changes the roadmap.
# P8.3 Comfortable Load Tuning

Status: **ACTIVE — P8.3 owner-replay balance tuning**  
Scope: D-028 / P3 Load arithmetic only; inventory architecture is unchanged.

## Decision

P8.3 tunes the human carrying envelope from the original playtest value:

`Comfortable Load = 4 + Strength`

to:

`Comfortable Load = 6 + Strength`

Injuries continue to reduce Comfortable Load by `1` each, and the existing minimum/`Burdened`/ordinary-travel-ceiling rules remain unchanged.

This is the balance-value tuning explicitly permitted by P3 section 3.3; it does **not** change what Load means, the Load cost of resource units, equipment mass, save authority, event rules, or the `Comfortable Load + 2` ordinary travel ceiling.

## Why

The first P8.2 owner replay exposed `Load 7/5 · 과적` immediately after character creation. The number was arithmetically correct under the old tuning, but it made a normal starter expedition kit look like a player mistake before the player had made any inventory decision.

Reducing the starter supplies to force the number down was tested and rejected during P8.3 Batch 03 validation: the authored preparation loop intentionally needs the original `3 Provisions + 1 Remedy` reserve to support route consumption, bait, field treatment, repair preparation and the final local barter step. A lean `1 + 1` pack made the field-camp action impossible after the Rattata risk step.

Therefore P8.3 keeps the complete starter pack and tunes the carrying envelope instead.

## Owner-facing result

For a minimum ordinary starting Strength of `1`:

- notable equipment Load: `3`;
- pooled starting resources: `4`;
- current Load: `7`;
- Comfortable Load: `7`;
- state: **적정 / not Burdened**.

Higher Strength creates real spare carrying capacity. Injuries reduce that spare capacity, and gathering/recovered cargo can still cross the threshold later. The Load system therefore remains a meaningful preparation constraint without presenting the default starting kit as an error state.

## Regression requirements

P8.3 must prove all of the following together:

1. the complete original starter resource pack is present;
2. a minimum-Strength starter is not Burdened;
3. the full settlement → field risk → camp/treatment → repair → barter loop remains completable;
4. heavier synthetic cargo still becomes Burdened;
5. save/reload reconstructs the same Load and resource state.

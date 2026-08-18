# P8.2 Batch 09 Audit — Survival expedition and preparation loop

Date: **2026-08-18**

Scope: issue **#118 / Batch 09** only. P9 remains blocked until Batch 10 owner/product acceptance.

## Goal

Turn the post-return P8 slice into a compact human adventurer loop that is satisfying at `0/3` companions: prepare in a settlement, travel into danger, make an explicit risk/reward choice, spend or gain bounded survival resources, recover in the field, return, improve equipment, barter, and prepare for another departure.

The implementation must reuse the frozen P3/P4/P5/D-028 authority instead of creating component-local HP/stamina, a parallel inventory, universal currency, automatic Pokémon loot, or a repeatable harvest faucet.

## Implemented loop

The bounded six-step loop is:

```text
Reedbank settlement
-> gather repair stock
-> forage provisions
-> choose Rattata-linked pursuit or withdrawal
-> old-levee field camp / recovery
-> return to Reedbank and reinforce equipment
-> local barter / resupply
```

The pursuit/withdrawal branch is mutually exclusive and both choices perform an authoritative locality transition from `reedbank-settlement` to `old-levee`. Camp recovery performs the authoritative return transition.

### Settlement preparation

- `gather.repair-stock` grants one bounded unit of ordinary Materials.
- `forage.bank-edge` grants one bounded unit of Provisions.
- Both are one-shot opportunities for this vertical expedition; there is no idle or repeatable resource faucet.

### Pokémon-linked risk/reward

The previously authored Rattata store-trail observation is required before the field choice unlocks.

- **Pursue**: spends one Provision as bait, recovers one unit of ordinary abandoned-cache cordage/leather stock, costs `1 Vitality`, advances Fatigue to the P3 Exhausted stage for the fixture, and creates one Injury.
- **Withdraw**: gives up the salvage, creates no material reward, and advances Fatigue by one stage.

The reward is found by following Rattata signs; it is not harvested from a Pokémon body. The action records explicit `no_pokemon_harvest` semantics and grants no kill XP, money, or automatic Pokémon loot.

### P3 survival pressure bridge

Batch 09 stores the slice's current Vitality/Fatigue/Injury pressure in namespaced authoritative event counters/flags that already round-trip through `p8-authority-v2`; no component-local survival state or second save schema is introduced.

The bridge follows the P3 contract used by this slice:

- `Vitality Max = 4 + Endurance`;
- Fatigue is the fixed three-stage state `0 Ready / 1 Tired / 2 Exhausted`;
- active Injury count is bounded to the P3 mechanical maximum of three for this transitional slice projection;
- `Vitality 0` means Incapacitated, not death;
- Exhausted or multiple Injuries is surfaced as collapse risk rather than hidden lethal arithmetic.

The persistent HUD reads these saved values directly. Injury pressure also feeds the existing Batch 08 Load projection, reducing comfortable carrying headroom rather than creating a second inventory/load authority.

### Camp and recovery

`camp.rest-and-treat` is available only after the field risk choice while the player is on the old levee.

- consumes one Provision;
- when injured, also requires and consumes one Remedy;
- restores up to `2 Vitality`, matching the P3 safe-rest recovery envelope;
- reduces Fatigue by one stage rather than resetting sustained expedition pressure for free;
- treats one Injury in this bounded slice;
- returns the player to Reedbank through the existing locality-transition authority.

This keeps recovery meaningful without turning Remedies into an instant generic potion system.

### Equipment improvement and barter

After recovery and return:

- `repair.wet-route-gear` spends one Material and equips the already-carried `hide.buckler` in the guard slot;
- the switch changes declared Defense/Field readiness through the Batch 08 equipment projection and does not create duplicate inventory state;
- `trade.provision-for-remedy` exchanges one Provision for one Remedy as a local direct barter action;
- no Kanto-wide currency or universal wallet is introduced.

## Persistence and phone acceptance

The Batch 09 browser acceptance proves:

- the complete six-step loop on the phone surface;
- real Reedbank -> old-levee -> Reedbank locality changes;
- Vitality/Fatigue/Injury/resource changes are visible in the preparation panel/HUD;
- the dangerous old-levee checkpoint survives a full browser reload before recovery;
- final resources, equipment, survival pressure and semantic flags survive save/resume;
- `0/3` companion completion remains valid;
- Korean loop/recovery copy renders on the final summary without horizontal overflow;
- Chromium and WebKit exercise the same dedicated acceptance.

## Regression guards

Deterministic unit coverage requires:

- route preparation before field risk;
- authored Rattata evidence before pursuit/withdrawal;
- mutually exclusive pursuit and withdrawal;
- P3 three-stage Fatigue clamping;
- Remedy requirement for treating the pursuit Injury;
- staged camp recovery rather than a free full pressure reset;
- settlement repair/barter locked until camp return;
- one-shot opportunities and bounded net resource gain;
- identical preparation availability at `0/3` and `3/3` companions;
- equipment improvement through the existing carried item and slot authority.

## Validation gate

The merge gate is the final PR head, not an earlier intermediate commit. It must pass:

- dedicated **`P8.2 Batch 09 Validation`**: `npm ci`, strict TypeScript, full deterministic unit suite, production PWA build, Chromium/WebKit phone preparation-loop acceptance, inherited P8 phone smoke;
- inherited **`P8 Authority Runtime Validation`**;
- inherited **P7/P8/P8.2 regression workflows** triggered by the touched authority, profile, equipment and presentation files.

The corresponding final-head workflow run IDs and PASS state are recorded in PR #125 before merge so this audit does not need a post-validation documentation-only commit that would create a new unvalidated head.

## Exit decision

Batch 09 is implementation-complete when the final PR head passes the validation gate above. Batch 10 remains the next work item and is the integrated automated + owner product gate before P9 content multiplication.

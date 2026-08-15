# P3 Inventory, Resources, and Economy Contract

Status: **ACTIVE — P3 binding contract**  
Date: **2026-08-15**  
Decision: **P3-HDG-006 / D-028 / owner choice B — hybrid Load + pooled expedition resources**

## 1. Purpose

The inventory/economy model must make expedition preparation, carrying limits, useful equipment, local scarcity, treatment, repair, barter, favors, and route logistics matter without turning the mobile text RPG into a slot-grid survival spreadsheet.

The binding shape is:

- **notable items and equipment are represented individually**;
- repeated ordinary consumables are compressed into a few small integer **resource pools**;
- carrying burden uses a small integer **Load** abstraction rather than kilograms, volume simulation, or inventory Tetris;
- settlements may use barter, gifts, obligations, favors, local media of exchange, or direct provisioning without implying a Kanto-wide currency;
- authoring may use a normalized **trade-value reference** internally, but the player does not possess a universal abstract money wallet by default;
- Pokémon-derived materials remain species- and context-specific under D-021/P4 and never become automatic generic loot.

This contract implements the owner's choice B: preparation should matter enough to create meaningful expedition decisions, while repeated bookkeeping is deliberately compressed.

## 2. Inventory has three layers

### 2.1 Notable items

A **notable item** is represented by a stable item ID because its identity can change fiction, choices, checks, access, harm, treatment, social reaction, or future events.

Typical examples:

- weapons and shields;
- armor or protective clothing;
- specialized tools;
- route gear such as a rope, climbing aid, lamp, net, or weather protection;
- keepsakes, keys, ritual objects, letters/records, claims, tokens, trophies, maps, and quest items;
- rare medicine or antidotes whose exact identity matters;
- distinctive trade goods;
- rare or species-specific materials;
- equipment granted by Origin/Learned Practice.

A notable item may be unique or stackable where that is fictionally sensible, but repeated low-interest consumables should normally use the pooled-resource layer instead.

### 2.2 Pooled expedition resources

The ordinary mobile-facing resource pools are:

1. **Provisions / 보급식량**
   - ordinary carried food, drink, salt/preservation needs, and comparable basic travel sustenance;
   - one unit is an authored practical expedition unit, not a literal kilogram or globally standardized ancient measure;
   - primarily interacts with rest, sustained travel, hunger/dehydration pressure, hospitality, sharing, and emergency sacrifice.

2. **Remedies / 치료물자**
   - ordinary field dressings, common medicinal preparations, cleaning material, simple splints/bandage-equivalent supplies, and other expendable first-aid stock;
   - supports stabilization, treatment, recovery, prevention of worsening, or context bonuses when the treatment is actually appropriate;
   - does **not** function as an instant-heal potion pool and cannot by itself erase Serious/Critical Injury.

3. **Materials / 작업재료**
   - mundane expendable repair/craft stock such as cordage, patching material, fasteners, common wood/fiber/leather-like stock, fuel/repair pieces, and comparable field materials;
   - used for repair, preparation, improvised construction, maintenance, traps or other author-approved practical work;
   - does **not** automatically absorb rare, culturally important, hazardous, magical-seeming, or Pokémon-derived materials whose identity matters.

These three pools are intentionally broad. Do not add a permanent new universal resource pool merely because one event consumes a distinct object; use a notable item, local state, or event-specific token first.

### 2.3 Local stores and non-carried resources

Settlements, households, workshops, caches, shelters, companions, and event locations may hold resources that are **not currently carried by the player**.

The authoritative state must distinguish:

- carried inventory/resource amounts;
- stored inventory/resource amounts by location/owner;
- temporarily accessible communal/workshop resources;
- items that are owned, borrowed, owed, entrusted, restricted, or merely usable in place.

Owning or having access to an item is not the same as physically carrying it.

## 3. Load abstraction

### 3.1 Why Load exists

Load answers one question:

> **How much meaningful carrying burden is the character taking into travel or danger?**

It is not a physics simulator and should not be recalculated from kilograms, item dimensions, density, or container geometry.

### 3.2 Load values

Each carried notable item or resource unit has a small authored integer Load cost, normally:

- `0` — negligible for ordinary travel bookkeeping;
- `1` — ordinary meaningful carried burden;
- `2` — bulky/heavy equipment or bundle;
- `3` — exceptional human-portable burden that strongly shapes movement.

Values above `3` should normally mean the object is not ordinary personal inventory and requires special transport, multiple people, a cart/sled/boat, a suitable companion, or an authored event state.

`Load 0` must be used sparingly. Many individually tiny objects can be aggregated into a kit or resource unit rather than granting unlimited free storage.

### 3.3 Carry limit

The initial human carrying envelope is:

`Comfortable Load = 4 + Strength`

With ordinary character creation, most starting characters therefore have a comfortable carried Load of `5–7`, with later human maximum normally reaching `8` at Strength `4`.

This is a balance value and may be tuned without changing the architecture.

### 3.4 Burdened travel

At or below Comfortable Load, carrying imposes no universal modifier.

A character carrying **1–2 Load above** the limit is **Burdened**:

- relevant prolonged travel, climbing, sprinting, balance, stealth, escape, and exhaustion-sensitive actions can receive approximately `-1 Context`;
- difficult travel may advance Fatigue sooner or make certain routes unsafe;
- the penalty is contextual rather than a permanent subtraction from every check.

Ordinary expedition travel should not begin while carrying more than **Comfortable Load + 2** unless an authored transport solution, short-distance hauling situation, or explicit hardship rule applies.

The system should normally solve extreme cargo through transport/access decisions rather than adding larger arithmetic penalties.

### 3.5 Equipped items still have physical burden

Marking an item as equipped changes readiness/access, not mass.

Weapons, armor, shields, packs and worn tools still contribute their authored Load unless a specific item rule says otherwise.

Equipment slots may be used by the eventual UI for clarity, but P3 does not require a Diablo-like paper-doll slot system or inventory grid.

## 4. Resource units and Load

A carried unit of Provisions, Remedies, or Materials normally has **Load 1** unless an authored compact/specialized package says otherwise.

This makes the decision legible:

- more food supports longer travel;
- more remedies improve resilience and treatment options;
- more materials improve repair/preparation capacity;
- every extra bundle competes with weapons, armor, specialized tools, and recovered cargo.

The resource unit deliberately represents a **useful bundle**, not one meal, one bandage, or one nail.

Content authors define when a travel segment/rest/treatment/preparation consumes a unit. P5 must not create per-minute hunger or item-drain polling.

## 5. Preparation and survival interaction

### 5.1 Provisions

Adequate Provisions can:

- enable a restorative travel rest;
- prevent or delay hunger/dehydration-driven Fatigue;
- make a long route viable;
- support another person in an emergency;
- act as barter, hospitality, tribute, bait, or a sacrifice only when the fiction supports it.

Running out of Provisions does not instantly damage the character. It removes the ordinary protection against deprivation and allows authored travel/rest consequences to increase Fatigue, block recovery, create Context penalties, force route changes, or escalate hardship.

### 5.2 Remedies

Remedies can:

- enable ordinary field first aid where consumable supplies are required;
- help stabilize a Light/Serious Injury when the treatment is appropriate;
- prevent worsening during travel;
- grant favorable Context to a Medicine check when preparation materially helps;
- satisfy an authored recovery requirement.

Remedies do not override the P3 injury contract:

- Serious Injury can still require skilled treatment and downtime;
- Critical Injury still requires explicit stabilization/rescue logic;
- a generic Remedy cannot neutralize every venom, disease, burn, Psychic/Ghost effect, or species-specific hazard.

Specific antidotes, rare medicine, Pokémon-assisted healing and technology-island medicine remain notable-item/P4 content when exact identity matters.

### 5.3 Materials

Materials can:

- repair ordinary gear;
- maintain tools/weapons when the craft and environment permit it;
- support improvised shelter, route repair, traps, barriers, containers or field devices;
- enable a Crafting/Smithing task when generic expendable stock is sufficient;
- convert prior planning into an authored Context benefit or fictional permission.

A generic Materials unit cannot substitute for a required rare alloy, sacred object, unique component, species-specific organ/shed material, or other exact ingredient.

### 5.4 Preparation changes fiction before numbers

Good preparation should preferably:

1. make an approach possible;
2. prevent a hazard;
3. reduce the consequence category;
4. expose a safer choice;
5. grant a bounded Context modifier when uncertainty remains.

Do not turn equipment into a large stack of passive `+1` modifiers.

All ordinary advantages contributing to one check still collapse into the D-024 Context envelope, normally `-2..+2` total.

## 6. Weapons, armor and tools

P3 inventory does not create a second combat-stat economy.

Weapons, armor and tools should primarily supply:

- fictional eligibility;
- relevant Competence use;
- reach/range/approach options;
- block/parry/protection permissions;
- contextual advantages;
- changed harm or Injury consequence categories;
- durability/repair obligations only where interesting.

Examples:

- a spear can make approaching a dangerous creature less suicidal without granting a universal permanent attack bonus;
- a shield can make a charge blockable;
- protective clothing can downgrade an authored burn consequence;
- a rope can make a cliff route possible;
- a smith's tools can make field repair possible but do not grant Smithing competence by themselves.

Equipment should not create MMO-style rarity colors, gear-score scaling, or a requirement to replace the same weapon every few encounters.

## 7. Durability and breakage

There is no universal numeric durability bar for every item.

Use discrete authored conditions when equipment wear becomes meaningful, such as:

- `worn`;
- `damaged`;
- `broken`;
- `contaminated`;
- `needs sharpening/repair`;
- another item-specific state.

Ordinary routine use should not trigger repetitive durability bookkeeping.

A Trouble Spike may damage equipment only when the situation could plausibly do so. Repair normally consumes appropriate access, time, skill and possibly Materials.

## 8. Economy: local exchange, not universal currency

### 8.1 No Kanto-wide standardized wallet

D-012/D-022 forbid silently introducing a mature regional market or standardized currency.

The baseline economy can use:

- direct barter;
- gifts and reciprocal exchange;
- household/clan provisioning;
- favors and obligations;
- debt/credit remembered socially;
- labor/service exchange;
- local tokens, weighed metal, beads, shells, measures, tally systems, or other locality-specific media when content explicitly establishes them;
- negotiated access to food, shelter, repair, guides, storage, tools, medicine, transport, or safe passage.

There is no default universal `gold`, `Pokédollars`, or abstract money balance accepted everywhere.

### 8.2 Internal trade-value reference

For deterministic content authoring and balance, items/resources may define a normalized hidden or authoring-facing **trade value**.

This value:

- is a comparison/reference scale, not literal currency;
- helps content evaluate whether an offer is trivial, roughly fair, costly, or exceptional;
- may be modified by settlement scarcity, relationships, urgency, season, route disruption, taboo, reputation, and buyer/seller need;
- does not guarantee that a willing counterparty exists;
- does not override ownership, culture, trust, or local restrictions.

The player-facing UI may show qualitative estimates such as `common`, `useful`, `valuable here`, or a locally understood price when the character has enough knowledge. It need not expose the internal scalar globally.

### 8.3 Negotiation cannot manufacture value

Negotiation/Presence can alter terms, reveal alternatives, gain trust, defer payment, bundle services, or exploit leverage where fiction permits it.

A good roll does not make worthless goods universally valuable, force unwilling people to trade vital supplies, or erase a major debt without a plausible social consequence.

## 9. Favors, debts and obligations are not fungible money

Origins, events and local relationships may create:

- `favor owed to player`;
- `player owes favor`;
- debt;
- duty;
- hospitality claim;
- access permission;
- reputation-based provisioning;
- disputed ownership or inheritance claim.

These should normally be explicit relationship/event state with a source and scope, not converted into one universal `favor points` currency.

This preserves the pre-regional social economy and creates event hooks without another grindable bar.

## 10. Pokémon-derived resources

D-021 is binding.

Defeating, incapacitating or killing a Pokémon does **not** automatically produce loot, Materials, food, money or advancement.

P4 must decide species-by-species whether a meaningful resource relationship exists and whether it involves:

- hunting;
- dangerous harvesting;
- shed/abandoned material;
- naturally dead remains;
- food use;
- taboo/sacred protection;
- negotiated coexistence;
- technology-island dependence;
- no material use at all.

When exact species identity matters, the resource remains a **notable item/material ID** rather than being silently converted into generic Materials.

Generic Materials may receive a species-derived contribution only when P4 explicitly says that, after safe/ethical/local processing, the resulting stock is genuinely interchangeable with mundane field material and the specific identity no longer matters.

## 11. Reward channels

Inventory/economy rewards are first-class alternatives to frequent Pokémon acquisition and generic XP.

Useful rewards include:

- Provisions, Remedies or Materials;
- a better or specialized tool;
- repaired/reforged equipment;
- rare exact material;
- safe storage;
- a local cache;
- shelter/hospitality;
- transport access;
- workshop/forge/healer access;
- a guide or escort;
- permission to harvest/use a resource;
- a favor, forgiven debt or new obligation relationship;
- trade access;
- route knowledge;
- information or bestiary knowledge;
- a preparation opportunity that reduces future risk.

A reward should matter because it changes future choices, not because every event must increase a numeric wallet.

## 12. Character creation interaction

Learned Practice may grant a small starting package using this contract.

Examples:

- Hunter: ordinary hunting weapon/tool plus relevant field item;
- Route Guide: rope/map-marker/navigation kit plus Provisions;
- Village Guard: ordinary weapon/shield/protective equipment;
- Forager: gathering tool/container plus Provisions or Materials;
- Healer Apprentice: medicine kit plus Remedies;
- Smith Apprentice: smith/repair tool access plus Materials;
- Fisher: fishing tool/net/line package;
- Keeper: record/tally/map/archival item;
- Ritual Attendant: ritual object/garment/container appropriate to the locality.

The exact package is content data, not a class-locked equipment track.

Origin may separately create ownership, debt, heirloom, claim, entrusted object, contact, storage access, or provisioning rights.

## 13. Companion interaction

Pokémon companions are never stored in inventory and do not consume a human companion slot through Load; D-013's three companion slots remain separate.

However, physical companionship has logistics.

P4 may define species-specific:

- food/water needs;
- shelter/temperature needs;
- carried gear;
- transport capability;
- inability or refusal to carry cargo;
- settlement restrictions;
- special resource consumption;
- equipment or handling burden.

A companion must not automatically become a free backpack that deletes human Load decisions. Any cargo/transport benefit must be species-appropriate and explicit.

## 14. Data and deterministic implementation contract

P5/P7 should be able to represent at minimum:

```text
InventoryState
  carriedItems[]
    itemId
    quantity
    condition?
    equipped?
    ownershipState?
  resourcePools
    provisions
    remedies
    materials
  storedInventoriesByLocation{}
  cachedCarriedLoad
  burdenState

ItemDefinition
  id
  tags[]
  load
  stackRule
  tradeValueReference?
  equipmentRules?
  consumptionRules?
  conditionRules?
```

Authoritative Load must be recomputed **only when inventory/load-relevant state changes**, then cached in run state or an equivalent derived-state cache.

Do not rescan the entire inventory every frame/render or repeatedly parse item definitions to display the same state.

Normalized item/resource definitions should be loaded once and reused. UI is a projection of authoritative inventory state, not the owner of it.

## 15. Event-engine requirements

P5 must be able to express deterministic operations equivalent to:

- `grant_item(item_id, quantity, ownership_state?)`;
- `remove_item(item_id, quantity)`;
- `set_item_condition(item_id, condition)`;
- `grant_resource(pool_id, amount)`;
- `consume_resource(pool_id, amount)`;
- `move_item(source_inventory, destination_inventory)`;
- `grant_access(storage/workshop/healer/etc.)`;
- `grant/revoke_obligation_or_favor(state_id)`;
- `evaluate_load_after_inventory_change()`;
- transaction/barter outcomes whose terms are authored and reproducible.

Events should evaluate inventory/resource conditions only on relevant state transitions. No continuous polling is required.

## 16. Mobile presentation contract

The default mobile inventory view should prioritize:

1. current Load versus Comfortable Load;
2. the three pooled resources;
3. equipped/quick-relevant gear;
4. compact notable-item list;
5. contextual storage/trade access when present.

Do not require drag-and-drop grid packing.

The player should be able to understand **why** an item matters, what is consuming Load, and what a planned expedition is missing without reading a long spreadsheet.

## 17. Tuning boundary

The following may be tuned in data without reopening P3-HDG-006 if the architecture remains intact:

- `Comfortable Load = 4 + Strength`;
- ordinary `0–3` item Load values;
- resource-unit Load;
- exact starting resource amounts;
- internal trade-value numbers;
- scarcity multipliers or qualitative thresholds;
- exact event consumption cadence.

Changing the following requires an explicit later rules decision:

- replacing hybrid inventory with full slot/weight simulation;
- making every ordinary consumable an individually tracked item;
- removing meaningful carrying pressure entirely;
- adding a universal Kanto-wide currency as the baseline economy;
- converting favors/obligations into a universal fungible point wallet;
- making Pokémon defeat automatically produce generic loot;
- making equipment primarily a vertical gear-score treadmill.

## 18. Downstream obligations

### P3 remaining

- define bounded rare psychic/miracle-worker gift mechanics;
- decide whether a separate fate/roll-intervention resource is actually needed;
- run a full P3 exit audit for modifier stacking, state overload, lethality consistency, `0/3` viability, and downstream data completeness.

### P4

- define species-specific food/material/harvesting/taboo/resource relationships;
- define companion logistics and any species-specific cargo/transport capability;
- define exact medicines, antidotes, craft materials and technology-island resources only when source evidence supports them.

### P5

- make expedition preparation and resource consumption discrete, authored and deterministic;
- support barter, local scarcity, storage, favors/obligations and non-money rewards;
- avoid per-step/per-frame hunger, durability or inventory polling.

### P6

- determine which item/resource classes actually require icons/illustrations/audio and what can remain text-only;
- preserve the compact mobile presentation and resource-provenance boundaries.

### P7/P8

- cache derived Load on inventory mutations;
- avoid repeated parsing/allocation for item definitions;
- prove that preparation, storage, trade and Load are legible on a phone-sized UI;
- test that a human-only `0/3` run can carry enough meaningful survival options without requiring a Pokémon cargo solution.

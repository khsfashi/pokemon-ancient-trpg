# P3 Fate, Roll Intervention, and Emergency Consumables Contract

Status: **ACTIVE — P3 binding contract**  
Date: **2026-08-15**  
Decision: **P3-HDG-008 / D-030 / owner choice A — no universal fate/reroll resource; danger mitigation lives in carried consumable items**

## 1. Decision

The game has **no universal Fate, Luck, Resolve, Destiny, Inspiration, reroll, die-replacement, or result-upgrade currency**.

Once an ordinary check is rolled, the dice remain authoritative. The player cannot spend a meta-resource to reroll one die, reroll both dice, replace a die, cancel a natural double, manufacture a Fortune Spike, erase a Trouble Spike, or promote a failed outcome band after seeing the result.

This is deliberate. The project already gives player agency through:

- route and event choices;
- preparation and equipment;
- the bounded Context layer;
- setback / costly-partial / full / exceptional outcomes;
- retreat, rescue, treatment and consequence-management branches;
- rare natural Fortune/Trouble Spikes;
- knowledge, relationships and discovered permissions;
- inventory and scarce expedition resources.

A second abstract safety currency would dilute the dangerous-world identity and duplicate existing systems.

## 2. Emergency safety comes from fictionally carried things

The owner's preferred safety valve is **Arkham-Horror-like consumable item play**: the character may carry a small number of concrete, finite-use tools, medicines, charms, prepared devices, protective materials, or other setting-valid items that can be expended when danger becomes acute.

These are not Fate points represented as objects. Every emergency consumable must have a fictionally explainable mechanism and a bounded trigger.

Valid effects include, where the specific item supports them:

- reduce or prevent a stated Vitality loss;
- prevent a Light Injury or downgrade a specific impending Injury consequence by one authored step;
- enable stabilization that would otherwise be unavailable;
- prevent Fatigue or Fear from advancing in a narrow circumstance;
- allow a disengage / escape / shelter / brace / resist option that would otherwise be unavailable;
- neutralize or reduce a specific environmental, venom, smoke, cold, heat, darkness, Psychic/Ghost, or species-linked hazard when justified by P4/P5;
- provide a bounded Context benefit **before** or at the declared reaction window when the item is genuinely relevant;
- preserve another resource or piece of equipment from a specific consequence;
- convert an otherwise catastrophic authored consequence into a survivable but still costly branch when the item explicitly exists for that purpose.

The default effect is **consequence interaction, not dice manipulation**.

## 3. Reaction-window rule

An emergency consumable may be used only during an authored legal window.

P5 must distinguish at least:

1. **Preparation window** — before the roll or hazard resolves. The item changes fictional permission, difficulty, Context, or available approaches.
2. **Reaction window** — after the immediate threat/result is known but before its consequence is committed. The item may block, reduce, redirect, or pay for a specifically permitted consequence.
3. **Recovery window** — after the consequence is committed. The item treats, stabilizes, repairs, calms, shelters, or otherwise manages resulting state.

A reaction-window item does **not** retroactively change the dice. It changes the consequence because the character had a concrete item ready and the event permits that response.

The UI must make the timing legible. The game should never consume a rare item automatically without either a previously explicit auto-use setting or a player choice.

## 4. Item identity and scarcity

Emergency consumables belong to the existing P3 inventory model.

They are normally **notable items** when exact identity, trigger, rarity, provenance, cultural meaning, species relationship, or effect matters. Generic everyday first-aid expenditure may still use the pooled `Remedies` resource.

Examples of eventual content shapes include:

- a prepared smoke or scent bundle that creates one escape opening against a compatible threat;
- a rare antidote that prevents one known venom escalation;
- a reinforced splint or specialized dressing that enables stabilization;
- an insulating wrap or treated garment that reduces one Electric/Fire/cold hazard consequence;
- a one-use signal device, flare-like fire bundle, whistle, mirror, or lure that can change pursuit/visibility when locally plausible;
- a ritual or culturally significant ward whose effect is supported by the setting and specific Psychic/Ghost context rather than generic fantasy magic;
- a species-derived protective material only where P4 explicitly supports its source, use and ethics.

These examples are rule shapes, not pre-approved final item lore. P4/P5 must justify species- or phenomenon-specific items through the project's canon-first derivation rules.

## 5. No generic emergency-item stack

The system must not create a single universal `Emergency Token`, `Lucky Charm`, `Hero Point Potion`, or other object whose only fiction is “spend this to improve any bad roll.”

Likewise, ordinary items do not grant a universal `cancel failure` effect.

A legal emergency consumable must define:

- stable `item_id`;
- trigger tags / eligible hazard or consequence families;
- use timing (`preparation`, `reaction`, `recovery`, or an explicit subset);
- consumption count, normally one use per unit;
- exact effect;
- exclusions / incompatible situations;
- whether it requires a check, free hand, preparation, knowledge, or access;
- Load and stack behavior under D-028;
- provenance/source constraints when Pokémon-derived or culturally exceptional.

## 6. Balance and carrying tradeoff

Emergency items are valuable because **carrying them has opportunity cost**.

They compete with:

- weapons and armor;
- route tools;
- Provisions;
- Remedies;
- Materials;
- quest/recovered items;
- other specialized safety tools;
- the character's Comfortable Load.

This creates the desired preparation question: `What danger do I expect, and which finite answers am I willing to carry?`

Do not solve emergency-item balance by making every useful item Load 0. Small items may be aggregated into a kit or given scarcity/stack constraints where physical Load alone would not create a meaningful tradeoff.

## 7. Relationship to 2d6 and doubles

Emergency consumables never change the physical/digital dice results unless a future explicit owner decision supersedes D-030.

Therefore:

- natural `6+6` remains a genuine Fortune Spike;
- natural `1+1` remains a genuine Trouble Spike;
- an item may mitigate a consequence caused or worsened by a Trouble Spike **only if its trigger matches the fiction**;
- the Trouble Spike still occurred and remains in the deterministic event log;
- an item cannot turn `1+1` into another roll or remove the spike marker;
- an item cannot manufacture `6+6` or an exceptional result.

This preserves the emotional rarity of natural doubles.

## 8. Relationship to serious selective lethality

D-020 remains authoritative.

Emergency consumables provide **prepared survival options**, not immunity to lethal fiction.

A correctly chosen item can be the difference between:

- a severe hit and a reduced injury;
- uncontrolled bleeding and stabilization;
- entrapment and an escape opening;
- immediate exposure and temporary shelter;
- venom escalation and delayed/avoided worsening.

But an ordinary consumable cannot make a structurally unsurvivable event harmless, erase an already committed death state, regenerate a catastrophic wound, or nullify every attack from an overwhelmingly dangerous Pokémon.

High-risk content must still telegraph danger and provide causal consequence ladders.

## 9. Relationship to psychic Gifts

D-029 Gifts do not become a hidden Fate system.

- Omen/Premonition may reveal warnings or choices but does not provide universal rerolls.
- A Gift-specific authored manifestation may enable a reaction or resistance branch when its family/facet actually supports it.
- Psychic Gifts and emergency consumables can both affect the same scene, but their ordinary Context contributions still respect the existing combined Context envelope.
- No Gift creates or refreshes a generic emergency-item currency.

## 10. Reward economy

Emergency consumables are a first-class reward channel and help provide dopamine without frequent Pokémon acquisition or XP inflation.

A rare item reward is meaningful when the player understands:

- what kind of danger it answers;
- that it is finite;
- that carrying it costs space/Load/opportunity;
- that spending it now may leave a later expedition exposed.

P5/P9 should prefer a curated library of recognizable, situation-changing consumables over dozens of numerically similar potions.

## 11. Deterministic event requirements

P5 must be able to encode deterministic item reactions equivalent to:

```text
EmergencyUseRule
  itemId
  timing
  triggerTags[]
  prerequisiteState?
  consumeAmount
  effectOperations[]
  exclusions[]
```

Representative effect operations may include:

- `reduce_vitality_loss(amount)`;
- `prevent_injury(max_severity, matching_tags)`;
- `downgrade_injury_one_step(matching_tags)`;
- `grant_stabilization(matching_tags)`;
- `prevent_fatigue_advance(source_tag)`;
- `prevent_fear_advance(source_tag)`;
- `open_escape_branch(branch_id)`;
- `reduce_or_cancel_hazard_state(hazard_id)`;
- `protect_item(item_id or tag)`;
- `consume_item(item_id, 1)`.

Operations must validate against the event's permitted reaction window and item trigger. Do not implement free-form scripting that lets arbitrary content silently bypass rule contracts.

The complete authoritative sequence must be logged: rolled dice → outcome/spike → offered legal reactions → chosen item use → item consumption → modified consequence → final state.

## 12. Runtime/performance rule

Emergency reactions are evaluated only when an event reaches a relevant preparation/reaction/recovery window.

P5/P7 should pre-index carried usable items by trigger/tag or equivalent cached lookup where useful. Do not rescan and reparse every item definition per render/frame.

Inventory mutation after consumption must update the existing cached Load state only when the consumed item affects Load.

## 13. P3 closure implication

With D-030:

- no unresolved Fate/reroll resource remains;
- player-controlled safety comes from prior choices, concrete inventory, event reactions, and consequence management;
- the check engine retains immutable dice and rare doubles;
- D-028 inventory gains a clear high-value consumable reward/use case without becoming a universal item-grid survival simulator.

The next P3 work is the final P3 exit audit.
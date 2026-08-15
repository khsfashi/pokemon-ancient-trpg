# P3 Progression and Competence Contract

Status: **ACTIVE — P3 binding contract**  
Date: **2026-08-15**  
Decision: **P3-HDG-005 / D-027 / owner choice C — milestone growth + earned training/insight**

## 1. Progression identity

Human progression uses a hybrid model:

1. **authored milestones** grant a small spendable advancement resource;
2. **actual experience, discoveries, mentors, training, or hard-won insight** determine what improvements are currently eligible;
3. the player chooses the final improvement and pays its advancement cost.

The game therefore has neither a conventional kill-XP/level treadmill nor Skyrim-like use-count grinding.

A character does **not** improve because the same action was repeated many times. Repetition matters only when an authored event or training sequence converts meaningful sustained practice into an explicit eligibility unlock.

## 2. No character levels

There is no general human character level and no automatic package such as `Level 3 = +HP +stats +skills`.

Progress is represented directly by:

- core attributes;
- Competence ratings;
- learned techniques or permissions where later content defines them;
- knowledge and bestiary state;
- route/local knowledge;
- relationships, reputation and contacts;
- equipment/resource access;
- Origin/Practice consequences and evolved narrative state;
- rare-gift state where P3 separately permits it.

This keeps growth legible without introducing a second abstract power scale.

## 3. Spendable advancement resource

P3 uses the conceptual state key `advancement_points`.

The final player-facing Korean/English label may be polished later without changing the rule identity.

Default award envelope:

- minor discovery or ordinary event completion: **0** generic advancement points;
- meaningful authored milestone: normally **1** advancement point;
- rare chapter/run-defining landmark: at most **2** advancement points at once unless later balance evidence justifies otherwise.

Milestone rewards are keyed and one-shot. Reloading, repeating a route, defeating respawned threats, repeatedly rolling a check, or re-triggering equivalent low-value events must not farm advancement.

P5 must represent awarded milestone IDs in deterministic run state.

## 4. Eligibility unlocks

Advancement points alone are not sufficient to buy every improvement.

An improvement that changes trained capability requires an authored **growth eligibility** explaining why that character can now make that improvement.

Examples:

- surviving several meaningful hunts and receiving focused instruction may unlock `hunting +1 → +2`;
- treating a difficult wound under a healer's supervision may unlock advanced Medicine training;
- studying a dangerous route with an experienced guide may unlock Wayfinding training;
- a rare physical ordeal plus recovery/training may unlock an Endurance increase;
- a newly discovered craft method may unlock a technique or Crafting improvement.

Eligibility may come from success, partial success, failure survived with meaningful learning, mentorship, deliberate downtime training, a major discovery, or another authored causal source.

A single routine check never grants permanent growth by itself.

## 5. Initial advancement costs

These costs are the P3 balance envelope and remain data-tunable later without changing the progression philosophy.

### 5.1 New trained Competence

`+0 → +1` costs:

- **1 advancement point**; and
- one matching trained-capability eligibility.

This represents becoming reliably trained rather than merely having tried the activity.

### 5.2 Expert Competence

`+1 → +2` costs:

- **2 advancement points**; and
- an explicit expert-grade eligibility from sustained meaningful experience, a capable mentor, a major insight, exceptional training, or an equivalent authored path.

`+2` is expert/specialist capability and must remain uncommon enough that it materially changes checks on the 2d6 scale.

### 5.3 Core attribute increase

Increasing a core attribute by `+1` costs:

- **3 advancement points**; and
- a matching breakthrough eligibility justified by significant development rather than routine use.

The normal human cap remains `4`.

Attributes are intentionally much harder to raise than Competence. Most ordinary character growth should come from expertise, knowledge, techniques, relationships, equipment access and new permissions rather than every attribute drifting upward.

### 5.4 Techniques and narrative permissions

A later authored technique may cost **1 advancement point** plus its matching unlock when it provides a reusable mechanical capability roughly comparable to trained Competence.

However, narrative facts that naturally follow from play — a friendship, title, discovered route, learned species fact, permission to enter a workshop, ownership of a tool — should usually be granted directly rather than charging advancement simply because they are useful.

## 6. Advancement checkpoints

Permanent advancement spending occurs only at safe, explicit checkpoints such as:

- returning to a settlement;
- completing an expedition or major event chain;
- downtime with access to the required mentor/place/material;
- another authored moment where reflection or training is fictionally credible.

The player does not pause a lethal encounter to convert points into a new expert skill.

Eligibility and points may be earned during danger; the permanent improvement is committed at an appropriate checkpoint.

## 7. Competence model

Competence remains the compact `+0 / +1 / +2` layer defined by D-024.

Rules:

- a check normally receives **at most one Competence bonus**;
- two relevant Competences do not stack; use the single most relevant one and represent other advantages through fiction/context where justified;
- Competence names describe trained domains, not personality traits or duplicate core attributes;
- a Competence cannot manufacture knowledge or capabilities the fiction has never made available;
- Pokémon companionship is not represented by a generic `Taming` Competence.

## 8. Initial normalized Competence catalog

The following compact catalog is the default P3 baseline:

| Key | Display | Primary trained domain |
|---|---|---|
| `arms` | Arms / 무기술 | trained use and maintenance of ordinary human weapons/shields |
| `hunting` | Hunting / 사냥 | stalking, trapping, pursuit, field dressing where culturally/species-appropriately permitted |
| `wayfinding` | Wayfinding / 길찾기 | route memory, navigation, travel planning, terrain passage |
| `foraging` | Foraging / 채집 | finding, evaluating and gathering usable wild resources |
| `medicine` | Medicine / 치료 | first aid, diagnosis, treatment and recovery practice |
| `smithing` | Smithing / 대장기술 | ironworking, repair, forge practice and metal-tool knowledge |
| `crafting` | Crafting / 제작 | non-smith practical making/repair such as wood, leather, rope, containers and field gear |
| `fishing` | Fishing / 어로 | catching, reading waters, nets/lines/traps and water-resource practice |
| `recordkeeping` | Recordkeeping / 기록 | literacy where available, oral/durable records, archives, comparison and preservation of learned information |
| `ritual` | Ritual / 의례 | locally trained ceremonial procedure, taboo observance and ritual practice without implying supernatural power |
| `stealth` | Stealth / 은신 | trained concealment, quiet approach and controlled movement |
| `negotiation` | Negotiation / 교섭 | trained mediation, bargaining and formal social negotiation |

This is intentionally small. P3/P5 should prefer contextual tags, knowledge state and narrative permissions over creating a new permanent skill for every activity.

A later genuinely distinct domain may be added, but additions require evidence that the existing attributes + catalog cannot express recurring gameplay cleanly.

## 9. Learned Practice mapping

The P3 character-creation seeds map to the normalized catalog as follows:

- Hunter → `hunting +1`
- Route Guide → `wayfinding +1`
- Village Guard → `arms +1`
- Forager → `foraging +1`
- Healer Apprentice → `medicine +1`
- Smith Apprentice → `smithing +1`
- Fisher → `fishing +1`
- Keeper / knowledge keeper → `recordkeeping +1`
- Ritual Attendant → `ritual +1`

The additional free starting Competence may be chosen from any ordinary catalog entry that is fictionally compatible with the finished character, but it must be different from the Learned Practice Competence so ordinary creation does not begin at `+2`.

## 10. No generic Pokémon-handling skill

There is deliberately no universal `Pokémon Handling`, `Taming`, `Trainer`, or `Monster Handling` Competence.

Successfully interacting with a Pokémon may depend on:

- the relevant core attribute and approach;
- species-specific knowledge;
- observed behavior and identification state;
- local custom/taboo;
- prior relationship/trust state;
- food, tools, shelter or preparation;
- a contextually relevant Competence such as Hunting, Medicine or Ritual only when that training actually applies;
- species-specific companionship rules defined in P4.

This prevents a single skill from bypassing the project's rare, species-specific companionship philosophy.

## 11. Knowledge is progression but not Competence inflation

Bestiary knowledge, route mastery, local customs, recipes, craft methods and other discoveries are first-class progression rewards.

They should normally be stored as explicit knowledge/permission state rather than converted into arbitrary permanent `+1` bonuses.

Knowledge may:

- unlock new choices;
- lower or remove a difficulty when uncertainty genuinely disappears;
- make a previously impossible approach possible;
- provide authored Context bonuses;
- unlock growth eligibility;
- expose safer routes or consequences.

It does not automatically stack with every relevant Competence.

## 12. Failure and growth

Failure can contribute to growth when the character genuinely survives, learns, receives feedback, or changes behavior.

But the system never rewards intentionally failing trivial checks.

P5 must distinguish an authored `growth eligibility` consequence from generic failure. There is no hidden `failure_count >= N` improvement rule.

## 13. Anti-grind and deterministic implementation requirements

P7/P5 must not implement hot-path counters such as:

- number of sword swings;
- number of Medicine checks;
- number of failures;
- number of Pokémon defeated;
- number of steps walked;
- repeated crafting loops solely to trigger skill growth.

Permanent progression changes only through discrete authored state transitions:

- grant milestone advancement;
- grant/revoke a specific growth eligibility;
- spend advancement at a valid checkpoint;
- grant direct knowledge/permission/reputation/equipment state.

This is deterministic, easy to test, cheap to evaluate and resistant to grind exploits.

## 14. Pokémon defeat and XP

Defeating, driving away, incapacitating or killing a Pokémon grants **no universal XP**.

Such an event may still contribute to progression through its actual consequences: completing a milestone, discovering knowledge, earning reputation, gaining material access where P4 permits it, unlocking a mentor/training opportunity, or producing a specific hard-won insight.

The reward comes from the authored meaning of the event, not from species as XP containers.

## 15. Psychic gifts

Rare psychic/miracle-worker gifts remain outside the ordinary Competence catalog.

A character cannot buy psychic power by spending generic advancement points unless the character already possesses an explicitly established rare-gift state and the later P3 psychic contract permits a specific advancement.

`ritual +2`, high Will, high Intellect or shrine upbringing alone never creates supernatural ability.

## 16. Downstream contract

### P3

- inventory/economy design must provide useful progression/reward channels without replacing advancement with money-based stat purchasing;
- rare psychic-gift rules must plug into this progression model without creating a parallel unrestricted spell-XP system;
- fate/roll-intervention resources, if added, must remain separate from `advancement_points`.

### P4

- species dossiers may provide knowledge, training opportunities or species-specific insight unlocks, but should not assign generic XP values;
- companionship progression remains relational/species-specific rather than a Competence track.

### P5

Event data must support deterministic operations equivalent to:

- `grant_advancement(amount, milestone_id)`;
- `grant_growth_eligibility(target_id, source_event_id)`;
- direct knowledge/reputation/permission rewards;
- checkpoint availability for advancement spending.

Repeated event IDs must not grant one-shot milestone advancement twice in the same run unless the content explicitly defines a new milestone instance.

### P7/P8

- save state must version advancement points, spent improvements and growth eligibility;
- UI must show why an improvement is available or unavailable;
- the player should be able to inspect the causal source of an eligibility unlock rather than seeing unexplained locked nodes;
- no frame/update polling is required for progression; state changes occur only on gameplay transitions.

## 17. Balance note

The numerical costs in this contract are initial balance values, not sacred constants. Playtesting may tune `1 / 2 / 3` advancement costs or milestone award cadence.

Changing the following requires an explicit rules decision rather than incidental tuning:

- no generic character levels;
- no kill-XP or use-count grinding;
- milestone-earned spendable advancement;
- fiction/experience-gated improvement eligibility;
- player choice over final advancement spend;
- attributes being rarer to improve than ordinary Competence;
- no universal Pokémon-taming Competence.

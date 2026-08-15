# P4 Batch 13 — Aerial Ecology, Territoriality, Traversal, and Multi-Head Control Selection Plan

Status: **SELECTED — source review next**  
Date: **2026-08-15**  
Parent issue: **#5 — P4 Pokémon adaptation + complete Gen-I 151 species dossiers**

## Purpose

Batch 13 selects seven remaining `not_started` bird-family species as one coherent stress roster:

- #016 Pidgey / #017 Pidgeotto / #018 Pidgeot
- #021 Spearow / #022 Fearow
- #084 Doduo / #085 Dodrio

The roster is not selected because the first five are near one another in National Pokédex order. Together these families stress a setting-critical boundary for the pre-Hisui world: **Flying typing, extreme movement descriptions, territorial aerial predation, homing/navigation, short-wing limitations, and multiple heads must remain species-local capabilities and ecology rather than becoming a universal flight permission, travel-time formula, extra-turn rule, or modern trainer/mount assumption.**

This file is a selection plan only. The authoritative coverage manifest remains unchanged until claim-level source review, full-schema dossier authoring, contradiction checks, and the Batch 13 completion audit pass.

## Selected roster

| Dex | Species | Primary contract pressure |
|---:|---|---|
| #016 | Pidgey | strong homing/navigation evidence and defensive sand-kicking without a generic Flying-type navigation bonus |
| #017 | Pidgeotto | large defended territory, patrol behavior, prey search, and claw punishment without universal territorial aggro or aerial-map control rules |
| #018 | Pidgeot | high-performance mature aerial capability, striking plumage, and trainer-attraction evidence without importing modern ownership norms; historical extreme-speed claims require versioned review before gameplay use |
| #021 | Spearow | aggressive territory defense plus explicit short-wing/limited-distance flight evidence, directly testing `Flying type != unlimited flight/travel permission` |
| #022 | Fearow | food theft, aerial prey-search behavior, and fast opportunistic predation without generic inventory theft, unavoidable interception, or omniscient aerial scouting |
| #084 | Doduo | two heads with synchronized battle behavior and alternating sleep/watch states without two turns, two initiative slots, or perfect vigilance |
| #085 | Dodrio | three heads, three hearts/lung sets, endurance-running emphasis, and one head gaining primary bodily control without three turns, three entities, or automatic internal consensus |

Current authoritative coverage stays:

```text
dossier_complete_count == 96
pilot_reviewed_count == 2
not_started_count == 53
draft_count == 0
blocking_p4_gate_count == 0
```

If all seven later pass full authoring, the expected state is `103 complete / 2 pilot_reviewed / 46 not_started`. That promotion is not part of this selection scope.

## Selection evidence

Current primary official Pokémon Pokédex material is sufficient to justify this pressure set before the full source review:

- **Pidgey:** current official material describes unusually reliable return-to-nest navigation even after being moved far from familiar surroundings; another current official entry describes a docile response that prefers kicking up sand to direct fighting.
- **Pidgeotto:** current official material describes a large claimed territory that it actively patrols and defends with sharp claws; another current official entry emphasizes repeated flight around that territory while searching for prey.
- **Pidgeot:** current official material establishes the mature Normal/Flying form and modern trainer attraction to its plumage. Older/version-specific Pokédex claims about exceptional flight speed are deliberately not bound by this selection file and must be inventoried and version-scoped in source review before they affect ancient gameplay.
- **Spearow:** current official material explicitly says its short wings prevent long-distance flight and separately describes reckless defense of territory even against larger Pokémon.
- **Fearow:** current official material describes dangerous food-snatching within its territory and aerial circling over ocean while searching for fish Pokémon.
- **Doduo:** current official material says its twin heads have the same genes, can battle in close synchronization, and alternate sleeping so that one head remains awake as a lookout.
- **Dodrio:** current official material describes three hearts and three sets of lungs, greater running endurance than Doduo, and a strongest head that becomes leader and gains primary control of the body.

Official selection pointers, verified 2026-08-15:

- Pidgey: https://sg.portal-pokemon.com/play/pokedex/0016
- Pidgeotto: https://sg.portal-pokemon.com/play/pokedex/0017
- Pidgeot: https://sg.portal-pokemon.com/play/pokedex/0018
- Spearow: https://sg.portal-pokemon.com/play/pokedex/0021
- Fearow: https://sg.portal-pokemon.com/play/pokedex/0022
- Doduo: https://sg.portal-pokemon.com/play/pokedex/0084
- Dodrio: https://sg.portal-pokemon.com/play/pokedex/0085

Current Pokemon.com regional pages were also checked as a primary-source cross-check where indexed. Full source review must still inventory version-tagged historical Pokédex evidence, pinned `SRC-DATA-001` species/type/base-stat/ability/evolution data, move/ability context, contradictions, later-form contamination, and chronology-safe interpretation before stronger claims are authored.

## Why these seven now

Completed P4 batches already cover stat normalization, stat-independent hazards, exceptional individuals, evolution/maturation boundaries, composite identity, chronology-safe non-presence, social encounter units, legendary rarity, biological-resource semantics, regeneration, mind-state/agency boundaries, toxin delivery, nonvisual navigation, aquatic/terrain/temperature permissions, state-dependent capability loss, human proximity, voluntary labor, species-associated objects, multi-limb action economy, body-integrated elemental anatomy, qualitative condition signals, and battle-history exceptionalism.

Batch 13 adds four connected regression surfaces that remain insufficiently exercised:

1. **Flying typing versus actual traversal envelope** — Spearow explicitly has limited-distance flight despite Flying typing, while Doduo/Dodrio are behaviorally dominated by terrestrial running; travel permission must be authored from species evidence rather than inferred from type alone;
2. **aerial mobility versus map-time formulas** — Pidgey homing, Pidgeotto territorial patrol, Fearow aerial hunting, and any source-reviewed Pidgeot extreme-speed evidence must not become `Speed = travel distance`, free fast travel, unavoidable interception, or perfect scouting;
3. **territorial ecology versus generic aggro** — Pidgeotto and Spearow territorial defense and Fearow food pressure should create encounter triggers and warning ecology, not a universal Flying-family hostility state or automatic combat on zone entry;
4. **multiple heads versus action economy/entity count** — Doduo and Dodrio remain one active creature/entity. Head synchronization, lookout rotation, leadership and disagreement are internal behavior/state hooks, not extra turns, extra companion slots, extra reaction pools, or multiple independent actors unless a later explicit rule says otherwise.

The roster also directly tests the project's intended power fantasy. A common small bird species can remain routine later in progression, while a mature, source-backed exceptional aerial predator or explicitly exceptional individual can still be dangerous without any player-level enemy scaling.

## Binding boundaries

Batch 13 consumes existing P2/P3/P4 contracts instead of introducing a universal flight, mount, travel-speed, territory, stealth-detection, or multi-head subsystem.

The batch must preserve these invariants:

1. `Flying` typing alone does not grant unlimited sustained flight, safe passenger transport, aerial fast travel, perfect landing, hover, weather immunity, or unrestricted route bypass;
2. species-local flight distance, endurance, altitude, acceleration, turning, landing and payload capacity must not be inferred from the six-axis Speed rating alone;
3. Pidgey's homing ability is not perfect global navigation, map revelation, routefinding for humans, teleportation, or immunity to all disorientation effects;
4. Pidgey's docility/defensive sand behavior is a tendency/context hook, not a universal harmlessness rule or guaranteed nonlethal response;
5. Pidgeotto territorial patrol is ecology and encounter-state evidence, not continuous map surveillance, automatic detection, or unconditional attack on every intruder;
6. sharp-claw punishment and prey hunting do not create a universal Flying-type talon attack or damage formula;
7. Pidgeot's modern trainer-attraction text proves modern admiration/selection context only; it does not establish ancient trainer culture, routine ownership, breeding, mount service, messenger institutions, or settlement-common companionship;
8. any historical/versioned Pidgeot Mach-number or other extreme-speed statement must be preserved with source/version context and must not be translated directly into per-round distance, real-world kinetic-energy damage, reaction impossibility, or travel-time equations;
9. Spearow's short-wing limited-distance flight is positive evidence that type is not enough to infer traversal endurance;
10. Spearow territorial aggression is a species/context tendency, not a permanent berserk state or guaranteed willingness to fight to the death;
11. Fearow food theft is an encounter behavior, not permission for arbitrary inventory deletion, unavoidable stealing, or automatic targeting of every carried ration;
12. Fearow aerial prey search does not imply omniscient detection, perfect ocean search coverage, or generic prey-tag knowledge;
13. Doduo's two heads remain one Pokémon/entity and one visible companion slot if companionship ever applies;
14. Doduo synchronized fighting does not grant two turns, two attack rolls per ordinary action, two initiative entries, or automatic advantage;
15. alternating head sleep/watch may support reduced vulnerability to ordinary surprise in specifically justified states, but not perfect awareness or immunity to sleep, ambush, distraction or stealth by default;
16. Dodrio's three hearts/lung sets are anatomy and endurance evidence, not three independent HP pools, three lives, or automatic survival after otherwise lethal injury;
17. Dodrio head leadership is internal control-state evidence, not a universal personality-splitting rule, three independent characters, or permission for player control to be arbitrarily overridden;
18. `Run Away`, `Early Bird`, `Keen Eye`, and `Tangled Feet` remain modern ability/mechanic context until source review determines whether any diegetic interpretation is separately evidenced; modern battle wording is not copied as literal ancient percentages/guarantees;
19. evolution-family claims remain stage-local unless source evidence supports inheritance;
20. Mega Pidgeot and later-generation additions/forms remain outside the mandatory Gen-I baseline except as clearly labeled provenance/context;
21. D-034 direct encounterability remains separate from baseline-era natural presence and from ordinary regional abundance;
22. ordinary species do not scale to the player; exceptional/named individuals require explicit persistent authoring rather than generic elite multipliers.

## Human Design Gate test

**No blocking Human Design Gate is required for Batch 13 selection.** Existing owner-approved contracts already distinguish:

- typing/stat identity from species-local traversal capability;
- battle stats from real-world movement/physics formulas;
- ordinary species baselines from exceptional individuals;
- encounter behavior from guaranteed player-state outcomes;
- one Pokémon entity from body-part count;
- modern trainer/ability metadata from ancient social/ecological assumptions;
- mandatory direct encounterability from baseline-era spawn authorization.

If source review exposes genuinely contradictory Pidgeot speed wording, Doduo/Dodrio flight capability wording, or multi-head cognition claims, preserve source/version scope and author conservatively. Raise a Human Design Gate only if playable behavior cannot remain coherent without a new persistent owner-facing rule.

## Source-review work package

For each selected species, the next scope must:

1. inventory current and historically relevant version-tagged official Pokédex evidence for navigation, territoriality, aggression, prey search, flight distance/endurance, extreme speed, multi-head cognition, sleep/watch rotation and internal bodily control;
2. inspect pinned `SRC-DATA-001` species/type/base-stat/ability/evolution data under the existing provenance strategy;
3. audit `Keen Eye`, `Tangled Feet`, `Run Away`, and `Early Bird` as modern battle-mechanic context rather than automatic ancient physiology;
4. classify every material claim as direct official fact, cross-source synthesis, conservative inference, project extrapolation, or unresolved;
5. distinguish typing and Speed rating from explicit traversal permissions;
6. distinguish territorial/prey behavior from generic aggro, perfect detection, unavoidable theft or deterministic inventory loss;
7. distinguish multi-head anatomy/cognition from active-entity count, action count, initiative, HP pools and companion-slot count;
8. preserve version scope for older extreme-speed or flight claims instead of flattening them into one timeless statement;
9. run P2/P3/P4 contradiction checks, evolution-stage inheritance checks and chronology-safe ancient-world interpretation;
10. raise a Human Design Gate only if a durable product rule is actually unavoidable.

## Promotion gate

Do not change these rows yet:

```text
#016 pidgey    = not_started
#017 pidgeotto = not_started
#018 pidgeot   = not_started
#021 spearow   = not_started
#022 fearow    = not_started
#084 doduo     = not_started
#085 dodrio    = not_started
```

Manifest promotion requires a Batch 13 source review, complete schema-compliant dossiers for all seven species, provenance and contradiction audits, evolution-family consistency review, traversal/territoriality/multi-head regressions, refreshed manifest audit, and `P4_BATCH_13_COMPLETION_AUDIT` = PASS.

## Exact next work

Create **P4 Batch 13 source review** for these seven species. Establish evidence-backed boundaries for navigation versus perfect routefinding, territorial patrol versus generic aggro/detection, flight typing versus actual traversal envelope, historical extreme-speed claims versus real-time physics/travel formulas, food theft versus deterministic inventory loss, and Doduo/Dodrio multi-head biology versus entity/action/HP count.

Do not promote the manifest yet. Do not begin P5.

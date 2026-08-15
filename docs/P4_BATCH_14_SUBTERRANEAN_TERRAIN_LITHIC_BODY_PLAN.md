# P4 Batch 14 — Subterranean Traversal, Terrain Integrity, Lithic Bodies, and Self-Propelled Hazards Selection Plan

Status: **SELECTED — source review next**  
Date: **2026-08-15**  
Parent issue: **#5 — P4 Pokémon adaptation + complete Gen-I 151 species dossiers**

## Purpose

Batch 14 selects eight remaining `not_started` species as one coherent subterranean / terrain / lithic-body stress roster:

- #027 Sandshrew / #028 Sandslash
- #050 Diglett / #051 Dugtrio
- #074 Geodude / #075 Graveler / #076 Golem
- #095 Onix

The roster is not selected because these species share Ground or Rock typing. Together they stress a setting-critical boundary for the pre-Hisui world: **burrowing, rolling locomotion, rocklike bodies, underground ambush, terrain disturbance, shed mineral-like material, and explosive self-propulsion must remain species-local capabilities and authored hazards rather than becoming universal Ground/Rock traversal permissions, generic terrain-destruction formulas, free mining tools, automatic resource drops, or hidden extra-action rules.**

This file is a selection plan only. The authoritative coverage manifest remains unchanged until claim-level source review, full-schema dossier authoring, contradiction checks, and the Batch 14 completion audit pass.

## Selected roster

| Dex | Species | Primary contract pressure |
|---:|---|---|
| #027 | Sandshrew | deep burrow dwelling plus defensive curling/rolling without a universal Ground-type tunneling permission or generic armor formula |
| #028 | Sandslash | hardened-hide spines, sharp claws, rolling attack, and rapid scurrying without converting body anatomy into ordinary harvestable equipment or a repeatable collision-damage formula |
| #050 | Diglett | predominantly underground life, shallow depth, root feeding, occasional surface emergence, and light exposure weakness without inventing unsupported hidden-body anatomy or universal sunlight rules |
| #051 | Dugtrio | three heads cooperating to loosen soil and attack from unexpected underground directions without three entities, extra turns, perfect ambush, or terrain-agnostic burrowing |
| #074 | Geodude | rock camouflage, mountain-road presence, climbing by arms, and anger after careless contact without treating the species as scenery/loot or making camouflage automatic invisibility |
| #075 | Graveler | rolling locomotion, slope descent, cliff-wall dwelling, and rock consumption without unstoppable movement, automatic landslides, or generic mineral consumption/resource formulas |
| #076 | Golem | rugged rocklike shell, annual shedding, shed-shell soil value, and source-backed self-explosive propulsion without reusable free explosives, guaranteed self-death/survival, automatic farming-resource drops, or physics-derived blast damage |
| #095 | Onix | deep high-speed boring, earth tremors, rock consumption, and solidifying body material without turning six-axis Speed into literal travel velocity or granting universal route creation / structure destruction |

Current authoritative coverage stays:

```text
dossier_complete_count == 103
pilot_reviewed_count == 2
not_started_count == 46
draft_count == 0
blocking_p4_gate_count == 0
```

If all eight later pass full authoring, the expected state is `111 complete / 2 pilot_reviewed / 38 not_started`. That promotion is not part of this selection scope.

## Selection evidence

Current primary official Pokémon Pokédex material is sufficient to justify this pressure set before the full source review:

- **Sandshrew:** current official material describes deep burrows as its living place and curling into a ball for protection when threatened.
- **Sandslash:** current official material describes hardened-hide spikes, sharp claws, rapid movement, and rolling attacks.
- **Diglett:** current official material places it roughly one yard underground, feeding on roots and only sometimes appearing above ground; another current entry makes prolonged light exposure a species-local physiological weakness.
- **Dugtrio:** current official material describes three heads moving independently to loosen nearby soil and underground attacks arriving from unexpected directions.
- **Geodude:** current official material describes a resting Geodude as rocklike enough to be stepped on accidentally, and separately places it in mountainous terrain where it climbs using its arms.
- **Graveler:** current official material describes rolling as its preferred locomotion, rock consumption, cliff-wall holes, and dangerous downhill rolling that can resemble a rockfall.
- **Golem:** current official material describes a hard rocklike shell that is shed yearly, shed-shell material breaking down into soil useful for fields, and deliberate self-explosion used for mountain-to-mountain movement.
- **Onix:** current official material describes deep boring through the ground, rock consumption, surface tremors caused by subterranean movement, and an explicit historical high-speed tunneling statement that must remain source-scoped rather than becoming a real-time travel/damage formula.

Official selection pointers, verified 2026-08-15:

- Sandshrew: https://sg.portal-pokemon.com/play/pokedex/0027
- Sandslash: https://sg.portal-pokemon.com/play/pokedex/0028
- Diglett: https://sg.portal-pokemon.com/play/pokedex/0050
- Dugtrio: https://sg.portal-pokemon.com/play/pokedex/0051
- Geodude: https://sg.portal-pokemon.com/play/pokedex/0074
- Graveler: https://sg.portal-pokemon.com/play/pokedex/0075
- Golem: https://sg.portal-pokemon.com/play/pokedex/0076
- Onix: https://sg.portal-pokemon.com/play/pokedex/0095

Current Pokemon.com regional pages were also checked as a primary-source cross-check where indexed. Full source review must still inventory version-tagged historical Pokédex evidence, pinned `SRC-DATA-001` species/type/base-stat/ability/evolution data, move/ability context, contradictions, later-form/evolution contamination, and chronology-safe interpretation before stronger claims are authored.

## Why these eight now

Completed P4 batches already cover stat normalization, stat-independent hazards, exceptional individuals, evolution/maturation boundaries, composite identity, chronology-safe non-presence, social encounter units, legendary rarity, biological-resource semantics, regeneration, mind-state/agency boundaries, toxin delivery, nonvisual navigation, aquatic/terrain/temperature permissions, state-dependent capability loss, human proximity, voluntary labor, species-associated objects, multi-limb action economy, body-integrated elemental anatomy, qualitative condition signals, battle-history exceptionalism, aerial traversal limits, territoriality, and multi-head control.

Batch 14 adds five connected regression surfaces that remain insufficiently exercised:

1. **Ground/Rock typing versus actual subterranean permission** — Sandshrew, Diglett/Dugtrio, and Onix have explicit burrowing evidence while Geodude/Graveler/Golem primarily exercise climbing, rolling, cliff dwelling, lithic anatomy, or explosive movement. Type alone must never create a generic `can tunnel` flag;
2. **terrain interaction versus terrain-destruction formulas** — Dugtrio loosens soil and Onix bores deeply enough to shake the surface, but neither fact establishes universal structure damage, mining output, route excavation, collapse radius, or `Force = terrain damage` math;
3. **rocklike body versus object/resource semantics** — Geodude may resemble a rock and Golem sheds a rocklike shell, but Pokémon bodies are not scenery, ordinary ore nodes, equipment, or automatic loot. Species-local nonlethal shed-material use must remain distinct from killing/harvesting;
4. **locomotion fiction versus six-axis Speed / collision physics** — Graveler rolls, Golem can use explosive force for movement, and Onix has explicit extreme boring speed evidence. These must not be translated into per-round meters, kinetic-energy damage, unavoidable impacts, or free fast travel;
5. **hidden or multiple body structures versus entity/action count** — Diglett's unseen lower body must remain intentionally unresolved where official evidence does not define it, while Dugtrio's three heads remain one Pokémon/entity, one ordinary turn, one health state, and one visible companion slot.

The roster also deepens the intended old-world exploration pressure. Underground creatures can make a seemingly stable road, field, slope, or tunnel dangerous through species-specific signs and local ecology without requiring a global voxel-terrain or continuous physics simulation.

## Binding boundaries

Batch 14 consumes existing P2/P3/P4 contracts instead of introducing universal burrowing, mining, terrain-destruction, collision, geology, or explosion subsystems.

The batch must preserve these invariants:

1. `Ground` or `Rock` typing alone does not grant burrowing, tunneling, earthmoving, wall-climbing, slope safety, underground breathing, cave navigation, excavation, or terrain-destruction permission;
2. species-local burrowing depth, substrate tolerance, turning, speed, endurance, tunnel stability, route creation and passenger/payload capacity must not be inferred from six-axis Speed or Force ratings alone;
3. Sandshrew's defensive curling is a species-local posture/capability, not invulnerability, a generic Ground resistance, or a fixed armor multiplier;
4. Sandslash spines and claws are anatomy, not ordinary detachable weapons, armor pieces, or guaranteed harvest resources;
5. Diglett's unseen body must not be filled in with project pseudo-canon. Unsupported lower-body anatomy remains `unknown` / `intentionally unresolved` unless primary evidence justifies more;
6. Diglett's light exposure weakness is species-local physiology, not a universal Ground-type sunlight penalty or automatic damage-over-time rule;
7. Dugtrio remains one Pokémon/entity despite three visible heads. It receives one ordinary turn, one health state, one initiative presence, and one visible companion slot if companionship ever applies;
8. Dugtrio underground attacks do not grant perfect stealth, unavoidable surprise, immunity to counter-detection, or attacks through every substrate/barrier;
9. Geodude's rocklike appearance can support low-information misidentification, but not automatic invisibility, object status, inventory pickup, ore-node semantics, or guaranteed surprise;
10. Geodude/Graveler/Golem lithic body descriptions do not prove they are literally ordinary geological rock in every biological/material sense;
11. Graveler rolling is locomotion/encounter fiction, not an unstoppable movement state, guaranteed collision, automatic landslide, or real-world momentum formula;
12. Graveler rock consumption is ecology evidence, not a generic resource sink, mineral assay mechanic, or proof that every rock/mineral is edible/useful;
13. Golem's annual shed shell is a source-backed nonlethal material path. Its field-use value does not create an automatic drop, universal fertilizer economy, guaranteed ownership right, or species-wide farming institution;
14. Golem's self-explosive movement must preserve source/version context. It does not automatically mean ordinary self-destruction causes death, complete healing, infinite repeatability, player-manufacturable explosives, reusable transport, or a literal blast-energy/damage equation;
15. Onix high-speed boring is species-local traversal evidence, not `Speed = mph`, per-round movement, free fast travel, guaranteed escape, or kinetic-impact damage;
16. Onix tremors and tunneling do not automatically collapse every overhead structure, reveal the whole map, create safe permanent tunnels, or grant humans passenger transport;
17. `Sand Veil`, `Arena Trap`, `Rock Head`, and `Sturdy` remain modern battle-mechanic context until source review determines whether any diegetic interpretation is separately evidenced; modern percentages/guarantees are not copied literally;
18. Alolan Sandshrew/Sandslash, Alolan Diglett/Dugtrio, Alolan Geodude/Graveler/Golem, Steelix and other later-generation additions/forms remain outside the mandatory Gen-I baseline except as clearly labeled provenance/context;
19. evolution-family claims remain stage-local unless source evidence supports inheritance;
20. D-034 direct encounterability remains separate from baseline-era natural presence and from ordinary regional abundance;
21. ordinary species do not scale to the player; exceptional/named individuals require explicit persistent authoring rather than generic elite multipliers;
22. no species-local terrain capability creates a continuous terrain simulation requirement for P5/P7. Event-state hooks and authored consequences remain sufficient unless a later explicit architecture decision says otherwise.

## Human Design Gate test

**No blocking Human Design Gate is required for Batch 14 selection.** Existing owner-approved contracts already distinguish:

- typing/stat identity from species-local capabilities;
- six-axis ratings from real-world travel/physics formulas;
- authored hazards from universal terrain simulation;
- anatomy from equipment/loot/resource semantics;
- nonlethal shed materials from generic harvesting;
- body-part count from Pokémon entity/action count;
- source-backed facts from unsupported pseudo-canon;
- mandatory direct encounterability from baseline-era spawn authorization.

If source review exposes contradictory Diglett-body evidence, substrate-specific tunnel limits, Golem explosion survivability/repeatability claims, or Onix travel-speed wording, preserve source/version scope and author conservatively. Raise a Human Design Gate only if playable behavior cannot remain coherent without a new persistent owner-facing rule.

## Source-review work package

For each selected species, the next scope must:

1. inventory current and historically relevant version-tagged official Pokédex evidence for burrowing, underground habitat, rolling locomotion, climbing, substrate interaction, rock consumption, camouflage, shed shell/material use, self-explosion and high-speed boring;
2. inspect pinned `SRC-DATA-001` species/type/base-stat/ability/evolution data under the existing provenance strategy;
3. audit `Sand Veil`, `Arena Trap`, `Rock Head`, and `Sturdy` as modern battle-mechanic context rather than automatic ancient physiology;
4. classify every material claim as direct official fact, cross-source synthesis, conservative inference, project extrapolation, or unresolved;
5. distinguish Ground/Rock typing and six-axis ratings from explicit traversal/terrain permissions;
6. distinguish rocklike appearance/body material from object, equipment, ore, loot and ordinary harvest semantics;
7. distinguish rolling/boring/explosive locomotion from real-world velocity, momentum, blast-energy and structure-damage formulas;
8. preserve uncertainty around Diglett hidden anatomy and preserve version scope around Golem/Onix extreme claims;
9. run P2/P3/P4 contradiction checks, evolution-stage inheritance checks, later-form contamination checks, and chronology-safe ancient-world interpretation;
10. raise a Human Design Gate only if a durable product rule is actually unavoidable.

## Promotion gate

Do not change these rows yet:

```text
#027 sandshrew = not_started
#028 sandslash  = not_started
#050 diglett    = not_started
#051 dugtrio    = not_started
#074 geodude    = not_started
#075 graveler   = not_started
#076 golem      = not_started
#095 onix       = not_started
```

Manifest promotion requires a Batch 14 source review, complete schema-compliant dossiers for all eight species, provenance and contradiction audits, evolution-family consistency review, subterranean/terrain/lithic-body/explosion regressions, refreshed manifest audit, and `P4_BATCH_14_COMPLETION_AUDIT` = PASS.

## Exact next work

Create **P4 Batch 14 source review** for these eight species. Establish evidence-backed boundaries for Ground/Rock typing versus actual burrowing permission, underground ambush versus perfect stealth, terrain interaction versus destruction/mining formulas, rocklike bodies versus object/resource semantics, Golem shed material versus automatic drops/economy, explosive/rolling/boring locomotion versus real-world physics, and Dugtrio multi-head anatomy versus entity/action count.

Do not promote the manifest yet. Do not begin P5.

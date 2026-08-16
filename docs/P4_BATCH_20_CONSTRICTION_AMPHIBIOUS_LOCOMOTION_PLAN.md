# P4 Batch 20 — Constriction, Venom, and Amphibious Locomotion Selection Plan

Status: **SELECTED — source review next**  
Date: **2026-08-16**  
Parent issue: **#5 — P4 Pokémon adaptation + complete Gen-I 151 species dossiers**

## Purpose

Batch 20 selects five of the eight remaining `not_started` Generation-I species as one pressure cluster:

- #023 Ekans
- #024 Arbok
- #060 Poliwag
- #061 Poliwhirl
- #062 Poliwrath

These five are grouped by contract pressure rather than Pokédex adjacency alone. Together they stress stealth and tongue sensing, venom maturity, intimidation displays, constriction, persistent pursuit, amphibious body plans, weak-versus-developed land locomotion, moist/slippery skin, gaze-linked drowsiness, extreme swimming claims, and brief water-surface movement.

If flattened into generic subsystem rules, these claims could accidentally create automatic stealth, unavoidable poison, forced Fear, guaranteed grapples, inescapable pursuit, passive hypnosis, a continuous hydration meter, universal amphibious traversal, infinite stamina, or literal world-travel formulas.

Batch 20 therefore asks one shared question: **how can strongly species-specific anatomy and locomotion remain dangerous and useful while preserving warning, eligibility, counterplay, ordinary action economy, player input, and event-scoped runtime state?**

This file is a selection plan only. The authoritative coverage manifest remains unchanged until claim-level source review, frozen-schema dossier authoring, contradiction checks, deterministic stat reproduction, and the Batch 20 completion audit all pass.

## Selected roster

| Dex | Species | Primary contract pressure |
|---:|---|---|
| #023 | Ekans | stealthy ambush, tongue sensing, expandable jaw and age/venom wording without automatic invisibility, omniscient sensing, instant swallowing or universal poison |
| #024 | Arbok | intimidation pattern, venomous constriction and persistent pursuit without forced Fear, guaranteed restraint, unavoidable poison, infinite chase or generic crushing/mining power |
| #060 | Poliwag | newly developed legs, poor land locomotion, thin/flexible skin and aquatic preference without a maturation simulator, automatic immobilization, universal armor or unrestricted Water-type traversal |
| #061 | Poliwhirl | amphibious living, moist/slippery skin and spiral-linked drowsiness without a hydration meter, guaranteed grapple escape, passive hypnosis, lost input or continuous gaze polling |
| #062 | Poliwrath | all-muscle swimming, extreme endurance wording and momentary water-surface running without infinite stamina, literal ocean-travel formulas, permanent water walking or free extra movement |

Current authoritative coverage remains:

```text
dossier_complete_count == 141
pilot_reviewed_count == 2
not_started_count == 8
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

If all five later pass full authoring, expected coverage becomes `146 complete / 2 pilot_reviewed / 3 not_started`. That promotion is explicitly outside this selection/source-review scope.

The final remaining `not_started` pool would then be:

```text
#098 Krabby
#099 Kingler
#108 Lickitung
```

## Selection evidence

Current official Pokémon Pokédex material is sufficient to justify this pressure set before the claim-level review:

- **Ekans:** current official material describes swallowing large prey with a freely detachable jaw, possible post-feeding immobility from weight, common grassland presence, and tongue-based danger sensing.
- **Arbok:** current official material describes a frightening belly pattern that can make weak foes flee and extremely persistent pursuit after prey is selected.
- **Poliwag:** current official material describes the visible abdominal spiral as internal anatomy and emphasizes newly grown legs that are still poor at walking compared with swimming.
- **Poliwhirl:** current official material describes developed legs, viable ground living with a water preference, and a moist body surface.
- **Poliwrath:** current official material describes powerful whole-body swimming despite living on dry land and a split-second ability to run on the water surface using developed limbs.

Official selection pointers, verified 2026-08-16:

- Ekans: https://sg.portal-pokemon.com/play/pokedex/0023
- Arbok: https://sg.portal-pokemon.com/play/pokedex/0024
- Poliwag: https://sg.portal-pokemon.com/play/pokedex/0060
- Poliwhirl: https://sg.portal-pokemon.com/play/pokedex/0061
- Poliwrath: https://sg.portal-pokemon.com/play/pokedex/0062

The claim-level source review must still inventory historical/version-tagged evidence and preserve whether a statement is current observation, historical wording, analogy/reputation, researcher interpretation, contextual ecology, or modern battle-system metadata.

## Pinned structured-data verification

`SRC-DATA-001` remains the pinned PokéAPI `api-data` baseline at revision:

```text
2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

Applying unchanged `p4-six-axis-v1` thresholds (`<40 => 1`, `40..59 => 2`, `60..79 => 3`, `80..99 => 4`, `100..119 => 5`, `>=120 => 6`) yields:

```text
Ekans      35/60/44/40/54/55 -> 1/3/2/2/2/2
Arbok      60/95/69/65/79/80 -> 3/4/3/3/3/4
Poliwag    40/50/40/40/40/90 -> 2/2/2/2/2/4
Poliwhirl  65/65/65/50/50/90 -> 3/3/3/2/2/4
Poliwrath  90/95/95/70/90/70 -> 4/4/4/3/4/3
```

All five are deterministic reproductions with **zero manual rating exceptions**. These ratings remain species baselines rather than player-relative encounter levels; venom, constriction, hypnosis-like pressure, slippery escape and extreme endurance remain separate capability/hazard evidence.

## Why these five now

After Batch 19, the remaining eight species are:

```text
#023 Ekans       #024 Arbok
#060 Poliwag     #061 Poliwhirl    #062 Poliwrath
#098 Krabby      #099 Kingler
#108 Lickitung
```

The selected five create a coherent regression surface around:

1. **stealth and sensing versus certainty** — quiet movement or tongue sensing may affect encounter state without invisibility, perfect detection or continuous scanning;
2. **venom versus automatic status** — venom requires an eligible bite/contact/exposure path and bounded consequence rather than proximity-based poisoning;
3. **intimidation versus forced player state** — threatening displays can affect fictional permission, Fear risk or approach difficulty without automatically taking control away from the player;
4. **constriction versus guaranteed restraint** — wrapping/grappling requires encounter positioning, warning where possible, counterplay and escape rather than a free irreversible state;
5. **persistent pursuit versus infinite chase** — pursuit pressure can remain high without deleting disengagement, terrain escape, concealment, injury, resource or authored stop conditions;
6. **amphibious bodies versus generic traversal** — Poliwag/Poliwhirl/Poliwrath have distinct land/water asymmetries that must not become `Water type = unrestricted amphibious movement`;
7. **moist/slippery skin versus continuous physiology** — wet skin and escape advantages can be event-scoped without a per-frame hydration, lubrication or grapple simulation;
8. **drowsiness evidence versus passive mind control** — Poliwhirl's spiral can create authored visual-exposure pressure without automatic sleep, permanent stare checks or player-input denial;
9. **extreme stamina wording versus infinite resources** — source-scale ocean-crossing claims establish extraordinary endurance but do not create literal unlimited stamina or fast-travel equations;
10. **runtime cost discipline** — sensing, gaze exposure, constriction, poison eligibility, wet-skin state and water/land mode should later use cached/coarse authored state plus event-triggered consequences rather than continuous polling.

Leaving Krabby/Kingler/Lickitung for the final batch preserves a compact last pressure set around claw force, shell morphology, grip/severing pressure, unusual tongue/contact anatomy and food/licking interactions.

## Binding boundaries

Batch 20 consumes existing P2/P3/P4 contracts. It does not introduce a generic stealth engine, venom engine, grapple subsystem, pursuit simulator, hypnosis system, hydration model, swimming physics layer, stamina meter, or water-walking mechanic.

The selection must preserve these invariants:

1. D-034 remains binding: all five must be directly encounterable somewhere in total content, separate from commonness and ordinary companionship.
2. Ordinary Pokémon do not scale with the player; exceptional individuals require explicit persistent history/traits.
3. Each Pokémon remains one ordinary turn, one health state, one initiative presence and one visible companion slot regardless of body length, coils, limbs or repeated anatomy.
4. Ekans stealth does not grant invisibility or guaranteed surprise, and tongue sensing does not grant omniscience or continuous hidden-state detection.
5. Expandable-jaw/swallowing evidence does not create instant-kill swallowing of arbitrary targets, unrestricted object storage or inventory behavior.
6. Venom requires explicit exposure eligibility; species identity or proximity alone never applies poison automatically.
7. Arbok intimidation does not automatically force Fear, flee input or action loss. Any severe fear consequence remains authored and agency-safe under P3.
8. Arbok constriction does not create an unavoidable grapple, free extra attack, independent coil entity, or automatic death clock.
9. Historical absolute escape wording for Arbok constriction is source-scale evidence, not a universal no-escape rule.
10. Historical steel-drum crushing wording does not grant generic mining, structural deletion or arbitrary object-destruction permission.
11. Persistent pursuit does not mean infinite range, perfect tracking, teleportation, or cancellation of authored disengagement conditions.
12. Poliwag's weak newly grown legs create contextual land asymmetry, not automatic immobilization or a continuous growth simulator.
13. Thin/flexible skin does not equal universal puncture immunity or a generic armor multiplier.
14. Poliwhirl's amphibious evidence remains species-specific and does not generalize to all Water types.
15. Moist/slippery skin does not create guaranteed escape from every restraint, passive untargetability or a continuously simulated lubrication value.
16. Poliwhirl spiral-linked drowsiness requires authored visual exposure and resolution; it does not create automatic sleep, mind control, permanent gaze polling or player-input loss.
17. Poliwrath's extreme endurance wording does not create infinite stamina, infinite action loops or immunity to injury/exhaustion consequences.
18. Ocean-crossing/human-swimmer comparisons remain source scale and are not converted directly into turn distance, chase odds or world-map travel time.
19. Brief water-surface running does not create permanent water walking, passenger traversal, obstacle bypass or free reaction movement.
20. Modern abilities and evolution triggers remain provenance context rather than literal ancient formulas.
21. Politoed and King's Rock/trade evolution remain later-generation context under D-032; they do not silently enter the mandatory Gen-I baseline.
22. No claim in this batch requires continuous per-frame simulation; later implementation should prefer cached/coarse encounter state and event-triggered consequences.
23. No new Human Design Gate is required at selection time unless claim-level review reveals a genuine unresolved product decision.

## Source-review questions

### Ekans / Arbok

- Which venom, intimidation, sensing, stealth, constriction and pursuit claims are current versus historical/version-scoped?
- How should severe constriction wording preserve danger while retaining player counterplay and escape resolution?
- Which material-crushing statements are evidence of body force rather than generic terrain/object-destruction permissions?
- What does newborn/no-poison historical wording imply for age-conditioned venom without creating a continuous maturation simulator?

### Poliwag / Poliwhirl / Poliwrath

- Which water/land locomotion differences are stable enough to become species capability tags?
- How should thin/moist/slippery skin affect encounter options without continuous physiology simulation?
- How should Poliwhirl's spiral/drowsiness evidence preserve warning, exposure and player input?
- How should Poliwrath's extreme endurance and water-surface movement be represented without literal travel or infinite-stamina rules?
- Which Poliwrath/Politoed evolution metadata is modern/post-Gen-I context only under D-032?

## Exact next work

Perform the claim-level **P4 Batch 20 source review** for these five species against current official Pokédex pages plus pinned `SRC-DATA-001` evidence.

The source review must end with one of:

- `READY FOR FULL-SCHEMA AUTHORING`, or
- a narrowly defined Human Design Gate if existing contracts genuinely cannot resolve a material product choice.

Coverage-manifest promotion remains forbidden in this pass.
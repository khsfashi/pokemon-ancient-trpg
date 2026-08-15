# P4 Pilot Roster and Hazard-First Calibration Plan

Status: **ACTIVE — P4 pilot execution plan**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: D-031, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/REFERENCE_PROTOCOL.md`

## 1. Purpose

This plan turns the shared P4 Pokémon-domain contract into the smallest practical hazard-first pilot before bulk #001-#151 dossier authoring.

The pilot is not a mini-Pokédex and is not selected for favorite-species coverage. Each species is chosen because it exercises one or more failure-prone parts of the shared model. Overlap is intentional so a small roster can test the full validation matrix.

The pilot must prove all of the following before P4 freezes its first numeric rating scale:

- an ordinary weak species can become genuinely routine after human progression without changing that species' stats;
- a named/apex individual from that same kind of weak species can remain a serious threat for explicit world reasons;
- low canonical stats do not cap hazard severity;
- high stats do not imply aggression or automatic lethality;
- swarm/group danger is not reconstructed as a generic stat bonus;
- aquatic and large-body encounters change permissions and consequences through environment and scale;
- elemental and anomalous hazards can invalidate or reshape ordinary approaches;
- evolution-family relationships remain meaningful without making unevolved exceptional individuals impossible;
- fossil/history ambiguity can remain explicit instead of being filled with pseudo-canon;
- Legendary/Mythical treatment can remain indirect or singular without requiring ordinary spawn/capture logic.

## 2. Pilot roster

The first pilot roster is **8 species**.

| Dex | Species | Primary pilot responsibilities |
|---:|---|---|
| #019 | Rattata | common weak wildlife; ordinary late-run trivialization; concrete named/apex weak-species individual |
| #013 | Weedle | low-stat/high-hazard test; venom delivery vs consequence separation; preparation/countermeasure value |
| #015 | Beedrill | swarm/colony pressure; pursuit/territorial behavior; Weedle-family evolution consistency |
| #131 | Lapras | aquatic/environment-dependent action; formidable profile without assuming aggression; companion/logistics stress test |
| #130 | Gyarados | large-body/high-force encounter; water/environment displacement; severe escalation without reducing the encounter to HP subtraction |
| #092 | Gastly | Ghost/anomalous approach invalidation; exposure/knowledge/preparation semantics; non-physical threat handling |
| #140 | Kabuto | fossil/history ambiguity; evidence-bound ancient ecology; extinct/rare-history representation |
| #151 | Mew | Mythical/exceptional treatment; indirect knowledge, traces and singular-event compatibility |

This is a calibration set, not a statement that these eight species must all inhabit the opening locality or appear directly in the first playable slice.

### Why eight is sufficient for the first pass

The validation matrix deliberately overlaps:

- Rattata covers both ordinary weak-species progression and the exceptional-individual model.
- Weedle + Beedrill jointly test hazard severity, group pressure and one evolution family without requiring a separate dossier merely to add another mechanical axis.
- Lapras and Gyarados give two contrasting aquatic cases: environmental dependence without presumed hostility versus large-body/escalation pressure.
- Gastly tests a class of approach invalidation that ordinary physical stat comparisons cannot represent.
- Kabuto and Mew test content that should remain partially historical/indirect rather than being forced into routine encounter templates.

If one of these species fails to expose a required structural case during evidence review, replace or add a species only for that uncovered case. Do not grow the pilot merely for breadth.

## 3. Source and provenance rule

Pilot canonical-source packets follow the existing source hierarchy.

Structured baseline:

- `SRC-DATA-001` / PokéAPI `api-data` pinned revision `2cda0b56a3a8ad2529d8aac73528225f96d2c848` for normalized source fields such as identity, types, base stats and source-linked evolution data.

Canon/descriptive claims:

- prefer current official Pokémon / Nintendo / rights-holder material where available;
- use community structured data as an evidence carrier, not as authority for ancient ecology, medical severity, temperament, folklore or historical claims;
- paraphrase rather than copying long flavor text;
- classify project extrapolation under D-018 instead of presenting it as canon.

Each pilot dossier remains `draft` until its material evidence has been reviewed and its final rating-scale version is pinned.

## 4. Hazard-first authoring pass

Before selecting a numeric `rating_scale_version`, each pilot species receives an evidence packet containing:

1. canonical raw six base stats and source revision;
2. material physical/evolution/type facts relevant to the pilot responsibility;
3. behavior evidence or explicit uncertainty;
4. capability tags;
5. explicit hazard records where a capability can materially change consequence type, timing, ceiling or countermeasure;
6. warning signs and exposure/delivery paths where supportable;
7. context amplifiers/mitigators;
8. preparation, avoidance and emergency-consumable hooks only where justified;
9. provisional encounter examples showing which human approaches remain legal, difficult, routine or invalid;
10. provenance class for every nontrivial derived claim.

A hazard record must distinguish:

`delivery / exposure → successful application → immediate consequence → delayed/persistent consequence → countermeasure/recovery`

The species' six-axis ratings may influence whether exposure occurs or whether an action is resisted. They do not automatically set the post-exposure consequence ceiling.

## 5. Provisional rating treatment

The pilot may use temporary candidate ratings only to make examples concrete.

Until calibration finishes:

- `rating_scale_version` uses an explicitly provisional identifier such as `pilot-unpinned` or a named candidate;
- provisional ratings do **not** count as a completed P4 dossier rating profile;
- manual exceptions are not added merely to make an encounter feel dangerous;
- hazards, behavior and environment must remain independently inspectable from the numeric profile.

The previously discussed 5/6/7-tier concepts remain **calibration candidates only**. This plan does not select one in advance.

## 6. Rating-scale calibration gate

After the hazard-first evidence packets exist, compare candidate scales against the same concrete encounters.

Choose the **smallest useful bounded integer scale** that satisfies all of these tests:

1. **Monotonicity:** materially higher canonical source values normally map upward rather than producing arbitrary inversions.
2. **Useful differentiation:** important pilot contrasts remain distinguishable without requiring many species-specific exceptions.
3. **No hazard leakage:** Weedle does not need inflated Force/Potency merely to make venom consequential.
4. **No aggression leakage:** a formidable species does not become automatically hostile because its ratings are high.
5. **D-024 compatibility:** translated contest/difficulty guidance can fit the existing `7 / 9 / 11 / 13 / 15` human-check envelope without giant modifier stacks.
6. **Extremes remain representable:** weak common species and physically exceptional species both fit without immediately saturating the scale.
7. **Exceptional individuals remain explicit:** named/apex deltas can be represented without rewriting the species baseline or requiring player-level scaling.
8. **Low exception pressure:** the scale does not depend on a growing list of arbitrary per-species numeric overrides.

Only after these tests pass should P4 pin `rating_scale_version` for the 151-species authoring batches.

This calibration is balance/representation work rather than a lore decision. Raise a Human Design Gate only if the evidence exposes a persistent player-facing creative choice with multiple valid directions.

## 7. Rattata ordinary-vs-apex calibration fixture

Rattata is the explicit test of the approved `ordinary goblin-like later / rare terrifying exception` direction.

### 7.1 Ordinary Rattata invariant

The species baseline remains stable across the run.

Test at minimum:

- **early, poorly prepared human:** driving away or crossing close to an alarmed Rattata may still require a check when bite, pursuit, lost supplies or unsafe terrain create a real consequence;
- **experienced, well-equipped human in favorable terrain:** the same ordinary interaction may become routine and therefore require **no roll** under D-024;
- this transition is caused by human competence, equipment, knowledge and context — never by changing the ordinary Rattata baseline based on player progress.

### 7.2 Named/apex fixture

Create one persistent calibration individual with stable ID:

`pilot-rattata-apex-01`

The display epithet remains knowledge-gated and provisional until later content authoring; this pilot must not silently establish region-wide folklore.

Required distinctions before numeric deltas are finalized:

- explicit survival/history cause under D-031;
- `trap_wary` or equivalent learned anti-human behavior when supported as project-authored D2 encounter history;
- recognizable tracks/scars/habits or another learnable warning signature;
- at least one behavior/capability distinction in addition to eventual stat deltas;
- persistent identity across relevant authored events;
- no spawning rule tied to player level;
- a plausible avoidance/information path so danger is not merely an invisible stat surprise.

Exact stat deltas are assigned **after** the rating scale is pinned. The fixture is allowed to outperform an ordinary Raticate in selected axes only if the final authored profile makes that exceptional fact explicit rather than redefining Rattata as a species.

## 8. Weedle hazard calibration fixture

Weedle is the mandatory `low stat != harmless` test.

The dossier must keep separate questions:

- Can the Weedle reach/sting the human in this context?
- What warning/anatomical/behavioral signs are available?
- What happens if venom exposure actually succeeds?
- Does repeated exposure or group context amplify risk?
- What protection, distance, treatment or emergency preparation changes the outcome?

The pilot must **not** derive toxin severity from Force, Potency, base-stat total or type alone. Exact medical effects and consequence ceilings require reviewed evidence plus clearly labeled derivation.

## 9. Group and environment invariants

### Beedrill

Swarm/colony pressure should be represented through repeated exposure opportunities, movement denial, pursuit, protection of nest/young, escape-route pressure or similar authored mechanisms where evidence supports them — not `+N stats because there are many`.

### Lapras

Aquatic capability changes what humans can safely approach, pursue, rescue, transport or accompany. A strong profile must remain separable from aggression tendency and from companionship feasibility.

### Gyarados

Large body, water movement and severe escalation must be able to create displacement, structural/environmental danger or invalid tiny-harm approaches without requiring a universal boss HP sponge.

### Gastly

A physical weapon approach may become ineffective or inappropriate because of an anomalous capability, not because `Guard` is simply very high. Knowledge, preparation, retreat and rare Gift interactions must remain separate possible solution spaces.

## 10. Fossil and Mythical invariants

### Kabuto

Do not infer a complete ancient Kanto ecology solely from modern encounter tables or the fact that Kabuto is a fossil Pokémon. The dossier must explicitly separate:

- direct official historical evidence;
- conservative inference;
- local project extrapolation;
- unresolved ancient-population questions.

### Mew

The mandatory 151-species requirement does not imply a routine direct spawn. The pilot must prove that a Mythical dossier can satisfy P4/P5 through singular evidence, rumors, traces, exceptional event chains or another explicit rare treatment while preserving species identity and provenance.

## 11. Pilot validation matrix

The pilot is structurally ready for scale selection only when every row below has at least one reviewed example.

| Validation case | Primary species |
|---|---|
| weak/common ordinary trivialization | Rattata |
| named/apex weak-species threat | Rattata |
| low-stat/high-hazard | Weedle |
| swarm/colony danger | Beedrill (+ Weedle family context) |
| aquatic/environment-dependent action | Lapras, Gyarados |
| high-stat/low-presumed-aggression | Lapras |
| large physical force/durability | Gyarados |
| elemental/environmental escalation | Gyarados |
| Ghost/anomalous approach invalidation | Gastly |
| evolution-family adaptation | Weedle → Kakuna → Beedrill relationship |
| fossil/history ambiguity | Kabuto |
| Legendary/Mythical indirect/exceptional presence | Mew |

Kakuna does not need to become a ninth full pilot dossier solely for this matrix. Its canonical evolution relationship and any mechanically material intermediate-stage assumptions must be reviewed while authoring Weedle/Beedrill; its full substantive dossier still belongs to normal P4 batch authoring.

## 12. Contradiction and quality checks

Before the pilot is declared reviewed:

- verify D-020 serious-selective-lethality consistency;
- verify D-024 check/modifier boundaries and no-roll triviality;
- verify D-025 human Injury/Fear/Fatigue consequences are used causally rather than as generic damage conversions;
- verify D-028/D-030 preparation and emergency items are concrete, finite and hazard-specific rather than reroll currency;
- verify D-031 fixed species baselines and explicit exceptional profiles;
- verify `stats do not cap hazard severity` for every material hazard;
- verify no hidden summed combat-power/challenge-rating field has reappeared;
- verify no encounter secretly scales with player progression;
- verify no mandatory ecology/history gaps were filled as pseudo-canon;
- verify cross-species/evolution references resolve;
- verify the schema can represent all pilot cases without bespoke per-species fields.

If a pilot case requires a genuinely new shared semantic field, refine the schema. If it instead requires a durable world/player-facing creative choice, stop at the minimum Human Design Gate rather than disguising it as calibration.

## 13. Execution order from here

1. Author the 8 pilot evidence/hazard packets using current primary evidence plus the pinned structured baseline.
2. Add the concrete `pilot-rattata-apex-01` semantic profile without final numeric deltas.
3. Exercise concrete human encounter examples across ordinary/advanced preparation states.
4. Compare the preserved 5/6/7-tier rating candidates against those examples.
5. Pin the smallest scale that passes the calibration tests.
6. Finalize six-axis ratings and the named/apex numeric deltas.
7. Bring all 8 dossiers to `pilot_reviewed` and run the contradiction/schema audit.
8. Only then begin ecology/evolution-family-aware bulk authoring toward `151/151`.

Do **not** begin bulk dossier authoring merely because canonical source rows can be generated automatically. The pilot exists to prove the derived domain model first.

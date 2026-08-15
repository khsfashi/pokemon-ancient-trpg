# P4 Six-Axis Rating Scale Calibration

Status: **PINNED — `p4-six-axis-v1`**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: D-024, D-031, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_PILOT_ROSTER_AND_CALIBRATION_PLAN.md`, `docs/P4_PILOT_EVIDENCE_AND_HAZARD_PACKETS.md`

## 1. Result

P4 pins the six-axis species rating scale as:

`rating_scale_version: p4-six-axis-v1`

with integer ratings **1..6**.

The selected raw-source mapping is deliberately simple, monotone, deterministic, and shared by all six canonical source axes:

| Raw base stat | P4 rating |
|---:|---:|
| `< 40` | 1 |
| `40..59` | 2 |
| `60..79` | 3 |
| `80..99` | 4 |
| `100..119` | 5 |
| `>= 120` | 6 |

The mapping is a project-owned normalization rule. Raw canonical values remain preserved separately and the P4 rating is never presented as canon.

No percentile or roster-relative normalization is used. Adding or removing species from the authoring set must not change an already-authored species rating.

## 2. Why these cut points

The calibration needs useful separation without pretending that one point of main-series base stat is meaningful in the TRPG.

The selected bands retain broad source plateaus:

- `1` — clearly low source axis;
- `2` — low/modest;
- `3` — moderate;
- `4` — strong;
- `5` — exceptional source axis;
- `6` — source-extreme axis.

The important boundary is `120+`: it preserves a small amount of headroom above the common `100` benchmark. This avoids treating every raw `100` as the absolute maximum while keeping the scale compact.

## 3. Candidate definitions

The pilot compared three nested/simple candidates from the same raw source values.

### 5-tier candidate — `pilot-5t`

| Raw | Rating |
|---:|---:|
| `<40` | 1 |
| `40..59` | 2 |
| `60..79` | 3 |
| `80..99` | 4 |
| `>=100` | 5 |

### 6-tier candidate — `pilot-6t`

| Raw | Rating |
|---:|---:|
| `<40` | 1 |
| `40..59` | 2 |
| `60..79` | 3 |
| `80..99` | 4 |
| `100..119` | 5 |
| `>=120` | 6 |

### 7-tier candidate — `pilot-7t`

| Raw | Rating |
|---:|---:|
| `<30` | 1 |
| `30..39` | 2 |
| `40..59` | 3 |
| `60..79` | 4 |
| `80..99` | 5 |
| `100..119` | 6 |
| `>=120` | 7 |

The 7-tier candidate spends its extra resolution mostly separating very low values. The pilot does not gain enough actionable encounter differentiation from that split to justify the extra scale width.

## 4. Candidate profiles on the eight-species pilot

Axis order below is:

`Vigor / Force / Guard / Potency / Resistance / Speed`

| Species | `pilot-5t` | `pilot-6t` | `pilot-7t` |
|---|---|---|---|
| #019 Rattata | 1/2/1/1/1/3 | **1/2/1/1/1/3** | 2/3/2/1/2/4 |
| #013 Weedle | 2/1/1/1/1/2 | **2/1/1/1/1/2** | 3/2/2/1/1/3 |
| #015 Beedrill | 3/4/2/2/4/3 | **3/4/2/2/4/3** | 4/5/3/3/5/4 |
| #131 Lapras | 5/4/4/4/4/3 | **6/4/4/4/4/3** | 7/5/5/5/5/4 |
| #130 Gyarados | 4/5/3/3/5/4 | **4/6/3/3/5/4** | 5/7/4/4/6/5 |
| #092 Gastly | 1/1/1/5/1/4 | **1/1/1/5/1/4** | 2/2/2/6/2/5 |
| #140 Kabuto | 1/4/4/2/2/2 | **1/4/4/2/2/2** | 2/5/5/3/3/3 |
| #151 Mew | 5/5/5/5/5/5 | **5/5/5/5/5/5** | 6/6/6/6/6/6 |

## 5. Candidate evaluation

### 5.1 Monotonicity

All three candidates are strictly monotone bucket mappings and therefore pass the basic source-ordering test.

No species-specific numeric override is required for any pilot baseline.

### 5.2 Useful differentiation

`pilot-5t` fails the smallest-useful test because every raw value `>=100` becomes the maximum rating.

That creates two undesirable pilot effects:

- Mew's deliberately uniform `100/100/100/100/100/100` source profile becomes `5/5/5/5/5/5`, visually implying six absolute maxima rather than six broadly exceptional axes;
- Gyarados `Attack 125` cannot be distinguished numerically from a raw `100` Force axis even though the pilot specifically needs a source-extreme large-force case.

`pilot-6t` fixes both with one additional band:

- Mew remains broadly exceptional at `5` in all axes;
- Lapras `HP 130` and Gyarados `Attack 125` become explicit rating-6 source extremes.

`pilot-7t` preserves the same useful top-end distinction but adds mostly low-end resolution. The fixed encounters do not require Rattata/Weedle/Gastly low raw values to be split more finely for the player-facing rules to remain coherent.

### 5.3 Saturation

- **5-tier:** FAIL — saturation begins at raw `100`, too early for the pilot's top-end contrasts.
- **6-tier:** PASS — raw `100..119` keeps an exceptional band while `120+` retains source-extreme headroom.
- **7-tier:** PASS — but the additional low-end band does not solve a pilot problem that 6-tier leaves unsolved.

### 5.4 Hazard leakage

All candidates can keep Weedle low while its stinger hazard remains serious/uncertain through the separate hazard record.

The pinned 6-tier scale therefore does **not** inflate Weedle Force/Potency to manufacture venom severity.

### 5.5 Aggression leakage

Lapras receives a formidable profile without any rule that turns high ratings into hostility.

Aggression, territoriality, warning, cooperation, and escalation remain authored behavior state.

### 5.6 D-024 translation pressure

P4 ratings are inputs to encounter authoring, not an automatic target-number lookup.

The existing human ladder remains:

`7 / 9 / 11 / 13 / 15`, plus `Routine/no roll` and `Impossible`.

Recommended authoring interpretation:

| P4 axis rating | Default pressure interpretation |
|---:|---|
| 1 | low; often 7 if uncertainty/stakes still justify a roll |
| 2 | modest; often 7 or 9 |
| 3 | meaningful; often 9 or 11 |
| 4 | strong; often 11 or 13 |
| 5 | exceptional; often 13 or 15 |
| 6 | source-extreme; usually 15, permission-changing fiction, or an alternate approach rather than TN inflation |

This table is guidance, **not a formula**. Behavior, environment, capability tags, preparation, objective, and consequence determine the actual authored check.

Rating 6 never creates difficulty `17`, a hidden Pokémon modifier stack, or an automatic lethal result. When a direct human approach is beyond plausible action, mark it fictionally impossible until the approach changes.

The 7-tier candidate would add another numeric band that still has to compress into the same human TN envelope, increasing translation pressure with no pilot benefit.

## 6. Fixed encounter fixture audit

The semantics of E1-E10 are unchanged from `docs/P4_PILOT_EVIDENCE_AND_HAZARD_PACKETS.md`.

| Fixture | 6-tier result |
|---|---|
| E1 — ordinary Rattata / early human | PASS — low baseline can still matter in poor position because bite/resource consequences make a check meaningful. |
| E2 — ordinary Rattata / experienced human | PASS — identical baseline can become no-roll through preparation, knowledge, equipment and favorable context. |
| E3 — apex Rattata | PASS — explicit individual deltas plus learned behavior provide threat without player-level scaling. |
| E4 — Weedle brush exposure | PASS — low numeric profile does not constrain venom consequence semantics. |
| E5 — Beedrill nest boundary | PASS — repeated exposure/route denial remains group semantics, not `swarm +stats`. |
| E6 — cooperative Lapras crossing | PASS — rating-6 Vigor does not imply aggression; environmental drowning/exposure remains separable. |
| E7 — rampaging Gyarados route | PASS — rating-6 Force identifies source-extreme physical pressure while displacement/environment still carry the encounter. |
| E8 — Gastly enclosure | PASS — Potency 5 coexists with a permission-level impalpable-body invalidator rather than inflated Guard. |
| E9 — Kabuto evidence | PASS — ratings do not force a living local spawn or invented bodily hazard. |
| E10 — Mew indirect observation | PASS — balanced rating-5 profile does not override invisibility/access semantics or create a routine direct encounter. |

## 7. Pinned pilot species profiles

All eight pilot species now use `rating_scale_version: p4-six-axis-v1`.

```yaml
rattata:  {vigor: 1, force: 2, guard: 1, potency: 1, resistance: 1, speed: 3}
weedle:   {vigor: 2, force: 1, guard: 1, potency: 1, resistance: 1, speed: 2}
beedrill: {vigor: 3, force: 4, guard: 2, potency: 2, resistance: 4, speed: 3}
lapras:   {vigor: 6, force: 4, guard: 4, potency: 4, resistance: 4, speed: 3}
gyarados: {vigor: 4, force: 6, guard: 3, potency: 3, resistance: 5, speed: 4}
gastly:   {vigor: 1, force: 1, guard: 1, potency: 5, resistance: 1, speed: 4}
kabuto:   {vigor: 1, force: 4, guard: 4, potency: 2, resistance: 2, speed: 2}
mew:      {vigor: 5, force: 5, guard: 5, potency: 5, resistance: 5, speed: 5}
```

No baseline manual exceptions are required.

## 8. `pilot-rattata-apex-01` numeric profile

The semantic fixture remains a persistent D2 named/apex individual with no player-level scaling.

Pinned individual deltas:

```yaml
individual_profile:
  individual_id: pilot-rattata-apex-01
  species_key: rattata
  status: named_apex
  stat_deltas:
    vigor: +1
    force: +2
    guard: 0
    potency: 0
    resistance: 0
    speed: +2
```

Resolved profile:

```yaml
vigor: 2
force: 4
guard: 1
potency: 1
resistance: 1
speed: 5
```

Rationale:

- the individual is **not** turned into a generic tank; Guard/Resistance remain ordinary Rattata values;
- increased Vigor represents unusual survival endurance without creating an HP sponge;
- Force and especially Speed are the selected exceptional physical axes;
- its real boss-grade danger still comes from `trap_wary`, route memory, supply targeting, false commitment, persistent identity, warning signs, and authored terrain/history;
- numeric shifts are stable and never react to player progression.

The profile may outperform an ordinary evolved-family specimen in a selected axis without rewriting the Rattata species baseline. This is an intentional exceptional-individual rule, not evidence that ordinary Rattata should be stronger.

## 9. Ordinary variation guidance under v1

Until a later pilot proves a need for more detail:

- ordinary individual numeric variation should normally be **at most one axis by ±1** when fiction materially needs it;
- do not roll random deltas for every encounter;
- do not let ordinary variation raise a rating above 6 or below 1;
- multiple-axis shifts belong to clearly authored age/condition/local-lineage cases, not default noise;
- exceptional/named individuals may exceed ordinary-variation guidance, but every delta must be explicit and justified.

This is authoring guidance, not a random-generation mandate.

## 10. Contradiction and schema audit

### P2 / setting

PASS.

The scale adds no global `ancient Pokémon are stronger` modifier and therefore preserves species-specific ancient-strength treatment. It creates no trainer-level scaling, ownership assumption, or mature battle institution.

### P3 / human rules

PASS.

- raw Pokémon stats never enter the human roll;
- no new modifier stack is introduced;
- no-roll triviality remains legal;
- TNs above 15 are not introduced merely because rating 6 exists;
- hazard consequence ceilings remain causal and separate from axis magnitude;
- no Fate/reroll resource is introduced.

### D-031

PASS.

- species baselines remain fixed;
- exceptional individuals use explicit inspectable deltas;
- the apex Rattata remains persistent and non-level-scaled;
- no summed combat-power/challenge-rating field is created.

### Provenance

PASS.

The calibration derives only from pinned raw six-stat source inputs already preserved in the pilot packets. The rating bands and individual deltas are explicitly project-owned mechanics, not canon claims.

### Schema

PASS.

Existing `species_stat_profile.rating_scale_version`, six ratings, `calibration_flags`, and `individual_profile.stat_deltas` fields are sufficient. No bespoke species field is required.

## 11. Calibration decision summary

| Candidate | Monotone | Useful differentiation | Saturation | D-024 pressure | Manual exceptions | Result |
|---|---|---|---|---|---|---|
| 5-tier | PASS | FAIL at `100+` top end | FAIL | LOW | none | REJECT |
| 6-tier | PASS | PASS | PASS | ACCEPTABLE | none | **PIN** |
| 7-tier | PASS | PASS | PASS | HIGHER | none | REJECT as unnecessary |

The project therefore pins the **smallest useful** candidate: `p4-six-axis-v1` (1..6).

## 12. Next work

Numeric calibration is complete.

The next coherent P4 slice is:

1. apply `p4-six-axis-v1` to each pilot dossier's `species_stat_profile`;
2. finish the remaining schema sections for the eight pilot species rather than treating the hazard packets as full dossiers;
3. mark each pilot `pilot_reviewed` only after provenance, ecology, identification, threat, individual variation, companionship, mechanical hooks, materials/technology/emergency-item hooks, narrative hooks, and cross-species references pass review;
4. run the pilot completion audit;
5. then begin ecology/evolution-family-aware bulk authoring toward `151/151`.

No new Human Design Gate was exposed by numeric calibration.

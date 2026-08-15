# P4 Batch 09 — Mind-State, Agency, and Exposure Hazard Selection Plan

Status: **SELECTED — source review next**  
Date: **2026-08-15**  
Parent issue: **#5 — P4 Pokémon adaptation + complete Gen-I 151 species dossiers**

## Purpose

Batch 09 selects the next compact P4 authoring roster after Batch 08. It targets a still-underrepresented boundary: sleep, drowsiness, dreams, hypnosis, involuntary psychic phenomena, and dispersed biological exposure must remain species-specific hazards/capabilities rather than collapsing into a generic status system that silently takes decisions away from the player.

This file is a selection plan only. The authoritative coverage manifest remains unchanged until source review, full-schema authoring, contradiction checks, and the completion audit pass.

## Selected roster

| Dex | Species | Primary contract pressure |
|---:|---|---|
| #039 | Jigglypuff | auditory drowsiness / induced sleep |
| #040 | Wigglytuff | family closure; stage-local capability inheritance |
| #048 | Venonat | body-contact toxin versus nocturnal sensing |
| #049 | Venomoth | airborne/dispersed toxic powder exposure |
| #054 | Psyduck | involuntary psychic manifestation, pain trigger, memory gap |
| #055 | Golduck | aquatic locomotion / rough-water route permission |
| #096 | Drowzee | dream sensing/consumption and information boundary |
| #097 | Hypno | hypnosis, gaze/pendulum exposure, nearby drowsiness |

Current coverage stays:

```text
dossier_complete_count == 64
pilot_reviewed_count == 2
not_started_count == 85
draft_count == 0
```

If all eight later pass full authoring, the expected state is `72 complete / 2 pilot_reviewed / 77 not_started`. That promotion is not part of this selection scope.

## Selection evidence

Current official Pokémon Pokédex material is sufficient to justify the pressure set before full source review:

- **Jigglypuff:** song is described as lulling enemies to sleep; prolonged lullaby can cause drowsiness.
- **Wigglytuff:** current entries emphasize fur, inflation, anger response, and body impact rather than automatically repeating every Jigglypuff sleep claim. This is a useful evolution-inheritance control.
- **Venonat:** toxin is described as oozing from its body; eyes function as radar in darkness.
- **Venomoth:** toxic dust/scales are dispersed by wing movement, creating a clear airborne/environmental exposure case.
- **Psyduck:** severe headache is tied to latent/mysterious power; entries describe memory gaps and a manifestation contrary to Psyduck's own intent.
- **Golduck:** webbed limbs and a strong body support swimming through rough seas/high waves, testing route permission separate from normalized Speed.
- **Drowzee:** it remembers dreams it eats and can identify where someone is sleeping and what they are dreaming.
- **Hypno:** official entries explicitly reference Hypnosis after eye contact and drowsiness caused by its rhythmic pendulum nearby.

Full Batch 09 source review must still inventory versioned entries, structured data, move/ability context, and contradictions before any stronger claim is authored.

## Why these eight

Completed batches already stress venom delivery, metamorphosis, branching evolution, transformation, host/parasite control, composite identity, chronology anomalies, social/family ecology, legendary rarity, traversal, biological resources, remains, and regeneration.

This roster adds four related but distinct pressure families without becoming arbitrary adjacent Pokédex coverage:

1. **sensory sleep exposure** — Jigglypuff;
2. **biological particle/contact exposure** — Venonat/Venomoth;
3. **self-involuntary psychic manifestation plus aquatic capability** — Psyduck/Golduck;
4. **dream/hypnosis pressure** — Drowzee/Hypno.

The four Generation-I evolution pairs remain together, making it possible to test what changes at evolution versus what may safely carry across a family. Later-generation relatives such as Igglybuff remain context only and do not expand the mandatory roster.

## Binding boundaries

Batch 09 consumes existing contracts instead of inventing parallel systems.

`P3_HEALTH_PRESSURE_AND_INJURY_CONTRACT` already establishes that Panicked must not silently choose a humiliating action for the player and that Will is the main resistance Attribute for hostile mental pressure.

`P3_RARE_PSYCHIC_GIFT_CONTRACT` already rejects unrestricted mind reading, memory theft, domination, automatic lie detection, and generic mind-control assumptions for human Gifts. Pokémon may have stronger source-backed phenomena, but sleep/dream/hypnosis evidence still does not automatically prove unrestricted command over another person's choices.

`P4_HAZARD_SEVERITY_CLARIFICATION` already treats sleep, respiratory exposure, Psychic/Ghost phenomena and similar effects as species-specific hazards whose consequence is not capped by six-axis stats.

Therefore the batch must preserve these invariants:

1. no generic global mind-control status;
2. no silent player-action rewriting from unsupported hypnosis interpretation;
3. sound, gaze, proximity, airborne powder, body contact, sleep-state dream access, and psychic intrusion remain distinct exposure routes;
4. Will is not universal immunity — physical toxin/respiratory exposure may instead use Endurance, equipment, positioning, or event prerequisites;
5. induced sleep is not automatically encoded as Fear or Fatigue if the fiction requires immediate loss of ordinary action eligibility;
6. dream access is not omniscience, waking-memory theft, objective truth, or hidden-state inspection;
7. Psyduck's involuntary manifestation is not permission for an unbounded random psychic-explosion table;
8. Venomoth's dispersed toxin does not become a generic rule inherited by all Poison-type species;
9. Golduck's swimming changes fictional permission/route eligibility rather than creating a hidden `Swim = Speed` formula;
10. evolution-family claims must remain stage-local unless evidence supports inheritance.

## Human Design Gate test

**No Human Design Gate is required for Batch 09 selection.** Existing owner-approved contracts already determine the architecture: preserve player agency, use compact pressure/check systems, keep hazards species-specific, and derive capabilities from evidence.

Raise a new gate during source review/full authoring only if credible official evidence forces a persistent player-facing rule that cannot be represented conservatively under existing contracts, such as an unavoidable long-duration compulsion system that requires the engine to control player-character choices or a genuinely new universal mental-state track.

Unsupported stronger interpretations should remain unresolved rather than being converted into project canon.

## Source-review work package

For each selected species, the next scope must:

1. inventory current official Pokédex/version evidence relevant to the selected pressure;
2. inspect pinned structured species/type/base-stat/ability/evolution data under the existing provenance strategy;
3. use move/ability evidence as capability context rather than copying modern battle formulas;
4. classify each material claim as direct official fact, cross-source synthesis, conservative inference, project extrapolation, or unresolved;
5. draft hazard/capability semantics with explicit delivery, trigger, warnings, effects, counterplay, and consequence ceiling;
6. distinguish stage-local versus safely shared evolution-family facts;
7. run P2/P3/P4 contradiction checks;
8. raise a Human Design Gate only if the criteria above are actually reached.

## Promotion gate

Do not change these rows yet:

```text
#039 jigglypuff = not_started
#040 wigglytuff = not_started
#048 venonat    = not_started
#049 venomoth   = not_started
#054 psyduck    = not_started
#055 golduck    = not_started
#096 drowzee    = not_started
#097 hypno      = not_started
```

Manifest promotion requires a Batch 09 source review, complete schema-compliant dossiers for all eight species, provenance and contradiction audits, evolution-family consistency review, mind-state/player-agency hazard review, refreshed manifest audit, and `P4_BATCH_09_COMPLETION_AUDIT` = PASS.

## Exact next work

Create **P4 Batch 09 source review** for these eight species and establish the evidence-backed semantic boundary between drowsiness, induced sleep, dream sensing/consumption, hypnosis, involuntary psychic manifestation, toxin contact versus airborne exposure, and aquatic route permission.

Do not create a universal mental-status subsystem. Do not promote the manifest yet. Do not begin P5.

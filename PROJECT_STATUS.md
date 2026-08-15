# Project Status

Last explanatory handoff update: **2026-08-16**

This file is the concise operational handoff. Durable product authority remains in `docs/DECISIONS.md` and the phase contracts; live GitHub state wins if this file is stale.

## Binding direction

- Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.
- Setting is earlier than Hisui, in future-Kanto territory before mature regional civilization.
- Iron-age / medieval-fantasy-like material baseline; Pokémon-dependent technology/culture remains narrow and evidence-backed.
- No normalized trainer culture, routine ownership, portable containment, Poké Balls or PC storage.
- Exactly three visible companion slots; `0/3` remains a valid full run.
- Pokémon use fixed six-axis species baselines plus capability/hazard tags. Ordinary Pokémon do not scale with the player; exceptional individuals require explicit persistent history/traits.
- `p4-six-axis-v1` remains pinned. Hazard severity is not capped by species-axis ratings.
- Evolution is distinct from ordinary maturation; no kill-XP, visible character levels or generic evolution command.
- Mandatory P4 roster is National Pokédex #001-#151. D-034 requires all 151 to be directly encounterable somewhere in total content, while baseline-era natural presence remains a separate question.

## Completed phases

```text
P0 Governance                         COMPLETE
P1 Reference/API/data/resource/IP     COMPLETE
P2 World bible and setting contract   COMPLETE
P3 Core TRPG rules/character model    COMPLETE
```

## Current phase

**P4 — Pokémon adaptation + complete Gen-I 151 species dossiers (#5) is active.**

P4 exit requires 151/151 substantive reviewed dossiers. Do not begin P5 before that audit passes.

Current authoritative manifest state after Batch 15:

```text
dossier_complete_count == 117
pilot_reviewed_count == 2
not_started_count == 32
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two `pilot_reviewed` species remain #131 Lapras and #151 Mew.

### P4 foundation

- D-031: fixed species baselines plus explicit individual variation; no player-level enemy scaling.
- `p4-six-axis-v1`: raw `<40 => 1`, `40..59 => 2`, `60..79 => 3`, `80..99 => 4`, `100..119 => 5`, `>=120 => 6`.
- D-032: modern level/trade evolution metadata is source context, not ancient progression law.
- D-033: Magneton remains one active entity / one visible companion slot.
- D-034: all #001-#151 require direct encounterability somewhere in total content, separate from baseline natural presence.

### P4 completed dossier work

```text
Pilot      PASS
Batch 01   PASS
Batch 02   PASS
Batch 03   PASS
Batch 04   PASS
Batch 05   PASS
Batch 06   PASS
Batch 07   PASS
Batch 08   PASS
Batch 09   PASS
Batch 10   PASS
Batch 11   PASS
Batch 12   PASS
Batch 13   PASS
Batch 14   PASS
Batch 15   PASS
```

### P4 Batch 15 — COMPLETE

Roster:

- #043 Oddish / #044 Gloom / #045 Vileplume
- #069 Bellsprout / #070 Weepinbell / #071 Victreebel

Primary outputs:

- `docs/P4_BATCH_15_BOTANICAL_CHEMICAL_PREDATION_PLAN.md`
- `docs/P4_BATCH_15_SOURCE_REVIEW.md`
- `docs/P4_BATCH_15_FULL_SCHEMA_DOSSIERS.md` plus six indexed dossier files
- `docs/P4_BATCH_15_COMPLETION_AUDIT.md`
- updated `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`
- updated `docs/P4_SPECIES_COVERAGE_MANIFEST_AUDIT.md`

Batch 15 preserves plantlike bodies as living Pokémon rather than scenery/resources; keeps Oddish burial and Bellsprout rooting species-local; preserves Gloom/Victreebel sensory attraction without compulsion; separates Vileplume allergy, toxin and versioned paralysis/immobilization without a permanent aura; keeps Weepinbell toxic powder separate from corrosive/digestive fluid; treats extreme corrosion wording as severe authored fiction rather than matter deletion or chemistry simulation; and keeps Victreebel feeding-history sweetness qualitative rather than kill-XP, hidden levels, permanent stat growth or a farming loop.

Evolution-stage inheritance remains evidence-gated. Modern level 21, Leaf Stone, abilities and move metadata remain source context under D-032, while Bellossom/Sun Stone remains post-Generation-I provenance context only.

`docs/P4_BATCH_15_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 16 — SOURCE REVIEW COMPLETE

Roster:

- #035 Clefairy / #036 Clefable
- #037 Vulpix / #038 Ninetales
- #122 Mr. Mime
- #124 Jynx

Primary outputs so far:

- `docs/P4_BATCH_16_FOLKLORE_SUPERNATURAL_HUMANOID_PLAN.md`
- `docs/P4_BATCH_16_SOURCE_REVIEW.md`

Batch 16 now explicitly preserves epistemic status at claim level: direct observation/measurement, scientist interpretation, legend/hearsay, analogy, version-scoped extraordinary wording, cross-source synthesis and project extrapolation are not interchangeable.

The review preserves Clefairy full-moon gathering/floating and magnetic anomalies as species-local discrete phenomena without a generic moon/magnetism system; keeps Clefable extreme hearing separate from its moon-kin legend; treats Vulpix's one-tail-to-six change as ordinary maturation despite historically inconsistent extra-tail wording; preserves Ninetales curse, millennium-life, mystical-tail, human-speech-understanding and historical mind-control wording with explicit source/version scope rather than automatic spells or player-input removal; confirms Mr. Mime's real invisible barrier capability while leaving conflicting belief/air/molecular explanations unresolved; and treats Jynx vocal/rhythmic behavior as meaningful expressive evidence without assuming fluent human language or normalized ancient performance culture.

Modern Fairy typing, abilities, current scientists/musicians, baby Pokémon, regional forms and standardized Moon Stone/Fire Stone relationships remain chronology-safe provenance context rather than automatic ancient institutions.

The manifest is intentionally unchanged during source review:

```text
117 complete / 2 pilot_reviewed / 32 not_started
```

No blocking Human Design Gate is required. The six reviewed rating profiles reproduce under `p4-six-axis-v1` with zero manual exceptions.

## Exact next work

Author the **six P4 Batch 16 frozen full-schema dossiers** for Clefairy, Clefable, Vulpix, Ninetales, Mr. Mime and Jynx.

Create the Batch 16 dossier index/regression summary and completion audit. Preserve claim-level epistemic labels, evolution-stage inheritance boundaries, agency-safe handling for Ninetales/Jynx influence wording, species-local Mr. Mime barriers and Vulpix maturation-versus-evolution behavior.

Do not mutate the coverage manifest until all six dossiers and the Batch 16 completion audit pass atomically. If they pass, promote exactly #035-#038, #122 and #124 to reach:

```text
123 complete / 2 pilot_reviewed / 26 not_started
```

Do not begin P5 until the mandatory `151/151` P4 exit audit passes.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

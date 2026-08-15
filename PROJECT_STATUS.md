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

Current authoritative manifest state after Batch 16 and deliberately unchanged by the Batch 17 selection/source review:

```text
dossier_complete_count == 123
pilot_reviewed_count == 2
not_started_count == 26
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
Batch 16   PASS
```

### P4 Batch 16 — COMPLETE

Roster:

- #035 Clefairy / #036 Clefable
- #037 Vulpix / #038 Ninetales
- #122 Mr. Mime
- #124 Jynx

Primary outputs:

- `docs/P4_BATCH_16_FOLKLORE_SUPERNATURAL_HUMANOID_PLAN.md`
- `docs/P4_BATCH_16_SOURCE_REVIEW.md`
- `docs/P4_BATCH_16_FULL_SCHEMA_DOSSIERS.md` plus six indexed dossier files
- `docs/P4_BATCH_16_COMPLETION_AUDIT.md`
- updated `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`
- updated `docs/P4_SPECIES_COVERAGE_MANIFEST_AUDIT.md`

`docs/P4_BATCH_16_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 17 — SOURCE REVIEW COMPLETE

Roster:

- #056 Mankey / #057 Primeape
- #106 Hitmonlee / #107 Hitmonchan
- #123 Scyther
- #127 Pinsir

Primary outputs so far:

- `docs/P4_BATCH_17_COMBAT_MORPHOLOGY_AGGRESSION_PLAN.md`
- `docs/P4_BATCH_17_SOURCE_REVIEW.md`

The Batch 17 source review classifies direct observation, measurements/numeric wording, researcher interpretation, analogy/reputation and version-scoped extraordinary claims separately. The reviewed evidence fits existing P2/P3/P4 contracts with **no blocking Human Design Gate**.

Key conclusions:

- Mankey's volatile anger, colony behavior and strong historical no-escape wording support severe authored escalation pressure, not a universal rage meter, permanent hostility or global no-flee rule.
- Primeape's gaze-linked fury and tenacious pursuit remain bounded encounter behavior. Poké Ball persistence is current researcher-theory/modern-containment context, and historical “end of the world” pursuit wording is not a literal distance rule.
- Hitmonlee's controlled leg extension, impact hardening and repeated kicks are physiology, not detachable equipment, arbitrary traversal, extra turns or force/armor-penetration formulas.
- Hitmonchan's combinations, 300+ mph current punch wording, concrete/bullet-train historical wording and roughly three-minute recovery cadence do not create boxing institutions, combo action inflation, kinetic-energy simulation or a real-time global cooldown.
- Scyther's forearm scythes, visual-relative speed, camouflage, hard-object cutting/sharpening and rare flight remain species-local capabilities rather than detachable weapon loot, permanent invisibility, universal material destruction or guaranteed first action/escape denial.
- Pinsir's pincers, lifting/crushing claims, cold sensitivity and sleeping/burrowing behavior remain contextual capability/ecology rather than universal grapple/carry formulas, mining/traversal or exact temperature simulation.
- Annihilape, Tyrogue/Hitmontop, Scizor, Kleavor, Mega Pinsir, later abilities and later-region observations remain chronology/provenance context only.
- all six `p4-six-axis-v1` profiles reproduce with zero manual exceptions.
- D-034 direct encounterability remains separate from baseline-era abundance, human proximity and ordinary companionship.

Deterministic profiles:

```text
Mankey     2/4/1/1/2/3
Primeape   3/5/3/3/3/4
Hitmonlee  2/6/2/1/5/4
Hitmonchan 2/5/3/1/5/3
Scyther    3/5/4/2/4/5
Pinsir     3/6/5/2/3/4
```

Source-review validation:

```text
reviewed_species_count == 6
current_official_species_pages_verified == 6
pinned_species_records_reviewed == 6
rating_profile_reproducible_count == 6
manual_rating_exception_count == 0
p2_contradiction_count == 0
p3_contradiction_count == 0
p4_contract_contradiction_count == 0
blocking_human_design_gate_count == 0
coverage_manifest_changed == false
ready_for_full_schema_authoring == true
```

## Exact next work

Author the six **P4 Batch 17 frozen full-schema dossiers** for #056, #057, #106, #107, #123 and #127.

The authoring pass must:

1. consume the reviewed claim-level evidence without upgrading analogy, researcher theory, measurements or version-scoped extraordinary wording into universal rules;
2. use the reviewed deterministic `p4-six-axis-v1` profiles with zero hidden manual exceptions;
3. preserve player-agency-safe warning, escalation, de-escalation and bounded pursuit handling for Mankey/Primeape;
4. preserve one entity / one ordinary turn / one health state / one visible companion slot despite bilateral limbs, combinations or natural weapons;
5. keep Hitmonlee/Hitmonchan martial-looking physiology separate from human fighting institutions, equipment and physics formulas;
6. keep Scyther/Pinsir body-integrated weapons separate from automatic equipment, live harvesting, generic destructible terrain and universal material checks;
7. keep post-Generation-I family/form/region evidence as provenance context rather than mandatory baseline realization;
8. create the Batch 17 dossier index/regression summary and completion audit;
9. rerun P2/P3/P4 contradiction, provenance, schema, action-economy, agency, chronology and D-034 separation checks;
10. only after every check passes, atomically promote exactly the six Batch 17 manifest rows.

If all six pass, expected coverage becomes `129 complete / 2 pilot_reviewed / 20 not_started`.

Do not begin P5 until the mandatory `151/151` P4 exit audit passes.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

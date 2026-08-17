# Project Status

Last explanatory handoff update: **2026-08-17**

This file is the concise operational handoff. Durable product authority remains in `docs/DECISIONS.md`, separate later decision files and phase contracts; live GitHub state wins if this file is stale.

## Binding direction

- Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.
- Setting is earlier than Hisui, in future-Kanto territory before mature regional civilization.
- Iron-age / medieval-fantasy-like ordinary material baseline with narrow Pokémon-dependent technology/culture islands.
- No normalized trainer culture, routine ownership, portable containment, Poké Balls or PC storage.
- Exactly three visible companion slots; `0/3` remains a valid complete run.
- Mandatory Generation-I roster is National Pokédex #001-#151; D-034 requires every species to have a living direct-interaction path somewhere in total content.
- Pokémon use fixed six-axis species baselines plus capability/hazard tags; ordinary Pokémon do not scale with the player.
- P5 deterministic event contracts remain authoritative for event/RNG/state behavior.
- D-036 freezes hybrid Pokémon presentation: **PokéSprite-style compact identity + animated encounter sprites + non-destructive conceal/reveal/shading/masking/environment layers**.
- Pokémon media remains optional and `metadata_only / not_cleared` for public distribution until an exact artifact is affirmatively cleared.

## Completed phases

```text
P0 Governance                         COMPLETE
P1 Reference/API/data/resource/IP     COMPLETE
P2 World bible and setting contract   COMPLETE
P3 Core TRPG rules/character model    COMPLETE
P4 Pokémon adaptation + Gen-I 151     COMPLETE
P5 Narrative world-event engine       COMPLETE
```

P4 strict exit evidence remains in `docs/P4_EXIT_AUDIT.md`; all `001..151` dossiers are complete. P5 strict exit evidence remains in `docs/P5_EXIT_AUDIT.md`; `p5-event-contract-v1` is frozen.

## Current phase

**P6 — Resource and asset strategy, sourcing, provenance, and mobile budget (#12) is active.** P7 remains blocked.

Primary P6 artifacts:

- strategy: `docs/RESOURCE_STRATEGY.md`
- Batch 01 audit: `docs/P6_BATCH_01_AUDIT.md`
- D-036 decision: `docs/DECISION_D036_HYBRID_POKEMON_PRESENTATION.md`
- hybrid presentation contract: `docs/P6_HYBRID_POKEMON_PRESENTATION_CONTRACT.md`
- Batch 02 audit: `docs/P6_BATCH_02_AUDIT.md`
- concrete manifest: `docs/P6_RESOURCE_MANIFEST.json`
- manifest schema: `docs/P6_RESOURCE_MANIFEST_SCHEMA.json`
- Pokémon source map: `docs/P6_POKEMON_RESOURCE_SOURCE_MAP.json`
- budget/pipeline contract: `docs/P6_RESOURCE_BUDGET_AND_PIPELINE_CONTRACT.md`
- validator: `tools/validate_p6_resources.py`

### P6 Batch 01 — PASS

Batch 01 derived resource classes, public-safe fallback rules, stable `resource_id` semantics and build-time normalization. Its unresolved `P6-HDG-001` snapshot is historical and superseded by D-036.

### P6-HDG-001 — RESOLVED by D-036

```text
compact_pokemon_identity_candidate == PokeSprite
encounter_pokemon_presentation == animated_sprite
unknown_encounter_conceal_reveal == true
per_reveal_state_duplicate_sprite_assets == false
all_151_encounter_animations_preloaded == false
presentation_animation_mutates_authoritative_game_state == false
current_blocking_p6_human_design_gate_count == 0
```

### P6 Batch 02 — PASS

Exact upstream pins:

```text
Pretendard v1.3.9
  5c41199ea0024a9e0b2cb31735265056e5472d76
Lucide 1.27.0
  4aec3f892fd6c23063bc2fead83c899b5d412b1c
PokéSprite compact candidate
  c5aaa610ff2acdf7fd8e2dccd181bca8be9fcb3e
PokéRogue animated candidate
  909b43612324622608023b3beb2f24f4ef159c1d
```

Measured generic baseline:

```text
PretendardVariable.woff2 source bytes == 2057688
Lucide generic icon count == 4
Lucide selected source bytes == 1347
Pokemon media initial payload == 0
```

Representative compact measurements:

```text
pokesprite_source_canvas == 68x56
rgba8_decoded_bytes_per_compact_icon == 15232
three_visible_icons_decoded_bytes == 45696
compact_decoded_cache_cap == 384 KiB
all_151_compact_icons_preloaded == false
```

Representative animated-atlas measurements:

```text
pokemon_001_atlas == 181x181
pokemon_001_rgba8_estimate == 131044
pokemon_151_atlas == 225x225
pokemon_151_rgba8_estimate == 202500
per_encounter_atlas_guardrail == 512 KiB
max_resident_encounter_atlases == 2
encounter_atlas_cache_cap == 1 MiB
```

Frozen P6 resource budgets:

```text
p6_owned_required_initial_resource_payload <= 3 MiB
pokemon_media_initial_payload == 0
compact_icon_decoded_cache <= 384 KiB
encounter_atlas_decoded_cache <= 1 MiB
combined_optional_pokemon_decoded_image_working_set <= 1.375 MiB
baseline_bgm_ambience_ui_sfx_cries_payload == 0
required_raster_location_event_illustration_payload == 0
```

Rights/public-build boundary remains fail-closed:

```text
pokemon_media_repo_mode_default == metadata_only
pokemon_media_public_distribution_default == not_cleared
public_safe_build_requires_pokemon_images == false
public_safe_build_requires_pokemon_cries == false
missing_optional_media_changes_authoritative_gameplay == false
```

Executable validation now rejects duplicate resource identities, illegal bundling/public Pokémon media, initial Pokémon-media preload, source-pin drift and decoded-budget violations.

Validation command:

```bash
python tools/validate_p6_resources.py
```

Current pre-publish local result:

```text
P6 resource validation == PASS
manifest_record_count == 7
measured_initial_source_bytes_represented == 2059035 / 3145728
p6_complete == false
p7_may_begin == false
```

## Exact next work

Continue **P6 Batch 03 — production import coverage + P6 exit audit**:

1. run the pinned PokéSprite compact import check across `001..151`;
2. run selected Gen-I animated PNG+JSON pair/frame-bound validation;
3. materialize SHA-256 for every actually fetched artifact in the produced import manifest;
4. prove no public distributable artifact includes `not_cleared` Pokémon media;
5. run budget/duplicate/cache/fallback validation against produced artifacts;
6. reconcile historical unresolved-gate wording in `docs/RESOURCE_STRATEGY.md`;
7. produce `docs/P6_EXIT_AUDIT.md`;
8. close #12 and unblock P7 **only** if the full P6 exit audit passes.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

P8 must prove a phone-sized mixed-world loop with settlement/social pressure, travel/survival, a persistent faction/relationship thread, Pokémon ecology/direct interaction and a complete `0/3` path. P9 must realize substantive world-content breadth and all 151 living direct-interaction paths.

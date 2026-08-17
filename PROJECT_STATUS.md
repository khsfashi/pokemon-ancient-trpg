# Project Status

Last operational handoff update: **2026-08-17**

This file is the concise operational handoff. Durable authority remains in `docs/DECISIONS.md`, phase contracts and exit audits; live GitHub state wins if this file is stale.

## Binding direction

- Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.
- Setting is earlier than Hisui, in future-Kanto territory before mature regional civilization.
- Iron-age / medieval-fantasy-like ordinary material baseline with narrow Pokémon-dependent technology/culture islands.
- No normalized trainer culture, routine ownership, portable containment, Poké Balls or PC storage.
- Exactly three visible companion slots; `0/3` remains a valid complete run.
- Mandatory Generation-I roster is National Pokédex `#001-#151`; every species has a living direct-interaction path somewhere in total content.
- Pokémon use fixed six-axis species baselines plus capability/hazard tags; ordinary Pokémon do not scale with the player.
- P5 deterministic event contracts remain authoritative for event/RNG/state behavior.
- D-036 freezes hybrid Pokémon presentation: **PokéSprite compact identity + animated encounter sprites + non-destructive conceal/reveal/shading/masking/environment layers**.
- Pokémon media remains optional and `metadata_only / not_cleared` for public distribution unless an exact artifact is affirmatively cleared.

## Completed phases

```text
P0 Governance                         COMPLETE
P1 Reference/API/data/resource/IP     COMPLETE
P2 World bible and setting contract   COMPLETE
P3 Core TRPG rules/character model    COMPLETE
P4 Pokémon adaptation + Gen-I 151     COMPLETE
P5 Narrative world-event engine       COMPLETE
P6 Resource/asset/provenance/budget   COMPLETE
```

P4 strict exit evidence: `docs/P4_EXIT_AUDIT.md`.  
P5 strict exit evidence: `docs/P5_EXIT_AUDIT.md`.  
P6 strict exit evidence: `docs/P6_EXIT_AUDIT.md`.

## P6 final handoff

P6 Batch 03 replaced representative-resource assumptions with full pinned Gen-I production-import validation.

Validated candidate evidence:

```text
candidate_head == 95787eda4c1c04aeb27c4acb0c4256c12206e85b
P6 Resource Validation run == #30 / success
PokéSprite compact default PNG == 151/151
PokéRogue animated PNG+JSON == 151/151
all frame/source bounds valid == true
SHA-256 materialized for every fetched artifact == true
CI evidence == metadata-only JSON
Pokémon source media written to evidence == false
```

Full animated-source measurement:

```text
metadata_layout.texture-array-v1 == 150
metadata_layout.root-frames-meta-v1 == 1
metadata_format.RGBA8888 == 150
metadata_format.I8 == 1
old provisional 512 KiB cap exceeded by == 25 species
max source atlas == #085 Dodrio == 673x673 == 1,811,716 conservative RGBA8 bytes
```

Frozen P6 resource budgets:

```text
p6_owned_required_initial_resource_payload <= 3 MiB
pokemon_media_initial_payload == 0
compact_icon_decoded_cache <= 384 KiB
per_encounter_atlas_guardrail <= 2 MiB
max_resident_encounter_atlases == 2
encounter_atlas_decoded_cache <= 4 MiB
combined_optional_pokemon_decoded_image_working_set <= 4.375 MiB
```

Runtime/resource invariants inherited by P7:

```text
cache_key == resource_id
duplicate_instance_policy == reuse_single_cached_instance
all_151_pokemon_media_preloaded == false
runtime_default_image_resize == false
runtime_atlas_repack == false
per_render_full_manifest_scan == false
per_render_full_species_asset_scan == false
missing_optional_media_changes_authoritative_gameplay == false
```

## Current phase

**P7 — Technical architecture, web/PWA target, save/data/resource pipeline, and tests (#7) is active.**

P7 goal: freeze an implementation-ready architecture only after P1-P6 product/data/resource contracts are stable.

Hard constraints from #7:

- prefer a lightweight mobile-first web runtime unless evidence shows it is insufficient;
- do not require a backend without a concrete gameplay/product need;
- avoid unnecessary runtime allocation/work;
- generate/cache derived indexes instead of repeated scans/recomputation;
- preserve P6 provenance, redistribution, preprocessing, loading and memory budgets;
- base technical choices on current primary documentation and proven tooling.

## Exact next work — P7 Batch 01

1. evaluate current lightweight mobile-first web/PWA runtime candidates against primary documentation;
2. choose the minimum framework/build-tooling boundary that satisfies deterministic P2-P6 contracts;
3. freeze runtime/content/resource separation and indexed `resource_id` loading/caching architecture;
4. freeze local save schema/versioning/migration plus backup/export/import behavior;
5. freeze imported Pokémon data → generated/hash-indexed artifact pipeline;
6. define deterministic fixtures/tests for rules, events, saves, data and resource loading;
7. define offline/PWA/deployment behavior and only retain an Android packaging path if evidence justifies it;
8. produce a versioned architecture contract and implementation-ready skeleton plan for P7 exit.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

P8 must prove a phone-sized mixed-world loop with settlement/social pressure, travel/survival, a persistent faction/relationship thread, Pokémon ecology/direct interaction and a complete `0/3` path. P9 must realize substantive world-content breadth and all 151 living direct-interaction paths.

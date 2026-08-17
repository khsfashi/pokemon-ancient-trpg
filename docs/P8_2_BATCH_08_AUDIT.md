# P8.2 Batch 08 Audit — Equipment slots and bounded readiness

Date: **2026-08-17**

Scope: issue **#118 / Batch 08** only. P9 remains blocked.

## Goal

Add the first authoritative adventurer-equipment layer to the playable P8 slice without turning gear into an MMO score treadmill or introducing a second combat ruleset beside the frozen P3/P4 contracts.

## Implemented

- Added stable notable-item definitions for:
  - `iron.spear`;
  - `travel.gambeson`;
  - `sting.veil`;
  - `hide.buckler`;
  - `route.marker_kit`;
  - `field.observation_kit`.
- Added five explicit equipment slots:
  - main hand;
  - body armor;
  - protective guard;
  - route utility;
  - ecology / field gear.
- Kept carried notable items separate from equipped slot assignment: equipping changes readiness/access, not physical Load.
- Added an authoritative `p3.inventory.set_equipment_slot` domain command with stable-ID, carried-item and slot-compatibility validation.
- Added a bounded read-only equipment projection:
  - **Attack readiness** = Strength + equipped attack contribution;
  - **Defense readiness** = max(Endurance, Agility) + equipped defense contribution;
  - **Field readiness** = Sense + one relevant trained-field-competence contribution + equipped field contribution.
- Readiness is explicitly presentation/authoring support, not a universal roll bonus, damage stat, gear score or Pokémon comparison score. Event-specific fictional permission, Context and consequence mitigation remain authoritative.
- Integrated notable-item Load with pooled Provisions / Remedies / Materials Load.
- Starting carried Load is intentionally `7` with the current `3 Provisions + 1 Remedy` package: a Strength-1 character is at `Comfortable Load + 2`, the upper ordinary-travel edge allowed by D-028, while stronger starts have more room.
- Added a cached derived projection keyed by authoritative character/survival object identity so unrelated world/event changes reuse the prior Load/readiness result rather than rescanning equipment definitions.
- Extended the phone HUD with always-visible Attack / Defense / Field readiness and a detailed equipment section showing all five equipped slots plus carried spare gear.
- Added native Korean equipment labels such as `철제 창`, `누비 여행갑옷`, `독침 방호면`, `가죽 버클러`, `길표식 꾸러미`, and `생태 관찰도구`.

## Save / compatibility boundary

The P8 authoritative-state sub-schema advances from `p8-authority-v1` to **`p8-authority-v2`**.

`v2` adds:

```text
survival.notable_inventory.carried_item_ids
survival.notable_inventory.equipped_item_ids
```

Compatibility behavior:

- new runs write `p8-authority-v2`;
- `p8-authority-v2` saves strictly validate notable inventory and slot assignments;
- legacy `p8-authority-v1` saves remain accepted and are deterministically upgraded in memory with the Batch 08 starting equipment package;
- the next save commit serializes the migrated state as `p8-authority-v2`;
- existing P7 save-envelope / IndexedDB / backup boundaries remain unchanged.

## Regression guards

Unit coverage requires:

- the starting five-slot assignment and D-028 Load ceiling;
- exact Attack / Defense / Field readiness for a known character fixture;
- guard-slot swap from `sting.veil` to carried `hide.buckler` to leave world, Pokémon, event state, resource pools, carried-item Load and Attack unchanged while changing only the declared Defense / Field readiness and hazard tags;
- projection cache reuse across unrelated authority changes and invalidation when survival state changes;
- v2 JSON round-trip plus deterministic legacy-v1 migration;
- rejection of unknown and wrong-slot equipment.

The inherited profile HUD tests now count notable-item Load as well as pooled resource Load.

Phone browser acceptance requires:

- the readiness strip to stay visible during play;
- the five equipped items and carried spare gear to be visible in profile details;
- Korean equipment/readiness terminology to render without overflow;
- portrait/HUD state to survive reload and resume;
- inherited save-backup compatibility and zero-companion phone smoke to remain green.

## Validation

Dedicated workflow **`P8.2 Batch 08 Validation`**: **PENDING**.

The workflow runs:

- `npm ci`;
- strict TypeScript integration check;
- full deterministic unit suite;
- production PWA build and static-deployment validation;
- equipment/profile phone acceptance on Chromium and WebKit;
- P8 backup/save-resume compatibility on Chromium and WebKit;
- inherited P8 phone smoke.

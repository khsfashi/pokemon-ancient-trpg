# Project Status

Last explanatory handoff update: **2026-08-15**

This file is the human-readable operational handoff. Live GitHub PR/issue/CI state wins when this file becomes stale.

## Project direction

Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.

Current owner-approved direction:

- setting is intentionally **earlier than the Hisui-era precedent**;
- first playable land is **future-Kanto territory before mature Kanto regional civilization exists**;
- people identify primarily with local villages/clans/places rather than a regional Kanto state;
- ordinary material culture has an **iron-age / medieval-fantasy-like baseline**, with narrow Pokémon-dependent technology islands only where canon evidence and local practice justify them;
- humans and Pokémon are not integrated through normalized trainer culture, routine ownership, Poké Balls, PC storage, or portable containment;
- Pokémon companionship is rare and meaningful with exactly **three visible companion slots**, while `0/3` is a first-class complete run;
- the world uses **serious selective lethality**: injury, lasting impairment, Critical condition and death are real, but ordinary defeat or `0 Vitality` is not automatic death;
- ancient-world lore follows **official evidence → bounded interpretation → explicit project extrapolation**;
- species identification is knowledge-dependent: descriptive/local labels may precede stable official species identity;
- contextual hunting/killing/material use is species- and culture-sensitive rather than generic loot logic;
- rare human psychics / miracle-workers are allowed, but standard characters do not begin with usable psychic power; actual Gifts require rare authored awakening and ordinarily remain one narrow family;
- Pokémon use a **separate six-axis species profile** plus capability/hazard tags rather than the human seven-Attribute model;
- ordinary Pokémon do **not** auto-scale with player growth; weak species can become genuinely routine later, while rare exceptional/named individuals can remain dangerous through explicit individual stats, traits, history and ecology;
- Pokémon **hazard severity is not capped by species stats**; low-stat species may still create serious consequences through explicit venom, environmental, swarm or anomalous exposure mechanisms;
- P4 six-axis normalization is pinned as **`p4-six-axis-v1`**, a deterministic 1..6 scale derived from preserved raw canonical base stats;
- mandatory roster is National Pokédex **#001-#151**, all 151 species;
- the opening playable scope remains one bounded settlement-centered locality plus surrounding routes/ecologies.

## Completed phases

### P0 — Governance (#1) — COMPLETE

Autonomous continuation protocol, roadmap, decision log and Human Design Gate rules are established.

### P1 — Reference/API/data/resource/IP research (#2) — COMPLETE

P1 closed via PR #18. Key outputs include:

- `docs/SOURCE_REGISTRY.md`
- `docs/FAN_PROJECT_ENFORCEMENT_CASES.md`
- `docs/P1_RESOURCE_ECOSYSTEM_RECON.md`

Final production asset selection remains deferred to P6.

### P2 — World bible and setting contract (#3) — COMPLETE

P2 closed through PR #26 after `docs/P2_EXIT_AUDIT.md` reported **PASS**.

Primary contract: `docs/WORLD_BIBLE.md`.

Binding P2 decisions include:

- **D-012:** early settled village / clan-network society;
- **D-013:** no portable containment; optional three-slot companion system with valid `0/3` runs;
- **D-014:** iron-age ordinary material baseline;
- **D-015:** rare human psychics / miracle-workers are setting-native, no universal magic system;
- **D-017:** Pokémon-dependent local technology islands;
- **D-018:** canon-first derivation protocol;
- **D-019:** hybrid species identification/naming;
- **D-020:** serious selective lethality;
- **D-021:** contextual, species/culture-sensitive Pokémon killing ethics;
- **D-022:** pre-regional-civilization proto-Kanto locality.

`D-016` remains **PROVISIONAL** only in its universal historical wording: ancient Pokémon should feel materially dangerous, but P4 must decide ancient-strength treatment species by species rather than claiming all Pokémon were canonically weakened by civilization.

### P3 — Core TRPG rules and character model (#4) — COMPLETE

P3 closes with `docs/P3_EXIT_AUDIT.md` = **PASS**.

Binding contracts:

- `docs/P3_ATTRIBUTE_CONTRACT.md`
- `docs/P3_DICE_AND_CHECK_CONTRACT.md`
- `docs/P3_HEALTH_PRESSURE_AND_INJURY_CONTRACT.md`
- `docs/P3_CHARACTER_CREATION_CONTRACT.md`
- `docs/P3_PROGRESSION_AND_COMPETENCE_CONTRACT.md`
- `docs/P3_INVENTORY_RESOURCES_AND_ECONOMY_CONTRACT.md`
- `docs/P3_RARE_PSYCHIC_GIFT_CONTRACT.md`
- `docs/P3_FATE_AND_EMERGENCY_CONSUMABLES_CONTRACT.md`
- `docs/P3_EXIT_AUDIT.md`

Resolved P3 decisions:

#### D-023 — Seven human Attributes

`Strength / Endurance / Agility / Sense / Intellect / Will / Presence` (`근력 / 체력 / 기민 / 감각 / 지성 / 의지 / 존재감`).

Luck is not an eighth Attribute. Pokémon do not need to use the same human stat model.

#### D-024 — 2d6 staged checks

`2d6 + Attribute + Competence + Context`

- Attribute range: `0–4`;
- Competence: `+0/+1/+2`, at most one per check;
- ordinary combined Context: normally `-2..+2`;
- default difficulties: `7 / 9 / 11 / 13 / 15`;
- result bands: Setback / Costly-Partial / Full / Exceptional;
- natural `6+6` = Fortune Spike;
- natural `1+1` = Trouble Spike;
- doubles are rare overlays, not automatic impossible-success/death switches.

#### D-025 — Compact survival state

- `Vitality Max = 4 + Endurance` initial formula;
- Fatigue: `Ready → Tired → Exhausted`;
- Fear: `Steady → Shaken → Panicked`;
- up to three active named Injuries with Light / Serious / Critical severity;
- `0 Vitality` means Incapacitated, not dead;
- death requires explicit lethal fiction/escalation under D-020.

#### D-026 — Veiled lifepath + free specialization

Creation flow:

`ordinary human baseline → three fiction-first formative choices → deterministic Origin + Learned Practice → reveal → explicit specialization`

All seven Attributes begin at `1`, then spend four increases with starting cap `3`. Learned Practice grants one trained Competence `+1`; the player chooses one additional different trained Competence `+1`.

`fallen_head_house` / **몰락한 옛 수장가의 후예** is the baseline fallen-prestige fantasy without inventing a mature feudal Kanto.

#### D-027 — Milestone + earned-eligibility progression

No character levels, kill-XP or use-count grinding.

Initial permanent advancement envelope:

- Competence `+0→+1`: 1 advancement + matching eligibility;
- Competence `+1→+2`: 2 advancement + expert eligibility;
- Attribute `+1`: 3 advancement + major breakthrough eligibility, normal human cap `4`.

Default Competence catalog:

`arms`, `hunting`, `wayfinding`, `foraging`, `medicine`, `smithing`, `crafting`, `fishing`, `recordkeeping`, `ritual`, `stealth`, `negotiation`.

There is no universal Pokémon taming/handling Competence.

#### D-028 — Hybrid Load + pooled expedition resources

Individually track notable equipment/items while compressing repeated ordinary travel stock into:

- Provisions;
- Remedies;
- Materials.

Initial `Comfortable Load = 4 + Strength`; ordinary item/resource Load is `0–3`. Load is recalculated only on relevant inventory mutations and cached.

There is no baseline Kanto-wide money wallet. Barter, provisioning, favors, obligations, local exchange media and hidden authoring-facing trade-value references are supported.

Pokémon defeat never automatically yields generic loot/money/materials/XP.

#### D-029 — Rare psychic foreshadowing + in-run awakening

Standard character creation never grants usable psychic power directly.

- strong creation-time foreshadowing initial tuning target: roughly `<=10%` of ordinary histories/seeds;
- actual Gift awakening initial tuning target: roughly `<=5%` of ordinary runs;
- no foreshadowing is required for an exceptionally rare transformative awakening;
- ordinary awakened characters have one narrow Gift family by default: Omen/Premonition, Mind Echo, Kinetic Touch, Dream Resonance, or Veil Sense;
- no psychic Attribute, Competence, mana bar, spell list, generic combat-power package or universal reroll;
- strong Miracle exertion spends existing risk capacity such as Fatigue rather than a new magic resource.

#### D-030 — No Fate/reroll currency; concrete emergency consumables

There is **no universal Fate/Luck/Resolve/reroll/die-replacement/result-upgrade resource**. Rolled dice and natural doubles remain authoritative.

Player-controlled emergency mitigation comes instead from **finite, fictionally real consumable items** carried under the D-028 inventory/Load model, inspired by the useful preparation tension of games such as Arkham Horror without copying a meta-currency.

Emergency consumables use authored preparation/reaction/recovery windows and may, when their exact item fiction supports it:

- reduce Vitality loss;
- prevent or downgrade a matching impending Injury;
- enable stabilization;
- prevent a matching Fatigue/Fear escalation;
- open escape/shelter/resistance options;
- counter a specific poison/environmental/Psychic/Ghost/species hazard;
- protect another resource/equipment consequence.

They **do not reroll dice, cancel natural doubles, manufacture Fortune Spikes, or universally cancel failure**. A generic `lucky token item` that merely disguises Fate points is forbidden.

Exact species-derived/protective consumables belong to P4/P5 only when canon-first evidence and the local setting justify them.

### P3 exit audit result

`docs/P3_EXIT_AUDIT.md` passes:

- modifier-stacking bounds;
- state-overload review;
- serious-selective-lethality consistency;
- ordinary/generalist/psychic and `0/3` build viability;
- reward-loop variety without capture/XP dependence;
- deterministic downstream state/operation requirements;
- no unresolved P3 Human Design Gate.

Numeric values remain tunable in data/playtesting; the architecture is frozen strongly enough for P4/P5.

## Current phase

**P4 — Pokémon adaptation + complete Gen-I 151 species dossiers (#5) is active.**

P4 must translate canonical Pokémon data/evidence into the ancient setting without turning the project into a conventional collect-them-all game.

Mandatory exit breadth: **National Pokédex #001-#151, 151/151 substantive dossiers**.

Authoritative planning input: `docs/GEN1_SPECIES_COVERAGE_PLAN.md`.

### P4 shared foundation established

P4-HDG-001 / **D-031** establishes the approved Pokémon mechanical direction:

- Pokémon keep a separate six-axis internal species profile: `Vigor / Force / Guard / Potency / Resistance / Speed`;
- the six axes are derived from but kept separate from canonical raw `HP / Attack / Defense / Sp. Atk / Sp. Def / Speed` source values;
- capability/hazard tags represent flight, venom, swarm behavior, Psychic/Ghost invalidators and other properties that numbers alone cannot express;
- ordinary species/individuals do **not** level-scale to the player;
- player growth, equipment and knowledge may make previously dangerous ordinary weak species routine enough to skip checks;
- ordinary individual variation remains modest;
- rare exceptional or named/apex individuals may receive explicit stat shifts, capabilities, learned behavior and history, including exceptionally dangerous members of normally weak species;
- exceptional individuals are rare world entities, not generic elite-affix enemies generated to match player power.

The hazard-severity clarification additionally binds:

- **species stats do not cap hazard severity**;
- delivery/exposure semantics are separate from post-exposure consequence severity;
- low-stat/high-hazard and high-stat/low-aggression cases must remain valid after numeric calibration.

Binding P4 foundation documents:

- `docs/P4_POKEMON_DOMAIN_CONTRACT.md`
- `docs/P4_SPECIES_DOSSIER_SCHEMA.md`
- `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`
- `docs/P4_PILOT_ROSTER_AND_CALIBRATION_PLAN.md`
- `docs/P4_PILOT_EVIDENCE_AND_HAZARD_PACKETS.md`
- `docs/P4_RATING_SCALE_CALIBRATION.md`
- `docs/P4_PILOT_FULL_SCHEMA_DOSSIERS.md`
- `docs/P4_PILOT_COMPLETION_AUDIT.md`

### P4 hazard-first pilot evidence and numeric calibration complete

The eight-species pilot is:

- **#019 Rattata** — common weak baseline, late-run triviality, named/apex weak-species fixture;
- **#013 Weedle** — low-stat/high-hazard venom calibration;
- **#015 Beedrill** — swarm/colony pressure and Weedle-family evolution consistency;
- **#131 Lapras** — aquatic/environment dependence and formidable-without-presumed-aggression calibration;
- **#130 Gyarados** — large-body/high-force and water/environment escalation;
- **#092 Gastly** — Ghost/anomalous approach invalidation;
- **#140 Kabuto** — fossil/history ambiguity;
- **#151 Mew** — Mythical indirect/exceptional treatment.

`docs/P4_PILOT_EVIDENCE_AND_HAZARD_PACKETS.md` is the pre-calibration evidence baseline; operational numeric authority is `docs/P4_RATING_SCALE_CALIBRATION.md`, and full-schema authority for the eight pilot dossiers is `docs/P4_PILOT_FULL_SCHEMA_DOSSIERS.md`.

The pinned scale is:

`rating_scale_version: p4-six-axis-v1`

- raw `<40` → rating `1`;
- raw `40..59` → rating `2`;
- raw `60..79` → rating `3`;
- raw `80..99` → rating `4`;
- raw `100..119` → rating `5`;
- raw `>=120` → rating `6`.

Pinned pilot profiles (`Vigor/Force/Guard/Potency/Resistance/Speed`):

- Rattata `1/2/1/1/1/3`;
- Weedle `2/1/1/1/1/2`;
- Beedrill `3/4/2/2/4/3`;
- Lapras `6/4/4/4/4/3`;
- Gyarados `4/6/3/3/5/4`;
- Gastly `1/1/1/5/1/4`;
- Kabuto `1/4/4/2/2/2`;
- Mew `5/5/5/5/5/5`.

`pilot-rattata-apex-01` remains the concrete exceptional fixture with deltas `+1/+2/+0/+0/+0/+2`, resolved profile `2/4/1/1/1/5`, explicit learned behavior, stable warning signs, and no player-level scaling.

### P4 full-schema pilot gate complete

`docs/P4_PILOT_FULL_SCHEMA_DOSSIERS.md` fills the complete P4 dossier shape for all eight species:

- provenance review;
- ancient-strength treatment;
- ecology and observable signs;
- human perception/culture;
- identification and progressive knowledge;
- threat state, consequences and D-024 check hooks;
- ordinary and exceptional individual variation;
- companionship eligibility and logistics;
- P3-compatible mechanical hooks;
- hunting/material treatment;
- technology/craft and emergency-consumable results;
- narrative/P5 hooks;
- P6 presentation follow-ups;
- evolution/cross-species references;
- explicit unresolved source/locality questions.

All eight are now `pilot_reviewed`.

`docs/P4_PILOT_COMPLETION_AUDIT.md` reports **PASS**:

```text
pilot_species_count == 8
pilot_reviewed_count == 8
blocking_pilot_gate_count == 0
rating_scale_version == p4-six-axis-v1
```

The audit also passes all 20 shared-schema completion checks and every pilot-specific failure case. No structural schema change and no new Human Design Gate were required.

Important preserved boundaries:

- Weedle/Beedrill exact human venom medicine remains source-unknown rather than fabricated;
- Lapras stays high-capability without aggression leakage;
- Gyarados uses route/cover/displacement semantics rather than TN inflation or an HP sponge;
- Gastly invalidates unsupported physical approaches before numeric resolution;
- Kabuto does not gain a routine ancient-Kanto spawn just because the setting is old;
- Mew remains suitable for indirect/rare presence rather than routine capture or companionship.

### Exact next work

The pilot gate is closed. **Bulk P4 authoring may begin.**

The next coherent slice is:

1. establish an auditable P4 species coverage manifest using the frozen schema status fields;
2. select the first ecology/evolution-family-aware batch rather than raw Pokédex order;
3. source-review and author that batch against `p4-six-axis-v1`;
4. run provenance, schema-completeness, evolution/cross-species consistency and P2/P3 contradiction checks;
5. promote only reviewed dossiers in the manifest;
6. continue batchwise until the final `151/151` audit passes.

Do not reopen the shared schema or six-axis scale opportunistically. Change them only when a later species demonstrates a concrete structural failure or a real Human Design Gate.

## Later mandatory contracts

- **P5 / #6:** deterministic seeded narrative event-engine contract consuming P2-P4 state/rules, including emergency item reaction windows and valid `0/3` companion runs.
- **P6 / #12:** exact production resource/asset/provenance/mobile-budget contract.
- **P7 / #7:** technical architecture after P1-P6 contracts are stable.
- **P8 / #8:** first playable mobile vertical slice.
- **P9 / #9:** replayable expansion + `151/151` meaningful authored gameplay presence.
- **P10 / #10:** release/mobile delivery hygiene and optional Android packaging.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

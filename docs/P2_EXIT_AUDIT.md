# P2 World Bible Exit Audit

Status: **PASS — ready to close P2 after merge**  
Date: **2026-08-14**  
Owning issue: **#3 — P2 World bible and setting contract**

## 1. Audit purpose

P2 exists to freeze the **minimum world rules** later rules/content need, not to pre-author every village, price, medicine recipe, psychic power, or species-specific custom.

This audit checks the #3 acceptance scope against the current decision log and binding contracts and distinguishes:

- world-level rules that must be fixed now;
- project-authored content that belongs to P4/P5/P8/P9;
- numerical/mechanical rules that belong to P3;
- technical/resource work that belongs to P6/P7.

## 2. Required scope audit

### Era and technology level — PASS

Bound by:

- D-010 — earlier than the Hisui-era precedent;
- D-014 — iron-age ordinary material baseline;
- D-017 — narrow local Pokémon-dependent technology islands;
- D-022 — local sophistication without regional civilization.

The setting can support iron tools, weapons, agriculture, specialized craft and exceptional source-backed local techniques without implying modern institutions or a Hisui-level organized frontier.

### Human settlements — PASS

Bound by D-012, D-022 and `docs/WORLD_BIBLE.md`.

Human society is a fragmented village/clan network: stable small settlements exist, but continuous settlement, mature cities and regional state capacity do not.

### Travel — PASS

Bound by D-012, D-022 and World Bible section 5.

Travel uses dangerous locally known corridors, guides, ecological knowledge and event-driven route state. A route is not automatically a permanently secured road.

### Economy — PASS at P2-required depth

World Bible section 4 fixes:

- local subsistence and specialist craft;
- barter/exchange of goods, labor, information and favors;
- intermittent route-dependent trade;
- no assumption of a frictionless regional market or standardized Kanto-wide economy.

Exact currency, prices, debt/resource mechanics and inventory abstractions belong to P3/P5 unless later content needs a local custom.

A universal currency is therefore **not a P2 blocker**.

### Danger — PASS

Bound by D-014, D-016, D-020, World Bible sections 5 and 8, and the lethality research/contract.

Pokémon and wilderness can be materially overwhelming to prepared humans; iron is useful without granting parity. Ordinary defeat is not automatic death, while explicit lethal contexts remain real.

### Medicine — PASS at P2-required depth

World Bible section 9 fixes:

- no modern Pokémon Center baseline;
- household first aid, healers, wound care, splinting, rest, sanitation/material knowledge and specialist remedies;
- persistent/critical injuries that create treatment consequences;
- local Pokémon-derived medicine only when P4 source evidence supports it;
- no universal trainer-style Pokémon treatment infrastructure.

Exact recovery numbers, treatment checks, injury tables and exceptional healing mechanics belong to P3/P4/P5.

### Social relationship between humans and Pokémon — PASS

Bound by:

- D-013 — no containment; uncommon voluntary companionship; visible three-slot system;
- D-020 — real injury/death without routine attrition;
- D-021 — contextual culture/species-sensitive killing ethics;
- D-022 — strong locality/cultural fragmentation.

The world explicitly avoids modern normalized trainer ownership.

### Terminology — PASS

D-019 and `docs/P2_TERMINOLOGY_AND_IDENTIFICATION_CONTRACT.md` separate:

- stable system species identity;
- current player knowledge;
- unidentified/identified presentation;
- local names, myths and misidentification;
- system use of `Pokémon` from diegetic local vocabulary.

No universal ancient generic word is required to close P2.

### Occupations/background space — PASS

World Bible section 10 defines a setting-native occupation space built around survival, travel, craft, healing, knowledge, exchange, local Pokémon ecology and rare bounded anomalous gifts.

It explicitly rejects default fantasy wizard-class assumptions. Exact playable background mechanics belong to P3.

### Pokémon treatment categories — PASS

The world supports species/local treatment as dangerous wildlife, feared monsters, ecological forces, tolerated neighbors, protected/sacred beings, resource relationships and exceptional companions.

D-021 prevents those categories from collapsing into a universal kill/loot morality.

P4 owns the concrete #001-#151 assignments.

### Injury/death/severity tone — PASS

D-020 and `docs/P2_INJURY_AND_LETHALITY_CONTRACT.md` bind serious selective lethality, persistent injury, critical states, genuine death, rare companion death and explicit authored lethal escalation.

Exact health math and player-death handling belong to P3.

### First playable region/world boundary — PASS

D-022 and `docs/P2_FIRST_REGION_CONTRACT.md` bind:

- future-Kanto territory as project/system anchor;
- no mature ancient `Kanto` regional identity;
- pre-regional-civilization fragmentation;
- one bounded settlement-centered opening locality;
- no projection of modern Kanto cities/routes/institutions/habitats without evidence;
- no requirement to place all 151 species in the opening locality.

## 3. Human Design Gate audit

Resolved gates:

1. P2-HDG-001 / D-012 — early settled village/clan network.
2. P2-HDG-002 / D-013 — no portable containment; optional three-slot companions.
3. P2-HDG-003 / D-017 — iron-age baseline plus local Pokémon-dependent technology islands.
4. P2-HDG-004 / D-019 — hybrid species identification/naming.
5. P2-HDG-005 / D-020 — serious selective lethality.
6. P2-HDG-006 / D-021 — contextual culture/species-sensitive killing ethics.
7. P2-HDG-007 / D-022 — pre-regional-civilization proto-Kanto locality.

No unresolved world-level Human Design Gate currently blocks P3.

## 4. Explicitly deferred, not missing

The following are deliberately **not** P2 closure blockers:

- exact calendar date or real-world historical analogue;
- exact local village/route names and coordinates;
- universal ancient word for Pokémon;
- exact coinage/prices/economic mechanics;
- exact steel grades, armor tiers or production math;
- exact health values and injury tables;
- exact psychic abilities, costs and numerical ceilings;
- species-specific ancient strength, habitat, hunting, companionship and technology hooks;
- first-slice exact species roster;
- event chains and route-state schemas;
- resource/art/audio production choices;
- runtime/framework/save architecture.

These have explicit downstream owners in P3-P9 and freezing them in P2 would increase contradiction/rework risk without improving the world contract.

## 5. Cross-contract contradiction audit

### D-012 vs D-022 — PASS

There is no contradiction between stable villages and “not yet civilized” regional scale. The binding interpretation is:

> local settlement/craft can be sophisticated while wider regional integration remains weak or absent.

### D-014 vs D-022 — PASS

Iron-age material capability does not require cities, state administration, safe roads or large markets.

### D-013 vs D-021 — PASS

Pokémon can be hunted or killed in some contexts while voluntary companions remain relational partners rather than generic property.

### D-016 vs D-018 — PASS with provisional flag preserved

The desired ancient-danger tone remains active while universal lineage weakening is not misrepresented as canon. P4 must resolve strength treatment species by species.

### D-017 vs D-022 — PASS

Technology islands are local and fragile, so they reinforce rather than erase regional fragmentation.

### D-019 vs D-022 — PASS

Cultural fragmentation naturally supports local species terminology and uneven knowledge without duplicating stable system species identity.

### D-020 vs D-021 — PASS

Death can be mechanically real without implying that lethal action is either always moral or always forbidden.

## 6. P3 handoff invariants

P3 may now define compact deterministic rules, but it must preserve:

- fully viable human-only `0/3` runs;
- exactly three companion slots as maximum capacity;
- companion presence as physical/logistical state, not inventory storage;
- serious selective lethality rather than universal `HP 0 = death`;
- human survival tools that do not require a companion;
- local/fragmented economy rather than assumed regional standardized commerce;
- bounded rare psychic gifts rather than a universal spell system;
- identification/knowledge as separate from stable species identity;
- rules that work in a settlement-centered, dangerous-travel world;
- no mechanical incentive that silently converts every Pokémon encounter into kill/loot progression.

## 7. Result

**P2 exit result: PASS.**

Issue #3 can close once this audit and the D-022 region contract are merged to `main` and `PROJECT_STATUS.md` is advanced to P3.

# P1 Resource Ecosystem Reconnaissance and Closeout Audit

Verified: **2026-08-14**

This document completes the final resource-source reconnaissance slice of P1 / #2.

It is a companion to `docs/SOURCE_REGISTRY.md`, not a production asset manifest. P1 records viable ecosystems, provenance/license boundaries, maintenance characteristics, and downstream decisions. **P6 / #12 remains the only phase allowed to freeze final art direction, exact production assets, packaging/fetch strategy, preprocessing, and mobile resource budgets.**

## Decision vocabulary

- `ADOPT`: source can be used directly for the stated bounded role after normal pinning/notice work.
- `ADAPT`: concepts or selected artifacts may be used, but the project must add its own normalization/provenance constraints.
- `REVISIT IN P6`: viable production candidate whose final selection depends on P2-P5 design.
- `DEFER`: useful discovery ecosystem but too heterogeneous or costly to classify globally during P1.
- `REJECT`: not suitable for the intended role.

---

## SRC-FONT-001 — Pretendard

**Decision:** `REVISIT IN P6`  
**Role:** primary Korean/English mobile UI font candidate  
**Canonical repository:** https://github.com/orioncactus/pretendard  
**Verified repository head:** `7aeb0698819be2b4097dae8ec8fe6a795e5cf3ae`  
**Documented release family at verification:** `1.3.9`  
**License:** SIL Open Font License 1.1

### Evidence and useful characteristics

- The project explicitly documents Korean-focused webfont delivery, including static, variable, dynamic-subset, and variable dynamic-subset forms.
- Official documentation provides npm/package-manager and self-host/CDN-oriented distribution paths.
- The font is derived from established families including Source Han Sans and Inter, with Pretendard-specific combination/redesign work.
- The license file is OFL-1.1 and explicitly permits use, embedding, modification, and redistribution subject to OFL conditions and reserved font-name rules.

### P1 conclusion

Pretendard is a strong P6 candidate for a Korean-first mobile text UI because it combines Hangul/Latin coverage with web-oriented subset/variable delivery options.

P1 does **not** select a concrete weight set, subset strategy, CDN dependency, or bundle size. P6 must compare actual game copy, offline/PWA needs, rendering quality, and payload cost before selecting the final font artifacts.

### P6 revisit questions

- variable vs static weights,
- dynamic subset vs self-hosted deterministic subset,
- offline/PWA behavior,
- exact license/notice packaging,
- fallback stack and missing-glyph policy,
- measured WOFF2 payload for the actual Korean/English corpus.

---

## SRC-FONT-002 — Noto Sans CJK / Korean variants

**Decision:** `REVISIT IN P6`  
**Role:** high-coverage Korean/CJK fallback and comparison baseline  
**Canonical repository:** https://github.com/notofonts/noto-cjk  
**License:** SIL Open Font License 1.1

### Evidence and useful characteristics

- Noto CJK provides Korean language-specific and Korean region-subset variable fonts in OTF/TTF forms.
- The repository documents language-specific variable fonts and region-specific subset variable fonts, allowing P6 to compare broad coverage against smaller deployment forms.
- Noto CJK Sans is OFL-1.1 licensed.

### P1 conclusion

Noto Sans CJK is valuable as a proven coverage/fallback baseline but may be heavier than necessary for a Korean/English-only mobile text game if a smaller Pretendard deployment satisfies the final character set.

Do not ship a full CJK collection merely for convenience. P6 must measure the exact selected webfont/subset payload.

---

## SRC-UI-001 — Lucide

**Decision:** `REVISIT IN P6`  
**Role:** lightweight project-owned/non-Pokémon-facing UI icon candidate  
**Canonical repository:** https://github.com/lucide-icons/lucide  
**Verified current release observed:** `1.16.0` (2026-05-14)  
**License:** ISC for Lucide work; listed Feather-derived icons retain MIT notices

### Evidence and useful characteristics

- Lucide is an actively maintained SVG icon toolkit with framework packages and direct SVG usage patterns.
- The project explicitly excludes brand-logo submissions, which is helpful for keeping generic UI icons separate from Pokémon/trademark-facing assets.
- Its license is permissive, but the required copyright/license notices still need to be retained when redistributing covered files/packages.

### P1 conclusion

Lucide is a strong generic UI candidate because a P7 implementation could include only the icons actually used instead of loading a large icon font.

P6 must still choose visual direction before selecting it; a medieval/ancient presentation may call for custom project-owned marks instead of a modern line-icon language.

---

## SRC-UI-002 — Google Material Symbols

**Decision:** `REVISIT IN P6`  
**Role:** broad generic UI-symbol comparison/candidate  
**Canonical repository:** https://github.com/google/material-design-icons  
**Official guide:** https://developers.google.com/fonts/docs/material_symbols  
**License:** Apache License 2.0

### Evidence and useful characteristics

- Material Symbols is Google's current icon set; classic Material Icons is no longer the actively expanded set.
- The official guide documents more than 2,500 symbols, SVG/PNG access, self-hosting/Google Fonts use, and variable axes for fill, weight, grade, and optical size.
- The repository and guide identify Apache-2.0 licensing.

### Risks / constraints

- Loading an entire symbol font may be wasteful for a small text RPG using only a handful of actions/status indicators.
- The repository/npm/update history is not as simple as `latest release = latest symbol catalog`; P6/P7 must pin the exact artifact path rather than assuming a stale package mirrors the live browser.

### P1 conclusion

Keep Material Symbols as a breadth/reference candidate. Prefer per-icon SVG or a deliberately subsetted artifact if P6 chooses this ecosystem; do not default to a full icon font without measured benefit.

---

## SRC-ASSET-003 — Kenney game assets

**Decision:** `REVISIT IN P6`  
**Role:** low-friction generic UI, 2D, and audio resource ecosystem  
**Canonical site:** https://kenney.nl/assets  
**License policy:** asset-page game assets are CC0 / public-domain dedicated; attribution is not required by Kenney's support guidance

### Evidence and useful characteristics

- Kenney explicitly states that game assets on its asset pages are CC0 and usable in commercial projects.
- The catalog contains generic UI packs, RPG-oriented UI extensions, 2D game-art packs, and audio packs such as UI Audio.
- Individual asset pages expose pack category, file counts, version, and CC0 status.

### P1 conclusion

Kenney is the cleanest general-purpose third-party resource ecosystem found in this reconnaissance pass because provenance/licensing is substantially simpler than mixed-license marketplaces.

That does **not** mean a Kenney pack is automatically visually appropriate. P6 must select only assets that match the approved world/presentation and preserve the downloaded pack/version/source record.

### P6 revisit questions

- whether generic UI art is needed versus project-owned CSS/SVG,
- which specific pack/version is coherent with the ancient setting,
- exact source archive hash and extracted-file manifest,
- whether audio/UI effects materially improve the text-first experience,
- build-time conversion and mobile decode cost.

---

## SRC-AUDIO-001 — Freesound

**Decision:** `DEFER` as discovery ecosystem; `REVISIT IN P6` only for individually classified sounds  
**Role:** ambience/SFX discovery and candidate sourcing  
**Canonical site:** https://freesound.org  
**API documentation:** https://freesound.org/docs/api/

### Evidence and useful characteristics

- Freesound exposes per-sound Creative Commons license metadata rather than one uniform license for the whole catalog.
- Current documented sound-license values include Creative Commons 0, Attribution, and Attribution NonCommercial.
- API search responses expose `id`, uploader, tags, license, original type, duration, sample rate, file size and related metadata useful for an auditable source manifest.
- Freesound API terms separately constrain API use and are not the same thing as a sound's content license.

### P1 policy

- Do not bulk-download or vendor Freesound during P1.
- Do not treat `hosted on Freesound` as a license category.
- P6 must classify every selected sound by stable sound ID, uploader, exact content license, source URL, download/hash, attribution requirement, and derivative/remix chain where relevant.
- Prefer CC0 or straightforward CC-BY candidates when equivalent quality exists; do not rely on the project's current non-commercial intent as a reason to accumulate avoidable BY-NC coupling.
- Runtime/API dependence is unnecessary for this game and should not be introduced merely for asset discovery.

---

## SRC-ASSET-004 — OpenGameArt

**Decision:** `DEFER` as discovery ecosystem; `REVISIT IN P6` only at individual-asset level  
**Role:** broad 2D/background/illustration/music/SFX discovery  
**Canonical site:** https://opengameart.org

### Evidence and useful characteristics

- OpenGameArt hosts game-ready art under multiple licenses rather than a single site-wide license.
- Its FAQ covers licenses including CC0, attribution licenses, share-alike licenses and GPL-family licenses; obligations differ materially by asset.
- Submission guidance requires source/texture provenance and rejects assets whose upstream restrictions do not fit accepted licensing.
- Collection credit-file tooling exists, but the site itself warns that generated credit information is not guaranteed correct and remains the user's responsibility to verify.

### P1 policy

OpenGameArt is useful for discovering backgrounds, ambience, music, UI and illustration candidates, but **no collection or search result is production-approved as a group**.

P6 must select at the individual asset level and reject any candidate whose attribution, share-alike, source, DRM/distribution, or derivative obligations do not fit the final release path cleanly.

---

## SRC-ASSET-005 — PokéSprite

**Decision:** `REVISIT IN P6`  
**Role:** alternative Pokémon box/icon and inventory-sprite candidate with explicit machine-readable mappings  
**Canonical repository:** https://github.com/msikma/pokesprite  
**Verified repository head:** `c5aaa610ff2acdf7fd8e2dccd181bca8be9fcb3e` (`2.7.0-master` documentation state; repository is comparatively old)  
**License boundary:** sprite images are explicitly © Nintendo / Creatures Inc. / GAME FREAK Inc.; code and non-sprite project material are MIT-licensed

### Material difference from PokéAPI `sprites`

PokéSprite adds enough distinct value to justify recording a second Pokémon visual candidate:

- box/icon-oriented Pokémon sprites rather than broad battle-art aggregation,
- explicit small fixed-size icon families (including Gen 7/8-era box styles),
- item/inventory sprite organization,
- machine-readable Pokémon/item mapping files,
- generated-spritesheet tooling/reference projects,
- explicit flags for unofficial/edited/legacy variants.

### P1 conclusion

PokéSprite is technically convenient for compact list/bestiary/party-style presentation, but its own README makes the Pokémon image-rights boundary explicit. The MIT license does **not** apply to Nintendo/Creatures/GAME FREAK sprite images.

Do not vendor the sprite corpus during P1. P6 must compare PokéSprite against the PokéAPI sprite candidate based on the final UI need, age/style coherence, exact #001-#151 coverage, redistribution strategy, and asset budget.

The repository's age is also a maintenance signal: if selected, pin exact files/hashes and do not assume continued upstream updates.

---

# Explicit P6 revisit list produced by P1

P6 / #12 must revisit the following only after P2-P5 define presentation and gameplay needs:

1. **Pokémon visuals**
   - PokéAPI `sprites`
   - PokéSprite
   - choose exact style/family only if the game actually needs Pokémon imagery
2. **Pokémon cries**
   - PokéAPI `cries`
   - decide whether cries add enough value to justify rights/provenance/payload complexity
3. **Fonts**
   - Pretendard
   - Noto Sans CJK / Korean variants as fallback/comparison
4. **Generic UI icons**
   - Lucide
   - Material Symbols
   - custom project-owned CSS/SVG remains a valid alternative
5. **Generic game/UI/audio packs**
   - Kenney individual packs
6. **Ambience/SFX discovery**
   - Freesound only through individually licensed, hashed records
7. **Background/illustration/music/general asset discovery**
   - OpenGameArt only through individually licensed, provenance-checked records
8. **Project-created/generated resources**
   - compare against third-party reuse once P2-P5 establish actual art direction and content density

P6 must produce the final stable resource-ID manifest, provenance registry, public-repository inclusion/fetch/generation rules, preprocessing pipeline, decoded-memory/payload budgets, preload/cache/eviction behavior, and validation strategy.

---

# P1 / #2 closeout audit

Issue #2 requires a durable, current, source-backed reference map with provenance/update/risk decisions and an explicit P6 handoff where production choices depend on unfinished design.

## Required lanes

| Lane | Status | Durable evidence |
|---|---|---|
| PokéAPI | complete | `docs/SOURCE_REGISTRY.md` |
| Pokémon Showdown | complete | `docs/SOURCE_REGISTRY.md` |
| sprite/icon repositories | complete | PokéAPI sprites + PokéSprite candidate |
| Pokémon cries/audio | complete at reconnaissance depth | PokéAPI cries |
| font/UI/audio/background ecosystems | complete at reconnaissance depth | this document |
| PokéRogue reference | complete | `docs/SOURCE_REGISTRY.md` |
| comparable text/event RPGs | complete | `docs/SOURCE_REGISTRY.md` |
| official ancient-era/world-setting references | complete | `docs/SOURCE_REGISTRY.md` + D-010 |
| fan-project/IP/disclaimer boundaries | complete | `docs/SOURCE_REGISTRY.md` + `docs/FAN_PROJECT_ENFORCEMENT_CASES.md` |

## Exit criteria audit

- Source purpose/classes: **satisfied**.
- License/provenance boundary: **satisfied at P1 depth**.
- Update/pinning characteristics: **satisfied at P1 depth**.
- ADOPT/ADAPT/REJECT/DEFER/P6 decisions: **satisfied**.
- Pokémon IP separated from code/data/repository licenses: **satisfied**.
- No premature production asset selection: **satisfied**.
- Explicit P6 revisit list: **satisfied above**.
- Sufficient evidence to begin P2 without relying on model memory: **satisfied**.

**P1 recommendation: close #2 after this document is merged.**

No further broad P1 source hunting is justified unless a later owning phase identifies a concrete evidence gap. The next core phase is **P2 / #3 — World bible and setting contract**.

P2 must preserve owner decision D-010: the target society is intentionally earlier than the Hisui-era precedent, while the exact technology/social/terminology/lethality/region/bond model remains a Human Design Gate to resolve in P2 rather than a research gap to expand P1 indefinitely.

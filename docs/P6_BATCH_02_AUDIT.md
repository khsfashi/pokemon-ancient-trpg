# P6 Batch 02 Audit — Exact Pins, Representative Measurement, and Executable Budgets

Verified: **2026-08-17**  
Owner phase: **#12 — P6 Resource and asset strategy**  
Presentation authority: **D-036**

## Scope

Batch 02 converts D-036 into executable resource evidence without importing an uncleared Pokémon corpus or selecting the P7 framework.

This batch freezes exact generic-resource pins, family-level Pokémon source maps, representative hashes/dimensions, numeric mobile resource guardrails and fail-closed CI validation.

## 1. Pretendard

```text
repository = orioncactus/pretendard
release = v1.3.9
commit = 5c41199ea0024a9e0b2cb31735265056e5472d76
artifact = packages/pretendard/dist/web/variable/woff2/PretendardVariable.woff2
git blob = 49c54b5152a184a243e85f7281ed338b6569987e
source bytes = 2,057,688
license = OFL-1.1
```

Decision: one variable WOFF2 is the Korean/Latin baseline. Noto remains fallback/reference rather than a second full bundled CJK family. The importer must compute SHA-256 before a distributable bundle is emitted.

## 2. Lucide exact subset

Frozen `1.27.0` commit: `4aec3f892fd6c23063bc2fead83c899b5d412b1c`.

| Resource | File | Bytes | SHA-256 |
|---|---|---:|---|
| back | `arrow-left.svg` | 262 | `c5f4b88076108eb1a0d95336e1aa7e7bb1419a3a92af96f6247d88cd3456f933` |
| confirm | `check.svg` | 239 | `7f33acc9a77a61659531044525fc008edebe215bf4dcf1c789c8674ad3277db0` |
| settings | `settings.svg` | 586 | `0ae27fd0f81999229e3127ac96c5b32edfea448e291d509e76212b917551d66b` |
| close | `x.svg` | 260 | `4a9cdab38fbb96162e7dace28e33f4ca0e49d8963a6162abc3d4691b7d675117` |

Total source SVG bytes: **1,347**. Game-domain check/companion marks remain project-owned CSS/SVG semantics.

## 3. PokéSprite compact identity

Frozen source:

```text
commit = c5aaa610ff2acdf7fd8e2dccd181bca8be9fcb3e
mapping = data/pokemon.json
mapping blob = 1cfd2faab9c2c4cf45c0ca14a8560ed872a014df
mapping bytes = 525,985
asset template = pokemon-gen8/regular/{slug}.png
```

The pinned mapping begins at `001`, contains the required Gen-I boundary through `150` and `151`, then continues with `152`. Import identity is frozen as `National Dex id -> pinned slug.eng -> Gen-8 regular PNG`.

Representative exact files:

| Dex | File | Encoded | Canvas | SHA-256 | RGBA8 |
|---:|---|---:|---:|---|---:|
| 001 | bulbasaur | 335 B | 68×56 | `a3bd4708f11413968541a177e5d05363f913b3e961a69f96fc342a419d28aca2` | 15,232 B |
| 025 | pikachu | 372 B | 68×56 | `9d715313833c46690f9932dd45b59da7e21630d35bcf4818992378362a3b898a` | 15,232 B |
| 150 | mewtwo | 737 B | 68×56 | `def15565bbba25d4d9062405244770bbe7596325d779689b85a8c4f2a8b81694` | 15,232 B |
| 151 | mew | 333 B | 68×56 | `167f615afd36a63f4be4df127184d7262125b03c6a7c4971809afd5a30c5c00d` | 15,232 B |

Rights remain `metadata_only / not_cleared`; the surrounding repository MIT license is not treated as permission to redistribute Pokémon imagery.

## 4. Animated encounter candidate

Frozen source:

```text
repository = pagefaultgames/pokerogue-assets
commit = 909b43612324622608023b3beb2f24f4ef159c1d
texture = images/pokemon/{id}.png
metadata = images/pokemon/{id}.json
provenance registry = images/REUSE.toml
REUSE blob = 7f3cd5f10a99e8ab1098f301fd7e0ee9189a59d0
```

Representative atlas evidence:

| Dex | Texture blob | Metadata blob | Atlas | RGBA8 |
|---:|---|---|---:|---:|
| 001 | `2ec03e93ae89b00da102ef8e37eb08ed7327f31d` | `4fb42da4e28fb0188a78a75396aca34e226b8172` | 181×181 | 131,044 B |
| 151 | `bf63b472035b22cf1e6ea810d8c88450e6cf8484` | `b79e4cd6c0c6e194de9cb121a4583066084ab5d4` | 225×225 | 202,500 B |

Atlas JSON is build/import input: validate texture name/dimensions/frame rectangles once, compile metadata, and do not reparse it per render. Repository provenance is mixed, so exact Pokémon textures remain `metadata_only / not_cleared`.

## 5. D-036 non-destructive reveal

```text
concealed
silhouette
partial_reveal
revealed
identified
```

One base encounter resource is cached by `resource_id`. Reveal state is presentation data; no separate persistent silhouette/darkened/cropped Pokémon textures are created.

## 6. Numeric budgets

Frozen in `docs/P6_RESOURCE_BUDGET_AND_PIPELINE_CONTRACT.md`:

```text
P6-owned required initial resource payload <= 3 MiB
Pokemon media initial payload = 0
compact icon decoded cache <= 384 KiB
encounter atlas decoded cache <= 1 MiB
max resident encounter atlases = 2
combined optional Pokemon decoded image working set <= 1.375 MiB
baseline BGM/ambience/UI-SFX/cries payload = 0
required raster location/event illustration payload = 0
```

The compact cap fits 24 measured 68×56 RGBA8 icons. The encounter cap allows two 512 KiB entries; measured samples are 131,044 B and 202,500 B decoded. P7 must remeasure the selected runtime/device rather than treating RGBA8 as exact GPU accounting.

## 7. Executable validation

`tools/validate_p6_resources.py` enforces:

- JSON Schema 2020-12 validity;
- unique `resource_id` and upstream artifact ownership;
- stable cache/duplicate-instance policy;
- no `metadata_only + bundled`;
- SHA-256 for bundled external artifacts;
- exact hash-late Pretendard pin/blob/size exception only;
- no committed/public-cleared/initial-preloaded Pokémon media under current policy;
- exact four-icon Lucide subset;
- RGBA8 decoded-byte arithmetic;
- compact/encounter cache guardrails;
- frozen source-map pins/templates/Gen-I boundaries.

CI: `.github/workflows/p6-resource-validation.yml`.

Local validation result before publish:

```text
P6 resource validation PASS
manifest records = 7
measured initial source bytes = 2,059,035 / 3,145,728
negative controls: duplicate id / public Pokemon / initial Pokemon / pin drift => rejected
```

## 8. Verdict

```text
exact_font_pin == PASS
exact_generic_icon_subset == PASS
pokesprite_mapping_contract == PASS
representative_compact_hash_measurement == PASS
animated_atlas_measurement == PASS
pokemon_rights_fail_closed == PASS
concrete_manifest == PASS
numeric_budget_contract == PASS
executable_validation == PASS
all_151_media_preloaded == false
public_safe_build_requires_pokemon_media == false
p6_complete == false
p7_may_begin == false
```

**P6 Batch 02: PASS.**

P6 remains active until the production import coverage and final phase exit audit run.

## Exact next work — P6 Batch 03

1. execute compact-source import validation for all `001..151` mappings;
2. execute selected Gen-I animated PNG+JSON pair/frame-bound validation;
3. materialize SHA-256 for every actually fetched artifact in the produced import manifest;
4. prove no public distributable artifact contains `not_cleared` Pokémon media;
5. run budget/duplicate/cache/fallback validation on produced artifacts;
6. reconcile historical unresolved-gate wording in `docs/RESOURCE_STRATEGY.md`;
7. produce `docs/P6_EXIT_AUDIT.md`;
8. close #12 and unblock P7 only if the full exit audit passes.

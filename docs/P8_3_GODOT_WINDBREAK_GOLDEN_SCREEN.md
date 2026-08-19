# P8.3 Godot windbreak golden screen

Status: **OWNER VISUAL REVIEW REQUIRED**
Scope: one 390×844 windbreak screen only; no Slice B/C/D, P9, gameplay/domain/save/narrative-authority change, generated Pokemon art or committed P6 binary.

## Rendered evidence

- rejected retained baseline: `docs/evidence/p8-3-godot-windbreak-golden/rejected-svg-preview.png`
- current Godot-rendered golden candidate: `docs/evidence/p8-3-godot-windbreak-golden/windbreak-golden.png`

The candidate is rendered by Godot from retained layers. It is not a generated full-screen mockup or a flattened production background.

## Layer inventory

Runtime order remains:

```text
EnvironmentBackground
  -> EnvironmentMidground
  -> HumanLayer
  -> PokemonLayer
  -> ForegroundLayer
  -> HUD / narrative-event surface / choices
  -> TransitionOverlay
```

| Layer | Asset | Size / alpha | Runtime placement |
|---|---|---|---|
| FAR | `godot/assets/golden_screen/runtime/windbreak_far.png` | 390×844 opaque | full viewport, z=0 |
| MID | `godot/assets/golden_screen/runtime/windbreak_mid.png` | 390×844 alpha | full viewport, z=10 |
| keeper | `godot/assets/golden_screen/runtime/keeper.png` | 96×170 alpha | x=68, y=342, z=20 |
| reserved P6 Pokemon | no binary in this gate | runtime-only | `Rect2(214, 138, 148, 172)`, z=30 |
| foreground | `godot/assets/golden_screen/runtime/windbreak_foreground.png` | 390×844 alpha | full viewport, z=40 |
| HUD | `hud_frame.png` + three 26×26 icon textures | alpha | x=7, y=7, 376×76, z=60 |
| event prose | `event_frame.png` nine-patch | alpha | x=6, y=516, 378×328, z=70 |
| choices | `choice_normal.png`, `choice_focused.png`, `choice_pressed.png` | 354×48 alpha | real Godot Buttons, x=18 |
| transition | existing Godot `TransitionOverlay` | runtime | z=100 |

Generated-asset prompts, source hashes, normalization and final hashes are recorded in `godot/assets/golden_screen/provenance.json`.

The 13 runtime PNGs total **1,811,597 source bytes (1.728 MiB)**. Their conservative all-resident RGBA8 estimate is **4,788,880 bytes (4.567 MiB)** for this single-screen spike; no Pokemon media is included in either value.

## Reserved Pokemon plane

- intended center / anchor: **(288, 224), center anchor**
- approximate presentation box: **x=214..362, y=138..310**
- intended foreground occlusion zone: the right-edge branch and leaf clusters cross roughly **x=272..390, y=70..310**
- missing-P6 golden mode: amber corner brackets and center tick only; no substitute creature or silhouette
- final #015 materialization, animation-scale tuning and final occlusion review are deliberately deferred until this golden screen receives owner visual approval

## Baseline difference

The rejected preview used flat block/SVG trees, sparse material detail, a generic rectangular missing-resource card, a block human and plain CSS-like panels. The candidate replaces that player-facing windbreak composition with independently generated and normalized pixel raster layers: atmospheric FAR depth, a material-rich orchard MID layer, a readable keeper sprite, a branch/leaf foreground that crosses the Pokemon plane, and a cohesive wood/iron/leather UI kit. The old SVG assets remain retained negative evidence and were not polished into the candidate.

## 390×844 readability / safe-area review

- no horizontal overflow; all player text stays inside x=18..372
- top HUD uses 7px outer margins and 76px height; it does not cover the scene center
- event surface begins at y=516 and ends at 844; the branch-shaped frame edge connects it to the world layer
- Korean body is 13px with controlled two-line measure; choice labels are 13px on 46px touch targets
- result copy ends at y=832, leaving 12px bottom inset
- first choice receives real Godot focus and uses the generated focused state; normal and pressed textures remain separate
- temporary desktop Korean `SystemFont` fallback remains an architecture-spike limitation, not final Android/font acceptance

## Visual review performed

The first generated-layer Godot render was opened at original resolution. It showed a good scene/UI hierarchy but the Pokemon guide was too weak and HUD/body copy was undersized. A second pass added foreground-occluded corner brackets and raised HUD/body sizes, then a new Godot screenshot was rendered and opened again.

Second-pass review:

- reads as a mobile game screen rather than a web page/card dashboard: PASS
- orchard/windbreak location is legible from art: PASS
- FAR/MID/foreground depth is distinct: PASS
- keeper reads as a game character, not a block placeholder: PASS
- reserved Pokemon pocket is natural and measurable: PASS
- foreground branch visibly crosses the reserved Pokemon plane: PASS
- HUD remains compact: PASS
- event prose and choices are integrated into the world composition: PASS
- choice states do not read as generic web buttons: PASS
- palette, pixel density and silhouette language are coherent: PASS
- materially stronger than retained rejected preview: PASS

These are implementation-side visual checks, not owner approval.

## Validation executed

- official Godot `4.6.3-stable` Windows archive SHA-256 verified as `e39986a178d585ce7ac198fb8de6ea436366dc0cc00e594810c2e3e104c04b90`
- clean Godot resource import: PASS
- layered visual-contract smoke: PASS
- real non-headless Godot 390×844 capture, `--allow-missing-p6`: PASS
- deterministic parity + SaveEnvelope round-trip smoke: PASS
- P6 local materializer no-network self-test: PASS (no P6 binary materialized)
- retained/fresh golden screenshot SHA-256 equality: PASS (`0e5cc112b93a14cc...e45ca93a`)
- image opened and reviewed at original 390×844: PASS, twice

## Changed files

- status/contracts: `PROJECT_STATUS.md`, `docs/P8_3_GODOT_ARCHITECTURE_SPIKE.md`, this evidence document
- retained evidence: `docs/evidence/p8-3-godot-windbreak-golden/rejected-svg-preview.png`, `windbreak-golden.png`
- asset boundary/provenance: `godot/assets/README.md`, `godot/assets/golden_screen/provenance.json`
- runtime raster kit: all PNGs under `godot/assets/golden_screen/runtime/`
- Godot composition: `godot/scripts/layer_canvas.gd`, `godot/scripts/main.gd`, `godot/scripts/pixel_skin.gd`
- validation: `godot/tests/visual_contract_smoke.gd`

Generated full-size/chroma intermediates were removed after normalization; they are not runtime resources or repository payload. Their prompt summaries and SHA-256 values remain in the provenance record.

## Owner review still required

Approve or reject this one windbreak golden screen as the visual-language prerequisite. Do not infer approval from the checks above. After approval only: materialize real P6 #015 locally, tune/verify its animation and final branch occlusion, review input/transition feel, and make the Godot Adopt / Reject / Hybrid decision.

# P8.3 Godot spike asset boundary

This directory contains only project-owned spike resources and documentation. The public repository must not absorb rights-bound Pokemon media merely to make the prototype self-contained.

## Runtime layer ownership

The owner-review scene is composed in this order:

1. `EnvironmentBackground` — project-owned/generated Pokemon-free far environment.
2. `EnvironmentMidground` — windbreak, stone wall, warning stakes, crates, route geometry.
3. `HumanLayer` — independent transparent adventurer/keeper sprite.
4. `PokemonLayer` — P6/D-036 resource materialized locally; never generated into the environment.
5. `ForegroundLayer` — foliage/occlusion/weather capable of covering world sprites.
6. Godot Control UI — HUD, prose, choice buttons, details entry.
7. `TransitionOverlay` — fade/input ownership during surface changes.

The former code-drawn rectangle scaffold has been replaced by retained project-owned SVG resources. They intentionally use crisp, grid-aligned vector primitives so Godot can import them deterministically while the spike is still remote-reviewable. They are separate resources, not a flattened screenshot.

Current retained layer set:

```text
environment/opening_reedbank.svg
human/opening_traveler.svg
foreground/opening_brush.svg

environment/orchard_far.svg
environment/orchard_mid.svg
human/orchard_keeper.svg
foreground/orchard_foliage.svg

ui/icon_vitality.svg
ui/icon_fatigue.svg
ui/icon_provisions.svg
ui/runtime_korean_font.tres
```

`godot/scripts/pixel_skin.gd` is the shared project-owned Control skin for square pixel borders, button focus/press states, panel palette and typography colors. Localized text remains runtime `Label`/`Button` content.

### Korean review-font boundary

`ui/runtime_korean_font.tres` is a **temporary architecture-spike readability fallback**, not the final P8.3 typography asset. It uses Godot `SystemFont` with Korean-capable desktop families (`Noto Sans CJK KR`, `Noto Sans KR`, `Malgun Gothic`, `Apple SD Gothic Neo`) and system fallback enabled so the two owner-review surfaces cannot silently render Korean as missing-glyph boxes.

The GitHub validation runner explicitly provisions `fonts-noto-cjk` and `visual_contract_smoke.gd` requires representative Hangul glyph coverage before a preview can pass. Desktop owner review may use an installed matching system family. This does not replace the existing P6 provenance/licensing requirement for the final bundled pixel/long-form Korean font, and it must not be treated as Android/release typography acceptance.

`godot/tests/visual_contract_smoke.gd` rejects missing/unloadable retained resources, missing representative Korean glyphs, `<text>` or embedded `<image>` elements in world/human layers, known Pokemon species tokens baked into those layers, removal of the separate P6 Pokemon slot, and the old developer spike label leaking into the player-facing opening.

## Local Pokemon media slot

For the Beedrill spike, materialize the approved P6 encounter sprite locally at:

```text
godot/local_assets/pokemon/beedrill.png
```

`godot/local_assets/` is ignored by Git. Source acquisition must continue to use the repository's pinned P6/D-036 provenance/resource workflow. Do not generate a replacement Pokemon image and do not commit the fetched source binary unless a later rights decision explicitly changes the public-media policy.

At runtime the scene checks `ResourceLoader.exists()` for this slot. If it is absent, the Pokemon layer displays a neutral materialization notice instead of fabricating a Pokemon silhouette.

## Owner screenshot boundary

The committed SVG layers are now recomposable acceptance candidates, but the windbreak owner screenshot is **not complete** until Godot renders the scene with the real locally materialized P6 Beedrill resource. CI may validate clean-checkout import/boot and layer separation; it must not invent or commit a replacement Pokemon merely to make a screenshot self-contained.

Final owner evidence remains two 390×844 Godot renders:

- opening/title from retained opening environment + traveler + foreground + Control UI;
- windbreak event from retained orchard far/mid + keeper + real P6 Beedrill + foreground + Control HUD/event/choices.

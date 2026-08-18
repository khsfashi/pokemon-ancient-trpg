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

The current code-drawn environment/human shapes are **layout scaffolding only**. They exist to prove scene ownership, occlusion and hierarchy; they are not owner-acceptance art.

## Local Pokemon media slot

For the Beedrill spike, materialize the approved P6 encounter sprite locally at:

```text
godot/local_assets/pokemon/beedrill.png
```

`godot/local_assets/` is ignored by Git. Source acquisition must continue to use the repository's pinned P6/D-036 provenance/resource workflow. Do not generate a replacement Pokemon image and do not commit the fetched source binary unless a later rights decision explicitly changes the public-media policy.

At runtime the scene checks `ResourceLoader.exists()` for this slot. If it is absent, the Pokemon layer displays a neutral materialization notice instead of fabricating a Pokemon silhouette.

## Acceptance-art handoff

When replacing the layout scaffold, create/export **separate** files rather than one flattened screenshot. Minimum useful set for the orchard scene:

```text
environment/orchard_far.png
environment/orchard_mid.png
human/orchard_keeper.png
ui/frame_event.png
ui/button_choice.png
ui/hud_plate.png
foreground/orchard_foliage.png
```

Keep localized text, choice labels, stats and Pokemon sprites out of those rasters. Pixel UI pieces should share one pixel scale, border weight and palette instead of mixing unrelated free packs.

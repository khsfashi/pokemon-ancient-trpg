# P8.3 Godot architecture spike

Issue: #139  
Decision gate: owner review before Slice B/C/D propagation or P9.

## Purpose

This is a bounded comparison prototype, not a production rewrite. The existing TypeScript runtime remains the migration oracle. The Godot path exists to answer two questions with retained evidence:

1. Does a game-native scene/Control hierarchy materially improve the intended mobile RPG product feel over the rejected DOM/PWA presentation?
2. Can the existing deterministic content/save authority be ported without inventing a second gameplay model?

## Scope frozen for this spike

Exactly two player-facing surfaces:

1. opening/title;
2. `slice.mixed.orchard_boundary` windbreak/Beedrill event.

Do not port the full campaign, inventory, progression or P5-P8 runtime until the owner chooses the Godot direction.

## Project layout

```text
godot/
  project.godot
  scenes/main.tscn
  scripts/main.gd
  scripts/layer_canvas.gd
  scripts/pixel_skin.gd
  scripts/spike_runtime.gd
  fixtures/orchard_boundary_fixture.json
  tests/parity_smoke.gd
  tests/visual_contract_smoke.gd
  assets/
    environment/
    human/
    foreground/
    ui/
    README.md
  local_assets/                  # ignored; rights-bound P6 media only
```

The logical viewport is 390×844. Stretch mode is `viewport` with integer scaling so the pixel-art reference render is composed at the fixed logical resolution before display scaling.

## Visual composition contract

The scene owns independent layers rather than a flattened finished screenshot:

```text
EnvironmentBackground
  -> EnvironmentMidground
  -> HumanLayer
  -> PokemonLayer
  -> ForegroundLayer
  -> HUD / event prose / choices
  -> TransitionOverlay
```

The original code-drawn rectangle scaffold has now been removed from the player-facing path. `layer_canvas.gd` imports retained project-owned SVG resources instead:

```text
opening:
  environment/opening_reedbank.svg
  human/opening_traveler.svg
  foreground/opening_brush.svg

windbreak:
  environment/orchard_far.svg
  environment/orchard_mid.svg
  human/orchard_keeper.svg
  foreground/orchard_foliage.svg
```

These files deliberately contain no runtime labels and no Pokemon species art. They use grid-aligned/crisp primitives as a deterministic project-owned acceptance candidate while preserving layer separation and recomposability.

The Godot Control layer now also uses a shared `pixel_skin.gd` for panel/button/focus treatment plus small retained HUD icons. Development-only labels and result IDs are no longer shown to the player; parity details are emitted to logs/tests instead.

The Pokemon layer never draws or generates a substitute creature. It loads the locally materialized P6/D-036 Beedrill sprite only when this path exists:

```text
res://local_assets/pokemon/beedrill.png
```

The public repository continues to keep that media boundary metadata-only.

## Authority parity proof

`godot/fixtures/orchard_boundary_fixture.json` is a migration fixture copied from the current generated P8 slice pack. It pins:

- event ID `slice.mixed.orchard_boundary`;
- choice IDs `protect_windbreak` / `take_shortcut`;
- direct resolution kind;
- zero RNG draws for this event;
- outcomes `windbreak_protected` / `shortcut_taken`;
- locality transition to `windbreak-orchard`;
- keeper relationship state;
- Beedrill/Rattata encounter recording commands;
- P5 narrative effects;
- active content-pack ID/version/digest;
- current SaveEnvelope/P5 contract versions.

The event is intentionally **not** converted to a roll/check in Godot. Its current TypeScript authority is direct resolution.

The spike save adapter writes the same outer SaveEnvelope V1 field contract to local JSON. Its `authoritative_state` currently contains only the bounded Godot spike projection; this is enough for a round-trip contract proof but is not presented as a full P7/P8 state port.

## Automated validation

The PR workflow uses the pinned official Godot `4.6.3-stable` Linux build and runs three independent checks:

```bash
godot --headless --path godot --quit-after 2
godot --headless --path godot --script res://tests/parity_smoke.gd
godot --headless --path godot --script res://tests/visual_contract_smoke.gd
```

`visual_contract_smoke.gd` additionally requires that:

- every retained layer/UI resource exists and imports as a Godot `Texture2D`;
- world/human layers do not contain SVG `<text>` or embedded `<image>` data;
- known Pokemon species names are not baked into project-owned environment/human/foreground art;
- `PokemonLayer` and the local P6 Beedrill slot remain explicit;
- the old developer-only `P8.3 GODOT ARCHITECTURE SPIKE` opening label cannot leak back into player-facing UI.

Automated import/boot success is necessary but **not** visual approval.

## Local validation / owner capture

Godot 4.x must be installed locally.

Run:

```bash
godot --headless --path godot --script res://tests/parity_smoke.gd
godot --headless --path godot --script res://tests/visual_contract_smoke.gd
godot --editor --path godot
```

Run the main scene at 390×844. The opening button must fade into the windbreak event. Both choice buttons must resolve to the pinned authoritative outcomes and disable after selection. The player-facing result copy must remain fiction-facing while the exact IDs remain available in parity logs.

## Required owner evidence before decision

- [ ] 390×844 opening screenshot rendered by Godot from the retained opening layers.
- [ ] 390×844 windbreak/Beedrill screenshot rendered by Godot with the real locally materialized P6 sprite.
- [x] code-drawn environment/human scaffold removed from the player-facing path.
- [x] retained project-owned opening/orchard/human/foreground layer files committed separately.
- [x] reusable Godot pixel Control skin and compact HUD icon resources retained.
- [x] deterministic parity/save smoke exists and is CI-gated.
- [x] visual layer-separation/import smoke exists and is CI-gated.
- [ ] Visual confirmation from the final P6 screenshot that foreground foliage occludes the independently composed Pokemon layer as intended.
- [ ] Transition/input feedback owner review.
- [ ] Android debug export/build proof if the local Godot Android toolchain is already available; do not weaken CI or add broad tooling merely to satisfy this optional spike evidence.
- [ ] Reuse/port cost inventory completed in the PR after the visual decision evidence is captured.

## Exact local Codex handoff

Use this after pulling the spike branch. The remote branch already contains retained project-owned opening/orchard/human/foreground layers and a reusable UI skin, so local work should focus on real P6 composition and owner evidence rather than redesigning the architecture again.

```text
Repository: khsfashi/pokemon-ancient-trpg
Branch: agent/p8-3-godot-spike-foundation
Issue: #139

Continue only the bounded P8.3 Godot architecture spike. Do not port the rest of the campaign and do not modify authoritative TypeScript rules.

1. Use Godot 4.x and run:
   godot --headless --path godot --script res://tests/parity_smoke.gd
   godot --headless --path godot --script res://tests/visual_contract_smoke.gd
   Fix only real GDScript/project errors; do not weaken assertions or change fixture IDs/outcomes.
2. Materialize the approved P6/D-036 Beedrill encounter sprite through the repository's existing pinned provenance/resource workflow into:
   godot/local_assets/pokemon/beedrill.png
   Keep the binary untracked. Do not generate a Pokemon replacement.
3. Open/run the existing retained layered Godot scene. Do not replace it with a flattened generated screenshot. Only make bounded composition tweaks required for the two owner-review surfaces.
4. Keep runtime order:
   environment -> human -> P6 Pokemon -> foreground/weather -> Control UI -> transition overlay.
5. Capture 390x844 opening and Beedrill screens rendered by Godot. Verify no web/article/card composition remains, both choices are readable, and the foreground layer visibly participates in depth/occlusion.
6. Exercise both authoritative choices and retain parity smoke output. If Android export tooling is already configured, produce a debug build proof; otherwise record the missing local prerequisite without installing broad unrelated infrastructure.
7. Commit only project-owned source layers, Godot scene/script changes and textual evidence. Do not commit godot/local_assets, editor cache, generated Pokemon media or secrets.

Stop after the two-screen evidence is ready for owner review. Do not propagate to Slice B/C/D or start P9.
```

## Decision interpretation

A technically running scene is not a PASS. The spike is successful only if the owner can compare the Godot result against the rejected web product and judge that it materially approaches the intended game-screen hierarchy **while** the parity proof shows no second gameplay authority was invented.

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
  scripts/spike_runtime.gd
  fixtures/orchard_boundary_fixture.json
  tests/parity_smoke.gd
  assets/README.md
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

`layer_canvas.gd` currently draws simple project-owned placeholder shapes only to prove z-order, occlusion and full-screen composition. They are **not owner-acceptance art**.

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

## Local validation

Godot 4.x must be installed locally.

Run the deterministic parity/save smoke:

```bash
godot --headless --path godot --script res://tests/parity_smoke.gd
```

Expected terminal tail:

```text
P8.3 Godot parity smoke: PASS
```

Open the owner-review shell:

```bash
godot --editor --path godot
```

Run the main scene at 390×844. The opening button must fade into the windbreak event. Both choice buttons must resolve to the pinned authoritative outcomes and disable after selection.

## Required owner evidence before decision

- [ ] 390×844 opening screenshot rendered by Godot.
- [ ] 390×844 windbreak/Beedrill screenshot rendered by Godot with the real locally materialized P6 sprite.
- [ ] `parity_smoke.gd` PASS output.
- [ ] One save-envelope local JSON round-trip proof.
- [ ] Visual confirmation that foreground foliage can occlude the independently composed Pokemon layer.
- [ ] Transition/input feedback review.
- [ ] Android debug export/build proof if the local Godot Android toolchain is already available; do not weaken CI or add broad tooling merely to satisfy this optional spike evidence.
- [ ] Reuse/port cost inventory completed in the PR.

## Exact local Codex handoff

Use this after pulling the spike branch. It deliberately asks for evidence/art replacement, not new architecture.

```text
Repository: khsfashi/pokemon-ancient-trpg
Branch: agent/p8-3-godot-spike-foundation
Issue: #139

Continue only the bounded P8.3 Godot architecture spike. Do not port the rest of the campaign and do not modify authoritative TypeScript rules.

1. Install/use an existing Godot 4.x editor/runtime if available; do not add C#, GDExtension or a JS bridge.
2. Run:
   godot --headless --path godot --script res://tests/parity_smoke.gd
   Fix only real GDScript/project errors; do not weaken assertions or change fixture IDs/outcomes.
3. Materialize the approved P6/D-036 Beedrill encounter sprite through the repository's existing pinned provenance/resource workflow into:
   godot/local_assets/pokemon/beedrill.png
   Keep the binary untracked. Do not generate a Pokemon replacement.
4. Replace the current code-drawn environment/human/UI layout scaffold with coherent project-owned/generated pixel-art layers only where needed for the two owner-review surfaces. Generate/export separate Pokemon-free environment far/mid/foreground layers, transparent human art and reusable UI pieces. Never generate a flattened finished screen and never bake Korean labels into raster UI.
5. Keep runtime order:
   environment -> human -> P6 Pokemon -> foreground/weather -> Control UI -> transition overlay.
6. Capture 390x844 opening and Beedrill screens rendered by Godot. Verify no web/article/card composition remains and that both choices are readable without scrolling the whole page.
7. Exercise both authoritative choices and retain the parity smoke output. If Android export tooling is already configured, produce a debug build proof; otherwise record the missing local prerequisite without installing broad unrelated infrastructure.
8. Commit only project-owned source layers, Godot scene/script changes and textual evidence. Do not commit godot/local_assets, editor cache, generated Pokemon media or secrets.

Stop after the two-screen evidence is ready for owner review. Do not propagate to Slice B/C/D or start P9.
```

## Decision interpretation

A technically running scene is not a PASS. The spike is successful only if the owner can compare the Godot result against the rejected web product and judge that it materially approaches the intended game-screen hierarchy **while** the parity proof shows no second gameplay authority was invented.

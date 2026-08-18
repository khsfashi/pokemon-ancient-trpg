# P8.3 High-Resolution Pixel Art + Typography Direction

Status: **OWNER-APPROVED / binding for P8.3 remediation**

## 1. Reference interpretation

The `모험가 이야기` reference must not be reduced to “uses pixels”. The relevant quality is that its presentation uses **high-quality pixel/dot graphics across characters, monsters, equipment and illustrations while still making the medieval-fantasy setting immediately legible**.

Pokémon Ancient TRPG should pursue the same principle without copying proprietary artwork, exact layouts, icons, frames, text, music or brand identity.

Our target is:

> **one coherent high-resolution pixel-art language in which the period atmosphere is carried by palette, lighting, material, silhouette, clothing, tools, architecture, vegetation, weather, framing and animation — not by smooth modern UI laid behind isolated Pokémon sprites.**

## 2. Global consistency rule

The following should share one pixel rendering language:

- opening/key art;
- locality and travel scenes;
- encounter illustrations;
- Pokémon presentation;
- human portraits;
- equipment/items/resources;
- HUD icons;
- borders, dividers and ornamental UI;
- status/danger effects where illustrated.

Existing Pokémon pixel resources should appear native to the scene rather than pasted over painterly, vector or photographic backgrounds.

Avoid mixed rendering stacks such as:

- pixel Pokémon + smooth AI-painted background;
- pixel icons + glossy vector cards;
- low-resolution sprite + high-resolution painterly portrait;
- modern glassmorphism/material-design surfaces around medieval content;
- arbitrary pixelation filters applied after the fact without a controlled pixel grid/palette/detail contract.

## 3. “High-resolution pixel” meaning

The target is not necessarily tiny 8-bit sprites or intentionally crude low-detail art.

High-resolution pixel art may use:

- larger canvas sizes and richer scene composition;
- detailed cloth, leather, wood, iron, foliage and weather;
- nuanced palette ramps and lighting;
- readable facial/body silhouettes;
- dense environmental storytelling;
- controlled dithering/texture;
- selective animation layers.

Pixel boundaries must remain intentional and visually coherent. Scaling should preserve crisp edges; avoid browser interpolation that blurs nearest-neighbor assets.

## 4. Medieval/pre-modern proto-Kanto mood

Even with high visual fidelity, scenes must not become clean contemporary fantasy concept art.

Use visual evidence of the setting:

- worn timber, rope, hide, wicker, fired clay, rough iron and repaired cloth;
- small settlement scale rather than modern city organization;
- improvised route markers, shrines, fences and survival infrastructure;
- muddy paths, windbreak forests, reedbanks, orchards and Pokémon-shaped ecological damage;
- practical layered clothing and field equipment;
- locally specific craft rather than generic MMO armor sets;
- light sources appropriate to the scene and established technology contract;
- Pokémon influence visible in how humans build, travel, store food, defend routes and choose materials.

## 5. Illustration composition

Illustrations are not decorative slide headers. They should stage gameplay information.

A scene image should preferentially communicate some combination of:

- where the player is;
- what changed since the last beat;
- where the threat/opportunity is;
- distance and approach direction;
- terrain relevant to a choice;
- Pokémon posture/behavior;
- usable cover/route/exit;
- weather/light/time;
- equipment or resource relevance.

The text panel must be visually separated from illustration shadows/overlays. Illustration effects must never darken narrative text accidentally.

## 6. Motion and transition

Transitions should feel like moving between illustrated game scenes rather than switching presentation slides.

Preferred ingredients, used sparingly:

- slower travel fade than ordinary beat change;
- palette-darkening or textured fade layers;
- pixel/noise/dither masks where performant;
- subtle parallax or layer drift only when it adds geography;
- short hold that lets a new scene register before text races ahead.

Gameplay state remains authoritative before/independent of presentation completion. `prefers-reduced-motion` remains supported.

## 7. Generated-image pipeline

Generated imagery is permitted as a production aid, but “AI-generated” is not an art direction.

Any generated scene must be normalized into the project pixel-art contract before acceptance. The resource pipeline should record prompt/tool/provenance metadata where appropriate and validate:

- pixel-style consistency;
- canvas/aspect requirements;
- nearest-neighbor scaling behavior;
- palette/readability;
- absence of obvious smooth painterly regions;
- compatibility with Pokémon pixel assets;
- mobile decode/payload budget;
- no gameplay dependence on optional media.

## 8. Typography direction

Typography must belong to the pixel-game presentation while preserving long-form Korean readability.

### Initial public/free candidates

**NeoDunggeunmo / Neo둥근모**
- official project distributes the font under SIL Open Font License 1.1;
- strong bitmap/pixel identity;
- candidate for HUD labels, buttons, short choices, chapter/location headings and numeric status.

**NeoDunggeunmo Pro / Neo둥근모 Pro**
- proportional variant, also under SIL Open Font License 1.1;
- candidate for longer Korean narrative text where proportional spacing materially improves reading rhythm.

The project must pin/version the chosen webfont resource and preserve license/provenance notices under the existing P6 resource rules. Do not hotlink an unpinned `latest` asset in production.

### Typography hierarchy

Recommended starting experiment:

- HUD / button / compact label: NeoDunggeunmo;
- location/title/emphasis: NeoDunggeunmo or a compatible pixel display treatment;
- long narrative: NeoDunggeunmo Pro if phone testing passes, otherwise a highly readable Korean body fallback while keeping pixel framing around the text;
- numbers/icons: align to the HUD pixel grid and tabular behavior where useful.

### Readability gate

A pixel font is rejected for body copy if it creates excessive fatigue at the accepted phone viewport.

Validate:

- Korean glyph legibility;
- line-height and paragraph rhythm;
- punctuation clarity;
- no tiny bitmap rendering on high-density screens;
- stable line breaks at 390px target viewport;
- adequate contrast;
- no faux bold/blurred transforms;
- readable body during several minutes of continuous play.

Pixel identity is important; readable prose is more important.

## 9. Non-goals

- do not copy `모험가 이야기` assets or exact UI arrangement;
- do not recreate official Pokémon sprite sheets beyond permitted/project-approved resource handling;
- do not add a generic CRT/scanline filter over everything and call it pixel art;
- do not use every surface as parchment merely to signal “medieval”;
- do not sacrifice mobile readability for nostalgia.

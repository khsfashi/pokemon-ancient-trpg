# P8.3 Pixel Font Provenance

Status: **P8.3 evaluation / build-time pinned and offline-packaged**

## NeoDunggeunmo / Neo둥근모

- Upstream: `neodgm/neodgm-webfont`
- Pinned upstream commit: `e0a715695c457d3f8ccd071f88cd71b376a5a23e`
- Upstream commit corresponds to the NeoDGM v1.601 web-font kit.
- Source font: `neodgm/neodgm.woff2`
- Upstream file size: 44,352 bytes
- Upstream blob SHA: `55ba08509f15024d355b49bd38c2e67987c4728e`
- Expected SHA-256: `0c0ca9cd73f692a5da5d7fb39737902aa9ea312537237779972a9d81ef0a33bf`
- License: SIL Open Font License 1.1
- Reserved Font Name: NeoDunggeunmo

P8.3 role under evaluation: HUD labels, buttons, short choices, location/chapter headings and compact numeric state.

## NeoDunggeunmo Pro / Neo둥근모 Pro

- Upstream: `neodgm/neodgm-pro-webfont`
- Pinned upstream commit: `1751c2981808869750c7df391c1d2b486e978f12`
- Upstream commit corresponds to the NeoDGM Pro v1.020 web-font kit.
- Source font: `neodgm_pro/neodgm_pro.woff2`
- Upstream file size: 38,144 bytes
- Upstream blob SHA: `125975d2ab6e55521e4f0ad54eafbfd7c14eeb7a`
- Expected SHA-256: `b6b28ef07a91a889587b3f2485ad77d3cd116456f8bfbc50a271cbe90b39535d`
- License: SIL Open Font License 1.1
- Reserved Font Name: NeoDunggeunmo Pro

P8.3 role under evaluation: longer Korean narrative/body text where proportional spacing gives better reading rhythm while retaining pixel-game identity.

## Batch 03 delivery contract

The browser no longer depends on a runtime font CDN.

`tools/prepare-p8-3-fonts.mjs` runs before local development and production build. It:

1. fetches only the two exact commit-pinned WOFF2 source files;
2. verifies the expected SHA-256 before accepting either file;
3. writes them under `src/generated/fonts/`;
4. lets Vite ingest/hash the local files through `src/app/p8_3_polish.css`;
5. lets the existing Workbox build precache the emitted WOFF2 assets for offline PWA use.

The generated font binaries are intentionally not hand-maintained source files. Their immutable source URL, expected digest and license provenance are repository-owned and reproducible.

## Remaining acceptance gate

Packaging is now deterministic, but visual adoption is still subject to owner/readability review:

1. confirm multi-minute Korean readability at the accepted 390px phone viewport;
2. preserve the upstream OFL notices/provenance as P6 resource records evolve;
3. reject NeoDunggeunmo Pro for body copy if it is materially more tiring than a conventional Korean body fallback;
4. keep font media presentation-only: a font failure must never affect event selection, authoritative state, save identity or gameplay results.

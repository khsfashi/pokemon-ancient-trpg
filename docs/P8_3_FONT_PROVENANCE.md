# P8.3 Pixel Font Provenance

Status: **P8.3 evaluation / not yet final offline packaging**

## NeoDunggeunmo / Neo둥근모

- Upstream: `neodgm/neodgm-webfont`
- Evaluated upstream commit: `e0a715695c457d3f8ccd071f88cd71b376a5a23e`
- Upstream commit description identifies the NeoDGM v1.601 web-font kit.
- Evaluated web font: `neodgm/neodgm.woff2`
- Upstream file size: 44,352 bytes
- Upstream blob SHA: `55ba08509f15024d355b49bd38c2e67987c4728e`
- License: SIL Open Font License 1.1
- Reserved Font Name: NeoDunggeunmo

P8.3 role under evaluation: HUD labels, buttons, short choices, location/chapter headings and compact numeric state.

## NeoDunggeunmo Pro / Neo둥근모 Pro

- Upstream: `neodgm/neodgm-pro-webfont`
- Evaluated upstream commit: `1751c2981808869750c7df391c1d2b486e978f12`
- Upstream commit description identifies the NeoDGM Pro v1.020 web-font kit.
- Evaluated web font: `neodgm_pro/neodgm_pro.woff2`
- Upstream file size: 38,144 bytes
- Upstream blob SHA: `125975d2ab6e55521e4f0ad54eafbfd7c14eeb7a`
- License: SIL Open Font License 1.1
- Reserved Font Name: NeoDunggeunmo Pro

P8.3 role under evaluation: longer Korean narrative/body text where proportional spacing gives better reading rhythm while retaining pixel-game identity.

## Current Batch 03 delivery boundary

`src/app/p8_3_theme.css` uses exact upstream-commit-pinned WOFF2 URLs with `font-display: swap`.

This deliberately avoids a blocking remote stylesheet import and provides immediate system-font fallback if the font request is unavailable. It is suitable for evaluating the phone presentation without making an external font request authoritative to gameplay.

However, **remote font loading is not the final P8.3 offline contract**. Before P8.3 owner acceptance:

1. confirm multi-minute Korean readability at the accepted 390px phone viewport;
2. route the accepted font binaries/notices through the existing P6 resource/provenance contract;
3. package/cache the accepted files so the installed/offline PWA retains the intended pixel typography;
4. preserve the upstream OFL notice and exact pinned provenance;
5. reject the body font if readability is materially worse than a conventional Korean body fallback.

The font files are presentation-only. Missing font media must never affect event selection, authoritative state, save identity or gameplay results.

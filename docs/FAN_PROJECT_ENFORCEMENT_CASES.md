# Pokémon Fan-Project Enforcement Case Studies

Verified: **2026-08-14**

This appendix supports `docs/SOURCE_REGISTRY.md` and the P1 fan-project/IP boundary lane. It records historical examples to improve project risk decisions. It is **not legal advice**, does not predict enforcement, and must not be interpreted as a recipe for avoiding enforcement.

## Core conclusion

The observed cases do **not** support either of these rules:

- `non-commercial = permitted`, or
- `monetized = automatically taken down`.

Unauthorized use of Pokémon/Nintendo IP is the underlying risk. Monetization, official asset reuse, visibility, distribution scale, online services and brand confusion may increase practical exposure, but the historical record does not provide a reliable safe threshold.

An active fan project is evidence only that it is currently active; it is **not** evidence that a rights holder has licensed or approved it.

---

## CASE-IP-001 — Pokémon Uranium

**Project type:** standalone RPG Maker XP Pokémon fangame  
**Original development:** JV + InvoluntaryTwitch, approximately 2007/2008–2016  
**Relevant period:** 2015–2016  
**Outcome:** original team ceased official distribution, then web services/updates/support; community successors later continued independently

### Funding / monetization evidence

The original project's official Tumblr announced a Patreon on **2015-05-12**. The post said monthly contributions would help with server costs and assets and offered dedicated supporters previews of exclusive new content, while stating that the game itself would remain free.

Primary source:

- https://pokemon-uranium.tumblr.com/post/118818927275/pokemon-uranium-is-now-on-patreon-if-you-enjoyed

This proves that Patreon support existed. It does **not** prove that Patreon itself caused later enforcement.

### Enforcement timeline

1. Pokémon Uranium 1.0 was released free on **2016-08-06**.
2. After the release went viral and exceeded 1.5 million downloads, external download hosts received takedown notices from lawyers representing Nintendo of America.
3. On **2016-08-13**, the Uranium team removed official download links. Their public statement explicitly said the developers had not personally been contacted at that point.
4. In creator InvoluntaryTwitch's later first-person account, the situation escalated on **2016-09-01**: a letter from the legal firm representing Nintendo of America arrived directly and required the web operation to stop, including servers, updates and ad revenue, under threat of copyright litigation.
5. The original team then shut down its site/forum/online services and later announced it would no longer provide downloads, updates, online services or support.
6. A separate fan community subsequently revived development/support independently. Current community activity is not evidence of Nintendo/The Pokémon Company permission.

Primary/creator sources:

- official 2016-08-13 statement: https://pokemon-uranium.tumblr.com/post/148889705925/many-of-you-have-questions-regarding-where-to
- creator retrospective: https://oripoke.wordpress.com/2016/10/20/the-explosion-and-fallout-of-pokemon-uranium/
- current community history: https://pokemonuranium.co/about.html

### What the case actually shows

- A free fan game can still receive enforcement.
- Patreon support and ad revenue existed, but the available primary evidence does not establish a simple `Patreon caused the takedown` chain.
- The project's enormous visibility and official Pokémon branding/assets coincided with enforcement, but historical coincidence should not be promoted to a legal threshold.
- Stopping only the installer distribution did not ultimately isolate the original team from later demands concerning servers, updates and monetized web operations.
- A community fork/successor surviving later does not retroactively authorize the original project.

### Project lesson

For `pokemon-ancient-trpg`, do not design an IP policy around staying small, staying free, avoiding Patreon, or relying on a disclaimer. Those may affect exposure but none establishes permission.

---

## CASE-IP-002 — Pokémon Prism

**Project type:** free Pokémon Gold ROM-hack patch  
**Development:** approximately eight years  
**Relevant date:** 2016-12-20/21  
**Outcome:** creator cancelled public release days before launch after a direct cease-and-desist request

### Evidence

Pokémon Prism was planned as a free patch and was scheduled for release only a few days later. Nintendo's Australian law firm sent the creator a direct notice requiring the project not be released and also addressing earlier related Pokémon ROM hacks.

Contemporary reporting reproducing/describing the notice:

- https://arstechnica.com/gaming/2016/12/nintendo-sends-cease-and-desist-notice-to-pokemon-rom-hacker/
- https://www.gameinformer.com/b/news/archive/2016/12/21/long-in-development-fan-creation-pok-233-mon-prism-cancelled-due-to-nintendo-intervention.aspx

### Project lesson

This is a strong counterexample to `no monetization = safe`. A free patch that required a Pokémon base ROM still received direct pre-release intervention.

---

## CASE-IP-003 — Pokémon Essentials

**Project type:** RPG Maker Pokémon fangame creation toolkit / project template  
**Relevant date:** 2018-08  
**Outcome:** wiki and downloads were removed following a Nintendo of America copyright claim

### Evidence

Pokémon Essentials combined original tooling/scripts with extracted/derived Pokémon game material such as sprites, music and tilesets. In 2018 its public downloads and wiki were removed after a Nintendo of America copyright claim.

Contemporary reporting:

- https://arstechnica.com/gaming/2018/08/nintendo-shuts-down-tool-used-to-build-pokemon-fan-games/

### Project lesson

A tool or development framework is not insulated merely because it is not itself a finished fangame. Bundling official game assets can create a materially different risk surface from distributing project-owned code alone.

This supports the repository rule that Pokémon-facing assets, project code and project-authored content remain technically separable.

---

## CASE-IP-004 — Pokémon games on Roblox

**Project type:** hosted online Pokémon games using the Roblox platform  
**Relevant dates:** 2018-04 through 2018-08  
**Outcome:** Pokémon Brick Bronze disappeared in April; by August a Pokémon fangame developer reported a broader copyright-holder takedown affecting Pokémon games on Roblox

### Evidence

A Roblox developer whose Pokémon game was removed in August 2018 stated publicly that Pokémon copyright holders had issued a broad takedown of Pokémon games on the platform and that developers had expected this after Pokémon Brick Bronze's earlier removal.

Developer statement hosted on Roblox's developer forum:

- https://devforum.roblox.com/t/the-end-of-roblox-pokemon/158872

### Project lesson

A third-party hosting platform can become the enforcement point. Building on Vercel, GitHub, an app store or another platform does not transfer IP responsibility to that platform and does not guarantee continued availability.

---

## CASE-IP-005 — PokéRogue as a current counterexample

**Project type:** current browser-based Pokémon fangame  
**Status at verification:** active in 2026  
**Funding evidence:** official PokéRogue wiki links a donation path to support Pagefault Games

Primary/current source:

- https://wiki.pokerogue.net/start
- project source/provenance details are separately tracked in `SRC-REF-001` of `docs/SOURCE_REGISTRY.md`

### Project lesson

PokéRogue demonstrates only that a large Pokémon fangame can presently remain online while also accepting donations. It does **not** establish permission, a safe-harbor policy, or evidence that similar projects will be treated the same way.

This is why the project must not reverse-engineer a supposed rights-holder tolerance formula from surviving fan projects.

---

## Risk interpretation for this repository

For this personal/non-commercial project, the practical engineering policy remains:

1. keep the project explicitly unofficial and non-affiliated,
2. do not claim that personal use, free distribution, low visibility or disclaimers create a license,
3. do not add Patreon/donations/ads or other project monetization as a presumed safe activity,
4. keep Pokémon/third-party assets separate from project-owned code/rules/text,
5. avoid vendoring large official-derived asset corpora merely because community projects host them,
6. preserve the ability to omit/replace externally sourced visual/audio resources,
7. treat public GitHub/PWA/APK/app-store hosting as distribution decisions that P10 must revisit against then-current policy and project contents,
8. re-check current rights-holder policy before any public release expansion.

## Causation caution

Historical enforcement is selective and incomplete. We can observe that particular projects were acted against and that some projects continue to operate. We cannot infer a reliable formula such as:

```text
small + free + disclaimer = safe
```

or:

```text
Patreon = automatic takedown
```

The repository should therefore optimize for **removability, provenance, separability and conservative distribution**, not for attempting to remain just below an imagined enforcement threshold.
# P2 First Region Contract

Status: **ACTIVE — P2 binding contract**  
Date: **2026-08-14**  
Decision: **P2-HDG-007 / D-022 / owner choice B, clarified**

## 1. Binding identity

The first playable land is a **proto-Kanto locality**: territory that the project understands will, in the distant future, become part of Kanto, while the people living in this era do **not** possess a mature `Kanto` regional identity.

`Kanto` is therefore a project/system-level geographic anchor, not assumed diegetic vocabulary for ordinary ancient inhabitants.

The game must not present project-authored settlements, institutions, routes, wars, myths, or local cultures as official canon history merely because the land is future Kanto.

## 2. What “not civilized yet” means

The owner's clarification is binding: this era is **pre-regional-civilization**, not a miniature version of modern Kanto and not a Hisui-like organized frontier society.

This does **not** mean humans are cultureless, unintelligent, or universally nomadic. D-012 and D-014 remain authoritative: local communities can have stable villages, clan traditions, agriculture, specialists, ironworking, inherited knowledge, ritual, trade, and narrow Pokémon-dependent technology islands.

What does not yet exist at baseline is regional-scale integration such as:

- a Kanto-wide state, kingdom, federation, or common government;
- large mature cities linked into one economic system;
- standardized regional law, currency, measurement, schooling, or bureaucracy;
- a comprehensive maintained road network;
- trainer institutions, Gyms, Pokémon Centers, survey corps, or analogous Pokémon-centric public infrastructure;
- widespread safe travel enforced by human authority;
- a shared regional Pokédex or standardized species knowledge system;
- routine information flow sufficient to homogenize local cultures;
- a general belief that the wilderness belongs to humans.

A sophisticated village can therefore exist while the wider land remains overwhelmingly wild and politically/culturally fragmented.

## 3. Human footprint

Human settlement should occupy **small islands of control** rather than continuous civilization.

Between settlements, wilderness is not empty map space waiting to be developed. It is territory shaped primarily by terrain, weather, Pokémon populations, migration, nesting, predation, supernatural hazards where species support them, and only intermittent human passage.

A route is usually a remembered survivable corridor rather than a permanently secured road. Losing a guide, bridge, seasonal crossing, warning marker, local truce, or ecological pattern can make a known route effectively disappear.

Human expansion should feel contingent. A village may be abandoned, relocated, isolated, or cut off because humans do not yet possess the regional capacity to dominate every local ecological crisis.

## 4. Relationship to future Kanto

Future Kanto is an **anchor, not a template**.

The project may use an official Kanto geographic, ecological, legendary, or species-related connection when current source evidence supports the connection and the canon-first derivation protocol is followed.

The project must not assume that modern features existed unchanged in the ancient era. In particular:

- modern city sites need not already be settlements;
- modern routes need not correspond to ancient paths;
- coastlines, forests, caves, wetlands, rivers, volcanic conditions, settlements, and habitat boundaries may differ where not source-constrained;
- modern political/cultural boundaries must not be projected backward automatically;
- a familiar landmark may be absent, unnamed, differently understood, inaccessible, or only loosely recognizable;
- ancient local names should be project-authored unless an official historical name is actually supported.

If a recognizable future-Kanto connection is used, content must distinguish official evidence from conservative inference and project-authored extrapolation under D-018.

## 5. First playable scope

The playable opening scope is intentionally **local**, not “all of ancient Kanto.”

The minimum production target is one primary settlement and the surrounding survival/ecology network needed to support a complete run, including a curated combination of:

- nearby resource grounds;
- dangerous wilderness;
- at least one meaningful travel corridor;
- one or more ecologically distinct encounter areas;
- optional satellite camp, neighboring settlement, shrine, ruin, craft site, crossing, or other local human node only when needed by the content contract;
- boundaries that make it clear the wider future-Kanto land exists beyond the first playable area.

Exact village names, map coordinates, encounter roster, route count, and local landmarks remain later authored content unless they become necessary for P8's vertical slice.

The first-scope contract must prove the world rules at high density rather than pretending to simulate an entire region.

## 6. Cultural fragmentation

Locality matters more than regional identity.

Different nearby settlements may disagree about:

- Pokémon names and classification;
- safe routes and warning signs;
- sacred/protected/hunted species;
- acceptable killing and resource use under D-021;
- marriage, kinship, burial, ritual, leadership, and hospitality customs;
- trade obligations and territorial claims;
- psychics/miracle-workers;
- technology-island knowledge;
- which stories about the wider land are true.

These differences should create event conditions, knowledge conflicts, reputation consequences, and replay value without requiring separate game systems for each culture.

## 7. Technology and civilization ceiling

D-014's iron-age material floor remains valid even though regional civilization is immature.

The intended contrast is:

> **local craft can be advanced; regional integration is primitive.**

A village may have an excellent smith, healer, irrigation tradition, preservation method, fortified storehouse, or Pokémon-derived craft while still lacking reliable contact with communities beyond its nearest routes.

Pokémon-dependent technology islands under D-017 must reinforce, not erase, fragmentation. An unusually capable locality should feel exceptional because knowledge, access, materials, and relationships do not diffuse safely or quickly.

## 8. P4 requirements

P4 species dossiers must be compatible with a future-Kanto anchor without treating modern Kanto ecology as timeless fact.

For each species where regional history matters, P4 should distinguish:

- official Kanto association/evidence;
- whether the evidence plausibly constrains this much earlier era;
- ancient local habitat as source-backed, inferred, project-authored, or unresolved;
- human familiarity by locality rather than assumed region-wide knowledge;
- migration/distribution uncertainty where appropriate;
- any future-Kanto connection used only as project framing rather than diegetic knowledge.

The complete #001-#151 scope does not mean all 151 occupy the first locality or even all appear through direct encounters there.

## 9. P5 requirements

P5 must support locality-sensitive content without requiring a continuously simulated open world.

Useful state includes:

- current locality/route/ecology tags;
- local knowledge and rumors;
- settlement reputation or relationships where material;
- route accessibility and temporary hazards;
- culturally different species treatment;
- discoveries that reveal the wider land gradually.

Travel should reinforce fragmentation: reaching another settlement can itself be a meaningful event chain rather than routine map traversal.

## 10. P7/P8 requirements

The runtime does not need a full-region open-world map for the first playable slice.

P7 should prefer stable location IDs, adjacency/route data, tags, and event-driven state transitions over per-frame world simulation.

P8 should prove:

- one coherent settlement-centered run;
- dangerous travel beyond its safety envelope;
- at least two meaningfully different ecological/local contexts;
- local knowledge affecting decisions;
- the sense that the wider future-Kanto land is mostly unknown and uncontrolled.

## 11. Forbidden shortcuts

Later work must not:

- call the society simply “ancient Kanto civilization” in a way that implies region-wide integration;
- recreate modern Kanto cities with medieval skins;
- import modern route numbering, Gym geography, Pokémon Center networks, or standardized trainer culture;
- make iron-age technology imply safe roads, strong centralized government, or routine long-distance commerce;
- assume modern Kanto habitat distribution is unchanged without evidence;
- use `future Kanto` as permission to invent pseudo-canon historical facts without evidence labels;
- fill the first playable area with all 151 species just to satisfy roster coverage.

## 12. Closure handoff

P2-HDG-007 is resolved by this contract.

The remaining P2 work should now focus on implementation-relevant world depth rather than another large regional identity choice:

1. freeze economy/exchange abstraction to the depth P3/P5 need;
2. freeze medicine/recovery world assumptions to the depth P3/P5 need;
3. assign exact psychic mechanics/ceiling to P3 unless a world-level contradiction is discovered;
4. run a P2 contradiction and exit audit before opening P3.

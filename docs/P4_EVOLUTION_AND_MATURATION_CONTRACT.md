# P4 Evolution and Maturation Contract

Status: **ACTIVE — binding P4 shared evolution rule**  
Date: **2026-08-15**  
Decision: **P4-HDG-002 / D-032 — evolution is a rare species transformation, distinct from ordinary growth**  
Tracks: **#5**

## 1. Owner intent

Pokémon **evolution is a miracle of the species**, not an ordinary reward for getting older, winning enough fights, or accumulating an invisible level.

The game must keep two different ideas separate:

- **growth / maturation / development** — the same individual becomes older, larger, more experienced, healthier, scarred, trained, dominant, or otherwise more developed while remaining the same species;
- **evolution** — the persistent individual crosses into another canonical species stage and its body/capabilities/logistics may change discontinuously.

The two may be related for a particular species, but they are never synonymous by default.

## 2. Ordinary growth stays inside the individual profile

Ordinary growth does not change `species_key`.

It may be represented through:

- age or maturity state;
- condition and health;
- learned behavior;
- explicit ordinary individual variation;
- rare exceptional-individual stat deltas where world history justifies them;
- knowledge, temperament, territorial experience, or local-lineage traits.

A very old, powerful or experienced unevolved Pokémon can therefore remain its current species. D-031 already permits an exceptional unevolved individual to exceed an ordinary evolved specimen in selected axes.

No hidden player-level matching or `fight enough -> automatically evolve` rule is introduced.

## 3. Evolution is a discontinuous species event

Evolution changes the persistent individual's canonical species stage.

When it occurs, P4/P5 must be able to change or re-evaluate at least:

- species baseline and six-axis profile;
- capability/hazard permissions;
- body size and travel/logistics;
- ordinary behavior tendencies;
- companionship burden and settlement reaction;
- bestiary/identification knowledge;
- resource, ecology and narrative relationships.

The individual's identity, remembered bond, injuries, history and relevant learned behavior do not disappear merely because its species stage changes.

Evolution is not a cosmetic stat upgrade and is not equivalent to replacing one inventory creature with another.

## 4. Difficulty and rarity are species-specific

There is no universal evolution meter or one global trigger shared by all Pokémon.

Each evolution family must classify its transition using source evidence and, where needed, bounded project interpretation. Valid treatment can include:

- biologically legible metamorphosis;
- difficult maturation threshold;
- environmental or location dependency;
- specific item/material interaction;
- relationship or emotional threshold where canon supports it;
- anomalous or supernatural condition;
- unknown natural transformation;
- exceptional-only transformation;
- intentionally unresolved mechanism.

Even when a transformation is a normal part of a species' life cycle, such as a cocoon metamorphosis, it remains a **real transformative event** with survival, timing, habitat and logistical consequences rather than ordinary aging represented as an automatic stat increment.

P4 does not impose one numerical rarity percentage on every family. Some species may transform more readily than others. The binding rule is that evolution must remain meaningfully distinct from routine growth and must respect the specific family's evidence.

## 5. Modern game triggers are source metadata, not automatic ancient-world laws

Modern `level`, `trade`, item, friendship, location or other evolution metadata must be preserved as source context but not blindly literalized.

In particular:

- a modern **level** requirement is never diegetic kill-XP, battle grinding, or a visible level threshold;
- a modern **trade** requirement does not prove that an ancient exchange institution or ownership-transfer ritual biologically causes evolution;
- an item/location/relationship condition may be adapted only when the ancient setting can support it without contradicting canon-first worldbuilding;
- when the source establishes the family relationship but not a uniquely defensible ancient mechanism, prefer `unknown`, `exceptional`, or a Human Design Gate over pseudo-canon.

The project may author D2 evolution lore when deliberately approved, but must label it as project lore.

## 6. Player and companion interaction

A companion's evolution is **not a menu command** and is never guaranteed because the player has accumulated enough progression.

The player may be able to:

- protect a Pokémon through a known metamorphic period;
- provide a source-supported environment/material;
- satisfy a known relationship or ecological prerequisite;
- recognize warning signs or readiness;
- encounter a rare authored evolution event;
- choose whether to take risks or make sacrifices around the event.

But the player cannot force a transformation simply because the evolved form would be stronger.

Where a reproducible cause is unknown, no generic `Evolve` action exists.

## 7. P4-HDG-002 resolution — Haunter -> Gengar

Owner choice: **A — Unknown natural maturation**, refined by the shared rule above.

Binding interpretation:

- Gengar exists naturally as the canonical final stage of the Gastly family.
- Haunter can become Gengar through a **rare natural species transformation**.
- Ordinary humans do not know a reproducible biological, ritual, geographic, temporal, or social trigger.
- The modern trade trigger remains source/mechanical metadata; it is not converted into an ancient trading institution or ritual by default.
- An ancient human cannot intentionally reproduce Haunter -> Gengar through a generic action.
- A companion Haunter may evolve only when a rare authored event/state establishes that this particular individual has reached the transformation, with the precise cause allowed to remain unknown.
- Future content may discover case-specific clues, but it must not retroactively claim a universal trigger without a new canon/source review or owner-approved design decision.

Evidence boundary: the family relationship and modern trade trigger are source-backed; the ancient `rare natural transformation with unknown reproducible trigger` treatment is **D2 project interpretation**, deliberately selected because it adds less invented lore than manufacturing a trade analogue.

## 8. Authoring invariants for all 151 dossiers

For every species with an evolution relationship:

1. preserve canonical family identity and source trigger metadata;
2. state whether the ancient mechanism is directly usable, adapted, unknown, exceptional, or intentionally unresolved;
3. keep ordinary growth separate from species transformation;
4. never use kill-XP or player-facing levels as the diegetic cause;
5. preserve persistent individual identity through evolution;
6. re-evaluate post-evolution ecology, hazards, logistics and companionship burden;
7. expose a Human Design Gate rather than silently inventing durable species-wide lore when multiple materially different adaptations remain.

P5 may implement evolution through deterministic authored event/state transitions. P7 must preserve the distinction between `species baseline`, `individual profile`, and `evolution transition` rather than recomputing it from player level.

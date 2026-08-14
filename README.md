# Pokémon Ancient TRPG

An unofficial, non-commercial Pokémon fan-made text RPG/TRPG set in a pre-modern world.

The project explores an era where humans and Pokémon do not yet live together as ordinary modern partners. Travel is dangerous, Pokémon encounters can be rare or threatening, and forming a lasting relationship with a Pokémon should feel like part of a character's story rather than routine collection.

The intended experience is mobile-friendly and built around character creation, tabletop-style stats, dice/checks, conditional events, random discoveries/insights, branching choices, travel, survival, and persistent run state.

## Status

Early design and research phase.

The fixed project lane is currently:

`P0 Governance → P1 References/Data/Resource Sources/IP → P2 World Bible → P3 TRPG Rules → P4 Pokémon Adaptation → P5 Event Engine → P6 Resource/Asset Strategy → P7 Technical Architecture → P8 Vertical Slice → P9 Content Expansion → P10 Mobile/Release`

P1 performs broad resource-source reconnaissance. The dedicated P6 phase runs after the core P2-P5 game design and freezes the actual asset inventory, sourcing/provenance/redistribution policy, preprocessing pipeline, and mobile resource budget before technical architecture begins.

See [`PROJECT_STATUS.md`](PROJECT_STATUS.md) for the current active phase and [`docs/ROADMAP.md`](docs/ROADMAP.md) for the roadmap contract.

## Agent-operated workflow

The repository is intentionally structured so routine work can continue from a short instruction such as:

```text
@GitHub pokemon-ancient-trpg 다음 작업 진행해줘
```

Agents must recover live repository state, continue the first unblocked roadmap work, research factual/technical uncertainty from current primary sources, and ask the owner only when a material game-design decision has no objective answer.

See [`AGENTS.md`](AGENTS.md) and [`docs/DECISIONS.md`](docs/DECISIONS.md).

## Fan-project and IP notice

This is an **unofficial, non-commercial fan project**. It is not affiliated with, sponsored by, or endorsed by Nintendo, The Pokémon Company, Creatures Inc., or GAME FREAK.

Pokémon and related names, characters, designs, images, audio, and other intellectual property belong to their respective rights holders.

The source code, project-authored rules, and project-authored text in this repository are separate from third-party and Pokémon intellectual property. The public availability of this repository does not imply that Pokémon assets or other third-party material are licensed for unrestricted reuse.

No commercial use is intended.

The project will track external data, code, asset provenance, redistribution boundaries, and license notices explicitly before importing or bundling them. Large Pokémon/third-party asset corpora must not be committed merely because a convenient public source exists; P6 owns the final inclusion/fetch/generation policy. See [`docs/REFERENCE_PROTOCOL.md`](docs/REFERENCE_PROTOCOL.md).

## License

No repository-wide software license has been selected yet. A later decision must clearly distinguish project-owned source code/content from Pokémon IP and any third-party data or assets before adding a license.

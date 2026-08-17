# Localization Contract

Status: binding presentation contract for P8 and all later player-facing content.

## Supported locales

- `ko-KR` — Korean
- `en-US` — English

A fresh client selects Korean when the browser reports a Korean locale; otherwise it selects English. An explicit player choice is stored as a presentation preference and takes precedence on later loads.

## Authority boundary

Localization is presentation-only.

- Event IDs, choice IDs, outcome IDs, trigger IDs, content identity, RNG subjects, transition sequence, save wire values and domain commands are language-neutral and MUST NOT change when the locale changes.
- Locale preference MUST NOT be written into the authoritative P8/P9 save envelope.
- Changing language during a pending event MUST render the same pending instance and MUST NOT reselect an event, reroll a check or commit a transition.
- The English P8 presentation source remains the accepted source presentation; Korean is an exact stable-ID overlay for the same authored identities.

## Completeness rule

A player-facing content batch is not localization-complete until every supported locale covers every current:

1. formative prompt and answer,
2. origin / practice / competence / locality / species label used by the batch,
3. specialization label and description,
4. scene title, eyebrow, body, choice and outcome,
5. reusable UI status / action / consequence text.

Coverage is checked against stable IDs. Missing or extra prompt, answer, scene, choice or outcome identities fail validation rather than silently inventing gameplay identity.

## P9 authoring rule

P9 bulk content MUST ship Korean and English together. A P9 event may be authored mechanically before prose is final, but it cannot count toward player-facing P9 content coverage or exit acceptance until both locale presentations are present and machine-validated.

The Gen-I `#001..#151` direct-interaction requirement remains one gameplay/content requirement, not two separate language-specific gameplay paths: both locales present the same language-neutral interaction identity.

## Mobile acceptance

Both locales must preserve the phone baseline:

- no horizontal overflow at the accepted phone viewport,
- interactive language controls are at least `44x44` CSS pixels,
- language choice persists across reload,
- live locale changes update document language metadata,
- an in-progress authoritative save remains byte-equivalent across locale switches.

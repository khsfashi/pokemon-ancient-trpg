import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import {
  P8_ATTRIBUTE_IDS,
  type P8AttributeId,
  type P8CharacterCreationInput,
  type P8CharacterState,
} from '../domain/p8Authority';
import { createP8SliceCharacter, P8_SLICE_PRESENTATION_PROMPTS } from '../content/p8SliceContent';
import {
  P8_SLICE_SPECIALIZATIONS,
  type P8SpecializationPresentation,
} from '../content/p8SlicePresentation';
import {
  applyP8Locale,
  getLocalizedP8Scene,
  labelP8AttributeLocalized,
  labelP8CheckBandLocalized,
  labelP8CompetenceLocalized,
  labelP8LocalityLocalized,
  labelP8OriginLocalized,
  labelP8PracticeLocalized,
  labelP8RelationshipLocalized,
  labelP8RelationshipStateLocalized,
  labelP8SpeciesLocalized,
  localizeP8Prompt,
  localizeP8Specialization,
  p8Text,
  resolveInitialP8Locale,
  type P8Locale,
} from '../ui/p8Localization';
import {
  P8BrowserSession,
  type P8BrowserSessionSnapshot,
} from '../platform/p8BrowserSession';
import { loadP8PokemonMedia, type P8PokemonMediaResult } from '../resources/p8PokemonPresentation';

const session = new P8BrowserSession();

type ViewMode = 'landing' | 'prompts' | 'reveal' | 'specialization' | 'confirm' | 'play';

function answerTuple(values: readonly string[]): [string, string, string] {
  if (values.length !== 3) throw new RangeError('three formative answers are required');
  return [values[0]!, values[1]!, values[2]!];
}

function creationInput(
  answerIds: readonly string[],
  specialization: P8SpecializationPresentation,
): P8CharacterCreationInput {
  return {
    answerIds: answerTuple(answerIds),
    attributeIncreases: [...specialization.attributeIncreases] as [P8AttributeId, P8AttributeId, P8AttributeId, P8AttributeId],
    personalCompetenceId: specialization.personalCompetenceId,
  };
}

function LanguageSwitcher({ locale, onChange }: { readonly locale: P8Locale; readonly onChange: (locale: P8Locale) => void }) {
  return (
    <div class="language-switcher" role="group" aria-label={p8Text(locale, 'language')}>
      <button type="button" class={locale === 'ko-KR' ? 'active' : ''} aria-pressed={locale === 'ko-KR'} onClick={() => onChange('ko-KR')}>한국어</button>
      <button type="button" class={locale === 'en-US' ? 'active' : ''} aria-pressed={locale === 'en-US'} onClick={() => onChange('en-US')}>English</button>
    </div>
  );
}

function CharacterSummary({ character, locale }: { readonly character: P8CharacterState; readonly locale: P8Locale }) {
  return (
    <div class="summary-stack">
      <div class="identity-grid">
        <div><span>{p8Text(locale, 'origin')}</span><strong>{labelP8OriginLocalized(character.originId, locale)}</strong></div>
        <div><span>{p8Text(locale, 'practice')}</span><strong>{labelP8PracticeLocalized(character.practiceId, locale)}</strong></div>
      </div>
      <div class="attribute-grid" aria-label={p8Text(locale, 'startingAttributes')}>
        {P8_ATTRIBUTE_IDS.map((id) => (
          <div key={id}><span>{labelP8AttributeLocalized(id, locale)}</span><strong>{character.attributes[id]}</strong></div>
        ))}
      </div>
      <div class="tag-row" aria-label={p8Text(locale, 'trainedCompetences')}>
        {Object.keys(character.trainedCompetences).map((id) => <span class="tag" key={id}>{labelP8CompetenceLocalized(id, locale)} +1</span>)}
      </div>
    </div>
  );
}

function RunStatus({ snapshot, locale }: { readonly snapshot: P8BrowserSessionSnapshot; readonly locale: P8Locale }) {
  const authority = snapshot.authority;
  if (authority === null) return null;
  const companions = authority.pokemon.companionSlots.filter((slot) => slot !== null).length;
  return (
    <div class="run-status" aria-label={p8Text(locale, 'runStatus')}>
      <span>{labelP8LocalityLocalized(authority.world.currentLocality, locale)}</span>
      <span>{p8Text(locale, 'provisions')} {authority.survival.resourcePools.provisions}</span>
      <span>{p8Text(locale, 'companions')} {companions}/3</span>
    </div>
  );
}

function PokemonMedia({ speciesId, locale }: { readonly speciesId: number; readonly locale: P8Locale }) {
  const [media, setMedia] = useState<P8PokemonMediaResult | null>(null);
  const [failed, setFailed] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    setMedia(null);
    setFailed(false);
    void loadP8PokemonMedia(speciesId).then((result) => {
      if (active) setMedia(result);
    }).catch(() => {
      if (active) setFailed(true);
    });
    return () => { active = false; };
  }, [speciesId]);

  useEffect(() => {
    const host = hostRef.current;
    if (host === null) return;
    host.replaceChildren();
    if (media?.kind !== 'loaded') return;
    const image = media.image.image;
    image.alt = labelP8SpeciesLocalized(speciesId, locale);
    image.className = 'pokemon-image';
    host.append(image);
    return () => { if (host.contains(image)) image.remove(); };
  }, [media, speciesId, locale]);

  const fallbackText = failed
    ? p8Text(locale, 'mediaFailed')
    : media === null
      ? p8Text(locale, 'mediaChecking')
      : media.kind === 'not_configured'
        ? p8Text(locale, 'mediaNotConfigured')
        : media.kind === 'fallback'
          ? p8Text(locale, 'mediaFallback')
          : p8Text(locale, 'mediaLoaded');

  const speciesName = labelP8SpeciesLocalized(speciesId, locale);
  return (
    <aside class="pokemon-media" aria-label={`${speciesName} ${p8Text(locale, 'presentation')}`}>
      <div ref={hostRef} class="pokemon-media-frame" />
      <div>
        <p class="eyebrow">{p8Text(locale, 'directInteraction')} · #{String(speciesId).padStart(3, '0')}</p>
        <strong>{speciesName}</strong>
        <p class="muted">{fallbackText}</p>
      </div>
    </aside>
  );
}

export function App() {
  const [locale, setLocale] = useState<P8Locale>(() => resolveInitialP8Locale());
  const [snapshot, setSnapshot] = useState<P8BrowserSessionSnapshot>(() => session.snapshot());
  const [mode, setMode] = useState<ViewMode>('landing');
  const [promptIndex, setPromptIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [specializationId, setSpecializationId] = useState(P8_SLICE_SPECIALIZATIONS[0]!.specializationId);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resolutionAcknowledged, setResolutionAcknowledged] = useState(false);

  useEffect(() => { applyP8Locale(locale); }, [locale]);

  useEffect(() => {
    void session.refreshResumeAvailability().then(setSnapshot).catch((caught: unknown) => {
      setError(caught instanceof Error ? caught.message : String(caught));
    });
  }, []);

  const specialization = P8_SLICE_SPECIALIZATIONS.find((item) => item.specializationId === specializationId) ?? P8_SLICE_SPECIALIZATIONS[0]!;
  const localizedSpecialization = localizeP8Specialization(specialization, locale);
  const previewCharacter = useMemo(() => {
    if (answers.length !== 3) return null;
    return createP8SliceCharacter(creationInput(answers, specialization));
  }, [answers, specialization]);

  async function runAction(action: () => Promise<P8BrowserSessionSnapshot>): Promise<P8BrowserSessionSnapshot | null> {
    if (busy) return null;
    setBusy(true);
    setError(null);
    try {
      const next = await action();
      setSnapshot(next);
      return next;
    } catch (caught: unknown) {
      setError(caught instanceof Error ? caught.message : String(caught));
      return null;
    } finally {
      setBusy(false);
    }
  }

  function beginCreation(): void {
    setAnswers([]);
    setPromptIndex(0);
    setSpecializationId(P8_SLICE_SPECIALIZATIONS[0]!.specializationId);
    setError(null);
    setMode('prompts');
  }

  function chooseFormativeAnswer(answerId: string): void {
    const next = [...answers];
    next[promptIndex] = answerId;
    setAnswers(next);
    if (promptIndex + 1 < P8_SLICE_PRESENTATION_PROMPTS.length) setPromptIndex(promptIndex + 1);
    else setMode('reveal');
  }

  async function startRun(): Promise<void> {
    const started = await runAction(() => session.startNewRun(creationInput(answers, specialization)));
    if (started === null) return;
    const prepared = await runAction(() => session.prepareNextScene());
    if (prepared !== null) {
      setResolutionAcknowledged(false);
      setMode('play');
    }
  }

  async function resumeRun(): Promise<void> {
    const resumed = await runAction(() => session.resume());
    if (resumed !== null) {
      setResolutionAcknowledged(false);
      setMode('play');
    }
  }

  async function resolveChoice(choiceId: string): Promise<void> {
    const resolved = await runAction(() => session.resolveChoice(choiceId));
    if (resolved !== null) setResolutionAcknowledged(false);
  }

  async function continueFromCheckpoint(): Promise<void> {
    const prepared = await runAction(() => session.prepareNextScene());
    if (prepared !== null) setResolutionAcknowledged(false);
  }

  async function continueAfterResolution(): Promise<void> {
    setResolutionAcknowledged(true);
    if (snapshot.status !== 'ended') await continueFromCheckpoint();
  }

  let body;
  if (mode === 'landing' || (snapshot.authority === null && mode === 'play')) {
    body = (
      <section class="panel hero-panel">
        <p class="eyebrow">{p8Text(locale, 'sliceEyebrow')}</p>
        <h1>{p8Text(locale, 'title')}</h1>
        <p class="lead">{p8Text(locale, 'landingLead')}</p>
        <div class="action-stack">
          {snapshot.canResume && <button class="primary" disabled={busy} onClick={() => void resumeRun()}>{p8Text(locale, 'resume')}</button>}
          <button class={snapshot.canResume ? 'secondary' : 'primary'} disabled={busy} onClick={beginCreation}>{p8Text(locale, 'start')}</button>
        </div>
        {snapshot.canResume && <p class="muted">{p8Text(locale, 'replaceSave')}</p>}
        <div class="contract-note">{p8Text(locale, 'zeroCompanionContract')}</div>
      </section>
    );
  } else if (mode === 'prompts') {
    const prompt = localizeP8Prompt(P8_SLICE_PRESENTATION_PROMPTS[promptIndex]!, locale);
    body = (
      <section class="panel">
        <p class="eyebrow">{p8Text(locale, 'formativeMemory')} · {promptIndex + 1}/3</p>
        <h1>{prompt.promptText}</h1>
        <p class="muted">{p8Text(locale, 'promptHint')}</p>
        <div class="choice-stack">
          {prompt.answers.map((answer) => (
            <button class="choice" key={answer.answerId} onClick={() => chooseFormativeAnswer(answer.answerId)}>{answer.text}</button>
          ))}
        </div>
      </section>
    );
  } else if (mode === 'reveal' && previewCharacter !== null) {
    body = (
      <section class="panel">
        <p class="eyebrow">{p8Text(locale, 'backgroundReveal')}</p>
        <h1>{labelP8OriginLocalized(previewCharacter.originId, locale)}</h1>
        <p class="lead">{p8Text(locale, 'revealLead')}</p>
        <div class="reveal-card"><span>{p8Text(locale, 'learnedPractice')}</span><strong>{labelP8PracticeLocalized(previewCharacter.practiceId, locale)}</strong></div>
        <button class="primary" onClick={() => setMode('specialization')}>{p8Text(locale, 'chooseSpecialization')}</button>
      </section>
    );
  } else if (mode === 'specialization') {
    body = (
      <section class="panel">
        <p class="eyebrow">{p8Text(locale, 'startingSpecialization')}</p>
        <h1>{p8Text(locale, 'specializationQuestion')}</h1>
        <div class="choice-stack">
          {P8_SLICE_SPECIALIZATIONS.map((item) => {
            const localized = localizeP8Specialization(item, locale);
            return (
              <button
                class={`choice specialization ${item.specializationId === specializationId ? 'selected' : ''}`}
                key={item.specializationId}
                onClick={() => setSpecializationId(item.specializationId)}
              >
                <strong>{localized.label}</strong><span>{localized.description}</span>
              </button>
            );
          })}
        </div>
        <button class="primary" onClick={() => setMode('confirm')}>{p8Text(locale, 'reviewCharacter')}</button>
      </section>
    );
  } else if (mode === 'confirm' && previewCharacter !== null) {
    body = (
      <section class="panel">
        <p class="eyebrow">{p8Text(locale, 'finalSheet')}</p>
        <h1>{localizedSpecialization.label}</h1>
        <CharacterSummary character={previewCharacter} locale={locale} />
        <div class="contract-note">{p8Text(locale, 'attributeContract')}</div>
        <button class="primary" disabled={busy} onClick={() => void startRun()}>{busy ? p8Text(locale, 'saving') : p8Text(locale, 'beginRun')}</button>
      </section>
    );
  } else if (snapshot.authority !== null) {
    const activeResolution = snapshot.lastResolution !== null && !resolutionAcknowledged ? snapshot.lastResolution : null;
    if (activeResolution !== null) {
      const scene = getLocalizedP8Scene(activeResolution.eventId, locale);
      body = (
        <section class="panel">
          <RunStatus snapshot={snapshot} locale={locale} />
          <p class="eyebrow">{p8Text(locale, 'committedConsequence')} · {p8Text(locale, 'transition')} {snapshot.transitionSeq.toString()}</p>
          <h1>{scene?.title ?? activeResolution.eventId}</h1>
          {activeResolution.checkOutcomeBand !== undefined && <div class="check-band">{p8Text(locale, 'checkResult')}: {labelP8CheckBandLocalized(activeResolution.checkOutcomeBand, locale)}</div>}
          <p class="lead">{scene?.outcomes[activeResolution.outcomeId] ?? activeResolution.outcomeId}</p>
          <p class="muted">{p8Text(locale, 'committedSave')}</p>
          <button class="primary" disabled={busy} onClick={() => void continueAfterResolution()}>{snapshot.status === 'ended' ? p8Text(locale, 'viewSummary') : p8Text(locale, 'continue')}</button>
        </section>
      );
    } else if (snapshot.status === 'ended') {
      const direct = snapshot.authority.pokemon.directInteractions;
      const relationships = Object.entries(snapshot.authority.world.relationships);
      body = (
        <section class="panel">
          <RunStatus snapshot={snapshot} locale={locale} />
          <p class="eyebrow">{p8Text(locale, 'runComplete')}</p>
          <h1>{p8Text(locale, 'backAtReedbank')}</h1>
          <p class="lead">{p8Text(locale, 'endingLead')}</p>
          <div class="ending-grid">
            <div><span>{p8Text(locale, 'companions')}</span><strong>{snapshot.authority.pokemon.companionSlots.filter((slot) => slot !== null).length}/3</strong></div>
            <div><span>{p8Text(locale, 'directInteractions')}</span><strong>{direct.length}</strong></div>
            <div><span>{p8Text(locale, 'provisionsLeft')}</span><strong>{snapshot.authority.survival.resourcePools.provisions}</strong></div>
            <div><span>{p8Text(locale, 'committedEvents')}</span><strong>{Object.keys(snapshot.authority.events.counts).length}</strong></div>
          </div>
          <div class="summary-block">
            <h2>{p8Text(locale, 'pokemonObserved')}</h2>
            <div class="tag-row">
              {direct.map((identity) => {
                const speciesId = Number(identity.split(':', 1)[0]);
                return <span class="tag" key={identity}>{labelP8SpeciesLocalized(speciesId, locale)}</span>;
              })}
            </div>
          </div>
          <div class="summary-block">
            <h2>{p8Text(locale, 'relationshipsRemembered')}</h2>
            {relationships.map(([id, state]) => <p key={id}><strong>{labelP8RelationshipLocalized(id, locale)}</strong> · {labelP8RelationshipStateLocalized(state, locale)}</p>)}
          </div>
          <div class="contract-note">{p8Text(locale, 'zeroCompanionCompletion')}: {snapshot.authority.events.narrativeFlags['slice.zero_companion_route_complete'] === true ? p8Text(locale, 'proven') : p8Text(locale, 'notReached')}.</div>
          <button class="secondary" onClick={beginCreation}>{p8Text(locale, 'startAnother')}</button>
        </section>
      );
    } else if (snapshot.pending !== null && snapshot.scene !== null) {
      const scene = getLocalizedP8Scene(snapshot.scene.eventId, locale) ?? snapshot.scene;
      body = (
        <section class="panel">
          <RunStatus snapshot={snapshot} locale={locale} />
          <p class="eyebrow">{scene.eyebrow}</p>
          <h1>{scene.title}</h1>
          <p class="lead">{scene.body}</p>
          {scene.speciesId !== undefined && <PokemonMedia speciesId={scene.speciesId} locale={locale} />}
          <div class="choice-stack">
            {snapshot.pending.resolvedChoiceView.filter((choice) => choice.visible).map((choice) => (
              <button
                class="choice"
                key={choice.choiceId}
                disabled={busy || !choice.enabled}
                onClick={() => void resolveChoice(choice.choiceId)}
              >
                {scene.choices[choice.choiceId] ?? choice.choiceId}
                {!choice.enabled && <span class="muted">{p8Text(locale, 'unavailable')}</span>}
              </button>
            ))}
          </div>
          <p class="muted">{p8Text(locale, 'pendingSaveNote')}</p>
        </section>
      );
    } else {
      body = (
        <section class="panel">
          <RunStatus snapshot={snapshot} locale={locale} />
          <p class="eyebrow">{p8Text(locale, 'savedCheckpoint')} · {p8Text(locale, 'transition')} {snapshot.transitionSeq.toString()}</p>
          <h1>{p8Text(locale, 'continueCommitted')}</h1>
          <p class="lead">{p8Text(locale, 'restoredLead')}</p>
          <button class="primary" disabled={busy} onClick={() => void continueFromCheckpoint()}>{p8Text(locale, 'continueJourney')}</button>
        </section>
      );
    }
  }

  return (
    <main class="shell">
      <LanguageSwitcher locale={locale} onChange={setLocale} />
      {error !== null && <div class="error-banner" role="alert">{error}</div>}
      {body}
      <footer>{p8Text(locale, 'footer')}</footer>
    </main>
  );
}

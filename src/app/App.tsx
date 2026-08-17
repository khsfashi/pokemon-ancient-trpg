import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import {
  P8_ATTRIBUTE_IDS,
  type P8AttributeId,
  type P8CharacterCreationInput,
  type P8CharacterState,
} from '../domain/p8Authority';
import { createP8SliceCharacter, P8_SLICE_PRESENTATION_PROMPTS } from '../content/p8SliceContent';
import {
  getP8SliceScene,
  labelP8Competence,
  labelP8Locality,
  labelP8Origin,
  labelP8Practice,
  labelP8Species,
  P8_SLICE_SPECIALIZATIONS,
  type P8SpecializationPresentation,
} from '../content/p8SlicePresentation';
import {
  P8BrowserSession,
  type P8BrowserSessionSnapshot,
} from '../platform/p8BrowserSession';
import { loadP8PokemonMedia, type P8PokemonMediaResult } from '../resources/p8PokemonPresentation';

const session = new P8BrowserSession();

type ViewMode = 'landing' | 'prompts' | 'reveal' | 'specialization' | 'confirm' | 'play';

const ATTRIBUTE_LABELS: Readonly<Record<P8AttributeId, string>> = {
  strength: 'Strength', endurance: 'Endurance', agility: 'Agility', sense: 'Sense',
  intellect: 'Intellect', will: 'Will', presence: 'Presence',
};

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

function CharacterSummary({ character }: { readonly character: P8CharacterState }) {
  return (
    <div class="summary-stack">
      <div class="identity-grid">
        <div><span>Origin</span><strong>{labelP8Origin(character.originId)}</strong></div>
        <div><span>Practice</span><strong>{labelP8Practice(character.practiceId)}</strong></div>
      </div>
      <div class="attribute-grid" aria-label="Starting attributes">
        {P8_ATTRIBUTE_IDS.map((id) => (
          <div key={id}><span>{ATTRIBUTE_LABELS[id]}</span><strong>{character.attributes[id]}</strong></div>
        ))}
      </div>
      <div class="tag-row" aria-label="Trained competences">
        {Object.keys(character.trainedCompetences).map((id) => <span class="tag" key={id}>{labelP8Competence(id)} +1</span>)}
      </div>
    </div>
  );
}

function RunStatus({ snapshot }: { readonly snapshot: P8BrowserSessionSnapshot }) {
  const authority = snapshot.authority;
  if (authority === null) return null;
  const companions = authority.pokemon.companionSlots.filter((slot) => slot !== null).length;
  return (
    <div class="run-status" aria-label="Run status">
      <span>{labelP8Locality(authority.world.currentLocality)}</span>
      <span>Provisions {authority.survival.resourcePools.provisions}</span>
      <span>Companions {companions}/3</span>
    </div>
  );
}

function PokemonMedia({ speciesId }: { readonly speciesId: number }) {
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
    image.alt = labelP8Species(speciesId);
    image.className = 'pokemon-image';
    host.append(image);
    return () => { if (host.contains(image)) image.remove(); };
  }, [media, speciesId]);

  const fallbackText = failed
    ? 'Optional media could not be shown. Gameplay is unchanged.'
    : media === null
      ? 'Checking optional local media…'
      : media.kind === 'not_configured'
        ? 'No redistributable media is configured for this slice. Text presentation remains authoritative.'
        : media.kind === 'fallback'
          ? 'Optional media used the deterministic P7 fallback. Gameplay is unchanged.'
          : 'Optional media loaded through the P7 resource cache.';

  return (
    <aside class="pokemon-media" aria-label={`${labelP8Species(speciesId)} presentation`}>
      <div ref={hostRef} class="pokemon-media-frame" />
      <div>
        <p class="eyebrow">Direct interaction · #{String(speciesId).padStart(3, '0')}</p>
        <strong>{labelP8Species(speciesId)}</strong>
        <p class="muted">{fallbackText}</p>
      </div>
    </aside>
  );
}

export function App() {
  const [snapshot, setSnapshot] = useState<P8BrowserSessionSnapshot>(() => session.snapshot());
  const [mode, setMode] = useState<ViewMode>('landing');
  const [promptIndex, setPromptIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [specializationId, setSpecializationId] = useState(P8_SLICE_SPECIALIZATIONS[0]!.specializationId);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resolutionAcknowledged, setResolutionAcknowledged] = useState(false);

  useEffect(() => {
    void session.refreshResumeAvailability().then(setSnapshot).catch((caught: unknown) => {
      setError(caught instanceof Error ? caught.message : String(caught));
    });
  }, []);

  const specialization = P8_SLICE_SPECIALIZATIONS.find((item) => item.specializationId === specializationId) ?? P8_SLICE_SPECIALIZATIONS[0]!;
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
        <p class="eyebrow">P8 · first playable vertical slice</p>
        <h1>Ancient Pokémon TRPG</h1>
        <p class="lead">A phone-sized, deterministic run through human pressure, travel, relationships, and Pokémon ecology.</p>
        <div class="action-stack">
          {snapshot.canResume && <button class="primary" disabled={busy} onClick={() => void resumeRun()}>Continue saved run</button>}
          <button class={snapshot.canResume ? 'secondary' : 'primary'} disabled={busy} onClick={beginCreation}>Start new run</button>
        </div>
        {snapshot.canResume && <p class="muted">Starting a new run replaces the single vertical-slice save slot.</p>}
        <div class="contract-note">0/3 companions is a complete, supported route. Optional Pokémon media never controls gameplay.</div>
      </section>
    );
  } else if (mode === 'prompts') {
    const prompt = P8_SLICE_PRESENTATION_PROMPTS[promptIndex]!;
    body = (
      <section class="panel">
        <p class="eyebrow">Formative memory · {promptIndex + 1}/3</p>
        <h1>{prompt.promptText}</h1>
        <p class="muted">Choose the answer that fits the person, not the stats. The mapping stays hidden.</p>
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
        <p class="eyebrow">Background reveal</p>
        <h1>{labelP8Origin(previewCharacter.originId)}</h1>
        <p class="lead">Your three memories resolve deterministically into an Origin and a Learned Practice.</p>
        <div class="reveal-card"><span>Learned Practice</span><strong>{labelP8Practice(previewCharacter.practiceId)}</strong></div>
        <button class="primary" onClick={() => setMode('specialization')}>Choose a specialization</button>
      </section>
    );
  } else if (mode === 'specialization') {
    body = (
      <section class="panel">
        <p class="eyebrow">Starting specialization</p>
        <h1>How do you carry your experience forward?</h1>
        <div class="choice-stack">
          {P8_SLICE_SPECIALIZATIONS.map((item) => (
            <button
              class={`choice specialization ${item.specializationId === specializationId ? 'selected' : ''}`}
              key={item.specializationId}
              onClick={() => setSpecializationId(item.specializationId)}
            >
              <strong>{item.label}</strong><span>{item.description}</span>
            </button>
          ))}
        </div>
        <button class="primary" onClick={() => setMode('confirm')}>Review character</button>
      </section>
    );
  } else if (mode === 'confirm' && previewCharacter !== null) {
    body = (
      <section class="panel">
        <p class="eyebrow">Final sheet</p>
        <h1>{specialization.label}</h1>
        <CharacterSummary character={previewCharacter} />
        <div class="contract-note">Starting attributes remain inside the frozen cap of 3. Practice and personal competence are distinct.</div>
        <button class="primary" disabled={busy} onClick={() => void startRun()}>{busy ? 'Saving…' : 'Begin the run'}</button>
      </section>
    );
  } else if (snapshot.authority !== null) {
    const activeResolution = snapshot.lastResolution !== null && !resolutionAcknowledged ? snapshot.lastResolution : null;
    if (activeResolution !== null) {
      const scene = getP8SliceScene(activeResolution.eventId);
      body = (
        <section class="panel">
          <RunStatus snapshot={snapshot} />
          <p class="eyebrow">Committed consequence · transition {snapshot.transitionSeq.toString()}</p>
          <h1>{scene?.title ?? activeResolution.eventId}</h1>
          {activeResolution.checkOutcomeBand !== undefined && <div class="check-band">Check result: {activeResolution.checkOutcomeBand.replaceAll('_', ' ')}</div>}
          <p class="lead">{scene?.outcomes[activeResolution.outcomeId] ?? activeResolution.outcomeId}</p>
          <p class="muted">This consequence is already committed to authoritative state and IndexedDB.</p>
          <button class="primary" disabled={busy} onClick={() => void continueAfterResolution()}>{snapshot.status === 'ended' ? 'View run summary' : 'Continue'}</button>
        </section>
      );
    } else if (snapshot.status === 'ended') {
      const direct = snapshot.authority.pokemon.directInteractions;
      const relationships = Object.entries(snapshot.authority.world.relationships);
      body = (
        <section class="panel">
          <RunStatus snapshot={snapshot} />
          <p class="eyebrow">Run complete</p>
          <h1>Back at Reedbank</h1>
          <p class="lead">The slice ends with state accumulated across people, travel, survival, and Pokémon ecology.</p>
          <div class="ending-grid">
            <div><span>Companions</span><strong>{snapshot.authority.pokemon.companionSlots.filter((slot) => slot !== null).length}/3</strong></div>
            <div><span>Direct interactions</span><strong>{direct.length}</strong></div>
            <div><span>Provisions left</span><strong>{snapshot.authority.survival.resourcePools.provisions}</strong></div>
            <div><span>Committed events</span><strong>{Object.keys(snapshot.authority.events.counts).length}</strong></div>
          </div>
          <div class="summary-block">
            <h2>Pokémon observed</h2>
            <div class="tag-row">
              {direct.map((identity) => {
                const speciesId = Number(identity.split(':', 1)[0]);
                return <span class="tag" key={identity}>{labelP8Species(speciesId)}</span>;
              })}
            </div>
          </div>
          <div class="summary-block">
            <h2>Relationships remembered</h2>
            {relationships.map(([id, state]) => <p key={id}><strong>{id}</strong> · {state.replaceAll('_', ' ')}</p>)}
          </div>
          <div class="contract-note">Zero-companion completion: {snapshot.authority.events.narrativeFlags['slice.zero_companion_route_complete'] === true ? 'proven' : 'not reached'}.</div>
          <button class="secondary" onClick={beginCreation}>Start another run</button>
        </section>
      );
    } else if (snapshot.pending !== null && snapshot.scene !== null) {
      const scene = snapshot.scene;
      body = (
        <section class="panel">
          <RunStatus snapshot={snapshot} />
          <p class="eyebrow">{scene.eyebrow}</p>
          <h1>{scene.title}</h1>
          <p class="lead">{scene.body}</p>
          {scene.speciesId !== undefined && <PokemonMedia speciesId={scene.speciesId} />}
          <div class="choice-stack">
            {snapshot.pending.resolvedChoiceView.filter((choice) => choice.visible).map((choice) => (
              <button
                class="choice"
                key={choice.choiceId}
                disabled={busy || !choice.enabled}
                onClick={() => void resolveChoice(choice.choiceId)}
              >
                {scene.choices[choice.choiceId] ?? choice.choiceId}
                {!choice.enabled && <span class="muted">Unavailable</span>}
              </button>
            ))}
          </div>
          <p class="muted">Pending choice identity is saved before input. Refreshing resumes this exact event without reselection.</p>
        </section>
      );
    } else {
      body = (
        <section class="panel">
          <RunStatus snapshot={snapshot} />
          <p class="eyebrow">Saved checkpoint · transition {snapshot.transitionSeq.toString()}</p>
          <h1>Continue from the committed state</h1>
          <p class="lead">The authoritative state was restored exactly. The next event is not selected until you continue.</p>
          <button class="primary" disabled={busy} onClick={() => void continueFromCheckpoint()}>Continue journey</button>
        </section>
      );
    }
  }

  return (
    <main class="shell">
      {error !== null && <div class="error-banner" role="alert">{error}</div>}
      {body}
      <footer>P8 vertical slice · pure TypeScript authority · explicit IndexedDB commits · P7 resource boundary</footer>
    </main>
  );
}

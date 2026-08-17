import koreanSourceJson from '../../content/p8/vertical-slice.ko-KR.json';
import { P8_SLICE_CONTENT_IDENTITY, P8_SLICE_PRESENTATION_PROMPTS } from '../content/p8SliceContent';
import {
  getP8SliceScene,
  P8_SLICE_COMPETENCE_LABELS,
  P8_SLICE_LOCALITY_LABELS,
  P8_SLICE_ORIGIN_LABELS,
  P8_SLICE_PRACTICE_LABELS,
  P8_SLICE_SCENE_SEQUENCE,
  P8_SLICE_SPECIALIZATIONS,
  P8_SLICE_SPECIES_LABELS,
  type P8ScenePresentation,
  type P8SpecializationPresentation,
} from '../content/p8SlicePresentation';

export const P8_SUPPORTED_LOCALES = ['ko-KR', 'en-US'] as const;
export type P8Locale = (typeof P8_SUPPORTED_LOCALES)[number];
export const P8_LOCALE_STORAGE_KEY = 'pokemon-ancient-trpg.locale.v1';

interface KoreanLocaleSource {
  readonly schemaVersion: 'p8-slice-locale-v1';
  readonly locale: 'ko-KR';
  readonly contentPackId: string;
  readonly contentPackVersion: string;
  readonly originLabels: Readonly<Record<string, string>>;
  readonly practiceLabels: Readonly<Record<string, string>>;
  readonly competenceLabels: Readonly<Record<string, string>>;
  readonly localityLabels: Readonly<Record<string, string>>;
  readonly speciesLabels: Readonly<Record<string, string>>;
  readonly specializations: Readonly<Record<string, { readonly label: string; readonly description: string }>>;
  readonly prompts: Readonly<Record<string, {
    readonly promptText: string;
    readonly answers: Readonly<Record<string, string>>;
  }>>;
  readonly scenes: Readonly<Record<string, {
    readonly eyebrow: string;
    readonly title: string;
    readonly body: string;
    readonly continueLabel: string;
    readonly choices: Readonly<Record<string, string>>;
    readonly outcomes: Readonly<Record<string, string>>;
  }>>;
  readonly relationshipLabels: Readonly<Record<string, string>>;
  readonly relationshipStateLabels: Readonly<Record<string, string>>;
}

const koreanSource = koreanSourceJson as unknown as KoreanLocaleSource;

function assertSameKeys(label: string, expected: readonly string[], actual: readonly string[]): void {
  const left = [...expected].sort();
  const right = [...actual].sort();
  if (left.length !== right.length || left.some((key, index) => key !== right[index])) {
    throw new RangeError(`${label} localization coverage mismatch`);
  }
}

function validateKoreanCatalog(): void {
  if (koreanSource.schemaVersion !== 'p8-slice-locale-v1' || koreanSource.locale !== 'ko-KR') {
    throw new RangeError('unsupported P8 Korean locale catalog');
  }
  if (
    koreanSource.contentPackId !== P8_SLICE_CONTENT_IDENTITY.contentPackId
    || koreanSource.contentPackVersion !== P8_SLICE_CONTENT_IDENTITY.contentPackVersion
  ) {
    throw new RangeError('P8 Korean locale catalog content identity mismatch');
  }

  assertSameKeys('origin', Object.keys(P8_SLICE_ORIGIN_LABELS), Object.keys(koreanSource.originLabels));
  assertSameKeys('practice', Object.keys(P8_SLICE_PRACTICE_LABELS), Object.keys(koreanSource.practiceLabels));
  assertSameKeys('competence', Object.keys(P8_SLICE_COMPETENCE_LABELS), Object.keys(koreanSource.competenceLabels));
  assertSameKeys('locality', Object.keys(P8_SLICE_LOCALITY_LABELS), Object.keys(koreanSource.localityLabels));
  assertSameKeys('species', Object.keys(P8_SLICE_SPECIES_LABELS), Object.keys(koreanSource.speciesLabels));
  assertSameKeys(
    'specialization',
    P8_SLICE_SPECIALIZATIONS.map((item) => item.specializationId),
    Object.keys(koreanSource.specializations),
  );

  assertSameKeys(
    'formative prompt',
    P8_SLICE_PRESENTATION_PROMPTS.map((prompt) => prompt.promptId),
    Object.keys(koreanSource.prompts),
  );
  for (const prompt of P8_SLICE_PRESENTATION_PROMPTS) {
    const localized = koreanSource.prompts[prompt.promptId];
    if (localized === undefined) throw new RangeError(`missing Korean prompt: ${prompt.promptId}`);
    assertSameKeys(
      `formative answer ${prompt.promptId}`,
      prompt.answers.map((answer) => answer.answerId),
      Object.keys(localized.answers),
    );
  }

  assertSameKeys(
    'scene',
    P8_SLICE_SCENE_SEQUENCE.map((scene) => scene.eventId),
    Object.keys(koreanSource.scenes),
  );
  for (const scene of P8_SLICE_SCENE_SEQUENCE) {
    const localized = koreanSource.scenes[scene.eventId];
    if (localized === undefined) throw new RangeError(`missing Korean scene: ${scene.eventId}`);
    assertSameKeys(`scene choices ${scene.eventId}`, Object.keys(scene.choices), Object.keys(localized.choices));
    assertSameKeys(`scene outcomes ${scene.eventId}`, Object.keys(scene.outcomes), Object.keys(localized.outcomes));
  }
}

validateKoreanCatalog();

const UI_TEXT = {
  'en-US': {
    origin: 'Origin', practice: 'Trade', startingAttributes: 'Starting attributes', trainedCompetences: 'Practiced skills',
    runStatus: 'Journey', provisions: 'Food', companions: 'Companions',
    mediaFailed: 'The encounter sketch could not be shown.',
    mediaChecking: 'Looking for an encounter sketch…',
    mediaNotConfigured: 'No clear likeness has been recorded here yet.',
    mediaFallback: 'Only a rough record of this encounter remains.',
    mediaLoaded: 'A recorded likeness is available.',
    directInteraction: 'Encounter', presentation: 'record',
    language: 'Language', korean: '한국어', english: 'English',
    sliceEyebrow: 'A journey from Reedbank', title: 'Ancient Pokémon TRPG',
    landingLead: 'Before safe roads and trainers, even a short trip beyond the village can become a story.',
    resume: 'Continue journey', start: 'New journey',
    replaceSave: 'Starting over will replace your current journey.',
    zeroCompanionContract: 'You can finish this journey without a Pokémon companion.',
    formativeMemory: 'A memory from before', promptHint: 'There is no correct answer. Choose what feels true for this person.',
    backgroundReveal: 'Your past', revealLead: 'Those memories point to the life you knew before this journey.',
    learnedPractice: 'What you learned', chooseSpecialization: 'Choose a strength',
    startingSpecialization: 'Your strength', specializationQuestion: 'What do you trust yourself to do when the road turns difficult?',
    reviewCharacter: 'Review', finalSheet: 'Traveler',
    attributeContract: 'No starting attribute can exceed 3. Your learned trade and personal specialty are separate strengths.',
    saving: 'Recording…', beginRun: 'Set out', committedConsequence: 'Afterward', transition: 'record',
    checkResult: 'Check', committedSave: 'The result of your choice has been recorded.',
    viewSummary: 'See journey summary', continue: 'Continue', runComplete: 'Journey complete', backAtReedbank: 'Back at Reedbank',
    endingLead: 'You return with a little less food and much more to tell.',
    directInteractions: 'Pokémon encountered', provisionsLeft: 'Food left', committedEvents: 'Events faced',
    pokemonObserved: 'Pokémon seen', relationshipsRemembered: 'People who remember you',
    zeroCompanionCompletion: 'Returned without a companion', proven: 'complete', notReached: 'not yet', startAnother: 'Begin another journey',
    unavailable: 'Unavailable', pendingSaveNote: 'You can leave now and return to this scene later.',
    savedCheckpoint: 'Your journey so far', continueCommitted: 'Go to the next scene',
    restoredLead: 'Your previous journey is ready to continue.',
    continueJourney: 'Continue journey', footer: 'A small journey beginning at Reedbank',
  },
  'ko-KR': {
    origin: '출신', practice: '배운 일', startingAttributes: '시작 능력치', trainedCompetences: '익힌 솜씨',
    runStatus: '여정', provisions: '식량', companions: '동행',
    mediaFailed: '조우 그림을 불러오지 못했습니다.',
    mediaChecking: '남아 있는 그림을 찾는 중…',
    mediaNotConfigured: '이 장면에 남은 그림이 없습니다.',
    mediaFallback: '그림 대신 현장 기록만 남아 있습니다.',
    mediaLoaded: '남아 있는 그림을 펼쳤습니다.',
    directInteraction: '조우', presentation: '모습',
    language: '언어', korean: '한국어', english: 'English',
    sliceEyebrow: '갈대둑에서 시작되는 이야기', title: '고대 포켓몬 TRPG',
    landingLead: '안전한 길도, 트레이너도 없던 시대. 마을 밖으로 한 번 나서는 일에도 식량과 눈썰미, 돌아올 이유가 필요했습니다.',
    resume: '여정 이어하기', start: '새 여정',
    replaceSave: '새 여정을 시작하면 지금까지의 여정 기록은 사라집니다.',
    zeroCompanionContract: '포켓몬 동행이 없어도, 사람의 힘만으로 끝까지 돌아올 수 있습니다.',
    formativeMemory: '기억 속 한때', promptHint: '머릿속에 가장 선명한 장면을 따라가 보세요.',
    backgroundReveal: '기억의 끝', revealLead: '세 장면을 되짚고 나니, 몸에 밴 일과 사람을 대하는 방식이 선명해집니다.',
    learnedPractice: '몸에 밴 일', chooseSpecialization: '강점 고르기',
    startingSpecialization: '마지막으로 남은 것', specializationQuestion: '막막한 길 앞에 서면 결국 늘 하던 방식으로 손이 움직였다. 가장 믿고 움직일 수 있는 강점은 무엇일까.',
    reviewCharacter: '확인하기', finalSheet: '길을 나설 사람',
    attributeContract: '능력치는 처음부터 한쪽으로 지나치게 치우치지 않습니다. 배운 일과 개인 강점은 따로 남습니다.',
    saving: '여정을 적는 중…', beginRun: '길을 나선다', committedConsequence: '그 뒤', transition: '기록',
    checkResult: '판정', committedSave: '일은 그렇게 흘러갔다.',
    viewSummary: '여정 돌아보기', continue: '계속', runComplete: '여정 완료', backAtReedbank: '갈대둑으로 귀환',
    endingLead: '식량은 조금 줄었고 신발엔 진흙이 묻었습니다. 대신 돌아와 풀어놓을 이야기가 생겼습니다.',
    directInteractions: '마주친 포켓몬', provisionsLeft: '남은 식량', committedEvents: '겪은 사건',
    pokemonObserved: '눈에 담은 포켓몬', relationshipsRemembered: '돌아갈 인연',
    zeroCompanionCompletion: '포켓몬 동행 없이 귀환', proven: '해냄', notReached: '아직', startAnother: '새 여정 시작',
    unavailable: '지금은 할 수 없음', pendingSaveNote: '지금 나가도 다음에 이 장면부터 이어집니다.',
    savedCheckpoint: '잠시 멈춘 자리', continueCommitted: '다시 길을 잇는다',
    restoredLead: '지난 여정이 이 자리에서 기다리고 있습니다. 준비되면 다시 이어 가세요.',
    continueJourney: '다시 걷는다', footer: '갈대둑에서 시작된 작은 이야기',
  },
} as const;

export type P8UiTextKey = keyof (typeof UI_TEXT)['en-US'];

export function p8Text(locale: P8Locale, key: P8UiTextKey): string {
  return UI_TEXT[locale][key];
}

export function resolveInitialP8Locale(): P8Locale {
  if (typeof window === 'undefined') return 'ko-KR';
  try {
    const stored = window.localStorage.getItem(P8_LOCALE_STORAGE_KEY);
    if (stored === 'ko-KR' || stored === 'en-US') return stored;
  } catch {
    // Storage denial must never block the presentation layer.
  }
  const languages = navigator.languages.length > 0 ? navigator.languages : [navigator.language];
  return languages.some((language) => language.toLowerCase().startsWith('ko')) ? 'ko-KR' : 'en-US';
}

export function applyP8Locale(locale: P8Locale): void {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale;
    document.title = p8Text(locale, 'title');
  }
  if (typeof window !== 'undefined') {
    try { window.localStorage.setItem(P8_LOCALE_STORAGE_KEY, locale); } catch { /* presentation preference is optional */ }
  }
}

export function labelP8OriginLocalized(id: string, locale: P8Locale): string {
  return locale === 'ko-KR' ? koreanSource.originLabels[id] ?? id : P8_SLICE_ORIGIN_LABELS[id] ?? id;
}
export function labelP8PracticeLocalized(id: string, locale: P8Locale): string {
  return locale === 'ko-KR' ? koreanSource.practiceLabels[id] ?? id : P8_SLICE_PRACTICE_LABELS[id] ?? id;
}
export function labelP8CompetenceLocalized(id: string, locale: P8Locale): string {
  return locale === 'ko-KR' ? koreanSource.competenceLabels[id] ?? id : P8_SLICE_COMPETENCE_LABELS[id] ?? id;
}
export function labelP8LocalityLocalized(id: string, locale: P8Locale): string {
  return locale === 'ko-KR' ? koreanSource.localityLabels[id] ?? id : P8_SLICE_LOCALITY_LABELS[id] ?? id;
}
export function labelP8SpeciesLocalized(id: number, locale: P8Locale): string {
  const key = String(id);
  return locale === 'ko-KR' ? koreanSource.speciesLabels[key] ?? `#${id}` : P8_SLICE_SPECIES_LABELS[key] ?? `#${id}`;
}

export function localizeP8Specialization(item: P8SpecializationPresentation, locale: P8Locale): P8SpecializationPresentation {
  if (locale === 'en-US') return item;
  const translated = koreanSource.specializations[item.specializationId];
  if (translated === undefined) throw new RangeError(`missing Korean specialization: ${item.specializationId}`);
  return Object.freeze({ ...item, ...translated });
}

export function localizeP8Prompt(
  prompt: (typeof P8_SLICE_PRESENTATION_PROMPTS)[number],
  locale: P8Locale,
): (typeof P8_SLICE_PRESENTATION_PROMPTS)[number] {
  if (locale === 'en-US') return prompt;
  const translated = koreanSource.prompts[prompt.promptId];
  if (translated === undefined) throw new RangeError(`missing Korean prompt: ${prompt.promptId}`);
  return {
    ...prompt,
    promptText: translated.promptText,
    answers: prompt.answers.map((answer) => ({ ...answer, text: translated.answers[answer.answerId] ?? answer.answerId })),
  };
}

export function getLocalizedP8Scene(eventId: string, locale: P8Locale): P8ScenePresentation | undefined {
  const scene = getP8SliceScene(eventId);
  if (scene === undefined || locale === 'en-US') return scene;
  const translated = koreanSource.scenes[eventId];
  if (translated === undefined) throw new RangeError(`missing Korean scene: ${eventId}`);
  return Object.freeze({ ...scene, ...translated });
}

export function labelP8RelationshipLocalized(id: string, locale: P8Locale): string {
  if (locale === 'ko-KR') return koreanSource.relationshipLabels[id] ?? id;
  const english: Readonly<Record<string, string>> = {
    'reedbank.steward': 'Reedbank steward',
    'reedbank.millkeeper': 'Reedbank millkeeper',
    'orchard.keeper': 'Orchard keeper',
  };
  return english[id] ?? id;
}

export function labelP8RelationshipStateLocalized(id: string, locale: P8Locale): string {
  if (locale === 'ko-KR') return koreanSource.relationshipStateLabels[id] ?? id;
  return id.replaceAll('_', ' ');
}

export function labelP8AttributeLocalized(id: string, locale: P8Locale): string {
  const labels: Readonly<Record<P8Locale, Readonly<Record<string, string>>>> = {
    'en-US': { strength: 'Strength', endurance: 'Endurance', agility: 'Agility', sense: 'Sense', intellect: 'Intellect', will: 'Will', presence: 'Presence' },
    'ko-KR': { strength: '근력', endurance: '체력', agility: '기민', sense: '감각', intellect: '지성', will: '의지', presence: '존재감' },
  };
  return labels[locale][id] ?? id;
}

export function labelP8CheckBandLocalized(band: string, locale: P8Locale): string {
  if (locale === 'en-US') return band.replaceAll('_', ' ');
  const labels: Readonly<Record<string, string>> = {
    setback: '실패',
    costly_success: '대가를 치른 성공',
    full_success: '성공',
    exceptional_success: '탁월한 성공',
    failure: '실패',
    compromise: '대가를 치른 성공',
    success: '성공',
    strong_success: '탁월한 성공',
  };
  return labels[band] ?? band;
}

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
    origin: 'Origin', practice: 'Practice', startingAttributes: 'Starting attributes', trainedCompetences: 'Trained competences',
    runStatus: 'Run status', provisions: 'Provisions', companions: 'Companions',
    mediaFailed: 'Optional media could not be shown. Gameplay is unchanged.',
    mediaChecking: 'Checking optional local media…',
    mediaNotConfigured: 'No redistributable media is configured for this slice. Text presentation remains authoritative.',
    mediaFallback: 'Optional media used the deterministic P7 fallback. Gameplay is unchanged.',
    mediaLoaded: 'Optional media loaded through the P7 resource cache.',
    directInteraction: 'Direct interaction', presentation: 'presentation',
    language: 'Language', korean: '한국어', english: 'English',
    sliceEyebrow: 'P8 · first playable vertical slice', title: 'Ancient Pokémon TRPG',
    landingLead: 'A phone-sized, deterministic run through human pressure, travel, relationships, and Pokémon ecology.',
    resume: 'Continue saved run', start: 'Start new run',
    replaceSave: 'Starting a new run replaces the single vertical-slice save slot.',
    zeroCompanionContract: '0/3 companions is a complete, supported route. Optional Pokémon media never controls gameplay.',
    formativeMemory: 'Formative memory', promptHint: 'Choose the answer that fits the person, not the stats. The mapping stays hidden.',
    backgroundReveal: 'Background reveal', revealLead: 'Your three memories resolve deterministically into an Origin and a Learned Practice.',
    learnedPractice: 'Learned Practice', chooseSpecialization: 'Choose a specialization',
    startingSpecialization: 'Starting specialization', specializationQuestion: 'How do you carry your experience forward?',
    reviewCharacter: 'Review character', finalSheet: 'Final sheet',
    attributeContract: 'Starting attributes remain inside the frozen cap of 3. Practice and personal competence are distinct.',
    saving: 'Saving…', beginRun: 'Begin the run', committedConsequence: 'Committed consequence', transition: 'transition',
    checkResult: 'Check result', committedSave: 'This consequence is already committed to authoritative state and IndexedDB.',
    viewSummary: 'View run summary', continue: 'Continue', runComplete: 'Run complete', backAtReedbank: 'Back at Reedbank',
    endingLead: 'The slice ends with state accumulated across people, travel, survival, and Pokémon ecology.',
    directInteractions: 'Direct interactions', provisionsLeft: 'Provisions left', committedEvents: 'Committed events',
    pokemonObserved: 'Pokémon observed', relationshipsRemembered: 'Relationships remembered',
    zeroCompanionCompletion: 'Zero-companion completion', proven: 'proven', notReached: 'not reached', startAnother: 'Start another run',
    unavailable: 'Unavailable', pendingSaveNote: 'Pending choice identity is saved before input. Refreshing resumes this exact event without reselection.',
    savedCheckpoint: 'Saved checkpoint', continueCommitted: 'Continue from the committed state',
    restoredLead: 'The authoritative state was restored exactly. The next event is not selected until you continue.',
    continueJourney: 'Continue journey', footer: 'P8 vertical slice · pure TypeScript authority · explicit IndexedDB commits · P7 resource boundary',
  },
  'ko-KR': {
    origin: '출신', practice: '배운 일', startingAttributes: '시작 능력치', trainedCompetences: '숙련 기능',
    runStatus: '여정 상태', provisions: '식량', companions: '동료',
    mediaFailed: '선택형 이미지를 표시하지 못했습니다. 게임 진행에는 영향이 없습니다.',
    mediaChecking: '선택형 로컬 이미지를 확인하는 중…',
    mediaNotConfigured: '이 플레이 구간에는 재배포 가능한 포켓몬 이미지가 설정되어 있지 않습니다. 텍스트 정보가 기준입니다.',
    mediaFallback: '선택형 이미지가 결정론적 P7 대체 표시를 사용했습니다. 게임 진행에는 영향이 없습니다.',
    mediaLoaded: '선택형 이미지를 P7 리소스 캐시를 통해 불러왔습니다.',
    directInteraction: '직접 상호작용', presentation: '표시',
    language: '언어', korean: '한국어', english: 'English',
    sliceEyebrow: 'P8 · 첫 플레이 가능 구간', title: '고대 포켓몬 TRPG',
    landingLead: '사람 사이의 압박, 여행, 관계, 포켓몬 생태를 휴대폰에서 결정론적으로 경험하는 짧은 여정입니다.',
    resume: '저장된 여정 이어하기', start: '새 여정 시작',
    replaceSave: '새 여정을 시작하면 현재 플레이 구간의 단일 저장 슬롯을 덮어씁니다.',
    zeroCompanionContract: '동료 0/3으로도 완전히 끝낼 수 있습니다. 선택형 포켓몬 이미지는 게임 진행을 결정하지 않습니다.',
    formativeMemory: '형성된 기억', promptHint: '능력치가 아니라 이 인물에게 어울리는 답을 고르세요. 결과 연결은 숨겨져 있습니다.',
    backgroundReveal: '배경 공개', revealLead: '세 가지 기억이 결정론적으로 출신과 배운 일을 정합니다.',
    learnedPractice: '배운 일', chooseSpecialization: '전문화 선택',
    startingSpecialization: '시작 전문화', specializationQuestion: '지금까지의 경험을 어떤 방식으로 이어 가나요?',
    reviewCharacter: '인물 확인', finalSheet: '최종 인물표',
    attributeContract: '시작 능력치는 고정 상한 3을 지킵니다. 배운 일의 기능과 개인 전문 기능은 서로 다릅니다.',
    saving: '저장 중…', beginRun: '여정 시작', committedConsequence: '확정된 결과', transition: '전이',
    checkResult: '판정 결과', committedSave: '이 결과는 이미 권위 상태와 IndexedDB에 확정 저장되었습니다.',
    viewSummary: '여정 결과 보기', continue: '계속', runComplete: '여정 완료', backAtReedbank: '리드뱅크로 귀환',
    endingLead: '사람, 여행, 생존, 포켓몬 생태를 거치며 쌓인 상태와 함께 이번 플레이 구간을 마칩니다.',
    directInteractions: '직접 상호작용', provisionsLeft: '남은 식량', committedEvents: '확정된 사건',
    pokemonObserved: '관찰한 포켓몬', relationshipsRemembered: '기억된 관계',
    zeroCompanionCompletion: '동료 없이 완료', proven: '달성', notReached: '미달성', startAnother: '다른 여정 시작',
    unavailable: '선택 불가', pendingSaveNote: '선택 전에도 현재 사건의 정체성이 저장됩니다. 새로고침해도 재선정 없이 같은 사건에서 이어집니다.',
    savedCheckpoint: '저장된 지점', continueCommitted: '확정된 상태에서 계속',
    restoredLead: '권위 상태를 정확히 복원했습니다. 계속하기 전에는 다음 사건을 선택하지 않습니다.',
    continueJourney: '여정 계속', footer: 'P8 플레이 구간 · 순수 TypeScript 권위 상태 · 명시적 IndexedDB 확정 · P7 리소스 경계',
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
    'ko-KR': { strength: '힘', endurance: '지구력', agility: '민첩', sense: '감각', intellect: '지성', will: '의지', presence: '존재감' },
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

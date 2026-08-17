import type { P8AuthorityState, P8AttributeId, P8CharacterState } from '../domain/p8Authority';
import {
  labelP8AttributeLocalized,
  labelP8CompetenceLocalized,
  labelP8LocalityLocalized,
  labelP8OriginLocalized,
  labelP8PracticeLocalized,
  labelP8SpeciesLocalized,
  type P8Locale,
} from '../ui/p8Localization';
import './profile.css';

export const P8_PORTRAIT_IDS = ['pathfinder', 'herbalist', 'warden'] as const;
export type P8PortraitId = (typeof P8_PORTRAIT_IDS)[number];
export const P8_PORTRAIT_STORAGE_KEY = 'pokemon-ancient-trpg.p8.portrait.v1';

const ATTRIBUTE_IDS: readonly P8AttributeId[] = ['strength', 'endurance', 'agility', 'sense', 'intellect', 'will', 'presence'];

const PORTRAIT_LABELS = {
  'ko-KR': {
    pathfinder: '길잡이의 얼굴',
    herbalist: '약초꾼의 얼굴',
    warden: '수호자의 얼굴',
  },
  'en-US': {
    pathfinder: 'Pathfinder portrait',
    herbalist: 'Herbalist portrait',
    warden: 'Warden portrait',
  },
} as const;

const TEXT = {
  'ko-KR': {
    portraitChoice: '내 모습 고르기',
    portraitHint: '이 모습은 전투 능력에 영향을 주지 않습니다. 여정 내내 내 프로필에 표시됩니다.',
    profile: '내 여행자',
    locality: '현재 위치',
    vitality: '활력(체력)',
    fatigue: '피로(스태미나)',
    fear: '공포',
    ready: '정상',
    steady: '안정',
    injuries: '부상',
    noInjury: '없음',
    provisions: '식량',
    remedies: '치료물자',
    materials: '작업재료',
    load: '하중',
    comfortable: '적정',
    burdened: '과적',
    companions: '동행 포켓몬',
    emptySlot: '빈 자리',
    details: '상세 능력과 생존 상태',
    attributes: '능력치',
    competences: '익힌 솜씨',
    danger: '위험 기준',
    incapacitated: '활력 0 → 행동불능',
    critical: '치명상 → 즉시 치료·구조가 필요한 별도 위기',
    death: '사망 → 명시된 치명 경로에서만 발생',
    baselineNote: '현재 P8 체험 구간에는 활력·피로·공포·부상을 변화시키는 사건이 아직 없어 시작 상태가 유지됩니다.',
  },
  'en-US': {
    portraitChoice: 'Choose your portrait',
    portraitHint: 'Portraits are cosmetic. Your choice stays with the active journey profile.',
    profile: 'Traveler profile',
    locality: 'Location',
    vitality: 'Vitality',
    fatigue: 'Fatigue / stamina',
    fear: 'Fear',
    ready: 'Ready',
    steady: 'Steady',
    injuries: 'Injuries',
    noInjury: 'None',
    provisions: 'Provisions',
    remedies: 'Remedies',
    materials: 'Materials',
    load: 'Load',
    comfortable: 'comfortable',
    burdened: 'burdened',
    companions: 'Pokémon companions',
    emptySlot: 'Empty slot',
    details: 'Attributes and survival details',
    attributes: 'Attributes',
    competences: 'Practiced skills',
    danger: 'Danger rules',
    incapacitated: 'Vitality 0 → Incapacitated',
    critical: 'Critical Injury → separate rescue/treatment emergency',
    death: 'Death → only through an explicit lethal path',
    baselineNote: 'The current P8 slice has no authored event that changes Vitality, Fatigue, Fear, or Injuries, so those values remain at their starting state.',
  },
} as const;

export interface P8ExpeditionProfileProjection {
  readonly vitalityCurrent: number;
  readonly vitalityMax: number;
  readonly fatigueStage: 0;
  readonly fearStage: 0;
  readonly injuries: readonly string[];
  readonly currentLoad: number;
  readonly comfortableLoad: number;
  readonly burdened: boolean;
  readonly companionCount: number;
}

/**
 * Read-only P8.2 presentation projection over the current executable slice.
 *
 * P3 owns the formulas: Vitality Max = 4 + Endurance and Comfortable Load =
 * 4 + Strength. Resource units have Load 1 under D-028. The current P8 slice
 * has no domain command that can authoritatively change human pressure state,
 * therefore it presents the contract baseline (full Vitality, Ready, Steady,
 * no Injury) instead of inventing a second stamina/HP authority in UI state.
 */
export function deriveP8ExpeditionProfile(authority: P8AuthorityState): P8ExpeditionProfileProjection {
  const vitalityMax = 4 + authority.character.attributes.endurance;
  const currentLoad = authority.survival.resourcePools.provisions
    + authority.survival.resourcePools.remedies
    + authority.survival.resourcePools.materials;
  const comfortableLoad = 4 + authority.character.attributes.strength;
  return Object.freeze({
    vitalityCurrent: vitalityMax,
    vitalityMax,
    fatigueStage: 0,
    fearStage: 0,
    injuries: Object.freeze([]),
    currentLoad,
    comfortableLoad,
    burdened: currentLoad > comfortableLoad,
    companionCount: authority.pokemon.companionSlots.filter((slot) => slot !== null).length,
  });
}

export function isP8PortraitId(value: unknown): value is P8PortraitId {
  return typeof value === 'string' && (P8_PORTRAIT_IDS as readonly string[]).includes(value);
}

export function loadP8PortraitId(): P8PortraitId {
  if (typeof window === 'undefined') return 'pathfinder';
  try {
    const stored = window.localStorage.getItem(P8_PORTRAIT_STORAGE_KEY);
    if (isP8PortraitId(stored)) return stored;
  } catch {
    // Cosmetic preference storage must never block play or save recovery.
  }
  return 'pathfinder';
}

export function saveP8PortraitId(portraitId: P8PortraitId): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(P8_PORTRAIT_STORAGE_KEY, portraitId);
  } catch {
    // Cosmetic preference storage must never block authoritative save commits.
  }
}

function PortraitArtwork({ portraitId, locale, compact = false }: { readonly portraitId: P8PortraitId; readonly locale: P8Locale; readonly compact?: boolean }) {
  const label = PORTRAIT_LABELS[locale][portraitId];
  return (
    <svg class={`portrait-art portrait-${portraitId}${compact ? ' compact' : ''}`} viewBox="0 0 120 144" role="img" aria-label={label}>
      <rect class="portrait-backdrop" x="4" y="4" width="112" height="136" rx="22" />
      {portraitId === 'pathfinder' && <>
        <path class="portrait-cloak" d="M19 135c4-30 18-45 41-45s37 15 41 45H19Z" />
        <path class="portrait-hair" d="M35 58c0-25 12-40 27-40 20 0 30 17 27 43-9-8-16-12-29-12-8 0-17 3-25 9Z" />
        <ellipse class="portrait-face" cx="61" cy="62" rx="23" ry="28" />
        <path class="portrait-mark" d="M44 65c6 3 10 3 16 0m8 0c5 3 9 3 14 0M57 80c5 3 9 3 14 0" />
        <path class="portrait-gear" d="M91 27 80 44m17-8L84 50" />
      </>}
      {portraitId === 'herbalist' && <>
        <path class="portrait-cloak" d="M16 136c7-29 20-43 44-43s39 15 44 43H16Z" />
        <ellipse class="portrait-face" cx="60" cy="61" rx="23" ry="29" />
        <path class="portrait-hair" d="M35 58c-1-27 12-42 27-42 18 0 30 13 29 37-12-12-27-15-45-7 0 17-4 31-13 40 4-11 3-19 2-28Z" />
        <path class="portrait-hair" d="M38 70c-4 27 3 44 16 55m28-54c6 25 0 43-14 55" />
        <path class="portrait-mark" d="M43 64c6 3 10 3 15 0m9 0c5 3 9 3 14 0M54 80c5 4 10 4 16 0" />
        <path class="portrait-gear" d="M88 24c10 0 15 5 15 14-10 0-15-5-15-14Zm7 18c7 1 10 5 9 12-7-1-10-5-9-12Z" />
      </>}
      {portraitId === 'warden' && <>
        <path class="portrait-cloak" d="M14 136c8-32 23-46 46-46 24 0 40 15 46 46H14Z" />
        <ellipse class="portrait-face" cx="60" cy="61" rx="24" ry="29" />
        <path class="portrait-hair" d="M34 56c0-27 12-40 28-40 18 0 28 11 30 31-15-7-34-8-58 9Z" />
        <path class="portrait-mark" d="M43 64c6 3 10 3 16 0m9 0c5 3 9 3 14 0M52 80c7 5 14 5 21 0" />
        <path class="portrait-gear" d="M27 101 12 85m81 18 17-18M28 103l8 28m57-28-9 28" />
      </>}
    </svg>
  );
}

export function P8PortraitPicker({ portraitId, locale, onChange }: { readonly portraitId: P8PortraitId; readonly locale: P8Locale; readonly onChange: (id: P8PortraitId) => void }) {
  const text = TEXT[locale];
  return (
    <section class="portrait-picker" aria-labelledby="portrait-choice-title">
      <div class="profile-section-heading">
        <div>
          <p class="eyebrow" id="portrait-choice-title">{text.portraitChoice}</p>
          <p class="muted">{text.portraitHint}</p>
        </div>
      </div>
      <div class="portrait-options" role="radiogroup" aria-label={text.portraitChoice}>
        {P8_PORTRAIT_IDS.map((id) => (
          <button
            type="button"
            key={id}
            class={`portrait-option${id === portraitId ? ' selected' : ''}`}
            role="radio"
            aria-checked={id === portraitId}
            onClick={() => onChange(id)}
          >
            <PortraitArtwork portraitId={id} locale={locale} />
            <span>{PORTRAIT_LABELS[locale][id]}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export function P8PortraitIdentity({ portraitId, character, locale }: { readonly portraitId: P8PortraitId; readonly character: P8CharacterState; readonly locale: P8Locale }) {
  return (
    <div class="portrait-identity">
      <PortraitArtwork portraitId={portraitId} locale={locale} compact />
      <div>
        <span>{labelP8OriginLocalized(character.originId, locale)}</span>
        <strong>{labelP8PracticeLocalized(character.practiceId, locale)}</strong>
      </div>
    </div>
  );
}

export function P8ExpeditionHud({ authority, portraitId, locale }: { readonly authority: P8AuthorityState; readonly portraitId: P8PortraitId; readonly locale: P8Locale }) {
  const text = TEXT[locale];
  const profile = deriveP8ExpeditionProfile(authority);
  return (
    <aside class="run-status expedition-hud" aria-label={text.profile}>
      <div class="hud-primary-row">
        <P8PortraitIdentity portraitId={portraitId} character={authority.character} locale={locale} />
        <div class="hud-primary-stats">
          <div class="hud-location"><span>{text.locality}</span><strong>{labelP8LocalityLocalized(authority.world.currentLocality, locale)}</strong></div>
          <div class="vitality-block">
            <div><span>{text.vitality}</span><strong>{profile.vitalityCurrent}/{profile.vitalityMax}</strong></div>
            <div class="vitality-track" aria-hidden="true"><span style={{ width: `${(profile.vitalityCurrent / profile.vitalityMax) * 100}%` }} /></div>
          </div>
        </div>
      </div>

      <div class="hud-chip-row">
        <span>{text.fatigue} · {text.ready}</span>
        <span>{text.fear} · {text.steady}</span>
        <span>{text.injuries} · {text.noInjury}</span>
        <span class={profile.burdened ? 'warning' : ''}>{text.load} {profile.currentLoad}/{profile.comfortableLoad} · {profile.burdened ? text.burdened : text.comfortable}</span>
      </div>

      <div class="resource-grid">
        <div><span>{text.provisions}</span><strong>{authority.survival.resourcePools.provisions}</strong></div>
        <div><span>{text.remedies}</span><strong>{authority.survival.resourcePools.remedies}</strong></div>
        <div><span>{text.materials}</span><strong>{authority.survival.resourcePools.materials}</strong></div>
      </div>

      <details class="profile-details">
        <summary>{text.details}</summary>
        <div class="profile-details-body">
          <section>
            <h2>{text.attributes}</h2>
            <div class="hud-attribute-grid">
              {ATTRIBUTE_IDS.map((id) => <div key={id}><span>{labelP8AttributeLocalized(id, locale)}</span><strong>{authority.character.attributes[id]}</strong></div>)}
            </div>
          </section>
          <section>
            <h2>{text.competences}</h2>
            <div class="tag-row">
              {Object.keys(authority.character.trainedCompetences).map((id) => <span class="tag" key={id}>{labelP8CompetenceLocalized(id, locale)} +1</span>)}
            </div>
          </section>
          <section>
            <h2>{text.companions} · {profile.companionCount}/3</h2>
            <div class="companion-slot-grid">
              {authority.pokemon.companionSlots.map((slot, index) => (
                <div key={index} class={slot === null ? 'empty' : ''}>
                  <span>#{index + 1}</span>
                  <strong>{slot === null ? text.emptySlot : labelP8SpeciesLocalized(slot.speciesId, locale)}</strong>
                </div>
              ))}
            </div>
          </section>
          <section class="danger-rules">
            <h2>{text.danger}</h2>
            <p>{text.incapacitated}</p>
            <p>{text.critical}</p>
            <p>{text.death}</p>
            <p class="muted">{text.baselineNote}</p>
          </section>
        </div>
      </details>
    </aside>
  );
}

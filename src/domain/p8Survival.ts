import type { P8AuthorityState } from './p8Authority';

const VITALITY_DAMAGE_COUNTER = 'p3.survival.vitality_damage';
const FATIGUE_COUNTER = 'p3.survival.fatigue';
const INJURY_COUNTER = 'p3.survival.injuries';
const INCAPACITATED_FLAG = 'p3.survival.incapacitated';
const COLLAPSE_RISK_FLAG = 'p3.survival.collapse_risk';
const FATIGUE_MAX_STAGE = 2;
const MAX_ACTIVE_INJURIES = 3;

export interface P8SurvivalPressureProjection {
  readonly vitalityCurrent: number;
  readonly vitalityMax: number;
  readonly fatigueStage: number;
  readonly fatigueLimit: number;
  readonly injuries: number;
  readonly incapacitated: boolean;
  readonly collapseRisk: boolean;
}

export interface P8SurvivalPressureDelta {
  readonly vitalityDelta?: number;
  readonly fatigueDelta?: number;
  readonly injuryDelta?: number;
}

function counter(state: P8AuthorityState, key: string): number {
  const value = state.events.narrativeCounters[key] ?? 0;
  return Number.isSafeInteger(value) ? Math.max(0, value) : 0;
}

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}

export function deriveP8SurvivalPressure(state: P8AuthorityState): P8SurvivalPressureProjection {
  const vitalityMax = 4 + state.character.attributes.endurance;
  const vitalityDamage = clamp(counter(state, VITALITY_DAMAGE_COUNTER), 0, vitalityMax);
  const fatigueStage = clamp(counter(state, FATIGUE_COUNTER), 0, FATIGUE_MAX_STAGE);
  const injuries = clamp(counter(state, INJURY_COUNTER), 0, MAX_ACTIVE_INJURIES);
  const vitalityCurrent = vitalityMax - vitalityDamage;
  return Object.freeze({
    vitalityCurrent,
    vitalityMax,
    fatigueStage,
    fatigueLimit: FATIGUE_MAX_STAGE,
    injuries,
    incapacitated: vitalityCurrent === 0,
    collapseRisk: injuries >= 2 || fatigueStage >= FATIGUE_MAX_STAGE,
  });
}

export function applyP8SurvivalPressure(
  state: P8AuthorityState,
  delta: P8SurvivalPressureDelta,
): P8AuthorityState {
  const current = deriveP8SurvivalPressure(state);
  const vitalityDelta = delta.vitalityDelta ?? 0;
  const fatigueDelta = delta.fatigueDelta ?? 0;
  const injuryDelta = delta.injuryDelta ?? 0;
  for (const [label, value] of Object.entries({ vitalityDelta, fatigueDelta, injuryDelta })) {
    if (!Number.isSafeInteger(value)) throw new RangeError(`${label} must be a safe integer`);
  }

  const vitalityCurrent = clamp(current.vitalityCurrent + vitalityDelta, 0, current.vitalityMax);
  const fatigueStage = clamp(current.fatigueStage + fatigueDelta, 0, FATIGUE_MAX_STAGE);
  const injuries = clamp(current.injuries + injuryDelta, 0, MAX_ACTIVE_INJURIES);
  const narrativeCounters = {
    ...state.events.narrativeCounters,
    [VITALITY_DAMAGE_COUNTER]: current.vitalityMax - vitalityCurrent,
    [FATIGUE_COUNTER]: fatigueStage,
    [INJURY_COUNTER]: injuries,
  };
  const narrativeFlags = {
    ...state.events.narrativeFlags,
    [INCAPACITATED_FLAG]: vitalityCurrent === 0,
    [COLLAPSE_RISK_FLAG]: injuries >= 2 || fatigueStage >= FATIGUE_MAX_STAGE,
  };

  return {
    ...state,
    events: {
      ...state.events,
      narrativeCounters,
      narrativeFlags,
    },
  };
}

import type { P8AttributeId, P8CharacterState } from '../domain/p8Authority';
import type { HashProvider } from './hashProvider';
import { drawP5Bounded, type P5BoundedDrawRecord, type P5RngStreamKey } from './p5Rng';
import type { P5DoublesOverlay, P5OutcomeBand, PendingCheckResult, PendingRngDrawRecord } from '../saves/pendingEvent';

export const P8_DIFFICULTIES = { favorable: 7, standard: 9, hard: 11, severe: 13, extreme: 15 } as const;
export type P8CheckDegree = 'failure' | 'compromise' | 'success' | 'strong_success';

export interface P8StaticCheckSpec {
  readonly checkId: string;
  readonly attributeId: P8AttributeId;
  readonly competenceId?: string;
  readonly contextModifier: number;
  readonly difficulty: number;
}

export interface P8StaticCheckResult {
  readonly checkId: string;
  readonly rngSubjectId: string;
  readonly dice: readonly [number, number];
  readonly attributeModifier: number;
  readonly competenceModifier: 0 | 1;
  readonly contextModifier: number;
  readonly difficulty: number;
  readonly total: number;
  readonly margin: number;
  readonly degree: P8CheckDegree;
  readonly outcomeBand: P5OutcomeBand;
  readonly doublesOverlay: P5DoublesOverlay;
  readonly rngDraws: readonly P5BoundedDrawRecord[];
  readonly nextDrawIndex: bigint;
}

export function classifyP8Margin(margin: number): P8CheckDegree {
  if (!Number.isSafeInteger(margin)) throw new RangeError('margin must be a safe integer');
  if (margin >= 3) return 'strong_success';
  if (margin >= 0) return 'success';
  if (margin >= -2) return 'compromise';
  return 'failure';
}

function toOutcomeBand(degree: P8CheckDegree): P5OutcomeBand {
  switch (degree) {
    case 'strong_success': return 'exceptional';
    case 'success': return 'full';
    case 'compromise': return 'costly_partial';
    case 'failure': return 'setback';
  }
}

function doublesOverlay(dice: readonly [number, number]): P5DoublesOverlay {
  if (dice[0] === 6 && dice[1] === 6) return 'fortune';
  if (dice[0] === 1 && dice[1] === 1) return 'trouble';
  return 'none';
}

export async function resolveP8StaticCheck(
  hashProvider: HashProvider,
  character: P8CharacterState,
  streamKey: Omit<P5RngStreamKey, 'channel' | 'subjectId'>,
  rngSubjectId: string,
  startDrawIndex: bigint,
  spec: P8StaticCheckSpec,
): Promise<P8StaticCheckResult> {
  if (!Number.isSafeInteger(spec.contextModifier) || spec.contextModifier < -3 || spec.contextModifier > 3) {
    throw new RangeError('contextModifier must be a safe integer in -3..3');
  }
  if (!Number.isSafeInteger(spec.difficulty)) throw new RangeError('difficulty must be a safe integer');

  const key: P5RngStreamKey = { ...streamKey, channel: 'check.d6', subjectId: rngSubjectId };
  const first = await drawP5Bounded(hashProvider, key, startDrawIndex, 6n);
  const second = await drawP5Bounded(hashProvider, key, first.nextDrawIndex, 6n);
  const dice: [number, number] = [Number(first.value) + 1, Number(second.value) + 1];
  const attributeModifier = character.attributes[spec.attributeId];
  const competenceModifier: 0 | 1 = spec.competenceId !== undefined && character.trainedCompetences[spec.competenceId] === 1 ? 1 : 0;
  const total = dice[0] + dice[1] + attributeModifier + competenceModifier + spec.contextModifier;
  const margin = total - spec.difficulty;
  const degree = classifyP8Margin(margin);
  return {
    checkId: spec.checkId,
    rngSubjectId,
    dice,
    attributeModifier,
    competenceModifier,
    contextModifier: spec.contextModifier,
    difficulty: spec.difficulty,
    total,
    margin,
    degree,
    outcomeBand: toOutcomeBand(degree),
    doublesOverlay: doublesOverlay(dice),
    rngDraws: [...first.draws, ...second.draws],
    nextDrawIndex: second.nextDrawIndex,
  };
}

export function p8CheckToPendingResult(result: P8StaticCheckResult): PendingCheckResult {
  return {
    checkId: result.checkId,
    dice: result.dice,
    total: result.total,
    margin: result.margin,
    outcomeBand: result.outcomeBand,
    doublesOverlay: result.doublesOverlay,
  };
}

export function p8CheckDrawsToPending(result: P8StaticCheckResult): readonly PendingRngDrawRecord[] {
  return result.rngDraws.map((draw) => {
    const record: PendingRngDrawRecord = {
      channel: 'check.d6',
      subjectId: result.rngSubjectId,
      drawIndex: draw.drawIndex,
      rawU64: draw.rawU64,
      accepted: draw.accepted,
    };
    return draw.boundedResult === undefined ? record : { ...record, boundedResult: draw.boundedResult };
  });
}

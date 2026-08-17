import { createInitialP8AuthorityState, p8AuthorityStateToJson, type P8AuthorityState } from '../domain/p8Authority';
import { prepareP8PendingEvent, resolveP8EventChoice, selectP8Event } from '../events/p8EventRuntime';
import type { HashProvider } from '../runtime/hashProvider';
import { digestP8AuthorityState } from '../runtime/p8Canonical';
import {
  createP8SliceCharacter,
  P8_SLICE_CONTENT_IDENTITY,
  P8_SLICE_EVENT_CATALOG,
  type P8SliceReplayDefinition,
} from './p8SliceContent';

export interface P8SliceReplayCheckpoint {
  readonly transitionSeq: string;
  readonly triggerId: string;
  readonly eventId: string;
  readonly choiceId: string;
  readonly outcomeId: string;
  readonly precommitStateDigest: string;
  readonly postcommitStateDigest: string;
  readonly checkOutcomeBand?: string;
}

export interface P8SliceReplayResult {
  readonly state: P8AuthorityState;
  readonly stateJson: ReturnType<typeof p8AuthorityStateToJson>;
  readonly transitionSeq: string;
  readonly checkpoints: readonly P8SliceReplayCheckpoint[];
}

export async function runP8SliceReplay(
  hashProvider: HashProvider,
  definition: P8SliceReplayDefinition,
): Promise<P8SliceReplayResult> {
  let state = createInitialP8AuthorityState(
    createP8SliceCharacter(definition.character),
    'reedbank-settlement',
    { provisions: 3, remedies: 1, materials: 0 },
  );
  let transitionSeq = 0n;
  const checkpoints: P8SliceReplayCheckpoint[] = [];

  for (let evaluationOrdinal = 0; evaluationOrdinal < definition.inputs.length; evaluationOrdinal += 1) {
    const input = definition.inputs[evaluationOrdinal]!;
    const context = {
      ...P8_SLICE_CONTENT_IDENTITY,
      runSeedHex: definition.runSeedHex,
      transitionSeq,
      triggerId: input.triggerId,
      evaluationOrdinal,
    } as const;
    const selected = await selectP8Event(hashProvider, P8_SLICE_EVENT_CATALOG, state, context);
    if (selected === null) throw new RangeError(`replay trigger produced no eligible event: ${input.triggerId}`);
    if (selected.event.eventId !== input.expectedEventId) {
      throw new RangeError(`replay event divergence: expected ${input.expectedEventId}, got ${selected.event.eventId}`);
    }

    const precommitStateDigest = await digestP8AuthorityState(hashProvider, state);
    const prepared = await prepareP8PendingEvent(hashProvider, state, selected, context, precommitStateDigest);
    const resolved = await resolveP8EventChoice(
      hashProvider,
      state,
      prepared.event,
      prepared.pending,
      input.choiceId,
      transitionSeq,
    );
    const postcommitStateDigest = await digestP8AuthorityState(hashProvider, resolved.state);
    const checkOutcomeBand = resolved.resolvedPendingEvidence.completedCheckResult?.outcomeBand;
    checkpoints.push({
      transitionSeq: resolved.transitionSeq.toString(10),
      triggerId: input.triggerId,
      eventId: selected.event.eventId,
      choiceId: input.choiceId,
      outcomeId: resolved.resolvedPendingEvidence.pendingConsequence!,
      precommitStateDigest,
      postcommitStateDigest,
      ...(checkOutcomeBand === undefined ? {} : { checkOutcomeBand }),
    });
    state = resolved.state;
    transitionSeq = resolved.transitionSeq;
  }

  return {
    state,
    stateJson: p8AuthorityStateToJson(state),
    transitionSeq: transitionSeq.toString(10),
    checkpoints,
  };
}

import type { PendingEventInstanceRuntimeV1 } from '../src/saves/pendingEvent';
import type { SaveContentIdentity, SaveEnvelopeV1Runtime } from '../src/saves/saveEnvelope';

export const contentIdentity: SaveContentIdentity = {
  contentPackId: 'p5-foundation-fixtures',
  contentPackVersion: '1.0.0',
  contentDigestSha256: 'a'.repeat(64),
};

const pendingBase = {
  pendingSchemaVersion: 'p5-pending-v1',
  p5ContractVersion: 'p5-event-contract-v1',
  ...contentIdentity,
  runSeedHex: '00000000000000000000000000000002',
  instanceId: 'fixture.pending.beedrill',
  eventId: 'fixture.risk.beedrill_corridor',
  contentRevision: 1,
  originTransitionSeq: 9007199254740993n,
  triggerId: 'travel_step_committed',
  evaluationOrdinal: 0,
  resolvedChoiceView: [{ choiceId: 'observe_and_withdraw', visible: true, enabled: true }],
  precommitStateDigest: 'fixture-precommit-digest',
} as const;

export function pendingAtChoice(): PendingEventInstanceRuntimeV1 {
  return { ...pendingBase, phase: 'awaiting_choice', completedRngDrawRecords: [] };
}

export function pendingAtRoll(): PendingEventInstanceRuntimeV1 {
  return {
    ...pendingBase,
    phase: 'awaiting_roll',
    selectedChoiceId: 'observe_and_withdraw',
    completedRngDrawRecords: [],
  };
}

export function pendingAtReaction(): PendingEventInstanceRuntimeV1 {
  return {
    ...pendingBase,
    phase: 'awaiting_reaction',
    selectedChoiceId: 'observe_and_withdraw',
    completedRngDrawRecords: [
      { channel: 'check.d6', subjectId: 'fixture.risk.beedrill_corridor/observe_and_withdraw/read_escape_gap', drawIndex: 0n, rawU64: 4463312059452329917n, accepted: true, boundedResult: 1n },
      { channel: 'check.d6', subjectId: 'fixture.risk.beedrill_corridor/observe_and_withdraw/read_escape_gap', drawIndex: 1n, rawU64: 8154684722988415358n, accepted: true, boundedResult: 2n },
    ],
    completedCheckResult: {
      checkId: 'read_escape_gap', dice: [2, 3], total: 8, margin: -3, outcomeBand: 'setback', doublesOverlay: 'none',
    },
    pendingConsequence: 'fixture.consequence.light_sting',
    pendingReactionWindow: 'fixture.reaction.escape_smoke',
  };
}

export function envelopeWithPending(pendingEventInstance?: PendingEventInstanceRuntimeV1): SaveEnvelopeV1Runtime {
  const base = {
    saveSchemaVersion: 1,
    architectureContractVersion: 'p7-architecture-v1',
    ...contentIdentity,
    p5ContractVersion: 'p5-event-contract-v1',
    runSeedHex: '00000000000000000000000000000002',
    transitionSeq: 18446744073709551614n,
    createdAtIso: '2026-08-17T01:00:00.000Z',
    updatedAtIso: '2026-08-17T01:05:00.000Z',
    authoritativeState: { location_ref: 'fixture.corridor', fear: 1 },
  } as const;
  return pendingEventInstance === undefined ? base : { ...base, pendingEventInstance };
}

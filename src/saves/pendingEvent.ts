import { formatUnsignedDecimal, parseUnsignedDecimal } from '../runtime/uint';
import { isRecord } from './jsonValue';

export const P5_PENDING_SCHEMA_VERSION = 'p5-pending-v1' as const;
export const P5_CONTRACT_VERSION = 'p5-event-contract-v1' as const;

export const P5_TRIGGER_IDS = [
  'run_started',
  'location_entered',
  'travel_step_committed',
  'rest_completed',
  'player_action_committed',
  'check_resolved',
  'companion_state_changed',
  'knowledge_changed',
  'milestone_committed',
  'event_resolved',
  'event_chain_advanced',
] as const;
export type P5TriggerId = (typeof P5_TRIGGER_IDS)[number];

export const P5_PENDING_PHASES = [
  'awaiting_choice',
  'awaiting_preparation',
  'awaiting_roll',
  'awaiting_reaction',
  'awaiting_recovery',
  'ready_to_commit',
] as const;
export type PendingEventPhase = (typeof P5_PENDING_PHASES)[number];

export const P5_OUTCOME_BANDS = ['setback', 'costly_partial', 'full', 'exceptional'] as const;
export type P5OutcomeBand = (typeof P5_OUTCOME_BANDS)[number];
export const P5_DOUBLES_OVERLAYS = ['none', 'fortune', 'trouble'] as const;
export type P5DoublesOverlay = (typeof P5_DOUBLES_OVERLAYS)[number];
export const P5_RNG_CHANNELS = ['event.select', 'check.d6', 'insight.select', 'content.roll'] as const;
export type P5PersistedRngChannel = (typeof P5_RNG_CHANNELS)[number];

const STABLE_ID = /^[a-z0-9][a-z0-9._-]{0,63}$/;
const RUN_SEED = /^[0-9a-f]{32}$/;
const SHA256_HEX = /^[0-9a-f]{64}$/;
const triggerSet = new Set<string>(P5_TRIGGER_IDS);
const phaseSet = new Set<string>(P5_PENDING_PHASES);
const channelSet = new Set<string>(P5_RNG_CHANNELS);
const outcomeBandSet = new Set<string>(P5_OUTCOME_BANDS);
const doublesOverlaySet = new Set<string>(P5_DOUBLES_OVERLAYS);

export interface PendingChoiceView {
  readonly choiceId: string;
  readonly visible: boolean;
  readonly enabled: boolean;
  readonly publicReasonId?: string;
}

export interface PendingRngDrawRecord {
  readonly channel: P5PersistedRngChannel;
  readonly subjectId: string;
  readonly drawIndex: bigint;
  readonly rawU64: bigint;
  readonly accepted: boolean;
  readonly boundedResult?: bigint;
}

export interface PendingCheckResult {
  readonly checkId: string;
  readonly dice: readonly [number, number];
  readonly total: number;
  readonly margin: number;
  readonly outcomeBand: P5OutcomeBand;
  readonly doublesOverlay: P5DoublesOverlay;
}

export interface PendingEventInstanceRuntimeV1 {
  readonly pendingSchemaVersion: typeof P5_PENDING_SCHEMA_VERSION;
  readonly p5ContractVersion: typeof P5_CONTRACT_VERSION;
  readonly contentPackId: string;
  readonly contentPackVersion: string;
  readonly contentDigestSha256: string;
  readonly runSeedHex: string;
  readonly instanceId: string;
  readonly eventId: string;
  readonly contentRevision: number;
  readonly originTransitionSeq: bigint;
  readonly triggerId: P5TriggerId;
  readonly evaluationOrdinal: number;
  readonly phase: PendingEventPhase;
  readonly resolvedChoiceView: readonly PendingChoiceView[];
  readonly selectedChoiceId?: string;
  readonly completedRngDrawRecords: readonly PendingRngDrawRecord[];
  readonly completedCheckResult?: PendingCheckResult;
  readonly pendingConsequence?: string;
  readonly pendingReactionWindow?: string;
  readonly precommitStateDigest: string;
}

export interface PendingChoiceViewWire {
  readonly choice_id: string;
  readonly visible: boolean;
  readonly enabled: boolean;
  readonly public_reason_id?: string;
}

export interface PendingRngDrawRecordWire {
  readonly channel: P5PersistedRngChannel;
  readonly subject_id: string;
  readonly draw_index_u64: string;
  readonly raw_u64: string;
  readonly accepted: boolean;
  readonly bounded_result_u64?: string;
}

export interface PendingCheckResultWire {
  readonly check_id: string;
  readonly dice: readonly [number, number];
  readonly total: number;
  readonly margin: number;
  readonly outcome_band: P5OutcomeBand;
  readonly doubles_overlay: P5DoublesOverlay;
}

export interface PendingEventInstanceWireV1 {
  readonly pending_schema_version: typeof P5_PENDING_SCHEMA_VERSION;
  readonly p5_contract_version: typeof P5_CONTRACT_VERSION;
  readonly content_pack_id: string;
  readonly content_pack_version: string;
  readonly content_digest_sha256: string;
  readonly run_seed_hex: string;
  readonly instance_id: string;
  readonly event_id: string;
  readonly content_revision: number;
  readonly origin_transition_seq_u64: string;
  readonly trigger_id: P5TriggerId;
  readonly evaluation_ordinal: number;
  readonly phase: PendingEventPhase;
  readonly resolved_choice_view: readonly PendingChoiceViewWire[];
  readonly selected_choice_id?: string;
  readonly completed_rng_draw_records: readonly PendingRngDrawRecordWire[];
  readonly completed_check_result?: PendingCheckResultWire;
  readonly pending_consequence?: string;
  readonly pending_reaction_window?: string;
  readonly precommit_state_digest: string;
}

function requireRecord(value: unknown, name: string): Record<string, unknown> {
  if (!isRecord(value)) throw new TypeError(`${name} must be an object`);
  return value;
}

function requireString(value: unknown, name: string): string {
  if (typeof value !== 'string') throw new TypeError(`${name} must be a string`);
  return value;
}

function requireBoolean(value: unknown, name: string): boolean {
  if (typeof value !== 'boolean') throw new TypeError(`${name} must be a boolean`);
  return value;
}

function requireInteger(value: unknown, name: string, minimum = Number.MIN_SAFE_INTEGER): number {
  if (typeof value !== 'number' || !Number.isSafeInteger(value) || value < minimum) {
    throw new RangeError(`${name} must be a safe integer >= ${minimum}`);
  }
  return value;
}

function requireStableId(value: unknown, name: string): string {
  const text = requireString(value, name);
  if (!STABLE_ID.test(text)) throw new RangeError(`${name} must be a stable P5 id`);
  return text;
}

function requireLimitedString(value: unknown, name: string, maxLength: number): string {
  const text = requireString(value, name);
  if (text.length === 0 || text.length > maxLength) throw new RangeError(`${name} length is invalid`);
  return text;
}

function requireEnum<T extends string>(value: unknown, name: string, set: ReadonlySet<string>): T {
  const text = requireString(value, name);
  if (!set.has(text)) throw new RangeError(`${name} contains unsupported value: ${text}`);
  return text as T;
}

function readOptionalString(record: Record<string, unknown>, key: string): string | undefined {
  const value = record[key];
  return value === undefined ? undefined : requireString(value, key);
}

function assertAllowedKeys(record: Record<string, unknown>, allowed: ReadonlySet<string>, name: string): void {
  for (const key of Object.keys(record)) {
    if (!allowed.has(key)) throw new TypeError(`${name} contains unsupported field: ${key}`);
  }
}

const choiceKeys = new Set(['choice_id', 'visible', 'enabled', 'public_reason_id']);
const rngKeys = new Set(['channel', 'subject_id', 'draw_index_u64', 'raw_u64', 'accepted', 'bounded_result_u64']);
const checkKeys = new Set(['check_id', 'dice', 'total', 'margin', 'outcome_band', 'doubles_overlay']);
const pendingKeys = new Set([
  'pending_schema_version', 'p5_contract_version', 'content_pack_id', 'content_pack_version',
  'content_digest_sha256', 'run_seed_hex', 'instance_id', 'event_id', 'content_revision',
  'origin_transition_seq_u64', 'trigger_id', 'evaluation_ordinal', 'phase', 'resolved_choice_view',
  'selected_choice_id', 'completed_rng_draw_records', 'completed_check_result', 'pending_consequence',
  'pending_reaction_window', 'precommit_state_digest',
]);

function choiceFromWire(value: unknown, index: number): PendingChoiceView {
  const record = requireRecord(value, `resolved_choice_view[${index}]`);
  assertAllowedKeys(record, choiceKeys, `resolved_choice_view[${index}]`);
  const result: PendingChoiceView = {
    choiceId: requireStableId(record.choice_id, 'choice_id'),
    visible: requireBoolean(record.visible, 'visible'),
    enabled: requireBoolean(record.enabled, 'enabled'),
  };
  const publicReasonId = readOptionalString(record, 'public_reason_id');
  return publicReasonId === undefined ? result : { ...result, publicReasonId: requireStableId(publicReasonId, 'public_reason_id') };
}

function rngDrawFromWire(value: unknown, index: number): PendingRngDrawRecord {
  const record = requireRecord(value, `completed_rng_draw_records[${index}]`);
  assertAllowedKeys(record, rngKeys, `completed_rng_draw_records[${index}]`);
  const result: PendingRngDrawRecord = {
    channel: requireEnum<P5PersistedRngChannel>(record.channel, 'channel', channelSet),
    subjectId: requireLimitedString(record.subject_id, 'subject_id', 128),
    drawIndex: parseUnsignedDecimal(requireString(record.draw_index_u64, 'draw_index_u64')),
    rawU64: parseUnsignedDecimal(requireString(record.raw_u64, 'raw_u64')),
    accepted: requireBoolean(record.accepted, 'accepted'),
  };
  const bounded = record.bounded_result_u64;
  return bounded === undefined
    ? result
    : { ...result, boundedResult: parseUnsignedDecimal(requireString(bounded, 'bounded_result_u64')) };
}

function checkFromWire(value: unknown): PendingCheckResult {
  const record = requireRecord(value, 'completed_check_result');
  assertAllowedKeys(record, checkKeys, 'completed_check_result');
  const dice = record.dice;
  if (!Array.isArray(dice) || dice.length !== 2) throw new RangeError('dice must contain exactly two entries');
  const die0 = requireInteger(dice[0], 'dice[0]', 1);
  const die1 = requireInteger(dice[1], 'dice[1]', 1);
  if (die0 > 6 || die1 > 6) throw new RangeError('dice values must be in 1..6');
  return {
    checkId: requireStableId(record.check_id, 'check_id'),
    dice: [die0, die1],
    total: requireInteger(record.total, 'total'),
    margin: requireInteger(record.margin, 'margin'),
    outcomeBand: requireEnum<P5OutcomeBand>(record.outcome_band, 'outcome_band', outcomeBandSet),
    doublesOverlay: requireEnum<P5DoublesOverlay>(record.doubles_overlay, 'doubles_overlay', doublesOverlaySet),
  };
}

export function pendingEventFromWire(value: unknown): PendingEventInstanceRuntimeV1 {
  const record = requireRecord(value, 'pending_event_instance');
  assertAllowedKeys(record, pendingKeys, 'pending_event_instance');
  if (record.pending_schema_version !== P5_PENDING_SCHEMA_VERSION) throw new RangeError('Unsupported pending schema version');
  if (record.p5_contract_version !== P5_CONTRACT_VERSION) throw new RangeError('Unsupported P5 contract version');
  const digest = requireString(record.content_digest_sha256, 'content_digest_sha256');
  if (!SHA256_HEX.test(digest)) throw new RangeError('content_digest_sha256 must be 64 lowercase hex characters');
  const seed = requireString(record.run_seed_hex, 'run_seed_hex');
  if (!RUN_SEED.test(seed)) throw new RangeError('run_seed_hex must be 32 lowercase hex characters');
  const resolvedChoiceWire = record.resolved_choice_view;
  if (!Array.isArray(resolvedChoiceWire)) throw new TypeError('resolved_choice_view must be an array');
  const rngWire = record.completed_rng_draw_records;
  if (!Array.isArray(rngWire)) throw new TypeError('completed_rng_draw_records must be an array');

  const base: PendingEventInstanceRuntimeV1 = {
    pendingSchemaVersion: P5_PENDING_SCHEMA_VERSION,
    p5ContractVersion: P5_CONTRACT_VERSION,
    contentPackId: requireStableId(record.content_pack_id, 'content_pack_id'),
    contentPackVersion: requireLimitedString(record.content_pack_version, 'content_pack_version', 64),
    contentDigestSha256: digest,
    runSeedHex: seed,
    instanceId: requireStableId(record.instance_id, 'instance_id'),
    eventId: requireStableId(record.event_id, 'event_id'),
    contentRevision: requireInteger(record.content_revision, 'content_revision', 1),
    originTransitionSeq: parseUnsignedDecimal(requireString(record.origin_transition_seq_u64, 'origin_transition_seq_u64')),
    triggerId: requireEnum<P5TriggerId>(record.trigger_id, 'trigger_id', triggerSet),
    evaluationOrdinal: requireInteger(record.evaluation_ordinal, 'evaluation_ordinal', 0),
    phase: requireEnum<PendingEventPhase>(record.phase, 'phase', phaseSet),
    resolvedChoiceView: resolvedChoiceWire.map(choiceFromWire),
    completedRngDrawRecords: rngWire.map(rngDrawFromWire),
    precommitStateDigest: requireLimitedString(record.precommit_state_digest, 'precommit_state_digest', 128),
  };

  const selectedChoiceId = record.selected_choice_id === undefined ? undefined : requireStableId(record.selected_choice_id, 'selected_choice_id');
  const completedCheckResult = record.completed_check_result === undefined ? undefined : checkFromWire(record.completed_check_result);
  const pendingConsequence = record.pending_consequence === undefined ? undefined : requireStableId(record.pending_consequence, 'pending_consequence');
  const pendingReactionWindow = record.pending_reaction_window === undefined ? undefined : requireStableId(record.pending_reaction_window, 'pending_reaction_window');

  if (base.phase === 'awaiting_reaction' &&
      (selectedChoiceId === undefined || completedCheckResult === undefined || pendingConsequence === undefined || pendingReactionWindow === undefined)) {
    throw new TypeError('awaiting_reaction must persist choice, check result, consequence, and reaction window');
  }

  return {
    ...base,
    ...(selectedChoiceId === undefined ? {} : { selectedChoiceId }),
    ...(completedCheckResult === undefined ? {} : { completedCheckResult }),
    ...(pendingConsequence === undefined ? {} : { pendingConsequence }),
    ...(pendingReactionWindow === undefined ? {} : { pendingReactionWindow }),
  };
}

function choiceToWire(value: PendingChoiceView): PendingChoiceViewWire {
  requireStableId(value.choiceId, 'choiceId');
  const base = { choice_id: value.choiceId, visible: value.visible, enabled: value.enabled };
  return value.publicReasonId === undefined
    ? base
    : { ...base, public_reason_id: requireStableId(value.publicReasonId, 'publicReasonId') };
}

function rngDrawToWire(value: PendingRngDrawRecord): PendingRngDrawRecordWire {
  if (!channelSet.has(value.channel)) throw new RangeError(`Unsupported P5 RNG channel: ${value.channel}`);
  requireLimitedString(value.subjectId, 'subjectId', 128);
  const base: PendingRngDrawRecordWire = {
    channel: value.channel,
    subject_id: value.subjectId,
    draw_index_u64: formatUnsignedDecimal(value.drawIndex),
    raw_u64: formatUnsignedDecimal(value.rawU64),
    accepted: value.accepted,
  };
  return value.boundedResult === undefined
    ? base
    : { ...base, bounded_result_u64: formatUnsignedDecimal(value.boundedResult) };
}

function checkToWire(value: PendingCheckResult): PendingCheckResultWire {
  requireStableId(value.checkId, 'checkId');
  const [die0, die1] = value.dice;
  if (!Number.isSafeInteger(die0) || !Number.isSafeInteger(die1) || die0 < 1 || die0 > 6 || die1 < 1 || die1 > 6) {
    throw new RangeError('dice values must be safe integers in 1..6');
  }
  if (!outcomeBandSet.has(value.outcomeBand) || !doublesOverlaySet.has(value.doublesOverlay)) {
    throw new RangeError('Unsupported check result enum value');
  }
  return {
    check_id: value.checkId,
    dice: [die0, die1],
    total: requireInteger(value.total, 'total'),
    margin: requireInteger(value.margin, 'margin'),
    outcome_band: value.outcomeBand,
    doubles_overlay: value.doublesOverlay,
  };
}

export function pendingEventToWire(value: PendingEventInstanceRuntimeV1): PendingEventInstanceWireV1 {
  const wire: PendingEventInstanceWireV1 = {
    pending_schema_version: P5_PENDING_SCHEMA_VERSION,
    p5_contract_version: P5_CONTRACT_VERSION,
    content_pack_id: requireStableId(value.contentPackId, 'contentPackId'),
    content_pack_version: requireLimitedString(value.contentPackVersion, 'contentPackVersion', 64),
    content_digest_sha256: value.contentDigestSha256,
    run_seed_hex: value.runSeedHex,
    instance_id: requireStableId(value.instanceId, 'instanceId'),
    event_id: requireStableId(value.eventId, 'eventId'),
    content_revision: requireInteger(value.contentRevision, 'contentRevision', 1),
    origin_transition_seq_u64: formatUnsignedDecimal(value.originTransitionSeq),
    trigger_id: value.triggerId,
    evaluation_ordinal: requireInteger(value.evaluationOrdinal, 'evaluationOrdinal', 0),
    phase: value.phase,
    resolved_choice_view: value.resolvedChoiceView.map(choiceToWire),
    completed_rng_draw_records: value.completedRngDrawRecords.map(rngDrawToWire),
    precommit_state_digest: requireLimitedString(value.precommitStateDigest, 'precommitStateDigest', 128),
    ...(value.selectedChoiceId === undefined ? {} : { selected_choice_id: requireStableId(value.selectedChoiceId, 'selectedChoiceId') }),
    ...(value.completedCheckResult === undefined ? {} : { completed_check_result: checkToWire(value.completedCheckResult) }),
    ...(value.pendingConsequence === undefined ? {} : { pending_consequence: requireStableId(value.pendingConsequence, 'pendingConsequence') }),
    ...(value.pendingReactionWindow === undefined ? {} : { pending_reaction_window: requireStableId(value.pendingReactionWindow, 'pendingReactionWindow') }),
  };
  // Reuse the wire validator so all enum/digest/phase cross-field invariants stay single-sourced.
  pendingEventFromWire(wire);
  return wire;
}

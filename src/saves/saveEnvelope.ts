import { formatUnsignedDecimal, parseUnsignedDecimal } from '../runtime/uint';
import { assertJsonObject, isRecord, type JsonObject } from './jsonValue';
import {
  P5_CONTRACT_VERSION,
  pendingEventFromWire,
  pendingEventToWire,
  type PendingEventInstanceRuntimeV1,
  type PendingEventInstanceWireV1,
} from './pendingEvent';

export const SAVE_SCHEMA_VERSION = 1 as const;
export const P7_ARCHITECTURE_CONTRACT_VERSION = 'p7-architecture-v1' as const;

const STABLE_ID = /^[a-z0-9][a-z0-9._-]{0,63}$/;
const SHA256_HEX = /^[0-9a-f]{64}$/;
const RUN_SEED_HEX = /^[0-9a-f]{32}$/;
const ISO_UTC_MILLIS = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
const envelopeKeys = new Set([
  'save_schema_version', 'architecture_contract_version', 'content_pack_id', 'content_pack_version',
  'content_digest_sha256', 'p5_contract_version', 'run_seed_hex', 'transition_seq_u64',
  'created_at_iso', 'updated_at_iso', 'authoritative_state', 'pending_event_instance',
]);

export interface SaveEnvelopeV1Runtime {
  readonly saveSchemaVersion: typeof SAVE_SCHEMA_VERSION;
  readonly architectureContractVersion: typeof P7_ARCHITECTURE_CONTRACT_VERSION;
  readonly contentPackId: string;
  readonly contentPackVersion: string;
  readonly contentDigestSha256: string;
  readonly p5ContractVersion: typeof P5_CONTRACT_VERSION;
  readonly runSeedHex: string;
  readonly transitionSeq: bigint;
  readonly createdAtIso: string;
  readonly updatedAtIso: string;
  readonly authoritativeState: JsonObject;
  readonly pendingEventInstance?: PendingEventInstanceRuntimeV1;
}

export interface SaveEnvelopeV1Wire {
  readonly save_schema_version: typeof SAVE_SCHEMA_VERSION;
  readonly architecture_contract_version: typeof P7_ARCHITECTURE_CONTRACT_VERSION;
  readonly content_pack_id: string;
  readonly content_pack_version: string;
  readonly content_digest_sha256: string;
  readonly p5_contract_version: typeof P5_CONTRACT_VERSION;
  readonly run_seed_hex: string;
  readonly transition_seq_u64: string;
  readonly created_at_iso: string;
  readonly updated_at_iso: string;
  readonly authoritative_state: JsonObject;
  readonly pending_event_instance?: PendingEventInstanceWireV1;
}

export interface SaveContentIdentity {
  readonly contentPackId: string;
  readonly contentPackVersion: string;
  readonly contentDigestSha256: string;
}

function requireRecord(value: unknown, name: string): Record<string, unknown> {
  if (!isRecord(value)) throw new TypeError(`${name} must be an object`);
  return value;
}

function requireString(value: unknown, name: string): string {
  if (typeof value !== 'string') throw new TypeError(`${name} must be a string`);
  return value;
}

function requireStableId(value: unknown, name: string): string {
  const text = requireString(value, name);
  if (!STABLE_ID.test(text)) throw new RangeError(`${name} must be a stable id`);
  return text;
}

function requireLimitedString(value: unknown, name: string, maxLength: number): string {
  const text = requireString(value, name);
  if (text.length === 0 || text.length > maxLength) throw new RangeError(`${name} length is invalid`);
  return text;
}

function requireIsoUtcMillis(value: unknown, name: string): string {
  const text = requireString(value, name);
  if (!ISO_UTC_MILLIS.test(text)) throw new RangeError(`${name} must be canonical UTC ISO with milliseconds`);
  const parsed = new Date(text);
  if (Number.isNaN(parsed.getTime()) || parsed.toISOString() !== text) {
    throw new RangeError(`${name} must be a valid canonical UTC timestamp`);
  }
  return text;
}

function assertAllowedKeys(record: Record<string, unknown>): void {
  for (const key of Object.keys(record)) {
    if (!envelopeKeys.has(key)) throw new TypeError(`save envelope contains unsupported field: ${key}`);
  }
}

export function saveEnvelopeV1FromWire(value: unknown): SaveEnvelopeV1Runtime {
  const record = requireRecord(value, 'save envelope');
  assertAllowedKeys(record);
  if (record.save_schema_version !== SAVE_SCHEMA_VERSION) throw new RangeError('Unsupported save schema version');
  if (record.architecture_contract_version !== P7_ARCHITECTURE_CONTRACT_VERSION) {
    throw new RangeError('Unsupported architecture contract version');
  }
  if (record.p5_contract_version !== P5_CONTRACT_VERSION) throw new RangeError('Unsupported P5 contract version');

  const contentDigest = requireString(record.content_digest_sha256, 'content_digest_sha256');
  if (!SHA256_HEX.test(contentDigest)) throw new RangeError('content_digest_sha256 must be 64 lowercase hex characters');
  const runSeed = requireString(record.run_seed_hex, 'run_seed_hex');
  if (!RUN_SEED_HEX.test(runSeed)) throw new RangeError('run_seed_hex must be 32 lowercase hex characters');
  assertJsonObject(record.authoritative_state, 'authoritative_state');

  const base: SaveEnvelopeV1Runtime = {
    saveSchemaVersion: SAVE_SCHEMA_VERSION,
    architectureContractVersion: P7_ARCHITECTURE_CONTRACT_VERSION,
    contentPackId: requireStableId(record.content_pack_id, 'content_pack_id'),
    contentPackVersion: requireLimitedString(record.content_pack_version, 'content_pack_version', 64),
    contentDigestSha256: contentDigest,
    p5ContractVersion: P5_CONTRACT_VERSION,
    runSeedHex: runSeed,
    transitionSeq: parseUnsignedDecimal(requireString(record.transition_seq_u64, 'transition_seq_u64')),
    createdAtIso: requireIsoUtcMillis(record.created_at_iso, 'created_at_iso'),
    updatedAtIso: requireIsoUtcMillis(record.updated_at_iso, 'updated_at_iso'),
    authoritativeState: record.authoritative_state,
  };

  if (record.pending_event_instance === undefined) return base;
  const pending = pendingEventFromWire(record.pending_event_instance);
  if (pending.contentPackId !== base.contentPackId ||
      pending.contentPackVersion !== base.contentPackVersion ||
      pending.contentDigestSha256 !== base.contentDigestSha256 ||
      pending.runSeedHex !== base.runSeedHex) {
    throw new RangeError('pending event identity must match its save envelope');
  }
  return { ...base, pendingEventInstance: pending };
}

export function saveEnvelopeV1ToWire(value: SaveEnvelopeV1Runtime): SaveEnvelopeV1Wire {
  assertJsonObject(value.authoritativeState, 'authoritativeState');
  const wire: SaveEnvelopeV1Wire = {
    save_schema_version: SAVE_SCHEMA_VERSION,
    architecture_contract_version: P7_ARCHITECTURE_CONTRACT_VERSION,
    content_pack_id: requireStableId(value.contentPackId, 'contentPackId'),
    content_pack_version: requireLimitedString(value.contentPackVersion, 'contentPackVersion', 64),
    content_digest_sha256: value.contentDigestSha256,
    p5_contract_version: P5_CONTRACT_VERSION,
    run_seed_hex: value.runSeedHex,
    transition_seq_u64: formatUnsignedDecimal(value.transitionSeq),
    created_at_iso: requireIsoUtcMillis(value.createdAtIso, 'createdAtIso'),
    updated_at_iso: requireIsoUtcMillis(value.updatedAtIso, 'updatedAtIso'),
    authoritative_state: value.authoritativeState,
    ...(value.pendingEventInstance === undefined ? {} : { pending_event_instance: pendingEventToWire(value.pendingEventInstance) }),
  };
  // Single validation path prevents runtime-created saves from bypassing wire invariants.
  saveEnvelopeV1FromWire(wire);
  return wire;
}

export function assertSaveContentCompatibility(
  envelope: Pick<SaveEnvelopeV1Runtime, 'contentPackId' | 'contentPackVersion' | 'contentDigestSha256'>,
  expected: SaveContentIdentity,
): void {
  if (envelope.contentPackId !== expected.contentPackId ||
      envelope.contentPackVersion !== expected.contentPackVersion ||
      envelope.contentDigestSha256 !== expected.contentDigestSha256) {
    throw new RangeError('Save content pack is incompatible with the active content pack');
  }
}

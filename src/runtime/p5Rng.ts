import type { HashProvider } from './hashProvider';
import { U64_MAX } from './uint';

export const P5_RNG_V1_DOMAIN = 'pokemon-ancient-trpg/p5-rng-v1' as const;
export const P5_RNG_CHANNELS = ['event.select', 'check.d6', 'insight.select', 'content.roll'] as const;
export type P5RngChannel = (typeof P5_RNG_CHANNELS)[number];

const U64_SPACE = 1n << 64n;
const RUN_SEED_HEX = /^[0-9a-f]{32}$/;
const ASCII_ID = /^[\x21-\x7e]{1,128}$/;
const encoder = new TextEncoder();
const domainBytes = encoder.encode(P5_RNG_V1_DOMAIN);
const channelSet = new Set<string>(P5_RNG_CHANNELS);

export interface P5RngStreamKey {
  readonly runSeedHex: string;
  readonly contentPackId: string;
  readonly contentPackVersion: string;
  readonly originTransitionSeq: bigint;
  readonly triggerId: string;
  readonly channel: P5RngChannel;
  readonly subjectId: string;
}

export interface P5RawDraw {
  readonly drawIndex: bigint;
  readonly sha256Hex: string;
  readonly rawU64: bigint;
}

export interface P5BoundedDrawRecord extends P5RawDraw {
  readonly accepted: boolean;
  readonly boundedResult?: bigint;
}

export interface P5BoundedDrawResult {
  readonly value: bigint;
  readonly nextDrawIndex: bigint;
  readonly draws: readonly P5BoundedDrawRecord[];
}

function assertAscii(value: string, name: string, maxLength: number): void {
  if (value.length === 0 || value.length > maxLength || !ASCII_ID.test(value) || value.includes('\0')) {
    throw new RangeError(`${name} must be non-empty printable ASCII with length <= ${maxLength}`);
  }
}

function assertU64(value: bigint, name: string): void {
  if (value < 0n || value > U64_MAX) {
    throw new RangeError(`${name} must fit u64`);
  }
}

function decodeRunSeed(runSeedHex: string): Uint8Array {
  if (!RUN_SEED_HEX.test(runSeedHex)) {
    throw new RangeError('runSeedHex must be exactly 32 lowercase hexadecimal characters');
  }
  const bytes = new Uint8Array(16);
  for (let index = 0; index < bytes.length; index += 1) {
    const offset = index * 2;
    bytes[index] = Number.parseInt(runSeedHex.slice(offset, offset + 2), 16);
  }
  return bytes;
}

function writeU64BigEndian(target: Uint8Array, offset: number, value: bigint): number {
  assertU64(value, 'u64');
  let remaining = value;
  for (let byteIndex = 7; byteIndex >= 0; byteIndex -= 1) {
    target[offset + byteIndex] = Number(remaining & 0xffn);
    remaining >>= 8n;
  }
  return offset + 8;
}

function readU64BigEndian(bytes: Uint8Array): bigint {
  if (bytes.byteLength < 8) {
    throw new RangeError('At least eight digest bytes are required for a u64 draw');
  }
  let value = 0n;
  for (let index = 0; index < 8; index += 1) {
    value = (value << 8n) | BigInt(bytes[index] ?? 0);
  }
  return value;
}

export function bytesToHex(bytes: Uint8Array): string {
  let output = '';
  for (const byte of bytes) {
    output += byte.toString(16).padStart(2, '0');
  }
  return output;
}

export function encodeP5RngV1Input(key: P5RngStreamKey, drawIndex: bigint): Uint8Array {
  const runSeed = decodeRunSeed(key.runSeedHex);
  assertAscii(key.contentPackId, 'contentPackId', 64);
  assertAscii(key.contentPackVersion, 'contentPackVersion', 64);
  assertU64(key.originTransitionSeq, 'originTransitionSeq');
  assertAscii(key.triggerId, 'triggerId', 64);
  if (!channelSet.has(key.channel)) {
    throw new RangeError(`Unsupported P5 RNG channel: ${key.channel}`);
  }
  assertAscii(key.subjectId, 'subjectId', 128);
  assertU64(drawIndex, 'drawIndex');

  const packId = encoder.encode(key.contentPackId);
  const packVersion = encoder.encode(key.contentPackVersion);
  const triggerId = encoder.encode(key.triggerId);
  const channel = encoder.encode(key.channel);
  const subjectId = encoder.encode(key.subjectId);

  const totalLength =
    domainBytes.byteLength + 1 +
    runSeed.byteLength + 1 +
    packId.byteLength + 1 +
    packVersion.byteLength + 1 +
    8 + 1 +
    triggerId.byteLength + 1 +
    channel.byteLength + 1 +
    subjectId.byteLength + 1 +
    8;

  const output = new Uint8Array(totalLength);
  let offset = 0;
  output.set(domainBytes, offset); offset += domainBytes.byteLength;
  output[offset] = 0; offset += 1;
  output.set(runSeed, offset); offset += runSeed.byteLength;
  output[offset] = 0; offset += 1;
  output.set(packId, offset); offset += packId.byteLength;
  output[offset] = 0; offset += 1;
  output.set(packVersion, offset); offset += packVersion.byteLength;
  output[offset] = 0; offset += 1;
  offset = writeU64BigEndian(output, offset, key.originTransitionSeq);
  output[offset] = 0; offset += 1;
  output.set(triggerId, offset); offset += triggerId.byteLength;
  output[offset] = 0; offset += 1;
  output.set(channel, offset); offset += channel.byteLength;
  output[offset] = 0; offset += 1;
  output.set(subjectId, offset); offset += subjectId.byteLength;
  output[offset] = 0; offset += 1;
  offset = writeU64BigEndian(output, offset, drawIndex);

  if (offset !== output.byteLength) {
    throw new Error('P5 RNG encoder length mismatch');
  }
  return output;
}

export async function deriveP5RngRawDraw(
  hashProvider: HashProvider,
  key: P5RngStreamKey,
  drawIndex: bigint,
): Promise<P5RawDraw> {
  const input = encodeP5RngV1Input(key, drawIndex);
  const digest = await hashProvider.sha256(input);
  if (digest.byteLength !== 32) {
    throw new Error(`SHA-256 provider returned ${digest.byteLength} bytes instead of 32`);
  }
  return {
    drawIndex,
    sha256Hex: bytesToHex(digest),
    rawU64: readU64BigEndian(digest),
  };
}

export async function drawP5Bounded(
  hashProvider: HashProvider,
  key: P5RngStreamKey,
  startDrawIndex: bigint,
  bound: bigint,
): Promise<P5BoundedDrawResult> {
  assertU64(startDrawIndex, 'startDrawIndex');
  if (bound <= 0n || bound > U64_SPACE) {
    throw new RangeError('bound must be in 1..2^64');
  }

  const limit = U64_SPACE - (U64_SPACE % bound);
  const records: P5BoundedDrawRecord[] = [];
  let drawIndex = startDrawIndex;

  for (;;) {
    const raw = await deriveP5RngRawDraw(hashProvider, key, drawIndex);
    const accepted = raw.rawU64 < limit;
    if (accepted) {
      const value = raw.rawU64 % bound;
      records.push({ ...raw, accepted: true, boundedResult: value });
      if (drawIndex === U64_MAX) {
        throw new RangeError('drawIndex overflow after accepted draw');
      }
      return { value, nextDrawIndex: drawIndex + 1n, draws: records };
    }

    records.push({ ...raw, accepted: false });
    if (drawIndex === U64_MAX) {
      throw new RangeError('drawIndex overflow during rejection sampling');
    }
    drawIndex += 1n;
  }
}

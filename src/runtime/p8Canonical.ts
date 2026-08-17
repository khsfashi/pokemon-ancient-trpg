import type { P8AuthorityState } from '../domain/p8Authority';
import { p8AuthorityStateToJson } from '../domain/p8Authority';
import type { JsonValue } from '../saves/jsonValue';
import type { HashProvider } from './hashProvider';
import { bytesToHex } from './p5Rng';

function canonicalize(value: JsonValue): string {
  if (value === null || typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string') {
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) return `[${value.map(canonicalize).join(',')}]`;
  const keys = Object.keys(value).sort((left, right) => left < right ? -1 : left > right ? 1 : 0);
  return `{${keys.map((key) => `${JSON.stringify(key)}:${canonicalize(value[key]!)}`).join(',')}}`;
}

export function canonicalP8AuthorityStateJson(state: P8AuthorityState): string {
  return canonicalize(p8AuthorityStateToJson(state));
}

export async function digestP8AuthorityState(hashProvider: HashProvider, state: P8AuthorityState): Promise<string> {
  const bytes = new TextEncoder().encode(canonicalP8AuthorityStateJson(state));
  const digest = await hashProvider.sha256(bytes);
  if (digest.byteLength !== 32) throw new Error(`SHA-256 provider returned ${digest.byteLength} bytes instead of 32`);
  return bytesToHex(digest);
}

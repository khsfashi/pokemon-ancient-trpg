import { describe, expect, it } from 'vitest';
import {
  getEventDescriptor,
  getEventIdsForTrigger,
  getResourceDescriptor,
  getSemanticAdapterDescriptor,
  getSpeciesDescriptor,
  runtimeContentIdentity,
  runtimePack,
} from '../src/generated';

function canonicalJson(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(',')}]`;
  if (value !== null && typeof value === 'object') {
    const source = value as Record<string, unknown>;
    const members = Object.keys(source)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${canonicalJson(source[key])}`);
    return `{${members.join(',')}}`;
  }
  return JSON.stringify(value);
}

async function sha256Hex(text: string): Promise<string> {
  const digest = await globalThis.crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
}

describe('P7 generated runtime pack', () => {
  it('pins exact content identity and reproduces the canonical pack digest', async () => {
    const { content_digest_sha256: expectedDigest, ...unsignedPack } = runtimePack;

    expect(runtimeContentIdentity).toEqual({
      contentPackId: 'p7.contract-fixtures',
      contentPackVersion: '1',
      contentDigestSha256: expectedDigest,
    });
    expect(expectedDigest).toMatch(/^[0-9a-f]{64}$/);
    expect(await sha256Hex(canonicalJson(unsignedPack))).toBe(expectedDigest);
  });

  it('emits deterministic trigger and event indexes without rebuilding candidate lists', () => {
    expect(Object.keys(runtimePack.event_index)).toHaveLength(7);
    expect(Object.keys(runtimePack.trigger_index)).toEqual([
      'event_chain_advanced',
      'location_entered',
      'player_action_committed',
      'travel_step_committed',
    ]);
    expect(getEventIdsForTrigger('event_chain_advanced')).toEqual([
      'fixture.d034.exceptional.chronology',
      'fixture.faction.chain.entry',
      'fixture.faction.chain.followup',
    ]);
    expect(getEventIdsForTrigger('location_entered')).toEqual([
      'fixture.human.social.obligation',
      'fixture.pokemon.direct.interaction',
    ]);
    expect(getEventDescriptor('fixture.pokemon.direct.interaction')?.content_revision).toBe(1);

    const missingA = getEventIdsForTrigger('missing.trigger');
    const missingB = getEventIdsForTrigger('missing.trigger');
    expect(missingA).toHaveLength(0);
    expect(missingA).toBe(missingB);
  });

  it('provides dense cached species lookup for the full mandatory 1..151 roster', () => {
    expect(Object.keys(runtimePack.species_index)).toHaveLength(151);
    expect(getSpeciesDescriptor(1)?.species_key).toBe('bulbasaur');
    expect(getSpeciesDescriptor(15)).toMatchObject({
      species_key: 'beedrill',
      dossier_status: 'complete',
      dossier_descriptor_id: 'p4.species.015.beedrill',
    });
    expect(getSpeciesDescriptor(151)?.species_key).toBe('mew');
    expect(getSpeciesDescriptor(0)).toBeUndefined();
    expect(getSpeciesDescriptor(152)).toBeUndefined();
    expect(getSpeciesDescriptor(1.5)).toBeUndefined();
  });

  it('keeps resource descriptors public-safe while retaining local-only fallback metadata', () => {
    expect(Object.keys(runtimePack.resource_index)).toHaveLength(7);
    expect(getResourceDescriptor('ui.icon.action.confirm')?.availability).toBe('public_build_time_import');
    expect(getResourceDescriptor('pokemon.001.companion.icon.default')).toMatchObject({
      availability: 'optional_local_only',
      public_distribution: 'not_cleared',
      fallback_mode: 'generic_placeholder',
    });

    const serializedResources = JSON.stringify(runtimePack.resource_index);
    for (const forbidden of [
      'http://',
      'https://',
      'pokeapi.co',
      'raw.githubusercontent.com',
      'canonical_url',
      'asset_locator',
    ]) {
      expect(serializedResources).not.toContain(forbidden);
    }
  });

  it('indexes every semantic adapter category by stable ID', () => {
    expect(Object.keys(runtimePack.semantic_adapter_index)).toHaveLength(92);
    expect(getSemanticAdapterDescriptor('p3.check.resolve')).toMatchObject({
      adapter_id: 'p3.check.resolve',
      kind: 'check_adapter',
      owner: 'P3',
      rng_channel: 'check.d6',
    });
    expect(getSemanticAdapterDescriptor('p4.encounter.route_is_eligible')).toMatchObject({
      kind: 'pure_predicate',
      reads: ['p4.encounter.direct_route_eligibility'],
    });
    expect(getSemanticAdapterDescriptor('p4.encounter.record_direct_interaction')).toMatchObject({
      kind: 'command',
      owner: 'P4',
    });
    expect(getSemanticAdapterDescriptor('__proto__')).toBeUndefined();
  });
});

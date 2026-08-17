import { describe, expect, it } from 'vitest';
import { createInitialP8AuthorityState, prevalidateAndApplyDomainCommands } from '../src/domain/p8Authority';
import {
  createP8SliceCharacter,
  P8_SLICE_EVENT_CATALOG,
  P8_SLICE_PRESENTATION_PROMPTS,
  P8_SLICE_REPLAYS,
  P8_SLICE_REPRESENTED_PILLARS,
  P8_SLICE_SPECIES,
  P8_SLICE_TRIGGER_INDEX,
} from '../src/content/p8SliceContent';
import { runP8SliceReplay } from '../src/content/p8SliceReplay';
import { WebCryptoHashProvider } from '../src/platform/webCryptoHashProvider';

const hash = new WebCryptoHashProvider();

describe('P8 Batch 03 generated authored content pack', () => {
  it('exposes three fiction-first prompts, the traced P4 species subset, and every mixed-world pillar', () => {
    expect(P8_SLICE_PRESENTATION_PROMPTS).toHaveLength(3);
    expect(P8_SLICE_SPECIES.map((species) => species.dossierDescriptorId)).toEqual([
      'p4.species.013.weedle',
      'p4.species.015.beedrill',
      'p4.species.019.rattata',
    ]);
    expect(P8_SLICE_REPRESENTED_PILLARS).toEqual([
      'ending_inputs',
      'mixed_human_pokemon',
      'ordinary_human_pressure',
      'persistent_relationship',
      'pokemon_ecology',
      'travel_survival',
    ]);
  });

  it('keeps generated trigger indexes aligned with the cached P8 event catalog', () => {
    for (const [triggerId, expectedIds] of Object.entries(P8_SLICE_TRIGGER_INDEX)) {
      const actualIds = P8_SLICE_EVENT_CATALOG.candidates(triggerId as Parameters<typeof P8_SLICE_EVENT_CATALOG.candidates>[0]).map((event) => event.eventId);
      expect(actualIds).toEqual(expectedIds);
    }
  });
});

describe('P8 Batch 03 locality ownership', () => {
  it('commits locality only through a typed transition with a matching authoritative origin', () => {
    const definition = P8_SLICE_REPLAYS.zeroCompanion;
    const state = createInitialP8AuthorityState(createP8SliceCharacter(definition.character), 'reedbank-settlement', {
      provisions: 3,
      remedies: 1,
      materials: 0,
    });
    expect(() => prevalidateAndApplyDomainCommands(state, [{
      commandId: 'p2.world.commit_locality_transition',
      fromLocality: 'old-levee',
      toLocality: 'windbreak-orchard',
      routeRef: 'old-levee-orchard',
    }])).toThrow(/origin mismatch/);

    const moved = prevalidateAndApplyDomainCommands(state, [{
      commandId: 'p2.world.commit_locality_transition',
      fromLocality: 'reedbank-settlement',
      toLocality: 'old-levee',
      routeRef: 'reedbank-old-levee',
    }]);
    expect(moved.world.currentLocality).toBe('old-levee');
    expect(state.world.currentLocality).toBe('reedbank-settlement');
  });
});

describe('P8 Batch 03 deterministic authored replay', () => {
  it('completes the coherent 0/3 route twice with byte/semantic-equivalent authority evidence', async () => {
    const first = await runP8SliceReplay(hash, P8_SLICE_REPLAYS.zeroCompanion);
    const second = await runP8SliceReplay(hash, P8_SLICE_REPLAYS.zeroCompanion);

    expect(first.transitionSeq).toBe('7');
    expect(first.checkpoints).toEqual(second.checkpoints);
    expect(JSON.stringify(first.stateJson)).toBe(JSON.stringify(second.stateJson));
    expect(first.state.pokemon.companionSlots).toEqual([null, null, null]);
    expect(first.state.world.currentLocality).toBe('reedbank-settlement');
    expect(first.state.world.relationships).toMatchObject({
      'reedbank.steward': 'entrusted',
      'reedbank.millkeeper': 'expects_return',
      'orchard.keeper': 'route_respected',
    });
    expect(first.state.survival.resourcePools.provisions).toBe(2);
    expect(first.state.pokemon.directInteractions).toEqual([
      '13:weedle.crossing:old-levee',
      '15:beedrill.windbreak:old-levee',
      '19:rattata.storetrail:old-levee',
    ]);
    expect(first.state.events.narrativeFlags['slice.ending_ready']).toBe(true);
    expect(first.state.events.narrativeFlags['slice.zero_companion_route_complete']).toBe(true);
  });

  it('replays the alternate checked ecology choice and preserves a distinct consequence lane', async () => {
    const result = await runP8SliceReplay(hash, P8_SLICE_REPLAYS.alternate);
    const ecology = result.checkpoints.find((checkpoint) => checkpoint.eventId === 'slice.ecology.weedle_crossing');

    expect(result.transitionSeq).toBe('7');
    expect(ecology?.choiceId).toBe('read_signs');
    expect(ecology?.checkOutcomeBand).toBeDefined();
    expect(result.state.pokemon.companionSlots).toEqual([null, null, null]);
    expect(result.state.world.relationships['orchard.keeper']).toBe('route_strained');
    expect(result.state.events.narrativeCounters['slice.social_cost']).toBe(1);
    expect(result.state.events.narrativeFlags['slice.ending_ready']).toBe(true);
  });
});

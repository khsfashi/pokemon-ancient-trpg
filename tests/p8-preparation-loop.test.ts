import { describe, expect, it } from 'vitest';
import { createInitialP8AuthorityState, type P8AuthorityState, type P8CharacterState } from '../src/domain/p8Authority';
import {
  commitP8PreparationAction,
  deriveP8PreparationProjection,
  type P8PreparationActionId,
} from '../src/domain/p8Preparation';

function character(): P8CharacterState {
  return {
    formativeAnswerIds: ['memory.home', 'memory.rupture', 'memory.work'],
    originId: 'river_household',
    practiceId: 'route_guide',
    attributes: {
      strength: 1,
      endurance: 1,
      agility: 2,
      sense: 2,
      intellect: 1,
      will: 1,
      presence: 1,
    },
    trainedCompetences: { tracking: 1, first_aid: 1 },
  };
}

function returnedState(
  provisions = 2,
  includeRattataEvidence = true,
): P8AuthorityState {
  const initial = createInitialP8AuthorityState(
    character(),
    'reedbank-settlement',
    { provisions, remedies: 1, materials: 0 },
  );
  return {
    ...initial,
    pokemon: {
      ...initial.pokemon,
      directInteractions: includeRattataEvidence
        ? ['13:weedle.crossing:old-levee', '15:beedrill.windbreak:old-levee', '19:rattata.storetrail:old-levee']
        : ['13:weedle.crossing:old-levee'],
    },
    events: {
      ...initial.events,
      narrativeFlags: {
        ...initial.events.narrativeFlags,
        'slice.ending_ready': true,
        'slice.zero_companion_route_complete': true,
      },
    },
  };
}

function resourceUnits(state: P8AuthorityState): number {
  const pools = state.survival.resourcePools;
  return pools.provisions + pools.remedies + pools.materials;
}

function apply(state: P8AuthorityState, actionId: P8PreparationActionId): P8AuthorityState {
  return commitP8PreparationAction(state, actionId);
}

describe('P8.2 bounded medieval-fantasy preparation loop', () => {
  it('turns one return into gather -> repair -> forage -> non-lethal hunt -> barter without inflating total carried resources', () => {
    const returned = returnedState();
    const initialResourceUnits = resourceUnits(returned);
    const initialEquipment = returned.survival.equipment;
    const initialCompanions = returned.pokemon.companionSlots;

    let state = apply(returned, 'gather.repair-stock');
    expect(state.survival.resourcePools).toEqual({ provisions: 2, remedies: 1, materials: 1 });
    expect(state.events.narrativeFlags['slice.prep.mundane_materials_only']).toBe(true);

    state = apply(state, 'repair.wet-route-gear');
    expect(state.survival.resourcePools.materials).toBe(0);
    expect(state.events.narrativeFlags['slice.prep.gear_serviced']).toBe(true);

    state = apply(state, 'forage.bank-edge');
    expect(state.survival.resourcePools.provisions).toBe(3);

    state = apply(state, 'hunt.rattata-storetrail');
    expect(state.survival.resourcePools.provisions).toBe(2);
    expect(state.events.narrativeFlags['slice.prep.rattata_route_marked']).toBe(true);
    expect(state.events.narrativeFlags['slice.prep.hunt_nonlethal']).toBe(true);
    expect(state.events.narrativeFlags['slice.prep.no_pokemon_harvest']).toBe(true);

    state = apply(state, 'trade.provision-for-remedy');
    expect(state.survival.resourcePools).toEqual({ provisions: 1, remedies: 2, materials: 0 });
    expect(state.events.narrativeFlags['slice.prep.local_barter_only']).toBe(true);
    expect(resourceUnits(state)).toBe(initialResourceUnits);
    expect(state.survival.equipment).toBe(initialEquipment);
    expect(state.pokemon.companionSlots).toBe(initialCompanions);

    const projection = deriveP8PreparationProjection(state);
    expect(projection.complete).toBe(true);
    expect(projection.completedActions).toBe(5);
    expect(projection.gearServiced).toBe(true);
    expect(projection.rattataRouteMarked).toBe(true);
    expect(projection.departureReady).toBe(true);
    expect(state.events.narrativeFlags['slice.prep.complete']).toBe(true);
  });

  it('makes every harvest/preparation opportunity one-shot for the return so resources cannot be farmed infinitely', () => {
    const gathered = apply(returnedState(), 'gather.repair-stock');
    expect(() => apply(gathered, 'gather.repair-stock')).toThrow(/already-complete/);

    const foraged = apply(gathered, 'forage.bank-edge');
    expect(() => apply(foraged, 'forage.bank-edge')).toThrow(/already-complete/);

    expect(deriveP8PreparationProjection(foraged).actions.find((action) => action.actionId === 'gather.repair-stock')).toMatchObject({
      completed: true,
      available: false,
      blockedReason: 'already-complete',
    });
  });

  it('requires the authored Rattata interaction and spends bait instead of manufacturing generic Pokémon loot', () => {
    const withoutEvidence = returnedState(2, false);
    const hunt = deriveP8PreparationProjection(withoutEvidence).actions.find((action) => action.actionId === 'hunt.rattata-storetrail');
    expect(hunt).toMatchObject({ available: false, blockedReason: 'rattata-sign-missing' });
    expect(() => apply(withoutEvidence, 'hunt.rattata-storetrail')).toThrow(/rattata-sign-missing/);

    const withEvidence = returnedState(2, true);
    const hunted = apply(withEvidence, 'hunt.rattata-storetrail');
    expect(hunted.survival.resourcePools.provisions).toBe(1);
    expect(hunted.survival.resourcePools.materials).toBe(0);
    expect(hunted.events.narrativeFlags['slice.prep.no_pokemon_harvest']).toBe(true);
  });

  it('never allows barter or repair to drive a resource pool below zero', () => {
    const noFood = returnedState(0);
    expect(deriveP8PreparationProjection(noFood).actions.find((action) => action.actionId === 'trade.provision-for-remedy')).toMatchObject({
      available: false,
      blockedReason: 'provisions-required',
    });
    expect(() => apply(noFood, 'trade.provision-for-remedy')).toThrow(/provisions-required/);

    expect(deriveP8PreparationProjection(noFood).actions.find((action) => action.actionId === 'repair.wet-route-gear')).toMatchObject({
      available: false,
      blockedReason: 'materials-required',
    });
    expect(() => apply(noFood, 'repair.wet-route-gear')).toThrow(/materials-required/);
  });

  it('stays locked before the return and is independent of companion count', () => {
    const beforeReturn = createInitialP8AuthorityState(character(), 'reedbank-settlement', { provisions: 2, remedies: 1, materials: 0 });
    const locked = deriveP8PreparationProjection(beforeReturn);
    expect(locked.unlocked).toBe(false);
    expect(locked.actions.every((action) => action.blockedReason === 'return-required')).toBe(true);

    const zeroCompanion = returnedState();
    const threeCompanion: P8AuthorityState = {
      ...zeroCompanion,
      pokemon: {
        ...zeroCompanion.pokemon,
        companionSlots: [
          { speciesId: 10, willingnessRef: 'test.one' },
          { speciesId: 16, willingnessRef: 'test.two' },
          { speciesId: 29, willingnessRef: 'test.three' },
        ],
      },
    };
    const zeroActions = deriveP8PreparationProjection(zeroCompanion).actions.map((action) => [action.actionId, action.available]);
    const threeActions = deriveP8PreparationProjection(threeCompanion).actions.map((action) => [action.actionId, action.available]);
    expect(threeActions).toEqual(zeroActions);
  });

  it('caches the read-only projection by authority identity and invalidates it after a committed action', () => {
    const returned = returnedState();
    const first = deriveP8PreparationProjection(returned);
    expect(deriveP8PreparationProjection(returned)).toBe(first);

    const gathered = apply(returned, 'gather.repair-stock');
    const changed = deriveP8PreparationProjection(gathered);
    expect(changed).not.toBe(first);
    expect(changed.completedActions).toBe(1);
  });
});

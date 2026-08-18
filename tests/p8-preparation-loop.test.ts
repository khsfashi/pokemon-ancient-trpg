import { describe, expect, it } from 'vitest';
import { createInitialP8AuthorityState, type P8AuthorityState, type P8CharacterState } from '../src/domain/p8Authority';
import { deriveP8EquipmentProjection } from '../src/domain/p8Equipment';
import {
  commitP8PreparationAction,
  deriveP8PreparationProjection,
  type P8PreparationActionId,
} from '../src/domain/p8Preparation';
import { deriveP8SurvivalPressure } from '../src/domain/p8Survival';

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
  remedies = 1,
  includeRattataEvidence = true,
): P8AuthorityState {
  const initial = createInitialP8AuthorityState(
    character(),
    'reedbank-settlement',
    { provisions, remedies, materials: 0 },
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

function prepareRoute(state: P8AuthorityState): P8AuthorityState {
  return apply(apply(state, 'gather.repair-stock'), 'forage.bank-edge');
}

describe('P8.2 coherent survival preparation loop', () => {
  it('runs settlement prep -> real travel/risk -> field recovery -> return -> gear improvement/barter', () => {
    const returned = returnedState();
    const initialResourceUnits = resourceUnits(returned);
    const initialCompanions = returned.pokemon.companionSlots;

    let state = apply(returned, 'gather.repair-stock');
    expect(state.world.currentLocality).toBe('reedbank-settlement');
    expect(state.survival.resourcePools).toEqual({ provisions: 2, remedies: 1, materials: 1 });
    expect(state.events.narrativeFlags['slice.prep.mundane_materials_only']).toBe(true);

    state = apply(state, 'forage.bank-edge');
    expect(state.world.currentLocality).toBe('reedbank-settlement');
    expect(state.survival.resourcePools.provisions).toBe(3);

    state = apply(state, 'hunt.rattata-storetrail');
    expect(state.world.currentLocality).toBe('old-levee');
    expect(state.survival.resourcePools).toEqual({ provisions: 2, remedies: 1, materials: 2 });
    expect(state.events.narrativeFlags['slice.prep.rattata_route_marked']).toBe(true);
    expect(state.events.narrativeFlags['slice.prep.hunt_nonlethal']).toBe(true);
    expect(state.events.narrativeFlags['slice.prep.no_pokemon_harvest']).toBe(true);
    expect(state.events.narrativeFlags['slice.prep.rattata_linked_salvage']).toBe(true);

    const hurt = deriveP8SurvivalPressure(state);
    expect(hurt).toMatchObject({ vitalityCurrent: 4, vitalityMax: 5, fatigueStage: 2, fatigueLimit: 2, injuries: 1 });
    const injuredLoad = deriveP8EquipmentProjection(state.character, state.survival, hurt.injuries);
    expect(injuredLoad.comfortableLoad).toBe(6);

    state = apply(state, 'camp.rest-and-treat');
    expect(state.world.currentLocality).toBe('reedbank-settlement');
    expect(state.survival.resourcePools).toEqual({ provisions: 1, remedies: 0, materials: 2 });
    expect(deriveP8SurvivalPressure(state)).toMatchObject({ vitalityCurrent: 5, fatigueStage: 1, fatigueLimit: 2, injuries: 0 });
    expect(state.events.narrativeFlags['slice.prep.camp_recovered']).toBe(true);
    expect(state.events.narrativeFlags['slice.prep.returned_from_field_loop']).toBe(true);

    state = apply(state, 'repair.wet-route-gear');
    expect(state.survival.resourcePools.materials).toBe(1);
    expect(state.survival.equipment.equippedItemIds.guard).toBe('hide.buckler');
    expect(state.events.narrativeFlags['slice.prep.gear_serviced']).toBe(true);
    expect(deriveP8EquipmentProjection(state.character, state.survival, 0).defenseReadiness).toBeGreaterThan(
      deriveP8EquipmentProjection(returned.character, returned.survival, 0).defenseReadiness,
    );

    state = apply(state, 'trade.provision-for-remedy');
    expect(state.world.currentLocality).toBe('reedbank-settlement');
    expect(state.survival.resourcePools).toEqual({ provisions: 0, remedies: 1, materials: 1 });
    expect(state.events.narrativeFlags['slice.prep.local_barter_only']).toBe(true);
    expect(resourceUnits(state)).toBeLessThanOrEqual(initialResourceUnits + 2);
    expect(state.pokemon.companionSlots).toBe(initialCompanions);

    const projection = deriveP8PreparationProjection(state);
    expect(projection.complete).toBe(true);
    expect(projection.completedActions).toBe(6);
    expect(projection.totalActions).toBe(6);
    expect(projection.gearServiced).toBe(true);
    expect(projection.rattataRouteMarked).toBe(true);
    expect(projection.campRecovered).toBe(true);
    expect(projection.departureReady).toBe(true);
    expect(state.events.narrativeFlags['slice.prep.complete']).toBe(true);
  });

  it('makes hunt and retreat mutually exclusive, but both really leave Reedbank for the old levee', () => {
    let state = prepareRoute(returnedState());
    const before = deriveP8SurvivalPressure(state);

    state = apply(state, 'flee.rattata-storetrail');
    expect(state.world.currentLocality).toBe('old-levee');
    expect(deriveP8SurvivalPressure(state)).toMatchObject({
      vitalityCurrent: before.vitalityCurrent,
      fatigueStage: 1,
      injuries: 0,
    });
    expect(state.survival.resourcePools.materials).toBe(1);
    expect(state.events.narrativeFlags['slice.prep.rattata_hazard_avoided']).toBe(true);
    expect(() => apply(state, 'hunt.rattata-storetrail')).toThrow(/already-complete/);
    expect(deriveP8PreparationProjection(state).actions.find((action) => action.actionId === 'hunt.rattata-storetrail')).toMatchObject({
      completed: false,
      available: false,
      blockedReason: 'already-complete',
    });
    expect(deriveP8PreparationProjection(state).actions.find((action) => action.actionId === 'camp.rest-and-treat')).toMatchObject({
      available: true,
    });
  });

  it('requires field preparation and authored Rattata evidence before either travel-risk route', () => {
    const returned = returnedState();
    expect(deriveP8PreparationProjection(returned).actions.find((action) => action.actionId === 'hunt.rattata-storetrail')).toMatchObject({
      available: false,
      blockedReason: 'route-preparation-required',
    });

    const withoutEvidence = prepareRoute(returnedState(2, 1, false));
    expect(deriveP8PreparationProjection(withoutEvidence).actions.find((action) => action.actionId === 'hunt.rattata-storetrail')).toMatchObject({
      available: false,
      blockedReason: 'rattata-sign-missing',
    });
    expect(deriveP8PreparationProjection(withoutEvidence).actions.find((action) => action.actionId === 'flee.rattata-storetrail')).toMatchObject({
      available: false,
      blockedReason: 'rattata-sign-missing',
    });
  });

  it('requires a remedy to clear a hunt Injury before camp can return the player to Reedbank', () => {
    let state = prepareRoute(returnedState(2, 0));
    state = apply(state, 'hunt.rattata-storetrail');
    expect(state.world.currentLocality).toBe('old-levee');
    expect(deriveP8PreparationProjection(state).actions.find((action) => action.actionId === 'camp.rest-and-treat')).toMatchObject({
      available: false,
      blockedReason: 'remedies-required',
    });
    expect(() => apply(state, 'camp.rest-and-treat')).toThrow(/remedies-required/);
    expect(state.world.currentLocality).toBe('old-levee');
  });

  it('keeps settlement repair and barter locked until camp recovery has returned the player', () => {
    let state = prepareRoute(returnedState());
    state = apply(state, 'flee.rattata-storetrail');
    expect(deriveP8PreparationProjection(state).actions.find((action) => action.actionId === 'repair.wet-route-gear')).toMatchObject({
      available: false,
      blockedReason: 'camp-recovery-required',
    });

    state = apply(state, 'camp.rest-and-treat');
    expect(state.world.currentLocality).toBe('reedbank-settlement');
    expect(deriveP8SurvivalPressure(state)).toMatchObject({ fatigueStage: 0, fatigueLimit: 2 });
    expect(deriveP8PreparationProjection(state).actions.find((action) => action.actionId === 'repair.wet-route-gear')).toMatchObject({ available: true });
    expect(deriveP8PreparationProjection(state).actions.find((action) => action.actionId === 'trade.provision-for-remedy')).toMatchObject({
      available: false,
      blockedReason: 'gear-improvement-required',
    });
  });

  it('makes every preparation opportunity one-shot and keeps the loop independent of companion count', () => {
    const gathered = apply(returnedState(), 'gather.repair-stock');
    expect(() => apply(gathered, 'gather.repair-stock')).toThrow(/already-complete/);
    const foraged = apply(gathered, 'forage.bank-edge');
    expect(() => apply(foraged, 'forage.bank-edge')).toThrow(/already-complete/);

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

  it('stays locked before the first return and caches projections only while authority identity is unchanged', () => {
    const beforeReturn = createInitialP8AuthorityState(character(), 'reedbank-settlement', { provisions: 2, remedies: 1, materials: 0 });
    const locked = deriveP8PreparationProjection(beforeReturn);
    expect(locked.unlocked).toBe(false);
    expect(locked.actions.every((action) => action.blockedReason === 'return-required')).toBe(true);

    const returned = returnedState();
    const first = deriveP8PreparationProjection(returned);
    expect(deriveP8PreparationProjection(returned)).toBe(first);
    const gathered = apply(returned, 'gather.repair-stock');
    const changed = deriveP8PreparationProjection(gathered);
    expect(changed).not.toBe(first);
    expect(changed.completedActions).toBe(1);
  });
});

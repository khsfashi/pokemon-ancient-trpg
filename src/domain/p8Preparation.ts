import {
  prevalidateAndApplyDomainCommands,
  type P8AuthorityState,
  type P8DomainCommand,
  type P8ResourcePoolId,
} from './p8Authority';
import { deriveP8EquipmentProjection } from './p8Equipment';

export const P8_PREPARATION_ACTION_IDS = [
  'gather.repair-stock',
  'repair.wet-route-gear',
  'forage.bank-edge',
  'hunt.rattata-storetrail',
  'trade.provision-for-remedy',
] as const;

export type P8PreparationActionId = (typeof P8_PREPARATION_ACTION_IDS)[number];
export type P8PreparationActionKind = 'gather' | 'repair' | 'forage' | 'hunt' | 'trade';
export type P8PreparationBlockedReason =
  | 'return-required'
  | 'already-complete'
  | 'materials-required'
  | 'provisions-required'
  | 'rattata-sign-missing'
  | 'field-readiness-required';

export interface P8PreparationResourceDelta {
  readonly poolId: P8ResourcePoolId;
  readonly delta: number;
}

export interface P8PreparationActionView {
  readonly actionId: P8PreparationActionId;
  readonly kind: P8PreparationActionKind;
  readonly completed: boolean;
  readonly available: boolean;
  readonly blockedReason: P8PreparationBlockedReason | null;
  readonly resourceDeltas: readonly P8PreparationResourceDelta[];
}

export interface P8PreparationProjection {
  readonly unlocked: boolean;
  readonly complete: boolean;
  readonly completedActions: number;
  readonly totalActions: number;
  readonly gearServiced: boolean;
  readonly rattataRouteMarked: boolean;
  readonly departureReady: boolean;
  readonly currentLoad: number;
  readonly ordinaryTravelCeiling: number;
  readonly actions: readonly P8PreparationActionView[];
}

interface PreparationActionDefinition {
  readonly actionId: P8PreparationActionId;
  readonly kind: P8PreparationActionKind;
  readonly completionFlag: string;
  readonly semanticFlags: readonly string[];
  readonly resourceDeltas: readonly P8PreparationResourceDelta[];
}

const ENDING_READY_FLAG = 'slice.ending_ready';
const PREPARATION_COMPLETE_FLAG = 'slice.prep.complete';
const GEAR_SERVICED_FLAG = 'slice.prep.gear_serviced';
const RATTATA_ROUTE_MARKED_FLAG = 'slice.prep.rattata_route_marked';

const ACTIONS: readonly PreparationActionDefinition[] = Object.freeze([
  Object.freeze({
    actionId: 'gather.repair-stock',
    kind: 'gather',
    completionFlag: 'slice.prep.gathered_repair_stock',
    semanticFlags: Object.freeze(['slice.prep.mundane_materials_only']),
    resourceDeltas: Object.freeze([{ poolId: 'materials' as const, delta: 1 }]),
  }),
  Object.freeze({
    actionId: 'repair.wet-route-gear',
    kind: 'repair',
    completionFlag: 'slice.prep.repaired_wet_route_gear',
    semanticFlags: Object.freeze([GEAR_SERVICED_FLAG]),
    resourceDeltas: Object.freeze([{ poolId: 'materials' as const, delta: -1 }]),
  }),
  Object.freeze({
    actionId: 'forage.bank-edge',
    kind: 'forage',
    completionFlag: 'slice.prep.foraged_bank_edge',
    semanticFlags: Object.freeze(['slice.prep.local_foraging_complete']),
    resourceDeltas: Object.freeze([{ poolId: 'provisions' as const, delta: 1 }]),
  }),
  Object.freeze({
    actionId: 'hunt.rattata-storetrail',
    kind: 'hunt',
    completionFlag: 'slice.prep.hunted_rattata_sign',
    semanticFlags: Object.freeze([
      RATTATA_ROUTE_MARKED_FLAG,
      'slice.prep.hunt_nonlethal',
      'slice.prep.no_pokemon_harvest',
    ]),
    // The patrol consumes bait/food. It deliberately grants no Pokémon-derived resource:
    // D-021/P4 require species- and locality-specific authority before such harvesting.
    resourceDeltas: Object.freeze([{ poolId: 'provisions' as const, delta: -1 }]),
  }),
  Object.freeze({
    actionId: 'trade.provision-for-remedy',
    kind: 'trade',
    completionFlag: 'slice.prep.traded_for_remedy',
    semanticFlags: Object.freeze(['slice.prep.local_barter_only']),
    resourceDeltas: Object.freeze([
      { poolId: 'provisions' as const, delta: -1 },
      { poolId: 'remedies' as const, delta: 1 },
    ]),
  }),
]);

const actionById = new Map<P8PreparationActionId, PreparationActionDefinition>(
  ACTIONS.map((action) => [action.actionId, action]),
);
const projectionCache = new WeakMap<P8AuthorityState, P8PreparationProjection>();

function isReturnedToReedbank(state: P8AuthorityState): boolean {
  return state.events.narrativeFlags[ENDING_READY_FLAG] === true
    && state.world.currentLocality === 'reedbank-settlement';
}

function hasRattataStoretrailEvidence(state: P8AuthorityState): boolean {
  return state.pokemon.directInteractions.some((entry) => entry.startsWith('19:rattata.storetrail:'));
}

function completed(state: P8AuthorityState, action: PreparationActionDefinition): boolean {
  return state.events.narrativeFlags[action.completionFlag] === true;
}

function blockedReason(
  state: P8AuthorityState,
  action: PreparationActionDefinition,
): P8PreparationBlockedReason | null {
  if (!isReturnedToReedbank(state)) return 'return-required';
  if (completed(state, action)) return 'already-complete';

  switch (action.actionId) {
    case 'repair.wet-route-gear':
      return state.survival.resourcePools.materials >= 1 ? null : 'materials-required';
    case 'hunt.rattata-storetrail': {
      if (!hasRattataStoretrailEvidence(state)) return 'rattata-sign-missing';
      const readiness = deriveP8EquipmentProjection(state.character, state.survival);
      if (readiness.attackReadiness < 3 && readiness.fieldReadiness < 3) return 'field-readiness-required';
      return state.survival.resourcePools.provisions >= 1 ? null : 'provisions-required';
    }
    case 'trade.provision-for-remedy':
      return state.survival.resourcePools.provisions >= 1 ? null : 'provisions-required';
    case 'gather.repair-stock':
    case 'forage.bank-edge':
      return null;
  }
}

export function deriveP8PreparationProjection(state: P8AuthorityState): P8PreparationProjection {
  const cached = projectionCache.get(state);
  if (cached !== undefined) return cached;

  const readiness = deriveP8EquipmentProjection(state.character, state.survival);
  const actions = ACTIONS.map((action): P8PreparationActionView => {
    const reason = blockedReason(state, action);
    const isComplete = completed(state, action);
    return Object.freeze({
      actionId: action.actionId,
      kind: action.kind,
      completed: isComplete,
      available: reason === null,
      blockedReason: reason,
      resourceDeltas: action.resourceDeltas,
    });
  });
  const completedActions = actions.filter((action) => action.completed).length;
  const complete = state.events.narrativeFlags[PREPARATION_COMPLETE_FLAG] === true
    || completedActions === ACTIONS.length;
  const projection = Object.freeze({
    unlocked: isReturnedToReedbank(state),
    complete,
    completedActions,
    totalActions: ACTIONS.length,
    gearServiced: state.events.narrativeFlags[GEAR_SERVICED_FLAG] === true,
    rattataRouteMarked: state.events.narrativeFlags[RATTATA_ROUTE_MARKED_FLAG] === true,
    departureReady: complete && readiness.currentLoad <= readiness.comfortableLoad + 2,
    currentLoad: readiness.currentLoad,
    ordinaryTravelCeiling: readiness.comfortableLoad + 2,
    actions: Object.freeze(actions),
  });
  projectionCache.set(state, projection);
  return projection;
}

function commandsFor(action: PreparationActionDefinition): readonly P8DomainCommand[] {
  return action.resourceDeltas.map((change) => ({
    commandId: 'p3.inventory.adjust_resource_pool' as const,
    poolId: change.poolId,
    delta: change.delta,
    reasonId: `p8.preparation.${action.actionId}`,
  }));
}

export function commitP8PreparationAction(
  state: P8AuthorityState,
  actionId: P8PreparationActionId,
): P8AuthorityState {
  const action = actionById.get(actionId);
  if (action === undefined) throw new RangeError(`unknown P8 preparation action: ${actionId}`);
  const view = deriveP8PreparationProjection(state).actions.find((candidate) => candidate.actionId === actionId)!;
  if (!view.available) throw new RangeError(`P8 preparation action unavailable: ${actionId} (${view.blockedReason})`);

  const adjusted = prevalidateAndApplyDomainCommands(state, commandsFor(action));
  const narrativeFlags: Record<string, boolean> = {
    ...adjusted.events.narrativeFlags,
    [action.completionFlag]: true,
  };
  for (const flag of action.semanticFlags) narrativeFlags[flag] = true;

  let completedActions = 0;
  for (const definition of ACTIONS) {
    if (definition.actionId === actionId || narrativeFlags[definition.completionFlag] === true) completedActions += 1;
  }
  if (completedActions === ACTIONS.length) narrativeFlags[PREPARATION_COMPLETE_FLAG] = true;

  return {
    ...adjusted,
    events: {
      ...adjusted.events,
      narrativeFlags,
    },
  };
}

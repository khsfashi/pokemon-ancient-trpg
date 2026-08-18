import {
  prevalidateAndApplyDomainCommands,
  type P8AuthorityState,
  type P8DomainCommand,
  type P8ResourcePoolId,
} from './p8Authority';
import { deriveP8EquipmentProjection } from './p8Equipment';
import { applyP8SurvivalPressure, deriveP8SurvivalPressure, type P8SurvivalPressureDelta } from './p8Survival';

export const P8_PREPARATION_ACTION_IDS = [
  'gather.repair-stock',
  'forage.bank-edge',
  'hunt.rattata-storetrail',
  'flee.rattata-storetrail',
  'camp.rest-and-treat',
  'repair.wet-route-gear',
  'trade.provision-for-remedy',
] as const;

export type P8PreparationActionId = (typeof P8_PREPARATION_ACTION_IDS)[number];
export type P8PreparationActionKind = 'gather' | 'forage' | 'hunt' | 'flee' | 'rest' | 'repair' | 'trade';
export type P8PreparationBlockedReason =
  | 'return-required'
  | 'already-complete'
  | 'route-preparation-required'
  | 'encounter-resolution-required'
  | 'camp-recovery-required'
  | 'gear-improvement-required'
  | 'settlement-required'
  | 'field-route-required'
  | 'materials-required'
  | 'provisions-required'
  | 'remedies-required'
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
  readonly campRecovered: boolean;
  readonly departureReady: boolean;
  readonly currentLoad: number;
  readonly ordinaryTravelCeiling: number;
  readonly actions: readonly P8PreparationActionView[];
}

interface PreparationActionDefinition {
  readonly actionId: P8PreparationActionId;
  readonly kind: P8PreparationActionKind;
  readonly completionFlag: string;
  readonly stepFlag: string;
  readonly semanticFlags: readonly string[];
  readonly resourceDeltas: readonly P8PreparationResourceDelta[];
  readonly survivalDelta?: P8SurvivalPressureDelta;
}

const ENDING_READY_FLAG = 'slice.ending_ready';
const PREPARATION_COMPLETE_FLAG = 'slice.prep.complete';
const GEAR_SERVICED_FLAG = 'slice.prep.gear_serviced';
const RATTATA_ROUTE_MARKED_FLAG = 'slice.prep.rattata_route_marked';
const CAMP_RECOVERED_FLAG = 'slice.prep.camp_recovered';
const GATHER_STEP_FLAG = 'slice.prep.step.gathered';
const FORAGE_STEP_FLAG = 'slice.prep.step.foraged';
const ENCOUNTER_STEP_FLAG = 'slice.prep.step.encounter_resolved';
const CAMP_STEP_FLAG = 'slice.prep.step.camp_recovered';
const REPAIR_STEP_FLAG = 'slice.prep.step.gear_improved';
const TRADE_STEP_FLAG = 'slice.prep.step.resupplied';
const PREPARATION_STEP_FLAGS = Object.freeze([
  GATHER_STEP_FLAG,
  FORAGE_STEP_FLAG,
  ENCOUNTER_STEP_FLAG,
  CAMP_STEP_FLAG,
  REPAIR_STEP_FLAG,
  TRADE_STEP_FLAG,
]);
const SETTLEMENT_LOCALITY = 'reedbank-settlement';
const FIELD_LOCALITY = 'old-levee';

const ACTIONS: readonly PreparationActionDefinition[] = Object.freeze([
  Object.freeze({
    actionId: 'gather.repair-stock',
    kind: 'gather',
    completionFlag: 'slice.prep.gathered_repair_stock',
    stepFlag: GATHER_STEP_FLAG,
    semanticFlags: Object.freeze(['slice.prep.mundane_materials_only']),
    resourceDeltas: Object.freeze([{ poolId: 'materials' as const, delta: 1 }]),
  }),
  Object.freeze({
    actionId: 'forage.bank-edge',
    kind: 'forage',
    completionFlag: 'slice.prep.foraged_bank_edge',
    stepFlag: FORAGE_STEP_FLAG,
    semanticFlags: Object.freeze(['slice.prep.local_foraging_complete']),
    resourceDeltas: Object.freeze([{ poolId: 'provisions' as const, delta: 1 }]),
  }),
  Object.freeze({
    actionId: 'hunt.rattata-storetrail',
    kind: 'hunt',
    completionFlag: 'slice.prep.hunted_rattata_sign',
    stepFlag: ENCOUNTER_STEP_FLAG,
    semanticFlags: Object.freeze([
      RATTATA_ROUTE_MARKED_FLAG,
      'slice.prep.hunt_nonlethal',
      'slice.prep.no_pokemon_harvest',
      'slice.prep.rattata_linked_salvage',
    ]),
    // Bait is traded for a chance to recover mundane cordage and leather scraps
    // from an abandoned store-trail cache. Nothing is harvested from Rattata.
    resourceDeltas: Object.freeze([
      { poolId: 'provisions' as const, delta: -1 },
      { poolId: 'materials' as const, delta: 1 },
    ]),
    survivalDelta: Object.freeze({ vitalityDelta: -1, fatigueDelta: 2, injuryDelta: 1 }),
  }),
  Object.freeze({
    actionId: 'flee.rattata-storetrail',
    kind: 'flee',
    completionFlag: 'slice.prep.fled_rattata_sign',
    stepFlag: ENCOUNTER_STEP_FLAG,
    semanticFlags: Object.freeze([
      RATTATA_ROUTE_MARKED_FLAG,
      'slice.prep.rattata_hazard_avoided',
      'slice.prep.no_pokemon_harvest',
    ]),
    resourceDeltas: Object.freeze([]),
    survivalDelta: Object.freeze({ fatigueDelta: 1 }),
  }),
  Object.freeze({
    actionId: 'camp.rest-and-treat',
    kind: 'rest',
    completionFlag: 'slice.prep.rested_field_camp',
    stepFlag: CAMP_STEP_FLAG,
    semanticFlags: Object.freeze([CAMP_RECOVERED_FLAG, 'slice.prep.field_camp_used', 'slice.prep.returned_from_field_loop']),
    resourceDeltas: Object.freeze([{ poolId: 'provisions' as const, delta: -1 }]),
  }),
  Object.freeze({
    actionId: 'repair.wet-route-gear',
    kind: 'repair',
    completionFlag: 'slice.prep.repaired_wet_route_gear',
    stepFlag: REPAIR_STEP_FLAG,
    semanticFlags: Object.freeze([GEAR_SERVICED_FLAG, 'slice.prep.hide_buckler_equipped']),
    resourceDeltas: Object.freeze([{ poolId: 'materials' as const, delta: -1 }]),
  }),
  Object.freeze({
    actionId: 'trade.provision-for-remedy',
    kind: 'trade',
    completionFlag: 'slice.prep.traded_for_remedy',
    stepFlag: TRADE_STEP_FLAG,
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

function preparationUnlocked(state: P8AuthorityState): boolean {
  return state.events.narrativeFlags[ENDING_READY_FLAG] === true;
}

function hasRattataStoretrailEvidence(state: P8AuthorityState): boolean {
  return state.pokemon.directInteractions.some((entry) => entry.startsWith('19:rattata.storetrail:'));
}

function actionCompleted(state: P8AuthorityState, action: PreparationActionDefinition): boolean {
  return state.events.narrativeFlags[action.completionFlag] === true;
}

function stepCompleted(state: P8AuthorityState, stepFlag: string): boolean {
  return state.events.narrativeFlags[stepFlag] === true;
}

function resourceDeltasFor(state: P8AuthorityState, action: PreparationActionDefinition): readonly P8PreparationResourceDelta[] {
  if (action.actionId !== 'camp.rest-and-treat') return action.resourceDeltas;
  const pressure = deriveP8SurvivalPressure(state);
  if (pressure.injuries === 0) return action.resourceDeltas;
  return Object.freeze([
    ...action.resourceDeltas,
    { poolId: 'remedies' as const, delta: -1 },
  ]);
}

function blockedReason(
  state: P8AuthorityState,
  action: PreparationActionDefinition,
): P8PreparationBlockedReason | null {
  if (!preparationUnlocked(state)) return 'return-required';
  if (stepCompleted(state, action.stepFlag)) return 'already-complete';

  switch (action.actionId) {
    case 'gather.repair-stock':
    case 'forage.bank-edge':
      return state.world.currentLocality === SETTLEMENT_LOCALITY ? null : 'settlement-required';
    case 'hunt.rattata-storetrail':
    case 'flee.rattata-storetrail': {
      if (!stepCompleted(state, GATHER_STEP_FLAG) || !stepCompleted(state, FORAGE_STEP_FLAG)) return 'route-preparation-required';
      if (state.world.currentLocality !== SETTLEMENT_LOCALITY) return 'settlement-required';
      if (!hasRattataStoretrailEvidence(state)) return 'rattata-sign-missing';
      if (action.actionId === 'hunt.rattata-storetrail') {
        const pressure = deriveP8SurvivalPressure(state);
        const readiness = deriveP8EquipmentProjection(state.character, state.survival, pressure.injuries);
        if (readiness.attackReadiness < 3 && readiness.fieldReadiness < 3) return 'field-readiness-required';
        if (state.survival.resourcePools.provisions < 1) return 'provisions-required';
      }
      return null;
    }
    case 'camp.rest-and-treat': {
      if (!stepCompleted(state, ENCOUNTER_STEP_FLAG)) return 'encounter-resolution-required';
      if (state.world.currentLocality !== FIELD_LOCALITY) return 'field-route-required';
      if (state.survival.resourcePools.provisions < 1) return 'provisions-required';
      const pressure = deriveP8SurvivalPressure(state);
      return pressure.injuries > 0 && state.survival.resourcePools.remedies < 1 ? 'remedies-required' : null;
    }
    case 'repair.wet-route-gear':
      if (!stepCompleted(state, CAMP_STEP_FLAG)) return 'camp-recovery-required';
      if (state.world.currentLocality !== SETTLEMENT_LOCALITY) return 'settlement-required';
      return state.survival.resourcePools.materials >= 1 ? null : 'materials-required';
    case 'trade.provision-for-remedy':
      if (!stepCompleted(state, REPAIR_STEP_FLAG)) return 'gear-improvement-required';
      if (state.world.currentLocality !== SETTLEMENT_LOCALITY) return 'settlement-required';
      return state.survival.resourcePools.provisions >= 1 ? null : 'provisions-required';
  }
}

export function deriveP8PreparationProjection(state: P8AuthorityState): P8PreparationProjection {
  const cached = projectionCache.get(state);
  if (cached !== undefined) return cached;

  const pressure = deriveP8SurvivalPressure(state);
  const readiness = deriveP8EquipmentProjection(state.character, state.survival, pressure.injuries);
  const actions = ACTIONS.map((action): P8PreparationActionView => {
    const reason = blockedReason(state, action);
    return Object.freeze({
      actionId: action.actionId,
      kind: action.kind,
      completed: actionCompleted(state, action),
      available: reason === null,
      blockedReason: reason,
      resourceDeltas: resourceDeltasFor(state, action),
    });
  });
  const completedActions = PREPARATION_STEP_FLAGS.filter((flag) => stepCompleted(state, flag)).length;
  const complete = state.events.narrativeFlags[PREPARATION_COMPLETE_FLAG] === true
    || completedActions === PREPARATION_STEP_FLAGS.length;
  const projection = Object.freeze({
    unlocked: preparationUnlocked(state),
    complete,
    completedActions,
    totalActions: PREPARATION_STEP_FLAGS.length,
    gearServiced: state.events.narrativeFlags[GEAR_SERVICED_FLAG] === true,
    rattataRouteMarked: state.events.narrativeFlags[RATTATA_ROUTE_MARKED_FLAG] === true,
    campRecovered: state.events.narrativeFlags[CAMP_RECOVERED_FLAG] === true,
    departureReady: complete
      && state.world.currentLocality === SETTLEMENT_LOCALITY
      && !pressure.incapacitated
      && !pressure.collapseRisk
      && readiness.currentLoad <= readiness.comfortableLoad + 2,
    currentLoad: readiness.currentLoad,
    ordinaryTravelCeiling: readiness.comfortableLoad + 2,
    actions: Object.freeze(actions),
  });
  projectionCache.set(state, projection);
  return projection;
}

function resourceCommands(actionId: P8PreparationActionId, deltas: readonly P8PreparationResourceDelta[]): readonly P8DomainCommand[] {
  return deltas.map((change) => ({
    commandId: 'p3.inventory.adjust_resource_pool' as const,
    poolId: change.poolId,
    delta: change.delta,
    reasonId: `p8.preparation.${actionId}`,
  }));
}

function actionCommands(
  state: P8AuthorityState,
  action: PreparationActionDefinition,
  deltas: readonly P8PreparationResourceDelta[],
): readonly P8DomainCommand[] {
  const commands: P8DomainCommand[] = [...resourceCommands(action.actionId, deltas)];
  if (action.actionId === 'hunt.rattata-storetrail' || action.actionId === 'flee.rattata-storetrail') {
    commands.push({
      commandId: 'p2.world.commit_locality_transition',
      fromLocality: SETTLEMENT_LOCALITY,
      toLocality: FIELD_LOCALITY,
      routeRef: 'p8.preparation.old-levee-expedition',
    });
  }
  if (action.actionId === 'camp.rest-and-treat') {
    commands.push({
      commandId: 'p2.world.commit_locality_transition',
      fromLocality: FIELD_LOCALITY,
      toLocality: SETTLEMENT_LOCALITY,
      routeRef: 'p8.preparation.camp-return',
    });
  }
  if (action.actionId === 'repair.wet-route-gear' && state.survival.equipment.equippedItemIds.guard !== 'hide.buckler') {
    commands.push({
      commandId: 'p3.inventory.set_equipment_slot',
      slotId: 'guard',
      itemId: 'hide.buckler',
      reasonId: 'p8.preparation.reinforce_guard',
    });
  }
  return commands;
}

function applySurvivalEffect(state: P8AuthorityState, action: PreparationActionDefinition): P8AuthorityState {
  if (action.actionId === 'camp.rest-and-treat') {
    const pressure = deriveP8SurvivalPressure(state);
    return applyP8SurvivalPressure(state, {
      vitalityDelta: pressure.vitalityMax - pressure.vitalityCurrent,
      fatigueDelta: -pressure.fatigueStage,
      injuryDelta: pressure.injuries > 0 ? -1 : 0,
    });
  }
  return action.survivalDelta === undefined ? state : applyP8SurvivalPressure(state, action.survivalDelta);
}

export function commitP8PreparationAction(
  state: P8AuthorityState,
  actionId: P8PreparationActionId,
): P8AuthorityState {
  const action = actionById.get(actionId);
  if (action === undefined) throw new RangeError(`unknown P8 preparation action: ${actionId}`);
  const view = deriveP8PreparationProjection(state).actions.find((candidate) => candidate.actionId === actionId)!;
  if (!view.available) throw new RangeError(`P8 preparation action unavailable: ${actionId} (${view.blockedReason})`);

  const adjusted = prevalidateAndApplyDomainCommands(state, actionCommands(state, action, view.resourceDeltas));
  const pressured = applySurvivalEffect(adjusted, action);
  const narrativeFlags: Record<string, boolean> = {
    ...pressured.events.narrativeFlags,
    [action.completionFlag]: true,
    [action.stepFlag]: true,
  };
  for (const flag of action.semanticFlags) narrativeFlags[flag] = true;

  const completedActions = PREPARATION_STEP_FLAGS.filter((flag) => narrativeFlags[flag] === true).length;
  if (completedActions === PREPARATION_STEP_FLAGS.length) narrativeFlags[PREPARATION_COMPLETE_FLAG] = true;

  return {
    ...pressured,
    events: {
      ...pressured.events,
      narrativeFlags,
    },
  };
}

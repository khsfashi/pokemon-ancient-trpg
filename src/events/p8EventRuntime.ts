import {
  prevalidateAndApplyDomainCommands,
  type P8AuthorityState,
  type P8DomainCommand,
} from '../domain/p8Authority';
import type { HashProvider } from '../runtime/hashProvider';
import { drawP5Bounded, type P5BoundedDrawRecord, type P5RngStreamKey } from '../runtime/p5Rng';
import { resolveP8StaticCheck, p8CheckDrawsToPending, p8CheckToPendingResult, type P8CheckDegree, type P8StaticCheckSpec } from '../runtime/p8Checks';
import {
  P5_CONTRACT_VERSION,
  P5_PENDING_SCHEMA_VERSION,
  type P5TriggerId,
  type PendingChoiceView,
  type PendingEventInstanceRuntimeV1,
  type PendingRngDrawRecord,
} from '../saves/pendingEvent';

const U63_MAX = (1n << 63n) - 1n;
const RECENT_HISTORY_CAP = 16;

export type P8Condition =
  | boolean
  | { readonly all: readonly P8Condition[] }
  | { readonly any: readonly P8Condition[] }
  | { readonly not: P8Condition }
  | { readonly predicateId: 'p2.world.locality_is'; readonly localityRef: string }
  | { readonly predicateId: 'p2.world.relationship_state_is'; readonly relationshipRef: string; readonly stateId: string }
  | { readonly predicateId: 'p3.inventory.resource_at_least'; readonly poolId: 'provisions' | 'remedies' | 'materials'; readonly amount: number }
  | { readonly predicateId: 'p4.companion.count_equals'; readonly count: 0 | 1 | 2 | 3 }
  | { readonly predicateId: 'p4.companion.slot_is_empty'; readonly slot: 0 | 1 | 2 }
  | { readonly predicateId: 'p5.event.count_at_most'; readonly eventId: string; readonly count: number }
  | { readonly predicateId: 'p5.narrative.flag_is'; readonly flagId: string; readonly value: boolean }
  | { readonly predicateId: 'p5.narrative.counter_at_least'; readonly counterId: string; readonly value: number };

export interface P8WeightModifier { readonly when: P8Condition; readonly addPoints: bigint; }
export interface P8RepeatPolicy {
  readonly maxOccurrences?: number;
  readonly oncePerRun?: boolean;
  readonly cooldownAfterTransitions?: bigint;
  readonly recentWindowPenalty?: bigint;
}
export type P8P5Effect =
  | { readonly operation: 'narrative.flag.set'; readonly ref: string }
  | { readonly operation: 'narrative.flag.clear'; readonly ref: string }
  | { readonly operation: 'narrative.counter.add'; readonly ref: string; readonly amount: number }
  | { readonly operation: 'event.chain.enqueue'; readonly ref: string };
export interface P8EventOutcome {
  readonly outcomeId: string;
  readonly p5Effects: readonly P8P5Effect[];
  readonly domainCommands: readonly P8DomainCommand[];
  readonly enqueueChainSteps: readonly string[];
  readonly postCommitTriggers: readonly P5TriggerId[];
}
export interface P8DirectResolution { readonly kind: 'direct'; readonly outcomeId: string; }
export interface P8CheckedResolution {
  readonly kind: 'check';
  readonly check: P8StaticCheckSpec;
  readonly outcomeMap: Readonly<Record<P8CheckDegree, string>>;
}
export type P8ChoiceResolution = P8DirectResolution | P8CheckedResolution;
export interface P8EventChoice {
  readonly choiceId: string;
  readonly visibleWhen?: P8Condition;
  readonly availableWhen?: P8Condition;
  readonly unavailableReasonId?: string;
  readonly resolution: P8ChoiceResolution;
}
export interface P8EventDefinition {
  readonly eventId: string;
  readonly contentRevision: number;
  readonly triggers: readonly P5TriggerId[];
  readonly eligibility: P8Condition;
  readonly baseWeight: bigint;
  readonly weightModifiers: readonly P8WeightModifier[];
  readonly repeatPolicy: P8RepeatPolicy;
  readonly choices: readonly P8EventChoice[];
  readonly outcomes: readonly P8EventOutcome[];
}
export interface P8ContentIdentity {
  readonly contentPackId: string;
  readonly contentPackVersion: string;
  readonly contentDigestSha256: string;
}
export interface P8SelectionContext extends P8ContentIdentity {
  readonly runSeedHex: string;
  readonly transitionSeq: bigint;
  readonly triggerId: P5TriggerId;
  readonly evaluationOrdinal: number;
  readonly startDrawIndex: bigint;
}
export interface P8SelectedEvent {
  readonly event: P8EventDefinition;
  readonly nextDrawIndex: bigint;
  readonly selectionDraws: readonly P5BoundedDrawRecord[];
}
export interface P8PreparedEvent {
  readonly event: P8EventDefinition;
  readonly pending: PendingEventInstanceRuntimeV1;
  readonly nextDrawIndex: bigint;
}
export interface P8ResolvedEvent {
  readonly state: P8AuthorityState;
  readonly transitionSeq: bigint;
  readonly nextDrawIndex: bigint;
  readonly pending: PendingEventInstanceRuntimeV1;
  readonly postCommitTriggers: readonly P5TriggerId[];
}

function countCompanions(state: P8AuthorityState): number {
  let count = 0;
  for (const slot of state.pokemon.companionSlots) if (slot !== null) count += 1;
  return count;
}

export function evaluateP8Condition(state: P8AuthorityState, condition: P8Condition): boolean {
  if (typeof condition === 'boolean') return condition;
  if ('all' in condition) return condition.all.every((child) => evaluateP8Condition(state, child));
  if ('any' in condition) return condition.any.some((child) => evaluateP8Condition(state, child));
  if ('not' in condition) return !evaluateP8Condition(state, condition.not);
  switch (condition.predicateId) {
    case 'p2.world.locality_is': return state.world.currentLocality === condition.localityRef;
    case 'p2.world.relationship_state_is': return state.world.relationships[condition.relationshipRef] === condition.stateId;
    case 'p3.inventory.resource_at_least': return state.survival.resourcePools[condition.poolId] >= condition.amount;
    case 'p4.companion.count_equals': return countCompanions(state) === condition.count;
    case 'p4.companion.slot_is_empty': return state.pokemon.companionSlots[condition.slot] === null;
    case 'p5.event.count_at_most': return (state.events.counts[condition.eventId] ?? 0) <= condition.count;
    case 'p5.narrative.flag_is': return (state.events.narrativeFlags[condition.flagId] ?? false) === condition.value;
    case 'p5.narrative.counter_at_least': return (state.events.narrativeCounters[condition.counterId] ?? 0) >= condition.value;
  }
}

function repeatEligible(state: P8AuthorityState, event: P8EventDefinition, transitionSeq: bigint): boolean {
  const count = state.events.counts[event.eventId] ?? 0;
  if (event.repeatPolicy.oncePerRun === true && count > 0) return false;
  if (event.repeatPolicy.maxOccurrences !== undefined && count >= event.repeatPolicy.maxOccurrences) return false;
  const cooldown = event.repeatPolicy.cooldownAfterTransitions;
  const last = state.events.lastResolvedTransition[event.eventId];
  return cooldown === undefined || last === undefined || transitionSeq >= last + cooldown;
}

function effectiveWeight(state: P8AuthorityState, event: P8EventDefinition): bigint {
  let weight = event.baseWeight;
  for (const modifier of event.weightModifiers) if (evaluateP8Condition(state, modifier.when)) weight += modifier.addPoints;
  const recentPenalty = event.repeatPolicy.recentWindowPenalty ?? 0n;
  if (recentPenalty > 0n && state.events.recentHistory.includes(event.eventId)) weight -= recentPenalty;
  if (weight < 0n) weight = 0n;
  if (weight > U63_MAX) throw new RangeError(`event weight exceeds u63: ${event.eventId}`);
  return weight;
}

export class P8EventCatalog {
  private readonly byId: ReadonlyMap<string, P8EventDefinition>;
  private readonly byTrigger: ReadonlyMap<P5TriggerId, readonly P8EventDefinition[]>;

  constructor(events: readonly P8EventDefinition[]) {
    const byId = new Map<string, P8EventDefinition>();
    const byTrigger = new Map<P5TriggerId, P8EventDefinition[]>();
    for (const event of events) {
      if (byId.has(event.eventId)) throw new RangeError(`duplicate event id: ${event.eventId}`);
      if (event.baseWeight < 0n || event.baseWeight > U63_MAX) throw new RangeError(`invalid event weight: ${event.eventId}`);
      const outcomes = new Set(event.outcomes.map((outcome) => outcome.outcomeId));
      if (outcomes.size !== event.outcomes.length) throw new RangeError(`duplicate outcome id in ${event.eventId}`);
      for (const choice of event.choices) {
        const ids = choice.resolution.kind === 'direct' ? [choice.resolution.outcomeId] : Object.values(choice.resolution.outcomeMap);
        for (const outcomeId of ids) if (!outcomes.has(outcomeId)) throw new RangeError(`unknown outcome in ${event.eventId}: ${outcomeId}`);
      }
      byId.set(event.eventId, event);
      for (const trigger of event.triggers) {
        const bucket = byTrigger.get(trigger);
        if (bucket === undefined) byTrigger.set(trigger, [event]); else bucket.push(event);
      }
    }
    for (const bucket of byTrigger.values()) bucket.sort((left, right) => left.eventId < right.eventId ? -1 : left.eventId > right.eventId ? 1 : 0);
    this.byId = byId;
    this.byTrigger = byTrigger;
  }

  get(eventId: string): P8EventDefinition | undefined { return this.byId.get(eventId); }
  candidates(triggerId: P5TriggerId): readonly P8EventDefinition[] { return this.byTrigger.get(triggerId) ?? []; }
}

export function eligibleP8Events(catalog: P8EventCatalog, state: P8AuthorityState, triggerId: P5TriggerId, transitionSeq: bigint): readonly P8EventDefinition[] {
  return catalog.candidates(triggerId).filter((event) => repeatEligible(state, event, transitionSeq) && evaluateP8Condition(state, event.eligibility) && effectiveWeight(state, event) > 0n);
}

export async function selectP8Event(
  hashProvider: HashProvider,
  catalog: P8EventCatalog,
  state: P8AuthorityState,
  context: P8SelectionContext,
): Promise<P8SelectedEvent | null> {
  const eligible = eligibleP8Events(catalog, state, context.triggerId, context.transitionSeq);
  if (eligible.length === 0) return null;
  if (eligible.length === 1) return { event: eligible[0]!, nextDrawIndex: context.startDrawIndex, selectionDraws: [] };

  const weighted = eligible.map((event) => ({ event, weight: effectiveWeight(state, event) }));
  let total = 0n;
  for (const candidate of weighted) {
    total += candidate.weight;
    if (total > U63_MAX) throw new RangeError('eligible event weight total exceeds unsigned 63-bit range');
  }
  const key: P5RngStreamKey = {
    runSeedHex: context.runSeedHex,
    contentPackId: context.contentPackId,
    contentPackVersion: context.contentPackVersion,
    originTransitionSeq: context.transitionSeq,
    triggerId: context.triggerId,
    channel: 'event.select',
    subjectId: `event-select-${context.evaluationOrdinal}`,
  };
  const draw = await drawP5Bounded(hashProvider, key, context.startDrawIndex, total);
  let cursor = 0n;
  for (const candidate of weighted) {
    cursor += candidate.weight;
    if (draw.value < cursor) return { event: candidate.event, nextDrawIndex: draw.nextDrawIndex, selectionDraws: draw.draws };
  }
  throw new Error('weighted selection failed');
}

function selectionDrawsToPending(draws: readonly P5BoundedDrawRecord[], subjectId: string): readonly PendingRngDrawRecord[] {
  return draws.map((draw) => {
    const base: PendingRngDrawRecord = { channel: 'event.select', subjectId, drawIndex: draw.drawIndex, rawU64: draw.rawU64, accepted: draw.accepted };
    return draw.boundedResult === undefined ? base : { ...base, boundedResult: draw.boundedResult };
  });
}
function choiceView(state: P8AuthorityState, choice: P8EventChoice): PendingChoiceView {
  const visible = choice.visibleWhen === undefined || evaluateP8Condition(state, choice.visibleWhen);
  const enabled = visible && (choice.availableWhen === undefined || evaluateP8Condition(state, choice.availableWhen));
  const base: PendingChoiceView = { choiceId: choice.choiceId, visible, enabled };
  return !enabled && choice.unavailableReasonId !== undefined ? { ...base, publicReasonId: choice.unavailableReasonId } : base;
}

export function prepareP8PendingEvent(
  state: P8AuthorityState,
  selected: P8SelectedEvent,
  context: P8SelectionContext,
  precommitStateDigest: string,
): P8PreparedEvent {
  const pending: PendingEventInstanceRuntimeV1 = {
    pendingSchemaVersion: P5_PENDING_SCHEMA_VERSION,
    p5ContractVersion: P5_CONTRACT_VERSION,
    contentPackId: context.contentPackId,
    contentPackVersion: context.contentPackVersion,
    contentDigestSha256: context.contentDigestSha256,
    runSeedHex: context.runSeedHex,
    instanceId: `pending.${context.evaluationOrdinal}`,
    eventId: selected.event.eventId,
    contentRevision: selected.event.contentRevision,
    originTransitionSeq: context.transitionSeq,
    triggerId: context.triggerId,
    evaluationOrdinal: context.evaluationOrdinal,
    phase: 'awaiting_choice',
    resolvedChoiceView: selected.event.choices.map((choice) => choiceView(state, choice)),
    completedRngDrawRecords: selectionDrawsToPending(selected.selectionDraws, `event-select-${context.evaluationOrdinal}`),
    precommitStateDigest,
  };
  return { event: selected.event, pending, nextDrawIndex: selected.nextDrawIndex };
}

function findChoice(event: P8EventDefinition, pending: PendingEventInstanceRuntimeV1, choiceId: string): P8EventChoice {
  if (pending.eventId !== event.eventId || pending.contentRevision !== event.contentRevision) throw new RangeError('pending event identity mismatch');
  const view = pending.resolvedChoiceView.find((candidate) => candidate.choiceId === choiceId);
  if (view === undefined || !view.visible || !view.enabled) throw new RangeError(`choice is not selectable: ${choiceId}`);
  const choice = event.choices.find((candidate) => candidate.choiceId === choiceId);
  if (choice === undefined) throw new RangeError(`choice is absent from pinned event: ${choiceId}`);
  return choice;
}
function findOutcome(event: P8EventDefinition, outcomeId: string): P8EventOutcome {
  const outcome = event.outcomes.find((candidate) => candidate.outcomeId === outcomeId);
  if (outcome === undefined) throw new RangeError(`unknown event outcome: ${outcomeId}`);
  return outcome;
}
function applyP5Effects(state: P8AuthorityState, effects: readonly P8P5Effect[]): P8AuthorityState {
  const flags = { ...state.events.narrativeFlags };
  const counters = { ...state.events.narrativeCounters };
  let chainQueue = [...state.events.chainQueue];
  for (const effect of effects) {
    switch (effect.operation) {
      case 'narrative.flag.set': flags[effect.ref] = true; break;
      case 'narrative.flag.clear': flags[effect.ref] = false; break;
      case 'narrative.counter.add': {
        if (!Number.isSafeInteger(effect.amount) || effect.amount === 0) throw new RangeError('counter amount must be a non-zero safe integer');
        const next = (counters[effect.ref] ?? 0) + effect.amount;
        if (!Number.isSafeInteger(next)) throw new RangeError(`counter overflow: ${effect.ref}`);
        counters[effect.ref] = next;
        break;
      }
      case 'event.chain.enqueue': chainQueue = [...chainQueue, effect.ref]; break;
    }
  }
  return { ...state, events: { ...state.events, narrativeFlags: flags, narrativeCounters: counters, chainQueue } };
}
function finalizeBookkeeping(state: P8AuthorityState, eventId: string, transitionSeq: bigint, enqueue: readonly string[]): P8AuthorityState {
  const count = (state.events.counts[eventId] ?? 0) + 1;
  if (!Number.isSafeInteger(count)) throw new RangeError(`event count overflow: ${eventId}`);
  return {
    ...state,
    events: {
      ...state.events,
      counts: { ...state.events.counts, [eventId]: count },
      lastResolvedTransition: { ...state.events.lastResolvedTransition, [eventId]: transitionSeq },
      recentHistory: [...state.events.recentHistory, eventId].slice(-RECENT_HISTORY_CAP),
      chainQueue: [...state.events.chainQueue, ...enqueue],
    },
  };
}

export async function resolveP8EventChoice(
  hashProvider: HashProvider,
  state: P8AuthorityState,
  event: P8EventDefinition,
  pending: PendingEventInstanceRuntimeV1,
  choiceId: string,
  currentTransitionSeq: bigint,
  startDrawIndex: bigint,
): Promise<P8ResolvedEvent> {
  if (currentTransitionSeq !== pending.originTransitionSeq) throw new RangeError('transition sequence changed while event was pending');
  const choice = findChoice(event, pending, choiceId);
  let outcomeId: string;
  let nextDrawIndex = startDrawIndex;
  let completedRngDrawRecords = [...pending.completedRngDrawRecords];
  let completedCheckResult = pending.completedCheckResult;

  if (choice.resolution.kind === 'direct') {
    outcomeId = choice.resolution.outcomeId;
  } else {
    const check = await resolveP8StaticCheck(hashProvider, state.character, {
      runSeedHex: pending.runSeedHex,
      contentPackId: pending.contentPackId,
      contentPackVersion: pending.contentPackVersion,
      originTransitionSeq: pending.originTransitionSeq,
      triggerId: pending.triggerId,
    }, startDrawIndex, choice.resolution.check);
    outcomeId = choice.resolution.outcomeMap[check.degree];
    nextDrawIndex = check.nextDrawIndex;
    completedRngDrawRecords = [...completedRngDrawRecords, ...p8CheckDrawsToPending(check)];
    completedCheckResult = p8CheckToPendingResult(check);
  }

  const outcome = findOutcome(event, outcomeId);
  const afterDomain = prevalidateAndApplyDomainCommands(state, outcome.domainCommands);
  const afterP5 = applyP5Effects(afterDomain, outcome.p5Effects);
  const committedTransitionSeq = currentTransitionSeq + 1n;
  const committed = finalizeBookkeeping(afterP5, event.eventId, committedTransitionSeq, outcome.enqueueChainSteps);
  const readyPending: PendingEventInstanceRuntimeV1 = {
    ...pending,
    phase: 'ready_to_commit',
    selectedChoiceId: choiceId,
    completedRngDrawRecords,
    ...(completedCheckResult === undefined ? {} : { completedCheckResult }),
    pendingConsequence: outcome.outcomeId,
  };
  return { state: committed, transitionSeq: committedTransitionSeq, nextDrawIndex, pending: readyPending, postCommitTriggers: outcome.postCommitTriggers };
}

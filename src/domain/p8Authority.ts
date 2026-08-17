import type { JsonObject } from '../saves/jsonValue';

export const P8_ATTRIBUTE_IDS = ['strength', 'endurance', 'agility', 'sense', 'intellect', 'will', 'presence'] as const;
export type P8AttributeId = (typeof P8_ATTRIBUTE_IDS)[number];
export type P8ResourcePoolId = 'provisions' | 'remedies' | 'materials';
const STABLE_ID = /^[a-z0-9][a-z0-9._-]{0,63}$/;
const attributeIds = new Set<string>(P8_ATTRIBUTE_IDS);

export interface P8FormativeAnswerDefinition { readonly answerId: string; readonly promptId: string; readonly tags: readonly string[]; }
export interface P8OriginDefinition { readonly originId: string; readonly matchTags: readonly string[]; readonly authoredOrder: number; }
export interface P8PracticeDefinition { readonly practiceId: string; readonly competenceId: string; readonly matchTags: readonly string[]; readonly authoredOrder: number; }
export interface P8CharacterCreationCatalogInput {
  readonly answers: readonly P8FormativeAnswerDefinition[];
  readonly origins: readonly P8OriginDefinition[];
  readonly practices: readonly P8PracticeDefinition[];
}
export interface P8CharacterCreationInput {
  readonly answerIds: readonly [string, string, string];
  readonly attributeIncreases: readonly [P8AttributeId, P8AttributeId, P8AttributeId, P8AttributeId];
  readonly personalCompetenceId: string;
}
export interface P8CharacterState {
  readonly formativeAnswerIds: readonly [string, string, string];
  readonly originId: string;
  readonly practiceId: string;
  readonly attributes: Readonly<Record<P8AttributeId, number>>;
  readonly trainedCompetences: Readonly<Record<string, 1>>;
}
export interface P8CompanionSlotState { readonly speciesId: number; readonly willingnessRef: string; }
export interface P8AuthorityState {
  readonly schemaVersion: 'p8-authority-v1';
  readonly character: P8CharacterState;
  readonly world: { readonly currentLocality: string; readonly relationships: Readonly<Record<string, string>>; };
  readonly survival: { readonly resourcePools: Readonly<Record<P8ResourcePoolId, number>>; };
  readonly pokemon: {
    readonly companionSlots: readonly [P8CompanionSlotState | null, P8CompanionSlotState | null, P8CompanionSlotState | null];
    readonly directInteractions: readonly string[];
  };
  readonly events: {
    readonly counts: Readonly<Record<string, number>>;
    readonly lastResolvedTransition: Readonly<Record<string, bigint>>;
    readonly recentHistory: readonly string[];
    readonly narrativeFlags: Readonly<Record<string, boolean>>;
    readonly narrativeCounters: Readonly<Record<string, number>>;
    readonly chainQueue: readonly string[];
  };
}

// Closed subset of the frozen P5 adapter registry needed by the first slice.
export type P8DomainCommand =
  | { readonly commandId: 'p2.world.commit_relationship_state'; readonly relationshipRef: string; readonly stateId: string; readonly causeId: string }
  | { readonly commandId: 'p2.world.commit_locality_transition'; readonly fromLocality: string; readonly toLocality: string; readonly routeRef: string }
  | { readonly commandId: 'p3.inventory.adjust_resource_pool'; readonly poolId: P8ResourcePoolId; readonly delta: number; readonly reasonId: string }
  | { readonly commandId: 'p4.companion.commit_voluntary_join'; readonly speciesId: number; readonly slot: 0 | 1 | 2; readonly willingnessRef: string; readonly eventId: string }
  | { readonly commandId: 'p4.companion.commit_separation'; readonly slot: 0 | 1 | 2; readonly reasonId: string }
  | { readonly commandId: 'p4.encounter.record_direct_interaction'; readonly speciesId: number; readonly encounterRef: string; readonly routeRef: string };

function stableId(value: string, label: string): void {
  if (!STABLE_ID.test(value)) throw new RangeError(`${label} must be a stable id`);
}
function safeInt(value: number, label: string): void {
  if (!Number.isSafeInteger(value)) throw new RangeError(`${label} must be a safe integer`);
}
function ascii(left: string, right: string): number { return left < right ? -1 : left > right ? 1 : 0; }
function baseAttributes(): Record<P8AttributeId, number> {
  return { strength: 1, endurance: 1, agility: 1, sense: 1, intellect: 1, will: 1, presence: 1 };
}
function tagScore(tags: readonly string[], counts: ReadonlyMap<string, number>): number {
  let score = 0;
  for (const tag of tags) score += counts.get(tag) ?? 0;
  return score;
}
function lastMatchingAnswer(tags: readonly string[], answers: readonly P8FormativeAnswerDefinition[]): number {
  const wanted = new Set(tags);
  for (let index = answers.length - 1; index >= 0; index -= 1) {
    if (answers[index]!.tags.some((tag) => wanted.has(tag))) return index;
  }
  return -1;
}
function resolveTagged<T>(
  values: readonly T[], ids: (value: T) => string, tags: (value: T) => readonly string[], order: (value: T) => number,
  counts: ReadonlyMap<string, number>, answers: readonly P8FormativeAnswerDefinition[], label: string,
): T {
  if (values.length === 0) throw new RangeError(`at least one ${label} is required`);
  return [...values].sort((left, right) => {
    const byScore = tagScore(tags(right), counts) - tagScore(tags(left), counts);
    if (byScore !== 0) return byScore;
    const byRecency = lastMatchingAnswer(tags(right), answers) - lastMatchingAnswer(tags(left), answers);
    if (byRecency !== 0) return byRecency;
    const byOrder = order(left) - order(right);
    return byOrder !== 0 ? byOrder : ascii(ids(left), ids(right));
  })[0]!;
}

export class P8CharacterCreationCatalog {
  private readonly answers = new Map<string, P8FormativeAnswerDefinition>();
  private readonly origins: readonly P8OriginDefinition[];
  private readonly practices: readonly P8PracticeDefinition[];

  constructor(input: P8CharacterCreationCatalogInput) {
    for (const answer of input.answers) {
      stableId(answer.answerId, 'answerId'); stableId(answer.promptId, 'promptId');
      if (this.answers.has(answer.answerId)) throw new RangeError(`duplicate answer id: ${answer.answerId}`);
      for (const tag of answer.tags) stableId(tag, 'answer tag');
      this.answers.set(answer.answerId, answer);
    }
    const originIds = new Set<string>();
    for (const value of input.origins) {
      stableId(value.originId, 'originId'); safeInt(value.authoredOrder, 'origin authoredOrder');
      if (!originIds.add(value.originId)) throw new RangeError(`duplicate Origin id: ${value.originId}`);
      for (const tag of value.matchTags) stableId(tag, 'origin match tag');
    }
    const practiceIds = new Set<string>();
    for (const value of input.practices) {
      stableId(value.practiceId, 'practiceId'); stableId(value.competenceId, 'competenceId'); safeInt(value.authoredOrder, 'practice authoredOrder');
      if (!practiceIds.add(value.practiceId)) throw new RangeError(`duplicate Practice id: ${value.practiceId}`);
      for (const tag of value.matchTags) stableId(tag, 'practice match tag');
    }
    this.origins = [...input.origins];
    this.practices = [...input.practices];
  }

  resolve(input: P8CharacterCreationInput): P8CharacterState {
    stableId(input.personalCompetenceId, 'personalCompetenceId');
    const selected = input.answerIds.map((id) => {
      const answer = this.answers.get(id);
      if (answer === undefined) throw new RangeError(`unknown formative answer: ${id}`);
      return answer;
    });
    if (new Set(selected.map((answer) => answer.promptId)).size !== 3) throw new RangeError('three distinct formative prompts are required');
    const counts = new Map<string, number>();
    for (const answer of selected) for (const tag of answer.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
    const origin = resolveTagged(this.origins, (x) => x.originId, (x) => x.matchTags, (x) => x.authoredOrder, counts, selected, 'Origin');
    const practice = resolveTagged(this.practices, (x) => x.practiceId, (x) => x.matchTags, (x) => x.authoredOrder, counts, selected, 'Practice');

    const attributes = baseAttributes();
    for (const id of input.attributeIncreases) {
      if (!attributeIds.has(id)) throw new RangeError(`unknown attribute: ${id}`);
      const next = attributes[id] + 1;
      if (next > 3) throw new RangeError(`starting attribute cap exceeded: ${id}`);
      attributes[id] = next;
    }
    if (input.personalCompetenceId === practice.competenceId) throw new RangeError('personal competence must differ from Practice competence');
    return {
      formativeAnswerIds: [...input.answerIds] as [string, string, string],
      originId: origin.originId,
      practiceId: practice.practiceId,
      attributes,
      trainedCompetences: { [practice.competenceId]: 1, [input.personalCompetenceId]: 1 },
    };
  }
}

export function createInitialP8AuthorityState(
  character: P8CharacterState,
  currentLocality: string,
  resourcePools: Readonly<Record<P8ResourcePoolId, number>> = { provisions: 0, remedies: 0, materials: 0 },
): P8AuthorityState {
  stableId(currentLocality, 'currentLocality');
  for (const [id, value] of Object.entries(resourcePools)) { safeInt(value, id); if (value < 0) throw new RangeError(`${id} cannot be negative`); }
  return {
    schemaVersion: 'p8-authority-v1', character,
    world: { currentLocality, relationships: {} },
    survival: { resourcePools: { ...resourcePools } },
    pokemon: { companionSlots: [null, null, null], directInteractions: [] },
    events: { counts: {}, lastResolvedTransition: {}, recentHistory: [], narrativeFlags: {}, narrativeCounters: {}, chainQueue: [] },
  };
}

function validateCommand(state: P8AuthorityState, command: P8DomainCommand): void {
  switch (command.commandId) {
    case 'p2.world.commit_relationship_state':
      stableId(command.relationshipRef, 'relationshipRef'); stableId(command.stateId, 'stateId'); stableId(command.causeId, 'causeId'); return;
    case 'p2.world.commit_locality_transition':
      stableId(command.fromLocality, 'fromLocality'); stableId(command.toLocality, 'toLocality'); stableId(command.routeRef, 'routeRef');
      if (command.fromLocality === command.toLocality) throw new RangeError('locality transition must change locality');
      if (state.world.currentLocality !== command.fromLocality) throw new RangeError(`locality transition origin mismatch: ${command.fromLocality}`);
      return;
    case 'p3.inventory.adjust_resource_pool': {
      stableId(command.reasonId, 'reasonId'); safeInt(command.delta, 'delta');
      if (command.delta === 0 || state.survival.resourcePools[command.poolId] + command.delta < 0) throw new RangeError('resource adjustment is invalid');
      return;
    }
    case 'p4.companion.commit_voluntary_join':
      if (!Number.isSafeInteger(command.speciesId) || command.speciesId < 1 || command.speciesId > 151) throw new RangeError('speciesId must be 1..151');
      stableId(command.willingnessRef, 'willingnessRef'); stableId(command.eventId, 'eventId');
      if (state.pokemon.companionSlots[command.slot] !== null) throw new RangeError(`companion slot ${command.slot} is occupied`);
      return;
    case 'p4.companion.commit_separation':
      stableId(command.reasonId, 'reasonId');
      if (state.pokemon.companionSlots[command.slot] === null) throw new RangeError(`companion slot ${command.slot} is empty`);
      return;
    case 'p4.encounter.record_direct_interaction':
      if (!Number.isSafeInteger(command.speciesId) || command.speciesId < 1 || command.speciesId > 151) throw new RangeError('speciesId must be 1..151');
      stableId(command.encounterRef, 'encounterRef'); stableId(command.routeRef, 'routeRef'); return;
  }
}

function applyCommand(state: P8AuthorityState, command: P8DomainCommand): P8AuthorityState {
  switch (command.commandId) {
    case 'p2.world.commit_relationship_state':
      return { ...state, world: { ...state.world, relationships: { ...state.world.relationships, [command.relationshipRef]: command.stateId } } };
    case 'p2.world.commit_locality_transition':
      return { ...state, world: { ...state.world, currentLocality: command.toLocality } };
    case 'p3.inventory.adjust_resource_pool':
      return { ...state, survival: { resourcePools: { ...state.survival.resourcePools, [command.poolId]: state.survival.resourcePools[command.poolId] + command.delta } } };
    case 'p4.companion.commit_voluntary_join': {
      const slots = [...state.pokemon.companionSlots] as [P8CompanionSlotState | null, P8CompanionSlotState | null, P8CompanionSlotState | null];
      slots[command.slot] = { speciesId: command.speciesId, willingnessRef: command.willingnessRef };
      return { ...state, pokemon: { ...state.pokemon, companionSlots: slots } };
    }
    case 'p4.companion.commit_separation': {
      const slots = [...state.pokemon.companionSlots] as [P8CompanionSlotState | null, P8CompanionSlotState | null, P8CompanionSlotState | null];
      slots[command.slot] = null;
      return { ...state, pokemon: { ...state.pokemon, companionSlots: slots } };
    }
    case 'p4.encounter.record_direct_interaction':
      return { ...state, pokemon: { ...state.pokemon, directInteractions: [...state.pokemon.directInteractions, `${command.speciesId}:${command.encounterRef}:${command.routeRef}`] } };
  }
}

export function prevalidateAndApplyDomainCommands(state: P8AuthorityState, commands: readonly P8DomainCommand[]): P8AuthorityState {
  for (const command of commands) validateCommand(state, command); // same precommit snapshot for every owner adapter
  let simulated = state;
  for (const command of commands) simulated = applyCommand(simulated, command);
  for (const value of Object.values(simulated.survival.resourcePools)) {
    if (!Number.isSafeInteger(value) || value < 0) throw new RangeError('resource pool is invalid after effect-plan simulation');
  }
  return simulated;
}

export function p8AuthorityStateToJson(state: P8AuthorityState): JsonObject {
  const lastResolvedTransition: Record<string, string> = {};
  for (const [id, seq] of Object.entries(state.events.lastResolvedTransition)) lastResolvedTransition[id] = seq.toString(10);
  return {
    schema_version: state.schemaVersion,
    character: {
      formative_answer_ids: [...state.character.formativeAnswerIds], origin_id: state.character.originId, practice_id: state.character.practiceId,
      attributes: { ...state.character.attributes }, trained_competences: { ...state.character.trainedCompetences },
    },
    world: { current_locality: state.world.currentLocality, relationships: { ...state.world.relationships } },
    survival: { resource_pools: { ...state.survival.resourcePools } },
    pokemon: { companion_slots: state.pokemon.companionSlots.map((slot) => slot === null ? null : { ...slot }), direct_interactions: [...state.pokemon.directInteractions] },
    events: {
      counts: { ...state.events.counts }, last_resolved_transition: lastResolvedTransition, recent_history: [...state.events.recentHistory],
      narrative_flags: { ...state.events.narrativeFlags }, narrative_counters: { ...state.events.narrativeCounters }, chain_queue: [...state.events.chainQueue],
    },
  };
}

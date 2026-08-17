import { P8_ATTRIBUTE_IDS, type P8AttributeId, type P8AuthorityState, type P8CharacterState, type P8CompanionSlotState, type P8ResourcePoolId } from './p8Authority';
import { isRecord, type JsonObject } from '../saves/jsonValue';
import { parseUnsignedDecimal } from '../runtime/uint';

const STABLE_ID = /^[a-z0-9][a-z0-9._-]{0,63}$/;
const DIRECT_INTERACTION = /^(?:[1-9]|[1-9][0-9]|1[0-4][0-9]|15[01]):[a-z0-9][a-z0-9._-]{0,63}:[a-z0-9][a-z0-9._-]{0,63}$/;
const RESOURCE_POOL_IDS: readonly P8ResourcePoolId[] = ['provisions', 'remedies', 'materials'];

function record(value: unknown, label: string): Record<string, unknown> {
  if (!isRecord(value)) throw new TypeError(`${label} must be an object`);
  return value;
}

function stringValue(value: unknown, label: string): string {
  if (typeof value !== 'string') throw new TypeError(`${label} must be a string`);
  return value;
}

function stableId(value: unknown, label: string): string {
  const result = stringValue(value, label);
  if (!STABLE_ID.test(result)) throw new RangeError(`${label} must be a stable id`);
  return result;
}

function safeInteger(value: unknown, label: string, minimum = 0, maximum = Number.MAX_SAFE_INTEGER): number {
  if (!Number.isSafeInteger(value) || (value as number) < minimum || (value as number) > maximum) {
    throw new RangeError(`${label} must be a safe integer in range`);
  }
  return value as number;
}

function stableIdArray(value: unknown, label: string): string[] {
  if (!Array.isArray(value)) throw new TypeError(`${label} must be an array`);
  return value.map((item, index) => stableId(item, `${label}[${index}]`));
}

function directInteractionArray(value: unknown): string[] {
  if (!Array.isArray(value)) throw new TypeError('pokemon.direct_interactions must be an array');
  return value.map((item, index) => {
    const result = stringValue(item, `pokemon.direct_interactions[${index}]`);
    if (!DIRECT_INTERACTION.test(result)) throw new RangeError(`pokemon.direct_interactions[${index}] has invalid canonical identity`);
    return result;
  });
}

function numericRecord(value: unknown, label: string, minimum = 0): Record<string, number> {
  const source = record(value, label);
  const result: Record<string, number> = {};
  for (const [key, item] of Object.entries(source)) {
    stableId(key, `${label} key`);
    result[key] = safeInteger(item, `${label}.${key}`, minimum);
  }
  return result;
}

function booleanRecord(value: unknown, label: string): Record<string, boolean> {
  const source = record(value, label);
  const result: Record<string, boolean> = {};
  for (const [key, item] of Object.entries(source)) {
    stableId(key, `${label} key`);
    if (typeof item !== 'boolean') throw new TypeError(`${label}.${key} must be boolean`);
    result[key] = item;
  }
  return result;
}

function parseCharacter(value: unknown): P8CharacterState {
  const source = record(value, 'character');
  const answerIds = stableIdArray(source.formative_answer_ids, 'character.formative_answer_ids');
  if (answerIds.length !== 3) throw new RangeError('character requires exactly three formative answers');
  const attributesSource = record(source.attributes, 'character.attributes');
  const attributes = {} as Record<P8AttributeId, number>;
  for (const id of P8_ATTRIBUTE_IDS) attributes[id] = safeInteger(attributesSource[id], `character.attributes.${id}`, 1, 3);
  if (Object.keys(attributesSource).length !== P8_ATTRIBUTE_IDS.length) throw new RangeError('character.attributes contains unsupported keys');
  const competenceSource = record(source.trained_competences, 'character.trained_competences');
  const trainedCompetences: Record<string, 1> = {};
  for (const [id, rank] of Object.entries(competenceSource)) {
    stableId(id, 'trained competence id');
    if (rank !== 1) throw new RangeError(`trained competence ${id} must have rank 1`);
    trainedCompetences[id] = 1;
  }
  if (Object.keys(trainedCompetences).length !== 2) throw new RangeError('character must contain exactly two starting trained competences');
  return {
    formativeAnswerIds: answerIds as [string, string, string],
    originId: stableId(source.origin_id, 'character.origin_id'),
    practiceId: stableId(source.practice_id, 'character.practice_id'),
    attributes,
    trainedCompetences,
  };
}

function parseCompanion(value: unknown, label: string): P8CompanionSlotState | null {
  if (value === null) return null;
  const source = record(value, label);
  return {
    speciesId: safeInteger(source.speciesId, `${label}.speciesId`, 1, 151),
    willingnessRef: stableId(source.willingnessRef, `${label}.willingnessRef`),
  };
}

export function p8AuthorityStateFromJson(value: JsonObject): P8AuthorityState {
  const source = record(value, 'authoritative_state');
  if (source.schema_version !== 'p8-authority-v1') throw new RangeError('unsupported P8 authority schema version');

  const worldSource = record(source.world, 'world');
  const relationshipSource = record(worldSource.relationships, 'world.relationships');
  const relationships: Record<string, string> = {};
  for (const [id, state] of Object.entries(relationshipSource)) relationships[stableId(id, 'relationship id')] = stableId(state, `relationship ${id}`);

  const survivalSource = record(source.survival, 'survival');
  const poolSource = record(survivalSource.resource_pools, 'survival.resource_pools');
  const resourcePools = {} as Record<P8ResourcePoolId, number>;
  for (const id of RESOURCE_POOL_IDS) resourcePools[id] = safeInteger(poolSource[id], `survival.resource_pools.${id}`, 0);
  if (Object.keys(poolSource).length !== RESOURCE_POOL_IDS.length) throw new RangeError('survival.resource_pools contains unsupported keys');

  const pokemonSource = record(source.pokemon, 'pokemon');
  if (!Array.isArray(pokemonSource.companion_slots) || pokemonSource.companion_slots.length !== 3) {
    throw new RangeError('pokemon.companion_slots must contain exactly three slots');
  }
  const companionSlots = pokemonSource.companion_slots.map((slot, index) => parseCompanion(slot, `pokemon.companion_slots[${index}]`)) as [P8CompanionSlotState | null, P8CompanionSlotState | null, P8CompanionSlotState | null];

  const eventsSource = record(source.events, 'events');
  const lastResolvedSource = record(eventsSource.last_resolved_transition, 'events.last_resolved_transition');
  const lastResolvedTransition: Record<string, bigint> = {};
  for (const [id, sequence] of Object.entries(lastResolvedSource)) {
    lastResolvedTransition[stableId(id, 'event id')] = parseUnsignedDecimal(stringValue(sequence, `events.last_resolved_transition.${id}`));
  }

  return {
    schemaVersion: 'p8-authority-v1',
    character: parseCharacter(source.character),
    world: {
      currentLocality: stableId(worldSource.current_locality, 'world.current_locality'),
      relationships,
    },
    survival: { resourcePools },
    pokemon: {
      companionSlots,
      directInteractions: directInteractionArray(pokemonSource.direct_interactions),
    },
    events: {
      counts: numericRecord(eventsSource.counts, 'events.counts', 0),
      lastResolvedTransition,
      recentHistory: stableIdArray(eventsSource.recent_history, 'events.recent_history'),
      narrativeFlags: booleanRecord(eventsSource.narrative_flags, 'events.narrative_flags'),
      narrativeCounters: numericRecord(eventsSource.narrative_counters, 'events.narrative_counters', Number.MIN_SAFE_INTEGER),
      chainQueue: stableIdArray(eventsSource.chain_queue, 'events.chain_queue'),
    },
  };
}

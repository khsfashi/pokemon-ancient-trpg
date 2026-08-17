export const P8_EQUIPMENT_SLOT_IDS = ['main_hand', 'body', 'guard', 'utility', 'field'] as const;
export type P8EquipmentSlotId = (typeof P8_EQUIPMENT_SLOT_IDS)[number];

export interface P8EquipmentInventoryState {
  readonly carriedItemIds: readonly string[];
  readonly equippedItemIds: Readonly<Record<P8EquipmentSlotId, string | null>>;
}

export interface P8EquipmentDefinition {
  readonly itemId: string;
  readonly slotId: P8EquipmentSlotId;
  readonly load: 0 | 1 | 2 | 3;
  readonly attackReadiness: 0 | 1 | 2;
  readonly defenseReadiness: 0 | 1 | 2;
  readonly fieldReadiness: 0 | 1 | 2;
  readonly effectTags: readonly string[];
}

const DEFINITIONS: readonly P8EquipmentDefinition[] = Object.freeze([
  Object.freeze({
    itemId: 'iron.spear', slotId: 'main_hand', load: 1, attackReadiness: 2, defenseReadiness: 0, fieldReadiness: 0,
    effectTags: Object.freeze(['approach.reach', 'material.iron']),
  }),
  Object.freeze({
    itemId: 'travel.gambeson', slotId: 'body', load: 1, attackReadiness: 0, defenseReadiness: 1, fieldReadiness: 0,
    effectTags: Object.freeze(['harm.padding', 'weather.layer']),
  }),
  Object.freeze({
    itemId: 'sting.veil', slotId: 'guard', load: 0, attackReadiness: 0, defenseReadiness: 0, fieldReadiness: 1,
    effectTags: Object.freeze(['hazard.venom_resistance']),
  }),
  Object.freeze({
    itemId: 'hide.buckler', slotId: 'guard', load: 1, attackReadiness: 0, defenseReadiness: 1, fieldReadiness: 0,
    effectTags: Object.freeze(['approach.block']),
  }),
  Object.freeze({
    itemId: 'route.marker_kit', slotId: 'utility', load: 0, attackReadiness: 0, defenseReadiness: 0, fieldReadiness: 1,
    effectTags: Object.freeze(['route.marking']),
  }),
  Object.freeze({
    itemId: 'field.observation_kit', slotId: 'field', load: 0, attackReadiness: 0, defenseReadiness: 0, fieldReadiness: 1,
    effectTags: Object.freeze(['ecology.observe']),
  }),
]);

const definitionById = new Map<string, P8EquipmentDefinition>();
for (const definition of DEFINITIONS) {
  if (definitionById.has(definition.itemId)) throw new RangeError(`duplicate equipment item id: ${definition.itemId}`);
  definitionById.set(definition.itemId, definition);
}

export const P8_EQUIPMENT_DEFINITIONS = DEFINITIONS;

export function getP8EquipmentDefinition(itemId: string): P8EquipmentDefinition | undefined {
  return definitionById.get(itemId);
}

export function isP8EquipmentSlotId(value: unknown): value is P8EquipmentSlotId {
  return typeof value === 'string' && (P8_EQUIPMENT_SLOT_IDS as readonly string[]).includes(value);
}

export function createInitialP8EquipmentInventory(): P8EquipmentInventoryState {
  return Object.freeze({
    carriedItemIds: Object.freeze([
      'iron.spear',
      'travel.gambeson',
      'sting.veil',
      'hide.buckler',
      'route.marker_kit',
      'field.observation_kit',
    ]),
    equippedItemIds: Object.freeze({
      main_hand: 'iron.spear',
      body: 'travel.gambeson',
      guard: 'sting.veil',
      utility: 'route.marker_kit',
      field: 'field.observation_kit',
    }),
  });
}

export function assertP8EquipmentInventory(inventory: P8EquipmentInventoryState): void {
  const carried = new Set<string>();
  for (const itemId of inventory.carriedItemIds) {
    if (carried.has(itemId)) throw new RangeError(`duplicate carried notable item: ${itemId}`);
    if (definitionById.get(itemId) === undefined) throw new RangeError(`unknown carried notable item: ${itemId}`);
    carried.add(itemId);
  }

  for (const slotId of P8_EQUIPMENT_SLOT_IDS) {
    const itemId = inventory.equippedItemIds[slotId];
    if (itemId === null) continue;
    const definition = definitionById.get(itemId);
    if (definition === undefined) throw new RangeError(`unknown equipped item: ${itemId}`);
    if (!carried.has(itemId)) throw new RangeError(`equipped item is not carried: ${itemId}`);
    if (definition.slotId !== slotId) throw new RangeError(`${itemId} cannot be equipped in ${slotId}`);
  }
}

interface P8ReadinessCharacterView {
  readonly attributes: {
    readonly strength: number;
    readonly endurance: number;
    readonly agility: number;
    readonly sense: number;
  };
  readonly trainedCompetences: Readonly<Record<string, 1>>;
}

interface P8ReadinessSurvivalView {
  readonly resourcePools: {
    readonly provisions: number;
    readonly remedies: number;
    readonly materials: number;
  };
  readonly equipment: P8EquipmentInventoryState;
}

export interface P8EquipmentProjection {
  readonly attackReadiness: number;
  readonly defenseReadiness: number;
  readonly fieldReadiness: number;
  readonly equipmentLoad: number;
  readonly pooledResourceLoad: number;
  readonly currentLoad: number;
  readonly comfortableLoad: number;
  readonly burdened: boolean;
  readonly equipped: Readonly<Record<P8EquipmentSlotId, P8EquipmentDefinition | null>>;
  readonly carriedUnequipped: readonly P8EquipmentDefinition[];
  readonly effectTags: readonly string[];
}

const FIELD_COMPETENCE_IDS = new Set(['tracking', 'inventory', 'repair', 'first_aid', 'climbing', 'foraging']);
const projectionCache = new WeakMap<object, WeakMap<object, P8EquipmentProjection>>();

function fieldCompetenceBonus(competences: Readonly<Record<string, 1>>): 0 | 1 {
  for (const id of Object.keys(competences)) if (FIELD_COMPETENCE_IDS.has(id)) return 1;
  return 0;
}

export function deriveP8EquipmentProjection(
  character: P8ReadinessCharacterView,
  survival: P8ReadinessSurvivalView,
): P8EquipmentProjection {
  let bySurvival = projectionCache.get(character as object);
  const cached = bySurvival?.get(survival as object);
  if (cached !== undefined) return cached;

  assertP8EquipmentInventory(survival.equipment);
  let equipmentLoad = 0;
  for (const itemId of survival.equipment.carriedItemIds) equipmentLoad += definitionById.get(itemId)!.load;

  const equipped = {} as Record<P8EquipmentSlotId, P8EquipmentDefinition | null>;
  let attackEquipment = 0;
  let defenseEquipment = 0;
  let fieldEquipment = 0;
  const equippedIds = new Set<string>();
  const effectTags = new Set<string>();
  for (const slotId of P8_EQUIPMENT_SLOT_IDS) {
    const itemId = survival.equipment.equippedItemIds[slotId];
    const definition = itemId === null ? null : definitionById.get(itemId)!;
    equipped[slotId] = definition;
    if (definition === null) continue;
    equippedIds.add(definition.itemId);
    attackEquipment += definition.attackReadiness;
    defenseEquipment += definition.defenseReadiness;
    fieldEquipment += definition.fieldReadiness;
    for (const tag of definition.effectTags) effectTags.add(tag);
  }

  const carriedUnequipped = survival.equipment.carriedItemIds
    .filter((itemId) => !equippedIds.has(itemId))
    .map((itemId) => definitionById.get(itemId)!);
  const pooledResourceLoad = survival.resourcePools.provisions + survival.resourcePools.remedies + survival.resourcePools.materials;
  const currentLoad = equipmentLoad + pooledResourceLoad;
  const comfortableLoad = 4 + character.attributes.strength;
  const projection = Object.freeze({
    attackReadiness: character.attributes.strength + attackEquipment,
    defenseReadiness: Math.max(character.attributes.endurance, character.attributes.agility) + defenseEquipment,
    fieldReadiness: character.attributes.sense + fieldCompetenceBonus(character.trainedCompetences) + fieldEquipment,
    equipmentLoad,
    pooledResourceLoad,
    currentLoad,
    comfortableLoad,
    burdened: currentLoad > comfortableLoad,
    equipped: Object.freeze(equipped),
    carriedUnequipped: Object.freeze(carriedUnequipped),
    effectTags: Object.freeze([...effectTags].sort()),
  });

  if (bySurvival === undefined) {
    bySurvival = new WeakMap<object, P8EquipmentProjection>();
    projectionCache.set(character as object, bySurvival);
  }
  bySurvival.set(survival as object, projection);
  return projection;
}

import { describe, expect, it } from 'vitest';
import {
  createInitialP8AuthorityState,
  p8AuthorityStateToJson,
  prevalidateAndApplyDomainCommands,
  type P8CharacterState,
} from '../src/domain/p8Authority';
import { p8AuthorityStateFromJson } from '../src/domain/p8AuthorityJson';
import { deriveP8EquipmentProjection } from '../src/domain/p8Equipment';
import type { JsonObject } from '../src/saves/jsonValue';

function character(): P8CharacterState {
  return {
    formativeAnswerIds: ['memory.home', 'memory.rupture', 'memory.work'],
    originId: 'river_household',
    practiceId: 'route_guide',
    attributes: {
      strength: 1,
      endurance: 1,
      agility: 2,
      sense: 3,
      intellect: 1,
      will: 1,
      presence: 1,
    },
    trainedCompetences: { tracking: 1, first_aid: 1 },
  };
}

function state() {
  return createInitialP8AuthorityState(character(), 'reedbank-settlement', { provisions: 3, remedies: 1, materials: 0 });
}

describe('P8.2 authoritative equipment and readiness', () => {
  it('starts with five visible slot assignments and stays inside the D-028 ordinary travel ceiling', () => {
    const authority = state();
    const projection = deriveP8EquipmentProjection(authority.character, authority.survival);

    expect(authority.schemaVersion).toBe('p8-authority-v2');
    expect(authority.survival.equipment.equippedItemIds).toEqual({
      main_hand: 'iron.spear',
      body: 'travel.gambeson',
      guard: 'sting.veil',
      utility: 'route.marker_kit',
      field: 'field.observation_kit',
    });
    expect(projection.equipmentLoad).toBe(3);
    expect(projection.pooledResourceLoad).toBe(4);
    expect(projection.currentLoad).toBe(7);
    expect(projection.comfortableLoad).toBe(5);
    expect(projection.currentLoad).toBeLessThanOrEqual(projection.comfortableLoad + 2);
    expect(projection.attackReadiness).toBe(3);
    expect(projection.defenseReadiness).toBe(3);
    expect(projection.fieldReadiness).toBe(7);
  });

  it('changes only declared equipment-derived surfaces when the carried guard item is swapped', () => {
    const authority = state();
    const before = deriveP8EquipmentProjection(authority.character, authority.survival);
    const swapped = prevalidateAndApplyDomainCommands(authority, [{
      commandId: 'p3.inventory.set_equipment_slot',
      slotId: 'guard',
      itemId: 'hide.buckler',
      reasonId: 'test.guard-swap',
    }]);
    const after = deriveP8EquipmentProjection(swapped.character, swapped.survival);

    expect(swapped.world).toBe(authority.world);
    expect(swapped.pokemon).toBe(authority.pokemon);
    expect(swapped.events).toBe(authority.events);
    expect(swapped.survival.resourcePools).toBe(authority.survival.resourcePools);
    expect(swapped.survival.equipment.carriedItemIds).toBe(authority.survival.equipment.carriedItemIds);
    expect(before.currentLoad).toBe(after.currentLoad);
    expect(before.comfortableLoad).toBe(after.comfortableLoad);
    expect(before.attackReadiness).toBe(after.attackReadiness);
    expect(after.defenseReadiness).toBe(before.defenseReadiness + 1);
    expect(after.fieldReadiness).toBe(before.fieldReadiness - 1);
    expect(before.effectTags).toContain('hazard.venom_resistance');
    expect(after.effectTags).toContain('approach.block');
  });

  it('reuses cached equipment projections until character or survival authority changes', () => {
    const authority = state();
    const first = deriveP8EquipmentProjection(authority.character, authority.survival);
    const second = deriveP8EquipmentProjection(authority.character, authority.survival);
    expect(second).toBe(first);

    const unrelated = { ...authority, world: { ...authority.world, currentLocality: 'old-levee' } };
    expect(deriveP8EquipmentProjection(unrelated.character, unrelated.survival)).toBe(first);

    const spent = prevalidateAndApplyDomainCommands(authority, [{
      commandId: 'p3.inventory.adjust_resource_pool',
      poolId: 'provisions',
      delta: -1,
      reasonId: 'test.travel-cost',
    }]);
    const changed = deriveP8EquipmentProjection(spent.character, spent.survival);
    expect(changed).not.toBe(first);
    expect(changed.currentLoad).toBe(first.currentLoad - 1);
  });

  it('round-trips v2 equipment and explicitly migrates legacy v1 authority saves', () => {
    const authority = state();
    const json = p8AuthorityStateToJson(authority);
    const roundTripped = p8AuthorityStateFromJson(json);
    expect(roundTripped).toEqual(authority);

    const survival = json.survival as JsonObject;
    const legacy = {
      ...json,
      schema_version: 'p8-authority-v1',
      survival: { resource_pools: survival.resource_pools },
    } as JsonObject;
    const migrated = p8AuthorityStateFromJson(legacy);
    expect(migrated.schemaVersion).toBe('p8-authority-v2');
    expect(migrated.survival.equipment).toEqual(authority.survival.equipment);
    expect(p8AuthorityStateToJson(migrated).schema_version).toBe('p8-authority-v2');
  });

  it('rejects equipping an unknown, uncarried, or wrong-slot notable item', () => {
    const authority = state();
    expect(() => prevalidateAndApplyDomainCommands(authority, [{
      commandId: 'p3.inventory.set_equipment_slot', slotId: 'guard', itemId: 'iron.spear', reasonId: 'test.wrong-slot',
    }])).toThrow(/cannot be equipped/);
    expect(() => prevalidateAndApplyDomainCommands(authority, [{
      commandId: 'p3.inventory.set_equipment_slot', slotId: 'guard', itemId: 'missing.item', reasonId: 'test.unknown',
    }])).toThrow(/unknown equipment item/);
  });
});

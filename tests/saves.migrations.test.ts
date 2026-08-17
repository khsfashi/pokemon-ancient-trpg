import { describe, expect, it } from 'vitest';
import { SaveMigrationRegistry } from '../src/saves/migrations';

describe('sequential fail-closed save migrations', () => {
  it('applies every adjacent pure step in order', () => {
    const registry = new SaveMigrationRegistry(3, [
      { fromVersion: 1, toVersion: 2, migrate: (input) => ({ ...(input as Record<string, unknown>), save_schema_version: 2, migrated_1_2: true }) },
      { fromVersion: 2, toVersion: 3, migrate: (input) => ({ ...(input as Record<string, unknown>), save_schema_version: 3, migrated_2_3: true }) },
    ]);
    const original = { save_schema_version: 1, payload: 'kept' } as const;
    expect(registry.migrate(original)).toEqual({
      save_schema_version: 3, payload: 'kept', migrated_1_2: true, migrated_2_3: true,
    });
    expect(original).toEqual({ save_schema_version: 1, payload: 'kept' });
  });

  it('rejects future versions, missing steps, duplicate steps, and bad step output', () => {
    const missing = new SaveMigrationRegistry(3, [
      { fromVersion: 1, toVersion: 2, migrate: () => ({ save_schema_version: 2 }) },
    ]);
    expect(() => missing.migrate({ save_schema_version: 4 })).toThrow(RangeError);
    expect(() => missing.migrate({ save_schema_version: 1 })).toThrow(RangeError);
    expect(() => new SaveMigrationRegistry(2, [
      { fromVersion: 1, toVersion: 2, migrate: (input) => input },
      { fromVersion: 1, toVersion: 2, migrate: (input) => input },
    ])).toThrow(RangeError);
    const bad = new SaveMigrationRegistry(2, [
      { fromVersion: 1, toVersion: 2, migrate: () => ({ save_schema_version: 1 }) },
    ]);
    expect(() => bad.migrate({ save_schema_version: 1 })).toThrow(RangeError);
  });
});

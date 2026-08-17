import { SAVE_V1_MIGRATIONS, type SaveMigrationRegistry } from './migrations';
import {
  assertSaveContentCompatibility,
  saveEnvelopeV1FromWire,
  saveEnvelopeV1ToWire,
  type SaveContentIdentity,
  type SaveEnvelopeV1Runtime,
  type SaveEnvelopeV1Wire,
} from './saveEnvelope';

export interface SaveStore {
  load(slotId: string): Promise<unknown | null>;
  replace(slotId: string, envelope: SaveEnvelopeV1Wire): Promise<void>;
}

export async function saveRuntimeEnvelope(
  store: SaveStore,
  slotId: string,
  envelope: SaveEnvelopeV1Runtime,
): Promise<void> {
  const wire = saveEnvelopeV1ToWire(envelope);
  await store.replace(slotId, wire);
}

export async function loadRuntimeEnvelope(
  store: SaveStore,
  slotId: string,
  expectedContent: SaveContentIdentity,
  migrations: SaveMigrationRegistry = SAVE_V1_MIGRATIONS,
): Promise<SaveEnvelopeV1Runtime | null> {
  const stored = await store.load(slotId);
  if (stored === null) return null;
  const migrated = migrations.migrate(stored);
  const runtime = saveEnvelopeV1FromWire(migrated);
  assertSaveContentCompatibility(runtime, expectedContent);
  return runtime;
}

export async function exportSaveJson(
  store: SaveStore,
  slotId: string,
  expectedContent: SaveContentIdentity,
  migrations: SaveMigrationRegistry = SAVE_V1_MIGRATIONS,
): Promise<string | null> {
  const runtime = await loadRuntimeEnvelope(store, slotId, expectedContent, migrations);
  if (runtime === null) return null;
  const canonicalWire = saveEnvelopeV1ToWire(runtime);
  return `${JSON.stringify(canonicalWire, null, 2)}\n`;
}

export async function importSaveJson(
  store: SaveStore,
  slotId: string,
  utf8Json: string,
  expectedContent: SaveContentIdentity,
  migrations: SaveMigrationRegistry = SAVE_V1_MIGRATIONS,
): Promise<SaveEnvelopeV1Runtime> {
  let parsed: unknown;
  try {
    parsed = JSON.parse(utf8Json) as unknown;
  } catch (error: unknown) {
    throw new SyntaxError(`Invalid save JSON: ${error instanceof Error ? error.message : String(error)}`);
  }

  // Nothing touches storage before migration, full schema/range validation, and pack compatibility all pass.
  const migrated = migrations.migrate(parsed);
  const runtime = saveEnvelopeV1FromWire(migrated);
  assertSaveContentCompatibility(runtime, expectedContent);
  const canonicalWire = saveEnvelopeV1ToWire(runtime);
  await store.replace(slotId, canonicalWire);
  return runtime;
}

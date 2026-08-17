import { isRecord } from './jsonValue';

export interface SaveMigrationStep {
  readonly fromVersion: number;
  readonly toVersion: number;
  migrate(input: unknown): unknown;
}

function readSaveSchemaVersion(value: unknown): number {
  if (!isRecord(value)) throw new TypeError('Save migration input must be an object');
  const version = value.save_schema_version;
  if (typeof version !== 'number' || !Number.isSafeInteger(version) || version < 1) {
    throw new RangeError('save_schema_version must be a positive safe integer');
  }
  return version;
}

export class SaveMigrationRegistry {
  private readonly stepsByVersion = new Map<number, SaveMigrationStep>();

  public constructor(
    public readonly currentVersion: number,
    steps: readonly SaveMigrationStep[],
  ) {
    if (!Number.isSafeInteger(currentVersion) || currentVersion < 1) {
      throw new RangeError('currentVersion must be a positive safe integer');
    }
    for (const step of steps) {
      if (!Number.isSafeInteger(step.fromVersion) || step.toVersion !== step.fromVersion + 1) {
        throw new RangeError('Each migration step must advance exactly one schema version');
      }
      if (step.toVersion > currentVersion) {
        throw new RangeError('Migration step exceeds the registry current version');
      }
      if (this.stepsByVersion.has(step.fromVersion)) {
        throw new RangeError(`Duplicate migration from version ${step.fromVersion}`);
      }
      this.stepsByVersion.set(step.fromVersion, step);
    }
  }

  public migrate(input: unknown): unknown {
    let value = input;
    let version = readSaveSchemaVersion(value);
    if (version > this.currentVersion) {
      throw new RangeError(`Unknown future save schema version: ${version}`);
    }

    while (version < this.currentVersion) {
      const step = this.stepsByVersion.get(version);
      if (step === undefined) throw new RangeError(`No migration registered from save schema version ${version}`);
      const migrated = step.migrate(value);
      const migratedVersion = readSaveSchemaVersion(migrated);
      if (migratedVersion !== step.toVersion) {
        throw new RangeError(`Migration ${version}->${step.toVersion} returned schema version ${migratedVersion}`);
      }
      value = migrated;
      version = migratedVersion;
    }
    return value;
  }
}

export const SAVE_V1_MIGRATIONS = new SaveMigrationRegistry(1, []);

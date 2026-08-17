import type { SaveEnvelopeV1Wire } from './saveEnvelope';
import type { SaveStore } from './saveStore';

const DEFAULT_DATABASE_NAME = 'pokemon-ancient-trpg';
const DATABASE_VERSION = 1;
const SAVE_STORE = 'save_slots';
const SLOT_ID = /^[a-z0-9][a-z0-9._-]{0,63}$/;

interface SaveSlotRecord {
  readonly slot_id: string;
  readonly envelope: SaveEnvelopeV1Wire;
}

function validateSlotId(slotId: string): void {
  if (!SLOT_ID.test(slotId)) throw new RangeError('slotId must be a lowercase stable id');
}

function requestPromise<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error('IndexedDB request failed'));
  });
}

function transactionPromise(transaction: IDBTransaction): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onabort = () => reject(transaction.error ?? new Error('IndexedDB transaction aborted'));
    transaction.onerror = () => reject(transaction.error ?? new Error('IndexedDB transaction failed'));
  });
}

export class IndexedDbSaveStore implements SaveStore {
  private databasePromise: Promise<IDBDatabase> | null = null;

  public constructor(
    private readonly indexedDb: IDBFactory = globalThis.indexedDB,
    private readonly databaseName: string = DEFAULT_DATABASE_NAME,
  ) {
    if (indexedDb === undefined) throw new Error('IndexedDB is unavailable');
  }

  public async load(slotId: string): Promise<SaveEnvelopeV1Wire | null> {
    validateSlotId(slotId);
    const database = await this.openDatabase();
    const transaction = database.transaction(SAVE_STORE, 'readonly');
    const request = transaction.objectStore(SAVE_STORE).get(slotId) as IDBRequest<SaveSlotRecord | undefined>;
    const [record] = await Promise.all([requestPromise(request), transactionPromise(transaction)]);
    return record?.envelope ?? null;
  }

  public async replace(slotId: string, envelope: SaveEnvelopeV1Wire): Promise<void> {
    validateSlotId(slotId);
    const database = await this.openDatabase();
    const transaction = database.transaction(SAVE_STORE, 'readwrite');
    const request = transaction.objectStore(SAVE_STORE).put({ slot_id: slotId, envelope } satisfies SaveSlotRecord);
    await Promise.all([requestPromise(request), transactionPromise(transaction)]);
  }

  public async close(): Promise<void> {
    if (this.databasePromise === null) return;
    const pending = this.databasePromise;
    this.databasePromise = null;
    const database = await pending;
    database.close();
  }

  private openDatabase(): Promise<IDBDatabase> {
    if (this.databasePromise !== null) return this.databasePromise;
    const opening = new Promise<IDBDatabase>((resolve, reject) => {
      const request = this.indexedDb.open(this.databaseName, DATABASE_VERSION);
      let settled = false;
      request.onupgradeneeded = () => {
        const database = request.result;
        if (!database.objectStoreNames.contains(SAVE_STORE)) {
          database.createObjectStore(SAVE_STORE, { keyPath: 'slot_id' });
        }
      };
      request.onsuccess = () => {
        if (settled) {
          request.result.close();
          return;
        }
        settled = true;
        resolve(request.result);
      };
      request.onerror = () => {
        if (settled) return;
        settled = true;
        reject(request.error ?? new Error('Failed to open IndexedDB'));
      };
      request.onblocked = () => {
        if (settled) return;
        settled = true;
        reject(new Error('IndexedDB upgrade is blocked by another open connection'));
      };
    });
    this.databasePromise = opening.catch((error: unknown) => {
      this.databasePromise = null;
      throw error;
    });
    return this.databasePromise;
  }
}

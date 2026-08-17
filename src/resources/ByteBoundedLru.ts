export interface ByteBoundedLruEntry<T> {
  readonly value: T;
  readonly byteSize: number;
  readonly dispose: (() => void) | null;
}

export class ByteBoundedLru<T> {
  readonly #byteLimit: number;
  readonly #maxEntries: number;
  readonly #entries = new Map<string, ByteBoundedLruEntry<T>>();
  #bytes = 0;

  public constructor(byteLimit: number, maxEntries = Number.POSITIVE_INFINITY) {
    if (!Number.isSafeInteger(byteLimit) || byteLimit < 0) {
      throw new RangeError('byteLimit must be a non-negative safe integer');
    }
    if (!(maxEntries === Number.POSITIVE_INFINITY || (Number.isSafeInteger(maxEntries) && maxEntries >= 0))) {
      throw new RangeError('maxEntries must be a non-negative safe integer or Infinity');
    }
    this.#byteLimit = byteLimit;
    this.#maxEntries = maxEntries;
  }

  public get byteLimit(): number { return this.#byteLimit; }
  public get maxEntries(): number { return this.#maxEntries; }
  public get size(): number { return this.#entries.size; }
  public get bytes(): number { return this.#bytes; }

  public has(key: string): boolean { return this.#entries.has(key); }

  public get(key: string): T | undefined {
    const entry = this.#entries.get(key);
    if (entry === undefined) return undefined;
    this.#entries.delete(key);
    this.#entries.set(key, entry);
    return entry.value;
  }

  public set(key: string, value: T, byteSize: number, dispose: (() => void) | null = null): boolean {
    if (!Number.isSafeInteger(byteSize) || byteSize < 0) {
      throw new RangeError('byteSize must be a non-negative safe integer');
    }

    const existing = this.#entries.get(key);
    if (existing !== undefined) {
      this.#entries.delete(key);
      this.#bytes -= existing.byteSize;
      existing.dispose?.();
    }

    if (byteSize > this.#byteLimit || this.#maxEntries === 0) {
      dispose?.();
      return false;
    }

    this.#entries.set(key, { value, byteSize, dispose });
    this.#bytes += byteSize;
    this.#trim();
    return this.#entries.has(key);
  }

  public delete(key: string): boolean {
    const entry = this.#entries.get(key);
    if (entry === undefined) return false;
    this.#entries.delete(key);
    this.#bytes -= entry.byteSize;
    entry.dispose?.();
    return true;
  }

  public clear(): void {
    for (const entry of this.#entries.values()) entry.dispose?.();
    this.#entries.clear();
    this.#bytes = 0;
  }

  #trim(): void {
    while (this.#bytes > this.#byteLimit || this.#entries.size > this.#maxEntries) {
      const oldestKey = this.#entries.keys().next().value as string | undefined;
      if (oldestKey === undefined) break;
      this.delete(oldestKey);
    }
  }
}

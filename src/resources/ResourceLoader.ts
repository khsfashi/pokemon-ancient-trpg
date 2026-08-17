import { ByteBoundedLru } from './ByteBoundedLru';

export const COMPACT_ICON_CACHE_CAP_BYTES = 384 * 1024;
export const ENCOUNTER_ATLAS_CACHE_CAP_BYTES = 4 * 1024 * 1024;
export const MAX_RESIDENT_ENCOUNTER_ATLASES = 2;

export interface LoadableResourceDescriptor {
  readonly resource_id: string;
  readonly asset_class: string;
  readonly requirement: string;
  readonly availability: string;
  readonly fallback_mode: string;
  readonly fallback_resource_id: string | null;
  readonly output_format: string | null;
}

export interface ResourceLocation {
  readonly url: string;
  readonly mimeType: string | null;
}

export interface DecodedResource<T> {
  readonly value: T;
  readonly decodedBytes: number;
  readonly dispose: (() => void) | null;
}

export interface ResourceDecodeRequest<D extends LoadableResourceDescriptor> {
  readonly descriptor: D;
  readonly bytes: Uint8Array;
  readonly mimeType: string | null;
  readonly url: string;
}

export interface ResourceDecoder<D extends LoadableResourceDescriptor, T> {
  decode(request: ResourceDecodeRequest<D>): Promise<DecodedResource<T>>;
}

export interface LoadedResource<T> {
  readonly resourceId: string;
  readonly value: T;
  readonly encodedBytes: number;
  readonly decodedBytes: number;
}

export interface LoadedResourceResult<T> {
  readonly kind: 'loaded';
  readonly resource: LoadedResource<T>;
}

export interface FallbackResourceResult {
  readonly kind: 'fallback';
  readonly resourceId: string;
  readonly fallbackMode: string;
  readonly fallbackResourceId: string | null;
}

export type ResourceLoadResult<T> = LoadedResourceResult<T> | FallbackResourceResult;
export type ResourceFetch = (url: string) => Promise<Response>;

export interface ResourceLoaderOptions<D extends LoadableResourceDescriptor, T> {
  readonly getDescriptor: (resourceId: string) => D | undefined;
  readonly resolveLocation: (descriptor: D) => ResourceLocation | null;
  readonly decoder: ResourceDecoder<D, T>;
  readonly fetcher?: ResourceFetch;
  readonly compactCacheBytes?: number;
  readonly encounterCacheBytes?: number;
  readonly maxResidentEncounterAtlases?: number;
}

interface ResidentEntry<T> {
  readonly result: LoadedResourceResult<T>;
  readonly dispose: (() => void) | null;
}

export interface ResourceCacheStats {
  readonly compactEntries: number;
  readonly compactBytes: number;
  readonly encounterEntries: number;
  readonly encounterBytes: number;
  readonly residentEntries: number;
  readonly fallbackEntries: number;
  readonly inFlightRequests: number;
}

export class ResourceLoader<D extends LoadableResourceDescriptor, T> {
  readonly #getDescriptor: (resourceId: string) => D | undefined;
  readonly #resolveLocation: (descriptor: D) => ResourceLocation | null;
  readonly #decoder: ResourceDecoder<D, T>;
  readonly #fetcher: ResourceFetch;
  readonly #compactCache: ByteBoundedLru<LoadedResourceResult<T>>;
  readonly #encounterCache: ByteBoundedLru<LoadedResourceResult<T>>;
  readonly #resident = new Map<string, ResidentEntry<T>>();
  readonly #fallbacks = new Map<string, FallbackResourceResult>();
  readonly #inFlight = new Map<string, Promise<ResourceLoadResult<T>>>();

  public constructor(options: ResourceLoaderOptions<D, T>) {
    this.#getDescriptor = options.getDescriptor;
    this.#resolveLocation = options.resolveLocation;
    this.#decoder = options.decoder;
    this.#fetcher = options.fetcher ?? ((url) => fetch(url));
    this.#compactCache = new ByteBoundedLru(
      options.compactCacheBytes ?? COMPACT_ICON_CACHE_CAP_BYTES,
    );
    this.#encounterCache = new ByteBoundedLru(
      options.encounterCacheBytes ?? ENCOUNTER_ATLAS_CACHE_CAP_BYTES,
      options.maxResidentEncounterAtlases ?? MAX_RESIDENT_ENCOUNTER_ATLASES,
    );
  }

  public async load(resourceId: string): Promise<ResourceLoadResult<T>> {
    const descriptor = this.#getDescriptor(resourceId);
    if (descriptor === undefined) throw new RangeError(`Unknown resource_id: ${resourceId}`);

    const cached = this.#getCached(descriptor);
    if (cached !== undefined) return cached;

    const fallback = this.#fallbacks.get(resourceId);
    if (fallback !== undefined) return fallback;

    const existing = this.#inFlight.get(resourceId);
    if (existing !== undefined) return existing;

    const pending = this.#loadUncached(descriptor).finally(() => {
      if (this.#inFlight.get(resourceId) === pending) this.#inFlight.delete(resourceId);
    });
    this.#inFlight.set(resourceId, pending);
    return pending;
  }

  public isCached(resourceId: string): boolean {
    return this.#compactCache.has(resourceId)
      || this.#encounterCache.has(resourceId)
      || this.#resident.has(resourceId)
      || this.#fallbacks.has(resourceId);
  }

  public invalidate(resourceId: string): void {
    this.#compactCache.delete(resourceId);
    this.#encounterCache.delete(resourceId);
    const resident = this.#resident.get(resourceId);
    if (resident !== undefined) {
      this.#resident.delete(resourceId);
      resident.dispose?.();
    }
    this.#fallbacks.delete(resourceId);
  }

  public clear(): void {
    this.#compactCache.clear();
    this.#encounterCache.clear();
    for (const entry of this.#resident.values()) entry.dispose?.();
    this.#resident.clear();
    this.#fallbacks.clear();
  }

  public getStats(): ResourceCacheStats {
    return {
      compactEntries: this.#compactCache.size,
      compactBytes: this.#compactCache.bytes,
      encounterEntries: this.#encounterCache.size,
      encounterBytes: this.#encounterCache.bytes,
      residentEntries: this.#resident.size,
      fallbackEntries: this.#fallbacks.size,
      inFlightRequests: this.#inFlight.size,
    };
  }

  async #loadUncached(descriptor: D): Promise<ResourceLoadResult<T>> {
    try {
      const location = this.#resolveLocation(descriptor);
      if (location === null) return this.#fallbackOrThrow(descriptor, 'No local resource location');
      if (!isAllowedLocalResourceUrl(location.url)) {
        return this.#fallbackOrThrow(descriptor, `Remote resource URL is not allowed: ${location.url}`);
      }

      const response = await this.#fetcher(location.url);
      if (!response.ok) {
        return this.#fallbackOrThrow(descriptor, `Resource fetch failed: ${response.status}`);
      }

      const bytes = new Uint8Array(await response.arrayBuffer());
      const decoded = await this.#decoder.decode({
        descriptor,
        bytes,
        mimeType: location.mimeType,
        url: location.url,
      });
      if (!Number.isSafeInteger(decoded.decodedBytes) || decoded.decodedBytes < 0) {
        decoded.dispose?.();
        throw new RangeError('decodedBytes must be a non-negative safe integer');
      }

      const result: LoadedResourceResult<T> = Object.freeze({
        kind: 'loaded',
        resource: Object.freeze({
          resourceId: descriptor.resource_id,
          value: decoded.value,
          encodedBytes: bytes.byteLength,
          decodedBytes: decoded.decodedBytes,
        }),
      });

      if (!this.#cacheLoaded(descriptor, result, decoded.dispose)) {
        return this.#fallbackOrThrow(descriptor, 'Decoded resource exceeds the frozen cache guardrail');
      }
      return result;
    } catch (error) {
      if (isOptionalDescriptor(descriptor)) return this.#fallback(descriptor);
      throw error;
    }
  }

  #getCached(descriptor: D): LoadedResourceResult<T> | undefined {
    switch (cacheClassFor(descriptor)) {
      case 'compact': return this.#compactCache.get(descriptor.resource_id);
      case 'encounter': return this.#encounterCache.get(descriptor.resource_id);
      case 'resident': return this.#resident.get(descriptor.resource_id)?.result;
    }
  }

  #cacheLoaded(
    descriptor: D,
    result: LoadedResourceResult<T>,
    dispose: (() => void) | null,
  ): boolean {
    const decodedBytes = result.resource.decodedBytes;
    switch (cacheClassFor(descriptor)) {
      case 'compact':
        return this.#compactCache.set(descriptor.resource_id, result, decodedBytes, dispose);
      case 'encounter':
        return this.#encounterCache.set(descriptor.resource_id, result, decodedBytes, dispose);
      case 'resident': {
        const existing = this.#resident.get(descriptor.resource_id);
        existing?.dispose?.();
        this.#resident.set(descriptor.resource_id, { result, dispose });
        return true;
      }
    }
  }

  #fallbackOrThrow(descriptor: D, message: string): FallbackResourceResult {
    if (!isOptionalDescriptor(descriptor)) throw new Error(message);
    return this.#fallback(descriptor);
  }

  #fallback(descriptor: D): FallbackResourceResult {
    const existing = this.#fallbacks.get(descriptor.resource_id);
    if (existing !== undefined) return existing;
    const fallback = Object.freeze({
      kind: 'fallback' as const,
      resourceId: descriptor.resource_id,
      fallbackMode: descriptor.fallback_mode,
      fallbackResourceId: descriptor.fallback_resource_id,
    });
    this.#fallbacks.set(descriptor.resource_id, fallback);
    return fallback;
  }
}

type CacheClass = 'compact' | 'encounter' | 'resident';

function cacheClassFor(descriptor: LoadableResourceDescriptor): CacheClass {
  if (descriptor.asset_class === 'pokemon_icon') return 'compact';
  if (descriptor.asset_class === 'pokemon_encounter_image') return 'encounter';
  return 'resident';
}

function isOptionalDescriptor(descriptor: LoadableResourceDescriptor): boolean {
  return descriptor.requirement === 'optional' || descriptor.availability === 'optional_local_only';
}

export function isAllowedLocalResourceUrl(url: string): boolean {
  return url.startsWith('/') || url.startsWith('./') || url.startsWith('../') || url.startsWith('blob:');
}

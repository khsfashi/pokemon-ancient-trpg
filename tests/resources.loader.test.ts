import { describe, expect, it, vi } from 'vitest';
import {
  COMPACT_ICON_CACHE_CAP_BYTES,
  ENCOUNTER_ATLAS_CACHE_CAP_BYTES,
  ENCOUNTER_ATLAS_PER_RESOURCE_CAP_BYTES,
  MAX_RESIDENT_ENCOUNTER_ATLASES,
  ResourceLoader,
  type DecodedResource,
  type LoadableResourceDescriptor,
  type ResourceDecodeRequest,
  type ResourceDecoder,
} from '../src/resources/ResourceLoader';

interface TestValue { readonly id: string; }

class TestDecoder implements ResourceDecoder<LoadableResourceDescriptor, TestValue> {
  readonly #decodedBytes: ReadonlyMap<string, number>;
  public decodeCount = 0;
  public disposeCount = 0;

  public constructor(decodedBytes: ReadonlyMap<string, number>) {
    this.#decodedBytes = decodedBytes;
  }

  public async decode(
    request: ResourceDecodeRequest<LoadableResourceDescriptor>,
  ): Promise<DecodedResource<TestValue>> {
    this.decodeCount += 1;
    const decodedBytes = this.#decodedBytes.get(request.descriptor.resource_id) ?? request.bytes.byteLength;
    return {
      value: Object.freeze({ id: request.descriptor.resource_id }),
      decodedBytes,
      dispose: () => { this.disposeCount += 1; },
    };
  }
}

function descriptor(
  resourceId: string,
  assetClass: string,
  requirement: string = 'optional',
): LoadableResourceDescriptor {
  return Object.freeze({
    resource_id: resourceId,
    asset_class: assetClass,
    requirement,
    availability: requirement === 'optional' ? 'optional_local_only' : 'public_build_time_import',
    fallback_mode: 'generic_placeholder',
    fallback_resource_id: null,
    output_format: 'png',
  });
}

function loaderFor(
  descriptors: readonly LoadableResourceDescriptor[],
  decoder: TestDecoder,
  fetcher: (url: string) => Promise<Response> = async () => new Response(new Uint8Array([1, 2, 3])),
) {
  const byId = new Map(descriptors.map((value) => [value.resource_id, value]));
  return new ResourceLoader({
    getDescriptor: (resourceId) => byId.get(resourceId),
    resolveLocation: (value) => ({ url: `/test/${value.resource_id}.bin`, mimeType: 'application/octet-stream' }),
    decoder,
    fetcher,
  });
}

describe('ResourceLoader', () => {
  it('coalesces concurrent identical loads and decodes once', async () => {
    const item = descriptor('icon.a', 'pokemon_icon');
    const decoder = new TestDecoder(new Map([['icon.a', 1024]]));
    let release: (() => void) | undefined;
    const gate = new Promise<void>((resolve) => { release = resolve; });
    const fetcher = vi.fn(async () => {
      await gate;
      return new Response(new Uint8Array([7, 8, 9]));
    });
    const loader = loaderFor([item], decoder, fetcher);

    const first = loader.load('icon.a');
    const second = loader.load('icon.a');
    const third = loader.load('icon.a');
    expect(loader.getStats().inFlightRequests).toBe(1);
    release?.();

    const [a, b, c] = await Promise.all([first, second, third]);
    expect(fetcher).toHaveBeenCalledTimes(1);
    expect(decoder.decodeCount).toBe(1);
    expect(a).toBe(b);
    expect(b).toBe(c);
  });

  it('keeps compact icons under the frozen 384 KiB decoded cap', async () => {
    const a = descriptor('icon.a', 'pokemon_icon');
    const b = descriptor('icon.b', 'pokemon_icon');
    const decoder = new TestDecoder(new Map([
      ['icon.a', 200 * 1024],
      ['icon.b', 200 * 1024],
    ]));
    const loader = loaderFor([a, b], decoder);

    await loader.load('icon.a');
    await loader.load('icon.b');

    expect(loader.getStats()).toMatchObject({
      compactEntries: 1,
      compactBytes: 200 * 1024,
    });
    expect(loader.getStats().compactBytes).toBeLessThanOrEqual(COMPACT_ICON_CACHE_CAP_BYTES);
    expect(loader.isCached('icon.a')).toBe(false);
    expect(loader.isCached('icon.b')).toBe(true);
    expect(decoder.disposeCount).toBe(1);
  });

  it('enforces both the 4 MiB encounter cap and max-two resident guard', async () => {
    const descriptors = ['a', 'b', 'c'].map((id) => descriptor(`encounter.${id}`, 'pokemon_encounter_image'));
    const decoder = new TestDecoder(new Map(descriptors.map((value) => [value.resource_id, 1024 * 1024])));
    const loader = loaderFor(descriptors, decoder);

    for (const value of descriptors) await loader.load(value.resource_id);

    expect(loader.getStats()).toMatchObject({
      encounterEntries: MAX_RESIDENT_ENCOUNTER_ATLASES,
      encounterBytes: 2 * 1024 * 1024,
    });
    expect(loader.getStats().encounterBytes).toBeLessThanOrEqual(ENCOUNTER_ATLAS_CACHE_CAP_BYTES);
    expect(loader.isCached('encounter.a')).toBe(false);
    expect(loader.isCached('encounter.b')).toBe(true);
    expect(loader.isCached('encounter.c')).toBe(true);
  });

  it('rejects an individual encounter decode above the frozen 2 MiB guardrail', async () => {
    const item = descriptor('encounter.oversized', 'pokemon_encounter_image');
    const decoder = new TestDecoder(new Map([
      ['encounter.oversized', ENCOUNTER_ATLAS_PER_RESOURCE_CAP_BYTES + 1],
    ]));
    const loader = loaderFor([item], decoder);

    const result = await loader.load(item.resource_id);

    expect(result.kind).toBe('fallback');
    expect(loader.getStats()).toMatchObject({ encounterEntries: 0, encounterBytes: 0, fallbackEntries: 1 });
    expect(decoder.disposeCount).toBe(1);
  });

  it('falls back deterministically for missing optional local media and caches the fallback', async () => {
    const item = descriptor('optional.missing', 'pokemon_icon');
    const decoder = new TestDecoder(new Map());
    const loader = new ResourceLoader({
      getDescriptor: (resourceId) => resourceId === item.resource_id ? item : undefined,
      resolveLocation: () => null,
      decoder,
      fetcher: vi.fn(),
    });

    const first = await loader.load(item.resource_id);
    const second = await loader.load(item.resource_id);

    expect(first).toBe(second);
    expect(first).toEqual({
      kind: 'fallback',
      resourceId: item.resource_id,
      fallbackMode: 'generic_placeholder',
      fallbackResourceId: null,
    });
    expect(loader.getStats().fallbackEntries).toBe(1);
    expect(decoder.decodeCount).toBe(0);
  });

  it('rejects remote runtime URLs and never calls fetch for required resources', async () => {
    const item = descriptor('required.remote', 'ui_icon', 'required');
    const decoder = new TestDecoder(new Map());
    const fetcher = vi.fn();
    const loader = new ResourceLoader({
      getDescriptor: (resourceId) => resourceId === item.resource_id ? item : undefined,
      resolveLocation: () => ({ url: 'https://example.invalid/asset.png', mimeType: 'image/png' }),
      decoder,
      fetcher,
    });

    await expect(loader.load(item.resource_id)).rejects.toThrow('Remote resource URL is not allowed');
    expect(fetcher).not.toHaveBeenCalled();
  });

  it('reuses one decoded instance until explicit invalidation', async () => {
    const item = descriptor('encounter.once', 'pokemon_encounter_image');
    const decoder = new TestDecoder(new Map([['encounter.once', 512 * 1024]]));
    const fetcher = vi.fn(async () => new Response(new Uint8Array([1])));
    const loader = loaderFor([item], decoder, fetcher);

    const first = await loader.load(item.resource_id);
    const second = await loader.load(item.resource_id);
    expect(first).toBe(second);
    expect(decoder.decodeCount).toBe(1);

    loader.invalidate(item.resource_id);
    await loader.load(item.resource_id);
    expect(decoder.decodeCount).toBe(2);
  });
});

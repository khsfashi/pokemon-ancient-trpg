import { expect, test } from '@playwright/test';

const COMPACT_CAP = 384 * 1024;
const ENCOUNTER_CAP = 4 * 1024 * 1024;

test('measures decoded resource behavior inside the phone-sized browser', async ({ page, browserName }) => {
  await page.goto('/');

  const measurement = await page.evaluate(async () => {
    const loaderModule = await import('/src/resources/ResourceLoader.ts');
    const decoderModule = await import('/src/resources/BrowserImageDecoder.ts');
    const { ResourceLoader } = loaderModule;
    const { BrowserImageDecoder } = decoderModule;

    const descriptors = [
      { resource_id: 'probe.compact', asset_class: 'pokemon_icon', requirement: 'optional', availability: 'public_build_time_import', fallback_mode: 'generic_placeholder', fallback_resource_id: null, output_format: 'svg' },
      { resource_id: 'probe.encounter.a', asset_class: 'pokemon_encounter_image', requirement: 'optional', availability: 'public_build_time_import', fallback_mode: 'text_only', fallback_resource_id: null, output_format: 'svg' },
      { resource_id: 'probe.encounter.b', asset_class: 'pokemon_encounter_image', requirement: 'optional', availability: 'public_build_time_import', fallback_mode: 'text_only', fallback_resource_id: null, output_format: 'svg' },
      { resource_id: 'probe.encounter.c', asset_class: 'pokemon_encounter_image', requirement: 'optional', availability: 'public_build_time_import', fallback_mode: 'text_only', fallback_resource_id: null, output_format: 'svg' },
      { resource_id: 'probe.missing', asset_class: 'pokemon_icon', requirement: 'optional', availability: 'optional_local_only', fallback_mode: 'generic_placeholder', fallback_resource_id: null, output_format: 'svg' },
    ];
    const byId = new Map(descriptors.map((value) => [value.resource_id, value]));
    const urls = new Map([
      ['probe.compact', '/test-assets/compact-probe.svg'],
      ['probe.encounter.a', '/test-assets/encounter-a.svg'],
      ['probe.encounter.b', '/test-assets/encounter-b.svg'],
      ['probe.encounter.c', '/test-assets/encounter-c.svg'],
    ]);
    let fetchCount = 0;
    const loader = new ResourceLoader({
      getDescriptor: (resourceId: string) => byId.get(resourceId),
      resolveLocation: (descriptor: { resource_id: string }) => {
        const url = urls.get(descriptor.resource_id);
        return url === undefined ? null : { url, mimeType: 'image/svg+xml' };
      },
      decoder: new BrowserImageDecoder(),
      fetcher: async (url: string) => {
        fetchCount += 1;
        return fetch(url);
      },
    });

    const [compactA, compactB] = await Promise.all([
      loader.load('probe.compact'),
      loader.load('probe.compact'),
    ]);
    const encounterA = await loader.load('probe.encounter.a');
    const encounterB = await loader.load('probe.encounter.b');
    const encounterC = await loader.load('probe.encounter.c');
    const fallbackA = await loader.load('probe.missing');
    const fallbackB = await loader.load('probe.missing');

    const loadedDimensions = [compactA, encounterA, encounterB, encounterC].map((result) => {
      if (result.kind !== 'loaded') throw new Error('probe unexpectedly fell back');
      return {
        id: result.resource.resourceId,
        width: result.resource.value.width,
        height: result.resource.value.height,
        encodedBytes: result.resource.encodedBytes,
        decodedBytes: result.resource.decodedBytes,
      };
    });

    return {
      fetchCount,
      compactCoalescedIdentity: compactA === compactB,
      fallbackIdentity: fallbackA === fallbackB,
      fallbackKind: fallbackA.kind,
      loadedDimensions,
      stats: loader.getStats(),
      encounterAResident: loader.isCached('probe.encounter.a'),
      encounterBResident: loader.isCached('probe.encounter.b'),
      encounterCResident: loader.isCached('probe.encounter.c'),
    };
  });

  console.log(`P7_RESOURCE_MEASUREMENT ${browserName} ${JSON.stringify(measurement)}`);

  expect(measurement.compactCoalescedIdentity).toBe(true);
  expect(measurement.fallbackIdentity).toBe(true);
  expect(measurement.fallbackKind).toBe('fallback');
  expect(measurement.fetchCount).toBe(4);
  expect(measurement.loadedDimensions.map(({ width, height }) => [width, height])).toEqual([
    [68, 56],
    [512, 512],
    [640, 640],
    [768, 512],
  ]);
  expect(measurement.stats.compactBytes).toBeLessThanOrEqual(COMPACT_CAP);
  expect(measurement.stats.encounterBytes).toBeLessThanOrEqual(ENCOUNTER_CAP);
  expect(measurement.stats.encounterEntries).toBe(2);
  expect(measurement.encounterAResident).toBe(false);
  expect(measurement.encounterBResident).toBe(true);
  expect(measurement.encounterCResident).toBe(true);
});

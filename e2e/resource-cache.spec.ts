import { expect, test } from '@playwright/test';

const COMPACT_CAP = 384 * 1024;
const ENCOUNTER_CAP = 4 * 1024 * 1024;

const TEST_IMAGES = new Map<string, string>([
  ['/test-assets/compact-probe.svg', '<svg xmlns="http://www.w3.org/2000/svg" width="68" height="56" viewBox="0 0 68 56"><rect width="68" height="56" rx="8" fill="#d9e7d4"/><circle cx="22" cy="28" r="12" fill="#61755c"/><path d="M36 18h20v20H36z" fill="#f4f1de"/></svg>'],
  ['/test-assets/encounter-a.svg', '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect width="512" height="512" fill="#e8e2cf"/><circle cx="256" cy="256" r="176" fill="#657166"/><circle cx="208" cy="220" r="24" fill="#f5f2e8"/><circle cx="304" cy="220" r="24" fill="#f5f2e8"/></svg>'],
  ['/test-assets/encounter-b.svg', '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 640 640"><rect width="640" height="640" fill="#ded6bf"/><path d="M96 544L320 72l224 472z" fill="#6c7767"/><circle cx="320" cy="340" r="72" fill="#f5f2e8"/></svg>'],
  ['/test-assets/encounter-c.svg', '<svg xmlns="http://www.w3.org/2000/svg" width="768" height="512" viewBox="0 0 768 512"><rect width="768" height="512" fill="#e7dfca"/><rect x="112" y="96" width="544" height="320" rx="120" fill="#657166"/><path d="M288 160h192v192H288z" fill="#f5f2e8"/></svg>'],
]);

test('measures decoded resource behavior inside the phone-sized browser', async ({ page, browserName }) => {
  await page.route('**/test-assets/**', async (route) => {
    const pathname = new URL(route.request().url()).pathname;
    const body = TEST_IMAGES.get(pathname);
    if (body === undefined) {
      await route.abort('failed');
      return;
    }
    await route.fulfill({ status: 200, contentType: 'image/svg+xml', body });
  });
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

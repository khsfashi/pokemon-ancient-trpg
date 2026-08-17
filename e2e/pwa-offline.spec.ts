import { expect, test } from '@playwright/test';
import { readFile, writeFile } from 'node:fs/promises';

const SERVICE_WORKER_PATH = new URL('../dist/sw.js', import.meta.url);
const RUNTIME_PACK_PATH = new URL('../src/generated/runtime-pack.json', import.meta.url);
const SLOT_ID = 'p7-update-safety';

interface RuntimePackIdentity {
  readonly content_pack_id: string;
  readonly content_pack_version: string;
  readonly content_digest_sha256: string;
  readonly p5_contract_version: string;
}

async function loadRuntimePackIdentity(): Promise<RuntimePackIdentity> {
  const pack = JSON.parse(await readFile(RUNTIME_PACK_PATH, 'utf8')) as Record<string, unknown>;
  const contentPackId = pack.content_pack_id;
  const contentPackVersion = pack.content_pack_version;
  const contentDigest = pack.content_digest_sha256;
  const p5ContractVersion = pack.p5_contract_version;
  if (typeof contentPackId !== 'string' || typeof contentPackVersion !== 'string' ||
      typeof contentDigest !== 'string' || typeof p5ContractVersion !== 'string') {
    throw new Error('generated runtime pack identity is malformed');
  }
  return {
    content_pack_id: contentPackId,
    content_pack_version: contentPackVersion,
    content_digest_sha256: contentDigest,
    p5_contract_version: p5ContractVersion,
  };
}

function pendingWire(identity: RuntimePackIdentity) {
  const runSeedHex = '0000000000000000000000000000002a';
  return {
    save_schema_version: 1,
    architecture_contract_version: 'p7-architecture-v1',
    content_pack_id: identity.content_pack_id,
    content_pack_version: identity.content_pack_version,
    content_digest_sha256: identity.content_digest_sha256,
    p5_contract_version: identity.p5_contract_version,
    run_seed_hex: runSeedHex,
    transition_seq_u64: '18446744073709551614',
    created_at_iso: '2026-08-17T04:00:00.000Z',
    updated_at_iso: '2026-08-17T04:02:00.000Z',
    authoritative_state: {
      location_ref: 'p7.acceptance.update-safety',
      health: 6,
      companions: 0,
    },
    pending_event_instance: {
      pending_schema_version: 'p5-pending-v1',
      p5_contract_version: identity.p5_contract_version,
      content_pack_id: identity.content_pack_id,
      content_pack_version: identity.content_pack_version,
      content_digest_sha256: identity.content_digest_sha256,
      run_seed_hex: runSeedHex,
      instance_id: 'p7.acceptance.pending',
      event_id: 'p7.acceptance.event',
      content_revision: 1,
      origin_transition_seq_u64: '9007199254740993',
      trigger_id: 'travel_step_committed',
      evaluation_ordinal: 0,
      phase: 'awaiting_reaction',
      resolved_choice_view: [
        { choice_id: 'observe_and_withdraw', visible: true, enabled: true },
      ],
      selected_choice_id: 'observe_and_withdraw',
      completed_rng_draw_records: [
        {
          channel: 'check.d6',
          subject_id: 'p7.acceptance.event/observe_and_withdraw/read_escape_gap',
          draw_index_u64: '0',
          raw_u64: '4463312059452329917',
          accepted: true,
          bounded_result_u64: '1',
        },
        {
          channel: 'check.d6',
          subject_id: 'p7.acceptance.event/observe_and_withdraw/read_escape_gap',
          draw_index_u64: '1',
          raw_u64: '8154684722988415358',
          accepted: true,
          bounded_result_u64: '2',
        },
      ],
      completed_check_result: {
        check_id: 'read_escape_gap',
        dice: [2, 3],
        total: 8,
        margin: -3,
        outcome_band: 'setback',
        doubles_overlay: 'none',
      },
      pending_consequence: 'fixture.consequence.light_sting',
      pending_reaction_window: 'fixture.reaction.escape_smoke',
      precommit_state_digest: 'p7-acceptance-precommit',
    },
  };
}

async function writePendingSave(page: import('@playwright/test').Page, wire: ReturnType<typeof pendingWire>): Promise<string> {
  return page.evaluate(async ({ slotId, wire }) => {
    const database = await new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open('pokemon-ancient-trpg', 1);
      request.onupgradeneeded = () => {
        if (!request.result.objectStoreNames.contains('save_slots')) {
          request.result.createObjectStore('save_slots', { keyPath: 'slot_id' });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error ?? new Error('failed to open update-safety database'));
    });
    try {
      await new Promise<void>((resolve, reject) => {
        const transaction = database.transaction('save_slots', 'readwrite');
        transaction.objectStore('save_slots').put({ slot_id: slotId, envelope: wire });
        transaction.oncomplete = () => resolve();
        transaction.onabort = () => reject(transaction.error ?? new Error('update-safety save transaction aborted'));
        transaction.onerror = () => reject(transaction.error ?? new Error('update-safety save transaction failed'));
      });
    } finally {
      database.close();
    }
    return JSON.stringify(wire);
  }, { slotId: SLOT_ID, wire });
}

async function readPendingSave(page: import('@playwright/test').Page): Promise<string> {
  return page.evaluate(async (slotId) => {
    const database = await new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open('pokemon-ancient-trpg', 1);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error ?? new Error('failed to open update-safety database'));
    });
    try {
      return await new Promise<string>((resolve, reject) => {
        const transaction = database.transaction('save_slots', 'readonly');
        const request = transaction.objectStore('save_slots').get(slotId);
        request.onsuccess = () => {
          const record = request.result as { envelope?: unknown } | undefined;
          if (record?.envelope === undefined) {
            reject(new Error('update-safety save disappeared'));
            return;
          }
          resolve(JSON.stringify(record.envelope));
        };
        request.onerror = () => reject(request.error ?? new Error('failed to read update-safety save'));
      });
    } finally {
      database.close();
    }
  }, SLOT_ID);
}

test('installs the production worker, reloads offline, and keeps an update waiting during pending state', async ({ page, context, browserName }) => {
  const identity = await loadRuntimePackIdentity();

  await page.goto('/');
  const firstInstallScope = await page.evaluate(async () => {
    if (!('serviceWorker' in navigator)) throw new Error('service workers are unavailable');
    const registration = await navigator.serviceWorker.ready;
    return registration.scope;
  });
  expect(firstInstallScope.endsWith('/')).toBe(true);
  await expect.poll(async () => page.evaluate(async () => {
    const registration = await navigator.serviceWorker.ready;
    return registration.active?.state ?? null;
  })).toBe('activated');

  await page.reload();
  await expect.poll(async () => page.evaluate(() => navigator.serviceWorker.controller?.state ?? null)).toBe('activated');

  await context.setOffline(true);
  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('heading', { name: 'Ancient Pokémon TRPG' })).toBeVisible();
  const offlineControllerState = await page.evaluate(() => navigator.serviceWorker.controller?.state ?? null);
  expect(offlineControllerState).toBe('activated');
  await context.setOffline(false);

  const expectedPendingJson = await writePendingSave(page, pendingWire(identity));
  expect(await readPendingSave(page)).toBe(expectedPendingJson);

  const originalServiceWorker = await readFile(SERVICE_WORKER_PATH, 'utf8');
  const updateMarker = `\n// p7-batch06-update-probe-${browserName}-${Date.now()}\n`;
  await writeFile(SERVICE_WORKER_PATH, originalServiceWorker + updateMarker, 'utf8');

  try {
    const updateState = await page.evaluate(async () => {
      const registration = await navigator.serviceWorker.getRegistration('/');
      if (registration?.active === null || registration === undefined) {
        throw new Error('active service worker registration is missing');
      }
      await registration.update();

      const deadline = Date.now() + 15_000;
      while (registration.waiting === null && Date.now() < deadline) {
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      if (registration.waiting === null) throw new Error('updated service worker did not enter waiting state');

      return {
        activeState: registration.active?.state ?? null,
        waitingState: registration.waiting.state,
        controllerMatchesActive: navigator.serviceWorker.controller === registration.active,
      };
    });

    expect(updateState.activeState).toBe('activated');
    expect(updateState.waitingState).toBe('installed');
    expect(updateState.controllerMatchesActive).toBe(true);
    expect(await readPendingSave(page)).toBe(expectedPendingJson);

    await page.reload({ waitUntil: 'domcontentloaded' });
    await expect(page.getByRole('heading', { name: 'Ancient Pokémon TRPG' })).toBeVisible();
    expect(await readPendingSave(page)).toBe(expectedPendingJson);

    const afterReload = await page.evaluate(async () => {
      const registration = await navigator.serviceWorker.getRegistration('/');
      if (registration === undefined) throw new Error('service worker registration disappeared');
      return {
        hasWaitingWorker: registration.waiting !== null,
        activeState: registration.active?.state ?? null,
        controllerMatchesActive: navigator.serviceWorker.controller === registration.active,
      };
    });
    expect(afterReload.hasWaitingWorker).toBe(true);
    expect(afterReload.activeState).toBe('activated');
    expect(afterReload.controllerMatchesActive).toBe(true);

    console.log(`P7_PWA_PROOF ${browserName} ${JSON.stringify({
      firstInstall: 'activated',
      offlineReload: 'PASS',
      waitingUpdate: afterReload.hasWaitingWorker,
      pendingSavePreserved: true,
    })}`);
  } finally {
    await writeFile(SERVICE_WORKER_PATH, originalServiceWorker, 'utf8');
  }
});

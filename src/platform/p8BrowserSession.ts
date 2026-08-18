import { createInitialP8AuthorityState, p8AuthorityStateToJson, type P8AuthorityState, type P8CharacterCreationInput } from '../domain/p8Authority';
import { p8AuthorityStateFromJson } from '../domain/p8AuthorityJson';
import { commitP8PreparationAction, type P8PreparationActionId } from '../domain/p8Preparation';
import { createP8SliceCharacter, P8_SLICE_CONTENT_IDENTITY, P8_SLICE_EVENT_CATALOG } from '../content/p8SliceContent';
import { getP8SliceScene, P8_SLICE_SCENE_SEQUENCE, type P8ScenePresentation } from '../content/p8SlicePresentation';
import { digestP8AuthorityState } from '../runtime/p8Canonical';
import { prepareP8PendingEvent, resolveP8EventChoice, selectP8Event } from '../events/p8EventRuntime';
import type { HashProvider } from '../runtime/hashProvider';
import { P5_CONTRACT_VERSION, type PendingEventInstanceRuntimeV1 } from '../saves/pendingEvent';
import { P7_ARCHITECTURE_CONTRACT_VERSION, SAVE_SCHEMA_VERSION, type SaveEnvelopeV1Runtime } from '../saves/saveEnvelope';
import { loadRuntimeEnvelope, saveRuntimeEnvelope, type SaveStore } from '../saves/saveStore';
import { IndexedDbSaveStore } from '../saves/indexedDbSaveStore';
import { WebCryptoHashProvider } from './webCryptoHashProvider';

const DEFAULT_SLOT_ID = 'p8.vertical-slice';
const RUN_SEED_HEX = /^[0-9a-f]{32}$/;

export interface P8ResolutionPresentation {
  readonly eventId: string;
  readonly choiceId: string;
  readonly outcomeId: string;
  readonly checkOutcomeBand?: string;
}

export interface P8BrowserSessionSnapshot {
  readonly status: 'empty' | 'running' | 'ended';
  readonly authority: P8AuthorityState | null;
  readonly transitionSeq: bigint;
  readonly pending: PendingEventInstanceRuntimeV1 | null;
  readonly scene: P8ScenePresentation | null;
  readonly lastResolution: P8ResolutionPresentation | null;
  readonly canResume: boolean;
}

export interface P8BrowserSessionOptions {
  readonly hashProvider?: HashProvider;
  readonly saveStore?: SaveStore;
  readonly slotId?: string;
  readonly now?: () => Date;
  readonly randomBytes?: (length: number) => Uint8Array;
}

function randomRunSeed(randomBytes: (length: number) => Uint8Array): string {
  const bytes = randomBytes(16);
  if (bytes.byteLength !== 16) throw new RangeError('run seed source must return exactly 16 bytes');
  return [...bytes].map((value) => value.toString(16).padStart(2, '0')).join('');
}

function defaultRandomBytes(length: number): Uint8Array {
  const bytes = new Uint8Array(length);
  globalThis.crypto.getRandomValues(bytes);
  return bytes;
}

export class P8BrowserSession {
  readonly #hashProvider: HashProvider;
  readonly #saveStore: SaveStore;
  readonly #slotId: string;
  readonly #now: () => Date;
  readonly #randomBytes: (length: number) => Uint8Array;

  #authority: P8AuthorityState | null = null;
  #transitionSeq = 0n;
  #pending: PendingEventInstanceRuntimeV1 | null = null;
  #runSeedHex = '';
  #createdAtIso = '';
  #lastResolution: P8ResolutionPresentation | null = null;
  #canResume = false;

  public constructor(options: P8BrowserSessionOptions = {}) {
    this.#hashProvider = options.hashProvider ?? new WebCryptoHashProvider();
    this.#saveStore = options.saveStore ?? new IndexedDbSaveStore();
    this.#slotId = options.slotId ?? DEFAULT_SLOT_ID;
    this.#now = options.now ?? (() => new Date());
    this.#randomBytes = options.randomBytes ?? defaultRandomBytes;
  }

  public snapshot(): P8BrowserSessionSnapshot {
    const pending = this.#pending;
    const scene = pending === null ? null : getP8SliceScene(pending.eventId) ?? null;
    return Object.freeze({
      status: this.#authority === null ? 'empty' : this.#authority.events.narrativeFlags['slice.ending_ready'] === true ? 'ended' : 'running',
      authority: this.#authority,
      transitionSeq: this.#transitionSeq,
      pending,
      scene,
      lastResolution: this.#lastResolution,
      canResume: this.#canResume,
    });
  }

  public async refreshResumeAvailability(): Promise<P8BrowserSessionSnapshot> {
    this.#canResume = (await this.#saveStore.load(this.#slotId)) !== null;
    return this.snapshot();
  }

  public async startNewRun(input: P8CharacterCreationInput, runSeedHex?: string): Promise<P8BrowserSessionSnapshot> {
    const seed = runSeedHex ?? randomRunSeed(this.#randomBytes);
    if (!RUN_SEED_HEX.test(seed)) throw new RangeError('runSeedHex must be 32 lowercase hex characters');
    // P8.3 owner replay: the first screen must not begin already burdened. The D-028
    // resource bundles still cost Load 1 each; the slice now starts with a lean two-bundle
    // expedition pack and earns/gathers additional supplies through play.
    this.#authority = createInitialP8AuthorityState(
      createP8SliceCharacter(input),
      'reedbank-settlement',
      { provisions: 1, remedies: 1, materials: 0 },
    );
    this.#transitionSeq = 0n;
    this.#pending = null;
    this.#runSeedHex = seed;
    this.#createdAtIso = this.#now().toISOString();
    this.#lastResolution = null;
    await this.#persist();
    this.#canResume = true;
    return this.snapshot();
  }

  public async resume(): Promise<P8BrowserSessionSnapshot> {
    const envelope = await loadRuntimeEnvelope(this.#saveStore, this.#slotId, P8_SLICE_CONTENT_IDENTITY);
    if (envelope === null) throw new RangeError('no P8 run exists in the save slot');
    const authority = p8AuthorityStateFromJson(envelope.authoritativeState);
    if (envelope.pendingEventInstance !== undefined && P8_SLICE_EVENT_CATALOG.get(envelope.pendingEventInstance.eventId) === undefined) {
      throw new RangeError(`saved pending event is absent from the active P8 content pack: ${envelope.pendingEventInstance.eventId}`);
    }
    this.#authority = authority;
    this.#transitionSeq = envelope.transitionSeq;
    this.#pending = envelope.pendingEventInstance ?? null;
    this.#runSeedHex = envelope.runSeedHex;
    this.#createdAtIso = envelope.createdAtIso;
    this.#lastResolution = null;
    this.#canResume = true;
    return this.snapshot();
  }

  public async prepareNextScene(): Promise<P8BrowserSessionSnapshot> {
    const authority = this.#requireAuthority();
    if (this.#pending !== null) return this.snapshot();
    if (authority.events.narrativeFlags['slice.ending_ready'] === true) return this.snapshot();
    if (this.#transitionSeq >= BigInt(P8_SLICE_SCENE_SEQUENCE.length)) throw new RangeError('P8 transition sequence exceeded the phone slice scene count');
    const sceneIndex = Number(this.#transitionSeq);
    const scene = P8_SLICE_SCENE_SEQUENCE[sceneIndex]!;
    const context = {
      ...P8_SLICE_CONTENT_IDENTITY,
      runSeedHex: this.#runSeedHex,
      transitionSeq: this.#transitionSeq,
      triggerId: scene.triggerId,
      evaluationOrdinal: sceneIndex,
    } as const;
    const selected = await selectP8Event(this.#hashProvider, P8_SLICE_EVENT_CATALOG, authority, context);
    if (selected === null) throw new RangeError(`phone flow trigger produced no eligible event: ${scene.triggerId}`);
    if (selected.event.eventId !== scene.eventId) {
      throw new RangeError(`phone flow divergence: expected ${scene.eventId}, got ${selected.event.eventId}`);
    }
    const digest = await digestP8AuthorityState(this.#hashProvider, authority);
    const prepared = await prepareP8PendingEvent(this.#hashProvider, authority, selected, context, digest);
    this.#pending = prepared.pending;
    this.#lastResolution = null;
    await this.#persist();
    return this.snapshot();
  }

  public async resolveChoice(choiceId: string): Promise<P8BrowserSessionSnapshot> {
    const authority = this.#requireAuthority();
    const pending = this.#pending;
    if (pending === null) throw new RangeError('no event choice is pending');
    const event = P8_SLICE_EVENT_CATALOG.get(pending.eventId);
    if (event === undefined) throw new RangeError(`pending event is absent from the active catalog: ${pending.eventId}`);
    const resolved = await resolveP8EventChoice(
      this.#hashProvider,
      authority,
      event,
      pending,
      choiceId,
      this.#transitionSeq,
    );
    const outcomeId = resolved.resolvedPendingEvidence.pendingConsequence;
    if (outcomeId === undefined) throw new Error('resolved P8 event is missing a consequence id');
    this.#authority = resolved.state;
    this.#transitionSeq = resolved.transitionSeq;
    this.#pending = null;
    this.#lastResolution = Object.freeze({
      eventId: event.eventId,
      choiceId,
      outcomeId,
      ...(resolved.resolvedPendingEvidence.completedCheckResult?.outcomeBand === undefined
        ? {}
        : { checkOutcomeBand: resolved.resolvedPendingEvidence.completedCheckResult.outcomeBand }),
    });
    await this.#persist();
    return this.snapshot();
  }

  public async performPreparationAction(actionId: P8PreparationActionId): Promise<P8BrowserSessionSnapshot> {
    const authority = this.#requireAuthority();
    if (this.#pending !== null) throw new RangeError('cannot prepare while an event choice is pending');
    this.#authority = commitP8PreparationAction(authority, actionId);
    this.#lastResolution = null;
    await this.#persist();
    return this.snapshot();
  }

  #requireAuthority(): P8AuthorityState {
    if (this.#authority === null) throw new RangeError('P8 run has not started');
    return this.#authority;
  }

  async #persist(): Promise<void> {
    const authority = this.#requireAuthority();
    const updatedAtIso = this.#now().toISOString();
    const envelope: SaveEnvelopeV1Runtime = {
      saveSchemaVersion: SAVE_SCHEMA_VERSION,
      architectureContractVersion: P7_ARCHITECTURE_CONTRACT_VERSION,
      contentPackId: P8_SLICE_CONTENT_IDENTITY.contentPackId,
      contentPackVersion: P8_SLICE_CONTENT_IDENTITY.contentPackVersion,
      contentDigestSha256: P8_SLICE_CONTENT_IDENTITY.contentDigestSha256,
      p5ContractVersion: P5_CONTRACT_VERSION,
      runSeedHex: this.#runSeedHex,
      transitionSeq: this.#transitionSeq,
      createdAtIso: this.#createdAtIso,
      updatedAtIso,
      authoritativeState: p8AuthorityStateToJson(authority),
      ...(this.#pending === null ? {} : { pendingEventInstance: this.#pending }),
    };
    await saveRuntimeEnvelope(this.#saveStore, this.#slotId, envelope);
  }
}

import generatedPack from '../generated/p8-slice-pack.json';
import {
  P8CharacterCreationCatalog,
  type P8AttributeId,
  type P8CharacterCreationInput,
  type P8CharacterState,
  type P8FormativeAnswerDefinition,
  type P8OriginDefinition,
  type P8PracticeDefinition,
} from '../domain/p8Authority';
import { P8EventCatalog, type P8ContentIdentity, type P8EventDefinition } from '../events/p8EventRuntime';
import type { P5TriggerId } from '../saves/pendingEvent';

interface GeneratedEvent extends Omit<P8EventDefinition, 'baseWeight'> {
  readonly baseWeight: string;
}

export interface P8SliceCompactInput {
  readonly triggerId: P5TriggerId;
  readonly expectedEventId: string;
  readonly choiceId: string;
}

export interface P8SliceReplayDefinition {
  readonly runSeedHex: string;
  readonly character: {
    readonly answerIds: readonly [string, string, string];
    readonly attributeIncreases: readonly [P8AttributeId, P8AttributeId, P8AttributeId, P8AttributeId];
    readonly personalCompetenceId: string;
  };
  readonly inputs: readonly P8SliceCompactInput[];
}

interface GeneratedPack {
  readonly formatVersion: 'p8-slice-runtime-pack-v1';
  readonly contentPackId: string;
  readonly contentPackVersion: string;
  readonly contentDigestSha256: string;
  readonly canonScope: 'local_disposable_slice';
  readonly durableCanonClaims: readonly string[];
  readonly formativeAnswers: readonly P8FormativeAnswerDefinition[];
  readonly origins: readonly P8OriginDefinition[];
  readonly practices: readonly P8PracticeDefinition[];
  readonly presentationPrompts: readonly {
    readonly promptId: string;
    readonly promptText: string;
    readonly answers: readonly { readonly answerId: string; readonly text: string }[];
  }[];
  readonly species: readonly {
    readonly nationalDex: number;
    readonly speciesKey: string;
    readonly dossierDescriptorId: string;
    readonly optionalResourceRef: string | null;
  }[];
  readonly events: readonly GeneratedEvent[];
  readonly triggerIndex: Readonly<Record<string, readonly string[]>>;
  readonly representedPillars: readonly string[];
  readonly replays: {
    readonly zeroCompanion: P8SliceReplayDefinition;
    readonly alternate: P8SliceReplayDefinition;
  };
}

const pack = generatedPack as unknown as GeneratedPack;
if (pack.formatVersion !== 'p8-slice-runtime-pack-v1') throw new RangeError(`unsupported P8 slice pack: ${pack.formatVersion}`);
if (pack.canonScope !== 'local_disposable_slice' || pack.durableCanonClaims.length !== 0) throw new RangeError('P8 slice pack crossed the local-canon boundary');
if (!/^[0-9a-f]{64}$/.test(pack.contentDigestSha256)) throw new RangeError('invalid P8 slice content digest');

export const P8_SLICE_CONTENT_IDENTITY: P8ContentIdentity = Object.freeze({
  contentPackId: pack.contentPackId,
  contentPackVersion: pack.contentPackVersion,
  contentDigestSha256: pack.contentDigestSha256,
});

export const P8_SLICE_PRESENTATION_PROMPTS = pack.presentationPrompts;
export const P8_SLICE_SPECIES = pack.species;
export const P8_SLICE_TRIGGER_INDEX = pack.triggerIndex;
export const P8_SLICE_REPRESENTED_PILLARS = pack.representedPillars;
export const P8_SLICE_REPLAYS = pack.replays;

export const P8_SLICE_EVENTS: readonly P8EventDefinition[] = Object.freeze(
  pack.events.map((event) => ({ ...event, baseWeight: BigInt(event.baseWeight) })),
);

// Constructed once at module initialization so event lookup reuses the runtime's cached trigger map.
export const P8_SLICE_EVENT_CATALOG = new P8EventCatalog(P8_SLICE_EVENTS);

const characterCatalog = new P8CharacterCreationCatalog({
  answers: pack.formativeAnswers,
  origins: pack.origins,
  practices: pack.practices,
});

export function createP8SliceCharacter(input: P8CharacterCreationInput): P8CharacterState {
  return characterCatalog.resolve(input);
}

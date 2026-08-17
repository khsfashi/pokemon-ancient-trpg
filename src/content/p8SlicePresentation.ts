import presentationSource from '../../content/p8/vertical-slice.presentation.json';
import { P8_SLICE_CONTENT_IDENTITY, P8_SLICE_EVENTS, P8_SLICE_SPECIES } from './p8SliceContent';
import type { P8AttributeId } from '../domain/p8Authority';
import type { P5TriggerId } from '../saves/pendingEvent';

export interface P8SpecializationPresentation {
  readonly specializationId: string;
  readonly label: string;
  readonly description: string;
  readonly attributeIncreases: readonly [P8AttributeId, P8AttributeId, P8AttributeId, P8AttributeId];
  readonly personalCompetenceId: string;
}

export interface P8ScenePresentation {
  readonly eventId: string;
  readonly triggerId: P5TriggerId;
  readonly eyebrow: string;
  readonly title: string;
  readonly body: string;
  readonly continueLabel: string;
  readonly speciesId?: number;
  readonly choices: Readonly<Record<string, string>>;
  readonly outcomes: Readonly<Record<string, string>>;
}

interface PresentationSource {
  readonly schemaVersion: 'p8-slice-presentation-source-v1';
  readonly contentPackId: string;
  readonly contentPackVersion: string;
  readonly originLabels: Readonly<Record<string, string>>;
  readonly practiceLabels: Readonly<Record<string, string>>;
  readonly competenceLabels: Readonly<Record<string, string>>;
  readonly localityLabels: Readonly<Record<string, string>>;
  readonly speciesLabels: Readonly<Record<string, string>>;
  readonly specializations: readonly P8SpecializationPresentation[];
  readonly sceneSequence: readonly P8ScenePresentation[];
}

const source = presentationSource as unknown as PresentationSource;
if (source.schemaVersion !== 'p8-slice-presentation-source-v1') throw new RangeError('unsupported P8 presentation source');
if (source.contentPackId !== P8_SLICE_CONTENT_IDENTITY.contentPackId || source.contentPackVersion !== P8_SLICE_CONTENT_IDENTITY.contentPackVersion) {
  throw new RangeError('P8 presentation source content identity mismatch');
}

const eventIds = new Set(P8_SLICE_EVENTS.map((event) => event.eventId));
const speciesIds = new Set(P8_SLICE_SPECIES.map((species) => species.nationalDex));
const sceneByEvent = new Map<string, P8ScenePresentation>();
for (const scene of source.sceneSequence) {
  if (!eventIds.has(scene.eventId)) throw new RangeError(`unknown P8 presentation event: ${scene.eventId}`);
  if (sceneByEvent.has(scene.eventId)) throw new RangeError(`duplicate P8 presentation event: ${scene.eventId}`);
  if (scene.speciesId !== undefined && !speciesIds.has(scene.speciesId)) throw new RangeError(`unknown P8 presentation species: ${scene.speciesId}`);
  sceneByEvent.set(scene.eventId, Object.freeze(scene));
}
if (sceneByEvent.size !== P8_SLICE_EVENTS.length) throw new RangeError('P8 presentation must cover every authored slice event exactly once');

export const P8_SLICE_ORIGIN_LABELS = Object.freeze(source.originLabels);
export const P8_SLICE_PRACTICE_LABELS = Object.freeze(source.practiceLabels);
export const P8_SLICE_COMPETENCE_LABELS = Object.freeze(source.competenceLabels);
export const P8_SLICE_LOCALITY_LABELS = Object.freeze(source.localityLabels);
export const P8_SLICE_SPECIES_LABELS = Object.freeze(source.speciesLabels);
export const P8_SLICE_SPECIALIZATIONS = Object.freeze([...source.specializations]);
export const P8_SLICE_SCENE_SEQUENCE = Object.freeze([...source.sceneSequence]);

export function getP8SliceScene(eventId: string): P8ScenePresentation | undefined {
  return sceneByEvent.get(eventId);
}

export function labelP8Origin(originId: string): string { return source.originLabels[originId] ?? originId; }
export function labelP8Practice(practiceId: string): string { return source.practiceLabels[practiceId] ?? practiceId; }
export function labelP8Competence(competenceId: string): string { return source.competenceLabels[competenceId] ?? competenceId; }
export function labelP8Locality(localityId: string): string { return source.localityLabels[localityId] ?? localityId; }
export function labelP8Species(speciesId: number): string { return source.speciesLabels[String(speciesId)] ?? `#${speciesId}`; }

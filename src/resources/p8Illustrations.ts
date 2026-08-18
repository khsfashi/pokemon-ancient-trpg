import { BrowserImageDecoder, type BrowserImageResource } from './BrowserImageDecoder';
import {
  ResourceLoader,
  type LoadableResourceDescriptor,
  type ResourceLoadResult,
  type ResourceLocation,
} from './ResourceLoader';
import { ResourceRegistry, type ResourceDescriptor } from './ResourceRegistry';

export type P8IllustrationSlot = 'event' | 'locality' | 'npc' | 'pokemon' | 'item' | 'equipment';
export type P8IllustrationPlacement = 'hero' | 'inline';
export type P8IllustrationFormat = 'svg' | 'png';

export interface P8IllustrationDescriptor extends LoadableResourceDescriptor, ResourceDescriptor {
  readonly resourceId: string;
  readonly resource_id: string;
  readonly kind: 'scene_illustration';
  readonly semanticClass: 'scene_illustration';
  readonly slot: P8IllustrationSlot;
  readonly placement: P8IllustrationPlacement;
  readonly fileName: string;
  readonly altKo: string;
  readonly altEn: string;
  readonly sourceKind: 'project_authored_original_svg' | 'project_authored_original_raster';
  readonly provenance: string;
  readonly decodedBudgetBytes: number;
}

const FULL_SCENE_DECODED_BUDGET_BYTES = 2 * 1024 * 1024;
const BASE_URL = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

function descriptor(
  resourceId: string,
  fileName: string,
  slot: P8IllustrationSlot,
  placement: P8IllustrationPlacement,
  altKo: string,
  altEn: string,
  format: P8IllustrationFormat = 'svg',
): P8IllustrationDescriptor {
  const raster = format === 'png';
  return Object.freeze({
    resourceId,
    resource_id: resourceId,
    kind: 'scene_illustration' as const,
    semanticClass: 'scene_illustration' as const,
    // P6's existing full-scene image cache is the correct physical cache class:
    // 2 MiB decoded per resource, 4 MiB total, max two resident full-scene images.
    asset_class: 'pokemon_encounter_image',
    requirement: 'optional',
    availability: 'bundled_local',
    fallback_mode: 'generated_scene_card',
    fallback_resource_id: null,
    output_format: format,
    slot,
    placement,
    fileName,
    altKo,
    altEn,
    sourceKind: raster ? 'project_authored_original_raster' as const : 'project_authored_original_svg' as const,
    provenance: raster
      ? 'Original project-authored raster pixel artwork for the P8.3 windbreak golden-screen review; no copied game art or external media.'
      : 'Original project-authored SVG artwork for this repository; no copied game art or external media.',
    decodedBudgetBytes: FULL_SCENE_DECODED_BUDGET_BYTES,
  });
}

export const P8_ILLUSTRATIONS = Object.freeze([
  descriptor(
    'p8.illustration.opening.reedbank-square',
    'reedbank-square.svg',
    'locality',
    'hero',
    '아침의 리드뱅크 정착지 광장',
    'Reedbank settlement square in the morning',
  ),
  descriptor(
    'p8.illustration.travel.old-levee',
    'old-levee.svg',
    'locality',
    'hero',
    '바람과 물에 노출된 오래된 구제방 길',
    'The exposed old levee route',
  ),
  descriptor(
    'p8.illustration.ecology.weedle-crossing',
    'weedle-crossing.svg',
    'pokemon',
    'hero',
    '뿔충이 무리의 흔적이 지나가는 숲길',
    'A forest crossing marked by Weedle activity',
  ),
  descriptor(
    'p8.illustration.orchard.windbreak-boundary',
    'windbreak-orchard.png',
    'locality',
    'hero',
    '독침붕의 활동과 사람의 경계가 겹치는 방풍림 과수원',
    'The orchard windbreak where Beedrill activity meets a human boundary',
    'png',
  ),
  descriptor(
    'p8.illustration.ending.reedbank-return',
    'reedbank-return.svg',
    'event',
    'hero',
    '해질녘 리드뱅크로 돌아오는 길',
    'Returning to Reedbank at dusk',
  ),
] as const);

const registry = new ResourceRegistry<P8IllustrationDescriptor>(P8_ILLUSTRATIONS);
const loader = new ResourceLoader<P8IllustrationDescriptor, BrowserImageResource>({
  getDescriptor: (resourceId) => registry.get(resourceId),
  resolveLocation: (entry): ResourceLocation => ({
    url: `${BASE_URL}illustrations/${entry.fileName}`,
    mimeType: entry.output_format === 'png' ? 'image/png' : 'image/svg+xml',
  }),
  decoder: new BrowserImageDecoder<P8IllustrationDescriptor>(),
});

const EVENT_ILLUSTRATION_IDS: Readonly<Record<string, string>> = Object.freeze({
  'slice.opening.market_call': 'p8.illustration.opening.reedbank-square',
  'slice.social.steward_request': 'p8.illustration.opening.reedbank-square',
  'slice.relationship.millkeeper_ledger': 'p8.illustration.opening.reedbank-square',
  'slice.travel.leave_settlement': 'p8.illustration.travel.old-levee',
  'slice.ecology.weedle_crossing': 'p8.illustration.ecology.weedle-crossing',
  'slice.mixed.orchard_boundary': 'p8.illustration.orchard.windbreak-boundary',
  'slice.ending.return_crossroads': 'p8.illustration.ending.reedbank-return',
});

export function getP8IllustrationDescriptor(resourceId: string): P8IllustrationDescriptor | undefined {
  return registry.get(resourceId);
}

export function getP8IllustrationResourceIdForEvent(eventId: string): string | null {
  return EVENT_ILLUSTRATION_IDS[eventId] ?? null;
}

export function illustrationResourceIdForPresentationKey(presentationKey: string): string | null {
  const parts = presentationKey.split(':');
  if ((parts[0] !== 'scene' && parts[0] !== 'resolution') || parts.length < 4) return null;
  return getP8IllustrationResourceIdForEvent(parts[2] ?? '');
}

export function loadP8Illustration(resourceId: string): Promise<ResourceLoadResult<BrowserImageResource>> {
  return loader.load(resourceId);
}

export function getP8IllustrationCacheStats() {
  return loader.getStats();
}

export const P8_FULL_SCENE_DECODED_BUDGET_BYTES = FULL_SCENE_DECODED_BUDGET_BYTES;

import type { SaveContentIdentity } from '../saves/saveEnvelope';
import runtimePackJson from './runtime-pack.json';

export const RUNTIME_PACK_FORMAT_VERSION = 'p7-runtime-pack-v1' as const;
export const RUNTIME_CONTENT_SCOPE = 'contract_fixture_not_production_lore' as const;

export interface RuntimeEventDescriptor {
  readonly event_id: string;
  readonly content_revision: number;
  readonly [key: string]: unknown;
}

export type RuntimeResourceAvailability = 'public_build_time_import' | 'optional_local_only';

export interface RuntimeResourceDescriptor {
  readonly resource_id: string;
  readonly asset_class: string;
  readonly requirement: string;
  readonly availability: RuntimeResourceAvailability;
  readonly public_distribution: string;
  readonly preload_scope: string;
  readonly cache_key: string;
  readonly duplicate_instance_policy: string;
  readonly eviction_class: string;
  readonly encoded_bytes: number | null;
  readonly decoded_bytes_estimate: number | null;
  readonly output_format: string | null;
  readonly output_dimensions: string | Readonly<Record<string, number>> | null;
  readonly fallback_mode: string;
  readonly fallback_resource_id: string | null;
  readonly player_visible_failure: boolean;
}

export interface RuntimeSpeciesDescriptor {
  readonly species_id: number;
  readonly species_key: string;
  readonly dossier_descriptor_id: string;
  readonly dossier_status: string;
  readonly authoring_batch: string | null;
  readonly source_review_status: string;
  readonly stat_profile_status: string;
  readonly capability_hazard_status: string;
  readonly ecology_status: string;
  readonly threat_encounter_status: string;
  readonly individual_variation_status: string;
  readonly bond_status: string;
  readonly narrative_hook_status: string;
  readonly p6_followup_required: boolean;
  readonly blocking_gate_refs: readonly string[];
}

export type RuntimeSemanticAdapterKind =
  | 'semantic_read'
  | 'pure_predicate'
  | 'check_adapter'
  | 'command';

export interface RuntimeSemanticAdapterDescriptor {
  readonly adapter_id: string;
  readonly kind: RuntimeSemanticAdapterKind;
  readonly [key: string]: unknown;
}

export interface RuntimePackV1 {
  readonly pack_format_version: typeof RUNTIME_PACK_FORMAT_VERSION;
  readonly content_pack_id: string;
  readonly content_pack_version: string;
  readonly content_scope: typeof RUNTIME_CONTENT_SCOPE;
  readonly content_digest_sha256: string;
  readonly architecture_contract_version: string;
  readonly p5_contract_version: string;
  readonly digest_algorithm: 'sha256';
  readonly digest_scope: 'canonical_json_without_content_digest_sha256';
  readonly source_contracts: Readonly<Record<string, string>>;
  readonly event_index: Readonly<Record<string, RuntimeEventDescriptor>>;
  readonly trigger_index: Readonly<Record<string, readonly string[]>>;
  readonly resource_index: Readonly<Record<string, RuntimeResourceDescriptor>>;
  readonly species_index: Readonly<Record<string, RuntimeSpeciesDescriptor>>;
  readonly semantic_adapter_index: Readonly<Record<string, RuntimeSemanticAdapterDescriptor>>;
  readonly semantic_adapter_registry: Readonly<Record<string, unknown>>;
}

const pack = runtimePackJson as unknown as RuntimePackV1;
const SHA256_HEX = /^[0-9a-f]{64}$/;
const EMPTY_EVENT_IDS: readonly string[] = Object.freeze([] as string[]);
const MAX_SPECIES_ID = 151;

function assertGeneratedPackIdentity(value: RuntimePackV1): void {
  if (value.pack_format_version !== RUNTIME_PACK_FORMAT_VERSION) {
    throw new Error(`Unsupported generated runtime pack: ${value.pack_format_version}`);
  }
  if (value.content_scope !== RUNTIME_CONTENT_SCOPE) {
    throw new Error(`Unexpected generated content scope: ${value.content_scope}`);
  }
  if (value.digest_algorithm !== 'sha256' || !SHA256_HEX.test(value.content_digest_sha256)) {
    throw new Error('Generated runtime pack has invalid SHA-256 identity');
  }
}

function ownLookup<T>(record: Readonly<Record<string, T>>, key: string): T | undefined {
  return Object.hasOwn(record, key) ? record[key] : undefined;
}

assertGeneratedPackIdentity(pack);

// Species IDs are a dense frozen 1..151 domain. Build this table once so repeated gameplay
// lookups do not allocate padded string keys or rebuild Maps.
const speciesById: Array<RuntimeSpeciesDescriptor | undefined> = new Array(MAX_SPECIES_ID + 1);
for (const key of Object.keys(pack.species_index)) {
  const descriptor = pack.species_index[key];
  if (descriptor !== undefined) speciesById[descriptor.species_id] = descriptor;
}

export const runtimePack: RuntimePackV1 = pack;

export const runtimeContentIdentity: SaveContentIdentity = Object.freeze({
  contentPackId: pack.content_pack_id,
  contentPackVersion: pack.content_pack_version,
  contentDigestSha256: pack.content_digest_sha256,
});

export function getEventDescriptor(eventId: string): RuntimeEventDescriptor | undefined {
  return ownLookup(pack.event_index, eventId);
}

export function getEventIdsForTrigger(triggerId: string): readonly string[] {
  return ownLookup(pack.trigger_index, triggerId) ?? EMPTY_EVENT_IDS;
}

export function getResourceDescriptor(resourceId: string): RuntimeResourceDescriptor | undefined {
  return ownLookup(pack.resource_index, resourceId);
}

export function getSpeciesDescriptor(speciesId: number): RuntimeSpeciesDescriptor | undefined {
  if (!Number.isInteger(speciesId) || speciesId < 1 || speciesId > MAX_SPECIES_ID) return undefined;
  return speciesById[speciesId];
}

export function getSemanticAdapterDescriptor(
  adapterId: string,
): RuntimeSemanticAdapterDescriptor | undefined {
  return ownLookup(pack.semantic_adapter_index, adapterId);
}

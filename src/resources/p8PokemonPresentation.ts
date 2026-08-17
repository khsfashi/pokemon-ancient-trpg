import { P8_SLICE_SPECIES } from '../content/p8SliceContent';
import { BrowserImageDecoder, type BrowserImageResource } from './BrowserImageDecoder';
import { createRuntimeResourceLoader } from './runtimeResourceLoader';
import type { ResourceLoadResult } from './ResourceLoader';

export type P8PokemonMediaResult =
  | { readonly kind: 'not_configured'; readonly speciesId: number }
  | { readonly kind: 'fallback'; readonly speciesId: number; readonly resourceId: string; readonly fallbackMode: string }
  | { readonly kind: 'loaded'; readonly speciesId: number; readonly resourceId: string; readonly image: BrowserImageResource };

export interface P8PokemonMediaLoader {
  load(resourceId: string): Promise<ResourceLoadResult<BrowserImageResource>>;
}

const speciesById = new Map(P8_SLICE_SPECIES.map((species) => [species.nationalDex, species] as const));

// The public P8 slice currently has no cleared Pokémon media location. Keep the loader real and
// production-shaped anyway: when a resource ref is authored later, it still must enter through the
// frozen P7 registry/ResourceLoader boundary. A missing local location becomes the descriptor's
// deterministic optional fallback and never changes gameplay authority.
export const p8BrowserPokemonMediaLoader: P8PokemonMediaLoader = createRuntimeResourceLoader({
  resolveLocation: () => null,
  decoder: new BrowserImageDecoder(),
});

export async function loadP8PokemonMedia(
  speciesId: number,
  loader: P8PokemonMediaLoader = p8BrowserPokemonMediaLoader,
): Promise<P8PokemonMediaResult> {
  const species = speciesById.get(speciesId);
  if (species === undefined) throw new RangeError(`species ${speciesId} is not in the curated P8 slice`);
  if (species.optionalResourceRef === null) return Object.freeze({ kind: 'not_configured', speciesId });

  const result = await loader.load(species.optionalResourceRef);
  if (result.kind === 'fallback') {
    return Object.freeze({
      kind: 'fallback',
      speciesId,
      resourceId: species.optionalResourceRef,
      fallbackMode: result.fallbackMode,
    });
  }
  return Object.freeze({
    kind: 'loaded',
    speciesId,
    resourceId: species.optionalResourceRef,
    image: result.resource.value,
  });
}

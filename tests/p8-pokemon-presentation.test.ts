import { describe, expect, it } from 'vitest';
import { P8_SLICE_SPECIES } from '../src/content/p8SliceContent';
import { loadP8PokemonMedia, type P8PokemonMediaLoader } from '../src/resources/p8PokemonPresentation';

describe('P8 Batch 04 optional Pokemon media presentation', () => {
  it('keeps the current public slice playable without issuing any loader request', async () => {
    let calls = 0;
    const loader: P8PokemonMediaLoader = {
      async load() {
        calls += 1;
        throw new Error('the current public slice must not request unconfigured media');
      },
    };

    for (const species of P8_SLICE_SPECIES) {
      expect(species.optionalResourceRef).toBeNull();
      await expect(loadP8PokemonMedia(species.nationalDex, loader)).resolves.toEqual({
        kind: 'not_configured',
        speciesId: species.nationalDex,
      });
    }
    expect(calls).toBe(0);
  });

  it('rejects species outside the curated P8 proving set before resource lookup', async () => {
    const loader: P8PokemonMediaLoader = {
      async load() {
        throw new Error('unexpected resource lookup');
      },
    };
    await expect(loadP8PokemonMedia(25, loader)).rejects.toThrow(/not in the curated P8 slice/);
  });
});

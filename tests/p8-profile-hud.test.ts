import { describe, expect, it } from 'vitest';
import { createInitialP8AuthorityState, P8CharacterCreationCatalog } from '../src/domain/p8Authority';
import { deriveP8ExpeditionProfile, isP8PortraitId, P8_PORTRAIT_IDS } from '../src/app/ProfileHud';

function authority() {
  const catalog = new P8CharacterCreationCatalog({
    answers: [
      { answerId: 'home.route', promptId: 'home', tags: ['route'] },
      { answerId: 'rupture.storm', promptId: 'rupture', tags: ['survival'] },
      { answerId: 'work.track', promptId: 'work', tags: ['wilds'] },
    ],
    origins: [{ originId: 'route_household', matchTags: ['route'], authoredOrder: 1 }],
    practices: [{ practiceId: 'hunter', competenceId: 'tracking', matchTags: ['wilds'], authoredOrder: 1 }],
  });
  const character = catalog.resolve({
    answerIds: ['home.route', 'rupture.storm', 'work.track'],
    attributeIncreases: ['strength', 'endurance', 'endurance', 'sense'],
    personalCompetenceId: 'first_aid',
  });
  return createInitialP8AuthorityState(character, 'river-edge', { provisions: 3, remedies: 1, materials: 0 });
}

describe('P8.2 Batch 05 expedition profile projection', () => {
  it('uses the frozen P3 Vitality and D-028 Load formulas without creating another stamina authority', () => {
    const run = authority();
    const profile = deriveP8ExpeditionProfile(run);

    expect(run.character.attributes.endurance).toBe(3);
    expect(profile.vitalityMax).toBe(7);
    expect(profile.vitalityCurrent).toBe(7);
    expect(profile.fatigueStage).toBe(0);
    expect(profile.fearStage).toBe(0);
    expect(profile.injuries).toEqual([]);

    expect(run.character.attributes.strength).toBe(2);
    expect(profile.currentLoad).toBe(4);
    expect(profile.comfortableLoad).toBe(6);
    expect(profile.burdened).toBe(false);
  });

  it('recomputes Load only from authoritative carried resource inputs', () => {
    const run = authority();
    const heavier = {
      ...run,
      survival: { resourcePools: { provisions: 5, remedies: 2, materials: 2 } },
    };
    const profile = deriveP8ExpeditionProfile(heavier);
    expect(profile.currentLoad).toBe(9);
    expect(profile.comfortableLoad).toBe(6);
    expect(profile.burdened).toBe(true);
  });

  it('keeps portrait identity a closed cosmetic presentation set', () => {
    expect(P8_PORTRAIT_IDS).toEqual(['pathfinder', 'herbalist', 'warden']);
    for (const id of P8_PORTRAIT_IDS) expect(isP8PortraitId(id)).toBe(true);
    expect(isP8PortraitId('unknown')).toBe(false);
    expect(isP8PortraitId(13)).toBe(false);
  });
});

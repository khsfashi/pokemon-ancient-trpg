import { describe, expect, it } from 'vitest';
import { createInitialP8AuthorityState, P8CharacterCreationCatalog } from '../src/domain/p8Authority';
import {
  deriveP8ExpeditionProfile,
  isP8PortraitId,
  P8_PORTRAIT_IDS,
  resolveP8SpecializationId,
} from '../src/app/ProfileHud';

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

describe('P8.2 expedition profile projection', () => {
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
    expect(profile.equipment.pooledResourceLoad).toBe(4);
    expect(profile.equipment.equipmentLoad).toBe(3);
    expect(profile.currentLoad).toBe(7);
    expect(profile.comfortableLoad).toBe(6);
    expect(profile.burdened).toBe(true);
  });

  it('recomputes Load from authoritative pooled resources while preserving notable equipment', () => {
    const run = authority();
    const heavier = {
      ...run,
      survival: { ...run.survival, resourcePools: { provisions: 5, remedies: 2, materials: 2 } },
    };
    const profile = deriveP8ExpeditionProfile(heavier);
    expect(profile.equipment.equipmentLoad).toBe(3);
    expect(profile.currentLoad).toBe(12);
    expect(profile.comfortableLoad).toBe(6);
    expect(profile.burdened).toBe(true);
  });

  it('recovers specialization identity from the authoritative personal competence', () => {
    expect(resolveP8SpecializationId(authority().character)).toBe('path_reader');
  });

  it('keeps portrait identity a closed cosmetic presentation set', () => {
    expect(P8_PORTRAIT_IDS).toEqual(['pathfinder', 'herbalist', 'warden']);
    for (const id of P8_PORTRAIT_IDS) expect(isP8PortraitId(id)).toBe(true);
    expect(isP8PortraitId('unknown')).toBe(false);
    expect(isP8PortraitId(13)).toBe(false);
  });
});

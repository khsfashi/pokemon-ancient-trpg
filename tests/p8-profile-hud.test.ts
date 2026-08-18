import { describe, expect, it } from 'vitest';
import { createInitialP8AuthorityState, P8CharacterCreationCatalog } from '../src/domain/p8Authority';
import { applyP8SurvivalPressure } from '../src/domain/p8Survival';
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
  it('uses P3 Vitality/Fatigue stages and tuned D-028 Load without creating component-local stamina authority', () => {
    const run = authority();
    const profile = deriveP8ExpeditionProfile(run);

    expect(run.character.attributes.endurance).toBe(3);
    expect(profile.vitalityMax).toBe(7);
    expect(profile.vitalityCurrent).toBe(7);
    expect(profile.fatigueStage).toBe(0);
    expect(profile.fatigueLimit).toBe(2);
    expect(profile.fearStage).toBe(0);
    expect(profile.injuries).toBe(0);

    expect(run.character.attributes.strength).toBe(2);
    expect(profile.equipment.pooledResourceLoad).toBe(4);
    expect(profile.equipment.equipmentLoad).toBe(3);
    expect(profile.currentLoad).toBe(7);
    expect(profile.comfortableLoad).toBe(8);
    expect(profile.burdened).toBe(false);
  });

  it('projects saved field pressure, clamps to the three-stage Fatigue contract, and reduces comfortable Load for Injuries', () => {
    const pressured = applyP8SurvivalPressure(authority(), {
      vitalityDelta: -2,
      fatigueDelta: 3,
      injuryDelta: 1,
    });
    const profile = deriveP8ExpeditionProfile(pressured);
    expect(profile).toMatchObject({ vitalityCurrent: 5, vitalityMax: 7, fatigueStage: 2, fatigueLimit: 2, injuries: 1 });
    expect(profile.comfortableLoad).toBe(7);
    expect(profile.burdened).toBe(false);
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
    expect(profile.comfortableLoad).toBe(8);
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

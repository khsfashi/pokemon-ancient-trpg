import { describe, expect, it } from 'vitest';
import {
  P8CharacterCreationCatalog,
  createInitialP8AuthorityState,
  p8AuthorityStateToJson,
  type P8AuthorityState,
  type P8CharacterState,
} from '../src/domain/p8Authority';
import {
  P8EventCatalog,
  eligibleP8Events,
  prepareP8PendingEvent,
  resolveP8EventChoice,
  selectP8Event,
  type P8EventDefinition,
  type P8SelectionContext,
} from '../src/events/p8EventRuntime';
import { WebCryptoHashProvider } from '../src/platform/webCryptoHashProvider';
import type { HashProvider } from '../src/runtime/hashProvider';
import { digestP8AuthorityState } from '../src/runtime/p8Canonical';
import { classifyP8Margin } from '../src/runtime/p8Checks';

class CountingHashProvider implements HashProvider {
  readonly implementationName = 'test-deterministic-hash';
  calls = 0;

  async sha256(bytes: Uint8Array): Promise<Uint8Array> {
    this.calls += 1;
    let state = 0x811c9dc5;
    for (const byte of bytes) state = Math.imul(state ^ byte, 0x01000193) >>> 0;
    const output = new Uint8Array(32);
    output[0] = 0;
    for (let index = 1; index < output.length; index += 1) {
      state ^= state << 13;
      state ^= state >>> 17;
      state ^= state << 5;
      output[index] = state & 0xff;
    }
    return output;
  }
}

const content = {
  contentPackId: 'p8-fixture',
  contentPackVersion: '1',
  contentDigestSha256: '1'.repeat(64),
  runSeedHex: '00112233445566778899aabbccddeeff',
} as const;

function character(): P8CharacterState {
  const catalog = new P8CharacterCreationCatalog({
    answers: [
      { answerId: 'home.route', promptId: 'home', tags: ['route'] },
      { answerId: 'rupture.storm', promptId: 'rupture', tags: ['survival'] },
      { answerId: 'work.track', promptId: 'work', tags: ['wilds'] },
      { answerId: 'work.craft', promptId: 'work', tags: ['craft'] },
    ],
    origins: [
      { originId: 'ordinary_village_household', matchTags: ['survival'], authoredOrder: 2 },
      { originId: 'route_household', matchTags: ['route'], authoredOrder: 1 },
    ],
    practices: [
      { practiceId: 'route_guide', competenceId: 'tracking', matchTags: ['route'], authoredOrder: 2 },
      { practiceId: 'hunter', competenceId: 'tracking', matchTags: ['wilds'], authoredOrder: 1 },
    ],
  });
  return catalog.resolve({
    answerIds: ['home.route', 'rupture.storm', 'work.track'],
    attributeIncreases: ['sense', 'sense', 'endurance', 'agility'],
    personalCompetenceId: 'first_aid',
  });
}

function state(): P8AuthorityState {
  return createInitialP8AuthorityState(character(), 'river-edge', { provisions: 3, remedies: 1, materials: 0 });
}

function context(triggerId: P8SelectionContext['triggerId'], transitionSeq = 0n): P8SelectionContext {
  return { ...content, transitionSeq, triggerId, evaluationOrdinal: 0 };
}

function directEvent(eventId: string, baseWeight = 1n, trigger: P8SelectionContext['triggerId'] = 'run_started'): P8EventDefinition {
  return {
    eventId,
    contentRevision: 1,
    triggers: [trigger],
    eligibility: true,
    baseWeight,
    weightModifiers: [],
    repeatPolicy: { oncePerRun: true },
    choices: [{ choiceId: 'continue', resolution: { kind: 'direct', outcomeId: 'done' } }],
    outcomes: [{
      outcomeId: 'done',
      p5Effects: [{ operation: 'narrative.flag.set', ref: `p5.narrative.${eventId}` }],
      domainCommands: [],
      enqueueChainSteps: [],
      postCommitTriggers: ['event_resolved'],
    }],
  };
}

describe('P8 authoritative character creation', () => {
  it('resolves deterministically and enforces the 11-point P3 starting specialization', () => {
    const first = character();
    const second = character();
    expect(second).toEqual(first);
    expect(Object.values(first.attributes).reduce((sum, value) => sum + value, 0)).toBe(11);
    expect(first.attributes.sense).toBe(3);
    expect(Object.keys(first.trainedCompetences).sort()).toEqual(['first_aid', 'tracking']);
  });
});

describe('P8 frozen P3 check bands', () => {
  it('uses setback <= -3, costly -2..-1, full 0..2, exceptional >= 3', () => {
    expect(classifyP8Margin(-4)).toBe('failure');
    expect(classifyP8Margin(-3)).toBe('failure');
    expect(classifyP8Margin(-2)).toBe('compromise');
    expect(classifyP8Margin(-1)).toBe('compromise');
    expect(classifyP8Margin(0)).toBe('success');
    expect(classifyP8Margin(2)).toBe('success');
    expect(classifyP8Margin(3)).toBe('strong_success');
    expect(classifyP8Margin(4)).toBe('strong_success');
  });
});

describe('P8 trigger-index event selection', () => {
  it('uses no RNG during eligibility or when exactly one event is eligible', async () => {
    const hash = new CountingHashProvider();
    const catalog = new P8EventCatalog([directEvent('intro')]);
    expect(eligibleP8Events(catalog, state(), 'run_started', 0n)).toHaveLength(1);
    expect(hash.calls).toBe(0);
    const selected = await selectP8Event(hash, catalog, state(), context('run_started'));
    expect(selected?.event.eventId).toBe('intro');
    expect(selected?.selectionDraws).toHaveLength(0);
    expect(hash.calls).toBe(0);
  });

  it('matches the frozen P5 weighted-selection vector and eval:<ordinal> subject', async () => {
    const hash = new WebCryptoHashProvider();
    const catalog = new P8EventCatalog([
      directEvent('fixture.peaceful.riverside_lapras', 70n, 'location_entered'),
      directEvent('fixture.risk.beedrill_corridor', 30n, 'location_entered'),
    ]);
    const frozenContext: P8SelectionContext = {
      contentPackId: 'p5-foundation-fixtures',
      contentPackVersion: '1.0.0',
      contentDigestSha256: '1'.repeat(64),
      runSeedHex: '00000000000000000000000000000001',
      transitionSeq: 1n,
      triggerId: 'location_entered',
      evaluationOrdinal: 0,
    };
    const selected = await selectP8Event(hash, catalog, state(), frozenContext);
    expect(selected?.event.eventId).toBe('fixture.peaceful.riverside_lapras');
    expect(selected?.selectionDraws).toHaveLength(1);
    expect(selected?.selectionDraws[0]?.drawIndex).toBe(0n);
    expect(selected?.selectionDraws[0]?.rawU64).toBe(10349592812559003362n);
    expect(selected?.selectionDraws[0]?.boundedResult).toBe(62n);

    const digest = await digestP8AuthorityState(hash, state());
    const prepared = await prepareP8PendingEvent(hash, state(), selected!, frozenContext, digest);
    expect(prepared.pending.completedRngDrawRecords[0]?.subjectId).toBe('eval:0');
  });

  it('derives a stable collision-resistant pending instance identity from all pinned identity fields', async () => {
    const hash = new WebCryptoHashProvider();
    const catalog = new P8EventCatalog([directEvent('intro')]);
    const selected = await selectP8Event(hash, catalog, state(), context('run_started'));
    const digest = await digestP8AuthorityState(hash, state());
    const first = await prepareP8PendingEvent(hash, state(), selected!, context('run_started'), digest);
    const second = await prepareP8PendingEvent(hash, state(), selected!, context('run_started'), digest);
    const later = await prepareP8PendingEvent(hash, state(), selected!, context('run_started', 1n), digest);
    expect(second.pending.instanceId).toBe(first.pending.instanceId);
    expect(later.pending.instanceId).not.toBe(first.pending.instanceId);
    expect(first.pending.instanceId).toMatch(/^pending\.[0-9a-f]{56}$/);
  });
});

describe('P8 frozen hazardous-check vector', () => {
  it('starts check.d6 at draw 0 on its own keyed stream and preserves the normative composite subject', async () => {
    const hash = new WebCryptoHashProvider();
    const base = state();
    const fixtureState: P8AuthorityState = {
      ...base,
      character: {
        ...base.character,
        attributes: { ...base.character.attributes, sense: 2 },
      },
    };
    const event: P8EventDefinition = {
      eventId: 'fixture.risk.beedrill_corridor',
      contentRevision: 1,
      triggers: ['travel_step_committed'],
      eligibility: true,
      baseWeight: 1n,
      weightModifiers: [],
      repeatPolicy: { maxOccurrences: 1 },
      choices: [{
        choiceId: 'observe_and_withdraw',
        resolution: {
          kind: 'check',
          check: { checkId: 'read_escape_gap', attributeId: 'sense', competenceId: 'tracking', contextModifier: 0, difficulty: 11 },
          outcomeMap: { failure: 'setback', compromise: 'partial', success: 'full', strong_success: 'exceptional' },
        },
      }],
      outcomes: [
        { outcomeId: 'setback', p5Effects: [], domainCommands: [], enqueueChainSteps: [], postCommitTriggers: ['event_resolved'] },
        { outcomeId: 'partial', p5Effects: [], domainCommands: [], enqueueChainSteps: [], postCommitTriggers: ['event_resolved'] },
        { outcomeId: 'full', p5Effects: [], domainCommands: [], enqueueChainSteps: [], postCommitTriggers: ['event_resolved'] },
        { outcomeId: 'exceptional', p5Effects: [], domainCommands: [], enqueueChainSteps: [], postCommitTriggers: ['event_resolved'] },
      ],
    };
    const ctx: P8SelectionContext = {
      contentPackId: 'p5-foundation-fixtures', contentPackVersion: '1.0.0', contentDigestSha256: '2'.repeat(64),
      runSeedHex: '00000000000000000000000000000002', transitionSeq: 2n,
      triggerId: 'travel_step_committed', evaluationOrdinal: 0,
    };
    const selected = await selectP8Event(hash, new P8EventCatalog([event]), fixtureState, ctx);
    const prepared = await prepareP8PendingEvent(hash, fixtureState, selected!, ctx, await digestP8AuthorityState(hash, fixtureState));
    const resolved = await resolveP8EventChoice(hash, fixtureState, event, prepared.pending, 'observe_and_withdraw', 2n);
    expect(resolved.resolvedPendingEvidence.completedCheckResult).toMatchObject({
      dice: [2, 3], total: 8, margin: -3, outcomeBand: 'setback', doublesOverlay: 'none',
    });
    const checkDraws = resolved.resolvedPendingEvidence.completedRngDrawRecords.filter((draw) => draw.channel === 'check.d6');
    expect(checkDraws.map((draw) => draw.drawIndex)).toEqual([0n, 1n]);
    expect(checkDraws.map((draw) => draw.rawU64)).toEqual([4463312059452329917n, 8154684722988415358n]);
    expect(checkDraws.every((draw) => draw.subjectId === 'fixture.risk.beedrill_corridor/observe_and_withdraw/read_escape_gap')).toBe(true);
    expect(resolved.pendingAfterCommit).toBeNull();
    expect(resolved.transitionSeq).toBe(3n);
  });
});

describe('P8 headless vertical-slice authority', () => {
  it('resolves direct and checked events with exact transition sequencing and serializes state without UI dependencies', async () => {
    const hash = new CountingHashProvider();
    let runState = state();
    let transitionSeq = 0n;

    const introCatalog = new P8EventCatalog([directEvent('intro')]);
    const introContext = context('run_started', transitionSeq);
    const introSelected = await selectP8Event(hash, introCatalog, runState, introContext);
    expect(introSelected).not.toBeNull();
    const introPrepared = await prepareP8PendingEvent(hash, runState, introSelected!, introContext, await digestP8AuthorityState(hash, runState));
    const introResolved = await resolveP8EventChoice(hash, runState, introPrepared.event, introPrepared.pending, 'continue', transitionSeq);
    runState = introResolved.state;
    transitionSeq = introResolved.transitionSeq;
    expect(transitionSeq).toBe(1n);
    expect(introResolved.pendingAfterCommit).toBeNull();
    expect(introResolved.postCommitTriggers).toEqual(['event_resolved']);

    const checked: P8EventDefinition = {
      eventId: 'track-weedle',
      contentRevision: 1,
      triggers: ['player_action_committed'],
      eligibility: { predicateId: 'p2.world.locality_is', localityRef: 'river-edge' },
      baseWeight: 1n,
      weightModifiers: [],
      repeatPolicy: { maxOccurrences: 1 },
      choices: [{
        choiceId: 'track',
        resolution: {
          kind: 'check',
          check: { checkId: 'track-sign', attributeId: 'sense', competenceId: 'tracking', contextModifier: 0, difficulty: 9 },
          outcomeMap: { failure: 'miss', compromise: 'trace', success: 'found', strong_success: 'found' },
        },
      }],
      outcomes: [
        { outcomeId: 'miss', p5Effects: [], domainCommands: [], enqueueChainSteps: [], postCommitTriggers: ['event_resolved'] },
        { outcomeId: 'trace', p5Effects: [{ operation: 'narrative.counter.add', ref: 'p5.narrative.traces', amount: 1 }], domainCommands: [], enqueueChainSteps: [], postCommitTriggers: ['event_resolved'] },
        { outcomeId: 'found', p5Effects: [], domainCommands: [{ commandId: 'p4.encounter.record_direct_interaction', speciesId: 13, encounterRef: 'weedle-sign', routeRef: 'river-edge' }], enqueueChainSteps: [], postCommitTriggers: ['event_resolved'] },
      ],
    };
    const checkedCatalog = new P8EventCatalog([checked]);
    const checkedContext = context('player_action_committed', transitionSeq);
    const checkedSelected = await selectP8Event(hash, checkedCatalog, runState, checkedContext);
    expect(checkedSelected).not.toBeNull();
    const checkedPrepared = await prepareP8PendingEvent(hash, runState, checkedSelected!, checkedContext, await digestP8AuthorityState(hash, runState));
    const checkedResolved = await resolveP8EventChoice(hash, runState, checkedPrepared.event, checkedPrepared.pending, 'track', transitionSeq);
    runState = checkedResolved.state;
    transitionSeq = checkedResolved.transitionSeq;
    expect(transitionSeq).toBe(2n);
    expect(checkedResolved.resolvedPendingEvidence.completedCheckResult).toBeDefined();
    expect(checkedResolved.resolvedPendingEvidence.completedRngDrawRecords.filter((draw) => draw.channel === 'check.d6').map((draw) => draw.drawIndex)).toEqual([0n, 1n]);
    const json = p8AuthorityStateToJson(runState);
    expect(JSON.stringify(json)).toContain('p8-authority-v1');
    expect(JSON.stringify(json)).not.toContain('preact');
  });

  it('keeps caller state unchanged when an aggregate command plan fails prevalidation', async () => {
    const hash = new CountingHashProvider();
    const runState = state();
    const event: P8EventDefinition = {
      eventId: 'bad-plan', contentRevision: 1, triggers: ['run_started'], eligibility: true, baseWeight: 1n,
      weightModifiers: [], repeatPolicy: { maxOccurrences: 1 },
      choices: [{ choiceId: 'commit', resolution: { kind: 'direct', outcomeId: 'bad' } }],
      outcomes: [{ outcomeId: 'bad', p5Effects: [], domainCommands: [
        { commandId: 'p3.inventory.adjust_resource_pool', poolId: 'provisions', delta: -2, reasonId: 'first-cost' },
        { commandId: 'p3.inventory.adjust_resource_pool', poolId: 'provisions', delta: -2, reasonId: 'second-cost' },
      ], enqueueChainSteps: [], postCommitTriggers: [] }],
    };
    const catalog = new P8EventCatalog([event]);
    const ctx = context('run_started');
    const selected = await selectP8Event(hash, catalog, runState, ctx);
    const prepared = await prepareP8PendingEvent(hash, runState, selected!, ctx, await digestP8AuthorityState(hash, runState));
    await expect(resolveP8EventChoice(hash, runState, event, prepared.pending, 'commit', 0n)).rejects.toThrow(/invalid after effect-plan simulation/);
    expect(runState.survival.resourcePools.provisions).toBe(3);
    expect(runState.events.counts['bad-plan']).toBeUndefined();
  });
});

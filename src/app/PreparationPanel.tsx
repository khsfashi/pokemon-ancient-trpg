import type { P8AuthorityState } from '../domain/p8Authority';
import {
  deriveP8PreparationProjection,
  type P8PreparationActionId,
  type P8PreparationActionView,
  type P8PreparationBlockedReason,
} from '../domain/p8Preparation';
import { deriveP8SurvivalPressure } from '../domain/p8Survival';
import type { P8Locale } from '../ui/p8Localization';
import './preparation.css';

interface PreparationPanelProps {
  readonly authority: P8AuthorityState;
  readonly locale: P8Locale;
  readonly busy: boolean;
  readonly onAction: (actionId: P8PreparationActionId) => void;
}

type PreparationStageId = 'prepare' | 'risk' | 'recover' | 'improve' | 'resupply';

interface PreparationStageDefinition {
  readonly stageId: PreparationStageId;
  readonly actionIds: readonly P8PreparationActionId[];
  readonly completion: 'all' | 'any';
}

const STAGES = [
  { stageId: 'prepare', actionIds: ['gather.repair-stock', 'forage.bank-edge'], completion: 'all' },
  { stageId: 'risk', actionIds: ['hunt.rattata-storetrail', 'flee.rattata-storetrail'], completion: 'any' },
  { stageId: 'recover', actionIds: ['camp.rest-and-treat'], completion: 'all' },
  { stageId: 'improve', actionIds: ['repair.wet-route-gear'], completion: 'all' },
  { stageId: 'resupply', actionIds: ['trade.provision-for-remedy'], completion: 'all' },
] as const satisfies readonly PreparationStageDefinition[];

const COPY = {
  'en-US': {
    eyebrow: 'Expedition preparation',
    title: 'Prepare → risk → return → improve',
    body: 'Only the decision that matters now stays open. Finished steps become expedition history; later steps stay locked until the road, recovery and equipment requirements are actually satisfied.',
    progress: 'Expedition loop',
    location: 'Current place',
    settlement: 'Reedbank Settlement',
    field: 'Old Levee',
    load: 'Load / safe ceiling',
    vitality: 'Vitality',
    fatigue: 'Fatigue',
    injuries: 'Injuries',
    ready: 'Departure-ready. The route knowledge, repaired guard and replacement remedy are now real saved advantages for the next expedition.',
    notReady: 'Clear the active gate before the next expedition can be considered ready.',
    complete: 'Done',
    active: 'NOW',
    locked: 'LOCKED',
    stageComplete: 'CLEARED',
    choose: 'Current decision',
    stages: {
      prepare: 'Pack',
      risk: 'Risk',
      recover: 'Recover',
      improve: 'Improve',
      resupply: 'Resupply',
    },
    rewards: {
      title: 'What this expedition changed',
      route: 'Rattata store-trail route marked',
      gear: 'Hide buckler reinforced and equipped',
      remedy: 'Remedy reserve rebuilt by local barter',
      departure: 'Next departure requirements satisfied',
    },
    gather: {
      label: 'Pack repair stock before leaving',
      detail: 'Bundle ordinary reed fibre, dry wood and cordage for repairs. Materials +1.',
    },
    forage: {
      label: 'Gather food along the bank',
      detail: 'Collect ordinary edible plants and preserved scraps before the trail narrows. Provisions +1.',
    },
    hunt: {
      label: 'Follow the Rattata signs onto the old levee',
      detail: 'Spend bait and pursue the store-trail. Mundane salvage is possible, but the rough chase costs Vitality, Fatigue and one Injury. Nothing is harvested from Rattata.',
    },
    flee: {
      label: 'Take the old levee, then back away',
      detail: 'Enter the route but abandon the salvage when the Rattata trail becomes dangerous. You gain nothing and keep the consequence to light Fatigue.',
    },
    rest: {
      label: 'Make camp, treat wounds, and return',
      detail: 'Spend one Provision. If injured, spend one Remedy too. Recover, then physically return to Reedbank before workshop actions unlock.',
    },
    repair: {
      label: 'Reinforce the hide buckler back home',
      detail: 'Spend one Material and replace the sting veil with the heavier hide buckler. This is a saved equipment change, not flavor text.',
    },
    trade: {
      label: 'Barter for a remedy before departing again',
      detail: 'Exchange food directly in Reedbank. Provisions -1 · Remedies +1. Completing this gate finishes the preparation loop.',
    },
  },
  'ko-KR': {
    eyebrow: '원정 준비',
    title: '챙긴다 → 위험을 감수한다 → 돌아온다 → 강해진다',
    body: '지금 필요한 결정만 열립니다. 끝낸 단계는 원정 기록으로 남고, 다음 단계는 길·회복·장비 조건을 실제로 갖추기 전까지 잠겨 있습니다. 체크리스트를 채우는 것이 아니라 다음 행동을 열기 위해 준비합니다.',
    progress: '원정 진행',
    location: '현재 자리',
    settlement: '갈대둑 마을',
    field: '옛 제방',
    load: '하중 / 안전 한계',
    vitality: '활력',
    fatigue: '피로',
    injuries: '부상',
    ready: '재출발 준비 완료. 꼬렛 창고길의 표식, 보강한 가죽 버클러, 다시 채운 치료물자가 다음 원정에 그대로 남습니다.',
    notReady: '현재 열린 관문을 넘어야 다음 출발 준비가 이어집니다.',
    complete: '완료',
    active: '지금',
    locked: '잠김',
    stageComplete: '통과',
    choose: '현재 선택',
    stages: {
      prepare: '짐 꾸리기',
      risk: '위험 선택',
      recover: '회복·귀환',
      improve: '장비 개선',
      resupply: '재보급',
    },
    rewards: {
      title: '이번 원정에서 남은 것',
      route: '꼬렛 창고길의 안전 표식 확보',
      gear: '가죽 버클러 보강·착용',
      remedy: '마을 물물교환으로 치료물자 보충',
      departure: '다음 출발 조건 충족',
    },
    gather: {
      label: '떠나기 전에 수선재를 챙긴다',
      detail: '갈대 섬유와 마른 나뭇가지, 끈으로 쓸 재료를 묶어 넣습니다. 작업재료 +1.',
    },
    forage: {
      label: '물가에서 먹을거리를 더 챙긴다',
      detail: '포켓몬을 재료로 삼지 않고 사람이 먹을 수 있는 풀뿌리와 보존식을 챙깁니다. 식량 +1.',
    },
    hunt: {
      label: '꼬렛 흔적을 따라 옛 제방까지 밀고 들어간다',
      detail: '식량을 미끼로 쓰며 창고길 흔적을 쫓습니다. 버려진 끈과 가죽 조각을 건질 수 있지만 활력·피로·부상을 감수합니다. 꼬렛의 몸에서 재료를 뜯지는 않습니다.',
    },
    flee: {
      label: '옛 제방까지 갔다가 위험 앞에서 물러난다',
      detail: '길에는 들어가되 회수할 물건을 포기하고 위험을 피합니다. 얻는 것은 없지만 결과는 가벼운 피로로 줄어듭니다.',
    },
    rest: {
      label: '길에서 야영해 상처를 돌보고 돌아온다',
      detail: '식량 하나를 먹고, 다쳤다면 치료물자 하나도 씁니다. 몸을 추스른 뒤 실제로 갈대둑에 돌아와야 작업대 단계가 열립니다.',
    },
    repair: {
      label: '돌아온 뒤 가죽 버클러를 보강해 착용한다',
      detail: '작업재료 하나를 써 끈과 가장자리를 손봅니다. 독침 방호면 대신 버클러를 드는 변화가 저장되며 방어 준비도가 실제로 달라집니다.',
    },
    trade: {
      label: '다음 출발 전에 치료물자를 맞바꾼다',
      detail: '갈대둑에서 어디서나 통하는 돈 대신 서로 필요한 것을 직접 바꿉니다. 식량 -1 · 치료물자 +1. 이 관문을 넘으면 준비 루프가 끝납니다.',
    },
  },
} as const;

function blockedText(locale: P8Locale, reason: P8PreparationBlockedReason | null): string | null {
  if (reason === null) return null;
  const korean: Record<P8PreparationBlockedReason, string> = {
    'return-required': '첫 여정을 마치고 갈대둑으로 돌아온 뒤 시작할 수 있습니다.',
    'already-complete': '이번 원정에서는 이미 결정을 내렸습니다.',
    'route-preparation-required': '먼저 수선재와 식량을 챙겨야 길로 나갈 수 있습니다.',
    'encounter-resolution-required': '먼저 꼬렛 흔적에서 추적할지 물러날지 결정해야 합니다.',
    'camp-recovery-required': '옛 제방에서 야영해 몸을 추스르고 돌아와야 합니다.',
    'gear-improvement-required': '돌아온 장비를 먼저 손봐야 재보급 단계가 열립니다.',
    'settlement-required': '갈대둑 마을에 있을 때 할 수 있습니다.',
    'field-route-required': '옛 제방에 나가 있을 때 할 수 있습니다.',
    'materials-required': '작업재료가 1 이상 필요합니다.',
    'provisions-required': '식량이 1 이상 필요합니다.',
    'remedies-required': '부상을 치료하려면 치료물자가 1 이상 필요합니다.',
    'rattata-sign-missing': '창고길에서 꼬렛 흔적을 먼저 확인해야 합니다.',
    'field-readiness-required': '흔적을 밀고 들어가기에는 장비와 현장 준비가 부족합니다.',
  };
  const english: Record<P8PreparationBlockedReason, string> = {
    'return-required': 'Finish the first journey and return to Reedbank first.',
    'already-complete': 'That expedition step has already been resolved.',
    'route-preparation-required': 'Pack repair stock and food before setting out.',
    'encounter-resolution-required': 'Resolve the Rattata trail decision first.',
    'camp-recovery-required': 'Recover on the old levee and return to Reedbank first.',
    'gear-improvement-required': 'Improve the returned field gear before resupplying.',
    'settlement-required': 'This can only be done in Reedbank Settlement.',
    'field-route-required': 'This can only be done while you are out on the old levee.',
    'materials-required': 'Requires at least 1 Materials.',
    'provisions-required': 'Requires at least 1 Provisions.',
    'remedies-required': 'An Injury requires at least 1 Remedy to treat.',
    'rattata-sign-missing': 'You must first have observed the Rattata store-trail signs.',
    'field-readiness-required': 'Your attack/field readiness is not sufficient for the pursuit.',
  };
  return locale === 'ko-KR' ? korean[reason] : english[reason];
}

function actionCopy(locale: P8Locale, actionId: P8PreparationActionId): { readonly label: string; readonly detail: string } {
  const copy = COPY[locale];
  switch (actionId) {
    case 'gather.repair-stock': return copy.gather;
    case 'forage.bank-edge': return copy.forage;
    case 'hunt.rattata-storetrail': return copy.hunt;
    case 'flee.rattata-storetrail': return copy.flee;
    case 'camp.rest-and-treat': return copy.rest;
    case 'repair.wet-route-gear': return copy.repair;
    case 'trade.provision-for-remedy': return copy.trade;
  }
}

function locationLabel(authority: P8AuthorityState, locale: P8Locale): string {
  if (authority.world.currentLocality === 'old-levee') return COPY[locale].field;
  return COPY[locale].settlement;
}

function actionMap(actions: readonly P8PreparationActionView[]): ReadonlyMap<P8PreparationActionId, P8PreparationActionView> {
  return new Map(actions.map((action) => [action.actionId, action]));
}

function stageIsComplete(stage: PreparationStageDefinition, actions: ReadonlyMap<P8PreparationActionId, P8PreparationActionView>): boolean {
  const results = stage.actionIds.map((actionId) => actions.get(actionId)?.completed === true);
  return stage.completion === 'all' ? results.every(Boolean) : results.some(Boolean);
}

export function P8PreparationPanel({ authority, locale, busy, onAction }: PreparationPanelProps) {
  const projection = deriveP8PreparationProjection(authority);
  if (!projection.unlocked) return null;
  const pressure = deriveP8SurvivalPressure(authority);
  const copy = COPY[locale];
  const byAction = actionMap(projection.actions);
  const firstIncompleteStage = STAGES.findIndex((stage) => !stageIsComplete(stage, byAction));
  const activeStageIndex = firstIncompleteStage < 0 ? STAGES.length : firstIncompleteStage;
  const activeStage = activeStageIndex < STAGES.length ? STAGES[activeStageIndex]! : null;
  const activeActions = activeStage === null
    ? []
    : activeStage.actionIds.map((actionId) => byAction.get(actionId)!).filter(Boolean);

  return (
    <div
      class="summary-block preparation-panel"
      data-preparation-complete={projection.complete ? 'true' : 'false'}
      data-preparation-locality={authority.world.currentLocality}
      data-preparation-active-stage={activeStage?.stageId ?? 'ready'}
    >
      <p class="eyebrow">{copy.eyebrow}</p>
      <h2>{copy.title}</h2>
      <p class="muted preparation-intro">{copy.body}</p>

      <div class="prep-stage-track" aria-label={copy.progress}>
        {STAGES.map((stage, index) => {
          const completed = stageIsComplete(stage, byAction);
          const active = index === activeStageIndex;
          const stateLabel = completed ? copy.stageComplete : active ? copy.active : copy.locked;
          return (
            <div
              key={stage.stageId}
              class={`prep-stage${completed ? ' completed' : active ? ' active' : ' locked'}`}
              data-preparation-stage={stage.stageId}
              data-stage-state={completed ? 'completed' : active ? 'active' : 'locked'}
            >
              <span>{index + 1}</span>
              <strong>{copy.stages[stage.stageId]}</strong>
              <small>{stateLabel}</small>
            </div>
          );
        })}
      </div>

      <div class="ending-grid preparation-vitals">
        <div><span>{copy.progress}</span><strong>{projection.completedActions}/{projection.totalActions}</strong></div>
        <div><span>{copy.location}</span><strong>{locationLabel(authority, locale)}</strong></div>
        <div><span>{copy.load}</span><strong>{projection.currentLoad}/{projection.ordinaryTravelCeiling}</strong></div>
        <div><span>{copy.vitality}</span><strong>{pressure.vitalityCurrent}/{pressure.vitalityMax}</strong></div>
        <div><span>{copy.fatigue}</span><strong>{pressure.fatigueStage}/{pressure.fatigueLimit}</strong></div>
        <div><span>{copy.injuries}</span><strong>{pressure.injuries}</strong></div>
      </div>

      {activeStage !== null && (
        <section class="prep-active-gate" aria-live="polite">
          <div class="prep-active-heading">
            <span>{copy.choose}</span>
            <strong>{copy.stages[activeStage.stageId]}</strong>
          </div>
          <div class="choice-stack preparation-choice-stack">
            {activeActions.map((action) => {
              const text = actionCopy(locale, action.actionId);
              const blocked = blockedText(locale, action.blockedReason);
              return (
                <button
                  type="button"
                  class="choice"
                  data-preparation-action={action.actionId}
                  key={action.actionId}
                  disabled={busy || !action.available}
                  onClick={() => onAction(action.actionId)}
                >
                  <strong>{text.label}</strong>
                  <span>{text.detail}</span>
                  {blocked !== null && <span class="muted prep-blocked-reason">{blocked}</span>}
                </button>
              );
            })}
          </div>
        </section>
      )}

      {projection.complete && (
        <section class="prep-reward-ledger" aria-label={copy.rewards.title}>
          <h3>{copy.rewards.title}</h3>
          <div><span>◆</span><strong>{copy.rewards.route}</strong></div>
          <div><span>■</span><strong>{copy.rewards.gear}</strong></div>
          <div><span>+</span><strong>{copy.rewards.remedy}</strong></div>
          <div class="departure"><span>▶</span><strong>{copy.rewards.departure}</strong></div>
        </section>
      )}

      <div class={`contract-note preparation-ready-note${projection.departureReady ? ' ready' : ''}`}>
        {projection.departureReady ? copy.ready : copy.notReady}
      </div>
    </div>
  );
}

import type { P8AuthorityState } from '../domain/p8Authority';
import {
  deriveP8PreparationProjection,
  type P8PreparationActionId,
  type P8PreparationBlockedReason,
} from '../domain/p8Preparation';
import { deriveP8SurvivalPressure } from '../domain/p8Survival';
import type { P8Locale } from '../ui/p8Localization';

interface PreparationPanelProps {
  readonly authority: P8AuthorityState;
  readonly locale: P8Locale;
  readonly busy: boolean;
  readonly onAction: (actionId: P8PreparationActionId) => void;
}

const COPY = {
  'en-US': {
    eyebrow: 'A short expedition after the return',
    title: 'Prepare, risk the road, recover, return',
    body: 'Pack what you can carry, step back onto the Reedbank trail, decide whether the Rattata signs are worth the risk, then make camp and return to barter. Each opportunity is bounded to this expedition.',
    progress: 'Expedition loop',
    load: 'Load / safe ceiling',
    vitality: 'Vitality',
    fatigue: 'Fatigue',
    injuries: 'Injuries',
    ready: 'You have returned, recovered, and resupplied. The next departure is ready.',
    notReady: 'Finish the remaining field steps before the next departure.',
    complete: 'Done',
    gather: {
      label: 'Pack repair stock before leaving',
      detail: 'Bundle ordinary reed fibre, dry wood and cordage for repairs. Materials +1.',
    },
    forage: {
      label: 'Gather food along the bank',
      detail: 'Collect ordinary edible plants and preserved scraps before the trail narrows. Provisions +1.',
    },
    hunt: {
      label: 'Press on after the Rattata signs',
      detail: 'Spend bait and follow the store-trail. You may salvage abandoned cordage and hide scraps, but the rough pursuit costs Vitality, Fatigue and one Injury. No Pokémon body parts are harvested.',
    },
    flee: {
      label: 'Back away from the Rattata trail',
      detail: 'Give up the salvage and withdraw while the route is still open. You gain nothing, but only take a little Fatigue.',
    },
    repair: {
      label: 'Reinforce the hide buckler',
      detail: 'Spend one Material and switch from the sting veil to the heavier hide buckler. Defense rises, but Load becomes less forgiving.',
    },
    rest: {
      label: 'Make camp, eat, and treat wounds',
      detail: 'Spend one Provision. If injured, spend one Remedy as well. Restore Vitality, clear Fatigue, and treat one Injury.',
    },
    trade: {
      label: 'Return and barter for remedies',
      detail: 'Back in Reedbank, exchange food directly instead of using universal money. Provisions -1, Remedies +1.',
    },
  },
  'ko-KR': {
    eyebrow: '귀환 뒤의 짧은 원정',
    title: '챙기고, 나가고, 버티고, 다시 돌아온다',
    body: '갈대둑에서 짐을 꾸린 뒤 다시 물가 길로 나섭니다. 꼬렛의 흔적을 보고도 밀고 들어갈지, 빈손으로 물러날지 고른 다음 야영지에서 몸을 추스르고 마을로 돌아와 부족한 물자를 맞바꿉니다. 이번 원정의 기회는 모두 한 번뿐입니다.',
    progress: '원정 진행',
    load: '하중 / 안전 한계',
    vitality: '활력',
    fatigue: '피로',
    injuries: '부상',
    ready: '몸과 짐을 추슬렀습니다. 다음 길을 나설 준비가 끝났습니다.',
    notReady: '아직 길 위에서 마쳐야 할 일이 남아 있습니다.',
    complete: '완료',
    gather: {
      label: '떠나기 전에 수선재를 챙긴다',
      detail: '갈대 섬유와 마른 나뭇가지, 끈으로 쓸 재료를 묶어 넣습니다. 작업재료 +1.',
    },
    forage: {
      label: '물가에서 먹을거리를 더 챙긴다',
      detail: '포켓몬을 재료로 삼지 않고, 사람이 먹을 수 있는 풀뿌리와 보존식을 챙깁니다. 식량 +1.',
    },
    hunt: {
      label: '꼬렛 흔적을 보고도 안쪽까지 들어간다',
      detail: '식량을 미끼로 쓰며 창고길 깊숙이 흔적을 쫓습니다. 버려진 끈과 가죽 조각을 건질 수 있지만, 거친 추적 때문에 활력과 피로가 깎이고 부상 하나를 입습니다. 꼬렛의 몸에서 재료를 뜯어내지는 않습니다.',
    },
    flee: {
      label: '꼬렛 흔적에서 물러난다',
      detail: '회수할 물건을 포기하고 길이 열려 있을 때 돌아섭니다. 얻는 것은 없지만 가벼운 피로만 남습니다.',
    },
    repair: {
      label: '가죽 버클러를 손봐 착용한다',
      detail: '작업재료 하나를 써 버클러의 끈과 가장자리를 보강합니다. 독침 방호면 대신 더 든든한 방패를 들지만 짐은 무거워집니다.',
    },
    rest: {
      label: '야영하고 먹고 상처를 돌본다',
      detail: '식량 하나를 먹고 쉽니다. 다쳤다면 치료물자 하나도 사용해 활력을 회복하고 피로를 풀며 부상 하나를 치료합니다.',
    },
    trade: {
      label: '마을로 돌아와 치료물자를 맞바꾼다',
      detail: '어디서나 통하는 돈 대신 서로 필요한 것을 직접 바꿉니다. 식량 -1 · 치료물자 +1.',
    },
  },
} as const;

function blockedText(locale: P8Locale, reason: P8PreparationBlockedReason | null): string | null {
  if (reason === null) return null;
  const korean: Record<P8PreparationBlockedReason, string> = {
    'return-required': '갈대둑으로 돌아온 뒤에 할 수 있습니다.',
    'already-complete': '이번 원정에서는 이미 결정을 내렸습니다.',
    'route-preparation-required': '먼저 수선재와 식량을 챙겨야 길로 나설 수 있습니다.',
    'encounter-resolution-required': '먼저 꼬렛 흔적에서 추적할지 물러날지 결정해야 합니다.',
    'gear-improvement-required': '야영 전에 장비를 먼저 손봐야 합니다.',
    'camp-recovery-required': '야영에서 몸을 추스른 뒤 마을로 돌아와 교환할 수 있습니다.',
    'materials-required': '작업재료가 1 이상 필요합니다.',
    'provisions-required': '식량이 1 이상 필요합니다.',
    'remedies-required': '부상을 치료하려면 치료물자가 1 이상 필요합니다.',
    'rattata-sign-missing': '창고길에서 꼬렛 흔적을 먼저 확인해야 합니다.',
    'field-readiness-required': '흔적을 밀고 들어가기에는 장비와 현장 준비가 부족합니다.',
  };
  const english: Record<P8PreparationBlockedReason, string> = {
    'return-required': 'Return to Reedbank first.',
    'already-complete': 'That expedition step has already been resolved.',
    'route-preparation-required': 'Pack repair stock and food before setting out.',
    'encounter-resolution-required': 'Resolve the Rattata trail decision first.',
    'gear-improvement-required': 'Improve your field gear before making camp.',
    'camp-recovery-required': 'Recover at camp before returning to barter.',
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
    case 'repair.wet-route-gear': return copy.repair;
    case 'camp.rest-and-treat': return copy.rest;
    case 'trade.provision-for-remedy': return copy.trade;
  }
}

export function P8PreparationPanel({ authority, locale, busy, onAction }: PreparationPanelProps) {
  const projection = deriveP8PreparationProjection(authority);
  if (!projection.unlocked) return null;
  const pressure = deriveP8SurvivalPressure(authority);
  const copy = COPY[locale];

  return (
    <div class="summary-block preparation-panel" data-preparation-complete={projection.complete ? 'true' : 'false'}>
      <p class="eyebrow">{copy.eyebrow}</p>
      <h2>{copy.title}</h2>
      <p class="muted">{copy.body}</p>
      <div class="ending-grid">
        <div><span>{copy.progress}</span><strong>{projection.completedActions}/{projection.totalActions}</strong></div>
        <div><span>{copy.load}</span><strong>{projection.currentLoad}/{projection.ordinaryTravelCeiling}</strong></div>
        <div><span>{copy.vitality}</span><strong>{pressure.vitalityCurrent}/{pressure.vitalityMax}</strong></div>
        <div><span>{copy.fatigue}</span><strong>{pressure.fatigueStage}/{pressure.fatigueLimit}</strong></div>
        <div><span>{copy.injuries}</span><strong>{pressure.injuries}</strong></div>
      </div>
      <div class="choice-stack">
        {projection.actions.map((action) => {
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
              {action.completed && <span class="tag">{copy.complete}</span>}
              {!action.completed && blocked !== null && <span class="muted">{blocked}</span>}
            </button>
          );
        })}
      </div>
      <div class="contract-note">{projection.departureReady ? copy.ready : copy.notReady}</div>
    </div>
  );
}

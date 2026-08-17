import type { P8AuthorityState } from '../domain/p8Authority';
import {
  deriveP8PreparationProjection,
  type P8PreparationActionId,
  type P8PreparationBlockedReason,
} from '../domain/p8Preparation';
import type { P8Locale } from '../ui/p8Localization';

interface PreparationPanelProps {
  readonly authority: P8AuthorityState;
  readonly locale: P8Locale;
  readonly busy: boolean;
  readonly onAction: (actionId: P8PreparationActionId) => void;
}

const COPY = {
  'en-US': {
    eyebrow: 'Before the next departure',
    title: 'Turn the return into preparation',
    body: 'Sort what the road taught you into food, repair stock, route knowledge, and supplies. Each opportunity is bounded to this return; there is no repeatable harvest faucet.',
    progress: 'Preparation',
    load: 'Departure Load',
    ready: 'Ready to depart again',
    notReady: 'Finish the preparation cycle before setting out again.',
    complete: 'Done',
    gather: {
      label: 'Gather repair stock at the bank',
      detail: 'Bundle ordinary reed, dry wood, cordage and patching stock. Materials +1.',
    },
    repair: {
      label: 'Service gear after the wet route',
      detail: 'Spend the gathered stock on straps, bindings and field maintenance. Materials -1.',
    },
    forage: {
      label: 'Forage along the settlement edge',
      detail: 'Collect ordinary local food without treating Pokémon as resource nodes. Provisions +1.',
    },
    hunt: {
      label: 'Hunt the Rattata store-trail signs',
      detail: 'Use food as bait, follow the sign and mark a safer patrol route. This is a non-lethal hunt: no Pokémon loot is granted. Provisions -1.',
    },
    trade: {
      label: 'Barter provisions for remedies',
      detail: 'Make a local direct exchange instead of using universal money. Provisions -1, Remedies +1.',
    },
  },
  'ko-KR': {
    eyebrow: '다음 출발 전',
    title: '이번 귀환을 다음 준비로 바꾼다',
    body: '돌아온 뒤에야 할 수 있는 일이 있습니다. 먹을거리와 수선재를 챙기고, 길에서 본 흔적을 정리하고, 필요한 물자를 서로 바꿉니다. 이번 귀환에서 각 일은 한 번만 할 수 있습니다.',
    progress: '준비 진행',
    load: '다음 출발 짐',
    ready: '다시 길을 나설 준비가 됐습니다.',
    notReady: '남은 준비를 마치면 다시 길을 나설 수 있습니다.',
    complete: '완료',
    gather: {
      label: '물가에서 수선재를 모은다',
      detail: '갈대, 마른 나뭇가지, 끈으로 쓸 섬유처럼 흔한 재료를 추려 묶습니다. 작업재료 +1.',
    },
    repair: {
      label: '젖은 길을 탄 장비를 손본다',
      detail: '모아 둔 재료로 끈과 이음새를 조이고, 다음 길에서 버틸 만큼 손봅니다. 작업재료 -1.',
    },
    forage: {
      label: '마을 가장자리에서 먹을거리를 채집한다',
      detail: '포켓몬을 재료 취급하지 않고, 사람이 먹고 쓸 수 있는 평범한 먹을거리를 챙깁니다. 식량 +1.',
    },
    hunt: {
      label: '창고길의 꼬렛 흔적을 쫓는다',
      detail: '먹을거리를 미끼로 쓰며 흔적을 따라가 다음 순찰길을 표시합니다. 죽이거나 포켓몬 재료를 얻지 않는 사냥입니다. 식량 -1.',
    },
    trade: {
      label: '식량을 치료물자와 맞바꾼다',
      detail: '어디서나 통하는 돈 대신, 마을 안에서 필요한 것을 직접 맞바꿉니다. 식량 -1 · 치료물자 +1.',
    },
  },
} as const;

function blockedText(locale: P8Locale, reason: P8PreparationBlockedReason | null): string | null {
  if (reason === null) return null;
  const korean: Record<P8PreparationBlockedReason, string> = {
    'return-required': '갈대둑으로 돌아온 뒤에 할 수 있습니다.',
    'already-complete': '이번 귀환에서 이미 마쳤습니다.',
    'materials-required': '작업재료가 1 이상 필요합니다.',
    'provisions-required': '식량이 1 이상 필요합니다.',
    'rattata-sign-missing': '창고길에서 꼬렛 흔적을 먼저 확인해야 합니다.',
    'field-readiness-required': '사냥길을 안전하게 살필 장비나 현장 준비가 부족합니다.',
  };
  const english: Record<P8PreparationBlockedReason, string> = {
    'return-required': 'Return to Reedbank first.',
    'already-complete': 'Already completed on this return.',
    'materials-required': 'Requires at least 1 Materials.',
    'provisions-required': 'Requires at least 1 Provisions.',
    'rattata-sign-missing': 'You must first have observed the Rattata store-trail signs.',
    'field-readiness-required': 'Your equipped attack/field readiness is not sufficient for the patrol.',
  };
  return locale === 'ko-KR' ? korean[reason] : english[reason];
}

function actionCopy(locale: P8Locale, actionId: P8PreparationActionId): { readonly label: string; readonly detail: string } {
  const copy = COPY[locale];
  switch (actionId) {
    case 'gather.repair-stock': return copy.gather;
    case 'repair.wet-route-gear': return copy.repair;
    case 'forage.bank-edge': return copy.forage;
    case 'hunt.rattata-storetrail': return copy.hunt;
    case 'trade.provision-for-remedy': return copy.trade;
  }
}

export function P8PreparationPanel({ authority, locale, busy, onAction }: PreparationPanelProps) {
  const projection = deriveP8PreparationProjection(authority);
  if (!projection.unlocked) return null;
  const copy = COPY[locale];

  return (
    <div class="summary-block preparation-panel" data-preparation-complete={projection.complete ? 'true' : 'false'}>
      <p class="eyebrow">{copy.eyebrow}</p>
      <h2>{copy.title}</h2>
      <p class="muted">{copy.body}</p>
      <div class="ending-grid">
        <div><span>{copy.progress}</span><strong>{projection.completedActions}/{projection.totalActions}</strong></div>
        <div><span>{copy.load}</span><strong>{projection.currentLoad}/{projection.ordinaryTravelCeiling}</strong></div>
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

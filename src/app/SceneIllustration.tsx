import { useEffect, useRef, useState } from 'preact/hooks';
import {
  getP8IllustrationDescriptor,
  loadP8Illustration,
} from '../resources/p8Illustrations';
import type { BrowserImageResource } from '../resources/BrowserImageDecoder';

type IllustrationState =
  | { readonly kind: 'loading' }
  | { readonly kind: 'loaded'; readonly image: BrowserImageResource }
  | { readonly kind: 'fallback' };

export function P8SceneIllustration({
  resourceId,
  locale,
  compact = false,
}: {
  readonly resourceId: string;
  readonly locale: 'ko-KR' | 'en-US';
  readonly compact?: boolean;
}) {
  const descriptor = getP8IllustrationDescriptor(resourceId);
  const [state, setState] = useState<IllustrationState>({ kind: 'loading' });
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    setState({ kind: 'loading' });
    void loadP8Illustration(resourceId)
      .then((result) => {
        if (!active) return;
        setState(result.kind === 'loaded'
          ? { kind: 'loaded', image: result.resource.value }
          : { kind: 'fallback' });
      })
      .catch(() => {
        if (active) setState({ kind: 'fallback' });
      });
    return () => { active = false; };
  }, [resourceId]);

  useEffect(() => {
    const host = hostRef.current;
    if (host === null) return;
    host.replaceChildren();
    if (state.kind !== 'loaded' || descriptor === undefined) return;

    const image = state.image.image;
    image.alt = locale === 'ko-KR' ? descriptor.altKo : descriptor.altEn;
    image.className = 'scene-illustration-image';
    host.append(image);
    return () => {
      if (host.contains(image)) image.remove();
    };
  }, [descriptor, locale, state]);

  const fallbackLabel = descriptor === undefined
    ? (locale === 'ko-KR' ? '장면 기록' : 'Scene record')
    : (locale === 'ko-KR' ? descriptor.altKo : descriptor.altEn);

  return (
    <figure
      class={`scene-illustration${compact ? ' compact' : ''}`}
      data-resource-id={resourceId}
      data-media-state={state.kind}
      data-slot={descriptor?.slot ?? 'event'}
      aria-label={fallbackLabel}
    >
      <div ref={hostRef} class="scene-illustration-frame" />
      {state.kind !== 'loaded' && (
        <div class="scene-illustration-placeholder" aria-hidden="true">
          <span>{locale === 'ko-KR' ? '현장 기록' : 'FIELD RECORD'}</span>
          <strong>{fallbackLabel}</strong>
        </div>
      )}
      <figcaption>
        <span>{locale === 'ko-KR' ? '장면 일러스트' : 'Scene illustration'}</span>
        <code>{resourceId}</code>
      </figcaption>
    </figure>
  );
}

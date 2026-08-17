import { useEffect, useMemo, useRef, useState } from 'preact/hooks';

const REVEAL_TICK_MS = 24;
const REVEAL_TICKS_PER_BEAT = 20;
const MAX_SEGMENT_CACHE_ENTRIES = 128;

const segmentCache = new Map<string, readonly string[]>();

export interface NarrativeCursor {
  readonly beatIndex: number;
  readonly visibleCharacters: number;
}

export function segmentNarrativeBeats(text: string): readonly string[] {
  const normalized = text.replace(/\r\n/g, '\n').trim();
  if (normalized.length === 0) return [''];

  const beats = normalized
    .split(/\n\s*\n+/)
    .map((beat) => beat.trim())
    .filter((beat) => beat.length > 0);

  return beats.length > 0 ? beats : [normalized];
}

function cachedNarrativeBeats(text: string): readonly string[] {
  const cached = segmentCache.get(text);
  if (cached !== undefined) return cached;

  const beats = Object.freeze([...segmentNarrativeBeats(text)]);
  if (segmentCache.size >= MAX_SEGMENT_CACHE_ENTRIES) {
    const oldestKey = segmentCache.keys().next().value as string | undefined;
    if (oldestKey !== undefined) segmentCache.delete(oldestKey);
  }
  segmentCache.set(text, beats);
  return beats;
}

export function narrativeCursorComplete(cursor: NarrativeCursor, beats: readonly string[]): boolean {
  if (beats.length === 0) return true;
  const lastBeatIndex = beats.length - 1;
  return cursor.beatIndex >= lastBeatIndex
    && cursor.visibleCharacters >= (beats[lastBeatIndex]?.length ?? 0);
}

export function advanceNarrativeCursor(cursor: NarrativeCursor, beats: readonly string[]): NarrativeCursor {
  const currentBeat = beats[cursor.beatIndex] ?? '';
  if (cursor.visibleCharacters < currentBeat.length) {
    return { beatIndex: cursor.beatIndex, visibleCharacters: currentBeat.length };
  }
  if (cursor.beatIndex + 1 < beats.length) {
    return { beatIndex: cursor.beatIndex + 1, visibleCharacters: 0 };
  }
  return cursor;
}

export function usePrefersReducedMotion(): boolean {
  const readPreference = (): boolean => (
    typeof window !== 'undefined'
    && typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [reducedMotion, setReducedMotion] = useState(readPreference);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (): void => setReducedMotion(query.matches);
    onChange();
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reducedMotion;
}

export function NarrativeReveal({
  text,
  presentationKey,
  reducedMotion,
  onReadyChange,
}: {
  readonly text: string;
  readonly presentationKey: string;
  readonly reducedMotion: boolean;
  readonly onReadyChange: (ready: boolean) => void;
}) {
  const beats = useMemo(() => cachedNarrativeBeats(text), [text]);
  const finalBeatIndex = Math.max(0, beats.length - 1);
  const finalBeatLength = beats[finalBeatIndex]?.length ?? 0;
  const onReadyChangeRef = useRef(onReadyChange);
  const [cursor, setCursor] = useState<NarrativeCursor>(() => (
    reducedMotion
      ? { beatIndex: finalBeatIndex, visibleCharacters: finalBeatLength }
      : { beatIndex: 0, visibleCharacters: 0 }
  ));

  onReadyChangeRef.current = onReadyChange;

  useEffect(() => {
    setCursor(reducedMotion
      ? { beatIndex: finalBeatIndex, visibleCharacters: finalBeatLength }
      : { beatIndex: 0, visibleCharacters: 0 });
  }, [presentationKey, reducedMotion, finalBeatIndex, finalBeatLength]);

  const complete = reducedMotion || narrativeCursorComplete(cursor, beats);

  useEffect(() => {
    onReadyChangeRef.current(complete);
  }, [complete, presentationKey]);

  useEffect(() => {
    if (reducedMotion || complete) return;
    const currentBeat = beats[cursor.beatIndex] ?? '';
    if (cursor.visibleCharacters >= currentBeat.length) return;

    const charactersPerTick = Math.max(1, Math.ceil(currentBeat.length / REVEAL_TICKS_PER_BEAT));
    const timer = window.setTimeout(() => {
      setCursor((current) => {
        if (current.beatIndex !== cursor.beatIndex) return current;
        return {
          beatIndex: current.beatIndex,
          visibleCharacters: Math.min(currentBeat.length, current.visibleCharacters + charactersPerTick),
        };
      });
    }, REVEAL_TICK_MS);
    return () => window.clearTimeout(timer);
  }, [beats, complete, cursor.beatIndex, cursor.visibleCharacters, reducedMotion]);

  const renderedBeats = beats.slice(0, cursor.beatIndex);
  const currentBeat = beats[cursor.beatIndex] ?? '';
  const visibleText = [...renderedBeats, currentBeat.slice(0, cursor.visibleCharacters)].join('\n\n');

  function advance(): void {
    if (reducedMotion) return;
    setCursor((current) => advanceNarrativeCursor(current, beats));
  }

  return (
    <button
      type="button"
      class="lead narrative-copy"
      data-narrative-key={presentationKey}
      data-ready={complete ? 'true' : 'false'}
      data-revealing={complete ? 'false' : 'true'}
      aria-live="polite"
      onClick={(event) => {
        event.stopPropagation();
        advance();
      }}
    >
      <span>{visibleText}</span>
      {!complete && <span class="narrative-progress" aria-hidden="true">…</span>}
      {complete && cursor.beatIndex + 1 < beats.length && <span class="narrative-progress" aria-hidden="true">▼</span>}
    </button>
  );
}

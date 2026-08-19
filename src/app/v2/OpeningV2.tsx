import { p8Text, type P8Locale } from '../../ui/p8Localization';

interface OpeningV2Props {
  readonly locale: P8Locale;
  readonly canResume: boolean;
  readonly busy: boolean;
  readonly error: string | null;
  readonly onLocaleChange: (locale: P8Locale) => void;
  readonly onStart: () => void;
  readonly onResume: () => void;
}

export function OpeningV2({
  locale,
  canResume,
  busy,
  error,
  onLocaleChange,
  onStart,
  onResume,
}: OpeningV2Props) {
  const illustrationUrl = `${import.meta.env.BASE_URL}illustrations/reedbank-square.svg`;

  return (
    <main class="opening-v2" data-testid="opening-v2">
      <img
        class="opening-v2__art"
        src={illustrationUrl}
        alt=""
        aria-hidden="true"
      />
      <div class="opening-v2__shade" aria-hidden="true" />

      <header class="opening-v2__utility">
        <div class="opening-v2__locale" role="group" aria-label={p8Text(locale, 'language')}>
          <button
            type="button"
            class={locale === 'ko-KR' ? 'is-active' : ''}
            aria-pressed={locale === 'ko-KR'}
            onClick={() => onLocaleChange('ko-KR')}
          >
            한국어
          </button>
          <button
            type="button"
            class={locale === 'en-US' ? 'is-active' : ''}
            aria-pressed={locale === 'en-US'}
            onClick={() => onLocaleChange('en-US')}
          >
            English
          </button>
        </div>
      </header>

      <section class="opening-v2__content" aria-labelledby="opening-v2-title">
        <p class="opening-v2__eyebrow">{p8Text(locale, 'sliceEyebrow')}</p>
        <h1 id="opening-v2-title">{p8Text(locale, 'title')}</h1>
        <p class="opening-v2__lead">{p8Text(locale, 'landingLead')}</p>

        {error !== null && <div class="opening-v2__error" role="alert">{error}</div>}

        <div class="opening-v2__actions">
          <button
            type="button"
            class="opening-v2__start"
            disabled={busy}
            onClick={onStart}
          >
            {p8Text(locale, 'start')}
          </button>
          {canResume && (
            <button
              type="button"
              class="opening-v2__resume"
              disabled={busy}
              onClick={onResume}
            >
              {p8Text(locale, 'resume')}
            </button>
          )}
        </div>

        {canResume && <p class="opening-v2__save-note">{p8Text(locale, 'replaceSave')}</p>}
      </section>
    </main>
  );
}

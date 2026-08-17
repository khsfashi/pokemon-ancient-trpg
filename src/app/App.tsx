const boundaries = [
  'authoritative runtime: pure TypeScript',
  'save authority: IndexedDB (Batch 03 implementation)',
  'resource lookup: resource_id registry',
  'runtime Pokémon API access: none',
] as const;

export function App() {
  return (
    <main class="shell">
      <section class="panel" aria-labelledby="title">
        <p class="eyebrow">P7 · executable architecture shell</p>
        <h1 id="title">Ancient Pokémon TRPG</h1>
        <p>
          The web/PWA runtime boundary is live. Gameplay UI begins only after deterministic runtime,
          save, and resource foundations are executable.
        </p>
        <ul>
          {boundaries.map((boundary) => (
            <li key={boundary}>{boundary}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

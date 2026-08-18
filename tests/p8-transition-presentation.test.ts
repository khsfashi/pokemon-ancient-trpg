import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const css = readFileSync(new URL('../src/app/p8_3_transition.css', import.meta.url), 'utf8');

describe('P8.3 pixel transition presentation contract', () => {
  it('keeps scene and travel veils bound to the existing transition phase/kind classes', () => {
    expect(css).toContain('.scene-stage.presentation-out::after');
    expect(css).toContain('.scene-stage.presentation-in::after');
    expect(css).toContain('.scene-stage.travel.presentation-out::after');
    expect(css).toContain('.scene-stage.travel.presentation-in::after');
    expect(css).toContain('steps(6, end)');
    expect(css).toContain('steps(7, end)');
  });

  it('is pointer-transparent and disables the decorative veil for reduced motion', () => {
    expect(css).toContain('pointer-events: none');
    expect(css).toContain('@media (prefers-reduced-motion: reduce)');
    expect(css).toMatch(/prefers-reduced-motion:[\s\S]*display:\s*none/);
    expect(css).toMatch(/prefers-reduced-motion:[\s\S]*animation:\s*none/);
  });
});

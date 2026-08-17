import { describe, expect, it } from 'vitest';
import { ResourceRegistry } from '../src/resources/ResourceRegistry';

describe('resource_id registry skeleton', () => {
  it('builds one cached O(1)-equivalent lookup map', () => {
    const first = { resourceId: 'ui.font.primary', kind: 'font' } as const;
    const second = { resourceId: 'ui.icon.confirm', kind: 'svg' } as const;
    const registry = new ResourceRegistry([first, second]);

    expect(registry.size).toBe(2);
    expect(registry.require('ui.icon.confirm')).toBe(second);
  });

  it('rejects duplicate stable resource ids', () => {
    expect(
      () =>
        new ResourceRegistry([
          { resourceId: 'ui.font.primary', kind: 'font' },
          { resourceId: 'ui.font.primary', kind: 'font' },
        ]),
    ).toThrow(RangeError);
  });
});

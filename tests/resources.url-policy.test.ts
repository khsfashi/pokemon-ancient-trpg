import { describe, expect, it } from 'vitest';
import { isAllowedLocalResourceUrl } from '../src/resources/ResourceLoader';

describe('resource URL policy', () => {
  it('accepts only project-local paths and current-document blob URLs', () => {
    expect(isAllowedLocalResourceUrl('/assets/icon.png')).toBe(true);
    expect(isAllowedLocalResourceUrl('./assets/icon.png')).toBe(true);
    expect(isAllowedLocalResourceUrl('../assets/icon.png')).toBe(true);
    expect(isAllowedLocalResourceUrl('blob:https://example.test/1234')).toBe(true);
  });

  it('rejects absolute and protocol-relative remote URLs', () => {
    expect(isAllowedLocalResourceUrl('https://example.invalid/icon.png')).toBe(false);
    expect(isAllowedLocalResourceUrl('http://example.invalid/icon.png')).toBe(false);
    expect(isAllowedLocalResourceUrl('//example.invalid/icon.png')).toBe(false);
    expect(isAllowedLocalResourceUrl('/\\example.invalid/icon.png')).toBe(false);
  });
});

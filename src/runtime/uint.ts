export const U63_MAX = (1n << 63n) - 1n;
export const U64_MAX = (1n << 64n) - 1n;

const UNSIGNED_DECIMAL = /^(0|[1-9][0-9]*)$/;

export function parseUnsignedDecimal(value: string, max: bigint = U64_MAX): bigint {
  if (!UNSIGNED_DECIMAL.test(value)) {
    throw new RangeError(`Invalid unsigned decimal string: ${value}`);
  }

  const parsed = BigInt(value);
  if (parsed > max) {
    throw new RangeError(`Unsigned decimal value exceeds maximum ${max.toString(10)}`);
  }

  return parsed;
}

export function formatUnsignedDecimal(value: bigint, max: bigint = U64_MAX): string {
  if (value < 0n || value > max) {
    throw new RangeError(`Unsigned integer is outside 0..${max.toString(10)}`);
  }

  return value.toString(10);
}

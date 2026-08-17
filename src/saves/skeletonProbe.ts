import { formatUnsignedDecimal, parseUnsignedDecimal } from '../runtime/uint';

export const SKELETON_SAVE_PROBE_VERSION = 'p7-skeleton-probe-v1' as const;

export interface SkeletonSaveProbeRuntime {
  readonly originTransitionSeq: bigint;
  readonly rngDrawIndex: bigint;
}

export interface SkeletonSaveProbeWire {
  readonly schemaVersion: typeof SKELETON_SAVE_PROBE_VERSION;
  readonly originTransitionSeq: string;
  readonly rngDrawIndex: string;
}

export function skeletonSaveProbeToWire(value: SkeletonSaveProbeRuntime): SkeletonSaveProbeWire {
  return {
    schemaVersion: SKELETON_SAVE_PROBE_VERSION,
    originTransitionSeq: formatUnsignedDecimal(value.originTransitionSeq),
    rngDrawIndex: formatUnsignedDecimal(value.rngDrawIndex),
  };
}

export function skeletonSaveProbeFromWire(value: SkeletonSaveProbeWire): SkeletonSaveProbeRuntime {
  if (value.schemaVersion !== SKELETON_SAVE_PROBE_VERSION) {
    throw new RangeError(`Unsupported skeleton probe version: ${value.schemaVersion as string}`);
  }

  return {
    originTransitionSeq: parseUnsignedDecimal(value.originTransitionSeq),
    rngDrawIndex: parseUnsignedDecimal(value.rngDrawIndex),
  };
}

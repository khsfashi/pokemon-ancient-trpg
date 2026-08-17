import { formatUnsignedDecimal, parseUnsignedDecimal, U64_MAX } from './uint';

const RUN_SEED = /^[0-9a-f]{32}$/;
const CHANNEL_ID = /^[a-z0-9][a-z0-9._:-]{0,63}$/;

export interface RngCursorWire {
  readonly runSeed: string;
  readonly channel: string;
  readonly drawIndex: string;
}

export class RngCursor {
  public readonly runSeed: string;
  public readonly channel: string;
  public readonly drawIndex: bigint;

  public constructor(runSeed: string, channel: string, drawIndex: bigint) {
    if (!RUN_SEED.test(runSeed)) {
      throw new RangeError('runSeed must be exactly 32 lowercase hex characters');
    }
    if (!CHANNEL_ID.test(channel)) {
      throw new RangeError('channel must match the frozen deterministic channel identifier shape');
    }
    if (drawIndex < 0n || drawIndex > U64_MAX) {
      throw new RangeError('drawIndex must fit u64');
    }

    this.runSeed = runSeed;
    this.channel = channel;
    this.drawIndex = drawIndex;
  }

  public static fromWire(wire: RngCursorWire): RngCursor {
    return new RngCursor(wire.runSeed, wire.channel, parseUnsignedDecimal(wire.drawIndex));
  }

  public toWire(): RngCursorWire {
    return {
      runSeed: this.runSeed,
      channel: this.channel,
      drawIndex: formatUnsignedDecimal(this.drawIndex),
    };
  }

  public advance(): RngCursor {
    if (this.drawIndex === U64_MAX) {
      throw new RangeError('drawIndex overflow');
    }
    return new RngCursor(this.runSeed, this.channel, this.drawIndex + 1n);
  }
}

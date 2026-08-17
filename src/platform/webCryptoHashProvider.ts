import type { HashProvider } from '../runtime/hashProvider';

export class WebCryptoHashProvider implements HashProvider {
  private readonly subtle: SubtleCrypto;

  public constructor(subtle: SubtleCrypto | undefined = globalThis.crypto?.subtle) {
    if (subtle === undefined) {
      throw new Error('Web Crypto SubtleCrypto is unavailable');
    }
    this.subtle = subtle;
  }

  public async sha256(bytes: Uint8Array): Promise<Uint8Array> {
    // Keep the digest input isolated from caller mutation while the async digest is pending.
    const stableInput = new Uint8Array(bytes.byteLength);
    stableInput.set(bytes);
    const digest = await this.subtle.digest('SHA-256', stableInput);
    return new Uint8Array(digest);
  }
}

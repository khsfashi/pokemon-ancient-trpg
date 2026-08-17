export interface HashProvider {
  sha256(bytes: Uint8Array): Promise<Uint8Array>;
}

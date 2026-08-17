export interface ResourceDescriptor {
  readonly resourceId: string;
  readonly kind: string;
}

export class ResourceRegistry<T extends ResourceDescriptor> {
  readonly #byId: ReadonlyMap<string, T>;

  public constructor(descriptors: readonly T[]) {
    const byId = new Map<string, T>();
    for (const descriptor of descriptors) {
      if (descriptor.resourceId.length === 0) {
        throw new RangeError('resourceId must not be empty');
      }
      if (byId.has(descriptor.resourceId)) {
        throw new RangeError(`Duplicate resource_id: ${descriptor.resourceId}`);
      }
      byId.set(descriptor.resourceId, descriptor);
    }
    this.#byId = byId;
  }

  public get size(): number {
    return this.#byId.size;
  }

  public get(resourceId: string): T | undefined {
    return this.#byId.get(resourceId);
  }

  public require(resourceId: string): T {
    const descriptor = this.#byId.get(resourceId);
    if (descriptor === undefined) {
      throw new RangeError(`Unknown resource_id: ${resourceId}`);
    }
    return descriptor;
  }
}

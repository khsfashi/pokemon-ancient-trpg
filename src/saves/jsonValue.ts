export type JsonPrimitive = null | boolean | number | string;
export type JsonValue = JsonPrimitive | JsonValue[] | JsonObject;
export interface JsonObject {
  readonly [key: string]: JsonValue;
}

const MAX_JSON_DEPTH = 64;

export function assertJsonObject(value: unknown, name = 'value'): asserts value is JsonObject {
  validateJsonValue(value, name, 0);
  if (!isRecord(value)) {
    throw new TypeError(`${name} must be a JSON object`);
  }
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function validateJsonValue(value: unknown, path: string, depth: number): void {
  if (depth > MAX_JSON_DEPTH) {
    throw new RangeError(`${path} exceeds maximum JSON depth ${MAX_JSON_DEPTH}`);
  }
  if (value === null || typeof value === 'string' || typeof value === 'boolean') {
    return;
  }
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) {
      throw new TypeError(`${path} contains a non-finite JSON number`);
    }
    return;
  }
  if (Array.isArray(value)) {
    for (let index = 0; index < value.length; index += 1) {
      validateJsonValue(value[index], `${path}[${index}]`, depth + 1);
    }
    return;
  }
  if (isRecord(value)) {
    for (const [key, child] of Object.entries(value)) {
      validateJsonValue(child, `${path}.${key}`, depth + 1);
    }
    return;
  }
  throw new TypeError(`${path} contains a non-JSON value`);
}

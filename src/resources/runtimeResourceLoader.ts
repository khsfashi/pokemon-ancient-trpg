import { getResourceDescriptor, type RuntimeResourceDescriptor } from '../generated/runtimePack';
import {
  ResourceLoader,
  type ResourceLoaderOptions,
} from './ResourceLoader';

export type RuntimeResourceLoaderOptions<T> = Omit<
  ResourceLoaderOptions<RuntimeResourceDescriptor, T>,
  'getDescriptor'
>;

export function createRuntimeResourceLoader<T>(
  options: RuntimeResourceLoaderOptions<T>,
): ResourceLoader<RuntimeResourceDescriptor, T> {
  return new ResourceLoader({ ...options, getDescriptor: getResourceDescriptor });
}

import type {
  DecodedResource,
  LoadableResourceDescriptor,
  ResourceDecodeRequest,
  ResourceDecoder,
} from './ResourceLoader';

export interface BrowserImageResource {
  readonly image: HTMLImageElement;
  readonly width: number;
  readonly height: number;
}

export class BrowserImageDecoder<D extends LoadableResourceDescriptor>
  implements ResourceDecoder<D, BrowserImageResource> {
  public async decode(request: ResourceDecodeRequest<D>): Promise<DecodedResource<BrowserImageResource>> {
    const mimeType = request.mimeType ?? mimeTypeFor(request.descriptor.output_format);
    const start = request.bytes.byteOffset;
    const end = start + request.bytes.byteLength;
    const blobBytes = request.bytes.buffer.slice(start, end) as ArrayBuffer;
    const blob = new Blob([blobBytes], { type: mimeType });
    const objectUrl = URL.createObjectURL(blob);
    const image = new Image();
    image.decoding = 'async';
    image.src = objectUrl;

    try {
      await image.decode();
    } catch (error) {
      image.src = '';
      throw error;
    } finally {
      URL.revokeObjectURL(objectUrl);
    }

    const width = image.naturalWidth;
    const height = image.naturalHeight;
    const decodedBytes = width * height * 4;
    if (width <= 0 || height <= 0 || !Number.isSafeInteger(decodedBytes)) {
      image.src = '';
      throw new Error('Decoded image has invalid dimensions');
    }

    return {
      value: Object.freeze({ image, width, height }),
      decodedBytes,
      dispose: () => { image.src = ''; },
    };
  }
}

function mimeTypeFor(outputFormat: string | null): string {
  switch (outputFormat) {
    case 'svg': return 'image/svg+xml';
    case 'jpg':
    case 'jpeg': return 'image/jpeg';
    case 'webp': return 'image/webp';
    case 'png':
    case 'png+compiled-atlas-metadata': return 'image/png';
    default: return 'application/octet-stream';
  }
}

import { deflateSync, inflateSync } from 'node:zlib';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const SOURCE_WIDTH = 96;
const SOURCE_HEIGHT = 69;
const NATIVE_SCALE = 4;
const PREVIEW_SCALE = 8;
const EXPECTED_INDEX_BYTES = SOURCE_WIDTH * SOURCE_HEIGHT;

const PALETTE = Object.freeze([
  [252,222,147],[252,212,131],[249,201,124],[240,193,130],[237,185,126],[232,176,120],
  [218,167,123],[206,152,108],[193,145,113],[184,131,90],[157,129,111],[154,120,101],
  [146,114,91],[151,104,59],[138,102,74],[122,100,86],[126,86,47],[101,90,81],
  [111,80,48],[96,78,52],[99,72,44],[85,72,50],[94,64,39],[76,63,43],
  [87,56,35],[76,55,36],[64,55,45],[66,54,33],[70,46,30],[59,44,31],
  [51,39,30],[50,48,38],[49,43,33],[43,39,32],[34,39,41],[48,35,27],
  [41,34,30],[33,33,30],[42,30,24],[33,30,29],[33,26,20],[32,27,28],
  [26,25,25],[28,22,19],[25,21,21],[21,20,21],[20,16,15],[11,10,10],
]);

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ ((crc & 1) === 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data) {
  const typeBuffer = Buffer.from(type, 'ascii');
  const output = Buffer.alloc(12 + data.length);
  output.writeUInt32BE(data.length, 0);
  typeBuffer.copy(output, 4);
  data.copy(output, 8);
  output.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 8 + data.length);
  return output;
}

function encodeNearestNeighbourPng(indexes, scale) {
  const width = SOURCE_WIDTH * scale;
  const height = SOURCE_HEIGHT * scale;
  const bytesPerRow = width * 3 + 1;
  const raw = Buffer.alloc(bytesPerRow * height);
  let offset = 0;

  for (let y = 0; y < height; y += 1) {
    raw[offset] = 0;
    offset += 1;
    const sourceY = Math.floor(y / scale);
    for (let x = 0; x < width; x += 1) {
      const sourceX = Math.floor(x / scale);
      const paletteIndex = indexes[sourceY * SOURCE_WIDTH + sourceX];
      const rgb = PALETTE[paletteIndex];
      if (rgb === undefined) throw new Error(`Golden raster palette index out of range: ${paletteIndex}`);
      raw[offset] = rgb[0];
      raw[offset + 1] = rgb[1];
      raw[offset + 2] = rgb[2];
      offset += 3;
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 2;

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', deflateSync(raw, { level: 9 })),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);
}

async function loadIndexes() {
  const parts = await Promise.all([0, 1, 2, 3].map(async (index) => (
    readFile(`tools/p8-3-golden-source/part-0${index}.b64`, 'utf8')
  )));
  const compressed = Buffer.from(parts.join('').replace(/\s+/g, ''), 'base64');
  const indexes = inflateSync(compressed);
  if (indexes.length !== EXPECTED_INDEX_BYTES) {
    throw new Error(`Golden raster source length drifted: ${indexes.length}; expected ${EXPECTED_INDEX_BYTES}`);
  }
  return indexes;
}

async function writeRaster(path, indexes, scale) {
  const png = encodeNearestNeighbourPng(indexes, scale);
  await mkdir(path.slice(0, path.lastIndexOf('/')), { recursive: true });
  await writeFile(path, png);
  return {
    path,
    bytes: png.length,
    sha256: createHash('sha256').update(png).digest('hex'),
  };
}

const indexes = await loadIndexes();
const native = await writeRaster('public/illustrations/windbreak-orchard.png', indexes, NATIVE_SCALE);
const preview = await writeRaster('docs/evidence/p8-3-golden-screen/windbreak-orchard-preview-2x.png', indexes, PREVIEW_SCALE);

console.log('P8_3_GOLDEN_RASTER_MATERIALIZED', JSON.stringify({
  source: `${SOURCE_WIDTH}x${SOURCE_HEIGHT}`,
  native: { ...native, dimensions: '384x276' },
  preview: { ...preview, dimensions: '768x552' },
}));

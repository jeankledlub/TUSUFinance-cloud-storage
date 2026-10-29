// Draws the pixel-art assistants (dog, robot) as 12-frame strips matching assets/mascot.webp:
// each frame 220x326, frames in the order the site uses:
// 0 stand, 1 smile, 2 blink, 3 wind, 4 wind2, 5 wave, 6 hold, 7 bow, 8 turn, 9 laptop, 10 thumbs, 11 look
// Usage: node make-sprites.js <outDir>
const fs = require('fs'), zlib = require('zlib'), path = require('path');
const W = 22, H = 32, S = 10, FW = 220, FH = 326, TOP = FH - H * S;

function grid() { return Array.from({ length: H }, () => Array(W).fill('.')); }
function rect(g, x, y, w, h, c) { for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) if (j >= 0 && j < H && i >= 0 && i < W) g[j][i] = c; }
const px = (g, x, y, c) => rect(g, x, y, 1, 1, c);
// a 1-pixel dark outline around every filled shape, like hand-made pixel art
function outline(g, k) {
  const o = g.map(r => r.slice());
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (g[y][x] === '.') {
    if ([[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => g[y + dy]?.[x + dx] && g[y + dy][x + dx] !== '.')) o[y][x] = k;
  }
  return o;
}
const mirror = g => g.map(r => r.slice().reverse());

const FRAMES = [
  {}, { eyes: 'happy', mouth: 'smile' }, { eyes: 'closed' }, { wind: 1 }, { wind: 2 },
  { arm: 'wave', mouth: 'smile' }, { prop: 'doc' }, { dy: 2, eyes: 'closed' }, { mirror: true },
  { prop: 'laptop', eyes: 'down' }, { arm: 'wave', eyes: 'happy', mouth: 'smile', sparkle: true }, { eyes: 'left' }
];

function eyes(g, p, c, hi, lx, rx, y) {
  const e = p.eyes || 'open', dx = e === 'left' ? -1 : 0, dy = e === 'down' ? 1 : 0;
  if (e === 'happy') { for (const [a, b] of [[lx, 0], [rx, 0]]) { px(g, a - 1 + b, y + 1, c); px(g, a + b, y, c); px(g, a + 1 + b, y, c); px(g, a + 2 + b, y + 1, c); } return; }
  if (e === 'closed') { rect(g, lx, y + 1, 2, 1, c); rect(g, rx, y + 1, 2, 1, c); return; }
  rect(g, lx + dx, y + dy, 2, 2, c); rect(g, rx + dx, y + dy, 2, 2, c);
  if (hi) { px(g, lx + dx, y + dy, hi); px(g, rx + dx, y + dy, hi); }
}
function props(g, p, pal) {
  if (p.prop === 'doc') { rect(g, 7, 18, 8, 8, 'q'); rect(g, 8, 20, 6, 1, 'x'); rect(g, 8, 22, 6, 1, 'x'); rect(g, 8, 24, 4, 1, 'x'); px(g, 13, 19, 'c'); }
  if (p.prop === 'laptop') { rect(g, 6, 17, 10, 6, 'm'); rect(g, 7, 18, 8, 4, 'd'); rect(g, 8, 19, 3, 1, 'c'); rect(g, 8, 20, 5, 1, 'c'); rect(g, 4, 23, 14, 1, 'm'); }
  if (p.sparkle) { px(g, 20, 6, 'y'); px(g, 19, 7, 'y'); px(g, 21, 7, 'y'); px(g, 20, 8, 'y'); }
}

/* ---------- dog: white with black patches, TUSU teal collar ---------- */
const DOG = { w: '#F7F7F4', g: '#D9DBE0', b: '#2A2B30', n: '#121316', h: '#FFFFFF', p: '#F49AAE', c: '#006371', y: '#F5C443', q: '#FFFFFF', x: '#9AA5B1', m: '#90A4AE', d: '#0F2A30', k: '#17181C' };
function dog(p) {
  const g = grid(), dy = p.dy || 0;
  // tail behind the body
  // a 2-pixel-thick curved tail with a black tip, in three wag positions
  const tails = {
    0: { w: [[16, 21], [16, 22], [17, 20], [17, 21], [18, 19]], b: [[18, 18], [19, 18]] },
    1: { w: [[16, 22], [16, 23], [17, 22], [18, 21], [18, 22]], b: [[19, 20], [19, 21]] },
    2: { w: [[16, 20], [16, 21], [17, 19], [17, 20], [17, 18]], b: [[17, 17], [18, 17]] }
  };
  const tl = tails[p.wind || 0]; tl.w.forEach(([x, y]) => px(g, x, y, 'w')); tl.b.forEach(([x, y]) => px(g, x, y, 'b'));
  // legs and body
  rect(g, 7, 27, 3, 3, 'w'); rect(g, 12, 27, 3, 3, 'w'); rect(g, 7, 29, 3, 1, 'g'); rect(g, 12, 29, 3, 1, 'g');
  rect(g, 6, 16, 10, 11, 'w'); rect(g, 6, 17, 1, 9, 'g');
  rect(g, 7, 19, 2, 2, 'b'); rect(g, 13, 22, 2, 2, 'b'); px(g, 8, 24, 'b'); px(g, 14, 18, 'b');
  // ears, then head over them
  rect(g, 2, 5 + dy, 3, 8, 'b'); rect(g, 17, 5 + dy, 3, 8, 'b');
  rect(g, 5, 3 + dy, 12, 12, 'w'); [[5, 3], [16, 3], [5, 14], [16, 14]].forEach(([x, y]) => px(g, x, y + dy, '.'));
  rect(g, 6, 6 + dy, 4, 4, 'b'); px(g, 6, 6 + dy, 'w'); // patch around the left eye
  rect(g, 6, 13 + dy, 10, 1, 'g');
  eyes(g, p, 'n', 'h', 7, 13, 8 + dy);
  if ((p.eyes || 'open') === 'open' || p.eyes === 'left' || p.eyes === 'down') { /* eye inside patch keeps its highlight */ }
  rect(g, 10, 11 + dy, 2, 1, 'n'); rect(g, 10, 12 + dy, 2, 1, 'n'); // nose
  px(g, 9, 13 + dy, 'n'); px(g, 12, 13 + dy, 'n');
  if (p.mouth === 'smile') { rect(g, 10, 13 + dy, 2, 1, 'p'); px(g, 6, 12 + dy, 'p'); px(g, 15, 12 + dy, 'p'); }
  // collar with a gold tag
  rect(g, 6, 15 + dy, 10, 1, 'c'); rect(g, 10, 16 + dy, 2, 1, 'y');
  if (p.arm === 'wave') { rect(g, 17, 9, 2, 6, 'w'); rect(g, 17, 9, 2, 1, 'g'); }
  props(g, p, DOG);
  if (p.prop) { px(g, 6, 21, 'w'); px(g, 15, 21, 'w'); }
  let o = outline(g, 'k'); if (p.mirror) o = mirror(o); return o;
}

/* ---------- robot: silver head, teal body, cyan screen face ---------- */
const BOT = { s: '#D3DCE0', m: '#90A4AE', d: '#0F2A30', c: '#2BABC2', t: '#006371', y: '#F5C443', r: '#E5484D', h: '#FFFFFF', q: '#FFFFFF', x: '#9AA5B1', p: '#F49AAE', k: '#1B2328' };
function robot(p) {
  const g = grid(), dy = p.dy || 0;
  rect(g, 7, 25, 3, 4, 'm'); rect(g, 12, 25, 3, 4, 'm'); rect(g, 6, 29, 4, 1, 'd'); rect(g, 12, 29, 4, 1, 'd');
  // arms
  if (p.arm === 'wave') { rect(g, 17, 10, 3, 6, 's'); rect(g, 17, 8, 3, 2, 'm'); } else { rect(g, 17, 16, 3, 6, 's'); rect(g, 17, 22, 3, 2, 'm'); }
  rect(g, 2, 16, 3, 6, 's'); rect(g, 2, 22, 3, 2, 'm');
  // body with a chest panel
  rect(g, 5, 15, 12, 10, 't'); rect(g, 5, 15, 12, 1, 'c');
  rect(g, 8, 17, 6, 4, 'd'); px(g, 9, 18, p.wind === 1 ? 'r' : 'y'); px(g, 11, 18, 'c'); px(g, 12, 19, p.wind === 2 ? 'y' : 'r'); rect(g, 9, 19, 2, 1, 'c');
  rect(g, 5, 23, 12, 1, 'm');
  rect(g, 9, 14, 4, 1, 'm');
  // antenna, head, screen face
  rect(g, 10, 2 + dy, 2, 2, 'm'); rect(g, 10, 1 + dy, 2, 1, p.wind === 1 ? 'y' : p.wind === 2 ? 'r' : 'c');
  rect(g, 4, 4 + dy, 14, 10, 's'); [[4, 4], [17, 4], [4, 13], [17, 13]].forEach(([x, y]) => px(g, x, y + dy, '.'));
  rect(g, 5, 5 + dy, 2, 1, 'h'); rect(g, 3, 7 + dy, 1, 3, 'm'); rect(g, 18, 7 + dy, 1, 3, 'm');
  rect(g, 6, 6 + dy, 10, 6, 'd');
  eyes(g, p, 'c', null, 8, 12, 7 + dy);
  if (p.mouth === 'smile') { px(g, 9, 10 + dy, 'c'); rect(g, 10, 11 + dy - 0, 2, 0, 'c'); px(g, 10, 10 + dy, 'c'); px(g, 11, 10 + dy, 'c'); px(g, 12, 10 + dy, 'c'); px(g, 8, 9 + dy, '.') ; px(g, 9, 10 + dy, 'c'); px(g, 12, 10 + dy, 'c'); px(g, 8, 10 + dy, 'd'); }
  else rect(g, 10, 10 + dy, 2, 1, 'c');
  if (p.mouth === 'smile') { px(g, 7, 10 + dy, 'p'); px(g, 14, 10 + dy, 'p'); }
  props(g, p, BOT);
  let o = outline(g, 'k'); if (p.mirror) o = mirror(o); return o;
}

/* ---------- PNG writer (RGBA, no dependencies) ---------- */
const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
const crc = b => { let c = 0xFFFFFFFF; for (const x of b) c = CRC[(c ^ x) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
function chunk(type, data) { const len = Buffer.alloc(4); len.writeUInt32BE(data.length); const td = Buffer.concat([Buffer.from(type), data]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([len, td, c]); }
function png(w, h, rgba) {
  const raw = Buffer.alloc((w * 4 + 1) * h);
  for (let y = 0; y < h; y++) { raw[y * (w * 4 + 1)] = 0; rgba.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4); }
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4); ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
}
const hex = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
function strip(draw, pal) {
  const w = FW * 12, buf = Buffer.alloc(w * FH * 4);
  FRAMES.forEach((p, f) => {
    const g = draw(p);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const ch = g[y][x]; if (ch === '.') continue;
      const [r, gg, b] = hex(pal[ch]);
      for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) {
        const X = f * FW + x * S + i, Y = TOP + y * S + j, o = (Y * w + X) * 4;
        buf[o] = r; buf[o + 1] = gg; buf[o + 2] = b; buf[o + 3] = 255;
      }
    }
  });
  return png(w, FH, buf);
}
const out = process.argv[2] || '.';
fs.writeFileSync(path.join(out, 'mascot-dog.png'), strip(dog, DOG));
fs.writeFileSync(path.join(out, 'mascot-robot.png'), strip(robot, BOT));
console.log('written', fs.statSync(path.join(out, 'mascot-dog.png')).size, fs.statSync(path.join(out, 'mascot-robot.png')).size);

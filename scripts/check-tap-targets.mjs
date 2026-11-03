// Counts visible standalone controls shorter or narrower than 44px.
// In-sentence links (an anchor inside a paragraph, outside the footer city list) are exempt.
import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.TAP_CHECK_URL || 'http://127.0.0.1:3000/';
const outPath = process.env.TAP_CHECK_OUT || '/cursor/stores/self/imperial-32-shots/tap-check.txt';
const widths = [360, 390, 430];
const port = 9355;

const chrome = spawn('google-chrome', [
  '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
  '--force-device-scale-factor=1',
  `--remote-debugging-port=${port}`,
  '--user-data-dir=/tmp/chrome-tap-check',
  'about:blank',
], { stdio: 'ignore' });
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let version;
for (let i = 0; i < 40; i++) {
  try { version = await fetch(`http://127.0.0.1:${port}/json/version`).then(response => response.json()); break; }
  catch { await sleep(200); }
}
if (!version) { chrome.kill(); throw new Error('Chrome DevTools did not start'); }
const page = await fetch(`http://127.0.0.1:${port}/json/new?${base}`, { method: 'PUT' }).then(response => response.json());
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise(resolve => ws.addEventListener('open', resolve));
let id = 0;
const pending = new Map();
ws.addEventListener('message', event => {
  const message = JSON.parse(event.data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(JSON.stringify(message.error)));
  else resolve(message.result);
});
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const messageId = ++id;
  pending.set(messageId, { resolve, reject });
  ws.send(JSON.stringify({ id: messageId, method, params }));
});
await send('Page.enable');
await send('Runtime.enable');

const expression = `(() => {
  const nodes = [...document.querySelectorAll('a, button, summary, [role="button"]')];
  const small = [];
  for (const el of nodes) {
    const sentence = el.closest('p');
    if (sentence && !el.closest('.footer-cities')) continue;
    const style = getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) continue;
    const rect = el.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) continue;
    if (rect.width >= 44 && rect.height >= 44) continue;
    small.push({
      tag: el.tagName,
      text: (el.innerText || el.getAttribute('aria-label') || '').trim().replace(/\\s+/g, ' ').slice(0, 60),
      w: Math.round(rect.width),
      h: Math.round(rect.height),
    });
  }
  return JSON.stringify({ count: small.length, small });
})()`;

const lines = [`Tap-target check for ${base}`, 'Standalone controls with either side under 44px. In-sentence paragraph links are excluded.', ''];
let failed = false;
for (const width of widths) {
  await send('Emulation.setDeviceMetricsOverride', { width, height: 844, deviceScaleFactor: 1, mobile: true });
  await send('Page.navigate', { url: base });
  await sleep(2200);
  const result = await send('Runtime.evaluate', { expression, returnByValue: true });
  const data = JSON.parse(result.result.value);
  lines.push(`${width}x844: ${data.count}`);
  for (const item of data.small) lines.push(`  ${item.w}x${item.h} ${item.tag} ${item.text}`);
  if (data.count !== 0) failed = true;
}
lines.push('');
lines.push(failed ? 'FAIL' : 'PASS');
await mkdir('/cursor/stores/self/imperial-32-shots', { recursive: true });
await writeFile(outPath, lines.join('\n') + '\n');
console.log(lines.join('\n'));
ws.close();
chrome.kill();
if (failed) process.exit(1);

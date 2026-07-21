import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { fileURLToPath } from 'node:url';
import { createServer } from 'node:net';
import test from 'node:test';

const projectDirectory = fileURLToPath(new URL('../', import.meta.url));
const launcher = fileURLToPath(new URL('../start.sh', import.meta.url));
let serverProcess;
let port;
let serverOutput = '';

async function availablePort() {
  const probe = createServer();
  await new Promise((resolve, reject) => {
    probe.once('error', reject);
    probe.listen(0, '127.0.0.1', resolve);
  });
  const address = probe.address();
  assert.ok(address && typeof address === 'object');
  await new Promise((resolve, reject) => probe.close((error) => error ? reject(error) : resolve()));
  return address.port;
}

async function runLauncher(environment) {
  const child = spawn(launcher, [], { cwd: projectDirectory, env: { ...process.env, ...environment }, stdio: ['ignore', 'pipe', 'pipe'] });
  let output = '';
  child.stdout.on('data', (chunk) => { output += chunk; });
  child.stderr.on('data', (chunk) => { output += chunk; });
  const [exitCode] = await once(child, 'exit');
  return { exitCode, output };
}

test.before(async () => {
  port = await availablePort();
  serverProcess = spawn(launcher, [], {
    cwd: projectDirectory,
    env: { ...process.env, PORT: String(port) },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  serverProcess.stdout.on('data', (chunk) => { serverOutput += chunk; });
  serverProcess.stderr.on('data', (chunk) => { serverOutput += chunk; });

  for (let attempt = 0; attempt < 50; attempt += 1) {
    if (serverProcess.exitCode !== null) throw new Error(`preview exited early: ${serverOutput}`);
    try {
      const response = await fetch(`http://127.0.0.1:${port}/boundary.json`);
      if (response.ok) return;
    } catch {
      // Preview startup is expected to take a few polling intervals.
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`preview did not start: ${serverOutput}`);
});

test.after(async () => {
  if (!serverProcess || serverProcess.exitCode !== null) return;
  serverProcess.kill('SIGTERM');
  await once(serverProcess, 'exit');
});

test('runtime serves exact boundary evidence and restrictive shell', async () => {
  const boundaryResponse = await fetch(`http://127.0.0.1:${port}/boundary.json`);
  assert.equal(boundaryResponse.status, 200);
  assert.equal((await boundaryResponse.json()).deployableApplication, false);
  const shell = await (await fetch(`http://127.0.0.1:${port}/`)).text();
  assert.match(shell, /Content-Security-Policy/);
  assert.match(shell, /connect-src 'none'/);
});

test('representative archived routes resolve only to the static shell', async () => {
  for (const path of ['/', '/api', '/contact', '/pricing', '/team', '/not-a-real-route']) {
    const response = await fetch(`http://127.0.0.1:${port}${path}`);
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get('content-type') ?? '', /text\/html/);
  }
});

test('a second start refuses the occupied port without stopping the first preview', async () => {
  const second = await runLauncher({ PORT: String(port) });
  assert.notEqual(second.exitCode, 0);
  assert.match(second.output, /already in use|strictPort|Port is already in use/i);
  assert.equal((await fetch(`http://127.0.0.1:${port}/boundary.json`)).status, 200);
});

test('invalid port configuration fails before runtime launch', async () => {
  const invalid = await runLauncher({ PORT: 'not-a-port' });
  assert.equal(invalid.exitCode, 2);
  assert.match(invalid.output, /PORT must be an integer/);
});

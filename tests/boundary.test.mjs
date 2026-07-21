import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const read = (path) => readFile(new URL(path, root), 'utf8');
const boundary = JSON.parse(await read('BOUNDARY.json'));
const packageJson = JSON.parse(await read('package.json'));
const navbar = await read('src/components/Navbar.tsx');
const layout = await read('src/components/Layout.tsx');
const index = await read('index.html');
const apiPage = await read('src/pages/resources/API.tsx');
const contactPage = await read('src/pages/company/Contact.tsx');
const start = await read('start.sh');
const workflow = await read('.github/workflows/ci.yml');

test('manifest defines one truthful local visual-review workflow', () => {
  assert.equal(boundary.deployableApplication, false);
  assert.equal(boundary.primaryUser, 'an accountable repository maintainer performing a local visual review');
  assert.equal(boundary.runtimeAcceptance, 'static-build-preview-only');
  assert.equal(boundary.runtime.bindAddress, '127.0.0.1');
  assert.ok(boundary.acceptanceCriteria.length >= 5);
});

test('nonexistent application controls are explicitly not applicable', () => {
  for (const key of ['loginAcceptance', 'persistenceAcceptance', 'migrationAcceptance', 'backupAcceptance']) {
    assert.equal(boundary[key], 'not_applicable');
  }
  for (const value of Object.values(boundary.capabilities)) assert.equal(value, false);
  assert.deepEqual(Object.keys(packageJson.dependencies).sort(), ['framer-motion', 'lucide-react', 'react', 'react-dom', 'react-router-dom']);
});

test('archived content and account controls are non-interactive', () => {
  assert.match(layout, /<main inert/);
  assert.match(layout, /data-reference-boundary="internal-static-only"/);
  assert.match(navbar, /Sign in unavailable/);
  assert.match(navbar, /disabled/);
});

test('fictional API, credentials, contact submission, and storage are retired', () => {
  assert.match(apiPage, /No API is implemented/);
  assert.doesNotMatch(apiPage, /Authorization: Bearer|api\.lindy|navigator\.clipboard|fetch\(/);
  assert.match(contactPage, /Contact unavailable/);
  assert.doesNotMatch(contactPage, /<form|<input|<textarea|onSubmit|console\.log|mailto:|tel:/);
});

test('static shell blocks remote connections and form actions', () => {
  assert.match(index, /connect-src 'none'/);
  assert.match(index, /form-action 'none'/);
  assert.match(index, /noindex, nofollow, noarchive/);
  assert.doesNotMatch(index, /https?:\/\//);
});

test('preview launcher is non-mutating, loopback-only, and boundary-bound', () => {
  assert.match(start, /127\.0\.0\.1/);
  assert.match(start, /strictPort/);
  assert.match(start, /cmp -s .*BOUNDARY\.json.*dist\/boundary\.json/);
  for (const forbidden of ['npm install', 'npm ci', 'npm run build', 'kill -9', 'pkill', 'rm -rf', 'migrate', 'seed', 'docker compose']) {
    assert.equal(start.includes(forbidden), false);
  }
});

test('CI checks boundary, quality, runtime, dependencies, and full history secrets', () => {
  for (const required of ['npm ci', 'npm run validate:boundary', 'npm run typecheck', 'npm test', 'npm run lint', 'npm run build', 'npm run verify:dist', 'npm run test:runtime', 'npm run audit:prod', 'gitleaks/gitleaks-action']) {
    assert.match(workflow, new RegExp(required.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
  assert.match(workflow, /fetch-depth: 0/);
});

import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const read = (path) => readFile(new URL(path, root), 'utf8');
const boundary = JSON.parse(await read('BOUNDARY.json'));
const packageJson = JSON.parse(await read('package.json'));
const layout = await read('src/components/Layout.tsx');
const app = await read('src/App.tsx');
const index = await read('index.html');
const launcher = await read('start.sh');

assert.equal(boundary.schemaVersion, 2);
assert.equal(boundary.deployableApplication, false);
assert.equal(boundary.loginAcceptance, 'not_applicable');
assert.equal(boundary.persistenceAcceptance, 'not_applicable');
assert.equal(boundary.migrationAcceptance, 'not_applicable');
assert.equal(boundary.backupAcceptance, 'not_applicable');
assert.equal(boundary.capabilities.userDataSubmission, false);
assert.equal(boundary.capabilities.remoteAssetLoading, false);
assert.equal(boundary.runtime.bindAddress, '127.0.0.1');
assert.ok(boundary.primaryUser.includes('repository maintainer'));
assert.ok(boundary.acceptanceCriteria.length >= 5);
assert.ok(boundary.unresolved.includes('accountable-owner'));

const allowedRuntimeDependencies = ['framer-motion', 'lucide-react', 'react', 'react-dom', 'react-router-dom'];
assert.deepEqual(Object.keys(packageJson.dependencies).sort(), allowedRuntimeDependencies);
for (const forbiddenDependency of ['express', 'fastify', 'next', 'prisma', '@prisma/client', 'firebase', '@supabase/supabase-js', 'axios', 'openai', 'stripe']) {
  assert.equal(packageJson.dependencies[forbiddenDependency], undefined, `${forbiddenDependency} would violate the static boundary`);
}

async function sourceFiles(directory) {
  const entries = await readdir(new URL(directory, root), { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const relative = `${directory}${entry.name}`;
    if (entry.isDirectory()) files.push(...await sourceFiles(`${relative}/`));
    else if (/\.(?:ts|tsx|css)$/.test(entry.name)) files.push(relative);
  }
  return files;
}

const sources = await sourceFiles('src/');
const combinedSource = (await Promise.all(sources.map(read))).join('\n');
const forbiddenBehavior = [
  ['network request', /\b(?:fetch|WebSocket|EventSource)\s*\(/],
  ['browser persistence', /\b(?:localStorage|sessionStorage|indexedDB)\b/],
  ['cookie mutation', /document\.cookie/],
  ['form submission', /<form\b|\bonSubmit\s*=|type=["']submit["']/],
  ['runtime secret configuration', /\b(?:process\.env|import\.meta\.env)\b/],
  ['remote image', /<(?:img|source)[^>]+(?:src|srcSet)=["'{][^>]*https?:\/\//i],
];
for (const [label, pattern] of forbiddenBehavior) assert.doesNotMatch(combinedSource, pattern, label);

assert.match(layout, /<main inert[^>]+data-archived-content="inert"/);
assert.match(layout, /data-reference-boundary="internal-static-only"/);
assert.match(index, /connect-src 'none'/);
assert.match(index, /form-action 'none'/);
assert.match(index, /noindex, nofollow, noarchive/);
assert.doesNotMatch(index, /https?:\/\//);

for (const route of ['blog', 'docs', 'help', 'api', 'about', 'careers', 'team', 'press', 'contact', 'pricing', 'privacy', 'terms', 'cookies']) {
  assert.match(app, new RegExp(`path="/${route}"`), `missing governed route /${route}`);
}
assert.match(app, /path="\*"/);

for (const forbiddenLauncherAction of ['npm install', 'npm ci', 'npm run build', 'kill -9', 'pkill', 'rm -rf', 'migrate', 'seed', 'docker compose']) {
  assert.equal(launcher.includes(forbiddenLauncherAction), false, `launcher contains ${forbiddenLauncherAction}`);
}
assert.match(launcher, /127\.0\.0\.1/);
assert.match(launcher, /cmp -s .*BOUNDARY\.json.*dist\/boundary\.json/);

console.log(`Boundary valid: ${sources.length} source files, ${allowedRuntimeDependencies.length} presentation-only runtime dependencies.`);

import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const expectedBoundary = JSON.parse(await readFile(new URL('BOUNDARY.json', root), 'utf8'));
const builtBoundary = JSON.parse(await readFile(new URL('dist/boundary.json', root), 'utf8'));
const index = await readFile(new URL('dist/index.html', root), 'utf8');

assert.deepEqual(builtBoundary, expectedBoundary, 'compiled boundary evidence is stale');
assert.match(index, /Content-Security-Policy/);
assert.match(index, /connect-src 'none'/);
assert.match(index, /form-action 'none'/);
assert.match(index, /noindex, nofollow, noarchive/);
assert.doesNotMatch(index, /fonts\.googleapis|images\.pexels|upload\.wikimedia/);

async function artifactFiles(directory) {
  const entries = await readdir(new URL(directory, root), { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const relative = `${directory}${entry.name}`;
    if (entry.isDirectory()) files.push(...await artifactFiles(`${relative}/`));
    else files.push(relative);
  }
  return files;
}

const files = await artifactFiles('dist/');
assert.equal(files.some((file) => file.endsWith('.map')), false, 'source maps must not be published');
const readableArtifacts = files.filter((file) => /\.(?:html|js|css|json|svg)$/.test(file));
const artifactText = (await Promise.all(readableArtifacts.map((file) => readFile(new URL(file, root), 'utf8')))).join('\n');
assert.match(artifactText, /Internal static reference/);
assert.match(artifactText, /archived content is non-interactive/);
assert.doesNotMatch(artifactText, /fonts\.googleapis\.com|images\.pexels\.com|upload\.wikimedia\.org/);

console.log(`Distribution valid: ${files.length} files with exact boundary evidence and no remote runtime assets.`);

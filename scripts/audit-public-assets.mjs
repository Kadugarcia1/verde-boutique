#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicRoot = path.join(root, 'public');
const buildRoot = path.join(root, 'dist', 'client');
const relative = (base, file) => path.relative(base, file).split(path.sep).join('/');
const walk = directory => readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
  const file = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(file) : [file];
});

if (!existsSync(path.join(buildRoot, 'index.html'))) {
  throw new Error('Execute npm run build antes da auditoria de public.');
}

const publicFiles = walk(publicRoot);
const copiedPaths = new Set(publicFiles.map(file => relative(publicRoot, file)));
// Inspect the shipped application, not historical documentation or unused source modules.
const codeFiles = walk(buildRoot).filter(file => /\.(?:html|js|css|json|webmanifest)$/i.test(file) && !copiedPaths.has(relative(buildRoot, file)));
const hosting = path.join(root, '.openai', 'hosting.json');
if (existsSync(hosting)) codeFiles.push(hosting);
const code = codeFiles.map(file => readFileSync(file, 'utf8')).join('\n');
const orphaned = publicFiles.filter(file => !code.includes(relative(publicRoot, file)) && !code.includes(path.basename(file)));
const builtMedia = walk(buildRoot).filter(file => /\.(?:webp|png|jpe?g|gif|svg|mp4|m4a|ico)$/i.test(file));
const orphanedBuild = builtMedia.filter(file => !code.includes(relative(buildRoot, file)) && !code.includes(path.basename(file)));
const copyMismatch = publicFiles.filter(file => {
  const built = path.join(buildRoot, relative(publicRoot, file));
  return !existsSync(built) || !readFileSync(file).equals(readFileSync(built));
});
const missing = new Set();
const byName = new Set(publicFiles.map(file => path.basename(file)));
const mediaLiterals = /["'`]((?:\/?[\w.-]+\/)*[\w-]+\.(?:webp|png|jpe?g|gif|svg|mp4|m4a|ico))(?:\?[^"'`]*)?["'`]/gi;
for (const match of code.matchAll(mediaLiterals)) {
  const reference = match[1].replace(/^\//, '');
  if (!existsSync(path.join(publicRoot, reference)) && !byName.has(path.posix.basename(reference))) missing.add(reference);
}

if (orphaned.length || orphanedBuild.length || copyMismatch.length || missing.size) {
  if (orphaned.length) console.error('Arquivos sem referência no build:\n' + orphaned.map(file => '  ' + relative(publicRoot, file)).join('\n'));
  if (orphanedBuild.length) console.error('Mídias órfãs no artefato gerado:\n' + orphanedBuild.map(file => '  ' + relative(buildRoot, file)).join('\n'));
  if (copyMismatch.length) console.error('Cópias ausentes ou divergentes no build:\n' + copyMismatch.map(file => '  ' + relative(publicRoot, file)).join('\n'));
  if (missing.size) console.error('Referências de mídia sem arquivo:\n' + [...missing].map(file => '  ' + file).join('\n'));
  process.exitCode = 1;
} else {
  const bytes = publicFiles.reduce((sum, file) => sum + statSync(file).size, 0);
  console.log(`PUBLIC_ASSET_AUDIT_PASS: ${publicFiles.length} arquivos referenciados, 0 órfãos, 0 referências ausentes (${bytes} bytes).`);
}

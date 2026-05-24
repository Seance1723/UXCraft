import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import test from 'node:test';

const root = path.resolve(import.meta.dirname, '..');
const bin = path.join(root, 'bin', 'ui-ux-master.mjs');
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const templates = [
  'agent-templates/claude/commands/ui-ux-master.md',
  'agent-templates/universal/ui-ux-master-trigger.md',
  'agent-templates/codex/AGENTS.append.md',
  'agent-templates/windsurf/rules/ui-ux-master.md',
  'agent-templates/antigravity/AGENTS.append.md',
  'agent-templates/gemini/GEMINI.append.md',
  'agent-templates/cursor/rules/ui-ux-master.mdc',
];

function run(args, cwd = root) {
  return execFileSync(process.execPath, [bin, ...args], { cwd, encoding: 'utf8' });
}

test('package exposes ui-ux-master bin', () => {
  assert.equal(pkg.bin['ui-ux-master'], './bin/ui-ux-master.mjs');
  assert.ok(fs.existsSync(bin));
  assert.ok(fs.readFileSync(bin, 'utf8').startsWith('#!/usr/bin/env node'));
});

test('agent templates include trigger and avoid local absolute paths', () => {
  for (const rel of templates) {
    const text = fs.readFileSync(path.join(root, rel), 'utf8');
    assert.match(text, /\/ui-ux-master/);
    assert.match(text, /\.ui-ux-master\/SKILL\.md|\.ui-ux-master\/|\.ui-ux-master/);
    assert.match(text, /UI\/UX|ui-ux-master/i);
    assert.doesNotMatch(text, /C:\\|C:\/xampp|C:\/Users|\/workspace/);
  }
});

test('cli help doctor and where work', () => {
  assert.match(run(['--help']), /ui-ux-master install/);
  assert.match(run(['where']).trim(), /UI-UX Skills|ui-ux-master/i);
  assert.match(run(['doctor', '--dry-run']), /trigger: \/ui-ux-master/);
});

test('project install dry-run does not write', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ui-ux-master-dry-'));
  fs.writeFileSync(path.join(dir, 'package.json'), '{}');
  const out = run(['install', '--project', '--dry-run', '--dir', dir]);
  assert.match(out, /dry-run/);
  assert.equal(fs.existsSync(path.join(dir, 'AGENTS.md')), false);
});

test('project install writes expected files and is idempotent', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ui-ux-master-install-'));
  fs.writeFileSync(path.join(dir, 'package.json'), '{}');
  run(['install', '--project', '--dir', dir]);
  run(['install', '--project', '--dir', dir]);
  assert.ok(fs.existsSync(path.join(dir, '.ui-ux-master', 'SKILL.md')));
  assert.ok(fs.existsSync(path.join(dir, '.ui-ux-master', 'references', 'ui-ux-memory-workflow.md')));
  assert.ok(fs.existsSync(path.join(dir, '.ui-ux-master', 'templates', 'ui-ux-memory.md')));
  assert.ok(fs.existsSync(path.join(dir, '.claude', 'commands', 'ui-ux-master.md')));
  assert.ok(fs.existsSync(path.join(dir, 'AGENTS.md')));
  assert.ok(fs.existsSync(path.join(dir, '.windsurf', 'rules', 'ui-ux-master.md')));
  assert.ok(fs.existsSync(path.join(dir, 'GEMINI.md')));
  const agents = fs.readFileSync(path.join(dir, 'AGENTS.md'), 'utf8');
  assert.equal((agents.match(/ui-ux-master:start/g) || []).length, 1);
  assert.match(agents, /\.ui-ux-master\/SKILL\.md/);
  assert.match(agents, /\/ui-ux-master/);
});

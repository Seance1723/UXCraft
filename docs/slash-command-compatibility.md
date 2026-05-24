# Slash Command Compatibility

`/ui-ux-master` is the opt-in activation phrase for this package.

## What `/ui-ux-master` Does

When a user writes `/ui-ux-master`, the agent switches into the UI/UX Master workflow for that request: research-aware UX, IA, flows, design systems, accessibility, responsive states, content design, platform conventions, UI/UX memory, quality gates, and engineering handoff.

If the user does not include `/ui-ux-master`, the skill should not be applied automatically.

## Native Slash Commands vs Text Triggers

Agent ecosystems are not consistent:

- Some agents support native custom slash commands.
- Some agents support project instruction files such as `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `.windsurfrules`, or `.cursor/rules`.
- Some agents only see normal prompt text.

This package handles both models. Native slash commands are installed where available. Everywhere else, project instructions define `/ui-ux-master` as a plain-text opt-in trigger.

## Supported Agents

| Agent | Install target | Trigger behavior |
|---|---|---|
| Claude Code | `.claude/commands/ui-ux-master.md` | Native `/ui-ux-master` command |
| Codex | `AGENTS.md` marked section | Type `/ui-ux-master` in the prompt |
| Windsurf/Cascade | `.windsurf/rules/ui-ux-master.md` and optional `.windsurfrules` | Type `/ui-ux-master` in the prompt |
| Antigravity | `AGENTS.md` / universal fallback | Type `/ui-ux-master` in the prompt |
| Gemini CLI | `GEMINI.md` marked section | Type `/ui-ux-master` in the prompt |
| Cursor | `.cursor/rules/ui-ux-master.mdc` | Type `/ui-ux-master` in the prompt |
| Other agents | `agent-templates/universal/ui-ux-master-trigger.md` | Copy the trigger into the agent's instruction file |

## Project-local Install

Project-local install is recommended because it keeps activation scoped to a repository and copies the skill source into `.ui-ux-master/` so all agents can find it, including no-save `npx` installs.

```bash
npx ui-ux-master install --project
```

## Global Install

Global install creates reusable templates under your home directory and, where supported, user-level slash commands.

```bash
npm install -g ui-ux-master
ui-ux-master install --global
```

## Troubleshooting

- If `/ui-ux-master` does nothing, your agent may not support native slash commands. Add the universal trigger text to the agent's project instructions.
- If the agent applies the skill too often, ensure the installed rule says "activate only when the user writes `/ui-ux-master`."
- If project instructions already have a UI/UX rule, merge carefully and preserve the `/ui-ux-master:start` and `/ui-ux-master:end` markers.

## Security and Consent

The installer should not overwrite existing agent instruction files without marker-based replacement. Review generated instruction files before committing them to a shared repository.

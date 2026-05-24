# UI/UX Master MCP Server

UI/UX Master includes a local MCP server so AI clients can discover the skill automatically as tools, resources, and reusable prompts.

## Why MCP Matters

MCP lets compatible AI clients discover local capabilities without relying only on human-readable README files. Project installs also copy the same assets into `.ui-ux-master/`, so MCP clients and text-trigger agents can both find the same source of truth. With this package, agents can:

- list UI/UX Master tools;
- read the main skill and references as MCP resources;
- retrieve system prompt add-ons;
- generate project memory templates;
- get install instructions for supported agents;
- start common UI/UX workflows through MCP prompts.

## Run the Server

After global install:

```bash
ui-ux-master-mcp
```

Without global install:

```bash
npx -y --package ui-ux-master ui-ux-master-mcp
```

The server communicates over stdio using JSON-RPC/MCP-compatible methods.

## Claude Desktop / MCP Client Config

```json
{
  "mcpServers": {
    "ui-ux-master": {
      "command": "npx",
      "args": ["-y", "--package", "ui-ux-master", "ui-ux-master-mcp"]
    }
  }
}
```

## Hermes Native MCP Config

```yaml
mcp_servers:
  ui_ux_master:
    command: "npx"
    args: ["-y", "--package", "ui-ux-master", "ui-ux-master-mcp"]
```

Restart the agent after adding the config so it can discover the tools.

## Tools

| Tool | Purpose |
|---|---|
| `get_skill` | Return the main `SKILL.md` content. |
| `list_assets` | List discoverable assets, resources, prompts, and tools. |
| `get_asset` | Return a named asset such as `system_prompt`, `complete_checklist`, `memory_template`, or `frontend_rules`. |
| `generate_system_prompt` | Generate full, compact, or MCP-focused system prompt add-ons. |
| `create_memory_template` | Return a `.ui-ux-memory.md` template, optionally with a project name. |
| `install_instructions` | Return install instructions for npm, project, global, MCP, Hermes, Claude Desktop, Cursor, Codex, Windsurf, Gemini, Antigravity, or universal agents. |

## Resources

| URI | Content |
|---|---|
| `ui-ux-master://skill` | Main skill. |
| `ui-ux-master://readme` | README. |
| `ui-ux-master://llms` | AI discovery text. |
| `ui-ux-master://manifest` | Machine-readable AI manifest. |
| `ui-ux-master://system-prompt` | Full system prompt add-on. |
| `ui-ux-master://compact-prompt` | Compact system prompt add-on. |
| `ui-ux-master://mcp-prompt` | MCP-focused prompt add-on. |
| `ui-ux-master://mcp-docs` | This document. |
| `ui-ux-master://checklist` | Complete UI/UX checklist. |
| `ui-ux-master://memory-template` | UI/UX memory template. |

## Prompts

| Prompt | Purpose |
|---|---|
| `ui-ux-master` | Activate the full workflow for a normal UI/UX task. |
| `ui-ux-audit` | Audit a screen, product, flow, URL, or component. |
| `ui-ux-redesign` | Redesign a product area with handoff-ready output. |
| `ui-ux-design-system` | Create or extend tokens, components, governance, and QA. |
| `ui-ux-accessibility-review` | Perform a WCAG-focused accessibility review. |

## Manual Smoke Test

```bash
printf '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{}}\n{"jsonrpc":"2.0","id":2,"method":"tools/list","params":{}}\n' | node bin/ui-ux-master-mcp.mjs
```

Expected output: JSON-RPC responses containing server info and a tools array.

## Security

The MCP server is read-only. It exposes package content and generated prompt text. It does not write files, execute shell commands, read arbitrary paths, or access credentials.

## Activation Reminder

Even through MCP, UI/UX Master remains opt-in. Use the workflow only when the user includes `/ui-ux-master` or explicitly asks to use UI/UX Master.

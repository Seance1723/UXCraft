# Competitive Landscape and Differentiation

This reference summarizes the open-source/UI-agent landscape checked while improving UI/UX Master.

## What Existing Tools Do Well

- `skills` / open agent skills ecosystem: broad multi-agent distribution and many supported agent names.
- `bentoskills`: simple npm-based installation for Claude-oriented UI/UX skills.
- `extract-design-system`: strong focused capability for extracting design tokens from public websites and packaging it as a CLI/agent skill.
- `@assistant-ui/react`: production-grade React components for AI chat interfaces.
- `@figma/code-connect`: strong design-to-code component mapping for Figma and codebases.
- Mature design systems such as GOV.UK Frontend, Salesforce Lightning, Material, Carbon, Atlassian, and Fluent: strong component guidance and production CSS/component foundations.
- `ui-ux-pro-max-skill` (nextlevelbuilder): 161 industry-specific design system generation rules, 67 UI styles, 57 font pairings, 161 color palettes, structured reasoning engine for design system output. Very strong at quick visual system generation with industry matching.
- `ux-ui-agent-skills` (plugin87): solid 3-tier DTCG token architecture (primitive → semantic → component), dark mode swap approach, scored design review output across 6 dimensions.
- `claude-code-ui-agents` (mustafakendiguzel): curated prompt library for component development, UX research, animation, and accessibility across multiple categories.
- `open-design` (nexu-io): The strongest competitor in the space. 132 skills, 150 brand-grade design systems, 16 CLI agent adapters, full daemon + Next.js architecture, sandboxed preview, export to HTML/PDF/PPTX/MP4. Key innovations: (1) discovery question form as Turn 1 — no visuals until 6 dimensions are locked; (2) brand-spec extraction protocol — never guesses colors from a name; (3) 5-dimensional self-critique before every emit (philosophy/hierarchy/execution/specificity/restraint); (4) anti-slop blacklist — explicitly forbidden patterns encoded in the prompt stack; (5) 5 OKLch visual directions for brandless projects; (6) DESIGN.md portable 9-section schema; (7) P0/P1/P2 quality gates per skill; (8) honest placeholder protocol (— not "10× faster"). These ideas have been adopted and adapted into UI/UX Master v1.4.0.

## Where Narrow Skills Often Outperform Generic UI Prompts

- They are easier to install.
- They have a simple trigger or CLI.
- They focus on one concrete task, such as token extraction or component mapping.
- Some have npm packaging and tests.
- Some integrate with a specific agent's native command system.
- `ui-ux-pro-max-skill` matches industry → style → color → font in one automated step, which is fast for new projects.

## Gaps UI/UX Master Must Beat

UI/UX Master is designed to lead by combining the best parts:

1. One simple opt-in trigger: `/ui-ux-master`.
2. Cross-agent installation instead of one-agent lock-in.
3. Full lifecycle coverage from research to handoff, not only visual polish.
4. Project UI/UX memory for consistent branding across repeated work.
5. Standards alignment across WCAG, WAI-ARIA, NN/g-style heuristics, GOV.UK service patterns, Material, Apple HIG, Microsoft, ISO HCD concepts, and Baymard-style ecommerce practice.
6. Advanced risk coverage: privacy, ethics, dark patterns, high-risk domains, AI transparency, localization, and platform conventions.
7. Release engineering: npm package, CLI installer, tests, validator, and deployment zip.
8. Brand-method depth: 10 dedicated skill files with full design specs (layout, typography, spacing, motion, component specs, accessibility, anti-patterns, QA) — more depth per method than any competitor.
9. Color psychology and branding skill with industry-specific palette prescriptions, sentiment-to-color mapping, WCAG contrast verification, and dark mode adaptation rules.
10. **v1.4.0:** Discovery-first workflow: 6-question form before any visual output, brand extraction protocol (never guesses colors), 5 OKLch visual directions for brandless projects, junior-designer warm-up pass.
11. **v1.4.0:** Quality-gated output: 5-dimensional self-critique (philosophy/hierarchy/execution/specificity/restraint), P0/P1/P2 hard gates, anti-AI-slop blacklist, honest placeholder protocol — closes the last major gap vs. open-design.
12. **v1.4.0:** Portable 9-section design system schema (DESIGN.md-compatible): single source of truth for every `.ui-ux-memory.md`, ensuring token consistency across all sessions.

## Remaining Honest Limitations

- No sandboxed live preview or daemon: UI/UX Master is a prompt-layer skill only; `open-design` ships a full Next.js + Electron app with iframe preview, export, and SQLite persistence. If a live rendering environment is needed, pair with open-design or use a separate preview tool.
- No built-in media generation: `open-design` integrates gpt-image-2 and Seedance video generation. UI/UX Master focuses on design specs and code-handoff, not media rendering.
- It does not replace specialized code libraries such as assistant-ui React components or GOV.UK Frontend CSS.
- It does not integrate directly with Figma APIs; pair it with Figma Code Connect or MCP/Figma tooling if needed.
- It cannot replace real user research, accessibility expert review, or legal/domain review in high-risk contexts.
- `ui-ux-pro-max-skill` produces faster initial design system suggestions; UI/UX Master provides more depth, lifecycle coverage, and quality gates.
- `open-design` has a richer skill catalog (132 skills vs. our focused set) and live rendering; UI/UX Master is leaner, npm-distributed, and cross-agent without requiring a local daemon.

## Strategy to Stay Ahead

- Keep `/ui-ux-master` simple, opt-in, and daemon-free — one npm install, works in every agent.
- Keep references standards-aligned and updated; re-audit major competitors every release.
- Discovery-first + quality-gated output as non-negotiable defaults — close the gap on open-design's prompt-stack discipline.
- Validate every release with Python, Node tests, npm pack dry-run, zip extraction validation, and independent review.
- Prefer concrete outputs: memory, specs, states, QA, acceptance criteria, and handoff.
- Maintain the 9-section design system schema as a DESIGN.md-compatible standard — interoperability with open-design's ecosystem is a feature, not a bug.

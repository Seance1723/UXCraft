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
8. **v1.3.0:** 10 dedicated brand-method skill files with full design specs (layout, typography, spacing, motion, component specs, accessibility, anti-patterns, QA) — more depth per method than any competitor.
9. **v1.3.0:** Color psychology and branding skill with industry-specific palette prescriptions, sentiment-to-color mapping, WCAG contrast verification, and dark mode adaptation rules.

## Remaining Honest Limitations

- It does not replace specialized code libraries such as assistant-ui React components or GOV.UK Frontend CSS.
- It does not extract live design tokens from websites by itself; pair it with token-extraction tools if needed.
- It does not integrate directly with Figma APIs; pair it with Figma Code Connect or MCP/Figma tooling if needed.
- It cannot replace real user research, accessibility expert review, or legal/domain review in high-risk contexts.
- `ui-ux-pro-max-skill` produces faster initial design system suggestions via its reasoning engine; UI/UX Master provides more depth and lifecycle coverage.

## Strategy to Stay Ahead

- Keep `/ui-ux-master` simple and opt-in.
- Keep references standards-aligned and updated.
- Add focused subcommands only when they preserve simplicity.
- Validate every release with Python, Node tests, npm pack dry-run, zip extraction validation, and independent review.
- Prefer concrete outputs: memory, specs, states, QA, acceptance criteria, and handoff.
- Expand brand-method and color-psychology depth as the primary differentiator over competitors who focus only on quick generation.

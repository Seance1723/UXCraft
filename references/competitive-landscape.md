# Competitive Landscape and Differentiation

This reference summarizes the open-source/UI-agent landscape checked while improving UI/UX Master.

## What Existing Tools Do Well

- `skills` / open agent skills ecosystem: broad multi-agent distribution and many supported agent names.
- `bentoskills`: simple npm-based installation for Claude-oriented UI/UX skills.
- `extract-design-system`: strong focused capability for extracting design tokens from public websites and packaging it as a CLI/agent skill.
- `@assistant-ui/react`: production-grade React components for AI chat interfaces.
- `@figma/code-connect`: strong design-to-code component mapping for Figma and codebases.
- Mature design systems such as GOV.UK Frontend, Salesforce Lightning, Material, Carbon, Atlassian, and Fluent: strong component guidance and production CSS/component foundations.

## Where Narrow Skills Often Outperform Generic UI Prompts

- They are easier to install.
- They have a simple trigger or CLI.
- They focus on one concrete task, such as token extraction or component mapping.
- Some have npm packaging and tests.
- Some integrate with a specific agent's native command system.

## Gaps UI/UX Master Must Beat

UI/UX Master is designed to lead by combining the best parts:

1. One simple opt-in trigger: `/ui-ux-master`.
2. Cross-agent installation instead of one-agent lock-in.
3. Full lifecycle coverage from research to handoff, not only visual polish.
4. Project UI/UX memory for consistent branding across repeated work.
5. Standards alignment across WCAG, WAI-ARIA, NN/g-style heuristics, GOV.UK service patterns, Material, Apple HIG, Microsoft, ISO HCD concepts, and Baymard-style ecommerce practice.
6. Advanced risk coverage: privacy, ethics, dark patterns, high-risk domains, AI transparency, localization, and platform conventions.
7. Release engineering: npm package, CLI installer, tests, validator, and deployment zip.

## Remaining Honest Limitations

- It does not replace specialized code libraries such as assistant-ui React components or GOV.UK Frontend CSS.
- It does not extract live design tokens from websites by itself; pair it with token-extraction tools if needed.
- It does not integrate directly with Figma APIs; pair it with Figma Code Connect or MCP/Figma tooling if needed.
- It cannot replace real user research, accessibility expert review, or legal/domain review in high-risk contexts.

## Strategy to Stay Ahead

- Keep `/ui-ux-master` simple and opt-in.
- Keep references standards-aligned and updated.
- Add focused subcommands only when they preserve simplicity.
- Validate every release with Python, Node tests, npm pack dry-run, zip extraction validation, and independent review.
- Prefer concrete outputs: memory, specs, states, QA, acceptance criteria, and handoff.

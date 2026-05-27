# Output Quality Gates

Load this file before emitting any design output. Apply the 5-dimensional self-critique, pass P0 hard gates, then check the anti-slop blacklist. Only emit output after all three pass.

This is not optional. A design output that skips these gates has not been reviewed and should not be considered complete.

---

## Part 1 — 5-Dimensional Self-Critique

Before producing final visual output (mockup, spec, component, landing page, design system), silently score your output on these five dimensions. Do not show the scoring to the user unless they ask. Fix and rescore until all dimensions are ≥ 3.

| Dimension | What it measures | Score 1 | Score 3 | Score 5 |
|---|---|---|---|---|
| **Philosophy** | Does the design have a clear, defensible visual identity? | Generic. Could be any product in any category. | Has a point of view but it's diluted or inconsistent. | Every layout decision, color choice, and type scale serves a single coherent visual thesis. |
| **Hierarchy** | Is the most important element unambiguously dominant? | Multiple elements compete for attention equally. | A primary element exists but is undermined by noise. | The user's eye lands exactly where it should, in the right sequence, without effort. |
| **Execution** | Are spacing, alignment, type scale, and color application precise? | Arbitrary spacing, misaligned elements, inconsistent sizing. | Generally consistent but has visible irregularities. | Every value is intentional. Spacing is from a system. Nothing looks accidental. |
| **Specificity** | Is content real and specific, or generic and placeholder? | All text is lorem ipsum or generic ("Title here", "10× faster"). | Some real content, some placeholder. | Every piece of visible copy is real, specific, and contextually correct. |
| **Restraint** | Are there elements that should be removed? | Visually noisy. Too many competing colors, sizes, or effects. | A few unnecessary elements but the core is clean. | Nothing could be removed without losing meaning. Every element earns its place. |

### Scoring Rules

- Score each dimension 1–5 honestly.
- If any dimension scores below 3: identify the cause, fix it, rescore.
- Two fix-and-rescore passes is normal and expected.
- If you cannot get a dimension above 2 with the constraints given, flag it explicitly: "Constraint note: [dimension] is limited by [reason]. Recommended fix: [suggestion]."
- Do not emit output with any score below 3 without an explicit constraint note.

### Scoring Shorthand (use internally)

```
Philosophy: [1-5]  Hierarchy: [1-5]  Execution: [1-5]  Specificity: [1-5]  Restraint: [1-5]
→ [PASS / NEEDS FIX]
```

---

## Part 2 — P0 Hard Gates

These are non-negotiable checks. Any P0 failure blocks output entirely until fixed.

### P0 — Critical (output blocked until resolved)

- [ ] **No fake metrics.** Output contains no invented numbers presented as facts ("10× faster", "used by 50,000 teams", "99.9% uptime") unless the user provided those numbers. Replace with `—` or a clearly labelled placeholder (see Part 3 — Honest Placeholders).
- [ ] **No inaccessible text contrast.** All text has at least 4.5:1 contrast against its background. All large text (18px+ or 14px+ bold) has at least 3:1. Checked, not assumed.
- [ ] **No missing interactive states.** Every interactive element (button, link, input, toggle, card) has at minimum: default, hover, focus, disabled states defined.
- [ ] **No orphaned CTAs.** Every call-to-action has: a label (not icon-only), a destination or action, and an accessible name.
- [ ] **No overflowing or clipped content at 375px mobile.** Layout tested at the smallest target breakpoint.

### P1 — Important (flag to user if not fixed)

- [ ] All images have alt text described (not just `alt="image"`).
- [ ] Color is not the only differentiator for any meaning (status, error, category).
- [ ] Heading hierarchy is logical (H1 → H2 → H3, no skipped levels).
- [ ] Focus order follows visual reading order.
- [ ] Error messages identify the field and state a recovery action.

### P2 — Recommended (note in handoff)

- [ ] Dark mode tokens specified if the product targets dark-mode users.
- [ ] RTL layout checked if product targets Arabic, Hebrew, or Persian markets.
- [ ] Loading / skeleton states defined for all data-dependent components.
- [ ] Empty states defined for all lists, grids, and dashboards.
- [ ] i18n: all visible copy fits in typical translation expansions (German/French can expand 30–40%).

---

## Part 3 — Anti-AI-Slop Blacklist

These patterns are explicitly forbidden. If any appear in your output, remove them before emitting.

### Visual Patterns — Never Use

| Forbidden pattern | Why it's slop | What to use instead |
|---|---|---|
| Aggressive purple-to-blue gradient as a hero background | Overused in AI/SaaS projects to the point of meaninglessness | Solid brand color, OKLch-calibrated tint ramp, or image-driven hero |
| Rounded card with a thick left-border accent color | Generic "dashboard widget" pattern that communicates nothing | Use elevation (shadow), contained background, or inline icon for status |
| Generic emoji icons as product icons (🚀🎯💡✅) | AI defaults, no brand identity, looks auto-generated | SVG icons (Lucide, Heroicons, Phosphor, or custom), or no icon at all |
| Hand-drawn SVG humans / people illustrations with bold outlines | Overused "friendly tech" cliché | Photography, abstract illustration, or no illustration |
| Inter as a display/headline face | Beautiful for body text, but AI always defaults to it | Pair Inter body with a display face (Sohne, DM Sans, Fraunces, etc.) or use brand-specified type |
| Stock "team" photos (diverse group smiling at laptop) | Instantly recognizable as AI/stock filler | Real product screenshots, abstract visuals, or explicitly labelled placeholders |
| "Confetti" or celebration lottie on every positive action | Loses meaning through overuse | Reserve confetti-style animation for truly significant milestones (account created, first payment) |
| Pastel blue + white + a single rounded button — nothing else | The "minimum viable SaaS" look, signals no design thinking | Commit to a visual direction with actual identity |
| Neon glow effects on dark backgrounds | AI "cyberpunk" default | Use brand accent sparingly, without glow, on dark surfaces |
| Multiple competing gradient backgrounds on the same page | Visual noise, no hierarchy | One gradient maximum, used structurally |

### Copy Patterns — Never Use

| Forbidden copy pattern | Why it's slop | What to use instead |
|---|---|---|
| `"10× faster"` without a source | Invented metric, erodes trust | `"—"` or `"[insert benchmark result]"` |
| `"Trusted by 10,000+ teams"` without a source | Same | `"[insert real user count]"` or remove |
| `"The future of [category]"` | Meaningless, overused | Specific outcome: what the user achieves |
| `"Seamlessly"`, `"Effortlessly"`, `"Powerful yet simple"` | Filler adjectives that all AI copy uses | Describe the specific mechanic or outcome |
| `"All-in-one platform"` | Tells the user nothing | Name the specific things it does |
| Lorem ipsum in high-fidelity output | Breaks specificity; users cannot evaluate if copy is right | Write real placeholder copy that fits the context |
| `"Click here"` as link text | Not descriptive, fails accessibility | "View pricing", "Download the report", "Start free trial" |
| Generic testimonial: `"This product changed my life. — John D."` | AI filler | Leave blank with `[real customer quote, role, company]` |

### Structure Patterns — Never Use

| Forbidden structure | Why | Alternative |
|---|---|---|
| Full-page loading spinner with no progress feedback | Dead UX; users don't know if anything is happening | Skeleton screens + progress indication |
| Carousel/slider in the hero | Reduces engagement, bad on mobile, poor accessibility | Single strong hero message |
| "5 features, each with an icon, title, and one-line description" as the entire homepage | The generic SaaS landing page formula | Differentiate: use proof, specificity, demos |
| Accordion-everything on mobile | Not discoverable, feels lazy | Prioritize content; accordion only for genuinely secondary info |
| Hiding price until a "Contact Sales" wall | Dark pattern, destroys trust | Show pricing or at minimum a pricing range |

---

## Part 4 — Honest Placeholder Protocol

When you do not have real content, use structured, honest placeholders. Never invent facts.

### Numbers and Metrics

```
Invented:  "10× faster inference"
Correct:   "[Performance benchmark — to be added after testing]"
Short form: —
```

```
Invented:  "Trusted by 50,000 teams"
Correct:   "[User count — to be verified]"
Short form: —
```

### Images

```
Invented:  Describe a stock photo of people smiling
Correct:   [Product screenshot] or [Photography: team in office] or [Illustration: abstract]
```

### Quotes and Testimonials

```
Invented:  "This saved us 10 hours a week. — Sarah K., Head of Product"
Correct:   [Customer quote — name, title, company to be added]
```

### Dates and Stats

```
Invented:  "Since 2019, serving 120 countries"
Correct:   [Founded: year] [Markets: regions]
```

### Rule

If a piece of content is a placeholder, it must **look** like a placeholder. Use `[square brackets]`, grey fill blocks, or `—`. Never make a placeholder look like real content.

---

## Quick Checklist (use before every emit)

```
5-DIM CRITIQUE
Philosophy ≥3? [ ]  Hierarchy ≥3? [ ]  Execution ≥3? [ ]
Specificity ≥3? [ ]  Restraint ≥3? [ ]

P0 GATES
No fake metrics? [ ]  Contrast passes? [ ]  States defined? [ ]
CTAs labeled? [ ]  375px OK? [ ]

ANTI-SLOP
No purple gradient hero? [ ]  No generic emojis? [ ]  No left-border accent card? [ ]
No hand-drawn humans? [ ]  No Inter-as-hero? [ ]  No Lorem ipsum in high-fi? [ ]
No invented numbers? [ ]  No "10× faster" without source? [ ]

→ EMIT [ ] / NEEDS FIX [ ]
```

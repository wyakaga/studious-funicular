# Program Afiliasi Hostinger

## Mission
Create implementation-ready, token-driven UI guidance for Program Afiliasi Hostinger that is optimized for consistency, accessibility, and fast delivery across dashboard web app.

## Brand
- Product/brand: Program Afiliasi Hostinger
- URL: https://www.hostinger.com/id/afiliasi
- Audience: authenticated users and operators
- Product surface: dashboard web app

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=DM Sans`, `font.family.stack=DM Sans, sans-serif`, `font.size.base=16px`, `font.weight.base=399`, `font.lineHeight.base=24px`
- Typography scale: `font.size.xs=14px`, `font.size.sm=16px`, `font.size.md=18px`, `font.size.lg=20px`, `font.size.xl=24px`, `font.size.2xl=36px`, `font.size.3xl=48px`, `font.size.4xl=56px`
- Color palette: `color.text.primary=#18181a`, `color.text.secondary=#222225`, `color.text.tertiary=#673de6`, `color.text.inverse=#ffffff`, `color.surface.base=#000000`, `color.surface.raised=#f5f5f6`, `color.surface.strong=#110c29`
- Spacing scale: `space.1=8px`, `space.2=12px`, `space.3=16px`, `space.4=32px`, `space.5=40px`, `space.6=48px`, `space.7=80px`, `space.8=550.76px`
- Radius/shadow/motion tokens: `radius.xs=6px`, `radius.sm=12px`, `radius.md=16px`, `radius.lg=50px`, `radius.xl=999px` | `shadow.1=rgba(0, 0, 0, 0) 0px 0px 0px 1px`, `shadow.2=rgb(123, 102, 255) 0px 0px 0px 1px` | `motion.duration.instant=150ms`, `motion.duration.fast=300ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (120), buttons (73), cards (65), navigation (1).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.

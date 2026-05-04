---
name: to-issues
description: Break a plan, spec, or PRD into independently-grabbable issues on the project issue tracker using tracer-bullet vertical slices. Use when user wants to convert a plan into issues, create implementation tickets, or break down work into issues.
---

# To Issues

Break a plan into independently-grabbable issues using vertical slices, also called tracer bullets.

The issue tracker and triage label vocabulary should have been provided. Run `/setup-matt-pocock-skills` if not.

## Process

### 1. Gather Context

Work from existing conversation context. If the user passes an issue reference, issue number, URL, or path, fetch it from the issue tracker and read its full body and comments.

### 2. Explore Codebase

If the codebase has not already been explored, inspect it to understand current state. Issue titles and descriptions should use the project's domain glossary vocabulary and respect ADRs in the touched area.

### 3. Draft Vertical Slices

Break the plan into tracer-bullet issues. Each issue is a thin vertical slice through all integration layers end-to-end, not a horizontal slice of one layer.

Slices may be `HITL` or `AFK`.

- `HITL`: requires human interaction, such as architectural decision or design review.
- `AFK`: can be implemented and merged without human interaction.

Prefer `AFK` where possible.

Vertical slice rules:

- Each slice delivers a narrow but complete path through every layer: schema, API, UI, tests.
- A completed slice is demoable or verifiable on its own.
- Prefer many thin slices over few thick ones.

### 4. Quiz User

Present proposed breakdown as a numbered list. For each slice, show:

- Title: short descriptive name
- Type: `HITL` or `AFK`
- Blocked by: which slices must complete first, if any
- User stories covered: which user stories this addresses, if source material has them

Ask:

- Does the granularity feel right: too coarse or too fine?
- Are dependency relationships correct?
- Should any slices be merged or split further?
- Are correct slices marked as `HITL` and `AFK`?

Iterate until the user approves the breakdown.

### 5. Publish Issues

For each approved slice, publish a new issue to the issue tracker. Apply the `needs-triage` label so each issue enters normal triage flow.

Publish issues in dependency order, blockers first, so real issue identifiers can be referenced in `Blocked by`.

## Issue Template

```markdown
## Parent

A reference to the parent issue on the issue tracker, if the source was an existing issue. Otherwise omit this section.

## What to build

A concise description of this vertical slice. Describe end-to-end behavior, not layer-by-layer implementation.

## Acceptance criteria

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Blocked by

- A reference to the blocking ticket, if any

Or "None - can start immediately" if no blockers.
```

Do not close or modify any parent issue.

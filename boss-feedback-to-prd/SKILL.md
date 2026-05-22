---
name: boss-feedback-to-prd
description: Turn manager, stakeholder, client, or boss feedback into feasibility analysis, codebase impact assessment, PRDs, and implementation-ready issue plans. Use when Codex receives pasted project feedback, vague feature requests, critique, Slack/email comments, or asks to evaluate feasibility against the current repository, produce a PRD, analyze solution impact, identify risks, or convert feedback into scoped engineering work.
---

# Boss Feedback to PRD

Use this skill to convert stakeholder feedback into grounded product and engineering artifacts. Treat the pasted message as raw input, not a complete specification.

## Core workflow

1. Capture the original feedback and preserve the stakeholder's intent.
2. Extract the request, implied business goal, user problem, constraints, and ambiguous terms.
3. Classify the work as one or more of: feature, bug, UX change, technical refactor, security/privacy concern, performance issue, billing/credits change, data/modeling change, operational process, or compliance request.
4. Inspect the current codebase before judging feasibility. Search for relevant modules, routes, UI flows, schemas, migrations, tests, documentation, configuration, and existing patterns.
5. Ground feasibility claims in codebase evidence. Include file paths and relevant symbols when possible.
6. Separate assumptions into:
   - safe engineering assumptions
   - product questions needing stakeholder confirmation
   - blockers that prevent reliable scoping
7. Produce a feasibility and impact analysis before writing a PRD.
8. Draft the PRD using `references/prd-template.md` when the user asks for a PRD, spec, implementation plan, or issue-ready output.
9. Offer issue breakdown only after the PRD or scope is stable. Use existing issue-tracker skills if available and explicitly requested.

## Codebase analysis expectations

When inside a repo, inspect before answering. Prefer `rg` for code search. Look for:

- existing implementations near the requested behavior
- data models, database migrations, validation, and API contracts
- frontend entry points, forms, tables, state, and navigation
- authorization, ownership checks, role gates, and abuse controls
- tests that describe current behavior
- docs or previous PRDs that define product intent

If no repository is available, state that the feasibility is repository-agnostic and list what would need to be inspected later.

## Output shape

Default to this order unless the user asks for a different artifact:

1. Stakeholder request summary
2. Interpreted requirements
3. Feasibility rating
4. Codebase evidence
5. Solution impact
6. Risks and open questions
7. MVP scope and later scope
8. PRD or issue plan
9. Boss-ready summary

Keep stakeholder-facing summaries concise and non-technical. Keep engineering sections specific and tied to files, modules, data, and tests.

## Feasibility rating

Use one of these labels:

- `Straightforward`: existing architecture supports it; low uncertainty.
- `Moderate`: feasible, but touches multiple surfaces or needs product choices.
- `High risk`: feasible only with significant architecture, data, security, or UX tradeoffs.
- `Blocked`: cannot scope responsibly without missing business, technical, or repository context.

Include effort as `Small`, `Medium`, `Large`, or `Unknown`, and explain the reason in one or two sentences.

## Solution impact checklist

Address only the areas that apply:

- frontend views and components
- backend services, routes, jobs, workers, or integrations
- database schema, migrations, indexes, and data backfills
- auth, roles, permissions, ownership, RLS, abuse prevention, and rate limits
- billing, credits, quotas, retries, refunds, or metering
- analytics, audit logs, observability, and support tooling
- tests, fixtures, mocks, and manual QA
- deployment, rollout, flags, migrations, and rollback
- privacy, security, compliance, and data retention
- documentation and stakeholder communication

## PRD guidance

When generating a PRD:

- Start with the problem and decision context, not implementation details.
- Define goals and non-goals to control scope.
- Include functional requirements as testable statements.
- Include acceptance criteria with observable outcomes.
- Include edge cases from the current codebase and likely abuse paths.
- Include implementation notes only after requirements, and clearly mark them as notes.
- Include a testing and rollout plan.
- Include open questions instead of inventing product policy.

## Issue breakdown guidance

When asked to create implementation issues, split work into vertical slices that can be completed independently. Each issue should include:

- goal
- relevant code areas
- acceptance criteria
- test expectations
- dependencies or sequencing

Avoid creating issues for vague discovery unless a concrete decision or artifact must be produced.

## Communication style

For a boss-ready response, provide a short summary with:

- what is feasible
- what it will affect
- what decision is needed
- recommended MVP

Do not overstate certainty. If the repository evidence is thin, say so clearly.

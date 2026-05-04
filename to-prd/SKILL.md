---
name: to-prd
description: Turn the current conversation context into a PRD and publish it to the project issue tracker. Use when user wants to create a PRD from the current context.
---

# To PRD

This skill takes the current conversation context and codebase understanding and produces a PRD. Do not interview the user. Synthesize what is already known.

The issue tracker and triage label vocabulary should have been provided. Run `/setup-matt-pocock-skills` if not.

## Process

1. Explore the repo to understand current codebase state, if not already done. Use the project's domain glossary vocabulary throughout the PRD, and respect ADRs in the touched area.
2. Sketch the major modules to build or modify. Actively look for opportunities to extract deep modules that can be tested in isolation.
3. Check with the user that these modules match expectations. Check which modules they want tests written for.
4. Write the PRD using the template below.
5. Publish it to the project issue tracker with the `needs-triage` label.

A deep module encapsulates a lot of functionality behind a simple, testable interface that rarely changes.

## PRD Template

```markdown
## Problem Statement

The problem that the user is facing, from the user's perspective.

## Solution

The solution to the problem, from the user's perspective.

## User Stories

A long, numbered list of user stories. Each user story should use:

1. As an <actor>, I want a <feature>, so that <benefit>

## Implementation Decisions

A list of implementation decisions that were made. This can include:

- The modules that will be built or modified
- The interfaces of those modules that will be modified
- Technical clarifications from the developer
- Architectural decisions
- Schema changes
- API contracts
- Specific interactions

Do not include specific file paths or code snippets. They may become outdated quickly.

## Testing Decisions

A list of testing decisions that were made. Include:

- A description of what makes a good test: only test external behavior, not implementation details
- Which modules will be tested
- Prior art for the tests, such as similar test types in the codebase

## Out of Scope

A description of the things that are out of scope for this PRD.

## Further Notes

Any further notes about the feature.
```

---
name: grill-me
description: Interview the user relentlessly about a plan or design until reaching shared understanding, resolving each branch of the decision tree. Use when user wants to stress-test a plan, get grilled on their design, or mentions "grill me".
---

# Grill Me

## Goal

Stress-test a plan or design through a focused interview until the decisions, dependencies, tradeoffs, and unresolved risks are explicit.

## Workflow

1. Restate the plan or design briefly.
2. Identify the highest-leverage unresolved decision.
3. Ask exactly one question.
4. Include a recommended answer for that question.
5. Wait for the user's answer.
6. Use the answer to choose the next branch of the decision tree.
7. Continue until the plan has a shared, coherent shape or the user stops.

## Question Rules

- Ask one question at a time.
- Make each question concrete and decision-oriented.
- Prefer questions that unblock multiple downstream decisions.
- Resolve dependencies in order. Do not jump to implementation details before the underlying product, architecture, or operational choice is settled.
- When there are multiple valid paths, name the tradeoff directly.
- Provide a recommended answer with every question.
- Do not overwhelm the user with a long questionnaire.

## Codebase Exploration

If a question can be answered by exploring the codebase, inspect the codebase instead of asking the user.

Use local evidence for questions about:

- existing architecture
- framework and package choices
- current data models
- API boundaries
- test and build commands
- deployment setup
- naming and style conventions

After exploring, state the finding briefly and ask the next question only if a real decision remains.

## Recommended Answer Format

Use this shape:

```text
Question: ...

Recommended answer: ...
```

Keep the recommendation opinionated but revisable. The user can accept it, reject it, or modify it.

## Completion

When the major branches are resolved, summarize:

- agreed decisions
- open risks
- next implementation step

Keep the summary concise.

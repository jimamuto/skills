---
name: repo-workflow
description: Use when Codex is working inside any software repository and needs a disciplined repo-aware workflow for code changes, debugging, reviews, tests, commits, or documentation updates. Applies especially when the repo is unfamiliar, has a dirty worktree, includes user edits, or requires choosing safe commands and verification steps.
---

# Repo Workflow

## Core Process

1. Inspect the repo before changing files.
2. Identify project type, package manager, test commands, and existing conventions from local files.
3. Check worktree state before edits when Git is available.
4. Preserve user changes. Never revert unrelated edits unless explicitly requested.
5. Keep changes scoped to the user request.
6. Verify with the narrowest meaningful tests or build command available.
7. Report changed files, verification results, and any remaining risk.

## Discovery

Prefer fast local inspection:

```powershell
rg --files
git status --short
```

Look for:

- `README*`, `package.json`, `pyproject.toml`, `Cargo.toml`, `go.mod`, `pom.xml`, `docker-compose.yml`
- test folders and CI config
- existing scripts, lint commands, and code style
- docs that describe architecture or deployment

## Editing Rules

- Match existing patterns over introducing new abstractions.
- Use structured parsers or project tooling when practical.
- Keep comments rare and useful.
- Avoid unrelated formatting churn.
- Treat generated files carefully; update them only when the repo expects it.

## Verification

Choose commands by confidence and blast radius:

- Single bug fix: targeted unit test or focused script.
- Shared behavior: relevant test suite plus lint/typecheck when available.
- Frontend UI: build plus browser or screenshot verification when requested or available.
- Docs-only change: no build required unless docs are generated.

If verification cannot run, state the exact blocker.

## Git

Before committing, review:

```powershell
git status --short
git diff --stat
git diff
```

Do not include unrelated user changes in commits. If unrelated changes exist, stage only the files changed for the current task.

## Optional References

Read `references/repo-checklist.md` when planning or reviewing a larger change.

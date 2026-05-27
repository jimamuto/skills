# Global Repo Workflow

When working inside a software repository, adapt workflow to task size.

## Available Local Tools

This machine has these common runtimes/tools available:

- `python` for Python 3.11.9. Use `python`, not `python3`.
- `uv` for Python environment, dependency, script, and project workflows. Prefer `uv` over raw `pip`/`venv` when appropriate.
- `node` for Node.js.
- `npm` for JavaScript package workflows.

Python preference:

- Prefer `uv run ...` for running Python project commands when a repo uses or can safely use uv.
- Prefer `uv sync`, `uv add`, and `uv remove` for dependency management in uv-managed projects.
- Use `pip` only as a fallback when the project is clearly pip-based, uv is unsuitable, or existing docs/scripts require pip.
- Do not introduce uv project files into an existing Python repo unless requested or clearly consistent with the repo.

## Always

- Preserve user changes. Never revert unrelated edits unless explicitly requested.
- Keep changes scoped to the user's request.
- Match existing patterns before adding new abstractions.
- Avoid unrelated formatting churn.
- Treat generated files carefully; update them only when the repo expects it.
- Report changed files, verification results, and remaining risks.

## For code changes, debugging, reviews, or commits

1. Inspect repo context before editing.
2. Read relevant project instructions when present: `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, `README*`, docs.
3. Identify project type, package manager, commands, tests, and conventions from local files.
4. Check worktree state with `git status --short` when Git is available.
5. Make targeted edits.
6. Verify with the narrowest meaningful test, build, lint, or typecheck command available.

Prefer discovery commands:

```bash
rg --files
git status --short
```

## For broad or risky changes

Before editing, briefly state:

- files or areas likely touched
- intended approach
- verification plan

Risky changes include migrations, auth, billing, data deletion, deployment, security, or large refactors.

## Before commits or final code summaries

Review:

```bash
git status --short
git diff --stat
git diff
```

Do not include unrelated user changes in commits. If unrelated changes exist, stage only files changed for the current task.

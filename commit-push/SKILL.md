---
name: commit-push
description: Safely commit and push only task-relevant changes. Use when user asks to commit, push, commit and push, save changes, publish changes, or run a safe git commit workflow.
---

# Commit Push

Commit and push only changes relevant to current task.

## Workflow

1. Inspect repo state:
   - `git status --short`
   - `git diff --stat`
   - `git diff`
2. Identify task-owned files. Do not include unrelated user changes.
3. Run narrow verification for changed files using repo instructions and package-manager conventions.
4. Stage only task files:
   - `git add <specific files>`
5. Review staged diff:
   - `git diff --cached --stat`
   - `git diff --cached`
6. Commit with concise message:
   - Prefer user-provided message/scope.
   - Otherwise use conventional style: `<type>: <summary>`.
7. Push current branch:
   - `git push`
8. Final response must include:
   - commit hash
   - pushed branch
   - files committed
   - verification run
   - skipped/unrelated dirty files

## Safety

- Never stage unrelated dirty files.
- Never amend, force-push, rebase, reset, or clean unless user explicitly asks.
- If staged changes already exist, inspect them and confirm they belong to current task before committing.
- If verification fails, stop before commit unless user explicitly says to commit anyway.

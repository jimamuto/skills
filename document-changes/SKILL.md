---
name: document-changes
description: Document recent repository changes in Markdown, updating existing docs or creating new docs when unique, then ask before commit/push. Use when user asks to document changes, write recent changes, update docs for work done, create changelog-style notes, or document then push.
---

# Document Changes

Document recent repo changes in Markdown before commit/push.

## Workflow

1. Inspect repo state:
   - `git status --short`
   - `git diff --stat`
   - `git diff`
2. Identify task-owned changes vs unrelated user changes.
3. Find existing documentation that should receive update:
   - `README*`
   - `docs/**/*.md`
   - `PRODUCT.md`, `DESIGN.md`, `AGENTS.md` when applicable
   - changelog/release notes if present
4. If existing doc clearly fits, update it in Markdown.
5. If no existing doc fits or case is unique, create focused Markdown doc in best repo location:
   - prefer `docs/<topic>.md` when docs folder exists
   - otherwise create `<topic>.md` only if repo convention supports root docs
6. Markdown content should include as relevant:
   - summary
   - files/areas changed
   - behavior change
   - setup/migration/deploy notes
   - verification commands/results
   - risks/follow-ups
7. Run narrow verification if docs or code changed.
8. Summarize docs created/updated.
9. Ask exactly:
   - `Push these changes? Reply yes to commit and push, or no to leave them local.`
10. If user says yes, use `commit-push` skill/workflow.
11. If user says no, do not stage/commit/push.

## Safety

- Do not commit or push before explicit yes.
- Do not include unrelated dirty files.
- Preserve user changes.
- Avoid dumping raw diffs into docs; write durable human-facing notes.
- Keep docs scoped to current task.

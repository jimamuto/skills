---
name: repository-product-design-context
description: Use when working in a software repository that has AGENTS.md, PRODUCT.md, DESIGN.md, product docs, design docs, repository instructions, user-facing behavior changes, route contracts, workspace/auth flows, UI changes, layout, copy, colors, spacing, frontend components, or design-system work. Also use when the user mentions PRODUCT.md, DESIGN.md, AGENTS.md, project instructions, product behavior, or visual/design guidance.
---

# Repository Product and Design Context

Use this skill to preserve project-specific product, design, and agent workflow instructions before changing code or docs.

## Workflow

1. Look for repository instruction files near the current working directory and ancestors:
   - `AGENTS.md`
   - `.agents/AGENTS.md`
   - `CLAUDE.md`
   - `.cursorrules`
   - other obvious local agent or contributor instruction files
2. If the task affects user-facing behavior, route contracts, workflows, settings, jobs, search, ingest, auth, or product semantics, read `PRODUCT.md` if present.
3. If the task affects UI, copy hierarchy, layout, color, spacing, imagery, frontend components, accessibility, or visual design, read `DESIGN.md` if present.
4. Follow the most local/project-specific instruction first when instructions conflict, unless the user explicitly overrides it.
5. Keep behavior and design changes scoped to the request.
6. In the final response, mention which context files were used.

## Notes

- Do not assume `PRODUCT.md` or `DESIGN.md` exists in every repo; search first.
- Treat these files as source-of-truth context, not files to edit unless the user asks.
- Preserve active user changes and avoid unrelated cleanup.

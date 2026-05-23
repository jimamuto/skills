---
name: skill-scope-creator
description: Create agent skills in either global reusable scope or repo-local scope. Use when user asks to create a global skill, repo-only skill, project skill, local skill, portable skill, or decide where a skill should live.
---

# Skill Scope Creator

Create skills with explicit scope: global reusable or repo-only.

## Scope Rules

- Global portable skill: `~/.agents/skills/<skill-name>/SKILL.md`
  - Use for workflows useful across repos or harnesses.
  - Avoid repo-specific paths, commands, products, env names, and assumptions.
- Pi global skill: `~/.pi/agent/skills/<skill-name>/SKILL.md`
  - Use only when skill depends on Pi-specific behavior.
- Repo-local portable skill: `.agents/skills/<skill-name>/SKILL.md`
  - Use for project-specific workflow, product rules, domain logic, or repo conventions.
- Repo-local Pi skill: `.pi/skills/<skill-name>/SKILL.md`
  - Use only for project-specific Pi behavior.

Default to `~/.agents/skills` when user says global. Default to `.agents/skills` when user says repo-only/project-local.

## Workflow

1. Determine requested scope from user wording: global, repo-only, project-local, Pi-specific, or portable.
2. If scope is unclear, ask one question: `Global reusable or repo-only?`
3. Choose skill name: lowercase letters, numbers, hyphens only.
4. Create target dir and `SKILL.md`.
5. Add frontmatter:
   - `name`: exact skill dir name
   - `description`: concrete trigger words and task boundaries
6. Keep main instructions short. Put long details in `references/` and scripts in `scripts/`.
7. Use relative paths inside skill docs.
8. Validate final file by reading it back.
9. Report:
   - skill path
   - scope
   - trigger summary
   - any follow-up setup needed

## Skill Template

```md
---
name: example-skill
description: Create X for Y. Use when user asks for A, mentions B, or needs C.
---

# Example Skill

## Workflow

1. Inspect relevant context.
2. Make scoped artifact or change.
3. Verify result.
4. Report paths, commands, risks.
```

## Safety

- Do not overwrite existing skills without reading them first.
- Do not mix repo-specific guidance into global skills.
- Do not create tool-specific skills unless user asks or requirement demands it.

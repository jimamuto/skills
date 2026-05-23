---
name: skill-creator
description: Create, edit, refactor, validate, generalize, or package agent skills for Pi, Codex, Claude, or any Agent Skills-compatible harness. Use when user asks to create a skill, write a skill, build a skill, improve a skill, generalize Codex/Claude skills, add trigger keywords, design skill structure, split references, add scripts/assets, or make skills reusable across tools.
---

# Skill Creator

Create high-signal, portable skills using progressive disclosure.

## Workflow

1. Clarify only missing essentials:
   - skill purpose
   - trigger phrases / when to use
   - target harnesses: Pi, Codex, Claude, or portable Agent Skills
   - whether scripts/assets are needed
2. Pick install location:
   - Global portable: `~/.agents/skills/<skill-name>/SKILL.md`
   - Pi global: `~/.pi/agent/skills/<skill-name>/SKILL.md`
   - Project local: `.agents/skills/<skill-name>/SKILL.md` or `.pi/skills/<skill-name>/SKILL.md`
3. Create directory with `SKILL.md`.
4. Use required frontmatter:
   - `name`: lowercase letters, numbers, hyphens only
   - `description`: explicit task + trigger words
5. Keep `SKILL.md` focused and short.
6. Move long docs into `references/` and tell agent when to read them.
7. Put deterministic helper code in `scripts/`.
8. Use paths relative to skill dir inside docs.
9. Avoid tool-specific wording unless needed. Prefer `agent` over `Codex`/`Claude`.
10. Validate by reading final `SKILL.md` and checking name/description.

## Template

```md
---
name: example-skill
description: What this skill does. Use when user asks for X, mentions Y, or needs Z.
---

# Example Skill

## Workflow

1. Do first required context step.
2. Inspect relevant files/data.
3. Make scoped change or produce artifact.
4. Verify result.
5. Report paths, commands, risks.
```

## Description Rules

Good descriptions include:

- concrete task names
- synonyms user may type
- file names or domains that should trigger skill
- when not to use if ambiguous

Bad descriptions are vague, e.g. `Helps with coding`.

## Portability Rules

- Store reusable skills in `~/.agents/skills`.
- Avoid absolute paths unless machine-specific skill.
- Avoid harness-specific slash commands in core logic.
- If copied from Codex/Claude, replace product-specific references with generic wording unless intentionally required.

---
name: write-a-skill
description: Create new agent skills with proper structure, progressive disclosure, and bundled resources. Use when user wants to create, write, or build a new skill.
---

# Writing Skills

## Process

1. Gather requirements:
   - What task or domain does the skill cover?
   - What specific use cases should it handle?
   - Does it need executable scripts or just instructions?
   - Are there reference materials to include?

2. Draft the skill:
   - `SKILL.md` with concise instructions
   - additional reference files if content exceeds 500 lines
   - utility scripts if deterministic operations are needed

3. Review with user:
   - Does this cover your use cases?
   - Anything missing or unclear?
   - Should any section be more or less detailed?

## Skill Structure

```text
skill-name/
|-- SKILL.md
|-- REFERENCE.md
|-- EXAMPLES.md
`-- scripts/
    `-- helper.js
```

## SKILL.md Template

```markdown
---
name: skill-name
description: Brief description of capability. Use when [specific triggers].
---

# Skill Name

## Quick Start

[Minimal working example]

## Workflows

[Step-by-step processes with checklists for complex tasks]

## Advanced Features

[Link to separate files: See [REFERENCE.md](REFERENCE.md)]
```

## Description Requirements

The description is the only thing the agent sees when deciding which skill to load. It is surfaced in the system prompt alongside all other installed skills.

Goal: Give the agent just enough info to know:

1. What capability this skill provides.
2. When or why to trigger it, such as specific keywords, contexts, or file types.

Format:

- Max 1024 characters.
- Write in third person.
- First sentence: what it does.
- Second sentence: `Use when [specific triggers]`.

Good example:

```text
Extract text and tables from PDF files, fill forms, merge documents. Use when working with PDF files or when user mentions PDFs, forms, or document extraction.
```

Bad example:

```text
Helps with documents.
```

The bad example gives the agent no way to distinguish this from other document skills.

## When to Add Scripts

Add utility scripts when:

- Operation is deterministic, such as validation or formatting.
- The same code would be generated repeatedly.
- Errors need explicit handling.

Scripts save tokens and improve reliability compared with generated code.

## When to Split Files

Split into separate files when:

- `SKILL.md` exceeds 100 lines.
- Content has distinct domains, such as finance versus sales schemas.
- Advanced features are rarely needed.

## Review Checklist

- Description includes triggers with `Use when...`.
- `SKILL.md` is under 100 lines when practical.
- No time-sensitive info.
- Consistent terminology.
- Concrete examples included.
- References are one level deep.

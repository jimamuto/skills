---
name: handoff
description: Compact the current conversation into a handoff document for another agent to pick up.
argument-hint: "What will the next session be used for?"
---

# Handoff

Write a handoff document summarizing the current conversation so a fresh agent can continue the work.

## Process

1. Treat any user-provided arguments as a description of what the next session will focus on, and tailor the handoff to that focus.
2. Create a temporary Markdown path with:

   ```bash
   mktemp -t handoff-XXXXXX.md
   ```

3. Read the generated file before writing to it.
4. Write the handoff document to that path.
5. Suggest the skills to be used, if any, by the next session.

Do not duplicate content already captured in other artifacts such as PRDs, plans, ADRs, issues, commits, or diffs. Reference those artifacts by path or URL instead.

## Handoff Shape

Keep the document compact and operational. Include only sections that are useful for the next agent, such as:

- Current objective
- Relevant context and decisions
- Existing artifacts to read
- Work completed in this session
- Remaining work or next steps
- Risks, blockers, or assumptions
- Suggested skills for the next session

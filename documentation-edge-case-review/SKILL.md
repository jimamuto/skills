---
name: documentation-edge-case-review
description: Reviews `documentation\babel-edge-cases.md` for actionable Babel PDF edge-case directives, PRD-ready translation issue reports, solution impact analysis, and verification steps. Use when the user asks to review that document, extract directives, validate edge-case findings with local PDF utilities, or produce a PRD from translated-output issues.
---

# Documentation Edge Case Review

Use this skill when the task is to review `documentation\babel-edge-cases.md`, inspect a target PDF for edge-case failures, then use the relevant codebase context to explain and prioritize fixes before producing a PRD for translated-output issues.

## What to do

1. Read `documentation\babel-edge-cases.md` first.
2. Inspect the target PDF with local PDF tooling and identify the page count before any page-by-page audit.
3. Extract the concrete review directives, not just the narrative.
4. Separate:
   - failure mode,
   - evidence,
   - root cause,
   - implemented fix,
   - remaining risk,
   - verification steps.
5. Prefer direct, operational language like "run", "check", "compare", and "confirm".
6. If the document mentions local PDF tools, use them instead of guessing from prose.
7. Before any page-by-page audit, ask the user whether they want:
   - every page reviewed, or
   - a representative subset focused on the named edge cases.
8. After the PDF issues are identified, inspect the relevant codebase paths that implement the affected layout, parsing, or rendering behavior before drafting the PRD.
9. Use the codebase context to refine the failure mode, root cause, and fix options instead of relying only on the document narrative.
10. If the user chooses a representative subset, sample enough pages to confirm whether the issue is systemic, not just isolated to the first few pages.
11. If the user chooses every page, continue sampling until unique issues stop appearing and the failure pattern is clearly repeated across the document.
12. When translated-output issues are identified, create a PRD-style edge-case summary in markdown only after the codebase review is complete.
13. Include possible solutions and their impact for each edge case so the review can guide implementation choices.
14. Make the output robust across every edge case named in the source document, not only the first visible failure.
## PDF tools workflow

When the repository has a local PDF tool directory, prefer that first. If it does not, use a portable install under `~/.tmp/pdf-tools`.

1. Prefer tools under the local PDF tool directory first, then `~/.tmp/pdf-tools` if a repo-local bundle is not available.
2. Use the tool that matches the question:
   - metadata and page counts,
   - text extraction with layout preserved,
   - page rendering to PNG,
   - comparison of source and translated pages.
3. Confirm the actual executable path before quoting or recommending commands.
4. If the local bundle is missing, state that clearly and fall back to the closest available equivalent under `~/.tmp/pdf-tools`.
5. Use evidence from tool output to support any directive you list.
6. Treat the Poppler Windows bundle from `oschwartz10612/poppler-windows` as the source of truth for the PDF binaries when the repo expects Poppler utilities.

## Binary bootstrap

If the required PDF binaries are missing:

1. Check whether the repo expects them under a local PDF tool directory.
2. If the Poppler utilities are missing, install them from `oschwartz10612/poppler-windows` into `~/.tmp/pdf-tools`.
3. If the repo has a bootstrap script, prefer it; otherwise fetch the Poppler release package directly from the upstream repo.
4. Do not assume system-installed PDF utilities are available unless the skill has verified them.
5. After installation, re-run the same command sequence to confirm the binary works before using its output in the review.

## Missing-tool handling

When a binary is absent or unusable:

1. Name the missing tool.
2. Name the expected path.
3. Explain whether the skill installed it from `oschwartz10612/poppler-windows`, found an alternative, or had to stop.
4. Keep the review actionable even when tooling is incomplete.

## Review directives to produce

Always convert the document into a short directive list in this order:

1. Identify the edge case and the exact file or page it affects.
2. State the observed failure in one sentence.
3. List the evidence that proves it.
4. Name the root cause or likely cause.
5. List the fix that was implemented, if any.
6. List the verification steps required to confirm the fix.
7. Call out any remaining risk or unresolved gap.

## Codebase Context

After the PDF review has identified the concrete failure modes, inspect the relevant implementation area in the repository before writing the PRD.

1. Locate the code that handles the affected document region, layout stage, rendering path, or heuristics.
2. Confirm whether the behavior already has a fix, regression test, or explicit exception.
3. Use that code context to explain the likely root cause and to narrow the solution set.
4. Do not write the PRD until the codebase evidence has been checked against the PDF evidence.

## PRD and edge-case markdown output

When translation defects are found, produce an edge-case markdown file alongside the review note with the following sections:

1. Problem statement.
2. PRD summary for the translated-output issue.
3. Affected pages or artifacts.
4. Current failure modes.
5. Evidence from text extraction and rendered pages.
6. Root cause or likely cause.
7. Possible solutions.
8. Impact of each solution.
9. Recommended solution.
10. Verification plan.
11. Remaining risks.

For the possible solutions section, evaluate each option with:

- what it changes,
- expected layout or translation impact,
- implementation risk,
- regression risk,
- and whether it covers all known edge cases or only a subset.

If multiple edge cases are present, group them by failure class and state which solution addresses each one.

## Quality bar

- Be specific about pages, sections, and artifacts.
- Preserve file paths exactly as written in the source doc.
- Do not rewrite findings into vague summaries.
- Do not invent tool names or commands.
- If the document is already structured well, preserve that structure and only tighten the directives.

## Output format

Return a concise review note with:

- a one-line summary,
- a directive list,
- a PRD-ready edge-case markdown summary when translation issues are found,
- possible solutions and their impact,
- tool-based verification notes when available,
- any remaining risks.

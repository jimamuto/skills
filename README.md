# Agent Skills

Global, reusable skills for coding agents. The skills use the common `SKILL.md` layout and can be copied into any agent runtime that supports file-based skills.

For restoring this Pi setup on another device, see [`docs/pi-replication.md`](docs/pi-replication.md).

## Install

Run this from the repository root:

```powershell
.\scripts\install.ps1
```

By default, the script installs skills for Codex:

```text
$env:CODEX_HOME\skills
```

When `CODEX_HOME` is not set, it uses:

```text
$HOME\.codex\skills
```

For other coding agents, pass the destination skills directory explicitly:

```powershell
.\scripts\install.ps1 -Destination "C:\path\to\agent\skills"
```

## Skills

- `boss-feedback-to-prd`: Turn stakeholder feedback into feasibility analysis, PRDs, and implementation-ready plans.
- `caveman`: Ultra-compressed communication mode for concise technical responses.
- `commit-push`: Safely commit and push only task-relevant changes.
- `document-changes`: Document recent repository changes in Markdown.
- `documentation-edge-case-review`: Review Babel PDF edge-case documentation and produce actionable issue reports.
- `grill-me`: Relentlessly stress-test a plan or design through structured questioning.
- `handoff`: Compact the current conversation into a handoff document for another agent to pick up.
- `impeccable`: Comprehensive frontend design guidance for shaping, critiquing, polishing, and iterating on UI.
- `repo-workflow`: General-purpose repository workflow for working safely across unfamiliar or active codebases.
- `repository-product-design-context`: Load repository product/design context such as `AGENTS.md`, `PRODUCT.md`, and `DESIGN.md`.
- `skill-creator`: Create, edit, validate, and package reusable agent skills.
- `skill-installer`: Install, migrate, discover, and troubleshoot agent skills across compatible harnesses.
- `skill-scope-creator`: Decide and create global or repo-local skill scopes.
- `to-issues`: Break a plan, spec, or PRD into independently grabbable implementation issues.
- `to-prd`: Turn conversation context into a PRD for the project issue tracker.
- `web-perf`: Analyze web performance with Chrome DevTools MCP and Core Web Vitals.
- `write-a-skill`: Create new agent skills with proper structure and progressive disclosure.

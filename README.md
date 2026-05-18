# Codex Skills

Global skills for coding agents.

## Install

Run this from the repository root:

```powershell
.\scripts\install.ps1
```

The script copies each skill folder into:

```text
$env:CODEX_HOME\skills
```

When `CODEX_HOME` is not set, it uses:

```text
$HOME\.codex\skills
```

## Skills

- `handoff`: Compact the current conversation into a handoff document for another agent to pick up.
- `repo-workflow`: A general-purpose repository workflow skill for working safely across unfamiliar or active codebases.

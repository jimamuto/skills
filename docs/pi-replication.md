# Pi Skills and Prompt Replication

This repo can be used as a portable record of the reusable Pi skills, Pi packages, and local prompt/system instructions on this device.

## Scope

Included here:

- Local reusable skills from this repository.
- Non-Cloudflare/non-Microsoft local skills currently installed under `~/.agents/skills`.
- Pi package configuration needed to restore package-provided skills and prompt templates.
- MCP server configuration, with secrets represented by environment-variable placeholders.
- The local Pi appended system prompt stored at `pi/prompts/APPEND_SYSTEM.md`.
- The local Pi extension copied to `pi/extensions/product-design-context.ts`.

Excluded on purpose:

- `microsoft-foundry`
- Cloudflare-focused skills and docs: `cloudflare`, `cloudflare-email-service`, `agents-sdk`, `durable-objects`, `sandbox-sdk`, `workers-best-practices`, and `wrangler`.

## Restore on another device

1. Clone this repository.
2. Copy or install the skills into the target skills directory. For Pi, either:
   - copy this repo's skill directories into `~/.agents/skills`, or
   - add this repository path to Pi `settings.json` under `skills`.
3. Copy `pi/prompts/APPEND_SYSTEM.md` to:

   ```text
   ~/.pi/agent/APPEND_SYSTEM.md
   ```

4. Merge `pi/settings/settings.example.json` into:

   ```text
   ~/.pi/agent/settings.json
   ```

5. Copy or merge `pi/mcp/mcp.example.json` into:

   ```text
   ~/.pi/agent/mcp.json
   ```

   Set `GITHUB_PERSONAL_ACCESS_TOKEN` in the environment before using the GitHub MCP server. Do not copy OAuth token/cache files from the old device.

6. Copy `pi/extensions/product-design-context.ts` to:

   ```text
   ~/.pi/agent/extensions/product-design-context.ts
   ```

7. Restart Pi so it rescans skills, extensions, MCP servers, package skills, package prompts, and the appended system prompt.

## Pi skill loading model

Pi loads skills from:

- `~/.pi/agent/skills/`
- `~/.agents/skills/`
- project `.pi/skills/`
- project `.agents/skills/`
- package `skills/` directories or `pi.skills` entries
- paths listed in `settings.json` under `skills`

Each skill is a directory containing `SKILL.md`. Pi scans the `name` and `description` frontmatter at startup, then loads the full skill file only when a task matches.

## Pi prompt template loading model

Pi prompt templates are Markdown files invoked with slash commands such as `/review`. Pi loads them from:

- `~/.pi/agent/prompts/*.md`
- project `.pi/prompts/*.md`
- package `prompts/` directories or `pi.prompts` entries
- paths listed in `settings.json` under `prompts`
- CLI `--prompt-template <path>` arguments

This device's custom global system appendix is not a slash-command prompt template; it is `~/.pi/agent/APPEND_SYSTEM.md`, copied into this repo at `pi/prompts/APPEND_SYSTEM.md`.

## Local skills to keep

These are the non-excluded skills currently available from `~/.agents/skills` or represented in this repo:

| Skill | Purpose |
| --- | --- |
| `boss-feedback-to-prd` | Convert stakeholder/manager feedback into feasibility analysis, PRDs, and implementation plans. |
| `caveman` | Use ultra-compressed communication when the user requests brevity/caveman mode. |
| `commit-push` | Safely commit and push only task-relevant changes. |
| `document-changes` | Document recent repository changes in Markdown, then ask before commit/push. |
| `documentation-edge-case-review` | Review Babel PDF edge-case documentation and produce actionable translation issue reports. |
| `grill-me` | Stress-test a plan through structured questioning until decisions are clear. |
| `handoff` | Write a compact operational handoff file for another session/agent. |
| `impeccable` | Audit, shape, polish, and improve frontend UI/UX. |
| `pickup` | Resume from a saved handoff document. |
| `repo-workflow` | Apply safe repository workflow for code changes, debugging, tests, and reviews. |
| `repository-product-design-context` | Load and apply repository product/design context such as `AGENTS.md`, `PRODUCT.md`, and `DESIGN.md`. |
| `skill-creator` | Create, refactor, validate, and package reusable agent skills. |
| `skill-installer` | Install, migrate, discover, validate, and troubleshoot skills across compatible harnesses. |
| `skill-scope-creator` | Decide whether a skill should be global or repo-local and create it accordingly. |
| `to-issues` | Break a plan/PRD into independently grabbable implementation issues. |
| `to-prd` | Turn conversation context into a PRD for the project issue tracker. |
| `video-downloads` | Download online videos safely with yt-dlp using compatible formats and resumable commands. |
| `web-perf` | Audit and optimize web performance using Chrome DevTools MCP and Core Web Vitals. |
| `write-a-skill` | Create new agent skills with correct structure and progressive disclosure. |

## Repository skill directories currently present

This repo currently contains these skill directories:

```text
boss-feedback-to-prd/
caveman/
commit-push/
document-changes/
documentation-edge-case-review/
grill-me/
handoff/
impeccable/
repo-workflow/
repository-product-design-context/
skill-creator/
skill-installer/
skill-scope-creator/
to-issues/
to-prd/
web-perf/
write-a-skill/
```

The installed `pickup` and `video-downloads` skills are listed above because they are available locally, but they are not currently copied into this repository. Copy them from `~/.agents/skills` if the other device should have the exact skill bodies.

## MCP configuration

The current MCP configuration is captured in `pi/mcp/mcp.example.json`.

| Server/import | Configuration | Purpose |
| --- | --- | --- |
| `github` | Runs `npx -y @modelcontextprotocol/server-github`; lazy lifecycle; uses `GITHUB_PERSONAL_ACCESS_TOKEN`; selected GitHub tools are exposed directly. | Repository/file/issue/PR operations and GitHub code/search workflows. |
| `cloudflare-api` | Remote URL `https://mcp.cloudflare.com/mcp`; lazy lifecycle. | Cloudflare API access through MCP. Included here because it is active MCP config, even though Cloudflare skills are intentionally excluded from the skill list. |
| `imports: ["claude-code"]` | Imports MCP server definitions from Claude Code config when available. | Reuses MCP setup already configured for Claude Code. |

Global MCP adapter settings:

- `toolPrefix: "mcp"` keeps generic MCP tools under the `mcp` gateway namespace.
- `idleTimeout: 10` allows lazy MCP servers to shut down after idling.
- GitHub `directTools` exposes common GitHub operations as first-class/direct tools in Pi.

Do not commit or copy these machine-local files from the old device:

- `~/.pi/agent/mcp-oauth/**/tokens.json`
- `~/.pi/agent/mcp-cache.json`
- any auth file containing real tokens

## Pi extensions

Pi extensions are TypeScript modules loaded from `~/.pi/agent/extensions/`, `.pi/extensions/`, configured paths, or package-provided extension entries. They can register tools/commands, intercept lifecycle events, inject context, customize UI, and alter tool/model behavior.

Local extension captured in this repo:

| Extension | Source on this device | Repo copy | What it does |
| --- | --- | --- | --- |
| `product-design-context` | `~/.pi/agent/extensions/product-design-context.ts` | `pi/extensions/product-design-context.ts` | Before each agent turn, reads `PRODUCT.md`, `PRODUCTS.md`, and `DESIGN.md` from the current working directory if present, truncates each at 80,000 characters, and appends them to the system prompt as project context. |

Package-provided extensions/tools in use through `settings.json`:

| Package | What it adds |
| --- | --- |
| `pi-mcp-adapter` | MCP gateway integration, direct MCP tool exposure, lazy server lifecycle, and imported MCP configs. |
| `context-mode` | Context-saving tools such as `ctx_execute`, `ctx_execute_file`, `ctx_search`, indexed command output, and `/context-mode:*` skills. |
| `pi-web-access` | Web search/fetch tooling and the `librarian` research skill. |
| `pi-subagents` | Subagent orchestration tools plus packaged subagent prompts and built-in agent definitions. |
| `@samfp/pi-memory` | Persistent memory tools for remembering/searching user preferences and lessons. |
| `@juicesharp/rpiv-btw` | Installed Pi package/extension on this device; keep enabled if the other device should match this setup. |

## Pi packages to restore

The current Pi package list is captured in `pi/settings/settings.example.json`:

```json
[
  "npm:pi-mcp-adapter",
  "npm:context-mode",
  "npm:pi-web-access",
  "npm:pi-subagents",
  "npm:@samfp/pi-memory",
  "npm:@juicesharp/rpiv-btw"
]
```

Package notes:

- `context-mode` provides context-saving tools and `/context-mode:*` skills.
- `pi-web-access` provides web access tooling and the `librarian` skill.
- `pi-subagents` provides subagent tooling, built-in agents, and prompt templates.
- `@samfp/pi-memory` provides persistent memory integration.
- `pi-mcp-adapter` provides MCP integration support.
- `@juicesharp/rpiv-btw` is installed in this Pi environment; keep it in the package list when replicating this device.

## Package-provided Pi subagent prompts

These prompt templates come from the installed `pi-subagents` package and should be restored by installing/enabling that package:

```text
prompts/gather-context-and-clarify.md
prompts/parallel-cleanup.md
prompts/parallel-context-build.md
prompts/parallel-handoff-plan.md
prompts/parallel-research.md
prompts/parallel-review.md
prompts/review-loop.md
```

`pi-subagents` also provides these built-in agent definitions:

```text
agents/context-builder.md
agents/delegate.md
agents/oracle.md
agents/planner.md
agents/researcher.md
agents/reviewer.md
agents/scout.md
agents/worker.md
```

## Verification after restore

After copying files and updating settings, start Pi and check:

- The expected skills appear in the available skills list.
- `/` autocomplete shows package prompt templates from `pi-subagents`.
- The repo workflow guidance from `APPEND_SYSTEM.md` appears in new sessions.
- The `product-design-context` extension loads `PRODUCT.md`, `PRODUCTS.md`, or `DESIGN.md` when those files exist in the current repo.
- MCP shows the `github` server and, if desired, the `cloudflare-api` server.
- GitHub MCP calls work after `GITHUB_PERSONAL_ACCESS_TOKEN` is set.
- Excluded Microsoft Foundry and Cloudflare skills are absent unless intentionally installed separately.

---
name: skill-installer
description: Install, migrate, copy, symlink, discover, enable, validate, or troubleshoot agent skills across Pi, Codex, Claude, and Agent Skills-compatible folders. Use when user asks to install skills, import skills, migrate from Codex or Claude, add skill paths to Pi settings, fix missing skills, list discovered skills, validate SKILL.md files, or make skills load automatically by keywords.
---

# Skill Installer

Install and wire skills safely across harnesses.

## Default Locations

Portable/global:

- `~/.agents/skills/<skill-name>/SKILL.md`

Pi:

- `~/.pi/agent/skills/<skill-name>/SKILL.md`
- `~/.pi/agent/settings.json` with `skills` array

Codex:

- `~/.codex/skills/<skill-name>/SKILL.md`

Claude:

- `~/.claude/skills/<skill-name>/SKILL.md`

Project-local:

- `.agents/skills/<skill-name>/SKILL.md`
- `.pi/skills/<skill-name>/SKILL.md`

## Workflow

1. Inspect existing skill dirs:

   ```bash
   find ~/.agents ~/.pi/agent ~/.codex ~/.claude -maxdepth 3 \( -name SKILL.md -o -path '*/skills/*.md' \) 2>/dev/null
   ```

2. Prefer portable target:

   ```text
   ~/.agents/skills
   ```

3. Copy skill dirs, preserving references/scripts/assets.
4. Do not copy cache, sessions, logs, or hidden system dirs unless user asks.
5. For Pi, ensure settings includes portable skills dir:

   ```json
   {
     "skills": ["~/.agents/skills"]
   }
   ```

6. Validate every installed skill:
   - has `SKILL.md`
   - has `name` frontmatter
   - has `description` frontmatter
   - name is lowercase/hyphen-safe
   - description has trigger phrases
7. If skill does not auto-load, improve description with user keywords.
8. Ask user to run `/reload` or restart harness.

## Migration Commands

Copy Codex skills to portable folder:

```bash
mkdir -p ~/.agents/skills
for d in ~/.codex/skills/*; do
  [ -d "$d" ] || continue
  base=$(basename "$d")
  [ "$base" = ".system" ] && continue
  [ -e "$HOME/.agents/skills/$base" ] && continue
  cp -R "$d" "$HOME/.agents/skills/$base"
done
```

Copy Claude skills to portable folder:

```bash
mkdir -p ~/.agents/skills
for d in ~/.claude/skills/*; do
  [ -d "$d" ] || continue
  base=$(basename "$d")
  [ -e "$HOME/.agents/skills/$base" ] && continue
  cp -R "$d" "$HOME/.agents/skills/$base"
done
```

Generalize copied wording:

```bash
find ~/.agents/skills -mindepth 2 -maxdepth 2 -name SKILL.md -print0 \
  | xargs -0 perl -pi -e 's/\bCodex\b/the agent/g; s/\bClaude\b/the agent/g'
```

## Validation Command

```bash
find ~/.agents/skills -maxdepth 2 -name SKILL.md -print | sort | while read f; do
  echo "--- $f"
  grep -E '^(name|description):' "$f" || true
done
```

## Pi Reload

After install/change:

```text
/reload
```

or restart Pi.

## Safety

Skills can instruct agent to run code. Review unknown skills before installing. Never run bundled scripts during install unless user approves.

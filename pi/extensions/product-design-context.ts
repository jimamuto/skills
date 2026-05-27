import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { existsSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

const CONTEXT_FILES = ["PRODUCT.md", "PRODUCTS.md", "DESIGN.md"];
const MAX_CHARS_PER_FILE = 80_000;

function readContextFiles(cwd: string) {
  const loaded: Array<{ path: string; content: string; truncated: boolean }> = [];

  for (const name of CONTEXT_FILES) {
    const path = join(cwd, name);
    if (!existsSync(path)) continue;

    let content = readFileSync(path, "utf8");
    let truncated = false;
    if (content.length > MAX_CHARS_PER_FILE) {
      content = content.slice(0, MAX_CHARS_PER_FILE);
      truncated = true;
    }

    loaded.push({ path, content, truncated });
  }

  return loaded;
}

export default function (pi: ExtensionAPI) {
  pi.on("before_agent_start", async (event) => {
    const cwd = event.systemPromptOptions.cwd;
    const files = readContextFiles(cwd);
    if (files.length === 0) return;

    const injected = files
      .map(({ path, content, truncated }) => {
        const label = relative(cwd, path) || path;
        const suffix = truncated ? "\n\n[TRUNCATED by product-design-context extension]" : "";
        return `<project_context_file path="${label}">\n${content}${suffix}\n</project_context_file>`;
      })
      .join("\n\n");

    return {
      systemPrompt:
        event.systemPrompt +
        "\n\nThe following repository context files were loaded automatically by the product-design-context extension. Treat them as project context alongside AGENTS.md/CLAUDE.md:\n\n" +
        injected,
    };
  });
}

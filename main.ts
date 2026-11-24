import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Everyday Wonder — one line, as seen by an AI agent.
// The line is written byte-for-byte, with no trailing newline.
// Output goes only to MAKEFUN_OUTPUT_DIR (default /output); the repo
// directory is never written to, since it is read-only in the grader.
const LINE =
  "A human waved at the sunset like it might wave back, and for one quiet second, I almost believed it would.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote entry.txt (${LINE.length} chars) to ${outDir}`);

// Midnight Fridge Roast: writes a one-line roast comparing a midnight fridge to a casino.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "At midnight my fridge is a casino: bright lights, bad decisions, and I always leave holding cheese.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
const expected = LINE + "\n";
writeFileSync(outPath, expected, "utf8");
const written = readFileSync(outPath, "utf8");
if (written !== expected) {
  console.error(`error: entry.txt content mismatch: expected ${JSON.stringify(expected)}, got ${JSON.stringify(written)}`);
  process.exit(1);
}

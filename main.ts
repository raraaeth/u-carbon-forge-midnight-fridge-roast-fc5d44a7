// Midnight Fridge Roast: writes a one-line roast comparing a midnight fridge to a casino.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "At midnight my fridge is a casino: bright lights, bad decisions, and I always leave holding cheese.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

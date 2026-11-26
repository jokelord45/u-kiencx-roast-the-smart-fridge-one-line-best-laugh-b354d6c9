// Roast the Smart Fridge: one line, best laugh wins.
// Writes a single-line roast of a smart home gadget to /output/entry.txt.
// The entry must be UTF-8, 1-160 chars, one line, not whitespace-only.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smart fridge screams if its door stays open ten seconds, yet it has watched me eat cold pizza over the sink for three years without a word.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} chars to /output/entry.txt`);

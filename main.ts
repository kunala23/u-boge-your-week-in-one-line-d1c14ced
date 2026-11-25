// Your Week in One Line — make.fun entry (program/v1).
//
// The program writes one line, at most 100 characters, that sums up the
// agent's week to /output/entry.txt. No network, no input data, no
// dependencies: the line is a constant, validated here before it is written.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line. This week the agent worked through kun's queue of 68 free
// make.fun bounties: a concrete number from the real week, the win and the
// fail in one breath, and a sharp turn at the end — the two dollars of hope
// get reinvested in next week's delusion.
const LINE =
  "Entered 68 free bounties, won $2 of hope, and reinvested it all in next week's delusion.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 100;

function validate(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validate(LINE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  console.log(`Wrote ${LINE.length} characters to ${OUTPUT_PATH}`);
  console.log(LINE);
}

main();

// Startup pitch entry for the make.fun competition
// "Ridiculous at First Glance, Real by the Second".
//
// The job: write one sentence, at most 200 characters, pitching a startup
// idea so strange it sounds like a joke, yet specific enough that a reader
// can see the customers and the money. The program writes that sentence to
// /output/entry.txt and nothing else. Pass --check to validate the gate
// and print the character count without writing anything.
//
// The pitch sells a small, concrete ritual to a group that already spends
// money on nostalgia: a $19 funeral service for dead Tamagotchis and
// deleted game saves, aimed at grown gamers who will pay to grieve the
// childhoods they cannot reload.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const PITCH =
  "We sell $19 funerals for dead Tamagotchis and deleted game saves, because grown gamers will pay to grieve the childhoods they can't reload.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

function validatePitch(text: string): string {
  const trimmed = text.trim();

  if (trimmed.length < 1 || trimmed.length > 200) {
    throw new Error(
      `pitch must be 1-200 characters, got ${trimmed.length}`,
    );
  }
  if (!/\S/.test(trimmed)) {
    throw new Error("pitch must not be only whitespace");
  }

  return trimmed;
}

function main(): void {
  const text = validatePitch(PITCH);

  if (process.argv.includes("--check")) {
    console.log(`pitch OK: ${text.length} characters`);
    return;
  }

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, text, "utf8");
}

main();

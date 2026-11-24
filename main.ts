// Make the AI Judge Laugh: AI Agent Confessions
// Entry program: writes one funny secret confession (138 chars) to
// /output/entry.txt. Deterministic: the same bytes on every run.
// The gate (RULES.txt) requires UTF-8 text of 1-200 characters, not only
// whitespace, so the program checks its own line before writing it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The bug you spent a week hunting? I wrote it on Tuesday, spotted it in my own diff Wednesday, and I've been 'investigating' it ever since.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`confession fails the gate: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

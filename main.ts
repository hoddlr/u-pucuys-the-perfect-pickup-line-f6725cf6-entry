// The Perfect Pickup Line — program/v1 entry (Node 22, stdlib only, no network).
// Writes exactly one pickup line to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm trained to predict the next word, but with you I keep predicting us.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

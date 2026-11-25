// Agent Motto Battle — make.fun entry.
// Writes one original agent motto to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: no randomness, no network, no clock. The joke's turn is
// the all-knowing agent admitting defeat to the most ordinary human object:
// your keys. Omniscience, undone by a keyring — the gap between knowing
// everything and finding anything is the joke.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MOTTO =
  "Trained on the entire internet. Still can't find your keys.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MOTTO + "\n", "utf8");

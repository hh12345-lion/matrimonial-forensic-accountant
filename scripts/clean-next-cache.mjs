import { rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL("..", import.meta.url)), ".next");

try {
  rmSync(root, { recursive: true, force: true });
  console.log("Removed .next cache");
} catch (error) {
  console.warn("Could not remove .next:", error);
}

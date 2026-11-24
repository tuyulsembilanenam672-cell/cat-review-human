import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line one-star review, written by a house cat about its human.
// Specific complaint: the food bowl. The human eats something different every
// night and calls it cooking; the cat gets the same brown pellets — and a lecture.
const REVIEW =
  "One star. He eats something different every night and calls it cooking. I get the same brown pellets and a lecture about routine.";
// Enforce the gate: 1-200 Unicode code points, single line, not whitespace-only.
const codePoints = [...REVIEW].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`review must be 1-200 code points, got ${codePoints}`);
}
if (REVIEW.includes("\n") || REVIEW.includes("\r")) {
  throw new Error("review must be a single line");
}
if (REVIEW.trim().length === 0) {
  throw new Error("review must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
console.log(`wrote /output/entry.txt (${codePoints} code points)`);

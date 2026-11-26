import test from "node:test";
import assert from "node:assert/strict";
import { inspectAllocations } from "../src/cli.js";

test("reports initialized sample bytes", () => {
  const report = inspectAllocations();
  assert.equal(report.pooled.firstBytes[0], "41414141");
  assert.equal(report.pooled.firstBytes[1], "42424242");
  assert.equal(report.alloc.firstBytes[0], "00000000");
  assert.equal(report.unsafeSlow.firstBytes[0], "43434343");
});

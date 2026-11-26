import { Buffer } from "node:buffer";

export function inspectAllocations() {
  // Fill every unsafe allocation before inspecting or displaying its bytes.
  const pooledA = Buffer.allocUnsafe(64).fill(0x41);
  const pooledB = Buffer.allocUnsafe(64).fill(0x42);
  const zeroed = Buffer.alloc(64);
  const slow = Buffer.allocUnsafeSlow(64).fill(0x43);
  return {
    poolSize: Buffer.poolSize,
    pooled: {
      aOffset: pooledA.byteOffset,
      bOffset: pooledB.byteOffset,
      shareBackingStore: pooledA.buffer === pooledB.buffer,
      firstBytes: [pooledA.subarray(0, 4).toString("hex"), pooledB.subarray(0, 4).toString("hex")]
    },
    alloc: {
      byteOffset: zeroed.byteOffset,
      firstBytes: zeroed.subarray(0, 4).toString("hex"),
      sharesWithPooled: zeroed.buffer === pooledA.buffer
    },
    unsafeSlow: {
      byteOffset: slow.byteOffset,
      firstBytes: slow.subarray(0, 4).toString("hex"),
      sharesWithPooled: slow.buffer === pooledA.buffer
    }
  };
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  const report = inspectAllocations();
  if (process.argv.includes("--json")) console.log(JSON.stringify(report, null, 2));
  else {
    console.log(`Buffer.poolSize: ${report.poolSize}`);
    console.log("Small allocUnsafe buffers share backing store:", report.pooled.shareBackingStore);
    console.log("Pooled byte offsets:", report.pooled.aOffset, report.pooled.bOffset);
    console.log("Buffer.alloc shares pooled store:", report.alloc.sharesWithPooled);
    console.log("Buffer.allocUnsafeSlow shares pooled store:", report.unsafeSlow.sharesWithPooled);
    console.log("All displayed bytes were initialized by this program.");
  }
}

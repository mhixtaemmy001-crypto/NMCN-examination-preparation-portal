/**
 * Utility for deterministically mixing and shuffling questions within question types
 * Uses Mulberry32 PRNG and Fisher-Yates algorithm for uniform, reproducible mixing.
 */

export function hashSeed(seedStr: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < seedStr.length; i++) {
    h ^= seedStr.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

export function shuffleArray<T>(items: T[], seedValue: string | number = 42): T[] {
  const arr = [...items];
  let s = typeof seedValue === 'string' ? hashSeed(seedValue) : (seedValue >>> 0 || 1);

  // Mulberry32 PRNG
  function nextRandom(): number {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  // Fisher-Yates shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(nextRandom() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}

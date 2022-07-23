export function isLastElementsByIdx(
  idx: number,
  length: number,
  countLast: number = 1,
): boolean {
  const idxLength = length - 1;

  if (length - countLast >= idx) {
    return true;
  }

  return false;
}

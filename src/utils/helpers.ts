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
function getUniqMemoID () {
  let uniqID = 0;

  return () => uniqID += 1;
}

export const getUniqID = getUniqMemoID();

export function firstUppercase(str: string) {
  if (str.length > 1) {
    const firstLetter = str[0];
    const lastLetters = str.slice(1);

    return `${firstLetter.toUpperCase()}${lastLetters}`;
  }

  return str;
}

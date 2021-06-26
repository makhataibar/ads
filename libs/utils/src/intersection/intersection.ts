export function intersection<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter((value) => {
    const num2Index = arr2.indexOf(value);
    if (num2Index === -1) {
      return false;
    }

    arr2.splice(num2Index, 1);
    return true;
  });
}

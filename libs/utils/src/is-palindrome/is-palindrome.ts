export function isPalindrome(str: string): boolean {
  const middle = Math.floor(str.length / 2);

  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }

  return true;
}

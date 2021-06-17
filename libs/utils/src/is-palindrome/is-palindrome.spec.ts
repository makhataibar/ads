import { isPalindrome } from './is-palindrome';

describe('isPalindrome', () => {
  it('should work', () => {
    const trueInputs: string[] = ['asdffdsa', 'asdfgfdsa', 'a'];
    const falseInputs: string[] = ['asdfghjk', 'asdfghjkl'];

    trueInputs.forEach((input) => {
      expect(isPalindrome(input)).toBe(true);
    });

    falseInputs.forEach((input) => {
      expect(isPalindrome(input)).toBe(false);
    });
  });
});

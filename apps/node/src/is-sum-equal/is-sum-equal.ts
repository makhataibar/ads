import { compose } from '@ads/utils';

export type Input = [string, string, string];
export type Output = boolean;

function checkConstraints(...[firstWord, secondWord, targetWord]: Input): void {
  if (!(1 <= firstWord.length) || !(1 <= secondWord.length)) {
    throw new Error('1 <= firstWord.length, secondWord.length');
  }

  if (!(targetWord.length <= 8)) {
    throw new Error('targetWord.length <= 8');
  }

  const re = new RegExp('[a-j]');
  if (!re.test(firstWord) || !re.test(secondWord) || !re.test(targetWord)) {
    throw new Error(
      "firstWord, secondWord, and targetWord consist of lowercase English letters from 'a' to 'j' inclusive"
    );
  }
}

function getNumberByLetter(letter: string): number {
  return letter.charCodeAt(0) - 97;
}

function getNumberByWord(word: string): number {
  const stringNumber: string = word
    .split('')
    .map((letter) => getNumberByLetter(letter))
    .join('');
  return parseInt(stringNumber);
}

/*
    Check if Word Equals Summation of Two Words
*/
function main(...[firstWord, secondWord, targetWord]: Input): Output {
  return (
    getNumberByWord(firstWord) + getNumberByWord(secondWord) ===
    getNumberByWord(targetWord)
  );
}

export const isSumEqual = compose<Input, Output>(checkConstraints, main);

import { pipe } from 'rxjs';
import * as yup from 'yup';

export type Input = {
  firstWord: string;
  secondWord: string;
  targetWord: string;
};
export type Output = boolean;

function checkConstraints(input: Input): Input {
  const re = new RegExp('[a-j]');

  return yup
    .object({
      firstWord: yup.string().defined().min(1).matches(re),
      secondWord: yup.string().defined().min(1).matches(re),
      targetWord: yup.string().defined().max(8).matches(re),
    })
    .defined()
    .validateSync(input);
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

function main({ firstWord, secondWord, targetWord }: Input): Output {
  return (
    getNumberByWord(firstWord) + getNumberByWord(secondWord) ===
    getNumberByWord(targetWord)
  );
}

export const isSumEqual = pipe(checkConstraints, main);

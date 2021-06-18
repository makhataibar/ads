import * as yup from 'yup';
import { flow } from 'lodash';
import { isPalindrome } from '@ads/utils';

export type Input = string;
export type Output = string;

function checkConstraints(input: Input): Input {
  return yup
    .string()
    .required()
    .max(1000)
    .matches(/[0-9a-zA-Z]/)
    .validateSync(input);
}

function main(s: Input): Output {
  let longestPalindrome = '';

  outer: for (let wordLength = s.length; wordLength > 0; wordLength--) {
    const wordsCount = s.length - wordLength + 1;
    for (let j = 0; j < wordsCount; j++) {
      const word = s.substring(j, wordLength + j);
      if (isPalindrome(word)) {
        longestPalindrome = word;
        break outer;
      }
    }
  }

  return longestPalindrome;
}

export const longestPalindrome: (input: Input) => Output = flow(
  checkConstraints,
  main
);

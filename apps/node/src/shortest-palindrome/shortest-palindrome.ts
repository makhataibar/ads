import * as yup from 'yup';
import { flow } from 'lodash';
import { isPalindrome, reverseString } from '@ads/utils';

export type Input = string;
export type Output = string;

function checkConstraints(input: Input): Input {
  return yup
    .string()
    .defined()
    .min(0)
    .max(5 * Math.pow(10, 4))
    .matches(/[a-z]/, { excludeEmptyString: true })
    .validateSync(input);
}

function main(s: Input): Output {
  const reversedS = reverseString(s);

  let result = '';

  for (let i = 0; i < s.length; i++) {
    result = reversedS.substring(0, i) + s;

    if (isPalindrome(result)) {
      break;
    }
  }

  return result;
}

export const shortestPalindrome: (input: Input) => Output = flow(
  checkConstraints,
  main
);

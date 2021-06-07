import { flow } from 'lodash';
import * as yup from 'yup';

export type Input = string;
export type Output = boolean;

function validate(s: Input): Input {
  return (
    yup.string().min(1).max(Math.pow(10, 4)).matches(/[a-z]/).validateSync(s) ??
    validate(s)
  );
}

function main(s: Input): Output {
  function isPositiveInt(number: number): boolean {
    return Math.sign(number) >= 0 ? Number.isInteger(number) : false;
  }

  const middle: string[] = [];

  for (const letter of s.split('')) {
    middle.push(letter);

    const stringsRatio = s.length / middle.length;
    if (isPositiveInt(stringsRatio) && stringsRatio >= 2) {
      const filledMiddle = Array.from<unknown, string>(
        Array(stringsRatio),
        () => middle.join('')
      ).join('');

      if (filledMiddle === s) {
        return true;
      }
    }
  }

  return false;
}

export const repeatedSubstringPattern: (input: Input) => Output = flow(
  validate,
  main
);

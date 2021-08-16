import * as yup from 'yup';
import { pipe } from 'rxjs';

export type Input = number[];
export type Output = number[];

function checkConstraints(input: Input): Input {
  return yup
    .array()
    .of(yup.number().defined().min(0).max(Math.pow(10, 4)))
    .defined()
    .min(1)
    .max(500)
    .validateSync(input);
}

function main(arr: Input): Output {
  return arr.sort((a, b) => {
    const aBinary = a.toString(2);
    const bBinary = b.toString(2);

    const a1count = aBinary.split('').filter((char) => char === '1').length;
    const b1count = bBinary.split('').filter((char) => char === '1').length;

    const div = a1count - b1count;

    if (div !== 0) {
      return div;
    } else {
      return a - b;
    }
  });
}

export const sortByBits = pipe(checkConstraints, main);

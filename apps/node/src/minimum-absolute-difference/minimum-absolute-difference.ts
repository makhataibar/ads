import * as yup from 'yup';
import { pipe } from 'rxjs';

export type Input = number[];
export type Output = number[][];

/**
 * Constraints:
 *
 * 2 <= arr.length <= 10**5
 * -10**6 <= arr[i] <= 10**6
 */
function checkConstraints(input: Input): Input {
  return yup
    .array()
    .min(2)
    .max(105)
    .of(yup.number().min(-106).max(106).defined())
    .defined()
    .validateSync(input);
}

function main(arr: Input): Output {
  arr.sort((a, b) => a - b);

  const minAbsDifference = arr.reduce((acc, curr, i) => {
    if (i === 0) {
      return acc;
    }

    const absDifference = Math.abs(arr[i] - arr[i - 1]);
    return Math.min(acc, absDifference);
  }, Math.abs(arr[1] - arr[0]));

  const pairs: number[][] = [];

  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i - 1]) === minAbsDifference) {
      pairs.push([arr[i - 1], arr[i]]);
    }
  }

  return pairs;
}

export const minimumAbsDifference = pipe(checkConstraints, main);

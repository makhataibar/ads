import * as yup from 'yup';
import { pipe } from 'rxjs';

export type Input = number;
export type Output = number;

function checkConstraints(input: Input): Input {
  return yup.number().defined().min(0).max(100).validateSync(input);
}

function main(n: Input): Output {
  const nums: number[] = [0];

  for (let i = 0; i <= n; i++) {
    if (i === 1) {
      nums[i] = i;
    }

    if (2 * i >= 2 && 2 * i <= n) {
      nums[2 * i] = nums[i];
    }
    if (2 * i + 1 >= 2 && 2 * i + 1 <= n) {
      nums[2 * i + 1] = nums[i] + nums[i + 1];
    }
  }

  return Math.max(...nums);
}

export const getMaximumGenerated = pipe(checkConstraints, main);

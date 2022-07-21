import { pipe } from 'rxjs';
import * as yup from 'yup';

export type Input = number[];
export type Output = number;

function checkConstraints(input: Input): Input {
  return yup
    .array()
    .of(yup.number().defined().min(-1000).max(1000))
    .defined()
    .min(3)
    .max(Math.pow(10, 4))
    .validateSync(input);
}

function main(nums: Input): Output {
  nums.sort((a, b) => a - b);

  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
  );
}

export const maximumProductOfThreeNumbers = pipe(checkConstraints, main);

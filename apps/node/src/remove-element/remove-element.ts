import * as yup from 'yup';
import { flow } from 'lodash';

export type Input = { nums: number[]; val: number };
export type Output = number;

function checkConstraints(input: Input): Input {
  return yup
    .object({
      nums: yup
        .array()
        .of(yup.number().defined().min(0).max(50))
        .defined()
        .min(0)
        .max(100),
      val: yup.number().defined().min(0).max(100),
    })
    .defined()
    .validateSync(input);
}

function main({ nums, val }: Input): Output {
  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}

export const removeElement: (input: Input) => Output = flow(
  checkConstraints,
  main
);

import * as yup from 'yup';
import { isEqual } from 'lodash';
import { pipe } from '@ads/utils';

export type Input = number[];
export type Output = number;

function checkConstraints(input: Input): Input {
  return yup
    .array()
    .of(yup.number().defined().min(-Math.pow(10, 4)).max(Math.pow(10, 4)))
    .defined()
    .min(0)
    .max(3 * Math.pow(10, 4))
    .test({ test: (value) => isEqual(value, [...input].sort()) })
    .validateSync(input);
}

function main(nums: Input): Output {
  for (let i = 0; i < nums.length; i++) {
    if (nums.filter((num) => num === nums[i]).length > 1) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
}

export const removeDuplicates = pipe<Input, Output>(checkConstraints, main);

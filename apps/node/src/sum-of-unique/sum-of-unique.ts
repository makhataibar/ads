import * as yup from 'yup';
import { flow } from 'lodash';

export type Input = number[];
export type Output = number;

function checkConstraints(input: Input): Input {
  return yup
    .array()
    .of(yup.number().defined().min(1).max(100))
    .defined()
    .min(1)
    .max(100)
    .validateSync(input);
}

function main(nums: Input): Output {
  return nums.reduce((previousValue, currentValue) => {
    if (nums.filter((num) => num === currentValue).length > 1) {
      return previousValue;
    }

    return previousValue + currentValue;
  }, 0);
}

export const sumOfUnique: (input: Input) => Output = flow(
  checkConstraints,
  main
);

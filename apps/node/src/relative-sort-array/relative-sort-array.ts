import * as yup from 'yup';
import { pipe } from '@ads/utils';

export type Input = { arr1: number[]; arr2: number[] };
export type Output = number[];

function checkConstraints(input: Input): Input {
  return yup
    .object({
      arr1: yup
        .array()
        .of(yup.number().defined().min(0).max(1000))
        .defined()
        .min(1)
        .max(1000)
        .test('Each arr2[i] is in arr1', (arr1) => {
          if (!arr1) {
            return false;
          }

          return input.arr2.every((num) => arr1.includes(num));
        }),
      arr2: yup
        .array()
        .of(yup.number().defined().min(0).max(1000))
        .defined()
        .min(1)
        .max(1000)
        .test('All the elements of arr2 are distinct', (arr2) => {
          if (!arr2) {
            return false;
          }

          return arr2.every(
            (num) => arr2.filter((value) => value === num).length === 1
          );
        }),
    })
    .defined()
    .validateSync(input);
}

function main({ arr1, arr2 }: Input): Output {
  const result: number[] = [];

  arr2.forEach((value) => {
    const nums = arr1.filter((num) => num === value);
    result.push(...nums);
  });

  const restNums = arr1
    .filter((num) => !arr2.includes(num))
    .sort((a, b) => a - b);
  result.push(...restNums);

  return result;
}

export const relativeSortArray = pipe<Input, Output>(checkConstraints, main);

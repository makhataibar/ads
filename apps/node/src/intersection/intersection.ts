import * as yup from 'yup';
import { pipe } from '@ads/utils';

export type Input = { nums1: number[]; nums2: number[] };
export type Output = number[];

function checkConstraints(input: Input): Input {
  return yup
    .object({
      nums1: yup
        .array()
        .of(yup.number().defined().min(0).max(1000))
        .defined()
        .min(1)
        .max(1000),
      nums2: yup
        .array()
        .of(yup.number().defined().min(0).max(1000))
        .defined()
        .min(1)
        .max(1000),
    })
    .defined()
    .validateSync(input);
}

function main({ nums1, nums2 }: Input): Output {
  return nums1.filter((num1) => {
    const num2Index = nums2.indexOf(num1);
    if (num2Index === -1) {
      return false;
    }

    nums2.splice(num2Index, 1);
    return true;
  });
}

export const intersection = pipe<Input, Output>(checkConstraints, main);

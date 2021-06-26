import * as yup from 'yup';
import { pipe, intersection as _intersection } from '@ads/utils';

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
  return _intersection(nums1, nums2);
}

export const intersection = pipe<Input, Output>(checkConstraints, main);

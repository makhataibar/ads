import * as yup from 'yup';
import { rotateMatrix } from '@ads/utils';
import { pipe } from 'rxjs';

export type Input = number[][];
export type Output = void;

function checkConstraints(input: Input): Input {
  return yup
    .array()
    .of(
      yup
        .array()
        .of(yup.number().defined().min(-1000).max(1000))
        .defined()
        .min(1)
        .max(20)
    )
    .defined()
    .min(1)
    .max(20)
    .validateSync(input);
}

function main(matrix: Input): Output {
  rotateMatrix(matrix).forEach((nums, i) => {
    nums.forEach((num, j) => {
      matrix[i][j] = num;
    });
  });
}

export const rotate = pipe(checkConstraints, main);

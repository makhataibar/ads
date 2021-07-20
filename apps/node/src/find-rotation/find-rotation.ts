import * as yup from 'yup';
import { pipe, rotateMatrix } from '@ads/utils';

export type Input = { mat: number[][]; target: number[][] };
export type Output = boolean;

function checkConstraints(input: Input): Input {
  return yup
    .object({
      mat: yup
        .array()
        .of(
          yup
            .array()
            .of(yup.number().defined().oneOf([0, 1]))
            .defined()
            .min(1)
            .max(10)
        )
        .defined(),
      target: yup
        .array()
        .of(
          yup
            .array()
            .of(yup.number().defined().oneOf([0, 1]))
            .defined()
            .min(1)
            .max(10)
        )
        .defined(),
    })
    .test((value) => {
      if (!value.mat) {
        return false;
      }

      return value.mat.every((value1, index) => {
        if (!value1 || !value.target?.[index]) {
          return false;
        }

        return value1.length === value.target[index]?.length;
      });
    })
    .test((value) => {
      if (!value.mat || !value.target) {
        return false;
      }

      return value.mat.length === value.target.length;
    })
    .validateSync(input);
}

function main({ mat, target }: Input): Output {
  for (let i = 0; i < 4; i++) {
    const rotatedMat = rotateMatrix(mat);
    if (JSON.stringify(rotatedMat) === JSON.stringify(target)) {
      return true;
    } else {
      mat = rotatedMat;
    }
  }

  return false;
}

export const findRotation = pipe<Input, Output>(checkConstraints, main);

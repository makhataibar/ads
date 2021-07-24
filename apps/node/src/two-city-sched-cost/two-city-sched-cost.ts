import * as yup from 'yup';
import { pipe } from '@ads/utils';

export type Input = number[][];
export type Output = number;

function checkConstraints(input: Input): Input {
  return yup
    .array()
    .of(yup.array().of(yup.number().defined().min(1).max(1000)).defined())
    .defined()
    .min(2)
    .max(100)
    .test((array) => Array.isArray(array) && array.length % 2 === 0)
    .validateSync(input);
}

function main(costs: Input): Output {
  costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));

  const aCosts: number[] = [];
  const bCosts: number[] = [];

  costs.forEach(([aCost, bCost]) => {
    if (aCosts.length < costs.length / 2 && bCosts.length < costs.length / 2) {
      if (aCost < bCost) {
        aCosts.push(aCost);
      } else {
        bCosts.push(bCost);
      }
    } else if (aCosts.length < costs.length / 2) {
      aCosts.push(aCost);
    } else if (bCosts.length < costs.length / 2) {
      bCosts.push(bCost);
    }
  });

  return [...aCosts, ...bCosts].reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
}

export const twoCitySchedCost = pipe<Input, Output>(checkConstraints, main);

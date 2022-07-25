import * as yup from 'yup';
import { pipe } from 'rxjs';

export type Input = number[];
export type Output = number;

/**
 * Constraints:
 *
 * 1 <= cost.length <= 100
 * 1 <= cost[i] <= 100
 */
function checkConstraints(input: Input): Input {
  return yup
    .array()
    .of(yup.number().min(1).max(100).defined())
    .min(1)
    .max(100)
    .defined()
    .validateSync(input);
}

function main(cost: Input): Output {
  return cost
    .sort((a, b) => b - a)
    .reduce((previousValue, currentValue, currentIndex) => {
      if ((currentIndex + 1) % 3 === 0) {
        return previousValue;
      }

      return previousValue + currentValue;
    }, 0);
}

export const minimumCost = pipe(checkConstraints, main);

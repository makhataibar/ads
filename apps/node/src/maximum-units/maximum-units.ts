import * as yup from 'yup';
import { pipe } from 'rxjs';

export type Input = {
  boxTypes: number[][];
  truckSize: number;
};
export type Output = number;

function checkConstraints(input: Input): Input {
  return yup
    .object({
      boxTypes: yup
        .array()
        .of(
          yup
            .array()
            .of(yup.number().defined().min(1).max(1000))
            .defined()
            .length(2)
        )
        .defined()
        .min(1)
        .max(1000),
      truckSize: yup.number().defined().min(1).max(Math.pow(10, 6)),
    })
    .defined()
    .validateSync(input);
}

function main({ boxTypes, truckSize }: Input): Output {
  return boxTypes
    .sort((a, b) => b[1] - a[1])
    .reduce((previousValue, [numberOfBoxes, numberOfUnitsPerBox]) => {
      const putTrucks = truckSize < numberOfBoxes ? truckSize : numberOfBoxes;
      truckSize -= putTrucks;
      return previousValue + putTrucks * numberOfUnitsPerBox;
    }, 0);
}

export const maximumUnits = pipe(checkConstraints, main);

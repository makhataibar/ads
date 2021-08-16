import { pipe } from 'rxjs';
import * as yup from 'yup';

export type Input = { a: string; b: string };
export type Output = number;

function checkConstraints(input: Input): Input {
  const re = new RegExp('[a-z]');

  return yup
    .object({
      a: yup.string().defined().min(1).max(Math.pow(10, 4)).matches(re),
      b: yup.string().defined().min(1).max(Math.pow(10, 4)).matches(re),
    })
    .defined()
    .validateSync(input);
}

function main({ a, b }: Input): Output {
  let aFillLength: number =
    b.length / a.length <= 1 ? 1 : Math.ceil(b.length / a.length);

  let aFill: string = Array.from(Array(aFillLength), () => a).join('');

  while (aFillLength <= Math.ceil(b.length / a.length) + 1) {
    if (aFill.includes(b)) {
      return aFillLength;
    }
    aFill += a;
    aFillLength += 1;
  }

  return -1;
}

export const repeatedStringMatch = pipe(checkConstraints, main);

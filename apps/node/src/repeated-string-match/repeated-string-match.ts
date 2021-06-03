import { compose } from '@ads/utils';

export type Input = [string, string];
export type Output = number;

function checkConstraints(...[a, b]: Input): void {
  if (!(1 <= a.length) || !(a.length <= Math.pow(10, 4))) {
    throw new Error('1 <= a.length <= 10^4');
  }

  if (!(1 <= b.length) || !(b.length <= Math.pow(10, 4))) {
    throw new Error('1 <= b.length <= 10^4');
  }

  const re = new RegExp('[a-z]');
  if (!re.test(a) || !re.test(b)) {
    throw new Error('a and b consist of lower-case English letters');
  }
}

/*
    Repeated String Match
*/
function main(...[a, b]: Input): Output {
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

export const repeatedStringMatch = compose<Input, Output>(
  checkConstraints,
  main
);

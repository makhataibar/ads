import * as yup from 'yup';
import { pipe } from 'rxjs';

export type Input = string;
export type Output = string;

// TODO: change functions name from checkConstraints to validate
function validate(input: Input): Input {
  return yup
    .string()
    .defined()
    .min(1)
    .max(1000)
    .matches(/[a-z]/)
    .validateSync(input);
}

function main(s: Input): Output {
  let output = '';

  for (let i = 0; i < s.length; i++) {
    if (output.includes(s[i])) {
      continue;
    }

    while (
      output[output.length - 1] > s[i] &&
      s.substring(i).includes(output[output.length - 1])
    ) {
      output = output.substring(0, output.length - 1);
    }

    output += s[i];
  }

  return output;
}

export const smallestSubsequence = pipe(validate, main);

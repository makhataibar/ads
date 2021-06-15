import { flow } from 'lodash';
import * as yup from 'yup';

export type Input = { haystack: string; needle: string };
export type Output = number;

function checkConstraints(input: Input): Input {
  return yup
    .object({
      haystack: yup
        .string()
        .min(0)
        .max(5 * Math.pow(10, 4))
        .matches(/[a-z]/, { excludeEmptyString: true })
        .defined(),
      needle: yup
        .string()
        .min(0)
        .max(5 * Math.pow(10, 4))
        .matches(/[a-z]/, { excludeEmptyString: true })
        .defined(),
    })
    .validateSync(input);
}

function main({ haystack, needle }: Input): Output {
  return haystack.indexOf(needle);
}

export const strStr: (input: Input) => Output = flow(checkConstraints, main);

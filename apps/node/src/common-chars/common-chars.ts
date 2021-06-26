import * as yup from 'yup';
import { intersection, pipe } from '@ads/utils';

export type Input = string[];
export type Output = string[];

function checkConstraints(input: Input): Input {
  return yup
    .array()
    .of(yup.string().defined().matches(/[a-z]/).min(1).max(100))
    .defined()
    .min(1)
    .max(100)
    .validateSync(input);
}

function main(words: Input): Output {
  return words.reduce<string[]>((previousValue, currentValue, currentIndex) => {
    if (currentIndex === 0) {
      return currentValue.split('');
    }

    return intersection(previousValue, currentValue.split(''));
  }, []);
}

export const commonChars = pipe<Input, Output>(checkConstraints, main);

import { pipe } from 'rxjs';
import * as yup from 'yup';

export interface Input {
  text: string;
  brokenLetters: string;
}
export type Output = number;

/**
 * Constraints:
 *
 * 1 <= text.length <= 104
 * 0 <= brokenLetters.length <= 26
 * text consists of words separated by a single space without any leading or trailing spaces.
 * Each word only consists of lowercase English letters.
 * brokenLetters consists of distinct lowercase English letters.
 */
function checkConstraints(input: Input): Input {
  return yup
    .object({
      text: yup
        .string()
        .defined()
        .min(1)
        .max(104)
        .lowercase()
        .trim()
        .matches(/[a-z]/),
      brokenLetters: yup.string().min(0).max(26).defined().matches(/[a-z]/),
    })
    .strict(true)
    .validateSync(input);
}

function main({ text, brokenLetters }: Input): Output {
  const words = text.split(' ');

  return words.reduce((acc, word) => {
    const hasBrokenLetter: boolean = word
      .split('')
      .some((letter) => brokenLetters.includes(letter));
    if (hasBrokenLetter) {
      return acc - 1;
    }

    return acc;
  }, words.length);
}

export const maximumNumberOfWordsYouCanType = pipe(checkConstraints, main);

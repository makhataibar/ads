import * as yup from 'yup';
import { pipe } from 'rxjs';

export type Input = { tokens: number[]; power: number };
export type Output = number;

function checkConstraints(input: Input): Input {
  return yup
    .object({
      tokens: yup
        .array()
        .of(yup.number().defined().min(0).max(Math.pow(10, 4)))
        .defined()
        .min(0)
        .max(1000),
      power: yup.number().defined().min(0).max(Math.pow(10, 4)),
    })
    .defined()
    .validateSync(input);
}

function main({ tokens, power }: Input): Output {
  tokens.sort((a, b) => a - b);

  let score = 0;

  while (tokens.length !== 0) {
    if (power >= tokens[0]) {
      const smallestToken = tokens.shift();
      if (smallestToken === undefined) {
        break;
      }

      power -= smallestToken;
      score++;
    } else if (score >= 1 && tokens.length > 1) {
      const biggestToken = tokens.pop();
      if (biggestToken === undefined) {
        break;
      }

      power += biggestToken;
      score--;
    } else {
      break;
    }
  }

  return score;
}

export const bagOfTokensScore = pipe(checkConstraints, main);

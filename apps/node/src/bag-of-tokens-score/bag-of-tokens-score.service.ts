import { Injectable } from '@nestjs/common';
import { bagOfTokensScore, Input } from './bag-of-tokens-score';

@Injectable()
export class BagOfTokensScoreService {
  run = (input: Input) => bagOfTokensScore(input);
}

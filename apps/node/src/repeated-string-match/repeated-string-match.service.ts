import { Injectable } from '@nestjs/common';
import { Input, repeatedStringMatch } from './repeated-string-match';

@Injectable()
export class RepeatedStringMatchService {
  run = (input: Input) => repeatedStringMatch(input);
}

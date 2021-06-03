import { Injectable } from '@nestjs/common';
import { Input, Output, repeatedStringMatch } from './repeated-string-match';

@Injectable()
export class RepeatedStringMatchService {
  run(...args: Input): Output {
    return repeatedStringMatch(...args);
  }
}

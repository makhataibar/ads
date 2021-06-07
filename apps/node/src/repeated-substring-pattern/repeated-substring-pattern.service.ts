import { Injectable } from '@nestjs/common';
import { Output } from '../is-sum-equal/is-sum-equal';
import { Input, repeatedSubstringPattern } from './repeated-substring-pattern';

@Injectable()
export class RepeatedSubstringPatternService {
  run(arg: Input): Output {
    return repeatedSubstringPattern(arg);
  }
}

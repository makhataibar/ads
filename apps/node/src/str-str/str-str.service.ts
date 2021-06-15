import { Injectable } from '@nestjs/common';
import { Input, Output, strStr } from './str-str';

@Injectable()
export class StrStrService {
  run(input: Input): Output {
    return strStr(input);
  }
}

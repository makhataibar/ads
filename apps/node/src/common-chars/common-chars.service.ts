import { Injectable } from '@nestjs/common';
import { commonChars, Input } from './common-chars';

@Injectable()
export class CommonCharsService {
  run = (input: Input) => commonChars(input);
}

import { Injectable } from '@nestjs/common';
import { Input, isSumEqual } from './is-sum-equal';

@Injectable()
export class IsSumEqualService {
  run = (input: Input) => isSumEqual(input);
}

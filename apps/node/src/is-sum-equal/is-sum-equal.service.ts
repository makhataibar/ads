import { Injectable } from '@nestjs/common';
import { Input, isSumEqual, Output } from './is-sum-equal';

@Injectable()
export class IsSumEqualService {
  run(...args: Input): Output {
    return isSumEqual(...args);
  }
}

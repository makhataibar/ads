import { Injectable } from '@nestjs/common';
import { Input, sortByBits } from './sort-by-bits';

@Injectable()
export class SortByBitsService {
  run = (input: Input) => sortByBits(input);
}

import { Injectable } from '@nestjs/common';
import { Input, relativeSortArray } from './relative-sort-array';

@Injectable()
export class RelativeSortArrayService {
  run = (input: Input) => relativeSortArray(input);
}

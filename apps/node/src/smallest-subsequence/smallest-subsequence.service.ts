import { Injectable } from '@nestjs/common';
import { Input, smallestSubsequence } from './smallest-subsequence';

@Injectable()
export class SmallestSubsequenceService {
  run = (input: Input) => smallestSubsequence(input);
}

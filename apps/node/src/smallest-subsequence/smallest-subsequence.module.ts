import { Module } from '@nestjs/common';
import { SmallestSubsequenceService } from './smallest-subsequence.service';

@Module({
  providers: [SmallestSubsequenceService]
})
export class SmallestSubsequenceModule {}

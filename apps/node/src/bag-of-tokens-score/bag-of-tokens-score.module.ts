import { Module } from '@nestjs/common';
import { BagOfTokensScoreService } from './bag-of-tokens-score.service';

@Module({
  providers: [BagOfTokensScoreService]
})
export class BagOfTokensScoreModule {}

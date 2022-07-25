import { Module } from '@nestjs/common';
import { MinimumAbsoluteDifferenceService } from './minimum-absolute-difference.service';

@Module({
  providers: [MinimumAbsoluteDifferenceService],
})
export class MinimumAbsoluteDifferenceModule {}

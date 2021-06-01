import { Module } from '@nestjs/common';
import { IsSumEqualService } from './is-sum-equal.service';

@Module({
  providers: [IsSumEqualService]
})
export class IsSumEqualModule {}

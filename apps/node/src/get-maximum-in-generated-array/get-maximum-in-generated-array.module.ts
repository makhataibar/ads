import { Module } from '@nestjs/common';
import { GetMaximumInGeneratedArrayService } from './get-maximum-in-generated-array.service';

@Module({
  providers: [GetMaximumInGeneratedArrayService],
})
export class GetMaximumInGeneratedArrayModule {}

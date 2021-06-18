import { Module } from '@nestjs/common';
import { SumOfUniqueService } from './sum-of-unique.service';

@Module({
  providers: [SumOfUniqueService]
})
export class SumOfUniqueModule {}

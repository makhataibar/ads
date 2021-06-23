import { Module } from '@nestjs/common';
import { SortByBitsService } from './sort-by-bits.service';

@Module({
  providers: [SortByBitsService]
})
export class SortByBitsModule {}

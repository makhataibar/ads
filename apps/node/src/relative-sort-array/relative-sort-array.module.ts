import { Module } from '@nestjs/common';
import { RelativeSortArrayService } from './relative-sort-array.service';

@Module({
  providers: [RelativeSortArrayService]
})
export class RelativeSortArrayModule {}

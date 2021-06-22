import { Module } from '@nestjs/common';
import { RemoveDuplicatesService } from './remove-duplicates.service';

@Module({
  providers: [RemoveDuplicatesService]
})
export class RemoveDuplicatesModule {}

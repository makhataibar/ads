import { Module } from '@nestjs/common';
import { RemoveElementService } from './remove-element.service';

@Module({
  providers: [RemoveElementService]
})
export class RemoveElementModule {}

import { Module } from '@nestjs/common';
import { IntersectionService } from './intersection.service';

@Module({
  providers: [IntersectionService]
})
export class IntersectionModule {}

import { Module } from '@nestjs/common';
import { FindRotationService } from './find-rotation.service';

@Module({
  providers: [FindRotationService]
})
export class FindRotationModule {}

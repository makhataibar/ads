import { Module } from '@nestjs/common';
import { RotateService } from './rotate.service';

@Module({
  providers: [RotateService]
})
export class RotateModule {}

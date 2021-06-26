import { Module } from '@nestjs/common';
import { CommonCharsService } from './common-chars.service';

@Module({
  providers: [CommonCharsService]
})
export class CommonCharsModule {}

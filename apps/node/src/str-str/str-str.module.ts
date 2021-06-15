import { Module } from '@nestjs/common';
import { StrStrService } from './str-str.service';

@Module({
  providers: [StrStrService],
})
export class StrStrModule {}

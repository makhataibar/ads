import { Module } from '@nestjs/common';
import { RepeatedStringMatchService } from './repeated-string-match.service';

@Module({
  providers: [RepeatedStringMatchService]
})
export class RepeatedStringMatchModule {}

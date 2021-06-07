import { Module } from '@nestjs/common';
import { RepeatedSubstringPatternService } from './repeated-substring-pattern.service';

@Module({
  providers: [RepeatedSubstringPatternService]
})
export class RepeatedSubstringPatternModule {}

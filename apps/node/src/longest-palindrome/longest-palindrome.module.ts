import { Module } from '@nestjs/common';
import { LongestPalindromeService } from './longest-palindrome.service';

@Module({
  providers: [LongestPalindromeService]
})
export class LongestPalindromeModule {}

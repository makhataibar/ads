import { Module } from '@nestjs/common';
import { ShortestPalindromeService } from './shortest-palindrome.service';

@Module({
  providers: [ShortestPalindromeService]
})
export class ShortestPalindromeModule {}

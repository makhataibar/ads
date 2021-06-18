import { Injectable } from '@nestjs/common';
import { Input, longestPalindrome, Output } from './longest-palindrome';

@Injectable()
export class LongestPalindromeService {
  run = (input: Input): Output => longestPalindrome(input);
}

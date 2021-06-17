import { Injectable } from '@nestjs/common';
import { Input, shortestPalindrome } from './shortest-palindrome';

@Injectable()
export class ShortestPalindromeService {
  run = (input: Input) => shortestPalindrome(input);
}

import { Injectable } from '@nestjs/common';
import {
  Input,
  maximumProductOfThreeNumbers,
} from './maximum-product-of-three-numbers';

@Injectable()
export class MaximumProductOfThreeNumbersService {
  run = (input: Input) => maximumProductOfThreeNumbers(input);
}

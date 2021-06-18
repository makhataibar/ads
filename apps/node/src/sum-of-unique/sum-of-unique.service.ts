import { Injectable } from '@nestjs/common';
import { Input, Output, sumOfUnique } from './sum-of-unique';

@Injectable()
export class SumOfUniqueService {
  run = (input: Input): Output => sumOfUnique(input);
}

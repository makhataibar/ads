import { Injectable } from '@nestjs/common';
import { Input, maximumUnits } from './maximum-units';

@Injectable()
export class MaximumUnitsService {
  run = (input: Input) => maximumUnits(input);
}

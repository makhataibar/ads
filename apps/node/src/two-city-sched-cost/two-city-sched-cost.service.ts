import { Injectable } from '@nestjs/common';
import { Input, twoCitySchedCost } from './two-city-sched-cost';

@Injectable()
export class TwoCitySchedCostService {
  run = (input: Input) => twoCitySchedCost(input);
}

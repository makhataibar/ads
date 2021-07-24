import { Module } from '@nestjs/common';
import { TwoCitySchedCostService } from './two-city-sched-cost.service';

@Module({
  providers: [TwoCitySchedCostService]
})
export class TwoCitySchedCostModule {}

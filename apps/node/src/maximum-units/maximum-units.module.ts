import { Module } from '@nestjs/common';
import { MaximumUnitsService } from './maximum-units.service';

@Module({
  providers: [MaximumUnitsService]
})
export class MaximumUnitsModule {}

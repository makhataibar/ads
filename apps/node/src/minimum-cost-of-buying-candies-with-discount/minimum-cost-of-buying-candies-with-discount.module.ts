import { Module } from '@nestjs/common';
import { MinimumCostOfBuyingCandiesWithDiscountService } from './minimum-cost-of-buying-candies-with-discount.service';

@Module({
  providers: [MinimumCostOfBuyingCandiesWithDiscountService],
})
export class MinimumCostOfBuyingCandiesWithDiscountModule {}

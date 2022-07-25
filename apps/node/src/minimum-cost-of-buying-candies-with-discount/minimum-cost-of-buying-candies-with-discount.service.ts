import { Injectable } from '@nestjs/common';
import { minimumCost } from './minimum-cost-of-buying-candies-with-discount';

@Injectable()
export class MinimumCostOfBuyingCandiesWithDiscountService {
  run = minimumCost;
}

import { Module } from '@nestjs/common';
import { MaximumProductOfThreeNumbersService } from './maximum-product-of-three-numbers.service';

@Module({
  providers: [MaximumProductOfThreeNumbersService],
})
export class MaximumProductOfThreeNumbersModule {}

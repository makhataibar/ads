import { Module } from '@nestjs/common';
import { MaximumNumberOfWordsYouCanTypeService } from './maximum-number-of-words-you-can-type.service';

@Module({
  providers: [MaximumNumberOfWordsYouCanTypeService],
})
export class MaximumNumberOfWordsYouCanTypeModule {}

import { Injectable } from '@nestjs/common';
import { getMaximumGenerated } from './get-maximum-in-generated-array';

@Injectable()
export class GetMaximumInGeneratedArrayService {
  run = getMaximumGenerated;
}

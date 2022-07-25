import { Injectable } from '@nestjs/common';
import { minimumAbsDifference } from './minimum-absolute-difference';

@Injectable()
export class MinimumAbsoluteDifferenceService {
  run = minimumAbsDifference;
}

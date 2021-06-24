import { Injectable } from '@nestjs/common';
import { Input, intersection } from './intersection';

@Injectable()
export class IntersectionService {
  run = (input: Input) => intersection(input);
}

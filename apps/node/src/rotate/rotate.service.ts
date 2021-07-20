import { Injectable } from '@nestjs/common';
import { Input, rotate } from './rotate';

@Injectable()
export class RotateService {
  run = (input: Input) => rotate(input);
}

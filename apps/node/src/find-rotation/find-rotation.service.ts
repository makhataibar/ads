import { Injectable } from '@nestjs/common';
import { findRotation, Input } from './find-rotation';

@Injectable()
export class FindRotationService {
  run = (input: Input) => findRotation(input);
}

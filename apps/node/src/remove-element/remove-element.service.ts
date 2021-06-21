import { Injectable } from '@nestjs/common';
import { Input, removeElement } from './remove-element';

@Injectable()
export class RemoveElementService {
  run = (input: Input) => removeElement(input);
}

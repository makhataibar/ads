import { Injectable } from '@nestjs/common';
import { Input, removeDuplicates } from './remove-duplicates';

@Injectable()
export class RemoveDuplicatesService {
  run = (input: Input) => removeDuplicates(input);
}

import { Injectable } from '@nestjs/common';
import {
  Input,
  maximumNumberOfWordsYouCanType,
} from './maximum-number-of-words-you-can-type';

@Injectable()
export class MaximumNumberOfWordsYouCanTypeService {
  run = (input: Input) => maximumNumberOfWordsYouCanType(input);
}

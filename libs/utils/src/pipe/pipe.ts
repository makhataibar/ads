import { flow } from 'lodash';

export const pipe = <Input, Output>(
  checkConstraints: (input: Input) => Input,
  main: (input: Input) => Output
) => flow(checkConstraints, main);

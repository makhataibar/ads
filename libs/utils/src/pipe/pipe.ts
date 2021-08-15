import { flow } from 'lodash';

// TODO: replace to rxjs/pipe
export const pipe = <Input, Output>(
  checkConstraints: (input: Input) => Input,
  main: (input: Input) => Output
) => flow(checkConstraints, main);

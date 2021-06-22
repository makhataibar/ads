import { pipe } from './pipe';

describe('pipe', () => {
  it('should work', () => {
    type Input = number[];
    type Output = number;

    const input: Input = [1, 1, 2];
    const output: Output = 2;

    const checkConstraints = jest.fn(() => input);
    const main = jest.fn(() => output);

    expect(pipe<Input, Output>(checkConstraints, main)(input)).toEqual(output);
  });
});

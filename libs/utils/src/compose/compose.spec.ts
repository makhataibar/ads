import { compose } from './compose';

describe('compose', () => {
  it('should work', () => {
    const input1 = Math.random();
    const input2 = Math.random();
    type Input = Parameters<
      (param1: typeof input1, param2: typeof input2) => void
    >;

    const checkConstraintsFunc = jest.fn();
    const output = Math.random();
    const mainFunc = jest.fn(() => output);

    expect(
      compose<Input, typeof output>(checkConstraintsFunc, mainFunc)(
        input1,
        input2
      )
    ).toEqual(output);
  });
});

import { Random } from './random';

describe('random faker', () => {
  it('array', function () {
    const mapFn = () => 10;
    expect(Random.array({ of: mapFn })).toStrictEqual(
      Array.from(Array(10), mapFn)
    );
  });
});

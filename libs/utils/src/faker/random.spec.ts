import { Random } from './random';

describe('random faker', () => {
  it('array', function () {
    const mapFn = () => 10;
    expect(Random.array({ of: mapFn })).toStrictEqual(
      Array.from(Array(10), mapFn)
    );
  });

  describe('number', function () {
    it('min', function () {
      const num = Random.number();
      expect(Random.number({ min: num })).toBeGreaterThanOrEqual(num);
    });

    it('max', function () {
      const num = Random.number();
      expect(Random.number({ max: num })).toBeLessThanOrEqual(num);

      const negativeNum = -1000;
      expect(Random.number({ max: negativeNum })).toBeLessThanOrEqual(
        negativeNum
      );
    });

    it('excludes', function () {
      const nums = Random.array({ of: Random.number });
      expect(Random.number({ excludes: nums })).not.toContain(nums);
    });

    it('isEven', function () {
      const evenNum = Random.number({ isEven: true });
      expect(evenNum % 2 === 0).toBeTruthy();
    });

    it('isOdd', function () {
      const oddNum = Random.number({ isOdd: true });
      expect(oddNum % 2 !== 0).toBeTruthy();
    });
  });
});

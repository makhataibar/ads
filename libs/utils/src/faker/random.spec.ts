import { Random, RandomStringOptions } from './random';

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

  describe('string', () => {
    it('default length', function () {
      expect(Random.string()).toHaveLength(10);
    });

    it('length', function () {
      expect(Random.string({ length: 0 })).toHaveLength(0);

      const num = Random.number();
      expect(Random.string({ length: num })).toHaveLength(num);
    });

    it('pattern', function () {
      const patterns: RegExp[] = [/[a-z]/, /[A-Z]/, /[а-я]/, /[А-Я]/, /[0-9]/];

      patterns.forEach((pattern) => {
        expect(Random.string({ pattern })).toMatch(pattern);
      });
    });

    it('length & pattern', function () {
      const options: {
        option: RandomStringOptions;
        result: RegExp | string;
      }[] = [
        {
          option: {
            length: 0,
            pattern: /[a-z]/,
          },
          result: '',
        },
        {
          option: {
            length: Random.number(),
            pattern: /[A-Z]/,
          },
          result: /[A-Z]/,
        },
        {
          option: {
            length: Random.number(),
            pattern: /[а-я]/,
          },
          result: /[а-я]/,
        },
        {
          option: {
            length: Random.number(),
            pattern: /[А-Я]/,
          },
          result: /[А-Я]/,
        },
        {
          option: {
            length: Random.number(),
            pattern: /[0-9]/,
          },
          result: /[0-9]/,
        },
      ];

      options.forEach(({ option, result }) => {
        expect(Random.string(option)).toMatch(result);
      });
    });
  });
});

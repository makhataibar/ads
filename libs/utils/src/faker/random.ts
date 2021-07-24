import { isUndefined } from 'lodash';
import { datatype } from 'faker';

export class Random {
  /**
   *
   * @param length
   * @param of
   * @param isUniq
   */
  static array<T>({ length = 10, of, isUniq }: RandomArrayOptions<T>): T[] {
    if (!isUndefined(isUniq)) {
      if (isUniq) {
        const uniqArray: T[] = [];

        while (uniqArray.length !== length) {
          const el = of();

          if (!uniqArray.includes(el)) {
            uniqArray.push(el);
          }
        }

        return uniqArray;
      }

      const repeatableEl = of();
      return Array.from(Array(length), () => repeatableEl);
    }

    return Array.from(Array(length), () => of());
  }

  static number(options?: RandomNumberOptions): number {
    function getNum() {
      let num = datatype.number({
        min:
          options?.min === undefined && options?.max !== undefined
            ? options.max - 1000
            : options?.min,
        max: options?.max,
      });

      if (options?.isEven && num % 2 !== 0) {
        num = Math.floor(num / 2) * 2;
      }

      if (options?.isOdd && num % 2 === 0) {
        num = getNum();
      }

      return num;
    }

    if (options?.excludes && options.excludes.length > 0) {
      let num = getNum();

      while (options.excludes.includes(num)) {
        num = getNum();
      }

      return num;
    }

    return getNum();
  }
}

interface RandomNumberOptions {
  min?: number;
  max?: number;
  excludes?: number[];
  isEven?: boolean;
  isOdd?: boolean;
}

interface RandomArrayOptions<T> {
  of: () => T;
  length?: number;
  isUniq?: boolean;
}

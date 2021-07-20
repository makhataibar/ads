import { isUndefined } from 'lodash';

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
      if (options?.min && !options.max) {
        const min = Math.ceil(options.min);
        return Math.floor(Math.random() * 10) + min;
      }

      if (options?.max && !options.min) {
        return options.max - Math.random();
      }

      if (options?.min && options.max) {
        return Math.random() * (options.max - options.min) + options.min;
      }

      return Math.random();
    }

    if (options?.excludes && options.excludes.length > 0) {
      let num = getNum();

      while (options.excludes.includes(num)) {
        num = getNum();
      }

      return num;
    } else {
      return getNum();
    }
  }
}

interface RandomNumberOptions {
  min?: number;
  max?: number;
  excludes?: number[];
  int?: boolean;
}

interface RandomArrayOptions<T> {
  of: () => T;
  length?: number;
  isUniq?: boolean;
}

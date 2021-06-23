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
    if (options?.min && !options?.max) {
      return Math.random() + options?.min;
    }

    if (options?.max && !options?.min) {
      return options?.max - Math.random();
    }

    if (options?.min && options?.max) {
      return Math.random() * (options?.max - options?.min) + options?.min;
    }

    return Math.random();
  }
}

interface RandomNumberOptions {
  min?: number;
  max?: number;
}

interface RandomArrayOptions<T> {
  of: () => T;
  length?: number;
  isUniq?: boolean;
}

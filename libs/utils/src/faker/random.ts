import { isUndefined } from 'lodash';
import { faker } from '@faker-js/faker';
import * as RandExp from 'randexp';

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
      let num = faker.datatype.number({
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

  static string({ length = 10, pattern }: RandomStringOptions = {}): string {
    if (pattern) {
      const regExp = new RegExp(`${pattern.source}{${length}}`);
      const randExp = new RandExp(regExp);
      randExp.defaultRange.add(0, 65535);

      return randExp.gen();
    }

    return faker.datatype.string(length);
  }
}

export interface RandomStringOptions {
  length?: number;
  pattern?: RegExp;
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

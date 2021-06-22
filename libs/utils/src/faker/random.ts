export class Random {
  /**
   *
   * @param length
   * @param of
   */
  static array<T>({ length = 10, of }: RandomArrayOptions<T>): T[] {
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
  length?: number;
  of: () => T;
}

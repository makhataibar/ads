export class Random {
  /**
   *
   * @param length
   * @param of
   */
  static array<T>({ length = 10, of }: RandomArrayOptions<T>): T[] {
    return Array.from(Array(length), () => of());
  }
}

interface RandomArrayOptions<T> {
  length?: number;
  of: () => T;
}

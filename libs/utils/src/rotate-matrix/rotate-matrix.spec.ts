import { rotateMatrix } from './rotate-matrix';

describe('rotateMatrix', () => {
  it('Example 1', () => {
    expect(
      rotateMatrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toStrictEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  it('Example 2', () => {
    expect(
      rotateMatrix([
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
      ])
    ).toStrictEqual([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]);
  });

  it('Example 3', () => {
    expect(rotateMatrix([[1]])).toStrictEqual([[1]]);
  });

  it('Example 4', () => {
    expect(
      rotateMatrix([
        [1, 2],
        [3, 4],
      ])
    ).toStrictEqual([
      [3, 1],
      [4, 2],
    ]);
  });
});

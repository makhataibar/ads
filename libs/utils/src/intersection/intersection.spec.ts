import { intersection } from './intersection';

describe('intersection', () => {
  it('array of numbers', () => {
    const data: { input: number[][]; output: number[] }[] = [
      {
        input: [
          [1, 2, 2, 1],
          [2, 2],
        ],
        output: [2, 2],
      },
      {
        input: [
          [4, 9, 5],
          [9, 4, 9, 8, 4],
        ],
        output: [4, 9],
      },
      {
        input: [[1, 2, 2, 1], [2]],
        output: [2],
      },
      {
        input: [
          [1, 2],
          [1, 1],
        ],
        output: [1],
      },
      {
        input: [
          [3, 1, 2],
          [1, 1],
        ],
        output: [1],
      },
    ];

    data.forEach(({ input: [arr1, arr2], output }) => {
      expect(intersection(arr1, arr2)).toStrictEqual(output);
    });
  });

  it('array of string', () => {
    const data: { input: string[][]; output: string[] }[] = [
      {
        input: ['label'.split(''), 'roller'.split('')],
        output: ['l', 'e', 'l'],
      },
      {
        input: ['lock'.split(''), 'cook'.split('')],
        output: ['o', 'c', 'k'],
      },
    ];

    data.forEach(({ input: [arr1, arr2], output }) => {
      expect(intersection(arr1, arr2)).toStrictEqual(output);
    });
  });
});

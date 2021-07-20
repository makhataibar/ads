import { Test, TestingModule } from '@nestjs/testing';
import { RotateService } from './rotate.service';
import { Input } from './rotate';
import { Random } from '@ads/utils';

describe('RotateService', () => {
  let service: RotateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RotateService],
    }).compile();

    service = module.get<RotateService>(RotateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', () => {
    const matrix: Input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    service.run(matrix);
    expect(matrix).toStrictEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  it('Example 2', () => {
    const matrix: Input = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ];
    service.run(matrix);
    expect(matrix).toStrictEqual([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]);
  });

  it('Example 3', () => {
    const matrix: Input = [[1]];
    service.run(matrix);
    expect(matrix).toStrictEqual([[1]]);
  });

  it('Example 4', () => {
    const matrix: Input = [
      [1, 2],
      [3, 4],
    ];
    service.run(matrix);
    expect(matrix).toStrictEqual([
      [3, 1],
      [4, 2],
    ]);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      Random.array({
        of: () => Random.array({ of: Random.number }),
        length: 0,
      }),
      Random.array({
        of: () => Random.array({ of: Random.number }),
        length: Random.number({ min: 21 }),
      }),
      Random.array({
        of: () => Random.array({ of: Random.number, length: 0 }),
      }),
      Random.array({
        of: () =>
          Random.array({
            of: Random.number,
            length: Random.number({ min: 21 }),
          }),
      }),
      Random.array({
        of: () =>
          Random.array({
            of: () => Random.number({ max: -1000 }),
          }),
      }),
      Random.array({
        of: () =>
          Random.array({
            of: () => Random.number({ min: 1000 }),
          }),
      }),
    ];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

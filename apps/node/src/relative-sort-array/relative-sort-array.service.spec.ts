import { Test, TestingModule } from '@nestjs/testing';
import { RelativeSortArrayService } from './relative-sort-array.service';
import { Input } from './relative-sort-array';
import { Random } from '@ads/utils';

describe('RelativeSortArrayService', () => {
  let service: RelativeSortArrayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelativeSortArrayService],
    }).compile();

    service = module.get<RelativeSortArrayService>(RelativeSortArrayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', () => {
    expect(
      service.run({
        arr1: [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
        arr2: [2, 1, 4, 3, 9, 6],
      })
    ).toStrictEqual([2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]);
  });

  it('Example 2', () => {
    expect(
      service.run({
        arr1: [28, 6, 22, 8, 44, 17],
        arr2: [22, 28, 8, 6],
      })
    ).toStrictEqual([22, 28, 8, 6, 17, 44]);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      { arr1: [], arr2: Random.array({ of: Random.number }) },
      { arr1: Random.array({ of: Random.number }), arr2: [] },
      {
        arr1: Random.array({ of: Random.number, length: 1001 }),
        arr2: Random.array({ of: Random.number }),
      },
      {
        arr1: Random.array({ of: Random.number }),
        arr2: Random.array({ of: Random.number, length: 1001 }),
      },
      {
        arr1: Random.array({ of: () => Random.number({ max: -1 }) }),
        arr2: Random.array({ of: Random.number }),
      },
      {
        arr1: Random.array({ of: Random.number }),
        arr2: Random.array({ of: () => Random.number({ max: -1 }) }),
      },
      {
        arr1: Random.array({ of: () => Random.number({ min: 1001 }) }),
        arr2: Random.array({ of: Random.number }),
      },
      {
        arr1: Random.array({ of: Random.number }),
        arr2: Random.array({ of: () => Random.number({ min: 1001 }) }),
      },
      {
        arr1: Random.array({ of: Random.number }),
        arr2: Random.array({ of: Random.number, isUniq: false }),
      },
      {
        arr1: [1, 2, 3],
        arr2: [0, 1, 2],
      },
    ];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

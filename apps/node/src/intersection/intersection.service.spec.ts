import { Test, TestingModule } from '@nestjs/testing';
import { IntersectionService } from './intersection.service';
import { Input } from './intersection';
import { Random } from '@ads/utils';

describe('IntersectionService', () => {
  let service: IntersectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntersectionService],
    }).compile();

    service = module.get<IntersectionService>(IntersectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', () => {
    expect(service.run({ nums1: [1, 2, 2, 1], nums2: [2, 2] })).toStrictEqual([
      2,
      2,
    ]);
  });

  it('Example 2', () => {
    expect(
      service.run({ nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4] })
    ).toStrictEqual(expect.arrayContaining([9, 4]));
  });

  it('Example 3', () => {
    expect(service.run({ nums1: [1, 2, 2, 1], nums2: [2] })).toStrictEqual([2]);
  });

  it('Example 4', () => {
    expect(service.run({ nums1: [1, 2], nums2: [1, 1] })).toStrictEqual([1]);
  });

  it('Example  5', () => {
    expect(service.run({ nums1: [3, 1, 2], nums2: [1, 1] })).toStrictEqual([1]);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      { nums1: [], nums2: Random.array({ of: Random.number }) },
      { nums1: Random.array({ of: Random.number }), nums2: [] },
      {
        nums1: Random.array({ of: Random.number }),
        nums2: Random.array({ of: Random.number, length: 1001 }),
      },
      {
        nums1: Random.array({ of: Random.number, length: 1001 }),
        nums2: Random.array({ of: Random.number }),
      },
      {
        nums1: Random.array({ of: () => Random.number({ max: -1 }) }),
        nums2: Random.array({ of: Random.number }),
      },
      {
        nums1: Random.array({ of: () => Random.number({ min: 1001 }) }),
        nums2: Random.array({ of: Random.number }),
      },
      {
        nums1: Random.array({ of: Random.number }),
        nums2: Random.array({ of: () => Random.number({ max: -1 }) }),
      },
      {
        nums1: Random.array({ of: Random.number }),
        nums2: Random.array({ of: () => Random.number({ min: 1001 }) }),
      },
    ];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

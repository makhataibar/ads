import { Test, TestingModule } from '@nestjs/testing';
import { SortByBitsService } from './sort-by-bits.service';
import { Input } from './sort-by-bits';
import { Random } from '@ads/utils';

describe('SortByBitsService', () => {
  let service: SortByBitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SortByBitsService],
    }).compile();

    service = module.get<SortByBitsService>(SortByBitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', () => {
    expect(service.run([0, 1, 2, 3, 4, 5, 6, 7, 8])).toStrictEqual([
      0,
      1,
      2,
      4,
      8,
      3,
      5,
      6,
      7,
    ]);
  });

  it('Example 2', () => {
    expect(
      service.run([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1])
    ).toStrictEqual([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]);
  });

  it('Example 3', () => {
    expect(service.run([10000, 10000])).toStrictEqual([10000, 10000]);
  });

  it('Example 4', () => {
    expect(service.run([2, 3, 5, 7, 11, 13, 17, 19])).toStrictEqual([
      2,
      3,
      5,
      17,
      7,
      11,
      13,
      19,
    ]);
  });

  it('Example 5', () => {
    expect(service.run([10, 100, 1000, 10000])).toStrictEqual([
      10,
      100,
      10000,
      1000,
    ]);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      [],
      Random.array({ of: Random.number, length: 501 }),
      Random.array({ of: () => Random.number({ max: -1 }) }),
      Random.array({ of: () => Random.number({ min: Math.pow(10, 4) + 1 }) }),
    ];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

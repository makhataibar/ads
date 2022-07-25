import { Test, TestingModule } from '@nestjs/testing';
import { MinimumAbsoluteDifferenceService } from './minimum-absolute-difference.service';
import { Input } from './minimum-absolute-difference';
import { Random } from '@ads/utils';
import { faker } from '@faker-js/faker';

describe('MinimumAbsoluteDifferenceService', () => {
  let service: MinimumAbsoluteDifferenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MinimumAbsoluteDifferenceService],
    }).compile();

    service = module.get<MinimumAbsoluteDifferenceService>(
      MinimumAbsoluteDifferenceService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', () => {
    expect(service.run([4, 2, 1, 3])).toStrictEqual([
      [1, 2],
      [2, 3],
      [3, 4],
    ]);
  });

  it('Example 2', () => {
    expect(service.run([1, 3, 6, 10, 15])).toStrictEqual([[1, 3]]);
  });

  it('Example 3', () => {
    expect(service.run([3, 8, -10, 23, 19, -4, -14, 27])).toStrictEqual([
      [-14, -10],
      [19, 23],
      [23, 27],
    ]);
  });

  it('Example 4', () => {
    expect(service.run([40, 11, 26, 27, -20])).toStrictEqual([[26, 27]]);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      Random.array({
        length: 1,
        of: () =>
          faker.datatype.number({
            min: -Math.pow(10, 6),
            max: Math.pow(10, 6),
          }),
      }),
      Random.array({
        length: Math.pow(10, 5) + 1,
        of: () =>
          faker.datatype.number({
            min: -Math.pow(10, 6),
            max: Math.pow(10, 6),
          }),
      }),
      Random.array({
        length: faker.datatype.number({ min: 2, max: Math.pow(10, 5) }),
        of: () => Random.number({ max: -Math.pow(10, 6) }),
      }),
      Random.array({
        length: faker.datatype.number({ min: 2, max: Math.pow(10, 5) }),
        of: () => faker.datatype.number({ min: Math.pow(10, 6) }),
      }),
    ];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

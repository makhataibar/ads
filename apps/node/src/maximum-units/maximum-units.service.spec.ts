import { Test, TestingModule } from '@nestjs/testing';
import { MaximumUnitsService } from './maximum-units.service';
import { Input } from './maximum-units';
import { Random } from '@ads/utils';

describe('MaximumUnitsService', () => {
  let service: MaximumUnitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaximumUnitsService],
    }).compile();

    service = module.get<MaximumUnitsService>(MaximumUnitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', () => {
    expect(
      service.run({
        boxTypes: [
          [1, 3],
          [2, 2],
          [3, 1],
        ],
        truckSize: 4,
      })
    ).toBe(8);
  });

  it('Example 2', () => {
    expect(
      service.run({
        boxTypes: [
          [5, 10],
          [2, 5],
          [4, 7],
          [3, 9],
        ],
        truckSize: 10,
      })
    ).toBe(91);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      { boxTypes: [], truckSize: Random.number() },
      {
        boxTypes: Random.array({
          of: () => Random.array({ of: Random.number, length: 2 }),
          length: 1001,
        }),
        truckSize: Random.number(),
      },
      {
        boxTypes: Random.array({
          of: () =>
            Random.array({ length: 2, of: () => Random.number({ max: 0 }) }),
        }),
        truckSize: Random.number(),
      },
      {
        boxTypes: Random.array({
          of: () =>
            Random.array({ length: 2, of: () => Random.number({ min: 1001 }) }),
        }),
        truckSize: Random.number(),
      },
      {
        boxTypes: Random.array({
          of: () => Random.array({ of: () => Random.number(), length: 2 }),
        }),
        truckSize: Random.number({ max: 0 }),
      },
      {
        boxTypes: Random.array({
          of: () => Random.array({ of: () => Random.number(), length: 2 }),
        }),
        truckSize: Random.number({ min: Math.pow(10, 6) + 1 }),
      },
    ];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

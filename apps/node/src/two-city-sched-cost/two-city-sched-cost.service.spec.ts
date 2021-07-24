import { Test, TestingModule } from '@nestjs/testing';
import { TwoCitySchedCostService } from './two-city-sched-cost.service';
import { Input } from './two-city-sched-cost';
import { Random } from '@ads/utils';

describe('TwoCitySchedCostService', () => {
  let service: TwoCitySchedCostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TwoCitySchedCostService],
    }).compile();

    service = module.get<TwoCitySchedCostService>(TwoCitySchedCostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', function () {
    expect(
      service.run([
        [10, 20],
        [30, 200],
        [400, 50],
        [30, 20],
      ])
    ).toBe(110);
  });

  it('Example 2', function () {
    expect(
      service.run([
        [259, 770],
        [448, 54],
        [926, 667],
        [184, 139],
        [840, 118],
        [577, 469],
      ])
    ).toBe(1859);
  });

  it('Example 3', function () {
    expect(
      service.run([
        [515, 563],
        [451, 713],
        [537, 709],
        [343, 819],
        [855, 779],
        [457, 60],
        [650, 359],
        [631, 42],
      ])
    ).toBe(3086);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      Random.array({
        of: () => Random.array({ of: Random.number }),
        length: 0,
      }),
      Random.array({
        of: () =>
          Random.array({
            of: Random.number,
          }),
        length: Random.number({ isEven: true, min: 101 }),
      }),
      Random.array({
        of: () =>
          Random.array({
            of: Random.number,
          }),
        length: Random.number({ isOdd: true }),
      }),
      Random.array({
        of: () =>
          Random.array({
            of: () => Random.number({ max: 0 }),
          }),
      }),
      Random.array({
        of: () =>
          Random.array({
            of: () => Random.number({ min: 1001 }),
          }),
      }),
    ];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

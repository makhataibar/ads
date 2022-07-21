import { Test, TestingModule } from '@nestjs/testing';
import { MaximumProductOfThreeNumbersService } from './maximum-product-of-three-numbers.service';
import { Input } from './maximum-product-of-three-numbers';
import { Random } from '@ads/utils';

describe('MaximumProductOfThreeNumbersService', () => {
  let service: MaximumProductOfThreeNumbersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaximumProductOfThreeNumbersService],
    }).compile();

    service = module.get<MaximumProductOfThreeNumbersService>(
      MaximumProductOfThreeNumbersService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', () => {
    expect(service.run([1, 2, 3])).toBe(6);
  });

  it('Example 2', () => {
    expect(service.run([1, 2, 3, 4])).toBe(24);
  });

  it('Example 3', () => {
    expect(service.run([-1, -2, -3])).toBe(-6);
  });

  it('Example 4', () => {
    expect(service.run([-100, -98, -1, 2, 3, 4])).toBe(39200);
  });

  it('Example 5', () => {
    expect(service.run([-100, -2, -3, 1])).toBe(300);
  });

  it('Example 6', () => {
    expect(service.run([-8, -7, -2, 10, 20])).toBe(1120);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      Random.array({
        of: () => Random.number({ min: -1000, max: 1000 }),
        length: 2,
      }),
      Random.array({
        of: () => Random.number({ min: -1000, max: 1000 }),
        length: Math.pow(10, 4) + 1,
      }),
      Random.array({
        of: () => Random.number({ max: -1001 }),
      }),
      Random.array({
        of: () => Random.number({ min: 1001 }),
      }),
    ];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

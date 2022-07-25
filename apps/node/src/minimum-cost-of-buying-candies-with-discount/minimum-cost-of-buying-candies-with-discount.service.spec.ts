import { Test, TestingModule } from '@nestjs/testing';
import { MinimumCostOfBuyingCandiesWithDiscountService } from './minimum-cost-of-buying-candies-with-discount.service';
import { Input } from './minimum-cost-of-buying-candies-with-discount';
import { Random } from '@ads/utils';
import { faker } from '@faker-js/faker';

describe('MinimumCostOfBuyingCandiesWithDiscountService', () => {
  let service: MinimumCostOfBuyingCandiesWithDiscountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MinimumCostOfBuyingCandiesWithDiscountService],
    }).compile();

    service = module.get<MinimumCostOfBuyingCandiesWithDiscountService>(
      MinimumCostOfBuyingCandiesWithDiscountService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', () => {
    expect(service.run([1, 2, 3])).toBe(5);
  });

  it('Example 2', () => {
    expect(service.run([6, 5, 7, 9, 2, 2])).toBe(23);
  });

  it('Example 3', () => {
    expect(service.run([5, 5])).toBe(10);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      [],
      Random.array({
        length: faker.datatype.number({ min: 100 }),
        of: faker.datatype.number,
      }),
      Random.array({
        length: faker.datatype.number({ min: 1, max: 100 }),
        of: () => faker.datatype.number({ max: 1 }),
      }),
      Random.array({
        length: faker.datatype.number({ min: 1, max: 100 }),
        of: () => faker.datatype.number({ min: 100 }),
      }),
    ];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

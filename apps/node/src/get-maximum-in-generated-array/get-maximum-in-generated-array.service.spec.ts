import { Test, TestingModule } from '@nestjs/testing';
import { GetMaximumInGeneratedArrayService } from './get-maximum-in-generated-array.service';
import { Input } from './get-maximum-in-generated-array';
import { faker } from '@faker-js/faker';
import { Random } from '@ads/utils';

describe('GetMaximumInGeneratedArrayService', () => {
  let service: GetMaximumInGeneratedArrayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetMaximumInGeneratedArrayService],
    }).compile();

    service = module.get<GetMaximumInGeneratedArrayService>(
      GetMaximumInGeneratedArrayService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', () => {
    expect(service.run(7)).toBe(3);
  });

  it('Example 2', () => {
    expect(service.run(2)).toBe(1);
  });

  it('Example 3', () => {
    expect(service.run(3)).toBe(2);
  });

  it('Example 4', () => {
    expect(service.run(0)).toBe(0);
  });

  it('Example 5', () => {
    expect(service.run(1)).toBe(1);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      Random.number({ max: 0 }),
      faker.datatype.number({ min: 101 }),
    ];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

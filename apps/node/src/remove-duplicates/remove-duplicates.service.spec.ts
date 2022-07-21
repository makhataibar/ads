import { Test, TestingModule } from '@nestjs/testing';
import { RemoveDuplicatesService } from './remove-duplicates.service';
import { Input } from './remove-duplicates';
import { Random } from '@ads/utils';

describe('RemoveDuplicatesService', () => {
  let service: RemoveDuplicatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveDuplicatesService],
    }).compile();

    service = module.get<RemoveDuplicatesService>(RemoveDuplicatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', () => {
    const input = [1, 1, 2];
    expect(service.run(input)).toEqual(2);
    expect(input).toEqual([1, 2]);
  });

  it('Example 2', () => {
    const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    expect(service.run(input)).toEqual(5);
    expect(input).toEqual([0, 1, 2, 3, 4]);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      Random.array({
        length: 3 * Math.pow(10, 4) + 1,
        of: Random.number,
      }),
      Random.array({ of: () => Random.number({ max: -Math.pow(10, 4) - 1 }) }),
      Random.array({ of: () => Random.number({ min: Math.pow(10, 4) + 1 }) }),
      [4, 2, 1, 4, 5, 6],
    ];

    inputs.forEach((input) => {
      expect(() => {
        service.run(input);
      }).toThrowError();
    });
  });
});

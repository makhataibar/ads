import { Test, TestingModule } from '@nestjs/testing';
import { RemoveElementService } from './remove-element.service';
import { Input } from './remove-element';
import { datatype } from 'faker';
import { Random } from '@ads/utils';

describe('RemoveElementService', () => {
  let service: RemoveElementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveElementService],
    }).compile();

    service = module.get<RemoveElementService>(RemoveElementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', function () {
    const input: Input = { nums: [3, 2, 2, 3], val: 3 };

    expect(service.run(input)).toBe(2);
    expect(input.nums).toEqual(expect.arrayContaining([2, 2]));
  });

  it('Example 2', function () {
    const input: Input = { nums: [0, 1, 2, 2, 3, 0, 4, 2], val: 2 };

    expect(service.run(input)).toBe(5);
    expect(input.nums).toEqual(expect.arrayContaining([0, 1, 4, 0, 3]));
  });

  it('Constraints', function () {
    const inputs: Input[] = [
      {
        nums: Random.array({ of: datatype.number, length: 1000 }),
        val: datatype.number(),
      },
      {
        nums: Random.array({ of: () => datatype.number({ max: -1 }) }),
        val: datatype.number(),
      },
      {
        nums: Random.array({ of: () => datatype.number({ min: 51 }) }),
        val: datatype.number(),
      },
      {
        nums: Random.array({ of: datatype.number }),
        val: -1,
      },
      {
        nums: Random.array({ of: datatype.number }),
        val: 101,
      },
    ];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

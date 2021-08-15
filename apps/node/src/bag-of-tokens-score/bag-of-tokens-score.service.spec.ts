import { Test, TestingModule } from '@nestjs/testing';
import { BagOfTokensScoreService } from './bag-of-tokens-score.service';
import { Input } from './bag-of-tokens-score';
import { Random } from '@ads/utils';

describe('BagOfTokensScoreService', () => {
  let service: BagOfTokensScoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BagOfTokensScoreService],
    }).compile();

    service = module.get<BagOfTokensScoreService>(BagOfTokensScoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', function () {
    expect(service.run({ tokens: [100], power: 50 })).toBe(0);
  });

  it('Example 2', function () {
    expect(service.run({ tokens: [100, 200], power: 150 })).toBe(1);
  });

  it('Example 3', function () {
    expect(service.run({ tokens: [100, 200, 300, 400], power: 200 })).toBe(2);
  });

  it('Example 3', function () {
    expect(service.run({ tokens: [26], power: 51 })).toBe(1);
  });

  it('Constraints', function () {
    const inputs: Input[] = [
      {
        tokens: Random.array({
          of: Random.number,
          length: Random.number({ min: 1001 }),
        }),
        power: Random.number(),
      },
      {
        tokens: Random.array({
          of: () => Random.number({ max: -1 }),
        }),
        power: Random.number(),
      },
      {
        tokens: Random.array({
          of: () => Random.number({ min: Math.pow(10, 4) + 1 }),
        }),
        power: Random.number(),
      },
      {
        tokens: Random.array({ of: Random.number }),
        power: Random.number({ max: -1 }),
      },
      {
        tokens: Random.array({ of: Random.number }),
        power: Random.number({ min: Math.pow(10, 4) + 1 }),
      },
    ];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

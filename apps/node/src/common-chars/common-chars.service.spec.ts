import { Test, TestingModule } from '@nestjs/testing';
import { CommonCharsService } from './common-chars.service';
import { Input } from './common-chars';
import { Random } from '@ads/utils';
import { random } from 'faker';
import { lorem as loremRu } from 'faker/locale/ru';

describe('CommonCharsService', () => {
  let service: CommonCharsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonCharsService],
    }).compile();

    service = module.get<CommonCharsService>(CommonCharsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', () => {
    expect(service.run(['bella', 'label', 'roller'])).toStrictEqual([
      'e',
      'l',
      'l',
    ]);
  });

  it('Example 2', () => {
    expect(service.run(['cool', 'lock', 'cook'])).toStrictEqual(['c', 'o']);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      [],
      Random.array({ of: random.alpha, length: 101 }),
      Random.array({ of: () => '' }),
      Random.array({ of: () => random.alpha({ count: 101 }) }),
      Random.array({ of: loremRu.word }),
    ];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

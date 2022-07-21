import { Test, TestingModule } from '@nestjs/testing';
import { RepeatedSubstringPatternService } from './repeated-substring-pattern.service';
import { faker } from '@faker-js/faker/locale/ru';
import { Input } from './repeated-substring-pattern';

describe('RepeatedSubstringPatternService', () => {
  let service: RepeatedSubstringPatternService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepeatedSubstringPatternService],
    }).compile();

    service = module.get<RepeatedSubstringPatternService>(
      RepeatedSubstringPatternService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', () => {
    expect(service.run('abab')).toBe(true);
  });

  it('Example 2', () => {
    expect(service.run('aba')).toBe(false);
  });

  it('Example 3', () => {
    expect(service.run('abcabcabcabc')).toBe(true);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      '',
      faker.random.alpha({ count: Math.pow(10, 4) + 1 }),
      faker.lorem.word(),
    ];

    inputs.forEach((input) => {
      expect(() => {
        service.run(input);
      }).toThrowError();
    });
  });
});

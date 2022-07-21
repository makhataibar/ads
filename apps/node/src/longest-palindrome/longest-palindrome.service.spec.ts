import { Test, TestingModule } from '@nestjs/testing';
import { LongestPalindromeService } from './longest-palindrome.service';
import { Input } from './longest-palindrome';
import { faker } from '@faker-js/faker/locale/ru';

describe('LongestPalindromeService', () => {
  let service: LongestPalindromeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LongestPalindromeService],
    }).compile();

    service = module.get<LongestPalindromeService>(LongestPalindromeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', () => {
    expect(service.run('babad')).toBe('bab');
  });

  it('Example 2', () => {
    expect(service.run('cbbd')).toBe('bb');
  });

  it('Example 3', () => {
    expect(service.run('a')).toBe('a');
  });

  it('Example 4', () => {
    expect(service.run('ac')).toBe('a');
  });

  it('Example 5', () => {
    expect(service.run('asaqwerrewq')).toBe('qwerrewq');
  });

  it('Example 6', () => {
    expect(service.run('babaddtattarrattatddetartrateedredividerb')).toBe(
      'ddtattarrattatdd'
    );
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      '',
      faker.datatype.string(10000),
      faker.lorem.word(),
    ];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

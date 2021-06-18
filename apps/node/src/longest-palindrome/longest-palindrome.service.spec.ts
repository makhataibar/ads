import { Test, TestingModule } from '@nestjs/testing';
import { LongestPalindromeService } from './longest-palindrome.service';
import { Input } from './longest-palindrome';
import { datatype } from 'faker';
import { lorem as loremRu } from 'faker/locale/ru';

describe('LongestPalindromeService', () => {
  let service: LongestPalindromeService;
  let startTime: number;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LongestPalindromeService],
    }).compile();

    service = module.get<LongestPalindromeService>(LongestPalindromeService);

    startTime = performance.now();
  });

  afterEach(() => {
    const resultTime = performance.now() - startTime;
    console.log(resultTime, 'ms');
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
    const inputs: Input[] = ['', datatype.string(10000), loremRu.word()];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

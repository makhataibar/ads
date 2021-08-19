import { Test, TestingModule } from '@nestjs/testing';
import { SmallestSubsequenceService } from './smallest-subsequence.service';
import { Input } from './smallest-subsequence';
import { Random } from '@ads/utils';

describe('SmallestSubsequenceService', () => {
  let service: SmallestSubsequenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmallestSubsequenceService],
    }).compile();

    service = module.get<SmallestSubsequenceService>(
      SmallestSubsequenceService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', function () {
    expect(service.run('bcabc')).toBe('abc');
  });

  it('Example 2', function () {
    expect(service.run('cbacdcbc')).toBe('acdb');
  });

  it('Example 3', function () {
    expect(service.run('ecbacba')).toBe('eacb');
  });

  it('Constraints', function () {
    const inputs: Input[] = [
      '',
      Random.string({ length: 1001 }),
      Random.string({ pattern: /[A-Z]/ }),
    ];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

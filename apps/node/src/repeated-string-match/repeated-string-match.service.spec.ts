import { Test, TestingModule } from '@nestjs/testing';
import type { Input } from './repeated-string-match';
import { RepeatedStringMatchService } from './repeated-string-match.service';
import { faker } from '@faker-js/faker';

describe('RepeatedStringMatchService', () => {
  let service: RepeatedStringMatchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepeatedStringMatchService],
    }).compile();

    service = module.get<RepeatedStringMatchService>(
      RepeatedStringMatchService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', () => {
    expect(service.run({ a: 'abcd', b: 'cdabcdab' })).toBe(3);
  });

  it('Example 2', () => {
    expect(service.run({ a: 'a', b: 'aa' })).toBe(2);
  });

  it('Example 3', () => {
    expect(service.run({ a: 'a', b: 'a' })).toBe(1);
  });

  it('Example 4', () => {
    expect(service.run({ a: 'abc', b: 'wxyz' })).toBe(-1);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      { a: '', b: '' },
      { a: faker.random.alpha({ count: Math.pow(10, 4) + 1 }), b: '' },
      { a: 'a', b: '' },
      { a: 'a', b: faker.random.alpha({ count: Math.pow(10, 4) + 1 }) },
      { a: 'A', b: '' },
      { a: '', b: 'Я' },
    ];

    inputs.forEach((input) => {
      expect(() => {
        service.run(input);
      }).toThrowError();
    });
  });
});

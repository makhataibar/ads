import { Test, TestingModule } from '@nestjs/testing';
import type { Input, Output } from './repeated-string-match';
import { RepeatedStringMatchService } from './repeated-string-match.service';
import { random } from 'faker';

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
    const input: Input = ['abcd', 'cdabcdab'];
    const output: Output = 3;

    expect(service.run(...input)).toBe(output);
  });

  it('Example 2', () => {
    const input: Input = ['a', 'aa'];
    const output: Output = 2;

    expect(service.run(...input)).toBe(output);
  });

  it('Example 3', () => {
    const input: Input = ['a', 'a'];
    const output: Output = 1;

    expect(service.run(...input)).toBe(output);
  });

  it('Example 4', () => {
    const input: Input = ['abc', 'wxyz'];
    const output: Output = -1;

    expect(service.run(...input)).toBe(output);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      ['', ''],
      [random.alpha({ count: Math.pow(10, 4) + 1 }), ''],
      ['a', ''],
      ['a', random.alpha({ count: Math.pow(10, 4) + 1 })],
      ['A', ''],
      ['', 'Я'],
    ];

    inputs.forEach((input) => {
      expect(() => {
        service.run(...input);
      }).toThrowError();
    });
  });
});

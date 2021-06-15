import { Test, TestingModule } from '@nestjs/testing';
import { StrStrService } from './str-str.service';
import { Input, Output } from './str-str';
import { random } from 'faker';
import { lorem as ruLorem } from 'faker/locale/ru';

describe('StrStrService', () => {
  let service: StrStrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StrStrService],
    }).compile();

    service = module.get<StrStrService>(StrStrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', () => {
    const input: Input = { haystack: 'hello', needle: 'll' };
    const output: Output = 2;

    expect(service.run(input)).toEqual(output);
  });

  it('Example 2', () => {
    const input: Input = { haystack: 'aaaaa', needle: 'bba' };
    const output: Output = -1;

    expect(service.run(input)).toEqual(output);
  });

  it('Example 3', () => {
    const input: Input = { haystack: '', needle: '' };
    const output: Output = 0;

    expect(service.run(input)).toEqual(output);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      {
        haystack: random.alpha({ count: 5 * Math.pow(10, 4) + 1 }),
        needle: random.alpha(),
      },
      {
        haystack: random.alpha(),
        needle: random.alpha({ count: 5 * Math.pow(10, 4) + 1 }),
      },
      { haystack: ruLorem.word(), needle: random.alpha() },
      { haystack: random.alpha(), needle: ruLorem.word() },
    ];

    inputs.forEach((input) => {
      expect(() => {
        service.run(input);
      }).toThrowError();
    });
  });
});

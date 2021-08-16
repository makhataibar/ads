import { Test, TestingModule } from '@nestjs/testing';
import { IsSumEqualService } from './is-sum-equal.service';
import { Input } from './is-sum-equal';

describe('IsSumEqualService', () => {
  let service: IsSumEqualService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IsSumEqualService],
    }).compile();

    service = module.get<IsSumEqualService>(IsSumEqualService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', () => {
    expect(
      service.run({ firstWord: 'acb', secondWord: 'cba', targetWord: 'cdb' })
    ).toBe(true);
  });

  it('Example 2', () => {
    expect(
      service.run({ firstWord: 'aaa', secondWord: 'a', targetWord: 'aab' })
    ).toBe(false);
  });

  it('Example 3', () => {
    expect(
      service.run({ firstWord: 'aaa', secondWord: 'a', targetWord: 'aaaa' })
    ).toBe(true);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      { firstWord: '', secondWord: 'a', targetWord: 'aa' },
      { firstWord: 'a', secondWord: '', targetWord: 'aa' },
      { firstWord: 'a', secondWord: '', targetWord: 'aa' },
      {
        firstWord: 'a',
        secondWord: 'a',
        targetWord: Array.from(Array(9), () => 'a').join(''),
      },
      { firstWord: 'A', secondWord: 'a', targetWord: 'aa' },
      { firstWord: 'A', secondWord: 'k', targetWord: 'aa' },
      { firstWord: 'a', secondWord: 'a', targetWord: 'l' },
    ];

    inputs.forEach((input) => {
      expect(() => {
        service.run(input);
      }).toThrowError();
    });
  });
});

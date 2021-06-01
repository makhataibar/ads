import { Test, TestingModule } from '@nestjs/testing';
import { IsSumEqualService } from './is-sum-equal.service';
import { Input, Output} from './is-sum-equal'

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

  it('Example 1', ()=>{
    const input: Input = ["acb","cba", "cdb"];
    const output: Output = true;

    expect(service.run(...input)).toBe(output);
  })

  it('Example 2', ()=>{
    const input: Input = ["aaa","a", "aab"];
    const output: Output = false;

    expect(service.run(...input)).toBe(output);
  })

  it('Example 3', ()=>{
    const input: Input = ["aaa","a", "aaaa"];
    const output: Output = true;

    expect(service.run(...input)).toBe(output);
  })

  it('Constraints', ()=>{
    const inputs: Input[] = [
      ["", "a", "aa"],
      ['a', '', 'aa'],
      ['a', 'a', Array.from(Array(9), ()=>'a').join('')],
      ['A', 'a', 'aa'],
      ['a', 'k', 'aa'],
      ['a', 'a', 'l']
    ];

    for (const input of inputs){
      expect(()=>{service.run(...input)}).toThrowError();
    }
  })
});
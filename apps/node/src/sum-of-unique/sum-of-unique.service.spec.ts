import { Test, TestingModule } from '@nestjs/testing';
import { SumOfUniqueService } from './sum-of-unique.service';
import { Input } from './sum-of-unique';

describe('SumOfUniqueService', () => {
  let service: SumOfUniqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SumOfUniqueService],
    }).compile();

    service = module.get<SumOfUniqueService>(SumOfUniqueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', () => {
    expect(service.run([1, 2, 3, 2])).toBe(4);
  });

  it('Example 2', () => {
    expect(service.run([1, 1, 1, 1, 1])).toBe(0);
  });

  it('Example 3', () => {
    expect(service.run([1, 2, 3, 4, 5])).toBe(15);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      [],
      Array.from(Array(1000), () => Math.random()),
      [0],
      [101],
    ];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

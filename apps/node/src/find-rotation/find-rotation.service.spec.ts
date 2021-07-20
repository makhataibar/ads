import { Test, TestingModule } from '@nestjs/testing';
import { FindRotationService } from './find-rotation.service';
import { Input } from './find-rotation';
import { Random } from '@ads/utils';

describe('FindRotationService', () => {
  let service: FindRotationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindRotationService],
    }).compile();

    service = module.get<FindRotationService>(FindRotationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Example 1', () => {
    expect(
      service.run({
        mat: [
          [0, 1],
          [1, 0],
        ],
        target: [
          [1, 0],
          [0, 1],
        ],
      })
    ).toBe(true);
  });

  it('Example 2', () => {
    expect(
      service.run({
        mat: [
          [0, 1],
          [1, 1],
        ],
        target: [
          [1, 0],
          [0, 1],
        ],
      })
    ).toBe(false);
  });

  it('Example 3', () => {
    expect(
      service.run({
        mat: [
          [0, 0, 0],
          [0, 1, 0],
          [1, 1, 1],
        ],
        target: [
          [1, 1, 1],
          [0, 1, 0],
          [0, 0, 0],
        ],
      })
    ).toBe(true);
  });

  it('Example 4', () => {
    expect(
      service.run({
        mat: [
          [0, 0, 0],
          [0, 0, 1],
          [0, 0, 1],
        ],
        target: [
          [0, 0, 0],
          [0, 0, 1],
          [0, 0, 1],
        ],
      })
    ).toBe(true);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      {
        mat: Random.array({
          of: () => Random.array({ of: Random.number }),
          length: 11,
        }),
        target: Random.array({ of: () => Random.array({ of: Random.number }) }),
      },
      {
        mat: Random.array({
          of: () => Random.array({ of: Random.number }),
        }),
        target: Random.array({
          of: () => Random.array({ of: Random.number }),
          length: 11,
        }),
      },
      {
        mat: Random.array({
          of: () => Random.array({ of: Random.number, length: 9 }),
        }),
        target: Random.array({
          of: () => Random.array({ of: Random.number }),
        }),
      },
      {
        mat: Random.array({
          of: () => Random.array({ of: Random.number }),
        }),
        target: Random.array({
          of: () => Random.array({ of: Random.number, length: 9 }),
        }),
      },
      {
        mat: Random.array({
          of: () => [],
        }),
        target: Random.array({
          of: () => Random.array({ of: Random.number }),
        }),
      },
      {
        mat: Random.array({
          of: () => Random.array({ of: Random.number }),
        }),
        target: Random.array({
          of: () => [],
        }),
      },
      {
        mat: Random.array({
          of: () =>
            Random.array({
              of: Random.number,
              length: Random.number({ min: 11 }),
            }),
        }),
        target: Random.array({
          of: () => Random.array({ of: Random.number }),
        }),
      },
      {
        mat: Random.array({
          of: () => Random.array({ of: Random.number }),
        }),
        target: Random.array({
          of: () =>
            Random.array({
              of: Random.number,
              length: Random.number({ min: 11 }),
            }),
        }),
      },
      {
        mat: Random.array({
          of: () =>
            Random.array({ of: () => Random.number({ excludes: [0, 1] }) }),
        }),
        target: Random.array({
          of: () => Random.array({ of: Random.number }),
        }),
      },
      {
        mat: Random.array({
          of: () => Random.array({ of: Random.number }),
        }),
        target: Random.array({
          of: () =>
            Random.array({ of: () => Random.number({ excludes: [0, 1] }) }),
        }),
      },
    ];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

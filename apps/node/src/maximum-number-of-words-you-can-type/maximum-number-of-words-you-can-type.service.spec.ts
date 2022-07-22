import { Test, TestingModule } from '@nestjs/testing';
import { MaximumNumberOfWordsYouCanTypeService } from './maximum-number-of-words-you-can-type.service';
import { Input } from './maximum-number-of-words-you-can-type';
import { faker } from '@faker-js/faker';
import { faker as ruFaker } from '@faker-js/faker/locale/ru';

describe('MaximumNumberOfWordsYouCanTypeService', () => {
  let service: MaximumNumberOfWordsYouCanTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaximumNumberOfWordsYouCanTypeService],
    }).compile();

    service = module.get<MaximumNumberOfWordsYouCanTypeService>(
      MaximumNumberOfWordsYouCanTypeService
    );
  });

  it('should be defined', () => {
    expect(service.run).toBeDefined();
  });

  it('Example 1', () => {
    expect(
      service.run({
        text: 'hello world',
        brokenLetters: 'ad',
      })
    ).toBe(1);
  });

  it('Example 2', () => {
    expect(
      service.run({
        text: 'leet code',
        brokenLetters: 'lt',
      })
    ).toBe(1);
  });

  it('Example 3', () => {
    expect(
      service.run({
        text: 'leet code',
        brokenLetters: 'e',
      })
    ).toBe(0);
  });

  it('Constraints', () => {
    const inputs: Input[] = [
      {
        text: '',
        brokenLetters: faker.random.alpha(),
      },
      {
        text: faker.random.alpha({ count: 105 }),
        brokenLetters: faker.random.alpha(),
      },
      {
        text: faker.random.alpha(),
        brokenLetters: faker.random.alpha({ count: 27 }),
      },
      {
        text: ' ' + faker.random.alpha(),
        brokenLetters: faker.random.alpha(),
      },
      {
        text: faker.random.alpha() + ' ',
        brokenLetters: faker.random.alpha(),
      },
      {
        text: ruFaker.lorem.word(),
        brokenLetters: faker.random.alpha(),
      },
      {
        text: faker.random.alpha({ casing: 'upper' }),
        brokenLetters: faker.random.alpha(),
      },
      {
        text: faker.random.alpha(),
        brokenLetters: faker.random.alpha({ casing: 'upper' }),
      },
    ];

    inputs.forEach((input) => {
      expect(() => service.run(input)).toThrowError();
    });
  });
});

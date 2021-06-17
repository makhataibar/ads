import { reverseString } from './reverse-string';

describe('reverseString', () => {
  it('should work', function () {
    expect(reverseString('asdf')).toEqual('fdsa');
  });
});

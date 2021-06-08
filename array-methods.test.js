import { map } from './array-methods';

describe('We are creating our own array methods', () => {
  it('We recreate a map method and multiply array eles by 2', () => {
    const arr = [1, 2, 3, , 4];
    const result = map(arr, (arr) => { return arr * 2 });
    expect(result).toEqual([2, 4, 6]);
  });
});
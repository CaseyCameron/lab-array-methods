import {
  map,
  filter
} from './array-methods';

describe('We are creating our own array methods', () => {
  it('We recreate a map method and multiply array eles by 2', () => {
    const arr = [1, 2, 3, , 4];
    const result = map(arr, (arr) => { return arr * 2 });
    expect(result).toEqual([2, 4, 6, NaN, 8]);
    expect(result.length).toEqual(arr.length);
  });

  it.only('We recreate a filter method returns only true values', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const result = filter(arr, (index) => { return (index > 5 ? index : 0); });
    expect(result).toEqual([6, 7]);
  });

});
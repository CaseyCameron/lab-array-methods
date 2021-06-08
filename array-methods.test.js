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

  it.skip('We recreate a filter method that removes words starting with A', () => {
    const arr = ['lassie', 'amanda', 'donny', 'armando'];
    const result = filter(arr, (arr) => {
      if (!item.startsWith('a')) return arr
    });
    expect(result).toEqual(['lassie', 'donny']);
  });

});
import {
  map,
  filter,
  findIndex,
  reduce,
  every
} from './array-methods';

describe('We are creating our own array methods', () => {
  it('We recreate a map method and multiply array eles by 2', () => {
    const arr = [1, 2, 3, , 4];
    const result = map(arr, (arr) => { return arr * 2 });
    expect(result).toEqual([2, 4, 6, NaN, 8]);
    expect(result.length).toEqual(arr.length);
  });

  it('We recreate a filter method returns only true values', () => {
    const arr = [1, 2, , 4, 5, 6, 7];
    const result = filter(arr, (index) => { return (index > 5 ? index : 0); });
    expect(result).toEqual([6, 7]);
  });

  it('We return an index if the element is true', () => {
    const arr = [1, 2, , 4, 5, 6, 7];
    const result = findIndex(arr, (index) => { return (index > 4) });
    expect(result).toEqual(4);
  });

  it.only('We return the reduced value', () => {
    const arr = [1, 2, 4, 5, 6, 7];
    const result = reduce(arr, (acc, item) => { return acc + item; }, 0);
    expect(result).toEqual(25);
  });

  it('We return true if all values are true, false if one value is false', () => {
    const arrTrue = [4, 5, 6, 7];
    const arrFalse = [0, 5, 1];
    const trueResult = every(arrTrue, (index) => { return index > 3; });
    const falseResults = every(arrFalse, (index) => { return index > 3; });
    expect(trueResult).toEqual(true);
    expect(falseResults).toEqual(false);
  });


});
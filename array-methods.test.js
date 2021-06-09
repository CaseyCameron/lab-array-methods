import {
  map,
  filter,
  findIndex,
  reduce,
  every,
  forEach
} from './array-methods';

import { jest } from '@jest/globals';

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

  it('We return the reduced value', () => {
    const arr = [1, 2, , 5, 6, 7];
    const result = reduce(arr, (acc, item) => { return acc + item; }, 0);
    expect(result).toEqual(21);
  });

  it('We return true if all values are true, false if one value is false', () => {
    const arrTrue = [4, , 6, 7];
    const arrFalse = [0, 5, 1];
    const trueResult = every(arrTrue, (index) => { return index > 3; });
    const falseResults = every(arrFalse, (index) => { return index > 3; });
    expect(trueResult).toEqual(true);
    expect(falseResults).toEqual(false);
  });

  it.only('We return undefined with our forEach', () => {
    const arr = [2, 3, , 4];
    const callback = jest.fn((item) => { return item * 2 });
    const result = forEach(arr, callback);

    //result returns undefined as outlined in rubric
    console.log(result);

    //use this to ensure mock fn was call exact num of times
    expect(callback).toHaveBeenCalledTimes(3);

    //ensures the mock fn was called with specific arguments
    //javascript apparently only compares array ids?
    //also, to HaveBeenCalledWith only works for one call at a time...
    expect(callback).toHaveBeenCalledWith(2, expect.any(Number));
    expect(callback).toHaveBeenCalledWith(3, expect.any(Number));
    expect(callback).toHaveBeenCalledWith(4, expect.any(Number));

    //Referencing the mock function jest docs explicitly...
    expect(callback.mock.calls[0][0]).toBe(2);
    expect(callback.mock.results[0].value).toBe(4);

    expect(callback.mock.calls[1][0]).toBe(3);
    expect(callback.mock.results[1].value).toBe(6);
  })

});
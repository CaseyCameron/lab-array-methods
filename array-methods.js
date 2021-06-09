export function map(arr, callback) {
  const mappedArr = [];
  for (let i = 0; i < arr.length; i++) {
    mappedArr[i] = callback(arr[i], i);
  }
  return mappedArr;
};

export function filter(arr, callback) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) filteredArr = [...filteredArr, arr[i]];
  }
  return filteredArr;
}

export function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]))
      return i;
  }
  return -1;
}

export function reduce(arr, callback, initialValue) {
  let acc = initialValue === undefined ? 0 : initialValue;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i])
      acc = callback(acc, arr[i], i);
  }
  return acc;
}

export function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i])
      if (!callback(arr[i])) return false;
  }
  return true;
}
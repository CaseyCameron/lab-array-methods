export function map(arr, callback) {
  const mappedArr = [];
  for (let i = 0; i < arr.length; i++) {
    mappedArr[i] = callback(arr[i], i);
  }
  return mappedArr;
};

export function filter(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    //if (!arr[i].startsWith('a'))
    filteredArr[i] = callback(arr[i], i);
  }
  return filteredArr;
};


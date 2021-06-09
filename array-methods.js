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


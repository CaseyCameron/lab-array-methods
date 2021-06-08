export function map(arr, callback) {
  const mappedArr = [];
  for (let i = 0; i < arr.length; i++) {
    mappedArr[i] = callback(arr[i], i);
  }
  console.log('mapped arr', mappedArr);
  return mappedArr;
};


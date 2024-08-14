// write a function called maxSubarrSum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

const maxSubarrSum = (arr, num) => {
  if (num > arr.length) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) max = temp;
  }
  return max;
};

const res = maxSubarrSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
console.log("RES", res);

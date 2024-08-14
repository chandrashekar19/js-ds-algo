// write a function called maxSubarrSum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

const maxSubarrSum = (arr, num) => {
  // Initialize variables to store the maximum sum and temporary sum
  let maxSum = 0;
  let tempSum = 0;

  // Edge case: if the array length is less than the number of elements to sum, return null

  if (arr.length < num) return null;

  // Calculate the sum of the first 'num' elements
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // Assign the initial maxSum to tempSum
  tempSum = maxSum;
  console.log("TEMP_SUM", tempSum);

  // Slide the window of 'num' elements across the array
  for (let i = num; i < arr.length; i++) {
    // Subtract the element that's sliding out of the window and add the new element
    // console.log("TEMP", tempSum);
    tempSum = tempSum - arr[i - num] + arr[i];
    // console.log("TEMP-SUM", tempSum);

    // Update maxSum if tempSum is greater
    maxSum = Math.max(maxSum, tempSum);
    // console.log("MAX_SUM", maxSum);
  }

  // Return the maximum sum found
  return maxSum;
};

// Example usage: find the maximum sum of 3 consecutive elements in the array
const maxSumResult = maxSubarrSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

console.log("RES", maxSumResult); // Output the result

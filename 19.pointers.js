// Multiple pointers

// Creating pointers or values that correspond to an index in an array  or position and move towards the beginning, end, or middle based on a certain condition.

// very efficient for solving problems with minimal space complexity.

// write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. return an array that includes both values that sum to zero or undefined if a pair does not exist.

// Naive Approach

// Time Complexity O(n^2)
// Space Complexity O(1)

const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

console.log("RESULT", sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log("RESULT1", sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

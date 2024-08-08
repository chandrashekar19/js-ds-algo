// Function to determine if two arrays have the "same" elements, with the elements of the second array being the squares of the elements in the first array
const Same = (arr1, arr2) => {
  // If the lengths of the arrays are not equal, they can't be "same"
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Frequency counters to keep track of the occurrences of elements in both arrays
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // Populate frequencyCounter1 with the frequency of each element in arr1
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    console.log("VAL", frequencyCounter1[val]); // Debug: Print the current value's frequency
  }

  // Populate frequencyCounter2 with the frequency of each element in arr2
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // Compare the frequency of elements in arr1 with the frequency of their squares in arr2
  for (let key in frequencyCounter1) {
    // Check if the square of the key exists in frequencyCounter2
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // Check if the frequency of the square in arr2 matches the frequency of the element in arr1
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  // Debug: Print frequency counters for verification
  console.log("1", frequencyCounter1);
  console.log("2", frequencyCounter2);

  // If all checks pass, return true
  return true;
};

// Test the function with an example
console.log(Same([1, 2, 3, 2], [9, 1, 4, 4])); // Should return true

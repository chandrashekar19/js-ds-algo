//  write a function called same, which takes 2 arrays and returns true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// Naive Approach

const Same = (arr1, arr2) => {
  if (arr1.length != arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIdx = arr2.indexOf(arr1[i] ** 2);
    console.log("CORRECT INDEX", correctIdx);
    if (correctIdx === -1) {
      return false;
    }
    console.log("ARR2", arr2);
    arr2.splice(correctIdx, 1);
  }
  return true;
};

console.log("FREQUENCY", Same([1, 2, 3, 2], [4, 9, 4, 1]));

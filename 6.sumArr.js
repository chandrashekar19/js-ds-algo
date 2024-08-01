const ArrSum = (arr) => {
  let total = 0; // --> One number

  for (let i = 0; i < arr.length; i++) {
    // let i = 0; another nubmer

    total += arr[i];
  }

  return total;
};

const res = ArrSum([1, 2, 4, , 5, 6, 7, 8]);

// O(1) Space

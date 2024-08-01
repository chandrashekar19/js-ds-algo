const DoubleArr = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
};

const result = DoubleArr([9, 8, 7, 6]);

// O(n) Space

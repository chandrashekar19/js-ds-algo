// Suppose we want to write a function that calculates the sum of all numbers from 1  up to and including some number n.

const AddUpto = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};

let t1 = performance.now();
AddUpto(1000000000);
let t2 = performance.now();
console.log(`Call to doSomething took ${t2 - t1} milliseconds.`);

// Number of operations is eventually bounded by  a multiple of n (say, 10n) It requires O(n) time.

// console.log(AddUpto(5), "should be 15");
// console.log(AddUpto(10), "should be 55");

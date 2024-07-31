// Different approach This is the fastest approach
/**
 * Calculates the sum of all numbers from 1 up to and including the given number.
 *
 * @param {number} n - The number up to which the sum is calculated.
 * @return {number} The sum of all numbers from 1 up to and including n.
 */

const AddUpto = (n) => {
  return (n * (n + 1)) / 2;
};

let t1 = performance.now();
AddUpto(1000000000);
let t2 = performance.now();
console.log(`Call to doSomething took ${t2 - t1} milliseconds.`);

// console.log(AddUpto(5), "should be 15");

// It always has 3 operations O(1).

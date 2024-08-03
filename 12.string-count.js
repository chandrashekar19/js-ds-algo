// write a function which takes in a string and returns counts of each character in the string.

/* Inputs 
1. charCount('aaaaa');
{ a: 4 }

2. charCount('hello');
{ h: 1, e: 1, l: 2, o: 1}

3. charCount('Your PIN number is 1234!');
{}

*/
const charCount = (str) => {
  // make an object to return at end
  let res = {};

  //  loop over string for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // console.log("CHAR", char);

    //   if char is a number/letter AND is a key in object, add one to count.
    if (res[char] > 0) {
      // console.log("RES_CHAR", res[char]);
      res[char]++;
    }
    // if char is a nubmer/letter AND not in object, and set value to 1.
    else {
      res[char] = 1;
    }
  }
  //  if character is something else (space, period, etc. ) don't do anything  return an object
  return res;
};

const res = charCount("aaaaa");
const res1 = charCount("hello");
const res2 = charCount("Hi There!");
console.log("CHAR_COUNT", res2);

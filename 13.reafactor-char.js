// Refactor approach

// const charCount1 = (string) => {
//   let obj = {};

//   for (let i = 0; i < string.length; i++) {
//     let char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (obj[char] > 0) {
//         obj[char]++;
//       } else {
//         obj[char] = 1;
//       }
//     }
//   }
//   return obj;
// };

// Refactoring further using for of

const charCount1 = (str) => {
  let obj = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
};

const result = charCount1("chandrashekar");
console.log("RESULT", result);

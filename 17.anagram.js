// Given two strings, write a function that determines if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

const Anagram = (str1, str2) => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};

console.log(Anagram("cinema", "iceman"));
console.log(Anagram(" ", " "));

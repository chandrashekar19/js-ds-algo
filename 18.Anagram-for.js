const Anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    console.log("letter", letter);
    console.log("lookup[letter]", lookup[letter]);
    // if letter exists, increment , otherwise set to 1.

    lookup[letter]
      ? (lookup[letter] = lookup[letter] + 1)
      : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] = lookup[letter] - 1;
    }
  }

  return true;
};

console.log(Anagram("anagrams", "nagramas"));
// console.log(Anagram(" ", " "));

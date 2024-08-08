const Anagram = (str1, str2) => {
  for (let i = 0; i < str1.length; i++) {
    let letter = first[i];

    // if letter exists, increment , otherwise set to 1.

    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] = lookup[letter] - 1;
    }
  }

  return true;
};

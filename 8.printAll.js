const PrintAllPairs = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};

// O(n) operation inside of an  O(n) operation  is O(n)^2.

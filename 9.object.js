let instructor = {
  fName: "Kelly",
  isInstructor: true,
  favNumbers: [1, 2, 3, 4],
};

// we use objects when we don't need order
// when we need fast access / insertion and removal

console.log("KEYS", Object.keys(instructor));
console.log("VALUES", Object.values(instructor));
console.log("ENTRIES", Object.entries(instructor));
console.log("HASOWNPROPERTY", instructor.hasOwnProperty("fName"));

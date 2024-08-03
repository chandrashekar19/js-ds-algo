// Alphanumeic approach

const charCount = (string) => {
  let obj = {};

  for (let char of string) {
    if (Alphanumeic(char)) {
      char = char.toLoweCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
};

const Alphanumeic = (char) => {
  let code = char.chaCodeAt(0);

  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
};

charCodeAt(0);

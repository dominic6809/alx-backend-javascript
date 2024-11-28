function concatArrays(array1, array2, string) {
  // Concatenate array1, array2, and the characters of the string into a new array
  return [...array1, ...array2, ...string];
}

export default concatArrays;

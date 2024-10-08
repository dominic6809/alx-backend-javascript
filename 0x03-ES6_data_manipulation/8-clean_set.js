function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    return '';
  }

  // Use Array.from to convert the set to an array and filter the values
  const filteredValues = Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length)); // Remove the startString from each value

  return filteredValues.join('-');
}

export default cleanSet;

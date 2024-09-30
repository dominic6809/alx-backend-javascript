/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  const index = [];
  for (const item of array) {
    index.push(appendString + item);
  }

  return array;
}

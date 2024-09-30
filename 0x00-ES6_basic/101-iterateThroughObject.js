export default function iterateThroughObject(reportWithIterator) {
  // Spread the iterator into an array and join elements with ' | '
  return [...reportWithIterator].join(' | ');
}

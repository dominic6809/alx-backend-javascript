function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);

  // Create a typed array view (Int8Array) for the buffer
  const int8View = new Int8Array(buffer);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Set the value at the specified position
  int8View[position] = value;

  return buffer;
}

export default createInt8TypedArray;

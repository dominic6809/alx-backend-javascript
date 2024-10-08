// Export a const instance of WeakMap.
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint is a valid object
  if (typeof endpoint !== 'object' || endpoint === null) {
    throw new Error('Invalid endpoint');
  }

  // Get the current count from the weakMap or initialize it to 0
  const currentCount = weakMap.get(endpoint) || 0;

  // Increment the count
  weakMap.set(endpoint, currentCount + 1);

  // Check if the count is greater than or equal to 5
  if (currentCount + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
